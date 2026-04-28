import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, ChevronDown, Truck, Package,
  Shield, Clock, Star, MapPin, AlertCircle, Calendar,
  DollarSign, HelpCircle, BookOpen, Home
} from "lucide-react";

const TOC = [
  { id: "intro", title: "What Is Long Distance Moving in Canada?" },
  { id: "planning", title: "How to Plan a Cross-Country Move" },
  { id: "costs", title: "Long Distance Moving Costs in Canada 2026" },
  { id: "ottawa-routes", title: "Moving From Ottawa: Major Routes" },
  { id: "choosing", title: "How to Choose a Long Distance Mover" },
  { id: "packing", title: "Packing for a Long Distance Move" },
  { id: "what-expect", title: "What to Expect on Your Move" },
  { id: "rights", title: "Your Rights as a Moving Customer" },
  { id: "faq", title: "Frequently Asked Questions" },
];

const FAQS = [
  { q: "How much does long distance moving from Ottawa cost in 2026?", a: "Long distance moving costs from Ottawa depend on distance, volume, and services. Ottawa to Toronto typically runs $1,800–$3,500. Ottawa to Calgary or Edmonton runs $4,500–$8,000+. Ottawa to Vancouver runs $5,500–$10,000+. These ranges cover a 2-bedroom home. Volume (weight and cubic footage) is the primary cost driver — decluttering before your move is the most effective way to reduce cost." },
  { q: "How far in advance should I book a long distance move from Ottawa?", a: "For long distance moves, book 6–8 weeks in advance at minimum. If you're moving during peak season (May–September), 8–12 weeks is strongly recommended. Interprovincial moves require more planning than local moves — transit times, delivery windows, and pickup schedules all need coordination. Top long distance moving companies in Ottawa fill their summer calendar fast." },
  { q: "How long does a long distance move from Ottawa take?", a: "Ottawa to Toronto: 1–2 days transit. Ottawa to Montreal: same day or next day. Ottawa to Calgary/Edmonton: 5–8 business days. Ottawa to Vancouver: 7–12 business days. These are transit estimates for the truck — your move may involve a loading day, transit days, and a delivery day. Your mover should provide a delivery window in writing." },
  { q: "Can I pack my own boxes for a long distance move?", a: "Yes, you can pack your own boxes — but it is important to pack them properly. Long distance moves involve more vibration, longer transit times, and greater handling than local moves. All boxes must be packed tightly (no empty space), sealed securely, and labelled clearly. Improperly packed boxes are more likely to be damaged and may not be covered by insurance." },
  { q: "Are my belongings insured during a long distance move?", a: "Yes. Federally regulated long distance movers in Canada are required to provide basic valuation coverage. Most professional companies also offer enhanced protection at an additional cost. For high-value items, consider declaring their value specifically on your moving contract. Document everything with photos before the move begins." },
  { q: "Can I include my car in a long distance move?", a: "Vehicle transport is a separate service from household moving. Most long distance moving companies do not transport vehicles directly — they work with auto transport brokers. If you need to move your car from Ottawa to another province, ask your mover for a referral or arrange vehicle shipping separately." },
  { q: "What happens if my delivery is late?", a: "Legitimate long distance movers provide a delivery window (typically a date range, not a specific day). If your delivery falls outside the agreed window, you may be entitled to compensation — check your contract. Reputable companies communicate proactively about delays and provide updated delivery estimates. Get all delivery commitments in writing before signing." },
  { q: "Do you offer long distance moving from Ottawa to all provinces?", a: "Yes. Prestige Moving operates long distance moves from Ottawa to all Canadian provinces — Ontario, Quebec, British Columbia, Alberta, Manitoba, Saskatchewan, Nova Scotia, New Brunswick, PEI, and Newfoundland. We also coordinate moves to the territories with partner carriers." },
];

export default function LongDistanceMovingGuideCanada() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Long Distance Moving Guide Canada 2026 | Ottawa Cross-Country Movers | Prestige Moving</title>
        <meta name="description" content="The complete Canadian long distance moving guide for 2026. Covering costs, timelines, planning, packing, your rights, and how to choose a trustworthy interprovincial mover from Ottawa." />
        <meta name="keywords" content="long distance moving canada, cross country movers canada, interprovincial movers ottawa, long distance movers ottawa, canada moving guide, moving across canada ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/long-distance-moving-guide-canada" />
        <meta property="og:title" content="Long Distance Moving Guide Canada 2026 | Prestige Moving Ottawa" />
        <meta property="og:description" content="Everything you need to know about long distance and cross-country moving in Canada — from Ottawa and beyond." />
        <meta property="og:url" content="https://prestigemoving.ca/long-distance-moving-guide-canada" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Long Distance Moving Guide Canada 2026",
          description: "The complete Canadian guide to long distance and interprovincial moving — costs, planning, timelines, and your rights.",
          author: { "@type": "Organization", name: "Prestige Moving Ottawa", url: "https://prestigemoving.ca" },
          publisher: { "@type": "Organization", name: "Prestige Moving Ottawa" },
          datePublished: "2026-04-28",
          dateModified: "2026-04-28",
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://prestigemoving.ca/long-distance-moving-guide-canada" },
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        })}</script>
      </Helmet>

      <SharedNavigation />

      {/* Hero */}
      <section className="relative bg-[#1A2332] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#243048] to-[#1A2332] opacity-95" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#C5A572 0,#C5A572 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-6">
            <Truck className="h-3.5 w-3.5 text-[#C5A572]" />
            <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-widest">Long Distance Moving Canada 2026</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Long Distance Moving Canada —<br className="hidden md:block" />
            <span className="text-[#C5A572]">The Complete 2026 Guide</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            Planning a cross-country or interprovincial move from Ottawa? This guide covers everything — realistic costs, planning timelines, how to choose a trustworthy long distance mover, and what to expect at every stage of the process.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/55 mb-10">
            {[{ icon: Clock, label: "25 min read" }, { icon: CheckCircle2, label: "All provinces covered" }, { icon: DollarSign, label: "2026 cost data" }].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5"><Icon className="h-4 w-4 text-[#C5A572]" /><span>{label}</span></div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Get a Long Distance Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-8"><Phone className="mr-2 h-4 w-4" />(613) 600-4000</Button></a>
          </div>
        </div>
      </section>

      <div className="bg-[#C5A572] py-4">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-8">
          {[{ value: "All Provinces", label: "We Move Across Canada" }, { value: "Binding", label: "Written Quotes" }, { value: "Full Service", label: "Pack, Move, Unpack" }, { value: "400+", label: "Five-Star Reviews" }].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-xl font-extrabold text-[#1A2332]">{value}</div>
              <div className="text-xs font-semibold text-[#1A2332]/70 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TOC */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button onClick={() => setTocOpen(!tocOpen)} className="flex items-center gap-2 text-[#1A2332] font-semibold text-sm w-full" data-testid="toc-toggle">
            <BookOpen className="h-4 w-4 text-[#C5A572]" />
            <span>Table of Contents — jump to any section</span>
            <ChevronDown className={`ml-auto h-4 w-4 text-[#C5A572] transition-transform ${tocOpen ? "rotate-180" : ""}`} />
          </button>
          {tocOpen && (
            <div className="mt-3 grid sm:grid-cols-2 gap-1">
              {TOC.map(({ id, title }) => (
                <a key={id} href={`#${id}`} className="text-sm text-[#C5A572] hover:underline py-0.5" onClick={() => setTocOpen(false)}>→ {title}</a>
              ))}
            </div>
          )}
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        <section id="intro">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">What Is Long Distance Moving in Canada — and How Is It Different?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>In Canada, a move is generally classified as "long distance" when it crosses provincial boundaries or covers more than roughly 150–200 kilometres. Interprovincial moves — moving from Ontario to British Columbia, from Ottawa to Alberta, from Ontario to Nova Scotia — are the most complex category, as they fall under federal transportation regulations rather than provincial ones.</p>
            <p>Long distance moving is fundamentally different from a local move in several important ways. The truck is on the road for days or weeks rather than hours. Your belongings are handled multiple times — loaded, driven, potentially transferred to a different vehicle, and unloaded. Transit times introduce uncertainty. And because you and your belongings are separated for an extended period, the relationship you have with your moving company matters far more than in a local move.</p>
            <p>For Ottawa residents considering a long distance move, Prestige Moving offers <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline font-semibold">full-service long distance moving</Link> to every province in Canada — with binding written quotes, full cargo insurance, and experienced crews who have driven these routes dozens of times.</p>
            <p>Ottawa is also served by{" "}
              <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline font-semibold">Ottawa Long Distance Movers</a>
              {" "}— a specialist long distance moving company covering the full range of interprovincial routes from the Ottawa area. If your move requires specialist cross-country expertise, they are a trusted resource.</p>
          </div>
        </section>

        <section id="planning">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">How to Plan a Cross-Country Move from Ottawa</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg mb-8">
            <p>Cross-country moves require significantly more lead time and organisation than local moves. Here is a realistic planning timeline.</p>
          </div>
          <div className="space-y-4">
            {[
              { when: "3–4 Months Before", title: "Research and Declutter", body: "Start by researching long distance movers who operate on your specific route. At the same time, begin a serious decluttering process. Long distance moving is priced primarily on weight and cubic footage — every item you do not take reduces your cost. Sell, donate, and dispose of anything you would not pay to ship across the country." },
              { when: "8–10 Weeks Before", title: "Get In-Home Quotes", body: "Contact three long distance moving companies and request in-home quotes — not phone or online estimates. A reputable long distance mover will send an estimator to walk through your home and calculate a binding price. Phone estimates are often wildly inaccurate for cross-country moves. A written, binding quote protects you from cost surprises on moving day." },
              { when: "6–8 Weeks Before", title: "Book and Confirm All Logistics", body: "Sign your moving contract, pay the deposit, and confirm your pick-up window and estimated delivery window. Begin arranging your travel: if you are driving, plan your route and book accommodations along the way. If flying, book flights that allow time between your pickup date and your arrival at the destination." },
              { when: "4–6 Weeks Before", title: "Begin Packing Systematically", body: "Start with items you use the least — seasonal clothes, extra linens, books, art, collections, storage room contents. Label every box with room name and contents. Create a master inventory list. For long distance moves, detailed labelling is especially important since it may be days before you can access boxes at your destination." },
              { when: "2 Weeks Before", title: "Pack Nearly Everything", body: "By two weeks out, all non-essentials should be packed. Confirm final moving details with your company — exact pickup window, delivery window, and driver contact information. Notify your bank, utility companies, Canada Post, and government services of your new address." },
              { when: "Pick-Up Day", title: "Loading and Departure", body: "The crew arrives, does a full inventory of your belongings, and loads the truck. You sign a bill of lading (the official contract for the move). Keep a copy. Note any pre-existing damage to items on the bill of lading — this protects you if damage claims arise." },
            ].map(({ when, title, body }) => (
              <div key={when} className="flex gap-5 p-5 rounded-xl border border-gray-200 bg-white">
                <div className="shrink-0 min-w-[90px] text-right">
                  <div className="text-[#C5A572] text-xs font-bold uppercase tracking-wider">{when}</div>
                </div>
                <div className="border-l border-[#C5A572]/30 pl-4">
                  <h3 className="font-bold text-[#1A2332] mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="costs">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Long Distance Moving Costs From Ottawa — 2026 Price Guide</h2>
          <p className="text-gray-600 text-lg mb-8">Long distance moving costs are driven primarily by distance and volume (weight and cubic footage). Here are realistic 2026 cost ranges for major routes from Ottawa.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1A2332] text-white">
                  <th className="text-left px-5 py-3 font-semibold">Route</th>
                  <th className="text-left px-5 py-3 font-semibold">Distance</th>
                  <th className="text-left px-5 py-3 font-semibold">1 Bedroom</th>
                  <th className="text-left px-5 py-3 font-semibold">2–3 Bedroom</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { route: "Ottawa → Toronto", dist: "~450 km", one: "$1,800–$2,800", two: "$2,800–$4,500" },
                  { route: "Ottawa → Montreal", dist: "~200 km", one: "$900–$1,600", two: "$1,600–$2,800" },
                  { route: "Ottawa → Winnipeg", dist: "~2,100 km", one: "$3,200–$5,000", two: "$5,000–$7,500" },
                  { route: "Ottawa → Calgary", dist: "~3,300 km", one: "$4,500–$6,500", two: "$6,500–$9,000" },
                  { route: "Ottawa → Edmonton", dist: "~3,400 km", one: "$4,500–$6,500", two: "$6,500–$9,500" },
                  { route: "Ottawa → Vancouver", dist: "~4,600 km", one: "$5,500–$8,000", two: "$8,000–$12,000" },
                  { route: "Ottawa → Halifax", dist: "~1,700 km", one: "$2,800–$4,500", two: "$4,500–$7,000" },
                ].map(({ route, dist, one, two }, i) => (
                  <tr key={route} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-medium text-[#1A2332]">{route}</td>
                    <td className="px-5 py-3 text-gray-500">{dist}</td>
                    <td className="px-5 py-3 text-gray-700">{one}</td>
                    <td className="px-5 py-3 text-gray-700">{two}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200">
              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong className="text-[#1A2332]">Note on pricing:</strong> These are realistic ranges, not guarantees. Your exact cost depends on your total shipment weight and cubic footage. An in-home estimate provides the most accurate quote — and should always be in writing.</p>
            </div>
            <div className="flex gap-3 p-4 rounded-xl bg-[#C5A572]/10 border border-[#C5A572]/30">
              <DollarSign className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong className="text-[#1A2332]">Biggest cost reducer:</strong> Decluttering before your move. Every item you do not ship reduces your cost. For a cross-country move, this savings can easily reach $500–$2,000 for a well-decluttered home.</p>
            </div>
          </div>
        </section>

        <section id="ottawa-routes">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Moving From Ottawa: Major Long Distance Routes</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { route: "Ottawa to Toronto", href: "/ottawa-to-toronto-movers", desc: "Ontario's two largest cities. The 401 corridor is Canada's busiest moving route. Transit typically 1–2 days.", keywords: "Business relocations, family moves, student moves" },
              { route: "Ottawa to Vancouver", href: "/ottawa-to-vancouver-movers", desc: "The longest common Canadian route. 4,600 km across four provinces. Transit typically 7–12 days.", keywords: "Career moves, retirement, lifestyle relocations" },
              { route: "Ottawa to Calgary", href: "/ottawa-to-calgary-movers", desc: "Alberta's largest city. Strong economic migration route for career-driven moves. Transit 5–8 days.", keywords: "Energy sector moves, career relocations, family moves" },
              { route: "Ottawa to Montreal", href: "/ottawa-to-montreal-movers", desc: "The closest major city to Ottawa at just 200 km. Often completed same-day or next-day.", keywords: "Federal public servant moves, student transfers, family" },
              { route: "Ottawa to Halifax", href: "/ottawa-to-halifax-movers", desc: "Atlantic Canada's hub. Growing migration route as remote work enables Maritime living.", keywords: "Remote workers, retirement, Atlantic lifestyle moves" },
              { route: "Ottawa to Winnipeg", href: "/moving-from-ottawa-to-winnipeg", desc: "Manitoba's capital. 2,100 km across Ontario and Manitoba. Transit 4–6 days.", keywords: "Family relocations, career moves, agricultural sector" },
            ].map(({ route, href, desc, keywords }) => (
              <Link key={route} href={href}>
                <div className="group p-5 rounded-xl border border-gray-200 bg-white hover-elevate cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-[#C5A572]" />
                    <h3 className="font-bold text-[#1A2332] group-hover:text-[#C5A572] transition-colors text-sm">{route}</h3>
                  </div>
                  <p className="text-gray-600 text-xs mb-2 leading-relaxed">{desc}</p>
                  <p className="text-gray-400 text-xs">{keywords}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-5 text-sm text-gray-600">
            For all long distance routes from Ottawa, visit our{" "}
            <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline font-semibold">long distance moving service page</Link>
            {" "}or call{" "}
            <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a>.
          </p>
        </section>

        <section id="choosing">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">How to Choose a Long Distance Moving Company in Canada</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg mb-6">
            <p>Choosing a long distance mover is one of the most important decisions in a cross-country move. The wrong choice can mean your belongings arriving late, damaged, or held for ransom. Here is how to choose well.</p>
          </div>
          <div className="space-y-4">
            {[
              { num: "1", title: "Verify federal CVOR registration for interprovincial moves", body: "Interprovincial movers in Canada must hold a Commercial Vehicle Operator's Registration (CVOR) certificate. This is a federally mandated credential. Ask any potential long distance mover for their CVOR number and verify it — a legitimate company will provide this immediately." },
              { num: "2", title: "Insist on a binding written quote after an in-home survey", body: "Never accept a long distance moving quote by phone or email without an in-home survey. Weight and volume are the basis of long distance pricing — without seeing your belongings, any estimate is a guess. A binding written quote means the price you receive is the price you pay, regardless of actual weight." },
              { num: "3", title: "Understand the delivery window policy", body: "For cross-country moves, your belongings will not arrive on a specific date — they will arrive within a delivery window (typically 3–10 days depending on distance). Ask the company specifically: what is my delivery window? What happens if you miss it? Get the answer in writing." },
              { num: "4", title: "Ask about how shipments are handled (exclusive vs. consolidated)", body: "Some long distance movers operate 'exclusive use' trucks (your belongings are the only cargo). Others use 'consolidated' shipments (your belongings share the truck with other customers). Consolidated moves are cheaper but involve more handling and higher risk of damage. Know what you are buying." },
              { num: "5", title: "Research reviews specifically for long distance service", body: "A company might have excellent reviews for local moves and terrible ones for long distance. Search specifically for 'long distance' or 'cross-country' in their reviews. Red flags: complaints about late delivery, missing or damaged items, and unresponsive communication during transit." },
            ].map(({ num, title, body }) => (
              <div key={num} className="flex gap-5 p-5 rounded-xl border border-gray-200 bg-white">
                <div className="w-9 h-9 rounded-full bg-[#1A2332] text-[#C5A572] font-extrabold text-sm flex items-center justify-center shrink-0">{num}</div>
                <div>
                  <h3 className="font-bold text-[#1A2332] mb-1.5">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-[#C5A572]/10 border border-[#C5A572]/30 p-5">
            <p className="text-sm text-gray-700">
              Ottawa's specialist long distance moving resource:{" "}
              <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline font-semibold">Ottawa Long Distance Movers</a>
              {" "}provides expert guidance specifically for interprovincial and cross-country moves originating in the Ottawa area.
            </p>
          </div>
        </section>

        <section id="packing">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Packing for a Long Distance Move — What's Different</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg mb-6">
            <p>Packing for a long distance move requires more care than packing for a local move. Your boxes will spend days on a moving truck, loaded with other cargo, on highways across multiple provinces. Boxes that would survive a local move may not survive a cross-country one.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Use heavy-duty boxes", desc: "Standard liquor store boxes or thin cartons are not suitable for long distance moves. Use double-wall moving boxes, especially for heavy items. The extra rigidity prevents crushing during transit." },
              { title: "Fill every box completely", desc: "Boxes with empty space collapse under weight in transit. Fill gaps with crumpled packing paper, foam peanuts, or bubble wrap. A full, firm box protects itself and the boxes stacked on top of it." },
              { title: "Wrap every fragile item individually", desc: "For long distance moves, wrap every glass, every dish, every fragile item individually with packing paper or bubble wrap. Nested stacking without individual wrapping is fine for local moves — not for cross-country." },
              { title: "Create a master inventory", desc: "Number every box (Box 1 of 47, Box 2 of 47) and record in a notebook what is in each box. This lets you identify if anything is missing at delivery and locate specific items without opening everything." },
              { title: "Label fragile boxes on all sides", desc: "In a loaded long-distance truck, boxes are often stacked against walls where only one side faces out. Label every side and top of fragile boxes — not just one face." },
              { title: "Consider professional packing", desc: "For long distance moves, professional packing significantly reduces damage risk. Improperly packed items are frequently excluded from insurance claims. Our packing team uses the right materials and techniques for cross-country moves." },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-3 p-4 rounded-xl border border-gray-200 bg-white">
                <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#1A2332] mb-1 text-sm">{title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="rights">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Your Rights as a Moving Customer in Canada</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>Many Canadians do not know their rights when it comes to moving companies. Here are the key protections you have:</p>
            <div className="space-y-3">
              {[
                { right: "Right to a binding written quote", detail: "If you request one, a reputable moving company must provide a written, binding estimate. Insist on this." },
                { right: "Right to an itemized bill of lading", detail: "Your contract for the move — the bill of lading — must itemize your belongings, the agreed price, and the delivery window." },
                { right: "Right to dispute additional charges", detail: "A mover cannot legally demand more than 10% above a binding estimate, even if your actual weight exceeded the estimate." },
                { right: "Right to compensation for late delivery", detail: "If your delivery falls outside the agreed window due to the mover's fault, you may be entitled to compensation. Document the delay in writing." },
                { right: "Right to file a damage claim", detail: "If items are damaged during transit, you have the right to file a claim. Document all damage with photos immediately upon delivery." },
              ].map(({ right, detail }) => (
                <div key={right} className="flex gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <Shield className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1A2332] text-sm mb-0.5">{right}</p>
                    <p className="text-gray-600 text-sm">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="h-7 w-7 text-[#C5A572]" />
            <h2 className="text-3xl font-bold text-[#1A2332]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-200 overflow-hidden">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left bg-white" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`faq-${i}`}>
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 pt-3 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50">{faq.a}</div>}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1A2332] mb-5">Long Distance Moving Resources From Ottawa</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/services/long-distance-moving", label: "Long Distance Moving Service", desc: "Our full interprovincial service overview" },
              { href: "/ottawa-long-distance-movers-guide", label: "Ottawa Long Distance Guide", desc: "Specialist long distance advice for Ottawa" },
              { href: "/ottawa-to-toronto-movers", label: "Ottawa to Toronto Movers", desc: "Ontario's most travelled moving route" },
              { href: "/ottawa-to-vancouver-movers", label: "Ottawa to Vancouver Movers", desc: "Cross-country to BC" },
              { href: "/ottawa-to-calgary-movers", label: "Ottawa to Calgary Movers", desc: "Alberta career and family moves" },
              { href: "/book", label: "Get a Long Distance Quote", desc: "Free, binding written quote" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href}>
                <div className="group p-4 rounded-xl border border-gray-200 bg-white hover-elevate cursor-pointer">
                  <div className="font-semibold text-[#1A2332] group-hover:text-[#C5A572] transition-colors mb-1 text-sm">{label}</div>
                  <div className="text-xs text-gray-500">{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <section className="bg-[#1A2332] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Truck className="h-10 w-10 text-[#C5A572] mx-auto mb-5" />
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Plan Your Long Distance Move From Ottawa?</h2>
          <p className="text-white/65 max-w-xl mx-auto mb-8">Get a free, binding written quote for your interprovincial move. We cover every province in Canada from Ottawa.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10 px-8"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
