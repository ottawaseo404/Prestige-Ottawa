import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, Clock } from "lucide-react";

export default function WeekendCommercialMoversOttawa() {
  return (
    <>
      <Helmet>
        <title>Weekend Commercial Movers Ottawa | Saturday Sunday Office Moves | Prestige Moving</title>
        <meta name="description" content="Ottawa weekend commercial movers. We execute office and commercial moves on Saturday and Sunday — fully operational by Monday morning. Written quote. (613) 600-4000." />
        <meta name="keywords" content="weekend commercial movers Ottawa, Saturday office movers Ottawa, Sunday commercial moving Ottawa, weekend office relocation Ottawa, weekend business movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/weekend-commercial-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/weekend-commercial-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Clock className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Weekend Commercial Moving — Ottawa</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Weekend Commercial Movers Ottawa — Saturday and Sunday Office Moves</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa's best commercial moving time? The weekend. Prestige Moving provides full weekend commercial moving crews — loading Friday evening, moving through Saturday and Sunday, and having your new space operational by Monday morning.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Weekend Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Saturday & Sunday Crews", "Operational by Monday", "All Commercial Types", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Weekend Commercial Moving — Ottawa's Most Popular Option</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Weekend commercial moves are by far the most common structure for Ottawa office relocations. Starting Friday evening and working through Saturday and Sunday gives our crew a full two-to-three day window — enough time to complete even large multi-floor relocations without rushing. By Sunday evening, furniture is in place and IT teams can begin their reconnection work in preparation for Monday morning operations.</p>
            <p>Saturday-only moves work well for smaller offices (5–20 workstations). Saturday-Sunday spans are ideal for medium offices (20–75 workstations). Multi-weekend phased approaches work for enterprise-scale relocations where sections of the office can be moved over consecutive weekends while operations continue in the unmoved portions.</p>
            <p>Ottawa building management teams are accustomed to commercial tenants scheduling weekend moves. We coordinate elevator reservations, loading dock access, and parking permits with your building's property management well in advance — ensuring everything is in place for an efficient weekend execution.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[{ size: "Small Office", workstations: "5–20 workstations", timing: "Single Saturday", desc: "Full move and placement in one day." },
              { size: "Medium Office", workstations: "20–75 workstations", timing: "Saturday–Sunday", desc: "Two-day move with furniture setup." },
              { size: "Large Office", workstations: "75+ workstations", timing: "Multi-weekend phased", desc: "Phased approach maintaining operations." }].map(s => (
              <div key={s.size} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#1A2332] mb-1">{s.size}</h3>
                <p className="text-[#C5A572] text-sm font-medium">{s.workstations}</p>
                <p className="text-gray-500 text-sm mt-1">{s.timing}</p>
                <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-[#1A2332] mb-3">What's Included in Weekend Commercial Moves</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {["Full weekend crew availability", "Furniture disassembly and reassembly", "Numbered asset tracking", "IT equipment careful handling", "Building access coordination", "Furniture placement at destination", "Post-move verification walkthrough", "Operational by Monday morning"].map(item => (
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
          <h2 className="text-2xl font-bold text-white mb-3">Need a Weekend Commercial Move in Ottawa?</h2>
          <p className="text-white/70 mb-6">Get a quote for your weekend office relocation. Operational by Monday — guaranteed.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Weekend Quote</Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
