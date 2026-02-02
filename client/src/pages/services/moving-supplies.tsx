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
  Box,
  Package,
  Truck,
  Scissors,
  ShoppingBag,
  Star,
  Clock,
  Shield,
  ArrowRight,
  MapPin,
  Mail,
  User,
  ChevronRight,
  ChevronLeft,
  Loader2,
  Home,
  Building2,
  Warehouse,
  GraduationCap,
  Zap,
  Award,
  Timer,
  Sparkles,
  Heart,
  Music,
  Layers,
  Recycle,
  Calculator,
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { WorkSafeBadge } from "@/components/worksafe-badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import movingSuppliesVideo from "@assets/generated_videos/moving_supplies_delivery_vancouver.mp4";

export default function MovingSupplies() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/quote-request", {
        ...formData,
        serviceType: "Moving Supplies",
      });
      
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 1 hour with your quote.",
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
    "name": "Moving Supplies Delivery Ottawa",
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
      { "@type": "City", "name": "Barrhaven" },
      { "@type": "City", "name": "Gloucester" },
      { "@type": "City", "name": "Gatineau" }
    ],
    "description": "Moving supplies delivery service in Ottawa. Professional-grade boxes, packing materials, tape, and protective supplies delivered to your door. Same-day delivery available."
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer same-day delivery for moving supplies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Order by noon and we can deliver your moving supplies the same day throughout Greater Ottawa, Kanata, Orleans, Nepean, and surrounding areas."
        }
      },
      {
        "@type": "Question",
        "name": "What moving supplies do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a complete range of professional-grade supplies including various box sizes, bubble wrap, packing paper, tape, furniture pads, wardrobe boxes, mattress covers, and specialty boxes for dishes and electronics."
        }
      },
      {
        "@type": "Question",
        "name": "Can I return unused supplies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We accept returns of unused, unopened supplies in their original condition. Simply contact us within 14 days of your purchase for a full refund."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer supply bundles for different home sizes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer pre-assembled kits designed for studio apartments, 1-bedroom, 2-bedroom, 3-bedroom homes, and larger. These bundles include all the essential supplies at a discounted package price."
        }
      },
      {
        "@type": "Question",
        "name": "Are your boxes eco-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we prioritize sustainability. Our boxes are made from recycled cardboard and are fully recyclable. We also offer a box buyback program where we purchase back gently used boxes after your move."
        }
      }
    ]
  };

  const testimonials = [
    { name: "Amanda W.", location: "Westboro", text: "Ordered supplies for my condo move and they arrived the same day! Great quality boxes that held up perfectly. The wardrobe boxes saved me so much time.", rating: 5, date: "1 week ago" },
    { name: "Kevin P.", location: "Kanata", text: "The 2-bedroom pack had everything I needed. Bubble wrap, tape, markers - all professional grade. Saved me multiple trips to the store.", rating: 5, date: "2 weeks ago" },
    { name: "Rachel S.", location: "Orleans", text: "Love that they buy back unused supplies! I returned 8 boxes after my move and got a refund. Eco-friendly and wallet-friendly!", rating: 5, date: "3 weeks ago" },
    { name: "Marcus T.", location: "Nepean", text: "The specialty dish pack boxes were a lifesaver. Every piece of china arrived without a scratch. Worth every penny for the peace of mind.", rating: 5, date: "1 month ago" },
    { name: "Linda H.", location: "Barrhaven", text: "Used Prestige for supplies and their full moving service. The consistency in quality from supplies to service is impressive. Highly recommend!", rating: 5, date: "2 months ago" }
  ];

  const supplyCategories = [
    {
      title: "Boxes & Containers",
      icon: Box,
      description: "Professional-grade moving boxes in every size",
      features: ["Small boxes (1.5 cu ft)", "Medium boxes (3 cu ft)", "Large boxes (4.5 cu ft)", "Wardrobe boxes with bars"]
    },
    {
      title: "Wrapping & Protection",
      icon: Layers,
      description: "Premium protective materials for fragile items",
      features: ["Bubble wrap rolls", "Packing paper (newsprint-free)", "Foam pouches & sheets", "Furniture pads & blankets"]
    },
    {
      title: "Tape & Sealing",
      icon: Scissors,
      description: "Heavy-duty sealing and labeling supplies",
      features: ["Packing tape (6-pack)", "Tape dispensers", "Colored labels", "Permanent markers"]
    },
    {
      title: "Specialty Supplies",
      icon: Shield,
      description: "Protection for unique and valuable items",
      features: ["Dish pack kits", "Mattress covers", "TV/Electronics boxes", "Picture/Mirror boxes"]
    }
  ];

  const faqs = [
    {
      question: "Do you offer same-day delivery for moving supplies?",
      answer: "Yes! Order by noon and we can deliver your moving supplies the same day throughout Greater Ottawa, Kanata, Orleans, Nepean, and surrounding areas. We understand that moving timelines can be tight, so we prioritize fast delivery."
    },
    {
      question: "What moving supplies do you offer?",
      answer: "We offer a complete range of professional-grade supplies including various box sizes (small, medium, large, extra-large), bubble wrap rolls, packing paper, heavy-duty tape, furniture pads, wardrobe boxes with hanging bars, mattress covers, dish pack kits, electronics boxes, and specialized crating materials."
    },
    {
      question: "Can I return unused supplies?",
      answer: "Absolutely! We accept returns of unused, unopened supplies in their original condition. Simply contact us within 14 days of your purchase for a full refund. We'll even pick them up for free if you used our moving services."
    },
    {
      question: "Do you offer supply bundles for different home sizes?",
      answer: "Yes! We offer pre-assembled kits designed for studio apartments, 1-bedroom, 2-bedroom, 3-bedroom homes, and larger. These bundles include all the essential supplies at a discounted package price, saving you both time and money."
    },
    {
      question: "Are your boxes eco-friendly?",
      answer: "Yes, we prioritize sustainability. Our boxes are made from recycled cardboard and are fully recyclable. We also offer a box buyback program where we purchase back gently used boxes after your move."
    }
  ];

  const supplyPackages = [
    {
      name: "Studio Pack",
      description: "Perfect for studio apartments and small spaces",
      items: ["15 moving boxes (mixed sizes)", "1 roll bubble wrap", "1 roll packing paper", "2 rolls packing tape", "Markers & labels"],
      price: "$89",
      popular: false
    },
    {
      name: "1-Bedroom Pack",
      description: "Ideal for 1-bedroom apartments",
      items: ["25 moving boxes (mixed sizes)", "1 wardrobe box", "2 rolls bubble wrap", "2 rolls packing paper", "4 rolls packing tape", "Markers & labels"],
      price: "$149",
      popular: false
    },
    {
      name: "2-Bedroom Pack",
      description: "Most popular for families",
      items: ["40 moving boxes (mixed sizes)", "2 wardrobe boxes", "3 rolls bubble wrap", "3 rolls packing paper", "6 rolls packing tape", "Dish pack kit", "Markers & labels"],
      price: "$229",
      popular: true
    },
    {
      name: "3+ Bedroom Pack",
      description: "Complete kit for larger homes",
      items: ["60 moving boxes (mixed sizes)", "3 wardrobe boxes", "5 rolls bubble wrap", "5 rolls packing paper", "8 rolls packing tape", "Dish pack kit", "2 mattress covers", "Markers & labels"],
      price: "$349",
      popular: false
    }
  ];

  const neighborhoods = [
    "Centretown", "The Glebe", "Westboro", "Hintonburg", "Sandy Hill",
    "Old Ottawa South", "Wellington West", "New Edinburgh", "Rockcliffe Park",
    "Kanata", "Orleans", "Nepean", "Barrhaven", "Gloucester", "Gatineau"
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
        <title>Moving Supplies Delivery Ottawa ON | Boxes, Packing Materials | Prestige Moving</title>
        <meta name="description" content="Moving supplies delivered to your door in Ottawa ON. Professional-grade boxes, bubble wrap, packing paper, tape, and specialty materials. Same-day delivery available. Order online or call 613-555-1234!" />
        <meta name="keywords" content="moving supplies Ottawa, moving boxes delivery, packing materials ON, bubble wrap Ottawa, moving tape delivery, cardboard boxes Ottawa, wardrobe boxes, packing supplies delivery" />
        <meta property="og:title" content="Moving Supplies Delivery Ottawa | Boxes & Packing Materials | Prestige Moving" />
        <meta property="og:description" content="Professional moving supplies delivered to your door in Ottawa. Same-day delivery on boxes, bubble wrap, tape, and packing materials. Free returns on unused supplies!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ottawa.prestigemoving.ca/services/moving-supplies" />
        <meta property="og:image" content="https://ottawa.prestigemoving.ca/og-image.png" />
        <meta property="og:site_name" content="Prestige Moving Ottawa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Moving Supplies Delivery Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="Professional moving supplies delivered to your door. Same-day delivery available in Greater Ottawa." />
        <meta name="twitter:image" content="https://ottawa.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://ottawa.prestigemoving.ca/services/moving-supplies" />
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
            data-testid="video-hero"
          >
            <source src={movingSuppliesVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332] via-[#1A2332]/90 to-[#1A2332]/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <Badge className="bg-primary/20 text-primary border-primary/40 px-4 py-1.5" data-testid="badge-service-type">
                  <Package className="h-4 w-4 mr-2" />
                  Moving Supplies
                </Badge>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/40" data-testid="badge-same-day">
                  <Zap className="h-3 w-3 mr-1" />
                  Same-Day Delivery
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]" data-testid="heading-hero">
                Moving Supplies<br />
                <span className="text-primary">Delivered to You</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed" data-testid="text-hero-description">
                Professional-grade boxes, packing materials, and protective supplies delivered right to your door. <span className="text-primary font-semibold">Same-day delivery</span> available in Greater Ottawa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/book">
                  <Button size="lg" className="text-lg font-bold px-8 py-7 shadow-xl shadow-primary/30 group" data-testid="button-hero-order">
                    Order Supplies Now
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
                <WorkSafeBadge size="md" data-testid="badge-worksafe" />
                <div className="flex items-center gap-2 text-white/70">
                  <Recycle className="h-5 w-5 text-primary" />
                  <span>Eco-Friendly</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Timer className="h-5 w-5 text-primary" />
                  <span>Free Returns</span>
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
                { value: "5,000+", label: "Orders Delivered" },
                { value: "5.0", label: "Google Rating" },
                { value: "Same Day", label: "Delivery Available" },
                { value: "100%", label: "Quality Guaranteed" }
              ].map((stat, index) => (
                <div key={index} data-testid={`stat-${index}`}>
                  <div className="text-2xl md:text-4xl font-black text-[#1A2332]">{stat.value}</div>
                  <div className="text-sm font-bold text-[#1A2332]/80 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-primary/10 text-primary mb-4">About Our Supplies</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6" data-testid="heading-about">
                  Ottawa's Premier Moving Supply Delivery
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Planning a DIY move or need to supplement your moving day supplies? <strong>Prestige Moving Ottawa</strong> delivers professional-grade moving supplies right to your door throughout Greater Ottawa and the National Capital Region.
                  </p>
                  <p>
                    Our supplies are the same high-quality materials our professional movers use daily. From heavy-duty boxes to specialty protection for fragile items, we have everything you need for a successful move.
                  </p>
                  <p>
                    Plus, we're committed to sustainability. Our boxes are made from <strong>recycled cardboard</strong> and we offer a buyback program for gently used supplies after your move.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/book">
                    <Button size="lg" className="font-bold" data-testid="button-about-order">
                      Order Supplies Now
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-8 h-[400px] flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Box, label: "Moving Boxes" },
                    { icon: Layers, label: "Bubble Wrap" },
                    { icon: Scissors, label: "Tape & Tools" },
                    { icon: Shield, label: "Protection" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover-elevate">
                      <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="font-bold text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supply Categories Tabs */}
        <section className="py-16 md:py-20 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Our Products</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4" data-testid="heading-categories">
                Browse Supply Categories
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Professional-grade supplies for every type of move
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              {supplyCategories.map((category, index) => {
                const CategoryIcon = category.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                      activeTab === index 
                        ? 'bg-primary text-[#1A2332] shadow-lg shadow-primary/30' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    data-testid={`tab-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <CategoryIcon className="h-5 w-5" />
                    {category.title}
                  </button>
                );
              })}
            </div>

            {/* Active Category Content */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                    {supplyCategories[activeTab].title}
                  </h3>
                  <p className="text-lg text-white/70 mb-6">
                    {supplyCategories[activeTab].description}
                  </p>

                  <div className="grid grid-cols-1 gap-4 mb-8">
                    {supplyCategories[activeTab].features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/book">
                    <Button size="lg" className="font-bold" data-testid="button-category-order">
                      Order Now
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 to-primary/10 h-[300px] flex items-center justify-center">
                  <div className="text-center p-8">
                    {(() => {
                      const CategoryIcon = supplyCategories[activeTab].icon;
                      return <CategoryIcon className="h-24 w-24 text-primary mx-auto mb-4" />;
                    })()}
                    <p className="text-white font-bold text-xl">{supplyCategories[activeTab].title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kits & Packages */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">
                <Calculator className="h-3 w-3 mr-1" />
                Kits & Packages
              </Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4" data-testid="heading-packages">
                Moving Supply Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pre-assembled kits sized for your home - save up to 25% vs. buying individually
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supplyPackages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={`relative transition-all duration-300 ${pkg.popular ? 'ring-2 ring-primary shadow-xl' : 'hover:shadow-lg'}`}
                  data-testid={`card-package-${index}`}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-[#1A2332]">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="text-4xl font-black text-primary mt-4">{pkg.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {pkg.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/book">
                      <Button 
                        variant={pkg.popular ? "default" : "outline"} 
                        className="w-full"
                        data-testid={`button-order-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        Order Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-muted-foreground mb-4">Need a custom package? We can create one just for you!</p>
              <a href="tel:613-555-1234">
                <Button variant="outline" size="lg" data-testid="button-custom-package">
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Custom Quote
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4" data-testid="heading-why-us">
                The Prestige Difference
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Truck, title: "Same-Day Delivery", description: "Order by noon and receive your supplies the same day in Greater Ottawa", color: "from-amber-500 to-amber-600" },
                { icon: Award, title: "Professional Grade", description: "The same quality materials our professional movers use daily", color: "from-blue-500 to-blue-600" },
                { icon: Recycle, title: "Eco-Friendly", description: "Recycled cardboard boxes with our buyback program for sustainability", color: "from-emerald-500 to-emerald-600" },
                { icon: Timer, title: "Free Returns", description: "Return unused, unopened supplies within 14 days for a full refund", color: "from-violet-500 to-violet-600" },
                { icon: ShoppingBag, title: "Bundle Savings", description: "Save up to 25% with our pre-assembled kits sized for your home", color: "from-rose-500 to-rose-600" },
                { icon: Shield, title: "Quality Guaranteed", description: "Every supply meets our strict quality standards or your money back", color: "from-primary to-amber-600" }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg" data-testid={`card-feature-${index}`}>
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
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Reviews</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4" data-testid="heading-testimonials">
                What Customers Say
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
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Delivery Coverage</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4" data-testid="heading-service-areas">
                Ottawa Areas We Deliver To
              </h2>
              <p className="text-lg text-white/60">
                Same-day delivery available throughout National Capital Region
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

            <div className="text-center mt-8">
              <p className="text-white/60 text-sm">
                Don't see your area? We deliver to all of Greater Ottawa, Greater Ottawa Area, and Fraser Valley!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4" data-testid="heading-faq">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our moving supplies
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border rounded-lg px-6"
                  data-testid={`accordion-item-${index}`}
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6" data-testid={`accordion-trigger-${index}`}>
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
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">More Services</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4" data-testid="heading-related-services">
                Complete Your Move
              </h2>
              <p className="text-lg text-muted-foreground">
                Additional services to make your transition seamless
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/services/packing-services">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-packing-services">
                  <CardContent className="p-6">
                    <Package className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Packing Services</h3>
                    <p className="text-muted-foreground">Professional packing for fragile items and full homes</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/residential-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-residential-moving">
                  <CardContent className="p-6">
                    <Home className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Residential Moving</h3>
                    <p className="text-muted-foreground">Full-service home moving across Ottawa</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/commercial-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-commercial-moving">
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Commercial Moving</h3>
                    <p className="text-muted-foreground">Office and business relocation specialists</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/storage-solutions">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-storage-solutions">
                  <CardContent className="p-6">
                    <Warehouse className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Storage Solutions</h3>
                    <p className="text-muted-foreground">Climate-controlled short and long-term storage</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/student-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-student-moving">
                  <CardContent className="p-6">
                    <GraduationCap className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Student Moving</h3>
                    <p className="text-muted-foreground">Budget-friendly moves for students</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/senior-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-senior-moving">
                  <CardContent className="p-6">
                    <Heart className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Senior Moving</h3>
                    <p className="text-muted-foreground">Compassionate downsizing and relocation assistance</p>
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
                <Badge className="mb-4 bg-primary text-[#1A2332]">Quick Quote</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6" data-testid="heading-quote-form">
                  Get Your Free Supply Quote
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Not sure what you need? Tell us about your move and we'll recommend the perfect supply package. Free quote, no obligation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Response within 1 hour</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Personalized recommendations</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Bundle discounts available</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Free returns on unused supplies</span>
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
                      <Label htmlFor="message">Tell us about your move</Label>
                      <Textarea
                        id="message"
                        placeholder="Home size, move date, any special items..."
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

        {/* Final CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-amber-500 to-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#1A2332]/20 backdrop-blur rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-[#1A2332]" />
              <span className="text-[#1A2332] font-semibold text-sm">Same-Day Delivery Available</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2332] mb-6" data-testid="heading-final-cta">
              Ready to Order Your Supplies?
            </h2>
            
            <p className="text-xl text-[#1A2332]/80 mb-8 max-w-2xl mx-auto">
              Professional-grade moving supplies delivered to your door. Free returns on unused items. Order now for same-day delivery!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-[#1A2332] hover:bg-[#1A2332]/90 text-white text-lg font-bold px-10 py-7 shadow-xl" data-testid="button-cta-order">
                  Order Supplies Now
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
