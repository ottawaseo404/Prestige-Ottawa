import { type Booking, type InsertBooking } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Booking operations
  getBooking(id: string): Promise<Booking | undefined>;
  getAllBookings(): Promise<Booking[]>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  updateBookingStatus(id: string, status: string): Promise<Booking | undefined>;
  updateBookingSmartMovingSync(id: string, smartmovingId: string): Promise<Booking | undefined>;
}

export class MemStorage implements IStorage {
  private bookings: Map<string, Booking>;

  constructor() {
    this.bookings = new Map();
  }

  async getBooking(id: string): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }

  async getAllBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = randomUUID();
    const now = new Date();
    const booking: Booking = {
      ...insertBooking,
      id,
      smartmovingId: null,
      smartmovingSynced: false,
      smartmovingSyncedAt: null,
      createdAt: now,
      updatedAt: now,
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async updateBookingStatus(id: string, status: string): Promise<Booking | undefined> {
    const booking = this.bookings.get(id);
    if (!booking) return undefined;

    const updated: Booking = {
      ...booking,
      status,
      updatedAt: new Date(),
    };
    this.bookings.set(id, updated);
    return updated;
  }

  async updateBookingSmartMovingSync(id: string, smartmovingId: string): Promise<Booking | undefined> {
    const booking = this.bookings.get(id);
    if (!booking) return undefined;

    const updated: Booking = {
      ...booking,
      smartmovingId,
      smartmovingSynced: true,
      smartmovingSyncedAt: new Date(),
      updatedAt: new Date(),
    };
    this.bookings.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
