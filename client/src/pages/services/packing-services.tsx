import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, CheckCircle2, Package, Box, Shield, Star, Sparkles, Clock, ArrowRight, Loader2, ChevronRight, Mail, User } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import packingHeroVideo from "@assets/generated_videos/professional_packing_services_vancouver.mp4";

export default function PackingServices() {
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
      await apiRequest("POST", "/api/quote-request", {
        ...formData,
        serviceType: "Packing Services",
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
    "name": "Professional Packing Services Vancouver",
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
    "description": "Expert packing services in Vancouver. Full-service packing, fragile item protection, and quality materials included. Professional packers for stress-free moves."
  };

  return (
    <>
      <Helmet>
        <title>Professional Packing Services Vancouver BC | Expert Packers | Prestige Moving</title>
        <meta name="description" content="Expert packing services in Vancouver BC. Full-service packing, fragile item protection, quality materials. Save time and ensure safe transport. Free quote!" />
        <meta name="keywords" content="packing services Vancouver, professional packers BC, moving packing service, fragile item packing, full service packing" />
        <meta property="og:title" content="Professional Packing Services Vancouver | Prestige Moving" />
        <meta property="og:description" content="Professional packing services in Vancouver. Expert packers, quality materials, fragile item specialists. Make your move stress-free." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prestigemoving.ca/services/packing-services" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        {/* Hero Section with Video */}
        <section className="relative min-h-[70vh] overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={packingHeroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/40" />
          </div>

          {/* Stats Bar at Top */}
          <div className="absolute top-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-b border-white/10 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-primary" />
                  <span>Quality Materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Same Day Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span>5.0 Rated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex items-center min-h-[70vh]">
            <div className="max-w-2xl">
              <Badge className="bg-primary text-[#1A2332] font-bold mb-6 text-sm px-4 py-2">
                <Package className="h-4 w-4 mr-2" />
                Packing Services
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                Professional Packing<br />
                <span className="text-primary">Services in Vancouver</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Let our expert team handle the packing while you focus on your move. Quality materials, careful handling, and peace of mind included.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Premium Materials</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Expert Packers</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Fragile Item Specialists</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="text-base font-bold px-8 py-6 shadow-xl w-full sm:w-auto">
                    Get Free Quote
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:604-616-6066">
                  <Button size="lg" variant="outline" className="text-base font-bold px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-[#1A2332] w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    604-616-6066
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Stats Bar at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="group cursor-pointer transition-transform hover:scale-105">
                  <div className="text-xl md:text-2xl font-black text-[#1A2332]">10,000+</div>
                  <div className="text-xs md:text-sm font-bold text-[#1A2332]/80">Homes Packed</div>
                </div>
                <div className="group cursor-pointer transition-transform hover:scale-105">
                  <div className="flex items-center justify-center gap-1 text-xl md:text-2xl font-black text-[#1A2332]">
                    5.0 <Star className="h-4 w-4 fill-[#1A2332]" />
                  </div>
                  <div className="text-xs md:text-sm font-bold text-[#1A2332]/80">Google Rating</div>
                </div>
                <div className="group cursor-pointer transition-transform hover:scale-105">
                  <div className="text-xl md:text-2xl font-black text-[#1A2332]">Same Day</div>
                  <div className="text-xs md:text-sm font-bold text-[#1A2332]/80">Service Available</div>
                </div>
                <div className="group cursor-pointer transition-transform hover:scale-105">
                  <div className="text-xl md:text-2xl font-black text-[#1A2332]">100%</div>
                  <div className="text-xs md:text-sm font-bold text-[#1A2332]/80">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Packing Services?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional packing saves time, reduces stress, and protects your belongings
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Save Time</CardTitle>
                  <CardDescription>
                    Professional packers work efficiently - what takes you days, we do in hours
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Expert Protection</CardTitle>
                  <CardDescription>
                    Specialized techniques for fragile items, ensuring safe transport and arrival
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Star className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Quality Materials</CardTitle>
                  <CardDescription>
                    Professional-grade boxes, bubble wrap, and packing paper included in service
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24 bg-accent/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Packing Services We Offer
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Package className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Full-Service Packing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Complete home or office packing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>All packing materials provided</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Room-by-room organization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Detailed labeling system</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Sparkles className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Fragile & Specialty Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Dishes, glassware, and china</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Artwork and mirrors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Electronics and TVs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Antiques and collectibles</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Box className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Furniture Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Furniture wrapping and padding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Mattress bags and protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Couch shrink-wrapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Corner and edge protection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Package className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Partial Packing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Kitchen and dining room only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Fragile items only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Last-minute assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Customized packing plans</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Premium Packing Materials
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Box className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Moving Boxes</h3>
                <p className="text-sm text-muted-foreground">
                  Various sizes, new and clean
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Bubble Wrap</h3>
                <p className="text-sm text-muted-foreground">
                  Industrial grade protection
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Packing Paper</h3>
                <p className="text-sm text-muted-foreground">
                  Clean, newsprint-free
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Specialty Items</h3>
                <p className="text-sm text-muted-foreground">
                  Mattress bags, tape, labels
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-accent/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Our Packing Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                <p className="text-muted-foreground">
                  We evaluate your packing needs and provide a quote
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Materials</h3>
                <p className="text-muted-foreground">
                  We arrive with all necessary packing supplies
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Pack</h3>
                <p className="text-muted-foreground">
                  Careful packing with proper labeling
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Ready to Move</h3>
                <p className="text-muted-foreground">
                  Everything packed and ready for moving day
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Quote Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <Badge variant="outline" className="mb-4">Quick Quote</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Get Your Free Packing Quote
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Ready to take the stress out of packing? Fill out the form and we'll get back to you within 1 hour with a personalized quote.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#C5A572] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Free, No-Obligation Quote</h3>
                      <p className="text-muted-foreground">Get an accurate estimate with no commitment required</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#C5A572] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Fast Response Time</h3>
                      <p className="text-muted-foreground">We'll contact you within 1 hour during business hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#C5A572] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">All Materials Included</h3>
                      <p className="text-muted-foreground">Professional-grade boxes, bubble wrap, and packing paper</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#C5A572] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Fully Insured Service</h3>
                      <p className="text-muted-foreground">Your belongings are protected throughout the packing process</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Request Your Quote</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
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
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(604) 555-1234"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="pl-10"
                          required
                          data-testid="input-phone"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your packing needs</Label>
                      <Textarea
                        id="message"
                        placeholder="Describe what you need packed, approximate home size, any fragile items, and your preferred timeline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        data-testid="input-message"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#C5A572] hover:bg-[#B8956A] text-white"
                      disabled={isSubmitting}
                      data-testid="button-submit-quote"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get Your Free Quote
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let Us Handle the Packing
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Professional packing services included in our moving packages or available separately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" variant="secondary" className="text-base px-8">
                  Get Free Quote
                </Button>
              </Link>
              <a href="tel:604-616-6066">
                <Button size="lg" variant="outline" className="text-base px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
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
