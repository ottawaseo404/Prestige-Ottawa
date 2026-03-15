import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, MapPin, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "How much does it cost to move from Montreal to Ottawa?", a: "A Montreal-to-Ottawa move for a 2-bedroom apartment typically ranges from $1,200–$2,200 all-inclusive. A 3-bedroom home is $1,800–$3,500. Pricing depends on volume, packing requirements, and whether storage is needed. Written quote provided after discussing your specific inventory." },
  { q: "How long does it take to move from Montreal to Ottawa?", a: "The Montreal to Ottawa drive is approximately 2 hours (200 km via Highway 417). Add loading time (2–4 hours) and unloading time (2–4 hours), and a Montreal-Ottawa move typically takes 7–12 hours on moving day, depending on home size." },
  { q: "Do you move from Ottawa to Montreal as well?", a: "Yes — both directions. For Ottawa to Montreal moves, see our Ottawa to Montreal movers page. We coordinate both directions of the route regularly." },
  { q: "Do I need to do anything special for a Quebec-to-Ontario move?", a: "For personal household moves, there is no customs process or special documentation required for crossing from Quebec into Ontario. Your belongings move freely between provinces. The main consideration is updating your provincial health card, driver's licence, and vehicle registration after you establish Ontario residency." },
  { q: "What Montreal neighbourhoods do you move from?", a: "We move clients from all Montreal areas: Plateau-Mont-Royal, Outremont, Westmount, Notre-Dame-de-Grâce, Verdun, LaSalle, Laval, Longueuil, and the South Shore. If you're in Greater Montreal, we can get to you." },
];

export default function MovingFromMontrealToOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving from Montreal to Ottawa | Montreal Ottawa Movers | Prestige Moving</title>
        <meta name="description" content="Moving from Montreal to Ottawa? Prestige Moving handles the full 200km relocation — packing, transport, and Ottawa move-in. Written quote, 5.0★ rated. Call (613) 600-4000." />
        <meta name="keywords" content="moving from Montreal to Ottawa, Montreal to Ottawa movers, Montreal Ottawa moving company, Quebec to Ontario movers, relocate Montreal Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-montreal-to-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-from-montreal-to-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Montreal → Ottawa Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving From Montreal<br className="hidden md:block" /> to Ottawa — Full-Service Relocation</h1>
            <p className="text-white/70 text-lg mb-8">The Montreal-Ottawa corridor is one of Canada's most active interprovincial moving routes. Federal public service hiring, bilingual job opportunities, and Ottawa's growing tech sector draw thousands of Montrealers to the capital every year. Prestige Moving handles the full relocation — from your Montreal address to your new Ottawa home.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["200 km / ~2hr Drive", "Full Packing Available", "No Provincial Surcharge", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Why People Move from Montreal to Ottawa</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Ottawa is one of the fastest-growing cities in Canada, consistently ranking among the country's most liveable urban centres. For Montreal residents, the draw is multidimensional: federal government career opportunities in Canada's capital, a bilingual environment that's comfortable for French speakers, housing costs that (historically) offered more space for the price, and a city that balances urban amenities with genuine quality of life.</p>
            <p>The route between the two cities is direct — Highway 417 westbound from Montreal island connects through Vaudreuil, Hawkesbury, and into Ottawa in approximately 2 hours under normal traffic conditions. For a moving crew, the drive is straightforward and the logistics are well-established from years of operating this route.</p>
            <p>Moving to Ottawa from Montreal? The Ottawa neighbourhoods that Montreal transplants most frequently land in include <Link href="/residential-movers-centretown" className="text-[#C5A572] hover:underline">Centretown</Link> (urban density similar to Montreal's Plateau), <Link href="/movers-in-westboro" className="text-[#C5A572] hover:underline">Westboro</Link> (the closest Ottawa equivalent to NDG or Outremont), and <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link> for tech workers. For a full neighbourhood breakdown, see our <Link href="/ottawa-neighbourhoods-guide" className="text-[#C5A572] hover:underline">Ottawa neighbourhoods guide</Link>.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What's Included</h3>
              <div className="space-y-2">
                {["Montreal-side loading and logistics", "Full packing service available", "Transport to Ottawa address", "Ottawa move-in with furniture placement", "All equipment: blankets, straps, dollies", "Written quote — final invoice matches"].map(item => (
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
                <div className="flex justify-between"><span>Move Duration</span><span className="text-white font-medium">7–12 hours total</span></div>
                <div className="flex justify-between"><span>Starting Rate</span><span className="text-[#C5A572] font-medium">Call for quote</span></div>
              </div>
              <Link href="/book" className="mt-4 block">
                <Button className="bg-[#C5A572] text-[#1A2332] font-bold w-full">Get Written Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Montreal to Ottawa Moving — FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Move from Montreal to Ottawa?</h2>
          <p className="text-white/65 mb-8">Written quote · Full-service available · 5.0★ rated · Both provinces covered</p>
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
