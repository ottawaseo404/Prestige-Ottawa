import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, Briefcase, Building2, Globe } from "lucide-react";

const FAQS = [
  { q: "What does a corporate relocation service in Ottawa include?", a: "Our corporate relocation service covers full household packing, moving, and unpacking; temporary storage if there's a gap between properties; coordination with HR and relocation management companies; and IRP-compatible documentation for government and military clients. We provide a single point of contact throughout the process." },
  { q: "Do you work with relocation management companies?", a: "Yes. We work with major relocation management companies (RMC) operating in the Ottawa market and can integrate into their established workflows, documentation requirements, and billing processes." },
  { q: "How quickly can you relocate an employee to Ottawa?", a: "With sufficient notice, we can coordinate a full relocation within 2–3 weeks. For urgent executive relocations, we can mobilize within 72 hours depending on origin location and volume." },
  { q: "Do you help employees relocating from outside Ottawa?", a: "Yes. We handle inbound relocations from anywhere in Canada. For moves from Toronto, Montreal, Calgary, Vancouver, and other major centres, we use our long-distance network. For Ottawa-to-Ottawa or short-regional moves, we coordinate directly." },
  { q: "Can you provide relocation services for government departments?", a: "Yes. We regularly support federal government departments relocating employees within the National Capital Region and to/from Ottawa postings. We understand federal government procurement requirements and can work within your department's vendor policies." },
];

export default function RelocationServicesOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Relocation Services Ottawa | Corporate Employee Relocation | Prestige Moving</title>
        <meta name="description" content="Corporate and employee relocation services in Ottawa. Prestige Moving handles government, tech, and private sector relocations — full coordination, single point of contact, written quote. Call (613) 600-4000." />
        <meta name="keywords" content="relocation services Ottawa, corporate relocation Ottawa, employee relocation Ottawa, Ottawa relocation company, government relocation Ottawa, executive relocation Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/relocation-services-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/relocation-services-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Briefcase className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Corporate Relocation</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Relocation Services Ottawa —<br className="hidden md:block" /> Corporate & Employee Relocation Specialists</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa's federal government, tech sector, and national headquarters companies relocate employees into and within the capital every year. Prestige Moving provides a seamless relocation experience — single point of contact, full documentation, and a 5.0★ standard for every employee you relocate.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Corporate Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Single Point of Contact", "HR & RMC Compatible", "Federal Government Experience", "5.0★ Rated", "Full Documentation Provided"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-10 text-center">Relocation Services We Provide in Ottawa</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Building2, title: "Government Sector Relocation", desc: "Federal departments, Crown corporations, and DND/military postings. IRP documentation, procurement-compatible billing, and security-conscious crew." },
              { icon: Globe, title: "Technology & Private Sector", desc: "Kanata North tech companies, national HQs, and growing businesses relocating talent to Ottawa from other Canadian cities." },
              { icon: Briefcase, title: "Executive & VIP Relocation", desc: "C-suite and senior leadership moves with dedicated coordinator, premium packing service, priority scheduling, and complete confidentiality." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center">
                <div className="w-12 h-12 bg-[#C5A572]/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-[#C5A572]" />
                </div>
                <h3 className="font-bold text-[#1A2332] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ottawa: Canada's Corporate Relocation Hub</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Ottawa receives more employee relocations than any other Canadian city relative to its population, driven by the federal public service's national posting system, the defence and intelligence sector, and the growing technology cluster in Kanata North. The National Capital Region's employer base includes over 120,000 federal public servants, the Canadian Armed Forces, dozens of federal agencies, and major tech employers including Shopify, Nokia, L3Harris, BlackBerry, and hundreds of defence and government contractors.</p>
            <p>For HR teams managing incoming employees, the relocation experience is a direct signal of how much the employer values the hire. An employee who has a disorganized, stressful relocation experience has already formed a negative impression of their new employer before their first day. Prestige Moving's relocation service is designed to deliver the opposite: an employee who arrives in Ottawa feeling taken care of, who can focus on their new role instead of the logistics of their move.</p>
            <p>Our corporate relocation accounts include billing to company, direct HR contact throughout the process, post-move satisfaction confirmation, and complete documentation for expense reports and relocation allowance claims. For inbound relocations from other cities, see our <Link href="/long-distance-movers-ottawa" className="text-[#C5A572] hover:underline">long-distance moving</Link> service. For <Link href="/military-movers-ottawa" className="text-[#C5A572] hover:underline">military relocations</Link>, see our dedicated DND/CF page.</p>
          </div>
        </div>
      </section>
      <section className="bg-white pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Relocation Services Ottawa — FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-white">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Plan Your Ottawa Corporate Relocation</h2>
          <p className="text-white/65 mb-8">Single point of contact · Full documentation · 5.0★ rated · WSIB certified</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Corporate Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
