import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "wouter";
import { 
  Save, 
  ArrowLeft,
  Eye,
  Sparkles,
  Loader2,
  Image as ImageIcon,
  X,
  CheckCircle,
  Clock,
  ExternalLink
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import type { BlogPost, BlogCategory } from "@shared/schema";

interface BlogFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  featuredImage: string | null;
  featuredImageAlt: string | null;
  categoryId: string | null;
  status: "draft" | "published" | "scheduled";
  authorName: string;
  tags: string[];
}

const emptyForm: BlogFormData = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  metaTitle: "",
  metaDescription: "",
  keywords: [],
  featuredImage: null,
  featuredImageAlt: null,
  categoryId: null,
  status: "draft",
  authorName: "Prestige Moving Team",
  tags: [],
};

export default function AdminBlogEditor() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const params = useParams<{ id: string }>();
  const postId = params?.id;
  const isEditing = !!postId;

  const [formData, setFormData] = useState<BlogFormData>(emptyForm);
  const [keywordsText, setKeywordsText] = useState("");
  const [tagsText, setTagsText] = useState("");
  const [previewMode, setPreviewMode] = useState(false);

  const { data: post, isLoading: postLoading } = useQuery<BlogPost>({
    queryKey: ["/api/admin/blog/posts", postId],
    enabled: isEditing,
  });

  const { data: categories } = useQuery<BlogCategory[]>({
    queryKey: ["/api/blog/categories"],
  });

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt || "",
        content: post.content,
        metaTitle: post.metaTitle || "",
        metaDescription: post.metaDescription || "",
        keywords: post.keywords || [],
        featuredImage: post.featuredImage,
        featuredImageAlt: post.featuredImageAlt,
        categoryId: post.categoryId,
        status: post.status as "draft" | "published" | "scheduled",
        authorName: post.authorName || "Prestige Moving Team",
        tags: post.tags || [],
      });
      setKeywordsText(post.keywords?.join(", ") || "");
      setTagsText(post.tags?.join(", ") || "");
    }
  }, [post]);

  const createMutation = useMutation({
    mutationFn: (data: BlogFormData) => apiRequest("POST", "/api/admin/blog/posts", data),
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog/posts"] });
      toast({ title: "Post created successfully" });
      setLocation(`/admin/blog/edit/${data.id}`);
    },
    onError: (error: any) => {
      toast({
        title: "Failed to create post",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: Partial<BlogFormData>) =>
      apiRequest("PATCH", `/api/admin/blog/posts/${postId}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog/posts"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog/posts", postId] });
      toast({ title: "Post updated successfully" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to update post",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const generateImageMutation = useMutation({
    mutationFn: (title: string) =>
      apiRequest("POST", "/api/admin/blog/ai/image", { title }),
    onSuccess: (data: any) => {
      setFormData((prev) => ({
        ...prev,
        featuredImage: data.imageUrl,
        featuredImageAlt: `Featured image for ${formData.title}`,
      }));
      toast({ title: "Featured image generated" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to generate image",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const generateContentMutation = useMutation({
    mutationFn: async (topic: string) => {
      const response = await apiRequest("POST", "/api/admin/blog/ai/generate", { topic });
      return response.json();
    },
    onSuccess: (data: any) => {
      console.log("AI generated content:", data);
      setFormData((prev) => ({
        ...prev,
        title: data.title || prev.title,
        slug: data.slug || prev.slug,
        content: data.content || prev.content,
        excerpt: data.excerpt || prev.excerpt,
        metaTitle: data.metaTitle || prev.metaTitle,
        metaDescription: data.metaDescription || prev.metaDescription,
        keywords: data.keywords || prev.keywords,
      }));
      if (data.keywords) {
        setKeywordsText(data.keywords.join(", "));
      }
      toast({ title: "Content generated successfully!" });
    },
    onError: (error: any) => {
      console.error("AI generation error:", error);
      toast({
        title: "Failed to generate content",
        description: error.message || "AI generation failed. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSave = (publish: boolean = false) => {
    const keywords = keywordsText
      .split(",")
      .map((k) => k.trim())
      .filter(Boolean);
    const tags = tagsText
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const data = {
      ...formData,
      keywords,
      tags,
      status: publish ? "published" : formData.status,
    } as BlogFormData;

    if (isEditing) {
      updateMutation.mutate(data);
    } else {
      createMutation.mutate(data);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: !isEditing || !prev.slug ? generateSlug(title) : prev.slug,
      metaTitle: !prev.metaTitle ? title.slice(0, 60) : prev.metaTitle,
    }));
  };

  const isPending = createMutation.isPending || updateMutation.isPending;

  if (isEditing && postLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-[600px]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-4">
          <Link href="/admin/blog">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {isEditing ? "Edit Post" : "New Post"}
            </h1>
            {post?.isAiGenerated && (
              <Badge variant="outline" className="mt-1 gap-1">
                <Sparkles className="h-3 w-3" />
                AI Generated
              </Badge>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {post?.status === "published" && (
            <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Live
              </Button>
            </a>
          )}
          <Button
            variant="outline"
            onClick={() => handleSave(false)}
            disabled={isPending || !formData.title}
            data-testid="button-save-draft"
          >
            {isPending ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Clock className="h-4 w-4 mr-2" />
            )}
            Save Draft
          </Button>
          <Button
            onClick={() => handleSave(true)}
            disabled={isPending || !formData.title || !formData.content}
            data-testid="button-publish"
          >
            {isPending ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <CheckCircle className="h-4 w-4 mr-2" />
            )}
            {formData.status === "published" ? "Update" : "Publish"}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-4 flex-wrap">
              <CardTitle>Content</CardTitle>
              <Button
                variant="outline"
                onClick={() => {
                  const topic = formData.title || prompt("Enter a topic for AI to write about:");
                  if (topic) {
                    generateContentMutation.mutate(topic);
                  }
                }}
                disabled={generateContentMutation.isPending}
                data-testid="button-generate-ai-content"
              >
                {generateContentMutation.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate with AI
                  </>
                )}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title / Topic</Label>
                <Input
                  id="title"
                  placeholder="Enter post title or topic for AI generation..."
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  data-testid="input-title"
                />
                <p className="text-xs text-muted-foreground">
                  Enter a topic and click "Generate with AI" to create a full SEO-optimized article
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">URL Slug</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">/blog/</span>
                  <Input
                    id="slug"
                    placeholder="url-slug"
                    value={formData.slug}
                    onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                    data-testid="input-slug"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Brief summary for blog listings..."
                  value={formData.excerpt}
                  onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
                  rows={3}
                  data-testid="input-excerpt"
                />
              </div>

              <Tabs defaultValue="edit" className="w-full">
                <TabsList>
                  <TabsTrigger value="edit">Edit</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <TabsContent value="edit" className="space-y-2">
                  <Label htmlFor="content">Content (Markdown)</Label>
                  <Textarea
                    id="content"
                    placeholder="Write your blog post content in Markdown..."
                    value={formData.content}
                    onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                    rows={20}
                    className="font-mono text-sm"
                    data-testid="input-content"
                  />
                  <p className="text-xs text-muted-foreground">
                    Supports Markdown: # for headings, **bold**, *italic*, - for lists
                  </p>
                </TabsContent>
                <TabsContent value="preview">
                  <div className="border rounded-lg p-6 min-h-[400px] prose prose-sm max-w-none dark:prose-invert">
                    {formData.content ? (
                      <div dangerouslySetInnerHTML={{ __html: renderMarkdown(formData.content) }} />
                    ) : (
                      <p className="text-muted-foreground">No content to preview</p>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Select
                value={formData.status}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, status: value as "draft" | "published" | "scheduled" }))
                }
              >
                <SelectTrigger data-testid="select-status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Featured Image */}
          <Card>
            <CardHeader>
              <CardTitle>Featured Image</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {formData.featuredImage ? (
                <div className="relative">
                  <img
                    src={formData.featuredImage}
                    alt={formData.featuredImageAlt || "Featured image"}
                    className="w-full aspect-video object-cover rounded-lg"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        featuredImage: null,
                        featuredImageAlt: null,
                      }))
                    }
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <ImageIcon className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-4">No featured image</p>
                  <Button
                    variant="outline"
                    onClick={() => generateImageMutation.mutate(formData.title || "Moving services")}
                    disabled={generateImageMutation.isPending}
                    data-testid="button-generate-image"
                  >
                    {generateImageMutation.isPending ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Sparkles className="h-4 w-4 mr-2" />
                    )}
                    Generate with AI
                  </Button>
                </div>
              )}
              {formData.featuredImage && (
                <div className="space-y-2">
                  <Label htmlFor="imageAlt">Alt Text</Label>
                  <Input
                    id="imageAlt"
                    placeholder="Image description for accessibility"
                    value={formData.featuredImageAlt || ""}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, featuredImageAlt: e.target.value }))
                    }
                    data-testid="input-image-alt"
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Category */}
          <Card>
            <CardHeader>
              <CardTitle>Category</CardTitle>
            </CardHeader>
            <CardContent>
              <Select
                value={formData.categoryId || "none"}
                onValueChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    categoryId: value === "none" ? null : value,
                  }))
                }
              >
                <SelectTrigger data-testid="select-category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No category</SelectItem>
                  {categories?.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* SEO */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Optimize for search engines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  placeholder="SEO title (50-60 characters)"
                  value={formData.metaTitle}
                  onChange={(e) => setFormData((prev) => ({ ...prev, metaTitle: e.target.value }))}
                  maxLength={60}
                  data-testid="input-meta-title"
                />
                <p className="text-xs text-muted-foreground">
                  {formData.metaTitle.length}/60 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  placeholder="SEO description (150-160 characters)"
                  value={formData.metaDescription}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, metaDescription: e.target.value }))
                  }
                  maxLength={160}
                  rows={3}
                  data-testid="input-meta-description"
                />
                <p className="text-xs text-muted-foreground">
                  {formData.metaDescription.length}/160 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords</Label>
                <Input
                  id="keywords"
                  placeholder="moving vancouver, moving tips, ..."
                  value={keywordsText}
                  onChange={(e) => setKeywordsText(e.target.value)}
                  data-testid="input-keywords"
                />
                <p className="text-xs text-muted-foreground">Comma-separated keywords</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  placeholder="moving, tips, vancouver, ..."
                  value={tagsText}
                  onChange={(e) => setTagsText(e.target.value)}
                  data-testid="input-tags"
                />
                <p className="text-xs text-muted-foreground">Comma-separated tags</p>
              </div>
            </CardContent>
          </Card>

          {/* Author */}
          <Card>
            <CardHeader>
              <CardTitle>Author</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                value={formData.authorName}
                onChange={(e) => setFormData((prev) => ({ ...prev, authorName: e.target.value }))}
                placeholder="Author name"
                data-testid="input-author"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
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
