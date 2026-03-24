import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, Shield, AlertTriangle,
  Star, ChevronDown, Settings, Truck, Package
} from "lucide-react";
import specialtyHeroImg from "@assets/generated_images/specialty_moving_hero.png";

const SPECIALTY_ITEMS = [
  {
    name: "Hot Tubs & Spas",
    weight: "400–900 kg",
    challenge: "Weight, awkward shape, plumbing disconnection, tight spaces",
    approach: "We drain, disconnect, and wrap your hot tub before moving it with a specialized dolly and strap system. Access planning is done in advance — we verify gate widths, pathways, and floor load capacity at destination.",
  },
  {
    name: "Pool Tables",
    weight: "300–700 kg",
    challenge: "Slate disassembly, felt protection, precise re-levelling",
    approach: "Pool tables cannot be moved intact without damaging the slate and felt. We disassemble, protect each slate piece individually, transport, and professionally re-level and re-felt at destination. Re-levelling is included.",
  },
  {
    name: "Gun Safes & Vaults",
    weight: "200–1,000+ kg",
    challenge: "Extreme weight, floor load limits, narrow passages",
    approach: "Heavy safes require specialized dolly equipment, stair rollers, and crew strength. We assess floor load capacity at origin and destination before moving. All safes moved with RCMP-compliant protocols (empty, locked).",
  },
  {
    name: "Gym & Fitness Equipment",
    weight: "Varies",
    challenge: "Complex disassembly, cable routing, heavy bases",
    approach: "Treadmills, ellipticals, cable machines, squat racks, and all fitness equipment disassembled, transported, and fully reassembled. We photograph all cable routing before disassembly and restore it exactly.",
  },
  {
    name: "Arcade Machines & Pinball",
    weight: "100–300 kg",
    challenge: "Electronics, glass panels, height and width restrictions",
    approach: "Arcade machines and pinball tables have fragile glass, electronics, and precise balance requirements. We specialize in moving collector-grade arcade equipment without damage — padded blankets, custom protection, careful tipping and rotation.",
  },
  {
    name: "Statues & Outdoor Art",
    weight: "Varies",
    challenge: "Fragility, balance, pedestals, outdoor-to-indoor",
    approach: "Garden statues, bronze sculptures, ceramic art pieces — each requires custom wrapping and handling. We provide custom crating for exceptionally fragile or valuable pieces. Indoor placement is performed with felt pads to protect flooring.",
  },
];

const PROCESS = [
  { num: "01", title: "Pre-Move Assessment", desc: "Before booking, our specialist evaluates your item and your space. We measure doorways, hallways, stairwells, and outdoor pathways at both origin and destination. We identify any access challenges and plan solutions before moving day." },
  { num: "02", title: "Equipment Staging", desc: "The right equipment is everything. Depending on your item, we arrive with: heavy-duty appliance dollies, stair rollers, extended straps, furniture sliders, custom crating, specialized lifting harnesses, or a combination." },
  { num: "03", title: "Careful Disassembly (if required)", desc: "Items like pool tables, gym equipment, and certain hot tubs must be partially disassembled for moving. We photograph all components and connections before disassembly and restore the item completely at destination." },
  { num: "04", title: "Protected Transport", desc: "Specialty items travel with additional padding, custom blocking, and in some cases their own transport vehicle. They are secured with multiple anchor points — nothing shifts in transit." },
  { num: "05", title: "Professional Placement & Reassembly", desc: "At destination, we place your item exactly where you want it, complete all reassembly, and test proper function before leaving. Pool table re-levelling and equipment testing are performed on site." },
];

const FAQS = [
  { q: "How much does it cost to move a hot tub in Ottawa?", a: "Moving a hot tub in Ottawa typically costs $400–$900 depending on the tub's size, weight, access conditions at both locations, and distance. Hot tub moving requires specialized equipment and a minimum 3-person crew. We assess the access conditions and quote accordingly — some hot tub moves require crane assistance if access is extremely limited, which adds to the cost." },
  { q: "Can you move a pool table and re-level it?", a: "Yes. Pool table moving requires full disassembly — the slate (which can weigh 250–400 kg alone) must be removed, transported flat, and professionally reinstalled and levelled. We include re-levelling and re-felting assessment in every pool table move. A pool table that isn't properly levelled at destination isn't playable — we make sure it is." },
  { q: "How do you move a gun safe weighing 500 kg?", a: "Heavy safes require specialized stair roller dollies, heavy-duty moving straps, and multiple experienced crew members. Before moving day, we assess floor load capacity at both origin and destination — safes this heavy can cause floor damage if not properly managed. All safes are moved empty and locked per RCMP guidelines. We cannot move safes with ammunition or firearms inside." },
  { q: "Do you need to disassemble gym equipment to move it?", a: "Most gym equipment requires at least partial disassembly for moving — treadmills fold or have removable consoles, cable machines have components that must be detached, and squat racks typically come apart in sections. We photograph all cable routing and hardware before disassembly and restore everything to factory specification at destination." },
  { q: "Can you move outdoor garden statues and fountains?", a: "Yes. Garden statues, fountains, and outdoor art pieces are specialty moves that require custom padding and careful handling. Stone and concrete pieces are extremely heavy relative to their size and very fragile at thin points (arms, wings, decorative elements). We wrap each piece individually and use appropriate lifting equipment." },
  { q: "What if my specialty item won't fit through the door?", a: "This is the most common challenge with specialty items. We assess doorway, hallway, and stairwell dimensions before moving day and develop a plan. Solutions include: removing door frames (re-installed after), taking windows off their tracks, crane lifts over balconies for high-rise deliveries, or in some cases creating a custom route through the property. There's almost always a solution — it just requires planning." },
];

export default function SpecialtyItemMoving() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      <Helmet>
        <title>Specialty Item Movers Ottawa | Hot Tubs, Pool Tables, Safes | Prestige Moving</title>
        <meta name="description" content="Ottawa's specialty item moving experts. Hot tubs, pool tables, gun safes, gym equipment, arcade machines, and more. Fully equipped specialist team. Call (613) 600-4000." />
        <meta name="keywords" content="specialty movers Ottawa, hot tub movers Ottawa, pool table movers Ottawa, gun safe movers Ottawa, heavy item movers Ottawa, specialty moving Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/services/specialty-item-moving" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
      </Helmet>
      <SharedNavigation />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={specialtyHeroImg} alt="Specialty movers moving a hot tub in Ottawa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Hot Tubs", "Pool Tables", "Gun Safes", "Gym Equipment", "Arcade Machines"].map(t => (
                <Badge key={t} className="bg-[#C5A572]/20 text-[#C5A572] border border-[#C5A572]/30 text-xs font-semibold">{t}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Specialty Item Movers Ottawa —<br />
              <span className="text-[#C5A572]">The Items No One Else Will Touch</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Hot tubs, pool tables, gun safes, gym equipment, arcade machines, and other oversized or ultra-heavy items. We have the equipment, crew, and expertise to move what standard movers refuse. Pre-move assessment included on every specialty job.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold text-base px-6">Get Specialty Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10 text-base px-6"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Pre-Move Site Assessment", "Specialized Equipment", "Full Reassembly Included", "WSIB & $2M Insured", "5.0★ Ottawa Reviews"].map(t => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" />{t}</span>
          ))}
        </div>
      </div>

      {/* Specialty Item Selector */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Specialty Items We Move in Ottawa</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Click any item to see the specific challenges, our approach, and what to expect on moving day.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {SPECIALTY_ITEMS.map((item, i) => (
              <button key={i} onClick={() => setActiveItem(i)} className={`text-left rounded-xl border p-4 transition-all ${activeItem === i ? "border-[#C5A572] bg-[#C5A572]/5 shadow-md" : "border-gray-200 bg-gray-50 hover-elevate"}`}>
                <div className="font-bold text-[#1A2332] text-sm mb-1">{item.name}</div>
                <div className="text-gray-500 text-xs">Weight: {item.weight}</div>
              </button>
            ))}
          </div>
          <div className="bg-[#1A2332] rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider mb-2">Selected Item</div>
                <h3 className="text-2xl font-bold mb-2">{SPECIALTY_ITEMS[activeItem].name}</h3>
                <div className="text-white/60 text-sm mb-4">Typical weight: {SPECIALTY_ITEMS[activeItem].weight}</div>
                <div className="mb-4">
                  <div className="text-white/50 text-xs font-semibold uppercase mb-1">Key Challenges</div>
                  <p className="text-white/80 text-sm">{SPECIALTY_ITEMS[activeItem].challenge}</p>
                </div>
              </div>
              <div>
                <div className="text-white/50 text-xs font-semibold uppercase mb-2">Our Approach</div>
                <p className="text-white/80 text-sm leading-relaxed">{SPECIALTY_ITEMS[activeItem].approach}</p>
                <div className="mt-5">
                  <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Quote for This Item <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Specialty Item Moving Process</h2>
            <p className="text-gray-600">Every specialty move is assessed before booking day. No surprises — just expert execution.</p>
          </div>
          <div className="space-y-4">
            {PROCESS.map((step, i) => (
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

      {/* Long-form content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Specialty Item Moving in Ottawa — What Makes It Different</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Specialty item moving is a category apart from regular household moving. Standard moving training covers furniture, boxes, and appliances — it does not cover the physics of moving a 700 kg pool table through a finished basement, the engineering of a hot tub extraction through a narrow gate, or the floor load calculations required for a 900 kg vault. Specialty moving requires dedicated equipment, trained technique, and pre-move planning that standard moving companies simply aren't set up to provide.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Hot Tub Moving in Ottawa</h3>
            <p>Ottawa's housing stock — from Kanata suburban homes to Glebe Victorian houses — often presents challenging hot tub access situations. A hot tub that arrived via crane during construction can't leave the same way once the fence is up. Our hot tub moving team assesses every access point before the move: gate widths (minimum 900mm required), slope of pathways, foundation clearance, and destination space. Most Ottawa hot tub moves are possible with the right equipment and planning — even when homeowners have been told otherwise by other companies.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Pool Table Moving and Re-Levelling</h3>
            <p>Pool table moving is a specialty within a specialty. The slate — usually three pieces, each weighing 80–130 kg — must be individually removed, carefully transported flat, and precisely reinstalled. The felt must be inspected and replaced if damaged. And critically, the table must be re-levelled to a tolerance of less than 1mm across the full playing surface. A pool table that isn't level isn't playable. Our pool table moving service includes professional re-levelling at destination — it's not an optional add-on.</p>
            <p>For regular household moving in Ottawa, see our <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving</Link> service. For piano moving specifically, see our dedicated <Link href="/services/piano-moving" className="text-[#C5A572] hover:underline">piano moving</Link> page.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Ottawa Clients on Our Specialty Moving Service</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Trevor B.", area: "Barrhaven", item: "Hot Tub Move", review: "Three other companies told me my hot tub couldn't be moved without removing part of my fence. Prestige sent someone to assess first, figured out an approach that didn't require fence removal, and did the whole job in 4 hours. Nobody was hurt, nothing was damaged." },
              { name: "Caitlin M.", area: "The Glebe", item: "Pool Table Move", review: "Moved an 8-foot slate pool table from a finished basement. The crew disassembled everything, numbered all the slate pieces, and re-assembled it perfectly at the new house. Re-levelled it on site — the table plays as well as it ever did. Very impressed." },
              { name: "Robert H.", area: "Kanata", item: "Gun Safe Move", review: "800 kg safe in a finished basement. I was worried about the floor and the stairs. The Prestige crew assessed the floor load capacity first, used stair rollers I didn't know existed, and got it out without a scratch on anything. Professional operation." },
            ].map(t => (
              <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />)}</div>
                <Badge className="bg-[#C5A572]/10 text-[#C5A572] border-0 text-xs mb-3">{t.item}</Badge>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.review}"</p>
                <div className="font-bold text-[#1A2332] text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs mt-0.5">{t.area}, Ottawa</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Specialty Item Moving FAQ</h2>
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

      {/* CTA */}
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Settings className="h-10 w-10 text-[#C5A572] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Get a Quote for Your Specialty Item</h2>
          <p className="text-white/65 mb-8 max-w-xl mx-auto">Tell us what you need moved. We assess, quote, and execute — with the right equipment and experienced crew for the job.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Specialty Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
