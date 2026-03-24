import fs from "fs";
import path from "path";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

neonConfig.webSocketConstructor = ws;

const OTTAWA_3PL_SLUG = "ottawa-3pl-complete-guide-third-party-logistics";
const OTTAWA_CONTRACTORS_SLUG = "ottawa-contractors-canada-home-maintenance-guide";
const LONG_DISTANCE_CANADA_SLUG = "top-long-distance-movers-canada-complete-guide";
const COMMERCIAL_MOVING_OTTAWA_SLUG = "commercial-moving-services-ottawa-business-relocation-guide";

export async function seedMissingBlogPosts() {
  if (!process.env.DATABASE_URL) return;

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  try {
    await seedOttawa3PL(pool);
    await seedOttawaContractors(pool);
    await seedLongDistanceCanada(pool);
    await seedCommercialMovingOttawa(pool);
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

async function seedLongDistanceCanada(pool: Pool) {
  const check = await pool.query(
    "SELECT id FROM blog_posts WHERE slug = $1 LIMIT 1",
    [LONG_DISTANCE_CANADA_SLUG]
  );

  if (check.rowCount && check.rowCount > 0) return;

  const contentPath = path.join(
    process.cwd(),
    "server",
    "seed-content",
    "long-distance-movers-canada.html"
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
      "Top Long Distance Movers Canada: The Complete 2026 Guide",
      LONG_DISTANCE_CANADA_SLUG,
      "Everything you need to know about hiring the top long distance movers in Canada. Compare costs, understand contracts, avoid scams, and plan a stress-free cross-country move with this definitive 2026 guide.",
      content,
      "published",
      "Top Long Distance Movers Canada 2026 | Complete Cost & Planning Guide",
      "Searching for the top long distance movers in Canada? Our 2026 guide covers costs, what to look for, how to avoid scams, and why Prestige Moving is Ottawa's top-rated choice for cross-country relocations.",
      ["long distance movers canada","top long distance movers canada","best long distance moving companies canada","cross country movers canada","interprovincial movers canada","long distance moving companies","canada wide movers"],
      ["Long Distance Moving","Cross-Country Moving","Canada Movers","Moving Tips","Interprovincial Moving"],
      "/blog-images/long-distance-movers-canada.png",
      "Moving truck on Trans-Canada Highway representing long distance movers Canada",
      "Prestige Moving Team",
      "https://prestigemoving.ca/blog/top-long-distance-movers-canada-complete-guide",
      new Date().toISOString(),
    ]
  );

  console.log("[seed] Long Distance Movers Canada blog post created in database");
}

async function seedCommercialMovingOttawa(pool: Pool) {
  const check = await pool.query(
    "SELECT id FROM blog_posts WHERE slug = $1 LIMIT 1",
    [COMMERCIAL_MOVING_OTTAWA_SLUG]
  );

  if (check.rowCount && check.rowCount > 0) return;

  const contentPath = path.join(
    process.cwd(),
    "server",
    "seed-content",
    "commercial-moving-services-ottawa.html"
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
      "Commercial Moving Services Ottawa: The Complete 2026 Business Relocation Guide",
      COMMERCIAL_MOVING_OTTAWA_SLUG,
      "Planning a commercial move in Ottawa? This definitive guide covers everything businesses need to know: cost planning, minimizing downtime, IT relocation, choosing the right commercial movers, and what separates professional office moving from general moving services.",
      content,
      "published",
      "Commercial Moving Services Ottawa 2026 | Office & Business Relocation Guide",
      "Complete guide to commercial moving services in Ottawa. Learn how to plan a business relocation that minimizes downtime, protects your IT infrastructure, and keeps your team productive. Prestige Moving: Ottawa's top-rated commercial movers.",
      ["commercial moving services ottawa","office movers ottawa","commercial movers ottawa","business relocation ottawa","office moving company ottawa","commercial moving company ottawa","office relocation services"],
      ["Commercial Moving","Office Moving","Business Relocation","Ottawa Movers","Office Relocation"],
      "/blog-images/commercial-moving-ottawa.png",
      "Professional commercial movers relocating an Ottawa office with care and efficiency",
      "Prestige Moving Team",
      "https://prestigemoving.ca/blog/commercial-moving-services-ottawa-business-relocation-guide",
      new Date().toISOString(),
    ]
  );

  console.log("[seed] Commercial Moving Ottawa blog post created in database");
}
