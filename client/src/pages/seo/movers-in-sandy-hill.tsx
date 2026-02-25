import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, Calendar, Home, Building2 } from "lucide-react";
import heroImage from "@assets/images/seo-movers-in-ottawa-team.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function MoversInSandyHill() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving - Sandy Hill Movers Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/movers-in-sandy-hill",
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
      "reviewCount": "349"
    },
    "areaServed": [
      { "@type": "Place", "name": "Sandy Hill, Ottawa" },
      { "@type": "Place", "name": "Lower Sandy Hill" },
      { "@type": "Place", "name": "Strathcona Park" },
      { "@type": "Place", "name": "University of Ottawa Area" },
      { "@type": "Place", "name": "Old Ottawa East" },
      { "@type": "Place", "name": "Lowertown" },
      { "@type": "Place", "name": "Byward Market" }
    ],
    "description": "Top-rated movers in Sandy Hill Ottawa. Serving students, families, and professionals in Sandy Hill, Strathcona Park, uOttawa area, Old Ottawa East and surrounding neighbourhoods. WSIB certified, 349+ five-star reviews. Free quotes — (613) 600-4000."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do movers in Sandy Hill Ottawa cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sandy Hill moving costs typically range from $350 to $2,200 depending on home size, floors, elevator access, and services needed. Apartment and student moves in Sandy Hill start around $350–$600 for a 1-bedroom, while larger Victorian home moves can range from $1,000 to $2,200+. Prestige Moving offers transparent, all-inclusive pricing with no hidden fees. Call (613) 600-4000 for a free quote."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer student moving services in Sandy Hill near uOttawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — student moving is one of our specialties in Sandy Hill. We understand the urgency of end-of-lease deadlines, tight budgets, and the challenge of navigating Sandy Hill's older apartment buildings and walk-up units. We offer flexible scheduling to work around uOttawa semester and exam schedules, and our student-friendly rates include transparent hourly pricing with no surprise fees."
        }
      },
      {
        "@type": "Question",
        "name": "Can you move furniture in Sandy Hill's older Victorian homes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Sandy Hill's Victorian and Edwardian homes often feature narrow staircases, high ceilings, awkward doorframes, and delicate original hardwood floors. Our Sandy Hill moving team is trained specifically for these challenges. We use professional floor runners, corner guards, furniture sliders, and stair-climbing dollies to protect your home and belongings. We've successfully moved hundreds of large pieces through Sandy Hill's most challenging older homes."
        }
      },
      {
        "@type": "Question",
        "name": "Are your Sandy Hill movers insured and WSIB certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every Prestige Moving team member is fully WSIB (Workplace Safety and Insurance Board) certified and we carry comprehensive commercial liability insurance. Your belongings are protected from the moment we begin loading to when the last box is placed in your new home. We also offer additional valuation coverage for high-value items including antiques, art, electronics, and musical instruments."
        }
      },
      {
        "@type": "Question",
        "name": "What Sandy Hill streets and areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all Sandy Hill streets including Laurier Avenue East, Nelson Street, Daly Avenue, Sweetland Avenue, Henderson Avenue, Chapel Street, Templeton Street, and Osgoode Street. We also serve adjacent areas including Old Ottawa East, Strathcona Park, Lowertown, Byward Market, and the uOttawa campus area. We move between Sandy Hill and all other Ottawa communities including Centretown, Westboro, Kanata, Barrhaven, Orleans and Nepean."
        }
      }
    ]
  };

  const stats = [
    { icon: Star, value: "349+", label: "Five-Star Reviews" },
    { icon: TruckIcon, value: "10,000+", label: "Successful Moves" },
    { icon: Clock, value: "24hr", label: "Quote Response" },
    { icon: Shield, value: "100%", label: "Fully Insured" }
  ];

  const processSteps = [
    { icon: Phone, title: "Request a Quote", description: "Call (613) 600-4000 or fill out our online form. We'll provide a free, detailed estimate for your Sandy Hill move within 24 hours." },
    { icon: Calendar, title: "Schedule Your Move", description: "Pick a date that works for you — including weekends and evenings. We work around uOttawa schedules and lease deadlines." },
    { icon: TruckIcon, title: "We Handle Everything", description: "Our trained Sandy Hill movers arrive on time, fully equipped with blankets, straps, dollies, and protective materials." },
    { icon: Home, title: "Settle Into Your New Home", description: "We place every item exactly where you want it and reassemble furniture, so you can enjoy your new home right away." }
  ];

  const faqs = [
    {
      question: "How much do movers in Sandy Hill Ottawa cost?",
      answer: "Sandy Hill moving costs typically range from $350 to $2,200 depending on home size, floor level, elevator access, and services required. Student apartment moves and bachelor units in Sandy Hill start around $350–$600, while 2-bedroom apartment moves run $600–$1,000. Larger Victorian or semi-detached home relocations — which often require extra manpower and equipment for narrow staircases and high-ceiling rooms — can range from $1,000 to $2,200 or more. Prestige Moving provides fully transparent, itemized quotes with zero hidden fees. Every cost is explained upfront. Call (613) 600-4000 for your free estimate."
    },
    {
      question: "Do you offer student moving services in Sandy Hill near uOttawa?",
      answer: "Student moving in Sandy Hill is one of our most requested services, and for good reason — the neighbourhood is home to thousands of University of Ottawa students who are constantly moving in, moving out, and transitioning between residences. We understand the specific pressures students face: tight lease deadlines, limited budgets, walk-up buildings with no elevators, and the need to move quickly between uOttawa semesters. Our Sandy Hill student moving services are priced competitively, operate on a flexible schedule, and our team knows how to move efficiently through even the most cramped Sandy Hill walk-up apartments. We also help with packing, disassembly, and reassembly of furniture like bed frames, desks, and bookshelves."
    },
    {
      question: "Can you move furniture in Sandy Hill's older Victorian homes?",
      answer: "Yes — and this is where our expertise really shines. Sandy Hill is one of Ottawa's oldest residential neighbourhoods, and its beautiful Victorian and Edwardian homes present unique moving challenges: narrow staircases with sharp turns, high thresholds, delicate original hardwood floors, and doorframes that weren't designed for modern large furniture. Our Sandy Hill movers are specifically trained for these scenarios. We use professional-grade floor runners to protect original hardwood, custom corner guards to prevent wall damage, and piano-style dollies and stair climbers for moving heavy items like dressers, bookshelves, and sofas through tight spaces. We've successfully moved thousands of pieces through Sandy Hill's oldest and most challenging homes without a single scratch."
    },
    {
      question: "Are your Sandy Hill movers insured and WSIB certified?",
      answer: "Absolutely. Every single team member at Prestige Moving is WSIB (Workplace Safety and Insurance Board) certified, and we carry comprehensive commercial liability insurance protecting your possessions from the moment we begin loading at your Sandy Hill home until the final item is placed in your new residence. We also offer additional valuation coverage for high-value belongings such as antiques, fine art, electronics, musical instruments, and custom furniture. Hiring properly insured, WSIB-certified movers is essential — it protects both you and our workers throughout the moving process and ensures you have full recourse if anything unexpected occurs."
    },
    {
      question: "What Sandy Hill streets and areas do you serve?",
      answer: "Prestige Moving serves every street in Sandy Hill and the surrounding area. Our teams regularly work on Laurier Avenue East, Nelson Street, Daly Avenue, Sweetland Avenue, Henderson Avenue, Chapel Street, Templeton Street, Osgoode Street, and all connecting residential streets throughout the neighbourhood. We also serve adjacent communities including Old Ottawa East, Strathcona Park, Lowertown, the Byward Market area, and Golden Triangle. We move between Sandy Hill and every other Ottawa community — from nearby Centretown and the Glebe to suburban destinations like Kanata, Orleans, Barrhaven, and Nepean — with the same high standard of care and professionalism."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Movers in Sandy Hill Ottawa | #1 Rated Moving Company | Prestige Moving</title>
        <meta name="description" content="Looking for movers in Sandy Hill Ottawa? Prestige Moving specializes in Sandy Hill apartments, Victorian homes & student moves near uOttawa. 349+ five-star reviews, WSIB certified. Call (613) 600-4000 — free quote." />
        <meta name="keywords" content="movers in sandy hill, sandy hill movers, moving company sandy hill ottawa, sandy hill moving services, student movers sandy hill, uottawa movers, movers sandy hill ottawa, residential movers sandy hill, apartment movers sandy hill" />
        <link rel="canonical" href="https://prestigemoving.ca/movers-in-sandy-hill" />
        <meta property="og:title" content="Movers in Sandy Hill Ottawa | Top-Rated Sandy Hill Moving Company | Prestige" />
        <meta property="og:description" content="Sandy Hill's most trusted movers. Student apartments, Victorian homes, condo moves. WSIB certified, fully insured, 349+ reviews. Free quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/movers-in-sandy-hill" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movers in Sandy Hill Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="Trusted Sandy Hill movers serving students, families & professionals. 349+ five-star reviews. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="relative h-[500px] flex items-center" data-testid="section-hero">
          <img src={heroImage} alt="Professional movers in Sandy Hill Ottawa moving furniture in a Victorian home" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1A2332]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/40" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-5">
              <MapPin className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Sandy Hill, Ottawa</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" data-testid="text-hero-heading">
              Top-Rated Movers<br className="hidden sm:block" /> in Sandy Hill
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">
              From uOttawa student apartments to century-old Victorian homes, Prestige Moving is Sandy Hill's most trusted moving company — 349+ five-star reviews and transparent pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book">
                <Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572] font-bold" data-testid="button-hero-quote">
                  Get Free Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:6136004000">
                <Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call">
                  <Phone className="h-4 w-4 mr-2" />Call (613) 600-4000
                </Button>
              </a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Sandy Hill Moving" />

        {/* Stats bar */}
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

        {/* Main content */}
        <section className="py-16" data-testid="section-main-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Sandy Hill Residents Choose Our Movers in Sandy Hill</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sandy Hill is one of Ottawa's most dynamic inner-city neighbourhoods — a vibrant mix of University of Ottawa students, young professionals, long-established families, and diplomatic community members living side by side in beautiful Victorian and Edwardian homes, modern apartment towers, and converted historic buildings. Finding reliable <strong className="text-[#1A2332]">movers in Sandy Hill</strong> means working with a team that understands this diversity: from the frantic energy of September student move-ins on Laurier Avenue East to the careful, deliberate process of moving precious antiques and heirlooms from century-old family homes on Daly Avenue. Prestige Moving has become Sandy Hill's most trusted moving company by delivering expert, personalized service to every type of client in this unique community.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What sets Prestige Moving apart from other <strong className="text-[#1A2332]">Sandy Hill movers</strong> is our deep familiarity with the neighbourhood's specific moving challenges. Sandy Hill's older residential streets were not designed for large moving trucks, and many of the neighbourhood's Victorian homes have staircases and doorways that require creative problem-solving and specialized equipment. Our teams know exactly how to navigate <a href="https://www.ottawatourism.ca/ottawa-insider/sandy-hill/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">Sandy Hill's unique streetscapes</a>, building access restrictions, and parking limitations to execute efficient, damage-free moves every time.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Student and Apartment Moving Specialists Near uOttawa</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sandy Hill's proximity to the <a href="https://www.uottawa.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">University of Ottawa</a> makes it one of Ottawa's busiest moving neighbourhoods, particularly at the start and end of academic semesters. Our <strong className="text-[#1A2332]">Sandy Hill moving team</strong> is well-prepared for the unique demands of student moves: tight lease deadlines, walk-up buildings with no elevator access, shared living spaces, and the need to move quickly and efficiently without damage to older buildings. We offer student-friendly scheduling that accommodates uOttawa's academic calendar, and our transparent hourly pricing means you'll never face unexpected fees on your moving day.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              For Sandy Hill's apartment and condominium residents, we provide full coordination with building management to handle elevator bookings, loading dock reservations, and parking arrangements. Our professionally trained movers carry all the right equipment — piano dollies, stair climbers, furniture blankets, shrink wrap, and custom strapping — to move your belongings safely through any Sandy Hill building, regardless of its age or layout. We also offer <Link href="/services/packing-services" className="text-[#C5A572] hover:underline">professional packing services</Link> to save you time, and <Link href="/services/storage-solutions" className="text-[#C5A572] hover:underline">secure storage solutions</Link> if your new Sandy Hill home isn't quite ready.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Victorian Home Moving Experts in Sandy Hill</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sandy Hill is home to some of Ottawa's finest examples of Victorian and Edwardian residential architecture — beautiful homes that are as challenging as they are charming to move in and out of. Narrow staircases with 90-degree turns, high thresholds, original hardwood floors that require protection, and doorframes sized for 19th-century furniture are all part of the reality of moving in Sandy Hill's oldest homes. Our movers approach every Victorian home move with the care and expertise these properties deserve. We use professional floor runners, corner protectors, furniture blankets, banister guards, and high-quality strapping to protect both your belongings and the architectural details of the home throughout the entire move.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              For Sandy Hill residents with specialty items — antique furniture, upright or grand pianos, artwork, wine collections, or custom cabinetry — our dedicated specialty teams provide the additional expertise and equipment these items require. <Link href="/services/piano-moving" className="text-[#C5A572] hover:underline">Piano moving</Link> in Sandy Hill's Victorian homes is one of our most requested specialty services, and our crews have successfully moved hundreds of instruments through the neighbourhood's most challenging spaces. We also offer <Link href="/services/antique-moving" className="text-[#C5A572] hover:underline">white-glove antique moving</Link> with custom padding, crating, and climate-controlled transport options.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Serving Every Sandy Hill Street and Surrounding Area</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Prestige Moving serves every residential street in Sandy Hill, including Laurier Avenue East, Nelson Street, Daly Avenue, Sweetland Avenue, Henderson Avenue, Chapel Street, Templeton Street, Osgoode Street, Augusta Street, and Mann Avenue. We also regularly serve adjacent communities including Old Ottawa East, Strathcona Park, Lowertown, Golden Triangle, and the Byward Market area — all popular destinations for Sandy Hill residents relocating within the inner city.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Whether you're moving within Sandy Hill, relocating to another Ottawa neighbourhood, or moving long-distance to another city, Prestige Moving handles every detail. We regularly help Sandy Hill clients move to and from communities like <Link href="/movers-in-westboro" className="text-[#C5A572] hover:underline">Westboro</Link>, <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link>, <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, and <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>. For interprovincial moves from Sandy Hill to Gatineau or other Quebec destinations, our <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">long-distance moving team</Link> handles all the logistics seamlessly.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Transparent Sandy Hill Moving Rates — No Surprises</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Prestige Moving believes in pricing transparency. When you request a quote for your Sandy Hill move, you'll receive a detailed breakdown of every cost — labour, truck, materials, and travel — with no hidden fees or surprise charges on moving day. This honest approach has earned us 349+ five-star reviews and countless referrals from Sandy Hill families, students, and professionals who appreciate knowing exactly what they're paying for. Call us at <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a> or email <a href="mailto:Ottawa@prestigemoving.ca" className="text-[#C5A572] hover:underline">Ottawa@prestigemoving.ca</a> for your free, no-obligation quote.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every Prestige Moving team member is <a href="https://www.wsib.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">WSIB certified</a> and fully insured. We also offer <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving</Link>, <Link href="/services/commercial-moving" className="text-[#C5A572] hover:underline">commercial relocations</Link>, <Link href="/services/senior-moving" className="text-[#C5A572] hover:underline">senior moves</Link>, <Link href="/services/student-moving" className="text-[#C5A572] hover:underline">student moving packages</Link>, and <Link href="/services/specialty-item-moving" className="text-[#C5A572] hover:underline">specialty item handling</Link> throughout Sandy Hill and all Ottawa communities.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50" data-testid="section-process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Sandy Hill Moving Process Works</h2>
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
        <section className="py-16" data-testid="section-faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Movers in Sandy Hill</h2>
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

        <SeoKeywordsSection currentPage="/movers-in-sandy-hill" />

        {/* CTA */}
        <section className="py-16 bg-[#C5A572]" data-testid="section-cta">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move in Sandy Hill?</h2>
            <p className="text-white/80 text-lg mb-8">Get your free, no-obligation quote today and discover why 349+ Sandy Hill families and students trust Prestige Moving.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book">
                <Button className="bg-[#1A2332] hover:bg-[#243044] text-white border-[#1A2332]" data-testid="button-cta-quote">Get Free Quote</Button>
              </Link>
              <a href="tel:6136004000">
                <Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-cta-call">
                  <Phone className="h-4 w-4 mr-2" />Call (613) 600-4000
                </Button>
              </a>
            </div>
          </div>
        </section>

      </div>
      <SharedFooter />
    </>
  );
}
