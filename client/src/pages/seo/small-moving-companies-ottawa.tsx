import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, Shield, Clock, Award, DollarSign } from "lucide-react";
import { Link } from "wouter";
import SharedFooter from "@/components/shared-footer";
import SharedNavigation from "@/components/shared-navigation";

export default function SmallMovingCompaniesOttawa() {
  const faq = [
    { q: "What is considered a small moving company in Ottawa?", a: "Small moving companies in Ottawa typically operate with 1–3 trucks and offer personalized, owner-operated service. Prestige Moving is owner-operated with direct accountability — you get personal attention, not a call centre." },
    { q: "Are small moving companies cheaper than large companies in Ottawa?", a: "Often yes. Small Ottawa movers have lower overhead, which translates to competitive rates. Our Premium package starts at $155/hr versus large national chains that can charge $200–$300/hr with more restrictive terms." },
    { q: "Are small moving companies in Ottawa insured?", a: "Quality small movers like Prestige Moving carry full commercial insurance — CVOR licensing, cargo coverage, and general liability. Always ask to see insurance documentation before booking any mover." },
    { q: "What are the advantages of a small moving company over a large chain?", a: "Personalized service, direct accountability, flexible scheduling, competitive pricing, and the owner or senior staff often on-site. You're a valued client, not a booking number." },
    { q: "Can a small Ottawa moving company handle large moves?", a: "Yes. Prestige Moving handles everything from studio apartments to 5-bedroom homes and large commercial moves. Our fleet and crew scale to your needs — we're small in spirit, not in capability." },
  ];

  return (
    <>
      <Helmet>
        <title>Small Moving Companies Ottawa | Local, Trusted, Affordable | Prestige Moving</title>
        <meta name="description" content="Looking for a small moving company in Ottawa? Prestige Moving is owner-operated, fully insured, and 4.9-star rated. Personal service at competitive rates. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/small-moving-companies-ottawa" />
        <meta property="og:title" content="Small Moving Companies Ottawa | Prestige Moving" />
        <meta property="og:description" content="Ottawa's best small moving company. Owner-operated, 4.9 stars, fully insured, and personally accountable. Competitive rates starting at $155/hr." />
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
              <Award className="h-4 w-4" /> Owner-Operated · Personal Service · Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ottawa's Best Small<br />Moving Company
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              You want the personal touch of a small company with the professionalism of a top-rated operation. Prestige Moving delivers both — owner-operated, 4.9 stars, fully insured, and deeply committed to every single Ottawa move.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Get a Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 4.9 Stars · 500+ Reviews</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Fully Insured</span>
            <span className="flex items-center gap-2"><DollarSign className="h-4 w-4" /> From $155/hr</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Owner-Operated</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Why Choose a Small Ottawa Moving Company?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Award className="h-6 w-6" />, title: "Personal Accountability", desc: "When something matters — and your move always does — you want a company where the owner cares personally about your experience." },
                { icon: <DollarSign className="h-6 w-6" />, title: "Competitive Rates", desc: "No national franchise fees, no bloated head office overhead. We pass savings directly to Ottawa customers starting at $155/hr." },
                { icon: <Clock className="h-6 w-6" />, title: "Flexible & Responsive", desc: "Small companies adapt. Last-minute date change? Special request? Unusual item? We work with you — not against our rigid policy manual." },
                { icon: <Shield className="h-6 w-6" />, title: "Fully Insured Anyway", desc: "Small doesn't mean unprotected. We carry the same commercial liability and cargo insurance as any national chain — you're fully covered." },
                { icon: <Star className="h-6 w-6" />, title: "Real Reviews", desc: "500+ genuine Google reviews from Ottawa neighbours who used us. Not purchased reviews or testimonials — real people, real moves." },
                { icon: <CheckCircle className="h-6 w-6" />, title: "Community Roots", desc: "We live and work in Ottawa. We care about this community and our reputation in it. That's the best guarantee of quality service." },
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Small Moving Company FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Choose Ottawa's Best Small Moving Company</h2>
            <p className="text-white/70 mb-8">Small enough to care. Big enough to handle everything.</p>
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
