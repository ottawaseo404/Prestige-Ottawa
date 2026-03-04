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
  { id: "calgary-tips", title: "Moving to Calgary" },
  { id: "timeline", title: "Moving Timeline" },
  { id: "checklist", title: "Pre-Move Checklist" },
  { id: "faq", title: "FAQs" },
  { id: "cta", title: "Get a Quote" },
];

const COST_TABLE = [
  { size: "Bachelor / Studio", min: "$2,500", max: "$5,000",  delivery: "5–8 days" },
  { size: "1-Bedroom",         min: "$3,500", max: "$7,000",  delivery: "6–9 days" },
  { size: "2-Bedroom",         min: "$6,000", max: "$10,000", delivery: "7–11 days" },
  { size: "3-Bedroom House",   min: "$8,000", max: "$15,000", delivery: "8–12 days" },
  { size: "4+ Bedroom House",  min: "$12,000", max: "$22,000", delivery: "10–14 days" },
];

const FAQS = [
  {
    q: "How long does an Ottawa to Calgary move take?",
    a: "The drive from Ottawa to Calgary is approximately 3,300 km via the Trans-Canada Highway and takes around 30 hours of driving time. For a professional moving truck, door-to-door delivery typically takes 5–12 business days depending on your shipment size, the route, and the time of year. We dispatch Ottawa-to-Calgary loads on a weekly schedule."
  },
  {
    q: "How much does it cost to move from Ottawa to Calgary?",
    a: "Ottawa to Calgary moving costs range from approximately $2,500 for a bachelor apartment to $22,000+ for a large 4-bedroom home. Cross-country pricing is based on total cubic footage and weight of your shipment rather than hourly rates. Factors like packing services, specialty items, and your delivery address within the Calgary metro area also affect the final price."
  },
  {
    q: "What is the best time of year to move from Ottawa to Calgary?",
    a: "Late August through October is generally the best window for an Ottawa–Calgary move. Summer (May–August) sees the highest demand and pricing. Winter moves (November–March) face potential highway closures and delays on the Trans-Canada through the Prairies — though they're often lower cost. Early fall offers the best balance of price, availability, and road conditions."
  },
  {
    q: "Do I need Alberta health care coverage after moving to Calgary?",
    a: "Yes. Alberta has its own provincial health care system (Alberta Health Care Insurance Plan). After establishing residency, you must register with Alberta Health. There is a 3-month waiting period for new Alberta residents before AHCIP coverage begins — it's important to maintain bridge coverage (e.g., through your employer or private insurance) during this period."
  },
  {
    q: "Should I ship my vehicle separately when moving Ottawa to Calgary?",
    a: "For most clients, shipping your vehicle via auto transport is more practical and cost-effective than driving it alongside a moving truck. Auto transport from Ottawa to Calgary typically costs $900–$1,600 for a standard vehicle and takes 7–10 days. We can recommend vetted auto transport partners as part of your comprehensive relocation plan."
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ottawa to Calgary Moving Services",
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
    { "@type": "City", "name": "Calgary" }
  ],
  "description": "Professional Ottawa to Calgary cross-country moving services. Licensed interprovincial movers, 5–12 day delivery, transparent pricing from $2,500.",
  "offers": { "@type": "Offer", "priceRange": "$2,500–$22,000" }
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

export default function OttawaToCalgaryMovers() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Ottawa to Calgary Movers | Prestige Moving – Cross-Country Moving Specialists</title>
        <meta name="description" content="Moving from Ottawa to Calgary? Professional cross-country movers with 5–12 day delivery. Transparent pricing from $2,500. Licensed, fully insured. Free quote today." />
        <meta name="keywords" content="Ottawa to Calgary movers, Ottawa Calgary moving company, moving from Ottawa to Calgary, Ottawa Calgary moving cost, cross country movers Ottawa Alberta, interprovincial movers Ottawa Calgary" />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-to-calgary-movers" />
        <meta property="og:title" content="Ottawa to Calgary Movers | Prestige Moving" />
        <meta property="og:description" content="Cross-country moving from Ottawa to Calgary. 5–12 day delivery, pricing from $2,500. Licensed & fully insured." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/ottawa-to-calgary-movers" />
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
            <span className="text-white/80">Ottawa to Calgary Movers</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-5">
                <Star className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />
                <span className="text-[#C5A572] text-sm font-semibold">5.0 Stars · 500+ Reviews · Cross-Canada Specialists</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Ottawa to Calgary<br />
                <span className="text-[#C5A572]">Moving Services</span>
              </h1>
              <p className="text-lg text-white/75 mb-8 leading-relaxed">
                Making the move to Alberta's energy capital? Prestige Moving coordinates your complete Ottawa–Calgary relocation — door-to-door, fully licensed, with 5–12 business day delivery and no surprise charges.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["~3,300 km Route", "5–12 Day Delivery", "From $2,500", "Fully Licensed & Insured"].map(b => (
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
                { icon: TruckIcon, label: "Cross-Canada Transport", sub: "Ottawa → Calgary" },
                { icon: Shield, label: "Fully Insured Transit", sub: "Door-to-Door" },
                { icon: Clock, label: "5–12 Day Delivery", sub: "Guaranteed Window" },
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
                { label: "Distance", value: "~3,300 km", sub: "Ottawa to Calgary" },
                { label: "Transit Time", value: "5–12 days", sub: "Door-to-door delivery" },
                { label: "Provinces", value: "4 Provinces", sub: "ON, MB, SK, AB" },
              ].map(stat => (
                <div key={stat.label} className="bg-gradient-to-br from-[#1A2332] to-[#2a3a52] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#C5A572] mb-1">{stat.value}</div>
                  <div className="text-white font-semibold text-sm">{stat.label}</div>
                  <div className="text-white/50 text-xs mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>The Ottawa–Calgary corridor spans approximately 3,300 kilometres across four provinces — Ontario, Manitoba, Saskatchewan, and Alberta — traversing the vast Canadian Prairies before arriving at the foothills of the Rocky Mountains. It's one of Canada's most significant interprovincial relocations, driven by Alberta's booming energy sector, lower provincial taxes (Alberta has no provincial income tax), and a high quality of life that continues to draw Ontario residents westward.</p>
              <p>As an interprovincial move, Transport Canada federal carrier regulations apply and your moving company must hold valid operating authority across all provinces on the route. Prestige Moving works with a vetted network of licensed long-haul carriers that specialize in Ottawa–Western Canada moves, providing seamless door-to-door service without subcontracting to unknown third parties.</p>
              <p>Calgary itself spans a large metropolitan area — the City of Calgary, Airdrie, Cochrane, Chestermere, and surrounding communities — and our delivery team is familiar with all areas, from downtown high-rises and Beltline condos to suburban communities in the NW, NE, SW, and SE quadrants. If you need <Link href="/services/packing-services" className="text-[#C5A572] font-semibold underline">professional packing services</Link> or <Link href="/services/storage-solutions" className="text-[#C5A572] font-semibold underline">interim storage</Link> between your Ottawa lease and Calgary possession date, both are available as part of your relocation package.</p>
            </div>
          </section>

          <section id="cost">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-[#C5A572]" /> Cost Breakdown
            </h2>
            <p className="text-gray-600 mb-6 text-lg">Ottawa–Calgary pricing is weight and volume-based. The estimates below represent complete door-to-door moves including loading in Ottawa and delivery to your Calgary address.</p>
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
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-4">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-amber-700 text-sm"><strong className="text-amber-800">Note:</strong> Estimates include loading crew, licensed transport, and delivery. Packing services, specialty items, storage, and auto transport are priced separately. Request a free written assessment for your exact quote.</p>
            </div>
          </section>

          <section id="whats-included">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-[#C5A572]" /> What's Included
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Every Ottawa–Calgary move begins with a pre-move assessment — in-person or via video call — to accurately measure your cubic footage and produce a binding written quote. On loading day, our Ottawa crew protects your home with floor runners and corner guards, inventories every item on a bill of lading, and secures everything with professional wrapping and packing materials.</p>
              <p>Your shipment travels with our licensed Trans-Canada carrier network. We provide GPS tracking on request and a firm delivery window of 5–12 business days. Our Calgary delivery crew contacts you 24–48 hours before arrival to confirm access and schedule. All furniture is placed in designated rooms, beds are reassembled, and you conduct a final inventory check before the crew departs.</p>
              <p>For clients with high-value items, our <Link href="/services/specialty-item-moving" className="text-[#C5A572] font-semibold underline">specialty item moving</Link> service ensures pianos, artwork, antiques, and other valuables receive the extra care and custom crating they require for a 3,300 km journey. The <a href="https://www.canada.ca/en/transport-canada/services/trucking.html" target="_blank" rel="noopener noreferrer">Transport Canada commercial carrier program</a> requires all companies to maintain liability insurance for interprovincial moves — and we exceed the minimum requirements.</p>
            </div>
          </section>

          <section id="calgary-tips">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-[#C5A572]" /> What to Know About Moving to Calgary
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <h3>No Provincial Income Tax</h3>
              <p>One of Alberta's biggest draws is the absence of a provincial income tax. Combined with relatively affordable housing compared to Vancouver and Toronto, Calgary offers one of Canada's best financial propositions for working professionals. You will still pay federal taxes and Alberta has provincial sales taxes on some goods, but there's no general provincial income tax on wages and salaries.</p>
              <h3>Alberta Driver's Licence & Registry</h3>
              <p>New Alberta residents must convert their Ontario driver's licence to an Alberta licence within 90 days of establishing residency. Unlike some provinces, Alberta does not require a new road test for Ontario licence holders — simply visit any <a href="https://www.alberta.ca/get-drivers-licence" target="_blank" rel="noopener noreferrer">Alberta Registry Agent</a> with your Ontario licence. You'll also need to register your vehicle in Alberta within 3 months.</p>
              <h3>Alberta Health Care</h3>
              <p>Alberta has its own provincial health care plan (AHCIP). New residents can apply immediately but face a 3-month waiting period before coverage begins. Arrange bridge coverage through your employer's benefits plan or a private insurer during this period.</p>
              <h3>Calgary's Quadrant System</h3>
              <p>Calgary uses a distinctive NW/NE/SW/SE quadrant address system. Downtown (called the "Plus-15" zone for its indoor skyway network), Beltline, and Mission are popular with young professionals. Families tend to move to NW communities like Tuscany, Signal Hill, and Varsity, or SE areas like Mahogany and Cranston. Our delivery team is fully familiar with all Calgary neighbourhoods and surrounding communities.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { area: "Downtown / Beltline", note: "High-rises, elevator booking essential" },
                { area: "NW Calgary", note: "Family communities, easy truck access" },
                { area: "SW Calgary", note: "Upscale areas, hill terrain, plan parking" },
                { area: "Airdrie / Cochrane", note: "Fast-growing suburbs, great truck access" },
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
                { time: "8–10 Weeks Before", title: "Book & Plan", desc: "Request your free quote and book your move. Confirm Calgary address and possession date. Decide on packing services. Book early — peak summer slots fill fast." },
                { time: "4–6 Weeks Before", title: "Declutter & Prepare", desc: "This is the most cost-effective moment to reduce volume. Sell, donate, or discard anything you won't need in Calgary. Fewer cubic feet means major savings on a 3,300 km haul." },
                { time: "2–3 Weeks Before", title: "Pack & Organize", desc: "Pack systematically room by room. Label all boxes clearly. Set up Canada Post mail forwarding. Confirm vehicle transport plans." },
                { time: "Loading Day (Ottawa)", title: "Ottawa Load-Out", desc: "Our crew arrives, inventories all items, wraps furniture, and loads the truck. You receive a copy of the bill of lading before the truck departs westbound." },
                { time: "Days 5–12: Delivery", title: "Calgary Delivery", desc: "Our dispatch team contacts you 24–48 hours before delivery. All items are unloaded and placed in your designated Calgary rooms." },
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
                { title: "Before Your Move", items: ["Book movers 8–10 weeks in advance", "Apply for Alberta Health Care (AHCIP)", "Plan Alberta driver's licence transfer (90 days)", "Register vehicle in Alberta within 3 months", "Set up Canada Post mail forwarding", "Arrange vehicle transport if not driving", "Update CRA, bank, employer with new address"] },
                { title: "Moving Day", items: ["Photograph all furniture before loading", "Keep important documents with you", "Pack a 'first night' essentials box", "Label all boxes with room names", "Get your copy of the Bill of Lading", "Confirm Calgary delivery address & access details"] },
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
                { href: "/services/long-distance-moving", label: "Long-Distance Moving" },
                { href: "/services/packing-services", label: "Professional Packing" },
                { href: "/services/storage-solutions", label: "Storage Solutions" },
                { href: "/ottawa-to-vancouver-movers", label: "Ottawa to Vancouver Movers" },
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
            <h2 className="text-3xl font-bold text-white mb-3">Ready to Move from Ottawa to Calgary?</h2>
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
