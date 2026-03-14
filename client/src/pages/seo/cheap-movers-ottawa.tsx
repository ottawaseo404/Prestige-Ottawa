import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, Shield, Clock, TruckIcon, ChevronDown, DollarSign, AlertTriangle, Star } from "lucide-react";

const FAQS = [
  { q: "What is the cheapest time to move in Ottawa?", a: "The most affordable times to move in Ottawa are mid-week (Tuesday–Thursday) and mid-month — avoiding the end-of-month surge when demand peaks. Winter moves (November–March) are also typically cheaper than summer peak season. Prestige Moving's rates are consistent year-round, but availability and flexibility are best outside peak periods." },
  { q: "How much do cheap movers charge in Ottawa?", a: "Low-cost Ottawa movers typically advertise $99–$129/hr but often add fuel surcharges, stair fees, and travel charges that inflate the final bill. Prestige Moving's Premium package starts at $155/hr — all-inclusive, no hidden fees, written quote that matches your final invoice. Our 'affordable' is real, not a bait rate." },
  { q: "Is it worth hiring cheap movers?", a: "The cheapest advertised rate frequently isn't the cheapest final bill. Rogue movers use low rates to book jobs, then add charges on the day. Uninsured crews expose you to liability. Damaged furniture from untrained handlers costs more to repair or replace than the difference between budget movers and professionals. A written quote from a licensed, insured, reviewed company is the safest way to get affordable moving." },
  { q: "Do you offer discounts for students or seniors?", a: "We offer reduced rates for off-peak and mid-week moves which benefit students and seniors significantly. Call (613) 600-4000 to discuss your move — we always try to find the most cost-effective configuration for your situation." },
  { q: "What's the minimum cost for a move in Ottawa?", a: "Prestige Moving has a 3-hour minimum, so the minimum for our Premium package (2 movers + truck) is $465. This covers most bachelor or one-bedroom apartment moves in central Ottawa. Additional hours are billed at the same hourly rate." },
];

const RED_FLAGS = [
  { title: "No Written Quote", desc: "Any mover that won't put a price in writing before the move is planning to change it on moving day." },
  { title: "No WSIB Certificate", desc: "Uninsured crews mean you're liable for injuries on your property. Legal requirement in Ontario." },
  { title: "Suspiciously Low Rate", desc: "A $79/hr 'deal' usually ends with a $600 invoice full of add-on charges you never agreed to." },
  { title: "No Google Reviews", desc: "A legitimate company that's operated for more than a year has a traceable review history. Zero reviews = no history." },
  { title: "Rented Truck + Day Labour", desc: "No liability, no training, no accountability. If something breaks, there is no recourse." },
  { title: "Cash-Only Payment", desc: "Cash-only payment removes any recourse if the service doesn't meet expectations or if damage occurs." },
];

export default function CheapMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Cheap Movers Ottawa | Affordable Moving with No Hidden Fees | Prestige Moving</title>
        <meta name="description" content="Looking for cheap movers in Ottawa? Prestige Moving offers transparent, all-inclusive rates starting at $155/hr — no hidden fees, no bait pricing. Written quote guaranteed. Call (613) 600-4000." />
        <meta name="keywords" content="cheap movers Ottawa, affordable movers Ottawa, cheap moving Ottawa, budget movers Ottawa, low cost movers Ottawa, inexpensive movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/cheap-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/cheap-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />

      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <DollarSign className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Affordable Ottawa Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Cheap Movers Ottawa —<br className="hidden md:block" /> Transparent Pricing, Zero Hidden Fees</h1>
            <p className="text-white/70 text-lg mb-8">The cheapest mover isn't always the one with the lowest advertised rate. Prestige Moving offers genuinely all-inclusive pricing — what you're quoted is what you pay. From $155/hr, written quote before booking.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Honest Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
            {["From $155/hr All-Inclusive", "No Fuel Surcharges", "No Stair Fees", "No Travel Add-Ons", "Written Quote = Final Invoice"].map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-3 text-center">Our Rates — All-Inclusive, No Surprises</h2>
          <p className="text-gray-500 text-center mb-10 text-sm">No fuel surcharge · No stair fee · No travel charge · No minimum distance fee</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Premium", price: "$155/hr", crew: "2 Movers + Truck", min: "3-hr min = $465", best: "Apartments, 1–2 bed" },
              { name: "Deluxe", price: "$195/hr", crew: "3 Movers + Truck", min: "3-hr min = $585", best: "Houses, 3–4 bed" },
              { name: "Diamond", price: "$315/hr", crew: "4 Movers + 2 Trucks", min: "3-hr min = $945", best: "Large homes, estates" },
            ].map(pkg => (
              <div key={pkg.name} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <div className="text-[#C5A572] text-2xl font-bold mb-1">{pkg.price}</div>
                <div className="text-[#1A2332] font-bold mb-1">{pkg.name}</div>
                <div className="text-gray-500 text-sm mb-2">{pkg.crew}</div>
                <div className="text-gray-400 text-xs mb-3">{pkg.min}</div>
                <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600">Best for: {pkg.best}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">Travel fees may apply for moves outside central Ottawa. Always disclosed in your written quote.</p>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-3 text-center">How to Spot a Bad "Cheap" Mover in Ottawa</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto text-sm">Cheap advertised rates often hide fees, shortcuts, and risks that cost more in the end. Know what to watch for.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {RED_FLAGS.map(({ title, desc }) => (
              <div key={title} className="bg-white border border-red-100 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-red-400 shrink-0" />
                  <span className="font-bold text-[#1A2332] text-sm">{title}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">The Real Cost of Moving in Ottawa</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>When Ottawa residents search for "cheap movers," they're usually looking for one thing: a moving company that won't surprise them with a bill twice what they expected. That's a completely reasonable goal — and it's exactly what transparent, written-quote pricing delivers. The problem is that the movers advertising the cheapest hourly rates in Ottawa are frequently not the ones with the cheapest final invoices.</p>
            <p>The pattern of bait-and-switch pricing in the Ottawa moving market works like this: a company advertises $99/hr, gets the booking, and then on moving day begins adding fees — a fuel surcharge ($50–$100), a stair fee ($25 per flight), a long carry charge for distances over 50 feet, a minimum truck fee, and an overtime rate that kicks in after a suspiciously short "standard window." By the end of a move that should have cost $400, the invoice is $750 — and the client has no recourse because they signed a contract with no fixed total.</p>
            <p>Prestige Moving's approach is different: <strong>our written quote is your final price.</strong> We calculate everything upfront — travel time from our location to yours, stairs at either address, distance between origin and destination, and the crew size you need. The number in your quote is the number on your invoice. Our rates start at $155/hr for our 2-mover Premium package, and for most Ottawa apartment and small home moves, the total comes to $465–$900 — genuinely competitive with any honest Ottawa moving company.</p>
            <p>See also: <Link href="/how-much-does-moving-cost-ottawa" className="text-[#C5A572] hover:underline">Complete 2026 Ottawa Moving Cost Guide</Link> · <Link href="/affordable-movers-ottawa" className="text-[#C5A572] hover:underline">Affordable Movers Ottawa</Link></p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">FAQ — Cheap Movers Ottawa</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Affordable Ottawa Moving — Get Your Written Quote</h2>
          <p className="text-white/65 mb-8">From $155/hr · No hidden fees · 5.0★ rated · Written quote = final price</p>
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
