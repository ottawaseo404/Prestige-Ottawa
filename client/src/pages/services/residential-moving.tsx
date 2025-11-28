import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, CheckCircle2, Home, TruckIcon, Package, Shield, Clock, Users, Star, MapPin, ArrowRight, Sparkles, Heart, ThumbsUp, Loader2, ChevronRight, Mail, User } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import residentialVideo from "@assets/generated_videos/vancouver_residential_movers_with_boxes.mp4";

export default function ResidentialMoving() {
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
        serviceType: "Residential Moving",
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
    "name": "Residential Moving Services Vancouver",
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
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "500"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Vancouver" },
      { "@type": "City", "name": "Burnaby" },
      { "@type": "City", "name": "Richmond" },
      { "@type": "City", "name": "North Vancouver" },
      { "@type": "City", "name": "West Vancouver" },
      { "@type": "City", "name": "Coquitlam" },
      { "@type": "City", "name": "Surrey" }
    ],
    "description": "Professional residential moving services in Vancouver. Experienced movers for apartments, condos, and houses. WSIB insured with transparent pricing."
  };

  const testimonials = [
    { name: "Sarah M.", location: "Kitsilano", text: "Incredible service! They moved our 3-bedroom house in under 6 hours. Professional, careful, and friendly.", rating: 5 },
    { name: "David L.", location: "North Vancouver", text: "Best moving experience ever. The team was punctual, efficient, and took great care of our furniture.", rating: 5 },
    { name: "Jennifer K.", location: "Burnaby", text: "Moved from a 2BR apartment to our new townhouse. They handled everything perfectly including our grand piano!", rating: 5 }
  ];

  const neighborhoods = [
    "Downtown Vancouver", "Kitsilano", "Yaletown", "Gastown", "Coal Harbour",
    "West End", "Mount Pleasant", "Commercial Drive", "Kerrisdale", "Marpole",
    "Point Grey", "UBC", "Dunbar", "Shaughnessy", "South Cambie"
  ];

  return (
    <>
      <Helmet>
        <title>Residential Moving Services Vancouver BC | Home Movers | Prestige Moving</title>
        <meta name="description" content="Professional residential moving services in Vancouver BC. Experienced movers, WSIB insured, transparent pricing. Apartments, condos, houses. Get your free quote today!" />
        <meta name="keywords" content="residential moving Vancouver, home movers BC, apartment moving, condo moving Vancouver, house moving service, Vancouver movers, Burnaby movers, Richmond moving company" />
        <meta property="og:title" content="Residential Moving Services Vancouver | Prestige Moving" />
        <meta property="og:description" content="Vancouver's trusted residential movers. From studio apartments to 5-bedroom homes. Professional, insured, and affordable." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://vancouver.prestigemoving.ca/services/residential-moving" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        {/* Hero Section with Video */}
        <section className="relative overflow-hidden">
          <div className="relative min-h-[600px] md:min-h-[70vh]">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={residentialVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/60 md:to-transparent" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
              <div className="max-w-2xl">
                <Badge className="bg-primary text-[#1A2332] font-bold mb-4">Residential Moving</Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 leading-tight">
                  Vancouver's #1<br />
                  <span className="text-primary">Home Movers</span>
                </h1>
                <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                  From studio apartments to large family homes, we've helped over 10,000 Vancouver families move safely. WSIB insured, transparent pricing, and experienced movers you can trust.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Link href="/book">
                    <Button size="lg" className="text-base font-bold px-6 md:px-8 py-5 md:py-6 shadow-xl w-full sm:w-auto">
                      Get Free Quote
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                  <a href="tel:604-616-6066">
                    <Button size="lg" variant="outline" className="text-base font-bold px-6 md:px-8 py-5 md:py-6 border-2 border-white text-white hover:bg-white hover:text-[#1A2332] w-full sm:w-auto">
                      <Phone className="h-5 w-5 mr-2" />
                      604-616-6066
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar - Separate from hero content */}
          <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
                <div className="group cursor-pointer transition-transform hover:scale-105">
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#1A2332]">10,000+</div>
                  <div className="text-xs md:text-sm font-bold text-[#1A2332]/80">Homes Moved</div>
                </div>
                <div className="group cursor-pointer transition-transform hover:scale-105">
                  <div className="flex items-center justify-center gap-1 text-xl sm:text-2xl md:text-3xl font-black text-[#1A2332]">
                    5.0 <Star className="h-4 w-4 md:h-5 md:w-5 fill-[#1A2332]" />
                  </div>
                  <div className="text-xs md:text-sm font-bold text-[#1A2332]/80">Google Rating</div>
                </div>
                <div className="group cursor-pointer transition-transform hover:scale-105">
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#1A2332]">15+</div>
                  <div className="text-xs md:text-sm font-bold text-[#1A2332]/80">Years Experience</div>
                </div>
                <div className="group cursor-pointer transition-transform hover:scale-105">
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#1A2332]">Same Day</div>
                  <div className="text-xs md:text-sm font-bold text-[#1A2332]/80">Quotes Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Interactive Cards */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#1A2332] to-[#2a3a52]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Vancouver's Most Trusted Movers
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                We've helped over 10,000 Vancouver families move safely and efficiently
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
                <div className="h-16 w-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-emerald-500/30 transition-shadow">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Fully Insured & Bonded</h3>
                <p className="text-white/60 leading-relaxed">
                  Complete WSIB insurance coverage protects you and our team throughout your entire move. Your belongings are protected from pickup to delivery.
                </p>
              </div>

              <div className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/30 transition-shadow">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Moving Team</h3>
                <p className="text-white/60 leading-relaxed">
                  Our professional movers are trained in safe handling, packing, and efficient moving techniques. Average 5+ years experience per mover.
                </p>
              </div>

              <div className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
                <div className="h-16 w-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-amber-500/30 transition-shadow">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">On-Time Guarantee</h3>
                <p className="text-white/60 leading-relaxed">
                  We respect your schedule with punctual arrival and efficient completion. If we're late, your first hour is free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Services Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary mb-4">Our Services</Badge>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                Complete Residential Moving Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you're moving across the street or across Metro Vancouver, we provide comprehensive moving services tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-primary/50 transition-colors group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Home className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Apartment & Condo Moving</CardTitle>
                      <CardDescription>Perfect for high-rise and multi-unit buildings</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Studio, 1, 2, and 3-bedroom apartments handled with care</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Elevator and stair navigation specialists</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Building protection and strata coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Parking and loading bay coordination</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <TruckIcon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">House Moving</CardTitle>
                      <CardDescription>Full-service home relocation</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>1-5 bedroom homes with basement and garage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Townhouses, duplexes, and multi-level homes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Heavy furniture and appliance handling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Outdoor furniture and equipment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Package className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Full-Service Packing</CardTitle>
                      <CardDescription>Let us handle everything for you</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Premium packing materials included</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Fragile item protection with custom crating</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Furniture wrapping and protective padding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Room-by-room labeling and organization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Sparkles className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Specialty Items</CardTitle>
                      <CardDescription>Expert handling of valuable possessions</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Pianos, organs, and musical instruments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Artwork, antiques, and collectibles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Hot tubs, pool tables, and gym equipment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Large electronics and home theater systems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works - Modern Timeline */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary mb-4">The Process</Badge>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                Your Simple Moving Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We make moving easy with our streamlined 4-step process
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-amber-600 text-white text-3xl font-black mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Get a Free Quote</h3>
                <p className="text-muted-foreground">
                  Fill out our online form or call for instant pricing. Most quotes delivered within 1 hour.
                </p>
              </div>

              <div className="relative text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-amber-600 text-white text-3xl font-black mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Choose Your Package</h3>
                <p className="text-muted-foreground">
                  Select from Premium, Deluxe, or Diamond packages. We'll customize to fit your exact needs.
                </p>
              </div>

              <div className="relative text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-amber-600 text-white text-3xl font-black mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">We Move You</h3>
                <p className="text-muted-foreground">
                  Our expert team arrives on time with all equipment. We handle everything with care.
                </p>
              </div>

              <div className="relative text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-amber-600 text-white text-3xl font-black mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Enjoy Your New Home</h3>
                <p className="text-muted-foreground">
                  We place furniture exactly where you want it. Relax - you're home!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary mb-4">Customer Reviews</Badge>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                What Vancouver Families Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Join 10,000+ happy customers who trusted us with their moves
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 hover:border-primary/30 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">{testimonial.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Service Areas</Badge>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                Serving All Vancouver Neighborhoods
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From Downtown to the suburbs, we provide residential moving services throughout Metro Vancouver
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((hood, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-base py-2 px-4 hover:bg-primary hover:text-[#1A2332] hover:border-primary transition-colors cursor-pointer"
                >
                  <MapPin className="h-4 w-4 mr-1" />
                  {hood}
                </Badge>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-2">Vancouver Proper</h3>
                <p className="text-muted-foreground text-sm">Downtown, West End, Kitsilano, Fairview, Mount Pleasant, Kerrisdale, Dunbar, Point Grey</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-2">North Shore</h3>
                <p className="text-muted-foreground text-sm">North Vancouver, West Vancouver, Deep Cove, Lynn Valley, Lonsdale</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-2">Metro Vancouver</h3>
                <p className="text-muted-foreground text-sm">Burnaby, Richmond, Coquitlam, New Westminster, Surrey, Delta, Langley</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Quote Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Free Quote</Badge>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
                Get Your Free Residential Moving Quote
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below and we'll provide a customized quote for your move within 1 hour
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Why Get a Quote From Us?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Response Within 1 Hour</span>
                      <p className="text-muted-foreground">Get a detailed quote quickly so you can plan your move</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Transparent Pricing</span>
                      <p className="text-muted-foreground">No hidden fees - what we quote is what you pay</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Fully Insured</span>
                      <p className="text-muted-foreground">WSIB coverage protects you and your belongings</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Flexible Scheduling</span>
                      <p className="text-muted-foreground">We work around your schedule for maximum convenience</p>
                    </div>
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
                        placeholder="Describe your move - home size, distance, special items, preferred dates..."
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

        {/* FAQ Section for SEO */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">FAQs</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">How much does residential moving cost in Vancouver?</h3>
                <p className="text-muted-foreground">Our residential moving rates start at $155/hour for 2 movers with a truck. Final pricing depends on your home size, distance, and services needed. Get a free instant quote on our website or call us at 604-616-6066.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Are you insured for residential moves?</h3>
                <p className="text-muted-foreground">Yes! We carry full WSIB insurance and comprehensive liability coverage. Your belongings are protected throughout the entire moving process.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">How far in advance should I book my move?</h3>
                <p className="text-muted-foreground">We recommend booking 2-4 weeks in advance, especially for month-end moves. However, we also accommodate last-minute moves when available.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Do you provide packing materials?</h3>
                <p className="text-muted-foreground">Yes! We offer complete packing services with professional-grade materials. We can also deliver boxes and supplies to you before your moving day.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Can you move specialty items like pianos?</h3>
                <p className="text-muted-foreground">Absolutely! Our team is trained to handle specialty items including pianos, antiques, artwork, hot tubs, and pool tables. We use specialized equipment and techniques for safe transport.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-primary via-amber-500 to-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-[#1A2332] mb-6">
              Ready to Move?
            </h2>
            <p className="text-xl text-[#1A2332]/80 mb-8">
              Get your free, no-obligation quote today. Join 10,000+ Vancouver families who trusted us with their moves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-[#1A2332] text-white hover:bg-[#2a3a52] text-lg font-bold px-10 py-6 shadow-xl">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:604-616-6066">
                <Button size="lg" variant="outline" className="text-lg font-bold px-10 py-6 border-2 border-[#1A2332] text-[#1A2332] hover:bg-[#1A2332] hover:text-white">
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
