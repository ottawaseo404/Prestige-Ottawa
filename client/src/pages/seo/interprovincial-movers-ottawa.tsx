import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon, MapPin } from "lucide-react";

const ROUTES = [
  { label: "Ottawa → Toronto", km: "~450 km", href: "/moving-from-ottawa-to-toronto" },
  { label: "Ottawa → Calgary", km: "~3,400 km", href: "/moving-from-ottawa-to-calgary" },
  { label: "Ottawa → Vancouver", km: "~4,500 km", href: "/moving-from-ottawa-to-vancouver" },
  { label: "Ottawa → Edmonton", km: "~3,500 km", href: "/moving-from-ottawa-to-edmonton" },
  { label: "Ottawa → Winnipeg", km: "~2,000 km", href: "/moving-from-ottawa-to-winnipeg" },
  { label: "Montreal → Ottawa", km: "~200 km", href: "/moving-from-montreal-to-ottawa" },
  { label: "Ottawa → Gatineau", km: "~15 km", href: "/ottawa-to-gatineau-movers" },
];

const FAQS = [
  { q: "What makes a move 'interprovincial'?", a: "An interprovincial move crosses a provincial or territorial border. From Ottawa, this includes Ottawa to Gatineau/Hull (Ontario to Quebec), Ottawa to Calgary or Edmonton (Ontario to Alberta), Ottawa to Vancouver (Ontario to BC), and Ottawa to Winnipeg (Ontario to Manitoba). Different insurance, licensing, and logistical considerations apply." },
  { q: "Is interprovincial moving more expensive than local moving?", a: "Yes — interprovincial moves involve greater distances, additional fuel costs, driver time, and often overnight stays for long-haul routes. Pricing is flat-rate based on volume and distance, not hourly. We provide a complete written quote covering all costs." },
  { q: "Do I need to do anything special when moving between provinces?", a: "For household goods, no customs process applies to moves between Canadian provinces. However, you will need to update your driver's licence, vehicle registration, and provincial health card within a specified period after establishing residency in your new province. Each province has different timelines — typically 60–90 days." },
  { q: "Is Prestige Moving licensed for all provinces?", a: "Yes. We hold the appropriate licensing for interprovincial transport across Canada. All moves are fully insured for the complete journey regardless of which provinces are crossed." },
  { q: "What's the delivery window for interprovincial moves?", a: "Ontario destinations (Kingston, Toronto, London): same day or next day. Manitoba (Winnipeg): 4–7 days. Alberta (Calgary, Edmonton): 7–12 days. BC (Vancouver): 7–14 days. Exact delivery windows are confirmed at booking." },
];

export default function InterprovincialMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Interprovincial Movers Ottawa | Cross-Province Moving Company | Prestige Moving</title>
        <meta name="description" content="Ottawa's interprovincial movers. We handle moves from Ottawa to BC, Alberta, Manitoba, Quebec, and all Canadian provinces. Written quote, 5.0★ rated. Call (613) 600-4000." />
        <meta name="keywords" content="interprovincial movers Ottawa, cross province movers Ottawa, Ottawa provincial moving, out of province movers Ottawa, Canadian interprovincial moving" />
        <link rel="canonical" href="https://prestigemoving.ca/interprovincial-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/interprovincial-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" }, "areaServed": "Canada" })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Interprovincial Moving — Ottawa</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Interprovincial Movers Ottawa — Moving Between Provinces</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa sits on the border of Ontario and Quebec — making it one of Canada's busiest hubs for interprovincial moving. Whether you're crossing the river to Gatineau or moving across the country to Vancouver, Prestige Moving handles every interprovincial route with proper licensing, full insurance, and written flat-rate quotes.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["All Canadian Provinces", "Licensed Interprovincial", "Flat-Rate Quotes", "5.0★ Rated", "Fully Insured"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Popular Interprovincial Routes from Ottawa</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {ROUTES.map(r => (
              <Link key={r.label} href={r.href}>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover-elevate cursor-pointer">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[#C5A572]" />
                    <span className="font-semibold text-[#1A2332]">{r.label}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{r.km}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Moving Between Provinces — What to Know</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Canada's provinces have different rules, regulations, and costs-of-living. Moving between them is common — driven by career opportunities, family, retirement decisions, and quality-of-life factors. Ottawa's position on the Ontario-Quebec border makes it a particularly active hub for interprovincial moves in both directions.</p>
            <p>From a logistics perspective, interprovincial moves require proper transport licensing, appropriate insurance for the full route, experienced long-haul drivers who know the corridors, and a delivery scheduling system that gives you a confirmed window. We manage all of this — your job is simply to tell us where you're going.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What's Included</h3>
              <div className="space-y-2">
                {["Ottawa-side professional loading", "Full packing available", "Blanket-wrapped furniture protection", "Properly licensed interprovincial transport", "Destination delivery and placement", "Full insurance coverage for entire route"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1A2332] rounded-xl p-5">
              <h3 className="font-bold text-white mb-3">Delivery Windows by Province</h3>
              <div className="space-y-2 text-white/70 text-sm">
                <div className="flex justify-between"><span>Quebec (Gatineau)</span><span className="text-white font-medium">Same day</span></div>
                <div className="flex justify-between"><span>Ontario (Toronto)</span><span className="text-white font-medium">Same/next day</span></div>
                <div className="flex justify-between"><span>Manitoba</span><span className="text-white font-medium">4–7 days</span></div>
                <div className="flex justify-between"><span>Alberta</span><span className="text-white font-medium">7–12 days</span></div>
                <div className="flex justify-between"><span>BC</span><span className="text-white font-medium">7–14 days</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full text-left px-5 py-4 font-semibold text-[#1A2332] flex justify-between items-center" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}<span className="text-[#C5A572] text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Moving Between Provinces from Ottawa?</h2>
          <p className="text-white/70 mb-6">Get a written flat-rate quote for your interprovincial move. Any destination in Canada.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote</Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
