import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, Zap, Shield, Clock, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function EmergencyMoversOttawa() {
  const faq = [
    { q: "Can you provide emergency movers in Ottawa today?", a: "We do our best to accommodate same-day emergency moves in Ottawa depending on crew and truck availability. Call (613) 600-4000 first thing in the morning for the best chance of same-day service." },
    { q: "What counts as an emergency move in Ottawa?", a: "Emergency moves include: domestic violence escapes, sudden eviction, water damage or fire forcing immediate vacating, unexpected job transfers, or last-minute closing date changes. We treat every urgent request with priority and discretion." },
    { q: "How much does an emergency move cost in Ottawa?", a: "Emergency and last-minute moves are charged at our standard hourly rates — Premium $155/hr, Deluxe $195/hr. We do not add a surcharge for urgency. You pay the same rate as a planned move." },
    { q: "Are emergency moves in Ottawa safe and insured?", a: "Yes. Urgent moves receive the same professional care and full insurance coverage as any scheduled move. Urgency doesn't reduce our standard of care." },
    { q: "Can I move out of a domestic violence situation safely?", a: "Yes. We have helped Ottawa families in difficult situations with complete discretion. We will not disclose your destination, and we work quickly and quietly. Call anytime — we take these requests seriously." },
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Movers Ottawa | Same-Day Urgent Moving | Prestige Moving</title>
        <meta name="description" content="Emergency movers in Ottawa available same-day. Urgent moves, last-minute relocations, eviction & domestic situations handled with discretion. Call now: (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/emergency-movers-ottawa" />
        <meta property="og:title" content="Emergency Movers Ottawa | Same-Day Moving | Prestige Moving" />
        <meta property="og:description" content="Ottawa's emergency moving team. Same-day service, no urgency surcharge, full insurance, and complete discretion." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca/emergency-movers-ottawa",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1520] to-[#1A2332]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4" /> Emergency & Same-Day Moving · Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Emergency Movers<br />Ottawa — Call Now
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              When you need to move today, you need movers who answer the phone. Prestige Moving provides emergency and same-day moving services across Ottawa with no urgency surcharge and full insurance coverage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000 NOW
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Book Online <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-red-700 py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><Zap className="h-4 w-4" /> Same-Day Available</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> No Urgency Surcharge</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Fully Insured</span>
            <span className="flex items-center gap-2"><AlertCircle className="h-4 w-4" /> Complete Discretion</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">When to Call an Emergency Mover in Ottawa</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Zap className="h-6 w-6" />, title: "Same-Day Moves", desc: "Sudden changes to your move date? We'll do everything possible to get a crew to you today." },
                { icon: <AlertCircle className="h-6 w-6" />, title: "Domestic Situations", desc: "We help Ottawa residents escape unsafe situations with complete discretion and priority scheduling." },
                { icon: <Clock className="h-6 w-6" />, title: "Eviction or Vacancy", desc: "Unexpected eviction or property damage forcing you to leave? We respond quickly with the right-sized crew." },
                { icon: <CheckCircle className="h-6 w-6" />, title: "Closing Date Surprise", desc: "Last-minute change to your Ottawa closing date? We'll rearrange our schedule to accommodate your timeline." },
                { icon: <Shield className="h-6 w-6" />, title: "Water or Fire Damage", desc: "When property damage forces an immediate move-out, we respond fast to get your belongings to safety." },
                { icon: <Star className="h-6 w-6" />, title: "Job Transfer Urgency", desc: "Sudden job transfer to another city? We'll move you out quickly with a binding long distance quote." },
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Emergency Moving FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need to Move Urgently in Ottawa?</h2>
            <p className="text-white/70 mb-8">Call us right now. We'll tell you our same-day availability within minutes.</p>
            <a href="tel:6136004000">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 text-lg">
                <Phone className="h-6 w-6 mr-2" /> CALL (613) 600-4000 NOW
              </Button>
            </a>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
