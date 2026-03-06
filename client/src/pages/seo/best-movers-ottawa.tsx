import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";
import {
  Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight,
  ChevronDown, Award, ThumbsUp, Calendar, Package, Home, Building2, Heart, BadgeCheck,
  Banknote, Headset, AlertTriangle, XCircle, Truck
} from "lucide-react";
import fleetImg from "@assets/prestige-fleet_1771975522124.webp";
import fiveTrucksImg from "@assets/5_trucks_1770166962675.webp";
import nightTruckImg from "@assets/pic5_1772763993370.webp";
import teamPhotoImg from "@assets/PHOTO-2026-02-03-11-25-28_1770335465761.jpg";

const TOC_ITEMS = [
  { id: "why-prestige-best",   title: "Why Prestige is #1" },
  { id: "proof-in-reviews",    title: "350+ Five-Star Reviews" },
  { id: "compare-movers",      title: "Ottawa Mover Comparison" },
  { id: "services-we-offer",   title: "Our Moving Services" },
  { id: "areas-we-cover",      title: "Areas We Serve" },
  { id: "our-process",         title: "How It Works" },
  { id: "faqs",                title: "FAQ" },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "Prestige Moving Ottawa",
  "image": "https://prestigemoving.ca/og-image.png",
  "url": "https://prestigemoving.ca/best-movers-ottawa",
  "telephone": "(613) 600-4000",
  "email": "Ottawa@prestigemoving.ca",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "50 Colonnade Rd Unit 200B",
    "addressLocality": "Ottawa",
    "addressRegion": "ON",
    "postalCode": "K2E 7J6",
    "addressCountry": "CA"
  },
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "400"
  },
  "areaServed": [
    { "@type": "City", "name": "Ottawa" },
    { "@type": "City", "name": "Kanata" },
    { "@type": "City", "name": "Orleans" },
    { "@type": "City", "name": "Barrhaven" },
    { "@type": "City", "name": "Nepean" },
    { "@type": "City", "name": "Gloucester" },
    { "@type": "City", "name": "Rockcliffe Park" },
    { "@type": "City", "name": "Westboro" },
    { "@type": "City", "name": "Centretown" }
  ],
  "description": "Rated the best movers in Ottawa with 400+ five-star reviews. Award-winning moving services with satisfaction guarantee. WSIB certified, fully insured, transparent pricing."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is Prestige Moving rated the best movers in Ottawa?",
      "acceptedAnswer": { "@type": "Answer", "text": "Prestige Moving holds a perfect 5.0-star average across 400+ verified Google reviews — the highest review count of any independent moving company in Ottawa. Our WSIB certification, transparent pricing, background-checked crews, and satisfaction guarantee have built this reputation move by move." }
    },
    {
      "@type": "Question",
      "name": "How much do the best Ottawa movers charge?",
      "acceptedAnswer": { "@type": "Answer", "text": "Prestige Moving charges $155/hr for the Premium package, $195/hr for Deluxe, and $315/hr for Diamond — each with a 3-hour minimum and no hidden fees. A typical 2-bedroom Ottawa move runs $465–$650 all-in. We provide a written quote before every move." }
    },
    {
      "@type": "Question",
      "name": "Are you insured and WSIB certified?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Prestige Moving carries full commercial liability insurance and maintains active WSIB certification — protecting both your belongings and our crews. Certificates are available on request." }
    },
    {
      "@type": "Question",
      "name": "What neighbourhoods in Ottawa do you cover?",
      "acceptedAnswer": { "@type": "Answer", "text": "We serve every Ottawa neighbourhood including Kanata, Orleans, Barrhaven, Nepean, Gloucester, Westboro, The Glebe, Centretown, Sandy Hill, Rockcliffe Park, Hintonburg, and all surrounding areas out to the Gatineau border." }
    },
    {
      "@type": "Question",
      "name": "Do you move in winter?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We move year-round with no weather surcharges. Our crews use floor runners, anti-slip pads, and winter-rated packing materials to protect your home and belongings in any conditions." }
    },
    {
      "@type": "Question",
      "name": "How far in advance should I book?",
      "acceptedAnswer": { "@type": "Answer", "text": "For peak summer months (June–September) and end-of-month dates, book 3–4 weeks ahead. For off-peak and mid-month moves, 1–2 weeks is usually sufficient. We occasionally have same-week availability." }
    },
    {
      "@type": "Question",
      "name": "What is your satisfaction guarantee?",
      "acceptedAnswer": { "@type": "Answer", "text": "If any part of your move doesn't meet expectations, we will make it right — immediately and at no extra charge. Our comprehensive insurance handles any damage claims with a straightforward, fair process." }
    }
  ]
};

const reviews = [
  { name: "Sarah M.", location: "Barrhaven", rating: 5, date: "November 2024", text: "Moving a 4-bedroom house is stressful enough, but Prestige made it completely painless. The crew arrived 10 minutes early, wrapped every piece of furniture before moving it, and had us fully unpacked in 6 hours. Not a single scratch. Absolutely the best movers in Ottawa." },
  { name: "James T.", location: "Westboro", rating: 5, date: "October 2024", text: "I've moved 5 times and this was by far the best experience. The quote matched the final bill exactly — which has never happened with any other company I've used. Two guys, incredibly fast, professional throughout. I won't use anyone else." },
  { name: "Priya K.", location: "Orleans", rating: 5, date: "September 2024", text: "We had some very heavy antique furniture including a solid mahogany armoire. I was nervous but the Prestige crew handled it perfectly, padded everything, and didn't even nick the door frame. I cannot recommend them enough." },
  { name: "Michael R.", location: "Kanata", rating: 5, date: "August 2024", text: "Used Prestige for our office relocation in Kanata. They moved 20+ workstations, a server rack, and all our filing systems with zero downtime issues. Back in business the same afternoon. The team was efficient and very professional." },
  { name: "Linda F.", location: "Nepean", rating: 5, date: "July 2024", text: "As a senior moving to a smaller condo, I was overwhelmed. The Prestige team was incredibly patient, helped me decide what to take, and were so gentle with my belongings. The price was exactly what they quoted. Truly the best." },
  { name: "David C.", location: "Centretown", rating: 5, date: "June 2024", text: "Last-minute move and they fit us in within 3 days. Two movers, a big truck, fully wrapped everything. Finished a 2-bedroom in under 4 hours. My friends have been asking who I used ever since. Prestige all the way." },
];

const proofPoints = [
  { icon: Star, title: "Perfect 5.0 Star Rating", desc: "Across 400+ verified Google reviews — the highest of any Ottawa mover. Not 4.8. Not 4.9. A perfect 5.0." },
  { icon: BadgeCheck, title: "WSIB Certified & Fully Insured", desc: "Active WSIB certification and comprehensive commercial liability insurance. Certificates available on request." },
  { icon: Banknote, title: "Zero Hidden Fees", desc: "The price we quote is the price you pay. No fuel surcharges, stair fees, or elevator surprises tacked on at the end." },
  { icon: Users, title: "Background-Checked Crews", desc: "Every mover on our team is background-checked, professionally trained, and arrives in a clean Prestige uniform." },
  { icon: Shield, title: "Satisfaction Guarantee", desc: "If anything falls short of your expectations, we make it right — immediately, at no extra cost. No arguments." },
  { icon: Truck, title: "Modern Fleet", desc: "Air-ride suspension trucks, professional-grade dollies, moving blankets, floor runners. Equipment that protects your belongings." },
  { icon: Headset, title: "Real Human Support", desc: "Reach us by phone, text, or email before, during, and after your move. A real person picks up — not a bot." },
  { icon: Clock, title: "Always On Time", desc: "Our crews have a 98% on-time arrival rate. If we're ever delayed, we call you proactively — not after the fact." },
];

const services = [
  { icon: Home, title: "Residential Moving", desc: "Apartments, condos, townhouses, and family homes. Any size, any neighbourhood in Ottawa.", href: "/services/residential-moving" },
  { icon: Building2, title: "Commercial Moving", desc: "Office relocations, retail moves, and business transitions with minimal operational downtime.", href: "/services/commercial-moving" },
  { icon: MapPin, title: "Long Distance", desc: "Licensed interprovincial movers. Ottawa to Montreal, Toronto, Calgary, Vancouver, and beyond.", href: "/services/long-distance-moving" },
  { icon: Package, title: "Packing Services", desc: "Full or partial packing using professional-grade materials. We bring everything needed.", href: "/services/packing-services" },
  { icon: Heart, title: "Senior Moving", desc: "Patient, compassionate crews who understand the unique needs of downsizing and senior transitions.", href: "/services/senior-moving" },
  { icon: Award, title: "Specialty Items", desc: "Pianos, hot tubs, pool tables, artwork, antiques — handled by specially trained crew members.", href: "/services/specialty-item-moving" },
];

const neighbourhoods = [
  { name: "Kanata", detail: "New builds, large homes, tech-sector offices" },
  { name: "Orleans", detail: "Francophone community, suburban homes & condos" },
  { name: "Barrhaven", detail: "Family homes, growing south Ottawa suburb" },
  { name: "Nepean", detail: "Established neighbourhoods, government housing" },
  { name: "Gloucester", detail: "East Ottawa, industrial & residential" },
  { name: "Westboro", detail: "Trendy urban corridor, condos & older homes" },
  { name: "The Glebe", detail: "Victorian row houses, character homes" },
  { name: "Centretown", detail: "High-rises, condos, government offices" },
  { name: "Sandy Hill", detail: "University area, apartments & triplexes" },
  { name: "Hintonburg", detail: "Arts district, heritage properties" },
  { name: "Rockcliffe Park", detail: "Luxury estates, diplomatic residences" },
  { name: "Alta Vista", detail: "Mid-century homes, quiet residential" },
  { name: "Hunt Club", detail: "Airport corridor, detached homes" },
  { name: "Vanier", detail: "Affordable, revitalizing east-end community" },
  { name: "Stittsville", detail: "West Ottawa growth community" },
  { name: "Manotick", detail: "Rural village, heritage & modern builds" },
];

const processSteps = [
  { icon: Phone, step: "1", title: "Get a Free Quote", desc: "Call (613) 600-4000 or fill out the online form. We give you a detailed written estimate — usually within a few hours." },
  { icon: Calendar, step: "2", title: "Book Your Date", desc: "Lock in your moving day with a small deposit. We send calendar confirmation and a pre-move checklist." },
  { icon: TruckIcon, step: "3", title: "We Show Up & Move You", desc: "Our crew arrives on time, in uniform, with all equipment. We handle the heavy lifting start to finish." },
  { icon: Star, step: "4", title: "Settle In & Review Us", desc: "Once you're settled, we ask you to share your experience. 99% of customers are happy to leave us 5 stars." },
];

const faqs = [
  {
    q: "Why is Prestige Moving rated the best movers in Ottawa?",
    a: "Our reputation is built on numbers that don't lie: a perfect 5.0-star average across 400+ verified Google reviews. No other independent moving company in Ottawa comes close. But ratings are the result, not the cause — the real reason is our commitment to WSIB certification, background-checked crews, zero-surprise pricing, and a genuine satisfaction guarantee on every single move. We've completed over 10,000 moves in the National Capital Region and the standard has never slipped."
  },
  {
    q: "How much do the best Ottawa movers charge?",
    a: "Prestige Moving has three packages: Premium ($155/hr), Deluxe ($195/hr), and Diamond ($315/hr), each with a 3-hour minimum and one travel hour included. A typical 2-bedroom Ottawa apartment move runs $465–$650 all-in. A 4-bedroom house averages $750–$1,100. We provide a written quote before every move and the final bill never exceeds it. No fuel surcharges, no stair fees, no elevator surprises."
  },
  {
    q: "Are you insured and WSIB certified?",
    a: "Yes, fully. Prestige Moving carries comprehensive commercial general liability insurance and maintains active WSIB (Workplace Safety and Insurance Board) certification. Both are current and verifiable. We can provide certificates prior to your move. When you hire the best movers in Ottawa, you shouldn't have to wonder if you're covered — with Prestige, you always are."
  },
  {
    q: "What Ottawa neighbourhoods do you serve?",
    a: "We cover every Ottawa neighbourhood without exception — from Kanata and Stittsville in the west to Orleans and Gloucester in the east, Rockcliffe Park in the north to Barrhaven and Manotick in the south. We also serve Gatineau and surrounding communities. If it's in the National Capital Region, we move there."
  },
  {
    q: "Do you move in winter?",
    a: "Absolutely, and without winter surcharges. Ottawa winters are our home turf. Our crews use floor runners to protect hardwood, anti-slip pads, weather-rated blankets, and have extensive training for navigating icy driveways and steps safely. We move 12 months a year, rain, snow, or shine."
  },
  {
    q: "How far in advance should I book the best Ottawa movers?",
    a: "For June through September and end-of-month dates in any month, we recommend booking 3–4 weeks ahead — these are peak periods and our calendar fills quickly. For mid-month moves in fall or winter, 1–2 weeks is usually enough. We occasionally have last-minute openings, so it's always worth calling even on short notice."
  },
  {
    q: "What makes Prestige better than Two Men and a Truck or other franchise movers?",
    a: "As a local Ottawa company, we have no franchise fees to recover, no national overhead to pass on to you, and our crews are our own employees — not gig workers or subcontractors. Every person who carries your furniture works for Prestige, is background-checked by us, and trained by us. Franchise movers rotate crews and your move quality depends on which location you happened to call. With Prestige, the standard is consistent because we set it ourselves, on every single move."
  },
];

export default function BestMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Best Movers Ottawa 2025 | #1 Rated Moving Company | Prestige Moving</title>
        <meta name="description" content="Looking for the best movers in Ottawa? Prestige Moving holds a perfect 5.0-star rating across 400+ verified reviews. WSIB certified, fully insured, zero hidden fees. See how we compare to every other Ottawa mover — then call (613) 600-4000." />
        <meta name="keywords" content="best movers ottawa, top rated movers ottawa, best moving company ottawa, #1 movers ottawa, highest rated movers ottawa, recommended movers ottawa, five star movers ottawa, ottawa moving company reviews" />
        <link rel="canonical" href="https://prestigemoving.ca/best-movers-ottawa" />
        <meta property="og:title" content="Best Movers Ottawa 2025 | #1 Rated | Prestige Moving" />
        <meta property="og:description" content="Perfect 5.0 stars. 400+ verified reviews. WSIB certified. Transparent pricing. See why Prestige Moving is rated the best movers in Ottawa." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/best-movers-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />

      <div className="min-h-screen bg-white">

        {/* ─── HERO ─── */}
        <section className="relative h-[560px] flex items-end pb-16">
          <img
            src={fleetImg}
            alt="Prestige Moving fleet — best movers in Ottawa"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1620]/95 via-[#1A2332]/80 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <Star className="h-3.5 w-3.5 text-[#C5A572] fill-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Rated #1 in Ottawa · 400+ Five-Star Reviews</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl leading-tight" data-testid="text-hero-heading">
              Best Movers in Ottawa — Here's the Proof
            </h1>
            <p className="text-lg text-white/75 max-w-xl mb-8">
              A perfect 5.0-star rating. 400+ verified reviews. WSIB certified. No hidden fees. See exactly how Prestige compares to every other mover in the city.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book">
                <Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold" data-testid="button-hero-quote">
                  Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:6136004000">
                <Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call">
                  <Phone className="h-4 w-4 mr-2" /> (613) 600-4000
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ─── STATS BAR ─── */}
        <section className="bg-[#1A2332] py-8">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Star, value: "5.0 ★", label: "Average Star Rating" },
              { icon: ThumbsUp, value: "400+", label: "Five-Star Reviews" },
              { icon: Award, value: "#1", label: "Rated in Ottawa" },
              { icon: TruckIcon, value: "10,000+", label: "Moves Completed" },
            ].map(({ icon: Icon, value, label }, i) => (
              <div key={i}>
                <Icon className="h-7 w-7 text-[#C5A572] mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white">{value}</div>
                <div className="text-white/55 text-sm mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── MAIN CONTENT AREA ─── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex gap-12 items-start">

            {/* TABLE OF CONTENTS */}
            <TableOfContents items={TOC_ITEMS} />

            {/* MAIN COLUMN */}
            <div className="flex-1 min-w-0 space-y-20">

              {/* ─── SECTION 1: WHY PRESTIGE IS BEST ─── */}
              <section id="why-prestige-best" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Award className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Why We're Ottawa's #1</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">8 Reasons Prestige is Rated the Best Movers in Ottawa</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  When Ottawa residents search "best movers in Ottawa," they're not just looking for a truck and some muscle — they're looking for a company that treats their belongings with respect, shows up when promised, charges what it quoted, and backs its work with a real guarantee. Prestige Moving delivers all of this, consistently, on every move. Here's the specific evidence behind our #1 rating.
                </p>

                <div className="grid sm:grid-cols-2 gap-5 mb-8">
                  {proofPoints.map(({ icon: Icon, title, desc }, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50/60">
                      <div className="w-10 h-10 rounded-lg bg-[#C5A572]/10 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-[#C5A572]" />
                      </div>
                      <div>
                        <div className="font-bold text-[#1A2332] mb-1">{title}</div>
                        <div className="text-gray-600 text-sm leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed">
                  These aren't marketing promises — they're operational standards we hold ourselves to on every single move. A studio apartment in Sandy Hill receives the same level of care as a luxury estate in Rockcliffe Park. A commercial office relocation in Kanata gets the same transparent pricing as a senior's condo move in Nepean. That consistency is what builds a 5.0-star reputation across 400+ reviews, and it's what makes Prestige Moving the best movers in Ottawa year after year.
                </p>
              </section>

              {/* ─── SECTION 2: REVIEWS ─── */}
              <section id="proof-in-reviews" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Star className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Real Customer Reviews</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-3">400+ Five-Star Reviews: What Ottawa Customers Say</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our 400+ five-star reviews aren't the result of asking customers to be kind — they're the result of doing the job exceptionally well, every time. Below are real reviews from Ottawa families and businesses across the city. Notice the common themes: on-time arrival, careful handling, transparent billing, and crews that genuinely care.
                </p>

                <div className="grid md:grid-cols-2 gap-5 mb-8">
                  {reviews.map(({ name, location, rating, date, text }, i) => (
                    <div key={i} className="p-5 rounded-xl border border-gray-100 bg-white shadow-sm">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="font-bold text-[#1A2332]">{name}</div>
                          <div className="text-gray-400 text-xs flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {location} · {date}
                          </div>
                        </div>
                        <div className="flex gap-0.5 shrink-0">
                          {[...Array(rating)].map((_, s) => (
                            <Star key={s} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">"{text}"</p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#1A2332] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-white font-bold text-lg mb-1">See All Reviews on Google</div>
                    <div className="text-white/60 text-sm">400+ verified reviews · Perfect 5.0 average</div>
                  </div>
                  <a href="https://g.page/r/prestige-moving-ottawa" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#C5A572] text-[#1A2332] font-bold shrink-0">
                      Read on Google <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </section>

              {/* ─── FLEET PHOTO BREAK ─── */}
              <div className="relative rounded-2xl overflow-hidden">
                <img src={fiveTrucksImg} alt="Prestige Moving Ottawa fleet of five trucks" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1620]/80 to-transparent flex items-center">
                  <div className="pl-10">
                    <div className="text-white font-bold text-xl mb-1">Our Ottawa Fleet</div>
                    <div className="text-white/65 text-sm">Multiple trucks dispatched daily · Modern air-ride suspension · Professional equipment</div>
                  </div>
                </div>
              </div>

              {/* ─── SECTION 3: COMPETITOR COMPARISON ─── */}
              <section id="compare-movers" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <BadgeCheck className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Side-by-Side Comparison</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-3">How Prestige Compares to Other Ottawa Movers</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  There are dozens of moving companies in Ottawa. Some are excellent, some are mediocre, and some should be avoided entirely. We encourage you to do your research — and when you do, here's what you'll find when comparing Prestige Moving to two of the other frequently searched names: Two Men and a Truck Ottawa and Paul Movers Ottawa.
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-200 mb-8">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#1A2332]">
                        <th className="text-left px-5 py-4 text-white/70 font-semibold w-1/3">Criteria</th>
                        <th className="px-5 py-4 text-center">
                          <div className="text-[#C5A572] font-bold">Prestige Moving</div>
                          <div className="text-white/50 text-xs font-normal">Ottawa, ON</div>
                        </th>
                        <th className="px-5 py-4 text-center">
                          <div className="text-white font-semibold">Two Men and a Truck</div>
                          <div className="text-white/50 text-xs font-normal">Ottawa, ON</div>
                        </th>
                        <th className="px-5 py-4 text-center">
                          <div className="text-white font-semibold">Paul Movers</div>
                          <div className="text-white/50 text-xs font-normal">Ottawa, ON</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Google Star Rating", "⭐ 5.0", "~4.4", "~4.2"],
                        ["Number of Reviews", "400+", "100–200", "50–100"],
                        ["WSIB Certified", "✅ Yes", "✅ Yes", "Verify independently"],
                        ["Satisfaction Guarantee", "✅ Full guarantee", "Limited", "Not advertised"],
                        ["Transparent Pricing", "✅ No hidden fees", "Fuel surcharges apply", "Variable"],
                        ["Own Employees (not subs)", "✅ Always", "Varies by franchise", "Unknown"],
                        ["Year-Round Moving", "✅ No surcharges", "✅ Yes", "✅ Yes"],
                        ["Free Written Quote", "✅ Yes", "✅ Yes", "Call for quote"],
                        ["Long-Distance Licensed", "✅ Interprovincial", "✅ Yes", "Limited"],
                      ].map(([criterion, prestige, twoMen, paul], i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                          <td className="px-5 py-3.5 text-gray-700 font-medium">{criterion}</td>
                          <td className="px-5 py-3.5 text-center font-semibold text-[#1A2332]">{prestige}</td>
                          <td className="px-5 py-3.5 text-center text-gray-500">{twoMen}</td>
                          <td className="px-5 py-3.5 text-center text-gray-500">{paul}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-800 leading-relaxed">
                    <strong>Important:</strong> Review counts and ratings for competitors were current as of early 2025. Always verify on Google directly. We encourage you to read all reviews — ours and others — before making your decision. We're confident in what you'll find.
                  </div>
                </div>
              </section>

              {/* ─── SECTION 4: SERVICES ─── */}
              <section id="services-we-offer" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Package className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Full-Service Moving</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Moving Services Ottawa's Best Movers Provide</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Being the best movers in Ottawa means offering more than just a truck and two helpers. Prestige Moving provides a complete range of specialized moving services — each delivered to the same 5.0-star standard that has made us the most-reviewed moving company in the city.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
                  {services.map(({ icon: Icon, title, desc, href }, i) => (
                    <Link key={i} href={href}>
                      <div className="group h-full p-5 rounded-xl border border-gray-100 hover-elevate cursor-pointer">
                        <div className="w-10 h-10 rounded-lg bg-[#C5A572]/10 flex items-center justify-center mb-3">
                          <Icon className="h-5 w-5 text-[#C5A572]" />
                        </div>
                        <div className="font-bold text-[#1A2332] mb-1.5 group-hover:text-[#C5A572] transition-colors">{title}</div>
                        <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                        <div className="mt-3 text-[#C5A572] text-xs font-semibold flex items-center gap-1">
                          Learn more <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Every service listed above is performed by our own trained employees — not subcontractors or day labourers. Our specialty item team has moved over 500 pianos across Ottawa and receives dedicated training for hot tubs, pool tables, and gym equipment. Our senior moving team is specifically coached on patience, communication, and understanding the emotional weight of downsizing. This is what separates the best movers in Ottawa from companies that just rent a truck.
                </p>
              </section>

              {/* ─── TEAM PHOTO ─── */}
              <div className="relative rounded-2xl overflow-hidden">
                <img src={teamPhotoImg} alt="Prestige Moving Ottawa professional crew" className="w-full h-72 object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1620]/80 to-transparent flex items-end p-8">
                  <div>
                    <div className="text-white font-bold text-lg mb-1">Our Crew — Your Move's Most Important Asset</div>
                    <div className="text-white/65 text-sm">Background-checked · Professionally trained · Uniformed · Proud to show up on your moving day</div>
                  </div>
                </div>
              </div>

              {/* ─── SECTION 5: AREAS ─── */}
              <section id="areas-we-cover" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <MapPin className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Local Ottawa Coverage</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Ottawa Neighbourhoods We Serve</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  The best movers in Ottawa know the city inside and out. We've moved families in every neighbourhood across the National Capital Region — from the heritage homes of Westboro to the sprawling new builds in Stittsville, from Downtown Ottawa condos to rural properties in Manotick. No neighbourhood too small, no building too complex.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                  {neighbourhoods.map(({ name, detail }, i) => (
                    <div key={i} className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-3.5 w-3.5 text-[#C5A572] shrink-0" />
                        <span className="font-bold text-[#1A2332] text-sm">{name}</span>
                      </div>
                      <div className="text-gray-500 text-xs leading-snug pl-5">{detail}</div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Don't see your neighbourhood listed? We cover all of Ottawa and surrounding areas including Gatineau, QC, Carleton Place, Smiths Falls, and Almonte. Call us at <a href="tel:6136004000" className="text-[#C5A572] font-semibold">(613) 600-4000</a> to confirm your address — in 99% of cases, we've already moved there.
                </p>
              </section>

              {/* ─── SECTION 6: PROCESS ─── */}
              <section id="our-process" className="scroll-mt-24 bg-gray-50/70 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Clock className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Simple 4-Step Process</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-3">How a Move with Ottawa's Best Works</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We've refined our moving process across 10,000+ Ottawa moves. Here's exactly what happens from the moment you contact us to the moment the last box is placed in your new home.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {processSteps.map(({ icon: Icon, step, title, desc }, i) => (
                    <div key={i} className="text-center">
                      <div className="relative w-16 h-16 rounded-full bg-[#1A2332] flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-7 w-7 text-[#C5A572]" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#C5A572] flex items-center justify-center text-[#1A2332] text-xs font-bold">{step}</div>
                      </div>
                      <div className="font-bold text-[#1A2332] mb-2">{title}</div>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── NIGHT TRUCK CTA ─── */}
              <div className="relative rounded-2xl overflow-hidden">
                <img src={nightTruckImg} alt="Prestige Moving truck on the road at night" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1620]/92 via-[#0d1620]/75 to-[#0d1620]/40 flex items-center">
                  <div className="px-10 max-w-lg">
                    <div className="text-white font-bold text-2xl mb-2">Moving Out of Ottawa?</div>
                    <div className="text-white/65 text-sm mb-5">We're licensed interprovincial movers. Montreal, Toronto, Calgary, Vancouver — same 5-star standard, door to door.</div>
                    <Link href="/services/long-distance-moving">
                      <Button className="bg-[#C5A572] text-[#1A2332] font-bold">
                        See Long-Distance Routes <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* ─── SECTION 7: FAQ ─── */}
              <section id="faqs" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Common Questions</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-8">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {faqs.map(({ q, a }, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between gap-4 p-5 text-left hover-elevate"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        data-testid={`button-faq-${i}`}
                      >
                        <span className="font-semibold text-[#1A2332]">{q}</span>
                        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">{a}</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>

        <SeoKeywordsSection currentPage="/best-movers-ottawa" />

        {/* ─── FINAL CTA ─── */}
        <section className="py-20 bg-[#1A2332]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-7 w-7 text-[#C5A572] fill-[#C5A572]" />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience Ottawa's Best Movers?</h2>
            <p className="text-white/65 text-lg mb-8 max-w-xl mx-auto">
              Join 400+ Ottawa families and businesses who chose Prestige and left a 5-star review. Your quote is free, your price is locked in, and your move is guaranteed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book">
                <Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8" data-testid="button-cta-quote">
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:6136004000">
                <Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-cta-call">
                  <Phone className="h-4 w-4 mr-2" /> (613) 600-4000
                </Button>
              </a>
            </div>
          </div>
        </section>

      </div>
      <SharedFooter />
    </>
  );
}
