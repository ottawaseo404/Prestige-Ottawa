import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, Calendar, Package, Home, Building2 } from "lucide-react";
import heroImage from "@assets/images/seo-movers-gloucester.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function MoversInGloucester() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving - Gloucester Movers",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/movers-in-gloucester",
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
      "reviewCount": "337"
    },
    "areaServed": [
      { "@type": "Place", "name": "Gloucester, Ottawa" },
      { "@type": "Place", "name": "Beacon Hill" },
      { "@type": "Place", "name": "Blackburn Hamlet" },
      { "@type": "Place", "name": "Cyrville" },
      { "@type": "Place", "name": "Findlay Creek" },
      { "@type": "Place", "name": "Pineview" },
      { "@type": "Place", "name": "Cardinal Heights" },
      { "@type": "Place", "name": "Leitrim" }
    ],
    "description": "Trusted movers in Gloucester, Ottawa. Serving Beacon Hill, Blackburn Hamlet, Cyrville, Findlay Creek, Pineview, Cardinal Heights, Leitrim and all Gloucester communities. WSIB certified, 337+ five-star reviews."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do movers in Gloucester charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Moving costs in Gloucester typically range from $400 to $2,500 depending on home size, distance, and services required. One-bedroom moves start around $400-$600, while three-bedroom houses range from $1,200 to $2,500. Prestige Moving offers transparent pricing with no hidden fees. Call (613) 600-4000 for your free quote."
        }
      },
      {
        "@type": "Question",
        "name": "What Gloucester neighbourhoods do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all Gloucester communities including Beacon Hill, Blackburn Hamlet, Cyrville, Findlay Creek, Pineview, Cardinal Heights, Leitrim, and all surrounding areas in east Ottawa."
        }
      },
      {
        "@type": "Question",
        "name": "Do your Gloucester movers offer packing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Prestige Moving offers full-service packing and unpacking for Gloucester residents. Our team arrives with all necessary materials including boxes, tape, bubble wrap, and specialty wrapping for fragile items. We also offer partial packing if you prefer to handle some items yourself."
        }
      },
      {
        "@type": "Question",
        "name": "Are your Gloucester movers WSIB certified and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every Prestige Moving team member is fully WSIB certified and we carry comprehensive commercial liability insurance. Your belongings are protected from the moment we arrive at your Gloucester home until everything is placed in your new location. We also offer additional valuation coverage for high-value items."
        }
      },
      {
        "@type": "Question",
        "name": "Can you handle long-distance moves from Gloucester?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. In addition to local Gloucester moves, Prestige Moving handles long-distance relocations from Gloucester to Toronto, Montreal, Kingston, and other Ontario and Quebec cities. We provide the same five-star service whether you're moving across the neighbourhood or across the province."
        }
      }
    ]
  };

  const stats = [
    { icon: Star, value: "337+", label: "Five-Star Reviews" },
    { icon: TruckIcon, value: "10,000+", label: "Successful Moves" },
    { icon: Clock, value: "24hr", label: "Quote Response" },
    { icon: Shield, value: "100%", label: "Fully Insured" }
  ];

  const processSteps = [
    { icon: Phone, title: "Request a Quote", description: "Call us at (613) 600-4000 or fill out our online form for a free estimate tailored to your Gloucester move." },
    { icon: Calendar, title: "Schedule Your Move", description: "Choose a date that works best. We offer flexible scheduling including weekends and evenings across Gloucester." },
    { icon: TruckIcon, title: "We Handle Everything", description: "Our trained Gloucester movers arrive punctually, protect your belongings, and transport everything safely." },
    { icon: Home, title: "Settle Into Your New Home", description: "We place every piece of furniture exactly where you want it, ensuring a smooth transition." }
  ];

  const faqs = [
    {
      question: "How much do movers in Gloucester charge?",
      answer: "Moving costs in Gloucester typically range from $400 to $2,500 depending on the size of your home, the distance of your move, and the level of service you need. A standard one-bedroom apartment move within Gloucester starts around $400-$600, while a larger three-to-four-bedroom house relocation ranges from $1,200 to $2,500. Prestige Moving provides detailed, transparent quotes with absolutely no hidden fees or last-minute surcharges. Every line item is explained so you know exactly what you're paying for. Call us at (613) 600-4000 for a free, personalized quote."
    },
    {
      question: "What Gloucester neighbourhoods do you serve?",
      answer: "Prestige Moving serves every neighbourhood and community within Gloucester and the broader east-south Ottawa area. This includes Beacon Hill, Blackburn Hamlet, Cyrville, Findlay Creek, Pineview, Cardinal Heights, Leitrim, and all the rapidly growing residential developments in the region. We also handle moves between Gloucester and every other Ottawa community, including Downtown, Kanata, Orleans, Barrhaven, and Nepean. Our deep familiarity with Gloucester's streets, condo buildings, and subdivision layouts ensures efficient, smooth moves every time."
    },
    {
      question: "Do your Gloucester movers offer packing services?",
      answer: "Yes, Prestige Moving offers comprehensive professional packing and unpacking services for Gloucester residents. Our trained team arrives with all necessary supplies — sturdy moving boxes, packing tape, bubble wrap, packing paper, and specialty wrapping for fragile items — to carefully and efficiently pack your entire home. We also offer partial packing if you'd prefer to handle some rooms yourself. Our packing service is especially popular with busy families in Gloucester who want a completely hands-off, stress-free moving experience."
    },
    {
      question: "Are your Gloucester movers WSIB certified and insured?",
      answer: "Every single team member at Prestige Moving is fully WSIB (Workplace Safety and Insurance Board) certified, and we carry comprehensive commercial liability insurance that protects your belongings from the moment we begin loading at your Gloucester home until the last item is placed in your new location. We also offer additional valuation coverage options for high-value possessions such as antiques, musical instruments, fine art, and expensive electronics. Hiring WSIB-certified movers protects both you and our team throughout the moving process."
    },
    {
      question: "Can you handle long-distance moves from Gloucester?",
      answer: "Absolutely. In addition to local moves within Gloucester and across Ottawa, Prestige Moving specializes in long-distance relocations from Gloucester to destinations across Ontario and beyond. Whether you're moving from Gloucester to Toronto, Montreal, Kingston, Hamilton, or any other city, our team provides the same exceptional five-star service. We coordinate logistics, provide climate-controlled transport, and ensure your belongings arrive safely at your new home, no matter the distance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Movers in Gloucester Ottawa | Trusted Moving Company | Prestige</title>
        <meta name="description" content="Need movers in Gloucester? Prestige Moving serves Beacon Hill, Blackburn Hamlet, Cyrville, Findlay Creek & all Gloucester areas. 337+ five-star reviews, WSIB certified. Call (613) 600-4000 for a free quote." />
        <meta name="keywords" content="movers in gloucester, gloucester movers, moving company gloucester, gloucester moving services, movers gloucester ottawa, residential movers gloucester, affordable movers gloucester" />
        <link rel="canonical" href="https://prestigemoving.ca/movers-in-gloucester" />
        <meta property="og:title" content="Movers in Gloucester | Trusted Gloucester Moving Company | Prestige" />
        <meta property="og:description" content="Gloucester's most trusted movers. Full-service residential and commercial moving. WSIB certified, fully insured, 337+ reviews. Free quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/movers-in-gloucester" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movers in Gloucester | Prestige Moving" />
        <meta name="twitter:description" content="Trusted movers serving all Gloucester neighbourhoods. 337+ five-star reviews. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Professional movers in Gloucester Ottawa helping a family with their relocation" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Trusted Movers in Gloucester</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">From Beacon Hill to Blackburn Hamlet, Prestige Moving is Gloucester's most reliable moving company with five-star service and transparent pricing.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote <ArrowRight className="h-4 w-4 ml-2" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Gloucester Moving" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Gloucester Families Choose Our Movers in Gloucester</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Gloucester is one of Ottawa's most diverse and expansive communities, stretching across the east and southeast of the city with a rich mix of established neighbourhoods and thriving new developments. Finding dependable <strong className="text-[#1A2332]">movers in Gloucester</strong> means partnering with a team that understands the area's unique layout, from the mature tree-lined streets of Beacon Hill to the modern subdivisions of Findlay Creek. Prestige Moving has completed thousands of successful relocations throughout Gloucester, earning 337+ five-star reviews and a reputation as the area's most trusted moving company.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What sets Prestige Moving apart as the go-to choice for <strong className="text-[#1A2332]">Gloucester movers</strong> is our deep local expertise combined with professional-grade service. Our teams know which condo buildings in Cyrville require advance elevator bookings, which residential streets in Blackburn Hamlet have specific <a href="https://www.ottawa.ca/en/parking-roads-and-travel" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">parking regulations</a> for moving trucks, and the most efficient routes through Gloucester to avoid peak-hour congestion on Innes Road and Hunt Club Road. This local knowledge translates directly into faster, more efficient moves with fewer delays and a smoother overall experience for your family.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Complete Gloucester Moving Services for Every Need</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              As a full-service moving company, Prestige Moving provides Gloucester residents with everything needed for a seamless relocation. Our services include professional <Link href="/services/packing-services" className="text-[#C5A572] hover:underline">packing and unpacking</Link>, furniture disassembly and reassembly, floor and wall protection, appliance disconnection and reconnection, and meticulous placement of every item in your new home. For families with <Link href="/services/piano-moving" className="text-[#C5A572] hover:underline">pianos</Link>, <Link href="/services/antique-moving" className="text-[#C5A572] hover:underline">antiques</Link>, or other <Link href="/services/specialty-item-moving" className="text-[#C5A572] hover:underline">specialty items</Link>, we have dedicated teams trained in handling delicate and high-value possessions with the utmost care.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our company-owned fleet features air-ride suspension to protect your belongings during transit, and every truck is stocked with moving blankets, shrink wrap, dollies, and specialty equipment. Whether you're moving locally within Gloucester or heading across the city to <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link>, <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, or <Link href="/movers-in-nepean" className="text-[#C5A572] hover:underline">Nepean</Link>, our team ensures a professional experience from start to finish. We also provide <Link href="/services/storage-solutions" className="text-[#C5A572] hover:underline">temporary storage solutions</Link> for Gloucester residents who need flexibility between move-out and move-in dates.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Every Gloucester Neighbourhood, Every Time</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Prestige Moving has completed hundreds of successful relocations across every Gloucester neighbourhood. We regularly serve families in Beacon Hill, Blackburn Hamlet, Cyrville, Findlay Creek, Pineview, Cardinal Heights, Leitrim, and all the exciting new developments transforming Gloucester into one of Ottawa's most sought-after residential areas. Our deep familiarity with these communities means faster loading times, more efficient routes, and a smoother overall experience for every family we serve.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Gloucester presents unique moving considerations that our experienced team handles with ease. The rapidly growing Findlay Creek area features many newer homes with specific access requirements, while older established neighbourhoods like Beacon Hill have mature streets with large trees that require careful truck positioning. Our dispatchers coordinate all of these details in advance so that moving day runs seamlessly. We also stay current with <a href="https://www.ottawa.ca/en/planning-development-and-construction" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">new construction and road development</a> in Gloucester, adjusting our routes as the community continues to grow.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Transparent Pricing from Gloucester's Most Trusted Movers</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Prestige Moving, we believe you deserve to know exactly what your Gloucester move will cost before we lift a single box. Our detailed quotes break down every cost clearly — labour, truck, materials, travel time — with absolutely no hidden fees. This transparent approach has made us one of the most recommended moving companies in the Gloucester area. When you call us at <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a>, you'll speak with a knowledgeable team member who can provide a quick estimate or schedule an in-home assessment for a more detailed quote.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every Prestige Moving team member is <a href="https://www.wsib.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">WSIB certified</a> and fully insured, giving you complete peace of mind throughout your Gloucester move. We also offer a satisfaction guarantee — if anything doesn't meet your expectations, we'll make it right. Beyond <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving</Link>, we handle <Link href="/services/commercial-moving" className="text-[#C5A572] hover:underline">commercial relocations</Link>, <Link href="/services/senior-moving" className="text-[#C5A572] hover:underline">senior moves</Link>, and <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">long-distance relocations</Link> from Gloucester to destinations across Ontario and beyond. Contact us today at <a href="mailto:Ottawa@prestigemoving.ca" className="text-[#C5A572] hover:underline">Ottawa@prestigemoving.ca</a> for your free, no-obligation moving quote.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Gloucester Moving Process Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Movers in Gloucester</h2>
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

        <SeoKeywordsSection currentPage="/movers-in-gloucester" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move in Gloucester?</h2>
            <p className="text-white/80 text-lg mb-8">Get your free, no-obligation quote today and discover why 337+ families trust Prestige Moving.</p>
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
