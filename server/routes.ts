import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, type SmartMovingLead, packageTypes, insertMovingPackageSchema, insertBlogPostSchema, insertBlogCategorySchema, insertHeroVideoSchema, availableVideos, heroVideoPages } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import OpenAI from "openai";
import { generateBlogPost, generateFeaturedImage, generateBlogIdeas } from "./ai-service";

// Helper functions for user agent parsing
function getBrowser(userAgent: string): string {
  if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) return 'Chrome';
  if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Edg')) return 'Edge';
  if (userAgent.includes('Opera') || userAgent.includes('OPR')) return 'Opera';
  if (userAgent.includes('MSIE') || userAgent.includes('Trident')) return 'IE';
  return 'Other';
}

function getOS(userAgent: string): string {
  if (userAgent.includes('Windows')) return 'Windows';
  if (userAgent.includes('Mac OS')) return 'macOS';
  if (userAgent.includes('Linux')) return 'Linux';
  if (userAgent.includes('Android')) return 'Android';
  if (userAgent.includes('iOS') || userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
  return 'Other';
}

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

  // Analytics - Track page view
  app.post("/api/analytics/pageview", async (req, res) => {
    try {
      const { sessionId, page, referrer } = req.body;
      
      if (!sessionId || !page) {
        return res.status(400).json({ message: "sessionId and page are required" });
      }

      // Parse user agent
      const userAgent = req.headers['user-agent'] || '';
      const device = /Mobile|Android|iPhone|iPad/i.test(userAgent) ? 'Mobile' : 'Desktop';
      const browser = getBrowser(userAgent);
      const os = getOS(userAgent);

      // Get IP address
      const ipAddress = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || req.ip || '';

      // Parse referrer to determine source
      let source = 'Direct';
      let medium = 'none';
      if (referrer) {
        if (referrer.includes('google')) {
          source = 'Google';
          medium = 'organic';
        } else if (referrer.includes('facebook') || referrer.includes('fb.')) {
          source = 'Facebook';
          medium = 'social';
        } else if (referrer.includes('instagram')) {
          source = 'Instagram';
          medium = 'social';
        } else if (referrer.includes('yelp')) {
          source = 'Yelp';
          medium = 'referral';
        } else if (!referrer.includes('prestigemoving') && !referrer.includes('localhost') && !referrer.includes('replit')) {
          source = new URL(referrer).hostname;
          medium = 'referral';
        }
      }

      // Create page view
      await storage.createPageView({
        sessionId,
        page,
        referrer: referrer || null,
        userAgent,
        ipAddress,
        device,
        browser,
        os,
      });

      // Create or update session
      await storage.createOrUpdateSession({
        sessionId,
        firstPage: page,
        referrer: referrer || null,
        source,
        medium,
        userAgent,
        ipAddress,
        device,
        browser,
        os,
        pageCount: 1,
        duration: 0,
        isActive: true,
      });

      res.json({ success: true });
    } catch (error: any) {
      console.error("Error tracking page view:", error);
      res.status(500).json({ message: "Failed to track page view" });
    }
  });

  // Analytics - Get dashboard stats (protected)
  app.get("/api/analytics/stats", requireAdmin, async (req, res) => {
    try {
      const [
        pageViewsToday,
        sessionsToday,
        activeVisitors,
        pageViewsByPage,
        topSources,
        visitorsByDevice,
        visitorsByBrowser,
        pageViewsLast7Days,
      ] = await Promise.all([
        storage.getPageViewsToday(),
        storage.getSessionsToday(),
        storage.getActiveVisitors(),
        storage.getPageViewsByPage(),
        storage.getTopSources(),
        storage.getVisitorsByDevice(),
        storage.getVisitorsByBrowser(),
        storage.getPageViewsLast7Days(),
      ]);

      res.json({
        pageViewsToday,
        sessionsToday,
        activeVisitors,
        pageViewsByPage,
        topSources,
        visitorsByDevice,
        visitorsByBrowser,
        pageViewsLast7Days,
      });
    } catch (error: any) {
      console.error("Error fetching analytics:", error);
      res.status(500).json({ message: "Failed to fetch analytics" });
    }
  });

  // Analytics - Get recent sessions (protected)
  app.get("/api/analytics/sessions", requireAdmin, async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const sessions = await storage.getRecentSessions(limit);
      res.json(sessions);
    } catch (error: any) {
      console.error("Error fetching sessions:", error);
      res.status(500).json({ message: "Failed to fetch sessions" });
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

  // Package Management Routes
  
  // Get all packages (public - for frontend display)
  app.get("/api/packages", async (req, res) => {
    try {
      const packages = await storage.getActivePackages();
      
      // If no packages in DB, return default static packages for backwards compatibility
      if (packages.length === 0) {
        const defaultPackages = Object.entries(packageTypes).map(([key, pkg], index) => ({
          id: key.toLowerCase(),
          name: key,
          displayName: pkg.name,
          description: pkg.description,
          hourlyRate: pkg.hourlyRate,
          minimumHours: pkg.minimumHours,
          travelFee: pkg.travelFee,
          movers: pkg.movers,
          trucks: key === 'Diamond' ? 2 : 1,
          truckSize: pkg.truck,
          features: pkg.features,
          isPopular: key === 'Diamond',
          isActive: true,
          sortOrder: index,
          createdAt: new Date(),
          updatedAt: new Date(),
        }));
        return res.json(defaultPackages);
      }
      
      res.json(packages);
    } catch (error: any) {
      console.error("Error fetching packages:", error);
      res.status(500).json({ message: "Failed to fetch packages" });
    }
  });

  // Get all packages including inactive (admin)
  app.get("/api/admin/packages", requireAdmin, async (req, res) => {
    try {
      const packages = await storage.getAllPackages();
      res.json(packages);
    } catch (error: any) {
      console.error("Error fetching packages:", error);
      res.status(500).json({ message: "Failed to fetch packages" });
    }
  });

  // Get single package
  app.get("/api/admin/packages/:id", requireAdmin, async (req, res) => {
    try {
      const pkg = await storage.getPackage(req.params.id);
      if (!pkg) {
        return res.status(404).json({ message: "Package not found" });
      }
      res.json(pkg);
    } catch (error: any) {
      console.error("Error fetching package:", error);
      res.status(500).json({ message: "Failed to fetch package" });
    }
  });

  // Create new package
  app.post("/api/admin/packages", requireAdmin, async (req, res) => {
    try {
      const validatedData = insertMovingPackageSchema.parse(req.body);
      const pkg = await storage.createPackage(validatedData);
      res.status(201).json(pkg);
    } catch (error: any) {
      console.error("Error creating package:", error);
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      res.status(500).json({ message: "Failed to create package" });
    }
  });

  // Update package
  app.patch("/api/admin/packages/:id", requireAdmin, async (req, res) => {
    try {
      const pkg = await storage.updatePackage(req.params.id, req.body);
      if (!pkg) {
        return res.status(404).json({ message: "Package not found" });
      }
      res.json(pkg);
    } catch (error: any) {
      console.error("Error updating package:", error);
      res.status(500).json({ message: "Failed to update package" });
    }
  });

  // Delete package
  app.delete("/api/admin/packages/:id", requireAdmin, async (req, res) => {
    try {
      const success = await storage.deletePackage(req.params.id);
      if (!success) {
        return res.status(404).json({ message: "Package not found" });
      }
      res.json({ success: true });
    } catch (error: any) {
      console.error("Error deleting package:", error);
      res.status(500).json({ message: "Failed to delete package" });
    }
  });

  // Initialize default packages if none exist
  app.post("/api/admin/packages/initialize", requireAdmin, async (req, res) => {
    try {
      const existingPackages = await storage.getAllPackages();
      if (existingPackages.length > 0) {
        return res.status(400).json({ message: "Packages already exist" });
      }

      const defaultPackages = [
        {
          name: "Premium",
          displayName: "Premium Package",
          description: "Ideal for bachelor apartments, 1-2 bedroom moves",
          hourlyRate: 155,
          minimumHours: 3,
          travelFee: 155,
          movers: 2,
          trucks: 1,
          truckSize: "16ft - 20ft",
          features: [
            "2 Professional Movers",
            "16ft - 20ft Moving Truck",
            "Wrapping all furniture with tape and blankets",
            "Shrink-wrapping couches for protection",
            "Covering mattresses with brand-new plastic bags",
            "Protective padding for floors and stair railings",
            "Disassembly and reassembly of basic furniture",
          ],
          isPopular: false,
          isActive: true,
          sortOrder: 0,
        },
        {
          name: "Deluxe",
          displayName: "Deluxe Package",
          description: "Ideal for 2-3 bedroom moves",
          hourlyRate: 195,
          minimumHours: 3,
          travelFee: 195,
          movers: 3,
          trucks: 1,
          truckSize: "26ft",
          features: [
            "3 Professional Movers",
            "26ft Moving Truck",
            "Wrapping all furniture with tape and blankets",
            "Shrink-wrapping couches for added protection",
            "Covering mattresses with brand-new plastic bags",
            "Protective padding for floors and stair railings",
            "Disassembly and reassembly of basic furniture",
          ],
          isPopular: false,
          isActive: true,
          sortOrder: 1,
        },
        {
          name: "Diamond",
          displayName: "Diamond Package",
          description: "Ideal for large homes (3-5 bedrooms)",
          hourlyRate: 315,
          minimumHours: 3,
          travelFee: 315,
          movers: 4,
          trucks: 2,
          truckSize: "2 Trucks",
          features: [
            "4 Professional Movers",
            "2 Moving Trucks",
            "Wrapping all furniture with tape and blankets",
            "Shrink-wrapping couches for extra protection",
            "Covering mattresses with brand-new plastic bags",
            "Protective padding for floors and stair railings",
            "Disassembly and reassembly of all necessary furniture",
            "Extra tape and additional shrink wrap included",
          ],
          isPopular: true,
          isActive: true,
          sortOrder: 2,
        },
      ];

      const createdPackages = await Promise.all(
        defaultPackages.map(pkg => storage.createPackage(pkg))
      );

      res.status(201).json(createdPackages);
    } catch (error: any) {
      console.error("Error initializing packages:", error);
      res.status(500).json({ message: "Failed to initialize packages" });
    }
  });

  // ============= BLOG CATEGORY ROUTES =============

  // Get all categories (public)
  app.get("/api/blog/categories", async (req, res) => {
    try {
      const categories = await storage.getAllCategories();
      res.json(categories);
    } catch (error: any) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  // Create category (admin)
  app.post("/api/admin/blog/categories", requireAdmin, async (req, res) => {
    try {
      const validatedData = insertBlogCategorySchema.parse(req.body);
      const category = await storage.createCategory(validatedData);
      res.status(201).json(category);
    } catch (error: any) {
      console.error("Error creating category:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: fromZodError(error).message });
      }
      res.status(500).json({ message: "Failed to create category" });
    }
  });

  // Update category (admin)
  app.patch("/api/admin/blog/categories/:id", requireAdmin, async (req, res) => {
    try {
      const category = await storage.updateCategory(req.params.id, req.body);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (error: any) {
      console.error("Error updating category:", error);
      res.status(500).json({ message: "Failed to update category" });
    }
  });

  // Delete category (admin)
  app.delete("/api/admin/blog/categories/:id", requireAdmin, async (req, res) => {
    try {
      const success = await storage.deleteCategory(req.params.id);
      if (!success) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json({ success: true });
    } catch (error: any) {
      console.error("Error deleting category:", error);
      res.status(500).json({ message: "Failed to delete category" });
    }
  });

  // ============= BLOG POST ROUTES =============

  // Get all published posts (public)
  app.get("/api/blog/posts", async (req, res) => {
    try {
      const posts = await storage.getPublishedBlogPosts();
      res.json(posts);
    } catch (error: any) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  // Get single post by slug (public)
  app.get("/api/blog/posts/slug/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post || post.status !== "published") {
        return res.status(404).json({ message: "Blog post not found" });
      }
      // Increment view count
      await storage.incrementBlogPostViews(post.id);
      res.json(post);
    } catch (error: any) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  // Get posts by category (public)
  app.get("/api/blog/categories/:categoryId/posts", async (req, res) => {
    try {
      const posts = await storage.getBlogPostsByCategory(req.params.categoryId);
      res.json(posts);
    } catch (error: any) {
      console.error("Error fetching posts by category:", error);
      res.status(500).json({ message: "Failed to fetch posts" });
    }
  });

  // Get all posts including drafts (admin)
  app.get("/api/admin/blog/posts", requireAdmin, async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error: any) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  // Get single post by id (admin)
  app.get("/api/admin/blog/posts/:id", requireAdmin, async (req, res) => {
    try {
      const post = await storage.getBlogPost(req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(post);
    } catch (error: any) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  // Create blog post (admin)
  app.post("/api/admin/blog/posts", requireAdmin, async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      
      // Set publishedAt if publishing
      if (validatedData.status === "published" && !validatedData.publishedAt) {
        validatedData.publishedAt = new Date();
      }
      
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error: any) {
      console.error("Error creating blog post:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: fromZodError(error).message });
      }
      res.status(500).json({ message: "Failed to create blog post" });
    }
  });

  // Update blog post (admin)
  app.patch("/api/admin/blog/posts/:id", requireAdmin, async (req, res) => {
    try {
      // Set publishedAt if publishing for the first time
      if (req.body.status === "published") {
        const existingPost = await storage.getBlogPost(req.params.id);
        if (existingPost && existingPost.status !== "published" && !req.body.publishedAt) {
          req.body.publishedAt = new Date();
        }
      }
      
      const post = await storage.updateBlogPost(req.params.id, req.body);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(post);
    } catch (error: any) {
      console.error("Error updating blog post:", error);
      res.status(500).json({ message: "Failed to update blog post" });
    }
  });

  // Delete blog post (admin)
  app.delete("/api/admin/blog/posts/:id", requireAdmin, async (req, res) => {
    try {
      const success = await storage.deleteBlogPost(req.params.id);
      if (!success) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json({ success: true });
    } catch (error: any) {
      console.error("Error deleting blog post:", error);
      res.status(500).json({ message: "Failed to delete blog post" });
    }
  });

  // ============= AI BLOG GENERATION ROUTES =============

  // Generate blog post ideas
  app.post("/api/admin/blog/ai/ideas", requireAdmin, async (req, res) => {
    try {
      const { count = 5 } = req.body;
      const ideas = await generateBlogIdeas(count);
      res.json({ ideas });
    } catch (error: any) {
      console.error("Error generating blog ideas:", error);
      res.status(500).json({ message: "Failed to generate blog ideas" });
    }
  });

  // Generate blog post content from topic
  app.post("/api/admin/blog/ai/generate", requireAdmin, async (req, res) => {
    try {
      const { topic } = req.body;
      
      if (!topic || typeof topic !== "string") {
        return res.status(400).json({ message: "Topic is required" });
      }

      console.log("Generating blog content for topic:", topic);
      const content = await generateBlogPost(topic);
      console.log("Blog content generated successfully");
      res.json(content);
    } catch (error: any) {
      console.error("Error generating blog post:", error?.message || error);
      console.error("Full error:", JSON.stringify(error, null, 2));
      res.status(500).json({ 
        message: error?.message || "Failed to generate blog post content",
        error: process.env.NODE_ENV === 'development' ? error?.message : undefined
      });
    }
  });

  // Generate featured image for blog post
  app.post("/api/admin/blog/ai/image", requireAdmin, async (req, res) => {
    try {
      const { title } = req.body;
      
      if (!title || typeof title !== "string") {
        return res.status(400).json({ message: "Title is required" });
      }

      const imageUrl = await generateFeaturedImage(title);
      res.json({ imageUrl });
    } catch (error: any) {
      console.error("Error generating featured image:", error);
      res.status(500).json({ message: "Failed to generate featured image" });
    }
  });

  // Generate and create complete blog post (topic -> content -> image -> save)
  app.post("/api/admin/blog/ai/create-full", requireAdmin, async (req, res) => {
    try {
      const { topic, categoryId, generateImage = true } = req.body;
      
      if (!topic || typeof topic !== "string") {
        return res.status(400).json({ message: "Topic is required" });
      }

      // Generate content
      const content = await generateBlogPost(topic);
      
      // Generate featured image if requested
      let featuredImage: string | undefined;
      if (generateImage) {
        try {
          featuredImage = await generateFeaturedImage(content.title);
        } catch (imgError) {
          console.error("Failed to generate image, continuing without:", imgError);
        }
      }

      // Create the blog post
      const postData = {
        title: content.title,
        slug: content.slug,
        excerpt: content.excerpt,
        content: content.content,
        metaTitle: content.metaTitle,
        metaDescription: content.metaDescription,
        keywords: content.keywords,
        featuredImage: featuredImage || null,
        featuredImageAlt: featuredImage ? `Featured image for ${content.title}` : null,
        categoryId: categoryId || null,
        status: "draft" as const,
        isAiGenerated: true,
        aiPrompt: topic,
        authorName: "Prestige Moving Team",
        tags: content.keywords,
      };

      const post = await storage.createBlogPost(postData);
      res.status(201).json(post);
    } catch (error: any) {
      console.error("Error creating AI blog post:", error);
      res.status(500).json({ message: "Failed to create AI blog post" });
    }
  });

  // Initialize default blog categories
  app.post("/api/admin/blog/categories/initialize", requireAdmin, async (req, res) => {
    try {
      const existingCategories = await storage.getAllCategories();
      if (existingCategories.length > 0) {
        return res.status(400).json({ message: "Categories already exist" });
      }

      const defaultCategories = [
        { name: "Moving Tips", slug: "moving-tips", description: "Helpful tips and guides for your move" },
        { name: "Vancouver Guide", slug: "vancouver-guide", description: "Vancouver neighborhoods and local moving info" },
        { name: "Packing & Organization", slug: "packing-organization", description: "Packing tips and organization strategies" },
        { name: "Moving Checklist", slug: "moving-checklist", description: "Checklists and timelines for moving" },
        { name: "Cost Saving", slug: "cost-saving", description: "Ways to save money on your move" },
        { name: "Specialty Moving", slug: "specialty-moving", description: "Piano, antique, and specialty item moving" },
        { name: "Commercial Moving", slug: "commercial-moving", description: "Office and business relocation tips" },
      ];

      const createdCategories = await Promise.all(
        defaultCategories.map(cat => storage.createCategory(cat))
      );

      res.status(201).json(createdCategories);
    } catch (error: any) {
      console.error("Error initializing categories:", error);
      res.status(500).json({ message: "Failed to initialize categories" });
    }
  });

  // ============== Hero Video Management Routes ==============
  
  // Get available videos list (for admin selection)
  app.get("/api/admin/hero-videos/available", requireAdmin, (req, res) => {
    res.json({
      videos: availableVideos,
      pages: heroVideoPages
    });
  });

  // Get all hero video configurations
  app.get("/api/admin/hero-videos", requireAdmin, async (req, res) => {
    try {
      const heroVideos = await storage.getAllHeroVideos();
      res.json(heroVideos);
    } catch (error: any) {
      console.error("Error fetching hero videos:", error);
      res.status(500).json({ message: "Failed to fetch hero videos" });
    }
  });

  // Get single hero video by ID
  app.get("/api/admin/hero-videos/:id", requireAdmin, async (req, res) => {
    try {
      const heroVideo = await storage.getHeroVideo(req.params.id);
      if (!heroVideo) {
        return res.status(404).json({ message: "Hero video configuration not found" });
      }
      res.json(heroVideo);
    } catch (error: any) {
      console.error("Error fetching hero video:", error);
      res.status(500).json({ message: "Failed to fetch hero video" });
    }
  });

  // Get hero video by page slug (public endpoint for frontend)
  // Returns 404 when not found or inactive - frontend should use default videos
  app.get("/api/hero-videos/:pageSlug", async (req, res) => {
    try {
      const heroVideo = await storage.getHeroVideoByPageSlug(req.params.pageSlug);
      if (!heroVideo || !heroVideo.isActive) {
        return res.status(404).json({ message: "Hero video not found", fallbackToDefault: true });
      }
      res.json(heroVideo);
    } catch (error: any) {
      // For any storage errors, return 404 to allow frontend fallback
      console.warn("Hero video fetch failed for slug:", req.params.pageSlug, error?.message);
      res.status(404).json({ message: "Hero video not found", fallbackToDefault: true });
    }
  });

  // Create new hero video configuration
  app.post("/api/admin/hero-videos", requireAdmin, async (req, res) => {
    try {
      const validatedData = insertHeroVideoSchema.parse(req.body);
      
      // Check if page already has a hero video configuration
      const existing = await storage.getHeroVideoByPageSlug(validatedData.pageSlug);
      if (existing) {
        return res.status(400).json({ message: "Hero video configuration already exists for this page" });
      }
      
      const heroVideo = await storage.createHeroVideo(validatedData);
      res.status(201).json(heroVideo);
    } catch (error: any) {
      console.error("Error creating hero video:", error);
      
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: validationError.message });
      }
      
      res.status(500).json({ message: "Failed to create hero video" });
    }
  });

  // Update hero video configuration
  app.patch("/api/admin/hero-videos/:id", requireAdmin, async (req, res) => {
    try {
      const heroVideo = await storage.updateHeroVideo(req.params.id, req.body);
      if (!heroVideo) {
        return res.status(404).json({ message: "Hero video configuration not found" });
      }
      res.json(heroVideo);
    } catch (error: any) {
      console.error("Error updating hero video:", error);
      res.status(500).json({ message: "Failed to update hero video" });
    }
  });

  // Delete hero video configuration
  app.delete("/api/admin/hero-videos/:id", requireAdmin, async (req, res) => {
    try {
      const deleted = await storage.deleteHeroVideo(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Hero video configuration not found" });
      }
      res.json({ message: "Hero video configuration deleted" });
    } catch (error: any) {
      console.error("Error deleting hero video:", error);
      res.status(500).json({ message: "Failed to delete hero video" });
    }
  });

  // Initialize default hero video configurations for all pages
  app.post("/api/admin/hero-videos/initialize", requireAdmin, async (req, res) => {
    try {
      const existingVideos = await storage.getAllHeroVideos();
      const existingSlugs = new Set(existingVideos.map(v => v.pageSlug));
      
      // Default video configurations for each page
      const defaultConfigs: Record<string, string[]> = {
        "home": ["/attached_assets/generated_videos/bc_ferry_sailing_scenic_vancouver_waters.mp4", "/attached_assets/generated_videos/bc_ferry_crossing_burrard_inlet.mp4"],
        "commercial-moving": ["/attached_assets/commercial_moving_video.mp4", "/attached_assets/generated_videos/commercial_office_moving_scene.mp4"],
        "long-distance-moving": ["/attached_assets/generated_videos/moving_trucks_bc_mountain_highway.mp4", "/attached_assets/generated_videos/moving_truck_on_scenic_highway.mp4"],
        "piano-moving": ["/attached_assets/generated_videos/grand_piano_professional_moving.mp4"],
        "specialty-item-moving": ["/attached_assets/generated_videos/specialty_item_moving_hot_tub.mp4"],
        "residential-moving": ["/attached_assets/residential_moving_video.mp4", "/attached_assets/generated_videos/vancouver_residential_movers_with_boxes.mp4"],
        "packing-services": ["/attached_assets/generated_videos/professional_packing_services_vancouver.mp4"],
        "storage-solutions": ["/attached_assets/generated_videos/climate_controlled_storage_facility.mp4"],
        "senior-moving": ["/attached_assets/generated_videos/senior_moving_compassionate_service.mp4"],
        "student-moving": ["/attached_assets/generated_videos/student_moving_vancouver_campus.mp4"],
        "military-moving": ["/attached_assets/generated_videos/military_pcs_moving_relocation.mp4"],
        "antique-moving": ["/attached_assets/generated_videos/antique_furniture_moving_care.mp4"],
        "moving-supplies": ["/attached_assets/generated_videos/moving_supplies_delivery_vancouver.mp4"],
      };
      
      const created = [];
      
      for (const page of heroVideoPages) {
        if (!existingSlugs.has(page.slug)) {
          const videoUrls = defaultConfigs[page.slug] || ["/attached_assets/prestigemoving_converted.mp4"];
          const heroVideo = await storage.createHeroVideo({
            pageSlug: page.slug,
            pageName: page.name,
            videoUrls,
            autoRotate: videoUrls.length > 1,
            rotationInterval: 8000,
            isActive: true,
          });
          created.push(heroVideo);
        }
      }
      
      res.status(201).json({ 
        message: `Initialized ${created.length} hero video configurations`,
        created 
      });
    } catch (error: any) {
      console.error("Error initializing hero videos:", error);
      res.status(500).json({ message: "Failed to initialize hero videos" });
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
