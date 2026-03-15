import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, Home } from "lucide-react";

const FAQS = [
  { q: "How much does moving a house cost in Ottawa?", a: "A 3-bedroom house move in Ottawa typically costs $900–$1,800 (Deluxe: 3 movers + truck at $195/hr, 5–9 hours). A 4-bedroom house ranges from $1,400–$2,800 depending on volume and distance. Written quote before booking — final invoice always matches." },
  { q: "How long does it take to move a 3-bedroom house in Ottawa?", a: "A well-prepared 3-bedroom house with a 3-person crew typically takes 5–8 hours. Preparation (items pre-boxed, furniture ready to wrap) significantly reduces time. Larger homes with full basements take 7–12 hours or may benefit from a 2-day move." },
  { q: "Do you move from house to house in the same Ottawa neighbourhood?", a: "Yes — neighbourhood-to-neighbourhood and within-neighbourhood moves are common. Our standard rate applies regardless of the local distance. Many Ottawa house moves are under 10km apart." },
  { q: "What crew size do I need to move a house?", a: "For a 3-bedroom house, our Deluxe package (3 movers + truck) is the most efficient and cost-effective. For 4+ bedrooms, our Diamond package (4 movers + 2 trucks) often completes the job faster than a smaller crew would, more than offsetting the higher hourly rate." },
  { q: "When is the best time to book a house move in Ottawa?", a: "Mid-week (Tuesday–Thursday) and mid-month moves have the best crew availability and avoid the end-of-month rush. For July and August moves, book 4–6 weeks in advance. For spring or fall house moves, 2–3 weeks is typically sufficient." },
];

export default function HouseMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>House Movers Ottawa | Residential House Moving | Prestige Moving</title>
        <meta name="description" content="Professional house movers in Ottawa. Prestige Moving specializes in 2, 3, and 4-bedroom home moves across every Ottawa neighbourhood. Written quote, WSIB certified, 5.0★ rated. Call (613) 600-4000." />
        <meta name="keywords" content="house movers Ottawa, house moving Ottawa, Ottawa house movers, residential house movers Ottawa, move house Ottawa, home movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/house-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/house-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Home className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa House Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">House Movers Ottawa —<br className="hidden md:block" /> Every Neighbourhood, Every Home Size</h1>
            <p className="text-white/70 text-lg mb-8">Moving your house in Ottawa? Prestige Moving has served families across every Ottawa neighbourhood for over a decade — from 2-bedroom starter homes to 5-bedroom estates — with the same 5.0★ standard and the same written-quote guarantee on every job.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["All Home Sizes", "Every Ottawa Neighbourhood", "Written Quote = Final Invoice", "5.0★ Rated", "WSIB Certified"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">House Move Packages</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Premium", price: "$155/hr", crew: "2 Movers + Truck", best: "2-bed homes, small houses", min: "3-hr min" },
              { name: "Deluxe", price: "$195/hr", crew: "3 Movers + Truck", best: "3–4 bedroom homes", min: "3-hr min" },
              { name: "Diamond", price: "$315/hr", crew: "4 Movers + 2 Trucks", best: "Large homes & estates", min: "3-hr min" },
            ].map(pkg => (
              <div key={pkg.name} className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
                <div className="text-[#C5A572] text-2xl font-bold mb-1">{pkg.price}</div>
                <div className="text-[#1A2332] font-bold mb-1">{pkg.name}</div>
                <div className="text-gray-500 text-sm mb-3">{pkg.crew} · {pkg.min}</div>
                <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600">Best for: {pkg.best}</div>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ottawa House Moving — All Neighbourhoods</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Ottawa's residential housing market spans a remarkable range — from century homes in <Link href="/movers-in-hintonburg" className="text-[#C5A572] hover:underline">Hintonburg</Link> and <Link href="/residential-movers-the-glebe" className="text-[#C5A572] hover:underline">The Glebe</Link> with narrow staircases and mature-treed lots, to brand-new 2,500 sq ft homes in <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link> and <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, to estate properties in <Link href="/movers-in-rockcliffe-park" className="text-[#C5A572] hover:underline">Rockcliffe Park</Link> and <Link href="/movers-in-manotick" className="text-[#C5A572] hover:underline">Manotick</Link>. Each home type requires a different approach to efficient, safe moving.</p>
            <p>Prestige Moving serves all of these. We've moved families out of Glebe Victorian row homes through 28-inch doorways, out of Kanata new builds with 3-car garages worth of contents, and from Rockcliffe estates where the art collection needed as much attention as the furniture. The preparation for each of these moves looks different — and our project coordinator discusses the specifics of your home before any crew arrives.</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">House Movers Ottawa — FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Book Ottawa House Movers</h2>
          <p className="text-white/65 mb-8">Written quote · All sizes · All neighbourhoods · 5.0★ rated</p>
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
