import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, Star, Shield, TruckIcon } from "lucide-react";

const COMPARISON = [
  { feature: "Google Rating (Ottawa)", prestige: "5.0★ (400+ reviews)", competitor: "4.3★" },
  { feature: "Ottawa-Based Operation", prestige: "Yes — locally owned", competitor: "Franchise model" },
  { feature: "Written Quote Guarantee", prestige: "Written before every move", competitor: "Varies by franchise" },
  { feature: "WSIB Certified", prestige: "Yes — current", competitor: "Yes" },
  { feature: "Fuel Surcharge", prestige: "None — all-inclusive", competitor: "Standard charge" },
  { feature: "Ottawa Neighbourhood Coverage", prestige: "All 25+ neighbourhoods", competitor: "Central Ottawa focus" },
  { feature: "Starting Rate", prestige: "$155/hr (2 movers + truck)", competitor: "Market-rate pricing" },
  { feature: "Response Time", prestige: "Same-day quote", competitor: "Varies" },
];

export default function TwoMenAndTruckOttawa() {
  return (
    <>
      <Helmet>
        <title>Two Men and a Truck Ottawa Alternative | Prestige Moving Ottawa</title>
        <meta name="description" content="Looking for Two Men and a Truck in Ottawa? Discover why Prestige Moving is Ottawa's top-rated alternative — 5.0★ on 400+ reviews, locally owned, all-inclusive pricing. Call (613) 600-4000." />
        <meta name="keywords" content="two men and a truck Ottawa, two men and a truck Ottawa alternative, Ottawa movers comparison, best movers Ottawa alternative, moving company Ottawa comparison" />
        <link rel="canonical" href="https://prestigemoving.ca/two-men-and-truck-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/two-men-and-truck-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Star className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa's Top-Rated Movers</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Looking for a Top Ottawa<br className="hidden md:block" /> Moving Company? Here's Why We Rank Higher.</h1>
            <p className="text-white/70 text-lg mb-8">Prestige Moving is Ottawa's highest-rated moving company — locally owned, 5.0★ on 400+ verified Google reviews, and built specifically for Ottawa's neighbourhoods, buildings, and moving patterns. See how we compare.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["5.0★ · 400+ Google Reviews", "Locally Owned Ottawa Company", "No Fuel Surcharge", "Written Quote Guaranteed", "WSIB Certified"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Prestige Moving vs. National Franchise Moving Companies in Ottawa</h2>
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-[#1A2332] text-white text-sm font-semibold">
              <div className="p-4">Feature</div>
              <div className="p-4 text-[#C5A572]">Prestige Moving</div>
              <div className="p-4 text-white/60">National Franchise</div>
            </div>
            {COMPARISON.map(({ feature, prestige, competitor }, i) => (
              <div key={feature} className={`grid grid-cols-3 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="p-4 text-gray-600 font-medium">{feature}</div>
                <div className="p-4 text-[#1A2332] font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />{prestige}
                </div>
                <div className="p-4 text-gray-500">{competitor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Why Locally Owned Matters for Ottawa Movers</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>National franchise moving companies operate in Ottawa through local franchise holders whose standards, training, and pricing can vary significantly. The brand name creates an expectation, but the actual experience depends entirely on who owns and operates that particular location. Customer reviews for national franchise movers frequently reflect this inconsistency — the same brand can earn 5 stars in one city and 3 stars in another.</p>
            <p>Prestige Moving is an Ottawa company. Our leadership team lives in Ottawa, our crew members know Ottawa's streets and buildings, and our reputation is built entirely on our Ottawa clients' experiences. When you leave a review, it reflects directly on us — not on a corporate brand we license. This accountability is why we maintain a 5.0-star rating across 400+ reviews, and why our standards don't vary from job to job.</p>
            <p>We serve every Ottawa neighbourhood — from <Link href="/movers-in-rockcliffe-park" className="text-[#C5A572] hover:underline">Rockcliffe Park</Link> to <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link> to <Link href="/movers-in-sandy-hill" className="text-[#C5A572] hover:underline">Sandy Hill</Link> — with the same crew, the same standards, and the same written quote guarantee on every single job.</p>
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ottawa's Highest-Rated Moving Company</h2>
          <p className="text-white/65 mb-8">5.0★ on 400+ reviews · Locally owned · Written quote · WSIB certified</p>
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
