import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, Package, Star } from "lucide-react";

const FAQS = [
  { q: "What does full-service packing and moving include?", a: "Full-service packing and moving includes: all packing materials (boxes, paper, bubble wrap, wardrobe boxes), professional packing of every room, labelling all boxes by room and contents, loading and transporting to the new home, unloading and placing boxes and furniture, and unpacking if selected. It is everything handled for you from the first wrapped dish to the last box opened." },
  { q: "How much does full-service packing and moving cost in Ottawa?", a: "Full-service packing and moving in Ottawa is typically 30–50% more than a move-only service. For a 2-bedroom apartment, expect $900–$1,500 all-inclusive. For a 3–4 bedroom house, $1,800–$3,500. All-inclusive means packing materials, labour, truck, and destination service. Written quote provided after a home inventory." },
  { q: "How long does it take to pack a 2-bedroom apartment?", a: "A 2-bedroom apartment typically takes 3–5 hours for a professional 2-person packing crew. A 3–4 bedroom house takes 6–10 hours. Packing and moving can often be completed in a single day for apartments; larger homes may benefit from packing the day before and moving the day after." },
  { q: "Do I need to do anything before the packing crew arrives?", a: "The less you do beforehand, the less likely something gets mixed up or left behind. However, it helps to: separate items you're NOT moving (throw-aways, donations, items going to family), have pets secured or off-site, and ensure all rooms are accessible. We handle everything else." },
  { q: "Do you provide all the packing supplies?", a: "Yes — all packing materials are included: double-wall boxes in multiple sizes, packing paper, bubble wrap, foam padding for fragile items, picture boxes for artwork and mirrors, and wardrobe boxes that keep hanging clothes wrinkle-free. There's no need to source any packing supplies yourself." },
];

export default function PackingAndMovingOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Packing and Moving Ottawa | Full-Service Packing + Moving | Prestige Moving</title>
        <meta name="description" content="Full-service packing and moving in Ottawa. Prestige Moving packs every room, supplies all materials, and completes your entire move — dishes to duvets. Written quote, 5.0★ rated. Call (613) 600-4000." />
        <meta name="keywords" content="packing and moving Ottawa, full service moving Ottawa, Ottawa packing moving company, professional packing movers Ottawa, full service packers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/packing-and-moving-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/packing-and-moving-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Package className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Full-Service Ottawa Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Packing and Moving Ottawa —<br className="hidden md:block" /> Everything Done For You</h1>
            <p className="text-white/70 text-lg mb-8">Why spend your evenings and weekends packing boxes when Prestige Moving can do it professionally, faster, and with better protection? Our full-service packing and moving combines expert packing, all materials supplied, full transport, and destination placement — one crew, one day, one invoice.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Full-Service Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["All Packing Materials Included", "Every Room Packed Professionally", "Labelled by Room & Contents", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-10 text-center">What's Included in Full-Service Packing & Moving</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "All Packing Materials", desc: "Double-wall boxes, packing paper, bubble wrap, foam padding, picture boxes, wardrobe boxes — everything provided, nothing for you to source." },
              { title: "Kitchen Packing", desc: "Every dish, glass, pot, and pantry item packed with dish wrap and cell dividers. Fragile items individually wrapped." },
              { title: "Bedroom Packing", desc: "Clothing into wardrobe boxes (stays hanging), linens folded and boxed, personal items carefully packed and labelled." },
              { title: "Living Room & Valuables", desc: "Art, mirrors, and electronics wrapped individually. Bookshelves packed by section. Decor items cushioned and secured." },
              { title: "Professional Labelling", desc: "Every box labelled with contents and destination room so the unload at the new home is organized and efficient." },
              { title: "Transport & Placement", desc: "All packed boxes and furniture loaded, transported, unloaded, and placed exactly where you direct at the new home." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#1A2332] mb-2 text-sm">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Packing & Moving Ottawa — FAQ</h2>
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
          <p className="text-center text-sm text-gray-500 mt-6">Related: <Link href="/ottawa-packing-services" className="text-[#C5A572] hover:underline">Ottawa Packing Services</Link> · <Link href="/moving-boxes-packing-supplies-ottawa" className="text-[#C5A572] hover:underline">Moving Boxes Ottawa</Link></p>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Get Your Full-Service Packing & Moving Quote</h2>
          <p className="text-white/65 mb-8">All materials included · 5.0★ rated · Written quote · Zero packing stress</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Book Full-Service Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
