import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, GraduationCap, Clock, DollarSign, Lock } from "lucide-react";

const FAQS = [
  { q: "How much does a student move cost in Ottawa?", a: "Most student moves in Ottawa are 1-bedroom or bachelor units moving near Carleton University or uOttawa. These typically take 3–4 hours with our Premium crew (2 movers + truck at $155/hr), for a total of $465–$620. Written quote before booking — no surprise fees on move-out day." },
  { q: "When is the busiest time for student moving in Ottawa?", a: "April 30 and August 31 are Ottawa's busiest student move dates — when most academic leases end. Book 3–4 weeks in advance for these dates. For May 1 move-ins and September 1 move-ins, the same timing applies. Mid-year student moves (December–January) are much easier to book on short notice." },
  { q: "Do you move students into dorms or on-campus residence?", a: "Yes. We've moved students into Carleton's residence buildings and uOttawa's on-campus housing. We coordinate with residence move-in windows (often specific 2-hour slots) and work efficiently to complete within your allotted time." },
  { q: "What's the cheapest way to move as a student in Ottawa?", a: "Book mid-week (Tuesday–Thursday) or mid-month, which ensures better availability and sometimes a faster crew since the day is less rushed. Our Premium rate of $155/hr with a 3-hour minimum is the most cost-effective for typical student apartment sizes." },
  { q: "Can my parents book the move on my behalf?", a: "Absolutely. Parents frequently book and pay for student moves. We just need one confirmed contact and the correct pick-up and drop-off addresses. All communication can go to the parent or the student — your choice." },
];

export default function StudentMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Student Movers Ottawa | Carleton & uOttawa Student Moving | Prestige Moving</title>
        <meta name="description" content="Affordable student movers in Ottawa serving Carleton University, uOttawa, and all student apartments. From $155/hr — written quote, no hidden fees. Book early for April/August. Call (613) 600-4000." />
        <meta name="keywords" content="student movers Ottawa, student moving Ottawa, Carleton University movers, uOttawa movers, university moving Ottawa, student apartment movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/student-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/student-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <GraduationCap className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Student Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Student Movers Ottawa —<br className="hidden md:block" /> Carleton, uOttawa & Beyond</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa has two major universities and a massive student rental market. Whether you're moving into residence, switching apartments between years, or heading home at the end of the school year — Prestige Moving is Ottawa's top-rated, transparently priced student mover.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Call for Pricing", "No Hidden Fees", "Book Early for April/August", "Written Quote", "5.0★ Rated"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ottawa's Student Moving Market</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                <p>Ottawa's student population exceeds 80,000 between Carleton University in <Link href="/residential-movers-centretown" className="text-[#C5A572] hover:underline">South Ottawa</Link> and the University of Ottawa in <Link href="/movers-in-sandy-hill" className="text-[#C5A572] hover:underline">Sandy Hill</Link> and Lowertown. Both campuses are surrounded by dense student rental markets — areas like Glebe, Sandy Hill, Old Ottawa South, Hintonburg, and the Bank Street corridor are dominated by student apartments that see near-total turnover every April and September.</p>
                <p>The result is Ottawa's most compressed moving period: the final week of April and the final week of August see thousands of students moving simultaneously. Unlike end-of-month residential moves in other cities, Ottawa's student surge hits with predictable intensity every year. If you're moving on April 30 or August 31, you need a booked, confirmed mover — not a plan to "figure it out."</p>
                <p>Prestige Moving has student move experience across all Ottawa neighbourhoods. We know which buildings in Sandy Hill have elevator restrictions, which Carleton-adjacent streets have limited parking, and how to navigate the tight staircases common in older student rental housing near both universities.</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#1A2332] text-lg mb-4">Common Ottawa Student Move Scenarios</h3>
              {[
                { title: "Residence to Off-Campus Apartment", desc: "Moving from dorm to your first off-campus place. We coordinate with residence move-out windows." },
                { title: "Between Student Apartments", desc: "The annual April/September apartment switch. Book 3–4 weeks ahead for these peak dates." },
                { title: "Moving Home for the Summer", desc: "Clearing the apartment at year-end, moving belongings home or to a storage unit." },
                { title: "Moving to Ottawa for School", desc: "Moving from another city (Toronto, Montreal, Kingston) to Ottawa for your program start." },
                { title: "Post-Graduation Move", desc: "You've landed a job in Ottawa or are moving on. We help you transition out of student housing." },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1A2332] text-sm">{title}</p>
                    <p className="text-gray-600 text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Student Movers Ottawa — FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Book Your Ottawa Student Move</h2>
          <p className="text-white/65 mb-8">Call us for pricing · Written quote · No surprise fees · Book early for April/August</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Book Now <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
