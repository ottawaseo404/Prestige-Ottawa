import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "How much does it cost to move from Ottawa to Toronto?", a: "An Ottawa-to-Toronto move for a 1-bedroom apartment typically starts at $1,400–$2,000. A 2-bedroom home runs $2,000–$3,200 and a 3-bedroom home $2,800–$4,500. Final pricing depends on inventory volume, packing needs, and access conditions. We provide a written quote after a full inventory review." },
  { q: "How long does the Ottawa to Toronto move take?", a: "The drive from Ottawa to Toronto is approximately 450 km via Highway 401 — about 4.5 hours under normal conditions. Total moving day time including loading and unloading typically ranges from 10–14 hours. For larger homes, we may schedule loading one day and delivery the next." },
  { q: "Do you pack for Ottawa to Toronto moves?", a: "Yes. We offer full professional packing for long-distance moves, partial packing (just fragile or specialty items), or unpacking at destination. Packing materials — boxes, paper, bubble wrap, wardrobe boxes — are available. Full packing is strongly recommended for long-haul moves to protect items in transit." },
  { q: "Can I get storage if my Toronto place isn't ready?", a: "Absolutely. We have a network of secure storage facilities in Ottawa and can coordinate Toronto-side storage as well. If your move-in date doesn't align, we hold your goods safely and deliver when you're ready." },
  { q: "Is Prestige Moving licensed for interprovincial moves?", a: "Yes. All Ottawa-to-Toronto moves are fully insured and operate under proper commercial licensing for interprovincial transport. Your belongings are covered throughout the full route." },
];

export default function MovingFromOttawaToToronto() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving from Ottawa to Toronto | Ottawa Toronto Movers | Prestige Moving</title>
        <meta name="description" content="Moving from Ottawa to Toronto? Prestige Moving provides full-service Ottawa-Toronto relocation — packing, transport, and Toronto delivery. 5.0★ rated. Call (613) 600-4000." />
        <meta name="keywords" content="moving from Ottawa to Toronto, Ottawa to Toronto movers, Ottawa Toronto moving company, long distance movers Ottawa, interprovincial movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-ottawa-to-toronto" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-from-ottawa-to-toronto", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa → Toronto Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving from Ottawa to Toronto — Full-Service Long-Distance Movers</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa to Toronto is one of Ontario's most-travelled moving routes. Whether you're relocating for a private-sector career, returning to the GTA, or following family, Prestige Moving handles the complete journey — from your Ottawa address to your Toronto front door.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["~450 km via Hwy 401", "Full Packing Available", "Insured Long-Distance Transport", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Why Ottawa Residents Move to Toronto</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>The Ottawa-to-Toronto corridor moves thousands of people annually. Public servants transitioning to the private sector, graduates heading to Canada's financial and tech hub, and families reuniting all make this journey. The route follows Highway 417 west, connecting to the 401 through Kingston — one of Canada's busiest and most well-established moving corridors.</p>
            <p>Toronto's draw is undeniable: the country's largest job market, Canada's most diverse urban centre, and access to industries that simply don't exist at Ottawa's scale — finance, entertainment, fashion, and global corporate headquarters. For many Ottawa residents, the move to Toronto represents a career pivot or the next stage of professional growth.</p>
            <p>The most common Toronto destinations for Ottawa movers include downtown condos in the Entertainment District, Liberty Village, and Distillery District, as well as suburban homes in Scarborough, North York, Mississauga, and Etobicoke. We've completed moves to every Toronto neighbourhood and many surrounding cities in the GTA.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What's Included</h3>
              <div className="space-y-2">
                {["Ottawa-side loading and logistics", "Full or partial packing options", "Blanket-wrapped furniture protection", "Secure transport via Highway 401", "Toronto delivery with furniture placement", "Wardrobe boxes, specialty item handling"].map(item => (
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
                <div className="flex justify-between"><span>Distance</span><span className="text-white font-medium">~450 km</span></div>
                <div className="flex justify-between"><span>Drive Time</span><span className="text-white font-medium">~4.5 hours</span></div>
                <div className="flex justify-between"><span>Move Duration</span><span className="text-white font-medium">10–14 hours total</span></div>
                <div className="flex justify-between"><span>1BR Starting Rate</span><span className="text-[#C5A572] font-medium">From ~$1,400</span></div>
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
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Move Ottawa to Toronto?</h2>
          <p className="text-white/70 mb-6">Get a written quote for your full Ottawa-Toronto relocation. We handle the route every week.</p>
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
