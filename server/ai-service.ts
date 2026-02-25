import OpenAI from "openai";
import pLimit from "p-limit";
import pRetry from "p-retry";

// This is using Replit's AI Integrations service, which provides OpenAI-compatible API access without requiring your own API key.
// Supported models: gpt-4o, gpt-4o-mini, gpt-5, gpt-5-mini, gpt-5-nano, o3, o3-mini, o4-mini, gpt-image-1
const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY
});

const AI_MODEL = "gpt-4o"; // Using gpt-4o for reliable performance

// Rate limiting for API calls
const limit = pLimit(2);

function isRateLimitError(error: any): boolean {
  const errorMsg = error?.message || String(error);
  return (
    errorMsg.includes("429") ||
    errorMsg.includes("RATELIMIT_EXCEEDED") ||
    errorMsg.toLowerCase().includes("quota") ||
    errorMsg.toLowerCase().includes("rate limit")
  );
}

// SEO-optimized blog post generation prompt - WordPress-style HTML output
const SEO_BLOG_PROMPT = `You are a senior SEO copywriter for Prestige Moving Ottawa. Write professional, SEO-optimized blog posts using clean HTML formatting (NOT Markdown).

OUTPUT FORMAT - Use proper HTML tags:
- Use <h2> for main section headings (NOT ## or **)
- Use <h3> for subsections
- Use <p> for paragraphs
- Use <strong> for bold text (NOT **)
- Use <ul><li> for bullet lists (NOT - or *)
- Use <ol><li> for numbered lists
- Use <hr class="wp-block-separator has-alpha-channel-opacity"/> between major sections
- Add WordPress block classes: <h2 class="wp-block-heading">

EXAMPLE CORRECT FORMAT:
<p>Moving to a new home in Ottawa can be exciting...</p>

<hr class="wp-block-separator has-alpha-channel-opacity"/>

<h2 class="wp-block-heading"><strong>Why Choose Professional Ottawa Movers</strong></h2>

<p>When relocating in the Ottawa area, professional movers offer several advantages:</p>

<ul>
<li><strong>Experience:</strong> Years of handling Ottawa's unique challenges</li>
<li><strong>Equipment:</strong> Professional tools for safe transport</li>
</ul>

CRITICAL RULES:
1. ONLY write about Ottawa, Ontario and surrounding areas (Orleans, Barrhaven, Kanata, Nepean, Stittsville, Bells Corners, Centretown, Hintonburg, Westboro, The Glebe, Rockcliffe Park, Sandy Hill, Gatineau)
2. NEVER mention Calgary, Toronto, Vancouver, Montreal, or any non-Ottawa locations
3. Write 1500-2000 words with detailed, actionable content
4. Use keyword-rich subheadings naturally throughout
5. Include local Ottawa references (Parliament Hill, Rideau Canal, ByWard Market, etc.)
6. Mention Prestige Moving Ottawa naturally 2-3 times
7. Include a call-to-action with phone number (613) 600-4000

Company info:
- Name: Prestige Moving Ottawa
- Phone: (613) 600-4000
- Address: 50 Colonnade Rd Unit 200B, Ottawa, ON K2E 7J6
- Google rating: 5.0 stars with 349 reviews`;

export interface GeneratedBlogContent {
  title: string;
  content: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  slug: string;
}

export async function generateBlogPost(topic: string): Promise<GeneratedBlogContent> {
  return limit(() =>
    pRetry(
      async () => {
        const response = await openai.chat.completions.create({
          model: AI_MODEL,
          messages: [
            {
              role: "system",
              content: SEO_BLOG_PROMPT
            },
            {
              role: "user",
              content: `Write an SEO-optimized article about: "${topic}"

IMPORTANT: Output content as clean HTML (NOT Markdown). Use <h2>, <h3>, <p>, <strong>, <ul>, <li> tags.
              
Return your response in the following JSON format:
{
  "title": "The main H1 title of the article",
  "content": "The full HTML content of the article (2000+ words) using proper HTML tags like <h2>, <p>, <strong>, <ul>, <li>. NO markdown syntax.",
  "excerpt": "A 2-3 sentence summary for the blog listing page",
  "metaTitle": "SEO meta title (50-60 characters)",
  "metaDescription": "SEO meta description (150-160 characters)",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "slug": "url-friendly-slug-for-the-article"
}`
            }
          ],
          max_completion_tokens: 8192,
          response_format: { type: "json_object" }
        });

        const content = response.choices[0]?.message?.content;
        if (!content) {
          throw new Error("No content generated");
        }

        const parsed = JSON.parse(content) as GeneratedBlogContent;
        
        // Ensure slug is URL-friendly
        parsed.slug = parsed.slug
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');

        return parsed;
      },
      {
        retries: 3,
        minTimeout: 2000,
        maxTimeout: 30000,
        factor: 2,
        onFailedAttempt: (error) => {
          console.log(`Blog generation attempt ${error.attemptNumber} failed. ${error.retriesLeft} retries left.`);
        }
      }
    )
  );
}

export async function generateFeaturedImage(title: string, type: "featured" | "inline" = "featured"): Promise<string> {
  return limit(() =>
    pRetry(
      async () => {
        let prompt: string;
        
        if (type === "featured") {
          prompt = `Professional, high-quality hero image for a moving company blog post titled "${title}". Modern, clean design with warm colors. Show professional movers in uniform, a moving truck, or a beautiful Ottawa cityscape with Parliament buildings. Photorealistic style, no text overlays, 16:9 aspect ratio composition.`;
        } else {
          prompt = `Illustrative photo for a moving company blog article about "${title}". Show a relevant scene: happy family moving into new home, professional movers carefully handling furniture, organized moving boxes with labels, or a cozy Ottawa neighborhood. Warm, inviting atmosphere, photorealistic style, no text overlays.`;
        }

        const response = await openai.images.generate({
          model: "gpt-image-1",
          prompt,
          size: "1024x1024",
        });

        const base64 = response.data?.[0]?.b64_json;
        if (!base64) {
          throw new Error("No image generated");
        }

        return `data:image/png;base64,${base64}`;
      },
      {
        retries: 2,
        minTimeout: 3000,
        maxTimeout: 30000,
        factor: 2,
        onFailedAttempt: (error) => {
          console.log(`Image generation attempt ${error.attemptNumber} failed. ${error.retriesLeft} retries left.`);
        }
      }
    )
  );
}

export interface PageIdea {
  title: string;
  route: string;
  category: "SEO Keyword" | "Neighbourhood" | "Service";
  description: string;
  targetKeyword: string;
  district?: string;
  priority: "High" | "Medium" | "Low";
}

const OTTAWA_NEIGHBOURHOODS = `
CENTRAL OTTAWA: ByWard Market, Centretown, Centretown West, Downtown, The Glebe, Golden Triangle, LeBreton Flats, Lower Town, Old Ottawa East, Old Ottawa South, Sandy Hill
EAST END: Carson Meadows, Castle Heights, Forbes, Lees Avenue, Lindenlea, Manor Park, New Edinburgh, Overbrook, Rockcliffe Park, Vanier, Viscount Alexander Park
SOUTH END: Airport-Uplands, Alta Vista, Billings Bridge, Confederation Heights, Ellwood, Elmvale Acres, Greenboro, Hawthorne Meadows, Heron Gate, Heron Park, Hunt Club, Hunt Club Park, Riverside Park, Riverview, Mooney's Bay Park, Sheffield Glen, South Keys, Urbandale
WEST END: Ambleside, Bel-Air Heights, Britannia, Britannia Village, Carlington, Carlingwood, Central Park, Champlain Park, Civic Hospital, Glabar Park, Hampton Park, Highland Park, Hintonburg, Lincoln Heights, McKellar Park, Mechanicsville, Qualicum, Tunney's Pasture, Wellington Village, Westboro, Whitehaven, Woodpark, Woodroffe North
GLOUCESTER: Beacon Hill, Blackburn Hamlet, Blossom Park, Carlsbad Springs, Carson Grove, Cedardale, Chapel Hill, Convent Glen, Cyrville, Findlay Creek, Gloucester Glen, Orleans, Orléans Village, Pineview, Riverside South, Rothwell Heights, Windsor Park Village
KANATA: Beaverbrook, Bridlewood, Glen Cairn, Kanata, Kanata Lakes, Kanata West, Katimavik-Hazeldean, Lakeside, Marchwood, Morgan's Grant, South March, Bridlewood, Town Centre Kanata
NEPEAN: Arlington Woods, Barrhaven, Bayshore, Bells Corners, Borden Farm, Briargreen, Centrepointe, City View, Country Place, Craig Henry, Crystal Beach, Davidson Heights, Fallowfield, Fisher Glen, Fisher Heights, Hillsdale, Jockvale, Knollsbrook, Leslie Park, Longfields, Lynwood Village, Manordale, Meadowlands, Merivale Gardens, Parkwood Hills, Pineglen, Qualicum, Ryan Farm, Skyline, Tanglewood, Trend Village, Twin Elm, Valley Stream, Westcliffe Estates
CUMBERLAND: Avalon, Bearbrook, Beckett Creek, Chatelaine Village, Cumberland Village, Fallingbrook, French Hill, Navan, Queenswood Heights, Queenswood Village, Vars
GOULBOURN: Ashton, Dwyer Hill, Munster, Old Stittsville, Richmond, Stittsville, Woodside Acres
OSGOODE TOWNSHIP: Belmeade, Greely, Kenmore, Metcalfe, Osgoode, Vernon
RIDEAU: Kars, Manotick, North Gower
WEST CARLETON: Fitzroy Harbour, Galetta, Kinburn, Constance Bay, Dunrobin, Carp, Corkery, Huntley
`;

export async function generatePageIdeas(
  category: "SEO Keyword" | "Neighbourhood" | "Service" | "All",
  existingRoutes: string[],
  count: number = 10
): Promise<PageIdea[]> {
  return limit(() =>
    pRetry(
      async () => {
        const existingList = existingRoutes.join(", ");

        const systemPrompt = `You are an SEO strategist for Prestige Moving Ottawa, a professional moving company serving Ottawa, Ontario, Canada.
Your job is to suggest new landing pages that will rank on Google and bring in local moving customers.

COMPANY INFO:
- Prestige Moving Ottawa | Phone: (613) 600-4000 | Address: 50 Colonnade Rd Unit 200B, Ottawa, ON
- Services: residential moving, commercial moving, long distance, packing, storage, junk removal, furniture assembly, piano moving, specialty items, senior moving, student moving

OTTAWA NEIGHBOURHOODS & DISTRICTS:
${OTTAWA_NEIGHBOURHOODS}

EXISTING PAGES (do NOT suggest these routes):
${existingList}

RULES:
1. Only suggest pages that do NOT already exist in the existing pages list
2. All routes must be lowercase, hyphenated, no trailing slash
3. For Neighbourhood pages: focus on Ottawa neighbourhoods not yet covered
4. For SEO Keyword pages: target high-intent moving keywords with Ottawa/neighbourhood modifier
5. For Service pages: suggest niche or specialty service pages
6. Return ONLY valid JSON

Return JSON in this exact format:
{
  "ideas": [
    {
      "title": "Page Display Title",
      "route": "/url-route",
      "category": "Neighbourhood" | "SEO Keyword" | "Service",
      "description": "1-sentence description of page purpose and target audience",
      "targetKeyword": "primary keyword this page targets",
      "district": "Ottawa district name (only for Neighbourhood pages)",
      "priority": "High" | "Medium" | "Low"
    }
  ]
}`;

        const categoryInstruction = category === "All"
          ? `Generate a mix of ${count} total ideas: roughly split between Neighbourhood, SEO Keyword, and Service pages. Focus heavily on Ottawa neighbourhoods not yet covered.`
          : category === "Neighbourhood"
          ? `Generate ${count} Neighbourhood pages for Ottawa areas not yet covered. Focus on high-density residential areas, suburbs, and districts with many families. Pick specific neighbourhoods from different districts across Ottawa.`
          : category === "SEO Keyword"
          ? `Generate ${count} SEO Keyword pages targeting high-search-volume moving queries in Ottawa. Include variations like "cheap movers ottawa", "same day movers ottawa", "moving company [neighbourhood]", "how much does moving cost ottawa", etc.`
          : `Generate ${count} Service pages for niche moving services not yet covered. Examples: condo moving, apartment moving, office relocation, last-minute moving, eco-friendly moving, moving with pets, moving insurance Ottawa, etc.`;

        const response = await openai.chat.completions.create({
          model: AI_MODEL,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: categoryInstruction }
          ],
          max_completion_tokens: 3000,
          response_format: { type: "json_object" }
        });

        const content = response.choices[0]?.message?.content;
        if (!content) throw new Error("No ideas generated");

        const parsed = JSON.parse(content);
        return (parsed.ideas || []) as PageIdea[];
      },
      {
        retries: 2,
        minTimeout: 2000,
        maxTimeout: 20000,
        factor: 2,
        onFailedAttempt: (error) => {
          console.log(`Page idea generation attempt ${error.attemptNumber} failed. ${error.retriesLeft} retries left.`);
        }
      }
    )
  );
}

export async function generateBlogIdeas(count: number = 5): Promise<string[]> {
  return limit(() =>
    pRetry(
      async () => {
        const response = await openai.chat.completions.create({
          model: AI_MODEL,
          messages: [
            {
              role: "system",
              content: `You are an SEO expert for Prestige Moving, a professional moving company based in Ottawa, Ontario. Generate blog post ideas that will rank well in Google and attract potential customers searching for moving services in Ottawa and surrounding areas.

Focus ONLY on Ottawa and these surrounding areas:
- Ottawa neighborhoods: Centretown, Hintonburg, Westboro, The Glebe, Sandy Hill, Rockcliffe Park, New Edinburgh, Alta Vista, Barrhaven, Kanata, Nepean, Orleans, Gloucester, Vanier
- Surrounding towns: Stittsville, Bells Corners, Carp, Manotick, Kemptville, Almonte, Carleton Place, Arnprior, Gatineau (Quebec side)

NEVER generate content about other cities like Calgary, Toronto, Vancouver, or Montreal - ONLY Ottawa and its surrounding areas.`
            },
            {
              role: "user",
              content: `Generate ${count} unique blog post title ideas. Each title MUST include "Ottawa" or an Ottawa-area neighborhood/town name. Focus on:

1. NEIGHBORHOOD GUIDES (40%): "[Neighborhood] Movers: [Specific Challenge] & Tips"
   Examples: "Barrhaven Movers: Family Home Relocations & School-Year Timing"
   
2. COST & PRICING (20%): How much moving costs in Ottawa, budget tips, pricing explained
   Examples: "How Much Do Ottawa Movers Charge in 2025? Complete Pricing Guide"
   
3. MOVING TIPS (20%): Packing guides, checklists, preparation for Ottawa moves
   Examples: "Ottawa Winter Moving Tips: Protecting Your Belongings in -20°C Weather"
   
4. SPECIALTY MOVES (10%): Piano, antiques, office, condo, long-distance from Ottawa
   Examples: "Piano Movers in Ottawa: Costs, Insurance & What to Expect"
   
5. SEASONAL/SITUATIONAL (10%): Peak season, holiday moves, last-minute moves in Ottawa
   Examples: "Last-Minute Movers in Ottawa: Same-Day & Emergency Moving Services"

Return as JSON: { "ideas": ["title1", "title2", ...] }`
            }
          ],
          max_completion_tokens: 1024,
          response_format: { type: "json_object" }
        });

        const content = response.choices[0]?.message?.content;
        if (!content) {
          throw new Error("No ideas generated");
        }

        const parsed = JSON.parse(content);
        return parsed.ideas || [];
      },
      {
        retries: 2,
        minTimeout: 2000,
        maxTimeout: 15000,
        factor: 2
      }
    )
  );
}
