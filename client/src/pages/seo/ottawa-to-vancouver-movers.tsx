import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, TruckIcon, Shield, Clock, Star, ArrowRight, CheckCircle2,
  MapPin, ChevronDown, DollarSign, Calendar, Package, AlertCircle, Home, Truck
} from "lucide-react";

const TOC_ITEMS = [
  { id: "overview", title: "Route Overview" },
  { id: "cost", title: "Cost Breakdown" },
  { id: "whats-included", title: "What's Included" },
  { id: "bc-tips", title: "Moving to Vancouver" },
  { id: "ship-vs-drive", title: "Ship vs. Drive Your Belongings" },
  { id: "timeline", title: "Moving Timeline" },
  { id: "checklist", title: "Pre-Move Checklist" },
  { id: "faq", title: "FAQs" },
  { id: "cta", title: "Get a Quote" },
];

const COST_TABLE = [
  { size: "Bachelor / Studio", min: "$3,000",  max: "$6,000",   delivery: "7–10 days" },
  { size: "1-Bedroom",         min: "$4,500",  max: "$8,000",   delivery: "8–12 days" },
  { size: "2-Bedroom",         min: "$7,000",  max: "$12,000",  delivery: "9–14 days" },
  { size: "3-Bedroom House",   min: "$10,000", max: "$18,000",  delivery: "10–14 days" },
  { size: "4+ Bedroom House",  min: "$16,000", max: "$28,000",  delivery: "12–18 days" },
];

const FAQS = [
  {
    q: "How long does an Ottawa to Vancouver move take?",
    a: "The drive from Ottawa to Vancouver is approximately 4,600 km and takes 3–4 days of continuous driving. For moving trucks, delivery typically takes 7–14 business days from the loading date, depending on your shipment size, route, and whether any stops or transfers are required. Our Vancouver-bound trucks depart Ottawa weekly and follow designated western Canada highway routes."
  },
  {
    q: "How much does it cost to move from Ottawa to Vancouver?",
    a: "Ottawa to Vancouver cross-country moving costs range from approximately $3,000 for a bachelor apartment to $28,000+ for a large 4-bedroom home. Long-distance pricing across Canada is typically based on the weight and cubic footage of your shipment plus distance — not hourly rates. This is a significant move, and pricing reflects the logistics, fuel, crew time, and insurance involved. We provide free written quotes."
  },
  {
    q: "Do I need to hire an Ottawa mover or a Vancouver mover for a cross-country move?",
    a: "You only need to hire one moving company. Prestige Moving handles the complete Ottawa-to-Vancouver move with our partner long-haul carrier network. Your belongings are loaded by our Ottawa crew, transported by a licensed interprovincial carrier, and delivered to your Vancouver address. You don't need to coordinate two separate companies."
  },
  {
    q: "What is the best time of year to move from Ottawa to Vancouver?",
    a: "Late September through November is considered the best window for Ottawa-to-Vancouver cross-country moves. Summer (May–August) sees the highest demand and pricing, and Ottawa's winters (December–February) can complicate departure logistics. The fall window offers better availability, often lower rates, and milder weather across the Prairies and BC's mountain passes."
  },
  {
    q: "Should I ship my car separately when moving from Ottawa to Vancouver?",
    a: "For most cross-country moves, shipping your vehicle separately via auto transport is more cost-effective and practical than driving it while coordinating your moving truck. Auto transport from Ottawa to Vancouver typically costs $1,000–$1,800 for a standard vehicle and takes 7–14 days. We can recommend reputable auto transport partners as part of your relocation planning."
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ottawa to Vancouver Moving Services",
  "provider": {
    "@type": "MovingCompany",
    "name": "Prestige Moving Ottawa",
    "telephone": "(613) 600-4000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "50 Colonnade Rd Unit 200B",
      "addressLocality": "Ottawa",
      "addressRegion": "ON",
      "postalCode": "K2E 7J6",
      "addressCountry": "CA"
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "500" }
  },
  "areaServed": [
    { "@type": "City", "name": "Ottawa" },
    { "@type": "City", "name": "Vancouver" }
  ],
  "description": "Professional Ottawa to Vancouver cross-country moving services. Licensed interprovincial movers, full insurance, transparent pricing. Canada-wide delivery 7–14 days.",
  "offers": { "@type": "Offer", "priceRange": "$3,000–$28,000" }
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

export default function OttawaToVancouverMovers() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Ottawa to Vancouver Movers | Prestige Moving – Cross-Country Moving Specialists</title>
        <meta name="description" content="Moving from Ottawa to Vancouver? Professional cross-country movers with 7–14 day delivery. Transparent pricing from $3,000. Licensed, fully insured. Free quote today." />
        <meta name="keywords" content="Ottawa to Vancouver movers, cross country movers Ottawa, Ottawa Vancouver moving company, moving from Ottawa to Vancouver, Ottawa Vancouver moving cost, interprovincial movers Ottawa BC" />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-to-vancouver-movers" />
        <meta property="og:title" content="Ottawa to Vancouver Movers | Prestige Moving" />
        <meta property="og:description" content="Cross-country moving from Ottawa to Vancouver. 7–14 day delivery, pricing from $3,000. Licensed & fully insured." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/ottawa-to-vancouver-movers" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#2a3a52]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, #C5A572 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C5A572 0%, transparent 50%)" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Ottawa to Vancouver Movers</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-5">
                <Star className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />
                <span className="text-[#C5A572] text-sm font-semibold">5.0 Stars · 500+ Reviews · Cross-Canada Specialists</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Ottawa to Vancouver<br />
                <span className="text-[#C5A572]">Cross-Country Movers</span>
              </h1>
              <p className="text-lg text-white/75 mb-8 leading-relaxed">
                Making the ultimate Canadian adventure — moving from Ottawa to Vancouver? Prestige Moving coordinates your complete coast-to-coast relocation. We handle loading in Ottawa, licensed cross-country transport, and delivery right to your new Vancouver home, with delivery windows of 7–14 business days.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["~4,600 km Route", "7–14 Day Delivery", "From $3,000", "Fully Licensed & Insured"].map(b => (
                  <div key={b} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                    <span className="text-white text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/book">
                  <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8955f] text-[#1A2332] font-bold px-8">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:6136004000">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8">
                    <Phone className="mr-2 h-5 w-5" /> (613) 600-4000
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: TruckIcon, label: "Cross-Canada Transport", sub: "Ottawa → Vancouver" },
                { icon: Shield, label: "Fully Insured Transit", sub: "Door-to-Door" },
                { icon: Clock, label: "7–14 Day Delivery", sub: "Guaranteed Window" },
                { icon: Star, label: "5.0 Google Rating", sub: "500+ Reviews" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-5 text-center">
                  <Icon className="h-8 w-8 text-[#C5A572] mx-auto mb-2" />
                  <div className="text-white font-bold text-sm">{label}</div>
                  <div className="text-white/60 text-xs">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TableOfContents items={TOC_ITEMS} />

        <div className="xl:ml-72 space-y-20">

          {/* Overview */}
          <section id="overview">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-[#C5A572]" /> Route Overview
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Distance", value: "~4,600 km", sub: "Ottawa to Vancouver" },
                { label: "Transit Time", value: "7–14 days", sub: "Door-to-door delivery" },
                { label: "Provinces", value: "6 Provinces", sub: "ON, MB, SK, AB, BC" },
              ].map(stat => (
                <div key={stat.label} className="bg-gradient-to-br from-[#1A2332] to-[#2a3a52] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#C5A572] mb-1">{stat.value}</div>
                  <div className="text-white font-semibold text-sm">{stat.label}</div>
                  <div className="text-white/50 text-xs mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>The Ottawa–Vancouver move is Canada's most iconic cross-country relocation — spanning approximately 4,600 kilometres through six provinces, traversing the flat Canadian Prairies, and cresting the Rocky Mountains before descending into the mild, rain-kissed Pacific coast of British Columbia. It's not just a move; it's a transformation of your lifestyle, climate, and community.</p>
              <p>As an interprovincial move governed by <a href="https://www.canada.ca/en/transport-canada/services/trucking.html" target="_blank" rel="noopener noreferrer">Transport Canada federal motor carrier regulations</a>, your moving company must hold a valid federal carrier authority to operate across provincial boundaries. Prestige Moving works with a vetted network of licensed long-haul carriers that specialize in Ottawa–Western Canada relocations, providing you with full-service, door-to-door cross-country moving with no middlemen.</p>
              <p>What makes an Ottawa–Vancouver move different from shorter long-distance moves is the logistics complexity: multiple provincial regulatory environments, mountain pass closures in winter, delivery window coordination, and the significant investment involved. We strongly recommend professional <Link href="/services/packing-services" className="text-[#C5A572] font-semibold underline">packing services</Link> for a cross-country move — items must be packed to withstand 4,600 km of road vibration across multiple climate zones.</p>
              <p>Many Ottawa–Vancouver clients also take advantage of our <Link href="/services/storage-solutions" className="text-[#C5A572] font-semibold underline">short-term storage solutions</Link> when their Ottawa lease ends before their Vancouver possession date — a very common situation when relocating cross-country.</p>
            </div>
          </section>

          {/* Cost */}
          <section id="cost">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-[#C5A572]" /> Cost Breakdown
            </h2>
            <p className="text-gray-600 mb-6 text-lg">Cross-country moving costs are calculated by cubic footage/weight and distance — not hourly rates. The estimates below are for a complete door-to-door move including loading, cross-Canada transit, and delivery in Vancouver.</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1A2332] text-white">
                    <th className="text-left px-5 py-4 font-semibold">Home Size</th>
                    <th className="text-left px-5 py-4 font-semibold">Delivery Window</th>
                    <th className="text-left px-5 py-4 font-semibold">Min Cost</th>
                    <th className="text-left px-5 py-4 font-semibold">Max Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {COST_TABLE.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-medium text-gray-900">{row.size}</td>
                      <td className="px-5 py-4 text-gray-600">{row.delivery}</td>
                      <td className="px-5 py-4 font-semibold text-green-700">{row.min}</td>
                      <td className="px-5 py-4 font-semibold text-[#1A2332]">{row.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-4 mb-6">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-amber-700 text-sm"><strong className="text-amber-800">Important:</strong> Cross-country pricing varies significantly based on exact volume (cubic footage), specific delivery address in Metro Vancouver, time of year, and whether packing services are included. These are estimates — request a free in-home or video assessment quote for an accurate price.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: Home, title: "Key Cost Factors", items: ["Total cubic footage of belongings", "Weight of shipment", "Packing service inclusion", "Delivery address in Greater Vancouver", "Season (summer is highest)", "Storage if needed in transit"] },
                { icon: CheckCircle2, title: "Always Included", items: ["Loading crew in Ottawa", "Licensed cross-Canada transport", "Door-to-door delivery in Vancouver", "Moving blankets & padding", "Basic transit insurance", "Itemized written quote"] },
                { icon: Package, title: "Optional Add-Ons", items: ["Professional packing service", "Unpacking at Vancouver end", "Ottawa storage (any duration)", "Full-value replacement insurance", "Auto transport coordination", "Piano or specialty items"] },
              ].map(({ icon: Icon, title, items }) => (
                <div key={title} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="h-5 w-5 text-[#C5A572]" />
                    <h3 className="font-bold text-gray-900">{title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#C5A572] mt-0.5">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* What's Included */}
          <section id="whats-included">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-[#C5A572]" /> What's Included
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Every Ottawa–Vancouver relocation managed by Prestige Moving begins with a detailed pre-move survey — either in-person at your Ottawa home or via a video call. This allows us to accurately assess your cubic footage, identify specialty items, and provide a binding written quote before your move date is confirmed.</p>
              <p>On loading day in Ottawa, our experienced crew arrives with sufficient packing materials, furniture blankets, floor runners, and the right-sized commercial truck. All items are inventoried on a detailed bill of lading — a legally required document for any interprovincial move. You receive a copy before the truck departs.</p>
              <p>Your shipment travels with our licensed long-haul partner carrier, with GPS tracking available on request. We provide a delivery window of 7–14 business days, and our dispatch team contacts you 24–48 hours before delivery at your Vancouver address. Our crew handles all unloading and, if requested, furniture placement in the correct rooms.</p>
              <p>For those moving into Vancouver's notoriously competitive housing market, the <a href="https://www.cmhc-schl.gc.ca/consumers/home-buying/buying-a-home" target="_blank" rel="noopener noreferrer">Canada Mortgage and Housing Corporation's homebuying guides</a> and <a href="https://www2.gov.bc.ca/gov/content/housing-tenancy" target="_blank" rel="noopener noreferrer">BC Housing</a> are excellent resources for navigating the Metro Vancouver rental and real estate landscape before your arrival.</p>
            </div>
          </section>

          {/* BC Tips */}
          <section id="bc-tips">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-[#C5A572]" /> What to Know About Moving to Vancouver
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <h3>BC Driver's Licence & ICBC</h3>
              <p>After arriving in BC, you have 90 days to exchange your Ontario driver's licence for a BC licence through <a href="https://www.icbc.com/driver-licensing/new-drivers/Pages/New-to-BC.aspx" target="_blank" rel="noopener noreferrer">ICBC (Insurance Corporation of British Columbia)</a>. Unlike Ontario where insurance is through private companies, BC auto insurance is government-run through ICBC. You'll also need to transfer your vehicle registration within 90 days.</p>
              <h3>BC Provincial Taxes</h3>
              <p>British Columbia uses a GST + PST system (not HST like Ontario). The provincial sales tax in BC is 7%, applied in addition to federal GST. Budget for this difference when settling in. Moving service invoices originating from Ontario are subject to Ontario HST.</p>
              <h3>Metro Vancouver Neighbourhoods</h3>
              <p>Greater Vancouver spans multiple distinct cities: Vancouver proper, Burnaby, Richmond, Surrey, North Vancouver, West Vancouver, Coquitlam, and more. Each has different rental/purchase price points and lifestyle characteristics. Downtown Vancouver and the West End feature dense high-rises, while East Van, Mount Pleasant, and Fraser are popular with young professionals. Suburbs like Coquitlam and Surrey offer more space at lower costs.</p>
              <h3>Vancouver's Cost of Living</h3>
              <p>Vancouver consistently ranks among Canada's most expensive cities. Average rent for a 1-bedroom in Metro Vancouver is $2,500–$3,500/month, while a 2-bedroom averages $3,000–$4,500. Factor this into your financial planning alongside the significant one-time cost of the cross-country move itself.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { area: "Downtown / West End", note: "High-rise condos, freight elevator essential" },
                { area: "East Van / Mount Pleasant", note: "Mix of homes & apartments, street parking available" },
                { area: "North Shore (North Van)", note: "Houses & townhouses, ferry if coming via Sea Island" },
                { area: "Surrey / Coquitlam", note: "More space, easier truck access, lower cost" },
              ].map(({ area, note }) => (
                <div key={area} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="font-bold text-gray-900 text-sm mb-1">{area}</div>
                  <div className="text-gray-500 text-xs">{note}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Ship vs Drive */}
          <section id="ship-vs-drive">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Truck className="h-8 w-8 text-[#C5A572]" /> Ship Your Belongings vs. Drive Them
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold">✓</span>
                  Hire a Moving Company (Recommended)
                </h3>
                <ul className="space-y-3">
                  {[
                    "Everything handled door-to-door",
                    "No physical exhaustion of cross-country drive",
                    "Professional packing reduces damage risk",
                    "GPS tracking of your shipment",
                    "Insurance coverage during transit",
                    "Free to fly ahead and start settling in",
                    "Best option for families with children or pets",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold">→</span>
                  DIY Rental Truck Move
                </h3>
                <ul className="space-y-3">
                  {[
                    "Lower upfront cost (but adds up quickly)",
                    "3–4 days of hard driving each way",
                    "Winter highway closures (Coquihalla, Rogers Pass)",
                    "Higher stress and physical toll",
                    "Limited insurance on rental trucks",
                    "Fuel cost alone: $1,500–$2,500 one-way",
                    "Works best for very small loads only",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="h-4 w-4 text-gray-400 shrink-0 mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section id="timeline">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Calendar className="h-8 w-8 text-[#C5A572]" /> Your Moving Timeline
            </h2>
            <div className="space-y-4">
              {[
                { time: "8–10 Weeks Before", title: "Plan & Book", desc: "Request a free assessment and written quote. Confirm Vancouver address and possession date. Book the move as early as possible — cross-country slots fill up fast, especially May–August." },
                { time: "4–6 Weeks Before", title: "Declutter & Decide", desc: "Cross-country moves are expensive — this is the best time to sell, donate, or leave behind items you won't need. Fewer cubic feet = significantly lower cost. Order packing supplies or book our packing service." },
                { time: "2–3 Weeks Before", title: "Pack & Prepare", desc: "Pack room by room, labelling clearly. Set up BC address for mail forwarding. Arrange vehicle transport if not driving your car. Confirm delivery window with Prestige Moving." },
                { time: "Loading Day (Ottawa)", title: "Ottawa Load-Out", desc: "Our crew arrives at your Ottawa home. All items are inventoried, padded, and loaded. You receive a copy of the bill of lading. The truck departs for the cross-Canada journey." },
                { time: "Days 1–14: Transit", title: "Cross-Canada Transport", desc: "Your belongings travel through Ontario, Manitoba, Saskatchewan, Alberta, and BC. Our dispatch team tracks the shipment and provides updates. We contact you 24–48 hrs before Vancouver delivery." },
                { time: "Delivery Day (Vancouver)", title: "Vancouver Delivery", desc: "Our delivery crew arrives at your Vancouver home within your agreed delivery window. All items are unloaded, placed in the correct rooms, and you complete a final inventory check." },
              ].map(({ time, title, desc }, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1A2332] text-white flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
                    {i < 5 && <div className="w-0.5 h-full bg-gray-200 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <div className="text-xs font-semibold text-[#C5A572] uppercase tracking-wider mb-1">{time}</div>
                    <div className="font-bold text-gray-900 mb-1">{title}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Checklist */}
          <section id="checklist">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Package className="h-8 w-8 text-[#C5A572]" /> Ottawa–Vancouver Pre-Move Checklist
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Before Your Move", items: ["Book cross-country movers 8–10 weeks out", "Declutter — less volume = major savings", "Set up mail forwarding via Canada Post", "Arrange BC driver's licence exchange plan (ICBC)", "Transfer or cancel Ottawa utilities", "Set up BC ICBC auto insurance", "Update CRA, bank, employer with new address", "Arrange auto transport if not driving car"] },
                { title: "Loading Day & Transit", items: ["Photograph all furniture conditions", "Keep all important documents with you", "Pack a 'first night' box (open first in Vancouver)", "Label all boxes clearly with room names", "Get copy of Bill of Lading from crew", "Keep Prestige Moving contact number handy", "Track delivery window — crew contacts you 24 hrs ahead"] },
              ].map(({ title, items }) => (
                <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
                  <ul className="space-y-3">
                    {items.map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-[#C5A572] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Related Moving Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/services/long-distance-moving", label: "Long-Distance Moving" },
                { href: "/services/packing-services", label: "Professional Packing" },
                { href: "/services/storage-solutions", label: "Storage Solutions" },
                { href: "/ottawa-to-toronto-movers", label: "Ottawa to Toronto Movers" },
                { href: "/ottawa-to-montreal-movers", label: "Ottawa to Montreal Movers" },
                { href: "/how-much-does-moving-cost-ottawa", label: "Ottawa Moving Cost Guide" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-[#C5A572] hover:bg-[#C5A572]/5 transition-colors group">
                  <ArrowRight className="h-4 w-4 text-[#C5A572] group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{label}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section id="cta" className="bg-gradient-to-br from-[#1A2332] to-[#2a3a52] rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Ready to Move from Ottawa to Vancouver?</h2>
            <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">The most important step is getting an accurate quote early. Request yours today — it's free, written, and binding.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8955f] text-[#1A2332] font-bold px-10">
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:6136004000">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10">
                  <Phone className="mr-2 h-5 w-5" /> (613) 600-4000
                </Button>
              </a>
            </div>
            <p className="text-white/40 text-sm mt-6">50 Colonnade Rd Unit 200B, Ottawa, ON · Mon–Sun 7am–8pm</p>
          </section>

        </div>
      </div>

      <SharedFooter />
    </>
  );
}
