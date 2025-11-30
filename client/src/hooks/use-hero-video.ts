import { useQuery } from "@tanstack/react-query";
import type { HeroVideo } from "@shared/schema";

export function useHeroVideo(pageSlug: string) {
  const { data: heroVideo, isLoading, isError } = useQuery<HeroVideo | null>({
    queryKey: ["/api/hero-videos", pageSlug],
    queryFn: async () => {
      try {
        const response = await fetch(`/api/hero-videos/${pageSlug}`);
        if (!response.ok) {
          // Return null for 404 (not configured), don't throw
          if (response.status === 404) {
            return null;
          }
          throw new Error("Failed to fetch hero video");
        }
        return response.json();
      } catch (error) {
        // Gracefully handle network errors - just return null
        console.warn(`Hero video fetch failed for ${pageSlug}:`, error);
        return null;
      }
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: false, // Don't retry 404s
  });

  // When API fails or returns null, frontend should use defaults via getDefaultVideoForPage
  return {
    videoUrls: heroVideo?.videoUrls || [],
    autoRotate: heroVideo?.autoRotate ?? true,
    rotationInterval: heroVideo?.rotationInterval ?? 8000,
    isLoading,
    isActive: heroVideo?.isActive ?? false,
    hasConfig: !!heroVideo,
  };
}

export function getDefaultVideoForPage(pageSlug: string): string[] {
  const defaultVideos: Record<string, string[]> = {
    "home": ["/attached_assets/prestigemoving_converted.mp4", "/attached_assets/generated_videos/moving_trucks_bc_mountain_highway.mp4", "/attached_assets/generated_videos/white_trucks_driving_bc_mountains.mp4"],
    "commercial-moving": ["/attached_assets/commercial_moving_video.mp4", "/attached_assets/generated_videos/commercial_office_moving_scene.mp4"],
    "long-distance-moving": ["/attached_assets/generated_videos/moving_trucks_bc_mountain_highway.mp4", "/attached_assets/generated_videos/moving_truck_on_scenic_highway.mp4"],
    "piano-moving": ["/attached_assets/generated_videos/grand_piano_professional_moving.mp4"],
    "specialty-item-moving": ["/attached_assets/generated_videos/specialty_item_moving_hot_tub.mp4"],
    "residential-moving": ["/attached_assets/residential_moving_video.mp4", "/attached_assets/generated_videos/vancouver_residential_movers_with_boxes.mp4"],
    "packing-services": ["/attached_assets/generated_videos/professional_packing_services_vancouver.mp4"],
    "storage-solutions": ["/attached_assets/generated_videos/climate_controlled_storage_facility.mp4"],
    "senior-moving": ["/attached_assets/generated_videos/senior_moving_compassionate_service.mp4"],
    "student-moving": ["/attached_assets/generated_videos/student_moving_vancouver_campus.mp4"],
    "military-moving": ["/attached_assets/generated_videos/military_pcs_moving_relocation.mp4"],
    "antique-moving": ["/attached_assets/generated_videos/antique_furniture_moving_care.mp4"],
    "moving-supplies": ["/attached_assets/generated_videos/moving_supplies_delivery_vancouver.mp4"],
  };
  
  return defaultVideos[pageSlug] || ["/attached_assets/prestigemoving_converted.mp4"];
}
