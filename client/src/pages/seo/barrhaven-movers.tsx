import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, Star, ArrowRight, ChevronDown, CheckCircle2, MapPin,
  TruckIcon, Shield, DollarSign, Package, Award
} from "lucide-react";
import fleetImg from "@assets/prestige-fleet_1771975522124.webp";
import teamImg from "@assets/prestige_moving_1772836136864.jpg";

const TOC_ITEMS = [
  { id: "barrhaven-overview",    title: "Barrhaven Moving Services" },
  { id: "barrhaven-communities", title: "Barrhaven Communities" },
  { id: "cost",                  title: "Barrhaven Moving Cost" },
  { id: "why-prestige",          title: "Why Choose Prestige" },
  { id: "service-areas",         title: "Sub-Areas We Serve" },
  { id: "faq",                   title: "FAQ" },
];

const FAQS = [
  { q: "How much do movers cost in Barrhaven, Ottawa?", a: "Barrhaven moving costs depend on home size and distance. A 2-bedroom apartment move within Barrhaven typically costs $465–$700 (3–5 hours at $155/hr). A 3-bedroom house in Barrhaven moving to central Ottawa runs $930–$1,395 given the greater travel distance. All Prestige Moving Barrhaven quotes are written and itemized." },
  { q: "How far is Barrhaven from downtown Ottawa?", a: "Barrhaven is approximately 25–35 km south of downtown Ottawa, with typical drive times of 25–40 minutes off-peak. During rush hour, the Strandherd Drive and Highway 416 connections see significant congestion — peak inbound commute times can reach 45–60 minutes. We factor drive time between your Barrhaven and Ottawa addresses into every moving estimate." },
  { q: "What is the housing situation in Barrhaven like for movers?", a: "Barrhaven's housing is almost entirely newer construction — primarily 1990s to present. This means newer, wider floor plans compared to Ottawa's heritage core, most homes with attached garages and driveway access, and predominantly detached and semi-detached homes with townhomes. Moving conditions in Barrhaven are generally very favourable — good access, newer construction, and consistent street layouts." },
  { q: "Do you move long-distance from Barrhaven?", a: "Yes. We move from Barrhaven to Toronto, Montreal, Vancouver, Calgary, and all Canadian cities. Long-distance Barrhaven moves are priced on a flat-rate basis with a written quote provided before booking confirmation." },
  { q: "Are you available on weekends in Barrhaven?", a: "Yes. We operate 7 days a week in Barrhaven. Weekend availability is strong outside of peak season month-ends (May–September). We recommend booking 4–6 weeks in advance for weekend Barrhaven moves during summer." },
  { q: "Do you do commercial moves in Barrhaven?", a: "Yes. We handle commercial office and retail moves in Barrhaven. Barrhaven's commercial strip (Strandherd Drive corridor, Barrhaven Town Centre area) is within our commercial service area. After-hours and weekend commercial moves are available." },
];

const COMMUNITIES = [
  "Stonebridge", "Half Moon Bay", "Longfields", "Chapman Mills",
  "Cedarhill", "Pheasant Run", "Emerald Meadows", "Barrhaven Centre",
  "Strandherd", "Rideau Ridge", "Heritage Park", "Osprey Meadows",
  "Fallowfield", "Jockvale", "Woodroffe South"
];

export default function BarrhavenMovers() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving — Barrhaven Movers",
    "url": "https://prestigemoving.ca/barrhaven-movers",
    "telephone": "(613) 600-4000",
    "areaServed": [{ "@type": "City", "name": "Barrhaven" }, { "@type": "City", "name": "Ottawa" }],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" },
    "description": "Top-rated moving company in Barrhaven, Ottawa. 5.0 stars, 400+ reviews. Residential and commercial moves. Call (613) 600-4000."
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } })) };

  return (
    <>
      <Helmet>
        <title>Barrhaven Movers | Moving Companies Barrhaven Ottawa | Prestige Moving</title>
        <meta name="description" content="Top-rated Barrhaven moving company — Prestige Moving. Residential and commercial moves throughout Barrhaven, Ottawa. 5.0 stars, 400+ reviews. (613) 600-4000." />
        <meta name="keywords" content="barrhaven movers, moving companies barrhaven, movers barrhaven Ottawa, barrhaven moving company, best movers barrhaven, residential movers barrhaven" />
        <link rel="canonical" href="https://prestigemoving.ca/barrhaven-movers" />
        <meta property="og:title" content="Barrhaven Movers | Moving Companies Barrhaven Ottawa | Prestige Moving" />
        <meta property="og:description" content="Top-rated Barrhaven movers. 5.0 stars, 400+ reviews. Residential and commercial moves in Barrhaven." />
        <meta property="og:url" content="https://prestigemoving.ca/barrhaven-movers" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />
      <div className="min-h-screen bg-white">

        <section className="relative h-[500px] flex items-end pb-16">
          <img src={fleetImg} alt="Barrhaven movers Ottawa — Prestige Moving" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d1620]/82" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <MapPin className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Barrhaven, Ottawa · Your Local Movers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 max-w-3xl leading-tight">Barrhaven Movers</h1>
            <p className="text-lg text-white/70 max-w-xl mb-2">Professional moving services throughout Barrhaven — Stonebridge, Half Moon Bay, Longfields, and all surrounding communities.</p>
            <p className="text-white/50 text-sm mb-8 flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-[#C5A572] fill-[#C5A572]" /> 5.0 stars · 400+ reviews</span>
              <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-[#C5A572]" /> WSIB Certified · $2M Insured</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">Book Barrhaven Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <section className="bg-[#1A2332] py-5">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "5.0 ★",     label: "Google Rating" },
              { value: "400+",      label: "Reviews" },
              { value: "$155/hr",   label: "Starting Rate" },
              { value: "7 Days",    label: "Availability" },
            ].map(({ value, label }, i) => (
              <div key={i}><div className="text-lg font-bold text-[#C5A572]">{value}</div><div className="text-white/50 text-xs mt-0.5">{label}</div></div>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="xl:flex gap-12 items-start">
            <TableOfContents items={TOC_ITEMS} />
            <div className="flex-1 min-w-0 space-y-16">

              <section id="barrhaven-overview" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <TruckIcon className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Our Barrhaven Services</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Moving Company in Barrhaven, Ottawa</h2>
                <p className="text-gray-600 leading-relaxed mb-4">Barrhaven is Ottawa's fastest-growing suburb — and one of the most active residential moving markets in the National Capital Region. Every year, thousands of Ottawa families buy or rent in Barrhaven, drawn by newer housing stock, excellent schools, and prices significantly below comparable areas in other major Canadian cities. Prestige Moving has been a primary mover for Barrhaven residents throughout this growth — handling hundreds of moves into, out of, and within the community each year.</p>
                <p className="text-gray-600 leading-relaxed mb-4">Barrhaven's housing is almost entirely newer construction (1990s–present), meaning wider doorways, modern open-concept floor plans, and good driveway access in most communities. Our crew navigates Barrhaven's street network efficiently — from Stonebridge's premium detached homes to Half Moon Bay's growing townhome communities and Longfields' established single-family streets.</p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  {[
                    { icon: TruckIcon, title: "Local Barrhaven Moves", desc: "Within Barrhaven or Barrhaven to anywhere in Ottawa. Hourly pricing with 3-hour minimum." },
                    { icon: Package, title: "Long-Distance from Barrhaven", desc: "Barrhaven to Toronto, Montreal, Calgary, Vancouver. Fixed-rate written quotes." },
                    { icon: MapPin, title: "Commercial Barrhaven", desc: "Office and retail moves along the Strandherd and Earl Armstrong corridors. After-hours moves available." },
                  ].map(({ icon: Icon, title, desc }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-9 h-9 rounded-lg bg-[#C5A572]/10 flex items-center justify-center mb-3"><Icon className="h-4 w-4 text-[#C5A572]" /></div>
                      <div className="font-bold text-[#1A2332] text-sm mb-1">{title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="barrhaven-communities" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <MapPin className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Community Overview</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Barrhaven Communities We Move</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "Stonebridge", detail: "Barrhaven's premium community centred around Stonebridge Golf Club. Large detached homes with attached double garages. Well-paved access roads and large driveways make for very efficient move logistics." },
                    { name: "Half Moon Bay", detail: "One of the newer and fastest-growing Barrhaven communities. Mix of detached homes, semi-detached, and townhomes. Active new construction means we frequently move families into newly completed Half Moon Bay homes." },
                    { name: "Longfields", detail: "Established Barrhaven community with primarily detached family homes. Good access throughout. Close to the Barrhaven Town Centre commercial area." },
                    { name: "Chapman Mills", detail: "Family-oriented suburban community with detached and semi-detached homes. Well-established street network. Close to Strandherd Drive retail corridor." },
                    { name: "Emerald Meadows", detail: "Mix of housing types including townhomes. Good access from Greenbank Road and Strandherd. One of the more densely settled Barrhaven communities we serve." },
                    { name: "Cedarhill & Pheasant Run", detail: "Established communities near the Jock River. Quiet streets and primarily detached homes. Excellent access for moving trucks." },
                  ].map(({ name, detail }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-2">{name}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{detail}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="cost" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <DollarSign className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Barrhaven Pricing</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Barrhaven Moving Cost Estimates</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="bg-[#1A2332] text-white"><th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Move Type</th><th className="text-center px-4 py-3 font-semibold">Est. Hours</th><th className="text-center px-4 py-3 rounded-tr-xl font-semibold text-[#C5A572]">Estimated Cost</th></tr></thead>
                    <tbody>
                      {[
                        { move: "1-Bedroom within Barrhaven",          hours: "3–4 hrs", cost: "$465–$620" },
                        { move: "2-Bedroom within Barrhaven",          hours: "4–6 hrs", cost: "$620–$930" },
                        { move: "3-Bedroom Barrhaven → Barrhaven",     hours: "5–7 hrs", cost: "$775–$1,085" },
                        { move: "2-Bedroom Barrhaven → Downtown Ottawa", hours: "5–8 hrs", cost: "$775–$1,240" },
                        { move: "3-Bedroom House (any Barrhaven)",      hours: "6–9 hrs", cost: "$930–$1,395" },
                        { move: "4-Bedroom House",                      hours: "9–13 hrs", cost: "$1,395–$2,015" },
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
                <p className="text-gray-400 text-xs mt-3">*Based on Premium Package at $155/hr. Travel fee not included. Written quotes for all moves.</p>
              </section>

              <section id="service-areas" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <MapPin className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">All Barrhaven Areas</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">All Barrhaven Sub-Areas We Serve</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {COMMUNITIES.map(c => (
                    <div key={c} className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A572] shrink-0" />
                      <span className="text-gray-700 text-sm">{c}</span>
                    </div>
                  ))}
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <img src={teamImg} alt="Prestige Moving Barrhaven crew" className="w-full h-52 object-cover object-top" />
                  <div className="absolute inset-0 bg-[#0d1620]/70 flex items-center pl-8">
                    <div>
                      <div className="text-white font-bold text-lg mb-1">Serving All of Barrhaven</div>
                      <div className="text-white/70 text-sm">From Stonebridge to Half Moon Bay — we know every street.</div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="faq" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">FAQ</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-8">FAQ — Barrhaven Movers</h2>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button className="w-full flex items-center justify-between gap-4 p-5 text-left hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`button-faq-barrhaven-${i}`}>
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
            <h2 className="text-3xl font-bold text-white mb-3">Barrhaven's Most Trusted Moving Company</h2>
            <p className="text-white/55 mb-8 max-w-lg mx-auto">5.0 stars · 400+ reviews · From Stonebridge to Half Moon Bay, we've moved Barrhaven.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Book Barrhaven Move <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>
      </div>
      <SharedFooter />
    </>
  );
}
