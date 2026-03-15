import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, Users, Truck } from "lucide-react";

const FAQS = [
  { q: "Do you offer labour-only moving help in Ottawa?", a: "Yes — our Premium package (2 movers + truck starting at $155/hr) includes both the crew and the truck. If you have your own rental truck or van and only need the loading and unloading muscle, call us to discuss labour-only pricing. We accommodate these requests based on crew availability." },
  { q: "What tasks can moving labour help with?", a: "Loading a rental truck, unloading a rental truck, carrying items up or down stairs, moving heavy furniture to a different room, loading or unloading a POD or storage container, and general heavy lifting tasks that require trained, insured help." },
  { q: "Is hired moving labour insured in Ottawa?", a: "With Prestige Moving, yes — our crew members are covered by $2M+ liability insurance and WSIB certification. This protects you from liability if someone is injured on your property. Hiring day labourers from Kijiji or similar platforms does not provide this protection." },
  { q: "How many movers do I need to load a truck?", a: "For most apartment and small home loads, 2 movers can load a rental truck efficiently. For larger homes or if you need it done quickly, 3 movers (our Deluxe configuration) is more efficient. We'll recommend the right crew size after understanding your inventory." },
];

export default function MovingLabourOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving Labour Ottawa | Loading & Unloading Help | Prestige Moving</title>
        <meta name="description" content="Professional moving labour in Ottawa. Need help loading or unloading? Prestige Moving provides insured, WSIB-certified moving help — with or without a truck. Call (613) 600-4000." />
        <meta name="keywords" content="moving labour Ottawa, loading help Ottawa, unloading help Ottawa, moving helpers Ottawa, moving labour only Ottawa, movers labour Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-labour-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/moving-labour-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Users className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Moving Labour</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving Labour Ottawa —<br className="hidden md:block" /> Insured Help for Loading & Unloading</h1>
            <p className="text-white/70 text-lg mb-8">Sometimes you have the truck sorted but need the muscle. Prestige Moving provides professional, insured, WSIB-certified moving labour in Ottawa — whether you need a full move crew with a truck, or help loading your rental van.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-[#1A2332] mb-5">Why Hire Professional Moving Labour</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                <p>Hiring a friend to help you move saves money upfront. Hiring a day labourer from an online listing is often cheaper per hour than a professional moving company. But both options carry risks that the cost comparison doesn't capture.</p>
                <p>A friend who injures their back carrying your fridge up your stairs has no workers' compensation coverage — and depending on circumstances, you could be liable. A Kijiji day labourer without WSIB coverage puts you in the same position. And neither option comes with $2M+ liability insurance covering your belongings, your home's walls and floors, or your building's common areas.</p>
                <p>Prestige Moving's crew members are trained employees covered by full WSIB certification and $2M+ commercial liability insurance. When they carry your fridge, you know exactly who's responsible if something goes wrong — and it's covered.</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1A2332] mb-5">Moving Labour Services We Provide</h2>
              <div className="space-y-3">
                {[
                  "Full moves: crew + truck + all equipment",
                  "Loading a rental truck or van you've arranged",
                  "Unloading a rental truck or van at destination",
                  "Loading or unloading a PODS or storage container",
                  "Carrying heavy items up/down stairs",
                  "In-home heavy item repositioning",
                  "Loading furniture for pickup or donation",
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Moving Labour Ottawa — FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Need Moving Labour in Ottawa?</h2>
          <p className="text-white/65 mb-8">WSIB certified · $2M+ insured · 5.0★ rated · Written quote</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
