import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, Lightbulb } from "lucide-react";

const TIPS = [
  { number: "01", title: "Book 2–4 Weeks in Advance", body: "Ottawa's moving market fills quickly, especially on weekends and end-of-month dates. For summer moves (June–August), book 4–6 weeks ahead. For spring/fall moves, 2–3 weeks. For winter moves, 1–2 weeks is usually sufficient." },
  { number: "02", title: "Get Your Quote in Writing", body: "Never begin a move with only a verbal estimate. A written quote from Prestige Moving is your guarantee — the number in the quote is the number on the invoice. Verbal estimates from other companies can (and often do) change on moving day." },
  { number: "03", title: "Declutter Before You Pack", body: "Moving is the best opportunity to eliminate what you don't need. Every item you don't move saves you packing time, truck space, and moving hours. Donate, sell, or dispose of anything you haven't used in 2+ years before booking your move." },
  { number: "04", title: "Label Boxes by Room and Priority", body: "Label every box with its destination room and a brief description of contents. Add 'OPEN FIRST' to boxes with essentials (kettle, toilet paper, phone chargers, a change of clothes). The move-in is much faster when the crew knows where every box goes." },
  { number: "05", title: "Pack an Overnight Bag", body: "Your overnight bag rides in your car, not the truck. Include: phone charger, toiletries, a change of clothes, medications, and a few snacks. You'll thank yourself when the last box is inside and you don't have to find the 'bathroom box' at 9pm." },
  { number: "06", title: "Photograph Electronics Before Disconnecting", body: "Before unplugging your TV, gaming system, or home theatre, photograph the cable configuration. This saves 20 minutes of frustration at the new home trying to remember which cable goes where." },
  { number: "07", title: "Measure Doorways for Large Furniture", body: "Measure your largest furniture pieces (sectionals, king beds, wardrobes) and the doorways at both your origin and destination. If there's a question, measure before moving day — not during it. Items that need disassembly should be noted in advance." },
  { number: "08", title: "Notify Key Services 2 Weeks Before", body: "Update your address with Canada Post (mail forwarding), your bank, CRA, Service Canada, OHIP, your employer, and any subscriptions. Set a reminder 2 weeks before the move date to work through this list systematically." },
  { number: "09", title: "Protect Your Floors", body: "Hardwood and tile floors are vulnerable to scratches from furniture feet and muddy boot traffic on moving day. Ask your movers about floor runners (Prestige Moving deploys them as standard). Having old towels at entry points helps catch dirt from boots." },
  { number: "10", title: "Do a Final Walkthrough", body: "Before the crew leaves your old address, walk every room, every closet, the garage, the basement storage, the attic, and outside. Check the fridge, the medicine cabinet, and every drawer. Moving day adrenaline makes it easy to leave things behind." },
];

export default function MovingTipsOttawa() {
  return (
    <>
      <Helmet>
        <title>Moving Tips Ottawa | 10 Expert Tips for Your Ottawa Move | Prestige Moving</title>
        <meta name="description" content="10 expert moving tips for Ottawa residents — from booking timelines to labelling systems, floor protection, and the final walkthrough. Prestige Moving has seen every moving mistake so you don't have to. Call (613) 600-4000." />
        <meta name="keywords" content="moving tips Ottawa, Ottawa moving tips, tips for moving Ottawa, how to move Ottawa, Ottawa moving advice, moving day tips Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-tips-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "10 Moving Tips Ottawa — Expert Advice", "publisher": { "@type": "Organization", "name": "Prestige Moving Ottawa" }, "url": "https://prestigemoving.ca/moving-tips-ottawa" })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Lightbulb className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Moving Expert Tips</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">10 Moving Tips for Ottawa<br className="hidden md:block" /> — From the Professionals</h1>
            <p className="text-white/70 text-lg mb-8">After thousands of Ottawa moves, we've seen what works and what doesn't. These 10 tips from Prestige Moving's crew will save you time, money, and stress on your upcoming Ottawa move.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Book Your Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {TIPS.map(({ number, title, body }) => (
              <div key={number} className="flex gap-6 items-start border-b border-gray-100 pb-8 last:border-0">
                <div className="text-4xl font-bold text-[#C5A572]/30 shrink-0 leading-none">{number}</div>
                <div>
                  <h2 className="text-lg font-bold text-[#1A2332] mb-2">{title}</h2>
                  <p className="text-gray-600 leading-relaxed text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
            <p className="text-gray-600 text-sm mb-4">For a complete room-by-room checklist, see our <Link href="/ottawa-moving-checklist" className="text-[#C5A572] hover:underline">Ottawa Moving Checklist</Link>. For cost planning, see our <Link href="/how-much-does-moving-cost-ottawa" className="text-[#C5A572] hover:underline">Ottawa Moving Cost Guide 2026</Link>.</p>
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Book Your Ottawa Move?</h2>
          <p className="text-white/65 mb-8">5.0★ rated · Written quote · All Ottawa neighbourhoods · WSIB certified</p>
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
