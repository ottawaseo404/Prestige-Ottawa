import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Shield, Clock, Truck, MapPin } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function MovingToOttawaFromEdmonton() {
  const faq = [
    { q: "How much does it cost to move from Edmonton to Ottawa?", a: "Edmonton to Ottawa moves typically cost $4,200–$7,500 depending on home size and volume. We provide binding flat-rate estimates so you know your exact price before the move." },
    { q: "How long does an Edmonton to Ottawa move take?", a: "Transit time is typically 6–9 days by dedicated truck. We provide a confirmed delivery window before pickup." },
    { q: "Do you offer a dedicated truck for Edmonton to Ottawa?", a: "Yes. We never co-load your shipment. Your dedicated truck drives direct from Edmonton to Ottawa — no stops, no strangers' belongings." },
    { q: "Do you handle packing for long-distance Edmonton moves?", a: "Yes. Full packing, partial packing, and supply-only options available. Our Edmonton-area partners or in-house crews can pack before departure." },
    { q: "Is furniture insured on the Edmonton to Ottawa route?", a: "Yes — full cargo liability insurance is included. Declared-value coverage available for high-value items." },
    { q: "How early should I book an Edmonton to Ottawa move?", a: "Book 6–8 weeks ahead for May–September, 4–6 weeks for fall and winter. Edmonton summers are busy moving seasons." },
  ];

  return (
    <>
      <Helmet>
        <title>Moving from Edmonton to Ottawa | Prestige Moving</title>
        <meta name="description" content="Trusted Edmonton to Ottawa movers. Binding estimates, dedicated trucks, full cargo insurance. Professional long distance moving across Canada. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/moving-to-ottawa-from-edmonton" />
        <meta property="og:title" content="Moving from Edmonton to Ottawa | Prestige Moving" />
        <meta property="og:description" content="Professional Edmonton to Ottawa movers. Dedicated trucks, binding quotes, full insurance. 4.9 stars." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": ["Edmonton", "Ottawa", "Canada"],
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" /> Edmonton → Ottawa · 3,500 km · From $4,200
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Moving from Edmonton to Ottawa</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">Alberta to Ontario, done right. Binding estimates, dedicated trucks, and full cargo insurance from pickup in Edmonton to delivery in Ottawa.</p>
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
                { label: "1–2 Bedroom", price: "From $4,200", note: "Studio or apartment" },
                { label: "3 Bedroom Home", price: "From $5,800", note: "Standard family home" },
                { label: "4+ Bedroom", price: "From $7,200", note: "Large home or estate" },
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
                { icon: <Truck className="h-5 w-5" />, title: "Dedicated Truck", desc: "Your belongings never share space with another family's items. Direct from Edmonton to Ottawa." },
                { icon: <Shield className="h-5 w-5" />, title: "Full Insurance", desc: "Cargo liability included. Declared-value coverage available for high-value items." },
                { icon: <CheckCircle className="h-5 w-5" />, title: "Binding Quote", desc: "Price locked before the move. No weight-based surprises at delivery." },
                { icon: <Clock className="h-5 w-5" />, title: "6–9 Day Transit", desc: "GPS-tracked with a confirmed delivery window and single point of contact throughout." },
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
            <h2 className="text-3xl font-bold mb-4">Moving from Edmonton to Ottawa?</h2>
            <p className="text-white/70 mb-8">Get your free, binding moving estimate today.</p>
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
