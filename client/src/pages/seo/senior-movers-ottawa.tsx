import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, Heart, ChevronDown, Shield, Clock, Users } from "lucide-react";

const FAQS = [
  { q: "What makes a moving company good for seniors?", a: "The right senior mover offers patience, careful handling, clear communication, and the ability to coordinate with family members or care managers. Prestige Moving assigns a dedicated contact for senior moves, provides a written quote with no hidden fees, and works at a pace that's comfortable for the senior throughout the day." },
  { q: "How do you help seniors who are downsizing?", a: "We work alongside seniors and their families to plan the move in manageable stages. We can identify items going to the new home, items going to family members, items for donation, and items for disposal — and handle each category accordingly. Our downsizing planning guide is available on request." },
  { q: "Do you offer moving services to retirement communities and assisted living in Ottawa?", a: "Yes. We regularly move clients into Ottawa-area retirement communities including Chartwell, Amica, Revera, The Village of Rockcliffe, and independent living facilities across the city. We coordinate with building management at these facilities and follow their specific move-in procedures." },
  { q: "Can family members direct the move if the senior is not there?", a: "Absolutely. We're happy to coordinate with an adult child, power of attorney, or care manager who is overseeing the move on the senior's behalf. We'll confirm all details in writing with the designated contact." },
  { q: "Is there anything special to book for a senior move?", a: "Just let us know during booking that this is a senior move. We'll note it in the job file so the crew is briefed in advance, we'll allow extra time in the schedule, and we'll ensure the crew lead is one of our most experienced and patient team members." },
];

export default function SeniorMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Senior Movers Ottawa | Retirement & Downsizing Moving | Prestige Moving</title>
        <meta name="description" content="Compassionate senior movers in Ottawa. Prestige Moving specializes in retirement community moves, downsizing, and family-coordinated relocations. Patient crew, written quote, 5.0★ rated. Call (613) 600-4000." />
        <meta name="keywords" content="senior movers Ottawa, senior moving Ottawa, retirement moving Ottawa, downsizing movers Ottawa, senior relocation Ottawa, elderly movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/senior-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/senior-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Heart className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Senior Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Senior Movers Ottawa —<br className="hidden md:block" /> Patient, Careful, Family-Coordinated</h1>
            <p className="text-white/70 text-lg mb-8">Moving later in life carries unique emotional and logistical dimensions. Our crew understands this. We work at a pace that's comfortable, communicate clearly with family members or caregivers, and treat every belonging with the care it deserves.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-10 text-center">How We Support Senior Moves in Ottawa</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Family Coordination", desc: "Adult children, power of attorney, or care managers can direct the move and receive all communications on the senior's behalf." },
              { icon: Clock, title: "Flexible Pacing", desc: "Senior moves are not rushed. We build extra time into the schedule so the crew can work at a comfortable pace without stress." },
              { icon: Heart, title: "Downsizing Support", desc: "We help categorize items: keeping, donating, family transfer, or disposal — and can coordinate with charities for pickup of donated items." },
              { icon: Shield, title: "Retirement Community Experience", desc: "We've moved clients into Chartwell, Amica, Revera, The Village of Rockcliffe, and numerous Ottawa-area retirement facilities." },
              { icon: CheckCircle2, title: "Written Quote, No Surprises", desc: "Seniors on fixed incomes deserve complete pricing clarity. Your written quote is your final invoice — always." },
              { icon: Users, title: "Experienced, Patient Crew", desc: "Senior moves are staffed by our most experienced crew leads who understand the emotional weight of these transitions." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-[#C5A572]" />
                </div>
                <h3 className="font-bold text-[#1A2332] mb-2 text-sm">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Senior Moving in Ottawa: What Families Need to Know</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Ottawa has one of the fastest-growing senior populations in Ontario, driven by the aging of its federal government workforce and the city's reputation as a liveable, service-rich urban centre. The senior moving market in Ottawa spans a wide range of situations: long-time homeowners downsizing from a 4-bedroom family home to a condo in <Link href="/residential-movers-centretown" className="text-[#C5A572] hover:underline">Centretown</Link> or <Link href="/movers-in-westboro" className="text-[#C5A572] hover:underline">Westboro</Link>, transitions into retirement communities and assisted living facilities, or couples separating after decades in the same home.</p>
            <p>Each of these scenarios has different logistical and emotional dimensions. A move into a retirement community involves coordinating with the facility's move-in schedule, working within a smaller floor plan, and often leaving behind decades of accumulated possessions that must be sorted, donated, or passed to family. A downsizing move from a large home involves difficult decisions about what to bring and what to let go of. These are not purely logistical challenges.</p>
            <p>Prestige Moving approaches senior moves with the understanding that they often represent a major life transition. Our crew leads are briefed before arrival on the nature of the move and the level of care and patience required. We don't rush, we communicate clearly, and we treat every possession — from antique furniture to everyday items — with respect. For families managing the move from a distance, we provide a single point of contact and keep you updated throughout the day.</p>
            <p>Related: <Link href="/downsizing-moving-ottawa" className="text-[#C5A572] hover:underline">Downsizing Moving Ottawa</Link> · <Link href="/estate-cleanout-ottawa" className="text-[#C5A572] hover:underline">Estate Cleanout Ottawa</Link> · <Link href="/furniture-donation-disposal-ottawa" className="text-[#C5A572] hover:underline">Furniture Donation & Disposal Ottawa</Link></p>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Senior Movers Ottawa — FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left bg-gray-50" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-white">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Plan a Senior Move in Ottawa</h2>
          <p className="text-white/65 mb-8">Patient crew · Family coordination · Written quote · 5.0★ rated</p>
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
