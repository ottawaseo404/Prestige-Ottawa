import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import {
  Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star,
  MapPin, ArrowRight, ChevronDown, Award, Calendar, Package,
  Home, Building2, Zap, Heart, ThumbsUp, BadgeCheck, Wrench,
  ClipboardList, Globe, BarChart3
} from "lucide-react";
import heroImage from "@assets/prestige-fleet_1771975522124.webp";
import infographicImage from "@assets/images/seo-movers-in-ottawa-infographic.png";
import teamImage from "@assets/images/seo-movers-in-ottawa-team.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function MoversInOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving - Ottawa Movers",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/movers-in-ottawa",
    "telephone": "(613) 600-4000",
    "email": "Ottawa@prestigemoving.ca",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "50 Colonnade Rd Unit 200B",
      "addressLocality": "Ottawa",
      "addressRegion": "ON",
      "postalCode": "K2E 7J6",
      "addressCountry": "CA"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "337"
    },
    "areaServed": [
      { "@type": "Place", "name": "Ottawa, Ontario" },
      { "@type": "Place", "name": "Barrhaven" },
      { "@type": "Place", "name": "Kanata" },
      { "@type": "Place", "name": "Orleans" },
      { "@type": "Place", "name": "Nepean" },
      { "@type": "Place", "name": "Gloucester" },
      { "@type": "Place", "name": "Stittsville" },
      { "@type": "Place", "name": "Westboro" },
      { "@type": "Place", "name": "Alta Vista" },
      { "@type": "Place", "name": "Riverside South" },
      { "@type": "Place", "name": "Centretown" },
      { "@type": "Place", "name": "Hintonburg" },
      { "@type": "Place", "name": "Vanier" }
    ],
    "description": "Ottawa's #1 rated moving company. Prestige Moving has completed 10,000+ moves across Ottawa with 337+ five-star reviews. WSIB certified, fully insured, transparent pricing. Residential, commercial, and long-distance movers serving all Ottawa neighbourhoods."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do movers in Ottawa cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ottawa moving costs typically range from $350 to $3,500+ depending on home size, distance, and services. A one-bedroom apartment move costs $350–$700, two-bedroom $700–$1,400, three-bedroom $1,200–$2,500, and four-bedroom or larger homes $2,000–$3,500+. Prestige Moving provides transparent, itemized quotes with no hidden fees. Call (613) 600-4000 for your free estimate."
        }
      },
      {
        "@type": "Question",
        "name": "Are Prestige Moving's Ottawa movers insured and WSIB certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every Prestige Moving team member is WSIB (Workplace Safety and Insurance Board) certified and we carry comprehensive commercial liability insurance. Your belongings are fully protected from the moment our movers arrive until every item is placed in your new Ottawa home. Additional valuation coverage is available for high-value items."
        }
      },
      {
        "@type": "Question",
        "name": "What Ottawa neighbourhoods do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prestige Moving serves every neighbourhood in Ottawa including Barrhaven, Kanata, Orleans, Nepean, Gloucester, Stittsville, Westboro, Alta Vista, Riverside South, Centretown, Hintonburg, Vanier, Rockcliffe Park, Manor Park, Manotick, Richmond, Carp, and all surrounding communities in the National Capital Region."
        }
      },
      {
        "@type": "Question",
        "name": "How far in advance should I book Ottawa movers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend booking your Ottawa move 2–4 weeks in advance for best availability, especially during the peak summer season (May–September) and end-of-month dates when demand is highest. For last-minute moves, call (613) 600-4000 — we often accommodate short-notice bookings depending on availability."
        }
      },
      {
        "@type": "Question",
        "name": "Do Ottawa movers from Prestige offer packing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Prestige Moving offers full-service packing, partial packing, and unpacking services for Ottawa residents. Our team supplies all packing materials including boxes, tape, bubble wrap, packing paper, and specialty wrapping for fragile and high-value items. We also offer furniture disassembly and reassembly as part of our comprehensive moving packages."
        }
      },
      {
        "@type": "Question",
        "name": "Can Prestige Moving handle long-distance moves from Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. In addition to local Ottawa moves, Prestige Moving specializes in long-distance relocations from Ottawa to Toronto, Montreal, Kingston, Gatineau, Hamilton, and throughout Ontario and Quebec. We provide climate-controlled transport, careful handling, and end-to-end coordination for every long-distance move."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Prestige Moving the best movers in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prestige Moving stands apart with 337+ five-star reviews, 10,000+ completed Ottawa moves, WSIB certification, fully insured teams, a modern truck fleet with air-ride suspension, transparent no-hidden-fee pricing, and a satisfaction guarantee. Our movers are background-checked, professionally trained, and fully uniformed — delivering a premium moving experience every time."
        }
      },
      {
        "@type": "Question",
        "name": "Do you move condos and apartments in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Prestige Moving has extensive experience with Ottawa condo and apartment moves. We coordinate elevator bookings, manage parking permits, navigate narrow hallways, and handle all building requirements. We've worked in hundreds of Ottawa condo buildings across the city."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best time of year to move in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fall (September–October) and winter (November–March) are generally the easiest times to book Ottawa movers with more availability and lower demand. Spring and summer (April–August) are the busiest moving seasons. Regardless of season, Prestige Moving operates year-round with equipment and expertise for winter Ottawa moves."
        }
      },
      {
        "@type": "Question",
        "name": "Do Ottawa movers charge extra for stairs or heavy items?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prestige Moving provides transparent, itemized quotes that clearly outline any considerations for stairs, elevators, or specialty items like pianos, hot tubs, or pool tables. We never add surprise fees on moving day — everything is discussed and agreed upon in your free quote upfront."
        }
      }
    ]
  };

  const stats = [
    { icon: Star, value: "337+", label: "Five-Star Reviews", sub: "Google & Trusted" },
    { icon: TruckIcon, value: "10,000+", label: "Successful Moves", sub: "Across Ottawa" },
    { icon: Clock, value: "15+", label: "Years Experience", sub: "In Ottawa" },
    { icon: Users, value: "50+", label: "Pro Movers", sub: "WSIB Certified" },
    { icon: Shield, value: "100%", label: "Fully Insured", sub: "Every Move" },
    { icon: MapPin, value: "100+", label: "Neighbourhoods", sub: "Served in Ottawa" },
  ];

  const whyChooseUs = [
    {
      icon: BadgeCheck,
      title: "WSIB Certified & Fully Insured",
      description: "Every mover on our Ottawa teams is WSIB certified and we carry comprehensive commercial liability coverage. Your belongings are protected from the moment we arrive to the moment we place the last item."
    },
    {
      icon: Star,
      title: "337+ Five-Star Reviews",
      description: "Our track record speaks for itself. With over 337 five-star reviews from Ottawa homeowners, condo owners, and businesses, Prestige Moving has earned a reputation as Ottawa's most trusted moving company."
    },
    {
      icon: TruckIcon,
      title: "Modern Fleet with Air-Ride Suspension",
      description: "Our company-owned fleet features air-ride suspension trucks that minimize vibration and protect your belongings. Every truck is fully stocked with moving blankets, shrink wrap, dollies, and specialty equipment."
    },
    {
      icon: Zap,
      title: "Transparent No-Hidden-Fee Pricing",
      description: "We provide detailed, itemized quotes with no surprise charges. Every cost — labour, truck, materials, travel time — is explained clearly before your move. What we quote is what you pay."
    },
    {
      icon: ThumbsUp,
      title: "Background-Checked Professionals",
      description: "Every Prestige Moving team member is background-checked, professionally trained, and arrives in uniform with proper ID. You can trust our Ottawa movers with your home and belongings."
    },
    {
      icon: Heart,
      title: "Satisfaction Guarantee",
      description: "We stand behind every Ottawa move we complete. If anything doesn't meet your expectations, we'll make it right. Our goal is a stress-free moving experience from start to finish."
    }
  ];

  const services = [
    { icon: Home, title: "Residential Moving", description: "Houses, condos, townhomes, apartments — we handle every type of Ottawa residential move with care and efficiency.", href: "/services/residential-moving" },
    { icon: Building2, title: "Commercial Moving", description: "Office relocations, retail moves, business transfers. We minimize downtime and protect your equipment.", href: "/services/commercial-moving" },
    { icon: Globe, title: "Long-Distance Moving", description: "Ottawa to Toronto, Montreal, Kingston, and beyond. Cross-provincial moves with full coordination.", href: "/services/long-distance-moving" },
    { icon: Package, title: "Packing Services", description: "Professional packing and unpacking with all supplies included. Full-service or partial packing available.", href: "/services/packing-services" },
    { icon: Wrench, title: "Specialty Item Moving", description: "Pianos, hot tubs, antiques, gym equipment, pool tables — trained specialists for high-value items.", href: "/services/specialty-item-moving" },
    { icon: Heart, title: "Senior Moving", description: "Compassionate, patient moving services tailored for Ottawa seniors and their unique needs.", href: "/services/senior-moving" },
  ];

  const processSteps = [
    { icon: Phone, step: "01", title: "Free Quote", description: "Call (613) 600-4000 or fill out our online form. Get a transparent, itemized quote within 24 hours with no obligation." },
    { icon: Calendar, step: "02", title: "Schedule Your Move", description: "Choose your preferred date and time. We offer flexible scheduling 7 days a week including evenings and weekends." },
    { icon: ClipboardList, step: "03", title: "We Arrive & Prepare", description: "Our uniformed Ottawa movers arrive on time, walk through your home, protect floors and walls, and begin loading with care." },
    { icon: TruckIcon, step: "04", title: "Safe Transport", description: "Your belongings are secured and transported in our air-ride suspension trucks to minimize movement and vibration." },
    { icon: Home, step: "05", title: "Delivery & Setup", description: "We unload, place furniture exactly where you want it, and reassemble anything that was taken apart. Your new Ottawa home, ready." },
  ];

  const neighbourhoods = [
    { name: "Barrhaven", href: "/movers-in-barrhaven" },
    { name: "Kanata", href: "/movers-in-kanata" },
    { name: "Orleans", href: "/movers-in-orleans" },
    { name: "Nepean", href: "/movers-in-nepean" },
    { name: "Gloucester", href: "/movers-in-gloucester" },
    { name: "Stittsville", href: "/movers-in-stittsville" },
    { name: "Westboro", href: "/movers-in-westboro" },
    { name: "Alta Vista", href: "/movers-in-alta-vista" },
    { name: "Riverside South", href: "/movers-in-riverside-south" },
    { name: "Centretown", href: "/" },
    { name: "Hintonburg", href: "/" },
    { name: "Manotick", href: "/" },
    { name: "Rockcliffe Park", href: "/" },
    { name: "Manor Park", href: "/" },
  ];

  const faqs = [
    {
      question: "How much do movers in Ottawa cost?",
      answer: "Ottawa moving costs vary based on home size, distance, and services required. A one-bedroom apartment move typically ranges from $350 to $700, a two-bedroom home from $700 to $1,400, and a three-bedroom house from $1,200 to $2,500. Larger four-bedroom or executive homes can range from $2,000 to $3,500 or more. These prices cover our professional moving team, a fully equipped truck, and all standard equipment. Prestige Moving provides fully transparent, itemized quotes so you know every cost before moving day — with no hidden fees, no surprise charges, and no last-minute add-ons. Call (613) 600-4000 for your free Ottawa moving quote."
    },
    {
      question: "Are Prestige Moving's Ottawa movers insured and WSIB certified?",
      answer: "Absolutely. Every member of the Prestige Moving team is fully WSIB (Workplace Safety and Insurance Board) certified, and we carry comprehensive commercial liability insurance that protects your belongings from the moment we arrive at your Ottawa home until the last box is placed in your new location. This coverage applies to every local Ottawa move, every long-distance relocation, and every commercial job we take on. For clients with particularly valuable possessions — antiques, fine art, high-end electronics, jewelry — we also offer additional declared valuation coverage for complete peace of mind."
    },
    {
      question: "What Ottawa neighbourhoods do you serve?",
      answer: "Prestige Moving serves every neighbourhood across Ottawa and the broader National Capital Region. This includes all major communities: Barrhaven, Kanata, Orleans, Nepean, Gloucester, Stittsville, Westboro, Alta Vista, Riverside South, Centretown, Hintonburg, Vanier, Rockcliffe Park, Manor Park, Manotick, Carp, Richmond, Navan, Greely, Metcalfe, and all newly developing suburbs. We also serve Gatineau, Aylmer, Hull, and other Quebec communities in the NCR. Wherever you're moving to or from in the Ottawa area, Prestige Moving has you covered."
    },
    {
      question: "How far in advance should I book Ottawa movers?",
      answer: "For the best availability and preferred time slots, we recommend booking your Ottawa move 2 to 4 weeks in advance. The peak Ottawa moving season runs from May through September, with end-of-month dates and long weekends filling up fastest. During the slower fall and winter months, shorter notice (1–2 weeks) is often possible. For truly last-minute moves, call us directly at (613) 600-4000 — we keep a limited number of slots open for urgent requests and will do our best to accommodate you. The sooner you call, the more flexibility you'll have in scheduling."
    },
    {
      question: "Do Ottawa movers from Prestige offer packing services?",
      answer: "Yes, Prestige Moving offers comprehensive professional packing services for Ottawa residents. Our team can pack your entire home (full-service packing) or handle specific rooms or items (partial packing) based on your preferences and budget. We bring all necessary packing materials — heavy-duty moving boxes, packing tape, bubble wrap, packing paper, custom foam inserts, and specialty wrapping for fragile and high-value items. We also offer full unpacking services so you can settle into your new Ottawa home immediately. Many Ottawa families find our packing service to be one of the most stress-relieving aspects of their move."
    },
    {
      question: "Can Prestige Moving handle long-distance moves from Ottawa?",
      answer: "Yes. In addition to our extensive local Ottawa moving services, Prestige Moving is fully equipped for long-distance relocations across Ontario and beyond. We regularly handle moves from Ottawa to Toronto, Montreal, Kingston, Gatineau, Brockville, Hamilton, London, and throughout the province. Our long-distance moves feature the same professional team, climate-controlled and air-ride suspension trucks, comprehensive insurance, and end-to-end logistics coordination. Whether you're relocating for work, family, or lifestyle reasons, Prestige Moving delivers the same five-star experience whether your destination is 30 minutes or 3 hours away."
    },
    {
      question: "What makes Prestige Moving the best movers in Ottawa?",
      answer: "Prestige Moving has earned its position as Ottawa's most trusted moving company through consistent five-star service over 15+ years. Our differentiators include: 337+ five-star Google reviews from Ottawa clients; 10,000+ successfully completed local and long-distance moves; a team of 50+ professional, background-checked, WSIB-certified movers; a modern fleet of air-ride suspension trucks fully equipped with protective materials; transparent, no-hidden-fee pricing on every quote; and a comprehensive satisfaction guarantee. We treat every Ottawa move — whether a studio apartment or a six-bedroom executive home — with the same level of professionalism and care."
    },
    {
      question: "Do you move condos and apartments in Ottawa?",
      answer: "Condo and apartment moves are one of our specialties in Ottawa. We have extensive experience working in Ottawa's tallest residential towers and most complex condo buildings. Our team handles elevator bookings with your building management, secures temporary parking permits for moving trucks on Ottawa's busy urban streets, navigates narrow hallways and tight corners, and coordinates all timing to work within your building's designated moving hours. We've completed hundreds of successful condo moves across Ottawa's downtown core, Westboro, Centretown, and in major condo developments throughout the city."
    },
    {
      question: "What is the best time of year to move in Ottawa?",
      answer: "Ottawa's peak moving season runs from late April through September, when demand for movers is highest. If you have flexibility, consider planning your move during the fall (September–November) or winter months (December–March) when movers are more available, prices can be more competitive, and you have more scheduling flexibility. That said, Ottawa winters require movers with experience — icy driveways, frozen locks, and temperature-sensitive items need special attention. Prestige Moving operates year-round with winter-ready equipment, anti-slip safety gear, and experience handling Ottawa's cold-weather moving challenges safely and efficiently."
    },
    {
      question: "Do Ottawa movers charge extra for stairs or heavy items?",
      answer: "Prestige Moving believes in full transparency from the very first conversation. When you request a quote, we ask specifically about stairs, elevator access, parking restrictions, narrow doorways, specialty items like pianos or safes, and anything else that might affect your move. All of these factors are accounted for in your upfront quote — we never add surprise charges on moving day. If your situation changes after you've received a quote, we simply update it and get your approval before proceeding. Every Ottawa family we work with knows exactly what they're paying before our truck leaves the garage."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Movers in Ottawa | #1 Rated Ottawa Moving Company | Prestige</title>
        <meta name="description" content="Looking for movers in Ottawa? Prestige Moving is Ottawa's #1 rated moving company with 337+ five-star reviews and 10,000+ completed moves. WSIB certified, fully insured, transparent pricing. Call (613) 600-4000 for a free quote." />
        <meta name="keywords" content="movers in ottawa, ottawa movers, moving company ottawa, best movers ottawa, professional movers ottawa, local movers ottawa, affordable movers ottawa, residential movers ottawa, commercial movers ottawa, ottawa moving company" />
        <link rel="canonical" href="https://prestigemoving.ca/movers-in-ottawa" />
        <meta property="og:title" content="Movers in Ottawa | #1 Rated Ottawa Moving Company | Prestige Moving" />
        <meta property="og:description" content="Ottawa's most trusted movers. 337+ five-star reviews, 10,000+ moves completed, WSIB certified. Full-service residential and commercial moving across all Ottawa neighbourhoods. Free quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/movers-in-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movers in Ottawa | Prestige Moving - #1 Rated" />
        <meta name="twitter:description" content="Ottawa's #1 rated movers. 337+ five-star reviews. WSIB certified. Call (613) 600-4000 for a free quote." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />

      <div className="min-h-screen bg-white">

        {/* HERO SECTION */}
        <section className="relative h-[580px] flex items-center" data-testid="section-hero">
          <img
            src={heroImage}
            alt="Professional movers in Ottawa from Prestige Moving loading a truck near Parliament Hill"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-5">
                <Star className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />
                <span className="text-[#C5A572] text-sm font-medium">#1 Rated Movers in Ottawa — 337+ Five-Star Reviews</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" data-testid="text-hero-heading">
                Ottawa's Most Trusted<br />
                <span className="text-[#C5A572]">Movers in Ottawa</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                10,000+ moves completed across Ottawa. WSIB certified, fully insured, transparent pricing — and a satisfaction guarantee on every move.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book">
                  <Button className="bg-[#C5A572] text-white border-[#C5A572] text-base px-6" data-testid="button-hero-quote">
                    Get Free Quote <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <a href="tel:6136004000">
                  <Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10 text-base px-6" data-testid="button-hero-call">
                    <Phone className="h-4 w-4 mr-2" />Call (613) 600-4000
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="bg-[#1A2332] py-10" data-testid="section-stats">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center" data-testid={`stat-${i}`}>
                  <stat.icon className="h-7 w-7 text-[#C5A572] mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                  <div className="text-white/40 text-xs">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE FORM */}
        <ServiceQuoteForm defaultService="Moving" serviceName="Ottawa Moving" />

        {/* MAIN CONTENT SECTION */}
        <section className="py-20" data-testid="section-main-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
                  Why Ottawa Families Choose Prestige Moving
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  When you search for <strong className="text-[#1A2332]">movers in Ottawa</strong>, you deserve more than a truck and some muscle. You deserve a team of professionals who treat your home like their own — who show up on time, communicate clearly, handle every item with care, and deliver a stress-free experience from the first phone call to the last box unpacked. That's the Prestige Moving difference.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Founded by Ottawa locals who understand the unique challenges of moving in Canada's capital — harsh winters, high-rise condos, suburban cul-de-sacs, heritage buildings, and everything in between — Prestige Moving has become the most trusted name in Ottawa relocations. With over 15 years serving the community, 10,000+ successful moves completed, and 337+ five-star reviews, our reputation is built on results, not promises.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our <strong className="text-[#1A2332]">Ottawa moving teams</strong> are background-checked, professionally trained, and WSIB certified. Every move is covered by comprehensive commercial liability insurance. Our pricing is fully transparent — no hidden fees, no surprise charges, no bait-and-switch tactics. We quote it, we do it, we guarantee it.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {[
                    "Background-checked, uniformed movers",
                    "Air-ride suspension trucks",
                    "Full floor & wall protection",
                    "Furniture disassembly & reassembly",
                    "Same-day quote response",
                    "7-days-a-week scheduling",
                    "No deposit required to book",
                    "Satisfaction guarantee on all moves"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3" data-testid={`feature-${i}`}>
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <img
                  src={teamImage}
                  alt="Prestige Moving professional team handling an Ottawa home move with care"
                  className="w-full rounded-md object-cover"
                />
                <div className="bg-[#1A2332] rounded-md p-5 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-5 w-5 text-[#C5A572]" />
                    <span className="font-semibold text-[#C5A572]">Prestige Credentials</span>
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />WSIB Certified — All Team Members</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />BBB Accredited Business (A+ Rating)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />Fully Licensed & Insured in Ontario</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />Google Guaranteed — 5.0 Star Rating</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />CAMSA Member</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INFOGRAPHIC / STATS SECTION */}
        <section className="py-20 bg-gray-50" data-testid="section-infographic">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">
                The Prestige Moving Ottawa Difference — By the Numbers
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We don't just talk about quality — we prove it. Every metric tells the story of Ottawa's most reliable moving company.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <img
                src={infographicImage}
                alt="Infographic showing Prestige Moving Ottawa statistics and service coverage map"
                className="w-full rounded-md shadow-sm"
              />
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "337+", label: "Five-Star Reviews", desc: "Across Google, HomeStars, and Trusted Partners", icon: Star },
                  { value: "10,000+", label: "Ottawa Moves Completed", desc: "Local, long-distance, residential, commercial", icon: TruckIcon },
                  { value: "15+", label: "Years Serving Ottawa", desc: "Deep local expertise in every neighbourhood", icon: Clock },
                  { value: "50+", label: "Professional Movers", desc: "Background-checked and WSIB certified", icon: Users },
                  { value: "24hr", label: "Quote Response Time", desc: "Fast answers, transparent itemized pricing", icon: Zap },
                  { value: "0", label: "Hidden Fees — Ever", desc: "What we quote is exactly what you pay", icon: BadgeCheck },
                  { value: "100%", label: "Satisfaction Guarantee", desc: "We make every Ottawa move right, every time", icon: ThumbsUp },
                  { value: "100+", label: "Ottawa Neighbourhoods", desc: "Full coverage across the entire NCR", icon: MapPin },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-md p-4 border border-gray-100" data-testid={`stat-card-${i}`}>
                    <item.icon className="h-5 w-5 text-[#C5A572] mb-2" />
                    <div className="text-2xl font-bold text-[#1A2332]">{item.value}</div>
                    <div className="text-sm font-semibold text-[#1A2332] mb-1">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20" data-testid="section-why-choose">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">
                What Makes Our Ottawa Movers the Best Choice
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Six reasons why thousands of Ottawa families, businesses, and individuals trust Prestige Moving for their most important relocations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-md p-6" data-testid={`why-card-${i}`}>
                  <div className="w-12 h-12 bg-[#C5A572]/10 rounded-md flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-[#C5A572]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2332] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-20 bg-[#1A2332]" data-testid="section-services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Ottawa Moving Services
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                From a studio apartment to a full corporate office, Prestige Moving has the expertise and equipment for every type of Ottawa relocation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <Link key={i} href={service.href} data-testid={`service-card-${i}`}>
                  <div className="bg-white/5 border border-white/10 rounded-md p-6 hover-elevate cursor-pointer">
                    <service.icon className="h-8 w-8 text-[#C5A572] mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{service.description}</p>
                    <span className="text-[#C5A572] text-sm font-medium flex items-center gap-1">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERTISE / DEEP CONTENT SECTION */}
        <section className="py-20" data-testid="section-expertise">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
              Ottawa Moving Expertise — 15+ Years of Local Knowledge
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-[#1A2332] mb-4">Deep Knowledge of Ottawa's Neighbourhoods</h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Moving in Ottawa isn't just about lifting boxes — it requires intimate knowledge of the city's layout, building regulations, parking restrictions, and seasonal challenges. Our teams have moved families in every corner of Ottawa, from the heritage stone homes of <Link href="/movers-in-westboro" className="text-[#C5A572] hover:underline">Westboro</Link> to the sprawling family homes of <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, from the luxury condos of the Byward Market to the military communities at CFB Petawawa.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  We know which Ottawa buildings require elevator deposits and how far in advance to book them. We know the City of Ottawa's <a href="https://www.ottawa.ca/en/parking-roads-and-travel" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">temporary no-parking permit process</a> for moving trucks on residential streets. We know the fastest routes between <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link> and <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link> during rush hour. This accumulated local expertise means fewer delays, faster moves, and a smoother experience for every Ottawa family we serve.
                </p>
                <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-8">Ottawa Winter Moving Specialists</h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Ottawa winters are legendary — and so is our ability to move through them. Our fleet is winterized with block heaters, and our teams carry anti-slip mats, weather-appropriate gear, and specialized equipment for icy driveways and slippery walkways. We wrap furniture in weather-resistant blankets and move quickly and efficiently to minimize exposure time. We've completed moves at -30°C without a single damaged item, and we're fully prepared for whatever Ottawa's winters throw at us.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1A2332] mb-4">Comprehensive Protection for Your Belongings</h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  When you trust Prestige Moving with your Ottawa home, we treat every item like it's irreplaceable — because to you, it is. Our protection process starts before we lift a single box: floor runners protect hardwood and carpet, corner guards protect doorframes and walls, and every piece of furniture is wrapped in thick moving blankets and shrink wrap before it leaves your home.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Specialty items receive extra care. Our <Link href="/services/piano-moving" className="text-[#C5A572] hover:underline">Ottawa piano movers</Link> use specialized dollies, straps, and techniques to transport upright and grand pianos safely. Our <Link href="/services/antique-moving" className="text-[#C5A572] hover:underline">antique moving specialists</Link> understand the unique requirements of fragile and high-value pieces. For businesses, our <Link href="/services/commercial-moving" className="text-[#C5A572] hover:underline">commercial moving team</Link> handles IT equipment, server racks, medical equipment, and sensitive documents with protocols that protect both your property and your data.
                </p>
                <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-8">Ottawa's Moving Price Guide</h3>
                <div className="bg-gray-50 rounded-md p-5 space-y-3">
                  {[
                    { size: "Studio / Bachelor", range: "$280 – $500", movers: "2 movers, 3–4 hrs" },
                    { size: "1-Bedroom Apartment", range: "$350 – $700", movers: "2 movers, 3–5 hrs" },
                    { size: "2-Bedroom Home", range: "$700 – $1,400", movers: "3 movers, 4–6 hrs" },
                    { size: "3-Bedroom Home", range: "$1,200 – $2,500", movers: "3–4 movers, 5–8 hrs" },
                    { size: "4+ Bedroom / Executive", range: "$2,000 – $3,500+", movers: "4–5 movers, 7–12 hrs" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between gap-4 py-2 border-b border-gray-200 last:border-0" data-testid={`price-row-${i}`}>
                      <span className="font-semibold text-[#1A2332] text-sm">{row.size}</span>
                      <div className="text-right">
                        <div className="text-[#C5A572] font-bold text-sm">{row.range}</div>
                        <div className="text-gray-400 text-xs">{row.movers}</div>
                      </div>
                    </div>
                  ))}
                  <p className="text-xs text-gray-500 pt-2">* Estimates only. Call (613) 600-4000 for your personalized Ottawa moving quote.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section className="py-20 bg-gray-50" data-testid="section-process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">
                How Your Ottawa Move Works — Step by Step
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                A seamless experience from your first call to your last box unpacked. Here's exactly what to expect when you move with Prestige.
              </p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-[#C5A572]/30" />
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {processSteps.map((step, i) => (
                  <div key={i} className="text-center relative" data-testid={`process-step-${i}`}>
                    <div className="w-16 h-16 bg-[#C5A572]/10 border-2 border-[#C5A572]/30 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 bg-white">
                      <step.icon className="h-7 w-7 text-[#C5A572]" />
                    </div>
                    <div className="text-xs font-bold text-[#C5A572] mb-1">STEP {step.step}</div>
                    <h3 className="font-bold text-[#1A2332] mb-2 text-sm">{step.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NEIGHBOURHOODS SERVED */}
        <section className="py-20" data-testid="section-neighbourhoods">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">
                Movers Serving Every Ottawa Neighbourhood
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Prestige Moving covers the entire National Capital Region — every suburb, every ward, every community. Click your neighbourhood to learn more.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {neighbourhoods.map((n, i) => (
                <Link key={i} href={n.href}>
                  <span
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-100 text-[#1A2332] text-sm font-medium hover-elevate cursor-pointer"
                    data-testid={`neighbourhood-${i}`}
                  >
                    <MapPin className="h-3.5 w-3.5 text-[#C5A572]" />
                    {n.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="bg-[#1A2332] rounded-md p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Don't See Your Area?</h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Prestige Moving serves all Ottawa communities including Manotick, Carp, Richmond, Navan, Greely, Metcalfe, Osgoode, and throughout the rural Ottawa area. We also serve Gatineau, Aylmer, Hull, and Buckingham in Quebec. If you're within the NCR, we'll move you.
                  </p>
                  <p className="text-white/70 text-sm">
                    For communities outside Ottawa, our <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">long-distance moving team</Link> handles relocations across Ontario and into Quebec with the same professional standard.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="tel:6136004000" className="flex items-center gap-3 bg-white/10 rounded-md p-4 hover-elevate">
                    <Phone className="h-5 w-5 text-[#C5A572] shrink-0" />
                    <div>
                      <div className="font-semibold text-white text-sm">Call Our Ottawa Office</div>
                      <div className="text-[#C5A572] font-bold">(613) 600-4000</div>
                    </div>
                  </a>
                  <a href="mailto:Ottawa@prestigemoving.ca" className="flex items-center gap-3 bg-white/10 rounded-md p-4 hover-elevate">
                    <BarChart3 className="h-5 w-5 text-[#C5A572] shrink-0" />
                    <div>
                      <div className="font-semibold text-white text-sm">Email Our Ottawa Team</div>
                      <div className="text-[#C5A572] text-sm">Ottawa@prestigemoving.ca</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-gray-50" data-testid="section-testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">
                What Ottawa Families Are Saying
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} className="h-6 w-6 text-[#C5A572] fill-[#C5A572]" />)}
                <span className="text-gray-600 font-medium ml-2">5.0 — 337+ Reviews</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah M.",
                  location: "Barrhaven, Ottawa",
                  review: "We moved from Barrhaven to Kanata with a full 4-bedroom house. The Prestige team showed up on time, wrapped everything immaculately, and had us settled into our new home by 4pm. Not a single scratch anywhere. Best movers we've ever used.",
                  stars: 5
                },
                {
                  name: "David L.",
                  location: "Centretown, Ottawa",
                  review: "Moving from a high-rise condo in Centretown is notoriously stressful — elevator bookings, parking permits, narrow hallways. Prestige handled every single detail without me lifting a finger. Truly professional from start to finish.",
                  stars: 5
                },
                {
                  name: "Jennifer K.",
                  location: "Orleans, Ottawa",
                  review: "I was nervous about my piano and a few antique pieces. The Prestige crew treated them like family heirlooms. Everything arrived perfectly. The quote was exactly what we paid — not a penny more. Highly recommended to every Ottawa family.",
                  stars: 5
                },
                {
                  name: "Michael T.",
                  location: "Nepean, Ottawa",
                  review: "Third time using Prestige Moving and they keep getting better. Fast, careful, friendly, and honest. Ottawa is lucky to have a moving company this good. The price was fair and the team was phenomenal.",
                  stars: 5
                },
                {
                  name: "Amanda R.",
                  location: "Kanata, Ottawa",
                  review: "The packing service was worth every penny. They packed our entire 3-bedroom in one day, moved us the next morning, and unpacked the kitchen and bedrooms in the afternoon. We were 100% functional within 24 hours of our move.",
                  stars: 5
                },
                {
                  name: "Robert F.",
                  location: "Westboro, Ottawa",
                  review: "Moving a heritage home in Westboro is a challenge — tight streets, delicate finishes, century-old hardwood floors. Prestige Moving navigated every obstacle perfectly. The crew was experienced, respectful, and incredibly efficient.",
                  stars: 5
                }
              ].map((t, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-md p-5" data-testid={`testimonial-${i}`}>
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />)}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.review}"</p>
                  <div>
                    <div className="font-semibold text-[#1A2332] text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs flex items-center gap-1">
                      <MapPin className="h-3 w-3" />{t.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20" data-testid="section-faq">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">
                Frequently Asked Questions — Movers in Ottawa
              </h2>
              <p className="text-gray-600">
                Everything you need to know about hiring professional movers in Ottawa. Can't find your answer? Call us at <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a>.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-md overflow-hidden" data-testid={`faq-item-${i}`}>
                  <button
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover-elevate"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    data-testid={`button-faq-${i}`}
                  >
                    <span className="font-semibold text-[#1A2332] text-sm md:text-base">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-[#C5A572] transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO KEYWORDS SECTION */}
        <SeoKeywordsSection currentPage="/movers-in-ottawa" />

        {/* FINAL CTA */}
        <section className="py-20 bg-[#C5A572]" data-testid="section-cta">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-6">
              <Star className="h-4 w-4 text-white fill-white" />
              <span className="text-white text-sm font-medium">Ottawa's #1 Rated Moving Company</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to Move in Ottawa?
            </h2>
            <p className="text-white/80 text-lg mb-4 max-w-xl mx-auto">
              Join 10,000+ Ottawa families who chose Prestige Moving. Get your free, transparent quote today — no obligation, no pressure.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {["Fast Response", "Fully Insured & WSIB", "337+ Five-Star Reviews", "No Hidden Fees"].map((t, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-4 py-1.5 text-white text-sm">
                  <CheckCircle2 className="h-4 w-4" />{t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book">
                <Button className="bg-[#1A2332] text-white border-[#1A2332] text-base px-8" data-testid="button-cta-quote">
                  Get Your Free Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:6136004000">
                <Button variant="outline" className="text-white border-white/40 backdrop-blur-sm bg-white/10 text-base px-8" data-testid="button-cta-call">
                  <Phone className="h-4 w-4 mr-2" />Call (613) 600-4000
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>

      <SharedFooter />
    </>
  );
}
