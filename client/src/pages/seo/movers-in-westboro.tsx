import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, Calendar, Package, Home, Building2 } from "lucide-react";
import heroImage from "@assets/images/seo-movers-westboro.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function MoversInWestboro() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving - Westboro Movers",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/movers-in-westboro",
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
      { "@type": "Place", "name": "Westboro, Ottawa" },
      { "@type": "Place", "name": "Westboro Village" },
      { "@type": "Place", "name": "Hintonburg" },
      { "@type": "Place", "name": "Mechanicsville" },
      { "@type": "Place", "name": "Island Park" },
      { "@type": "Place", "name": "Tunney's Pasture" },
      { "@type": "Place", "name": "Kitchissippi" }
    ],
    "description": "Top-rated movers in Westboro, Ottawa. Serving Westboro Village, Hintonburg, Mechanicsville, Island Park, Tunney's Pasture, Kitchissippi and all Westboro communities. WSIB certified, 350+ five-star reviews."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do movers in Westboro cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Westboro moving costs range from $400 to $2,500 depending on home size, distance, and services required. Condo moves start around $400-$700, while heritage home relocations range from $1,200 to $2,500+. Prestige Moving offers transparent pricing with no hidden fees. Call (613) 600-4000 for your free quote."
        }
      },
      {
        "@type": "Question",
        "name": "Can your movers handle heritage homes in Westboro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our Westboro moving team has extensive experience with heritage homes that feature narrow staircases, tight doorways, and unique architectural details. We use specialized equipment and protective materials to ensure your belongings and the home itself are protected throughout the move."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer condo moving services in Westboro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in condo moves throughout Westboro and Hintonburg. We handle elevator bookings, loading dock reservations, and coordinate with building management to ensure a smooth, efficient move that complies with all building rules and regulations."
        }
      },
      {
        "@type": "Question",
        "name": "Are your Westboro movers insured and WSIB certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every Prestige Moving team member is fully WSIB certified, and we carry comprehensive commercial liability insurance. Your belongings are protected throughout the entire moving process. We also offer additional valuation coverage for high-value items like antiques and artwork."
        }
      },
      {
        "@type": "Question",
        "name": "What areas near Westboro do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all Westboro and Kitchissippi ward communities including Westboro Village, Hintonburg, Mechanicsville, Island Park, Tunney's Pasture, and surrounding areas. We also move between Westboro and all other Ottawa communities including Kanata, Orleans, Barrhaven, and Nepean."
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
    { icon: Phone, title: "Request a Quote", description: "Call us at (613) 600-4000 or fill out our online form for a free estimate tailored to your Westboro move." },
    { icon: Calendar, title: "Schedule Your Move", description: "Choose a date that works best. We offer flexible scheduling including weekends and evenings across Westboro." },
    { icon: TruckIcon, title: "We Handle Everything", description: "Our trained Westboro movers arrive punctually, protect your belongings, and transport everything safely." },
    { icon: Home, title: "Settle Into Your New Home", description: "We place every piece of furniture exactly where you want it, ensuring a smooth transition." }
  ];

  const faqs = [
    {
      question: "How much do movers in Westboro cost?",
      answer: "Moving costs in Westboro typically range from $400 to $2,500 depending on the size and type of your home, the distance of your move, and the services you need. Condo moves in Westboro start around $400-$700, while larger heritage home relocations — which often require extra care for narrow staircases and period features — range from $1,200 to $2,500 or more. Prestige Moving provides detailed, transparent quotes with no hidden fees. Every line item is explained so you know exactly what you're paying for. Call us at (613) 600-4000 for a free, personalized quote."
    },
    {
      question: "Can your movers handle heritage homes in Westboro?",
      answer: "Absolutely. Westboro is renowned for its beautiful heritage homes, many dating back to the early 1900s. These charming properties often feature narrow staircases, tight doorways, original hardwood floors, and unique architectural details that require specialized moving expertise. Our Westboro moving team has extensive experience navigating these challenges. We use custom-built furniture sliders, corner protectors, floor runners, and banister guards to ensure both your belongings and the heritage features of your home are fully protected throughout the move."
    },
    {
      question: "Do you offer condo moving services in Westboro?",
      answer: "Yes, condo moves are one of our specialties in the Westboro and Hintonburg area. The neighbourhood has seen significant condo development in recent years, and each building has its own rules regarding elevator reservations, loading dock schedules, and move-in procedures. Our dispatchers coordinate all of these details with building management before your move day, ensuring everything runs smoothly and on schedule. We also handle all the logistics of parking our trucks in compliance with city bylaws on the busy streets of Westboro Village."
    },
    {
      question: "Are your Westboro movers insured and WSIB certified?",
      answer: "Every single team member at Prestige Moving is fully WSIB (Workplace Safety and Insurance Board) certified, and we carry comprehensive commercial liability insurance that protects your belongings from the moment we begin loading at your Westboro home until the last item is placed in your new location. We also offer additional valuation coverage options for high-value possessions such as antiques, artwork, musical instruments, and expensive electronics. Hiring WSIB-certified movers protects both you and our team throughout the moving process."
    },
    {
      question: "What areas near Westboro do you serve?",
      answer: "Prestige Moving serves all communities within the Westboro and Kitchissippi ward, including Westboro Village, Hintonburg, Mechanicsville, Island Park, Tunney's Pasture, and all surrounding areas. We also handle moves between Westboro and every other Ottawa community — from nearby neighbourhoods like Centretown and the Glebe to suburban communities like Kanata, Orleans, Barrhaven, and Nepean. Our deep familiarity with Westboro's unique streetscapes, parking restrictions, and building access requirements ensures every move is handled efficiently and professionally."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Movers in Westboro Ottawa | Top-Rated Moving Company | Prestige</title>
        <meta name="description" content="Need movers in Westboro? Prestige Moving serves Westboro Village, Hintonburg, Mechanicsville & all Kitchissippi areas. 350+ five-star reviews, WSIB certified. Call (613) 600-4000 for a free quote." />
        <meta name="keywords" content="movers in westboro, westboro movers, moving company westboro, westboro moving services, movers westboro ottawa, residential movers westboro, condo movers westboro, heritage home movers westboro" />
        <link rel="canonical" href="https://prestigemoving.ca/movers-in-westboro" />
        <meta property="og:title" content="Movers in Westboro | Top-Rated Westboro Moving Company | Prestige" />
        <meta property="og:description" content="Westboro's most trusted movers. Heritage homes, condos, full-service moving. WSIB certified, fully insured, 350+ reviews. Free quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/movers-in-westboro" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movers in Westboro | Prestige Moving" />
        <meta name="twitter:description" content="Trusted movers serving all Westboro neighbourhoods. 350+ five-star reviews. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Professional movers in Westboro Ottawa helping with a heritage home relocation" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Top-Rated Movers in Westboro</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">From heritage homes to modern condos, Prestige Moving is Westboro's most trusted moving company with five-star service and transparent pricing.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote <ArrowRight className="h-4 w-4 ml-2" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Westboro Moving" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Westboro Residents Choose Our Movers in Westboro</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Westboro is one of Ottawa's most vibrant and desirable urban neighbourhoods, known for its trendy shops along Richmond Road, beautiful Westboro Beach on the Ottawa River, charming heritage homes, and a thriving arts and food scene. Finding dependable <strong className="text-[#1A2332]">movers in Westboro</strong> means partnering with a team that understands the unique character of this community — from navigating narrow residential streets lined with mature trees to carefully moving furniture through the tight doorways of century-old homes. Prestige Moving has earned 350+ five-star reviews by delivering exactly this kind of thoughtful, expert service to Westboro families.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What makes Prestige Moving the preferred choice for <strong className="text-[#1A2332]">Westboro movers</strong> is our ability to handle the neighbourhood's diverse housing stock with equal expertise. Whether you're moving out of a modern condo near Tunney's Pasture, relocating from a heritage home in Westboro Village, or transitioning between apartments in Hintonburg, our professionally trained team brings the right equipment, techniques, and local knowledge to ensure a seamless experience. We understand which buildings require <a href="https://www.ottawa.ca/en/parking-roads-and-travel" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">elevator reservations and loading dock bookings</a>, and we coordinate all logistics with building management before your move day.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Heritage Home and Condo Specialists in Westboro</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Westboro's architectural diversity is one of its greatest charms — and one of the reasons you need experienced movers who can adapt to any situation. Our <strong className="text-[#1A2332]">Westboro moving team</strong> has extensive experience with heritage homes that feature original hardwood floors, narrow staircases, and period details that require extra care. We use custom floor runners, corner protectors, banister guards, and furniture sliders specifically designed to protect both your belongings and the character of your home. For <Link href="/services/piano-moving" className="text-[#C5A572] hover:underline">piano moving</Link> in Westboro's heritage homes, our specialized crew uses hydraulic equipment and custom crating to navigate even the tightest spaces safely.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              For Westboro's growing number of condo residents, we offer streamlined condo moving services that include coordinating with building management, booking freight elevators, arranging loading zone access, and ensuring compliance with all building-specific move-in requirements. Our fleet of company-owned trucks features air-ride suspension, and every vehicle is stocked with professional <Link href="/services/packing-services" className="text-[#C5A572] hover:underline">packing materials</Link>, moving blankets, and specialty equipment. We also provide <Link href="/services/storage-solutions" className="text-[#C5A572] hover:underline">climate-controlled storage</Link> for Westboro residents between moves.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Serving Every Westboro and Kitchissippi Neighbourhood</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Prestige Moving proudly serves every corner of the Westboro and Kitchissippi ward. Our teams regularly work in Westboro Village, Hintonburg, Mechanicsville, Island Park, Tunney's Pasture, and the broader Kitchissippi area. We've moved hundreds of families within these communities, and our deep local knowledge — from the best times to navigate Richmond Road to the parking nuances near Westboro Beach — translates directly into faster, more efficient moves with fewer surprises.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Whether you're moving within Westboro or relocating to another Ottawa community like <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link>, or <Link href="/movers-in-nepean" className="text-[#C5A572] hover:underline">Nepean</Link>, our team plans the most efficient routes and handles all the logistics so you can focus on settling into your new home. For <Link href="/services/antique-moving" className="text-[#C5A572] hover:underline">antique</Link> and <Link href="/services/specialty-item-moving" className="text-[#C5A572] hover:underline">specialty item moving</Link>, our dedicated crews provide custom crating and white-glove handling.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Transparent Pricing from Westboro's Most Trusted Movers</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Prestige Moving, we believe you deserve to know exactly what your Westboro move will cost before we lift a single box. Our detailed quotes break down every cost clearly — labour, truck, materials, travel time — with absolutely no hidden fees. This transparent approach has made us one of the most recommended moving companies in the Westboro and Kitchissippi area. When you call us at <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a>, you'll speak with a knowledgeable team member who can provide a quick estimate or schedule an in-home assessment.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every Prestige Moving team member is <a href="https://www.wsib.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">WSIB certified</a> and fully insured, giving you complete peace of mind throughout your Westboro move. We also offer <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving</Link>, <Link href="/services/commercial-moving" className="text-[#C5A572] hover:underline">commercial relocations</Link>, <Link href="/services/senior-moving" className="text-[#C5A572] hover:underline">senior moves</Link>, and <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">long-distance relocations</Link>. Contact us at <a href="mailto:Ottawa@prestigemoving.ca" className="text-[#C5A572] hover:underline">Ottawa@prestigemoving.ca</a> for your free, no-obligation moving quote.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Westboro Moving Process Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Movers in Westboro</h2>
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

        <SeoKeywordsSection currentPage="/movers-in-westboro" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move in Westboro?</h2>
            <p className="text-white/80 text-lg mb-8">Get your free, no-obligation quote today and discover why 350+ families trust Prestige Moving.</p>
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
