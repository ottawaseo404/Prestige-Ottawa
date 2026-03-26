import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, TruckIcon, Shield, Clock, Star, ArrowRight, CheckCircle2,
  MapPin, ChevronDown, DollarSign, Calendar, Package, AlertCircle,
  Home, Building2, Users, Info
} from "lucide-react";

const TOC_ITEMS = [
  { id: "overview", title: "Route Overview" },
  { id: "cost", title: "Cost Breakdown" },
  { id: "whats-included", title: "What's Included" },
  { id: "montreal-tips", title: "Moving to Montreal" },
  { id: "timeline", title: "Moving Timeline" },
  { id: "checklist", title: "Pre-Move Checklist" },
  { id: "faq", title: "FAQs" },
  { id: "cta", title: "Get a Quote" },
];

const COST_TABLE = [
  { size: "Bachelor / Studio", min: "$900",  max: "$1,800",  hours: "4–6 hrs" },
  { size: "1-Bedroom",         min: "$1,200", max: "$2,500",  hours: "5–7 hrs" },
  { size: "2-Bedroom",         min: "$2,000", max: "$4,000",  hours: "7–10 hrs" },
  { size: "3-Bedroom House",   min: "$2,800", max: "$6,500",  hours: "9–13 hrs" },
  { size: "4+ Bedroom House",  min: "$4,500", max: "$10,000", hours: "12–18 hrs" },
];

const FAQS = [
  {
    q: "How long does an Ottawa to Montreal move take?",
    a: "The drive from Ottawa to Montreal is approximately 196 km and takes about 2 hours without traffic. Your total moving day will typically span 8–14 hours including loading, transit, and unloading. For larger homes (3-bedroom+), we may complete loading one day and delivery the next morning."
  },
  {
    q: "Do I need a Quebec-licensed moving company?",
    a: "Yes. The Commission des droits de la personne et des droits de la jeunesse (CDPDJ) and the Commission des transports du Québec (CTQ) regulate commercial carriers in Quebec. Prestige Moving is fully licensed and insured to operate interprovincial moves between Ontario and Quebec under federal CRTC jurisdiction."
  },
  {
    q: "What is July 1 and how does it affect my Montreal move?",
    a: "July 1 (Canada Day) is known as Montreal's 'Moving Day' — the traditional end-of-lease date for the majority of Quebec rental agreements. Demand for movers spikes enormously around this date. We strongly recommend booking 6–8 weeks in advance if your move falls between June 15 and July 5."
  },
  {
    q: "Is my move covered by insurance between Ottawa and Montreal?",
    a: "Yes. All Prestige Moving interprovincial moves include basic liability coverage. We also offer additional full-value replacement protection for high-value items. Our team is fully WSIB certified and carries comprehensive commercial liability insurance."
  },
  {
    q: "Are Ottawa to Montreal moving costs subject to Quebec taxes?",
    a: "The billing and contract originate in Ontario where HST (13%) applies. Quebec has its own GST+QST structure, but since Prestige Moving is an Ontario-registered company originating the service in Ottawa, Ontario HST rules apply to your invoice."
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ottawa to Montreal Moving Services",
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
    { "@type": "City", "name": "Montreal" }
  ],
  "description": "Professional Ottawa to Montreal moving services. Licensed interprovincial movers, full insurance, transparent pricing. Studio to 4-bedroom moves covered.",
  "offers": { "@type": "Offer", "priceRange": "$900–$10,000" }
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

export default function OttawaToMontrealMovers() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Ottawa to Montreal Moving Company | Licensed Interprovincial Movers | Prestige Moving</title>
        <meta name="description" content="Ottawa to Montreal moving company — fully licensed interprovincial movers since 2014. Prices from $900 · Full insurance · No hidden fees · 350+ five-star reviews. July 1 specialists. Binding written estimates. Call (613) 600-4000 for your free quote." />
        <meta name="keywords" content="Ottawa to Montreal movers, Ottawa to Montreal moving company, Ottawa Montreal moving company, interprovincial movers Ottawa, moving from Ottawa to Montreal, Ottawa Montreal moving cost, licensed movers Ottawa Quebec" />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-to-montreal-movers" />
        <meta property="og:title" content="Ottawa to Montreal Moving Company | Licensed Interprovincial Movers | Prestige Moving" />
        <meta property="og:description" content="Ottawa to Montreal moving company — fully licensed, insured, 350+ five-star reviews. Prices from $900, no hidden fees. July 1 specialists. Book your free quote today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/ottawa-to-montreal-movers" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ottawa to Montreal Moving Company | Prestige Moving" />
        <meta name="twitter:description" content="Ottawa to Montreal moving company — licensed, insured, 350+ five-star reviews. Prices from $900. July 1 specialists. Call (613) 600-4000." />
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
            <span className="text-white/80">Ottawa to Montreal Movers</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/30 rounded-full px-4 py-1.5">
                  <Star className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">5.0 Stars · 500+ Reviews · Licensed & Insured</span>
                </div>
                <time dateTime="2026-03" className="text-white/30 text-xs">Updated March 2026</time>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Ottawa to Montreal<br />
                <span className="text-[#C5A572]">Moving Services</span>
              </h1>
              <p className="text-lg text-white/75 mb-8 leading-relaxed">
                Moving from Ottawa to Montreal? As the <Link href="/" className="text-[#C5A572] hover:underline">movers Ottawa</Link> residents trust most — fully licensed, fully insured, and experienced with Ontario–Quebec interprovincial moves — Prestige Moving handles everything from packing to final placement in your new Montreal home.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["196 km Route", "~2 hr Drive", "From $900", "No Hidden Fees"].map(b => (
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
                { icon: TruckIcon, label: "Licensed Carrier", sub: "Ontario & Quebec" },
                { icon: Shield, label: "Fully Insured", sub: "WSIB Certified" },
                { icon: Clock, label: "On-Time Delivery", sub: "Guaranteed" },
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

      {/* Main content with TOC */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TableOfContents items={TOC_ITEMS} />

        <div className="xl:ml-72 space-y-20">

          {/* Route Overview */}
          <section id="overview">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-[#C5A572]" /> Route Overview
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Distance", value: "~196 km", sub: "Ottawa to Montreal downtown" },
                { label: "Drive Time", value: "~2 hrs", sub: "Via Highway 417 & A-40" },
                { label: "Moving Day", value: "8–14 hrs", sub: "Load, transit, unload" },
              ].map(stat => (
                <div key={stat.label} className="bg-gradient-to-br from-[#1A2332] to-[#2a3a52] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#C5A572] mb-1">{stat.value}</div>
                  <div className="text-white font-semibold text-sm">{stat.label}</div>
                  <div className="text-white/50 text-xs mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>The Ottawa–Montreal corridor is one of Canada's busiest interprovincial routes, running approximately 196 kilometres via Highway 417 West through Ontario and Autoroute 40 East into Greater Montreal. On a good travel day, the drive takes under two hours — making Ottawa-to-Montreal one of the more manageable long-distance moves in Eastern Canada.</p>
              <p>As an interprovincial move, your relocation crosses a provincial boundary and is governed by federal regulations under the <a href="https://www.canada.ca/en/transport-canada/services/trucking.html" target="_blank" rel="noopener noreferrer">Transport Canada Commercial Carrier rules</a>. This means your moving company must hold valid federal and Quebec operating authority — something not all local Ottawa movers possess. Prestige Moving is fully licensed for interprovincial transport.</p>
              <p>What makes Ottawa–Montreal different from a typical local move isn't just the distance — it's the regulatory environment, the unique Quebec rental calendar, and the distinct logistics of navigating Montreal's dense urban neighbourhoods like Plateau-Mont-Royal, NDG, Rosemont, and Verdun. Our team has extensive experience with all of them, from navigating narrow Plateau streets to booking Montreal freight elevators.</p>
              <p>Need <Link href="/services/packing-services" className="text-[#C5A572] font-semibold underline">professional packing services</Link> before your move? Or considering <Link href="/services/storage-solutions" className="text-[#C5A572] font-semibold underline">short-term storage</Link> between your Ottawa lease end and Montreal move-in date? We offer both as part of a complete relocation package.</p>
            </div>
          </section>

          {/* Cost Breakdown */}
          <section id="cost">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-[#C5A572]" /> Cost Breakdown
            </h2>
            <p className="text-gray-600 mb-6 text-lg">Ottawa to Montreal long-distance pricing is based on a flat-rate system that accounts for home size, volume, packing requirements, and access conditions at both ends. Below are typical all-in price ranges for 2026.</p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1A2332] text-white">
                    <th className="text-left px-5 py-4 font-semibold">Home Size</th>
                    <th className="text-left px-5 py-4 font-semibold">Est. Hours</th>
                    <th className="text-left px-5 py-4 font-semibold">Min Cost</th>
                    <th className="text-left px-5 py-4 font-semibold">Max Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {COST_TABLE.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-4 font-medium text-gray-900">{row.size}</td>
                      <td className="px-5 py-4 text-gray-600">{row.hours}</td>
                      <td className="px-5 py-4 font-semibold text-green-700">{row.min}</td>
                      <td className="px-5 py-4 font-semibold text-[#1A2332]">{row.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-4">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-800 mb-1">Pricing Note</p>
                <p className="text-amber-700 text-sm">Prices include labour, 26-ft truck, travel fuel surcharge, and basic insurance. Packing materials, special item handling (piano, pool table), and storage are priced separately. Rates are higher June 15–July 5 (Quebec's Moving Day season).</p>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-5">
              {[
                { icon: Home, title: "What Affects Cost", items: ["Home size & volume", "Stairs or elevator access", "Montreal neighbourhood density", "Date & season", "Packing requirements", "Specialty items"] },
                { icon: CheckCircle2, title: "Always Included", items: ["Licensed carrier transport", "Experienced 3-mover crew", "Moving blankets & straps", "Truck fuel", "Basic liability coverage", "Zero surprise fees"] },
                { icon: Package, title: "Optional Add-Ons", items: ["Full packing service", "Unpacking service", "Furniture assembly", "Storage (Ottawa or Montreal)", "Full-value insurance", "Piano or specialty items"] },
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
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p>Every Prestige Moving Ottawa–Montreal relocation is handled by a dedicated crew of trained professionals — not day labourers. Your crew will arrive with the right equipment: furniture dollies, moving blankets, floor runners, plastic wrap, straps, and a full-size commercial truck sized to your home.</p>
              <p>We coordinate both ends of your move. In Ottawa, we protect your flooring and walls with runners and corner guards. In Montreal, we contact your new building management in advance to schedule elevator bookings and confirm any loading dock restrictions — a crucial step in high-density areas like Outremont, Côte-des-Neiges, or the Mile End.</p>
              <p>For residents moving from larger Ottawa homes, we also offer <Link href="/services/long-distance-moving" className="text-[#C5A572] font-semibold underline">long-distance moving packages</Link> that include climate-controlled staging and secure overnight storage between loading and delivery days.</p>
              <p>The <a href="https://www.cmhc-schl.gc.ca/consumers/home-buying/buying-a-home/moving-to-canada" target="_blank" rel="noopener noreferrer">Canada Mortgage and Housing Corporation</a> recommends hiring licensed, insured movers for any interprovincial relocation — and we meet every requirement on that checklist.</p>
            </div>
          </section>

          {/* Moving to Montreal */}
          <section id="montreal-tips">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-[#C5A572]" /> What to Know About Moving to Montreal
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p>Montreal is Canada's second-largest city and offers a uniquely vibrant lifestyle — but moving there comes with a few Quebec-specific considerations worth knowing about in advance.</p>
              <h3>Quebec's July 1 Moving Day</h3>
              <p>An estimated 100,000+ households in Quebec move on or around July 1 — the province's traditional lease-change date. Moving trucks are genuinely scarce on this date. If your move falls anywhere near July 1, booking 6–8 weeks in advance is essential. We recommend choosing June 28–30 or July 3–5 when possible.</p>
              <h3>Montreal's Street Parking & Narrow Streets</h3>
              <p>Many of Montreal's most desirable neighbourhoods — the Plateau, Mile End, Rosemont — feature narrow one-way streets and limited truck parking. Our Montreal-experienced crew arrives with contact information for local by-law officers and knows how to secure temporary no-parking permits when required.</p>
              <h3>Address Changes & Quebec Government Notices</h3>
              <p>When moving to Quebec, you'll need to update your address with both the <a href="https://saaq.gouv.qc.ca/en/" target="_blank" rel="noopener noreferrer">Société de l'assurance automobile du Québec (SAAQ)</a> for your driver's licence and vehicle registration, and with <a href="https://www.revenuquebec.ca/en/" target="_blank" rel="noopener noreferrer">Revenu Québec</a> for tax purposes. Ontario residents moving to Quebec permanently must exchange their Ontario licence for a Quebec one within 6 months.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { area: "Plateau-Mont-Royal", note: "Narrow streets, parking permits needed" },
                { area: "Mile End / Outremont", note: "Popular with Ottawa expats, freight elevator required" },
                { area: "Côte-des-Neiges", note: "Large apartment buildings, high elevator demand" },
                { area: "Verdun / LaSalle", note: "More accessible, great for larger homes" },
              ].map(({ area, note }) => (
                <div key={area} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="font-bold text-gray-900 text-sm mb-1">{area}</div>
                  <div className="text-gray-500 text-xs">{note}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section id="timeline">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Calendar className="h-8 w-8 text-[#C5A572]" /> Your Moving Timeline
            </h2>
            <div className="space-y-4">
              {[
                { time: "6–8 Weeks Before", title: "Book Your Move", desc: "Contact Prestige Moving for a free quote. Confirm your Montreal address, building rules, and elevator booking windows. Book early, especially for summer moves." },
                { time: "2–3 Weeks Before", title: "Confirm Details & Pack", desc: "Finalize your inventory list. Begin packing non-essential items. Order packing materials or book our professional packing service. Update your Ontario mailing address with Canada Post." },
                { time: "1 Week Before", title: "Final Preparations", desc: "Disassemble large furniture. Label all boxes clearly with destination rooms. Prepare an essentials bag for the night of your move (documents, clothes, toiletries). Confirm truck arrival time." },
                { time: "Moving Day", title: "Loading & Transit", desc: "Our crew arrives at your Ottawa home, protects floors and walls, and loads the truck. Transit to Montreal takes approximately 2 hours. Unloading and furniture placement at your new address." },
                { time: "After the Move", title: "Settle In", desc: "Update your address with banks, Canada Post, and government. Register with SAAQ if becoming a permanent Quebec resident. Leave us a review — it means the world to our team!" },
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

          {/* Checklist */}
          <section id="checklist">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Package className="h-8 w-8 text-[#C5A572]" /> Ottawa–Montreal Pre-Move Checklist
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Before Your Move", items: ["Book interprovincial-licensed movers", "Notify employer of address change", "Transfer Ontario utilities and cancel accounts", "Set up Quebec Hydro and internet", "Update Canada Post mail forwarding", "Arrange Quebec health card (RAMQ) if relocating permanently"] },
                { title: "Moving Day", items: ["Document furniture condition with photos", "Confirm Montreal elevator booking time", "Keep important documents with you (don't pack)", "Label boxes with destination room in French/English", "Provide building super/concierge access", "Do final walkthrough of Ottawa home"] },
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

          {/* Related links */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Related Moving Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/services/long-distance-moving", label: "Long-Distance Moving" },
                { href: "/services/packing-services", label: "Professional Packing" },
                { href: "/services/storage-solutions", label: "Storage Solutions" },
                { href: "/ottawa-to-toronto-movers", label: "Ottawa to Toronto Movers" },
                { href: "/ottawa-to-vancouver-movers", label: "Ottawa to Vancouver Movers" },
                { href: "/how-much-does-moving-cost-ottawa", label: "Moving Cost Guide" },
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
            <h2 className="text-3xl font-bold text-white mb-3">Ready to Move from Ottawa to Montreal?</h2>
            <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">Get your free, no-obligation quote in minutes. We'll confirm your price in writing — no surprises.</p>
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
