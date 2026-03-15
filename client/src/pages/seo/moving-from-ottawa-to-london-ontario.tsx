import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "How much does it cost to move from Ottawa to London Ontario?", a: "Ottawa to London Ontario is approximately 590 km. A 1-bedroom apartment runs $1,700–$2,600. A 2-bedroom home is $2,400–$3,700. A 3-bedroom home runs $3,200–$5,200. Written quote provided after full inventory review." },
  { q: "How long does the Ottawa to London Ontario move take?", a: "The drive is approximately 5.5–6 hours via Highway 401 west. A typical 2-bedroom move takes 12–16 hours total, or we can split loading (Day 1) and delivery (Day 2) for larger homes." },
  { q: "Why are people moving from Ottawa to London?", a: "London Ontario is home to Western University and Fanshawe College — drawing academics and researchers. It's also a growing healthcare hub, insurance industry centre, and offers significantly lower housing costs than the GTA, Ottawa, and most major Ontario cities." },
  { q: "Do you deliver to surrounding London area communities?", a: "Yes — we serve St. Thomas, Strathroy, Tillsonburg, Woodstock, Ingersoll, and the broader southwestern Ontario region. If you're within London's commuter belt, we deliver there." },
  { q: "Can you move a piano from Ottawa to London Ontario?", a: "Yes. We use proper piano dollies, floor protection, and securing straps for upright and grand piano transport. Please note pianos on your inventory quote so we can bring the proper equipment." },
];

export default function MovingFromOttawaToLondonOntario() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving from Ottawa to London Ontario | Ottawa London Movers | Prestige Moving</title>
        <meta name="description" content="Moving from Ottawa to London Ontario? Prestige Moving handles full-service Ottawa-London relocation — packing, Hwy 401 transport, and London delivery. 5.0★ rated. (613) 600-4000." />
        <meta name="keywords" content="moving from Ottawa to London Ontario, Ottawa to London movers, Ottawa London moving company, long distance movers Ottawa southwestern Ontario" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-ottawa-to-london-ontario" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-from-ottawa-to-london-ontario", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa → London Ontario Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving from Ottawa to London Ontario — Long-Distance Movers</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa to London Ontario is a 590 km journey across southern Ontario. Prestige Moving handles every stage — Ottawa loading, Highway 401 transport, and London delivery with professional care.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["~590 km via Hwy 401", "One or Two Day Move", "Insured Transport", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ottawa to London Ontario — Southwestern Ontario's University City</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>London, Ontario sits in the heart of southwestern Ontario — equidistant from Toronto and Windsor, surrounded by some of Canada's most productive farmland. It's a city of substantial size (population ~500,000) with a character distinct from the GTA — a genuine city feel without the density pressures, cost extremes, or congestion of Toronto.</p>
            <p>Western University and Fanshawe College together draw significant academic and research talent, and London's healthcare sector — anchored by London Health Sciences Centre and St. Joseph's Health Care — is one of the largest in Canada outside major metro areas. These institutions draw Ottawa public health professionals, academics, and researchers regularly.</p>
            <p>The Ottawa to London move follows Highway 401 straight across — a familiar, reliable route for our crews. We know the route in all seasons and can handle loading and delivery within the same day or over two days depending on home size and scheduling preference.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What's Included</h3>
              <div className="space-y-2">
                {["Ottawa professional loading crew", "Full packing or fragile-item packing", "Blanket-wrap furniture protection", "Highway 401 transport to London", "London and surrounding area delivery", "Piano and specialty item capability"].map(item => (
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
                <div className="flex justify-between"><span>Distance</span><span className="text-white font-medium">~590 km</span></div>
                <div className="flex justify-between"><span>Drive Time</span><span className="text-white font-medium">~5.5–6 hours</span></div>
                <div className="flex justify-between"><span>Move Format</span><span className="text-white font-medium">1 or 2 days</span></div>
                <div className="flex justify-between"><span>1BR Starting Rate</span><span className="text-[#C5A572] font-medium">From ~$1,700</span></div>
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
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Move Ottawa to London Ontario?</h2>
          <p className="text-white/70 mb-6">Get a written quote for your full Ottawa-London move. Same crew, same quality, any Ontario destination.</p>
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
