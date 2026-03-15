import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, Globe, Shield, FileText, Package } from "lucide-react";
import { Link } from "wouter";
import SharedFooter from "@/components/shared-footer";
import SharedNavigation from "@/components/shared-navigation";

export default function InternationalMoversOttawa() {
  const countries = [
    "United States", "United Kingdom", "France", "Germany", "Australia",
    "New Zealand", "UAE", "Japan", "Netherlands", "Switzerland", "Singapore", "South Africa"
  ];

  const faq = [
    {
      q: "Can Prestige Moving handle my international move from Ottawa?",
      a: "Yes. We coordinate full international relocations from Ottawa, partnering with licensed FIDI-accredited overseas agents to ensure your shipment is handled professionally at every step — from Ottawa packing to overseas delivery."
    },
    {
      q: "What is the difference between FCL and LCL for international moves?",
      a: "FCL (Full Container Load) means you get a private container — ideal for 2-bedroom+ homes. LCL (Less than Container Load) consolidates your items with others, costing less but taking longer. We'll recommend the right option based on your volume."
    },
    {
      q: "How long does an international move from Ottawa take?",
      a: "Transit times vary by destination. USA: 5–14 days. Europe: 4–8 weeks by sea. Australia/Asia: 6–10 weeks. Air freight is faster (7–14 days) but costs significantly more."
    },
    {
      q: "Do I need to be present for international packing?",
      a: "We strongly recommend being present. Our packers will document every item for customs inventory, use specialized export-grade packing materials, and ensure nothing is missed."
    },
    {
      q: "Will my belongings clear customs?",
      a: "Our international team prepares all required documentation including packing lists, value declarations, and certificates of origin. We work with customs brokers at the destination to facilitate clearance."
    },
    {
      q: "Is my shipment insured during international transit?",
      a: "Basic carrier liability is included. We strongly recommend marine all-risk insurance which covers your shipment against loss, theft, and damage throughout the entire international journey."
    }
  ];

  return (
    <>
      <Helmet>
        <title>International Movers Ottawa | Overseas Relocation Services | Prestige Moving</title>
        <meta name="description" content="Trusted international movers based in Ottawa. We handle overseas relocations to the USA, UK, Europe, Australia & worldwide. Full packing, customs, and door-to-door delivery. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/international-movers-ottawa" />
        <meta property="og:title" content="International Movers Ottawa | Prestige Moving" />
        <meta property="og:description" content="Ottawa's trusted international moving company. Overseas relocations to 50+ countries with full packing, customs clearance, and marine insurance." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa — International Division",
          "url": "https://prestigemoving.ca/international-movers-ottawa",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": "Worldwide",
          "description": "International moving company based in Ottawa, Ontario, Canada.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe className="h-4 w-4" /> Worldwide Relocation Services from Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ottawa's International<br />Moving Company
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Moving abroad from Ottawa? Prestige Moving coordinates door-to-door international relocations to 50+ countries — with expert packing, customs documentation, and marine insurance included.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Get International Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> 50+ Countries Served</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Full Customs Documentation</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Marine All-Risk Insurance</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> FIDI Partner Network</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-4">Popular Destinations We Move To</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">We have established shipping routes and trusted overseas partners in all major destinations worldwide.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {countries.map((c) => (
                <span key={c} className="bg-gray-50 text-[#1A2332] px-4 py-2 rounded-md text-sm font-medium border border-gray-200 flex items-center gap-2">
                  <Globe className="h-3 w-3 text-[#C5A572]" /> {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Our International Moving Process</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <FileText className="h-6 w-6" />, title: "Pre-Move Survey & Quote", desc: "We conduct a detailed home survey (virtual or in-person) to create an accurate volume estimate and binding international quote." },
                { icon: <Package className="h-6 w-6" />, title: "Expert Export Packing", desc: "Our team uses custom crating, double-wall cartons, and specialized packing methods designed to withstand ocean and air freight." },
                { icon: <Shield className="h-6 w-6" />, title: "Customs Documentation", desc: "We prepare your complete packing inventory, value declarations, and all customs paperwork required by your destination country." },
                { icon: <Globe className="h-6 w-6" />, title: "International Shipping", desc: "Your shipment travels by sea (FCL or LCL) or air freight with real-time tracking, cargo insurance, and professional handling." },
                { icon: <CheckCircle className="h-6 w-6" />, title: "Destination Clearance", desc: "Our overseas partner handles customs clearance, import duties, and final delivery to your new home abroad." },
                { icon: <Star className="h-6 w-6" />, title: "Unpacking & Setup", desc: "Optional destination unpacking and furniture placement service available in most countries through our agent network." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white p-6 rounded-md border border-gray-100">
                  <div className="text-[#C5A572] mt-1 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#1A2332] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">International Moving FAQs</h2>
            <div className="space-y-6">
              {faq.map((item) => (
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
            <h2 className="text-3xl font-bold mb-4">Planning an International Move from Ottawa?</h2>
            <p className="text-white/70 mb-8">Contact our international relocation specialists for a free consultation and quote.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Request a Quote</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
