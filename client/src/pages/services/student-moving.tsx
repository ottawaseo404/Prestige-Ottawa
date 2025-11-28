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
  Building2,
  Calendar,
  Percent,
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { useToast } from "@/hooks/use-toast";
import studentMovingVideo from "@assets/generated_videos/student_moving_vancouver_campus.mp4";

export default function StudentMoving() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 1 hour with your student discount quote.",
    });
    setFormData({ name: "", email: "", phone: "", school: "", message: "" });
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Student Moving Services Vancouver",
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
    "description": "Affordable student moving services in Vancouver. Budget-friendly rates for UBC, SFU, BCIT, and Langara students."
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
        "name": "Do you move students from UBC residence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We specialize in UBC moves from Place Vanier, Totem Park, Marine Drive, and all other residences. We're familiar with loading zones and building protocols."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "How much is the student discount?",
      answer: "Students with valid ID receive 15% off our regular rates. Additional discounts are available for group bookings (multiple students moving on the same day) and mid-month moves when demand is lower. Ask about our semester-end specials!"
    },
    {
      question: "Do you move students from UBC residence?",
      answer: "Yes! We specialize in UBC moves from all residences including Place Vanier, Totem Park, Marine Drive, Thunderbird, Ponderosa, and Walter Gage. We're familiar with all loading zones, elevator booking requirements, and building protocols."
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
      question: "Do I need to provide ID to get the student rate?",
      answer: "Yes, please have your valid student ID ready on moving day. We accept current student ID cards from all accredited Canadian universities and colleges."
    },
    {
      question: "Can you help with international student moves?",
      answer: "Absolutely! We help international students both arriving to Vancouver and leaving at the end of their studies. We can also connect you with storage solutions if you're traveling between semesters."
    }
  ];

  const schools = [
    { name: "UBC", full: "University of British Columbia" },
    { name: "SFU", full: "Simon Fraser University" },
    { name: "BCIT", full: "British Columbia Institute of Technology" },
    { name: "Langara", full: "Langara College" },
    { name: "Douglas", full: "Douglas College" },
    { name: "Capilano", full: "Capilano University" },
  ];

  return (
    <>
      <Helmet>
        <title>Student Moving Services Vancouver | Affordable UBC, SFU Movers | Prestige Moving</title>
        <meta name="description" content="Affordable student moving services in Vancouver. 15% student discount for UBC, SFU, BCIT, Langara students. Dorm and apartment moves. Budget-friendly, professional service!" />
        <meta name="keywords" content="student moving Vancouver, UBC movers, SFU moving service, BCIT student movers, affordable student moving, dorm moving Vancouver, student discount movers" />
        <meta property="og:title" content="Student Moving Services Vancouver | Prestige Moving" />
        <meta property="og:description" content="Affordable student moving in Vancouver. 15% discount for university students. Professional, budget-friendly service." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prestigemoving.ca/services/student-moving" />
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
            <source src={studentMovingVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/60" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-[#C5A572] text-white hover:bg-[#B8956A] text-sm px-4 py-1.5">
                15% Student Discount
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Student Moving<br />
                <span className="text-[#C5A572]">Made Affordable</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Budget-friendly moving services designed for students. Special rates for UBC, SFU, BCIT, Langara, and all Vancouver students.
              </p>
              
              {/* Stats Bar */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <Percent className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">15% Off</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-[#C5A572]" />
                  <span className="text-white font-semibold">5,000+ Students Moved</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button 
                    size="lg" 
                    className="bg-[#C5A572] hover:bg-[#B8956A] text-white text-base px-8 py-6 h-auto group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    data-testid="button-get-student-quote"
                  >
                    Get Student Quote
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

        {/* Schools We Serve */}
        <section className="py-16 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Trusted by Students From
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {schools.map((school, index) => (
                <Card key={index} className="hover-elevate text-center py-4">
                  <CardContent className="p-4">
                    <Building2 className="h-8 w-8 text-[#C5A572] mx-auto mb-2" />
                    <div className="font-bold text-lg">{school.name}</div>
                    <div className="text-xs text-muted-foreground">{school.full}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Students Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Students Choose Prestige Moving
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by thousands of Vancouver students for affordable, hassle-free moves
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <DollarSign className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Student-Friendly Pricing</CardTitle>
                  <CardDescription>
                    15% discount for all students with valid ID. Mini-move specials starting at $199.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Clock className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Flexible Scheduling</CardTitle>
                  <CardDescription>
                    We work around your class schedule, exams, and semester end dates.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-[#C5A572]/10 flex items-center justify-center mb-4">
                    <Shield className="h-7 w-7 text-[#C5A572]" />
                  </div>
                  <CardTitle>Fully Insured</CardTitle>
                  <CardDescription>
                    Your belongings are protected with our comprehensive WSIB coverage.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Student Services */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Student Moving Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized solutions for every student moving situation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Dorm & Residence Moves</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>UBC, SFU, BCIT residence specialists</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Familiar with all loading zones</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Quick checkout-day turnarounds</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Elevator and moving cart handling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Backpack className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Student Apartment Moves</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Basement suite and apartment moves</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Shared rental transitions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>End-of-lease cleaning coordination</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Furniture assembly/disassembly</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>Summer Storage Moves</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Move to storage for summer</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Discounted storage partnerships</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Return delivery in September</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Secure, climate-controlled units</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-[#C5A572]/10 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-[#C5A572]" />
                    </div>
                    <CardTitle>International Student Services</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Airport pickup assistance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Furnished to unfurnished transitions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>End-of-study shipping coordination</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] flex-shrink-0" />
                      <span>Multi-language support available</span>
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
                <Badge className="mb-4 bg-[#C5A572] text-white">Student Special</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Get Your Student Moving Quote
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Show your student ID and save 15% on your move. Plus, ask about our group booking discounts for roommates moving together!
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>15% student discount</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Mini-move specials from $199</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Response within 1 hour</span>
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
                      className="w-full bg-[#C5A572] hover:bg-[#B8956A] text-white py-6"
                      data-testid="button-submit-quote"
                    >
                      Get Student Quote
                      <ChevronRight className="ml-2 h-4 w-4" />
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
              Ready for Your Student Move?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of Vancouver students who trust Prestige Moving. Show your student ID and save 15%!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-[#1A2332] hover:bg-[#2A3342] text-white px-8">
                  Book Student Move
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
