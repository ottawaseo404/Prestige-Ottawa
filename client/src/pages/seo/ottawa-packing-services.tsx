import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, Star, ArrowRight, ChevronDown, CheckCircle2, ChevronRight,
  Package, Shield, Clock, Award, MapPin, Layers, AlertTriangle
} from "lucide-react";
import teamImg from "@assets/prestige_moving_1772836136864.jpg";

const TOC_ITEMS = [
  { id: "what-packing-includes",    title: "What Packing Services Include" },
  { id: "packing-options",          title: "Full vs. Partial Pack" },
  { id: "why-professional-packing", title: "Why Hire Professional Packers" },
  { id: "room-by-room",             title: "Room-by-Room Packing Guide" },
  { id: "packing-cost",             title: "Ottawa Packing Service Cost" },
  { id: "unpacking",                title: "Unpacking Service" },
  { id: "faq",                      title: "FAQ" },
];

const ROOMS = [
  { room: "Kitchen", difficulty: "High", time: "2–4 hours", desc: "The most time-intensive room in any Ottawa home. Professional packers use cell boxes for dishes, paper-wrap every pot and pan, and use specialty boxes for wine glasses and stemware. Appliances are wrapped in moving blankets. The complexity of a fully-packed kitchen is often underestimated by DIY packers." },
  { room: "Master Bedroom", difficulty: "Medium", time: "1–2 hours", desc: "Clothing folded into standard boxes; hanging clothing in wardrobe boxes. Bedding and pillows in large boxes. Jewellery and fragile items wrapped individually with direct labelling. Mattress in a protective mattress bag." },
  { room: "Living / Dining Room", difficulty: "Medium-High", time: "1.5–3 hours", desc: "Electronics wrapped in original boxes or padded boxes with anti-static protection. Artwork and mirrors in picture boxes with corner protection. Fragile decorative items in individually-wrapped paper. Books in small boxes (weight management is critical)." },
  { room: "Children's Rooms", difficulty: "Medium", time: "1–1.5 hours", desc: "Toys sorted and boxed by type. Stuffed animals and soft items in large boxes or wardrobe bags. Small parts (LEGO, puzzles) in sealed ziplock bags inside labelled boxes. Bedding and clothing in standard boxes." },
  { room: "Bathrooms", difficulty: "Low", time: "30–45 min each", desc: "Toiletries in sealed bags inside small boxes. Medicine cabinet contents individually wrapped. Towels as packing material for other items. Cleaning products sealed and packed separately from food/toiletries." },
  { room: "Home Office", difficulty: "Medium", time: "1–2 hours", desc: "Documents in file boxes preserving hanging file systems. Electronics wrapped with anti-static protection. Cables labelled and bundled by device. Monitors in padded monitor boxes or original packaging." },
  { room: "Garage / Utility", difficulty: "High", time: "2–4 hours", desc: "Tools organized and boxed by category. Power tool accessories in labelled ziplock bags. Hazardous materials (paint, solvents, propane) cannot be transported — our crew will advise on disposal. Seasonal items in large boxes." },
];

const FAQS = [
  { q: "How much does professional packing cost in Ottawa?", a: "Professional packing services in Ottawa typically run $35–$55 per hour per packer, in addition to your regular moving rate. A 2-bedroom Ottawa home typically takes 3–5 packing hours per packer. Full packing for a 2-bedroom apartment might cost $350–$600 for the packing service plus materials. A 3-bedroom house full pack runs $600–$1,000+ for packing. Prestige Moving provides written quotes for all packing services so you know the exact cost before the crew arrives." },
  { q: "Is it worth getting professional packing for an Ottawa move?", a: "For most Ottawa residents, the answer is yes for specific categories even if not for everything. Professional packing of the kitchen, fragile items, and artwork pays for itself by eliminating breakage. For busy Ottawa professionals without time to pack a 3-bedroom house, full packing is frequently cost-effective when you factor in the value of your time. And professional packing provides better cargo insurance coverage than items you pack yourself." },
  { q: "What is included in Prestige Moving's Ottawa packing service?", a: "Our Ottawa packing service includes: all packing materials (boxes, packing paper, bubble wrap, tape, wardrobe boxes), systematic room-by-room packing with a consistent labelling system (room name + contents summary on top and two sides), fragile item wrapping with paper and bubble wrap, wardrobe box service for hanging clothing, and a final walkthrough to confirm nothing is missed. Unpacking is available as an add-on." },
  { q: "Do you bring your own packing materials?", a: "Yes. Our Ottawa packing crew brings all required materials: small, medium, large, and wardrobe boxes, dish boxes, picture boxes, packing paper, bubble wrap, stretch wrap, heavy-duty tape, and markers. You don't need to source any packing materials when using our packing service." },
  { q: "How far in advance should I book packing services in Ottawa?", a: "We recommend booking packing services at the same time as your move booking — at least 2–4 weeks before your move date. Packing crew availability can be limited, especially in peak season (May–September) and at month-end. Full-home packing is typically done the day before your move date to keep items organized and accessible." },
  { q: "Can you pack just some rooms and I'll pack the rest?", a: "Yes — partial packing is one of our most popular Ottawa services. You pack the easy rooms (bedrooms, bathrooms) and we pack the kitchen, fragile items, and any specialized rooms. You define exactly what you want us to pack. Partial packing is an excellent option for Ottawa residents who are comfortable with clothing and books but want professional help with fragile items." },
  { q: "Does professional packing affect my moving insurance claim if something is damaged?", a: "Yes — significantly. Items packed by our crew are covered under our full cargo insurance with a clearer claims path. Items you pack yourself are typically covered at a lower liability standard ('known shipper' standard) because the moving company didn't observe the packing. For valuable or fragile items, professional packing provides both better protection and better claims coverage." },
  { q: "How long does packing take for a 2-bedroom apartment in Ottawa?", a: "A 2-bedroom Ottawa apartment with our packing crew typically takes 3–5 hours for 2 packers working in parallel. A heavily-furnished apartment with a large kitchen collection, significant art, or extensive books may take longer. Our crew provides a time estimate after discussing the scope of your home and packing needs." },
];

export default function OttawaPackingServices() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ottawa Professional Packing Services",
    "provider": { "@type": "Organization", "name": "Prestige Moving", "url": "https://prestigemoving.ca" },
    "areaServed": { "@type": "City", "name": "Ottawa" },
    "description": "Professional packing and unpacking services in Ottawa. Full packs, partial packs, and fragile-item packing for Ottawa homes and offices. All materials included.",
    "url": "https://prestigemoving.ca/ottawa-packing-services"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } }))
  };

  return (
    <>
      <Helmet>
        <title>Ottawa Packing Services | Professional Packers Ottawa | Prestige Moving</title>
        <meta name="description" content="Professional packing and unpacking services in Ottawa. Full packs, partial packs, fragile-only packing — all materials included. 5.0 stars, 400+ reviews. Call (613) 600-4000." />
        <meta name="keywords" content="Ottawa packing services, professional packers Ottawa, packing services Ottawa, moving packers Ottawa, packing company Ottawa, fragile packing Ottawa, full packing service Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-packing-services" />
        <meta property="og:title" content="Ottawa Packing Services | Professional Packers Ottawa | Prestige Moving" />
        <meta property="og:description" content="Professional packing services in Ottawa — full packs, partial packs, fragile-only. All materials included. 5.0 stars." />
        <meta property="og:url" content="https://prestigemoving.ca/ottawa-packing-services" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />
      <div className="min-h-screen bg-white">

        <section className="relative h-[480px] flex items-end pb-16">
          <img src={teamImg} alt="Ottawa professional packing services — Prestige Moving crew" className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-[#0d1620]/82" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <Package className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Ottawa Professional Packing · All Materials Included</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 max-w-3xl leading-tight">Ottawa Packing Services</h1>
            <p className="text-lg text-white/70 max-w-xl mb-2">Full packs, partial packs, and fragile-only packing for Ottawa homes. We bring every box, roll of paper, and piece of wrap.</p>
            <p className="text-white/50 text-sm mb-8 flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-[#C5A572] fill-[#C5A572]" /> 5.0 stars · 400+ reviews</span>
              <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-[#C5A572]" /> All materials included</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-[#C5A572]" /> Ottawa employees, not subcontractors</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">Book Packing Service <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <section className="bg-[#1A2332] py-5">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "All Materials", label: "Boxes, paper, wrap, tape" },
              { value: "Fragile OK",   label: "Dish boxes & picture boxes" },
              { value: "Full or Partial", label: "You choose the scope" },
              { value: "5.0 ★",       label: "400+ Ottawa reviews" },
            ].map(({ value, label }, i) => (
              <div key={i}>
                <div className="text-lg font-bold text-[#C5A572]">{value}</div>
                <div className="text-white/50 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="xl:flex gap-12 items-start">
            <TableOfContents items={TOC_ITEMS} />
            <div className="flex-1 min-w-0 space-y-20">

              <section id="what-packing-includes" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Package className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">What's Included</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">What Ottawa Professional Packing Services Include</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Prestige Moving's Ottawa packing service is fully turnkey — you don't shop for boxes, source packing paper, or run out mid-pack. Our packing crew arrives with everything needed to systematically pack your home, room by room, with a consistent labelling system that makes unpacking at your new Ottawa address intuitive and organized.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {[
                    { item: "All Packing Materials", detail: "Small, medium, large, wardrobe, dish, and picture boxes. Packing paper, bubble wrap, stretch wrap, and heavy-duty tape. Markers and labels. Nothing is extra." },
                    { item: "Room-by-Room Systematic Packing", detail: "Our crew works one room at a time, completing and labelling each before moving on. Every box is labelled on the top and two sides with the destination room and contents summary." },
                    { item: "Fragile Item Wrapping", detail: "Dishes wrapped individually in packing paper and packed vertically in dish boxes. Glasses in cell boxes. Artwork and mirrors in picture boxes with foam corner protection. Electronics in padded boxes." },
                    { item: "Wardrobe Box Service", detail: "Hanging clothing is transferred directly from your closet rod to a wardrobe box with a metal hanging bar. Clothes arrive at your new Ottawa home wrinkle-free and ready to re-hang." },
                    { item: "Disassembly Coordination", detail: "Our packing crew coordinates with the moving crew on any furniture disassembly — hardware is labelled in ziplock bags and taped to the matching furniture piece." },
                    { item: "Final Walkthrough", detail: "After completing each room, our lead packer does a room-by-room walkthrough with you to confirm nothing was missed. We don't leave until you're satisfied that the packing is complete." },
                  ].map(({ item, detail }, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1A2332] text-sm mb-1">{item}</div>
                        <div className="text-gray-500 text-sm leading-relaxed">{detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="packing-options" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Layers className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Packing Options</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Full Pack vs. Partial Pack vs. Fragile-Only</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Choose the level of packing service that fits your Ottawa move. You're not locked into a full pack — most Ottawa clients choose partial packing, letting our crew handle the rooms they find most challenging.</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { name: "Full Pack", desc: "Our crew packs every room, every box. You arrive at moving day with nothing left to do — everything is ready to load. Best for busy Ottawa professionals, families with young children, and anyone moving on a tight timeline.", best: "All rooms packed; full material supply; labelled to move-in ready", price: "Most comprehensive" },
                    { name: "Partial Pack", desc: "You pack the straightforward items (clothing, books, linens). We pack the kitchen, fragile items, artwork, and any rooms you find most challenging. A popular balance for Ottawa residents who want help with the hard parts.", best: "Kitchen + fragile items + rooms you specify", price: "Most popular option", highlight: true },
                    { name: "Fragile-Only Pack", desc: "You pack everything except fragile and high-value items. Our crew brings the specialty materials (dish boxes, picture boxes, bubble wrap) and handles only the breakable contents. Best for confident packers who just need fragile expertise.", best: "Dishes, glassware, artwork, electronics, collectibles", price: "Most economical" },
                  ].map(({ name, desc, best, price, highlight }, i) => (
                    <div key={i} className={`p-5 rounded-xl border-2 ${highlight ? "border-[#C5A572] bg-[#C5A572]/5" : "border-gray-200"}`}>
                      {highlight && <div className="text-[#C5A572] text-xs font-bold uppercase tracking-wide mb-2">Most Popular</div>}
                      <div className="font-bold text-[#1A2332] text-base mb-2">{name}</div>
                      <div className="text-xs text-gray-400 mb-3">{price}</div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{desc}</p>
                      <div className="text-xs text-gray-500"><span className="font-medium text-gray-600">Covers: </span>{best}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="why-professional-packing" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Shield className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Why Professional Packing</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Why Ottawa Residents Hire Professional Packers</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Professional packing isn't a luxury — for the right Ottawa resident and the right move, it pays for itself multiple times over.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Better Insurance Coverage", desc: "Items packed by our crew are covered under our full cargo insurance. Items you pack yourself are subject to 'known shipper' liability standards — a lower claims bar. For anything fragile or valuable, professional packing means better protection and a cleaner claims process." },
                    { title: "No Breakage Risk", desc: "Our crew knows exactly how to pack dishes vertically, wrap stemware, protect artwork, and secure electronics. The breakage rate on professionally-packed Ottawa moves is dramatically lower than DIY packing." },
                    { title: "Move Faster on Move Day", desc: "Pre-packed, properly sealed, and clearly labelled boxes load and unload in significantly less time. Arriving packed is the single biggest factor in a fast, efficient Ottawa moving day." },
                    { title: "Save Your Energy", desc: "Packing an Ottawa home is physically and mentally exhausting. Using the days before your move to pack means arriving at moving day already drained. Professional packing preserves your energy for the actual move and the setup that follows." },
                    { title: "Systematic Labelling", desc: "Our packing system labels every box on top and two sides with the destination room and a contents summary. You'll know exactly where every box belongs — unpacking becomes logical instead of chaotic." },
                    { title: "Specialty Materials On Hand", desc: "Dish boxes, wardrobe boxes, picture boxes, and cell dividers are not available at most Ottawa grocery stores. Our crew brings exactly what's needed for every category of item in your home." },
                  ].map(({ title, desc }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-2">{title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="room-by-room" className="scroll-mt-24 bg-gray-50/70 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <MapPin className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Room-by-Room Guide</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">How We Pack Each Room in Your Ottawa Home</h2>
                <div className="space-y-4">
                  {ROOMS.map(({ room, difficulty, time, desc }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white border border-gray-100">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="font-bold text-[#1A2332] text-base">{room}</div>
                        <div className="flex gap-2">
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${difficulty === "High" ? "bg-red-100 text-red-700" : difficulty === "Medium-High" ? "bg-orange-100 text-orange-700" : difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>{difficulty} complexity</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{time}</span>
                        </div>
                      </div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="packing-cost" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Clock className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Packing Costs</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Ottawa Packing Service Cost</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Packing is priced per packer-hour in addition to your moving rate. Materials are included in the packing service — there's no separate materials invoice. All packing quotes are written and provided before the crew arrives.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#1A2332] text-white">
                        <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Home Size</th>
                        <th className="text-center px-4 py-3 font-semibold">Packers</th>
                        <th className="text-center px-4 py-3 font-semibold">Est. Hours</th>
                        <th className="text-center px-4 py-3 rounded-tr-xl font-semibold text-[#C5A572]">Estimated Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { size: "1-Bedroom Apartment",  packers: "2", hours: "2–3 hrs", cost: "$300–$450" },
                        { size: "2-Bedroom Apartment",  packers: "2", hours: "3–5 hrs", cost: "$450–$750" },
                        { size: "2-Bedroom House",       packers: "2", hours: "4–6 hrs", cost: "$600–$900" },
                        { size: "3-Bedroom House",       packers: "2–3", hours: "5–8 hrs", cost: "$750–$1,200" },
                        { size: "4-Bedroom House",       packers: "3", hours: "7–11 hrs", cost: "$1,050–$1,650" },
                      ].map(({ size, packers, hours, cost }, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-4 py-3 font-medium text-[#1A2332]">{size}</td>
                          <td className="px-4 py-3 text-center text-gray-600">{packers}</td>
                          <td className="px-4 py-3 text-center text-gray-600">{hours}</td>
                          <td className="px-4 py-3 text-center font-bold text-[#C5A572]">{cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-400 text-xs mt-3">*Estimates include materials. Partial packs and fragile-only packs are priced proportionally. All packing is quoted in writing before crew arrival.</p>
              </section>

              <section id="unpacking" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Award className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Unpacking Service</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Unpacking Service in Ottawa</h2>
                <p className="text-gray-600 leading-relaxed mb-4">After your Ottawa move, our unpacking service converts a home full of boxes into an organized, functional living space — on the same day or the next. Our unpacking crew works from your box labels and your instructions, placing items in their designated rooms, arranging kitchen contents, and removing all packing materials from your new home.</p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {[
                    { title: "Same-Day Unpacking", desc: "After the moving truck is unloaded, a dedicated unpacking crew begins immediately. Available for full unpacking on the same day as your move." },
                    { title: "Next-Day Unpacking", desc: "Schedule unpacking for the day after your move — giving you time to decide how you want furniture arranged before the crew places items." },
                    { title: "Kitchen & Essentials First", desc: "We prioritize the kitchen, bathrooms, and bedrooms so your home is functional that first night — even if other rooms are still in process." },
                    { title: "Debris Removal", desc: "All boxes, packing paper, and bubble wrap removed from your new Ottawa home as part of the unpacking service. You don't deal with a mountain of cardboard." },
                  ].map(({ title, desc }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-2">{title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faq" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">FAQ</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-8">FAQ — Ottawa Packing Services</h2>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button className="w-full flex items-center justify-between gap-4 p-5 text-left hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`button-faq-packing-${i}`}>
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
            <h2 className="text-3xl font-bold text-white mb-3">Ottawa's Professional Packing Team</h2>
            <p className="text-white/55 mb-8 max-w-lg mx-auto">We pack it. We move it. We unpack it. You just arrive. 5.0 stars · 400+ reviews.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Book Packing Service <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>
      </div>
      <SharedFooter />
    </>
  );
}
