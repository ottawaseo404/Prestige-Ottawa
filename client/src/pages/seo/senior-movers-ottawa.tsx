import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, Heart, ChevronDown, Shield,
  Clock, Users, Star, MapPin, Package, Home, Truck, DollarSign,
  Calendar, Award, HandHeart, Building2, ChevronRight, Lock
} from "lucide-react";

const FAQS = [
  {
    q: "What makes Prestige Moving the best senior movers in Ottawa?",
    a: "Prestige Moving has specialized in senior moves since 2009. Our crew leads are hand-selected for patience and communication. We brief every crew before arrival on the nature of the move. We allow extra time in our schedule so no one feels rushed. We provide a single point of contact for family members managing the move from a distance, and we confirm every detail in writing. Our 5.0★ rating across 400+ reviews reflects our track record with Ottawa senior families."
  },
  {
    q: "How much do senior movers in Ottawa cost?",
    a: "Senior moves in Ottawa start at $155/hr for a 2-mover Premium crew, $195/hr for a 3-mover Deluxe crew, and $315/hr for a 4-mover Diamond crew. All packages include a 3-hour minimum, all equipment, blanket wrapping, and furniture disassembly/reassembly. Full-service packing is available for an additional flat fee quoted in advance. We provide written quotes with no hidden fees — what you're quoted is what you pay."
  },
  {
    q: "Are there affordable movers for seniors in Ottawa?",
    a: "Yes. Prestige Moving offers the same hourly rates regardless of age, and our 2-mover Premium package at $155/hr is among the most competitive full-service rates in Ottawa. For seniors on fixed incomes, we recommend scheduling mid-week (Tuesday–Thursday) for better availability and rate flexibility. We also offer a written quote so you know your total cost before the move begins. Call (613) 600-4000 to discuss your specific situation."
  },
  {
    q: "Can local movers for seniors in Ottawa help with downsizing?",
    a: "Yes. Prestige Moving provides full downsizing support — we help families categorize items as: moving to the new residence, transferring to family members, donating to charity, or disposing of. We can coordinate with Ottawa charities such as the Salvation Army, Value Village, and Habitat for Humanity for donation pickups. For items requiring disposal, we coordinate removal as part of the move."
  },
  {
    q: "Do you move seniors into retirement communities in Ottawa?",
    a: "Yes. We regularly move clients into Ottawa's major retirement communities including Chartwell Kanata Lakes, Amica Beechwood, Revera Westboro, Seasons Retirement Communities in Barrhaven, The Village of Rockcliffe, Peter D. Clark Long-Term Care Centre, Carlingview Manor, and numerous independent retirement buildings across the city. We know each facility's move-in procedures, elevator booking requirements, and access rules."
  },
  {
    q: "Can family members coordinate a senior move if they live out of town?",
    a: "Absolutely. We regularly work with adult children or power of attorney who are managing a senior parent's move from another city. We assign a single coordinator for all communications, confirm all details by email, and provide updates throughout moving day. We can also conduct video walkthroughs of the origin home to help with inventory and planning before the move date."
  },
  {
    q: "Do Ottawa senior movers help with long distance moves?",
    a: "Yes. Prestige Moving provides full long-distance senior moving services from Ottawa to any province. Many Ottawa seniors relocate to be closer to family in Toronto, Vancouver, Calgary, or Montreal. Long-distance senior moves include professional packing, climate-controlled transport, GPS tracking, and full transit insurance. Call (613) 600-4000 for a binding long-distance quote."
  },
  {
    q: "How far in advance should I book senior movers in Ottawa?",
    a: "We recommend booking senior movers 3–6 weeks in advance, particularly for moves into retirement communities that have specific move-in date windows. End-of-month dates and Friday moves book up the fastest. If you're working with a retirement community's move-in schedule, call us as soon as you have a confirmed date to secure your booking."
  },
];

const RETIREMENT_COMMUNITIES = [
  { name: "Chartwell Kanata Lakes", area: "Kanata" },
  { name: "Amica Beechwood Village", area: "New Edinburgh" },
  { name: "Revera Westboro", area: "Westboro" },
  { name: "Seasons Barrhaven", area: "Barrhaven" },
  { name: "The Village of Rockcliffe", area: "Rockcliffe Park" },
  { name: "Carlingview Manor", area: "Carlington" },
  { name: "Hillel Lodge", area: "Nepean" },
  { name: "Peter D. Clark Centre", area: "Nepean" },
  { name: "Perley Health", area: "Alta Vista" },
  { name: "Madonna Care Community", area: "Orleans" },
  { name: "Forest Hill Retirement", area: "Kanata" },
  { name: "Blackburn Lodge", area: "Blackburn Hamlet" },
];

const CHECKLIST = [
  { phase: "8–12 Weeks Before", items: ["Start sorting belongings into: keep, donate, family, dispose", "Measure the new space and plan furniture placement", "Book your Ottawa senior movers — popular dates fill quickly", "Notify health care providers and coordinate medical records transfer", "Contact retirement community for move-in rules and elevator booking"] },
  { phase: "4–6 Weeks Before", items: ["Confirm moving date and crew size with Prestige Moving", "Begin packing non-essential items (off-season clothing, storage items)", "Arrange donation pickups for items not moving", "Update address with Service Canada, CRA, health card, bank, insurance", "Arrange mail forwarding through Canada Post"] },
  { phase: "1–2 Weeks Before", items: ["Pack suitcase with essentials for the first few days", "Defrost refrigerator and freezer", "Confirm elevator booking and parking at both locations", "Label all boxes clearly by room and contents", "Keep a folder of important documents accessible — not in the moving truck"] },
  { phase: "Moving Day", items: ["Crew arrives and walks through the home with you (or family)", "Crew lead confirms priority items and placement preferences", "All furniture blanket-wrapped before leaving the home", "You receive regular updates if coordinating remotely", "Final walkthrough before leaving — nothing left behind"] },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Senior Movers Ottawa",
  "serviceType": "Senior Moving Services",
  "provider": {
    "@type": "MovingCompany",
    "name": "Prestige Moving Ottawa",
    "url": "https://prestigemoving.ca",
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
      "reviewCount": "400"
    }
  },
  "areaServed": [
    { "@type": "City", "name": "Ottawa" },
    { "@type": "City", "name": "Kanata" },
    { "@type": "City", "name": "Orleans" },
    { "@type": "City", "name": "Barrhaven" },
    { "@type": "City", "name": "Nepean" },
    { "@type": "City", "name": "Gloucester" }
  ],
  "description": "Patient, compassionate senior movers in Ottawa. Retirement community moves, downsizing assistance, and family-coordinated relocations. Written quotes, no hidden fees. 5.0★ rated.",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "155",
      "priceCurrency": "CAD",
      "unitText": "per hour"
    }
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Ottawa Movers", "item": "https://prestigemoving.ca" },
    { "@type": "ListItem", "position": 2, "name": "Senior Movers Ottawa", "item": "https://prestigemoving.ca/senior-movers-ottawa" }
  ]
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

export default function SeniorMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openChecklist, setOpenChecklist] = useState<number | null>(0);

  return (
    <>
      <Helmet>
        <title>Senior Movers Ottawa | Affordable, Patient & Local | Prestige Moving</title>
        <meta name="description" content="Ottawa's most trusted senior movers. Patient crew, retirement community moves, downsizing assistance, family coordination. Affordable rates from $155/hr. Written quote, no hidden fees. Call (613) 600-4000." />
        <meta name="keywords" content="senior movers Ottawa, ottawa senior movers, affordable movers for seniors in ottawa, local movers for seniors ottawa, movers for seniors ottawa, senior moving ottawa, retirement moving ottawa, downsizing movers ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/senior-movers-ottawa" />
        <meta property="og:title" content="Senior Movers Ottawa | Prestige Moving — Patient, Affordable, Local" />
        <meta property="og:description" content="Ottawa's most trusted senior movers. Retirement community moves, downsizing assistance, family coordination. 5.0★ rated. Call (613) 600-4000." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/senior-movers-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Heart className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Senior Moving Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Senior Movers Ottawa —<br className="hidden md:block" />
              Patient, Affordable & Family-Coordinated
            </h1>
            <p className="text-white/75 text-lg mb-6 leading-relaxed">
              Moving later in life is one of the most emotionally significant transitions a person makes. Our senior moving team in Ottawa moves at your pace, handles every belonging with care, and keeps your family informed every step of the way. Transparent, competitive rates. Written quote. No hidden fees.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {["5.0★ Rated — 400+ Reviews", "WSIB Certified", "Written Quote Guaranteed", "No Hidden Fees"].map(t => (
                <div key={t} className="flex items-center gap-1.5 text-white/80 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/book">
                <Button className="bg-[#C5A572] text-[#1A2332] font-bold">
                  Get Free Senior Moving Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:6136004000">
                <Button variant="outline" className="text-white border-white/30 bg-white/10">
                  <Phone className="h-4 w-4 mr-2" /> (613) 600-4000
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Patient, No-Rush Crew", "Retirement Community Experience", "Family Remote Coordination", "Downsizing & Donation Help", "Transparent Pricing"].map(t => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" />{t}</span>
          ))}
        </div>
      </div>

      {/* What Makes Senior Moves Different */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#1A2332] mb-5">Why Senior Moving in Ottawa Requires a Specialist</h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>A senior move is not just a logistics exercise. For many Ottawa seniors, a move from the family home represents the end of decades in the same space — a home where children grew up, where memories are embedded in every room. The physical act of moving is straightforward; the emotional weight of leaving is not.</p>
                <p>Ottawa's senior moving specialists at Prestige Moving understand this distinction. Our crew leads are selected for their patience, communication, and ability to work with seniors and their families under emotionally significant circumstances. We slow down when we need to. We check in. We treat every possession — from inherited china to everyday kitchen items — as if it matters, because to the person we're serving, it does.</p>
                <p>Unlike general movers who treat a senior move the same as any other job, we adapt our approach from the first call through to placement at the new home. Every senior move at Prestige Moving includes a detailed pre-move briefing for the crew, a single point of contact for family, and an allowance of extra time in the day's schedule so nothing feels rushed.</p>
                <p>As one of Ottawa's most trusted <Link href="/" className="text-[#C5A572] hover:underline">Ottawa movers</Link>, we've handled hundreds of senior transitions — from long-time homeowners downsizing to a condo to families coordinating a parent's move into memory care from across the country.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: Clock, title: "No-Rush, Flexible Pacing", desc: "We build extra time into every senior move. There is no pressure to finish quickly. The crew works at whatever speed is comfortable, stopping when needed and checking in regularly with the senior or their family representative." },
                { icon: Users, title: "Remote Family Coordination", desc: "Many Ottawa senior moves are organized by adult children who live in Toronto, Vancouver, or elsewhere. We assign a single coordinator for all communications, provide email confirmations of everything, and can conduct video walkthroughs to assist with planning." },
                { icon: HandHeart, title: "Downsizing & Donation Help", desc: "We help sort belongings into categories: moving to new home, transferring to family, donating to Ottawa charities, or disposal. We coordinate with local charities for pickup and with disposal services for items that cannot be donated." },
                { icon: Shield, title: "Antique & Heirloom Protection", desc: "Decades of accumulated possessions include irreplaceable items. Every piece is blanket-wrapped with quilted moving pads. China, artwork, grandfather clocks, and family heirlooms receive our highest-level protection protocol." },
                { icon: Building2, title: "Retirement Community Experience", desc: "We know Ottawa's retirement communities: their move-in procedures, elevator booking requirements, service elevator access, parking rules, and scheduling windows. We coordinate directly with facility staff so your family doesn't have to." },
                { icon: DollarSign, title: "Transparent, Affordable Pricing", desc: "Seniors on fixed incomes deserve complete pricing clarity. Your written quote is your final invoice. We offer the same competitive hourly rates for senior moves as all our services — no hidden charges." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="w-9 h-9 bg-[#C5A572]/15 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="h-4.5 w-4.5 text-[#C5A572]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A2332] text-sm mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-3 text-center">Affordable Senior Moving Rates in Ottawa</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">All packages include a 3-hour minimum, full blanket wrapping, all equipment, and disassembly/reassembly. Written quote before every move — no surprises.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Premium", crew: "2 Movers", rate: "$155/hr", best: "1–2 bedroom apartment or condo. Efficient team, perfect for a straightforward senior move into a retirement unit." },
              { name: "Deluxe", crew: "3 Movers", rate: "$195/hr", best: "2–3 bedroom home. Ideal for larger senior moves with more furniture and a need for faster completion." },
              { name: "Diamond", crew: "4+ Movers", rate: "$315/hr", best: "Large family home downsize. Multiple rooms, decades of accumulated belongings, or moves requiring maximum speed." },
            ].map(pkg => (
              <div key={pkg.name} className={`rounded-xl border p-6 bg-white ${pkg.name === "Deluxe" ? "border-[#C5A572] ring-2 ring-[#C5A572]/20" : "border-gray-200"}`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-[#1A2332] text-lg">{pkg.name}</h3>
                  {pkg.name === "Deluxe" && <span className="text-xs bg-[#C5A572] text-[#1A2332] font-bold px-2 py-0.5 rounded-full">Most Popular</span>}
                </div>
                <a href="tel:6136004000" className="relative inline-flex items-center gap-1.5 bg-gray-100 rounded-lg px-3 py-1.5 mb-2 overflow-hidden cursor-pointer">
                  <span className="text-xl font-bold text-[#C5A572] blur-sm select-none pointer-events-none">{pkg.rate}</span>
                  <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-[1px]">
                    <Lock className="h-3.5 w-3.5 text-[#C5A572] mr-1" />
                    <span className="text-xs font-bold text-[#1A2332]">Call for Rate</span>
                  </div>
                </a>
                <div className="text-gray-500 text-sm mb-4">{pkg.crew} · 3-hr minimum</div>
                <p className="text-gray-600 text-sm leading-relaxed">{pkg.best}</p>
                <div className="mt-5">
                  <Link href="/book">
                    <Button className="w-full bg-[#1A2332] text-white font-semibold" size="sm">Get Free Quote</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">Professional packing service available as an add-on. Full-service packing quoted separately based on home size.</p>
        </div>
      </section>

      {/* Ottawa Retirement Communities */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ottawa Retirement Communities We Move Into</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">We've moved clients into dozens of Ottawa-area retirement communities, long-term care facilities, and assisted living residences. Each facility has its own move-in procedures, elevator booking requirements, and access rules — we know them and handle the coordination directly with the building.</p>
              <div className="grid grid-cols-2 gap-2.5">
                {RETIREMENT_COMMUNITIES.map(c => (
                  <div key={c.name} className="flex items-start gap-2 bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <MapPin className="h-3.5 w-3.5 text-[#C5A572] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[#1A2332] font-semibold text-xs">{c.name}</div>
                      <div className="text-gray-500 text-xs">{c.area}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">Don't see your facility listed? We serve all Ottawa-area retirement and care communities. Call us at (613) 600-4000 to confirm.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Local Senior Movers Serving All of Ottawa</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">As local movers for seniors in Ottawa, we serve every neighbourhood in the National Capital Region — from older established areas with narrow streets and older building elevator constraints, to newer suburban developments in Barrhaven and Kanata.</p>
              <div className="space-y-3">
                {[
                  { area: "Inner Ottawa", neighbourhoods: "Centretown, The Glebe, Westboro, Sandy Hill, New Edinburgh, Rockcliffe Park, Manor Park, Old Ottawa South" },
                  { area: "West Ottawa", neighbourhoods: "Kanata, Stittsville, Bells Corners, Nepean, Merivale, Carlington, Qualicum-Redwood" },
                  { area: "East Ottawa", neighbourhoods: "Orleans, Gloucester, Beacon Hill, Blackburn Hamlet, Cumberland, Navan" },
                  { area: "South Ottawa", neighbourhoods: "Barrhaven, Riverside South, Manotick, Greely, Findlay Creek" },
                  { area: "Gatineau, QC", neighbourhoods: "Hull, Aylmer, Gatineau, Masson-Angers — cross-provincial senior moves fully covered" },
                ].map(s => (
                  <div key={s.area} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <div className="font-bold text-[#1A2332] text-sm mb-1">{s.area}</div>
                    <div className="text-gray-600 text-xs leading-relaxed">{s.neighbourhoods}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downsizing Guide */}
      <section className="bg-[#1A2332] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-3 text-center">The Downsizing Process: What Ottawa Senior Families Need to Know</h2>
          <p className="text-white/65 text-center mb-10 max-w-2xl mx-auto">Downsizing from a family home to a smaller space is one of the most common senior moving scenarios in Ottawa. Here's how to approach it methodically without feeling overwhelmed.</p>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Start with a floor plan of the new space",
                content: "Before deciding what to keep, you need to know what will physically fit. Most Ottawa retirement suites range from 450–900 sq ft. Measure every piece of furniture you're considering keeping and compare against the new floor plan. This single step eliminates most of the difficult decisions."
              },
              {
                step: "2",
                title: "Create four categories for every item",
                content: "Going to the new home · Transferring to family members · Donating to Ottawa charities · Disposing of. Assign every item to one of these four categories. Don't try to decide item by item — batch similar items together (all bedroom furniture, all kitchen items, all books) to make faster decisions."
              },
              {
                step: "3",
                title: "Schedule charity pickups before moving day",
                content: "Ottawa charities including the Salvation Army, Value Village donation centres, Habitat for Humanity ReStore, and the Ottawa Mission will pick up furniture and household goods. Schedule these pickups 2–3 weeks before your move date. Items that remain can be handled by our disposal coordination service."
              },
              {
                step: "4",
                title: "Identify heirlooms and valuables early",
                content: "Walk through the home with family and identify items that have sentimental value and should go to specific people — a grandmother's china to one daughter, a grandfather's tools to a son. Label these items with the recipient's name. Our crew will set these aside and ensure they're either included in the move or kept separate for family pickup."
              },
              {
                step: "5",
                title: "Pack a 'first week' essentials box",
                content: "Moving day is tiring. Pack a dedicated box (or suitcase) with everything needed for the first 3–5 days at the new home: medications, phone charger, toiletries, a few changes of clothing, important documents, TV remote, bedding for the first night. This box stays with the senior, not on the truck."
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="w-9 h-9 bg-[#C5A572] rounded-full flex items-center justify-center text-[#1A2332] font-bold shrink-0 text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moving Checklist */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-3 text-center">Senior Move Checklist for Ottawa Families</h2>
          <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">Use this timeline to stay organized from first decision to moving day. Click each phase to expand.</p>
          <div className="space-y-3">
            {CHECKLIST.map((phase, i) => (
              <div key={phase.phase} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenChecklist(openChecklist === i ? null : i)}
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4.5 w-4.5 text-[#C5A572]" />
                    <span className="font-bold text-[#1A2332] text-sm">{phase.phase}</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openChecklist === i ? "rotate-180" : ""}`} />
                </button>
                {openChecklist === i && (
                  <div className="px-5 pb-5 border-t border-gray-100">
                    <ul className="space-y-2 mt-4">
                      {phase.items.map(item => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-2 text-center">What Ottawa Families Say About Our Senior Moving Service</h2>
          <p className="text-gray-500 text-center mb-10">5.0★ average across 400+ Google reviews</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Margaret & David L.",
                location: "Westboro to Chartwell Kanata Lakes",
                review: "My mother is 84 and this move was emotionally significant for our entire family. The Prestige crew was extraordinary — they spoke directly to my mother, never rushed her, and took extra care with her antique furniture and her late husband's model ships. I coordinated from Toronto and they kept me informed all day. Could not recommend more highly.",
                stars: 5
              },
              {
                name: "Robert H.",
                location: "Rockcliffe Park to Amica Beechwood",
                review: "We moved dad out of his home of 40 years. The crew lead sat with him while he said goodbye to the house — something I didn't expect and was genuinely moved by. Professional, careful with his belongings, and the move came in exactly at the quoted price. Nothing hidden, nothing extra.",
                stars: 5
              },
              {
                name: "Susan & Tom W.",
                location: "Barrhaven to Seasons Barrhaven",
                review: "We'd never managed a senior move before and didn't know where to start. Prestige guided us through everything — the donation coordination, the retirement community's move-in rules, the packing. It took one phone call and they handled the rest. My mother is settled and happy in her new home.",
                stars: 5
              },
            ].map(t => (
              <div key={t.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.review}"</p>
                <div>
                  <div className="font-bold text-[#1A2332] text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs flex items-center gap-1 mt-0.5">
                    <MapPin className="h-3 w-3" />{t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form SEO content */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Senior Moving Services in Ottawa — The Complete Guide</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>Ottawa has one of the fastest-growing senior populations in Ontario. The city's large federal public service workforce is aging, and the National Capital Region has developed an extensive network of retirement communities, independent living facilities, and long-term care homes to serve this population. Senior moves in Ottawa span a wide range of scenarios: families moving elderly parents closer to grandchildren, long-time homeowners downsizing from a 4-bedroom Rockcliffe Park estate to a 700 sq ft retirement suite, or couples transitioning into assisted living after decades in the same home.</p>

            <p>Finding affordable movers for seniors in Ottawa requires knowing what to look for. The most important qualities are not price alone — they are patience, communication, and experience with the specific logistics of retirement community moves. A mover who has never navigated Chartwell's elevator booking system or Amica's loading dock restrictions will cost you time and stress that no hourly rate discount can offset.</p>

            <p>Prestige Moving has been providing senior moving services in Ottawa since 2009. Over that time, we've developed specific protocols for senior moves that differ from our standard residential moving process: extended scheduling windows, dedicated crew lead assignments, family communication plans, and pre-move briefings that ensure our crew understands the emotional context of the job before they arrive.</p>

            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">How Much Do Senior Movers in Ottawa Cost?</h3>
            <p>Senior moving costs in Ottawa are generally the same as standard residential moving — there is no "senior premium" at Prestige Moving. Our rates start at $155/hr for a 2-mover crew and scale up based on crew size. What does differ is the time required: senior moves typically take 20–30% longer than a comparable standard move, because we deliberately work at a slower, less stressful pace. This time difference is factored into our written quotes upfront so there are no surprises on moving day.</p>

            <p>For seniors on fixed incomes, we recommend scheduling your move on a Tuesday, Wednesday, or Thursday, avoiding end-of-month dates when demand is highest. Full-service packing (where our team packs the entire home) is available as an add-on and is quoted as a flat fee based on home size — this removes the need for the senior or their family to do any packing themselves.</p>

            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Movers for Seniors Ottawa: What to Expect on Moving Day</h3>
            <p>On the day of your senior move, our crew arrives within the booked time window and does a walkthrough of the home with either the senior or their designated family contact. The crew lead confirms which items are moving, any special handling instructions (antiques, items requiring extra care), and the placement preferences for the new home.</p>

            <p>All furniture is blanket-wrapped with quilted moving pads before it leaves the home. Fragile items including china, artwork, mirrors, and collectibles receive additional custom protection. Our trucks are clean, properly equipped, and fully insured. We handle elevator booking coordination at both the origin and destination buildings, and we work within the move-in windows set by retirement communities.</p>

            <p>At the destination, we unload and place furniture exactly as directed. For seniors moving into retirement suites, we set up the bedroom and ensure the new space is functional before we leave. We don't consider a senior move complete until the person we're serving is settled and comfortable in their new home.</p>

            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Planning a Long-Distance Senior Move from Ottawa</h3>
            <p>Many Ottawa senior moves involve relocation to another province — typically to be closer to adult children in Toronto, Vancouver, Calgary, or elsewhere. Long-distance senior moves require additional planning: binding written quotes (not estimates), professional packing of all belongings, climate-controlled transport for sensitive items, GPS tracking throughout the journey, and full transit insurance.</p>

            <p>Prestige Moving provides complete long-distance senior moving services from Ottawa to any destination in Canada. We use the same senior-focused approach for long-distance moves as for local ones — patient crew, clear family communication, and complete protection for every belonging. Contact us at (613) 600-4000 or visit our <Link href="/services/senior-moving" className="text-[#C5A572] hover:underline">senior moving service page</Link> for more information on long-distance options.</p>

            <p>For related services, see: <Link href="/downsizing-moving-ottawa" className="text-[#C5A572] hover:underline">Downsizing Moving Ottawa</Link> · <Link href="/furniture-donation-disposal-ottawa" className="text-[#C5A572] hover:underline">Furniture Donation & Disposal Ottawa</Link> · <Link href="/senior-moving-services-ottawa" className="text-[#C5A572] hover:underline">Ottawa Senior Movers</Link> · <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">Long Distance Moving Ottawa</Link></p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-2 text-center">Senior Movers Ottawa — Frequently Asked Questions</h2>
          <p className="text-gray-500 text-center text-sm mb-8">Questions from Ottawa families planning a senior move</p>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left bg-gray-50 hover-elevate"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-white pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-10 w-10 text-[#C5A572] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Plan a Senior Move in Ottawa</h2>
          <p className="text-white/65 mb-2 max-w-xl mx-auto">Call our senior moving specialists or get a free written quote online. Patient crew · Family coordination · Affordable rates · No hidden fees.</p>
          <p className="text-[#C5A572] font-semibold mb-8">(613) 600-4000 · Ottawa@prestigemoving.ca</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book">
              <Button className="bg-[#C5A572] text-[#1A2332] font-bold">
                Get Free Senior Moving Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:6136004000">
              <Button variant="outline" className="text-white border-white/30 bg-white/10">
                <Phone className="h-4 w-4 mr-2" /> (613) 600-4000
              </Button>
            </a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
