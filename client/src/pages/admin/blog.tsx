import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  Eye, 
  Sparkles,
  FileText,
  RefreshCw,
  ExternalLink,
  Loader2,
  Lightbulb,
  CheckCircle,
  Clock,
  EyeOff
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Link } from "wouter";
import type { BlogPost, BlogCategory } from "@shared/schema";

export default function AdminBlog() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [aiIdeasOpen, setAiIdeasOpen] = useState(false);
  const [aiGenerateOpen, setAiGenerateOpen] = useState(false);
  const [aiTopic, setAiTopic] = useState("");

  const { data: posts, isLoading: postsLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/admin/blog/posts"],
  });

  const { data: categories } = useQuery<BlogCategory[]>({
    queryKey: ["/api/blog/categories"],
  });

  const initializeCategoriesMutation = useMutation({
    mutationFn: () => apiRequest("POST", "/api/admin/blog/categories/initialize"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog/categories"] });
      toast({ title: "Categories initialized successfully" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to initialize categories",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (postId: string) => apiRequest("DELETE", `/api/admin/blog/posts/${postId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog/posts"] });
      toast({ title: "Post deleted successfully" });
      setDeleteConfirmId(null);
    },
    onError: (error: any) => {
      toast({
        title: "Failed to delete post",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ postId, status }: { postId: string; status: string }) =>
      apiRequest("PATCH", `/api/admin/blog/posts/${postId}`, { status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog/posts"] });
      toast({ title: "Post status updated" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to update status",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const generateIdeasMutation = useMutation({
    mutationFn: () => apiRequest("POST", "/api/admin/blog/ai/ideas", { count: 5 }),
    onError: (error: any) => {
      toast({
        title: "Failed to generate ideas",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const generatePostMutation = useMutation({
    mutationFn: (topic: string) =>
      apiRequest("POST", "/api/admin/blog/ai/create-full", { topic, generateImage: true }),
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog/posts"] });
      toast({
        title: "AI Post Generated",
        description: `"${data.title}" has been created as a draft`,
      });
      setAiGenerateOpen(false);
      setAiTopic("");
    },
    onError: (error: any) => {
      toast({
        title: "Failed to generate post",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const filteredPosts = posts?.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || post.status === statusFilter;
    return matchesSearch && matchesStatus;
  }) || [];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline"; label: string; icon: any }> = {
      draft: { variant: "secondary", label: "Draft", icon: Clock },
      published: { variant: "default", label: "Published", icon: CheckCircle },
      scheduled: { variant: "outline", label: "Scheduled", icon: Clock },
    };
    const config = variants[status] || variants.draft;
    const Icon = config.icon;
    return (
      <Badge variant={config.variant} className="gap-1">
        <Icon className="h-3 w-3" />
        {config.label}
      </Badge>
    );
  };

  const stats = {
    total: posts?.length || 0,
    published: posts?.filter(p => p.status === "published").length || 0,
    draft: posts?.filter(p => p.status === "draft").length || 0,
    aiGenerated: posts?.filter(p => p.isAiGenerated).length || 0,
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog Management</h1>
          <p className="text-muted-foreground">Create and manage blog posts with AI assistance</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant="outline"
            onClick={() => {
              generateIdeasMutation.mutate();
              setAiIdeasOpen(true);
            }}
            disabled={generateIdeasMutation.isPending}
            data-testid="button-ai-ideas"
          >
            {generateIdeasMutation.isPending ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Lightbulb className="h-4 w-4 mr-2" />
            )}
            AI Ideas
          </Button>
          <Button
            variant="outline"
            onClick={() => setAiGenerateOpen(true)}
            data-testid="button-ai-generate"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            AI Generate
          </Button>
          <Link href="/admin/blog/new">
            <Button data-testid="button-new-post">
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card data-testid="card-stat-total">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card data-testid="card-stat-published">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.published}</div>
          </CardContent>
        </Card>
        <Card data-testid="card-stat-draft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.draft}</div>
          </CardContent>
        </Card>
        <Card data-testid="card-stat-ai">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="text-sm font-medium">AI Generated</CardTitle>
            <Sparkles className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.aiGenerated}</div>
          </CardContent>
        </Card>
      </div>

      {/* Initialize Categories Button */}
      {categories?.length === 0 && (
        <Card>
          <CardContent className="flex items-center justify-between py-4">
            <div>
              <p className="font-medium">No categories found</p>
              <p className="text-sm text-muted-foreground">Initialize default blog categories to get started</p>
            </div>
            <Button
              onClick={() => initializeCategoriesMutation.mutate()}
              disabled={initializeCategoriesMutation.isPending}
              data-testid="button-init-categories"
            >
              {initializeCategoriesMutation.isPending ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4 mr-2" />
              )}
              Initialize Categories
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Filters */}
      <Card>
        <CardContent className="py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]" data-testid="select-status-filter">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Posts List */}
      <Card>
        <CardHeader>
          <CardTitle>Blog Posts</CardTitle>
          <CardDescription>
            {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {postsLoading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border rounded-lg">
                  <Skeleton className="h-16 w-24 rounded" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No posts found</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery || statusFilter !== "all"
                  ? "Try adjusting your filters"
                  : "Get started by creating your first blog post"}
              </p>
              <Link href="/admin/blog/new">
                <Button data-testid="button-create-first-post">
                  <Plus className="h-4 w-4 mr-2" />
                  Create First Post
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-start gap-4 p-4 border rounded-lg hover-elevate"
                  data-testid={`card-post-${post.id}`}
                >
                  {post.featuredImage ? (
                    <img
                      src={post.featuredImage}
                      alt={post.featuredImageAlt || post.title}
                      className="h-20 w-32 object-cover rounded"
                    />
                  ) : (
                    <div className="h-20 w-32 bg-muted rounded flex items-center justify-center">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-medium truncate">{post.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {post.excerpt || "No excerpt"}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {getStatusBadge(post.status)}
                        {post.isAiGenerated && (
                          <Badge variant="outline" className="gap-1">
                            <Sparkles className="h-3 w-3" />
                            AI
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span>{post.authorName}</span>
                      <span>{format(new Date(post.createdAt), "MMM d, yyyy")}</span>
                      <span>{post.viewCount} views</span>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" data-testid={`button-post-actions-${post.id}`}>
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/blog/edit/${post.id}`}>
                          <Edit2 className="h-4 w-4 mr-2" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      {post.status === "published" && (
                        <DropdownMenuItem asChild>
                          <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Live
                          </a>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      {post.status === "draft" ? (
                        <DropdownMenuItem
                          onClick={() => updateStatusMutation.mutate({ postId: post.id, status: "published" })}
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Publish
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem
                          onClick={() => updateStatusMutation.mutate({ postId: post.id, status: "draft" })}
                        >
                          <EyeOff className="h-4 w-4 mr-2" />
                          Unpublish
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="text-destructive"
                        onClick={() => setDeleteConfirmId(post.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteConfirmId} onOpenChange={() => setDeleteConfirmId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Post</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this post? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteConfirmId(null)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => deleteConfirmId && deleteMutation.mutate(deleteConfirmId)}
              disabled={deleteMutation.isPending}
              data-testid="button-confirm-delete"
            >
              {deleteMutation.isPending ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Trash2 className="h-4 w-4 mr-2" />
              )}
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* AI Ideas Dialog */}
      <Dialog open={aiIdeasOpen} onOpenChange={setAiIdeasOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              AI Blog Post Ideas
            </DialogTitle>
            <DialogDescription>
              AI-generated blog post ideas optimized for SEO
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            {generateIdeasMutation.isPending ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : generateIdeasMutation.data ? (
              (generateIdeasMutation.data as any).ideas?.map((idea: string, index: number) => (
                <div
                  key={index}
                  className="p-3 border rounded-lg hover-elevate cursor-pointer"
                  onClick={() => {
                    setAiTopic(idea);
                    setAiIdeasOpen(false);
                    setAiGenerateOpen(true);
                  }}
                  data-testid={`idea-${index}`}
                >
                  <p className="text-sm">{idea}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-4">
                Click "AI Ideas" to generate new blog post ideas
              </p>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAiIdeasOpen(false)}>
              Close
            </Button>
            <Button
              onClick={() => generateIdeasMutation.mutate()}
              disabled={generateIdeasMutation.isPending}
            >
              {generateIdeasMutation.isPending ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4 mr-2" />
              )}
              Regenerate
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* AI Generate Dialog */}
      <Dialog open={aiGenerateOpen} onOpenChange={setAiGenerateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Generate AI Blog Post
            </DialogTitle>
            <DialogDescription>
              Enter a topic and AI will generate a full SEO-optimized article with featured image
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Topic or Title</label>
              <Input
                placeholder="e.g., 10 Tips for Moving to Vancouver"
                value={aiTopic}
                onChange={(e) => setAiTopic(e.target.value)}
                data-testid="input-ai-topic"
              />
              <p className="text-xs text-muted-foreground mt-1">
                AI will generate a 2000+ word article optimized for this topic
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAiGenerateOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => generatePostMutation.mutate(aiTopic)}
              disabled={!aiTopic.trim() || generatePostMutation.isPending}
              data-testid="button-generate-post"
            >
              {generatePostMutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate Post
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
