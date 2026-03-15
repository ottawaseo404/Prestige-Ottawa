import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, MapPin, Shield, Clock, Award } from "lucide-react";
import { Link } from "wouter";
import SharedFooter from "@/components/shared-footer";
import SharedNavigation from "@/components/shared-navigation";

export default function ProfessionalMoversOrleans() {
  const faq = [
    { q: "How much do professional movers in Orleans cost?", a: "Our Orleans moving rates start at $155/hr for our Premium 2-man team with a 3-hour minimum. A typical 2-bedroom Orleans home takes 4–6 hours ($620–$930). We offer free in-home or virtual estimates for larger moves." },
    { q: "Do you move within Orleans and to other Ottawa neighbourhoods?", a: "Yes — we specialize in Orleans local moves as well as Orleans to Kanata, Orleans to Barrhaven, Orleans to Nepean, Orleans to the Glebe, and anywhere else in Ottawa or across Canada." },
    { q: "How far in advance should I book movers in Orleans?", a: "Orleans is a popular moving destination. We recommend booking 3–4 weeks ahead for peak months (May–September) and 2 weeks for off-season. Call to check current availability." },
    { q: "Are your Orleans movers bilingual?", a: "Orleans is Ottawa's largest francophone community. Many of our movers and coordinators are bilingual. Just let us know your preference when booking." },
    { q: "Do you move from Orleans to Quebec?", a: "Yes. Orleans is close to the Quebec border. We regularly move Orleans families to Gatineau, Aylmer, Hull, and further into Quebec including Montreal." },
  ];

  return (
    <>
      <Helmet>
        <title>Professional Movers Orleans Ottawa | Bilingual Moving Company | Prestige Moving</title>
        <meta name="description" content="Professional movers in Orleans, Ottawa. Bilingual service, fully insured, 4.9-star rated. Local and long distance moves. Free quote — call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/professional-movers-orleans" />
        <meta property="og:title" content="Professional Movers Orleans Ottawa | Prestige Moving" />
        <meta property="og:description" content="Top-rated professional movers in Orleans, Ottawa. Bilingual service available. Local, long distance, and Ottawa-to-Quebec moves." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving — Orleans",
          "url": "https://prestigemoving.ca/professional-movers-orleans",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Orleans", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": { "@type": "Place", "name": "Orleans, Ottawa, Ontario" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" /> Orleans, Ottawa · Bilingual Service Available
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Movers<br />in Orleans
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Orleans' most trusted professional movers. Bilingual service, 4.9-star reviews, and zero hidden fees. Whether you're moving within Orleans or across Canada — Prestige Moving handles it with care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Free Orleans Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 4.9 Stars in Orleans</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Bilingual Service</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Fully Insured</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 7 Days a Week</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Moving Services in Orleans</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Local Orleans Moves", desc: "Moving within Orleans — from Chapel Hill to Avalon, Fallingbrook to Convent Glen. We know every street." },
                { title: "Orleans to Ottawa", desc: "Moving from Orleans to Kanata, Barrhaven, Nepean, Westboro, Centretown or anywhere in Ottawa. Same-day available." },
                { title: "Orleans to Quebec", desc: "Gatineau, Aylmer, Hull, and further into Quebec. We cross the bridge dozens of times a month." },
                { title: "Long Distance from Orleans", desc: "Relocating across Canada? We provide binding flat-rate quotes for moves from Orleans to any Canadian province." },
                { title: "Packing Services", desc: "Full-room or whole-home professional packing by our bilingual Orleans team using premium materials." },
                { title: "Commercial Orleans Moves", desc: "Business relocations within Orleans including offices, clinics, retail stores, and restaurant equipment." },
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Orleans Moving FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Book Your Orleans Move Today</h2>
            <p className="text-white/70 mb-8">Bilingual service · Professional crew · No hidden fees</p>
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
