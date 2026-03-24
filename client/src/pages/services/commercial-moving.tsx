import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, Shield, Clock, MapPin,
  Building2, Package, Star, ChevronDown, Truck, Users,
  Monitor, Server, Archive, Zap, Calendar, Award
} from "lucide-react";
import commercialHeroImg from "@assets/generated_images/commercial_moving_hero.png";

const INDUSTRIES = [
  {
    id: "office",
    label: "Office & Corporate",
    desc: "Full office relocations for businesses of all sizes. Workstations, boardroom furniture, filing systems, reception areas, storage rooms. Weekend and overnight moves available to minimize business disruption.",
    services: ["Workstation disassembly & reassembly", "Modular furniture systems", "Boardroom & reception areas", "Filing cabinets & document storage", "Server room coordination", "After-hours & weekend moves"],
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

const FAQS = [
  { q: "How much does commercial moving in Ottawa cost?", a: "Commercial moving costs in Ottawa are quoted based on the scope of work: number of employees, volume of furniture and equipment, distance, and hours required. We provide detailed written quotes after a site assessment — not ballpark estimates that change on moving day. Most medium-sized Ottawa office moves (20–50 employees) run $5,000–$15,000 for a weekend move." },
  { q: "How do you minimize business disruption during an office move?", a: "We specialize in after-hours, overnight, and weekend commercial moves in Ottawa. The typical commercial move timeline: Friday evening load-out, overnight transit or staging, Saturday delivery and setup, Monday morning your team walks into a fully operational office. We coordinate with building management for after-hours elevator access and parking." },
  { q: "Can you handle server room and IT equipment moves?", a: "Yes. We work with your IT team or vendor on server room relocation. This includes photographing rack configurations before disconnection, cable labelling and management, anti-static packing for equipment, climate-controlled transport, and coordination with your IT team for proper power-down and startup sequences." },
  { q: "Do you have experience moving federal government departments in Ottawa?", a: "Yes. Ottawa's status as the national capital means we have extensive experience with federal government moves — Treasury Board guidelines, security clearance coordination, classified document handling protocols, and the documentation requirements of federal facility managers. We've moved multiple federal departments and Crown corporations." },
  { q: "What insurance do you carry for commercial moves?", a: "All commercial moves are covered by $5M commercial general liability insurance and full WSIB coverage for all workers on site. We provide certificates of insurance to building management and property owners before move day. Additional coverage can be arranged for high-value equipment." },
  { q: "Can you move medical equipment and clinical offices?", a: "Yes. Medical office and clinical moves require specialized protocols — PHIPA-compliant handling of patient files, medical equipment moving expertise, sterile environment standards, and coordination with equipment vendors for calibration after relocation. We serve medical offices, dental practices, physiotherapy clinics, and allied health providers across Ottawa." },
  { q: "Do you move businesses across Ottawa to other cities?", a: "Yes. We offer commercial long-distance moving from Ottawa — office relocations to Toronto, Montreal, and other Canadian cities. See our long distance moving page for details. Commercial long-distance moves are quoted on a project basis after a site assessment." },
  { q: "How far in advance should we book a commercial move?", a: "For large office moves (50+ employees), we recommend 4–8 weeks of advance planning. For smaller businesses (under 20 employees), 2–3 weeks is typically sufficient. Summer and end-of-month dates book quickly. Complex moves involving server rooms, medical equipment, or multi-phase relocations benefit from 6–8 weeks of planning regardless of business size." },
];

export default function CommercialMoving() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <>
      <Helmet>
        <title>Commercial Movers Ottawa | Office & Business Moving | Prestige Moving</title>
        <meta name="description" content="Ottawa's top-rated commercial movers. Office relocations, government moves, medical office moving, IT equipment. After-hours & weekend moves. $5M insured. Call (613) 600-4000." />
        <meta name="keywords" content="commercial movers Ottawa, office movers Ottawa, business moving Ottawa, office relocation Ottawa, commercial moving company Ottawa, government movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/services/commercial-moving" />
        <meta property="og:title" content="Commercial Movers Ottawa | Office Moving Experts | Prestige Moving" />
        <meta property="og:description" content="Ottawa commercial moving — offices, federal government, medical, retail. After-hours moves, $5M insured, dedicated coordinator. Book a site assessment today." />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Ottawa Movers", "item": "https://prestigemoving.ca" }, { "@type": "ListItem", "position": 2, "name": "Commercial Movers Ottawa", "item": "https://prestigemoving.ca/services/commercial-moving" }] })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Commercial Movers Ottawa", "serviceType": "Commercial Moving Services", "provider": { "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "telephone": "(613) 600-4000", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } }, "areaServed": { "@type": "City", "name": "Ottawa" } })}</script>
      </Helmet>

      <SharedNavigation />

      {/* ── Hero ── */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={commercialHeroImg} alt="Professional commercial movers handling office equipment in Ottawa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/30" />
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
              Office relocations, government department moves, medical offices, retail, and more. After-hours and weekend scheduling. Your team walks into a fully operational office Monday morning. Trusted by Ottawa's biggest employers — <Link href="/" className="text-[#C5A572] hover:underline">Ottawa's top-rated moving company</Link> for commercial moves.
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

      {/* ── Industries / Sector Tabs ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Commercial Moving Services by Industry</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Ottawa's diverse economy means each sector has unique moving requirements. Click your industry to see how we serve it.</p>
          </div>

          {/* Industry tab buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
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

          {/* Active industry detail */}
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
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Why Ottawa Businesses Choose Prestige Moving</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Commercial moving isn't just a bigger version of a home move. It's a project with stakeholders, timelines, and zero tolerance for mistakes.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_CHOOSE.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-[#C5A572]" />
                </div>
                <h3 className="font-bold text-[#1A2332] text-sm mb-1">{title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">How Our Commercial Moving Process Works</h2>
            <p className="text-gray-600">Every commercial move is planned, documented, and executed as a project — not just loaded onto a truck and hoped for the best.</p>
          </div>
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
        </div>
      </section>

      {/* ── Long-form SEO Content ── */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Commercial Moving in Ottawa — What You Need to Know</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Commercial moving in Ottawa is fundamentally different from residential moving — it's a project with business continuity at stake, not just a logistical challenge. An Ottawa business that's down for two days because of a poorly executed office move loses revenue, credibility, and employee morale. The best commercial movers in Ottawa understand this, and plan accordingly.</p>

            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Ottawa's Unique Commercial Moving Landscape</h3>
            <p>Ottawa's commercial real estate is concentrated in several major nodes — downtown core (O'Connor, Sparks, Bank), Kanata North tech hub, Business Park neighbourhoods in Nepean and Gloucester, and the National Capital Commission's Government of Canada campus network. Each area has distinct logistical requirements: downtown core high-rises require freight elevator coordination and 100 Wellington parking management; Kanata tech companies often have server rooms and cable-managed workstations requiring specialized expertise; federal government buildings require security clearance protocols.</p>

            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Federal Government Moving in Ottawa</h3>
            <p>No Canadian city has the volume of federal government office moves that Ottawa does. Department relocations, organizational restructurings, government centre consolidations, and end-of-lease moves happen constantly across the National Capital Region. Government moves typically involve Treasury Board Secretariat procurement guidelines, security clearance coordination for building access, chain-of-custody documentation for sensitive materials, and coordination with Shared Services Canada for IT assets. We have extensive experience navigating these requirements and can provide past performance references upon request.</p>

            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">IT Equipment and Server Room Relocation</h3>
            <p>Ottawa's growing technology sector — particularly in Kanata North, home to companies like Shopify, Nokia, and hundreds of tech startups — means IT equipment relocation is a significant part of our commercial moving work. Server room moves require coordination with your IT team on power-down sequence, complete rack photography before dismantling, cable labelling and documentation, anti-static packing materials for all equipment, and climate-controlled transport. We do not move server equipment without proper IT coordination — this is non-negotiable for the protection of your business.</p>

            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Planning an Ottawa Office Move: A Timeline</h3>
            <p>Successful commercial moves in Ottawa require planning well ahead of moving day. For a 30-person office: 8 weeks before — site assessment and binding quote; 6 weeks before — floor plan finalized, labelling system created; 4 weeks before — building coordination for after-hours access, elevator booking, parking permits; 2 weeks before — IT disconnect coordination, employee communication about packing requirements; Moving weekend — crew on site, systematic load-out, transport, delivery, and setup; Monday — business as usual.</p>

            <p>For residential moving services in Ottawa, see our <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving</Link> page. For moves beyond Ottawa, see our <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">long distance moving</Link> page.</p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-2 text-center">What Ottawa Businesses Say</h2>
          <p className="text-gray-500 text-center text-sm mb-10">5.0★ average · Trusted by Ottawa law firms, tech companies, and government departments</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sandra W.", org: "Ottawa Law Firm (85 employees)", review: "We moved our entire office over a long weekend. The Prestige crew started Friday at 6pm and by Sunday afternoon our new location was completely set up — workstations assembled, files in the right offices, reception area done. Our team walked in Monday morning to a fully operational office. Remarkable execution." },
              { name: "Mark T., IT Manager", org: "Kanata Tech Company", review: "Moving our server room was the part I was dreading most. The Prestige coordinator spent time with our IT team beforehand to understand the sequence, photographed everything before disconnecting, and their crew followed our IT protocols exactly. Not one cable was unlabelled. This crew knew what they were doing." },
              { name: "Jennifer L., Director", org: "Federal Government Department", review: "We needed a mover who understood government building security requirements and chain-of-custody for sensitive materials. Prestige had done federal moves before and it showed. Security clearances organized, documentation correct, and the move completed over a holiday weekend exactly on schedule." },
            ].map(t => (
              <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />)}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.review}"</p>
                <div className="font-bold text-[#1A2332] text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs flex items-center gap-1 mt-0.5"><Building2 className="h-3 w-3" />{t.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-2 text-center">Commercial Moving FAQ</h2>
          <p className="text-gray-500 text-center text-sm mb-8">Common questions from Ottawa businesses planning an office or commercial relocation</p>
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
          <Building2 className="h-10 w-10 text-[#C5A572] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Request a Commercial Moving Assessment</h2>
          <p className="text-white/65 mb-2 max-w-xl mx-auto">We visit your current and new space, assess the project scope, and provide a detailed written quote. No obligation. Ottawa's most trusted commercial movers.</p>
          <p className="text-[#C5A572] font-semibold mb-8">(613) 600-4000 · Ottawa@prestigemoving.ca</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Request Site Assessment <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
