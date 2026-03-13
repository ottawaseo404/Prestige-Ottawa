import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, Star, ArrowRight, ChevronDown, CheckCircle2, MapPin,
  TruckIcon, Shield, Award, Clock, DollarSign, Package
} from "lucide-react";
import fleetImg from "@assets/prestige-fleet_1771975522124.webp";
import teamImg from "@assets/prestige_moving_1772836136864.jpg";

const TOC_ITEMS = [
  { id: "kanata-movers-overview", title: "Kanata Moving Services" },
  { id: "kanata-neighbourhoods",  title: "Kanata Neighbourhoods" },
  { id: "kanata-move-cost",       title: "Kanata Moving Cost" },
  { id: "condo-new-build",        title: "Kanata Condos & New Builds" },
  { id: "why-prestige",          title: "Why Choose Prestige" },
  { id: "service-areas",         title: "Kanata Sub-Areas We Serve" },
  { id: "faq",                   title: "FAQ" },
];

const FAQS = [
  { q: "How much do movers cost in Kanata, Ottawa?", a: "Moving costs in Kanata depend on home size and the distance of the move. A 2-bedroom apartment move within Kanata typically costs $465–$700 (3–5 hours at Prestige's Premium rate of $155/hr). A 3-bedroom house in Kanata moving to central Ottawa runs $780–$1,200. All Prestige Moving Kanata quotes are written and itemized." },
  { q: "How far is Kanata from downtown Ottawa?", a: "Kanata is approximately 25–35 km from downtown Ottawa (Parliament Hill area), depending on the specific street. Drive time is 25–40 minutes without traffic. During peak rush hour (westbound in the morning, eastbound in the evening), travel time can extend to 45–60 minutes. We factor in travel time in all Kanata moving quotes." },
  { q: "What is moving in Kanata like?", a: "Kanata's newer housing stock (primarily 1990s–2020s construction) features wider doorways and more open floor plans compared to Ottawa's heritage areas. Most Kanata homes have attached garages and direct driveway access. Condos and apartment buildings in Kanata South near the Queensway are the most common condo-access scenario. Overall, Kanata is one of the more logistically straightforward moving destinations in the Ottawa area." },
  { q: "What areas of Kanata do you service?", a: "We service all of Kanata including: Beaverbrook, Glen Cairn, Bridlewood, Morgan's Grant, Katimavik, Kanata Lakes, Traditions, Emerald Meadows, Findlay Creek-adjacent areas, and all Kanata South condo developments near the Queensway/417. We also service Stittsville, which is directly adjacent to Kanata's western boundary." },
  { q: "Are Kanata movers available on weekends?", a: "Yes. Prestige Moving operates 7 days a week in Kanata. Weekend availability in Kanata is typically strong except during peak season month-ends (April–September) when all Ottawa moving companies see high demand. We recommend booking 4–6 weeks in advance for weekend moves in Kanata during peak season." },
  { q: "Do you move businesses in Kanata's tech corridor?", a: "Yes. Kanata's technology corridor (Kanata North Business Park — home to Shopify, Nokia, Ericsson, and hundreds of tech companies) is within our commercial moving service area. We move offices of all sizes in Kanata, including server room equipment, workstations, and commercial furniture. After-hours and weekend commercial moves available to minimize business downtime." },
];

const KANATA_AREAS = [
  "Beaverbrook", "Glen Cairn", "Bridlewood", "Morgan's Grant", "Katimavik",
  "Kanata Lakes", "Traditions", "Emerald Meadows", "Kanata South",
  "Kanata North Business Park", "Hazeldean", "Robertson / Richcraft Homes",
  "South March", "March Road Corridor", "Stittsville (adjacent)"
];

export default function KanataMoverPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving — Kanata Movers",
    "url": "https://prestigemoving.ca/kanata-movers",
    "telephone": "(613) 600-4000",
    "address": { "@type": "PostalAddress", "streetAddress": "50 Colonnade Rd Unit 200B", "addressLocality": "Ottawa", "addressRegion": "ON", "postalCode": "K2E 7J6", "addressCountry": "CA" },
    "areaServed": [{ "@type": "City", "name": "Kanata" }, { "@type": "City", "name": "Ottawa" }],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" },
    "description": "Prestige Moving provides professional moving services in Kanata, Ottawa. Residential and commercial moves. 5.0 stars, 400+ reviews. Call (613) 600-4000."
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } })) };

  return (
    <>
      <Helmet>
        <title>Kanata Movers | Moving Companies Kanata Ottawa | Prestige Moving</title>
        <meta name="description" content="Kanata's top-rated moving company — Prestige Moving. Residential and commercial moves throughout Kanata, Ottawa. 5.0 stars, 400+ reviews. Call (613) 600-4000." />
        <meta name="keywords" content="kanata movers, moving companies kanata, movers kanata Ottawa, kanata moving company, best movers kanata, kanata residential movers, moving companies kanata Ontario" />
        <link rel="canonical" href="https://prestigemoving.ca/kanata-movers" />
        <meta property="og:title" content="Kanata Movers | Moving Companies Kanata Ottawa | Prestige Moving" />
        <meta property="og:description" content="Top-rated Kanata movers. 5.0 stars, 400+ reviews. Residential and commercial moves throughout Kanata, Ottawa." />
        <meta property="og:url" content="https://prestigemoving.ca/kanata-movers" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />
      <div className="min-h-screen bg-white">

        <section className="relative h-[500px] flex items-end pb-16">
          <img src={fleetImg} alt="Kanata movers Ottawa — Prestige Moving" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1620]/95 via-[#0d1620]/65 to-[#0d1620]/30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <MapPin className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Kanata, Ottawa · Your Local Movers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 max-w-3xl leading-tight">Kanata Movers</h1>
            <p className="text-lg text-white/70 max-w-xl mb-2">Residential and commercial moving services throughout Kanata, Ottawa. The same 5.0-star crew that serves all of Ottawa — right here in Kanata.</p>
            <p className="text-white/50 text-sm mb-8 flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-[#C5A572] fill-[#C5A572]" /> 5.0 stars · 400+ reviews</span>
              <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-[#C5A572]" /> WSIB Certified · $2M Insured</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">Book Kanata Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <section className="bg-[#1A2332] py-5">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "5.0 ★",     label: "Google Rating" },
              { value: "400+",      label: "Five-Star Reviews" },
              { value: "$155/hr",   label: "Starting Rate" },
              { value: "Same-Day",  label: "Kanata Availability" },
            ].map(({ value, label }, i) => (
              <div key={i}><div className="text-lg font-bold text-[#C5A572]">{value}</div><div className="text-white/50 text-xs mt-0.5">{label}</div></div>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="xl:flex gap-12 items-start">
            <TableOfContents items={TOC_ITEMS} />
            <div className="flex-1 min-w-0 space-y-16">

              <section id="kanata-movers-overview" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <TruckIcon className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Kanata Moving Services</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Kanata Moving Company — Prestige Moving</h2>
                <p className="text-gray-600 leading-relaxed mb-4">Kanata is one of the fastest-growing communities in Ottawa — and one of our most active moving markets. From the established residential neighbourhoods of Beaverbrook and Glen Cairn to the newer communities of Morgan's Grant and Kanata Lakes, and the booming condo market in Kanata South, Prestige Moving handles every Kanata move with the same 5.0-star standard we apply across Ottawa.</p>
                <p className="text-gray-600 leading-relaxed mb-4">Kanata's housing mix is distinctive: primarily newer construction (1990s–2020s) with wider doorways and open floor plans compared to Ottawa's heritage areas, a significant proportion of detached and semi-detached homes with attached garages, and a growing condo and apartment sector along the Queensway/417 corridor and near the Kanata North tech hub. Our crew knows every sub-community and can plan your Kanata move efficiently from first contact.</p>
                <p className="text-gray-600 leading-relaxed mb-6">We move residents within Kanata (Kanata to Kanata), from Kanata to any Ottawa neighbourhood, from Ottawa to Kanata, and long-distance from Kanata to any Canadian destination.</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: TruckIcon, title: "Residential Kanata Moves", desc: "Single-family homes, townhomes, condos, and apartments throughout Kanata. All sizes from studio to 5-bedroom+." },
                    { icon: Package, title: "Commercial Kanata Moves", desc: "Office relocations in Kanata's tech corridor. After-hours and weekend commercial moves available." },
                    { icon: MapPin, title: "Long-Distance from Kanata", desc: "Kanata to Toronto, Montreal, Vancouver, and all Canadian cities. Written fixed-rate quotes for all long-distance moves." },
                  ].map(({ icon: Icon, title, desc }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-9 h-9 rounded-lg bg-[#C5A572]/10 flex items-center justify-center mb-3"><Icon className="h-4 w-4 text-[#C5A572]" /></div>
                      <div className="font-bold text-[#1A2332] text-sm mb-1">{title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="kanata-neighbourhoods" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <MapPin className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Kanata Communities</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Moving in Kanata — Community by Community</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "Beaverbrook & Glen Cairn", detail: "Kanata's original residential communities (1960s–1980s). Established streets with mature trees and attached garages. Older construction means slightly narrower doorways than newer Kanata developments but generally straightforward access." },
                    { name: "Bridlewood", detail: "Established family-oriented neighbourhood with primarily detached homes and townhomes. Good driveway access. One of the most active Kanata moving markets we serve." },
                    { name: "Morgan's Grant", detail: "Newer construction (1990s–2010s) with modern floor plans. Wide doorways and open-plan layouts make furniture moves here efficient. Many homes have direct garage access." },
                    { name: "Kanata Lakes", detail: "Premium residential community. Large detached homes, some with multi-car garages and significant furniture volumes. We quote Kanata Lakes homes individually based on inventory." },
                    { name: "Kanata South (Condos)", detail: "The fastest-growing segment of Kanata's housing market. Multiple condo buildings along the Queensway corridor require elevator booking coordination — we handle all condo building logistics." },
                    { name: "Kanata North Tech Corridor", detail: "Ottawa's technology hub. Commercial office moves serving Shopify, Nokia, Ericsson, and hundreds of smaller tech companies. After-hours and weekend commercial moves standard here." },
                  ].map(({ name, detail }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-2">{name}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{detail}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="kanata-move-cost" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <DollarSign className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Kanata Moving Prices</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">How Much Do Kanata Movers Cost?</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Kanata moving prices follow the same structure as all Ottawa moving — hourly with a 3-hour minimum. Moves within Kanata are efficient given the area's consistent street layout. Moves from Kanata to central Ottawa (Centretown, Westboro, Sandy Hill) typically add 30–45 minutes of travel time vs. an intra-Kanata move.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="bg-[#1A2332] text-white"><th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Move Type</th><th className="text-center px-4 py-3 font-semibold">Est. Hours</th><th className="text-center px-4 py-3 rounded-tr-xl font-semibold text-[#C5A572]">Estimated Cost</th></tr></thead>
                    <tbody>
                      {[
                        { move: "1-Bedroom within Kanata",         hours: "3–4 hrs", cost: "$465–$620" },
                        { move: "2-Bedroom within Kanata",         hours: "4–6 hrs", cost: "$620–$930" },
                        { move: "3-Bedroom Kanata → Kanata",       hours: "5–7 hrs", cost: "$775–$1,085" },
                        { move: "2-Bedroom Kanata → Downtown",     hours: "5–7 hrs", cost: "$775–$1,085" },
                        { move: "3-Bedroom Kanata → Ottawa-wide",  hours: "6–9 hrs", cost: "$930–$1,395" },
                        { move: "4-Bedroom Kanata House",          hours: "8–12 hrs", cost: "$1,240–$1,860" },
                      ].map(({ move, hours, cost }, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-4 py-3 font-medium text-[#1A2332]">{move}</td>
                          <td className="px-4 py-3 text-center text-gray-600">{hours}</td>
                          <td className="px-4 py-3 text-center font-bold text-[#C5A572]">{cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-400 text-xs mt-3">*Based on Premium Package at $155/hr with 3-hour minimum. Estimates for local Kanata/Ottawa moves. Travel fee not included. All moves subject to written quote.</p>
              </section>

              <section id="condo-new-build" className="scroll-mt-24 bg-gray-50/70 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Award className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Kanata Condos & New Builds</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Moving Into Kanata Condos and New Construction</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Kanata South's growing condo market and the wave of new construction throughout Kanata create specific moving considerations our crew handles routinely:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Condo Elevator Booking", desc: "Kanata's condo buildings typically require advance elevator booking for move-in/move-out. We coordinate directly with your building management to schedule the elevator window and comply with all building move-in rules." },
                    { title: "New Build Pre-Move", desc: "Moving into a new construction home in Kanata? We've done hundreds of new-build deliveries. Protect new floors with furniture pads; we bring proper floor protection as standard." },
                    { title: "Construction Zone Access", desc: "Active construction areas in Kanata occasionally restrict parking or access during weekday hours. We assess your specific address before moving day and plan accordingly." },
                    { title: "Builder Warranty Protection", desc: "New home builder warranties may require movers to use floor protection and avoid marking walls. Our crew follows all builder guidelines to protect your new home's condition on move-in day." },
                  ].map(({ title, desc }, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-1">{title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="service-areas" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <MapPin className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Kanata Coverage</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Kanata Sub-Areas We Serve</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {KANATA_AREAS.map(area => (
                    <div key={area} className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A572] shrink-0" />
                      <span className="text-gray-700 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <img src={teamImg} alt="Prestige Moving Kanata crew" className="w-full h-52 object-cover object-top" />
                  <div className="absolute inset-0 bg-[#0d1620]/75 flex items-center pl-8">
                    <div>
                      <div className="text-white font-bold text-lg mb-1">Serving All of Kanata</div>
                      <div className="text-white/70 text-sm">From Beaverbrook to Morgan's Grant — we know every street.</div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="faq" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">FAQ</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-8">FAQ — Kanata Movers</h2>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button className="w-full flex items-center justify-between gap-4 p-5 text-left hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`button-faq-kanata-${i}`}>
                        <span className="font-semibold text-[#1A2332] text-sm">{q}</span>
                        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      {openFaq === i && <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{a}</div>}
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>

        <section className="py-16 bg-[#1A2332]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-0.5 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-[#C5A572] fill-[#C5A572]" />)}</div>
            <h2 className="text-3xl font-bold text-white mb-3">Kanata's Top-Rated Moving Company</h2>
            <p className="text-white/55 mb-8 max-w-lg mx-auto">5.0 stars · 400+ verified reviews · From Beaverbrook to Morgan's Grant, we know Kanata.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Book Kanata Move <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>
      </div>
      <SharedFooter />
    </>
  );
}
