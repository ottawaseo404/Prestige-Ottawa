import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Phone, CheckCircle2, MapPin, TruckIcon, Shield, Clock, Navigation, 
  ArrowRight, Star, Package, Users, Sparkles, Calendar, ChevronLeft,
  ChevronRight, Plane, Train, Timer, Fuel, Route, Map, Globe,
  Compass, Mountain, Building2, TreePine, Waves, Zap, Award,
  LocateFixed, Truck, PackageCheck, Home, ArrowDown, DollarSign, Warehouse, Box
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import longDistanceVideo from "@assets/generated_videos/white_trucks_driving_bc_mountains.mp4";

const destinations = [
  { city: "Calgary", province: "AB", distance: 675, time: "8-10 hrs", popular: true, icon: Mountain },
  { city: "Edmonton", province: "AB", distance: 820, time: "10-12 hrs", popular: true, icon: Building2 },
  { city: "Victoria", province: "BC", distance: 112, time: "4-5 hrs", popular: true, icon: Waves },
  { city: "Kelowna", province: "BC", distance: 390, time: "4-5 hrs", popular: true, icon: TreePine },
  { city: "Toronto", province: "ON", distance: 4400, time: "4-5 days", popular: true, icon: Building2 },
  { city: "Montreal", province: "QC", distance: 4800, time: "5-6 days", popular: true, icon: Building2 },
  { city: "Winnipeg", province: "MB", distance: 2300, time: "2-3 days", popular: true, icon: TreePine },
  { city: "Halifax", province: "NS", distance: 6000, time: "6-7 days", popular: true, icon: Waves },
];

const trackingSteps = [
  { status: "Pickup Complete", icon: PackageCheck, time: "Day 1" },
  { status: "In Transit", icon: Truck, time: "Day 2-3" },
  { status: "Checkpoint Update", icon: LocateFixed, time: "Day 3" },
  { status: "Near Destination", icon: MapPin, time: "Day 4" },
  { status: "Delivered", icon: Home, time: "Day 5" },
];

export default function LongDistanceMoving() {
  const [selectedDestination, setSelectedDestination] = useState(0);
  const [trackingStep, setTrackingStep] = useState(0);
  const [animatedDistance, setAnimatedDistance] = useState(0);
  const [moveSize, setMoveSize] = useState(2);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Long Distance Moving Services Vancouver",
    "provider": {
      "@type": "MovingCompany",
      "name": "Prestige Moving Vancouver",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vancouver",
        "addressRegion": "BC",
        "addressCountry": "CA"
      },
      "telephone": "604-616-6066",
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Canada"
    },
    "description": "Professional coast-to-coast moving services from Vancouver to anywhere in Canada."
  };

  const moveSizes = ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom", "4+ Bedroom"];
  const basePrices = [1500, 2500, 3500, 5000, 7000];
  const pricePerKm = [0.5, 0.75, 1.0, 1.25, 1.5];
  
  const estimatedPrice = basePrices[moveSize] + (destinations[selectedDestination].distance * pricePerKm[moveSize]);

  const benefits = [
    { icon: Shield, title: "Full Insurance", description: "Complete protection for your belongings coast-to-coast" },
    { icon: LocateFixed, title: "GPS Tracking", description: "Real-time location updates throughout your move" },
    { icon: Users, title: "Dedicated Team", description: "Same crew from pickup to delivery, no transfers" },
    { icon: Timer, title: "On-Time Guarantee", description: "We commit to delivery windows, guaranteed" },
    { icon: Package, title: "Climate Control", description: "Temperature-controlled trucks for sensitive items" },
    { icon: Sparkles, title: "White Glove", description: "Full unpacking and furniture placement included" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTrackingStep((prev) => (prev + 1) % trackingSteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const targetDistance = destinations[selectedDestination].distance;
    const duration = 1000;
    const steps = 30;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setAnimatedDistance(Math.round((targetDistance * step) / steps));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [selectedDestination]);

  return (
    <>
      <Helmet>
        <title>Coast to Coast Moving Services | Long Distance Movers Vancouver | Prestige Moving</title>
        <meta name="description" content="Professional coast-to-coast moving services from Vancouver. Moving to Toronto, Calgary, Montreal, or anywhere in Canada? Experienced long distance movers with full insurance and GPS tracking." />
        <meta name="keywords" content="coast to coast moving, long distance moving Vancouver, cross-Canada movers, Vancouver to Toronto movers, interprovincial moving" />
        <meta property="og:title" content="Coast to Coast Moving Services | Prestige Moving Vancouver" />
        <meta property="og:description" content="Professional long distance moving from Vancouver to anywhere in Canada. Full insurance, GPS tracking." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://vancouver.prestigemoving.ca/services/long-distance-moving" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        {/* Immersive Hero with Video */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <video 
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="video-hero-long-distance"
          >
            <source src={longDistanceVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332] via-[#1A2332]/90 to-[#1A2332]/50" />

          {/* Floating Route Card */}
          <div className="absolute right-8 top-1/4 hidden xl:block z-20">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 w-72">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">From Vancouver to</p>
                  <p className="text-white font-bold">{destinations[selectedDestination].city}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Distance</span>
                  <span className="text-primary font-bold">{animatedDistance.toLocaleString()} km</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Transit Time</span>
                  <span className="text-white font-medium">{destinations[selectedDestination].time}</span>
                </div>
                <Progress value={(selectedDestination + 1) * 12.5} className="h-2 bg-white/10" />
              </div>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-primary/20 text-primary border-primary/40 px-4 py-1.5">
                  <Globe className="h-4 w-4 mr-2" />
                  Long Distance
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/40">
                  <LocateFixed className="h-3 w-3 mr-1" />
                  GPS Tracked
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Coast to Coast<br />
                <span className="text-primary">Moving Experts</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                From Vancouver to anywhere in Canada. We've delivered <span className="text-primary font-semibold">3,000+ families</span> safely across provinces with full insurance and real-time tracking.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/book">
                  <Button size="lg" className="text-lg font-bold px-8 py-7 shadow-xl shadow-primary/30 group" data-testid="button-hero-quote">
                    Get Free Quote
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:604-616-6066">
                  <Button size="lg" variant="outline" className="text-lg font-bold px-8 py-7 border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm" data-testid="button-hero-call">
                    <Phone className="h-5 w-5 mr-2" />
                    604-616-6066
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-white/70">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Full Insurance</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <LocateFixed className="h-5 w-5 text-primary" />
                  <span>GPS Tracking</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Timer className="h-5 w-5 text-primary" />
                  <span>On-Time Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Long Distance Moving Services - SEO Friendly */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <Badge className="bg-primary/10 text-primary mb-4">Professional Long Distance Movers</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                  How Our Long Distance Moving Services Work
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    <strong>Long distance moving</strong> is fundamentally different from local relocations. When you're moving across provinces—whether from <strong>Vancouver to Calgary</strong>, <strong>Vancouver to Toronto</strong>, or anywhere across Canada—you need a moving company with the expertise, equipment, and logistics network to ensure your belongings arrive safely and on time.
                  </p>
                  <p>
                    At Prestige Moving Vancouver, we specialize in <strong>cross-Canada relocations</strong> with a proven track record of over 3,000 successful long distance moves. Our dedicated long-haul fleet features climate-controlled trucks equipped with GPS tracking, so you always know exactly where your belongings are during transit.
                  </p>
                  <p>
                    What sets our <strong>long distance moving service</strong> apart is our commitment to accountability. Unlike other movers who hand off your shipment multiple times between warehouses, we use a <strong>direct delivery model</strong>—the same truck and crew that loads your belongings in Vancouver delivers them to your new home. This minimizes handling, reduces the risk of damage, and ensures faster delivery times.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: TruckIcon, title: "Direct Delivery, No Transfers", desc: "Your belongings travel on the same truck from pickup to delivery—no warehousing or transfers" },
                  { icon: LocateFixed, title: "Real-Time GPS Tracking", desc: "Track your shipment 24/7 with live location updates and estimated arrival times" },
                  { icon: Shield, title: "Full Transit Insurance", desc: "Comprehensive coverage up to $100,000 protects every item throughout the journey" },
                  { icon: Timer, title: "Guaranteed Delivery Windows", desc: "We commit to specific delivery dates with on-time guarantees backed by our reputation" },
                  { icon: Package, title: "Climate-Controlled Transport", desc: "Temperature-regulated trucks protect sensitive items from extreme weather" },
                  { icon: Users, title: "Dedicated Moving Coordinator", desc: "Single point of contact manages your move from start to finish" }
                ].map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={index} className="flex gap-4 p-4 bg-white rounded-xl border hover:border-primary/50 transition-colors">
                      <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <ItemIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Detailed Long Distance Service Explanation */}
            <div className="bg-[#1A2332] rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Provincial & Cross-Country Moves</h3>
                  <p className="text-white/70 mb-4">
                    Whether you're relocating within British Columbia or moving across the country, our long distance moving services are designed for reliability and peace of mind:
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-white">Vancouver to Alberta moves</strong> — Calgary and Edmonton relocations via the Trans-Canada Highway</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-white">BC Interior moves</strong> — Kelowna, Kamloops, Prince George, and throughout British Columbia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-white">Coast-to-coast relocations</strong> — Toronto, Montreal, Halifax, and all major Canadian cities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-white">Corporate relocations</strong> — Employee transfers with full relocation management</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Long Distance Process</h3>
                  <p className="text-white/70 mb-4">
                    Every long distance move follows our proven 5-step process for maximum efficiency:
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-white">Pre-move consultation</strong> — Virtual or in-person survey to create accurate inventory and quote</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-white">Professional packing</strong> — Optional full-service packing with specialty materials for long haul</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-white">Secure loading</strong> — Strategic loading with padding, strapping, and weight distribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-white">Tracked transport</strong> — GPS-monitored transit with daily checkpoint updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Tracking Visualization */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-blue-500/10 text-blue-600 mb-4">
                <LocateFixed className="h-4 w-4 mr-2" />
                Real-Time Tracking
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                Track Your Move Live
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Know exactly where your belongings are at every step
              </p>
            </div>

            {/* Tracking Timeline */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200 hidden md:block" />
                <div 
                  className="absolute top-8 left-0 h-1 bg-primary hidden md:block transition-all duration-500"
                  style={{ width: `${(trackingStep / (trackingSteps.length - 1)) * 100}%` }}
                />

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0">
                  {trackingSteps.map((step, index) => {
                    const StepIcon = step.icon;
                    const isActive = index <= trackingStep;
                    const isCurrent = index === trackingStep;
                    
                    return (
                      <div key={index} className="relative text-center">
                        <div className={`relative z-10 mx-auto w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive 
                            ? isCurrent 
                              ? 'bg-primary shadow-lg shadow-primary/40 scale-110' 
                              : 'bg-primary'
                            : 'bg-gray-200'
                        }`}>
                          <StepIcon className={`h-7 w-7 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                          {isCurrent && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping" />
                          )}
                        </div>
                        <p className={`mt-4 font-semibold text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {step.status}
                        </p>
                        <p className="text-muted-foreground text-xs mt-1">{step.time}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tracking Features */}
              <div className="mt-16 grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="h-14 w-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <LocateFixed className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">GPS Location</h3>
                  <p className="text-muted-foreground text-sm">See your truck's exact location on a live map 24/7</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="h-14 w-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="font-bold mb-2">SMS Updates</h3>
                  <p className="text-muted-foreground text-sm">Automatic text alerts at every checkpoint</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="h-14 w-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Timer className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="font-bold mb-2">ETA Updates</h3>
                  <p className="text-muted-foreground text-sm">Real-time arrival estimates updated hourly</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Bento Grid */}
        <section className="py-20 md:py-28 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Why Us</Badge>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                The Long Distance Advantage
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Large Feature Card */}
              <div className="md:col-span-2 md:row-span-2 relative group bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur border border-primary/30 rounded-3xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10">
                  <div className="h-20 w-20 bg-gradient-to-br from-primary to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">Full Transit Insurance</h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    Every item is protected from pickup to delivery. Our comprehensive insurance covers damage, loss, and delays - giving you complete peace of mind for your cross-country move.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-white/10 text-white border-white/20">$100K Coverage</Badge>
                    <Badge className="bg-white/10 text-white border-white/20">All-Risk Protection</Badge>
                    <Badge className="bg-white/10 text-white border-white/20">No Deductible</Badge>
                  </div>
                </div>
              </div>

              {benefits.slice(1, 6).map((benefit, index) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div key={index} className="group bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                    <div className="h-14 w-14 bg-gradient-to-br from-primary/20 to-amber-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <BenefitIcon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-white/60">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Distance Chart Infographic */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary mb-4">Coverage</Badge>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                Canada-Wide Service
              </h2>
              <p className="text-xl text-muted-foreground">
                Distance comparison from Vancouver
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {destinations.map((dest, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="font-bold">{dest.city}</span>
                          <span className="text-muted-foreground ml-2">{dest.province}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-primary">{dest.distance.toLocaleString()} km</span>
                          <span className="text-muted-foreground ml-2 text-sm">{dest.time}</span>
                        </div>
                      </div>
                      <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-primary to-amber-500 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min((dest.distance / 6000) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "3,000+", label: "Long Distance Moves" },
                { value: "6,000 km", label: "Max Distance Covered" },
                { value: "100%", label: "Delivery Success" },
                { value: "5.0★", label: "Customer Rating" }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-3xl md:text-5xl font-black text-primary group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-white/60 font-medium mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section with Internal Links */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                Canada's Trusted Long Distance Moving Company
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                <p>
                  Planning a move from Vancouver to Calgary, Toronto, or anywhere across Canada? Prestige Moving Vancouver is your trusted partner for <strong>long distance and cross-country relocations</strong>. With over 15 years of experience moving families and businesses across provincial borders, we've perfected the art of safe, timely, and stress-free interstate moving.
                </p>
                <p>
                  What makes us different from other long distance movers? Our <strong>real-time GPS tracking</strong> lets you follow your belongings every step of the way. Combined with dedicated moving coordinators, comprehensive transit insurance, and guaranteed delivery dates, we take the uncertainty out of long-haul moves. Whether you're relocating for work, family, or a fresh start, we treat your belongings with the care they deserve.
                </p>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Complete Moving Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Complement your long distance move with our full range of services:
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/services/residential-moving">
                  <div className="p-4 bg-white rounded-xl border hover:border-primary hover:shadow-md transition-all group">
                    <Home className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Residential Moving</h4>
                    <p className="text-sm text-muted-foreground">Local Vancouver home moving</p>
                  </div>
                </Link>
                <Link href="/services/commercial-moving">
                  <div className="p-4 bg-white rounded-xl border hover:border-primary hover:shadow-md transition-all group">
                    <Building2 className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Commercial Moving</h4>
                    <p className="text-sm text-muted-foreground">Office and business relocations</p>
                  </div>
                </Link>
                <Link href="/services/packing-services">
                  <div className="p-4 bg-white rounded-xl border hover:border-primary hover:shadow-md transition-all group">
                    <Package className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Packing Services</h4>
                    <p className="text-sm text-muted-foreground">Professional packing for long haul</p>
                  </div>
                </Link>
                <Link href="/services/storage-solutions">
                  <div className="p-4 bg-white rounded-xl border hover:border-primary hover:shadow-md transition-all group">
                    <Warehouse className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Storage Solutions</h4>
                    <p className="text-sm text-muted-foreground">Short and long-term storage</p>
                  </div>
                </Link>
                <Link href="/services/specialty-item-moving">
                  <div className="p-4 bg-white rounded-xl border hover:border-primary hover:shadow-md transition-all group">
                    <Box className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Specialty Items</h4>
                    <p className="text-sm text-muted-foreground">Pianos, antiques, fragile items</p>
                  </div>
                </Link>
                <Link href="/services/moving-supplies">
                  <div className="p-4 bg-white rounded-xl border hover:border-primary hover:shadow-md transition-all group">
                    <Package className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Moving Supplies</h4>
                    <p className="text-sm text-muted-foreground">Boxes and packing materials</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Strong CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-primary via-amber-500 to-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#1A2332]/20 backdrop-blur rounded-full px-4 py-2 mb-6">
              <Globe className="h-4 w-4 text-[#1A2332]" />
              <span className="text-[#1A2332] font-semibold text-sm">Coast to Coast</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A2332] mb-6">
              Ready for Your Big Move?
            </h2>
            
            <p className="text-xl text-[#1A2332]/80 mb-8 max-w-2xl mx-auto">
              Join thousands of families who trusted us with their cross-country moves. Get your free quote today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-[#1A2332] hover:bg-[#1A2332]/90 text-white text-lg font-bold px-10 py-7 shadow-xl" data-testid="button-cta-quote">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:604-616-6066">
                <Button size="lg" variant="outline" className="border-2 border-[#1A2332] text-[#1A2332] hover:bg-[#1A2332] hover:text-white text-lg font-bold px-10 py-7" data-testid="button-cta-call">
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
