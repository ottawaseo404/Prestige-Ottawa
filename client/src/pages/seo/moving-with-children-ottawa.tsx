import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, Users, Heart } from "lucide-react";

const TIPS = [
  { age: "Toddlers & Young Children (0–5)", tips: ["Keep their daily routine — nap time, meals — the same on moving day", "Have a trusted sitter or family member care for them during the actual move", "Unpack their room first so they have a familiar space immediately"] },
  { age: "School-Age Children (6–12)", tips: ["Involve them in packing their own bedroom — gives them a sense of control", "Let them carry their own 'special box' of favourite items in the car", "Visit the new school or neighbourhood before moving day if possible"] },
  { age: "Teenagers (13+)", tips: ["Acknowledge that this is hard — don't minimize the social disruption", "Let them have input on their new room layout and design", "Help them stay connected to Ottawa friends digitally while adjusting"] },
];

const FAQS = [
  { q: "Should children be present during an Ottawa move?", a: "Young children (under 8) are generally better off away from the home during the actual move — at a grandparent's, friend's, or daycare. The open doors, heavy items being carried, and unfamiliar crew are stressful and potentially unsafe for small children. Older children and teens can be present and involved if they want to be." },
  { q: "How do I help my child adjust to a new Ottawa school?", a: "Ottawa's school boards (Ottawa-Carleton DSB for English public, CECCE for French, Ottawa Catholic for English Catholic) all have transfer processes for mid-year and September registrations. Most schools have a 'new student' orientation process. Getting involved in one extra-curricular from the start helps children build connections quickly." },
  { q: "What should I pack in my child's 'first night' bag?", a: "Include: their favourite stuffed animal or comfort item, pajamas and next-day clothes, toiletries, any medications, a favourite book, and a snack they love. Having this bag in your personal vehicle means they have comfort items available immediately — before the boxes are unpacked." },
  { q: "Is there anything special to arrange for school when moving mid-year in Ottawa?", a: "Contact your child's current school to arrange records transfer before moving day. Then enroll in the new Ottawa school with the records forwarded. Ottawa schools are experienced with mid-year transfers — the process is typically straightforward." },
];

export default function MovingWithChildrenOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving With Children Ottawa | Family Moving Guide | Prestige Moving</title>
        <meta name="description" content="Complete guide to moving with kids in Ottawa. Age-specific tips for toddlers through teens, what to do on moving day, and how to help children adjust. Prestige Moving — (613) 600-4000." />
        <meta name="keywords" content="moving with children Ottawa, moving with kids Ottawa, family movers Ottawa, Ottawa family moving guide, moving tips kids Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-with-children-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Moving With Children Ottawa: Family Guide", "publisher": { "@type": "Organization", "name": "Prestige Moving Ottawa" }, "url": "https://prestigemoving.ca/moving-with-children-ottawa" })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Users className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Family Moving Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving With Children Ottawa —<br className="hidden md:block" /> Family Moving Guide 2026</h1>
            <p className="text-white/70 text-lg mb-8">Moving is one of life's most stressful events for children. With the right preparation, it can also be an exciting adventure. This guide covers what to do at every age — from toddlers to teenagers — to make your Ottawa family move as smooth as possible.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Book Your Family Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-10 text-center">Age-Specific Tips for Moving With Kids in Ottawa</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TIPS.map(({ age, tips }) => (
              <div key={age} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#1A2332] mb-4 text-sm">{age}</h3>
                <div className="space-y-3">
                  {tips.map(tip => (
                    <div key={tip} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Family Moving in Ottawa: What Parents Need to Know</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Ottawa is one of Canada's most family-friendly cities, and families move within and into the city in large numbers — driven by the federal public service, Kanata's tech sector, and the steady growth of family-oriented communities like <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, <Link href="/movers-in-riverside-south" className="text-[#C5A572] hover:underline">Riverside South</Link>, <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, and <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link>. Family moves are typically more complex than single-adult moves — more rooms, more items, more coordination — and the added dimension of managing children's needs on moving day requires planning.</p>
            <p>The single most effective thing parents can do is arrange childcare for moving day itself. Young children require supervision at all times when doors are open and movers are active. That supervision takes the parent away from directing the move, coordinating logistics, and doing all the other things that need attention on moving day. A trusted sitter, a grandparent, or a neighbour who can take the kids for the day is an investment that makes the entire move more efficient and less stressful for everyone.</p>
            <p>Unpack the children's rooms first at the new home. Having a familiar space — their bed, their toys, their familiar smells — is the single most powerful thing you can do to reduce a child's anxiety about the move. They can retreat to that room while the rest of the house is still in boxes.</p>
            <p>Related: <Link href="/moving-with-pets-ottawa" className="text-[#C5A572] hover:underline">Moving With Pets Ottawa</Link> · <Link href="/ottawa-moving-checklist" className="text-[#C5A572] hover:underline">Ottawa Moving Checklist</Link> · <Link href="/ottawa-neighbourhoods-guide" className="text-[#C5A572] hover:underline">Ottawa Neighbourhoods Guide</Link></p>
          </div>
        </div>
      </section>
      <section className="bg-white pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Moving With Kids Ottawa — FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Book Ottawa's Top Family Movers</h2>
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
