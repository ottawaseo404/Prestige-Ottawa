import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, ThumbsUp, Calendar, Package, Home, Building2, Mail, Heart } from "lucide-react";
import heroImage from "@assets/images/seo-moving-company-ottawa.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function MovingCompanyOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/moving-company-ottawa",
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
      { "@type": "City", "name": "Ottawa" },
      { "@type": "City", "name": "Kanata" },
      { "@type": "City", "name": "Orleans" },
      { "@type": "City", "name": "Barrhaven" },
      { "@type": "City", "name": "Nepean" },
      { "@type": "City", "name": "Gloucester" }
    ],
    "description": "Ottawa's premier full-service moving company. Residential, commercial, and long-distance moving. WSIB certified with transparent pricing and 350+ five-star reviews."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does your moving company offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prestige Moving Ottawa offers comprehensive moving services including residential moving, commercial and office relocations, long-distance moves, professional packing and unpacking, specialty item moving (pianos, antiques, pool tables), storage solutions, senior moving, student moving, and military PCS moves. We provide complete end-to-end relocation solutions."
        }
      },
      {
        "@type": "Question",
        "name": "How long has your moving company been operating in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prestige Moving has been serving Ottawa and the National Capital Region with professional moving services for years, completing over 10,000 successful moves. Our experienced team has built deep expertise in navigating Ottawa's unique neighborhoods, building requirements, and seasonal moving challenges."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide packing materials?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Prestige Moving provides all necessary packing materials including boxes of various sizes, bubble wrap, packing paper, tape, wardrobe boxes, and specialty crating for fragile items. We also offer complete professional packing services where our trained team handles all packing for you."
        }
      },
      {
        "@type": "Question",
        "name": "Can your moving company handle last-minute moves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we understand that moves sometimes need to happen quickly. While we recommend booking 2-4 weeks in advance, our moving company accommodates last-minute and emergency moves in Ottawa based on availability. Call us at (613) 600-4000 to discuss your timeline."
        }
      },
      {
        "@type": "Question",
        "name": "What sets your moving company apart from others in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prestige Moving stands out through our combination of WSIB certification, full insurance coverage, 350+ five-star reviews, transparent pricing with no hidden fees, professionally trained crews, modern equipment, and a satisfaction guarantee. We treat every move with the same level of care regardless of size."
        }
      }
    ]
  };

  const stats = [
    { icon: Award, value: "350+", label: "Five-Star Reviews" },
    { icon: Users, value: "50+", label: "Expert Team Members" },
    { icon: TruckIcon, value: "10,000+", label: "Moves Completed" },
    { icon: CheckCircle2, value: "100%", label: "Satisfaction Rate" }
  ];

  const processSteps = [
    { icon: Mail, title: "Get Your Free Quote", description: "Tell us about your move and receive a detailed, transparent quote with no hidden fees or surprise charges." },
    { icon: Calendar, title: "Book Your Date", description: "Choose from flexible scheduling options including weekends and evenings to fit your timeline perfectly." },
    { icon: Package, title: "We Pack & Move", description: "Our trained crew arrives on time with all the equipment needed to protect and transport your belongings safely." },
    { icon: Heart, title: "Settle Into Your New Space", description: "We place everything exactly where you want it and ensure complete satisfaction before we leave." }
  ];

  const faqs = [
    {
      question: "What services does your moving company offer?",
      answer: "Prestige Moving Ottawa is a full-service moving company offering a comprehensive range of relocation solutions. Our services include residential moving for apartments, condos, and houses of all sizes; commercial and office relocations with minimal business disruption; long-distance and interprovincial moves; professional packing and unpacking services; specialty item moving for pianos, antiques, pool tables, and gym equipment; climate-controlled storage solutions; senior moving with compassionate support; student moving at affordable rates; and military PCS moves. Every service includes WSIB-certified movers and full insurance coverage."
    },
    {
      question: "How long has your moving company been operating in Ottawa?",
      answer: "Prestige Moving has been proudly serving Ottawa and the entire National Capital Region with professional moving services for years, completing over 10,000 successful relocations. Our moving company has built deep expertise in navigating Ottawa's diverse neighborhoods — from the heritage homes of The Glebe and Rockcliffe Park to the modern condominiums of Downtown and the family communities of Barrhaven and Kanata. This extensive local experience allows us to anticipate challenges and deliver efficient, worry-free moves every time."
    },
    {
      question: "Do you provide packing materials?",
      answer: "Yes, our moving company provides all the packing materials you could need for a successful move. This includes sturdy moving boxes in various sizes (small, medium, large, and extra-large), bubble wrap for fragile items, packing paper, high-quality tape, wardrobe boxes for hanging clothes, mattress covers, furniture blankets, and specialty crating for artwork and mirrors. We also offer complete professional packing services where our trained team handles every aspect of packing your home or office, saving you time and ensuring maximum protection for your belongings."
    },
    {
      question: "Can your moving company handle last-minute moves?",
      answer: "Absolutely. While we recommend booking 2-4 weeks in advance for the best availability, our moving company understands that life doesn't always follow a plan. Prestige Moving accommodates last-minute, same-week, and even emergency moves in Ottawa based on crew and truck availability. Our flexible scheduling and experienced team allow us to mobilize quickly when you need us most. Call us directly at (613) 600-4000 to discuss your timeline, and we'll do everything possible to make your last-minute move happen smoothly."
    },
    {
      question: "What sets your moving company apart from others in Ottawa?",
      answer: "Several factors distinguish Prestige Moving as Ottawa's premier moving company. First, our WSIB certification and comprehensive insurance coverage give you complete peace of mind. Second, our 350+ verified five-star reviews reflect genuine customer satisfaction built over thousands of moves. Third, our transparent pricing model means no hidden fees, surprise surcharges, or bait-and-switch tactics — the quote you receive is the price you pay. Fourth, every crew member undergoes professional training in safe lifting techniques, furniture protection, and customer service. Finally, our modern fleet with air-ride suspension and complete equipment ensures your belongings arrive in perfect condition."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Moving Company Ottawa | Full-Service Movers | Prestige Moving</title>
        <meta name="description" content="Looking for a reliable moving company in Ottawa? Prestige Moving offers full-service residential & commercial moving with 350+ five-star reviews. WSIB certified, transparent pricing. Call (613) 600-4000." />
        <meta name="keywords" content="moving company ottawa, ottawa moving company, moving companies ottawa, full service movers ottawa, best moving company ottawa, moving services ottawa, relocation company ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-company-ottawa" />
        <meta property="og:title" content="Moving Company Ottawa | Full-Service Movers | Prestige Moving" />
        <meta property="og:description" content="Ottawa's premier full-service moving company. Residential, commercial, and long-distance moving with 350+ five-star reviews. Get your free quote today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/moving-company-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Prestige Moving company trucks ready for service in Ottawa" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Ottawa's Premier Full-Service Moving Company</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">From residential relocations to complex commercial moves, Prestige Moving delivers the complete moving experience Ottawa trusts.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote</Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Full-Service Moving" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">What Makes a Great Moving Company in Ottawa?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Finding the right moving company in Ottawa requires more than a quick internet search. A truly great moving company combines professional expertise, reliable equipment, comprehensive insurance, and genuine care for your belongings into a seamless relocation experience. At Prestige Moving, we've spent years building our reputation as Ottawa's most trusted moving company by focusing on exactly these qualities. With over 10,000 successful moves and 350+ five-star reviews, our track record speaks for itself — but it's the personal attention and dedication our team brings to every single job that truly sets us apart from other moving companies in Ottawa.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What separates a mediocre moving company from an exceptional one comes down to the details. Does the company show up on time? Do the movers treat your grandmother's china cabinet with the same care they'd give their own? Is the final bill the same as the quote? At Prestige Moving, the answer to all of these questions is a resounding yes. Our moving company was founded on the principle that every Ottawa family deserves a moving experience that's stress-free, transparent, and professional from start to finish. That commitment is woven into every aspect of our operations, from the initial phone call to the final piece of furniture placed in your new home.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Full-Service Capabilities for Every Type of Move</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              As Ottawa's premier full-service moving company, Prestige Moving handles every aspect of your relocation so you don't have to. Our comprehensive service offerings cover the entire spectrum of moving needs: residential moves for apartments, condos, townhouses, and single-family homes throughout Kanata, Orleans, Barrhaven, Nepean, Gloucester, Westboro, The Glebe, and every other Ottawa neighbourhood; commercial and office relocations designed to minimize business downtime; long-distance and interprovincial moves with careful planning and coordination; professional packing services using premium materials and proven techniques; and specialty item transport for pianos, antiques, artwork, pool tables, hot tubs, and other challenging items.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our moving company also offers flexible storage solutions for customers who need temporary holding between move-out and move-in dates. Whether you need a few days or several months, our secure, climate-controlled facilities keep your belongings safe. Additionally, we provide specialized moving services for seniors who need extra support during their transition, students on tight budgets moving to or from Ottawa's universities, and military personnel handling PCS relocations. No matter how complex or simple your move, our team has the experience and resources to deliver a flawless result.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Our Team: The Heart of Our Moving Company</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Behind every successful move is a team of dedicated professionals, and at Prestige Moving, our people are our greatest asset. Every mover on our team is carefully selected, background-checked, and put through an intensive training program that covers proper lifting biomechanics, furniture disassembly and reassembly, fragile item handling, floor and wall protection techniques, and exceptional customer communication. We don't hire day labourers or temporary workers — our moving company relies on a consistent, experienced crew that takes genuine pride in their craft and in representing the Prestige Moving name throughout Ottawa.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our team's expertise extends beyond physical moving skills. They understand the unique challenges of Ottawa's diverse housing stock, from navigating narrow staircases in century-old Centretown walk-ups to coordinating elevator access in modern high-rise condominiums along the Rideau Canal. They know which buildings in Downtown Ottawa require loading dock reservations, which streets in Hintonburg have tight parking restrictions, and how to efficiently manage moves in the challenging winter months that are unique to Ottawa's climate. This local knowledge, combined with professional training and a genuine passion for helping people, is what makes our moving company the clear choice for Ottawa residents.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Transparent Pricing with No Hidden Fees</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              One of the most common complaints about moving companies is unexpected charges that appear on the final bill. At Prestige Moving, we've eliminated this problem entirely with our transparent pricing model. When our estimator provides your quote — whether by phone, email, or through our online form — that price includes everything: labour, truck, fuel, equipment, moving blankets, basic insurance coverage, and all applicable taxes. There are no fuel surcharges, stair fees, long-carry charges, or any other hidden costs that inflate your bill after the work is done. Our moving company believes in earning your trust through honesty, and transparent pricing is a cornerstone of that commitment.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Moving Company Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions</h2>
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

        <SeoKeywordsSection currentPage="/moving-company-ottawa" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience Ottawa's Best Moving Company?</h2>
            <p className="text-white/80 text-lg mb-8">Get your free, no-obligation quote and see why thousands of Ottawa families choose Prestige Moving.</p>
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