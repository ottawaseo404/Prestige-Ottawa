import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, Heart, Shield, Clock, Users } from "lucide-react";
import { Link } from "wouter";
import SharedFooter from "@/components/shared-footer";
import SharedNavigation from "@/components/shared-navigation";

export default function SeniorMovingServicesOttawa() {
  const faq = [
    { q: "What senior moving services do you offer in Ottawa?", a: "We offer full-service moves for seniors including professional packing, careful furniture handling, downsizing assistance, coordination with retirement communities, and unpacking at the destination. We move at a pace comfortable for our senior clients." },
    { q: "Can you help with downsizing before my senior move?", a: "Yes. We work with senior clients who need to downsize from a family home to a condo, retirement residence, or assisted living. We can help coordinate donation pickups and disposal of items not moving with you." },
    { q: "Do you move seniors into retirement homes in Ottawa?", a: "Absolutely. We regularly move seniors into Ottawa retirement communities including Chartwell, Revera, Seasons, and private retirement residences. We coordinate delivery windows and floor access with the facility." },
    { q: "How do senior moving services differ from regular moves?", a: "Senior moves require extra patience, more care with antiques and heirlooms, a slower pace, and often more packing assistance. Our senior-specialized team is trained in all of these areas." },
    { q: "How much does senior moving service cost in Ottawa?", a: "Senior moves start at $155/hr (Premium 2-man team), identical to our standard rates. Full-service packing is available for an additional flat fee. We offer flexible scheduling to reduce stress." },
    { q: "Do you help seniors move long distance from Ottawa?", a: "Yes. Many Ottawa seniors move to be closer to family in Toronto, Vancouver, or other cities. We provide full long distance service with packing, binding quotes, and extra care for precious items." },
  ];

  return (
    <>
      <Helmet>
        <title>Senior Moving Services Ottawa | Gentle, Patient Movers | Prestige Moving</title>
        <meta name="description" content="Specialized senior moving services in Ottawa. Patient, respectful movers for retirement home transitions, downsizing, and long distance senior relocations. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/senior-moving-services-ottawa" />
        <meta property="og:title" content="Senior Moving Services Ottawa | Prestige Moving" />
        <meta property="og:description" content="Patient, professional senior moving services in Ottawa. Downsizing help, retirement home moves, long distance. Trusted by Ottawa families." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa — Senior Moving Services",
          "url": "https://prestigemoving.ca/senior-moving-services-ottawa",
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
              <Heart className="h-4 w-4" /> Compassionate Senior Moving · Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Senior Moving Services<br />in Ottawa
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Moving a senior family member requires patience, compassion, and expertise. Our specialized senior moving team in Ottawa handles every transition — from family homes to retirement residences — with the care your loved one deserves.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Book Senior Move <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><Heart className="h-4 w-4" /> Compassionate Approach</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Downsizing Assistance</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Fully Insured</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 4.9 Stars</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Our Senior Moving Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Heart className="h-6 w-6" />, title: "Retirement Home Transitions", desc: "Moving into a Chartwell, Revera, Seasons, or private retirement residence. We coordinate with the facility and move at your pace." },
                { icon: <Users className="h-6 w-6" />, title: "Downsizing Assistance", desc: "Moving from a family home to a smaller space? We help sort, pack, and coordinate donation or disposal of items that won't make the move." },
                { icon: <Shield className="h-6 w-6" />, title: "Antique & Heirloom Care", desc: "Generations of cherished items packed with museum-quality materials. China, artwork, grandfather clocks — handled with reverence." },
                { icon: <Clock className="h-6 w-6" />, title: "Flexible Scheduling", desc: "We move at whatever pace is comfortable. No rushing, no pressure. Senior moves often take a full day — and that's perfectly fine." },
                { icon: <CheckCircle className="h-6 w-6" />, title: "Full Unpacking Service", desc: "We don't just drop boxes and leave. Our team unpacks, arranges furniture, and makes the new space feel like home before we go." },
                { icon: <Star className="h-6 w-6" />, title: "Long Distance Senior Moves", desc: "Moving a senior across Canada to be closer to family. Binding quotes, dedicated trucks, and extra packing care for precious belongings." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-gray-50 p-6 rounded-md border border-gray-100">
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

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Senior Moving FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Help Your Loved One Move with Dignity</h2>
            <p className="text-white/70 mb-8">Call our senior moving specialists or book online. We'll guide your family through every step.</p>
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
