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
  Dumbbell,
  Shield,
  Tv,
  Bike,
  Wine,
  Star,
  Clock,
  Users,
  ArrowRight,
  Mail,
  User,
  MessageSquare,
  MapPin,
  Loader2,
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import specialtyVideo from "@assets/generated_videos/specialty_item_moving_hot_tub.mp4";

export default function SpecialtyItemMoving() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    itemType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest("POST", "/api/quote-request", {
        ...formData,
        serviceType: "Specialty Item Moving",
      });
      
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 1 hour with your specialty moving quote.",
      });
      setFormData({ name: "", email: "", phone: "", itemType: "", message: "" });
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
    "name": "Specialty Item Moving Services Vancouver",
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
    "description": "Professional specialty item moving services in Vancouver. Expert handling of gym equipment, hot tubs, pool tables, safes, and other oversized items."
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you move a hot tub safely?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We drain and disconnect the hot tub, secure all components, use specialized lifting equipment and dollies, and can arrange crane services for difficult access locations. Our crew is trained specifically in hot tub moving procedures."
        }
      },
      {
        "@type": "Question",
        "name": "Can you move and reassemble a pool table?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We provide complete pool table moving including disassembly, slate protection and transport, reassembly, and professional leveling at your new location. We handle all types including 7', 8', and 9' tables."
        }
      },
      {
        "@type": "Question",
        "name": "What gym equipment do you move?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We move all types of fitness equipment including treadmills, ellipticals, rowing machines, weight machines, free weights, squat racks, cable systems, and complete home gym setups. We handle both residential and commercial gym equipment."
        }
      },
      {
        "@type": "Question",
        "name": "How do you move heavy safes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use specialized equipment including safe dollies, stair climbers, and rigging equipment for heavy safes. Our team is trained in proper weight distribution and can move safes up to 2,000+ lbs safely."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "How do you move a hot tub safely?",
      answer: "We follow a comprehensive hot tub moving process: professional disconnection of electrical and plumbing, complete draining and prep, use of specialized lifting equipment like hot tub dollies and moving straps, protective padding during transport, and crane services for difficult access locations. Our crew is specifically trained in hot tub moving procedures to ensure safe transport."
    },
    {
      question: "Can you move and reassemble a pool table?",
      answer: "Yes! We provide complete pool table moving services including careful disassembly of rails, pockets, and felt, slate protection with specialized covers and padding, secure transport in climate-controlled trucks, professional reassembly at your new location, and precise leveling to ensure perfect gameplay. We handle all table sizes including 7', 8', and 9' tables."
    },
    {
      question: "What gym equipment do you move?",
      answer: "We move all types of fitness equipment including treadmills, ellipticals, stationary bikes, rowing machines, multi-station weight machines, free weights and dumbbells, squat racks and power cages, cable crossover systems, and complete home or commercial gym setups. We handle disassembly, transport, and reassembly as needed."
    },
    {
      question: "How do you move heavy safes?",
      answer: "Safe moving requires specialized expertise and equipment. We use professional safe dollies, stair climbers, and rigging equipment for heavy safes weighing up to 2,000+ lbs. Our team is trained in proper weight distribution, doorway navigation, and floor protection to ensure your safe arrives undamaged while protecting your property."
    },
    {
      question: "Do you offer insurance for specialty items?",
      answer: "Yes, all specialty item moves include our standard liability coverage. We also offer additional valuation protection for high-value items. We recommend discussing your specific items during the quote process so we can recommend appropriate coverage levels for peace of mind."
    },
    {
      question: "How far in advance should I book specialty item moving?",
      answer: "We recommend booking specialty item moves at least 1-2 weeks in advance to ensure availability of specialized equipment and trained crew members. For hot tubs and pool tables especially, advance notice allows us to assess access requirements and plan accordingly. Rush services may be available for urgent moves."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Specialty Item Moving Vancouver | Hot Tub, Pool Table, Gym Equipment Movers | Prestige Moving</title>
        <meta name="description" content="Professional specialty item moving in Vancouver. Hot tubs, pool tables, gym equipment, safes, wine cellars. Experienced crew, specialized equipment. Get your free quote!" />
        <meta name="keywords" content="specialty item moving Vancouver, hot tub movers BC, pool table moving, gym equipment moving, safe moving Vancouver" />
        <meta property="og:title" content="Specialty Item Moving Vancouver | Prestige Moving" />
        <meta property="og:description" content="Professional specialty item moving. Hot tubs, pool tables, gym equipment, and more. Specialized equipment and expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://vancouver.prestigemoving.ca/services/specialty-item-moving" />
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
            <source src={specialtyVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/60" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-[#C5A572] text-white hover:bg-[#B8956A] text-sm px-4 py-1.5">
                Specialized Equipment & Expertise
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Specialty Item<br />
                <span className="text-[#C5A572]">Moving Experts</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                From hot tubs and pool tables to gym equipment and safes, we have the expertise and specialized equipment to move your unique items safely.
              </p>
              
              {/* Stats Bar */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">Expert Crew</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button 
                    size="lg" 
                    className="bg-[#C5A572] hover:bg-[#B8956A] text-white text-base px-8 py-6 h-auto group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    data-testid="button-get-quote-hero"
                  >
                    Get Specialty Quote
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

        {/* Specialty Items We Move */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Expertise</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Specialty Items We Move
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert handling for oversized, heavy, and unusual items with specialized equipment
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-elevate" data-testid="card-gym-equipment">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Dumbbell className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Gym Equipment</CardTitle>
                  <CardDescription>Treadmills, ellipticals, weight machines, free weights, and home gym setups</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-elevate" data-testid="card-recreational">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Bike className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Recreational Items</CardTitle>
                  <CardDescription>Hot tubs, pool tables, foosball, ping pong tables, arcade machines</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-elevate" data-testid="card-heavy-items">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Shield className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Heavy Items</CardTitle>
                  <CardDescription>Safes, vaults, gun safes, industrial equipment, machinery</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Complete Specialty Services */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Specialty Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions for every type of specialty item
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-elevate" data-testid="card-hot-tub-moving">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Bike className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Hot Tub Moving</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Professional disconnection</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Proper draining and prep</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Specialized lifting equipment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Crane services if needed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover-elevate" data-testid="card-pool-table-moving">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Tv className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Pool Table Moving</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Complete disassembly</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Slate protection and transport</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Professional reassembly</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Leveling at new location</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover-elevate" data-testid="card-fitness-equipment">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Dumbbell className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Fitness Equipment</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Commercial gym equipment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Home gym systems</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Treadmills and ellipticals</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Weight systems and racks</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover-elevate" data-testid="card-other-specialty">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Wine className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Other Specialty Items</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Wine collections and cellars</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Aquariums and terrariums</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Motorcycles and ATVs</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Large appliances</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Common Questions</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about specialty item moving
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border rounded-lg px-6"
                  data-testid={`accordion-item-${index}`}
                >
                  <AccordionTrigger 
                    className="text-left hover:no-underline py-6"
                    data-testid={`accordion-trigger-${index}`}
                  >
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Form Section */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-[#C5A572] text-white">Get Your Quote</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Have a Specialty Item to Move?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Tell us about your unique moving needs. We have the equipment and expertise to handle any specialty item safely and professionally.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#C5A572]/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-[#C5A572]" />
                    </div>
                    <span className="text-foreground">Response within 1 hour</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#C5A572]/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-[#C5A572]" />
                    </div>
                    <span className="text-foreground">Fully insured and bonded</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#C5A572]/10 flex items-center justify-center">
                      <Star className="h-5 w-5 text-[#C5A572]" />
                    </div>
                    <span className="text-foreground">5-star rated service</span>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
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
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
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
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(604) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="pl-10"
                        required
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="itemType">What type of item?</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="itemType"
                        placeholder="e.g., Hot tub, pool table, safe..."
                        value={formData.itemType}
                        onChange={(e) => setFormData({ ...formData, itemType: e.target.value })}
                        className="pl-10"
                        required
                        data-testid="input-item-type"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Textarea
                        id="message"
                        placeholder="Tell us about your item, dimensions, access requirements, etc."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="pl-10 min-h-[100px]"
                        data-testid="input-message"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-[#C5A572] hover:bg-[#B8956A] text-white"
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
                        Request Specialty Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Or call us directly at{" "}
                    <a href="tel:604-616-6066" className="text-[#C5A572] font-semibold hover:underline" data-testid="link-phone-form">
                      604-616-6066
                    </a>
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-[#1A2332] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Move Your Specialty Item?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Our expert team is ready to provide a customized solution for your unique moving needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button 
                  size="lg" 
                  className="bg-[#C5A572] hover:bg-[#B8956A] text-white text-base px-8 py-6 h-auto"
                  data-testid="button-get-quote-final"
                >
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:604-616-6066">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 text-base px-8 py-6 h-auto"
                  data-testid="button-call-final"
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
