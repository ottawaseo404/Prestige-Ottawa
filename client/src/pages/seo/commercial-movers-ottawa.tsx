import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, ThumbsUp, Calendar, Package, Home, Building2, Mail, Heart } from "lucide-react";
import heroImage from "@assets/images/seo-commercial-movers.png";

export default function CommercialMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/commercial-movers-ottawa",
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
    "description": "Ottawa's trusted commercial and office movers. Minimal business downtime, IT equipment handling, after-hours moves, and complete project management. 337+ five-star reviews."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you move offices on weekends?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Prestige Moving offers weekend and after-hours office moves to minimize disruption to your business operations. Most of our commercial clients prefer Friday evening through Sunday relocations so their team can start fresh Monday morning in the new space. We also offer overnight and holiday moves."
        }
      },
      {
        "@type": "Question",
        "name": "How do you minimize business downtime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We minimize downtime through detailed pre-move planning, phased relocation strategies, after-hours and weekend execution, dedicated project managers, and efficient processes. Many office moves are completed in a single weekend with employees returning to fully set up workstations Monday morning."
        }
      },
      {
        "@type": "Question",
        "name": "Can you handle IT equipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our commercial movers are trained in proper IT equipment handling including servers, computers, monitors, printers, networking equipment, and telecommunications systems. We use anti-static packaging, specialized crates, and climate-controlled transport when needed."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer furniture installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide complete office furniture installation services including cubicle systems, modular workstations, conference tables, reception desks, and shelving units. Our team can disassemble at your current location and reassemble at your new office according to your floor plan."
        }
      },
      {
        "@type": "Question",
        "name": "How do you plan commercial moves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every commercial move begins with a comprehensive site survey and consultation. We create a detailed move plan covering timeline, logistics, labelling systems, floor plans, IT coordination, and communication protocols. A dedicated project manager oversees every phase from planning through post-move support."
        }
      }
    ]
  };

  const stats = [
    { icon: Building2, value: "500+", label: "Offices Relocated" },
    { icon: Clock, value: "4-8hrs", label: "Average Downtime" },
    { icon: Star, value: "5.0", label: "Star Rating" },
    { icon: Shield, value: "WSIB", label: "Certified" }
  ];

  const processSteps = [
    { icon: Phone, title: "Free Site Assessment", description: "Our commercial moving specialist visits your office to assess space, inventory, and logistics. We create a detailed relocation plan tailored to your business." },
    { icon: Calendar, title: "Custom Move Plan", description: "We develop a comprehensive timeline, labelling system, and floor plan. A dedicated project manager coordinates everything with your team and building management." },
    { icon: TruckIcon, title: "Efficient Execution", description: "Our trained commercial crew executes the move — typically over a weekend or after hours — with minimal disruption to your business operations." },
    { icon: Building2, title: "Setup & Go Live", description: "We install furniture, place equipment, and ensure your new office is fully operational so your team can start working Monday morning without missing a beat." }
  ];

  const faqs = [
    {
      question: "Do you move offices on weekends and after hours?",
      answer: "Absolutely — in fact, the majority of our commercial moves in Ottawa are performed on evenings and weekends specifically to minimize disruption to our clients' business operations. We understand that every hour of downtime costs your business money, which is why our commercial movers in Ottawa offer fully flexible scheduling including Friday evening starts, Saturday and Sunday full-day moves, overnight relocations, and even holiday moves when building access permits. A typical office relocation scenario involves our crew arriving Friday evening after your team has left for the day, working through Saturday and into Sunday to disassemble, transport, and set up your entire office, so that when your employees arrive Monday morning, they walk into a fully functioning workspace with workstations set up, monitors connected, chairs adjusted, and common areas organized. We've executed this seamless transition for law firms on Elgin Street, tech startups in Kanata North, government contractors in the downtown core, medical offices in Nepean, and retail businesses in the Byward Market — all with zero business-day downtime."
    },
    {
      question: "How do you minimize business downtime during a commercial move?",
      answer: "Minimizing business downtime is the single most critical objective in any commercial move, and our commercial movers in Ottawa have developed proven strategies to achieve it. Our approach starts weeks before the actual move with comprehensive planning: a dedicated project manager conducts a thorough site survey of both your current and new offices, creates detailed floor plans, designs a labelling system that maps every item to its exact destination, and coordinates with building management at both locations for elevator access, loading dock reservations, and parking permits. We use a phased relocation strategy when appropriate — moving non-essential items like archived files, seasonal supplies, and decorative items during the week before the main move, so the actual office relocation is faster and more focused. Our commercial crews are specialists who work with purpose and precision — they know how to pack a server room, wrap workstations, and transport sensitive equipment safely. For larger offices in Ottawa's business districts — the downtown core, Colonnade Road area, March Road in Kanata, and St. Laurent Boulevard corridor — we deploy multiple crews working simultaneously to compress the move timeline. The result is that most commercial moves are completed in 4 to 8 hours of actual downtime."
    },
    {
      question: "Can you handle IT equipment and sensitive electronics?",
      answer: "IT equipment handling is one of the core competencies of our commercial movers in Ottawa. We understand that your servers, computers, monitors, networking equipment, and telecommunications systems are the backbone of your business, and they require specialized handling that goes beyond standard moving practices. Our teams are trained in proper IT equipment preparation including safe shutdown procedures, cable labelling and documentation (we photograph every cable connection before disconnecting), anti-static packaging using ESD-safe materials, custom padding and crating for servers and rack-mounted equipment, and climate-appropriate transport. We coordinate directly with your IT team or managed service provider to ensure the technology component of your commercial move in Ottawa is handled properly from disconnection to reconnection. For data centres and server rooms, we can arrange for air-ride suspension transport and climate-controlled vehicles when required. We've successfully relocated IT infrastructure for government agencies near Parliament Hill, tech companies along the Kanata corridor, financial services firms on Bank Street and Laurier Avenue, and healthcare facilities throughout Ottawa — all without data loss or equipment damage."
    },
    {
      question: "Do you offer office furniture installation services?",
      answer: "Yes, comprehensive furniture installation is a key component of our commercial moving service in Ottawa. Our skilled installation team handles all types of office furniture systems including modular cubicle systems from Herman Miller, Steelcase, Haworth, and other major manufacturers; sit-stand workstations and ergonomic desk setups; conference room tables and audiovisual equipment mounting; reception desks and lobby furniture; filing systems and high-density shelving; and breakroom and kitchen installations. At your current office, our commercial movers carefully disassemble all furniture, labelling every component and bagging all hardware for accurate reassembly. At your new location — whether it's a sleek new office in the Kanata tech park, a renovated heritage building on Sparks Street, or a modern space along the Hunt Club corridor — we reassemble everything according to your approved floor plan. We can also install brand-new furniture purchased for the new space, working directly with your furniture dealer to coordinate delivery and installation timelines. This end-to-end furniture service means your commercial move is truly turnkey, and your employees return to fully assembled, properly configured workstations."
    },
    {
      question: "How do you plan and manage commercial moves in Ottawa?",
      answer: "Every commercial move we execute in Ottawa begins with a structured planning process designed to eliminate surprises and ensure flawless execution. Phase one is the discovery and assessment stage: our commercial moving specialist visits your current office to conduct a comprehensive inventory, assess access points, measure elevators and corridors, and understand your specific business requirements and timeline constraints. Phase two is the proposal and planning stage: we develop a detailed move plan that includes a timeline with milestones, a comprehensive labelling system (we colour-code by department and number by destination), floor plans showing exactly where every item will be placed in the new space, IT coordination protocols, communication plans for your staff, and contingency procedures. Phase three is pre-move preparation: our team delivers labels and packing materials, conducts a walkthrough with your designated move coordinator, and confirms all logistics with building management at both locations. Phase four is execution: a dedicated project manager oversees the entire move, managing our commercial crews, coordinating with your team, and ensuring every item reaches its designated location. Phase five is post-move support: we perform a walkthrough with you to verify everything is in place, handle any adjustments, and remain available for follow-up requests. This systematic approach has earned Prestige Moving the trust of businesses across Ottawa — from small professional offices in The Glebe to large corporate facilities in Gloucester and Nepean."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Movers Ottawa | Office & Business Relocation | Prestige Moving</title>
        <meta name="description" content="Ottawa's trusted commercial movers for office and business relocations. Minimal downtime, IT equipment handling, weekend moves, and dedicated project management. Call (613) 600-4000." />
        <meta name="keywords" content="commercial movers ottawa, office movers ottawa, business movers ottawa, office relocation ottawa, commercial moving company ottawa, office moving service ottawa, business relocation ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/commercial-movers-ottawa" />
        <meta property="og:title" content="Commercial Movers Ottawa | Office & Business Relocation | Prestige Moving" />
        <meta property="og:description" content="Ottawa's trusted commercial movers. Office relocations with minimal downtime, IT equipment handling, and dedicated project management. 337+ five-star reviews." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/commercial-movers-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Commercial and office movers in Ottawa - Prestige Moving business relocation" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Ottawa's Trusted Commercial & Office Movers</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">Minimize downtime and maximize efficiency with Ottawa's most trusted commercial moving team. 500+ office relocations completed with precision and care.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote</Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Commercial Moving" serviceName="Commercial Moving" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Professional Commercial Movers Serving Ottawa Businesses</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              When your business needs to relocate, downtime isn't just inconvenient — it's expensive. Every hour your team can't work, every day your operations are disrupted, and every customer interaction you miss during a move directly impacts your bottom line. That's why choosing the right commercial movers in Ottawa is one of the most important business decisions you'll make during a relocation. At Prestige Moving, we've completed over 500 commercial and office moves across Ottawa, earning a perfect 5.0-star rating from business owners who appreciate our efficiency, professionalism, and unwavering focus on minimizing operational disruption. From small professional offices in The Glebe to large corporate headquarters in Kanata's technology corridor, our commercial movers in Ottawa deliver turnkey relocation solutions that get your business back up and running faster than you thought possible.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What distinguishes Prestige Moving as the premier commercial movers in Ottawa is our project management approach to every business relocation. We don't just show up with a truck — we assign a dedicated project manager who works with your team from the initial consultation through post-move support, creating detailed plans that address every aspect of your relocation: timeline, logistics, IT infrastructure, furniture systems, employee communication, and contingency planning. This systematic approach, combined with our trained crews who specialize in commercial moves, our comprehensive insurance coverage, and our WSIB certification, ensures that your office move in Ottawa is executed with the precision and reliability your business demands.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Office Relocation Expertise Across Every Industry</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our commercial movers in Ottawa have deep experience serving businesses across every industry sector in the National Capital Region. We've relocated law firms and professional services offices from Downtown Ottawa to the expanding business parks along Colonnade Road and Merivale Road. We've moved technology companies within the Kanata North tech hub and along the March Road corridor. We've handled sensitive relocations for healthcare practices in Nepean and Gloucester, where medical equipment and patient records require specialized handling and chain-of-custody protocols. Government contractors and consulting firms near Parliament Hill trust our commercial movers for secure, confidential relocations. Retail businesses in the Byward Market, Westboro Village, and Lansdowne have relied on us for rapid overnight moves that minimize lost sales days. And educational institutions from private schools to training centres across Ottawa have experienced our efficient, organized approach to large-scale relocations.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">After-Hours and Weekend Moves to Protect Your Revenue</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Understanding that business hours are for business, our commercial movers in Ottawa specialize in after-hours and weekend relocations designed to have zero impact on your regular operations. The most popular model among our Ottawa business clients is the weekend move: our team arrives Friday evening after your employees leave, works through Saturday with a full crew to disassemble, pack, transport, and begin setting up the new space, and completes furniture installation and equipment placement on Sunday so your office is fully operational for Monday morning. For smaller offices or phased relocations, we offer overnight moves — arriving after business hours and completing the move before your team arrives the next morning. This after-hours expertise extends to our coordination capabilities: we manage elevator reservations, building access, parking, and security at both locations, handling all the logistics that make evening and weekend moves run smoothly across Ottawa's commercial buildings in the downtown core, Kanata, Nepean, and beyond.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Dedicated Project Management for Every Commercial Move</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every commercial move managed by Prestige Moving in Ottawa includes a dedicated project manager who serves as your single point of contact throughout the entire relocation process. Your project manager begins by conducting a comprehensive site survey, walking both your current and new office spaces to understand the full scope of the move. They develop a detailed move plan that includes a milestone-based timeline, a colour-coded labelling system for every department and workstation, floor plans showing the exact placement of every piece of furniture and equipment in the new space, IT disconnection and reconnection schedules coordinated with your technology team, and communication templates you can share with your employees. On move day, your project manager is on-site supervising the entire operation, managing the crew, troubleshooting any issues in real time, and keeping you updated on progress. Post-move, they conduct a walkthrough to verify everything is in place and remain available for adjustments. This white-glove project management approach is what makes Prestige Moving the choice for Ottawa businesses that can't afford a poorly executed commercial move.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Our Commercial Moving Process</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Commercial Movers in Ottawa</h2>
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

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Relocate Your Business?</h2>
            <p className="text-white/80 text-lg mb-8">Get a free, detailed commercial moving proposal. Minimal downtime, maximum professionalism — guaranteed.</p>
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