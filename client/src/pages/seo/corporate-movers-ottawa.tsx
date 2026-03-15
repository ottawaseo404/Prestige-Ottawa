import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon, Briefcase } from "lucide-react";

const FAQS = [
  { q: "What types of corporate moves does Prestige Moving handle?", a: "We handle the full range of corporate relocations: single-office moves, full floor consolidations, multi-location moves, and corporate employee relocation packages. Whether you're a startup relocating to a larger space or an enterprise consolidating multiple Ottawa offices, we scale to your scope." },
  { q: "How do you minimize business disruption during a corporate move?", a: "Most corporate moves are executed outside business hours — evenings and weekends — so your team returns Monday to a fully operational office. We develop a detailed move plan in advance, assign item labels to every workstation, and confirm the timeline with your facilities or operations lead." },
  { q: "Can Prestige Moving handle IT equipment relocation?", a: "Yes. We properly disconnect, wrap, and transport computer workstations, monitors, servers, networking equipment, and printers. We strongly recommend your IT team oversees the disconnection and reconnection of critical infrastructure, while we handle the physical transport." },
  { q: "Do you provide inventory/asset tracking during corporate moves?", a: "Yes. We use a numbered labelling system that tracks every item from origin to destination. For moves requiring precise asset tracking (particularly government or financial sector clients), we provide a move manifest that matches each numbered item to its origin and destination location." },
  { q: "How far in advance should I book a corporate move?", a: "For large office moves (50+ workstations), we recommend 4–8 weeks advance booking. Smaller moves (under 20 workstations) can often be accommodated with 1–2 weeks notice. Contact us as soon as you have a confirmed move date." },
];

export default function CorporateMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Corporate Movers Ottawa | Office Relocation Specialists | Prestige Moving</title>
        <meta name="description" content="Ottawa's corporate movers. We handle office relocations, workstation moves, IT equipment transport, and multi-floor corporate moves. Written quote. Call (613) 600-4000." />
        <meta name="keywords" content="corporate movers Ottawa, corporate office relocation Ottawa, business movers Ottawa, commercial moving company Ottawa, office move Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/corporate-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/corporate-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Briefcase className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Corporate Moving — Ottawa</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Corporate Movers Ottawa — Office Relocation Specialists</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa's business community — from Kanata tech firms to Centretown law offices to Gatineau government consultancies — trusts Prestige Moving for corporate office relocations. Zero business disruption. Everything operational by Monday morning.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Corporate Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["After-Hours & Weekends", "Item Tracking System", "IT Equipment Capable", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Corporate Relocation in Ottawa — Done Right</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>A corporate office move is a project, not a transaction. It requires pre-move planning, item labelling, after-hours execution, IT coordination, and post-move verification — all managed without any impact on your business continuity. That's the Prestige Moving approach to corporate moves in Ottawa.</p>
            <p>Ottawa's commercial real estate landscape has shifted significantly post-pandemic. Many companies are consolidating space, reconfiguring layouts, or transitioning from downtown office towers to suburban campuses in Kanata, Nepean, or Gloucester. Others are reducing their Ottawa footprint and shifting to smaller, purpose-built collaborative spaces. All of these transitions require a reliable commercial moving partner.</p>
            <p>We have the trucks, the crew, and the project management discipline to execute corporate moves of any size — from a 5-person team relocating down the hall to a 200-person enterprise moving from one building to another across town.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">Services Included</h3>
              <div className="space-y-2">
                {["Full office furniture relocation", "Workstation and IT equipment transport", "Filing system and archive moves", "Crating for sensitive equipment", "After-hours and weekend scheduling", "Numbered asset tracking system"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">Industries We Serve</h3>
              <div className="space-y-2">
                {["Technology & SaaS companies", "Law firms and consulting groups", "Financial services and insurance", "Healthcare and medical practices", "Federal and provincial government", "Non-profit and association offices"].map(item => (
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
          <h2 className="text-2xl font-bold text-white mb-3">Planning a Corporate Move in Ottawa?</h2>
          <p className="text-white/70 mb-6">Get a commercial quote. We work with your facilities team to plan a zero-disruption relocation.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Corporate Quote</Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
