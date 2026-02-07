import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, ThumbsUp, Calendar, Package, Home, Building2, Mail, Heart } from "lucide-react";
import heroImage from "@assets/images/seo-ottawa-movers.png";

export default function OttawaMovers() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/ottawa-movers",
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
    "description": "Ottawa's #1 rated movers. Full-service residential and commercial moving company serving all Ottawa neighborhoods. WSIB certified, fully insured, 337+ five-star reviews."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do movers cost in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Moving costs in Ottawa typically range from $400 to $2,500 depending on the size of your home, distance, and services needed. A one-bedroom apartment move usually starts around $400-$600, while a three-bedroom house ranges from $1,200 to $2,500. Contact Prestige Moving at (613) 600-4000 for a free, no-obligation quote tailored to your specific needs."
        }
      },
      {
        "@type": "Question",
        "name": "How far in advance should I book Ottawa movers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend booking your Ottawa movers at least 2-4 weeks in advance, especially during peak moving season (May through September). However, Prestige Moving also accommodates last-minute and same-week moves when availability permits. For end-of-month dates, booking 3-4 weeks ahead is ideal."
        }
      },
      {
        "@type": "Question",
        "name": "Do you move in winter in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Prestige Moving operates year-round in Ottawa, including through harsh winter conditions. Our team is experienced with winter moves and takes extra precautions including floor protection, salt-free pathways, and climate-appropriate wrapping for your belongings. Winter moves often come with greater availability and flexible scheduling."
        }
      },
      {
        "@type": "Question",
        "name": "What areas in Ottawa do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prestige Moving serves all Ottawa neighborhoods including Downtown, Kanata, Orleans, Barrhaven, Nepean, Gloucester, Westboro, The Glebe, Centretown, Hintonburg, Alta Vista, Rockcliffe Park, New Edinburgh, Sandy Hill, and surrounding areas including Gatineau. We cover the entire National Capital Region."
        }
      },
      {
        "@type": "Question",
        "name": "Are your Ottawa movers insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Prestige Moving is fully insured and WSIB certified. We carry comprehensive liability insurance and workers' compensation coverage. Every item we move is protected, and our team members are covered under WSIB. We also offer additional valuation coverage options for high-value items."
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
    { icon: Phone, title: "Request a Quote", description: "Call us at (613) 600-4000 or fill out our online form for a free, detailed estimate tailored to your move." },
    { icon: Calendar, title: "Schedule Your Move", description: "Pick a date that works for you. We offer flexible scheduling including weekends and evenings across Ottawa." },
    { icon: TruckIcon, title: "We Handle Everything", description: "Our trained Ottawa movers arrive on time, protect your belongings, and move everything safely to your new home." },
    { icon: Home, title: "Enjoy Your New Home", description: "We place furniture exactly where you want it and ensure everything arrives in perfect condition." }
  ];

  const faqs = [
    {
      question: "How much do movers cost in Ottawa?",
      answer: "Moving costs in Ottawa typically range from $400 to $2,500 depending on the size of your home, distance, and services needed. A one-bedroom apartment move usually starts around $400-$600, while a three-bedroom house ranges from $1,200 to $2,500. Prestige Moving provides transparent pricing with no hidden fees. Contact us at (613) 600-4000 for a free, no-obligation quote tailored to your specific moving needs."
    },
    {
      question: "How far in advance should I book Ottawa movers?",
      answer: "We recommend booking your Ottawa movers at least 2-4 weeks in advance, especially during peak moving season from May through September. End-of-month dates fill up quickly, so booking 3-4 weeks ahead is ideal for those times. However, Prestige Moving also accommodates last-minute and same-week moves when availability permits. Call us to check current availability."
    },
    {
      question: "Do you move in winter in Ottawa?",
      answer: "Absolutely. Prestige Moving operates year-round in Ottawa, including through the harshest winter months. Our experienced team takes extra precautions for winter moves including floor protection to prevent slush damage, salt-free pathways to protect your floors, climate-appropriate wrapping for temperature-sensitive items, and careful ice management around trucks. Winter moves often come with greater scheduling flexibility and availability."
    },
    {
      question: "What areas in Ottawa do you serve?",
      answer: "Prestige Moving serves all Ottawa neighborhoods and surrounding areas. This includes Downtown Ottawa, Kanata, Orleans, Barrhaven, Nepean, Gloucester, Westboro, The Glebe, Centretown, Hintonburg, Alta Vista, Rockcliffe Park, New Edinburgh, Sandy Hill, Little Italy, Vanier, Stittsville, Manotick, and the entire National Capital Region including Gatineau. No matter where you're moving within or around Ottawa, we've got you covered."
    },
    {
      question: "Are your Ottawa movers insured?",
      answer: "Yes, Prestige Moving is fully insured and WSIB certified. We carry comprehensive commercial liability insurance and all our team members are covered under the Workplace Safety and Insurance Board. Every item we transport is protected under our standard coverage, and we offer additional valuation options for high-value items like pianos, antiques, and electronics. Your peace of mind is our priority."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ottawa Movers | #1 Rated Moving Company | Prestige Moving</title>
        <meta name="description" content="Looking for reliable Ottawa movers? Prestige Moving is Ottawa's #1 rated moving company with 337+ five-star reviews. Full-service residential & commercial moves. WSIB certified, fully insured. Call (613) 600-4000 for a free quote." />
        <meta name="keywords" content="ottawa movers, movers ottawa, moving company ottawa, ottawa moving services, best movers ottawa, residential movers ottawa, commercial movers ottawa, affordable movers ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-movers" />
        <meta property="og:title" content="Ottawa Movers | #1 Rated Moving Company | Prestige Moving" />
        <meta property="og:description" content="Ottawa's most trusted movers with 337+ five-star reviews. Full-service residential and commercial moving. WSIB certified, fully insured. Free quotes available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/ottawa-movers" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Ottawa movers loading a moving truck in an Ottawa neighborhood" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Ottawa's Most Trusted Movers</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">Prestige Moving has helped over 10,000 families and businesses move across Ottawa with care, precision, and five-star service.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote</Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Ottawa Moving" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Ottawa Residents Choose Prestige Moving</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              When it comes to finding reliable Ottawa movers, homeowners and renters across the National Capital Region consistently choose Prestige Moving for one simple reason: we deliver an exceptional moving experience every single time. With over 337 verified five-star reviews from satisfied customers, our reputation as Ottawa's top-rated movers has been built through years of dedicated service, transparent pricing, and an unwavering commitment to treating every customer's belongings as if they were our own. Whether you're relocating from a studio apartment in Centretown to a family home in Barrhaven, or moving your business from Downtown Ottawa to a new office in Kanata, our team of trained professionals is ready to make your move seamless and stress-free.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Choosing the right Ottawa movers can feel overwhelming, with dozens of companies competing for your attention. What sets Prestige Moving apart is our comprehensive approach to every relocation. We don't just load boxes onto a truck — we provide a complete moving solution that includes careful wrapping of furniture, disassembly and reassembly of beds and desks, floor and wall protection at both locations, and precise placement of every item in your new space. Our movers are WSIB certified and fully insured, giving you complete peace of mind that your possessions and our team are fully protected throughout the entire process.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Full-Service Moving Solutions Across Ottawa</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              As a full-service moving company, Prestige Moving offers far more than basic transportation. Our Ottawa movers provide end-to-end relocation services including professional packing, specialty item handling, temporary storage solutions, and even post-move cleaning coordination. We understand that every move is unique, which is why we offer customizable packages designed to fit your specific needs and budget. From a simple studio apartment move requiring just two movers and a truck, to a complex multi-day corporate relocation involving dozens of workstations and sensitive equipment, our team has the experience and equipment to handle it all.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our fleet of modern, well-maintained trucks is equipped with air-ride suspension to protect your belongings during transit, along with a comprehensive inventory of moving blankets, straps, dollies, and specialty equipment for items like pianos, pool tables, and antiques. Every Ottawa mover on our team undergoes rigorous training in proper lifting techniques, furniture protection, and customer service. We invest in our people because we know that the quality of your moving experience depends directly on the professionalism and skill of the team that shows up at your door.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Serving Every Ottawa Neighbourhood</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Prestige Moving proudly serves every corner of Ottawa and the surrounding National Capital Region. Our deep knowledge of Ottawa's diverse neighbourhoods — from the tree-lined streets of The Glebe and the heritage homes of Rockcliffe Park, to the modern subdivisions of Barrhaven and the bustling urban core of Downtown — allows us to plan and execute moves with remarkable efficiency. We know which buildings require elevator bookings and loading dock reservations, which streets have parking restrictions, and which routes avoid the heaviest traffic congestion during your move.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our Ottawa movers regularly serve Kanata, Orleans, Nepean, Gloucester, Westboro, Hintonburg, Alta Vista, Sandy Hill, New Edinburgh, Vanier, Stittsville, Manotick, and dozens of other communities throughout the region. We also handle cross-city moves between Ottawa and Gatineau, navigating the unique considerations of interprovincial relocations with ease. Whether you're moving across the street in Little Italy or across the city from Kanata to Orleans, our team arrives on time, works efficiently, and treats every move with the same level of care and professionalism.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Customer Satisfaction Is Our Top Priority</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Prestige Moving, customer satisfaction isn't just a goal — it's the foundation of everything we do. Our 337+ five-star reviews speak volumes about the quality of our Ottawa moving services. We achieve these results through a relentless focus on communication, punctuality, and care. From the moment you request a quote to the final box placed in your new home, you'll experience a level of service that has made us the most recommended movers in Ottawa. Every team member is trained to communicate clearly, work efficiently, and resolve any concerns immediately, ensuring that your move exceeds expectations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We also offer a satisfaction guarantee that demonstrates our confidence in our Ottawa movers. If anything doesn't meet your standards during the move, we'll make it right — no questions asked. Our transparent pricing means the quote you receive is the price you pay, with no hidden fees, surprise surcharges, or last-minute additions. This honest approach to business is a key reason why thousands of Ottawa residents have trusted Prestige Moving with their most important relocations, and why they continue to refer friends, family, and colleagues to our team.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Ottawa Moving Process Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Ottawa Movers</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move with Ottawa's Best?</h2>
            <p className="text-white/80 text-lg mb-8">Get your free, no-obligation quote today and discover why 337+ families gave us five stars.</p>
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