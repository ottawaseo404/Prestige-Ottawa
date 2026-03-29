import { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";
import {
  Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star,
  MapPin, ArrowRight, ChevronDown, Award, Package,
  Navigation, Ruler, DollarSign, Home, Building2, Zap, Route,
  FileText, Sparkles, Globe, ChevronRight, Info, List
} from "lucide-react";

const ROUTES = [
  { city: "Toronto", province: "ON", distance: 450, hours: "4–5 hrs", pop: "2.9M", base: 1800, perBR: 400, desc: "Ontario's capital — our most popular long distance route" },
  { city: "Kingston", province: "ON", distance: 195, hours: "2 hrs", pop: "136K", base: 900, perBR: 200, desc: "University town along the 401 corridor" },
  { city: "Hamilton", province: "ON", distance: 510, hours: "5 hrs", pop: "580K", base: 2000, perBR: 450, desc: "Steel city at the western tip of Lake Ontario" },
  { city: "London", province: "ON", distance: 625, hours: "6 hrs", pop: "422K", base: 2300, perBR: 500, desc: "Forest City in southwestern Ontario" },
  { city: "Windsor", province: "ON", distance: 820, hours: "7.5 hrs", pop: "230K", base: 2800, perBR: 600, desc: "Canada's southernmost city on the US border" },
  { city: "Montreal", province: "QC", distance: 200, hours: "2 hrs", pop: "2.0M", base: 950, perBR: 220, desc: "Quebec's cultural capital — bilingual city just 2 hrs away" },
  { city: "Quebec City", province: "QC", distance: 485, hours: "4.5 hrs", pop: "550K", base: 1900, perBR: 420, desc: "Historic walled city along the St. Lawrence" },
  { city: "Winnipeg", province: "MB", distance: 2085, hours: "20 hrs", pop: "749K", base: 4500, perBR: 900, desc: "Gateway to the Prairies — a major long-haul destination" },
  { city: "Calgary", province: "AB", distance: 3360, hours: "31 hrs", pop: "1.3M", base: 6500, perBR: 1200, desc: "Oil capital of Canada — booming Alberta economy" },
  { city: "Edmonton", province: "AB", distance: 3475, hours: "32 hrs", pop: "1.0M", base: 6800, perBR: 1250, desc: "Northern Alberta's provincial capital" },
  { city: "Vancouver", province: "BC", distance: 4530, hours: "42 hrs", pop: "2.5M", base: 8500, perBR: 1600, desc: "Canada's Pacific gateway — cross-country moves available" },
  { city: "Halifax", province: "NS", distance: 1710, hours: "16 hrs", pop: "465K", base: 4000, perBR: 850, desc: "Atlantic Canada hub on the Nova Scotia coast" },
  { city: "Moncton", province: "NB", distance: 1380, hours: "13 hrs", pop: "180K", base: 3200, perBR: 700, desc: "New Brunswick's fastest growing city" },
  { city: "Fredericton", province: "NB", distance: 1265, hours: "12 hrs", pop: "67K", base: 3000, perBR: 680, desc: "New Brunswick's provincial capital" },
  { city: "Saint John", province: "NB", distance: 1240, hours: "11.5 hrs", pop: "70K", base: 2900, perBR: 660, desc: "Port city on the Bay of Fundy" },
  { city: "Charlottetown", province: "PE", distance: 1640, hours: "15.5 hrs", pop: "40K", base: 3800, perBR: 820, desc: "PEI's capital — ferry included in planning" },
  { city: "St. John's", province: "NL", distance: 2900, hours: "ferry+drive", pop: "114K", base: 6000, perBR: 1300, desc: "Newfoundland's colourful capital — includes ferry coordination" },
  { city: "Saskatoon", province: "SK", distance: 2815, hours: "26 hrs", pop: "266K", base: 5800, perBR: 1100, desc: "Saskatchewan's largest city on the South Saskatchewan River" },
  { city: "Regina", province: "SK", distance: 2640, hours: "24 hrs", pop: "230K", base: 5500, perBR: 1050, desc: "Saskatchewan's provincial capital" },
  { city: "Victoria", province: "BC", distance: 4680, hours: "ferry+drive", pop: "91K", base: 9000, perBR: 1700, desc: "BC's capital on Vancouver Island — includes ferry coordination" },
  { city: "Kelowna", province: "BC", distance: 4250, hours: "39 hrs", pop: "145K", base: 8000, perBR: 1550, desc: "Okanagan wine country — scenic mountain drive route" },
];

const MOVE_SIZES = [
  { label: "Studio / Bachelor", bedrooms: 0, multiplier: 1.0 },
  { label: "1 Bedroom", bedrooms: 1, multiplier: 1.0 },
  { label: "2 Bedrooms", bedrooms: 2, multiplier: 1.4 },
  { label: "3 Bedrooms", bedrooms: 3, multiplier: 1.8 },
  { label: "4 Bedrooms", bedrooms: 4, multiplier: 2.3 },
  { label: "5+ Bedrooms / Large Home", bedrooms: 5, multiplier: 2.9 },
];

const FAQS = [
  {
    q: "How far in advance should I book a long distance move from Ottawa?",
    a: "We recommend booking at least 4–6 weeks in advance for long distance moves. For peak season (May–September) and cross-country moves to BC or AB, 8–10 weeks notice gives you the best availability and pricing. Same-week bookings are sometimes possible for shorter routes like Ottawa–Toronto or Ottawa–Montreal."
  },
  {
    q: "How is the cost of a long distance move from Ottawa calculated?",
    a: "Long distance moves are priced based on four key factors: the distance to your destination, the total weight or volume of your belongings (determined by move size), the number of movers required, and any specialty services like packing, storage, or stair carries. We provide binding written estimates — the price you receive is the price you pay, with no surprise charges on delivery."
  },
  {
    q: "Do you move across all provinces in Canada?",
    a: "Yes — Prestige Moving provides long distance moving services to every province and territory in Canada. This includes Ontario, Quebec, New Brunswick, Nova Scotia, PEI, Newfoundland, Manitoba, Saskatchewan, Alberta, and British Columbia. We also coordinate ferry logistics for PEI, Newfoundland, and Vancouver Island moves."
  },
  {
    q: "How long does a long distance move from Ottawa take?",
    a: "Transit time depends on your destination. Ottawa to Toronto is typically 1–2 days. Ottawa to Calgary or Vancouver is 5–8 business days for transit. For cross-country moves, we provide a delivery window and keep you updated throughout. Your belongings travel on a dedicated truck — we don't combine loads for long distance moves."
  },
  {
    q: "Is my furniture covered during a long distance move?",
    a: "Every long distance move includes full valuation coverage. We wrap all furniture in professional moving blankets, shrink-wrap upholstered items, and use corner guards and floor runners at both locations. Our trucks are equipped with air-ride suspension to reduce vibration over long distances. Additional insurance options are available."
  },
  {
    q: "Do you offer storage options for long distance moves?",
    a: "Yes. If your destination isn't ready on move day, we offer secure, climate-controlled storage at our Ottawa facility. Your belongings are vaulted and protected until your new home is ready, then delivered on your schedule. Short-term (1 week) and long-term (months) storage plans are both available."
  },
  {
    q: "Can you pack and unpack for my long distance move?",
    a: "Absolutely. Our full-service packing includes professional-grade materials: double-walled boxes, tissue paper, bubble wrap, and custom crating for fragile or high-value items. We label every box by room and contents, making unpacking at your new home straightforward. Partial packing (e.g., just fragile items) is also available."
  },
  {
    q: "What items can't be moved on a long distance move?",
    a: "We cannot transport hazardous materials (paint, propane, gasoline), perishable food, plants (across provincial borders), or firearms without proper permits. We'll provide a full list of restricted items during your quote consultation. Items like hot tubs, pool tables, and pianos can be moved with our specialty equipment and trained crews."
  },
  {
    q: "How do I get a quote for a long distance move from Ottawa?",
    a: "You can call us directly at (613) 600-4000 or fill out our online quote form. For long distance moves, we typically do a virtual or in-home inventory survey to provide an accurate binding estimate. There's no obligation and no cost for the estimate."
  },
  {
    q: "What makes Prestige Moving different from other long distance movers?",
    a: "Three things: we own our fleet (no broker or third-party handoffs), we provide binding written estimates (no surprise charges), and we assign a dedicated move coordinator who stays with you from booking to delivery. We also have 350+ five-star Google reviews and a BBB A+ rating — proof of consistent service across thousands of moves."
  },
];

const CITIES_POPULAR = ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Halifax"];

export default function LongDistanceMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState("Toronto");
  const [moveSize, setMoveSize] = useState(1);

  const selectedRoute = useMemo(() => ROUTES.find(r => r.city === selectedCity)!, [selectedCity]);
  const selectedSize = MOVE_SIZES[moveSize];

  const estimatedLow = Math.round((selectedRoute.base + selectedRoute.perBR * selectedSize.bedrooms) * selectedSize.multiplier * 0.9 / 100) * 100;
  const estimatedHigh = Math.round((selectedRoute.base + selectedRoute.perBR * selectedSize.bedrooms) * selectedSize.multiplier * 1.15 / 100) * 100;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving - Long Distance Movers Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/long-distance-movers-ottawa",
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
      "reviewCount": "350"
    },
    "areaServed": ROUTES.map(r => ({ "@type": "Place", "name": `${r.city}, ${r.province}` })),
    "description": "Ottawa's top-rated long distance moving company. Prestige Moving provides professional cross-Canada moving services from Ottawa to Toronto, Montreal, Vancouver, Calgary, and every province. Binding estimates, dedicated trucks, full insurance coverage.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Long Distance Moving Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ottawa to Toronto Moving" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ottawa to Montreal Moving" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ottawa to Vancouver Moving" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ottawa to Calgary Moving" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ottawa to Halifax Moving" } },
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Long Distance Movers Ottawa | Moving Across Canada Since 2014 | Prestige Moving</title>
        <meta name="description" content="Moving Ottawa to anywhere in Canada since 2014. Fully insured · Licensed interprovincial carrier · 350+ five-star reviews. Ottawa to Toronto from $1,200 · Montreal from $900 · Vancouver from $3,000. Binding written estimates — no surprise charges. Call (613) 600-4000." />
        <meta name="keywords" content="long distance movers ottawa, cross canada moving, ottawa to toronto movers, ottawa to vancouver movers, ottawa to calgary movers, interprovincial movers ottawa, long distance moving company ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/long-distance-movers-ottawa" />
        <meta property="og:title" content="Long Distance Movers Ottawa | Moving Across Canada Since 2014 | Prestige Moving" />
        <meta property="og:description" content="Fully insured · Licensed interprovincial carrier · 350+ five-star reviews. Ottawa to Toronto from $1,200 · Montreal from $900 · Vancouver from $3,000. Binding estimates, no hidden fees." />
        <meta property="og:url" content="https://prestigemoving.ca/long-distance-movers-ottawa" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />

      {/* Hero Section */}
      <section className="relative bg-[#1A2332] pt-16 pb-24 overflow-hidden" data-testid="hero-long-distance">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5">
                  <Route className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Long Distance Moving Specialists</span>
                </div>
                <span className="text-white/30 text-xs">Updated March 2026</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Long Distance<br />
                <span className="text-primary">Movers Ottawa</span><br />
                to Anywhere in Canada
              </h1>

              <p className="text-xl text-white/75 mb-8 leading-relaxed">
                From Ottawa to Toronto, Vancouver, Calgary, Halifax — and every city in between. As the <Link href="/" className="text-[#C5A572] hover:underline">Ottawa movers</Link> with 350+ five-star reviews, Prestige Moving is the city's most trusted <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">long distance movers in ottawa</a> — dedicated trucks, binding estimates, and a 5-star record across 10,000+ moves.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Shield, text: "Binding written estimates" },
                  { icon: TruckIcon, text: "Dedicated trucks — no shared loads" },
                  { icon: CheckCircle2, text: "WSIB certified & fully insured" },
                  { icon: Star, text: "350+ five-star reviews" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <item.icon className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-white/80 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" className="font-bold shadow-lg shadow-primary/30 w-full sm:w-auto" data-testid="button-hero-quote">
                    Get a Free Long Distance Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:(613) 600-4000">
                  <Button size="lg" variant="outline" className="border-white/30 text-white font-bold w-full sm:w-auto" data-testid="button-hero-call">
                    <Phone className="mr-2 h-5 w-5" />
                    (613) 600-4000
                  </Button>
                </a>
              </div>
            </div>

            {/* Stats Panel */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: TruckIcon, stat: "10,000+", label: "Long Distance Moves Completed" },
                { icon: Globe, stat: "10", label: "Provinces Served Coast to Coast" },
                { icon: Star, stat: "5.0 ★", label: "Google Rating — 350+ Reviews" },
                { icon: Shield, stat: "100%", label: "Binding Estimates — No Surprises" },
                { icon: Clock, stat: "15+", label: "Years Moving Canadians" },
                { icon: Award, stat: "BBB A+", label: "Accredited Business Rating" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-primary/40 transition-all" data-testid={`hero-stat-${i}`}>
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-black text-white mb-1">{item.stat}</div>
                  <div className="text-xs text-white/55 leading-snug">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Route Cost Calculator */}
      <section className="py-20 bg-gray-50" data-testid="section-calculator">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
              <DollarSign className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Moving Cost Estimator</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A2332] mb-3">
              How Much Does a Long Distance Move Cost?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select your destination and home size below for an instant rough estimate. For a binding written quote, call us or fill out the form.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Destination */}
              <div>
                <label className="block text-sm font-bold text-[#1A2332] mb-2">Moving From</label>
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-semibold text-[#1A2332]">Ottawa, Ontario</span>
                  <Badge className="ml-auto bg-primary/15 text-primary border-0 text-xs">Fixed</Badge>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1A2332] mb-2">Moving To</label>
                <div className="relative">
                  <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary pointer-events-none" />
                  <select
                    value={selectedCity}
                    onChange={e => setSelectedCity(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-[#1A2332] font-medium appearance-none focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    data-testid="select-destination"
                  >
                    {ROUTES.sort((a, b) => a.distance - b.distance).map(r => (
                      <option key={r.city} value={r.city}>{r.city}, {r.province} ({r.distance.toLocaleString()} km)</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Move Size Slider */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-[#1A2332] mb-4">
                Home Size: <span className="text-primary">{selectedSize.label}</span>
              </label>
              <input
                type="range"
                min={0}
                max={MOVE_SIZES.length - 1}
                value={moveSize}
                onChange={e => setMoveSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#C5A572]"
                data-testid="slider-move-size"
              />
              <div className="flex justify-between mt-2">
                {MOVE_SIZES.map((s, i) => (
                  <span key={i} className={`text-xs ${i === moveSize ? 'text-primary font-bold' : 'text-gray-400'} hidden sm:block`}>
                    {s.bedrooms === 0 ? 'Studio' : `${s.bedrooms}BR`}
                  </span>
                ))}
              </div>
            </div>

            {/* Result */}
            <div className="bg-gradient-to-br from-[#1A2332] to-[#2a3a52] rounded-2xl p-6 md:p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Ruler className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-black text-white">{selectedRoute.distance.toLocaleString()} km</div>
                  <div className="text-xs text-white/55">Distance</div>
                </div>
                <div className="text-center">
                  <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-black text-white">{selectedRoute.hours}</div>
                  <div className="text-xs text-white/55">Drive Time</div>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-black text-white">{selectedSize.bedrooms <= 1 ? "2" : selectedSize.bedrooms <= 3 ? "3" : "4"}</div>
                  <div className="text-xs text-white/55">Movers</div>
                </div>
                <div className="text-center">
                  <DollarSign className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-black text-primary">${estimatedLow.toLocaleString()}–${estimatedHigh.toLocaleString()}</div>
                  <div className="text-xs text-white/55">Estimated Range</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-white/60 text-xs flex items-center gap-1.5">
                  <Info className="h-3.5 w-3.5 shrink-0" />
                  Estimates include truck, movers & fuel. Packing, storage & stairs may vary. Get a free binding quote for exact pricing.
                </p>
                <Link href="/book">
                  <Button size="sm" className="font-bold shrink-0 w-full sm:w-auto" data-testid="button-calc-quote">
                    Get Exact Quote
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes Grid */}
      <section className="py-20 bg-white" data-testid="section-routes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Popular Routes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A2332] mb-3">
              Ottawa Long Distance Moving Routes
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We move Canadians from Ottawa to every major city. Click any route to learn more.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ROUTES.filter(r => CITIES_POPULAR.includes(r.city)).map((route) => (
              <div
                key={route.city}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => { setSelectedCity(route.city); document.getElementById('section-calculator')?.scrollIntoView({ behavior: 'smooth' }); }}
                data-testid={`route-card-${route.city.toLowerCase()}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">Ottawa → {route.city}</span>
                    </div>
                    <h3 className="text-xl font-black text-[#1A2332]">{route.city}, {route.province}</h3>
                  </div>
                  <Badge className="bg-primary/15 text-primary border-0 text-xs">{route.province}</Badge>
                </div>

                <p className="text-gray-500 text-sm mb-4">{route.desc}</p>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center bg-gray-50 rounded-xl p-3">
                    <div className="text-sm font-bold text-[#1A2332]">{route.distance.toLocaleString()} km</div>
                    <div className="text-xs text-gray-400">Distance</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-xl p-3">
                    <div className="text-sm font-bold text-[#1A2332]">{route.hours}</div>
                    <div className="text-xs text-gray-400">Drive Time</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-xl p-3">
                    <div className="text-sm font-bold text-primary">${(route.base).toLocaleString()}+</div>
                    <div className="text-xs text-gray-400">Starting From</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                  Calculate my move <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>

          {/* All Destinations Table */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#1A2332] mb-6 text-center">All Ottawa Long Distance Destinations</h3>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200 px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide">
                <span>City</span>
                <span>Distance</span>
                <span>Drive Time</span>
                <span>Starting From</span>
              </div>
              {ROUTES.sort((a, b) => a.distance - b.distance).map((route, i) => (
                <div
                  key={route.city}
                  className={`grid grid-cols-4 px-6 py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 cursor-pointer transition-colors ${i % 2 === 0 ? '' : 'bg-gray-50/30'}`}
                  onClick={() => { setSelectedCity(route.city); document.getElementById('section-calculator')?.scrollIntoView({ behavior: 'smooth' }); }}
                  data-testid={`route-row-${route.city.toLowerCase()}`}
                >
                  <div>
                    <span className="font-semibold text-[#1A2332]">{route.city}</span>
                    <span className="text-gray-400 text-sm ml-1.5">{route.province}</span>
                  </div>
                  <span className="text-gray-600 text-sm">{route.distance.toLocaleString()} km</span>
                  <span className="text-gray-600 text-sm">{route.hours}</span>
                  <span className="text-primary font-semibold text-sm">${route.base.toLocaleString()}+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Prestige for Long Distance */}
      <section className="py-20 bg-gray-50" data-testid="section-why">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">The Prestige Difference</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A2332] mb-3">
              Why Ottawa Chooses Prestige for Long Distance Moves
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We're not a broker or an aggregator — we own our trucks and employ our movers directly, giving you full control and accountability on every move.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TruckIcon,
                title: "We Own Our Fleet",
                desc: "Your belongings travel on our trucks, operated by our employees. No subcontractors, no handoffs, no surprises. Direct accountability from pickup to delivery."
              },
              {
                icon: FileText,
                title: "Binding Written Estimates",
                desc: "The price in your estimate is the price you pay. We never add charges after loading your truck — a practice common with brokers and unscrupulous movers."
              },
              {
                icon: Users,
                title: "Dedicated Move Coordinator",
                desc: "You get one point of contact throughout your entire move. Your coordinator manages scheduling, transit updates, and delivery logistics so you don't have to chase anyone down."
              },
              {
                icon: Shield,
                title: "Full Valuation Coverage",
                desc: "Every long distance move includes comprehensive coverage for your belongings. Additional full-replacement insurance is available for high-value items."
              },
              {
                icon: Package,
                title: "Professional Packing Available",
                desc: "Our trained packers use double-walled boxes, bubble wrap, and custom crating. Every box is labeled by room — so unpacking at your new home is effortless."
              },
              {
                icon: Zap,
                title: "Air-Ride Suspension Trucks",
                desc: "Our long distance fleet is equipped with air-ride suspension that absorbs road vibration over thousands of kilometres — protecting your furniture and fragile items."
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300" data-testid={`why-card-${i}`}>
                <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-[#1A2332] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Process */}
      <section className="py-20 bg-white" data-testid="section-process">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
              <List className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">How It Works</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A2332] mb-3">
              Your Long Distance Move — Step by Step
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto">
              Moving across Canada is a big undertaking. Here's exactly what happens from your first call to the final box placed in your new home.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Free In-Home or Virtual Inventory Survey",
                desc: "We start with a detailed inventory of everything you're moving. This lets us give you an accurate binding estimate — not a guess based on a phone call. We assess special items (pianos, antiques, hot tubs) and discuss your specific needs.",
                icon: List,
              },
              {
                step: "02",
                title: "Binding Written Estimate & Move Date Confirmed",
                desc: "You receive a written estimate with a guaranteed price. We lock in your pickup date and delivery window. For cross-country moves, we provide a transit schedule so you know when to expect your belongings.",
                icon: FileText,
              },
              {
                step: "03",
                title: "Professional Packing (Optional)",
                desc: "If you choose our packing service, our team arrives the day before your move. We wrap every piece of furniture in moving blankets, box your fragile items with care, disassemble beds and shelving units, and label everything by room.",
                icon: Package,
              },
              {
                step: "04",
                title: "Loading Day — Your Crew Arrives On Time",
                desc: "Your dedicated crew arrives as scheduled. We place floor runners and door jamb protectors at your origin home, then carefully load your belongings into the truck. Large items are positioned first, then boxes, then fragile items.",
                icon: TruckIcon,
              },
              {
                step: "05",
                title: "Transit — Your Coordinator Keeps You Updated",
                desc: "Your belongings travel on our dedicated truck. Your move coordinator provides transit updates and confirms your delivery ETA. For cross-country moves, you'll receive check-ins at key points along the route.",
                icon: Navigation,
              },
              {
                step: "06",
                title: "Delivery & Setup at Your New Home",
                desc: "We unload everything into the rooms you specify, reassemble your furniture, and place items exactly where you want them. We remove all packing materials and do a walkthrough with you to make sure everything is perfect.",
                icon: Home,
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group" data-testid={`process-step-${i}`}>
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-primary/15 border-2 border-primary/30 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                    <span className="text-primary font-black text-lg">{item.step}</span>
                  </div>
                  {i < 5 && <div className="w-0.5 h-6 bg-gray-200 mt-2" />}
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 flex-1 mb-0 group-hover:border-primary/40 group-hover:shadow-sm transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-[#1A2332] mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section — Province Deep Dives */}
      <section className="py-20 bg-gray-50" data-testid="section-seo-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A2332] mb-3">
              Long Distance Moving From Ottawa — Province by Province
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Each interprovincial move has unique considerations. Here's what you need to know about moving from Ottawa to the major provinces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                province: "Ottawa → Ontario",
                flag: "🏙️",
                cities: "Toronto, Hamilton, London, Windsor, Kingston, Kitchener",
                content: "Moving within Ontario from Ottawa is our most common long distance route. The Trans-Canada Highway (Hwy 401 corridor) connects Ottawa to Toronto in under 5 hours, making it an efficient one-day move for most home sizes. Ottawa to Toronto moves are especially popular due to Ontario's economic hub status, with many families and professionals relocating for work. All Ontario moves stay within the same province — no border crossing paperwork required.",
                tips: ["One-day moves possible for most home sizes", "No interprovincial paperwork required", "401 corridor is well-serviced by our fleet", "Weekend moves available for minimized work disruption"],
              },
              {
                province: "Ottawa → Quebec",
                flag: "⚜️",
                cities: "Montreal, Quebec City, Gatineau, Sherbrooke, Laval, Trois-Rivières",
                content: "Ottawa to Montreal is our shortest long distance route at just 200 km — many customers are surprised how affordable and fast this move can be. Montreal is also a popular destination for bilingual professionals and families. Moving to Quebec City is a 4–5 hour drive. Quebec has specific moving regulations and Régie du logement rules that affect lease start dates — we're fully familiar with these and can advise during your planning.",
                tips: ["Ottawa–Montreal is our most affordable long distance route", "Moving Day (July 1) is Quebec's busiest — book early", "We navigate Quebec's lease regulations", "Bilingual crews available for Quebec moves"],
              },
              {
                province: "Ottawa → Alberta",
                flag: "🌾",
                cities: "Calgary, Edmonton, Red Deer, Lethbridge, Medicine Hat",
                content: "Alberta is one of Canada's most popular interprovincial destinations thanks to its booming economy and no provincial income tax. Ottawa to Calgary is approximately 3,360 km — a 5–7 day transit time for your belongings. We plan these moves carefully with intermediate stops accounted for. Many Ottawa families move to Calgary or Edmonton for oil & gas, tech, or real estate opportunities. Alberta moves require careful climate consideration in winter months.",
                tips: ["5–7 business day transit time", "Winter moves require special packing protocols", "Alberta's no-income-tax is a major draw", "Book 8–10 weeks ahead for summer moves"],
              },
              {
                province: "Ottawa → British Columbia",
                flag: "🏔️",
                cities: "Vancouver, Victoria, Kelowna, Surrey, Burnaby, Abbotsford",
                content: "Ottawa to Vancouver is Canada's ultimate cross-country move at over 4,500 km. We've completed hundreds of Ottawa–BC moves and have the process dialed in. Your belongings travel on a dedicated truck — we never combine loads on cross-country moves. BC moves require careful planning around the Rocky Mountain passes (weather-dependent in winter) and can include ferry coordination for Victoria and Vancouver Island destinations.",
                tips: ["Dedicated trucks — never shared loads", "Ferry coordination for Vancouver Island", "Mountain pass weather planning in winter", "Allow 7–10 business days for transit"],
              },
              {
                province: "Ottawa → Atlantic Canada",
                flag: "🌊",
                cities: "Halifax, Moncton, Fredericton, Saint John, Charlottetown, St. John's",
                content: "Atlantic Canada has become increasingly popular for Ottawa families seeking more affordable real estate and a relaxed lifestyle. Ottawa to Halifax is approximately 1,700 km — a 2–3 day transit. PEI moves include ferry coordination from Cape Tormentine or Wood Islands. Newfoundland moves require Marine Atlantic ferry booking, which we coordinate as part of your move package. Atlantic Canada moves are available year-round.",
                tips: ["Ferry coordination for PEI and Newfoundland", "Halifax growing fast — book early", "Excellent real estate value vs. Ottawa", "2–4 business day transit to most Atlantic cities"],
              },
              {
                province: "Ottawa → Prairie Provinces",
                flag: "🌻",
                cities: "Winnipeg, Regina, Saskatoon, Brandon, Prince Albert",
                content: "Manitoba and Saskatchewan offer affordable living and strong job markets in agriculture, tech, and government sectors. Ottawa to Winnipeg is a 20-hour drive — your belongings typically arrive within 3–4 business days. Prairie moves often happen in late spring and early fall — avoiding the bitter winters and peak summer demand. Winnipeg is one of Canada's fastest-growing cities, driven by strong immigration and economic diversification.",
                tips: ["Avoid January–March for prairie winter moves", "Winnipeg growing rapidly — strong demand", "Flat prairie highways = excellent road conditions", "3–5 business day transit times"],
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-primary/40 hover:shadow-md transition-all duration-300" data-testid={`province-card-${i}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.flag}</span>
                  <div>
                    <h3 className="text-xl font-black text-[#1A2332]">{item.province}</h3>
                    <p className="text-xs text-gray-400">{item.cities}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.content}</p>
                <ul className="space-y-2">
                  {item.tips.map((tip, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-white border-y border-gray-200" data-testid="section-trust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Star, stat: "5.0 ★", label: "Google Rating", sub: "350+ verified reviews" },
              { icon: Shield, stat: "BBB A+", label: "Accredited Business", sub: "Verified since 2010" },
              { icon: TruckIcon, stat: "10,000+", label: "Long Distance Moves", sub: "Across Canada" },
              { icon: CheckCircle2, stat: "100%", label: "Binding Estimates", sub: "No surprise charges" },
            ].map((item, i) => (
              <div key={i} className="group" data-testid={`trust-stat-${i}`}>
                <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-black text-[#1A2332]">{item.stat}</div>
                <div className="text-sm font-semibold text-[#1A2332]">{item.label}</div>
                <div className="text-xs text-gray-400">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-4 py-1.5 mb-4">
              <Info className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A2332] mb-3">
              Long Distance Moving FAQs
            </h2>
            <p className="text-gray-500">
              Everything you need to know before booking your cross-Canada move from Ottawa.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
                data-testid={`faq-item-${i}`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className="font-semibold text-[#1A2332] pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gray-100 mb-4" />
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SeoKeywordsSection currentPage="/long-distance-movers-ottawa" />

      {/* CTA Section */}
      <section className="py-20 bg-[#1A2332]" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Start Your Cross-Canada Move</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Ready to Move?<br /><span className="text-primary">Get Your Free Quote Today.</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Talk to a long distance moving expert at Prestige Moving. We'll inventory your home, explain every cost upfront, and give you a binding estimate — no surprises on delivery day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="font-bold text-lg px-10 shadow-lg shadow-primary/30 w-full sm:w-auto" data-testid="button-cta-quote">
                Get Free Long Distance Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:(613) 600-4000">
              <Button size="lg" variant="outline" className="border-white/30 text-white font-bold text-lg px-10 w-full sm:w-auto" data-testid="button-cta-call">
                <Phone className="mr-2 h-5 w-5" />
                (613) 600-4000
              </Button>
            </a>
          </div>
          <p className="text-white/40 text-sm mt-6">No obligation · Binding written estimate · Same-day response during business hours</p>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
