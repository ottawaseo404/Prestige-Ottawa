import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  CheckCircle2,
  Crown,
  Shield,
  Package,
  Gem,
  Star,
  ArrowRight,
  Mail,
  User,
  ChevronRight,
  ChevronLeft,
  Award,
  Loader2,
  Home,
  Box,
  Music,
  Warehouse,
  Truck,
  MapPin,
  Clock,
  Camera,
  Sparkles,
  Heart,
  GlassWater,
  Frame,
  Armchair,
  Timer,
  Zap,
  HandHeart,
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { WorkSafeBadge } from "@/components/worksafe-badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import antiqueVideo from "@assets/generated_videos/antique_furniture_moving_care.mp4";

export default function AntiqueMoving() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest("POST", "/api/quote-request", {
        ...formData,
        serviceType: "Antique Moving",
      });
      
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 1 hour with your antique moving quote.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or call us directly at 613-555-1234",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Antique Moving Services Ottawa",
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
        "reviewCount": "250"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Ottawa" },
      { "@type": "City", "name": "Kanata" },
      { "@type": "City", "name": "Orleans" },
      { "@type": "City", "name": "Nepean" },
      { "@type": "City", "name": "Barrhaven" },
      { "@type": "City", "name": "Gloucester" },
      { "@type": "City", "name": "Gatineau" }
    ],
    "description": "Professional antique moving services in Ottawa. Specialists in handling valuable antiques, heirlooms, and collectibles with museum-quality care, climate-controlled transport, and full insurance."
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you protect antiques during a move?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use museum-quality protection including acid-free wrapping materials, custom crating, climate-controlled transport, and white-glove handling techniques. Each antique is individually assessed and protected according to its specific needs."
        }
      },
      {
        "@type": "Question",
        "name": "Are my antiques insured during the move?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive specialized insurance coverage for valuable antiques and heirlooms. We can arrange coverage based on appraised values and provide detailed condition reports before and after the move."
        }
      },
      {
        "@type": "Question",
        "name": "Do you move grandfather clocks and antique furniture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our specialists are trained in handling all types of antique furniture including grandfather clocks, armoires, Victorian pieces, antique desks, and delicate heirlooms. We understand the unique requirements of each piece."
        }
      },
      {
        "@type": "Question",
        "name": "Can you move valuable artwork and sculptures?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in moving oil paintings, sculptures, statues, and fine art. We use custom crating, climate-controlled vehicles, and professional art handling techniques."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide condition reports for antiques?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide detailed condition reports with photographs before and after the move. This documentation is essential for insurance purposes and gives you peace of mind."
        }
      }
    ]
  };

  const testimonials = [
    { 
      name: "Margaret W.", 
      location: "Rockcliffe Park", 
      text: "They moved my grandmother's Victorian furniture collection with extraordinary care. Every piece arrived in perfect condition. The white-glove service exceeded my expectations!", 
      rating: 5, 
      date: "2 weeks ago" 
    },
    { 
      name: "Robert K.", 
      location: "The Glebe", 
      text: "Outstanding handling of our antique grandfather clock and 18th-century armoire. The team understood the historical significance and treated everything with museum-level care.", 
      rating: 5, 
      date: "1 month ago" 
    },
    { 
      name: "Elizabeth C.", 
      location: "Westboro", 
      text: "Moved our entire estate including rare paintings and delicate porcelain. The custom crating and climate-controlled transport gave us complete peace of mind.", 
      rating: 5, 
      date: "3 weeks ago" 
    },
    { 
      name: "James H.", 
      location: "New Edinburgh", 
      text: "Professional team who knew exactly how to handle our collection of antique Chinese ceramics. Detailed condition reports and proper insurance made all the difference.", 
      rating: 5, 
      date: "1 week ago" 
    },
    { 
      name: "Victoria M.", 
      location: "Alta Vista", 
      text: "Trusted them with my late mother's antique furniture and precious artwork. The care and respect they showed was remarkable. Highly recommend for any valuable items.", 
      rating: 5, 
      date: "2 months ago" 
    }
  ];

  const antiqueTypes = [
    {
      title: "Furniture",
      icon: Armchair,
      description: "Victorian, Edwardian & period furniture specialists",
      features: ["Grandfather clocks", "Armoires & wardrobes", "Antique desks", "Period chairs & tables"]
    },
    {
      title: "Art & Paintings",
      icon: Frame,
      description: "Fine art and framed artwork handling",
      features: ["Oil paintings", "Sculptures & statues", "Framed artwork", "Art installations"]
    },
    {
      title: "China & Glassware",
      icon: GlassWater,
      description: "Delicate porcelain and crystal protection",
      features: ["Porcelain collections", "Crystal & glassware", "Fine china sets", "Decorative ceramics"]
    },
    {
      title: "Collectibles",
      icon: Crown,
      description: "Rare and valuable collection moving",
      features: ["Antique clocks", "Musical instruments", "Vintage rugs", "Estate collections"]
    }
  ];

  const neighborhoods = [
    "Rockcliffe Park", "The Glebe", "Westboro", "New Edinburgh", "Alta Vista",
    "Centretown", "Hintonburg", "Wellington West", "Sandy Hill", "Orleans",
    "Kanata", "Nepean", "Barrhaven", "Manotick", "Gatineau"
  ];

  const faqs = [
    {
      question: "How do you protect antiques during a move?",
      answer: "We use museum-quality protection including acid-free wrapping materials, custom crating, climate-controlled transport, and white-glove handling techniques. Each antique is individually assessed and protected according to its specific needs. Our specialists are trained in handling delicate finishes, fragile materials, and irreplaceable items."
    },
    {
      question: "Are my antiques insured during the move?",
      answer: "Yes, we offer comprehensive specialized insurance coverage for valuable antiques and heirlooms. We can arrange coverage based on appraised values and provide detailed condition reports before and after the move. We recommend having valuable items professionally appraised before the move for accurate coverage."
    },
    {
      question: "Do you move grandfather clocks and antique furniture?",
      answer: "Absolutely! Our specialists are trained in handling all types of antique furniture including grandfather clocks, armoires, Victorian pieces, antique desks, secretaries, and delicate heirlooms. Grandfather clocks require special disassembly and secure transport of the movement, weights, and pendulum."
    },
    {
      question: "Can you move valuable artwork and sculptures?",
      answer: "Yes, we specialize in moving oil paintings, sculptures, statues, and fine art. We use custom crating, climate-controlled vehicles, and professional art handling techniques. For extremely valuable pieces, we can coordinate with art handlers and conservators."
    },
    {
      question: "Do you provide condition reports for antiques?",
      answer: "Yes, we provide detailed condition reports with photographs before and after the move. This documentation is essential for insurance purposes and gives you peace of mind that your items are handled with the care they deserve."
    }
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
        <title>Antique Moving Services Ottawa ON | Heirloom & Collectible Movers | Prestige Moving</title>
        <meta name="description" content="Professional antique moving services in Ottawa ON. Museum-quality care for valuable antiques, heirlooms & collectibles. WSIB certified, fully insured, climate-controlled transport. Get your free quote today!" />
        <meta name="keywords" content="antique moving Ottawa, heirloom movers ON, collectible moving service, valuable furniture moving, antique transport Ottawa, Victorian furniture moving, art moving Ottawa, grandfather clock movers, estate moving ON" />
        <meta property="og:title" content="Antique Moving Services Ottawa | Museum-Quality Care | Prestige Moving" />
        <meta property="og:description" content="Ottawa's trusted antique movers. White-glove service for valuable antiques, heirlooms & collectibles. Climate-controlled transport, full insurance coverage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ottawa.prestigemoving.ca/services/antique-moving" />
        <meta property="og:image" content="https://ottawa.prestigemoving.ca/og-image.png" />
        <meta property="og:site_name" content="Prestige Moving Ottawa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Antique Moving Services Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="Museum-quality care for your valuable antiques. White-glove service, climate-controlled transport, full insurance." />
        <meta name="twitter:image" content="https://ottawa.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://ottawa.prestigemoving.ca/services/antique-moving" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="hero-video"
          >
            <source src={antiqueVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332] via-[#1A2332]/90 to-[#1A2332]/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <Badge className="bg-primary/20 text-primary border-primary/40 px-4 py-1.5" data-testid="badge-antique-moving">
                  <Crown className="h-4 w-4 mr-2" />
                  Antique Moving
                </Badge>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/40" data-testid="badge-white-glove">
                  <Zap className="h-3 w-3 mr-1" />
                  White Glove Service
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Ottawa's<br />
                <span className="text-primary">Antique Moving Experts</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                Your antiques and heirlooms deserve museum-quality care. We've safely moved <span className="text-primary font-semibold">2,500+ irreplaceable pieces</span> across Ottawa.
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
                <WorkSafeBadge size="md" data-testid="worksafe-badge-hero" />
                <div className="flex items-center gap-2 text-white/70">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Museum-Quality Care</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Fully Insured</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 py-6" data-testid="section-stats">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "2,500+", label: "Antiques Moved" },
                { value: "5.0", label: "Google Rating" },
                { value: "15+", label: "Years Experience" },
                { value: "100%", label: "Safe Delivery" }
              ].map((stat, index) => (
                <div key={index} data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="text-2xl md:text-4xl font-black text-[#1A2332]">{stat.value}</div>
                  <div className="text-sm font-bold text-[#1A2332]/80 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Our Service */}
        <section className="py-16 md:py-20 bg-white" data-testid="section-about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-primary/10 text-primary mb-4">About Our Service</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                  Ottawa's Premier Antique Moving Specialists
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Your precious heirlooms deserve the utmost care during relocation. <strong>Prestige Moving Ottawa</strong> has been helping collectors and estates safely transport irreplaceable antiques since 2009, earning a reputation as the most trusted antique movers in the National Capital Region.
                  </p>
                  <p>
                    Our trained specialists understand the unique requirements of <strong>antique furniture, fine art, porcelain collections, and valuable heirlooms</strong>. We use museum-quality techniques including acid-free materials, custom crating, and climate-controlled transport.
                  </p>
                  <p>
                    As a <strong>WSIB certified moving company</strong>, we prioritize safety and professionalism. Our comprehensive insurance coverage and detailed condition reports provide complete peace of mind for your valuable collection.
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
              
              <div className="relative rounded-2xl overflow-hidden h-[400px] bg-gradient-to-br from-[#1A2332] to-[#2A3342]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Crown className="h-20 w-20 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-2">Museum-Quality Care</h3>
                    <p className="text-white/70">For Your Irreplaceable Treasures</p>
                  </div>
                </div>
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
                      <div className="font-bold">250+ Reviews</div>
                      <div className="text-sm text-white/70">5-Star Rated on Google</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* White Glove Service Feature Section */}
        <section className="py-16 md:py-20 bg-gray-50" data-testid="section-white-glove">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">White Glove Service</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                The Prestige White Glove Experience
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Museum-quality care and handling for your irreplaceable treasures
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Pre-Move Assessment", description: "Detailed evaluation of each antique's condition, materials, and handling requirements", icon: Camera },
                { title: "Custom Crating", description: "Museum-quality wooden crates built specifically for your valuable pieces", icon: Package },
                { title: "Acid-Free Materials", description: "Archival-quality wrapping to protect delicate finishes and surfaces", icon: Shield },
                { title: "Climate-Controlled Transport", description: "Temperature and humidity-controlled vehicles prevent damage", icon: Clock },
                { title: "Expert Handlers", description: "Trained specialists who understand antique materials and fragility", icon: Crown },
                { title: "Condition Reports", description: "Detailed photo documentation before and after the move", icon: CheckCircle2 }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors" data-testid={`card-white-glove-${index}`}>
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

        {/* Antique Types Tabs */}
        <section className="py-16 md:py-20 bg-[#1A2332]" data-testid="section-antique-types">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Our Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Types of Antiques We Move
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Specialized handling for every type of valuable and collectible
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              {antiqueTypes.map((type, index) => {
                const TypeIcon = type.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                      activeTab === index 
                        ? 'bg-primary text-[#1A2332] shadow-lg shadow-primary/30' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    data-testid={`tab-${type.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <TypeIcon className="h-5 w-5" />
                    {type.title}
                  </button>
                );
              })}
            </div>

            {/* Active Tab Content */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                    {antiqueTypes[activeTab].title}
                  </h3>
                  <p className="text-lg text-white/70 mb-6">
                    {antiqueTypes[activeTab].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {antiqueTypes[activeTab].features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/book">
                    <Button size="lg" className="font-bold" data-testid="button-tab-quote">
                      Get a Quote
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden h-[300px] bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {(() => {
                      const ActiveIcon = antiqueTypes[activeTab].icon;
                      return <ActiveIcon className="h-32 w-32 text-primary/40" />;
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-white" data-testid="section-why-choose">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                The Prestige Difference
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Specialized Insurance", description: "Comprehensive coverage for valuable antiques based on appraised values", color: "from-amber-500 to-amber-600" },
                { icon: Crown, title: "Expert Handlers", description: "Trained specialists with 10+ years experience handling irreplaceable items", color: "from-blue-500 to-blue-600" },
                { icon: Clock, title: "Climate Control", description: "Temperature and humidity-controlled transport for sensitive materials", color: "from-emerald-500 to-emerald-600" },
                { icon: Camera, title: "Condition Reports", description: "Detailed photo documentation before and after every move", color: "from-violet-500 to-violet-600" },
                { icon: HandHeart, title: "White Glove Service", description: "Museum-quality packing, crating, and careful placement at destination", color: "from-rose-500 to-rose-600" },
                { icon: Award, title: "WSIB Certified", description: "Full compliance with workplace safety standards for your peace of mind", color: "from-primary to-amber-600" }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg" data-testid={`card-why-${index}`}>
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

        {/* Testimonials Carousel */}
        <section className="py-16 md:py-20 bg-gray-50" data-testid="section-testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Reviews</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                What Collectors Say
              </h2>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span>Based on 250+ Google Reviews</span>
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
                  <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed" data-testid="testimonial-text">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 bg-gradient-to-br from-primary to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[activeTestimonial].name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-lg" data-testid="testimonial-name">{testimonials[activeTestimonial].name}</p>
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
                  data-testid="button-testimonial-prev"
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
                      data-testid={`button-testimonial-dot-${index}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                  data-testid="button-testimonial-next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 md:py-20 bg-[#1A2332]" data-testid="section-service-areas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Coverage</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ottawa Neighborhoods We Serve
              </h2>
              <p className="text-lg text-white/60">
                Antique moving services across National Capital Region's finest neighborhoods
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {neighborhoods.map((hood, index) => (
                <Badge 
                  key={index}
                  className="bg-white/10 text-white border-white/20 hover:bg-primary hover:text-[#1A2332] hover:border-primary transition-all duration-300 cursor-pointer px-4 py-2 text-sm font-medium"
                  data-testid={`badge-neighborhood-${index}`}
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  {hood}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-white" data-testid="section-faq">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our antique moving services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border rounded-lg px-6"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger 
                    className="text-left hover:no-underline py-6"
                    data-testid={`faq-trigger-${index}`}
                  >
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-20 bg-gray-50" data-testid="section-related-services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">More Services</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Complete Your Move
              </h2>
              <p className="text-lg text-muted-foreground">
                Additional services to complement your antique moving needs
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/services/residential-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="card-related-residential">
                  <CardContent className="p-6">
                    <Home className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Residential Moving</h3>
                    <p className="text-muted-foreground">Complete home relocation services across Ottawa</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/packing-services">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="card-related-packing">
                  <CardContent className="p-6">
                    <Package className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Packing Services</h3>
                    <p className="text-muted-foreground">Professional packing for fragile and valuable items</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/storage-solutions">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="card-related-storage">
                  <CardContent className="p-6">
                    <Warehouse className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Storage Solutions</h3>
                    <p className="text-muted-foreground">Climate-controlled storage for antiques</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/piano-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="card-related-piano">
                  <CardContent className="p-6">
                    <Music className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Piano Moving</h3>
                    <p className="text-muted-foreground">Specialized antique piano transport</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/specialty-item-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="card-related-specialty">
                  <CardContent className="p-6">
                    <Sparkles className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Specialty Items</h3>
                    <p className="text-muted-foreground">Safe transport for unique valuables</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/long-distance-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="card-related-longdistance">
                  <CardContent className="p-6">
                    <Truck className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Long Distance Moving</h3>
                    <p className="text-muted-foreground">Cross-province antique relocations</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Form Section */}
        <section className="py-20 bg-[#1A2332]" data-testid="section-quote-form">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary text-[#1A2332]">Free Quote</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Get Your Antique Moving Quote
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Tell us about your valuable antiques and we'll provide a customized quote with comprehensive protection. Your heirlooms deserve the best care.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Response within 1 hour</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Custom protection assessment</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Specialized insurance options</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>WSIB certified team</span>
                  </li>
                </ul>
              </div>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Request Your Quote</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you ASAP</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="pl-10"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          data-testid="input-name"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="email@example.com"
                            className="pl-10"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            data-testid="input-email"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="604-XXX-XXXX"
                            className="pl-10"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                            data-testid="input-phone"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your antiques</Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your antique items, their approximate age, and any special handling requirements..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        data-testid="input-message"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full py-6"
                      data-testid="button-submit-quote"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get Free Quote
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-amber-500 to-primary relative overflow-hidden" data-testid="section-final-cta">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#1A2332]/20 backdrop-blur rounded-full px-4 py-2 mb-6">
              <Crown className="h-4 w-4 text-[#1A2332]" />
              <span className="text-[#1A2332] font-semibold text-sm">Museum-Quality Care</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2332] mb-6">
              Protect Your Treasures Today
            </h2>
            
            <p className="text-xl text-[#1A2332]/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of Ottawa collectors who trusted us with their irreplaceable antiques. Get your personalized quote in under 1 hour.
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
