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
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { useToast } from "@/hooks/use-toast";
import seniorVideo from "@assets/generated_videos/senior_moving_compassionate_service.mp4";

export default function SeniorMoving() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your free consultation.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Senior Moving Services Vancouver",
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
    "description": "Compassionate senior moving services in Vancouver. Specialized care for elderly relocations, downsizing assistance, and retirement community moves. Patient, professional service."
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
          "text": "Yes, we specialize in moves to all types of senior living communities including independent living facilities, assisted living communities, nursing homes, and memory care facilities throughout Greater Vancouver."
        }
      },
      {
        "@type": "Question",
        "name": "What makes your senior moving service different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team is specially trained in senior care, providing patience, respect, and emotional support throughout the moving process. We take a no-rush approach, coordinate with family members, and handle everything from packing to complete setup in the new home."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "How do you help seniors with downsizing?",
      answer: "We provide comprehensive downsizing assistance including sorting belongings, coordinating donations to local charities like the Salvation Army and Habitat for Humanity ReStore, arranging estate sales, and helping plan space in your new home. Our compassionate team takes the time to understand what items are most meaningful to you, ensuring treasured possessions are handled with extra care."
    },
    {
      question: "Do you move seniors to retirement homes and assisted living facilities?",
      answer: "Yes, we specialize in moves to all types of senior living communities including independent living facilities, assisted living communities, nursing homes, and memory care facilities throughout Greater Vancouver, Burnaby, Richmond, and surrounding areas. We're familiar with the requirements of most senior residences and coordinate directly with facility staff."
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
    },
    {
      question: "How do you handle sentimental items and family heirlooms?",
      answer: "We understand that many items hold deep sentimental value. Our team uses extra protection for photo albums, artwork, antiques, and family heirlooms. We label these items clearly and ensure they're handled with the utmost care. We also help preserve the arrangement of items like photo displays so they can be recreated in your new home."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Senior Moving Services Vancouver | Elderly Relocation Specialists | Prestige Moving</title>
        <meta name="description" content="Compassionate senior moving services in Vancouver. Specialized elderly relocation, downsizing help, retirement community moves. Patient, caring professionals. Free consultation!" />
        <meta name="keywords" content="senior moving Vancouver, elderly relocation BC, downsizing help Vancouver, retirement home moving, senior citizen movers" />
        <meta property="og:title" content="Senior Moving Services Vancouver | Prestige Moving" />
        <meta property="og:description" content="Compassionate senior moving in Vancouver. Specialized care for elderly relocations and downsizing. Patient, professional service." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prestigemoving.ca/services/senior-moving" />
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
            <source src={seniorVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/60" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-[#C5A572] text-white hover:bg-[#B8956A] text-sm px-4 py-1.5">
                Compassionate Senior Care
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Senior Moving<br />
                <span className="text-[#C5A572]">Services in Vancouver</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Compassionate, patient moving services designed specifically for seniors. We provide the extra care, time, and attention your loved ones deserve.
              </p>
              
              {/* Stats Bar */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">Trained in Senior Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">No Rush Approach</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button 
                    size="lg" 
                    className="bg-[#C5A572] hover:bg-[#B8956A] text-white text-base px-8 py-6 h-auto group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    data-testid="button-free-consultation"
                  >
                    Free Consultation
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

        {/* Why Families Trust Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Families Trust Us with Senior Moves
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized care and patience for life's important transitions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-elevate" data-testid="card-compassionate-care">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Heart className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Compassionate Care</CardTitle>
                  <CardDescription>
                    Our team is trained in senior care, providing patience, respect, and emotional support
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-elevate" data-testid="card-no-rush">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Clock className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>No Rush Approach</CardTitle>
                  <CardDescription>
                    We take our time to ensure comfort and minimize stress during the transition
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-elevate" data-testid="card-family-coordination">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Users className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Family Coordination</CardTitle>
                  <CardDescription>
                    We work closely with family members to ensure everything goes smoothly
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Senior Moving Services */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Senior Moving Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete moving solutions tailored to seniors' unique needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-elevate" data-testid="card-downsizing">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Home className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Downsizing Assistance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Help sorting and organizing belongings</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Donation coordination with charities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Estate sale and disposal assistance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Space planning for new home</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-retirement-moves">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Retirement Community Moves</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Independent living facilities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Assisted living communities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Nursing home relocations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Memory care facility moves</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-special-care">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Special Care Services</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Careful handling of medications</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Medical equipment transport</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Sentimental item protection</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Photo album and heirloom care</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-complete-setup">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Complete Setup</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Furniture arrangement and setup</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Bed making and linen placement</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Kitchen unpacking and organization</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Picture hanging and decor setup</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Compassionate Approach */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Compassionate Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A gentle, supportive process designed with seniors in mind
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C5A572] text-white text-2xl font-bold mb-4">1</div>
                <h3 className="text-lg font-semibold mb-2">Consultation</h3>
                <p className="text-sm text-muted-foreground">In-home visit to understand needs and concerns</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C5A572] text-white text-2xl font-bold mb-4">2</div>
                <h3 className="text-lg font-semibold mb-2">Planning</h3>
                <p className="text-sm text-muted-foreground">Custom plan with family involvement</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C5A572] text-white text-2xl font-bold mb-4">3</div>
                <h3 className="text-lg font-semibold mb-2">Moving Day</h3>
                <p className="text-sm text-muted-foreground">Patient, careful handling of everything</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C5A572] text-white text-2xl font-bold mb-4">4</div>
                <h3 className="text-lg font-semibold mb-2">Setup</h3>
                <p className="text-sm text-muted-foreground">Complete setup so new home feels like home</p>
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
                Everything you need to know about our senior moving services
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

        {/* CTA Form Section */}
        <section className="py-20 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-[#C5A572] text-white">Free Consultation</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Caring for Your Loved Ones
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Schedule a free in-home consultation to discuss your senior moving needs. Our compassionate team is here to help make this transition as smooth as possible.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Free in-home consultation</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Personalized moving plan</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Family coordination included</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
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
                      className="w-full bg-[#C5A572] hover:bg-[#B8956A] text-white"
                      data-testid="button-submit-form"
                    >
                      Request Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-accent/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Discuss Your Senior Move?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Call us today for a free, no-obligation consultation
            </p>
            <a href="tel:604-616-6066">
              <Button size="lg" className="bg-[#C5A572] hover:bg-[#B8956A] text-white" data-testid="button-call-footer">
                <Phone className="h-5 w-5 mr-2" />
                Call 604-616-6066
              </Button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
