import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle, XCircle, RefreshCw, AlertCircle } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

export default function AdminSmartMoving() {
  const { toast } = useToast();

  const { data: syncStatus, isLoading } = useQuery<{
    connected: boolean;
    syncedCount: number;
    pendingCount: number;
    totalCount: number;
  }>({
    queryKey: ["/api/smartmoving/status"],
  });

  const syncAllMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("POST", "/api/smartmoving/sync-all", {});
    },
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({ queryKey: ["/api/smartmoving/status"] });
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
      
      if (data.failed > 0) {
        toast({
          title: "Partial sync completed",
          description: `${data.successful} synced, ${data.failed} failed. Check SmartMoving credentials.`,
          variant: "destructive",
        });
      } else if (data.successful > 0) {
        toast({
          title: "Sync completed",
          description: `Successfully synced ${data.successful} booking${data.successful > 1 ? 's' : ''} to SmartMoving`,
        });
      } else {
        toast({
          title: "No bookings to sync",
          description: "All bookings are already synced or no bookings exist",
        });
      }
    },
    onError: (error: any) => {
      toast({
        title: "Sync failed",
        description: error.message || "Failed to sync to SmartMoving",
        variant: "destructive",
      });
    },
  });

  const isConnected = syncStatus?.connected || false;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">SmartMoving Sync</h1>
        <p className="text-muted-foreground">Manage integration with SmartMoving platform</p>
      </div>

      {/* Connection Status */}
      <Card>
        <CardHeader>
          <CardTitle>Connection Status</CardTitle>
          <CardDescription>SmartMoving API connection details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-md border">
            <div className="flex items-center gap-3">
              {isConnected ? (
                <>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <div>
                    <p className="font-medium">Connected to SmartMoving</p>
                    <p className="text-sm text-muted-foreground">API credentials are configured</p>
                  </div>
                </>
              ) : (
                <>
                  <XCircle className="h-8 w-8 text-destructive" />
                  <div>
                    <p className="font-medium">Not Connected</p>
                    <p className="text-sm text-muted-foreground">API credentials missing</p>
                  </div>
                </>
              )}
            </div>
            <Badge variant={isConnected ? "default" : "destructive"}>
              {isConnected ? "Active" : "Inactive"}
            </Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-md bg-accent/50">
              <p className="text-sm font-medium mb-2">Total Bookings</p>
              <p className="text-2xl font-bold text-foreground">
                {isLoading ? "..." : syncStatus?.totalCount || 0}
              </p>
            </div>
            <div className="p-4 rounded-md bg-accent/50">
              <p className="text-sm font-medium mb-2">Synced to SmartMoving</p>
              <p className="text-2xl font-bold text-primary">
                {isLoading ? "..." : syncStatus?.syncedCount || 0}
              </p>
            </div>
            <div className="p-4 rounded-md bg-accent/50">
              <p className="text-sm font-medium mb-2">Pending Sync</p>
              <p className="text-2xl font-bold text-muted-foreground">
                {isLoading ? "..." : syncStatus?.pendingCount || 0}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sync Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Sync Operations</CardTitle>
          <CardDescription>Manually sync bookings to SmartMoving platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-md border">
            <div>
              <p className="font-medium">Sync All Pending Bookings</p>
              <p className="text-sm text-muted-foreground">
                Send all unsynced bookings to SmartMoving
              </p>
            </div>
            <Button
              onClick={() => syncAllMutation.mutate()}
              disabled={!isConnected || syncAllMutation.isPending}
              data-testid="button-sync-all"
            >
              {syncAllMutation.isPending ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Syncing...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Sync Now
                </>
              )}
            </Button>
          </div>

          {!isConnected && (
            <div className="flex items-start gap-3 p-4 rounded-md bg-destructive/10 border border-destructive/20">
              <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-destructive">Configuration Required</p>
                <p className="text-muted-foreground">
                  Please configure your SmartMoving API credentials in the environment settings to enable syncing.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Sync History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Sync Activity</CardTitle>
          <CardDescription>History of SmartMoving synchronization</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-16 w-full" />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No sync history yet</p>
              <p className="text-sm text-muted-foreground">Sync activity will appear here once bookings are synced</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
