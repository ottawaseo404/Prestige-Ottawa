import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Shield, Clock, Truck, MapPin } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function MovingToOttawaFromMontreal() {
  const faq = [
    { q: "How much does it cost to move from Montreal to Ottawa?", a: "A Montreal to Ottawa move costs $950–$2,200 depending on home size. We offer hourly rates starting at $155/hr and binding flat-rate quotes for larger moves." },
    { q: "How long does a Montreal to Ottawa move take?", a: "The drive from Montreal to Ottawa is about 200 km and takes 2–2.5 hours. Most Montreal to Ottawa moves are completed in a single day." },
    { q: "Do you offer bilingual moving services?", a: "Oui. Our team includes French-speaking crew members and coordinators. We serve both the French and English communities across Ottawa and Gatineau." },
    { q: "Do you move between Gatineau and Montreal?", a: "Absolutely. We regularly move between Gatineau and Montreal, and service all communities on both sides of the Ottawa River." },
    { q: "Can I move furniture and storage at the same time?", a: "Yes. We offer combined moving and storage packages. If your new Ottawa home isn't ready yet, we can store your items securely and deliver when you're ready." },
    { q: "Is my furniture insured from Montreal to Ottawa?", a: "Yes. Full cargo liability insurance is included on every move regardless of distance." },
  ];

  return (
    <>
      <Helmet>
        <title>Moving from Montreal to Ottawa | Prestige Moving</title>
        <meta name="description" content="Professional Montreal to Ottawa movers. Bilingual service, binding estimates, full insurance. 2-hour drive, same-day moves available. Call Prestige Moving (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/moving-to-ottawa-from-montreal" />
        <meta property="og:title" content="Moving from Montreal to Ottawa | Prestige Moving" />
        <meta property="og:description" content="Trusted Montreal to Ottawa movers. Bilingual crews, same-day availability, binding quotes and full insurance on every move." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": ["Montreal", "Ottawa", "Gatineau"],
          "description": "Montreal to Ottawa moving specialists. Bilingual service, same-day available.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" /> Montreal → Ottawa · 200 km · From $950
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Moving from Montreal to Ottawa</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Bilingual moving service. Two-hour corridor, same-day availability, and binding estimates for every Montreal to Ottawa relocation.
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
                { label: "Studio / 1BR", price: "From $950", note: "Small apartment" },
                { label: "2–3 Bedroom", price: "From $1,500", note: "Family apartment or condo" },
                { label: "Full House", price: "From $2,200", note: "3+ bedroom home" },
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
                { icon: <Star className="h-5 w-5" />, title: "Bilingual Service", desc: "French and English-speaking crews and coordinators. We serve the full Montreal–Ottawa–Gatineau corridor." },
                { icon: <Clock className="h-5 w-5" />, title: "Same-Day Availability", desc: "At 200 km, many Montreal to Ottawa moves can be completed the same day. Call us for last-minute availability." },
                { icon: <CheckCircle className="h-5 w-5" />, title: "Binding Estimates", desc: "Price locked before the move starts. No surprise charges on arrival in Ottawa." },
                { icon: <Shield className="h-5 w-5" />, title: "Full Insurance", desc: "Cargo liability insurance included on every Montreal to Ottawa move." },
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
            <h2 className="text-3xl font-bold mb-4">Moving from Montreal to Ottawa?</h2>
            <p className="text-white/70 mb-8">Get a free, binding estimate from Ottawa's trusted bilingual movers.</p>
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
