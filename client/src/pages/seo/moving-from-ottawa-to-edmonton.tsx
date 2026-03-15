import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "How much does an Ottawa to Edmonton move cost?", a: "An Ottawa-Edmonton move for a 1-bedroom apartment starts around $3,800–$6,500. A 2-3 bedroom home runs $5,500–$10,000+. Cost depends on total volume, packing services selected, and special item handling." },
  { q: "How long does it take to move from Ottawa to Edmonton?", a: "The distance is approximately 3,500 km via the Trans-Canada. Delivery typically arrives 8–13 days after the Ottawa loading date. We provide a confirmed delivery window when you book." },
  { q: "What's the difference between moving to Calgary vs Edmonton?", a: "Edmonton is approximately 300 km north of Calgary and serves as Alberta's capital. It's home to the University of Alberta, the provincial government, a major healthcare sector, and the energy industry. Ottawa-Edmonton moves are common for public service and healthcare professionals." },
  { q: "Do you provide unpacking services at my Edmonton home?", a: "Yes. We offer full unpacking at destination — furniture placement, box unpacking, and removal of packing materials. This can be arranged as an add-on to your long-distance move package." },
  { q: "Can you move specialty items like pianos or safes Ottawa to Edmonton?", a: "Yes. We have proper equipment and experience for specialty item transport: piano dollies, safe handling straps, custom crating for artwork, and climate-appropriate packing for antiques. Note these items as part of your inventory quote." },
];

export default function MovingFromOttawaToEdmonton() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving from Ottawa to Edmonton | Ottawa Edmonton Movers | Prestige Moving</title>
        <meta name="description" content="Moving from Ottawa to Edmonton? Prestige Moving handles full-service Ottawa-Edmonton relocation. Written quote, professional packing, insured transport. 5.0★ rated. (613) 600-4000." />
        <meta name="keywords" content="moving from Ottawa to Edmonton, Ottawa to Edmonton movers, Ottawa Edmonton moving company, long distance movers Ottawa Alberta" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-ottawa-to-edmonton" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-from-ottawa-to-edmonton", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa → Edmonton Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving from Ottawa to Edmonton — Long-Distance Movers</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa to Edmonton is a 3,500 km cross-Canada journey through Ontario, Manitoba, Saskatchewan, and Alberta. Prestige Moving manages the complete relocation — professional packing in Ottawa, careful transit, and delivery to your Edmonton address.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["~3,500 km", "4 Provinces", "8–13 Day Delivery", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Why Ottawa Residents Move to Edmonton</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Edmonton, Alberta's capital, attracts Ottawa professionals for a variety of reasons — provincial government career opportunities, the University of Alberta's academic and research sector, a strong healthcare industry, and Alberta's distinct financial advantage of no provincial sales tax. For federal public servants transitioning to provincial or private roles, Edmonton is a natural landing point.</p>
            <p>The Ottawa-to-Edmonton route follows the Trans-Canada Highway (Highway 1) from Ottawa through Sudbury, north of Lake Superior, through Winnipeg, Regina, Saskatoon, and up through Edmonton. It's a serious long-haul route that requires proper equipment, experienced drivers, and well-maintained trucks.</p>
            <p>Greater Edmonton's suburbs — St. Albert, Sherwood Park, Leduc, Spruce Grove, and Beaumont — are increasingly popular for Ottawa transplants seeking space and value. We deliver to all Greater Edmonton addresses with the same care as the city core.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What's Included</h3>
              <div className="space-y-2">
                {["Ottawa professional loading crew", "Full packing or fragile-only options", "Specialty item handling available", "Trans-Canada route transport", "Edmonton and Greater Area delivery", "Furniture placement at destination"].map(item => (
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
                <div className="flex justify-between"><span>Distance</span><span className="text-white font-medium">~3,500 km</span></div>
                <div className="flex justify-between"><span>Provinces</span><span className="text-white font-medium">ON, MB, SK, AB</span></div>
                <div className="flex justify-between"><span>Delivery Window</span><span className="text-white font-medium">8–13 days</span></div>
                <div className="flex justify-between"><span>1BR Starting Rate</span><span className="text-[#C5A572] font-medium">From ~$3,800</span></div>
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
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Move Ottawa to Edmonton?</h2>
          <p className="text-white/70 mb-6">Get your written quote today. We handle Ottawa-Edmonton moves with the same care as local moves.</p>
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
