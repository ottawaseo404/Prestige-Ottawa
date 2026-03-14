import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, Clock, ChevronDown, Zap, Calendar, Shield } from "lucide-react";

const FAQS = [
  { q: "How late can I book last-minute movers in Ottawa?", a: "We can often accommodate bookings with 24–72 hours notice. For same-day moves, call before 9am for the best chance of same-day crew dispatch. Even on short notice, your move is planned, quoted in writing, and executed to our full professional standard." },
  { q: "Is there a higher rate for last-minute moves?", a: "No. Our rates are the same for last-minute bookings: Premium $155/hr, Deluxe $195/hr, Diamond $315/hr. There is no rush surcharge or short-notice premium. What you're quoted is what you pay." },
  { q: "What is considered 'last minute' for a move?", a: "In the moving industry, anything booked within 1–2 weeks is considered short notice. Weekend and end-of-month dates are especially competitive. If you have flexibility on timing, mid-week and mid-month dates are easiest to fill on short notice." },
  { q: "What if I only need to move a few items last minute?", a: "We handle partial moves and single-item moves on short notice. Need one piece of furniture moved across Ottawa today? We accommodate these requests when crew and truck are available." },
  { q: "Can you help if my original movers cancelled?", a: "Yes. Mover cancellations are one of the most common reasons Ottawa residents call us on short notice. We'll do everything we can to get a crew to you within the timeline you need." },
];

export default function LastMinuteMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Last Minute Movers Ottawa | Short Notice Moving Service | Prestige Moving</title>
        <meta name="description" content="Last-minute movers in Ottawa — Prestige Moving accepts short-notice bookings with 24–72 hours. No rush surcharge. Same professional standard. Call (613) 600-4000 now." />
        <meta name="keywords" content="last minute movers Ottawa, short notice movers Ottawa, last minute moving Ottawa, emergency movers Ottawa, urgent moving Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/last-minute-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/last-minute-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />

      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Clock className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Last-Minute Ottawa Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Last-Minute Movers Ottawa —<br className="hidden md:block" /> No Rush Surcharge, Same Standard</h1>
            <p className="text-white/70 text-lg mb-8">Plans change. Original movers fall through. Closing dates shift. Whatever brought you here — call Prestige Moving. We accept last-minute bookings with 24–72 hours notice at standard rates.</p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:6136004000"><Button className="bg-[#C5A572] text-[#1A2332] font-bold"><Phone className="h-4 w-4 mr-2" /> Call Now: (613) 600-4000</Button></a>
              <Link href="/book"><Button variant="outline" className="text-white border-white/30 bg-white/10">Book Online <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1A2332] mb-5">How Last-Minute Booking Works</h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>Prestige Moving maintains scheduling capacity specifically for short-notice requests. When you call, our scheduling team immediately checks crew and truck availability for your requested date. If we can accommodate the move, you receive a written quote before we begin — same as any standard booking.</p>
                <p>The most common last-minute moving situations we handle in Ottawa: original mover cancellations (unfortunately common in Ottawa's market), real estate closing date changes, lease terminations on short notice, and corporate relocations with tight employer deadlines. Each of these situations is treated with the same professionalism as a booking made three weeks in advance.</p>
                <p>For truly urgent same-day moves, see our <Link href="/same-day-movers-ottawa" className="text-[#C5A572] hover:underline">same-day moving service</Link>. For planned moves with short timelines, calling 2–7 days ahead gives us the best chance of full availability on your preferred date.</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#1A2332] text-lg">What You Get — Even on Short Notice</h3>
              {[
                "Written quote before we begin — final invoice matches",
                "Full-size moving truck with professional equipment",
                "Trained, background-checked crew members",
                "$2M+ liability insurance active on your move",
                "WSIB certified — you're protected from day-labour liability",
                "Furniture blankets, dollies, and all moving equipment included",
                "No rush surcharge or short-notice premium",
                "Same 5.0★ standard as every Prestige Moving job",
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
              <div className="mt-4 bg-[#1A2332] rounded-xl p-5 text-center">
                <p className="text-white/70 text-sm mb-2">Call for last-minute availability:</p>
                <a href="tel:6136004000" className="text-[#C5A572] text-2xl font-bold hover:underline">(613) 600-4000</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Last-Minute Movers Ottawa — FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Need Last-Minute Movers in Ottawa?</h2>
          <p className="text-white/65 mb-8">Call now — we'll check availability immediately. No rush fees. 5.0★ rated professional crew.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:6136004000"><Button className="bg-[#C5A572] text-[#1A2332] font-bold"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            <Link href="/book"><Button variant="outline" className="text-white border-white/30 bg-white/10">Book Online <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
