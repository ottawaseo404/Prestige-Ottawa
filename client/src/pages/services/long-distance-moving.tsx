import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, CheckCircle2, MapPin, TruckIcon, Shield, Clock, Navigation, 
  ArrowRight, Calculator, Star, Package, Users, Sparkles, Calendar,
  Loader2, ChevronRight, Mail, User
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import longDistanceVideo from "@assets/generated_videos/moving_trucks_driving_on_highway.mp4";

const canadianDestinations = [
  // British Columbia
  { city: "Victoria", province: "BC", popular: true },
  { city: "Kelowna", province: "BC", popular: true },
  { city: "Kamloops", province: "BC", popular: false },
  { city: "Nanaimo", province: "BC", popular: false },
  { city: "Prince George", province: "BC", popular: false },
  { city: "Whistler", province: "BC", popular: false },
  // Alberta
  { city: "Calgary", province: "AB", popular: true },
  { city: "Edmonton", province: "AB", popular: true },
  { city: "Red Deer", province: "AB", popular: false },
  { city: "Lethbridge", province: "AB", popular: false },
  // Saskatchewan
  { city: "Saskatoon", province: "SK", popular: false },
  { city: "Regina", province: "SK", popular: false },
  // Manitoba
  { city: "Winnipeg", province: "MB", popular: true },
  { city: "Brandon", province: "MB", popular: false },
  // Ontario
  { city: "Toronto", province: "ON", popular: true },
  { city: "Ottawa", province: "ON", popular: true },
  { city: "Hamilton", province: "ON", popular: false },
  { city: "London", province: "ON", popular: false },
  { city: "Kitchener", province: "ON", popular: false },
  { city: "Mississauga", province: "ON", popular: false },
  // Quebec
  { city: "Montreal", province: "QC", popular: true },
  { city: "Quebec City", province: "QC", popular: true },
  { city: "Gatineau", province: "QC", popular: false },
  // Atlantic Canada
  { city: "Halifax", province: "NS", popular: true },
  { city: "St. John's", province: "NL", popular: false },
  { city: "Fredericton", province: "NB", popular: false },
  { city: "Moncton", province: "NB", popular: false },
  { city: "Charlottetown", province: "PE", popular: false },
];

export default function LongDistanceMoving() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    movingFrom: "",
    movingTo: "",
    moveDate: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/quote-request", {
        ...formData,
        serviceType: "Long Distance Moving",
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
    "name": "Long Distance Moving Services Vancouver",
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
      "@type": "Country",
      "name": "Canada"
    },
    "description": "Professional coast-to-coast moving services from Vancouver to anywhere in Canada. Experienced movers, full insurance, and transparent pricing."
  };

  const popularDestinations = canadianDestinations.filter(d => d.popular);
  const allDestinations = canadianDestinations;

  return (
    <>
      <Helmet>
        <title>Coast to Coast Moving Services | Long Distance Movers Vancouver | Prestige Moving</title>
        <meta name="description" content="Professional coast-to-coast moving services from Vancouver. Moving to Toronto, Calgary, Montreal, or anywhere in Canada? Experienced long distance movers with full insurance and GPS tracking." />
        <meta name="keywords" content="coast to coast moving, long distance moving Vancouver, cross-Canada movers, Vancouver to Toronto movers, interprovincial moving, Canada wide moving services" />
        <meta property="og:title" content="Coast to Coast Moving Services | Prestige Moving Vancouver" />
        <meta property="og:description" content="Professional long distance moving from Vancouver to anywhere in Canada. Full insurance, GPS tracking. Trusted by thousands of families." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://vancouver.prestigemoving.ca/services/long-distance-moving" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        {/* Video Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              data-testid="video-hero-long-distance"
            >
              <source src={longDistanceVideo} type="video/mp4" />
            </video>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/60" />
          </div>

          {/* Stats Bar at Top */}
          <div className="absolute top-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <TruckIcon className="h-4 w-4 text-primary" />
                  <span>Coast-to-Coast Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Full Insurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>GPS Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span>5.0 Rated</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 text-sm px-4 py-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  Coast to Coast Moving
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                  Coast to Coast<br />
                  <span className="text-primary">Moving Services</span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-6 leading-relaxed">
                  Long-distance moving can be stressful. Moving from British Columbia to Nova Scotia, Vancouver to Toronto, or any other cross-country configuration comes with a lot of logistics that need to be worked out. When you've got a big move ahead of you, let <strong className="text-primary">Prestige Moving Vancouver</strong> be your number one coast-to-coast moving service.
                </p>
                <p className="text-lg text-white/70 mb-8">
                  Our professional team is well-versed in moving your belongings safely, securely, and on time. Whether you're moving from the west coast to the east coast, or anywhere in between, we'll help make your move as stress-free as possible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/calculator">
                    <Button size="lg" variant="default" className="text-base px-8 font-bold">
                      <Calculator className="h-5 w-5 mr-2" />
                      Moving Calculator
                    </Button>
                  </Link>
                  <a href="tel:604-616-6066">
                    <Button size="lg" variant="outline" className="text-base px-8 bg-transparent border-2 border-white text-white hover:bg-white/10">
                      <Phone className="h-5 w-5 mr-2" />
                      Call 604-616-6066
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Side - CTA Quote Box */}
              <div className="hidden lg:block">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 max-w-md ml-auto border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#1A2332] mb-2">Get Your Free Quote</h3>
                    <p className="text-gray-600 text-sm">We'll contact you within 30 minutes</p>
                  </div>
                  
                  <div className="space-y-4">
                    <Input 
                      type="text" 
                      placeholder="Your Name" 
                      className="h-12 bg-gray-50 border-gray-200"
                      data-testid="input-long-distance-name"
                    />
                    <Input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="h-12 bg-gray-50 border-gray-200"
                      data-testid="input-long-distance-phone"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <Input 
                        type="text" 
                        placeholder="Moving From" 
                        className="h-12 bg-gray-50 border-gray-200"
                        data-testid="input-long-distance-from"
                      />
                      <Input 
                        type="text" 
                        placeholder="Moving To" 
                        className="h-12 bg-gray-50 border-gray-200"
                        data-testid="input-long-distance-to"
                      />
                    </div>
                    <Input 
                      type="date" 
                      className="h-12 bg-gray-50 border-gray-200"
                      data-testid="input-long-distance-date"
                    />
                    
                    <Link href="/book">
                      <Button size="lg" className="w-full font-bold text-lg py-6 shadow-lg" data-testid="button-long-distance-cta">
                        Get Free Estimate
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Shield className="h-3 w-3 text-primary" />
                      <span>Full Insurance</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-primary" />
                      <span>GPS Tracking</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-primary fill-primary" />
                      <span>5.0 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Stats Bar */}
        <section className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-black text-[#1A2332] group-hover:scale-110 transition-transform">10,000+</div>
                <div className="text-sm font-medium text-[#1A2332]/80">Successful Moves</div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-black text-[#1A2332] group-hover:scale-110 transition-transform flex items-center justify-center gap-1">
                  5.0 <Star className="h-6 w-6 fill-current" />
                </div>
                <div className="text-sm font-medium text-[#1A2332]/80">Google Rating</div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-black text-[#1A2332] group-hover:scale-110 transition-transform">15+</div>
                <div className="text-sm font-medium text-[#1A2332]/80">Years Experience</div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-black text-[#1A2332] group-hover:scale-110 transition-transform">100%</div>
                <div className="text-sm font-medium text-[#1A2332]/80">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Popular Routes</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Some of Our Coast-to-Coast Moving Routes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide professional long distance moving services from Vancouver to destinations across Canada
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {popularDestinations.map((dest) => (
                <Card 
                  key={`${dest.city}-${dest.province}`} 
                  className="hover-elevate cursor-pointer border-2 hover:border-primary/50 transition-all"
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold">Moving to {dest.city}</div>
                      <div className="text-sm text-muted-foreground">{dest.province}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto" />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* All Destinations List */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TruckIcon className="h-5 w-5 text-primary" />
                  All Canadian Destinations We Serve
                </CardTitle>
                <CardDescription>From Vancouver to every major city in Canada</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {allDestinations.map((dest) => (
                    <div 
                      key={`all-${dest.city}-${dest.province}`}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-accent transition-colors"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{dest.city}, {dest.province}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Prestige Moving */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Prestige Moving for Long Distance Moves?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by families across Canada for safe, reliable long distance relocations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                    <Navigation className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>GPS Tracking</CardTitle>
                  <CardDescription>
                    Track your belongings in real-time throughout the entire journey with our GPS tracking system. Know exactly where your items are at all times.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-4">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Full Insurance Coverage</CardTitle>
                  <CardDescription>
                    Comprehensive insurance protects your valuables during the entire long distance move. Complete peace of mind from pickup to delivery.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center mb-4">
                    <Clock className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>On-Time Delivery</CardTitle>
                  <CardDescription>
                    Guaranteed delivery windows with clear communication throughout your move. We respect your time and keep you informed every step of the way.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                    <Package className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Professional Packing</CardTitle>
                  <CardDescription>
                    Our trained packers use premium materials to protect your belongings. We handle everything from fragile antiques to heavy furniture.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center mb-4">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>Experienced Team</CardTitle>
                  <CardDescription>
                    Our movers have years of experience with cross-Canada moves. They know how to handle every challenge the road may bring.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4">
                    <Sparkles className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle>White Glove Service</CardTitle>
                  <CardDescription>
                    Premium care for your most valuable possessions. Specialty item handling for pianos, antiques, artwork, and more.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Moving Process */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Long Distance Moving Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We make cross-Canada moving simple with our proven 5-step process
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: 1, title: "Free Quote", desc: "Detailed inventory assessment and transparent pricing" },
                { step: 2, title: "Planning", desc: "Custom moving plan and timeline for your move" },
                { step: 3, title: "Packing", desc: "Professional packing for safe long-distance transport" },
                { step: 4, title: "Transport", desc: "GPS-tracked secure delivery across Canada" },
                { step: 5, title: "Delivery", desc: "Unpack and setup at your new home" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-amber-500 text-white text-2xl font-bold mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Quote Section */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">Free Quote</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Get Your Free Long Distance Quote
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Tell us about your long distance move and we'll provide a customized quote. Our team will contact you within 1 hour with detailed pricing and options.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Response within 1 hour</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Transparent, all-inclusive pricing</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>Full insurance coverage included</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572]" />
                    <span>GPS tracking on all shipments</span>
                  </li>
                </ul>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Request Your Quote</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you ASAP</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="quote-name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="quote-name"
                          placeholder="Your name"
                          className="pl-10"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          data-testid="input-quote-name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quote-email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="quote-email"
                          type="email"
                          placeholder="your@email.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          data-testid="input-quote-email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quote-phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="quote-phone"
                          type="tel"
                          placeholder="604-555-1234"
                          className="pl-10"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          data-testid="input-quote-phone"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quote-message">Tell us about your long distance move</Label>
                      <Textarea
                        id="quote-message"
                        placeholder="Include details like origin city, destination city, approximate move date, size of your move..."
                        className="min-h-[100px]"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        data-testid="textarea-quote-message"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-[#C5A572] hover:bg-[#B8956A] text-white"
                      disabled={isSubmitting}
                      data-testid="button-submit-quote"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get My Free Quote
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

        {/* Contact CTA Form */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A2332] via-[#2a3a52] to-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                  Get Started Today
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Book Your Long Distance Move Today
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  We're ready to make your long distance move as smooth as possible. Are you ready to book your cross-Canada move?
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="text-lg">Free, no-obligation quotes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="text-lg">Flexible scheduling options</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="text-lg">Full insurance coverage included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="text-lg">Dedicated move coordinator</span>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <Phone className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-sm text-white/60">Call us anytime</div>
                    <a href="tel:604-616-6066" className="text-2xl font-bold text-primary hover:underline">
                      604-616-6066
                    </a>
                  </div>
                </div>
              </div>

              <Card className="border-0 shadow-2xl">
                <CardHeader className="bg-primary text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Get Your Free Quote
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    Fill out the form and we'll contact you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Label>Full Name *</Label>
                    <Input 
                      placeholder="John Doe"
                      value={contactForm.name}
                      onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                      data-testid="input-name"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Email *</Label>
                      <Input 
                        type="email"
                        placeholder="john@email.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                        data-testid="input-email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Phone *</Label>
                      <Input 
                        type="tel"
                        placeholder="604-555-1234"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-primary" />
                        Moving From *
                      </Label>
                      <Input 
                        placeholder="Vancouver, BC"
                        value={contactForm.movingFrom}
                        onChange={(e) => setContactForm(prev => ({ ...prev, movingFrom: e.target.value }))}
                        data-testid="input-moving-from"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-primary" />
                        Moving To *
                      </Label>
                      <Input 
                        placeholder="Toronto, ON"
                        value={contactForm.movingTo}
                        onChange={(e) => setContactForm(prev => ({ ...prev, movingTo: e.target.value }))}
                        data-testid="input-moving-to"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-primary" />
                      Preferred Move Date
                    </Label>
                    <Input 
                      type="date"
                      value={contactForm.moveDate}
                      onChange={(e) => setContactForm(prev => ({ ...prev, moveDate: e.target.value }))}
                      data-testid="input-move-date"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Additional Details</Label>
                    <textarea 
                      className="w-full min-h-[80px] p-3 border rounded-md resize-none text-sm"
                      placeholder="Tell us about your move - number of bedrooms, special items, etc."
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      data-testid="textarea-message"
                    />
                  </div>

                  <Link href="/book">
                    <Button size="lg" className="w-full font-bold text-lg py-6" data-testid="button-submit">
                      Get My Free Quote
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to be contacted by Prestige Moving regarding your move request.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Calculator CTA */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Use Our Moving Calculator</h3>
            <p className="text-muted-foreground mb-6">
              Use our moving calculator to generate a detailed moving quote. It's FREE!
            </p>
            <Link href="/calculator">
              <Button size="lg" className="font-bold px-8">
                <Calculator className="h-5 w-5 mr-2" />
                Moving Calculator
              </Button>
            </Link>
          </div>
        </section>

        {/* Services Links */}
        <section className="py-12 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold mb-6 text-center">You Might Also Be Looking For</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/services/packing-services">
                <Card className="hover-elevate cursor-pointer text-center p-4">
                  <Package className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-medium">Packing Services</div>
                </Card>
              </Link>
              <Link href="/services/storage-solutions">
                <Card className="hover-elevate cursor-pointer text-center p-4">
                  <Package className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-medium">Storage Solutions</div>
                </Card>
              </Link>
              <Link href="/services/specialty-item-moving">
                <Card className="hover-elevate cursor-pointer text-center p-4">
                  <Package className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-medium">Specialty Items</div>
                </Card>
              </Link>
              <Link href="/book">
                <Card className="hover-elevate cursor-pointer text-center p-4">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-medium">Contact Us</div>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        <SharedFooter />
      </div>
    </>
  );
}
