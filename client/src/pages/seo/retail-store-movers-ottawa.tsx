import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "How do you handle retail inventory during a store move?", a: "We work with your team to develop an inventory management plan — items on display, backstock, fixtures, and equipment all get categorized, labelled, and moved in a sequence that makes unpacking and store setup at the new location as efficient as possible." },
  { q: "Can you move retail display fixtures and shelving?", a: "Yes. We disassemble and move standard retail gondola shelving, display cases, racks, mannequins, and point-of-sale counters. For heavy display cases or custom fixtures, we assess during the quote process." },
  { q: "Can we move during store hours?", a: "Moving during business hours is rarely advisable for a full retail relocation. We recommend scheduling the move for your lowest-traffic period — often overnight or a weekend. Many Ottawa retailers schedule a 2-3 day closure for their relocation and we execute within that window." },
  { q: "What Ottawa retail zones do you move from and to?", a: "We handle moves within and between all Ottawa retail corridors: the Rideau Centre area, Westboro, ByWard Market, Bank Street, St. Laurent, Gloucester, Barrhaven Town Centre, and suburban strip malls across the city." },
  { q: "Do you have experience with high-value retail (jewellery, electronics)?", a: "Yes. For high-value merchandise, we work with your insurance requirements and can provide additional documentation, locked transport, and chain-of-custody procedures. Please discuss your specific security requirements during the quote." },
];

export default function RetailStoreMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Retail Store Movers Ottawa | Commercial Retail Relocation | Prestige Moving</title>
        <meta name="description" content="Ottawa retail store movers. We relocate shops, boutiques, and retail businesses — fixtures, inventory, and displays. Minimal downtime. Written quote. Call (613) 600-4000." />
        <meta name="keywords" content="retail store movers Ottawa, retail relocation Ottawa, shop movers Ottawa, store moving company Ottawa, commercial retail movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/retail-store-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/retail-store-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Retail Store Moving — Ottawa</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Retail Store Movers Ottawa — Commercial Retail Relocation</h1>
            <p className="text-white/70 text-lg mb-8">Moving a retail store in Ottawa? Prestige Moving handles the full relocation — fixtures, shelving, inventory, display cases, and backstock — on a schedule that minimizes your store's downtime.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Retail Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Minimal Store Downtime", "Fixture Disassembly", "Inventory Transport", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ottawa Retail Relocation — Planning Your Store Move</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Retail relocations are time-sensitive. Every day your store is closed costs revenue. Our goal is to complete your retail relocation as quickly as possible while ensuring everything arrives safely and is set up for your opening day at the new location.</p>
            <p>We start with a pre-move assessment — walking through your current store to understand the scope: display fixtures, shelving systems, POS equipment, backroom storage, and any specialty items. We then develop a move plan that sequences the work for maximum efficiency, typically executing the move overnight or over a single weekend.</p>
            <p>Ottawa's retail sector spans everything from independent boutiques in Westboro and the ByWard Market to anchor tenants in Rideau Centre and major suburban power centres. We've moved all types of retail stores and understand the varied logistics of each retail environment.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What We Move</h3>
              <div className="space-y-2">
                {["Display shelving and gondola systems", "Display cases and counters", "Clothing racks and mannequins", "Backroom storage and inventory", "POS systems and technology", "Signage and branding elements"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">Retail Types We Move</h3>
              <div className="space-y-2">
                {["Clothing and fashion boutiques", "Grocery and specialty food stores", "Electronics and technology retail", "Furniture and home goods stores", "Jewellery and luxury retail", "Health and beauty / pharmacy"].map(item => (
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
          <h2 className="text-2xl font-bold text-white mb-3">Moving Your Ottawa Retail Store?</h2>
          <p className="text-white/70 mb-6">Get a quote for your retail relocation. We'll have you open and ready to serve customers in the new location on schedule.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Retail Quote</Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
