import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, Home, Shield, Clock, Award, Package, Truck, Lock } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function ResidentialMovingOttawa() {
  const homeTypes = [
    { type: "Apartment Moving", desc: "Studio to 3-bedroom apartments in Ottawa high-rises, mid-rises, and walk-ups. Elevator booking coordination included." },
    { type: "Condo Moving", desc: "Ottawa condo moves with building coordinator contact, elevator booking, and freight lift management." },
    { type: "House Moving", desc: "Detached, semi-detached, and townhouse moves. All sizes — 2 bedroom to 6+ bedroom family homes." },
    { type: "Townhouse Moving", desc: "Multi-level townhomes in Barrhaven, Kanata, Orleans, and across Ottawa moved efficiently by our local crews." },
  ];

  const faq = [
    { q: "What residential moving services are available in Ottawa?", a: "Prestige Moving offers complete residential moving services in Ottawa: local home moves, long distance residential relocations, full packing and unpacking, furniture disassembly/reassembly, specialty item handling, and storage." },
    { q: "How do I prepare my Ottawa home for residential movers?", a: "Label all boxes by room and priority, disassemble furniture you can handle, clear paths to doorways, reserve parking for our truck, and have essentials (documents, medications, valuables) packed separately to take in your car." },
    { q: "How much does residential moving cost in Ottawa?", a: "Residential moving in Ottawa starts at $155/hr (2-man team + truck, 3-hour minimum). A 1-bedroom apartment averages $465–$620. A 3-bedroom house averages $775–$1,240. Full packing service is quoted separately." },
    { q: "Do Ottawa residential movers pack for you?", a: "Yes — our full packing service has our team pack every room professionally with premium materials. Partial packing (just kitchen, just fragile items) is also available." },
    { q: "What is the best time of year to do a residential move in Ottawa?", a: "October through April offers the most scheduling flexibility and sometimes lower rates. May through September is peak season in Ottawa — book at least 3–4 weeks in advance." },
    { q: "Can I move my pets and plants with your Ottawa residential moving service?", a: "Plants and pets should travel with you in your personal vehicle — not the moving truck. We can pack plant containers and pet accessories normally." },
  ];

  return (
    <>
      <Helmet>
        <title>Residential Moving Ottawa | Home Movers | Prestige Moving</title>
        <meta name="description" content="Professional residential moving in Ottawa. Houses, condos, apartments, townhouses. Packing available, fully insured, 4.9 stars. Get a free quote — call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/residential-moving-ottawa" />
        <meta property="og:title" content="Residential Moving Ottawa | Prestige Moving" />
        <meta property="og:description" content="Ottawa's residential moving experts. Houses, condos, apartments, townhouses. Professional packing, fully insured, 500+ five-star reviews." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca/residential-moving-ottawa",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Home className="h-4 w-4" /> Residential Moving · Ottawa & Surrounding Area
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Residential Moving<br />Ottawa
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Moving your Ottawa home is one of the most significant transitions you'll make. Prestige Moving's residential teams treat every home — apartment, condo, house, or townhouse — with the same expert care and 4.9-star professionalism.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Free Home Moving Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 4.9 Stars · 500+ Reviews</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Fully Insured</span>
            <span className="flex items-center gap-2"><Package className="h-4 w-4" /> Packing Available</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 7 Days a Week</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Every Type of Ottawa Residential Move</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {homeTypes.map((h) => (
                <div key={h.type} className="bg-gray-50 border border-gray-200 rounded-md p-6 flex gap-4">
                  <Home className="h-5 w-5 text-[#C5A572] mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-[#1A2332] mb-2">{h.type}</h3>
                    <p className="text-gray-600 text-sm">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Our Residential Moving Packages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Premium", rate: "$155/hr", team: "2 Movers + Truck", desc: "Ideal for 1–2 bedroom homes. Fully equipped, insured, and professional." },
                { name: "Deluxe", rate: "$195/hr", team: "3 Movers + Truck", desc: "Best for 2–3 bedroom homes. Faster completion, larger capacity." },
                { name: "Diamond", rate: "$315/hr", team: "4+ Movers + Truck", desc: "Full-service: we pack, move, and unpack your entire home." },
              ].map((pkg, i) => (
                <div key={pkg.name} className={`border-2 rounded-md p-6 ${i === 1 ? "border-[#C5A572] bg-[#C5A572]/5" : "border-gray-200 bg-white"}`}>
                  {i === 1 && <p className="text-center text-xs font-bold text-[#C5A572] mb-2">MOST POPULAR</p>}
                  <h3 className="font-bold text-[#1A2332] text-xl text-center mb-1">{pkg.name}</h3>
                  <div className="relative inline-flex items-center gap-1.5 bg-gray-100 rounded-lg px-3 py-1.5 mb-2 overflow-hidden mx-auto">
                    <span className="text-xl font-bold text-[#C5A572] blur-sm select-none pointer-events-none">{pkg.rate}</span>
                    <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-[1px]">
                      <Lock className="h-3.5 w-3.5 text-[#C5A572] mr-1" />
                      <span className="text-xs font-bold text-[#1A2332]">Call for Rate</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 text-center mb-3">{pkg.team}</p>
                  <p className="text-gray-600 text-sm text-center">{pkg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Residential Moving FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Start Your Ottawa Home Move</h2>
            <p className="text-white/70 mb-8">Free quotes, 7 days a week. The most trusted residential movers in Ottawa.</p>
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
