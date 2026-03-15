import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "What are common Ontario to Quebec moves?", a: "The Ottawa-to-Gatineau and Ottawa-to-Montreal corridors are the most active Ontario-Quebec moving routes. We also handle moves from Toronto to Montreal and from other Ontario cities to Quebec destinations." },
  { q: "Is there any paperwork for moving between Ontario and Quebec?", a: "No customs process is required for household goods moving between Canadian provinces. However, you'll need to update your driver's licence, vehicle registration, and provincial health coverage (RAMQ) after establishing Quebec residency, typically within 90 days." },
  { q: "Does Prestige Moving service the Quebec side of the Ottawa-Gatineau region?", a: "Yes. Ottawa and Gatineau together form the National Capital Region. We frequently move clients from Ottawa neighbourhoods to Gatineau communities including Hull, Aylmer, Buckingham, Masson-Angers, and Gatineau City. Cross-river moves are a regular part of our operations." },
  { q: "How much does it cost to move from Ottawa to Montreal?", a: "Ottawa to Montreal is approximately 200 km and typically runs $1,100–$2,200 for a 1-2 bedroom. See our dedicated Montreal to Ottawa page for full details — we move both directions of this route regularly." },
  { q: "Can you move French-Canadian furniture (antiques, armoires) carefully?", a: "Absolutely. Quebec and French-Canadian antique furniture — particularly armoires, buffets, and hand-crafted pieces — gets our special handling treatment: furniture blankets, custom crating when needed, and careful loading to prevent damage." },
];

export default function MovingFromOntarioToQuebec() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving from Ontario to Quebec | Ontario Quebec Movers | Prestige Moving</title>
        <meta name="description" content="Moving from Ontario to Quebec? Prestige Moving handles Ottawa-Gatineau, Ottawa-Montreal, and all Ontario to Quebec interprovincial moves. Written quote. (613) 600-4000." />
        <meta name="keywords" content="moving from Ontario to Quebec, Ontario Quebec movers, Ottawa to Gatineau movers, Ottawa to Montreal movers, interprovincial movers Ontario Quebec" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-ontario-to-quebec" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-from-ontario-to-quebec", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ontario → Quebec Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving from Ontario to Quebec — Ottawa Gatineau and Montreal Movers</h1>
            <p className="text-white/70 text-lg mb-8">Ontario to Quebec is one of the most active interprovincial moving corridors in Canada — with Ottawa and Gatineau separated only by the Ottawa River. Prestige Moving handles cross-river moves, Ottawa to Montreal moves, and all Ontario to Quebec destinations.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Cross-River Moves Available", "Ottawa–Gatineau Specialists", "Montreal Route", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ontario to Quebec — The Most Common Cross-Border Move in Canada</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>The Ontario-Quebec border runs through the heart of the National Capital Region. Ottawa (Ontario) and Gatineau (Quebec) are effectively one city — connected by five bridges across the Ottawa River and sharing a transit system, cultural institutions, and a labour market. Thousands of people move between them annually for work, family, and housing cost reasons.</p>
            <p>Beyond the cross-river move, the Ottawa-to-Montreal corridor is one of Canada's most active — approximately 200 km via Highway 417, it connects the nation's capital to Canada's second-largest city. Montreal draws Ottawa residents for career opportunities in technology, creative industries, academia (McGill, Concordia, UQAM), and Quebec's unique cultural scene.</p>
            <p>We handle all Ontario-to-Quebec moves: Ottawa to Gatineau (same day), Ottawa to Montreal (1 day), Ottawa to Quebec City (1 day), and all Quebec destinations. Bilingual service is available on request.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">Ontario → Quebec Routes</h3>
              <div className="space-y-2">
                {[
                  { route: "Ottawa → Gatineau", dist: "~15 km" },
                  { route: "Ottawa → Hull", dist: "~15 km" },
                  { route: "Ottawa → Montreal", dist: "~200 km" },
                  { route: "Ottawa → Quebec City", dist: "~450 km" },
                  { route: "Ottawa → Aylmer/Chelsea", dist: "~25 km" },
                  { route: "Ontario → Anywhere in QC", dist: "Custom" },
                ].map(r => (
                  <div key={r.route} className="flex justify-between items-center py-1 border-b border-gray-100">
                    <span className="text-gray-700 text-sm">{r.route}</span>
                    <span className="text-[#C5A572] font-medium text-sm">{r.dist}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What's Included</h3>
              <div className="space-y-2">
                {["Ontario-side professional loading", "Packing services available", "Furniture blanket protection", "Cross-river or highway transport", "Quebec address delivery", "Furniture placement at destination"].map(item => (
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
          <h2 className="text-2xl font-bold text-white mb-3">Moving from Ontario to Quebec?</h2>
          <p className="text-white/70 mb-6">Get a written quote for your Ontario-Quebec move. Cross-river to Gatineau or all the way to Montreal.</p>
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
