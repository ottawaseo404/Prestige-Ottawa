import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, MapPin, Shield, Clock, Award } from "lucide-react";
import { Link } from "wouter";
import SharedFooter from "@/components/shared-footer";
import SharedNavigation from "@/components/shared-navigation";

export default function MovingNepean() {
  const faq = [
    { q: "How much does it cost to move in Nepean?", a: "Moving in Nepean starts at $155/hr with our Premium 2-man team and 3-hour minimum. A typical 2-bedroom Nepean home takes 4–5 hours ($620–$775). We provide free quotes before every move." },
    { q: "What areas of Nepean do you serve?", a: "We serve all of Nepean including Barrhaven, Greenbank, Merivale, Craig Henry, Centrepointe, Bells Corners, Qualicum, Tanglewood, Hunt Club, and all surrounding areas." },
    { q: "Can you move from Nepean to other parts of Ottawa?", a: "Yes. We regularly move from Nepean to Kanata, Orleans, Gloucester, Westboro, Centretown, Alta Vista, and all Ottawa neighbourhoods. Nepean to downtown Ottawa is one of our most common routes." },
    { q: "Do Nepean movers charge for traffic and travel time?", a: "We charge a flat travel fee — not per-km or per-minute billing. This makes your Nepean move quote predictable regardless of Ottawa traffic conditions." },
    { q: "Can I get movers in Nepean on weekends?", a: "Yes — 7 days a week. Saturday and Sunday availability is popular and books quickly. We recommend booking 2–3 weeks ahead for weekend Nepean moves." },
  ];

  return (
    <>
      <Helmet>
        <title>Moving in Nepean Ottawa | Local Movers Nepean | Prestige Moving</title>
        <meta name="description" content="Professional moving services in Nepean, Ottawa. Serving Barrhaven, Bells Corners, Merivale, Centrepointe & all Nepean neighbourhoods. 4.9 stars. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/moving-nepean" />
        <meta property="og:title" content="Moving in Nepean Ottawa | Prestige Moving" />
        <meta property="og:description" content="Top-rated movers for Nepean, Ottawa. Barrhaven, Bells Corners, Merivale, Centrepointe and more. Free quotes, 7 days a week." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving — Nepean Ottawa",
          "url": "https://prestigemoving.ca/moving-nepean",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Nepean", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": { "@type": "Place", "name": "Nepean, Ottawa, Ontario" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" /> Nepean, Ottawa · All Neighbourhoods
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Moving in Nepean?<br />Ottawa's Best Movers
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Relocating in Nepean or moving out of the area? Prestige Moving's Nepean crews know every neighbourhood — Barrhaven, Bells Corners, Centrepointe, Merivale — delivering 4.9-star service every time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Free Nepean Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 4.9 Stars in Nepean</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Fully Insured</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Local Nepean Crews</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 7 Days a Week</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-4">Nepean Neighbourhoods We Serve</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Our Nepean moving teams are based locally and know every street, complex, and access point.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Barrhaven", "Bells Corners", "Centrepointe", "Merivale", "Craig Henry", "Greenbank", "Hunt Club", "Qualicum", "Tanglewood", "Knoxdale", "Borden Farm", "Chapman Mills"].map((n) => (
                <span key={n} className="bg-gray-50 border border-gray-200 text-[#1A2332] px-4 py-2 rounded-md text-sm font-medium">{n}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Why Nepean Chooses Prestige</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Award className="h-6 w-6" />, title: "Nepean's Most Reviewed Mover", desc: "More verified five-star reviews from Nepean residents than any other Ottawa moving company." },
                { icon: <Shield className="h-6 w-6" />, title: "No Hidden Fees", desc: "Hourly rate + flat travel fee. No stair charges, no elevator fees, no fuel surcharges." },
                { icon: <Clock className="h-6 w-6" />, title: "On Time, Always", desc: "We confirm 48 hours ahead and call when 30 minutes away. Nepean traffic is never your problem." },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 rounded-md p-6">
                  <div className="text-[#C5A572] mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#1A2332] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Nepean Moving FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Book Your Nepean Move Today</h2>
            <p className="text-white/70 mb-8">Free quotes, 7 days a week. Nepean's professional moving choice.</p>
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
