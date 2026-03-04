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
  { id: "nb-tips", title: "Moving to New Brunswick" },
  { id: "timeline", title: "Moving Timeline" },
  { id: "checklist", title: "Pre-Move Checklist" },
  { id: "faq", title: "FAQs" },
  { id: "cta", title: "Get a Quote" },
];

const COST_TABLE = [
  { size: "Bachelor / Studio", min: "$1,500", max: "$3,000", delivery: "2–4 days" },
  { size: "1-Bedroom",         min: "$2,200", max: "$4,500", delivery: "2–4 days" },
  { size: "2-Bedroom",         min: "$3,500", max: "$7,000", delivery: "3–5 days" },
  { size: "3-Bedroom House",   min: "$5,000", max: "$10,000", delivery: "3–5 days" },
  { size: "4+ Bedroom House",  min: "$8,000", max: "$15,000", delivery: "4–6 days" },
];

const FAQS = [
  {
    q: "How long does an Ottawa to New Brunswick move take?",
    a: "The drive from Ottawa to New Brunswick's main cities ranges from approximately 1,000 km to Moncton (~9.5 hrs), 1,100 km to Fredericton (~10.5 hrs), and 1,200 km to Saint John (~11 hrs). Moving truck delivery typically takes 2–5 business days. For most home sizes, same-week delivery is achievable."
  },
  {
    q: "How much does it cost to move from Ottawa to New Brunswick?",
    a: "Ottawa to New Brunswick moving costs range from approximately $1,500 for a studio to $15,000+ for a 4-bedroom home. Unlike cross-Canada moves, Ottawa–NB distances are manageable enough that same-truck delivery (no transfer) is standard, keeping costs lower than longer routes. Exact pricing depends on volume, destination city, and access at both addresses."
  },
  {
    q: "Does my move cross Quebec — does that affect anything?",
    a: "Yes, the most direct route from Ottawa to New Brunswick passes through Quebec (via Autoroute 20/Trans-Canada through the St. Lawrence corridor). Your moving company must hold valid interprovincial carrier authority for all three provinces (Ontario, Quebec, New Brunswick). Prestige Moving's carrier partners hold all required federal and provincial operating authorities."
  },
  {
    q: "What are New Brunswick's main cities for moving?",
    a: "New Brunswick's largest cities are Moncton (the economic hub and fastest-growing city), Fredericton (the provincial capital and university city), and Saint John (the port city and industrial centre). Moncton is increasingly popular with Ontario relocators due to its bilingual environment, affordable housing, and strong job market. We serve all New Brunswick communities."
  },
  {
    q: "Is New Brunswick a bilingual province?",
    a: "Yes — New Brunswick is Canada's only officially bilingual province, with both English and French as official languages. Approximately 33% of the population is Francophone, concentrated mainly in the north and east (Moncton, Edmundston, Campbellton). Moncton itself is highly bilingual. This cultural richness is one of the province's distinctive qualities."
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ottawa to New Brunswick Moving Services",
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
    { "@type": "State", "name": "New Brunswick" }
  ],
  "description": "Professional Ottawa to New Brunswick moving services. Licensed interprovincial movers serving Moncton, Fredericton, Saint John. 2–5 day delivery, pricing from $1,500.",
  "offers": { "@type": "Offer", "priceRange": "$1,500–$15,000" }
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

export default function OttawaToNewBrunswickMovers() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Ottawa to New Brunswick Movers | Moncton, Fredericton, Saint John | Prestige Moving</title>
        <meta name="description" content="Moving from Ottawa to New Brunswick? Professional licensed movers serving Moncton, Fredericton & Saint John. Pricing from $1,500 with 2–5 day delivery. Free quote today." />
        <meta name="keywords" content="Ottawa to New Brunswick movers, Ottawa Moncton movers, Ottawa Fredericton movers, Ottawa Saint John movers, interprovincial movers Ottawa NB, moving from Ottawa to New Brunswick" />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-to-new-brunswick-movers" />
        <meta property="og:title" content="Ottawa to New Brunswick Movers | Prestige Moving" />
        <meta property="og:description" content="Moving from Ottawa to Moncton, Fredericton or Saint John? Licensed interprovincial movers from $1,500." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/ottawa-to-new-brunswick-movers" />
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
            <span className="text-white/80">Ottawa to New Brunswick Movers</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-5">
                <Star className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />
                <span className="text-[#C5A572] text-sm font-semibold">5.0 Stars · 500+ Reviews · Licensed & Insured</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Ottawa to New Brunswick<br />
                <span className="text-[#C5A572]">Moving Services</span>
              </h1>
              <p className="text-lg text-white/75 mb-8 leading-relaxed">
                Relocating to Moncton, Fredericton, or Saint John? Prestige Moving provides professional, licensed interprovincial moving from Ottawa to all New Brunswick communities — with fast 2–5 day delivery and transparent pricing.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["1,000–1,200 km", "2–5 Day Delivery", "From $1,500", "All NB Cities Covered"].map(b => (
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
                { icon: TruckIcon, label: "Moncton, Fredericton", sub: "Saint John & all NB" },
                { icon: Shield, label: "Fully Insured", sub: "WSIB Certified" },
                { icon: Clock, label: "2–5 Day Delivery", sub: "Fast East-Coast Transit" },
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
                { label: "To Moncton", value: "~1,000 km", sub: "~9.5 hrs drive" },
                { label: "To Fredericton", value: "~1,100 km", sub: "~10.5 hrs drive" },
                { label: "Delivery Time", value: "2–5 days", sub: "Door-to-door" },
              ].map(stat => (
                <div key={stat.label} className="bg-gradient-to-br from-[#1A2332] to-[#2a3a52] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#C5A572] mb-1">{stat.value}</div>
                  <div className="text-white font-semibold text-sm">{stat.label}</div>
                  <div className="text-white/50 text-xs mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>The Ottawa–New Brunswick corridor is one of Atlantic Canada's most active relocation routes. As housing costs in Ontario continue rising, more and more Ottawa families and professionals are discovering what New Brunswick has long offered: affordable homes, quality of life, natural beauty, and a slower pace — all within a day's drive of Ontario.</p>
              <p>The most direct route passes through Quebec via the Trans-Canada (Highway 417 East, then Autoroute 20 through the St. Lawrence Valley) before entering New Brunswick near Rivière-du-Loup. This route is generally clear year-round, though winter weather monitoring is advisable between November and April. The drive from Ottawa to Moncton takes approximately 9.5 hours; to Fredericton, about 10.5 hours; and to Saint John, approximately 11 hours.</p>
              <p>Because the distance is shorter than cross-country routes, Ottawa–NB moves are often completed as direct-load shipments — meaning your belongings travel on the same truck from pickup to delivery, rather than being transferred between multiple vehicles. This reduces handling risk and speeds up delivery.</p>
              <p>New Brunswick also offers one of Canada's most active relocation incentives: the <a href="https://www2.gnb.ca/content/gnb/en/departments/population-growth.html" target="_blank" rel="noopener noreferrer">NB Population Growth Division</a> actively recruits Ontario residents and has various programs to support settlement. If you're moving for work, the province's <Link href="/services/long-distance-moving" className="text-[#C5A572] font-semibold underline">long-distance moving</Link> specialists can advise on timing and logistics to align with your start date.</p>
            </div>
          </section>

          <section id="cost">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-[#C5A572]" /> Cost Breakdown
            </h2>
            <p className="text-gray-600 mb-6 text-lg">Ottawa to New Brunswick is priced as a long-distance move based on volume and distance. Compared to cross-Canada routes, costs are more moderate given the shorter distance.</p>
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
              <p className="text-amber-700 text-sm"><strong className="text-amber-800">Note:</strong> Pricing includes licensed truck transport and loading/unloading crew. Packing services and specialty items are separate. Request a free written quote for your specific home size and NB destination.</p>
            </div>
          </section>

          <section id="whats-included">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-[#C5A572]" /> What's Included
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Prestige Moving's Ottawa–New Brunswick service uses direct-load shipping wherever possible: your belongings are loaded in Ottawa by our crew and delivered to your New Brunswick address without transfer to another carrier. This means faster delivery, less handling, and reduced risk of damage or loss.</p>
              <p>Our Ottawa crew inventories every item on an itemized bill of lading, wraps all furniture in moving blankets, and uses proper strapping to secure the load for the highway journey. At your New Brunswick destination, we unload everything, place furniture in designated rooms, and reassemble beds and large disassembled pieces.</p>
              <p>If you need <Link href="/services/packing-services" className="text-[#C5A572] font-semibold underline">professional packing</Link> in Ottawa before your move, or <Link href="/services/storage-solutions" className="text-[#C5A572] font-semibold underline">storage</Link> if there's a gap between your Ottawa departure and NB arrival date, both are available. The <a href="https://www.ontario.ca/page/consumer-protection-ontario" target="_blank" rel="noopener noreferrer">Ontario Consumer Protection Act</a> requires moving companies to provide written estimates for all long-distance moves — and we always do.</p>
            </div>
          </section>

          <section id="nb-tips">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-[#C5A572]" /> What to Know About Moving to New Brunswick
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <h3>Affordable Housing Compared to Ottawa</h3>
              <p>The average home price in Moncton is approximately $300,000–$380,000 compared to Ottawa's $600,000+. New Brunswick's housing market remains one of Canada's most accessible, making it a compelling destination for first-time buyers, families, and retirees priced out of Ontario. Rental markets are similarly more affordable, with 2-bedroom apartments averaging $1,200–$1,800/month.</p>
              <h3>Driver's Licence & Vehicle Registration in NB</h3>
              <p>New Brunswick residents must transfer their Ontario driver's licence to a New Brunswick licence through Service NB within 90 days of establishing residency. Visit a <a href="https://www.snb.ca/e/1000/1000-0-e.asp" target="_blank" rel="noopener noreferrer">Service NB location</a> with your Ontario licence and proof of NB residency. Vehicle registration must also be updated within the same window.</p>
              <h3>NB Health Care</h3>
              <p>New Brunswick has a 3-month waiting period for provincial health coverage (Medicare NB) for new residents. During this period, arrange bridge health coverage through your employer or a private insurer. You can register for NB Medicare immediately upon arrival at a Service NB office.</p>
              <h3>Why Moncton is Growing Fast</h3>
              <p>Moncton is the fastest-growing city in Atlantic Canada and the economic hub of New Brunswick. Its central location (within a day's drive of all major Atlantic cities), bilingual workforce, growing tech sector, and affordable cost of living make it extremely popular with Ontario relocators. The <a href="https://www.greater-moncton.ca/" target="_blank" rel="noopener noreferrer">Greater Moncton Chamber of Commerce</a> actively supports new business settlement.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { area: "Moncton", note: "Economic hub, fastest growing, bilingual" },
                { area: "Fredericton", note: "Capital city, university town, government sector" },
                { area: "Saint John", note: "Port city, industrial centre, heritage downtown" },
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
                { time: "4–6 Weeks Before", title: "Book & Confirm", desc: "Request your free quote and confirm your NB address and move-in date. Book packing services if needed. Plan your Canada Post mail forwarding." },
                { time: "2–3 Weeks Before", title: "Pack & Prepare", desc: "Pack systematically. Update your address with your bank, employer, and CRA. Arrange NB utilities setup (electricity through NB Power, internet/cable providers)." },
                { time: "Loading Day (Ottawa)", title: "Ottawa Load-Out", desc: "Our crew arrives, wraps and inventories your belongings, and loads the truck. You receive your bill of lading. The truck departs for New Brunswick." },
                { time: "Days 2–5", title: "NB Delivery", desc: "Direct delivery to your New Brunswick address. Furniture is placed in designated rooms and beds are reassembled." },
                { time: "After Moving", title: "Settle In", desc: "Register for NB Medicare at Service NB. Transfer your Ontario driver's licence. Update vehicle registration. Explore your new community!" },
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
                { title: "Before Your Move", items: ["Book movers 4–6 weeks in advance", "Set up Canada Post mail forwarding", "Register for NB Medicare at Service NB", "Plan NB driver's licence transfer (90 days)", "Set up NB utilities (NB Power, internet)", "Update employer, bank, CRA with new address"] },
                { title: "Moving Day", items: ["Photograph furniture condition before loading", "Keep important documents with you", "Pack an essentials overnight bag", "Label all boxes by destination room", "Collect your copy of the Bill of Lading", "Do a final walkthrough of Ottawa home"] },
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
                { href: "/ottawa-to-nova-scotia-movers", label: "Ottawa to Nova Scotia Movers" },
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
            <h2 className="text-3xl font-bold text-white mb-3">Ready to Move from Ottawa to New Brunswick?</h2>
            <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">Get your free written quote today. We'll confirm pricing within hours — no obligation.</p>
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
