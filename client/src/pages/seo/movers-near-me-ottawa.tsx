import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, TruckIcon, Shield, Clock, Star, ArrowRight, CheckCircle2,
  MapPin, ChevronDown, DollarSign, Users, Home, Package, Zap, Award,
  Navigation, Building2, TreePine, GraduationCap, Briefcase, HeartHandshake
} from "lucide-react";
import heroImg from "@assets/generated_images/movers-near-me-hero.png";
import aerialImg from "@assets/generated_images/ottawa-neighbourhoods-aerial.png";
import trucksFleetImg from "@assets/trucks_1772763928416.png";
import snowTruckImg from "@assets/pics2_1772763996097.webp";
import nightTruckImg from "@assets/pic5_1772763993370.webp";

const REGIONS = [
  {
    id: "barrhaven",
    name: "Barrhaven",
    icon: Home,
    tagline: "Southwest Ottawa's Largest Family Community",
    description: "Barrhaven is one of Ottawa's fastest-growing suburbs, home to tens of thousands of families across Chapman Mills, Longfields, and Stonebridge. Our Barrhaven moving crews operate daily in this area and know every street, subdivision, and access point. Typical local moves within Barrhaven take 3–5 hours; moves into downtown Ottawa average 4–6 hours.",
    facts: ["Most moved-to Ottawa suburb", "Avg local move: 3–5 hrs", "Tight cul-de-sacs — we know them all"],
    link: "/movers-in-barrhaven",
    colour: "from-blue-600 to-blue-800",
  },
  {
    id: "kanata",
    name: "Kanata & Stittsville",
    icon: Briefcase,
    tagline: "Ottawa's Tech Hub in the West End",
    description: "Home to Kanata North Technology Park — Canada's largest tech cluster — and the growing community of Stittsville, this area sees constant moving activity from tech professionals, young families, and new construction communities. We handle high-rise elevator moves at Kanata's condo towers and suburban estate moves in Stittsville's newer subdivisions.",
    facts: ["Canada's largest tech cluster", "New-build expertise", "Avg local move: 3–6 hrs"],
    link: "/movers-in-kanata",
    colour: "from-purple-600 to-purple-800",
  },
  {
    id: "orleans",
    name: "Orléans",
    icon: TreePine,
    tagline: "Ottawa's Bilingual East-End Community",
    description: "Orléans is a vibrant, predominantly francophone suburb east of downtown Ottawa. With major growth in Chaperal, Queenswood Heights, and Chapel Hill, our Orléans moving crews complete dozens of moves monthly in this area. Whether you're moving to a new build on Mer Bleue Road or an established home near Place d'Orléans, we have the local expertise.",
    facts: ["Bilingual community served", "Avg local move: 3–5 hrs", "Newest subdivisions covered"],
    link: "/movers-in-orleans",
    colour: "from-green-600 to-green-800",
  },
  {
    id: "nepean",
    name: "Nepean",
    icon: Users,
    tagline: "Established South-West Ottawa Neighbourhood",
    description: "Nepean encompasses established communities like Bells Corners, Centrepointe, Merivale, and College Square. A mix of detached homes, townhouses, and condominiums, Nepean presents a varied moving landscape. Our crews are experienced with both large estate moves and compact condo relocations across all of Nepean's diverse communities.",
    facts: ["Diverse housing mix", "Avg local move: 3–5 hrs", "Serving since 2010"],
    link: "/movers-in-nepean",
    colour: "from-amber-600 to-amber-800",
  },
  {
    id: "westboro",
    name: "Westboro & Hintonburg",
    icon: Building2,
    tagline: "Trendy Urban Villages Near Downtown",
    description: "Westboro and Hintonburg are two of Ottawa's most desirable urban neighbourhoods — known for their independent shops, vibrant restaurant scenes, and tight-knit community feel. These neighbourhoods present specific moving challenges: narrow Victorian-era streets, on-street parking permits, and older homes with steep staircases. Our crews are well-versed in navigating all of it.",
    facts: ["Heritage home specialists", "Parking permit coordination", "Avg local move: 3–4 hrs"],
    link: "/movers-in-westboro",
    colour: "from-rose-600 to-rose-800",
  },
  {
    id: "gloucester",
    name: "Gloucester",
    icon: Navigation,
    tagline: "East Ottawa's Growing Residential Hub",
    description: "Gloucester covers a large swath of east Ottawa including Blackburn Hamlet, Cardinal Heights, and the Hunt Club corridor. With a mix of 1970s–1990s subdivisions and newer developments near the soon-to-expand LRT, Gloucester is an active moving market. Our eastern Ottawa dispatch team handles Gloucester moves on a daily basis.",
    facts: ["LRT proximity expertise", "Avg local move: 3–5 hrs", "East Ottawa specialists"],
    link: "/movers-in-gloucester",
    colour: "from-teal-600 to-teal-800",
  },
  {
    id: "alta-vista",
    name: "Alta Vista & South Keys",
    icon: GraduationCap,
    tagline: "Centrally Located & Family-Friendly",
    description: "Alta Vista sits at the heart of Ottawa — close to hospitals, CHEO, and the General Campus. It's a perennial top choice for medical professionals and families seeking proximity to both downtown and suburban amenities. South Keys adds major retail and condo density. Our crews navigate both the quiet Alta Vista streets and the busy South Keys corridors daily.",
    facts: ["Central Ottawa location", "Medical district move experts", "Avg local move: 2–4 hrs"],
    link: "/movers-in-alta-vista",
    colour: "from-indigo-600 to-indigo-800",
  },
  {
    id: "downtown",
    name: "Downtown / Centretown",
    icon: Building2,
    tagline: "Ottawa's Urban Core & Condo Corridor",
    description: "Ottawa's downtown — from Parliament Hill through Centretown to the Glebe — is dense, walkable, and packed with condos, heritage apartments, and office-to-residential conversions. Moving here requires elevator booking, parking permits, and strict building protocols. Our downtown Ottawa team manages all of this, coordinating with building managers weeks in advance.",
    facts: ["Elevator booking handled", "Parking permit coordination", "Heritage building experts"],
    link: "/ottawa-movers",
    colour: "from-slate-600 to-slate-800",
  },
];

const MOVE_SIZES = [
  { label: "Studio / Bachelor", rooms: "1 room", hrs: "2–3 hrs", price: "$310–$470", movers: "2 movers" },
  { label: "1-Bedroom", rooms: "3–4 rooms", hrs: "3–4 hrs", price: "$465–$780", movers: "2 movers" },
  { label: "2-Bedroom", rooms: "5–7 rooms", hrs: "4–6 hrs", price: "$620–$1,170", movers: "2–3 movers" },
  { label: "3-Bedroom House", rooms: "8–11 rooms", hrs: "6–9 hrs", price: "$930–$1,755", movers: "3 movers" },
  { label: "4+ Bedroom House", rooms: "12+ rooms", hrs: "8–12+ hrs", price: "$1,240–$2,340+", movers: "3–4 movers" },
];

const FAQS = [
  {
    q: "How do I find the best movers near me in Ottawa?",
    a: "The best approach is to verify licensing and insurance first — any Ottawa moving company should be WSIB-registered and carry liability insurance. Then read Google reviews (look for companies with 4.5+ stars and 100+ reviews). Get at least two written quotes that include all fees. Prestige Moving has a 5.0-star Google rating with 500+ verified reviews and serves all Ottawa neighbourhoods with licensed, insured crews."
  },
  {
    q: "How much does it cost to hire movers near me in Ottawa?",
    a: "Ottawa moving costs are typically quoted hourly at $155–$315/hour depending on crew size, truck, and package. A small 1-bedroom local move usually runs $465–$780 (3–4 hours × $155/hr with 2 movers). A 3-bedroom house typically costs $930–$1,755. These rates include the moving truck, fuel, basic equipment, and labour. Packing services, specialty items, and long-distance moves are priced separately."
  },
  {
    q: "How far in advance should I book movers in Ottawa?",
    a: "For weekday moves, 1–2 weeks notice is typically sufficient. For weekend moves, especially during peak season (May–September), 3–6 weeks advance booking is strongly recommended. Month-end dates (particularly the last 3 days of any month) fill up extremely fast — book 6–8 weeks ahead if you need month-end. Christmas–New Year moves should also be booked well in advance."
  },
  {
    q: "Do Ottawa movers charge for travel time?",
    a: "Most Ottawa moving companies charge a 'travel fee' equal to one hour of the hourly rate to cover the truck's drive from the company's depot to your home and back. At Prestige Moving, our travel fee equals one hour at your booked hourly rate. This is standard practice across Ottawa and is clearly stated in your written quote before booking."
  },
  {
    q: "Are movers near me in Ottawa insured?",
    a: "Reputable Ottawa movers carry two types of insurance: liability insurance (covering accidental damage to your home) and cargo insurance (covering damage to your belongings during the move). Always ask for proof of insurance before booking. Prestige Moving carries full liability and cargo insurance on every local Ottawa move, and our crews are all WSIB-registered."
  },
  {
    q: "Can Ottawa movers help with packing?",
    a: "Yes — professional packing services are available for Ottawa local moves. Our crew can pack your entire home the day before your move, or just handle specialty items, mirrors, artwork, and fragile items. Full packing services add approximately 30–50% to your total move cost but dramatically reduce the risk of breakage and save significant time. Request a packing service quote when booking your move."
  },
  {
    q: "Do Ottawa movers work on weekends and holidays?",
    a: "Yes. Prestige Moving operates Monday through Sunday, 7am–8pm, including most statutory holidays. Weekend and holiday moves may be subject to a small surcharge. Note that weekend moves — particularly Saturdays — book up fastest, so advance notice is especially important if you need a weekend date."
  },
];

export default function MoversNearMeOttawa() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const region = REGIONS.find(r => r.id === activeRegion);

  return (
    <>
      <Helmet>
        <title>Movers Near Me Ottawa | Local Moving Company | Prestige Moving</title>
        <meta name="description" content="Looking for movers near you in Ottawa? Prestige Moving serves all Ottawa neighbourhoods — Barrhaven, Kanata, Orleans, Nepean & more. 5-star rated, licensed & insured. Free quote." />
        <meta name="keywords" content="movers near me Ottawa, local movers Ottawa, Ottawa moving company near me, affordable movers Ottawa, best movers near me Ottawa, Barrhaven movers, Kanata movers, Orleans movers, Nepean movers, moving companies Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/movers-near-me-ottawa" />
        <meta property="og:title" content="Movers Near Me Ottawa | Prestige Moving" />
        <meta property="og:description" content="Find the best movers near you in Ottawa. Prestige Moving serves all Ottawa neighbourhoods. 5.0 stars, 500+ reviews, fully licensed & insured." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/movers-near-me-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "50 Colonnade Rd Unit 200B",
            "addressLocality": "Ottawa",
            "addressRegion": "ON",
            "postalCode": "K2E 7J6",
            "addressCountry": "CA"
          },
          "geo": { "@type": "GeoCoordinates", "latitude": "45.3878", "longitude": "-75.6769" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "500" },
          "openingHours": "Mo-Su 07:00-20:00",
          "areaServed": ["Barrhaven", "Kanata", "Orleans", "Nepean", "Westboro", "Gloucester", "Alta Vista", "Downtown Ottawa", "Stittsville"],
          "priceRange": "$155–$315/hr",
          "description": "Ottawa's highest-rated local moving company. Serving all Ottawa neighbourhoods with professional, licensed, fully insured moving crews."
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQS.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}</script>
      </Helmet>

      <SharedNavigation />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Professional Ottawa movers" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1620]/95 via-[#0d1620]/85 to-[#0d1620]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1620]/60 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Movers Near Me Ottawa</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="h-4 w-4 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Serving All Ottawa Neighbourhoods</span>
            </div>

            <h1
              className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.85), 0 1px 6px rgba(0,0,0,0.7)" }}
            >
              Movers Near You<br />
              <span className="text-[#C5A572]">in Ottawa</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.8)" }}>
              Ottawa's highest-rated moving company — 5.0 stars, 500+ reviews. Professional, licensed, fully insured crews available in Barrhaven, Kanata, Orleans, Nepean, Westboro, and every Ottawa neighbourhood. Same-week availability.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/book">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8955f] text-[#1A2332] font-bold px-8 text-base">
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:6136004000">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 text-base">
                  <Phone className="mr-2 h-5 w-5" /> (613) 600-4000
                </Button>
              </a>
            </div>

            {/* Quick trust bar */}
            <div className="flex flex-wrap gap-5">
              {[
                { icon: Star, text: "5.0 Google Rating" },
                { icon: Shield, text: "Fully Licensed & Insured" },
                { icon: Clock, text: "Same-Week Availability" },
                { icon: Users, text: "500+ Happy Customers" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/80 text-sm">
                  <Icon className="h-4 w-4 text-[#C5A572]" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <div className="bg-[#C5A572] py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "500+", label: "5-Star Reviews" },
              { val: "15+", label: "Ottawa Neighbourhoods" },
              { val: "$155/hr", label: "Starting Rate" },
              { val: "7 Days", label: "Mon–Sun Service" },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-[#1A2332]">{stat.val}</div>
                <div className="text-[#1A2332]/70 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">

        {/* ─── INTRO CONTENT ─── */}
        <section>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
                The Best Movers Near You<br />
                <span className="text-[#C5A572]">Across All of Ottawa</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  When you search "movers near me" in Ottawa, you deserve more than just a list of phone numbers. You need a moving company that <strong className="text-gray-900">knows your neighbourhood</strong>, understands the access challenges of your specific street, and has a proven track record across the city.
                </p>
                <p>
                  Prestige Moving has been Ottawa's trusted local moving company for over a decade. We operate crews across all major Ottawa neighbourhoods — from <Link href="/movers-in-barrhaven" className="text-[#C5A572] font-semibold hover:underline">Barrhaven</Link> in the southwest to <Link href="/movers-in-orleans" className="text-[#C5A572] font-semibold hover:underline">Orléans</Link> in the east, from <Link href="/movers-in-kanata" className="text-[#C5A572] font-semibold hover:underline">Kanata</Link>'s tech-park towers to the heritage streetscapes of Westboro. No matter where you are in Ottawa, we have a local team ready to help.
                </p>
                <p>
                  We hold a <a href="https://www.ontario.ca/page/consumer-protection-ontario" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] font-semibold hover:underline">valid Ontario CVOR licence</a>, carry full liability and cargo insurance, and our crews are all WSIB-registered — so you're protected at every step. Our <Link href="/how-much-does-moving-cost-ottawa" className="text-[#C5A572] font-semibold hover:underline">transparent Ottawa moving pricing</Link> starts at $155/hour with zero hidden fees.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "WSIB Certified Crews",
                  "CVOR Licensed Trucks",
                  "Full Liability Insurance",
                  "Written Quotes — No Surprises",
                ].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src={trucksFleetImg} alt="Prestige Moving fleet of trucks in Ottawa" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332]/75 to-transparent flex items-end p-5">
                  <div>
                    <div className="text-white font-bold">Our Ottawa Fleet</div>
                    <div className="text-white/65 text-sm">Multiple trucks dispatched daily across all neighbourhoods</div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src={aerialImg} alt="Ottawa neighbourhoods aerial view" className="w-full h-44 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2332]/70 to-transparent flex items-end p-5">
                  <div>
                    <div className="text-white font-bold text-sm">Ottawa, Ontario</div>
                    <div className="text-white/65 text-xs">Every neighbourhood covered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── INTERACTIVE REGIONS ─── */}
        <section>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-4">
              <Navigation className="h-4 w-4 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold uppercase tracking-wider">Interactive Neighbourhood Guide</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Find Your Ottawa Neighbourhood</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Select your neighbourhood below to see local moving details, typical move times, and area-specific tips from our Ottawa crew.</p>
          </div>

          {/* Region grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {REGIONS.map(r => {
              const Icon = r.icon;
              const isActive = activeRegion === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setActiveRegion(isActive ? null : r.id)}
                  className={`relative group rounded-xl p-5 text-left border-2 transition-all duration-200 ${
                    isActive
                      ? "border-[#C5A572] bg-[#1A2332] shadow-lg scale-[1.02]"
                      : "border-gray-200 bg-white hover:border-[#C5A572]/50 hover:bg-gray-50"
                  }`}
                  data-testid={`button-region-${r.id}`}
                  aria-expanded={isActive}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${r.colour} flex items-center justify-center mb-3`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className={`font-bold text-sm mb-1 ${isActive ? "text-white" : "text-gray-900"}`}>{r.name}</div>
                  <div className={`text-xs leading-snug ${isActive ? "text-white/60" : "text-gray-400"}`}>{r.tagline}</div>
                  <ChevronDown className={`h-4 w-4 absolute top-4 right-4 transition-transform duration-200 ${isActive ? "rotate-180 text-[#C5A572]" : "text-gray-300"}`} />
                </button>
              );
            })}
          </div>

          {/* Expanded region detail */}
          {region && (
            <div className="bg-gradient-to-br from-[#1A2332] to-[#243347] rounded-2xl p-8 text-white animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${region.colour} rounded-lg px-3 py-1.5 mb-4`}>
                    <region.icon className="h-4 w-4 text-white" />
                    <span className="text-white font-semibold text-sm">{region.name}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{region.tagline}</h3>
                  <p className="text-white/70 leading-relaxed mb-6">{region.description}</p>
                  <Link href={region.link}>
                    <Button className="bg-[#C5A572] hover:bg-[#b8955f] text-[#1A2332] font-bold">
                      {region.name} Moving Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="space-y-3">
                  <div className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">Quick Facts</div>
                  {region.facts.map(fact => (
                    <div key={fact} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                      <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />
                      <span className="text-white text-sm">{fact}</span>
                    </div>
                  ))}
                  <Link href="/book">
                    <div className="mt-4 bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-xl px-4 py-3 text-center cursor-pointer hover:bg-[#C5A572]/25 transition-colors">
                      <div className="text-[#C5A572] font-bold text-sm">Get a Quote for {region.name}</div>
                      <div className="text-white/50 text-xs mt-0.5">Free, no-obligation estimate</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {!activeRegion && (
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center text-gray-400 text-sm">
              Select a neighbourhood above to see area-specific moving details
            </div>
          )}
        </section>

        {/* ─── COST ESTIMATOR ─── */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
                <DollarSign className="h-4 w-4 text-[#C5A572]" />
                <span className="text-[#C5A572] text-sm font-semibold uppercase tracking-wider">Instant Price Estimator</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">How Much Will My<br />Ottawa Move Cost?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ottawa local moves are priced hourly. Select your home size below for an instant estimate — or see our full <Link href="/how-much-does-moving-cost-ottawa" className="text-[#C5A572] font-semibold hover:underline">Ottawa moving cost guide</Link> for a detailed breakdown including packing, specialty items, and long-distance rates.
              </p>
              <p className="text-gray-600 leading-relaxed">
                According to the <a href="https://www.canada.ca/en/financial-consumer-agency.html" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] font-semibold hover:underline">Financial Consumer Agency of Canada</a>, moving is one of the largest expenses Canadian households face. Getting a written quote upfront protects you from unexpected charges.
              </p>
            </div>

            <div>
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-[#1A2332] px-6 py-4">
                  <h3 className="text-white font-bold">Select Your Home Size</h3>
                  <p className="text-white/60 text-sm">Click to see estimated cost & timing</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {MOVE_SIZES.map((size, i) => {
                    const isSelected = selectedSize === i;
                    return (
                      <button
                        key={i}
                        onClick={() => setSelectedSize(isSelected ? null : i)}
                        className={`w-full text-left px-6 py-4 flex items-center justify-between transition-colors ${
                          isSelected ? "bg-[#C5A572]/10" : "hover:bg-gray-50"
                        }`}
                        data-testid={`button-size-${i}`}
                        aria-expanded={isSelected}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold transition-colors ${
                            isSelected ? "bg-[#C5A572] text-[#1A2332]" : "bg-gray-100 text-gray-600"
                          }`}>
                            {i + 1}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">{size.label}</div>
                            <div className="text-gray-400 text-xs">{size.rooms}</div>
                          </div>
                        </div>
                        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isSelected ? "rotate-180" : ""}`} />
                      </button>
                    );
                  })}
                </div>

                {selectedSize !== null && (
                  <div className="px-6 py-5 bg-gradient-to-br from-[#1A2332] to-[#2a3a52] animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
                      Estimated Cost — {MOVE_SIZES[selectedSize].label}
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {[
                        { label: "Duration", val: MOVE_SIZES[selectedSize].hrs },
                        { label: "Crew", val: MOVE_SIZES[selectedSize].movers },
                        { label: "Estimate", val: MOVE_SIZES[selectedSize].price },
                      ].map(({ label, val }) => (
                        <div key={label} className="bg-white/10 rounded-xl p-3 text-center">
                          <div className="text-[#C5A572] font-bold text-base">{val}</div>
                          <div className="text-white/50 text-xs">{label}</div>
                        </div>
                      ))}
                    </div>
                    <Link href="/book">
                      <Button className="w-full bg-[#C5A572] hover:bg-[#b8955f] text-[#1A2332] font-bold">
                        Get Exact Quote — Free <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <p className="text-white/30 text-xs text-center mt-3">Estimates based on $155/hr. Actual price confirmed before booking.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Booking your Ottawa move with Prestige is fast and simple — no vague quotes, no last-minute surprises.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", icon: Phone, title: "Get Your Free Quote", desc: "Call us or fill out our online form. We confirm your rate and availability in hours — guaranteed in writing." },
              { step: "02", icon: Package, title: "We Arrive, Fully Equipped", desc: "Our crew shows up on time with the right truck, moving blankets, straps, and protective gear for your home." },
              { step: "03", icon: TruckIcon, title: "We Handle Everything", desc: "Furniture disassembly, wrapping, loading, transport, and unloading. You direct; we do the heavy lifting." },
              { step: "04", icon: HeartHandshake, title: "Settle Into Your New Home", desc: "Furniture placed in designated rooms, beds reassembled, final walkthrough. Pay only what was quoted." },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl font-black text-gray-100 leading-none select-none">{step}</div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[#1A2332] flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[#C5A572]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SNOW TRUCK PHOTO BREAK ─── */}
        <section className="relative rounded-3xl overflow-hidden">
          <img
            src={snowTruckImg}
            alt="Prestige Moving truck delivering in Ottawa winter conditions"
            className="w-full h-80 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1620]/88 via-[#0d1620]/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-10 w-full">
              <div className="max-w-lg">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-4">
                  <Shield className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Year-Round Service</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-3" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}>
                  We Move in All Conditions
                </h2>
                <p className="text-white/80 text-base leading-relaxed mb-5" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>
                  Ottawa winters don't stop us. Our crews are trained for cold-weather moves — from protecting hardwood floors with runners, to managing icy driveways safely. We move year-round with no weather surcharges.
                </p>
                <Link href="/book">
                  <Button className="bg-[#C5A572] hover:bg-[#b8955f] text-[#1A2332] font-bold">
                    Book a Winter Move <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHY PRESTIGE ─── */}
        <section className="bg-gradient-to-br from-[#1A2332] to-[#243347] rounded-3xl p-10 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-6">
                <Award className="h-4 w-4 text-[#C5A572]" />
                <span className="text-[#C5A572] text-sm font-semibold uppercase tracking-wider">Why Ottawa Chooses Prestige</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-5 leading-tight">Ottawa's Highest-Rated<br />Local Movers</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                With 500+ five-star Google reviews and a decade serving Ottawa's communities, Prestige Moving is the local choice for families, professionals, and businesses across the city. Our difference is simple: <strong className="text-white">transparent pricing, professional crews, and accountability</strong> at every step.
              </p>
              <div className="space-y-4">
                {[
                  { title: "No Hidden Fees — Ever", desc: "Your written quote is your final price. We don't add 'fuel surcharges' or 'stair fees' that weren't in your quote." },
                  { title: "Experienced, Vetted Crews", desc: "Every mover is background-checked, WSIB-registered, and professionally trained in furniture handling and protection." },
                  { title: "Your Timeline, Respected", desc: "We arrive within our committed window. We know your time is valuable — no 4-hour arrival ranges." },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#C5A572]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-0.5">{title}</div>
                      <div className="text-white/60 text-sm leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "5.0★", label: "Google Rating", sub: "500+ verified reviews" },
                { val: "$155/hr", label: "Starting Rate", sub: "No hidden fees" },
                { val: "100%", label: "WSIB Registered", sub: "Every crew member" },
                { val: "15+", label: "Ottawa Areas", sub: "We know every street" },
              ].map(({ val, label, sub }) => (
                <div key={label} className="bg-white/10 border border-white/15 rounded-2xl p-5 text-center">
                  <div className="text-3xl font-black text-[#C5A572] mb-1">{val}</div>
                  <div className="text-white font-bold text-sm">{label}</div>
                  <div className="text-white/50 text-xs mt-1">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SERVICES OVERVIEW ─── */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Local Ottawa Moving Services</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Whether you're moving a condo in Centretown or a 4-bedroom home in Barrhaven, we have the right service for your move.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { href: "/services/residential-moving", icon: Home, title: "Residential Moving", desc: "Local home and apartment moves across all Ottawa neighbourhoods. 2-mover and 3-mover packages available." },
              { href: "/services/commercial-moving", icon: Briefcase, title: "Commercial Moving", desc: "Office relocations, retail moves, and business relocations across Ottawa and Gatineau." },
              { href: "/services/packing-services", icon: Package, title: "Packing Services", desc: "Full or partial packing services. We supply all materials and pack your home the day before your move." },
              { href: "/services/long-distance-moving", icon: TruckIcon, title: "Long-Distance Moving", desc: "Moving out of Ottawa? We serve Montreal, Toronto, Vancouver, Calgary, Halifax, and all major destinations." },
              { href: "/services/storage-solutions", icon: Shield, title: "Storage Solutions", desc: "Short and long-term storage at our secure Ottawa facility when there's a gap between your move dates." },
              { href: "/services/piano-moving", icon: Award, title: "Specialty Items", desc: "Pianos, safes, antiques, hot tubs, and oversized items handled by our specialty-trained crew." },
            ].map(({ href, icon: Icon, title, desc }) => (
              <Link key={href} href={href}>
                <div className="group border border-gray-200 rounded-2xl p-6 hover:border-[#C5A572] hover:shadow-md transition-all duration-200 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#1A2332] flex items-center justify-center mb-4 group-hover:bg-[#C5A572] transition-colors">
                    <Icon className="h-6 w-6 text-[#C5A572] group-hover:text-[#1A2332]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <span className="text-[#C5A572] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── LONG DISTANCE PHOTO STRIP ─── */}
        <section className="relative rounded-3xl overflow-hidden">
          <img
            src={nightTruckImg}
            alt="Prestige Moving truck on a long-distance move at night"
            className="w-full h-72 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1620]/92 via-[#0d1620]/75 to-[#0d1620]/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-10 w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-4">
                    <TruckIcon className="h-4 w-4 text-[#C5A572]" />
                    <span className="text-[#C5A572] text-sm font-semibold">Licensed Interprovincial Movers</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-3" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}>
                    Moving Out of Ottawa?
                  </h2>
                  <p className="text-white/75 mb-5 leading-relaxed" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}>
                    We're licensed interprovincial movers serving Montreal, Toronto, Calgary, Halifax, Vancouver and beyond — same professional standard, door-to-door.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "Montreal", href: "/ottawa-to-montreal-movers" },
                      { label: "Toronto", href: "/ottawa-to-toronto-movers" },
                      { label: "Calgary", href: "/ottawa-to-calgary-movers" },
                      { label: "Halifax", href: "/ottawa-to-halifax-movers" },
                      { label: "Vancouver", href: "/ottawa-to-vancouver-movers" },
                    ].map(({ label, href }) => (
                      <Link key={href} href={href}>
                        <span className="inline-flex items-center gap-1 bg-white/10 border border-white/20 hover:bg-[#C5A572]/20 hover:border-[#C5A572]/50 rounded-full px-4 py-1.5 text-sm font-medium text-white transition-colors">
                          → {label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/services/long-distance-moving" className="shrink-0">
                  <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8955f] text-[#1A2332] font-bold px-8 whitespace-nowrap">
                    All Long-Distance Routes <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQS ─── */}
        <section>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-gray-500 text-lg">Everything Ottawa residents ask before booking their local move.</p>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                    aria-expanded={openFaq === i}
                    data-testid={`faq-toggle-${i}`}
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-[#C5A572] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 text-sm">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section id="cta" className="bg-gradient-to-br from-[#1A2332] to-[#2a3a52] rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, #C5A572 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C5A572 0%, transparent 50%)" }} />
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-6">
              <Zap className="h-4 w-4 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Same-Week Availability · Free Quotes</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Move?<br />We're Near You.</h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Get your free, no-obligation Ottawa moving quote in minutes. Transparent pricing, professional crew, zero surprises.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link href="/book">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8955f] text-[#1A2332] font-bold px-10 text-base">
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:6136004000">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10 text-base">
                  <Phone className="mr-2 h-5 w-5" /> (613) 600-4000
                </Button>
              </a>
            </div>
            <p className="text-white/40 text-sm">50 Colonnade Rd Unit 200B, Ottawa, ON K2E 7J6 · Mon–Sun 7am–8pm</p>
          </div>
        </section>

      </div>

      <SharedFooter />
    </>
  );
}
