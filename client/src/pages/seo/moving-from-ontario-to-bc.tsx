import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "How much does it cost to move from Ontario to BC?", a: "Moving from Ontario to BC (Ottawa to Vancouver area) typically costs $4,000–$8,000 for a 1-2 bedroom home and $7,000–$14,000+ for a 3-bedroom+ home. The 4,500 km journey is Canada's longest provincial moving route. Written quotes provided after full inventory review." },
  { q: "How long does an Ontario to BC move take?", a: "Driving Ottawa to Vancouver takes approximately 5 days non-stop, but we never rush long-haul moves for safety. Goods typically arrive in BC 7–14 days after the Ontario loading date. We provide a confirmed delivery window at booking." },
  { q: "What BC cities do you deliver to from Ontario?", a: "We deliver to Vancouver, Victoria, Kelowna, Kamloops, Abbotsford, Surrey, Burnaby, Coquitlam, Richmond, Delta, and all BC municipalities. The Lower Mainland, Vancouver Island (with ferry coordination), and the Interior are all serviced." },
  { q: "Do I need to update my driver's licence after moving to BC?", a: "Yes. BC requires new residents to obtain a BC driver's licence and register their vehicle within 90 days of establishing BC residency. MSP (Medical Services Plan) enrollment is also required within 3 months. For BC-specific information, visit ICBC.com." },
  { q: "Is it cheaper to move from Ontario to BC in certain seasons?", a: "Late spring through early fall is generally the most reliable season for cross-Canada transit. Winter moves can be impacted by mountain pass conditions (Coquihalla, Rogers Pass). We complete Ontario-BC moves year-round with appropriate seasonal planning." },
];

export default function MovingFromOntarioToBC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving from Ontario to BC | Ontario to British Columbia Movers | Prestige Moving</title>
        <meta name="description" content="Moving from Ontario to BC? Prestige Moving handles full cross-Canada moves from Ottawa/Ontario to Vancouver and all British Columbia destinations. Written quote. (613) 600-4000." />
        <meta name="keywords" content="moving from Ontario to BC, Ontario to British Columbia movers, Ottawa to Vancouver movers, cross Canada movers Ontario, Ontario BC moving company" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-ontario-to-bc" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-from-ontario-to-bc", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ontario → British Columbia Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving from Ontario to BC — Cross-Canada Movers</h1>
            <p className="text-white/70 text-lg mb-8">Ontario to British Columbia is Canada's signature cross-country move — 4,500 km from the national capital region to the Pacific coast. Prestige Moving handles the complete relocation from your Ontario address to any BC destination.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["~4,500 km Cross-Canada", "7–14 Day Delivery", "Full Packing Available", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ontario to British Columbia — The West Coast Move</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Moving from Ontario to BC is the quintessential Canadian westward journey. Thousands of Ontario residents make this move every year, drawn by BC's climate, Pacific lifestyle, outdoor recreation, and major industries including technology (Vancouver's tech sector), film and media, forestry, tourism, and mining.</p>
            <p>The route crosses five provinces — Ontario, Manitoba, Saskatchewan, Alberta, and BC — including the Rocky Mountains via the Trans-Canada through Rogers Pass or the Coquihalla Highway. Our drivers are experienced on all mountain routes and plan weather-appropriate transit in all seasons.</p>
            <p>We deliver throughout BC — not just Metro Vancouver. Kelowna, Victoria (with BC Ferries coordination), Nanaimo, Kamloops, Abbotsford, Chilliwack, and Prince George are all destinations we've delivered to from Ontario. Wherever you're settling in BC, we get your goods there.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What's Included</h3>
              <div className="space-y-2">
                {["Ontario-side professional loading", "Full professional packing available", "Climate-appropriate transit protection", "Mountain route experience", "BC delivery to any address", "7–14 day delivery window confirmed"].map(item => (
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
                <div className="flex justify-between"><span>Distance</span><span className="text-white font-medium">~4,500 km</span></div>
                <div className="flex justify-between"><span>Provinces Crossed</span><span className="text-white font-medium">5</span></div>
                <div className="flex justify-between"><span>Delivery Window</span><span className="text-white font-medium">7–14 days</span></div>
                <div className="flex justify-between"><span>1BR Starting Rate</span><span className="text-[#C5A572] font-medium">From ~$4,000</span></div>
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
          <h2 className="text-2xl font-bold text-white mb-3">Moving from Ontario to BC?</h2>
          <p className="text-white/70 mb-6">Get a written quote for your cross-Canada move to British Columbia. We'll walk you through the full process.</p>
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
