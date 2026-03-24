import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, Shield, MapPin,
  Truck, Package, Star, ChevronDown, Lock,
  Navigation, Users, Calendar, Globe, FileText
} from "lucide-react";
import longDistanceHeroImg from "@assets/generated_images/long_distance_moving_hero.png";

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
  { q: "Is my furniture insured during long distance transit?", a: "Yes. All long-distance moves include basic valuation coverage. Full replacement value protection is available for an additional premium — strongly recommended for antiques, artwork, and high-value electronics. All coverage options are explained during your quote consultation." },
  { q: "Can I pack my own boxes for a long distance move?", a: "You can, but we don't recommend it. Items that survive a local move often won't survive 400–4,400 km of highway. If you do pack yourself, our crew inspects and reinforces any boxes before loading. Our packing uses long-distance grade materials designed for thousands of kilometres of transit." },
  { q: "Do you offer storage if my home isn't ready at destination?", a: "Yes. If your destination home isn't ready when we load in Ottawa, we offer secure climate-controlled storage at our Ottawa facility on a month-to-month basis. Storage can be added to your move at the quote stage." },
  { q: "What provinces do you move to from Ottawa?", a: "We service all Canadian provinces and territories — Ontario, Quebec, BC, Alberta, Saskatchewan, Manitoba, Nova Scotia, New Brunswick, Newfoundland, PEI, and the territories. We do not service US destinations at this time." },
];

export default function LongDistanceMoving() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeRoute, setActiveRoute] = useState(0);

  return (
    <>
      <Helmet>
        <title>Long Distance Movers Ottawa | Canada-Wide Moving | Prestige Moving</title>
        <meta name="description" content="Ottawa's trusted long distance movers. Binding quotes, GPS tracking, dedicated crew, $100K transit insurance. Moving from Ottawa to Toronto, Vancouver, Calgary or anywhere in Canada. Call (613) 600-4000." />
        <meta name="keywords" content="long distance movers Ottawa, long distance moving Ottawa, Ottawa to Toronto movers, Ottawa to Vancouver movers, cross Canada movers Ottawa, interprovincial movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/services/long-distance-moving" />
        <meta property="og:title" content="Long Distance Movers Ottawa | Binding Quotes, GPS Tracking | Prestige Moving" />
        <meta property="og:description" content="Binding quotes, GPS tracking, dedicated crew, $100K transit insurance. Moving from Ottawa anywhere in Canada." />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Ottawa Movers", "item": "https://prestigemoving.ca" }, { "@type": "ListItem", "position": 2, "name": "Long Distance Movers Ottawa", "item": "https://prestigemoving.ca/services/long-distance-moving" }] })}</script>
      </Helmet>

      <SharedNavigation />

      {/* ── Hero ── */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={longDistanceHeroImg} alt="Long distance moving truck on Canadian highway from Ottawa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/30" />
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

      {/* ── Popular Routes ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Popular Long Distance Routes from Ottawa</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We move from Ottawa to every province in Canada. Click any route to see transit times and what to expect.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {ROUTES.map((route, i) => (
              <button
                key={i}
                onClick={() => setActiveRoute(i)}
                className={`text-left rounded-xl border p-5 transition-all ${activeRoute === i ? "border-[#C5A572] bg-[#C5A572]/5 shadow-md" : "border-gray-200 bg-gray-50 hover-elevate"}`}
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
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">What Every Long Distance Move Includes</h2>
            <p className="text-gray-600 max-w-xl mx-auto">No upsells on delivery day. Everything below is covered in your binding quote, laid out clearly before you sign.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INCLUDED.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-[#C5A572]" />
                </div>
                <h3 className="font-bold text-[#1A2332] text-sm mb-1">{title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5-Step Process ── */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">How Our Long Distance Moving Process Works</h2>
            <p className="text-gray-600">Five stages — every one confirmed in writing so you always know what's happening and when.</p>
          </div>
          <div className="space-y-4">
            {STEPS.map((step, i) => (
              <div key={i} className="flex gap-5 items-start bg-gray-50 rounded-2xl p-6 border border-gray-100">
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
        </div>
      </section>

      {/* ── Pricing Table ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Long Distance Moving Cost Guide</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Typical ranges to help you plan — your binding quote is based on an in-home inventory walkthrough. All prices in CAD.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
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
          <p className="text-xs text-gray-500 mt-3 text-center">Prices include packing materials and basic transit insurance. Binding quote issued after in-home walkthrough. Summer peak season (May–Aug) may be higher.</p>
        </div>
      </section>

      {/* ── Long-form SEO Content ── */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Long Distance Moving from Ottawa — What You Need to Know</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Long distance moving from Ottawa involves challenges that local moves simply don't have. When your belongings travel hundreds or thousands of kilometres, the stakes for proper packing, documentation, and carrier selection are dramatically higher. A piece of furniture that survives a 10-minute drive across Kanata won't necessarily survive 4,500 kilometres of highway to Vancouver without the right preparation.</p>
            <p>The long distance moving industry has a well-documented problem with predatory pricing: movers quote low, load your belongings, and present a much higher invoice at delivery — knowing you have no leverage once your possessions are on their truck. The protection against this is a binding written quote before anything is booked. Every Prestige Moving long-distance quote is binding. No exceptions.</p>

            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Ottawa to Toronto — Canada's Most Common Moving Route</h3>
            <p>The Ottawa–Toronto corridor is our busiest long distance route. Thousands of Ottawa residents relocate to the GTA annually for employment, family proximity, or retirement. At 450 kilometres, the drive is 4–5 hours; our crews typically load in Ottawa on Day 1 and deliver in Toronto on Day 2. Same-day delivery is available for early loading starts. For 2-bedroom apartments, binding quotes typically run $2,500–$4,500 with professional packing included. The biggest risk on this route is the trap of non-binding quotes — Ottawa families who've been stung by unscrupulous movers report final invoices 40–80% higher than the initial estimate. Binding is the only protection.</p>

            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Ottawa to Montreal — Same-Day Cross-Province Moving</h3>
            <p>At under 200 kilometres, Ottawa–Montreal is our shortest long distance route and often completed same-day. Our team is familiar with Quebec's unique moving-day culture (July 1st is Quebec's traditional moving day, when hundreds of thousands of residents move simultaneously). We coordinate French-language building access, elevator reservations, and municipal moving permits for Montreal high-rises. Binding quotes for 2-bedroom moves on this route typically run $1,800–$3,000.</p>

            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Ottawa to Vancouver — Cross-Country Moving</h3>
            <p>Cross-country moves from Ottawa to BC are our most logistically complex. At 4,400 kilometres, transit takes 7–10 days depending on routing and conditions. These moves require the highest packing standards — double-wall boxes, anti-vibration foam throughout, and custom crating for any artwork or antiques. We strongly recommend full-service packing for all cross-country moves. The forces acting on your belongings at 4,400 kilometres are fundamentally different from what they experience on a local move.</p>

            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">How Long Distance Moving Pricing Works</h3>
            <p>Long distance moves are priced on volume (cubic feet of belongings) plus distance (kilometres), not hourly rate as with local moves. This is why an accurate inventory is critical before quoting — which is why we conduct either an in-person or video walkthrough. Factors affecting cost: volume, destination distance, time of year (June–August is peak season with higher demand), packing services, specialty items (pianos, hot tubs, artwork), temporary storage, and floor access at both origin and destination. Getting multiple binding quotes — not estimates — is the best way to compare movers for a long distance move.</p>

            <p>For local Ottawa moving services, see our <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving</Link> and <Link href="/services/commercial-moving" className="text-[#C5A572] hover:underline">commercial moving</Link> pages. For senior relocations across Canada, see our <Link href="/senior-movers-ottawa" className="text-[#C5A572] hover:underline">senior movers Ottawa</Link> page.</p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-2 text-center">What Ottawa Families Say About Our Long Distance Service</h2>
          <p className="text-gray-500 text-center text-sm mb-10">5.0★ average · 400+ verified Google reviews</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Jennifer & Mark T.", route: "Ottawa → Toronto", review: "Binding quote matched the final invoice exactly. Crew loaded Friday in Ottawa, delivered Saturday afternoon in Toronto. Not one broken item in the whole move. After hearing horror stories about long distance movers, this was a completely different experience." },
              { name: "David R.", route: "Ottawa → Vancouver", review: "Cross-country relocation for work. The GPS tracking meant I could check on my belongings any time during the 9-day transit. Arrived in Vancouver on the exact confirmed date. Price held exactly as quoted. Nothing hidden, nothing extra." },
              { name: "Sarah K.", route: "Ottawa → Montreal", review: "Same-day delivery was perfect. Crew loaded in Ottawa in the morning and had everything in my Montreal apartment by 6pm. They coordinated with the building in French for elevator access. Completely seamless." },
            ].map(t => (
              <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />)}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.review}"</p>
                <div className="font-bold text-[#1A2332] text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs flex items-center gap-1 mt-0.5"><MapPin className="h-3 w-3" />{t.route}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-2 text-center">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-center text-sm mb-8">Common questions from Ottawa families planning a long distance move</p>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left bg-gray-50 hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 pt-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-white">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Globe className="h-10 w-10 text-[#C5A572] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Get Your Binding Long Distance Quote</h2>
          <p className="text-white/65 mb-2 max-w-xl mx-auto">Moving from Ottawa anywhere in Canada. Price guaranteed before you sign — no surprises on delivery day.</p>
          <p className="text-[#C5A572] font-semibold mb-8">(613) 600-4000 · Ottawa@prestigemoving.ca</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Binding Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
