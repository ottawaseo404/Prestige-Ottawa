import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, Building2 } from "lucide-react";

const FAQS = [
  { q: "How is office relocation different from a residential move?", a: "Office relocations require planning around business continuity — moves typically happen after hours or on weekends to avoid disrupting operations. They also involve specialized equipment (workstations, servers, filing systems), building access coordination (freight elevators, loading dock reservations), and numbered asset tracking." },
  { q: "How long does an office relocation take in Ottawa?", a: "A small office (5–15 workstations) can be moved in a single evening or weekend. A medium office (15–50 workstations) typically takes a full weekend. Larger relocations may require phased moves over multiple weekends. We develop a detailed timeline during the quote process." },
  { q: "Do you provide office furniture disassembly and reassembly?", a: "Yes. We disassemble modular workstations, cubicle systems, standing desks, and boardroom tables at the origin, transport them properly, and reassemble at the destination. This is included as part of the office relocation service." },
  { q: "Can you move our office to a new building in a different Ottawa neighbourhood?", a: "Yes — we move offices anywhere in the National Capital Region: downtown to Kanata, Centretown to Barrhaven, Ottawa to Gatineau, and all points between. We service the entire NCR." },
  { q: "What happens if something is damaged during our office move?", a: "All commercial moves are fully insured. In the unlikely event of damage, we have a claims process that addresses it promptly. Our professional crew takes extraordinary care with office equipment — furniture blankets, proper dollies, anti-tip straps, and careful handling at every step." },
];

export default function OfficeRelocationOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Office Relocation Ottawa | Office Moving Company Ottawa | Prestige Moving</title>
        <meta name="description" content="Ottawa's office relocation specialists. We handle full office moves — furniture, IT equipment, filing systems — with after-hours scheduling. Written quote. Call (613) 600-4000." />
        <meta name="keywords" content="office relocation Ottawa, office moving company Ottawa, commercial relocation Ottawa, office movers Ottawa, business relocation Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/office-relocation-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/office-relocation-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Building2 className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Office Relocation — Ottawa</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Office Relocation Ottawa — Professional Commercial Movers</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa's office relocation specialists. Whether you're moving a 5-person startup or a 200-person enterprise, Prestige Moving executes your office relocation with zero business disruption — after hours, on weekends, precisely on schedule.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Office Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["After-Hours & Weekend Moves", "Workstation Disassembly/Reassembly", "IT Equipment Handling", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ottawa Office Relocation — How We Do It</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>A successful office relocation in Ottawa starts weeks before moving day. We conduct a site visit at your current office, survey all furniture, equipment, and specialty items, identify access requirements at both locations (freight elevator hours, loading dock availability, parking permits), and develop a detailed move plan with your operations or facilities team.</p>
            <p>On move day — typically a Friday evening through Sunday — our crew works systematically through your floor plan, moving one section at a time to maintain organization. Every workstation, filing cabinet, and piece of furniture is numbered and tracked to its designated location in the new space. By Sunday evening, your furniture is in place, your IT team can reconnect systems, and you're ready for Monday morning.</p>
            <p>We service all Ottawa office districts: the downtown core (Bank Street, Sparks, Albert), the tech corridor (Kanata North, Nepean), Centretown, Little Italy, the ByWard Market area, and cross-river Gatineau/Hull. No matter where your office is, we know the building logistics.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[{ step: "01", title: "Site Assessment", desc: "We visit your office, survey all items, and confirm access logistics at both locations." },
              { step: "02", title: "Move Planning", desc: "Detailed move plan with labelling system, crew size, truck count, and timeline." },
              { step: "03", title: "Execution", desc: "After-hours crew executes the plan systematically — everything in its designated spot." }].map(s => (
              <div key={s.step} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="text-3xl font-bold text-[#C5A572] mb-2">{s.step}</div>
                <h3 className="font-bold text-[#1A2332] mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-[#1A2332] mb-3">What's Included in Office Relocation</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {["Workstation and cubicle disassembly/reassembly", "Boardroom furniture transport", "Filing cabinet and document system moves", "IT equipment careful handling and transport", "Furniture blanket protection for all items", "Numbered labelling and asset tracking", "Freight elevator and dock coordination", "Post-move walkthrough and verification"].map(item => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
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
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Relocate Your Ottawa Office?</h2>
          <p className="text-white/70 mb-6">Get a commercial quote. We'll plan your move around your schedule — not ours.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Office Quote</Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
