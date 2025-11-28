import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Phone, CheckCircle2, Home, TruckIcon, Package, Shield, Clock, Users, 
  Star, MapPin, ArrowRight, Sparkles, Heart, ThumbsUp, ChevronLeft, 
  ChevronRight, Mail, Calendar, Building2, Sofa, Box, Award, Zap,
  Timer, HandHeart, Play
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import residentialVideo from "@assets/generated_videos/vancouver_residential_movers_with_boxes.mp4";
import residentialImage from "@assets/truck1_1764291781341.jpeg";

export default function ResidentialMoving() {
  const { toast } = useToast();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Moving Services Vancouver",
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
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "500"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Vancouver" },
      { "@type": "City", "name": "Burnaby" },
      { "@type": "City", "name": "Richmond" },
      { "@type": "City", "name": "North Vancouver" },
      { "@type": "City", "name": "West Vancouver" },
      { "@type": "City", "name": "Coquitlam" },
      { "@type": "City", "name": "Surrey" }
    ],
    "description": "Professional residential moving services in Vancouver. Experienced movers for apartments, condos, and houses. WSIB insured with transparent pricing."
  };

  const testimonials = [
    { name: "Sarah M.", location: "Kitsilano", text: "Incredible service! They moved our 3-bedroom house in under 6 hours. Professional, careful, and friendly. The team went above and beyond!", rating: 5, date: "2 weeks ago" },
    { name: "David L.", location: "North Vancouver", text: "Best moving experience ever. The team was punctual, efficient, and took great care of our furniture. Highly recommend!", rating: 5, date: "1 month ago" },
    { name: "Jennifer K.", location: "Burnaby", text: "Moved from a 2BR apartment to our new townhouse. They handled everything perfectly including our grand piano!", rating: 5, date: "3 weeks ago" },
    { name: "Michael R.", location: "Downtown", text: "Fast, professional, and reasonably priced. These guys know what they're doing. Will definitely use again.", rating: 5, date: "1 week ago" },
    { name: "Lisa T.", location: "Richmond", text: "Amazing team! They made our move so stress-free. Everything arrived in perfect condition.", rating: 5, date: "2 months ago" }
  ];

  const serviceTypes = [
    {
      title: "Apartment Moving",
      icon: Building2,
      description: "Expert high-rise and condo moving specialists",
      features: ["Elevator coordination", "Building protection", "Strata compliance", "Parking management"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600"
    },
    {
      title: "House Moving", 
      icon: Home,
      description: "Full-service home relocation for any size",
      features: ["1-5 bedroom homes", "Basement & garage", "Heavy furniture", "Multi-level expertise"],
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600"
    },
    {
      title: "Specialty Items",
      icon: Sparkles,
      description: "Careful handling of valuable possessions",
      features: ["Pianos & organs", "Artwork & antiques", "Pool tables", "Home theaters"],
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600"
    }
  ];

  const processSteps = [
    { step: 1, title: "Request Quote", description: "Fill out our form or call for instant pricing", icon: Mail, color: "from-blue-500 to-blue-600" },
    { step: 2, title: "Choose Package", description: "Select Premium, Deluxe, or Diamond", icon: Package, color: "from-purple-500 to-purple-600" },
    { step: 3, title: "We Move You", description: "Our expert team handles everything", icon: TruckIcon, color: "from-amber-500 to-amber-600" },
    { step: 4, title: "Enjoy Home", description: "Settle in while we place furniture", icon: Heart, color: "from-rose-500 to-rose-600" }
  ];

  const neighborhoods = [
    "Downtown", "Kitsilano", "Yaletown", "Coal Harbour", "West End",
    "Mount Pleasant", "Commercial Drive", "Kerrisdale", "Point Grey", 
    "UBC", "Shaughnessy", "Dunbar", "Marpole", "South Cambie", "Gastown"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <Helmet>
        <title>Residential Moving Services Vancouver BC | Home Movers | Prestige Moving</title>
        <meta name="description" content="Professional residential moving services in Vancouver BC. Experienced movers, WSIB insured, transparent pricing. Apartments, condos, houses. Get your free quote today!" />
        <meta name="keywords" content="residential moving Vancouver, home movers BC, apartment moving, condo moving Vancouver, house moving service, Vancouver movers, Burnaby movers, Richmond moving company" />
        <meta property="og:title" content="Residential Moving Services Vancouver | Prestige Moving" />
        <meta property="og:description" content="Vancouver's trusted residential movers. From studio apartments to 5-bedroom homes. Professional, insured, and affordable." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://vancouver.prestigemoving.ca/services/residential-moving" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        {/* Immersive Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={residentialVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332] via-[#1A2332]/90 to-[#1A2332]/40" />
          
          {/* Floating Stats Cards */}
          <div className="absolute right-10 top-1/4 hidden xl:flex flex-col gap-4 z-20">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 transform hover:scale-105 transition-all duration-300 animate-pulse">
              <div className="text-3xl font-black text-primary">10K+</div>
              <div className="text-white/70 text-sm">Homes Moved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-1 text-3xl font-black text-primary">
                5.0 <Star className="h-5 w-5 fill-primary" />
              </div>
              <div className="text-white/70 text-sm">Google Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black text-primary">15+</div>
              <div className="text-white/70 text-sm">Years Experience</div>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-primary/20 text-primary border-primary/40 px-4 py-1.5">
                  <Home className="h-4 w-4 mr-2" />
                  Residential Moving
                </Badge>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/40">
                  <Zap className="h-3 w-3 mr-1" />
                  Same-Day Quotes
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Vancouver's<br />
                <span className="text-primary relative">
                  #1 Home Movers
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 2 150 2 298 10" stroke="#C5A572" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                From cozy studios to sprawling family homes, we've helped <span className="text-primary font-semibold">10,000+ Vancouver families</span> move with care. WSIB insured, transparent pricing, zero stress.
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

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-white/70">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>WSIB Insured</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Award className="h-5 w-5 text-primary" />
                  <span>BBB A+ Rated</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Timer className="h-5 w-5 text-primary" />
                  <span>On-Time Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Gold Stats Bar */}
        <section className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "10,000+", label: "Homes Moved" },
                { value: "5.0★", label: "Google Rating" },
                { value: "15+", label: "Years Experience" },
                { value: "1 Hour", label: "Quote Response" }
              ].map((stat, index) => (
                <div key={index} className="group cursor-pointer transform transition-all duration-300 hover:scale-110">
                  <div className="text-2xl md:text-4xl font-black text-[#1A2332] group-hover:text-white transition-colors">{stat.value}</div>
                  <div className="text-sm font-bold text-[#1A2332]/80 group-hover:text-white/80 transition-colors uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Service Types */}
        <section className="py-20 md:py-28 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Our Services</Badge>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                What We Move
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Specialized solutions for every type of residential move
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center gap-2 mb-12 flex-wrap">
              {serviceTypes.map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                      activeTab === index 
                        ? 'bg-primary text-[#1A2332] shadow-lg shadow-primary/30' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    data-testid={`tab-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <ServiceIcon className={`h-5 w-5 transition-transform duration-300 ${activeTab === index ? 'scale-110' : 'group-hover:scale-110'}`} />
                    {service.title}
                  </button>
                );
              })}
            </div>

            {/* Active Service Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {(() => {
                const ActiveIcon = serviceTypes[activeTab].icon;
                return (
                  <div className="relative rounded-3xl overflow-hidden h-[400px] group">
                    <img 
                      src={residentialImage}
                      alt={serviceTypes[activeTab].title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332] via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <Badge className="bg-primary text-[#1A2332] font-bold mb-3">
                        <ActiveIcon className="h-4 w-4 mr-1" />
                        {serviceTypes[activeTab].title}
                      </Badge>
                    </div>
                  </div>
                );
              })()}

              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  {serviceTypes[activeTab].title}
                </h3>
                <p className="text-xl text-white/70 mb-8">
                  {serviceTypes[activeTab].description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {serviceTypes[activeTab].features.map((feature, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/book">
                  <Button size="lg" className="font-bold shadow-lg" data-testid="button-service-quote">
                    Get a Quote for {serviceTypes[activeTab].title}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Process Timeline */}
        <section className="py-20 md:py-28 bg-[#1A2332] overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Simple Process</Badge>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                How It Works
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Four simple steps to your stress-free move
              </p>
            </div>

            <div className="relative">
              {/* Animated Connection Line - Desktop */}
              <div className="absolute top-[72px] left-[12.5%] right-[12.5%] h-1 hidden md:block">
                <div className="w-full h-full bg-white/10 rounded-full" />
                <div 
                  className="absolute inset-0 h-full bg-gradient-to-r from-primary via-amber-400 to-primary rounded-full animate-pulse"
                  style={{ opacity: 0.8 }}
                />
              </div>

              <div className="grid md:grid-cols-4 gap-6 md:gap-8 relative">
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Card Container */}
                    <div className={`bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 transition-all duration-500 ${hoveredStep === index ? 'bg-white/10 border-primary/50 transform scale-105 shadow-2xl shadow-primary/20' : 'hover:bg-white/8 hover:border-white/20'}`}>
                      {/* Icon with Glow Effect */}
                      <div className="relative mb-6">
                        <div className={`absolute inset-0 mx-auto w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl blur-xl transition-opacity duration-500 ${hoveredStep === index ? 'opacity-60' : 'opacity-20'}`} />
                        <div className={`relative z-10 mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl transform transition-all duration-500 ${hoveredStep === index ? 'rotate-6 scale-110' : 'group-hover:rotate-3 group-hover:scale-105'}`}>
                          <step.icon className="h-9 w-9 text-white" />
                        </div>
                        {/* Step Number Badge */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-[#1A2332] font-bold text-sm border-2 border-[#1A2332] shadow-lg z-20">
                          {step.step}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Mobile Connector */}
                    {index < processSteps.length - 1 && (
                      <div className="flex justify-center my-4 md:hidden">
                        <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link href="/book">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-[#1A2332] font-bold px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105">
                  Start Your Move Today
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Bento Grid */}
        <section className="py-20 md:py-28 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Why Us</Badge>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                The Prestige Difference
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Large Feature Card */}
              <div className="md:col-span-2 md:row-span-2 relative group bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur border border-primary/30 rounded-3xl p-8 overflow-hidden hover:border-primary/50 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10">
                  <div className="h-20 w-20 bg-gradient-to-br from-primary to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">Fully Insured & Protected</h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    Complete insurance and liability coverage protects you, our team, and your belongings from pickup to delivery. Peace of mind guaranteed.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-white/10 text-white border-white/20">Fully Insured</Badge>
                    <Badge className="bg-white/10 text-white border-white/20">Liability Coverage</Badge>
                    <Badge className="bg-white/10 text-white border-white/20">Bonded Team</Badge>
                  </div>
                </div>
              </div>

              {/* Small Feature Cards */}
              <div className="group bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="h-14 w-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                <p className="text-white/60">Average 5+ years experience per mover. Trained professionals who care.</p>
              </div>

              <div className="group bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="h-14 w-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">On-Time Guarantee</h3>
                <p className="text-white/60">If we're late, your first hour is free. We respect your schedule.</p>
              </div>

              <div className="group bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="h-14 w-14 bg-gradient-to-br from-violet-400 to-violet-600 rounded-xl flex items-center justify-center mb-4">
                  <ThumbsUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Transparent Pricing</h3>
                <p className="text-white/60">No hidden fees, no surprises. What we quote is what you pay.</p>
              </div>

              <div className="md:col-span-2 group bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-6">
                  <div className="h-14 w-14 bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HandHeart className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">White Glove Service</h3>
                    <p className="text-white/60">Furniture placement, reassembly, and cleanup included. We treat your home like our own.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary mb-4">Reviews</Badge>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                What Families Say
              </h2>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span>Based on 500+ Google Reviews</span>
              </div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Main Testimonial */}
              <Card className="border-2 shadow-xl bg-white overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 bg-gradient-to-br from-primary to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[activeTestimonial].name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-lg">{testimonials[activeTestimonial].name}</p>
                        <p className="text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> {testimonials[activeTestimonial].location}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{testimonials[activeTestimonial].date}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTestimonial ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas - Interactive Map Feel */}
        <section className="py-20 md:py-28 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Coverage</Badge>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Vancouver Neighborhoods We Serve
              </h2>
              <p className="text-xl text-white/60">
                Comprehensive coverage across Metro Vancouver
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {neighborhoods.map((hood, index) => (
                <Badge 
                  key={index}
                  className="bg-white/10 text-white border-white/20 hover:bg-primary hover:text-[#1A2332] hover:border-primary transition-all duration-300 cursor-pointer px-4 py-2 text-sm font-medium"
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  {hood}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Strong CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-primary via-amber-500 to-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#1A2332]/20 backdrop-blur rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-[#1A2332]" />
              <span className="text-[#1A2332] font-semibold text-sm">Free No-Obligation Quote</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A2332] mb-6">
              Ready to Move?
            </h2>
            
            <p className="text-xl text-[#1A2332]/80 mb-8 max-w-2xl mx-auto">
              Join 10,000+ Vancouver families who trusted us. Get your personalized quote in under 1 hour.
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
