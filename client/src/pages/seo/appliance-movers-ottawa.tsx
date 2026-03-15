import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, Shield, ChevronDown, Zap, Package } from "lucide-react";

const APPLIANCES = [
  { name: "Refrigerators & Freezers", notes: "Emptied 24hrs prior, doors secured, uprighted during transport" },
  { name: "Washers & Dryers", notes: "Drum secured with transit bolts where applicable, hoses disconnected" },
  { name: "Dishwashers", notes: "Water line disconnected, door secured, levelling legs protected" },
  { name: "Stoves & Ranges", notes: "Gas lines handled by licensed technician; we manage the physical move" },
  { name: "Microwaves & Over-Range Units", notes: "Mounting brackets removed, unit blanket-wrapped" },
  { name: "Chest & Upright Freezers", notes: "Defrosted, drained, and wrapped before transit" },
];

const FAQS = [
  { q: "Do you move all types of appliances in Ottawa?", a: "Yes — fridges, washers, dryers, dishwashers, stoves, over-range microwaves, chest freezers, and other large household appliances. Gas line disconnection and reconnection requires a licensed gas technician, which we can coordinate with you in advance." },
  { q: "Should I defrost my fridge before moving?", a: "Yes — refrigerators and freezers should be defrosted and emptied at least 24 hours before moving day. This prevents water damage during transit and makes the unit lighter and easier to move safely. Our team can advise on this during your pre-move confirmation call." },
  { q: "How much does appliance moving cost in Ottawa?", a: "Appliance moves are billed at our standard hourly rates — Premium $155/hr (2 movers + truck), Deluxe $195/hr (3 movers + truck) — with a 3-hour minimum. Single-appliance moves (e.g., just a fridge to another room or a short local address) are quoted based on the specific situation." },
  { q: "Do you move appliances up and down stairs?", a: "Yes. We have stair-climbing dollies and the trained crew to safely move heavy appliances through stairs. Older Ottawa homes often have narrow staircases and tight turns — our team is experienced with all Ottawa-area building configurations." },
  { q: "Can you move a fridge without removing the doors?", a: "In most cases, yes. However, if the fridge is too wide for doorways or hallways, we'll remove the doors (and reattach them at the destination) to get it through. This is assessed during your quote and included at no extra charge." },
];

export default function ApplianceMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Appliance Movers Ottawa | Fridge, Washer & Dryer Moving | Prestige Moving</title>
        <meta name="description" content="Professional appliance movers in Ottawa. Prestige Moving safely relocates fridges, washers, dryers, stoves, and all large appliances. Trained crew, full insurance. Call (613) 600-4000." />
        <meta name="keywords" content="appliance movers Ottawa, appliance moving Ottawa, fridge movers Ottawa, washer dryer movers Ottawa, move appliances Ottawa, Ottawa appliance moving" />
        <link rel="canonical" href="https://prestigemoving.ca/appliance-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/appliance-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Package className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Appliance Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Appliance Movers Ottawa —<br className="hidden md:block" /> Fridges, Washers & All Large Appliances</h1>
            <p className="text-white/70 text-lg mb-8">Heavy appliances require the right equipment and trained technique. Prestige Moving has stair-climbing dollies, appliance straps, and an experienced crew to safely move every appliance in your home — without scratching floors or damaging doorframes.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Stair-Climbing Dollies", "Floor Protection Included", "Full Insurance Coverage", "5.0★ Rated", "No Scratched Floors"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-10 text-center">Appliances We Move in Ottawa</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {APPLIANCES.map(({ name, notes }) => (
              <div key={name} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#1A2332] mb-2 text-sm">{name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Moving Heavy Appliances in Ottawa Homes</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Ottawa's housing stock presents specific challenges for appliance moving. Older homes in <Link href="/movers-in-hintonburg" className="text-[#C5A572] hover:underline">Hintonburg</Link>, <Link href="/residential-movers-the-glebe" className="text-[#C5A572] hover:underline">The Glebe</Link>, and <Link href="/movers-in-sandy-hill" className="text-[#C5A572] hover:underline">Sandy Hill</Link> often have narrow hallways, tight staircase turns, and doorframes that weren't designed for modern appliances. Newer developments in <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link> and <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link> often have wide-open main floors but tight garage access or finished basement stairs. Each building type requires a different approach.</p>
            <p>Our appliance moving crew uses purpose-built equipment: stair-climbing power dollies for heavy fridges and washers going up or down stairs, appliance straps that distribute weight evenly, and floor runners that protect hardwood, tile, and laminate from scuffs and scratches. We assess the best route through your home before moving anything.</p>
            <p>For same-home appliance rearranging (moving a fridge from one wall to another, repositioning a washer/dryer setup), we accommodate these requests as part of a full move or as a standalone call. For standalone appliance moves within Ottawa, call <a href="tel:6136004000" className="text-[#C5A572] hover:underline">(613) 600-4000</a> to discuss availability and pricing.</p>
            <p>See also: <Link href="/preparing-appliances-for-moving-ottawa" className="text-[#C5A572] hover:underline">How to Prepare Appliances for Moving Ottawa</Link> · <Link href="/furniture-movers-ottawa" className="text-[#C5A572] hover:underline">Furniture Movers Ottawa</Link></p>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Appliance Movers Ottawa — FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-white">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Book Ottawa Appliance Movers</h2>
          <p className="text-white/65 mb-8">Written quote · Stair-climbing equipment · 5.0★ rated · No scratched floors</p>
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
