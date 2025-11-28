import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Calculator as CalculatorIcon, Sparkles, TruckIcon, Package, Clock, DollarSign, 
  CheckCircle2, ArrowRight, Phone, Loader2, Home, Building2,
  MapPin, Calendar, Plus, Minus, ChevronDown, ChevronUp, RotateCcw,
  Sofa, UtensilsCrossed, Refrigerator, Bed, Armchair, Baby, TreePine, Boxes, Dumbbell
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface InventoryItem {
  name: string;
  cubicFeet: number;
  weight: number;
  quantity: number;
}

interface RoomInventory {
  name: string;
  icon: any;
  items: InventoryItem[];
}

const initialInventory: RoomInventory[] = [
  {
    name: "Living Room",
    icon: Sofa,
    items: [
      { name: "Sofa, 3-Cushion", cubicFeet: 45, weight: 200, quantity: 0 },
      { name: "Sofa, Loveseat", cubicFeet: 35, weight: 110, quantity: 0 },
      { name: "Armchair", cubicFeet: 10, weight: 60, quantity: 0 },
      { name: "Recliner", cubicFeet: 25, weight: 120, quantity: 0 },
      { name: "Coffee Table", cubicFeet: 5, weight: 25, quantity: 0 },
      { name: "End Table", cubicFeet: 5, weight: 25, quantity: 0 },
      { name: "TV Stand / Entertainment Center", cubicFeet: 20, weight: 100, quantity: 0 },
      { name: "Television (Large)", cubicFeet: 15, weight: 100, quantity: 0 },
      { name: "Television (Small)", cubicFeet: 10, weight: 70, quantity: 0 },
      { name: "Bookshelf (per section)", cubicFeet: 10, weight: 65, quantity: 0 },
      { name: "Floor Lamp", cubicFeet: 3, weight: 10, quantity: 0 },
      { name: "Rug, Large", cubicFeet: 10, weight: 50, quantity: 0 },
      { name: "Rug, Small", cubicFeet: 3, weight: 15, quantity: 0 },
      { name: "Piano, Upright", cubicFeet: 60, weight: 450, quantity: 0 },
      { name: "Piano, Baby Grand", cubicFeet: 80, weight: 600, quantity: 0 },
      { name: "Grandfather Clock", cubicFeet: 20, weight: 150, quantity: 0 },
    ]
  },
  {
    name: "Kitchen",
    icon: UtensilsCrossed,
    items: [
      { name: "Kitchen Table (Small)", cubicFeet: 10, weight: 50, quantity: 0 },
      { name: "Kitchen Table (Large)", cubicFeet: 15, weight: 80, quantity: 0 },
      { name: "Kitchen Chair", cubicFeet: 5, weight: 25, quantity: 0 },
      { name: "Bar Stool", cubicFeet: 3, weight: 15, quantity: 0 },
      { name: "High Chair", cubicFeet: 5, weight: 25, quantity: 0 },
      { name: "Buffet / Hutch", cubicFeet: 30, weight: 150, quantity: 0 },
      { name: "Microwave Cart", cubicFeet: 10, weight: 40, quantity: 0 },
      { name: "Kitchen Island", cubicFeet: 20, weight: 100, quantity: 0 },
    ]
  },
  {
    name: "Appliances",
    icon: Refrigerator,
    items: [
      { name: "Refrigerator (Standard)", cubicFeet: 35, weight: 250, quantity: 0 },
      { name: "Refrigerator (Large)", cubicFeet: 50, weight: 350, quantity: 0 },
      { name: "Freezer (Chest)", cubicFeet: 30, weight: 250, quantity: 0 },
      { name: "Stove / Range", cubicFeet: 30, weight: 225, quantity: 0 },
      { name: "Dishwasher", cubicFeet: 25, weight: 150, quantity: 0 },
      { name: "Washer", cubicFeet: 25, weight: 230, quantity: 0 },
      { name: "Dryer", cubicFeet: 25, weight: 180, quantity: 0 },
      { name: "Microwave", cubicFeet: 15, weight: 100, quantity: 0 },
      { name: "Air Conditioner (Window)", cubicFeet: 15, weight: 150, quantity: 0 },
      { name: "Vacuum Cleaner", cubicFeet: 5, weight: 25, quantity: 0 },
    ]
  },
  {
    name: "Bedroom",
    icon: Bed,
    items: [
      { name: "Bed, King/Queen (with mattress)", cubicFeet: 70, weight: 400, quantity: 0 },
      { name: "Bed, Double (with mattress)", cubicFeet: 60, weight: 300, quantity: 0 },
      { name: "Bed, Single/Twin (with mattress)", cubicFeet: 40, weight: 150, quantity: 0 },
      { name: "Bunk Bed (set)", cubicFeet: 70, weight: 200, quantity: 0 },
      { name: "Dresser, Single", cubicFeet: 20, weight: 140, quantity: 0 },
      { name: "Dresser, Double", cubicFeet: 25, weight: 180, quantity: 0 },
      { name: "Dresser, Triple", cubicFeet: 30, weight: 230, quantity: 0 },
      { name: "Nightstand", cubicFeet: 5, weight: 30, quantity: 0 },
      { name: "Wardrobe / Armoire", cubicFeet: 30, weight: 200, quantity: 0 },
      { name: "Vanity with Mirror", cubicFeet: 15, weight: 75, quantity: 0 },
      { name: "Cedar Chest", cubicFeet: 15, weight: 75, quantity: 0 },
      { name: "Desk, Small", cubicFeet: 10, weight: 100, quantity: 0 },
    ]
  },
  {
    name: "Dining Room",
    icon: Armchair,
    items: [
      { name: "Dining Table (4-6 seats)", cubicFeet: 25, weight: 120, quantity: 0 },
      { name: "Dining Table (8+ seats)", cubicFeet: 35, weight: 180, quantity: 0 },
      { name: "Dining Chair", cubicFeet: 5, weight: 25, quantity: 0 },
      { name: "China Cabinet", cubicFeet: 40, weight: 200, quantity: 0 },
      { name: "Buffet / Sideboard", cubicFeet: 30, weight: 150, quantity: 0 },
      { name: "Hutch (Top)", cubicFeet: 20, weight: 100, quantity: 0 },
      { name: "Bar Cart", cubicFeet: 10, weight: 40, quantity: 0 },
    ]
  },
  {
    name: "Nursery / Kids",
    icon: Baby,
    items: [
      { name: "Crib", cubicFeet: 15, weight: 80, quantity: 0 },
      { name: "Changing Table", cubicFeet: 12, weight: 50, quantity: 0 },
      { name: "Toy Chest", cubicFeet: 5, weight: 25, quantity: 0 },
      { name: "Child's Bed", cubicFeet: 30, weight: 100, quantity: 0 },
      { name: "Child's Dresser", cubicFeet: 12, weight: 50, quantity: 0 },
      { name: "Playpen", cubicFeet: 5, weight: 35, quantity: 0 },
      { name: "Stroller", cubicFeet: 10, weight: 20, quantity: 0 },
      { name: "High Chair", cubicFeet: 5, weight: 25, quantity: 0 },
    ]
  },
  {
    name: "Outdoor & Garage",
    icon: TreePine,
    items: [
      { name: "Patio Table", cubicFeet: 15, weight: 50, quantity: 0 },
      { name: "Patio Chair", cubicFeet: 5, weight: 15, quantity: 0 },
      { name: "Patio Umbrella", cubicFeet: 10, weight: 30, quantity: 0 },
      { name: "BBQ Grill (Gas)", cubicFeet: 20, weight: 150, quantity: 0 },
      { name: "BBQ Grill (Charcoal)", cubicFeet: 10, weight: 50, quantity: 0 },
      { name: "Lawn Mower (Gas)", cubicFeet: 15, weight: 90, quantity: 0 },
      { name: "Lawn Mower (Electric)", cubicFeet: 10, weight: 35, quantity: 0 },
      { name: "Snow Blower", cubicFeet: 15, weight: 125, quantity: 0 },
      { name: "Wheelbarrow", cubicFeet: 5, weight: 30, quantity: 0 },
      { name: "Ladder (Extension)", cubicFeet: 10, weight: 30, quantity: 0 },
      { name: "Ladder (Step)", cubicFeet: 5, weight: 15, quantity: 0 },
      { name: "Tool Cabinet", cubicFeet: 15, weight: 75, quantity: 0 },
      { name: "Workbench", cubicFeet: 20, weight: 100, quantity: 0 },
      { name: "Bicycle", cubicFeet: 12, weight: 50, quantity: 0 },
      { name: "Hot Tub (Empty)", cubicFeet: 100, weight: 500, quantity: 0 },
    ]
  },
  {
    name: "Office & Exercise",
    icon: Dumbbell,
    items: [
      { name: "Office Desk", cubicFeet: 20, weight: 150, quantity: 0 },
      { name: "Office Chair", cubicFeet: 10, weight: 50, quantity: 0 },
      { name: "Filing Cabinet (2-drawer)", cubicFeet: 10, weight: 50, quantity: 0 },
      { name: "Filing Cabinet (4-drawer)", cubicFeet: 20, weight: 100, quantity: 0 },
      { name: "Computer & Monitor", cubicFeet: 10, weight: 50, quantity: 0 },
      { name: "Printer", cubicFeet: 5, weight: 30, quantity: 0 },
      { name: "Treadmill", cubicFeet: 30, weight: 250, quantity: 0 },
      { name: "Exercise Bike", cubicFeet: 15, weight: 120, quantity: 0 },
      { name: "Elliptical", cubicFeet: 25, weight: 200, quantity: 0 },
      { name: "Weight Bench", cubicFeet: 15, weight: 100, quantity: 0 },
      { name: "Weight Set", cubicFeet: 10, weight: 200, quantity: 0 },
      { name: "Pool Table", cubicFeet: 80, weight: 600, quantity: 0 },
      { name: "Ping Pong Table", cubicFeet: 30, weight: 110, quantity: 0 },
    ]
  },
  {
    name: "Boxes & Containers",
    icon: Boxes,
    items: [
      { name: "Box, Small (1.5 cu ft)", cubicFeet: 2, weight: 25, quantity: 0 },
      { name: "Box, Medium (3 cu ft)", cubicFeet: 4, weight: 35, quantity: 0 },
      { name: "Box, Large (4.5 cu ft)", cubicFeet: 6, weight: 45, quantity: 0 },
      { name: "Box, Extra Large (6 cu ft)", cubicFeet: 8, weight: 60, quantity: 0 },
      { name: "Wardrobe Box", cubicFeet: 15, weight: 60, quantity: 0 },
      { name: "China / Dish Barrel", cubicFeet: 10, weight: 70, quantity: 0 },
      { name: "Picture / Mirror Box", cubicFeet: 8, weight: 50, quantity: 0 },
      { name: "Suitcase (Large)", cubicFeet: 6, weight: 50, quantity: 0 },
      { name: "Storage Bin (Large)", cubicFeet: 5, weight: 40, quantity: 0 },
    ]
  },
];

export default function Calculator() {
  const [inventory, setInventory] = useState<RoomInventory[]>(initialInventory);
  const [openRooms, setOpenRooms] = useState<string[]>(["Living Room"]);
  const [step, setStep] = useState<"inventory" | "contact">("inventory");
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    movingFrom: "",
    movingTo: "",
    moveDate: "",
    message: "",
  });

  const totals = useMemo(() => {
    let totalItems = 0;
    let totalCubicFeet = 0;
    let totalWeight = 0;

    inventory.forEach(room => {
      room.items.forEach(item => {
        if (item.quantity > 0) {
          totalItems += item.quantity;
          totalCubicFeet += item.cubicFeet * item.quantity;
          totalWeight += item.weight * item.quantity;
        }
      });
    });

    return { totalItems, totalCubicFeet, totalWeight };
  }, [inventory]);

  const estimatedCost = useMemo(() => {
    const { totalCubicFeet, totalWeight } = totals;
    
    if (totalCubicFeet === 0) return { low: 0, high: 0, package: "Premium" };
    
    let recommendedPackage = "Premium";
    let hourlyRate = 155;
    let travelFee = 155;
    
    if (totalCubicFeet > 800 || totalWeight > 6000) {
      recommendedPackage = "Diamond";
      hourlyRate = 315;
      travelFee = 315;
    } else if (totalCubicFeet > 400 || totalWeight > 3000) {
      recommendedPackage = "Deluxe";
      hourlyRate = 195;
      travelFee = 195;
    }
    
    const estimatedHours = Math.max(3, Math.ceil(totalCubicFeet / 150));
    const baseCost = estimatedHours * hourlyRate + travelFee;
    
    return {
      low: Math.round(baseCost * 0.9),
      high: Math.round(baseCost * 1.1),
      package: recommendedPackage,
      hours: estimatedHours,
    };
  }, [totals]);

  const updateQuantity = (roomIndex: number, itemIndex: number, delta: number) => {
    setInventory(prev => {
      const newInventory = [...prev];
      const newItems = [...newInventory[roomIndex].items];
      newItems[itemIndex] = {
        ...newItems[itemIndex],
        quantity: Math.max(0, newItems[itemIndex].quantity + delta)
      };
      newInventory[roomIndex] = { ...newInventory[roomIndex], items: newItems };
      return newInventory;
    });
  };

  const resetRoom = (roomIndex: number) => {
    setInventory(prev => {
      const newInventory = [...prev];
      const newItems = newInventory[roomIndex].items.map(item => ({ ...item, quantity: 0 }));
      newInventory[roomIndex] = { ...newInventory[roomIndex], items: newItems };
      return newInventory;
    });
  };

  const resetAll = () => {
    setInventory(initialInventory);
  };

  const toggleRoom = (roomName: string) => {
    setOpenRooms(prev => 
      prev.includes(roomName) 
        ? prev.filter(r => r !== roomName)
        : [...prev, roomName]
    );
  };

  const getRoomTotal = (room: RoomInventory) => {
    return room.items.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <>
      <Helmet>
        <title>Moving Calculator | Free Inventory Estimator | Prestige Moving Vancouver</title>
        <meta name="description" content="Calculate your moving costs with our free inventory calculator. Add items room by room for an accurate moving estimate in Vancouver." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        {/* Hero Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-[#1A2332] via-[#2a3a52] to-[#1A2332] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Free Estimate Tool
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
              Moving <span className="text-primary">Calculator</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Add items from each room to get an accurate estimate for your move. Our calculator helps you understand the size and cost of your move.
            </p>
          </div>
        </section>

        {step === "inventory" ? (
          <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Inventory List */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Select Your Items</h2>
                    <Button variant="outline" size="sm" onClick={resetAll} className="gap-2">
                      <RotateCcw className="h-4 w-4" />
                      Reset All
                    </Button>
                  </div>

                  {inventory.map((room, roomIndex) => {
                    const roomTotal = getRoomTotal(room);
                    const Icon = room.icon;
                    const isOpen = openRooms.includes(room.name);

                    return (
                      <Collapsible key={room.name} open={isOpen} onOpenChange={() => toggleRoom(room.name)}>
                        <Card className={`border-2 ${isOpen ? 'border-primary/50' : ''}`}>
                          <CollapsibleTrigger asChild>
                            <CardHeader className="cursor-pointer hover:bg-accent/50 transition-colors">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                                    <Icon className="h-5 w-5" />
                                  </div>
                                  <div>
                                    <CardTitle className="text-lg">{room.name}</CardTitle>
                                    {roomTotal > 0 && (
                                      <CardDescription>{roomTotal} item{roomTotal !== 1 ? 's' : ''} selected</CardDescription>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center gap-3">
                                  {roomTotal > 0 && (
                                    <Badge variant="secondary">{roomTotal}</Badge>
                                  )}
                                  {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                                </div>
                              </div>
                            </CardHeader>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <CardContent className="pt-0">
                              <div className="flex justify-end mb-4">
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => resetRoom(roomIndex)}
                                  className="text-muted-foreground hover:text-foreground"
                                >
                                  <RotateCcw className="h-3 w-3 mr-1" />
                                  Reset
                                </Button>
                              </div>
                              <div className="space-y-2">
                                {room.items.map((item, itemIndex) => (
                                  <div 
                                    key={item.name}
                                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                                      item.quantity > 0 ? 'bg-primary/10 border border-primary/20' : 'bg-gray-50 hover:bg-gray-100'
                                    }`}
                                  >
                                    <div className="flex-1">
                                      <span className={`font-medium ${item.quantity > 0 ? 'text-foreground' : 'text-muted-foreground'}`}>
                                        {item.name}
                                      </span>
                                      <div className="text-xs text-muted-foreground">
                                        {item.cubicFeet} cu ft • {item.weight} lbs
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={() => updateQuantity(roomIndex, itemIndex, -1)}
                                        disabled={item.quantity === 0}
                                      >
                                        <Minus className="h-4 w-4" />
                                      </Button>
                                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                                      <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={() => updateQuantity(roomIndex, itemIndex, 1)}
                                      >
                                        <Plus className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </CollapsibleContent>
                        </Card>
                      </Collapsible>
                    );
                  })}
                </div>

                {/* Summary Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-4">
                    <Card className="border-2 border-primary shadow-xl">
                      <CardHeader className="bg-gradient-to-r from-[#1A2332] to-[#2a3a52] text-white rounded-t-lg">
                        <CardTitle className="flex items-center gap-2">
                          <CalculatorIcon className="h-5 w-5 text-primary" />
                          Move Summary
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-6">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-black text-primary">{totals.totalItems}</div>
                            <div className="text-xs text-muted-foreground">Items</div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-black text-primary">{totals.totalCubicFeet}</div>
                            <div className="text-xs text-muted-foreground">Cu Ft</div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-black text-primary">{totals.totalWeight.toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground">Lbs</div>
                          </div>
                        </div>

                        {totals.totalItems > 0 && (
                          <>
                            <div className="border-t pt-4">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-muted-foreground">Recommended Package</span>
                                <Badge className="bg-primary">{estimatedCost.package}</Badge>
                              </div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-muted-foreground">Estimated Hours</span>
                                <span className="font-bold">{estimatedCost.hours} hrs</span>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-primary to-amber-500 text-white p-4 rounded-xl text-center">
                              <div className="text-sm opacity-80 mb-1">Estimated Cost</div>
                              <div className="text-3xl font-black">
                                ${estimatedCost.low.toLocaleString()} - ${estimatedCost.high.toLocaleString()}
                              </div>
                            </div>
                          </>
                        )}

                        <Button 
                          size="lg" 
                          className="w-full font-bold"
                          disabled={totals.totalItems === 0}
                          onClick={() => setStep("contact")}
                          data-testid="button-next-step"
                        >
                          Get Quote With This Inventory
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>

                        <p className="text-xs text-center text-muted-foreground">
                          Final price confirmed after consultation
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm text-muted-foreground">Questions? Call us</div>
                            <a href="tel:604-616-6066" className="font-bold text-lg hover:text-primary">
                              604-616-6066
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-[#1A2332] to-[#2a3a52] text-white rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Request Your Quote</CardTitle>
                      <CardDescription className="text-white/70">
                        Fill in your details and we'll contact you with a personalized quote
                      </CardDescription>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setStep("inventory")}
                      className="text-white hover:bg-white/10"
                    >
                      Back to Inventory
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Summary Banner */}
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-black text-primary">{totals.totalItems}</div>
                          <div className="text-xs text-muted-foreground">Items</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-black text-primary">{totals.totalWeight.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">Lbs</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Est. Cost</div>
                        <div className="text-xl font-black text-primary">
                          ${estimatedCost.low.toLocaleString()} - ${estimatedCost.high.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>First Name *</Label>
                      <Input 
                        placeholder="John"
                        value={contactInfo.firstName}
                        onChange={(e) => setContactInfo(prev => ({ ...prev, firstName: e.target.value }))}
                        data-testid="input-first-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Last Name *</Label>
                      <Input 
                        placeholder="Doe"
                        value={contactInfo.lastName}
                        onChange={(e) => setContactInfo(prev => ({ ...prev, lastName: e.target.value }))}
                        data-testid="input-last-name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Email *</Label>
                      <Input 
                        type="email"
                        placeholder="john@example.com"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                        data-testid="input-email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone *</Label>
                      <Input 
                        type="tel"
                        placeholder="604-555-1234"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo(prev => ({ ...prev, phone: e.target.value }))}
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        Moving From *
                      </Label>
                      <Input 
                        placeholder="City or neighborhood"
                        value={contactInfo.movingFrom}
                        onChange={(e) => setContactInfo(prev => ({ ...prev, movingFrom: e.target.value }))}
                        data-testid="input-moving-from"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        Moving To *
                      </Label>
                      <Input 
                        placeholder="City or neighborhood"
                        value={contactInfo.movingTo}
                        onChange={(e) => setContactInfo(prev => ({ ...prev, movingTo: e.target.value }))}
                        data-testid="input-moving-to"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      Preferred Moving Date
                    </Label>
                    <Input 
                      type="date"
                      value={contactInfo.moveDate}
                      onChange={(e) => setContactInfo(prev => ({ ...prev, moveDate: e.target.value }))}
                      data-testid="input-move-date"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Additional Notes</Label>
                    <textarea 
                      className="w-full min-h-[100px] p-3 border rounded-md resize-none"
                      placeholder="Any special requirements, access issues, or items we should know about..."
                      value={contactInfo.message}
                      onChange={(e) => setContactInfo(prev => ({ ...prev, message: e.target.value }))}
                      data-testid="textarea-message"
                    />
                  </div>

                  <Link href="/book">
                    <Button size="lg" className="w-full font-bold text-lg py-6" data-testid="button-submit-quote">
                      <Sparkles className="h-5 w-5 mr-2" />
                      Get My Free Quote
                    </Button>
                  </Link>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to be contacted by Prestige Moving regarding your move request.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help With Your Inventory?</h2>
            <p className="text-muted-foreground mb-6">
              Our team can do a virtual walkthrough or visit your home to provide an exact quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="font-bold px-8">
                  Schedule Free Consultation
                </Button>
              </Link>
              <a href="tel:604-616-6066">
                <Button size="lg" variant="outline" className="font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" />
                  604-616-6066
                </Button>
              </a>
            </div>
          </div>
        </section>

        <SharedFooter />
      </div>
    </>
  );
}
