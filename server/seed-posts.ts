import fs from "fs";
import path from "path";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

const OTTAWA_3PL_SLUG = "ottawa-3pl-complete-guide-third-party-logistics";
const OTTAWA_CONTRACTORS_SLUG = "ottawa-contractors-canada-home-maintenance-guide";

export async function seedMissingBlogPosts() {
  if (!process.env.DATABASE_URL) return;

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  try {
    await seedOttawa3PL(pool);
    await seedOttawaContractors(pool);
  } catch (err) {
    console.error("[seed] Failed to seed blog posts:", err);
  } finally {
    await pool.end();
  }
}

async function seedOttawa3PL(pool: Pool) {
  const check = await pool.query(
    "SELECT id FROM blog_posts WHERE slug = $1 LIMIT 1",
    [OTTAWA_3PL_SLUG]
  );

  if (check.rowCount && check.rowCount > 0) return;

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
}

async function seedOttawaContractors(pool: Pool) {
  const check = await pool.query(
    "SELECT id FROM blog_posts WHERE slug = $1 LIMIT 1",
    [OTTAWA_CONTRACTORS_SLUG]
  );

  if (check.rowCount && check.rowCount > 0) return;

  const contentPath = path.join(
    process.cwd(),
    "server",
    "seed-content",
    "ottawa-contractors-maintenance.html"
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
      "Ottawa Contractors & Canada Home Maintenance: The Complete 2026 Guide",
      OTTAWA_CONTRACTORS_SLUG,
      "Discover why Ottawa contractors and Canada home maintenance standards go hand in hand. The complete 2026 guide to finding, vetting, and working with trusted Ottawa contractors across every trade — from HVAC and roofing to foundations, electrical, and full renovations.",
      content,
      "published",
      "Ottawa Contractors | Canada Home Maintenance Complete Guide 2026",
      "Why Ottawa contractors and Canada home maintenance standards are inseparable. Complete 2026 guide: essential services, seasonal calendar, cost breakdowns, how to choose contractors, and FAQ for Ottawa homeowners.",
      ["ottawa contractors","canada maintenance","home maintenance ottawa","ottawa home contractors","ottawa renovation contractors","contractors ottawa","ottawa contractor services"],
      ["Ottawa Contractors","Home Maintenance","Canada Maintenance","Ottawa Renovation","Ottawa Trades","Ottawa Home Improvement"],
      "/blog-images/ottawa-contractors-home-maintenance.png",
      "Professional Ottawa contractors team performing exterior home maintenance on a Canadian home",
      "Prestige Moving Team",
      "https://prestigemoving.ca/ottawa-contractors-canada-home-maintenance-guide",
      new Date().toISOString(),
    ]
  );

  console.log("[seed] Ottawa Contractors blog post created in database");
}
