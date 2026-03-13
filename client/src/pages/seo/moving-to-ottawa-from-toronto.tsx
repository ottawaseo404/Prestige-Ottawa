import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, Star, ArrowRight, ChevronDown, CheckCircle2, ChevronRight,
  MapPin, TruckIcon, Clock, DollarSign, Shield, Award, Package, Calendar
} from "lucide-react";
import fleetImg from "@assets/prestige-fleet_1771975522124.webp";

const TOC_ITEMS = [
  { id: "toronto-to-ottawa-overview", title: "Toronto to Ottawa Overview" },
  { id: "cost",                       title: "Cost of Moving to Ottawa" },
  { id: "what-to-know-ottawa",        title: "What to Know About Ottawa" },
  { id: "ottawa-neighbourhoods",      title: "Ottawa Neighbourhoods Guide" },
  { id: "moving-checklist",           title: "Toronto-to-Ottawa Checklist" },
  { id: "why-prestige",               title: "Why Choose Prestige" },
  { id: "faq",                        title: "FAQ" },
];

const FAQS = [
  { q: "How much does it cost to move from Toronto to Ottawa?", a: "A Toronto-to-Ottawa move typically costs $1,200–$3,500 depending on home size, volume of belongings, and time of year. A 1-bedroom apartment move from Toronto to Ottawa averages $1,200–$1,800. A 2-bedroom runs $1,800–$2,500. A 3-bedroom house runs $2,500–$4,000+. All Prestige Moving Toronto-to-Ottawa quotes are written and fixed." },
  { q: "How long does it take to move from Toronto to Ottawa?", a: "Driving time from Toronto to Ottawa is approximately 4–5 hours depending on traffic and route (Highway 401 to Highway 416, or the more northern Route 7). Add 2–3 hours for loading and 2–3 hours for unloading. A full Toronto-to-Ottawa move typically completes in 8–12 hours depending on home size, both addresses' access, and time of day." },
  { q: "What is the best route to drive from Toronto to Ottawa?", a: "The most common route from Toronto to Ottawa is Highway 401 East to Highway 416 North directly into Ottawa — approximately 450 km and 4–4.5 hours. An alternative is Highway 7 through Perth and Carleton Place — slightly longer in distance but often faster when 401 is congested. Our drivers know both routes and monitor real-time traffic on moving day." },
  { q: "Is it better to move to Ottawa in summer or winter from Toronto?", a: "Cost-wise, an October–April move is less expensive and easier to book. Practically, a summer move gives you more daylight hours and avoids icy highway conditions. Ottawa winters are significantly colder than Toronto — highway conditions between Toronto and Ottawa can be challenging from November through March. If you're on a budget, winter is cheaper. If you prioritize ease of the drive, summer is better." },
  { q: "Do Toronto to Ottawa movers charge by weight or by the hour?", a: "Most reputable companies charge by the hour for the crew (or by a flat/fixed-rate quote based on your inventory and distance). Weight-based pricing is more common for interprovincial van line moves. Prestige Moving provides a flat-rate written quote for all Toronto-to-Ottawa moves based on your home size, inventory, and both addresses' access." },
  { q: "What neighbourhoods in Ottawa are good for Toronto transplants?", a: "Toronto residents moving to Ottawa often settle in: Westboro (walkable, eclectic, restaurants and shops reminiscent of Toronto's Annex), Centretown (urban, walkable, condos and apartments similar to Toronto's downtown core), Hintonburg (arts district, similar vibe to Toronto's Roncesvalles or Leslieville), and Kanata/Barrhaven (suburban, great schools, similar to Mississauga or Scarborough for families)." },
  { q: "How early should I book a Toronto-to-Ottawa move?", a: "Book 4–8 weeks in advance for a Toronto-to-Ottawa move. Long-distance moves require more logistical planning than local moves — the crew and truck are committed to a full day, and any delays affect both your schedule and the company's schedule. Peak season (May–September) moves from Toronto to Ottawa should be booked 6–10 weeks ahead." },
  { q: "Does Prestige Moving handle the full Toronto-to-Ottawa move?", a: "Yes. Prestige Moving handles full Toronto-to-Ottawa relocations including packing (if requested), loading, transportation, and unloading at your new Ottawa address. We provide a single written quote covering all services. We do not use subcontractors or third-party carriers for our Toronto-to-Ottawa route." },
];

const NEIGHBOURHOODS = [
  { name: "Westboro", style: "Urban walkable", bestFor: "Young professionals, couples", desc: "Ottawa's most walkable neighbourhood outside of Centretown. Richmond Road has restaurants, boutiques, and cafes comparable to Toronto's Queen West. Strong rental market and growing condo development. Close to the Ottawa River pathway." },
  { name: "Centretown / The Glebe", style: "Urban downtown", bestFor: "Urban professionals, no-car lifestyle", desc: "Ottawa's equivalent of Toronto's downtown core — the highest concentration of restaurants, nightlife, and walkability in the city. The Glebe is Parliament Hill-adjacent with a strong community feel. Most of Ottawa's condo and apartment inventory is here." },
  { name: "Hintonburg", style: "Arts / eclectic", bestFor: "Artists, young families, foodies", desc: "Ottawa's arts district, comparable to Toronto's Roncesvalles or Leslieville in energy. Wellington West has the best concentration of restaurants per block in Ottawa. Strong cycling culture." },
  { name: "Kanata", style: "Tech suburbs", bestFor: "Tech workers, families", desc: "Home to Ottawa's tech corridor — Shopify, Nokia, and hundreds of tech companies. Large suburban homes at Toronto-suburban prices. Excellent schools. Direct highway access. Popular with Toronto tech transplants." },
  { name: "Barrhaven", style: "Family suburbs", bestFor: "Families with children", desc: "Ottawa's fastest-growing suburb. New construction, excellent school ratings, large lots, and detached homes at prices significantly below Toronto comparable suburbs. Strong community feel." },
  { name: "Alta Vista / Riverview", style: "Established suburbs", bestFor: "Families, upsizing", bestForDetail: "Established Ottawa neighbourhoods with large lots, mature trees, and detached homes well below Toronto prices. Very close to Ottawa General Hospital. Strong school district." },
  { name: "Sandy Hill / Ottawa U", style: "University / urban", bestFor: "Students, young professionals", desc: "University of Ottawa district. Walkable, transit-accessible, lower rents. Similar in character to Toronto's Annex or Harbord Village. Strong multicultural dining scene." },
  { name: "Manotick / Riverside South", style: "Waterfront / rural semi-urban", bestFor: "Those seeking space and nature", desc: "Village character with Ottawa address. Manotick is on the Rideau River — beautiful in summer. Riverside South is a newer planned community with townhomes and detached houses at competitive prices. About 25–30 minutes from downtown Ottawa." },
];

export default function MovingToOttawaFromToronto() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving — Toronto to Ottawa Movers",
    "url": "https://prestigemoving.ca/moving-to-ottawa-from-toronto",
    "telephone": "(613) 600-4000",
    "areaServed": [{ "@type": "City", "name": "Toronto" }, { "@type": "City", "name": "Ottawa" }],
    "description": "Prestige Moving provides Toronto to Ottawa long-distance moving services. Written fixed quotes, employee crew, full insurance. 5.0 stars."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } }))
  };

  return (
    <>
      <Helmet>
        <title>Moving to Ottawa from Toronto | Toronto to Ottawa Movers | Prestige Moving</title>
        <meta name="description" content="Moving from Toronto to Ottawa? Prestige Moving provides professional Toronto-to-Ottawa long-distance moves. Written fixed quotes, employee crew, 5.0 stars. Call (613) 600-4000." />
        <meta name="keywords" content="moving to Ottawa from Toronto, Toronto to Ottawa movers, Toronto Ottawa moving company, moving company Toronto to Ottawa, relocating to Ottawa from Toronto, Ottawa Toronto movers" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-to-ottawa-from-toronto" />
        <meta property="og:title" content="Moving to Ottawa from Toronto | Toronto to Ottawa Movers" />
        <meta property="og:description" content="Professional Toronto to Ottawa moving service. Written fixed quotes, 5.0 stars, employee crew." />
        <meta property="og:url" content="https://prestigemoving.ca/moving-to-ottawa-from-toronto" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />
      <div className="min-h-screen bg-white">

        <section className="relative h-[500px] flex items-end pb-16">
          <img src={fleetImg} alt="Toronto to Ottawa movers — Prestige Moving long distance" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d1620]/92" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Toronto → Ottawa · ~450 km · 4–5 Hours</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 max-w-3xl leading-tight">Moving to Ottawa from Toronto</h1>
            <p className="text-lg text-white/70 max-w-xl mb-2">Professional Toronto-to-Ottawa moving service with written fixed quotes, employee crew, and full insurance coverage from load to delivery.</p>
            <p className="text-white/50 text-sm mb-8 flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-[#C5A572] fill-[#C5A572]" /> 5.0 stars · 400+ reviews</span>
              <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-[#C5A572]" /> Fixed quotes · No surprises</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">Get Toronto-Ottawa Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <section className="bg-[#1A2332] py-5">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "450 km",        label: "Toronto to Ottawa" },
              { value: "4–5 hrs",       label: "Drive time" },
              { value: "$1,200–$3,500", label: "Typical move cost" },
              { value: "Fixed Quote",   label: "Written, no surprises" },
            ].map(({ value, label }, i) => (
              <div key={i}>
                <div className="text-lg font-bold text-[#C5A572]">{value}</div>
                <div className="text-white/50 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="xl:flex gap-12 items-start">
            <TableOfContents items={TOC_ITEMS} />
            <div className="flex-1 min-w-0 space-y-20">

              <section id="toronto-to-ottawa-overview" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <MapPin className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Move Overview</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Toronto to Ottawa: What to Expect from Your Move</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Toronto-to-Ottawa corridor is one of Canada's most common long-distance moving routes. Ottawa's growing tech sector, federal government employment, more affordable housing, and lower cost of living attract tens of thousands of Torontonians each year. The route is approximately 450 km, takes 4–5 hours to drive, and — with a professional moving company — is a highly manageable same-day move for most home sizes up to 3 bedrooms.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Unlike interprovincial long-distance moves across multiple provinces, the Toronto-to-Ottawa move is straightforward: same-day service, a single truck, and a crew that stays with your belongings from loading to delivery. You're not dealing with a van line relay system or a delivery window — your movers load in Toronto in the morning and deliver in Ottawa that same afternoon or evening.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Prestige Moving handles the full Toronto-to-Ottawa route with our own trucks and our own employee crew. No subcontractors, no third-party carriers, no relay handoffs. The same crew who loads your Toronto home delivers to your Ottawa address.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  {[
                    { icon: TruckIcon, title: "Same-Day Service", desc: "Load in Toronto morning, deliver in Ottawa afternoon/evening. No multi-day van line relay." },
                    { icon: Shield, title: "Employee Crew Only", desc: "Your crew stays with your belongings from Toronto to Ottawa. No third-party handoffs." },
                    { icon: DollarSign, title: "Fixed Written Quote", desc: "One written price for the full Toronto-to-Ottawa move. No mileage surprises on delivery." },
                  ].map(({ icon: Icon, title, desc }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-9 h-9 rounded-lg bg-[#C5A572]/10 flex items-center justify-center mb-3"><Icon className="h-4 w-4 text-[#C5A572]" /></div>
                      <div className="font-bold text-[#1A2332] text-sm mb-1">{title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="cost" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <DollarSign className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Toronto-to-Ottawa Pricing</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Cost of Moving from Toronto to Ottawa</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Toronto-to-Ottawa moves are priced on a flat-rate basis based on your home size and inventory — not by the hour. This gives you cost certainty for the full move before anything is loaded.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {[
                    { size: "Bachelor / Studio",   cost: "$800–$1,200",   crew: "2 movers", time: "6–8 hrs total" },
                    { size: "1-Bedroom",            cost: "$1,200–$1,800", crew: "2 movers", time: "7–10 hrs total" },
                    { size: "2-Bedroom",            cost: "$1,800–$2,500", crew: "2–3 movers", time: "9–12 hrs total" },
                    { size: "3-Bedroom House",      cost: "$2,500–$3,800", crew: "3 movers", time: "10–14 hrs total" },
                    { size: "4-Bedroom House",      cost: "$3,500–$5,000+", crew: "3–4 movers", time: "12–16+ hrs total" },
                    { size: "Office / Commercial",  cost: "Custom quote", crew: "3–6 movers", time: "Custom timeline" },
                  ].map(({ size, cost, crew, time }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-1">{size}</div>
                      <div className="text-2xl font-bold text-[#C5A572] mb-2">{cost}</div>
                      <div className="text-xs text-gray-400">{crew} · {time}</div>
                    </div>
                  ))}
                </div>
                <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
                  All estimates above are for move only — packing is additional if requested. Final price depends on actual inventory and both addresses' access conditions. All Prestige Moving Toronto-to-Ottawa quotes are provided in writing before booking is confirmed.
                </div>
              </section>

              <section id="what-to-know-ottawa" className="scroll-mt-24 bg-gray-50/70 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <MapPin className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Relocating to Ottawa</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">What Toronto Residents Need to Know About Ottawa</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Housing Costs", detail: "Ottawa's average home price is significantly below Toronto's. Detached homes in established Ottawa suburbs (Kanata, Barrhaven, Alta Vista) are available at prices comparable to Toronto condos. The affordability jump for Toronto transplants is one of the most compelling reasons people make this move." },
                    { title: "Winters Are Colder", detail: "Ottawa experiences -20°C to -30°C regularly in January and February. Toronto's moderated climate (regularly above -10°C) doesn't prepare you for Ottawa winters. Budget for better winter tires, warmer clothing, and potentially a garage." },
                    { title: "Bilingualism", detail: "Ottawa is Canada's most bilingual major city outside of Montréal. French is widely spoken in Gatineau (directly across the Ottawa River) and increasingly in Ottawa itself. Bilingualism is a significant advantage for federal government roles." },
                    { title: "Federal Government Employment", detail: "Ottawa's largest employer is the Government of Canada. Remote work has decentralized this somewhat, but Ottawa remains the epicentre of Canadian federal public service. The job market for public sector professionals is unmatched in Canada." },
                    { title: "Commuting vs. Toronto", detail: "Ottawa's rush hour is approximately 30–45 minutes at peak times, compared to Toronto's 60–90+ minutes. Most Ottawa residents are within 25–35 minutes of downtown without highway congestion comparable to the 401 or DVP." },
                    { title: "No Toronto TTC — LRT Instead", detail: "Ottawa's transit is the OC Transpo bus network and the Confederation Line LRT (Stage 1 and 2 open). Coverage is good in the urban core. Suburban areas (Kanata, Barrhaven) have less frequent bus service than comparable Toronto suburbs." },
                    { title: "Outdoor Recreation", detail: "Ottawa sits at the junction of the Ottawa River, Rideau River, and the Rideau Canal system — the world's longest skating rink in winter and a UNESCO World Heritage waterway in summer. Gatineau Park (right across the river) offers world-class hiking, mountain biking, and skiing." },
                    { title: "Cultural Life", detail: "Ottawa is home to 30+ national museums (most free), the National Arts Centre, Bluesfest, and dozens of festivals year-round. The cultural calendar is more concentrated than many Torontonians expect from a smaller city." },
                  ].map(({ title, detail }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-2">{title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{detail}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="ottawa-neighbourhoods" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <MapPin className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Where to Live in Ottawa</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Ottawa Neighbourhoods: A Guide for Toronto Transplants</h2>
                <div className="space-y-4">
                  {NEIGHBOURHOODS.map(({ name, style, bestFor, desc, bestForDetail }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <div className="font-bold text-[#1A2332] text-base">{name}</div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#C5A572]/10 text-[#C5A572] font-medium">{style}</span>
                        <span className="text-xs text-gray-400">Best for: {bestFor}</span>
                      </div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc || bestForDetail}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="moving-checklist" className="scroll-mt-24 bg-[#1A2332] rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Toronto-to-Ottawa Checklist</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Toronto to Ottawa Moving Checklist</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Book moving company 4–8 weeks in advance",
                    "Research Ottawa neighbourhoods for your lifestyle",
                    "Update Ontario driver's licence to Ottawa address within 6 days",
                    "Update vehicle registration at Service Ontario",
                    "Notify federal employers of provincial address (if applicable)",
                    "Forward mail via Canada Post (online update takes 2–3 days to process)",
                    "Cancel/transfer Toronto-specific memberships and services",
                    "Register children in Ottawa schools (waitlists exist in desirable areas)",
                    "Research Ottawa OC Transpo routes for your new commute",
                    "Budget for Ottawa winter tires (mandatory on most roads Nov–March)",
                    "Open Ottawa bank branch account / update banking address",
                    "Update Ottawa address for CRA (can be done online via My Account)",
                    "Research Ottawa doctors/dentists before you move",
                    "Confirm elevator booking at your Ottawa condo (if applicable)",
                    "Pack an 'Ottawa essentials' first-night box",
                    "Confirm moving day parking at both Toronto and Ottawa addresses",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section id="why-prestige" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Award className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Why Prestige</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Choose Prestige Moving for Toronto to Ottawa</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "One Team, Start to Finish", desc: "The crew that loads your Toronto home is the same crew that delivers to Ottawa. No handoffs, no relay carriers, no strangers touching your belongings mid-move." },
                    { title: "Fixed Written Quote", desc: "Your Toronto-to-Ottawa price is agreed in writing before any loading begins. The invoice matches the quote — guaranteed." },
                    { title: "Ottawa Specialists", desc: "We're Ottawa-based. We know every neighbourhood, every condo building's elevator rules, and every tight staircase in the city. We deliver to your Ottawa address with the knowledge of locals." },
                    { title: "Full Insurance Coverage", desc: "Commercial general liability, cargo insurance, and WSIB certification covering the full Toronto-to-Ottawa route. Your belongings are protected from the moment we load to the moment we deliver." },
                  ].map(({ title, desc }, i) => (
                    <div key={i} className="flex gap-3 p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1A2332] text-sm mb-1">{title}</div>
                        <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faq" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">FAQ</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-8">FAQ — Moving from Toronto to Ottawa</h2>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button className="w-full flex items-center justify-between gap-4 p-5 text-left hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`button-faq-toronto-${i}`}>
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
            <h2 className="text-3xl font-bold text-white mb-3">Toronto to Ottawa — Done Right</h2>
            <p className="text-white/55 mb-8 max-w-lg mx-auto">One team, one truck, one fixed price. Load in Toronto, deliver in Ottawa. 5.0 stars across 400+ reviews.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Get Toronto-Ottawa Quote <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>
      </div>
      <SharedFooter />
    </>
  );
}
