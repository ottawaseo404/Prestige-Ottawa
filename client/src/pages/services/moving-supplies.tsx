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
  MessageSquare,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import movingSuppliesVideo from "@assets/generated_videos/moving_supplies_delivery_vancouver.mp4";

export default function MovingSupplies() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      const response = await apiRequest("POST", "/api/quote-request", {
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
    "name": "Moving Supplies Delivery Vancouver",
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
      "priceRange": "$"
    },
    "areaServed": {
      "@type": "City",
      "name": "Vancouver"
    },
    "description": "Moving supplies delivery service in Vancouver. Professional-grade boxes, packing materials, tape, and protective supplies delivered to your door."
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
          "text": "Yes! Order by noon and we can deliver your moving supplies the same day throughout Greater Vancouver, Burnaby, Richmond, Surrey, and surrounding areas."
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
      }
    ]
  };

  const faqs = [
    {
      question: "Do you offer same-day delivery for moving supplies?",
      answer: "Yes! Order by noon and we can deliver your moving supplies the same day throughout Greater Vancouver, Burnaby, Richmond, Surrey, and surrounding areas. We understand that moving timelines can be tight, so we prioritize fast delivery."
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
    },
    {
      question: "Do you deliver to areas outside Vancouver?",
      answer: "Yes! We deliver throughout Greater Vancouver including Burnaby, Richmond, Surrey, Coquitlam, New Westminster, North Vancouver, West Vancouver, Langley, Delta, and White Rock. Delivery fees may vary by location."
    }
  ];

  const supplyPackages = [
    {
      name: "Studio Pack",
      items: "15 boxes, tape, paper, bubble wrap",
      price: "$89",
      popular: false
    },
    {
      name: "1-Bedroom Pack",
      items: "25 boxes, tape, paper, bubble wrap, wardrobe box",
      price: "$149",
      popular: false
    },
    {
      name: "2-Bedroom Pack",
      items: "40 boxes, all materials, 2 wardrobe boxes",
      price: "$229",
      popular: true
    },
    {
      name: "3-Bedroom Pack",
      items: "60 boxes, complete kit, mattress covers",
      price: "$349",
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Moving Supplies Delivery Vancouver | Boxes, Packing Materials | Prestige Moving</title>
        <meta name="description" content="Moving supplies delivered to your door in Vancouver. Professional-grade boxes, bubble wrap, packing paper, tape, and specialty materials. Same-day delivery available!" />
        <meta name="keywords" content="moving supplies Vancouver, moving boxes delivery, packing materials BC, bubble wrap Vancouver, moving tape delivery, cardboard boxes Vancouver" />
        <meta property="og:title" content="Moving Supplies Delivery Vancouver | Prestige Moving" />
        <meta property="og:description" content="Moving supplies delivered to your door. Professional boxes, packing materials, and protective supplies. Same-day delivery!" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prestigemoving.ca/services/moving-supplies" />
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
            <source src={movingSuppliesVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/60" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-[#C5A572] text-white hover:bg-[#B8956A] text-sm px-4 py-1.5">
                Same-Day Delivery Available
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Moving Supplies<br />
                <span className="text-[#C5A572]">Delivered to You</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Professional-grade boxes, packing materials, and protective supplies delivered right to your door in Greater Vancouver.
              </p>
              
              {/* Stats Bar */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">Same-Day Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">Quality Guaranteed</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button 
                    size="lg" 
                    className="bg-[#C5A572] hover:bg-[#B8956A] text-white text-base px-8 py-6 h-auto group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    data-testid="button-order-supplies"
                  >
                    Order Supplies Now
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

        {/* Supply Packages */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Bundle & Save</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Moving Supply Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pre-assembled kits with everything you need at package prices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supplyPackages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={`relative hover-elevate transition-all duration-300 ${pkg.popular ? 'ring-2 ring-[#C5A572]' : ''}`}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A572] text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-[#C5A572] mt-2">{pkg.price}</div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">{pkg.items}</p>
                    <Link href="/book">
                      <Button variant={pkg.popular ? "default" : "outline"} className="w-full">
                        Order Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Order From Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Order From Us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional-grade supplies at competitive prices with convenient delivery
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Truck className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Same-Day Delivery</CardTitle>
                  <CardDescription>Order by noon for same-day delivery throughout Greater Vancouver</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Box className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Professional Grade</CardTitle>
                  <CardDescription>The same quality materials our professional movers use daily</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <ShoppingBag className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Free Returns</CardTitle>
                  <CardDescription>Return unused supplies within 14 days for a full refund</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Available Supplies */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Available Supplies
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Box className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Moving Boxes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Small boxes (books, heavy items)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Medium boxes (general items)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Large boxes (bedding, pillows)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Wardrobe boxes with hanging bar</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Package className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Packing Materials</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Bubble wrap rolls (various sizes)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Packing paper (newsprint-free)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Foam sheets and pouches</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Packing peanuts</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Scissors className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Tape & Tools</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Heavy-duty packing tape</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Tape dispensers</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Box cutters and scissors</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Markers and labels</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Specialty Protection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Furniture pads and blankets</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Mattress covers</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Stretch wrap</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Corner protectors</span>
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
              <Badge variant="outline" className="mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
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
                  className="bg-card border rounded-lg px-6 hover-elevate"
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

        {/* CTA Form Section */}
        <section className="py-20 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-[#C5A572] text-white">Quick Quote</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Get Your Free Supply Quote
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Not sure what you need? Tell us about your move and we'll recommend the perfect supply package. Free quote, no obligation.
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
                    <span>Bundle discounts available</span>
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
                      className="w-full bg-[#C5A572] hover:bg-[#B8956A] text-white py-6"
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
        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Order Your Moving Supplies?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get professional-grade supplies delivered to your door. Same-day delivery available in Greater Vancouver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-[#1A2332] hover:bg-[#2A3342] text-white px-8">
                  Order Supplies Now
                </Button>
              </Link>
              <a href="tel:604-616-6066">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  604-616-6066
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
