import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, Star, MapPin, ArrowRight, ChevronDown, Award, Clock, Package,
  Home, Building2, Shield, CheckCircle2, TruckIcon, Users, Banknote,
  BadgeCheck, ChevronRight, Navigation, Globe, Headset, Heart, Lock
} from "lucide-react";
import fleetImg from "@assets/prestige-fleet_1771975522124.webp";
import fiveTrucksImg from "@assets/5_trucks_1770166962675.webp";
import nightTruckImg from "@assets/pic5_1772763993370.webp";

export interface SubArea {
  name: string;
  detail: string;
  streets?: string;
}

export interface MovingChallenge {
  icon: "clock" | "truck" | "map" | "building" | "home" | "shield";
  title: string;
  desc: string;
}

export interface NeighbourhoodPageData {
  name: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  heroTagline: string;
  population: string;
  dwellingType: string;
  character: string;
  avgHomeSize: string;
  distanceFromCore: string;
  subAreas: SubArea[];
  aboutParagraphs: string[];
  challenges: MovingChallenge[];
  prestigeReasons: Array<{ title: string; desc: string }>;
  movingTipsParagraphs: string[];
  priceRange: string;
  priceNote: string;
  faqs: Array<{ q: string; a: string }>;
  relatedAreas: Array<{ name: string; slug: string }>;
  schemaAreaServed: string[];
}

const ICON_MAP: Record<MovingChallenge["icon"], typeof Clock> = {
  clock: Clock, truck: TruckIcon, map: MapPin, building: Building2, home: Home, shield: Shield
};

const TOC_ITEMS = (slug: string, name: string) => [
  { id: "about-neighbourhood",   title: `About ${name}` },
  { id: "why-prestige",          title: "Why Choose Prestige" },
  { id: "sub-areas",             title: "Sub-Areas We Cover" },
  { id: "moving-challenges",     title: "Moving Tips & Challenges" },
  { id: "our-services",          title: "Residential Services" },
  { id: "pricing",               title: "Transparent Pricing" },
  { id: "faq",                   title: "FAQ" },
];

export function ResidentialMoversTemplate({ data }: { data: NeighbourhoodPageData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeArea, setActiveArea] = useState<number | null>(null);
  const tocItems = TOC_ITEMS(data.slug, data.name);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": `Prestige Moving — Residential Movers ${data.name}`,
    "image": "https://prestigemoving.ca/og-image.png",
    "url": `https://prestigemoving.ca/residential-movers-${data.slug}`,
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
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" },
    "areaServed": data.schemaAreaServed.map(n => ({ "@type": "Place", "name": n })),
    "description": data.seoDescription
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{data.seoTitle}</title>
        <meta name="description" content={data.seoDescription} />
        <meta name="keywords" content={data.keywords} />
        <link rel="canonical" href={`https://prestigemoving.ca/residential-movers-${data.slug}`} />
        <meta property="og:title" content={data.seoTitle} />
        <meta property="og:description" content={data.seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://prestigemoving.ca/residential-movers-${data.slug}`} />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />
      <div className="min-h-screen bg-white">

        {/* ─── HERO ─── */}
        <section className="relative h-[520px] flex items-end pb-16">
          <img src={fleetImg} alt={`Residential movers in ${data.name} Ottawa — Prestige Moving fleet`} className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1620]/95 via-[#1A2332]/82 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <MapPin className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">{data.name}, Ottawa · Residential Moving Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 max-w-3xl leading-tight">
              Residential Movers in {data.name}
            </h1>
            <p className="text-lg text-white/70 max-w-xl mb-2">{data.heroTagline}</p>
            <p className="text-white/55 text-sm mb-8 flex items-center gap-3 flex-wrap">
              <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-[#C5A572] fill-[#C5A572]" /> 5.0 stars · 400+ reviews</span>
              <span className="flex items-center gap-1"><BadgeCheck className="h-3.5 w-3.5 text-[#C5A572]" /> WSIB Certified</span>
              <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-[#C5A572]" /> Fully Insured</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book">
                <Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">
                  Free Quote for {data.name} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:6136004000">
                <Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10">
                  <Phone className="h-4 w-4 mr-2" /> (613) 600-4000
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ─── STATS BAR ─── */}
        <section className="bg-[#1A2332] py-6">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "5.0 ★", label: "Google Rating" },
              { value: "400+", label: "Five-Star Reviews" },
              { value: data.population, label: `${data.name} Residents Served` },
              { value: "10,000+", label: "Ottawa Moves Completed" },
            ].map(({ value, label }, i) => (
              <div key={i}>
                <div className="text-xl md:text-2xl font-bold text-[#C5A572]">{value}</div>
                <div className="text-white/50 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── MAIN CONTENT ─── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="xl:flex gap-12 items-start">
            <TableOfContents items={tocItems} />

            <div className="flex-1 min-w-0 space-y-20">

              {/* ── ABOUT THE NEIGHBOURHOOD ── */}
              <section id="about-neighbourhood" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <MapPin className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Local Expertise</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Residential Moving in {data.name} — What You Need to Know</h2>

                {/* Neighbourhood stat cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    { label: "Population", value: data.population },
                    { label: "Dwelling Type", value: data.dwellingType },
                    { label: "Character", value: data.character },
                    { label: "Avg. Home Size", value: data.avgHomeSize },
                  ].map(({ label, value }, i) => (
                    <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <div className="text-[#1A2332] font-bold text-sm leading-snug">{value}</div>
                      <div className="text-gray-400 text-xs mt-1">{label}</div>
                    </div>
                  ))}
                </div>

                {data.aboutParagraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
                ))}
              </section>

              {/* ── WHY PRESTIGE ── */}
              <section id="why-prestige" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Award className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">The Prestige Difference</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Why {data.name} Residents Choose Prestige Moving</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  With hundreds of moves completed in {data.name}, our crew knows the area — from the street layouts and building quirks to parking rules and the best loading spots. That local knowledge saves time on your moving day and protects your belongings.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {data.prestigeReasons.map(({ title, desc }, i) => (
                    <div key={i} className="flex gap-3 p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1A2332] mb-1 text-sm">{title}</div>
                        <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── FLEET PHOTO ── */}
              <div className="relative rounded-2xl overflow-hidden">
                <img src={fiveTrucksImg} alt={`Prestige Moving trucks serving ${data.name} Ottawa`} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-[#0d1620]/70 flex items-center">
                  <div className="pl-8">
                    <div className="text-white font-bold text-lg mb-1">Serving {data.name} Daily</div>
                    <div className="text-white/70 text-sm">Multiple trucks dispatched across {data.name} every day</div>
                  </div>
                </div>
              </div>

              {/* ── SUB-AREAS ── */}
              <section id="sub-areas" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Home className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Hyper-Local Coverage</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Every Corner of {data.name} — Covered</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {data.name} is made up of several distinct sub-communities, each with its own character, housing stock, and moving considerations. Click any area below to learn what our crew knows about it.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {data.subAreas.map(({ name, detail, streets }, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-gray-200 overflow-hidden cursor-pointer"
                      onClick={() => setActiveArea(activeArea === i ? null : i)}
                    >
                      <div className={`flex items-center justify-between px-4 py-3.5 transition-colors ${activeArea === i ? "bg-[#1A2332] text-white" : "bg-gray-50 hover:bg-gray-100"}`}>
                        <div className="flex items-center gap-2.5">
                          <MapPin className={`h-4 w-4 shrink-0 ${activeArea === i ? "text-[#C5A572]" : "text-[#C5A572]"}`} />
                          <span className={`font-semibold text-sm ${activeArea === i ? "text-white" : "text-[#1A2332]"}`}>{name}</span>
                        </div>
                        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${activeArea === i ? "rotate-180 text-white/60" : "text-gray-400"}`} />
                      </div>
                      {activeArea === i && (
                        <div className="px-4 py-3 bg-white border-t border-gray-100">
                          <p className="text-gray-600 text-sm leading-relaxed mb-1">{detail}</p>
                          {streets && <p className="text-gray-400 text-xs">{streets}</p>}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ── MOVING CHALLENGES ── */}
              <section id="moving-challenges" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <TruckIcon className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Local Moving Knowledge</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Moving Challenges in {data.name} — and How We Handle Them</h2>
                {data.movingTipsParagraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
                ))}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {data.challenges.map(({ icon, title, desc }, i) => {
                    const Icon = ICON_MAP[icon];
                    return (
                      <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="w-9 h-9 rounded-lg bg-[#C5A572]/10 flex items-center justify-center mb-3">
                          <Icon className="h-4.5 w-4.5 text-[#C5A572]" />
                        </div>
                        <div className="font-bold text-[#1A2332] text-sm mb-1.5">{title}</div>
                        <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── RESIDENTIAL SERVICES ── */}
              <section id="our-services" className="scroll-mt-24 bg-gray-50/70 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Package className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Full-Service Residential Moving</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Residential Moving Services in {data.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you're moving a studio apartment in {data.name} or a 5-bedroom executive home, Prestige provides the same elite standard of care. Every service below is performed by our own trained employees — never subcontractors.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Home, title: "Local Residential Moves", desc: `Within ${data.name} or to anywhere in Ottawa — same-day moves available.` },
                    { icon: Package, title: "Full Packing Service", desc: "We bring all materials and pack your entire home safely. Unpacking available too." },
                    { icon: TruckIcon, title: "Furniture Disassembly & Reassembly", desc: "Beds, wardrobes, desks — fully disassembled, moved, and rebuilt at destination." },
                    { icon: Shield, title: "Specialty Item Handling", desc: "Pianos, antiques, artwork, pool tables handled by specially trained movers." },
                    { icon: Clock, title: "Flexible Scheduling", desc: "Weekday, weekend, and holiday moves available. Short-notice bookings welcome." },
                    { icon: Banknote, title: "Transparent Pricing", desc: "Written quote before every move. The price you're quoted is the price you pay." },
                  ].map(({ icon: Icon, title, desc }, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-xl bg-white border border-gray-100">
                      <div className="w-8 h-8 rounded-lg bg-[#C5A572]/10 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-[#C5A572]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#1A2332] text-sm mb-1">{title}</div>
                        <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Link href="/services/residential-moving">
                    <Button className="bg-[#1A2332] text-white font-semibold">
                      View Full Residential Service Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </section>

              {/* ── PRICING ── */}
              <section id="pricing" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Banknote className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Transparent Pricing</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">What Does Residential Moving in {data.name} Cost?</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our pricing is fully transparent — the quote you receive is the price you pay. No fuel surcharges, no elevator fees, no stair add-ons. Here's what to expect for a residential move in {data.name}:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { pkg: "Premium", crew: "2 movers + truck", best: "1–2 bedroom moves" },
                    { pkg: "Deluxe", crew: "3 movers + truck", best: "2–3 bedroom homes" },
                    { pkg: "Diamond", crew: "4 movers + 2 trucks", best: "Large homes & full packs" },
                  ].map(({ pkg, crew, best }, i) => (
                    <div key={i} className={`p-5 rounded-xl border-2 ${i === 1 ? "border-[#C5A572] bg-[#C5A572]/5" : "border-gray-200 bg-white"}`}>
                      {i === 1 && <div className="text-[#C5A572] text-xs font-bold uppercase tracking-wide mb-2">Most Popular</div>}
                      <div className="font-bold text-[#1A2332] text-lg mb-1">{pkg}</div>
                      <a href="tel:6136004000" className="relative inline-flex items-center gap-1.5 bg-gray-100 rounded-lg px-3 py-1.5 mb-2 overflow-hidden cursor-pointer">
                        <span className="text-xl font-bold text-[#C5A572] blur-sm select-none pointer-events-none">$000/hr</span>
                        <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-[1px]">
                          <Lock className="h-3.5 w-3.5 text-[#C5A572] mr-1" />
                          <span className="text-xs font-bold text-[#1A2332]">Call for Rate</span>
                        </div>
                      </a>
                      <div className="text-gray-600 text-xs mb-1">{crew}</div>
                      <div className="text-gray-400 text-xs">{best}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#1A2332] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-white font-bold mb-0.5">Custom pricing for your {data.name} move</div>
                    <div className="text-white/50 text-sm">Written quote before every move · 3-hour minimum · No hidden fees</div>
                  </div>
                  <a href="tel:6136004000">
                    <Button className="bg-[#C5A572] text-[#1A2332] font-bold shrink-0">
                      <Phone className="h-4 w-4 mr-2" /> Call Now
                    </Button>
                  </a>
                </div>
              </section>

              {/* ── NIGHT TRUCK CTA ── */}
              <div className="relative rounded-2xl overflow-hidden">
                <img src={nightTruckImg} alt="Prestige Moving residential movers Ottawa" className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-[#0d1620]/72 flex items-center">
                  <div className="px-8 max-w-md">
                    <div className="text-white font-bold text-xl mb-2">Ready to Move in {data.name}?</div>
                    <div className="text-white/60 text-sm mb-4">Book in under 2 minutes. We'll confirm your date and send a written quote.</div>
                    <Link href="/book">
                      <Button className="bg-[#C5A572] text-[#1A2332] font-bold">
                        Book Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* ── FAQ ── */}
              <section id="faq" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Frequently Asked Questions</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-8">FAQ — Residential Movers in {data.name}</h2>
                <div className="space-y-3">
                  {data.faqs.map(({ q, a }, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between gap-4 p-5 text-left hover-elevate"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        data-testid={`button-faq-${i}`}
                      >
                        <span className="font-semibold text-[#1A2332] text-sm">{q}</span>
                        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{a}</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>

        {/* ─── INTERNAL LINKS ─── */}
        <section className="bg-[#0d1620] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">

              {/* Related neighbourhoods */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <MapPin className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-bold uppercase tracking-widest">Other Ottawa Areas</span>
                </div>
                <div className="space-y-1">
                  {data.relatedAreas.map(({ name, slug }) => (
                    <Link key={slug} href={`/residential-movers-${slug}`}>
                      <div className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/6 group transition-colors cursor-pointer">
                        <span className="text-white/60 text-sm group-hover:text-white transition-colors">Residential Movers in {name}</span>
                        <ChevronRight className="h-4 w-4 text-white/20 group-hover:text-[#C5A572] transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Package className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-bold uppercase tracking-widest">Our Services</span>
                </div>
                <div className="space-y-1">
                  {[
                    { label: "Residential Moving", href: "/services/residential-moving" },
                    { label: "Packing Services", href: "/services/packing-services" },
                    { label: "Storage Solutions", href: "/services/storage-solutions" },
                    { label: "Piano Moving", href: "/services/piano-moving" },
                    { label: "Senior Moving", href: "/services/senior-moving" },
                    { label: "Long Distance Moving", href: "/services/long-distance-moving" },
                    { label: "Commercial Moving", href: "/services/commercial-moving" },
                  ].map(({ label, href }) => (
                    <Link key={href} href={href}>
                      <div className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/6 group transition-colors cursor-pointer">
                        <span className="text-white/60 text-sm group-hover:text-white transition-colors">{label}</span>
                        <ChevronRight className="h-4 w-4 text-white/20 group-hover:text-[#C5A572] transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Ottawa-wide links */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Globe className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-bold uppercase tracking-widest">Ottawa Moving</span>
                </div>
                <div className="space-y-1">
                  {[
                    { label: "Best Movers Ottawa", href: "/best-movers-ottawa" },
                    { label: "Ottawa Movers", href: "/ottawa-movers" },
                    { label: "Moving Company Ottawa", href: "/moving-company-ottawa" },
                    { label: "Affordable Movers Ottawa", href: "/affordable-movers-ottawa" },
                    { label: "Movers Near Me Ottawa", href: "/movers-near-me-ottawa" },
                    { label: "Moving Cost Calculator", href: "/calculator" },
                    { label: "Book a Move", href: "/book" },
                  ].map(({ label, href }) => (
                    <Link key={href} href={href}>
                      <div className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/6 group transition-colors cursor-pointer">
                        <span className="text-white/60 text-sm group-hover:text-white transition-colors">{label}</span>
                        <ChevronRight className="h-4 w-4 text-white/20 group-hover:text-[#C5A572] transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="py-16 bg-[#1A2332]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-[#C5A572] fill-[#C5A572]" />)}
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Ready for Your {data.name} Move?</h2>
            <p className="text-white/55 mb-8 max-w-lg mx-auto">
              Join hundreds of {data.name} families who've trusted Prestige Moving. Get a free, no-obligation quote in minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book">
                <Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:6136004000">
                <Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10">
                  <Phone className="h-4 w-4 mr-2" /> (613) 600-4000
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
