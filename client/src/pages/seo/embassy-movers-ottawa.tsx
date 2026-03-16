import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Shield, Clock, Truck, Globe } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function EmbassyMoversOttawa() {
  const faq = [
    { q: "Do you move embassy staff and diplomatic personnel?", a: "Yes. Prestige Moving regularly handles moves for embassy staff, diplomatic personnel, and international organization employees relocating to or from Ottawa. We understand the unique requirements these moves involve." },
    { q: "Can you handle international shipping for embassy relocations?", a: "Yes. We coordinate international shipments for embassy staff moving abroad, including customs documentation, customs clearance coordination, and international freight partnerships." },
    { q: "Do you have experience with high-value and diplomatically sensitive items?", a: "Absolutely. Our white-glove teams are trained in the handling of art, antiques, government property, and sensitive items. Full discretion and confidentiality are standard on all embassy moves." },
    { q: "How do you handle last-minute diplomatic relocations?", a: "We maintain priority scheduling for diplomatic and embassy moves. Call us directly at (613) 600-4000 and we'll accommodate your timeline, including same-week and urgent moves." },
    { q: "Are you insured for high-value embassy moves?", a: "Yes. We carry full cargo liability insurance and offer declared-value coverage for high-value items including art, antiques, and diplomatic property." },
    { q: "Do you move to and from all embassy districts in Ottawa?", a: "Yes — we service all Ottawa embassy areas including the Rockcliffe Park embassy district, Manor Park, and Sandy Hill, as well as Gatineau and all surrounding areas." },
  ];

  return (
    <>
      <Helmet>
        <title>Embassy Movers Ottawa | Diplomatic Relocation Specialists | Prestige Moving</title>
        <meta name="description" content="Specialist embassy and diplomatic movers in Ottawa. Confidential, white-glove service for embassy staff, diplomats, and international personnel. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/embassy-movers-ottawa" />
        <meta property="og:title" content="Embassy Movers Ottawa | Diplomatic Relocation | Prestige Moving" />
        <meta property="og:description" content="Ottawa's trusted embassy and diplomatic moving specialists. Confidential, white-glove service for embassy staff and international personnel relocations." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": "Ottawa",
          "description": "Embassy and diplomatic relocation specialists in Ottawa. White-glove, confidential service for international personnel.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe className="h-4 w-4" /> Diplomatic & Embassy Moving · Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Embassy Movers Ottawa</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Ottawa is home to over 130 embassies. Prestige Moving provides trusted, confidential, white-glove moving services for embassy staff and diplomatic personnel.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-10">Why Ottawa Embassies Trust Prestige Moving</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Shield className="h-5 w-5" />, title: "Full Confidentiality", desc: "All embassy and diplomatic moves are handled with absolute discretion. Our crews sign confidentiality agreements and are background-checked." },
                { icon: <Star className="h-5 w-5" />, title: "White-Glove Handling", desc: "Art, antiques, official government property, and personal effects receive museum-grade wrapping and careful transport — nothing is rushed." },
                { icon: <Globe className="h-5 w-5" />, title: "International Coordination", desc: "We coordinate with international freight partners for diplomatic shipments crossing borders, including customs documentation support." },
                { icon: <Clock className="h-5 w-5" />, title: "Priority Scheduling", desc: "Diplomatic postings often involve tight timelines. We offer priority booking and accommodate urgent and same-week moves for embassy clients." },
                { icon: <Truck className="h-5 w-5" />, title: "Rockcliffe & Embassy District", desc: "We regularly service the Rockcliffe Park embassy district, Manor Park, Sandy Hill, and Gatineau — Ottawa's primary diplomatic residential areas." },
                { icon: <CheckCircle className="h-5 w-5" />, title: "Declared-Value Coverage", desc: "We offer declared-value insurance for high-value diplomatic and personal effects on every embassy move." },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-6 bg-white rounded-md border border-gray-100">
                  <div className="text-[#C5A572] mt-0.5 shrink-0">{item.icon}</div>
                  <div><h3 className="font-bold text-[#1A2332] mb-1">{item.title}</h3><p className="text-gray-600 text-sm">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Ottawa's Embassy & Diplomatic Community</h2>
            <p className="text-gray-600 mb-8">Ottawa hosts the embassies, high commissions, and consulates of over 130 countries, making it Canada's most diplomatically active city. With staff rotations every 2–4 years, embassy moves are a constant reality. Prestige Moving has built strong relationships with HR departments and relocation coordinators at embassies across Ottawa.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {["Rockcliffe Park Embassy District", "Manor Park Residences", "Sandy Hill Diplomatic Homes", "Gatineau & Aylmer", "New Edinburgh", "Centretown Diplomatic Apartments"].map(area => (
                <div key={area} className="flex items-center gap-2 p-4 bg-white rounded-md border border-gray-100">
                  <CheckCircle className="h-4 w-4 text-[#C5A572] shrink-0" />
                  <span className="text-[#1A2332] text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-10">Frequently Asked Questions</h2>
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
            <h2 className="text-3xl font-bold mb-4">Embassy & Diplomatic Moving in Ottawa</h2>
            <p className="text-white/70 mb-8">Contact Ottawa's most trusted diplomatic relocation specialists for a confidential consultation.</p>
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
