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
  Heart,
  Home,
  Shield,
  Clock,
  Users,
  Star,
  ArrowRight,
  Mail,
  User,
  MessageSquare,
  Loader2,
  Package,
  Warehouse,
  Truck,
  Box,
  Gem,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Award,
  Sparkles,
  HandHeart,
  Building2,
  Stethoscope,
  Music,
  Timer,
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { WorkSafeBadge } from "@/components/worksafe-badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import seniorVideo from "@assets/generated_videos/senior_moving_compassionate_service.mp4";

export default function SeniorMoving() {
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
        serviceType: "Senior Moving",
      });
      
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 1 hour with your senior moving quote.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
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
    "name": "Senior Moving Services Ottawa",
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
        "reviewCount": "350"
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
    "description": "Compassionate senior moving services in Ottawa. Specialized care for elderly relocations, downsizing assistance, retirement community moves. WSIB certified with patient, professional service."
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you help seniors with downsizing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive downsizing assistance including sorting belongings, coordinating donations to local charities, arranging estate sales, and helping plan space in your new home. Our compassionate team takes the time to understand what items are most meaningful to you."
        }
      },
      {
        "@type": "Question",
        "name": "Do you move seniors to retirement homes and assisted living facilities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in moves to all types of senior living communities including independent living facilities, assisted living communities, nursing homes, and memory care facilities throughout Greater Ottawa."
        }
      },
      {
        "@type": "Question",
        "name": "What makes your senior moving service different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team is specially trained in senior care, providing patience, respect, and emotional support throughout the moving process. We take a no-rush approach, coordinate with family members, and handle everything from packing to complete setup in the new home."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with medical equipment and medications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We take special care with medical equipment, mobility aids, and medications. We ensure these essential items are packed last, transported safely, and unpacked first at your new home."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer in-home consultations for senior moves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide free in-home consultations for all senior moves to understand specific needs, assess the scope of the move, meet with family members, and create a customized moving plan."
        }
      }
    ]
  };

  const testimonials = [
    { 
      name: "Margaret W.", 
      location: "Rockcliffe Park", 
      text: "Moving my mother to her new assisted living home was emotional, but the Prestige team made it so much easier. They were patient, kind, and treated her belongings with such care. They even set up her room exactly like her old bedroom!", 
      rating: 5, 
      date: "2 weeks ago" 
    },
    { 
      name: "Robert & Linda K.", 
      location: "Kanata", 
      text: "After 45 years in our family home, downsizing felt overwhelming. The team spent extra time helping us decide what to keep, coordinated donations, and set up our new condo perfectly. Can't recommend them enough.", 
      rating: 5, 
      date: "1 month ago" 
    },
    { 
      name: "Susan T.", 
      location: "Orleans", 
      text: "Dad was anxious about moving to the retirement community, but the movers were so gentle and understanding. They took breaks when he needed them and made sure his favorite chair was the first thing set up.", 
      rating: 5, 
      date: "3 weeks ago" 
    },
    { 
      name: "David H.", 
      location: "Nepean", 
      text: "Moved my elderly aunt with dementia to a memory care facility. The team was incredibly trained and sensitive. They recreated her room layout exactly so she felt at home immediately. True professionals.", 
      rating: 5, 
      date: "1 week ago" 
    },
    { 
      name: "Patricia M.", 
      location: "Ottawa", 
      text: "The compassion shown during my father's move was exceptional. They handled his antique furniture and war medals with reverence. Every photo was carefully packed and hung in the same arrangement. Thank you!", 
      rating: 5, 
      date: "2 months ago" 
    }
  ];

  const serviceTypes = [
    {
      title: "Downsizing Help",
      icon: Home,
      description: "Compassionate assistance sorting through a lifetime of memories",
      features: ["Sorting & organizing help", "Donation coordination", "Estate sale assistance", "Space planning for new home"]
    },
    {
      title: "Estate Moves",
      icon: Gem,
      description: "Respectful handling of estate relocations and distributions",
      features: ["Family coordination", "Heirloom protection", "Multi-destination delivery", "Estate liquidation support"]
    },
    {
      title: "Retirement Communities",
      icon: Building2,
      description: "Specialized moves to independent living facilities",
      features: ["Facility coordination", "Room setup service", "Familiar layout recreation", "Move-in day support"]
    },
    {
      title: "Assisted Living",
      icon: Heart,
      description: "Extra care for moves to assisted living & memory care",
      features: ["Medical equipment transport", "Medication handling", "Memory care transitions", "Staff coordination"]
    }
  ];

  const neighborhoods = [
    "Centretown", "Westboro", "The Glebe", "Rockcliffe Park", 
    "Alta Vista", "New Edinburgh", "Sandy Hill", "Old Ottawa South",
    "Kanata", "Orleans", "Nepean", "Barrhaven",
    "Gloucester", "Stittsville", "Manotick"
  ];

  const faqs = [
    {
      question: "How do you help seniors with downsizing?",
      answer: "We provide comprehensive downsizing assistance including sorting belongings, coordinating donations to local charities like the Salvation Army and Habitat for Humanity ReStore, arranging estate sales, and helping plan space in your new home. Our compassionate team takes the time to understand what items are most meaningful to you, ensuring treasured possessions are handled with extra care."
    },
    {
      question: "Do you move seniors to retirement homes and assisted living facilities?",
      answer: "Yes, we specialize in moves to all types of senior living communities including independent living facilities, assisted living communities, nursing homes, and memory care facilities throughout Greater Ottawa, Kanata, Orleans, and surrounding areas. We're familiar with the requirements of most senior residences and coordinate directly with facility staff."
    },
    {
      question: "What makes your senior moving service different?",
      answer: "Our team is specially trained in senior care, providing patience, respect, and emotional support throughout the moving process. We take a no-rush approach, allowing extra time for decision-making and breaks. We coordinate closely with family members, and handle everything from packing to complete setup in the new home, including making the bed and organizing the kitchen."
    },
    {
      question: "Can you help with medical equipment and medications?",
      answer: "Absolutely. We take special care with medical equipment, mobility aids, and medications. We ensure these essential items are packed last, transported safely, and unpacked first at your new home so everything is accessible immediately upon arrival."
    },
    {
      question: "Do you offer in-home consultations for senior moves?",
      answer: "Yes, we provide free in-home consultations for all senior moves. This allows us to understand specific needs, assess the scope of the move, meet with family members, and create a customized moving plan that addresses any concerns or special requirements."
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
        <title>Senior Moving Services Ottawa ON | Elderly Relocation Specialists | Prestige Moving</title>
        <meta name="description" content="Compassionate senior moving services in Ottawa ON. WSIB certified movers specializing in elderly relocation, downsizing help, retirement community & assisted living moves. Free consultation!" />
        <meta name="keywords" content="senior moving Ottawa, elderly relocation ON, downsizing help Ottawa, retirement home moving, senior citizen movers, assisted living moving, memory care relocation" />
        <meta property="og:title" content="Senior Moving Services Ottawa | Compassionate Elderly Relocation | Prestige Moving" />
        <meta property="og:description" content="Ottawa's trusted senior moving specialists. Compassionate downsizing help, retirement community moves, and assisted living relocations. Patient, professional service for your loved ones." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Senior Moving Services Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="Compassionate senior moving in Ottawa. Specialized care for elderly relocations and downsizing." />
        <meta name="twitter:image" content="https://prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://prestigemoving.ca/services/senior-moving" />
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
            <source src={seniorVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332] via-[#1A2332]/90 to-[#1A2332]/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <Badge className="bg-primary/20 text-primary border-primary/40 px-4 py-1.5" data-testid="badge-senior-moving">
                  <Heart className="h-4 w-4 mr-2" />
                  Compassionate Senior Care
                </Badge>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/40" data-testid="badge-free-consultation">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Free Consultation
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Senior Moving<br />
                <span className="text-primary">With Compassion</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                Gentle, patient moving services for <span className="text-primary font-semibold">life's important transitions</span>. We provide the extra care, time, and understanding your loved ones deserve.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/book">
                  <Button size="lg" className="text-lg font-bold px-8 py-7 shadow-xl shadow-primary/30 group" data-testid="button-hero-quote">
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

              <div className="flex flex-wrap gap-6">
                <WorkSafeBadge size="md" data-testid="badge-worksafe" />
                <div className="flex items-center gap-2 text-white/70">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Senior Care Trained</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Timer className="h-5 w-5 text-primary" />
                  <span>No Rush Approach</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Senior Moving" serviceName="Senior Moving" />

        {/* Stats Bar */}
        <section className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "2,000+", label: "Seniors Moved" },
                { value: "5.0★", label: "Family Rating" },
                { value: "15+", label: "Years Experience" },
                { value: "Free", label: "In-Home Consult" }
              ].map((stat, index) => (
                <div key={index} data-testid={`stat-${index}`}>
                  <div className="text-2xl md:text-4xl font-black text-[#1A2332]">{stat.value}</div>
                  <div className="text-sm font-bold text-[#1A2332]/80 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Our Service - SEO Content */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-primary/10 text-primary mb-4">About Our Service</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                  Ottawa's Compassionate Senior Moving Specialists
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Relocating an elderly loved one requires patience, understanding, and specialized care. As the <Link href="/" className="text-primary hover:underline">Ottawa movers</Link> families trust for senior transitions, <strong>Prestige Moving</strong> provides compassionate service designed to support you through every step of this emotional process.
                  </p>
                  <p>
                    Whether moving to a <strong>retirement community, assisted living facility</strong>, or downsizing to a smaller home, our trained team provides the extra attention and time that senior moves deserve.
                  </p>
                  <p>
                    As a <strong>WSIB certified moving company</strong>, we prioritize safety while offering the patience and care that makes all the difference. Our movers are trained in senior care and understand the emotional aspects of these important life transitions.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/book">
                    <Button size="lg" className="font-bold" data-testid="button-about-quote">
                      Schedule Free Consultation
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden h-[400px] bg-gradient-to-br from-primary/20 to-amber-500/20 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#1A2332]/5" />
                <div className="relative text-center p-8">
                  <div className="h-24 w-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Caring for Families</h3>
                  <p className="text-muted-foreground mb-6">Since 2009</p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex -space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-10 w-10 rounded-full bg-primary border-2 border-white flex items-center justify-center">
                          <Star className="h-4 w-4 text-[#1A2332] fill-[#1A2332]" />
                        </div>
                      ))}
                    </div>
                    <div className="text-left">
                      <div className="font-bold">350+ Reviews</div>
                      <div className="text-sm text-muted-foreground">5-Star Rated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compassionate Care Features */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Our Approach</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Compassionate Care in Every Step
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What makes our senior moving service different from the rest
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: "Patience & Understanding", description: "We never rush. Our team takes breaks when needed and works at your loved one's pace.", color: "from-rose-500 to-rose-600" },
                { icon: Users, title: "Family Coordination", description: "We work closely with family members, keeping everyone informed throughout the process.", color: "from-blue-500 to-blue-600" },
                { icon: Clock, title: "No Rush Approach", description: "Extra time built in for decision-making, reminiscing, and saying goodbye to the old home.", color: "from-emerald-500 to-emerald-600" },
                { icon: HandHeart, title: "Emotional Support", description: "Our movers are trained to provide comfort during this emotional life transition.", color: "from-violet-500 to-violet-600" },
                { icon: Shield, title: "Heirloom Protection", description: "Extra care for photo albums, antiques, and items of deep sentimental value.", color: "from-amber-500 to-amber-600" },
                { icon: Award, title: "Complete Home Setup", description: "We arrange furniture, make the bed, and organize so the new space feels like home.", color: "from-primary to-amber-600" }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg" data-testid={`card-compassionate-${index}`}>
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

        {/* Service Types Tabs */}
        <section className="py-16 md:py-20 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Senior Moving Services
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Specialized solutions for every type of senior relocation
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {serviceTypes[activeTab].features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/book">
                    <Button size="lg" className="font-bold" data-testid="button-service-quote">
                      Get Free Quote
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden h-[300px] bg-gradient-to-br from-primary/30 to-amber-500/30 flex items-center justify-center">
                  <div className="text-center">
                    {(() => {
                      const IconComponent = serviceTypes[activeTab].icon;
                      return (
                        <div className="h-20 w-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                      );
                    })()}
                    <p className="text-white font-semibold text-lg">{serviceTypes[activeTab].title}</p>
                    <p className="text-white/60 text-sm">Specialized Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Family Reviews</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                What Families Say
              </h2>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span>Based on 350+ Google Reviews</span>
              </div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-2 shadow-xl" data-testid="testimonial-card">
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
        <section className="py-16 md:py-20 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Coverage</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Senior Moving Areas We Serve
              </h2>
              <p className="text-lg text-white/60">
                Comprehensive senior relocation services across the National Capital Region
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {neighborhoods.map((hood, index) => (
                <Badge 
                  key={index}
                  className="bg-white/10 text-white border-white/20 hover:bg-primary hover:text-[#1A2332] hover:border-primary transition-all duration-300 cursor-pointer px-4 py-2 text-sm font-medium"
                  data-testid={`badge-area-${index}`}
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  {hood}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our senior moving services
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
                  <AccordionTrigger className="text-left hover:no-underline py-6" data-testid={`button-faq-${index}`}>
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
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">More Services</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Related Moving Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Additional services to support your senior's transition
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/services/residential-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-residential">
                  <CardContent className="p-6">
                    <Home className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Residential Moving</h3>
                    <p className="text-muted-foreground">Complete home moving services for families</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/packing-services">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-packing">
                  <CardContent className="p-6">
                    <Package className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Packing Services</h3>
                    <p className="text-muted-foreground">Professional packing for fragile and sentimental items</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/storage-solutions">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-storage">
                  <CardContent className="p-6">
                    <Warehouse className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Storage Solutions</h3>
                    <p className="text-muted-foreground">Climate-controlled storage for downsizing needs</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/antique-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-antique">
                  <CardContent className="p-6">
                    <Gem className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Antique Moving</h3>
                    <p className="text-muted-foreground">Specialized care for cherished heirlooms</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/piano-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-piano">
                  <CardContent className="p-6">
                    <Music className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Piano Moving</h3>
                    <p className="text-muted-foreground">Safe transport for family pianos and organs</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/long-distance-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-long-distance">
                  <CardContent className="p-6">
                    <Truck className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Long Distance Moving</h3>
                    <p className="text-muted-foreground">Relocating to be closer to family across BC</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Form Section */}
        <section className="py-16 md:py-20 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary text-[#1A2332]">Free Consultation</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Caring for Your Loved Ones
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Schedule a free in-home consultation to discuss your senior moving needs. Our compassionate team is here to help make this transition as smooth as possible.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Free in-home consultation</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Personalized moving plan</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Family coordination included</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Complete setup at new home</span>
                  </li>
                </ul>
              </div>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Request Your Free Consultation</CardTitle>
                  <CardDescription>Tell us about your needs and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="name"
                          placeholder="John Smith"
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
                          placeholder="john@example.com"
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
                          placeholder="604-555-0123"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="pl-10"
                          required
                          data-testid="input-phone"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Move</Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Textarea
                          id="message"
                          placeholder="Please share any details about the move, special requirements, or concerns..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="pl-10 min-h-[100px]"
                          data-testid="input-message"
                        />
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full"
                      data-testid="button-submit-form"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Request Free Consultation
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

        {/* Related Resources / Internal Links */}
        <section className="py-10 bg-gray-50 border-y border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-4 text-center">Related Senior Moving Resources</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/senior-movers-ottawa">
                <Button variant="outline" size="sm" className="border-[#C5A572] text-[#C5A572]">Senior Movers Ottawa — Pricing & Full Guide</Button>
              </Link>
              <Link href="/senior-moving-services-ottawa">
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700">Ottawa Senior Movers — Services Overview</Button>
              </Link>
              <Link href="/downsizing-moving-ottawa">
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700">Downsizing Moving Ottawa</Button>
              </Link>
              <Link href="/services/long-distance-moving">
                <Button variant="outline" size="sm" className="border-gray-300 text-gray-700">Long Distance Senior Moves</Button>
              </Link>
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
              <Heart className="h-4 w-4 text-[#1A2332]" />
              <span className="text-[#1A2332] font-semibold text-sm">Compassionate Care Guaranteed</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2332] mb-6">
              Ready to Discuss Your Senior Move?
            </h2>
            
            <p className="text-xl text-[#1A2332]/80 mb-8 max-w-2xl mx-auto">
              Join 2,000+ Ottawa families who trusted us with their loved one's transition. Get your free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-[#1A2332] hover:bg-[#1A2332]/90 text-white text-lg font-bold px-10 py-7 shadow-xl" data-testid="button-cta-quote">
                  Free Consultation
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
