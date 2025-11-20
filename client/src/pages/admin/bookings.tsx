import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, MoreVertical, CheckCircle, XCircle, RefreshCw, AlertCircle } from "lucide-react";
import { format } from "date-fns";
import type { Booking } from "@shared/schema";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function AdminBookings() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const { data: bookings, isLoading } = useQuery<Booking[]>({
    queryKey: ["/api/bookings"],
  });

  const syncToSmartMovingMutation = useMutation({
    mutationFn: async (bookingId: string) => {
      return apiRequest("POST", `/api/bookings/${bookingId}/sync-smartmoving`, {});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
      toast({
        title: "Synced to SmartMoving",
        description: "Booking successfully sent to SmartMoving platform",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Sync failed",
        description: error.message || "Failed to sync to SmartMoving",
        variant: "destructive",
      });
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ bookingId, status }: { bookingId: string; status: string }) => {
      return apiRequest("PATCH", `/api/bookings/${bookingId}/status`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
      toast({
        title: "Status updated",
        description: "Booking status has been updated",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Update failed",
        description: error.message || "Failed to update status",
        variant: "destructive",
      });
    },
  });

  const filteredBookings = bookings?.filter((booking) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      booking.firstName.toLowerCase().includes(searchLower) ||
      booking.lastName.toLowerCase().includes(searchLower) ||
      booking.email.toLowerCase().includes(searchLower) ||
      booking.originCity.toLowerCase().includes(searchLower) ||
      booking.destinationCity.toLowerCase().includes(searchLower)
    );
  }) || [];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", label: string }> = {
      pending: { variant: "secondary", label: "Pending" },
      confirmed: { variant: "default", label: "Confirmed" },
      completed: { variant: "outline", label: "Completed" },
      cancelled: { variant: "destructive", label: "Cancelled" },
    };
    const config = variants[status] || variants.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bookings</h1>
        <p className="text-muted-foreground">Manage all your moving bookings</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <CardTitle>All Bookings</CardTitle>
              <CardDescription>View and manage booking requests</CardDescription>
            </div>
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search bookings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-16 w-full" />
              ))}
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="text-center py-12">
              <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                {searchQuery ? "No bookings match your search" : "No bookings yet"}
              </p>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Move Date</TableHead>
                    <TableHead>Route</TableHead>
                    <TableHead>Package</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>SmartMoving</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBookings.map((booking) => (
                    <TableRow key={booking.id} data-testid={`row-booking-${booking.id}`}>
                      <TableCell>
                        <div>
                          <p className="font-medium" data-testid={`cell-customer-${booking.id}`}>
                            {booking.firstName} {booking.lastName}
                          </p>
                          <p className="text-sm text-muted-foreground">{booking.email}</p>
                        </div>
                      </TableCell>
                      <TableCell data-testid={`cell-date-${booking.id}`}>
                        {format(new Date(booking.moveDate), "MMM d, yyyy")}
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>{booking.originCity}</p>
                          <p className="text-muted-foreground">→ {booking.destinationCity}</p>
                        </div>
                      </TableCell>
                      <TableCell>{booking.packageType}</TableCell>
                      <TableCell>{getStatusBadge(booking.status)}</TableCell>
                      <TableCell>
                        {booking.smartmovingSynced ? (
                          <Badge variant="outline" className="gap-1">
                            <CheckCircle className="h-3 w-3" />
                            Synced
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="gap-1">
                            <XCircle className="h-3 w-3" />
                            Not Synced
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" data-testid={`button-actions-${booking.id}`}>
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setSelectedBooking(booking)}>
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => syncToSmartMovingMutation.mutate(booking.id)}
                              disabled={booking.smartmovingSynced || syncToSmartMovingMutation.isPending}
                            >
                              <RefreshCw className="h-4 w-4 mr-2" />
                              Sync to SmartMoving
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              onClick={() => updateStatusMutation.mutate({ bookingId: booking.id, status: "confirmed" })}
                              disabled={booking.status === "confirmed"}
                            >
                              Mark as Confirmed
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => updateStatusMutation.mutate({ bookingId: booking.id, status: "completed" })}
                              disabled={booking.status === "completed"}
                            >
                              Mark as Completed
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Booking Detail Dialog */}
      <Dialog open={!!selectedBooking} onOpenChange={(open) => !open && setSelectedBooking(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Booking Details</DialogTitle>
            <DialogDescription>Complete information for this booking</DialogDescription>
          </DialogHeader>
          {selectedBooking && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Customer Information</h4>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-muted-foreground">Name:</span> {selectedBooking.firstName} {selectedBooking.lastName}</p>
                    <p><span className="text-muted-foreground">Email:</span> {selectedBooking.email}</p>
                    <p><span className="text-muted-foreground">Phone:</span> {selectedBooking.phone} ({selectedBooking.phoneType})</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Move Details</h4>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-muted-foreground">Date:</span> {format(new Date(selectedBooking.moveDate), "PPP")}</p>
                    <p><span className="text-muted-foreground">Size:</span> {selectedBooking.moveSize}</p>
                    <p><span className="text-muted-foreground">Package:</span> {selectedBooking.packageType}</p>
                    <p><span className="text-muted-foreground">Service:</span> {selectedBooking.serviceType}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Origin Address</h4>
                  <div className="text-sm">
                    <p>{selectedBooking.originStreet}</p>
                    <p>{selectedBooking.originCity}, {selectedBooking.originProvince}</p>
                    <p>{selectedBooking.originPostalCode}</p>
                    <p className="text-muted-foreground">Stairs: {selectedBooking.originStairs}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Destination Address</h4>
                  <div className="text-sm">
                    <p>{selectedBooking.destinationStreet}</p>
                    <p>{selectedBooking.destinationCity}, {selectedBooking.destinationProvince}</p>
                    <p>{selectedBooking.destinationPostalCode}</p>
                    <p className="text-muted-foreground">Stairs: {selectedBooking.destinationStairs}</p>
                  </div>
                </div>
              </div>

              {selectedBooking.notes && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Additional Notes</h4>
                  <p className="text-sm text-muted-foreground">{selectedBooking.notes}</p>
                </div>
              )}

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status:</span>
                  {getStatusBadge(selectedBooking.status)}
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">SmartMoving Synced:</span>
                  <span>{selectedBooking.smartmovingSynced ? "Yes" : "No"}</span>
                </div>
                {selectedBooking.smartmovingSyncedAt && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Synced At:</span>
                    <span>{format(new Date(selectedBooking.smartmovingSyncedAt), "PPP p")}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Created:</span>
                  <span>{format(new Date(selectedBooking.createdAt), "PPP p")}</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
