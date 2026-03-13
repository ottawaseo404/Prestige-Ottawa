import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, Star, MapPin, ArrowRight, ChevronDown, Award, Clock, Package,
  Shield, CheckCircle2, TruckIcon, AlertTriangle, BadgeCheck, ChevronRight,
  Ruler, Weight, Music, Wrench
} from "lucide-react";
import fleetImg from "@assets/prestige-fleet_1771975522124.webp";
import teamImg from "@assets/prestige_moving_1772836136864.jpg";

const TOC_ITEMS = [
  { id: "why-piano-moving-is-different", title: "Why Piano Moving Is Different" },
  { id: "types-of-pianos-we-move",       title: "Types of Pianos We Move" },
  { id: "our-piano-moving-process",      title: "Our Piano Moving Process" },
  { id: "piano-moving-risks",            title: "Risks of DIY Piano Moving" },
  { id: "piano-moving-cost",             title: "Piano Moving Cost in Ottawa" },
  { id: "piano-storage",                 title: "Piano Storage in Ottawa" },
  { id: "service-areas",                 title: "Ottawa Areas We Serve" },
  { id: "faq",                           title: "FAQ" },
];

const PIANO_TYPES = [
  { name: "Upright Piano",      weight: "136–270 kg", height: "107–132 cm", note: "Most common in Ottawa homes. Board-tight staircase access is the main challenge." },
  { name: "Baby Grand Piano",   weight: "227–300 kg", height: "~150 cm lid",  note: "Requires leg removal, full disassembly, and specialized grand board transport." },
  { name: "Grand Piano",        weight: "270–520 kg", height: "Up to 180 cm lid", note: "Full disassembly, piano skid board, and multiple trained movers required." },
  { name: "Concert Grand",      weight: "480–635 kg", height: "~280 cm",     note: "Rarely moved — requires professional piano rigging and custom logistics." },
  { name: "Spinet / Console",   weight: "54–135 kg",  height: "Under 107 cm", note: "Smaller and lighter but still requires proper piano board and techniques." },
  { name: "Digital Piano",      weight: "Variable",   height: "Variable",    note: "Lighter but expensive electronics require careful padding and anti-static care." },
];

const PROCESS_STEPS = [
  { step: "01", title: "Pre-Move Assessment",      desc: "We assess your piano's make, model, and current location — staircase angles, doorway widths, elevator capacity, and route planning from origin to destination. Nothing is guessed on moving day." },
  { step: "02", title: "Protective Wrapping",      desc: "Entire piano wrapped in thick moving blankets and secured with stretch wrap. Keys protected with a padded key cover. Grand piano pedal lyre removed and wrapped separately." },
  { step: "03", title: "Leg & Pedal Removal (Grand)", desc: "Grand and baby grand pianos require full leg removal before transport. Our crew handles this with padded removal tools and carefully documents every hardware component." },
  { step: "04", title: "Piano Board & Skid",       desc: "Upright pianos are secured to a dedicated piano board (not a general furniture dolly). Grands go onto a specialized piano skid. Both prevent movement and vibration during transport." },
  { step: "05", title: "Safe Loading",             desc: "Piano loaded with multiple movers and a ramp. Every movement is coordinated verbally. No rushing. Interior of our truck is padded and the piano is strapped from multiple points." },
  { step: "06", title: "Tuning Recommendation",   desc: "We always recommend scheduling a piano tuning 2–4 weeks after the move to allow the instrument to acclimate to its new environment's temperature and humidity." },
];

const FAQS = [
  { q: "How much does it cost to move a piano in Ottawa?", a: "Piano moving in Ottawa typically costs between $250 and $600 for a local move, depending on the type of piano, the access at both locations (stairs, elevators), and the distance. Upright pianos in straightforward locations run $250–$350. Baby grands or moves involving multiple staircases run $400–$600+. We provide a firm written quote before every piano move." },
  { q: "Can you move a grand piano in Ottawa?", a: "Yes. Grand and baby grand piano moves require additional preparation — leg removal, a specialized piano skid board, and a minimum of 3–4 trained movers. We complete grand piano moves throughout Ottawa and to long-distance destinations. Every grand piano move is quoted individually after an assessment of both locations." },
  { q: "Do I need to hire a piano mover, or can general movers move my piano?", a: "We strongly recommend using a mover with specific piano moving experience and equipment. Pianos are not moved like large furniture — they require dedicated piano boards, specific technique for stairs, understanding of weight distribution (especially grands), and proper blanket protection. General movers without piano experience risk both the instrument and themselves." },
  { q: "How much does piano weight matter for the move?", a: "Significantly. An upright piano weighs 136–270 kg (300–600 lbs) and a grand piano weighs 270–520 kg (600–1,100 lbs). This weight requires proper equipment (not general dollies), a crew of 3–4 minimum, and specific staircase techniques. Weight distribution also affects ramp loading angles and truck positioning." },
  { q: "Will moving a piano put it out of tune?", a: "Yes — piano tuning is always affected by a move, primarily because of changes in temperature and humidity at the new location rather than the physical move itself. We recommend waiting 2–4 weeks after the move before tuning, allowing the instrument to stabilize in its new environment. We can refer you to Ottawa piano tuners upon request." },
  { q: "Can you move a piano up or down stairs in Ottawa?", a: "Yes. Staircase piano moves are common in Ottawa's mix of Victorian homes, condo buildings, and split-levels. We assess the staircase angle, width, and any landings or turns before the move. Very tight spiral staircases may require a hoisting assessment. We provide honest guidance upfront if a staircase presents challenges beyond our standard piano move." },
  { q: "Do you move pianos in Ottawa condos and apartment buildings?", a: "Yes. Condo and apartment piano moves require elevator coordination, move-in/move-out booking with building management, and sometimes blanket/skid modifications to fit within elevator dimensions. We handle all of this coordination as part of every Ottawa condo piano move." },
  { q: "Do you offer piano storage in Ottawa?", a: "Yes. Climate-controlled piano storage is available through our partner storage facility in Ottawa. Pianos require stable temperature (15–22°C) and humidity (45–70%) to prevent damage to the soundboard, bridges, and keys. We can arrange storage from as short as one week to long-term." },
  { q: "Do you move pianos long-distance from Ottawa?", a: "Yes. We move pianos from Ottawa to Toronto, Montreal, Vancouver, and anywhere in Canada. Long-distance piano moves use the same wrapping and boarding technique with additional padding for extended transport. Written quotes provided for all long-distance piano moves." },
  { q: "How do I prepare my piano for the movers?", a: "Keep the keyboard lid closed and locked if possible. Remove any items from the top of the piano. Clear a path from the piano to the exit at both locations. If your piano is a grand, let us know ahead of time so we bring the right equipment. You don't need to do anything else — our crew handles all protection and disassembly." },
];

export default function OttawaPianoMovers() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving — Ottawa Piano Movers",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/ottawa-piano-movers",
    "telephone": "(613) 600-4000",
    "address": { "@type": "PostalAddress", "streetAddress": "50 Colonnade Rd Unit 200B", "addressLocality": "Ottawa", "addressRegion": "ON", "postalCode": "K2E 7J6", "addressCountry": "CA" },
    "priceRange": "$$",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" },
    "areaServed": [{ "@type": "City", "name": "Ottawa" }],
    "description": "Prestige Moving provides professional piano moving services throughout Ottawa. Trained piano movers, proper equipment, and a 5.0-star rating. Call (613) 600-4000."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } }))
  };

  return (
    <>
      <Helmet>
        <title>Ottawa Piano Movers | Professional Piano Moving | Prestige Moving</title>
        <meta name="description" content="Ottawa's trusted piano movers. Prestige Moving specializes in upright, baby grand, and grand piano moves throughout Ottawa. Trained crew, proper equipment, 5.0 stars. Call (613) 600-4000." />
        <meta name="keywords" content="Ottawa piano movers, piano moving Ottawa, move a piano Ottawa, piano movers Ottawa Ontario, grand piano movers Ottawa, upright piano movers Ottawa, baby grand piano movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-piano-movers" />
        <meta property="og:title" content="Ottawa Piano Movers | Professional Piano Moving | Prestige Moving" />
        <meta property="og:description" content="Ottawa's trusted piano movers. Upright, baby grand, and grand piano moves throughout Ottawa. 5.0 stars, 400+ reviews." />
        <meta property="og:url" content="https://prestigemoving.ca/ottawa-piano-movers" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />
      <div className="min-h-screen bg-white">

        {/* ── HERO ── */}
        <section className="relative h-[520px] flex items-end pb-16">
          <img src={fleetImg} alt="Ottawa piano movers — Prestige Moving professional piano relocation" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1620]/95 via-[#0d1620]/65 to-[#0d1620]/30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <Music className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Ottawa Piano Movers · Trained Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 max-w-3xl leading-tight">
              Ottawa Piano Movers
            </h1>
            <p className="text-lg text-white/70 max-w-xl mb-2">Upright, baby grand, and grand piano moves throughout Ottawa — by a crew trained specifically for piano relocation.</p>
            <p className="text-white/55 text-sm mb-8 flex items-center gap-3 flex-wrap">
              <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-[#C5A572] fill-[#C5A572]" /> 5.0 stars · 400+ reviews</span>
              <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-[#C5A572]" /> Fully Insured</span>
              <span className="flex items-center gap-1"><BadgeCheck className="h-3.5 w-3.5 text-[#C5A572]" /> WSIB Certified</span>
              <span className="flex items-center gap-1"><Wrench className="h-3.5 w-3.5 text-[#C5A572]" /> Proper Piano Equipment</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book">
                <Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">Get a Piano Moving Quote <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
              <a href="tel:6136004000">
                <Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10">
                  <Phone className="h-4 w-4 mr-2" /> (613) 600-4000
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-[#1A2332] py-6">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "$250–$600", label: "Local Piano Move Cost" },
              { value: "5.0 ★",    label: "Google Rating" },
              { value: "400+",     label: "Five-Star Reviews" },
              { value: "All Types", label: "Upright, Baby Grand, Grand" },
            ].map(({ value, label }, i) => (
              <div key={i}>
                <div className="text-xl md:text-2xl font-bold text-[#C5A572]">{value}</div>
                <div className="text-white/50 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="xl:flex gap-12 items-start">
            <TableOfContents items={TOC_ITEMS} />

            <div className="flex-1 min-w-0 space-y-20">

              {/* WHY DIFFERENT */}
              <section id="why-piano-moving-is-different" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Music className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Specialist Knowledge Required</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Piano Moving Is Different From Any Other Move</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A piano is simultaneously one of the heaviest, most mechanically complex, and most financially valuable items in any Ottawa home. An upright piano weighs between 136 and 270 kilograms (300–600 lbs). A baby grand piano weighs between 227 and 300 kg (500–660 lbs). A full grand piano can exceed 520 kg (1,150 lbs). Beyond raw weight, a piano contains thousands of precisely calibrated moving parts — strings under extreme tension, hammers, dampers, bridges, and a wooden soundboard — all of which are vulnerable to damage if the instrument is moved with anything less than proper technique and equipment.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The consequences of an improper piano move are severe. A piano dropped or impacted on a staircase can suffer internal damage that costs thousands of dollars to repair — and in some cases, cannot be repaired at all. The soundboard, which is the acoustic heart of a piano, can crack under improper stress. The bridges that hold the strings in position are vulnerable to shock. Even the finish on a piano cabinet — which on a quality instrument can represent hundreds of dollars of restoration work — is damaged by contact with unpadded surfaces or sweat from unprotected hands.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This is why hiring a moving company with specific piano moving experience and equipment is not a luxury — it's the minimum standard for anyone who cares about their instrument. Prestige Moving's piano crew is trained in piano-specific techniques: the correct wrapping protocol for each piano type, the proper use of piano boards and skid boards (not general furniture dollies), staircase coordination for heavy pianos, and the disassembly procedure for grand piano legs. We've moved hundreds of pianos across Ottawa — uprights in Barrhaven bungalows, baby grands in Westboro heritage homes, and full concert grands in performance venues across the National Capital Region.
                </p>

                {/* Risk callout */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 my-8">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-amber-900 mb-1">The Risk of Using General Movers for a Piano</div>
                    <p className="text-amber-800 text-sm leading-relaxed">
                      Many general moving companies will attempt a piano move with standard furniture dollies and insufficient crew. The result is often a scratched cabinet, a damaged soundboard from impact, or — in the worst cases — a piano that has fallen down a staircase. Piano repair after such incidents typically costs $1,500–$8,000+. The piano move itself was not worth the savings.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  {[
                    { icon: Weight, label: "Extreme Weight", desc: "136–520+ kg depending on type — requires proper piano boards, specific ramp techniques, and minimum 3 movers." },
                    { icon: Ruler, label: "Tight Access", desc: "Ottawa's Victorian homes and condo buildings demand careful measurement of staircase widths, door frames, and elevator dimensions before moving day." },
                    { icon: Music, label: "Precision Instrument", desc: "Thousands of calibrated internal parts can be damaged by improper handling, vibration, or temperature shock during a poorly planned move." },
                  ].map(({ icon: Icon, label, desc }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-9 h-9 rounded-lg bg-[#C5A572]/10 flex items-center justify-center mb-3">
                        <Icon className="h-4 w-4 text-[#C5A572]" />
                      </div>
                      <div className="font-bold text-[#1A2332] text-sm mb-1">{label}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* TYPES */}
              <section id="types-of-pianos-we-move" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Package className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">All Piano Types</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Types of Pianos We Move in Ottawa</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Each category of piano has a distinct weight profile, disassembly requirement, and access challenge. Our crew is trained and equipped for every type — from a studio upright in a Kanata townhouse to a concert grand at a National Arts Centre performance space.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {PIANO_TYPES.map(({ name, weight, height, note }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-2">{name}</div>
                      <div className="flex gap-4 mb-3">
                        <div className="text-xs text-gray-400"><span className="text-gray-600 font-medium">{weight}</span><br />Weight range</div>
                        <div className="text-xs text-gray-400"><span className="text-gray-600 font-medium">{height}</span><br />Height / size</div>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{note}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* PROCESS */}
              <section id="our-piano-moving-process" className="scroll-mt-24 bg-gray-50/70 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Step-by-Step Process</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Our Ottawa Piano Moving Process</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Every Prestige piano move in Ottawa follows a documented, tested process designed to protect your instrument at every stage — from the first blanket wrap to the final placement in your new home or venue.
                </p>
                <div className="space-y-4">
                  {PROCESS_STEPS.map(({ step, title, desc }, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-[#1A2332] flex items-center justify-center shrink-0 text-[#C5A572] font-bold text-sm">{step}</div>
                      <div>
                        <div className="font-bold text-[#1A2332] text-sm mb-1">{title}</div>
                        <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* RISKS */}
              <section id="piano-moving-risks" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <AlertTriangle className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">DIY vs. Professional</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">The Real Risks of DIY or Under-Equipped Piano Moving</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Every year, Ottawa homeowners attempt to move pianos with the help of friends and general-purpose moving equipment. The results range from scraped floors and scratched piano cabinets to serious injuries and instruments that never play correctly again. Understanding what actually goes wrong — and why — is the most compelling argument for professional piano moving.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The most common DIY piano moving injury is lower back and shoulder injury from improper lifting technique on heavy staircase moves. An upright piano at 200+ kg is not simply a matter of having enough people. The leverage, stance, and coordination required to safely manage that weight on a staircase without throwing out the back of every person in the group requires training — not just willpower.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The most common instrument damage is internal — and invisible until the piano is played again after the move. A soundboard crack from an impact during loading. A bridge shifted from vibration in a vehicle without proper securing. Pins loosened in the pin block from repeated jolting. These are not cosmetic issues — they affect the piano's ability to hold a tune and, in severe cases, make the instrument unplayable.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {[
                    { title: "Floor & Stair Damage", desc: "An unsecured piano on a hard floor dolly gouges hardwood and tiles. Ottawa's Victorian-era hardwood floors, once gouged, are expensive and difficult to repair." },
                    { title: "Cabinet & Finish Damage", desc: "Piano cabinets are finished in lacquer or polyester that scratches permanently on contact with unpadded surfaces or tools. Refinishing a piano cabinet costs $1,500–$4,000." },
                    { title: "Soundboard Cracks", desc: "Impact to the piano's body during a fall or hard set-down can crack the soundboard — the most expensive single repair on any piano." },
                    { title: "Back & Shoulder Injury", desc: "Piano moving injuries are among the most common moving-related medical claims. 200+ kg on a staircase without proper technique is a recipe for serious injury." },
                  ].map(({ title, desc }, i) => (
                    <div key={i} className="flex gap-3 p-5 rounded-xl bg-red-50 border border-red-100">
                      <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-gray-800 text-sm mb-1">{title}</div>
                        <div className="text-gray-600 text-sm leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* COST */}
              <section id="piano-moving-cost" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <TruckIcon className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Transparent Pricing</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">How Much Does Piano Moving Cost in Ottawa?</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Ottawa piano moving costs vary based on piano type, the access at both locations (ground floor vs. multiple staircases), and the distance of the move. Every Prestige piano quote is written, itemized, and fixed — no surprises when the invoice arrives.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {[
                    { type: "Upright Piano", range: "$250–$350", conditions: "Ground floor to ground floor, no stairs", detail: "Standard local upright move. Single floor, direct access." },
                    { type: "Upright w/ Stairs", range: "$300–$500", conditions: "One or more staircases involved", detail: "Most common Ottawa scenario. Price scales with number of stair flights." },
                    { type: "Baby / Full Grand", range: "$400–$700+", conditions: "Full leg removal & grand skid required", detail: "Priced individually after location assessment at both addresses." },
                  ].map(({ type, range, conditions, detail }, i) => (
                    <div key={i} className={`p-5 rounded-xl border-2 ${i === 0 ? "border-gray-200" : i === 1 ? "border-[#C5A572] bg-[#C5A572]/5" : "border-gray-200"}`}>
                      {i === 1 && <div className="text-[#C5A572] text-xs font-bold uppercase tracking-wide mb-2">Most Common</div>}
                      <div className="font-bold text-[#1A2332] text-base mb-1">{type}</div>
                      <div className="text-2xl font-bold text-[#C5A572] mb-2">{range}</div>
                      <div className="text-gray-500 text-xs mb-1">{conditions}</div>
                      <div className="text-gray-400 text-xs">{detail}</div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-[#1A2332] mb-4">What Affects the Cost of Your Ottawa Piano Move?</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { factor: "Piano Type & Weight", impact: "Grands require extra crew and a grand skid board. Concert grands may require specialty rigging. Uprights are the most straightforward and economical." },
                    { factor: "Number of Stairs", impact: "Each additional flight of stairs adds time, risk, and crew requirements. A piano being moved from a third-floor walkup to another third-floor walkup is significantly more complex than a ground-floor move." },
                    { factor: "Distance", impact: "Local Ottawa moves (within the city) are priced flat. Long-distance piano moves (Ottawa to Toronto, Ottawa to Montreal) are priced by distance plus access." },
                    { factor: "Building Access", impact: "Condo buildings with small freight elevators or service elevator booking requirements may add coordination time. We assess and account for this in every quote." },
                    { factor: "Same-Day Move vs. Piano-Only", impact: "Moving your piano as part of a full household move is typically more economical than booking a piano-only move. We can quote both scenarios." },
                    { factor: "Long-Distance", impact: "Piano moves from Ottawa to Toronto typically cost $600–$1,200. Ottawa to Montreal: $450–$750. Ottawa to Vancouver: $1,800–$3,000+. All quoted individually." },
                  ].map(({ factor, impact }, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1A2332] text-sm mb-1">{factor}</div>
                        <div className="text-gray-500 text-sm leading-relaxed">{impact}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#1A2332] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-white font-bold mb-0.5">Get a firm piano moving quote — today</div>
                    <div className="text-white/50 text-sm">Written, fixed price. No surprises on move day.</div>
                  </div>
                  <Link href="/contact">
                    <Button className="bg-[#C5A572] text-[#1A2332] font-bold shrink-0">
                      Request Piano Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </section>

              {/* STORAGE */}
              <section id="piano-storage" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Package className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Piano Storage</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Piano Storage in Ottawa</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sometimes a piano move involves a gap between your old and new address — renovation timelines, lease transitions, or a staging period for a home sale. Storing a piano requires a climate-controlled environment that maintains consistent temperature (15–22°C) and relative humidity (45–70%). Outside this range, piano soundboards dry and crack, keys warp, felt becomes brittle, and strings corrode.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Standard self-storage units are not appropriate for piano storage. They are not climate-controlled, and Ottawa's -30°C winters and +35°C humid summers represent the exact conditions that cause irreversible piano damage in uncontrolled storage. Prestige Moving can coordinate climate-controlled piano storage through our Ottawa storage partners for moves from one week to one year.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  {[
                    { title: "Temperature Controlled", desc: "Maintained at 15–22°C year-round. Ottawa's extreme seasonal temperatures require active climate control — standard storage units don't provide this." },
                    { title: "Humidity Controlled", desc: "45–70% relative humidity prevents soundboard cracking, key warping, and string corrosion. Ottawa's dry winters are particularly damaging to unsupported pianos." },
                    { title: "Upright Storage", desc: "Pianos are always stored upright (never on their side, except grands in transport position) on piano skids that keep them off concrete floors." },
                  ].map(({ title, desc }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-2">{title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* AREAS */}
              <section id="service-areas" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <MapPin className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Ottawa Service Area</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Ottawa Neighbourhoods We Serve for Piano Moving</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We move pianos throughout the entire Ottawa area — from Kanata in the west to Orleans in the east, Manotick in the south to Rockcliffe Park in the northeast. No neighbourhood is too far or too challenging.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {["Centretown","The Glebe","Westboro","Sandy Hill","Kanata","Orleans","Barrhaven","Nepean","Gloucester","Stittsville","Manotick","Alta Vista","Hintonburg","Rockcliffe Park","Beacon Hill","Riverside South"].map(area => (
                    <div key={area} className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A572] shrink-0" />
                      <span className="text-gray-700 text-sm">{area}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 relative rounded-2xl overflow-hidden">
                  <img src={teamImg} alt="Prestige Moving piano moving team Ottawa" className="w-full h-52 object-cover object-center" />
                  <div className="absolute inset-0 bg-[#0d1620]/75 flex items-center">
                    <div className="pl-8">
                      <div className="text-white font-bold text-lg mb-1">Ottawa's Piano Moving Specialists</div>
                      <div className="text-white/70 text-sm">Trained crew, proper equipment, 5.0-star record across Ottawa</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Frequently Asked Questions</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-8">FAQ — Ottawa Piano Movers</h2>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button className="w-full flex items-center justify-between gap-4 p-5 text-left hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`button-faq-piano-${i}`}>
                        <span className="font-semibold text-[#1A2332] text-sm">{q}</span>
                        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      {openFaq === i && <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{a}</div>}
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>

        {/* BOTTOM LINKS */}
        <section className="bg-[#0d1620] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              <div>
                <div className="flex items-center gap-2 mb-5"><Package className="h-4 w-4 text-[#C5A572]" /><span className="text-[#C5A572] text-xs font-bold uppercase tracking-widest">Specialty Services</span></div>
                <div className="space-y-1">
                  {[
                    { label: "Packing Services Ottawa", href: "/services/packing-services" },
                    { label: "Custom Crating Ottawa", href: "/custom-crating-ottawa" },
                    { label: "Furniture Assembly Ottawa", href: "/furniture-assembly-ottawa" },
                    { label: "Home Staging Ottawa", href: "/home-staging-ottawa" },
                    { label: "Storage Solutions", href: "/services/storage-solutions" },
                  ].map(({ label, href }) => (
                    <Link key={href} href={href}><div className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/6 group transition-colors cursor-pointer"><span className="text-white/60 text-sm group-hover:text-white transition-colors">{label}</span><ChevronRight className="h-4 w-4 text-white/20 group-hover:text-[#C5A572] transition-colors" /></div></Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-5"><MapPin className="h-4 w-4 text-[#C5A572]" /><span className="text-[#C5A572] text-xs font-bold uppercase tracking-widest">Local Moving</span></div>
                <div className="space-y-1">
                  {[
                    { label: "Best Movers Ottawa", href: "/best-movers-ottawa" },
                    { label: "Residential Movers Ottawa", href: "/residential-movers-ottawa" },
                    { label: "Movers Near Me Ottawa", href: "/movers-near-me-ottawa" },
                    { label: "Affordable Movers Ottawa", href: "/affordable-movers-ottawa" },
                    { label: "Local Movers Ottawa", href: "/local-movers-ottawa" },
                  ].map(({ label, href }) => (
                    <Link key={href} href={href}><div className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/6 group transition-colors cursor-pointer"><span className="text-white/60 text-sm group-hover:text-white transition-colors">{label}</span><ChevronRight className="h-4 w-4 text-white/20 group-hover:text-[#C5A572] transition-colors" /></div></Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-5"><Award className="h-4 w-4 text-[#C5A572]" /><span className="text-[#C5A572] text-xs font-bold uppercase tracking-widest">Book Now</span></div>
                <p className="text-white/50 text-sm mb-4">Ready to book your Ottawa piano move? Get a firm written quote — valid for 30 days.</p>
                <Link href="/contact"><Button className="bg-[#C5A572] text-[#1A2332] font-bold w-full mb-3">Get a Piano Moving Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/20 w-full"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#1A2332]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-0.5 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-[#C5A572] fill-[#C5A572]" />)}</div>
            <h2 className="text-3xl font-bold text-white mb-3">Ottawa's Trusted Piano Movers</h2>
            <p className="text-white/55 mb-8 max-w-lg mx-auto">5.0 stars across 400+ reviews. Proper equipment, trained crew, written quotes. Your piano deserves the best.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Book Piano Move <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

      </div>
      <SharedFooter />
    </>
  );
}
