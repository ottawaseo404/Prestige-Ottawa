import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, Building2, Shield, Clock, TruckIcon, ChevronDown, Monitor, Users, Package } from "lucide-react";

const FAQS = [
  { q: "How much does an office move cost in Ottawa?", a: "Office moves in Ottawa range from $900–$8,000+ depending on office size, equipment complexity, and whether the move requires after-hours scheduling. A small 5–10 person professional office typically costs $900–$2,500. Larger offices with IT infrastructure and specialized equipment range from $2,500–$8,000+. Written quote provided after site assessment." },
  { q: "Can you move servers and IT equipment?", a: "We handle general IT office equipment — workstations, monitors, networking hardware, UPS systems, and server racks. For complex server room migrations, we coordinate with your IT team to document configurations and plan the move sequence. Highly specialized clinical or industrial equipment may require manufacturer involvement." },
  { q: "Do you offer after-hours and weekend office moves?", a: "Yes. Most Ottawa office moves are scheduled for evenings or weekends to minimize business disruption. We have full crew availability for Friday-evening, Saturday, and Sunday moves. Your staff comes in Monday to a fully operational new office." },
  { q: "How far in advance should we book an office move?", a: "For complex office moves with IT infrastructure, 3–4 weeks notice is recommended for proper planning. For smaller professional offices, 1–2 weeks is often sufficient. After-hours and weekend slots fill quickly — book early to secure your preferred date." },
  { q: "Do you provide a move coordinator for office relocations?", a: "Yes. Every commercial move includes a dedicated project manager who conducts the pre-move assessment, produces a written move plan, coordinates building access, and is on-site throughout moving day to ensure execution matches the plan." },
];

const OFFICE_TYPES = [
  { type: "Professional Services", desc: "Accounting, legal, financial advisory, and consulting offices — confidential files, boardroom furniture, and workstations handled efficiently." },
  { type: "Government & Public Sector", desc: "Federal and provincial offices with documented asset transfer requirements, chain-of-custody protocols, and security considerations." },
  { type: "Technology Companies", desc: "Workstations, development hardware, networking infrastructure, and server equipment handled with documented IT protocols." },
  { type: "Medical & Healthcare Offices", desc: "Clinical offices, dental practices, and allied health businesses moved with patient record privacy and equipment care protocols." },
  { type: "Non-Profit Organizations", desc: "Efficient, cost-conscious relocation planning for Ottawa's non-profit and charitable sector." },
  { type: "Retail & Hospitality", desc: "Commercial fit-outs for retail businesses, restaurants, and hospitality venues with specialized equipment and fixture handling." },
];

export default function OfficeMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Office Movers Ottawa | Commercial Office Relocation | Prestige Moving</title>
        <meta name="description" content="Professional office movers in Ottawa. Prestige Moving specializes in commercial office relocations — IT equipment, after-hours moves, and zero-downtime execution. WSIB certified. Call (613) 600-4000." />
        <meta name="keywords" content="office movers Ottawa, office moving Ottawa, commercial office movers Ottawa, office relocation Ottawa, business movers Ottawa, Ottawa office moving company" />
        <link rel="canonical" href="https://prestigemoving.ca/office-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/office-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />

      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Building2 className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Office Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Ottawa Office Movers —<br className="hidden md:block" /> Zero Downtime, Every Time</h1>
            <p className="text-white/70 text-lg mb-8">Your Ottawa office move happens on a Friday evening or weekend — and your team walks into a fully operational space on Monday. Dedicated project manager, written move plan, IT equipment protocols, and after-hours crew availability.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Commercial Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
            {["After-Hours & Weekend Available", "Dedicated Project Manager", "IT Equipment Protocols", "Written Move Plan", "WSIB Certified"].map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-10 text-center">Our Ottawa Office Moving Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Pre-Move Assessment", desc: "Project manager visits both locations to inventory equipment, assess access logistics, and document the move sequence." },
              { step: "2", title: "Written Move Plan", desc: "A detailed written plan covering equipment inventory, move sequence, IT handling notes, and building access logistics." },
              { step: "3", title: "After-Hours Execution", desc: "Crew arrives Friday evening or Saturday morning. Full move completed within your planned window." },
              { step: "4", title: "Monday Operational", desc: "Your new office is fully set up — workstations placed, furniture staged, IT equipment positioned for reconnection." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 bg-[#C5A572] rounded-full flex items-center justify-center text-[#1A2332] font-bold text-lg mx-auto mb-4">{step}</div>
                <h3 className="font-bold text-[#1A2332] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-10 text-center">Ottawa Office Types We Relocate</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFICE_TYPES.map(({ type, desc }) => (
              <div key={type} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#1A2332] mb-2 text-sm">{type}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Why Ottawa Businesses Choose Prestige Moving for Office Relocations</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>An office move is fundamentally different from a residential move in one critical dimension: the cost of delay is not just inconvenience — it's lost revenue, disrupted client services, and staff productivity that cannot be recovered. This is why every Prestige Moving office relocation is treated as a project with a hard delivery deadline, not just a moving job.</p>
            <p>Our commercial office moves serve clients across Ottawa's entire professional landscape — from small professional services firms in <Link href="/commercial-movers-centretown" className="text-[#C5A572] hover:underline">Centretown</Link> to technology companies in <Link href="/commercial-movers-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, government-adjacent organizations in <Link href="/commercial-movers-nepean" className="text-[#C5A572] hover:underline">Nepean</Link>, and healthcare practices in <Link href="/commercial-movers-alta-vista" className="text-[#C5A572] hover:underline">Alta Vista</Link>. Each move begins with a pre-move assessment and ends with a Monday-morning-ready office.</p>
            <p>For related commercial services, see our <Link href="/services/commercial-moving" className="text-[#C5A572] hover:underline">commercial moving service page</Link> or our <Link href="/commercial-movers-ottawa" className="text-[#C5A572] hover:underline">commercial movers Ottawa</Link> overview.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Office Movers Ottawa — FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Plan Your Ottawa Office Move</h2>
          <p className="text-white/65 mb-8">Written quote · Pre-move assessment · After-hours availability · WSIB certified</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Commercial Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
