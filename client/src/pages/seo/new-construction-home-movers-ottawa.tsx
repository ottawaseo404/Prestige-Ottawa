import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "What's special about moving into a new construction home?", a: "New builds are under construction until close to closing — which means muddy or unpaved driveways, active construction on surrounding lots, potential access restrictions, and incomplete features like elevator lobbies in condo buildings. Our crews are experienced with new build conditions and bring proper equipment (floor runners, furniture pads) to protect your new home from day one." },
  { q: "What if my closing date is delayed?", a: "Closing date delays are common in Ottawa's new construction market. We understand this and have a flexible rebooking policy for new build clients. If your builder pushes the closing date, contact us as early as possible and we'll rebook at no penalty when alternative dates are available." },
  { q: "Can you protect my new floors and walls during the move?", a: "Yes. We bring floor runners, stair carpets, corner guards, and door frame protectors as part of our new build move service. We take extra care at the entry points of new homes to prevent scuffs, scratches, and dents in your brand-new finishes." },
  { q: "What Ottawa new build communities do you service?", a: "We regularly move clients into new construction throughout Ottawa: Barrhaven South (Riverside South, Half Moon Bay, Quinn's Pointe), Kanata (Morgan's Grant, Emerald Meadows), Orleans (Avalon, Mattamy communities), Stittsville, Manotick, and all major Ottawa new subdivision developments." },
  { q: "What if not all my furniture fits in the new home?", a: "New homes, despite their freshness, are sometimes smaller in specific room dimensions than the previous home. We can coordinate delivery of select items to a storage facility if you discover something doesn't fit on moving day. Storage coordination is available as part of your move package." },
];

export default function NewConstructionHomeMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>New Construction Home Movers Ottawa | New Build Moving | Prestige Moving</title>
        <meta name="description" content="Moving into a new construction home in Ottawa? Prestige Moving specializes in new build moves — floor protection, access coordination, and careful handling. (613) 600-4000." />
        <meta name="keywords" content="new construction home movers Ottawa, new build movers Ottawa, moving into new home Ottawa, new house movers Ottawa, Ottawa new development movers" />
        <link rel="canonical" href="https://prestigemoving.ca/new-construction-home-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/new-construction-home-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">New Build Moving — Ottawa</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">New Construction Home Movers Ottawa — Moving Into Your New Build</h1>
            <p className="text-white/70 text-lg mb-8">Moving into a brand-new home in Ottawa deserves a crew that respects it. We bring floor runners, corner protectors, and extra care to every new construction move — protecting your fresh floors, walls, and finishes from the moment we arrive.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Floor Protection Included", "New Build Experience", "Flexible Closing Dates", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Moving Into a New Construction Home in Ottawa</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Ottawa's new construction market is concentrated in rapidly growing suburban communities — Riverside South, Half Moon Bay, Barrhaven South, Kanata's outer edges, Orléans' newer phases, Stittsville, and Manotick. These communities are adding thousands of new homes annually, and the demand for experienced new-build movers has grown with them.</p>
            <p>New construction moves have unique considerations. Active construction sites mean muddy or gravel driveways, limited parking for moving trucks, and sometimes incomplete landscaping that affects truck positioning. Interior new builds often have protective coverings on hardwood, temporary stair protection, and builder-applied protective film on countertops — all of which we work around carefully.</p>
            <p>We also understand Ottawa's new construction closing process — the PDI (pre-delivery inspection), deficiency repairs, and the common experience of a delayed closing. If your closing date shifts, we shift with you — rebooking without penalty when our schedule allows.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">New Build Moving Package</h3>
              <div className="space-y-2">
                {["Floor runners and carpet protection", "Corner guards at doorways and halls", "Furniture blankets and pads", "Extra-careful new build loading", "New site access coordination", "Flexible rebooking for closing delays"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">Ottawa New Build Communities</h3>
              <div className="space-y-2">
                {["Riverside South / Half Moon Bay", "Barrhaven (Quinn's Pointe, Longfields)", "Kanata (Emerald Meadows, Morgan's Grant)", "Orleans (Avalon West, Chapel Hill South)", "Stittsville and North Stittsville", "Manotick and Barrhaven South"].map(item => (
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
          <h2 className="text-2xl font-bold text-white mb-3">Moving Into a New Construction Home in Ottawa?</h2>
          <p className="text-white/70 mb-6">Get a quote for your new build move. We protect your home from the first piece of furniture in the door.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote</Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
