import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

export default function MovingFromKanataToBarthaven() {
  return (
    <>
      <Helmet>
        <title>Moving from Kanata to Barrhaven | Kanata Barrhaven Movers | Prestige Moving</title>
        <meta name="description" content="Moving from Kanata to Barrhaven? Prestige Moving handles the full Kanata-Barrhaven relocation — local Ottawa move, professional crew, from $155/hr. Call (613) 600-4000." />
        <meta name="keywords" content="moving from Kanata to Barrhaven, Kanata Barrhaven movers, Ottawa suburb movers, movers Kanata Ottawa, movers Barrhaven Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-kanata-to-barrhaven" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-from-kanata-to-barrhaven", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Kanata → Barrhaven Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving from Kanata to Barrhaven — Ottawa Suburb Movers</h1>
            <p className="text-white/70 text-lg mb-8">The Kanata-to-Barrhaven move is one of Ottawa's most common suburb-to-suburb relocations — approximately 30 km across the city's south end. Prestige Moving handles this move regularly with professional crews familiar with both communities' street layouts, parking requirements, and home types.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["~30 km Within Ottawa", "Call for Pricing", "3-Hour Minimum", "5.0★ Rated", "Written Quote"].map(t => t === "Call for Pricing" ? <a key={t} href="tel:6136004000">{t}</a> : <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Kanata to Barrhaven — Ottawa's Popular Suburb Move</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Kanata and Barrhaven are two of Ottawa's largest and fastest-growing suburban communities. Kanata — particularly Kanata North — is Ottawa's tech hub, home to hundreds of technology companies and one of Canada's most significant high-tech corridors. Barrhaven, developed more recently, draws families seeking newer housing, excellent schools, and a tight-knit community feel.</p>
            <p>The Kanata-to-Barrhaven move is approximately 30 km and typically routed via the Queensway (Highway 417) or Highway 416 south. Most homes in both communities are single-family detached or semi-detached houses with good truck access — making for straightforward loading and unloading compared to downtown condo moves.</p>
            <p>Both Kanata and Barrhaven feature predominantly newer housing stock (post-1990s to present), which typically means good condition, standard floor plans, and reasonable accessibility for moving equipment. We are very familiar with the street layouts of communities like Bridlewood, Beaverbrook, Morgan's Grant, Half Moon Bay, Riverside South, and Longfields.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What's Included</h3>
              <div className="space-y-2">
                {["Professional 2 or 3-person crew", "Properly sized moving truck", "Furniture blanket protection", "Appliance dollies and equipment", "Kanata pickup and Barrhaven delivery", "Furniture placement at destination"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1A2332] rounded-xl p-5">
              <h3 className="font-bold text-white mb-3">Move at a Glance</h3>
              <div className="space-y-2 text-white/70 text-sm">
                <div className="flex justify-between"><span>Distance</span><span className="text-white font-medium">~30 km</span></div>
                <div className="flex justify-between"><span>Drive Time</span><span className="text-white font-medium">~30–40 min</span></div>
                <div className="flex justify-between"><span>2BR Move Time</span><span className="text-white font-medium">4–6 hours</span></div>
                <div className="flex justify-between"><span>Starting Rate</span><span className="text-[#C5A572] font-medium">Call Us</span></div>
              </div>
              <Link href="/book" className="mt-4 block">
                <Button className="bg-[#C5A572] text-[#1A2332] font-bold w-full">Get Written Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Move Kanata to Barrhaven?</h2>
          <p className="text-white/70 mb-6">Get a quote for your Kanata-Barrhaven move. We do this route regularly — book your date today.</p>
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
