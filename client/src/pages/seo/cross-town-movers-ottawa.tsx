import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon, Lock } from "lucide-react";

export default function CrossTownMoversOttawa() {
  return (
    <>
      <Helmet>
        <title>Cross Town Movers Ottawa | Moving Across Ottawa | Prestige Moving</title>
        <meta name="description" content="Ottawa cross-town movers. Moving from one side of Ottawa to the other — Kanata to Orleans, Barrhaven to Gloucester, or anywhere across the city. From $155/hr. (613) 600-4000." />
        <meta name="keywords" content="cross town movers Ottawa, moving across Ottawa, Ottawa intra-city movers, east to west Ottawa movers, north south Ottawa movers" />
        <link rel="canonical" href="https://prestigemoving.ca/cross-town-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/cross-town-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Cross-Town Moving — Ottawa</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Cross-Town Movers Ottawa — Moving Across the City</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa is a large city — moving from Kanata to Orleans is 50+ km. Moving from Barrhaven to Gloucester crosses the entire south end. Prestige Moving handles every cross-town Ottawa move with experienced crews who know the city's streets, traffic patterns, and neighbourhoods.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Any Ottawa Neighbourhoods", "Call for Pricing", "Experienced City Crews", "5.0★ Rated", "No Hidden Fees"].map(t => t === "Call for Pricing" ? <a key={t} href="tel:6136004000">{t}</a> : <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Moving Across Ottawa — Why It's More Than Just "Local"</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Ottawa residents often underestimate the scale of a cross-town move. The city spans approximately 70 km east-to-west — moving from Orléans to Stittsville involves navigating the full length of the Queensway, with all the traffic variables that come with it. A south-to-north move from Barrhaven to Rockcliffe Park crosses the full socioeconomic range of the city.</p>
            <p>For cross-town moves, we plan the drive time into the overall schedule — ensuring your total moving time and cost are communicated upfront. We know which routes to avoid during rush hour, which communities have specific parking or access challenges, and how to time the move to minimize delays.</p>
            <p>Cross-town moves are priced by the hour like all local Ottawa moves — call us for your rate, with a 3-hour minimum. The drive time between communities is included in the move time, so you pay only for actual hours worked — no separate travel surcharges for Ottawa-area moves.</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              { from: "Kanata", to: "Orleans", dist: "~50 km" },
              { from: "Barrhaven", to: "Gloucester", dist: "~35 km" },
              { from: "Nepean", to: "Rockcliffe", dist: "~25 km" },
              { from: "Stittsville", to: "Vanier", dist: "~40 km" },
              { from: "Manotick", to: "Kanata", dist: "~45 km" },
              { from: "Orleans", to: "Barrhaven", dist: "~45 km" },
            ].map(r => (
              <div key={`${r.from}-${r.to}`} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                <span className="font-medium text-[#1A2332] text-sm">{r.from} → {r.to}</span>
                <span className="text-[#C5A572] text-sm font-semibold">{r.dist}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-[#1A2332] mb-3">What's Included in Every Cross-Town Move</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {["Professional crew sized for your home", "Properly sized moving truck", "Furniture blankets and padding", "Appliance dollies and equipment", "City route expertise", "Furniture placement at destination"].map(item => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Moving Across Ottawa?</h2>
          <p className="text-white/70 mb-6">Get a quote for your cross-town Ottawa move — any two neighbourhoods, any size home.</p>
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
