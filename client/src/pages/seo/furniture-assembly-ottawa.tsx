import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, Calendar, Package, Home, Building2, Wrench } from "lucide-react";
import heroImage from "@assets/images/seo-furniture-assembly.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function FurnitureAssemblyOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "https://schema.org/ProfessionalService",
    "name": "Prestige Moving - Furniture Assembly Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/furniture-assembly-ottawa",
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
    "description": "Professional furniture assembly and disassembly services in Ottawa. IKEA, Wayfair, office furniture, beds, shelving and more. WSIB certified."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does furniture assembly cost in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Furniture assembly pricing varies based on the complexity and number of items. Simple items like nightstands or small shelves start around $40-$60 per piece. Larger items such as beds, wardrobes, and office desks range from $80 to $150. We offer a free estimate before starting any work. Call (613) 600-4000."
        }
      },
      {
        "@type": "Question",
        "name": "Do you assemble IKEA furniture in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, IKEA assembly is one of our most popular services. Our technicians are experienced with all IKEA product lines including PAX wardrobes, KALLAX shelving, MALM dressers, HEMNES beds, and BESTÅ entertainment units. We bring all necessary tools and hardware."
        }
      },
      {
        "@type": "Question",
        "name": "Can you disassemble furniture for a move?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Furniture disassembly is essential for safe moving, and our team handles it expertly. We carefully label and bag all hardware, take photos of complex assemblies for reference, and reassemble everything at your new location. This service pairs perfectly with our residential moving services."
        }
      },
      {
        "@type": "Question",
        "name": "What brands of furniture do you assemble?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We assemble furniture from all major brands and retailers including IKEA, Wayfair, Amazon, Structube, West Elm, CB2, Costco, Canadian Tire, The Brick, Leon's, and more. If it comes in a box with instructions, our team can build it quickly and correctly."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer commercial furniture assembly for offices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide commercial furniture assembly for offices across Ottawa. This includes workstations, cubicles, conference tables, executive desks, filing systems, and reception furniture. We work after hours or on weekends to avoid disrupting your business operations."
        }
      }
    ]
  };

  const stats = [
    { icon: Star, value: "350+", label: "Five-Star Reviews" },
    { icon: Wrench, value: "5,000+", label: "Items Assembled" },
    { icon: Clock, value: "Fast", label: "Same-Week Service" },
    { icon: Shield, value: "100%", label: "Fully Insured" }
  ];

  const processSteps = [
    { icon: Phone, title: "Request Service", description: "Call (613) 600-4000 or fill out our form. Tell us what furniture you need assembled and we'll provide a quick estimate." },
    { icon: Wrench, title: "We Bring Tools", description: "Our technicians arrive with all the professional tools and equipment needed — you don't need to supply anything." },
    { icon: Package, title: "Expert Assembly", description: "We efficiently assemble your furniture following manufacturer instructions, ensuring every piece is sturdy and secure." },
    { icon: CheckCircle2, title: "Quality Check", description: "We inspect every assembled item, test moving parts, clean up all packaging, and make sure you're completely satisfied." }
  ];

  const faqs = [
    {
      question: "How much does furniture assembly cost in Ottawa?",
      answer: "Furniture assembly pricing in Ottawa varies based on the complexity, size, and number of items being assembled. Simple items such as nightstands, small shelving units, or basic side tables typically start around $40 to $60 per piece. Medium-complexity items like standard bed frames, medium bookshelves, or computer desks range from $80 to $120. Larger, more complex pieces — such as PAX wardrobes, wall-mounted entertainment units, or L-shaped office desks — can range from $120 to $200 per item. We always provide a free, transparent estimate before starting any work, so there are no surprises. Volume discounts are available if you have multiple items to assemble. Call us at (613) 600-4000 for your personalized quote."
    },
    {
      question: "Do you assemble IKEA furniture in Ottawa?",
      answer: "Yes, IKEA furniture assembly is one of our most requested services in Ottawa. Our experienced technicians have assembled thousands of IKEA products and are familiar with every product line. We handle PAX wardrobes, KALLAX shelving systems, MALM dressers and bed frames, HEMNES beds and storage, BESTÅ entertainment units, BILLY bookcases, kitchen islands, and much more. We bring all the necessary tools, including specialized bits and drivers that IKEA furniture requires. We also handle the packaging removal and cleanup after assembly, leaving your space clean and organized. If you've purchased IKEA furniture and want it assembled correctly the first time, our team is ready to help."
    },
    {
      question: "Can you disassemble furniture for a move?",
      answer: "Absolutely. Furniture disassembly is an essential step for safe and efficient moving, and our team handles it with expert precision. Before disassembling any piece, we photograph the assembly for reference, carefully label every component, and bag all hardware separately so nothing is lost during transit. At your new location, we reassemble everything exactly as it was. This service pairs seamlessly with our residential moving services — many customers book both together for a complete, stress-free moving experience. Disassembly is particularly important for large items like bed frames, dining tables, sectional sofas, and office furniture that may not fit through doorways when fully assembled."
    },
    {
      question: "What brands of furniture do you assemble?",
      answer: "We assemble furniture from all major brands and retailers sold in Canada. This includes IKEA, Wayfair, Amazon, Structube, West Elm, CB2, Pottery Barn, Restoration Hardware, Costco, Canadian Tire, The Brick, Leon's, EQ3, Article, and many more. Whether it's a flat-pack bookcase from IKEA, a standing desk from Amazon, or a sectional from Wayfair, our technicians have the experience and tools to assemble it quickly and correctly. We also handle gym equipment assembly including treadmills, ellipticals, weight benches, and home gym stations. If it comes in a box with instructions and hardware, we can build it."
    },
    {
      question: "Do you offer commercial furniture assembly for offices?",
      answer: "Yes, we provide comprehensive commercial furniture assembly services for offices, co-working spaces, and businesses throughout Ottawa. Our commercial services include workstation and cubicle assembly, conference tables, executive desks, filing and storage systems, reception desks, break room furniture, and ergonomic chair setup. We understand that setting up a new office space requires efficiency and minimal disruption, which is why we offer after-hours and weekend assembly. Our commercial team can coordinate furniture assembly alongside our office relocation services for a seamless setup experience. We've completed commercial assembly projects for startups, government offices, and large corporations across the National Capital Region."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Furniture Assembly Ottawa | Expert Assembly Service | Prestige</title>
        <meta name="description" content="Professional furniture assembly & disassembly in Ottawa. IKEA, Wayfair, desks, beds, shelving & more. Fast, reliable service. WSIB certified. Call (613) 600-4000" />
        <meta name="keywords" content="furniture assembly ottawa, ikea assembly ottawa, furniture disassembly ottawa, desk assembly ottawa, bed assembly ottawa, shelving assembly ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/furniture-assembly-ottawa" />
        <meta property="og:title" content="Furniture Assembly Ottawa | Expert Assembly Service" />
        <meta property="og:description" content="Professional furniture assembly and disassembly in Ottawa. IKEA, Wayfair, office furniture and more. WSIB certified. Free quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/furniture-assembly-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Furniture Assembly Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="Expert furniture assembly and disassembly in Ottawa. All brands. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Professional furniture assembly service in Ottawa assembling IKEA and office furniture" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Expert Furniture Assembly in Ottawa</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">Professional assembly and disassembly for IKEA, Wayfair, office furniture, and more. We bring the tools, the expertise, and a quality guarantee.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote <ArrowRight className="h-4 w-4 ml-2" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Other" serviceName="Furniture Assembly" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Ottawa Residents Trust Our Furniture Assembly Ottawa Service</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Buying new furniture is exciting — assembling it is not. Whether you've just received a delivery from IKEA, Wayfair, Amazon, or any other retailer, <strong className="text-[#1A2332]">furniture assembly in Ottawa</strong> is our specialty. Prestige Moving's experienced technicians handle everything from simple nightstands and bookshelves to complex PAX wardrobe systems, standing desks, and entertainment units. We arrive with professional-grade tools, assemble your furniture correctly the first time, and leave your space clean and organized.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our <strong className="text-[#1A2332]">furniture assembly Ottawa</strong> service is perfect for homeowners, renters, and businesses across the National Capital Region. We serve all Ottawa neighbourhoods including <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link>, <Link href="/movers-in-nepean" className="text-[#C5A572] hover:underline">Nepean</Link>, <Link href="/movers-in-gloucester" className="text-[#C5A572] hover:underline">Gloucester</Link>, and <Link href="/movers-in-westboro" className="text-[#C5A572] hover:underline">Westboro</Link>. Every technician is <a href="https://www.wsib.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">WSIB certified</a> and fully insured, and we follow all <a href="https://ottawa.ca/en/living-ottawa" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">City of Ottawa</a> regulations for professional services.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Residential Furniture Assembly Ottawa — IKEA, Wayfair & More</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our residential furniture assembly service covers all the major brands and retailers that Canadians love. IKEA is our most frequently requested brand, and we've assembled thousands of PAX wardrobes, KALLAX units, MALM dressers, HEMNES beds, BESTÅ media centers, and BILLY bookcases across Ottawa. But we don't stop at IKEA — we handle Wayfair, Amazon, Structube, West Elm, CB2, Costco, Canadian Tire, The Brick, Leon's, and any other furniture that arrives in a flat-pack box. Our technicians read manufacturer instructions carefully, use the correct tools for every fastener, and ensure every joint and connection is secure and stable.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Beyond standard furniture, we also assemble gym equipment including treadmills, ellipticals, weight benches, and home gym stations. Patio furniture, gazebos, outdoor storage sheds, and playground equipment are also part of our repertoire. If you're moving and need furniture disassembled at your old home and reassembled at your new one, pair our assembly service with our <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving services</Link> for a complete solution. Our <Link href="/services/packing-services" className="text-[#C5A572] hover:underline">packing team</Link> can also help protect your belongings during the transition.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Commercial Furniture Assembly Ottawa — Office Setup Experts</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Setting up a new office or refreshing your existing workspace? Our <strong className="text-[#1A2332]">furniture assembly Ottawa</strong> team specializes in commercial projects of all sizes. We assemble workstations, cubicle systems, conference tables, executive desks, reception counters, filing cabinets, and ergonomic seating. For businesses relocating, we coordinate furniture assembly with our <Link href="/services/commercial-moving" className="text-[#C5A572] hover:underline">commercial moving services</Link> to get your team settled quickly. We work after hours and on weekends to minimize disruption to your operations, and we can handle large-scale office setups involving dozens or even hundreds of workstations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Quality and reliability define our furniture assembly service. Every piece is inspected after assembly to ensure stability, proper alignment, and smooth operation of all moving parts. We clean up all packaging materials and dispose of them responsibly. With 350+ five-star reviews, transparent pricing, and a commitment to getting it right the first time, Prestige Moving is Ottawa's trusted choice for professional furniture assembly. Call us at <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a> for your free estimate.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Furniture Assembly Ottawa Process Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Furniture Assembly Ottawa</h2>
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

        <SeoKeywordsSection currentPage="/furniture-assembly-ottawa" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Furniture Assembled in Ottawa?</h2>
            <p className="text-white/80 text-lg mb-8">Get your free estimate today. Professional assembly for IKEA, Wayfair, office furniture, and more.</p>
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
