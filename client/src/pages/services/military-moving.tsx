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
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import militaryVideo from "@assets/generated_videos/military_pcs_moving_relocation.mp4";

export default function MilitaryMoving() {
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
    "name": "Military Moving Services Vancouver",
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
    "description": "Professional military moving services in Vancouver. PCS moves, military base relocations, CAF-approved movers. Understanding of military timelines and requirements."
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
          "text": "We serve all major military installations in British Columbia including CFB Esquimalt, RCAF bases, and can coordinate cross-country moves to any Canadian military base."
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
      },
      {
        "@type": "Question",
        "name": "Do you coordinate with the Canadian Forces Housing Agency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we're experienced in working with military housing requirements and can coordinate move-in/move-out schedules with base housing offices to ensure a smooth transition."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "Do you handle PCS (Permanent Change of Station) moves?",
      answer: "Yes! We specialize in PCS moves for Canadian Armed Forces members. We understand military timelines, provide proper documentation for reimbursement, and can accommodate last-minute changes due to deployment orders. Our team is trained in the specific requirements of military relocations."
    },
    {
      question: "What military bases do you serve?",
      answer: "We serve all major military installations in British Columbia including CFB Esquimalt, RCAF bases, and can coordinate cross-country moves to any Canadian military base. We have experience with moves to and from bases across Canada including CFB Edmonton, CFB Petawawa, CFB Valcartier, and more."
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
    },
    {
      question: "Do you coordinate with the Canadian Forces Housing Agency?",
      answer: "Yes, we're experienced in working with military housing requirements and can coordinate move-in/move-out schedules with base housing offices to ensure a smooth transition. We understand the inspection requirements and can help ensure your move goes smoothly."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Military Moving Services Vancouver | CAF PCS Movers | Prestige Moving</title>
        <meta name="description" content="Professional military moving services in Vancouver. Experienced with PCS moves, CAF requirements, and military base relocations. Punctual, reliable, and understanding of military needs." />
        <meta name="keywords" content="military moving Vancouver, PCS movers BC, CAF moving service, military base relocation, armed forces movers Vancouver" />
        <meta property="og:title" content="Military Moving Services Vancouver | Prestige Moving" />
        <meta property="og:description" content="Professional military moving. PCS moves, base relocations, understanding of military timelines and requirements." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prestigemoving.ca/services/military-moving" />
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
            <source src={militaryVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/60" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-[#C5A572] text-white hover:bg-[#B8956A] text-sm px-4 py-1.5">
                Military Moving Specialists
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Military Moving<br />
                <span className="text-[#C5A572]">Services in Vancouver</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                We understand the unique challenges of military relocations. From tight timelines to specific requirements, our team handles PCS moves and base relocations with precision.
              </p>
              
              {/* Stats Bar */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">Military Discount</span>
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
                    data-testid="button-get-military-quote"
                  >
                    Get Military Quote
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

        {/* Why Military Families Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Trusted by CAF Families</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Why Military Families Choose Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We understand and respect the unique needs of our service members
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-elevate" data-testid="card-timeline-flexibility">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Clock className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Timeline Flexibility</CardTitle>
                  <CardDescription>We understand orders can change quickly. Flexible scheduling for unexpected deployments and transfers.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-elevate" data-testid="card-documentation">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <FileCheck className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Documentation</CardTitle>
                  <CardDescription>Proper inventories and documentation for reimbursement claims and military requirements.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-elevate" data-testid="card-military-discount">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Award className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Military Discount</CardTitle>
                  <CardDescription>Special rates for active duty, veterans, and military families as our thank you for your service.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Military Moving Services */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Military Moving Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive moving solutions tailored to military requirements
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-elevate" data-testid="card-pcs-moves">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>PCS Moves</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      <span>Permanent Change of Station relocations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      <span>DITY/PPM move assistance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      <span>Weight ticket coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      <span>Proper weight documentation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover-elevate" data-testid="card-base-relocations">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Base Relocations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      <span>CFB Esquimalt moves</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      <span>RCAF base relocations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      <span>Cross-country military moves</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      <span>Temporary housing coordination</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover-elevate" data-testid="card-documentation-support">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <FileCheck className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Documentation Support</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      <span>Detailed inventory sheets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      <span>Weight tickets and receipts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      <span>Damage reports if needed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      <span>Moving expense documentation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover-elevate" data-testid="card-flexible-scheduling">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Flexible Scheduling</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      <span>Last-minute move capability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      <span>Weekend and holiday moves</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      <span>Storage for delayed moves</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      <span>Split shipments available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Thank You For Your Service Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="mb-4">Honoring Our Heroes</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Thank You For Your Service</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              We're proud to support Canadian Armed Forces members and their families. All active duty, reserve, and veterans receive a special discount as our thank you for your dedication and sacrifice.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="hover-elevate text-center" data-testid="card-active-duty">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-[#C5A572]/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-[#C5A572]" />
                  </div>
                  <CardTitle>Active Duty</CardTitle>
                  <CardDescription>Special rates for serving members of the Canadian Armed Forces</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-elevate text-center" data-testid="card-veterans">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-[#C5A572]/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-[#C5A572]" />
                  </div>
                  <CardTitle>Veterans</CardTitle>
                  <CardDescription>Honoring those who have served with exclusive discounts</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-elevate text-center" data-testid="card-military-families">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-[#C5A572]/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#C5A572]" />
                  </div>
                  <CardTitle>Military Families</CardTitle>
                  <CardDescription>Supporting the whole family through every relocation</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Common Questions</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
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
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Form Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-[#C5A572] text-white hover:bg-[#B8956A]">Get Started Today</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ready for Your PCS Move?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get your military moving quote today. We'll work around your timeline and requirements, with special rates for all military members and their families.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#C5A572]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    </div>
                    <span className="text-foreground">Free, no-obligation quotes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#C5A572]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    </div>
                    <span className="text-foreground">Military discount applied automatically</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#C5A572]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    </div>
                    <span className="text-foreground">Response within 1 hour</span>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="tel:604-616-6066" className="inline-flex items-center gap-2 text-lg font-semibold text-[#C5A572] hover:text-[#B8956A]">
                    <Phone className="h-5 w-5" />
                    604-616-6066
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

        {/* Final CTA Banner */}
        <section className="py-16 md:py-24 bg-[#1A2332] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Serving Those Who Serve</h2>
            <p className="text-xl mb-8 text-gray-300">
              Ready to make your PCS move stress-free? Get your military moving quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button 
                  size="lg" 
                  className="bg-[#C5A572] hover:bg-[#B8956A] text-white text-base px-8 py-6 h-auto"
                  data-testid="button-get-quote-cta"
                >
                  Get Military Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:604-616-6066">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 text-base px-8 py-6 h-auto"
                  data-testid="button-call-cta"
                >
                  <Phone className="h-5 w-5 mr-2" />
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
