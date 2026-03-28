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
  Phone, ArrowRight, CheckCircle2, Shield, Clock, MapPin,
  Home, Package, Star, ChevronDown, Truck, Users,
  Award, DollarSign, Zap, Key, Lock, Building2, Heart, Info
} from "lucide-react";
import residentialHeroImg from "@assets/generated_images/residential_moving_hero.png";
import residentialTruckImg from "@assets/generated_images/residential_moving_truck_at_home.png";
import packingServicesImg from "@assets/generated_images/professional_packing_services.png";

const TOC_ITEMS = [
  { id: "overview", title: "What We Do" },
  { id: "services", title: "Our Services" },
  { id: "types-of-moves", title: "Types of Moves" },
  { id: "protecting-belongings", title: "Furniture Protection" },
  { id: "pricing", title: "Pricing & Packages" },
  { id: "ottawa-neighbourhoods-guide", title: "Ottawa Moving Guide" },
  { id: "moving-season", title: "Best Time to Move" },
  { id: "process", title: "How It Works" },
  { id: "checklist", title: "Moving Checklist" },
  { id: "faq", title: "FAQ" },
  { id: "service-areas", title: "Service Areas" },
  { id: "reviews", title: "Reviews" },
];

const SERVICES = [
  { icon: Home, title: "Full-Home Residential Moves", desc: "From studio apartments to 6-bedroom family homes. We move the whole home — furniture, boxes, appliances, wardrobes — organized, protected, and placed exactly where you want it at the destination." },
  { icon: Package, title: "Professional Packing Service", desc: "Full-service packing available. Our team uses wardrobe boxes, double-wall cartons, custom dish packs, and stretch wrap. We pack your entire home in a single day and label every box by room for organized unloading." },
  { icon: Truck, title: "Furniture Disassembly & Reassembly", desc: "Beds, desks, bookshelves, cribs, wardrobes — our crew disassembles at origin and fully reassembles at destination. Hardware is bagged, labelled, and kept with the piece it belongs to. No missing bolts, no unfinished assembly." },
  { icon: Shield, title: "Specialty & High-Value Items", desc: "Pianos, artwork, antiques, wine cellars, gun safes, grandfather clocks — we have the equipment and expertise to move high-value specialty items that standard movers won't touch. Custom crating available." },
  { icon: Key, title: "Appliance Moving", desc: "Washers, dryers, fridges, stoves, dishwashers. We disconnect, protect, transport, and reconnect appliances properly. Fridges get upright transit treatment. Doors removed when needed. Nothing scratched." },
  { icon: Zap, title: "Last-Minute & Short-Notice Moves", desc: "Need to move faster than expected? We maintain last-minute availability specifically for Ottawa residents facing sudden lease changes, possession dates, or life changes. Call (613) 600-4000 for same-week availability." },
];

const PACKAGES = [
  {
    name: "Premium",
    crew: "2 Movers + Truck",
    best: "1–2 Bedroom Apartments & Condos",
    features: ["2 professional movers", "26ft moving truck", "Moving blankets & stretch wrap", "Basic furniture disassembly", "3-hour minimum"],
    highlight: false,
  },
  {
    name: "Deluxe",
    crew: "3 Movers + Truck",
    best: "2–3 Bedroom Homes",
    features: ["3 professional movers", "26ft moving truck", "Full furniture protection", "Appliance moving", "Disassembly & reassembly", "3-hour minimum"],
    highlight: true,
  },
  {
    name: "Diamond",
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
  { q: "How much does residential moving in Ottawa cost?", a: "Residential moving in Ottawa is priced hourly. Our Premium package (2 movers + truck) is competitively priced — call (613) 600-4000 for current rates. Our Deluxe (3 movers) is ideal for 2–3 bedroom homes. Diamond (4+ movers) covers large estates. All packages have a 3-hour minimum. A typical 2-bedroom apartment move takes 4–6 hours. We'll confirm pricing for your specific move when you book." },
  { q: "How far in advance should I book an Ottawa mover?", a: "For summer moves (May–September), we recommend booking 4–6 weeks in advance. Ottawa's moving season peaks in late June and July. For fall and winter moves, 2–3 weeks is typically sufficient. We do maintain last-minute availability for urgent situations — call (613) 600-4000 for same-week openings." },
  { q: "Do you move in winter in Ottawa?", a: "Yes. Ottawa winters don't slow us down. Our crew uses ice-grip footwear, floor runners on all surfaces, and takes extra care with frozen paths and front steps. Winter moves are often faster (lighter traffic) and our winter availability is better than summer. Some of our best-reviewed moves happen in January and February." },
  { q: "Do I need to empty dresser drawers before the move?", a: "For local Ottawa moves, you can leave lightweight items (clothes, linens) in dresser drawers — we'll wrap and move the dresser as-is. Remove heavy or fragile items like books, tools, or breakables. We'll advise on your specific situation when you book." },
  { q: "Do you move pianos and other specialty items?", a: "Yes. We move upright and grand pianos, gun safes, large aquariums, hot tubs, antique furniture, and other specialty items. These require advance notice and may require specialized equipment or extra crew members. Mention specialty items when booking so we can prepare the right equipment." },
  { q: "Are my belongings insured during an Ottawa move?", a: "Yes. All moves include basic valuation coverage. We also offer enhanced full-replacement value protection for an additional fee — recommended for high-value furniture, electronics, and specialty items. Our coordinator will explain coverage options when you book." },
  { q: "Do you offer packing services in Ottawa?", a: "Yes. Full-service packing is available as an add-on. Our packing team uses professional-grade materials: double-wall boxes, dish packs, wardrobe boxes, and specialty wrap for fragile items. We can pack your entire home the day before your move or on moving day itself." },
  { q: "What areas in Ottawa do you service?", a: "We service all Ottawa neighbourhoods and surrounding communities: Kanata, Barrhaven, Orleans, Gloucester, Nepean, Vanier, Westboro, The Glebe, Old Ottawa South, Alta Vista, Manotick, Stittsville, Richmond, and all areas within the Ottawa–Gatineau region." },
  { q: "What should I do to prepare for moving day?", a: "Two to three days before your move: confirm elevator bookings and parking permits for condo buildings, label all boxes by destination room, disassemble any flat-pack furniture you prefer to move flat, separate items going to storage or donation, and set aside an overnight bag with essentials. Your Prestige coordinator will send a detailed pre-move checklist 48 hours before your date." },
  { q: "Can you move a piano in Ottawa?", a: "Yes. We are experienced piano movers in Ottawa. Upright pianos, baby grand pianos, and digital pianos are all within our capability. Grand pianos require specialized equipment and extra crew. Piano moving requires advance notice so we can bring the right equipment — dolly, skid board, padding, and sufficient crew size. Call us to discuss your specific piano type." },
];

const NEIGHBOURHOODS = [
  "Kanata", "Barrhaven", "Orleans", "Gloucester", "Nepean", "Vanier",
  "Westboro", "Hintonburg", "The Glebe", "Old Ottawa South", "Alta Vista",
  "Hunt Club", "Riverside South", "Stittsville", "Richmond", "Manotick",
  "Rockcliffe Park", "Manor Park", "Sandy Hill", "Lowertown", "Centretown",
  "Byward Market", "New Edinburgh", "Overbrook", "Carson Meadows", "Blackburn Hamlet"
];

const CHECKLIST = [
  { time: "6 Weeks Before", items: ["Book your moving date with Prestige Moving", "Confirm possession date with your lawyer or realtor", "Book elevator time in your current/new condo building", "Start decluttering — donate, sell, or discard unused items"] },
  { time: "4 Weeks Before", items: ["Notify Canada Post of address change", "Update your address with Service Canada, CRA, bank, insurance", "Order packing supplies or book Prestige packing service", "Book storage unit if needed for transition period"] },
  { time: "2 Weeks Before", items: ["Pack non-essentials (books, seasonal items, decor)", "Label every box with room name and brief contents", "Arrange parking permits and building permissions", "Confirm move details with your Prestige coordinator"] },
  { time: "Moving Day", items: ["Keep valuables and important documents with you", "Do a final walkthrough of every room, closet, and storage area", "Take meter readings (water, gas, electric)", "Sign off on delivery and review placement with crew"] },
];

export default function ResidentialMoving() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"services" | "process">("services");

  return (
    <>
      <Helmet>
        <title>Residential Movers Ottawa | Home Moving Services | Prestige Moving</title>
        <meta name="description" content="Ottawa's top-rated residential movers. Professional home moving services for apartments, condos, and houses across Ottawa. 5.0★, 400+ reviews. Call (613) 600-4000 for a free quote." />
        <meta name="keywords" content="residential movers Ottawa, home movers Ottawa, moving companies Ottawa, apartment movers Ottawa, house movers Ottawa, local movers Ottawa, Ottawa movers, best movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/services/residential-moving" />
        <meta property="og:title" content="Residential Movers Ottawa | Prestige Moving — 5.0★, 400+ Reviews" />
        <meta property="og:description" content="Professional residential moving in Ottawa. Full home moves, packing, furniture assembly, appliances. Starting at $155/hr. Book online or call (613) 600-4000." />
        <meta property="og:image" content="https://prestigemoving.ca/og-residential-moving.jpg" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Ottawa Movers", "item": "https://prestigemoving.ca" }, { "@type": "ListItem", "position": 2, "name": "Residential Movers Ottawa", "item": "https://prestigemoving.ca/services/residential-moving" }] })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Residential Movers Ottawa", "serviceType": "Residential Moving Services", "description": "Professional residential moving services in Ottawa for apartments, condos, townhouses, and family homes. Full packing, furniture assembly, and appliance moving included.", "provider": { "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "telephone": "(613) 600-4000", "url": "https://prestigemoving.ca", "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } }, "areaServed": { "@type": "City", "name": "Ottawa" }, "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Residential Moving Packages", "itemListElement": [{ "@type": "Offer", "name": "Premium Package — 2 Movers + Truck" }, { "@type": "Offer", "name": "Deluxe Package — 3 Movers + Truck" }, { "@type": "Offer", "name": "Diamond Package — 4+ Movers + Truck" }] } })}</script>
      </Helmet>

      <SharedNavigation />

      {/* ── Hero ── */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={residentialHeroImg} alt="Professional movers carrying furniture into an Ottawa home" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/96 via-[#1A2332]/82 to-[#1A2332]/30" />
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
              {["Free Quote — Call (613) 600-4000", "3-Hour Minimum", "Packing Available", "Same-Week Dates"].map(t => (
                <div key={t} className="flex items-center gap-1.5 text-white/75 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold text-base px-6">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
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

      {/* ── Main Content with TOC ── */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12 items-start">
            <TableOfContents items={TOC_ITEMS} />

            <div className="min-w-0 flex-1 space-y-16">

              {/* ── Overview ── */}
              <section id="overview">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-4">Residential Moving Services in Ottawa</h2>
                <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p>Moving your home is one of the most significant events in your life — and in Ottawa's busy housing market, it's also one of the most logistically demanding. Whether you're relocating from a downtown Centretown condo to a Barrhaven new build, moving a family home in Kanata to make room for a growing household in Orleans, or starting fresh in a Sandy Hill apartment, Prestige Moving has the crew, equipment, and Ottawa-specific expertise to execute your move without damage, delays, or unwanted surprises.</p>
                  <p>Since 2015, we've moved over 15,000 Ottawa homes. Our 400+ five-star Google reviews — the most of any locally owned Ottawa moving company — reflect a consistent commitment to protection, punctuality, and professionalism that large national van lines simply can't match. We're Ottawa's movers, moving Ottawa families.</p>
                  <p>Our residential moving service covers every aspect of your home relocation: loading and unloading, furniture disassembly and reassembly, appliance moving, packing and unpacking, and careful room-by-room placement in your new home. We carry $2M commercial liability insurance and full WSIB coverage on every crew member — something you should require from any mover before they enter your home.</p>
                </div>
              </section>

              {/* ── Services Tabs ── */}
              <section id="services">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#1A2332] mb-3">What Our Residential Moving Service Includes</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">Everything you need for a complete home move in Ottawa — from studio apartments to estate homes.</p>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="inline-flex bg-white border border-gray-200 rounded-xl p-1 gap-1">
                    {(["services", "process"] as const).map(tab => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${activeTab === tab ? "bg-[#1A2332] text-white" : "text-gray-600 hover-elevate"}`}
                      >
                        {tab === "services" ? "Included Services" : "How It Works"}
                      </button>
                    ))}
                  </div>
                </div>
                {activeTab === "services" && (
                  <div className="grid sm:grid-cols-2 gap-4">
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
                )}
              </section>

              {/* ── Types of Moves ── */}
              <section id="types-of-moves">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Types of Residential Moves in Ottawa</h2>

                {/* Apartments & Condos */}
                <div className="mb-8 bg-white rounded-2xl border border-gray-100 p-7">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center shrink-0">
                      <Building2 className="h-5 w-5 text-[#C5A572]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A2332] mt-1">Apartment & Condo Moving in Ottawa</h3>
                  </div>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <p>Ottawa's condominium market has expanded dramatically in neighbourhoods like Centretown, Little Italy, Westboro, and the Byward Market. Moving in and out of Ottawa condo buildings requires careful coordination with building management — elevator reservations (typically required 72+ hours in advance), insurance certificates naming the building as additional insured, approved parking zones for moving trucks, and mandated floor protection in lobbies and elevators.</p>
                    <p>Our team handles all of this pre-move coordination as a standard part of your service — not an extra charge. We carry current WSIB and $2M liability certificates that satisfy the insurance requirements of every major Ottawa condo corporation. Our movers use professional floor runners, elevator blankets, and doorframe protectors as standard practice on every condo move.</p>
                    <p>For high-rise buildings with limited elevator windows, our crew plans systematically to make the most of your reserved time. We've moved clients in Claridge, Richcraft, Mastercraft, and every major Ottawa condo brand — we know exactly what each building requires before we arrive.</p>
                  </div>
                </div>

                {/* Family Homes */}
                <div className="mb-8 bg-white rounded-2xl border border-gray-100 p-7">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center shrink-0">
                      <Home className="h-5 w-5 text-[#C5A572]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A2332] mt-1">Family Home Moves in Ottawa's Suburbs</h3>
                  </div>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <p>Moving a family home in Kanata, Barrhaven, Orleans, Stittsville, or other Ottawa suburbs is a different animal than a condo move. Larger volumes, more furniture disassembly and reassembly, coordinated timing around mortgage possession dates and school calendars, and often long driveways or rural road access all add complexity that inexperienced crews aren't equipped for.</p>
                    <p>Our Deluxe (3 movers) and Diamond (4+ movers) packages are purpose-built for family home moves. Larger crews work faster, meaning your move costs less overall even at the same hourly rate. A 4-bedroom home in Barrhaven that might take a 2-person crew 12 hours can typically be completed by our 4-person Diamond crew in 7–9 hours — saving you money while protecting your belongings better.</p>
                    <p>We coordinate possession dates with your realtor or lawyer to ensure same-day moves run smoothly, including timing our arrival at the new property after your keys are confirmed ready. We've executed hundreds of same-day possession moves in Ottawa — we know how to handle the timing without adding stress to your closing day.</p>
                  </div>
                </div>

                {/* Senior Moves */}
                <div className="mb-8 bg-white rounded-2xl border border-gray-100 p-7">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center shrink-0">
                      <Heart className="h-5 w-5 text-[#C5A572]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A2332] mt-1">Senior Moving Services in Ottawa</h3>
                  </div>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <p>Moving a senior family member — whether downsizing from a longtime family home or transitioning to a retirement community — requires extra patience, care, and consideration that goes beyond physical moving. Our crew understands the emotional significance of every piece being moved, takes extra time with seniors who want to be involved in placement decisions, and works at a pace that respects the situation rather than rushing to close out billable hours.</p>
                    <p>We assist with downsizing logistics — working with family members on what items are going to the new home, what's going to family members, what's being donated, and coordinating with donation pickup services. For moves to retirement residences and senior living facilities in Ottawa (The Redwoods, The Glebe Centre, Hillel Lodge, and others), we're familiar with each building's moving protocols and access requirements.</p>
                  </div>
                </div>

                {/* Student Moves */}
                <div className="bg-white rounded-2xl border border-gray-100 p-7">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center shrink-0">
                      <Users className="h-5 w-5 text-[#C5A572]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A2332] mt-1">Student & Small Moves in Ottawa</h3>
                  </div>
                  <div className="text-gray-700 leading-relaxed space-y-3">
                    <p>University of Ottawa and Carleton University move-in and move-out season (late August and April/May) is among Ottawa's busiest moving periods. Sandy Hill, Centretown, and Hintonburg apartments see massive turnover in these windows. Our Premium 2-mover package is sized exactly for student apartment moves — efficient, affordable, and professional.</p>
                    <p>We don't run smaller moves like an afterthought. A 1-bedroom Sandy Hill apartment gets the same blanket-wrapped furniture, protected floors, and professional crew as a Rockcliffe Park estate. Our 3-hour minimum for all moves is an industry standard — and we typically complete student apartment moves well within that window.</p>
                  </div>
                </div>
              </section>

              {/* ── Furniture Protection ── */}
              <section id="protecting-belongings">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">How We Protect Your Belongings</h2>
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img src={packingServicesImg} alt="Professional movers using padded moving blankets to protect furniture" className="w-full h-64 object-cover" />
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { title: "Moving Blankets on Every Piece", desc: "Every piece of furniture — sofas, dressers, headboards, dining tables — is wrapped in thick moving blankets before being moved. Nothing gets scratched, dinged, or bumped against a wall during transit." },
                    { title: "Stretch Wrap for Loose Items", desc: "Drawer fronts, cabinet doors, and loose components are wrapped with stretch film to prevent movement during loading. Keeps your furniture intact and prevents hardware loss." },
                    { title: "Floor Runners Throughout", desc: "Protective floor runners are laid from your front door through every corridor to protect hardwood, tile, and carpet from foot traffic, scratched floors, and equipment marks." },
                    { title: "Door & Wall Frame Protection", desc: "Foam corner guards and doorframe padding protect every exit point in your home. Corners are especially vulnerable during large furniture carries — we eliminate that risk entirely." },
                    { title: "Specialty Packing Materials", desc: "Dish packs with cell dividers, wardrobe boxes for hanging clothes, custom crating for artwork, and anti-vibration foam for electronics. We use the right material for every item type." },
                    { title: "Inventory Documentation", desc: "Our crew documents the condition of high-value items before moving them. Any pre-existing damage is noted so there's no dispute after delivery. Accountability from your home to your new one." },
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
                <div className="bg-[#1A2332] rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2 text-[#C5A572]">Our Zero Damage Commitment</h3>
                  <p className="text-white/80 text-sm leading-relaxed">We stand behind our work. In the rare event that damage occurs despite our protection measures, our claims process is fast, fair, and handled by our management team directly — not referred to a third-party insurance company. We carry $2M commercial liability insurance, and our enhanced full-replacement value protection upgrade is available for an additional premium on request.</p>
                </div>
              </section>

              {/* ── Pricing ── */}
              <section id="pricing">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#1A2332] mb-3">Ottawa Moving Packages & Pricing</h2>
                  <p className="text-gray-600 max-w-xl mx-auto">Transparent hourly pricing with no hidden fees. 3-hour minimum on all packages. Choose the crew size that matches your home size and timeline.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  {PACKAGES.map(pkg => (
                    <div key={pkg.name} className={`rounded-2xl border p-7 ${pkg.highlight ? "bg-[#1A2332] border-[#1A2332] text-white shadow-xl" : "bg-white border-gray-200"}`}>
                      {pkg.highlight && <div className="text-center mb-4"><Badge className="bg-[#C5A572]/20 text-[#C5A572] border-[#C5A572]/30 text-xs">Most Popular</Badge></div>}
                      <div className="text-center mb-6">
                        <h3 className={`text-xl font-black mb-2 ${pkg.highlight ? "text-white" : "text-[#1A2332]"}`}>{pkg.name}</h3>
                        <a href="tel:6136004000" className="relative inline-flex items-center gap-1.5 bg-gray-100 rounded-lg px-3 py-1.5 mb-2 overflow-hidden mx-auto cursor-pointer">
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
                            <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#C5A572]" />
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
              </section>

              {/* ── Ottawa Moving Guide ── */}
              <section id="ottawa-neighbourhoods-guide">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Ottawa Neighbourhood Moving Guide</h2>

                <div className="rounded-2xl overflow-hidden mb-6">
                  <img src={residentialTruckImg} alt="Prestige Moving truck parked outside an Ottawa residential home" className="w-full h-64 object-cover" />
                </div>

                <div className="space-y-5 text-gray-700 leading-relaxed">
                  <p>Ottawa's geography, building stock, and neighbourhoods each present unique challenges for residential moving. Understanding these challenges before moving day — not discovering them on the day — is what separates professional Ottawa movers from casual operators.</p>

                  <h3 className="text-xl font-bold text-[#1A2332] mt-4">Moving in Ottawa's Downtown Core</h3>
                  <p>Centretown, Byward Market, Sandy Hill, and Lowertown are Ottawa's densest residential neighbourhoods. Parking is the primary challenge — on-street residential parking is limited, and many downtown Ottawa streets require temporary no-parking permits for moving day. We apply for these permits as part of your move at no extra charge, typically 5–7 business days before your move date. Downtown buildings, including walk-ups and older converted homes, often have narrow stairways that require furniture to be tilted, rotated, or partially disassembled to navigate. Our crew identifies these challenges during a pre-move site visit for larger jobs.</p>

                  <h3 className="text-xl font-bold text-[#1A2332] mt-4">Moving in Ottawa's Western Suburbs (Kanata, Stittsville, Richmond)</h3>
                  <p>Kanata, Ottawa's fastest-growing suburb and home to the city's technology sector, has seen enormous residential growth over the past decade. New-build neighbourhoods like Morgan's Grant, Beaverbrook, and Bridlewood have standardized layouts that make coordinated moves efficient. However, moving during Kanata's peak periods (long weekends, July 1st period) can create significant traffic challenges along Highway 417. We plan Kanata routes carefully and time departure from origin to avoid peak traffic windows.</p>

                  <h3 className="text-xl font-bold text-[#1A2332] mt-4">Moving in Ottawa's South End (Barrhaven, Nepean, Hunt Club)</h3>
                  <p>Barrhaven has become one of Ottawa's largest suburban communities, with a mix of single-family homes, townhouses, and new-build developments. Half Moon Bay, Stonebridge, and Longfields are particularly active moving destinations as young families seek newer, larger homes with proximity to good schools and Highway 416. Nepean and Hunt Club offer a mix of older established homes and newer developments, with access typically excellent for large moving trucks.</p>

                  <h3 className="text-xl font-bold text-[#1A2332] mt-4">Moving in Ottawa's East End (Orleans, Gloucester, Blackburn Hamlet)</h3>
                  <p>Orleans is Ottawa's largest suburban francophone community, with strong demand for residential moving services particularly around the summer period. Chaperal, Queenswood Heights, and Fallingbrook are active moving destinations. Gloucester's mix of high-rise apartments near the Gloucester Centre and single-family homes in South Keys and Heron Gate creates diverse moving scenarios. We serve all areas east of the Rideau River to the Quebec border.</p>
                </div>
              </section>

              {/* ── Moving Season ── */}
              <section id="moving-season">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Ottawa Moving Season & Best Time to Move</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { season: "Summer (May–August)", label: "Peak Season", desc: "Ottawa's busiest moving period. University student turnover, family home purchases, and government posting changes converge. Book 4–6 weeks ahead. Rates may be higher, but we maintain full service levels throughout summer.", color: "bg-orange-50 border-orange-200" },
                    { season: "Fall (September–October)", label: "Great Time to Move", desc: "Weather is comfortable, traffic is manageable after summer rush, and availability opens up considerably after September 1st. Excellent window for family home moves. Book 2–3 weeks ahead.", color: "bg-green-50 border-green-200" },
                    { season: "Winter (November–March)", label: "Best Availability & Often Lower Rates", desc: "Ottawa winters require extra care — floor protection, ice-grip footwear, extra padding for cold-sensitive items — but winter moves are often faster (less traffic) and easier to book on short notice. Some of our best-reviewed moves are winter moves.", color: "bg-blue-50 border-blue-200" },
                    { season: "Spring (April)", label: "Shoulder Season", desc: "Pre-summer demand begins to build in April. Good availability early in the month, tightening by late April. Excellent time for moves before summer pricing kicks in. Book 2–3 weeks ahead for most dates.", color: "bg-yellow-50 border-yellow-200" },
                  ].map(item => (
                    <div key={item.season} className={`rounded-xl border p-5 ${item.color}`}>
                      <div className="text-xs font-semibold text-gray-500 mb-1">{item.label}</div>
                      <h3 className="font-bold text-[#1A2332] mb-2">{item.season}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm leading-relaxed"><strong className="text-[#1A2332]">Ottawa Moving Tip:</strong> The busiest single moving day in Ottawa is July 1st — Canada Day — which also happens to be the most common lease changeover date in Quebec (affecting Gatineau moves and cross-border Ottawa relocations). If your move date falls anywhere near July 1st, book as early as possible — some dates are booked 8+ weeks out.</p>
                  </div>
                </div>
              </section>

              {/* ── Process ── */}
              <section id="process">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">How Our Residential Moving Process Works</h2>
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

              {/* ── Moving Checklist ── */}
              <section id="checklist">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Ottawa Moving Checklist</h2>
                <p className="text-gray-600 mb-6">Use this timeline to stay organized leading up to your Ottawa move. Your Prestige coordinator will also send a customized version when you book.</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {CHECKLIST.map(({ time, items }) => (
                    <div key={time} className="bg-white rounded-xl border border-gray-100 p-6">
                      <div className="inline-block bg-[#C5A572]/10 text-[#C5A572] text-xs font-bold rounded-lg px-3 py-1 mb-4">{time}</div>
                      <ul className="space-y-2">
                        {items.map(item => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── FAQ ── */}
              <section id="faq">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Frequently Asked Questions — Ottawa Residential Moving</h2>
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

              {/* ── Service Areas ── */}
              <section id="service-areas">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-4">Ottawa Neighbourhoods We Serve</h2>
                <p className="text-gray-600 mb-6">We move throughout Ottawa and surrounding communities. Wherever your move starts or ends, we cover it.</p>
                <div className="flex flex-wrap gap-2">
                  {NEIGHBOURHOODS.map(n => (
                    <span key={n} className="bg-white border border-gray-200 text-gray-700 rounded-lg px-3 py-1.5 text-sm font-medium flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#C5A572]" />{n}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">Not listed? We likely serve your area. Call (613) 600-4000 to confirm coverage.</p>
                <div className="mt-6 text-sm text-gray-600 leading-relaxed space-y-2">
                  <p>For neighbourhood-specific moving information, visit our dedicated pages: <Link href="/kanata-movers" className="text-[#C5A572] hover:underline">Kanata movers</Link>, <Link href="/barrhaven-movers" className="text-[#C5A572] hover:underline">Barrhaven movers</Link>, <Link href="/orleans-movers" className="text-[#C5A572] hover:underline">Orleans movers</Link>, <Link href="/nepean-movers" className="text-[#C5A572] hover:underline">Nepean movers</Link>, <Link href="/gloucester-movers" className="text-[#C5A572] hover:underline">Gloucester movers</Link>, and <Link href="/westboro-movers" className="text-[#C5A572] hover:underline">Westboro movers</Link>.</p>
                  <p>Also see our specialty services: <Link href="/furniture-movers-ottawa" className="text-[#C5A572] hover:underline">furniture movers Ottawa</Link>, <Link href="/apartment-movers-ottawa" className="text-[#C5A572] hover:underline">apartment movers Ottawa</Link>, <Link href="/senior-movers-ottawa" className="text-[#C5A572] hover:underline">senior movers Ottawa</Link>, and <Link href="/packing-services-ottawa" className="text-[#C5A572] hover:underline">packing services Ottawa</Link>.</p>
                </div>
              </section>

              {/* ── Reviews ── */}
              <section id="reviews">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-2">What Ottawa Homeowners Say</h2>
                <p className="text-gray-500 text-sm mb-6">5.0★ average · 400+ verified Google reviews from Ottawa</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: "Jennifer M.", loc: "Kanata → Barrhaven", review: "Used Prestige for our family home move from Kanata to Barrhaven. 4-bedroom house with a full basement. The crew of 4 was incredible — they had everything loaded, transported, and placed in our new home in 8 hours flat. Not a single scratch on anything. They even reassembled our IKEA beds before leaving. 10/10 would use again and have recommended to three friends already." },
                    { name: "David L.", loc: "Centretown Condo Move", review: "Moving out of a 15th floor condo downtown Ottawa — I was dreading it. Prestige handled everything: elevator booking, parking permits, floor protection, the works. The crew arrived on time, worked efficiently within our elevator window, and the job was done perfectly. They knew the building's requirements before I even had to ask." },
                    { name: "Sarah K.", loc: "Sandy Hill Apartment", review: "Student apartment move from Sandy Hill. The team was fast, professional, and careful with my furniture. They wrapped everything even though it was a small move. I didn't expect that level of care for a one-bedroom apartment. Competitive pricing and zero hassle. Will use for every move in Ottawa going forward." },
                    { name: "Robert & Linda T.", loc: "Orleans Family Home", review: "Third time using Prestige Moving. Every time is the same: professional crew, protected furniture, organized loading, and placement exactly where we want things. They moved our piano without any issue — I've heard horror stories from other movers. Prestige is the only company we'll use in Ottawa." },
                  ].map(r => (
                    <div key={r.name} className="bg-white rounded-xl border border-gray-100 p-6">
                      <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />)}</div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">"{r.review}"</p>
                      <div>
                        <div className="font-semibold text-[#1A2332] text-sm">{r.name}</div>
                        <div className="text-xs text-gray-500">{r.loc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>

      <SeoKeywordsSection currentPage="/services/residential-moving" />

      {/* ── CTA ── */}
      <section className="py-16 bg-[#1A2332]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-0.5 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-[#C5A572] fill-[#C5A572]" />)}</div>
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Move? Get Your Free Ottawa Moving Quote</h2>
          <p className="text-white/65 mb-8 max-w-lg mx-auto">400+ five-star reviews. Fully insured. No hidden fees. Ottawa's most trusted residential movers — book online or call for an instant quote.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Book Your Move <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
            <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
