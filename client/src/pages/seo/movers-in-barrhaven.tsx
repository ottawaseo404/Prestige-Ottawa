import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, Calendar, Package, Home, Building2 } from "lucide-react";
import heroImage from "@assets/images/seo-movers-barrhaven.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function MoversInBarrhaven() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving - Barrhaven Movers",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/movers-in-barrhaven",
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
      { "@type": "Place", "name": "Barrhaven, Ottawa" },
      { "@type": "Place", "name": "Half Moon Bay" },
      { "@type": "Place", "name": "Stonebridge" },
      { "@type": "Place", "name": "Longfields" },
      { "@type": "Place", "name": "Chapman Mills" },
      { "@type": "Place", "name": "Riverside South" }
    ],
    "description": "Top-rated movers in Barrhaven, Ottawa. Serving Half Moon Bay, Stonebridge, Longfields, Chapman Mills and all Barrhaven communities. WSIB certified, 337+ five-star reviews."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do movers in Barrhaven cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Barrhaven moving costs range from $400 to $2,500 depending on home size, distance, and services required. One-bedroom moves start around $400-$600, while three-bedroom houses range from $1,200 to $2,500. Prestige Moving offers transparent pricing with no hidden fees. Call (613) 600-4000 for your free quote."
        }
      },
      {
        "@type": "Question",
        "name": "What Barrhaven areas do your movers cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cover all Barrhaven neighbourhoods including Half Moon Bay, Stonebridge, Longfields, Chapman Mills, Riverside South, Harmony, Barrhaven Town Centre, Cambrian, Knollsbrook, Marketplace, and all new developments along Strandherd Drive and Greenbank Road."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle moves from Barrhaven to other parts of Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we handle cross-city moves from Barrhaven to all Ottawa destinations including Downtown, Kanata, Orleans, Nepean, Gloucester, and beyond. We also handle long-distance moves from Barrhaven to Toronto, Montreal, and other Ontario cities."
        }
      },
      {
        "@type": "Question",
        "name": "Are your Barrhaven movers WSIB certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every Prestige Moving team member is WSIB certified and we carry comprehensive commercial liability insurance. Your belongings are protected from pickup to delivery, and we offer additional valuation coverage for high-value items."
        }
      },
      {
        "@type": "Question",
        "name": "Can you move during weekends and evenings in Barrhaven?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Prestige Moving offers flexible scheduling including weekends, evenings, and holidays for Barrhaven residents. We understand that your schedule is busy, and we work around your availability to make your move as convenient as possible."
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
    { icon: Phone, title: "Request a Quote", description: "Call us at (613) 600-4000 or fill out our online form for a free estimate tailored to your Barrhaven move." },
    { icon: Calendar, title: "Schedule Your Move", description: "Choose a date that works best. We offer flexible scheduling including weekends and evenings across Barrhaven." },
    { icon: TruckIcon, title: "We Handle Everything", description: "Our trained Barrhaven movers arrive punctually, protect your belongings, and transport everything safely." },
    { icon: Home, title: "Settle Into Your New Home", description: "We place every piece of furniture exactly where you want it, ensuring a smooth transition." }
  ];

  const faqs = [
    {
      question: "How much do movers in Barrhaven cost?",
      answer: "Moving costs in Barrhaven typically range from $400 to $2,500 depending on the size of your home, the distance of your move, and the level of service you need. A standard one-bedroom apartment move within Barrhaven starts around $400-$600, while a larger three-to-four-bedroom house relocation ranges from $1,200 to $2,500. Prestige Moving provides detailed, transparent quotes with absolutely no hidden fees or last-minute surcharges. Every line item is explained so you know exactly what you're paying for. Call us at (613) 600-4000 for a free, personalized quote."
    },
    {
      question: "What Barrhaven areas do your movers cover?",
      answer: "Prestige Moving serves every neighbourhood and community within Barrhaven and south Ottawa. This includes Half Moon Bay, Stonebridge, Longfields, Chapman Mills, Riverside South, Harmony, Barrhaven Town Centre, Cambrian, Knollsbrook, Marketplace, and all the new residential developments along Strandherd Drive, Greenbank Road, and Borrisokane Road. We also handle moves between Barrhaven and every other Ottawa community, as well as long-distance relocations to cities across Ontario and beyond."
    },
    {
      question: "Do you handle moves from Barrhaven to other parts of Ottawa?",
      answer: "Absolutely. Cross-city moves are one of our specialties. We regularly move families from Barrhaven to Downtown Ottawa, Kanata, Orleans, Nepean, Gloucester, Westboro, and every other community in the National Capital Region. Our team plans the most efficient routes to ensure your belongings arrive quickly and safely, and we handle all the logistics so you can focus on settling into your new home. We also offer long-distance moving services from Barrhaven to Toronto, Montreal, Kingston, and other Ontario destinations."
    },
    {
      question: "Are your Barrhaven movers WSIB certified?",
      answer: "Every single team member at Prestige Moving is fully WSIB (Workplace Safety and Insurance Board) certified, and we carry comprehensive commercial liability insurance that protects your belongings from the moment we begin loading at your Barrhaven home until the last item is placed in your new location. We also offer additional valuation coverage options for high-value possessions such as antiques, musical instruments, fine art, and expensive electronics. Hiring WSIB-certified movers protects both you and our team throughout the moving process."
    },
    {
      question: "Can you move during weekends and evenings in Barrhaven?",
      answer: "Yes, Prestige Moving offers flexible scheduling that includes weekends, evenings, and even holiday moves for Barrhaven residents. We understand that taking time off work for a move isn't always possible, which is why we work around your schedule. Weekend and evening moves are available at competitive rates, and we maintain the same high level of service regardless of when your move takes place. Contact us to discuss your preferred timing and we'll find the best slot for your Barrhaven relocation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Movers in Barrhaven Ottawa | Top-Rated Moving Company | Prestige</title>
        <meta name="description" content="Need movers in Barrhaven? Prestige Moving serves Half Moon Bay, Stonebridge, Longfields & all Barrhaven areas. 337+ five-star reviews, WSIB certified. Call (613) 600-4000 for a free quote." />
        <meta name="keywords" content="movers in barrhaven, barrhaven movers, moving company barrhaven, barrhaven moving services, movers barrhaven ottawa, residential movers barrhaven, affordable movers barrhaven" />
        <link rel="canonical" href="https://prestigemoving.ca/movers-in-barrhaven" />
        <meta property="og:title" content="Movers in Barrhaven | Top-Rated Barrhaven Moving Company" />
        <meta property="og:description" content="Barrhaven's most trusted movers. Full-service residential and commercial moving. WSIB certified, fully insured, 337+ reviews. Free quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/movers-in-barrhaven" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movers in Barrhaven | Prestige Moving" />
        <meta name="twitter:description" content="Trusted movers serving all Barrhaven neighbourhoods. 337+ five-star reviews. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Professional movers in Barrhaven Ottawa helping a family move into their new home" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Professional Movers in Barrhaven</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">From Half Moon Bay to Stonebridge, Prestige Moving is south Ottawa's most trusted moving company with five-star service and transparent pricing.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote <ArrowRight className="h-4 w-4 ml-2" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Barrhaven Moving" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Barrhaven Families Trust Our Movers in Barrhaven</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Barrhaven is one of Ottawa's fastest-growing communities, and with rapid growth comes a constant demand for reliable, professional <strong className="text-[#1A2332]">movers in Barrhaven</strong>. Whether you're a young family moving into one of the beautiful new homes in Half Moon Bay, a couple upgrading from a condo in Longfields to a larger house in Stonebridge, or a growing business relocating within the Barrhaven Town Centre, Prestige Moving delivers the white-glove service and transparent pricing that has earned us 337+ five-star reviews from satisfied customers across south Ottawa.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What makes Prestige Moving the preferred choice for <strong className="text-[#1A2332]">Barrhaven movers</strong> is our combination of local expertise and professional-grade service. Our teams know Barrhaven's unique layout intimately — from the winding crescents of Chapman Mills to the busy commercial corridors along Strandherd Drive and Greenbank Road. We understand which <a href="https://www.ottawa.ca/en/parking-roads-and-travel" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">parking regulations</a> apply to moving trucks in different areas, which condo and townhouse complexes require advance booking for elevators and loading zones, and the best times of day to navigate Barrhaven's main arteries without delay.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Full-Service Barrhaven Movers for South Ottawa</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              As a full-service moving company, we offer Barrhaven residents everything they need for a smooth, stress-free relocation. Our services include professional <Link href="/services/packing-services" className="text-[#C5A572] hover:underline">packing and unpacking</Link>, furniture disassembly and reassembly, floor and wall protection, appliance disconnection and reconnection, and meticulous placement of every item in your new home. For families with <Link href="/services/piano-moving" className="text-[#C5A572] hover:underline">pianos</Link>, <Link href="/services/antique-moving" className="text-[#C5A572] hover:underline">antiques</Link>, or other <Link href="/services/specialty-item-moving" className="text-[#C5A572] hover:underline">specialty items</Link>, we have dedicated teams trained in handling delicate and high-value possessions with the utmost care.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our company-owned fleet is equipped with air-ride suspension to protect your belongings during transit, and every truck is stocked with moving blankets, shrink wrap, dollies, and specialty equipment. Whether you're moving locally within Barrhaven or heading across the city to <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link>, <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, or Downtown Ottawa, our team ensures a professional experience from start to finish. We also provide <Link href="/services/storage-solutions" className="text-[#C5A572] hover:underline">temporary storage solutions</Link> for Barrhaven residents who need flexibility between their move-out and move-in dates.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Every Barrhaven Neighbourhood, Every Time</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Prestige Moving has completed hundreds of successful relocations across every Barrhaven neighbourhood. We regularly serve families in Half Moon Bay, Stonebridge, Longfields, Chapman Mills, Riverside South, Harmony, Cambrian, Knollsbrook, Marketplace, and all the exciting new developments transforming south Ottawa into one of the city's most desirable residential areas. Our deep familiarity with these communities means faster loading times, more efficient routes, and a smoother overall experience.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Barrhaven presents unique moving considerations that our experienced team handles with ease. Many newer homes feature narrow driveways and attached garages that require careful truck positioning, while some townhouse complexes have specific access rules and time restrictions for moving vehicles. Our dispatchers coordinate all of these details in advance so that moving day runs seamlessly. We also stay current with <a href="https://www.ottawa.ca/en/planning-development-and-construction" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">new construction and road development</a> in Barrhaven, adjusting our routes as the community continues to evolve.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Transparent Pricing from Barrhaven's Best Movers</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Prestige Moving, we believe you deserve to know exactly what your Barrhaven move will cost before we lift a single box. Our detailed quotes break down every cost clearly — labour, truck, materials, travel time — with absolutely no hidden fees. This transparent approach has made us one of the most recommended moving companies in south Ottawa. When you call us at <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a>, you'll speak with a knowledgeable team member who can provide a quick estimate or schedule an in-home assessment for a more detailed quote.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every Prestige Moving team member is <a href="https://www.wsib.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">WSIB certified</a> and fully insured, giving you complete peace of mind throughout your Barrhaven move. We also offer a satisfaction guarantee — if anything doesn't meet your expectations, we'll make it right. With 337+ five-star reviews and counting, our commitment to excellence is the reason families across Barrhaven and south Ottawa keep choosing Prestige Moving for their most important relocations.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Barrhaven Moving Process Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Movers in Barrhaven</h2>
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

        <SeoKeywordsSection currentPage="/movers-in-barrhaven" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move in Barrhaven?</h2>
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