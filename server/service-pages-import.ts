import * as fs from 'fs';
import * as path from 'path';
import { parseStringPromise } from 'xml2js';
import { storage } from './storage';

interface WPItem {
  title: string[];
  link: string[];
  'content:encoded': string[];
  'excerpt:encoded'?: string[];
  'wp:post_name': string[];
  'wp:status': string[];
  'wp:post_type': string[];
}

interface ParsedServicePage {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  metaDescription: string;
}

function stripWordPressShortcodes(content: string): string {
  let cleaned = content;
  // Remove Visual Composer shortcodes
  cleaned = cleaned.replace(/\[vc_[^\]]*\]/g, '');
  cleaned = cleaned.replace(/\[\/vc_[^\]]*\]/g, '');
  // Remove themestek shortcodes
  cleaned = cleaned.replace(/\[themestek_[^\]]*\]/g, '');
  cleaned = cleaned.replace(/\[\/themestek_[^\]]*\]/g, '');
  // Remove any remaining shortcodes
  cleaned = cleaned.replace(/\[\/?[a-z_]+[^\]]*\]/gi, '');
  return cleaned;
}

function cleanHtmlContent(content: string): string {
  let html = content;
  
  // Remove WordPress block comments
  html = html.replace(/<!-- wp:[^>]+ -->/g, '');
  html = html.replace(/<!-- \/wp:[^>]+ -->/g, '');
  
  // Strip shortcodes
  html = stripWordPressShortcodes(html);
  
  // Remove data attributes
  html = html.replace(/\s*data-[a-z-]+="[^"]*"/gi, '');
  
  // Update internal links to use relative paths
  html = html.replace(/https?:\/\/prestigemoving\.ca\/service\//g, '/services/');
  html = html.replace(/https?:\/\/prestigemoving\.ca\/booking\/?/g, '/book');
  html = html.replace(/https?:\/\/prestigemoving\.ca\/contact\/?/g, '/contact');
  html = html.replace(/https?:\/\/prestigemoving\.ca\/pricing\/?/g, '/#packages');
  html = html.replace(/https?:\/\/prestigemoving\.ca\/?(?=["'])/g, '/');
  
  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');
  
  return html.trim();
}

function extractSlugFromLink(link: string): string {
  // Extract slug from URL like https://prestigemoving.ca/service/residential-moving-service-in-ottawa/
  const match = link.match(/\/service\/([^/]+)\/?$/);
  if (match) {
    return match[1];
  }
  return '';
}

function createCleanSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+in\s+ottawa$/i, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

async function parseServicePagesXml(xmlPath: string): Promise<ParsedServicePage[]> {
  const xmlContent = fs.readFileSync(xmlPath, 'utf-8');
  const result = await parseStringPromise(xmlContent);
  
  const items = result?.rss?.channel?.[0]?.item || [];
  const servicePages: ParsedServicePage[] = [];
  
  // Main service page slugs we want to import
  const mainServiceSlugs = [
    'residential-moving-service-in-ottawa',
    'long-distance-moving-service-in-ottawa',
    'moving-supplies-delivery-service-in-ottawa',
    'student-moving-service-in-ottawa',
    'packing-service-in-ottawa',
    'commercial-moving-services-ottawa',
    'specialty-item-moving-service-in-ottawa',
    'storage-solution-service-in-ottawa',
    'ottawa-antique-movers'
  ];
  
  for (const item of items) {
    const link = item.link?.[0] || '';
    const slug = extractSlugFromLink(link);
    
    // Only import main service pages, not sub-pages
    if (!mainServiceSlugs.includes(slug)) {
      continue;
    }
    
    const title = item.title?.[0] || '';
    const content = item['content:encoded']?.[0] || '';
    const excerpt = item['excerpt:encoded']?.[0] || '';
    
    if (!title || !content) {
      continue;
    }
    
    const cleanedContent = cleanHtmlContent(content);
    
    servicePages.push({
      title: title.replace(/<!\[CDATA\[|\]\]>/g, '').trim(),
      slug: createCleanSlug(title),
      content: cleanedContent,
      excerpt: excerpt.replace(/<!\[CDATA\[|\]\]>/g, '').trim() || '',
      metaDescription: `${title} - Professional moving services by Prestige Moving Ottawa. Call (613) 600-4000 for a free quote.`,
    });
  }
  
  return servicePages;
}

export async function importServicePages(): Promise<{ imported: number; errors: string[] }> {
  const xmlPath = path.join(process.cwd(), 'attached_assets', 'prestigemovingottawathemosttrustedmovingexpertsinottawa.WordPr_1770081913364.xml');
  
  if (!fs.existsSync(xmlPath)) {
    return { imported: 0, errors: ['Service pages XML file not found'] };
  }
  
  console.log('[Service Import] Parsing XML file...');
  const pages = await parseServicePagesXml(xmlPath);
  console.log(`[Service Import] Found ${pages.length} service pages to import`);
  
  let imported = 0;
  const errors: string[] = [];
  
  const sortOrderMap: Record<string, number> = {
    'residential-moving-service': 1,
    'commercial-moving-services': 2,
    'long-distance-moving-service': 3,
    'packing-service': 4,
    'moving-supplies-delivery-service': 5,
    'student-moving-service': 6,
    'storage-solution-service': 7,
    'specialty-item-moving-service': 8,
    'ottawa-antique-movers': 9,
  };
  
  for (const page of pages) {
    try {
      // Check if page already exists
      const existing = await storage.getServicePageBySlug(page.slug);
      if (existing) {
        console.log(`[Service Import] Skipping existing page: ${page.title}`);
        continue;
      }
      
      // Determine sort order
      let sortOrder = 99;
      for (const [key, order] of Object.entries(sortOrderMap)) {
        if (page.slug.includes(key)) {
          sortOrder = order;
          break;
        }
      }
      
      await storage.createServicePage({
        title: page.title,
        slug: page.slug,
        content: page.content,
        excerpt: page.excerpt,
        metaDescription: page.metaDescription,
        keywords: ['Ottawa movers', 'moving company Ottawa', 'Prestige Moving', page.title.toLowerCase()],
        isActive: true,
        sortOrder,
      });
      
      console.log(`[Service Import] Imported: ${page.title}`);
      imported++;
    } catch (error: any) {
      console.error(`[Service Import] Error importing ${page.title}:`, error.message);
      errors.push(`${page.title}: ${error.message}`);
    }
  }
  
  console.log(`[Service Import] Complete! Imported ${imported} service pages`);
  return { imported, errors };
}
