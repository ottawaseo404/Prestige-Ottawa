import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, Star, ArrowRight, ChevronDown, CheckCircle2, ChevronRight,
  Package, MapPin, ShoppingCart, Layers, Truck, Award, FileText, Shield
} from "lucide-react";
import fleetImg from "@assets/prestige-fleet_1771975522124.webp";

const TOC_ITEMS = [
  { id: "how-many-boxes",         title: "How Many Boxes Do You Need?" },
  { id: "types-of-boxes",         title: "Types of Moving Boxes" },
  { id: "packing-supplies-list",  title: "Complete Packing Supplies List" },
  { id: "where-to-buy",           title: "Where to Buy in Ottawa" },
  { id: "free-boxes-ottawa",       title: "Free Moving Boxes in Ottawa" },
  { id: "professional-packing",   title: "Professional Packing Service" },
  { id: "packing-tips",           title: "Packing Tips from Our Crew" },
  { id: "faq",                    title: "FAQ" },
];

const BOX_COUNTS: { home: string; small: number; medium: number; large: number; wardrobe: number; total: string }[] = [
  { home: "Bachelor / Studio",         small: 10, medium: 8,  large: 4,  wardrobe: 1, total: "20–25" },
  { home: "1-Bedroom Apartment",        small: 15, medium: 10, large: 5,  wardrobe: 2, total: "30–35" },
  { home: "2-Bedroom Apartment",        small: 20, medium: 15, large: 8,  wardrobe: 3, total: "45–55" },
  { home: "2-Bedroom House",            small: 25, medium: 20, large: 10, wardrobe: 3, total: "55–65" },
  { home: "3-Bedroom House",            small: 35, medium: 28, large: 15, wardrobe: 4, total: "75–90" },
  { home: "4-Bedroom House",            small: 45, medium: 35, large: 20, wardrobe: 5, total: "100–120" },
];

const BOX_TYPES = [
  { name: "Small Box (1.5 cu. ft.)",       size: "~38 × 30 × 41 cm", bestFor: "Books, canned goods, small appliances, tools, CDs, DVDs", weight: "Max 25 kg when packed", tip: "The most important rule of moving: books go in small boxes only. A medium box of books will be too heavy for your movers and will stress the box seams." },
  { name: "Medium Box (3.0 cu. ft.)",      size: "~46 × 36 × 36 cm", bestFor: "Pots and pans, small electronics, toys, office supplies, clothing (folded)", weight: "Max 25 kg when packed", tip: "The workhorse of any move. Most of your kitchen and office contents will fit in medium boxes." },
  { name: "Large Box (4.5 cu. ft.)",       size: "~46 × 46 × 61 cm", bestFor: "Pillows, comforters, towels, light bulky items, lampshades", weight: "Max 25 kg when packed — keep large boxes light", tip: "Large boxes are for light, bulky items only. A large box full of heavy items is a back injury risk for your movers and a damage risk for your belongings." },
  { name: "Wardrobe Box (10–15 cu. ft.)",  size: "~51 × 51 × 125 cm", bestFor: "Hanging clothing, suits, dresses, coats", weight: "Varies — typically 15–20 kg", tip: "Wardrobe boxes are the most efficient way to move hanging clothing — they go in, hang, and come out wrinkle-free. Most Ottawa movers bring a few to every move." },
  { name: "Dish / Cell Box",               size: "Various",           bestFor: "Plates, bowls, glasses, stemware", weight: "Max 20 kg when packed", tip: "Cell boxes have internal dividers that individually protect dishes. Far more secure than wrapping dishes in paper in a regular box." },
  { name: "Mirror / Picture Box",          size: "Custom / adjustable", bestFor: "Framed artwork, mirrors, glass-topped furniture", weight: "Varies", tip: "Telescoping mirror boxes adjust to fit almost any mirror or framed piece. Essential for any glass-fronted artwork or oversized mirrors in Ottawa heritage homes." },
  { name: "TV Box",                        size: "Various flat-panel sizes", bestFor: "Flat-screen televisions", weight: "Varies by TV size", tip: "Original TV box is best. If unavailable, professional TV boxes are sized by screen diagonal. A padded, properly-sized TV box is the only safe way to move a flat-screen." },
  { name: "File Box",                      size: "~37 × 37 × 26 cm (letter/legal)", bestFor: "Hanging file folders, legal documents, medical records", weight: "Max 15 kg when packed", tip: "File boxes maintain hanging file systems during transport. Ideal for professional document moves and estate cleanouts." },
];

const SUPPLIES = [
  { category: "Protection & Cushioning", items: [
    { name: "Packing Paper (newsprint)", qty: "3–5 kg for a 2-bedroom", use: "Primary wrap for dishes, kitchen items, and fragile objects" },
    { name: "Bubble Wrap", qty: "3–5 m for fragile items", use: "Secondary wrap for electronics, art glass, and fragile collectibles" },
    { name: "Moving Blankets / Furniture Pads", qty: "10–20 per move", use: "Wrap furniture, appliances, mirrors, and artwork for transport" },
    { name: "Foam Corner Protectors", qty: "1 pack", use: "Protect furniture corners and picture frame corners during loading" },
  ]},
  { category: "Sealing & Labelling", items: [
    { name: "Packing Tape (2-inch, heavy duty)", qty: "5–8 rolls for a 2-bedroom", use: "Box sealing — use quality tape, not dollar-store brands that fail under weight" },
    { name: "Tape Dispenser / Gun", qty: "1 per packer", use: "Makes taping dramatically faster. A tape gun is worth $10 for a single move." },
    { name: "Permanent Markers (thick)", qty: "1 pack", use: "Label every box on the top and two sides with room and contents" },
    { name: "Coloured Sticker Labels", qty: "1 pack per room colour", use: "Colour-code by destination room — saves enormous time during unloading" },
  ]},
  { category: "Specialty Items", items: [
    { name: "Stretch Wrap / Plastic Shrink Wrap", qty: "1–2 rolls", use: "Wrap around dresser drawers to keep them closed; wrap bundles of items together" },
    { name: "Mattress Bags", qty: "1 per mattress", use: "Protect mattresses from dirt, moisture, and damage during transport and storage" },
    { name: "Sofa Covers / Couch Bags", qty: "1 per sofa", use: "Clear plastic bags protect upholstered furniture from rain and dirt during loading" },
    { name: "Wardrobe Boxes", qty: "1 per 60–80 hanging items", use: "Maintain hanging clothing wrinkle-free during transport" },
  ]},
  { category: "Tools & Utilities", items: [
    { name: "Box Cutter / Utility Knife", qty: "1–2", use: "Opening boxes on arrival — much safer and faster than scissors" },
    { name: "Ziplock Bags (assorted)", qty: "1 box", use: "Hardware from disassembled furniture — tape bag directly to the furniture piece" },
    { name: "Rubber Bands", qty: "1 bag", use: "Bundle cords, cables, and small items together" },
    { name: "Labels for Hardware", qty: "Self-adhesive labels", use: "Label every bag of screws and bolts with the piece of furniture it belongs to" },
  ]},
];

const WHERE_TO_BUY = [
  { store: "Home Depot Ottawa", locations: "Multiple (Merivale, Baseline, St. Laurent)", pros: "Wide selection of box sizes, moving blankets, tape. Bulk pricing available.", cons: "Higher per-box cost vs. buying pre-bundled kits." },
  { store: "U-Haul Ottawa (supplies)", locations: "Merivale Rd & Colonnade Rd area", pros: "Full moving supply inventory. Bundle discounts on kits.", cons: "Can't return unused boxes at all locations." },
  { store: "Staples Ottawa", locations: "Multiple Ottawa locations", pros: "Good for packing tape, paper, and document/file boxes.", cons: "Limited furniture protection supplies." },
  { store: "IKEA Ottawa (Pinecrest)", locations: "2685 Iris St, Ottawa", pros: "Moving boxes, bin bags, and furniture protection at low cost.", cons: "Must pick up in-store — not available online for moving day delivery." },
  { store: "Costco Ottawa", locations: "Pinecrest & Ottawa South", pros: "Excellent bulk pricing on boxes and tape. Best value per box.", cons: "Box sizes limited. Membership required." },
  { store: "Prestige Moving (supplies add-on)", locations: "Delivered with your move", pros: "We can bring professional-grade boxes, blankets, and tape with our crew. No extra shopping trip needed.", cons: "Best arranged at booking — not same-day availability." },
];

const FAQS = [
  { q: "How many moving boxes do I need for a 2-bedroom home in Ottawa?", a: "A typical Ottawa 2-bedroom home requires 45–65 boxes: approximately 20–25 small boxes (books, kitchen, bathroom), 15–18 medium boxes (clothing, office, general), 8–10 large boxes (pillows, bulky light items), and 3 wardrobe boxes for hanging clothing. These are guidelines — heavily decorated homes with large book collections or extensive kitchens may need more." },
  { q: "What is the cheapest way to get moving boxes in Ottawa?", a: "The cheapest moving boxes in Ottawa are free ones. Ottawa liquor board (LCBO) stores often have strong boxes available. Wine and liquor boxes are double-walled and excellent for kitchen and breakable items. Grocery stores (Loblaws, No Frills) frequently have banana boxes and other food-grade cardboard available for free behind the store. Costco members can get flat-rate bulk boxes at excellent pricing. For free used boxes, Kijiji Ottawa has an active 'free moving boxes' category — people who've just moved often give their boxes away immediately after unpacking." },
  { q: "Where can I get free moving boxes in Ottawa?", a: "Best sources for free moving boxes in Ottawa: LCBO stores (ask at the back), Costco (free cardboard cutting area), grocery stores (ask at the service desk), Facebook Marketplace (search 'free moving boxes'), Kijiji Ottawa (free section), and Buy Nothing Ottawa Facebook groups. Moving box pickups go fast on these platforms — check daily in the weeks leading up to your move." },
  { q: "How much does a full set of moving supplies cost in Ottawa?", a: "A complete packing supply kit for a 2-bedroom Ottawa move typically costs $150–$300 at retail prices: 50–60 boxes ($100–$180), packing paper ($20–$30), tape (4–6 rolls, $20–$25), bubble wrap ($15–$25), and miscellaneous supplies ($15–$25). You can reduce this by 50–60% by sourcing free boxes and buying remaining supplies at Costco bulk pricing." },
  { q: "What boxes should I use for books when moving in Ottawa?", a: "Small boxes only — always. Books are extremely heavy per volume. A large box filled with books can weigh 40+ kg, which risks box failure and back injuries for your movers. The rule for Ottawa (and everywhere else): books always go in small boxes. Even small boxes of books should be no more than two-thirds full to stay within a safe carrying weight." },
  { q: "Should I buy new or used moving boxes?", a: "For Ottawa moves of any significant size, new boxes provide more consistent quality and stack more predictably in the truck. Used boxes vary in condition — collapsed corners, weakened seams, and moisture damage reduce their load capacity. If using used boxes, inspect each one carefully and reject any that show soft spots, discolouration (moisture), or compromised seams. Used boxes are fine for non-fragile, lightweight items." },
  { q: "Does Prestige Moving provide boxes and packing supplies?", a: "Yes. We can bring professional-grade moving boxes, packing paper, tape, and moving blankets with our crew as an add-on to your Ottawa move booking. This eliminates the shopping trip and ensures you have quality, right-sized supplies on moving day. Ask about our supply package when booking." },
  { q: "What size of moving box should I use for dishes?", a: "Dishes should go in cell (divided) boxes specifically designed for dishware, or in small/medium boxes heavily packed with packing paper between each piece. Never use large boxes for dishes — the weight becomes unmanageable and stacking multiple pieces of dishware without individual wrapping is a recipe for breakage. Dish pack boxes with individual cells are the gold standard for Ottawa kitchen moves." },
];

export default function MovingBoxesPackingSuppliesOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Moving Boxes & Packing Supplies in Ottawa (2026 Complete Guide)",
    "description": "How many moving boxes you need, every type of packing supply explained, where to buy in Ottawa, and how to get free boxes. From Prestige Moving.",
    "author": { "@type": "Organization", "name": "Prestige Moving" },
    "url": "https://prestigemoving.ca/moving-boxes-packing-supplies-ottawa",
    "datePublished": "2026-01-01",
    "dateModified": "2026-03-01"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } }))
  };

  return (
    <>
      <Helmet>
        <title>Moving Boxes & Packing Supplies Ottawa (2026 Guide) | Prestige Moving</title>
        <meta name="description" content="Complete Ottawa guide to moving boxes and packing supplies — how many you need by home size, every supply type explained, where to buy, and where to find free boxes in Ottawa." />
        <meta name="keywords" content="moving boxes Ottawa, packing supplies Ottawa, where to buy moving boxes Ottawa, free moving boxes Ottawa, how many boxes moving Ottawa, packing materials Ottawa, moving supplies Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-boxes-packing-supplies-ottawa" />
        <meta property="og:title" content="Moving Boxes & Packing Supplies Ottawa (2026 Complete Guide)" />
        <meta property="og:description" content="How many boxes you need, what supplies to buy, where to find free boxes in Ottawa — the complete guide." />
        <meta property="og:url" content="https://prestigemoving.ca/moving-boxes-packing-supplies-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />
      <div className="min-h-screen bg-white">

        {/* HERO */}
        <section className="relative h-[460px] flex items-end pb-16">
          <img src={fleetImg} alt="Moving boxes and packing supplies Ottawa" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#0d1620]/82" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <Package className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Ottawa Packing Guide · Updated 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 max-w-3xl leading-tight">Moving Boxes &amp; Packing Supplies in Ottawa</h1>
            <p className="text-lg text-white/70 max-w-xl mb-8">How many boxes you actually need, every supply type explained, where to buy in Ottawa, and how to get free boxes — the complete guide.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">Book Your Ottawa Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-[#1A2332] py-5">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "20–25",  label: "Boxes: Studio / Bachelor" },
              { value: "45–65",  label: "Boxes: 2-Bedroom Home" },
              { value: "75–90",  label: "Boxes: 3-Bedroom House" },
              { value: "Free",   label: "Boxes Available in Ottawa" },
            ].map(({ value, label }, i) => (
              <div key={i}>
                <div className="text-xl font-bold text-[#C5A572]">{value}</div>
                <div className="text-white/50 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="xl:flex gap-12 items-start">
            <TableOfContents items={TOC_ITEMS} />

            <div className="flex-1 min-w-0 space-y-20">

              {/* HOW MANY BOXES */}
              <section id="how-many-boxes" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Layers className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Box Count by Home Size</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">How Many Moving Boxes Do You Need?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The most common question Ottawa movers hear before every move. The answer depends on your home size, how much you've accumulated, and how aggressively you declutter before the move. The estimates below reflect a typical Ottawa home at each size — furnished with normal household contents and an average level of accumulation.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Important: these numbers assume you pack everything. If you're doing a partial pack (movers wrap furniture and you've pre-packed boxes), your box count may vary. And always buy 10–15% more than your estimate — running out of boxes on packing day is one of the most common and easily avoided moving mistakes.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#1A2332] text-white">
                        <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Home Size</th>
                        <th className="text-center px-4 py-3 font-semibold">Small Boxes</th>
                        <th className="text-center px-4 py-3 font-semibold">Medium Boxes</th>
                        <th className="text-center px-4 py-3 font-semibold">Large Boxes</th>
                        <th className="text-center px-4 py-3 font-semibold">Wardrobe</th>
                        <th className="text-center px-4 py-3 rounded-tr-xl font-semibold text-[#C5A572]">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {BOX_COUNTS.map(({ home, small, medium, large, wardrobe, total }, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-4 py-3 font-medium text-[#1A2332]">{home}</td>
                          <td className="px-4 py-3 text-center text-gray-600">{small}</td>
                          <td className="px-4 py-3 text-center text-gray-600">{medium}</td>
                          <td className="px-4 py-3 text-center text-gray-600">{large}</td>
                          <td className="px-4 py-3 text-center text-gray-600">{wardrobe}</td>
                          <td className="px-4 py-3 text-center font-bold text-[#C5A572]">{total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl text-sm text-blue-800">
                  <strong>Ottawa Packing Tip:</strong> Buy 10–15% more boxes than your estimate. Leftover boxes are easily returned or passed on to neighbours. Running out of boxes the night before your move means a last-minute store run at full retail price.
                </div>
              </section>

              {/* BOX TYPES */}
              <section id="types-of-boxes" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Package className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Box Types Explained</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Types of Moving Boxes — What Each One Is For</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Not all moving boxes are the same. Using the right box for the right contents protects your belongings and makes your move significantly more efficient. Here's every standard box type and what it's best suited for:
                </p>
                <div className="space-y-4">
                  {BOX_TYPES.map(({ name, size, bestFor, weight, tip }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div className="font-bold text-[#1A2332] text-base">{name}</div>
                        <div className="text-xs text-gray-400 shrink-0">{size}</div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2 mb-3 text-xs">
                        <div><span className="font-medium text-gray-600">Best for: </span><span className="text-gray-500">{bestFor}</span></div>
                        <div><span className="font-medium text-gray-600">Weight limit: </span><span className="text-gray-500">{weight}</span></div>
                      </div>
                      <div className="flex gap-2 items-start p-3 rounded-lg bg-[#C5A572]/8 border border-[#C5A572]/15">
                        <Award className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                        <p className="text-gray-600 text-sm leading-relaxed">{tip}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SUPPLIES LIST */}
              <section id="packing-supplies-list" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <FileText className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Complete Supply List</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Complete Ottawa Moving Packing Supplies List</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Beyond boxes, a complete Ottawa move requires the right combination of protective materials, sealing supplies, and organizational tools. Use this list to make sure you don't arrive on packing day missing a critical supply.
                </p>
                <div className="space-y-6">
                  {SUPPLIES.map(({ category, items }, i) => (
                    <div key={i} className="rounded-xl border border-gray-200 overflow-hidden">
                      <div className="bg-[#1A2332] px-5 py-3">
                        <div className="font-bold text-white text-sm">{category}</div>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {items.map(({ name, qty, use }, j) => (
                          <div key={j} className="px-5 py-3 grid sm:grid-cols-3 gap-2">
                            <div className="font-medium text-[#1A2332] text-sm">{name}</div>
                            <div className="text-gray-400 text-xs">{qty}</div>
                            <div className="text-gray-500 text-xs">{use}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* WHERE TO BUY */}
              <section id="where-to-buy" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <ShoppingCart className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Ottawa Stores</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Where to Buy Moving Boxes and Supplies in Ottawa</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Every major hardware and retail chain in Ottawa carries moving supplies. The price difference between stores is significant — knowing where to shop for each category of supply can save you $50–$100 on a typical Ottawa move.
                </p>
                <div className="space-y-4">
                  {WHERE_TO_BUY.map(({ store, locations, pros, cons }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-base mb-1">{store}</div>
                      <div className="text-gray-400 text-xs flex items-center gap-1 mb-3"><MapPin className="h-3 w-3" /> {locations}</div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="p-3 rounded-lg bg-green-50 border border-green-100">
                          <div className="text-green-800 text-xs font-medium mb-1">Pros</div>
                          <div className="text-green-700 text-xs">{pros}</div>
                        </div>
                        <div className="p-3 rounded-lg bg-gray-100 border border-gray-200">
                          <div className="text-gray-600 text-xs font-medium mb-1">Cons</div>
                          <div className="text-gray-500 text-xs">{cons}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FREE BOXES */}
              <section id="free-boxes-ottawa" className="scroll-mt-24 bg-gray-50/70 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Award className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Zero Cost Options</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Where to Get Free Moving Boxes in Ottawa</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Ottawa has excellent sources for free used moving boxes. The savings are real — replacing 40–50 purchased boxes with free ones saves $60–$120. Check these sources 3–4 weeks before your move and check regularly:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { source: "Facebook Marketplace (Free Section)", detail: "Search 'free moving boxes Ottawa' on Facebook Marketplace. Recent movers post their used boxes immediately after unpacking. Claims happen within hours — check daily." },
                    { source: "Buy Nothing Ottawa Groups", detail: "Ottawa's Buy Nothing Facebook groups are extremely active. Post a request for moving boxes and you'll typically have offers within 24 hours." },
                    { source: "Kijiji Ottawa — Free Section", detail: "The Kijiji Ottawa 'Free' category regularly has moving boxes posted by people who just moved. Search 'boxes' and 'moving boxes' in the Free section." },
                    { source: "LCBO Stores (Liquor Control Board)", detail: "LCBO stores use double-walled boxes that are excellent for kitchen and fragile items. Ask at the service desk or back of store — they're typically available daily." },
                    { source: "Grocery Stores (Loblaws, No Frills, Metro)", detail: "Produce boxes (banana boxes, apple boxes) are available free at most Ottawa grocery stores. Ask at the customer service desk. Best for heavier kitchen items — produce boxes are double-walled." },
                    { source: "Nextdoor App (Ottawa Neighbourhood)", detail: "The Nextdoor app connects you with immediate neighbours. Moving box requests in Ottawa's Nextdoor communities are frequently fulfilled by nearby residents who just moved." },
                  ].map(({ source, detail }, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-xl bg-white border border-gray-100">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1A2332] text-sm mb-1">{source}</div>
                        <div className="text-gray-500 text-sm leading-relaxed">{detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* PROFESSIONAL PACKING */}
              <section id="professional-packing" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Shield className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Skip the Boxes Entirely</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Professional Packing Service — Let Prestige Handle It</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If packing feels overwhelming — or you'd rather spend your time on literally anything else — Prestige Moving's professional packing service in Ottawa is the answer. Our packing crew brings everything: boxes, packing paper, bubble wrap, tape, and moving blankets. We pack your home room by room with a labelling system that makes unpacking logical and efficient.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Professional packing also provides an insurance advantage: items packed by our crew are covered under our commercial cargo insurance. Items you pack yourself are covered at a different claims standard. For homes with significant collections of fragile, valuable, or irreplaceable items, professional packing provides both peace of mind and better claims coverage.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { title: "Full Pack", desc: "We pack every room — kitchen, bedrooms, living areas, bathrooms. You do nothing except point to what goes." },
                    { title: "Partial Pack", desc: "We pack the rooms or item categories you specify — fragile items, kitchen, or specific rooms. You handle the rest." },
                    { title: "Unpacking Service", desc: "We unpack every box at the new home and arrange items in their rooms. Move in to an organized home." },
                  ].map(({ title, desc }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-2">{title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
                <Link href="/services/packing-services">
                  <Button className="bg-[#1A2332] text-white font-semibold">View Packing Services <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </section>

              {/* PACKING TIPS */}
              <section id="packing-tips" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Truck className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Expert Advice</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Ottawa Moving Crew Packing Tips</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our crew sees the results of good and bad packing every day. Here's what makes the biggest difference between a smooth move and a stressful one:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { tip: "Pack books in small boxes only", detail: "Books are the most common packing mistake. A medium box of books weighs 30+ kg and risks box failure. Small boxes — and fill them two-thirds, not to the brim." },
                    { tip: "Label every box on the top AND two sides", detail: "Boxes are stacked in the truck. If you only label the top, you can't see the label until the box is unloaded. Labelling two sides means the destination room is always visible." },
                    { tip: "Fill every box to the top", detail: "Boxes with airspace collapse when stacked in the truck. Fill gaps with packing paper, towels, or clothing. A firm, full box stacks safely — a half-empty box doesn't." },
                    { tip: "Wrap plates vertically, not flat", detail: "Plates stacked flat amplify impact force from above. Wrap plates individually and pack them vertically (like records) in dish boxes. This single technique dramatically reduces dish breakage." },
                    { tip: "Use your own linens as packing material", detail: "Towels, blankets, and clothing are excellent padding for furniture and fragile items. They take up packing space in the boxes anyway — wrapping fragile items in them is free protection." },
                    { tip: "Pack a 'first night' box last", detail: "The last box onto the truck (first off) should contain: toilet paper, coffee maker, phone chargers, one set of sheets, and any medications. This box gets you through the first night without unpacking." },
                  ].map(({ tip, detail }, i) => (
                    <div key={i} className="flex gap-3 p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-7 h-7 rounded-full bg-[#1A2332] flex items-center justify-center shrink-0 text-[#C5A572] text-xs font-bold">{i + 1}</div>
                      <div>
                        <div className="font-bold text-[#1A2332] text-sm mb-1">{tip}</div>
                        <div className="text-gray-500 text-sm leading-relaxed">{detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">FAQ</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-8">FAQ — Moving Boxes &amp; Packing Supplies Ottawa</h2>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button className="w-full flex items-center justify-between gap-4 p-5 text-left hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`button-faq-boxes-${i}`}>
                        <span className="font-semibold text-[#1A2332] text-sm">{q}</span>
                        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      {openFaq === i && <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{a}</div>}
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>

        {/* BOTTOM LINKS */}
        <section className="bg-[#0d1620] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              <div>
                <div className="flex items-center gap-2 mb-5"><FileText className="h-4 w-4 text-[#C5A572]" /><span className="text-[#C5A572] text-xs font-bold uppercase tracking-widest">Related Ottawa Guides</span></div>
                <div className="space-y-1">
                  {[
                    { label: "How to Choose a Moving Company", href: "/how-to-choose-a-moving-company-ottawa" },
                    { label: "Furniture Donation & Disposal Ottawa", href: "/furniture-donation-disposal-ottawa" },
                    { label: "How Much Does Moving Cost", href: "/how-much-does-moving-cost-ottawa" },
                    { label: "Packing Services Ottawa", href: "/services/packing-services" },
                    { label: "Storage Solutions Ottawa", href: "/services/storage-solutions" },
                  ].map(({ label, href }) => (
                    <Link key={href} href={href}><div className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/6 group transition-colors cursor-pointer"><span className="text-white/60 text-sm group-hover:text-white transition-colors">{label}</span><ChevronRight className="h-4 w-4 text-white/20 group-hover:text-[#C5A572] transition-colors" /></div></Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-5"><MapPin className="h-4 w-4 text-[#C5A572]" /><span className="text-[#C5A572] text-xs font-bold uppercase tracking-widest">Ottawa Moving Services</span></div>
                <div className="space-y-1">
                  {[
                    { label: "Best Movers Ottawa", href: "/best-movers-ottawa" },
                    { label: "Residential Movers Ottawa", href: "/residential-movers-ottawa" },
                    { label: "Affordable Movers Ottawa", href: "/affordable-movers-ottawa" },
                    { label: "Local Movers Ottawa", href: "/local-movers-ottawa" },
                    { label: "Moving Company Ottawa", href: "/moving-company-ottawa" },
                  ].map(({ label, href }) => (
                    <Link key={href} href={href}><div className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/6 group transition-colors cursor-pointer"><span className="text-white/60 text-sm group-hover:text-white transition-colors">{label}</span><ChevronRight className="h-4 w-4 text-white/20 group-hover:text-[#C5A572] transition-colors" /></div></Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-5"><Package className="h-4 w-4 text-[#C5A572]" /><span className="text-[#C5A572] text-xs font-bold uppercase tracking-widest">Book Your Move</span></div>
                <p className="text-white/50 text-sm mb-4">We bring the boxes, supplies, and expertise. You just point to what goes.</p>
                <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold w-full mb-3">Book Your Ottawa Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/20 w-full"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#1A2332]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-0.5 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-[#C5A572] fill-[#C5A572]" />)}</div>
            <h2 className="text-3xl font-bold text-white mb-3">Prestige Moving — Ottawa's Most Trusted Mover</h2>
            <p className="text-white/55 mb-8 max-w-lg mx-auto">We bring all the supplies. You just tell us what goes. 5.0 stars · 400+ reviews.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Book Your Move <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

      </div>
      <SharedFooter />
    </>
  );
}
