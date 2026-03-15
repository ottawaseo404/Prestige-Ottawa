import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, Moon, Shield, Clock, Zap } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function NightMoversOttawa() {
  const faq = [
    {
      q: "Do you offer night and after-hours moving in Ottawa?",
      a: "Yes. Prestige Moving operates evening and after-hours moves across Ottawa, typically from 6 PM onward. Night moves are perfect for avoiding daytime traffic, building elevator restrictions, or when your schedule demands it."
    },
    {
      q: "Is it cheaper to move at night in Ottawa?",
      a: "Our hourly rates are consistent day or night. However, you often save money on night moves because traffic is lighter — your team works faster, meaning fewer billable hours overall."
    },
    {
      q: "Can I move furniture at night in my Ottawa apartment building?",
      a: "Many Ottawa condo buildings and apartment towers have elevator booking windows that extend into evenings (often until 9–10 PM). Check with your building manager. We can work within any approved window."
    },
    {
      q: "What time do your night movers start and finish?",
      a: "Night moves typically begin between 6–8 PM. Finishing time depends on move size. Most 1–2 bedroom night moves wrap up before midnight. We'll give you a realistic timeline when you book."
    },
    {
      q: "Are night moves in Ottawa safe?",
      a: "Completely. Our trucks have proper lighting, our crews are equipped with headlamps and reflective gear, and our experience with night moves means we work safely and efficiently regardless of the hour."
    },
    {
      q: "How do I book a night move with Prestige?",
      a: "Call (613) 600-4000 or book online and note your preferred evening start time. We'll confirm availability and send you a detailed booking confirmation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Night Movers Ottawa | After-Hours Moving Services | Prestige Moving</title>
        <meta name="description" content="Ottawa's night movers. After-hours, evening & overnight moving services across Ottawa. Avoid traffic, fit tight schedules. Fully insured. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/night-movers-ottawa" />
        <meta property="og:title" content="Night Movers Ottawa | After-Hours Moving | Prestige Moving" />
        <meta property="og:description" content="Evening and night moving services in Ottawa. Fully insured, experienced crews available after 6 PM. Ideal for condos, offices, and tight daytime schedules." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa — Night Moving",
          "url": "https://prestigemoving.ca/night-movers-ottawa",
          "telephone": "(613) 600-4000",
          "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "06:00", "closes": "23:59" },
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1520] to-[#1A2332]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Moon className="h-4 w-4" /> Evening & Night Moves · Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ottawa's Night Movers —<br />We Work While You Sleep
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Need to move in the evening or overnight? Prestige Moving's after-hours crews are experienced, equipped, and ready. Night moves mean less traffic, faster moves, and no disruption to your workday.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Book Night Move <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><Moon className="h-4 w-4" /> Evening Moves Available</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> 7 Nights a Week</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Fully Insured</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> #1 Rated Night Movers</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Why Choose a Night Move in Ottawa?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Clock className="h-6 w-6" />, title: "Beat Daytime Traffic", desc: "Ottawa traffic can add hours to a daytime move. Night moves in Kanata, Barrhaven, and Orleans are dramatically faster with empty roads." },
                { icon: <Zap className="h-6 w-6" />, title: "Don't Miss Work", desc: "Many Ottawa residents can't take a weekday off. Evening moves let you work during the day and move at night — no vacation days wasted." },
                { icon: <Shield className="h-6 w-6" />, title: "Condo Elevator Windows", desc: "Some Ottawa condo buildings only allow moves during specific elevator windows. Evening slots are often available when daytime ones are booked." },
                { icon: <CheckCircle className="h-6 w-6" />, title: "Less Disruption for Families", desc: "Young children and pets are often calmer in the evening. Night moves let you keep routines normal during the day and transition overnight." },
                { icon: <Moon className="h-6 w-6" />, title: "Business After-Hours", desc: "Office moves that need to be completed outside business hours — your staff works days, we move nights. Zero business downtime." },
                { icon: <Star className="h-6 w-6" />, title: "Same Great Service", desc: "Our night crews are the same experienced professionals as our day crews. Identical equipment, insurance, and accountability." },
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Night Moving FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Book Ottawa's Night Movers</h2>
            <p className="text-white/70 mb-8">Evening availability is limited — call now or book online to secure your night move date.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Book Night Move Online</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
