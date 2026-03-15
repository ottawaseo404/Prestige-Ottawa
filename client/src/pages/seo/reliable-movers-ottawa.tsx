import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, Shield, Award, Clock, ThumbsUp } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function ReliableMoversOttawa() {
  const faq = [
    { q: "What makes a moving company reliable in Ottawa?", a: "A reliable Ottawa mover shows up on time, works at the quoted rate, treats your belongings with care, and has verifiable reviews from real customers. Prestige Moving has 500+ verified Google reviews, a CVOR license, and full insurance — the hallmarks of a reliable mover." },
    { q: "How do I verify that a moving company is reliable?", a: "Check Google, HomeStars, and the BBB for verified reviews. Ask for their CVOR number (operating license), proof of insurance, and a physical Ottawa address. Be cautious of companies that only exist online with no local presence." },
    { q: "Will a reliable moving company show up on time?", a: "Yes. We confirm your move 48 hours in advance, provide a call-ahead when en route, and arrive within your booked window. If we're ever delayed, you're notified immediately." },
    { q: "Do reliable movers give binding quotes?", a: "Yes. Prestige Moving provides binding estimates — the price you're quoted is the price you pay. Unreliable movers quote low and add fees at delivery. We never do this." },
    { q: "What happens if something is damaged by reliable movers?", a: "Accidents are rare, but we carry full liability and cargo insurance. If damage occurs, we file a claim promptly. Reliable movers stand behind their work — we do." },
  ];

  return (
    <>
      <Helmet>
        <title>Reliable Movers Ottawa | Trusted Moving Company | Prestige Moving</title>
        <meta name="description" content="Ottawa's most reliable moving company. 500+ five-star reviews, on-time guarantee, binding quotes, and full insurance. Reliable movers you can trust. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/reliable-movers-ottawa" />
        <meta property="og:title" content="Reliable Movers Ottawa | Prestige Moving" />
        <meta property="og:description" content="Ottawa's most trusted and reliable moving company. Verified reviews, binding quotes, on-time arrivals. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
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
              <Award className="h-4 w-4" /> Ottawa's Most Trusted Movers Since 2015
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ottawa's Most Reliable<br />Moving Company
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              We show up. We do what we say. We treat your belongings like our own. Prestige Moving has earned a 4.9-star reputation across 500+ Ottawa families by being consistently reliable — move after move.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Book Reliable Movers <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 4.9 Stars · 500+ Reviews</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> On-Time Guarantee</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Binding Quotes — No Surprises</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> CVOR Licensed & Insured</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">What "Reliable" Means at Prestige Moving</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Clock className="h-6 w-6" />, title: "We Show Up On Time", desc: "48-hour confirmation, day-before reminder, and a call when we're 30 minutes out. We respect your schedule." },
                { icon: <Shield className="h-6 w-6" />, title: "Binding Quotes", desc: "Your quote is your price. No add-ons at delivery, no 'surprise' charges for stairs, elevators, or packing tape." },
                { icon: <ThumbsUp className="h-6 w-6" />, title: "Careful with Your Things", desc: "We wrap furniture in moving blankets, secure it with straps, and use proper dollies. Your belongings arrive intact." },
                { icon: <Award className="h-6 w-6" />, title: "Verified Reviews", desc: "500+ real, verified Google reviews from Ottawa customers. Not testimonials we wrote ourselves — real feedback." },
                { icon: <CheckCircle className="h-6 w-6" />, title: "Licensed & Insured", desc: "CVOR commercial vehicle license, full cargo insurance, and general liability coverage on every single move." },
                { icon: <Phone className="h-6 w-6" />, title: "Always Reachable", desc: "A real person answers our phone. Questions before, during, or after your move are always met with a response." },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-md p-6">
                  <div className="text-[#C5A572] mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#1A2332] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Reliable Mover FAQs</h2>
            <div className="space-y-6">
              {faq.map((item) => (
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
            <h2 className="text-3xl font-bold mb-4">Book Ottawa's Most Reliable Movers</h2>
            <p className="text-white/70 mb-8">500+ families trusted us with their move. You can too.</p>
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
