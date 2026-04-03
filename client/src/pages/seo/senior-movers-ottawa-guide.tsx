import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, Star, CheckCircle2, ArrowRight, Shield, Clock,
  Heart, Home, Users, Package, ChevronDown, MapPin,
  Calendar, Truck, ThumbsUp, AlertCircle, HelpCircle
} from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Call and Have a Friendly Conversation",
    icon: Phone,
    content: [
      "The very first step is simply picking up the phone and calling a moving company that specializes in senior moves. You do not need to have everything figured out before you call. A good senior moving specialist will ask you questions and help you figure out the rest.",
      "During this call, you will be asked some simple questions: Where are you moving from? Where are you moving to? When are you hoping to move? How many rooms do you have? That's really it. There's no pressure, no commitment, and no cost to call.",
      "If you would rather not call, many companies also offer an online quote form where you type in your details and someone calls you back — whichever feels more comfortable.",
    ],
    tip: "Write down your questions before you call so you don't forget anything. Common questions: How long will it take? How many movers will come? What is included in the price?",
  },
  {
    number: "02",
    title: "Get a Written Quote — Before Anyone Shows Up",
    icon: Package,
    content: [
      "After your phone call, the moving company should send you a written quote. This is a document that shows exactly what the move will cost. A reputable senior moving company in Ottawa will give you a binding quote — that means the price they quote is the price you pay. There are no surprise charges added later.",
      "The quote should clearly list: the date of your move, the number of movers coming, the hourly rate or flat fee, any extra charges for stairs or heavy items, and what is and is not included. If any of these things are missing from the quote, ask the company to add them before you agree to anything.",
      "Never book a moving company that refuses to give you a written quote. Always get the price in writing.",
    ],
    tip: "Get quotes from two or three different companies and compare them side by side. The cheapest quote is not always the best — look at what each one includes.",
  },
  {
    number: "03",
    title: "Decide What You Are Taking With You",
    icon: Home,
    content: [
      "This is one of the most important — and most emotional — parts of moving as a senior. You have spent a lifetime filling your home with things that matter to you. Now you need to decide what comes with you to your new home.",
      "Start with one room at a time. Do not try to sort everything in one day — that is overwhelming for anyone. Instead, spend 30 to 45 minutes on one area, then take a break. Ask a trusted family member or friend to sit with you if the decisions feel hard.",
      "Sort items into four simple piles: KEEP (it comes with you), GIVE TO FAMILY (pass it on to someone who will love it), DONATE (local charities like the Salvation Army or Ottawa Food Bank will collect furniture and household items), and DISCARD (items that are broken or past their useful life).",
      "Many senior moving companies in Ottawa also offer a service called senior move management, where a professional comes to your home and helps you sort and decide — so you do not have to do it alone.",
    ],
    tip: "Take photos of rooms and sentimental items before the move. It helps you remember how things looked and gives you peace of mind that everything is documented.",
  },
  {
    number: "04",
    title: "Plan Your New Space",
    icon: MapPin,
    content: [
      "Before moving day, try to get a floor plan or measurements of your new home or suite. Knowing the size of the rooms ahead of time helps you decide which furniture will actually fit — and saves a lot of frustration on move day.",
      "Draw a simple sketch of each room in your new home and write down where you want the main pieces to go: the bed, the sofa, the kitchen table. Give a copy of this sketch to your movers so they know exactly where to put things when they arrive.",
      "If you are moving to a retirement residence or assisted living community, contact the building manager ahead of time. Ask about elevator booking, loading dock access, and any parking restrictions for the moving truck. Good senior movers will do this for you, but it is always good to know.",
    ],
    tip: "Bring a measuring tape when you visit your new home. Measure doorways, hallways, and stairwells to make sure your larger furniture pieces will fit through.",
  },
  {
    number: "05",
    title: "Pack Your Valuables and Essentials Yourself",
    icon: Shield,
    content: [
      "Even if you have hired professional movers to pack your belongings, there are certain things you should pack yourself and keep with you on moving day — not on the truck.",
      "These include: all important documents (health card, birth certificate, passport, insurance papers, will, pension statements), medications and medical equipment, jewellery and items of personal sentimental value, your phone charger and any devices you use daily, a change of clothes, and some snacks and water for the day.",
      "Pack these items in a bag or small suitcase that stays with you throughout the move — not in a box that goes on the moving truck. Label it clearly so movers know it is not to be loaded.",
    ],
    tip: "Make a checklist of your essential documents and check them off one by one as you pack them. This way nothing important gets accidentally packed in a box.",
  },
  {
    number: "06",
    title: "Get Ready for Moving Day",
    icon: Calendar,
    content: [
      "The day before your move, do a final walkthrough of your home. Check every cupboard, every closet, the garage, the shed, and the storage locker. It is easy to forget items in spaces you do not use every day.",
      "Make sure the movers will have easy access to your home. Clear a path from the front door to each room. If you live in a building, make sure the freight elevator is booked and the loading area is available. If you live in a house, arrange for parking space in front of the door.",
      "On moving day, have a chair available for yourself to sit comfortably while the movers work. You do not need to lift anything or be on your feet all day. Your only job is to direct the movers — 'that box goes to the kitchen,' 'that chair goes in the living room' — and to do a final check of each room once it is empty.",
    ],
    tip: "Eat a good breakfast on moving day and keep water and a light snack nearby. Moving days are long and it is easy to forget to eat when there is a lot happening.",
  },
  {
    number: "07",
    title: "Settle Into Your New Home",
    icon: Truck,
    content: [
      "When the movers arrive at your new home, refer to the simple room sketch you made in Step 4 to tell them where everything goes. A good moving crew will place every piece of furniture exactly where you ask — and will reassemble any beds, tables, or shelving units they took apart during the move.",
      "Once the truck is unloaded, walk through every room with the lead mover to confirm that everything arrived safely. Check that furniture is in the right place, that no items appear damaged, and that nothing is missing. Sign the completion paperwork only once you are satisfied.",
      "Most importantly — do not feel like you have to unpack everything on the first day. Professional senior movers often offer unpacking services, where they will unpack your boxes and place items in the right spots so your new home feels organized immediately. This is a service worth asking about.",
    ],
    tip: "Ask the movers to set up your bedroom first so it is fully ready when you are tired at the end of the day. Having a made bed to sleep in makes the whole first night much more comfortable.",
  },
  {
    number: "08",
    title: "Update Your Address and Notify Important Services",
    icon: CheckCircle2,
    content: [
      "Once you are settled, update your address with the following as soon as possible: Service Canada (for OAS and CPP), your provincial health card (OHIP in Ontario), your bank and any investment accounts, your doctor, dentist, and pharmacy, Canada Post (set up mail forwarding for at least 6 months), your insurance company (home and car), any subscriptions like magazines, and family and friends.",
      "Canada Post offers a mail forwarding service for a small monthly fee — this ensures that any mail sent to your old address still reaches you at your new home while you complete all your address updates.",
      "If you are moving within Ottawa, your OHIP card does not need to be replaced, but Service Ontario should still be notified of your new address.",
    ],
    tip: "Create a simple checklist of every organization that has your address and work through it one by one over the first two weeks. Do not try to do it all in one day.",
  },
];

const SERVICES = [
  {
    icon: Heart,
    title: "Senior Move Management",
    desc: "A move manager comes to your home, helps you sort what to keep, coordinates the entire moving process, and makes sure you feel supported every step of the way — ideal for seniors who don't have family nearby.",
  },
  {
    icon: Package,
    title: "Full Packing & Unpacking",
    desc: "Professional packers wrap, box, and label every item in your home — and unpack and organize everything at your new address so you don't have to lift a single box.",
  },
  {
    icon: Shield,
    title: "Furniture Disassembly & Reassembly",
    desc: "Beds, shelving units, and large furniture are safely disassembled for transport and put back together exactly as they were at your new home.",
  },
  {
    icon: Home,
    title: "Specialty Item Handling",
    desc: "Pianos, china cabinets, antiques, mobility equipment, and medical devices receive extra-careful handling with specialized wrapping and secure transport.",
  },
  {
    icon: Users,
    title: "Estate Cleanout Coordination",
    desc: "Items not coming to the new home can be donated to local charities, passed to family, or responsibly disposed of — all coordinated for you.",
  },
  {
    icon: Truck,
    title: "Retirement & Long-Term Care Moves",
    desc: "Experienced with the unique requirements of moving into retirement residences, assisted living communities, and long-term care facilities across Ottawa.",
  },
];

const FAQS = [
  {
    q: "How far in advance should I book senior movers in Ottawa?",
    a: "For a local Ottawa senior move, booking 3 to 4 weeks in advance is usually enough. If you are moving during the busy summer months (May through September) or at the end of a month (when most leases end), booking 6 to 8 weeks ahead gives you the best choice of dates. If your move date is flexible, moving mid-week or mid-month often gives you access to more affordable rates and more attentive service.",
  },
  {
    q: "What if I need to stop and rest during the move?",
    a: "A good senior moving crew works at your pace, not theirs. You are welcome to rest whenever you need to — that is what the crew is there for. You should not feel pressured to keep up with the movers. Simply let the lead mover know what you need and where things go, and they handle the physical work.",
  },
  {
    q: "How much does a senior move in Ottawa typically cost?",
    a: "Local senior moves within Ottawa typically start at $350 to $600 for a small apartment (1 bedroom, 2 movers, 3 to 4 hours). A 2 to 3 bedroom home generally runs $700 to $1,400 depending on the volume of items and any specialty services like full packing. Always get a binding written quote so you know the exact price before moving day — reputable senior movers will always provide this.",
  },
  {
    q: "Can family members be present on moving day?",
    a: "Absolutely, and it is encouraged. Having a trusted family member present is helpful for decision-making, emotional support, and doing a final walkthrough of both homes to make sure nothing is forgotten. Just make sure to let the moving company know in advance if you will have additional people present so the crew can plan their work accordingly.",
  },
  {
    q: "What happens if something is damaged during the move?",
    a: "Reputable senior movers in Ottawa carry full cargo insurance and liability coverage. If an item is damaged in transit, you have the right to file a claim. Always confirm that the company is fully insured before booking, and document any pre-existing damage to valuable items with photos before the move begins.",
  },
  {
    q: "Do senior movers help with donations and junk removal?",
    a: "Many senior moving specialists in Ottawa coordinate with local charities (Salvation Army, Ottawa Mission, Habitat for Humanity ReStore) for furniture and household donation pickups. Some also offer estate cleanout services for items that cannot be donated. Ask your moving company specifically about this when getting your quote.",
  },
  {
    q: "Is it safe to let movers into my home?",
    a: "Reputable moving companies perform background checks on all employees and are bonded and insured. Before booking, ask whether staff are background-checked and whether the company is a registered Canadian business with WSIB (Workplace Safety and Insurance Board) coverage. You can also ask the company for references from previous senior clients.",
  },
];

export default function SeniorMoversOttawaGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Senior Movers Ottawa — Complete Step-by-Step Moving Guide | Prestige Moving</title>
        <meta
          name="description"
          content="A friendly, step-by-step guide for seniors moving in Ottawa. Learn how senior movers in Ottawa work, what to expect, how to prepare, and how to make your move as easy as possible."
        />
        <meta name="keywords" content="senior movers ottawa, seniors moving ottawa, senior moving ottawa, senior movers ottawa ontario, moving help seniors ottawa, retirement move ottawa, senior relocation ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/senior-movers-ottawa-guide" />
        <meta property="og:title" content="Senior Movers Ottawa — Step-by-Step Moving Guide 2026" />
        <meta property="og:description" content="A warm, clear, step-by-step moving guide written specifically for Ottawa seniors. Everything explained simply, no jargon." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://prestigemoving.ca/senior-movers-ottawa-guide" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Senior Movers Ottawa — Complete Step-by-Step Moving Guide",
          "description": "A friendly, step-by-step guide for seniors moving in Ottawa. Learn exactly what happens at each stage of a senior move.",
          "author": { "@type": "Organization", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca" },
          "publisher": { "@type": "Organization", "name": "Prestige Moving Ottawa" },
          "datePublished": "2026-04-03",
          "dateModified": "2026-04-03",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://prestigemoving.ca/senior-movers-ottawa-guide" },
        })}</script>
      </Helmet>

      <SharedNavigation />

      {/* ── Hero ── */}
      <section className="relative bg-[#1A2332] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#243048] to-[#1A2332] opacity-95" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #C5A572 0, #C5A572 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />

        <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-6">
            <Heart className="h-3.5 w-3.5 text-[#C5A572]" />
            <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-widest">Written for Seniors & Families</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Senior Movers Ottawa<br className="hidden md:block" />
            <span className="text-[#C5A572]"> — A Simple Guide</span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-6 leading-relaxed">
            Moving is a big step at any age — but with the right help, it can be calm, organized, and even exciting.
            This guide explains everything, step by step, in plain language. No confusing jargon.
            Just honest advice from Ottawa's trusted{" "}
            <a href="https://seniorottawamoving.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline font-semibold">
              senior movers ottawa
            </a>
            {" "}professionals.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/55 mb-10">
            {[
              { icon: Clock, label: "20 min read" },
              { icon: CheckCircle2, label: "8 simple steps" },
              { icon: Heart, label: "Written for seniors" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-[#C5A572]" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8975f] text-[#1A2332] font-bold px-8">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:6136004000">
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-8">
                <Phone className="mr-2 h-4 w-4" /> (613) 600-4000
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="bg-[#C5A572] py-4">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-8">
          {[
            { value: "10,000+", label: "Moves Completed" },
            { value: "350+", label: "Five-Star Reviews" },
            { value: "Gentle", label: "Senior-Specialist Crews" },
            { value: "No Surprises", label: "Binding Written Quotes" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-xl font-extrabold text-[#1A2332]">{value}</div>
              <div className="text-xs font-semibold text-[#1A2332]/70 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* ── Introduction ── */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Moving as a Senior in Ottawa — You Are Not Alone</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              Every year, thousands of Ottawa seniors make the decision to move — whether it is downsizing from a family home that has grown too large, relocating to be closer to children or grandchildren, transitioning into a retirement residence, or simply starting a new chapter somewhere that better fits today's life.
            </p>
            <p>
              Whatever your reason for moving, one thing is true: senior moves are different from regular moves. They require more patience, more care, more planning, and a team that genuinely understands what you are going through — both physically and emotionally.
            </p>
            <p>
              The team at{" "}
              <a href="https://seniorottawamoving.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline font-semibold">
                Senior Ottawa Moving
              </a>
              {" "}specializes in exactly this kind of move. They work at your pace, treat your belongings with the same care they would treat their own family's, and make sure you feel informed and supported from the very first phone call to the very last box being unpacked.
            </p>
            <p>
              This guide walks you through every single step of the process — in plain, clear language — so you know exactly what to expect and feel confident going in.
            </p>
          </div>
        </section>

        {/* ── Why Senior Moves Are Different ── */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Senior Moves Are Different From Regular Moves</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg mb-8">
            <p>
              A regular moving company is trained to move boxes quickly. Load the truck, drive across town, unload the truck — done. That approach works fine for a 30-year-old moving between apartments. It does not work well for a senior who is leaving a home they have lived in for 30 or 40 years.
            </p>
            <p>
              <a href="https://seniorottawamoving.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline font-semibold">
                Senior movers in Ottawa
              </a>
              {" "}approach the job completely differently. The pace is slower and more deliberate. The crew takes more time to wrap delicate items — china, family photos, antique furniture — that have sentimental as well as financial value. The movers communicate with you throughout the day rather than disappearing into a flurry of activity. And there is genuine understanding that making decisions about what to keep and what to let go of is hard.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: Heart, label: "Emotional sensitivity", desc: "Moving away from a longtime home is an emotional experience. Good senior movers understand this and treat every item — and every person — with respect." },
              { icon: Clock, label: "More time, less rush", desc: "Senior moves take longer. That is expected and built into the schedule. You will never feel hurried or pressured." },
              { icon: Shield, label: "Extra-careful packing", desc: "Decades of collected belongings include irreplaceable items. Senior moving crews use extra padding, custom wrapping, and careful handling throughout." },
              { icon: Users, label: "Family coordination", desc: "Senior movers frequently work alongside adult children, neighbours, and care workers, coordinating with everyone involved to make the day run smoothly." },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1A2332] flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#C5A572]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2332] mb-1">{label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Step by Step ── */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">The Complete Step-by-Step Moving Process for Ottawa Seniors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Here is exactly what happens from start to finish — explained clearly so you always know what to expect next.
            </p>
          </div>

          <div className="space-y-8">
            {STEPS.map(({ number, title, icon: Icon, content, tip }) => (
              <div key={number} className="rounded-2xl border border-gray-200 overflow-hidden">
                {/* Step header */}
                <div className="bg-[#1A2332] px-6 py-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C5A572] flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-[#1A2332]" />
                  </div>
                  <div>
                    <div className="text-[#C5A572] text-xs font-bold uppercase tracking-widest">Step {number}</div>
                    <h3 className="text-white font-bold text-lg leading-tight">{title}</h3>
                  </div>
                </div>

                {/* Step body */}
                <div className="p-6 space-y-4">
                  {content.map((para, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed text-base">{para}</p>
                  ))}

                  {/* Tip box */}
                  <div className="mt-4 flex gap-3 bg-[#C5A572]/10 border border-[#C5A572]/30 rounded-xl p-4">
                    <ThumbsUp className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#1A2332] text-sm">Helpful Tip: </span>
                      <span className="text-gray-700 text-sm leading-relaxed">{tip}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Services ── */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Services Available From Ottawa Senior Moving Specialists</h2>
          <p className="text-gray-600 mb-8 text-lg">
            When you hire a company that specializes in{" "}
            <a href="https://seniorottawamoving.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">
              seniors moving ottawa
            </a>
            , you get access to services designed specifically for this stage of life — not just basic truck-and-muscle service.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#C5A572]/15 flex items-center justify-center">
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

        {/* ── For Family Members ── */}
        <section>
          <div className="rounded-2xl bg-gradient-to-br from-[#1A2332] to-[#243048] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#C5A572]/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-[#C5A572]" />
              </div>
              <h2 className="text-2xl font-bold text-white">A Note for Family Members Helping a Parent Move</h2>
            </div>

            <div className="space-y-4 text-white/75 leading-relaxed text-base mb-6">
              <p>
                If you are an adult child helping your parent or elderly relative move, you are doing something incredibly important. Moving is stressful enough — and for a senior leaving a longtime home, the emotional weight can be significant. Here are a few things that will help everyone involved.
              </p>
              <p>
                <strong className="text-white">Let them lead the decisions.</strong> It can be tempting to sort and donate quickly to get through the process faster. But for the senior making the move, every item has a story. Take your time. Ask about things before assuming they can go. Let them decide — even when it takes longer than you expected.
              </p>
              <p>
                <strong className="text-white">Book the moving company early and be present on move day.</strong> Having a familiar face present gives your parent reassurance and helps the day run more smoothly. Let the movers do the physical work — your role is emotional support and directing placement at the new home.
              </p>
              <p>
                <strong className="text-white">Hire specialists, not generalists.</strong>{" "}
                <a href="https://seniorottawamoving.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">
                  Senior Ottawa Moving
                </a>
                {" "}crews are trained specifically for senior relocations. They have the patience, sensitivity, and practical expertise that general moving companies do not. The difference in experience — for both you and your parent — is significant.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Be present", desc: "Your face makes the day calmer" },
                { label: "Let them decide", desc: "Even if it takes longer" },
                { label: "Book specialists", desc: "Not a general moving company" },
              ].map(({ label, desc }) => (
                <div key={label} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                  <CheckCircle2 className="h-6 w-6 text-[#C5A572] mx-auto mb-2" />
                  <div className="text-white font-semibold text-sm">{label}</div>
                  <div className="text-white/50 text-xs mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How to Choose ── */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">How to Choose the Right Senior Moving Company in Ottawa</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-base mb-8">
            <p>
              Not every moving company is equipped to handle senior moves well. Here are the most important things to look for when choosing{" "}
              <a href="https://seniorottawamoving.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline font-semibold">
                senior movers ottawa ontario
              </a>
              {" "}residents trust:
            </p>
          </div>

          <div className="space-y-4">
            {[
              { num: "1", title: "Ask specifically about senior move experience", body: "Ask the moving company: 'Have you done many senior moves? Do you offer packing and unpacking? What is your crew's approach when working with seniors?' The answers will tell you a great deal about whether this company is right for you." },
              { num: "2", title: "Insist on a binding written quote", body: "A reputable company will give you a written estimate that lists everything included and locks the price. If a company only gives you a verbal quote or a 'rough estimate,' that is a warning sign. Always get it in writing." },
              { num: "3", title: "Confirm they are WSIB certified and insured", body: "WSIB (Workplace Safety and Insurance Board) certification means the company's workers are protected and the company operates legally. Full insurance means your belongings are protected if anything is damaged during the move. Ask to see proof of both." },
              { num: "4", title: "Read their Google reviews and look for senior-specific feedback", body: "Search the company on Google and read through recent reviews. Look for words like 'patient,' 'careful,' 'respectful,' and 'gentle.' Reviews from families who moved an elderly parent are particularly helpful." },
              { num: "5", title: "Ask whether unpacking is included or available", body: "Unpacking is one of the most valuable services for seniors. Getting help placing furniture and putting items in cupboards and drawers on move day means your new home is livable from day one — not a sea of boxes." },
            ].map(({ num, title, body }) => (
              <div key={num} className="flex gap-5 p-5 rounded-xl border border-gray-200 bg-white">
                <div className="w-9 h-9 rounded-full bg-[#1A2332] text-[#C5A572] font-bold text-sm flex items-center justify-center shrink-0">
                  {num}
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2332] mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Red Flags ── */}
        <section>
          <div className="rounded-2xl bg-red-50 border border-red-200 p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-[#1A2332]">Warning Signs — What to Watch Out For</h2>
            </div>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Unfortunately, not every moving company treats seniors with the respect they deserve. Here are warning signs that a company may not be right for you:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Refuses to give a written quote — only gives prices verbally",
                "Pressures you to book immediately without giving you time to think",
                "Cannot provide proof of insurance or WSIB coverage",
                "Has no reviews — or only very recent ones (just started operating)",
                "Demands a large cash deposit upfront before the move",
                "Quotes a price significantly lower than everyone else (often a bait-and-switch)",
                "Movers arrive without uniforms or proper moving equipment",
                "No physical business address — operates only through a phone number",
              ].map((sign) => (
                <div key={sign} className="flex items-start gap-2.5">
                  <AlertCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="h-7 w-7 text-[#C5A572]" />
            <h2 className="text-3xl font-bold text-[#1A2332]">Common Questions From Ottawa Seniors</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className="font-semibold text-[#1A2332] pr-4 text-base">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 leading-relaxed text-base">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Featured Resource ── */}
        <section>
          <div className="rounded-2xl bg-gradient-to-br from-[#1A2332] to-[#243048] p-8 md:p-10 text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-5">
              <Star className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-widest">Recommended Resource</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Senior Ottawa Moving — Specialists You Can Trust
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed text-base">
              For Ottawa seniors looking for a dedicated specialist, the team at{" "}
              <a href="https://seniorottawamoving.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline font-semibold">
                Senior Ottawa Moving
              </a>
              {" "}focuses exclusively on helping seniors and their families navigate the moving process with patience, care, and expertise.
            </p>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed text-base">
              Whether you are moving to a smaller home, a retirement residence, or a long-term care facility,{" "}
              <a href="https://seniorottawamoving.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline font-semibold">
                senior movers ottawa
              </a>
              {" "}professionals offer full packing, unpacking, furniture placement, donation coordination, and move management — every service you need under one roof.
            </p>
            <a href="https://seniorottawamoving.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8975f] text-[#1A2332] font-bold px-8">
                Visit Senior Ottawa Moving <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#1A2332] mb-3">Ready to Talk About Your Move?</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Prestige Moving's Ottawa team is experienced with senior relocations across all of Ottawa's neighbourhoods and retirement communities. Call for a friendly, no-pressure conversation — or fill out our simple online form and we will call you.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/book">
                  <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8975f] text-[#1A2332] font-bold">
                    Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:6136004000">
                  <Button size="lg" variant="outline" className="border-[#1A2332] text-[#1A2332]">
                    <Phone className="mr-2 h-4 w-4" /> (613) 600-4000
                  </Button>
                </a>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { icon: Shield, text: "Binding written quote — no surprise charges" },
                { icon: Heart, text: "Patient, senior-trained crews" },
                { icon: Package, text: "Full packing and unpacking available" },
                { icon: ThumbsUp, text: "350+ five-star Google reviews" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1A2332] flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-[#C5A572]" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Internal Links ── */}
        <section>
          <h2 className="text-xl font-bold text-[#1A2332] mb-5">More Moving Guides for Ottawa Residents</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/how-much-does-moving-cost-ottawa", label: "How Much Does Moving Cost in Ottawa?", desc: "Full 2026 pricing breakdown" },
              { href: "/services/residential-moving", label: "Residential Moving Services", desc: "What our full residential service includes" },
              { href: "/ottawa-long-distance-movers-guide", label: "Long Distance Movers Guide", desc: "Moving outside Ottawa to another city" },
              { href: "/movers-near-me-ottawa", label: "Movers Near Me in Ottawa", desc: "Find movers in your Ottawa neighbourhood" },
              { href: "/services/packing-services", label: "Professional Packing Services", desc: "Let us pack everything for you" },
              { href: "/book", label: "Get a Free Quote Online", desc: "3-step form — takes under 2 minutes" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href}>
                <div className="group p-4 rounded-xl border border-gray-200 bg-white hover-elevate cursor-pointer">
                  <div className="font-semibold text-[#1A2332] group-hover:text-[#C5A572] transition-colors mb-1 text-sm">{label}</div>
                  <div className="text-xs text-gray-500">{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <SharedFooter />
    </>
  );
}
