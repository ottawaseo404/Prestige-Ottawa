import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, Shield, Clock, TruckIcon, ChevronDown, Zap, AlertTriangle } from "lucide-react";

const FAQS = [
  { q: "Do you offer same-day moving in Ottawa?", a: "Yes — subject to crew availability. Same-day and next-day moves are possible when our schedule allows. Call (613) 600-4000 as early as possible on the day you need to move to check availability. Morning calls give us the best chance of arranging same-day service." },
  { q: "How much does same-day moving cost in Ottawa?", a: "Same-day moves are priced at our standard rates — Premium $155/hr, Deluxe $195/hr, Diamond $315/hr — with a 3-hour minimum. No emergency surcharge or same-day premium. Your written quote is provided before we begin." },
  { q: "What situations require same-day movers?", a: "Common same-day moving scenarios include: sudden lease terminations, unexpected closing date changes, domestic emergency situations, storage unit access, and corporate relocation with tight deadlines. We handle all of these with discretion and professionalism." },
  { q: "Can you guarantee same-day availability?", a: "We cannot guarantee same-day availability as it depends on the day's schedule. However, we maintain a standby capacity specifically for urgent moves and accommodate same-day requests whenever our schedule allows. Call us first — availability is often better than expected." },
  { q: "What's the fastest you can arrive for an urgent move?", a: "In some cases, we can arrive within 2–4 hours of your call. This depends on the day, crew location, and truck availability. The earlier in the day you call, the better our chances of same-day service." },
];

export default function SameDayMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Same Day Movers Ottawa | Urgent & Emergency Moving Service | Prestige Moving</title>
        <meta name="description" content="Need same-day movers in Ottawa? Prestige Moving offers urgent moving service — call (613) 600-4000 for availability. No emergency surcharge. WSIB certified, 5.0★ rated." />
        <meta name="keywords" content="same day movers Ottawa, urgent movers Ottawa, emergency movers Ottawa, same day moving Ottawa, last minute movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/same-day-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/same-day-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />

      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Zap className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Same-Day Ottawa Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Same-Day Movers Ottawa —<br className="hidden md:block" /> Urgent Service, Professional Standard</h1>
            <p className="text-white/70 text-lg mb-6">When you need to move today, call Prestige Moving first. We maintain standby capacity for urgent moves — same standard, same pricing, no emergency surcharge.</p>
            <div className="bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-xl px-5 py-4 mb-8">
              <p className="text-[#C5A572] font-bold text-lg">Call now to check same-day availability:</p>
              <a href="tel:6136004000" className="text-white text-2xl font-bold hover:text-[#C5A572] transition-colors">(613) 600-4000</a>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:6136004000"><Button className="bg-[#C5A572] text-[#1A2332] font-bold"><Phone className="h-4 w-4 mr-2" /> Call for Availability</Button></a>
              <Link href="/book"><Button variant="outline" className="text-white border-white/30 bg-white/10">Book Online <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-10 text-center">When You Need Same-Day Moving in Ottawa</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Sudden Lease Termination", desc: "Landlord gives notice, lease is broken, or living situation changes unexpectedly. We respond quickly to get you out safely." },
              { title: "Closing Date Moved Up", desc: "Your real estate closing date moved forward and you need to be in the new home today. We've solved this problem many times." },
              { title: "Corporate Relocation Deadline", desc: "Employer relocation with a hard start date that can't flex. We coordinate with your HR team or relocation coordinator." },
              { title: "Storage Unit Emergency", desc: "Storage unit access closing, contents need to move, items need to be cleared urgently. We handle storage-to-home or storage-to-storage." },
              { title: "Domestic Situation", desc: "We handle urgent moves with complete discretion and professionalism. No questions asked, full focus on getting you moved safely." },
              { title: "Moving Help Fell Through", desc: "Your original moving company cancelled, friends backed out, or a DIY move hit a wall. We step in where others let you down." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <CheckCircle2 className="h-5 w-5 text-[#C5A572] mb-3" />
                <h3 className="font-bold text-[#1A2332] mb-2 text-sm">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">How Same-Day Moving Works with Prestige Moving</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Same-day moving is one of the most stressful moving experiences, but it doesn't have to be chaotic. When you call Prestige Moving for a same-day move, our team immediately checks crew and truck availability. If we can accommodate your move, we provide a verbal quote over the phone based on your inventory and locations, confirm the booking, and dispatch the crew. A written confirmation follows by email.</p>
            <p>Our same-day moves are priced at standard rates — there is no emergency premium or surcharge for urgent service. We do this because we believe that clients in stressful situations shouldn't face price exploitation on top of everything else. The Premium package at $155/hr and Deluxe at $195/hr are the same prices whether you booked three weeks ago or three hours ago.</p>
            <p>For same-day availability, the best approach is to call as early as possible — ideally before 9am. Morning availability checks give our scheduling team the most flexibility to arrange crew and truck logistics. If same-day isn't available, we will often have next-morning slots open. For related services, see our <Link href="/last-minute-movers-ottawa" className="text-[#C5A572] hover:underline">last-minute movers</Link> page or call directly at <a href="tel:6136004000" className="text-[#C5A572] hover:underline">(613) 600-4000</a>.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Same-Day Movers Ottawa — FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-2">Need to Move Today?</h2>
          <p className="text-white/65 mb-8">Call now to check same-day availability. No emergency surcharge. 5.0★ rated crew ready.</p>
          <a href="tel:6136004000"><Button className="bg-[#C5A572] text-[#1A2332] font-bold text-lg px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
