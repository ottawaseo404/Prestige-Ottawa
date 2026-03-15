import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "How much does it cost to move from Ottawa to Kingston?", a: "Ottawa to Kingston is approximately 200 km. A 1-bedroom apartment runs $900–$1,400. A 2-bedroom home is $1,300–$2,000. A 3-bedroom home runs $1,800–$2,800. This is a straightforward half-day or full-day move." },
  { q: "How long does the Ottawa to Kingston move take?", a: "The drive is approximately 2 hours via Highway 401. A 1-bedroom move can be completed in 5–7 hours total. A 2-3 bedroom home takes 7–11 hours, which fits comfortably in a single day." },
  { q: "Why do people move Ottawa to Kingston?", a: "Kingston is home to Queen's University, Royal Military College, Kingston Health Sciences Centre, and a growing tech sector. It's also a popular retirement destination — smaller than Ottawa, historic, and situated on Lake Ontario. Many Ottawa retirees and Queen's-bound academics make this move." },
  { q: "Do you move to areas around Kingston?", a: "Yes — we serve Napanee, Gananoque, Bath, Amherstview, Cataraqui, Frontenac County, and the surrounding area. If you're moving within the Greater Kingston region, we handle it." },
  { q: "Is Ottawa to Kingston considered long-distance?", a: "At 200 km, the Ottawa-Kingston move is on the boundary between local and long-distance. We treat it as a long-distance move with appropriate equipment, insurance coverage, and a written quote — not hourly billing." },
];

export default function MovingOttawaToKingston() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving from Ottawa to Kingston | Ottawa Kingston Movers | Prestige Moving</title>
        <meta name="description" content="Moving from Ottawa to Kingston? Prestige Moving handles the full Ottawa-Kingston relocation — same-day move, professional crew, written quote. 5.0★ rated. (613) 600-4000." />
        <meta name="keywords" content="moving from Ottawa to Kingston, Ottawa to Kingston movers, Ottawa Kingston moving company, movers Ottawa Kingston Ontario" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-ottawa-to-kingston" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-ottawa-to-kingston", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa → Kingston Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving from Ottawa to Kingston — Same-Day Movers</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa to Kingston is a 200 km move that fits comfortably in a single day. We handle the full relocation — from your Ottawa address to your Kingston home — with a professional crew and written flat-rate pricing.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["~200 km / ~2hr Drive", "Same-Day Move", "Written Quote", "5.0★ Rated", "No Hidden Fees"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ottawa to Kingston — A Popular Ontario Corridor</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Kingston is one of Canada's most historically significant cities — home to Canada's first prime minister, one of the country's oldest universities (Queen's, founded 1841), and the Royal Military College. Today it blends academic character, government presence (Correctional Service of Canada, DND), and a growing healthcare sector with a genuinely liveable downtown on the shores of Lake Ontario.</p>
            <p>For Ottawa residents, Kingston often represents retirement, a lifestyle shift, or a move tied to Queen's University — either for themselves or family members. The drive between the two cities on Highway 401 is direct and uneventful, making it one of the simpler long-distance moves we handle.</p>
            <p>We service all Kingston neighbourhoods — downtown, the University District, Sydenham, Strathcona Park, Cataraqui, Bayridge, and surrounding communities including Gananoque and Napanee.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What's Included</h3>
              <div className="space-y-2">
                {["Ottawa-side professional loading", "Packing available (full or fragile)", "Blanket-wrap furniture protection", "Highway 401 direct transport", "Kingston and area delivery", "Furniture placement at destination"].map(item => (
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
                <div className="flex justify-between"><span>Distance</span><span className="text-white font-medium">~200 km</span></div>
                <div className="flex justify-between"><span>Drive Time</span><span className="text-white font-medium">~2 hours</span></div>
                <div className="flex justify-between"><span>Move Duration</span><span className="text-white font-medium">5–11 hours</span></div>
                <div className="flex justify-between"><span>1BR Starting Rate</span><span className="text-[#C5A572] font-medium">From ~$900</span></div>
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
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Move Ottawa to Kingston?</h2>
          <p className="text-white/70 mb-6">Get a flat-rate written quote for your Ottawa-Kingston move. Professional crew, same-day completion.</p>
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
