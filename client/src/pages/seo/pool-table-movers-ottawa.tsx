import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Shield, Clock, Truck } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function PoolTableMoversOttawa() {
  const faq = [
    { q: "How much does it cost to move a pool table in Ottawa?", a: "Pool table moving in Ottawa typically costs $350–$750 depending on the table size, distance, and whether disassembly/reassembly is required. We provide a free quote for every job." },
    { q: "Do you disassemble and reassemble pool tables?", a: "Yes. Our pool table specialists fully disassemble your table — removing the felt, slate, and frame — and professionally reassemble it at the destination with precision levelling." },
    { q: "Can you re-felt my pool table during the move?", a: "Absolutely. We offer professional re-felting as an add-on service. It's the perfect time to upgrade the felt while the table is already disassembled." },
    { q: "How many movers are needed to move a pool table?", a: "A standard 3-piece slate pool table requires a minimum of 3 trained movers. Our team brings the right equipment — dollies, moving straps, and slate pads — for every job." },
    { q: "Will the slate crack during the move?", a: "Not with Prestige Moving. We use purpose-built slate pads, secure individual panels, and transport them vertically to prevent cracking — the same method used by professional billiards technicians." },
    { q: "How long does it take to move a pool table?", a: "Most pool table moves in Ottawa take 2–4 hours including disassembly, transport, and reassembly. We confirm a precise estimate before the job starts." },
  ];

  return (
    <>
      <Helmet>
        <title>Pool Table Movers Ottawa | Professional Billiards Relocation | Prestige Moving</title>
        <meta name="description" content="Certified pool table movers in Ottawa. Full disassembly, slate transport, and professional reassembly with precision levelling. Call Prestige Moving at (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/pool-table-movers-ottawa" />
        <meta property="og:title" content="Pool Table Movers Ottawa | Prestige Moving" />
        <meta property="og:description" content="Ottawa's pool table moving specialists. Professional disassembly, safe slate transport, and precision reassembly. Fully insured." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": "Ottawa",
          "description": "Specialist pool table movers in Ottawa. Disassembly, slate transport, reassembly, and re-felting.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 fill-current" /> Specialist Pool Table Movers · Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Pool Table Movers Ottawa</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Professional billiards relocation specialists. Full disassembly, safe slate transport, and precision levelling at your new location — guaranteed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-10">Why Pool Tables Need Specialist Movers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Shield className="h-5 w-5" />, title: "Slate Protection", desc: "3-piece slate panels are heavy, fragile, and expensive to replace. We transport each panel individually using purpose-built slate pads and vertical loading." },
                { icon: <CheckCircle className="h-5 w-5" />, title: "Precision Levelling", desc: "A pool table that isn't level plays poorly and warps over time. Our technicians use professional levels and adjustment tools for a perfect play surface every time." },
                { icon: <Truck className="h-5 w-5" />, title: "Full Disassembly", desc: "We remove felt, separate the slate, dismantle the frame, and protect every component for transport. Nothing is rushed or cut short." },
                { icon: <Star className="h-5 w-5" />, title: "Re-Felting Available", desc: "Take advantage of the disassembly to upgrade your felt. We offer professional re-felting in a range of colours as an optional add-on." },
                { icon: <Clock className="h-5 w-5" />, title: "2–4 Hour Service", desc: "Most Ottawa pool table moves are completed in 2–4 hours including disassembly, transport, and reassembly. We confirm timing before we start." },
                { icon: <Phone className="h-5 w-5" />, title: "Fully Insured", desc: "Every pool table move is covered by our full liability insurance. If anything happens, you're protected — though it never does with our team." },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-6 bg-white rounded-md border border-gray-100">
                  <div className="text-[#C5A572] mt-0.5 shrink-0">{item.icon}</div>
                  <div><h3 className="font-bold text-[#1A2332] mb-1">{item.title}</h3><p className="text-gray-600 text-sm">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-10">Pool Table Moving Costs in Ottawa</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Same Floor Move", price: "From $350", note: "No stairs, short distance" },
                { label: "Staircase Required", price: "From $475", note: "Basement or upper floor" },
                { label: "Cross-City Move", price: "From $600", note: "Full disassembly + transport" },
              ].map(p => (
                <div key={p.label} className="bg-white border border-gray-200 rounded-md p-6 text-center">
                  <p className="text-gray-500 text-sm mb-1">{p.label}</p>
                  <p className="text-2xl font-bold text-[#C5A572] mb-1">{p.price}</p>
                  <p className="text-gray-400 text-xs">{p.note}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">Call for a precise quote based on your table and location.</p>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faq.map(item => (
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
            <h2 className="text-3xl font-bold mb-4">Move Your Pool Table the Right Way</h2>
            <p className="text-white/70 mb-8">Get a free quote from Ottawa's pool table moving specialists. Fully insured, precision levelled.</p>
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
