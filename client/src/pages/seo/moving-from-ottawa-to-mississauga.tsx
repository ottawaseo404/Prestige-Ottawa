import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "How much does it cost to move from Ottawa to Mississauga?", a: "Ottawa to Mississauga is approximately 440 km. A 1-bedroom apartment runs $1,500–$2,300. A 2-bedroom home is $2,100–$3,400. A 3-bedroom home runs $2,900–$4,600. Full packing is available as an add-on." },
  { q: "How long does the Ottawa to Mississauga move take?", a: "The drive from Ottawa to Mississauga is approximately 4.5–5 hours via Highway 401 west. Total moving day time including loading and unloading is typically 11–15 hours for a 2-bedroom." },
  { q: "Do you move to specific Mississauga neighbourhoods?", a: "Yes — we move to all Mississauga areas including Port Credit, Streetsville, Meadowvale, Erin Mills, Cooksville, Malton, and Lakeview. We also serve the broader Peel Region including Brampton." },
  { q: "Why are Ottawa residents moving to Mississauga?", a: "Mississauga offers proximity to Pearson International Airport (for travel-heavy professionals), major corporate headquarters, and access to the GTA employment market — often at lower housing costs than Toronto proper. It's a natural landing spot for Ottawa professionals entering the private sector." },
  { q: "Do you offer packing for the Ottawa to Mississauga move?", a: "Yes. Full packing, fragile-item packing, and unpacking at destination are all available. For a move of this distance, professional packing ensures your items arrive safely without the need for you to handle the full prep." },
];

export default function MovingFromOttawaToMississauga() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving from Ottawa to Mississauga | Ottawa Mississauga Movers | Prestige Moving</title>
        <meta name="description" content="Moving from Ottawa to Mississauga? Prestige Moving provides full-service Ottawa-Mississauga relocation — packing, 401 transport, and delivery. 5.0★ rated. (613) 600-4000." />
        <meta name="keywords" content="moving from Ottawa to Mississauga, Ottawa to Mississauga movers, Ottawa Mississauga moving company, long distance movers Ottawa GTA" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-ottawa-to-mississauga" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-from-ottawa-to-mississauga", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa → Mississauga Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving from Ottawa to Mississauga — Long-Distance Movers</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa to Mississauga is a 440 km move to Canada's sixth-largest city. Prestige Moving handles the full relocation — from your Ottawa address to any Mississauga neighbourhood or Peel Region community.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["~440 km via Hwy 401", "One-Day Move", "Insured Transport", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ottawa to Mississauga — Gateway to the GTA</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Mississauga is Canada's sixth-largest city and one of the country's most important business hubs — home to the headquarters of dozens of major corporations including RBC, Microsoft Canada, Walmart Canada, and hundreds of other Fortune 500 Canadian offices. For Ottawa professionals transitioning from government to the private sector, Mississauga is a prime destination.</p>
            <p>The city's proximity to Pearson International Airport (Canada's busiest) makes it particularly attractive for professionals who travel frequently. Mississauga's transit connection to Toronto via the GO system makes it a practical GTA base without Toronto's housing price premium.</p>
            <p>We service all of Mississauga's diverse neighbourhoods — from the waterfront condos of Port Credit to the family homes of Erin Mills and the newer developments in Churchill Meadows. No matter where you're landing in Mississauga, we know the logistics of the area and can navigate condo freight elevators, parking restrictions, and access challenges.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What's Included</h3>
              <div className="space-y-2">
                {["Ottawa professional loading crew", "Full or partial packing available", "Blanket-wrap furniture protection", "Highway 401 transport", "Mississauga and Peel Region delivery", "Condo/elevator coordination available"].map(item => (
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
                <div className="flex justify-between"><span>Distance</span><span className="text-white font-medium">~440 km</span></div>
                <div className="flex justify-between"><span>Drive Time</span><span className="text-white font-medium">~4.5–5 hours</span></div>
                <div className="flex justify-between"><span>Move Duration</span><span className="text-white font-medium">11–15 hours</span></div>
                <div className="flex justify-between"><span>1BR Starting Rate</span><span className="text-[#C5A572] font-medium">From ~$1,500</span></div>
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
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Move Ottawa to Mississauga?</h2>
          <p className="text-white/70 mb-6">Get a written quote for your full Ottawa-Mississauga relocation today.</p>
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
