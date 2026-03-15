import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon, Building2 } from "lucide-react";

const FAQS = [
  { q: "Does Prestige Moving have experience with federal government office moves?", a: "Yes. We regularly work with federal departments, Crown corporations, and agencies in the National Capital Region. Our crew understands the protocols involved in government office relocations — security access, inventory documentation, careful handling of sensitive equipment, and minimal disruption to operations." },
  { q: "Can you move government offices after hours or on weekends?", a: "Yes — and for most government moves, after-hours and weekend scheduling is preferable to avoid disrupting operations. We schedule around your department's needs and can execute full office moves from Friday evening through Sunday, ensuring everything is operational by Monday morning." },
  { q: "Do you have security clearances?", a: "Our crew leads have undergone background checks appropriate for work in government buildings. If your specific move requires additional clearance levels, we work with your facilities management team to ensure compliance. Please discuss your security requirements during the quote process." },
  { q: "Can you move sensitive equipment like servers or confidential file cabinets?", a: "Yes. We use proper anti-static packing for IT equipment, locked transport for confidential file cabinets, and chain-of-custody documentation when required. For classified document moves, please discuss protocols with your department's security office." },
  { q: "What Ottawa government facilities have you moved?", a: "We've moved offices in and around buildings throughout the National Capital Region — downtown Ottawa, Hull/Gatineau, Kanata's technology parks, and suburban federal campuses. We're experienced with the specific loading dock requirements, elevator reservations, and building access protocols of government properties." },
];

export default function GovernmentOfficeMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Government Office Movers Ottawa | Federal Department Movers | Prestige Moving</title>
        <meta name="description" content="Ottawa's government office movers. We handle federal department relocations, Crown corporation moves, and DND office moves in the National Capital Region. Call (613) 600-4000." />
        <meta name="keywords" content="government office movers Ottawa, federal office relocation Ottawa, DND movers Ottawa, Crown corporation movers Ottawa, government moving company Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/government-office-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/government-office-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Building2 className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Government Office Moving — Ottawa</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Government Office Movers Ottawa — Federal Department Relocation</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa is Canada's capital — home to more federal government offices, Crown corporations, and public agencies than any city in the country. Prestige Moving has the experience, protocols, and professionalism to handle government office relocations across the National Capital Region.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Commercial Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["After-Hours & Weekend Available", "Security-Conscious Crew", "Sensitive Equipment Handling", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Government Office Relocation in the NCR — What Makes It Different</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Government office moves in Ottawa require a different approach than standard commercial relocations. Federal buildings often have specific access protocols, mandatory loading dock reservations, elevator reservation requirements, and security sign-in procedures. Moves often must be completed outside business hours to avoid disrupting ongoing departmental operations.</p>
            <p>The scale of government moves in Ottawa varies enormously — from a single team of 15 relocating within the same building, to multi-floor departmental consolidations involving hundreds of workstations, server rooms, and document archives. We've handled both ends of the spectrum and everything in between.</p>
            <p>Whether your department is consolidating space, relocating to Gatineau across the river, moving from a downtown building to a suburban campus in Kanata, or transitioning between leased properties, we develop a move plan in coordination with your facilities management team and execute it on schedule.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What We Handle</h3>
              <div className="space-y-2">
                {["Workstation and office furniture relocation", "Server room and IT equipment moves", "Filing cabinet and document transport", "After-hours and weekend scheduling", "Gatineau/Hull cross-river moves", "Multi-phase departmental consolidations"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">Our Government Move Process</h3>
              <div className="space-y-2">
                {["Pre-move site assessment and plan", "Coordination with facilities management", "Numbered item tracking system", "After-hours access and security protocols", "Dedicated project coordinator", "Post-move confirmation walkthrough"].map(item => (
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
          <h2 className="text-2xl font-bold text-white mb-3">Planning a Government Office Move in Ottawa?</h2>
          <p className="text-white/70 mb-6">Contact us for a commercial quote. We work directly with facilities management teams and department administrators.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Commercial Quote</Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
