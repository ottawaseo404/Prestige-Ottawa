import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";

interface AuthCheckResponse {
  isAuthenticated: boolean;
}

export function useAdminAuth() {
  const [, setLocation] = useLocation();
  const queryClient = useQueryClient();

  const { data, isLoading, isFetching } = useQuery<AuthCheckResponse>({
    queryKey: ["/api/admin/check"],
    refetchOnWindowFocus: true,
    staleTime: 0,
    gcTime: 0,
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/admin/logout", {});
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/check"] });
      setLocation("/login");
    },
  });

  return {
    isAuthenticated: data?.isAuthenticated ?? false,
    isLoading: isLoading || isFetching,
    logout: logoutMutation.mutate,
    isLoggingOut: logoutMutation.isPending,
  };
}
