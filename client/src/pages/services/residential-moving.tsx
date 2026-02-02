import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, CheckCircle2, Home, TruckIcon, Package, Shield, Clock, Users, 
  Star, MapPin, ArrowRight, Sparkles, Heart, ThumbsUp, ChevronLeft, 
  ChevronRight, Mail, Calendar, Building2, Sofa, Box, Award, Zap,
  Timer, HandHeart, Play, Warehouse, Music
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { WorkSafeBadge } from "@/components/worksafe-badge";
import residentialVideo from "@assets/residential_moving_video.mp4";
import residentialImage from "@assets/truck1_1764291781341.jpeg";

export default function ResidentialMoving() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Moving Services Ottawa",
    "provider": {
      "@type": "MovingCompany",
      "name": "Prestige Moving Ottawa",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ottawa",
        "addressRegion": "ON",
        "addressCountry": "CA"
      },
      "telephone": "613-555-1234",
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "500"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Ottawa" },
      { "@type": "City", "name": "Gatineau" },
      { "@type": "City", "name": "Kanata" },
      { "@type": "City", "name": "Orleans" },
      { "@type": "City", "name": "Nepean" },
      { "@type": "City", "name": "Barrhaven" },
      { "@type": "City", "name": "Gloucester" }
    ],
    "description": "Professional residential moving services in Ottawa. Experienced movers for apartments, condos, and houses. WSIB certified with transparent pricing."
  };

  const testimonials = [
    { name: "Sarah M.", location: "Westboro", text: "Incredible service! They moved our 3-bedroom house in under 6 hours. Professional, careful, and friendly. The team went above and beyond!", rating: 5, date: "2 weeks ago" },
    { name: "David L.", location: "Kanata", text: "Best moving experience ever. The team was punctual, efficient, and took great care of our furniture. Highly recommend!", rating: 5, date: "1 month ago" },
    { name: "Jennifer K.", location: "Orleans", text: "Moved from a 2BR apartment to our new townhouse. They handled everything perfectly including our grand piano!", rating: 5, date: "3 weeks ago" },
    { name: "Michael R.", location: "Downtown", text: "Fast, professional, and reasonably priced. These guys know what they're doing. Will definitely use again.", rating: 5, date: "1 week ago" },
    { name: "Lisa T.", location: "Nepean", text: "Amazing team! They made our move so stress-free. Everything arrived in perfect condition.", rating: 5, date: "2 months ago" }
  ];

  const serviceTypes = [
    {
      title: "Apartment Moving",
      icon: Building2,
      description: "Expert high-rise and condo moving specialists",
      features: ["Elevator coordination", "Building protection", "Strata compliance", "Parking management"]
    },
    {
      title: "House Moving", 
      icon: Home,
      description: "Full-service home relocation for any size",
      features: ["1-5 bedroom homes", "Basement & garage", "Heavy furniture", "Multi-level expertise"]
    },
    {
      title: "Specialty Items",
      icon: Sparkles,
      description: "Careful handling of valuable possessions",
      features: ["Pianos & organs", "Artwork & antiques", "Pool tables", "Home theaters"]
    }
  ];

  const processSteps = [
    { step: 1, title: "Request Quote", description: "Fill out our form or call for instant pricing", icon: Mail },
    { step: 2, title: "Choose Package", description: "Select Premium, Deluxe, or Diamond", icon: Package },
    { step: 3, title: "We Move You", description: "Our expert team handles everything", icon: TruckIcon },
    { step: 4, title: "Enjoy Home", description: "Settle in while we place furniture", icon: Heart }
  ];

  const neighborhoods = [
    "Downtown", "Westboro", "The Glebe", "Byward Market", "Sandy Hill",
    "Centretown", "Hintonburg", "Kanata", "Orleans", 
    "Nepean", "Barrhaven", "Alta Vista", "Rockcliffe Park", "New Edinburgh", "Little Italy"
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
        <title>Residential Moving Services Ottawa ON | Home Movers | Prestige Moving</title>
        <meta name="description" content="Professional residential moving services in Ottawa ON. WSIB certified movers, BBB A+ rated, transparent pricing. Apartments, condos, houses. Get your free quote today!" />
        <meta name="keywords" content="residential moving Ottawa, home movers ON, apartment moving, condo moving Ottawa, house moving service, Ottawa movers, Kanata movers, Orleans moving company" />
        <meta property="og:title" content="Residential Moving Services Ottawa | Prestige Moving" />
        <meta property="og:description" content="Ottawa's trusted residential movers. From studio apartments to 5-bedroom homes. Professional, insured, and affordable." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ottawa.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://ottawa.prestigemoving.ca/services/residential-moving" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
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
                Ottawa's<br />
                <span className="text-primary">#1 Home Movers</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                From cozy studios to sprawling family homes, we've helped <span className="text-primary font-semibold">10,000+ Ottawa families</span> move with care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/book">
                  <Button size="lg" className="text-lg font-bold px-8 py-7 shadow-xl shadow-primary/30 group" data-testid="button-hero-quote">
                    Get Free Quote
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:613-555-1234">
                  <Button size="lg" variant="outline" className="text-lg font-bold px-8 py-7 border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm" data-testid="button-hero-call">
                    <Phone className="h-5 w-5 mr-2" />
                    613-555-1234
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-6">
                <WorkSafeBadge size="md" />
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
        </section>

        {/* Stats Bar */}
        <section className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "10,000+", label: "Homes Moved" },
                { value: "5.0★", label: "Google Rating" },
                { value: "15+", label: "Years Experience" },
                { value: "1 Hour", label: "Quote Response" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl md:text-4xl font-black text-[#1A2332]">{stat.value}</div>
                  <div className="text-sm font-bold text-[#1A2332]/80 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content - About Our Service */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-primary/10 text-primary mb-4">About Our Service</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                  Ottawa's Premier Residential Moving Company
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Moving to a new home in Ottawa, Kanata, Orleans, or anywhere in the National Capital Region? <strong>Prestige Moving Ottawa</strong> has been helping families relocate since 2009, earning a reputation as one of the most trusted residential movers in Greater Ottawa.
                  </p>
                  <p>
                    Our experienced team handles everything from studio apartments in Centretown to luxury estates in Rockcliffe Park, ensuring your belongings arrive safely at your new address.
                  </p>
                  <p>
                    As a <strong>WSIB certified moving company</strong>, we prioritize the safety of both our team and your belongings. Our movers are fully covered under WSIB insurance, giving you complete peace of mind.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/book">
                    <Button size="lg" className="font-bold" data-testid="button-about-quote">
                      Get Your Free Quote
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden h-[400px]">
                <img 
                  src={residentialImage}
                  alt="Prestige Moving residential movers in Ottawa"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-10 w-10 rounded-full bg-primary border-2 border-white flex items-center justify-center">
                          <Star className="h-4 w-4 text-[#1A2332] fill-[#1A2332]" />
                        </div>
                      ))}
                    </div>
                    <div className="text-white">
                      <div className="font-bold">337+ Reviews</div>
                      <div className="text-sm text-white/70">5-Star Rated on Google</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">What's Included</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Everything You Need for a Stress-Free Move
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our residential moving service includes all the essentials for a smooth relocation
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Free In-Home Estimates", description: "Accurate quotes with no hidden surprises", icon: CheckCircle2 },
                { title: "Professional Equipment", description: "Dollies, blankets, straps, and specialized tools", icon: Package },
                { title: "Furniture Disassembly", description: "Beds, tables, shelving units handled with care", icon: Sofa },
                { title: "Full Liability Coverage", description: "Your belongings are protected throughout the move", icon: Shield },
                { title: "Trained & Vetted Movers", description: "Background-checked, professional team members", icon: Users },
                { title: "WSIB Certified", description: "Full compliance with Ontario workplace safety standards", icon: Award }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Types */}
        <section className="py-16 md:py-20 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Types of Moves We Handle
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Specialized solutions for every type of residential move
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
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
                    <ServiceIcon className="h-5 w-5" />
                    {service.title}
                  </button>
                );
              })}
            </div>

            {/* Active Service Content */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                    {serviceTypes[activeTab].title}
                  </h3>
                  <p className="text-lg text-white/70 mb-6">
                    {serviceTypes[activeTab].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {serviceTypes[activeTab].features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/book">
                    <Button size="lg" className="font-bold" data-testid="button-service-quote">
                      Get a Quote
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden h-[300px]">
                  <img 
                    src={residentialImage}
                    alt={serviceTypes[activeTab].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Simple Process</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Four simple steps to your stress-free move
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-primary/20" />
                  )}
                  <div className="relative inline-flex items-center justify-center mb-4">
                    <div className="h-20 w-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <step.icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-8 w-8 bg-primary rounded-full flex items-center justify-center text-[#1A2332] font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/book">
                <Button size="lg" className="font-bold px-8" data-testid="button-process-quote">
                  Start Your Move Today
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                The Prestige Difference
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Fully Insured", description: "Complete protection for your belongings from pickup to delivery", color: "from-amber-500 to-amber-600" },
                { icon: Users, title: "Expert Team", description: "Average 5+ years experience per mover. Trained professionals who care.", color: "from-blue-500 to-blue-600" },
                { icon: Clock, title: "On-Time Guarantee", description: "If we're late, your first hour is free. We respect your schedule.", color: "from-emerald-500 to-emerald-600" },
                { icon: ThumbsUp, title: "Transparent Pricing", description: "No hidden fees, no surprises. What we quote is what you pay.", color: "from-violet-500 to-violet-600" },
                { icon: HandHeart, title: "White Glove Service", description: "Furniture placement, reassembly, and cleanup included.", color: "from-rose-500 to-rose-600" },
                { icon: Award, title: "WSIB Certified", description: "Full compliance with workplace safety standards for your peace of mind.", color: "from-primary to-amber-600" }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className={`h-14 w-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Reviews</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                What Families Say
              </h2>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span>Based on 337+ Google Reviews</span>
              </div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-2 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
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

        {/* Service Areas */}
        <section className="py-16 md:py-20 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Coverage</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ottawa Neighborhoods We Serve
              </h2>
              <p className="text-lg text-white/60">
                Comprehensive coverage across the National Capital Region
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

        {/* Related Services */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">More Services</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Complete Your Move
              </h2>
              <p className="text-lg text-muted-foreground">
                Additional services to make your transition seamless
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/services/packing-services">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full">
                  <CardContent className="p-6">
                    <Package className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Packing Services</h3>
                    <p className="text-muted-foreground">Professional packing for fragile items and full homes</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/storage-solutions">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full">
                  <CardContent className="p-6">
                    <Warehouse className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Storage Solutions</h3>
                    <p className="text-muted-foreground">Climate-controlled short and long-term storage</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/long-distance-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full">
                  <CardContent className="p-6">
                    <TruckIcon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Long Distance Moving</h3>
                    <p className="text-muted-foreground">Cross-province and Canada-wide relocations</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/piano-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full">
                  <CardContent className="p-6">
                    <Music className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Piano Moving</h3>
                    <p className="text-muted-foreground">Specialized equipment for safe piano transport</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/senior-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full">
                  <CardContent className="p-6">
                    <Heart className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Senior Moving</h3>
                    <p className="text-muted-foreground">Compassionate downsizing and relocation assistance</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/specialty-item-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full">
                  <CardContent className="p-6">
                    <Sparkles className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Specialty Items</h3>
                    <p className="text-muted-foreground">Hot tubs, pool tables, gym equipment & more</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-amber-500 to-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#1A2332]/20 backdrop-blur rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-[#1A2332]" />
              <span className="text-[#1A2332] font-semibold text-sm">Free No-Obligation Quote</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2332] mb-6">
              Ready to Move?
            </h2>
            
            <p className="text-xl text-[#1A2332]/80 mb-8 max-w-2xl mx-auto">
              Join 10,000+ Ottawa families who trusted us with their move. Get your personalized quote in under 1 hour.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-[#1A2332] hover:bg-[#1A2332]/90 text-white text-lg font-bold px-10 py-7 shadow-xl" data-testid="button-cta-quote">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:613-555-1234">
                <Button size="lg" variant="outline" className="border-2 border-[#1A2332] text-[#1A2332] hover:bg-[#1A2332] hover:text-white text-lg font-bold px-10 py-7" data-testid="button-cta-call">
                  <Phone className="h-5 w-5 mr-2" />
                  613-555-1234
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
