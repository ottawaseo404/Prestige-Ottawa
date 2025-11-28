import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  Phone, CheckCircle2, Award, Clock, Shield, TruckIcon, Package, 
  Home as HomeIcon, Building2, MapPin, Menu, Warehouse, GraduationCap, 
  Heart, Music, Crown, Dumbbell, Box, Medal, ArrowRight, Star, 
  Quote, Users, ThumbsUp, ChevronLeft, ChevronRight, Truck, Headphones
} from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import logoUrl from "@assets/originalonglogo_1763689606978.png";
import heroImage from "@assets/generated_images/vancouver_seabus_ferry_scenic_view.png";
import { packageTypes, type PackageType } from "@shared/schema";

export default function Home() {
  const packages: PackageType[] = ["Premium", "Deluxe", "Diamond"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const services = [
    { title: "Residential Moving", description: "Apartments, condos, and houses", icon: HomeIcon, href: "/services/residential-moving" },
    { title: "Commercial Moving", description: "Office relocations and business moves", icon: Building2, href: "/services/commercial-moving" },
    { title: "Long Distance Moving", description: "Cross-BC and Canada-wide moves", icon: MapPin, href: "/services/long-distance-moving" },
    { title: "Packing Services", description: "Professional packing and materials", icon: Package, href: "/services/packing-services" },
    { title: "Moving Supplies", description: "Boxes, tape, and packing materials", icon: Box, href: "/services/moving-supplies" },
    { title: "Student Moving", description: "Affordable moves for students", icon: GraduationCap, href: "/services/student-moving" },
    { title: "Storage Solutions", description: "Secure climate-controlled storage", icon: Warehouse, href: "/services/storage-solutions" },
    { title: "Specialty Item Moving", description: "Hot tubs, pool tables, gym equipment", icon: Dumbbell, href: "/services/specialty-item-moving" },
    { title: "Antique Moving", description: "Careful handling of valuables", icon: Crown, href: "/services/antique-moving" },
    { title: "Piano Moving", description: "Specialized piano transport", icon: Music, href: "/services/piano-moving" },
    { title: "Senior Moving", description: "Compassionate elderly relocations", icon: Heart, href: "/services/senior-moving" },
    { title: "Military Moving", description: "PCS moves and base relocations", icon: Medal, href: "/services/military-moving" }
  ];

  const testimonials = [
    {
      text: "Prestige Moving made our cross-city move absolutely seamless. The team was professional, careful with our belongings, and finished ahead of schedule. Highly recommend!",
      author: "Sarah M.",
      location: "Vancouver to Burnaby"
    },
    {
      text: "Best moving experience we've ever had. Fair pricing, no hidden fees, and the movers treated our furniture like it was their own. Will definitely use again.",
      author: "Michael T.",
      location: "Downtown Vancouver"
    },
    {
      text: "From packing to unpacking, Prestige handled everything with care. Their attention to detail and professionalism exceeded our expectations. 5 stars!",
      author: "Jennifer L.",
      location: "North Vancouver"
    }
  ];

  const featuredServices = [
    { title: "Residential Moving", description: "Expert home movers for apartments, condos, and houses. We handle your belongings with care.", icon: HomeIcon, href: "/services/residential-moving" },
    { title: "Commercial Moving", description: "Minimize downtime with our efficient office and business relocation services.", icon: Building2, href: "/services/commercial-moving" },
    { title: "Long Distance Moving", description: "Cross-BC and Canada-wide moves with reliable, on-time delivery guaranteed.", icon: Truck, href: "/services/long-distance-moving" },
    { title: "Packing Services", description: "Professional packing with quality materials to protect your valuables.", icon: Package, href: "/services/packing-services" }
  ];

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Modern Navigation - Dark Theme */}
      <nav className="sticky top-0 z-50 bg-[#1A2332] border-b border-primary/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 gap-6">
            <Link href="/" data-testid="link-logo">
              <img src={logoUrl} alt="Prestige Moving" className="h-14 w-auto hover:opacity-90 transition-opacity" data-testid="img-logo" />
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base font-semibold text-white bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10" data-testid="nav-services-trigger">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[700px] grid-cols-2 gap-2 p-4 bg-background">
                        {services.map((service) => (
                          <Link key={service.href} href={service.href}>
                            <NavigationMenuLink asChild>
                              <div className="flex items-start gap-3 p-3 rounded-md hover-elevate active-elevate-2 cursor-pointer" data-testid={`nav-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                <service.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                  <div className="font-medium text-sm">{service.title}</div>
                                  <div className="text-xs text-muted-foreground">{service.description}</div>
                                </div>
                              </div>
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link href="/book" className="text-white font-semibold hover:text-primary transition-colors" data-testid="link-nav-quote">
                Get Quote
              </Link>

              <a href="tel:604-000-0000" className="flex items-center gap-2 text-white font-bold text-lg hover:text-primary transition-colors" data-testid="link-phone">
                <Phone className="h-5 w-5" />
                <span>604-000-0000</span>
              </a>

              <Link href="/book">
                <Button variant="default" size="lg" className="font-bold shadow-lg" data-testid="button-get-quote">
                  FREE ESTIMATE
                </Button>
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <a href="tel:604-000-0000" className="p-2 text-white" data-testid="link-phone-mobile">
                <Phone className="h-5 w-5" />
              </a>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" data-testid="button-mobile-menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#1A2332] border-primary/20">
                  <div className="flex flex-col gap-6 mt-8">
                    <div>
                      <h3 className="font-bold text-lg mb-4 text-white">Services</h3>
                      <div className="space-y-1 max-h-[60vh] overflow-y-auto">
                        {services.map((service) => (
                          <Link key={service.href} href={service.href}>
                            <div 
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-3 p-3 rounded-md hover:bg-white/10 cursor-pointer"
                              data-testid={`mobile-nav-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <service.icon className="h-5 w-5 text-primary flex-shrink-0" />
                              <span className="font-medium text-white">{service.title}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Link href="/book">
                      <Button variant="default" className="w-full font-bold" size="lg" onClick={() => setMobileMenuOpen(false)} data-testid="button-mobile-quote">
                        GET FREE ESTIMATE
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Bleed Dramatic */}
      <section className="relative min-h-[600px] md:min-h-[85vh] flex items-center overflow-hidden pb-32 md:pb-24">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Vancouver Moving Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-2 mb-6" data-testid="badge-experience">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold text-sm md:text-base">Vancouver's Most Trusted Movers</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
              Your Premium<br />
              <span className="text-primary">Moving Specialists</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Over 10,000 successful moves across Vancouver. Professional movers, transparent pricing, and complete peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book">
                <Button size="lg" className="text-base md:text-lg font-bold px-8 md:px-10 py-5 md:py-6 shadow-xl w-full sm:w-auto" data-testid="button-hero-quote">
                  GET FREE QUOTE
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:604-000-0000">
                <Button size="lg" variant="outline" className="text-base md:text-lg font-bold px-8 md:px-10 py-5 md:py-6 border-2 border-white text-white hover:bg-white hover:text-[#1A2332] w-full sm:w-auto" data-testid="button-hero-call">
                  <Phone className="h-5 w-5 mr-2" />
                  CALL NOW
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Bar at Bottom - Responsive */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center" data-testid="stat-moves">
                <div className="text-2xl md:text-4xl font-black text-[#1A2332]">10,000+</div>
                <div className="text-xs md:text-sm font-semibold text-[#1A2332]/80">Successful Moves</div>
              </div>
              <div className="text-center" data-testid="stat-rating">
                <div className="flex items-center justify-center gap-1 text-2xl md:text-4xl font-black text-[#1A2332]">
                  5.0 <Star className="h-4 w-4 md:h-6 md:w-6 fill-[#1A2332]" />
                </div>
                <div className="text-xs md:text-sm font-semibold text-[#1A2332]/80">Google Rating</div>
              </div>
              <div className="text-center" data-testid="stat-years">
                <div className="text-2xl md:text-4xl font-black text-[#1A2332]">15+</div>
                <div className="text-xs md:text-sm font-semibold text-[#1A2332]/80">Years Experience</div>
              </div>
              <div className="text-center" data-testid="stat-team">
                <div className="text-2xl md:text-4xl font-black text-[#1A2332]">50+</div>
                <div className="text-xs md:text-sm font-semibold text-[#1A2332]/80">Expert Movers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider">
              Your Trusted Moving Partners
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center gap-2 p-4" data-testid="badge-bbb">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-bold text-foreground">BBB A+ Rating</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4" data-testid="badge-wsib">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-bold text-foreground">WSIB Insured</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4" data-testid="badge-google">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-bold text-foreground">5-Star Google</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4" data-testid="badge-licensed">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-bold text-foreground">Fully Licensed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section className="py-20 md:py-28 bg-[#1A2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our Moving Services
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Complete moving solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredServices.map((service, index) => (
              <Link key={service.href} href={service.href}>
                <Card className="group h-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden" data-testid={`card-featured-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="h-16 w-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-white/70 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services/residential-moving">
              <Button variant="outline" size="lg" className="font-bold border-2 border-primary text-primary hover:bg-primary hover:text-[#1A2332]" data-testid="button-view-all-services">
                VIEW ALL SERVICES
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary" data-testid="badge-about">
                About Prestige Moving
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                Vancouver's Premier Moving Company
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Prestige Moving Vancouver has been helping families and businesses relocate with care and professionalism. We own our fleet of trucks and employ a trained team of moving specialists who treat every move as if it were their own.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Family owned and operated with first-rate customer service",
                  "Fully bonded, licensed, and WSIB insured",
                  "BBB A+ rating with proven track record",
                  "Professional packing and unpacking services",
                  "Secure storage facilities available in Vancouver",
                  "Our own fleet of trucks for reliable service"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3" data-testid={`about-feature-${index}`}>
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/book">
                <Button size="lg" className="font-bold" data-testid="button-about-quote">
                  GET YOUR FREE QUOTE
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background rounded-xl p-6 text-center shadow-lg" data-testid="about-stat-1">
                    <Truck className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-black text-foreground">15+</div>
                    <div className="text-sm text-muted-foreground">Moving Trucks</div>
                  </div>
                  <div className="bg-background rounded-xl p-6 text-center shadow-lg" data-testid="about-stat-2">
                    <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-black text-foreground">50+</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </div>
                  <div className="bg-background rounded-xl p-6 text-center shadow-lg" data-testid="about-stat-3">
                    <Clock className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-black text-foreground">15</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="bg-background rounded-xl p-6 text-center shadow-lg" data-testid="about-stat-4">
                    <ThumbsUp className="h-10 w-10 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-black text-foreground">99%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 md:py-28 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Choose Your Moving Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden fees
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((packageKey) => {
              const pkg = packageTypes[packageKey];
              const isFeatured = packageKey === "Diamond";
              return (
                <Card 
                  key={packageKey} 
                  className={`relative overflow-hidden ${isFeatured ? 'border-2 border-primary shadow-xl ring-2 ring-primary/20' : 'border'}`}
                  data-testid={`card-package-${packageKey.toLowerCase()}`}
                >
                  {isFeatured && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-center py-2">
                      <span className="text-sm font-bold text-[#1A2332]">MOST POPULAR</span>
                    </div>
                  )}
                  <CardHeader className={`pb-4 ${isFeatured ? 'pt-12' : ''}`}>
                    <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                    <CardDescription className="text-sm pt-2">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-foreground" data-testid={`text-price-${packageKey.toLowerCase()}`}>${pkg.hourlyRate}</span>
                        <span className="text-muted-foreground">/hr</span>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Min {pkg.minimumHours}hrs + ${pkg.travelFee} travel
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold bg-accent/50 rounded-lg p-3">
                      <TruckIcon className="h-5 w-5 text-primary" />
                      <span>{pkg.movers} Movers</span>
                      <span className="text-muted-foreground">•</span>
                      <span>{pkg.truck}</span>
                    </div>

                    <div className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-3 text-sm" data-testid={`feature-${packageKey.toLowerCase()}-${idx}`}>
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/book" className="w-full">
                      <Button 
                        variant={isFeatured ? "default" : "outline"} 
                        className={`w-full font-bold ${isFeatured ? '' : 'border-2'}`}
                        size="lg"
                        data-testid={`button-book-${packageKey.toLowerCase()}`}
                      >
                        {isFeatured ? 'GET STARTED' : `Book ${pkg.name}`}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-[#1A2332]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-white/70">Based on 500+ Google Reviews</p>
          </div>

          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
              <Quote className="h-12 w-12 text-primary mb-6" />
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8" data-testid="testimonial-text">
                "{testimonials[testimonialIndex].text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-lg" data-testid="testimonial-author">
                    {testimonials[testimonialIndex].author}
                  </div>
                  <div className="text-white/60">
                    {testimonials[testimonialIndex].location}
                  </div>
                </div>
                <div className="flex gap-2" role="group" aria-label="Testimonial navigation">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={prevTestimonial}
                    className="border-white/20 text-white hover:bg-white/10"
                    data-testid="button-testimonial-prev"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={nextTestimonial}
                    className="border-white/20 text-white hover:bg-white/10"
                    data-testid="button-testimonial-next"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Why Choose Prestige Moving
            </h2>
            <p className="text-xl text-muted-foreground">
              The difference is in the details
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle2, title: "Transparent Pricing", description: "No hidden fees or surprise charges. Get a detailed quote upfront that covers everything." },
              { icon: Shield, title: "Fully Insured", description: "WSIB licensed and insured. Your belongings are protected throughout the entire move." },
              { icon: Clock, title: "On-Time Guarantee", description: "We arrive when promised. Your time is valuable, and we respect that." },
              { icon: Users, title: "Professional Team", description: "Trained, background-checked movers who treat your belongings like their own." },
              { icon: Truck, title: "Modern Fleet", description: "Well-maintained trucks equipped with the latest moving equipment and tools." },
              { icon: Headphones, title: "24/7 Support", description: "Questions? Our customer service team is always here to help you." }
            ].map((item, index) => (
              <div key={index} className="text-center p-6" data-testid={`why-choose-${index}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1A2332] mb-6">
            Ready to Move?
          </h2>
          <p className="text-xl text-[#1A2332]/80 mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote today. Our team is standing by to help make your move stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="text-lg font-bold px-10 py-6 bg-[#1A2332] text-white hover:bg-[#1A2332]/90" data-testid="button-cta-quote">
                GET FREE QUOTE
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:604-000-0000">
              <Button size="lg" variant="outline" className="text-lg font-bold px-10 py-6 border-2 border-[#1A2332] text-[#1A2332] hover:bg-[#1A2332] hover:text-white" data-testid="button-cta-call">
                <Phone className="h-5 w-5 mr-2" />
                604-000-0000
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2332] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <img src={logoUrl} alt="Prestige Moving" className="h-12 w-auto mb-6" />
              <p className="text-white/70 text-sm leading-relaxed">
                Vancouver's trusted moving company providing professional residential and commercial moving services.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
              <div className="space-y-2 text-sm text-white/70">
                <Link href="/services/residential-moving" className="block hover:text-primary transition-colors">Residential Moving</Link>
                <Link href="/services/commercial-moving" className="block hover:text-primary transition-colors">Commercial Moving</Link>
                <Link href="/services/long-distance-moving" className="block hover:text-primary transition-colors">Long Distance Moving</Link>
                <Link href="/services/packing-services" className="block hover:text-primary transition-colors">Packing Services</Link>
                <Link href="/services/storage-solutions" className="block hover:text-primary transition-colors">Storage Solutions</Link>
                <Link href="/services/piano-moving" className="block hover:text-primary transition-colors">Piano Moving</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">More Services</h4>
              <div className="space-y-2 text-sm text-white/70">
                <Link href="/services/senior-moving" className="block hover:text-primary transition-colors">Senior Moving</Link>
                <Link href="/services/student-moving" className="block hover:text-primary transition-colors">Student Moving</Link>
                <Link href="/services/antique-moving" className="block hover:text-primary transition-colors">Antique Moving</Link>
                <Link href="/services/specialty-item-moving" className="block hover:text-primary transition-colors">Specialty Items</Link>
                <Link href="/services/moving-supplies" className="block hover:text-primary transition-colors">Moving Supplies</Link>
                <Link href="/services/military-moving" className="block hover:text-primary transition-colors">Military Moving</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm text-white/70">
                <p>Vancouver, BC</p>
                <a href="tel:604-000-0000" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  604-000-0000
                </a>
                <p>info@prestigemoving.ca</p>
              </div>
              <div className="mt-6">
                <Link href="/book">
                  <Button variant="default" className="font-bold" data-testid="button-footer-quote">
                    GET FREE QUOTE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Prestige Moving Vancouver. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <span>WSIB Insured</span>
              <span>•</span>
              <span>BBB A+ Rating</span>
              <span>•</span>
              <span>Fully Licensed</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
