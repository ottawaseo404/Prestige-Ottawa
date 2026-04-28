import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, ChevronDown, Truck,
  MapPin, Clock, Shield, DollarSign, HelpCircle, Star, BookOpen, Calendar
} from "lucide-react";

const FAQS = [
  { q: "How long does it take to move from Ottawa to Sudbury?", a: "The drive from Ottawa to Sudbury is approximately 500 km, typically 5 to 5.5 hours by highway (Highway 17 through Renfrew and North Bay). A professional moving crew will load in Ottawa, transit to Sudbury, and deliver. For a standard 2-bedroom move, expect the total process to take one full day or potentially two days for larger homes." },
  { q: "How much does moving from Ottawa to Sudbury cost?", a: "Moving from Ottawa to Sudbury for a 1-bedroom apartment typically costs $1,400–$2,200. A 2-bedroom home typically costs $2,200–$3,800. A 3-bedroom home can run $3,500–$5,500. These ranges assume a direct move without storage. Full packing services are available at an additional cost. Get a written, binding quote for your specific home." },
  { q: "Is Ottawa to Sudbury considered a long distance move?", a: "Yes. Ottawa to Sudbury is approximately 500 km — well beyond the threshold of a local move. It is typically categorized as a provincial long distance move within Ontario. While it does not cross a provincial boundary, it requires different planning, pricing, and logistics than a local Ottawa move." },
  { q: "What is the best time of year to move from Ottawa to Sudbury?", a: "Late spring and fall (May, September, October) offer the best combination of good weather and reasonable pricing. July and August are the most expensive months due to peak moving demand. Moving in winter (November–March) is typically the most affordable, though weather on Highway 17 through the Canadian Shield can be challenging." },
  { q: "Do you offer packing services for the Ottawa to Sudbury move?", a: "Yes. Full packing and unpacking services are available. Our team can pack your entire Ottawa home the day before the move, and unpack everything at your Sudbury address on delivery day. This is the most stress-free option and ensures everything is packed correctly for the 500 km transit." },
  { q: "Can you store my belongings if I'm not ready to receive in Sudbury?", a: "Yes. If your Sudbury home is not ready on your Ottawa move-out date, we offer short-term storage solutions. Your belongings are kept in a climate-controlled facility and delivered to Sudbury when your home is ready. Ask about storage pricing when you request your quote." },
];

export default function MovingFromOttawaToSudbury() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [tocOpen, setTocOpen] = useState(false);

  const TOC = [
    { id: "overview", title: "Ottawa to Sudbury: Route Overview" },
    { id: "costs", title: "Moving Costs 2026" },
    { id: "planning", title: "Planning Your Move" },
    { id: "about-sudbury", title: "About Sudbury — What to Know Before You Arrive" },
    { id: "checklist", title: "Ottawa to Sudbury Moving Checklist" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  return (
    <>
      <Helmet>
        <title>Moving From Ottawa to Sudbury | Long Distance Movers | Prestige Moving</title>
        <meta name="description" content="Planning a move from Ottawa to Sudbury? Get a binding written quote, full packing service, and reliable long distance movers for the 500 km Ottawa to Sudbury route. Call (613) 600-4000." />
        <meta name="keywords" content="moving from ottawa to sudbury, ottawa to sudbury movers, ottawa sudbury moving company, long distance movers ottawa sudbury, movers ottawa to sudbury ontario" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-ottawa-to-sudbury" />
        <meta property="og:title" content="Moving From Ottawa to Sudbury | Prestige Moving" />
        <meta property="og:description" content="Reliable long distance movers for the Ottawa to Sudbury route. Written quotes, full service, 400+ five-star reviews." />
        <meta property="og:url" content="https://prestigemoving.ca/moving-from-ottawa-to-sudbury" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
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
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-6">
            <Truck className="h-3.5 w-3.5 text-[#C5A572]" />
            <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-widest">Ottawa to Sudbury Movers</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Moving From Ottawa to Sudbury<br />
            <span className="text-[#C5A572]">— Reliable, Straightforward, Stress-Free</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            The Ottawa to Sudbury route is ~500 km through Northern Ontario. Prestige Moving provides binding written quotes, experienced long distance crews, and full packing and unpacking services for every Ottawa–Sudbury move.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-[#C5A572]" />Ottawa → Sudbury</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-[#C5A572]" />~500 km / 5.5 hours</span>
            <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-[#C5A572]" />400+ five-star reviews</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Get a Written Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm px-8"><Phone className="mr-2 h-4 w-4" />(613) 600-4000</Button></a>
          </div>
        </div>
      </section>

      <div className="bg-[#C5A572] py-4">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-8">
          {[{ value: "~500 km", label: "Ottawa to Sudbury" }, { value: "1–2 Days", label: "Typical Move Time" }, { value: "Binding", label: "Written Quotes" }, { value: "Full Service", label: "Pack, Move, Unpack" }].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-xl font-extrabold text-[#1A2332]">{value}</div>
              <div className="text-xs font-semibold text-[#1A2332]/70 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button onClick={() => setTocOpen(!tocOpen)} className="flex items-center gap-2 text-[#1A2332] font-semibold text-sm w-full" data-testid="toc-toggle">
            <BookOpen className="h-4 w-4 text-[#C5A572]" />
            <span>Table of Contents</span>
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

        <section id="overview">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Ottawa to Sudbury: Route Overview and What to Expect</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>The Ottawa to Sudbury move covers approximately 500 kilometres, primarily along Highway 17 through Renfrew, Pembroke, and North Bay before reaching Greater Sudbury. The route passes through some of Ontario's most rugged Canadian Shield terrain — beautiful country, but also an extended transit time by moving truck.</p>
            <p>Unlike moves to major urban centres like Toronto or Montreal, Sudbury-bound moves are less common but well-established for Prestige Moving's long distance team. We make the Ottawa–Sudbury run regularly for clients moving for work in the mining sector, returning to family roots in Northern Ontario, or seeking more affordable housing compared to Ottawa's increasingly competitive real estate market.</p>
            <p>This move is typically completed in one day for smaller homes or two days for larger homes (with loading in Ottawa on Day 1 and delivery in Sudbury on Day 2). Full packing service is available for clients who prefer not to pack themselves, and unpacking service at the Sudbury destination is highly recommended for a stress-free arrival.</p>
            <p>For specialist long distance moving advice from Ottawa, the team at{" "}
              <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline font-semibold">Ottawa Long Distance Movers</a>
              {" "}covers the full range of routes from Ottawa including Northern Ontario moves to Sudbury, North Bay, and beyond.
            </p>
          </div>
        </section>

        <section id="costs">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Ottawa to Sudbury Moving Costs — 2026</h2>
          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {[
              { size: "1 Bedroom", range: "$1,400–$2,200", note: "Small apartment, 2 movers, 1 day" },
              { size: "2–3 Bedroom", range: "$2,200–$4,500", note: "Home or larger apt, 3 movers, 1–2 days" },
              { size: "4+ Bedroom", range: "$4,000–$6,500+", note: "Large family home, 3–4 movers, 2 days" },
            ].map(({ size, range, note }) => (
              <div key={size} className="rounded-xl border border-gray-200 bg-white p-5 text-center">
                <div className="text-sm font-semibold text-gray-500 mb-1">{size}</div>
                <div className="text-2xl font-extrabold text-[#1A2332] mb-1">{range}</div>
                <div className="text-xs text-gray-500">{note}</div>
              </div>
            ))}
          </div>
          <div className="space-y-3 text-gray-700 text-base leading-relaxed">
            <p>These ranges represent the total all-in cost for a direct Ottawa to Sudbury move with a two or three-person crew. Factors that affect the final price include: total volume and weight of your belongings, whether packing and unpacking are included, accessibility at the origin (stairs, elevator, long carry distance), and whether short-term storage is needed between move-out and move-in dates.</p>
            <div className="flex gap-3 p-4 rounded-xl bg-[#C5A572]/10 border border-[#C5A572]/30">
              <DollarSign className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Important:</strong> All Prestige Moving long distance quotes are written and binding. The price in your quote is the price you pay. Call <a href="tel:6136004000" className="text-[#C5A572] hover:underline">(613) 600-4000</a> for a free quote specific to your move.</p>
            </div>
          </div>
        </section>

        <section id="planning">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Planning Your Ottawa to Sudbury Move</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg mb-6">
            <p>A 500 km move to Sudbury requires more planning than a local Ottawa move but significantly less complexity than a cross-country move to BC or Alberta. Here is a focused planning timeline for the Ottawa to Sudbury route.</p>
          </div>
          <div className="space-y-4">
            {[
              { when: "6 Weeks Before", title: "Book Your Movers Early", body: "Six weeks of lead time is ideal for an Ottawa to Sudbury move. This gives you access to preferred dates and allows time for all logistical arrangements. If you are moving during July or August, book 8 weeks out." },
              { when: "4 Weeks Before", title: "Confirm Your Sudbury Destination Details", body: "Verify your Sudbury property will be available on your move-in date. Confirm with your landlord or real estate agent. If moving to a building, ask about elevator access, parking for a large moving truck, and any move-in time restrictions." },
              { when: "2–3 Weeks Before", title: "Begin Packing Systematically", body: "Start with items you do not use daily — seasonal clothing, books, decorations, storage room contents. Label every box by room and contents. Long distance moves benefit from detailed labelling since boxes may not be opened for days after arrival." },
              { when: "1 Week Before", title: "Confirm All Details and Prepare Essentials", body: "Confirm pickup time with your moving crew. Prepare an essentials bag that travels with you (not on the truck): documents, medications, phone charger, change of clothes, toiletries, and important valuables. Arrange overnight accommodation if needed." },
              { when: "Loading Day", title: "Crew Arrives, Inventory, and Load", body: "Your crew arrives, walks through your home with you, and completes a written inventory. Every item is noted and any pre-existing damage documented. The truck is loaded carefully, fragile items padded and secured. You sign the bill of lading before departure." },
              { when: "Delivery Day", title: "Arrival in Sudbury and Room-by-Room Placement", body: "Your crew calls ahead of arrival in Sudbury. They unload and place every item where you direct. Beds are reassembled, furniture is set up, and boxes are placed in the appropriate rooms. A final walkthrough confirms everything arrived safely." },
            ].map(({ when, title, body }) => (
              <div key={when} className="flex gap-5 p-5 rounded-xl border border-gray-200 bg-white">
                <div className="shrink-0 min-w-[80px]">
                  <div className="text-[#C5A572] text-xs font-bold uppercase tracking-wider">{when}</div>
                </div>
                <div className="border-l border-[#C5A572]/30 pl-4">
                  <h3 className="font-bold text-[#1A2332] mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about-sudbury">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">About Greater Sudbury — What to Know Before You Arrive</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>Greater Sudbury is Northern Ontario's largest city with a population of approximately 165,000. Known internationally for its mining and mineral processing industries, Sudbury is also home to Laurentian University, Health Sciences North (a major regional hospital), and a vibrant French-English bilingual community — making it an attractive destination for healthcare workers, university staff, and families seeking more space at a fraction of Ottawa's real estate prices.</p>
            <p><strong className="text-[#1A2332]">Housing affordability:</strong> The average home price in Greater Sudbury is roughly 40–50% lower than in Ottawa — a significant draw for families moving north. Detached homes, townhomes, and rural properties are all substantially more affordable than their Ottawa equivalents.</p>
            <p><strong className="text-[#1A2332]">Climate:</strong> Sudbury receives significantly more snowfall than Ottawa — averaging around 250–300 cm annually — and winter temperatures are comparable. If you are moving in late fall or winter, your moving crew will be experienced with Canadian winter conditions, but additional planning is advisable.</p>
            <p><strong className="text-[#1A2332]">Address update checklist for Sudbury:</strong> After your move, update your address with Service Ontario (for your health card and driver's licence), the federal government (CRA, Service Canada), your bank and financial institutions, Canada Post, and your employer. Your Ontario driver's licence is valid in Sudbury without replacement — simply update the address online through the Ontario government portal.</p>
          </div>
        </section>

        <section id="checklist">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Ottawa to Sudbury Moving Checklist</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { phase: "6 Weeks Before", items: ["Book your Ottawa to Sudbury movers", "Confirm Sudbury property availability date", "Begin decluttering — donate, sell, discard", "Request written binding quote"] },
              { phase: "4 Weeks Before", items: ["Start packing non-essential rooms", "Label all boxes clearly", "Arrange utilities at Sudbury address", "Set up Canada Post mail forwarding"] },
              { phase: "2 Weeks Before", items: ["Pack all but daily essentials", "Confirm details with your moving crew", "Notify employer of new address", "Arrange travel to Sudbury"] },
              { phase: "Moving Day", items: ["Review and sign bill of lading", "Document any pre-existing damage", "Do final walkthrough of Ottawa home", "Keep essentials bag with you"] },
              { phase: "After Arrival", items: ["Confirm all items arrived undamaged", "Update address with Service Ontario", "Update address with CRA online", "Register with a Sudbury family doctor"] },
              { phase: "First Month", items: ["Update driver's licence address", "Update OHIP records", "Transfer home and auto insurance", "Update bank and financial accounts"] },
            ].map(({ phase, items }) => (
              <div key={phase} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-bold text-[#1A2332] mb-3 text-sm">{phase}</h3>
                <ul className="space-y-1.5">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="faq">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="h-7 w-7 text-[#C5A572]" />
            <h2 className="text-3xl font-bold text-[#1A2332]">Ottawa to Sudbury Moving FAQ</h2>
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

        <section>
          <h2 className="text-xl font-bold text-[#1A2332] mb-5">More Long Distance Moving Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/long-distance-moving-guide-canada", label: "Long Distance Moving Canada Guide", desc: "Complete cross-country moving guide" },
              { href: "/services/long-distance-moving", label: "Long Distance Moving Service", desc: "Our full long distance service" },
              { href: "/moving-from-ottawa-to-toronto", label: "Ottawa to Toronto Movers", desc: "Ontario's busiest moving route" },
              { href: "/how-much-does-moving-cost-ottawa", label: "Ottawa Moving Costs 2026", desc: "Detailed cost guide with scenarios" },
              { href: "/services/packing-services", label: "Packing Services", desc: "Full packing for long distance moves" },
              { href: "/book", label: "Get a Free Quote", desc: "Written binding quote for your move" },
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

      <section className="bg-[#1A2332] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Truck className="h-10 w-10 text-[#C5A572] mx-auto mb-5" />
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Move From Ottawa to Sudbury?</h2>
          <p className="text-white/65 max-w-xl mx-auto mb-8">Get a free, binding written quote from Ottawa's most reviewed long distance moving company. No hidden charges. Call today.</p>
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
