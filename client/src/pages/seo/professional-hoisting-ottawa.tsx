import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, Star, ArrowRight, ChevronDown, CheckCircle2, ChevronRight,
  Shield, Award, AlertTriangle, MapPin, Package, TruckIcon, Wrench
} from "lucide-react";
import fleetImg from "@assets/prestige-fleet_1771975522124.webp";

const TOC_ITEMS = [
  { id: "what-is-hoisting",   title: "What Is Professional Hoisting?" },
  { id: "when-needed",        title: "When Hoisting Is Needed" },
  { id: "our-process",        title: "Our Hoisting Process" },
  { id: "items-we-hoist",     title: "Items We Hoist" },
  { id: "cost",               title: "Hoisting Cost in Ottawa" },
  { id: "safety",             title: "Safety & Insurance" },
  { id: "faq",                title: "FAQ" },
];

const FAQS = [
  { q: "What is furniture hoisting?", a: "Furniture hoisting is the process of lifting large, heavy, or awkward items vertically — typically through a window, balcony opening, or over a roofline — when the item cannot be moved through interior staircases or doorways. It requires specialized rigging equipment, trained operators, and specific safety protocols. It's most commonly needed in Ottawa for large sofas, pianos, pool tables, and oversized appliances in heritage homes or condo buildings." },
  { q: "Why would I need hoisting in Ottawa?", a: "Ottawa's heritage homes in The Glebe, Westboro, Centretown, and Sandy Hill were built in the Victorian and Edwardian eras — before modern furniture dimensions. Staircases are frequently too narrow for contemporary sofas, king-size mattress frames, and large appliances. Ottawa's growing condo market also creates situations where freight elevators are too small for certain items. Hoisting provides access when interior routes are physically impossible." },
  { q: "Is hoisting safe?", a: "When performed by trained riggers with proper equipment, hoisting is safe and standard practice in the Ottawa moving industry. Our hoisting crew uses industrial-grade rigging straps, rated lifting equipment, and established safety protocols. We obtain any required permits for work over sidewalks or public space. All hoisting work is covered by our commercial general liability insurance and cargo insurance." },
  { q: "How much does hoisting cost in Ottawa?", a: "Hoisting in Ottawa typically costs $300–$800+ depending on the item being hoisted, the height of the lift, the access complexity, and whether permits are required. A single sofa hoist through a second-floor window runs $300–$500. A piano hoist or large appliance requiring more equipment and crew time runs $500–$1,000+. All hoisting in Ottawa is quoted individually after a site assessment." },
  { q: "What items can be hoisted?", a: "We've hoisted sofas, sectional couches, pianos (upright and baby grand), pool tables, hot tubs, large appliances (refrigerators, commercial ranges), heavy safes, oversized artwork, and industrial furniture. If it fits within our rated equipment capacity and the building access allows rigging attachment, we can hoist it." },
  { q: "Do you need permits for hoisting in Ottawa?", a: "For hoisting that requires equipment or operations over a public sidewalk or road — including crane setups — a permit from the City of Ottawa (Road Occupancy Permit) may be required. For simple window-to-window hoisting within private property, permits are typically not required. Our team assesses each project and handles all permit applications when required." },
  { q: "How far in advance should I book hoisting in Ottawa?", a: "Hoisting projects should be booked at least 1–2 weeks in advance to allow for site assessment, equipment preparation, and permit applications if required. Complex hoisting projects (multi-floor lifts, crane involvement) may require more lead time. Contact us as early as possible if you suspect hoisting may be needed for your Ottawa move." },
];

export default function ProfessionalHoistingOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } }))
  };

  return (
    <>
      <Helmet>
        <title>Professional Hoisting Ottawa | Furniture & Piano Hoisting | Prestige Moving</title>
        <meta name="description" content="Professional furniture and piano hoisting in Ottawa. When staircases and elevators won't work — Prestige Moving's trained hoisting crew gets it done. Insured, permitted, safe." />
        <meta name="keywords" content="professional hoisting Ottawa, furniture hoisting Ottawa, piano hoisting Ottawa, sofa hoisting Ottawa, Ottawa movers hoisting, balcony furniture lift Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/professional-hoisting-ottawa" />
        <meta property="og:title" content="Professional Hoisting Ottawa | Furniture & Piano Hoisting" />
        <meta property="og:description" content="When stairs and elevators won't work — Prestige Moving's professional hoisting team gets the job done safely." />
        <meta property="og:url" content="https://prestigemoving.ca/professional-hoisting-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />
      <div className="min-h-screen bg-white">

        <section className="relative h-[460px] flex items-end pb-16">
          <img src={fleetImg} alt="Professional furniture hoisting Ottawa" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1620]/95 via-[#0d1620]/65 to-[#0d1620]/30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <Wrench className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Ottawa Specialty Service · Fully Insured</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 max-w-3xl leading-tight">Professional Hoisting Ottawa</h1>
            <p className="text-lg text-white/70 max-w-xl mb-8">When stairs and elevators won't fit your sofa, piano, or appliance — Prestige Moving's trained hoisting crew gets it done safely.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">Get a Hoisting Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <section className="bg-[#1A2332] py-5">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "$300–$800+", label: "Hoisting cost range" },
              { value: "Fully Insured", label: "All hoisting covered" },
              { value: "Permit Ready", label: "City of Ottawa permits" },
              { value: "5.0 ★",       label: "Ottawa-wide" },
            ].map(({ value, label }, i) => (
              <div key={i}><div className="text-lg font-bold text-[#C5A572]">{value}</div><div className="text-white/50 text-xs mt-0.5">{label}</div></div>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="xl:flex gap-12 items-start">
            <TableOfContents items={TOC_ITEMS} />
            <div className="flex-1 min-w-0 space-y-16">

              <section id="what-is-hoisting" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Wrench className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">The Service Explained</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">What Is Professional Furniture Hoisting?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">Professional hoisting is the vertical lifting of large, heavy, or oversized items through a window opening, over a balcony railing, or through a rooftop access point — bypassing interior staircases that are too narrow, doorways that are too small, or elevators that can't accommodate the item's dimensions.</p>
                <p className="text-gray-600 leading-relaxed mb-4">In Ottawa, hoisting is most commonly required in two types of properties: heritage homes in The Glebe, Westboro, Centretown, and Sandy Hill (built with Victorian-era narrow staircases that pre-date modern furniture dimensions), and condo buildings where freight elevators have strict size limits that exclude contemporary sectional sofas, some pianos, and large commercial-grade appliances.</p>
                <p className="text-gray-600 leading-relaxed mb-4">Hoisting requires specialized rigging equipment, trained operators familiar with weight distribution and load angles, and insurance coverage specifically extending to hoisting operations. It is not a service available from most general Ottawa moving companies — it requires both dedicated equipment and specific crew training.</p>
              </section>

              <section id="when-needed" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <AlertTriangle className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Common Scenarios</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">When Hoisting Is Needed in Ottawa</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { scenario: "Heritage Home Narrow Staircases", desc: "Ottawa's Victorian and Edwardian homes (pre-1950 construction) in The Glebe, Westboro, Centretown, and Sandy Hill frequently have staircases too narrow for modern sectional sofas, king-size bed frames, and large appliances. Hoisting through a front window or second-floor window is often the only option." },
                    { scenario: "Condo Balcony Access", desc: "Some Ottawa condo units have balconies accessible from a lower level where a crane or external lift can be positioned. Hoisting furniture over the balcony railing avoids the freight elevator entirely and is faster for large items." },
                    { scenario: "Freight Elevator Limitations", desc: "Ottawa condo freight elevators have rated weight capacities and dimensional limits. Items like commercial refrigerators, pool tables, large gun safes, and some piano types exceed elevator specifications and require alternative access." },
                    { scenario: "Upper-Floor Window Access", desc: "For items that won't turn the staircase corner but will fit through a window opening, hoisting through the window is often cleaner and safer than attempting to force the item through a tight interior turn with risk of wall or item damage." },
                  ].map(({ scenario, desc }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-2">{scenario}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="our-process" className="scroll-mt-24 bg-gray-50/70 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Our Hoisting Process</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">How We Hoist in Ottawa</h2>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Site Assessment", desc: "We assess the property before quoting. This includes measuring the item, the access window/balcony opening, the outdoor clearance available for equipment positioning, and any overhead obstructions (wires, trees, neighbouring structures)." },
                    { step: "02", title: "Equipment Selection", desc: "Based on the item weight and lift height, we select appropriate rigging straps, rated lifting equipment, and the required crew size. Heavier items at greater heights require more equipment and crew." },
                    { step: "03", title: "Permit Application (if required)", desc: "For operations over public sidewalks or roads, we apply for a City of Ottawa Road Occupancy Permit. Most residential hoisting doesn't require permits — we'll advise based on your specific access." },
                    { step: "04", title: "Property Protection", desc: "Window frames, balcony railings, and exterior wall surfaces are protected before the hoist begins. The item itself is wrapped and secured in rigging straps rated for the weight." },
                    { step: "05", title: "Controlled Vertical Lift", desc: "Multiple crew members manage the lift — one coordinating outside (directing the external lift), one guiding the item from the interior access point. Communication is continuous throughout the lift." },
                    { step: "06", title: "Placement & Completion", desc: "Once through the window or over the balcony, the item is guided into position, unwrapped, and placed according to your instructions. All rigging equipment is removed and the work area is fully restored." },
                  ].map(({ step, title, desc }, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-[#1A2332] flex items-center justify-center shrink-0 text-[#C5A572] font-bold text-sm">{step}</div>
                      <div><div className="font-bold text-[#1A2332] text-sm mb-1">{title}</div><div className="text-gray-500 text-sm leading-relaxed">{desc}</div></div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="items-we-hoist" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Package className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Items We Hoist</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Items We Hoist in Ottawa</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["Large sectional sofas","Upright pianos","Baby grand pianos","Pool tables","Hot tubs (compact)","Commercial refrigerators","Large gun safes","King-size bed frames","Oversized artwork","Industrial shelving","Large aquariums","Commercial ranges"].map(item => (
                    <div key={item} className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C5A572] shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section id="cost" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <TruckIcon className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Ottawa Hoisting Pricing</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Hoisting Cost in Ottawa</h2>
                <p className="text-gray-600 leading-relaxed mb-6">All hoisting is quoted individually after a site assessment. The following ranges are indicative — final pricing depends on item weight, lift height, access complexity, and permit requirements.</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { item: "Single Item (Sofa, Appliance)", range: "$300–$500", notes: "Up to 2-floor lift, standard window/balcony access" },
                    { item: "Piano Hoisting", range: "$500–$900", notes: "Upright or baby grand; extra rigging and crew required" },
                    { item: "Complex / Multi-Item Hoist", range: "$800–$1,500+", notes: "Permit required, crane involvement, or 3+ floor heights" },
                  ].map(({ item, range, notes }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-1">{item}</div>
                      <div className="text-2xl font-bold text-[#C5A572] mb-2">{range}</div>
                      <div className="text-xs text-gray-400">{notes}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="safety" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Shield className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Safety & Coverage</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Safety &amp; Insurance for Ottawa Hoisting</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Rated Equipment Only", desc: "Every strap, clamp, and lifting component is rated well above the maximum expected load. We don't improvise with general rigging equipment — all hoisting equipment is purpose-built for vertical furniture lifts." },
                    { title: "Cargo Insurance Coverage", desc: "All items being hoisted are covered under our cargo insurance for the duration of the lift. Any damage to the item during the hoisting operation is covered — full claims documentation provided if needed." },
                    { title: "Property Protection", desc: "Window frames, balcony railings, and wall surfaces are protected before the lift begins. Any incidental damage to your property during a Prestige Moving hoist is covered under our commercial general liability insurance." },
                    { title: "WSIB Certified Crew", desc: "All crew members involved in hoisting operations are covered under current WSIB certification. You are not liable for any workplace injuries sustained during the hoisting operation." },
                  ].map(({ title, desc }, i) => (
                    <div key={i} className="flex gap-3 p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <Shield className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                      <div><div className="font-bold text-[#1A2332] text-sm mb-1">{title}</div><div className="text-gray-500 text-sm leading-relaxed">{desc}</div></div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faq" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">FAQ</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-8">FAQ — Professional Hoisting Ottawa</h2>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button className="w-full flex items-center justify-between gap-4 p-5 text-left hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`button-faq-hoisting-${i}`}>
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
            <h2 className="text-3xl font-bold text-white mb-3">When the Staircase Says No — We Say Yes</h2>
            <p className="text-white/55 mb-8 max-w-lg mx-auto">Professional hoisting anywhere in Ottawa. Insured, permitted, and done right.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Get Hoisting Quote <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>
      </div>
      <SharedFooter />
    </>
  );
}
