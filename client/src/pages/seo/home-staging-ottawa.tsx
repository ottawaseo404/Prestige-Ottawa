import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, Calendar, Package, Home, Building2, Sofa, Frame } from "lucide-react";
import heroImage from "@assets/images/seo-home-staging.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function HomeStagingOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "https://schema.org/ProfessionalService",
    "name": "Prestige Moving - Home Staging Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/home-staging-ottawa",
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
      { "@type": "Place", "name": "Ottawa" },
      { "@type": "Place", "name": "Barrhaven" },
      { "@type": "Place", "name": "Kanata" },
      { "@type": "Place", "name": "Orleans" },
      { "@type": "Place", "name": "Nepean" },
      { "@type": "Place", "name": "Gloucester" }
    ],
    "description": "Professional home staging services in Ottawa. Maximize your home's sale price with expert staging, furniture placement, and styling. WSIB certified."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does home staging cost in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Home staging costs in Ottawa vary based on the size of the home and the level of staging required. A consultation starts at $150-$300, while full staging for a vacant home typically ranges from $2,000 to $5,000 per month including furniture rental. Occupied staging with rearrangement and accessories is usually $500-$1,500. Call (613) 600-4000 for a personalized quote."
        }
      },
      {
        "@type": "Question",
        "name": "What is the ROI of home staging?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to the Real Estate Staging Association, staged homes sell 73% faster and for 5-20% more than unstaged homes. In Ottawa's competitive real estate market, professional staging helps your property stand out in listings, generate more showings, and attract stronger offers. The return on investment typically far exceeds the cost of staging."
        }
      },
      {
        "@type": "Question",
        "name": "How long does home staging take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical home staging project in Ottawa takes 1-3 days from consultation to completion. The initial consultation takes about 1-2 hours, followed by a design plan. For vacant homes, furniture delivery and setup is usually completed in one day. Occupied staging with decluttering and rearrangement can be done in a single day for most homes."
        }
      },
      {
        "@type": "Question",
        "name": "Do you stage furnished or vacant homes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We stage both furnished and vacant homes. For occupied homes, we work with your existing furniture, rearranging pieces, removing clutter, and adding accessories to create a polished look. For vacant homes, we bring in a complete furniture and decor package including sofas, beds, dining sets, artwork, rugs, and accessories to help buyers envision themselves living there."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in your home staging service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our home staging service includes an initial consultation, a customized design plan, furniture placement and rearrangement, decor and accessory styling, artwork and mirror placement, lighting optimization, curb appeal recommendations, and photography preparation. For vacant homes, we also provide furniture rental, delivery, setup, and removal after the home sells."
        }
      }
    ]
  };

  const stats = [
    { icon: Star, value: "350+", label: "Five-Star Reviews" },
    { icon: Home, value: "500+", label: "Homes Staged" },
    { icon: Clock, value: "73%", label: "Faster Sales" },
    { icon: Shield, value: "100%", label: "Fully Insured" }
  ];

  const processSteps = [
    { icon: Phone, title: "Consultation", description: "We visit your home, assess its potential, and discuss your goals. We'll recommend the best staging approach for your property and budget." },
    { icon: Frame, title: "Design Plan", description: "Our team creates a customized staging plan with furniture placement, decor selections, and styling recommendations tailored to your home." },
    { icon: Sofa, title: "Stage Your Home", description: "We transform your space with expert furniture placement, accessories, artwork, and styling that appeals to today's Ottawa home buyers." },
    { icon: CheckCircle2, title: "Sell Faster", description: "Your professionally staged home is ready for photography, listings, and showings — positioned to sell faster and for a higher price." }
  ];

  const faqs = [
    {
      question: "How much does home staging cost in Ottawa?",
      answer: "Home staging costs in Ottawa vary based on the size of your home, whether it's vacant or occupied, and the level of staging required. An initial consultation typically costs between $150 and $300, during which our staging expert assesses your home and provides recommendations. For occupied homes, a staging day that includes decluttering guidance, furniture rearrangement, and accessory styling usually ranges from $500 to $1,500. For vacant homes requiring furniture rental, full staging packages typically range from $2,000 to $5,000 per month, which includes furniture delivery, setup, styling, and removal after the home sells. The investment in staging consistently delivers a strong return — most homeowners see a 5-20% increase in their sale price compared to similar unstaged properties. Call us at (613) 600-4000 for a personalized staging quote."
    },
    {
      question: "What is the ROI of home staging?",
      answer: "The return on investment for home staging is consistently strong in Ottawa's real estate market. According to the Real Estate Staging Association, professionally staged homes sell 73% faster than unstaged properties. In terms of sale price, staged homes typically sell for 5-20% more than comparable unstaged homes. In Ottawa's market, where the average home price exceeds $600,000, even a 5% increase represents $30,000 or more in additional value — far exceeding the cost of staging. Beyond the financial returns, staging reduces your carrying costs by shortening the time your home sits on the market. Fewer months of mortgage payments, property taxes, insurance, and utility costs add up quickly. Staging also reduces the likelihood of price reductions, which can signal to buyers that something is wrong with the property."
    },
    {
      question: "How long does home staging take?",
      answer: "A typical home staging project in Ottawa is completed within one to three days from consultation to finished staging. The initial consultation takes approximately one to two hours, during which our stager walks through your home, takes measurements, and discusses your timeline and budget. We then develop a customized design plan, which is usually ready within 24-48 hours. For occupied homes, the actual staging work — which includes decluttering guidance, furniture rearrangement, and accessory placement — can typically be completed in a single day. For vacant homes requiring furniture rental and full setup, delivery and installation is usually completed in one day. We coordinate our schedule with your real estate agent to ensure the home is staged and photographed before it hits the market."
    },
    {
      question: "Do you stage furnished or vacant homes?",
      answer: "We provide professional staging for both furnished and vacant homes in Ottawa. For occupied or furnished homes, our approach focuses on working with your existing furniture and belongings. We strategically rearrange pieces, remove visual clutter, add complementary accessories and artwork, and optimize each room to showcase its best features. This is often the most cost-effective staging option for homeowners who are still living in the property. For vacant homes, we bring in a complete staging package that includes sofas, beds, dining sets, accent chairs, coffee tables, artwork, rugs, lamps, decorative accessories, and even bedding and towels. Vacant home staging is particularly impactful because empty rooms can feel cold and small to buyers — furniture and decor help them visualize the space as a livable home."
    },
    {
      question: "What is included in your home staging service?",
      answer: "Our comprehensive home staging service includes everything you need to present your home in its best light. The service begins with an in-home consultation where we assess your property and develop a customized staging plan. For occupied homes, this includes decluttering recommendations, furniture rearrangement, accessory and artwork placement, lighting adjustments, and curb appeal suggestions. For vacant homes, we provide furniture rental from our curated inventory, delivery, professional setup and styling, and removal after your home sells. All staging packages include photography preparation to ensure your listing photos look stunning. We also offer specific services such as paint colour consultations, minor repair recommendations, and coordination with your real estate agent. Our goal is to make your home irresistible to buyers from the moment they see the listing photos to the moment they walk through the front door."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Home Staging Ottawa | Professional Staging Service | Prestige</title>
        <meta name="description" content="Professional home staging in Ottawa. Maximize your home's sale price with expert staging. Furniture placement, decor & styling. WSIB certified. Call (613) 600-4000" />
        <meta name="keywords" content="home staging ottawa, ottawa home staging, staging service ottawa, real estate staging ottawa, furniture staging ottawa, house staging ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/home-staging-ottawa" />
        <meta property="og:title" content="Home Staging Ottawa | Professional Staging Service" />
        <meta property="og:description" content="Maximize your home's sale price with professional staging. Expert furniture placement, decor and styling. WSIB certified. Free consultation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/home-staging-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Staging Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="Professional home staging in Ottawa. Sell faster and for more. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Professional home staging service in Ottawa preparing a beautiful living room for sale" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Professional Home Staging in Ottawa</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">Sell your home faster and for more. Expert furniture placement, decor styling, and photography preparation that makes buyers fall in love.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Consultation <ArrowRight className="h-4 w-4 ml-2" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Other" serviceName="Home Staging" />

        <section className="bg-[#1A2332] py-8">
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

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Ottawa Sellers Choose Our Home Staging Ottawa Service</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In Ottawa's competitive real estate market, first impressions can mean the difference between a quick sale at asking price and months of sitting on the market. <strong className="text-[#1A2332]">Home staging in Ottawa</strong> is one of the most effective strategies sellers can use to maximize their property's appeal and sale price. Prestige Moving's professional staging team transforms ordinary spaces into aspirational homes that generate more showings, attract stronger offers, and sell significantly faster than unstaged properties.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our <strong className="text-[#1A2332]">Ottawa home staging</strong> approach is rooted in understanding what today's buyers are looking for. We study the local market, analyze comparable sales in your neighbourhood, and design a staging plan that highlights your home's best features while addressing potential concerns. Whether you're selling a family home in <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, a townhouse in <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, or a condo in <Link href="/movers-in-westboro" className="text-[#C5A572] hover:underline">Westboro</Link>, our staging creates an emotional connection between buyers and your home from the very first listing photo.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Vacant Home Staging Ottawa — Bring Empty Spaces to Life</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Vacant homes present a unique challenge for sellers. Empty rooms look smaller than they are, echo with every footstep, and make it difficult for buyers to envision how their furniture and lifestyle would fit. Our vacant home staging service solves this completely. We furnish key rooms — typically the living room, master bedroom, dining area, and one or two additional spaces — with carefully selected furniture and accessories that create a warm, inviting atmosphere. Our curated inventory includes modern sofas, bed frames with premium bedding, dining tables with place settings, artwork, area rugs, lamps, plants, and decorative accessories. The result is a home that photographs beautifully for listings and makes a lasting impression during showings.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              According to the <a href="https://www.orea.com/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">Ontario Real Estate Association</a>, homes that are professionally staged sell for an average of 6-10% more than unstaged comparable properties. For a home priced at $700,000, that's $42,000 to $70,000 in additional value — a remarkable return on a staging investment that typically costs a fraction of that amount. We also coordinate with your real estate agent to ensure staging is complete before listing photos are taken, maximizing the impact of your online presence.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Occupied Home Staging Ottawa — Optimize What You Have</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              For homeowners still living in their property during the sale process, our occupied staging service works with your existing furniture and belongings to present your home in its best possible light. Our stager provides professional guidance on decluttering, identifies items that should be packed away or placed into <Link href="/services/storage-solutions" className="text-[#C5A572] hover:underline">temporary storage</Link>, rearranges furniture to optimize room flow and functionality, and adds strategic accessories and artwork to create visual interest. We handle everything from curb appeal improvements to kitchen counter styling to bathroom spa touches.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our staging team works closely with Ottawa's top real estate agents and understands what sells in every neighbourhood across the city. Whether you're listing in <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link>, <Link href="/movers-in-gloucester" className="text-[#C5A572] hover:underline">Gloucester</Link>, <Link href="/movers-in-alta-vista" className="text-[#C5A572] hover:underline">Alta Vista</Link>, or <Link href="/movers-in-riverside-south" className="text-[#C5A572] hover:underline">Riverside South</Link>, we tailor our staging to appeal to the buyer demographics most active in your area. Every team member is <a href="https://www.wsib.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">WSIB certified</a> and we carry full commercial insurance. When you're ready to move, our <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving</Link> and <Link href="/services/packing-services" className="text-[#C5A572] hover:underline">packing services</Link> make the transition seamless. Call <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a> to schedule your staging consultation.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Home Staging Ottawa Process Works</h2>
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

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Home Staging Ottawa</h2>
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

        <SeoKeywordsSection currentPage="/home-staging-ottawa" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Stage Your Ottawa Home?</h2>
            <p className="text-white/80 text-lg mb-8">Book your free staging consultation today. Sell faster and for more with professional home staging.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book"><Button className="bg-[#1A2332] hover:bg-[#243044] text-white border-[#1A2332]" data-testid="button-cta-quote">Get Free Consultation</Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-cta-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>
      </div>
      <SharedFooter />
    </>
  );
}
