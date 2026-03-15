import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "What IT equipment can Prestige Moving relocate?", a: "We handle computer workstations and monitors, servers (with proper anti-static packaging), network switches and patch panels, UPS units, printers and plotters, audiovisual equipment, and general office technology. For rack-mounted server equipment requiring IT-specific handling, we recommend your IT team oversees disconnection and reconnection while we handle physical transport." },
  { q: "Do you use anti-static packaging for IT equipment?", a: "Yes. We use anti-static packing materials, proper cartons, and protective wrapping for all IT equipment. Foam-padded, sealed containers are used for particularly sensitive components." },
  { q: "Do you offer after-hours IT equipment moves?", a: "Yes — and this is often preferred for IT relocations to allow for a clean cutover. Moving servers and critical IT infrastructure during business hours risks disrupting operations. We schedule evening and weekend moves for IT-sensitive relocations." },
  { q: "Who should oversee the IT disconnection process?", a: "Your internal IT team or a contracted IT specialist should handle disconnecting, labelling cables, and properly shutting down servers and network equipment. Our role is the physical transport — moving the items from origin rack rooms to destination rack rooms safely and without damage." },
  { q: "Can you move data centre equipment?", a: "We handle small-to-mid-size server rooms and edge computing environments. Full-scale data centre moves involving raised floor infrastructure, cooling systems, and complex power distribution require specialized data centre relocation expertise beyond our scope. For standard corporate server rooms, we are well-equipped." },
];

export default function ITEquipmentMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>IT Equipment Movers Ottawa | Technology Office Relocation | Prestige Moving</title>
        <meta name="description" content="Ottawa IT equipment movers. We relocate computer workstations, servers, network gear, and office technology across the NCR. After-hours scheduling available. (613) 600-4000." />
        <meta name="keywords" content="IT equipment movers Ottawa, technology movers Ottawa, server room relocation Ottawa, computer equipment movers Ottawa, office technology moving Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/it-equipment-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/it-equipment-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">IT Equipment Moving — Ottawa</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">IT Equipment Movers Ottawa — Technology Office Relocation</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa's technology sector — from Kanata's Silicon Valley North to government IT departments to growing tech startups downtown — requires careful, experienced IT equipment movers. Prestige Moving handles technology office relocations with anti-static packaging, after-hours scheduling, and professional care.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get IT Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Anti-Static Packaging", "After-Hours Scheduling", "Server Room Capable", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">IT Equipment Relocation in Ottawa's Tech Sector</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Ottawa is home to one of Canada's most significant technology ecosystems — Kanata North alone contains over 500 technology companies employing more than 20,000 people. When those companies grow, restructure, or relocate, their IT infrastructure comes with them. Moving technology properly requires more than standard moving techniques.</p>
            <p>We work in coordination with your IT team. Your team handles cable management, equipment shutdown, and system documentation. Our crew handles the physical: carefully packing monitors in original-style foam, securing CPU towers, wrapping servers in anti-static material, and transporting everything to the new location without damage.</p>
            <p>After-hours and weekend scheduling is standard for IT moves — cutting over IT infrastructure overnight allows your team to reconnect systems and be operational by the next business morning. We staff evening and weekend crews regularly for Ottawa's tech sector.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What We Move</h3>
              <div className="space-y-2">
                {["Computer workstations and monitors", "Servers and rack-mounted equipment", "Network switches and routers", "UPS units and power distribution", "Printers, plotters, and scanners", "AV equipment and digital signage"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">Our IT Move Process</h3>
              <div className="space-y-2">
                {["Pre-move coordination with IT team", "Anti-static packing for sensitive equipment", "Numbered item tracking", "After-hours execution", "Gentle transport and unloading", "Rack room to rack room delivery"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full text-left px-5 py-4 font-semibold text-[#1A2332] flex justify-between items-center" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}<span className="text-[#C5A572] text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Moving IT Equipment in Ottawa?</h2>
          <p className="text-white/70 mb-6">Get a commercial IT move quote. We coordinate with your IT team and execute after hours.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get IT Move Quote</Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
