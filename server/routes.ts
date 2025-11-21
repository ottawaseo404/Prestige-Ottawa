import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, type SmartMovingLead, packageTypes } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
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
