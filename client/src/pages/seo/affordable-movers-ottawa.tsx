import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, ThumbsUp, Calendar, Package, Home, Building2, Mail, Heart } from "lucide-react";
import heroImage from "@assets/images/seo-affordable-movers.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function AffordableMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/affordable-movers-ottawa",
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
    "description": "Affordable movers in Ottawa offering budget-friendly moving services without sacrificing quality. Transparent pricing, no hidden fees. WSIB certified and fully insured."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do affordable movers charge in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Affordable movers in Ottawa typically charge between $99 and $149 per hour for a two-person crew with a truck. At Prestige Moving, our rates are competitive and transparent — you receive a detailed quote upfront with no hidden fees, fuel surcharges, or surprise stair charges. The final cost depends on factors like home size, distance, and time of year."
        }
      },
      {
        "@type": "Question",
        "name": "Are cheap movers reliable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not all cheap movers are reliable, which is why it's important to choose affordable movers who are also licensed, insured, and well-reviewed. Prestige Moving offers budget-friendly rates backed by WSIB certification, comprehensive insurance, and 337+ five-star reviews. We prove that affordable doesn't have to mean low quality."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer discounts for students or seniors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Prestige Moving offers special discounts for students and seniors in Ottawa. We also provide reduced rates for mid-week and off-season moves. Contact us at (613) 600-4000 to learn about current promotions and how you can save on your upcoming move."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in the price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our affordable moving rates include a professional crew, a fully equipped moving truck, furniture blankets and padding, basic disassembly and reassembly of standard furniture, floor and doorway protection, and full insurance coverage. There are no hidden fees — the price we quote is the price you pay."
        }
      },
      {
        "@type": "Question",
        "name": "How can I reduce my moving costs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reduce moving costs by booking during off-peak times (mid-week or winter months), decluttering before your move to reduce volume, packing your own boxes, being organized on moving day to minimize labour time, and getting multiple quotes to compare. Prestige Moving also offers free consultations to help you plan the most cost-effective move."
        }
      }
    ]
  };

  const stats = [
    { icon: ThumbsUp, value: "$0", label: "Hidden Fees" },
    { icon: Star, value: "337+", label: "Five-Star Reviews" },
    { icon: Shield, value: "100%", label: "Insured Moves" },
    { icon: Clock, value: "24hr", label: "Quote Response" }
  ];

  const processSteps = [
    { icon: Phone, title: "Get Your Free Quote", description: "Call (613) 600-4000 or fill out our online form. We provide a detailed, transparent quote with no hidden fees or obligations." },
    { icon: Calendar, title: "Choose Your Date", description: "Pick a date that works for you. Save even more by booking a mid-week or off-season slot for the best affordable rates in Ottawa." },
    { icon: TruckIcon, title: "Professional Move Day", description: "Our trained, insured crew arrives on time with a fully equipped truck, protective blankets, and all the tools needed for a smooth, budget-friendly move." },
    { icon: CheckCircle2, title: "Settle In Stress-Free", description: "We place everything exactly where you want it, reassemble furniture, and make sure you're completely satisfied before we leave." }
  ];

  const faqs = [
    {
      question: "How much do affordable movers charge in Ottawa?",
      answer: "Affordable movers in Ottawa typically charge between $99 and $149 per hour for a two-person crew with a truck, though rates vary depending on the season, day of the week, and specifics of the move. At Prestige Moving, we pride ourselves on offering some of the most competitive rates in the Ottawa market while maintaining the highest standards of service. Our transparent pricing model means you receive a detailed, itemized quote before your move, with no hidden fees, fuel surcharges, mileage charges, or surprise stair fees. Whether you're moving a one-bedroom apartment in Centretown or a four-bedroom house in Barrhaven, we'll provide an honest, affordable estimate that fits your budget. We also offer flat-rate pricing for standard moves, giving you complete certainty about what you'll pay."
    },
    {
      question: "Are cheap movers reliable?",
      answer: "This is one of the most important questions to ask when searching for affordable movers in Ottawa. The truth is, not all cheap movers are reliable — some cut corners on insurance, hire untrained workers, or add hidden charges that make the final bill much higher than the initial quote. That's why it's crucial to choose affordable movers who are also fully licensed, comprehensively insured, and backed by genuine customer reviews. At Prestige Moving, we've built our reputation on proving that affordable and reliable can coexist. With WSIB certification, full liability insurance, 337+ verified five-star reviews, and trained professional crews, we deliver premium-quality moving service at budget-friendly prices. Our customers across Ottawa — from Sandy Hill to Kanata, Gloucester to Stittsville — consistently confirm that you don't have to sacrifice quality to get an affordable move."
    },
    {
      question: "Do you offer discounts for students or seniors?",
      answer: "Absolutely. Prestige Moving is committed to making professional moving services accessible to everyone in Ottawa, which is why we offer special discounted rates for students and seniors. University of Ottawa and Carleton University students can take advantage of our student moving packages, which are designed for smaller moves on tighter budgets. Our senior discounts provide reduced rates for elderly residents who are downsizing or transitioning to assisted living facilities. In addition to these dedicated discounts, we offer reduced rates for mid-week moves (Tuesday through Thursday) and off-season moves (November through March), which can save you 15-25% compared to peak weekend rates. Contact us at (613) 600-4000 or email Ottawa@prestigemoving.ca to learn about current promotions."
    },
    {
      question: "What's included in the price?",
      answer: "When you book affordable movers with Prestige Moving in Ottawa, your quote includes everything you need for a successful move: a professional, background-checked crew; a fully equipped moving truck with ample space; furniture blankets, padding, and stretch wrap for protection; basic disassembly and reassembly of standard furniture items like beds, tables, and shelving units; floor runners and doorway protectors at both locations; and comprehensive insurance coverage for your peace of mind. There are absolutely no hidden fees — no fuel surcharges, no mileage charges, no stair fees, no long-carry charges, and no surprise add-ons. The transparent quote we provide is exactly what you pay. This all-inclusive approach is what makes Prestige Moving the most trusted affordable movers in Ottawa."
    },
    {
      question: "How can I reduce my moving costs?",
      answer: "There are several proven strategies to reduce your moving costs in Ottawa. First, schedule your move during off-peak times — mid-week moves (Tuesday, Wednesday, Thursday) and winter months (November through March) offer the lowest rates. Second, declutter before your move by donating, selling, or discarding items you no longer need — fewer items mean less truck space and less labour time. Third, pack your own boxes using supplies from local stores or our affordable packing supply options. Fourth, be organized on moving day — have everything packed, labelled, and ready to go when the crew arrives, as this minimizes the hours billed. Fifth, disassemble furniture yourself if you're comfortable doing so. And finally, get multiple quotes to compare, though remember to evaluate on value, not just price. At Prestige Moving, we offer free consultations where our team can advise you on the most cost-effective approach for your specific move anywhere in Ottawa."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Affordable Movers Ottawa | Budget-Friendly Moving | Prestige Moving</title>
        <meta name="description" content="Looking for affordable movers in Ottawa? Prestige Moving offers budget-friendly moving services with transparent pricing and no hidden fees. WSIB certified, fully insured. Call (613) 600-4000." />
        <meta name="keywords" content="affordable movers ottawa, cheap movers ottawa, budget movers ottawa, low cost movers ottawa, affordable moving company ottawa, cheap moving services ottawa, budget friendly movers ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/affordable-movers-ottawa" />
        <meta property="og:title" content="Affordable Movers Ottawa | Budget-Friendly Moving | Prestige Moving" />
        <meta property="og:description" content="Budget-friendly moving services in Ottawa with transparent pricing. No hidden fees, fully insured, 337+ five-star reviews. Get your free quote today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/affordable-movers-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Affordable movers in Ottawa - Prestige Moving budget-friendly service" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Affordable Movers in Ottawa — Quality Without the High Price</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">Transparent pricing, no hidden fees, and professional service that fits your budget. Discover why Ottawa families trust Prestige Moving for affordable relocations.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote</Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Affordable Moving" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Choose Affordable Movers in Ottawa Who Don't Cut Corners</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Finding affordable movers in Ottawa can feel like navigating a minefield. Every company claims to offer the lowest prices, but many hide the true cost behind fuel surcharges, stair fees, long-carry charges, and other surprise add-ons that inflate your final bill well beyond the initial quote. At Prestige Moving, we believe affordable moving should mean exactly what it says — professional, reliable service at a price that respects your budget, with complete transparency from the first phone call to the final box placed in your new home. Our commitment to honest, upfront pricing has earned us 337+ five-star reviews from families, students, and professionals across Ottawa, from the charming streets of The Glebe and Old Ottawa South to the growing communities of Findlay Creek and Riverside South.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What makes Prestige Moving the top choice for affordable movers in Ottawa is our unique combination of competitive rates and uncompromising quality. We don't cut corners to offer low prices — we operate efficiently. Our experienced crews know how to pack a truck strategically, protecting your belongings while maximizing space. Our well-maintained fleet reduces breakdown delays. Our streamlined booking process eliminates unnecessary administrative overhead. These operational efficiencies translate directly into savings we pass on to you, making us genuinely affordable movers in Ottawa who deliver the same premium service that clients in Westboro, Hintonburg, and Rockcliffe Park have come to expect from a top-rated moving company.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Transparent Pricing: Know Exactly What You're Paying</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The cornerstone of our affordable moving service in Ottawa is absolute pricing transparency. When you request a quote from Prestige Moving, we provide a comprehensive, itemized breakdown that covers every aspect of your move — labour, truck, equipment, protection materials, and travel time. There are no hidden fees lurking in the fine print. No fuel surcharges added at the end. No stair fees that magically appear on moving day. No long-carry charges that inflate your bill. The price we quote is the price you pay, period. This transparent approach has made us the most trusted affordable movers in Ottawa, serving families in neighbourhoods from Kanata and Stittsville in the west to Orleans and Cumberland in the east. We believe that when you're budgeting for a move, you deserve to know exactly what you're spending — and that's precisely what we deliver.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Budget-Friendly Moving Tips from Ottawa's Trusted Movers</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              As experienced affordable movers in Ottawa, we've helped thousands of families save money on their moves, and we're happy to share our best budget-friendly tips. First, timing matters enormously — booking your move on a Tuesday, Wednesday, or Thursday rather than a weekend can save you 15-20%, and moving during the off-season (November through March) offers the deepest discounts. Second, decluttering before your move is one of the most effective ways to reduce costs — every item you donate, sell, or discard means less weight, less truck space, and less labour time, all of which directly impact your final bill. Third, packing your own belongings can significantly cut costs, though we do offer affordable packing services if you'd prefer professional handling. Fourth, be fully prepared on moving day — when everything is boxed, labelled, and staged near the door, our crew can work more efficiently, reducing the total hours billed.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              For students at the University of Ottawa, Carleton University, or Algonquin College, we offer dedicated student moving packages that provide all the essentials at a fraction of the cost. These packages are designed for studio and one-bedroom apartments common in Sandy Hill, Centretown, and the Byward Market area. We also provide senior discounts for elderly Ottawa residents who are downsizing from family homes in established neighbourhoods like Alta Vista, Manor Park, and Hunt Club to smaller apartments or retirement communities. At Prestige Moving, we believe everyone deserves access to affordable movers in Ottawa who treat their belongings with care and respect — regardless of their budget.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Value vs. Price: Why the Cheapest Quote Isn't Always the Best Deal</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              While searching for affordable movers in Ottawa, it's tempting to simply choose the lowest quote. However, our experience serving thousands of Ottawa families has shown that the cheapest option often ends up being the most expensive. Unlicensed, uninsured movers who quote rock-bottom prices may lack proper training, leading to damaged furniture and belongings. They may add hidden charges on moving day when you have no choice but to pay. They may not carry insurance, leaving you responsible for any damage or injuries. At Prestige Moving, our affordable rates are backed by WSIB certification, comprehensive liability insurance, trained and background-checked crews, modern equipment, and a satisfaction guarantee. When you factor in the protection, professionalism, and peace of mind included in our pricing, we offer the best value of any moving company in Ottawa — from Nepean and Bells Corners to Gloucester and Blackburn Hamlet.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Affordable Moving Process Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Affordable Movers in Ottawa</h2>
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

        <SeoKeywordsSection currentPage="/affordable-movers-ottawa" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get an Affordable Moving Quote Today</h2>
            <p className="text-white/80 text-lg mb-8">Transparent pricing, no hidden fees, and professional service that fits your budget. Request your free quote now.</p>
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