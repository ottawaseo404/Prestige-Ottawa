import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, Home } from "lucide-react";

const FAQS = [
  { q: "What's different about moving a townhouse vs. a house or apartment?", a: "Townhouses combine challenges from both: narrow staircase access (like apartments) with the volume of a full house. Multiple levels mean everything must travel up and down stairs, often in a tight space. Our crew uses stair-climbing dollies and furniture straps to move efficiently through these layouts." },
  { q: "How much does it cost to move a townhouse in Ottawa?", a: "A 2-bedroom townhouse in Ottawa typically takes 4–6 hours with our Deluxe crew (3 movers + truck at $195/hr), for a total of $780–$1,170. A 3-bedroom townhouse takes 5–8 hours. Written quote provided before booking based on your specific inventory and addresses." },
  { q: "Do you move garage and storage room items in townhouses?", a: "Yes. Garage shelving, tools, outdoor equipment, and storage room contents are all included in your move. Let us know during your quote so we can accurately estimate the full volume." },
  { q: "Can you move a townhouse in one day?", a: "Most Ottawa townhouse moves are completed in one day. Larger townhomes (3+ bedrooms, full basements) may benefit from a two-day move: pack and stage on day one, load and transport on day two. We'll recommend the best configuration based on your home." },
];

export default function TownhouseMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Townhouse Movers Ottawa | Ottawa Townhouse Moving Specialists | Prestige Moving</title>
        <meta name="description" content="Townhouse movers in Ottawa. Prestige Moving specializes in multi-level townhouse moves with stair-climbing equipment, full furniture protection, and efficient multi-floor logistics. Call (613) 600-4000." />
        <meta name="keywords" content="townhouse movers Ottawa, townhouse moving Ottawa, Ottawa townhouse movers, move townhouse Ottawa, townhome movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/townhouse-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/townhouse-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Home className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Townhouse Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Townhouse Movers Ottawa —<br className="hidden md:block" /> Multi-Level Moving Specialists</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa's townhouse communities in Kanata, Barrhaven, Orleans, and Nepean are home to thousands of families. Townhouse moves require a crew that knows how to navigate narrow staircases efficiently with full-size furniture — without damaging your home or your belongings.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold text-[#1A2332] mb-5">What Makes Townhouse Moves Unique</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                <p>Ottawa's townhouse market has expanded significantly across <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, <Link href="/movers-in-riverside-south" className="text-[#C5A572] hover:underline">Riverside South</Link>, and <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link>. These homes offer the space of a house at a more accessible price point — typically 3 floors, 1,400–1,800 sq ft, with narrow interior staircases and shared driveways in townhouse complexes.</p>
                <p>The narrow staircase is the defining challenge of a townhouse move. Standard home movers can navigate a typical 36-inch staircase with most furniture. Ottawa's newer townhouse developments sometimes have staircases as narrow as 32 inches, requiring careful measurement of oversized items (king beds, large sectionals) before moving day to plan disassembly where needed.</p>
                <p>Our Deluxe package (3 movers + truck at $195/hr) is the most efficient configuration for a standard 2–3 bedroom Ottawa townhouse. Three crew members working in relay on a staircase — one at bottom, one in the middle, one at top — move items much faster than two movers climbing the full flight with each piece.</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1A2332] mb-5">Our Townhouse Move Inclusions</h2>
              <div className="space-y-3">
                {[
                  "Stair-climbing power dollies for heavy items",
                  "Full furniture blanket wrapping on all pieces",
                  "Stair wall and banister protection runners",
                  "Disassembly of oversized items that don't fit the staircase",
                  "Reassembly at destination — all hardware retained and labelled",
                  "Floor runners in high-traffic staircase paths",
                  "Garage and storage room items included",
                  "Written quote — final invoice always matches",
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Townhouse Movers Ottawa — FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Book Your Ottawa Townhouse Move</h2>
          <p className="text-white/65 mb-8">Stair-climbing equipment · All protection included · 5.0★ rated · Written quote</p>
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
