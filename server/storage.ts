import { type Booking, type InsertBooking, bookings } from "@shared/schema";
import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { eq, desc, sql } from "drizzle-orm";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

export interface IStorage {
  // Booking operations
  getBooking(id: string): Promise<Booking | undefined>;
  getAllBookings(): Promise<Booking[]>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  updateBookingStatus(id: string, status: string): Promise<Booking | undefined>;
  updateBookingSmartMovingSync(id: string, smartmovingId: string): Promise<Booking | undefined>;
}

export class DbStorage implements IStorage {
  private db;

  constructor() {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is not set");
    }
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    this.db = drizzle(pool);
  }

  async getBooking(id: string): Promise<Booking | undefined> {
    const result = await this.db.select().from(bookings).where(eq(bookings.id, id));
    return result[0];
  }

  async getAllBookings(): Promise<Booking[]> {
    return await this.db.select().from(bookings).orderBy(desc(bookings.createdAt));
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const result = await this.db.insert(bookings).values(insertBooking).returning();
    return result[0];
  }

  async updateBookingStatus(id: string, status: string): Promise<Booking | undefined> {
    const result = await this.db
      .update(bookings)
      .set({ 
        status, 
        updatedAt: new Date() 
      })
      .where(eq(bookings.id, id))
      .returning();
    return result[0];
  }

  async updateBookingSmartMovingSync(id: string, smartmovingId: string): Promise<Booking | undefined> {
    const result = await this.db
      .update(bookings)
      .set({ 
        smartmovingId,
        smartmovingSynced: true,
        smartmovingSyncedAt: new Date(),
        updatedAt: new Date() 
      })
      .where(eq(bookings.id, id))
      .returning();
    return result[0];
  }
}

export const storage = new DbStorage();
