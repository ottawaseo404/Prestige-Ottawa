import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "How much does it cost to move from Ottawa to Brockville?", a: "Ottawa to Brockville is approximately 130 km. A 1-bedroom apartment typically runs $800–$1,200. A 2-bedroom home is $1,100–$1,700. A 3-bedroom home runs $1,500–$2,400. This is a straightforward same-day move completed in 5–8 hours." },
  { q: "How long does the Ottawa to Brockville move take?", a: "The drive is approximately 90 minutes via Highway 401. A 1-bedroom move takes 4–6 hours total. A 2-3 bedroom home takes 6–9 hours, comfortably within a single day." },
  { q: "Why are people moving from Ottawa to Brockville?", a: "Brockville draws Ottawa residents who want small-city living on the St. Lawrence River with significantly lower housing costs. Retirees, remote workers, and families seeking more space for their dollar are all common profiles. Brockville's historic downtown, waterfront, and proximity to both Kingston and Ottawa make it attractive." },
  { q: "Do you deliver to areas around Brockville?", a: "Yes — we serve Prescott, Gananoque, Kemptville, Merrickville, Smiths Falls, Perth, and the surrounding Leeds-Grenville area. If you're in the Highway 401 corridor between Ottawa and Kingston, we service you." },
  { q: "Can Prestige Moving store items between Ottawa and Brockville?", a: "Yes. If you need storage between your Ottawa departure and Brockville arrival, we can coordinate short-term storage at our Ottawa facility until your Brockville home is ready." },
];

export default function MovingOttawaToBrockville() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving from Ottawa to Brockville | Ottawa Brockville Movers | Prestige Moving</title>
        <meta name="description" content="Moving from Ottawa to Brockville? Prestige Moving handles the full Ottawa-Brockville relocation — same-day move, professional crew, written quote. From $800. (613) 600-4000." />
        <meta name="keywords" content="moving from Ottawa to Brockville, Ottawa to Brockville movers, Ottawa Brockville moving company, movers Ottawa Brockville, Brockville movers" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-ottawa-to-brockville" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-ottawa-to-brockville", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa → Brockville Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving from Ottawa to Brockville — Same-Day Movers</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa to Brockville is a 130 km same-day move along the Highway 401 corridor to the historic St. Lawrence River city. Prestige Moving handles the full relocation — Ottawa loading, 401 transport, and Brockville delivery.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["~130 km / ~90 Min Drive", "Same-Day Move", "Written Quote", "5.0★ Rated", "No Hidden Fees"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ottawa to Brockville — Moving to the St. Lawrence</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Brockville — officially "The City of the 1000 Islands" — sits on the St. Lawrence River approximately 90 minutes southwest of Ottawa. With a population around 22,000, it offers a quality of life and cost-of-living profile that increasingly draws Ottawa residents: waterfront access, a charming historic downtown, excellent schools, and housing costs dramatically lower than Ottawa.</p>
            <p>The Ottawa-to-Brockville move follows Highway 416 south from Ottawa connecting to Highway 401 west — a direct, straightforward route with no significant routing challenges. The move typically completes in a single day regardless of home size.</p>
            <p>We service Brockville itself and the broader Leeds-Grenville region: Prescott, Kemptville, Merrickville, Perth, Smiths Falls, Cardinal, Spencerville, and Gananoque — all within the natural service radius of an Ottawa-to-Brockville moving operation.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What's Included</h3>
              <div className="space-y-2">
                {["Ottawa professional loading crew", "Packing available (full or partial)", "Furniture blanket protection", "Highway 401 direct transport", "Brockville and area delivery", "Furniture placement at destination"].map(item => (
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
                <div className="flex justify-between"><span>Distance</span><span className="text-white font-medium">~130 km</span></div>
                <div className="flex justify-between"><span>Drive Time</span><span className="text-white font-medium">~90 minutes</span></div>
                <div className="flex justify-between"><span>Move Duration</span><span className="text-white font-medium">4–9 hours total</span></div>
                <div className="flex justify-between"><span>1BR Starting Rate</span><span className="text-[#C5A572] font-medium">From ~$800</span></div>
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
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Move Ottawa to Brockville?</h2>
          <p className="text-white/70 mb-6">Get a written quote for your Ottawa-Brockville move. Same day, professional crew.</p>
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
