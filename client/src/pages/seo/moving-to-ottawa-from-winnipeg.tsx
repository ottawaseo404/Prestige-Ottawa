import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Shield, Clock, Truck, MapPin } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function MovingToOttawaFromWinnipeg() {
  const faq = [
    { q: "How much does it cost to move from Winnipeg to Ottawa?", a: "Winnipeg to Ottawa moves typically cost $2,800–$5,500 depending on home size and volume. We provide binding flat-rate estimates — no surprises at delivery." },
    { q: "How long does a Winnipeg to Ottawa move take?", a: "Transit time is typically 3–5 days by dedicated truck. We provide a confirmed delivery window before your move date." },
    { q: "Do you offer packing services for Winnipeg to Ottawa?", a: "Yes. Full packing, partial packing, and supply-only options are available. We pack everything to long-haul standards for maximum protection." },
    { q: "Is my furniture insured on the Winnipeg to Ottawa route?", a: "Yes — full cargo liability insurance is included. Declared-value coverage available for antiques, art, and high-value items." },
    { q: "Do you pick up from all Winnipeg neighbourhoods?", a: "Yes. We service all Winnipeg communities — St. Boniface, Transcona, River Heights, Fort Garry, West End, and surrounding areas." },
    { q: "How early should I book a Winnipeg to Ottawa move?", a: "Book 4–6 weeks ahead for peak season (May–September) and 3–4 weeks for fall/winter moves." },
  ];

  return (
    <>
      <Helmet>
        <title>Moving from Winnipeg to Ottawa | Prestige Moving</title>
        <meta name="description" content="Trusted Winnipeg to Ottawa movers. Binding estimates, dedicated trucks, full insurance. Professional long distance moving from Manitoba to Ontario. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/moving-to-ottawa-from-winnipeg" />
        <meta property="og:title" content="Moving from Winnipeg to Ottawa | Prestige Moving" />
        <meta property="og:description" content="Professional Winnipeg to Ottawa movers. Dedicated trucks, binding quotes, full cargo insurance. 4.9-star rated." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": ["Winnipeg", "Ottawa", "Canada"],
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" /> Winnipeg → Ottawa · 2,100 km · From $2,800
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Moving from Winnipeg to Ottawa</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">Manitoba to Ontario, handled with care. Binding estimates, dedicated trucks, and full insurance from Winnipeg pickup to Ottawa delivery.</p>
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
                { label: "1–2 Bedroom", price: "From $2,800", note: "Studio or apartment" },
                { label: "3 Bedroom Home", price: "From $4,000", note: "Standard family home" },
                { label: "4+ Bedroom", price: "From $5,500", note: "Large home or estate" },
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
                { icon: <Truck className="h-5 w-5" />, title: "Dedicated Truck", desc: "Your items travel alone — direct from Winnipeg to Ottawa, no co-loading ever." },
                { icon: <Shield className="h-5 w-5" />, title: "Full Insurance", desc: "Cargo liability included. Declared-value coverage for high-value items available." },
                { icon: <CheckCircle className="h-5 w-5" />, title: "Binding Quote", desc: "Price locked in writing. What you're quoted is what you pay — no exceptions." },
                { icon: <Clock className="h-5 w-5" />, title: "3–5 Day Transit", desc: "Confirmed delivery window. GPS-tracked shipment with a dedicated coordinator." },
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
            <h2 className="text-3xl font-bold mb-4">Moving from Winnipeg to Ottawa?</h2>
            <p className="text-white/70 mb-8">Get your free, binding estimate from Ottawa's most trusted long distance movers.</p>
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
