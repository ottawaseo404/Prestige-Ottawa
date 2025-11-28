import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, CheckCircle2, Building2, TruckIcon, Package, Shield, Clock, Briefcase,
  Users, Award, MapPin, Calculator, ArrowRight, Star, Sparkles, Calendar,
  Monitor, Server, Warehouse, Store, Stethoscope, UtensilsCrossed, Factory,
  Dumbbell, HandshakeIcon, Target, Headphones, FileCheck, ClipboardList,
  Loader2, ChevronRight, Mail, User
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import commercialVideo from "@assets/generated_videos/commercial_office_moving_scene.mp4";
import commercialImage from "@assets/commercial_truck_night.png";

export default function CommercialMoving() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [contactForm, setContactForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    currentLocation: "",
    newLocation: "",
    moveDate: "",
    employeeCount: "",
    message: "",
  });


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Moving Services Vancouver",
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
    "description": "Professional commercial and office moving services in Vancouver. Minimize downtime with experienced business movers. IT equipment, furniture, and complete office relocations."
  };

  const whyChooseUs = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Over 15 years performing complex corporate moves across Metro Vancouver and Western Canada"
    },
    {
      icon: TruckIcon,
      title: "Modern Fleet",
      description: "We own our fleet of specialty trucks and vans, maintained in first-rate condition for your valuable assets"
    },
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "WSIB certified, comprehensive liability coverage, and full insurance protects your business assets"
    },
    {
      icon: Star,
      title: "A+ BBB Rating",
      description: "Maintain an excellent rating with the Better Business Bureau - a testament to our service quality"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Professional, trained employees who understand the unique needs of commercial relocations"
    },
    {
      icon: HandshakeIcon,
      title: "Personalized Service",
      description: "Family-owned business offering personalized, professional service at competitive prices"
    },
  ];

  const commercialServices = [
    {
      icon: Building2,
      title: "Office Relocations",
      description: "Complete office moves from small startups to large corporate headquarters",
      features: ["Cubicle & workstation setup", "Furniture assembly", "After-hours moves", "Floor planning"]
    },
    {
      icon: Server,
      title: "IT & Technology",
      description: "Safe handling of servers, computers, and sensitive electronic equipment",
      features: ["Server room relocations", "Cable management", "Equipment labeling", "Network infrastructure"]
    },
    {
      icon: Store,
      title: "Retail Stores",
      description: "Minimize business interruption with efficient retail space moves",
      features: ["Display case moving", "Inventory handling", "Fixture installation", "Quick turnaround"]
    },
    {
      icon: Warehouse,
      title: "Warehouses",
      description: "Large-scale warehouse moves and industrial relocations",
      features: ["Racking systems", "Heavy equipment", "Inventory management", "Logistics planning"]
    },
    {
      icon: Stethoscope,
      title: "Medical & Dental",
      description: "Specialized handling for medical offices and healthcare facilities",
      features: ["Medical equipment", "HIPAA compliance", "Sanitization protocols", "Exam room setup"]
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurants & Hospitality",
      description: "Restaurant equipment and hospitality business relocations",
      features: ["Kitchen equipment", "Refrigeration units", "Dining furniture", "Bar equipment"]
    },
  ];

  const movingProcess = [
    {
      step: 1,
      title: "Free Consultation",
      description: "We start by talking to understand your operational and specific needs. Site visit to assess scope."
    },
    {
      step: 2,
      title: "Custom Plan",
      description: "Develop detailed timeline, logistics plan, and assign your dedicated move coordinator."
    },
    {
      step: 3,
      title: "Pre-Move Prep",
      description: "Professional packing, labeling systems, and equipment inventory documentation."
    },
    {
      step: 4,
      title: "Execute Move",
      description: "Efficient execution with minimal disruption. After-hours and weekend options available."
    },
    {
      step: 5,
      title: "Setup & Support",
      description: "Unpack, arrange, and set up your new space. Post-move support to ensure smooth transition."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Moving Services Vancouver BC | Office & Business Movers | Prestige Moving</title>
        <meta name="description" content="Vancouver's trusted commercial moving company. Office relocations, IT equipment, retail stores, warehouses. Minimize downtime with experienced business movers. Free consultation!" />
        <meta name="keywords" content="commercial moving Vancouver, office movers BC, business relocation, IT equipment moving, corporate moving service, warehouse movers, retail store moving" />
        <meta property="og:title" content="Commercial Moving Services Vancouver | Prestige Moving" />
        <meta property="og:description" content="Vancouver's trusted commercial movers. Office relocations, IT equipment, business moves. Minimal downtime, fully insured, professional service." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://vancouver.prestigemoving.ca/services/commercial-moving" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        {/* Video Hero Section */}
        <section className="relative min-h-[600px] md:min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              poster={commercialImage}
              className="w-full h-full object-cover"
              data-testid="video-commercial-hero"
            >
              <source src={commercialVideo} type="video/mp4" />
              <img src={commercialImage} alt="Commercial Moving Services" className="w-full h-full object-cover" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/85 to-[#1A2332]/70" />
          </div>

          {/* Features Bar at Top */}
          <div className="absolute top-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-b border-white/10 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span>Office Relocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Full Insurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Minimal Downtime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span>5.0 Rated</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 z-10 pt-20">
            <div className="max-w-3xl">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                <Building2 className="h-3 w-3 mr-1" />
                Commercial Moving Experts
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                Commercial Moving<br />
                <span className="text-primary">Service in Vancouver</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed max-w-2xl">
                Our commercial relocation services are designed with your company's functionality and productivity in mind. Whether you're moving one key employee or consolidating offices across the country, we ensure a smooth, seamless transition.
              </p>

              <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed max-w-2xl">
                We understand this as your corporate relocation partner and as a successful business ourselves. In these challenging times, it's imperative that your business keeps operating smoothly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="text-base md:text-lg font-bold px-8 py-6 shadow-xl" data-testid="button-hero-quote">
                    Request Free Quote
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:604-616-6066">
                  <Button size="lg" variant="outline" className="text-base md:text-lg font-bold px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-[#1A2332]" data-testid="button-hero-call">
                    <Phone className="h-5 w-5 mr-2" />
                    604-616-6066
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Stats Bar */}
        <section className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-black text-[#1A2332] group-hover:scale-110 transition-transform">500+</div>
                <div className="text-sm font-medium text-[#1A2332]/80">Business Moves</div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-black text-[#1A2332] group-hover:scale-110 transition-transform">15+</div>
                <div className="text-sm font-medium text-[#1A2332]/80">Years Experience</div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-black text-[#1A2332] group-hover:scale-110 transition-transform">A+</div>
                <div className="text-sm font-medium text-[#1A2332]/80">BBB Rating</div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl md:text-4xl font-black text-[#1A2332] group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-sm font-medium text-[#1A2332]/80">Move Scheduling</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stop Searching Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">Why Choose Prestige Moving</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  You Can Stop Searching for Other Commercial Moving Companies
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  There are many movers claiming to perform the move you need, but very few are as uniquely qualified as Prestige Moving Vancouver. Just as you use professionals for real estate, insurance, and legal matters, you need a professional mover you can trust for your business moving needs.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Your team at Prestige Moving will work diligently to eliminate the bumps that prevent you from running your business smoothly. We go far beyond trucks, boxes and plastic wrap – though we have plenty of that when you need it.
                </p>
                <Link href="/book">
                  <Button size="lg" className="font-bold">
                    Get Free Consultation
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <Card key={index} className="border-2 hover-elevate">
                    <CardHeader className="pb-2">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center mb-3">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Services */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Comprehensive Commercial Moving Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From small offices to large-scale warehouse relocations, we handle every type of commercial move with expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commercialServices.map((service, index) => (
                <Card key={index} className="border-2 hover-elevate h-full">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#1A2332] to-[#2a3a52] flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Moving Process */}
        <section className="py-16 md:py-24 bg-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Our Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How We Handle Your Commercial Move
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                A systematic approach ensures your business remains productive before, during, and after the move
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {movingProcess.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-amber-500 text-white text-2xl font-bold mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Count on Us Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  You Can Count on Prestige Moving as Your Commercial Mover
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Count on Prestige Moving for the insight, advice, expertise, and integrity to deliver the peace of mind you're looking for. We pride ourselves on providing customized relocation solutions that meet the diverse and ever-changing needs of businesses we deal with.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We strive to keep your corporate assets and your employees' valuable possessions safe throughout their journey to a new location. We go the distance to make sure your business remains productive before, during, and after a move.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  We're proud to serve as relocation partners for some of Vancouver's best companies and appreciate that they value us and reuse our services based on the exceptional work we do.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl">
                    <Phone className="h-8 w-8 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Call Us Today</div>
                      <a href="tel:604-616-6066" className="text-xl font-bold hover:text-primary">604-616-6066</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl">
                    <Headphones className="h-8 w-8 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Support Available</div>
                      <span className="text-xl font-bold">24/7 Service</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-amber-500/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Minimize Downtime</h3>
                        <p className="text-muted-foreground">Strategic planning ensures your business operations continue with minimal interruption during the move.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-amber-500/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <ClipboardList className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Dedicated Coordinator</h3>
                        <p className="text-muted-foreground">Your assigned move coordinator oversees every detail from initial planning to final setup.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-amber-500/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <FileCheck className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Complete Documentation</h3>
                        <p className="text-muted-foreground">Detailed inventory tracking and documentation protects your assets and ensures nothing is lost.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A2332] via-[#2a3a52] to-[#1A2332]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                  Get Started Today
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Plan Your Commercial Move With Us
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  Let us develop an understanding of your operational and personal needs. We'll create a custom moving plan tailored to your business.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="text-lg">Free on-site consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="text-lg">Detailed cost estimate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="text-lg">Custom timeline and logistics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="text-lg">After-hours and weekend options</span>
                  </div>
                </div>
              </div>

              <Card className="border-0 shadow-2xl">
                <CardHeader className="bg-primary text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Request Free Consultation
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    Tell us about your business move and we'll contact you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Company Name *</Label>
                      <Input 
                        placeholder="Your Company"
                        value={contactForm.companyName}
                        onChange={(e) => setContactForm(prev => ({ ...prev, companyName: e.target.value }))}
                        data-testid="input-company-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Contact Name *</Label>
                      <Input 
                        placeholder="John Doe"
                        value={contactForm.contactName}
                        onChange={(e) => setContactForm(prev => ({ ...prev, contactName: e.target.value }))}
                        data-testid="input-contact-name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Email *</Label>
                      <Input 
                        type="email"
                        placeholder="john@company.com"
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
                        Current Location
                      </Label>
                      <Input 
                        placeholder="Current address"
                        value={contactForm.currentLocation}
                        onChange={(e) => setContactForm(prev => ({ ...prev, currentLocation: e.target.value }))}
                        data-testid="input-current-location"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-primary" />
                        New Location
                      </Label>
                      <Input 
                        placeholder="New address"
                        value={contactForm.newLocation}
                        onChange={(e) => setContactForm(prev => ({ ...prev, newLocation: e.target.value }))}
                        data-testid="input-new-location"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
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
                      <Label className="flex items-center gap-1">
                        <Users className="h-3 w-3 text-primary" />
                        Number of Employees
                      </Label>
                      <Input 
                        type="number"
                        placeholder="25"
                        value={contactForm.employeeCount}
                        onChange={(e) => setContactForm(prev => ({ ...prev, employeeCount: e.target.value }))}
                        data-testid="input-employee-count"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Additional Details</Label>
                    <textarea 
                      className="w-full min-h-[80px] p-3 border rounded-md resize-none text-sm"
                      placeholder="Tell us about your move - special requirements, IT equipment, timeline preferences..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      data-testid="textarea-message"
                    />
                  </div>

                  <Link href="/book">
                    <Button size="lg" className="w-full font-bold text-lg py-6" data-testid="button-submit">
                      Request Free Consultation
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

        <SharedFooter />
      </div>
    </>
  );
}
