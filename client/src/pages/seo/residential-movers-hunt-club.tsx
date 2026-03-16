import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Shield, Truck, MapPin } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function ResidentialMoversHuntClub() {
  const faq = [
    { q: "How much do movers in Hunt Club Ottawa cost?", a: "Hunt Club residential moves start at $155/hr (2 movers, 3-hour minimum). Most 2-bedroom homes in Hunt Club complete in 4–6 hours." },
    { q: "Do you move from Hunt Club to other Ottawa areas?", a: "Yes — we handle all routes including Hunt Club to Barrhaven, Riverside South, Gloucester, Orleans, Kanata, and beyond Ottawa for long-distance moves." },
    { q: "Do you have experience with Hunt Club's newer developments?", a: "Yes. We're familiar with Hunt Club Park, Hunt Club Woods, and the newer communities along Spratt Road and Albion Road. We know the building access and parking requirements." },
    { q: "Can you help with senior moves in Hunt Club?", a: "Yes. We offer compassionate senior moving services and regularly help families in Hunt Club transition to retirement homes and assisted living facilities." },
    { q: "Are you fully insured for Hunt Club moves?", a: "Yes — $5M liability insurance, WSIB certified, and full cargo coverage on every Hunt Club residential move." },
  ];

  return (
    <>
      <Helmet>
        <title>Residential Movers Hunt Club Ottawa | Prestige Moving</title>
        <meta name="description" content="Trusted residential movers in Hunt Club, Ottawa. Experienced, insured crews for apartments, homes, and condos. Free quote: (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/residential-movers-hunt-club" />
        <meta property="og:title" content="Residential Movers Hunt Club Ottawa | Prestige Moving" />
        <meta property="og:description" content="Hunt Club's trusted residential movers. Fully insured, 4.9-star rated. Call Prestige Moving for a free quote." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": "Hunt Club, Ottawa",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" /> Hunt Club, Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Residential Movers Hunt Club</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">Serving Hunt Club, Hunt Club Park, and Hunt Club Woods with professional residential moving services. Fully insured, 4.9-star rated.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {["Hunt Club Park", "Hunt Club Woods", "Riverside Park", "Blossom Park (nearby)", "South Keys (nearby)", "Airport Heights (nearby)"].map(s => (
                <div key={s} className="flex items-center gap-2 p-4 bg-gray-50 rounded-md">
                  <CheckCircle className="h-4 w-4 text-[#C5A572] shrink-0" />
                  <span className="text-[#1A2332] text-sm font-medium">{s}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {faq.map(item => (
                <div key={item.q} className="border border-gray-200 rounded-md p-6">
                  <h3 className="font-bold text-[#1A2332] mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#1A2332] py-20 px-4 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Moving in Hunt Club?</h2>
            <p className="text-white/70 mb-8">Get your free quote from Ottawa's most trusted local movers.</p>
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
