import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "How much does it cost to move from Ottawa to Hamilton?", a: "Ottawa to Hamilton is approximately 480 km. A 1-bedroom apartment typically runs $1,600–$2,400. A 2-bedroom home is $2,200–$3,500. A 3-bedroom home runs $3,000–$4,800. Final pricing depends on inventory and packing requirements." },
  { q: "How long does it take to move Ottawa to Hamilton?", a: "The drive from Ottawa to Hamilton is approximately 5 hours via Highway 401 west and QEW south. Total moving day time including loading and unloading typically runs 11–15 hours for a 2-bedroom home." },
  { q: "Why are people moving Ottawa to Hamilton?", a: "Hamilton has emerged as one of Canada's most attractive mid-size cities — growing arts scene, proximity to Toronto without Toronto prices, McMaster University's job market, and Hamilton's waterfront revitalization. Ottawa residents priced out of Toronto increasingly choose Hamilton as a GTA alternative." },
  { q: "Do you move to surrounding Hamilton communities?", a: "Yes. We move to Stoney Creek, Ancaster, Dundas, Waterdown, Flamborough, Glanbrook, and the broader Hamilton-Wentworth area. If it's within commuting distance of Hamilton, we deliver there." },
  { q: "Can you move the same day Ottawa to Hamilton?", a: "Same-day service for a 480 km move is not practical — loading, driving, and unloading require a full day minimum. We can schedule the move within days of your request for urgent situations." },
];

export default function MovingFromOttawaToHamilton() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving from Ottawa to Hamilton | Ottawa Hamilton Movers | Prestige Moving</title>
        <meta name="description" content="Moving from Ottawa to Hamilton? Prestige Moving handles full-service Ottawa-Hamilton relocation — professional packing, insured transport, and Hamilton delivery. 5.0★ rated. (613) 600-4000." />
        <meta name="keywords" content="moving from Ottawa to Hamilton, Ottawa to Hamilton movers, Ottawa Hamilton moving company, long distance movers Ottawa Ontario" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-ottawa-to-hamilton" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-from-ottawa-to-hamilton", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa → Hamilton Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving from Ottawa to Hamilton — Long-Distance Movers</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa to Hamilton is a 480 km move across southern Ontario — a one-day relocation handled by Prestige Moving with full packing, insured transport, and Hamilton delivery.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["~480 km via Hwy 401", "One-Day Move", "Insured Transport", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ottawa to Hamilton — Ontario's Rising City</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Hamilton, Ontario — the "Ambitious City" — has undergone a remarkable transformation over the past decade. Once primarily known for its steel industry, Hamilton now boasts a vibrant arts district on James Street North, a thriving restaurant scene, McMaster University's renowned academic and medical community, and rapidly rising real estate values that still trail Toronto and Ottawa.</p>
            <p>For Ottawa residents, Hamilton offers an attractive alternative to Toronto's costs with access to the same GTA employment market. Hamilton is approximately 75 km from Toronto via the QEW — close enough for hybrid commutes, far enough for breathing room and home ownership affordability.</p>
            <p>The Ottawa to Hamilton move follows the familiar Highway 401 corridor westward — a route our crews travel regularly for both individual household moves and corporate relocations.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What's Included</h3>
              <div className="space-y-2">
                {["Ottawa professional loading crew", "Full or partial packing available", "Furniture blanket protection", "Highway 401 / QEW transport", "Hamilton area delivery", "Furniture setup at destination"].map(item => (
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
                <div className="flex justify-between"><span>Distance</span><span className="text-white font-medium">~480 km</span></div>
                <div className="flex justify-between"><span>Drive Time</span><span className="text-white font-medium">~5 hours</span></div>
                <div className="flex justify-between"><span>Move Duration</span><span className="text-white font-medium">11–15 hours total</span></div>
                <div className="flex justify-between"><span>1BR Starting Rate</span><span className="text-[#C5A572] font-medium">From ~$1,600</span></div>
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
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Move Ottawa to Hamilton?</h2>
          <p className="text-white/70 mb-6">Get a written quote for your Ottawa-Hamilton move. Fast booking, professional crew.</p>
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
