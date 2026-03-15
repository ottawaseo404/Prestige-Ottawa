import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "How much does it cost to move from Ottawa to Calgary?", a: "Ottawa to Calgary long-distance moves typically range from $3,500–$6,500 for a 1-2 bedroom home and $5,500–$9,000+ for a 3-bedroom home. Volume, packing services, and access conditions affect the final price. We provide written quotes after full inventory review." },
  { q: "How long does the Ottawa to Calgary move take?", a: "The Ottawa-Calgary drive is approximately 3,400 km through Ontario, Manitoba, Saskatchewan, and Alberta. Delivery typically arrives within 7–12 days of loading. We provide a delivery window at the time of booking." },
  { q: "Why are so many people moving Ottawa to Calgary?", a: "Alberta's energy sector, lower provincial taxes, no provincial sales tax, and a booming Calgary economy attract federal workers and Ottawa professionals. Calgary's real estate also offers more space per dollar than comparable Ottawa properties." },
  { q: "Do you offer full packing for the Ottawa to Calgary move?", a: "Yes — full packing, partial packing, and specialty item crating are all available. For a move this distance, professional packing is strongly recommended to protect your belongings over 3,400 km of highway transit." },
  { q: "Is Prestige Moving licensed for cross-provincial moves to Alberta?", a: "Yes. Prestige Moving is licensed and insured for all interprovincial moves across Canada, including Ottawa to Calgary." },
];

export default function MovingFromOttawaToCalgary() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving from Ottawa to Calgary | Ottawa Calgary Movers | Prestige Moving</title>
        <meta name="description" content="Moving from Ottawa to Calgary? Prestige Moving handles full-service Ottawa-Calgary relocation — packing, long-distance transport, and Alberta delivery. 5.0★ rated. (613) 600-4000." />
        <meta name="keywords" content="moving from Ottawa to Calgary, Ottawa to Calgary movers, Ottawa Calgary moving company, long distance movers Ottawa Alberta" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-ottawa-to-calgary" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-from-ottawa-to-calgary", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa → Calgary Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving from Ottawa to Calgary — Long-Distance Movers</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa to Calgary is a 3,400 km cross-Canada move through four provinces. From the nation's capital to Alberta's energy city, Prestige Moving handles every stage of your relocation with professionalism and care.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["~3,400 km via Hwy 1", "4 Provinces", "7–12 Day Delivery Window", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ottawa to Calgary — The Western Move</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Calgary consistently ranks among Canada's fastest-growing cities, attracting professionals from across the country — particularly Ottawa's public service community looking for private sector opportunities. Alberta's no-provincial-sales-tax advantage, lower cost of living relative to major centres, and booming economy in energy, technology, and agriculture make it an appealing destination.</p>
            <p>The Ottawa-to-Calgary route crosses Ontario, Manitoba, Saskatchewan, and Alberta — four provinces over approximately 3,400 km. We transport your household goods via the Trans-Canada Highway (Highway 1), with experienced long-haul drivers who know the route in all seasons.</p>
            <p>Calgary is rapidly expanding outward — suburban communities like Airdrie, Cochrane, Chestermere, and Okotoks all draw Ottawa transplants. We deliver to all Greater Calgary addresses, not just the city proper.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What's Included</h3>
              <div className="space-y-2">
                {["Full Ottawa loading crew", "Professional packing available", "Blanket-wrapped furniture protection", "Trans-Canada route transport", "Calgary and Greater Area delivery", "Delivery window confirmed at booking"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1A2332] rounded-xl p-5">
              <h3 className="font-bold text-white mb-3">Route at a Glance</h3>
              <div className="space-y-2 text-white/70 text-sm">
                <div className="flex justify-between"><span>Distance</span><span className="text-white font-medium">~3,400 km</span></div>
                <div className="flex justify-between"><span>Route</span><span className="text-white font-medium">Trans-Canada Hwy 1</span></div>
                <div className="flex justify-between"><span>Delivery Window</span><span className="text-white font-medium">7–12 days</span></div>
                <div className="flex justify-between"><span>1BR Starting Rate</span><span className="text-[#C5A572] font-medium">From ~$3,500</span></div>
              </div>
              <Link href="/book" className="mt-4 block">
                <Button className="bg-[#C5A572] text-[#1A2332] font-bold w-full">Get Written Quote</Button>
              </Link>
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
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Move Ottawa to Calgary?</h2>
          <p className="text-white/70 mb-6">Get a written quote for your full Ottawa-Calgary move. We handle this route regularly and know it well.</p>
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
