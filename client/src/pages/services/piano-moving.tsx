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
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import pianoVideo from "@assets/generated_videos/grand_piano_professional_moving.mp4";

export default function PianoMoving() {
  const { toast } = useToast();
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
      const response = await apiRequest("POST", "/api/quote-request", {
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
    "name": "Piano Moving Services Vancouver",
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
    "description": "Professional piano moving services in Vancouver. Specialists in grand, baby grand, upright, and digital piano moving. Fully insured with specialized equipment."
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
        "name": "How much does it cost to move a piano in Vancouver?",
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
      }
    ]
  };

  const faqs = [
    {
      question: "How do you move a grand piano?",
      answer: "Grand pianos require specialized handling. We remove the legs and pedal lyre, carefully wrap the body in thick padding, and transport it on its side using a professional piano board. Our trained specialists use proper lifting techniques and secure strapping in our climate-controlled trucks to ensure safe transport. The entire process is handled with extreme care to protect both the exterior finish and internal components."
    },
    {
      question: "How much does it cost to move a piano in Vancouver?",
      answer: "Piano moving costs depend on several factors including the type (upright, baby grand, concert grand), distance, and access challenges like stairs, tight doorways, or elevator availability. Upright pianos typically start at $250, baby grands from $400, and concert grands from $600. Contact us for a free, detailed quote tailored to your specific situation."
    },
    {
      question: "Do you move digital and electric pianos?",
      answer: "Absolutely! We move all types of digital pianos, stage pianos, and synthesizers with cabinets. While these are generally lighter than acoustic pianos, they still require careful handling to protect sensitive electronics and displays. We use appropriate padding and secure transport methods for all electronic instruments."
    },
    {
      question: "Do you offer piano storage services?",
      answer: "Yes! We offer climate-controlled piano storage with carefully maintained temperature and humidity levels to protect your instrument. Our storage facilities maintain optimal conditions (around 42% humidity and consistent temperature) to prevent damage to the wood, strings, soundboard, and internal mechanisms."
    },
    {
      question: "Should I tune my piano after the move?",
      answer: "Yes, we recommend waiting 2-3 weeks after your piano is moved and settled in its new location before having it tuned. This allows the piano to acclimate to the new environment's temperature and humidity. We can provide referrals to trusted piano tuners in the Vancouver area."
    },
    {
      question: "Can you move a piano up or down stairs?",
      answer: "Yes, our trained specialists are experienced in navigating stairs, tight corners, and challenging access points. We use specialized stair climbing equipment and proper techniques to safely move pianos up or down multiple floors. Additional fees may apply for stair moves, which we'll quote in advance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Piano Moving Services Vancouver | Grand & Upright Piano Movers | Prestige Moving</title>
        <meta name="description" content="Professional piano moving services in Vancouver. Specialists in grand, baby grand, and upright pianos. Specialized equipment, fully insured, climate-controlled transport. Get your quote!" />
        <meta name="keywords" content="piano moving Vancouver, grand piano movers, upright piano moving, piano transport BC, professional piano movers" />
        <meta property="og:title" content="Piano Moving Services Vancouver | Prestige Moving" />
        <meta property="og:description" content="Professional piano moving in Vancouver. Specialized equipment, full insurance, climate-controlled transport for all piano types." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://vancouver.prestigemoving.ca/services/piano-moving" />
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
            <source src={pianoVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/60" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-[#C5A572] text-white hover:bg-[#B8956A] text-sm px-4 py-1.5">
                Specialized Piano Moving
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Piano Moving<br />
                <span className="text-[#C5A572]">Services in Vancouver</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Your piano is a valuable instrument that requires specialized care. Our trained movers use professional equipment to safely transport grand, baby grand, upright, and digital pianos.
              </p>
              
              {/* Stats Bar */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">Same-Week Service</span>
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
                    data-testid="button-get-piano-quote"
                  >
                    Get Piano Moving Quote
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Trust Us With Your Piano?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized expertise and equipment for safe piano transport
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Award className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Trained Specialists</CardTitle>
                  <CardDescription>
                    Our team is specifically trained in piano moving techniques and handling
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Truck className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Specialized Equipment</CardTitle>
                  <CardDescription>
                    Piano boards, straps, padding, and climate-controlled trucks
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Shield className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Full Insurance</CardTitle>
                  <CardDescription>
                    Comprehensive coverage specifically for valuable musical instruments
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Types of Pianos We Move */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">All Piano Types</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Types of Pianos We Move
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From concert grands to digital keyboards, we handle them all with care
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Music className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Grand & Baby Grand Pianos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Concert grands (9 feet and larger)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Semi-concert and parlor grands</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Baby grands (5-6 feet)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Petite grands (under 5 feet)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Music className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Upright & Console Pianos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Full-size upright pianos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Studio upright pianos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Console and spinet pianos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Antique and vintage uprights</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Music className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Digital & Electric Pianos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Digital grand pianos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Stage pianos and keyboards</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Electric pianos with cabinets</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Synthesizers and workstations</span>
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
                    <CardTitle>Specialty Services</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Stair and elevator navigation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Crane services for difficult access</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Climate-controlled storage</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Tuning referrals after move</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Piano Moving Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Piano Moving Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A careful, methodical approach to ensure your piano arrives safely
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C5A572] text-white text-2xl font-bold mb-4">1</div>
                <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                <p className="text-sm text-muted-foreground">Evaluate piano type, location, and access points</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C5A572] text-white text-2xl font-bold mb-4">2</div>
                <h3 className="text-lg font-semibold mb-2">Preparation</h3>
                <p className="text-sm text-muted-foreground">Secure lid, wrap with padding, protect keys</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C5A572] text-white text-2xl font-bold mb-4">3</div>
                <h3 className="text-lg font-semibold mb-2">Transport</h3>
                <p className="text-sm text-muted-foreground">Climate-controlled truck with secure strapping</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C5A572] text-white text-2xl font-bold mb-4">4</div>
                <h3 className="text-lg font-semibold mb-2">Placement</h3>
                <p className="text-sm text-muted-foreground">Position in new location, allow to acclimate</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
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
                  className="bg-card border rounded-lg px-6 hover-elevate"
                  data-testid={`accordion-faq-${index}`}
                >
                  <AccordionTrigger 
                    className="text-left hover:no-underline py-6"
                    data-testid={`accordion-trigger-${index}`}
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

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Request Your Quote</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you shortly</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
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
        <section className="py-20 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Move Your Piano?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get a specialized piano moving quote today. We treat your instrument with the care it deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button 
                  size="lg" 
                  className="bg-[#1A2332] hover:bg-[#1A2332]/90 text-white text-base px-8"
                  data-testid="button-get-quote-final"
                >
                  Get Piano Quote
                </Button>
              </Link>
              <a href="tel:604-616-6066">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 text-base px-8"
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
