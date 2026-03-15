import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, Shield, Award, Clock, Music } from "lucide-react";
import { Link } from "wouter";
import SharedFooter from "@/components/shared-footer";
import SharedNavigation from "@/components/shared-navigation";

export default function PianoMovingOttawa() {
  const pianoTypes = [
    { type: "Upright Piano", weight: "200–250 kg", price: "From $350", desc: "Spinets, consoles, studios, and full uprights. Padded and strapped with professional piano dollies." },
    { type: "Baby Grand Piano", weight: "250–400 kg", price: "From $550", desc: "Legs removed, lid secured, wrapped in piano covers. Reassembled and tuned (tuning separate)." },
    { type: "Grand Piano", weight: "300–500 kg", price: "From $750", desc: "Full disassembly, custom padding, dedicated piano board. Local and long distance available." },
    { type: "Concert Grand", weight: "400–600 kg", price: "Custom quote", desc: "Steinway, Yamaha, Bösendorfer concert grands. Call for specialized consultation." },
  ];

  const faq = [
    { q: "How much does it cost to move a piano in Ottawa?", a: "Piano moving in Ottawa starts at $350 for a standard upright within the city. Baby grands start at $550, grands from $750. Long distance piano moves are quoted separately based on distance and piano type." },
    { q: "Do I need specialized piano movers in Ottawa?", a: "Yes. Pianos are extremely heavy, have delicate internal mechanisms, and are easily damaged by improper handling. Prestige Moving's piano team uses certified piano dollies, piano boards, and professional padding — never improvised equipment." },
    { q: "Can you move a piano up or down stairs in Ottawa?", a: "Yes. Stair moves for pianos require additional crew and specialized equipment. Always disclose stair access when booking. Our team handles basements, second floors, and narrow stairwells regularly." },
    { q: "How do you prevent damage when moving a piano?", a: "We use a 5-step protection process: full padding in moving blankets, piano straps, dedicated piano dolly or piano board, slow and controlled movement, and secure anchoring in the truck." },
    { q: "Does moving a piano require re-tuning?", a: "Moving a piano typically doesn't cause immediate detuning — the humidity change at the new location does. We recommend waiting 2–4 weeks after a move before tuning to allow the piano to acclimate." },
    { q: "Can you move my piano long distance from Ottawa?", a: "Yes. We move pianos from Ottawa to Toronto, Montreal, Vancouver, and across Canada. Long distance piano moves use custom padding and secured storage in the truck — never mixed with other household goods." },
  ];

  return (
    <>
      <Helmet>
        <title>Piano Moving Ottawa | Professional Piano Movers | Prestige Moving</title>
        <meta name="description" content="Expert piano moving in Ottawa. Upright, baby grand & grand pianos moved safely. Stairs, long distance, and cross-Canada available. Certified piano movers — call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/piano-moving-ottawa" />
        <meta property="og:title" content="Piano Moving Ottawa | Expert Piano Movers | Prestige Moving" />
        <meta property="og:description" content="Ottawa's professional piano movers. Upright, grand, and baby grand pianos. Stair moves, long distance. 4.9 stars." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa — Piano Moving Specialists",
          "url": "https://prestigemoving.ca/piano-moving-ottawa",
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
              <Music className="h-4 w-4" /> Piano Moving Specialists · Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Piano Moving<br />in Ottawa
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Your piano is irreplaceable — musically and sentimentally. Prestige Moving's certified piano movers use professional piano dollies, boards, and padding to move every type of piano safely across Ottawa or across Canada.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Get Piano Moving Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> All Piano Types</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Fully Insured</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Stair Moves Available</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 4.9-Star Rated</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-4">Piano Moving Pricing in Ottawa</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Pricing includes 3-person crew, professional piano equipment, padding, and local delivery within Ottawa.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {pianoTypes.map((p) => (
                <div key={p.type} className="bg-gray-50 border border-gray-200 rounded-md p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-[#1A2332]">{p.type}</h3>
                    <span className="text-[#C5A572] font-bold">{p.price}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">Approx. {p.weight}</p>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Our Piano Moving Process</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Pre-Move Assessment", desc: "We assess your piano type, access points, stairways, and destination before your move day. No surprises." },
                { title: "Professional Padding", desc: "Every piano is wrapped in specialized piano covers and moving blankets before it leaves the room." },
                { title: "Piano Dolly & Board", desc: "Uprights use a piano dolly. Grands use a piano board — a flat board that keeps the piano level while it's on its side." },
                { title: "Safe Truck Loading", desc: "Pianos are loaded last, secured with straps, and positioned to prevent movement during transport." },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 rounded-md p-6">
                  <h3 className="font-bold text-[#1A2332] mb-2 flex items-center gap-2"><Music className="h-4 w-4 text-[#C5A572]" />{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Piano Moving FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Move Your Piano Safely in Ottawa</h2>
            <p className="text-white/70 mb-8">Call Ottawa's certified piano movers for a free, no-obligation quote.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Book Piano Move</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
