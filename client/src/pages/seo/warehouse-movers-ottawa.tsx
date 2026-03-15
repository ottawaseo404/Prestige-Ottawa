import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "Can Prestige Moving relocate a full warehouse?", a: "Yes. We have the crew, the equipment, and the trucks to handle full warehouse relocations in Ottawa. We work in coordination with your operations team to move inventory, racking (if disassembly/reassembly is needed), and equipment in a sequence that minimizes operational downtime." },
  { q: "Do you move heavy industrial equipment?", a: "We handle heavy commercial furniture, large filing systems, pallet loads of product, and general industrial equipment. For specialized machinery requiring rigging, crane work, or electrical disconnection, we work alongside your equipment specialists. Please itemize all heavy or specialty items during the quote." },
  { q: "Can you work around our warehouse operations schedule?", a: "Yes. Warehouse moves often need to be phased — one section at a time — to allow ongoing operations to continue. We develop a phased move plan that sequences the relocation to minimize disruption to your receiving, picking, and shipping operations." },
  { q: "What Ottawa industrial areas do you service?", a: "We service all Ottawa industrial zones including Stittsville, Greely, Kanata, Nepean, Gloucester, the East Ottawa industrial parks, and the Gatineau/Hull industrial corridor. If your warehouse is in or around Ottawa, we handle it." },
  { q: "Do you provide after-hours and weekend warehouse moves?", a: "Yes. Many of our warehouse relocation clients prefer weekend moves to avoid business disruption. We provide full crew availability Friday through Sunday for large commercial and warehouse moves." },
];

export default function WarehouseMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Warehouse Movers Ottawa | Industrial Moving Company Ottawa | Prestige Moving</title>
        <meta name="description" content="Ottawa warehouse and industrial movers. We relocate warehouses, storage facilities, and commercial operations across the National Capital Region. Call (613) 600-4000." />
        <meta name="keywords" content="warehouse movers Ottawa, industrial movers Ottawa, warehouse relocation Ottawa, commercial moving Ottawa, storage facility movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/warehouse-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/warehouse-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Warehouse Moving — Ottawa</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Warehouse Movers Ottawa — Industrial Relocation</h1>
            <p className="text-white/70 text-lg mb-8">From distribution centres to storage facilities to light manufacturing spaces, Prestige Moving handles warehouse and industrial relocations across Ottawa and the National Capital Region. Phased moves, weekend availability, and experienced crews for large-scale commercial projects.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Industrial Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Phased Move Capability", "Weekend Availability", "Heavy Equipment Handling", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Warehouse and Industrial Moving in Ottawa</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Warehouse relocations are among the most logistically complex moves in the commercial sector. Unlike office moves where the main concern is business continuity, warehouse relocations must account for inventory management, equipment compatibility at the new facility, loading dock dimensions, floor load ratings, and the sequencing of operations to maintain fulfillment and receiving capabilities throughout the move.</p>
            <p>We approach warehouse relocations as operational projects. Prior to any move, we work with your operations manager to understand your inventory systems, identify priority items, and develop a phased move sequence that allows your facility to remain at least partially operational throughout the transition period.</p>
            <p>Ottawa's industrial real estate is concentrated in several key areas — Kanata North, Stittsville, Nepean, Gloucester (Aviation Parkway), the Carp Road industrial corridor, and Gatineau's industrial sectors. We are familiar with the loading dock configurations, ceiling heights, and access challenges of Ottawa's major industrial parks.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What We Move</h3>
              <div className="space-y-2">
                {["Packaged inventory and palletized goods", "Storage racking (with disassembly/reassembly)", "Office furniture within the warehouse", "Commercial shelving and fixtures", "Light manufacturing equipment", "Loading and material handling equipment"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">Our Process</h3>
              <div className="space-y-2">
                {["Pre-move site assessment", "Phased move planning with ops team", "Numbered inventory tracking", "Loading dock coordination", "Weekend and after-hours availability", "Post-move facility verification"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full text-left px-5 py-4 font-semibold text-[#1A2332] flex justify-between items-center" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}<span className="text-[#C5A572] text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Moving a Warehouse or Industrial Facility in Ottawa?</h2>
          <p className="text-white/70 mb-6">Get an industrial moving quote. We develop a phased plan that keeps your operations running.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Industrial Quote</Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
