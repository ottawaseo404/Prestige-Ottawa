import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, Shield, Clock, TruckIcon, ChevronDown, Snowflake, ThumbsUp, AlertTriangle } from "lucide-react";

const FAQS = [
  { q: "Is it okay to move in winter in Ottawa?", a: "Yes — and it often comes with real advantages. Winter is Ottawa's off-peak moving season, which means more scheduling flexibility, lower demand on weekend slots, and more crew attention per move. The cold is manageable with proper preparation, and Prestige Moving has successfully completed hundreds of Ottawa winter moves." },
  { q: "How do you protect furniture in cold weather?", a: "All furniture is wrapped in blankets before it leaves the building, minimizing exposure time. Trucks are pre-warmed when possible. Electronics and temperature-sensitive items are moved last from the origin and unpacked first at the destination to minimize exposure. We use additional wardrobe boxes to protect hanging items." },
  { q: "What happens if there's a major snowstorm?", a: "Safety is the priority. If Environment Canada issues a winter storm warning that makes roads unsafe, we will contact you to reschedule at no penalty. In most cases, Ottawa winter conditions — even significant snowfall — do not prevent us from operating safely." },
  { q: "Does moving in winter cost less in Ottawa?", a: "Prestige Moving's rates are the same year-round — we don't offer winter discounts or charge seasonal premiums. What winter does offer is better date availability, faster response times, and often a faster overall move because roads and parking are less congested." },
  { q: "How do you handle icy walkways?", a: "Our crew salts and sands walkways as needed, lays down floor runners to protect your interior from slush and salt, and moves with extra care on icy surfaces. We carry ice melt on every winter move." },
];

const WINTER_TIPS = [
  { title: "Book Mid-Week if Possible", desc: "Ottawa's winter moving market is less competitive mid-week. More crew availability, easier parking, and no street snow clearing conflicts." },
  { title: "Set the Heat Before Moving Day", desc: "Keep your destination home or apartment at 18°C+ on moving day so items aren't moving into a cold space. Pipes unfreezing on moving day is an avoidable delay." },
  { title: "Clear Your Walkway Night Before", desc: "Salt or sand icy pathways the evening before your move. Even a small amount of ice on entry steps significantly slows down a move." },
  { title: "Pack Electronics Last", desc: "Electronics going from warm indoor air to cold trucks and back need to acclimate. Pack them last on the truck, move them inside first, and allow 1–2 hours before powering on." },
  { title: "Protect Your Floors", desc: "Snow, slush, and road salt tracked indoors damages hardwood and tile. We lay floor runners — you can also have old towels at both entry points to wipe boots." },
  { title: "Leave Extra Time", desc: "Winter moves in Ottawa may run 15–30 minutes longer than summer equivalents due to slower traffic and extra protection steps. Build this buffer into your day." },
];

export default function MovingInWinterOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving in Winter Ottawa | Ottawa Winter Moving Guide 2026 | Prestige Moving</title>
        <meta name="description" content="Complete guide to moving in winter in Ottawa. Tips for cold-weather moves, protecting furniture in -20°C, icy walkways, and why winter is actually a great time to move. Prestige Moving — (613) 600-4000." />
        <meta name="keywords" content="moving in winter Ottawa, Ottawa winter moving, winter movers Ottawa, moving in cold weather Ottawa, winter moving tips Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-in-winter-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Moving in Winter Ottawa: Complete Guide 2026", "publisher": { "@type": "Organization", "name": "Prestige Moving Ottawa" }, "url": "https://prestigemoving.ca/moving-in-winter-ottawa" })}</script>
      </Helmet>
      <SharedNavigation />

      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Snowflake className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Winter Moving Ottawa</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving in Winter Ottawa —<br className="hidden md:block" /> The Complete 2026 Guide</h1>
            <p className="text-white/70 text-lg mb-8">Ottawa winters are real — but a winter move doesn't have to be a hard one. With the right preparation and a crew experienced in cold-weather moving, January can be the best month of the year to move. Here's everything you need to know.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Book Your Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Why Ottawa Residents Actually Choose to Move in Winter</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Ottawa's moving market follows a predictable seasonal pattern: demand peaks in June, July, and August — the months when leases expire, school years end, and families choose to relocate. The end of month surge in these summer months creates a market where moving companies are fully booked 3–4 weeks in advance, weekend slots are unavailable, and the rush atmosphere on moving day increases the chance of errors.</p>
            <p>Winter is the opposite. November through March sees dramatically lower demand for Ottawa moving companies, which translates into concrete benefits for clients who move during these months: better date availability (including premium Saturday morning slots), faster booking response times, and crews that have the time and bandwidth to do the job carefully rather than rushing to the next booking.</p>
            <p>The cold is genuinely manageable — especially with a professional crew that has developed cold-weather protocols. Prestige Moving has executed hundreds of Ottawa winter moves at temperatures as low as -25°C. The key is preparation: pre-warming trucks, wrapping all furniture before outdoor exposure, protecting floors from salt and slush, and having ice melt on hand for walkways. Done right, a winter move in Ottawa is often smoother than a summer move.</p>
            <p>For context on costs, see our <Link href="/how-much-does-moving-cost-ottawa" className="text-[#C5A572] hover:underline">2026 Ottawa moving cost guide</Link>. For booking, our <Link href="/moving-quotes-ottawa" className="text-[#C5A572] hover:underline">moving quotes</Link> page has full rate information.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-3 text-center">6 Winter Moving Tips for Ottawa</h2>
          <p className="text-gray-500 text-center mb-10 text-sm max-w-2xl mx-auto">Prepare for your Ottawa winter move with these practical steps — most take less than 10 minutes but make a significant difference on moving day.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WINTER_TIPS.map(({ title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-5">
                <CheckCircle2 className="h-5 w-5 text-[#C5A572] mb-3" />
                <h3 className="font-bold text-[#1A2332] mb-2 text-sm">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">What Prestige Moving Does Differently in Winter</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Our cold-weather moving protocol has evolved through Ottawa winters that regularly reach -20°C to -30°C with windchill. Here's the specific extra steps Prestige Moving takes on every winter move:</p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
              <li>Trucks are pre-warmed before loading begins at origin</li>
              <li>All furniture is blanket-wrapped before leaving the building — no unprotected exposure to cold</li>
              <li>Floor runners are deployed at both addresses to catch salt, slush, and water from boots</li>
              <li>Crew carries ice melt and a bag of sand for icy walkways</li>
              <li>Electronics and temperature-sensitive items are loaded last, unloaded first</li>
              <li>Crew wears cold-rated work gear and maintains pace — cold slows people down without proper preparation</li>
              <li>Clients are called the day before if any significant weather event is forecast</li>
            </ul>
            <p>These steps aren't extras — they're standard on every winter job. Related reading: <Link href="/ottawa-moving-checklist" className="text-[#C5A572] hover:underline">Ottawa Moving Checklist</Link> · <Link href="/preparing-appliances-for-moving-ottawa" className="text-[#C5A572] hover:underline">Preparing Appliances for Moving</Link></p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Winter Moving Ottawa — FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Book Your Ottawa Winter Move?</h2>
          <p className="text-white/65 mb-8">More availability · Less stress · Same professional standard · 5.0★ rated crew</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
