import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  CheckCircle2,
  Dumbbell,
  Shield,
  Star,
  Clock,
  Users,
  ArrowRight,
  MapPin,
  Home,
  Building2,
  Package,
  Warehouse,
  Award,
  Zap,
  Timer,
  ThumbsUp,
  HandHeart,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  TruckIcon,
  Music,
  Weight,
  Waves,
  Circle,
  Stethoscope,
  Wrench,
  Truck,
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { WorkSafeBadge } from "@/components/worksafe-badge";
import specialtyVideo from "@assets/generated_videos/specialty_item_moving_hot_tub.mp4";

export default function SpecialtyItemMoving() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Specialty Item Moving Services Ottawa",
    "provider": {
      "@type": "MovingCompany",
      "name": "Prestige Moving Ottawa",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "50 Colonnade Rd Unit 200B",
        "postalCode": "K2E 7J6",
        "addressLocality": "Ottawa",
        "addressRegion": "ON",
        "addressCountry": "CA"
      },
      "telephone": "(613) 600-4000",
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "200"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Ottawa" },
      { "@type": "City", "name": "Kanata" },
      { "@type": "City", "name": "Orleans" },
      { "@type": "City", "name": "Nepean" },
      { "@type": "City", "name": "Barrhaven" },
      { "@type": "City", "name": "Gloucester" },
      { "@type": "City", "name": "Gatineau" }
    ],
    "description": "Professional specialty item moving services in Ottawa. Expert handling of hot tubs, pool tables, gym equipment, medical equipment, safes, and oversized items. WSIB certified with specialized equipment."
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you move a hot tub safely in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We drain and disconnect the hot tub, secure all components, use specialized lifting equipment and dollies, and can arrange crane services for difficult access locations. Our WSIB certified crew is trained specifically in hot tub moving procedures."
        }
      },
      {
        "@type": "Question",
        "name": "Can you move and reassemble a pool table?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We provide complete pool table moving including disassembly, slate protection and transport, reassembly, and professional leveling at your new location. We handle all types including 7', 8', and 9' tables."
        }
      },
      {
        "@type": "Question",
        "name": "What gym equipment do you move in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We move all types of fitness equipment including treadmills, ellipticals, rowing machines, weight machines, free weights, squat racks, cable systems, and complete home gym setups. We handle both residential and commercial gym equipment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you move medical equipment and hospital beds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in moving sensitive medical equipment including hospital beds, exam tables, imaging equipment, and specialized medical devices with proper handling protocols and sanitization procedures."
        }
      },
      {
        "@type": "Question",
        "name": "How do you move heavy safes in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use specialized equipment including safe dollies, stair climbers, and rigging equipment for heavy safes. Our team is trained in proper weight distribution and can move safes up to 2,000+ lbs safely."
        }
      }
    ]
  };

  const testimonials = [
    { 
      name: "Robert K.", 
      location: "Rockcliffe Park", 
      text: "Incredible job moving our 800lb hot tub from the backyard to our new home. They had specialized equipment and got it done in under 3 hours!", 
      rating: 5, 
      date: "2 weeks ago",
      itemType: "Hot Tub"
    },
    { 
      name: "Angela M.", 
      location: "Kanata", 
      text: "Our 9' slate pool table was moved perfectly. They disassembled it, transported it carefully, and reassembled with professional leveling. Plays like new!", 
      rating: 5, 
      date: "1 month ago",
      itemType: "Pool Table"
    },
    { 
      name: "Jason T.", 
      location: "Orleans", 
      text: "Moved my entire home gym including a commercial treadmill and cable machine. These guys know how to handle heavy fitness equipment.", 
      rating: 5, 
      date: "3 weeks ago",
      itemType: "Gym Equipment"
    },
    { 
      name: "Dr. Linda W.", 
      location: "Ottawa", 
      text: "They relocated our medical clinic equipment including exam tables and sensitive diagnostic machines. Professional, careful, and on schedule.", 
      rating: 5, 
      date: "1 week ago",
      itemType: "Medical Equipment"
    },
    { 
      name: "Mark S.", 
      location: "Nepean", 
      text: "Moved a 1,500lb gun safe from my basement up stairs and into a new location. Incredible skill and equipment. Highly recommend for heavy items!", 
      rating: 5, 
      date: "2 months ago",
      itemType: "Heavy Safe"
    }
  ];

  const specialtyTypes = [
    {
      title: "Hot Tubs",
      icon: Waves,
      description: "Expert hot tub relocation with specialized equipment",
      features: ["Professional disconnection", "Complete draining & prep", "Specialized lifting dollies", "Crane services available"]
    },
    {
      title: "Pool Tables",
      icon: Circle,
      description: "Complete disassembly, transport, and professional setup",
      features: ["Careful disassembly", "Slate protection", "Professional reassembly", "Precision leveling"]
    },
    {
      title: "Gym Equipment",
      icon: Dumbbell,
      description: "Commercial and home fitness equipment specialists",
      features: ["Treadmills & ellipticals", "Weight machines", "Free weight systems", "Complete gym setups"]
    },
    {
      title: "Medical Equipment",
      icon: Stethoscope,
      description: "Sensitive medical and clinical equipment handling",
      features: ["Hospital beds", "Exam tables", "Imaging equipment", "Sanitization protocols"]
    }
  ];

  const faqs = [
    {
      question: "How do you move a hot tub safely?",
      answer: "We follow a comprehensive hot tub moving process: professional disconnection of electrical and plumbing, complete draining and prep, use of specialized lifting equipment like hot tub dollies and moving straps, protective padding during transport, and crane services for difficult access locations. Our WSIB certified crew is specifically trained in hot tub moving procedures to ensure safe transport."
    },
    {
      question: "Can you move and reassemble a pool table?",
      answer: "Yes! We provide complete pool table moving services including careful disassembly of rails, pockets, and felt, slate protection with specialized covers and padding, secure transport in climate-controlled trucks, professional reassembly at your new location, and precise leveling to ensure perfect gameplay. We handle all table sizes including 7', 8', and 9' tables."
    },
    {
      question: "What gym equipment do you move?",
      answer: "We move all types of fitness equipment including treadmills, ellipticals, stationary bikes, rowing machines, multi-station weight machines, free weights and dumbbells, squat racks and power cages, cable crossover systems, and complete home or commercial gym setups. We handle disassembly, transport, and reassembly as needed."
    },
    {
      question: "Do you move medical equipment?",
      answer: "Yes! We specialize in moving sensitive medical and clinical equipment including hospital beds, exam tables, dental chairs, imaging equipment, and specialized medical devices. Our team follows proper handling protocols and can work around clinical schedules to minimize disruption to your practice."
    },
    {
      question: "How do you move heavy safes?",
      answer: "Safe moving requires specialized expertise and equipment. We use professional safe dollies, stair climbers, and rigging equipment for heavy safes weighing up to 2,000+ lbs. Our team is trained in proper weight distribution, doorway navigation, and floor protection to ensure your safe arrives undamaged while protecting your property."
    }
  ];

  const neighborhoods = [
    "Centretown", "The Glebe", "Westboro", "Hintonburg", "Sandy Hill",
    "Orleans", "Kanata", "Nepean", "Barrhaven", 
    "Gloucester", "Rockcliffe Park", "New Edinburgh", "Alta Vista", "Manotick", "Gatineau"
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
        <title>Specialty Item Moving Ottawa ON | Hot Tub, Pool Table, Gym & Medical Equipment Movers | Prestige Moving</title>
        <meta name="description" content="Professional specialty item moving in Ottawa ON. Hot tubs, pool tables, gym equipment, medical equipment, safes. WSIB certified, specialized equipment. Get your free quote today!" />
        <meta name="keywords" content="specialty item moving Ottawa, hot tub movers ON, pool table moving Ottawa, gym equipment movers, medical equipment moving, safe movers Ottawa, heavy item moving, oversized item relocation" />
        <meta property="og:title" content="Specialty Item Moving Ottawa | Hot Tubs, Pool Tables, Gym & Medical Equipment | Prestige Moving" />
        <meta property="og:description" content="Ottawa's trusted specialty item movers. From hot tubs and pool tables to gym and medical equipment. WSIB certified, specialized equipment, expert handling." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ottawa.prestigemoving.ca/services/specialty-item-moving" />
        <meta property="og:image" content="https://ottawa.prestigemoving.ca/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Specialty Item Moving Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="Expert hot tub, pool table, gym & medical equipment movers. WSIB certified." />
        <meta name="twitter:image" content="https://ottawa.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://ottawa.prestigemoving.ca/services/specialty-item-moving" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            data-testid="hero-video-specialty"
          >
            <source src={specialtyVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332] via-[#1A2332]/90 to-[#1A2332]/40" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <Badge className="bg-primary/20 text-primary border-primary/40 px-4 py-1.5" data-testid="badge-specialty-moving">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Specialty Item Moving
                </Badge>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/40" data-testid="badge-specialized-equipment">
                  <Wrench className="h-3 w-3 mr-1" />
                  Specialized Equipment
                </Badge>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]" data-testid="heading-hero">
                Ottawa's<br />
                <span className="text-primary">Heavy Item Experts</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed" data-testid="text-hero-description">
                From hot tubs and pool tables to gym equipment and safes, we've safely moved <span className="text-primary font-semibold">2,000+ specialty items</span> across the National Capital Region.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/book">
                  <Button size="lg" className="text-lg font-bold px-8 py-7 shadow-xl shadow-primary/30 group" data-testid="button-hero-quote">
                    Get Free Quote
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:613-600-4000">
                  <Button size="lg" variant="outline" className="text-lg font-bold px-8 py-7 border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm" data-testid="button-hero-call">
                    <Phone className="h-5 w-5 mr-2" />
                    (613) 600-4000
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-6">
                <WorkSafeBadge size="md" data-testid="badge-worksafe-hero" />
                <div className="flex items-center gap-2 text-white/70" data-testid="badge-bbb">
                  <Award className="h-5 w-5 text-primary" />
                  <span>BBB A+ Rated</span>
                </div>
                <div className="flex items-center gap-2 text-white/70" data-testid="badge-insured">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Fully Insured</span>
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
                { value: "2,000+", label: "Specialty Items Moved" },
                { value: "5.0★", label: "Google Rating" },
                { value: "15+", label: "Years Experience" },
                { value: "Same Day", label: "Quote Response" }
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
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6" data-testid="heading-about">
                  Ottawa's Premier Specialty Item Movers
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    When standard moving services aren't enough, <strong>Prestige Moving Ottawa</strong> delivers the specialized expertise your unique items require. Our trained specialists have the equipment and know-how to safely transport items that other movers won't touch.
                  </p>
                  <p>
                    From <strong>hot tub relocation</strong> and pool table moving to gym equipment transport and medical equipment handling, we've built our reputation on successfully moving the items that matter most to Ottawa families and businesses.
                  </p>
                  <p>
                    As a <strong>WSIB certified moving company</strong>, we prioritize safety for both our team and your valuable belongings. Our movers are fully insured and trained on specialized equipment handling procedures.
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
              
              <div className="relative rounded-2xl overflow-hidden h-[400px] bg-gradient-to-br from-[#1A2332] to-[#2A3342]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6 p-8">
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                      <Waves className="h-12 w-12 text-primary mx-auto mb-3" />
                      <span className="text-white font-semibold">Hot Tubs</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                      <Circle className="h-12 w-12 text-primary mx-auto mb-3" />
                      <span className="text-white font-semibold">Pool Tables</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                      <Dumbbell className="h-12 w-12 text-primary mx-auto mb-3" />
                      <span className="text-white font-semibold">Gym Equipment</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                      <Stethoscope className="h-12 w-12 text-primary mx-auto mb-3" />
                      <span className="text-white font-semibold">Medical Equipment</span>
                    </div>
                  </div>
                </div>
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
                      <div className="font-bold">200+ Reviews</div>
                      <div className="text-sm text-white/70">5-Star Specialty Moving</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Types Tabs */}
        <section className="py-16 md:py-20 bg-[#1A2332]" data-testid="section-specialty-types">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Our Specialties</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4" data-testid="heading-specialty-types">
                Specialty Items We Move
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Expert handling for oversized, heavy, and unique items
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              {specialtyTypes.map((specialty, index) => {
                const SpecialtyIcon = specialty.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                      activeTab === index 
                        ? 'bg-primary text-[#1A2332] shadow-lg shadow-primary/30' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    data-testid={`tab-${specialty.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <SpecialtyIcon className="h-5 w-5" />
                    {specialty.title}
                  </button>
                );
              })}
            </div>

            {/* Active Specialty Content */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4" data-testid="text-active-specialty-title">
                    {specialtyTypes[activeTab].title} Moving
                  </h3>
                  <p className="text-lg text-white/70 mb-6" data-testid="text-active-specialty-description">
                    {specialtyTypes[activeTab].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {specialtyTypes[activeTab].features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3" data-testid={`feature-${i}`}>
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/book">
                    <Button size="lg" className="font-bold" data-testid="button-specialty-quote">
                      Get a Quote
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
                
                <div className="relative rounded-2xl overflow-hidden h-[300px] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  {(() => {
                    const ActiveIcon = specialtyTypes[activeTab].icon;
                    return <ActiveIcon className="h-32 w-32 text-primary/50" />;
                  })()}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Heavy Item Experts Section */}
        <section className="py-16 md:py-20 bg-gray-50" data-testid="section-heavy-item-experts">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Heavy Item Experts</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4" data-testid="heading-heavy-experts">
                Why Trust Us With Your Heavy Items
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized equipment, trained professionals, and proven techniques
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Wrench, title: "Specialized Equipment", description: "Professional dollies, stair climbers, rigging equipment, and crane coordination for items up to 2,000+ lbs", color: "from-amber-500 to-amber-600" },
                { icon: Users, title: "Trained Specialists", description: "Our crew members have 5+ years average experience with heavy and oversized items", color: "from-blue-500 to-blue-600" },
                { icon: Shield, title: "Full Insurance Coverage", description: "Complete protection for high-value specialty items from pickup to delivery", color: "from-emerald-500 to-emerald-600" },
                { icon: Timer, title: "Efficient Process", description: "Pre-move assessments, access planning, and streamlined execution", color: "from-violet-500 to-violet-600" },
                { icon: ThumbsUp, title: "Damage-Free Guarantee", description: "Proven techniques to protect both your items and property during the move", color: "from-rose-500 to-rose-600" },
                { icon: Award, title: "WSIB Certified", description: "Full compliance with workplace safety standards for lifting heavy items", color: "from-primary to-amber-600" }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg" data-testid={`card-expert-${index}`}>
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
        <section className="py-16 md:py-20 bg-white" data-testid="section-testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Reviews</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4" data-testid="heading-testimonials">
                What Our Customers Say
              </h2>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span>Based on 200+ Specialty Move Reviews</span>
              </div>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-2 shadow-xl" data-testid="card-testimonial-active">
                <CardContent className="p-8 md:p-12">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                    ))}
                  </div>
                  <Badge className="mb-4 bg-primary/10 text-primary" data-testid="badge-item-type">
                    {testimonials[activeTestimonial].itemType}
                  </Badge>
                  <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed" data-testid="text-testimonial-quote">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 bg-gradient-to-br from-primary to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[activeTestimonial].name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-lg" data-testid="text-testimonial-name">{testimonials[activeTestimonial].name}</p>
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

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-gray-50" data-testid="section-faq">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4" data-testid="heading-faq">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about specialty item moving
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4" data-testid="accordion-faq">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border rounded-xl px-6 shadow-sm"
                  data-testid={`accordion-item-${index}`}
                >
                  <AccordionTrigger 
                    className="text-left hover:no-underline py-6"
                    data-testid={`accordion-trigger-${index}`}
                  >
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed" data-testid={`accordion-content-${index}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 md:py-20 bg-[#1A2332]" data-testid="section-service-areas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">Coverage</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4" data-testid="heading-service-areas">
                Ottawa Areas We Serve
              </h2>
              <p className="text-lg text-white/60">
                Specialty item moving across National Capital Region and the Greater Ottawa Area
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
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-20 bg-gray-50" data-testid="section-related-services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">More Services</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4" data-testid="heading-related-services">
                Related Moving Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our full range of professional moving solutions
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/services/residential-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-residential-moving">
                  <CardContent className="p-6">
                    <Home className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Residential Moving</h3>
                    <p className="text-muted-foreground">Full-service home moving for apartments, condos, and houses</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/commercial-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-commercial-moving">
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Commercial Moving</h3>
                    <p className="text-muted-foreground">Office relocations and business equipment moving</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/piano-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-piano-moving">
                  <CardContent className="p-6">
                    <Music className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Piano Moving</h3>
                    <p className="text-muted-foreground">Expert grand, baby grand, and upright piano transport</p>
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
              <Link href="/services/packing-services">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-packing-services">
                  <CardContent className="p-6">
                    <Package className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Packing Services</h3>
                    <p className="text-muted-foreground">Professional packing for fragile and specialty items</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/services/long-distance-moving">
                <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full" data-testid="link-long-distance-moving">
                  <CardContent className="p-6">
                    <Truck className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Long Distance Moving</h3>
                    <p className="text-muted-foreground">Cross-province and Canada-wide specialty item transport</p>
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
              <span className="text-[#1A2332] font-semibold text-sm">Free Specialty Item Assessment</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2332] mb-6" data-testid="heading-cta">
              Ready to Move Your Specialty Items?
            </h2>
            
            <p className="text-xl text-[#1A2332]/80 mb-8 max-w-2xl mx-auto">
              Join 2,000+ customers who trusted us with their hot tubs, pool tables, gym equipment, and more. Get your personalized quote today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-[#1A2332] hover:bg-[#1A2332]/90 text-white text-lg font-bold px-10 py-7 shadow-xl" data-testid="button-cta-quote">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:613-600-4000">
                <Button size="lg" variant="outline" className="border-2 border-[#1A2332] text-[#1A2332] hover:bg-[#1A2332] hover:text-white text-lg font-bold px-10 py-7" data-testid="button-cta-call">
                  <Phone className="h-5 w-5 mr-2" />
                  (613) 600-4000
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
