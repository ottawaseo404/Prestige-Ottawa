import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, Package, Sofa } from "lucide-react";

const FAQS = [
  { q: "Do you disassemble and reassemble furniture in Ottawa?", a: "Yes — disassembly and reassembly is included in your move at no extra charge. We bring all necessary tools. Beds, sectionals, wardrobes, desks, dining tables, and bookshelves are all handled. If an item requires specialty hardware or manufacturer instructions, we ask that you have those available." },
  { q: "Can you move just one piece of furniture in Ottawa?", a: "Yes. We handle single-item furniture moves — a sofa, a dining table, a bed frame — within Ottawa. These are priced based on the specific items and addresses. Call (613) 600-4000 to discuss a single-item move quote." },
  { q: "How do you protect furniture during a move?", a: "Every item is fully wrapped in quilted moving blankets before it leaves your home. Corners receive extra foam padding. Sofas and upholstered items get stretch-wrap over the blankets for complete protection. Artwork and mirrors get custom wrapping and cardboard edge protection." },
  { q: "Can you move furniture without scratching hardwood floors?", a: "Yes. We use furniture sliders on all hardwood floors, deploy floor runners through all traffic areas, and lift items rather than drag them. Floor protection is standard on every Prestige Moving job." },
  { q: "Do you move antique or valuable furniture?", a: "Yes, but antiques and valuable pieces get our highest-level protection protocol: custom padding, crating for extremely fragile items, and careful handling by senior crew members. Let us know about special pieces when booking so we can plan appropriately." },
];

export default function FurnitureMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Furniture Movers Ottawa | Furniture Moving & Rearranging | Prestige Moving</title>
        <meta name="description" content="Professional furniture movers in Ottawa. Prestige Moving handles full moves, single-item furniture moves, and in-home rearranging with complete blanket wrapping and floor protection. Call (613) 600-4000." />
        <meta name="keywords" content="furniture movers Ottawa, furniture moving Ottawa, furniture rearranging Ottawa, move furniture Ottawa, Ottawa furniture moving company, sofa movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/furniture-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/furniture-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Package className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Furniture Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Furniture Movers Ottawa —<br className="hidden md:block" /> Wrapped, Protected, Placed Right</h1>
            <p className="text-white/70 text-lg mb-8">Every piece of furniture is blanket-wrapped before it leaves your home, protected through transit, and placed exactly where you want it at the destination. Full moves, single-item moves, and in-home rearranging — all covered.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Full Blanket Wrapping", "Disassembly & Reassembly Included", "Floor Protection Standard", "Antique & Valuable Item Handling", "5.0★ Rated"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1A2332] mb-5">What's Included in Every Furniture Move</h2>
              <div className="space-y-3">
                {[
                  "Full quilted blanket wrapping on every piece",
                  "Stretch wrap over blankets for upholstered items",
                  "Corner and edge foam padding for wooden pieces",
                  "Disassembly and reassembly with all hardware retained",
                  "Furniture sliders on hardwood floors throughout",
                  "Floor runners in all high-traffic pathways",
                  "Custom cardboard protection for mirrors and artwork",
                  "Placement and positioning at destination — exactly as directed",
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Furniture We Move in Ottawa</h2>
              <div className="space-y-5 text-gray-700 leading-relaxed text-sm">
                <p>Prestige Moving handles the full spectrum of household furniture — bedroom sets (including king beds, bunk beds, and loft beds requiring full disassembly), sectional sofas and oversized L-shapes that need corner navigation, dining tables and hutches, home office desks and shelving units, and accent furniture of all sizes.</p>
                <p>For larger and more valuable pieces — antique dining sets, heirloom wardrobes, custom built-ins that need disassembly, or piano benches alongside a <Link href="/ottawa-piano-movers" className="text-[#C5A572] hover:underline">piano move</Link> — we plan the protection protocol in advance. Ottawa's mix of older heritage homes and new builds means the path out of the building is often the hardest part, and we assess this before any piece moves.</p>
                <p>In-home furniture rearranging is available as a standalone service or as part of a move. If you're redesigning a room, staging your home for sale, or simply want the sectional on the other wall, we can be there with a crew that brings sliders and handles all the heavy lifting. See our standalone <Link href="/furniture-rearranging-ottawa" className="text-[#C5A572] hover:underline">furniture rearranging service</Link> for details.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Furniture Movers Ottawa — FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Book Ottawa's Furniture Moving Specialists</h2>
          <p className="text-white/65 mb-8">Written quote · All furniture fully wrapped · 5.0★ rated crew</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
