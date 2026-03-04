import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, TruckIcon, Shield, Clock, Star, ArrowRight, CheckCircle2,
  MapPin, ChevronDown, DollarSign, Calendar, Package, AlertCircle, Home, Building2
} from "lucide-react";

const TOC_ITEMS = [
  { id: "overview", title: "Route Overview" },
  { id: "cost", title: "Cost Breakdown" },
  { id: "whats-included", title: "What's Included" },
  { id: "toronto-tips", title: "Moving to Toronto" },
  { id: "timeline", title: "Moving Timeline" },
  { id: "checklist", title: "Pre-Move Checklist" },
  { id: "faq", title: "FAQs" },
  { id: "cta", title: "Get a Quote" },
];

const COST_TABLE = [
  { size: "Bachelor / Studio", min: "$1,200", max: "$2,500",  hours: "5–7 hrs" },
  { size: "1-Bedroom",         min: "$1,800", max: "$3,500",  hours: "6–9 hrs" },
  { size: "2-Bedroom",         min: "$2,800", max: "$5,500",  hours: "8–12 hrs" },
  { size: "3-Bedroom House",   min: "$4,000", max: "$8,500",  hours: "11–16 hrs" },
  { size: "4+ Bedroom House",  min: "$6,000", max: "$14,000", hours: "14–22 hrs" },
];

const FAQS = [
  {
    q: "How long does an Ottawa to Toronto move take?",
    a: "The drive from Ottawa to Toronto is approximately 450 km and takes about 4.5 hours via Highway 417/7 to the 401. Your full moving day will span 10–16 hours depending on home size. For larger homes (3-bedroom+), we typically complete loading day one in Ottawa and deliver to Toronto on day two for the most stress-free experience."
  },
  {
    q: "How much does it cost to move from Ottawa to Toronto?",
    a: "Ottawa to Toronto moving costs range from approximately $1,200 for a bachelor apartment to $14,000+ for a large 4-bedroom house. Pricing is based on home size, volume, number of crew members required, access conditions at both addresses, and whether you require packing, unpacking, or specialty item handling. Request a free itemized quote from Prestige Moving for your exact situation."
  },
  {
    q: "Does Prestige Moving serve all Toronto neighbourhoods?",
    a: "Yes. We deliver to all Toronto neighbourhoods including downtown core (condos, lofts, high-rises), North York, Scarborough, Etobicoke, Mississauga, Brampton, Markham, Vaughan, and Oakville. Our Toronto-experienced crew knows how to navigate the 401/DVP, coordinate condo elevator bookings, and manage downtown parking restrictions."
  },
  {
    q: "Do I need to book in advance for an Ottawa-Toronto move?",
    a: "We recommend booking at least 3–4 weeks in advance for Ottawa–Toronto moves, and 6–8 weeks for moves scheduled between May and September (peak season). Long-distance moves require more logistical coordination than local moves, including crew scheduling, truck allocation, and multi-day coordination."
  },
  {
    q: "Is my furniture insured during the Ottawa to Toronto move?",
    a: "Yes. All interprovincial Prestige Moving relocations include basic liability coverage at no extra cost. For high-value items (artwork, antiques, electronics, musical instruments), we recommend adding full-value replacement protection. We can also connect you with third-party moving insurance providers for comprehensive coverage."
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ottawa to Toronto Moving Services",
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
    { "@type": "City", "name": "Toronto" }
  ],
  "description": "Professional Ottawa to Toronto moving services. Licensed Ontario movers, full insurance, transparent pricing. Studio to 4-bedroom moves, condo specialists.",
  "offers": { "@type": "Offer", "priceRange": "$1,200–$14,000" }
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

export default function OttawaToTorontoMovers() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Ottawa to Toronto Movers | Prestige Moving – Licensed Ontario Moving Company</title>
        <meta name="description" content="Moving from Ottawa to Toronto? Professional licensed movers from $1,200. Transparent pricing, full insurance, experienced crew. Free quote today – no obligation." />
        <meta name="keywords" content="Ottawa to Toronto movers, Ottawa Toronto moving company, moving from Ottawa to Toronto, Ottawa Toronto moving cost, long distance movers Ottawa Ontario, Toronto movers from Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-to-toronto-movers" />
        <meta property="og:title" content="Ottawa to Toronto Movers | Prestige Moving" />
        <meta property="og:description" content="Professional licensed moving from Ottawa to Toronto. Pricing from $1,200. Book your free quote." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/ottawa-to-toronto-movers" />
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
            <span className="text-white/80">Ottawa to Toronto Movers</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-5">
                <Star className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />
                <span className="text-[#C5A572] text-sm font-semibold">5.0 Stars · 500+ Reviews · Licensed & Insured</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Ottawa to Toronto<br />
                <span className="text-[#C5A572]">Moving Services</span>
              </h1>
              <p className="text-lg text-white/75 mb-8 leading-relaxed">
                Moving from Ottawa to Toronto along the 401 corridor? Prestige Moving is Ontario's trusted long-distance mover — fully licensed, fully insured, and experienced with GTA condo moves, downtown high-rises, and suburban home relocations across the Greater Toronto Area.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["~450 km Route", "~4.5 hr Drive", "From $1,200", "All Ontario Coverage"].map(b => (
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
                { icon: TruckIcon, label: "Licensed Ontario Carrier", sub: "All 401 Corridor" },
                { icon: Shield, label: "Fully Insured", sub: "WSIB Certified" },
                { icon: Clock, label: "2-Day Option", sub: "Stress-Free Delivery" },
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
                { label: "Distance", value: "~450 km", sub: "Ottawa to downtown Toronto" },
                { label: "Drive Time", value: "~4.5 hrs", sub: "Via Hwy 417 to 401 West" },
                { label: "Moving Day", value: "10–16 hrs", sub: "Or split over 2 days" },
              ].map(stat => (
                <div key={stat.label} className="bg-gradient-to-br from-[#1A2332] to-[#2a3a52] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#C5A572] mb-1">{stat.value}</div>
                  <div className="text-white font-semibold text-sm">{stat.label}</div>
                  <div className="text-white/50 text-xs mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>The Ottawa–Toronto move is one of the most common long-distance relocations in Ontario, driven by career transitions, family moves, and the thriving job markets in both cities. The route covers approximately 450 kilometres via Highway 417 West (becoming the 401) and takes about 4.5 hours in normal traffic conditions — longer during rush hour or winter travel.</p>
              <p>Since both cities are within Ontario, your move does not cross provincial boundaries, simplifying the licensing requirements. However, it still requires proper long-distance carrier authority under the <a href="https://www.ontario.ca/page/truck-transportation" target="_blank" rel="noopener noreferrer">Ontario Ministry of Transportation commercial vehicle regulations</a>. Prestige Moving holds all required certifications.</p>
              <p>Toronto's diverse housing landscape presents unique challenges: downtown condos require elevator bookings often booked weeks in advance, Midtown neighbourhoods have street parking restrictions, and the 905-area suburbs require navigation through the DVP/Gardiner and 400-series highway interchanges. Our crew is experienced with all of it.</p>
              <p>If you're moving into a Toronto condo or apartment building, we strongly recommend calling your building management 2–3 weeks before your move-in date to reserve the freight elevator — most buildings have very limited elevator booking windows. We can help you coordinate this as part of your <Link href="/services/residential-moving" className="text-[#C5A572] font-semibold underline">residential moving service</Link>.</p>
              <p>For those who need temporary storage between their Ottawa lease end and Toronto possession date, our <Link href="/services/storage-solutions" className="text-[#C5A572] font-semibold underline">secure storage solutions</Link> can bridge that gap seamlessly.</p>
            </div>
          </section>

          {/* Cost */}
          <section id="cost">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <DollarSign className="h-8 w-8 text-[#C5A572]" /> Cost Breakdown
            </h2>
            <p className="text-gray-600 mb-6 text-lg">Ottawa to Toronto moving costs are based on home size, volume, distance-related logistics (fuel, crew accommodation for 2-day moves), and access conditions at both ends. Below are 2026 all-in estimates.</p>
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
              <p className="text-amber-700 text-sm"><strong className="text-amber-800">Pricing Note:</strong> Includes labour, 26-ft truck, fuel, and basic insurance. Packing services, overnight crew accommodation (for 2-day large moves), and specialty items are separate. Peak season (May–September) rates are 10–20% higher. Request a written itemized quote for your exact move.</p>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-5">
              {[
                { icon: Home, title: "Cost Factors", items: ["Home size & cubic footage", "Toronto condo elevator booking", "Stairs at either address", "Season & date of move", "Packing / unpacking service", "Specialty item handling"] },
                { icon: CheckCircle2, title: "Always Included", items: ["Licensed Ontario carrier", "Professional moving crew", "26-ft commercial truck", "Moving blankets & equipment", "Basic liability insurance", "Transparent itemized quote"] },
                { icon: Package, title: "Optional Add-Ons", items: ["Full packing service", "Furniture disassembly/assembly", "Overnight secure storage", "Toronto parking permits", "Full-value insurance", "Piano or antique moving"] },
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
              <p>Every Ottawa–Toronto move with Prestige Moving is assigned a dedicated senior moving coordinator who manages both ends of the relocation. We do not subcontract your move to third-party carriers — the same licensed, insured Prestige Moving crew that loads your Ottawa home will unload at your Toronto destination.</p>
              <p>On loading day, we arrive with floor runners, door frame protectors, furniture blankets, stretch wrap, and straps. Every item is inventoried and labelled before it goes on the truck. For large 3–4 bedroom homes, we use our 26-foot commercial truck supplemented by a second vehicle when volume requires it.</p>
              <p>For clients with items requiring specialized care, such as a piano, pool table, large safe, or valuable antiques, our <Link href="/services/specialty-item-moving" className="text-[#C5A572] font-semibold underline">specialty item moving</Link> and <Link href="/services/piano-moving" className="text-[#C5A572] font-semibold underline">piano moving</Link> services are available as add-ons. These require advance notice so we can bring the right equipment and additional crew.</p>
              <p>According to the <a href="https://www.ontario.ca/page/consumer-protection-ontario" target="_blank" rel="noopener noreferrer">Ontario Ministry of Government and Consumer Services</a>, moving companies operating in Ontario must provide a written estimate and bill of lading. We provide both — along with a transparent itemized invoice after the move is complete.</p>
            </div>
          </section>

          {/* Toronto Tips */}
          <section id="toronto-tips">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="h-8 w-8 text-[#C5A572]" /> What to Know About Moving to Toronto
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <h3>Toronto Condo Elevator Bookings</h3>
              <p>The majority of Toronto's downtown, Midtown, and Etobicoke condos require advance elevator booking for moves — often with a refundable damage deposit. Most buildings only allow moves during specific hours (typically 8am–5pm on weekdays) and have very limited available slots. We recommend securing your elevator booking within 48 hours of signing your lease.</p>
              <h3>Toronto Parking for Moving Trucks</h3>
              <p>Toronto's streets are notoriously difficult for parking large commercial vehicles. Many neighbourhoods require temporary no-parking permits from the <a href="https://www.toronto.ca/services-payments/streets-parking-transportation/permits/" target="_blank" rel="noopener noreferrer">City of Toronto Transportation Services</a>. Our team handles these permit applications for downtown and dense neighbourhood moves at no additional charge.</p>
              <h3>Toronto Neighbourhood Considerations</h3>
              <p>Each Toronto neighbourhood presents different logistics. The downtown core (King West, Liberty Village, Distillery District) involves narrow streets and loading docks. North York and Scarborough offer easier truck access. The 905 suburbs (Mississauga, Brampton, Markham) are typically the most straightforward. Our team tailors our approach based on your specific address.</p>
              <h3>Updating Your Address After Moving to Toronto</h3>
              <p>Once you've moved, update your address with <a href="https://www.ontario.ca/page/change-address-drivers-licence-or-photo-id" target="_blank" rel="noopener noreferrer">ServiceOntario</a> for your driver's licence and vehicle registration, Canada Post for mail forwarding, your employer, bank, and the CRA (Canada Revenue Agency) for tax purposes.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { area: "Downtown Core", note: "Elevator booking critical, street permits needed" },
                { area: "North York / Midtown", note: "Mix of condos & houses, 2–3 wk booking lead time" },
                { area: "Etobicoke / West End", note: "Easier access, close to 401/427" },
                { area: "905 Region", note: "Easiest access, most cost-effective unloading" },
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
                { time: "4–6 Weeks Before", title: "Book & Plan", desc: "Request your free quote from Prestige Moving. Confirm Toronto address, book condo elevator if applicable, and decide on packing services. Book early for May–September moves." },
                { time: "2–3 Weeks Before", title: "Prepare & Pack", desc: "Begin packing room by room. Label boxes by destination room. Order packing materials or book our professional packing crew. Set up Canada Post mail forwarding." },
                { time: "1 Week Before", title: "Final Prep", desc: "Disassemble beds and large furniture. Prepare an essentials bag. Confirm Toronto parking arrangements. Do a final inventory walkthrough with your Prestige Moving coordinator." },
                { time: "Day 1 – Loading", desc: "Our crew arrives at your Ottawa address. We protect floors and walls, inventory all items, wrap furniture, and load the truck. For 3+ bedroom moves, we may complete this day and drive overnight." , title: "Moving Day — Ottawa" },
                { time: "Day 1 or 2 – Unloading", title: "Moving Day — Toronto", desc: "We arrive at your Toronto address at your agreed time. Furniture is placed in the correct rooms, beds are reassembled, and we do a final walkthrough with you before wrapping up." },
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
              <Package className="h-8 w-8 text-[#C5A572]" /> Ottawa–Toronto Pre-Move Checklist
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Before Your Move", items: ["Book freight elevator at Toronto building", "Apply for Toronto street parking permit if needed", "Set up Canada Post mail forwarding", "Transfer Ontario utilities to Toronto address", "Notify employer, bank, and CRA of address change", "Book professional packing service if needed"] },
                { title: "Moving Day", items: ["Photograph all furniture before loading", "Keep important documents with you in car", "Label all boxes with room names", "Confirm Toronto address access and parking", "Do final walkthrough at Ottawa address", "Collect keys for new Toronto property"] },
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
                { href: "/ottawa-to-montreal-movers", label: "Ottawa to Montreal Movers" },
                { href: "/ottawa-to-vancouver-movers", label: "Ottawa to Vancouver Movers" },
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
            <h2 className="text-3xl font-bold text-white mb-3">Ready to Move from Ottawa to Toronto?</h2>
            <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">Get your free, no-obligation written quote today. We'll have pricing back to you within hours.</p>
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
