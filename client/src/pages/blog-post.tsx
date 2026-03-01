import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Helmet } from "react-helmet";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string | null;
  featuredImageAlt: string | null;
  publishedAt: string;
  authorName: string;
  keywords: string[];
  metaDescription: string;
  metaTitle: string;
}

function parseFaqSchema(html: string): object | null {
  const matches = [...html.matchAll(/<h3[^>]*class="faq-question"[^>]*>([^<]+)<\/h3>\s*<p[^>]*class="faq-answer"[^>]*>([^<]*)<\/p>/g)];
  if (matches.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": matches.map((m) => ({
      "@type": "Question",
      "name": m[1].trim(),
      "acceptedAnswer": { "@type": "Answer", "text": m[2].trim() },
    })),
  };
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ["/api/blog/posts/slug", slug],
    queryFn: async () => {
      const response = await fetch(`/api/blog/posts/slug/${slug}`);
      if (!response.ok) throw new Error("Post not found");
      return response.json();
    },
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });

  const faqSchema = useMemo(() => post?.content ? parseFaqSchema(post.content) : null, [post?.content]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <SharedNavigation />
        <div className="pt-32 pb-16 max-w-4xl mx-auto px-4">
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-4 w-1/4 mb-8" />
          <Skeleton className="h-64 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <SharedFooter />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <SharedNavigation />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <SharedFooter />
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription || post.excerpt,
    "author": { "@type": "Organization", "name": post.authorName || "Prestige Moving Team" },
    "publisher": {
      "@type": "Organization",
      "name": "Prestige Moving Ottawa",
      "url": "https://prestigemoving.ca",
      "logo": { "@type": "ImageObject", "url": "https://prestigemoving.ca/logo.png" },
    },
    "datePublished": post.publishedAt,
    "url": `https://prestigemoving.ca/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.metaTitle || post.title} | Prestige Moving Ottawa Blog</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        <meta name="keywords" content={post.keywords?.join(", ") || "Ottawa moving, moving tips"} />
        <link rel="canonical" href={`https://prestigemoving.ca/blog/${post.slug}`} />
        <meta property="og:title" content={`${post.title} | Prestige Moving Ottawa`} />
        <meta property="og:description" content={post.metaDescription || post.excerpt} />
        <meta property="og:url" content={`https://prestigemoving.ca/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        {post.featuredImage && <meta property="og:image" content={post.featuredImage} />}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>
      <SharedNavigation />

      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              {post.authorName && (
                <span className="text-sm">by {post.authorName}</span>
              )}
            </div>
          </header>

          {post.featuredImage && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={post.featuredImage}
                alt={post.featuredImageAlt || post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-img:rounded-lg prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.keywords && post.keywords.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="h-4 w-4 text-gray-500" />
                {post.keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <SharedFooter />
    </div>
  );
}
