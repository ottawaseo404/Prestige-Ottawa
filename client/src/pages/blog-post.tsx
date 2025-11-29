import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, useParams } from "wouter";
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  Clock, 
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight,
  Tag,
  ArrowRight
} from "lucide-react";
import { format } from "date-fns";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import type { BlogPost, BlogCategory } from "@shared/schema";

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ["/api/blog/posts/slug", slug],
    enabled: !!slug,
  });

  const { data: categories } = useQuery<BlogCategory[]>({
    queryKey: ["/api/blog/categories"],
  });

  const { data: relatedPosts } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts"],
  });

  const getCategoryName = (categoryId: string | null) => {
    if (!categoryId || !categories) return null;
    return categories.find(c => c.id === categoryId)?.name;
  };

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const getRelatedPosts = () => {
    if (!relatedPosts || !post) return [];
    return relatedPosts
      .filter(p => p.id !== post.id && p.status === "published")
      .slice(0, 3);
  };

  if (isLoading) {
    return (
      <>
        <SharedNavigation />
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-4 max-w-4xl py-12">
            <Skeleton className="h-8 w-64 mb-4" />
            <Skeleton className="h-12 w-full mb-4" />
            <Skeleton className="h-[400px] w-full rounded-xl mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </main>
        <SharedFooter />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <SharedNavigation />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <SharedFooter />
      </>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription || post.excerpt,
    "image": post.featuredImage || "https://vancouver.prestigemoving.ca/og-image.png",
    "author": {
      "@type": "Person",
      "name": post.authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "Prestige Moving Vancouver",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vancouver.prestigemoving.ca/logo.png"
      }
    },
    "datePublished": post.publishedAt || post.createdAt,
    "dateModified": post.updatedAt || post.createdAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://vancouver.prestigemoving.ca/blog/${post.slug}`
    },
    "keywords": post.keywords?.join(", ") || ""
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle || post.title} | Prestige Moving Vancouver</title>
        <meta name="description" content={post.metaDescription || post.excerpt || ""} />
        <meta name="keywords" content={post.keywords?.join(", ") || ""} />
        <link rel="canonical" href={`https://vancouver.prestigemoving.ca/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.metaTitle || post.title} />
        <meta property="og:description" content={post.metaDescription || post.excerpt || ""} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://vancouver.prestigemoving.ca/blog/${post.slug}`} />
        {post.featuredImage && <meta property="og:image" content={post.featuredImage} />}
        <meta property="article:published_time" content={post.publishedAt?.toString() || post.createdAt.toString()} />
        <meta property="article:author" content={post.authorName || "Prestige Moving Team"} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle || post.title} />
        <meta name="twitter:description" content={post.metaDescription || post.excerpt || ""} />
        {post.featuredImage && <meta name="twitter:image" content={post.featuredImage} />}
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <SharedNavigation />

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-[#1A2332] text-white py-12 lg:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[#C5A572] mb-6 text-sm">
              <Link href="/">
                <span className="hover:underline cursor-pointer">Home</span>
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/blog">
                <span className="hover:underline cursor-pointer">Blog</span>
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-400 truncate">{post.title}</span>
            </div>

            {/* Category Badge */}
            {getCategoryName(post.categoryId) && (
              <Badge className="mb-4 bg-[#C5A572] text-white">
                {getCategoryName(post.categoryId)}
              </Badge>
            )}

            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-gray-300 flex-wrap">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.authorName}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {format(new Date(post.publishedAt || post.createdAt), "MMMM d, yyyy")}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {estimateReadTime(post.content)}
              </span>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl py-12">
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="-mt-24 mb-8 relative z-10">
              <img
                src={post.featuredImage}
                alt={post.featuredImageAlt || post.title}
                className="w-full aspect-video object-cover rounded-xl shadow-xl"
              />
            </div>
          )}

          {/* Content */}
          <article className="prose prose-lg max-w-none dark:prose-invert mb-12">
            <div dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
          </article>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap mb-8 pb-8 border-b">
              <Tag className="h-4 w-4 text-muted-foreground" />
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Share */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Share:</span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
            </div>
            <Link href="/blog">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Related Posts */}
          {getRelatedPosts().length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {getRelatedPosts().map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <Card className="overflow-hidden hover-elevate cursor-pointer h-full">
                      {relatedPost.featuredImage ? (
                        <div className="aspect-video">
                          <img
                            src={relatedPost.featuredImage}
                            alt={relatedPost.featuredImageAlt || relatedPost.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video bg-gradient-to-br from-[#1A2332] to-[#2A3342]" />
                      )}
                      <CardContent className="p-4">
                        <h3 className="font-semibold line-clamp-2">{relatedPost.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          {format(new Date(relatedPost.publishedAt || relatedPost.createdAt), "MMM d, yyyy")}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <Card className="bg-[#1A2332] text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Move?</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Get a free quote from Vancouver's most trusted moving company.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/book">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#B89862] text-white">
                  Get Free Quote
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:604-616-6066">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Call 604-616-6066
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </main>

      <SharedFooter />
    </>
  );
}

function renderMarkdown(content: string): string {
  return content
    .replace(/^#### (.*$)/gm, '<h4 class="text-lg font-semibold mt-4 mb-2">$1</h4>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/^(.+)$/gm, (match) => {
      if (match.startsWith('<')) return match;
      return `<p class="mb-4">${match}</p>`;
    });
}
