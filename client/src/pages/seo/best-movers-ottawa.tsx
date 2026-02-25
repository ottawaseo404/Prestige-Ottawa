import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, ThumbsUp, Calendar, Package, Home, Building2, Mail, Heart } from "lucide-react";
import heroImage from "@assets/images/seo-best-movers.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function BestMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/best-movers-ottawa",
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
    "description": "Rated the best movers in Ottawa with 350+ five-star reviews. Award-winning moving services with satisfaction guarantee. WSIB certified and fully insured."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why are you rated the best movers in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prestige Moving is rated the best movers in Ottawa based on 350+ verified five-star reviews, WSIB certification, comprehensive insurance, transparent pricing, trained professional crews, and a satisfaction guarantee. Our consistent quality across thousands of moves has earned us this reputation."
        }
      },
      {
        "@type": "Question",
        "name": "How many reviews does Prestige Moving have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prestige Moving has over 350 verified five-star reviews across Google, Facebook, and other review platforms. Our average rating is 5.0 out of 5 stars, reflecting consistent excellence across all types of moves in Ottawa."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer a satisfaction guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Prestige Moving offers a comprehensive satisfaction guarantee. If any aspect of your move doesn't meet your expectations, we'll work to make it right immediately. Our transparent pricing means no hidden fees, and our insurance coverage protects your belongings throughout the move."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle complaints?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While complaints are extremely rare, we take every concern seriously. Our team responds within 24 hours, investigates thoroughly, and works to resolve the issue to the customer's complete satisfaction. Our claims process is straightforward and fair."
        }
      },
      {
        "@type": "Question",
        "name": "What do your reviews say about Prestige Moving?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our reviews consistently highlight punctuality, careful handling of belongings, friendly and professional crews, transparent pricing, and stress-free moving experiences. Customers frequently mention how our team exceeded their expectations and how they would recommend us to friends and family."
        }
      }
    ]
  };

  const stats = [
    { icon: Star, value: "5.0", label: "Average Star Rating" },
    { icon: ThumbsUp, value: "350+", label: "Five-Star Reviews" },
    { icon: Award, value: "#1", label: "Rated in Ottawa" },
    { icon: Heart, value: "99%", label: "Would Recommend" }
  ];

  const processSteps = [
    { icon: Phone, title: "Get Your Quote", description: "Reach out online or call (613) 600-4000. We respond within hours with a detailed, honest estimate." },
    { icon: Calendar, title: "Confirm Your Date", description: "Lock in your preferred moving date with flexible scheduling options that suit your timeline." },
    { icon: TruckIcon, title: "Five-Star Service", description: "Our top-rated crew arrives on time, treats your belongings like their own, and delivers an exceptional experience." },
    { icon: Star, title: "Share Your Experience", description: "Join 350+ happy customers who've shared their five-star experiences with the best movers in Ottawa." }
  ];

  const faqs = [
    {
      question: "Why are you rated the best movers in Ottawa?",
      answer: "Our rating as the best movers in Ottawa is backed by 350+ verified five-star reviews from real customers across Google, Facebook, and other trusted review platforms. This reputation has been built through years of consistent excellence across every type of move — from studio apartments in Centretown to large family homes in Kanata and Barrhaven. What makes us the best is our combination of WSIB-certified, background-checked professional crews, transparent pricing with zero hidden fees, comprehensive insurance coverage, modern equipment, and a genuine satisfaction guarantee. We don't just claim to be the best movers in Ottawa — our customers confirm it with their reviews."
    },
    {
      question: "How many reviews does Prestige Moving have?",
      answer: "Prestige Moving has accumulated over 350 verified five-star reviews across major platforms including Google Business Profile, Facebook, and independent review sites. Our average rating stands at a perfect 5.0 out of 5 stars, which is exceptional in the moving industry where even good companies typically average 4.2-4.5 stars. Each review represents a real customer who experienced our service firsthand — from families moving within Ottawa neighbourhoods like Westboro, The Glebe, and Orleans, to businesses relocating offices in Downtown Ottawa. We're proud that our consistent quality has earned such overwhelming positive feedback."
    },
    {
      question: "Do you offer a satisfaction guarantee?",
      answer: "Absolutely. Prestige Moving stands behind every move with a comprehensive satisfaction guarantee. If any aspect of your moving experience doesn't meet your expectations, our team will work immediately to make it right — no questions asked. This guarantee covers everything from the condition of your belongings to the professionalism of our crew and the accuracy of your quote. Additionally, our transparent pricing model ensures the price you're quoted is the price you pay, eliminating one of the most common sources of dissatisfaction with moving companies. Combined with our full insurance coverage and WSIB certification, our satisfaction guarantee gives you complete confidence when choosing the best movers in Ottawa."
    },
    {
      question: "How do you handle complaints?",
      answer: "While complaints are exceptionally rare given our 5.0-star average across 350+ reviews, we take every customer concern with the utmost seriousness. If a customer contacts us with an issue, our dedicated customer service team responds within 24 hours. We investigate the situation thoroughly, communicate openly with the customer throughout the process, and work to reach a resolution that ensures their complete satisfaction. For any claims related to damaged items, we have a straightforward, fair claims process backed by our comprehensive insurance coverage. Our commitment to accountability is one of the reasons Ottawa families consistently rate us as the best movers in the city."
    },
    {
      question: "What do your reviews say about Prestige Moving?",
      answer: "Our reviews paint a consistent picture of excellence across every aspect of the moving experience. The most common themes in our 350+ five-star reviews include: exceptional punctuality — customers repeatedly praise our crews for arriving exactly on time or even early; careful handling — reviewers frequently note how our movers treated their belongings with genuine care, wrapping and protecting everything meticulously; friendly professionalism — our team's courteous, respectful attitude is mentioned in nearly every review; transparent pricing — customers appreciate that their final bill matched their quote with no surprises; and stress-free experiences — many reviewers describe their move as the easiest they've ever had. Customers from across Ottawa — Nepean, Gloucester, Sandy Hill, Hintonburg, and beyond — consistently recommend us as the best movers they've worked with."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best Movers Ottawa | Top-Rated Moving Services | Prestige Moving</title>
        <meta name="description" content="Looking for the best movers in Ottawa? Prestige Moving is rated #1 with 350+ five-star reviews. WSIB certified, fully insured, satisfaction guaranteed. Call (613) 600-4000 for a free quote." />
        <meta name="keywords" content="best movers ottawa, top rated movers ottawa, best moving company ottawa, highest rated movers ottawa, ottawa best movers, top movers ottawa, recommended movers ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/best-movers-ottawa" />
        <meta property="og:title" content="Best Movers Ottawa | Top-Rated Moving Services | Prestige Moving" />
        <meta property="og:description" content="Rated #1 movers in Ottawa with 350+ five-star reviews. Experience the best moving service with our satisfaction guarantee. Get your free quote today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/best-movers-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Best movers in Ottawa - Prestige Moving team delivering five-star service" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Why We're Rated the Best Movers in Ottawa</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">350+ five-star reviews, a perfect 5.0 rating, and thousands of successful moves — discover why Ottawa families choose Prestige Moving.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote</Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Top-Rated Moving" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">What Makes the Best Movers in Ottawa?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              When Ottawa residents search for the best movers in the city, they're looking for more than just a truck and some muscle. The best movers combine professional expertise, transparent business practices, genuine care for customers, and a proven track record of excellence that's backed by real reviews from real people. At Prestige Moving, we've earned the distinction of being rated the best movers in Ottawa through 350+ verified five-star reviews, a perfect 5.0-star average rating, and a commitment to delivering an exceptional experience on every single move. Whether you're relocating from a cozy apartment in The Glebe to a family home in Barrhaven, or moving your office from Downtown Ottawa to a new space in Kanata, our team consistently delivers the calibre of service that has made us the most recommended movers in the National Capital Region.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Being rated the best movers in Ottawa isn't something we take lightly. It's a distinction that requires daily commitment to excellence from every member of our team. From the moment you call for a quote to the final box placed in your new home, every interaction is designed to exceed your expectations. Our transparent pricing eliminates the anxiety of surprise charges, our WSIB certification and comprehensive insurance give you complete peace of mind, and our trained, background-checked crews deliver the careful, efficient service that has earned us more five-star reviews than any other moving company in Ottawa.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">350+ Five-Star Reviews: What Our Customers Say</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Numbers tell a powerful story, and with 350+ verified five-star reviews, ours speaks volumes. But beyond the star count, it's the words our customers use that truly illustrate why Prestige Moving is rated the best movers in Ottawa. Reviewers consistently highlight how our crews arrived on time or even early, treated their belongings with exceptional care, communicated clearly throughout the process, and completed the move faster than expected. Families from Nepean describe how our movers carefully handled heirloom furniture, while customers in Orleans praise the efficiency with which we managed their three-storey home move. Business owners in Downtown Ottawa note how our commercial moving team minimized their office downtime, and seniors in Rockcliffe Park share how our compassionate crew made their downsizing transition stress-free.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What's particularly notable about our reviews is their consistency. Unlike some moving companies that have a mix of glowing and critical reviews, Prestige Moving maintains a 5.0-star average — meaning virtually every customer rates us at the highest level. This kind of consistency doesn't happen by accident. It's the result of a company culture built around customer satisfaction, professional standards, and the belief that every customer deserves the same outstanding experience regardless of the size or complexity of their move. When you see 350+ reviews all saying the same thing — "the best movers in Ottawa" — you can trust that you'll receive that same level of service.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">How to Choose the Best Movers: A Comparison Guide</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Choosing the best movers in Ottawa requires evaluating several key criteria, and we encourage potential customers to do their homework. Here's what separates the best from the rest: First, look at review volume and quality — a company with hundreds of five-star reviews demonstrates consistent performance, not a one-time lucky move. Second, verify licensing and insurance — the best movers carry WSIB certification and comprehensive liability coverage. Third, demand transparent pricing — the best movers in Ottawa provide detailed quotes with no hidden fees, fuel surcharges, or surprise stair charges. Fourth, evaluate the team's professionalism — background checks, training programs, and uniformed crews indicate a company that invests in its people. Fifth, ask about equipment — modern trucks with air-ride suspension, professional-grade dollies, and comprehensive protection materials show a commitment to quality.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              When you evaluate Prestige Moving against these criteria, you'll understand why we consistently rank as the best movers in Ottawa. Our 350+ five-star reviews (5.0 average) far exceed the industry standard. Our WSIB certification and full insurance coverage are always current and verifiable. Our pricing is the most transparent in Ottawa — what we quote is what you pay, period. Every crew member is background-checked, professionally trained, and arrives in a clean Prestige Moving uniform. And our fleet of modern, well-maintained trucks equipped with air-ride suspension represents one of the finest in the region. We invite you to compare us with any other moving company in Ottawa — we're confident in the result.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Our Satisfaction Guarantee: Backing Our Reputation</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Being the best movers in Ottawa means standing behind our work with complete confidence. That's why Prestige Moving offers a comprehensive satisfaction guarantee on every move we perform. If any aspect of your moving experience doesn't meet your expectations — from the condition of your belongings to the professionalism of our crew — we commit to making it right immediately. This guarantee, combined with our full insurance coverage, transparent pricing, and WSIB certification, creates a complete package of protection and peace of mind that no other moving company in Ottawa can match. It's our way of saying: we don't just claim to be the best — we prove it on every move, and we guarantee it.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Moving with Ottawa's Best Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About the Best Movers in Ottawa</h2>
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

        <SeoKeywordsSection currentPage="/best-movers-ottawa" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience Why We're Rated #1 in Ottawa</h2>
            <p className="text-white/80 text-lg mb-8">Join 350+ five-star reviewers who agree — Prestige Moving is the best choice for your next move.</p>
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