import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, Star, CheckCircle2, ArrowRight, MapPin, Clock, Shield, Truck, Lock } from "lucide-react";

const ROUTE_STATS = [
  { label: "Distance", value: "~700 km" },
  { label: "Drive Time", value: "~7 hours" },
  { label: "Highway", value: "Hwy 401 → Hwy 416" },
  { label: "Move Type", value: "Long-Distance" },
];

const WHY_MOVE = [
  { title: "Government & Tech Jobs", desc: "Ottawa's federal public service and growing tech sector draw professionals from Hamilton regularly. The National Capital Region is one of Canada's most stable job markets." },
  { title: "Cost of Living Shift", desc: "While Hamilton has become more expensive, Ottawa still offers strong value relative to the GTA. Many families find larger homes for comparable prices in Ottawa's outer communities." },
  { title: "University & College", desc: "University of Ottawa and Carleton University draw students from across southern Ontario, including Hamilton and the Hamilton region." },
  { title: "Military Postings", desc: "DND postings at CFB Ottawa regularly relocate Hamilton-area military families to the capital. We are experienced with DND relocation requirements." },
  { title: "Family Reunification", desc: "Ottawa's large established communities draw relatives to join family members already living in the capital — a common driver of Hamilton-to-Ottawa moves." },
  { title: "Retirement Lifestyle", desc: "Ottawa's world-class hospitals, NCC parkways, and vibrant arts scene attract retirees from across Ontario looking for an urban lifestyle with excellent services." },
];

const OTTAWA_NEIGHBORHOODS = [
  { name: "Barrhaven", desc: "Family-friendly suburb with excellent schools and new construction. Popular with families relocating from Hamilton suburbs." },
  { name: "Kanata", desc: "Ottawa's tech hub — home to Dell, Shopify, and many federal contractors. Ideal for tech professionals moving from Hamilton." },
  { name: "Orleans", desc: "Bilingual suburb in Ottawa's east end with a strong community feel. Great value on detached homes relative to central Ottawa." },
  { name: "Westboro", desc: "Trendy urban village with walkable shops and restaurants. Draws professionals and young families from Hamilton's urban neighbourhoods." },
  { name: "Centretown / The Glebe", desc: "Walkable urban living near Parliament Hill. Popular with government professionals and those who want downtown Ottawa life." },
  { name: "Nepean", desc: "Established suburb with a wide range of housing. Strong value for families moving from Hamilton's outer communities." },
];

const TESTIMONIALS = [
  { name: "James & Sandra K.", text: "We moved our whole family from Hamilton to Barrhaven. Prestige Moving was unbelievably organized — they packed everything in Hamilton, drove overnight, and had us unloaded in Ottawa the next morning. Five stars without hesitation.", stars: 5 },
  { name: "Michelle T.", text: "Moving from Hamilton to Ottawa for a federal public service job. Prestige quoted me accurately, arrived exactly on time, and delivered everything in perfect condition. The long-distance process was explained clearly from day one.", stars: 5 },
  { name: "Patrick O.", text: "DND posting from Hamilton to Ottawa — we've moved before but Prestige was the best experience we've had. They knew the DND relocation paperwork, they handled the logistics, and nothing was damaged.", stars: 5 },
];

export default function MovingFromHamiltonToOttawa() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving",
    "url": "https://prestigemoving.ca",
    "telephone": "+16136004000",
    "description": "Long-distance moving company specializing in Hamilton to Ottawa moves. Full service packing, transport, and delivery. Serving all Ontario long-distance routes.",
    "areaServed": [
      { "@type": "City", "name": "Ottawa" },
      { "@type": "City", "name": "Hamilton" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Moving from Hamilton to Ottawa | Long Distance Movers | Prestige Moving</title>
        <meta name="description" content="Professional moving service from Hamilton to Ottawa. Prestige Moving handles full-service long-distance moves from Hamilton to all Ottawa neighbourhoods. Written quotes, full packing, insured transport. Call (613) 600-4000." />
        <meta name="keywords" content="moving from Hamilton to Ottawa, Hamilton to Ottawa movers, long distance movers Hamilton Ottawa, moving company Hamilton Ottawa, Hamilton Ottawa moving" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-from-hamilton-to-ottawa" />
        <meta property="og:title" content="Moving from Hamilton to Ottawa | Prestige Moving" />
        <meta property="og:description" content="Expert long-distance movers for the Hamilton to Ottawa route. Full service packing, transport, and delivery." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <SharedNavigation />

      {/* Hero */}
      <section className="bg-[#1A2332] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6 text-[#C5A572] text-sm font-semibold">
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Hamilton, ON</span>
            <ArrowRight className="h-4 w-4" />
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Ottawa, ON</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Moving from Hamilton to Ottawa —<br />
            <span className="text-[#C5A572]">Stress-Free, Door to Door</span>
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-3xl leading-relaxed">
            Prestige Moving handles the full Hamilton-to-Ottawa route — professional packing in Hamilton, protected long-distance transport, and precise delivery to your new Ottawa address. Written quote, no surprises.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:6136004000">
              <Button className="bg-[#C5A572] text-[#1A2332] font-bold text-base px-6">
                <Phone className="h-4 w-4 mr-2" /> (613) 600-4000
              </Button>
            </a>
            <Link href="/book">
              <Button variant="outline" className="text-white border-white/30 bg-white/10 text-base px-6">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-6 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[#C5A572] text-[#C5A572]" />)}
              <span className="text-white/70 text-sm ml-2">5.0 · 400+ reviews</span>
            </div>
            <span className="text-white/40">|</span>
            <span className="text-white/70 text-sm">$2M+ Insured · WSIB Certified</span>
          </div>
        </div>
      </section>

      {/* Gold Trust Bar */}
      <div className="bg-[#C5A572] py-3 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Full Packing Available", "Insured Transport", "No Hidden Fees", "Written Quote", "5.0★ Rated"].map(t => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" />{t}</span>
          ))}
        </div>
      </div>

      {/* Route Stats */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {ROUTE_STATS.map(s => (
              <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="text-2xl font-black text-[#C5A572] mb-1">{s.value}</div>
                <div className="text-gray-500 text-sm font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Move Hamilton to Ottawa */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-[#1A2332] mb-4">Why People Move from Hamilton to Ottawa</h2>
          <div className="w-16 h-1 bg-[#C5A572] mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_MOVE.map(r => (
              <div key={r.title} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#1A2332] mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the Move Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#1A2332] mb-4">How Your Hamilton-to-Ottawa Move Works</h2>
          <div className="w-16 h-1 bg-[#C5A572] mb-10 rounded-full" />
          <div className="space-y-8">
            {[
              { step: "01", title: "Free Quote — Phone or Online", desc: "Call (613) 600-4000 or complete our online form with your Hamilton pickup details and Ottawa destination. We'll provide a comprehensive written quote within 24 hours — no obligation." },
              { step: "02", title: "Packing Day in Hamilton", desc: "Our crew arrives at your Hamilton address with all packing materials. We wrap, pack, and protect every item using double-wall boxes, furniture blankets, and custom padding. You can also choose to pack yourself and have us load only." },
              { step: "03", title: "Long-Distance Transport", desc: "Your belongings travel in our dedicated, fully-padded truck — no mixing of loads with other jobs. We provide real-time updates on your shipment's location and estimated Ottawa delivery window." },
              { step: "04", title: "Delivery to Your Ottawa Address", desc: "We deliver, unload, and place furniture exactly where you direct in your new Ottawa home. All packing materials are removed. You're completely set up from day one." },
            ].map(s => (
              <div key={s.step} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C5A572] flex items-center justify-center text-[#1A2332] font-black text-sm">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2332] text-lg mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ottawa Neighbourhoods */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-[#1A2332] mb-4">Popular Ottawa Destinations from Hamilton</h2>
          <div className="w-16 h-1 bg-[#C5A572] mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OTTAWA_NEIGHBORHOODS.map(n => (
              <div key={n.name} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#1A2332] mb-2">{n.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6 text-center">We deliver to every Ottawa neighbourhood and all surrounding communities including Kanata, Stittsville, Manotick, and Carleton Place.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-[#1A2332] mb-4">What Hamilton-Ottawa Clients Say</h2>
          <div className="w-16 h-1 bg-[#C5A572] mb-12 rounded-full" />
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex mb-3">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[#C5A572] text-[#C5A572]" />)}
                </div>
                <p className="text-gray-700 text-sm italic mb-4 leading-relaxed">"{t.text}"</p>
                <div className="text-[#1A2332] font-bold text-sm">{t.name}</div>
                <div className="text-gray-400 text-xs">Hamilton → Ottawa</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Prestige */}
      <section className="py-20 px-4 bg-[#1A2332]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">Why Choose Prestige Moving for Hamilton-to-Ottawa</h2>
          <div className="w-16 h-1 bg-[#C5A572] mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: "$2M+ Insurance on Every Move", desc: "Your belongings are fully insured throughout the entire Hamilton-to-Ottawa route — packing, loading, transit, and delivery." },
              { icon: Truck, title: "Dedicated Truck — No Mixing Loads", desc: "Your belongings travel in their own truck, not shared with other jobs. What leaves Hamilton arrives in Ottawa." },
              { icon: Star, title: "5.0 Star Rating — 400+ Reviews", desc: "Ottawa's highest-rated moving company. We've handled hundreds of long-distance moves with zero claims and zero complaints." },
              { icon: Clock, title: "On-Time Guaranteed", desc: "We commit to a delivery window and meet it. For long-distance moves, we provide real-time location updates so you're never guessing." },
              { icon: Lock, title: "Written Quote — No Surprises", desc: "Your quote is your final price. We don't add fuel surcharges, tolls, or hidden fees after the fact." },
              { icon: CheckCircle2, title: "DND Relocation Experienced", desc: "We understand DND relocation requirements and paperwork. Military families from Hamilton moving to Ottawa are a regular part of our practice." },
            ].map(r => (
              <div key={r.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C5A572]/20 flex items-center justify-center">
                  <r.icon className="h-5 w-5 text-[#C5A572]" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{r.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#1A2332] mb-4">Hamilton to Ottawa Moving FAQ</h2>
          <div className="w-16 h-1 bg-[#C5A572] mb-10 rounded-full" />
          <div className="space-y-6">
            {[
              { q: "How much does it cost to move from Hamilton to Ottawa?", a: "Hamilton-to-Ottawa move costs depend on the volume of your belongings, whether you need packing services, and the access conditions at both locations. Call (613) 600-4000 for a free, comprehensive written quote with no obligation." },
              { q: "How long does the Hamilton to Ottawa move take?", a: "The drive from Hamilton to Ottawa is approximately 700 km and takes around 7 hours. Packing, loading, transit, and unloading typically make a Hamilton-Ottawa move a 1–2 day process depending on the size of your home." },
              { q: "Do you handle packing in Hamilton?", a: "Yes. Our crew arrives at your Hamilton address with all packing materials and packs everything professionally. We also offer partial packing (kitchen, fragile items) if you prefer to pack most of the home yourself." },
              { q: "Is my shipment insured during transit?", a: "Yes. Prestige Moving carries $2M+ liability insurance covering your belongings throughout the full move — packing through final delivery in Ottawa." },
              { q: "How far in advance should I book a Hamilton to Ottawa move?", a: "For summer moves (May–September), book 4–6 weeks in advance. Long-distance move dates fill significantly faster than local dates. Fall and winter moves can typically be booked with 2–3 weeks notice." },
              { q: "Do you move from all Hamilton neighbourhoods?", a: "Yes — we pick up from all Hamilton areas including the Mountain, Ancaster, Dundas, Stoney Creek, Waterdown, and the downtown core. We deliver to every Ottawa neighbourhood and surrounding communities." },
            ].map(faq => (
              <div key={faq.q} className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-[#1A2332] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-10 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-bold text-[#1A2332] mb-4">Related Long Distance Routes</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Toronto → Ottawa", href: "/moving-to-ottawa-from-toronto" },
              { label: "Ottawa → Toronto", href: "/moving-from-ottawa-to-toronto" },
              { label: "Ottawa → Hamilton", href: "/moving-from-ottawa-to-hamilton" },
              { label: "Ottawa → Montreal", href: "/ottawa-to-montreal-movers" },
              { label: "Ottawa → Vancouver", href: "/moving-from-ottawa-to-vancouver" },
              { label: "Ottawa → Calgary", href: "/moving-from-ottawa-to-calgary" },
            ].map(r => (
              <Link key={r.href} href={r.href}>
                <Button variant="outline" size="sm" className="text-[#1A2332] border-gray-300">
                  {r.label} <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#C5A572]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#1A2332] mb-4">Ready to Move from Hamilton to Ottawa?</h2>
          <p className="text-[#1A2332]/80 mb-8 text-lg">Get your free written quote today. We serve the full Hamilton-to-Ottawa route with packing, transport, and delivery — all included if you need it.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:6136004000">
              <Button className="bg-[#1A2332] text-white font-bold text-base px-8">
                <Phone className="h-4 w-4 mr-2" /> (613) 600-4000
              </Button>
            </a>
            <Link href="/book">
              <Button variant="outline" className="border-[#1A2332] text-[#1A2332] font-bold text-base px-8">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}
