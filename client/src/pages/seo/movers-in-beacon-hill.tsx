import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import {
  Phone, TruckIcon, Shield, Clock, Star, MapPin, ArrowRight,
  ChevronDown, Calendar, Home, Building2, CheckCircle2, Users, Award, TreePine
} from "lucide-react";
import heroImage from "@assets/images/seo-movers-beacon-hill.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

const AREA_FACTS = [
  { icon: TreePine, stat: "Established", detail: "Mature family neighbourhood built in the 1960s–80s — tree-lined streets and large lots" },
  { icon: Home, stat: "Bungalows & Splits", detail: "Mix of bungalows, split-level homes, and semi-detached — all requiring moving expertise" },
  { icon: MapPin, stat: "East Ottawa", detail: "Located in Gloucester / East Ottawa — close to Orléans, Montreal Road, and the 417" },
  { icon: Users, stat: "Family Community", detail: "Long-established families alongside new buyers — Prestige serves both demographics" },
];

export default function MoversInBeaconHill() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving - Beacon Hill Movers Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/movers-in-beacon-hill",
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
      { "@type": "Place", "name": "Beacon Hill, Ottawa" },
      { "@type": "Place", "name": "Beacon Hill North" },
      { "@type": "Place", "name": "Beacon Hill South" },
      { "@type": "Place", "name": "Gloucester, Ottawa" },
      { "@type": "Place", "name": "Montreal Road Corridor" },
      { "@type": "Place", "name": "Blackburn Hamlet" }
    ],
    "description": "Top-rated movers in Beacon Hill Ottawa. Serving Beacon Hill North, Beacon Hill South, Gloucester, and East Ottawa communities. 350+ five-star reviews, WSIB certified. Free quote — (613) 600-4000."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much do movers in Beacon Hill Ottawa cost?", "acceptedAnswer": { "@type": "Answer", "text": "Beacon Hill moving costs typically range from $620 to $2,500 depending on home size and services. Bungalow and split-level home moves in Beacon Hill run $800–$1,500 for most 3-bedroom properties. Larger homes or moves with specialty items cost more. Prestige Moving provides transparent quotes with no hidden fees. Call (613) 600-4000 for a free estimate." } },
      { "@type": "Question", "name": "Do you have experience with Beacon Hill's bungalows and split-level homes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we move dozens of Beacon Hill bungalows and split-level homes every year. These homes often have long driveways, finished basements with narrow stair access, and large furniture accumulated over decades. Our team uses the right equipment to safely navigate every part of your Beacon Hill home, including basement access and garage moves." } },
      { "@type": "Question", "name": "Can you move seniors or retirees in Beacon Hill?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Senior moving is one of our most trusted specialties in Beacon Hill. Many long-time Beacon Hill residents are downsizing from large family homes to condos, retirement communities, or smaller properties. Our compassionate senior moving team takes extra care, works at the right pace, and handles every detail from packing to furniture placement with patience and professionalism." } },
      { "@type": "Question", "name": "Are your Beacon Hill movers insured and WSIB certified?", "acceptedAnswer": { "@type": "Answer", "text": "Every Prestige Moving team member is WSIB certified and we carry full commercial liability insurance. Your Beacon Hill home and belongings are protected from start to finish. We also offer additional valuation coverage for antiques, electronics, artwork, and other high-value items." } },
      { "@type": "Question", "name": "What East Ottawa areas near Beacon Hill do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve all East Ottawa communities including Beacon Hill North, Beacon Hill South, Gloucester, Blackburn Hamlet, Orléans, Manor Park, New Edinburgh, Vanier, and the Montreal Road corridor. We move between Beacon Hill and all Ottawa neighbourhoods with the same professional standard of service." } }
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
    { icon: Phone, title: "Free Quote", description: "Call (613) 600-4000 or book online for a detailed, no-surprise estimate tailored to your Beacon Hill home." },
    { icon: Calendar, title: "Book Your Date", description: "Choose any date that works — weekdays, weekends, mornings or afternoons. We adapt to your schedule." },
    { icon: TruckIcon, title: "Our Team Arrives", description: "Uniformed, trained Beacon Hill movers show up on time with all equipment and supplies ready." },
    { icon: Home, title: "Move Complete", description: "Every item placed exactly where you want it. Your new home is ready to live in from day one." },
  ];

  const whyPrestige = [
    { icon: Award, title: "#1 Rated Ottawa Mover", detail: "350+ five-star Google reviews — more than any other Ottawa moving company." },
    { icon: Shield, title: "WSIB Certified & Insured", detail: "Every mover is certified. Every move is fully covered by commercial liability insurance." },
    { icon: Users, title: "Local Ottawa Crew", detail: "Ottawa-born team who know Beacon Hill's streets, lot sizes, and seasonal moving challenges." },
    { icon: CheckCircle2, title: "Zero Hidden Fees", detail: "Your quote is your price. Labour, truck, travel — all itemized. No day-of surprises." },
    { icon: Clock, title: "Always On Time", detail: "We respect your timeline. Our Beacon Hill movers arrive in your confirmed window, guaranteed." },
    { icon: Home, title: "Senior Moving Experts", detail: "Compassionate, patient service for Beacon Hill's many long-time residents who are downsizing." },
  ];

  return (
    <>
      <Helmet>
        <title>Movers in Beacon Hill Ottawa | #1 Rated East Ottawa Moving Company | Prestige Moving</title>
        <meta name="description" content="Looking for movers in Beacon Hill Ottawa? Prestige Moving serves Beacon Hill North, South, Gloucester & all East Ottawa. 350+ five-star reviews, WSIB certified, senior moving specialists. Call (613) 600-4000 — free quote." />
        <meta name="keywords" content="movers in beacon hill, beacon hill movers ottawa, moving company beacon hill ottawa, east ottawa movers, beacon hill north movers, beacon hill south movers, gloucester movers ottawa, senior movers beacon hill" />
        <link rel="canonical" href="https://prestigemoving.ca/movers-in-beacon-hill" />
        <meta property="og:title" content="Movers in Beacon Hill Ottawa | Top-Rated East Ottawa Moving Company | Prestige" />
        <meta property="og:description" content="Beacon Hill's most trusted movers. Bungalows, split-levels, senior moves. WSIB certified, 350+ reviews. Free quotes — (613) 600-4000." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/movers-in-beacon-hill" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movers in Beacon Hill Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="Trusted Beacon Hill movers for bungalows, split-levels & senior moves. 350+ five-star reviews. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="relative h-[520px] flex items-center" data-testid="section-hero">
          <img src={heroImage} alt="Professional movers in Beacon Hill Ottawa unloading a moving truck at a family home" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1A2332]/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-5">
              <MapPin className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Beacon Hill · East Ottawa</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" data-testid="text-hero-heading">
              Top-Rated Movers<br className="hidden sm:block" /> in Beacon Hill
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">Beacon Hill's most trusted moving company — serving bungalows, split-levels, family homes, and senior moves across East Ottawa with 350+ five-star reviews.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572] font-bold" data-testid="button-hero-quote">Get Free Quote <ArrowRight className="h-4 w-4 ml-2" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Beacon Hill Moving" />

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

        {/* Area facts */}
        <section className="py-16 bg-gray-50" data-testid="section-area">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#1A2332] mb-3">About Beacon Hill, Ottawa</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Beacon Hill is one of Ottawa's most established east-end communities — mature trees, family homes, and a strong community spirit.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-5 mb-12">
              {AREA_FACTS.map((fact, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 text-center" data-testid={`fact-${i}`}>
                  <fact.icon className="h-8 w-8 text-[#C5A572] mx-auto mb-3" />
                  <div className="font-bold text-[#1A2332] mb-2">{fact.stat}</div>
                  <p className="text-gray-500 text-sm">{fact.detail}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold text-[#1A2332] mb-4">Why Choose Our Movers in Beacon Hill</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Beacon Hill is an established East Ottawa community built primarily in the 1960s through 1980s, characterized by spacious bungalows, split-level homes, and mature tree-lined streets that give the neighbourhood its distinctive character. Moving in Beacon Hill has its own unique considerations — large furniture accumulated over decades, finished basement stair access, long driveways that can complicate truck positioning, and the particular needs of long-time residents who may be downsizing for the first time. Our <strong className="text-[#1A2332]">Beacon Hill movers</strong> have completed hundreds of moves in this community and understand these dynamics intimately.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Prestige Moving has become Beacon Hill's most recommended moving company through consistent, careful service and transparent pricing. Whether you're a family moving into Beacon Hill, a long-time resident downsizing, or a professional relocating for work, our team delivers the same high standard of care. Call <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a> to get your free, no-obligation Beacon Hill moving quote.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1A2332] mb-4">Senior Moving in Beacon Hill</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Many of Beacon Hill's residents are long-established families and retirees — people who have lived in their homes for 20, 30, even 40+ years and are now navigating the emotional and logistical process of downsizing. Prestige Moving's <Link href="/services/senior-moving" className="text-[#C5A572] hover:underline">senior moving service</Link> is specifically designed for this transition. Our team works at your pace, handles every item with genuine care, and manages all the details — from carefully packing decades of accumulated belongings to coordinating delivery at your new retirement community or smaller home.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We also offer full <Link href="/services/packing-services" className="text-[#C5A572] hover:underline">packing and unpacking services</Link> to reduce the physical and emotional burden of a Beacon Hill downsizing move. Our compassionate team understands that every item in your home carries meaning, and we treat your belongings with the respect they deserve. Contact us at <a href="mailto:Ottawa@prestigemoving.ca" className="text-[#C5A572] hover:underline">Ottawa@prestigemoving.ca</a> for a private consultation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Prestige #1 */}
        <section className="py-16 bg-[#1A2332]" data-testid="section-why-prestige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-4">
                <Award className="h-4 w-4 text-[#C5A572]" />
                <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa's #1 Moving Company</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Why Ottawa Families Trust Prestige Moving</h2>
              <p className="text-white/60 max-w-2xl mx-auto">350+ five-star reviews don't happen by accident — they're the result of doing the right thing, every single move.</p>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Beacon Hill Moving Process Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions — Beacon Hill Movers</h2>
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

        <SeoKeywordsSection currentPage="/movers-in-beacon-hill" />

        {/* CTA */}
        <section className="py-16 bg-[#C5A572]" data-testid="section-cta">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move in Beacon Hill?</h2>
            <p className="text-white/80 text-lg mb-8">Get your free, no-obligation quote today. Trusted by hundreds of Beacon Hill families — 350+ five-star reviews and zero hidden fees.</p>
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
