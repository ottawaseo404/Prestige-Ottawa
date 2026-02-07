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
  Music,
  Shield,
  Truck,
  Award,
  Star,
  Clock,
  ArrowRight,
  Mail,
  User,
  MessageSquare,
  Loader2,
  Home,
  Crown,
  Box,
  Package,
  Warehouse,
  Building2,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  Users,
  Zap,
  Timer,
  Sparkles,
  Heart,
  HandHeart,
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { WorkSafeBadge } from "@/components/worksafe-badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import pianoVideo from "@assets/generated_videos/grand_piano_professional_moving.mp4";
import uprightPianoImage from "@assets/generated_images/elegant_upright_piano_photography.png";
import grandPianoImage from "@assets/generated_images/concert_grand_piano_showcase.png";
import babyGrandPianoImage from "@assets/generated_images/baby_grand_piano_showcase.png";
import digitalPianoImage from "@assets/generated_images/modern_digital_piano_keyboard.png";

export default function PianoMoving() {
  const { toast } = useToast();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pianoType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/quote-request", {
        ...formData,
        serviceType: "Piano Moving",
      });
      
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 1 hour with your piano moving quote.",
      });
      setFormData({ name: "", email: "", phone: "", pianoType: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or call us directly at (613) 600-4000",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Piano Moving Services Ottawa",
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
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "150"
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
    "description": "Professional piano moving services in Ottawa. Specialists in grand, baby grand, upright, and digital piano moving. WSIB certified, fully insured with specialized equipment."
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you move a grand piano?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Grand pianos require specialized handling. We remove the legs and pedal lyre, carefully wrap the body in thick padding, and transport it on its side using a piano board. Our trained specialists use proper lifting techniques and secure strapping to ensure safe transport."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to move a piano in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Piano moving costs depend on the type (upright, baby grand, grand), distance, and access challenges like stairs or tight doorways. Upright pianos typically start at $250, while grand pianos start at $400. Contact us for a free, detailed quote."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer piano storage services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer climate-controlled piano storage with controlled temperature and humidity levels to protect your instrument. Our storage facilities maintain optimal conditions to prevent damage to the wood, strings, and internal mechanisms."
        }
      },
      {
        "@type": "Question",
        "name": "Should I tune my piano after the move?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we recommend waiting 2-3 weeks after your piano is moved and settled in its new location before having it tuned. This allows the piano to acclimate to the new environment's temperature and humidity."
        }
      },
      {
        "@type": "Question",
        "name": "Can you move a piano up or down stairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our trained specialists are experienced in navigating stairs, tight corners, and challenging access points. We use specialized stair climbing equipment and proper techniques to safely move pianos up or down multiple floors."
        }
      }
    ]
  };

  const testimonials = [
    { 
      name: "Margaret W.", 
      location: "The Glebe", 
      text: "They moved our 1920s Steinway grand piano with incredible care. The team was professional, patient, and treated our family heirloom like it was their own. Not a scratch!", 
      rating: 5, 
      date: "1 week ago",
      pianoType: "Concert Grand"
    },
    { 
      name: "James C.", 
      location: "Rockcliffe Park", 
      text: "Moving our baby grand up 3 flights of stairs seemed impossible, but these experts made it look easy. They took their time and the piano sounds perfect in its new home.", 
      rating: 5, 
      date: "2 weeks ago",
      pianoType: "Baby Grand"
    },
    { 
      name: "Linda M.", 
      location: "Westboro", 
      text: "I was nervous about moving my grandmother's antique upright piano. The team was so careful with the protective wrapping and climate-controlled truck. Highly recommend!", 
      rating: 5, 
      date: "3 weeks ago",
      pianoType: "Upright Piano"
    },
    { 
      name: "Robert T.", 
      location: "Kanata", 
      text: "Excellent service for our digital Yamaha Clavinova. They understood how to protect the electronics and screen. Fast, efficient, and reasonably priced.", 
      rating: 5, 
      date: "1 month ago",
      pianoType: "Digital Piano"
    },
    { 
      name: "Susan K.", 
      location: "Orleans", 
      text: "Our Bösendorfer grand piano was moved perfectly from our old house to the new one across Ottawa. The crew was knowledgeable about piano mechanics. Exceptional service!", 
      rating: 5, 
      date: "2 months ago",
      pianoType: "Grand Piano"
    }
  ];

  const pianoTypes = [
    {
      title: "Upright Pianos",
      icon: Music,
      image: uprightPianoImage,
      description: "Professional handling for all upright and console pianos",
      features: ["Full-size uprights (52\")", "Studio uprights (45-48\")", "Console pianos (40-44\")", "Spinet pianos (36-39\")"],
      priceFrom: "$250"
    },
    {
      title: "Grand Pianos",
      icon: Music,
      image: grandPianoImage,
      description: "Expert care for concert and parlor grand pianos",
      features: ["Concert grands (9'+)", "Semi-concert (7-8')", "Parlor grands (5'10\"-6')", "Leg & lyre removal"],
      priceFrom: "$600"
    },
    {
      title: "Baby Grands",
      icon: Music,
      image: babyGrandPianoImage,
      description: "Specialized transport for baby and petite grand pianos",
      features: ["Baby grands (5-5'8\")", "Petite grands (4'5-5')", "Proper positioning", "Climate protection"],
      priceFrom: "$400"
    },
    {
      title: "Digital Pianos",
      icon: Music,
      image: digitalPianoImage,
      description: "Careful handling of electronic instruments and keyboards",
      features: ["Digital grands", "Stage pianos", "Electric pianos", "Keyboard workstations"],
      priceFrom: "$150"
    }
  ];

  const faqs = [
    {
      question: "How do you move a grand piano?",
      answer: "Grand pianos require specialized handling. We remove the legs and pedal lyre, carefully wrap the body in thick padding, and transport it on its side using a professional piano board. Our trained specialists use proper lifting techniques and secure strapping in our climate-controlled trucks to ensure safe transport. The entire process is handled with extreme care to protect both the exterior finish and internal components."
    },
    {
      question: "How much does it cost to move a piano in Ottawa?",
      answer: "Piano moving costs depend on several factors including the type (upright, baby grand, concert grand), distance, and access challenges like stairs, tight doorways, or elevator availability. Upright pianos typically start at $250, baby grands from $400, and concert grands from $600. Contact us for a free, detailed quote tailored to your specific situation."
    },
    {
      question: "Do you move digital and electric pianos?",
      answer: "Absolutely! We move all types of digital pianos, stage pianos, and synthesizers with cabinets. While these are generally lighter than acoustic pianos, they still require careful handling to protect sensitive electronics and displays. We use appropriate padding and secure transport methods for all electronic instruments."
    },
    {
      question: "Should I tune my piano after the move?",
      answer: "Yes, we recommend waiting 2-3 weeks after your piano is moved and settled in its new location before having it tuned. This allows the piano to acclimate to the new environment's temperature and humidity. We can provide referrals to trusted piano tuners in the Ottawa area."
    },
    {
      question: "Can you move a piano up or down stairs?",
      answer: "Yes, our trained specialists are experienced in navigating stairs, tight corners, and challenging access points. We use specialized stair climbing equipment and proper techniques to safely move pianos up or down multiple floors. Additional fees may apply for stair moves, which we'll quote in advance."
    }
  ];

  const neighborhoods = [
    "Centretown", "Westboro", "The Glebe", "Byward Market", "Sandy Hill",
    "Hintonburg", "Little Italy", "Alta Vista", "Rockcliffe Park", 
    "New Edinburgh", "Old Ottawa South", "Wellington West", "Vanier", "Barrhaven", "Kanata",
    "Orleans", "Nepean", "Gloucester", "Stittsville", "Manotick"
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
        <title>Piano Moving Services Ottawa ON | Grand & Upright Piano Movers | Prestige Moving</title>
        <meta name="description" content="Professional piano moving services in Ottawa ON. WSIB certified specialists for grand, baby grand, upright & digital pianos. Climate-controlled transport, fully insured. Get your free quote!" />
        <meta name="keywords" content="piano moving Ottawa, grand piano movers ON, upright piano moving, baby grand piano transport, digital piano moving Ottawa, professional piano movers, climate-controlled piano transport" />
        <meta property="og:title" content="Piano Moving Services Ottawa | Grand & Upright Piano Specialists | Prestige Moving" />
        <meta property="og:description" content="Ottawa's trusted piano moving experts. WSIB certified, fully insured, climate-controlled transport for all piano types. Free quotes in 1 hour!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:url" content="https://prestigemoving.ca/services/piano-moving" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Piano Moving Services Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="Expert piano movers in Ottawa. Grand, baby grand, upright & digital pianos. Fully insured, climate-controlled transport." />
        <meta name="twitter:image" content="https://prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://prestigemoving.ca/services/piano-moving" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background" data-testid="page-piano-moving">
        <SharedNavigation />

        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden" data-testid="section-hero">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="hero-video"
          >
            <source src={pianoVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332] via-[#1A2332]/90 to-[#1A2332]/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <Badge className="bg-primary/20 text-primary border-primary/40 px-4 py-1.5" data-testid="badge-piano-moving">
                  <Music className="h-4 w-4 mr-2" />
                  Piano Moving Specialists
                </Badge>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/40" data-testid="badge-same-day">
                  <Zap className="h-3 w-3 mr-1" />
                  Same-Day Quotes
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]" data-testid="hero-title">
                Ottawa's<br />
                <span className="text-primary">#1 Piano Movers</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed" data-testid="hero-description">
                From cherished uprights to concert grands, we've safely moved <span className="text-primary font-semibold">2,500+ pianos</span> across Ottawa with specialized care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/book">
                  <Button size="lg" className="text-lg font-bold px-8 py-7 shadow-xl shadow-primary/30 group" data-testid="button-hero-quote">
                    Get Free Piano Quote
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

              <div className="flex flex-wrap gap-6">
                <WorkSafeBadge size="md" />
                <div className="flex items-center gap-2 text-white/70" data-testid="trust-indicator-insured">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2 text-white/70" data-testid="trust-indicator-climate">
                  <Timer className="h-5 w-5 text-primary" />
                  <span>Climate-Controlled</span>
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
                { value: "2,500+", label: "Pianos Moved" },
                { value: "5.0★", label: "Google Rating" },
                { value: "15+", label: "Years Experience" },
                { value: "1 Hour", label: "Quote Response" }
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
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6" data-testid="about-title">
                  Ottawa's Premier Piano Moving Specialists
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Moving a piano requires specialized expertise that general movers simply don't have. <strong>Prestige Moving Ottawa</strong> has been the trusted choice for piano owners since 2009, earning a reputation as the most reliable piano movers in the National Capital Region.
                  </p>
                  <p>
                    Our team understands the delicate internal mechanisms, precise weight distribution, and <strong>climate sensitivity of fine pianos</strong>. From Steinway grand pianos to cherished family uprights, we handle each instrument with the care it deserves.
                  </p>
                  <p>
                    As a <strong>WSIB certified moving company</strong>, we use specialized equipment including piano boards, skids, and climate-controlled trucks designed specifically for instrument transport.
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
                    <div className="h-24 w-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Music className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Specialized Piano Care</h3>
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="flex -space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="h-10 w-10 rounded-full bg-primary border-2 border-[#1A2332] flex items-center justify-center">
                            <Star className="h-4 w-4 text-[#1A2332] fill-[#1A2332]" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-white">
                      <div className="font-bold">150+ Piano Reviews</div>
                      <div className="text-sm text-white/70">5-Star Rated Specialists</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Piano Types Tabs */}
        <section className="py-16 md:py-20 bg-[#1A2332]" data-testid="section-piano-types">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Types We Move</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4" data-testid="piano-types-title">
                Expert Moving for All Piano Types
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Specialized solutions for every type of piano, from antique uprights to modern digital instruments
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              {pianoTypes.map((piano, index) => {
                const PianoIcon = piano.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                      activeTab === index 
                        ? 'bg-primary text-[#1A2332] shadow-lg shadow-primary/30' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    data-testid={`tab-${piano.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <PianoIcon className="h-5 w-5" />
                    {piano.title}
                  </button>
                );
              })}
            </div>

            {/* Active Piano Content */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-12" data-testid="piano-type-content">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-black text-white">
                      {pianoTypes[activeTab].title}
                    </h3>
                    <Badge className="bg-primary text-[#1A2332]" data-testid="piano-price">
                      From {pianoTypes[activeTab].priceFrom}
                    </Badge>
                  </div>
                  <p className="text-lg text-white/70 mb-6">
                    {pianoTypes[activeTab].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {pianoTypes[activeTab].features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3" data-testid={`feature-${i}`}>
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/book">
                    <Button size="lg" className="font-bold" data-testid="button-piano-type-quote">
                      Get a Quote
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden h-[300px] bg-gradient-to-br from-[#1A2332] to-[#2a3545]">
                  <img 
                    src={pianoTypes[activeTab].image} 
                    alt={`${pianoTypes[activeTab].title} - Professional piano moving service`}
                    className="w-full h-full object-cover"
                    data-testid={`piano-image-${activeTab}`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-semibold text-lg">{pianoTypes[activeTab].title}</p>
                    <p className="text-white/60 text-sm">Professional Handling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Piano Movers */}
        <section className="py-16 md:py-20 bg-gray-50" data-testid="section-why-choose">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4" data-testid="why-choose-title">
                The Piano Moving Difference
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Music, title: "Piano Specialists", description: "Trained specifically in piano moving techniques, weight distribution, and delicate handling", color: "from-amber-500 to-amber-600" },
                { icon: Truck, title: "Climate-Controlled Transport", description: "Temperature and humidity-controlled trucks to protect your piano's wood and strings", color: "from-blue-500 to-blue-600" },
                { icon: Shield, title: "Full Insurance Coverage", description: "Comprehensive protection specifically for valuable musical instruments up to $100,000", color: "from-emerald-500 to-emerald-600" },
                { icon: Award, title: "WSIB Certified", description: "Full compliance with Ontario workplace safety standards for complete peace of mind", color: "from-violet-500 to-violet-600" },
                { icon: Users, title: "Experienced Crew", description: "Average 8+ years piano moving experience. Trained professionals who understand pianos", color: "from-rose-500 to-rose-600" },
                { icon: ThumbsUp, title: "Tuner Referrals", description: "We connect you with trusted Ottawa piano tuners for post-move service", color: "from-primary to-amber-600" }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg" data-testid={`why-card-${index}`}>
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
        <section className="py-16 md:py-20 bg-white" data-testid="section-testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Piano Moving Reviews</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4" data-testid="testimonials-title">
                What Piano Owners Say
              </h2>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span>Based on 150+ Piano Moving Reviews</span>
              </div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-2 shadow-xl" data-testid="testimonial-card">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-primary border-primary/40">
                      <Music className="h-3 w-3 mr-1" />
                      {testimonials[activeTestimonial].pianoType}
                    </Badge>
                  </div>
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

        {/* Our Piano Moving Process */}
        <section className="py-16 md:py-20 bg-gray-50" data-testid="section-process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Our Process</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4" data-testid="process-title">
                Our Piano Moving Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A careful, methodical approach to ensure your piano arrives safely
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: 1, title: "Assessment", description: "Evaluate piano type, location, and access points", icon: CheckCircle2 },
                { step: 2, title: "Preparation", description: "Secure lid, wrap with padding, protect keys", icon: Package },
                { step: 3, title: "Transport", description: "Climate-controlled truck with secure strapping", icon: Truck },
                { step: 4, title: "Placement", description: "Position in new location, allow to acclimate", icon: Home }
              ].map((item, index) => (
                <div key={index} className="text-center relative" data-testid={`process-step-${item.step}`}>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-primary/20" />
                  )}
                  <div className="relative inline-flex items-center justify-center mb-4">
                    <div className="h-20 w-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <item.icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-8 w-8 bg-primary rounded-full flex items-center justify-center text-[#1A2332] font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/book">
                <Button size="lg" className="font-bold px-8" data-testid="button-process-quote">
                  Schedule Your Piano Move
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-white" data-testid="section-faq">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4" data-testid="faq-title">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about piano moving
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border rounded-lg px-6"
                  data-testid={`accordion-faq-${index}`}
                >
                  <AccordionTrigger 
                    className="text-left hover:no-underline py-6"
                    data-testid={`accordion-trigger-${index}`}
                  >
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6" data-testid={`accordion-content-${index}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 md:py-20 bg-[#1A2332]" data-testid="section-service-areas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Coverage</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4" data-testid="service-areas-title">
                Ottawa Neighborhoods We Serve
              </h2>
              <p className="text-lg text-white/60">
                Expert piano moving across National Capital Region
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {neighborhoods.map((hood, index) => (
                <Badge 
                  key={index}
                  className="bg-white/10 text-white border-white/20 hover:bg-primary hover:text-[#1A2332] hover:border-primary transition-all duration-300 cursor-pointer px-4 py-2 text-sm font-medium"
                  data-testid={`neighborhood-${hood.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  {hood}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-20 bg-gray-50" data-testid="section-related-services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">More Services</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4" data-testid="related-services-title">
                Related Moving Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Complete your move with our additional services
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/services/residential-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-residential-moving">
                  <CardContent className="p-6">
                    <Home className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Residential Moving</h3>
                    <p className="text-muted-foreground">Complete home moving services across Ottawa</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/antique-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-antique-moving">
                  <CardContent className="p-6">
                    <Crown className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Antique Moving</h3>
                    <p className="text-muted-foreground">White-glove care for your valuable antiques</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/storage-solutions">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-storage-solutions">
                  <CardContent className="p-6">
                    <Warehouse className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Piano Storage</h3>
                    <p className="text-muted-foreground">Climate-controlled storage for your instrument</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/specialty-item-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-specialty-moving">
                  <CardContent className="p-6">
                    <Sparkles className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Specialty Items</h3>
                    <p className="text-muted-foreground">Safe transport for unique and fragile items</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/packing-services">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-packing-services">
                  <CardContent className="p-6">
                    <Package className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Packing Services</h3>
                    <p className="text-muted-foreground">Professional packing by trained experts</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/commercial-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-commercial-moving">
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Commercial Moving</h3>
                    <p className="text-muted-foreground">Office and business relocation experts</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Form Section */}
        <section className="py-20 bg-[#1A2332]" data-testid="section-cta-form">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-[#C5A572] text-white">Free Quote</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-testid="cta-form-title">
                  Get Your Piano Moving Quote
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Tell us about your piano and we'll provide a detailed quote. Our specialists will ensure your instrument is moved with the care it deserves.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Response within 1 hour</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Free on-site assessment available</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Comprehensive insurance included</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Climate-controlled transport</span>
                  </li>
                </ul>
              </div>

              <Card className="bg-white" data-testid="quote-form-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Request Your Quote</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you shortly</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4" data-testid="quote-form">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="name"
                          placeholder="John Smith"
                          className="pl-10"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          data-testid="input-name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          data-testid="input-email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="604-555-0123"
                          className="pl-10"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          data-testid="input-phone"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pianoType">Piano Type</Label>
                      <div className="relative">
                        <Music className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="pianoType"
                          placeholder="e.g., Baby Grand, Upright, Digital"
                          className="pl-10"
                          value={formData.pianoType}
                          onChange={(e) => setFormData({ ...formData, pianoType: e.target.value })}
                          data-testid="input-piano-type"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Details</Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Textarea
                          id="message"
                          placeholder="Tell us about your move (stairs, access, distance, etc.)"
                          className="pl-10 min-h-[100px]"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          data-testid="input-message"
                        />
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-[#C5A572] hover:bg-[#B8956A] text-white"
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
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-amber-500 to-primary relative overflow-hidden" data-testid="section-final-cta">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#1A2332]/20 backdrop-blur rounded-full px-4 py-2 mb-6">
              <Music className="h-4 w-4 text-[#1A2332]" />
              <span className="text-[#1A2332] font-semibold text-sm">Free No-Obligation Quote</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2332] mb-6" data-testid="final-cta-title">
              Ready to Move Your Piano?
            </h2>
            
            <p className="text-xl text-[#1A2332]/80 mb-8 max-w-2xl mx-auto">
              Join 2,500+ piano owners who trusted us with their precious instruments. Get your personalized quote in under 1 hour.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-[#1A2332] hover:bg-[#1A2332]/90 text-white text-lg font-bold px-10 py-7 shadow-xl" data-testid="button-final-quote">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:613-600-4000">
                <Button size="lg" variant="outline" className="border-2 border-[#1A2332] text-[#1A2332] hover:bg-[#1A2332] hover:text-white text-lg font-bold px-10 py-7" data-testid="button-final-call">
                  <Phone className="h-5 w-5 mr-2" />
                  (613) 600-4000
                </Button>
              </a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Piano Moving" serviceName="Piano Moving" />
        <SharedFooter />
      </div>
    </>
  );
}
