import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Shield, Truck, MapPin } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function ResidentialMoversBlackburnHamlet() {
  const faq = [
    { q: "How much do movers in Blackburn Hamlet cost?", a: "Blackburn Hamlet residential moves start at $155/hr (2 movers, 3-hour minimum). Most single-family homes in the area complete in 5–8 hours." },
    { q: "Do you move between Blackburn Hamlet and Orleans?", a: "Yes — Blackburn Hamlet to Orleans is one of our most common east-end routes. We know the area well and provide competitive pricing for neighbouring community moves." },
    { q: "Do you help with packing in Blackburn Hamlet?", a: "Yes. Full packing, partial packing, and unpacking services are available. We bring all materials and wrap everything to professional standards." },
    { q: "Are you familiar with Blackburn Hamlet's neighbourhoods?", a: "Yes. We regularly service Blackburn Hamlet's established streets — including the older post-war bungalows and the newer infill homes in the area." },
    { q: "Is Prestige Moving insured for Blackburn Hamlet moves?", a: "Fully insured — $5M liability insurance, WSIB certified, and cargo coverage on every move." },
  ];

  return (
    <>
      <Helmet>
        <title>Residential Movers Blackburn Hamlet Ottawa | Prestige Moving</title>
        <meta name="description" content="Trusted residential movers in Blackburn Hamlet, Ottawa. Fully insured, locally experienced crews. Free quote available. Call Prestige Moving: (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/residential-movers-blackburn-hamlet" />
        <meta property="og:title" content="Residential Movers Blackburn Hamlet | Prestige Moving Ottawa" />
        <meta property="og:description" content="Blackburn Hamlet's trusted residential movers. Fully insured, 4.9-star rated. Free quote available." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": "Blackburn Hamlet, Ottawa",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" /> Blackburn Hamlet, Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Residential Movers Blackburn Hamlet</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">Serving Blackburn Hamlet families with professional, fully insured residential moving services. 4.9-star rated, locally experienced.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {["Single-Family Homes", "Apartments & Condos", "Townhouses", "Senior Moves", "Packing & Unpacking", "Local & Long-Distance"].map(s => (
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
            <h2 className="text-3xl font-bold mb-4">Moving in Blackburn Hamlet?</h2>
            <p className="text-white/70 mb-8">Get your free quote from Ottawa's most trusted residential movers.</p>
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
