import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, Calendar, Package, Home, Building2 } from "lucide-react";
import heroImage from "@assets/images/seo-movers-kanata.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function MoversInKanata() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving - Kanata Movers",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/movers-in-kanata",
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
      "reviewCount": "350"
    },
    "areaServed": [
      { "@type": "Place", "name": "Kanata, Ottawa" },
      { "@type": "Place", "name": "Kanata North" },
      { "@type": "Place", "name": "Kanata South" },
      { "@type": "Place", "name": "Bridlewood" },
      { "@type": "Place", "name": "Morgan's Grant" },
      { "@type": "Place", "name": "Stittsville" }
    ],
    "description": "Top-rated movers in Kanata, Ottawa. Serving Kanata North, Kanata South, Bridlewood, Morgan's Grant, Stittsville and all Kanata communities. WSIB certified, 350+ five-star reviews."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do movers in Kanata charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kanata moving costs range from $400 to $2,500 depending on home size, distance, and services. One-bedroom moves start around $400-$600, three-bedroom homes range from $1,200 to $2,500. Prestige Moving offers transparent pricing with no hidden fees. Call (613) 600-4000 for a free quote."
        }
      },
      {
        "@type": "Question",
        "name": "What Kanata areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all Kanata communities including Kanata North (tech park area), Kanata South, Kanata Lakes, Bridlewood, Morgan's Grant, Beaverbrook, Glen Cairn, Katimavik, Marchwood-Lakeside, Kanata Centrum, and neighbouring Stittsville. We also handle moves between Kanata and all other Ottawa areas."
        }
      },
      {
        "@type": "Question",
        "name": "Do you move tech office equipment in Kanata?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Prestige Moving specializes in commercial and tech office relocations throughout Kanata's technology corridor. We handle servers, networking equipment, workstations, monitors, and sensitive electronics with specialized packing, anti-static protection, and careful transport."
        }
      },
      {
        "@type": "Question",
        "name": "Are your Kanata movers WSIB certified and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every Prestige Moving team member is fully WSIB certified and we carry comprehensive commercial liability insurance. Your belongings are protected from pickup to delivery. We also offer additional valuation coverage for high-value items."
        }
      },
      {
        "@type": "Question",
        "name": "Can you accommodate last-minute moves in Kanata?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we accommodate last-minute and same-week moves in Kanata when our schedule allows. While booking 2-4 weeks ahead is recommended for guaranteed availability, we understand plans change and will do our best to help on short notice. Call (613) 600-4000 to check availability."
        }
      }
    ]
  };

  const stats = [
    { icon: Star, value: "350+", label: "Five-Star Reviews" },
    { icon: TruckIcon, value: "10,000+", label: "Successful Moves" },
    { icon: Clock, value: "24hr", label: "Quote Response" },
    { icon: Shield, value: "100%", label: "Fully Insured" }
  ];

  const processSteps = [
    { icon: Phone, title: "Request a Quote", description: "Call (613) 600-4000 or submit our online form for a free, detailed estimate for your Kanata move." },
    { icon: Calendar, title: "Schedule Your Move", description: "Choose a date and time that works best. We offer flexible scheduling including weekends and evenings." },
    { icon: TruckIcon, title: "We Handle Everything", description: "Our trained Kanata movers arrive on time, protect your home, and transport everything safely and efficiently." },
    { icon: Home, title: "Enjoy Your New Home", description: "Every piece of furniture placed exactly where you want it. Your Kanata move, completed with care." }
  ];

  const faqs = [
    {
      question: "How much do movers in Kanata charge?",
      answer: "Moving costs in Kanata typically range from $400 to $2,500 depending on the size of your home, the distance of your relocation, and the services you need. A one-bedroom apartment or condo move within Kanata generally starts around $400-$600, while a three-to-four-bedroom house relocation ranges from $1,200 to $2,500. Larger executive homes in communities like Morgan's Grant or Kanata Lakes may be higher depending on the volume of items. Prestige Moving provides fully transparent pricing with no hidden fees, and every quote includes a detailed cost breakdown. Contact us at (613) 600-4000 for a free, personalized estimate."
    },
    {
      question: "What Kanata areas do you serve?",
      answer: "Prestige Moving provides comprehensive moving services across every Kanata neighbourhood and the surrounding west Ottawa area. We serve Kanata North (including the tech park corridor), Kanata South, Kanata Lakes, Bridlewood, Morgan's Grant, Beaverbrook, Glen Cairn, Katimavik, Marchwood-Lakeside, Kanata Centrum, Kanata Heritage, and all new developments in the area. We also serve neighbouring Stittsville, Carp, and all communities along the March Road and Terry Fox Drive corridors. Moves between Kanata and Downtown Ottawa, Orleans, Barrhaven, and Nepean are among our most popular routes."
    },
    {
      question: "Do you move tech office equipment in Kanata?",
      answer: "Absolutely. Given Kanata's reputation as Ottawa's Silicon Valley — home to hundreds of tech companies along the Kanata North technology corridor — we have extensive experience with commercial and tech office relocations. Our specialized team handles servers, networking equipment, workstations, multi-monitor setups, and sensitive electronics with anti-static wrapping, custom crating, and climate-appropriate transport. We coordinate with your IT team to ensure proper disconnection, labelling, and reconnection of all technology infrastructure, minimizing downtime for your business."
    },
    {
      question: "Are your Kanata movers WSIB certified and insured?",
      answer: "Every member of the Prestige Moving team is fully WSIB (Workplace Safety and Insurance Board) certified, and we carry comprehensive commercial liability insurance that protects your belongings from the moment we start loading at your Kanata property until the last item is placed in your new home. We also offer additional valuation coverage for high-value items such as antiques, pianos, electronics, and artwork. Hiring WSIB-certified movers is essential because it protects both your property and the workers in your home — and it's a standard that many Kanata moving companies fail to meet."
    },
    {
      question: "Can you accommodate last-minute moves in Kanata?",
      answer: "Yes, Prestige Moving does accommodate last-minute and same-week moves in Kanata when our schedule allows. While we recommend booking 2-4 weeks in advance — particularly during the busy summer season and around end-of-month dates — we understand that real estate closings, job transfers, and life circumstances don't always give you advance notice. Our Kanata moving teams frequently have availability on shorter timelines, and we'll do everything possible to fit you in. Call us at (613) 600-4000 to discuss your timeline and we'll find a solution."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Movers in Kanata Ottawa | Top-Rated Moving Company | Prestige</title>
        <meta name="description" content="Need movers in Kanata? Prestige Moving serves Kanata North, Bridlewood, Morgan's Grant & all Kanata communities. 350+ five-star reviews, WSIB certified. Call (613) 600-4000 for a free quote." />
        <meta name="keywords" content="movers in kanata, kanata movers, moving company kanata, kanata moving services, movers kanata ottawa, residential movers kanata, commercial movers kanata, affordable movers kanata" />
        <link rel="canonical" href="https://prestigemoving.ca/movers-in-kanata" />
        <meta property="og:title" content="Movers in Kanata | Top-Rated Kanata Moving Company | Prestige" />
        <meta property="og:description" content="Kanata's most trusted movers with 350+ five-star reviews. Full-service residential and commercial moving. WSIB certified, fully insured. Free quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/movers-in-kanata" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movers in Kanata | Prestige Moving" />
        <meta name="twitter:description" content="Trusted movers serving all Kanata neighbourhoods. 350+ five-star reviews. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Professional movers in Kanata Ottawa loading a truck in a modern Kanata neighbourhood" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Top-Rated Movers in Kanata</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">From Kanata North's tech corridor to the family homes of Bridlewood and Morgan's Grant, Prestige Moving delivers five-star moving service across all of west Ottawa.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote <ArrowRight className="h-4 w-4 ml-2" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Kanata Moving" />

        <section className="bg-[#1A2332] py-8">
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

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Kanata Residents Choose Our Movers in Kanata</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kanata has grown from a quiet suburban community into one of Ottawa's most dynamic and sought-after places to live, work, and raise a family. As Kanata continues to expand with new residential developments, tech companies, and commercial spaces, the demand for experienced, reliable <strong className="text-[#1A2332]">movers in Kanata</strong> has never been higher. Prestige Moving has been serving Kanata families and businesses for years, building a reputation as the area's most trusted moving company with over 350 five-star reviews and more than 10,000 successful relocations across the National Capital Region.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What makes us the preferred <strong className="text-[#1A2332]">Kanata movers</strong> is our combination of deep local knowledge and professional-grade service. We understand the distinct characteristics of each Kanata neighbourhood — from the executive homes in Morgan's Grant and Kanata Lakes to the family-friendly streets of Bridlewood and Beaverbrook, and the tech-driven commercial spaces along <a href="https://www.kanatanorthbia.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">Kanata North's technology corridor</a>. Our teams arrive knowing the best access points, parking considerations, and building-specific requirements for every type of property in Kanata.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Residential and Commercial Kanata Movers</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Prestige Moving offers comprehensive moving solutions for both <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential</Link> and <Link href="/services/commercial-moving" className="text-[#C5A572] hover:underline">commercial clients</Link> throughout Kanata. For homeowners, our services include professional <Link href="/services/packing-services" className="text-[#C5A572] hover:underline">packing and unpacking</Link>, careful furniture disassembly and reassembly, appliance handling, wall and floor protection, and precise placement of every item in your new home. For businesses in the Kanata tech park and surrounding commercial areas, we provide specialized <strong className="text-[#1A2332]">office and IT equipment relocation</strong> with minimal downtime, including server migration, workstation setup, and after-hours moves.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kanata is often called Ottawa's Silicon Valley, home to major technology employers and hundreds of startups. Our commercial moving team has extensive experience relocating tech companies of all sizes, handling everything from individual workstations to entire floor buildouts with servers, networking infrastructure, and sensitive laboratory equipment. We coordinate closely with your IT department to ensure proper disconnection, transport, and reconnection of all systems. Our fleet of company-owned trucks — equipped with air-ride suspension and climate control — provides the ideal environment for transporting sensitive electronics safely.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Every Kanata Neighbourhood, Covered</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our Kanata moving teams are active in every neighbourhood across the community. We regularly serve Kanata North (the tech park area), Kanata South, Kanata Lakes, Bridlewood, Morgan's Grant, Beaverbrook, Glen Cairn, Katimavik, Marchwood-Lakeside, Kanata Centrum, Kanata Heritage, and all new developments along Terry Fox Drive and the March Road corridor. We also serve the neighbouring communities of Stittsville, Carp, and the rural areas west of Kanata, providing the same professional, five-star service regardless of location.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kanata's rapid growth means new housing developments are constantly opening, and our team stays up-to-date on <a href="https://www.ottawa.ca/en/planning-development-and-construction" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">new construction and infrastructure projects</a> that might affect moving logistics. From the spacious family homes along Kanata Lakes to the townhome complexes near the Tanger Outlets, we know how to navigate every corner of Kanata efficiently. Our dispatchers plan optimal routes to avoid congestion on the Queensway, March Road, and Terry Fox Drive, keeping your move on schedule.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Transparent Pricing from Kanata's Trusted Movers</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Prestige Moving, we pride ourselves on honest, transparent pricing that Kanata families can trust. Every quote includes a clear breakdown of all costs — labour, truck, packing materials, and travel time — with absolutely no hidden fees or surprise charges. The price we quote is the price you pay. This straightforward approach, combined with our WSIB certification, comprehensive insurance, and satisfaction guarantee, is why so many Kanata residents choose us and recommend us to their neighbours and colleagues.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Whether you're moving within Kanata, heading to <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, <Link href="/movers-in-nepean" className="text-[#C5A572] hover:underline">Nepean</Link>, <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link>, or anywhere else in Ottawa, Prestige Moving has the experience, equipment, and dedicated team to make it seamless. Call us today at <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a> or email <a href="mailto:Ottawa@prestigemoving.ca" className="text-[#C5A572] hover:underline">Ottawa@prestigemoving.ca</a> for your free, no-obligation quote.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Kanata Moving Process Works</h2>
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

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Movers in Kanata</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-md overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between gap-4 p-4 text-left hover-elevate"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    data-testid={`button-faq-${i}`}
                  >
                    <span className="font-semibold text-[#1A2332]">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-gray-600 leading-relaxed">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <SeoKeywordsSection currentPage="/movers-in-kanata" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move in Kanata?</h2>
            <p className="text-white/80 text-lg mb-8">Get your free, no-obligation quote and experience why 350+ families gave us five stars.</p>
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