import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";
import {
  Phone, ArrowRight, CheckCircle2, Shield, MapPin,
  Truck, Package, Star, ChevronDown, Lock,
  Navigation, Users, Calendar, Globe, FileText, Info, AlertTriangle, Clock
} from "lucide-react";
import longDistanceHeroImg from "@assets/generated_images/long_distance_moving_hero.png";
import longDistanceCanadaImg from "@assets/generated_images/long-distance-movers-canada.png";
import highwayTruckImg from "@assets/generated_images/long_distance_highway_truck.png";

const TOC_ITEMS = [
  { id: "overview", title: "Overview" },
  { id: "why-choose", title: "Why Choose Prestige" },
  { id: "routes", title: "Popular Routes" },
  { id: "whats-included", title: "What's Included" },
  { id: "process", title: "How It Works" },
  { id: "packing-standards", title: "Long Distance Packing" },
  { id: "binding-quotes", title: "Binding Quotes Explained" },
  { id: "avoid-brokers", title: "Avoiding Moving Scams" },
  { id: "pricing", title: "Cost Guide" },
  { id: "route-guides", title: "Route Guides" },
  { id: "faq", title: "FAQ" },
  { id: "reviews", title: "Reviews" },
];

const ROUTES = [
  { from: "Ottawa", to: "Toronto", distance: "450 km", time: "4–5 hrs", transit: "1–2 days", popular: true },
  { from: "Ottawa", to: "Montreal", distance: "200 km", time: "2 hrs", transit: "Same day", popular: true },
  { from: "Ottawa", to: "Vancouver", distance: "4,400 km", time: "Cross-country", transit: "7–10 days", popular: false },
  { from: "Ottawa", to: "Calgary", distance: "3,300 km", time: "Cross-country", transit: "5–7 days", popular: false },
  { from: "Ottawa", to: "Halifax", distance: "1,500 km", time: "Atlantic Canada", transit: "3–4 days", popular: false },
  { from: "Ottawa", to: "Winnipeg", distance: "2,100 km", time: "The Prairies", transit: "3–5 days", popular: false },
];

const STEPS = [
  { num: "01", title: "Free In-Home Estimate", desc: "We visit your home (or do a virtual video walkthrough) to assess your inventory and issue a binding written quote — not a guess. Price is locked in before you sign anything." },
  { num: "02", title: "Professional Long-Distance Packing", desc: "Long-distance moves demand higher standards. We use double-wall boxes, anti-vibration foam, stretch wrap, and custom crating for artwork and antiques. Furniture is blanket-wrapped. Nothing shifts at highway speeds." },
  { num: "03", title: "Documented Loading Day", desc: "Our crew performs a detailed photo inventory of every item. Everything loads onto a climate-controlled truck with load bars and padded straps. You receive a signed copy before the truck leaves Ottawa." },
  { num: "04", title: "GPS-Tracked Direct Transit", desc: "Your belongings travel on a dedicated truck — real-time GPS the entire route. No transfers to brokers or third-party carriers. Same truck, same crew, from your Ottawa home to your destination." },
  { num: "05", title: "Confirmed Delivery & Setup", desc: "We deliver on the confirmed date, carry in room by room against your inventory list, reassemble all furniture, and do a final walkthrough together before we leave. Any issue is noted and resolved on site." },
];

const INCLUDED = [
  { icon: Lock, title: "Binding Written Quote", desc: "Price locked in writing before booking. Not an estimate that grows on delivery day." },
  { icon: Shield, title: "$100,000 Transit Insurance", desc: "All shipments fully insured. Full replacement value upgrades available for high-value items." },
  { icon: Navigation, title: "Real-Time GPS Tracking", desc: "Live truck location throughout transit. Know exactly where your belongings are at all times." },
  { icon: Users, title: "Dedicated Crew", desc: "Same Ottawa crew loads, drives, and delivers. No hand-offs to strangers mid-route." },
  { icon: Package, title: "Long-Distance Grade Packing", desc: "Double-wall boxes, custom crating, anti-vibration foam — built for thousands of kilometres." },
  { icon: Truck, title: "Climate-Controlled Fleet", desc: "Regulated temperature and humidity. Essential for wood furniture, electronics, and artwork." },
  { icon: Calendar, title: "Confirmed Delivery Window", desc: "A specific delivery date in writing — not a vague 21-day window. We show up when we say." },
  { icon: FileText, title: "Detailed Photo Inventory", desc: "Every item photographed and catalogued before loading. Full accountability from pickup to delivery." },
];

const FAQS = [
  { q: "How much does long distance moving from Ottawa cost?", a: "Long distance moving costs depend on volume (cubic feet), distance (kilometres), and services included. Ottawa to Toronto for a 2-bedroom apartment typically runs $2,500–$4,500 with packing included. Ottawa to Vancouver for a 3-bedroom home typically runs $8,000–$14,000. All quotes are binding — the price you receive is the price you pay." },
  { q: "What is a binding quote and why does it matter?", a: "A binding quote guarantees your final price in writing before the move begins. A non-binding estimate can increase dramatically on delivery — a practice common with predatory long-distance movers who hold your goods until you pay more. All Prestige Moving long-distance quotes are binding. No exceptions." },
  { q: "How long does long distance moving from Ottawa take?", a: "Ottawa to Toronto: 1–2 days. Ottawa to Montreal: same day. Ottawa to Calgary: 5–7 days. Ottawa to Vancouver: 7–10 days. We provide a confirmed delivery date in writing before your move begins — not a vague multi-week range." },
  { q: "Do you use your own trucks or third-party carriers?", a: "We use our own fleet for all long-distance moves. We do not broker your move to van lines or third-party carriers. Your belongings stay on the same truck with the same Ottawa crew from pickup to delivery." },
  { q: "Is my furniture insured during long distance transit?", a: "Yes. All long-distance moves include basic valuation coverage of $100,000 in transit insurance. Full replacement value protection is available for an additional premium — strongly recommended for antiques, artwork, and high-value electronics. All coverage options are explained during your quote consultation." },
  { q: "Can I pack my own boxes for a long distance move?", a: "You can, but we don't recommend it. Items that survive a local move often won't survive 400–4,400 km of highway. If you do pack yourself, our crew inspects and reinforces any boxes before loading. Our packing uses long-distance grade materials designed for thousands of kilometres of transit." },
  { q: "Do you offer storage if my home isn't ready at destination?", a: "Yes. If your destination home isn't ready when we load in Ottawa, we offer secure climate-controlled storage at our Ottawa facility on a month-to-month basis. Storage can be added to your move at the quote stage." },
  { q: "What provinces do you move to from Ottawa?", a: "We service all Canadian provinces and territories — Ontario, Quebec, BC, Alberta, Saskatchewan, Manitoba, Nova Scotia, New Brunswick, Newfoundland, PEI, and the territories. We do not service US destinations at this time." },
  { q: "How do I get a quote for a long distance move from Ottawa?", a: "Call (613) 600-4000 or book a quote online. For long distance moves, we arrange either an in-person walkthrough of your home (free, no obligation) or a video walkthrough if preferred. Within 24 hours of the assessment, you'll receive a detailed binding written quote. We never provide verbal estimates for long distance moves." },
  { q: "What makes long distance packing different from local moving?", a: "Long distance packing must withstand thousands of kilometres of highway vibration, temperature changes, and the physical forces of a fully loaded truck at highway speed. We use double-wall boxes (not single-wall boxes), anti-vibration foam inside electronics boxes, furniture pads on all wood pieces, stretch wrap over everything, and load bars securing the entire load. The packing standard for a cross-Canada move is significantly higher than for a local move." },
];

export default function LongDistanceMoving() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeRoute, setActiveRoute] = useState(0);

  return (
    <>
      <Helmet>
        <title>Long Distance Movers Ottawa | Canada-Wide Moving | Prestige Moving</title>
        <meta name="description" content="Ottawa's trusted long distance movers. Binding quotes, GPS tracking, dedicated crew, $100K transit insurance. Moving from Ottawa to Toronto, Vancouver, Calgary or anywhere in Canada. Call (613) 600-4000." />
        <meta name="keywords" content="long distance movers Ottawa, long distance moving Ottawa, Ottawa to Toronto movers, Ottawa to Vancouver movers, cross Canada movers Ottawa, interprovincial movers Ottawa, moving from Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/services/long-distance-moving" />
        <meta property="og:title" content="Long Distance Movers Ottawa | Binding Quotes, GPS Tracking | Prestige Moving" />
        <meta property="og:description" content="Binding quotes, GPS tracking, dedicated crew, $100K transit insurance. Moving from Ottawa anywhere in Canada. Call (613) 600-4000." />
        <meta property="og:image" content="https://prestigemoving.ca/og-long-distance-moving.jpg" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Ottawa Movers", "item": "https://prestigemoving.ca" }, { "@type": "ListItem", "position": 2, "name": "Long Distance Movers Ottawa", "item": "https://prestigemoving.ca/services/long-distance-moving" }] })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Long Distance Movers Ottawa", "serviceType": "Long Distance Moving Services", "description": "Professional long distance moving from Ottawa to anywhere in Canada. Binding quotes, GPS tracking, dedicated crew, $100K transit insurance, no brokers.", "provider": { "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "telephone": "(613) 600-4000", "url": "https://prestigemoving.ca", "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } }, "areaServed": { "@type": "Country", "name": "Canada" } })}</script>
      </Helmet>

      <SharedNavigation />

      {/* ── Hero ── */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/long-distance-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#1A2332]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/60 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Binding Quotes", "GPS Tracked", "Dedicated Crew", "No Brokers"].map(t => (
                <Badge key={t} className="bg-[#C5A572]/20 text-[#C5A572] border border-[#C5A572]/30 text-xs font-semibold">{t}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
              Long Distance Movers Ottawa —<br className="hidden md:block" />
              <span className="text-[#C5A572]">Canada-Wide, Done Right</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Ottawa to Toronto, Vancouver, Calgary, Montreal — anywhere in Canada. Binding quotes that hold. GPS-tracked trucks. Your dedicated crew from pickup to delivery with no brokers, no transfers, and no surprise invoices. <Link href="/" className="text-[#C5A572] hover:underline">Ottawa's top-rated movers</Link> for long distance moves across Canada.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {["5.0★ — 400+ Reviews", "WSIB Certified", "$100K Transit Insurance", "No Hidden Fees"].map(t => (
                <div key={t} className="flex items-center gap-1.5 text-white/75 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" /><span>{t}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold text-base px-6">Get Binding Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10 text-base px-6"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Binding Written Quotes", "Same Crew Pickup to Delivery", "GPS-Tracked Fleet", "Climate-Controlled Trucks", "No Third-Party Brokers"].map(t => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" />{t}</span>
          ))}
        </div>
      </div>

      {/* ── Stats ── */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "400+", label: "5-Star Reviews" },
              { num: "10+", label: "Provinces Served" },
              { num: "$100K", label: "Transit Insurance" },
              { num: "100%", label: "Binding Quotes" },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl font-black text-[#C5A572] mb-1">{s.num}</div>
                <div className="text-gray-600 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content with TOC ── */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12 items-start">
            <TableOfContents items={TOC_ITEMS} />

            <div className="min-w-0 flex-1 space-y-16">

              {/* ── Overview ── */}
              <section id="overview">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-4">Long Distance Moving from Ottawa — What You Need to Know</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>Long distance moving from Ottawa involves challenges that local moves simply don't have. When your belongings travel hundreds or thousands of kilometres, the stakes for proper packing, documentation, and carrier selection are dramatically higher. A piece of furniture that survives a 10-minute drive across Kanata won't necessarily survive 4,500 kilometres of highway to Vancouver without the right preparation.</p>
                  <p>The long distance moving industry has a well-documented problem with predatory pricing: movers quote low, load your belongings, and present a significantly higher invoice at delivery — knowing you have no leverage once your possessions are on their truck. The protection against this is simple: a binding written quote before anything is booked. Every Prestige Moving long-distance quote is binding. No exceptions. The number we give you before you sign is the number on your final invoice.</p>
                  <p>We serve every route from Ottawa — Toronto, Montreal, Vancouver, Calgary, Halifax, Winnipeg, Edmonton, and every province in Canada. Our long-distance division uses our own fleet (no third-party brokers), the same dedicated crew from loading in Ottawa to delivery at your destination, real-time GPS tracking throughout transit, and climate-controlled trucks for furniture and electronics that require temperature stability.</p>
                </div>
                <div className="rounded-2xl overflow-hidden mt-6">
                  <img src={highwayTruckImg} alt="Prestige Moving truck on a Canadian highway representing long distance moving service from Ottawa" className="w-full h-64 object-cover" />
                </div>
              </section>

              {/* ── Why Choose ── */}
              <section id="why-choose">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Why Ottawa Families Choose Prestige for Long Distance</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Lock, title: "100% Binding Quotes", desc: "The price in your written quote is your final price. No adjustments on delivery day, no surprise fuel surcharges, no weight-based overages. What you sign is what you pay." },
                    { icon: Users, title: "No Brokers — Ever", desc: "We own our fleet and employ our crews directly. We never broker your move to a third-party carrier. The team that loads your Ottawa home is the team that delivers at your destination." },
                    { icon: Navigation, title: "Real-Time GPS Tracking", desc: "Live location updates throughout transit. You can check where your truck is at any point during your move without calling us — though we provide proactive updates on all long-distance moves." },
                    { icon: Shield, title: "$100K Transit Insurance", desc: "Every long-distance shipment includes $100,000 in basic transit coverage. Full replacement value protection is available as an upgrade — essential for artwork, antiques, and high-value items." },
                    { icon: Package, title: "Long-Distance Grade Packing", desc: "Double-wall boxes, anti-vibration foam, custom crating, full furniture blanket-wrap. Our packing standards are built for thousands of kilometres of highway, not just across town." },
                    { icon: Calendar, title: "Confirmed Delivery Date", desc: "A specific delivery date in writing — not a 14–21 day 'window'. We show up on the date we confirm. Your plans at the destination can be made around a specific day, not a range." },
                    { icon: Truck, title: "Climate-Controlled Fleet", desc: "Temperature and humidity-regulated trucks for moves where extreme temperature swings could affect wood furniture, pianos, electronics, or artwork." },
                    { icon: FileText, title: "Photo Inventory Documentation", desc: "Every item photographed and catalogued before the truck leaves Ottawa. If there's a question about any item's condition on delivery, there's photographic evidence of its state at loading." },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="bg-white rounded-xl border border-gray-100 p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-[#C5A572]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1A2332] text-sm mb-1">{title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Routes ── */}
              <section id="routes">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Popular Long Distance Routes from Ottawa</h2>
                <p className="text-gray-600 mb-6">We move from Ottawa to every province in Canada. Click any route to see transit times and what to expect.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {ROUTES.map((route, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveRoute(i)}
                      className={`text-left rounded-xl border p-5 transition-all ${activeRoute === i ? "border-[#C5A572] bg-[#C5A572]/5 shadow-md" : "border-gray-200 bg-white hover-elevate"}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[#C5A572]" />
                          <span className="font-bold text-[#1A2332] text-sm">{route.from} → {route.to}</span>
                        </div>
                        {route.popular && <Badge className="bg-[#C5A572]/15 text-[#C5A572] border-[#C5A572]/20 text-xs">Popular</Badge>}
                      </div>
                      <div className="text-xs text-gray-500">{route.distance} · {route.time}</div>
                      <div className="text-xs font-semibold text-[#1A2332] mt-1">Transit: {route.transit}</div>
                    </button>
                  ))}
                </div>
                <div className="bg-[#1A2332] rounded-2xl p-8 text-white">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider mb-2">Selected Route</div>
                      <h3 className="text-2xl font-bold mb-2">{ROUTES[activeRoute].from} → {ROUTES[activeRoute].to}</h3>
                      <p className="text-white/60 mb-4 text-sm">{ROUTES[activeRoute].distance} · {ROUTES[activeRoute].time} · Transit: {ROUTES[activeRoute].transit}</p>
                      <p className="text-white/80 text-sm leading-relaxed">Dedicated Ottawa fleet. Your belongings load in Ottawa and arrive at destination without transfer to any third-party carrier. Binding quote before booking, confirmed delivery date in writing.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[["Distance", ROUTES[activeRoute].distance], ["Typical Transit", ROUTES[activeRoute].transit], ["Packing", "Full service available"], ["Insurance", "$100K included"]].map(([label, value]) => (
                        <div key={label} className="bg-white/10 rounded-lg p-4">
                          <div className="text-white/50 text-xs mb-1">{label}</div>
                          <div className="text-white font-bold text-sm">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* ── What's Included ── */}
              <section id="whats-included">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-4">What Every Long Distance Move Includes</h2>
                <p className="text-gray-600 mb-6">No upsells on delivery day. Everything below is covered in your binding quote, laid out clearly before you sign.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {INCLUDED.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="bg-white rounded-xl border border-gray-100 p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-[#C5A572]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1A2332] text-sm mb-1">{title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Process ── */}
              <section id="process">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">How Our Long Distance Moving Process Works</h2>
                <p className="text-gray-600 mb-6">Five confirmed stages — every one in writing so you always know what's happening and when.</p>
                <div className="space-y-4">
                  {STEPS.map((step, i) => (
                    <div key={i} className="flex gap-5 items-start bg-white rounded-2xl p-6 border border-gray-100">
                      <div className="w-12 h-12 bg-[#1A2332] rounded-xl flex items-center justify-center shrink-0">
                        <span className="text-[#C5A572] font-black text-sm">{step.num}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1A2332] text-lg mb-1">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Packing Standards ── */}
              <section id="packing-standards">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Long Distance Packing Standards</h2>
                <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
                  <p>The packing standard required for long distance moving is fundamentally different from local moving. A box that holds together for a 30-minute drive across Ottawa may fail at 110km/h on the Trans-Canada Highway. Vibration, road imperfections, temperature changes, and the physical forces of a loaded truck in transit all create conditions that require professional-grade packing materials and techniques.</p>
                  <p>Our long distance packing protocol uses double-wall corrugated boxes — not the single-wall boxes adequate for local moves. Kitchens are packed with dish pack inserts providing individual cell separation for plates, glasses, and mugs. Mirrors and artwork are packed in custom mirror boxes with corner protection and wrapped in packing paper before boxing. Electronics are wrapped in anti-static foam and packed in original boxes where available, or in purpose-built electronics boxes with foam lining where not.</p>
                  <p>Every box is sealed with two layers of packing tape on the bottom and a minimum of three lengths on the top. Boxes are labelled on four sides with room name, contents summary, and handling instructions (fragile, this side up, heavy). This labelling system ensures proper handling by every member of the crew throughout the move.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Double-Wall Boxes", desc: "Crush-resistant corrugated boxes designed for long-haul transit. Minimum 32 ECT strength for heavy items. Single-wall boxes are not acceptable for long distance moves." },
                    { title: "Anti-Vibration Foam", desc: "Closed-cell polyethylene foam inserts for electronics, glassware, and fragile items. Absorbs vibration and impact throughout thousands of kilometres of highway." },
                    { title: "Custom Crating", desc: "Artwork, antiques, mirrors over 60cm, and high-value specialty items are custom-crated with plywood and foam. Available as an add-on service for any item requiring maximum protection." },
                    { title: "Full Furniture Blanket-Wrap", desc: "Every piece of furniture receives two moving blankets secured with stretch wrap. Wood surfaces, upholstered pieces, and glass-faced furniture all wrapped before loading." },
                    { title: "Load Bar Securing System", desc: "Load bars at multiple heights prevent cargo from shifting during transit. Properly secured loads survive highway speeds and emergency braking without damage." },
                    { title: "Room-Coded Labelling", desc: "Colour-coded labels identify destination room on each box. Speeds unloading and eliminates misplaced boxes — your kitchen boxes don't end up in the basement." },
                  ].map(item => (
                    <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-bold text-[#1A2332] text-sm mb-1">{item.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Binding Quotes ── */}
              <section id="binding-quotes">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">What Is a Binding Quote — And Why It Matters</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>A binding quote is a written guarantee of your final moving price. When you receive a binding quote from Prestige Moving, the number on that document is the number on your final invoice — not a starting point for negotiation and not a figure subject to adjustment based on actual weight, fuel costs, or any other variable.</p>
                  <p>The alternative — non-binding estimates — are the source of most long distance moving complaints. The pattern is predictable: a mover provides a low estimate to win your business, loads your belongings onto their truck, and presents a significantly higher invoice at delivery. At that point, you have no leverage. Your possessions are on their truck, your new home is waiting, and they know it. This practice is common enough that the Canadian Consumer Protection Act includes specific provisions about moving company pricing — but enforcement is difficult, and the experience is devastating for families who've already paid deposits and committed to a possession date.</p>
                  <p>Binding quotes require the moving company to accurately assess your inventory before quoting — which is why our binding quote process includes either an in-person walkthrough of your home or a video walkthrough. This takes more time than providing an estimate over the phone, but it means the number you receive reflects your actual shipment, not a ballpark figure designed to look attractive.</p>
                </div>
                <div className="mt-6 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-[#1A2332] mb-2">The Prestige Binding Quote Promise</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">Every long distance quote from Prestige Moving is binding. The price we give you after our inventory walkthrough is locked in writing. The only circumstances under which pricing changes: you add significantly more items than inventoried (addition to scope, documented and agreed in writing before loading begins), or you require additional services not in the original scope. Price never changes on delivery day — ever.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── Avoid Brokers ── */}
              <section id="avoid-brokers">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">How to Avoid Long Distance Moving Scams</h2>
                <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
                  <p>The long distance moving industry has a higher concentration of fraudulent and low-quality operators than almost any other service industry. The most important protection available to Ottawa families planning a long distance move is education — knowing the warning signs before you commit to a company.</p>
                </div>
                <div className="space-y-3 mb-6">
                  {[
                    { flag: "Non-binding estimates", desc: "Any mover unwilling to provide a binding quote is not confident their estimate reflects your actual shipment — or they plan to change the price on delivery." },
                    { flag: "No physical address in Ottawa", desc: "Rogue operators advertise heavily online but have no local presence. If you can't verify a physical Ottawa office, warehouse, and marked fleet, be cautious." },
                    { flag: "Unusually low quotes", desc: "Long distance moving has real costs. A quote that's dramatically lower than all others is either under-scoped or will be supplemented with delivery-day charges." },
                    { flag: "Third-party brokering", desc: "Brokers take your booking and hand your shipment to a carrier you've never met, with no relationship to the company you contracted. Your belongings are now in the hands of strangers." },
                    { flag: "Vague delivery windows", desc: "Legitimate long distance movers provide a specific confirmed delivery date. A 7–21 day window is a sign your shipment will be consolidated with others and delivered when convenient for them." },
                    { flag: "No WSIB or liability insurance", desc: "Legitimate Ottawa moving companies carry current WSIB and liability insurance and will provide certificates on request. Companies that hesitate to provide these are operating without them." },
                  ].map(item => (
                    <div key={item.flag} className="bg-white rounded-xl border border-gray-100 p-5">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-bold text-[#1A2332] text-sm mb-1">Red Flag: {item.flag}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Pricing ── */}
              <section id="pricing">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-4">Long Distance Moving Cost Guide</h2>
                <p className="text-gray-600 mb-6">Typical ranges to help you plan your budget. Your binding quote is based on an in-home inventory walkthrough. All prices in CAD.</p>
                <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#1A2332] text-white">
                        <th className="text-left p-4 text-sm font-bold">Home Size</th>
                        <th className="text-left p-4 text-sm font-bold">Ottawa → Toronto</th>
                        <th className="text-left p-4 text-sm font-bold">Ottawa → Montreal</th>
                        <th className="text-left p-4 text-sm font-bold">Ottawa → Vancouver</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { size: "Studio / 1BR", toronto: "$1,800–$2,800", montreal: "$1,200–$2,000", vancouver: "$5,500–$8,000" },
                        { size: "2 Bedroom", toronto: "$2,500–$4,500", montreal: "$1,800–$3,000", vancouver: "$7,500–$12,000" },
                        { size: "3 Bedroom", toronto: "$4,500–$7,500", montreal: "$3,000–$5,000", vancouver: "$11,000–$16,000" },
                        { size: "4+ Bedroom", toronto: "$7,500–$12,000", montreal: "$5,000–$8,000", vancouver: "$16,000–$24,000" },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="p-4 font-bold text-[#1A2332] text-sm">{row.size}</td>
                          <td className="p-4 text-gray-700 text-sm">{row.toronto}</td>
                          <td className="p-4 text-gray-700 text-sm">{row.montreal}</td>
                          <td className="p-4 text-gray-700 text-sm">{row.vancouver}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500">Prices include packing materials and basic transit insurance. Binding quote issued after in-home walkthrough. Peak summer season (June–August) may be higher.</p>
              </section>

              {/* ── Route Guides ── */}
              <section id="route-guides">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Ottawa Long Distance Moving Route Guides</h2>

                <div className="rounded-2xl overflow-hidden mb-8">
                  <img src={longDistanceCanadaImg} alt="Canada long distance moving from Ottawa across the country" className="w-full h-64 object-cover" />
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl border border-gray-100 p-6">
                    <h3 className="text-xl font-bold text-[#1A2332] mb-3">Ottawa to Toronto Moving</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">The Ottawa–Toronto corridor is Canada's most-moved route, with thousands of Ottawa residents relocating to the GTA annually for employment at Bay Street firms, government relations roles, or tech companies in the University Avenue corridor. At 450 kilometres, the drive is 4–5 hours; our crews typically load in Ottawa on Day 1 and deliver in Toronto on Day 2, with same-day delivery available for early-start loads. The biggest risk on this route is non-binding estimates — Ottawa families report final invoices 40–80% higher than initial estimates from predatory operators. Our binding Ottawa-to-Toronto quotes typically run <strong className="text-[#1A2332]">$2,500–$4,500 for 2-bedroom apartments</strong> with professional packing included.</p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-100 p-6">
                    <h3 className="text-xl font-bold text-[#1A2332] mb-3">Ottawa to Montreal Moving</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">At under 200 kilometres, Ottawa–Montreal is our most frequent long distance route and is typically completed same-day. Our team navigates Quebec's unique moving environment with fluent French-language building coordination, Montreal-specific elevator and permit requirements, and familiarity with July 1st — Quebec's traditional moving day when hundreds of thousands of residents move simultaneously. We plan July 1st Montreal moves 6–8 weeks out due to the extreme demand concentration. <strong className="text-[#1A2332]">Ottawa to Montreal binding quotes for 2-bedroom apartments typically run $1,800–$3,000</strong>.</p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-100 p-6">
                    <h3 className="text-xl font-bold text-[#1A2332] mb-3">Ottawa to Vancouver Moving</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">Cross-country moves from Ottawa to BC are our most logistically complex long distance service. At 4,400 kilometres, transit typically takes 7–10 days depending on routing and season. These moves require our highest packing standards — double-wall boxes throughout, anti-vibration foam, and custom crating for artwork, antiques, and specialty items. Temperature fluctuations between Ottawa and the Rockies make climate-controlled transport essential for sensitive items. We strongly recommend full-service packing for all cross-Canada moves. <strong className="text-[#1A2332]">Binding Ottawa to Vancouver quotes for 3-bedroom homes typically run $11,000–$16,000</strong>.</p>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-100 p-6">
                    <h3 className="text-xl font-bold text-[#1A2332] mb-3">Ottawa to Calgary / Edmonton Moving</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">Ottawa to Alberta moves have surged with Alberta's economic growth and the movement of federal government employees to regional offices. At 3,300 kilometres to Calgary (5–7 day transit) and 3,500 kilometres to Edmonton, these moves benefit from our direct-fleet advantage — no broker consolidation means your transit time is predictable and your delivery date is confirmed in writing. Many Ottawa-to-Alberta moves include government employees on posting allowances — we're experienced working within DND and federal posting allowance frameworks. <strong className="text-[#1A2332]">Ottawa to Calgary binding quotes for 2-bedroom apartments typically run $5,500–$9,000</strong>.</p>
                  </div>
                </div>

                <div className="mt-6 text-sm text-gray-600 leading-relaxed">
                  <p>For specific neighbourhood pages: <Link href="/ottawa-to-montreal-movers" className="text-[#C5A572] hover:underline">Ottawa to Montreal movers</Link>, <Link href="/ottawa-to-toronto-movers" className="text-[#C5A572] hover:underline">Ottawa to Toronto movers</Link>. For other long distance routes, call (613) 600-4000 — we cover all Canadian provinces and territories.</p>
                </div>
              </section>

              {/* ── FAQ ── */}
              <section id="faq">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Frequently Asked Questions — Long Distance Moving from Ottawa</h2>
                <div className="space-y-3">
                  {FAQS.map((faq, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full text-left px-6 py-4 flex justify-between items-start gap-4"
                      >
                        <span className="font-semibold text-[#1A2332] text-sm leading-snug">{faq.q}</span>
                        <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 mt-0.5 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Reviews ── */}
              <section id="reviews">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-2">What Ottawa Families Say About Our Long Distance Service</h2>
                <p className="text-gray-500 text-sm mb-6">5.0★ average · 400+ verified Google reviews</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: "Jennifer & Mark T.", route: "Ottawa → Toronto", review: "Binding quote matched the final invoice exactly — to the dollar. Crew loaded Friday in Ottawa, delivered Saturday afternoon in Toronto. Not one broken item in the whole move. After hearing horror stories about long distance movers, this was a completely different experience. Highly recommend Prestige to anyone moving from Ottawa to the GTA." },
                    { name: "David R.", route: "Ottawa → Vancouver", review: "Cross-country relocation for work. The GPS tracking meant I could check on my belongings any time during the 9-day transit. Arrived in Vancouver on the exact confirmed date. Price held exactly as quoted. Nothing hidden, nothing extra. I was nervous about a cross-Canada move but Prestige made it effortless." },
                    { name: "Sarah K.", route: "Ottawa → Montreal", review: "Same-day delivery was perfect. Crew loaded in Ottawa in the morning and had everything in my Montreal apartment by 6pm. They coordinated with the building in French for elevator access. Completely seamless. Much better than the nightmare move I had with another company 3 years ago." },
                    { name: "The Anderson Family", route: "Ottawa → Calgary", review: "Military posting move from Ottawa to Calgary. Prestige was familiar with the DND posting allowance process and worked within our framework. Quote was binding, delivery was on the date confirmed, and not one item was damaged in the 3,300km transit. Will use again for our next posting." },
                  ].map(r => (
                    <div key={r.name} className="bg-white rounded-xl border border-gray-100 p-6">
                      <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />)}</div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">"{r.review}"</p>
                      <div>
                        <div className="font-semibold text-[#1A2332] text-sm">{r.name}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><MapPin className="h-3 w-3" />{r.route}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>

      <SeoKeywordsSection currentPage="/services/long-distance-moving" />

      {/* ── CTA ── */}
      <section className="bg-[#1A2332] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Globe className="h-10 w-10 text-[#C5A572] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-3">Get Your Binding Long Distance Quote</h2>
          <p className="text-white/65 mb-2 max-w-xl mx-auto">Moving from Ottawa anywhere in Canada. Price guaranteed in writing before you sign — no surprises on delivery day.</p>
          <p className="text-[#C5A572] font-semibold mb-8">(613) 600-4000</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Get Binding Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
