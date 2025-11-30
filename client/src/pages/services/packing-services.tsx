import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, CheckCircle2, Package, Box, Shield, Star, Sparkles, Clock, 
  ArrowRight, ChevronLeft, ChevronRight, MapPin, Award, Zap, Timer, 
  Users, ThumbsUp, HandHeart, Home, Building2, Truck, Warehouse, Heart,
  Wine, Tv, Frame
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { WorkSafeBadge } from "@/components/worksafe-badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import packingHeroVideo from "@assets/generated_videos/professional_packing_services_vancouver.mp4";
import packingImage from "@assets/generated_images/professional_packing_services_vancouver.png";

export default function PackingServices() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

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
    "description": "Expert packing services in Vancouver. Full-service packing, fragile item protection, and quality materials included. Professional packers for stress-free moves."
  };

  const testimonials = [
    { name: "Amanda R.", location: "Kitsilano", text: "The packing team was incredible! They wrapped every dish, glass, and picture frame with such care. Not a single item was damaged. Worth every penny!", rating: 5, date: "1 week ago" },
    { name: "Kevin M.", location: "West Vancouver", text: "We had a last-minute move and they packed our entire 4-bedroom house in just one day. Professional, organized, and everything arrived perfectly.", rating: 5, date: "2 weeks ago" },
    { name: "Susan L.", location: "Burnaby", text: "I was nervous about my grandmother's antique china collection. The team used custom packing and it all arrived without a scratch. Highly recommend!", rating: 5, date: "3 weeks ago" },
    { name: "James T.", location: "North Vancouver", text: "Best packing service in Vancouver! They labeled every box by room and contents. Unpacking was so much easier. The materials they use are top quality.", rating: 5, date: "1 month ago" },
    { name: "Michelle K.", location: "Downtown", text: "Their fragile item specialists packed my wine collection and artwork beautifully. Custom crating for my paintings was impressive. Five stars!", rating: 5, date: "2 months ago" }
  ];

  const serviceTypes = [
    {
      title: "Full-Service Packing",
      icon: Package,
      description: "Complete home or office packing from start to finish",
      features: ["All materials included", "Room-by-room organization", "Detailed labeling", "Same-day available"]
    },
    {
      title: "Fragile Items",
      icon: Wine,
      description: "Specialized handling for delicate and valuable items",
      features: ["China & glassware", "Artwork & mirrors", "Electronics & TVs", "Wine collections"]
    },
    {
      title: "Furniture Protection",
      icon: Frame,
      description: "Expert wrapping and padding for all furniture types",
      features: ["Moving blankets", "Shrink wrapping", "Corner protection", "Mattress bags"]
    },
    {
      title: "Partial Packing",
      icon: Box,
      description: "Flexible options to fit your needs and budget",
      features: ["Kitchen only", "Fragile items only", "Last-minute help", "Custom plans"]
    }
  ];

  const neighborhoods = [
    "Downtown", "Kitsilano", "Yaletown", "Coal Harbour", "West End",
    "Mount Pleasant", "Commercial Drive", "Kerrisdale", "Point Grey",
    "UBC", "Shaughnessy", "Dunbar", "Marpole", "South Cambie", "Gastown"
  ];

  const faqItems = [
    {
      question: "How far in advance should I book packing services?",
      answer: "We recommend booking at least 1-2 weeks in advance for standard moves. However, we do offer same-day and next-day packing services for urgent situations. During peak moving season (May-August), we suggest booking 2-3 weeks ahead to secure your preferred date."
    },
    {
      question: "Do I need to provide any packing materials?",
      answer: "No, all packing materials are included in our service. We bring professional-grade boxes in various sizes, bubble wrap, packing paper, tape, furniture blankets, mattress bags, and specialty materials for fragile items. Everything needed for a safe move is covered."
    },
    {
      question: "How long does it take to pack a typical home?",
      answer: "Packing times vary based on home size and contents. A 1-bedroom apartment typically takes 2-3 hours, a 2-bedroom takes 4-5 hours, and a 3-4 bedroom home takes 6-8 hours. Homes with many fragile items or collections may require additional time for proper care."
    },
    {
      question: "Can you pack specialty items like artwork or antiques?",
      answer: "Absolutely! Our team includes fragile item specialists trained in handling artwork, antiques, china, crystal, wine collections, and other valuables. We use custom crating for paintings, acid-free tissue for delicate items, and climate-appropriate materials for sensitive pieces."
    },
    {
      question: "What happens if something gets damaged during packing?",
      answer: "As a WorkSafe BC certified company, we carry full liability insurance. In the rare event of damage, our claims process is straightforward and we work quickly to resolve any issues. Our careful packing techniques mean damage claims are extremely rare - our track record speaks for itself."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <Helmet>
        <title>Professional Packing Services Vancouver BC | Expert Packers | Prestige Moving</title>
        <meta name="description" content="Expert packing services in Vancouver BC. Full-service packing, fragile item protection, quality materials included. WorkSafe BC certified. Save time and ensure safe transport. Free quote!" />
        <meta name="keywords" content="packing services Vancouver, professional packers BC, moving packing service, fragile item packing, full service packing, Vancouver packers, Burnaby packing service, Richmond packing company" />
        <meta property="og:title" content="Professional Packing Services Vancouver | Prestige Moving" />
        <meta property="og:description" content="Vancouver's trusted packing specialists. Expert packers, quality materials, fragile item handling. WorkSafe BC certified for your peace of mind." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vancouver.prestigemoving.ca/services/packing-services" />
        <meta property="og:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <meta property="og:site_name" content="Prestige Moving Vancouver" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Packing Services Vancouver | Prestige Moving" />
        <meta name="twitter:description" content="Expert packing services with premium materials. Fragile item specialists. WorkSafe BC certified." />
        <meta name="twitter:image" content="https://vancouver.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://vancouver.prestigemoving.ca/services/packing-services" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden" data-testid="section-hero">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={packingHeroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332] via-[#1A2332]/90 to-[#1A2332]/40" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-primary/20 text-primary border-primary/40 px-4 py-1.5">
                  <Package className="h-4 w-4 mr-2" />
                  Packing Services
                </Badge>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/40">
                  <Zap className="h-3 w-3 mr-1" />
                  Same-Day Available
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Vancouver's<br />
                <span className="text-primary">#1 Packing Experts</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                Let our expert team handle the packing while you focus on your move. We've safely packed <span className="text-primary font-semibold">10,000+ Vancouver homes</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/book">
                  <Button size="lg" className="text-lg font-bold px-8 py-7 shadow-xl shadow-primary/30 group" data-testid="button-hero-quote">
                    Get Free Quote
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:604-616-6066">
                  <Button size="lg" variant="outline" className="text-lg font-bold px-8 py-7 border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm" data-testid="button-hero-call">
                    <Phone className="h-5 w-5 mr-2" />
                    604-616-6066
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-6">
                <WorkSafeBadge size="md" />
                <div className="flex items-center gap-2 text-white/70">
                  <Award className="h-5 w-5 text-primary" />
                  <span>BBB A+ Rated</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Timer className="h-5 w-5 text-primary" />
                  <span>Materials Included</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 py-6" data-testid="section-stats">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "10,000+", label: "Homes Packed" },
                { value: "5.0★", label: "Google Rating" },
                { value: "Same Day", label: "Service Available" },
                { value: "100%", label: "Satisfaction" }
              ].map((stat, index) => (
                <div key={index} data-testid={`stat-${index}`}>
                  <div className="text-2xl md:text-4xl font-black text-[#1A2332]">{stat.value}</div>
                  <div className="text-sm font-bold text-[#1A2332]/80 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Our Service */}
        <section className="py-16 md:py-20 bg-white" data-testid="section-about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-primary/10 text-primary mb-4">About Our Service</Badge>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                  Vancouver's Premier Packing Company
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Moving to a new home in Vancouver, Burnaby, Richmond, or anywhere in the Lower Mainland? <strong>Prestige Moving Vancouver</strong> offers professional packing services that save you time, stress, and ensure your belongings arrive safely.
                  </p>
                  <p>
                    Our expert packers bring years of experience and use only premium materials - from double-walled boxes to custom crating for artwork. Whether you need full-service packing or just help with fragile items, we've got you covered.
                  </p>
                  <p>
                    As a <strong>WorkSafe BC certified moving company</strong>, we prioritize the safety of both our team and your belongings. All materials are included in our transparent pricing - no hidden fees or surprises.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/book">
                    <Button size="lg" className="font-bold" data-testid="button-about-quote">
                      Get Your Free Quote
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden h-[400px]">
                <img 
                  src={packingImage}
                  alt="Prestige Moving professional packers in Vancouver"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-10 w-10 rounded-full bg-primary border-2 border-white flex items-center justify-center">
                          <Star className="h-4 w-4 text-[#1A2332] fill-[#1A2332]" />
                        </div>
                      ))}
                    </div>
                    <div className="text-white">
                      <div className="font-bold">337+ Reviews</div>
                      <div className="text-sm text-white/70">5-Star Rated on Google</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 md:py-20 bg-gray-50" data-testid="section-included">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">What's Included</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Everything You Need for Stress-Free Packing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our packing service includes all materials and expertise for a safe move
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Premium Moving Boxes", description: "New, sturdy boxes in all sizes for every item", icon: Box },
                { title: "Bubble Wrap & Paper", description: "Industrial-grade protection for fragile items", icon: Package },
                { title: "Furniture Blankets", description: "Thick padding to prevent scratches and dents", icon: Frame },
                { title: "Custom Crating", description: "Specialty protection for artwork and antiques", icon: Sparkles },
                { title: "Detailed Labeling", description: "Room-by-room organization for easy unpacking", icon: CheckCircle2 },
                { title: "WorkSafe BC Certified", description: "Full compliance with safety standards", icon: Award }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors" data-testid={`card-included-${index}`}>
                  <CardContent className="p-6">
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Types with Tabs */}
        <section className="py-16 md:py-20 bg-[#1A2332]" data-testid="section-service-types">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Packing Services We Offer
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Choose the packing option that fits your needs and budget
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              {serviceTypes.map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                      activeTab === index 
                        ? 'bg-primary text-[#1A2332] shadow-lg shadow-primary/30' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    data-testid={`tab-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <ServiceIcon className="h-5 w-5" />
                    {service.title}
                  </button>
                );
              })}
            </div>

            {/* Active Service Content */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                    {serviceTypes[activeTab].title}
                  </h3>
                  <p className="text-lg text-white/70 mb-6">
                    {serviceTypes[activeTab].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {serviceTypes[activeTab].features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/book">
                    <Button size="lg" className="font-bold" data-testid="button-service-quote">
                      Get a Quote
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden h-[300px]">
                  <img 
                    src={packingImage}
                    alt={serviceTypes[activeTab].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-white" data-testid="section-why-choose">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                The Prestige Packing Difference
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Fully Insured", description: "Complete protection for your belongings throughout the packing process", color: "from-amber-500 to-amber-600" },
                { icon: Users, title: "Expert Packers", description: "Average 5+ years experience per packer. Trained specialists who care.", color: "from-blue-500 to-blue-600" },
                { icon: Clock, title: "Same-Day Service", description: "Need packing done fast? We offer same-day and next-day availability.", color: "from-emerald-500 to-emerald-600" },
                { icon: ThumbsUp, title: "All Materials Included", description: "Boxes, bubble wrap, tape, and specialty materials - all covered.", color: "from-violet-500 to-violet-600" },
                { icon: HandHeart, title: "Fragile Item Specialists", description: "Custom packing for artwork, antiques, china, and valuables.", color: "from-rose-500 to-rose-600" },
                { icon: Award, title: "WorkSafe BC Certified", description: "Full compliance with workplace safety standards for your peace of mind.", color: "from-primary to-amber-600" }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg" data-testid={`card-why-${index}`}>
                  <CardContent className="p-6">
                    <div className={`h-14 w-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-16 md:py-20 bg-gray-50" data-testid="section-testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Reviews</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                What Customers Say About Our Packing
              </h2>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span>Based on 337+ Google Reviews</span>
              </div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-2 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed" data-testid="testimonial-text">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 bg-gradient-to-br from-primary to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[activeTestimonial].name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-lg" data-testid="testimonial-name">{testimonials[activeTestimonial].name}</p>
                        <p className="text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> {testimonials[activeTestimonial].location}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{testimonials[activeTestimonial].date}</span>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center justify-center gap-4 mt-8">
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                  data-testid="button-testimonial-prev"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTestimonial ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                      data-testid={`button-testimonial-dot-${index}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                  data-testid="button-testimonial-next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 md:py-20 bg-[#1A2332]" data-testid="section-service-areas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Coverage</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Vancouver Neighborhoods We Serve
              </h2>
              <p className="text-lg text-white/60">
                Professional packing services across Metro Vancouver
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {neighborhoods.map((hood, index) => (
                <Badge 
                  key={index}
                  className="bg-white/10 text-white border-white/20 hover:bg-primary hover:text-[#1A2332] hover:border-primary transition-all duration-300 cursor-pointer px-4 py-2 text-sm font-medium"
                  data-testid={`badge-neighborhood-${index}`}
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  {hood}
                </Badge>
              ))}
            </div>

            <div className="text-center mt-8">
              <WorkSafeBadge size="md" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-white" data-testid="section-faq">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Common Questions About Packing Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our professional packing
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full" data-testid="accordion-faq">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} data-testid={`accordion-item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold" data-testid={`accordion-trigger-${index}`}>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed" data-testid={`accordion-content-${index}`}>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-20 bg-gray-50" data-testid="section-related">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">More Services</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Complete Your Move
              </h2>
              <p className="text-lg text-muted-foreground">
                Additional services to make your transition seamless
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/services/residential-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-residential-moving">
                  <CardContent className="p-6">
                    <Home className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Residential Moving</h3>
                    <p className="text-muted-foreground">Complete home moving services across Vancouver</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/commercial-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-commercial-moving">
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Commercial Moving</h3>
                    <p className="text-muted-foreground">Office and business relocation experts</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/storage-solutions">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-storage-solutions">
                  <CardContent className="p-6">
                    <Warehouse className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Storage Solutions</h3>
                    <p className="text-muted-foreground">Climate-controlled short and long-term storage</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/long-distance-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-long-distance">
                  <CardContent className="p-6">
                    <Truck className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Long Distance Moving</h3>
                    <p className="text-muted-foreground">Cross-province and Canada-wide relocations</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/senior-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-senior-moving">
                  <CardContent className="p-6">
                    <Heart className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Senior Moving</h3>
                    <p className="text-muted-foreground">Compassionate downsizing and relocation assistance</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/specialty-item-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-specialty-items">
                  <CardContent className="p-6">
                    <Sparkles className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Specialty Items</h3>
                    <p className="text-muted-foreground">Hot tubs, pool tables, gym equipment & more</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-amber-500 to-primary relative overflow-hidden" data-testid="section-cta">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#1A2332]/20 backdrop-blur rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-[#1A2332]" />
              <span className="text-[#1A2332] font-semibold text-sm">Free No-Obligation Quote</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2332] mb-6">
              Ready to Take the Stress Out of Packing?
            </h2>
            
            <p className="text-xl text-[#1A2332]/80 mb-8 max-w-2xl mx-auto">
              Join 10,000+ Vancouver families who trusted our expert packers. Get your personalized quote in under 1 hour.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-[#1A2332] hover:bg-[#1A2332]/90 text-white text-lg font-bold px-10 py-7 shadow-xl" data-testid="button-cta-quote">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:604-616-6066">
                <Button size="lg" variant="outline" className="border-2 border-[#1A2332] text-[#1A2332] hover:bg-[#1A2332] hover:text-white text-lg font-bold px-10 py-7" data-testid="button-cta-call">
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
