import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, Shield, Clock, MapPin,
  Home, Package, Star, ChevronDown, Truck, Users,
  Award, DollarSign, Zap, Key, Lock
} from "lucide-react";
import residentialHeroImg from "@assets/generated_images/residential_moving_hero.png";

const SERVICES = [
  { icon: Home, title: "Full-Home Residential Moves", desc: "From studio apartments to 6-bedroom family homes. We move the whole home — furniture, boxes, appliances, wardrobes — organized, protected, and placed exactly where you want it at the destination." },
  { icon: Package, title: "Professional Packing Service", desc: "Full-service packing available. Our team uses wardrobe boxes, double-wall cartons, custom dish packs, and stretch wrap. We pack your entire home in a single day and label every box by room for organized unloading." },
  { icon: Truck, title: "Furniture Disassembly & Reassembly", desc: "Beds, desks, bookshelves, cribs, wardrobes — our crew disassembles at origin and fully reassembles at destination. Hardware is bagged, labelled, and kept with the piece it belongs to. No missing bolts, no unfinished assembly." },
  { icon: Shield, title: "Specialty & High-Value Items", desc: "Pianos, artwork, antiques, wine cellars, gun safes, grandfather clocks — we have the equipment and expertise to move high-value specialty items that standard movers won't touch. Custom crating available." },
  { icon: Key, title: "Appliance Moving", desc: "Washers, dryers, fridges, stoves, dishwashers. We disconnect, protect, transport, and reconnect appliances properly. Fridges get upright transit treatment. Doors removed when needed. Nothing scratched." },
  { icon: Zap, title: "Last-Minute & Short-Notice Moves", desc: "Need to move faster than expected? We maintain last-minute availability specifically for Ottawa residents facing sudden lease changes, possession dates, or life changes. Call (613) 600-4000 for same-week availability." },
];

const NEIGHBOURHOODS = [
  "Kanata", "Barrhaven", "Orleans", "Gloucester", "Nepean", "Vanier",
  "Westboro", "Hintonburg", "The Glebe", "Old Ottawa South", "Alta Vista",
  "Hunt Club", "Riverside South", "Stittsville", "Richmond", "Manotick",
  "Rockcliffe Park", "Manor Park", "Sandy Hill", "Lowertown"
];

const PACKAGES = [
  {
    name: "Premium",
    rate: "$155/hr",
    crew: "2 Movers + Truck",
    best: "1–2 Bedroom Apartments & Condos",
    features: ["2 professional movers", "26ft moving truck", "Moving blankets & stretch wrap", "Basic furniture disassembly", "3-hour minimum"],
    highlight: false,
  },
  {
    name: "Deluxe",
    rate: "$195/hr",
    crew: "3 Movers + Truck",
    best: "2–3 Bedroom Homes",
    features: ["3 professional movers", "26ft moving truck", "Full furniture protection", "Appliance moving", "Disassembly & reassembly", "3-hour minimum"],
    highlight: true,
  },
  {
    name: "Diamond",
    rate: "$315/hr",
    crew: "4+ Movers + Truck",
    best: "4+ Bedroom Homes & Large Estates",
    features: ["4+ professional movers", "Large fleet trucks", "Premium furniture protection", "Full appliance service", "Priority scheduling", "White-glove placement"],
    highlight: false,
  },
];

const STEPS = [
  { num: "01", title: "Book Your Date", desc: "Call (613) 600-4000 or book online. Our coordinators confirm your move date, home size, special items, and access details (elevator booking, parking permits, building rules). You receive a written confirmation same day." },
  { num: "02", title: "Pre-Move Preparation", desc: "48 hours before your move, we send your crew details and a pre-move checklist. We'll arrange parking permits and elevator reservations if needed. You get a call the evening before to confirm arrival time." },
  { num: "03", title: "Moving Day — Your Home, Protected", desc: "Our crew arrives in uniform in a marked truck. We protect floors with runners, wrap doorframes, and blanket-wrap every piece of furniture before moving it. Nothing moves without protection." },
  { num: "04", title: "Loading — Fast & Organized", desc: "Our crew loads your truck systematically — heavy items on the floor, fragile items secured and padded, boxes organized by room label. Maximum protection, minimum trips. We work efficiently without rushing." },
  { num: "05", title: "Delivery & Room-by-Room Placement", desc: "At your new home, we place every item exactly where you want it — not just wherever is convenient for us. Furniture is reassembled, appliances are reconnected, and we do a final walkthrough with you before we leave." },
];

const FAQS = [
  { q: "How much does residential moving in Ottawa cost?", a: "Residential moving in Ottawa is priced hourly. Our Premium package (2 movers + truck) is $155/hr. Deluxe (3 movers) is $195/hr. Diamond (4+ movers) is $315/hr. All packages have a 3-hour minimum. A typical 2-bedroom apartment move takes 4–6 hours with our Premium package, totalling $620–$930. We'll confirm pricing for your specific move when you book." },
  { q: "How far in advance should I book an Ottawa mover?", a: "For summer moves (May–September), we recommend booking 4–6 weeks in advance. Ottawa's moving season peaks in late June and July. For fall and winter moves, 2–3 weeks is typically sufficient. We do maintain last-minute availability for urgent situations — call (613) 600-4000 for same-week openings." },
  { q: "Do you move in winter in Ottawa?", a: "Yes. Ottawa winters don't slow us down. Our crew uses ice-grip footwear, floor runners on all surfaces, and takes extra care with frozen paths and front steps. Winter moves are often faster (lighter traffic) and our winter availability is better than summer. Some of our best-reviewed moves happen in January and February." },
  { q: "Do I need to empty dresser drawers before the move?", a: "For local Ottawa moves, you can leave lightweight items (clothes, linens) in dresser drawers — we'll wrap and move the dresser as-is. Remove heavy or fragile items like books, tools, or breakables. We'll advise on your specific situation when you book." },
  { q: "Do you move pianos and other specialty items?", a: "Yes. We move upright and grand pianos, gun safes, large aquariums, hot tubs, antique furniture, and other specialty items. These require advance notice and may require specialized equipment or extra crew members. Mention specialty items when booking so we can prepare the right equipment." },
  { q: "Are my belongings insured during an Ottawa move?", a: "Yes. All moves include basic valuation coverage. We also offer enhanced full-replacement value protection for an additional fee — recommended for high-value furniture, electronics, and specialty items. Our coordinator will explain coverage options when you book." },
  { q: "Do you offer packing services in Ottawa?", a: "Yes. Full-service packing is available as an add-on. Our packing team uses professional-grade materials: double-wall boxes, dish packs, wardrobe boxes, and specialty wrap for fragile items. We can pack your entire home the day before your move or on moving day itself." },
  { q: "What areas in Ottawa do you service?", a: "We service all Ottawa neighbourhoods and surrounding communities: Kanata, Barrhaven, Orleans, Gloucester, Nepean, Vanier, Westboro, The Glebe, Old Ottawa South, Alta Vista, Manotick, Stittsville, Richmond, and all areas within the Ottawa–Gatineau region." },
];

export default function ResidentialMoving() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"services" | "process">("services");

  return (
    <>
      <Helmet>
        <title>Residential Movers Ottawa | Home Moving Services | Prestige Moving</title>
        <meta name="description" content="Ottawa's top-rated residential movers. Professional home moving services for apartments, condos, and houses across Ottawa. 5.0★, 400+ reviews, $155/hr. Call (613) 600-4000." />
        <meta name="keywords" content="residential movers Ottawa, home movers Ottawa, moving companies Ottawa, apartment movers Ottawa, house movers Ottawa, local movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/services/residential-moving" />
        <meta property="og:title" content="Residential Movers Ottawa | Prestige Moving — 5.0★, 400+ Reviews" />
        <meta property="og:description" content="Professional residential moving in Ottawa. Full home moves, packing, furniture assembly, appliances. Starting at $155/hr. Book online or call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Ottawa Movers", "item": "https://prestigemoving.ca" }, { "@type": "ListItem", "position": 2, "name": "Residential Movers Ottawa", "item": "https://prestigemoving.ca/services/residential-moving" }] })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Residential Movers Ottawa", "serviceType": "Residential Moving Services", "provider": { "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "telephone": "(613) 600-4000", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } }, "areaServed": { "@type": "City", "name": "Ottawa" } })}</script>
      </Helmet>

      <SharedNavigation />

      {/* ── Hero ── */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={residentialHeroImg} alt="Professional movers carrying furniture into an Ottawa home" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {["5.0★ Google Reviews", "Fully Insured", "WSIB Certified", "No Hidden Fees"].map(t => (
                <Badge key={t} className="bg-[#C5A572]/20 text-[#C5A572] border border-[#C5A572]/30 text-xs font-semibold">{t}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
              Ottawa's Top Rated<br />
              <span className="text-[#C5A572]">Residential Movers</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Moving homes in Ottawa — apartments, condos, townhouses, and family homes across every Ottawa neighbourhood. Professional crew, wrapped furniture, zero damage guarantee. Serving <Link href="/" className="text-[#C5A572] hover:underline">Ottawa</Link> since 2015 with a 5.0★ Google rating across 400+ verified reviews.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {["Call for Pricing", "3-Hour Minimum", "Packing Available", "Same-Week Availability"].map(t => (
                <div key={t} className="flex items-center gap-1.5 text-white/75 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />
                  {t === "Call for Pricing" ? <a href="tel:6136004000">{t}</a> : <span>{t}</span>}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold text-base px-6">Book Your Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10 text-base px-6"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["5.0★ — 400+ Google Reviews", "Fully Insured & WSIB", "Floors & Walls Protected", "Furniture Disassembly Included", "No Surprise Fees"].map(t => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" />{t}</span>
          ))}
        </div>
      </div>

      {/* ── Stats row ── */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "400+", label: "5-Star Google Reviews" },
              { num: "9+ yrs", label: "Serving Ottawa Families" },
              { num: "15,000+", label: "Ottawa Homes Moved" },
              { num: "0", label: "Hidden Fees, Ever" },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl font-black text-[#C5A572] mb-1">{s.num}</div>
                <div className="text-gray-600 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services / Process Tabs ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Ottawa Residential Moving Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Everything you need for a complete home move in Ottawa — from studio apartments to estate homes, local moves to within-province relocations.</p>
          </div>

          {/* Tab toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white border border-gray-200 rounded-xl p-1 gap-1">
              {(["services", "process"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${activeTab === tab ? "bg-[#1A2332] text-white" : "text-gray-600 hover-elevate"}`}
                >
                  {tab === "services" ? "Our Services" : "How It Works"}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "services" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl border border-gray-100 p-6">
                  <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-[#C5A572]" />
                  </div>
                  <h3 className="font-bold text-[#1A2332] mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "process" && (
            <div className="space-y-4 max-w-3xl mx-auto">
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
          )}
        </div>
      </section>

      {/* ── Pricing Packages ── */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Ottawa Moving Packages & Pricing</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Transparent hourly pricing with no hidden fees. 3-hour minimum on all packages. Choose the crew size that matches your home.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map(pkg => (
              <div key={pkg.name} className={`rounded-2xl border p-7 ${pkg.highlight ? "bg-[#1A2332] border-[#1A2332] text-white shadow-xl" : "bg-white border-gray-200"}`}>
                {pkg.highlight && <div className="text-center mb-4"><Badge className="bg-[#C5A572]/20 text-[#C5A572] border-[#C5A572]/30 text-xs">Most Popular</Badge></div>}
                <div className="text-center mb-6">
                  <h3 className={`text-xl font-black mb-1 ${pkg.highlight ? "text-white" : "text-[#1A2332]"}`}>{pkg.name}</h3>
                  <a href="tel:6136004000" className="relative inline-flex items-center gap-1.5 bg-gray-100 rounded-lg px-3 py-1.5 mb-1 overflow-hidden mx-auto cursor-pointer">
                    <span className="text-2xl font-black text-[#C5A572] blur-sm select-none pointer-events-none">$000/hr</span>
                    <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-[1px]">
                      <Lock className="h-3.5 w-3.5 text-[#C5A572] mr-1.5" />
                      <span className="text-xs font-bold text-[#1A2332]">Call for Rate</span>
                    </div>
                  </a>
                  <div className={`text-sm font-semibold mb-1 ${pkg.highlight ? "text-white/80" : "text-gray-600"}`}>{pkg.crew}</div>
                  <div className={`text-xs ${pkg.highlight ? "text-white/60" : "text-gray-500"}`}>{pkg.best}</div>
                </div>
                <div className="space-y-2.5 mb-7">
                  {pkg.features.map(f => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${pkg.highlight ? "text-[#C5A572]" : "text-[#C5A572]"}`} />
                      <span className={`text-sm ${pkg.highlight ? "text-white/80" : "text-gray-700"}`}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/book" className="block">
                  <Button className={`w-full font-bold ${pkg.highlight ? "bg-[#C5A572] text-[#1A2332]" : "bg-[#1A2332] text-white"}`}>
                    Book {pkg.name} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-5">All prices include truck, fuel, moving blankets, and stretch wrap. Travel fee applies outside central Ottawa. Ask your coordinator for details.</p>
        </div>
      </section>

      {/* ── Long-form SEO content ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Residential Moving in Ottawa — What Makes It Different</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Moving your home in Ottawa involves more than loading a truck and driving across town. Every residential move has its own challenges — elevator access and parking permits in Ottawa condo buildings, stairwells in Centretown walk-ups, long driveways in Manotick, coordinated possession dates in Barrhaven new builds. An Ottawa moving company that's done thousands of residential moves knows these challenges before they become problems on your moving day.</p>

            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Apartment & Condo Moving in Ottawa</h3>
            <p>Ottawa's condo market has grown significantly over the past decade, and moving in and out of Ottawa condo buildings involves specific requirements that inexperienced movers get wrong. Building management typically requires elevator reservations (booked 72+ hours in advance), insurance certificates naming the building as additional insured, approved parking for moving trucks, and floor protection in common areas. We handle all of this coordination as part of your move — not as an extra charge. Our team carries current WSIB and liability certificates that meet the requirements of every major Ottawa condo building.</p>

            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Family Home Moves in Ottawa's Suburbs</h3>
            <p>Moving a family home in Kanata, Barrhaven, Orleans, or other Ottawa suburbs typically involves larger volumes, more furniture disassembly, and coordinated timing around school calendars and mortgage possession dates. Our Deluxe (3 movers) and Diamond (4+ movers) packages are built for family home moves — larger crews mean faster moves, which means less time you're paying for. A 4-bedroom home in Barrhaven with our Diamond package typically takes 7–9 hours compared to 12+ hours with a 2-mover team.</p>

            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Ottawa Moving Season & Timing</h3>
            <p>Ottawa's moving season peaks in May–August, driven by university students, government employees on posting changes, and families coordinating around the school year. The last two weeks of June and first two weeks of July are the busiest moving period in Ottawa. Booking early — ideally 4–6 weeks in advance for summer dates — ensures you get the date you want. We do reserve a limited number of same-week slots for urgent situations, but availability is never guaranteed in peak season.</p>

            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">What Sets Ottawa's Best Movers Apart</h3>
            <p>The Ottawa moving industry ranges from licensed, professional companies to unmarked vans operated by unlicensed workers with no insurance. The difference matters enormously when something goes wrong — which, with inexperienced movers, it does. A professional Ottawa mover carries: WSIB coverage (protects you from liability if a worker is injured on your property), commercial liability insurance ($2M minimum), and a published rate sheet with no hidden fees. Always ask for proof of WSIB and liability before any mover enters your home.</p>

            <p>For commercial office and business moves in Ottawa, see our <Link href="/services/commercial-moving" className="text-[#C5A572] hover:underline">commercial moving services</Link>. Moving across provinces? See our <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">long distance moving</Link> page. Moving an older family member? See our <Link href="/senior-movers-ottawa" className="text-[#C5A572] hover:underline">senior movers Ottawa</Link> service.</p>
          </div>
        </div>
      </section>

      {/* ── Ottawa Neighbourhoods ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Ottawa Neighbourhoods We Serve</h2>
            <p className="text-gray-600 max-w-xl mx-auto">We move throughout Ottawa and surrounding communities. Wherever your move starts or ends, we cover it.</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {NEIGHBOURHOODS.map(n => (
              <span key={n} className="bg-gray-50 border border-gray-200 text-gray-700 rounded-lg px-3 py-1.5 text-sm font-medium flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#C5A572]" />{n}
              </span>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-5">Not listed? We likely serve your area too. Call (613) 600-4000 to confirm coverage for your neighbourhood.</p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-2 text-center">What Ottawa Homeowners Say</h2>
          <p className="text-gray-500 text-center text-sm mb-10">5.0★ average · 400+ verified Google reviews from Ottawa</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Amanda L.", area: "Barrhaven → Kanata", review: "Moving a 4-bedroom family home with 3 kids' worth of stuff was something I dreaded. The crew was there at 8am, organized, fast, and careful with everything. Every piece of furniture was wrapped before it left the house. Reassembled everything perfectly at the other end. Would not use anyone else in Ottawa." },
              { name: "Chris & Natalie V.", area: "Centretown Condo", review: "They handled all the condo coordination — elevator booking, parking permit, insurance cert to the building. We didn't have to do anything except pack our own boxes. The crew protected the hallway floors without being asked. Professional from first call to last handshake." },
              { name: "Ryan M.", area: "Orleans → Rockcliffe Park", review: "Last-minute move after a rental situation changed suddenly. Called Monday, moved Wednesday. The crew treated our belongings with as much care as if we'd booked months in advance. Not one scratch on our new hardwood floors. This is how moving should work." },
            ].map(t => (
              <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />)}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.review}"</p>
                <div className="font-bold text-[#1A2332] text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs flex items-center gap-1 mt-0.5"><MapPin className="h-3 w-3" />{t.area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-2 text-center">Residential Moving FAQ</h2>
          <p className="text-gray-500 text-center text-sm mb-8">Common questions from Ottawa homeowners and renters</p>
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
          <Home className="h-10 w-10 text-[#C5A572] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Book Your Ottawa Home Move?</h2>
          <p className="text-white/65 mb-2 max-w-xl mx-auto">Book online in under 3 minutes or call our Ottawa team directly. We'll confirm your date, crew size, and pricing — no hidden fees.</p>
          <p className="text-[#C5A572] font-semibold mb-8">(613) 600-4000 · Ottawa@prestigemoving.ca</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Book Your Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
