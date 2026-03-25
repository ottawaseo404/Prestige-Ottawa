import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Shield, Clock, Truck, Lock } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function UniversityMovingOttawa() {
  const faq = [
    { q: "Do you offer student moving services in Ottawa?", a: "Yes. We offer affordable student moving packages for uOttawa, Carleton University, Algonquin College, and La Cité students. Whether it's a dorm, apartment, or shared house, we handle it." },
    { q: "How much does it cost for a student move in Ottawa?", a: "Student moves in Ottawa start from $155/hr (Premium - 2 movers) with a 3-hour minimum. Most student apartment moves are completed in 3–5 hours. Call for an estimate." },
    { q: "Do you move students to residence buildings?", a: "Yes. We're familiar with all major residence buildings at uOttawa and Carleton — including elevator booking requirements and loading dock procedures." },
    { q: "Can you help with an end-of-semester move?", a: "Absolutely. We get extremely busy in April and August — book early during these peak times. We also offer short-term storage if your new place isn't ready yet." },
    { q: "Do you move lab and research equipment for universities?", a: "Yes. We have a specialized team for institutional and research equipment moves — lab benches, scientific instruments, and specialized equipment for university departments." },
    { q: "Do you handle office moves for university faculty and departments?", a: "Yes. We regularly handle faculty office relocations, department moves, and administrative office transfers for uOttawa and Carleton University departments." },
  ];

  return (
    <>
      <Helmet>
        <title>University & Student Movers Ottawa | uOttawa & Carleton Moving | Prestige Moving</title>
        <meta name="description" content="Affordable student and university moving in Ottawa. Serving uOttawa, Carleton, Algonquin, and La Cité students. Lab equipment, faculty offices, and residence moves. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/university-moving-ottawa" />
        <meta property="og:title" content="University & Student Movers Ottawa | Prestige Moving" />
        <meta property="og:description" content="Ottawa's student and university moving specialists. Affordable rates for uOttawa and Carleton students. Lab, faculty, and department moves also available." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": "Ottawa",
          "description": "Student and university moving services in Ottawa for uOttawa, Carleton, Algonquin, and La Cité.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 fill-current" /> Student & University Moving · Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">University Moving Ottawa</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Moving to or from uOttawa, Carleton, Algonquin, or La Cité? Prestige Moving offers affordable student moves, lab equipment relocations, and faculty office transfers across Ottawa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Student Moves", desc: "Apartments, houses, and residence buildings. We know every campus move-in procedure.", icon: <Truck className="h-6 w-6" /> },
                { title: "Faculty & Offices", desc: "Professor and department office relocations across campus or to a new building.", icon: <CheckCircle className="h-6 w-6" /> },
                { title: "Lab Equipment", desc: "Specialized handling for scientific instruments, lab benches, and research equipment.", icon: <Shield className="h-6 w-6" /> },
              ].map(s => (
                <div key={s.title} className="text-center p-6 rounded-md border border-gray-100">
                  <div className="text-[#C5A572] flex justify-center mb-3">{s.icon}</div>
                  <h3 className="font-bold text-[#1A2332] mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-[#1A2332] text-center mb-6">Ottawa Universities & Colleges We Serve</h2>
            <div className="grid md:grid-cols-2 gap-3 mb-10">
              {["University of Ottawa (uOttawa)", "Carleton University", "Algonquin College", "La Cité Collégiale", "Dominican University College", "Heritage College (Gatineau)", "Willis College", "Sprott Shaw College"].map(u => (
                <div key={u} className="flex items-center gap-2 p-3 bg-gray-50 rounded-md">
                  <CheckCircle className="h-4 w-4 text-[#C5A572] shrink-0" />
                  <span className="text-[#1A2332] text-sm">{u}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#1A2332]/5 border border-[#C5A572]/20 rounded-md p-6 text-center">
              <h3 className="font-bold text-[#1A2332] mb-2">Student Moving Rates</h3>
              <p className="text-gray-600 text-sm flex items-center justify-center gap-1.5"><Lock className="h-3.5 w-3.5 text-[#C5A572]" /> <strong className="text-[#C5A572]">Call for Rate</strong> · 3-hour minimum · Most student apartments complete in 3–5 hours</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faq.map(item => (
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
            <h2 className="text-3xl font-bold mb-4">Book Your University Move in Ottawa</h2>
            <p className="text-white/70 mb-8">Students — book early for April and August. Get your free quote today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
