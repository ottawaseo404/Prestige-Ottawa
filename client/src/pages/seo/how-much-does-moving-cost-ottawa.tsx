import { useState, useMemo, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, TruckIcon, Shield, Clock, Star, ArrowRight, ChevronDown,
  Calendar, Home, Building2, Package, DollarSign, AlertCircle,
  CheckCircle2, Calculator, MapPin, Users, ChevronRight, Info, Lock
} from "lucide-react";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

const COST_TOC = [
  { id: "toc-calculator",  label: "Cost Calculator" },
  { id: "toc-price-table", label: "Price Table" },
  { id: "toc-factors",     label: "Cost Factors" },
  { id: "toc-hidden-fees", label: "Hidden Fees" },
  { id: "toc-long-distance", label: "Long-Distance" },
  { id: "toc-faq",         label: "FAQs" },
];

const PRICING = {
  premium: { hourly: 155, travel: 155, movers: 2, truck: "16–20 ft", minHours: 3 },
  deluxe:  { hourly: 195, travel: 195, movers: 3, truck: "26 ft",    minHours: 3 },
  diamond: { hourly: 315, travel: 315, movers: 4, truck: "2 trucks",  minHours: 3 },
};

const HOME_SIZES = [
  { label: "Bachelor / Studio", hours: { min: 2, max: 3 }, icon: Home },
  { label: "1-Bedroom Apartment", hours: { min: 3, max: 4 }, icon: Home },
  { label: "2-Bedroom Apartment", hours: { min: 4, max: 6 }, icon: Home },
  { label: "3-Bedroom House", hours: { min: 6, max: 9 }, icon: Building2 },
  { label: "4+ Bedroom House", hours: { min: 9, max: 14 }, icon: Building2 },
];

const PRICE_TABLE = [
  { size: "Bachelor / Studio",     premium: "$620–$775",   deluxe: "$780–$975",   diamond: "$1,260–$1,575" },
  { size: "1-Bedroom Apartment",   premium: "$620–$775",   deluxe: "$780–$975",   diamond: "$1,260–$1,575" },
  { size: "2-Bedroom Apartment",   premium: "$775–$1,085", deluxe: "$975–$1,365", diamond: "$1,575–$2,205" },
  { size: "3-Bedroom House",       premium: "$1,085–$1,550",deluxe:"$1,365–$1,950",diamond:"$2,205–$3,150" },
  { size: "4+ Bedroom House",      premium: "$1,550–$2,325",deluxe:"$1,950–$2,925",diamond:"$3,150–$4,725" },
];

export default function HowMuchDoesMovingCostOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [homeSize, setHomeSize] = useState(1);
  const [pkg, setPkg] = useState<"premium" | "deluxe" | "diamond">("premium");
  const [hasStairs, setHasStairs] = useState(false);
  const [hasPacking, setHasPacking] = useState(false);
  const [hasSpecialty, setHasSpecialty] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Set<string>();
    COST_TOC.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) visible.add(id); else visible.delete(id);
          const first = COST_TOC.find(i => visible.has(i.id));
          if (first) setActiveSection(first.id);
        },
        { rootMargin: "-80px 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" });
  };

  const estimate = useMemo(() => {
    const size = HOME_SIZES[homeSize];
    const p = PRICING[pkg];
    let minHrs = Math.max(size.hours.min, p.minHours);
    let maxHrs = size.hours.max;
    if (hasStairs) { minHrs += 0.5; maxHrs += 1; }
    if (hasSpecialty) { minHrs += 0.5; maxHrs += 1.5; }
    let packingMin = 0, packingMax = 0;
    if (hasPacking) {
      packingMin = 150;
      packingMax = homeSize >= 3 ? 800 : homeSize >= 2 ? 500 : 300;
    }
    const low  = Math.round(p.hourly * minHrs + p.travel + packingMin);
    const high = Math.round(p.hourly * maxHrs + p.travel + packingMax);
    return { low, high, minHrs: minHrs.toFixed(1), maxHrs: maxHrs.toFixed(1) };
  }, [homeSize, pkg, hasStairs, hasPacking, hasSpecialty]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Much Does Moving Cost in Ottawa? 2025 Price Guide",
    "description": "Complete 2025 Ottawa moving cost guide. Hourly rates, pricing by home size, what affects your quote, hidden fees to avoid, and free instant estimates from Prestige Moving.",
    "image": "https://prestigemoving.ca/og-image.png",
    "author": { "@type": "Organization", "name": "Prestige Moving Ottawa" },
    "publisher": {
      "@type": "Organization",
      "name": "Prestige Moving Ottawa",
      "logo": { "@type": "ImageObject", "url": "https://prestigemoving.ca/og-image.png" }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2026-02-25",
    "mainEntityOfPage": "https://prestigemoving.ca/how-much-does-moving-cost-ottawa"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to hire movers in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hiring movers in Ottawa typically costs between $620 and $4,725+ depending on the size of your home and the package you choose. Hourly rates range from $155/hr (2 movers) to $315/hr (4 movers with 2 trucks). Most moves also include a one-time travel fee equal to the hourly rate. A typical 1-bedroom apartment move in Ottawa costs $620–$975 all-in, while a 3-bedroom house move runs $1,085–$3,150."
        }
      },
      {
        "@type": "Question",
        "name": "What is the average cost of a local move in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average cost of a local move in Ottawa is approximately $800–$1,500 for a standard 2-bedroom home. This includes 4–6 hours of labour at $155–$195/hr plus a one-time travel fee. Small 1-bedroom moves can be completed for as little as $620, while larger 4-bedroom home moves can reach $2,300–$4,700 depending on the package selected."
        }
      },
      {
        "@type": "Question",
        "name": "Are there hidden fees when hiring Ottawa movers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reputable Ottawa movers like Prestige Moving charge transparently with no hidden fees. However, some moving companies may add fuel surcharges, stair fees, long-carry fees, or charge for materials without disclosure. Always ask for an itemized written quote that includes labour, truck, travel fee, and any surcharges. Prestige Moving provides fully itemized quotes with zero surprise charges."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a long-distance move from Ottawa cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Long-distance moves from Ottawa to Toronto typically cost $2,500–$6,000 for a 2-3 bedroom home. Ottawa to Montreal runs $1,500–$3,500. Cross-country moves (Ottawa to Vancouver or Calgary) range from $5,000–$15,000+ depending on volume and distance. Long-distance pricing is usually based on weight or cubic feet plus mileage rather than hourly rates."
        }
      },
      {
        "@type": "Question",
        "name": "What time of year is cheapest to move in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Moving in Ottawa is cheapest from October through April (the off-season). Moving rates are highest from May through September, especially on weekends and at the end/beginning of the month when leases turn over. For the best rates, book a mid-week move in the fall or winter. Booking 4–6 weeks in advance also helps secure preferred dates and sometimes better pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Do Ottawa movers charge by the hour or by weight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Local Ottawa movers charge by the hour. Hourly rates range from $155/hr to $315/hr depending on the number of movers and truck size. Long-distance moves (over 150 km) are typically priced by weight or cubic footage plus mileage. Prestige Moving charges by the hour for all Ottawa and National Capital Region local moves, with a minimum of 3 hours and a one-time travel fee."
        }
      },
      {
        "@type": "Question",
        "name": "Is tipping movers expected in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tipping is not required but is appreciated for excellent service. A common guideline is $20–$50 per mover for a full-day job, or $10–$20 for a shorter move. The best tip is leaving a five-star Google review, which helps local moving companies like Prestige Moving continue to serve the Ottawa community."
        }
      }
    ]
  };

  const factors = [
    {
      icon: Home,
      title: "Home Size",
      description: "The number of rooms and total volume of your belongings is the biggest cost driver. A bachelor apartment might take 2–3 hours while a 4-bedroom house needs 9–14 hours of labour."
    },
    {
      icon: Clock,
      title: "Time Required",
      description: "Ottawa movers charge by the hour. Efficient packing, disassembly, and a well-organized move-out reduce labour time significantly — and lower your total cost."
    },
    {
      icon: MapPin,
      title: "Distance & Travel",
      description: "Local Ottawa moves include a one-time travel fee (equal to the hourly rate). Moves to Gatineau, Barrhaven, or Kanata from Downtown may involve slightly longer travel times."
    },
    {
      icon: Building2,
      title: "Stairs & Elevator",
      description: "Moving into or out of walk-up buildings adds labour time. Multiple flights of stairs or buildings without elevator access can add 30–90 minutes to your move."
    },
    {
      icon: Package,
      title: "Packing Services",
      description: "Professional packing adds $150–$800+ depending on home size. It saves you time, ensures your items are protected, and often reduces claim risks during transit."
    },
    {
      icon: Star,
      title: "Specialty Items",
      description: "Pianos, pool tables, hot tubs, antiques, and large safes require extra care and equipment. Specialty item moves add $150–$500+ to your total depending on the item."
    },
    {
      icon: Calendar,
      title: "Time of Year",
      description: "Summer (May–September) is peak moving season in Ottawa. Moving in the off-season (October–April) or mid-week can save you 10–20% on overall costs."
    },
    {
      icon: Users,
      title: "Number of Movers",
      description: "More movers means a faster move but a higher hourly rate. For large homes or tight timelines, upgrading from 2 to 3–4 movers often saves money overall by reducing total hours."
    },
  ];

  const hiddenFees = [
    { fee: "Fuel Surcharges", detail: "Some companies add 5–15% fuel surcharges on top of quoted rates. Always ask upfront." },
    { fee: "Stair Fees", detail: "Some movers charge per-flight stair fees ($25–$75/flight) in addition to their hourly rate." },
    { fee: "Long-Carry Fees", detail: "If the truck must park far from the entrance, some movers charge extra for long carries." },
    { fee: "Packing Material Markups", detail: "Boxes, tape, and paper sold at inflated prices. Ask about material costs before booking." },
    { fee: "Disassembly/Reassembly", detail: "Some companies charge extra for furniture disassembly. Confirm this is included in your quote." },
    { fee: "GST/HST", detail: "Ensure your quote includes tax. In Ontario, moving services are subject to HST." },
  ];

  const faqs = faqSchema.mainEntity.map(q => ({
    question: q.name,
    answer: q.acceptedAnswer.text
  }));

  return (
    <>
      <Helmet>
        <title>How Much Does Moving Cost in Ottawa? 2025 Price Guide | Prestige Moving</title>
        <meta name="description" content="Wondering how much moving costs in Ottawa? Get 2025 rates: local moves from $620, hourly rates $155–$315/hr. Interactive calculator + full pricing breakdown by home size. Free quote from Prestige Moving — (613) 600-4000." />
        <meta name="keywords" content="how much does moving cost ottawa, ottawa moving cost, moving cost ottawa 2025, movers ottawa price, moving company cost ottawa, ottawa moving rates, local movers ottawa cost, moving quote ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/how-much-does-moving-cost-ottawa" />
        <meta property="og:title" content="How Much Does Moving Cost in Ottawa? 2025 Complete Price Guide" />
        <meta property="og:description" content="2025 Ottawa moving costs: local moves from $620. Hourly rates, pricing by home size, hidden fees to avoid, and an instant cost calculator. Prestige Moving." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://prestigemoving.ca/how-much-does-moving-cost-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ottawa Moving Costs 2025 | How Much Does Moving Cost? | Prestige Moving" />
        <meta name="twitter:description" content="Ottawa local move costs from $620. Hourly rates $155–$315/hr. Free instant calculator + transparent pricing. Prestige Moving Ottawa." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="bg-[#1A2332] py-20 relative overflow-hidden" data-testid="section-hero">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDNUE1NzIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-6">
                <Calculator className="h-3.5 w-3.5 text-[#C5A572]" />
                <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">2025 Ottawa Moving Cost Guide</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-heading">
                How Much Does Moving Cost in Ottawa?
              </h1>
              <p className="text-xl text-white/75 mb-8 leading-relaxed">
                Get real 2025 Ottawa moving prices — from bachelor apartments to 5-bedroom estates. Use our instant calculator, compare packages, and understand every cost before you book.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book">
                  <Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572] font-bold" data-testid="button-hero-quote">
                    Get Free Quote <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <a href="tel:6136004000">
                  <Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call">
                    <Phone className="h-4 w-4 mr-2" />Call (613) 600-4000
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer — featured snippet bait */}
        <section className="bg-[#C5A572]/8 border-y border-[#C5A572]/20 py-10" data-testid="section-quick-answer">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#C5A572] rounded-full p-2.5 shrink-0 mt-0.5">
                <Info className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1A2332] mb-3">Quick Answer: Ottawa Moving Costs at a Glance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Local moving in Ottawa costs <strong>$620–$4,725+</strong> depending on home size and the number of movers. Ottawa movers charge by the hour — <strong>$155/hr (2 movers)</strong>, <strong>$195/hr (3 movers)</strong>, or <strong>$315/hr (4 movers + 2 trucks)</strong> — plus a one-time travel fee equal to the hourly rate. Most moves have a 3-hour minimum.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "1-Bedroom", price: "$620–$975" },
                    { label: "2-Bedroom", price: "$775–$1,365" },
                    { label: "3-Bedroom", price: "$1,085–$1,950" },
                    { label: "4+ Bedroom", price: "$1,550–$4,725" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-md p-3 border border-[#C5A572]/20 text-center" data-testid={`quick-price-${i}`}>
                      <div className="text-xs font-semibold text-gray-500 uppercase mb-1">{item.label}</div>
                      <div className="text-base font-bold text-[#1A2332]">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky TOC Bar */}
        <div className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-1 py-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap pr-3 border-r border-gray-200 mr-2">On this page</span>
              {COST_TOC.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap font-medium transition-all ${
                    activeSection === item.id
                      ? "bg-[#C5A572] text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Calculator */}
        <section id="toc-calculator" className="py-16 bg-white" data-testid="section-calculator">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[#1A2332]/5 rounded-full px-4 py-1.5 mb-4">
                <Calculator className="h-4 w-4 text-[#C5A572]" />
                <span className="text-sm font-semibold text-[#1A2332]">Instant Moving Cost Estimator</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Calculate Your Ottawa Moving Cost</h2>
              <p className="text-gray-500">Adjust the options below to get an instant estimate for your move.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                {/* Controls */}
                <div className="space-y-6">
                  {/* Home Size */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A2332] mb-3">Home Size</label>
                    <div className="grid grid-cols-1 gap-2">
                      {HOME_SIZES.map((size, i) => (
                        <button
                          key={i}
                          onClick={() => setHomeSize(i)}
                          className={`flex items-center gap-3 px-4 py-2.5 rounded-md border text-sm font-medium text-left transition-colors ${
                            homeSize === i
                              ? "border-[#C5A572] bg-[#C5A572]/8 text-[#1A2332]"
                              : "border-gray-200 text-gray-600 hover-elevate"
                          }`}
                          data-testid={`button-size-${i}`}
                        >
                          <size.icon className={`h-4 w-4 shrink-0 ${homeSize === i ? "text-[#C5A572]" : "text-gray-400"}`} />
                          {size.label}
                          {homeSize === i && <ChevronRight className="h-4 w-4 ml-auto text-[#C5A572]" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Package */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A2332] mb-3">Moving Package</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(["premium", "deluxe", "diamond"] as const).map((p) => (
                        <button
                          key={p}
                          onClick={() => setPkg(p)}
                          className={`py-2 px-3 rounded-md border text-xs font-semibold text-center transition-colors ${
                            pkg === p
                              ? "border-[#C5A572] bg-[#C5A572]/8 text-[#1A2332]"
                              : "border-gray-200 text-gray-600 hover-elevate"
                          }`}
                          data-testid={`button-pkg-${p}`}
                        >
                          <div className="capitalize font-bold">{p}</div>
                          <div className="text-[10px] mt-0.5 opacity-70">{PRICING[p].movers} movers · call for rate</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Add-ons */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1A2332] mb-3">Add-Ons</label>
                    <div className="space-y-2">
                      {[
                        { label: "Stairs or no elevator", key: "stairs", value: hasStairs, setter: setHasStairs },
                        { label: "Packing service included", key: "packing", value: hasPacking, setter: setHasPacking },
                        { label: "Specialty item (piano, antique)", key: "specialty", value: hasSpecialty, setter: setHasSpecialty },
                      ].map(({ label, key, value, setter }) => (
                        <button
                          key={key}
                          onClick={() => setter(!value)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-md border text-sm font-medium text-left transition-colors ${
                            value
                              ? "border-[#C5A572] bg-[#C5A572]/8 text-[#1A2332]"
                              : "border-gray-200 text-gray-600 hover-elevate"
                          }`}
                          data-testid={`button-addon-${key}`}
                        >
                          <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${value ? "bg-[#C5A572] border-[#C5A572]" : "border-gray-300"}`}>
                            {value && <CheckCircle2 className="h-3 w-3 text-white" />}
                          </div>
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Result */}
                <div className="flex flex-col">
                  <div className="bg-[#1A2332] rounded-lg p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-2">Your Estimated Cost</div>
                      <div className="text-4xl md:text-5xl font-black text-white mb-1" data-testid="text-estimate">
                        ${estimate.low.toLocaleString()}–${estimate.high.toLocaleString()}
                      </div>
                      <div className="text-[#C5A572] text-sm font-medium mb-6">All-inclusive estimate (labour + travel fee)</div>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between text-white/70">
                          <span>Package</span>
                          <span className="text-white font-semibold capitalize">{pkg} package · call for rate</span>
                        </div>
                        <div className="flex justify-between text-white/70">
                          <span>Movers & Truck</span>
                          <span className="text-white font-semibold">{PRICING[pkg].movers} movers · {PRICING[pkg].truck}</span>
                        </div>
                        <div className="flex justify-between text-white/70">
                          <span>Estimated Hours</span>
                          <span className="text-white font-semibold">{estimate.minHrs}–{estimate.maxHrs} hrs</span>
                        </div>
                        <div className="flex justify-between text-white/70">
                          <span>Travel Fee</span>
                          <span className="text-white font-semibold">Included in estimate</span>
                        </div>
                        {hasPacking && (
                          <div className="flex justify-between text-white/70">
                            <span>Packing Service</span>
                            <span className="text-white font-semibold">Included above</span>
                          </div>
                        )}
                        <div className="border-t border-white/15 pt-3 flex justify-between">
                          <span className="text-white/60 text-xs">* HST not included. Final price confirmed on-site.</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      <Link href="/book" className="block">
                        <Button className="w-full bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572] font-bold" data-testid="button-calc-quote">
                          Get Your Free Quote <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                      <a href="tel:6136004000" className="block">
                        <Button variant="outline" className="w-full text-white border-white/25 bg-white/10" data-testid="button-calc-call">
                          <Phone className="h-4 w-4 mr-2" />Call (613) 600-4000
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-[#C5A572]" /> WSIB Certified</div>
                    <div className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-[#C5A572]" /> 350+ Reviews</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[#C5A572]" /> No Hidden Fees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Price Table */}
        <section id="toc-price-table" className="py-16 bg-gray-50" data-testid="section-price-table">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Ottawa Moving Cost by Home Size (2025)</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">All prices include labour + travel fee. Based on a local move within Ottawa. Rates are all-inclusive with no hidden fees.</p>
            </div>

            {/* Package legend */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: "Premium", sub: "2 movers · 16–20 ft truck", rate: "Call for Rate", color: "border-gray-300 bg-white" },
                { label: "Deluxe", sub: "3 movers · 26 ft truck", rate: "Call for Rate", color: "border-[#C5A572] bg-[#C5A572]/5" },
                { label: "Diamond", sub: "4 movers · 2 trucks", rate: "Call for Rate", color: "border-[#1A2332] bg-[#1A2332]/5" },
              ].map((p, i) => (
                <div key={i} className={`rounded-md border p-3 text-center ${p.color}`} data-testid={`pkg-legend-${i}`}>
                  <div className="font-bold text-[#1A2332] text-sm">{p.label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{p.sub}</div>
                  <div className="text-xs font-semibold text-[#C5A572] mt-1">{p.rate}</div>
                </div>
              ))}
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1A2332] text-white">
                    <th className="text-left px-5 py-3.5 font-semibold">Home Size</th>
                    <th className="text-center px-4 py-3.5 font-semibold">Premium</th>
                    <th className="text-center px-4 py-3.5 font-semibold bg-[#C5A572]/20">Deluxe</th>
                    <th className="text-center px-4 py-3.5 font-semibold">Diamond</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICE_TABLE.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"} data-testid={`table-row-${i}`}>
                      <td className="px-5 py-3.5 font-semibold text-[#1A2332]">{row.size}</td>
                      <td className="px-4 py-3.5 text-center text-gray-700">{row.premium}</td>
                      <td className="px-4 py-3.5 text-center font-semibold text-[#1A2332] bg-[#C5A572]/5">{row.deluxe}</td>
                      <td className="px-4 py-3.5 text-center text-gray-700">{row.diamond}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">* Estimates based on local Ottawa move. Long-distance, packing services & specialty items billed separately. HST not included.</p>
          </div>
        </section>

        {/* Factors */}
        <section id="toc-factors" className="py-16 bg-white" data-testid="section-factors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A2332] mb-3">8 Factors That Affect Your Ottawa Moving Cost</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Understanding what drives your total price helps you make smart decisions — and avoid overpaying.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {factors.map((f, i) => (
                <div key={i} className="bg-gray-50 rounded-md p-5 border border-gray-100" data-testid={`factor-${i}`}>
                  <div className="w-10 h-10 bg-[#C5A572]/12 rounded-md flex items-center justify-center mb-4">
                    <f.icon className="h-5 w-5 text-[#C5A572]" />
                  </div>
                  <h3 className="font-bold text-[#1A2332] mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hidden Fees */}
        <section id="toc-hidden-fees" className="py-16 bg-gray-50" data-testid="section-hidden-fees">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Hidden Moving Fees to Watch Out For in Ottawa</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Not all Ottawa movers are fully transparent. Here's what some companies hide — and what Prestige Moving never charges.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {hiddenFees.map((item, i) => (
                <div key={i} className="bg-white rounded-md p-5 border border-gray-200 flex gap-4" data-testid={`hidden-fee-${i}`}>
                  <div className="shrink-0 mt-0.5">
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1A2332] mb-1">{item.fee}</div>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-[#1A2332] rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-bold text-white text-lg mb-1">Prestige Moving: Zero Hidden Fees — Guaranteed</div>
                <p className="text-white/65 text-sm">Every quote is itemized: labour, truck, travel, materials. What we quote is what you pay.</p>
              </div>
              <Link href="/book" className="shrink-0">
                <Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572] whitespace-nowrap" data-testid="button-hidden-fees-cta">
                  Get Transparent Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Long-form content */}
        <section id="toc-long-distance" className="py-16 bg-white" data-testid="section-content">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Understanding Ottawa Moving Costs in 2025</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The question "how much does moving cost in Ottawa?" is one of the most common searches for anyone planning a relocation in the National Capital Region — and the answer is genuinely more nuanced than a single number. Ottawa moving costs depend primarily on your home's size, the number of movers you need, how long the move takes, and any specialty services you require. This guide breaks down every element of your moving quote so you can plan your budget with confidence and avoid unpleasant surprises on moving day.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">How Ottawa Movers Charge: Hourly Rates Explained</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              All local moves within Ottawa and the National Capital Region are charged by the hour. Prestige Moving offers three packages — <strong className="text-[#1A2332]">Premium ($155/hr)</strong>, <strong className="text-[#1A2332]">Deluxe ($195/hr)</strong>, and <strong className="text-[#1A2332]">Diamond ($315/hr)</strong> — each including a different number of movers and truck size to match your move's demands. In addition to the hourly rate, a one-time travel fee equal to the hourly rate is charged at the start of the job. This travel fee covers your movers' drive time from our Colonnade Road facility to your home and back.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The minimum charge for all local Ottawa moves is 3 hours. For a small bachelor apartment move using the Premium package, your minimum total would be (3 hrs × $155) + $155 travel fee = <strong className="text-[#1A2332]">$620 all-in</strong>. Most 1-bedroom apartment moves in Ottawa are completed within 3–4 hours, making the typical cost range $620–$775 for the Premium package or $780–$975 for the Deluxe package.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Ottawa Moving Costs by Neighbourhood</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              While the hourly rate stays the same regardless of which Ottawa neighbourhood you're moving in, some areas can affect total cost through longer travel distances, parking restrictions, and building access challenges. Moves involving <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, or <Link href="/movers-in-stittsville" className="text-[#C5A572] hover:underline">Stittsville</Link> tend to involve slightly longer drives between locations, which can add 30–60 minutes to the total time. Inner-city neighbourhoods like <Link href="/movers-in-westboro" className="text-[#C5A572] hover:underline">Westboro</Link>, <Link href="/movers-in-sandy-hill" className="text-[#C5A572] hover:underline">Sandy Hill</Link>, and Centretown often involve narrower streets and older buildings with tight access, which can also affect labour time.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">When Is the Cheapest Time to Move in Ottawa?</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Moving costs in Ottawa don't change drastically by season at Prestige Moving — our rates remain consistent year-round — but availability and flexibility do shift. Summer (May–September) is Ottawa's peak moving season. During this period, the best moving dates fill up weeks in advance. Moving between October and April offers more scheduling flexibility, and some companies offer off-peak discounts during these slower months.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Within any month, the most affordable moving dates are mid-month weekdays — not the first or last weekend of the month, when leases typically turn over and demand peaks. Booking your Ottawa move 4–6 weeks in advance secures your preferred date and ensures the most accurate quote. Last-minute moves (booked within a week) during peak season may have limited availability.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">How to Save Money on Your Ottawa Move</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              The most effective ways to reduce your Ottawa moving cost include:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Declutter before moving day — less stuff means fewer hours and a lower bill",
                "Pack as many boxes as possible yourself before the movers arrive",
                "Disassemble large furniture (beds, desks, wardrobes) ahead of time",
                "Label every box clearly so movers can place items directly in the right room",
                "Book a mid-week, mid-month date in the off-season (October–April)",
                "Choose the right package — upgrading from 2 to 3 movers often reduces total hours enough to offset the higher hourly rate",
                "Have a clear path from your home to the truck to speed up loading and unloading",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600" data-testid={`tip-${i}`}>
                  <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Long-Distance Moving Costs from Ottawa</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Long-distance moves from Ottawa are priced differently from local moves. Instead of hourly billing, <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">long distance movers ottawa</a> typically price based on the weight or cubic footage of your belongings plus the distance traveled. Ottawa to Toronto (approximately 450 km) costs roughly $2,500–$6,000 for a 2–3 bedroom home. Ottawa to Montreal (approximately 200 km) runs $1,500–$3,500 depending on volume. Cross-country moves (Ottawa to Vancouver or Calgary) range from $6,000 to $15,000+ for a full household.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              For moves to Gatineau or the Quebec side of the National Capital Region, our standard local hourly rates apply — the interprovincial border doesn't change the pricing structure for nearby Gatineau moves. Contact us at <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a> for a specific long-distance moving quote.
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-[#1A2332] py-10" data-testid="section-stats">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Star, value: "350+", label: "Five-Star Google Reviews" },
              { icon: TruckIcon, value: "10,000+", label: "Ottawa Moves Completed" },
              { icon: DollarSign, value: "$0", label: "Hidden Fees — Ever" },
              { icon: Shield, value: "100%", label: "WSIB Certified & Insured" },
            ].map((stat, i) => (
              <div key={i} className="text-center" data-testid={`stat-${i}`}>
                <stat.icon className="h-7 w-7 text-[#C5A572] mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-white/55 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="toc-faq" className="py-16 bg-white" data-testid="section-faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Ottawa Moving Costs</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-md overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between gap-4 p-4 text-left hover-elevate"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    data-testid={`button-faq-${i}`}
                  >
                    <span className="font-semibold text-[#1A2332]">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-gray-600 leading-relaxed">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <SeoKeywordsSection currentPage="/how-much-does-moving-cost-ottawa" />

        {/* CTA */}
        <section className="py-16 bg-[#C5A572]" data-testid="section-cta">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for a Firm, No-Surprise Quote?</h2>
            <p className="text-white/80 text-lg mb-8">Stop guessing — get an exact, itemized quote for your Ottawa move in minutes. 350+ five-star reviews. Zero hidden fees. WSIB certified.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book">
                <Button className="bg-[#1A2332] hover:bg-[#243044] text-white border-[#1A2332]" data-testid="button-cta-quote">Get Free Quote Now</Button>
              </Link>
              <a href="tel:6136004000">
                <Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-cta-call">
                  <Phone className="h-4 w-4 mr-2" />Call (613) 600-4000
                </Button>
              </a>
            </div>
          </div>
        </section>

      </div>
      <SharedFooter />
    </>
  );
}
