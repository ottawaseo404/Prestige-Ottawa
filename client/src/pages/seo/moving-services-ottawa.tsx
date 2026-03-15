import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, Truck, Package, Shield, Clock, Home, Building } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function MovingServicesOttawa() {
  const services = [
    { icon: <Home className="h-6 w-6" />, title: "Residential Moving", desc: "Houses, condos, apartments, and townhomes. Local Ottawa and long distance across Canada." },
    { icon: <Building className="h-6 w-6" />, title: "Commercial Moving", desc: "Office relocations, retail moves, medical offices, government departments, and corporate relocations." },
    { icon: <Package className="h-6 w-6" />, title: "Packing & Unpacking", desc: "Full or partial packing with premium materials. We pack, you relax. Unpacking available at destination." },
    { icon: <Truck className="h-6 w-6" />, title: "Long Distance Moving", desc: "Cross-Canada moves from Ottawa with binding flat-rate quotes, dedicated trucks, and GPS tracking." },
    { icon: <Shield className="h-6 w-6" />, title: "Storage Solutions", desc: "Short and long-term secure storage between moves. Climate-controlled and accessible." },
    { icon: <CheckCircle className="h-6 w-6" />, title: "Specialty Item Moving", desc: "Pianos, safes, antiques, art, appliances, and other items requiring special handling or equipment." },
  ];

  const faq = [
    { q: "What moving services do you offer in Ottawa?", a: "Prestige Moving offers a complete range of moving services in Ottawa: residential and commercial moves, professional packing, long distance relocation, specialty item handling, storage, furniture assembly, and junk/donation coordination." },
    { q: "Do you offer full-service moving in Ottawa?", a: "Yes. Our Diamond package is our full-service option — our team packs your entire home, loads, transports, unloads, and unpacks at your new address. You don't lift a finger." },
    { q: "What is the most affordable moving service in Ottawa?", a: "Our Premium package at $155/hr (2 movers + truck) is our most affordable option for Ottawa moves. It includes everything you need for a standard move. Packing supplies and full packing service can be added." },
    { q: "Do Ottawa moving services include packing materials?", a: "Basic materials like moving blankets, straps, and dollies are always included. Boxes, tape, and specialty packing materials are available at cost. Full packing service is quoted separately." },
    { q: "Can I get moving services in Ottawa on weekends?", a: "Yes — we operate 7 days a week including weekends and holidays. Weekend availability books quickly, so we recommend reserving your date at least 2–3 weeks in advance." },
  ];

  return (
    <>
      <Helmet>
        <title>Moving Services Ottawa | Full-Service Local & Long Distance | Prestige Moving</title>
        <meta name="description" content="Complete moving services in Ottawa. Residential, commercial, packing, long distance, specialty items & storage. Rated 4.9 stars. Get a free quote — call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/moving-services-ottawa" />
        <meta property="og:title" content="Moving Services Ottawa | Prestige Moving" />
        <meta property="og:description" content="Full-service Ottawa movers. Residential, commercial, packing, storage, and long distance. 4.9 stars, 500+ reviews." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Moving Services Ottawa", "itemListElement": ["Residential Moving","Commercial Moving","Packing & Unpacking","Long Distance Moving","Storage","Specialty Item Moving"].map(n => ({ "@type": "Offer", "itemOffered": { "@type": "Service", "name": n } })) },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Truck className="h-4 w-4" /> Ottawa's Complete Moving Service Provider
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Moving Services Ottawa<br />— Everything You Need
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Prestige Moving is Ottawa's only moving company offering the complete package: residential, commercial, packing, long distance, specialty items, and storage — all under one 4.9-star roof.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Get Free Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 4.9 Stars · 500+ Reviews</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Local & Long Distance</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Fully Insured</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Available 7 Days</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-4">All Moving Services We Offer in Ottawa</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">One company, every service. Stop searching for different providers — we handle your complete move.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((s) => (
                <div key={s.title} className="bg-gray-50 border border-gray-200 rounded-md p-6">
                  <div className="text-[#C5A572] mb-3">{s.icon}</div>
                  <h3 className="font-bold text-[#1A2332] mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Moving Service Packages</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { name: "Premium", rate: "$155/hr", team: "2 Movers + Truck", desc: "Perfect for 1–2 bedroom moves. Includes truck, blankets, dollies, and straps." },
                { name: "Deluxe", rate: "$195/hr", team: "3 Movers + Truck", desc: "Ideal for 2–3 bedroom homes. Faster completion, larger capacity, priority scheduling." },
                { name: "Diamond", rate: "$315/hr", team: "4+ Movers + Truck", desc: "Full-service moving. Packing, loading, transport, unloading, and unpacking included." },
              ].map((pkg, i) => (
                <div key={pkg.name} className={`border-2 rounded-md p-6 ${i === 1 ? "border-[#C5A572]" : "border-gray-200"} bg-white`}>
                  <h3 className="font-bold text-[#1A2332] text-xl mb-1">{pkg.name}</h3>
                  <p className="text-[#C5A572] font-bold text-2xl mb-1">{pkg.rate}</p>
                  <p className="text-sm text-gray-500 mb-3">{pkg.team}</p>
                  <p className="text-gray-600 text-sm">{pkg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Moving Services FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Book Ottawa Moving Services?</h2>
            <p className="text-white/70 mb-8">Get a free quote for any moving service in Ottawa — same-day responses, 7 days a week.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Book Online</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
