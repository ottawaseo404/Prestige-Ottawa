import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, ThumbsUp, Calendar, Package, Home, Building2, Mail, Heart } from "lucide-react";
import heroImage from "@assets/images/seo-local-movers.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function LocalMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/local-movers-ottawa",
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
      { "@type": "City", "name": "Gloucester" },
      { "@type": "City", "name": "Gatineau" }
    ],
    "description": "Local movers in Ottawa offering same-day moving services. Expert knowledge of every Ottawa neighbourhood. Affordable local moves with transparent pricing and full insurance."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer same-day local moves in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Prestige Moving offers same-day local moving services in Ottawa based on crew and truck availability. Our local presence and flexible scheduling allow us to accommodate urgent moves. Call (613) 600-4000 to check same-day availability."
        }
      },
      {
        "@type": "Question",
        "name": "What Ottawa neighborhoods do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve every neighborhood in Ottawa including Downtown, Kanata, Orleans, Barrhaven, Nepean, Gloucester, Westboro, The Glebe, Centretown, Hintonburg, Alta Vista, Rockcliffe Park, New Edinburgh, Sandy Hill, Vanier, Stittsville, Manotick, and the entire National Capital Region."
        }
      },
      {
        "@type": "Question",
        "name": "How are local moves in Ottawa priced?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Local moves in Ottawa are typically priced by the hour, based on the number of movers and trucks required. Factors include the volume of belongings, floor level, and distance between locations. We provide free, transparent quotes with no hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "Can you move just a few items locally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Prestige Moving handles moves of all sizes, from a single piece of furniture to an entire household. Our local moving service is perfect for small moves, furniture deliveries, and partial relocations within Ottawa."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle apartment moves in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, apartment moves are one of our specialties. Our local movers are experts at navigating elevators, narrow hallways, and building regulations. We coordinate with property managers, reserve elevators, and protect common areas throughout the move."
        }
      }
    ]
  };

  const stats = [
    { icon: MapPin, value: "40+", label: "Ottawa Neighbourhoods" },
    { icon: Clock, value: "Same-Day", label: "Service Available" },
    { icon: Star, value: "337+", label: "Five-Star Reviews" },
    { icon: TruckIcon, value: "10,000+", label: "Local Moves Done" }
  ];

  const processSteps = [
    { icon: Phone, title: "Quick Quote", description: "Tell us about your local move and get an instant, transparent price — often within minutes of your call." },
    { icon: Calendar, title: "Flexible Scheduling", description: "Choose a time that works for you — including same-day, weekends, and evening moves across Ottawa." },
    { icon: TruckIcon, title: "Fast Local Service", description: "Our local movers know every Ottawa route and neighbourhood, ensuring the fastest, most efficient move possible." },
    { icon: Home, title: "Settled In No Time", description: "We place everything exactly where you want it and make sure you're completely satisfied before we leave." }
  ];

  const faqs = [
    {
      question: "Do you offer same-day local moves in Ottawa?",
      answer: "Yes, Prestige Moving offers same-day local moving services throughout Ottawa, subject to crew and truck availability. Our established presence in the Ottawa area means we often have teams positioned throughout the city, allowing us to mobilize quickly for urgent or last-minute local moves. Whether you need to relocate across the street in Westboro or across town from Downtown to Barrhaven, our team can frequently accommodate same-day requests. Call us directly at (613) 600-4000 to check current availability, and we'll do everything possible to get you moved on your timeline."
    },
    {
      question: "What Ottawa neighbourhoods do you serve for local moves?",
      answer: "Prestige Moving serves every single neighbourhood in Ottawa and the surrounding National Capital Region for local moves. Our coverage includes Downtown Ottawa, Centretown, The Glebe, Old Ottawa South, Old Ottawa East, Westboro, Hintonburg, Mechanicsville, Little Italy, Chinatown, Sandy Hill, Lowertown, Byward Market, New Edinburgh, Rockcliffe Park, Vanier, Overbrook, Alta Vista, Hunt Club, Greenboro, South Keys, Barrhaven, Riverside South, Manotick, Kanata, Stittsville, Nepean, Bells Corners, Orleans, Chapel Hill, Fallingbrook, Avalon, Gloucester, Blackburn Hamlet, Cumberland, and many more. We also handle local moves between Ottawa and Gatineau across the river."
    },
    {
      question: "How are local moves in Ottawa priced?",
      answer: "Local moves in Ottawa are typically priced on an hourly basis, which includes the number of movers assigned to your job and the truck(s) required. The hourly rate covers labour, the truck, fuel, all equipment (dollies, blankets, straps, floor protection), and basic insurance coverage. Factors that influence pricing include the volume and weight of your belongings, the floor level of your current and new home (stairs vs. elevator), any particularly heavy or specialty items, and the distance between your two locations. Prestige Moving provides free, detailed quotes upfront with no hidden fees — the price we quote is the price you pay. Contact us for a personalized estimate for your local Ottawa move."
    },
    {
      question: "Can you move just a few items locally in Ottawa?",
      answer: "Absolutely. Prestige Moving is happy to handle local moves of any size within Ottawa, from a single piece of heavy furniture to a partial room relocation. Our small local move service is perfect for transporting that couch you bought on Marketplace from Kanata to your apartment in Centretown, delivering a new dining table from a furniture store in Orleans, moving a few items between storage and your home in The Glebe, or relocating a home office setup within Ottawa. We don't have minimum size requirements for local moves, so whether you need one item or one hundred items moved, our team is ready to help."
    },
    {
      question: "Do you handle apartment moves in Ottawa?",
      answer: "Apartment moves are one of our core specialties as local movers in Ottawa. Our experienced crews have moved thousands of apartment and condo residents throughout the city — from high-rise buildings along the Rideau Canal and in Centretown, to walk-up apartments in Sandy Hill and Hintonburg, to modern condominiums in Kanata and Barrhaven. Our local movers coordinate elevator reservations with building management, lay down floor protection in hallways and common areas, navigate narrow staircases with care, comply with all building rules regarding move-in/move-out times and loading dock usage, and protect walls and door frames throughout the process. We understand the unique challenges of apartment moves in Ottawa, and our expertise ensures a smooth experience for you and your building community."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Local Movers Ottawa | Same-Day Moving Services | Prestige Moving</title>
        <meta name="description" content="Need local movers in Ottawa? Prestige Moving offers same-day local moving services across 40+ Ottawa neighbourhoods. Affordable, fast, and reliable with 337+ five-star reviews. Call (613) 600-4000." />
        <meta name="keywords" content="local movers ottawa, local moving company ottawa, same day movers ottawa, ottawa local movers, affordable local movers ottawa, neighbourhood movers ottawa, short distance movers ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/local-movers-ottawa" />
        <meta property="og:title" content="Local Movers Ottawa | Same-Day Moving Services | Prestige Moving" />
        <meta property="og:description" content="Ottawa's trusted local movers serving 40+ neighbourhoods. Same-day service available. Affordable rates, transparent pricing, 337+ five-star reviews." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/local-movers-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Local movers in Ottawa loading furniture into a Prestige Moving truck" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Your Trusted Local Movers in Ottawa</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">Same-day availability, neighbourhood expertise, and the five-star service that's made us Ottawa's favourite local moving team.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote</Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Local Moving" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Choose Local Movers Who Know Ottawa Inside and Out</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              When you're moving within Ottawa, hiring local movers who truly know the city makes all the difference. Prestige Moving isn't just a moving company that happens to operate in Ottawa — we're deeply embedded in this community, with intimate knowledge of every neighbourhood, route, and building that shapes how local moves unfold. Our local movers know that moving out of a third-floor walk-up in Sandy Hill requires different preparation than a ground-level townhouse in Barrhaven. They know which streets in Centretown have parking restrictions on specific days, which high-rises in Downtown Ottawa require loading dock reservations 48 hours in advance, and which routes through Kanata avoid the worst congestion during rush hour. This local expertise translates directly into faster, smoother, and more efficient moves for you.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              As Ottawa's most trusted local movers, we've built our reputation one neighbourhood at a time. With over 10,000 successful local moves and 337+ five-star reviews, families across every corner of the city — from the charming shops of Westboro and the heritage character of The Glebe, to the growing communities of Riverside South and the established suburbs of Nepean and Gloucester — have trusted us with their most important belongings. Our local movers understand that a short-distance move deserves the same level of care, protection, and professionalism as a long-distance relocation. Whether you're moving one block or across town, your belongings receive our full attention and protection.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Same-Day Local Moving When You Need It Most</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Life doesn't always give you advance notice, and sometimes you need local movers in Ottawa who can respond quickly. Prestige Moving offers same-day local moving services for those urgent situations — a sudden lease termination, an unexpected closing date change, or simply the decision that today is the day you want to be in your new home. Because we maintain a fleet of trucks and crews positioned throughout Ottawa, we can often deploy a team within hours of your call. Our same-day local moving service includes the same professional standards our customers expect: uniformed, background-checked movers, proper equipment, furniture protection, and transparent hourly pricing with no surprise fees.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Even for planned local moves, our neighbourhood expertise ensures maximum efficiency. Our local movers know the fastest routes between any two points in Ottawa, accounting for traffic patterns, construction zones, and seasonal road conditions. Moving from Hintonburg to Alta Vista? We know to avoid the Queensway during morning rush and take the scenic route through the canal area. Relocating from Orleans to Kanata? Our team plans the optimal highway route and timing to minimize transit time. This route knowledge, combined with efficient loading techniques perfected over thousands of local moves, means your belongings spend less time on the truck and more time safely in your new home.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Neighbourhood-Specific Expertise Across Ottawa</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every Ottawa neighbourhood presents unique moving challenges, and our local movers have the experience to handle them all. In the historic Glebe, we navigate century-old homes with narrow staircases and heritage features that require extra protection. In Downtown Ottawa's high-rise condos along Queen Street and Slater Street, we coordinate elevator access, manage loading dock schedules, and protect marble lobbies. In Kanata's modern subdivisions, we efficiently manage moves in newer homes with open floor plans and attached garages. In Orleans, our crews are familiar with the mix of townhouses, semi-detached homes, and single-family properties that characterize the area. In Westboro and Hintonburg, we handle the unique blend of renovated character homes and new infill construction with equal expertise.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our local movers also serve Ottawa's growing communities with the same dedication. Barrhaven's rapidly expanding neighbourhoods, Riverside South's new developments, Stittsville's family-friendly suburbs, and Manotick's rural-suburban blend all receive personalized service from our experienced teams. We understand the building codes, parking regulations, and community expectations in each area, ensuring your move is smooth and respectful of your neighbours and community. For moves between Ottawa and Gatineau, our local movers handle the interprovincial considerations seamlessly, making cross-river relocations as simple as moving down the street.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Community Roots and Local Commitment</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Prestige Moving isn't just a local moving company — we're active members of the Ottawa community. Our team lives, shops, and raises families in the same neighbourhoods we serve. This personal connection to Ottawa drives our commitment to providing the highest quality local moving service possible. We support local charities, participate in community events, and contribute to making Ottawa a better place to live. When you hire our local movers, you're not just getting professional moving service — you're supporting a local business that reinvests in the community you call home. That's a significant difference from national chains that send crews from out of town who may not know a single Ottawa street name.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Local Moving Process Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Local Moving in Ottawa</h2>
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

        <SeoKeywordsSection currentPage="/local-movers-ottawa" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for a Stress-Free Local Move?</h2>
            <p className="text-white/80 text-lg mb-8">Get your free quote from Ottawa's most trusted local movers. Same-day service available.</p>
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