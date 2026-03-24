import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, Shield, Clock,
  Star, ChevronDown, Award, MapPin, FileText, Truck
} from "lucide-react";
import militaryHeroImg from "@assets/generated_images/military_moving_hero.png";

const CAF_BASES = [
  { base: "CFB Ottawa (National Defence HQ)", area: "Downtown Ottawa / Carling Campus", desc: "National Defence headquarters and the Carling Campus — Canada's largest federal employer. We move DND staff and CAF members to and from all Ottawa-area neighbourhoods." },
  { base: "CFB Petawawa", area: "Petawawa, ON (2 hrs from Ottawa)", desc: "The largest military base in Ontario. PCS moves from Petawawa to Ottawa are among our most frequent military moves. We know the Petawawa PMQ areas and the Ottawa neighbourhoods that CAF families prefer." },
  { base: "CFB Kingston", area: "Kingston, ON (2 hrs from Ottawa)", desc: "RMC and 1 CMBG Kingston. Moves from Kingston to Ottawa or Ottawa to Kingston are a common route for officer postings and government employment transitions." },
  { base: "Canadian Forces Housing", area: "All Ottawa PMQ Areas", desc: "Moving in or out of CFB Ottawa PMQ housing — Garrison Petawawa housing, or any DND-administered housing. We understand the condition requirements for PMQ departures." },
];

const PCS_PROCESS = [
  { num: "01", title: "Posting Message & Timeline Planning", desc: "When your posting message arrives, timing is everything. We work around your release date, container availability, and IRP authorization. We're familiar with CAF posting cycles and can often accommodate short-notice postings that civilian movers struggle with." },
  { num: "02", title: "IRP Documentation Support", desc: "We work within the CAF Integrated Relocation Program (IRP) framework. Our invoices and documentation are formatted to meet IRP submission requirements. We can coordinate with your relocation coordinator directly." },
  { num: "03", title: "PMQ Departure Condition Standards", desc: "DND/CAF PMQ departure inspections have strict cleanliness and condition requirements. We're familiar with what's expected and take care to move furniture without wall damage, floor damage, or damage to fixtures during departure loading." },
  { num: "04", title: "Short-Notice Availability", desc: "Military postings sometimes give 30 days or less notice. We maintain emergency availability for CAF members receiving short-notice postings. Call (613) 600-4000 immediately when your posting message arrives — don't wait for commercial availability to fill up." },
  { num: "05", title: "Long-Distance Military Moves", desc: "PCS moves from Ottawa to any base in Canada — Petawawa, Kingston, Valcartier, Gagetown, Shilo, Edmonton, Borden, Halifax, and beyond. Our long-distance military moves include binding quotes, GPS tracking, and direct fleet transport." },
];

const INCLUDED = [
  { icon: FileText, title: "IRP-Compatible Documentation", desc: "Invoices and receipts formatted for CAF IRP submission. We understand what CAF Finance requires for reimbursement processing." },
  { icon: Shield, title: "$2M Liability Insurance", desc: "Full commercial liability coverage for all military moves. Insurance certificates provided for any DND or base requirement." },
  { icon: Award, title: "Security-Aware Crew", desc: "Our crew understands the basic security protocols of military installations and conducts themselves accordingly. We carry ID and work within all base access requirements." },
  { icon: Clock, title: "Posting Cycle Familiar", desc: "CAF posting season (spring and summer) is our busiest period. We plan capacity around military posting cycles to ensure availability for CAF members." },
  { icon: Truck, title: "Dedicated Fleet", desc: "Own-fleet long-distance moves for military PCS. Your belongings don't transfer to third-party carriers or brokers — direct point-to-point service." },
  { icon: CheckCircle2, title: "PMQ Standards", desc: "Familiar with DND PMQ departure and arrival standards. We take care during loading to protect walls and floors — no damage that could affect your departure inspection." },
];

const FAQS = [
  { q: "Do you work within the CAF Integrated Relocation Program (IRP)?", a: "Yes. We are familiar with the CAF IRP framework and provide documentation formatted to meet IRP submission requirements. We work with your IRP relocation coordinator and ensure all invoices include the required information for reimbursement. If your entitlements include civilian moving assistance, we ensure our pricing and services align with your covered amount." },
  { q: "How much notice do I need to give for a military PCS move?", a: "For standard postings (4–6 weeks notice), we recommend booking as soon as your posting message is received. Spring and summer are peak military posting season — May through August — and availability fills quickly. For short-notice postings (2–4 weeks or less), call (613) 600-4000 immediately. We maintain emergency availability for CAF members and will do our best to accommodate your timeline." },
  { q: "Can you move a full military family home on a PCS posting?", a: "Yes. Full family home moves are our most common military move — 3 and 4 bedroom PMQ homes with furniture, appliances, children's items, and all household goods. Our Deluxe (3 movers) or Diamond (4+ movers) packages are appropriate for military family home moves depending on the size of your household." },
  { q: "Do you move from Ottawa to all Canadian military bases?", a: "Yes. We move from Ottawa to all major Canadian bases — CFB Petawawa, CFB Kingston, CFB Valcartier (Quebec City), CFB Gagetown (NB), CFB Shilo (MB), CFB Wainwright (AB), CFB Edmonton, CFB Borden (ON), CFB Cold Lake (AB), CFB Halifax, and all others. Military long-distance moves use our own fleet with binding quotes and GPS tracking." },
  { q: "Are you familiar with CFB Petawawa moves?", a: "Very familiar. Ottawa–Petawawa is our most common military route. We know the Petawawa PMQ areas, the base access roads, and the specific requirements for moves into and out of garrison housing. Many of our crew members' families are connected to the Petawawa community." },
  { q: "What happens if my posting gets cancelled or delayed?", a: "Military postings do get cancelled or delayed — we understand this reality. We have a cancellation policy specifically designed for CAF members: full refund for cancellations due to posting cancellation with written confirmation from your unit. Date changes due to posting delays are accommodated at no charge (subject to availability). Call us as soon as you know about any change." },
  { q: "Can you move weapons and firearms for military members?", a: "We can move non-restricted and restricted firearms in locked, approved storage containers as part of a household goods move, following all RCMP and CAF regulations. Prohibited firearms, ammunition, and military equipment (weapons, explosives, specialized kit) must be transported through CAF/DND channels — not civilian movers. Speak with your unit for the correct procedure for military equipment." },
];

export default function MilitaryMoving() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeBase, setActiveBase] = useState(0);

  return (
    <>
      <Helmet>
        <title>Military Movers Ottawa | CAF PCS Moving | CFB Petawawa | Prestige Moving</title>
        <meta name="description" content="Military moving specialists in Ottawa. CAF PCS moves, IRP-compatible documentation, CFB Petawawa routes, short-notice availability. Trusted by Canadian Armed Forces families. Call (613) 600-4000." />
        <meta name="keywords" content="military movers Ottawa, CAF moving Ottawa, PCS movers Ottawa, CFB Petawawa movers, military relocation Ottawa, DND movers Ottawa, IRP movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/services/military-moving" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
      </Helmet>
      <SharedNavigation />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={militaryHeroImg} alt="Professional movers serving Canadian military family in Ottawa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {["IRP Compatible", "Short-Notice Available", "CFB Petawawa Route", "CAF Family Trusted"].map(t => (
                <Badge key={t} className="bg-[#C5A572]/20 text-[#C5A572] border border-[#C5A572]/30 text-xs font-semibold">{t}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Military Movers Ottawa —<br />
              <span className="text-[#C5A572]">Serving Canada's Armed Forces Families</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              CAF PCS moves, posting-season availability, IRP-compatible documentation, and the short-notice flexibility that military families need. Ottawa to Petawawa, Kingston, Valcartier, and every Canadian base. Got your posting message? Call us today.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
              {["IRP Documentation Ready", "Short-Notice Availability", "All Canadian Bases", "5.0★ Reviews"].map(t => (
                <div key={t} className="flex items-center gap-1.5 text-white/75 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" /><span>{t}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold text-base px-6">Book Military Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10 text-base px-6"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["IRP-Compatible Documentation", "Short-Notice Accommodation", "CAF Posting Season Ready", "Own Fleet — No Brokers", "WSIB & $2M Insured"].map(t => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" />{t}</span>
          ))}
        </div>
      </div>

      {/* Base Guide */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">CAF Bases & Ottawa Military Moving Routes</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Ottawa is the hub of Canada's military administrative network. We service all bases from Ottawa — click to see what we know about your route.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {CAF_BASES.map((b, i) => (
              <button key={i} onClick={() => setActiveBase(i)} className={`text-left rounded-xl border p-4 transition-all ${activeBase === i ? "border-[#C5A572] bg-[#C5A572]/5 shadow-md" : "border-gray-200 bg-gray-50 hover-elevate"}`}>
                <div className="font-bold text-[#1A2332] text-xs mb-1">{b.base}</div>
                <div className="text-gray-500 text-xs flex items-center gap-1"><MapPin className="h-3 w-3 text-[#C5A572]" />{b.area}</div>
              </button>
            ))}
          </div>
          <div className="bg-[#1A2332] rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <div className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider mb-2">Selected Base</div>
            <h3 className="text-xl font-bold mb-2">{CAF_BASES[activeBase].base}</h3>
            <div className="flex items-center gap-1.5 text-white/60 text-sm mb-4"><MapPin className="h-3.5 w-3.5" />{CAF_BASES[activeBase].area}</div>
            <p className="text-white/80 leading-relaxed">{CAF_BASES[activeBase].desc}</p>
          </div>
        </div>
      </section>

      {/* PCS Process */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">How Military PCS Moving Works with Prestige</h2>
            <p className="text-gray-600">From posting message to move completion — what CAF members need to know at every stage.</p>
          </div>
          <div className="space-y-4">
            {PCS_PROCESS.map((step, i) => (
              <div key={i} className="flex gap-5 items-start bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-[#1A2332] rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-[#C5A572] font-black text-sm">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2332] text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">What Military Families Get with Every Move</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INCLUDED.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-[#C5A572]" />
                </div>
                <h3 className="font-bold text-[#1A2332] text-sm mb-1">{title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form content */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Military Moving in Ottawa — What CAF Families Need</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Ottawa is Canada's military capital in a way that goes beyond the Parliament Buildings and DND headquarters on Laurier Avenue West. The Ottawa-Gatineau region is home to tens of thousands of CAF members, DND public servants, and their families — all subject to the posting cycle that moves Canadian military families every 1–4 years, often with 30–90 days notice. This creates moving challenges that civilian Ottawa families never face: short timelines, IRP documentation requirements, base access coordination, and PMQ condition standards.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">The CAF Integrated Relocation Program (IRP)</h3>
            <p>The CAF IRP provides CAF members with financial assistance for postings — including a civilian household goods moving allowance. This entitlement covers the cost of moving household goods by a civilian mover, subject to your rank and household size limits. Prestige Moving's invoices are formatted to meet IRP submission requirements, and we can coordinate directly with your IRP relocation coordinator. We do not provide IRP advice — speak with your unit's OR or the BGRS coordinator for guidance on your specific entitlements.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Ottawa's Spring Posting Season</h3>
            <p>The CAF spring posting season runs from March through July, with the majority of moves happening June–August. This creates a significant surge in demand for military-experienced movers in Ottawa during exactly the same period that civilian residential demand peaks. Book as early as possible after receiving your posting message — ideally within 48 hours of receiving the message. For short-notice postings (30 days or less), call immediately — we maintain emergency capacity for CAF members in exactly this situation.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">CFB Petawawa — Ottawa's Most Common Military Route</h3>
            <p>CFB Petawawa is 2 hours west of Ottawa and is home to 2 CMBG (2nd Canadian Mechanized Brigade Group), the largest field formation in the Canadian Army. Ottawa–Petawawa is our most frequently moved military route, and we know it well — the PMQ areas on both ends, the base access requirements at Petawawa, and the Ottawa neighbourhoods popular with Petawawa families (Kanata, Stittsville, the west end). If you're posting to or from Petawawa, you're calling a team that knows your route.</p>
            <p>For all long distance military moves from Ottawa, see our <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">long distance moving</Link> page. For residential Ottawa moves, see <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving</Link>.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">CAF Families on Prestige Moving</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "MWO James K., CAF", move: "Ottawa → Petawawa", review: "Got a 6-week posting notice and Prestige was available. They knew exactly what IRP documentation I needed — didn't have to explain anything. The move was seamless. The PMQ at departure was spotless when we left. Would book again on our next posting." },
              { name: "Capt. Renée L., CAF", move: "Valcartier → Ottawa", review: "Third military move in 8 years. First one with Prestige and it was by far the best. They coordinated with my IRP coordinator directly, their documentation was perfect for submission, and nothing was damaged in the cross-province move. I'm recommending them to my entire unit." },
              { name: "Cpl. D. Morrison & Family", move: "Borden → Ottawa", review: "Moving a family of 5 on short notice is stressful enough without worrying about your movers. Prestige kept us calm — clear communication, professional crew, everything delivered on time and intact. The kids' rooms were set up first so they could settle in. They thought of everything." },
            ].map(t => (
              <div key={t.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />)}</div>
                <Badge className="bg-[#C5A572]/10 text-[#C5A572] border-0 text-xs mb-3">{t.move}</Badge>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.review}"</p>
                <div className="font-bold text-[#1A2332] text-sm">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Military Moving FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 pt-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Award className="h-10 w-10 text-[#C5A572] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Got Your Posting Message? Call Now</h2>
          <p className="text-white/65 mb-2 max-w-xl mx-auto">IRP-compatible documentation. Short-notice availability. All Canadian bases. Trusted by Ottawa's CAF community.</p>
          <p className="text-[#C5A572] font-semibold mb-8">(613) 600-4000 · Ottawa@prestigemoving.ca</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Book Military Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
