import { useState } from "react";
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
  Warehouse,
  Shield,
  Lock,
  Thermometer,
  Clock,
  Package,
  Star,
  ArrowRight,
  MapPin,
  Mail,
  User,
  MessageSquare,
  Loader2,
  Home,
  Building2,
  Truck,
  Box,
  Gem,
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import storageVideo from "@assets/generated_videos/climate_controlled_storage_facility.mp4";

export default function StorageSolutions() {
  const { toast } = useToast();
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
      const response = await apiRequest("POST", "/api/quote-request", {
        ...formData,
        serviceType: "Storage Solutions",
      });
      
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 1 hour with your storage quote.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or call us directly at 604-616-6066",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Storage Solutions Vancouver",
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
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "City",
      "name": "Vancouver"
    },
    "description": "Secure storage solutions in Vancouver. Climate-controlled units with flexible terms. Short-term and long-term storage for moving transitions."
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are your storage facility security features?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our facilities feature 24/7 video surveillance, motion-activated lighting, individually alarmed units, and electronic access control. Only authorized personnel can enter the building."
        }
      },
      {
        "@type": "Question",
        "name": "Is your storage climate-controlled?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our storage units are climate-controlled with temperature and humidity regulation. This protects sensitive items like antiques, electronics, artwork, and documents from damage."
        }
      },
      {
        "@type": "Question",
        "name": "How long can I store my items?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible terms from as short as one week to multi-year storage. There are no minimum or maximum time requirements, and you can extend or shorten your storage period at any time."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "What are your storage facility security features?",
      answer: "Our facilities feature 24/7 video surveillance, motion-activated lighting, individually alarmed units, and electronic access control. Only authorized personnel can enter the building, and every access is logged and tracked for your peace of mind."
    },
    {
      question: "Is your storage climate-controlled?",
      answer: "Yes, all our storage units are climate-controlled with temperature and humidity regulation. This protects sensitive items like antiques, electronics, artwork, wine collections, and important documents from damage due to extreme temperatures or moisture."
    },
    {
      question: "How long can I store my items?",
      answer: "We offer flexible terms from as short as one week to multi-year storage. There are no minimum or maximum time requirements, and you can extend or shorten your storage period at any time with just a phone call. We bill monthly with pro-rated options available."
    },
    {
      question: "Do you pick up and deliver my stored items?",
      answer: "Absolutely! Our full-service storage includes pickup from your location, professional packing if needed, secure transportation to our facility, and delivery back to you when you're ready. You never need to visit the storage facility yourself."
    },
    {
      question: "What items can I store with you?",
      answer: "We can store virtually anything: furniture, appliances, electronics, artwork, antiques, pianos, business inventory, documents, seasonal items, and specialty items. The only restrictions are hazardous materials, perishables, and illegal items."
    },
    {
      question: "Is my storage insured?",
      answer: "Yes, all items in our care are covered by our comprehensive WorkSafe BC insurance. We also offer additional valuation coverage options for high-value items. You'll receive a detailed inventory list and can add your own insurance policy if desired."
    }
  ];

  const storagePackages = [
    {
      name: "Compact",
      size: "5' x 5'",
      items: "Studio apartment, seasonal items",
      price: "$99/mo",
      popular: false
    },
    {
      name: "Standard",
      size: "10' x 10'",
      items: "1-2 bedroom apartment contents",
      price: "$179/mo",
      popular: false
    },
    {
      name: "Family",
      size: "10' x 15'",
      items: "2-3 bedroom home contents",
      price: "$249/mo",
      popular: true
    },
    {
      name: "Commercial",
      size: "10' x 20'",
      items: "Large home or business inventory",
      price: "$349/mo",
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Storage Solutions Vancouver BC | Climate-Controlled Storage | Prestige Moving</title>
        <meta name="description" content="Secure storage solutions in Vancouver BC. Climate-controlled units, flexible terms, WorkSafe BC certified. Short-term and long-term storage. Free quote!" />
        <meta name="keywords" content="storage solutions Vancouver, moving storage BC, climate controlled storage, secure storage Vancouver, short term storage" />
        <meta property="og:title" content="Storage Solutions Vancouver | Prestige Moving" />
        <meta property="og:description" content="Secure, climate-controlled storage in Vancouver. Flexible terms, professional handling, full insurance. Perfect for moving transitions." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://vancouver.prestigemoving.ca/services/storage-solutions" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        {/* Video Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="hero-video"
          >
            <source src={storageVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/60" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-[#C5A572] text-white hover:bg-[#B8956A] text-sm px-4 py-1.5">
                Climate-Controlled Facilities
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Secure Storage<br />
                <span className="text-[#C5A572]">Solutions in Vancouver</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Whether you need short-term storage during your move or long-term solutions, we provide secure, climate-controlled facilities with flexible terms.
              </p>
              
              {/* Stats Bar */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">24/7 Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">Fully Insured</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button 
                    size="lg" 
                    className="bg-[#C5A572] hover:bg-[#B8956A] text-white text-base px-8 py-6 h-auto group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    data-testid="button-get-storage-quote"
                  >
                    Get Storage Quote
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:604-616-6066">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 text-base px-8 py-6 h-auto backdrop-blur-sm"
                    data-testid="button-call-hero"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    604-616-6066
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Storage Packages */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Flexible Options</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Storage Unit Sizes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect size for your storage needs with flexible monthly terms
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {storagePackages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={`relative hover-elevate transition-all duration-300 ${pkg.popular ? 'ring-2 ring-[#C5A572]' : ''}`}
                  data-testid={`card-storage-package-${index}`}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A572] text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <div className="text-2xl font-semibold text-muted-foreground mt-1">{pkg.size}</div>
                    <div className="text-3xl font-bold text-[#C5A572] mt-2">{pkg.price}</div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">{pkg.items}</p>
                    <Link href="/book">
                      <Button 
                        variant={pkg.popular ? "default" : "outline"} 
                        className="w-full"
                        data-testid={`button-book-storage-${index}`}
                      >
                        Reserve Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Storage */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Storage?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Safe, secure, and convenient storage solutions for all your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-elevate" data-testid="card-feature-insured">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Shield className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Fully Insured</CardTitle>
                  <CardDescription>
                    WorkSafe BC coverage protects your belongings while in our care
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-elevate" data-testid="card-feature-security">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Lock className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>24/7 Security</CardTitle>
                  <CardDescription>
                    State-of-the-art security systems with monitoring and controlled access
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-elevate" data-testid="card-feature-climate">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Thermometer className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Climate Control</CardTitle>
                  <CardDescription>
                    Temperature and humidity controlled to protect sensitive items
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Storage Options */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Storage Options
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-elevate" data-testid="card-short-term-storage">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Short-Term Storage</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Perfect for moving transitions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Flexible day, week, or month terms</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Quick access when you need it</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>No long-term commitment required</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-long-term-storage">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Warehouse className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Long-Term Storage</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Extended storage solutions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Competitive monthly rates</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Ideal for downsizing or renovations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Professional inventory management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-residential-storage">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Package className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Residential Storage</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Household furniture and belongings</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Seasonal items and decorations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Sports equipment and toys</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Documents and personal items</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-commercial-storage">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Warehouse className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Commercial Storage</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Office furniture and equipment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Inventory and stock overflow</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Business documents and archives</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Seasonal business items</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Store */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              What We Can Store
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg bg-accent/30 hover-elevate">
                <h3 className="font-semibold mb-3">Furniture</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Sofas & Chairs</li>
                  <li>Tables & Desks</li>
                  <li>Beds & Mattresses</li>
                  <li>Cabinets & Dressers</li>
                </ul>
              </div>

              <div className="text-center p-6 rounded-lg bg-accent/30 hover-elevate">
                <h3 className="font-semibold mb-3">Appliances</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Refrigerators</li>
                  <li>Washers & Dryers</li>
                  <li>Ovens & Stoves</li>
                  <li>Small Appliances</li>
                </ul>
              </div>

              <div className="text-center p-6 rounded-lg bg-accent/30 hover-elevate">
                <h3 className="font-semibold mb-3">Electronics</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>TVs & Monitors</li>
                  <li>Computers</li>
                  <li>Audio Equipment</li>
                  <li>Office Equipment</li>
                </ul>
              </div>

              <div className="text-center p-6 rounded-lg bg-accent/30 hover-elevate">
                <h3 className="font-semibold mb-3">Specialty Items</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Artwork & Antiques</li>
                  <li>Pianos</li>
                  <li>Sports Equipment</li>
                  <li>Seasonal Decorations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              How Storage Works
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C5A572] text-white text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Quote</h3>
                <p className="text-muted-foreground">
                  Tell us what you need to store
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C5A572] text-white text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">We Pick Up</h3>
                <p className="text-muted-foreground">
                  Our team collects your items
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C5A572] text-white text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
                <p className="text-muted-foreground">
                  Items safely stored in our facility
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C5A572] text-white text-2xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">We Deliver</h3>
                <p className="text-muted-foreground">
                  Items returned when you're ready
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our storage solutions
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border rounded-lg px-6 hover-elevate"
                  data-testid={`accordion-faq-${index}`}
                >
                  <AccordionTrigger 
                    className="text-left hover:no-underline py-6"
                    data-testid={`button-faq-trigger-${index}`}
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

        {/* SEO Content Section with Internal Links */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                Secure Storage Solutions in Vancouver
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                <p>
                  Our <strong>secure storage solutions in Vancouver</strong> provide the perfect answer for both short-term and long-term storage needs. With <strong>climate-controlled facilities</strong> throughout the Greater Vancouver area, your belongings are protected from temperature extremes, humidity, and weather damage year-round. Whether you're between moves, downsizing, or simply need extra space, our flexible storage options accommodate any timeline.
                </p>
                <p>
                  What sets our <strong>Vancouver storage services</strong> apart is the complete door-to-door experience. We'll pick up your items, transport them safely to our secure facility, and deliver them whenever you're ready. Our <strong>monitored storage units</strong> feature 24/7 security surveillance, individual access codes, and comprehensive insurance coverage for your peace of mind.
                </p>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Explore Our Related Services</h3>
              <p className="text-muted-foreground mb-6">Discover our comprehensive range of moving services designed to make your relocation seamless.</p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/services/residential-moving">
                  <Card className="hover-elevate cursor-pointer h-full">
                    <CardHeader className="flex flex-row items-center gap-3 pb-2">
                      <Home className="h-5 w-5 text-[#C5A572]" />
                      <CardTitle className="text-base">Residential Moving</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Complete home moving services across Vancouver</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/services/commercial-moving">
                  <Card className="hover-elevate cursor-pointer h-full">
                    <CardHeader className="flex flex-row items-center gap-3 pb-2">
                      <Building2 className="h-5 w-5 text-[#C5A572]" />
                      <CardTitle className="text-base">Commercial Moving</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Office and business relocation experts</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/services/long-distance-moving">
                  <Card className="hover-elevate cursor-pointer h-full">
                    <CardHeader className="flex flex-row items-center gap-3 pb-2">
                      <Truck className="h-5 w-5 text-[#C5A572]" />
                      <CardTitle className="text-base">Long Distance Moving</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Cross-province and nationwide relocations</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/services/packing-services">
                  <Card className="hover-elevate cursor-pointer h-full">
                    <CardHeader className="flex flex-row items-center gap-3 pb-2">
                      <Package className="h-5 w-5 text-[#C5A572]" />
                      <CardTitle className="text-base">Packing Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Professional packing by trained experts</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/services/moving-supplies">
                  <Card className="hover-elevate cursor-pointer h-full">
                    <CardHeader className="flex flex-row items-center gap-3 pb-2">
                      <Box className="h-5 w-5 text-[#C5A572]" />
                      <CardTitle className="text-base">Moving Supplies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Quality boxes and packing materials delivered</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/services/specialty-item-moving">
                  <Card className="hover-elevate cursor-pointer h-full">
                    <CardHeader className="flex flex-row items-center gap-3 pb-2">
                      <Gem className="h-5 w-5 text-[#C5A572]" />
                      <CardTitle className="text-base">Specialty Item Moving</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Safe transport for unique and fragile items</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Form Section */}
        <section className="py-20 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-[#C5A572] text-white">Free Quote</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Get Your Free Storage Quote
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Not sure what size you need? Tell us about your storage requirements and we'll recommend the perfect solution. Free quote, no obligation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Response within 1 hour</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Personalized recommendations</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Transparent pricing</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>No hidden fees</span>
                  </li>
                </ul>
              </div>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Request Your Quote</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you quickly</CardDescription>
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
                          placeholder="604-XXX-XXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="pl-10"
                          required
                          data-testid="input-phone"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">What do you need to store?</Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Textarea
                          id="message"
                          placeholder="Describe your storage needs, items to store, approximate duration..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="pl-10 min-h-[100px] resize-none"
                          required
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

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Store with Confidence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Secure, climate-controlled storage with flexible terms. Call us today for your free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button 
                  size="lg" 
                  className="bg-[#C5A572] hover:bg-[#B8956A] text-white text-base px-8"
                  data-testid="button-final-cta-quote"
                >
                  Get Storage Quote
                </Button>
              </Link>
              <a href="tel:604-616-6066">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base px-8"
                  data-testid="button-final-cta-call"
                >
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
