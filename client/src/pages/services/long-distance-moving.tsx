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
  LocateFixed, Truck, PackageCheck, Home, ArrowDown, DollarSign
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

        {/* Interactive Route Calculator */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#1A2332] to-[#2a3a52]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                <Compass className="h-4 w-4 mr-2" />
                Route Planner
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Where Are You Moving?
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Select your destination and home size for an instant estimate
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Destination Selector */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Popular Destinations
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {destinations.map((dest, index) => {
                    const DestIcon = dest.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedDestination(index)}
                        className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                          selectedDestination === index
                            ? 'bg-primary/20 border-primary'
                            : 'bg-white/5 border-white/10 hover:border-white/30'
                        }`}
                        data-testid={`destination-${dest.city.toLowerCase()}`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <DestIcon className={`h-5 w-5 ${selectedDestination === index ? 'text-primary' : 'text-white/60'}`} />
                          <span className={`font-bold ${selectedDestination === index ? 'text-primary' : 'text-white'}`}>
                            {dest.city}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-white/50">
                          <span>{dest.distance} km</span>
                          <span>•</span>
                          <span>{dest.time}</span>
                        </div>
                        {selectedDestination === index && (
                          <div className="absolute top-2 right-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quote Calculator */}
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Instant Estimate
                </h3>

                <div className="space-y-8">
                  {/* Move Size */}
                  <div>
                    <label className="block text-white/80 mb-4 font-medium">
                      Home Size: <span className="text-primary font-bold">{moveSizes[moveSize]}</span>
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      {moveSizes.map((size, index) => (
                        <button
                          key={index}
                          onClick={() => setMoveSize(index)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            moveSize === index
                              ? 'bg-primary text-[#1A2332]'
                              : 'bg-white/10 text-white hover:bg-white/20'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Route Visualization */}
                  <div className="bg-white/5 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center">
                        <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Building2 className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-white font-medium">Vancouver</p>
                        <p className="text-white/40 text-sm">BC</p>
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="relative">
                          <div className="h-1 bg-white/10 rounded-full" />
                          <div className="absolute top-0 left-0 h-1 bg-primary rounded-full animate-pulse" style={{ width: '100%' }} />
                          <TruckIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-primary" />
                        </div>
                        <p className="text-center text-white/50 text-sm mt-2">{destinations[selectedDestination].distance} km</p>
                      </div>
                      <div className="text-center">
                        <div className="h-12 w-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Home className="h-6 w-6 text-green-400" />
                        </div>
                        <p className="text-white font-medium">{destinations[selectedDestination].city}</p>
                        <p className="text-white/40 text-sm">{destinations[selectedDestination].province}</p>
                      </div>
                    </div>
                  </div>

                  {/* Price Estimate */}
                  <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 text-center">
                    <p className="text-white/60 text-sm mb-2">Estimated Price</p>
                    <p className="text-5xl font-black text-primary mb-2">
                      ${estimatedPrice.toLocaleString()}
                    </p>
                    <p className="text-white/50 text-sm">
                      {moveSizes[moveSize]} • {destinations[selectedDestination].city}, {destinations[selectedDestination].province}
                    </p>
                    <Link href="/book" className="block mt-6">
                      <Button size="lg" className="font-bold w-full" data-testid="button-get-exact-quote">
                        Get Exact Quote
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
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
