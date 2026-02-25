import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, ThumbsUp, Calendar, Package, Home, Building2, Mail, Heart } from "lucide-react";
import heroImage from "@assets/images/seo-licensed-movers.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function LicensedMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/licensed-movers-ottawa",
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
    "description": "Licensed and certified movers in Ottawa. WSIB certified, fully registered, compliant with all Ontario regulations. 350+ five-star reviews."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are you a licensed moving company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Prestige Moving is a fully licensed moving company in Ottawa. We hold all required Ontario business registrations, maintain active WSIB certification, carry comprehensive commercial liability insurance, and comply with all federal and provincial regulations governing the moving industry."
        }
      },
      {
        "@type": "Question",
        "name": "What licenses do movers need in Ontario?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Ontario, professional movers need a valid business registration, WSIB (Workplace Safety and Insurance Board) certification for worker protection, commercial vehicle insurance, comprehensive liability insurance, and compliance with the Consumer Protection Act. Prestige Moving holds all of these credentials and keeps them current at all times."
        }
      },
      {
        "@type": "Question",
        "name": "What is WSIB certification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WSIB (Workplace Safety and Insurance Board) certification means a company provides workplace injury insurance for its employees. This protects both workers and homeowners — if a mover is injured on your property, WSIB coverage ensures you're not held personally liable. Prestige Moving maintains active WSIB certification for every crew member."
        }
      },
      {
        "@type": "Question",
        "name": "How can I verify a mover's license?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can verify a mover's credentials by requesting their WSIB clearance certificate number and checking it on the WSIB website, confirming their business registration through the Ontario Business Registry, requesting proof of insurance, and checking reviews on Google and the Better Business Bureau. Prestige Moving provides all credentials upon request."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I choose licensed movers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choosing licensed movers protects you legally and financially. Licensed movers carry insurance to cover damage, maintain WSIB for worker injuries, follow industry safety standards, and are accountable to regulatory bodies. Unlicensed movers offer no such protections, leaving you vulnerable to property damage claims, liability for worker injuries, and potential scams."
        }
      }
    ]
  };

  const stats = [
    { icon: Shield, value: "WSIB", label: "Certified Company" },
    { icon: Award, value: "100%", label: "Fully Licensed" },
    { icon: Star, value: "350+", label: "Five-Star Reviews" },
    { icon: CheckCircle2, value: "15+", label: "Years Experience" }
  ];

  const processSteps = [
    { icon: Phone, title: "Verified Consultation", description: "Call (613) 600-4000 for a free quote from our licensed team. We'll share our credentials and provide a transparent, detailed estimate." },
    { icon: Shield, title: "Credentials Confirmed", description: "We provide our WSIB certificate, insurance documentation, and business registration upon request — complete transparency before your move." },
    { icon: TruckIcon, title: "Certified Crew Arrives", description: "Our licensed, background-checked professionals arrive with fully insured commercial vehicles and industry-standard equipment." },
    { icon: CheckCircle2, title: "Protected & Complete", description: "Your move is completed under full insurance and regulatory compliance. Every item is accounted for and every standard met." }
  ];

  const faqs = [
    {
      question: "Are you a licensed moving company?",
      answer: "Yes, Prestige Moving is a fully licensed and certified moving company operating in Ottawa and throughout Ontario. We hold all required business registrations with the Province of Ontario, maintain active WSIB (Workplace Safety and Insurance Board) certification that covers every member of our crew, carry comprehensive commercial general liability insurance with coverage well exceeding industry minimums, and comply with all applicable provisions of Ontario's Consumer Protection Act. Our licensing credentials are always current, regularly renewed, and available for inspection upon request. When you hire licensed movers in Ottawa like Prestige Moving, you're choosing a company that has invested in meeting every regulatory standard required to operate legally and responsibly in the moving industry. We're proud to be among the most credentialed moving companies serving Ottawa neighbourhoods from Centretown to Kanata, Orleans to Barrhaven."
    },
    {
      question: "What licenses do movers need in Ontario?",
      answer: "Professional movers operating in Ontario are required to hold several key credentials to operate legally. These include a valid Ontario business registration (either as a sole proprietorship, partnership, or corporation registered with the province), WSIB certification that provides workplace injury coverage for all employees, commercial auto insurance covering the moving vehicles, comprehensive general liability insurance that protects customers' belongings during transit, and compliance with the Ontario Consumer Protection Act which governs contract terms, cancellation rights, and fair business practices. Additionally, movers performing interprovincial or cross-border moves need additional federal transportation licenses. At Prestige Moving, we hold every credential required for both local Ottawa moves and long-distance relocations across Ontario and beyond. We consider licensing not just a legal requirement but a fundamental commitment to the safety and protection of our Ottawa customers in every neighbourhood we serve — from The Glebe and Old Ottawa South to Stittsville, Manotick, and Greely."
    },
    {
      question: "What is WSIB certification and why does it matter?",
      answer: "WSIB stands for the Workplace Safety and Insurance Board, Ontario's workplace compensation authority. WSIB certification means a moving company has registered with the board and pays premiums to provide workplace injury insurance for its employees. This certification matters enormously for homeowners because it protects you from personal liability. If an uninsured mover is injured while working in your home — carrying a heavy dresser down your stairs in your Westboro townhouse or lifting a sofa in your Alta Vista bungalow — you could be held personally liable for their medical expenses, lost wages, and rehabilitation costs. With WSIB-certified movers like Prestige Moving, that risk is completely eliminated. Our active WSIB certification covers every crew member on every job, giving homeowners across Ottawa complete peace of mind. We maintain our WSIB clearance certificate and update it regularly — and we're happy to provide a copy to any customer who requests one."
    },
    {
      question: "How can I verify a mover's license in Ottawa?",
      answer: "Verifying a moving company's credentials before hiring them is one of the most important steps you can take to protect yourself during a move in Ottawa. Here's how to check: First, request their WSIB clearance certificate number and verify it on the WSIB Ontario website — this confirms their workers' compensation coverage is active. Second, check their business registration through the Ontario Business Registry or ServiceOntario. Third, ask for their Certificate of Insurance and verify it directly with their insurance provider — reputable licensed movers in Ottawa like Prestige Moving will happily provide this documentation. Fourth, check the Better Business Bureau for any complaints or disputes. Fifth, read their Google reviews — companies with hundreds of genuine positive reviews, like our 350+ five-star reviews, demonstrate a track record of legitimate, professional service. At Prestige Moving, we believe in complete transparency. We proactively share all our licensing and certification documentation with customers throughout Ottawa, whether they're in Hintonburg, Rockcliffe Park, or Riverside South."
    },
    {
      question: "Why should I choose licensed movers over unlicensed ones?",
      answer: "Choosing licensed movers in Ottawa versus unlicensed operators is the single most important decision you'll make when planning your move, and the difference goes far beyond a piece of paper. Licensed movers like Prestige Moving carry comprehensive insurance that covers your belongings during transit — if something is damaged, you're protected. Licensed movers maintain WSIB certification, meaning you're not personally liable if a worker is injured on your property. Licensed movers are accountable to regulatory bodies and consumer protection laws, giving you legal recourse if something goes wrong. Licensed movers invest in training, proper equipment, and safe practices that protect your home, your belongings, and their team. Unlicensed movers offer none of these protections. If an unlicensed mover damages your antique hutch during a move in Manor Park, you may have no insurance recourse. If their untrained worker injures themselves carrying boxes in your Nepean home, you could face a lawsuit. The cost difference between licensed and unlicensed movers is minimal, but the risk difference is enormous. Protect yourself — always choose licensed movers in Ottawa."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Licensed Movers Ottawa | Certified Moving Company | Prestige Moving</title>
        <meta name="description" content="Choose licensed movers in Ottawa for a protected, worry-free move. Prestige Moving is WSIB certified, fully insured, and registered. 350+ five-star reviews. Call (613) 600-4000." />
        <meta name="keywords" content="licensed movers ottawa, certified movers ottawa, registered moving company ottawa, WSIB certified movers ottawa, licensed moving company ottawa, insured licensed movers ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/licensed-movers-ottawa" />
        <meta property="og:title" content="Licensed Movers Ottawa | Certified Moving Company | Prestige Moving" />
        <meta property="og:description" content="Fully licensed and WSIB certified movers in Ottawa. Regulatory compliance, comprehensive insurance, 350+ five-star reviews. Your move is fully protected." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/licensed-movers-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Licensed and certified movers in Ottawa - Prestige Moving" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Licensed & Certified Movers in Ottawa</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">WSIB certified, fully registered, and compliant with all Ontario regulations. Choose the peace of mind that comes with a properly licensed moving company.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote</Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Licensed Moving" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Licensing Matters When Choosing Movers in Ottawa</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hiring licensed movers in Ottawa isn't just about checking a box — it's about protecting yourself, your family, and everything you own during one of life's most significant transitions. The moving industry in Ontario, like many service industries, includes both legitimate, licensed operators and unlicensed individuals operating out of the back of rented vans. While unlicensed operators may advertise slightly lower rates, they expose you to substantial financial and legal risks that far outweigh any short-term savings. At Prestige Moving, we've maintained every required license, certification, and insurance policy since our founding, and we consider our regulatory compliance to be a cornerstone of the trust that Ottawa families — from Kanata to Orleans, Barrhaven to Centretown — place in us every day.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Licensed movers in Ottawa are accountable to a framework of regulations designed specifically to protect consumers. This includes Ontario's Consumer Protection Act, which governs how moving contracts must be written, what cancellation rights you have, and what remedies are available if something goes wrong. Licensed movers carry comprehensive insurance that covers your belongings from the moment they're loaded onto the truck until they're safely placed in your new home. They maintain WSIB certification that protects you from personal liability if a worker is injured on your property. And they operate commercial vehicles that meet all provincial safety and inspection standards. At Prestige Moving, we don't just meet these requirements — we exceed them, which is why we've earned 350+ five-star reviews from homeowners across every Ottawa neighbourhood.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Our Comprehensive Licensing & Certification</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Prestige Moving holds a complete portfolio of licenses and certifications required to operate as professional movers in Ottawa and across Ontario. Our business is fully registered with the Province of Ontario and operates in full compliance with all applicable federal and provincial regulations. We maintain active WSIB (Workplace Safety and Insurance Board) certification, which provides workplace injury coverage for every crew member — this protects homeowners from personal liability should an injury occur during a move at your property in Westboro, The Glebe, Sandy Hill, or anywhere else in Ottawa. Our commercial general liability insurance provides comprehensive coverage well above industry minimums, protecting your belongings throughout the entire moving process. Our fleet vehicles carry full commercial auto insurance and pass all required safety inspections. Every member of our team is background-checked and professionally trained in safe lifting techniques, furniture handling, and customer service protocols.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">The Risks of Hiring Unlicensed Movers in Ottawa</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every year, Ottawa residents report negative experiences with unlicensed movers — stories that range from minor inconveniences to devastating financial losses. Unlicensed operators may hold your belongings hostage for additional payment, arrive with inadequate equipment that damages your furniture, use untrained workers who injure themselves on your property (leaving you potentially liable), or simply disappear with your deposit. Without proper licensing and insurance, you have limited legal recourse in these situations. The Consumer Protection Act provisions that safeguard your rights apply specifically to licensed, registered businesses. By choosing licensed movers in Ottawa like Prestige Moving, you ensure that every aspect of your move is covered by proper insurance, performed by trained professionals, and backed by the legal protections that come with hiring a fully compliant, registered business. Whether you're moving within Nepean, relocating from Gloucester to Hunt Club, or transitioning from a townhome in Blackburn Hamlet to a detached house in Manotick, licensing is your first line of defence.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Consumer Protection for Ottawa Homeowners</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              As licensed movers in Ottawa, Prestige Moving operates under the full framework of Ontario's consumer protection regulations. This means our contracts are transparent and clearly outline all terms, pricing, and conditions. You have the right to a written estimate before your move begins. You are protected against bait-and-switch pricing tactics. And you have access to formal dispute resolution channels should any issue arise. We also voluntarily exceed many regulatory requirements because we believe that building trust with Ottawa homeowners goes beyond minimum compliance. Our transparent pricing model, satisfaction guarantee, and proactive communication throughout the moving process reflect our commitment to being the gold standard for licensed movers in Ottawa — a standard we uphold every day for families across Stittsville, Riverside South, Findlay Creek, and every corner of the National Capital Region.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Licensed Moving Process Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Licensed Movers in Ottawa</h2>
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

        <SeoKeywordsSection currentPage="/licensed-movers-ottawa" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Licensed Movers You Can Trust</h2>
            <p className="text-white/80 text-lg mb-8">WSIB certified, fully insured, and compliant with all Ontario regulations. Get your free quote from Ottawa's most trusted licensed movers.</p>
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