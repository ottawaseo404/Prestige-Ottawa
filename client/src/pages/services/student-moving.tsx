import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, MapPin,
  Star, ChevronDown, GraduationCap, Clock, DollarSign, Package, Lock
} from "lucide-react";
import studentHeroImg from "@assets/generated_images/student_moving_hero.png";

const UNIVERSITIES = [
  { name: "University of Ottawa", area: "Sandy Hill / Lowertown", desc: "We know the narrow streets and elevator booking requirements of Sandy Hill. Frequent moves to Vanier, Hintonburg, and Centretown for upper-year students." },
  { name: "Carleton University", area: "Glebe / Ottawa South", desc: "Carleton's campus is in the south end. We move students to Glebe, Ottawa South, Barrhaven, and Nepean neighbourhoods throughout the year." },
  { name: "Algonquin College", area: "Woodroffe / College Square", desc: "Algonquin students move to Nepean, Bells Corners, and Kanata. We handle these suburban routes regularly and know the building access requirements." },
  { name: "Dominican University", area: "Westboro", desc: "Small campus, big neighbourhood. Westboro's older buildings have their own moving quirks — no elevator, narrow stairwells. We've done it many times." },
  { name: "Heritage College (Gatineau)", area: "Hull / Gatineau", desc: "We cross the river for Gatineau college moves. Quebec French coordination and Outaouais building rules are familiar territory for our team." },
];

const PACKAGES = [
  {
    name: "Dorm Package",
    price: "$155/hr (2 movers)",
    min: "2-hour minimum",
    best: "Dorm rooms & studio apartments",
    features: ["2 movers + truck", "2-hour minimum", "Dorm setup expertise", "Fast & efficient", "Weekday & weekend"],
    highlight: false,
  },
  {
    name: "Student Apartment Package",
    price: "$155/hr (2 movers)",
    min: "3-hour minimum",
    best: "1–2 bedroom student apartments",
    features: ["2 movers + truck", "3-hour minimum", "Elevator coordination", "Furniture assembly", "All Ottawa campuses"],
    highlight: true,
  },
  {
    name: "Off-Campus Home Package",
    price: "$195/hr (3 movers)",
    min: "3-hour minimum",
    best: "Shared houses & larger apartments",
    features: ["3 movers + truck", "3-hour minimum", "Shared home experience", "Multi-room organization", "Appliance moving"],
    highlight: false,
  },
];

const TIPS = [
  { title: "Book Early for September Moves", desc: "Ottawa's September 1st is the biggest moving day of the year — thousands of students move simultaneously. Book your student move 4–6 weeks in advance for guaranteed availability." },
  { title: "Know Your Building's Rules", desc: "Most Ottawa apartment buildings require elevator reservations and restrict moving to certain hours (often 8am–8pm). We handle this coordination for you — just give us the building management contact." },
  { title: "Declutter Before the Move", desc: "Student moves are the perfect opportunity to donate what you're no longer using. Fewer items = faster move = lower final cost. Ottawa's Value Village and Habitat for Humanity accept furniture donations." },
  { title: "Label Boxes by Room", desc: "Even for a small student apartment, labelling boxes by room makes unloading dramatically faster. Our crew places boxes in the right room, which saves time at the end of a long moving day." },
  { title: "Parking Matters Downtown", desc: "Downtown Ottawa and Sandy Hill have strict parking regulations. We arrange temporary moving truck permits with the City of Ottawa where required — this is included in your move." },
  { title: "Consider a Weekday Move", desc: "Weekend student moves are the most expensive because demand is highest. If you have flexibility, a Tuesday or Wednesday move is typically 20–30% faster due to lower traffic and building elevator availability." },
];

const FAQS = [
  { q: "How much does student moving in Ottawa cost?", a: "Student moves in Ottawa start at $155/hr with a 2-hour minimum (dorm moves) or 3-hour minimum (apartments). A typical 1-bedroom student apartment move in Ottawa runs 3–4 hours, totalling $465–$620. We offer a 10% student discount — just show your valid student ID at booking. Moving a dorm room or bachelor apartment usually takes 2–3 hours." },
  { q: "Do you offer student moving discounts?", a: "Yes. We offer a 10% student discount on all moves booked with a valid university or college student card (uOttawa, Carleton, Algonquin, or any Canadian institution). Mention the discount when booking — it's applied directly to your invoice." },
  { q: "How far in advance should I book a September student move?", a: "For moves around September 1st (Ottawa's peak student moving day), book 4–6 weeks in advance. Availability fills up quickly in the last two weeks of August and first week of September. For May–August moves and January semester moves, 2–3 weeks in advance is typically sufficient." },
  { q: "Can you move a dorm room in a short time?", a: "Yes. Most dorm room moves in Ottawa take 2–3 hours with our 2-mover team. Dorms typically have less furniture — a bed, desk, dresser, and boxes. We've become very efficient at navigating university residence hallways, elevators, and loading areas." },
  { q: "Do you move in the middle of lease terms?", a: "Yes. We move students year-round — not just September and May. Mid-year moves between semesters, moving back home for the summer, or moving mid-lease for any reason. Call (613) 600-4000 for availability." },
  { q: "What if my new building won't let me move until 9am?", a: "Building move-in restrictions are very common in Ottawa — most buildings require elevator bookings and have specific move hours. We work around these restrictions and coordinate with building management on your behalf. Just provide the building management contact when you book." },
];

export default function StudentMoving() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeUni, setActiveUni] = useState(0);

  return (
    <>
      <Helmet>
        <title>Student Movers Ottawa | Affordable University & College Moving | Prestige Moving</title>
        <meta name="description" content="Affordable student moving in Ottawa. Moving from dorms, apartments, and shared houses near uOttawa, Carleton, Algonquin. 10% student discount. Starting at $155/hr. Call (613) 600-4000." />
        <meta name="keywords" content="student movers Ottawa, university moving Ottawa, college moving Ottawa, uOttawa movers, Carleton movers, Algonquin movers, affordable movers Ottawa students" />
        <link rel="canonical" href="https://prestigemoving.ca/services/student-moving" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
      </Helmet>
      <SharedNavigation />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={studentHeroImg} alt="Students moving into university apartment in Ottawa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {["10% Student Discount", "Call for Pricing", "2-Hr Minimum Dorm Moves", "All Ottawa Campuses"].map(t => (
                t === "Call for Pricing"
                  ? <a key={t} href="tel:6136004000"><Badge className="bg-[#C5A572]/20 text-[#C5A572] border border-[#C5A572]/30 text-xs font-semibold">{t}</Badge></a>
                  : <Badge key={t} className="bg-[#C5A572]/20 text-[#C5A572] border border-[#C5A572]/30 text-xs font-semibold">{t}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Student Movers Ottawa —<br />
              <span className="text-[#C5A572]">Affordable, Fast, Stress-Free</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Dorm moves, apartment moves, shared house moves — near uOttawa, Carleton, Algonquin, and every Ottawa campus. 10% student discount, low hourly rate, and a crew that knows how to navigate Ottawa building elevators, narrow hallways, and September chaos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold text-base px-6">Book Student Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10 text-base px-6"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["10% Student Discount", "All Ottawa Campuses", "September Move Specialists", "2-Hr Minimum for Dorms", "Elevator Booking Included"].map(t => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" />{t}</span>
          ))}
        </div>
      </div>

      {/* Pricing Packages */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Student Moving Packages</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Transparent hourly pricing. 10% student discount applied to all packages with valid student ID. No hidden fees.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map(pkg => (
              <div key={pkg.name} className={`rounded-2xl border p-7 ${pkg.highlight ? "bg-[#1A2332] border-[#1A2332] text-white shadow-xl" : "bg-white border-gray-200"}`}>
                {pkg.highlight && <div className="text-center mb-4"><Badge className="bg-[#C5A572]/20 text-[#C5A572] border-[#C5A572]/30 text-xs">Most Popular</Badge></div>}
                <h3 className={`text-lg font-black mb-1 ${pkg.highlight ? "text-white" : "text-[#1A2332]"}`}>{pkg.name}</h3>
                <a href="tel:6136004000" className="relative inline-flex items-center gap-1.5 bg-gray-100 rounded-lg px-3 py-1.5 mb-1 overflow-hidden cursor-pointer">
                  <span className="text-lg font-black text-[#C5A572] blur-sm select-none pointer-events-none">$000/hr</span>
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-[1px]">
                    <Lock className="h-3.5 w-3.5 text-[#C5A572] mr-1.5" />
                    <span className="text-xs font-bold text-[#1A2332]">Call for Rate</span>
                  </div>
                </a>
                <div className={`text-xs mb-1 ${pkg.highlight ? "text-white/60" : "text-gray-500"}`}>{pkg.min}</div>
                <div className={`text-xs font-medium mb-5 ${pkg.highlight ? "text-white/70" : "text-gray-600"}`}>{pkg.best}</div>
                <div className="space-y-2 mb-6">
                  {pkg.features.map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A572] shrink-0" />
                      <span className={`text-sm ${pkg.highlight ? "text-white/80" : "text-gray-700"}`}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/book" className="block">
                  <Button className={`w-full font-bold ${pkg.highlight ? "bg-[#C5A572] text-[#1A2332]" : "bg-[#1A2332] text-white"}`}>Book This <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">10% student discount applied at booking with valid student ID from any Canadian post-secondary institution.</p>
        </div>
      </section>

      {/* Campus Guide */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Ottawa Campus Moving Guide</h2>
            <p className="text-gray-600 max-w-xl mx-auto">We've moved thousands of students near every Ottawa campus. Each campus area has its own quirks — we know them all.</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {UNIVERSITIES.map((u, i) => (
              <button key={i} onClick={() => setActiveUni(i)} className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${activeUni === i ? "bg-[#1A2332] text-white border-[#1A2332]" : "bg-white text-gray-700 border-gray-200 hover-elevate"}`}>{u.name}</button>
            ))}
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#C5A572]/15 rounded-xl flex items-center justify-center shrink-0">
                <GraduationCap className="h-6 w-6 text-[#C5A572]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1A2332] mb-1">{UNIVERSITIES[activeUni].name}</h3>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-3"><MapPin className="h-3.5 w-3.5 text-[#C5A572]" />{UNIVERSITIES[activeUni].area}</div>
                <p className="text-gray-700 leading-relaxed">{UNIVERSITIES[activeUni].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Tips for a Smooth Ottawa Student Move</h2>
            <p className="text-gray-600 max-w-xl mx-auto">From booking to moving day — what Ottawa students need to know for a stress-free move.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TIPS.map(tip => (
              <div key={tip.title} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <h3 className="font-bold text-[#1A2332] text-sm mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form content */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Student Moving in Ottawa — What You Need to Know</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Ottawa is a university city. Between the University of Ottawa, Carleton University, Algonquin College, Dominican University, and Heritage College across the river in Gatineau, tens of thousands of students call Ottawa home for the school year. Every September 1st, thousands of those students move simultaneously — making Ottawa's student moving season one of the most intense in Canada.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">September 1st in Ottawa — What to Expect</h3>
            <p>September 1st is not just a busy day in Ottawa — it's chaos. Most student leases run from September 1st to August 31st, which means the majority of Ottawa's student rental market turns over on a single day. Moving trucks are everywhere. Elevators are booked solid in Sandy Hill and downtown high-rises. Parking is impossible on Laurier and King Edward. If you're moving on or around September 1st and haven't booked 4–6 weeks in advance, you risk not finding available movers at all.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Ottawa's Student Neighbourhoods</h3>
            <p>The most popular student neighbourhoods in Ottawa each have their own character and moving challenges. Sandy Hill (adjacent to uOttawa) is full of Victorian walk-ups and converted houses with narrow stairwells — no elevator, tight turns, old wooden floors that need protection. The Glebe and Ottawa South are popular for Carleton students, with older homes and street parking challenges. Lower Town and Vanier have more affordable rents and are increasingly popular with students from both campuses. Barrhaven and Nepean are common for Algonquin students who don't mind the commute.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">How to Save Money on an Ottawa Student Move</h3>
            <p>Student moves don't need to break the bank. Ways to reduce your moving cost in Ottawa: move on a weekday instead of weekend (buildings are less busy, movers are faster), declutter before moving day (fewer items = fewer hours = lower cost), have everything packed before the movers arrive (you only pay for moving, not packing time), and choose the right crew size for your home (a dorm room doesn't need 3 movers). Our 10% student discount is automatically applied when you book with a valid student ID.</p>
            <p>Also moving long-distance from Ottawa at the end of your degree? See our <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">long distance moving</Link> service. Need packing help? See our <Link href="/services/packing-services" className="text-[#C5A572] hover:underline">packing services</Link> page.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Ottawa Students Recommend Prestige Moving</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Priya S.", school: "uOttawa Student", review: "Moved from a Sandy Hill walk-up to a Centretown apartment. The crew handled the narrow stairs and no-elevator situation perfectly. Faster than I expected and nothing was damaged. Used the student discount — saved $40 on my move. Will book again next year." },
              { name: "James M.", school: "Carleton Student", review: "September 1st move in Sandy Hill. I booked 5 weeks early and it's a good thing I did. Professional crew, showed up on time despite the chaos around them, and had me settled in my new Glebe apartment by early afternoon. Worth every dollar." },
              { name: "Emma L.", school: "Algonquin College Student", review: "Moving from Nepean to a new place near the College Square area. The team was fast, friendly, and the pricing was exactly what was quoted. No hidden fees, no nonsense. Used the student discount. Will recommend to every student I know in Ottawa." },
            ].map(t => (
              <div key={t.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />)}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.review}"</p>
                <div className="font-bold text-[#1A2332] text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs mt-0.5">{t.school}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Student Moving FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left bg-gray-50 hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 pt-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-white">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <GraduationCap className="h-10 w-10 text-[#C5A572] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Book Your Ottawa Student Move</h2>
          <p className="text-white/65 mb-2 max-w-xl mx-auto">10% discount with student ID. All Ottawa campuses. September moves book up fast — reserve your date early.</p>
          <p className="text-[#C5A572] font-semibold mb-8">(613) 600-4000 · Ottawa@prestigemoving.ca</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Book Student Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
