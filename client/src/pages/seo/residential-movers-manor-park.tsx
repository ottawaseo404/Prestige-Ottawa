import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Shield, Truck, MapPin } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function ResidentialMoversManorPark() {
  const faq = [
    { q: "How much do residential movers in Manor Park cost?", a: "Manor Park moves start at $155/hr (2 movers, 3-hour minimum). Manor Park homes are typically larger — most full-home moves are quoted at 6–10 hours depending on volume." },
    { q: "Do you have experience with Manor Park's older homes?", a: "Yes. Manor Park has many beautiful post-war homes with unique architecture. We're experienced in navigating narrow doorways, mature tree-lined properties, and established driveways common in the area." },
    { q: "Do you move diplomatic families in Manor Park?", a: "Yes. Manor Park is home to many diplomatic and embassy families. We offer fully confidential, white-glove moving services for international personnel." },
    { q: "Do you offer white-glove service for high-value Manor Park homes?", a: "Absolutely. Our premium service includes custom furniture wrapping, floor runners, door frame protection, and dedicated senior movers who handle everything with exceptional care." },
    { q: "Is Prestige Moving insured for Manor Park moves?", a: "Yes — $5M liability insurance, WSIB certification, and cargo coverage on every move." },
  ];

  return (
    <>
      <Helmet>
        <title>Residential Movers Manor Park Ottawa | White-Glove Service | Prestige Moving</title>
        <meta name="description" content="White-glove residential movers in Manor Park, Ottawa. Serving diplomatic families and upscale homes with fully insured, premium moving service. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/residential-movers-manor-park" />
        <meta property="og:title" content="Residential Movers Manor Park Ottawa | Prestige Moving" />
        <meta property="og:description" content="Manor Park's trusted residential movers. White-glove service for established homes and diplomatic families. Fully insured, 4.9-star rated." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": "Manor Park, Ottawa",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" /> Manor Park, Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Residential Movers Manor Park</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">Premium white-glove residential moving in Manor Park. Serving established homes, diplomatic families, and upscale properties with exceptional care and full insurance.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center mb-10">
              {[
                { icon: <Star className="h-6 w-6" />, label: "4.9-Star Rated", sub: "500+ verified reviews" },
                { icon: <Shield className="h-6 w-6" />, label: "White-Glove", sub: "Premium handling for valued homes" },
                { icon: <Truck className="h-6 w-6" />, label: "Fully Insured", sub: "$5M liability + cargo coverage" },
              ].map(i => (
                <div key={i.label} className="flex flex-col items-center gap-2 p-6 rounded-md border border-gray-100">
                  <div className="text-[#C5A572]">{i.icon}</div>
                  <p className="font-bold text-[#1A2332]">{i.label}</p>
                  <p className="text-gray-500 text-sm">{i.sub}</p>
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
            <h2 className="text-3xl font-bold mb-4">Moving in Manor Park?</h2>
            <p className="text-white/70 mb-8">Get a white-glove moving quote from Ottawa's most trusted residential movers.</p>
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
