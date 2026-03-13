import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, Star, ArrowRight, ChevronDown, CheckCircle2, AlertTriangle,
  DollarSign, Shield, Package, Clock, FileText, TruckIcon
} from "lucide-react";
import fleetImg from "@assets/prestige-fleet_1771975522124.webp";

const TOC_ITEMS = [
  { id: "types-of-quotes",    title: "Types of Moving Quotes" },
  { id: "what-affects",       title: "What Affects Your Quote" },
  { id: "red-flags",          title: "Red Flags in Ottawa Quotes" },
  { id: "what-to-have-ready", title: "What to Have Ready" },
  { id: "get-quote",          title: "Get a Prestige Quote" },
  { id: "faq",                title: "FAQ" },
];

const FAQS = [
  { q: "What is a moving service quote?", a: "A moving service quote is a written estimate from a moving company detailing the expected cost of your move based on the information you provide. It should outline the rate (hourly or flat), the scope of service included (packing, stairs, travel), the estimated total range, and the terms of the estimate (binding vs. non-binding). A professional Ottawa moving company always provides a written quote — a verbal quote is not enforceable." },
  { q: "What is the difference between a binding and non-binding moving estimate?", a: "A binding estimate commits the moving company to a fixed price regardless of the actual time the move takes. You pay what's quoted. A non-binding (hourly) estimate means the final price is based on actual clock time — if the move takes longer than estimated, you pay more; shorter and you pay less. Most Ottawa residential moves are non-binding hourly estimates. Flat-rate binding quotes are more common for long-distance moves (Toronto to Ottawa, Montreal to Ottawa, etc.)." },
  { q: "How do I get the most accurate Ottawa moving quote?", a: "An accurate Ottawa moving quote requires: your home size and number of rooms, the postal codes of both origin and destination, the number of staircases at each address (and if elevator is available), any specialty items (piano, safe, pool table, hot tub), your preferred move date(s), and whether you'll be fully packed on moving day. The more accurately you describe your move, the more accurate the quote will be." },
  { q: "Should I get multiple moving quotes in Ottawa?", a: "Getting 2–3 quotes from Ottawa moving companies is a reasonable approach, but comparing quotes requires careful reading — a $50/hour rate difference may reflect an inferior crew, weaker insurance, or hidden fees that won't appear until moving day. Compare: hourly rate AND minimum hours, travel fee, what is included (disassembly, blankets, wrapping), insurance levels, and whether the crew is employees or subcontractors." },
  { q: "What should I be suspicious of in an Ottawa moving quote?", a: "Red flags in Ottawa moving quotes include: a verbal-only quote with no written confirmation, a rate that is significantly below market ($100/hr or less for a 2-person crew is unusually low), a large deposit required upfront, no mention of insurance coverage, a quote with no itemization of fees, and any company that doesn't ask for your staircase count, full address, or home size when quoting." },
  { q: "How long does it take to get a moving quote from Prestige Moving?", a: "Prestige Moving provides written quotes within 24 hours of receiving your move details through our online form or via phone at (613) 600-4000. For simple local Ottawa moves, quotes are often provided same-day. For complex or large moves, we may schedule a brief phone consultation to confirm details before issuing the written quote." },
  { q: "Is there a cost to get a moving quote from Prestige Moving Ottawa?", a: "No. Moving quotes from Prestige Moving are always free and provided in writing with no obligation. We don't charge quote fees, consultation fees, or any other charges prior to your move date." },
];

export default function MovingQuotesOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Get an Ottawa Moving Quote — A Complete Guide",
    "description": "Everything you need to know about getting an accurate Ottawa moving quote: types of estimates, what affects pricing, red flags to avoid, and how to compare Ottawa moving companies.",
    "author": { "@type": "Organization", "name": "Prestige Moving" },
    "url": "https://prestigemoving.ca/moving-quotes-ottawa"
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } })) };

  return (
    <>
      <Helmet>
        <title>Ottawa Moving Quotes | Get a Moving Estimate Ottawa | Prestige Moving</title>
        <meta name="description" content="Get a free written moving quote from Ottawa's top-rated moving company. Learn what a good moving quote includes, red flags to avoid, and how to compare Ottawa moving estimates accurately." />
        <meta name="keywords" content="moving quote Ottawa, Ottawa moving estimate, free moving quote Ottawa, moving service quote Ottawa, get moving quotes Ottawa, moving company quotes Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-quotes-ottawa" />
        <meta property="og:title" content="Ottawa Moving Quotes | Get a Moving Estimate Ottawa" />
        <meta property="og:description" content="Free written moving quotes from Ottawa's 5-star moving company. Know exactly what your Ottawa move will cost before booking." />
        <meta property="og:url" content="https://prestigemoving.ca/moving-quotes-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />
      <div className="min-h-screen bg-white">

        <section className="relative h-[460px] flex items-end pb-16">
          <img src={fleetImg} alt="Ottawa moving quote — get your free estimate" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d1620]/92" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <FileText className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Ottawa Moving Quotes · Written & Free</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 max-w-3xl leading-tight">Ottawa Moving Quotes</h1>
            <p className="text-lg text-white/70 max-w-xl mb-2">Get a free written moving estimate from Ottawa's 5.0-star moving company. No surprise fees. What we quote is what you pay.</p>
            <p className="text-white/50 text-sm mb-8 flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-[#C5A572] fill-[#C5A572]" /> 5.0 stars · 400+ reviews</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-[#C5A572]" /> Quotes within 24 hours</span>
              <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-[#C5A572]" /> Written · No obligation</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Ottawa Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <section className="bg-[#1A2332] py-5">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "Free",        label: "Quote, always" },
              { value: "Written",     label: "Every estimate in writing" },
              { value: "24 hrs",      label: "Quote turnaround" },
              { value: "No Deposits", label: "Until confirmed" },
            ].map(({ value, label }, i) => (
              <div key={i}><div className="text-lg font-bold text-[#C5A572]">{value}</div><div className="text-white/50 text-xs mt-0.5">{label}</div></div>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="xl:flex gap-12 items-start">
            <TableOfContents items={TOC_ITEMS} />
            <div className="flex-1 min-w-0 space-y-16">

              <section id="types-of-quotes" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <FileText className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Types of Moving Estimates</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Types of Moving Quotes in Ottawa</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Not all Ottawa moving quotes are the same. The type of estimate determines how much price certainty you have going into moving day.</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { type: "Non-Binding Hourly", desc: "Final price = actual hours worked × hourly rate. Typical for local Ottawa moves. You benefit if the move is faster than estimated; you pay more if it runs long. Most common format for Ottawa residential moves.", pro: "True pricing based on actual work", con: "Some uncertainty in final cost", common: true },
                    { type: "Binding Flat Rate", desc: "You pay the quoted price regardless of actual time. More common for Ottawa long-distance and interstate moves. The moving company takes the risk if the move takes longer than expected.", pro: "100% cost certainty", con: "Rate includes contingency buffer", common: false },
                    { type: "Not-to-Exceed", desc: "A hybrid: the price will not exceed the quote even if the move takes longer, but you pay less if it's faster. The most consumer-friendly format. We offer this for all Prestige Moving bookings.", pro: "Best of both worlds", con: "Sometimes a slight rate premium", common: false },
                  ].map(({ type, desc, pro, con, common }, i) => (
                    <div key={i} className={`p-5 rounded-xl border-2 ${common ? "border-[#C5A572] bg-[#C5A572]/5" : "border-gray-200"}`}>
                      {common && <div className="text-[#C5A572] text-xs font-bold uppercase tracking-wide mb-2">Most Common in Ottawa</div>}
                      <div className="font-bold text-[#1A2332] text-base mb-3">{type}</div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{desc}</p>
                      <div className="text-xs text-green-700 mb-1"><span className="font-medium">Pro: </span>{pro}</div>
                      <div className="text-xs text-red-600"><span className="font-medium">Con: </span>{con}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="what-affects" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <DollarSign className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Quote Factors</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">What Affects Your Ottawa Moving Quote?</h2>
                <p className="text-gray-600 leading-relaxed mb-6">These are the variables Ottawa moving companies use to calculate your estimate. Provide accurate information on all of them to receive the most accurate quote:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { factor: "Home Size & Bedroom Count", detail: "The primary driver of your quote. More rooms = more items = more crew time. Always specify the number of bedrooms and whether you have a basement, garage, or storage." },
                    { factor: "Origin & Destination Distance", detail: "Driving time between your pickup and delivery address is billed at the hourly rate. Kanata to Barrhaven vs. Centretown to Westboro have dramatically different travel times." },
                    { factor: "Staircase Count", detail: "Staircases at both origin and destination are factored into the quote. A 3rd-floor walkup at both addresses adds significant time — be precise about which floor you're on." },
                    { factor: "Packing Level", detail: "Arriving fully packed on move day reduces the time (and cost) significantly. If you need the crew to pack, this is quoted separately." },
                    { factor: "Specialty Items", detail: "Piano, pool table, safe, hot tub — each requires specific equipment and adds to the quote. Always disclose specialty items upfront." },
                    { factor: "Move Date & Season", detail: "Peak season (May–September) and month-ends command higher rates. Mid-week, mid-month, off-season moves receive the lowest rates." },
                  ].map(({ factor, detail }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-2">{factor}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{detail}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="red-flags" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <AlertTriangle className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Red Flags</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Red Flags in Ottawa Moving Quotes</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Ottawa moving complaints almost always trace back to a quote that looked attractive but omitted critical information. Watch for these warning signs:</p>
                <div className="space-y-3">
                  {[
                    { flag: "Verbal-only quote, nothing in writing", risk: "Zero protection if the price changes on moving day. Any responsible Ottawa mover will provide a written estimate." },
                    { flag: "No mention of insurance coverage", risk: "Moving companies in Ontario are required to carry insurance. A quote that doesn't address liability is a significant warning sign." },
                    { flag: "Rate significantly below market ($100/hr or less)", risk: "Ottawa moving at well-below-market rates typically means: subcontractors, limited insurance, no WSIB, and potentially inexperienced crew." },
                    { flag: "Large upfront deposit required", risk: "Reputable Ottawa movers don't require large deposits. 10–20% at booking confirmation is reasonable; 50%+ deposits are a warning sign." },
                    { flag: "Quote provided without asking about stairs or specialty items", risk: "A mover who doesn't ask about your staircase count or specialty items cannot provide an accurate quote — the omission will show up in the final invoice." },
                    { flag: "Pressure to book immediately without time to compare", risk: "Reliable moving companies are confident in their rates. High-pressure same-day booking tactics are a red flag for predatory pricing practices." },
                  ].map(({ flag, risk }, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-red-50 border border-red-200">
                      <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <div><div className="font-bold text-red-900 text-sm mb-1">{flag}</div><div className="text-red-700 text-sm leading-relaxed">{risk}</div></div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="what-to-have-ready" className="scroll-mt-24 bg-gray-50/70 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Be Prepared</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">What to Have Ready When Requesting an Ottawa Moving Quote</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Home size: number of bedrooms, basement, garage",
                    "Full origin address (postal code and floor)",
                    "Full destination address (postal code and floor)",
                    "Number of staircases at origin (flights, not steps)",
                    "Number of staircases at destination",
                    "Elevator availability and booking window if condo",
                    "Preferred move date(s)",
                    "Whether you'll be fully packed on move day",
                    "Any specialty items (piano, safe, pool table, hot tub)",
                    "Any large or unusually heavy furniture",
                    "Whether packing service is needed",
                    "Any access restrictions (parking, street rules, gate codes)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-100">
                      <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section id="get-quote" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <TruckIcon className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Prestige Moving Ottawa</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">What Makes a Prestige Moving Ottawa Quote Different</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: "Always in Writing", desc: "Every Prestige Moving quote is emailed as a written document with itemized pricing. No verbal commitments — everything is on paper and signed before we show up." },
                    { title: "No Hidden Fees", desc: "Our quotes include: hourly rate, travel fee, minimum hours, and any potential surcharges (stairs, specialty items). Nothing appears on moving day that wasn't in the quote." },
                    { title: "Free, With No Obligation", desc: "Getting a quote from Prestige Moving costs nothing and commits you to nothing. We provide the quote; you decide if you want to proceed." },
                    { title: "Fast Turnaround", desc: "Most Ottawa moving quotes from Prestige are provided within 24 hours. Same-day quotes available by phone for moves with straightforward details." },
                  ].map(({ title, desc }, i) => (
                    <div key={i} className="flex gap-3 p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                      <div><div className="font-bold text-[#1A2332] text-sm mb-1">{title}</div><div className="text-gray-500 text-sm leading-relaxed">{desc}</div></div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#1A2332] rounded-2xl p-8 text-center">
                  <div className="flex justify-center gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-[#C5A572] fill-[#C5A572]" />)}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Ottawa Moving Quote</h3>
                  <p className="text-white/55 mb-6 text-sm">Takes 2 minutes. Written estimate in 24 hours. No obligation, no pressure.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">Get Quote Online <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                    <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
                  </div>
                </div>
              </section>

              <section id="faq" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">FAQ</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-8">FAQ — Ottawa Moving Quotes</h2>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button className="w-full flex items-center justify-between gap-4 p-5 text-left hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`button-faq-quotes-${i}`}>
                        <span className="font-semibold text-[#1A2332] text-sm">{q}</span>
                        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      {openFaq === i && <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{a}</div>}
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>

        <section className="py-16 bg-[#1A2332]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-0.5 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-[#C5A572] fill-[#C5A572]" />)}</div>
            <h2 className="text-3xl font-bold text-white mb-3">A Quote You Can Actually Trust</h2>
            <p className="text-white/55 mb-8 max-w-lg mx-auto">Written, itemized, and signed. 5.0 stars · 400+ reviews · No hidden fees — ever.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>
      </div>
      <SharedFooter />
    </>
  );
}
