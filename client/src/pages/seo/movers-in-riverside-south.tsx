import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, Calendar, Package, Home, Building2 } from "lucide-react";
import heroImage from "@assets/images/seo-movers-riverside-south.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function MoversInRiversideSouth() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving - Riverside South Movers",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/movers-in-riverside-south",
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
      { "@type": "Place", "name": "Riverside South, Ottawa" },
      { "@type": "Place", "name": "Blossom Park" },
      { "@type": "Place", "name": "Honey Gables" },
      { "@type": "Place", "name": "Wateridge Village" },
      { "@type": "Place", "name": "Manotick border" }
    ],
    "description": "Expert movers in Riverside South, Ottawa. Serving Blossom Park, Honey Gables, Wateridge Village, Manotick border and all Riverside South communities. WSIB certified, 337+ five-star reviews."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do movers in Riverside South charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Riverside South moving costs range from $400 to $2,500 depending on home size, distance, and services required. One-bedroom moves start around $400-$600, while three-bedroom houses range from $1,200 to $2,500. Prestige Moving offers transparent pricing with no hidden fees. Call (613) 600-4000 for your free quote."
        }
      },
      {
        "@type": "Question",
        "name": "What Riverside South areas do your movers cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cover all Riverside South communities including Blossom Park, Honey Gables, Wateridge Village, the Manotick border area, and all new developments along Limebank Road and Earl Armstrong Road."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle moves from Riverside South to Barrhaven?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, moves between Riverside South and Barrhaven are among our most common routes. The two communities are neighbours, and our teams know the best routes between them. We also handle moves to all other Ottawa communities and long-distance destinations."
        }
      },
      {
        "@type": "Question",
        "name": "Are your Riverside South movers insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every Prestige Moving team member is WSIB certified and we carry comprehensive commercial liability insurance. Your belongings are protected from pickup to delivery, and we offer additional valuation coverage for high-value items."
        }
      },
      {
        "@type": "Question",
        "name": "Can you move new-build homes in Riverside South?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Riverside South is one of Ottawa's fastest-growing communities with many new developments. Our team is experienced with new-build moves, including coordinating with builders on possession dates, handling moves into homes that may still have active construction nearby, and navigating new subdivision roads."
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
    { icon: Phone, title: "Request a Quote", description: "Call us at (613) 600-4000 or fill out our online form for a free estimate tailored to your Riverside South move." },
    { icon: Calendar, title: "Schedule Your Move", description: "Choose a date that works best. We offer flexible scheduling including weekends and evenings across Riverside South." },
    { icon: TruckIcon, title: "We Handle Everything", description: "Our trained Riverside South movers arrive punctually, protect your belongings, and transport everything safely." },
    { icon: Home, title: "Settle Into Your New Home", description: "We place every piece of furniture exactly where you want it, ensuring a smooth transition." }
  ];

  const faqs = [
    {
      question: "How much do movers in Riverside South charge?",
      answer: "Moving costs in Riverside South typically range from $400 to $2,500 depending on the size of your home, the distance of your move, and the level of service you need. A standard one-bedroom apartment or condo move within Riverside South starts around $400-$600, while a larger three-to-four-bedroom house relocation — common in the area's many new developments — ranges from $1,200 to $2,500. Prestige Moving provides detailed, transparent quotes with absolutely no hidden fees or last-minute surcharges. Every line item is explained so you know exactly what you're paying for. Call us at (613) 600-4000 for a free, personalized quote."
    },
    {
      question: "What Riverside South areas do your movers cover?",
      answer: "Prestige Moving serves every neighbourhood and community within Riverside South and the broader south Ottawa area. This includes Blossom Park, Honey Gables, Wateridge Village, the communities along the Manotick border, and all the rapidly expanding new residential developments along Limebank Road, Earl Armstrong Road, and Spratt Road. We also handle moves between Riverside South and every other Ottawa community, as well as long-distance relocations to cities across Ontario and beyond. Our deep familiarity with Riverside South's evolving street layouts and new subdivision roads ensures efficient, smooth moves every time."
    },
    {
      question: "Do you handle moves from Riverside South to Barrhaven?",
      answer: "Absolutely. Moves between Riverside South and Barrhaven are among our most frequently requested routes. The two communities are close neighbours, separated by just a short drive, and our teams know the best routes between them — including all the connecting roads through the Limebank and Greenbank corridors. We regularly move families between Riverside South and <a href='/movers-in-barrhaven'>Barrhaven</a>, as well as to all other Ottawa communities including Downtown, Kanata, Orleans, Nepean, and Gloucester. We also offer long-distance moving services to Toronto, Montreal, Kingston, and other Ontario destinations."
    },
    {
      question: "Are your Riverside South movers insured?",
      answer: "Every single team member at Prestige Moving is fully WSIB (Workplace Safety and Insurance Board) certified, and we carry comprehensive commercial liability insurance that protects your belongings from the moment we begin loading at your Riverside South home until the last item is placed in your new location. We also offer additional valuation coverage options for high-value possessions such as antiques, musical instruments, fine art, and expensive electronics. Hiring WSIB-certified movers protects both you and our team throughout the moving process."
    },
    {
      question: "Can you move new-build homes in Riverside South?",
      answer: "Absolutely. Riverside South is one of Ottawa's fastest-growing communities, with new residential developments being built at a rapid pace along Limebank Road, Earl Armstrong Road, and the surrounding areas. Our team has extensive experience with new-build moves, which come with their own unique challenges — coordinating with builders on possession dates, navigating new subdivision roads that may not yet appear on GPS systems, and handling moves into homes where nearby construction may still be active. We plan every detail in advance to ensure your move into your brand-new Riverside South home goes smoothly."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Movers in Riverside South Ottawa | Moving Company | Prestige</title>
        <meta name="description" content="Need movers in Riverside South? Prestige Moving serves Blossom Park, Honey Gables, Wateridge Village & all Riverside South areas. 337+ five-star reviews, WSIB certified. Call (613) 600-4000." />
        <meta name="keywords" content="movers in riverside south, riverside south movers, moving company riverside south, riverside south moving services, movers riverside south ottawa, residential movers riverside south" />
        <link rel="canonical" href="https://prestigemoving.ca/movers-in-riverside-south" />
        <meta property="og:title" content="Movers in Riverside South | Expert Moving Company | Prestige" />
        <meta property="og:description" content="Riverside South's most trusted movers. Full-service residential moving for new developments and established homes. WSIB certified, 337+ reviews. Free quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/movers-in-riverside-south" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movers in Riverside South | Prestige Moving" />
        <meta name="twitter:description" content="Trusted movers serving all Riverside South neighbourhoods. 337+ five-star reviews. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Professional movers in Riverside South Ottawa loading a moving truck in a new development" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Expert Movers in Riverside South</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">From new developments to established homes, Prestige Moving is Riverside South's most trusted moving company with five-star service and honest pricing.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote <ArrowRight className="h-4 w-4 ml-2" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Riverside South Moving" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Riverside South Families Trust Our Movers in Riverside South</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Riverside South is one of Ottawa's fastest-growing communities, experiencing rapid residential development with beautiful new homes, modern amenities, and a family-friendly atmosphere. This explosive growth means a constant demand for reliable, professional <strong className="text-[#1A2332]">movers in Riverside South</strong>. Whether you're a young family moving into a brand-new home along Earl Armstrong Road, a couple relocating from Blossom Park to a larger property in Honey Gables, or moving from nearby <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link> to take advantage of Riverside South's exciting new developments, Prestige Moving delivers the five-star service and transparent pricing that has earned us 337+ glowing reviews from satisfied customers across south Ottawa.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What makes Prestige Moving the preferred choice for <strong className="text-[#1A2332]">Riverside South movers</strong> is our combination of local expertise and professional-grade service. Our teams know Riverside South's evolving landscape intimately — from the newest subdivisions along Limebank Road to the established streets of Blossom Park and the communities bordering Manotick. We understand which new developments may have construction-related access challenges, which <a href="https://www.ottawa.ca/en/parking-roads-and-travel" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">roads and intersections</a> are impacted by ongoing infrastructure projects, and the best routes to navigate the area efficiently.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Full-Service Riverside South Movers for Growing Families</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              As a full-service moving company, we offer Riverside South residents everything they need for a smooth, stress-free relocation. Our services include professional <Link href="/services/packing-services" className="text-[#C5A572] hover:underline">packing and unpacking</Link>, furniture disassembly and reassembly, floor and wall protection, appliance disconnection and reconnection, and meticulous placement of every item in your new home. For families with <Link href="/services/piano-moving" className="text-[#C5A572] hover:underline">pianos</Link>, <Link href="/services/antique-moving" className="text-[#C5A572] hover:underline">antiques</Link>, or other <Link href="/services/specialty-item-moving" className="text-[#C5A572] hover:underline">specialty items</Link>, we have dedicated teams trained in handling delicate and high-value possessions with the utmost care.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our company-owned fleet is equipped with air-ride suspension to protect your belongings during transit, and every truck is stocked with moving blankets, shrink wrap, dollies, and specialty equipment. Whether you're moving locally within Riverside South or heading across the city to <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link>, <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, or <Link href="/movers-in-nepean" className="text-[#C5A572] hover:underline">Nepean</Link>, our team ensures a professional experience from start to finish. We also provide <Link href="/services/storage-solutions" className="text-[#C5A572] hover:underline">temporary storage solutions</Link> for Riverside South residents who need flexibility between possession dates.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">New Developments and Riverside South Neighbourhood Expertise</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Prestige Moving has completed hundreds of successful relocations across every Riverside South neighbourhood and new development. We regularly serve families in Blossom Park, Honey Gables, Wateridge Village, the communities along the Manotick border, and all the exciting new subdivisions being built throughout the area. Our deep familiarity with these communities — including many streets that are brand new and may not yet appear on standard GPS systems — means faster, more efficient moves with fewer surprises.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Riverside South's rapid growth presents unique moving considerations that our experienced team handles with ease. New-build homes often have specific builder requirements for possession-day moves, nearby construction can affect access routes, and the community's proximity to Barrhaven means we frequently handle cross-community relocations. Our dispatchers coordinate all of these details in advance so that moving day runs seamlessly. We also stay current with <a href="https://www.ottawa.ca/en/planning-development-and-construction" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">new construction and road development</a> in Riverside South, adjusting our routes as the community continues its remarkable growth.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Transparent Pricing from Riverside South's Best Movers</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Prestige Moving, we believe you deserve to know exactly what your Riverside South move will cost before we lift a single box. Our detailed quotes break down every cost clearly — labour, truck, materials, travel time — with absolutely no hidden fees. This transparent approach has made us one of the most recommended moving companies in south Ottawa. When you call us at <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a>, you'll speak with a knowledgeable team member who can provide a quick estimate or schedule an in-home assessment for a more detailed quote.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every Prestige Moving team member is <a href="https://www.wsib.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">WSIB certified</a> and fully insured, giving you complete peace of mind throughout your Riverside South move. Beyond <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving</Link>, we handle <Link href="/services/commercial-moving" className="text-[#C5A572] hover:underline">commercial relocations</Link>, <Link href="/services/senior-moving" className="text-[#C5A572] hover:underline">senior moves</Link>, and <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">long-distance relocations</Link>. With 337+ five-star reviews, our commitment to excellence speaks for itself. Contact us at <a href="mailto:Ottawa@prestigemoving.ca" className="text-[#C5A572] hover:underline">Ottawa@prestigemoving.ca</a> for your free, no-obligation moving quote.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Riverside South Moving Process Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Movers in Riverside South</h2>
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

        <SeoKeywordsSection currentPage="/movers-in-riverside-south" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move in Riverside South?</h2>
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
