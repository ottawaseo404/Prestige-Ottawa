import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, ThumbsUp, Calendar, Package, Home, Building2, Mail, Heart } from "lucide-react";
import heroImage from "@assets/images/seo-insured-movers.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function InsuredMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/insured-movers-ottawa",
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
    "description": "Fully insured movers in Ottawa providing comprehensive protection for your belongings. WSIB certified, liability coverage, and transparent claims process. 337+ five-star reviews."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What insurance coverage do you carry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prestige Moving carries comprehensive commercial general liability insurance, cargo insurance that protects your belongings during transit, commercial auto insurance for our fleet, and WSIB certification for worker injury coverage. Our coverage exceeds industry minimums and protects you throughout every phase of your move."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if something is damaged during my move?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If any item is damaged during your move, our straightforward claims process begins immediately. Document the damage, notify our team, and we'll initiate a claim through our insurance. Our goal is to resolve all claims fairly and promptly, whether through repair, replacement, or compensation based on the item's value."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need my own moving insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While our comprehensive insurance coverage protects most moves, some customers with high-value items like fine art, antiques, or expensive electronics choose to purchase additional third-party transit insurance for extra protection. Your homeowner's or renter's insurance may also provide some coverage during a move — check with your provider."
        }
      },
      {
        "@type": "Question",
        "name": "What does your liability coverage include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our liability coverage includes protection for your belongings against damage during packing, loading, transit, unloading, and unpacking. It also covers property damage to your home (walls, floors, doorframes) during the move. Our WSIB certification separately covers any worker injuries, so you're never held personally liable."
        }
      },
      {
        "@type": "Question",
        "name": "How do I file a claim if something is damaged?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Filing a claim with Prestige Moving is straightforward: photograph the damage, contact our office at (613) 600-4000 or Ottawa@prestigemoving.ca within 48 hours, and provide a description of the item and damage. Our claims team reviews each case promptly and works to reach a fair resolution, typically within 5-10 business days."
        }
      }
    ]
  };

  const stats = [
    { icon: Shield, value: "Full", label: "Liability Coverage" },
    { icon: Award, value: "WSIB", label: "Worker Protection" },
    { icon: Star, value: "337+", label: "Five-Star Reviews" },
    { icon: CheckCircle2, value: "100%", label: "Claims Resolved" }
  ];

  const processSteps = [
    { icon: Phone, title: "Request Your Quote", description: "Contact us at (613) 600-4000. Our quote includes full details of our insurance coverage and what's protected during your move." },
    { icon: Shield, title: "Coverage Confirmed", description: "Before moving day, we confirm all insurance details in writing. You'll know exactly what's covered and how our claims process works." },
    { icon: TruckIcon, title: "Protected Moving Day", description: "Our insured, trained crew handles your belongings with professional care. Every item is protected by our comprehensive coverage from pickup to delivery." },
    { icon: CheckCircle2, title: "Peace of Mind Delivered", description: "Your move is complete with full insurance backing. If any issue arises, our straightforward claims process ensures fair, prompt resolution." }
  ];

  const faqs = [
    {
      question: "What insurance coverage do you carry?",
      answer: "Prestige Moving carries a comprehensive suite of insurance policies that provide complete protection for your move in Ottawa. Our coverage includes commercial general liability insurance, which protects against property damage and third-party injuries; cargo insurance that specifically covers your household goods and belongings during packing, loading, transit, unloading, and placement; commercial auto insurance for every vehicle in our fleet; and active WSIB (Workplace Safety and Insurance Board) certification that provides workers' compensation coverage for every crew member. Our coverage limits exceed the industry minimums required in Ontario, reflecting our commitment to providing the most thoroughly insured moving experience available in Ottawa. Whether we're moving your family from a condo in Centretown to a house in Barrhaven or relocating your antique collection from Rockcliffe Park to a new home in The Glebe, every item is fully protected throughout the entire process."
    },
    {
      question: "What happens if something is damaged during my move?",
      answer: "While damage is extremely rare given our trained crews and professional handling techniques, we understand that accidents can occasionally occur — and that's precisely why we maintain comprehensive insurance as insured movers in Ottawa. If any item is damaged during your move, our claims process is transparent and straightforward. First, document the damage with photographs as soon as you notice it. Then contact our office at (613) 600-4000 or Ottawa@prestigemoving.ca within 48 hours of your move. Provide a description of the damaged item, its approximate value, and your photos. Our dedicated claims team will review your case, typically acknowledging your claim within 24 hours and reaching a resolution within 5 to 10 business days. Resolution may include professional repair of the item, replacement at fair market value, or financial compensation. We pride ourselves on handling every claim with integrity and fairness — it's one of the reasons our 337+ reviewers across Ottawa, from Nepean to Orleans, trust us with their most valued possessions."
    },
    {
      question: "Do I need my own moving insurance?",
      answer: "For the vast majority of moves in Ottawa, our comprehensive insurance coverage provides more than adequate protection for your belongings. However, there are specific scenarios where additional third-party transit insurance may be worth considering. If you own high-value items such as fine art, rare antiques, expensive jewellery, or specialty electronics worth thousands of dollars individually, additional coverage can provide protection up to the full declared value of these items. Your existing homeowner's or renter's insurance policy may also extend some coverage to your belongings during a move — we recommend contacting your insurance provider to understand what's included. At Prestige Moving, we're always transparent about what our insurance covers and will advise you honestly if we believe additional coverage would be beneficial for your specific situation. Our goal as fully insured movers in Ottawa is to ensure you have complete peace of mind, whether you're moving within Sandy Hill, across town to Kanata, or anywhere else in the National Capital Region."
    },
    {
      question: "What does your liability coverage include?",
      answer: "Our comprehensive liability coverage as insured movers in Ottawa encompasses every phase of your move and every potential risk along the way. During packing, your items are covered against damage caused by our handling. During loading and unloading, coverage extends to any item damaged while being carried, lifted, or placed in our trucks. During transit, all your belongings are protected against damage from vehicle movement, road conditions, or any unforeseen incident. Our coverage also includes property damage protection — if our crew accidentally damages your walls, floors, banisters, doorframes, or fixtures at either your current or new home, whether that home is in Hintonburg, Alta Vista, Gloucester, or Stittsville, our insurance covers the repair costs. Separately, our WSIB certification provides workers' compensation coverage for every crew member, which critically means that if a mover is injured while working on your property, you are not held personally liable for their medical expenses, lost wages, or rehabilitation — a protection that many Ottawa homeowners don't realize is essential when hiring movers."
    },
    {
      question: "How do I file a claim if something is damaged?",
      answer: "Filing a damage claim with Prestige Moving is designed to be as simple and stress-free as the move itself. Here's our step-by-step process: First, photograph the damage from multiple angles as soon as you discover it — visual documentation is the foundation of any successful claim. Second, contact our office within 48 hours at (613) 600-4000 or email Ottawa@prestigemoving.ca with the subject line 'Damage Claim.' Third, provide a brief description of the damaged item, its approximate age and value, and attach your photographs. Fourth, our claims coordinator will acknowledge receipt of your claim within one business day and may schedule an inspection if needed. Fifth, we aim to reach a fair resolution within 5 to 10 business days, which may include professional repair, replacement, or financial compensation. Throughout the process, we communicate openly and treat every claim with the seriousness it deserves. Our fair, transparent claims handling is one of the many reasons Ottawa families — from Manor Park and New Edinburgh to Hunt Club and Riverside South — choose Prestige Moving as their trusted, fully insured movers."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Insured Movers Ottawa | Fully Protected Moving | Prestige Moving</title>
        <meta name="description" content="Choose fully insured movers in Ottawa for complete peace of mind. Prestige Moving carries comprehensive liability, cargo insurance, and WSIB certification. 337+ five-star reviews. Call (613) 600-4000." />
        <meta name="keywords" content="insured movers ottawa, fully insured moving company ottawa, moving insurance ottawa, insured moving services ottawa, protected movers ottawa, liability covered movers ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/insured-movers-ottawa" />
        <meta property="og:title" content="Insured Movers Ottawa | Fully Protected Moving | Prestige Moving" />
        <meta property="og:description" content="Fully insured movers in Ottawa with comprehensive liability coverage and WSIB certification. Your belongings are protected every step of the way. Get a free quote." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/insured-movers-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Fully insured movers in Ottawa - Prestige Moving protection guarantee" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Fully Insured Movers in Ottawa — Your Belongings Are Protected</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">Comprehensive liability coverage, WSIB certification, and a transparent claims process. Move with complete confidence knowing every item is fully protected.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote</Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Insured Moving" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Insurance Is Non-Negotiable When Choosing Movers in Ottawa</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your home contains more than furniture and boxes — it holds a lifetime of memories, irreplaceable heirlooms, and valuable possessions that deserve the highest level of protection during a move. That's why choosing insured movers in Ottawa should be the very first criteria on your selection checklist, not an afterthought. At Prestige Moving, we carry comprehensive insurance coverage that protects your belongings from the moment our crew begins packing until the last item is placed exactly where you want it in your new home. Our insurance portfolio includes commercial general liability, cargo coverage, commercial auto insurance, and WSIB certification — a complete safety net that gives families across Ottawa, from Westboro and Hintonburg to Orleans and Cumberland, the peace of mind they deserve during their relocation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The risks of hiring uninsured or underinsured movers in Ottawa are real and potentially devastating. Without proper cargo insurance, if a mover drops your grandmother's china cabinet while navigating the narrow staircase of your Centretown apartment, you have no recourse for compensation. Without WSIB certification, if a mover injures their back lifting your heavy dresser in your Nepean home, you could be held personally liable for tens of thousands of dollars in medical costs and lost wages. Without commercial liability insurance, if a mover's dolly gouges your hardwood floors or dents your walls, you're left paying for repairs out of your own pocket. Prestige Moving eliminates all of these risks with our comprehensive insurance coverage — it's why 337+ Ottawa families have given us perfect five-star reviews.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Understanding Our Comprehensive Insurance Coverage</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              As fully insured movers in Ottawa, Prestige Moving maintains multiple layers of insurance protection that work together to create a complete safety net for your move. Our commercial general liability insurance covers property damage at both your origin and destination addresses — this means if our crew accidentally damages your walls, floors, banisters, or fixtures while moving in or out, the repair costs are covered. Our cargo insurance specifically protects your household goods and personal belongings during every phase of the move: packing, loading, transit, unloading, and unpacking. Our commercial auto insurance covers every vehicle in our fleet, protecting against incidents during transit. And our active WSIB certification provides workers' compensation coverage for every crew member, ensuring that you are never held personally liable for any workplace injury that may occur during your move. This multi-layered approach to insurance is what distinguishes Prestige Moving as the most thoroughly protected moving option available in Ottawa.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">WSIB Certification: Protecting Ottawa Homeowners</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Many Ottawa homeowners don't realize that when they hire movers without WSIB certification, they may be personally liable if a worker is injured on their property. Moving is physically demanding work — carrying heavy furniture up and down stairs, loading and unloading trucks, navigating tight hallways and doorways in homes throughout Barrhaven, Kanata, Gloucester, and beyond. Injuries, while uncommon with properly trained crews, are always a possibility. Prestige Moving's active WSIB certification means that every member of our crew is covered by Ontario's workplace injury insurance system. If a crew member is injured during your move — whether at your current home in Sandy Hill or your new residence in Stittsville — WSIB handles their medical care, rehabilitation, and any lost wages. You, as the homeowner, are completely protected from personal liability. This is a critical distinction that separates insured movers in Ottawa like Prestige Moving from operators who leave homeowners exposed to significant financial risk.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Our Transparent, Fair Claims Process</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Even with the most careful handling — and our crews are among the best-trained in Ottawa — the unexpected can occasionally happen. That's why our claims process is designed to be as stress-free as the move itself. At Prestige Moving, we don't hide behind complicated paperwork or delay tactics. When a claim is submitted, we acknowledge it within one business day, investigate promptly, and work to reach a fair resolution typically within 5 to 10 business days. Our approach to claims handling reflects the same integrity and customer-first mentality that has earned us 337+ five-star reviews from families across every Ottawa neighbourhood — from the established communities of Alta Vista and Manor Park to the newer developments in Riverside South, Findlay Creek, and Half Moon Bay. When you choose insured movers in Ottawa, you're choosing the peace of mind that comes from knowing you're fully protected.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Our Fully Insured Moving Process</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Insured Movers in Ottawa</h2>
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

        <SeoKeywordsSection currentPage="/insured-movers-ottawa" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Move with Complete Peace of Mind</h2>
            <p className="text-white/80 text-lg mb-8">Fully insured, WSIB certified, and backed by 337+ five-star reviews. Your belongings deserve the best protection in Ottawa.</p>
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