import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, Calendar, Package, Home, Building2 } from "lucide-react";
import heroImage from "@assets/images/seo-movers-orleans.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function MoversInOrleans() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving - Orleans Movers",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/movers-in-orleans",
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
      { "@type": "Place", "name": "Orleans, Ottawa" },
      { "@type": "Place", "name": "Avalon" },
      { "@type": "Place", "name": "Fallingbrook" },
      { "@type": "Place", "name": "Chapel Hill" },
      { "@type": "Place", "name": "Convent Glen" },
      { "@type": "Place", "name": "Springridge" }
    ],
    "description": "Trusted movers in Orleans, Ottawa. Full-service residential and commercial moving for Avalon, Fallingbrook, Chapel Hill, and all Orleans communities. WSIB certified, 350+ five-star reviews."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do movers in Orleans charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Moving costs in Orleans typically range from $400 to $2,500 depending on home size and services needed. A one-bedroom apartment move starts around $400-$600, while a three-bedroom house ranges from $1,200 to $2,500. Prestige Moving provides transparent pricing with no hidden fees. Call (613) 600-4000 for a free quote."
        }
      },
      {
        "@type": "Question",
        "name": "What Orleans neighbourhoods do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all Orleans communities including Avalon, Fallingbrook, Chapel Hill, Convent Glen, Springridge, Mer Bleue, Queenswood Heights, Hiawatha Park, Chateauneuf, Cardinal Creek, Notting Gate, and all surrounding areas in east Ottawa."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day moving in Orleans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Prestige Moving offers same-day and next-day moving services in Orleans when availability permits. While we recommend booking 2-4 weeks in advance for guaranteed scheduling, we understand that plans change and we do our best to accommodate urgent moves throughout Orleans and east Ottawa."
        }
      },
      {
        "@type": "Question",
        "name": "Are your Orleans movers insured and certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Every Prestige Moving team member is WSIB certified, and we carry comprehensive commercial liability insurance. Your belongings are fully protected from the moment we arrive at your Orleans home until everything is placed in your new location. We also offer additional valuation coverage for high-value items."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with packing and unpacking in Orleans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer full-service packing and unpacking for Orleans residents. Our team arrives with all necessary materials — boxes, tape, bubble wrap, and specialty wrapping — to carefully pack your entire home. We also offer partial packing if you prefer to handle some items yourself. Our packing service is especially popular with families in Orleans who want a completely stress-free move."
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
    { icon: Phone, title: "Request a Quote", description: "Call us at (613) 600-4000 or fill out our online form for a free, detailed estimate for your Orleans move." },
    { icon: Calendar, title: "Schedule Your Move", description: "Pick a date that works for you. We offer flexible scheduling including weekends and evenings throughout Orleans." },
    { icon: TruckIcon, title: "We Handle Everything", description: "Our trained movers arrive on time at your Orleans home, protect your belongings, and move everything safely." },
    { icon: Home, title: "Enjoy Your New Home", description: "We place furniture exactly where you want it and ensure everything arrives in perfect condition." }
  ];

  const faqs = [
    {
      question: "How much do movers in Orleans charge?",
      answer: "Moving costs in Orleans typically range from $400 to $2,500 depending on the size of your home, the distance of your move, and the services you need. A standard one-bedroom apartment move within Orleans starts around $400-$600, while a larger three-bedroom house relocation ranges from $1,200 to $2,500. Prestige Moving provides completely transparent pricing with no hidden fees or surprise surcharges. Every quote includes a detailed breakdown so you know exactly what you're paying for. Contact us at (613) 600-4000 for a free, no-obligation quote."
    },
    {
      question: "What Orleans neighbourhoods do you serve?",
      answer: "Prestige Moving serves every community within Orleans and the surrounding east Ottawa area. This includes Avalon, Fallingbrook, Chapel Hill, Convent Glen, Springridge, Mer Bleue, Queenswood Heights, Hiawatha Park, Chateauneuf, Cardinal Creek, Notting Gate, Orleans Village, and all new developments in the area. We also handle moves between Orleans and other Ottawa communities like Downtown, Kanata, Barrhaven, and Nepean. Our deep familiarity with Orleans streets, condo buildings, and subdivision layouts ensures efficient, smooth moves every time."
    },
    {
      question: "Do you offer same-day moving in Orleans?",
      answer: "Yes, Prestige Moving does offer same-day and next-day moving services in Orleans when our schedule permits. While we always recommend booking 2-4 weeks in advance — especially during the busy summer season — we understand that circumstances change and sometimes you need to move quickly. Our Orleans moving teams are often available on short notice, and we'll do everything possible to accommodate your timeline. Call us at (613) 600-4000 to check current availability."
    },
    {
      question: "Are your Orleans movers insured and certified?",
      answer: "Every Prestige Moving team member is fully WSIB certified and we carry comprehensive commercial liability insurance that covers your belongings throughout the entire moving process. From the moment we begin loading at your Orleans home until the last piece of furniture is placed in your new location, every item is protected. We also offer additional valuation coverage options for high-value items such as antiques, pianos, and expensive electronics. Your complete peace of mind is our priority on every Orleans move."
    },
    {
      question: "Can you help with packing and unpacking in Orleans?",
      answer: "Absolutely. We offer full-service professional packing and unpacking for Orleans residents. Our trained team arrives with all necessary supplies — sturdy moving boxes, packing tape, bubble wrap, packing paper, and specialty wrapping for fragile items — to carefully and efficiently pack your entire home. We also offer partial packing services if you'd like to handle some rooms yourself. Our packing service is especially popular with busy families in Orleans and seniors who want a completely hands-off, stress-free moving experience."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Movers in Orleans Ottawa | Trusted Local Moving Company | Prestige</title>
        <meta name="description" content="Looking for reliable movers in Orleans? Prestige Moving serves Avalon, Fallingbrook, Chapel Hill & all Orleans communities. 350+ five-star reviews, WSIB certified, fully insured. Call (613) 600-4000." />
        <meta name="keywords" content="movers in orleans, orleans movers, moving company orleans, orleans moving services, movers orleans ottawa, residential movers orleans, affordable movers orleans, best movers orleans" />
        <link rel="canonical" href="https://prestigemoving.ca/movers-in-orleans" />
        <meta property="og:title" content="Movers in Orleans | Trusted Orleans Moving Company | Prestige" />
        <meta property="og:description" content="Orleans' most trusted movers with 350+ five-star reviews. Full-service residential and commercial moving. WSIB certified, fully insured. Free quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/movers-in-orleans" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movers in Orleans | Prestige Moving" />
        <meta name="twitter:description" content="Trusted movers serving all Orleans neighbourhoods. 350+ five-star reviews. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        {/* Hero - H1 with target keyword */}
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Professional movers in Orleans Ottawa loading furniture into a moving truck" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Trusted Movers in Orleans</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">Prestige Moving has helped thousands of Orleans families relocate with care, professionalism, and five-star service across every community in east Ottawa.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote <ArrowRight className="h-4 w-4 ml-2" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <ServiceQuoteForm defaultService="Moving" serviceName="Orleans Moving" />

        {/* Stats Bar */}
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

        {/* Main Content - H2 with keywords, 800+ words */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Orleans Residents Choose Our Movers in Orleans</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              When it comes to finding dependable <strong className="text-[#1A2332]">movers in Orleans</strong>, families and businesses across east Ottawa consistently turn to Prestige Moving. With over 350 verified five-star reviews and more than 10,000 successful relocations completed, we've built a reputation as Orleans' most trusted moving company. Whether you're upgrading from an apartment in Avalon to a larger family home in Fallingbrook, downsizing from a house in Chapel Hill, or relocating your growing business in the Orleans Town Centre area, our professionally trained team delivers a seamless, stress-free experience every time.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Orleans is one of Ottawa's largest and most vibrant suburban communities, home to over 100,000 residents across dozens of distinct neighbourhoods. From the established streets of Convent Glen and Queenswood Heights to the modern developments in Avalon and Cardinal Creek, each area presents unique moving considerations that only a local, experienced team can navigate effectively. Our <strong className="text-[#1A2332]">Orleans movers</strong> know the community inside and out — we understand which condo buildings require <a href="https://www.ottawa.ca/en/parking-roads-and-travel" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">elevator bookings and loading dock reservations</a>, which residential streets have parking restrictions during certain hours, and the most efficient routes to avoid congestion on Innes Road and St. Joseph Boulevard during peak traffic.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Complete Orleans Moving Services for Every Home</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              As a full-service moving company, Prestige Moving goes far beyond simply loading boxes onto a truck. Our <strong className="text-[#1A2332]">Orleans moving services</strong> include professional packing with high-quality materials, careful furniture disassembly and reassembly, floor and wall protection at both your old and new home, and precise placement of every item exactly where you want it. We bring a comprehensive inventory of moving blankets, specialty wrapping, dollies, and equipment to handle everything from everyday household goods to delicate items like <Link href="/services/piano-moving" className="text-[#C5A572] hover:underline">pianos</Link>, <Link href="/services/antique-moving" className="text-[#C5A572] hover:underline">antiques</Link>, and large electronics.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our fleet of company-owned trucks — not rentals — features air-ride suspension to cushion your belongings during transit, whether you're moving within Orleans or heading across the city to <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, or <Link href="/movers-in-nepean" className="text-[#C5A572] hover:underline">Nepean</Link>. Every truck is clean, well-maintained, and stocked with the tools and supplies our teams need to protect your furniture, appliances, and personal possessions throughout the entire relocation process. We also offer <Link href="/services/storage-solutions" className="text-[#C5A572] hover:underline">climate-controlled storage</Link> for Orleans residents who need a temporary solution between moves.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Serving Every Orleans Neighbourhood</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Prestige Moving proudly serves every corner of Orleans and the broader east Ottawa region. Our teams regularly work in Avalon, Fallingbrook, Chapel Hill South, Convent Glen, Springridge, Mer Bleue, Queenswood Heights, Hiawatha Park, Chateauneuf, Cardinal Creek, Notting Gate, Orleans Village, and all the new subdivisions being developed along Trim Road and Brian Coburn Boulevard. We've moved hundreds of families within these communities, and our deep local knowledge translates directly into faster, more efficient moves with fewer surprises.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              For families in Orleans, moving often means navigating busy corridors and carefully timed logistics. Our dispatchers plan every route with <a href="https://traffic.ottawa.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">Ottawa's real-time traffic conditions</a> in mind, ensuring our trucks arrive on schedule and your move stays on track. We also coordinate building access for Orleans condo and townhouse moves, handling elevator reservations, loading zone permits, and any building-specific requirements so you don't have to worry about the details.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Why Our Movers in Orleans Stand Out</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              What truly sets Prestige Moving apart from other <strong className="text-[#1A2332]">movers in Orleans</strong> is our commitment to transparency, professionalism, and genuine care. When you request a quote, you receive a detailed breakdown of every cost — there are no hidden fees, no surprise surcharges, and no last-minute additions. The price we quote is the price you pay. This honest, upfront approach is a key reason why so many Orleans families recommend us to their friends, neighbours, and colleagues.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every member of our Orleans moving team is <a href="https://www.wsib.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">WSIB certified</a> and undergoes extensive training in proper lifting techniques, furniture protection, and customer service. We carry comprehensive commercial liability insurance, and we offer additional valuation coverage for high-value items. Our satisfaction guarantee means that if anything doesn't meet your expectations, we'll make it right — no questions asked. With 350+ five-star reviews from real customers, our track record speaks for itself.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Residential and Commercial Orleans Movers You Can Trust</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Beyond <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving</Link>, Prestige Moving is also the preferred choice for <Link href="/services/commercial-moving" className="text-[#C5A572] hover:underline">commercial relocations</Link> throughout Orleans. We've helped businesses of all sizes — from small retail shops along St. Joseph Boulevard to professional offices in the Orleans Business Park — move efficiently with minimal downtime. Our commercial moving team understands the importance of getting your business back up and running quickly, and we work evenings and weekends to minimize disruption to your operations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Whether you need a straightforward apartment move, a complex family home relocation with packing services, or a commercial office move with IT equipment coordination, Prestige Moving has the experience, equipment, and dedicated team to make your Orleans move a success. Contact us today at <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a> or <a href="mailto:Ottawa@prestigemoving.ca" className="text-[#C5A572] hover:underline">Ottawa@prestigemoving.ca</a> for your free, no-obligation moving quote.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Orleans Moving Process Works</h2>
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

        {/* FAQ Accordion */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Movers in Orleans</h2>
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

        <SeoKeywordsSection currentPage="/movers-in-orleans" />

        {/* CTA */}
        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move in Orleans?</h2>
            <p className="text-white/80 text-lg mb-8">Get your free, no-obligation quote today and see why 350+ families gave us five stars.</p>
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