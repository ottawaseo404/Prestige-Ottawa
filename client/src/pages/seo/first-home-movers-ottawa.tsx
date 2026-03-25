import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, Home, Star, Key } from "lucide-react";

const FAQS = [
  { q: "When should I book movers for my first home purchase in Ottawa?", a: "Book your movers as soon as your closing date is confirmed — typically when you've waived conditions. Ottawa's moving market fills quickly, especially in spring and summer. Most first-home closing dates are set 30–60 days out, giving you a good booking window. Don't wait until the week before." },
  { q: "What should I do if the closing date gets pushed back?", a: "Closing date changes are common in real estate transactions. Call us as soon as you know — we can usually accommodate a date shift with sufficient notice. If the change is last-minute, we'll do our best to find availability. This is one reason why booking early and communicating with your movers is important." },
  { q: "Do I need to do anything before the movers arrive at my new home?", a: "Try to do a walk-through of your new home before moving day. Check that utilities are connected (hydro, gas, water), locate the electrical panel and water shutoff, and note any rooms with access restrictions. If you're getting work done before moving in (painting, flooring), complete it before moving day if possible." },
  { q: "What's the best way to organize my first home move?", a: "Pack by room, label every box with its destination room and brief contents, and pack an 'open first' box with essentials (kettle, toilet paper, phone charger, a change of clothes). See our full Ottawa moving checklist for a complete pre-move guide." },
  { q: "How much should I budget for my first home move in Ottawa?", a: "A typical first-home move in Ottawa — from an apartment to a house — costs $600–$1,500 depending on home size and distance. Use our online calculator for a preliminary estimate, or call (613) 600-4000 for a written quote based on your specific situation." },
];

export default function FirstHomeMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>First Home Movers Ottawa | First-Time Homebuyer Moving | Prestige Moving</title>
        <meta name="description" content="Moving into your first Ottawa home? Prestige Moving helps first-time homebuyers with friendly, transparent pricing and expert guidance. Written quote, 5.0★ rated. Call (613) 600-4000." />
        <meta name="keywords" content="first home movers Ottawa, first time homebuyer moving Ottawa, moving into first home Ottawa, new home movers Ottawa, Ottawa first home moving" />
        <link rel="canonical" href="https://prestigemoving.ca/first-home-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/first-home-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Key className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">First Home Ottawa Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">First Home Movers Ottawa —<br className="hidden md:block" /> Your New Keys, Our Best Crew</h1>
            <p className="text-white/70 text-lg mb-8">Buying your first home in Ottawa is a milestone. The move into it should match the moment — professional, smooth, and completely stress-free. Prestige Moving has helped hundreds of Ottawa first-time homebuyers make that move, and we're ready to make yours great too.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-10 text-center">What Makes a First-Home Move Different</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Home, title: "More Space to Fill", desc: "Moving from an apartment to a house often means more rooms, a basement, and a garage — all needing efficient loading and placement at the new home." },
              { icon: Key, title: "Closing Date Flexibility", desc: "Real estate closing dates can shift. We work with your timeline and communicate proactively if dates change, without charging unnecessary rebooking fees." },
              { icon: Star, title: "First Impression Matters", desc: "Your first day in your new home sets the tone. We make sure furniture is placed exactly where you want it — you walk in to a home that's already yours." },
              { icon: CheckCircle2, title: "Written Quote, No Surprises", desc: "First-home budgets are tight after a down payment and closing costs. Your written quote is your final price — no surprise fees on moving day." },
              { icon: Phone, title: "Guidance for First-Timers", desc: "Never hired movers before? We walk you through the process, answer every question, and make sure you know exactly what to expect from start to finish." },
              { icon: Home, title: "Ottawa Neighbourhood Expertise", desc: "We know Ottawa's streets, buildings, and parking restrictions. First-home moves in established neighbourhoods often have specific access considerations we're ready for." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-[#C5A572]" />
                </div>
                <h3 className="font-bold text-[#1A2332] mb-2 text-sm">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Moving Into Your First Ottawa Home</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Ottawa's first-time homebuyer market is one of the most active in Ontario — driven by federal government employment stability, Kanata's tech sector salaries, and a consistent pool of buyers coming from rental properties in <Link href="/residential-movers-centretown" className="text-[#C5A572] hover:underline">Centretown</Link>, <Link href="/movers-in-sandy-hill" className="text-[#C5A572] hover:underline">Sandy Hill</Link>, and <Link href="/movers-in-westboro" className="text-[#C5A572] hover:underline">Westboro</Link> making the jump to homeownership in <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, and <Link href="/movers-in-riverside-south" className="text-[#C5A572] hover:underline">Riverside South</Link>.</p>
            <p>The first-home move is often a bigger logistical undertaking than it appears. You're moving from a one or two-bedroom apartment into a multi-room house — which means more rooms to coordinate, a staircase where there may not have been one before, and typically a garage or basement full of items that accumulated during the apartment years. A 3-person crew (our Deluxe package) is typically the most efficient configuration for this type of move.</p>
            <p>Book as soon as your closing date is firm. Real estate closings in Ottawa cluster around end-of-month and Friday dates, which are also the highest-demand days for movers. Getting your date locked in means you get the crew and timing that works for your keys-in-hand moment.</p>
            <p>Resources for first-time homebuyers: <Link href="/ottawa-moving-checklist" className="text-[#C5A572] hover:underline">Ottawa Moving Checklist</Link> · <Link href="/how-much-does-moving-cost-ottawa" className="text-[#C5A572] hover:underline">Ottawa Moving Cost Guide</Link> · <Link href="/ottawa-neighbourhoods-guide" className="text-[#C5A572] hover:underline">Ottawa Neighbourhoods Guide</Link></p>
          </div>
        </div>
      </section>
      <section className="bg-white pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">First Home Movers Ottawa — FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Book Your First Ottawa Home Move</h2>
          <p className="text-white/65 mb-8">Written quote · Friendly crew · 5.0★ rated · No hidden fees</p>
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
