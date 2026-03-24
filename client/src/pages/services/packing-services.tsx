import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, Shield, Clock, Package,
  Star, ChevronDown, Layers, Box, Truck, AlertTriangle, Sparkles
} from "lucide-react";
import packingHeroImg from "@assets/generated_images/packing_services_hero.png";

const PACKING_OPTIONS = [
  {
    name: "Full-Home Packing",
    price: "From $400",
    desc: "We pack every room, every drawer, every closet. Our team arrives the day before your move (or moving morning) and packs your entire home using professional-grade materials. Every box labelled by room and contents.",
    features: ["Every room packed", "All materials included", "Wardrobe boxes for clothing", "Dish packs for kitchen", "Room labelling system", "Loading-ready by move time"],
    popular: true,
  },
  {
    name: "Partial Packing",
    price: "From $200",
    desc: "You've packed most of it yourself, but there are rooms or items you'd rather leave to the professionals — the kitchen, breakables, artwork, electronics. We handle exactly the rooms or categories you specify.",
    features: ["Choose specific rooms", "Fragile item specialist", "Kitchen & china packing", "Artwork & mirrors", "Electronics & TVs", "Flexible scope"],
    popular: false,
  },
  {
    name: "Fragile-Only Packing",
    price: "From $120",
    desc: "Your biggest moving fear is a broken mirror, cracked plate, or shattered family heirloom. Our fragile-only packing service handles every breakable item — dishes, glasses, artwork, lamps, ceramics — using professional wrap and dish packs.",
    features: ["Dishes & glassware", "Artwork & mirrors", "Lamps & ceramics", "Figurines & collectibles", "Crystal & china", "Custom wrap for each piece"],
    popular: false,
  },
  {
    name: "Unpacking Service",
    price: "From $250",
    desc: "The hardest part of moving isn't packing — it's unpacking at the other end after a long moving day. Our unpacking team places items in the right rooms, assembles boxes, removes all packing materials, and leaves your new home feeling settled.",
    features: ["Room-by-room unpacking", "Items placed where you want", "All materials removed", "Box breaking & hauling", "Kitchen setup available", "Same-day or next-day"],
    popular: false,
  },
];

const MATERIALS = [
  { name: "Double-Wall Moving Boxes", desc: "Standard and large sizes. Double-wall construction prevents crushing under stacking weight. Used for most household items." },
  { name: "Dish Pack Boxes", desc: "Extra-thick walls and cell dividers for plates, bowls, and glassware. Industry standard for protecting kitchen items in transit." },
  { name: "Wardrobe Boxes", desc: "Full-height boxes with a hanging bar inside. Clothing goes straight from your closet rod to the wardrobe box — wrinkle-free." },
  { name: "Mirror / Picture Boxes", desc: "Flat, adjustable boxes specifically sized for framed artwork, mirrors, and flat-screen TVs. Foam corner protectors included." },
  { name: "Packing Paper", desc: "Unprinted newsprint paper for wrapping individual items, filling void space, and cushioning fragile pieces in boxes." },
  { name: "Bubble Wrap", desc: "Multi-layer bubble wrap for glassware, ceramics, figurines, and any item that needs impact protection beyond paper alone." },
  { name: "Stretch Wrap", desc: "Industrial-grade plastic stretch wrap for securing furniture drawers, protecting fabric surfaces, and bundle-wrapping items." },
  { name: "Packing Tape & Dispensers", desc: "Professional-grade tape with strong adhesive. Applied with ergonomic dispensers — no fumbling with tape mid-pack." },
];

const FAQS = [
  { q: "How long does professional packing take for an Ottawa home?", a: "Packing times vary by home size and volume. A 1-bedroom apartment typically takes our 2-person packing team 3–4 hours. A 3-bedroom home takes 6–8 hours. A 4+ bedroom family home can take 10–14 hours, which is why we often split packing across two days for larger homes. We'll give you a specific time estimate when you book." },
  { q: "What's included in the packing service price?", a: "All packing materials are included — boxes, tape, packing paper, bubble wrap, dish packs, wardrobe boxes, and stretch wrap. There are no material surcharges. The quoted price covers labour and all materials from first item packed to last box sealed." },
  { q: "Should I pack my own boxes or hire professionals?", a: "Self-packing works well for clothes, books, and everyday items. Professional packing is worth it for: the kitchen (most breakages happen here), artwork and mirrors, electronics and TVs, fine china and crystal, and the last-minute items you don't have time or energy to pack. Our fragile-only service is popular with people who want to pack most things themselves but are nervous about breakables." },
  { q: "Are items packed by your team covered by insurance?", a: "Yes. Items packed by our professional packing team are covered by full replacement value insurance (available as an upgrade). Items you pack yourself are covered by basic valuation only. This is another strong reason to use professional packing for your most valuable items — it also affects your insurance coverage." },
  { q: "Do you provide packing materials separately if I want to pack myself?", a: "Yes. We sell professional moving supplies through our moving supplies service — boxes, tape, bubble wrap, dish packs, wardrobe boxes, and more. See our moving supplies page for details or call (613) 600-4000 to order." },
  { q: "How many boxes do I need for a 2-bedroom apartment?", a: "A typical 2-bedroom Ottawa apartment requires 40–60 boxes. This varies enormously based on how much stuff you have, whether you're including the kitchen, and how much you're donating or leaving behind. We recommend ordering more than you think you need — unused boxes can be returned." },
  { q: "Can you pack and move on the same day?", a: "Yes for smaller homes — studios and 1-bedroom apartments are frequently packed and moved the same day. For 2-bedroom or larger homes, we typically recommend packing the day before for a smoother, faster moving day. Same-day pack-and-move is available as a premium service." },
  { q: "Do you pack fragile and irreplaceable items like artwork?", a: "Yes. Artwork, antiques, family heirlooms, and irreplaceable items get special handling — custom wrapping, mirror boxes, custom crating where needed, and careful individual documentation. These are never thrown in with regular household packing." },
];

export default function PackingServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeOption, setActiveOption] = useState(0);

  return (
    <>
      <Helmet>
        <title>Packing Services Ottawa | Professional Packing & Unpacking | Prestige Moving</title>
        <meta name="description" content="Ottawa's professional packing service. Full-home, partial, and fragile-only packing by expert movers. All materials included. Serving all Ottawa neighbourhoods. Call (613) 600-4000." />
        <meta name="keywords" content="packing services Ottawa, professional packing Ottawa, moving packing service Ottawa, packing and moving Ottawa, fragile packing Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/services/packing-services" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
      </Helmet>
      <SharedNavigation />

      {/* Hero */}
      <section className="relative min-h-[540px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={packingHeroImg} alt="Professional packers wrapping furniture in Ottawa home" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {["All Materials Included", "Same-Day Available", "Fragile Specialists"].map(t => (
                <Badge key={t} className="bg-[#C5A572]/20 text-[#C5A572] border border-[#C5A572]/30 text-xs font-semibold">{t}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Professional Packing Services Ottawa —<br />
              <span className="text-[#C5A572]">We Pack, You Relax</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Full-home packing, partial packing, fragile-only, and unpacking services across Ottawa. All materials included — no separate supply charges. The most stress-reducing part of any Ottawa move.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold text-base px-6">Book Packing Service <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10 text-base px-6"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["All Materials Included", "Breakage Coverage Available", "5.0★ 400+ Reviews", "Serve All Ottawa Neighbourhoods"].map(t => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" />{t}</span>
          ))}
        </div>
      </div>

      {/* Packing Options */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Packing Service Options</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Choose the level of packing support that fits your situation. Mix and match — we can pack certain rooms while you handle others.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {PACKING_OPTIONS.map((opt, i) => (
              <button key={i} onClick={() => setActiveOption(i)} className={`text-left rounded-xl border p-5 transition-all ${activeOption === i ? "border-[#C5A572] bg-[#C5A572]/5 shadow-md" : "border-gray-200 bg-gray-50 hover-elevate"}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[#1A2332] text-sm">{opt.name}</span>
                  {opt.popular && <Badge className="bg-[#C5A572]/15 text-[#C5A572] border-[#C5A572]/20 text-xs">Popular</Badge>}
                </div>
                <div className="text-[#C5A572] font-bold text-sm mb-2">{opt.price}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{opt.desc.substring(0, 80)}...</p>
              </button>
            ))}
          </div>
          <div className="bg-[#1A2332] rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider mb-2">{PACKING_OPTIONS[activeOption].name}</div>
                <div className="text-2xl font-black text-[#C5A572] mb-3">{PACKING_OPTIONS[activeOption].price}</div>
                <p className="text-white/80 leading-relaxed text-sm">{PACKING_OPTIONS[activeOption].desc}</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-white mb-3">What's Included</div>
                <div className="grid grid-cols-2 gap-2">
                  {PACKING_OPTIONS[activeOption].features.map(f => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A572] shrink-0 mt-0.5" />
                      <span className="text-white/75 text-xs">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Book This Service <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Professional Packing Materials — All Included</h2>
            <p className="text-gray-600 max-w-xl mx-auto">No material surcharges. Every supply below is included in your packing service quote at no additional cost.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MATERIALS.map(m => (
              <div key={m.name} className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="w-8 h-8 bg-[#C5A572]/15 rounded-lg flex items-center justify-center mb-3">
                  <Box className="h-4 w-4 text-[#C5A572]" />
                </div>
                <h3 className="font-bold text-[#1A2332] text-sm mb-1">{m.name}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long form content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Why Professional Packing Makes an Ottawa Move Smoother</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Packing is consistently ranked as the most time-consuming and stressful part of moving. The average Ottawa household contains 10,000–15,000 individual items. Sorting, wrapping, boxing, and labelling all of those items properly — while maintaining a household and preparing for a major life change — is an enormous undertaking. Professional packing services exist to take that burden entirely off your plate.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">The Kitchen: Where Most Moving Damage Happens</h3>
            <p>The single room where most moving breakages occur is the kitchen. Plates, bowls, glasses, mugs, and serving dishes are all fragile, heavy, and awkward to pack without the right technique and materials. Professional packers use dish packs — boxes with extra-thick double-wall construction and cell dividers — that dramatically reduce breakage rates. Each plate is individually paper-wrapped and placed vertically (the strongest orientation for transit). Professional packing is most valuable in the kitchen above any other room in your home.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Artwork, Mirrors, and Irreplaceable Items</h3>
            <p>Framed artwork and mirrors require flat, adjustable mirror boxes with foam corner protection. Family photographs require acid-free tissue paper and special handling. Antiques and heirlooms require custom wrapping and documentation. These items can't be replaced if damaged — which is exactly why they should be packed by professionals using the right materials and techniques, not thrown into a box at 11pm the night before moving day.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Ottawa's Packing Timeline</h3>
            <p>Most Ottawa homeowners significantly underestimate how long self-packing takes. A 2-bedroom apartment that looks manageable often takes 20–30 hours to properly pack. Professional packers work faster because they do this all day, every day — they know which materials to use for which items, they have a system, and they're not distracted by the emotional aspects of going through every drawer. Our full-home packing team packs a 3-bedroom Ottawa home in a single working day.</p>
            <p>Ready to take packing off your list? Book our packing service alongside your <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">Ottawa residential moving</Link> service for a fully managed move. Have specialty items like artwork or antiques? See our <Link href="/services/antique-moving" className="text-[#C5A572] hover:underline">antique moving</Link> page.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">What Ottawa Clients Say About Our Packing Service</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Tanya R.", area: "Kanata", review: "I was dreading packing 12 years of accumulated stuff in a 3-bedroom house. The packing team arrived at 8am and had the entire house packed, labelled, and ready to go by 3pm. My kitchen — the thing I was most worried about — arrived at the new place without a single broken item. Worth every penny." },
              { name: "Michael S.", area: "Westboro", review: "Used the fragile-only packing service because I trusted myself with clothes and books but not with my grandmother's china. Absolutely the right call. The team wrapped every piece individually, used the proper dish packs, and not one piece broke. Highly recommend for anyone with irreplaceable items." },
              { name: "Lisa & David K.", area: "Orleans", review: "The unpacking service at the other end was the best decision we made. After a long moving day, the last thing we wanted to do was unpack 80 boxes. The team came the next morning, unpacked everything into the right rooms, and took all the cardboard away. We were settled by lunchtime." },
            ].map(t => (
              <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />)}</div>
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
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Packing Services FAQ</h2>
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
          <Package className="h-10 w-10 text-[#C5A572] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Book Ottawa's Professional Packing Team</h2>
          <p className="text-white/65 mb-8 max-w-xl mx-auto">Full-home, partial, fragile-only, or unpacking service. All materials included. Add packing to any Ottawa move booking.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Book Packing Service <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
