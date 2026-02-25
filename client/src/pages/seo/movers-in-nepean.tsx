import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, Calendar, Package, Home, Building2 } from "lucide-react";
import heroImage from "@assets/images/seo-movers-nepean.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function MoversInNepean() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving - Nepean Movers",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/movers-in-nepean",
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
      { "@type": "Place", "name": "Nepean, Ottawa" },
      { "@type": "Place", "name": "Barrhaven" },
      { "@type": "Place", "name": "Bells Corners" },
      { "@type": "Place", "name": "Centrepointe" },
      { "@type": "Place", "name": "Craig Henry" },
      { "@type": "Place", "name": "Merivale" }
    ],
    "description": "Reliable movers in Nepean, Ottawa. Serving Bells Corners, Centrepointe, Craig Henry, Merivale and all Nepean communities. WSIB certified, 350+ five-star reviews."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do Nepean movers charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nepean moving costs range from $400 to $2,500 depending on home size, distance, and services. One-bedroom moves start around $400-$600, three-bedroom homes range from $1,200 to $2,500. Prestige Moving offers transparent pricing. Call (613) 600-4000 for a free quote."
        }
      },
      {
        "@type": "Question",
        "name": "Which Nepean neighbourhoods do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all Nepean areas including Bells Corners, Centrepointe, Craig Henry, Merivale, Barrhaven, Greenbank, Baseline-Pinecrest, Fisher Heights, Carlingwood, Bel-Air Heights, Skyline, McKellar Park, Westcliffe, and all surrounding communities in west Ottawa."
        }
      },
      {
        "@type": "Question",
        "name": "Do your Nepean movers offer packing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide full-service professional packing and unpacking for Nepean residents. Our team brings all supplies including boxes, tape, bubble wrap, and specialty wrapping. We also offer partial packing if you prefer to handle some items yourself."
        }
      },
      {
        "@type": "Question",
        "name": "Are your Nepean movers insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every Prestige Moving team member is WSIB certified and we carry full commercial liability insurance. Your belongings are protected throughout the entire moving process, and we offer additional coverage options for high-value items."
        }
      },
      {
        "@type": "Question",
        "name": "How far in advance should I book Nepean movers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend booking 2-4 weeks in advance, especially during summer months. End-of-month dates fill up quickly. However, we also accommodate last-minute moves when availability permits. Call (613) 600-4000 to check our current schedule."
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
    { icon: Phone, title: "Request a Quote", description: "Call (613) 600-4000 or fill out our online form for a free, detailed estimate for your Nepean move." },
    { icon: Calendar, title: "Schedule Your Move", description: "Pick a date that suits you. We offer flexible scheduling including weekends and evenings across Nepean." },
    { icon: TruckIcon, title: "We Handle Everything", description: "Our experienced Nepean movers arrive on time, protect your belongings, and handle every detail with care." },
    { icon: Home, title: "Enjoy Your New Space", description: "We place furniture where you want it and make sure everything arrives in perfect condition." }
  ];

  const faqs = [
    {
      question: "How much do Nepean movers charge?",
      answer: "Moving costs in Nepean typically range from $400 to $2,500 depending on the size of your home, the distance of your relocation, and the services you require. A standard one-bedroom apartment move within Nepean starts around $400-$600, while a three-to-four-bedroom home relocation typically ranges from $1,200 to $2,500. Prestige Moving provides fully transparent pricing with no hidden fees, surprise surcharges, or last-minute additions. Every quote includes a clear, line-by-line breakdown of costs. Contact us at (613) 600-4000 for a free, no-obligation quote tailored to your specific Nepean move."
    },
    {
      question: "Which Nepean neighbourhoods do you serve?",
      answer: "Prestige Moving provides comprehensive moving services across every Nepean neighbourhood and the broader west Ottawa area. We regularly serve Bells Corners, Centrepointe, Craig Henry, Merivale, Greenbank, Baseline-Pinecrest, Fisher Heights, Carlingwood, Bel-Air Heights, Skyline, McKellar Park, Westcliffe, Qualicum-Graham Park, Country Place, and all surrounding communities. We also handle moves between Nepean and other Ottawa areas including Downtown, Kanata, Orleans, Barrhaven, and Gloucester. Our intimate knowledge of Nepean's roads, buildings, and parking regulations ensures smooth, efficient moves every time."
    },
    {
      question: "Do your Nepean movers offer packing services?",
      answer: "Absolutely. We offer full-service professional packing and unpacking for all Nepean residents. Our experienced packing team arrives with everything needed — high-quality moving boxes in various sizes, packing tape, bubble wrap, packing paper, dish pack dividers, and specialty wrapping for fragile and valuable items. We carefully pack each room systematically, labelling every box for easy identification during unpacking. We also offer partial packing for those who prefer to pack some items themselves. Our packing services are particularly popular with families, seniors, and busy professionals in Nepean who want a truly stress-free moving experience."
    },
    {
      question: "Are your Nepean movers insured?",
      answer: "Every Prestige Moving team member is fully WSIB (Workplace Safety and Insurance Board) certified, and we carry comprehensive commercial liability insurance that covers your belongings throughout the entire moving process. From the moment we begin loading at your Nepean home until the final piece of furniture is placed in your new location, every item is protected under our coverage. We also offer enhanced valuation coverage for high-value items including antiques, artwork, pianos, and expensive electronics. Hiring WSIB-certified movers is essential for protecting both your property and the workers in your home."
    },
    {
      question: "How far in advance should I book Nepean movers?",
      answer: "We recommend booking your Nepean movers 2-4 weeks in advance to secure your preferred date and time. During the busy summer moving season — June through September — and around end-of-month dates, availability can be limited, so booking 3-4 weeks ahead is ideal. That said, we understand that life doesn't always follow a schedule, and we do accommodate last-minute and same-week moves when our calendar permits. Call us at (613) 600-4000 to check our current availability for your desired moving date."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Movers in Nepean Ottawa | Reliable Local Moving Company | Prestige</title>
        <meta name="description" content="Searching for movers in Nepean? Prestige Moving serves Bells Corners, Centrepointe, Craig Henry & all Nepean areas. 350+ five-star reviews, WSIB certified. Call (613) 600-4000 for your free quote." />
        <meta name="keywords" content="movers in nepean, nepean movers, moving company nepean, nepean moving services, movers nepean ottawa, residential movers nepean, affordable movers nepean, best movers nepean" />
        <link rel="canonical" href="https://prestigemoving.ca/movers-in-nepean" />
        <meta property="og:title" content="Movers in Nepean | Reliable Nepean Moving Company | Prestige" />
        <meta property="og:description" content="Nepean's most trusted movers with 350+ five-star reviews. Full-service residential and commercial moving. WSIB certified, fully insured. Free quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/movers-in-nepean" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movers in Nepean | Prestige Moving" />
        <meta name="twitter:description" content="Trusted movers serving all Nepean neighbourhoods. 350+ five-star reviews. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Experienced movers in Nepean Ottawa carrying furniture to a moving truck on a residential street" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Reliable Movers in Nepean</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">Prestige Moving is Nepean's top-rated moving company — trusted by thousands of families and businesses across west Ottawa for professional, careful relocations.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote <ArrowRight className="h-4 w-4 ml-2" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Nepean Moving" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Nepean Residents Rely on Our Movers in Nepean</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nepean is a diverse, established community in west Ottawa with a rich mix of residential neighbourhoods, commercial areas, and green spaces. Finding trustworthy <strong className="text-[#1A2332]">movers in Nepean</strong> who understand the unique character of this area requires a company with deep local expertise and a proven track record. That's exactly what Prestige Moving delivers — with over 350 five-star reviews and 10,000+ successful relocations, we are the most trusted name in Nepean moving services. From heritage homes in Bells Corners to modern condos along Merivale Road, our team handles every type of property with professional care and attention.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What distinguishes Prestige Moving from other <strong className="text-[#1A2332]">Nepean movers</strong> is the quality of our people and our process. Every team member undergoes comprehensive training in furniture protection, proper lifting techniques, and customer service. We don't hire day labourers or subcontract your move — the team that shows up at your Nepean doorstep is our team, fully <a href="https://www.wsib.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">WSIB certified</a>, professionally uniformed, and equipped with all the tools and materials needed to execute a flawless relocation.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Full-Service Nepean Movers for Every Need</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Prestige Moving provides comprehensive <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential</Link> and <Link href="/services/commercial-moving" className="text-[#C5A572] hover:underline">commercial moving services</Link> throughout Nepean and west Ottawa. Our offerings include professional packing and unpacking, careful furniture disassembly and reassembly, appliance handling, floor and banister protection, and precise placement of every item in your new home or office. For residents with valuable or delicate items, we provide specialized moving services for <Link href="/services/piano-moving" className="text-[#C5A572] hover:underline">pianos</Link>, <Link href="/services/antique-moving" className="text-[#C5A572] hover:underline">antiques</Link>, artwork, and <Link href="/services/specialty-item-moving" className="text-[#C5A572] hover:underline">specialty items</Link> that require extra attention.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our fleet of company-owned trucks features air-ride suspension for maximum protection during transit, whether you're moving across Nepean or heading to <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link>, or any other Ottawa community. Each truck carries a full inventory of moving blankets, shrink wrap, dollies, ramps, and specialty equipment. We also offer <Link href="/services/storage-solutions" className="text-[#C5A572] hover:underline">climate-controlled storage</Link> for Nepean residents who need a flexible solution between their move-out and move-in dates.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Serving All Nepean Communities</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our Nepean moving teams serve every neighbourhood in the area, from the established communities of Bells Corners, Centrepointe, and Craig Henry, to the commercial corridors along Merivale Road and the residential streets of Fisher Heights, Carlingwood, and Bel-Air Heights. We also serve Greenbank, Skyline, McKellar Park, Westcliffe, Qualicum-Graham Park, Country Place, and all surrounding west Ottawa communities. Our familiarity with Nepean's diverse housing stock — from <a href="https://ottawa.ca/en/planning-development-and-construction" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">mid-century bungalows</a> to high-rise condos — means we come prepared with the right equipment and approach for every type of property.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nepean's mix of residential streets, busy commercial areas, and condo complexes requires movers who can adapt to different environments quickly and efficiently. Our dispatchers coordinate elevator bookings, loading zone permits, and parking logistics well in advance, ensuring that your moving day runs without a hitch. We understand the traffic patterns on Merivale Road, Woodroffe Avenue, and the Queensway, and we plan our routes accordingly to keep your move on schedule.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Honest Pricing from Nepean's Trusted Movers</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Prestige Moving is committed to transparent, honest pricing for every Nepean move. When you receive a quote from us, it includes a detailed breakdown of all costs — labour, truck, materials, and travel time — with absolutely no hidden fees. Our reputation for fair, upfront pricing is one of the key reasons Nepean families keep choosing us and recommending us to their friends and neighbours. Contact us at <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a> or <a href="mailto:Ottawa@prestigemoving.ca" className="text-[#C5A572] hover:underline">Ottawa@prestigemoving.ca</a> to get your free, no-obligation quote today.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Nepean Moving Process Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Movers in Nepean</h2>
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

        <SeoKeywordsSection currentPage="/movers-in-nepean" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move in Nepean?</h2>
            <p className="text-white/80 text-lg mb-8">Get your free, no-obligation quote and join 350+ families who gave us five stars.</p>
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