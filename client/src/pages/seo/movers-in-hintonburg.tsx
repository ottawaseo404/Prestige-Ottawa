import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import {
  Phone, TruckIcon, Shield, Clock, Star, MapPin, ArrowRight,
  ChevronDown, Calendar, Home, Building2, CheckCircle2, Users, Award
} from "lucide-react";
import heroImage from "@assets/images/seo-movers-hintonburg.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

const NEIGHBOURHOOD_HIGHLIGHTS = [
  { label: "Wellington West", detail: "Ottawa's hippest main street — indie boutiques, acclaimed restaurants, coffee roasters" },
  { label: "Arts Community", detail: "Home to artists, musicians & creatives — high-rise condos beside converted Victorian flats" },
  { label: "Transit-Friendly", detail: "O-Train Confederation Line & multiple bus routes — perfect for car-free movers" },
  { label: "Growing Fast", detail: "One of Ottawa's fastest-growing urban neighbourhoods with new condo developments" },
  { label: "Walk Score 90+", detail: "Walkable, bikeable — daily errands easily done without a car" },
  { label: "Close to Westboro", detail: "Borders Westboro, Mechanicsville, Little Italy — central West End location" },
];

export default function MoversInHintonburg() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeHighlight, setActiveHighlight] = useState(0);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving - Hintonburg Movers Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/movers-in-hintonburg",
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
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "350" },
    "areaServed": [
      { "@type": "Place", "name": "Hintonburg, Ottawa" },
      { "@type": "Place", "name": "Wellington West" },
      { "@type": "Place", "name": "Mechanicsville" },
      { "@type": "Place", "name": "Westboro" },
      { "@type": "Place", "name": "Kitchissippi" },
      { "@type": "Place", "name": "Little Italy Ottawa" }
    ],
    "description": "Top-rated movers in Hintonburg Ottawa. Serving Wellington West, Mechanicsville, Kitchissippi, and all West End communities. 350+ five-star reviews, WSIB certified. Free quote — (613) 600-4000."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much do movers in Hintonburg cost?", "acceptedAnswer": { "@type": "Answer", "text": "Hintonburg moving costs typically range from $620 to $2,200 depending on home size, floor level, elevator access, and services. Apartment and condo moves in Hintonburg start around $620–$800 for a 1-bedroom, while larger homes run $1,200–$2,200+. Prestige Moving offers transparent pricing with no hidden fees. Call (613) 600-4000 for a free quote." } },
      { "@type": "Question", "name": "Can you handle condo and loft moves in Hintonburg?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Hintonburg has a growing number of modern condos, converted lofts, and mixed-use buildings. Our team coordinates elevator bookings, loading dock access, and move-in/out procedures with building management. We handle all the logistics so your Hintonburg condo move goes smoothly and on schedule." } },
      { "@type": "Question", "name": "Do you move in Hintonburg's older homes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — many Hintonburg homes are Victorian or Edwardian-era with narrow staircases, original hardwood floors, and tight doorways. Our Hintonburg moving crew uses professional floor runners, corner protectors, and stair-climbing dollies to protect both your belongings and the character features of older Hintonburg homes." } },
      { "@type": "Question", "name": "Are your Hintonburg movers insured and WSIB certified?", "acceptedAnswer": { "@type": "Answer", "text": "Every Prestige Moving team member is fully WSIB certified and we carry comprehensive commercial liability insurance. Your belongings are protected from loading to final placement. We also offer enhanced valuation coverage for high-value items including antiques, art, electronics, and musical instruments." } },
      { "@type": "Question", "name": "What areas near Hintonburg do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve all Hintonburg and Kitchissippi ward communities including Wellington West, Mechanicsville, Island Park, Westboro Village, Tunney's Pasture, and Little Italy. We also move between Hintonburg and every Ottawa neighbourhood — Centretown, The Glebe, Kanata, Barrhaven, Orleans, Nepean and more." } }
    ]
  };

  const faqs = faqSchema.mainEntity.map(q => ({ question: q.name, answer: q.acceptedAnswer.text }));

  const stats = [
    { icon: Star, value: "350+", label: "Five-Star Reviews" },
    { icon: TruckIcon, value: "10,000+", label: "Moves Completed" },
    { icon: Clock, value: "24hr", label: "Quote Response" },
    { icon: Shield, value: "100%", label: "Fully Insured" },
  ];

  const processSteps = [
    { icon: Phone, title: "Free Quote", description: "Call (613) 600-4000 or book online. We provide a detailed, no-surprise estimate for your Hintonburg move within 24 hours." },
    { icon: Calendar, title: "Book Your Date", description: "Choose any date including weekends. We work around your Hintonburg building's elevator and loading dock schedule." },
    { icon: TruckIcon, title: "Expert Movers Arrive", description: "Our uniformed, trained Hintonburg team arrives on time with all equipment — no excuses, no delays." },
    { icon: Home, title: "Settled In", description: "We place and reassemble every item exactly where you want it. Your new Hintonburg home, ready to enjoy." },
  ];

  const whyPrestige = [
    { icon: Award, title: "#1 Rated Ottawa Mover", detail: "350+ five-star Google reviews — more than any other Ottawa moving company." },
    { icon: Shield, title: "WSIB Certified & Insured", detail: "Every mover is certified. Every move is fully covered by commercial liability insurance." },
    { icon: Users, title: "Experienced Local Team", detail: "Ottawa-born crew who know Hintonburg's streets, buildings, and parking nuances intimately." },
    { icon: CheckCircle2, title: "Zero Hidden Fees", detail: "Your quote is your price. Labour, truck, travel fee — all itemized. No surprises on moving day." },
    { icon: Clock, title: "Always On Time", detail: "We respect your time. Our Hintonburg movers arrive in your confirmed window, every time." },
    { icon: TruckIcon, title: "Fleet of Modern Trucks", detail: "Company-owned, GPS-tracked trucks with air-ride suspension and full moving supplies on board." },
  ];

  return (
    <>
      <Helmet>
        <title>Movers in Hintonburg Ottawa | #1 Rated Moving Company | Prestige Moving</title>
        <meta name="description" content="Need movers in Hintonburg Ottawa? Prestige Moving serves Wellington West, Mechanicsville, Kitchissippi & all West End communities. 350+ five-star reviews, WSIB certified. Call (613) 600-4000 — free quote." />
        <meta name="keywords" content="movers in hintonburg, hintonburg movers, moving company hintonburg ottawa, hintonburg moving services, wellington west movers, west end movers ottawa, condo movers hintonburg, hintonburg moving company" />
        <link rel="canonical" href="https://prestigemoving.ca/movers-in-hintonburg" />
        <meta property="og:title" content="Movers in Hintonburg Ottawa | Top-Rated West End Moving Company | Prestige" />
        <meta property="og:description" content="Hintonburg's most trusted movers. Condos, lofts, Victorian homes — full-service moving. WSIB certified, 350+ reviews. Free quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/movers-in-hintonburg" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movers in Hintonburg Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="Trusted Hintonburg movers — Wellington West, Mechanicsville & Kitchissippi. 350+ five-star reviews. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="relative h-[520px] flex items-center" data-testid="section-hero">
          <img src={heroImage} alt="Professional movers in Hintonburg Ottawa on Wellington West" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1A2332]/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-5">
              <MapPin className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Hintonburg · West End Ottawa</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" data-testid="text-hero-heading">
              Top-Rated Movers<br className="hidden sm:block" /> in Hintonburg
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">From Wellington West condos to century-old Victorian homes, Prestige Moving is Hintonburg's most trusted moving company — 350+ five-star reviews and zero hidden fees.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572] font-bold" data-testid="button-hero-quote">Get Free Quote <ArrowRight className="h-4 w-4 ml-2" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Hintonburg Moving" />

        {/* Stats */}
        <section className="bg-[#1A2332] py-8" data-testid="section-stats">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center" data-testid={`stat-${i}`}>
                <stat.icon className="h-8 w-8 text-[#C5A572] mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Neighbourhood Highlights — interactive */}
        <section className="py-16 bg-gray-50" data-testid="section-neighbourhood">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#1A2332] mb-3">About Hintonburg, Ottawa</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Understanding what makes Hintonburg unique helps us deliver a move tailored to this neighbourhood's character.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-2">
                {NEIGHBOURHOOD_HIGHLIGHTS.map((h, i) => (
                  <button key={i} onClick={() => setActiveHighlight(i)}
                    className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-md border text-left transition-all ${activeHighlight === i ? "border-[#C5A572] bg-[#C5A572]/8 shadow-sm" : "border-gray-200 bg-white hover-elevate"}`}
                    data-testid={`highlight-btn-${i}`}>
                    <div className={`w-2 h-2 rounded-full shrink-0 ${activeHighlight === i ? "bg-[#C5A572]" : "bg-gray-300"}`} />
                    <span className={`font-semibold text-sm ${activeHighlight === i ? "text-[#1A2332]" : "text-gray-600"}`}>{h.label}</span>
                  </button>
                ))}
              </div>
              <div className="bg-[#1A2332] rounded-lg p-8 text-white min-h-[200px] flex flex-col justify-center" data-testid="highlight-detail">
                <div className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider mb-3">Hintonburg Spotlight</div>
                <h3 className="text-2xl font-bold mb-4">{NEIGHBOURHOOD_HIGHLIGHTS[activeHighlight].label}</h3>
                <p className="text-white/75 leading-relaxed">{NEIGHBOURHOOD_HIGHLIGHTS[activeHighlight].detail}</p>
                <p className="text-white/55 text-sm mt-4">Our Hintonburg moving team knows every block of this neighbourhood — making your move faster, smoother, and stress-free.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white" data-testid="section-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Hintonburg Residents Choose Our Movers in Hintonburg</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hintonburg is one of Ottawa's most exciting and rapidly evolving neighbourhoods — a creative, walkable West End community where Victorian brick homes share the street with modern glass condos, artisan coffee shops line Wellington Street West, and the O-Train hums through the corridor. Moving in Hintonburg requires a team that understands the neighbourhood's unique mix: managing street parking on Wellington West, navigating the tight staircases of heritage walk-up apartments, coordinating elevator access in new condo developments, and protecting original hardwood floors in the neighbourhood's beloved older homes. Prestige Moving has built a reputation as Hintonburg's preferred <strong className="text-[#1A2332]">movers in Hintonburg</strong> by mastering exactly these challenges.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hintonburg's diverse housing stock — from studio apartments and two-bedroom condos to semi-detached Edwardian homes and converted warehouse lofts — means no two moves in this neighbourhood are the same. Our <strong className="text-[#1A2332]">Hintonburg moving team</strong> adapts to every scenario with the right equipment, the right technique, and the local knowledge that comes from completing hundreds of moves in this community. We know which streets have peak parking pressure, which buildings require advance elevator bookings, and which heritage homes need the most careful approach. That local expertise is what sets Prestige Moving apart from companies that simply show up with a truck.
            </p>
            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Condo, Loft & Heritage Home Moving Specialists</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Whether you're moving into a brand-new Wellington West condo or out of a century-old Hintonburg walk-up, Prestige Moving handles every detail. For condo moves, we coordinate directly with building management to book freight elevators, reserve loading areas, and ensure full compliance with move-in/out rules. For Hintonburg's older homes and apartments — many featuring narrow staircases, low ceilings, and original hardwood floors — we deploy professional floor runners, corner guards, banister protectors, and specialty furniture dollies to move every item safely without damage to the property. For <Link href="/services/piano-moving" className="text-[#C5A572] hover:underline">piano moving</Link> in Hintonburg's older homes, our specialized crew brings hydraulic equipment and custom padding to navigate even the tightest spaces.
            </p>
            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Serving All Hintonburg and Kitchissippi Communities</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our Hintonburg moving service extends throughout the Kitchissippi ward and all adjacent communities. We regularly work in Wellington West, Mechanicsville, Island Park, <Link href="/movers-in-westboro" className="text-[#C5A572] hover:underline">Westboro</Link>, Tunney's Pasture, and Little Italy. We also move between Hintonburg and every other Ottawa neighbourhood — from <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link> and <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link> to <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link> and <Link href="/movers-in-nepean" className="text-[#C5A572] hover:underline">Nepean</Link>. Our transparent hourly pricing with no hidden fees has earned us 350+ five-star reviews and the trust of hundreds of Hintonburg families. Call <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a> or email <a href="mailto:Ottawa@prestigemoving.ca" className="text-[#C5A572] hover:underline">Ottawa@prestigemoving.ca</a> for your free Hintonburg moving quote.
            </p>
          </div>
        </section>

        {/* Why Prestige #1 */}
        <section className="py-16 bg-[#1A2332]" data-testid="section-why-prestige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-4">
                <Award className="h-4 w-4 text-[#C5A572]" />
                <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Why Ottawa Chooses Prestige Moving</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Ottawa's #1 Rated Moving Company</h2>
              <p className="text-white/60 max-w-2xl mx-auto">With 350+ five-star reviews and 10,000+ moves completed, Prestige Moving has earned its reputation as Ottawa's most trusted movers — one move at a time.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyPrestige.map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-6 hover-elevate" data-testid={`why-${i}`}>
                  <div className="w-10 h-10 bg-[#C5A572]/15 rounded-md flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-[#C5A572]" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50" data-testid="section-process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Hintonburg Moving Process Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="text-center" data-testid={`process-step-${i}`}>
                  <div className="w-16 h-16 bg-[#C5A572]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-[#C5A572]" />
                  </div>
                  <div className="text-sm font-semibold text-[#C5A572] mb-1">Step {i + 1}</div>
                  <h3 className="font-bold text-[#1A2332] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white" data-testid="section-faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions — Hintonburg Movers</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-md overflow-hidden">
                  <button className="w-full flex items-center justify-between gap-4 p-4 text-left hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`button-faq-${i}`}>
                    <span className="font-semibold text-[#1A2332]">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && <div className="px-4 pb-4 text-gray-600 leading-relaxed">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <SeoKeywordsSection currentPage="/movers-in-hintonburg" />

        {/* CTA */}
        <section className="py-16 bg-[#C5A572]" data-testid="section-cta">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move in Hintonburg?</h2>
            <p className="text-white/80 text-lg mb-8">Get your free, no-obligation quote today. 350+ five-star reviews. Zero hidden fees. Ottawa's #1 moving company.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book"><Button className="bg-[#1A2332] hover:bg-[#243044] text-white border-[#1A2332]" data-testid="button-cta-quote">Get Free Quote</Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-cta-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>
      </div>
      <SharedFooter />
    </>
  );
}
