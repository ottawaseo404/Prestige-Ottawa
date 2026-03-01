import { storage } from "./storage";
import { generateBlogPost, generateFeaturedImage, generateBlogIdeas } from "./ai-service";
import { nanoid } from "nanoid";

const BLOGS_PER_DAY = 1;
let isGenerating = false;

export async function generateDailyBlogs(): Promise<number> {
  if (isGenerating) {
    console.log("[Blog Scheduler] Generation already in progress, skipping...");
    return 0;
  }

  isGenerating = true;
  let generated = 0;
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

        let featuredImageData: string | null = null;
        try {
          console.log(`[Blog Scheduler] Generating featured image...`);
          const imageBase64 = await generateFeaturedImage(blogContent.title, "featured");
          featuredImageData = imageBase64;
          console.log(`[Blog Scheduler] Featured image generated and stored as base64 in DB`);
        } catch (imageError) {
          console.error(`[Blog Scheduler] Featured image generation failed:`, imageError);
        }

        let inlineImageData: string | null = null;
        try {
          console.log(`[Blog Scheduler] Generating inline content image...`);
          const inlineBase64 = await generateFeaturedImage(blogContent.title, "inline");
          inlineImageData = inlineBase64;
          console.log(`[Blog Scheduler] Inline image generated`);
        } catch (inlineError) {
          console.error(`[Blog Scheduler] Inline image generation failed:`, inlineError);
        }

        let finalContent = blogContent.content;
        if (inlineImageData) {
          const paragraphs = finalContent.split('\n\n');
          const insertIndex = Math.min(3, Math.floor(paragraphs.length / 3));
          const imageHtml = `\n\n<figure class="my-8"><img src="${inlineImageData}" alt="${blogContent.title} - Moving in Ottawa" class="w-full rounded-lg shadow-lg" /><figcaption class="text-center text-sm text-muted-foreground mt-2">Professional moving services in Ottawa</figcaption></figure>\n\n`;
          paragraphs.splice(insertIndex, 0, imageHtml);
          finalContent = paragraphs.join('\n\n');
        }

        // Append standardized CTA section
        const ctaSection = `
<hr class="wp-block-separator has-alpha-channel-opacity"/>

<div class="blog-cta-section" style="background: linear-gradient(135deg, #1A2332 0%, #2a3a52 100%); border-radius: 12px; padding: 40px; margin: 40px 0; text-align: center; color: white;">
  <h2 style="color: white; font-size: 1.75rem; font-weight: 700; margin-bottom: 12px;">Ready to Move? Get a Free Quote Today</h2>
  <p style="color: rgba(255,255,255,0.85); font-size: 1rem; margin-bottom: 24px; max-width: 560px; margin-left: auto; margin-right: auto;">Join thousands of satisfied Ottawa families who trusted Prestige Moving for their relocation. 5.0 stars · 349+ reviews · Fully licensed & insured.</p>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-bottom: 24px;">
    <div style="background: rgba(197,165,114,0.15); border: 1px solid rgba(197,165,114,0.4); border-radius: 8px; padding: 12px 20px; color: white; font-size: 0.9rem;">
      <strong style="color: #C5A572;">✓</strong> Free no-obligation estimate
    </div>
    <div style="background: rgba(197,165,114,0.15); border: 1px solid rgba(197,165,114,0.4); border-radius: 8px; padding: 12px 20px; color: white; font-size: 0.9rem;">
      <strong style="color: #C5A572;">✓</strong> WSIB insured & certified
    </div>
    <div style="background: rgba(197,165,114,0.15); border: 1px solid rgba(197,165,114,0.4); border-radius: 8px; padding: 12px 20px; color: white; font-size: 0.9rem;">
      <strong style="color: #C5A572;">✓</strong> Local Ottawa experts
    </div>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
    <a href="/book" style="background: #C5A572; color: #1A2332; font-weight: 700; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 1rem; display: inline-block;">Get Your Free Quote</a>
    <a href="tel:6136004000" style="background: transparent; color: white; font-weight: 600; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 1rem; border: 2px solid rgba(255,255,255,0.4); display: inline-block;">Call (613) 600-4000</a>
  </div>
  <p style="color: rgba(255,255,255,0.55); font-size: 0.8rem; margin-top: 16px; margin-bottom: 0;">50 Colonnade Rd Unit 200B, Ottawa, ON · Mon–Sun 7am–8pm</p>
</div>`;

        finalContent = finalContent + ctaSection;

        // FAQ JSON-LD schema is injected client-side in blog-post.tsx via Helmet

        const existingPost = await storage.getBlogPostBySlug(blogContent.slug);
        if (existingPost) {
          console.log(`[Blog Scheduler] Slug "${blogContent.slug}" already exists, adding unique suffix`);
          blogContent.slug = `${blogContent.slug}-${nanoid(4)}`;
        }

        await storage.createBlogPost({
          title: blogContent.title,
          slug: blogContent.slug,
          excerpt: blogContent.excerpt,
          content: finalContent,
          featuredImage: featuredImageData,
          featuredImageAlt: featuredImageData ? `${blogContent.title} - Prestige Moving Ottawa` : null,
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

        generated++;
        console.log(`[Blog Scheduler] Blog post created: "${blogContent.title}"`);

      } catch (blogError) {
        console.error(`[Blog Scheduler] Failed to generate blog for topic "${topic}":`, blogError);
      }
    }

    console.log(`[Blog Scheduler] Daily blog generation completed! Generated ${generated} posts.`);
  } catch (error) {
    console.error("[Blog Scheduler] Error in daily blog generation:", error);
  } finally {
    isGenerating = false;
  }

  return generated;
}

export function startBlogScheduler(): void {
  console.log("[Blog Scheduler] Scheduler started. Will generate 1 blog daily with AI images.");
  
  setInterval(() => {
    const now = new Date();
    if (now.getHours() === 8 && now.getMinutes() === 0) {
      console.log("[Blog Scheduler] 8 AM trigger - starting daily generation");
      generateDailyBlogs();
    }
  }, 60 * 1000);

  console.log("[Blog Scheduler] Scheduled to run daily at 8 AM Pacific Time");
}

export async function triggerManualGeneration(): Promise<{ success: boolean; message: string; generated: number }> {
  if (isGenerating) {
    return { success: false, message: "Blog generation already in progress", generated: 0 };
  }
  
  const generated = await generateDailyBlogs();
  return { success: true, message: `Generated ${generated} blog post${generated !== 1 ? "s" : ""} successfully`, generated };
}
