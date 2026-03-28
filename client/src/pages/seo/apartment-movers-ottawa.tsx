import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";
import { Phone, ArrowRight, CheckCircle2, Star, Shield, Clock, TruckIcon, Building2, ChevronDown, Users, Package, MapPin, Lock } from "lucide-react";

const FAQS = [
  { q: "How much does it cost to hire apartment movers in Ottawa?", a: "Apartment moves in Ottawa typically range from $350–$900 for a one-bedroom and $550–$1,400 for a two-bedroom, depending on floor, elevator availability, and distance. Prestige Moving's Premium package starts at $155/hr (2 movers + truck) with a 3-hour minimum. You receive a written quote before booking — no surprises on the invoice." },
  { q: "Do you handle high-rise elevator bookings?", a: "Yes. We coordinate with building management for elevator booking, loading bay scheduling, and after-hours access as needed. We handle all the logistics so you don't have to." },
  { q: "How far in advance should I book apartment movers in Ottawa?", a: "For standard bookings, 1–2 weeks is ideal. For end-of-month moves (the busiest period), book 3–4 weeks ahead. We offer limited last-minute availability — call (613) 600-4000 to check." },
  { q: "Do you move apartments in all Ottawa buildings?", a: "Yes — we serve every Ottawa building type: low-rise walk-ups, mid-rise apartments, high-rise condos, and mixed-use residential towers. We bring extended ramps, dollies, and all the equipment needed for any building configuration." },
  { q: "Is tipping apartment movers in Ottawa expected?", a: "Tipping is appreciated but never expected or required. A tip of $20–$40 per mover for a job well done is a common practice. Our movers are paid professional wages and our service standard doesn't depend on tips." },
];

const PACKAGE_ITEMS = [
  { label: "Premium", price: "$155/hr", crew: "2 Movers + Truck", best: "1–2 Bedroom Apartments" },
  { label: "Deluxe", price: "$195/hr", crew: "3 Movers + Truck", best: "2–3 Bedroom Apartments" },
  { label: "Diamond", price: "$315/hr", crew: "4 Movers + 2 Trucks", best: "Large Apartments & Lofts" },
];

export default function ApartmentMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Apartment Movers Ottawa | Professional Apartment Moving | Prestige Moving</title>
        <meta name="description" content="Ottawa's top-rated apartment movers. Prestige Moving specializes in apartment and high-rise moves — elevator booking, loading bay coordination, and full building coverage. WSIB certified. Call (613) 600-4000." />
        <meta name="keywords" content="apartment movers Ottawa, apartment moving Ottawa, Ottawa apartment movers, high-rise movers Ottawa, apartment moving company Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/apartment-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/apartment-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" }, "areaServed": { "@type": "City", "name": "Ottawa" } })}</script>
      </Helmet>
      <SharedNavigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Building2 className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Apartment Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Ottawa's Apartment Movers<br className="hidden md:block" /> — Built for Every Building</h1>
            <p className="text-white/70 text-lg mb-8">From bachelor units to penthouse lofts, Prestige Moving handles Ottawa apartment moves with elevator coordination, full building coverage, and a 5.0★ track record on 400+ verified reviews.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
            {["5.0★ Google Rating", "400+ Verified Reviews", "WSIB Certified", "$2M+ Insurance", "No Hidden Fees"].map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-2 text-center">Transparent Apartment Moving Rates</h2>
          <p className="text-gray-500 text-center mb-10">3-hour minimum · All-inclusive · Written quote before booking</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PACKAGE_ITEMS.map(pkg => (
              <div key={pkg.label} className="border border-gray-200 rounded-2xl p-6 text-center hover:border-[#C5A572] transition-colors">
                <a href="tel:6136004000" className="relative inline-flex items-center gap-1.5 bg-gray-100 rounded-lg px-3 py-1.5 mb-1 overflow-hidden mx-auto cursor-pointer">
                  <span className="text-xl font-bold text-[#C5A572] blur-sm select-none pointer-events-none">$000/hr</span>
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-[1px]">
                    <Lock className="h-3.5 w-3.5 text-[#C5A572] mr-1" />
                    <span className="text-xs font-bold text-[#1A2332]">Call for Rate</span>
                  </div>
                </a>
                <div className="text-[#1A2332] font-bold text-lg mb-1">{pkg.label}</div>
                <div className="text-gray-500 text-sm mb-3">{pkg.crew}</div>
                <div className="bg-[#1A2332]/5 rounded-lg px-3 py-2 text-xs text-gray-600 font-medium">Best for: {pkg.best}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Apartments */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-10 text-center">Why Ottawa Apartment Renters Choose Prestige Moving</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: "Elevator Booking Handled", desc: "We coordinate directly with your building management for elevator booking, loading bay access, and move-in/move-out window scheduling — so you don't have to." },
              { icon: Shield, title: "Fully Insured & WSIB Certified", desc: "$2M+ commercial general liability insurance and current WSIB certification protects you, your belongings, and your building from any liability." },
              { icon: Clock, title: "Precise Timing for Building Windows", desc: "Many Ottawa buildings have specific move-in windows. Our crew arrives on time, works efficiently, and completes within your allotted building access period." },
              { icon: TruckIcon, title: "Extended Ramp Equipment", desc: "When loading bays are limited, our extended ramps bridge the gap. We've moved apartments in every configuration Ottawa buildings offer." },
              { icon: Package, title: "Full Packing Service Available", desc: "Don't want to pack yourself? We pack every room, wrap every item, and have your apartment boxed and ready before our crew even starts loading." },
              { icon: Star, title: "5.0★ on 400+ Google Reviews", desc: "Apartment renters across Ottawa have rated Prestige Moving a perfect 5.0 stars. Read real reviews from Centretown, Westboro, Kanata, and every Ottawa neighbourhood." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-[#C5A572]" />
                </div>
                <h3 className="font-bold text-[#1A2332] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Apartment Moving in Ottawa: What You Need to Know</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Ottawa is one of Canada's most active apartment rental markets, with over 45% of the city's population living in rental apartments or condos at any given time. The city's federal government employment base, its two universities (Carleton and uOttawa), and its growing tech sector generate constant movement within and into the rental market. Apartment moves in Ottawa are consequently one of the most common and most logistically specific types of residential relocation — and they require a moving company that understands the building-specific challenges every Ottawa apartment presents.</p>
            <p>The most consistent challenge in Ottawa apartment moving is building access coordination. High-rise buildings in <Link href="/residential-movers-centretown" className="text-[#C5A572] hover:underline">Centretown</Link>, <Link href="/residential-movers-westboro" className="text-[#C5A572] hover:underline">Westboro</Link>, and <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link> all have formal move-in and move-out procedures: elevator bookings that must be made 48–72 hours in advance, loading bay reservations, and move window time limits that the building enforces strictly. A moving crew that shows up without the elevator pre-booked — or that fails to complete within the building's allotted window — creates a problem for the client that can result in additional building fees, complaints from neighbours, and a move that runs hours over its planned schedule.</p>
            <p>Prestige Moving's apartment move protocol begins with building coordination. We contact your building management when you book, confirm the elevator and loading bay requirements, reserve the necessary access window, and ensure our crew arrives with everything needed to move efficiently within your building's constraints. For move-out buildings and move-in buildings both, this pre-coordination is standard — not optional.</p>
            <p>Low-rise walk-up apartments present a different set of challenges. Buildings without elevators — common in older Ottawa neighbourhoods like <Link href="/movers-in-hintonburg" className="text-[#C5A572] hover:underline">Hintonburg</Link>, <Link href="/movers-in-sandy-hill" className="text-[#C5A572] hover:underline">Sandy Hill</Link>, and <Link href="/movers-in-alta-vista" className="text-[#C5A572] hover:underline">Alta Vista</Link> — require hand-carrying all furniture and boxes up narrow staircases. Our crew uses stair-climbing dollies and furniture straps to navigate these buildings safely and efficiently, without damage to your items or the building's walls and railings.</p>
            <p>The end-of-month surge is a defining feature of Ottawa's apartment moving market. Most apartment leases expire on the last day of the month, creating a concentrated demand for moving crews on the last weekend of each month. If you're moving at month-end, booking 3–4 weeks in advance is essential to secure your preferred date. For moves at other times of the month, 1–2 weeks' notice is typically sufficient, and we occasionally have same-day and next-day availability for urgent situations — call <a href="tel:6136004000" className="text-[#C5A572] hover:underline">(613) 600-4000</a> to check current availability.</p>
            <p>Prestige Moving serves Ottawa apartment movers across every neighbourhood — from <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link> in the east to <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link> in the west, and from <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link> in the south to the dense urban core of Centretown and Sandy Hill. Every Ottawa apartment move is backed by $2M+ liability insurance, WSIB certification, and a written quote that matches your final invoice exactly. We're the <Link href="/" className="text-[#C5A572] hover:underline">Ottawa movers</Link> apartment renters across the city call first.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Apartment Movers Ottawa — FAQ</h2>
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

      <SeoKeywordsSection currentPage="/apartment-movers-ottawa" />

      {/* CTA */}
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Book Your Ottawa Apartment Move?</h2>
          <p className="text-white/65 mb-8">Written quote · No hidden fees · 5.0★ rated crew · WSIB certified</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Book Online Now <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
