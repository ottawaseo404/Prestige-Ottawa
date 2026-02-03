import * as fs from 'fs';
import * as path from 'path';
import { parseStringPromise } from 'xml2js';
import { storage } from './storage';

interface WPItem {
  title: string[];
  'content:encoded': string[];
  'excerpt:encoded': string[];
  'wp:post_id': string[];
  'wp:post_date': string[];
  'wp:post_name': string[];
  'wp:status': string[];
  'wp:post_type': string[];
  'wp:postmeta'?: Array<{
    'wp:meta_key': string[];
    'wp:meta_value': string[];
  }>;
  category?: Array<{
    _: string;
    $: { domain: string; nicename: string };
  }>;
}

interface ParsedPost {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishedAt: Date;
  status: string;
  thumbnailId?: string;
  featuredImageUrl?: string;
  tags: string[];
  seoDescription?: string;
}

function extractImagesFromContent(content: string): string[] {
  const imgRegex = /src=["'](https?:\/\/[^"']+\.(jpg|jpeg|png|gif|webp)[^"']*)["']/gi;
  const matches: string[] = [];
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    matches.push(match[1]);
  }
  return matches;
}

function stripWordPressShortcodes(content: string): string {
  let cleaned = content.replace(/\[vc_[^\]]*\]/g, '');
  cleaned = cleaned.replace(/\[\/vc_[^\]]*\]/g, '');
  cleaned = cleaned.replace(/\[themestek_[^\]]*\]/g, '');
  cleaned = cleaned.replace(/\[\/themestek_[^\]]*\]/g, '');
  cleaned = cleaned.replace(/\[\/?[a-z_]+[^\]]*\]/gi, '');
  return cleaned;
}

function convertWordPressBlocksToHtml(content: string): string {
  let html = content;
  html = html.replace(/<!-- wp:paragraph -->/g, '');
  html = html.replace(/<!-- \/wp:paragraph -->/g, '');
  html = html.replace(/<!-- wp:heading({[^}]*})? -->/g, '');
  html = html.replace(/<!-- \/wp:heading -->/g, '');
  html = html.replace(/<!-- wp:list({[^}]*})? -->/g, '');
  html = html.replace(/<!-- \/wp:list -->/g, '');
  html = html.replace(/<!-- wp:list-item -->/g, '');
  html = html.replace(/<!-- \/wp:list-item -->/g, '');
  html = html.replace(/<!-- wp:image({[^}]*})? -->/g, '');
  html = html.replace(/<!-- \/wp:image -->/g, '');
  html = html.replace(/<!-- wp:[^>]+ -->/g, '');
  html = html.replace(/<!-- \/wp:[^>]+ -->/g, '');
  html = stripWordPressShortcodes(html);
  return html.trim();
}

async function downloadImage(url: string, filename: string): Promise<string | null> {
  try {
    const httpsUrl = url.replace('http://', 'https://');
    const response = await fetch(httpsUrl);
    if (!response.ok) {
      console.log(`Failed to download image: ${httpsUrl}`);
      return null;
    }
    const buffer = await response.arrayBuffer();
    const imagesDir = path.join(process.cwd(), 'client', 'public', 'blog-images');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }
    const ext = path.extname(filename) || '.jpg';
    const safeName = filename.replace(/[^a-zA-Z0-9.-]/g, '-').substring(0, 100);
    const finalName = safeName.endsWith(ext) ? safeName : `${safeName}${ext}`;
    const filePath = path.join(imagesDir, finalName);
    fs.writeFileSync(filePath, Buffer.from(buffer));
    return `/blog-images/${finalName}`;
  } catch (error) {
    console.error(`Error downloading image ${url}:`, error);
    return null;
  }
}

async function parseWordPressXml(xmlPath: string): Promise<ParsedPost[]> {
  const xmlContent = fs.readFileSync(xmlPath, 'utf-8');
  const result = await parseStringPromise(xmlContent, { explicitArray: true });
  const items: WPItem[] = result.rss.channel[0].item || [];
  const posts: ParsedPost[] = [];
  
  for (const item of items) {
    const postType = item['wp:post_type']?.[0] || '';
    const status = item['wp:status']?.[0] || '';
    
    if (postType !== 'post' || status !== 'publish') {
      continue;
    }
    
    const title = item.title?.[0] || '';
    if (typeof title !== 'string' || !title.trim()) continue;
    
    const content = item['content:encoded']?.[0] || '';
    const excerpt = item['excerpt:encoded']?.[0] || '';
    const slug = item['wp:post_name']?.[0] || '';
    const postDate = item['wp:post_date']?.[0] || new Date().toISOString();
    
    let thumbnailId: string | undefined;
    let seoDescription: string | undefined;
    const tags: string[] = [];
    
    if (item['wp:postmeta']) {
      for (const meta of item['wp:postmeta']) {
        const key = meta['wp:meta_key']?.[0];
        const value = meta['wp:meta_value']?.[0];
        if (key === '_thumbnail_id') {
          thumbnailId = value;
        }
        if (key === 'rank_math_description') {
          seoDescription = value;
        }
      }
    }
    
    if (item.category) {
      for (const cat of item.category) {
        if (cat.$ && cat.$.domain === 'post_tag') {
          tags.push(cat._);
        }
      }
    }
    
    const images = extractImagesFromContent(content);
    const featuredImageUrl = images.length > 0 ? images[0] : undefined;
    
    posts.push({
      title: title.trim(),
      slug,
      content: convertWordPressBlocksToHtml(content),
      excerpt: excerpt || seoDescription || '',
      publishedAt: new Date(postDate),
      status,
      thumbnailId,
      featuredImageUrl,
      tags,
      seoDescription,
    });
  }
  
  return posts;
}

export async function importWordPressPosts(xmlPath: string): Promise<{ imported: number; errors: number }> {
  console.log(`[WP Import] Starting import from ${xmlPath}`);
  
  const posts = await parseWordPressXml(xmlPath);
  console.log(`[WP Import] Found ${posts.length} published posts to import`);
  
  let imported = 0;
  let errors = 0;
  
  for (const post of posts) {
    try {
      let localImagePath: string | null = null;
      
      if (post.featuredImageUrl) {
        const imageName = path.basename(new URL(post.featuredImageUrl).pathname);
        console.log(`[WP Import] Downloading image: ${imageName}`);
        localImagePath = await downloadImage(post.featuredImageUrl, imageName);
      }
      
      const existingPost = await storage.getBlogPostBySlug(post.slug);
      
      if (existingPost) {
        console.log(`[WP Import] Skipping duplicate: ${post.title}`);
        continue;
      }
      
      const finalSlug = post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const finalExcerpt = post.excerpt || post.seoDescription || post.content.substring(0, 200).replace(/<[^>]*>/g, '');
      
      await storage.createBlogPost({
        title: post.title,
        slug: finalSlug,
        content: post.content,
        excerpt: finalExcerpt,
        metaDescription: post.seoDescription || post.excerpt || '',
        keywords: post.tags,
        featuredImage: localImagePath || post.featuredImageUrl || null,
        status: 'published',
        publishedAt: post.publishedAt,
      });
      
      imported++;
      console.log(`[WP Import] Imported: ${post.title}`);
    } catch (error) {
      console.error(`[WP Import] Error importing "${post.title}":`, error);
      errors++;
    }
  }
  
  console.log(`[WP Import] Complete. Imported: ${imported}, Errors: ${errors}`);
  return { imported, errors };
}

export async function runImport() {
  const blogsXmlPath = path.join(process.cwd(), 'attached_assets', 'prestigemovingottawathemosttrustedmovingexpertsinottawa.WordPr_1770076378696.xml');
  
  if (!fs.existsSync(blogsXmlPath)) {
    console.error('[WP Import] XML file not found:', blogsXmlPath);
    return { imported: 0, errors: 0, message: 'XML file not found' };
  }
  
  const result = await importWordPressPosts(blogsXmlPath);
  return result;
}
