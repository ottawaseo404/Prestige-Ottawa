import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, Shield, Eye,
  Star, ChevronDown, Crown, Package, FileText
} from "lucide-react";
import antiqueHeroImg from "@assets/generated_images/antique_moving_hero.png";

const ANTIQUE_TYPES = [
  { name: "Antique Furniture", desc: "Victorian, Edwardian, Art Deco, Mid-Century Modern. Wood furniture hundreds of years old is irreplaceable. We use cotton padding, acid-free tissue for polished surfaces, and custom crating for exceptionally fragile or valuable pieces." },
  { name: "Fine Art & Paintings", desc: "Oil paintings, watercolours, prints, and originals. Canvas paintings are vulnerable to puncture and surface damage. We use padded artwork crates, acid-free materials, and climate-controlled transport for high-value artwork." },
  { name: "China & Porcelain", desc: "Fine china, porcelain figurines, crystal, and ceramic art. Each piece individually wrapped in acid-free tissue and positioned in custom divided containers. No piece touches another piece during transit." },
  { name: "Clocks & Timepieces", desc: "Grandfather clocks, mantel clocks, pocket watches, and clockwork mechanisms. Pendulums and weights removed and transported separately. Movements protected against vibration damage." },
  { name: "Rugs & Tapestries", desc: "Persian and Oriental rugs, antique tapestries, needlework. Rolled (never folded), wrapped in acid-free paper, and transported flat or in custom roll tubes. No pressure, no creasing." },
  { name: "Silver & Metalwork", desc: "Sterling silver flatware, antique pewter, bronze sculptures, decorative metalwork. Wrapped in anti-tarnish cloth with padding between pieces. Silver never touches other metals in transit." },
  { name: "Books & Documents", desc: "Rare books, first editions, manuscripts, historical documents, maps, and prints. Stored flat, wrapped in acid-free materials, and transported in climate-appropriate conditions away from moisture and light." },
  { name: "Vintage Electronics & Instruments", desc: "Vintage radios, tube amplifiers, antique instruments. Electronics photographed and documented. Musical instruments in original cases or custom padding. Sensitive to temperature and humidity changes." },
];

const PROTECTIONS = [
  { icon: Package, title: "Acid-Free Wrapping", desc: "All antiques wrapped in acid-free tissue paper and archival-grade materials. Standard packing paper contains acids that damage polished wood, silver, and delicate surfaces over time." },
  { icon: Eye, title: "Condition Documentation", desc: "Every antique photographed and condition documented before packing. Pre-existing damage noted. Post-move condition compared against documentation. Full accountability." },
  { icon: Crown, title: "Custom Crating Available", desc: "For extremely fragile or high-value pieces, custom wooden crates built to the exact dimensions of the item. Museum and gallery standard for international shipping." },
  { icon: Shield, title: "Full Replacement Insurance", desc: "Enhanced full-replacement value insurance available for declared antiques and artwork. Basic coverage insufficient for items of significant value — ask our coordinator about antique-specific coverage." },
  { icon: FileText, title: "Detailed Inventory", desc: "Comprehensive written inventory of every item — description, condition, photographs, estimated value. This documentation is critical for insurance purposes and peace of mind." },
  { icon: CheckCircle2, title: "White Glove Placement", desc: "Antiques placed with clean cotton gloves. Furniture set on felt pads. Art hung or positioned at destination. We treat every item as if it's in a museum collection." },
];

const FAQS = [
  { q: "How do you protect antique furniture during a move?", a: "Antique furniture receives different treatment than modern furniture. We use clean cotton padding rather than moving blankets that can catch on carved details. Polished and lacquered surfaces are protected with acid-free tissue paper before padding. Brass hardware is wrapped separately. Mirror panels in antique armoires are removed and transported separately in mirror boxes. Every piece is photographed before packing." },
  { q: "Do you provide appraisal services for antiques?", a: "We don't provide appraisals — that's a separate profession requiring specific expertise and certification. What we do provide is detailed condition documentation (photographs and written descriptions) before and after every antique move. We recommend having valuable antiques appraised by a certified appraiser before moving so your insurance coverage reflects current value." },
  { q: "Can you move large antique grandfather clocks?", a: "Yes. Grandfather clocks require specific disassembly for moving — the weights, pendulum, and movement must be secured or removed, and the case requires careful padding to protect the glass and wood. We photograph the clock mechanism before disassembly and restore it exactly. Grandfather clock moves take approximately 1–2 hours for preparation and packing." },
  { q: "What insurance coverage is available for antiques?", a: "All moves include basic valuation coverage, which is inadequate for antiques. We offer enhanced full-replacement value coverage for declared antiques and artwork. For this to work effectively, you need a current appraisal that establishes the replacement value. Discuss your antique collection with our coordinator when booking so appropriate coverage can be arranged before moving day." },
  { q: "Can you transport fine art and oil paintings?", a: "Yes. Oil paintings and fine art require specialized moving techniques. Paintings should never lie flat against each other or against box walls — they need corner protection, padded artwork crates, and isolation from other items. High-value artwork may benefit from custom crating and climate-controlled vehicles. We've transported paintings worth tens of thousands of dollars for private Ottawa clients and galleries." },
  { q: "Do you move antiques across Canada (long distance)?", a: "Yes. Long-distance antique moving from Ottawa requires additional preparation — double-wrapping, custom crating for fragile pieces, and climate-controlled transport for temperature-sensitive items. See our long distance moving page for details on antique transport across provinces." },
];

export default function AntiqueMoving() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeType, setActiveType] = useState(0);

  return (
    <>
      <Helmet>
        <title>Antique Movers Ottawa | Fine Art & Antique Furniture Moving | Prestige Moving</title>
        <meta name="description" content="Ottawa's antique moving specialists. Fine art, antique furniture, china, grandfather clocks, Persian rugs, and more. Acid-free materials, full insurance, white glove service. Call (613) 600-4000." />
        <meta name="keywords" content="antique movers Ottawa, antique furniture moving Ottawa, fine art movers Ottawa, antique moving company Ottawa, delicate item movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/services/antique-moving" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
      </Helmet>
      <SharedNavigation />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={antiqueHeroImg} alt="Expert antique movers carefully wrapping antique furniture in Ottawa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Acid-Free Materials", "Full Replacement Insurance", "White Glove Service", "Custom Crating"].map(t => (
                <Badge key={t} className="bg-[#C5A572]/20 text-[#C5A572] border border-[#C5A572]/30 text-xs font-semibold">{t}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Antique Movers Ottawa —<br />
              <span className="text-[#C5A572]">Museum-Standard Care for Irreplaceable Items</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Antique furniture, fine art, china, grandfather clocks, Persian rugs, silver, and rare books. Acid-free wrapping, custom crating, full documentation, and full-replacement insurance. The care your irreplaceable pieces deserve.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold text-base px-6">Book Antique Moving <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10 text-base px-6"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Acid-Free Materials Only", "Pre/Post Condition Photos", "Full Replacement Insurance", "Custom Crating Available", "White Glove Placement"].map(t => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" />{t}</span>
          ))}
        </div>
      </div>

      {/* Antique type explorer */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Antiques & Valuables We Move in Ottawa</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Each category of antique has unique vulnerabilities. Click to see how we protect each type.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {ANTIQUE_TYPES.map((type, i) => (
              <button key={i} onClick={() => setActiveType(i)} className={`text-left rounded-xl border p-4 transition-all ${activeType === i ? "border-[#C5A572] bg-[#C5A572]/5 shadow-md" : "border-gray-200 bg-gray-50 hover-elevate"}`}>
                <div className="font-bold text-[#1A2332] text-sm">{type.name}</div>
              </button>
            ))}
          </div>
          <div className="bg-[#1A2332] rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <div className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider mb-2">Selected Category</div>
            <h3 className="text-xl font-bold mb-3">{ANTIQUE_TYPES[activeType].name}</h3>
            <p className="text-white/80 leading-relaxed">{ANTIQUE_TYPES[activeType].desc}</p>
          </div>
        </div>
      </section>

      {/* Protections */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">How We Protect Your Antiques</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Standard moving practices aren't enough for antiques. Here's the additional protection every antique item receives.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROTECTIONS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-100 p-5">
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

      {/* Long-form content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Moving Antiques in Ottawa — What Standard Movers Get Wrong</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>The vast majority of Ottawa moving companies are not equipped to move antiques properly. Standard moving training focuses on efficiency — how to load boxes quickly, how to protect modern furniture with moving blankets. It doesn't cover the specific vulnerabilities of a 200-year-old armoire, the correct way to wrap sterling silver to prevent tarnishing, or why regular packing paper damages lacquered antique surfaces. Moving antiques requires specialized knowledge, materials, and care that goes well beyond standard household moving.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Why Regular Packing Paper Damages Antiques</h3>
            <p>Standard newsprint and packing paper contains acids — the same acids that cause newspaper to yellow and become brittle over time. When you wrap a polished antique surface in regular packing paper, those acids transfer to the finish. On a modern piece of furniture, this is largely inconsequential. On a piece of antique furniture where the finish is part of the value — a 19th-century French polish, a hand-painted lacquer surface, a period-appropriate stain and varnish — acid damage can be irreversible and significant. We use acid-free archival tissue paper for all antique surfaces, and acid-free materials throughout the packing process.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">The Importance of Antique Furniture Insurance</h3>
            <p>Standard moving insurance (basic valuation coverage) pays replacement cost based on current retail market value. For antiques, this is meaningless — a Victorian sideboard cannot be replaced at a furniture store. Proper antique coverage requires full replacement value insurance based on a current appraisal by a certified antique appraiser. We can't insure for more than the declared value, which is why we recommend having significant pieces appraised before your move. Our coordinator will walk you through coverage options when you book.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Ottawa's Antique Community</h3>
            <p>Ottawa has a rich antique community — from the dealers and auction houses in Westboro and the Glebe, to estate sales in Rockcliffe Park and Manor Park, to the Ottawa Antique Market and farmers' market dealers. Many Ottawa antique collectors have pieces that have been in families for generations, acquired from local auctions, or purchased from dealers they've known for years. These pieces deserve the same care whether you're moving across Centretown or across the country.</p>
            <p>For long-distance antique moves from Ottawa, see our <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">long distance moving</Link> page. For piano moving specifically, see our <Link href="/services/piano-moving" className="text-[#C5A572] hover:underline">piano moving</Link> service.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Antique Moving FAQ</h2>
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
          <Crown className="h-10 w-10 text-[#C5A572] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Book Antique Moving in Ottawa</h2>
          <p className="text-white/65 mb-8 max-w-xl mx-auto">Acid-free materials, full documentation, full-replacement insurance, white glove placement. Your irreplaceable pieces in the right hands.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Book Antique Moving <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
