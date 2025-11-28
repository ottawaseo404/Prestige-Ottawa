import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Bookings table
export const bookings = pgTable("bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  // Customer Information
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  phoneType: text("phone_type").notNull().default("Mobile"),
  
  // Move Details
  moveDate: timestamp("move_date").notNull(),
  moveSize: text("move_size").notNull(),
  serviceType: text("service_type").notNull().default("Moving"),
  
  // Origin Address
  originStreet: text("origin_street").notNull(),
  originCity: text("origin_city").notNull(),
  originProvince: text("origin_province").notNull().default("BC"),
  originPostalCode: text("origin_postal_code").notNull(),
  originStairs: integer("origin_stairs").notNull().default(0),
  
  // Destination Address
  destinationStreet: text("destination_street").notNull(),
  destinationCity: text("destination_city").notNull(),
  destinationProvince: text("destination_province").notNull().default("BC"),
  destinationPostalCode: text("destination_postal_code").notNull(),
  destinationStairs: integer("destination_stairs").notNull().default(0),
  
  // Additional Information
  packageType: text("package_type").notNull().default("Premium"),
  notes: text("notes"),
  referralSource: text("referral_source").notNull().default("Google"),
  
  // Pricing (calculated)
  estimatedPrice: integer("estimated_price"),
  
  // Status tracking
  status: text("status").notNull().default("pending"),
  smartmovingId: text("smartmoving_id"),
  smartmovingSynced: boolean("smartmoving_synced").notNull().default(false),
  smartmovingSyncedAt: timestamp("smartmoving_synced_at"),
  
  // Timestamps
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
  updatedAt: timestamp("updated_at").notNull().default(sql`now()`),
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  smartmovingId: true,
  smartmovingSynced: true,
  smartmovingSyncedAt: true,
}).extend({
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  moveDate: z.coerce.date(),
  originStairs: z.coerce.number().min(0).max(10),
  destinationStairs: z.coerce.number().min(0).max(10),
});

export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;

// Move size options
export const moveSizeOptions = [
  "Room or Less",
  "Studio Apartment",
  "1 Bedroom Apartment",
  "2 Bedroom Apartment",
  "3 Bedroom Apartment",
  "1 Bedroom House",
  "1 Bedroom House (Large)",
  "2 Bedroom House",
  "2 Bedroom House (Large)",
  "3 Bedroom House",
  "3 Bedroom House (Large)",
  "4 Bedroom House",
  "4 Bedroom House (Large)",
  "5 Bedroom House",
  "5 Bedroom House (Large)",
  "Storage Unit (5x10)",
  "Storage Unit (5x15)",
  "Storage Unit (10x10)",
  "Storage Unit (10x15)",
  "Storage Unit (10x20)",
] as const;

// Service type options
export const serviceTypeOptions = [
  "Moving",
  "Packing",
  "MovingAndPacking",
  "LoadOnly",
  "UnloadOnly",
  "Commercial",
  "StorageInBound",
  "StorageOutBound",
  "LaborOnly",
] as const;

// Package types with pricing
export const packageTypes = {
  Premium: {
    name: "Premium Package",
    hourlyRate: 155,
    minimumHours: 3,
    travelFee: 155,
    movers: 2,
    truck: "16ft - 20ft",
    description: "Ideal for bachelor apartments, 1-2 bedroom moves",
    features: [
      "2 Professional Movers",
      "16ft - 20ft Moving Truck",
      "Wrapping all furniture with tape and blankets",
      "Shrink-wrapping couches for protection",
      "Covering mattresses with brand-new plastic bags",
      "Protective padding for floors and stair railings",
      "Disassembly and reassembly of basic furniture",
    ],
  },
  Deluxe: {
    name: "Deluxe Package",
    hourlyRate: 195,
    minimumHours: 3,
    travelFee: 195,
    movers: 3,
    truck: "26ft",
    description: "Ideal for 2-3 bedroom moves",
    features: [
      "3 Professional Movers",
      "26ft Moving Truck",
      "Wrapping all furniture with tape and blankets",
      "Shrink-wrapping couches for added protection",
      "Covering mattresses with brand-new plastic bags",
      "Protective padding for floors and stair railings",
      "Disassembly and reassembly of basic furniture",
    ],
  },
  Diamond: {
    name: "Diamond Package",
    hourlyRate: 315,
    minimumHours: 3,
    travelFee: 315,
    movers: 4,
    truck: "2 Trucks",
    description: "Ideal for large homes (3-5 bedrooms)",
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
  },
} as const;

export type PackageType = keyof typeof packageTypes;

// SmartMoving API types
export type SmartMovingLead = {
  FirstName: string;
  LastName: string;
  Email?: string;
  Phone?: string;
  MoveDate?: string;
  ServiceType?: string;
  MoveSize?: string;
  OriginStreet?: string;
  OriginCity?: string;
  OriginState?: string;
  OriginZip?: string;
  DestinationStreet?: string;
  DestinationCity?: string;
  DestinationState?: string;
  DestinationZip?: string;
  Notes?: string;
};

// Analytics - Page Views
export const pageViews = pgTable("page_views", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: text("session_id").notNull(),
  page: text("page").notNull(),
  referrer: text("referrer"),
  userAgent: text("user_agent"),
  ipAddress: text("ip_address"),
  country: text("country"),
  city: text("city"),
  device: text("device"),
  browser: text("browser"),
  os: text("os"),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const insertPageViewSchema = createInsertSchema(pageViews).omit({
  id: true,
  createdAt: true,
});

export type InsertPageView = z.infer<typeof insertPageViewSchema>;
export type PageView = typeof pageViews.$inferSelect;

// Analytics - Visitor Sessions
export const visitorSessions = pgTable("visitor_sessions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: text("session_id").notNull().unique(),
  firstPage: text("first_page").notNull(),
  referrer: text("referrer"),
  source: text("source"),
  medium: text("medium"),
  campaign: text("campaign"),
  userAgent: text("user_agent"),
  ipAddress: text("ip_address"),
  country: text("country"),
  city: text("city"),
  device: text("device"),
  browser: text("browser"),
  os: text("os"),
  pageCount: integer("page_count").notNull().default(1),
  duration: integer("duration").default(0),
  isActive: boolean("is_active").notNull().default(true),
  lastActiveAt: timestamp("last_active_at").notNull().default(sql`now()`),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const insertVisitorSessionSchema = createInsertSchema(visitorSessions).omit({
  id: true,
  createdAt: true,
  lastActiveAt: true,
});

export type InsertVisitorSession = z.infer<typeof insertVisitorSessionSchema>;
export type VisitorSession = typeof visitorSessions.$inferSelect;
