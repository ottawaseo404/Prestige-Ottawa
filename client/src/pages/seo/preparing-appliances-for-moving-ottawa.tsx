import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, Star, ArrowRight, ChevronDown, CheckCircle2, AlertTriangle, Clock, Shield, Package, Wrench
} from "lucide-react";
import teamImg from "@assets/prestige_moving_1772836136864.jpg";

const TOC_ITEMS = [
  { id: "fridge",         title: "Refrigerator Preparation" },
  { id: "washer-dryer",   title: "Washer & Dryer Preparation" },
  { id: "dishwasher",     title: "Dishwasher Preparation" },
  { id: "stove",          title: "Stove & Oven Preparation" },
  { id: "small-appliances", title: "Small Appliances" },
  { id: "timeline",       title: "Preparation Timeline" },
  { id: "what-movers-do", title: "What Movers Handle vs. You" },
  { id: "faq",            title: "FAQ" },
];

const FAQS = [
  { q: "How far in advance should I defrost my fridge before moving?", a: "Start defrosting your refrigerator 24–48 hours before moving day. Turn the temperature controls off 24 hours before the move. This gives the freezer sufficient time to thaw completely and allows moisture to evaporate so the interior is dry when the fridge is loaded. A fridge that hasn't been defrosted will leak water in the moving truck." },
  { q: "Can the movers disconnect my appliances?", a: "Prestige Moving can assist with disconnecting standard appliances. However, gas appliance disconnection (gas ranges, gas dryers) must be done by a licensed gas technician in Ontario — we cannot legally disconnect gas lines. Washing machine hose disconnection and standard electrical appliance disconnection are typically handled by our crew as part of your move." },
  { q: "Do appliances need to stand upright during moving?", a: "Refrigerators should always be transported upright. Laying a fridge on its side can allow compressor oil to migrate into the refrigerant lines, causing damage that may not manifest until the appliance runs for several hours. If a fridge must be tilted (to navigate a doorway), it should be returned upright and left standing for 4+ hours before running. Washers and dryers can typically be transported on their side if necessary, but check your manufacturer manual." },
  { q: "How long should I wait before turning on my fridge after moving?", a: "Wait at least 3–4 hours before turning on your refrigerator after moving. If the fridge was tilted at any point during transport, wait a minimum of 12 hours. This allows any compressor oil that migrated into refrigerant lines to drain back into the compressor before it runs." },
  { q: "Do washing machines need special preparation for moving?", a: "Yes. Washing machines must have a transit bolt (also called a shipping bolt or drum bolt) installed before moving to prevent the drum from moving freely inside the machine during transport. Without transit bolts, the drum's movement during transport can damage the suspension system and internal bearings. If you no longer have your transit bolts, check with the manufacturer or an appliance repair company. They typically cost $5–$25 as replacement parts." },
  { q: "Can my Ottawa movers move a gas stove?", a: "We can move a disconnected gas stove. Gas disconnection must be performed by a licensed gas technician (the Enbridge Gas distributor line, or a licensed contractor). Once disconnected and capped, we can wrap, load, transport, and position the stove at your new Ottawa address. Gas reconnection at the new address also requires a licensed technician." },
  { q: "Do I need to prepare a dishwasher for moving?", a: "Yes. Disconnect the dishwasher water supply line and drainage hose, and dry the interior thoroughly before the move. Running a cleaning cycle the night before and leaving the door open overnight helps ensure it's dry. Secure the racks with tape or zip ties to prevent them from sliding during transport." },
];

export default function PreparingAppliancesMovingOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const schema = {
    "@context": "https://schema.org", "@type": "HowTo",
    "name": "How to Prepare Appliances for Moving in Ottawa",
    "description": "Step-by-step guide to preparing kitchen and laundry appliances for your Ottawa move.",
    "step": [
      { "@type": "HowToStep", "name": "Defrost refrigerator", "text": "24–48 hours before moving, turn off the fridge and defrost completely." },
      { "@type": "HowToStep", "name": "Install washer transit bolts", "text": "Re-install drum transit bolts before the moving crew arrives." },
      { "@type": "HowToStep", "name": "Disconnect dishwasher", "text": "Disconnect water supply and drainage lines, tape racks closed." },
    ]
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } })) };

  return (
    <>
      <Helmet>
        <title>Preparing Appliances for Moving Ottawa (2026 Guide) | Prestige Moving</title>
        <meta name="description" content="Step-by-step guide to preparing your fridge, washer, dryer, dishwasher, and stove for moving day in Ottawa. What to do, when to do it, and what your movers handle." />
        <meta name="keywords" content="preparing appliances for moving Ottawa, how to move a fridge Ottawa, washer dryer moving Ottawa, appliance moving Ottawa, moving appliances Ottawa guide" />
        <link rel="canonical" href="https://prestigemoving.ca/preparing-appliances-for-moving-ottawa" />
        <meta property="og:title" content="Preparing Appliances for Moving Ottawa (2026 Guide)" />
        <meta property="og:description" content="Complete guide to preparing refrigerators, washers, dryers, and dishwashers for moving day in Ottawa." />
        <meta property="og:url" content="https://prestigemoving.ca/preparing-appliances-for-moving-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />
      <div className="min-h-screen bg-white">

        <section className="relative h-[420px] flex items-end pb-16">
          <img src={teamImg} alt="Preparing appliances for moving Ottawa" className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-[#0d1620]/82" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <Wrench className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Ottawa Moving Guide · Appliance Prep</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 max-w-3xl leading-tight">How to Prepare Your Appliances for Moving Day in Ottawa</h1>
            <p className="text-lg text-white/70 max-w-xl mb-8">Fridge, washer, dryer, dishwasher, stove — exactly what to do, when to do it, and what to leave for the crew.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">Book Your Ottawa Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="xl:flex gap-12 items-start">
            <TableOfContents items={TOC_ITEMS} />
            <div className="flex-1 min-w-0 space-y-16">

              <div>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">Appliances are among the most expensive items in your Ottawa home — and some of the most likely to be damaged during a move if not properly prepared. A refrigerator loaded with water from an incomplete defrost, a washing machine with its drum loose from missing transit bolts, or a dishwasher with standing water inside can all cause damage to themselves, to your other belongings, and to your new home's floors.</p>
                <p className="text-gray-600 leading-relaxed">This guide covers every major appliance in your Ottawa home — what preparation is required, how far in advance to start, and exactly what the Ottawa moving crew handles versus what you need to do yourself.</p>
              </div>

              <section id="fridge" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Package className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Refrigerator</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Refrigerator Moving Preparation</h2>
                <p className="text-gray-600 leading-relaxed mb-6">The refrigerator is the most preparation-intensive appliance in your Ottawa move. An improperly prepared fridge will leak water throughout the moving truck and can sustain compressor damage if transported incorrectly.</p>
                <div className="space-y-3">
                  {[
                    { timing: "48 hrs before", task: "Consume, donate, or dispose of perishable food", detail: "Plan your meals in the days leading up to the move to empty the fridge of perishables. Items that can't be consumed can be donated to a food bank (many Ottawa food banks accept non-perishables; fresh food can be offered to neighbours)." },
                    { timing: "24 hrs before", task: "Turn off fridge and begin defrosting", detail: "Set both fridge and freezer temperature controls to 'off' or unplug the unit. For french door models with independent controls, turn off both zones. Place towels around the base to absorb condensation as ice melts." },
                    { timing: "Night before", task: "Dry the interior completely", detail: "Once fully defrosted, wipe the interior dry — shelves, walls, freezer compartment, and drain tray. A wet interior will create puddles in the truck. Leave the door open overnight if possible to allow full air drying." },
                    { timing: "Moving day", task: "Secure removable shelves and drawers", detail: "Remove glass shelves and pack them separately (wrapped in moving blankets). Tape the refrigerator doors closed with painter's tape or stretch wrap — never use regular tape which can damage the finish." },
                    { timing: "After the move", task: "Wait 3–12 hours before running the fridge", detail: "A fridge transported upright: wait 3–4 hours. A fridge tilted at any point during transport: wait 12+ hours. This allows compressor oil to settle back into the compressor before the unit runs." },
                  ].map(({ timing, task, detail }, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="min-w-[100px] text-[#C5A572] text-xs font-bold pt-0.5">{timing}</div>
                      <div><div className="font-bold text-[#1A2332] text-sm mb-1">{task}</div><div className="text-gray-500 text-sm leading-relaxed">{detail}</div></div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800 flex gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div><strong>Always transport a fridge upright.</strong> Tilting a refrigerator on its side causes compressor oil to migrate into refrigerant lines. If tilted briefly to pass through a doorway, leave the fridge standing upright for at least 12 hours before turning it on.</div>
                </div>
              </section>

              <section id="washer-dryer" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Wrench className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Washer & Dryer</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Washing Machine &amp; Dryer Preparation</h2>
                <p className="text-gray-600 leading-relaxed mb-4">The washing machine is the most commonly damaged appliance in DIY or poorly-prepared moves. The drum bolts that secure the drum during transport are almost always missing — because they were removed when the machine was installed and discarded.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Re-Install Transit Bolts (Critical)", urgency: "high", desc: "Washing machine drums must be secured with transit/drum bolts before transport. Without them, the drum moves freely inside the machine during the move, damaging the suspension system and internal bearings. Find your bolts (often stored in a bag in the machine's manual or behind the machine), or order replacement bolts for your model (manufacturer part number required, typically $5–$25). If you don't know your model's bolt type, a washing machine repair company can supply and install them." },
                    { title: "Run a Final Cleaning Cycle", urgency: "medium", desc: "Run a hot water cleaning cycle (without laundry) the day before the move to eliminate standing water and residue. Leave the lid or door open overnight so the drum and seals dry completely." },
                    { title: "Disconnect Water Supply Lines", urgency: "standard", desc: "Turn off water supply valves (hot and cold) behind the machine. Disconnect the supply hoses and drain any remaining water from them. Have a towel ready — residual water will drain from the hoses when disconnected." },
                    { title: "Clear the Dryer Lint Trap", urgency: "standard", desc: "Clean the lint trap and wipe down the dryer drum. Disconnect the dryer vent hose from the wall connection (usually a 4-inch flexible metal duct). For electric dryers, our crew handles the standard 240V plug. For gas dryers, a licensed gas technician must disconnect the gas line before the crew can move the unit." },
                  ].map(({ title, urgency, desc }, i) => (
                    <div key={i} className={`p-5 rounded-xl border ${urgency === "high" ? "border-red-200 bg-red-50" : "border-gray-200 bg-gray-50"}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-[#1A2332] text-sm">{title}</div>
                        {urgency === "high" && <span className="text-xs px-2 py-0.5 rounded-full bg-red-200 text-red-800 font-bold">Critical</span>}
                      </div>
                      <div className="text-gray-600 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="dishwasher" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Dishwasher</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Dishwasher Moving Preparation</h2>
                <div className="space-y-3">
                  {[
                    { step: "Run a cleaning cycle the night before", detail: "Running an empty cleaning cycle removes food residue and leaves the interior fresh. Leave the door open overnight to dry completely." },
                    { step: "Secure the racks", detail: "Tape or zip-tie both the lower and upper racks to prevent them from sliding or ejecting during transport. Loose racks can damage the spray arms and interior." },
                    { step: "Disconnect water supply", detail: "Turn off the water supply valve under the sink. Disconnect the inlet water hose from the dishwasher and drain any residual water. Have a towel ready." },
                    { step: "Disconnect drain hose", detail: "Disconnect the drain hose from the sink drain or garbage disposal connection. Drain completely and cap or bag the end to prevent dripping." },
                    { step: "Note: Built-in dishwashers may require appliance company", detail: "Built-in dishwashers anchored to cabinetry may require an appliance technician for clean disconnection. Portable/countertop dishwashers are straightforward." },
                  ].map(({ step, detail }, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-6 h-6 rounded-full bg-[#1A2332] flex items-center justify-center shrink-0 text-[#C5A572] text-xs font-bold">{i + 1}</div>
                      <div><div className="font-bold text-[#1A2332] text-sm mb-0.5">{step}</div><div className="text-gray-500 text-sm leading-relaxed">{detail}</div></div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="stove" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <AlertTriangle className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Stove & Oven</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Stove &amp; Oven Moving Preparation</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Electric Stove", detail: "Clean the stovetop and oven thoroughly. Remove grates and burner pans and pack them separately wrapped in paper. Our crew disconnects standard 240V electric range plugs and can assist with positioning for transport. Secure the oven door with stretch wrap or tape.", urgency: "standard" },
                    { title: "Gas Stove — Requires Licensed Technician", detail: "Gas disconnection in Ontario requires a licensed gas technician. Our crew cannot disconnect gas lines under any circumstances. Contact Enbridge or a licensed contractor to disconnect and cap your gas line before moving day. We then load, transport, and position the disconnected unit at your new address. Gas reconnection at the new address also requires a licensed technician.", urgency: "high" },
                  ].map(({ title, detail, urgency }, i) => (
                    <div key={i} className={`p-5 rounded-xl border ${urgency === "high" ? "border-red-200 bg-red-50" : "border-gray-200 bg-gray-50"}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-[#1A2332] text-sm">{title}</div>
                        {urgency === "high" && <span className="text-xs px-2 py-0.5 rounded-full bg-red-200 text-red-800 font-bold">Requires Technician</span>}
                      </div>
                      <div className="text-gray-600 text-sm leading-relaxed">{detail}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="small-appliances" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Package className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Small Appliances</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Small Appliance Moving Tips</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { item: "Coffee maker", tip: "Empty water reservoir completely. Remove carafe and pack separately in bubble wrap." },
                    { item: "Blender / Food processor", tip: "Remove blades and pack separately, clearly labelled. Blades in moving boxes are a safety hazard for anyone unpacking." },
                    { item: "Stand mixer", tip: "Remove bowl and beaters, pack separately. Wrap in moving blankets — stand mixers are heavy and the finish scratches easily." },
                    { item: "Microwave", tip: "Remove the turntable plate and pack it separately. Pad the interior with folded towels to prevent glass shelf damage." },
                    { item: "Television", tip: "Original box is ideal. Otherwise, use a sized TV moving box with interior padding. Never lay a flat-screen face-down." },
                    { item: "Air conditioner (window unit)", tip: "Drain condensate water completely. Store in its original box or wrap thoroughly in moving blankets. Note: central AC units are fixed and are not moved with the household." },
                  ].map(({ item, tip }, i) => (
                    <div key={i} className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                      <div><div className="font-bold text-[#1A2332] text-sm mb-0.5">{item}</div><div className="text-gray-500 text-sm leading-relaxed">{tip}</div></div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="timeline" className="scroll-mt-24 bg-gray-50/70 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Clock className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Appliance Prep Timeline</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Ottawa Appliance Moving Preparation Timeline</h2>
                <div className="space-y-4">
                  {[
                    { time: "1 Week Before", tasks: ["Order washing machine transit bolts if missing (part number from manufacturer)", "Schedule gas disconnection by a licensed technician if moving a gas range or dryer", "Research appliance setup at your new Ottawa address (gas hookup, electrical compatibility)"] },
                    { time: "2 Days Before", tasks: ["Run dishwasher cleaning cycle; leave door open to dry", "Run washer cleaning cycle; re-install transit bolts", "Clean stove interior and remove grates for separate packing"] },
                    { time: "24 Hours Before", tasks: ["Turn off refrigerator and begin defrost", "Place towels around fridge to catch condensation water", "Confirm washer transit bolts are installed"] },
                    { time: "Morning of Move", tasks: ["Wipe fridge interior dry, secure door with stretch wrap", "Disconnect washer water supply hoses", "Disconnect dishwasher water and drain lines", "Secure dishwasher racks with tape or zip ties", "Confirm gas stove is disconnected (if applicable)"] },
                    { time: "After the Move", tasks: ["Wait 3–4 hours before turning on fridge (12 hrs if tilted)", "Reconnect washer hoses and run test cycle before removing transit bolts", "Have gas line reconnected by licensed technician before running gas appliances"] },
                  ].map(({ time, tasks }, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white border border-gray-100">
                      <div className="font-bold text-[#C5A572] text-sm mb-2">{time}</div>
                      <ul className="space-y-1">{tasks.map((t, j) => <li key={j} className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />{t}</li>)}</ul>
                    </div>
                  ))}
                </div>
              </section>

              <section id="what-movers-do" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Shield className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Division of Responsibility</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">What Movers Handle vs. What You Prepare</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { side: "Your Crew Handles", items: ["Moving blanket wrapping of all appliances", "Loading and securing in the truck", "Unloading and positioning in the new home", "Disconnecting standard electric appliance plugs", "Reconnecting standard appliance connections at the new address", "Levelling appliances at destination"], color: "green" },
                    { side: "You Arrange (Outside Our Scope)", items: ["Gas line disconnection/reconnection (licensed technician required by Ontario law)", "Refrigerator defrost and interior dry-out", "Washing machine transit bolt installation", "Dishwasher water/drain disconnection", "Appliance cleaning before the move", "Waiting period before running the fridge post-move"], color: "blue" },
                  ].map(({ side, items, color }, i) => (
                    <div key={i} className={`p-5 rounded-xl border ${color === "green" ? "border-green-200 bg-green-50" : "border-blue-200 bg-blue-50"}`}>
                      <div className={`font-bold text-sm mb-3 ${color === "green" ? "text-green-900" : "text-blue-900"}`}>{side}</div>
                      <ul className="space-y-1.5">{items.map((item, j) => <li key={j} className={`flex items-start gap-2 text-sm ${color === "green" ? "text-green-800" : "text-blue-800"}`}><CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />{item}</li>)}</ul>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faq" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">FAQ</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-8">FAQ — Preparing Appliances for Moving in Ottawa</h2>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button className="w-full flex items-center justify-between gap-4 p-5 text-left hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`button-faq-appliances-${i}`}>
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
            <h2 className="text-3xl font-bold text-white mb-3">Let Prestige Handle the Heavy Stuff</h2>
            <p className="text-white/55 mb-8 max-w-lg mx-auto">You prep the appliances. We move everything else. 5.0 stars · 400+ Ottawa reviews.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Book Your Move <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>
      </div>
      <SharedFooter />
    </>
  );
}
