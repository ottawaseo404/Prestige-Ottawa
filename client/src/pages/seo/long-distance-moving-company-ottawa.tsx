import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, MapPin, Shield, Clock, Truck } from "lucide-react";
import { Link } from "wouter";
import SharedFooter from "@/components/shared-footer";
import SharedNavigation from "@/components/shared-navigation";

export default function LongDistanceMovingCompanyOttawa() {
  const faq = [
    {
      q: "How much does a long distance moving company in Ottawa charge?",
      a: "Long distance moving costs from Ottawa typically depend on distance, volume, and services. Our Premium package starts at $155/hr for local and we provide binding flat-rate quotes for cross-Canada moves. Most Ottawa to Toronto moves range $1,800–$3,500 fully insured."
    },
    {
      q: "How far in advance should I book a long distance moving company?",
      a: "We recommend booking 4–6 weeks ahead for peak season (May–September) and 2–3 weeks for off-season. We do accommodate last-minute requests when availability allows."
    },
    {
      q: "Do you provide binding estimates for long distance moves?",
      a: "Yes. All long distance quotes from Prestige Moving are binding — you pay exactly what you're quoted, with no surprise charges on delivery day."
    },
    {
      q: "Is my furniture insured during a long distance move?",
      a: "Absolutely. We carry full cargo liability insurance on all long distance moves. Additional declared-value coverage is also available for high-value items."
    },
    {
      q: "Do you move anywhere in Canada from Ottawa?",
      a: "Yes — we service all provinces and territories. Our most popular routes are Ottawa to Toronto, Vancouver, Calgary, Edmonton, Winnipeg, Halifax, and Montreal."
    },
    {
      q: "What makes Prestige different from other long distance moving companies?",
      a: "Dedicated trucks (no sharing with strangers), GPS-tracked shipments, a single point of contact throughout your move, and a proven 4.9-star rating across 500+ reviews."
    }
  ];

  const destinations = [
    { city: "Toronto", time: "5–6 hrs", price: "From $1,800" },
    { city: "Montreal", time: "2 hrs", price: "From $950" },
    { city: "Vancouver", time: "4,600 km", price: "From $5,500" },
    { city: "Calgary", time: "3,400 km", price: "From $4,200" },
    { city: "Edmonton", time: "3,500 km", price: "From $4,400" },
    { city: "Winnipeg", time: "2,100 km", price: "From $3,000" },
  ];

  return (
    <>
      <Helmet>
        <title>Long Distance Moving Company Ottawa | Prestige Moving</title>
        <meta name="description" content="Ottawa's top-rated long distance moving company. Binding estimates, dedicated trucks, full insurance. Moving to Toronto, Vancouver, Calgary & all of Canada. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/long-distance-moving-company-ottawa" />
        <meta property="og:title" content="Long Distance Moving Company Ottawa | Prestige Moving" />
        <meta property="og:description" content="Ottawa's top-rated long distance moving company. Binding estimates, dedicated trucks, full insurance on every cross-Canada move." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": "Canada",
          "description": "Long distance moving company based in Ottawa serving all Canadian provinces.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        {/* Hero */}
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 fill-current" /> 4.9 Stars · 500+ Reviews · Canada-Wide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ottawa's Premier<br />Long Distance Moving Company
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Binding estimates. Dedicated trucks. Full insurance. Prestige Moving has safely relocated thousands of Ottawa families and businesses across Canada — with zero hidden fees.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10 backdrop-blur-sm">
                  Get a Free Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Binding Flat-Rate Quotes</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Dedicated Trucks — No Sharing</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> GPS Tracked Every Move</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Fully Licensed & Insured</span>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-4">Popular Long Distance Routes from Ottawa</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">We move to every Canadian province and territory. Here are our most requested routes:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {destinations.map((d) => (
                <div key={d.city} className="bg-gray-50 border border-gray-200 rounded-md p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2"><MapPin className="h-4 w-4 text-[#C5A572]" /><span className="font-bold text-[#1A2332]">Ottawa → {d.city}</span></div>
                  <p className="text-sm text-gray-500 mb-1">{d.time}</p>
                  <p className="text-[#C5A572] font-semibold">{d.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Why Choose Prestige as Your Long Distance Moving Company?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: <Truck className="h-6 w-6" />, title: "Dedicated Trucks", desc: "Your belongings never share a truck with strangers. One truck, one move, one family — always." },
                { icon: <Shield className="h-6 w-6" />, title: "Full Cargo Insurance", desc: "Every long distance shipment is covered by our comprehensive cargo liability policy. Your peace of mind is included." },
                { icon: <CheckCircle className="h-6 w-6" />, title: "Binding Estimates", desc: "We survey your home thoroughly and provide a locked-in price. No surprises. No add-ons at delivery." },
                { icon: <Clock className="h-6 w-6" />, title: "Guaranteed Delivery Windows", desc: "We commit to a delivery window and we stick to it. Real-time GPS tracking keeps you updated every step." },
                { icon: <Star className="h-6 w-6" />, title: "4.9-Star Reputation", desc: "Over 500 verified five-star reviews from Ottawa families who trusted us with their most important move." },
                { icon: <Phone className="h-6 w-6" />, title: "Single Point of Contact", desc: "You'll have a dedicated move coordinator from quote to delivery. No call centres, no runaround." },
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

        {/* FAQ */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions</h2>
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

        {/* CTA */}
        <section className="bg-[#1A2332] py-20 px-4 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Move Across Canada?</h2>
            <p className="text-white/70 mb-8">Get a free, no-obligation binding estimate from Ottawa's most trusted long distance moving company.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
