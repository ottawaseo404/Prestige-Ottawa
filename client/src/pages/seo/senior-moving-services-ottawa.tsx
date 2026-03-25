import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, Heart, Shield, Clock, Users, MapPin, ChevronRight, Lock } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

const faq = [
  { q: "What senior moving services do Ottawa senior movers offer?", a: "Prestige Moving provides full-service moving for seniors in Ottawa including professional packing, careful furniture handling, downsizing assistance, coordination with retirement communities, full unpacking at the destination, and family coordination for remote relatives. We move at a pace comfortable for our senior clients and brief every crew before arrival." },
  { q: "Can Ottawa senior movers help with downsizing?", a: "Yes. We work with senior clients who need to downsize from a family home to a condo, retirement residence, or assisted living. We help categorize belongings: keeping, transferring to family, donating to Ottawa charities, or disposal. We coordinate donation pickups with the Salvation Army, Habitat for Humanity ReStore, and other Ottawa organizations." },
  { q: "Do Ottawa senior movers move clients into retirement homes?", a: "Absolutely. Prestige Moving regularly moves seniors into Ottawa retirement communities including Chartwell, Revera, Amica, Seasons, and private retirement residences across the city. We coordinate delivery windows, elevator booking, and floor access directly with the facility — no extra work for your family." },
  { q: "How do Ottawa senior moving services differ from regular moves?", a: "Senior moves require extra patience, more care with antiques and heirlooms, a slower pace, and often more packing assistance. Our senior-specialized crew is briefed on the emotional context of each move before arrival. We allow extra time in the day's schedule and assign experienced crew leads to every senior move." },
  { q: "How much do Ottawa senior moving services cost?", a: "Senior moves with Prestige Moving start at $155/hr for a 2-mover Premium team — the same competitive rate as all our residential moves. Full-service packing is available for an additional flat fee. We provide written quotes with no hidden fees before every move. Mid-week scheduling (Tue–Thu) often offers the best availability." },
  { q: "Do Ottawa senior movers help with long-distance moves?", a: "Yes. Many Ottawa seniors relocate to be closer to family in Toronto, Vancouver, Calgary, or other cities. We provide full long-distance senior moving service with professional packing, binding quotes, GPS tracking, climate-controlled transport, and extra care for precious items throughout the journey." },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Ottawa Movers", "item": "https://prestigemoving.ca" },
    { "@type": "ListItem", "position": 2, "name": "Senior Movers Ottawa", "item": "https://prestigemoving.ca/senior-movers-ottawa" },
    { "@type": "ListItem", "position": 3, "name": "Ottawa Senior Movers", "item": "https://prestigemoving.ca/senior-moving-services-ottawa" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faq.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ottawa Senior Movers",
  "serviceType": "Senior Moving Services",
  "provider": {
    "@type": "MovingCompany",
    "name": "Prestige Moving Ottawa",
    "url": "https://prestigemoving.ca",
    "telephone": "(613) 600-4000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "50 Colonnade Rd Unit 200B",
      "addressLocality": "Ottawa",
      "addressRegion": "ON",
      "postalCode": "K2E 7J6",
      "addressCountry": "CA"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "400"
    }
  },
  "areaServed": { "@type": "City", "name": "Ottawa" },
  "description": "Ottawa senior movers specializing in retirement community transitions, downsizing assistance, and family-coordinated relocations. Patient crew, written quotes, 5.0★ rated."
};

export default function SeniorMovingServicesOttawa() {
  return (
    <>
      <Helmet>
        <title>Ottawa Senior Movers | Gentle, Patient Moving Services | Prestige Moving</title>
        <meta name="description" content="Ottawa senior movers with 15+ years of retirement and downsizing experience. Prestige Moving — patient crew, family coordination, retirement community expertise. Written quote, no hidden fees. Call (613) 600-4000." />
        <meta name="keywords" content="ottawa senior movers, senior moving services ottawa, senior movers ottawa, local movers for seniors ottawa, affordable movers seniors ottawa, retirement moving ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/senior-moving-services-ottawa" />
        <meta property="og:title" content="Ottawa Senior Movers | Prestige Moving — Patient, Professional" />
        <meta property="og:description" content="Patient, professional Ottawa senior movers. Downsizing help, retirement home moves, long distance. 5.0★ rated. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4" /> Ottawa Senior Movers · Patient & Compassionate
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ottawa Senior Movers —<br />Retirement & Downsizing Specialists
            </h1>
            <p className="text-xl text-white/80 mb-6 max-w-3xl mx-auto">
              Prestige Moving is Ottawa's most experienced senior moving company. We handle retirement home transitions, family home downsizing, and long-distance senior relocations with the patience, care, and communication your family deserves.
            </p>
            <p className="text-white/60 text-sm mb-8">
              See our comprehensive guide to <Link href="/senior-movers-ottawa" className="text-[#C5A572] hover:underline">senior movers in Ottawa</Link> — pricing, retirement communities we serve, and the downsizing process explained.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/book">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Book Ottawa Senior Move <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-[#1A2332] text-sm font-semibold">
            <span className="flex items-center gap-2"><Heart className="h-4 w-4" /> Compassionate Approach</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Downsizing Assistance</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Fully Insured & WSIB</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 5.0★ — 400+ Reviews</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4" /> Family Remote Coordination</span>
          </div>
        </div>

        {/* Internal link banner */}
        <div className="bg-gray-50 border-b border-gray-200 py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <p className="text-gray-700 text-sm">Looking for full pricing, Ottawa retirement community details, and the complete downsizing guide?</p>
            <Link href="/senior-movers-ottawa">
              <Button variant="outline" size="sm" className="border-[#C5A572] text-[#C5A572] shrink-0">
                Senior Movers Ottawa — Full Guide <ChevronRight className="h-3.5 w-3.5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-4">Our Ottawa Senior Moving Services</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">As <Link href="/" className="text-[#C5A572] hover:underline">Ottawa movers</Link> specializing in senior transitions, we offer a complete range of services tailored to the unique needs of older adults and their families.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Heart className="h-6 w-6" />, title: "Retirement Home Transitions", desc: "Moving into a Chartwell, Revera, Amica, Seasons, or private retirement residence. We coordinate with the facility move-in team and work at your pace. Ottawa's leading retirement community movers." },
                { icon: <Users className="h-6 w-6" />, title: "Downsizing Assistance", desc: "Moving from a family home to a smaller space? We help sort, pack, and coordinate donation or disposal of items not moving. We work with Ottawa charities for pickups so families don't have to." },
                { icon: <Shield className="h-6 w-6" />, title: "Antique & Heirloom Care", desc: "Generations of cherished items packed with museum-quality materials. China, artwork, grandfather clocks — every piece handled with the reverence it deserves." },
                { icon: <Clock className="h-6 w-6" />, title: "Flexible, Patient Scheduling", desc: "We move at whatever pace is comfortable. No rushing, no pressure. Ottawa senior moves often take a full day — and that's completely fine. Our schedule accounts for this." },
                { icon: <CheckCircle className="h-6 w-6" />, title: "Full Unpacking & Setup", desc: "We don't just drop boxes and leave. Our Ottawa senior moving team unpacks, arranges furniture, and makes the new space feel like home before we go." },
                { icon: <Star className="h-6 w-6" />, title: "Long Distance Senior Moves", desc: "Moving an Ottawa senior across Canada to be closer to family. Binding quotes, dedicated trucks, GPS tracking, and extra packing care for precious belongings." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-gray-50 p-6 rounded-md border border-gray-100">
                  <div className="text-[#C5A572] mt-1 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#1A2332] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ottawa senior moving context */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Why Choose Ottawa Senior Movers from Prestige Moving?</h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>Ottawa senior movers need to understand more than just how to carry furniture. The best senior moving companies in Ottawa combine logistical skill with emotional intelligence — the ability to read a room, slow down when needed, and treat the act of moving as the significant life transition it is.</p>
              <p>Prestige Moving has been serving Ottawa families through senior transitions since 2009. We've moved clients from long-time family homes in Rockcliffe Park and the Glebe into retirement suites in Kanata and Barrhaven. We've coordinated with adult children managing a parent's move from Vancouver. We've worked through the specific procedures of every major retirement community in Ottawa.</p>
              <p>Our approach begins before moving day: every crew lead is briefed on the nature of the move, the senior's situation, and any specific requests from the family. On moving day, we check in regularly and adapt our pace to what's comfortable. We assign a single point of contact for all family communications so no one is left wondering what's happening.</p>
              <p>For families looking for affordable movers for seniors in Ottawa, our rates are competitive with any mover in the city, with no hidden charges and a written quote guaranteed before every move. Call us for your custom rate.</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Ottawa Senior Moving FAQs</h2>
            <div className="space-y-6">
              {faq.map((item) => (
                <div key={item.q} className="border border-gray-200 rounded-md p-6 bg-gray-50">
                  <h3 className="font-bold text-[#1A2332] mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1A2332] py-20 px-4 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Ottawa Senior Movers?</h2>
            <p className="text-white/70 mb-3">Call our Ottawa senior moving specialists or book online. We'll guide your family through every step — patient crew, written quote, no hidden fees.</p>
            <p className="text-[#C5A572] font-semibold mb-8">Or read our complete guide: <Link href="/senior-movers-ottawa" className="hover:underline">Senior Movers Ottawa — Pricing, Communities & Downsizing</Link></p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> (613) 600-4000
                </Button>
              </a>
              <Link href="/book">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Book Online</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
