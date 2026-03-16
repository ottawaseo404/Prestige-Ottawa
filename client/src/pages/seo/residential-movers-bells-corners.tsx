import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Shield, Truck, MapPin } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function ResidentialMoversBellsCorners() {
  const faq = [
    { q: "How much do residential movers in Bells Corners cost?", a: "Residential moves in Bells Corners start at $155/hr with 2 movers (3-hour minimum). Most 2-bedroom apartments complete in 3–5 hours; full houses typically 5–8 hours." },
    { q: "Do you move from Bells Corners to other Ottawa areas?", a: "Yes — we handle moves from Bells Corners to Kanata, Stittsville, Nepean, Barrhaven, and all Ottawa neighbourhoods, as well as long-distance moves across Canada." },
    { q: "Can you help with packing in Bells Corners?", a: "Absolutely. We offer full packing, partial packing, and unpacking services. Our packers bring all materials and wrap everything to professional standards." },
    { q: "Do you move seniors in Bells Corners?", a: "Yes. We have a dedicated senior moving team experienced in compassionate, careful relocations for retirement communities and assisted living facilities in the Bells Corners area." },
    { q: "Are you insured for residential moves in Bells Corners?", a: "Yes — fully insured with $5M liability, WSIB certification, and cargo coverage on every move." },
  ];

  return (
    <>
      <Helmet>
        <title>Residential Movers Bells Corners Ottawa | Prestige Moving</title>
        <meta name="description" content="Trusted residential movers in Bells Corners, Ottawa. Local expertise, fully insured, 4.9-star rated. Call Prestige Moving for a free quote: (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/residential-movers-bells-corners" />
        <meta property="og:title" content="Residential Movers Bells Corners | Prestige Moving Ottawa" />
        <meta property="og:description" content="Bells Corners' most trusted residential movers. Fully insured, experienced crews, and guaranteed pricing. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": "Bells Corners, Ottawa",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" /> Bells Corners, Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Residential Movers Bells Corners</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">Ottawa's top-rated residential movers serving Bells Corners. Fully insured, experienced crews, and guaranteed pricing on every move.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center mb-12">
              {[
                { icon: <Star className="h-6 w-6" />, label: "4.9-Star Rated", sub: "500+ verified reviews" },
                { icon: <Shield className="h-6 w-6" />, label: "Fully Insured", sub: "$5M liability + WSIB" },
                { icon: <Truck className="h-6 w-6" />, label: "Local Experts", sub: "Bells Corners specialists" },
              ].map(i => (
                <div key={i.label} className="flex flex-col items-center gap-2 p-6 rounded-md border border-gray-100">
                  <div className="text-[#C5A572]">{i.icon}</div>
                  <p className="font-bold text-[#1A2332]">{i.label}</p>
                  <p className="text-gray-500 text-sm">{i.sub}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {["Apartments & Condos", "Single-Family Homes", "Townhouses", "Senior Moves", "Full Packing & Unpacking", "Piano & Specialty Items"].map(s => (
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
            <h2 className="text-3xl font-bold mb-4">Moving in Bells Corners?</h2>
            <p className="text-white/70 mb-8">Get your free quote from Ottawa's top-rated residential movers.</p>
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
