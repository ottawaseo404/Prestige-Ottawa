import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, Package, Sofa, Shield, Star, MapPin, Clock, Truck } from "lucide-react";

const FAQS = [
  { q: "Do you disassemble and reassemble furniture in Ottawa?", a: "Yes — disassembly and reassembly is included in your move at no extra charge. We bring all necessary tools. Beds, sectionals, wardrobes, desks, dining tables, and bookshelves are all handled. If an item requires specialty hardware or manufacturer instructions, we ask that you have those available." },
  { q: "Can you move just one piece of furniture in Ottawa?", a: "Yes. We handle single-item furniture moves — a sofa, a dining table, a bed frame — within Ottawa. These are priced based on the specific items and addresses. Call (613) 600-4000 to discuss a single-item move quote." },
  { q: "How do you protect furniture during a move?", a: "Every item is fully wrapped in quilted moving blankets before it leaves your home. Corners receive extra foam padding. Sofas and upholstered items get stretch-wrap over the blankets for complete protection. Artwork and mirrors get custom wrapping and cardboard edge protection." },
  { q: "Can you move furniture without scratching hardwood floors?", a: "Yes. We use furniture sliders on all hardwood floors, deploy floor runners through all traffic areas, and lift items rather than drag them. Floor protection is standard on every Prestige Moving job." },
  { q: "Do you move antique or valuable furniture?", a: "Yes, but antiques and valuable pieces get our highest-level protection protocol: custom padding, crating for extremely fragile items, and careful handling by senior crew members. Let us know about special pieces when booking so we can plan appropriately." },
  { q: "How much do furniture movers in Ottawa cost?", a: "Furniture moving costs in Ottawa depend on the number of items, distance between locations, access (stairs, elevators), and whether disassembly is required. A single-item move within Ottawa typically starts around $150–$250. A full home furniture move is priced as part of a standard residential move — call (613) 600-4000 for a written quote specific to your move." },
  { q: "Do Ottawa furniture movers need elevator bookings for condos?", a: "Yes. If you're in a condo or apartment building, you'll need to book the elevator with your building management before your move date. We work around your elevator booking window and coordinate the timing of our crew to make the most of your allotted time." },
  { q: "Can furniture movers in Ottawa move items between rooms (not just between addresses)?", a: "Absolutely. In-home furniture rearranging is a standalone service — no full move required. Whether you're redecorating, making room for new pieces, or staging your home for sale, our crew comes equipped with sliders and tools to rearrange safely without floor damage." },
];

const FURNITURE_TYPES = [
  { name: "Sectional Sofas", desc: "Full disassembly, transport, and reassembly of L-shapes and modular sectionals" },
  { name: "King & Queen Beds", desc: "Frame disassembly, mattress wrapping, headboard padding — all included" },
  { name: "Dining Tables & Hutches", desc: "Glass removal, leg disassembly, full blanket wrap for table tops and hutch glass" },
  { name: "Wardrobes & Armoires", desc: "Large wardrobes often require mirror removal and door disassembly for safe transport" },
  { name: "Home Office Desks", desc: "Standing desks, corner desks, L-shaped units — all fully disassembled and reassembled" },
  { name: "Bookshelves & Cabinets", desc: "Shelf removal, secure packing of contents if needed, full reassembly at destination" },
  { name: "Antiques & Heirlooms", desc: "Highest-level padding protocol: custom blanket wrapping + foam, crating available" },
  { name: "Artwork & Mirrors", desc: "Cardboard corner protection, full blanket wrap, vertical transport to prevent cracking" },
  { name: "Piano & Heavy Items", desc: "Pianos and other heavy specialty items use our dedicated equipment and trained crew" },
];

const NEIGHBOURHOODS = [
  { name: "Centretown", href: "/residential-movers-centretown" },
  { name: "The Glebe", href: "/residential-movers-the-glebe" },
  { name: "Westboro", href: "/residential-movers-westboro" },
  { name: "Kanata", href: "/residential-movers-kanata" },
  { name: "Orleans", href: "/residential-movers-orleans" },
  { name: "Barrhaven", href: "/residential-movers-barrhaven" },
  { name: "Nepean", href: "/residential-movers-nepean" },
  { name: "Alta Vista", href: "/residential-movers-alta-vista" },
  { name: "Sandy Hill", href: "/residential-movers-sandy-hill" },
  { name: "Hintonburg", href: "/residential-movers-hintonburg" },
  { name: "Rockcliffe Park", href: "/residential-movers-rockcliffe-park" },
  { name: "Manotick", href: "/residential-movers-manotick" },
];

const LAST_UPDATED = "March 2026";

export default function FurnitureMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Furniture Movers Ottawa | Move Any Furniture, Any Size | Prestige Moving</title>
        <meta name="description" content="Ottawa's best furniture movers — full blanket wrapping, disassembly & reassembly included, hardwood floor protection standard. Single-item moves or full home moves across Ottawa. 350+ five-star reviews. Call (613) 600-4000." />
        <meta name="keywords" content="furniture movers Ottawa, furniture moving Ottawa, furniture movers in Ottawa, move furniture Ottawa, Ottawa furniture moving company, sofa movers Ottawa, furniture removal Ottawa, furniture rearranging Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/furniture-movers-ottawa" />
        <meta property="og:title" content="Furniture Movers Ottawa | Move Any Furniture, Any Size | Prestige Moving" />
        <meta property="og:description" content="Ottawa's best furniture movers — full blanket wrapping, disassembly & reassembly included, floor protection standard. 350+ five-star reviews. Call (613) 600-4000." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/furniture-movers-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/furniture-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Ottawa Movers", "item": "https://prestigemoving.ca" }, { "@type": "ListItem", "position": 2, "name": "Furniture Movers Ottawa", "item": "https://prestigemoving.ca/furniture-movers-ottawa" } ] })}</script>
      </Helmet>

      <SharedNavigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[#C5A572]/60 text-xs mb-3">
              <Link href="/" className="hover:text-[#C5A572] transition-colors">Ottawa Movers</Link>
              <span className="mx-2">/</span>
              <span className="text-[#C5A572]">Furniture Movers Ottawa</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Package className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Furniture Moving Specialists</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Furniture Movers Ottawa —<br className="hidden md:block" /> Wrapped, Protected, Placed Right
            </h1>
            <p className="text-white/70 text-lg mb-6">
              Ottawa's trusted furniture movers since 2014. Every piece is blanket-wrapped before it leaves your home, protected through transit, and placed exactly where you want it. Full home moves, single-item furniture moves, and in-home rearranging — all covered by the <Link href="/" className="text-[#C5A572] hover:underline">movers Ottawa</Link> trusts most.
            </p>
            <div className="flex flex-wrap gap-4 mb-6 text-white/60 text-sm">
              <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-[#C5A572]" /> 350+ five-star reviews</span>
              <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-[#C5A572]" /> Fully insured</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-[#C5A572]" /> Same-day available</span>
              <span className="text-[#C5A572]/40 text-xs mt-1">Content last reviewed: {LAST_UPDATED}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Full Blanket Wrapping", "Disassembly & Reassembly Included", "Floor Protection Standard", "Antique & Valuable Item Handling", "5.0★ Rated on Google"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>

      {/* What's included + furniture types */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1A2332] mb-5">What's Included in Every Furniture Move</h2>
              <div className="space-y-3 mb-8">
                {[
                  "Full quilted blanket wrapping on every piece",
                  "Stretch wrap over blankets for upholstered items",
                  "Corner and edge foam padding for wooden pieces",
                  "Disassembly and reassembly with all hardware retained",
                  "Furniture sliders on hardwood floors throughout",
                  "Floor runners in all high-traffic pathways",
                  "Custom cardboard protection for mirrors and artwork",
                  "Placement and positioning at destination — exactly as directed",
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-bold text-[#1A2332] mb-3">Why Ottawa Homeowners Choose Prestige</h3>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>As <Link href="/" className="text-[#C5A572] hover:underline">Ottawa movers</Link> with over a decade in the city, we know every neighbourhood's quirks — the narrow staircases in Centretown walk-ups, the tight hallways in older Ottawa South homes, the elevators in Westboro condos that need booking 72 hours ahead. Our furniture movers in Ottawa plan each job before the truck arrives.</p>
                <p>Every crew member is trained in furniture protection from day one. We don't use blanket wrapping as an upsell — it's included in every job, for every piece, at no extra charge. That's why we have 350+ five-star reviews and why <Link href="/" className="text-[#C5A572] hover:underline">movers Ottawa</Link> residents recommend most is consistently Prestige Moving.</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Furniture We Move Across Ottawa</h2>
              <div className="space-y-3">
                {FURNITURE_TYPES.map(ft => (
                  <div key={ft.name} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Sofa className="h-4 w-4 text-[#C5A572] shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-[#1A2332] text-sm">{ft.name}</div>
                      <div className="text-gray-600 text-xs mt-0.5">{ft.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-depth content section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8">Furniture Moving in Ottawa — What You Should Know</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-sm">
            <p>
              Ottawa's housing stock creates specific challenges for furniture movers. The city has a dense mix of early-20th-century row homes in areas like Hintonburg, Sandy Hill, and Lowertown with tight doorways and steep staircases; mid-century bungalows across Nepean and Gloucester with low-clearance basements; and modern high-rise condos in Centretown and Westboro that require elevator pre-booking and careful timing. Our furniture movers in Ottawa know these buildings and plan accordingly.
            </p>
            <p>
              Single-item furniture moves are one of Ottawa's most underserved needs. Many moving companies won't dispatch for a single sofa or dining table — but Prestige Moving handles these regularly. Whether you've purchased a piece from a Kijiji seller and need it moved across town, or you're replacing a sectional and need the old one gone, our furniture movers Ottawa team can handle it. Call (613) 600-4000 for a quick single-item quote.
            </p>
            <p>
              For larger homes — 4-bedroom houses with a full dining room, living room, multiple bedroom sets, and home office furniture — our furniture movers Ottawa crew arrives with the right size truck, the right number of people, and all protection materials on board. There are no extra charges for blankets, straps, or floor runners. What you see in your quote is what you pay.
            </p>
            <p>
              In-home furniture rearranging is available as a standalone service across Ottawa. If you're redesigning a room, need the sectional on a different wall, or want furniture repositioned for better flow before an open house, we dispatch a crew with sliders and tools. No full move required — just the furniture moving service you need. See our dedicated <Link href="/furniture-rearranging-ottawa" className="text-[#C5A572] hover:underline">furniture rearranging Ottawa</Link> page for details on this service.
            </p>
            <p>
              For antique furniture, heirloom pieces, and high-value items, we offer enhanced protection: custom-cut foam, crating for extremely fragile pieces, and assignment to senior crew members who specialize in careful handling. We also coordinate with <Link href="/antique-movers-ottawa" className="text-[#C5A572] hover:underline">antique movers Ottawa</Link> protocols for estates and collections. Let us know about special pieces at the time of booking.
            </p>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-3 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-[#C5A572]" />
            Furniture Movers Across Ottawa Neighbourhoods
          </h2>
          <p className="text-gray-500 text-sm mb-8">Our furniture movers serve every Ottawa neighbourhood. Click your area for dedicated local moving information.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {NEIGHBOURHOODS.map(n => (
              <Link key={n.href} href={n.href} className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg text-sm text-[#1A2332] hover:border-[#C5A572] hover:text-[#C5A572] transition-colors">
                <ArrowRight className="h-3.5 w-3.5 text-[#C5A572] shrink-0" />
                {n.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-6">
            All furniture moving across Ottawa and surrounding areas. As the <Link href="/" className="text-[#C5A572] hover:underline">Ottawa movers</Link> with the most reviews in the city, we serve Gatineau, Stittsville, Manotick, and beyond. Call (613) 600-4000 to confirm coverage for your specific addresses.
          </p>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-[#1A2332]/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1A2332] mb-6">Related Moving Services in Ottawa</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Furniture Rearranging Ottawa", href: "/furniture-rearranging-ottawa", desc: "In-home rearranging without a full move" },
              { label: "Antique Movers Ottawa", href: "/antique-movers-ottawa", desc: "Enhanced protection for heirlooms & antiques" },
              { label: "Appliance Movers Ottawa", href: "/appliance-movers-ottawa", desc: "Fridges, washers, dryers, and more" },
              { label: "White Glove Moving Ottawa", href: "/white-glove-movers-ottawa", desc: "Premium full-service moving experience" },
              { label: "Piano Moving Ottawa", href: "/ottawa-piano-movers", desc: "Upright and grand pianos across Ottawa" },
              { label: "Packing Services Ottawa", href: "/ottawa-packing-services", desc: "Full or partial packing by our crew" },
              { label: "Ottawa Movers", href: "/", desc: "Full residential moving across Ottawa" },
              { label: "Residential Moving Ottawa", href: "/services/residential-moving", desc: "Complete home moving services" },
            ].map(s => (
              <Link key={s.href} href={s.href} className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-[#C5A572] transition-colors">
                <div className="font-semibold text-[#1A2332] text-sm mb-1">{s.label}</div>
                <div className="text-gray-500 text-xs">{s.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Furniture Movers Ottawa — Frequently Asked Questions</h2>
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

      {/* CTA */}
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Book Ottawa's Furniture Moving Specialists</h2>
          <p className="text-white/65 mb-2">Written quote · All furniture fully wrapped · 5.0★ rated crew · Floor protection included</p>
          <p className="text-white/40 text-xs mb-8">
            Prestige Moving — the <Link href="/" className="text-[#C5A572]/70 hover:text-[#C5A572]">movers Ottawa</Link> residents have trusted since 2014.
          </p>
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
