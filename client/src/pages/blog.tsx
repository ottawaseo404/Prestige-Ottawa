import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Clock, 
  Tag,
  FileText,
  ChevronRight
} from "lucide-react";
import { format } from "date-fns";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import type { BlogPost, BlogCategory } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading: postsLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts"],
  });

  const { data: categories } = useQuery<BlogCategory[]>({
    queryKey: ["/api/blog/categories"],
  });

  const featuredPost = posts?.[0];
  const otherPosts = posts?.slice(1) || [];

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

  return (
    <>
      <Helmet>
        <title>Moving Tips & Guides | Prestige Moving Vancouver Blog</title>
        <meta 
          name="description" 
          content="Expert moving tips, guides, and advice from Vancouver's premier moving company. Learn how to save money, pack efficiently, and make your move stress-free." 
        />
        <meta name="keywords" content="moving tips, Vancouver moving, packing guides, moving advice, relocation tips" />
        <link rel="canonical" href="https://vancouver.prestigemoving.ca/blog" />
        <meta property="og:title" content="Moving Tips & Guides | Prestige Moving Vancouver Blog" />
        <meta property="og:description" content="Expert moving tips, guides, and advice from Vancouver's premier moving company." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vancouver.prestigemoving.ca/blog" />
      </Helmet>

      <SharedNavigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-[#1A2332] text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-2 text-[#C5A572] mb-4">
              <Link href="/">
                <span className="hover:underline cursor-pointer">Home</span>
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>Blog</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Moving Tips & Guides
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Expert advice from Vancouver's most trusted moving company. Learn how to make your move stress-free.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl py-12">
          {/* Categories */}
          {categories && categories.length > 0 && (
            <div className="flex gap-2 flex-wrap mb-8">
              <Badge variant="default" className="cursor-pointer">All Posts</Badge>
              {categories.map((category) => (
                <Badge 
                  key={category.id} 
                  variant="outline" 
                  className="cursor-pointer hover-elevate"
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          )}

          {postsLoading ? (
            <div className="grid gap-8 lg:grid-cols-2">
              <Skeleton className="h-[400px] rounded-xl" />
              <div className="space-y-4">
                <Skeleton className="h-[190px] rounded-lg" />
                <Skeleton className="h-[190px] rounded-lg" />
              </div>
            </div>
          ) : posts?.length === 0 ? (
            <Card className="py-16 text-center">
              <CardContent>
                <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  We're working on creating helpful content for your moving journey. Check back soon!
                </p>
                <Link href="/book">
                  <Button size="lg">
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <section className="mb-12">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Card className="overflow-hidden hover-elevate cursor-pointer" data-testid="card-featured-post">
                      <div className="grid lg:grid-cols-2">
                        {featuredPost.featuredImage ? (
                          <div className="aspect-video lg:aspect-auto">
                            <img
                              src={featuredPost.featuredImage}
                              alt={featuredPost.featuredImageAlt || featuredPost.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-[#1A2332] to-[#2A3342] flex items-center justify-center">
                            <FileText className="h-24 w-24 text-[#C5A572]/30" />
                          </div>
                        )}
                        <div className="p-6 lg:p-8 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="default">Featured</Badge>
                            {getCategoryName(featuredPost.categoryId) && (
                              <Badge variant="outline">
                                {getCategoryName(featuredPost.categoryId)}
                              </Badge>
                            )}
                          </div>
                          <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                            {featuredPost.title}
                          </h2>
                          <p className="text-muted-foreground mb-4 line-clamp-3">
                            {featuredPost.excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {featuredPost.authorName}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {format(new Date(featuredPost.publishedAt || featuredPost.createdAt), "MMM d, yyyy")}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {estimateReadTime(featuredPost.content)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </section>
              )}

              {/* Other Posts Grid */}
              {otherPosts.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {otherPosts.map((post) => (
                      <Link key={post.id} href={`/blog/${post.slug}`}>
                        <Card className="overflow-hidden hover-elevate cursor-pointer h-full" data-testid={`card-post-${post.id}`}>
                          {post.featuredImage ? (
                            <div className="aspect-video">
                              <img
                                src={post.featuredImage}
                                alt={post.featuredImageAlt || post.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="aspect-video bg-gradient-to-br from-[#1A2332] to-[#2A3342] flex items-center justify-center">
                              <FileText className="h-12 w-12 text-[#C5A572]/30" />
                            </div>
                          )}
                          <CardContent className="p-5">
                            {getCategoryName(post.categoryId) && (
                              <Badge variant="outline" className="mb-2">
                                {getCategoryName(post.categoryId)}
                              </Badge>
                            )}
                            <h3 className="font-bold text-lg mb-2 line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {format(new Date(post.publishedAt || post.createdAt), "MMM d, yyyy")}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {estimateReadTime(post.content)}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </>
          )}

          {/* CTA Section */}
          <section className="mt-16 bg-[#1A2332] rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Move?</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Get a free quote from Vancouver's most trusted moving company. We're here to make your move stress-free.
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
          </section>
        </div>
      </main>

      <SharedFooter />
    </>
  );
}
