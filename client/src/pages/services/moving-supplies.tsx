import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, Package,
  Star, ChevronDown, Box, Truck, ShoppingCart
} from "lucide-react";
import suppliesHeroImg from "@assets/generated_images/moving_supplies_hero.png";

const PRODUCTS = [
  {
    category: "Moving Boxes",
    items: [
      { name: "Small Box (1.5 cu ft)", price: "$3.50", desc: "Books, canned goods, heavy items. The workhorse of any move — ideal for anything dense or heavy." },
      { name: "Medium Box (3.0 cu ft)", price: "$4.50", desc: "Kitchen items, clothes, toys, moderate-weight household items. Our most popular size." },
      { name: "Large Box (4.5 cu ft)", price: "$5.50", desc: "Lightweight bulky items — linens, pillows, stuffed animals, lampshades." },
      { name: "Extra Large Box (6.0 cu ft)", price: "$6.50", desc: "Very lightweight items only — comforters, duvets, large pillows. Never overload extra large boxes." },
      { name: "Dish Pack Box (5.2 cu ft)", price: "$8.50", desc: "Extra-thick walls and cell dividers for plates, bowls, and glassware. Worth every penny for kitchen china." },
      { name: "Wardrobe Box (with bar)", price: "$18.00", desc: "Full-height box with hanging bar. Clothing transfers directly from closet rod. No folding, no wrinkles." },
    ]
  },
  {
    category: "Packing Materials",
    items: [
      { name: "Packing Paper (25 lbs)", price: "$22.00", desc: "Unprinted newsprint paper for wrapping individual items. 25 lbs fills approximately 40 medium boxes." },
      { name: "Bubble Wrap Roll (24\"×50')", price: "$28.00", desc: "Multi-layer bubble wrap for fragile items. Essential for glassware, ceramics, and electronics." },
      { name: "Packing Tape (6-pack)", price: "$18.00", desc: "Professional-grade moving tape with strong adhesive. 6 rolls typically handles a 2-bedroom move." },
      { name: "Stretch Wrap Roll (18\"×1500')", price: "$24.00", desc: "Industrial stretch wrap for furniture protection, securing drawers, and wrapping irregularly shaped items." },
      { name: "Foam Pouches (25-pack)", price: "$16.00", desc: "Self-sealing foam pouches for glasses, mugs, and small fragile items. Faster than paper wrapping." },
      { name: "Marker + Labels Set", price: "$8.00", desc: "Heavy-duty permanent markers and label stickers for box organization. Colour-coded by room." },
    ]
  },
  {
    category: "Specialty Items",
    items: [
      { name: "Mirror/Picture Box (adjustable)", price: "$22.00", desc: "Adjustable flat box for framed artwork, mirrors, and flat-screen TVs. Foam corner protectors included." },
      { name: "Mattress Bag (Queen)", price: "$16.00", desc: "Heavy-duty plastic mattress bag for protection during transit. Keeps mattress clean and protected from moisture." },
      { name: "Furniture Pads (6-pack)", price: "$45.00", desc: "Heavy-duty moving blankets for furniture protection. Professional-grade — same as our crew uses." },
      { name: "TV Box Kit (fits up to 70\")", price: "$28.00", desc: "Custom TV box with foam inserts and corner protection for flat-screen TVs up to 70 inches." },
      { name: "Mattress Box (King)", price: "$38.00", desc: "Corrugated mattress box for extra protection — recommended for pillow-top and memory foam mattresses." },
      { name: "Wine/Bottle Divider Kit", price: "$12.00", desc: "Cell dividers specifically for wine bottles, liquor, and fragile bottles. Fits standard medium moving box." },
    ]
  }
];

const HOW_MANY = [
  { home: "Studio / Bachelor", small: "10–15", medium: "8–12", large: "3–5", wardrobes: "1–2", total: "25–35 boxes" },
  { home: "1 Bedroom", small: "15–20", medium: "12–18", large: "5–8", wardrobes: "2–3", total: "35–50 boxes" },
  { home: "2 Bedroom", small: "20–30", medium: "18–25", large: "8–12", wardrobes: "3–4", total: "50–70 boxes" },
  { home: "3 Bedroom", small: "30–45", medium: "25–35", large: "12–18", wardrobes: "4–6", total: "75–105 boxes" },
  { home: "4+ Bedroom", small: "45–60", medium: "35–50", large: "18–25", wardrobes: "6–8", total: "105–145 boxes" },
];

const FAQS = [
  { q: "Can I buy moving supplies and have them delivered in Ottawa?", a: "Yes. We offer moving supply delivery throughout Ottawa and surrounding communities. Order by phone at (613) 600-4000 or through our online booking system. Delivery is available 7 days a week. Supplies can also be picked up at our Ottawa facility." },
  { q: "Can I return unused boxes after my move?", a: "Yes. Unused, undamaged boxes can be returned for a refund of 50% of the purchase price within 30 days of purchase. This means you can order more than you need without worrying about waste. Tape, packing paper, and other consumables cannot be returned." },
  { q: "What's the difference between cheap moving boxes and professional moving boxes?", a: "Cheap moving boxes from grocery stores and liquor stores are used — they've been weakened by previous use, exposure to moisture, and handling. Professional new moving boxes have never been used, are rated for specific weight loads, and have consistent wall thickness throughout. For a serious move, professional boxes are worth the small premium — a collapsing box is expensive in broken items." },
  { q: "How many boxes do I need for a 2-bedroom apartment?", a: "A 2-bedroom Ottawa apartment typically requires 50–70 boxes. This varies significantly based on how much stuff you have, whether you're packing the kitchen (which can require 15–20 boxes alone), and how much you're donating or leaving behind. We recommend ordering 10–15% more than you think you need — unused boxes can be returned." },
  { q: "What's the most important packing supply to buy?", a: "Packing paper. Most people buy too little and end up wrapping fragile items with fewer layers than they need, or leaving void space in boxes unfilled. 25 lbs of packing paper is the right amount for a 2-bedroom apartment. If you run out, breakage rates go up. Bubble wrap is second — invest in proper bubble wrap for glassware and fragile items rather than trying to substitute with other materials." },
  { q: "Are dish pack boxes worth the extra cost?", a: "Yes — absolutely. Dish packs cost more than standard medium boxes but they have significantly thicker walls and optional cell dividers that protect plates and bowls in transit. A broken set of china or crystal costs far more than the difference in box price. If you have any kitchen items you care about, use proper dish packs." },
];

export default function MovingSupplies() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      <Helmet>
        <title>Moving Supplies Ottawa | Boxes, Tape, Packing Materials | Prestige Moving</title>
        <meta name="description" content="Professional moving supplies in Ottawa — boxes, packing paper, bubble wrap, wardrobe boxes, dish packs, and more. Delivery available. Used or returned boxes accepted. Call (613) 600-4000." />
        <meta name="keywords" content="moving supplies Ottawa, moving boxes Ottawa, packing supplies Ottawa, buy moving boxes Ottawa, wardrobe boxes Ottawa, dish packs Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/services/moving-supplies" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
      </Helmet>
      <SharedNavigation />

      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={suppliesHeroImg} alt="Professional moving supplies boxes tape packing materials Ottawa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Ottawa Delivery Available", "Unused Boxes Returnable", "Professional Grade", "Bundle Discounts"].map(t => (
                <Badge key={t} className="bg-[#C5A572]/20 text-[#C5A572] border border-[#C5A572]/30 text-xs font-semibold">{t}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Moving Supplies Ottawa —<br />
              <span className="text-[#C5A572]">Professional Grade, Delivered to Your Door</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Professional-grade moving boxes, packing paper, bubble wrap, wardrobe boxes, dish packs, tape, and specialty supplies — delivered anywhere in Ottawa. Unused boxes returnable within 30 days.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:6136004000"><Button className="bg-[#C5A572] text-[#1A2332] font-bold text-base px-6"><Phone className="h-4 w-4 mr-2" />Order Now — (613) 600-4000</Button></a>
              <Link href="/book"><Button variant="outline" className="text-white border-white/30 bg-white/10 text-base px-6">Book a Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Ottawa Delivery Available", "50% Return on Unused Boxes", "Professional Grade Only", "Bundle Discounts on Orders 50+", "Same-Day Delivery Available"].map(t => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" />{t}</span>
          ))}
        </div>
      </div>

      {/* Product catalog */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Moving Supplies Catalogue</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Professional-grade supplies only — no recycled grocery store boxes. Prices include Ottawa delivery (minimum order applies).</p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {PRODUCTS.map((cat, i) => (
              <button key={i} onClick={() => setActiveCategory(i)} className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${activeCategory === i ? "bg-[#1A2332] text-white border-[#1A2332]" : "bg-white text-gray-700 border-gray-200 hover-elevate"}`}>{cat.category}</button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRODUCTS[activeCategory].items.map(item => (
              <div key={item.name} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-[#1A2332] text-sm flex-1 pr-3">{item.name}</h3>
                  <span className="text-[#C5A572] font-black text-sm shrink-0">{item.price}</span>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#1A2332] rounded-2xl p-6 text-white text-center">
            <p className="text-white/80 mb-4">Order by phone for same-day or next-day Ottawa delivery. Bundle discounts available on orders of 50+ boxes.</p>
            <a href="tel:6136004000"><Button className="bg-[#C5A572] text-[#1A2332] font-bold"><Phone className="h-4 w-4 mr-2" />Order Now — (613) 600-4000</Button></a>
          </div>
        </div>
      </section>

      {/* How many boxes */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">How Many Boxes Do I Need?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Ottawa household estimates based on thousands of moves. Order 10–15% more than you think — unused boxes are returnable.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A2332] text-white">
                  <th className="text-left p-4 text-sm font-bold">Home Size</th>
                  <th className="text-left p-4 text-sm font-bold">Small</th>
                  <th className="text-left p-4 text-sm font-bold">Medium</th>
                  <th className="text-left p-4 text-sm font-bold">Large</th>
                  <th className="text-left p-4 text-sm font-bold">Wardrobes</th>
                  <th className="text-left p-4 text-sm font-bold">Total</th>
                </tr>
              </thead>
              <tbody>
                {HOW_MANY.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 font-bold text-[#1A2332] text-sm">{row.home}</td>
                    <td className="p-4 text-gray-700 text-sm">{row.small}</td>
                    <td className="p-4 text-gray-700 text-sm">{row.medium}</td>
                    <td className="p-4 text-gray-700 text-sm">{row.large}</td>
                    <td className="p-4 text-gray-700 text-sm">{row.wardrobes}</td>
                    <td className="p-4 font-bold text-[#C5A572] text-sm">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">Estimates vary based on how much stuff you have and what you're donating. Add dish packs separately for kitchen china and glassware.</p>
        </div>
      </section>

      {/* Long-form content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Choosing the Right Moving Supplies in Ottawa</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Most Ottawa residents significantly underestimate the supplies they need for a move — and then compensate by using whatever is available: grocery store boxes, newspaper wrapping, insufficient tape, and improvised protective materials. The result is predictable: more damage, more stress, and a move that takes longer because of poor organization. Professional moving supplies make every part of a move faster and safer.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Why Professional Boxes Are Worth It</h3>
            <p>Grocery store boxes are free — but they're used. A box that previously held lettuce or liquor bottles has been moistened, opened and resealed, and loaded beyond its original rated capacity. The wall integrity is compromised. Used boxes fail in transit — they buckle under stacking weight, the bottoms give way when lifted, and they offer dramatically less protection than new boxes. Professional moving boxes are unused, rated to specific weight capacities, and maintain their structural integrity throughout loading, transport, and unloading.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">The Dish Pack Investment</h3>
            <p>Dish pack boxes cost more than standard medium boxes — but consider the alternative. A standard medium box used for plates risks breakage because the walls are thinner and there are no cell dividers to prevent pieces from hitting each other. A single broken set of china is worth more than the difference in box cost for an entire kitchen pack. Dish packs also load more efficiently because the cell dividers allow more plates to be safely packed per box.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">The Wardrobe Box — Ottawa's Best Moving Supply Investment</h3>
            <p>For Ottawa residents with significant hanging clothing — work clothes, formal wear, seasonal coats — wardrobe boxes are the single best supply investment in the move. Clothing goes directly from the closet rod into the wardrobe box on its hanger, travels hanging (not folded or crammed), and hangs again in the new closet within minutes of arrival. For dry-clean-only items, work suits, and formal wear, wardrobe boxes eliminate the dry cleaning trip that inevitably follows a move where clothing was folded into regular boxes.</p>
            <p>Need professional packing in addition to supplies? See our <Link href="/services/packing-services" className="text-[#C5A572] hover:underline">packing services</Link> page. Ready to book your Ottawa move? See our <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving</Link> service.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Moving Supplies FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 pt-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ShoppingCart className="h-10 w-10 text-[#C5A572] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Order Moving Supplies in Ottawa</h2>
          <p className="text-white/65 mb-8 max-w-xl mx-auto">Boxes, packing paper, bubble wrap, wardrobes, dish packs — delivered anywhere in Ottawa. Order today for next-day delivery.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:6136004000"><Button className="bg-[#C5A572] text-[#1A2332] font-bold"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
            <Link href="/book"><Button variant="outline" className="text-white border-white/30 bg-white/10">Book a Move Too <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
