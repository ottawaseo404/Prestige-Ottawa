import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, TruckIcon, Shield, Clock, Star, ArrowRight, CheckCircle2,
  MapPin, ChevronDown, DollarSign, Calendar, Package, AlertCircle, Home
} from "lucide-react";

const TOC_ITEMS = [
  { id: "overview", title: "Route Overview" },
  { id: "cost", title: "Cost Breakdown" },
  { id: "whats-included", title: "What's Included" },
  { id: "halifax-tips", title: "Moving to Halifax" },
  { id: "timeline", title: "Moving Timeline" },
  { id: "checklist", title: "Pre-Move Checklist" },
  { id: "faq", title: "FAQs" },
  { id: "cta", title: "Get a Quote" },
];

const COST_TABLE = [
  { size: "Bachelor / Studio", min: "$1,800", max: "$3,500",  delivery: "3–5 days" },
  { size: "1-Bedroom",         min: "$2,500", max: "$5,000",  delivery: "3–5 days" },
  { size: "2-Bedroom",         min: "$4,000", max: "$8,000",  delivery: "4–6 days" },
  { size: "3-Bedroom House",   min: "$6,000", max: "$12,000", delivery: "4–6 days" },
  { size: "4+ Bedroom House",  min: "$9,000", max: "$18,000", delivery: "5–7 days" },
];

const FAQS = [
  {
    q: "How far is Ottawa from Halifax and how long does the move take?",
    a: "Ottawa to Halifax is approximately 1,500 km via the Trans-Canada Highway through Quebec and New Brunswick. The drive takes about 14–15 hours. Moving truck delivery typically takes 3–5 business days for most home sizes, making it one of the faster long-distance Atlantic Canada routes."
  },
  {
    q: "How much does it cost to move from Ottawa to Halifax?",
    a: "Ottawa to Halifax moving costs range from approximately $1,800 for a studio apartment to $18,000+ for a large 4-bedroom home. Pricing is based on total volume, weight, and access conditions at both ends. Halifax's mix of historic row houses, peninsular neighbourhoods, and suburban communities affects unloading logistics and pricing."
  },
  {
    q: "Is Halifax a good place to move from Ottawa?",
    a: "Halifax has become one of Canada's most popular relocation destinations for Ontario residents, particularly since 2020. The city offers a unique blend of urban amenities, ocean proximity, a vibrant food and arts scene, and housing prices that remain significantly lower than Ottawa's — with average home prices of approximately $450,000–$550,000 compared to Ottawa's $600,000+."
  },
  {
    q: "How do I transfer my Ontario driver's licence to Nova Scotia?",
    a: "New Nova Scotia residents must transfer their Ontario driver's licence to a Nova Scotia licence within 90 days of establishing residency. Visit a <a href='https://novascotia.ca/sns/access/registries-deeds-probate-court/' rel='noopener noreferrer'>Access Nova Scotia Registry</a> location with your Ontario licence and proof of NS residency. No road test is required for most Ontario licence classes."
  },
  {
    q: "What is the Nova Scotia HST rate?",
    a: "Nova Scotia charges a combined HST (Harmonized Sales Tax) of 15% — the highest in Canada, combining the 5% federal GST with a 10% provincial component. This is notably higher than Ontario's 13% HST. Factor this into your cost-of-living budget when planning your Halifax relocation."
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ottawa to Halifax Moving Services",
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
    { "@type": "City", "name": "Halifax" }
  ],
  "description": "Professional Ottawa to Halifax moving services. Licensed interprovincial movers, 3–5 day delivery, pricing from $1,800. Fully insured.",
  "offers": { "@type": "Offer", "priceRange": "$1,800–$18,000" }
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

export default function OttawaToHalifaxMovers() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Ottawa to Halifax Movers | Prestige Moving – Licensed Interprovincial Movers</title>
        <meta name="description" content="Moving from Ottawa to Halifax? Professional licensed movers with 3–5 day delivery. Pricing from $1,800, fully insured, transparent quotes. Call (613) 600-4000 today." />
        <meta name="keywords" content="Ottawa to Halifax movers, Ottawa Halifax moving company, moving from Ottawa to Halifax, Ottawa Halifax moving cost, interprovincial movers Ottawa Nova Scotia, Halifax movers from Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-to-halifax-movers" />
        <meta property="og:title" content="Ottawa to Halifax Movers | Prestige Moving" />
        <meta property="og:description" content="Professional interprovincial moving from Ottawa to Halifax. 3–5 day delivery, pricing from $1,800." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/ottawa-to-halifax-movers" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />

      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#2a3a52]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, #C5A572 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C5A572 0%, transparent 50%)" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Ottawa to Halifax Movers</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-5">
                <Star className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />
                <span className="text-[#C5A572] text-sm font-semibold">5.0 Stars · 500+ Reviews · Atlantic Canada Specialists</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Ottawa to Halifax<br />
                <span className="text-[#C5A572]">Moving Services</span>
              </h1>
              <p className="text-lg text-white/75 mb-8 leading-relaxed">
                Heading to Halifax? Prestige Moving provides professional, fully licensed interprovincial moving from Ottawa to Nova Scotia's vibrant capital city. Fast 3–5 day delivery, transparent pricing, and no hidden fees.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["~1,500 km", "3–5 Day Delivery", "From $1,800", "Licensed & Insured"].map(b => (
                  <div key={b} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                    <span className="text-white text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/book"><Button size="lg" className="bg-[#C5A572] hover:bg-[#b8955f] text-[#1A2332] font-bold px-8">Get Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                <a href="tel:6136004000"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8"><Phone className="mr-2 h-5 w-5" /> (613) 600-4000</Button></a>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: TruckIcon, label: "Direct Load", sub: "Ottawa to Halifax" },
                { icon: Shield, label: "Fully Insured", sub: "WSIB Certified" },
                { icon: Clock, label: "3–5 Day Delivery", sub: "Fast Atlantic Route" },
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TableOfContents items={TOC_ITEMS} />

        <div className="xl:ml-72 space-y-20">

          <section id="overview">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-[#C5A572]" /> Route Overview
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Distance", value: "~1,500 km", sub: "Ottawa to Halifax" },
                { label: "Drive Time", value: "~14–15 hrs", sub: "Via Trans-Canada" },
                { label: "Delivery", value: "3–5 days", sub: "Door-to-door" },
              ].map(stat => (
                <div key={stat.label} className="bg-gradient-to-br from-[#1A2332] to-[#2a3a52] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#C5A572] mb-1">{stat.value}</div>
                  <div className="text-white font-semibold text-sm">{stat.label}</div>
                  <div className="text-white/50 text-xs mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Ottawa to Halifax is a natural relocation corridor — approximately 1,500 km along the Trans-Canada Highway, passing through Quebec and New Brunswick before arriving in Nova Scotia. The route is well-maintained year-round, though winter driving (November–March) through New Brunswick and northern Nova Scotia requires weather monitoring.</p>
              <p>Halifax has emerged as one of Canada's most desirable cities for Ontario relocators. Its combination of Atlantic ocean proximity, a world-class university presence (Dalhousie, SMU, NSCAD), a thriving food and hospitality scene, and housing that remains far more affordable than Toronto or Ottawa has made it a destination of choice — particularly for remote workers who can work from anywhere.</p>
              <p>The city itself is compact and walkable, with distinct neighbourhoods: the North End (young professionals, creative class), South End (universities, heritage homes), Dartmouth (across the harbour, growing fast), and Clayton Park/Bayers Lake (suburban families). Our Halifax delivery team is familiar with all areas, including the tricky downtown streets and heritage building access requirements.</p>
              <p>For clients moving into Halifax apartments or condos, elevator booking and parking permit coordination is important — particularly in the North End, Spring Garden area, and downtown. We handle this as standard procedure. Our <Link href="/services/packing-services" className="text-[#C5A572] font-semibold underline">professional packing service</Link> is strongly recommended for the Ottawa–Halifax distance to protect your belongings through the full transit journey.</p>
            </div>
          </section>

          <section id="cost">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-[#C5A572]" /> Cost Breakdown
            </h2>
            <p className="text-gray-600 mb-6 text-lg">Ottawa–Halifax pricing is volume and distance-based. The estimates below cover complete door-to-door moves including loading in Ottawa and delivery to your Halifax address.</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1A2332] text-white">
                    <th className="text-left px-5 py-4 font-semibold">Home Size</th>
                    <th className="text-left px-5 py-4 font-semibold">Delivery</th>
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
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-4">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-amber-700 text-sm"><strong className="text-amber-800">Note:</strong> All-in estimates covering loading, transport, and delivery. Packing services, specialty items, and storage are separate. Request a free written quote for your specific move.</p>
            </div>
          </section>

          <section id="whats-included">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-[#C5A572]" /> What's Included
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Every Ottawa–Halifax move with Prestige Moving uses direct-load transport where possible: your belongings are loaded in Ottawa and delivered to Halifax on the same truck or through our Halifax carrier partner — without unnecessary transfers that increase handling risk. All items are inventoried on a bill of lading before departure.</p>
              <p>Our Ottawa loading crew brings professional moving blankets, plastic wrap, furniture dollies, and floor runners to protect both your belongings and your Ottawa home during load-out. At your Halifax destination, the delivery crew places all furniture in designated rooms, reassembles beds, and completes a final walkthrough inventory check with you.</p>
              <p>For clients moving into older Halifax homes — particularly Heritage Properties in the North End, Hydrostone district, or the South End — we are experienced with navigating narrow doorways, tight staircases, and historic building restrictions. The <a href="https://novascotia.ca/sns/access/" target="_blank" rel="noopener noreferrer">Nova Scotia Access Service Centres</a> are your go-to for all post-move registration needs.</p>
            </div>
          </section>

          <section id="halifax-tips">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-[#C5A572]" /> What to Know About Moving to Halifax
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <h3>Halifax Housing Market</h3>
              <p>Average home prices in Halifax Regional Municipality range from approximately $380,000 for a starter home to $600,000+ for larger properties in premium South End locations. Dartmouth, across the harbour, offers similar urban amenities at 10–20% lower prices. Compared to Ottawa's heated market, Halifax still represents significant value — particularly for buyers coming from Ontario.</p>
              <h3>NS Driver's Licence Transfer</h3>
              <p>New Nova Scotia residents must convert their Ontario licence within 90 days. Visit any <a href="https://novascotia.ca/sns/access/" target="_blank" rel="noopener noreferrer">Access Nova Scotia Service Centre</a>. You'll need your Ontario licence, proof of NS residency, and the transfer fee. Your Ontario driving record is recognized, so no road test is required.</p>
              <h3>Nova Scotia Health Services</h3>
              <p>Nova Scotia has a 3-month waiting period for provincial health coverage (MSI — Medical Services Insurance). Apply immediately upon arrival. Maintain Ontario OHIP coverage during the waiting period if possible, or arrange private bridge coverage through an insurer.</p>
              <h3>The Halifax Explosion & Heritage Buildings</h3>
              <p>Halifax has some of Canada's most significant historic districts, including the Hydrostone — rebuilt after the 1917 Halifax Explosion — and numerous heritage properties across the peninsula. Moving into these properties requires care and experience, as doorways, ceilings, and staircases often don't accommodate standard modern furniture. Our crew will advise during your pre-move assessment.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { area: "North End", note: "Trendy, creative, narrow streets" },
                { area: "South End", note: "Universities, heritage homes" },
                { area: "Dartmouth", note: "Affordable, growing fast" },
                { area: "Clayton Park / Bedford", note: "Suburban, family-friendly" },
              ].map(({ area, note }) => (
                <div key={area} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="font-bold text-gray-900 text-sm mb-1">{area}</div>
                  <div className="text-gray-500 text-xs">{note}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="timeline">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Calendar className="h-8 w-8 text-[#C5A572]" /> Your Moving Timeline
            </h2>
            <div className="space-y-4">
              {[
                { time: "4–6 Weeks Before", title: "Book & Plan", desc: "Request your free quote. Confirm your Halifax address and building access requirements. Book packing services if needed. Plan mail forwarding and utility setup in NS." },
                { time: "2–3 Weeks Before", title: "Pack & Prepare", desc: "Pack systematically by room. Label clearly. Update CRA, bank, employer with new NS address. Arrange NS utilities." },
                { time: "Loading Day", title: "Ottawa Load-Out", desc: "Our crew inventories, wraps, and loads all items. You receive your bill of lading before the truck departs for Halifax." },
                { time: "Days 3–5", title: "Halifax Delivery", desc: "Delivery to your Halifax address. Furniture placed in designated rooms, beds reassembled, final inventory walkthrough completed." },
                { time: "After Moving", title: "Settle In", desc: "Register for MSI (NS Health). Transfer NS driver's licence at Access Nova Scotia. Update vehicle registration. Enjoy Halifax!" },
              ].map(({ time, title, desc }, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1A2332] text-white flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
                    {i < 4 && <div className="w-0.5 h-full bg-gray-200 mt-2" />}
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

          <section id="checklist">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Package className="h-8 w-8 text-[#C5A572]" /> Pre-Move Checklist
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Before Your Move", items: ["Book movers 4–6 weeks in advance", "Apply for NS MSI immediately upon arrival", "Plan NS driver's licence transfer (90 days)", "Update vehicle registration in NS (3 months)", "Set up Canada Post mail forwarding", "Cancel Ottawa utilities, set up NS utilities"] },
                { title: "Moving Day", items: ["Photograph furniture before loading", "Keep all documents with you", "Pack a first-night essentials bag", "Label boxes by destination room", "Collect your Bill of Lading copy", "Final walkthrough of Ottawa home"] },
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

          <section id="faq">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors" aria-expanded={openFaq === i}>
                    <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-[#C5A572] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Related Moving Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/ottawa-to-nova-scotia-movers", label: "Ottawa to Nova Scotia Movers" },
                { href: "/ottawa-to-new-brunswick-movers", label: "Ottawa to New Brunswick Movers" },
                { href: "/services/long-distance-moving", label: "Long-Distance Moving" },
                { href: "/services/packing-services", label: "Professional Packing" },
                { href: "/ottawa-to-toronto-movers", label: "Ottawa to Toronto Movers" },
                { href: "/how-much-does-moving-cost-ottawa", label: "Ottawa Moving Cost Guide" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-[#C5A572] hover:bg-[#C5A572]/5 transition-colors group">
                  <ArrowRight className="h-4 w-4 text-[#C5A572] group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{label}</span>
                </Link>
              ))}
            </div>
          </section>

          <section id="cta" className="bg-gradient-to-br from-[#1A2332] to-[#2a3a52] rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Ready to Move from Ottawa to Halifax?</h2>
            <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">Get your free written quote today. Pricing confirmed within hours — no obligation.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] hover:bg-[#b8955f] text-[#1A2332] font-bold px-10">Get Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10"><Phone className="mr-2 h-5 w-5" /> (613) 600-4000</Button></a>
            </div>
            <p className="text-white/40 text-sm mt-6">50 Colonnade Rd Unit 200B, Ottawa, ON · Mon–Sun 7am–8pm</p>
          </section>

        </div>
      </div>

      <SharedFooter />
    </>
  );
}
