import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, Clock } from "lucide-react";

export default function AfterHoursCommercialMoversOttawa() {
  return (
    <>
      <Helmet>
        <title>After Hours Commercial Movers Ottawa | Evening Office Moving | Prestige Moving</title>
        <meta name="description" content="Ottawa after-hours commercial movers. We move offices, retail stores, and commercial spaces evenings and overnight — zero business disruption. Written quote. (613) 600-4000." />
        <meta name="keywords" content="after hours movers Ottawa, evening commercial movers Ottawa, overnight office moving Ottawa, after hours office relocation Ottawa, commercial movers Ottawa evenings" />
        <link rel="canonical" href="https://prestigemoving.ca/after-hours-commercial-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/after-hours-commercial-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Clock className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">After-Hours Commercial Moving — Ottawa</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">After-Hours Commercial Movers Ottawa — Evening and Overnight Office Moves</h1>
            <p className="text-white/70 text-lg mb-8">The best time to move a commercial space in Ottawa is when nobody's working. Prestige Moving provides professional after-hours commercial moving — evenings, overnight, and early mornings — so your business is fully operational when staff arrives the next day.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Commercial Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Evening & Overnight Crew", "Zero Business Disruption", "All Commercial Spaces", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Why After-Hours Commercial Moves Are the Right Choice</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Moving a commercial space during business hours disrupts operations, inconveniences employees, creates liability issues with third parties in the building, and often conflicts with freight elevator schedules in office towers. The solution is simple: move after the workday ends.</p>
            <p>Our after-hours commercial crews begin work in the early evening (typically 6–7 PM) and work through the night if the scope requires it. For well-planned office moves, a 50-workstation office can often be fully moved from origin to destination in a single evening — everything placed and ready for IT teams to connect systems the following morning.</p>
            <p>After-hours access coordination is part of what we manage. We communicate with your building's property management team, confirm elevator reservations, arrange parking for our trucks at loading docks, and ensure security sign-in procedures are followed — all done professionally and without disruption to other building tenants.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">After-Hours Move Includes</h3>
              <div className="space-y-2">
                {["Evening or overnight crew availability", "Building and security coordination", "Elevator and dock reservation management", "Asset-labelled move system", "Furniture placement at destination", "Ready for staff arrival next morning"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">Ideal For</h3>
              <div className="space-y-2">
                {["Office and corporate relocations", "Government department moves", "Medical and healthcare offices", "Retail store transitions", "Restaurant and food service", "Financial and professional services"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Need an After-Hours Commercial Move in Ottawa?</h2>
          <p className="text-white/70 mb-6">Get a commercial quote. We execute after business hours so your operations never miss a beat.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Commercial Quote</Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
