import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, ThumbsUp, Calendar, Package, Home, Building2, Mail, Heart } from "lucide-react";
import heroImage from "@assets/images/seo-residential-movers.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function ResidentialMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/residential-movers-ottawa",
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
      { "@type": "City", "name": "Ottawa" },
      { "@type": "City", "name": "Kanata" },
      { "@type": "City", "name": "Orleans" },
      { "@type": "City", "name": "Barrhaven" },
      { "@type": "City", "name": "Nepean" },
      { "@type": "City", "name": "Gloucester" }
    ],
    "description": "Expert residential movers in Ottawa specializing in apartments, condos, and houses. Professional packing, furniture protection, and family-friendly service. 337+ five-star reviews."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of homes do you move?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prestige Moving handles all types of residential moves in Ottawa including studio apartments, condos, townhouses, semi-detached homes, and large detached houses. We have experience with high-rise buildings, walk-ups, heritage homes, and new construction across every Ottawa neighbourhood."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer packing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer full and partial packing services. Our full-service packing includes professional packing of every item using high-quality materials. Partial packing lets you handle some rooms while our experts pack specialty items like china, artwork, and electronics. We also supply all packing materials."
        }
      },
      {
        "@type": "Question",
        "name": "How do you protect my furniture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use professional-grade furniture blankets, stretch wrap, corner protectors, and custom padding to protect every piece. We also install floor runners and doorway protectors at both locations to prevent damage to your home. Mattresses receive dedicated mattress bags, and fragile items get bubble wrap and specialty packing."
        }
      },
      {
        "@type": "Question",
        "name": "Can you disassemble and reassemble furniture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our crews are trained to disassemble and reassemble standard furniture including beds, dining tables, desks, bookshelves, and sectional sofas. We bring all necessary tools and keep track of all hardware in labelled bags to ensure everything goes back together perfectly at your new home."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle fragile items?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in handling fragile and delicate items including china, crystal, artwork, mirrors, antiques, and electronics. Each fragile item is individually wrapped using appropriate materials — bubble wrap, packing paper, foam sheets, or custom crating — and packed in dedicated boxes with clear fragile markings."
        }
      }
    ]
  };

  const stats = [
    { icon: Home, value: "5,000+", label: "Homes Moved" },
    { icon: Star, value: "5.0", label: "Star Rating" },
    { icon: Shield, value: "100%", label: "Insured" },
    { icon: Heart, value: "337+", label: "Happy Families" }
  ];

  const processSteps = [
    { icon: Phone, title: "Free Home Assessment", description: "Call (613) 600-4000 or request online. We assess your home's specific needs and provide a detailed, no-obligation quote tailored to your move." },
    { icon: Package, title: "Packing & Preparation", description: "Choose our full packing service or pack yourself — either way, we supply all materials and protect every piece of furniture with professional-grade wrapping." },
    { icon: TruckIcon, title: "Careful Moving Day", description: "Our trained residential moving crew arrives on time, handles your belongings with genuine care, and transports everything safely to your new Ottawa home." },
    { icon: Home, title: "Setup & Settle In", description: "We place furniture exactly where you want it, reassemble beds and tables, and make sure you're completely settled before we leave." }
  ];

  const faqs = [
    {
      question: "What types of homes do you move?",
      answer: "Prestige Moving handles every type of residential move across Ottawa and the surrounding region. Our experienced residential movers in Ottawa regularly move families from studio and one-bedroom apartments in Centretown and the Byward Market to spacious detached homes in Barrhaven and Kanata. We have extensive experience with high-rise condominiums — including navigating elevator bookings, loading dock schedules, and building regulations at complexes throughout Downtown Ottawa, Westboro, and Little Italy. We handle walk-up apartments in Sandy Hill and Old Ottawa South where there are no elevators and narrow staircases require specialized techniques. We move families in and out of townhomes in Orleans, Riverside South, and Findlay Creek. And we have deep experience with larger heritage homes in Rockcliffe Park, The Glebe, and New Edinburgh, where unique architectural features require extra care and attention. Whatever your home type, our residential movers in Ottawa have the expertise to handle it."
    },
    {
      question: "Do you offer packing services?",
      answer: "Yes, Prestige Moving offers comprehensive packing services designed to make your residential move in Ottawa completely stress-free. Our full-service packing option means our trained team arrives before moving day and professionally packs every item in your home using high-quality materials — boxes, bubble wrap, packing paper, foam sheets, wardrobe boxes for clothing, dish packs for kitchen items, and custom wrapping for artwork and mirrors. For families who prefer to handle some of the packing themselves, we offer a partial packing service where you pack the straightforward items like clothing and books, while our experts handle the specialty items — fine china, crystal glassware, electronics, antiques, and anything fragile or awkwardly shaped. We also sell and deliver packing supplies directly to your door anywhere in Ottawa, from Nepean to Gloucester, so you have everything you need. Our packing team works efficiently while taking the time to ensure every item is properly protected — it's this attention to detail that has earned us 337+ five-star reviews from residential customers across the city."
    },
    {
      question: "How do you protect my furniture during a residential move?",
      answer: "Furniture protection is one of the things our residential movers in Ottawa take most seriously, and our methods go far beyond the basics. Every piece of furniture that leaves your home is individually wrapped in professional-grade furniture blankets (we carry an extensive supply on every truck) and secured with stretch wrap to prevent any shifting or scratching during transit. Corner protectors are applied to all furniture with vulnerable edges — dressers, tables, desks, and entertainment centres. Mattresses and box springs are encased in dedicated mattress bags that protect against dirt, moisture, and tearing. At both your current and new home, we install protective floor runners over hardwood, tile, and carpet to prevent scuff marks and damage from heavy items. Doorway protectors pad the frames to prevent dings and scratches when navigating large furniture through tight spaces — something especially important in Ottawa's older homes in neighbourhoods like The Glebe, Old Ottawa South, and Hintonburg where doorways tend to be narrower. Our trucks feature air-ride suspension and interior tie-down systems to minimize movement during transit, ensuring your furniture arrives in the same condition it left."
    },
    {
      question: "Can you disassemble and reassemble furniture?",
      answer: "Absolutely — furniture disassembly and reassembly is a standard part of our residential moving service in Ottawa. Our crews arrive equipped with a full toolkit and the experience to efficiently break down and rebuild common household furniture including bed frames (platform beds, sleigh beds, bunk beds, and adjustable frames), dining room tables and chairs, desks and office furniture, bookshelves and wall units, sectional sofas, IKEA furniture, and entertainment centres. When disassembling furniture, we carefully bag and label all hardware — screws, bolts, cam locks, dowels — and attach them directly to the corresponding furniture piece so nothing gets lost during the move. At your new home in Kanata, Stittsville, Barrhaven, or wherever you're headed in Ottawa, our team reassembles everything to manufacturer specifications, ensuring stability and functionality. For complex or unusual furniture pieces, we take photos before disassembly to ensure accurate reassembly. This attention to detail is what sets Prestige Moving apart as the top residential movers in Ottawa."
    },
    {
      question: "Do you handle fragile items?",
      answer: "Handling fragile items with expert care is a specialty of our residential movers in Ottawa. We understand that many of your most valued possessions — grandmother's china, crystal vases, framed artwork, ornate mirrors, delicate electronics, and collectibles — require specialized handling that goes beyond standard moving practices. Each fragile item receives individual attention: fine china and glassware are wrapped piece by piece in packing paper and bubble wrap, then carefully packed in reinforced dish-pack boxes with dividers. Artwork and framed photos receive corner protectors and are wrapped in glassine paper and bubble wrap before being placed in picture boxes or custom-built crates. Flat-screen televisions are packed in original boxes when available, or in custom TV boxes with foam padding. Antiques and heirloom pieces receive custom wrapping solutions based on their specific materials and vulnerabilities. Our residential movers are trained in proper handling techniques for every type of fragile item, and we clearly mark all fragile boxes for careful handling during loading, transit, and unloading. Whether we're moving a delicate crystal collection from your Manor Park estate or a treasured art collection from your Alta Vista home, every fragile item is treated with the reverence it deserves."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Residential Movers Ottawa | Home Moving Experts | Prestige Moving</title>
        <meta name="description" content="Ottawa's expert residential movers for apartments, condos, and houses. Professional packing, furniture protection, and family-friendly service. 337+ five-star reviews. Call (613) 600-4000." />
        <meta name="keywords" content="residential movers ottawa, home movers ottawa, house movers ottawa, apartment movers ottawa, condo movers ottawa, residential moving company ottawa, home moving service ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/residential-movers-ottawa" />
        <meta property="og:title" content="Residential Movers Ottawa | Home Moving Experts | Prestige Moving" />
        <meta property="og:description" content="Expert residential movers in Ottawa specializing in apartments, condos, and houses. Professional packing, furniture protection, 337+ five-star reviews." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/residential-movers-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Residential movers in Ottawa - Prestige Moving home moving experts" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Ottawa's Expert Residential Movers</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">From cozy apartments to spacious family homes, our professional residential movers handle every detail with care. 5,000+ Ottawa homes moved and counting.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote</Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Residential Moving" />

        <section className="bg-[#1A2332] py-8">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="h-8 w-8 text-[#C5A572] mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Ottawa's Most Trusted Residential Moving Experts</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Moving to a new home is one of life's most exciting milestones — but it can also be one of the most stressful. That's where experienced residential movers in Ottawa make all the difference. At Prestige Moving, we've built our reputation as Ottawa's premier residential moving company by treating every home move with the same level of professionalism, care, and attention to detail, whether we're relocating a student from a bachelor apartment in Sandy Hill or moving a family of six from a four-bedroom home in Barrhaven. With over 5,000 successful residential moves across every Ottawa neighbourhood and 337+ verified five-star reviews, we understand that your home contains more than furniture and boxes — it holds your family's memories, treasured possessions, and the foundation of your daily life. Our residential movers in Ottawa treat everything accordingly.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What sets Prestige Moving apart from other residential movers in Ottawa is our comprehensive approach to every home move. We don't just show up with a truck — we plan, prepare, protect, and execute your move with military precision and genuine care. Our pre-move consultation ensures we understand the specific requirements of your home, from the narrow hallways of a Hintonburg rowhouse to the multiple flights of stairs in a Centretown walk-up. Our trained crews arrive with all the equipment, materials, and expertise needed to handle every item in your home safely. And our post-move setup service means we don't just dump boxes in your new home — we place furniture exactly where you want it, reassemble beds and tables, and make sure you can start living comfortably in your new space the moment we leave.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Apartment, Condo, and House Moves Across Ottawa</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every type of home presents unique moving challenges, and our residential movers in Ottawa have the expertise to handle them all. For apartment and condo moves in Ottawa's urban core — Downtown, Centretown, The Glebe, Westboro, Little Italy, and the Byward Market — we navigate building regulations with ease, coordinating elevator reservations, loading dock scheduling, and common area protection with property management ahead of time. Our crews are experts at moving through narrow corridors, tight stairwells, and compact elevators while protecting both your belongings and the building's common areas. For townhouse and semi-detached moves in communities like Orleans, Kanata, Barrhaven, and Riverside South, we manage the logistics of shared walls, attached garages, and multi-level layouts efficiently. And for larger detached homes in established neighbourhoods like Rockcliffe Park, Alta Vista, Manor Park, and The Glebe, our full-service residential moving packages handle everything from attic-to-basement packing to garage and outdoor furniture relocation.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Professional Packing and Furniture Protection</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The care we take with your belongings is what truly defines us as the best residential movers in Ottawa. Our professional packing service uses only high-quality materials — double-walled boxes, acid-free packing paper, industrial bubble wrap, foam padding, and wardrobe boxes — to ensure every item is properly protected. Our furniture protection protocol includes individual wrapping of every piece in padded furniture blankets, corner protectors on all vulnerable edges, stretch wrap to prevent blankets from shifting, and mattress bags for all beds. At both your old and new home, we lay floor runners to protect hardwood, tile, and carpet, and we pad doorways to prevent dings when navigating bulky items. Our trucks are equipped with air-ride suspension to minimize vibration during transit and interior tie-down systems that prevent any shifting or movement. This meticulous approach to protection is why our residential customers across Ottawa — from Hunt Club to Stittsville, Nepean to Gloucester — consistently leave us five-star reviews praising how their belongings arrived in perfect condition.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Family-Friendly Residential Moving Service</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We understand that residential moves in Ottawa often involve families with children, pets, and busy schedules. That's why our service is designed to minimize disruption and stress for the entire family. Our crews are friendly, respectful, and mindful of the household environment — they wear clean uniforms, use shoe covers when requested, and are always courteous and professional. We offer flexible scheduling including early-morning, evening, and weekend availability to accommodate school schedules and work commitments. For families moving within Ottawa neighbourhoods, we can often complete the move in a single day, getting you settled into your new home in Manotick, Greely, Blackburn Hamlet, or wherever your family is headed as quickly and smoothly as possible. And our transparent pricing means you know exactly what to budget, with no surprise charges adding stress to an already busy time.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Residential Moving Process Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="text-center">
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Residential Movers in Ottawa</h2>
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

        <SeoKeywordsSection currentPage="/residential-movers-ottawa" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move Into Your New Home?</h2>
            <p className="text-white/80 text-lg mb-8">Join 5,000+ Ottawa families who trusted Prestige Moving with their residential move. Get your free, no-obligation quote today.</p>
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