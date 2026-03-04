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
  { id: "ns-tips", title: "Moving to Nova Scotia" },
  { id: "ns-cities", title: "NS Cities & Communities" },
  { id: "timeline", title: "Moving Timeline" },
  { id: "checklist", title: "Pre-Move Checklist" },
  { id: "faq", title: "FAQs" },
  { id: "cta", title: "Get a Quote" },
];

const COST_TABLE = [
  { size: "Bachelor / Studio", min: "$1,800", max: "$3,500",  delivery: "3–6 days" },
  { size: "1-Bedroom",         min: "$2,500", max: "$5,000",  delivery: "3–6 days" },
  { size: "2-Bedroom",         min: "$4,000", max: "$8,000",  delivery: "4–6 days" },
  { size: "3-Bedroom House",   min: "$6,000", max: "$12,000", delivery: "4–7 days" },
  { size: "4+ Bedroom House",  min: "$9,000", max: "$18,000", delivery: "5–8 days" },
];

const FAQS = [
  {
    q: "How long does it take to move from Ottawa to Nova Scotia?",
    a: "The drive from Ottawa to Halifax (Nova Scotia's capital) is approximately 1,500 km via the Trans-Canada through Quebec and New Brunswick. The drive takes about 14–15 hours. For rural NS destinations like the Annapolis Valley, Cape Breton, or the South Shore, distances may be 1,600–1,800 km. Moving truck delivery typically takes 3–6 business days depending on your destination and home size."
  },
  {
    q: "What are the most popular Nova Scotia destinations for Ottawa relocators?",
    a: "Halifax (and Dartmouth across the harbour) is by far the most popular destination for Ottawa transplants. The Annapolis Valley (Wolfville, Kentville, Windsor) is increasingly popular with retirees and remote workers for its wine country lifestyle. The South Shore (Lunenburg, Mahone Bay, Bridgewater) attracts those seeking coastal communities. Cape Breton Island offers stunning scenery and a very low cost of living."
  },
  {
    q: "Is Nova Scotia a good province to move to from Ottawa?",
    a: "Nova Scotia has become one of Canada's most in-demand destinations for Ontario relocators since 2020. Key draws include significantly lower housing costs (median home price ~$400,000 vs Ottawa's $600,000+), ocean proximity, a world-class food scene, lower population density, and a strong sense of community. Remote work has made the province accessible to anyone whose job isn't location-dependent."
  },
  {
    q: "What is the 3-month health coverage wait in Nova Scotia?",
    a: "New Nova Scotia residents face a 3-month waiting period before provincial Medicare (MSI — Medical Services Insurance) becomes active. Apply immediately upon establishing residency at any Access Nova Scotia Service Centre. During the waiting period, maintain your Ontario OHIP coverage if possible (OHIP typically covers 3 months after you leave Ontario) or arrange private bridge insurance through your employer."
  },
  {
    q: "Does my Ottawa mover need special licensing to deliver to rural Nova Scotia?",
    a: "Yes. All interprovincial moves — whether to Halifax or to rural Cape Breton — require a licensed carrier operating under Transport Canada federal carrier authority. This is especially important for rural NS deliveries, where some smaller moving companies subcontract to regional carriers without informing the client. Prestige Moving uses only vetted, licensed carrier partners for all Atlantic Canada deliveries."
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ottawa to Nova Scotia Moving Services",
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
    { "@type": "State", "name": "Nova Scotia" }
  ],
  "description": "Professional Ottawa to Nova Scotia moving services. Licensed interprovincial movers serving Halifax, Dartmouth, Cape Breton, Annapolis Valley & all NS communities.",
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

const NS_COMMUNITIES = [
  { name: "Halifax / Dartmouth", note: "Urban, fastest growing, all amenities" },
  { name: "Annapolis Valley", note: "Wine country, farms, rural lifestyle" },
  { name: "South Shore", note: "Lunenburg, Mahone Bay, coastal villages" },
  { name: "Cape Breton Island", note: "Stunning scenery, low cost of living" },
  { name: "Truro", note: "Central NS hub, commutable to Halifax" },
  { name: "Antigonish", note: "University town, friendly small city" },
];

export default function OttawaToNovaScotiaMovers() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Ottawa to Nova Scotia Movers | Halifax, Cape Breton & All NS | Prestige Moving</title>
        <meta name="description" content="Moving from Ottawa to Nova Scotia? Professional licensed movers serving Halifax, Annapolis Valley, Cape Breton & all NS communities. From $1,800, 3–6 day delivery. Free quote." />
        <meta name="keywords" content="Ottawa to Nova Scotia movers, Ottawa Nova Scotia moving company, moving from Ottawa to Nova Scotia, Ottawa NS moving cost, interprovincial movers Ottawa Atlantic Canada, Ottawa to Cape Breton movers" />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-to-nova-scotia-movers" />
        <meta property="og:title" content="Ottawa to Nova Scotia Movers | Prestige Moving" />
        <meta property="og:description" content="Professional licensed moving from Ottawa to Nova Scotia. Serving Halifax, Cape Breton, Annapolis Valley & all NS. From $1,800." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/ottawa-to-nova-scotia-movers" />
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
            <span className="text-white/80">Ottawa to Nova Scotia Movers</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-5">
                <Star className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />
                <span className="text-[#C5A572] text-sm font-semibold">5.0 Stars · 500+ Reviews · Atlantic Canada Specialists</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Ottawa to Nova Scotia<br />
                <span className="text-[#C5A572]">Moving Services</span>
              </h1>
              <p className="text-lg text-white/75 mb-8 leading-relaxed">
                Making the move to Canada's Ocean Playground? Prestige Moving delivers your belongings to any Nova Scotia community — from urban Halifax to rural Cape Breton — with transparent pricing, full insurance, and 3–6 day delivery.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["1,500–1,800 km", "3–6 Day Delivery", "From $1,800", "All NS Communities"].map(b => (
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
                { icon: TruckIcon, label: "All NS Communities", sub: "Halifax to Cape Breton" },
                { icon: Shield, label: "Fully Insured", sub: "WSIB Certified" },
                { icon: Clock, label: "3–6 Day Delivery", sub: "Fast Atlantic Route" },
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
                { label: "To Halifax", value: "~1,500 km", sub: "~14–15 hrs drive" },
                { label: "To Cape Breton", value: "~1,800 km", sub: "~17–18 hrs drive" },
                { label: "Delivery", value: "3–6 days", sub: "Province-wide" },
              ].map(stat => (
                <div key={stat.label} className="bg-gradient-to-br from-[#1A2332] to-[#2a3a52] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#C5A572] mb-1">{stat.value}</div>
                  <div className="text-white font-semibold text-sm">{stat.label}</div>
                  <div className="text-white/50 text-xs mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Nova Scotia — "Canada's Ocean Playground" — has captured the imagination of Ottawa residents in a powerful way. The province's combination of breathtaking ocean coastline, historic fishing villages, world-class food culture, affordable real estate, and genuine community warmth has made it one of Canada's fastest-growing destinations for interprovincial relocators.</p>
              <p>The Ottawa–Nova Scotia route travels approximately 1,500 km to Halifax (the provincial capital) via Trans-Canada through Quebec and New Brunswick. For destinations in the Annapolis Valley, South Shore, or Cape Breton, distances range from 1,600–1,800 km. The route passes through some of Canada's most scenic highway driving — particularly along New Brunswick's St. Lawrence coast and Nova Scotia's Cobequid Pass.</p>
              <p>As with all interprovincial moves, your carrier must hold <a href="https://www.canada.ca/en/transport-canada/services/trucking.html" target="_blank" rel="noopener noreferrer">Transport Canada federal carrier authority</a> for all provinces on the route (Ontario, Quebec, New Brunswick, Nova Scotia). Prestige Moving uses licensed long-haul carriers with current operating authority for all Atlantic Canada routes.</p>
              <p>Nova Scotia is home to a diverse range of communities — from Halifax's urban energy to the Annapolis Valley's agricultural calm, to Cape Breton's spectacular highlands. Whether you're moving to a downtown Halifax condo, a heritage home in Lunenburg, or a farmhouse in the Annapolis Valley, our team coordinates the full logistics of your relocation. Need <Link href="/services/packing-services" className="text-[#C5A572] font-semibold underline">professional packing services</Link> or <Link href="/services/storage-solutions" className="text-[#C5A572] font-semibold underline">interim storage</Link>? Both are available as part of your package.</p>
            </div>
          </section>

          <section id="cost">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-[#C5A572]" /> Cost Breakdown
            </h2>
            <p className="text-gray-600 mb-6 text-lg">Ottawa–Nova Scotia pricing is volume and distance-based. Deliveries to rural Cape Breton or far South Shore destinations may be slightly higher than Halifax-area pricing due to additional distance.</p>
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
              <p className="text-amber-700 text-sm"><strong className="text-amber-800">Note:</strong> Estimates include loading crew, licensed transport, and delivery. Rural NS destinations (Cape Breton, South Shore) may incur additional mileage. Packing and specialty items are separate. Request a free written quote specifying your exact NS destination.</p>
            </div>
          </section>

          <section id="whats-included">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-[#C5A572]" /> What's Included
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Every Ottawa–Nova Scotia move begins with a pre-move consultation — in person or via video — to assess your volume, note specialty items, and produce a binding written quote. On loading day, our Ottawa crew wraps all furniture, inventories everything on a bill of lading, and prepares your shipment for the Atlantic Canada journey.</p>
              <p>We use licensed interprovincial carriers for all NS routes, with direct-load delivery wherever possible. For rural destinations in Cape Breton, the South Shore, or Northern Nova Scotia, our carrier partners have established local delivery networks that provide last-mile delivery without compromising security or professionalism.</p>
              <p>At your Nova Scotia destination, our delivery team places all furniture in designated rooms, reassembles beds and disassembled furniture pieces, and completes a full inventory walkthrough with you before wrapping up. The <a href="https://novascotia.ca/sns/access/" target="_blank" rel="noopener noreferrer">Nova Scotia Access Service Centres</a> handle all post-move government registrations including driver's licence transfer, vehicle registration, and MSI (health insurance) enrollment.</p>
            </div>
          </section>

          <section id="ns-tips">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-[#C5A572]" /> What to Know About Moving to Nova Scotia
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <h3>Why So Many Ottawa Residents Are Choosing Nova Scotia</h3>
              <p>Nova Scotia's appeal to Ottawa residents is multifaceted. Housing is far more affordable — particularly outside Halifax. The province has no provincial land transfer tax (unlike Ontario's). The community feel is distinctive — neighbours know each other, towns have character, and the ocean is never far away. The <a href="https://novascotia.ca/immigration/" target="_blank" rel="noopener noreferrer">Nova Scotia Immigration and Population Growth office</a> actively supports interprovincial relocation and offers settlement resources for new residents.</p>
              <h3>Nova Scotia Health Coverage (MSI)</h3>
              <p>Nova Scotia has a 3-month waiting period for provincial Medicare (MSI). Apply immediately upon arrival at any Access Nova Scotia location. During the waiting period, you may be able to maintain Ontario OHIP coverage (OHIP follows you for approximately 3 months after leaving Ontario). Check your Ontario OHIP status and arrange bridge coverage if needed.</p>
              <h3>Driver's Licence Transfer</h3>
              <p>Transfer your Ontario driver's licence to a Nova Scotia licence within 90 days of establishing NS residency. Ontario's driving record is fully recognized — no road test required. Visit any Access Nova Scotia Service Centre with your Ontario licence and proof of NS residency.</p>
              <h3>Nova Scotia's 15% HST</h3>
              <p>Nova Scotia has the highest combined HST rate in Canada at 15% (5% federal + 10% provincial). Moving from Ontario (13% HST), you'll notice higher taxes on most purchases. Factor this into your post-move budget planning, though lower housing costs and the absence of land transfer tax often more than compensate.</p>
            </div>
          </section>

          <section id="ns-cities">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Home className="h-8 w-8 text-[#C5A572]" /> Nova Scotia Communities We Serve
            </h2>
            <p className="text-gray-600 mb-6">We deliver to every corner of Nova Scotia — from urban Halifax to remote Cape Breton. Here's a snapshot of the most popular destinations for Ottawa relocators.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {NS_COMMUNITIES.map(({ name, note }) => (
                <div key={name} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="font-bold text-gray-900 text-sm mb-1">{name}</div>
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
                { time: "4–6 Weeks Before", title: "Book & Plan", desc: "Request your free quote and specify your NS destination. Confirm home access at your NS address. Book packing services if needed. Plan mail forwarding." },
                { time: "2–3 Weeks Before", title: "Pack & Prepare", desc: "Pack by room and label clearly. Set up NS utilities. Update CRA, bank, employer with new NS address. Arrange vehicle transport or confirm driving plans." },
                { time: "Loading Day (Ottawa)", title: "Ottawa Load-Out", desc: "Our crew inventories, wraps and loads all items. You receive your bill of lading. The truck departs for Nova Scotia." },
                { time: "Days 3–6", title: "NS Delivery", desc: "Delivery to your Nova Scotia address. Furniture placed in designated rooms, beds reassembled, final walkthrough completed." },
                { time: "After Moving", title: "Settle In", desc: "Apply for MSI at Access Nova Scotia. Transfer NS driver's licence. Update vehicle registration. Enjoy your new life by the ocean!" },
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
                { title: "Before Your Move", items: ["Book movers 4–6 weeks in advance", "Apply for NS MSI (Medicare) upon arrival", "Plan NS driver's licence transfer (90 days)", "Set up Canada Post mail forwarding", "Cancel Ottawa utilities, set up NS utilities", "Update employer, bank, CRA with NS address"] },
                { title: "Moving Day", items: ["Photograph furniture before loading", "Keep important documents with you", "Pack a 'first night' bag — leave it accessible", "Label all boxes with destination room", "Collect your copy of the Bill of Lading", "Do final walkthrough of Ottawa home"] },
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
                { href: "/ottawa-to-halifax-movers", label: "Ottawa to Halifax Movers" },
                { href: "/ottawa-to-new-brunswick-movers", label: "Ottawa to New Brunswick Movers" },
                { href: "/services/long-distance-moving", label: "Long-Distance Moving" },
                { href: "/services/packing-services", label: "Professional Packing" },
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

          <section id="cta" className="bg-gradient-to-br from-[#1A2332] to-[#2a3a52] rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Ready to Move from Ottawa to Nova Scotia?</h2>
            <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">Get your free written quote today. We serve every Nova Scotia community — Halifax to Cape Breton.</p>
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
