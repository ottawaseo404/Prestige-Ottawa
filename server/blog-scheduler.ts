import { storage } from "./storage";
import { generateBlogPost, generateFeaturedImage, generateBlogIdeas } from "./ai-service";
import { nanoid } from "nanoid";
import fs from "fs";
import path from "path";

const BLOGS_PER_DAY = 2;
let isGenerating = false;

export async function generateDailyBlogs(): Promise<void> {
  if (isGenerating) {
    console.log("[Blog Scheduler] Generation already in progress, skipping...");
    return;
  }

  isGenerating = true;
  console.log("[Blog Scheduler] Starting daily blog generation...");

  try {
    const ideas = await generateBlogIdeas(BLOGS_PER_DAY);
    console.log(`[Blog Scheduler] Generated ${ideas.length} blog ideas`);

    for (let i = 0; i < Math.min(ideas.length, BLOGS_PER_DAY); i++) {
      const topic = ideas[i];
      console.log(`[Blog Scheduler] Generating blog ${i + 1}/${BLOGS_PER_DAY}: "${topic}"`);

      try {
        const blogContent = await generateBlogPost(topic);
        console.log(`[Blog Scheduler] Content generated for: "${blogContent.title}"`);

        let featuredImagePath = "";
        try {
          console.log(`[Blog Scheduler] Generating featured image...`);
          const imageBase64 = await generateFeaturedImage(blogContent.title);
          
          const imageBuffer = Buffer.from(imageBase64.replace(/^data:image\/\w+;base64,/, ""), "base64");
          const imageName = `blog-${blogContent.slug}-${nanoid(6)}.png`;
          const imagePath = path.join(process.cwd(), "client", "public", imageName);
          
          fs.writeFileSync(imagePath, imageBuffer);
          featuredImagePath = `/${imageName}`;
          console.log(`[Blog Scheduler] Image saved: ${featuredImagePath}`);
        } catch (imageError) {
          console.error(`[Blog Scheduler] Image generation failed:`, imageError);
          featuredImagePath = "/og-image.png";
        }

        const existingPost = await storage.getBlogPostBySlug(blogContent.slug);
        if (existingPost) {
          console.log(`[Blog Scheduler] Slug "${blogContent.slug}" already exists, adding unique suffix`);
          blogContent.slug = `${blogContent.slug}-${nanoid(4)}`;
        }

        await storage.createBlogPost({
          title: blogContent.title,
          slug: blogContent.slug,
          excerpt: blogContent.excerpt,
          content: blogContent.content,
          featuredImage: featuredImagePath,
          featuredImageAlt: `Featured image for ${blogContent.title}`,
          metaTitle: blogContent.metaTitle,
          metaDescription: blogContent.metaDescription,
          keywords: blogContent.keywords,
          tags: blogContent.keywords.slice(0, 4),
          authorName: "Prestige Moving Team",
          status: "published",
          publishedAt: new Date(),
          isAiGenerated: true,
          aiPrompt: topic,
        });

        console.log(`[Blog Scheduler] Blog post created: "${blogContent.title}"`);

        if (i < BLOGS_PER_DAY - 1) {
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
      } catch (blogError) {
        console.error(`[Blog Scheduler] Failed to generate blog for topic "${topic}":`, blogError);
      }
    }

    console.log("[Blog Scheduler] Daily blog generation completed!");
  } catch (error) {
    console.error("[Blog Scheduler] Error in daily blog generation:", error);
  } finally {
    isGenerating = false;
  }
}

export function startBlogScheduler(): void {
  const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
  
  console.log("[Blog Scheduler] Scheduler started. Will generate 2 blogs every 24 hours.");
  
  setInterval(() => {
    const now = new Date();
    if (now.getHours() === 8 && now.getMinutes() === 0) {
      console.log("[Blog Scheduler] 8 AM trigger - starting daily generation");
      generateDailyBlogs();
    }
  }, 60 * 1000);

  console.log("[Blog Scheduler] Scheduled to run daily at 8 AM Pacific Time");
}

export async function triggerManualGeneration(): Promise<{ success: boolean; message: string }> {
  if (isGenerating) {
    return { success: false, message: "Blog generation already in progress" };
  }
  
  generateDailyBlogs();
  return { success: true, message: "Blog generation started in background" };
}
