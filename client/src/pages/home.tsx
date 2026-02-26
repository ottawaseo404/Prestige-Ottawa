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
  Mail, Calendar, Calculator, Sparkles, Lock, FileText, DollarSign
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarWidget } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { MovingPackage } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import logoUrl from "@assets/transparentlogo_1770071884904.png";
import { useHeroVideo } from "@/hooks/use-hero-video";
import residentialImage from "@assets/truck1_1764291781341.jpeg";
import commercialImage from "@assets/commercial_1764347548715.jpeg";
import longDistanceImage from "@assets/longdistance moving_1764348335754.jpg";
import packingImage from "@assets/IMG_5767_1764348259855.jpeg";
import whyTransparentPricingImg from "@assets/why-transparent-pricing.png";
import whyFullyInsuredImg from "@assets/why-fully-insured.png";
import whyOnTimeImg from "@assets/why-on-time.png";
import whyProfessionalTeamImg from "@assets/why-professional-team.png";
import whyModernFleetImg from "@assets/why-modern-fleet.png";
import whySupportImg from "@assets/why-support.png";
import { packageTypes, type PackageType } from "@shared/schema";
import { SharedFooter } from "@/components/shared-footer";
// Hero video path (referenced directly to avoid Vite import issues with MP4)

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Fetch dynamic packages from database
  const { data: dynamicPackages } = useQuery<MovingPackage[]>({
    queryKey: ["/api/packages"],
  });
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [topbarReviewIndex, setTopbarReviewIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [heroVideoIndex, setHeroVideoIndex] = useState(0);
  
  // Use custom hero video
  const heroVideos = [
    "/attached_assets/best-moving-company-in-ottawa_1771979813832.mp4",
    "/attached_assets/ottawa-top-movers_1771979813833.mp4",
  ];
  const autoRotate = true;
  const rotationInterval = 8000;
  const heroLoading = false;

  // Fetch real Google reviews
  const { data: googleReviewsData } = useQuery<{
    name: string;
    rating: number;
    totalReviews: number;
    reviews: Array<{
      name: string;
      profilePhoto?: string;
      rating: number;
      time: string;
      text: string;
    }>;
  }>({
    queryKey: ['/api/reviews'],
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
  });

  // Generate color from name for avatar background
  const getColorFromName = (name: string) => {
    const colors = ["#9C27B0", "#00897B", "#FB8C00", "#E91E63", "#3F51B5", "#009688", "#673AB7", "#FF5722", "#2196F3", "#4CAF50"];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  // Transform Google reviews to our format, with fallback data
  const reviewsList = googleReviewsData?.reviews?.length 
    ? googleReviewsData.reviews.map(review => ({
        name: review.name,
        initial: review.name.charAt(0).toUpperCase(),
        color: getColorFromName(review.name),
        time: review.time,
        text: review.text,
        profilePhoto: review.profilePhoto,
        rating: review.rating
      }))
    : [
        { name: "Theresa Hendricks", initial: "T", color: "#9C27B0", time: "1 month ago", text: "We had a great experience with Prestige Moving! Nick and Steve were excellent — friendly, quick, and super accommodating with our last-minute requests." },
        { name: "Christine Mattesz", initial: "C", color: "#00897B", time: "1 month ago", text: "My parents were finally ready to downsize and move out of the house they called home for the last 37 years. To say they were anxious is an understatement." },
        { name: "Martin Vass", initial: "M", color: "#FB8C00", time: "1 month ago", text: "I hired prestige moving to do a long distance move for me from Toronto to Ottawa! They did an amazing job! Packed up all my stuff perfectly." },
      ];
  
  // Get real review count or fallback
  const totalReviewCount = googleReviewsData?.totalReviews || 350;
  const averageRating = googleReviewsData?.rating || 5.0;
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  // Hero quote form state
  const [heroFormData, setHeroFormData] = useState({
    name: "",
    phone: "",
    email: "",
    movingFrom: "",
    movingTo: "",
    moveDate: "",
    moveSize: "",
    service: ""
  });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [heroFormSubmitted, setHeroFormSubmitted] = useState(false);
  const [pricingType, setPricingType] = useState<"residential" | "commercial">("residential");

  // Quote form mutation
  const quoteMutation = useMutation({
    mutationFn: async (data: typeof heroFormData) => {
      return apiRequest("POST", "/api/quote-request", {
        name: data.name,
        email: data.email,
        phone: data.phone,
        moveDate: data.moveDate,
        moveSize: data.moveSize,
        originCity: data.movingFrom,
        destinationCity: data.movingTo,
        serviceType: data.service || "Moving"
      });
    },
    onSuccess: () => {
      setHeroFormSubmitted(true);
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 24 hours with your free estimate.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroFormData.name || !heroFormData.phone || !heroFormData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, phone, and email.",
        variant: "destructive",
      });
      return;
    }
    quoteMutation.mutate(heroFormData);
  };

  const handleNavClick = (href: string) => {
    setLocation(href);
  };

  const googleReviews = [
    { text: "Best movers in Ottawa, hands down!", author: "Mike R.", rating: 5 },
    { text: "Fast, friendly, and affordable. Loved it!", author: "Lisa T.", rating: 5 },
    { text: "Outstanding service from start to finish!", author: "David K.", rating: 5 },
    { text: "Professional team, zero stress. Highly recommend!", author: "Sarah M.", rating: 5 },
    { text: "Punctual, careful, and friendly. 5 stars!", author: "James P.", rating: 5 },
    { text: "Made our move so easy. Thank you!", author: "Emily C.", rating: 5 },
    { text: "Incredible value for the quality. Will use again!", author: "Ryan B.", rating: 5 },
    { text: "They treated our stuff like their own.", author: "Amanda L.", rating: 5 },
    { text: "Smooth move, no surprises. Perfect!", author: "Chris W.", rating: 5 },
    { text: "On time, on budget. Couldn't ask for more!", author: "Jennifer H.", rating: 5 },
    { text: "True professionals. Exceeded all expectations!", author: "Mark D.", rating: 5 },
    { text: "Quick and careful. Highly recommend!", author: "Nicole P.", rating: 5 },
    { text: "Stress-free experience. Amazing team!", author: "Kevin S.", rating: 5 },
    { text: "Best decision we made for our move!", author: "Laura M.", rating: 5 },
    { text: "Efficient, polite, and reasonably priced!", author: "Brian T.", rating: 5 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTopbarReviewIndex((prev) => (prev + 1) % googleReviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [googleReviews.length]);

  // Auto-rotate Google Reviews carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviewsList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviewsList.length]);

  // Auto-rotate hero videos if enabled and loaded
  useEffect(() => {
    // Don't start rotation while loading, with no videos, or single video
    if (heroLoading || heroVideos.length === 0 || !autoRotate || heroVideos.length <= 1) return;
    
    const interval = setInterval(() => {
      setHeroVideoIndex((prev) => (prev + 1) % heroVideos.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [heroVideos.length, autoRotate, rotationInterval, heroLoading]);

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
      location: "Ottawa to Kanata"
    },
    {
      text: "Best moving experience we've ever had. Fair pricing, no hidden fees, and the movers treated our furniture like it was their own. Will definitely use again.",
      author: "Michael T.",
      location: "Downtown Ottawa"
    },
    {
      text: "From packing to unpacking, Prestige handled everything with care. Their attention to detail and professionalism exceeded our expectations. 5 stars!",
      author: "Jennifer L.",
      location: "Orleans"
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

  // Schema.org data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving Ottawa",
    "alternateName": ["Ottawa Movers", "Moving Company Ottawa", "Best Movers Ottawa", "Top Movers Ottawa", "Ottawa Moving Company"],
    "image": "https://prestigemoving.ca/logo.png",
    "description": "Prestige Moving Ottawa - The best Ottawa movers you can trust. We are the top moving company Ottawa relies on for residential, commercial, and long-distance moves. Best movers Ottawa with 350 five-star Google reviews. Top movers Ottawa - WSIB certified, fully insured. Ottawa moving company serving all of Greater Ottawa.",
    "url": "https://prestigemoving.ca",
    "telephone": "(613) 600-4000",
    "email": "ottawa@prestigemoving.ca",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "50 Colonnade Rd Unit 200B",
      "addressLocality": "Ottawa",
      "addressRegion": "ON",
      "postalCode": "K2E 7J6",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.4215,
      "longitude": -75.6972
    },
    "openingHours": "Mo-Su 08:00-20:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "349",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      { "@type": "City", "name": "Ottawa" },
      { "@type": "City", "name": "Kanata" },
      { "@type": "City", "name": "Orleans" },
      { "@type": "City", "name": "Nepean" },
      { "@type": "City", "name": "Barrhaven" },
      { "@type": "City", "name": "Gloucester" },
      { "@type": "City", "name": "Gatineau" },
      { "@type": "City", "name": "Stittsville" },
      { "@type": "City", "name": "Rockland" },
      { "@type": "City", "name": "Manotick" },
      { "@type": "City", "name": "Kemptville" },
      { "@type": "City", "name": "Carleton Place" },
      { "@type": "City", "name": "Almonte" },
      { "@type": "City", "name": "Perth" },
      { "@type": "AdministrativeArea", "name": "Greater Ottawa" },
      { "@type": "AdministrativeArea", "name": "National Capital Region" },
      { "@type": "AdministrativeArea", "name": "Ottawa-Gatineau" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Ottawa Moving Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Moving Ottawa" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Moving Ottawa" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Long Distance Moving" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kanata Movers" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Greater Ottawa Movers" } }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/prestigemoving.ca/",
      "https://www.instagram.com/movingprestige/",
      "https://ca.linkedin.com/in/prestige-moving-inc-824520287",
      "https://www.youtube.com/@PrestigeMovingServicesInc"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Prestige Moving Ottawa",
    "image": "https://prestigemoving.ca/logo.png",
    "@id": "https://prestigemoving.ca",
    "url": "https://prestigemoving.ca",
    "telephone": "(613) 600-4000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ottawa",
      "addressLocality": "Ottawa",
      "addressRegion": "ON",
      "postalCode": "K1A 0A1",
      "addressCountry": "CA"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <Helmet>
        <meta name="google-site-verification" content="qCldQT0CrqE6wxeHt9aTvmBl_fvb9c0qdu1Abn_SSn8" />
        <title>Prestige Moving Ottawa - Trusted Local & Long Distance Movers</title>
        <meta name="description" content="Looking for Ottawa movers? Prestige Moving Ottawa is the top moving company Ottawa trusts. Best movers Ottawa with 350 five-star reviews. Top movers Ottawa for residential, commercial & long-distance moves. Ottawa moving company - WSIB certified, fully insured. Free estimates - Call (613) 600-4000!" />
        <meta name="keywords" content="ottawa movers, moving company ottawa, best movers ottawa, top movers ottawa, ottawa moving company, movers ottawa, movers in ottawa, ottawa ontario movers, professional movers ottawa, local movers ottawa, affordable movers ottawa, residential movers ottawa, commercial movers ottawa, long distance movers ottawa, kanata movers, orleans movers, nepean movers, barrhaven movers, gatineau movers, greater ottawa movers" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Prestige Moving Ottawa" />
        <meta name="publisher" content="Prestige Moving Ottawa" />
        <meta property="og:title" content="Prestige Moving Ottawa | Best Ottawa Movers | Top Moving Company Ottawa" />
        <meta property="og:description" content="Prestige Moving Ottawa - The best movers Ottawa has to offer! Top-rated Ottawa moving company with 350 five-star Google reviews. Ottawa movers for residential, commercial & long-distance moves. WSIB certified. Get your free quote today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca" />
        <meta property="og:site_name" content="Prestige Moving Ottawa" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Prestige Moving Ottawa - Best Ottawa Movers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PrestigeMoving" />
        <meta name="twitter:title" content="Prestige Moving Ottawa | Best Ottawa Movers" />
        <meta name="twitter:description" content="Top movers Ottawa trusts! Prestige Moving Ottawa is the best moving company Ottawa. 350 five-star reviews, WSIB certified. Ottawa movers for all your moving needs. Free quote!" />
        <meta name="twitter:image" content="https://prestigemoving.ca/og-image.png" />
        <meta name="twitter:image:alt" content="Prestige Moving Ottawa - Top Ottawa Moving Company" />
        <link rel="canonical" href="https://prestigemoving.ca" />
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Ottawa" />
        <meta name="geo.position" content="45.4215;-75.6972" />
        <meta name="ICBM" content="45.4215, -75.6972" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Sticky Header Container */}
        <div className="sticky top-0 z-50">
          {/* Top Contact Bar */}
          <div className="hidden md:block bg-[#C5A572]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-9">
                <div className="flex items-center gap-6">
                  <a href="tel:613-600-4000" className="flex items-center gap-2 text-[#1A2332] text-xs hover:text-white transition-colors font-semibold" data-testid="topbar-phone">
                    <Phone className="h-3 w-3" />
                    <span>613-600-4000</span>
                  </a>
                  <a href="mailto:Ottawa@prestigemoving.ca" className="flex items-center gap-2 text-[#1A2332] text-xs hover:text-white transition-colors font-semibold" data-testid="topbar-email">
                    <Mail className="h-3 w-3" />
                    <span>Ottawa@prestigemoving.ca</span>
                  </a>
                  <a href="https://maps.app.goo.gl/5grQGZ18k1GrxuEj7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1A2332] text-xs font-semibold hover:text-white transition-colors" data-testid="topbar-address">
                    <MapPin className="h-3 w-3" />
                    <span>50 Colonnade Rd unit 200B, Ottawa, ON</span>
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[#1A2332] text-[#1A2332]" />
                  ))}
                  <span className="text-[#1A2332] text-xs ml-1.5 font-semibold">5.0 · 10,000+ Moves</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="bg-white" style={{ boxShadow: "0 2px 20px rgba(26,35,50,0.08), 0 1px 0 rgba(197,165,114,0.3)" }}>
            {/* Gold accent bottom border */}
            <div className="absolute left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent 0%, #C5A572 30%, #D4B483 50%, #C5A572 70%, transparent 100%)" }} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-28 gap-4">

                {/* Logo */}
                <Link href="/" data-testid="link-logo" className="flex-shrink-0 group/logo">
                  <img
                    src={logoUrl}
                    alt="Prestige Moving"
                    className="h-28 object-contain cursor-pointer transition-all duration-500 group-hover/logo:scale-105"
                    data-testid="img-logo"
                  />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                  <NavigationMenu delayDuration={0}>
                    <NavigationMenuList className="gap-0.5">

                      {/* Residential */}
                      <NavigationMenuItem>
                        <button
                          onClick={() => handleNavClick("/services/residential-moving")}
                          className="group/item flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 text-[#1A2332]/70 hover:text-[#1A2332] hover:bg-[#C5A572]/10"
                          data-testid="nav-residential"
                        >
                          <HomeIcon className="h-3.5 w-3.5 flex-shrink-0 text-[#C5A572] transition-transform duration-300 group-hover/item:scale-110" />
                          <span>Residential</span>
                        </button>
                      </NavigationMenuItem>

                      {/* Commercial */}
                      <NavigationMenuItem>
                        <button
                          onClick={() => handleNavClick("/services/commercial-moving")}
                          className="group/item flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 text-[#1A2332]/70 hover:text-[#1A2332] hover:bg-[#C5A572]/10"
                          data-testid="nav-commercial"
                        >
                          <Building2 className="h-3.5 w-3.5 flex-shrink-0 text-[#C5A572] transition-transform duration-300 group-hover/item:scale-110" />
                          <span>Commercial</span>
                        </button>
                      </NavigationMenuItem>

                      {/* Long Distance */}
                      <NavigationMenuItem>
                        <button
                          onClick={() => handleNavClick("/services/long-distance-moving")}
                          className="group/item flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 text-[#1A2332]/70 hover:text-[#1A2332] hover:bg-[#C5A572]/10 whitespace-nowrap"
                          data-testid="nav-long-distance"
                        >
                          <Truck className="h-3.5 w-3.5 flex-shrink-0 text-[#C5A572] transition-transform duration-300 group-hover/item:scale-110" />
                          <span>Long Distance</span>
                        </button>
                      </NavigationMenuItem>

                      {/* More Services Dropdown */}
                      <NavigationMenuItem>
                        <NavigationMenuTrigger
                          data-testid="nav-services-trigger"
                          className="group/trigger flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 text-[#1A2332]/70 hover:text-[#1A2332] hover:bg-[#C5A572]/10 !bg-transparent data-[state=open]:!bg-[#C5A572]/10 data-[state=open]:text-[#1A2332] [&>svg]:hidden"
                        >
                          <Package className="h-3.5 w-3.5 text-[#C5A572] transition-transform duration-300 group-hover/trigger:scale-110" />
                          <span>More Services</span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div
                            className="w-[520px] p-3 bg-white"
                            style={{
                              border: "1px solid rgba(197,165,114,0.2)",
                              boxShadow: "0 20px 50px rgba(26,35,50,0.12), 0 0 0 1px rgba(197,165,114,0.1)"
                            }}
                          >
                            <div className="px-3 py-2 mb-2 border-b border-gray-100">
                              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C5A572]">All Moving Services</span>
                            </div>
                            <div className="grid grid-cols-2 gap-0.5">
                              {services.filter(s =>
                                !['Residential Moving', 'Commercial Moving', 'Long Distance Moving'].includes(s.title)
                              ).map((service) => (
                                <button
                                  key={service.href}
                                  onClick={() => handleNavClick(service.href)}
                                  className="group/item flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer w-full text-left transition-all duration-200 hover:bg-[#C5A572]/8"
                                  data-testid={`nav-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#C5A572]/10 group-hover/item:bg-[#C5A572]/20 transition-all duration-200">
                                    <service.icon className="h-4 w-4 text-[#C5A572]" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-[#1A2332] font-semibold text-xs group-hover/item:text-[#C5A572] transition-colors truncate">{service.title}</div>
                                    <div className="text-[#1A2332]/50 text-[11px] truncate">{service.description}</div>
                                  </div>
                                  <ChevronRight className="h-3 w-3 text-[#C5A572]/30 group-hover/item:text-[#C5A572]/70 flex-shrink-0 transition-all duration-200 group-hover/item:translate-x-0.5" />
                                </button>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>

                    </NavigationMenuList>
                  </NavigationMenu>

                  {/* Blog */}
                  <button
                    onClick={() => handleNavClick("/blog")}
                    data-testid="nav-blog"
                    className="group/item flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 text-[#1A2332]/70 hover:text-[#1A2332] hover:bg-[#C5A572]/10"
                  >
                    <FileText className="h-3.5 w-3.5 text-[#C5A572] transition-transform duration-300 group-hover/item:scale-110" />
                    <span>Blog</span>
                  </button>

                  {/* Divider */}
                  <div className="w-px h-5 bg-gray-200 mx-2" />

                  {/* Get Quote CTA */}
                  <Link href="/book">
                    <button
                      data-testid="button-get-quote"
                      className="relative flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs tracking-widest uppercase overflow-hidden group/cta transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, #1A2332 0%, #243047 100%)",
                        color: "#C5A572",
                        boxShadow: "0 4px 15px rgba(26,35,50,0.25)",
                      }}
                    >
                      <span className="relative z-10 whitespace-nowrap">Free Estimate</span>
                      <ChevronRight className="h-3.5 w-3.5 relative z-10 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                      <span className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(135deg, #C5A572 0%, #D4B483 100%)" }} />
                      <span className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-[#1A2332] font-bold text-xs tracking-widest uppercase">
                        Free Estimate <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </Link>

                  {/* Admin lock */}
                  <Link href="/admin">
                    <Button variant="ghost" size="icon" className="text-[#1A2332]/30 hover:text-[#1A2332]/60 hover:bg-gray-100" data-testid="link-admin-nav">
                      <Lock className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                {/* Mobile Nav */}
                <div className="lg:hidden flex items-center gap-2">
                  <a href="tel:(613) 600-4000" className="p-2 text-[#C5A572]" data-testid="link-phone-mobile">
                    <Phone className="h-5 w-5" />
                  </a>
                  <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" data-testid="button-mobile-menu" className="text-[#1A2332] hover:bg-[#C5A572]/10">
                        <Menu className="h-6 w-6" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent
                      side="right"
                      className="w-[300px] sm:w-[360px] border-l border-[#C5A572]/20 overflow-y-auto p-0 bg-white"
                    >
                      <div className="flex flex-col gap-0 mt-12">
                        <div className="px-6 pb-4 border-b border-gray-100">
                          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C5A572]">Navigation</p>
                        </div>
                        <div className="p-3 space-y-0.5">
                          <button
                            onClick={() => { handleNavClick("/"); setMobileMenuOpen(false); }}
                            className="flex items-center gap-3 px-4 py-3 rounded-md w-full text-left text-[#1A2332]/80 hover:text-[#C5A572] hover:bg-[#C5A572]/8 transition-all duration-200"
                            data-testid="mobile-nav-home"
                          >
                            <HomeIcon className="h-4 w-4 text-[#C5A572] flex-shrink-0" />
                            <span className="font-semibold text-sm">Home</span>
                          </button>
                          {services.map((service) => (
                            <button
                              key={service.href}
                              onClick={() => { handleNavClick(service.href); setMobileMenuOpen(false); }}
                              className="flex items-center gap-3 px-4 py-3 rounded-md w-full text-left text-[#1A2332]/80 hover:text-[#C5A572] hover:bg-[#C5A572]/8 transition-all duration-200"
                              data-testid={`mobile-nav-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <service.icon className="h-4 w-4 text-[#C5A572] flex-shrink-0" />
                              <span className="font-semibold text-sm">{service.title}</span>
                            </button>
                          ))}
                          <button
                            onClick={() => { handleNavClick("/blog"); setMobileMenuOpen(false); }}
                            className="flex items-center gap-3 px-4 py-3 rounded-md w-full text-left text-[#1A2332]/80 hover:text-[#C5A572] hover:bg-[#C5A572]/8 transition-all duration-200"
                            data-testid="mobile-nav-blog"
                          >
                            <FileText className="h-4 w-4 text-[#C5A572] flex-shrink-0" />
                            <span className="font-semibold text-sm">Blog</span>
                          </button>
                        </div>
                        <div className="p-4 mt-2">
                          <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                            <button
                              data-testid="mobile-get-quote"
                              className="w-full py-3.5 rounded-full font-bold text-sm tracking-widest uppercase text-[#C5A572]"
                              style={{
                                background: "linear-gradient(135deg, #1A2332 0%, #243047 100%)",
                                boxShadow: "0 4px 15px rgba(26,35,50,0.2)"
                              }}
                            >
                              Get Free Estimate
                            </button>
                          </Link>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

              </div>
            </div>
          </nav>
        </div>

        {/* Hero Section - Full Bleed Dramatic with Video Background Slider */}
        <section className="relative min-h-[600px] md:min-h-[85vh] flex items-center overflow-x-clip pb-32 md:pb-24 bg-[#1A2332]">
          <div className="absolute inset-0 bg-[#1A2332]">
            {/* Video Background Slider - BC Ferry Videos from Admin Database */}
            {heroVideos.map((video, index) => (
              <video 
                key={index}
                autoPlay 
                muted 
                loop 
                playsInline
                preload="auto"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === heroVideoIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundColor: '#1A2332' }}
                data-testid={`video-hero-background-${index}`}
              >
                <source src={video} type="video/mp4" />
              </video>
            ))}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/60" />
          </div>

          {/* Video Slider Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => setHeroVideoIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === heroVideoIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                data-testid={`hero-slider-dot-${index}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Hero Content */}
              <div className="max-w-xl">
                {/* Social Media Icons */}
                <div className="flex items-center gap-3 mb-8">
                  <a 
                    href="https://www.facebook.com/prestigemoving.ca/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
                    data-testid="social-facebook"
                    aria-label="Follow us on Facebook"
                  >
                    <SiFacebook className="h-4 w-4 text-white group-hover:text-[#1A2332] transition-colors" />
                  </a>
                  <a 
                    href="https://www.instagram.com/movingprestige/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
                    data-testid="social-instagram"
                    aria-label="Follow us on Instagram"
                  >
                    <SiInstagram className="h-4 w-4 text-white group-hover:text-[#1A2332] transition-colors" />
                  </a>
                  <a 
                    href="https://ca.linkedin.com/in/prestige-moving-inc-824520287" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
                    data-testid="social-linkedin"
                    aria-label="Follow us on LinkedIn"
                  >
                    <SiLinkedin className="h-4 w-4 text-white group-hover:text-[#1A2332] transition-colors" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@PrestigeMovingServicesInc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
                    data-testid="social-youtube"
                    aria-label="Subscribe on YouTube"
                  >
                    <SiYoutube className="h-4 w-4 text-white group-hover:text-[#1A2332] transition-colors" />
                  </a>
                  <a
                    href="https://vancouver.prestigemoving.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-primary/20 backdrop-blur-sm border-2 border-primary/60 rounded-full px-5 py-2.5 text-sm font-bold text-primary uppercase tracking-wider hover:bg-primary hover:border-primary hover:text-[#1A2332] transition-all duration-300 shadow-[0_0_15px_rgba(197,165,114,0.3)] hover:shadow-[0_0_25px_rgba(197,165,114,0.5)]"
                    data-testid="link-vancouver-hero"
                  >
                    <MapPin className="h-4 w-4" />
                    Vancouver
                  </a>
                </div>

                {/* Trust Badges Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-6">
                  <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 border-2 border-primary/60 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 shadow-[0_0_20px_rgba(197,165,114,0.4)] hover:shadow-[0_0_30px_rgba(197,165,114,0.6)] transition-all duration-500" data-testid="badge-experience">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-full animate-[shimmer_2s_ease-in-out_infinite]" />
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary relative z-10 animate-[pulse_2s_ease-in-out_infinite]" />
                    <span className="text-primary font-bold text-xs sm:text-sm md:text-base relative z-10">#1 Rated Movers in Ottawa</span>
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/GKvmDPf3vZcTmRRw8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/10 border border-white/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-white/20 hover:border-white/50 transition-all duration-300 cursor-pointer"
                    data-testid="link-google-reviews"
                  >
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white font-semibold text-xs sm:text-sm">350+ Reviews</span>
                  </a>
                </div>
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-[0.95] tracking-tight text-left">
                  <span className="block">Ottawa's</span>
                  <span className="block text-primary drop-shadow-[0_0_30px_rgba(197,165,114,0.5)]">#1 Moving</span>
                  <span className="block">Company</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed max-w-xl font-medium text-left">
                  <span className="text-primary font-bold">10,000+</span> successful moves. Professional, reliable, and trusted by families across Ottawa.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">WSIB Insured</p>
                      <p className="text-white/60 text-xs">Full Coverage</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Same Day</p>
                      <p className="text-white/60 text-xs">Quotes Available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <TruckIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Our Fleet</p>
                      <p className="text-white/60 text-xs">No Rentals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">No Hidden Fees</p>
                      <p className="text-white/60 text-xs">Transparent Pricing</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/book">
                    <Button 
                      size="lg" 
                      className="group relative overflow-hidden text-lg font-bold px-10 py-6 shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-[0.98] w-full sm:w-auto" 
                      data-testid="button-hero-quote"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        Get Your Free Quote
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary via-amber-500 to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300" />
                    </Button>
                  </Link>
                  <a href="tel:613-600-4000">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="group text-lg font-bold px-10 py-6 border-2 border-white text-white backdrop-blur-md bg-white/10 hover:bg-white hover:text-[#1A2332] hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 active:scale-[0.98] w-full sm:w-auto" 
                      data-testid="button-hero-call"
                    >
                      <Phone className="h-5 w-5 mr-3 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                      (613) 600-4000
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Side - CTA Quote Box */}
              <div className="hidden lg:block">
                <div className="bg-white rounded-xl shadow-2xl p-5 max-w-sm ml-auto border border-gray-100 relative z-50">
                  {heroFormSubmitted ? (
                    <div className="text-center py-6">
                      <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                        <CheckCircle2 className="h-7 w-7 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1A2332] mb-1">Quote Request Sent!</h3>
                      <p className="text-gray-500 text-sm mb-4">We'll contact you within 24 hours.</p>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => {
                          setHeroFormSubmitted(false);
                          setHeroFormData({ name: "", phone: "", email: "", movingFrom: "", movingTo: "", moveDate: "", moveSize: "", service: "" });
                          setSelectedDate(undefined);
                        }}
                        className="text-primary hover:text-primary/80"
                        data-testid="button-submit-another"
                      >
                        Submit Another Quote
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Link href="/contact">
                        <Button variant="outline" className="w-full font-bold mb-3 border-primary/30 text-primary" data-testid="button-hero-contact">
                          <Mail className="h-4 w-4 mr-2" />
                          Contact Us
                        </Button>
                      </Link>

                      <div className="relative mb-4">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center">
                          <span className="bg-white px-3 text-xs text-gray-400 uppercase tracking-wider">or get a free quote</span>
                        </div>
                      </div>

                      <div className="text-center mb-4">
                        <h3 className="text-lg font-bold text-[#1A2332] mb-0.5">Get Your Free Quote</h3>
                        <p className="text-gray-400 text-xs">We'll contact you within 24 hours</p>
                      </div>
                      
                      <form onSubmit={handleHeroFormSubmit} className="space-y-2.5">
                        <div className="relative group">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                          <Input 
                            type="text" 
                            placeholder="Full Name" 
                            className="h-10 pl-10 bg-gray-50/80 border-gray-200 rounded-lg text-sm focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                            value={heroFormData.name}
                            onChange={(e) => setHeroFormData(prev => ({ ...prev, name: e.target.value }))}
                            data-testid="input-hero-name"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="relative group">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <Input 
                              type="tel" 
                              placeholder="Phone" 
                              className="h-10 pl-10 bg-gray-50/80 border-gray-200 rounded-lg text-sm focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                              value={heroFormData.phone}
                              onChange={(e) => setHeroFormData(prev => ({ ...prev, phone: e.target.value }))}
                              data-testid="input-hero-phone"
                            />
                          </div>
                          <div className="relative group">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <Input 
                              type="email" 
                              placeholder="Email" 
                              className="h-10 pl-10 bg-gray-50/80 border-gray-200 rounded-lg text-sm focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                              value={heroFormData.email}
                              onChange={(e) => setHeroFormData(prev => ({ ...prev, email: e.target.value }))}
                              data-testid="input-hero-email"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="relative group">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <Input 
                              type="text" 
                              placeholder="Moving From" 
                              className="h-10 pl-10 bg-gray-50/80 border-gray-200 rounded-lg text-sm focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                              value={heroFormData.movingFrom}
                              onChange={(e) => setHeroFormData(prev => ({ ...prev, movingFrom: e.target.value }))}
                              data-testid="input-hero-from"
                            />
                          </div>
                          <div className="relative group">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <Input 
                              type="text" 
                              placeholder="Moving To" 
                              className="h-10 pl-10 bg-gray-50/80 border-gray-200 rounded-lg text-sm focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                              value={heroFormData.movingTo}
                              onChange={(e) => setHeroFormData(prev => ({ ...prev, movingTo: e.target.value }))}
                              data-testid="input-hero-to"
                            />
                          </div>
                        </div>
                        <div className="relative">
                          <TruckIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none z-10" />
                          <Select 
                            value={heroFormData.service} 
                            onValueChange={(value) => setHeroFormData(prev => ({ ...prev, service: value }))}
                          >
                            <SelectTrigger className="h-10 pl-10 bg-gray-50/80 border-gray-200 rounded-lg text-sm" data-testid="select-hero-service">
                              <SelectValue placeholder="Select Service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Residential Moving">Residential Moving</SelectItem>
                              <SelectItem value="Commercial Moving">Commercial Moving</SelectItem>
                              <SelectItem value="Long Distance Moving">Long Distance Moving</SelectItem>
                              <SelectItem value="Packing Services">Packing Services</SelectItem>
                              <SelectItem value="Moving Supplies">Moving Supplies</SelectItem>
                              <SelectItem value="Student Moving">Student Moving</SelectItem>
                              <SelectItem value="Storage Solutions">Storage Solutions</SelectItem>
                              <SelectItem value="Piano Moving">Piano Moving</SelectItem>
                              <SelectItem value="Specialty Item Moving">Specialty Item Moving</SelectItem>
                              <SelectItem value="Antique Moving">Antique Moving</SelectItem>
                              <SelectItem value="Senior Moving">Senior Moving</SelectItem>
                              <SelectItem value="Military Moving">Military Moving</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="relative">
                            <HomeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none z-10" />
                            <Select 
                              value={heroFormData.moveSize} 
                              onValueChange={(value) => setHeroFormData(prev => ({ ...prev, moveSize: value }))}
                            >
                              <SelectTrigger className="h-10 pl-10 bg-gray-50/80 border-gray-200 rounded-lg text-sm" data-testid="select-hero-size">
                                <SelectValue placeholder="Move Size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Studio">Studio</SelectItem>
                                <SelectItem value="1 Bedroom">1 Bedroom</SelectItem>
                                <SelectItem value="2 Bedroom">2 Bedroom</SelectItem>
                                <SelectItem value="3 Bedroom">3 Bedroom</SelectItem>
                                <SelectItem value="4+ Bedroom">4+ Bedroom</SelectItem>
                                <SelectItem value="Office">Office</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                            <PopoverTrigger asChild>
                              <button
                                type="button"
                                className="h-10 w-full flex items-center gap-2 pl-3 pr-3 bg-gray-50/80 border border-gray-200 rounded-lg text-sm text-left hover:bg-white hover:border-primary transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                                data-testid="input-hero-date"
                              >
                                <Calendar className="h-4 w-4 text-gray-400 shrink-0" />
                                <span className={selectedDate ? "text-foreground" : "text-gray-500"}>
                                  {selectedDate ? format(selectedDate, "MMM d, yyyy") : "Move Date"}
                                </span>
                              </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <CalendarWidget
                                mode="single"
                                selected={selectedDate}
                                onSelect={(date) => {
                                  setSelectedDate(date);
                                  if (date) {
                                    setHeroFormData(prev => ({ ...prev, moveDate: format(date, "yyyy-MM-dd") }));
                                  }
                                  setCalendarOpen(false);
                                }}
                                disabled={(date) => date < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full font-bold h-11 rounded-lg shadow-lg shadow-primary/30 transition-all duration-200 group text-base" 
                          disabled={quoteMutation.isPending}
                          data-testid="button-hero-cta-submit"
                        >
                          {quoteMutation.isPending ? (
                            <span className="flex items-center gap-2">
                              <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Submitting...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              Get Free Estimate
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          )}
                        </Button>
                      </form>

                      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-center gap-4 text-[10px] text-gray-400">
                        <div className="flex items-center gap-1">
                          <Shield className="h-3 w-3 text-primary/70" />
                          <span>Insured</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-primary/70 fill-primary/70" />
                          <span>5.0 Rating</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-primary/70" />
                          <span>Fast</span>
                        </div>
                      </div>
                    </>
                  )}
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

        {/* Our Locations - Google Maps */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Locations</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2332] mb-3">
                Serving <span className="text-primary">Coast to Coast</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Two locations to serve you better — Ottawa and Vancouver
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Ottawa Location */}
              <div className="group" data-testid="location-ottawa">
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.2124912694585!2d-75.72008751287629!3d45.34452269648421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccdfd66478c4cbf%3A0xa28f0b05d60667dc!2sPrestige%20Moving%20Inc%20%7C%20Ottawa%20Long%20Distance%20Movers!5e0!3m2!1sen!2sca!4v1770408936619!5m2!1sen!2sca"
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Prestige Moving Ottawa Location"
                      className="w-full"
                      data-testid="map-ottawa"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/15 rounded-xl">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#1A2332]">Ottawa</h3>
                        <p className="text-sm text-gray-400">Headquarters</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">50 Colonnade Rd Unit 200B, Ottawa, ON K2E 7J6</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <a href="tel:613-600-4000" className="inline-flex items-center gap-1.5 bg-primary/15 text-primary rounded-full px-3 py-1.5 text-xs font-semibold hover:bg-primary/25 transition-colors" data-testid="link-ottawa-phone">
                        <Phone className="h-3 w-3" />
                        (613) 600-4000
                      </a>
                      <a href="mailto:Ottawa@prestigemoving.ca" className="inline-flex items-center gap-1.5 bg-primary/15 text-primary rounded-full px-3 py-1.5 text-xs font-semibold hover:bg-primary/25 transition-colors" data-testid="link-ottawa-email">
                        <Mail className="h-3 w-3" />
                        Ottawa@prestigemoving.ca
                      </a>
                      <a href="https://maps.app.goo.gl/5grQGZ18k1GrxuEj7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 rounded-full px-3 py-1.5 text-xs font-semibold hover:bg-gray-200 transition-colors" data-testid="link-ottawa-directions">
                        <ArrowRight className="h-3 w-3" />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vancouver Location */}
              <div className="group" data-testid="location-vancouver">
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.13926677419!2d-123.01141771135478!3d49.2548061976165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548677617fa0fd25%3A0x5528c843959439c9!2sPrestige%20Moving%20Inc%20%2F%20Movers%20in%20Vancouver!5e0!3m2!1sen!2sca!4v1770409004781!5m2!1sen!2sca"
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Prestige Moving Vancouver Location"
                      className="w-full"
                      data-testid="map-vancouver"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/15 rounded-xl">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#1A2332]">Vancouver</h3>
                        <p className="text-sm text-gray-400">West Coast Office</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">4385 Canada Wy, Burnaby, BC V5G 1J3</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <a href="tel:604-616-6066" className="inline-flex items-center gap-1.5 bg-primary/15 text-primary rounded-full px-3 py-1.5 text-xs font-semibold hover:bg-primary/25 transition-colors" data-testid="link-vancouver-phone">
                        <Phone className="h-3 w-3" />
                        (604) 616-6066
                      </a>
                      <a href="mailto:vancouver@prestigemoving.ca" className="inline-flex items-center gap-1.5 bg-primary/15 text-primary rounded-full px-3 py-1.5 text-xs font-semibold hover:bg-primary/25 transition-colors" data-testid="link-vancouver-email">
                        <Mail className="h-3 w-3" />
                        vancouver@prestigemoving.ca
                      </a>
                      <a href="https://maps.app.goo.gl/GKvmDPf3vZcTmRRw8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 rounded-full px-3 py-1.5 text-xs font-semibold hover:bg-gray-200 transition-colors" data-testid="link-vancouver-directions">
                        <ArrowRight className="h-3 w-3" />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Moving Services - Modern Bento Grid */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Parliament Hill Truck Image */}
            <div className="mb-12 max-w-3xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20 p-1.5">
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src="/images/prestige-fleet.webp"
                    alt="Prestige Moving fleet of trucks"
                    className="w-full h-auto object-cover"
                    data-testid="image-parliament-truck"
                  />
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-2xl -z-10 blur-md"></div>
              </div>
            </div>

            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="relative inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-gradient-to-br from-primary/25 via-primary/15 to-primary/25 border border-primary/40 rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-3 mb-6 shadow-xl shadow-primary/20 backdrop-blur-sm overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg shadow-primary/30">
                  <Sparkles className="h-5 w-5 sm:h-4 sm:w-4 text-[#1A2332]" />
                </div>
                <span className="text-base sm:text-sm font-bold text-[#1A2332] text-center sm:text-left">Greater Ottawa's Top-Rated Moving Company</span>
                <div className="flex gap-1 sm:gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-3.5 sm:w-3.5 fill-primary text-primary drop-shadow-sm" />
                  ))}
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A2332] mb-6">
                Prestige <span className="text-primary">Moving in Ottawa</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                At <strong className="text-[#1A2332]">Prestige Moving</strong>, we deliver an unmatched moving experience with top-of-the-line quality that sets us apart from the competition. Our <strong className="text-[#1A2332]">Ottawa movers</strong> provide white-glove service across Greater Ottawa, Kanata, Orleans, Nepean, Barrhaven, Gloucester, and the entire National Capital Region — because your belongings deserve nothing less than prestige.
              </p>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                Whether you're moving into your first apartment in Centretown, upgrading to a family home in Barrhaven, or relocating your business in the downtown core, our <strong className="text-[#1A2332]">professional movers</strong> handle every detail with care. From expert packing and furniture disassembly to safe transport and setup at your new location, we take the stress out of moving day so you can focus on what matters most. With <strong className="text-[#1A2332]">350+ five-star reviews</strong>, fully insured teams, and transparent pricing with no hidden fees, it's no wonder thousands of Ottawa families trust Prestige Moving for their most important moves.
              </p>
            </div>

            {/* Featured Services - Equal Size Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
              {/* Residential Moving */}
              <Link href="/services/residential-moving">
                <div className="group relative h-[320px] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500" data-testid="service-card-residential">
                  <img 
                    src={residentialImage} 
                    alt="Residential Moving Services" 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332] via-[#1A2332]/60 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <Badge className="bg-primary text-[#1A2332] font-bold mb-3 w-fit shadow-lg">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Most Popular
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Residential Moving</h3>
                    <p className="text-white/80 text-sm mb-3">Apartments, condos, and houses — handled with care</p>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Commercial Moving */}
              <Link href="/services/commercial-moving">
                <div className="group relative h-[320px] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500" data-testid="service-card-commercial">
                  <img 
                    src={commercialImage} 
                    alt="Commercial Moving Services" 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332] via-[#1A2332]/60 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <Badge className="bg-[#C5A572] text-white font-bold mb-3 w-fit shadow-lg">
                      <Building2 className="h-3 w-3 mr-1" />
                      Business
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Commercial Moving</h3>
                    <p className="text-white/80 text-sm mb-3">Office relocations and business moves — minimal downtime</p>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Long Distance Moving */}
              <Link href="/services/long-distance-moving">
                <div className="group relative h-[320px] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500" data-testid="service-card-long-distance">
                  <img 
                    src={longDistanceImage} 
                    alt="Long Distance Moving Services" 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332] via-[#1A2332]/60 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <Badge className="bg-[#C5A572] text-white font-bold mb-3 w-fit shadow-lg">
                      <MapPin className="h-3 w-3 mr-1" />
                      Cross-Canada
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Long Distance Moving</h3>
                    <p className="text-white/80 text-sm mb-3">Coast-to-coast across Canada — reliable delivery</p>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Packing Services */}
              <Link href="/services/packing-services">
                <div className="group relative h-[320px] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500" data-testid="service-card-packing">
                  <img 
                    src={packingImage} 
                    alt="Professional Packing Services" 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332] via-[#1A2332]/60 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <Badge className="bg-[#C5A572] text-white font-bold mb-3 w-fit shadow-lg">
                      <Package className="h-3 w-3 mr-1" />
                      Full-Service
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Packing Services</h3>
                    <p className="text-white/80 text-sm mb-3">Professional packing with quality materials included</p>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </section>

        {/* Google Reviews Section - Modern Design */}
        <section className="relative z-20 py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100 mb-6">
                <svg className="h-8 w-auto" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                  <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                  <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                  <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
                  <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
                  <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
                  <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"/>
                </svg>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-gray-900">{averageRating}</span>
                <span className="text-gray-500">({totalReviewCount} reviews)</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                What Our Customers Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real reviews from real customers who trusted us with their moves
              </p>
            </div>

            {/* Reviews Grid */}
            <div className="relative">
              {/* Navigation Buttons */}
              <button 
                onClick={() => setReviewIndex((prev) => (prev - 1 + reviewsList.length) % reviewsList.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all border border-gray-200 hidden md:flex"
                aria-label="Previous review"
                data-testid="button-review-prev"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>

              <button 
                onClick={() => setReviewIndex((prev) => (prev + 1) % reviewsList.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all border border-gray-200 hidden md:flex"
                aria-label="Next review"
                data-testid="button-review-next"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>

              {/* Mobile: Single Card */}
              <div className="md:hidden">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(reviewsList[reviewIndex]?.rating || 5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed line-clamp-4">
                    "{reviewsList[reviewIndex]?.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    {reviewsList[reviewIndex]?.profilePhoto ? (
                      <img 
                        src={reviewsList[reviewIndex].profilePhoto} 
                        alt={reviewsList[reviewIndex].name}
                        className="w-12 h-12 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: reviewsList[reviewIndex]?.color || '#6366f1' }}
                      >
                        {reviewsList[reviewIndex]?.initial}
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-gray-900">{reviewsList[reviewIndex]?.name}</div>
                      <div className="text-sm text-gray-500">{reviewsList[reviewIndex]?.time}</div>
                    </div>
                  </div>
                </div>
                {/* Mobile Navigation */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button 
                    onClick={() => setReviewIndex((prev) => (prev - 1 + reviewsList.length) % reviewsList.length)}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    aria-label="Previous review"
                    data-testid="button-review-prev-mobile"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <div className="flex gap-2">
                    {reviewsList.slice(0, 5).map((_, idx) => (
                      <div 
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-colors ${idx === reviewIndex % 5 ? 'bg-primary' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={() => setReviewIndex((prev) => (prev + 1) % reviewsList.length)}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    aria-label="Next review"
                    data-testid="button-review-next-mobile"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Desktop: 3 Cards Grid */}
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                {[0, 1, 2].map((offset) => {
                  const index = (reviewIndex + offset) % reviewsList.length;
                  const review = reviewsList[index];
                  return (
                    <div 
                      key={`review-${reviewIndex}-${offset}`}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(review?.rating || 5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed line-clamp-4 min-h-[96px]">
                        "{review?.text}"
                      </p>
                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                        {review?.profilePhoto ? (
                          <img 
                            src={review.profilePhoto} 
                            alt={review.name}
                            className="w-10 h-10 rounded-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                            style={{ backgroundColor: review?.color || '#6366f1' }}
                          >
                            {review?.initial}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 truncate">{review?.name}</div>
                          <div className="text-sm text-gray-500">{review?.time}</div>
                        </div>
                        <svg className="h-6 w-6 flex-shrink-0 opacity-60" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Desktop Pagination Dots */}
              <div className="hidden md:flex justify-center gap-2 mt-8">
                {[...Array(Math.min(reviewsList.length, 7))].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setReviewIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === reviewIndex % 7 
                        ? 'bg-primary w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Moving Solutions Section */}
        <section className="relative z-20 py-16 md:py-20 bg-white" data-testid="section-solutions">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <HomeIcon className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2332] mb-4">
                Residential and Commercial <span className="text-primary">Moving Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 mb-2">Local and Long Distance Moving</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-4">
                    Choose the Right Moving Package for You
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    At Prestige Moving, we offer tailored packages to suit different moving needs, ensuring a smooth and stress-free experience. Select from our Premium, Deluxe, or Diamond packages, each designed with professional movers, high-quality packing materials, and efficient service.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/book">
                      <Button size="lg" className="font-bold shadow-lg" data-testid="button-solutions-quote">
                        Get Your Free Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button size="lg" variant="outline" className="font-bold" data-testid="button-solutions-services">
                        View All Services
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-primary/40 hover:shadow-md transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-[#1A2332] font-bold text-lg mb-1">Premium</h4>
                    <p className="text-gray-500 text-sm">2 Movers + Truck</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center border-2 border-primary/50 hover:shadow-md transition-all duration-300 hover:scale-105 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-[#1A2332] text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </div>
                    <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-[#1A2332] font-bold text-lg mb-1">Deluxe</h4>
                    <p className="text-gray-500 text-sm">3 Movers + 26ft Truck</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-primary/40 hover:shadow-md transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Crown className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-[#1A2332] font-bold text-lg mb-1">Diamond</h4>
                    <p className="text-gray-500 text-sm">4 Movers + 2 Trucks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges Section - Modern & Interactive */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-[#1A2332] mb-2">
                Your Trusted Moving Partners
              </h2>
              <p className="text-gray-500">Industry-leading certifications and customer satisfaction</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* BBB A+ */}
              <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-primary/40 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-primary/10" data-testid="badge-bbb">
                <div className="relative">
                  <div className="h-20 w-20 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-amber-500/30 transition-shadow rotate-3 group-hover:rotate-0">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2332] mb-1">BBB A+ Rating</h3>
                  <p className="text-sm text-gray-500">Accredited Business</p>
                </div>
              </div>

              {/* WSIB Ontario Certified */}
              <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-blue-400/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10" data-testid="badge-wsib">
                <div className="relative">
                  <div className="h-20 w-20 mx-auto mb-4 bg-gradient-to-br from-[#0066CC] to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-[#0066CC]/30 transition-shadow -rotate-3 group-hover:rotate-0">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2332] mb-1">WSIB Ontario</h3>
                  <p className="text-sm text-gray-500">Certified & Insured</p>
                </div>
              </div>

              {/* 5-Star Google */}
              <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-primary/40 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-primary/10" data-testid="badge-google">
                <div className="relative">
                  <div className="h-20 w-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/30 transition-shadow rotate-3 group-hover:rotate-0">
                    <Star className="h-10 w-10 text-white fill-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2332] mb-1">5-Star Google</h3>
                  <p className="text-sm text-gray-500">500+ Happy Customers</p>
                </div>
              </div>

              {/* Fully Licensed */}
              <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-primary/40 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-primary/10" data-testid="badge-licensed">
                <div className="relative">
                  <div className="h-20 w-20 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-shadow -rotate-3 group-hover:rotate-0">
                    <CheckCircle2 className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2332] mb-1">Fully Licensed</h3>
                  <p className="text-sm text-gray-500">Professional & Legal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Packages Section - Light Background */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              {/* Enhanced Badge with Glow */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary via-primary to-primary/90 text-[#1A2332] px-6 py-2.5 rounded-full mb-6 shadow-lg shadow-primary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                <DollarSign className="h-5 w-5 relative z-10" />
                <span className="font-bold text-sm relative z-10">Transparent Pricing</span>
              </div>
              
              {/* Enhanced Title with Gradient */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-[#1A2332] via-[#2a3a4d] to-[#1A2332] bg-clip-text text-transparent">Moving</span>{" "}
                <span className="bg-gradient-to-r from-primary via-yellow-500 to-primary bg-clip-text text-transparent">Packages</span>
              </h2>
              
              {/* Enhanced Description */}
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                Choose the <strong className="text-[#1A2332]">perfect package</strong> for your move. All packages include professional movers, moving truck, and <strong className="text-primary">full protection</strong> for your belongings.
              </p>

              {/* Residential / Commercial Toggle */}
              <div className="inline-flex items-center bg-gray-100 rounded-full p-1.5 gap-1" data-testid="pricing-toggle">
                <button
                  onClick={() => setPricingType("residential")}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    pricingType === "residential"
                      ? "bg-[#1A2332] text-white shadow-lg"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  data-testid="toggle-residential"
                >
                  <HomeIcon className="h-4 w-4" />
                  Residential
                </button>
                <button
                  onClick={() => setPricingType("commercial")}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    pricingType === "commercial"
                      ? "bg-[#1A2332] text-white shadow-lg"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  data-testid="toggle-commercial"
                >
                  <Building2 className="h-4 w-4" />
                  Commercial
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {/* Premium Package */}
                <div className="relative bg-white rounded-3xl border-2 border-gray-200 p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300" data-testid="pricing-premium">
                  <div className="absolute -top-4 left-6">
                    <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">01</span>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-[#1A2332] mb-2">PREMIUM PACKAGE</h3>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-3xl font-black text-primary">${pricingType === "residential" ? "155" : "165"}</span>
                      <span className="text-gray-600">/hr</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">Minimum 3 hours + ${pricingType === "residential" ? "155" : "165"} travel fee within Ottawa</p>
                  </div>
                  
                  <div className="mb-6 p-3 bg-primary/10 rounded-xl">
                    <p className="text-sm font-semibold text-[#1A2332]">
                      <HomeIcon className="h-4 w-4 inline mr-2 text-primary" />
                      {pricingType === "residential" 
                        ? "Ideal for: Bachelor apartments, 1-2 bedroom moves" 
                        : "Ideal for: Small offices, retail spaces"}
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
                    <Star className="h-3 w-3 inline text-primary mr-1" /> Need extra help? Add an additional mover for $50/hr and an extra $50 travel fee.
                  </p>

                  <Link href="/book">
                    <Button variant="outline" className="w-full font-bold" data-testid="button-book-premium">
                      BOOK YOUR MOVE
                    </Button>
                  </Link>
                </div>

                {/* Deluxe Package - Featured */}
                <div className="relative bg-[#1A2332] rounded-3xl p-8 shadow-2xl transform md:-translate-y-4" data-testid="pricing-deluxe">
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
                      <span className="text-3xl font-black text-primary">${pricingType === "residential" ? "195" : "205"}</span>
                      <span className="text-white/70">/hr</span>
                    </div>
                    <p className="text-sm text-white/60 font-medium">Minimum 3 hours + ${pricingType === "residential" ? "195" : "205"} travel fee within Ottawa</p>
                  </div>
                  
                  <div className="mb-6 p-3 bg-primary/20 rounded-xl">
                    <p className="text-sm font-semibold text-white">
                      <Building2 className="h-4 w-4 inline mr-2 text-primary" />
                      {pricingType === "residential"
                        ? "Ideal for: 2-3 bedroom moves"
                        : "Ideal for: Mid-size offices, warehouses"}
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
                    The Deluxe Package is designed for medium-sized moves, ensuring every piece of furniture is carefully wrapped, transported, and reassembled with precision.
                  </p>

                  <Link href="/book">
                    <Button className="w-full font-bold shadow-lg shadow-primary/30" data-testid="button-book-deluxe">
                      BOOK YOUR MOVE
                    </Button>
                  </Link>
                </div>

                {/* Diamond Package */}
                <div className="relative bg-white rounded-3xl border-2 border-gray-200 p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300" data-testid="pricing-diamond">
                  <div className="absolute -top-4 left-6">
                    <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">03</span>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-[#1A2332] mb-2">DIAMOND PACKAGE</h3>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-3xl font-black text-primary">${pricingType === "residential" ? "315" : "325"}</span>
                      <span className="text-gray-600">/hr</span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">Minimum 3 hours + ${pricingType === "residential" ? "315" : "325"} travel fee within Ottawa</p>
                  </div>
                  
                  <div className="mb-6 p-3 bg-primary/10 rounded-xl">
                    <p className="text-sm font-semibold text-[#1A2332]">
                      <Crown className="h-4 w-4 inline mr-2 text-primary" />
                      {pricingType === "residential"
                        ? "Ideal for: Large homes (3-5 bedrooms)"
                        : "Ideal for: Large offices, full relocations"}
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
                        Disassembly and reassembly of all necessary furniture
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400">—</span>
                        Extra tape and additional shrink wrap included
                      </li>
                    </ul>
                  </div>

                  <p className="text-xs text-gray-500 mb-6 p-3 bg-gray-50 rounded-lg">
                    For those with larger moves, the Diamond Package provides top-tier service with additional movers and trucks to ensure an efficient relocation.
                  </p>

                  <Link href="/book">
                    <Button variant="outline" className="w-full font-bold" data-testid="button-book-diamond">
                      BOOK YOUR MOVE
                    </Button>
                  </Link>
                </div>
              </div>

            {/* Pricing Note */}
            <div className="mt-10 text-center">
              <p className="text-gray-500 text-sm">
                All prices are subject to change based on specific move requirements. 
                <Link href="/book" className="text-primary font-semibold hover:underline ml-1">
                  Get a personalized quote
                </Link>
              </p>
            </div>

            {/* SEO Content Section - Ottawa Movers */}
            <div className="mt-20 border-t border-gray-200 pt-16">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-6">
                    Why Choose Prestige as Your Ottawa Movers?
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                      When searching for <strong>Ottawa movers</strong> you can trust, Prestige Moving stands out as the premier choice for residential and commercial relocations. With over 15 years of experience serving the Greater Ottawa Area, we've built our reputation on reliability, professionalism, and exceptional customer care.
                    </p>
                    <p>
                      Our team of <strong>professional movers in Ottawa</strong> handles everything from small apartment moves in downtown Ottawa to large family home relocations in the suburbs. Whether you're moving within Ottawa, relocating to Kanata, Orleans, Nepean, or anywhere across Ontario, our experienced crews ensure your belongings arrive safely and on time.
                    </p>
                    <p>
                      As a locally-owned <strong>Ottawa moving company</strong>, we understand the unique challenges of moving in our city—from navigating narrow downtown streets to coordinating elevator bookings in high-rise buildings. We handle all the logistics so you can focus on settling into your new home.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-6">
                    Full-Service Moving Solutions in Ottawa
                  </h3>
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                      Our comprehensive <strong>moving services in Ottawa</strong> include professional packing, secure loading, careful transportation, and efficient unpacking at your destination. We use high-quality packing materials and industry-leading techniques to protect your furniture, electronics, and cherished belongings.
                    </p>
                    <p>
                      What sets us apart from other <strong>Ottawa movers</strong> is our commitment to transparency and customer satisfaction. We provide detailed, upfront quotes with no hidden fees, and our WSIB certified team treats every item with the care it deserves. From antiques and pianos to office equipment and hot tubs, we have the expertise to move it all.
                    </p>
                    <p>
                      Need <strong>affordable movers in Ottawa</strong>? We offer competitive rates without compromising on quality. Our flexible scheduling includes evening and weekend moves to accommodate your busy lifestyle, and we're available for last-minute relocations when you need us most.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-12 bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-6 text-center">
                  Areas We Serve as Ottawa's Trusted Movers
                </h3>
                <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
                  Our <strong className="text-[#1A2332]">Ottawa moving company</strong> provides professional moving services throughout the National Capital Region and beyond. We regularly serve the following communities:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
                  {[
                    "Downtown Ottawa", "Centretown", "The Glebe", "Westboro",
                    "Kanata", "Orleans", "Nepean", "Barrhaven",
                    "Gloucester", "Stittsville", "Manotick", "Greely",
                    "Rockland", "Gatineau", "Hull", "Aylmer",
                    "Chelsea", "Kemptville", "Carleton Place"
                  ].map((area) => (
                    <div key={area} className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#1A2332] text-sm font-medium hover:border-primary/40 hover:shadow-sm transition-all">
                      {area}
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <p className="text-gray-500 text-sm">
                    Don't see your area? We service all of Ontario including long-distance moves across Canada.
                  </p>
                </div>
              </div>

              {/* Additional SEO Content */}
              <div className="mt-12 grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <TruckIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1A2332] mb-3">Local Ottawa Movers</h4>
                  <p className="text-gray-600 text-sm">
                    For local moves within Ottawa and the National Capital Region, our teams provide same-day service with hourly rates starting at competitive prices. We know the city inside and out, ensuring efficient routes and timely delivery.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1A2332] mb-3">Long Distance Moving from Ottawa</h4>
                  <p className="text-gray-600 text-sm">
                    Moving out of Ottawa? Our long-distance moving services connect you to destinations across Ontario, Quebec, and all of Canada. GPS tracking keeps you informed every step of the way.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1A2332] mb-3">Commercial Movers Ottawa</h4>
                  <p className="text-gray-600 text-sm">
                    Office relocations require precision and minimal downtime. Our commercial moving team specializes in after-hours and weekend moves, IT equipment handling, and complete project management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-3">Specialty Moving Services</h3>
              <p className="text-gray-500">Expert handling for all your unique moving needs</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {[
                { title: "Moving Supplies", icon: Box, href: "/services/moving-supplies", desc: "Boxes & materials" },
                { title: "Student Moving", icon: GraduationCap, href: "/services/student-moving", desc: "Budget-friendly" },
                { title: "Storage", icon: Warehouse, href: "/services/storage-solutions", desc: "Secure facilities" },
                { title: "Specialty Items", icon: Dumbbell, href: "/services/specialty-item-moving", desc: "Hot tubs & more" },
                { title: "Antiques", icon: Crown, href: "/services/antique-moving", desc: "Careful handling" },
                { title: "Piano Moving", icon: Music, href: "/services/piano-moving", desc: "Specialized transport" },
                { title: "Senior Moving", icon: Heart, href: "/services/senior-moving", desc: "Compassionate care" },
                { title: "Military Moving", icon: Medal, href: "/services/military-moving", desc: "PCS relocations" },
              ].map((service) => (
                <Link key={service.href} href={service.href}>
                  <div className="group bg-white border border-gray-200 rounded-2xl p-4 h-[120px] flex flex-col items-center justify-center text-center hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer" data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="h-12 w-12 bg-primary/15 rounded-xl flex items-center justify-center group-hover:bg-primary/25 transition-colors mb-3">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-bold text-[#1A2332] text-xs leading-tight">{service.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Google Maps Location */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Find Us</h2>
              <p className="text-gray-600">Proudly serving Ottawa and surrounding areas</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d-75.7369214!3d45.3445228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccdfd66478c4cbf%3A0xa28f0b05d60667dc!2sPrestige%20Moving%20Inc%20%7C%20Ottawa%20Long%20Distance%20Movers!5e1!3m2!1sen!2sca!4v1770075294840!5m2!1sen!2sca" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Prestige Moving Ottawa Location"
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* About Company Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/40" data-testid="badge-about">
                  About Prestige Moving
                </Badge>
                <h2 className="text-4xl md:text-5xl font-black text-[#1A2332] mb-6">
                  Greater Ottawa Movers You Can Trust
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  As the top-rated <strong className="text-[#1A2332]">movers in Ottawa</strong>, Prestige Moving has been helping families and businesses relocate with care and professionalism. Our team of <strong className="text-[#1A2332]">Ottawa movers</strong> owns our fleet of trucks and treats every move as if it were their own. Serving Greater Ottawa, Kanata, and all of the National Capital Region.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Family owned and operated with first-rate customer service",
                    "Fully bonded, licensed, and insured",
                    "BBB A+ rating with proven track record",
                    "Professional packing and unpacking services",
                    "Secure storage facilities available in Ottawa",
                    "Our own fleet of trucks for reliable service"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`about-feature-${index}`}>
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-[#1A2332] font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/book">
                  <Button size="lg" className="font-bold shadow-lg shadow-primary/30" data-testid="button-about-quote">
                    GET YOUR FREE QUOTE
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 lg:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-primary/40 hover:shadow-md transition-all duration-300 group" data-testid="about-stat-1">
                      <Truck className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-3xl font-black text-[#1A2332]">15+</div>
                      <div className="text-sm text-gray-500">Moving Trucks</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-primary/40 hover:shadow-md transition-all duration-300 group" data-testid="about-stat-2">
                      <Users className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-3xl font-black text-[#1A2332]">50+</div>
                      <div className="text-sm text-gray-500">Team Members</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-primary/40 hover:shadow-md transition-all duration-300 group" data-testid="about-stat-3">
                      <Clock className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-3xl font-black text-[#1A2332]">15</div>
                      <div className="text-sm text-gray-500">Years Experience</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-primary/40 hover:shadow-md transition-all duration-300 group" data-testid="about-stat-4">
                      <ThumbsUp className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <div className="text-3xl font-black text-[#1A2332]">100%</div>
                      <div className="text-sm text-gray-500">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background via-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">The Prestige Difference</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                Why Choose Prestige Moving
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The difference is in the details — here's what sets us apart from every other moving company in Ottawa
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { image: whyTransparentPricingImg, title: "Transparent Pricing", description: "No hidden fees or surprise charges. Get a detailed quote upfront that covers everything.", stat: "100%", statLabel: "Upfront" },
                { image: whyFullyInsuredImg, title: "Fully Insured", description: "Licensed and insured. Your belongings are protected throughout the entire move.", stat: "$2M+", statLabel: "Coverage" },
                { image: whyOnTimeImg, title: "On-Time Guarantee", description: "We arrive when promised. Your time is valuable, and we respect that.", stat: "99%", statLabel: "On Time" },
                { image: whyProfessionalTeamImg, title: "Professional Team", description: "Trained, background-checked movers who treat your belongings like their own.", stat: "50+", statLabel: "Experts" },
                { image: whyModernFleetImg, title: "Modern Fleet", description: "Well-maintained trucks equipped with the latest moving equipment and tools.", stat: "20+", statLabel: "Vehicles" },
                { image: whySupportImg, title: "24/7 Support", description: "Questions? Our customer service team is always here to help you.", stat: "24/7", statLabel: "Available" }
              ].map((item, index) => (
                <Card key={index} className="group relative overflow-visible border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5" data-testid={`why-choose-${index}`}>
                  <div className="p-6 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-5">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                      <img
                        src={item.image}
                        alt={item.title}
                        className="relative w-full h-full object-contain rounded-2xl group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-primary/10 rounded-full px-3 py-1 mb-3">
                      <span className="text-sm font-black text-primary">{item.stat}</span>
                      <span className="text-xs text-primary/70">{item.statLabel}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas & SEO Links Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">Ottawa's Most Trusted Moving Company</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Serving every corner of Ottawa with professional, fully insured moving services. Find movers near you.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-lg font-bold text-[#1A2332] mb-4 flex items-center gap-2">
                  <TruckIcon className="h-5 w-5 text-[#C5A572]" />
                  Ottawa Moving Services
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  <Link href="/ottawa-movers" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-ottawa-movers">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Ottawa Movers
                  </Link>
                  <Link href="/moving-company-ottawa" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-moving-company">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Moving Company Ottawa
                  </Link>
                  <Link href="/professional-movers-ottawa" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-professional-movers">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Professional Movers
                  </Link>
                  <Link href="/best-movers-ottawa" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-best-movers">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Best Movers Ottawa
                  </Link>
                  <Link href="/local-movers-ottawa" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-local-movers">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Local Movers Ottawa
                  </Link>
                  <Link href="/affordable-movers-ottawa" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-affordable-movers">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Affordable Movers
                  </Link>
                  <Link href="/licensed-movers-ottawa" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-licensed-movers">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Licensed Movers
                  </Link>
                  <Link href="/insured-movers-ottawa" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-insured-movers">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Insured Movers
                  </Link>
                  <Link href="/residential-movers-ottawa" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-residential-movers">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Residential Movers
                  </Link>
                  <Link href="/commercial-movers-ottawa" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-commercial-movers">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Commercial Movers
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1A2332] mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#C5A572]" />
                  Neighbourhood Movers
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  <Link href="/movers-in-orleans" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-movers-orleans">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Movers in Orleans
                  </Link>
                  <Link href="/movers-in-barrhaven" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-movers-barrhaven">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Movers in Barrhaven
                  </Link>
                  <Link href="/movers-in-nepean" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-movers-nepean">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Movers in Nepean
                  </Link>
                  <Link href="/movers-in-kanata" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-movers-kanata">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Movers in Kanata
                  </Link>
                  <Link href="/movers-in-gloucester" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-movers-gloucester">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Movers in Gloucester
                  </Link>
                  <Link href="/movers-in-stittsville" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-movers-stittsville">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Movers in Stittsville
                  </Link>
                  <Link href="/movers-in-westboro" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-movers-westboro">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Movers in Westboro
                  </Link>
                  <Link href="/movers-in-alta-vista" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-movers-altavista">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Movers in Alta Vista
                  </Link>
                  <Link href="/movers-in-riverside-south" className="text-gray-600 hover:text-[#C5A572] transition-colors text-sm flex items-center gap-1.5" data-testid="link-seo-movers-riverside-south">
                    <ArrowRight className="h-3 w-3 text-[#C5A572] shrink-0" />Movers in Riverside South
                  </Link>
                </div>
                <div className="mt-8 p-5 bg-white rounded-md border border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#C5A572]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="h-5 w-5 text-[#C5A572]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A2332] text-sm">Need movers in your area?</p>
                      <p className="text-gray-500 text-sm mt-1">Call us at <a href="tel:6136004000" className="text-[#C5A572] font-semibold hover:underline">(613) 600-4000</a> or <Link href="/book" className="text-[#C5A572] font-semibold hover:underline">get a free quote online</Link>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-white">
          {/* Decorative gold blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">Free No-Obligation Quote</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A2332] mb-6 leading-tight">
                  Ready to Make<br />
                  <span className="text-primary inline-block mt-2">Your Move?</span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                  Join over 10,000 happy customers who trusted us with their moves. Get your personalized quote in minutes.
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">No Hidden Fees</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Fully Insured</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Same-Day Response</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/book">
                    <Button size="lg" className="text-lg font-bold px-10 py-7 shadow-xl shadow-primary/30 group" data-testid="button-cta-quote">
                      GET FREE QUOTE
                      <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <a href="tel:(613) 600-4000">
                    <Button size="lg" variant="outline" className="text-lg font-bold px-10 py-7" data-testid="button-cta-call">
                      <Phone className="h-5 w-5 mr-2" />
                      (613) 600-4000
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Side - Interactive Stats Card */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl transform scale-105" />
                  
                  <div className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4 shadow-lg">
                        <TruckIcon className="h-8 w-8 text-[#1A2332]" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1A2332] mb-2">Why Choose Us?</h3>
                      <p className="text-gray-500 text-sm">Trusted by thousands of families</p>
                    </div>

                    {/* Animated Stats */}
                    <div className="space-y-4">
                      <div className="group p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-primary/40 hover:shadow-sm transition-all duration-300 cursor-default">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center">
                              <Users className="h-5 w-5 text-primary" />
                            </div>
                            <span className="text-[#1A2332] font-medium">Happy Customers</span>
                          </div>
                          <span className="text-2xl font-black text-primary group-hover:scale-110 transition-transform">10,000+</span>
                        </div>
                      </div>

                      <div className="group p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-primary/40 hover:shadow-sm transition-all duration-300 cursor-default">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center">
                              <Star className="h-5 w-5 text-primary fill-primary" />
                            </div>
                            <span className="text-[#1A2332] font-medium">Google Rating</span>
                          </div>
                          <span className="text-2xl font-black text-primary group-hover:scale-110 transition-transform">5.0</span>
                        </div>
                      </div>

                      <div className="group p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-primary/40 hover:shadow-sm transition-all duration-300 cursor-default">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center">
                              <Clock className="h-5 w-5 text-primary" />
                            </div>
                            <span className="text-[#1A2332] font-medium">Years Experience</span>
                          </div>
                          <span className="text-2xl font-black text-primary group-hover:scale-110 transition-transform">15+</span>
                        </div>
                      </div>

                      <div className="group p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-primary/40 hover:shadow-sm transition-all duration-300 cursor-default">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center">
                              <Shield className="h-5 w-5 text-primary" />
                            </div>
                            <span className="text-[#1A2332] font-medium">Satisfaction Rate</span>
                          </div>
                          <span className="text-2xl font-black text-primary group-hover:scale-110 transition-transform">100%</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Badge */}
                    <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                      <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
                        <Award className="h-4 w-4 text-primary" />
                        <span>BBB A+ Rated • Fully Insured • Licensed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SharedFooter />
      </div>
    </>
  );
}
