import fs from "fs";
import path from "path";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

const OTTAWA_3PL_SLUG = "ottawa-3pl-complete-guide-third-party-logistics";

export async function seedMissingBlogPosts() {
  if (!process.env.DATABASE_URL) return;

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  try {
    const check = await pool.query(
      "SELECT id FROM blog_posts WHERE slug = $1 LIMIT 1",
      [OTTAWA_3PL_SLUG]
    );

    if (check.rowCount && check.rowCount > 0) {
      return;
    }

    const contentPath = path.join(
      process.cwd(),
      "server",
      "seed-content",
      "ottawa-3pl.html"
    );
    const content = fs.readFileSync(contentPath, "utf-8");

    await pool.query(
      `INSERT INTO blog_posts (
        id, title, slug, excerpt, content, status,
        meta_title, meta_description, keywords, tags,
        featured_image, featured_image_alt,
        author_name, canonical_url, published_at,
        created_at, updated_at
      ) VALUES (
        gen_random_uuid(), $1, $2, $3, $4, $5,
        $6, $7, $8, $9,
        $10, $11,
        $12, $13, $14,
        NOW(), NOW()
      )`,
      [
        "Ottawa 3PL: The Complete Guide to Third-Party Logistics, Warehousing & Fulfillment in Ottawa",
        OTTAWA_3PL_SLUG,
        "Discover everything you need to know about Ottawa 3PL services. From warehousing and fulfillment to cold chain logistics and e-commerce integration, this complete guide covers third-party logistics solutions for Ottawa businesses.",
        content,
        "published",
        "Ottawa 3PL: Complete Guide to Third-Party Logistics & Fulfillment | Prestige Moving",
        "Everything Ottawa businesses need to know about 3PL services: warehousing, fulfillment, cold chain, e-commerce integration, and how to choose the right third-party logistics partner.",
        ["ottawa 3pl","3pl ottawa","third-party logistics ottawa","ottawa warehousing","ottawa fulfillment","e-commerce fulfillment ottawa"],
        ["Ottawa 3PL","Third-Party Logistics","Ottawa Warehousing","E-Commerce Fulfillment","Cold Chain","Ottawa Business"],
        "/blog-images/ottawa-3pl-warehouse.png",
        "Ottawa 3PL warehouse facility with logistics operations",
        "Prestige Moving Team",
        "https://prestigemoving.ca/blog/ottawa-3pl-complete-guide-third-party-logistics",
        new Date().toISOString(),
      ]
    );

    console.log("[seed] Ottawa 3PL blog post created in database");
  } catch (err) {
    console.error("[seed] Failed to seed Ottawa 3PL blog post:", err);
  } finally {
    await pool.end();
  }
}
