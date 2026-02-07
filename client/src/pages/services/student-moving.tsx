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
  GraduationCap,
  DollarSign,
  Shield,
  Clock,
  Backpack,
  Star,
  ArrowRight,
  Mail,
  User,
  ChevronRight,
  ChevronLeft,
  Building2,
  Calendar,
  Percent,
  Loader2,
  Home,
  Box,
  Package,
  Warehouse,
  Truck,
  Heart,
  Zap,
  Award,
  Timer,
  Users,
  ThumbsUp,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { WorkSafeBadge } from "@/components/worksafe-badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import studentMovingVideo from "@assets/generated_videos/student_moving_vancouver_campus.mp4";

export default function StudentMoving() {
  const { toast } = useToast();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest("POST", "/api/quote-request", {
        ...formData,
        serviceType: "Student Moving",
      });
      
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 1 hour with your student discount quote.",
      });
      setFormData({ name: "", email: "", phone: "", school: "", message: "" });
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
    "name": "Student Moving Services Ottawa",
    "provider": {
      "@type": "MovingCompany",
      "name": "Prestige Moving Ottawa",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "50 Colonnade Rd Unit 200B",
        "postalCode": "K2E 7J6",
        "addressLocality": "Ottawa",
        "addressRegion": "ON",
        "addressCountry": "CA"
      },
      "telephone": "(613) 600-4000",
      "priceRange": "$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "337"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Ottawa" },
      { "@type": "City", "name": "Kanata" },
      { "@type": "City", "name": "Orleans" },
      { "@type": "City", "name": "Nepean" },
      { "@type": "City", "name": "Gatineau" }
    ],
    "description": "Affordable student moving services in Ottawa. 15% student discount for uOttawa, Carleton, and Algonquin students. Dorm and apartment moves with professional care."
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much is the student discount?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Students with valid ID receive 15% off our regular rates. Additional discounts available for group bookings and mid-month moves."
        }
      },
      {
        "@type": "Question",
        "name": "Do you move students from uOttawa residence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We specialize in uOttawa moves from 90U, Rideau, Henderson, and all other residences. We're familiar with loading zones and building protocols."
        }
      },
      {
        "@type": "Question",
        "name": "Can you move me on short notice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We often accommodate last-minute bookings, especially during non-peak times. We've helped many students with next-day moves!"
        }
      },
      {
        "@type": "Question",
        "name": "What if I only have a few items?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No move is too small! Our student mini-move special starts at just $199 for small loads."
        }
      },
      {
        "@type": "Question",
        "name": "Do you help with international student moves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We help international students arriving and leaving Ottawa, with storage solutions for semester breaks."
        }
      }
    ]
  };

  const testimonials = [
    { name: "Priya K.", location: "uOttawa", text: "Best student moving service! They moved my entire dorm room to my new apartment in Sandy Hill in just 2 hours. Super affordable with the student discount!", rating: 5, date: "2 weeks ago" },
    { name: "Marcus T.", location: "Carleton", text: "These guys understand student budgets. Fast, careful, and my furniture arrived without a scratch. Highly recommend for any student move!", rating: 5, date: "1 month ago" },
    { name: "Emma L.", location: "Algonquin", text: "Moving from residence was stressful but Prestige made it easy. They knew exactly where to park and how to use the elevators. Very professional!", rating: 5, date: "3 weeks ago" },
    { name: "Jason W.", location: "La Cité", text: "My roommates and I all moved together and got a group discount. Saved so much money! They handled our gaming setups with extra care.", rating: 5, date: "1 week ago" },
    { name: "Sofia R.", location: "St. Paul University", text: "As an international student, I was worried about moving. The team was so helpful and patient. They even helped with furniture assembly!", rating: 5, date: "2 months ago" }
  ];

  const serviceTypes = [
    {
      title: "Dorm Moves",
      icon: GraduationCap,
      description: "Expert residence and dorm moving specialists",
      features: ["Elevator booking handled", "Loading zone knowledge", "Quick checkout turnaround", "Move-in/move-out timing"]
    },
    {
      title: "Apartment Moves",
      icon: Building2,
      description: "Basement suites to high-rise apartments",
      features: ["Basement suite access", "Shared rental transitions", "Furniture disassembly", "Stair-friendly equipment"]
    },
    {
      title: "Cross-City Moves",
      icon: Truck,
      description: "Moving anywhere in Greater Ottawa",
      features: ["uOttawa to Downtown", "Carleton to Kanata", "Between campuses", "Any Ottawa area"]
    },
    {
      title: "Storage Options",
      icon: Warehouse,
      description: "Summer storage between semesters",
      features: ["Climate-controlled units", "Flexible rental terms", "Pick-up and delivery", "Secure 24/7 access"]
    }
  ];

  const campuses = [
    { name: "uOttawa", full: "University of Ottawa", areas: "Sandy Hill, Byward Market" },
    { name: "Carleton", full: "Carleton University", areas: "Old Ottawa South, The Glebe" },
    { name: "Algonquin", full: "Algonquin College", areas: "Nepean, Barrhaven" },
    { name: "La Cité", full: "La Cité collégiale", areas: "Orleans, Vanier" },
    { name: "St. Paul", full: "Saint Paul University", areas: "Sandy Hill" },
    { name: "Dominican", full: "Dominican University College", areas: "Centretown" },
    { name: "Willis", full: "Willis College", areas: "Downtown Ottawa" },
    { name: "Cégep", full: "Cégep Heritage College", areas: "Gatineau" },
  ];

  const faqs = [
    {
      question: "How much is the student discount?",
      answer: "Students with valid ID receive 15% off our regular rates. Additional discounts are available for group bookings (multiple students moving on the same day) and mid-month moves when demand is lower. Ask about our semester-end specials!"
    },
    {
      question: "Do you move students from uOttawa residence?",
      answer: "Yes! We specialize in uOttawa moves from all residences including 90U, Rideau, Henderson, Marchand, Stanton, and Thompson. We're familiar with all loading zones, elevator booking requirements, and building protocols."
    },
    {
      question: "Can you move me on short notice?",
      answer: "We understand student schedules can be unpredictable. We often accommodate last-minute bookings, especially during non-peak times. Call us and we'll do our best to fit you in - we've helped many students with next-day moves!"
    },
    {
      question: "What if I only have a few items?",
      answer: "No move is too small! We offer affordable minimum rates for students with just a few items like a bed, desk, and boxes. Our student mini-move special starts at just $199 for small loads."
    },
    {
      question: "Can you help with international student moves?",
      answer: "Absolutely! We help international students both arriving to Ottawa and leaving at the end of their studies. We can also connect you with storage solutions if you're traveling between semesters."
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
        <title>Student Moving Services Ottawa | 15% Discount uOttawa, Carleton, Algonquin Movers | Prestige Moving</title>
        <meta name="description" content="Affordable student moving services in Ottawa. 15% student discount for uOttawa, Carleton, Algonquin students. Dorm and apartment moves starting at $199. WSIB certified. Get your free quote!" />
        <meta name="keywords" content="student moving Ottawa, uOttawa movers, Carleton moving service, Algonquin student movers, affordable student moving, dorm moving Ottawa, student discount movers, La Cité moving, St. Paul University movers" />
        <meta property="og:title" content="Student Moving Services Ottawa | 15% Student Discount | Prestige Moving" />
        <meta property="og:description" content="Affordable student moving in Ottawa. 15% discount for university students. Mini-moves from $199. Professional, budget-friendly service for dorms and apartments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/services/student-moving" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:site_name" content="Prestige Moving Ottawa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Student Moving Services Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="15% student discount on moving services. Dorms, apartments, cross-city moves." />
        <meta name="twitter:image" content="https://prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://prestigemoving.ca/services/student-moving" />
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
            <source src={studentMovingVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332] via-[#1A2332]/90 to-[#1A2332]/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <Badge className="bg-primary/20 text-primary border-primary/40 px-4 py-1.5">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Student Moving
                </Badge>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/40">
                  <Percent className="h-3 w-3 mr-1" />
                  15% Student Discount
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Affordable<br />
                <span className="text-primary">Student Moves</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                Budget-friendly moving for <span className="text-primary font-semibold">uOttawa, Carleton, Algonquin</span> and all Ottawa students. Mini-moves from $199.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/book">
                  <Button size="lg" className="text-lg font-bold px-8 py-7 shadow-xl shadow-primary/30 group" data-testid="button-hero-quote">
                    Get Student Quote
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
                  <span>5.0 Google Rating</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Timer className="h-5 w-5 text-primary" />
                  <span>1-Hour Quotes</span>
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
                { value: "15%", label: "Student Discount" },
                { value: "5,000+", label: "Students Moved" },
                { value: "$199", label: "Mini-Move Start" },
                { value: "5.0★", label: "Google Rating" }
              ].map((stat, index) => (
                <div key={index} data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="text-2xl md:text-4xl font-black text-[#1A2332]">{stat.value}</div>
                  <div className="text-sm font-bold text-[#1A2332]/80 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Our Student Moving Service */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-primary/10 text-primary mb-4">About Our Service</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                  Ottawa's Trusted Student Moving Experts
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Moving as a student shouldn't break the bank. <strong>Prestige Moving Ottawa</strong> offers specialized student moving services designed for tight budgets and busy schedules. Whether you're moving from a uOttawa dorm to an off-campus apartment, or relocating between cities for school, we've got you covered.
                  </p>
                  <p>
                    Our team knows every campus in the National Capital Region - from uOttawa's Sandy Hill loading zones to Carleton's campus roads. We're familiar with residence move-out procedures, building protocols, and can work around your exam schedule.
                  </p>
                  <p>
                    As a <strong>WSIB certified moving company</strong>, your belongings are fully protected. Show your student ID and receive 15% off your move, plus ask about group discounts when roommates book together!
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/book">
                    <Button size="lg" className="font-bold" data-testid="button-about-quote">
                      Get Your Student Quote
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden h-[400px] bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="h-24 w-24 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <GraduationCap className="h-12 w-12 text-[#1A2332]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Student Special</h3>
                    <p className="text-4xl font-black text-primary mb-2">15% OFF</p>
                    <p className="text-muted-foreground">With valid student ID</p>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 bg-white/90 backdrop-blur rounded-xl p-4">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-10 w-10 rounded-full bg-primary border-2 border-white flex items-center justify-center">
                          <Star className="h-4 w-4 text-[#1A2332] fill-[#1A2332]" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="font-bold">5,000+ Students</div>
                      <div className="text-sm text-muted-foreground">Trusted our moves</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Types Tabs */}
        <section className="py-16 md:py-20 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Student Moving Options
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Choose the service that fits your move and budget
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
                
                <div className="relative rounded-2xl overflow-hidden h-[300px] bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    {(() => {
                      const ActiveIcon = serviceTypes[activeTab].icon;
                      return <ActiveIcon className="h-24 w-24 text-primary mx-auto mb-4" />;
                    })()}
                    <p className="text-white font-semibold text-xl">{serviceTypes[activeTab].title}</p>
                    <p className="text-white/60">Starting at $199</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Students Choose Us */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Why Students Choose Prestige Moving
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by thousands of Ottawa students for affordable, hassle-free moves
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: DollarSign, title: "15% Student Discount", description: "Show your valid student ID and save 15% on any move. Mini-moves start at just $199!", color: "from-emerald-500 to-emerald-600" },
                { icon: Users, title: "Group Booking Savings", description: "Moving with roommates? Book together and save even more with our group discounts.", color: "from-blue-500 to-blue-600" },
                { icon: Clock, title: "Flexible Scheduling", description: "We work around your classes, exams, and semester end dates. Even last-minute moves!", color: "from-violet-500 to-violet-600" },
                { icon: ThumbsUp, title: "Campus Experts", description: "We know every campus loading zone, elevator protocol, and building procedure.", color: "from-amber-500 to-amber-600" },
                { icon: Shield, title: "Fully Insured", description: "WSIB certified. Your electronics, furniture, and belongings are protected.", color: "from-rose-500 to-rose-600" },
                { icon: Zap, title: "Quick Turnarounds", description: "Same-day quotes and fast moves - perfect for tight checkout deadlines.", color: "from-primary to-amber-600" }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg" data-testid={`card-why-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
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

        {/* Campus Areas Section */}
        <section className="py-16 md:py-20 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Coverage</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Campus Areas We Serve
              </h2>
              <p className="text-lg text-white/60">
                Expert movers for every school in National Capital Region
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {campuses.map((campus, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors" data-testid={`card-campus-${campus.name.toLowerCase()}`}>
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{campus.name}</h3>
                    <p className="text-sm text-white/60 mb-2">{campus.full}</p>
                    <div className="flex items-center justify-center gap-1 text-xs text-primary">
                      <MapPin className="h-3 w-3" />
                      {campus.areas}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Reviews</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                What Students Say
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
                  <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed" data-testid="text-testimonial">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 bg-gradient-to-br from-primary to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[activeTestimonial].name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-lg" data-testid="text-testimonial-name">{testimonials[activeTestimonial].name}</p>
                        <p className="text-muted-foreground flex items-center gap-1">
                          <GraduationCap className="h-4 w-4" /> {testimonials[activeTestimonial].location}
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

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Student Moving FAQs
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions from students about our moving services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border-2 rounded-lg px-6 hover:border-primary/50 transition-colors"
                  data-testid={`accordion-faq-${index}`}
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
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
                Related Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Additional services to make your student move complete
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/services/residential-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="card-related-residential">
                  <CardContent className="p-6">
                    <Home className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Residential Moving</h3>
                    <p className="text-muted-foreground">Full home moving services across Ottawa</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/packing-services">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="card-related-packing">
                  <CardContent className="p-6">
                    <Package className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Packing Services</h3>
                    <p className="text-muted-foreground">Let us pack for you - save time before exams</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/storage-solutions">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="card-related-storage">
                  <CardContent className="p-6">
                    <Warehouse className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Storage Solutions</h3>
                    <p className="text-muted-foreground">Store your items during summer break</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/moving-supplies">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="card-related-supplies">
                  <CardContent className="p-6">
                    <Box className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Moving Supplies</h3>
                    <p className="text-muted-foreground">Boxes and packing materials delivered</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/long-distance-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="card-related-long-distance">
                  <CardContent className="p-6">
                    <Truck className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Long Distance Moving</h3>
                    <p className="text-muted-foreground">Moving home after graduation</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/specialty-item-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="card-related-specialty">
                  <CardContent className="p-6">
                    <Sparkles className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Specialty Items</h3>
                    <p className="text-muted-foreground">Gaming setups, instruments, and more</p>
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
                <Badge className="mb-4 bg-primary text-[#1A2332]">Student Special</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Get Your Student Moving Quote
                </h2>
                <p className="text-white/70 text-lg mb-8">
                  Show your student ID and save 15% on your move. Plus, ask about our group booking discounts for roommates moving together!
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>15% student discount</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Mini-move specials from $199</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Response within 1 hour</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>WSIB certified</span>
                  </li>
                </ul>
              </div>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Request Student Quote</CardTitle>
                  <CardDescription>Fill out the form for your discounted rate</CardDescription>
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
                    <div className="space-y-2">
                      <Label htmlFor="school">School/University</Label>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="school"
                          placeholder="e.g., UBC, SFU, BCIT"
                          className="pl-10"
                          value={formData.school}
                          onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                          required
                          data-testid="input-school"
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
                            placeholder="student@email.com"
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
                      <Label htmlFor="message">Move Details</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your move: current location, destination, move date, items..."
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
                          Get Student Quote
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
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-amber-500 to-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#1A2332]/20 backdrop-blur rounded-full px-4 py-2 mb-6">
              <GraduationCap className="h-4 w-4 text-[#1A2332]" />
              <span className="text-[#1A2332] font-semibold text-sm">15% Student Discount</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2332] mb-6">
              Ready for Your Student Move?
            </h2>
            
            <p className="text-xl text-[#1A2332]/80 mb-8 max-w-2xl mx-auto">
              Join 5,000+ Ottawa students who trusted us with their move. Get your personalized quote in under 1 hour.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-[#1A2332] hover:bg-[#1A2332]/90 text-white text-lg font-bold px-10 py-7 shadow-xl" data-testid="button-cta-quote">
                  Get Student Quote
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

        <ServiceQuoteForm defaultService="Student Moving" serviceName="Student Moving" />
        <SharedFooter />
      </div>
    </>
  );
}
