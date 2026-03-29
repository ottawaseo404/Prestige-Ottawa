import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, Star, CheckCircle2, ArrowRight, Shield, Award, Clock,
  TruckIcon, MapPin, DollarSign, Package, Users, AlertTriangle,
  FileText, Zap, ThumbsUp, ChevronDown, Navigation
} from "lucide-react";
import { useState } from "react";

const SERVICES = [
  {
    icon: TruckIcon,
    title: "Dedicated Truck Service",
    desc: "Your belongings occupy a single dedicated truck from loading in Ottawa to delivery at your destination. No shared loads, no stops at other homes — a direct, secure run from door to door.",
  },
  {
    icon: Shield,
    title: "Binding Written Estimates",
    desc: "Every long-distance quote is binding before you sign. The number on your written estimate is the number on your final invoice — no post-loading surprise charges that trap you at delivery.",
  },
  {
    icon: Package,
    title: "Full Professional Packing",
    desc: "Specialized wrapping for furniture, electronics, art, and fragile items. For a cross-country move, professional packing isn't optional — items must withstand hundreds of kilometres of highway vibration across multiple climate zones.",
  },
  {
    icon: Navigation,
    title: "Real-Time GPS Tracking",
    desc: "Track your truck's position throughout transit. Know exactly where your possessions are from the moment they leave Ottawa to the moment they arrive at your new home.",
  },
  {
    icon: Users,
    title: "Same Crew, Origin to Destination",
    desc: "The same team that loads your home in Ottawa delivers and unloads at your new address. No handoffs to unknown subcontractors mid-route — accountability runs the full distance.",
  },
  {
    icon: Award,
    title: "WSIB Certified & Fully Insured",
    desc: "Full WSIB coverage for all crew members plus comprehensive cargo and liability insurance protecting your belongings at full replacement value throughout the entire move.",
  },
  {
    icon: FileText,
    title: "Interprovincial Licensing",
    desc: "Moves crossing provincial boundaries require federal Transport Canada carrier authority. Fully licensed and compliant for all interprovincial Canadian routes — something not all local movers possess.",
  },
  {
    icon: Clock,
    title: "Flexible Delivery Windows",
    desc: "Delivery windows can be scheduled around your possession date, key handover, or building access restrictions at your destination. Storage-in-transit options available when needed.",
  },
];

const ROUTES = [
  { from: "Ottawa", to: "Toronto", km: "~450 km", time: "4.5 hrs", province: "Ontario", href: "/ottawa-to-toronto-movers" },
  { from: "Ottawa", to: "Montreal", km: "~196 km", time: "2 hrs", province: "Quebec", href: "/ottawa-to-montreal-movers" },
  { from: "Ottawa", to: "Calgary", km: "~3,300 km", time: "3–5 days", province: "Alberta", href: "/ottawa-to-calgary-movers" },
  { from: "Ottawa", to: "Vancouver", km: "~4,600 km", time: "5–7 days", province: "British Columbia", href: "/ottawa-to-vancouver-movers" },
  { from: "Ottawa", to: "Halifax", km: "~1,550 km", time: "15–18 hrs", province: "Nova Scotia", href: "/ottawa-to-halifax-movers" },
  { from: "Ottawa", to: "Winnipeg", km: "~2,150 km", time: "22–25 hrs", province: "Manitoba", href: "/moving-from-ottawa-to-winnipeg" },
  { from: "Ottawa", to: "Edmonton", km: "~3,500 km", time: "3–5 days", province: "Alberta", href: "/moving-from-ottawa-to-edmonton" },
  { from: "Ottawa", to: "Quebec City", km: "~290 km", time: "3 hrs", province: "Quebec", href: "/ottawa-to-quebec-city-movers" },
];

const WARNING_SIGNS = [
  "No physical address or business registration",
  "Quote given over the phone without assessing your inventory",
  "Significantly lower price than all other quotes — often a bait-and-switch",
  "Demands full payment upfront before loading",
  "No binding estimate — only a 'non-binding' number that can change at delivery",
  "No WSIB certificate or proof of cargo insurance on request",
  "No federal interprovincial carrier authority for cross-provincial moves",
  "Truck arrives with company name not matching what you booked",
];

const CHECKLIST = [
  "Get a binding written estimate after a full inventory review",
  "Confirm the company holds federal interprovincial carrier authority",
  "Request WSIB certificate and cargo insurance documentation",
  "Verify the same crew loads and unloads (no mid-route handoffs)",
  "Confirm a dedicated truck — not a shared load with other customers",
  "Clarify delivery window and what happens if possession date changes",
  "Understand the full pricing: weight/cubic footage, fuel surcharge, insurance",
  "Read reviews on Google and check BBB rating",
];

const FAQS = [
  {
    q: "How far in advance should I book Ottawa long distance movers?",
    a: "For moves to Toronto or Montreal, 3–4 weeks notice is usually sufficient. For cross-country moves to Calgary, Vancouver, or Halifax, 6–8 weeks is strongly recommended — especially for summer moves (May–September) when long-distance moving demand peaks significantly. Booking early also gives you more flexibility on delivery window scheduling.",
  },
  {
    q: "How is long distance moving priced in Ottawa?",
    a: "Unlike local moves (which are hourly), long distance moves are typically priced by the weight or cubic footage of your belongings plus the distance travelled. Additional factors include packing services, insurance coverage level, fuel surcharges, and any specialty items (pianos, hot tubs, art). Always get a binding written estimate — never a non-binding or 'estimated' quote for a long distance move.",
  },
  {
    q: "What's the difference between a binding and non-binding estimate?",
    a: "A binding estimate is a contractual commitment: the price quoted is the price you pay, regardless of actual weight. A non-binding estimate is just an approximation — the final invoice can be higher. Some disreputable movers quote very low non-binding estimates, then present a much higher bill at delivery when you have no leverage. Always insist on a binding written estimate.",
  },
  {
    q: "Does my move need special licensing if it crosses a provincial border?",
    a: "Yes. Moves crossing a provincial boundary (e.g., Ottawa to Montreal, Ottawa to Toronto, Ottawa to anywhere in Western Canada) are governed by Transport Canada's federal motor carrier regulations. Your moving company must hold valid federal operating authority, not just an Ontario business license. Always ask to see the carrier authority number before booking.",
  },
  {
    q: "What happens if my delivery date changes?",
    a: "A reputable long distance mover will offer storage-in-transit options when possession dates shift. Your belongings are stored in a secure facility until your new home is ready. Clarify the storage terms, daily rate, and re-delivery fee before signing your contract — these details matter enormously if a real estate closing is delayed.",
  },
  {
    q: "How do I prepare my home for a long distance move?",
    a: "Start 6–8 weeks out: sort and declutter before packing begins (you pay by weight/volume — don't move things you don't need). Book professional packing 4 weeks out. Confirm elevator bookings and parking permits at both origin and destination. Have all appliances serviced (fridges drained, washers hoses removed). Create a personal essentials bag for the first 48 hours at your new home — it travels with you, not on the truck.",
  },
];

export default function OttawaLongDistanceMoversGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Ottawa Long Distance Movers — Complete 2026 Guide | Prestige Moving</title>
        <meta
          name="description"
          content="The complete guide to hiring Ottawa long distance movers in 2026. Learn what services to expect, how pricing works, red flags to avoid, and how to choose the right interprovincial moving company."
        />
        <meta name="keywords" content="ottawa long distance movers, long distance movers ottawa, interprovincial movers ottawa, ottawa cross country movers, long distance moving ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-long-distance-movers-guide" />
        <meta property="og:title" content="Ottawa Long Distance Movers — Complete 2026 Guide" />
        <meta property="og:description" content="Everything you need to know about hiring long distance movers in Ottawa — services, pricing, licensing, and how to avoid scams." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Ottawa Long Distance Movers — Complete 2026 Guide",
          "description": "A comprehensive guide to hiring ottawa long distance movers: services, pricing, licensing requirements, red flags, and a move-day checklist.",
          "author": { "@type": "Organization", "name": "Prestige Moving Vancouver", "url": "https://prestigemoving.ca" },
          "publisher": { "@type": "Organization", "name": "Prestige Moving Vancouver", "logo": { "@type": "ImageObject", "url": "https://prestigemoving.ca/logo.png" } },
          "datePublished": "2026-03-29",
          "dateModified": "2026-03-29",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://prestigemoving.ca/ottawa-long-distance-movers-guide" },
        })}</script>
      </Helmet>

      <SharedNavigation />

      {/* ── Hero ── */}
      <section className="relative bg-[#1A2332] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#243048] to-[#1A2332] opacity-95" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #C5A572 0, #C5A572 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-6">
            <Star className="h-3.5 w-3.5 text-[#C5A572]" />
            <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-widest">Complete 2026 Resource</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Ottawa Long Distance<br className="hidden md:block" /> Movers — The Full Guide
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            Everything you need to know before hiring{" "}
            <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline font-semibold">
              ottawa long distance movers
            </a>
            {" "}— what services to expect, how pricing works, what licensing is required, and the red flags that expose predatory movers.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/55 mb-10">
            {[
              { icon: Clock, label: "15 min read" },
              { icon: FileText, label: "Updated March 2026" },
              { icon: CheckCircle2, label: "Written by moving professionals" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-[#C5A572]" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8975f] text-[#1A2332] font-bold px-8">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:6136004000">
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-8">
                <Phone className="mr-2 h-4 w-4" /> (613) 600-4000
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#C5A572] py-4">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-8">
          {[
            { value: "10,000+", label: "Moves Completed" },
            { value: "350+", label: "Five-Star Reviews" },
            { value: "100%", label: "Binding Estimates" },
            { value: "All Provinces", label: "Carrier Authority" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-extrabold text-[#1A2332]">{value}</div>
              <div className="text-xs font-semibold text-[#1A2332]/70 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* ── Introduction ── */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">What Makes Long Distance Moving From Ottawa Different?</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
            <p>
              Ottawa sits at a unique geographic crossroads. As Canada's capital, it borders Quebec to the east (making Gatineau and Montreal interprovincial moves), sits within a few hours of Toronto to the west, and serves as a launching point for Canadians relocating to every province from British Columbia to Nova Scotia. That makes{" "}
              <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline font-semibold">
                ottawa long distance movers
              </a>
              {" "}a category of service with specific requirements that local, hourly-rate movers simply cannot fulfill.
            </p>
            <p>
              Local Ottawa moves (within the city and surrounding National Capital Region) are relatively straightforward: hourly billing, a crew for the day, and a truck that returns the same evening. Long distance moves are fundamentally different in scope, pricing structure, legal requirements, and risk profile. Understanding those differences is the first step in hiring the right company for your interprovincial relocation.
            </p>
            <p>
              This guide covers everything: the specific services Ottawa long distance moving companies provide, how to read and compare quotes, what interprovincial licensing means and how to verify it, a checklist for preparing your home, and the warning signs of a predatory mover who will hold your belongings hostage at delivery.
            </p>
          </div>
        </section>

        {/* ── Services Section ── */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">What Services Should Ottawa Long Distance Movers Offer?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A professional{" "}
              <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">
                ottawa long distance movers
              </a>
              {" "}company delivers a comprehensive service set — not just a truck and driver. Here's what full service looks like:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1A2332] flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#C5A572]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2332] mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Routes ── */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Common Long Distance Routes From Ottawa</h2>
          <p className="text-gray-600 mb-8">
            Ottawa long distance movers serve every major Canadian destination. The most-booked routes from Ottawa, with approximate distances and transit times:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {ROUTES.map(({ from, to, km, time, province, href }) => (
              <Link key={href} href={href}>
                <div className="group flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-white hover-elevate cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#1A2332] flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4 text-[#C5A572]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#1A2332] text-sm">{from} → {to}</div>
                      <div className="text-xs text-gray-500">{province} · {km}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#C5A572] bg-[#C5A572]/10 px-2 py-0.5 rounded-full">{time}</span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#C5A572] transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Transit times are for direct truck transport in normal conditions. Actual delivery windows depend on crew schedule, loading time, and weather. Cross-country routes (Calgary, Vancouver) typically operate with 1–3 day delivery windows, not exact dates.
          </p>
        </section>

        {/* ── Pricing ── */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">How Long Distance Moving Prices Work in Ottawa</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Local Ottawa moves are priced hourly. Long distance moves are priced differently — most{" "}
                <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">
                  ottawa long distance movers
                </a>
                {" "}calculate your quote based on the total weight or cubic footage of your belongings multiplied by the distance travelled, plus additional line items.
              </p>
              <p>
                The most common pricing components are: base transport (weight × distance), fuel surcharge (typically 10–20% of base), packing services if selected, insurance/valuation coverage, and any specialty items (pianos, hot tubs, custom crating for art).
              </p>
              <p>
                As a general reference: Ottawa to Toronto (2–3 bedroom home) runs approximately $2,500–$6,000. Ottawa to Montreal, $1,500–$3,500. Ottawa to Vancouver or Calgary, $6,000–$15,000+ for a full household. These ranges vary significantly based on volume and services selected.
              </p>
              <p>
                The single most important pricing protection: always get a <strong className="text-[#1A2332]">binding written estimate</strong>. This contractually locks the price regardless of actual weight. Non-binding estimates can — and with disreputable companies, do — result in a dramatically higher bill presented at delivery when you have no recourse.
              </p>
            </div>
            <div className="rounded-xl bg-[#1A2332] p-6 space-y-3">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-[#C5A572]" /> Sample Long Distance Pricing
              </h3>
              {[
                { route: "Ottawa → Toronto", size: "1–2 BR", range: "$1,800–$4,500" },
                { route: "Ottawa → Toronto", size: "3–4 BR", range: "$3,500–$7,000" },
                { route: "Ottawa → Montreal", size: "1–2 BR", range: "$1,200–$3,000" },
                { route: "Ottawa → Montreal", size: "3–4 BR", range: "$2,500–$5,000" },
                { route: "Ottawa → Calgary", size: "1–2 BR", range: "$4,500–$8,000" },
                { route: "Ottawa → Vancouver", size: "3–4 BR", range: "$9,000–$16,000" },
              ].map(({ route, size, range }) => (
                <div key={`${route}-${size}`} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                  <div>
                    <div className="text-white text-sm font-medium">{route}</div>
                    <div className="text-white/50 text-xs">{size}</div>
                  </div>
                  <div className="text-[#C5A572] font-bold text-sm">{range}</div>
                </div>
              ))}
              <p className="text-white/40 text-xs pt-2">Estimates only. Get a binding written quote for your exact inventory.</p>
            </div>
          </div>
        </section>

        {/* ── Licensing ── */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Licensing & Legal Requirements for Interprovincial Moves</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              This is one of the most important and least-understood aspects of long distance moving from Ottawa. Any move that crosses a provincial boundary — Ottawa to Montreal, Ottawa to Toronto (within Ontario, so no crossing), Ottawa to anywhere in Western Canada — is governed by{" "}
              <a href="https://www.canada.ca/en/transport-canada/services/trucking.html" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">
                Transport Canada federal motor carrier regulations
              </a>.
            </p>
            <p>
              To legally operate as an interprovincial carrier, a company must hold a valid federal operating authority (a carrier number registered with Transport Canada). This is separate from their Ontario business license or their local moving permits. When you're evaluating{" "}
              <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">
                ottawa long distance movers
              </a>
              {" "}for a cross-provincial move, ask to see their federal carrier authority documentation. Any reputable company will provide this without hesitation.
            </p>
            <p>
              Within-province moves (Ottawa to Toronto, or Ottawa to other Ontario cities) don't require federal authority, but still require Ontario PCV operating authority. For Quebec-bound moves (Ottawa to Montreal or Quebec City), your carrier needs Quebec interprovincial operating authority.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { title: "Ontario Only", example: "Ottawa → Toronto", req: "Ontario PCV Authority", colour: "bg-blue-50 border-blue-200" },
              { title: "Cross-Provincial", example: "Ottawa → Montreal", req: "Federal + Quebec Authority", colour: "bg-amber-50 border-amber-200" },
              { title: "Cross-Country", example: "Ottawa → Vancouver", req: "Federal Authority + All Provinces on Route", colour: "bg-green-50 border-green-200" },
            ].map(({ title, example, req, colour }) => (
              <div key={title} className={`rounded-xl border p-5 ${colour}`}>
                <h3 className="font-bold text-[#1A2332] mb-1">{title}</h3>
                <div className="text-sm text-gray-500 mb-3">{example}</div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1A2332] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#1A2332]">{req}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Red Flags ── */}
        <section>
          <div className="rounded-2xl bg-red-50 border border-red-200 p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#1A2332]">Red Flags: How to Spot a Predatory Long Distance Mover</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Long distance moving fraud is well-documented in Canada. The most common scheme: a company quotes an attractively low price, loads your belongings, then presents a dramatically higher invoice at delivery — knowing you cannot legally receive your possessions until you pay. Protect yourself by knowing the warning signs:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {WARNING_SIGNS.map((sign) => (
                <div key={sign} className="flex items-start gap-2.5">
                  <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How to Choose ── */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">How to Choose the Right Ottawa Long Distance Movers</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-8">
            <p>
              The best{" "}
              <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline font-semibold">
                ottawa long distance movers
              </a>
              {" "}share a consistent set of characteristics: they insist on a full inventory review before quoting, they provide binding written estimates only, they hold all required federal and provincial carrier authorities, and they have a documented history of completed moves — not just a new website with no verifiable reviews.
            </p>
            <p>
              Get at least three quotes. When comparing them, don't compare just the bottom line — compare what's included. A quote that includes full packing and $100,000 cargo insurance is not comparable to a bare-bones quote with no packing and basic coverage. Itemize each quote to compare apples to apples.
            </p>
          </div>

          <div className="rounded-2xl bg-[#1A2332] p-8">
            <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#C5A572]" /> Pre-Hire Checklist for Long Distance Moves
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {CHECKLIST.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Preparing Your Move ── */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Preparing Your Home for a Long Distance Move From Ottawa</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The preparation timeline for a long distance move is considerably longer than for a local one. Here's a recommended schedule:
            </p>
          </div>
          <div className="mt-6 space-y-4">
            {[
              { time: "8 Weeks Out", items: ["Research and shortlist moving companies", "Get initial quotes (inventory-based, not phone estimates)", "Book preferred company with binding estimate", "Start decluttering — you pay by weight/volume, move only what you need"] },
              { time: "6 Weeks Out", items: ["Confirm packing service booking", "Notify utilities at both origin and destination", "Begin sourcing specialty packing materials for fragile or high-value items", "Check possession date / key handover timing and align delivery window"] },
              { time: "4 Weeks Out", items: ["Book elevator / loading dock at origin building", "Book freight elevator at destination building", "Arrange parking permits for moving truck at both addresses", "Drain and disconnect appliances (fridges, washing machines)"] },
              { time: "1 Week Out", items: ["Confirm all booking details with moving company", "Prepare 'first night' bag for essentials that travel with you (not on the truck)", "Photograph all furniture and valuables for insurance documentation", "Confirm delivery window and final contact details"] },
            ].map(({ time, items }) => (
              <div key={time} className="rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-[#1A2332] px-5 py-3">
                  <span className="text-[#C5A572] font-bold text-sm uppercase tracking-wider">{time}</span>
                </div>
                <div className="p-5 grid sm:grid-cols-2 gap-2">
                  {items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className="font-semibold text-[#1A2332] pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── About ottawalongdistancemovers.com ── */}
        <section>
          <div className="rounded-2xl bg-gradient-to-br from-[#1A2332] to-[#243048] p-8 md:p-10 text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-5">
              <Award className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-widest">Trusted Resource</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ottawa Long Distance Movers — A Dedicated Resource
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-6 leading-relaxed">
              For homeowners and renters planning an interprovincial move from Ottawa, the team at{" "}
              <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline font-semibold">
                Ottawa Long Distance Movers
              </a>
              {" "}offers specialized expertise in cross-provincial and cross-country Canadian relocations. Their services cover the full range of long distance moving needs — from binding written estimates and dedicated-truck service to professional packing, storage-in-transit, and specialty item transport for pianos, art, and antiques.
            </p>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you're relocating to Toronto, Montreal, Calgary, Vancouver, or anywhere in between, working with dedicated{" "}
              <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline font-semibold">
                ottawa long distance movers
              </a>
              {" "}who specialize exclusively in long-haul Canadian moves makes the entire process significantly smoother, more predictable, and better protected than hiring a general local mover who occasionally handles long-distance work.
            </p>
            <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8975f] text-[#1A2332] font-bold px-8">
                Visit Ottawa Long Distance Movers <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#1A2332] mb-3">Moving Long Distance From Ottawa?</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Prestige Moving provides binding written estimates, dedicated trucks, and a fully licensed interprovincial service covering every Canadian province. Call or book online for a free, no-obligation long distance quote.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/book">
                  <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8975f] text-[#1A2332] font-bold">
                    Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:6136004000">
                  <Button size="lg" variant="outline" className="border-[#1A2332] text-[#1A2332]">
                    <Phone className="mr-2 h-4 w-4" /> (613) 600-4000
                  </Button>
                </a>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { icon: Shield, text: "Binding written estimates — price locked before loading" },
                { icon: TruckIcon, text: "Dedicated trucks — no shared loads" },
                { icon: Zap, text: "Same crew, Ottawa to destination" },
                { icon: ThumbsUp, text: "350+ five-star Google reviews" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1A2332] flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-[#C5A572]" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Internal Links ── */}
        <section>
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Related Moving Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/long-distance-movers-ottawa", label: "Long Distance Movers Ottawa", desc: "Our dedicated long distance moving service page" },
              { href: "/services/long-distance-moving", label: "Long Distance Moving Service", desc: "Full service breakdown and pricing overview" },
              { href: "/ottawa-to-toronto-movers", label: "Ottawa to Toronto Movers", desc: "Ottawa's most popular interprovincial route" },
              { href: "/ottawa-to-montreal-movers", label: "Ottawa to Montreal Movers", desc: "Interprovincial route across the Quebec border" },
              { href: "/ottawa-to-vancouver-movers", label: "Ottawa to Vancouver Movers", desc: "Canada's iconic cross-country route" },
              { href: "/how-much-does-moving-cost-ottawa", label: "Ottawa Moving Cost Guide", desc: "Full breakdown of local and long distance pricing" },
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

      <SharedFooter />
    </>
  );
}
