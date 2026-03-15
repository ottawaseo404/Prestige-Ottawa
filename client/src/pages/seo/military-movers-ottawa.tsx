import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, Shield, Clock, Star } from "lucide-react";

const FAQS = [
  { q: "Do you handle IRP (Integrated Relocation Program) military moves in Ottawa?", a: "Yes. We work with military members on IRP-covered relocations and can provide documentation required for reimbursement. Contact us with your posting notice and we'll guide you through what's needed for your claim." },
  { q: "How quickly can you schedule a military move in Ottawa?", a: "Military postings often come with compressed timelines. We prioritize CF/DND moves and maintain capacity for short-notice bookings. Call (613) 600-4000 as soon as you receive your posting notice to secure your preferred dates." },
  { q: "Do you move families to or from CFB Petawawa?", a: "Yes. We regularly move military families between Ottawa and CFB Petawawa, as well as other Ontario bases. Long-distance military moves to bases across Canada are also handled through our long-distance network." },
  { q: "What documentation do you provide for military move claims?", a: "We provide a detailed invoice with itemized services, hours, and rates that meets the documentation requirements for IRP claims. All receipts and supporting documentation are provided within 48 hours of move completion." },
  { q: "Do you move entire CF families including during the summer posting season?", a: "Yes. Summer is the peak posting season for Canadian Forces members, and we have the crew capacity and truck fleet to serve multiple military families simultaneously. Book as early as possible — summer military moves book out 4–6 weeks in advance." },
];

export default function MilitaryMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Military Movers Ottawa | DND & Canadian Forces Relocation | Prestige Moving</title>
        <meta name="description" content="Military movers in Ottawa serving DND, Canadian Forces, and IRP-covered relocations. Prestige Moving understands posting timelines, documentation requirements, and compressed schedules. Call (613) 600-4000." />
        <meta name="keywords" content="military movers Ottawa, DND movers Ottawa, Canadian Forces moving Ottawa, IRP military move Ottawa, CFB Ottawa movers, military relocation Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/military-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/military-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Shield className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Military Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Military Movers Ottawa —<br className="hidden md:block" /> DND & Canadian Forces Relocation</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa is home to National Defence Headquarters, DND, and one of the largest concentrations of Canadian Forces personnel in the country. Prestige Moving understands posting timelines, IRP documentation requirements, and the compressed schedules that military families operate on.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["IRP-Compatible Documentation", "Short-Notice Priority Booking", "Ottawa ↔ Petawawa Specialists", "5.0★ Rated", "$2M+ Insured"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Moving Ottawa's Military Community</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Ottawa is one of Canada's most significant military cities. National Defence Headquarters operates from the Pearkes Building in the downtown core, the Kanata North area hosts key DND research facilities, and thousands of Canadian Forces members and civilian DND employees are posted to Ottawa each year. The city's proximity to CFB Petawawa — roughly 160 km along Highway 17 — makes the Ottawa-Petawawa corridor one of the most active military relocation routes in Ontario.</p>
            <p>Military moves in Ottawa have several unique characteristics that Prestige Moving is specifically equipped to handle. Posting notices frequently arrive with 30–60 day timelines, which is short by civilian moving standards. Summer posting season (June–August) concentrates the demand into the exact period when Ottawa's civilian moving market is also at peak. And IRP-covered moves require specific documentation — itemized invoices, receipts, and hour-by-hour records — that not all moving companies are prepared to provide.</p>
            <p>We've built our military move process around these realities. When a service member calls with a posting notice, we prioritize their booking, work with their timeline, and deliver the documentation they need for IRP reimbursement within 48 hours of move completion. We've served military families relocating from <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, <Link href="/movers-in-nepean" className="text-[#C5A572] hover:underline">Nepean</Link>, and across Ottawa — moving to Petawawa, Trenton, Kingston, Borden, Gagetown, and bases across the country.</p>
            <p>For long-distance military postings across Canada, see our <Link href="/long-distance-movers-ottawa" className="text-[#C5A572] hover:underline">long-distance moving</Link> service. For same-day or urgent military moves within Ottawa, see our <Link href="/same-day-movers-ottawa" className="text-[#C5A572] hover:underline">same-day moving service</Link>.</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Military Movers Ottawa — FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Book Your Military Move in Ottawa</h2>
          <p className="text-white/65 mb-8">IRP documentation · Priority booking · 5.0★ rated · Short-notice available</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
