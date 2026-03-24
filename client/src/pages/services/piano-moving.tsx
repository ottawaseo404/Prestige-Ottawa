import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, Shield, AlertTriangle,
  Star, ChevronDown, Music, Truck, Settings
} from "lucide-react";
import pianoHeroImg from "@assets/generated_images/piano_moving_hero.png";

const PIANO_TYPES = [
  {
    type: "Upright Piano",
    weight: "100–300 kg",
    examples: "Console, studio, upright grand, spinet",
    price: "From $350",
    desc: "Upright pianos are the most common type we move in Ottawa. They're heavy, awkward, and require a piano board (skid board), straps, and a team of at least 2–3 experienced movers. Stairs, tight doorways, and narrow hallways are our specialty.",
  },
  {
    type: "Baby Grand Piano",
    weight: "200–350 kg",
    examples: "Yamaha, Kawai, Steinway, Bösendorfer baby grands",
    price: "From $600",
    desc: "Baby grands must be partially disassembled for moving — legs removed, lid secured, strings protected with a piano board. Reassembly at destination is performed by our specialist team. We recommend tuning after any baby grand move.",
  },
  {
    type: "Grand Piano",
    weight: "250–500 kg",
    examples: "Concert grand, semi-concert grand, parlour grand",
    price: "From $900",
    desc: "Concert and parlour grand pianos are among the most complex items to move safely. Full disassembly required — legs, pedal lyre, lid, and sometimes the plate assembly. We have moved Steinway Model D concert grands for Ottawa musicians and venues.",
  },
  {
    type: "Digital Piano / Keyboard",
    weight: "15–80 kg",
    examples: "Stage pianos, digital uprights, weighted keyboards",
    price: "Included in standard move",
    desc: "Digital pianos and stage pianos can usually be moved as part of a standard household or commercial move — they don't require the specialized equipment or crew size of acoustic pianos. Mention your digital piano when booking for proper preparation.",
  },
];

const PROCESS = [
  { num: "01", title: "Pre-Move Piano Assessment", desc: "We confirm piano type, dimensions, and current location. Staircase angles, doorway widths, and access routes are assessed. For grand pianos, we confirm disassembly requirements and destination setup dimensions." },
  { num: "02", title: "Piano Board & Equipment Staging", desc: "A piano board (skid board) is positioned under the upright or used to support the grand during disassembly. Heavy-duty straps and moving blankets wrap the instrument completely. Keyboard keys and pedal mechanisms are padded and secured." },
  { num: "03", title: "Careful Loading — Keyboards Down", desc: "Upright pianos travel on their sides on the piano board, with keyboard facing the truck wall for protection. Grand pianos travel on their sides with the legs removed and wrapped. Proper positioning prevents soundboard and pin block damage." },
  { num: "04", title: "Vibration-Minimized Transport", desc: "Pianos are extremely sensitive to vibration — it detunes the instrument and can crack soundboards over time. We drive cautiously, avoid rough roads where possible, and ensure the piano is firmly secured to prevent shifting." },
  { num: "05", title: "Placement, Reassembly & Tuning Recommendation", desc: "At destination, the piano is placed upright or reassembled (grand), positioned exactly where you want it, and the piano board removed. We always recommend tuning by a registered piano technician 2–4 weeks after any move, once the instrument has acclimated." },
];

const FAQS = [
  { q: "How much does piano moving in Ottawa cost?", a: "Upright piano moving in Ottawa starts at $350 for a ground-floor to ground-floor move. Stairs add $75–150 per flight depending on the piano weight and staircase difficulty. Baby grand moves start at $600. Concert grand moves start at $900. An exact quote requires knowing your piano type, dimensions, and access conditions at both locations." },
  { q: "Do I need to have my piano tuned after moving?", a: "Yes — almost always. Pianos go out of tune when moved because the change in humidity, temperature, and physical handling affects string tension. The amount of detuning varies by how well-regulated the piano was before the move, how far it was moved, and conditions during transit. We recommend waiting 2–4 weeks after the move for the piano to acclimate to its new environment before having a registered piano technician tune it." },
  { q: "What's the difference between how you move an upright vs. a grand piano?", a: "Upright pianos are moved on a piano skid board, tipped on their sides, wrapped in moving blankets, and secured with straps — then moved on the board. Grand pianos require disassembly: the legs are removed, the pedal lyre is detached, and the lid is secured flat. The body is moved on its side on a piano board. Reassembly at destination is performed by our specialist team." },
  { q: "Can you move my piano up or down stairs in Ottawa?", a: "Yes. Stair moves are the most common challenge with piano moving in Ottawa — Victorian homes in the Glebe and Sandy Hill, Ottawa condo buildings, and Centretown walk-ups all present stair situations. We use piano ramps for exterior stairs and controlled lowering systems for interior staircases. This is specialty work — please don't attempt to move a piano up or down stairs with untrained movers." },
  { q: "How do I prepare my piano for moving day?", a: "Lock or tape the keyboard lid closed. Remove any items sitting on top of the piano. Inform us if the piano has any existing damage or fragile components. Have the destination location planned and measured — we'll need to confirm the piano fits through all doorways at the new location before moving day." },
  { q: "Do you move pianos for music schools and venues in Ottawa?", a: "Yes. We move pianos for music schools, churches, concert venues, recording studios, and music retailers in Ottawa. Commercial piano moves are quoted separately and often involve loading dock access, freight elevator coordination, and staging in performance spaces. Call (613) 600-4000 to discuss commercial piano moving." },
  { q: "Will moving my piano damage it?", a: "A properly executed piano move does not damage the instrument. The risks arise from improper technique — moving a grand piano without disassembly, moving an upright piano without a skid board, or rushing stairs without proper equipment. Our piano moving team uses proper technique, proper equipment, and takes the time required. We've moved hundreds of pianos in Ottawa without damage to the instrument." },
  { q: "Do you move Steinway pianos?", a: "Yes. We have moved Steinway uprights, baby grands, and concert grands in Ottawa and across Canada on long-distance moves. Steinway instruments are among the most valuable pianos in the world and receive the highest level of care — full disassembly for grands, acid-free padding for all surfaces, and climate-controlled transport on long-distance moves." },
];

export default function PianoMoving() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeType, setActiveType] = useState(0);

  return (
    <>
      <Helmet>
        <title>Piano Movers Ottawa | Upright, Baby Grand & Concert Grand Moving | Prestige Moving</title>
        <meta name="description" content="Ottawa's professional piano movers. Upright pianos from $350, baby grands from $600, concert grands from $900. Stairs, condos, long distance. WSIB insured. Call (613) 600-4000." />
        <meta name="keywords" content="piano movers Ottawa, piano moving Ottawa, grand piano movers Ottawa, upright piano moving Ottawa, piano moving company Ottawa, Steinway movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/services/piano-moving" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
      </Helmet>
      <SharedNavigation />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={pianoHeroImg} alt="Professional piano movers carefully moving a grand piano in Ottawa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Upright from $350", "Baby Grand from $600", "Stair Specialists", "Steinway Experienced"].map(t => (
                <Badge key={t} className="bg-[#C5A572]/20 text-[#C5A572] border border-[#C5A572]/30 text-xs font-semibold">{t}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Piano Movers Ottawa —<br />
              <span className="text-[#C5A572]">Handled Right, Every Time</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Upright pianos, baby grands, concert grands — stairs, condos, long distances. Our piano moving team uses proper skid boards, disassembly techniques, and vibration-minimized transport to deliver your instrument safely and in tune.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {["Hundreds of Pianos Moved", "Stair Specialists", "WSIB & Fully Insured", "Long Distance Available"].map(t => (
                <div key={t} className="flex items-center gap-1.5 text-white/75 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" /><span>{t}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold text-base px-6">Book Piano Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10 text-base px-6"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Skid Board & Proper Equipment", "Stair Specialists", "Grand Piano Disassembly", "Vibration-Minimized Transit", "5.0★ Ottawa Reviews"].map(t => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" />{t}</span>
          ))}
        </div>
      </div>

      {/* Piano type selector */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Piano Types We Move in Ottawa</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Different pianos require fundamentally different moving approaches. Click your piano type to see how we move it.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {PIANO_TYPES.map((p, i) => (
              <button key={i} onClick={() => setActiveType(i)} className={`text-left rounded-xl border p-5 transition-all ${activeType === i ? "border-[#C5A572] bg-[#C5A572]/5 shadow-md" : "border-gray-200 bg-gray-50 hover-elevate"}`}>
                <div className="font-bold text-[#1A2332] text-sm mb-1">{p.type}</div>
                <div className="text-[#C5A572] font-bold text-sm mb-1">{p.price}</div>
                <div className="text-gray-500 text-xs">{p.weight}</div>
              </button>
            ))}
          </div>
          <div className="bg-[#1A2332] rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider mb-2">Selected Piano Type</div>
                <h3 className="text-2xl font-bold mb-2">{PIANO_TYPES[activeType].type}</h3>
                <div className="text-white/60 text-sm mb-2">Weight: {PIANO_TYPES[activeType].weight}</div>
                <div className="text-white/60 text-sm mb-4">Examples: {PIANO_TYPES[activeType].examples}</div>
                <div className="text-[#C5A572] text-xl font-black">{PIANO_TYPES[activeType].price}</div>
              </div>
              <div>
                <p className="text-white/80 leading-relaxed text-sm">{PIANO_TYPES[activeType].desc}</p>
                <div className="mt-5">
                  <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Exact Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">How We Move Pianos in Ottawa</h2>
            <p className="text-gray-600">Proper technique from pre-move assessment to destination placement. Every step matters with an instrument this valuable.</p>
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
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Piano Moving in Ottawa — Why It Requires Specialists</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>A piano is simultaneously one of the most valuable, most fragile, and most mechanically complex objects in a typical home. A high-quality upright piano contains over 12,000 individual parts. A concert grand can be worth $200,000 or more. Moving one requires specialized equipment, trained technique, and an understanding of piano mechanics that goes well beyond what general movers are trained or equipped to provide.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">The Piano Skid Board — Why It's Non-Negotiable</h3>
            <p>A piano skid board (also called a piano board) is a specialized moving device specifically designed for piano transport. It's a low-profile board with rubber-wheeled castors that an upright piano is tipped onto for transport — allowing the piano to roll smoothly without the legs bearing all the weight and stress. Moving an upright piano without a skid board is a common mistake that can damage legs, strain the cabinet joints, and make the move significantly more difficult and unsafe. Every piano we move uses proper equipment.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Stairs and Pianos in Ottawa Homes</h3>
            <p>Ottawa's older neighbourhoods — Sandy Hill, the Glebe, Centretown, Westboro, New Edinburgh — contain many Victorian and Edwardian homes with steep, narrow staircases that were never designed with piano moving in mind. Pianos and stairs are the most challenging combination in moving. We use piano ramps for exterior step access and controlled lowering systems with safety straps for interior staircases. Never attempt to move a piano up or down stairs without specialists — the weight, momentum, and limited control points make this one of the most dangerous moving tasks attempted by amateurs.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">After the Move — Tuning Your Piano</h3>
            <p>Every piano needs tuning after being moved — full stop. The change in humidity and temperature at the new location, combined with the vibration of transit, causes string tension to shift. The amount of detuning varies, but it's always present. Wait 2–4 weeks after your move for the piano to acclimate to its new environment before tuning. If you need a referral to a registered piano technician in Ottawa, our coordinator can provide contacts. Tuning a piano that hasn't acclimated to its new environment means the strings will shift again as it settles — wait the 2–4 weeks.</p>
            <p>Moving a piano along with a household? See our <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving</Link> service. Moving a piano long distance from Ottawa? See our <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">long distance moving</Link> page.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Ottawa Piano Owners on Prestige Moving</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Catherine H.", piano: "Steinway Upright", area: "The Glebe", review: "My 1928 Steinway upright is priceless to me. The Prestige team treated it with extraordinary care — proper skid board, every surface padded and wrapped, no rushing on the narrow staircase. It arrived in perfect condition and tuned beautifully 3 weeks later." },
              { name: "Thomas & Rebecca A.", piano: "Baby Grand", area: "Westboro → Barrhaven", review: "Moved our baby grand from a Victorian Westboro home to a new build in Barrhaven. The team disassembled it perfectly, the legs were protected and transported separately, and it was fully reassembled and levelled at the new house. Professional from start to finish." },
              { name: "Riverside Music Academy", piano: "4 Studio Uprights", area: "Commercial Move", review: "We moved our studio location with 4 Yamaha upright pianos. All 4 moved without a scratch, placed in the new studios exactly where specified. Coordinated with our move timeline and were in and out without disrupting our students. Would use again." },
            ].map(t => (
              <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />)}</div>
                <Badge className="bg-[#C5A572]/10 text-[#C5A572] border-0 text-xs mb-3">{t.piano}</Badge>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.review}"</p>
                <div className="font-bold text-[#1A2332] text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs mt-0.5">{t.area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Piano Moving FAQ</h2>
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
          <Music className="h-10 w-10 text-[#C5A572] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Book Your Ottawa Piano Move</h2>
          <p className="text-white/65 mb-8 max-w-xl mx-auto">Upright pianos from $350 · Baby grands from $600 · Concert grands from $900 · Stairs & condos welcome.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Book Piano Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
