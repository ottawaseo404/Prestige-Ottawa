import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  Phone, CheckCircle2, Award, Clock, Shield, TruckIcon, Package, 
  Home as HomeIcon, Building2, MapPin, Menu, Warehouse, GraduationCap, 
  Heart, Music, Crown, Dumbbell, Box, Medal, ArrowRight, Star, 
  Quote, Users, ThumbsUp, ChevronLeft, ChevronRight, Truck, Headphones,
  Mail, Calendar, Calculator, Sparkles
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import logoUrl from "@assets/originalonglogo_1763689606978.png";
import heroImage from "@assets/generated_images/vancouver_seabus_ferry_scenic_view.png";
import heroVideo from "@assets/generated_videos/vancouver_ferry_crossing_burrard_inlet.mp4";
import residentialImage from "@assets/truck1_1764291781341.jpeg";
import commercialImage from "@assets/commercial_truck_night.png";
import longDistanceImage from "@assets/movers_staircase.png";
import packingImage from "@assets/packing_interior.png";
import { packageTypes, type PackageType } from "@shared/schema";

export default function Home() {
  const packages: PackageType[] = ["Premium", "Deluxe", "Diamond"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [topbarReviewIndex, setTopbarReviewIndex] = useState(0);
  const [, setLocation] = useLocation();

  const handleNavClick = (href: string) => {
    setLocation(href);
  };

  const googleReviews = [
    { text: "They were professional, efficient, and took great care of our belongings!", author: "Mike R.", rating: 5 },
    { text: "Best moving company in Vancouver! Highly recommend their services.", author: "Lisa T.", rating: 5 },
    { text: "Outstanding service from start to finish. Will use again!", author: "David K.", rating: 5 },
    { text: "Affordable, professional, and reliable. Exceeded expectations!", author: "Sarah M.", rating: 5 },
    { text: "The team was punctual, careful, and friendly. 5 stars!", author: "James P.", rating: 5 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTopbarReviewIndex((prev) => (prev + 1) % googleReviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [googleReviews.length]);

  const services = [
    { title: "Residential Moving", description: "Apartments, condos, and houses", icon: HomeIcon, href: "/services/residential-moving" },
    { title: "Commercial Moving", description: "Office relocations and business moves", icon: Building2, href: "/services/commercial-moving" },
    { title: "Long Distance Moving", description: "Cross-BC and Canada-wide moves", icon: MapPin, href: "/services/long-distance-moving" },
    { title: "Packing Services", description: "Professional packing and materials", icon: Package, href: "/services/packing-services" },
    { title: "Moving Supplies", description: "Boxes, tape, and packing materials", icon: Box, href: "/services/moving-supplies" },
    { title: "Student Moving", description: "Affordable moves for students", icon: GraduationCap, href: "/services/student-moving" },
    { title: "Storage Solutions", description: "Secure climate-controlled storage", icon: Warehouse, href: "/services/storage-solutions" },
    { title: "Specialty Item Moving", description: "Hot tubs, pool tables, gym equipment", icon: Dumbbell, href: "/services/specialty-item-moving" },
    { title: "Antique Moving", description: "Careful handling of valuables", icon: Crown, href: "/services/antique-moving" },
    { title: "Piano Moving", description: "Specialized piano transport", icon: Music, href: "/services/piano-moving" },
    { title: "Senior Moving", description: "Compassionate elderly relocations", icon: Heart, href: "/services/senior-moving" },
    { title: "Military Moving", description: "PCS moves and base relocations", icon: Medal, href: "/services/military-moving" }
  ];

  const testimonials = [
    {
      text: "Prestige Moving made our cross-city move absolutely seamless. The team was professional, careful with our belongings, and finished ahead of schedule. Highly recommend!",
      author: "Sarah M.",
      location: "Vancouver to Burnaby"
    },
    {
      text: "Best moving experience we've ever had. Fair pricing, no hidden fees, and the movers treated our furniture like it was their own. Will definitely use again.",
      author: "Michael T.",
      location: "Downtown Vancouver"
    },
    {
      text: "From packing to unpacking, Prestige handled everything with care. Their attention to detail and professionalism exceeded our expectations. 5 stars!",
      author: "Jennifer L.",
      location: "North Vancouver"
    }
  ];

  const featuredServices = [
    { title: "Residential Moving", description: "Expert home movers for apartments, condos, and houses. We handle your belongings with care.", icon: HomeIcon, href: "/services/residential-moving" },
    { title: "Commercial Moving", description: "Minimize downtime with our efficient office and business relocation services.", icon: Building2, href: "/services/commercial-moving" },
    { title: "Long Distance Moving", description: "Cross-BC and Canada-wide moves with reliable, on-time delivery guaranteed.", icon: Truck, href: "/services/long-distance-moving" },
    { title: "Packing Services", description: "Professional packing with quality materials to protect your valuables.", icon: Package, href: "/services/packing-services" }
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Contact Bar - White */}
      <div className="bg-white border-b border-gray-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            {/* Rotating Google Reviews */}
            <div className="flex items-center gap-2 overflow-hidden" data-testid="topbar-reviews">
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
              </div>
              <div className="relative h-5 overflow-hidden max-w-md">
                <div 
                  className="transition-all duration-500 ease-in-out"
                  key={topbarReviewIndex}
                >
                  <span className="text-sm text-gray-600 italic">
                    "{googleReviews[topbarReviewIndex].text}"
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    — {googleReviews[topbarReviewIndex].author}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-6">
              <a href="#locations" className="flex items-center gap-2 text-gray-600 text-sm hover:text-primary transition-colors" data-testid="topbar-locations">
                <MapPin className="h-4 w-4" />
                <span>Vancouver & Area</span>
              </a>
              <a href="tel:604-616-6066" className="flex items-center gap-2 text-gray-600 text-sm hover:text-primary transition-colors font-semibold" data-testid="topbar-phone">
                <Phone className="h-4 w-4" />
                <span>604-616-6066</span>
              </a>
              <a href="mailto:info@prestigemoving.ca" className="flex items-center gap-2 text-gray-600 text-sm hover:text-primary transition-colors" data-testid="topbar-email">
                <Mail className="h-4 w-4" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Navigation - Dark Theme */}
      <nav className="sticky top-0 z-50 bg-[#1A2332] border-b border-primary/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28 gap-6">
            <Link href="/" data-testid="link-logo">
              <img 
                src={logoUrl} 
                alt="Prestige Moving" 
                className="h-24 w-auto cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(197,165,114,0.5)]" 
                data-testid="img-logo" 
              />
            </Link>

            <div className="hidden lg:flex items-center gap-4">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  {/* Residential */}
                  <NavigationMenuItem>
                    <button 
                      onClick={() => handleNavClick("/services/residential-moving")}
                      className="flex items-center gap-2 px-4 py-2 text-white font-medium hover:text-primary transition-colors"
                      data-testid="nav-residential"
                    >
                      <HomeIcon className="h-4 w-4" />
                      Residential
                    </button>
                  </NavigationMenuItem>

                  {/* Commercial */}
                  <NavigationMenuItem>
                    <button 
                      onClick={() => handleNavClick("/services/commercial-moving")}
                      className="flex items-center gap-2 px-4 py-2 text-white font-medium hover:text-primary transition-colors"
                      data-testid="nav-commercial"
                    >
                      <Building2 className="h-4 w-4" />
                      Commercial
                    </button>
                  </NavigationMenuItem>

                  {/* Long Distance */}
                  <NavigationMenuItem>
                    <button 
                      onClick={() => handleNavClick("/services/long-distance-moving")}
                      className="flex items-center gap-2 px-4 py-2 text-white font-medium hover:text-primary transition-colors whitespace-nowrap"
                      data-testid="nav-long-distance"
                    >
                      <Truck className="h-4 w-4 flex-shrink-0" />
                      Long Distance
                    </button>
                  </NavigationMenuItem>

                  {/* More Services Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-white font-medium bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10 gap-2" data-testid="nav-services-trigger">
                      <Package className="h-4 w-4" />
                      More Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4 bg-background">
                        <div className="space-y-1">
                          {services.filter(s => 
                            !['Residential Moving', 'Commercial Moving', 'Long Distance Moving'].includes(s.title)
                          ).map((service) => (
                            <button
                              key={service.href}
                              onClick={() => handleNavClick(service.href)}
                              className="flex items-center gap-3 p-3 rounded-md hover-elevate cursor-pointer w-full text-left"
                              data-testid={`nav-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <service.icon className="h-5 w-5 text-primary flex-shrink-0" />
                              <div>
                                <div className="font-medium text-sm">{service.title}</div>
                                <div className="text-xs text-muted-foreground">{service.description}</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <a href="tel:604-616-6066">
                <Button variant="outline" size="lg" className="font-bold border-2 border-white text-white hover:bg-white hover:text-[#1A2332]" data-testid="button-call-us">
                  <Phone className="h-5 w-5 mr-2" />
                  CALL US
                </Button>
              </a>

              <Link href="/book">
                <Button variant="default" size="lg" className="font-bold shadow-lg" data-testid="button-get-quote">
                  FREE ESTIMATE
                </Button>
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <a href="tel:604-616-6066" className="p-2 text-white" data-testid="link-phone-mobile">
                <Phone className="h-5 w-5" />
              </a>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" data-testid="button-mobile-menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#1A2332] border-primary/20">
                  <div className="flex flex-col gap-6 mt-8">
                    <div>
                      <h3 className="font-bold text-lg mb-4 text-white">Services</h3>
                      <div className="space-y-1 max-h-[60vh] overflow-y-auto">
                        {services.map((service) => (
                          <button
                            key={service.href}
                            onClick={() => {
                              handleNavClick(service.href);
                              setMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-3 p-3 rounded-md hover:bg-white/10 cursor-pointer w-full text-left"
                            data-testid={`mobile-nav-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <service.icon className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="font-medium text-white">{service.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <Link href="/book">
                      <Button variant="default" className="w-full font-bold" size="lg" onClick={() => setMobileMenuOpen(false)} data-testid="button-mobile-quote">
                        GET FREE ESTIMATE
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Bleed Dramatic with Video Background */}
      <section className="relative min-h-[600px] md:min-h-[85vh] flex items-center overflow-hidden pb-32 md:pb-24">
        <div className="absolute inset-0">
          {/* Video Background */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster={heroImage}
            className="w-full h-full object-cover"
            data-testid="video-hero-background"
          >
            <source src={heroVideo} type="video/mp4" />
            {/* Fallback to image if video fails */}
            <img src={heroImage} alt="Vancouver Moving Services" className="w-full h-full object-cover" />
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Hero Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-2 mb-6" data-testid="badge-experience">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold text-sm md:text-base">Vancouver's Most Trusted Movers</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                Your Premium<br />
                <span className="text-primary">Moving Specialists</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Over 10,000 successful moves across Vancouver. Professional movers, transparent pricing, and complete peace of mind.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="text-base md:text-lg font-bold px-8 md:px-10 py-5 md:py-6 shadow-xl w-full sm:w-auto" data-testid="button-hero-quote">
                    GET FREE QUOTE
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:604-616-6066">
                  <Button size="lg" variant="outline" className="text-base md:text-lg font-bold px-8 md:px-10 py-5 md:py-6 border-2 border-white text-white hover:bg-white hover:text-[#1A2332] w-full sm:w-auto" data-testid="button-hero-call">
                    <Phone className="h-5 w-5 mr-2" />
                    CALL NOW
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Side - CTA Quote Box */}
            <div className="hidden lg:block">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 max-w-md ml-auto border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#1A2332] mb-2">Get Your Free Quote</h3>
                  <p className="text-gray-600 text-sm">Fill out the form and we'll contact you within 30 minutes</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Your Name" 
                      className="h-12 bg-gray-50 border-gray-200"
                      data-testid="input-hero-name"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="h-12 bg-gray-50 border-gray-200"
                      data-testid="input-hero-phone"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="h-12 bg-gray-50 border-gray-200"
                      data-testid="input-hero-email"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Input 
                      type="text" 
                      placeholder="Moving From" 
                      className="h-12 bg-gray-50 border-gray-200"
                      data-testid="input-hero-from"
                    />
                    <Input 
                      type="text" 
                      placeholder="Moving To" 
                      className="h-12 bg-gray-50 border-gray-200"
                      data-testid="input-hero-to"
                    />
                  </div>
                  <div>
                    <Input 
                      type="date" 
                      className="h-12 bg-gray-50 border-gray-200"
                      data-testid="input-hero-date"
                    />
                  </div>
                  
                  <Link href="/book">
                    <Button size="lg" className="w-full font-bold text-lg py-6 shadow-lg" data-testid="button-hero-cta-submit">
                      Get Free Estimate
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3 text-primary" />
                    <span>Fully Insured</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-primary fill-primary" />
                    <span>5.0 Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-primary" />
                    <span>Fast Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar at Bottom - Bright Gold Interactive */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110" data-testid="stat-moves">
                <div className="text-2xl md:text-4xl font-black text-[#1A2332] group-hover:text-white transition-colors drop-shadow-sm">10,000+</div>
                <div className="text-xs md:text-sm font-bold text-[#1A2332]/90 group-hover:text-white/90 transition-colors uppercase tracking-wide">Successful Moves</div>
              </div>
              <div className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110" data-testid="stat-rating">
                <div className="flex items-center justify-center gap-1 text-2xl md:text-4xl font-black text-[#1A2332] group-hover:text-white transition-colors drop-shadow-sm">
                  5.0 <Star className="h-5 w-5 md:h-7 md:w-7 fill-[#1A2332] group-hover:fill-white transition-colors" />
                </div>
                <div className="text-xs md:text-sm font-bold text-[#1A2332]/90 group-hover:text-white/90 transition-colors uppercase tracking-wide">Google Rating</div>
              </div>
              <div className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110" data-testid="stat-years">
                <div className="text-2xl md:text-4xl font-black text-[#1A2332] group-hover:text-white transition-colors drop-shadow-sm">15+</div>
                <div className="text-xs md:text-sm font-bold text-[#1A2332]/90 group-hover:text-white/90 transition-colors uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110" data-testid="stat-team">
                <div className="text-2xl md:text-4xl font-black text-[#1A2332] group-hover:text-white transition-colors drop-shadow-sm">50+</div>
                <div className="text-xs md:text-sm font-bold text-[#1A2332]/90 group-hover:text-white/90 transition-colors uppercase tracking-wide">Expert Movers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help - Quick Quote Form */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6" data-testid="heading-quick-quote">
              How can we help?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm text-gray-500">Property Type:</label>
                <Select defaultValue="home">
                  <SelectTrigger className="bg-gray-50 border-gray-200 h-12" data-testid="select-property-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home">Home</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="office">Office</SelectItem>
                    <SelectItem value="storage">Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-500">Moving Date:</label>
                <div className="relative">
                  <Input 
                    type="date" 
                    className="bg-gray-50 border-gray-200 h-12 pl-10" 
                    data-testid="input-moving-date"
                  />
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-500">From:</label>
                <Input 
                  type="text" 
                  placeholder="City or Postal Code" 
                  className="bg-gray-50 border-gray-200 h-12"
                  data-testid="input-from-location"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-500">To:</label>
                <Input 
                  type="text" 
                  placeholder="City or Postal Code" 
                  className="bg-gray-50 border-gray-200 h-12"
                  data-testid="input-to-location"
                />
              </div>
              <Link href="/book">
                <Button size="lg" variant="outline" className="w-full h-12 font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white" data-testid="button-quick-quote">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Calculator CTA */}
      <section className="py-12 bg-gradient-to-r from-[#1A2332] via-[#2a3a52] to-[#1A2332] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-64 h-64 bg-primary/40 rounded-full blur-3xl" />
          <div className="absolute bottom-5 right-10 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="h-20 w-20 bg-gradient-to-br from-primary to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                <Calculator className="h-10 w-10 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    <Sparkles className="h-3 w-3 mr-1" />
                    AI-Powered
                  </Badge>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white">Moving Cost Calculator</h2>
                <p className="text-white/60">Get an instant, AI-powered estimate for your move</p>
              </div>
            </div>
            <Link href="/calculator">
              <Button size="lg" className="text-lg font-bold px-8 py-6 shadow-xl" data-testid="button-calculator-cta">
                Try Free Calculator
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges Section - Modern & Interactive */}
      <section className="py-16 bg-gradient-to-b from-[#1A2332] to-[#2a3a52]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
              Your Trusted Moving Partners
            </h2>
            <p className="text-white/60">Industry-leading certifications and customer satisfaction</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* BBB A+ */}
            <div className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-primary/20" data-testid="badge-bbb">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative">
                <div className="h-20 w-20 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-amber-500/30 transition-shadow rotate-3 group-hover:rotate-0">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">BBB A+ Rating</h3>
                <p className="text-sm text-white/50">Accredited Business</p>
              </div>
            </div>

            {/* WSIB Insured */}
            <div className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-primary/20" data-testid="badge-wsib">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative">
                <div className="h-20 w-20 mx-auto mb-4 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/30 transition-shadow -rotate-3 group-hover:rotate-0">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">WSIB Insured</h3>
                <p className="text-sm text-white/50">Full Coverage Protection</p>
              </div>
            </div>

            {/* 5-Star Google */}
            <div className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-primary/20" data-testid="badge-google">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative">
                <div className="h-20 w-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/30 transition-shadow rotate-3 group-hover:rotate-0">
                  <Star className="h-10 w-10 text-white fill-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">5-Star Google</h3>
                <p className="text-sm text-white/50">500+ Happy Customers</p>
              </div>
            </div>

            {/* Fully Licensed */}
            <div className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-primary/20" data-testid="badge-licensed">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative">
                <div className="h-20 w-20 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-shadow -rotate-3 group-hover:rotate-0">
                  <CheckCircle2 className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Fully Licensed</h3>
                <p className="text-sm text-white/50">Professional & Legal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards with Images - Modern Redesign */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Animated Accent */}
          <div className="text-center mb-16 relative">
            <div className="inline-block">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4 tracking-wide uppercase">
                What We Offer
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A2332] mb-6">
              Our Core <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vancouver's premier moving solutions — expertly tailored to make your move seamless
            </p>
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <div className="h-1 w-4 bg-primary/50 rounded-full" />
              <div className="h-1 w-2 bg-primary/30 rounded-full" />
            </div>
          </div>

          {/* Modern Card Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Residential Moving Card - Featured */}
            <Link href="/services/residential-moving">
              <div className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500" data-testid="service-card-residential">
                <img 
                  src={residentialImage} 
                  alt="Residential Moving Services" 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332] via-[#1A2332]/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                    <Badge className="bg-primary text-[#1A2332] font-bold mb-4 shadow-lg">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Most Popular
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                      Residential Moving
                    </h3>
                    <p className="text-white/80 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                      From apartments to houses — we handle your home move with care. Sit back and let our expert team transform your stressful move into a seamless experience.
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <span>Explore Service</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-3xl transition-colors duration-300" />
              </div>
            </Link>

            {/* Commercial Moving Card */}
            <Link href="/services/commercial-moving">
              <div className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500" data-testid="service-card-commercial">
                <img 
                  src={commercialImage} 
                  alt="Commercial Moving Services" 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332] via-[#1A2332]/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                    <Badge variant="outline" className="border-white/30 text-white font-semibold mb-4 backdrop-blur-sm">
                      <Building2 className="h-3 w-3 mr-1" />
                      Business Solutions
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                      Commercial Moving
                    </h3>
                    <p className="text-white/80 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                      Minimize downtime with our efficient office relocation services. Our skilled team handles IT equipment, furniture, and everything in between.
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <span>Explore Service</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-3xl transition-colors duration-300" />
              </div>
            </Link>

            {/* Long Distance Moving Card */}
            <Link href="/services/long-distance-moving">
              <div className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500" data-testid="service-card-long-distance">
                <img 
                  src={longDistanceImage} 
                  alt="Long Distance Moving Services" 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332] via-[#1A2332]/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                    <Badge variant="outline" className="border-white/30 text-white font-semibold mb-4 backdrop-blur-sm">
                      <Truck className="h-3 w-3 mr-1" />
                      Cross-Country
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                      Long Distance Moving
                    </h3>
                    <p className="text-white/80 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                      Moving across BC or Canada? We handle logistics, route planning, and safe transport so you can focus on your new chapter.
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <span>Explore Service</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-3xl transition-colors duration-300" />
              </div>
            </Link>

            {/* Packing Services Card */}
            <Link href="/services/packing-services">
              <div className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500" data-testid="service-card-packing">
                <img 
                  src={packingImage} 
                  alt="Professional Packing Services" 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332] via-[#1A2332]/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                    <Badge variant="outline" className="border-white/30 text-white font-semibold mb-4 backdrop-blur-sm">
                      <Package className="h-3 w-3 mr-1" />
                      Full Service
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                      Packing Services
                    </h3>
                    <p className="text-white/80 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                      No time to pack? Our professional team uses premium materials to protect your valuables. Full or partial packing options available.
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <span>Explore Service</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-3xl transition-colors duration-300" />
              </div>
            </Link>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-[#1A2332] rounded-2xl shadow-xl">
              <div className="text-white text-center sm:text-left">
                <p className="font-bold text-lg">Ready to get started?</p>
                <p className="text-white/70 text-sm">Get your free, no-obligation quote today</p>
              </div>
              <Link href="/book">
                <Button size="lg" className="font-bold text-lg px-8 shadow-lg whitespace-nowrap" data-testid="button-get-quote-services">
                  GET FREE QUOTE
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section className="py-20 md:py-28 bg-[#1A2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our Moving Services
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Complete moving solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredServices.map((service, index) => (
              <Link key={service.href} href={service.href}>
                <Card className="group h-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden" data-testid={`card-featured-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="h-16 w-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-white/70 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services/residential-moving">
              <Button variant="outline" size="lg" className="font-bold border-2 border-primary text-primary hover:bg-primary hover:text-[#1A2332]" data-testid="button-view-all-services">
                VIEW ALL SERVICES
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary" data-testid="badge-about">
                About Prestige Moving
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                Vancouver's Premier Moving Company
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Prestige Moving Vancouver has been helping families and businesses relocate with care and professionalism. We own our fleet of trucks and employ a trained team of moving specialists who treat every move as if it were their own.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Family owned and operated with first-rate customer service",
                  "Fully bonded, licensed, and WSIB insured",
                  "BBB A+ rating with proven track record",
                  "Professional packing and unpacking services",
                  "Secure storage facilities available in Vancouver",
                  "Our own fleet of trucks for reliable service"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`about-feature-${index}`}>
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/book">
                <Button size="lg" className="font-bold" data-testid="button-about-quote">
                  GET YOUR FREE QUOTE
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background rounded-xl p-6 text-center shadow-lg" data-testid="about-stat-1">
                    <Truck className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-black text-foreground">15+</div>
                    <div className="text-sm text-muted-foreground">Moving Trucks</div>
                  </div>
                  <div className="bg-background rounded-xl p-6 text-center shadow-lg" data-testid="about-stat-2">
                    <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-black text-foreground">50+</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </div>
                  <div className="bg-background rounded-xl p-6 text-center shadow-lg" data-testid="about-stat-3">
                    <Clock className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-black text-foreground">15</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="bg-background rounded-xl p-6 text-center shadow-lg" data-testid="about-stat-4">
                    <ThumbsUp className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-black text-foreground">99%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 md:py-28 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Choose Your Moving Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden fees
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((packageKey) => {
              const pkg = packageTypes[packageKey];
              const isFeatured = packageKey === "Diamond";
              return (
                <Card 
                  key={packageKey} 
                  className={`relative overflow-hidden ${isFeatured ? 'border-2 border-primary shadow-xl ring-2 ring-primary/20' : 'border'}`}
                  data-testid={`card-package-${packageKey.toLowerCase()}`}
                >
                  {isFeatured && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-center py-2">
                      <span className="text-sm font-bold text-[#1A2332]">MOST POPULAR</span>
                    </div>
                  )}
                  <CardHeader className={`pb-4 ${isFeatured ? 'pt-12' : ''}`}>
                    <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                    <CardDescription className="text-sm pt-2">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-foreground" data-testid={`text-price-${packageKey.toLowerCase()}`}>${pkg.hourlyRate}</span>
                        <span className="text-muted-foreground">/hr</span>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Min {pkg.minimumHours}hrs + ${pkg.travelFee} travel
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold bg-accent/50 rounded-lg p-3">
                      <TruckIcon className="h-5 w-5 text-primary" />
                      <span>{pkg.movers} Movers</span>
                      <span className="text-muted-foreground">•</span>
                      <span>{pkg.truck}</span>
                    </div>

                    <div className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-3 text-sm" data-testid={`feature-${packageKey.toLowerCase()}-${idx}`}>
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/book" className="w-full">
                      <Button 
                        variant={isFeatured ? "default" : "outline"} 
                        className={`w-full font-bold ${isFeatured ? '' : 'border-2'}`}
                        size="lg"
                        data-testid={`button-book-${packageKey.toLowerCase()}`}
                      >
                        {isFeatured ? 'GET STARTED' : `Book ${pkg.name}`}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-[#1A2332]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-white/70">Based on 500+ Google Reviews</p>
          </div>

          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
              <Quote className="h-12 w-12 text-primary mb-6" />
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8" data-testid="testimonial-text">
                "{testimonials[testimonialIndex].text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-lg" data-testid="testimonial-author">
                    {testimonials[testimonialIndex].author}
                  </div>
                  <div className="text-white/60">
                    {testimonials[testimonialIndex].location}
                  </div>
                </div>
                <div className="flex gap-2" role="group" aria-label="Testimonial navigation">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={prevTestimonial}
                    className="border-white/20 text-white hover:bg-white/10"
                    data-testid="button-testimonial-prev"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={nextTestimonial}
                    className="border-white/20 text-white hover:bg-white/10"
                    data-testid="button-testimonial-next"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Why Choose Prestige Moving
            </h2>
            <p className="text-xl text-muted-foreground">
              The difference is in the details
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle2, title: "Transparent Pricing", description: "No hidden fees or surprise charges. Get a detailed quote upfront that covers everything." },
              { icon: Shield, title: "Fully Insured", description: "WSIB licensed and insured. Your belongings are protected throughout the entire move." },
              { icon: Clock, title: "On-Time Guarantee", description: "We arrive when promised. Your time is valuable, and we respect that." },
              { icon: Users, title: "Professional Team", description: "Trained, background-checked movers who treat your belongings like their own." },
              { icon: Truck, title: "Modern Fleet", description: "Well-maintained trucks equipped with the latest moving equipment and tools." },
              { icon: Headphones, title: "24/7 Support", description: "Questions? Our customer service team is always here to help you." }
            ].map((item, index) => (
              <div key={index} className="text-center p-6" data-testid={`why-choose-${index}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1A2332] mb-6">
            Ready to Move?
          </h2>
          <p className="text-xl text-[#1A2332]/80 mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote today. Our team is standing by to help make your move stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="text-lg font-bold px-10 py-6 bg-[#1A2332] text-white hover:bg-[#1A2332]/90" data-testid="button-cta-quote">
                GET FREE QUOTE
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:604-616-6066">
              <Button size="lg" variant="outline" className="text-lg font-bold px-10 py-6 border-2 border-[#1A2332] text-[#1A2332] hover:bg-[#1A2332] hover:text-white" data-testid="button-cta-call">
                <Phone className="h-5 w-5 mr-2" />
                604-616-6066
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2332] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <img src={logoUrl} alt="Prestige Moving" className="h-12 w-auto mb-6" />
              <p className="text-white/70 text-sm leading-relaxed">
                Vancouver's trusted moving company providing professional residential and commercial moving services.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
              <div className="space-y-2 text-sm text-white/70">
                <Link href="/services/residential-moving" className="block hover:text-primary transition-colors">Residential Moving</Link>
                <Link href="/services/commercial-moving" className="block hover:text-primary transition-colors">Commercial Moving</Link>
                <Link href="/services/long-distance-moving" className="block hover:text-primary transition-colors">Long Distance Moving</Link>
                <Link href="/services/packing-services" className="block hover:text-primary transition-colors">Packing Services</Link>
                <Link href="/services/storage-solutions" className="block hover:text-primary transition-colors">Storage Solutions</Link>
                <Link href="/services/piano-moving" className="block hover:text-primary transition-colors">Piano Moving</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">More Services</h4>
              <div className="space-y-2 text-sm text-white/70">
                <Link href="/services/senior-moving" className="block hover:text-primary transition-colors">Senior Moving</Link>
                <Link href="/services/student-moving" className="block hover:text-primary transition-colors">Student Moving</Link>
                <Link href="/services/antique-moving" className="block hover:text-primary transition-colors">Antique Moving</Link>
                <Link href="/services/specialty-item-moving" className="block hover:text-primary transition-colors">Specialty Items</Link>
                <Link href="/services/moving-supplies" className="block hover:text-primary transition-colors">Moving Supplies</Link>
                <Link href="/services/military-moving" className="block hover:text-primary transition-colors">Military Moving</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm text-white/70">
                <p>Vancouver, BC</p>
                <a href="tel:604-616-6066" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  604-616-6066
                </a>
                <p>info@prestigemoving.ca</p>
              </div>
              <div className="mt-6">
                <Link href="/book">
                  <Button variant="default" className="font-bold" data-testid="button-footer-quote">
                    GET FREE QUOTE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Prestige Moving Vancouver. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <span>WSIB Insured</span>
              <span>•</span>
              <span>BBB A+ Rating</span>
              <span>•</span>
              <span>Fully Licensed</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
