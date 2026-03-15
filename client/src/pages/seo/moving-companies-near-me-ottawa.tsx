import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, MapPin, Shield, Clock, Award } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function MovingCompaniesNearMeOttawa() {
  const areas = [
    "Kanata", "Barrhaven", "Orleans", "Nepean", "Gloucester", "Stittsville",
    "Manotick", "Westboro", "The Glebe", "Sandy Hill", "Hintonburg", "Alta Vista",
    "Riverside South", "Rockcliffe Park", "Centretown", "Beacon Hill"
  ];

  const faq = [
    {
      q: "What is the best moving company near me in Ottawa?",
      a: "Prestige Moving is consistently rated Ottawa's #1 moving company with a 4.9-star average across 500+ reviews. We serve all Ottawa neighbourhoods with same-day, next-day, and scheduled moves."
    },
    {
      q: "How quickly can a moving company near me show up?",
      a: "For urgent moves, we often have availability within 24–48 hours. Same-day moves may be possible depending on schedule. Call (613) 600-4000 and we'll check our earliest availability."
    },
    {
      q: "How much do local movers cost near me in Ottawa?",
      a: "Our local Ottawa moving rates start at $155/hr for our Premium 2-man team with a 3-hour minimum. Most 1-bedroom apartments complete in 3–4 hours ($465–$620). 3-bedroom homes typically run 5–7 hours."
    },
    {
      q: "Do moving companies near me charge for travel time?",
      a: "We charge a flat travel fee rather than billing for drive time, making our pricing transparent and predictable. No mileage charges, no fuel surcharges."
    },
    {
      q: "What should I look for in a moving company near me?",
      a: "Look for: verified Google reviews (not just testimonials), CVOR number (commercial vehicle license), declared liability insurance, transparent pricing, and a physical Ottawa address. Prestige Moving meets all of these."
    },
    {
      q: "Do you move within Ottawa and to other cities?",
      a: "Yes — we handle local moves within Ottawa, moves between Ottawa neighbourhoods, and long distance moves to anywhere in Canada."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Moving Companies Near Me Ottawa | Best Local Movers | Prestige Moving</title>
        <meta name="description" content="Looking for moving companies near you in Ottawa? Prestige Moving serves every Ottawa neighbourhood. 4.9 stars, 500+ reviews, instant quotes. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/moving-companies-near-me-ottawa" />
        <meta property="og:title" content="Moving Companies Near Me Ottawa | Prestige Moving" />
        <meta property="og:description" content="Ottawa's top-rated local moving company. Serving Kanata, Barrhaven, Orleans, Nepean and all Ottawa neighbourhoods." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": areas.map(a => ({ "@type": "Place", "name": `${a}, Ottawa` })),
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" /> Serving All Ottawa Neighbourhoods
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Best Moving Company<br />Near You in Ottawa
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Stop searching "moving companies near me" — you've found Ottawa's most-reviewed, highest-rated movers. Prestige Moving serves every corner of Ottawa with professional, stress-free moves.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Free Instant Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 4.9 Google Rating</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> 500+ Five-Star Reviews</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Fully Licensed & Insured</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Available 7 Days a Week</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-4">We Come to You — Every Ottawa Neighbourhood</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Whether you're in the west end, east end, or anywhere in between — our crews are local and know your area.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {areas.map((area) => (
                <span key={area} className="bg-gray-100 text-[#1A2332] px-4 py-2 rounded-md text-sm font-medium border border-gray-200">{area}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Why Neighbours Choose Prestige</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Award className="h-6 w-6" />, title: "Ottawa's #1 Rated", desc: "4.9 stars across 500+ verified Google reviews. More five-stars than any other Ottawa moving company." },
                { icon: <Shield className="h-6 w-6" />, title: "Fully Insured Moves", desc: "Every move is covered by our commercial liability policy. Your furniture is protected from pickup to placement." },
                { icon: <Clock className="h-6 w-6" />, title: "On Time, Every Time", desc: "We arrive in your moving window, work efficiently, and finish when we say we will. No wasted hours billed." },
                { icon: <CheckCircle className="h-6 w-6" />, title: "Transparent Pricing", desc: "Hourly rates with no hidden fees. Premium from $155/hr, Deluxe from $195/hr. 3-hour minimum." },
                { icon: <MapPin className="h-6 w-6" />, title: "Local Ottawa Crews", desc: "Our teams live and work in Ottawa. We know the traffic, the buildings, and the neighbourhoods intimately." },
                { icon: <Phone className="h-6 w-6" />, title: "Real People Answer", desc: "Call us and a real person picks up — not a call centre. Book, adjust, or ask questions with ease." },
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-md border border-gray-100">
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Common Questions</h2>
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
            <h2 className="text-3xl font-bold mb-4">Get a Quote from Ottawa's Best Movers</h2>
            <p className="text-white/70 mb-8">No obligation. Instant estimate. Available 7 days a week.</p>
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
