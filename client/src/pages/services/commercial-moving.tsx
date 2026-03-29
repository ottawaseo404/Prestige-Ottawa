import React, { useState } from "react";
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
  Building2, Package, Star, ChevronDown, Truck, Users,
  Monitor, Server, Archive, Zap, Calendar, Award, Lock, FileText, Info
} from "lucide-react";
import commercialHeroImg from "@assets/generated_images/commercial_moving_hero.png";
import commercialOfficeImg from "@assets/generated_images/commercial_office_movers_working.png";
import commercialSetupImg from "@assets/generated_images/commercial_office_setup_complete.png";

const TOC_ITEMS = [
  { id: "overview", title: "Commercial Moving Overview" },
  { id: "industries", title: "Industries We Serve" },
  { id: "why-choose", title: "Why Choose Prestige" },
  { id: "process", title: "Our Process" },
  { id: "it-moving", title: "IT & Server Relocation" },
  { id: "government-moving", title: "Government Moves" },
  { id: "planning-timeline", title: "Planning Timeline" },
  { id: "after-hours", title: "After-Hours Moves" },
  { id: "insurance", title: "Insurance & Compliance" },
  { id: "faq", title: "FAQ" },
  { id: "service-areas", title: "Service Areas" },
  { id: "reviews", title: "Client Reviews" },
];

const INDUSTRIES = [
  {
    id: "office",
    label: "Office & Corporate",
    desc: "Full office relocations for businesses of all sizes. Workstations, boardroom furniture, filing systems, reception areas, storage rooms. Weekend and overnight moves available to minimize business disruption.",
    services: ["Workstation disassembly & reassembly", "Modular furniture systems (Herman Miller, Steelcase)", "Boardroom & reception areas", "Filing cabinets & document storage", "Server room coordination", "After-hours & weekend moves"],
  },
  {
    id: "government",
    label: "Government & Federal",
    desc: "Ottawa's unique position as the national capital means we have extensive experience moving federal government departments, Crown corporations, and national associations with the security and documentation requirements these moves entail.",
    services: ["Security clearance coordination", "Chain-of-custody documentation", "Classified document handling protocols", "DND & federal ministry moves", "Crown corporation relocations", "National association headquarters"],
  },
  {
    id: "medical",
    label: "Medical & Healthcare",
    desc: "Medical offices, clinics, and healthcare facilities require specialized moving protocols — PHIPA-compliant handling of patient files, specialized equipment moving, and strict cleanliness standards throughout the move.",
    services: ["Medical equipment relocation", "PHIPA-compliant file handling", "Lab equipment & imaging machines", "Dental office moves", "Physiotherapy & rehabilitation clinics", "Sterile environment protocols"],
  },
  {
    id: "retail",
    label: "Retail & Commercial",
    desc: "Retail stores, restaurants, gyms, and commercial businesses require fast, coordinated moves that minimize days of closure. We plan with your team to execute the move over a weekend or holiday period.",
    services: ["Retail fixture & display moving", "Restaurant equipment relocation", "Gym & fitness equipment", "Point-of-sale system moves", "Commercial refrigeration", "Tight timeline execution"],
  },
];

const STEPS = [
  { num: "01", title: "Pre-Move Site Assessment", desc: "Our commercial moving coordinator visits both your current and new location, documents access points, elevator specifications, parking constraints, and any structural limitations. A detailed move plan is prepared before booking day." },
  { num: "02", title: "Inventory & Labelling System", desc: "We work with your office manager or move coordinator to create a comprehensive inventory and colour-coded labelling system. Every item — desk, chair, monitor stand, filing cabinet — is tagged and documented before moving day begins." },
  { num: "03", title: "IT Disconnection Protocol", desc: "Our team coordinates with your IT department (or vendor) for proper disconnection of all technology. Cables are labelled and bagged to the device they belong to. Server rooms are photographed before and after." },
  { num: "04", title: "After-Hours or Weekend Move", desc: "Most commercial moves in Ottawa happen over evenings, weekends, or statutory holidays to minimize disruption. Our crew is available 7 days a week, including overnight shifts. We work around your operation's schedule, not ours." },
  { num: "05", title: "Set-Up & Operational Readiness", desc: "At the new location, furniture is placed according to your floor plan, workstations are assembled, and file systems are set up in the correct offices. We work until your office is move-in ready — not just unloaded." },
];

const WHY_CHOOSE = [
  { icon: Clock, title: "Minimal Business Downtime", desc: "After-hours, overnight, and weekend moves mean your business is fully operational the next business day. We build move timelines around your operating hours." },
  { icon: Shield, title: "$5M Commercial Liability", desc: "All commercial moves carry $5M commercial general liability insurance. Certificate of insurance issued to building management and property owners before move day." },
  { icon: Users, title: "Dedicated Move Coordinator", desc: "Every commercial move gets a dedicated coordinator — your single point of contact from quote to completion. No bouncing between departments." },
  { icon: Monitor, title: "IT Equipment Expertise", desc: "Computers, monitors, servers, networking equipment — all handled with anti-static protocols, proper padding, and cable management documentation." },
  { icon: Server, title: "Server Room Relocation", desc: "Full server room relocations with coordination of power-down sequences, rack photography, cable documentation, and coordination with your IT team or vendor." },
  { icon: Archive, title: "Document & Records Moving", desc: "Locked file cabinets moved sealed. Confidential document handling with chain-of-custody documentation for regulated industries (legal, medical, government)." },
  { icon: Calendar, title: "Flexible Scheduling", desc: "Evening starts, overnight moves, multi-phase relocations over several weekends. We build the schedule around your business, not the other way around." },
  { icon: Award, title: "Ottawa's #1 Commercial Mover", desc: "Trusted by law firms, tech companies, federal departments, and healthcare organizations across Ottawa. 5.0★ across 400+ Google reviews." },
];

const FAQS: { q: string; a: React.ReactNode }[] = [
  { q: "How much does commercial moving in Ottawa cost?", a: "Commercial moving costs in Ottawa are quoted based on the scope of work: number of employees, volume of furniture and equipment, distance, and hours required. We provide detailed written quotes after a site assessment — not ballpark estimates that change on moving day. Most medium-sized Ottawa office moves (20–50 employees) run $5,000–$15,000 for a weekend move." },
  { q: "How do you minimize business disruption during an office move?", a: "We specialize in after-hours, overnight, and weekend commercial moves in Ottawa. The typical commercial move timeline: Friday evening load-out, overnight transit or staging, Saturday delivery and setup, Monday morning your team walks into a fully operational office. We coordinate with building management for after-hours elevator access and parking." },
  { q: "Can you handle server room and IT equipment moves?", a: "Yes. We work with your IT team or vendor on server room relocation. This includes photographing rack configurations before disconnection, cable labelling and management, anti-static packing for equipment, climate-controlled transport, and coordination with your IT team for proper power-down and startup sequences." },
  { q: "Do you have experience moving federal government departments in Ottawa?", a: <span>Yes. Ottawa's status as the national capital means we have extensive experience with <Link href="/federal-government-movers-ottawa" className="text-[#C5A572] hover:underline">federal government moves in Ottawa</Link> — Treasury Board guidelines, security clearance coordination, classified document handling protocols, and the documentation requirements of federal facility managers. We've moved multiple federal departments and Crown corporations.</span> },
  { q: "What insurance do you carry for commercial moves?", a: "All commercial moves are covered by $5M commercial general liability insurance and full WSIB coverage for all workers on site. We provide certificates of insurance to building management and property owners before move day. Additional coverage can be arranged for high-value equipment." },
  { q: "Can you move medical equipment and clinical offices?", a: "Yes. Medical office and clinical moves require specialized protocols — PHIPA-compliant handling of patient files, medical equipment moving expertise, sterile environment standards, and coordination with equipment vendors for calibration after relocation. We serve medical offices, dental practices, physiotherapy clinics, and allied health providers across Ottawa." },
  { q: "Do you move businesses from Ottawa to other cities?", a: <span>Yes. We offer <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">commercial long-distance moving from Ottawa</Link> — office relocations to <Link href="/ottawa-to-toronto-movers" className="text-[#C5A572] hover:underline">Toronto</Link>, <Link href="/ottawa-to-montreal-movers" className="text-[#C5A572] hover:underline">Montreal</Link>, <Link href="/ottawa-to-vancouver-movers" className="text-[#C5A572] hover:underline">Vancouver</Link>, <Link href="/ottawa-to-calgary-movers" className="text-[#C5A572] hover:underline">Calgary</Link>, and other Canadian cities. Commercial long-distance moves are quoted on a project basis after a site assessment.</span> },
  { q: "How far in advance should we book a commercial move?", a: "For large office moves (50+ employees), we recommend 4–8 weeks of advance planning. For smaller businesses (under 20 employees), 2–3 weeks is typically sufficient. Summer and end-of-month dates book quickly. Complex moves involving server rooms, medical equipment, or multi-phase relocations benefit from 6–8 weeks of planning regardless of business size." },
  { q: "Do you provide a written quote for commercial moves?", a: "Always. We never provide verbal estimates that can change on moving day. After our site assessment, you receive a detailed written quote breaking down crew size, estimated hours, any specialized equipment required, and all fees. No surprises on invoice day." },
  { q: "Can you handle modular furniture disassembly and reassembly?", a: <span>Yes. We are experienced with all major modular office furniture systems including Herman Miller, Steelcase, Knoll, Teknion, and Haworth. Our crew disassembles workstations, labels components, transports them safely, and fully reassembles at the new location according to your floor plan. See our <Link href="/furniture-movers-ottawa" className="text-[#C5A572] hover:underline">furniture movers Ottawa</Link> page for more on how we handle large and modular pieces.</span> },
];

export default function CommercialMoving() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <>
      <Helmet>
        <title>Commercial Movers Ottawa | Office & Business Moving | Prestige Moving</title>
        <meta name="description" content="Ottawa's top-rated commercial movers. Office relocations, government moves, medical office moving, IT equipment. After-hours & weekend moves. $5M insured. Call (613) 600-4000." />
        <meta name="keywords" content="commercial movers Ottawa, office movers Ottawa, business moving Ottawa, office relocation Ottawa, commercial moving company Ottawa, government movers Ottawa, IT relocation Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/services/commercial-moving" />
        <meta property="og:title" content="Commercial Movers Ottawa | Office Moving Experts | Prestige Moving" />
        <meta property="og:description" content="Ottawa commercial moving — offices, federal government, medical, retail. After-hours moves, $5M insured, dedicated coordinator. Book a site assessment today." />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Ottawa Movers", "item": "https://prestigemoving.ca" }, { "@type": "ListItem", "position": 2, "name": "Commercial Movers Ottawa", "item": "https://prestigemoving.ca/services/commercial-moving" }] })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Commercial Movers Ottawa", "serviceType": "Commercial Moving Services", "description": "Professional commercial moving in Ottawa for offices, federal government, medical facilities, retail, and technology companies. After-hours and weekend moves, $5M liability insurance.", "provider": { "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "telephone": "(613) 600-4000", "url": "https://prestigemoving.ca", "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } }, "areaServed": { "@type": "City", "name": "Ottawa" } })}</script>
      </Helmet>

      <SharedNavigation />

      {/* ── Hero ── */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/commercial-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#1A2332]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/60 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {["After-Hours Moves", "$5M Insured", "Dedicated Coordinator", "Zero Downtime"].map(t => (
                <Badge key={t} className="bg-[#C5A572]/20 text-[#C5A572] border border-[#C5A572]/30 text-xs font-semibold">{t}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
              Ottawa's Commercial<br />
              <span className="text-[#C5A572]">Moving Experts</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Office relocations, government department moves, medical offices, retail, and tech companies. After-hours and weekend scheduling. Your team walks into a fully operational office Monday morning. Trusted by Ottawa's biggest employers — <Link href="/" className="text-[#C5A572] hover:underline">Ottawa's top-rated moving company</Link>.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {["5.0★ — 400+ Reviews", "$5M Liability Insurance", "WSIB Certified", "Weekend & Overnight Available"].map(t => (
                <div key={t} className="flex items-center gap-1.5 text-white/75 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" /><span>{t}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold text-base px-6">Request Site Assessment <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10 text-base px-6"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["$5M Commercial Liability", "WSIB Certified Crew", "After-Hours & Weekend Moves", "Dedicated Move Coordinator", "IT Equipment Specialists"].map(t => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" />{t}</span>
          ))}
        </div>
      </div>

      {/* ── Stats row ── */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "500+", label: "Ottawa Businesses Moved" },
              { num: "$5M", label: "Commercial Liability Coverage" },
              { num: "24/7", label: "Scheduling Availability" },
              { num: "5.0★", label: "Google Rating" },
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
                <h2 className="text-2xl font-bold text-[#1A2332] mb-4">Commercial Moving in Ottawa — What You Need to Know</h2>
                <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p>Commercial moving in Ottawa is fundamentally different from <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving</Link> — it's a project with business continuity at stake, stakeholders to satisfy, and zero tolerance for mistakes. An Ottawa business that's down for two days because of a poorly executed office move loses revenue, damages client relationships, and erodes employee morale. The <Link href="/best-movers-ottawa" className="text-[#C5A572] hover:underline">best commercial movers in Ottawa</Link> understand this, and plan accordingly.</p>
                  <p>Prestige Moving has executed over 500 commercial relocations across Ottawa — from 5-person startup offices in <Link href="/commercial-movers-kanata" className="text-[#C5A572] hover:underline">Kanata North</Link> to multi-floor <Link href="/federal-government-movers-ottawa" className="text-[#C5A572] hover:underline">federal government department relocations</Link> in downtown Ottawa's government campus. Our commercial moving division operates with dedicated project coordinators, specialized equipment for IT and server relocation, $5M commercial liability insurance, and a scheduling model built entirely around your business hours — not ours.</p>
                  <p>The difference between a good commercial move and a disastrous one is planning. Our commercial moves begin with a formal site assessment at both origin and destination, a documented inventory system, a coordinated IT disconnection protocol, and a detailed timeline shared with all stakeholders before a single piece of furniture moves. On moving day, your dedicated coordinator is on site from start to finish — not reachable by phone from a dispatch office. Need to understand <Link href="/how-much-does-moving-cost-ottawa" className="text-[#C5A572] hover:underline">how much a commercial move in Ottawa costs</Link>? We break it down clearly.</p>
                </div>

                <div className="rounded-2xl overflow-hidden mt-6">
                  <img src={commercialOfficeImg} alt="Prestige Moving commercial crew carefully moving office equipment" className="w-full h-64 object-cover" />
                </div>
              </section>

              {/* ── Industries ── */}
              <section id="industries">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#1A2332] mb-3">Commercial Moving Services by Industry</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">Ottawa's diverse economy means each sector has unique moving requirements. Click your industry to see how we serve it.</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {INDUSTRIES.map((ind, i) => (
                    <button
                      key={ind.id}
                      onClick={() => setActiveIndustry(i)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${activeIndustry === i ? "bg-[#1A2332] text-white border-[#1A2332]" : "bg-white text-gray-700 border-gray-200 hover-elevate"}`}
                    >
                      {ind.label}
                    </button>
                  ))}
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider mb-2">{INDUSTRIES[activeIndustry].label}</div>
                      <h3 className="text-2xl font-bold text-[#1A2332] mb-3">{INDUSTRIES[activeIndustry].label} Moving in Ottawa</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{INDUSTRIES[activeIndustry].desc}</p>
                      <Link href="/book">
                        <Button className="bg-[#1A2332] text-white font-bold">Request Industry Quote <ArrowRight className="ml-2 h-4 w-4" /></Button>
                      </Link>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1A2332] mb-3">What's Included</div>
                      <div className="space-y-2">
                        {INDUSTRIES[activeIndustry].services.map(s => (
                          <div key={s} className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── Why Choose ── */}
              <section id="why-choose">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#1A2332] mb-3">Why Ottawa Businesses Choose Prestige Moving</h2>
                  <p className="text-gray-600 max-w-xl mx-auto">Commercial moving isn't just a bigger version of a home move. It's a project with stakeholders, timelines, and zero tolerance for mistakes.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {WHY_CHOOSE.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="bg-white rounded-xl border border-gray-100 p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-[#C5A572]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1A2332] text-sm mb-1">{title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Process ── */}
              <section id="process">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">How Our Commercial Moving Process Works</h2>
                <p className="text-gray-600 mb-6">Every commercial move is planned, documented, and executed as a project — not just loaded onto a truck and hoped for the best.</p>
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

              {/* ── IT Moving ── */}
              <section id="it-moving">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">IT Equipment & Server Room Relocation in Ottawa</h2>
                <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
                  <p>Ottawa's growing technology sector — particularly in <Link href="/commercial-movers-kanata" className="text-[#C5A572] hover:underline">Kanata North</Link>, home to Nokia, Shopify, and hundreds of tech startups — means IT equipment relocation is one of the most critical components of many commercial moves we handle. A botched server room move can mean hours or days of business downtime, data loss, or equipment failure. We treat IT relocation with the protocol it demands.</p>
                  <p>Our IT moving protocol begins weeks before moving day. We coordinate with your IT team (or external IT vendor) to document the existing server rack configuration — every server, switch, router, patch panel, and cable — through detailed photography and inventory sheets. This documentation becomes your before-and-after reference and protects against disputes about what was where.</p>
                  <p>On disconnection day, every cable is labelled to the device and port it connects to. Network cables, power cables, and fibre runs are coiled, labelled, and bagged to the specific rack unit they belong to. Servers and networking equipment are packed with anti-static materials — we don't use standard moving blankets for server equipment. <Link href="/services/specialty-item-moving" className="text-[#C5A572] hover:underline">Climate-controlled transport for specialty items</Link> is standard for all IT hardware.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Pre-Move Rack Photography", desc: "Full photographic documentation of every rack unit, cable, and port configuration before any disconnection begins. Your IT team reviews and approves before we touch anything." },
                    { title: "Cable Labelling System", desc: "Every cable labelled to its source and destination port. Nothing is guessed on reconnection day — every cable has a documented home." },
                    { title: "Anti-Static Packing", desc: "Server equipment, networking gear, and sensitive electronics packed in anti-static bags and foam — not moving blankets, which generate static charge." },
                    { title: "Climate-Controlled Transport", desc: "IT equipment travels in climate-controlled trucks. Temperature and humidity fluctuations during transit can damage sensitive electronic components." },
                    { title: "UPS and Power Coordination", desc: "Coordination with your facilities team for proper shutdown sequences, UPS battery disconnection, and power-on sequencing at the new location." },
                    { title: "IT Vendor Coordination", desc: "We coordinate with your IT vendor or managed service provider for proper shutdown and startup. Our crew follows your IT team's documented protocols, not our own." },
                  ].map(item => (
                    <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5">
                      <div className="flex items-start gap-3">
                        <Server className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-bold text-[#1A2332] text-sm mb-1">{item.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Government Moving ── */}
              <section id="government-moving">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Federal Government Moving in Ottawa</h2>
                <div className="rounded-2xl overflow-hidden mb-6">
                  <img src={commercialSetupImg} alt="Newly organized government office space after Prestige Moving relocation" className="w-full h-64 object-cover" />
                </div>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>No city in Canada has the volume and complexity of <Link href="/federal-government-movers-ottawa" className="text-[#C5A572] hover:underline">federal government office moves in Ottawa</Link> that Ottawa does. Department relocations, organizational restructurings, Government of Canada real estate portfolio consolidations, and end-of-lease moves happen continuously across the National Capital Region — involving hundreds of employees, classified materials, and facilities in secure buildings with specific access protocols.</p>
                  <p>Our experience with <Link href="/federal-government-movers-ottawa" className="text-[#C5A572] hover:underline">federal government moving in Ottawa</Link> includes Treasury Board Secretariat procurement guideline adherence, security clearance coordination for crew access to secure facilities, chain-of-custody documentation for sensitive materials and classified documents, coordination with Shared Services Canada for IT asset management, and compliance with National Capital Commission facility requirements for moves in federal heritage buildings.</p>
                  <p>We understand the documentation requirements, reporting structure, and approval processes that government facility managers require before and after a move. We've worked with departments across Public Services and Procurement Canada, National Defence, Agriculture Canada, Health Canada, and Crown corporations including CBC/Radio-Canada. <Link href="/law-firm-movers-ottawa" className="text-[#C5A572] hover:underline">Law firm office moves</Link> and regulated professional associations are also a major part of our Ottawa commercial portfolio. Past performance references available upon request.</p>
                  <div className="bg-[#1A2332]/5 border border-[#1A2332]/10 rounded-xl p-5 mt-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-[#1A2332] text-sm mb-1">Security Clearance Coordination</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">Crew members working in secure federal buildings undergo the required security screening process. We coordinate with your facility security officer well in advance of moving day to ensure all access requirements are satisfied before our team arrives on site.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── Planning Timeline ── */}
              <section id="planning-timeline">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Planning Your Ottawa Office Move — Timeline</h2>
                <p className="text-gray-600 mb-6">Successful commercial moves in Ottawa require planning well ahead of moving day. Use this general timeline as a starting point — your Prestige coordinator will build a customized version based on your specific situation.</p>
                <div className="space-y-4">
                  {[
                    { week: "8–12 Weeks Before", title: "Planning & Quoting", items: ["Book site assessment at origin and destination", "Receive detailed binding written quote", "Confirm move dates and scheduling window", "Begin employee communication about move timeline"] },
                    { week: "6–8 Weeks Before", title: "Coordination & Permits", items: ["Finalize floor plan for new location", "Book after-hours elevator and freight access at both buildings", "Arrange parking permits for moving vehicles", "Begin IT equipment documentation with your IT team"] },
                    { week: "4 Weeks Before", title: "Inventory & Labelling", items: ["Deploy colour-coded labelling system across office", "Complete IT rack documentation and cable inventory", "Coordinate file room and records management", "Confirm insurance certificates with building management"] },
                    { week: "2 Weeks Before", title: "Final Preparation", items: ["Employee packing instructions distributed", "IT disconnect coordination with IT vendor confirmed", "Security clearance verification for secure-access buildings", "Final crew and equipment confirmation from Prestige"] },
                    { week: "Moving Weekend", title: "Execution", items: ["Friday evening: load-out begins, systematic and documented", "Overnight: transport and staging if multi-location", "Saturday: delivery, setup, furniture placement per floor plan", "Sunday (if needed): final setup, IT reconnection, punch-list items"] },
                    { week: "Monday", title: "Business as Usual", items: ["Your team arrives to a fully operational office", "Workstations assembled and positioned per floor plan", "File systems in correct offices and departments", "Any outstanding items resolved same day by coordinator"] },
                  ].map(phase => (
                    <div key={phase.week} className="bg-white rounded-xl border border-gray-100 p-6">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0">
                          <div className="bg-[#C5A572]/10 text-[#C5A572] text-xs font-bold rounded-lg px-3 py-1.5 whitespace-nowrap">{phase.week}</div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-[#1A2332] mb-2">{phase.title}</h3>
                          <ul className="space-y-1">
                            {phase.items.map(item => (
                              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A572] shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── After Hours ── */}
              <section id="after-hours">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">After-Hours & Weekend Commercial Moving in Ottawa</h2>
                <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
                  <p>The defining feature of professional commercial moving in Ottawa is scheduling flexibility. No Ottawa business should have to close for a day or more just because their mover can only work business hours. Prestige Moving's commercial division is built for after-hours, overnight, and weekend moves — it's the default mode of operation for our commercial team, not an exception we grudgingly accommodate.</p>
                  <p>Our standard commercial move model for Ottawa offices: crews arrive Friday evening after your staff leaves (typically 6–7pm), execute a systematic load-out through the night, and begin delivery and setup at the new location Saturday morning. By Saturday afternoon or evening, the office is furnished, workstations are assembled, file systems are in the right offices, and your setup is ready for your IT team's reconnection work over the weekend. Monday morning, your team walks into a fully operational workspace.</p>
                  <p>For larger moves requiring multiple phases, we plan multi-weekend executions — moving department by department over sequential weekends so that your business never has more than a fraction of its capacity displaced at any one time.</p>
                </div>
                <div className="bg-[#1A2332] rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-xl text-[#C5A572] mb-3">The Prestige After-Hours Commitment</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {["Available 365 days/year including statutory holidays", "Overnight crew shifts with on-site supervision throughout", "Building management coordination for after-hours access", "No overtime premium for evening or weekend commercial moves", "Dedicated coordinator on site — not remote — for duration of move", "IT reconnection coordination available for Sunday setup"].map(item => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                        <span className="text-white/80 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── Insurance ── */}
              <section id="insurance">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Insurance & Compliance for Ottawa Commercial Moves</h2>
                <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
                  <p>Commercial moving in Ottawa involves multiple parties — your company, building management at origin and destination, and sometimes federal building security — all with specific insurance and compliance requirements that must be satisfied before moving day. Not satisfying these requirements can result in your move being blocked on the day, which is a catastrophic outcome for a scheduled overnight commercial move.</p>
                  <p>Our commercial insurance package covers every Ottawa commercial move automatically. We carry $5M commercial general liability insurance — the minimum required by most Ottawa Class A office buildings and federal facilities. WSIB coverage for all workers is current and certificates are available on request. We provide certificates of insurance naming your building management as additional insured, in whatever format your property manager requires, well in advance of moving day.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Shield, title: "$5M General Liability", desc: "Commercial general liability coverage satisfying the insurance requirements of all major Ottawa Class A office buildings, federal facilities, and most industrial properties." },
                    { icon: Users, title: "WSIB Coverage — All Workers", desc: "All crew members are fully covered under Ontario WSIB. Certificates available on request. Protects you from liability if a worker is injured on your commercial property." },
                    { icon: FileText, title: "Certificate of Insurance", desc: "Standard certificate of insurance naming building management as additional insured, in whatever format your property manager requires. Issued minimum 5 business days before your move." },
                    { icon: Lock, title: "Cargo & Equipment Coverage", desc: "Your office equipment and furniture is covered in transit. High-value equipment and electronics can be covered under enhanced valuation for an additional premium." },
                  ].map(item => (
                    <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center shrink-0">
                          <item.icon className="h-5 w-5 text-[#C5A572]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1A2332] text-sm mb-1">{item.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── FAQ ── */}
              <section id="faq">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">FAQ — Ottawa Commercial Moving</h2>
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
                <h2 className="text-2xl font-bold text-[#1A2332] mb-4">Ottawa Commercial Moving Service Areas</h2>
                <p className="text-gray-600 mb-6">We serve all commercial and industrial areas of Ottawa and the National Capital Region.</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { label: "Downtown Ottawa Core", href: "/commercial-movers-ottawa" },
                    { label: "Kanata North Tech Park", href: "/commercial-movers-kanata" },
                    { label: "Nepean Business Park", href: "/commercial-movers-nepean" },
                    { label: "Hunt Club / Walkley", href: null },
                    { label: "Gloucester / Innes", href: "/commercial-movers-gloucester" },
                    { label: "Vanier Industrial", href: null },
                    { label: "Orleans Commercial", href: "/commercial-movers-orleans" },
                    { label: "Bells Corners", href: null },
                    { label: "Carling / Westboro", href: "/commercial-movers-westboro" },
                    { label: "Bank Street Corridor", href: null },
                    { label: "Wellington West", href: "/commercial-movers-the-glebe" },
                    { label: "Sandy Hill", href: "/commercial-movers-sandy-hill" },
                    { label: "Stittsville", href: "/commercial-movers-stittsville" },
                    { label: "Manotick", href: "/commercial-movers-manotick" },
                    { label: "Gatineau (Quebec)", href: null },
                    { label: "Federal Government Campus", href: "/federal-government-movers-ottawa" },
                  ].map(({ label, href }) => href ? (
                    <Link key={label} href={href} className="bg-white border border-gray-200 text-[#C5A572] rounded-lg px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 hover:border-[#C5A572]/40 transition-colors">
                      <MapPin className="h-3.5 w-3.5 text-[#C5A572]" />{label}
                    </Link>
                  ) : (
                    <span key={label} className="bg-white border border-gray-200 text-gray-700 rounded-lg px-3 py-1.5 text-sm font-medium flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#C5A572]" />{label}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                  <p>For residential moving services in Ottawa, see our <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving</Link> page. For moves beyond Ottawa, see our <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">long distance moving</Link> page.</p>
                  <p>Specialty commercial services: <Link href="/furniture-movers-ottawa" className="text-[#C5A572] hover:underline">commercial furniture moving Ottawa</Link>, <Link href="/services/packing-services" className="text-[#C5A572] hover:underline">office packing services Ottawa</Link>, <Link href="/services/storage-solutions" className="text-[#C5A572] hover:underline">commercial storage Ottawa</Link>, <Link href="/law-firm-movers-ottawa" className="text-[#C5A572] hover:underline">law firm movers Ottawa</Link>, <Link href="/white-glove-movers-ottawa" className="text-[#C5A572] hover:underline">white glove moving Ottawa</Link>.</p>
                </div>
              </section>

              {/* ── Related Services Interlinks ── */}
              <section>
                <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Related Moving Services in Ottawa</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "Residential Moving Ottawa", desc: "Moving your home or family? See our full residential service.", href: "/services/residential-moving" },
                    { title: "Long Distance Moving", desc: "Ottawa office relocations to Toronto, Montreal, Vancouver, and beyond.", href: "/services/long-distance-moving" },
                    { title: "Packing Services Ottawa", desc: "Full professional packing for offices — fragile items, IT equipment, files.", href: "/services/packing-services" },
                    { title: "Storage Solutions Ottawa", desc: "Secure commercial storage between office phases or during renovations.", href: "/services/storage-solutions" },
                    { title: "Federal Government Movers", desc: "Specialized experience with federal department and Crown corporation moves.", href: "/federal-government-movers-ottawa" },
                    { title: "Law Firm Movers Ottawa", desc: "Confidential document handling and after-hours moves for Ottawa law firms.", href: "/law-firm-movers-ottawa" },
                    { title: "Furniture Movers Ottawa", desc: "Commercial furniture systems — Herman Miller, Steelcase, modular disassembly.", href: "/furniture-movers-ottawa" },
                    { title: "Specialty Item Moving", desc: "Server equipment, medical devices, heavy machinery, and high-value assets.", href: "/services/specialty-item-moving" },
                    { title: "White Glove Moving Ottawa", desc: "Premium handling for high-value offices, boardrooms, and executive suites.", href: "/white-glove-movers-ottawa" },
                    { title: "Same-Day Movers Ottawa", desc: "Urgent commercial moves handled same-day when time is critical.", href: "/same-day-movers-ottawa" },
                    { title: "Moving to Toronto", desc: "Ottawa office relocating to Toronto? We handle the full project.", href: "/ottawa-to-toronto-movers" },
                    { title: "Moving to Montreal", desc: "Ottawa to Montreal commercial relocation — bilingual coordination.", href: "/ottawa-to-montreal-movers" },
                  ].map(item => (
                    <Link key={item.title} href={item.href} className="bg-white rounded-xl border border-gray-100 p-5 hover:border-[#C5A572]/30 transition-colors group">
                      <div className="font-bold text-[#1A2332] text-sm mb-1 group-hover:text-[#C5A572] transition-colors">{item.title}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* ── Reviews ── */}
              <section id="reviews">
                <h2 className="text-2xl font-bold text-[#1A2332] mb-2">What Ottawa Businesses Say</h2>
                <p className="text-gray-500 text-sm mb-6">5.0★ average · Trusted by Ottawa law firms, tech companies, and government departments</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: "Sandra W.", org: "Ottawa Law Firm (85 employees)", review: "We moved our entire office over a long weekend. The Prestige crew started Friday at 6pm and by Sunday afternoon our new location was completely set up — workstations assembled, files in the right offices, reception area done. Our team walked in Monday morning to a fully operational office. Remarkable execution." },
                    { name: "Mark T., IT Manager", org: "Kanata Tech Company", review: "Moving our server room was the part I was dreading most. The Prestige coordinator spent time with our IT team beforehand to understand the sequence, photographed everything before disconnecting, and their crew followed our IT protocols exactly. Not one cable was unlabelled. This crew knew what they were doing." },
                    { name: "Dr. Sarah M.", org: "Ottawa Medical Clinic (Nepean)", review: "Medical office moves require a level of care and protocol that most movers simply don't have. Prestige understood PHIPA requirements, handled our patient file systems with proper chain-of-custody documentation, and coordinated with our equipment vendors. We were open for patients the following Monday." },
                    { name: "James R., Facilities Manager", org: "Federal Government Department", review: "Our department move involved secure access requirements, classified document handling, and coordination with Shared Services Canada for IT assets. Prestige navigated all of it without a single issue. Their coordinator was on site throughout and their documentation was thorough and professional." },
                  ].map(r => (
                    <div key={r.name} className="bg-white rounded-xl border border-gray-100 p-6">
                      <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />)}</div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">"{r.review}"</p>
                      <div>
                        <div className="font-semibold text-[#1A2332] text-sm">{r.name}</div>
                        <div className="text-xs text-gray-500">{r.org}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>

      <SeoKeywordsSection currentPage="/services/commercial-moving" />

      {/* ── CTA ── */}
      <section className="py-16 bg-[#1A2332]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-0.5 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-[#C5A572] fill-[#C5A572]" />)}</div>
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Plan Your Ottawa Office Move?</h2>
          <p className="text-white/65 mb-8 max-w-lg mx-auto">500+ Ottawa businesses moved. $5M insured. Dedicated coordinator for every move. Book a free site assessment — no obligation, binding written quote provided.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Request Site Assessment <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
            <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
