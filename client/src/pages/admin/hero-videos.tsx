import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Skeleton } from "@/components/ui/skeleton";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import { 
  Video, 
  Edit2, 
  Save, 
  X, 
  Plus,
  Trash2,
  RefreshCw,
  Play,
  Pause,
  CheckCircle,
  XCircle,
  Film,
  Settings2,
  Eye
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { HeroVideo } from "@shared/schema";

interface AvailableVideo {
  path: string;
  name: string;
}

interface HeroVideoPage {
  slug: string;
  name: string;
}

interface AvailableData {
  videos: AvailableVideo[];
  pages: HeroVideoPage[];
}

export default function AdminHeroVideos() {
  const { toast } = useToast();
  const [editingVideo, setEditingVideo] = useState<HeroVideo | null>(null);
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]);
  const [rotationInterval, setRotationInterval] = useState(8000);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [newPageSlug, setNewPageSlug] = useState("");
  const [previewVideo, setPreviewVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { data: heroVideos, isLoading } = useQuery<HeroVideo[]>({
    queryKey: ["/api/admin/hero-videos"],
  });

  const { data: availableData } = useQuery<AvailableData>({
    queryKey: ["/api/admin/hero-videos/available"],
  });

  const initializeMutation = useMutation({
    mutationFn: () => apiRequest("POST", "/api/admin/hero-videos/initialize"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/hero-videos"] });
      toast({ title: "Hero videos initialized successfully" });
    },
    onError: (error: any) => {
      toast({ 
        title: "Failed to initialize hero videos", 
        description: error.message,
        variant: "destructive" 
      });
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: any) => apiRequest("POST", "/api/admin/hero-videos", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/hero-videos"] });
      setIsCreating(false);
      resetForm();
      toast({ title: "Hero video configuration created" });
    },
    onError: (error: any) => {
      toast({ 
        title: "Failed to create hero video", 
        description: error.message,
        variant: "destructive" 
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => 
      apiRequest("PATCH", `/api/admin/hero-videos/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/hero-videos"] });
      setEditingVideo(null);
      resetForm();
      toast({ title: "Hero video configuration updated" });
    },
    onError: (error: any) => {
      toast({ 
        title: "Failed to update hero video", 
        description: error.message,
        variant: "destructive" 
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => apiRequest("DELETE", `/api/admin/hero-videos/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/hero-videos"] });
      toast({ title: "Hero video configuration deleted" });
    },
    onError: (error: any) => {
      toast({ 
        title: "Failed to delete hero video", 
        description: error.message,
        variant: "destructive" 
      });
    },
  });

  const resetForm = () => {
    setSelectedVideos([]);
    setRotationInterval(8000);
    setAutoRotate(true);
    setIsActive(true);
    setNewPageSlug("");
  };

  const handleEdit = (video: HeroVideo) => {
    setEditingVideo(video);
    setSelectedVideos(video.videoUrls || []);
    setRotationInterval(video.rotationInterval);
    setAutoRotate(video.autoRotate);
    setIsActive(video.isActive);
  };

  const handleCreate = () => {
    setIsCreating(true);
    resetForm();
  };

  const handleSave = () => {
    if (selectedVideos.length === 0) {
      toast({ 
        title: "Please select at least one video", 
        variant: "destructive" 
      });
      return;
    }

    const data = {
      videoUrls: selectedVideos,
      rotationInterval,
      autoRotate: selectedVideos.length > 1 ? autoRotate : false,
      isActive,
    };

    if (editingVideo) {
      updateMutation.mutate({ id: editingVideo.id, data });
    } else if (isCreating && newPageSlug) {
      const page = availableData?.pages.find(p => p.slug === newPageSlug);
      if (page) {
        createMutation.mutate({
          pageSlug: page.slug,
          pageName: page.name,
          ...data,
        });
      }
    }
  };

  const handleCancel = () => {
    setEditingVideo(null);
    setIsCreating(false);
    resetForm();
  };

  const addVideoToSelection = (videoPath: string) => {
    if (!selectedVideos.includes(videoPath)) {
      setSelectedVideos([...selectedVideos, videoPath]);
    }
  };

  const removeVideoFromSelection = (videoPath: string) => {
    setSelectedVideos(selectedVideos.filter(v => v !== videoPath));
  };

  const moveVideoUp = (index: number) => {
    if (index === 0) return;
    const newVideos = [...selectedVideos];
    [newVideos[index - 1], newVideos[index]] = [newVideos[index], newVideos[index - 1]];
    setSelectedVideos(newVideos);
  };

  const moveVideoDown = (index: number) => {
    if (index === selectedVideos.length - 1) return;
    const newVideos = [...selectedVideos];
    [newVideos[index], newVideos[index + 1]] = [newVideos[index + 1], newVideos[index]];
    setSelectedVideos(newVideos);
  };

  const getVideoName = (path: string) => {
    const video = availableData?.videos.find(v => v.path === path);
    return video?.name || path.split('/').pop()?.replace('.mp4', '') || path;
  };

  const configuredPageSlugs = new Set(heroVideos?.map(v => v.pageSlug) || []);
  const unconfiguredPages = availableData?.pages.filter(p => !configuredPageSlugs.has(p.slug)) || [];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="grid gap-4">
          {[1, 2, 3].map(i => (
            <Skeleton key={i} className="h-32 w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground" data-testid="text-page-title">Hero Video Management</h1>
          <p className="text-muted-foreground">Configure hero videos for each page</p>
        </div>
        <div className="flex gap-2">
          {(!heroVideos || heroVideos.length === 0) && (
            <Button
              onClick={() => initializeMutation.mutate()}
              disabled={initializeMutation.isPending}
              variant="outline"
              data-testid="button-initialize"
            >
              <RefreshCw className={`mr-2 h-4 w-4 ${initializeMutation.isPending ? 'animate-spin' : ''}`} />
              Initialize Defaults
            </Button>
          )}
          {unconfiguredPages.length > 0 && (
            <Button onClick={handleCreate} data-testid="button-add-config">
              <Plus className="mr-2 h-4 w-4" />
              Add Configuration
            </Button>
          )}
        </div>
      </div>

      {heroVideos && heroVideos.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Video className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="font-semibold mb-2">No Hero Videos Configured</h3>
            <p className="text-muted-foreground text-center mb-4">
              Click "Initialize Defaults" to set up default hero videos for all pages
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {heroVideos?.map((video) => (
            <Card key={video.id} data-testid={`card-hero-video-${video.id}`}>
              <CardHeader className="flex flex-row items-center justify-between gap-4 pb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${video.isActive ? 'bg-green-100 dark:bg-green-900' : 'bg-muted'}`}>
                    <Video className={`h-5 w-5 ${video.isActive ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground'}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{video.pageName}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      /{video.pageSlug}
                      {video.isActive ? (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-red-600 border-red-600">
                          <XCircle className="h-3 w-3 mr-1" />
                          Inactive
                        </Badge>
                      )}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleEdit(video)}
                    data-testid={`button-edit-${video.id}`}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => deleteMutation.mutate(video.id)}
                    data-testid={`button-delete-${video.id}`}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {video.videoUrls?.map((url, index) => (
                      <Badge 
                        key={url} 
                        variant="secondary"
                        className="cursor-pointer hover-elevate"
                        onClick={() => setPreviewVideo(url)}
                      >
                        <Film className="h-3 w-3 mr-1" />
                        {index + 1}. {getVideoName(url)}
                        <Eye className="h-3 w-3 ml-1" />
                      </Badge>
                    ))}
                  </div>
                  {video.videoUrls && video.videoUrls.length > 1 && (
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Settings2 className="h-4 w-4" />
                        Auto-rotate: {video.autoRotate ? 'Yes' : 'No'}
                      </span>
                      {video.autoRotate && (
                        <span>
                          Interval: {video.rotationInterval / 1000}s
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={editingVideo !== null || isCreating} onOpenChange={(open) => !open && handleCancel()}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingVideo ? `Edit Hero Videos - ${editingVideo.pageName}` : 'Add Hero Video Configuration'}
            </DialogTitle>
            <DialogDescription>
              Select and arrange videos for the hero section
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {isCreating && (
              <div className="space-y-2">
                <Label>Select Page</Label>
                <Select value={newPageSlug} onValueChange={setNewPageSlug}>
                  <SelectTrigger data-testid="select-page">
                    <SelectValue placeholder="Choose a page" />
                  </SelectTrigger>
                  <SelectContent>
                    {unconfiguredPages.map(page => (
                      <SelectItem key={page.slug} value={page.slug}>
                        {page.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2">
              <Label>Selected Videos ({selectedVideos.length})</Label>
              {selectedVideos.length === 0 ? (
                <div className="border border-dashed rounded-lg p-4 text-center text-muted-foreground">
                  No videos selected. Add videos from the list below.
                </div>
              ) : (
                <div className="space-y-2">
                  {selectedVideos.map((videoPath, index) => (
                    <div 
                      key={videoPath}
                      className="flex items-center gap-2 bg-muted/50 rounded-lg p-2"
                    >
                      <span className="text-sm font-medium w-6">{index + 1}.</span>
                      <Film className="h-4 w-4 text-muted-foreground" />
                      <span className="flex-1 text-sm truncate">{getVideoName(videoPath)}</span>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => setPreviewVideo(videoPath)}
                          data-testid={`button-preview-${index}`}
                        >
                          <Play className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => moveVideoUp(index)}
                          disabled={index === 0}
                        >
                          <span className="text-xs">Up</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => moveVideoDown(index)}
                          disabled={index === selectedVideos.length - 1}
                        >
                          <span className="text-xs">Down</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-destructive"
                          onClick={() => removeVideoFromSelection(videoPath)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label>Available Videos</Label>
              <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                {availableData?.videos.map(video => {
                  const isSelected = selectedVideos.includes(video.path);
                  return (
                    <Button
                      key={video.path}
                      variant={isSelected ? "secondary" : "outline"}
                      size="sm"
                      className="justify-start h-auto py-2 text-left"
                      onClick={() => isSelected ? removeVideoFromSelection(video.path) : addVideoToSelection(video.path)}
                      data-testid={`button-video-${video.path.split('/').pop()}`}
                    >
                      <Film className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="truncate text-xs">{video.name}</span>
                      {isSelected && <CheckCircle className="h-3 w-3 ml-auto text-green-600" />}
                    </Button>
                  );
                })}
              </div>
            </div>

            {selectedVideos.length > 1 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="autoRotate">Auto-rotate videos</Label>
                  <Switch
                    id="autoRotate"
                    checked={autoRotate}
                    onCheckedChange={setAutoRotate}
                    data-testid="switch-auto-rotate"
                  />
                </div>

                {autoRotate && (
                  <div className="space-y-2">
                    <Label htmlFor="interval">Rotation Interval (seconds)</Label>
                    <Input
                      id="interval"
                      type="number"
                      min={3}
                      max={30}
                      value={rotationInterval / 1000}
                      onChange={(e) => setRotationInterval(parseInt(e.target.value) * 1000)}
                      data-testid="input-interval"
                    />
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center justify-between">
              <Label htmlFor="isActive">Active</Label>
              <Switch
                id="isActive"
                checked={isActive}
                onCheckedChange={setIsActive}
                data-testid="switch-active"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={handleCancel} data-testid="button-cancel">
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button 
              onClick={handleSave} 
              disabled={selectedVideos.length === 0 || (isCreating && !newPageSlug) || updateMutation.isPending || createMutation.isPending}
              data-testid="button-save"
            >
              <Save className="mr-2 h-4 w-4" />
              {updateMutation.isPending || createMutation.isPending ? 'Saving...' : 'Save Changes'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={previewVideo !== null} onOpenChange={(open) => !open && setPreviewVideo(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Video Preview</DialogTitle>
            <DialogDescription>{previewVideo && getVideoName(previewVideo)}</DialogDescription>
          </DialogHeader>
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            {previewVideo && (
              <video
                ref={videoRef}
                src={previewVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
