import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, Star, ArrowRight, ChevronDown, CheckCircle2, Package,
  Shield, Clock, MapPin, Award, TruckIcon, DollarSign
} from "lucide-react";
import fleetImg from "@assets/prestige-fleet_1771975522124.webp";
import teamImg from "@assets/prestige_moving_1772836136864.jpg";

const TOC_ITEMS = [
  { id: "storage-with-moving",  title: "Moving with Storage in Ottawa" },
  { id: "when-storage-needed",  title: "When You Need Storage" },
  { id: "ottawa-storage-types", title: "Ottawa Storage Options" },
  { id: "how-it-works",         title: "How Move + Storage Works" },
  { id: "storage-checklist",    title: "Storage Preparation Checklist" },
  { id: "faq",                  title: "FAQ" },
];

const FAQS = [
  { q: "What does 'free storage with moving' mean in Ottawa?", a: "Some Ottawa moving companies offer a short period of free storage as part of a moving package — typically 30 days of complimentary storage in their secure facility. After the free period, standard storage rates apply. This is particularly common for Ottawa residents in a bridge scenario: your new home isn't available on move-out day, or your condo closing date doesn't align with your possession date. Always confirm the terms of the free storage offer in writing — the storage unit size, access hours, insurance coverage, and the exact cost after the free period." },
  { q: "Do Ottawa movers offer storage services?", a: "Some Ottawa moving companies maintain their own storage facilities; most do not. Companies with in-house storage offer a simpler transfer process — your belongings move directly from the truck to the storage unit without a separate transfer. Companies without in-house storage will sub-contract storage to a third-party facility. Ask explicitly whether the moving company owns the storage or is using a third party, and whether your cargo insurance remains in effect during storage." },
  { q: "What is the average cost of storage in Ottawa?", a: "Ottawa self-storage rates average: small unit (5×5 ft, closet-sized): $60–$100/month; medium unit (10×10 ft, 1-bedroom apartment equivalent): $120–$200/month; large unit (10×20 ft, 2–3 bedroom home): $200–$400/month. Climate-controlled storage carries a 15–25% premium over standard storage in Ottawa. End-of-month and summer demand significantly affects availability — book early." },
  { q: "What should I look for in Ottawa storage facilities?", a: "When evaluating Ottawa storage: look for 24/7 security monitoring (cameras, gated access), climate control options for temperature/humidity-sensitive items (wood furniture, electronics, books, wine), insurance coverage for stored items (your home insurance may extend to storage or you can purchase storage insurance from the facility), ground-floor drive-up access for heavy items, and access hours that match your needs. Important: verify that cargo insurance from your moving company is in effect during storage, or that you have separate storage coverage." },
  { q: "How long can I store my belongings during an Ottawa move?", a: "There is no standard limit — storage duration is based on the agreement with your storage provider. Most Ottawa residents using temporary storage during a move need 1–90 days (bridging a closing date gap). Some use storage for 6–12 months (renovation staging, relocation transition). Long-term storage is typically priced at the same monthly rate as short-term. Month-to-month leases are the most common arrangement in Ottawa storage facilities." },
  { q: "Can Prestige Moving arrange storage as part of my Ottawa move?", a: "Yes. Prestige Moving can coordinate storage as part of your Ottawa move. We work with reputable Ottawa storage facilities and can arrange transfer of your belongings directly to storage from the moving truck, then deliver to your new address when ready. Contact us to discuss your timeline and we'll recommend the most appropriate storage solution for your move scenario." },
];

const STORAGE_TYPES = [
  { name: "Self-Storage Units", best: "Flexible access", detail: "The most common storage option in Ottawa. You rent a unit, access it during facility hours, and manage it yourself. 5×5 ft to 20×30 ft units available. Prices vary significantly across Ottawa — urban facilities (near Centretown, Westboro) are pricier than suburban facilities (Barrhaven, Kanata, Orleans)." },
  { name: "Climate-Controlled Storage", best: "Wood furniture, electronics, documents", detail: "Temperature and humidity-regulated units. Essential for wood furniture, musical instruments, electronics, wine, artwork, and important documents. Ottawa's temperature extremes (-30°C winters, +35°C summers) make climate control particularly valuable. Typically 15–25% more than standard storage." },
  { name: "Mobile Storage (Portable Units)", best: "On-site staging storage", detail: "A storage container delivered to your home. You load it at your pace. When ready, the company picks it up and either stores it at their facility or delivers it to your new address. Excellent for staging moves or when you want flexibility. PODS is the best-known provider; several Ottawa competitors operate at lower rates." },
  { name: "Moving Company In-House Storage", best: "Simplest transition", detail: "If your moving company has their own facility, your belongings go from the truck directly to the secured storage — no separate transfer move required. When you're ready, they deliver from storage to your new address. Reduces handling and risk compared to a storage transfer involving a separate company." },
  { name: "Short-Term Hotel / Furnished Rental", best: "Bridge gap without storage", detail: "Some Ottawa residents bridge a gap by staying in a short-term furnished rental while their belongings are in storage. Corporate housing providers in Ottawa (near NDHQ, parliamentary precinct) often offer 30–90 day stays that align with common bridge scenarios." },
];

export default function FreeStorageMovingOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Moving with Storage in Ottawa — Free Storage Options & Guide",
    "description": "Guide to moving with storage in Ottawa. When you need storage, Ottawa storage types, costs, what to look for, and how to coordinate a move + storage seamlessly.",
    "author": { "@type": "Organization", "name": "Prestige Moving" },
    "url": "https://prestigemoving.ca/free-storage-moving-ottawa"
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } })) };

  return (
    <>
      <Helmet>
        <title>Moving with Storage Ottawa | Free Storage Ottawa | Prestige Moving</title>
        <meta name="description" content="Need storage during your Ottawa move? Guide to moving with storage in Ottawa — types, costs, free storage offers, and how to coordinate seamlessly. Prestige Moving Ottawa." />
        <meta name="keywords" content="free storage Ottawa, moving with storage Ottawa, Ottawa moving storage, storage during move Ottawa, free storage with moving Ottawa, Ottawa movers with storage" />
        <link rel="canonical" href="https://prestigemoving.ca/free-storage-moving-ottawa" />
        <meta property="og:title" content="Moving with Storage Ottawa | Free Storage Ottawa" />
        <meta property="og:description" content="Your complete guide to storage options during an Ottawa move. When to use storage, costs, and how to coordinate seamlessly." />
        <meta property="og:url" content="https://prestigemoving.ca/free-storage-moving-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />
      <div className="min-h-screen bg-white">

        <section className="relative h-[460px] flex items-end pb-16">
          <img src={fleetImg} alt="Moving with storage in Ottawa — Prestige Moving" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d1620]/82" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <Package className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Ottawa · Moving + Storage Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 max-w-3xl leading-tight">Moving with Storage in Ottawa</h1>
            <p className="text-lg text-white/70 max-w-xl mb-8">Closing date gaps, renovation staging, downsizing transitions — when your move needs storage, here's everything you need to know about Ottawa options.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">Book Move + Storage <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <section className="bg-[#1A2332] py-5">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "$60–$400/mo", label: "Ottawa storage range" },
              { value: "Climate", label: "Control available" },
              { value: "Flexible", label: "Month-to-month terms" },
              { value: "Coordinated", label: "Move + storage logistics" },
            ].map(({ value, label }, i) => (
              <div key={i}><div className="text-lg font-bold text-[#C5A572]">{value}</div><div className="text-white/50 text-xs mt-0.5">{label}</div></div>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="xl:flex gap-12 items-start">
            <TableOfContents items={TOC_ITEMS} />
            <div className="flex-1 min-w-0 space-y-16">

              <section id="storage-with-moving" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Package className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Overview</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Moving with Storage in Ottawa — What You Need to Know</h2>
                <p className="text-gray-600 leading-relaxed mb-4">Ottawa's real estate market creates more move-with-storage situations than most Canadian cities. The combination of tight closing date windows, condo possession timelines that don't align with rental lease ends, and the high volume of federal government relocations that require residents to vacate before a new property is ready — all conspire to create a large demand for temporary storage during Ottawa moves.</p>
                <p className="text-gray-600 leading-relaxed mb-4">Adding storage to a move introduces logistics: coordinating two truck trips instead of one (or one truck trip to storage and a separate delivery later), ensuring cargo insurance remains in effect during the storage period, and choosing a storage facility that fits your timeline, access needs, and budget.</p>
                <p className="text-gray-600 leading-relaxed mb-4">This guide walks through every Ottawa storage-with-moving scenario, the options available in Ottawa, and exactly how to coordinate a move + storage seamlessly.</p>
              </section>

              <section id="when-storage-needed" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Clock className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Common Scenarios</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">When Ottawa Residents Need Storage During a Move</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { scenario: "Closing Date Gap", desc: "Your old home closes before your new home possession date. This is one of the most common scenarios in Ottawa real estate. A 30–90 day storage period bridges the gap between sale completion and move-in day at the new address." },
                    { scenario: "Condo Possession Before Renovation Completion", desc: "You take possession of your Ottawa condo but want renovations done before you move in. Storing your belongings for 4–8 weeks while work is completed, then delivering to a finished home." },
                    { scenario: "Downsizing Transition", desc: "Moving from a 4-bedroom Ottawa house to a 2-bedroom condo. You need to decide what goes vs. what gets donated/sold — and you may not want to make all those decisions on moving day. Storage provides time to make the right choices." },
                    { scenario: "Federal Government Relocation", desc: "Federal government employees (DND, PCO, Global Affairs) frequently face relocation timelines that require short-term storage. We're experienced with the specific requirements of federal relocation moves." },
                    { scenario: "Temporary Rental Period", desc: "Moving into a short-term furnished rental in Ottawa while searching for your permanent Ottawa home. Your belongings go into storage and are delivered when you find and close on your new property." },
                    { scenario: "Estate Transition", desc: "Managing an estate in Ottawa where the home needs to be cleared before probate is complete or a sale closes. Storage bridges the period between clearing the home and final distribution of estate contents." },
                  ].map(({ scenario, desc }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-2">{scenario}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="ottawa-storage-types" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <MapPin className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Storage Options</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Ottawa Storage Options Compared</h2>
                <div className="space-y-4">
                  {STORAGE_TYPES.map(({ name, best, detail }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="font-bold text-[#1A2332] text-base">{name}</div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#C5A572]/10 text-[#C5A572] font-medium">Best for: {best}</span>
                      </div>
                      <div className="text-gray-500 text-sm leading-relaxed">{detail}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="how-it-works" className="scroll-mt-24 bg-gray-50/70 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <TruckIcon className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">The Process</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">How Move + Storage Works with Prestige Moving</h2>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Tell us your move timeline and gap", desc: "When you book, let us know your move-out date and your projected possession or delivery date. We'll plan the full move + storage logistics from both dates." },
                    { step: "02", title: "We coordinate the storage facility", desc: "Prestige Moving works with reputable Ottawa storage facilities. We coordinate the unit, confirm sizing based on your inventory, and schedule access on move-in day." },
                    { step: "03", title: "Move day: load and direct to storage", desc: "On your move-out day, we load your Ottawa home and drive directly to the storage facility. Your belongings are unloaded and organized in your storage unit. No separate trip or second company required." },
                    { step: "04", title: "Storage period", desc: "Your belongings remain in secure, insured storage at the Ottawa facility. You retain access during facility hours throughout your storage period." },
                    { step: "05", title: "Delivery to new address", desc: "When your Ottawa possession date arrives, we return to the storage facility, reload your belongings, and deliver to your new address. One company handles the complete move cycle." },
                  ].map(({ step, title, desc }, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-[#1A2332] flex items-center justify-center shrink-0 text-[#C5A572] font-bold text-sm">{step}</div>
                      <div><div className="font-bold text-[#1A2332] text-sm mb-1">{title}</div><div className="text-gray-500 text-sm leading-relaxed">{desc}</div></div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="storage-checklist" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Checklist</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Ottawa Move + Storage Preparation Checklist</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Confirm exact storage duration and dates with moving company",
                    "Verify cargo insurance coverage during storage period",
                    "Confirm storage unit size is adequate for your full inventory",
                    "Check if climate control is needed (wood furniture, electronics, wine, instruments)",
                    "Get storage terms in writing — especially what happens after any 'free' period",
                    "Pack all items in sealed, labelled boxes before storage",
                    "Place items you might need during storage (work equipment, seasonal items) near the front of the unit",
                    "Photograph high-value items before storage for insurance documentation",
                    "Confirm storage facility access hours align with your schedule",
                    "Drain and defrost all appliances before storage",
                    "Keep copies of important documents and medications with you, not in storage",
                    "Confirm delivery date and address with mover at least 1 week before",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faq" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">FAQ</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-8">FAQ — Ottawa Moving with Storage</h2>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button className="w-full flex items-center justify-between gap-4 p-5 text-left hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`button-faq-storage-${i}`}>
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
            <h2 className="text-3xl font-bold text-white mb-3">Move Out on Your Schedule, Move In on Yours</h2>
            <p className="text-white/55 mb-8 max-w-lg mx-auto">We coordinate the move, the storage, and the delivery. One company, one bill, zero logistics stress.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Book Move + Storage <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>
      </div>
      <SharedFooter />
    </>
  );
}
