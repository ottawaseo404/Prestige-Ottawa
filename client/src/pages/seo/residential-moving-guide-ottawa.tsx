import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, ChevronDown, Home, Package,
  Truck, Shield, Clock, Star, MapPin, AlertCircle, Calendar,
  DollarSign, Users, Key, HelpCircle, BookOpen
} from "lucide-react";

const TOC = [
  { id: "intro", title: "Why Residential Moving in Ottawa Is Different" },
  { id: "planning", title: "How to Plan Your Move — Month by Month" },
  { id: "choosing", title: "How to Choose the Right Residential Moving Company" },
  { id: "packing", title: "Packing Your Home: Room-by-Room Guide" },
  { id: "moving-day", title: "What to Expect on Moving Day" },
  { id: "costs", title: "Residential Moving Costs in Ottawa 2026" },
  { id: "neighbourhoods", title: "Moving Within Ottawa: Neighbourhood Guide" },
  { id: "checklist", title: "Complete Moving Checklist" },
  { id: "red-flags", title: "Warning Signs: Bad Movers to Avoid" },
  { id: "faq", title: "Frequently Asked Questions" },
];

const FAQS = [
  { q: "How much does residential moving in Ottawa cost in 2026?", a: "Local Ottawa residential moves are priced hourly. A 1-bedroom apartment move (2 movers + truck) typically costs $350–$600. A 2–3 bedroom home runs $700–$1,200. A larger 4+ bedroom family home can run $1,400–$2,500 or more, depending on volume and whether packing is included. All Prestige Moving quotes are written and binding — the price you receive is the price you pay." },
  { q: "How far in advance should I book Ottawa movers?", a: "For summer moves (May–September), book 4–6 weeks in advance — Ottawa's moving season peaks in late June and July when thousands of leases turn over simultaneously. Fall and winter moves can be booked 2–3 weeks out. If you're in a time crunch, Prestige Moving maintains last-minute availability for urgent situations — call (613) 600-4000." },
  { q: "Do I need to empty my dresser drawers?", a: "For local Ottawa moves, lightweight items like folded clothes and linens can stay in dresser drawers — we wrap and move the dresser as-is. Remove heavy or fragile items like books, tools, and breakables. For long-distance moves, all drawers must be emptied to comply with weight and security requirements." },
  { q: "Are my belongings insured during the move?", a: "Yes. All Prestige Moving residential moves include standard valuation coverage. Enhanced full-replacement value protection is available for an additional fee and is recommended for high-value furniture, electronics, and antiques. Ask your coordinator about coverage options when booking." },
  { q: "What neighbourhoods in Ottawa do you move to and from?", a: "We move throughout all of Ottawa — Kanata, Barrhaven, Nepean, Orleans, Gloucester, Westboro, the Glebe, Centretown, Sandy Hill, Rockcliffe Park, Manor Park, Manotick, Stittsville, and every other neighbourhood in the city. We also serve Gatineau and surrounding communities." },
  { q: "Can you move large and specialty items?", a: "Yes. We move pianos, gun safes, pool tables, hot tubs, antique furniture, large aquariums, and other specialty items. These require advance notice so we can bring the correct equipment. Mention any specialty items when you call to book." },
  { q: "Do you offer packing services?", a: "Yes — full-service packing is available. Our team uses wardrobe boxes, double-wall cartons, custom dish packs, and stretch wrap. We pack your entire home in a single day and label every box by room for organized unloading. Unpacking service is also available at the destination." },
  { q: "Do you move in winter in Ottawa?", a: "Absolutely. Ottawa winters don't stop us. Our crew uses ice-grip footwear, floor runners on all surfaces, and extra care around frozen paths. Winter moves are often faster (lighter traffic), less expensive (lower demand), and our scheduling availability is better than summer." },
];

export default function ResidentialMovingGuideOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Residential Moving Ottawa: The Complete 2026 Guide | Prestige Moving</title>
        <meta name="description" content="The definitive guide to residential moving in Ottawa. Covering costs, timelines, packing, choosing movers, neighbourhood tips, and moving day preparation. Updated for 2026." />
        <meta name="keywords" content="residential moving ottawa, ottawa home movers, how to move house ottawa, residential movers ottawa, ottawa moving guide, home moving tips ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/residential-moving-guide-ottawa" />
        <meta property="og:title" content="Residential Moving Ottawa: The Complete 2026 Guide" />
        <meta property="og:description" content="Everything Ottawa homeowners need to know about planning a residential move — from first steps to moving day." />
        <meta property="og:url" content="https://prestigemoving.ca/residential-moving-guide-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Residential Moving Ottawa: The Complete 2026 Guide",
          description: "A comprehensive guide to residential moving in Ottawa covering costs, planning, packing, choosing movers, and moving day.",
          author: { "@type": "Organization", name: "Prestige Moving Ottawa", url: "https://prestigemoving.ca" },
          publisher: { "@type": "Organization", name: "Prestige Moving Ottawa" },
          datePublished: "2026-04-28",
          dateModified: "2026-04-28",
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://prestigemoving.ca/residential-moving-guide-ottawa" },
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        })}</script>
      </Helmet>

      <SharedNavigation />

      {/* Hero */}
      <section className="relative bg-[#1A2332] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#243048] to-[#1A2332] opacity-95" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg,#C5A572 0,#C5A572 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-6">
            <Home className="h-3.5 w-3.5 text-[#C5A572]" />
            <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-widest">Ottawa Residential Moving Guide 2026</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Residential Moving Ottawa —<br className="hidden md:block" />
            <span className="text-[#C5A572]">The Complete 2026 Guide</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            Everything Ottawa homeowners and renters need to know about planning a residential move. Costs, timelines, packing tips, how to choose a mover, and exactly what to expect on moving day.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/55 mb-10">
            {[{ icon: Clock, label: "25 min read" }, { icon: CheckCircle2, label: "Full checklist included" }, { icon: DollarSign, label: "2026 pricing data" }].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5"><Icon className="h-4 w-4 text-[#C5A572]" /><span>{label}</span></div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-8"><Phone className="mr-2 h-4 w-4" />(613) 600-4000</Button></a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#C5A572] py-4">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-8">
          {[{ value: "10,000+", label: "Ottawa Homes Moved" }, { value: "400+", label: "Five-Star Reviews" }, { value: "All Areas", label: "Ottawa Neighbourhoods" }, { value: "Binding", label: "Written Quotes" }].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-xl font-extrabold text-[#1A2332]">{value}</div>
              <div className="text-xs font-semibold text-[#1A2332]/70 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TOC */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button onClick={() => setTocOpen(!tocOpen)} className="flex items-center gap-2 text-[#1A2332] font-semibold text-sm w-full" data-testid="toc-toggle">
            <BookOpen className="h-4 w-4 text-[#C5A572]" />
            <span>Table of Contents — click any section to jump</span>
            <ChevronDown className={`ml-auto h-4 w-4 text-[#C5A572] transition-transform ${tocOpen ? "rotate-180" : ""}`} />
          </button>
          {tocOpen && (
            <div className="mt-3 grid sm:grid-cols-2 gap-1">
              {TOC.map(({ id, title }) => (
                <a key={id} href={`#${id}`} className="text-sm text-[#C5A572] hover:underline py-0.5" onClick={() => setTocOpen(false)}>→ {title}</a>
              ))}
            </div>
          )}
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* Intro */}
        <section id="intro">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Residential Moving in Ottawa Is Different From Anywhere Else</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>Ottawa is one of Canada's most active residential real estate markets. Every year, tens of thousands of families, couples, and individuals move within the city — from Kanata to the Glebe, from Barrhaven to Orleans, from a downtown condo to a Manotick family home. And every summer, the city's rental market turns over almost simultaneously, with the majority of Ottawa leases ending on June 30th and July 31st.</p>
            <p>That creates a unique moving environment. During peak season, the best <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline font-semibold">residential movers in Ottawa</Link> are booked weeks in advance. Moving truck availability tightens. Elevators in condo buildings get reserved weeks out. If you are planning a residential move in Ottawa without understanding these dynamics, you can find yourself scrambling — or paying significantly more than necessary.</p>
            <p>This guide covers everything: how to plan your move, how to choose the right company, what realistic costs look like in 2026, how to pack efficiently, and exactly what happens on moving day. By the time you finish reading, you will have everything you need to run a smooth residential move anywhere in Ottawa.</p>
            <p>Prestige Moving has completed over 10,000 residential moves in Ottawa and the surrounding area. What we have learned, we share in this guide — honestly and in plain language.</p>
          </div>
        </section>

        {/* Planning */}
        <section id="planning">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">How to Plan Your Ottawa Residential Move — Month by Month</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg mb-8">
            <p>The number one mistake Ottawa residents make is starting too late. Here is a realistic planning timeline based on thousands of residential moves in the city.</p>
          </div>
          <div className="space-y-4">
            {[
              { when: "8–12 Weeks Before", title: "Confirm Your Dates and Start Decluttering", body: "Lock in your possession date and lease-end date as early as possible. Then start decluttering — one room at a time. Donate items to Ottawa charities (Salvation Army, Ottawa Mission, Habitat for Humanity ReStore), sell on Facebook Marketplace, or arrange a junk removal pickup. The less you move, the less it costs." },
              { when: "6–8 Weeks Before", title: "Get Moving Quotes", body: "Contact at least two to three residential moving companies in Ottawa and get written quotes from each. Reputable companies provide binding written quotes — if a company only quotes verbally, move on. During summer peak (May–September), top Ottawa movers fill up 6–8 weeks out, so do not delay." },
              { when: "4–6 Weeks Before", title: "Book Your Movers and Arrange Building Logistics", body: "Once you have selected your mover, sign the contract and pay the deposit. At the same time: book your freight elevator at the origin and destination buildings (usually done through building management), apply for any required parking permits for the moving truck, and notify your new building of your move-in date and time." },
              { when: "2–4 Weeks Before", title: "Start Packing Non-Essentials", body: "Pack items you do not use daily — seasonal clothes, books, art, extra kitchenware, storage room contents. Label every box with room name and a brief description of contents. Use a numbering system if you have many boxes. Colour-coded tape by room (blue for bedroom, red for kitchen) makes unloading dramatically faster." },
              { when: "1 Week Before", title: "Pack Nearly Everything and Confirm With Your Movers", body: "By one week out, everything except daily essentials should be packed. Confirm your move time with your mover, finalize elevator bookings, and ensure you have parking arranged at both locations. Prepare an 'essentials box' with items you'll need immediately after the move: phone charger, toilet paper, coffee maker, change of clothes, medications." },
              { when: "Moving Day", title: "Execute, Supervise, and Settle In", body: "Your movers arrive, protect your floors and doorframes, and load the truck. Your job: direct placement, be available for questions, and do a final walkthrough of your old home before leaving. At the new home, direct room-by-room placement. Check everything before signing the completion sheet." },
            ].map(({ when, title, body }) => (
              <div key={when} className="flex gap-5 p-5 rounded-xl border border-gray-200 bg-white">
                <div className="shrink-0">
                  <div className="text-[#C5A572] text-xs font-bold uppercase tracking-wider mb-1">{when}</div>
                  <div className="w-2 h-2 rounded-full bg-[#C5A572] mx-auto mt-1" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2332] mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Choosing */}
        <section id="choosing">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">How to Choose the Right Ottawa Residential Moving Company</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg mb-8">
            <p>Ottawa has hundreds of moving companies — from established businesses with decades of experience to informal operations that appeared last month. Here is how to tell the difference and make a smart choice.</p>
          </div>
          <div className="space-y-5">
            {[
              { num: "1", title: "Always get a written, binding quote", body: "A binding written quote means the price listed is the price you pay — full stop. Some companies quote low verbally and add charges on moving day (fuel surcharges, stair fees, long-carry fees). Always insist on a written document that itemizes exactly what is included and what the total cost is. If a company refuses, walk away." },
              { num: "2", title: "Verify WSIB coverage and insurance", body: "All legitimate Ontario moving companies carry WSIB (Workplace Safety and Insurance Board) coverage for their workers and cargo insurance for your belongings. Ask to see proof of both before signing. A company without WSIB is operating illegally and leaves you exposed if a worker is injured on your property." },
              { num: "3", title: "Read recent Google reviews — specifically look for residential moves", body: "Search the company on Google Maps and read reviews from the last 12 months. Look for specifics: Did they show up on time? Did they handle furniture carefully? Were there any surprise charges? Were they easy to reach when there were questions? Five-star counts mean little — the content of reviews tells the real story." },
              { num: "4", title: "Ask about their equipment", body: "Professional Ottawa residential movers use moving blankets on every piece of furniture, floor runners to protect your floors, stretch wrap for delicate pieces, and properly sized trucks for your home. If a company shows up with a rental van and no protective equipment, your belongings — and your floors — are at risk." },
              { num: "5", title: "Check that they handle your specific needs", body: "If you have a piano, a pool table, a gun safe, an aquarium, or antique furniture, verify the company has experience and equipment for those items specifically. Not all residential movers are equipped for specialty items." },
            ].map(({ num, title, body }) => (
              <div key={num} className="flex gap-5 p-5 rounded-xl border border-gray-200 bg-white">
                <div className="w-9 h-9 rounded-full bg-[#1A2332] text-[#C5A572] font-extrabold text-sm flex items-center justify-center shrink-0">{num}</div>
                <div>
                  <h3 className="font-bold text-[#1A2332] mb-1.5">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Packing */}
        <section id="packing">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Packing Your Home: Room-by-Room Guide</h2>
          <p className="text-gray-600 text-lg mb-8">Packing accounts for the majority of time spent preparing for a move. Here is the most efficient approach, room by room.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { room: "Kitchen", icon: Package, tips: ["Pack dishes in dish-pack boxes with cell dividers — never stack flat", "Wrap glassware individually in packing paper", "Pack appliances in their original boxes if available, or wrap tightly in blankets", "Leave everyday items (coffee maker, kettle) for the last box you pack"] },
              { room: "Living Room", icon: Home, tips: ["Wrap artwork in mirror boxes or custom cardboard", "Disassemble large furniture to protect doorframes", "Pack books in small boxes only — heavy books in large boxes will break the bottom", "Wrap lamp bases individually; pack shades in separate boxes"] },
              { room: "Bedrooms", icon: Key, tips: ["Use wardrobe boxes for hanging clothes — avoids wrinkling entirely", "Pack bedding last (you will want it accessible on the first night)", "Remove mattress covers if storing; otherwise wrap mattresses in plastic", "Pack shoes individually in original boxes or in small cartons"] },
              { room: "Bathrooms & Garage", icon: Shield, tips: ["Use sealable bags for any liquid items (shampoo, cleaning supplies)", "Drain and dry power tools before packing", "Wrap power tool blades in thick cardboard before boxing", "Dispose of hazardous materials (paint, chemicals) — movers cannot transport these"] },
            ].map(({ room, icon: Icon, tips }) => (
              <div key={room} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 border-b border-gray-200">
                  <div className="w-8 h-8 rounded-lg bg-[#1A2332] flex items-center justify-center">
                    <Icon className="h-4 w-4 text-[#C5A572]" />
                  </div>
                  <h3 className="font-bold text-[#1A2332]">{room}</h3>
                </div>
                <ul className="p-5 space-y-2">
                  {tips.map(t => (
                    <li key={t} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-[#C5A572]/10 border border-[#C5A572]/30 p-5">
            <p className="text-sm text-gray-700"><strong className="text-[#1A2332]">Don't want to pack yourself?</strong> Our <Link href="/services/packing-services" className="text-[#C5A572] hover:underline font-semibold">full packing service</Link> handles your entire home in a single day — every item wrapped, boxed, and labelled. Unpacking at the destination is also available.</p>
          </div>
        </section>

        {/* Moving Day */}
        <section id="moving-day">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">What to Expect on Moving Day in Ottawa</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg mb-8">
            <p>Moving day goes smoothly when you know what to expect. Here is the sequence of events for a standard Ottawa residential move with Prestige Moving.</p>
          </div>
          <div className="space-y-4">
            {[
              { time: "Morning", event: "Crew Arrival and Walkthrough", desc: "Your crew arrives in uniform and in a marked Prestige Moving truck. They introduce themselves, do a walkthrough of your home to assess the job, then lay floor runners from the front door through all active areas. Doorframes are padded before any furniture moves." },
              { time: "Loading Phase", event: "Wrapping and Truck Loading", desc: "Every piece of furniture is blanket-wrapped and stretch-wrapped before leaving the room. The truck is loaded strategically — heavy, solid items on the floor, lighter boxes and fragile items secured and padded on top. Loading time depends on home size: 1 bedroom takes roughly 1.5 hours, 3 bedrooms roughly 3–4 hours." },
              { time: "Transit", event: "Drive to New Location", desc: "Typical Ottawa residential moves involve 15–45 minutes of drive time. The crew follows the most direct route. You can head directly to the new home to be there when they arrive." },
              { time: "Unloading Phase", event: "Room-by-Room Placement", desc: "At the new home, the crew places every item exactly where you direct — not wherever is most convenient for them. Beds and shelving are reassembled. Appliances are connected. Nothing is left in the wrong room." },
              { time: "Completion", event: "Final Walkthrough and Sign-Off", desc: "Once everything is in place, the lead mover walks through the new home with you to confirm placement and condition. You then do a final check of the old home together to confirm nothing was left behind. You sign the completion sheet only when you are satisfied." },
            ].map(({ time, event, desc }) => (
              <div key={time} className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white">
                <div className="shrink-0 text-right min-w-[80px]">
                  <div className="text-[#C5A572] text-xs font-bold uppercase tracking-wider">{time}</div>
                </div>
                <div className="border-l border-[#C5A572]/30 pl-4">
                  <h3 className="font-bold text-[#1A2332] mb-1">{event}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Costs */}
        <section id="costs">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Residential Moving Costs in Ottawa — 2026 Price Guide</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg mb-8">
            <p>Ottawa residential moving prices vary by home size, number of movers, time of year, and whether you add packing services. Here are realistic 2026 ranges based on actual Prestige Moving jobs.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {[
              { size: "1 Bedroom", range: "$350 – $600", hours: "3–4 hours", crew: "2 movers + truck" },
              { size: "2–3 Bedroom", range: "$700 – $1,200", hours: "5–7 hours", crew: "2–3 movers + truck" },
              { size: "4+ Bedroom", range: "$1,400 – $2,500+", hours: "7–10+ hours", crew: "3–4 movers + truck" },
            ].map(({ size, range, hours, crew }) => (
              <div key={size} className="rounded-xl border border-gray-200 bg-white p-5 text-center">
                <div className="text-sm font-semibold text-gray-500 mb-1">{size}</div>
                <div className="text-2xl font-extrabold text-[#1A2332] mb-1">{range}</div>
                <div className="text-xs text-gray-500">{hours} · {crew}</div>
              </div>
            ))}
          </div>
          <div className="space-y-3 text-gray-700 text-base leading-relaxed mb-6">
            <p><strong className="text-[#1A2332]">Peak season surcharge:</strong> Moving during July and August — Ottawa's peak months — can add 15–25% to your cost due to high demand. Moving in September through April is consistently cheaper and often offers better availability.</p>
            <p><strong className="text-[#1A2332]">Add-ons that affect price:</strong> Professional packing, full unpacking, long-distance carry (when the truck cannot park close to your door), piano moving, and storage are priced separately. Always ask for these to be itemized in your written quote.</p>
            <p>For a full breakdown with specific scenarios, see our <Link href="/how-much-does-moving-cost-ottawa" className="text-[#C5A572] hover:underline font-semibold">Ottawa moving cost guide</Link>.</p>
          </div>
        </section>

        {/* Neighbourhoods */}
        <section id="neighbourhoods">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Moving Within Ottawa: Neighbourhood-by-Neighbourhood Guide</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg mb-8">
            <p>Ottawa's different neighbourhoods come with very different moving logistics. What works in Barrhaven is completely different from what works in Centretown.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { area: "Centretown & Downtown Core", icon: MapPin, notes: "Condo buildings dominate — freight elevator booking is essential and must be arranged 1–2 weeks in advance. Street parking for moving trucks requires a permit from the City of Ottawa (typically 2–5 business days to process). Moves here take longer due to elevator wait times and building security protocols." },
              { area: "Kanata & Stittsville", icon: MapPin, notes: "Primarily suburban homes and townhomes. Good truck access, ample parking, and minimal elevator complications. Detached homes in Kanata often have large basements, which adds significant time to loading. Book mid-week for best availability." },
              { area: "Orleans & Cumberland", icon: MapPin, notes: "Suburban neighbourhoods in the east end with good truck access. Some newer condo developments require elevator reservations. The distance from central Ottawa is longer for crews coming from the west — verify your mover services the east end without a surcharge." },
              { area: "Barrhaven & Nepean", icon: MapPin, notes: "Large suburban homes, good street access, and light condo density. Townhome complexes in Barrhaven may have narrow lanes — verify truck access with your mover in advance. The southward drive from central Ottawa can add 20–30 minutes to transit time." },
              { area: "Westboro & Hintonburg", icon: MapPin, notes: "Mix of older homes, infill builds, and condo buildings. Street parking can be tight — City permits are recommended. Older homes in Westboro sometimes have narrow staircases that require special handling for large furniture." },
              { area: "Rockcliffe Park & Manor Park", icon: MapPin, notes: "Older, established homes with mature trees and winding streets. Some properties have long driveways or access restrictions. High-value homes here benefit from our white-glove residential service with extra furniture protection and careful floor coverage." },
            ].map(({ area, icon: Icon, notes }) => (
              <div key={area} className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-[#1A2332] flex items-center justify-center">
                  <Icon className="h-4 w-4 text-[#C5A572]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2332] mb-1 text-sm">{area}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{notes}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-gray-600">See all our neighbourhood guides: <Link href="/ottawa-neighbourhoods-guide" className="text-[#C5A572] hover:underline">Ottawa Neighbourhoods Moving Guide</Link>.</p>
        </section>

        {/* Checklist */}
        <section id="checklist">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Complete Ottawa Residential Moving Checklist</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { phase: "8 Weeks Before", items: ["Confirm possession/move-out dates", "Start decluttering room by room", "Research and shortlist 3 moving companies", "Begin donating, selling, or disposing of unwanted items"] },
              { phase: "6 Weeks Before", items: ["Get written quotes from 2–3 companies", "Compare quotes (price, inclusions, reviews)", "Book your preferred mover", "Reserve freight elevator (origin and destination)"] },
              { phase: "4 Weeks Before", items: ["Apply for City of Ottawa parking permit (if needed)", "Arrange utilities transfer at new address", "Notify Canada Post — set up mail forwarding", "Start packing non-essential rooms"] },
              { phase: "2 Weeks Before", items: ["Pack all non-essentials", "Label every box clearly by room", "Confirm move details with your mover", "Arrange child and pet care for moving day"] },
              { phase: "Moving Day", items: ["Protect floors and valuable items", "Do a final walkthrough of old home", "Direct placement at new home", "Sign off only when satisfied"] },
              { phase: "After the Move", items: ["Update address with Service Canada, OHIP, bank", "Transfer home insurance to new address", "Update driver's licence address", "Confirm all utilities are active at new home"] },
            ].map(({ phase, items }) => (
              <div key={phase} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-bold text-[#1A2332] mb-3 text-sm">{phase}</h3>
                <ul className="space-y-1.5">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-gray-600">For a printable version of this checklist, see our <Link href="/ottawa-moving-checklist" className="text-[#C5A572] hover:underline">Ottawa Moving Checklist</Link>.</p>
        </section>

        {/* Red Flags */}
        <section id="red-flags">
          <div className="rounded-2xl bg-red-50 border border-red-200 p-8">
            <div className="flex items-center gap-3 mb-5">
              <AlertCircle className="h-6 w-6 text-red-500" />
              <h2 className="text-2xl font-bold text-[#1A2332]">Red Flags: How to Spot a Dishonest Ottawa Mover</h2>
            </div>
            <p className="text-gray-600 mb-5">Ottawa's moving industry, like any city, has its share of unreliable operators. Protect yourself by watching for these warning signs:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "No written quote — only verbal or email estimates",
                "Demands a large cash deposit before the move",
                "Quote significantly lower than all competitors",
                "No physical business address",
                "Cannot provide WSIB or insurance documentation",
                "Arrives in an unmarked vehicle without uniform",
                "No reviews on Google, HomeStars, or BBB",
                "Refuses to do a walkthrough before quoting",
                "Holds your belongings hostage for higher payment",
                "Pressure to sign immediately without reading the contract",
              ].map(s => (
                <div key={s} className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="h-7 w-7 text-[#C5A572]" />
            <h2 className="text-3xl font-bold text-[#1A2332]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-200 overflow-hidden">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left bg-white" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`faq-${i}`}>
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 pt-3 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50">{faq.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-xl font-bold text-[#1A2332] mb-5">More Guides for Ottawa Homeowners</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/services/residential-moving", label: "Residential Moving Service", desc: "Full service overview and pricing" },
              { href: "/how-much-does-moving-cost-ottawa", label: "Ottawa Moving Costs 2026", desc: "Detailed cost breakdown with scenarios" },
              { href: "/services/packing-services", label: "Packing Services Ottawa", desc: "Full packing and unpacking available" },
              { href: "/ottawa-moving-checklist", label: "Ottawa Moving Checklist", desc: "Printable checklist for your move" },
              { href: "/long-distance-moving-guide-canada", label: "Long Distance Moving Canada", desc: "Moving out of Ottawa? Start here" },
              { href: "/book", label: "Get a Free Quote", desc: "Online booking — takes 2 minutes" },
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

      {/* CTA */}
      <section className="bg-[#1A2332] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Home className="h-10 w-10 text-[#C5A572] mx-auto mb-5" />
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Plan Your Ottawa Residential Move?</h2>
          <p className="text-white/65 max-w-xl mx-auto mb-8 leading-relaxed">Get a free, written, binding quote from Ottawa's most reviewed residential moving company. No hidden charges. No surprises. Just a smooth move.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10 px-8"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
