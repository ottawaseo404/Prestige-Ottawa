import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, Calendar, Package, Home, Building2, BoxSelect, Frame } from "lucide-react";
import heroImage from "@assets/images/seo-custom-crating.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function CustomCratingOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "https://schema.org/ProfessionalService",
    "name": "Prestige Moving - Custom Crating Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/custom-crating-ottawa",
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
    "description": "Professional custom crating and specialty packaging in Ottawa. Protect artwork, antiques, electronics, and fragile items with white-glove service. WSIB certified."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does custom crating cost in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom crating costs depend on the size, weight, fragility, and value of the item being crated. Small items such as framed artwork or electronics typically start around $150-$300. Larger items like sculptures, antique furniture, or medical equipment can range from $400 to $1,500+. We provide free assessments and detailed quotes. Call (613) 600-4000."
        }
      },
      {
        "@type": "Question",
        "name": "What items need custom crating?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Items that benefit from custom crating include original artwork and paintings, sculptures, antique furniture, large mirrors and glass panels, medical and laboratory equipment, electronics and servers, trade show displays, musical instruments, chandeliers, and any item that is fragile, irregularly shaped, or exceptionally valuable."
        }
      },
      {
        "@type": "Question",
        "name": "What materials do you use for custom crates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use high-quality materials including kiln-dried lumber for structural integrity, acid-free tissue and glassine paper for artwork, closed-cell polyethylene foam for cushioning, foam-in-place technology for custom-fit protection, anti-static materials for electronics, and climate barrier wrapping for humidity-sensitive items. Every crate is built to withstand the rigours of transportation."
        }
      },
      {
        "@type": "Question",
        "name": "Can you crate items for international shipping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we build crates that comply with international shipping standards including ISPM 15 requirements for heat-treated wood. Our international crating service is designed for ocean freight, air cargo, and overland transport. We handle all the documentation and can coordinate with shipping companies to ensure your items arrive safely at their global destination."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer on-site crating services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. For items that are too large, fragile, or valuable to transport to our facility, we offer on-site custom crating. Our team arrives at your location with all necessary materials and tools, builds the crate around the item on-site, and handles safe loading and transport. This is ideal for large artwork, installed sculptures, chandeliers, and heavy equipment."
        }
      }
    ]
  };

  const stats = [
    { icon: Star, value: "350+", label: "Five-Star Reviews" },
    { icon: Shield, value: "Zero", label: "Damage Claims" },
    { icon: Clock, value: "24-48hr", label: "Turnaround" },
    { icon: Package, value: "100%", label: "Fully Insured" }
  ];

  const processSteps = [
    { icon: Phone, title: "Assessment", description: "We evaluate your item's size, weight, fragility, and value. We discuss your transport requirements and provide a detailed quote." },
    { icon: Frame, title: "Custom Design", description: "Our team designs a crate specifically for your item, selecting the optimal materials and cushioning for maximum protection." },
    { icon: BoxSelect, title: "Build & Pack", description: "We construct the custom crate, carefully secure your item with professional packaging materials, and seal it for transport." },
    { icon: TruckIcon, title: "Safe Transport", description: "Your crated item is loaded using proper equipment and transported in our air-ride suspension trucks to its destination." }
  ];

  const faqs = [
    {
      question: "How much does custom crating cost in Ottawa?",
      answer: "Custom crating costs in Ottawa vary based on the size, weight, fragility, and value of the item being protected. For smaller items such as framed artwork, mirrors, or electronics, crating typically starts at $150 to $300 per piece. Medium-sized items like sculptures, delicate antique chairs, or specialized equipment generally range from $300 to $600. Larger and more complex items — including oversized paintings, antique cabinets, chandeliers, medical equipment, and trade show displays — can range from $600 to $1,500 or more depending on the materials and engineering required. We always provide a free assessment and detailed quote before any work begins, so you know exactly what to expect. Our pricing covers materials, construction, professional packing, and quality inspection. Call (613) 600-4000 for your free custom crating estimate."
    },
    {
      question: "What items need custom crating?",
      answer: "Custom crating is recommended for any item that is fragile, valuable, irregularly shaped, or requires extra protection beyond standard moving boxes and wrapping. Common items that benefit from custom crating include original artwork and paintings (especially oil on canvas or works with ornate frames), sculptures and three-dimensional art, antique furniture with delicate details or veneer, large mirrors and glass panels, medical and laboratory equipment, electronic servers and sensitive technology, trade show displays and exhibit materials, musical instruments such as harps and harpsichords, chandeliers and decorative light fixtures, marble and stone pieces, and high-value collectibles. If you're unsure whether your item needs custom crating, our team can perform a free assessment and recommend the best protection approach."
    },
    {
      question: "What materials do you use for custom crates?",
      answer: "We use only the highest quality materials in our custom crate construction to ensure maximum protection for your valuables. Our structural components are built from kiln-dried lumber that provides strength while being lightweight and moisture-resistant. For artwork and paper-based items, we use acid-free tissue paper, glassine sheets, and museum-quality wrapping materials that prevent chemical interaction with delicate surfaces. Interior cushioning includes closed-cell polyethylene foam cut to precise specifications, foam-in-place technology that creates a custom-fit mould around irregularly shaped items, and high-density foam blocks for impact absorption. For electronics and sensitive equipment, we use anti-static materials and climate barrier wrapping to protect against humidity and temperature fluctuations. Every crate is built to withstand the vibration, impact, and handling stresses of professional transportation."
    },
    {
      question: "Can you crate items for international shipping?",
      answer: "Yes, Prestige Moving builds custom crates that fully comply with international shipping standards, making them suitable for ocean freight, air cargo, and overland transport across borders. Our international crating meets ISPM 15 (International Standards for Phytosanitary Measures) requirements, which means we use heat-treated wood that is certified and stamped for international transit. This is mandatory for shipping wooden packaging materials to most countries worldwide. We design our international crates to withstand the additional handling and environmental conditions associated with long-distance shipping, including stacking pressure during container loading, humidity variations during ocean transit, and altitude and pressure changes during air freight. We can also coordinate with international shipping companies and customs brokers to ensure your crated items clear customs smoothly."
    },
    {
      question: "Do you offer on-site crating services?",
      answer: "Yes, on-site custom crating is one of our most valuable services for items that are too large, too fragile, or too valuable to transport uncrated to our workshop. Our team arrives at your Ottawa location with all the necessary materials, tools, and equipment to build the crate directly around the item. This is particularly common for large-scale artwork, installed sculptures, chandeliers that need to be carefully removed from ceilings, heavy antique furniture, and medical or industrial equipment that is already in place. On-site crating eliminates the risk associated with transporting an unprotected item to a separate facility. Our crating specialists work carefully in your space, protecting floors and walls during the process, and the finished crate is then loaded directly onto our truck for safe transport. This service is available across all Ottawa neighbourhoods and surrounding communities."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Custom Crating Ottawa | Specialty Packaging Service | Prestige</title>
        <meta name="description" content="Professional custom crating & packaging in Ottawa. Protect artwork, antiques, electronics & fragile items. White-glove service. WSIB certified. Call (613) 600-4000" />
        <meta name="keywords" content="custom crating ottawa, crating service ottawa, custom packaging ottawa, art crating ottawa, specialty packaging ottawa, fragile item packaging ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/custom-crating-ottawa" />
        <meta property="og:title" content="Custom Crating Ottawa | Specialty Packaging Service" />
        <meta property="og:description" content="Professional custom crating and packaging in Ottawa. Museum-quality protection for artwork, antiques, electronics. WSIB certified. Free assessment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/custom-crating-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Crating Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="Specialty custom crating and packaging in Ottawa. Protect your valuables. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Professional custom crating and packaging service in Ottawa protecting artwork and antiques" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Custom Crating & Packaging in Ottawa</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">Museum-quality custom crates for artwork, antiques, electronics, and fragile items. White-glove protection for your most valuable possessions.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Assessment <ArrowRight className="h-4 w-4 ml-2" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Specialty Item Moving" serviceName="Custom Crating" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Ottawa Collectors Trust Our Custom Crating Ottawa Service</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              When you own artwork, antiques, electronics, or other high-value items that need to be moved or shipped, standard moving boxes and bubble wrap simply aren't enough. <strong className="text-[#1A2332]">Custom crating in Ottawa</strong> provides the highest level of protection available — engineered specifically for your item's unique dimensions, weight, fragility, and value. Prestige Moving's custom crating service delivers museum-quality protection using professional-grade materials, precision construction, and decades of expertise in handling the most delicate and valuable possessions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our <strong className="text-[#1A2332]">custom crating Ottawa</strong> specialists have protected everything from priceless original paintings and antique furniture to medical imaging equipment and trade show displays. Every crate is built to order using kiln-dried lumber, closed-cell foam, acid-free materials, and climate barrier wrapping. We never use a one-size-fits-all approach — each crate is designed and constructed specifically for the item it will protect. This precision engineering is what sets professional custom crating apart from standard packaging, and it's why galleries, museums, collectors, and businesses across Ottawa trust Prestige Moving with their most valuable assets.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Art & Antique Custom Crating Ottawa</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Artwork and antiques require specialized handling that accounts for their unique vulnerabilities. Oil paintings can crack if flexed, gilded frames can chip if bumped, and antique wood can split from vibration or humidity changes. Our <Link href="/services/antique-moving" className="text-[#C5A572] hover:underline">antique moving</Link> and custom crating team uses acid-free tissue, glassine paper, and museum-quality wrapping materials that won't chemically interact with paint, varnish, or patina. We build floating crate systems that suspend the item within the crate using custom-cut foam, preventing contact with the crate walls and absorbing shock from all directions. For sculptures and three-dimensional pieces, we create form-fitting cradles that support the item at its strongest structural points.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Whether you're a collector relocating your collection, a gallery shipping artwork for an exhibition, or a homeowner moving a cherished family heirloom, our art crating service ensures your pieces arrive in perfect condition. We also work with <Link href="/services/specialty-item-moving" className="text-[#C5A572] hover:underline">specialty item movers</Link> for items like chandeliers, marble sculptures, and oversized installations that require coordinated crating and transport. Our trucks feature air-ride suspension to minimize vibration during transit, and we maintain secure, <a href="https://ottawa.ca/en/living-ottawa" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">climate-appropriate</a> environments for temperature-sensitive items.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Commercial & Trade Show Custom Crating Ottawa</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Businesses in Ottawa rely on our custom crating for shipping sensitive equipment, trade show displays, medical devices, and electronic systems. We build reusable crates for trade show exhibitors who need their displays protected during repeated shipping cycles. For medical and laboratory equipment, we engineer crates with anti-static materials, vibration dampening systems, and moisture barriers that protect sensitive instruments during transit. Our <Link href="/services/piano-moving" className="text-[#C5A572] hover:underline">piano moving team</Link> also uses custom crating solutions for concert grand pianos and historical instruments that require the highest level of care.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every crate we build meets or exceeds industry standards, and our international crating complies with ISPM 15 requirements for heat-treated wood. We serve businesses across all Ottawa neighbourhoods including <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link>, and beyond. Our entire team is <a href="https://www.wsib.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">WSIB certified</a> and fully insured, providing complete peace of mind for every project. Call <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a> for your free custom crating assessment.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Custom Crating Ottawa Process Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Custom Crating Ottawa</h2>
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

        <SeoKeywordsSection currentPage="/custom-crating-ottawa" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Custom Crating in Ottawa?</h2>
            <p className="text-white/80 text-lg mb-8">Get your free assessment today. Museum-quality protection for artwork, antiques, and fragile items.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book"><Button className="bg-[#1A2332] hover:bg-[#243044] text-white border-[#1A2332]" data-testid="button-cta-quote">Get Free Assessment</Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-cta-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>
      </div>
      <SharedFooter />
    </>
  );
}
