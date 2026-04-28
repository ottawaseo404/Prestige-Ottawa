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
  { q: "How far is Ottawa to Saskatoon?", a: "Ottawa to Saskatoon is approximately 2,750 km, typically driven via Highway 17 through Northern Ontario, then west across Manitoba to Saskatchewan. Driving time by car is roughly 26–28 hours. A moving truck completes the route over 3–4 days with mandatory rest stops and driving hour limits." },
  { q: "How much does moving from Ottawa to Saskatoon cost?", a: "A 1-bedroom move from Ottawa to Saskatoon typically costs $3,500–$5,500. A 2–3 bedroom home typically costs $5,500–$9,000. A 4-bedroom home can run $8,500–$13,000+. These are all-in estimates — volume and weight are the primary cost drivers. Decluttering before your move is the most effective way to reduce cost. All quotes are written and binding." },
  { q: "How long does the Ottawa to Saskatoon move take?", a: "Expect 3–4 days for the move from Ottawa to Saskatoon. Day 1 is typically loading in Ottawa. Days 2–3 are transit across Ontario and Manitoba. Day 3 or 4 is delivery in Saskatoon. For larger homes, a pre-move packing day is recommended, making the total process 4–5 days from start to delivery." },
  { q: "Is Saskatoon a good city for Ottawa residents moving west?", a: "Saskatoon is one of Canada's fastest-growing cities, with a booming economy driven by potash and uranium mining, agriculture, and a thriving tech sector. Housing is significantly more affordable than Ottawa, with detached homes available for 40–60% of comparable Ottawa prices. The University of Saskatchewan is a major employer and research hub. Summers are warm and sunny; winters are cold and dry." },
  { q: "Does Prestige Moving do interprovincial moves from Ottawa to Saskatchewan?", a: "Yes. Prestige Moving operates long distance moves to all Canadian provinces including Saskatchewan. Our team has completed Ottawa to Saskatoon and Ottawa to Regina moves and understands the logistics, route, and planning requirements of this interprovincial corridor." },
  { q: "What should I do first when planning an Ottawa to Saskatoon move?", a: "Start with three things simultaneously: declutter your home aggressively (long distance pricing is volume-based), request a written binding quote from a reputable long distance mover, and begin researching Saskatoon neighbourhoods and housing. The earlier you start these three processes, the smoother your move will be." },
];

export default function MovingFromOttawaToSaskatoon() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [tocOpen, setTocOpen] = useState(false);

  const TOC = [
    { id: "overview", title: "Ottawa to Saskatoon: Route Overview" },
    { id: "costs", title: "Moving Costs 2026" },
    { id: "planning", title: "Planning Your Move" },
    { id: "about", title: "About Saskatoon" },
    { id: "checklist", title: "Moving Checklist" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  return (
    <>
      <Helmet>
        <title>Ottawa to Saskatoon Movers | Interprovincial Moving | Prestige</title>
        <meta name="description" content="Planning a move from Ottawa to Saskatoon? Expert interprovincial movers, binding quotes, full service. 2,750 km Ottawa to Saskatchewan route. Call (613) 600-4000." />
        <meta name="keywords" content="moving from ottawa to saskatoon, ottawa to saskatoon movers, long distance movers ottawa saskatoon, interprovincial movers ottawa saskatchewan, ottawa saskatoon moving company" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-ottawa-to-saskatoon" />
        <meta property="og:title" content="Moving From Ottawa to Saskatoon | Prestige Moving" />
        <meta property="og:description" content="Experienced interprovincial movers for the Ottawa to Saskatoon route. 2,750 km. Binding written quotes. (613) 600-4000." />
        <meta property="og:url" content="https://prestigemoving.ca/moving-from-ottawa-to-saskatoon" />
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
            { "@type": "ListItem", position: 3, name: "Moving From Ottawa to Saskatoon", item: "https://prestigemoving.ca/moving-from-ottawa-to-saskatoon" },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Ottawa to Saskatoon Moving Service",
          serviceType: "Long Distance Moving",
          description: "Professional interprovincial movers for the 2,750 km Ottawa to Saskatoon route. Binding written quotes, full packing service, CVOR certified, fully insured.",
          provider: {
            "@type": "MovingCompany",
            name: "Prestige Moving Ottawa",
            telephone: "+16136004000",
            url: "https://prestigemoving.ca",
            address: { "@type": "PostalAddress", addressLocality: "Ottawa", addressRegion: "ON", addressCountry: "CA" },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "400", bestRating: "5" },
          },
          areaServed: [{ "@type": "City", name: "Ottawa" }, { "@type": "City", name: "Saskatoon" }, { "@type": "AdministrativeArea", name: "Saskatchewan" }],
        })}</script>
      </Helmet>
      <SharedNavigation />

      <section className="relative bg-[#1A2332] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#243048] to-[#1A2332] opacity-95" />
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-6">
            <Truck className="h-3.5 w-3.5 text-[#C5A572]" />
            <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-widest">Ottawa to Saskatoon Movers</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Moving From Ottawa to Saskatoon<br />
            <span className="text-[#C5A572]">— Cross-Country Interprovincial Movers</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Ottawa to Saskatoon is a 2,750 km interprovincial move across Ontario, Manitoba, and into Saskatchewan. Prestige Moving provides experienced crews, binding written quotes, and full packing and unpacking services for this route.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-[#C5A572]" />Ottawa → Saskatoon</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-[#C5A572]" />~2,750 km · 3–4 day move</span>
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
          {[{ value: "~2,750 km", label: "Ottawa to Saskatoon" }, { value: "3–4 Days", label: "Typical Move Time" }, { value: "Binding", label: "Written Quotes" }, { value: "All Provinces", label: "We Cross Canada" }].map(({ value, label }) => (
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
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Ottawa to Saskatoon: What to Expect From This Interprovincial Move</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>Moving from Ottawa to Saskatoon is one of Canada's classic cross-country routes — heading west from Ontario's capital region, through the boreal forests of Northern Ontario, across the flat prairies of Manitoba, and into Saskatchewan's largest city. The 2,750 km journey passes through three provinces and takes professional moving crews three to four days to complete.</p>
            <p>Because this is an interprovincial move, it is subject to federal transportation regulations rather than provincial ones. Your moving company must hold a valid CVOR certificate for commercial vehicle operation across provincial boundaries. Always verify this credential before signing with any company.</p>
            <p>Prestige Moving has completed multiple Ottawa–Saskatchewan runs for clients moving for work in the resource sector, academic positions at the University of Saskatchewan, and families seeking more affordable housing in one of Canada's most livable cities. Our long distance crews know the route, the requirements, and how to deliver your belongings safely after nearly 3,000 kilometres.</p>
            <p>For specialist cross-country moving guidance from Ottawa, the team at{" "}
              <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline font-semibold">Ottawa Long Distance Movers</a>
              {" "}provides expert advice on interprovincial moves including the Ottawa to Saskatoon corridor.
            </p>
          </div>
        </section>

        <section id="costs">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Ottawa to Saskatoon Moving Costs — 2026</h2>
          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            {[
              { size: "1 Bedroom", range: "$3,500–$5,500", note: "Apartment, 2 movers, 3 days" },
              { size: "2–3 Bedroom", range: "$5,500–$9,000", note: "Home, 3 movers, 3–4 days" },
              { size: "4+ Bedroom", range: "$8,500–$13,000+", note: "Large home, 4 movers, 4 days" },
            ].map(({ size, range, note }) => (
              <div key={size} className="rounded-xl border border-gray-200 bg-white p-5 text-center">
                <div className="text-sm font-semibold text-gray-500 mb-1">{size}</div>
                <div className="text-2xl font-extrabold text-[#1A2332] mb-1">{range}</div>
                <div className="text-xs text-gray-500">{note}</div>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 p-4 rounded-xl bg-[#C5A572]/10 border border-[#C5A572]/30">
              <DollarSign className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Volume matters most.</strong> Interprovincial moves are priced by weight and cubic footage. Decluttering before your move is the single most effective way to reduce cost. Sell furniture you won't need in Saskatoon — house prices are lower there and you may find it cheaper to buy new than to ship.</p>
            </div>
            <div className="flex gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
              <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Binding written quotes only.</strong> Prestige Moving provides written, binding quotes for every interprovincial move. The price in your contract is the price you pay. Call <a href="tel:6136004000" className="text-[#C5A572] hover:underline">(613) 600-4000</a> for your free quote.</p>
            </div>
          </div>
        </section>

        <section id="planning">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Planning Your Ottawa to Saskatoon Move — Timeline</h2>
          <div className="space-y-4">
            {[
              { when: "10–12 Weeks Before", title: "Begin Planning and Decluttering", body: "Cross-country moves require more lead time than Ontario-only moves. Start by decluttering aggressively — sell large furniture items that won't fit your Saskatoon home or that cost more to ship than to replace. Research Saskatoon neighbourhoods (Nutana, Riversdale, Stonebridge, College Park) to narrow down where you want to live." },
              { when: "8 Weeks Before", title: "Request In-Home Estimates", body: "Contact two to three long distance moving companies and request in-home estimates — not phone quotes. A reputable interprovincial mover will send an estimator to your Ottawa home, catalogue your belongings, and provide a binding written price. Do not accept online estimates for a move of this scale." },
              { when: "6 Weeks Before", title: "Book Your Mover and Plan Your Own Travel", body: "Sign your moving contract and pay your deposit. Plan your own travel to Saskatoon — whether driving (a beautiful multi-day drive through the prairies) or flying, make sure your arrival overlaps with your delivery window. Book accommodations at both ends if needed." },
              { when: "3–4 Weeks Before", title: "Pack Non-Essentials and Notify Services", body: "Begin systematic packing of non-essential rooms. Notify Canada Post, your bank, your employer, the CRA, and Service Canada of your upcoming address change. Set up utilities at your Saskatoon address well in advance — utility setup in a new province can take time." },
              { when: "Loading Day", title: "Ottawa Pick-Up", body: "Crew arrives, completes written inventory, loads truck. You sign the bill of lading. Keep your copy. Your crew heads west. Stay in contact — your mover should provide a driver phone number and regular updates throughout transit." },
              { when: "Delivery Day", title: "Saskatoon Arrival", body: "Your crew arrives in Saskatoon within the agreed delivery window. Every item is placed as directed, beds and furniture assembled, and you do a joint walkthrough to confirm everything arrived undamaged." },
            ].map(({ when, title, body }) => (
              <div key={when} className="flex gap-5 p-5 rounded-xl border border-gray-200 bg-white">
                <div className="shrink-0 min-w-[90px]">
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
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">About Saskatoon — What Ottawa Residents Should Know</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>Saskatoon is Saskatchewan's largest city, with a population of approximately 330,000 in the greater metropolitan area. Nicknamed "Paris of the Prairies" for its seven bridges over the South Saskatchewan River, Saskatoon has consistently ranked among Canada's most livable cities for its combination of affordability, safety, strong employment, and community spirit.</p>
            <p><strong className="text-[#1A2332]">Economy:</strong> Saskatoon's economy is one of Canada's most diversified outside the major metros. Potash and uranium mining (Saskatchewan produces 40%+ of the world's potash), agriculture and agri-food, the University of Saskatchewan, health care (Saskatoon Health Region), and a growing technology sector all drive strong employment and economic resilience.</p>
            <p><strong className="text-[#1A2332]">Housing affordability:</strong> The average house price in Saskatoon is roughly 50–60% less than in Ottawa. Young families, professionals, and retirees moving from Ontario frequently express amazement at what their housing budget can get them in Saskatoon — detached homes with large lots in family-friendly neighbourhoods at prices that would barely buy a condo in Ottawa.</p>
            <p><strong className="text-[#1A2332]">Weather transition:</strong> Saskatoon winters are cold (average -17°C in January) but notably drier and sunnier than Ottawa's wet, icy winters. Prairie winters are harsh but crisp. Summers are warm and bright, with long daylight hours and world-class river valley trails and parks.</p>
            <p><strong className="text-[#1A2332]">From Ontario to Saskatchewan — provincial requirements:</strong> Within 90 days of establishing residency in Saskatchewan, you must transfer your Ontario driver's licence to a Saskatchewan licence, register your vehicle with SGI (Saskatchewan Government Insurance), and apply for your Saskatchewan health card (coverage begins after a 3-month wait). Budget for these administrative costs when planning your relocation.</p>
          </div>
        </section>

        <section id="checklist">
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Ottawa to Saskatoon Moving Checklist</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { phase: "10–12 Weeks Before", items: ["Research Saskatoon neighbourhoods", "Begin major declutter", "List and sell furniture you won't move", "Request in-home estimates from movers"] },
              { phase: "6–8 Weeks Before", items: ["Book your interprovincial mover", "Plan your own travel to Saskatoon", "Begin packing non-essential rooms", "Set up Saskatoon utilities in advance"] },
              { phase: "2–4 Weeks Before", items: ["Pack all but daily essentials", "Notify Canada Post — mail forwarding", "Notify CRA, bank, employer", "Prepare essentials bag for your travel"] },
              { phase: "Moving Day", items: ["Sign and keep copy of bill of lading", "Document pre-existing damage on form", "Final walkthrough of Ottawa home", "Confirm driver contact number for updates"] },
              { phase: "Within 90 Days in Saskatoon", items: ["Transfer Ontario licence to SK licence", "Register vehicle with SGI", "Apply for Saskatchewan health card", "Register children in Saskatoon schools"] },
              { phase: "First Month", items: ["Update CRA address online", "Transfer home and auto insurance", "Update bank and investment accounts", "Explore Saskatoon's major neighbourhoods"] },
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
            <h2 className="text-3xl font-bold text-[#1A2332]">Ottawa to Saskatoon Moving FAQ</h2>
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
              { href: "/long-distance-moving-guide-canada", label: "Long Distance Moving Canada", desc: "Complete cross-country guide" },
              { href: "/moving-from-ottawa-to-winnipeg", label: "Ottawa to Winnipeg Movers", desc: "Route through Manitoba" },
              { href: "/ottawa-to-calgary-movers", label: "Ottawa to Calgary Movers", desc: "Alberta career and family moves" },
              { href: "/services/long-distance-moving", label: "Long Distance Moving Service", desc: "Full service overview" },
              { href: "/services/packing-services", label: "Packing Services", desc: "Full packing for cross-country moves" },
              { href: "/book", label: "Get a Free Quote", desc: "Binding written quote" },
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
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Move From Ottawa to Saskatoon?</h2>
          <p className="text-white/65 max-w-xl mx-auto mb-8">Get a free, binding written quote for your Ottawa to Saskatoon interprovincial move. Experienced crews, full packing service, all provinces covered.</p>
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
