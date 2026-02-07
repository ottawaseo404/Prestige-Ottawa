import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Phone, CheckCircle2, Building2, TruckIcon, Package, Shield, Clock, Briefcase,
  Users, Award, MapPin, ArrowRight, Star, Sparkles, Calendar, Home, Box,
  Monitor, Server, Warehouse, Store, Stethoscope, UtensilsCrossed, Factory,
  Dumbbell, Target, FileCheck, ClipboardList, ChevronLeft, ChevronRight,
  Zap, Timer, DollarSign, TrendingUp, BarChart3, PieChart, AlertTriangle,
  CheckCircle, XCircle, ArrowDown, Lightbulb, Layers, Settings
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { useHeroVideo, getDefaultVideoForPage } from "@/hooks/use-hero-video";
import { WorkSafeBadge } from "@/components/worksafe-badge";
import commercialImage from "@assets/commercial_truck_night.png";

export default function CommercialMoving() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [downtimeHours, setDowntimeHours] = useState(8);
  const [employeeCount, setEmployeeCount] = useState(25);
  const [activeStep, setActiveStep] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({ moves: 0, hours: 0, satisfaction: 0 });

  // Fetch dynamic hero video from admin settings
  const { videoUrls } = useHeroVideo("commercial-moving");
  const heroVideo = videoUrls.length > 0 ? videoUrls[0] : getDefaultVideoForPage("commercial-moving")[0];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Moving Services Ottawa",
    "provider": {
      "@type": "MovingCompany",
      "name": "Prestige Moving Ottawa",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "50 Colonnade Rd Unit 200B",
        "addressLocality": "Ottawa",
        "addressRegion": "ON",
        "postalCode": "K2E 7J6",
        "addressCountry": "CA"
      },
      "telephone": "(613) 600-4000",
      "priceRange": "$$"
    },
    "description": "Professional commercial and office moving services in Ottawa. WSIB certified, minimize downtime with experienced business movers."
  };

  const industries = [
    {
      icon: Building2,
      title: "Corporate Offices",
      description: "Complete office relocations from startups to Fortune 500",
      stats: { moves: "500+", avgTime: "1 weekend", satisfaction: "99%" },
      color: "from-blue-500 to-blue-600",
      features: ["Workstation setup", "After-hours moves", "IT coordination", "Floor planning"]
    },
    {
      icon: Server,
      title: "Tech & IT",
      description: "Server rooms, data centers, and tech equipment",
      stats: { moves: "200+", avgTime: "24 hours", satisfaction: "100%" },
      color: "from-purple-500 to-purple-600",
      features: ["Server migration", "Cable management", "ESD protection", "Network setup"]
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Medical offices, clinics, and dental practices",
      stats: { moves: "150+", avgTime: "1 day", satisfaction: "100%" },
      color: "from-emerald-500 to-emerald-600",
      features: ["HIPAA compliant", "Medical equipment", "Sanitization", "Exam room setup"]
    },
    {
      icon: Store,
      title: "Retail",
      description: "Stores, boutiques, and showrooms",
      stats: { moves: "300+", avgTime: "Overnight", satisfaction: "98%" },
      color: "from-amber-500 to-amber-600",
      features: ["Display cases", "Inventory handling", "Fixture install", "Quick turnaround"]
    },
    {
      icon: Warehouse,
      title: "Industrial",
      description: "Warehouses, factories, and manufacturing",
      stats: { moves: "100+", avgTime: "3-5 days", satisfaction: "99%" },
      color: "from-slate-500 to-slate-600",
      features: ["Heavy machinery", "Racking systems", "Forklifts", "Logistics planning"]
    },
    {
      icon: UtensilsCrossed,
      title: "Hospitality",
      description: "Restaurants, hotels, and event venues",
      stats: { moves: "180+", avgTime: "2 days", satisfaction: "98%" },
      color: "from-rose-500 to-rose-600",
      features: ["Kitchen equipment", "Refrigeration", "Bar setup", "Dining furniture"]
    }
  ];

  const processSteps = [
    { step: 1, title: "Discovery Call", description: "Free consultation to understand your business needs and timeline", icon: Phone, duration: "30 min" },
    { step: 2, title: "Site Survey", description: "On-site assessment to create detailed inventory and plan", icon: ClipboardList, duration: "1-2 hours" },
    { step: 3, title: "Custom Proposal", description: "Detailed quote with timeline, logistics, and pricing", icon: FileCheck, duration: "24 hours" },
    { step: 4, title: "Pre-Move Prep", description: "Labeling, packing, and coordination with your team", icon: Package, duration: "1-3 days" },
    { step: 5, title: "Execute Move", description: "Professional team executes move with minimal disruption", icon: TruckIcon, duration: "Varies" },
    { step: 6, title: "Setup & Support", description: "Furniture placement, unpacking, and post-move support", icon: Settings, duration: "Same day" }
  ];

  const downtimeCost = downtimeHours * employeeCount * 50;
  const savingsWithUs = Math.round(downtimeCost * 0.7);

  const comparisonData = [
    { metric: "Planning Time", us: "2-3 days", others: "1-2 weeks", usValue: 85, othersValue: 30 },
    { metric: "Downtime", us: "4-8 hours", others: "2-3 days", usValue: 90, othersValue: 25 },
    { metric: "Setup Speed", us: "Same day", others: "2-3 days", usValue: 95, othersValue: 35 },
    { metric: "Communication", us: "Dedicated PM", others: "Call center", usValue: 100, othersValue: 40 },
  ];

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setAnimatedStats({
        moves: Math.round(1500 * progress),
        hours: Math.round(50000 * progress),
        satisfaction: Math.round(99 * progress)
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [processSteps.length]);

  return (
    <>
      <Helmet>
        <title>Commercial Moving Services Ottawa ON | Office & Business Movers | Prestige Moving</title>
        <meta name="description" content="Ottawa's trusted commercial moving company. Office relocations, IT equipment, retail stores, warehouses. Minimize downtime with experienced business movers. Free consultation!" />
        <meta name="keywords" content="commercial moving Ottawa, office movers ON, business relocation, IT equipment moving, corporate moving service, warehouse movers" />
        <meta property="og:title" content="Commercial Moving Services Ottawa | Prestige Moving" />
        <meta property="og:description" content="Ottawa's trusted commercial movers. Office relocations, IT equipment, business moves. Minimal downtime, fully insured." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://prestigemoving.ca/services/commercial-moving" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        {/* Immersive Hero */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <video 
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332] via-[#1A2332]/90 to-[#1A2332]/50" />

          {/* Floating Stats Panel */}
          <div className="absolute right-8 top-1/4 hidden xl:block z-20">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 space-y-4">
              <div className="text-center">
                <div className="text-4xl font-black text-primary">{animatedStats.moves.toLocaleString()}+</div>
                <div className="text-white/60 text-sm">Business Moves</div>
              </div>
              <div className="h-px bg-white/20" />
              <div className="text-center">
                <div className="text-4xl font-black text-primary">{(animatedStats.hours / 1000).toFixed(0)}K+</div>
                <div className="text-white/60 text-sm">Hours Saved</div>
              </div>
              <div className="h-px bg-white/20" />
              <div className="text-center">
                <div className="text-4xl font-black text-primary">{animatedStats.satisfaction}%</div>
                <div className="text-white/60 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-primary/20 text-primary border-primary/40 px-4 py-1.5">
                  <Building2 className="h-4 w-4 mr-2" />
                  Commercial Moving
                </Badge>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/40">
                  <Zap className="h-3 w-3 mr-1" />
                  Zero Downtime
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Business Moves<br />
                <span className="text-primary">Made Simple</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                From tech startups to corporate headquarters, we've relocated <span className="text-primary font-semibold">1,500+ businesses</span> across Ottawa with minimal disruption and maximum efficiency.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/book">
                  <Button size="lg" className="text-lg font-bold px-8 py-7 shadow-xl shadow-primary/30 group" data-testid="button-hero-consultation">
                    Free Consultation
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:613-600-4000">
                  <Button size="lg" variant="outline" className="text-lg font-bold px-8 py-7 border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm" data-testid="button-hero-call">
                    <Phone className="h-5 w-5 mr-2" />
                    (613) 600-4000
                  </Button>
                </a>
              </div>

              {/* Trust Row */}
              <div className="flex flex-wrap gap-6">
                <WorkSafeBadge size="md" />
                <div className="flex items-center gap-2 text-white/70">
                  <Award className="h-5 w-5 text-primary" />
                  <span>BBB A+ Rated</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Weekend Moves</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Commercial Moving" serviceName="Commercial Moving" />

        {/* Comprehensive Commercial Services Explanation - SEO Friendly */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <Badge className="bg-primary/10 text-primary mb-4">Complete Business Solutions</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                  How Our Commercial Moving Services Work
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    <strong>Commercial moving in Ottawa</strong> requires a completely different approach than residential relocations. At Prestige Moving, we've developed specialized systems and protocols specifically for business environments, ensuring your operations experience minimal disruption during the transition.
                  </p>
                  <p>
                    Our commercial moving process begins with a comprehensive <strong>pre-move consultation</strong> where we assess your current space, inventory all equipment and furniture, and create a detailed floor plan for your new location. This planning phase is critical—it allows us to identify potential challenges, coordinate with building management at both locations, and establish a realistic timeline that aligns with your business needs.
                  </p>
                  <p>
                    Unlike standard moving companies, we assign a <strong>dedicated project manager</strong> to oversee your entire relocation. This single point of contact coordinates all aspects of your move, from scheduling elevator access and loading dock reservations to ensuring IT equipment is properly disconnected, transported, and reconnected in the correct order.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: ClipboardList, title: "Pre-Move Planning", desc: "Detailed inventory, floor planning, and timeline development customized to your business" },
                  { icon: Users, title: "Dedicated Project Manager", desc: "Single point of contact from consultation through final setup and walkthrough" },
                  { icon: Clock, title: "After-Hours & Weekend Moves", desc: "Zero-disruption moves scheduled outside business hours to maintain productivity" },
                  { icon: Server, title: "IT & Equipment Handling", desc: "Specialized protocols for servers, workstations, and sensitive electronics" },
                  { icon: Shield, title: "WSIB Certified", desc: "Full insurance and WSIB certification protecting all equipment and personnel" },
                  { icon: Settings, title: "Complete Setup Services", desc: "Furniture placement, workstation configuration, and post-move support" }
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

            {/* Detailed Service Explanation */}
            <div className="bg-[#1A2332] rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Office & Corporate Relocations</h3>
                  <p className="text-white/70 mb-4">
                    Whether you're moving a small office or an entire corporate headquarters, our team has the expertise to handle it all. We specialize in:
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-white">Workstation disassembly and reassembly</strong> — cubicles, desks, and modular furniture properly deconstructed and rebuilt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-white">Executive office moves</strong> — white-glove handling of high-value furniture and artwork</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-white">Conference room setup</strong> — AV equipment, presentation systems, and furniture arrangement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-white">File and document handling</strong> — secure transport of sensitive materials and records</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">IT & Technology Moving</h3>
                  <p className="text-white/70 mb-4">
                    Technology infrastructure requires specialized handling. Our IT moving services include:
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-white">Server room relocations</strong> — climate-controlled transport with ESD protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-white">Network infrastructure</strong> — coordination with your IT team for proper disconnection and reconnection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-white">Workstation setup</strong> — monitors, computers, and peripherals reconnected and tested</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-white">Cable management</strong> — organized cabling for clean, professional installations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Breakdown - Interactive */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary mb-4">Industry Expertise</Badge>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                We Move Every Industry
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Specialized experience across all commercial sectors
              </p>
            </div>

            {/* Industry Selector */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {industries.map((industry, index) => {
                const IndustryIcon = industry.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndustry(index)}
                    className={`group flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
                      activeIndustry === index
                        ? 'bg-primary text-[#1A2332] shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    data-testid={`industry-${industry.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <IndustryIcon className="h-5 w-5" />
                    {industry.title}
                  </button>
                );
              })}
            </div>

            {/* Active Industry Detail */}
            {(() => {
              const ActiveIcon = industries[activeIndustry].icon;
              return (
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <div className={`bg-gradient-to-br ${industries[activeIndustry].color} rounded-3xl p-8 md:p-12`}>
                      <ActiveIcon className="h-20 w-20 text-white/30 absolute top-8 right-8" />
                      <h3 className="text-3xl font-black text-white mb-4">
                        {industries[activeIndustry].title}
                      </h3>
                      <p className="text-xl text-white/80 mb-8">
                        {industries[activeIndustry].description}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-center">
                          <p className="text-2xl font-black text-white">{industries[activeIndustry].stats.moves}</p>
                          <p className="text-white/70 text-sm">Moves</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-center">
                          <p className="text-2xl font-black text-white">{industries[activeIndustry].stats.avgTime}</p>
                          <p className="text-white/70 text-sm">Avg Time</p>
                        </div>
                        <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-center">
                          <p className="text-2xl font-black text-white">{industries[activeIndustry].stats.satisfaction}</p>
                          <p className="text-white/70 text-sm">Satisfaction</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Specialized Capabilities
                    </h4>
                    <div className="space-y-4">
                      {industries[activeIndustry].features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                        >
                          <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-medium text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/book" className="block mt-8">
                      <Button size="lg" className="font-bold w-full sm:w-auto" data-testid="button-industry-quote">
                        Get {industries[activeIndustry].title} Quote
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* Comparison Infographic */}
        <section className="py-20 md:py-28 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Why Choose Us</Badge>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                See The Difference
              </h2>
              <p className="text-xl text-white/60">
                How we compare to typical commercial movers
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                <div className="text-white/60 font-medium">Metric</div>
                <div className="text-primary font-bold">Prestige Moving</div>
                <div className="text-white/40 font-medium">Others</div>
              </div>

              <div className="space-y-6">
                {comparisonData.map((item, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
                    <div className="grid grid-cols-3 gap-4 items-center mb-4">
                      <div className="text-white font-semibold">{item.metric}</div>
                      <div className="text-center">
                        <span className="text-primary font-bold text-lg">{item.us}</span>
                      </div>
                      <div className="text-center">
                        <span className="text-white/50 font-medium">{item.others}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div />
                      <div>
                        <Progress value={item.usValue} className="h-3 bg-white/10" />
                      </div>
                      <div>
                        <Progress value={item.othersValue} className="h-3 bg-white/10" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Process Timeline */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary mb-4">Our Process</Badge>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                6-Step Commercial Move Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven methodology for seamless business relocations
              </p>
            </div>

            {/* Timeline Navigation */}
            <div className="relative max-w-4xl mx-auto mb-12">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 rounded-full" />
              <div 
                className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 rounded-full transition-all duration-500"
                style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
              />
              
              <div className="relative flex justify-between">
                {processSteps.map((step, index) => {
                  const StepIcon = step.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        index <= activeStep
                          ? 'bg-primary text-white shadow-lg shadow-primary/30'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      <StepIcon className="h-6 w-6" />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap">
                        Step {step.step}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Step Detail */}
            <div className="max-w-2xl mx-auto text-center mt-16">
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                {(() => {
                  const ActiveStepIcon = processSteps[activeStep].icon;
                  return (
                    <>
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
                        <ActiveStepIcon className="h-10 w-10 text-primary" />
                      </div>
                      <Badge className="bg-primary/10 text-primary mb-4">{processSteps[activeStep].duration}</Badge>
                      <h3 className="text-2xl font-bold mb-4">{processSteps[activeStep].title}</h3>
                      <p className="text-muted-foreground text-lg">{processSteps[activeStep].description}</p>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 md:py-28 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Trusted By</Badge>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Ottawa's Business Community Trusts Us
                </h2>
                <p className="text-xl text-white/70 mb-8">
                  From tech startups in Gastown to corporate offices downtown, businesses across the National Capital Region rely on us for their commercial relocations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "1,500+", label: "Businesses Moved" },
                    { value: "99%", label: "On-Time Rate" },
                    { value: "15+", label: "Years Experience" },
                    { value: "$0", label: "Hidden Fees" }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center">
                      <div className="text-2xl font-black text-primary">{stat.value}</div>
                      <div className="text-white/60 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src={commercialImage}
                  alt="Commercial moving truck"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#1A2332] text-[#1A2332]" />
                      ))}
                    </div>
                    <div>
                      <p className="text-[#1A2332] font-bold">5.0 Rating</p>
                      <p className="text-[#1A2332]/70 text-sm">Google Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Downtime Cost Calculator */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#1A2332] to-[#2a3a52]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-red-500/20 text-red-400 border-red-500/40 mb-4">
                <AlertTriangle className="h-4 w-4 mr-2" />
                The Hidden Cost
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                What Does Downtime Really Cost?
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Calculate the true cost of office downtime during your move
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  Downtime Calculator
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <label className="block text-white/80 mb-3 font-medium">
                      Expected Downtime Hours: <span className="text-primary font-bold">{downtimeHours} hours</span>
                    </label>
                    <input
                      type="range"
                      min="4"
                      max="72"
                      value={downtimeHours}
                      onChange={(e) => setDowntimeHours(Number(e.target.value))}
                      className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-white/40 text-sm mt-1">
                      <span>4 hrs</span>
                      <span>72 hrs</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/80 mb-3 font-medium">
                      Number of Employees: <span className="text-primary font-bold">{employeeCount}</span>
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="200"
                      value={employeeCount}
                      onChange={(e) => setEmployeeCount(Number(e.target.value))}
                      className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-white/40 text-sm mt-1">
                      <span>5</span>
                      <span>200+</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                        <XCircle className="h-6 w-6 text-red-400" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Traditional Moving Cost</p>
                        <p className="text-white font-bold">Productivity Loss</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-black text-red-400">${downtimeCost.toLocaleString()}</p>
                      <p className="text-white/40 text-sm">estimated loss</p>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm">
                    Based on {downtimeHours} hours × {employeeCount} employees × $50/hr avg productivity
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">With Prestige Moving</p>
                        <p className="text-white font-bold">You Save</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-black text-green-400">${savingsWithUs.toLocaleString()}</p>
                      <p className="text-white/40 text-sm">in productivity</p>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm">
                    70% less downtime with our efficient weekend/after-hours moving
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Pricing Packages */}
        <section className="py-20 bg-gray-50" data-testid="commercial-pricing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary via-primary to-primary/90 text-[#1A2332] px-6 py-2.5 rounded-full mb-6 shadow-lg shadow-primary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                <DollarSign className="h-5 w-5 relative z-10" />
                <span className="font-bold text-sm relative z-10">Commercial Rates</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-[#1A2332] via-[#2a3a4d] to-[#1A2332] bg-clip-text text-transparent">Commercial</span>{" "}
                <span className="bg-gradient-to-r from-primary via-yellow-500 to-primary bg-clip-text text-transparent">Packages</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Tailored for <strong className="text-[#1A2332]">business relocations</strong>. All packages include professional movers, commercial trucks, and <strong className="text-primary">full protection</strong> for your office equipment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Premium Package */}
              <div className="relative bg-white rounded-3xl border-2 border-gray-200 p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300" data-testid="commercial-pricing-premium">
                <div className="absolute -top-4 left-6">
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">01</span>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-[#1A2332] mb-2">PREMIUM PACKAGE</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-black text-primary">$165</span>
                    <span className="text-gray-600">/hr</span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Minimum 3 hours + $165 travel fee</p>
                </div>
                
                <div className="mb-6 p-3 bg-primary/10 rounded-xl">
                  <p className="text-sm font-semibold text-[#1A2332]">
                    <Building2 className="h-4 w-4 inline mr-2 text-primary" />
                    Ideal for: Small offices, startups, single-suite moves
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-bold text-[#1A2332] mb-3 flex items-center gap-2">
                    <Package className="h-4 w-4 text-primary" />
                    Includes:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">—</span>
                      2 Professional Movers
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">—</span>
                      16ft – 20ft Moving Truck
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">—</span>
                      Wrapping all furniture with tape and blankets
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">—</span>
                      Shrink-wrapping couches for protection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">—</span>
                      Covering mattresses with brand-new plastic bags
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">—</span>
                      Protective padding for floors and stair railings
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">—</span>
                      Disassembly and reassembly of basic furniture
                    </li>
                  </ul>
                </div>

                <p className="text-xs text-gray-500 mb-6 p-3 bg-gray-50 rounded-lg">
                  Need extra help? Add an additional mover for $50/hr and an extra $50 travel fee.
                </p>

                <Link href="/book">
                  <Button variant="outline" className="w-full font-bold" data-testid="button-book-commercial-premium">
                    BOOK YOUR MOVE
                  </Button>
                </Link>
              </div>

              {/* Deluxe Package - Featured */}
              <div className="relative bg-[#1A2332] rounded-3xl p-8 shadow-2xl transform md:-translate-y-4" data-testid="commercial-pricing-deluxe">
                <div className="absolute -top-4 left-6">
                  <span className="bg-primary text-[#1A2332] text-xs font-bold px-3 py-1 rounded-full">02</span>
                </div>
                <div className="absolute -top-4 right-6">
                  <span className="bg-primary text-[#1A2332] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    POPULAR
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-white mb-2">DELUXE PACKAGE</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-black text-primary">$205</span>
                    <span className="text-white/70">/hr</span>
                  </div>
                  <p className="text-sm text-white/60 font-medium">Minimum 3 hours + $205 travel fee</p>
                </div>
                
                <div className="mb-6 p-3 bg-primary/20 rounded-xl">
                  <p className="text-sm font-semibold text-white">
                    <Building2 className="h-4 w-4 inline mr-2 text-primary" />
                    Ideal for: Mid-size offices, multi-room relocations
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                    <Package className="h-4 w-4 text-primary" />
                    Includes:
                  </p>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">—</span>
                      3 Professional Movers
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">—</span>
                      26ft Moving Truck
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">—</span>
                      Wrapping all furniture with tape and blankets
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">—</span>
                      Shrink-wrapping couches for added protection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">—</span>
                      Covering mattresses with brand-new plastic bags
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">—</span>
                      Protective padding for floors and stair railings
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">—</span>
                      Disassembly and reassembly of basic furniture
                    </li>
                  </ul>
                </div>

                <p className="text-xs text-white/60 mb-6 p-3 bg-white/10 rounded-lg">
                  The Deluxe Package is designed for medium-sized office moves, ensuring every piece of furniture and equipment is carefully handled.
                </p>

                <Link href="/book">
                  <Button className="w-full font-bold shadow-lg shadow-primary/30" data-testid="button-book-commercial-deluxe">
                    BOOK YOUR MOVE
                  </Button>
                </Link>
              </div>

              {/* Diamond Package */}
              <div className="relative bg-white rounded-3xl border-2 border-gray-200 p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300" data-testid="commercial-pricing-diamond">
                <div className="absolute -top-4 left-6">
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">03</span>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-[#1A2332] mb-2">DIAMOND PACKAGE</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-black text-primary">$325</span>
                    <span className="text-gray-600">/hr</span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Minimum 3 hours + $325 travel fee</p>
                </div>
                
                <div className="mb-6 p-3 bg-primary/10 rounded-xl">
                  <p className="text-sm font-semibold text-[#1A2332]">
                    <Building2 className="h-4 w-4 inline mr-2 text-primary" />
                    Ideal for: Large offices, full-floor relocations
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-bold text-[#1A2332] mb-3 flex items-center gap-2">
                    <Package className="h-4 w-4 text-primary" />
                    Includes:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">—</span>
                      4 Professional Movers
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">—</span>
                      2 Moving Trucks
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">—</span>
                      Wrapping all furniture with tape and blankets
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">—</span>
                      Shrink-wrapping couches for extra protection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">—</span>
                      Covering mattresses with brand-new plastic bags
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">—</span>
                      Protective padding for floors and stair railings
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400">—</span>
                      Disassembly and reassembly of basic furniture
                    </li>
                  </ul>
                </div>

                <p className="text-xs text-gray-500 mb-6 p-3 bg-gray-50 rounded-lg">
                  Our most comprehensive package for large-scale commercial relocations requiring maximum manpower and truck capacity.
                </p>

                <Link href="/book">
                  <Button variant="outline" className="w-full font-bold" data-testid="button-book-commercial-diamond">
                    BOOK YOUR MOVE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve & Related Services */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Industries We Serve - SEO Text */}
            <div className="max-w-4xl mx-auto mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Industries We Serve Across Greater Ottawa
              </h3>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Our commercial moving expertise extends across virtually every industry in the Ottawa metro area. We've successfully relocated <strong>law firms in downtown Ottawa</strong>, requiring careful handling of confidential client files and legal libraries. <strong>Medical and dental practices</strong> throughout Kanata and Orleans trust us with their specialized equipment, from X-ray machines to examination chairs.
                </p>
                <p>
                  <strong>Tech companies and startups</strong> in Mount Pleasant and Gastown rely on our IT moving protocols to ensure their servers, development equipment, and workstations are transported safely and reconnected quickly. <strong>Retail businesses</strong> across the Lower Mainland appreciate our ability to move display fixtures, inventory, and point-of-sale systems with minimal store closure time.
                </p>
                <p>
                  We also specialize in <strong>industrial and warehouse relocations</strong> throughout Surrey, Delta, and the Fraser Valley. Our team has the heavy equipment and expertise to move racking systems, machinery, and bulk inventory efficiently. From small boutiques in Kitsilano to corporate offices in Coal Harbour, Prestige Moving delivers the same commitment to professionalism and care.
                </p>
              </div>
            </div>

            {/* Related Services Section */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">Explore Our Related Moving Services</h3>
              <p className="text-muted-foreground mb-6">
                We offer comprehensive solutions for all your business moving needs:
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/services/residential-moving">
                  <div className="p-4 bg-white rounded-xl border hover:border-primary hover:shadow-md transition-all group">
                    <Home className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Residential Moving</h4>
                    <p className="text-sm text-muted-foreground">Home and apartment moving services</p>
                  </div>
                </Link>
                <Link href="/services/long-distance-moving">
                  <div className="p-4 bg-white rounded-xl border hover:border-primary hover:shadow-md transition-all group">
                    <TruckIcon className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Long Distance Moving</h4>
                    <p className="text-sm text-muted-foreground">Cross-province business relocations</p>
                  </div>
                </Link>
                <Link href="/services/packing-services">
                  <div className="p-4 bg-white rounded-xl border hover:border-primary hover:shadow-md transition-all group">
                    <Package className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Packing Services</h4>
                    <p className="text-sm text-muted-foreground">Professional office packing and unpacking</p>
                  </div>
                </Link>
                <Link href="/services/storage-solutions">
                  <div className="p-4 bg-white rounded-xl border hover:border-primary hover:shadow-md transition-all group">
                    <Warehouse className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Storage Solutions</h4>
                    <p className="text-sm text-muted-foreground">Secure commercial storage facilities</p>
                  </div>
                </Link>
                <Link href="/services/specialty-item-moving">
                  <div className="p-4 bg-white rounded-xl border hover:border-primary hover:shadow-md transition-all group">
                    <Server className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Specialty Items</h4>
                    <p className="text-sm text-muted-foreground">IT equipment and sensitive machinery</p>
                  </div>
                </Link>
                <Link href="/services/moving-supplies">
                  <div className="p-4 bg-white rounded-xl border hover:border-primary hover:shadow-md transition-all group">
                    <Box className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">Moving Supplies</h4>
                    <p className="text-sm text-muted-foreground">Commercial-grade packing materials</p>
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
              <Calendar className="h-4 w-4 text-[#1A2332]" />
              <span className="text-[#1A2332] font-semibold text-sm">Free Consultation</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A2332] mb-6">
              Plan Your Business Move
            </h2>
            
            <p className="text-xl text-[#1A2332]/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your commercial relocation needs. Free site survey and detailed proposal included.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-[#1A2332] hover:bg-[#1A2332]/90 text-white text-lg font-bold px-10 py-7 shadow-xl" data-testid="button-cta-consultation">
                  Schedule Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:613-600-4000">
                <Button size="lg" variant="outline" className="border-2 border-[#1A2332] text-[#1A2332] hover:bg-[#1A2332] hover:text-white text-lg font-bold px-10 py-7" data-testid="button-cta-call">
                  <Phone className="h-5 w-5 mr-2" />
                  (613) 600-4000
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
