import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, Shield, Heart,
  Star, ChevronDown, Home, MapPin, Clock, Users, Package
} from "lucide-react";
import seniorHeroImg from "@assets/generated_images/senior_moving_hero.png";

const SERVICES = [
  { icon: Home, title: "Home to Retirement Community", desc: "Moving from a family home of 30+ years to a retirement community or seniors' residence in Ottawa. We take extra time, work at your pace, and help coordinate with the new residence's move-in team." },
  { icon: Package, title: "Downsizing Service", desc: "Downsizing from a larger home to a smaller apartment or suite requires hard decisions about what to keep. We can help facilitate this process — working gradually, room by room, over days if needed." },
  { icon: Users, title: "Family-Coordinated Moves", desc: "Adult children often coordinate senior moves on behalf of parents. We work with the whole family — communicating clearly with everyone involved and accommodating the senior's pace and preferences." },
  { icon: Shield, title: "Assisted Living Transitions", desc: "Moving into assisted living, memory care, or long-term care. We work within facility restrictions, coordinate with care staff, and help create a familiar, comfortable environment in the new space." },
  { icon: Heart, title: "Estate Downsizing Support", desc: "Moving after the loss of a spouse or family member. Our team approaches these moves with compassion and patience — no rushing, no pressure, and sensitivity to the emotional weight of every item." },
  { icon: Clock, title: "Flexible Pacing", desc: "Senior moves don't need to happen in one day. We offer staged moves — moving certain rooms or items over multiple days to reduce physical and emotional exhaustion." },
];

const COMMUNITIES = [
  "Sunrise Senior Living Ottawa", "The Westboro Retirement Community", "Amica Laurier Manor", "Hillel Lodge",
  "Carleton Lodge", "Chartwell Preston", "Stirling Park Retirement", "The Royale Ottawa",
  "Wynwood Place", "Colonel By Retirement Residence", "Rideauview Retirement", "Forest Hill Retirement"
];

const DOWNSIZING_GUIDE = [
  { step: "1–3 Months Before", title: "Plan & Decide", desc: "Start by measuring your new space and creating a floor plan. Decide what furniture fits. Begin thinking about items to keep, donate, or give to family members. Don't try to do this all at once — one room at a time is the right pace." },
  { step: "4–6 Weeks Before", title: "Sort & Donate", desc: "Ottawa has excellent donation options for senior moves. Habitat for Humanity ReStore accepts furniture. The Ottawa Mission accepts household goods. Family members may want specific pieces. This phase takes longer than most people expect." },
  { step: "2–3 Weeks Before", title: "Book Your Movers", desc: "Book Prestige Moving for a senior move date that gives you plenty of time — don't rush the moving day itself. Confirm elevator reservations at both buildings, and inform the new residence of your move date." },
  { step: "Moving Day", title: "Move at Your Pace", desc: "Our crew works at your speed. There's no rushing, no pressure. We take breaks when needed, listen to where things should go, and make sure your new space feels like home before we leave." },
  { step: "After the Move", title: "Settle & Support", desc: "We can return for small follow-up tasks — moving a piece of furniture, re-hanging artwork, rearranging items once you've settled in. Call us within 30 days of your senior move for any small adjustments." },
];

const FAQS = [
  { q: "How do you make senior moves less stressful?", a: "Senior moves are emotionally and physically different from standard moves. Our crew is trained for patience — we work at the senior's pace, not ours. We don't rush through rooms or pressure decisions. We communicate clearly and calmly throughout the move. We treat every item with the respect it deserves, because for many seniors, items represent decades of memories. We're also experienced with the logistics of retirement community move-ins, including elevator booking, moving hour restrictions, and coordination with residence staff." },
  { q: "Can you help with downsizing before the move?", a: "Yes. Our packing team can assist with pre-move downsizing — helping sort items room by room, packing what's coming to the new home, and setting aside what's going to family, donation, or disposal. We work at whatever pace is comfortable and can spread the process over multiple days. This is particularly helpful for seniors moving from a large family home to a smaller retirement suite." },
  { q: "What retirement communities in Ottawa do you work with?", a: "We have moved seniors into every major Ottawa retirement community including Amica Laurier Manor, Chartwell Preston, Sunrise Senior Living, The Westboro Retirement Community, Carleton Lodge, Hillel Lodge, Colonel By Retirement, The Royale Ottawa, and many more. We understand each building's specific move-in protocols, elevator restrictions, and move hour rules." },
  { q: "How much does senior moving in Ottawa cost?", a: "Senior moves are priced the same as standard residential moves — $155/hr (2 movers) for most senior apartment moves, $195/hr (3 movers) for larger homes. Senior moves often take longer because we work at a more careful, paced tempo — but the total cost is typically lower because senior homes have less furniture volume than family homes with children. We also offer senior discounts for 65+ clients — ask our coordinator at booking." },
  { q: "Can family members be involved in the move?", a: "Yes — and we encourage it. Adult children and other family members are welcome on moving day. We communicate with all family members involved in the move coordination and work with whoever is directing the process. If family is coordinating remotely, we provide updates throughout the day." },
  { q: "What if my parent needs things placed in a specific way?", a: "Familiar placement of furniture and belongings is extremely important for senior wellbeing — particularly for those with memory conditions. We take exact placement direction from the senior and family and position every item accordingly. We don't 'place it for now and move it later' — we place it right the first time, even if that means moving something twice to get it exactly right." },
];

export default function SeniorMoving() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <Helmet>
        <title>Senior Movers Ottawa | Retirement & Downsizing Moving Services | Prestige Moving</title>
        <meta name="description" content="Compassionate senior moving services in Ottawa. Moving to retirement communities, downsizing, estate moves. Patient crew, flexible pacing, full support. Call (613) 600-4000." />
        <meta name="keywords" content="senior movers Ottawa, senior moving Ottawa, retirement moving Ottawa, downsizing movers Ottawa, elderly moving Ottawa, compassionate movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/services/senior-moving" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
      </Helmet>
      <SharedNavigation />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={seniorHeroImg} alt="Compassionate professional movers helping seniors move in Ottawa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Compassionate Team", "Flexible Pacing", "Senior Discount", "All Ottawa Residences"].map(t => (
                <Badge key={t} className="bg-[#C5A572]/20 text-[#C5A572] border border-[#C5A572]/30 text-xs font-semibold">{t}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Senior Moving Ottawa —<br />
              <span className="text-[#C5A572]">Patient, Compassionate, Trusted</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Moving to a retirement community, downsizing from a family home, or transitioning to assisted living — our senior moving team moves at your pace, treats every item with respect, and works with your whole family to make the transition as smooth as possible.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold text-base px-6">Book Senior Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10 text-base px-6"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Senior Discount Available", "Family Coordination Welcome", "Flexible Multi-Day Moves", "All Ottawa Retirement Homes", "5.0★ 400+ Reviews"].map(t => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" />{t}</span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Senior Moving Services in Ottawa</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Every senior move is different. We adapt to the situation — whether it's a planned retirement community transition or an unexpected change in circumstances.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-[#C5A572]" />
                </div>
                <h3 className="font-bold text-[#1A2332] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downsizing Guide */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Senior Moving Timeline — A Step-by-Step Guide</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Planning a senior move in Ottawa. Click each stage for details on what to do and when.</p>
          </div>
          <div className="grid sm:grid-cols-5 gap-3 mb-6">
            {DOWNSIZING_GUIDE.map((s, i) => (
              <button key={i} onClick={() => setActiveStep(i)} className={`text-left rounded-xl border p-4 transition-all ${activeStep === i ? "border-[#C5A572] bg-[#C5A572]/5 shadow-md" : "border-gray-200 bg-white hover-elevate"}`}>
                <div className="text-[#C5A572] text-xs font-bold mb-1">{s.step}</div>
                <div className="font-bold text-[#1A2332] text-xs">{s.title}</div>
              </button>
            ))}
          </div>
          <div className="bg-[#1A2332] rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <div className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider mb-2">{DOWNSIZING_GUIDE[activeStep].step}</div>
            <h3 className="text-xl font-bold mb-3">{DOWNSIZING_GUIDE[activeStep].title}</h3>
            <p className="text-white/80 leading-relaxed">{DOWNSIZING_GUIDE[activeStep].desc}</p>
          </div>
        </div>
      </section>

      {/* Ottawa Retirement Communities */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Ottawa Retirement Communities We Work With</h2>
            <p className="text-gray-600 max-w-xl mx-auto">We know the move-in protocols, elevator requirements, and timing restrictions of Ottawa's major retirement residences.</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {COMMUNITIES.map(c => (
              <span key={c} className="bg-gray-50 border border-gray-200 text-gray-700 rounded-lg px-3 py-1.5 text-sm font-medium flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#C5A572]" />{c}
              </span>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">Don't see your community? We work with all Ottawa-area retirement residences. Call to confirm.</p>
        </div>
      </section>

      {/* Long-form content */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Senior Moving in Ottawa — What Families Need to Know</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Senior moves are among the most emotionally complex moves we do. Moving a parent or grandparent from a family home of 30, 40, or 50 years involves far more than logistics — it involves decades of memories, cherished objects with deep personal meaning, and the difficult recognition that a major chapter of life is ending. Our senior moving team approaches every such move with that understanding.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">The Downsizing Challenge</h3>
            <p>Most senior moves involve significant downsizing — moving from a 2,500 sq ft family home to a 700 sq ft retirement suite. The math alone is challenging. But the emotional challenge of deciding which items represent a lifetime of living and which must be let go is far harder. We don't rush this process. We recommend starting the decluttering process 2–3 months before the move date, working through one room at a time, and involving family members in decisions about heirloom pieces. Our packing team can assist with the physical aspects of this process — sorting, wrapping, and boxing items on a schedule that works for the senior and family.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Ottawa's Retirement Community Landscape</h3>
            <p>Ottawa has a large and diverse retirement community sector — from independent living communities in Westboro and the Glebe to memory care facilities in the west end, from Hillel Lodge in the Jewish community to military-affiliated retirement communities near the base. Each facility has its own move-in protocols, elevator booking requirements, parking constraints, and resident introductions. We've navigated all of these processes for clients across Ottawa and know what to expect at most major facilities before we arrive.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Familiar Setup — Why It Matters</h3>
            <p>For older adults and particularly for those with cognitive changes, familiar placement of furniture and belongings in the new space is critically important. The bed in the same orientation. The favourite chair near the window. Family photos arranged the same way. We take the time to set up the new space in a way that feels immediately familiar — not just functionally adequate. This small investment of time at the end of the move day makes an enormous difference to senior wellbeing in the first weeks after the transition.</p>
            <p>For our dedicated senior moving SEO pages with more information on specific senior services, see <Link href="/senior-movers-ottawa" className="text-[#C5A572] hover:underline">senior movers Ottawa</Link> and <Link href="/senior-moving-services-ottawa" className="text-[#C5A572] hover:underline">senior moving services Ottawa</Link>.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Ottawa Families on Our Senior Moving Service</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Margaret H., daughter", area: "Westboro → Chartwell", review: "Moving my mother from her home of 42 years was the hardest thing I've done. The Prestige team understood that immediately. They were patient, kind, and treated every item — including things that might seem insignificant — with complete respect. My mother felt heard throughout. I can't recommend them enough." },
              { name: "James R.", area: "Gloucester → Amica Laurier", review: "Moved my father into Amica Laurier Manor. The Prestige coordinator knew exactly what the building required for the move-in — elevator booking, timing, what the facility staff needed from us. On the day, the crew was wonderful with my father, even taking the time to arrange his photos exactly as he wanted them." },
              { name: "Sandra K., daughter", area: "Barrhaven estate move", review: "After losing my mother, we needed to clear and move her estate. The Prestige team handled this with such compassion — no rushing, complete respect for each item, clear communication about what was going where. They made an incredibly difficult process bearable." },
            ].map(t => (
              <div key={t.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />)}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.review}"</p>
                <div className="font-bold text-[#1A2332] text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs mt-0.5">{t.area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Senior Moving FAQ</h2>
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
          <Heart className="h-10 w-10 text-[#C5A572] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Book a Compassionate Senior Move in Ottawa</h2>
          <p className="text-white/65 mb-2 max-w-xl mx-auto">Patient team, flexible pacing, senior discount, family coordination. Let's make this transition as smooth as possible.</p>
          <p className="text-[#C5A572] font-semibold mb-8">(613) 600-4000 · Ottawa@prestigemoving.ca</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Book Senior Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
