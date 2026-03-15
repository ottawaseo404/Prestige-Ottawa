import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, MapPin, Shield, Clock, Award } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function ProfessionalMoversGloucester() {
  const faq = [
    {
      q: "How much do professional movers in Gloucester cost?",
      a: "Our professional moving rates in Gloucester start at $155/hr for our Premium 2-man team with a 3-hour minimum. A typical 2-bedroom Gloucester home move runs 4–6 hours ($620–$930). We provide a free quote before every move."
    },
    {
      q: "Do professional movers in Gloucester pack for you?",
      a: "Yes. Our full-service packing option means our team packs every room with professional materials — wardrobe boxes, dish packs, custom cartons — so you arrive in your new home fully unpacked."
    },
    {
      q: "How far in advance should I book professional movers in Gloucester?",
      a: "We recommend 2–4 weeks for most Gloucester moves, especially for peak moving season (May–September) and end-of-month dates. Last-minute bookings are often possible — call us to check."
    },
    {
      q: "Are your movers in Gloucester insured?",
      a: "Yes. Prestige Moving carries full commercial general liability insurance and cargo coverage on every Gloucester move. We're also CVOR certified — proof we operate a professional, licensed moving fleet."
    },
    {
      q: "Do you move from Gloucester to other parts of Ottawa?",
      a: "Yes. We move within Gloucester, from Gloucester to all Ottawa neighbourhoods (Kanata, Orleans, Barrhaven, Nepean, Westboro), and long distance to anywhere in Canada."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Movers Gloucester Ottawa | Prestige Moving</title>
        <meta name="description" content="Professional movers serving Gloucester, Ottawa. Top-rated, fully insured, packing available. Local and long distance moves. Free quote — call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/professional-movers-gloucester" />
        <meta property="og:title" content="Professional Movers Gloucester Ottawa | Prestige Moving" />
        <meta property="og:description" content="Top-rated professional movers in Gloucester, Ottawa. Fully insured, local & long distance. Call for a free quote." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving — Gloucester",
          "url": "https://prestigemoving.ca/professional-movers-gloucester",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Gloucester", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": { "@type": "Place", "name": "Gloucester, Ottawa" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" /> Gloucester, Ottawa · Serving East Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Movers<br />in Gloucester
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Gloucester's most trusted professional moving team. Prestige Moving has helped hundreds of Gloucester families move safely and stress-free — with 4.9-star reviews and zero hidden fees.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Free Gloucester Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 4.9 Stars in Gloucester</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Fully Licensed & Insured</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Local Gloucester Crews</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Available 7 Days a Week</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Professional Moving Services in Gloucester</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Local Gloucester Moves", desc: "Moving within Gloucester or to a nearby Ottawa neighbourhood. Efficient, careful, and priced by the hour with no surprises." },
                { title: "Long Distance from Gloucester", desc: "Relocating outside Ottawa? We move from Gloucester to Toronto, Montreal, Vancouver, and anywhere across Canada." },
                { title: "Full Packing Services", desc: "Our team will pack your entire Gloucester home professionally — including dishes, artwork, and fragile items." },
                { title: "Commercial Gloucester Moves", desc: "Office and business relocations in Gloucester with evening and weekend availability to minimize downtime." },
                { title: "Furniture Assembly", desc: "We disassemble and reassemble furniture at origin and destination. IKEA, custom pieces, wall units — all handled." },
                { title: "Storage Solutions", desc: "Need temporary storage between Gloucester moves? We offer secure, climate-controlled options available on short notice." },
              ].map((s) => (
                <div key={s.title} className="bg-gray-50 border border-gray-200 rounded-md p-6">
                  <h3 className="font-bold text-[#1A2332] mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Why Gloucester Residents Choose Prestige</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: <Award className="h-6 w-6" />, title: "Gloucester's Top-Rated Movers", desc: "More five-star reviews from Gloucester residents than any other Ottawa moving company. Our reputation is our business." },
                { icon: <Shield className="h-6 w-6" />, title: "Full Insurance Coverage", desc: "Commercial liability + cargo coverage on every Gloucester move. If anything is damaged, we make it right." },
                { icon: <CheckCircle className="h-6 w-6" />, title: "No Hidden Fees", desc: "Our quotes are clear: hourly rate + flat travel fee. No fuel charges, no stair charges, no elevator charges." },
                { icon: <Clock className="h-6 w-6" />, title: "Punctual Every Time", desc: "We arrive within your confirmed window and work efficiently. Your time in Gloucester is as valuable as ours." },
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

        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Gloucester Moving FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Get Your Free Gloucester Moving Quote</h2>
            <p className="text-white/70 mb-8">Call today or book online. Prestige Moving — Gloucester's professional choice.</p>
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
