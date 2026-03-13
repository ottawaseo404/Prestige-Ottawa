import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, Star, ArrowRight, ChevronDown, CheckCircle2, Calendar,
  Clock, Package, MapPin, Shield, TruckIcon, ArrowLeft
} from "lucide-react";
import teamImg from "@assets/prestige_moving_1772836136864.jpg";

const TOC_ITEMS = [
  { id: "8-weeks",    title: "8 Weeks Before" },
  { id: "6-weeks",    title: "6 Weeks Before" },
  { id: "4-weeks",    title: "4 Weeks Before" },
  { id: "2-weeks",    title: "2 Weeks Before" },
  { id: "1-week",     title: "1 Week Before" },
  { id: "2-3-days",   title: "2–3 Days Before" },
  { id: "moving-day", title: "Moving Day" },
  { id: "after-move", title: "After the Move" },
];

const CHECKLIST_WEEKS = [
  {
    id: "8-weeks",
    phase: "8 Weeks Before Your Ottawa Move",
    icon: Calendar,
    color: "blue",
    intro: "Eight weeks out is the optimal time to start planning an Ottawa move. This is when you have the most flexibility for everything — booking windows, scheduling flexibility, and moving company availability.",
    tasks: [
      { task: "Research and compare Ottawa moving companies", detail: "Get quotes from 2–3 Ottawa movers. Compare hourly rates, insurance coverage, whether they use employees or subcontractors, and reviews. Don't book the cheapest — book the best value." },
      { task: "Book your Ottawa moving company", detail: "Once you've selected a mover, confirm the date and get a written contract. Most Ottawa moving companies require a booking deposit of 10–20%. Peak season dates (May–September, month-ends) can book 8–12 weeks out." },
      { task: "Start the declutter", detail: "Go through each room with 'keep', 'donate', 'sell', and 'dispose' categories. Every item you declutter is one less item for the crew to move — reducing time and cost." },
      { task: "Research your new Ottawa neighbourhood", detail: "If you're new to Ottawa, research transit access, parking regulations, school district, parking permit requirements, and your building's move-in rules (if condo)." },
      { task: "Notify major institutions of upcoming address change", detail: "Your employer, bank, CRA (via My Account), Service Canada for benefits, and any subscription services. CRA address updates take several weeks to process." },
      { task: "Request school records if moving with children", detail: "Ottawa Catholic and Ottawa-Carleton school boards require transfer documentation. Request records from your current school as early as possible." },
    ]
  },
  {
    id: "6-weeks",
    phase: "6 Weeks Before Your Ottawa Move",
    icon: Clock,
    color: "indigo",
    intro: "Six weeks out is when logistics preparation intensifies — securing packing materials, finalizing dates, and starting the physical preparation.",
    tasks: [
      { task: "Arrange packing materials", detail: "Source boxes (purchased, found free at Ottawa grocery stores or Facebook Marketplace, or included in professional packing service). You'll need more than you think — a 2-bedroom typically needs 30–50 boxes." },
      { task: "Book elevator at new Ottawa condo (if applicable)", detail: "Many Ottawa condo buildings require elevator bookings 2–6 weeks in advance. Contact your building management and confirm your elevator reservation in writing." },
      { task: "Book elevator at origin Ottawa condo (if applicable)", detail: "Moving out requires an elevator booking just like moving in. Contact your building office immediately to reserve the elevator for your move-out date." },
      { task: "Arrange parking permits if needed", detail: "Ottawa street parking requires a moving permit for large truck parking in some areas. Contact the City of Ottawa's parking authority if your street requires a no-parking order for the moving truck." },
      { task: "Plan for specialty items", detail: "If you have a piano, pool table, hot tub, or other specialty items — confirm with your mover that they have the specific equipment. Schedule hoisting assessment if required." },
      { task: "Start packing non-essential rooms", detail: "Guest bedroom, storage room, garage, and seasonal items can be packed early. Label every box on the top and two sides with room name and contents." },
    ]
  },
  {
    id: "4-weeks",
    phase: "4 Weeks Before Your Ottawa Move",
    icon: Package,
    color: "violet",
    intro: "Four weeks out — administrative tasks are completed and physical packing accelerates. This is the time to update all official documentation.",
    tasks: [
      { task: "Forward mail with Canada Post", detail: "Canada Post mail forwarding takes 3–7 business days to process. Submit your change of address online at canadapost.ca to forward all mail to your new Ottawa address." },
      { task: "Update Ontario driver's licence address", detail: "Ontario law requires updating your driver's licence address within 6 days of moving. ServiceOntario can be done in person or online at ontario.ca/page/change-your-address-drivers-licence." },
      { task: "Update vehicle registration", detail: "Ontario vehicle registration address must be updated within 6 days of moving. Update at ServiceOntario concurrently with your driver's licence." },
      { task: "Notify utilities — old and new addresses", detail: "Ottawa utilities to update: Hydro Ottawa (electricity), Enbridge (gas), Rogers/Bell/Videotron (internet and cable). Schedule disconnection at origin and connection at destination." },
      { task: "Book professional packing service (if using)", detail: "If you've booked professional packing with your mover, confirm the packing date (typically the day before the move). Confirm what the crew is packing vs. what you're packing yourself." },
      { task: "Continue decluttering and packing", detail: "Work through the home systematically. By 4 weeks out, all non-essential items should be packed. Leave only daily-use items unpacked." },
    ]
  },
  {
    id: "2-weeks",
    phase: "2 Weeks Before Your Ottawa Move",
    icon: TruckIcon,
    color: "amber",
    intro: "Two weeks out — confirm all logistics are locked in and begin appliance preparation.",
    tasks: [
      { task: "Confirm moving company booking", detail: "Call your Ottawa moving company to reconfirm the date, time, crew size, and address details. Confirm any special requirements you communicated at booking." },
      { task: "Order washing machine transit bolts if missing", detail: "Drum transit bolts must be re-installed before the washing machine is moved. If you discarded yours (as most people do), order replacements now — they ship in 3–7 days." },
      { task: "Schedule gas appliance disconnection", detail: "If you have a gas range, gas dryer, or gas fireplace — a licensed gas technician must disconnect the gas line before moving day. Book this appointment now; gas technician availability can be limited." },
      { task: "Return borrowed items and retrieve yours", detail: "Library books, borrowed equipment from friends, items left at the dry cleaner or repair shop — retrieve everything before the chaos of moving week." },
      { task: "Begin packing the kitchen (non-essentials)", detail: "Pack everything except daily-use items. Good china, rarely used appliances, special occasion items, and pantry non-perishables can all be packed now." },
      { task: "Pack artwork and fragile items", detail: "Picture boxes for framed artwork, bubble wrap for fragile decorative items. Label boxes 'FRAGILE' and 'THIS SIDE UP' on all sides." },
    ]
  },
  {
    id: "1-week",
    phase: "1 Week Before Your Ottawa Move",
    icon: MapPin,
    color: "orange",
    intro: "One week out — the pace accelerates significantly. Your home should be almost entirely packed, with only daily essentials remaining.",
    tasks: [
      { task: "Start defrosting the fridge (if applicable)", detail: "Turn off the refrigerator 24–48 hours before moving day (depending on ice buildup). Place towels around the base to catch water as the freezer thaws." },
      { task: "Pack all but daily essentials", detail: "Every room except daily-use items should be packed, sealed, and labelled. Create a 'load last, unload first' box with moving day essentials (coffee maker, phone chargers, toilet paper, paper towels)." },
      { task: "Disassemble furniture you can manage yourself", detail: "Bed frames, dining tables, IKEA furniture — anything you can disassemble reduces crew time on moving day. Hardware in labelled ziplock bags taped to the matching piece." },
      { task: "Confirm Ottawa parking arrangements for moving day", detail: "Confirm moving truck parking at origin and destination addresses. If permits were required, confirm they've been issued." },
      { task: "Arrange childcare and pet care for moving day", detail: "Children and pets underfoot on moving day increases both stress and moving time. Arrange care for the day so the crew can work efficiently." },
      { task: "Prepare your new address", detail: "Measure doorways for any furniture you're concerned about. Clean the new address before the moving truck arrives if possible." },
    ]
  },
  {
    id: "2-3-days",
    phase: "2–3 Days Before Moving Day",
    icon: Shield,
    color: "red",
    intro: "The final stretch. Your home should look almost empty except for what you're sleeping on and using daily.",
    tasks: [
      { task: "Dry refrigerator interior completely", detail: "Once the fridge is fully defrosted, wipe the interior dry. Leave the door open to allow full air drying. Tape the doors closed with stretch wrap or painter's tape (never duct tape)." },
      { task: "Run final dishwasher and washer cycle", detail: "Run a hot cleaning cycle in both, leave doors open overnight to dry completely. Secure dishwasher racks with tape or zip ties." },
      { task: "Do a room-by-room final check", detail: "Inside every cabinet, inside every closet, storage areas, outdoor storage, garage corners — find everything that got missed." },
      { task: "Prepare 'essential items' box or bag", detail: "Pack a box or bag you'll keep with you (not in the truck) containing: phone chargers, passport/documents, medications, valuables, snacks, toilet paper, paper towels, basic cleaning supplies, and a change of clothes." },
      { task: "Confirm moving day logistics with your crew", detail: "Final call with your Ottawa mover: confirm start time, confirm both addresses, confirm any changes since booking." },
    ]
  },
  {
    id: "moving-day",
    phase: "Moving Day",
    icon: TruckIcon,
    color: "green",
    intro: "Moving day in Ottawa. A well-prepared move means the crew can work efficiently and your day runs on schedule.",
    tasks: [
      { task: "Be present and available", detail: "Stay available to direct the crew. They'll have questions about what goes where, what gets loaded first, and any special handling requirements. Don't disappear for hours on moving day." },
      { task: "Protect floors at both addresses", detail: "Our crew brings floor protection. If you have particular concerns about new hardwood or fresh tile, mention this when the crew arrives." },
      { task: "Do a final walkthrough before the truck leaves", detail: "Walk every room, every closet, every cabinet before the crew seals the truck. Check: attic, basement, garage, outdoor storage, bathrooms, storage under stairs." },
      { task: "Document condition of old address", detail: "Photograph every room of your old home after it's empty. Time-stamped photos are valuable evidence in any landlord/tenant disputes about move-out condition." },
      { task: "Direct crew at the new address", detail: "Be at the new address before the truck arrives. Clearly indicate which room each piece of furniture and each box goes to — matching your labels reduces confusion." },
      { task: "Inspect deliveries before the crew leaves", detail: "Before the crew departs, walk through the delivery and note any damage on the moving paperwork. Don't sign a clean completion report if there's an issue to document." },
      { task: "Tip the crew if you're satisfied", detail: "Tipping is customary but not required. $20–$40 per mover for a full-day move is typical in Ottawa. Given directly to crew members, not to the company." },
    ]
  },
  {
    id: "after-move",
    phase: "After Your Ottawa Move",
    icon: CheckCircle2,
    color: "emerald",
    intro: "The physical move is done — now the administrative work to complete your transition to your new Ottawa address.",
    tasks: [
      { task: "Update CRA address online (My Account)", detail: "Canada Revenue Agency address change at canada.ca/en/revenue-agency. Important for tax documents, benefit payments (CCB, GST/HST credits), and NOA delivery." },
      { task: "Update Service Canada address", detail: "For CPP, EI, OAS, and related services. Update online at My Service Canada Account or by phone." },
      { task: "Update OHIP address", detail: "Ontario health card address update at ServiceOntario — online, by phone, or in person at a ServiceOntario centre." },
      { task: "Turn on fridge at new address", detail: "Wait 3–4 hours minimum after the fridge was transported (12 hours if tilted at any point) before turning it on." },
      { task: "Run washing machine test cycle", detail: "After reconnecting hoses and confirming no leaks, run a test cycle before removing transit bolts. Check all hose connections for drips." },
      { task: "Introduce yourself to neighbours", detail: "Ottawa is generally a friendly city. A brief introduction to immediate neighbours makes for a more pleasant community experience and builds the goodwill you'll need if moving trucks ever park awkwardly again." },
      { task: "Register children in Ottawa schools", detail: "Ottawa-Carleton District School Board (OCDSB) and Ottawa Catholic School Board (OCSB) registration for mid-year moves. Bring previous school records and proof of address." },
      { task: "Test all utilities at new address", detail: "Electricity, gas, water, internet — confirm all are functioning and on your name. Report any issues to Hydro Ottawa or Enbridge within 48 hours of the move." },
    ]
  },
];

export default function OttawaMovingChecklist() {

  const colorMap: Record<string, { bg: string; badge: string; border: string; badgeText: string }> = {
    blue:    { bg: "bg-blue-50",   badge: "bg-blue-100",   badgeText: "text-blue-800",   border: "border-blue-200" },
    indigo:  { bg: "bg-indigo-50", badge: "bg-indigo-100", badgeText: "text-indigo-800", border: "border-indigo-200" },
    violet:  { bg: "bg-violet-50", badge: "bg-violet-100", badgeText: "text-violet-800", border: "border-violet-200" },
    amber:   { bg: "bg-amber-50",  badge: "bg-amber-100",  badgeText: "text-amber-800",  border: "border-amber-200" },
    orange:  { bg: "bg-orange-50", badge: "bg-orange-100", badgeText: "text-orange-800", border: "border-orange-200" },
    red:     { bg: "bg-red-50",    badge: "bg-red-100",    badgeText: "text-red-800",    border: "border-red-200" },
    green:   { bg: "bg-green-50",  badge: "bg-green-100",  badgeText: "text-green-800",  border: "border-green-200" },
    emerald: { bg: "bg-emerald-50",badge: "bg-emerald-100",badgeText: "text-emerald-800",border: "border-emerald-200" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Ottawa Moving Checklist — Complete Timeline",
    "description": "Complete week-by-week Ottawa moving checklist covering 8 weeks before to after the move.",
    "step": CHECKLIST_WEEKS.map(w => ({ "@type": "HowToSection", "name": w.phase }))
  };

  return (
    <>
      <Helmet>
        <title>Ottawa Moving Checklist 2026 | Complete Moving Timeline Ottawa | Prestige Moving</title>
        <meta name="description" content="Complete Ottawa moving checklist for 2026. Week-by-week timeline from 8 weeks before to after the move — covering utilities, school registration, packing, and moving day." />
        <meta name="keywords" content="Ottawa moving checklist, moving checklist Ottawa, Ottawa move planning, Ottawa moving timeline, moving to Ottawa checklist, moving checklist 2026 Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-moving-checklist" />
        <meta property="og:title" content="Ottawa Moving Checklist 2026 | Complete Moving Timeline" />
        <meta property="og:description" content="The complete Ottawa moving checklist — every task, every week, from 8 weeks before to after the move." />
        <meta property="og:url" content="https://prestigemoving.ca/ottawa-moving-checklist" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />
      <div className="min-h-screen bg-white">

        <section className="relative h-[440px] flex items-end pb-16">
          <img src={teamImg} alt="Ottawa moving checklist — Prestige Moving crew" className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-[#0d1620]/92" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Ottawa Moving Guide · Updated 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 max-w-3xl leading-tight">Ottawa Moving Checklist 2026</h1>
            <p className="text-lg text-white/70 max-w-xl mb-8">The complete week-by-week Ottawa moving checklist — from booking your movers 8 weeks out to finishing your admin after the move.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">Book Your Ottawa Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <section className="bg-[#1A2332] py-5">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "8 Phases",  label: "Complete checklist" },
              { value: "50+",       label: "Action items" },
              { value: "Ottawa",    label: "Specific details" },
              { value: "2026",      label: "Updated for current year" },
            ].map(({ value, label }, i) => (
              <div key={i}><div className="text-lg font-bold text-[#C5A572]">{value}</div><div className="text-white/50 text-xs mt-0.5">{label}</div></div>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="xl:flex gap-12 items-start">
            <TableOfContents items={TOC_ITEMS} />
            <div className="flex-1 min-w-0 space-y-12">

              <p className="text-gray-600 leading-relaxed text-lg">
                Moving in Ottawa involves more administrative steps than most Canadians realize — from coordinating condo elevator bookings to navigating the CRA address update process to understanding Ottawa lease timelines. This checklist covers every task across every phase of an Ottawa move, organized by when it needs to happen so nothing falls through the cracks.
              </p>

              {CHECKLIST_WEEKS.map(({ id, phase, icon: Icon, color, intro, tasks }) => {
                const c = colorMap[color];
                return (
                  <section key={id} id={id} className={`scroll-mt-24 rounded-2xl border ${c.border} ${c.bg} p-8`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${c.badge} flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 ${c.badgeText}`} />
                      </div>
                      <h2 className="text-2xl font-bold text-[#1A2332]">{phase}</h2>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{intro}</p>
                    <div className="space-y-3">
                      {tasks.map(({ task, detail }, j) => (
                        <div key={j} className="flex gap-3 p-4 rounded-xl bg-white border border-white/80">
                          <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${c.badgeText}`} />
                          <div>
                            <div className="font-bold text-[#1A2332] text-sm mb-0.5">{task}</div>
                            <div className="text-gray-500 text-sm leading-relaxed">{detail}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}

              <div className="bg-[#1A2332] rounded-2xl p-8 text-center">
                <div className="flex justify-center gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-[#C5A572] fill-[#C5A572]" />)}</div>
                <h2 className="text-2xl font-bold text-white mb-2">Ready to Book Your Ottawa Move?</h2>
                <p className="text-white/55 mb-6 text-sm">Prestige Moving has helped thousands of Ottawa residents move without the stress. 5.0 stars, 400+ reviews.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">Book Your Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                  <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <SharedFooter />
    </>
  );
}
