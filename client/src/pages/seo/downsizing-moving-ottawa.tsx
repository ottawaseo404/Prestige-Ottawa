import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, Home, Heart } from "lucide-react";

const FAQS = [
  { q: "How do you help with downsizing decisions?", a: "We don't pressure any decisions — that's your family's call. But we can help by organizing items into categories: going to the new home, going to a family member, going to donation, and going to disposal. We can coordinate with charities for donation pickup and with our junk removal service for items to be cleared. Having a plan before moving day makes the day itself far less overwhelming." },
  { q: "What happens to furniture that won't fit in the new place?", a: "Options include: donating to registered charities (we coordinate pickup through our furniture donation service), selling through Facebook Marketplace, Kijiji, or estate sale, transferring to adult children, or responsible disposal through our junk removal service. We can handle any combination of these on or before your moving day." },
  { q: "How much does a downsizing move cost in Ottawa?", a: "Downsizing moves vary significantly based on the origin home's size and how much is actually moving to the new place. A move from a 4-bedroom house to a 2-bedroom condo — where only selected furniture and personal items are moving — typically takes 4–7 hours with our Deluxe crew (3 movers + truck at $195/hr). Written quote provided after discussing your specific situation." },
  { q: "How far in advance should we plan a downsizing move?", a: "For a proper downsizing move with sorting, donation coordination, and disposal, allow 4–6 weeks of planning time. This gives time to make unhurried decisions about what goes where, coordinate donation pickups, and book the actual moving date. Rushing a downsizing move leads to regret about decisions made under pressure." },
  { q: "Can you help with estate moves where the homeowner has passed away?", a: "Yes. We handle estate moving situations with care and discretion, coordinating with executors, family members, or estate lawyers as needed. For complete estate clearing, see our estate cleanout service." },
];

export default function DownsizingMovingOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Downsizing Moving Ottawa | Seniors & Family Downsizing Specialists | Prestige Moving</title>
        <meta name="description" content="Downsizing moving specialists in Ottawa. Prestige Moving helps seniors and families move from larger homes to smaller spaces with furniture sorting, donation coordination, and compassionate service. Call (613) 600-4000." />
        <meta name="keywords" content="downsizing Ottawa, downsizing movers Ottawa, downsizing moving Ottawa, senior downsizing Ottawa, moving to smaller home Ottawa, downsize Ottawa movers" />
        <link rel="canonical" href="https://prestigemoving.ca/downsizing-moving-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/downsizing-moving-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Home className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Downsizing Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Downsizing Moving Ottawa —<br className="hidden md:block" /> From Family Home to Right-Sized Life</h1>
            <p className="text-white/70 text-lg mb-8">Downsizing is one of the most complex moves you'll make — not because of the distance, but because of the decisions. Prestige Moving helps Ottawa families and seniors navigate the process with clarity, coordination, and complete respect for every belonging.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1A2332] mb-5">What Prestige Moving Does for Downsizing Clients</h2>
              <div className="space-y-3">
                {[
                  "Pre-move consultation to plan category sorting (keep / donate / dispose / family)",
                  "Furniture assessment — what fits in the new space, what doesn't",
                  "Coordination with Ottawa charities for furniture and household goods donation",
                  "Junk removal for items not suitable for donation",
                  "Careful moving of items going to the new home",
                  "Delivery of items to family members' addresses on the same move",
                  "Estate move coordination with executors and family representatives",
                  "Patience — downsizing moves are scheduled with extra time built in",
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#1A2332]">Ottawa's Downsizing Market</h2>
              <p className="text-sm">Ottawa's baby boomer population is entering its peak downsizing years. Federal public servants who purchased family homes in <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, <Link href="/movers-in-nepean" className="text-[#C5A572] hover:underline">Nepean</Link>, and <Link href="/movers-in-gloucester" className="text-[#C5A572] hover:underline">Gloucester</Link> in the 1980s and 90s are now moving to condos in <Link href="/residential-movers-centretown" className="text-[#C5A572] hover:underline">Centretown</Link>, retirement communities in <Link href="/movers-in-westboro" className="text-[#C5A572] hover:underline">Westboro</Link> and <Link href="/movers-in-manotick" className="text-[#C5A572] hover:underline">Manotick</Link>, or closer to their adult children's neighbourhoods.</p>
              <p className="text-sm">Downsizing from a 4-bedroom family home to a 1,200 sq ft condo means leaving behind decades of accumulated possessions. The logistical challenge — what goes, what stays, what goes to family, what gets donated — is compounded by the emotional dimension. Homes hold memories. Furniture carries family history. A good downsizing mover understands that this is not just a logistics problem.</p>
              <p className="text-sm">Related: <Link href="/senior-movers-ottawa" className="text-[#C5A572] hover:underline">Senior Movers Ottawa</Link> · <Link href="/furniture-donation-disposal-ottawa" className="text-[#C5A572] hover:underline">Furniture Donation & Disposal</Link> · <Link href="/estate-cleanout-ottawa" className="text-[#C5A572] hover:underline">Estate Cleanout Ottawa</Link></p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Downsizing Moving Ottawa — FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Plan Your Ottawa Downsizing Move</h2>
          <p className="text-white/65 mb-8">Patient, experienced crew · Donation coordination · Written quote · 5.0★ rated</p>
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
