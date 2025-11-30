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

// Moving Packages - Admin Configurable
export const movingPackages = pgTable("moving_packages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  displayName: text("display_name").notNull(),
  description: text("description").notNull(),
  hourlyRate: integer("hourly_rate").notNull(),
  minimumHours: integer("minimum_hours").notNull().default(3),
  travelFee: integer("travel_fee").notNull(),
  movers: integer("movers").notNull(),
  trucks: integer("trucks").notNull().default(1),
  truckSize: text("truck_size").notNull(),
  features: text("features").array().notNull(),
  isPopular: boolean("is_popular").notNull().default(false),
  isActive: boolean("is_active").notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
  updatedAt: timestamp("updated_at").notNull().default(sql`now()`),
});

export const insertMovingPackageSchema = createInsertSchema(movingPackages).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertMovingPackage = z.infer<typeof insertMovingPackageSchema>;
export type MovingPackage = typeof movingPackages.$inferSelect;

// Blog Categories
export const blogCategories = pgTable("blog_categories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const insertBlogCategorySchema = createInsertSchema(blogCategories).omit({
  id: true,
  createdAt: true,
});

export type InsertBlogCategory = z.infer<typeof insertBlogCategorySchema>;
export type BlogCategory = typeof blogCategories.$inferSelect;

// Blog Posts - WordPress-like structure
export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  // Core content
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  
  // Featured image
  featuredImage: text("featured_image"),
  featuredImageAlt: text("featured_image_alt"),
  
  // SEO fields
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  keywords: text("keywords").array(),
  canonicalUrl: text("canonical_url"),
  
  // Organization
  categoryId: varchar("category_id").references(() => blogCategories.id),
  tags: text("tags").array(),
  
  // Author info
  authorName: text("author_name").notNull().default("Prestige Moving Team"),
  authorAvatar: text("author_avatar"),
  
  // Status and publishing
  status: text("status").notNull().default("draft"), // draft, published, scheduled
  publishedAt: timestamp("published_at"),
  scheduledAt: timestamp("scheduled_at"),
  
  // AI generation tracking
  isAiGenerated: boolean("is_ai_generated").notNull().default(false),
  aiPrompt: text("ai_prompt"),
  
  // Engagement metrics
  viewCount: integer("view_count").notNull().default(0),
  
  // Timestamps
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
  updatedAt: timestamp("updated_at").notNull().default(sql`now()`),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  viewCount: true,
}).extend({
  publishedAt: z.coerce.date().optional().nullable(),
  scheduledAt: z.coerce.date().optional().nullable(),
});

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

// Hero Videos - Admin-managed hero video settings per page
export const heroVideos = pgTable("hero_videos", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  // Page identifier (e.g., "home", "commercial-moving", "long-distance-moving")
  pageSlug: text("page_slug").notNull().unique(),
  pageName: text("page_name").notNull(),
  
  // Video configuration - supports multiple videos for sliders
  videoUrls: text("video_urls").array().notNull(),
  
  // Display settings
  autoRotate: boolean("auto_rotate").notNull().default(true),
  rotationInterval: integer("rotation_interval").notNull().default(8000), // milliseconds
  
  // Status
  isActive: boolean("is_active").notNull().default(true),
  
  // Timestamps
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
  updatedAt: timestamp("updated_at").notNull().default(sql`now()`),
});

export const insertHeroVideoSchema = createInsertSchema(heroVideos).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertHeroVideo = z.infer<typeof insertHeroVideoSchema>;
export type HeroVideo = typeof heroVideos.$inferSelect;

// Available video assets for admin selection
export const availableVideos = [
  { path: "/attached_assets/generated_videos/bc_ferry_crossing_burrard_inlet.mp4", name: "BC Ferry Crossing Burrard Inlet" },
  { path: "/attached_assets/generated_videos/bc_ferry_sailing_scenic_vancouver_waters.mp4", name: "BC Ferry Scenic Vancouver Waters" },
  { path: "/attached_assets/generated_videos/climate_controlled_storage_facility.mp4", name: "Climate Controlled Storage Facility" },
  { path: "/attached_assets/generated_videos/commercial_office_moving_scene.mp4", name: "Commercial Office Moving" },
  { path: "/attached_assets/generated_videos/grand_piano_professional_moving.mp4", name: "Grand Piano Professional Moving" },
  { path: "/attached_assets/generated_videos/military_pcs_moving_relocation.mp4", name: "Military PCS Moving" },
  { path: "/attached_assets/generated_videos/moving_supplies_delivery_vancouver.mp4", name: "Moving Supplies Delivery" },
  { path: "/attached_assets/generated_videos/moving_truck_on_scenic_highway.mp4", name: "Moving Truck Scenic Highway" },
  { path: "/attached_assets/generated_videos/moving_trucks_bc_mountain_highway.mp4", name: "Moving Trucks BC Mountain Highway" },
  { path: "/attached_assets/generated_videos/moving_trucks_driving_on_highway.mp4", name: "Moving Trucks Driving Highway" },
  { path: "/attached_assets/generated_videos/professional_packing_services_vancouver.mp4", name: "Professional Packing Services" },
  { path: "/attached_assets/generated_videos/senior_moving_compassionate_service.mp4", name: "Senior Moving Compassionate Service" },
  { path: "/attached_assets/generated_videos/specialty_item_moving_hot_tub.mp4", name: "Specialty Item Moving Hot Tub" },
  { path: "/attached_assets/generated_videos/student_moving_vancouver_campus.mp4", name: "Student Moving Vancouver Campus" },
  { path: "/attached_assets/generated_videos/vancouver_ferry_crossing_burrard_inlet.mp4", name: "Vancouver Ferry Crossing" },
  { path: "/attached_assets/generated_videos/vancouver_residential_movers_with_boxes.mp4", name: "Vancouver Residential Movers" },
  { path: "/attached_assets/generated_videos/white_trucks_driving_bc_mountains.mp4", name: "White Trucks BC Mountains" },
  { path: "/attached_assets/generated_videos/antique_furniture_moving_care.mp4", name: "Antique Furniture Moving Care" },
  { path: "/attached_assets/prestigemoving_converted.mp4", name: "Prestige Moving Brand Video" },
  { path: "/attached_assets/commercial_moving_video.mp4", name: "Commercial Moving Video" },
  { path: "/attached_assets/residential_moving_video.mp4", name: "Residential Moving Video" },
] as const;

// Pages with hero videos
export const heroVideoPages = [
  { slug: "home", name: "Home Page" },
  { slug: "commercial-moving", name: "Commercial Moving" },
  { slug: "long-distance-moving", name: "Long Distance Moving" },
  { slug: "piano-moving", name: "Piano Moving" },
  { slug: "specialty-item-moving", name: "Specialty Item Moving" },
  { slug: "residential-moving", name: "Residential Moving" },
  { slug: "packing-services", name: "Packing Services" },
  { slug: "storage-solutions", name: "Storage Solutions" },
  { slug: "senior-moving", name: "Senior Moving" },
  { slug: "student-moving", name: "Student Moving" },
  { slug: "military-moving", name: "Military Moving" },
  { slug: "antique-moving", name: "Antique Moving" },
  { slug: "moving-supplies", name: "Moving Supplies" },
] as const;
