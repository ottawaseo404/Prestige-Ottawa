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
  Crown,
  Shield,
  Package,
  Gem,
  Star,
  ArrowRight,
  Mail,
  User,
  ChevronRight,
  Award,
  Loader2,
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
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
    "name": "Antique Moving Services Vancouver",
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
    "description": "Professional antique moving services in Vancouver. Specialists in handling valuable antiques, heirlooms, and collectibles with museum-quality care and full insurance."
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
      }
    ]
  };

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
    },
    {
      question: "What areas do you serve for antique moving?",
      answer: "We provide antique moving services throughout Greater Vancouver including Vancouver, Burnaby, Richmond, Surrey, Coquitlam, North Vancouver, West Vancouver, and surrounding areas. We also offer long-distance antique moving across British Columbia and Canada."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Antique Moving Services Vancouver | Heirloom & Collectible Movers | Prestige Moving</title>
        <meta name="description" content="Professional antique moving services in Vancouver. Specialists in valuable antiques, heirlooms, collectibles. Museum-quality care, climate-controlled transport, full insurance. Free quote!" />
        <meta name="keywords" content="antique moving Vancouver, heirloom movers BC, collectible moving service, valuable furniture moving, antique transport Vancouver" />
        <meta property="og:title" content="Antique Moving Services Vancouver | Prestige Moving" />
        <meta property="og:description" content="Professional antique moving in Vancouver. Museum-quality care for your valuable antiques and heirlooms. Fully insured." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://vancouver.prestigemoving.ca/services/antique-moving" />
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
            <source src={antiqueVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/60" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-[#C5A572] text-white hover:bg-[#B8956A] text-sm px-4 py-1.5">
                Museum-Quality Care
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Antique Moving<br />
                <span className="text-[#C5A572]">Services in Vancouver</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Your antiques and heirlooms deserve museum-quality care. Our specialists are trained in handling irreplaceable items with the delicacy and expertise they require.
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
                  <Award className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">Expert Handlers</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button 
                    size="lg" 
                    className="bg-[#C5A572] hover:bg-[#B8956A] text-white text-base px-8 py-6 h-auto group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    data-testid="button-get-quote"
                  >
                    Get Antique Moving Quote
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

        {/* Why Trust Us Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Expert Care</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Trust Us With Your Antiques?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Museum-quality care and handling for irreplaceable treasures</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Crown className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Expert Handlers</CardTitle>
                  <CardDescription>Trained specialists who understand antique materials, finishes, and fragility</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Package className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Custom Crating</CardTitle>
                  <CardDescription>Museum-quality crating and packaging for maximum protection</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Shield className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Specialized Insurance</CardTitle>
                  <CardDescription>Comprehensive coverage for valuable and irreplaceable items</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Antiques We Handle */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Antiques We Handle</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From delicate heirlooms to valuable collections, we handle it all with care
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Gem className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Antique Furniture</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Victorian and Edwardian pieces</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Antique armoires and wardrobes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Grandfather clocks</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Antique desks and secretaries</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Crown className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Art & Collectibles</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Oil paintings and artwork</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Sculptures and statues</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>China and porcelain collections</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Crystal and glassware</span>
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
                    <CardTitle>Heirlooms & Valuables</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Family heirlooms</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Antique mirrors</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Vintage rugs and tapestries</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Antique musical instruments</span>
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
                    <CardTitle>Protection Services</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Acid-free wrapping materials</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Climate-controlled transport</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>White-glove handling</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Detailed condition reports</span>
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
                Everything you need to know about our antique moving services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border rounded-lg px-6 hover-elevate"
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

        {/* CTA Form Section */}
        <section className="py-20 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-[#C5A572] text-white">Free Quote</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Get Your Antique Moving Quote
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Tell us about your valuable antiques and we'll provide a customized quote with comprehensive protection. Your heirlooms deserve the best care.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Response within 1 hour</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Custom protection assessment</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Specialized insurance options</span>
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
              Protect Your Treasures Today
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Your antiques and heirlooms deserve museum-quality care. Get a specialized quote from Vancouver's trusted antique movers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button 
                  size="lg" 
                  className="bg-[#1A2332] hover:bg-[#2A3342] text-white px-8"
                  data-testid="button-get-quote-footer"
                >
                  Get Antique Quote
                </Button>
              </Link>
              <a href="tel:604-616-6066">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 px-8"
                  data-testid="button-call-footer"
                >
                  <Phone className="mr-2 h-5 w-5" />
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
