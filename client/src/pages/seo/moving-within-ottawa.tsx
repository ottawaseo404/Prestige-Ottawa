import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon, Lock } from "lucide-react";

const NEIGHBOURHOODS = ["Westboro", "Centretown", "Kanata", "Barrhaven", "Orleans", "Nepean", "Gloucester", "Vanier", "Hintonburg", "Glebe", "Alta Vista", "Hunt Club", "Stittsville", "Manotick", "Rockcliffe Park"];

const FAQS = [
  { q: "What's the average cost to move within Ottawa?", a: "A local Ottawa move is priced based on the number of movers and the time required. Our Premium package starts at $155/hr (2 movers + truck). A 1-bedroom apartment typically takes 3–4 hours; a 2-bedroom home 4–6 hours; a 3-bedroom home 6–9 hours. We offer flat-rate quotes for moves where the inventory is clear." },
  { q: "Do you charge a travel fee for moving within Ottawa?", a: "We charge a flat 1-hour travel fee to cover drive time to your origin address and return after the move. This applies to all Ottawa local moves regardless of the specific neighbourhoods involved." },
  { q: "What's the fastest you can book a move within Ottawa?", a: "For last-minute Ottawa moves, we can often accommodate within 24–48 hours depending on availability. For weekend moves, we recommend booking at least 1–2 weeks in advance as our schedule fills quickly." },
  { q: "What Ottawa neighbourhoods do you move within?", a: "We service all Ottawa neighbourhoods including Kanata, Barrhaven, Orléans, Nepean, Gloucester, Vanier, Centretown, the Glebe, Westboro, Hintonburg, Rockcliffe Park, Manotick, Stittsville, Alta Vista, and all surrounding communities." },
  { q: "Can you move just a few items within Ottawa?", a: "Yes. We offer minimum 3-hour bookings for smaller moves — ideal if you're moving furniture between apartments, relocating a single room, or moving select items out of storage. Our labour-only service is also available for locations where you've arranged your own truck or pod." },
];

export default function MovingWithinOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving Within Ottawa | Local Movers Ottawa | Prestige Moving</title>
        <meta name="description" content="Moving within Ottawa? Prestige Moving handles local Ottawa moves across all neighbourhoods — Kanata, Barrhaven, Orleans, Centretown, Westboro, and more. From $155/hr. (613) 600-4000." />
        <meta name="keywords" content="moving within Ottawa, local movers Ottawa, Ottawa neighbourhood movers, intra-city movers Ottawa, Ottawa local moving company" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-within-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-within-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" }, "areaServed": "Ottawa" })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Local Moving — Ottawa</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving Within Ottawa — Local Movers for Every Neighbourhood</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa is a large city — a move from Kanata to Barrhaven is 30 km. From Orléans to Nepean is nearly 40 km. Prestige Moving covers all local Ottawa moves with professional crews, proper trucks, and transparent all-inclusive pricing. Call us for your custom rate.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Call for Pricing", "All Ottawa Neighbourhoods", "3-Hour Minimum", "5.0★ Rated", "No Hidden Fees"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Local Ottawa Moves — Any Neighbourhood, Any Size</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Ottawa is geographically large. Moving from one end of the city to the other can involve 40+ km of driving and significant urban traffic. What looks like a "local" move can still be a substantial logistical undertaking — particularly for larger homes moving between suburban communities like Stittsville and Orléans, or from the south end to Rockcliffe Park.</p>
            <p>For local Ottawa moves, we price by the hour with a 3-hour minimum. Our crew arrives at your origin address, carefully loads your belongings, drives to your destination, and unloads and places everything. Packing services are available as an add-on. All moves include furniture blankets, dollies, and the equipment needed for a safe, professional move.</p>
            <p>We're also one of Ottawa's most experienced movers when it comes to the specific logistics of the city's various neighbourhoods — elevator booking in Centretown condos, parking permit requirements on narrow Glebe streets, long-carry logistics in stacked townhouses in Barrhaven, and the routing challenges of older Vanier homes with tight access.</p>
          </div>
          <div className="mt-8">
            <h3 className="font-bold text-[#1A2332] mb-4">Neighbourhoods We Cover</h3>
            <div className="flex flex-wrap gap-2">
              {NEIGHBOURHOODS.map(n => (
                <span key={n} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{n}</span>
              ))}
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">+ All Ottawa communities</span>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[{ title: "Apartment Move", size: "1 Bedroom", time: "3–4 hours" },
              { title: "Home Move", size: "2 Bedroom", time: "4–6 hours" },
              { title: "Family Move", size: "3+ Bedroom", time: "6–9 hours" }].map(p => (
              <div key={p.title} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                <h4 className="font-bold text-[#1A2332]">{p.title}</h4>
                <p className="text-gray-500 text-sm">{p.size}</p>
                <div className="relative inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-2.5 py-1 mt-2 overflow-hidden mx-auto">
                  <span className="text-base font-bold text-[#C5A572] blur-sm select-none pointer-events-none">$000/hr</span>
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-[1px]">
                    <Lock className="h-3 w-3 text-[#C5A572] mr-1" />
                    <span className="text-[10px] font-bold text-[#1A2332]">Call for Rate</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-1">{p.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full text-left px-5 py-4 font-semibold text-[#1A2332] flex justify-between items-center" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}<span className="text-[#C5A572] text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Moving Anywhere Within Ottawa?</h2>
          <p className="text-white/70 mb-6">Get a quote for your local Ottawa move. We cover every neighbourhood in the city.</p>
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
