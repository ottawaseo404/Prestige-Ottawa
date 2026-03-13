import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, Star, ArrowRight, ChevronDown, Award, Shield, CheckCircle2,
  AlertTriangle, BadgeCheck, ChevronRight, MapPin, Package, Users,
  FileText, Clock, XCircle, ThumbsUp
} from "lucide-react";
import teamImg from "@assets/prestige_moving_1772836136864.jpg";

const TOC_ITEMS = [
  { id: "why-it-matters",       title: "Why Your Choice Matters" },
  { id: "licensing-insurance",  title: "Licensing & Insurance" },
  { id: "red-flags",            title: "Red Flags to Avoid" },
  { id: "questions-to-ask",     title: "Questions to Ask Every Mover" },
  { id: "getting-quotes",       title: "Getting & Comparing Quotes" },
  { id: "reading-reviews",      title: "How to Read Reviews" },
  { id: "ottawa-specific",      title: "Ottawa-Specific Considerations" },
  { id: "checklist",            title: "Moving Company Checklist" },
  { id: "faq",                  title: "FAQ" },
];

const RED_FLAGS = [
  { title: "No Physical Address or CVOR Registration", desc: "Legitimate Canadian moving companies have a verifiable business address and a CVOR (Commercial Vehicle Operator's Registration) certificate. A company operating out of a cell phone with no traceable address has no accountability if something goes wrong." },
  { title: "Demands Full Payment Upfront", desc: "A reputable moving company takes a reasonable deposit (10–25%) and collects the balance on completion. Any company demanding 50–100% of the payment before the truck has moved a single item is a red flag. It's a common tactic used by rogue movers who then hold your belongings hostage for additional fees." },
  { title: "Won't Provide a Written Quote", desc: "Verbal estimates are meaningless. A professional moving company provides a written quote — itemized and signed — before your move. Any company that refuses or consistently hedges on pricing is signalling that the final invoice may be very different from what was discussed." },
  { title: "No WSIB Coverage", desc: "WSIB (Workplace Safety and Insurance Board) coverage is legally required in Ontario for companies with employees. A moving company that can't provide a WSIB certificate is either operating illegally or using uninsured subcontractors — leaving you potentially liable for injuries on your property." },
  { title: "Extremely Low Pricing", desc: "Moving is a labour-intensive service with significant equipment and insurance costs. A quote that is dramatically lower than every other company you've contacted is either subsidized by hidden fees that will appear on the invoice, or signals unlicensed operators with no insurance and no accountability." },
  { title: "No Online Presence or Reviews", desc: "Any legitimate Ottawa moving company that has operated for more than a year has a traceable Google Business Profile with reviews. A company with zero reviews, a newly-created profile, or exclusively five-star reviews with no text is not a reliable indicator." },
  { title: "Vague or Unsigned Contracts", desc: "Moving contracts should specify the pickup date, delivery window, list of services, pricing structure, claims process, and liability limits. A company that hands you a blank form or won't clearly explain the contract terms is not a professional operation." },
  { title: "Rented Truck, Casual Labour", desc: "A moving company that shows up with a rented U-Haul and day labour hired off social media is not providing professional moving services. These crews have no training, no accountability, and no insurance applicable to your move." },
];

const QUESTIONS = [
  { q: "Are you licensed to operate commercially in Ontario?", why: "Every commercial moving company in Ontario requires valid licensing. Legitimate companies are registered and can provide their business registration documentation." },
  { q: "Do you carry general liability insurance? What is the coverage limit?", why: "If a mover damages your property, their liability insurance covers the claim. Ask for a certificate of insurance before the move. Standard professional coverage is $2M+ commercial general liability." },
  { q: "Are you WSIB insured?", why: "If a mover is injured on your property and the company lacks WSIB coverage, you could be held liable under Ontario law. WSIB certification is mandatory for legitimate companies and must be current." },
  { q: "Are your movers employees or subcontractors?", why: "Employees are trained to company standards, background-checked, and covered by company insurance. Subcontractors may be completely unknown individuals with no accountability to the company or to you." },
  { q: "Do you use your own trucks and equipment?", why: "Companies with their own trucks maintain them to commercial standards and have the equipment properly registered and insured. Companies renting trucks don't have the same accountability." },
  { q: "Will you provide a written, itemized quote?", why: "This is the single most important document of your move. A written quote should include the crew size, hourly rate or flat rate, all fees, and the terms of the agreement." },
  { q: "What is your process for claims if something is damaged?", why: "Even the best moving companies occasionally damage something. The question is: what happens next? A professional company has a documented claims process and responds to damage claims promptly." },
  { q: "Can I see references or your Google review profile?", why: "Reviews are the most accurate predictor of service quality for moving companies. A company with hundreds of legitimate reviews over several years has a proven record." },
];

const FAQS = [
  { q: "How do I know if a moving company in Ottawa is legitimate?", a: "Check for: a verifiable physical address, a current Google Business Profile with substantial reviews, WSIB certification (available to verify at wsib.ca), and willingness to provide a written contract and certificate of insurance. Call the number on their website to verify it's a real business." },
  { q: "What's the difference between a binding and non-binding moving estimate in Canada?", a: "A binding estimate commits the moving company to a fixed price regardless of how long the move actually takes (for flat-rate moves). A non-binding estimate (hourly) means the final price depends on the actual time spent. Always get the terms of your estimate in writing — especially what triggers additional charges." },
  { q: "Should I tip my Ottawa movers?", a: "Tipping is not required but is a widely practised and appreciated acknowledgment of good service. A typical tip is $20–$40 per mover for a full-day move, or 5–10% of the total bill. You can tip at the end of the move after you're satisfied with the results." },
  { q: "What is the cheapest way to move in Ottawa?", a: "The most economical approach: book during the off-season (October–April), avoid month-end (the most expensive period in Ottawa), book early for maximum scheduling flexibility, and pack everything yourself before the crew arrives. These four factors together can reduce your Ottawa moving cost by 30–40%." },
  { q: "Is it better to get a flat rate or hourly rate for moving in Ottawa?", a: "For straightforward local Ottawa moves with a clear inventory, hourly rates with a reputable company are often more economical. For complex moves with unpredictable access or a lot of items, a flat rate offers predictability. Ask for both options when getting quotes and compare based on your specific situation." },
  { q: "What insurance do Ottawa movers carry?", a: "Legitimate Ottawa moving companies carry: commercial general liability insurance (typically $2M+), cargo insurance (covering items in their care during transport), commercial vehicle insurance, and WSIB coverage for all employees. Request certificates for all of these before your move." },
  { q: "What questions should I ask when getting moving quotes in Ottawa?", a: "Ask about: crew size and employee vs. subcontractor status, hourly vs. flat rate, what fees apply (travel time, stairs, heavy items), what insurance covers damaged items, WSIB certification, whether the quote is written and binding, and what the cancellation and rescheduling policy is." },
  { q: "How many quotes should I get for a move in Ottawa?", a: "Get at least 3 quotes for any Ottawa move. This gives you a market-rate reference point and reveals any outliers (suspiciously low quotes often indicate hidden fees or unlicensed operators). Most reputable Ottawa movers provide written quotes within 24 hours of your inquiry." },
];

export default function HowToChooseMovingCompanyOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openRed, setOpenRed] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Choose a Moving Company in Ottawa (2026 Guide)",
    "description": "A complete guide to choosing a reputable moving company in Ottawa — what to look for, red flags to avoid, questions to ask, and how to compare quotes.",
    "author": { "@type": "Organization", "name": "Prestige Moving" },
    "publisher": { "@type": "Organization", "name": "Prestige Moving", "url": "https://prestigemoving.ca" },
    "url": "https://prestigemoving.ca/how-to-choose-a-moving-company-ottawa",
    "datePublished": "2026-01-01",
    "dateModified": "2026-03-01"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } }))
  };

  return (
    <>
      <Helmet>
        <title>How to Choose a Moving Company in Ottawa (2026 Guide) | Prestige Moving</title>
        <meta name="description" content="Everything Ottawa residents need to know before hiring a mover: licensing, insurance, red flags, the right questions to ask, and how to compare quotes. From Prestige Moving — 5.0 stars, 400+ reviews." />
        <meta name="keywords" content="how to choose a moving company Ottawa, best moving company Ottawa, Ottawa moving company tips, hiring movers Ottawa, moving company red flags, Ottawa moving guide 2026" />
        <link rel="canonical" href="https://prestigemoving.ca/how-to-choose-a-moving-company-ottawa" />
        <meta property="og:title" content="How to Choose a Moving Company in Ottawa (2026 Guide)" />
        <meta property="og:description" content="The complete Ottawa moving company checklist — licensing, insurance, red flags, questions to ask, and how to compare quotes." />
        <meta property="og:url" content="https://prestigemoving.ca/how-to-choose-a-moving-company-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />
      <div className="min-h-screen bg-white">

        {/* HERO */}
        <section className="relative h-[460px] flex items-end pb-16">
          <img src={teamImg} alt="How to choose a moving company in Ottawa" className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-[#0d1620]/92" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <FileText className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Ottawa Moving Guide · 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 max-w-3xl leading-tight">How to Choose a Moving Company in Ottawa</h1>
            <p className="text-lg text-white/70 max-w-xl mb-8">The complete guide to finding a trustworthy, licensed, and properly insured Ottawa mover — and the red flags that protect you from rogue operators.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">Book Prestige Moving <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-[#1A2332] py-5">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "5.0 ★",   label: "Prestige Google Rating" },
              { value: "400+",    label: "Verified Reviews" },
              { value: "$2M+",    label: "Liability Insurance" },
              { value: "WSIB",    label: "Fully Certified & Insured" },
            ].map(({ value, label }, i) => (
              <div key={i}>
                <div className="text-xl font-bold text-[#C5A572]">{value}</div>
                <div className="text-white/50 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="xl:flex gap-12 items-start">
            <TableOfContents items={TOC_ITEMS} />

            <div className="flex-1 min-w-0 space-y-20">

              {/* WHY IT MATTERS */}
              <section id="why-it-matters" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Award className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Make the Right Choice</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Choosing the Right Ottawa Moving Company Matters</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Your household possessions represent years of accumulated value — financial, sentimental, and practical. When you hire a moving company, you are handing temporary custody of everything you own to a group of strangers. The company you choose determines whether that trust is honoured or broken.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ottawa's moving market has a wide range: at one end, fully licensed, WSIB-certified, insured professional moving companies with verified five-star records and years of established operations. At the other, unlicensed operators advertising on social media and classified sites with rented trucks, uninsured casual labour, and no accountability if your furniture is damaged or your delivery is delayed. The price gap between these two categories is rarely as large as people expect — but the service and accountability gap is enormous.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Every year, Ottawa residents file complaints with the Better Business Bureau and local consumer agencies about rogue movers who: quoted one price and invoiced a much higher amount, held belongings in their truck until additional cash was paid, caused significant property damage and then disappeared, used uninsured workers who were injured on the client's property, and simply didn't show up. This guide exists to help you avoid every one of these outcomes.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  {[
                    { icon: Shield, title: "Protect Your Belongings", desc: "Properly insured movers have clear liability for damages. Unlicensed operators have none — and your home insurance often doesn't cover moving damage either." },
                    { icon: Users, title: "Protect Yourself Legally", desc: "If an uninsured mover is injured on your property, you may be liable under Ontario law. WSIB certification eliminates this risk." },
                    { icon: FileText, title: "Protect Your Budget", desc: "Rogue movers use low quotes to win jobs, then inflate the invoice on delivery day with fabricated fees. Written contracts are your protection." },
                  ].map(({ icon: Icon, title, desc }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-9 h-9 rounded-lg bg-[#C5A572]/10 flex items-center justify-center mb-3"><Icon className="h-4 w-4 text-[#C5A572]" /></div>
                      <div className="font-bold text-[#1A2332] text-sm mb-1">{title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* LICENSING */}
              <section id="licensing-insurance" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <BadgeCheck className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">The Non-Negotiables</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Licensing and Insurance: The Non-Negotiable Minimums</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Before you evaluate any Ottawa moving company on price, reviews, or availability, verify that they meet the legal minimum requirements to operate commercially in Ontario. These are not optional extras — they are the baseline below which you should not hire any mover, regardless of how good their price looks.
                </p>
                <div className="space-y-4 mt-6">
                  {[
                    { item: "CVOR Certificate", detail: "The Commercial Vehicle Operator's Registration (CVOR) is issued by the Ontario Ministry of Transportation and is legally required for any company operating commercial vehicles over a certain weight. You can verify a company's CVOR status through the Ontario MTO. A company without a valid CVOR is operating illegally." },
                    { item: "WSIB Certificate of Clearance", detail: "The Workplace Safety and Insurance Board (WSIB) requires coverage for all Ontario employees performing work that carries injury risk. Moving is a high-injury-risk occupation. If a mover without WSIB coverage is injured on your property during your move, Ontario courts have held homeowners partially liable. Verify WSIB clearance at wsib.ca before your move date." },
                    { item: "Commercial General Liability Insurance", detail: "This covers damage to your property during the move — scratched floors, broken furniture, damaged walls. The standard coverage for professional Ottawa movers is $2 million or more. Ask for a certificate of insurance (COI) naming you as an additional insured. Any reputable company will provide this without hesitation." },
                    { item: "Cargo Insurance", detail: "Separate from liability insurance, cargo insurance specifically covers the items being transported — your furniture, appliances, and possessions while they are in the moving company's custody. Ask whether the company's cargo insurance covers the replacement value or only the depreciated value of damaged items." },
                  ].map(({ item, detail }, i) => (
                    <div key={i} className="flex gap-3 p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#1A2332] text-sm mb-1">{item}</div>
                        <div className="text-gray-500 text-sm leading-relaxed">{detail}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5">
                  <div className="font-bold text-green-900 mb-2 flex items-center gap-2"><BadgeCheck className="h-5 w-5 text-green-600" /> Prestige Moving's Credentials</div>
                  <p className="text-green-800 text-sm leading-relaxed">Prestige Moving carries $2M+ commercial general liability, current WSIB certification, full cargo insurance, and is a registered Ontario commercial vehicle operator. All documentation is available to every client before their move date upon request.</p>
                </div>
              </section>

              {/* RED FLAGS */}
              <section id="red-flags" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <AlertTriangle className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Warning Signs</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">8 Red Flags That Should Stop You From Hiring a Mover</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  The Ottawa moving market, like every local moving market in Canada, has a persistent presence of operators who use professional-looking websites and low prices to win business — and then fail to deliver on their commitments. Recognising these warning signs before you sign anything will protect your move and your belongings.
                </p>
                <div className="space-y-3">
                  {RED_FLAGS.map(({ title, desc }, i) => (
                    <div key={i} className="border border-red-200 bg-red-50/50 rounded-xl overflow-hidden">
                      <button className="w-full flex items-center gap-3 p-4 text-left hover-elevate" onClick={() => setOpenRed(openRed === i ? null : i)} data-testid={`button-redflag-${i}`}>
                        <XCircle className="h-5 w-5 text-red-400 shrink-0" />
                        <span className="font-semibold text-gray-800 text-sm flex-1">{title}</span>
                        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform shrink-0 ${openRed === i ? "rotate-180" : ""}`} />
                      </button>
                      {openRed === i && <div className="px-12 pb-4 text-gray-600 text-sm leading-relaxed">{desc}</div>}
                    </div>
                  ))}
                </div>
              </section>

              {/* QUESTIONS */}
              <section id="questions-to-ask" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <FileText className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Interview Every Mover</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">8 Questions to Ask Every Ottawa Moving Company</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  When you contact Ottawa moving companies for quotes, use this list of questions. A reputable company will answer every one of them clearly and without hesitation. Evasion, vagueness, or annoyance at being asked are themselves red flags.
                </p>
                <div className="space-y-4">
                  {QUESTIONS.map(({ q, why }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="flex gap-3">
                        <div className="w-7 h-7 rounded-full bg-[#1A2332] flex items-center justify-center shrink-0 text-[#C5A572] text-xs font-bold">{i + 1}</div>
                        <div>
                          <div className="font-bold text-[#1A2332] text-sm mb-1.5">"{q}"</div>
                          <div className="text-gray-500 text-sm leading-relaxed"><span className="font-medium text-gray-700">Why ask: </span>{why}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* GETTING QUOTES */}
              <section id="getting-quotes" className="scroll-mt-24 bg-gray-50/70 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <FileText className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Getting Fair Quotes</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">How to Get and Compare Moving Quotes in Ottawa</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Get at least three written quotes from Ottawa moving companies before making a decision. A written quote should include: the crew size, hourly rate or fixed rate, travel time fee (if applicable), any additional charges for stairs, heavy items, or long carries, and the cancellation/rescheduling policy. When you have three quotes in hand, compare the following:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Total Cost — Not Hourly Rate", desc: "A lower hourly rate with a slower crew may cost more than a higher hourly rate with an efficient, trained crew. Ask each company for a total estimate based on your inventory, not just their hourly rate." },
                    { title: "What's Included", desc: "Does the quote include packing materials? Disassembly and reassembly of furniture? Specialty item handling (piano, gun safe)? Compare quotes on equal terms — all-inclusive vs. add-on pricing changes the comparison significantly." },
                    { title: "Written vs. Verbal", desc: "Only written, signed quotes are worth comparing. Verbal estimates are not binding and often lower than the final invoice. Insist on written quotes from every company you evaluate." },
                    { title: "Insurance Coverage", desc: "A company with $2M liability and full cargo insurance is providing materially more value than a company with $500K liability and no cargo coverage — even at the same price." },
                    { title: "Review Volume & Recency", desc: "100 reviews from the last 12 months is far more meaningful than 20 reviews over 5 years. Google review recency is the best predictor of current service quality." },
                    { title: "Employee vs. Subcontractor", desc: "A company that uses its own employees gives you accountability. A company that dispatches subcontractors gives you someone who was available that day. The difference in move quality is consistently significant." },
                  ].map(({ title, desc }, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-1">{title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* REVIEWS */}
              <section id="reading-reviews" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Star className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Review Analysis</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">How to Read Moving Company Reviews in Ottawa</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Google reviews are the most reliable public indicator of a moving company's service quality — but only if you know how to read them. Here's what to look for and what to be sceptical of:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: ThumbsUp, color: "green", title: "Positive Signals", items: ["200+ reviews over multiple years", "Specific details about crew members and service quality", "Consistent 4.5–5.0 rating with responses from the company", "Reviews mentioning specific Ottawa neighbourhoods or move types", "Responses from the company to both positive and negative reviews"] },
                    { icon: AlertTriangle, color: "red", title: "Warning Signals", items: ["Fewer than 20 reviews for a supposedly established company", "All reviews are 5-star with no text (fabricated review profiles)", "Cluster of reviews all posted in a short time period", "No response from the company to any reviews", "Reviews that are generic and don't mention specifics of the move"] },
                  ].map(({ icon: Icon, color, title, items }, i) => (
                    <div key={i} className={`p-5 rounded-xl border ${color === "green" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                      <div className={`flex items-center gap-2 font-bold text-sm mb-3 ${color === "green" ? "text-green-900" : "text-red-900"}`}>
                        <Icon className={`h-4 w-4 ${color === "green" ? "text-green-600" : "text-red-500"}`} />
                        {title}
                      </div>
                      <ul className="space-y-1.5">
                        {items.map((item, j) => (
                          <li key={j} className={`text-sm flex items-start gap-2 ${color === "green" ? "text-green-800" : "text-red-800"}`}>
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-current" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* OTTAWA SPECIFIC */}
              <section id="ottawa-specific" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <MapPin className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Ottawa-Specific Factors</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Ottawa-Specific Factors When Choosing a Mover</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Ottawa's unique characteristics affect your moving experience in ways that national moving guides don't address. Make sure your Ottawa mover has specific experience with:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Ottawa Winter Moving", desc: "Ottawa winters reach -30°C. Your mover should have experience with winter moves: protecting items from cold shock, managing icy driveway hazards, preventing floor damage from snow and ice tracked by boots, and managing the condensation risk on electronics brought from cold trucks into warm homes." },
                    { title: "Heritage Home Access", desc: "Ottawa's Glebe, Westboro, Centretown, and Sandy Hill areas have Victorian and Edwardian homes with narrow staircases, low ceilings, and heritage floors that require specific care and pre-assessment. A mover unfamiliar with these homes will cause damage they didn't anticipate." },
                    { title: "Condo Building Regulations", desc: "Ottawa's growing condo market has building-specific move-in rules: elevator booking windows, pad rental requirements, loading dock reservations, and move-in hours restrictions. Your mover should know how to navigate these proactively." },
                    { title: "Government / Gatineau Moves", desc: "Ottawa-Gatineau cross-border moves (moving from Gatineau, QC to Ottawa, ON or vice versa) have specific insurance and licensing considerations. Make sure your mover is authorized for interprovincial moves if your move crosses the river." },
                    { title: "End-of-Month Demand", desc: "Ottawa's moving demand peaks sharply on the last few days of every month, when leases typically turn over. Moving around the 27th–31st dramatically reduces your options and increases prices. Planning your Ottawa move for mid-month gives you more selection and better pricing." },
                    { title: "University Moves", desc: "The University of Ottawa and Carleton University create massive moving demand in late April and September. If you're moving near Sandy Hill, Centretown, or Hintonburg during these windows, book your Ottawa mover 4–6 weeks in advance minimum." },
                  ].map(({ title, desc }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-1.5">{title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* CHECKLIST */}
              <section id="checklist" className="scroll-mt-24 bg-[#1A2332] rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Your Ottawa Mover Checklist</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Ottawa Moving Company Evaluation Checklist</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Verified physical business address in Ottawa",
                    "Current WSIB Certificate of Clearance",
                    "Commercial General Liability Insurance ($2M+)",
                    "Cargo insurance covering your belongings",
                    "CVOR registration (Ontario)",
                    "Written, itemized quote — signed",
                    "Crew are employees, not subcontractors",
                    "Own trucks (not rented vehicles)",
                    "100+ Google reviews, 4.5+ rating",
                    "Reviews are recent (last 12 months)",
                    "Company responds to negative reviews",
                    "Clear cancellation/rescheduling policy",
                    "No request for large deposit upfront",
                    "Background-checked crew members",
                    "Experience with Ottawa condo buildings",
                    "Ottawa winter move experience",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Frequently Asked Questions</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-8">FAQ — Choosing a Moving Company in Ottawa</h2>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button className="w-full flex items-center justify-between gap-4 p-5 text-left hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`button-faq-choose-${i}`}>
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
            <h2 className="text-3xl font-bold text-white mb-3">Prestige Moving — Ottawa's Most Trusted Mover</h2>
            <p className="text-white/55 mb-2">5.0 stars · 400+ verified reviews · WSIB certified · $2M+ insured · Employee crew only</p>
            <p className="text-white/40 text-sm mb-8">Every box on the checklist above, verified.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

      </div>
      <SharedFooter />
    </>
  );
}
