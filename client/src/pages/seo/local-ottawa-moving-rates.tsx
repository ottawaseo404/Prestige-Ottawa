import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, Star, ArrowRight, ChevronDown, CheckCircle2, ChevronRight,
  DollarSign, TruckIcon, Clock, AlertTriangle, Calendar, MapPin, Package, Shield, Lock
} from "lucide-react";
import fleetImg from "@assets/prestige-fleet_1771975522124.webp";

const TOC_ITEMS = [
  { id: "hourly-rates",          title: "Ottawa Hourly Moving Rates" },
  { id: "cost-by-home-size",     title: "Cost by Home Size" },
  { id: "what-affects-cost",     title: "What Affects Your Rate" },
  { id: "seasonal-pricing",      title: "Seasonal Pricing in Ottawa" },
  { id: "additional-fees",       title: "Additional Fees to Know" },
  { id: "how-to-save",          title: "How to Lower Your Cost" },
  { id: "getting-a-quote",      title: "Getting an Accurate Quote" },
  { id: "faq",                  title: "FAQ" },
];

const FAQS = [
  { q: "What is the average cost of hiring movers in Ottawa?", a: "The average Ottawa moving cost for a 2-bedroom apartment is $600–$900 for a 4–6 hour move at a mid-range hourly rate. A 3-bedroom house typically runs $900–$1,500 depending on the number of staircases, amount of furniture, and any specialty items. These estimates assume a local Ottawa move (within the city limits). Add approximately $200–$400 for long-distance moves within Ontario." },
  { q: "How much do Ottawa movers charge per hour?", a: "Ottawa moving companies charge $120–$200+ per hour for a 2-mover crew depending on the company tier, season, and specific service level. Budget companies operate at the low end ($120–$140/hr) with fewer protections. Mid-range reputable companies typically charge $150–$170/hr. Premium services with specialty equipment and senior staff charge $190–$215/hr for a 2-mover crew." },
  { q: "Do Ottawa movers charge a minimum number of hours?", a: "Yes. Almost all Ottawa moving companies require a minimum booking of 2–3 hours. The industry standard in Ottawa is a 3-hour minimum. This covers the cost of dispatching a crew and truck to your location even for short moves. Prestige Moving's minimum is 3 hours." },
  { q: "Is there a travel fee for Ottawa movers?", a: "Most Ottawa moving companies charge a travel fee to cover the time driving from their depot to your origin address and back after the move. This is typically a flat fee of $50–$100 or billed as a 0.5–1 hour charge at the hourly rate. Always confirm how travel time is billed when comparing Ottawa moving quotes." },
  { q: "Are Ottawa moving rates higher on weekends?", a: "Yes — most Ottawa movers charge a 10–20% premium for Saturday and Sunday moves, and an additional premium for moves on long weekends. Moving on a Tuesday, Wednesday, or Thursday in mid-month is typically the lowest-cost option in Ottawa." },
  { q: "How much does it cost to move in Ottawa at the end of the month?", a: "End-of-month moving in Ottawa (27th–31st) carries significant demand surcharges. The last three days of the month are when most Ottawa leases expire, creating competition for every available moving company. Premium moves on the 1st or 30th–31st of any month can cost 25–40% more than the same move mid-month, and availability is significantly reduced." },
  { q: "What is a binding moving estimate in Ottawa?", a: "A binding estimate commits the moving company to a fixed price for the move as described. You will pay exactly what was quoted regardless of whether the move takes more or less time. Non-binding estimates (hourly) mean the final price depends on actual time. Always get the terms of your estimate in writing — verbal commitments are not enforceable." },
  { q: "Do Ottawa movers charge extra for stairs?", a: "Yes. Most Ottawa moving companies apply a surcharge for staircases — typically $25–$75 per floor, per direction of travel (up or down). A piano or heavy appliance moving through 3 flights of stairs will carry a more significant staircase surcharge. Always disclose your staircase situation when getting Ottawa moving quotes to ensure an accurate estimate." },
  { q: "How much should I tip Ottawa movers?", a: "Tipping is not required but is customary and appreciated. A typical tip is $20–$40 per mover for a full-day move, or 5–10% of the total invoice. Tip at the end of the move when you're satisfied with the service. It's given directly to the crew members, not to the company." },
  { q: "What is the cheapest time to move in Ottawa?", a: "The cheapest time to move in Ottawa is mid-week (Tuesday–Thursday), mid-month (10th–20th), and during the off-peak season (October through April, excluding the December holidays). Booking 4–8 weeks in advance further reduces cost by giving you access to promotional rates and maximum scheduling flexibility." },
];

export default function LocalOttawaMovingRates() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ottawa Moving Rates & Cost Guide 2026",
    "description": "Complete guide to Ottawa moving company rates and costs in 2026. Hourly rates, cost by home size, seasonal pricing, and how to get the best moving quote in Ottawa.",
    "author": { "@type": "Organization", "name": "Prestige Moving" },
    "url": "https://prestigemoving.ca/local-ottawa-moving-rates",
    "datePublished": "2026-01-01",
    "dateModified": "2026-03-01"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } }))
  };

  return (
    <>
      <Helmet>
        <title>Ottawa Moving Rates & Costs 2026 | Local Ottawa Moving Prices | Prestige Moving</title>
        <meta name="description" content="Complete guide to Ottawa moving company rates in 2026. Hourly rates ($120–$215/hr), cost by home size, seasonal pricing, stair fees, and how to get the best Ottawa moving quote." />
        <meta name="keywords" content="Ottawa moving rates, Ottawa moving costs, how much do movers cost Ottawa, Ottawa moving prices 2026, moving company rates Ottawa, hourly movers Ottawa, moving companies Ottawa prices" />
        <link rel="canonical" href="https://prestigemoving.ca/local-ottawa-moving-rates" />
        <meta property="og:title" content="Ottawa Moving Rates & Costs 2026 | Local Ottawa Moving Prices" />
        <meta property="og:description" content="The complete guide to Ottawa moving company rates — hourly rates, home size estimates, seasonal pricing, and fee breakdowns." />
        <meta property="og:url" content="https://prestigemoving.ca/local-ottawa-moving-rates" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />
      <div className="min-h-screen bg-white">

        {/* HERO */}
        <section className="relative h-[500px] flex items-end pb-16">
          <img src={fleetImg} alt="Ottawa moving rates and costs guide" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1620]/95 via-[#0d1620]/65 to-[#0d1620]/30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <DollarSign className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Ottawa Moving Cost Guide · Updated March 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 max-w-3xl leading-tight">Ottawa Moving Rates &amp; Costs 2026</h1>
            <p className="text-lg text-white/70 max-w-xl mb-2">Hourly rates, full-move cost estimates by home size, seasonal pricing, and every fee Ottawa movers actually charge — explained clearly.</p>
            <p className="text-white/50 text-sm mb-8 flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-[#C5A572] fill-[#C5A572]" /> 5.0 stars · 400+ reviews</span>
              <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-[#C5A572]" /> Written quotes · No hidden fees</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">Get Your Ottawa Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        {/* QUICK NUMBERS */}
        <section className="bg-[#1A2332] py-6">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "Call Now", label: "For Hourly Rates" },
              { value: "3-hr min",     label: "Minimum Booking" },
              { value: "$600–$900",    label: "Avg 2-Bedroom Move" },
              { value: "$1,200–$2,000", label: "Avg 4-Bedroom House" },
            ].map(({ value, label }, i) => (
              <div key={i}>
                <div className="text-lg md:text-xl font-bold text-[#C5A572]">{value}</div>
                <div className="text-white/50 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="xl:flex gap-12 items-start">
            <TableOfContents items={TOC_ITEMS} />

            <div className="flex-1 min-w-0 space-y-20">

              {/* INTRO */}
              <div>
                <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                  Moving costs in Ottawa depend on more variables than most people realize — and not understanding them is how Ottawa residents end up with a surprise invoice on moving day. This guide breaks down exactly how Ottawa moving companies price their services in 2026: hourly rates by company tier, full-move cost estimates by home size, the surcharges that add to your bill, and the specific decisions that will reduce your moving cost by 20–40%.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The data below reflects current Ottawa market rates as of Q1 2026 and is updated regularly to reflect seasonal changes in local moving pricing.
                </p>
              </div>

              {/* HOURLY RATES */}
              <section id="hourly-rates" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Clock className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">2026 Hourly Rates</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Ottawa Moving Company Hourly Rates in 2026</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Ottawa moving companies charge by the hour for the crew — not just by move size or distance. The hourly rate covers all movers on the job and typically includes one moving truck. What you pay per hour reflects the company's overhead: insurance levels, training standards, equipment quality, and employee vs. subcontractor staffing.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {[
                    { tier: "Budget Tier", rate: "$120–$140/hr", crew: "2 movers + 1 truck", who: "Owner-operators, seasonal companies, classified-ad operators", pros: "Lowest upfront rate", cons: "Often limited insurance, subcontractors, inconsistent quality, may have hidden fees" },
                    { tier: "Mid-Range", rate: "$150–$175/hr", crew: "2 movers + 1 truck", who: "Established local companies with full-time employees", pros: "Balance of quality and value, usually WSIB certified", cons: "Service level varies between companies at this tier", highlight: true },
                    { tier: "Premium Tier", rate: "$190–$215/hr", crew: "2 movers + 1 truck", who: "Specialist moving companies with senior crews, specialty equipment", pros: "Full insurance, trained senior crews, best equipment, reliable service", cons: "Higher rate but typically offset by efficiency" },
                  ].map(({ tier, rate, crew, who, pros, cons, highlight }, i) => (
                    <div key={i} className={`p-5 rounded-xl border-2 ${highlight ? "border-[#C5A572] bg-[#C5A572]/5" : "border-gray-200"}`}>
                      {highlight && <div className="text-[#C5A572] text-xs font-bold uppercase tracking-wide mb-2">Most Ottawa Residents</div>}
                      <div className="font-bold text-[#1A2332] text-base mb-1">{tier}</div>
                      <div className="text-2xl font-bold text-[#C5A572] mb-2">{rate}</div>
                      <div className="text-xs text-gray-400 mb-3">{crew}</div>
                      <div className="text-xs text-gray-500 mb-2"><span className="font-medium text-gray-600">Who: </span>{who}</div>
                      <div className="text-xs text-green-700 mb-1"><span className="font-medium">Pro: </span>{pros}</div>
                      <div className="text-xs text-red-600"><span className="font-medium">Con: </span>{cons}</div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-[#1A2332] mb-4">Prestige Moving Ottawa Rates (2026)</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { name: "Premium Package",  min: "3-hour minimum", includes: "2 movers, 1 truck, blankets, wrap, basic disassembly", best: "1–2 bedroom moves, straightforward access" },
                    { name: "Deluxe Package",   min: "3-hour minimum", includes: "3 movers, 1 truck, full equipment, priority scheduling", best: "2–3 bedroom homes, some stairs or specialty items" },
                    { name: "Diamond Package",  min: "3-hour minimum", includes: "4+ movers, 2 trucks, full service with senior crew lead", best: "4+ bedroom homes, estates, commercial moves" },
                  ].map(({ name, min, includes, best }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-base mb-1">{name}</div>
                      <a href="tel:6136004000" className="relative inline-flex items-center gap-1.5 bg-white rounded-lg px-3 py-1.5 mb-1 border border-gray-200 overflow-hidden cursor-pointer">
                        <span className="text-xl font-bold text-[#C5A572] blur-sm select-none pointer-events-none">$000/hr</span>
                        <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-[1px]">
                          <Lock className="h-3.5 w-3.5 text-[#C5A572] mr-1" />
                          <span className="text-xs font-bold text-[#1A2332]">Call for Rate</span>
                        </div>
                      </a>
                      <div className="text-xs text-gray-400 mb-3">{min}</div>
                      <div className="text-xs text-gray-500 mb-1"><span className="font-medium text-gray-600">Includes: </span>{includes}</div>
                      <div className="text-xs text-gray-500"><span className="font-medium text-gray-600">Best for: </span>{best}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* COST BY HOME SIZE */}
              <section id="cost-by-home-size" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <TruckIcon className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Cost Estimates by Home Size</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Ottawa Moving Costs by Home Size (2026)</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  These estimates represent a typical Ottawa local move at mid-range rates ($155–$175/hr) with a 2-mover crew. Actual times vary based on how well-packed the home is, the number of stairs, elevator availability, and the amount of furniture. Use these ranges for initial budgeting — get a written quote for your specific move.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#1A2332] text-white">
                        <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Home Size</th>
                        <th className="text-center px-4 py-3 font-semibold">Est. Hours</th>
                        <th className="text-center px-4 py-3 font-semibold">Crew</th>
                        <th className="text-center px-4 py-3 font-semibold">Budget Range</th>
                        <th className="text-center px-4 py-3 rounded-tr-xl font-semibold text-[#C5A572]">Mid-Range (Prestige)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { size: "Bachelor / Studio",         hours: "2–3 hrs", crew: "2 movers", budget: "$240–$420", prestige: "$310–$465" },
                        { size: "1-Bedroom Apartment",        hours: "3–4 hrs", crew: "2 movers", budget: "$360–$560", prestige: "$465–$620" },
                        { size: "2-Bedroom Apartment",        hours: "4–6 hrs", crew: "2 movers", budget: "$480–$840", prestige: "$620–$930" },
                        { size: "2-Bedroom House",            hours: "5–7 hrs", crew: "2–3 movers", budget: "$600–$980", prestige: "$775–$1,170" },
                        { size: "3-Bedroom House",            hours: "6–9 hrs", crew: "3 movers", budget: "$720–$1,260", prestige: "$1,170–$1,755" },
                        { size: "4-Bedroom House",            hours: "8–12 hrs", crew: "3–4 movers", budget: "$960–$1,680", prestige: "$1,560–$2,520" },
                        { size: "5+ Bedroom / Estate",        hours: "10–16+ hrs", crew: "4+ movers", budget: "$1,200+", prestige: "$2,520+" },
                      ].map(({ size, hours, crew, budget, prestige }, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-4 py-3 font-medium text-[#1A2332]">{size}</td>
                          <td className="px-4 py-3 text-center text-gray-600">{hours}</td>
                          <td className="px-4 py-3 text-center text-gray-500 text-xs">{crew}</td>
                          <td className="px-4 py-3 text-center text-gray-600">{budget}</td>
                          <td className="px-4 py-3 text-center font-semibold text-[#C5A572]">{prestige}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-400 text-xs">*Budget range based on $120/hr. Prestige range based on $155/hr (Premium Package) with 3-hour minimum. Estimates are for local Ottawa moves; does not include travel fee, stair surcharges, or specialty item fees. All moves subject to written quote.</p>
              </section>

              {/* WHAT AFFECTS COST */}
              <section id="what-affects-cost" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <AlertTriangle className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Cost Factors</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">What Affects the Cost of Your Ottawa Move?</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Two Ottawa moves with the same home size can have dramatically different costs. Here are the factors that push your moving cost up or down — and which ones you can control:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { factor: "Number of Movers", impact: "More movers = higher hourly rate but shorter overall time. A 3-mover crew on a 3-bedroom house is almost always more cost-effective than 2 movers taking 3 extra hours.", control: "high" },
                    { factor: "Staircase Count", impact: "Each staircase adds time and surcharges. A third-floor walkup on both sides adds 1.5–2.5 hours to an average Ottawa move vs. ground floor access.", control: "low" },
                    { factor: "Packing Level", impact: "Arriving unpacked adds 2–4 hours to an average move. Professional pre-packing saves move-day time but costs extra separately.", control: "high" },
                    { factor: "Distance Within Ottawa", impact: "Driving time between your origin and destination is billed at the hourly rate. Kanata to Orleans is 40+ minutes vs. Centretown to Westboro at 10 minutes.", control: "low" },
                    { factor: "Specialty Items", impact: "Pianos ($250–$500 extra), pool tables, gun safes, and hot tubs require specific equipment and crew techniques — always a separate line item.", control: "low" },
                    { factor: "Elevator Booking", impact: "Ottawa condo buildings require elevator booking windows (typically 2–4 hour windows). If the elevator runs late, you're paying hourly for crew wait time.", control: "medium" },
                    { factor: "Moving Date", impact: "Weekend vs. weekday, end-of-month vs. mid-month, peak season vs. off-season — date choice is the #1 controllable cost factor in Ottawa moving.", control: "high" },
                    { factor: "Amount of Furniture", impact: "More furniture = more trips to the truck. Decluttering before the move is the simplest way to reduce total move time.", control: "high" },
                  ].map(({ factor, impact, control }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-[#1A2332] text-sm">{factor}</div>
                        <div className={`text-xs px-2 py-0.5 rounded-full font-medium ${control === "high" ? "bg-green-100 text-green-700" : control === "medium" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-500"}`}>
                          {control === "high" ? "You control this" : control === "medium" ? "Partially controllable" : "Fixed factor"}
                        </div>
                      </div>
                      <div className="text-gray-500 text-sm leading-relaxed">{impact}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SEASONAL */}
              <section id="seasonal-pricing" className="scroll-mt-24 bg-gray-50/70 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Calendar className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">When You Move Matters</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Seasonal Moving Prices in Ottawa</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Ottawa moving demand is one of the most seasonal in Canada — not because of weather (though Ottawa winters are brutal), but because of the city's concentration of federal government employees, university students, and a lease market that's tightly synchronized with semester and fiscal calendars.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { season: "May – August", demand: "Peak Season", modifier: "+20–35%", color: "red", desc: "Highest demand, limited availability. University moves in April/May and September overlap with the general summer moving season. Book 6–8 weeks ahead minimum." },
                    { season: "April / September", demand: "High Season", modifier: "+10–20%", color: "orange", desc: "University turnover month. Sandy Hill, Centretown, Hintonburg movers are completely booked. Book as early as possible for spring or fall moves near universities." },
                    { season: "Oct – March", demand: "Off-Peak", modifier: "Base Rate", color: "green", desc: "Best value for Ottawa moves. Significantly more availability, often promotional rates. Winter moves require additional care for icy driveways and floor protection." },
                    { season: "27th–31st (Any Month)", demand: "End-of-Month Surge", modifier: "+20–40%", color: "red", desc: "Ottawa leases expire on the last day of each month. All Ottawa movers are fully booked on the 30th–31st. Mid-month moves offer 20–40% savings on identical moves." },
                  ].map(({ season, demand, modifier, color, desc }, i) => (
                    <div key={i} className={`p-5 rounded-xl border ${color === "red" ? "border-red-200 bg-red-50" : color === "orange" ? "border-orange-200 bg-orange-50" : "border-green-200 bg-green-50"}`}>
                      <div className="font-bold text-gray-800 text-sm mb-1">{season}</div>
                      <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${color === "red" ? "text-red-600" : color === "orange" ? "text-orange-600" : "text-green-600"}`}>{demand}</div>
                      <div className={`text-lg font-bold mb-3 ${color === "red" ? "text-red-700" : color === "orange" ? "text-orange-700" : "text-green-700"}`}>{modifier}</div>
                      <div className="text-gray-600 text-xs leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ADDITIONAL FEES */}
              <section id="additional-fees" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <DollarSign className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Know Before You Book</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Additional Fees Ottawa Movers Charge</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Beyond the hourly rate, Ottawa moving companies charge additional fees for specific circumstances. Knowing these in advance means no surprise on your invoice. Prestige Moving's policy: every potential additional charge is disclosed in writing before your move — nothing appears on invoice day that wasn't in your quote.
                </p>
                <div className="space-y-3">
                  {[
                    { fee: "Travel Fee", range: "$50–$100 flat, or 0.5–1 hr billed", desc: "Covers the truck and crew driving from the company's depot to your address and back after the move. Almost all Ottawa movers charge this — it should appear on your quote, not appear as a surprise." },
                    { fee: "Stair Surcharge", range: "$25–$75 per flight", desc: "Each flight of stairs at origin or destination. A third-floor walkup at both addresses means 4 flights in total (up at origin, down from origin, up at destination, down at destination). Always disclose your staircase situation when quoting." },
                    { fee: "Long Carry Fee", range: "$25–$50 per 50 ft over standard", desc: "When the truck cannot park close to the door — long driveways, parking restrictions, or underground parking situations — movers carry items a greater distance. Most companies have a standard carry distance included; beyond that is a long carry fee." },
                    { fee: "Elevator Wait Time", range: "Billed at hourly rate", desc: "If a condo elevator is delayed, booked by another move, or unavailable due to building scheduling issues, the crew waiting time is billed at the standard hourly rate." },
                    { fee: "Specialty Item Fee", range: "$100–$500+ per item", desc: "Pianos, pool tables, gun safes, hot tubs, and gym equipment. Each has a separate fee reflecting the specific equipment, extra crew time, and additional insurance risk of the item." },
                    { fee: "Packing Materials", range: "$50–$300+ depending on volume", desc: "If the moving company brings boxes, packing paper, and tape for you. Should be itemized separately from the hourly service rate." },
                    { fee: "Disassembly / Reassembly", range: "$25–$100 per complex piece", desc: "Standard bed frames and basic furniture disassembly is typically included. Complex items like custom wardrobes, bunk beds with stairs, or IKEA PAX systems with hardware-intensive reassembly may carry a separate fee." },
                    { fee: "Weekend / Holiday Premium", range: "+10–20%", desc: "Saturday, Sunday, and statutory holiday moves carry a premium. Wednesday mid-month moves are the most economical time slot in Ottawa." },
                  ].map(({ fee, range, desc }, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="min-w-[130px]">
                        <div className="font-bold text-[#1A2332] text-sm">{fee}</div>
                        <div className="text-[#C5A572] text-xs font-medium mt-0.5">{range}</div>
                      </div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* HOW TO SAVE */}
              <section id="how-to-save" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <DollarSign className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Reduce Your Moving Cost</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">How to Lower Your Ottawa Moving Cost</h2>
                <p className="text-gray-600 leading-relaxed mb-8">These decisions are entirely within your control and collectively can reduce your Ottawa moving cost by 30–45%:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { action: "Move mid-week, mid-month", saving: "15–25% savings", detail: "Tuesday, Wednesday, or Thursday, between the 10th and 20th of any month, is when Ottawa moving companies have the most availability and lowest rates." },
                    { action: "Move in off-peak season", saving: "20–35% savings", detail: "October through April (excluding December holidays) is when Ottawa mover rates drop to their lowest. Off-season demand is 50–70% of peak season demand." },
                    { action: "Pack everything yourself", saving: "2–4 hours of crew time", detail: "Every hour of packing the crew does on move day is billed at your hourly rate. Arriving fully packed — with every box sealed, labelled, and ready to carry — is the single biggest time saver." },
                    { action: "Declutter before the move", saving: "1–3 hours of crew time", detail: "Every item you donate, sell, or dispose of before the move is one less item for the crew to carry, load, and unload. A 20% volume reduction typically cuts 1+ hours from an average Ottawa move." },
                    { action: "Disassemble furniture yourself", saving: "30–90 min of crew time", detail: "Bed frames, dining tables, and modular furniture you disassemble before the crew arrives means no disassembly time billed at your hourly rate." },
                    { action: "Book 4–8 weeks in advance", saving: "Access to best pricing", detail: "Early booking gives you the widest date flexibility — and flexibility is the most powerful lever for price in Ottawa moving. Last-minute bookings pay premium rates for whatever dates remain." },
                  ].map(({ action, saving, detail }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-green-50 border border-green-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-green-900 text-sm">{action}</div>
                        <div className="text-xs px-2 py-0.5 rounded-full bg-green-200 text-green-800 font-bold shrink-0 ml-2">{saving}</div>
                      </div>
                      <div className="text-green-800 text-sm leading-relaxed">{detail}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* GETTING A QUOTE */}
              <section id="getting-a-quote" className="scroll-mt-24 bg-[#1A2332] rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
                  <Package className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Get a Written Quote</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">How to Get an Accurate Ottawa Moving Quote</h2>
                <p className="text-white/60 leading-relaxed mb-6">To get a quote that reflects your actual move — with no invoice surprises — have the following ready before you contact an Ottawa moving company:</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Home size and number of rooms",
                    "Origin and destination postal codes",
                    "Number of staircases at each address",
                    "Elevator availability (if condo)",
                    "Any specialty items (piano, safe, hot tub)",
                    "Preferred move date(s)",
                    "Packing level: fully packed vs. partial vs. unpacked",
                    "Any large/heavy items requiring extra crew",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/book" className="flex-1">
                    <Button className="bg-[#C5A572] text-[#1A2332] font-bold w-full">Get Your Written Quote <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </Link>
                  <a href="tel:6136004000" className="flex-1">
                    <Button variant="outline" className="text-white border-white/20 w-full"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button>
                  </a>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Frequently Asked Questions</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-8">FAQ — Ottawa Moving Rates &amp; Costs</h2>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button className="w-full flex items-center justify-between gap-4 p-5 text-left hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`button-faq-rates-${i}`}>
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
            <h2 className="text-3xl font-bold text-white mb-3">Written Quotes. No Hidden Fees. 5.0 Stars.</h2>
            <p className="text-white/55 mb-8 max-w-lg mx-auto">Every Prestige Moving quote is written, itemized, and signed. What we quote is what you pay.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Get Your Quote <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>
      </div>
      <SharedFooter />
    </>
  );
}
