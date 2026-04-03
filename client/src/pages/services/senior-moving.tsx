import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, Shield, Heart,
  Star, ChevronDown, Home, MapPin, Clock, Users, Package,
  Truck, ThumbsUp, AlertCircle, HelpCircle, Calendar,
  DollarSign, Key, BookOpen
} from "lucide-react";
import seniorHeroImg from "@assets/generated_images/senior_moving_hero.png";

/* ─────────────────────── DATA ─────────────────────── */

const TOC = [
  { id: "what-we-do", title: "What We Do for Seniors" },
  { id: "services", title: "Our Senior Moving Services" },
  { id: "moving-day", title: "What Happens on Moving Day" },
  { id: "downsizing", title: "Downsizing Guide — Room by Room" },
  { id: "timeline", title: "Your Moving Timeline" },
  { id: "costs", title: "How Much Does It Cost?" },
  { id: "communities", title: "Ottawa Retirement Communities" },
  { id: "for-families", title: "Information for Family Members" },
  { id: "what-included", title: "What Is Included" },
  { id: "faq", title: "Common Questions" },
  { id: "related", title: "More Resources" },
];

const SERVICES = [
  {
    icon: Home,
    title: "Moving From Your Home to a Retirement Residence",
    desc: "Leaving a family home of 20, 30, or 40 years is a big moment. Our senior crew moves at your pace, handles every item with care, and coordinates with your new residence's move-in team so everything goes smoothly on the day.",
  },
  {
    icon: Package,
    title: "Full Packing and Unpacking Service",
    desc: "You do not need to pack a single box. Our team wraps, packs, and labels every item in your home — and unpacks and organises everything at your new address so it feels like home right away.",
  },
  {
    icon: Users,
    title: "Downsizing Help and Decluttering Support",
    desc: "Moving from a larger home to a smaller suite means deciding what to take. We work room by room, at whatever pace feels comfortable, to help you sort items to keep, donate, pass to family, or discard.",
  },
  {
    icon: Shield,
    title: "Assisted Living and Memory Care Transitions",
    desc: "Moving a loved one into assisted living or memory care is sensitive work. We handle all the logistics, follow the facility's protocols, and set up the new space to feel as familiar and comforting as possible.",
  },
  {
    icon: Heart,
    title: "Estate and Bereavement Moves",
    desc: "Moving after the loss of a spouse or family member requires special sensitivity. Our team approaches these moves quietly and compassionately — no rushing, full respect for every item, and clear communication with the family.",
  },
  {
    icon: Clock,
    title: "Staged and Multi-Day Moves",
    desc: "You do not have to do everything in one day. We offer staged moves — completing one or two rooms per visit over several days — to reduce physical and emotional exhaustion for seniors and their families.",
  },
  {
    icon: Truck,
    title: "Furniture Disassembly and Reassembly",
    desc: "Beds, shelving units, wardrobes, and other furniture are taken apart carefully for transport and put back together exactly as they were at your new home. You do not need to touch a single tool.",
  },
  {
    icon: MapPin,
    title: "Moving Into or Out of Ottawa",
    desc: "Moving to another city to be closer to family? We handle long-distance senior moves too — fully coordinated from start to finish so you and your family are never left wondering what happens next.",
  },
];

const TIMELINE = [
  {
    when: "2 to 3 Months Before",
    title: "Start Planning — One Room at a Time",
    body: "This is the time to visit your new home, measure the rooms, and make a simple sketch of where your main pieces of furniture will go. Begin going through one room at a time — do not try to sort the whole house at once. Thirty to forty-five minutes per day is plenty. Start with rooms you use the least: the spare bedroom, the storage room, the garage.",
  },
  {
    when: "6 to 8 Weeks Before",
    title: "Sort, Donate, and Pass Items to Family",
    body: "Now is the time to make final decisions about larger pieces — furniture, appliances, collections. Ottawa charities like the Salvation Army, Ottawa Mission, and Habitat for Humanity ReStore accept furniture donations and many offer free pickup. Family members may want heirloom pieces — now is the time to have those conversations before the move creates pressure.",
  },
  {
    when: "3 to 4 Weeks Before",
    title: "Book Your Movers and Notify Your Residence",
    body: "Call Prestige Moving at (613) 600-4000 to book your date. Ask us about the senior discount. At the same time, contact your new retirement residence or building manager to book the freight elevator and confirm move-in hours and any parking requirements for the moving truck. We are happy to make these calls on your behalf.",
  },
  {
    when: "1 Week Before",
    title: "Pack Your Essentials Bag",
    body: "Pack a bag that stays with you — not on the truck. Include all important documents (health card, birth certificate, insurance papers, pension statements, will), all medications, your phone charger, a change of clothes, and some snacks. This bag goes with you on moving day, not in any box.",
  },
  {
    when: "Moving Day",
    title: "Relax — Our Crew Does the Work",
    body: "Your only job on moving day is to tell us where things go. Have a comfortable chair ready for yourself. The crew does all the lifting, carrying, and loading. We work at your pace, take breaks when needed, and treat every item with care. When we arrive at your new home, we place everything exactly where you want it.",
  },
  {
    when: "After the Move",
    title: "Settle In — We Are Still Here",
    body: "Call us within 30 days if you would like a piece of furniture moved, a shelf rehung, or any small adjustment made. We offer a post-move follow-up service so your new home feels exactly right.",
  },
];

const COMMUNITIES = [
  "Amica Laurier Manor", "Chartwell Preston", "Sunrise Senior Living Ottawa",
  "The Westboro Retirement Community", "Carleton Lodge", "Hillel Lodge",
  "The Royale Ottawa", "Wynwood Place", "Colonel By Retirement Residence",
  "Rideauview Retirement", "Forest Hill Retirement", "Stirling Park Retirement",
  "Billings Lodge", "Perley Health", "Rockcliffe Retirement Community",
  "Manor Village Barrhaven", "The Gardens at Bank", "Bruyère Continuing Care",
];

const INCLUDED = [
  "Uniformed, professional moving crew",
  "Fully equipped moving truck (no extra charge)",
  "Moving blankets on every piece of furniture",
  "Floor runners to protect your floors",
  "Doorframe protection throughout the move",
  "Furniture disassembly and full reassembly",
  "Room-by-room placement at your new home",
  "Careful wrapping of all fragile items",
  "Elevator booking and building coordination",
  "Post-move adjustment visit within 30 days",
];

const FAQS = [
  {
    q: "What exactly do your senior movers do differently from a regular moving company?",
    a: "A standard moving crew is trained to move quickly. That works for many people — but not for seniors. Our senior moving crew is trained specifically to work at your pace, not theirs. We never rush a decision, never leave an item where it doesn't belong, and never make you feel like a burden for asking questions. We wrap and protect items more carefully, communicate more openly with you and your family throughout the day, and take the time to set up your new space so it feels familiar and comfortable before we leave.",
  },
  {
    q: "How much does senior moving in Ottawa cost?",
    a: "Local senior moves within Ottawa are priced hourly. A 1-bedroom move typically costs $350 to $600. A 2 to 3 bedroom home typically costs $700 to $1,400 depending on how many items you have and whether you add packing services. We offer a senior discount for clients aged 65 and over — ask about it when you call. You will always receive a written quote before we start, so there are never any surprise charges.",
  },
  {
    q: "Do I have to pack everything myself?",
    a: "Not at all. We offer a full packing service where our team wraps, boxes, and labels every single item in your home. We also offer unpacking — placing items in cupboards, drawers, and shelves at your new home so you do not have to do it yourself. Many of our senior clients use both services and arrive at their new home to find everything already organised and put away.",
  },
  {
    q: "Can my family be present on moving day?",
    a: "Yes — and we encourage it. Having a family member present helps with decision-making and gives you reassurance throughout the day. We communicate clearly with everyone involved and are happy to give family members updates during the move, including for adult children who are coordinating remotely.",
  },
  {
    q: "What if something gets damaged during the move?",
    a: "All Prestige Moving senior moves include cargo insurance and liability coverage. If any item is damaged during transport, you have the right to file a claim. We recommend documenting any pre-existing damage to valuable items with photos before moving day — simply so there is a clear record. We are happy to do this walkthrough with you.",
  },
  {
    q: "How do I know your movers are trustworthy?",
    a: "All Prestige Moving employees are background-checked, uniformed, and covered by WSIB (Workplace Safety and Insurance Board). We are a registered Canadian business, fully insured, and have over 400 five-star Google reviews from Ottawa families. You are welcome to ask for references from previous senior clients when you call.",
  },
  {
    q: "What retirement communities in Ottawa do you work with?",
    a: "We work with every major retirement residence and assisted living community in Ottawa. We know the move-in protocols, elevator booking requirements, parking restrictions, and timing rules at most Ottawa facilities before we arrive. If your community is not on our list, simply call us — we will contact the building manager ahead of time to confirm all requirements.",
  },
  {
    q: "What if I'm not ready to move everything at once?",
    a: "That is completely fine. We offer staged and multi-day moves where we move a few rooms at a time over multiple visits. This is less physically and emotionally exhausting than trying to do everything in one day, and it gives you time to settle in gradually. Ask our coordinator about staged move scheduling when you call.",
  },
];

/* ─────────────────────── COMPONENT ─────────────────────── */

export default function SeniorMoving() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Senior Movers Ottawa | Caring, Patient Moving Services | Prestige Moving</title>
        <meta
          name="description"
          content="Compassionate senior moving services in Ottawa. We move at your pace, handle every item with care, and coordinate with retirement communities across Ottawa. Written quote, senior discount. Call (613) 600-4000."
        />
        <meta
          name="keywords"
          content="senior movers ottawa, senior moving ottawa, retirement moving ottawa, downsizing movers ottawa, elderly moving ottawa, senior relocation ottawa, retirement community movers ottawa"
        />
        <link rel="canonical" href="https://prestigemoving.ca/services/senior-moving" />
        <meta property="og:title" content="Senior Movers Ottawa | Caring, Patient Moving Services" />
        <meta property="og:description" content="Ottawa's compassionate senior moving specialists. Full packing, downsizing support, retirement community moves. Senior discount available." />
        <meta property="og:url" content="https://prestigemoving.ca/services/senior-moving" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map(f => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Senior Moving Ottawa",
          provider: { "@type": "MovingCompany", name: "Prestige Moving Ottawa", url: "https://prestigemoving.ca" },
          areaServed: { "@type": "City", name: "Ottawa" },
          description: "Compassionate senior moving services in Ottawa including retirement community moves, downsizing support, packing, and assisted living transitions.",
          telephone: "+16136004000",
        })}</script>
      </Helmet>

      <SharedNavigation />

      {/* ── Hero ── */}
      <section className="relative min-h-[540px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={seniorHeroImg}
            alt="Compassionate Prestige Moving crew helping an Ottawa senior move into a retirement community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Senior Discount Available", "Patient & Caring Crew", "Full Packing Service", "All Ottawa Retirement Homes"].map(t => (
                <Badge key={t} className="bg-[#C5A572]/20 text-[#C5A572] border border-[#C5A572]/30 text-xs font-semibold">{t}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Senior Moving Ottawa —<br />
              <span className="text-[#C5A572]">Patient, Caring, and Trusted</span>
            </h1>
            <p className="text-white/80 text-lg mb-4 leading-relaxed">
              Moving to a retirement community, downsizing from a family home, or transitioning to assisted living — our senior moving team works entirely at your pace. We handle every item with care, coordinate with your new residence, and make sure you and your family feel comfortable every step of the way.
            </p>
            <p className="text-white/65 text-base mb-8 leading-relaxed">
              Not sure where to start?{" "}
              <a
                href="https://seniorottawamoving.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A572] hover:underline font-semibold"
              >
                Senior Ottawa Moving
              </a>
              {" "}offers a free consultation to walk you through the process — no commitment, no pressure.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book">
                <Button className="bg-[#C5A572] text-[#1A2332] font-bold text-base px-6">
                  Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:6136004000">
                <Button variant="outline" className="text-white border-white/30 bg-white/10 text-base px-6">
                  <Phone className="h-4 w-4 mr-2" /> (613) 600-4000
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[#1A2332] text-sm font-semibold">
          {[
            "Senior Discount for 65+",
            "Family Coordination Welcome",
            "Flexible Multi-Day Moves",
            "All Ottawa Retirement Homes",
            "5.0★ — 400+ Reviews",
          ].map(t => (
            <span key={t} className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" />{t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Table of Contents ── */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={() => setTocOpen(!tocOpen)}
            className="flex items-center gap-2 text-[#1A2332] font-semibold text-sm w-full"
            data-testid="toc-toggle"
          >
            <BookOpen className="h-4 w-4 text-[#C5A572]" />
            <span>What is on this page — click any section to jump to it</span>
            <ChevronDown className={`ml-auto h-4 w-4 text-[#C5A572] transition-transform ${tocOpen ? "rotate-180" : ""}`} />
          </button>
          {tocOpen && (
            <div className="mt-3 grid sm:grid-cols-2 gap-1">
              {TOC.map(({ id, title }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-sm text-[#C5A572] hover:underline py-0.5"
                  onClick={() => setTocOpen(false)}
                >
                  → {title}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* ── What We Do ── */}
        <section id="what-we-do">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">What Prestige Moving Does Differently for Seniors</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              A standard moving crew is trained to work quickly. That is great for a young professional moving between apartments — but it is not right for a senior who is leaving a home they have lived in for decades, surrounded by belongings that represent a lifetime of memories.
            </p>
            <p>
              Our senior moving team at Prestige Moving is trained completely differently. We understand that making decisions about what to keep takes time. We understand that some items are priceless for reasons that have nothing to do with money. We understand that walking out of a longtime home for the last time is an emotional experience — and that the moving crew should honour that, not rush through it.
            </p>
            <p>
              That is why Ottawa families trust us with their most important moves. And it is why{" "}
              <a
                href="https://seniorottawamoving.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A572] hover:underline font-semibold"
              >
                Senior Ottawa Moving
              </a>
              {" "}— a specialist in senior relocation in Ottawa — works alongside companies like ours to make sure every senior in Ottawa gets the care and support they deserve when they move.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {[
              { icon: Heart, title: "We work at your pace, not ours", desc: "There is no hurrying, no pressure to decide faster, and no crew standing around impatiently. We build extra time into every senior move so the day never feels rushed." },
              { icon: Shield, title: "We protect everything as if it were our own", desc: "Every item is wrapped before it moves — furniture, boxes, fragile pieces. We use blankets, stretch wrap, and custom padding on all pieces, not just the expensive ones." },
              { icon: Users, title: "We communicate with your whole family", desc: "Whether family members are present on moving day or coordinating from another city, we keep everyone informed and make sure decisions are made together." },
              { icon: Home, title: "We set up your new space properly", desc: "We do not just drop things in a room and leave. We place furniture exactly where you ask, reassemble beds and shelving, and make sure your new home feels familiar before we go." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1A2332] flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#C5A572]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2332] mb-1 text-sm">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Our Senior Moving Services in Ottawa</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Every senior move is different. We offer a range of services that can be mixed and matched to fit exactly what you need — nothing more, nothing less.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-[#C5A572]" />
                </div>
                <h3 className="font-bold text-[#1A2332] mb-2 text-sm">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-[#1A2332] p-6 text-white text-center">
            <p className="text-white/80 mb-4">Not sure which services you need? Call us and describe your situation — we will tell you exactly what makes sense.</p>
            <a href="tel:6136004000">
              <Button className="bg-[#C5A572] text-[#1A2332] font-bold">
                <Phone className="h-4 w-4 mr-2" /> Call (613) 600-4000
              </Button>
            </a>
          </div>
        </section>

        {/* ── Moving Day ── */}
        <section id="moving-day">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">What Happens on Moving Day — Explained Simply</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              Moving day can feel overwhelming if you do not know what to expect. Here is exactly what happens, in plain language, from the moment our crew arrives to the moment we leave your new home.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {[
              {
                num: "1",
                title: "Our crew arrives — in uniform and on time",
                body: "You will receive a call the evening before your move to confirm exactly when we will arrive. Our movers wear Prestige Moving uniforms and arrive in a clearly marked truck. They will introduce themselves and walk through your home with you before touching anything.",
              },
              {
                num: "2",
                title: "We protect your floors and doorframes first",
                body: "Before anything moves, we lay floor runners from your front door through every hallway and room being used. We wrap doorframes so nothing gets scratched. This protection goes up before a single item is touched.",
              },
              {
                num: "3",
                title: "Every item is wrapped before it moves",
                body: "Every piece of furniture — no exceptions — is wrapped in moving blankets and stretch wrap before it leaves the room. Fragile items like mirrors, lamps, and china receive extra padding. Nothing moves unwrapped.",
              },
              {
                num: "4",
                title: "You sit comfortably and direct — we do the work",
                body: "You do not need to lift anything, carry anything, or be on your feet. Have a comfortable chair ready for yourself. Your job is simply to tell us where things go. 'That goes in the living room. That goes in the bedroom.' That is all we need from you.",
              },
              {
                num: "5",
                title: "At your new home, everything goes exactly where you want it",
                body: "When we arrive at your new home, we bring everything in and place each item exactly where you direct — not wherever is easiest for us. Beds are reassembled. Shelving goes back together. We do not leave until you are satisfied with how everything is placed.",
              },
              {
                num: "6",
                title: "Final walkthrough before we leave",
                body: "Before our crew leaves, we do a complete walkthrough of your new home with you to confirm everything arrived safely and is placed correctly. We also do a final check of your old home to make sure nothing was forgotten. Only then do we consider the move complete.",
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="flex gap-5 p-5 rounded-xl border border-gray-200 bg-white">
                <div className="w-9 h-9 rounded-full bg-[#C5A572] text-[#1A2332] font-extrabold text-sm flex items-center justify-center shrink-0">
                  {num}
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2332] mb-1.5">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-[#C5A572]/10 border border-[#C5A572]/30 p-5 flex gap-4">
            <ThumbsUp className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#1A2332] text-sm mb-1">Helpful Tip</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ask us to set up your bedroom first on moving day — so you have a comfortable, fully made bed waiting for you when you are tired at the end of the day. A familiar bedroom makes the first night in a new home much more restful.
              </p>
            </div>
          </div>
        </section>

        {/* ── Downsizing ── */}
        <section id="downsizing">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Downsizing Guide — How to Sort Your Home Room by Room</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg mb-8">
            <p>
              For most seniors, the hardest part of moving is not the physical move itself — it is deciding what comes with you. If you are moving from a 3-bedroom house to a 1-bedroom retirement suite, you simply cannot bring everything. That can feel overwhelming. But it does not have to be.
            </p>
            <p>
              The key is to take it one room at a time, over many days, without any pressure. Here is a room-by-room approach that our senior clients find manageable:
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                room: "Living Room",
                icon: Home,
                advice: "Start by deciding which main pieces of furniture will fit in your new space. Measure your new living room first. In most cases, you can bring your favourite sofa, one or two armchairs, a side table, and a television stand. Larger pieces like china cabinets or big entertainment units often do not fit in a retirement suite — but a grandchild or family friend may want to take them.",
                donate: "Salvation Army and Ottawa Mission accept sofas and chairs in good condition and offer free pickup.",
              },
              {
                room: "Bedroom",
                icon: Key,
                advice: "Your bedroom furniture is usually the most straightforward. Bring your bed (check that the size fits in your new room), your dresser, and one or two nightstands. Extra beds from guest rooms are often donated or passed to family — you are unlikely to have room for multiple guest beds in a retirement suite.",
                donate: "Habitat for Humanity ReStore accepts bed frames and dressers in good condition.",
              },
              {
                room: "Kitchen",
                icon: Package,
                advice: "Retirement suites and assisted living rooms often have much smaller kitchen or kitchenette spaces. Bring your everyday dishes (not a full set of 12 — bring what you actually use), your favourite pots and pans, your small appliances, and your essential utensils. Large formal china and crystal can be passed to family or donated.",
                donate: "Most charity shops accept kitchenware. Family members often treasure china sets with a history.",
              },
              {
                room: "Clothing and Wardrobes",
                icon: Users,
                advice: "Go through clothing by season. Bring what you actually wear regularly. Anything you have not worn in two years is unlikely to be worn in your new home either. Donation is the easiest path for clothing — the Ottawa Salvation Army on Merivale Road accepts clean clothing in any condition.",
                donate: "Ottawa Community Immigrant Services Organization (OCISO) also accepts clothing donations.",
              },
              {
                room: "Sentimental Items and Collections",
                icon: Heart,
                advice: "These are the hardest decisions. There is no rule that says you must let go of things that matter to you. But if space is limited, photographs can be digitised, collections can be curated down to the most meaningful pieces, and treasured items can be displayed prominently so they remain part of your daily life in your new home.",
                donate: "Many families pass heirlooms to children or grandchildren before a move — this way you see them enjoyed rather than stored.",
              },
            ].map(({ room, icon: Icon, advice, donate }) => (
              <div key={room} className="rounded-xl border border-gray-200 overflow-hidden">
                <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 border-b border-gray-200">
                  <div className="w-8 h-8 rounded-lg bg-[#1A2332] flex items-center justify-center">
                    <Icon className="h-4 w-4 text-[#C5A572]" />
                  </div>
                  <h3 className="font-bold text-[#1A2332]">{room}</h3>
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-gray-700 text-sm leading-relaxed">{advice}</p>
                  <div className="flex gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A572] shrink-0 mt-0.5" />
                    <span><strong className="text-gray-700">Donation tip: </strong>{donate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-[#1A2332] p-6">
            <h3 className="text-white font-bold mb-3">Need Help Sorting? We Can Come to You.</h3>
            <p className="text-white/75 text-sm leading-relaxed mb-4">
              Our senior move management service means a specialist comes to your home to help you sort items room by room — over as many visits as it takes. You do not have to do this alone.{" "}
              <a
                href="https://seniorottawamoving.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A572] hover:underline font-semibold"
              >
                Senior Ottawa Moving
              </a>
              {" "}also offers free downsizing consultations for Ottawa seniors — a great first step.
            </p>
            <a href="tel:6136004000">
              <Button className="bg-[#C5A572] text-[#1A2332] font-bold text-sm">
                <Phone className="h-3.5 w-3.5 mr-2" /> Call to Ask About Downsizing Help
              </Button>
            </a>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section id="timeline">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Your Senior Moving Timeline — What to Do and When</h2>
          <p className="text-gray-600 text-lg mb-8">
            Click each stage to see exactly what to focus on during that time.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 mb-6">
            {TIMELINE.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                data-testid={`timeline-step-${i}`}
                className={`text-left rounded-xl border p-4 transition-all ${
                  activeStep === i
                    ? "border-[#C5A572] bg-[#C5A572]/5 shadow-sm"
                    : "border-gray-200 bg-white hover-elevate"
                }`}
              >
                <div className="text-[#C5A572] text-xs font-bold mb-1">{s.when}</div>
                <div className="font-bold text-[#1A2332] text-xs">{s.title}</div>
              </button>
            ))}
          </div>
          <div className="bg-[#1A2332] rounded-2xl p-8 text-white">
            <div className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider mb-2">
              {TIMELINE[activeStep].when}
            </div>
            <h3 className="text-xl font-bold mb-3">{TIMELINE[activeStep].title}</h3>
            <p className="text-white/80 leading-relaxed">{TIMELINE[activeStep].body}</p>
          </div>
        </section>

        {/* ── Costs ── */}
        <section id="costs">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">How Much Does Senior Moving in Ottawa Cost?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg mb-8">
            <p>
              One of the most common questions seniors and their families ask is: how much will this cost? The honest answer is that it depends on the size of your home, the services you add, and the distance of your move. But here are the typical ranges for Ottawa senior moves in 2026.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {[
              {
                size: "1 Bedroom",
                range: "$350 – $600",
                note: "Apartment or suite, 2 movers, 3 to 4 hours. Most retirement suite moves fall in this range.",
              },
              {
                size: "2 Bedroom",
                range: "$600 – $950",
                note: "Larger apartment or small home, 2 to 3 movers, 4 to 6 hours.",
              },
              {
                size: "3 Bedroom House",
                range: "$900 – $1,400",
                note: "Full family home downsizing, 3 movers, 5 to 8 hours. Full packing is extra.",
              },
            ].map(({ size, range, note }) => (
              <div key={size} className="rounded-xl border border-gray-200 bg-white p-5 text-center">
                <div className="text-sm font-semibold text-gray-500 mb-1">{size}</div>
                <div className="text-2xl font-extrabold text-[#1A2332] mb-2">{range}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{note}</div>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="flex gap-3 p-4 rounded-xl bg-[#C5A572]/10 border border-[#C5A572]/30">
              <DollarSign className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#1A2332] text-sm mb-1">Senior Discount Available</p>
                <p className="text-sm text-gray-700">We offer a senior discount for clients aged 65 and over. Ask about it when you call or book online. It is automatically applied to your quote.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
              <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#1A2332] text-sm mb-1">Written Quote — No Surprise Charges</p>
                <p className="text-sm text-gray-700">You always receive a written, binding quote before your move begins. The price we quote is the price you pay — there are never any hidden charges added on moving day.</p>
              </div>
            </div>
          </div>

          <p className="mt-5 text-gray-600 text-sm">
            For a detailed breakdown of Ottawa moving costs, see our{" "}
            <Link href="/how-much-does-moving-cost-ottawa" className="text-[#C5A572] hover:underline font-semibold">
              complete Ottawa moving cost guide
            </Link>
            .
          </p>
        </section>

        {/* ── Communities ── */}
        <section id="communities">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Ottawa Retirement Communities We Work With</h2>
          <p className="text-gray-600 text-lg mb-8">
            We know the move-in protocols, elevator booking requirements, parking restrictions, and resident introduction processes at all of Ottawa's major retirement residences — so you do not have to figure any of that out yourself.
          </p>
          <div className="flex flex-wrap gap-2">
            {COMMUNITIES.map(c => (
              <span key={c} className="bg-gray-50 border border-gray-200 text-gray-700 rounded-lg px-3 py-1.5 text-sm font-medium flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#C5A572]" />{c}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Don't see your community? We work with every Ottawa-area retirement residence. Call us and we will contact your building to confirm move-in requirements before your date.
          </p>
        </section>

        {/* ── For Families ── */}
        <section id="for-families">
          <div className="rounded-2xl bg-gradient-to-br from-[#1A2332] to-[#243048] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#C5A572]/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-[#C5A572]" />
              </div>
              <h2 className="text-2xl font-bold text-white">Information for Family Members</h2>
            </div>
            <div className="space-y-4 text-white/75 leading-relaxed text-base mb-8">
              <p>
                If you are an adult child helping your parent or elderly relative move, here is what you need to know about working with our senior moving team.
              </p>
              <p>
                <strong className="text-white">You can coordinate the entire move on your parent's behalf.</strong> Many families do this — calling us, getting the quote, booking the date, and being present on moving day to direct the crew. We are used to working with adult children who are managing the logistics so their parent can focus on the emotional side of the transition.
              </p>
              <p>
                <strong className="text-white">You can coordinate remotely if needed.</strong> If you live in another city, we will call you throughout moving day with updates and send photos if requested. We are your eyes and ears on the ground.
              </p>
              <p>
                <strong className="text-white">Take your time with decisions about belongings.</strong> The single biggest mistake families make is rushing the downsizing process. Start months earlier than you think you need to. One room at a time. The physical move itself is the easy part — deciding what comes along is where the real time is spent.
              </p>
              <p>
                For specialist senior relocation advice, the team at{" "}
                <a
                  href="https://seniorottawamoving.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A572] hover:underline font-semibold"
                >
                  Senior Ottawa Moving
                </a>
                {" "}offers free family consultations to help you plan every aspect of a parent's move.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Phone, label: "Call us on their behalf", desc: "We work with whoever is coordinating" },
                { icon: Calendar, label: "Book well in advance", desc: "6–8 weeks for summer moves" },
                { icon: Heart, label: "Be present on move day", desc: "Your presence makes the day calmer" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                  <Icon className="h-6 w-6 text-[#C5A572] mx-auto mb-2" />
                  <div className="text-white font-semibold text-sm">{label}</div>
                  <div className="text-white/50 text-xs mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What's Included ── */}
        <section id="what-included">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">What Is Included in Every Senior Move</h2>
          <p className="text-gray-600 text-lg mb-8">
            Everything listed below is included in your quote — no extras, no surprises.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {INCLUDED.map(item => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section>
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">What Ottawa Families Say About Our Senior Moves</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Margaret H. — daughter",
                area: "Westboro home → Chartwell",
                review: "Moving my mother from her home of 42 years was one of the hardest things I have ever done. The Prestige team understood that immediately. They were patient, kind, and treated every single item — even things that might seem small — with complete respect. My mother felt heard throughout the entire day. I cannot recommend them enough.",
              },
              {
                name: "James R.",
                area: "Gloucester → Amica Laurier Manor",
                review: "The Prestige coordinator knew exactly what Amica required for move-in — the elevator booking, the timing, what the facility staff needed from us. On the day, the crew was wonderful with my father, even taking the time to arrange his photos exactly the way he wanted them. They really understood how important that was to him.",
              },
              {
                name: "Sandra K. — daughter",
                area: "Barrhaven estate move",
                review: "After losing my mother, we needed to clear and move her estate. The Prestige team handled this with such compassion — no rushing, complete respect for every item, and clear communication throughout. They made an incredibly difficult process bearable. I will always be grateful.",
              },
            ].map(t => (
              <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.review}"</p>
                <div className="font-bold text-[#1A2332] text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs mt-0.5">{t.area}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Warning Signs ── */}
        <section>
          <div className="rounded-2xl bg-red-50 border border-red-200 p-7">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="h-6 w-6 text-red-500" />
              <h2 className="text-xl font-bold text-[#1A2332]">Warning Signs — How to Spot a Bad Moving Company</h2>
            </div>
            <p className="text-gray-600 text-sm mb-5">
              Unfortunately, seniors are sometimes targeted by unprofessional movers. Watch out for these red flags:
            </p>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {[
                "Refuses to give a written quote — only gives a verbal price",
                "Demands a large cash deposit before the move begins",
                "Has no physical address — only a phone number",
                "Cannot show proof of insurance or WSIB coverage",
                "Quotes a price significantly lower than every other company",
                "Pressures you to book immediately without time to think",
                "Movers arrive without uniforms or identification",
                "Has very few reviews or only very new ones",
              ].map(s => (
                <div key={s} className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="h-7 w-7 text-[#C5A572]" />
            <h2 className="text-3xl font-bold text-[#1A2332]">Common Questions About Senior Moving in Ottawa</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-200 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left bg-white"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-3 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Related Pages ── */}
        <section id="related">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">More Resources for Ottawa Seniors and Families</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/senior-movers-ottawa-guide", label: "Senior Moving Step-by-Step Guide", desc: "Full 2,600-word guide — everything explained simply" },
              { href: "/how-much-does-moving-cost-ottawa", label: "Ottawa Moving Cost Guide 2026", desc: "Detailed breakdown of all Ottawa moving costs" },
              { href: "/services/packing-services", label: "Professional Packing Services", desc: "We pack everything — you don't lift a box" },
              { href: "/services/long-distance-moving", label: "Long Distance Moving Ottawa", desc: "Moving to another city to be closer to family" },
              { href: "/services/residential-moving", label: "Residential Moving Ottawa", desc: "Our full residential moving service overview" },
              { href: "/book", label: "Get a Free Quote Online", desc: "Takes under 2 minutes — senior discount applied" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href}>
                <div className="group p-4 rounded-xl border border-gray-200 bg-white hover-elevate cursor-pointer">
                  <div className="font-semibold text-[#1A2332] group-hover:text-[#C5A572] transition-colors mb-1 text-sm">{label}</div>
                  <div className="text-xs text-gray-500">{desc}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-[#C5A572]/30 bg-[#C5A572]/5 p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              For specialist senior relocation services in Ottawa, the team at{" "}
              <a
                href="https://seniorottawamoving.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A572] hover:underline font-semibold"
              >
                Senior Ottawa Moving
              </a>
              {" "}focuses exclusively on seniors and their families — offering free consultations, move management, downsizing coordination, and full moving services across Ottawa and the surrounding area.
            </p>
          </div>
        </section>

      </div>

      {/* ── CTA ── */}
      <section className="bg-[#1A2332] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Heart className="h-10 w-10 text-[#C5A572] mx-auto mb-5" />
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Talk About Your Move?</h2>
          <p className="text-white/65 max-w-xl mx-auto mb-2 leading-relaxed">
            Call us for a friendly, no-pressure conversation — or fill in our simple online form and we will call you back. Senior discount for 65+ automatically applied.
          </p>
          <p className="text-[#C5A572] font-semibold mb-8">(613) 600-4000 · Monday to Sunday</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book">
              <Button className="bg-[#C5A572] text-[#1A2332] font-bold px-8">
                Get a Free Written Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:6136004000">
              <Button variant="outline" className="text-white border-white/30 bg-white/10 px-8">
                <Phone className="h-4 w-4 mr-2" /> (613) 600-4000
              </Button>
            </a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
