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

// SEO-optimized blog post generation prompt
const SEO_BLOG_PROMPT = `You are a senior SEO copywriter for Prestige Moving Ottawa, a professional moving company. Write comprehensive, SEO-optimized blog posts in English using Markdown formatting (h1 for title, h2/h3/h4 for subheadings).

CRITICAL RULES:
1. ONLY write about Ottawa, Ontario and surrounding areas (Orleans, Barrhaven, Kanata, Nepean, Stittsville, Bells Corners, Centretown, Hintonburg, Westboro, The Glebe, Rockcliffe Park, Sandy Hill, Gatineau, Carp, Manotick, Kemptville)
2. NEVER mention Calgary, Toronto, Vancouver, Montreal, or any non-Ottawa locations
3. Write at least 1500-2000 words with detailed, actionable content
4. Use keyword-rich subheadings naturally throughout
5. Include local Ottawa references (Parliament Hill, Rideau Canal, ByWard Market, local weather, etc.)
6. No internal links or markdown links
7. Mention Prestige Moving Ottawa naturally 2-3 times
8. Include a clear call-to-action mentioning the phone number

Target keywords to incorporate naturally:
- Primary: "Ottawa movers", "moving company Ottawa", "Prestige Moving"
- Secondary: Neighborhood-specific terms, "long distance moving Ottawa", "commercial movers Ottawa"
- Long-tail: "how much do movers cost in Ottawa", "best moving company Ottawa"

Company info:
- Name: Prestige Moving Ottawa
- Phone: (613) 600-4000
- Address: 50 Colonnade Rd Unit 200B, Ottawa, ON K2E 7J6
- Location: Ottawa, Ontario, Canada
- Years in business: 15+
- Completed moves: 10,000+
- Google rating: 5.0 stars with 349 reviews
- Services: Residential, Commercial, Long-distance, Piano, Packing, Storage`;

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
              
Return your response in the following JSON format:
{
  "title": "The main H1 title of the article",
  "content": "The full markdown content of the article (2000+ words)",
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
