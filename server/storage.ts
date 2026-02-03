import { 
  type Booking, type InsertBooking, bookings,
  type PageView, type InsertPageView, pageViews,
  type VisitorSession, type InsertVisitorSession, visitorSessions,
  type MovingPackage, type InsertMovingPackage, movingPackages,
  type BlogPost, type InsertBlogPost, blogPosts,
  type BlogCategory, type InsertBlogCategory, blogCategories,
  type HeroVideo, type InsertHeroVideo, heroVideos,
  type ServicePage, type InsertServicePage, servicePages
} from "@shared/schema";
import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { eq, desc, sql, gte, and, count, asc } from "drizzle-orm";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

export interface IStorage {
  // Booking operations
  getBooking(id: string): Promise<Booking | undefined>;
  getAllBookings(): Promise<Booking[]>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  updateBookingStatus(id: string, status: string): Promise<Booking | undefined>;
  updateBookingSmartMovingSync(id: string, smartmovingId: string): Promise<Booking | undefined>;
  
  // Analytics operations
  createPageView(pageView: InsertPageView): Promise<PageView>;
  getPageViewsToday(): Promise<number>;
  getPageViewsByPage(): Promise<{ page: string; views: number }[]>;
  getPageViewsByReferrer(): Promise<{ referrer: string; views: number }[]>;
  
  createOrUpdateSession(session: InsertVisitorSession): Promise<VisitorSession>;
  updateSessionActivity(sessionId: string, page: string): Promise<void>;
  getActiveVisitors(): Promise<number>;
  getSessionsToday(): Promise<number>;
  getTopSources(): Promise<{ source: string; sessions: number }[]>;
  getVisitorsByDevice(): Promise<{ device: string; count: number }[]>;
  getVisitorsByBrowser(): Promise<{ browser: string; count: number }[]>;
  getRecentSessions(limit: number): Promise<VisitorSession[]>;
  getPageViewsLast7Days(): Promise<{ date: string; views: number }[]>;
  
  // Package operations
  getAllPackages(): Promise<MovingPackage[]>;
  getActivePackages(): Promise<MovingPackage[]>;
  getPackage(id: string): Promise<MovingPackage | undefined>;
  createPackage(pkg: InsertMovingPackage): Promise<MovingPackage>;
  updatePackage(id: string, pkg: Partial<InsertMovingPackage>): Promise<MovingPackage | undefined>;
  deletePackage(id: string): Promise<boolean>;
  
  // Blog Category operations
  getAllCategories(): Promise<BlogCategory[]>;
  getCategory(id: string): Promise<BlogCategory | undefined>;
  getCategoryBySlug(slug: string): Promise<BlogCategory | undefined>;
  createCategory(category: InsertBlogCategory): Promise<BlogCategory>;
  updateCategory(id: string, category: Partial<InsertBlogCategory>): Promise<BlogCategory | undefined>;
  deleteCategory(id: string): Promise<boolean>;
  
  // Blog Post operations
  getAllBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getBlogPostsByCategory(categoryId: string): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<boolean>;
  incrementBlogPostViews(id: string): Promise<void>;
  
  // Hero Video operations
  getAllHeroVideos(): Promise<HeroVideo[]>;
  getHeroVideo(id: string): Promise<HeroVideo | undefined>;
  getHeroVideoByPageSlug(pageSlug: string): Promise<HeroVideo | undefined>;
  createHeroVideo(heroVideo: InsertHeroVideo): Promise<HeroVideo>;
  updateHeroVideo(id: string, heroVideo: Partial<InsertHeroVideo>): Promise<HeroVideo | undefined>;
  deleteHeroVideo(id: string): Promise<boolean>;
  
  // Service Page operations
  getAllServicePages(): Promise<ServicePage[]>;
  getActiveServicePages(): Promise<ServicePage[]>;
  getServicePage(id: string): Promise<ServicePage | undefined>;
  getServicePageBySlug(slug: string): Promise<ServicePage | undefined>;
  createServicePage(page: InsertServicePage): Promise<ServicePage>;
  updateServicePage(id: string, page: Partial<InsertServicePage>): Promise<ServicePage | undefined>;
  deleteServicePage(id: string): Promise<boolean>;
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

  // Analytics operations
  async createPageView(pageView: InsertPageView): Promise<PageView> {
    const result = await this.db.insert(pageViews).values(pageView).returning();
    return result[0];
  }

  async getPageViewsToday(): Promise<number> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const result = await this.db
      .select({ count: count() })
      .from(pageViews)
      .where(gte(pageViews.createdAt, today));
    return result[0]?.count || 0;
  }

  async getPageViewsByPage(): Promise<{ page: string; views: number }[]> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const result = await this.db
      .select({ 
        page: pageViews.page, 
        views: count() 
      })
      .from(pageViews)
      .where(gte(pageViews.createdAt, today))
      .groupBy(pageViews.page)
      .orderBy(desc(count()));
    return result.map(r => ({ page: r.page, views: r.views }));
  }

  async getPageViewsByReferrer(): Promise<{ referrer: string; views: number }[]> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const result = await this.db
      .select({ 
        referrer: pageViews.referrer, 
        views: count() 
      })
      .from(pageViews)
      .where(gte(pageViews.createdAt, today))
      .groupBy(pageViews.referrer)
      .orderBy(desc(count()));
    return result.map(r => ({ referrer: r.referrer || 'Direct', views: r.views }));
  }

  async createOrUpdateSession(session: InsertVisitorSession): Promise<VisitorSession> {
    const existing = await this.db
      .select()
      .from(visitorSessions)
      .where(eq(visitorSessions.sessionId, session.sessionId));
    
    if (existing.length > 0) {
      const result = await this.db
        .update(visitorSessions)
        .set({ 
          lastActiveAt: new Date(),
          isActive: true
        })
        .where(eq(visitorSessions.sessionId, session.sessionId))
        .returning();
      return result[0];
    }
    
    const result = await this.db.insert(visitorSessions).values(session).returning();
    return result[0];
  }

  async updateSessionActivity(sessionId: string, page: string): Promise<void> {
    await this.db
      .update(visitorSessions)
      .set({ 
        lastActiveAt: new Date(),
        isActive: true,
        pageCount: sql`${visitorSessions.pageCount} + 1`
      })
      .where(eq(visitorSessions.sessionId, sessionId));
  }

  async getActiveVisitors(): Promise<number> {
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    const result = await this.db
      .select({ count: count() })
      .from(visitorSessions)
      .where(and(
        gte(visitorSessions.lastActiveAt, fiveMinutesAgo),
        eq(visitorSessions.isActive, true)
      ));
    return result[0]?.count || 0;
  }

  async getSessionsToday(): Promise<number> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const result = await this.db
      .select({ count: count() })
      .from(visitorSessions)
      .where(gte(visitorSessions.createdAt, today));
    return result[0]?.count || 0;
  }

  async getTopSources(): Promise<{ source: string; sessions: number }[]> {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const result = await this.db
      .select({ 
        source: visitorSessions.source, 
        sessions: count() 
      })
      .from(visitorSessions)
      .where(gte(visitorSessions.createdAt, sevenDaysAgo))
      .groupBy(visitorSessions.source)
      .orderBy(desc(count()))
      .limit(10);
    return result.map(r => ({ source: r.source || 'Direct', sessions: r.sessions }));
  }

  async getVisitorsByDevice(): Promise<{ device: string; count: number }[]> {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const result = await this.db
      .select({ 
        device: visitorSessions.device, 
        count: count() 
      })
      .from(visitorSessions)
      .where(gte(visitorSessions.createdAt, sevenDaysAgo))
      .groupBy(visitorSessions.device)
      .orderBy(desc(count()));
    return result.map(r => ({ device: r.device || 'Unknown', count: r.count }));
  }

  async getVisitorsByBrowser(): Promise<{ browser: string; count: number }[]> {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const result = await this.db
      .select({ 
        browser: visitorSessions.browser, 
        count: count() 
      })
      .from(visitorSessions)
      .where(gte(visitorSessions.createdAt, sevenDaysAgo))
      .groupBy(visitorSessions.browser)
      .orderBy(desc(count()));
    return result.map(r => ({ browser: r.browser || 'Unknown', count: r.count }));
  }

  async getRecentSessions(limit: number): Promise<VisitorSession[]> {
    return await this.db
      .select()
      .from(visitorSessions)
      .orderBy(desc(visitorSessions.lastActiveAt))
      .limit(limit);
  }

  async getPageViewsLast7Days(): Promise<{ date: string; views: number }[]> {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const result = await this.db
      .select({ 
        date: sql<string>`DATE(${pageViews.createdAt})::text`,
        views: count() 
      })
      .from(pageViews)
      .where(gte(pageViews.createdAt, sevenDaysAgo))
      .groupBy(sql`DATE(${pageViews.createdAt})`)
      .orderBy(sql`DATE(${pageViews.createdAt})`);
    return result.map(r => ({ date: r.date, views: r.views }));
  }

  // Package operations
  async getAllPackages(): Promise<MovingPackage[]> {
    return await this.db.select().from(movingPackages).orderBy(asc(movingPackages.sortOrder));
  }

  async getActivePackages(): Promise<MovingPackage[]> {
    return await this.db
      .select()
      .from(movingPackages)
      .where(eq(movingPackages.isActive, true))
      .orderBy(asc(movingPackages.sortOrder));
  }

  async getPackage(id: string): Promise<MovingPackage | undefined> {
    const result = await this.db.select().from(movingPackages).where(eq(movingPackages.id, id));
    return result[0];
  }

  async createPackage(pkg: InsertMovingPackage): Promise<MovingPackage> {
    const result = await this.db.insert(movingPackages).values(pkg).returning();
    return result[0];
  }

  async updatePackage(id: string, pkg: Partial<InsertMovingPackage>): Promise<MovingPackage | undefined> {
    const result = await this.db
      .update(movingPackages)
      .set({ ...pkg, updatedAt: new Date() })
      .where(eq(movingPackages.id, id))
      .returning();
    return result[0];
  }

  async deletePackage(id: string): Promise<boolean> {
    const result = await this.db.delete(movingPackages).where(eq(movingPackages.id, id)).returning();
    return result.length > 0;
  }

  // Blog Category operations
  async getAllCategories(): Promise<BlogCategory[]> {
    return await this.db.select().from(blogCategories).orderBy(asc(blogCategories.name));
  }

  async getCategory(id: string): Promise<BlogCategory | undefined> {
    const result = await this.db.select().from(blogCategories).where(eq(blogCategories.id, id));
    return result[0];
  }

  async getCategoryBySlug(slug: string): Promise<BlogCategory | undefined> {
    const result = await this.db.select().from(blogCategories).where(eq(blogCategories.slug, slug));
    return result[0];
  }

  async createCategory(category: InsertBlogCategory): Promise<BlogCategory> {
    const result = await this.db.insert(blogCategories).values(category).returning();
    return result[0];
  }

  async updateCategory(id: string, category: Partial<InsertBlogCategory>): Promise<BlogCategory | undefined> {
    const result = await this.db
      .update(blogCategories)
      .set(category)
      .where(eq(blogCategories.id, id))
      .returning();
    return result[0];
  }

  async deleteCategory(id: string): Promise<boolean> {
    const result = await this.db.delete(blogCategories).where(eq(blogCategories.id, id)).returning();
    return result.length > 0;
  }

  // Blog Post operations
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return await this.db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return await this.db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.status, "published"))
      .orderBy(desc(blogPosts.publishedAt));
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    const result = await this.db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return result[0];
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const result = await this.db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return result[0];
  }

  async getBlogPostsByCategory(categoryId: string): Promise<BlogPost[]> {
    return await this.db
      .select()
      .from(blogPosts)
      .where(and(
        eq(blogPosts.categoryId, categoryId),
        eq(blogPosts.status, "published")
      ))
      .orderBy(desc(blogPosts.publishedAt));
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const result = await this.db.insert(blogPosts).values(post).returning();
    return result[0];
  }

  async updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const result = await this.db
      .update(blogPosts)
      .set({ ...post, updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return result[0];
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    const result = await this.db.delete(blogPosts).where(eq(blogPosts.id, id)).returning();
    return result.length > 0;
  }

  async incrementBlogPostViews(id: string): Promise<void> {
    await this.db
      .update(blogPosts)
      .set({ viewCount: sql`${blogPosts.viewCount} + 1` })
      .where(eq(blogPosts.id, id));
  }

  // Hero Video operations
  async getAllHeroVideos(): Promise<HeroVideo[]> {
    return await this.db.select().from(heroVideos).orderBy(asc(heroVideos.pageName));
  }

  async getHeroVideo(id: string): Promise<HeroVideo | undefined> {
    const result = await this.db.select().from(heroVideos).where(eq(heroVideos.id, id));
    return result[0];
  }

  async getHeroVideoByPageSlug(pageSlug: string): Promise<HeroVideo | undefined> {
    const result = await this.db.select().from(heroVideos).where(eq(heroVideos.pageSlug, pageSlug));
    return result[0];
  }

  async createHeroVideo(heroVideo: InsertHeroVideo): Promise<HeroVideo> {
    const result = await this.db.insert(heroVideos).values(heroVideo).returning();
    return result[0];
  }

  async updateHeroVideo(id: string, heroVideo: Partial<InsertHeroVideo>): Promise<HeroVideo | undefined> {
    const result = await this.db
      .update(heroVideos)
      .set({ ...heroVideo, updatedAt: new Date() })
      .where(eq(heroVideos.id, id))
      .returning();
    return result[0];
  }

  async deleteHeroVideo(id: string): Promise<boolean> {
    const result = await this.db.delete(heroVideos).where(eq(heroVideos.id, id)).returning();
    return result.length > 0;
  }

  // Service Page operations
  async getAllServicePages(): Promise<ServicePage[]> {
    return await this.db.select().from(servicePages).orderBy(asc(servicePages.sortOrder));
  }

  async getActiveServicePages(): Promise<ServicePage[]> {
    return await this.db
      .select()
      .from(servicePages)
      .where(eq(servicePages.isActive, true))
      .orderBy(asc(servicePages.sortOrder));
  }

  async getServicePage(id: string): Promise<ServicePage | undefined> {
    const result = await this.db.select().from(servicePages).where(eq(servicePages.id, id));
    return result[0];
  }

  async getServicePageBySlug(slug: string): Promise<ServicePage | undefined> {
    const result = await this.db.select().from(servicePages).where(eq(servicePages.slug, slug));
    return result[0];
  }

  async createServicePage(page: InsertServicePage): Promise<ServicePage> {
    const result = await this.db.insert(servicePages).values(page).returning();
    return result[0];
  }

  async updateServicePage(id: string, page: Partial<InsertServicePage>): Promise<ServicePage | undefined> {
    const result = await this.db
      .update(servicePages)
      .set({ ...page, updatedAt: new Date() })
      .where(eq(servicePages.id, id))
      .returning();
    return result[0];
  }

  async deleteServicePage(id: string): Promise<boolean> {
    const result = await this.db.delete(servicePages).where(eq(servicePages.id, id)).returning();
    return result.length > 0;
  }
}

export const storage = new DbStorage();
