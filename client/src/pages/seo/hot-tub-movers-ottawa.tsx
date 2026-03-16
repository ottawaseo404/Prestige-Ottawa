import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Shield, Clock, Truck } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function HotTubMoversOttawa() {
  const faq = [
    { q: "How much does it cost to move a hot tub in Ottawa?", a: "Hot tub moving in Ottawa typically costs $400–$900 depending on size, access, and distance. Tight gate access or multi-level decks may affect pricing. We provide free on-site quotes." },
    { q: "Do I need to drain my hot tub before the move?", a: "Yes. Your hot tub must be fully drained, disconnected from power, and dried before our crew arrives. We can advise you on the proper preparation process when you book." },
    { q: "What equipment do you use to move hot tubs?", a: "We use heavy-duty appliance dollies, furniture sliders, moving straps, and a specialized hot tub skid to safely transport your spa without damaging the cabinet, shell, or plumbing." },
    { q: "Can you move my hot tub through a narrow gate or fence?", a: "Yes — we assess access during your quote. In some cases we may need to remove a fence panel or gate. We handle all of this as part of the job." },
    { q: "Do you reconnect the hot tub at the new location?", a: "We position and place the hot tub — electrical reconnection must be done by a licensed electrician. We can refer you to trusted local electricians if needed." },
    { q: "Is my hot tub covered by insurance during the move?", a: "Absolutely. All specialty item moves including hot tubs are covered by our full cargo liability insurance policy." },
  ];

  return (
    <>
      <Helmet>
        <title>Hot Tub Movers Ottawa | Spa Relocation Specialists | Prestige Moving</title>
        <meta name="description" content="Professional hot tub movers in Ottawa. Specialized equipment, tight-access expertise, and full insurance on every spa move. Call Prestige Moving (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/hot-tub-movers-ottawa" />
        <meta property="og:title" content="Hot Tub Movers Ottawa | Prestige Moving" />
        <meta property="og:description" content="Ottawa's hot tub moving specialists. Heavy-duty equipment, experienced crews, and full insurance for every spa relocation." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": "Ottawa",
          "description": "Hot tub and spa moving specialists in Ottawa. Safe transport with heavy-duty equipment and full insurance.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 fill-current" /> Hot Tub & Spa Moving Specialists · Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Hot Tub Movers Ottawa</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Moving a hot tub takes more than muscle — it takes the right equipment and experience. Prestige Moving handles every Ottawa spa relocation safely and efficiently.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-10">What Makes Hot Tub Moving Challenging</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Truck className="h-5 w-5" />, title: "Heavy-Duty Equipment", desc: "Most hot tubs weigh 500–1,000 lbs empty. We bring specialized dollies, skids, and straps rated for the load — never improvised equipment." },
                { icon: <CheckCircle className="h-5 w-5" />, title: "Access Assessment", desc: "Gates, decks, fences, and slopes all affect the move. We assess your property access during quoting so there are no surprises on move day." },
                { icon: <Shield className="h-5 w-5" />, title: "Shell & Cabinet Protection", desc: "Acrylic shells crack under improper pressure. Our padded skids and controlled movement techniques protect the cabinet, jets, and plumbing throughout." },
                { icon: <Clock className="h-5 w-5" />, title: "2–3 Hour Service", desc: "Most Ottawa hot tub moves are completed in 2–3 hours. We arrive prepared with all equipment so nothing delays your move day." },
                { icon: <Star className="h-5 w-5" />, title: "Experienced Crews", desc: "Our teams have moved hundreds of hot tubs across Ottawa. We know what to expect and how to handle tight corners, uneven ground, and difficult access." },
                { icon: <Phone className="h-5 w-5" />, title: "Fully Insured", desc: "Every hot tub move is covered by our full cargo liability insurance. Your investment is protected from pickup to placement." },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-6 bg-white rounded-md border border-gray-100">
                  <div className="text-[#C5A572] mt-0.5 shrink-0">{item.icon}</div>
                  <div><h3 className="font-bold text-[#1A2332] mb-1">{item.title}</h3><p className="text-gray-600 text-sm">{item.desc}</p></div>
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
            <h2 className="text-3xl font-bold mb-4">Need Your Hot Tub Moved in Ottawa?</h2>
            <p className="text-white/70 mb-8">Get a free quote from Ottawa's hot tub moving specialists. Fully insured, experienced crews.</p>
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
