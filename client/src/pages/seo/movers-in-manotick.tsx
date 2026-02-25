import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import {
  Phone, TruckIcon, Shield, Clock, Star, MapPin, ArrowRight,
  ChevronDown, Calendar, Home, CheckCircle2, Users, Award, Waves
} from "lucide-react";
import heroImage from "@assets/images/seo-movers-manotick.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function MoversInManotick() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving - Manotick Movers Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/movers-in-manotick",
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
    "priceRange": "$$$",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "350" },
    "areaServed": [
      { "@type": "Place", "name": "Manotick, Ottawa" },
      { "@type": "Place", "name": "Manotick Village" },
      { "@type": "Place", "name": "Long Island" },
      { "@type": "Place", "name": "Rideau River" },
      { "@type": "Place", "name": "South Nepean" },
      { "@type": "Place", "name": "Greely" }
    ],
    "description": "Top-rated movers in Manotick Ottawa. Specializing in estate homes, waterfront properties, and heritage village homes along the Rideau River. 350+ five-star reviews, WSIB certified. Free quote — (613) 600-4000."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much do movers in Manotick cost?", "acceptedAnswer": { "@type": "Answer", "text": "Manotick moving costs typically range from $900 to $4,500+ depending on home size, the distance from our facility, and specialty service needs. Manotick estate and waterfront homes often require larger crews and more time due to their size and rural access. Prestige Moving provides transparent, all-inclusive quotes. Call (613) 600-4000 for a free Manotick moving estimate." } },
      { "@type": "Question", "name": "Do you offer moving services to Manotick's rural and estate properties?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We specialize in estate moves in Manotick, including waterfront Rideau River properties, large lot homes, and historic Long Island heritage properties. Our fleet includes large-capacity trucks that can handle full estate moves in a single trip, and our teams are experienced in navigating the longer driveways and rural access roads common in the Manotick area." } },
      { "@type": "Question", "name": "Can you move antiques and heritage pieces from Manotick homes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — antique and specialty item moving is a core service for our Manotick clients. Many Manotick homes contain heirloom furniture, antique collections, valuable art, and grand pianos that require expert handling. Our specialty team uses museum-grade padding, custom crating, and white-glove procedures to protect every irreplaceable item throughout your Manotick move." } },
      { "@type": "Question", "name": "Are your Manotick movers insured and WSIB certified?", "acceptedAnswer": { "@type": "Answer", "text": "Every Prestige Moving team member is WSIB certified and fully insured. For Manotick estate moves with high-value items, we offer enhanced valuation coverage options that provide full replacement value protection for antiques, art, pianos, and custom furniture. We document all high-value items with photographs before and after the move." } },
      { "@type": "Question", "name": "Do you serve areas near Manotick like Greely and Rideau?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we serve Manotick and all surrounding rural Ottawa communities including Greely, Osgoode, Kars, North Gower, Richmond, and other Rideau ward communities. We also regularly move between Manotick and urban Ottawa neighbourhoods including Barrhaven, Nepean, Kanata, and Downtown Ottawa." } }
    ]
  };

  const faqs = faqSchema.mainEntity.map(q => ({ question: q.name, answer: q.acceptedAnswer.text }));

  const stats = [
    { icon: Star, value: "350+", label: "Five-Star Reviews" },
    { icon: TruckIcon, value: "10,000+", label: "Moves Completed" },
    { icon: Clock, value: "24hr", label: "Quote Response" },
    { icon: Shield, value: "100%", label: "Fully Insured" },
  ];

  const villageHighlights = [
    { icon: Waves, title: "Rideau River Waterfront", description: "Manotick's defining feature — the Rideau River wraps around Long Island with beautiful heritage properties and estate waterfront homes." },
    { icon: Home, title: "Heritage Village Core", description: "Watson's Mill and the historic village centre give Manotick a timeless character found nowhere else in Ottawa." },
    { icon: MapPin, title: "30 km from Ottawa Core", description: "Rural peace with urban convenience — quick access to Highway 416 and Barrhaven makes Manotick surprisingly connected." },
    { icon: Award, title: "Prestige Properties", description: "Some of Ottawa's most distinguished estate properties — large lots, custom builds, and Rideau River frontage." },
  ];

  const whyPrestige = [
    { icon: Award, title: "#1 Rated Ottawa Mover", detail: "350+ five-star Google reviews — Ottawa's most trusted moving company since day one." },
    { icon: Shield, title: "Estate Move Specialists", detail: "White-glove service for Manotick's most distinguished properties — handled with the care they deserve." },
    { icon: Users, title: "Experienced Local Crew", detail: "Ottawa-based team with deep experience moving rural estate and waterfront properties across the region." },
    { icon: CheckCircle2, title: "Zero Hidden Fees", detail: "Every Manotick quote is fully itemized — labour, truck, travel, materials. No day-of surprises." },
    { icon: TruckIcon, title: "Large Capacity Fleet", detail: "Full estate moves in a single trip — our largest trucks handle Manotick's biggest homes efficiently." },
    { icon: Clock, title: "Punctual & Professional", detail: "We arrive when we say we will, equipped and prepared for your specific Manotick property." },
  ];

  const processSteps = [
    { icon: Phone, title: "Private Consultation", description: "Call (613) 600-4000 for a personalized Manotick estate moving consultation — we create a plan that fits your property." },
    { icon: Calendar, title: "Custom Schedule", description: "We work around your preferred dates — including weekends — with a dedicated coordinator for your Manotick move." },
    { icon: TruckIcon, title: "Expert Team Arrives", description: "Our estate-trained Manotick crew arrives on time, fully equipped for your property's specific requirements." },
    { icon: Home, title: "Complete Setup", description: "Every item placed exactly as you want it. Full assembly, walkthrough, and confirmation of your satisfaction." },
  ];

  return (
    <>
      <Helmet>
        <title>Movers in Manotick Ottawa | Estate & Village Moving Company | Prestige Moving</title>
        <meta name="description" content="Looking for movers in Manotick Ottawa? Prestige Moving specializes in Manotick estate homes, Rideau River waterfront properties & heritage village moves. 350+ five-star reviews, WSIB certified. Call (613) 600-4000 — free quote." />
        <meta name="keywords" content="movers in manotick, manotick movers, moving company manotick ottawa, manotick estate movers, rideau river movers, south ottawa movers, manotick village movers, rural movers ottawa, greely movers" />
        <link rel="canonical" href="https://prestigemoving.ca/movers-in-manotick" />
        <meta property="og:title" content="Movers in Manotick Ottawa | Estate & Waterfront Moving | Prestige Moving" />
        <meta property="og:description" content="Manotick's most trusted movers. Estate homes, Rideau waterfront, heritage village properties. WSIB certified, 350+ reviews. Free quotes — (613) 600-4000." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/movers-in-manotick" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movers in Manotick Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="Estate & village movers in Manotick. Rideau River waterfront, heritage homes. 350+ five-star reviews. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="relative h-[520px] flex items-center" data-testid="section-hero">
          <img src={heroImage} alt="Professional movers in Manotick Ottawa near the Rideau River village" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1A2332]/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-5">
              <Waves className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Manotick · Rideau Village</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" data-testid="text-hero-heading">
              Expert Movers<br className="hidden sm:block" /> in Manotick
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">From Rideau River waterfront estates to Manotick Village heritage homes, Prestige Moving delivers white-glove service to Ottawa's most distinguished rural community — 350+ five-star reviews.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572] font-bold" data-testid="button-hero-quote">Get Free Quote <ArrowRight className="h-4 w-4 ml-2" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Manotick Moving" />

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

        {/* Village highlights */}
        <section className="py-16 bg-gray-50" data-testid="section-village">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#1A2332] mb-3">About Manotick — Ottawa's Scenic Village</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Manotick is unlike any other Ottawa community — a living heritage village on the Rideau River, where historic charm meets modern estate living.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-5 mb-12">
              {villageHighlights.map((h, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 text-center" data-testid={`village-${i}`}>
                  <h.icon className="h-8 w-8 text-[#C5A572] mx-auto mb-3" />
                  <h3 className="font-bold text-[#1A2332] mb-2">{h.title}</h3>
                  <p className="text-gray-500 text-sm">{h.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1A2332] rounded-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Manotick Residents Choose Prestige Moving</h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Manotick is one of Ottawa's most unique and prestigious communities — a historic waterfront village on Long Island where the Rideau River splits into two channels, creating one of the most scenic living environments in the National Capital Region. Moving in Manotick requires a level of expertise and care that matches the distinction of its properties. From Watson's Mill to the Long Island heritage estates along the riverbank, our <strong className="text-white">Manotick moving team</strong> has the experience, equipment, and professionalism that Manotick homeowners expect.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    The rural character of Manotick also means longer truck travel times from our Ottawa facility — something we account for honestly and transparently in every quote. Our one-time travel fee reflects the actual cost of getting our team to your Manotick property and back, with no hidden mileage charges or surprise additions on moving day.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Estate & Waterfront Moving Specialists</h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Many Manotick properties feature large custom homes, extensive collections of furniture and art, and the kind of irreplaceable items that require genuine expertise to move safely. Our Manotick estate moving service includes dedicated crew coordinators, large-capacity trucks that can handle full estate moves in a single trip, professional packing and crating for specialty items, and careful attention to the rural access roads and long driveways common in the area.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    We serve Manotick and surrounding rural Ottawa communities including Greely, Osgoode, Kars, North Gower, and Richmond. Call <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a> for your private Manotick moving consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Prestige #1 */}
        <section className="py-16 bg-white" data-testid="section-why-prestige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                <Award className="h-4 w-4 text-[#C5A572]" />
                <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa's #1 Moving Company</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Why Ottawa & Manotick Trust Prestige Moving</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">350+ five-star reviews. 10,000+ moves. One standard of excellence — for every home, in every Ottawa community.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyPrestige.map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-lg p-6 hover-elevate" data-testid={`why-${i}`}>
                  <div className="w-10 h-10 bg-[#C5A572]/10 rounded-md flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-[#C5A572]" />
                  </div>
                  <h3 className="font-bold text-[#1A2332] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50" data-testid="section-process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Our Manotick Estate Moving Process</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions — Manotick Movers</h2>
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

        <SeoKeywordsSection currentPage="/movers-in-manotick" />

        {/* CTA */}
        <section className="py-16 bg-[#C5A572]" data-testid="section-cta">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Planning a Manotick Move?</h2>
            <p className="text-white/80 text-lg mb-8">Get a private, no-obligation estate moving consultation. 350+ five-star reviews. Ottawa's most trusted moving company for Manotick's most distinguished homes.</p>
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
