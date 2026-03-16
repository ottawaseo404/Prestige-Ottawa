import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Shield, Truck, MapPin } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function ResidentialMoversVanier() {
  const faq = [
    { q: "How much do movers in Vanier Ottawa cost?", a: "Vanier residential moves start at $155/hr (2 movers, 3-hour minimum). Most apartments in Vanier complete in 3–5 hours. Call for an exact estimate." },
    { q: "Do you offer bilingual moving services in Vanier?", a: "Oui. Vanier is a predominantly French-speaking community, and we have French-speaking crew members and coordinators available for all Vanier moves." },
    { q: "Do you move from Vanier to Gatineau?", a: "Yes — Vanier to Gatineau is a short trip across the river and one of our common move routes. We're familiar with the Bridge Street and Montreal Road corridors." },
    { q: "Do you help with apartment moves in Vanier?", a: "Absolutely. Vanier has many multi-story apartment buildings and we're experienced with elevator reservations, loading dock access, and tight staircase moves throughout the area." },
    { q: "Are you insured for Vanier moves?", a: "Yes — $5M liability, WSIB, and full cargo liability insurance on every move." },
  ];

  return (
    <>
      <Helmet>
        <title>Residential Movers Vanier Ottawa | Bilingual Moving Service | Prestige Moving</title>
        <meta name="description" content="Trusted residential movers in Vanier, Ottawa. Bilingual French/English service. Apartments, condos, and homes. Free quote: (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/residential-movers-vanier" />
        <meta property="og:title" content="Residential Movers Vanier Ottawa | Prestige Moving" />
        <meta property="og:description" content="Vanier's bilingual residential movers. Fully insured, 4.9-star rated. French and English service available." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": "Vanier, Ottawa",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" /> Vanier, Ottawa · Service bilingue
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Residential Movers Vanier</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">Bilingual French and English moving service in Vanier. Fully insured, experienced crews for apartments, condos, and homes throughout the Vanier community.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {["Montreal Road Corridor", "McArthur Avenue", "North Vanier", "Beechwood Village (nearby)", "Manor Park (nearby)", "New Edinburgh (nearby)"].map(s => (
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
            <h2 className="text-3xl font-bold mb-4">Moving in Vanier? / Déménagement à Vanier?</h2>
            <p className="text-white/70 mb-8">Get your free quote from Ottawa's bilingual moving specialists.</p>
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
