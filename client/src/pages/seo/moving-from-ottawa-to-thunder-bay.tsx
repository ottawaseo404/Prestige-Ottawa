import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, ChevronDown, Truck,
  MapPin, Clock, Shield, DollarSign, HelpCircle, Star, BookOpen
} from "lucide-react";

const FAQS = [
  { q: "How far is Ottawa to Thunder Bay?", a: "Ottawa to Thunder Bay is approximately 1,500 km, primarily via Highway 17 through Sudbury and Sault Ste. Marie. Driving time is roughly 14–16 hours by car. A moving truck, with loading time, stops, and rest breaks, typically completes the route over two to three days." },
  { q: "How much does moving from Ottawa to Thunder Bay cost?", a: "A 1-bedroom move from Ottawa to Thunder Bay typically costs $2,500–$4,000. A 2–3 bedroom home typically costs $4,000–$7,000. A 4-bedroom home can run $6,500–$10,000+. These are all-in ranges for a direct move. Get a written binding quote for your specific home size and volume." },
  { q: "How many days does the Ottawa to Thunder Bay move take?", a: "Loading typically happens on Day 1 in Ottawa. Transit is Day 2. Delivery in Thunder Bay is typically Day 2 or Day 3 depending on the size of the load, driving hours, and crew rest requirements. For large homes, a Day 1 pack + Day 2 load + Day 3 delivery schedule is common." },
  { q: "Can I ship my car when moving from Ottawa to Thunder Bay?", a: "Vehicle transport is arranged separately from household moving. Prestige Moving focuses on household contents — for vehicle shipping, we can refer you to a reputable auto transport broker who covers the Ottawa to Thunder Bay route. This is typically arranged 3–4 weeks before your move date." },
  { q: "Is Thunder Bay a good city to move to from Ottawa?", a: "Thunder Bay is Northwestern Ontario's largest city with a population of approximately 110,000. Known for its natural beauty, outdoor recreation (Superior Hiking Trail, Kakabeka Falls), and significantly lower cost of living than Ottawa, it attracts families, outdoor enthusiasts, and people seeking more space. Lakehead University is a major employer and draws academic staff from across Canada." },
  { q: "Do you offer storage if my Thunder Bay home is not ready?", a: "Yes. If your Thunder Bay move-in date does not align perfectly with your Ottawa move-out date, we offer short-term storage at our facility. Your belongings are stored safely and delivered to Thunder Bay when your home is ready. Storage pricing is separate — ask about it when booking." },
];

export default function MovingFromOttawaToThunderBay() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [tocOpen, setTocOpen] = useState(false);

  const TOC = [
    { id: "overview", title: "Ottawa to Thunder Bay: What to Expect" },
    { id: "costs", title: "Moving Costs 2026" },
    { id: "planning", title: "Planning Timeline" },
    { id: "about", title: "About Thunder Bay" },
    { id: "checklist", title: "Moving Checklist" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  return (
    <>
      <Helmet>
        <title>Ottawa to Thunder Bay Movers | Long Distance Moving | Prestige</title>
        <meta name="description" content="Planning a move from Ottawa to Thunder Bay? Expert long distance movers, binding written quotes, full packing service. ~1,500 km route. Call (613) 600-4000." />
        <meta name="keywords" content="moving from ottawa to thunder bay, ottawa to thunder bay movers, long distance movers ottawa thunder bay, ottawa thunder bay moving company, movers ottawa to northwestern ontario" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-ottawa-to-thunder-bay" />
        <meta property="og:title" content="Moving From Ottawa to Thunder Bay | Prestige Moving" />
        <meta property="og:description" content="Long distance movers for the Ottawa to Thunder Bay route. 1,500 km. Binding written quotes. Call (613) 600-4000." />
        <meta property="og:url" content="https://prestigemoving.ca/moving-from-ottawa-to-thunder-bay" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Ottawa Movers", item: "https://prestigemoving.ca" },
            { "@type": "ListItem", position: 2, name: "Long Distance Movers Ottawa", item: "https://prestigemoving.ca/services/long-distance-moving" },
            { "@type": "ListItem", position: 3, name: "Moving From Ottawa to Thunder Bay", item: "https://prestigemoving.ca/moving-from-ottawa-to-thunder-bay" },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Ottawa to Thunder Bay Moving Service",
          serviceType: "Long Distance Moving",
          description: "Professional long distance movers for the 1,500 km Ottawa to Thunder Bay route. Binding written quotes, full packing service, CVOR certified, fully insured.",
          provider: {
            "@type": "MovingCompany",
            name: "Prestige Moving Ottawa",
            telephone: "+16136004000",
            url: "https://prestigemoving.ca",
            address: { "@type": "PostalAddress", addressLocality: "Ottawa", addressRegion: "ON", addressCountry: "CA" },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "400", bestRating: "5" },
          },
          areaServed: [{ "@type": "City", name: "Ottawa" }, { "@type": "City", name: "Thunder Bay" }],
        })}</script>
      </Helmet>
      <SharedNavigation />

      <section className="relative bg-[#1A2332] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#243048] to-[#1A2332] opacity-95" />
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-6">
            <Truck className="h-3.5 w-3.5 text-[#C5A572]" />
            <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-widest">Ottawa to Thunder Bay Movers</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Moving From Ottawa to Thunder Bay<br />
            <span className="text-[#C5A572]">— Experienced Northern Ontario Movers</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            The Ottawa to Thunder Bay route covers ~1,500 km through Northern Ontario. Prestige Moving provides experienced long distance crews, full packing and unpacking services, and binding written quotes for every Ottawa–Thunder Bay move.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-[#C5A572]" />Ottawa → Thunder Bay</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-[#C5A572]" />~1,500 km · 2–3 day move</span>
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
          {[{ value: "~1,500 km", label: "Ottawa to Thunder Bay" }, { value: "2–3 Days", label: "Typical Move Time" }, { value: "Binding", label: "Written Quotes" }, { value: "Full Service", label: "Pack, Move, Unpack" }].map(({ value, label }) => (
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
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Ottawa to Thunder Bay: What to Expect From This Move</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>Moving from Ottawa to Thunder Bay is a significant undertaking — 1,500 kilometres across Northern Ontario, through some of Canada's most remote and spectacular Shield country. The move takes movers through Sudbury, Sault Ste. Marie, and along the northern shore of Lake Superior before reaching Thunder Bay at Ontario's western edge.</p>
            <p>This is a multi-day move for any household size. For small apartments and studios, a single experienced crew may load in Ottawa on Day 1, drive overnight or rest en route, and deliver in Thunder Bay on Day 2. For 2-bedroom homes and larger, a Day 1 load + Day 2 transit + Day 3 delivery schedule is standard.</p>
            <p>What makes this route different from a Toronto or Montreal move is the remoteness of the highway corridor. Once en route, there are limited detour options and weather events in Northern Ontario can affect transit times, particularly in winter. Experienced Northern Ontario long distance movers — like Prestige Moving's team — plan for these variables and communicate proactively with clients throughout the journey.</p>
            <p>The specialist team at{" "}
              <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline font-semibold">Ottawa Long Distance Movers</a>
              {" "}also covers the Thunder Bay route and can provide an additional quote for comparison.
            </p>
          </div>
        </section>

        <section id="costs">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Ottawa to Thunder Bay Moving Costs — 2026</h2>
          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            {[
              { size: "1 Bedroom", range: "$2,500–$4,000", note: "Apartment, 2 movers, 2 days" },
              { size: "2–3 Bedroom", range: "$4,000–$7,000", note: "Home, 3 movers, 2–3 days" },
              { size: "4+ Bedroom", range: "$6,500–$10,000+", note: "Large home, 3–4 movers, 3 days" },
            ].map(({ size, range, note }) => (
              <div key={size} className="rounded-xl border border-gray-200 bg-white p-5 text-center">
                <div className="text-sm font-semibold text-gray-500 mb-1">{size}</div>
                <div className="text-2xl font-extrabold text-[#1A2332] mb-1">{range}</div>
                <div className="text-xs text-gray-500">{note}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 p-4 rounded-xl bg-[#C5A572]/10 border border-[#C5A572]/30">
            <DollarSign className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700"><strong>All quotes are written and binding.</strong> The price you receive is the price you pay. No surprise charges at delivery. Call <a href="tel:6136004000" className="text-[#C5A572] hover:underline">(613) 600-4000</a> for a quote specific to your home.</p>
          </div>
        </section>

        <section id="planning">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Planning Your Ottawa to Thunder Bay Move</h2>
          <div className="space-y-4">
            {[
              { when: "8 Weeks Before", title: "Book Your Movers", body: "For an Ottawa to Thunder Bay move, booking 8 weeks in advance is recommended. This is a more complex route than urban Ontario moves, and experienced Northern Ontario long distance crews have limited availability." },
              { when: "4–6 Weeks Before", title: "Pack and Declutter", body: "Start packing non-essentials. Declutter aggressively — every item not taken reduces your cost. For a 1,500 km move, the weight of your shipment directly affects the price. Sell, donate, or dispose of anything you would not pay to ship across Northern Ontario." },
              { when: "2 Weeks Before", title: "Confirm All Logistics", body: "Confirm your Thunder Bay property is available on your target date. Arrange utilities at the Thunder Bay address. Set up Canada Post mail forwarding from your Ottawa address. Book accommodations for your own travel to Thunder Bay if you are not driving." },
              { when: "Loading Day", title: "Ottawa Loading", body: "Your crew arrives, completes a written inventory, and loads. You sign the bill of lading. Keep a copy. Note any pre-existing damage. Your crew departs Ottawa and heads northwest." },
              { when: "Delivery Day", title: "Thunder Bay Delivery", body: "Your crew arrives in Thunder Bay. Every item is placed exactly where you direct, beds and furniture are reassembled, and a final walkthrough confirms everything arrived safely." },
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

        <section id="about">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">About Thunder Bay — What Ottawa Newcomers Should Know</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>Thunder Bay is Northwestern Ontario's largest city, situated on the northwestern shore of Lake Superior — the largest freshwater lake in the world by surface area. With a population of approximately 110,000, it offers a dramatically different lifestyle from Ottawa: vast natural spaces, legendary fishing and outdoor recreation, and housing costs that are among the most affordable for any mid-sized Canadian city.</p>
            <p><strong className="text-[#1A2332]">Economy:</strong> Thunder Bay's economy is driven by health care (Thunder Bay Regional Health Sciences Centre), Lakehead University, the Port of Thunder Bay (one of Canada's most important inland ports for grain shipping), and forestry and mining sectors. These industries draw skilled workers from across Canada.</p>
            <p><strong className="text-[#1A2332]">Weather:</strong> Thunder Bay winters are long and snowy, with average January temperatures of -15°C and significant snowfall. Summer brings warm temperatures (average 25°C in July) and extraordinary outdoor conditions. Ottawa residents will find the climate similar but colder and snowier.</p>
            <p><strong className="text-[#1A2332]">What Ottawa residents love about Thunder Bay:</strong> The city consistently ranks high for quality of life due to short commute times (virtually no traffic), direct access to world-class hiking, fishing, and skiing, and a tight-knit community feel — all at a fraction of Ottawa's living costs.</p>
          </div>
        </section>

        <section id="checklist">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Ottawa to Thunder Bay Moving Checklist</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { phase: "8 Weeks Before", items: ["Book Ottawa to Thunder Bay movers", "Confirm Thunder Bay property date", "Begin decluttering all rooms", "Request written binding quote"] },
              { phase: "4 Weeks Before", items: ["Begin systematic packing", "Set up Thunder Bay utilities", "Notify Canada Post — mail forwarding", "Book your own travel to Thunder Bay"] },
              { phase: "2 Weeks Before", items: ["Pack all but daily essentials", "Confirm move details with crew", "Notify employer, bank, insurance", "Prepare essentials bag for travel"] },
              { phase: "Moving Day", items: ["Sign and keep copy of bill of lading", "Document pre-existing damage", "Final walkthrough of Ottawa home", "Head to Thunder Bay independently"] },
              { phase: "After Arrival", items: ["Confirm all items arrived undamaged", "File damage claim if applicable", "Update Service Ontario address", "Register with Thunder Bay family doctor"] },
              { phase: "First 30 Days", items: ["Update CRA mailing address", "Transfer home and auto insurance", "Update bank accounts", "Explore Thunder Bay's neighbourhoods"] },
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
            <h2 className="text-3xl font-bold text-[#1A2332]">Ottawa to Thunder Bay FAQ</h2>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/long-distance-moving-guide-canada", label: "Long Distance Moving Canada", desc: "Complete cross-country moving guide" },
              { href: "/moving-from-ottawa-to-sudbury", label: "Ottawa to Sudbury Movers", desc: "Northern Ontario's second-largest city" },
              { href: "/services/long-distance-moving", label: "Long Distance Moving Service", desc: "Full service overview" },
              { href: "/how-much-does-moving-cost-ottawa", label: "Ottawa Moving Costs 2026", desc: "Detailed cost guide" },
              { href: "/services/packing-services", label: "Packing Services", desc: "Full packing for long distance" },
              { href: "/book", label: "Get a Free Quote", desc: "Written binding quote" },
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
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Move From Ottawa to Thunder Bay?</h2>
          <p className="text-white/65 max-w-xl mx-auto mb-8">Get a free, binding written quote. We cover the full Ottawa to Thunder Bay route with experienced crews and full packing service.</p>
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
