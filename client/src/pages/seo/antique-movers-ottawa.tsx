import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Shield, Clock, Truck } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function AntiqueMoversOttawa() {
  const faq = [
    { q: "Do you have experience moving antiques and fine art?", a: "Yes. Our specialty item team has extensive experience with antique furniture, fine art, sculptures, china, heirlooms, and other irreplaceable items that require above-standard care and handling." },
    { q: "How do you protect antiques during a move?", a: "We use acid-free tissue paper, custom blanket wrapping, corner guards, and purpose-built crating for fragile antiques. Nothing is allowed to shift in transit." },
    { q: "Can you build custom crates for large antiques?", a: "Yes. For oversized or particularly fragile pieces — armoires, grandfather clocks, marble statuary — we can build custom wooden crates for maximum protection." },
    { q: "Are antiques insured during the move?", a: "Yes. We carry full cargo liability insurance and can arrange declared-value coverage for high-value antiques and art pieces. We recommend photographing items before the move." },
    { q: "Do you move antique pianos?", a: "Yes. We regularly move upright and grand pianos, including antique and restored models. Our piano moving team uses specialized equipment and padding for these sensitive instruments." },
    { q: "How much does it cost to move antiques in Ottawa?", a: "Antique and fine art moving is priced on a case-by-case basis depending on volume, fragility, and any custom crating required. Call us for a tailored quote." },
  ];

  return (
    <>
      <Helmet>
        <title>Antique Movers Ottawa | Fine Art & Heirloom Moving Specialists | Prestige Moving</title>
        <meta name="description" content="Specialist antique movers in Ottawa. Custom crating, white-glove handling, and full insurance for fine art, heirlooms, and irreplaceable furniture. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/antique-movers-ottawa" />
        <meta property="og:title" content="Antique Movers Ottawa | Fine Art & Heirloom Moving | Prestige Moving" />
        <meta property="og:description" content="Ottawa's antique and fine art moving specialists. Custom crating, white-glove handling, and declared-value coverage for every irreplaceable item." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": "Ottawa",
          "description": "Antique, fine art, and heirloom moving specialists in Ottawa. White-glove handling and custom crating.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 fill-current" /> White-Glove Antique & Fine Art Movers · Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Antique Movers Ottawa</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Your antiques, art, and heirlooms deserve more than a standard move. Prestige Moving's white-glove team handles irreplaceable pieces with the care they deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-6">Items We Specialize In</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {["Antique Furniture", "Fine Art & Paintings", "Sculptures & Statuary", "China & Glassware", "Grandfather Clocks", "Antique Pianos", "Oriental Rugs", "Mirrors & Chandeliers", "Collectibles & Memorabilia"].map(item => (
                <div key={item} className="flex items-center gap-2 p-4 bg-gray-50 rounded-md">
                  <CheckCircle className="h-4 w-4 text-[#C5A572] shrink-0" />
                  <span className="text-[#1A2332] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Shield className="h-5 w-5" />, title: "Museum-Grade Packing", desc: "Acid-free tissue, custom blankets, corner guards, and purpose-built wooden crating for maximum protection on every irreplaceable item." },
                { icon: <Truck className="h-5 w-5" />, title: "Climate-Controlled Transport", desc: "We use temperature-stable vehicles for sensitive wood, canvas, and lacquered surfaces that can be damaged by humidity and temperature swings." },
                { icon: <Clock className="h-5 w-5" />, title: "Unhurried, White-Glove Service", desc: "Antique moves are never rushed. We take the time needed to properly wrap, pad, load, and secure every item — however long it takes." },
                { icon: <Star className="h-5 w-5" />, title: "Declared-Value Coverage", desc: "In addition to our standard insurance, we offer declared-value coverage for your highest-value pieces. Sleep easy knowing everything is protected." },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-6 bg-white rounded-md border border-gray-100">
                  <div className="text-[#C5A572] mt-0.5 shrink-0">{item.icon}</div>
                  <div><h3 className="font-bold text-[#1A2332] mb-1">{item.title}</h3><p className="text-gray-600 text-sm">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faq.map(item => (
                <div key={item.q} className="border border-gray-200 rounded-md p-6 bg-white">
                  <h3 className="font-bold text-[#1A2332] mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1A2332] py-20 px-4 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Trust Your Antiques to Ottawa's Best</h2>
            <p className="text-white/70 mb-8">Get a white-glove moving quote for your antiques, fine art, and heirlooms.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
