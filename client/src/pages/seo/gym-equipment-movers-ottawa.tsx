import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Shield, Clock, Truck } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function GymEquipmentMoversOttawa() {
  const faq = [
    { q: "How much does it cost to move gym equipment in Ottawa?", a: "Gym equipment moves in Ottawa typically cost $300–$800 depending on volume, weight, and stairs involved. We provide free quotes and binding estimates." },
    { q: "Can you move a treadmill up or down stairs?", a: "Yes. We use stair-climbing dollies and multi-person teams to safely move treadmills, ellipticals, and other heavy cardio equipment on staircases of any length." },
    { q: "Do you disassemble and reassemble home gym equipment?", a: "Yes. We disassemble cable machines, power racks, and multi-station gyms as needed for safe transport and reassemble everything at the destination." },
    { q: "Can you move a full commercial gym?", a: "Absolutely. We handle full commercial gym relocations for fitness studios, hotel gyms, corporate wellness centres, and community facilities across Ottawa." },
    { q: "How do you protect gym equipment during a move?", a: "We use furniture blankets, stretch wrap, and padded dollies. Weight plates are moved in smaller batches to prevent shifting and protect both equipment and flooring." },
    { q: "Do you move gym equipment for businesses and offices?", a: "Yes — we move corporate fitness rooms, hotel gyms, rec centre equipment, and personal training studio relocations across the Ottawa area." },
  ];

  return (
    <>
      <Helmet>
        <title>Gym Equipment Movers Ottawa | Home & Commercial Fitness Relocation | Prestige Moving</title>
        <meta name="description" content="Professional gym equipment movers in Ottawa. Treadmills, weight racks, cable machines, and full commercial gym relocations. Call Prestige Moving at (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/gym-equipment-movers-ottawa" />
        <meta property="og:title" content="Gym Equipment Movers Ottawa | Prestige Moving" />
        <meta property="og:description" content="Ottawa's gym equipment moving specialists. Home gyms to full commercial fitness centre relocations. Disassembly, transport, and reassembly included." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": "Ottawa",
          "description": "Gym equipment movers in Ottawa for home and commercial fitness equipment relocations.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 fill-current" /> Home & Commercial Gym Movers · Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Gym Equipment Movers Ottawa</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              From treadmills and power racks to full commercial gym relocations — Prestige Moving handles all fitness equipment moves in Ottawa safely and efficiently.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-10">Equipment We Move</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {["Treadmills & Ellipticals", "Power Racks & Squat Cages", "Cable Machines", "Weight Benches & Dumbbell Sets", "Commercial Cardio Equipment", "Multi-Station Home Gyms", "Rowing Machines", "Spin Bikes", "Functional Trainers"].map(item => (
                <div key={item} className="flex items-center gap-2 p-4 bg-gray-50 rounded-md">
                  <CheckCircle className="h-4 w-4 text-[#C5A572] shrink-0" />
                  <span className="text-[#1A2332] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Truck className="h-5 w-5" />, title: "Stair-Capable Crews", desc: "Stair-climbing dollies and trained multi-person teams handle treadmills and heavy equipment on any staircase." },
                { icon: <CheckCircle className="h-5 w-5" />, title: "Full Disassembly & Reassembly", desc: "We disassemble cable systems, power racks, and multi-stations for safe transport and rebuild them at the new location." },
                { icon: <Shield className="h-5 w-5" />, title: "Floor Protection", desc: "We bring floor protection boards and mats to prevent scratches to hardwood and tile throughout your home or gym." },
                { icon: <Clock className="h-5 w-5" />, title: "Home & Commercial", desc: "From a single treadmill to a complete 5,000 sq ft commercial gym relocation — we scale to the job." },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-6 bg-white rounded-md border border-gray-100">
                  <div className="text-[#C5A572] mt-0.5 shrink-0">{item.icon}</div>
                  <div><h3 className="font-bold text-[#1A2332] mb-1">{item.title}</h3><p className="text-gray-600 text-sm">{item.desc}</p></div>
                </div>
              ))}
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
            <h2 className="text-3xl font-bold mb-4">Move Your Gym Equipment in Ottawa</h2>
            <p className="text-white/70 mb-8">Get a free quote for home gym or commercial fitness equipment relocation.</p>
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
