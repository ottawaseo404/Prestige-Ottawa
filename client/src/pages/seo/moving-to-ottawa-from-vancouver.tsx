import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Shield, Clock, Truck, MapPin } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function MovingToOttawaFromVancouver() {
  const faq = [
    { q: "How much does it cost to move from Vancouver to Ottawa?", a: "A Vancouver to Ottawa move typically costs $5,000–$8,500 depending on home size, volume, and services. We provide binding flat-rate quotes so you know the exact price before you move." },
    { q: "How long does a move from Vancouver to Ottawa take?", a: "Transit from Vancouver to Ottawa is typically 7–10 days by dedicated truck. We provide a confirmed delivery window before your move date." },
    { q: "Do you provide a dedicated truck or shared load?", a: "Prestige Moving uses dedicated trucks exclusively — your belongings never share space with another family's items. Your truck drives direct from Vancouver to Ottawa." },
    { q: "Do you offer packing services for a Vancouver to Ottawa move?", a: "Yes. We offer full packing and unpacking services, as well as supply-only options. Our packers are experienced in long-haul packing techniques for maximum protection." },
    { q: "Is my furniture insured on the Vancouver to Ottawa route?", a: "Absolutely. Full cargo liability insurance is included. Additional declared-value coverage is available for high-value items." },
    { q: "How far in advance should I book a Vancouver to Ottawa move?", a: "We recommend 6–8 weeks for peak season (May–September) and 4–6 weeks off-peak. The earlier you book, the better we can accommodate your exact dates." },
  ];

  return (
    <>
      <Helmet>
        <title>Moving from Vancouver to Ottawa | Prestige Moving</title>
        <meta name="description" content="Trusted Vancouver to Ottawa movers. Binding estimates, dedicated trucks, full insurance. Prestige Moving handles your cross-Canada move with care. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/moving-to-ottawa-from-vancouver" />
        <meta property="og:title" content="Moving from Vancouver to Ottawa | Prestige Moving" />
        <meta property="og:description" content="Professional Vancouver to Ottawa long distance movers. Dedicated trucks, binding estimates, and full insurance on every cross-Canada move." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": ["Vancouver", "Ottawa", "Canada"],
          "description": "Long distance moving specialists for Vancouver to Ottawa relocations.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" /> Vancouver → Ottawa · 4,600 km · From $5,000
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Moving from Vancouver to Ottawa</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Canada's longest moving corridor handled with care. Binding estimates, dedicated trucks, and a proven cross-Canada track record with 500+ reviews.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { label: "1–2 Bedroom", price: "From $5,000", note: "Studio or apartment" },
                { label: "3 Bedroom Home", price: "From $6,500", note: "Standard family home" },
                { label: "4+ Bedroom", price: "From $8,000", note: "Large home or estate" },
              ].map(p => (
                <div key={p.label} className="bg-gray-50 border border-gray-200 rounded-md p-6 text-center">
                  <p className="text-gray-500 text-sm mb-1">{p.label}</p>
                  <p className="text-2xl font-bold text-[#C5A572] mb-1">{p.price}</p>
                  <p className="text-gray-400 text-xs">{p.note}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Truck className="h-5 w-5" />, title: "Dedicated Truck", desc: "Your belongings never share a truck with another family. One dedicated truck makes the entire journey from Vancouver to Ottawa." },
                { icon: <Shield className="h-5 w-5" />, title: "Full Cargo Insurance", desc: "Every shipment is covered by comprehensive cargo liability insurance. Declared-value coverage available for high-value items." },
                { icon: <CheckCircle className="h-5 w-5" />, title: "Binding Flat-Rate Quote", desc: "We assess your home, price the move accurately, and lock it in. No surprises at delivery — ever." },
                { icon: <Clock className="h-5 w-5" />, title: "7–10 Day Transit", desc: "Confirmed delivery window before your move date. GPS-tracked shipment with a dedicated move coordinator from pickup to delivery." },
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
            <h2 className="text-3xl font-bold mb-4">Ready to Make the Move from Vancouver to Ottawa?</h2>
            <p className="text-white/70 mb-8">Get your free, binding estimate today. No pressure, no obligation.</p>
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
