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
  Shield,
  Award,
  Clock,
  Star,
  FileCheck,
  ArrowRight,
  Mail,
  User,
  MessageSquare,
  MapPin,
  Users,
  Loader2,
  Truck,
  Home,
  Package,
  Warehouse,
  Building2,
  Box,
  ChevronLeft,
  ChevronRight,
  Zap,
  Timer,
  ThumbsUp,
  HandHeart,
  Plane,
  Globe,
  Heart,
  Music,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { WorkSafeBadge } from "@/components/worksafe-badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import militaryVideo from "@assets/generated_videos/military_pcs_moving_relocation.mp4";
import residentialImage from "@assets/truck1_1764291781341.jpeg";

export default function MilitaryMoving() {
  const { toast } = useToast();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/quote-request", {
        ...formData,
        serviceType: "Military Moving",
      });
      
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 1 hour with your military moving quote.",
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
    "name": "Military Moving Services Ottawa",
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
      { "@type": "MilitaryBase", "name": "CFB Ottawa" },
      { "@type": "MilitaryBase", "name": "CFB Petawawa" },
      { "@type": "City", "name": "Ottawa" },
      { "@type": "City", "name": "Gatineau" }
    ],
    "description": "Professional military moving services in Ottawa and the National Capital Region. PCS moves, OCONUS relocations, CAF-approved movers. WSIB certified with military discounts."
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you handle PCS (Permanent Change of Station) moves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We specialize in PCS moves for Canadian Armed Forces members. We understand military timelines, provide proper documentation for reimbursement, and can accommodate last-minute changes due to deployment orders."
        }
      },
      {
        "@type": "Question",
        "name": "What military bases do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all major military installations in Ontario including CFB Ottawa, CFB Petawawa, RCAF bases, and can coordinate cross-country moves to any Canadian military base."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer military discounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We offer special rates for active duty members, veterans, and military families as our thank you for your service to Canada."
        }
      },
      {
        "@type": "Question",
        "name": "Can you provide weight tickets for DITY/PPM moves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide certified weight tickets and all necessary documentation for Do-It-Yourself (DITY) or Personally Procured Moves (PPM) to help you with reimbursement claims."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle last-minute deployment moves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We understand that military orders can change quickly. We offer flexible scheduling and can often accommodate moves within 48-72 hours notice. We also provide storage solutions for unexpected deployments."
        }
      }
    ]
  };

  const testimonials = [
    { name: "Sgt. Michael T.", location: "CFB Ottawa", text: "Incredible service during our PCS move. They understood our tight timeline and handled everything professionally. All documentation was perfect for reimbursement.", rating: 5, date: "2 weeks ago" },
    { name: "CPO Sarah M.", location: "CFB Petawawa", text: "Best military move we've ever had. The team was punctual, respectful, and took great care of our belongings. They even worked around my husband's deployment schedule.", rating: 5, date: "1 month ago" },
    { name: "Capt. James R.", location: "Gatineau", text: "Third PCS move with Prestige and they never disappoint. Professional documentation, careful handling, and they understand military families. Highly recommend!", rating: 5, date: "3 weeks ago" },
    { name: "WO David L.", location: "CFB Ottawa", text: "Outstanding service for our OCONUS move. They coordinated everything seamlessly and provided all the weight tickets we needed. True professionals.", rating: 5, date: "1 week ago" },
    { name: "Lt. Jennifer K.", location: "Ottawa", text: "Made our last-minute move stress-free when orders changed suddenly. They accommodated us within 48 hours and stored our items until housing was ready.", rating: 5, date: "2 months ago" }
  ];

  const serviceTypes = [
    {
      title: "PCS Moves",
      icon: Shield,
      description: "Permanent Change of Station relocations with full documentation",
      features: ["Weight ticket coordination", "Reimbursement documentation", "DITY/PPM support", "Timeline flexibility"]
    },
    {
      title: "OCONUS Moves",
      icon: Globe,
      description: "Outside Continental moves with international coordination",
      features: ["Cross-border logistics", "Customs documentation", "Storage coordination", "Split shipments"]
    },
    {
      title: "Base Relocations",
      icon: MapPin,
      description: "Moves between military installations across Canada",
      features: ["CFB Ottawa", "CFB Petawawa", "Cross-country moves", "Housing coordination"]
    },
    {
      title: "Military Storage",
      icon: Warehouse,
      description: "Secure storage for deployments and delayed housing",
      features: ["Climate-controlled", "Flexible terms", "Deployment storage", "Partial storage options"]
    }
  ];

  const militaryBases = [
    "CFB Ottawa", "CFB Petawawa", "NDHQ Carling", "DND Headquarters",
    "Uplands Base", "Connaught Ranges", "CFSU Ottawa", "Gatineau",
    "Canadian Forces Base Trenton", "CFB Kingston", "CFB Montreal", "CFB Valcartier"
  ];

  const faqs = [
    {
      question: "Do you handle PCS (Permanent Change of Station) moves?",
      answer: "Yes! We specialize in PCS moves for Canadian Armed Forces members. We understand military timelines, provide proper documentation for reimbursement, and can accommodate last-minute changes due to deployment orders. Our team is trained in the specific requirements of military relocations."
    },
    {
      question: "What military bases do you serve?",
      answer: "We serve all major military installations in Ontario including CFB Ottawa, CFB Petawawa, NDHQ Carling, DND Headquarters, and can coordinate cross-country moves to any Canadian military base. We have experience with moves to and from bases across Canada including CFB Edmonton, CFB Esquimalt, CFB Valcartier, and more."
    },
    {
      question: "Do you offer military discounts?",
      answer: "Absolutely! We offer special rates for active duty members, veterans, and military families as our thank you for your service to Canada. Please mention your military status when requesting a quote to receive your discount."
    },
    {
      question: "Can you provide weight tickets for DITY/PPM moves?",
      answer: "Yes, we provide certified weight tickets and all necessary documentation for Do-It-Yourself (DITY) or Personally Procured Moves (PPM) to help you with reimbursement claims. We ensure all paperwork meets military standards for expense reimbursement."
    },
    {
      question: "How do you handle last-minute deployment moves?",
      answer: "We understand that military orders can change quickly. We offer flexible scheduling and can often accommodate moves within 48-72 hours notice. We also provide storage solutions for unexpected deployments or when your new housing isn't ready."
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
        <title>Military Moving Services Ottawa | CAF PCS Movers | Prestige Moving</title>
        <meta name="description" content="Professional military moving services in Ottawa and the National Capital Region. WSIB certified, CAF-experienced movers. PCS moves, OCONUS relocations, military discounts. Get your free quote!" />
        <meta name="keywords" content="military moving Ottawa, PCS movers ON, CAF moving service, military base relocation, armed forces movers Ottawa, CFB Ottawa movers, CFB Petawawa moving, OCONUS moves ON" />
        <meta property="og:title" content="Military Moving Services Ottawa | CAF PCS Movers | Prestige Moving" />
        <meta property="og:description" content="Ottawa's trusted military movers. PCS moves, base relocations, understanding of CAF timelines and requirements. Military discounts available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ottawa.prestigemoving.ca/services/military-moving" />
        <meta property="og:image" content="https://ottawa.prestigemoving.ca/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Military Moving Services Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="Professional military moving. PCS moves, base relocations, understanding of military timelines and requirements." />
        <meta name="twitter:image" content="https://ottawa.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://ottawa.prestigemoving.ca/services/military-moving" />
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
            <source src={militaryVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332] via-[#1A2332]/90 to-[#1A2332]/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <Badge className="bg-primary/20 text-primary border-primary/40 px-4 py-1.5" data-testid="badge-military-moving">
                  <Shield className="h-4 w-4 mr-2" />
                  Military Moving Specialists
                </Badge>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/40" data-testid="badge-military-discount">
                  <Zap className="h-3 w-3 mr-1" />
                  Military Discount
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Trusted Military<br />
                <span className="text-primary">Moving Experts</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                We understand military life. From PCS moves to deployment storage, we've helped <span className="text-primary font-semibold">1,000+ CAF families</span> relocate with precision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/book">
                  <Button size="lg" className="text-lg font-bold px-8 py-7 shadow-xl shadow-primary/30 group" data-testid="button-hero-quote">
                    Get Military Quote
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
                  <span>CAF Experienced</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Timer className="h-5 w-5 text-primary" />
                  <span>48hr Response</span>
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
                { value: "1,000+", label: "Military Moves" },
                { value: "5.0", label: "Google Rating" },
                { value: "15+", label: "Years Experience" },
                { value: "48hr", label: "Emergency Moves" }
              ].map((stat, index) => (
                <div key={index} data-testid={`stat-${index}`}>
                  <div className="text-2xl md:text-4xl font-black text-[#1A2332]">{stat.value}</div>
                  <div className="text-sm font-bold text-[#1A2332]/80 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Military Moving Service */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-primary/10 text-primary mb-4">About Our Service</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                  Ottawa's Premier Military Moving Company
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    When duty calls, <strong>Prestige Moving Ottawa</strong> answers. We specialize in <strong>military relocations</strong> for Canadian Armed Forces members stationed in Ontario, from CFB Ottawa to CFB Petawawa and everywhere in between.
                  </p>
                  <p>
                    Our team understands the unique challenges of PCS moves—tight timelines, changing orders, and specific documentation requirements. We've earned our reputation as the go-to <strong>CAF-experienced movers</strong> in the Ottawa area.
                  </p>
                  <p>
                    As a <strong>WSIB certified moving company</strong>, we maintain the highest standards of professionalism. Every move includes detailed weight documentation, proper inventory sheets, and all paperwork needed for reimbursement claims.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/book">
                    <Button size="lg" className="font-bold" data-testid="button-about-quote">
                      Get Your Military Quote
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden h-[400px]">
                <img 
                  src={residentialImage}
                  alt="Prestige Moving military movers in Ottawa"
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
                      <div className="font-bold">Trusted by CAF</div>
                      <div className="text-sm text-white/70">5-Star Rated Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Military Benefits Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Military Benefits</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Exclusive Benefits for Service Members
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Thank you for your service. Here's how we support our military families.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Military Discount", description: "Exclusive rates for active duty, veterans, and military families", icon: Award },
                { title: "Flexible Scheduling", description: "We accommodate changing orders and last-minute moves", icon: Clock },
                { title: "Complete Documentation", description: "All weight tickets and paperwork for reimbursement claims", icon: FileCheck },
                { title: "Priority Service", description: "Fast-track scheduling for urgent PCS moves", icon: Zap },
                { title: "Deployment Storage", description: "Secure storage solutions during overseas assignments", icon: Warehouse },
                { title: "WSIB Certified", description: "Full compliance with Ontario workplace safety standards", icon: Shield }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors" data-testid={`benefit-card-${index}`}>
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

        {/* Service Types Tabs */}
        <section className="py-16 md:py-20 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Military Moving Services
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Specialized solutions for every type of military relocation
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

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                The Prestige Military Moving Difference
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "CAF Experienced", description: "15+ years serving Canadian Armed Forces families across BC", color: "from-amber-500 to-amber-600" },
                { icon: FileCheck, title: "Complete Documentation", description: "Weight tickets, inventories, and all reimbursement paperwork", color: "from-blue-500 to-blue-600" },
                { icon: Clock, title: "Timeline Flexibility", description: "We adapt to changing orders and deployment schedules", color: "from-emerald-500 to-emerald-600" },
                { icon: ThumbsUp, title: "Transparent Pricing", description: "No hidden fees. Military discount applied automatically.", color: "from-violet-500 to-violet-600" },
                { icon: HandHeart, title: "White Glove Service", description: "Professional handling of all belongings, including specialty items", color: "from-rose-500 to-rose-600" },
                { icon: Award, title: "WSIB Certified", description: "Full compliance and insurance for your peace of mind", color: "from-primary to-amber-600" }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg" data-testid={`why-choose-card-${index}`}>
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
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Reviews</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                What Military Families Say
              </h2>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span>Trusted by CAF Families</span>
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
                        <p className="text-muted-foreground flex items-center gap-1" data-testid="testimonial-location">
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

        {/* Service Areas - Military Bases */}
        <section className="py-16 md:py-20 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Coverage</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Military Bases We Serve
              </h2>
              <p className="text-lg text-white/60">
                Comprehensive coverage for BC military installations
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {militaryBases.map((base, index) => (
                <Badge 
                  key={index}
                  className="bg-white/10 text-white border-white/20 hover:bg-primary hover:text-[#1A2332] hover:border-primary transition-all duration-300 cursor-pointer px-4 py-2 text-sm font-medium"
                  data-testid={`badge-base-${index}`}
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  {base}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Common Questions</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Military Moving FAQs
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about military relocations
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-lg border px-6"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6" data-testid={`faq-trigger-${index}`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6" data-testid={`faq-content-${index}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">More Services</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Complete Your Move
              </h2>
              <p className="text-lg text-muted-foreground">
                Additional services to make your military relocation seamless
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/services/long-distance-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="related-service-long-distance">
                  <CardContent className="p-6">
                    <Truck className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Long Distance Moving</h3>
                    <p className="text-muted-foreground">Cross-province and Canada-wide relocations</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/storage-solutions">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="related-service-storage">
                  <CardContent className="p-6">
                    <Warehouse className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Storage Solutions</h3>
                    <p className="text-muted-foreground">Climate-controlled storage for deployments</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/packing-services">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="related-service-packing">
                  <CardContent className="p-6">
                    <Package className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Packing Services</h3>
                    <p className="text-muted-foreground">Professional packing for fragile items and full homes</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/residential-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="related-service-residential">
                  <CardContent className="p-6">
                    <Home className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Residential Moving</h3>
                    <p className="text-muted-foreground">Complete home moving services across Ottawa</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/piano-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="related-service-piano">
                  <CardContent className="p-6">
                    <Music className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Piano Moving</h3>
                    <p className="text-muted-foreground">Specialized equipment for safe piano transport</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/specialty-item-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="related-service-specialty">
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

        {/* CTA Form Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary text-white">Get Started Today</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                  Ready for Your PCS Move?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get your military moving quote today. We'll work around your timeline and requirements, with special rates for all military members and their families.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground">Free, no-obligation quotes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground">Military discount applied automatically</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground">Response within 1 hour</span>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="tel:613-555-1234" className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80">
                    <Phone className="h-5 w-5" />
                    613-555-1234
                  </a>
                </div>
              </div>

              <Card className="shadow-lg" data-testid="cta-form-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Request Your Quote</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you within 1 hour</CardDescription>
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
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="pl-10"
                          required
                          data-testid="input-name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="pl-10"
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
                          placeholder="(604) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="pl-10"
                          required
                          data-testid="input-phone"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Move Details</Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Textarea
                          id="message"
                          placeholder="Tell us about your PCS move - origin base, destination, timeline, etc."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="pl-10 min-h-[100px] resize-none"
                          data-testid="input-message"
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      data-testid="button-submit-quote"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get My Military Quote
                          <ArrowRight className="ml-2 h-5 w-5" />
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
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-amber-500 to-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#1A2332]/20 backdrop-blur rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-[#1A2332]" />
              <span className="text-[#1A2332] font-semibold text-sm">Serving Those Who Serve</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2332] mb-6">
              Ready for Your Military Move?
            </h2>
            
            <p className="text-xl text-[#1A2332]/80 mb-8 max-w-2xl mx-auto">
              Join 1,000+ CAF families who trusted us with their PCS move. Get your personalized military quote today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-[#1A2332] hover:bg-[#1A2332]/90 text-white text-lg font-bold px-10 py-7 shadow-xl" data-testid="button-cta-quote">
                  Get Military Quote
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
