import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Helmet } from "react-helmet";
import { LazyBlogImage } from "@/components/lazy-blog-image";

interface BlogPostLite {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featuredImageAlt: string | null;
  authorName: string;
  publishedAt: string;
  categoryId: string | null;
  tags: string[] | null;
  isAiGenerated: boolean;
  viewCount: number;
}

interface BlogListResponse {
  posts: BlogPostLite[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export default function Blog() {
  const [page, setPage] = useState(1);

  const { data, isLoading, error, refetch } = useQuery<BlogListResponse>({
    queryKey: ["/api/blog/posts", page],
    queryFn: async () => {
      const res = await fetch(`/api/blog/posts?page=${page}&limit=12`, { credentials: "include" });
      if (!res.ok) throw new Error(`${res.status}`);
      return res.json();
    },
    staleTime: 60 * 1000,
    retry: 3,
    retryDelay: 1000,
  });

  const posts = data?.posts || [];
  const totalPages = data?.totalPages || 1;
  const total = data?.total || 0;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Moving Tips & Blog | Prestige Moving Ottawa</title>
        <meta name="description" content="Expert moving tips, packing guides, and helpful advice from Ottawa's trusted movers. Learn how to plan your move, protect your belongings, and save money on your next relocation." />
        <meta name="keywords" content="moving tips, packing guide, Ottawa moving blog, relocation advice, moving checklist, how to move" />
        <link rel="canonical" href="https://prestigemoving.ca/blog" />
        <meta property="og:title" content="Moving Tips & Blog | Prestige Moving Ottawa" />
        <meta property="og:description" content="Expert moving tips and helpful advice from Ottawa's trusted movers." />
        <meta property="og:url" content="https://prestigemoving.ca/blog" />
        <meta property="og:type" content="website" />
      </Helmet>
      <SharedNavigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#1A2332] to-[#2a3a52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Moving Tips & Insights
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Expert advice and helpful tips to make your move as smooth as possible
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">Unable to load blog posts.</p>
              <Button variant="outline" onClick={() => refetch()}>Try again</Button>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">No blog posts available yet.</p>
              <Button variant="outline" onClick={() => refetch()}>Refresh</Button>
            </div>
          ) : (
            <>
              {total > 0 && (
                <p className="text-sm text-gray-500 mb-6">{total} articles available</p>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow cursor-pointer group">
                      <LazyBlogImage postId={post.id} title={post.title} />
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }) : ""}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 line-clamp-3 mb-4">
                          {post.excerpt?.replace(/<[^>]*>/g, '') || ''}
                        </p>
                        <div className="flex items-center text-primary font-medium">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-12">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page <= 1}
                    data-testid="button-blog-prev"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm text-gray-600">
                    Page {page} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page >= totalPages}
                    data-testid="button-blog-next"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}
