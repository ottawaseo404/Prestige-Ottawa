import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, MapPin } from "lucide-react";

const FAQS = [
  { q: "Do you move from Ottawa to Gatineau?", a: "Yes — Ottawa-to-Gatineau and Gatineau-to-Ottawa moves are a core part of our business. The National Capital Region spans both cities, and thousands of residents move between them every year. We handle the cross-provincial logistics and understand both cities' building types." },
  { q: "Is moving across the Ottawa River more expensive?", a: "Ottawa-Gatineau moves are billed at our standard hourly rate — no inter-provincial surcharge. The drive across a bridge adds minimal time compared to a same-city move. The only additional consideration is any Quebec-specific building access requirements at the destination." },
  { q: "Do you need a Quebec moving permit?", a: "For a personal residential move, no special Quebec permit is required for the moving company. Your belongings don't require any documentation to cross between Ontario and Quebec. The move process is the same as any local Ottawa move." },
  { q: "Do you move from Gatineau to Ottawa?", a: "Yes — reverse moves from Gatineau to Ottawa are equally common and are handled at the same standard rate. Call (613) 600-4000 to get your written quote for a Gatineau-to-Ottawa move." },
  { q: "Which Gatineau neighbourhoods do you serve?", a: "We serve all Gatineau neighbourhoods including Hull, Aylmer, Buckingham, Masson-Angers, and Gatineau proper. We're familiar with the building stock in each area including high-rise condos along Boulevard des Allumettières and older housing in Aylmer." },
];

export default function OttawaToGatineauMovers() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Ottawa to Gatineau Movers | Cross-River Moving | Prestige Moving</title>
        <meta name="description" content="Moving from Ottawa to Gatineau (or Gatineau to Ottawa)? Prestige Moving handles National Capital Region cross-river moves — standard rates, no inter-provincial surcharge. Call (613) 600-4000." />
        <meta name="keywords" content="Ottawa to Gatineau movers, Ottawa Gatineau movers, Gatineau to Ottawa movers, moving Ottawa Gatineau, National Capital Region movers" />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-to-gatineau-movers" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/ottawa-to-gatineau-movers", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <MapPin className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa ↔ Gatineau Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Ottawa to Gatineau Movers —<br className="hidden md:block" /> National Capital Region Specialists</h1>
            <p className="text-white/70 text-lg mb-8">The Ottawa-Gatineau region is one integrated housing market divided by a river. Prestige Moving crosses it every week — no inter-provincial surcharge, same written-quote standard, and full service on both sides of the Ottawa River.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["No Inter-Provincial Surcharge", "Ottawa ↔ Gatineau Both Directions", "Hull · Aylmer · Buckingham", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Moving Between Ottawa and Gatineau</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>The Ottawa-Gatineau National Capital Region is, for practical purposes, a single integrated labour and housing market. Thousands of residents cross the river daily for work — federal public servants, bilingual professionals, and families who live on one side and work on the other. The region's housing price differential between Ontario and Quebec also drives consistent cross-river moving activity: Gatineau has historically offered lower housing prices than comparable Ottawa neighbourhoods, attracting buyers who commute into Ottawa.</p>
            <p>Moving from Ottawa to Gatineau (or the reverse) is, from a logistics standpoint, essentially the same as any local move. The bridges — Alexandra, Portage, Chaudière, Macdonald-Cartier — add 5–10 minutes to the transit time. The move itself follows the same process: written quote, crew arrival, loading, transport, unloading. There is no paperwork for personal residential belongings crossing the provincial border, and Prestige Moving charges no inter-provincial surcharge.</p>
            <p>We serve all Gatineau neighbourhoods: Hull (adjacent to Parliament Hill), the Plateau district, Aylmer along the Ottawa River, Buckingham in the northeast, Masson-Angers, and the city proper. On the Ottawa side, every neighbourhood from <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link> to <Link href="/movers-in-gloucester" className="text-[#C5A572] hover:underline">Gloucester</Link> is covered.</p>
            <p>For longer-distance moves from Gatineau or Ottawa to other Quebec cities (Montreal, Quebec City), see our <Link href="/long-distance-movers-ottawa" className="text-[#C5A572] hover:underline">long-distance moving</Link> service or our <Link href="/ottawa-to-montreal-movers" className="text-[#C5A572] hover:underline">Ottawa to Montreal movers</Link> page.</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Ottawa ↔ Gatineau Movers — FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Book Your Ottawa-Gatineau Move</h2>
          <p className="text-white/65 mb-8">Written quote · No surcharge · 5.0★ rated · Both directions</p>
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
