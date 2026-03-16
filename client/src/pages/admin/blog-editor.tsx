import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Save, Sparkles, Loader2, Eye, Globe } from "lucide-react";
import { Link, useLocation, useParams } from "wouter";
import type { BlogPost, BlogCategory } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdminBlogEditor() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const params = useParams<{ id: string }>();
  const isEditing = !!params.id;

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [featuredImageAlt, setFeaturedImageAlt] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [tags, setTags] = useState("");
  const [authorName, setAuthorName] = useState("Prestige Moving Team");
  const [status, setStatus] = useState("draft");
  const [aiTopic, setAiTopic] = useState("");
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  const { data: existingPost, isLoading: isLoadingPost } = useQuery<BlogPost>({
    queryKey: ["/api/admin/blog/posts", params.id],
    queryFn: async () => {
      const res = await fetch(`/api/admin/blog/posts/${params.id}`, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch post");
      return res.json();
    },
    enabled: isEditing,
    retry: 3,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 10000),
  });

  const { data: categories } = useQuery<BlogCategory[]>({
    queryKey: ["/api/blog/categories"],
  });

  useEffect(() => {
    if (existingPost) {
      setTitle(existingPost.title || "");
      setSlug(existingPost.slug || "");
      setExcerpt(existingPost.excerpt || "");
      setContent(existingPost.content || "");
      setFeaturedImage(existingPost.featuredImage || "");
      setFeaturedImageAlt(existingPost.featuredImageAlt || "");
      setMetaTitle(existingPost.metaTitle || "");
      setMetaDescription(existingPost.metaDescription || "");
      setKeywords(existingPost.keywords?.join(", ") || "");
      setCategoryId(existingPost.categoryId || "");
      setTags(existingPost.tags?.join(", ") || "");
      setAuthorName(existingPost.authorName || "Prestige Moving Team");
      setStatus(existingPost.status || "draft");
      setSlugManuallyEdited(true);
    }
  }, [existingPost]);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .substring(0, 80);
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!slugManuallyEdited) {
      setSlug(generateSlug(value));
    }
  };

  const saveMutation = useMutation({
    mutationFn: async (postStatus: string) => {
      const postData: any = {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        featuredImage: featuredImage || null,
        featuredImageAlt: featuredImageAlt || null,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
        keywords: keywords ? keywords.split(",").map(k => k.trim()).filter(Boolean) : null,
        categoryId: categoryId && categoryId !== "none" ? categoryId : null,
        tags: tags ? tags.split(",").map(t => t.trim()).filter(Boolean) : null,
        authorName,
        status: postStatus,
        publishedAt: postStatus === "published" ? new Date().toISOString() : (isEditing && existingPost?.publishedAt ? existingPost.publishedAt : null),
        scheduledAt: postStatus === "scheduled" ? new Date().toISOString() : null,
      };

      if (isEditing) {
        const res = await apiRequest("PATCH", `/api/admin/blog/posts/${params.id}`, postData);
        return res.json();
      } else {
        const res = await apiRequest("POST", "/api/admin/blog/posts", postData);
        return res.json();
      }
    },
    onSuccess: (data, postStatus) => {
      toast({
        title: isEditing ? "Post Updated" : "Post Created",
        description: postStatus === "published" ? "Your blog post is now live." : "Your draft has been saved.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/blog/posts"] });
      setLocation("/admin/blog");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to save blog post.",
        variant: "destructive",
      });
    },
  });

  const aiGenerateMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/admin/blog/ai/generate", { topic: aiTopic });
      return res.json();
    },
    onSuccess: (data) => {
      if (data.title) setTitle(data.title);
      if (data.slug) setSlug(data.slug);
      if (data.excerpt) setExcerpt(data.excerpt);
      if (data.content) setContent(data.content);
      if (data.metaTitle) setMetaTitle(data.metaTitle);
      if (data.metaDescription) setMetaDescription(data.metaDescription);
      if (data.keywords) setKeywords(Array.isArray(data.keywords) ? data.keywords.join(", ") : data.keywords);
      if (data.tags) setTags(Array.isArray(data.tags) ? data.tags.join(", ") : data.tags);
      setSlugManuallyEdited(true);
      toast({ title: "Content Generated", description: "AI has generated blog content. Review and edit before publishing." });
    },
    onError: (error: any) => {
      toast({ title: "Generation Failed", description: error.message || "Failed to generate content.", variant: "destructive" });
    },
  });

  if (isEditing && isLoadingPost) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-[600px] w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/blog">
          <Button variant="ghost" size="icon" data-testid="button-back">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight" data-testid="text-editor-heading">
            {isEditing ? "Edit Blog Post" : "New Blog Post"}
          </h1>
          <p className="text-muted-foreground">{isEditing ? "Update your blog post" : "Create a new blog post"}</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => saveMutation.mutate("draft")}
            disabled={saveMutation.isPending || !title || !content}
            data-testid="button-save-draft"
          >
            {saveMutation.isPending ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
            Save Draft
          </Button>
          <Button
            onClick={() => saveMutation.mutate("published")}
            disabled={saveMutation.isPending || !title || !content || !slug}
            data-testid="button-publish"
          >
            {saveMutation.isPending ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Globe className="h-4 w-4 mr-2" />}
            Publish
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                AI Content Generator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter a topic (e.g., '10 Tips for Moving in Ottawa Winter')"
                  value={aiTopic}
                  onChange={(e) => setAiTopic(e.target.value)}
                  data-testid="input-ai-topic"
                />
                <Button
                  onClick={() => aiGenerateMutation.mutate()}
                  disabled={aiGenerateMutation.isPending || !aiTopic}
                  data-testid="button-ai-generate"
                >
                  {aiGenerateMutation.isPending ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Sparkles className="h-4 w-4 mr-2" />}
                  Generate
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter post title..."
                  data-testid="input-title"
                />
                <p className="text-xs text-muted-foreground">{title.length} characters</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">URL Slug</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">/blog/</span>
                  <Input
                    id="slug"
                    value={slug}
                    onChange={(e) => { setSlug(e.target.value); setSlugManuallyEdited(true); }}
                    placeholder="post-url-slug"
                    data-testid="input-slug"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="A brief summary of the post..."
                  rows={3}
                  data-testid="input-excerpt"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content (HTML supported)</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your blog post content here..."
                  rows={20}
                  className="font-mono text-sm"
                  data-testid="input-content"
                />
                <p className="text-xs text-muted-foreground">{content.split(/\s+/).filter(Boolean).length} words</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Publishing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger data-testid="select-status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  data-testid="input-author"
                />
              </div>
              {categories && categories.length > 0 && (
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select value={categoryId} onValueChange={setCategoryId}>
                    <SelectTrigger data-testid="select-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Category</SelectItem>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="moving, ottawa, tips"
                  data-testid="input-tags"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featured Image</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {featuredImage && (
                <img
                  src={featuredImage}
                  alt={featuredImageAlt || "Featured"}
                  className="w-full h-40 object-cover rounded-md"
                  data-testid="img-featured-preview"
                />
              )}
              <div className="space-y-2">
                <Label htmlFor="featuredImage">Image URL</Label>
                <Input
                  id="featuredImage"
                  value={featuredImage}
                  onChange={(e) => setFeaturedImage(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  data-testid="input-featured-image"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="featuredImageAlt">Alt Text</Label>
                <Input
                  id="featuredImageAlt"
                  value={featuredImageAlt}
                  onChange={(e) => setFeaturedImageAlt(e.target.value)}
                  placeholder="Describe the image..."
                  data-testid="input-featured-image-alt"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="SEO title (60-65 chars)"
                  data-testid="input-meta-title"
                />
                <p className="text-xs text-muted-foreground">{metaTitle.length}/65 characters</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="SEO description (130-160 chars)"
                  rows={3}
                  data-testid="input-meta-description"
                />
                <p className="text-xs text-muted-foreground">{metaDescription.length}/160 characters</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="keywords">Focus Keywords (comma-separated)</Label>
                <Input
                  id="keywords"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="moving ottawa, movers ottawa"
                  data-testid="input-keywords"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
