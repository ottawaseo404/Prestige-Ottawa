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
const SEO_BLOG_PROMPT = `I only want you to answer in English. I want you to act as a very competent SEO and senior copywriter who speaks and writes fluent English. You should definitely use Markdown language when creating headings, that is, the main title should be created with h1 and subheadings with h2, h3, h4. Write the text as long as possible, at least 1500 words.

Write content that can outrank other websites. Don't tell me that there are many factors that affect good search rankings. I know that content quality is just one of them and here it is your job to write the best quality content possible.

Write a long, fully markdown-formatted article in English that can rank in Google for the given keywords. The article should be rich and comprehensive, with very detailed paragraphs, with a lot of detail.

Do not repeat my request. Make it a long article of at least 2000 words. Do not remind me what I asked you for. Do not apologize. Don't refer to yourself. Don't use generic filler sentences anymore. Use useful subheadings with keyword-rich titles. Get to the point fully and accurately. Don't explain what happened and why, just give me your best possible article.

All outputs will be in English. Write the article as long as possible, at least 1500 words. Make the headings bold and follow the h tags.

The article should be about moving services in Vancouver, BC, Canada, focusing on Prestige Moving Vancouver. Do NOT include any internal links or markdown links to service pages.

Company info:
- Name: Prestige Moving Vancouver
- Phone: 604-616-6066
- Location: Vancouver, BC, Canada
- Years in business: 15+
- Completed moves: 10,000+
- Google rating: 5.0 stars`;

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

export async function generateFeaturedImage(title: string): Promise<string> {
  return limit(() =>
    pRetry(
      async () => {
        const prompt = `Professional, high-quality hero image for a moving company blog post titled "${title}". Modern, clean design with warm colors. Show professional movers, moving trucks, or a beautiful Vancouver cityscape. Photorealistic style, no text overlays.`;

        const response = await openai.images.generate({
          model: "gpt-image-1",
          prompt,
          size: "1024x1024",
        });

        const base64 = response.data?.[0]?.b64_json;
        if (!base64) {
          throw new Error("No image generated");
        }

        // Return as base64 data URL
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
              content: "You are an SEO expert for a moving company in Vancouver, BC. Generate blog post ideas that will rank well in Google and attract potential customers."
            },
            {
              role: "user",
              content: `Generate ${count} unique blog post title ideas for a Vancouver moving company. Focus on:
- Moving tips and guides
- Vancouver-specific content (neighborhoods, regulations)
- Seasonal moving advice
- Cost saving tips
- Specialty moving topics

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
