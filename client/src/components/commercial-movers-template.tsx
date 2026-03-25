import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, Star, MapPin, ArrowRight, ChevronDown, Award, Clock, Package,
  Building2, Shield, CheckCircle2, TruckIcon, Users, Banknote,
  BadgeCheck, ChevronRight, Globe, Monitor, Lock, FileText, Headset
} from "lucide-react";
import fleetImg from "@assets/prestige-fleet_1771975522124.webp";
import fiveTrucksImg from "@assets/5_trucks_1770166962675.webp";
import nightTruckImg from "@assets/pic5_1772763993370.webp";

export interface CommercialSubArea {
  name: string;
  businessType: string;
  detail: string;
}

export interface CommercialChallenge {
  icon: "clock" | "truck" | "map" | "building" | "monitor" | "shield" | "lock" | "users";
  title: string;
  desc: string;
}

export interface CommercialPageData {
  name: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  heroTagline: string;
  businessCount: string;
  mainIndustries: string;
  character: string;
  officeTypes: string;
  distanceFromCore: string;
  schemaAreaServed: string[];
  subAreas: CommercialSubArea[];
  aboutParagraphs: string[];
  challenges: CommercialChallenge[];
  prestigeReasons: Array<{ title: string; desc: string }>;
  businessTypes: Array<{ type: string; desc: string }>;
  processParagraphs: string[];
  priceRange: string;
  priceNote: string;
  faqs: Array<{ q: string; a: string }>;
  relatedAreas: Array<{ name: string; slug: string }>;
}

const ICON_MAP: Record<CommercialChallenge["icon"], typeof Clock> = {
  clock: Clock, truck: TruckIcon, map: MapPin, building: Building2,
  monitor: Monitor, shield: Shield, lock: Lock, users: Users
};

const TOC_ITEMS = (name: string) => [
  { id: "about-commercial",      title: `${name} Business District` },
  { id: "why-prestige",          title: "Why Prestige for Commercial" },
  { id: "business-types",        title: "Businesses We Serve" },
  { id: "moving-challenges",     title: "Commercial Moving Challenges" },
  { id: "our-process",           title: "Our Moving Process" },
  { id: "pricing",               title: "Commercial Pricing" },
  { id: "faq",                   title: "FAQ" },
];

export function CommercialMoversTemplate({ data }: { data: CommercialPageData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeArea, setActiveArea] = useState<number | null>(null);
  const tocItems = TOC_ITEMS(data.name);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": `Prestige Moving — Commercial Movers ${data.name}`,
    "image": "https://prestigemoving.ca/og-image.png",
    "url": `https://prestigemoving.ca/commercial-movers-${data.slug}`,
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
        <link rel="canonical" href={`https://prestigemoving.ca/commercial-movers-${data.slug}`} />
        <meta property="og:title" content={data.seoTitle} />
        <meta property="og:description" content={data.seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://prestigemoving.ca/commercial-movers-${data.slug}`} />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />
      <div className="min-h-screen bg-white">

        {/* ─── HERO ─── */}
        <section className="relative h-[520px] flex items-end pb-16">
          <img src={fleetImg} alt={`Commercial movers in ${data.name} Ottawa — Prestige Moving`} className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1620]/95 via-[#1A2332]/82 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <Building2 className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">{data.name}, Ottawa · Commercial Moving Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 max-w-3xl leading-tight">
              Commercial Movers in {data.name}
            </h1>
            <p className="text-lg text-white/70 max-w-xl mb-2">{data.heroTagline}</p>
            <p className="text-white/55 text-sm mb-8 flex items-center gap-3 flex-wrap">
              <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-[#C5A572] fill-[#C5A572]" /> 5.0 stars · 400+ reviews</span>
              <span className="flex items-center gap-1"><BadgeCheck className="h-3.5 w-3.5 text-[#C5A572]" /> WSIB Certified</span>
              <span className="flex items-center gap-1"><Lock className="h-3.5 w-3.5 text-[#C5A572]" /> Fully Insured</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-[#C5A572]" /> After-Hours Available</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book">
                <Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">
                  Free Commercial Quote <ArrowRight className="ml-2 h-4 w-4" />
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
              { value: "5.0 ★",            label: "Google Rating" },
              { value: "400+",             label: "Five-Star Reviews" },
              { value: "Zero",             label: "Days of Business Disruption — Our Goal" },
              { value: "After-Hours",      label: "Weekend & Evening Moves Available" },
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

              {/* ── ABOUT ── */}
              <section id="about-commercial" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Building2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Local Business Expertise</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Commercial Moving in {data.name} — Serving the Local Business Community</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {[
                    { label: "Businesses Served", value: data.businessCount },
                    { label: "Main Industries", value: data.mainIndustries },
                    { label: "Character", value: data.character },
                    { label: "Office Types", value: data.officeTypes },
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

                {/* Commercial zones */}
                <div className="grid sm:grid-cols-2 gap-3 mt-6">
                  {data.subAreas.map(({ name, businessType, detail }, i) => (
                    <div key={i} className="rounded-xl border border-gray-200 overflow-hidden cursor-pointer"
                      onClick={() => setActiveArea(activeArea === i ? null : i)}>
                      <div className={`flex items-center justify-between px-4 py-3.5 transition-colors ${activeArea === i ? "bg-[#1A2332] text-white" : "bg-gray-50 hover:bg-gray-100"}`}>
                        <div>
                          <div className={`font-semibold text-sm ${activeArea === i ? "text-white" : "text-[#1A2332]"}`}>{name}</div>
                          <div className={`text-xs mt-0.5 ${activeArea === i ? "text-[#C5A572]" : "text-gray-400"}`}>{businessType}</div>
                        </div>
                        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${activeArea === i ? "rotate-180 text-white/60" : "text-gray-400"}`} />
                      </div>
                      {activeArea === i && (
                        <div className="px-4 py-3 bg-white border-t border-gray-100">
                          <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ── WHY PRESTIGE ── */}
              <section id="why-prestige" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Award className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">The Prestige Difference</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Why {data.name} Businesses Choose Prestige Moving</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Commercial moves are not residential moves scaled up. They require project management, confidentiality, after-hours coordination, and technical handling knowledge that most residential movers simply don't have. Prestige Moving's commercial division is purpose-built for business relocations of every scale.
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
                <img src={fiveTrucksImg} alt={`Prestige Moving commercial trucks serving ${data.name} Ottawa`} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-[#0d1620]/70 flex items-center">
                  <div className="pl-8">
                    <div className="text-white font-bold text-lg mb-1">Commercial Fleet — Serving {data.name} Businesses</div>
                    <div className="text-white/70 text-sm">Multiple commercial trucks available for {data.name} office and business moves</div>
                  </div>
                </div>
              </div>

              {/* ── BUSINESS TYPES ── */}
              <section id="business-types" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <FileText className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Who We Serve</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Types of {data.name} Businesses We Move</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Every type of {data.name} business has unique moving requirements — from the IT infrastructure of a tech firm to the sensitive files of a legal office to the heavy shelving of a retail store. Our commercial team is trained and equipped for every category.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {data.businessTypes.map(({ type, desc }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-9 h-9 rounded-lg bg-[#C5A572]/10 flex items-center justify-center mb-3">
                        <Building2 className="h-4 w-4 text-[#C5A572]" />
                      </div>
                      <div className="font-bold text-[#1A2332] text-sm mb-1.5">{type}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── COMMERCIAL CHALLENGES ── */}
              <section id="moving-challenges" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <TruckIcon className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Commercial Moving Expertise</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Commercial Moving Challenges in {data.name} — and How We Handle Them</h2>
                {data.processParagraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">{p}</p>
                ))}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {data.challenges.map(({ icon, title, desc }, i) => {
                    const Icon = ICON_MAP[icon];
                    return (
                      <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                        <div className="w-9 h-9 rounded-lg bg-[#C5A572]/10 flex items-center justify-center mb-3">
                          <Icon className="h-4 w-4 text-[#C5A572]" />
                        </div>
                        <div className="font-bold text-[#1A2332] text-sm mb-1.5">{title}</div>
                        <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── OUR PROCESS ── */}
              <section id="our-process" className="scroll-mt-24 bg-gray-50/70 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Package className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Our Commercial Process</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">How We Manage Your {data.name} Business Move</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  A successful commercial move requires planning that starts weeks before moving day. Here's the Prestige process for every {data.name} office or business relocation:
                </p>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Site Assessment & Inventory", desc: "We visit your current and new {name} location to assess access, elevator logistics, loading dock availability, and inventory scope. This lets us give you an accurate quote and timeline." },
                    { step: "02", title: "Custom Move Plan", desc: "We build a room-by-room, department-by-department move plan. We coordinate with your IT team for equipment staging, and plan any after-hours or phased move requirements." },
                    { step: "03", title: "Packing & Labelling System", desc: "Every item, box, and piece of furniture is labelled with destination floor and room. This allows our crew to place everything precisely — minimizing your unpacking time." },
                    { step: "04", title: "Move Execution", desc: "Our crew executes the move according to plan. We work around your business hours — nights, weekends, or staged over multiple days — to keep your operations running." },
                    { step: "05", title: "Reconnection & Setup", desc: "Furniture is set up in your new {name} location exactly as planned. We don't leave until everything is in its place and you're satisfied." },
                  ].map(({ step, title, desc }, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-[#1A2332] flex items-center justify-center shrink-0 text-[#C5A572] font-bold text-sm">{step}</div>
                      <div>
                        <div className="font-bold text-[#1A2332] text-sm mb-1">{title}</div>
                        <div className="text-gray-500 text-sm leading-relaxed">{desc.replace("{name}", data.name)}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Link href="/services/commercial-moving">
                    <Button className="bg-[#1A2332] text-white font-semibold">
                      View Full Commercial Moving Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </section>

              {/* ── PRICING ── */}
              <section id="pricing" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Banknote className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Commercial Pricing</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">What Does a Commercial Move in {data.name} Cost?</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Commercial move pricing depends on office size, distance, after-hours requirements, and whether IT equipment packing is included. Every Prestige commercial quote is written, detailed, and fixed — no surprises on invoice day.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { pkg: "Premium", crew: "2 movers + truck", best: "Small offices, 1–10 workstations" },
                    { pkg: "Deluxe", crew: "3 movers + truck", best: "Medium offices, 10–30 workstations" },
                    { pkg: "Diamond", crew: "4 movers + 2 trucks", best: "Large offices, full business relocations" },
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
                    <div className="text-white font-bold mb-0.5">Custom pricing for every {data.name} commercial move</div>
                    <div className="text-white/50 text-sm">Written quote before every move · No hidden fees · 3-hour minimum</div>
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
                <img src={nightTruckImg} alt={`Prestige Moving commercial movers ${data.name} Ottawa`} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-[#0d1620]/72 flex items-center">
                  <div className="px-8 max-w-md">
                    <div className="text-white font-bold text-xl mb-2">Moving Your {data.name} Business?</div>
                    <div className="text-white/60 text-sm mb-4">After-hours, weekend, and phased moves available. Zero disruption to your operations is our goal.</div>
                    <a href="tel:6136004000">
                      <Button className="bg-[#C5A572] text-[#1A2332] font-bold">
                        <Phone className="h-4 w-4 mr-2" /> Call for a Commercial Quote
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* ── FAQ ── */}
              <section id="faq" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Frequently Asked Questions</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-8">FAQ — Commercial Movers in {data.name}</h2>
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
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Building2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-bold uppercase tracking-widest">Other Ottawa Areas</span>
                </div>
                <div className="space-y-1">
                  {data.relatedAreas.map(({ name, slug }) => (
                    <Link key={slug} href={`/commercial-movers-${slug}`}>
                      <div className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/6 group transition-colors cursor-pointer">
                        <span className="text-white/60 text-sm group-hover:text-white transition-colors">Commercial Movers in {name}</span>
                        <ChevronRight className="h-4 w-4 text-white/20 group-hover:text-[#C5A572] transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Package className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-bold uppercase tracking-widest">Our Services</span>
                </div>
                <div className="space-y-1">
                  {[
                    { label: "Commercial Moving", href: "/services/commercial-moving" },
                    { label: "Residential Moving", href: "/services/residential-moving" },
                    { label: "Packing Services", href: "/services/packing-services" },
                    { label: "Storage Solutions", href: "/services/storage-solutions" },
                    { label: "Long Distance Moving", href: "/services/long-distance-moving" },
                    { label: "Furniture Assembly", href: "/furniture-assembly-ottawa" },
                    { label: "Custom Crating", href: "/custom-crating-ottawa" },
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
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Globe className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-bold uppercase tracking-widest">Ottawa Moving</span>
                </div>
                <div className="space-y-1">
                  {[
                    { label: "Commercial Movers Ottawa", href: "/commercial-movers-ottawa" },
                    { label: "Best Movers Ottawa", href: "/best-movers-ottawa" },
                    { label: "Moving Company Ottawa", href: "/moving-company-ottawa" },
                    { label: "Residential Movers Ottawa", href: "/residential-movers-ottawa" },
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
            <h2 className="text-3xl font-bold text-white mb-3">Ready to Move Your {data.name} Business?</h2>
            <p className="text-white/55 mb-8 max-w-lg mx-auto">
              Get a detailed commercial moving quote from Ottawa's most trusted business movers. We'll plan every detail so you don't have to.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">
                  Request Commercial Quote <ArrowRight className="ml-2 h-5 w-5" />
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
