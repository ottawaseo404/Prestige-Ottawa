import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "How much does moving from Ontario to Alberta cost?", a: "Ontario to Calgary moves typically run $3,500–$8,000. Ontario to Edmonton moves are $3,800–$9,000+. Volume, packing services, and specific pickup/delivery addresses affect final pricing. Written flat-rate quotes provided after inventory review." },
  { q: "Why are so many Ontario residents moving to Alberta?", a: "Alberta's combination of no provincial sales tax, a recovering energy sector, lower cost of living relative to Ontario, and a booming Calgary and Edmonton economy attracts Ontario professionals. The province has been one of Canada's fastest-growing for interprovincial migration." },
  { q: "How long does Ontario to Alberta delivery take?", a: "Ottawa or Toronto loading to Calgary/Edmonton delivery typically takes 7–12 days. We provide a confirmed delivery window at booking." },
  { q: "What Alberta cities do you deliver to from Ontario?", a: "We deliver to Calgary, Edmonton, Red Deer, Lethbridge, Airdrie, St. Albert, Sherwood Park, Okotoks, Cochrane, Grande Prairie, Fort McMurray, and all Alberta municipalities." },
  { q: "Do I need to get an Alberta driver's licence after moving there?", a: "Yes. Alberta requires new residents to transfer their driver's licence within 90 days of establishing residency. Vehicle registration must also be updated within the same period. Alberta Health coverage begins after a 3-month waiting period, so maintaining your Ontario health card during the transition is important." },
];

export default function MovingFromOntarioToAlberta() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving from Ontario to Alberta | Ontario Alberta Movers | Prestige Moving</title>
        <meta name="description" content="Moving from Ontario to Alberta? Prestige Moving handles Ottawa/Ontario to Calgary and Edmonton moves. Full packing, insured transport, written quote. 5.0★ rated. (613) 600-4000." />
        <meta name="keywords" content="moving from Ontario to Alberta, Ontario to Alberta movers, Ottawa to Calgary movers, Ontario Alberta moving company, interprovincial movers Ontario Alberta" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-ontario-to-alberta" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-from-ontario-to-alberta", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ontario → Alberta Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving from Ontario to Alberta — Calgary and Edmonton Movers</h1>
            <p className="text-white/70 text-lg mb-8">Ontario to Alberta is one of Canada's most active interprovincial moving corridors. Prestige Moving handles the full relocation from Ottawa or anywhere in Ontario to Calgary, Edmonton, and all Alberta destinations — with full packing, Trans-Canada transport, and written flat-rate pricing.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["~3,400–3,500 km", "7–12 Day Delivery", "Full Packing Available", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ontario to Alberta — Canada's Busiest Westward Route</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>The Ontario-to-Alberta corridor is one of the busiest interprovincial migration routes in Canada. Alberta's energy sector, low tax burden (no provincial sales tax), growing non-resource industries, and comparatively affordable real estate make it a powerful draw for Ontario workers, families, and retirees.</p>
            <p>The route follows the Trans-Canada Highway west from Ottawa through Sudbury, north of Lake Superior, through Winnipeg, Regina, and Saskatoon before reaching Calgary (3,400 km from Ottawa) and continuing north to Edmonton (3,500 km). Our crews are thoroughly experienced on this route in all seasons.</p>
            <p>We deliver to all Alberta destinations — from downtown Calgary and Edmonton high-rises to suburban communities in Airdrie, Cochrane, Sherwood Park, St. Albert, and Spruce Grove. Rural Alberta moves to smaller centres like Red Deer, Lethbridge, Medicine Hat, and Grande Prairie are also fully serviced.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What's Included</h3>
              <div className="space-y-2">
                {["Ontario-side professional loading", "Full packing or fragile-item packing", "Furniture blanket and pad protection", "Trans-Canada route transport", "Any Alberta address delivery", "Delivery window confirmed at booking"].map(item => (
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
                <div className="flex justify-between"><span>To Calgary</span><span className="text-white font-medium">~3,400 km</span></div>
                <div className="flex justify-between"><span>To Edmonton</span><span className="text-white font-medium">~3,500 km</span></div>
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
          <h2 className="text-2xl font-bold text-white mb-3">Moving Ontario to Alberta?</h2>
          <p className="text-white/70 mb-6">Get your written quote for the Ontario-Alberta move. We handle this route regularly and know it well.</p>
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
