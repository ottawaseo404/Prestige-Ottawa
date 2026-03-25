import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

export default function MovingFromNepeanToGloucester() {
  return (
    <>
      <Helmet>
        <title>Moving from Nepean to Gloucester | Nepean Gloucester Movers | Prestige Moving</title>
        <meta name="description" content="Moving from Nepean to Gloucester? Prestige Moving handles this Ottawa suburb-to-suburb move with professional crews and transparent pricing. From $155/hr. (613) 600-4000." />
        <meta name="keywords" content="moving from Nepean to Gloucester, Nepean Gloucester movers, Ottawa suburb movers, Nepean movers, Gloucester movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-nepean-to-gloucester" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-from-nepean-to-gloucester", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Nepean → Gloucester Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving from Nepean to Gloucester — Ottawa Suburb Movers</h1>
            <p className="text-white/70 text-lg mb-8">Nepean to Gloucester is a common south-to-east Ottawa move — two mature suburban communities with established housing stock, well-known to our crews. Professional movers, transparent pricing, and a written quote for your Nepean-Gloucester relocation.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Ottawa Suburb Move", "Call for Pricing", "All Home Types", "5.0★ Rated", "No Hidden Fees"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Nepean to Gloucester — Moving Between Ottawa's Mature Suburbs</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Nepean and Gloucester were once independent cities before amalgamating into Ottawa in 2001. Both communities retain distinct identities — Nepean encompasses areas like Merivale, Bells Corners, Craig Henry, and Barrhaven's northern reaches, while Gloucester includes Hunt Club, Blackburn Hamlet, Gloucester South, and the communities surrounding the Ottawa Airport.</p>
            <p>The Nepean-to-Gloucester move crosses Ottawa's south end and can vary significantly in distance depending on the specific communities involved — from as little as 15 km (Craig Henry to Hunt Club) to 35+ km (Bells Corners to Blackburn Hamlet). Our pricing is by the hour, so you only pay for the actual time the move takes.</p>
            <p>Both communities feature predominantly single-family homes and townhouses with good parking access — making for straightforward loading and unloading logistics. We also frequently handle moves within these communities (Nepean to Nepean, Gloucester to Gloucester) for residents upgrading or downsizing within the same area.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What's Included</h3>
              <div className="space-y-2">
                {["Professional Ottawa moving crew", "Truck sized for your home", "Furniture blankets and pads", "Appliance and specialty handling", "Nepean to Gloucester delivery", "Furniture placement at destination"].map(item => (
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
                <div className="flex justify-between"><span>Distance</span><span className="text-white font-medium">15–35 km</span></div>
                <div className="flex justify-between"><span>Drive Time</span><span className="text-white font-medium">20–45 min</span></div>
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
          <h2 className="text-2xl font-bold text-white mb-3">Moving Nepean to Gloucester?</h2>
          <p className="text-white/70 mb-6">Get a quote for your Ottawa suburb move. We know both communities well.</p>
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
