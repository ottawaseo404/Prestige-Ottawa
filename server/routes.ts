import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, type SmartMovingLead, packageTypes } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import OpenAI from "openai";

function requireAdmin(req: any, res: Response, next: NextFunction) {
  if (req.session?.isAdmin) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Admin authentication routes
  app.post("/api/admin/login", (req: any, res) => {
    const { username, password } = req.body;
    
    const adminUsername = process.env.ADMIN_USERNAME || "admin";
    const adminPassword = process.env.ADMIN_PASSWORD || "prestigemoving2025";
    
    if (username === adminUsername && password === adminPassword) {
      req.session.isAdmin = true;
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });

  app.post("/api/admin/logout", (req: any, res) => {
    req.session.destroy((err: any) => {
      if (err) {
        res.status(500).json({ message: "Failed to logout" });
      } else {
        res.json({ success: true, message: "Logged out successfully" });
      }
    });
  });

  app.get("/api/admin/check", (req: any, res) => {
    res.json({ isAuthenticated: !!req.session?.isAdmin });
  });

  // Get all bookings
  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getAllBookings();
      res.json(bookings);
    } catch (error: any) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  });

  // Get single booking
  app.get("/api/bookings/:id", async (req, res) => {
    try {
      const booking = await storage.getBooking(req.params.id);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      res.json(booking);
    } catch (error: any) {
      console.error("Error fetching booking:", error);
      res.status(500).json({ message: "Failed to fetch booking" });
    }
  });

  // Create new booking
  app.post("/api/bookings", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertBookingSchema.parse(req.body);

      // Calculate estimated price
      const packageInfo = packageTypes[validatedData.packageType as keyof typeof packageTypes];
      const estimatedPrice = packageInfo.minimumHours * packageInfo.hourlyRate + packageInfo.travelFee;

      // Create booking
      const booking = await storage.createBooking({
        ...validatedData,
        estimatedPrice,
      });

      // Attempt to sync to SmartMoving immediately
      try {
        await syncBookingToSmartMoving(booking.id);
      } catch (syncError) {
        console.error("Failed to sync to SmartMoving:", syncError);
        // Continue even if sync fails - we'll retry later
      }

      res.status(201).json(booking);
    } catch (error: any) {
      console.error("Error creating booking:", error);
      
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      
      res.status(500).json({ message: "Failed to create booking" });
    }
  });

  // Update booking status
  app.patch("/api/bookings/:id/status", async (req, res) => {
    try {
      const { status } = req.body;
      
      if (!status || typeof status !== "string") {
        return res.status(400).json({ message: "Status is required" });
      }

      const booking = await storage.updateBookingStatus(req.params.id, status);
      
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }

      res.json(booking);
    } catch (error: any) {
      console.error("Error updating booking status:", error);
      res.status(500).json({ message: "Failed to update booking status" });
    }
  });

  // Sync single booking to SmartMoving
  app.post("/api/bookings/:id/sync-smartmoving", async (req, res) => {
    try {
      const booking = await storage.getBooking(req.params.id);
      
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }

      if (booking.smartmovingSynced) {
        return res.status(400).json({ message: "Booking already synced to SmartMoving" });
      }

      await syncBookingToSmartMoving(booking.id);
      const updatedBooking = await storage.getBooking(booking.id);
      
      res.json(updatedBooking);
    } catch (error: any) {
      console.error("Error syncing to SmartMoving:", error);
      res.status(500).json({ message: error.message || "Failed to sync to SmartMoving" });
    }
  });

  // Sync all pending bookings to SmartMoving
  app.post("/api/smartmoving/sync-all", async (req, res) => {
    try {
      const bookings = await storage.getAllBookings();
      const pendingBookings = bookings.filter(b => !b.smartmovingSynced);
      
      const results = await Promise.allSettled(
        pendingBookings.map(b => syncBookingToSmartMoving(b.id))
      );

      const successful = results.filter(r => r.status === "fulfilled").length;
      const failed = results.filter(r => r.status === "rejected").length;

      res.json({
        total: pendingBookings.length,
        successful,
        failed,
      });
    } catch (error: any) {
      console.error("Error syncing all bookings:", error);
      res.status(500).json({ message: "Failed to sync bookings" });
    }
  });

  // Get SmartMoving sync status
  app.get("/api/smartmoving/status", async (req, res) => {
    try {
      const bookings = await storage.getAllBookings();
      const synced = bookings.filter(b => b.smartmovingSynced).length;
      const pending = bookings.filter(b => !b.smartmovingSynced).length;

      res.json({
        connected: !!process.env.SMARTMOVING_PROVIDER_KEY && !!process.env.SMARTMOVING_API_KEY,
        syncedCount: synced,
        pendingCount: pending,
        totalCount: bookings.length,
      });
    } catch (error: any) {
      console.error("Error fetching sync status:", error);
      res.status(500).json({ message: "Failed to fetch sync status" });
    }
  });

  // Quick quote submission - sends directly to SmartMoving
  const quoteRequestSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(1, "Phone is required"),
    message: z.string().optional(),
    serviceType: z.string().optional(),
    moveDate: z.string().optional(),
    moveSize: z.string().optional(),
    originCity: z.string().optional(),
    destinationCity: z.string().optional(),
    school: z.string().optional(),
    pianoType: z.string().optional(),
    itemType: z.string().optional(),
  });

  app.post("/api/quote-request", async (req, res) => {
    try {
      const providerKey = process.env.SMARTMOVING_PROVIDER_KEY;
      
      if (!providerKey) {
        console.error("SmartMoving Provider Key not configured");
        return res.status(500).json({ message: "CRM integration not configured" });
      }

      // Validate request body
      const validatedData = quoteRequestSchema.parse(req.body);

      // Parse name into first and last
      const nameParts = validatedData.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      // Build notes from optional fields
      const notesParts: string[] = [];
      if (validatedData.serviceType) notesParts.push(`Service: ${validatedData.serviceType}`);
      if (validatedData.school) notesParts.push(`School: ${validatedData.school}`);
      if (validatedData.pianoType) notesParts.push(`Piano Type: ${validatedData.pianoType}`);
      if (validatedData.itemType) notesParts.push(`Item Type: ${validatedData.itemType}`);
      if (validatedData.message) notesParts.push(`Message: ${validatedData.message}`);
      notesParts.push(`Source: Website Quote Form`);

      // Format for SmartMoving Lead API with all available fields
      const leadData: SmartMovingLead = {
        FirstName: firstName,
        LastName: lastName || 'Customer',
        Email: validatedData.email,
        Phone: validatedData.phone,
        MoveDate: validatedData.moveDate || undefined,
        ServiceType: validatedData.serviceType || "Moving",
        MoveSize: validatedData.moveSize || undefined,
        OriginCity: validatedData.originCity || undefined,
        OriginState: "BC",
        DestinationCity: validatedData.destinationCity || undefined,
        DestinationState: "BC",
        Notes: notesParts.join('\n'),
      };

      console.log("Submitting lead to SmartMoving:", JSON.stringify(leadData, null, 2));

      // Call SmartMoving Lead API
      const url = `https://api.smartmoving.com/api/leads/from-provider/v2?providerKey=${providerKey}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("SmartMoving API error:", response.status, errorText);
        
        // Handle duplicate submission gracefully
        if (response.status === 400 && errorText.includes("already been submitted")) {
          return res.json({ 
            success: true, 
            message: "Your information has been received. We'll be in touch soon!" 
          });
        }
        
        throw new Error(`SmartMoving API error: ${response.status}`);
      }

      const result = await response.json();
      console.log("SmartMoving lead submitted successfully:", result);

      res.json({ 
        success: true, 
        message: "Quote request submitted successfully!",
        leadId: result.id || null
      });
    } catch (error: any) {
      console.error("Error submitting quote request:", error);
      
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      
      res.status(500).json({ message: "Failed to submit quote request. Please call us directly." });
    }
  });

  // SmartMoving Webhook endpoint
  app.post("/api/webhooks/smartmoving", async (req, res) => {
    try {
      const webhookData = req.body;
      console.log("Received SmartMoving webhook:", JSON.stringify(webhookData, null, 2));

      // Extract event type and data
      const { eventType, data } = webhookData;

      if (!eventType || !data) {
        console.error("Invalid webhook payload");
        return res.status(400).json({ message: "Invalid webhook payload" });
      }

      // Handle different event types
      switch (eventType) {
        case "Opportunity Status Changed":
        case "Opportunity Changed":
          await handleOpportunityUpdate(data);
          break;
        
        case "Job Created":
        case "Job Finalized":
        case "Job Closed":
          await handleJobUpdate(data, eventType);
          break;
        
        case "Customer Created":
        case "Customer Updated":
          console.log("Customer event received:", eventType);
          break;
        
        default:
          console.log("Unhandled event type:", eventType);
      }

      res.json({ success: true, message: "Webhook processed" });
    } catch (error: any) {
      console.error("Error processing webhook:", error);
      res.status(500).json({ message: "Failed to process webhook" });
    }
  });

  // Get SmartMoving customers
  app.get("/api/smartmoving/customers", async (req, res) => {
    try {
      const apiKey = process.env.SMARTMOVING_API_KEY;
      
      if (!apiKey) {
        return res.status(400).json({ message: "SmartMoving API Key not configured" });
      }

      const page = parseInt(req.query.page as string) || 1;
      const pageSize = parseInt(req.query.pageSize as string) || 50;

      const url = `https://api.smartmoving.com/api/customers?Page=${page}&PageSize=${pageSize}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("SmartMoving API error:", response.status, errorText);
        throw new Error(`SmartMoving API error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      res.json(data);
    } catch (error: any) {
      console.error("Error fetching customers:", error);
      res.status(500).json({ message: error.message || "Failed to fetch customers" });
    }
  });

  // AI Moving Cost Calculator
  app.post("/api/ai-calculator", async (req, res) => {
    try {
      const openai = new OpenAI({
        apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
        baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
      });

      const { 
        moveType, 
        homeSize, 
        originCity, 
        destinationCity, 
        moveDate,
        hasSpecialItems,
        specialItems,
        needsPacking,
        hasStairs,
        stairFlights
      } = req.body;

      const systemPrompt = `You are a professional moving cost estimator for Prestige Moving Vancouver. 
      
Our pricing structure:
- Premium Package: $155/hour (2 movers + 16-20ft truck), 3 hour minimum + $155 travel fee
- Deluxe Package: $195/hour (3 movers + 26ft truck), 3 hour minimum + $195 travel fee  
- Diamond Package: $315/hour (4 movers + 2 trucks), 3 hour minimum + $315 travel fee

Additional costs:
- Stairs: Add $25-50 per flight
- Packing services: Add $50-150 depending on home size
- Special items (piano, hot tub, pool table): $100-400 each
- Long distance (outside Metro Vancouver): Add $1.50-2.50/km

Estimate realistic hours based on home size:
- Studio/1BR: 2-4 hours
- 2BR: 3-5 hours
- 3BR: 4-7 hours
- 4BR+: 6-10 hours
- House with garage/basement: Add 1-3 hours

Provide estimates in JSON format with these fields:
- recommendedPackage: "Premium" | "Deluxe" | "Diamond"
- estimatedHours: number (range like "4-6")
- estimatedCostLow: number
- estimatedCostHigh: number
- breakdown: array of { item: string, cost: string }
- tips: array of strings (3 helpful tips)
- confidence: "high" | "medium" | "low"
- explanation: string (brief 2-3 sentence explanation)`;

      const userMessage = `Please estimate the moving cost for:
- Move type: ${moveType || 'Residential'}
- Home size: ${homeSize || 'Not specified'}
- From: ${originCity || 'Vancouver area'}
- To: ${destinationCity || 'Vancouver area'}
- Move date: ${moveDate || 'Not specified'}
- Special items: ${hasSpecialItems ? specialItems : 'None'}
- Packing needed: ${needsPacking ? 'Yes' : 'No'}
- Stairs involved: ${hasStairs ? `Yes, ${stairFlights} flights` : 'No'}

Provide a detailed cost estimate in JSON format.`;

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage }
        ],
        response_format: { type: "json_object" },
        temperature: 0.7,
      });

      const content = response.choices[0]?.message?.content;
      if (!content) {
        throw new Error("No response from AI");
      }

      const estimate = JSON.parse(content);
      res.json(estimate);
    } catch (error: any) {
      console.error("AI Calculator error:", error);
      res.status(500).json({ 
        message: "Failed to generate estimate", 
        error: error.message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Helper function to sync booking to SmartMoving
async function syncBookingToSmartMoving(bookingId: string): Promise<void> {
  const providerKey = process.env.SMARTMOVING_PROVIDER_KEY;
  
  if (!providerKey) {
    throw new Error("SmartMoving Provider Key not configured");
  }

  const booking = await storage.getBooking(bookingId);
  if (!booking) {
    throw new Error("Booking not found");
  }

  // Format date as YYYY-MM-DD
  const moveDate = new Date(booking.moveDate);
  const formattedDate = moveDate.toISOString().split('T')[0];

  // Map to SmartMoving lead format
  const leadData: SmartMovingLead = {
    FirstName: booking.firstName,
    LastName: booking.lastName,
    Email: booking.email,
    Phone: booking.phone,
    MoveDate: formattedDate,
    ServiceType: booking.serviceType,
    MoveSize: booking.moveSize,
    OriginStreet: booking.originStreet,
    OriginCity: booking.originCity,
    OriginState: booking.originProvince,
    OriginZip: booking.originPostalCode,
    DestinationStreet: booking.destinationStreet,
    DestinationCity: booking.destinationCity,
    DestinationState: booking.destinationProvince,
    DestinationZip: booking.destinationPostalCode,
    Notes: booking.notes || `Package: ${booking.packageType}. Origin stairs: ${booking.originStairs}. Destination stairs: ${booking.destinationStairs}. Referral: ${booking.referralSource}.`,
  };

  // Call SmartMoving Lead API
  const url = `https://api.smartmoving.com/api/leads/from-provider/v2?providerKey=${providerKey}`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(leadData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`SmartMoving API error: ${response.status} - ${errorText}`);
  }

  // Update booking with sync status
  await storage.updateBookingSmartMovingSync(bookingId, "synced");
}

// Helper function to handle opportunity updates from webhooks
async function handleOpportunityUpdate(data: any): Promise<void> {
  console.log("Processing opportunity update:", data);
  
  // Find booking by SmartMoving ID or email
  const bookings = await storage.getAllBookings();
  const booking = bookings.find(b => 
    b.smartmovingId === data.id || 
    b.email === data.email
  );

  if (!booking) {
    console.log("No matching booking found for opportunity:", data.id);
    return;
  }

  // Map SmartMoving status to our status
  let newStatus = booking.status;
  if (data.status) {
    const statusMap: Record<string, string> = {
      'pending': 'pending',
      'quote sent': 'pending',
      'confirmed': 'confirmed',
      'booked': 'confirmed',
      'completed': 'completed',
      'cancelled': 'cancelled',
      'lost': 'cancelled',
    };
    newStatus = statusMap[data.status.toLowerCase()] || booking.status;
  }

  if (newStatus !== booking.status) {
    console.log(`Updating booking ${booking.id} status from ${booking.status} to ${newStatus}`);
    await storage.updateBookingStatus(booking.id, newStatus);
  }
}

// Helper function to handle job updates from webhooks
async function handleJobUpdate(data: any, eventType: string): Promise<void> {
  console.log("Processing job update:", eventType, data);
  
  // Find booking by SmartMoving ID or customer email
  const bookings = await storage.getAllBookings();
  const booking = bookings.find(b => 
    b.smartmovingId === data.opportunityId || 
    b.email === data.customerEmail
  );

  if (!booking) {
    console.log("No matching booking found for job:", data.id);
    return;
  }

  // Update status based on job event
  let newStatus = booking.status;
  if (eventType === "Job Created" || eventType === "Job Finalized") {
    newStatus = "confirmed";
  } else if (eventType === "Job Closed") {
    newStatus = "completed";
  }

  if (newStatus !== booking.status) {
    console.log(`Updating booking ${booking.id} status from ${booking.status} to ${newStatus}`);
    await storage.updateBookingStatus(booking.id, newStatus);
  }
}
