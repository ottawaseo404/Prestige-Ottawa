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
import { useState } from "react";
import { 
  Package, 
  Edit2, 
  Trash2, 
  Plus, 
  Save, 
  X, 
  Star,
  Users,
  Truck,
  DollarSign,
  Clock,
  RefreshCw,
  CheckCircle
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { MovingPackage } from "@shared/schema";

interface PackageFormData {
  name: string;
  displayName: string;
  description: string;
  hourlyRate: number;
  minimumHours: number;
  travelFee: number;
  movers: number;
  trucks: number;
  truckSize: string;
  features: string[];
  isPopular: boolean;
  isActive: boolean;
  sortOrder: number;
}

const emptyPackage: PackageFormData = {
  name: "",
  displayName: "",
  description: "",
  hourlyRate: 0,
  minimumHours: 3,
  travelFee: 0,
  movers: 2,
  trucks: 1,
  truckSize: "",
  features: [],
  isPopular: false,
  isActive: true,
  sortOrder: 0,
};

export default function AdminPackages() {
  const { toast } = useToast();
  const [editingPackage, setEditingPackage] = useState<MovingPackage | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<PackageFormData>(emptyPackage);
  const [featuresText, setFeaturesText] = useState("");
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const { data: packages, isLoading } = useQuery<MovingPackage[]>({
    queryKey: ["/api/admin/packages"],
  });

  const initializeMutation = useMutation({
    mutationFn: () => apiRequest("POST", "/api/admin/packages/initialize"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/packages"] });
      queryClient.invalidateQueries({ queryKey: ["/api/packages"] });
      toast({ title: "Packages initialized successfully" });
    },
    onError: (error: any) => {
      toast({ 
        title: "Failed to initialize packages", 
        description: error.message,
        variant: "destructive" 
      });
    },
  });

  const createMutation = useMutation({
    mutationFn: (data: PackageFormData) => apiRequest("POST", "/api/admin/packages", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/packages"] });
      queryClient.invalidateQueries({ queryKey: ["/api/packages"] });
      setIsCreating(false);
      setFormData(emptyPackage);
      setFeaturesText("");
      toast({ title: "Package created successfully" });
    },
    onError: (error: any) => {
      toast({ 
        title: "Failed to create package", 
        description: error.message,
        variant: "destructive" 
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<PackageFormData> }) => 
      apiRequest("PATCH", `/api/admin/packages/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/packages"] });
      queryClient.invalidateQueries({ queryKey: ["/api/packages"] });
      setEditingPackage(null);
      setFormData(emptyPackage);
      setFeaturesText("");
      toast({ title: "Package updated successfully" });
    },
    onError: (error: any) => {
      toast({ 
        title: "Failed to update package", 
        description: error.message,
        variant: "destructive" 
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => apiRequest("DELETE", `/api/admin/packages/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/packages"] });
      queryClient.invalidateQueries({ queryKey: ["/api/packages"] });
      setDeleteConfirmId(null);
      toast({ title: "Package deleted successfully" });
    },
    onError: (error: any) => {
      toast({ 
        title: "Failed to delete package", 
        description: error.message,
        variant: "destructive" 
      });
    },
  });

  const handleEdit = (pkg: MovingPackage) => {
    setEditingPackage(pkg);
    setFormData({
      name: pkg.name,
      displayName: pkg.displayName,
      description: pkg.description,
      hourlyRate: pkg.hourlyRate,
      minimumHours: pkg.minimumHours,
      travelFee: pkg.travelFee,
      movers: pkg.movers,
      trucks: pkg.trucks,
      truckSize: pkg.truckSize,
      features: pkg.features,
      isPopular: pkg.isPopular,
      isActive: pkg.isActive,
      sortOrder: pkg.sortOrder,
    });
    setFeaturesText(pkg.features.join("\n"));
  };

  const handleCreate = () => {
    setIsCreating(true);
    setFormData({
      ...emptyPackage,
      sortOrder: (packages?.length || 0),
    });
    setFeaturesText("");
  };

  const handleSave = () => {
    const features = featuresText.split("\n").filter(f => f.trim() !== "");
    const dataToSave = { ...formData, features };

    if (editingPackage) {
      updateMutation.mutate({ id: editingPackage.id, data: dataToSave });
    } else {
      createMutation.mutate(dataToSave);
    }
  };

  const handleCancel = () => {
    setEditingPackage(null);
    setIsCreating(false);
    setFormData(emptyPackage);
    setFeaturesText("");
  };

  const toggleActive = (pkg: MovingPackage) => {
    updateMutation.mutate({ 
      id: pkg.id, 
      data: { isActive: !pkg.isActive } 
    });
  };

  const togglePopular = (pkg: MovingPackage) => {
    updateMutation.mutate({ 
      id: pkg.id, 
      data: { isPopular: !pkg.isPopular } 
    });
  };

  const showForm = !!editingPackage || isCreating;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Package Management</h1>
          <p className="text-muted-foreground">Customize pricing packages and features</p>
        </div>
        <div className="flex gap-2">
          {(!packages || packages.length === 0) && (
            <Button 
              onClick={() => initializeMutation.mutate()} 
              disabled={initializeMutation.isPending}
              variant="outline"
              data-testid="button-initialize-packages"
            >
              {initializeMutation.isPending ? (
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4 mr-2" />
              )}
              Initialize Default Packages
            </Button>
          )}
          <Button onClick={handleCreate} data-testid="button-create-package">
            <Plus className="h-4 w-4 mr-2" />
            Add Package
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-4 w-32 mt-2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : packages?.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">No packages configured yet</p>
            <Button 
              onClick={() => initializeMutation.mutate()} 
              disabled={initializeMutation.isPending}
              data-testid="button-initialize-empty"
            >
              {initializeMutation.isPending ? (
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <CheckCircle className="h-4 w-4 mr-2" />
              )}
              Initialize Default Packages
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages?.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`relative ${!pkg.isActive ? 'opacity-60' : ''}`}
              data-testid={`card-package-${pkg.id}`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-amber-500 hover:bg-amber-600 text-white">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="pt-6">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-xl">{pkg.displayName}</CardTitle>
                  <div className="flex gap-1">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      onClick={() => handleEdit(pkg)}
                      data-testid={`button-edit-${pkg.id}`}
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost"
                      onClick={() => setDeleteConfirmId(pkg.id)}
                      data-testid={`button-delete-${pkg.id}`}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold">${pkg.hourlyRate}</span>
                    <span className="text-muted-foreground">/hour</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{pkg.minimumHours}hr min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span>${pkg.travelFee} travel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{pkg.movers} movers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-muted-foreground" />
                    <span>{pkg.trucks} truck{pkg.trucks > 1 ? 's' : ''}</span>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <p className="text-xs text-muted-foreground mb-2">Features ({pkg.features.length})</p>
                  <ul className="text-xs space-y-1 max-h-24 overflow-y-auto">
                    {pkg.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="truncate">• {feature}</li>
                    ))}
                    {pkg.features.length > 3 && (
                      <li className="text-muted-foreground">+{pkg.features.length - 3} more...</li>
                    )}
                  </ul>
                </div>

                <div className="border-t pt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={pkg.isActive}
                      onCheckedChange={() => toggleActive(pkg)}
                      data-testid={`switch-active-${pkg.id}`}
                    />
                    <span className="text-sm">{pkg.isActive ? 'Active' : 'Inactive'}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => togglePopular(pkg)}
                    className={pkg.isPopular ? 'text-amber-600' : ''}
                    data-testid={`button-popular-${pkg.id}`}
                  >
                    <Star className={`h-4 w-4 ${pkg.isPopular ? 'fill-current' : ''}`} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={showForm} onOpenChange={(open) => !open && handleCancel()}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingPackage ? `Edit ${editingPackage.displayName}` : 'Create New Package'}
            </DialogTitle>
            <DialogDescription>
              {editingPackage 
                ? 'Modify the package details below' 
                : 'Fill in the details for the new package'}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Internal Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Premium"
                  data-testid="input-package-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  value={formData.displayName}
                  onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                  placeholder="e.g., Premium Package"
                  data-testid="input-package-display-name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Ideal for 1-2 bedroom apartments"
                data-testid="input-package-description"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                <Input
                  id="hourlyRate"
                  type="number"
                  value={formData.hourlyRate}
                  onChange={(e) => setFormData({ ...formData, hourlyRate: Number(e.target.value) })}
                  data-testid="input-hourly-rate"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="minimumHours">Min Hours</Label>
                <Input
                  id="minimumHours"
                  type="number"
                  value={formData.minimumHours}
                  onChange={(e) => setFormData({ ...formData, minimumHours: Number(e.target.value) })}
                  data-testid="input-minimum-hours"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="travelFee">Travel Fee ($)</Label>
                <Input
                  id="travelFee"
                  type="number"
                  value={formData.travelFee}
                  onChange={(e) => setFormData({ ...formData, travelFee: Number(e.target.value) })}
                  data-testid="input-travel-fee"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="movers">Number of Movers</Label>
                <Input
                  id="movers"
                  type="number"
                  value={formData.movers}
                  onChange={(e) => setFormData({ ...formData, movers: Number(e.target.value) })}
                  data-testid="input-movers"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="trucks">Number of Trucks</Label>
                <Input
                  id="trucks"
                  type="number"
                  value={formData.trucks}
                  onChange={(e) => setFormData({ ...formData, trucks: Number(e.target.value) })}
                  data-testid="input-trucks"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="truckSize">Truck Size</Label>
                <Input
                  id="truckSize"
                  value={formData.truckSize}
                  onChange={(e) => setFormData({ ...formData, truckSize: e.target.value })}
                  placeholder="e.g., 26ft"
                  data-testid="input-truck-size"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="features">Features (one per line)</Label>
              <Textarea
                id="features"
                value={featuresText}
                onChange={(e) => setFeaturesText(e.target.value)}
                placeholder="2 Professional Movers&#10;26ft Moving Truck&#10;Wrapping all furniture"
                rows={6}
                data-testid="input-features"
              />
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Switch
                  checked={formData.isActive}
                  onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
                  data-testid="switch-form-active"
                />
                <Label>Active</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  checked={formData.isPopular}
                  onCheckedChange={(checked) => setFormData({ ...formData, isPopular: checked })}
                  data-testid="switch-form-popular"
                />
                <Label>Mark as Popular</Label>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={handleCancel} data-testid="button-cancel">
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button 
              onClick={handleSave} 
              disabled={createMutation.isPending || updateMutation.isPending}
              data-testid="button-save"
            >
              <Save className="h-4 w-4 mr-2" />
              {createMutation.isPending || updateMutation.isPending ? 'Saving...' : 'Save Package'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!deleteConfirmId} onOpenChange={(open) => !open && setDeleteConfirmId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Package</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this package? This action cannot be undone.
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
              {deleteMutation.isPending ? 'Deleting...' : 'Delete'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
