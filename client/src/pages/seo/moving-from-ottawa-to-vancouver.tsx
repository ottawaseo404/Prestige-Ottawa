import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "How much does it cost to move from Ottawa to Vancouver?", a: "Ottawa to Vancouver is a cross-Canada long-distance move. A 1-bedroom apartment typically runs $4,000–$7,000 all-inclusive. A 2-bedroom home is $6,000–$10,000+ depending on volume and packing requirements. We provide written quotes after a complete inventory review." },
  { q: "How long does shipping take Ottawa to Vancouver?", a: "The Ottawa-Vancouver drive is approximately 4,500 km. Depending on crew scheduling and the size of the load, delivery to Vancouver typically takes 7–14 days from loading date. We provide a delivery window and track your shipment throughout." },
  { q: "Should I ship or drive with my belongings?", a: "For a full household (2+ bedrooms), professional moving truck transport is almost always more cost-effective and safer than shipping freight or renting a container. We handle the full route with your items loaded and secured throughout." },
  { q: "Do you offer storage in Vancouver?", a: "Yes — for Ottawa-to-Vancouver moves where the destination isn't ready, we coordinate secure storage in the Greater Vancouver area. Your goods are held until your home is available, then delivered." },
  { q: "What's the best time to move Ottawa to Vancouver?", a: "Late spring through early fall (May–September) offers the most reliable weather for cross-Canada transit. However, we complete Ottawa-Vancouver moves year-round. BC's Coquihalla Highway pass can occasionally cause delays in winter — we monitor conditions and adjust routing." },
];

export default function MovingFromOttawaToVancouver() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving from Ottawa to Vancouver | Ottawa Vancouver Movers | Prestige Moving</title>
        <meta name="description" content="Moving from Ottawa to Vancouver? Prestige Moving handles the full cross-Canada relocation — packing, transport, and BC delivery. Written quote, 5.0★ rated. Call (613) 600-4000." />
        <meta name="keywords" content="moving from Ottawa to Vancouver, Ottawa to Vancouver movers, Ottawa Vancouver moving company, cross Canada movers Ottawa, long distance movers Ottawa BC" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-ottawa-to-vancouver" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-from-ottawa-to-vancouver", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa → Vancouver Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving from Ottawa to Vancouver — Cross-Canada Movers</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa to Vancouver is Canada's coast-to-coast move — 4,500 km of highway from the capital to the Pacific. We manage the entire relocation, from packing in Ottawa to delivery at your Vancouver address.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["~4,500 km Cross-Canada", "Full Packing Available", "7–14 Day Delivery Window", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ottawa to Vancouver — What to Expect</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Ottawa to Vancouver is one of the most significant moves a Canadian can make. The 4,500 km journey spans Ontario, Manitoba, Saskatchewan, Alberta, and British Columbia — five provinces, multiple climate zones, and some of Canada's most remote stretches of highway. Getting this move right requires experience, proper equipment, and a crew that has completed the route before.</p>
            <p>We have. Ottawa residents relocate to Vancouver for career opportunities in tech (Vancouver's "Silicon North"), to join family, for climate, and for quality of life that balances urban access with proximity to mountains and ocean. The BC lifestyle is a powerful draw, and we've helped hundreds of Ottawa families make the transition.</p>
            <p>For cross-Canada moves, we strongly recommend full professional packing. Items in transit for 7–14 days are subjected to road vibration, temperature swings, and multiple in-transit environments. Our packing team uses double-walled boxes, furniture blankets, custom crating for fragile items, and wardrobe boxes for clothing — ensuring everything arrives at your Vancouver home in the same condition it left Ottawa.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What's Included</h3>
              <div className="space-y-2">
                {["Full Ottawa-side loading", "Professional packing available", "Climate-appropriate transit protection", "GPS-tracked cross-Canada transport", "Vancouver delivery and placement", "Delivery window communicated upfront"].map(item => (
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
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Move Ottawa to Vancouver?</h2>
          <p className="text-white/70 mb-6">Get a written quote for your cross-Canada move. We'll outline the full process, timeline, and cost upfront.</p>
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
