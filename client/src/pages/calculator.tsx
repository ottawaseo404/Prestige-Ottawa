import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { 
  Calculator as CalculatorIcon, Sparkles, TruckIcon, Package, Clock, DollarSign, 
  CheckCircle2, ArrowRight, Phone, Loader2, Home, Building2,
  MapPin, Calendar, Piano, Dumbbell, Info, Lightbulb, Star
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface CostEstimate {
  recommendedPackage: "Premium" | "Deluxe" | "Diamond";
  estimatedHours: string;
  estimatedCostLow: number;
  estimatedCostHigh: number;
  breakdown: { item: string; cost: string }[];
  tips: string[];
  confidence: "high" | "medium" | "low";
  explanation: string;
}

export default function Calculator() {
  const [moveType, setMoveType] = useState("residential");
  const [homeSize, setHomeSize] = useState("");
  const [originCity, setOriginCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [moveDate, setMoveDate] = useState("");
  const [hasSpecialItems, setHasSpecialItems] = useState(false);
  const [specialItems, setSpecialItems] = useState("");
  const [needsPacking, setNeedsPacking] = useState(false);
  const [hasStairs, setHasStairs] = useState(false);
  const [stairFlights, setStairFlights] = useState([1]);
  const [estimate, setEstimate] = useState<CostEstimate | null>(null);

  const calculateMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/ai-calculator", data);
      return response.json();
    },
    onSuccess: (data) => {
      setEstimate(data);
    },
  });

  const handleCalculate = () => {
    calculateMutation.mutate({
      moveType,
      homeSize,
      originCity,
      destinationCity,
      moveDate,
      hasSpecialItems,
      specialItems,
      needsPacking,
      hasStairs,
      stairFlights: stairFlights[0],
    });
  };

  const getPackageColor = (pkg: string) => {
    switch (pkg) {
      case "Premium": return "from-amber-500 to-amber-600";
      case "Deluxe": return "from-blue-500 to-blue-600";
      case "Diamond": return "from-purple-500 to-purple-600";
      default: return "from-primary to-amber-600";
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Moving Cost Calculator | Free Instant Estimate | Prestige Moving Vancouver</title>
        <meta name="description" content="Get an instant AI-powered moving cost estimate for your Vancouver move. Free, accurate pricing for residential and commercial moves. No obligation quote." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#1A2332] via-[#2a3a52] to-[#1A2332] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-6">
              <Sparkles className="h-3 w-3 mr-1" />
              AI-Powered
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Moving Cost <span className="text-primary">Calculator</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Get an instant, AI-powered estimate for your move. Our smart calculator considers all factors to give you accurate pricing.
            </p>
            <div className="flex items-center justify-center gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Free & Instant
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                No Obligation
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Accurate Estimates
              </span>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Input Form */}
              <div className="lg:col-span-3">
                <Card className="border-2 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-[#1A2332] to-[#2a3a52] text-white rounded-t-lg">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <CalculatorIcon className="h-5 w-5 text-primary" />
                      Tell Us About Your Move
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      Fill in the details below for an accurate estimate
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    {/* Move Type */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Type of Move</Label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setMoveType("residential")}
                          className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                            moveType === "residential" 
                              ? "border-primary bg-primary/10" 
                              : "border-gray-200 hover:border-primary/50"
                          }`}
                          data-testid="button-move-type-residential"
                        >
                          <Home className={`h-6 w-6 ${moveType === "residential" ? "text-primary" : "text-gray-400"}`} />
                          <span className="font-medium">Residential</span>
                        </button>
                        <button
                          onClick={() => setMoveType("commercial")}
                          className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                            moveType === "commercial" 
                              ? "border-primary bg-primary/10" 
                              : "border-gray-200 hover:border-primary/50"
                          }`}
                          data-testid="button-move-type-commercial"
                        >
                          <Building2 className={`h-6 w-6 ${moveType === "commercial" ? "text-primary" : "text-gray-400"}`} />
                          <span className="font-medium">Commercial</span>
                        </button>
                      </div>
                    </div>

                    {/* Home Size */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Property Size</Label>
                      <Select value={homeSize} onValueChange={setHomeSize}>
                        <SelectTrigger className="h-12" data-testid="select-home-size">
                          <SelectValue placeholder="Select size of your home/office" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="studio">Studio / Bachelor</SelectItem>
                          <SelectItem value="1br">1 Bedroom</SelectItem>
                          <SelectItem value="2br">2 Bedrooms</SelectItem>
                          <SelectItem value="3br">3 Bedrooms</SelectItem>
                          <SelectItem value="4br">4 Bedrooms</SelectItem>
                          <SelectItem value="5br+">5+ Bedrooms</SelectItem>
                          <SelectItem value="house-small">Small House (up to 1,500 sq ft)</SelectItem>
                          <SelectItem value="house-medium">Medium House (1,500-2,500 sq ft)</SelectItem>
                          <SelectItem value="house-large">Large House (2,500+ sq ft)</SelectItem>
                          <SelectItem value="office-small">Small Office</SelectItem>
                          <SelectItem value="office-medium">Medium Office</SelectItem>
                          <SelectItem value="office-large">Large Office</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Locations */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          Moving From
                        </Label>
                        <Input 
                          placeholder="City or neighborhood" 
                          value={originCity}
                          onChange={(e) => setOriginCity(e.target.value)}
                          className="h-12"
                          data-testid="input-origin-city"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          Moving To
                        </Label>
                        <Input 
                          placeholder="City or neighborhood" 
                          value={destinationCity}
                          onChange={(e) => setDestinationCity(e.target.value)}
                          className="h-12"
                          data-testid="input-destination-city"
                        />
                      </div>
                    </div>

                    {/* Move Date */}
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        Preferred Move Date
                      </Label>
                      <Input 
                        type="date" 
                        value={moveDate}
                        onChange={(e) => setMoveDate(e.target.value)}
                        className="h-12"
                        data-testid="input-move-date"
                      />
                    </div>

                    {/* Stairs */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label className="text-base font-semibold">Stairs Involved?</Label>
                        <Switch 
                          checked={hasStairs} 
                          onCheckedChange={setHasStairs}
                          data-testid="switch-stairs"
                        />
                      </div>
                      {hasStairs && (
                        <div className="space-y-2 pl-4 border-l-2 border-primary/30">
                          <Label>Number of Flights: {stairFlights[0]}</Label>
                          <Slider
                            value={stairFlights}
                            onValueChange={setStairFlights}
                            max={10}
                            min={1}
                            step={1}
                            data-testid="slider-stair-flights"
                          />
                        </div>
                      )}
                    </div>

                    {/* Packing Service */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Package className="h-5 w-5 text-primary" />
                        <div>
                          <Label className="text-base font-semibold">Need Packing Service?</Label>
                          <p className="text-sm text-muted-foreground">We'll pack everything for you</p>
                        </div>
                      </div>
                      <Switch 
                        checked={needsPacking} 
                        onCheckedChange={setNeedsPacking}
                        data-testid="switch-packing"
                      />
                    </div>

                    {/* Special Items */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Piano className="h-5 w-5 text-primary" />
                          <div>
                            <Label className="text-base font-semibold">Special Items?</Label>
                            <p className="text-sm text-muted-foreground">Piano, hot tub, pool table, etc.</p>
                          </div>
                        </div>
                        <Switch 
                          checked={hasSpecialItems} 
                          onCheckedChange={setHasSpecialItems}
                          data-testid="switch-special-items"
                        />
                      </div>
                      {hasSpecialItems && (
                        <Input 
                          placeholder="List your special items (e.g., piano, hot tub, antiques)"
                          value={specialItems}
                          onChange={(e) => setSpecialItems(e.target.value)}
                          className="h-12"
                          data-testid="input-special-items"
                        />
                      )}
                    </div>

                    {/* Calculate Button */}
                    <Button 
                      onClick={handleCalculate}
                      disabled={calculateMutation.isPending || !homeSize}
                      size="lg"
                      className="w-full h-14 text-lg font-bold shadow-lg"
                      data-testid="button-calculate"
                    >
                      {calculateMutation.isPending ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Calculating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-5 w-5 mr-2" />
                          Get My Estimate
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Results Panel */}
              <div className="lg:col-span-2">
                {!estimate && !calculateMutation.isPending && (
                  <Card className="border-2 border-dashed h-full flex items-center justify-center">
                    <CardContent className="text-center py-16">
                      <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CalculatorIcon className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Your Estimate Will Appear Here</h3>
                      <p className="text-muted-foreground">
                        Fill out the form and click "Get My Estimate" to see your personalized moving quote.
                      </p>
                    </CardContent>
                  </Card>
                )}

                {calculateMutation.isPending && (
                  <Card className="border-2 h-full flex items-center justify-center">
                    <CardContent className="text-center py-16">
                      <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                        <Sparkles className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">AI is Calculating...</h3>
                      <p className="text-muted-foreground">
                        Analyzing your move details to provide the most accurate estimate.
                      </p>
                    </CardContent>
                  </Card>
                )}

                {estimate && (
                  <div className="space-y-4">
                    {/* Main Estimate Card */}
                    <Card className="border-2 border-primary shadow-xl overflow-hidden">
                      <div className={`bg-gradient-to-r ${getPackageColor(estimate.recommendedPackage)} p-6 text-white`}>
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-white/20 text-white border-white/30">
                            {estimate.confidence === "high" ? "High Accuracy" : estimate.confidence === "medium" ? "Good Estimate" : "Rough Estimate"}
                          </Badge>
                          <Badge className="bg-white/20 text-white border-white/30">
                            {estimate.recommendedPackage} Package
                          </Badge>
                        </div>
                        <div className="text-center">
                          <p className="text-white/80 text-sm mb-2">Estimated Cost</p>
                          <div className="text-4xl md:text-5xl font-black mb-2">
                            ${estimate.estimatedCostLow.toLocaleString()} - ${estimate.estimatedCostHigh.toLocaleString()}
                          </div>
                          <p className="text-white/80">
                            <Clock className="h-4 w-4 inline mr-1" />
                            Estimated {estimate.estimatedHours} hours
                          </p>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <p className="text-muted-foreground mb-4">{estimate.explanation}</p>
                        
                        {/* Cost Breakdown */}
                        <div className="space-y-3">
                          <h4 className="font-bold flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-primary" />
                            Cost Breakdown
                          </h4>
                          <div className="space-y-2">
                            {estimate.breakdown.map((item, index) => (
                              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                                <span className="text-sm">{item.item}</span>
                                <span className="font-medium text-sm">{item.cost}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Tips Card */}
                    <Card className="border-2">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-primary" />
                          Pro Tips
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {estimate.tips.map((tip, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{tip}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Link href="/book">
                        <Button size="lg" className="w-full h-14 text-lg font-bold shadow-lg" data-testid="button-book-now">
                          Book Your Move Now
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                      </Link>
                      <a href="tel:604-616-6066">
                        <Button size="lg" variant="outline" className="w-full h-14 text-lg font-bold border-2" data-testid="button-call-estimate">
                          <Phone className="h-5 w-5 mr-2" />
                          Call for Exact Quote
                        </Button>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-foreground mb-4">
                How Our AI Calculator Works
              </h2>
              <p className="text-muted-foreground">
                Our smart algorithm considers multiple factors for accurate pricing
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Property Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  We calculate based on your home size, number of rooms, and typical furniture volume.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Distance & Access</h3>
                <p className="text-sm text-muted-foreground">
                  We factor in travel distance, stairs, elevator access, and building requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TruckIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Resource Matching</h3>
                <p className="text-sm text-muted-foreground">
                  We recommend the right package with the perfect number of movers and truck size.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary via-amber-500 to-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A2332] mb-4">
              Ready for an Exact Quote?
            </h2>
            <p className="text-lg text-[#1A2332]/80 mb-8">
              Our team can provide a precise quote based on a detailed assessment of your move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-[#1A2332] text-white hover:bg-[#2a3a52] text-lg font-bold px-8 py-6">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:604-616-6066">
                <Button size="lg" variant="outline" className="text-lg font-bold px-8 py-6 border-2 border-[#1A2332] text-[#1A2332] hover:bg-[#1A2332] hover:text-white">
                  <Phone className="h-5 w-5 mr-2" />
                  604-616-6066
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
