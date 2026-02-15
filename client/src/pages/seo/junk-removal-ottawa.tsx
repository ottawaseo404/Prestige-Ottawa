import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, Calendar, Package, Home, Building2, Trash2 } from "lucide-react";
import heroImage from "@assets/images/seo-junk-removal.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function JunkRemovalOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "https://schema.org/ProfessionalService",
    "name": "Prestige Moving - Junk Removal Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/junk-removal-ottawa",
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
      { "@type": "Place", "name": "Ottawa" },
      { "@type": "Place", "name": "Barrhaven" },
      { "@type": "Place", "name": "Kanata" },
      { "@type": "Place", "name": "Orleans" },
      { "@type": "Place", "name": "Nepean" },
      { "@type": "Place", "name": "Gloucester" }
    ],
    "description": "Professional junk removal in Ottawa. Same-day service, transparent pricing, eco-friendly disposal. WSIB certified, 337+ five-star reviews."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does junk removal in Ottawa cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Junk removal pricing in Ottawa depends on the volume of items and type of materials. A single item pickup starts around $80-$120, while a full truckload ranges from $400 to $800. Prestige Moving offers transparent, upfront pricing with no hidden fees. Call (613) 600-4000 for a free estimate."
        }
      },
      {
        "@type": "Question",
        "name": "What items do you accept for junk removal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept nearly everything including furniture, appliances, electronics, mattresses, yard waste, construction debris, exercise equipment, hot tubs, and general household clutter. We do not accept hazardous materials such as chemicals, paint, or asbestos. Contact us if you're unsure about a specific item."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day junk removal in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Prestige Moving offers same-day junk removal service throughout Ottawa. If you call before noon, we can often arrive the same afternoon. We also offer scheduled pickups for your convenience, including weekends and evenings."
        }
      },
      {
        "@type": "Question",
        "name": "Do you recycle or donate items during junk removal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We are committed to eco-friendly disposal practices. We sort all items and divert as much as possible from landfills. Usable furniture and household goods are donated to local Ottawa charities, electronics are recycled through certified e-waste programs, and construction materials are taken to appropriate recycling facilities."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle commercial junk removal in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide commercial junk removal for offices, retail spaces, warehouses, and construction sites across Ottawa. Whether you're renovating, downsizing, or clearing out a commercial property, our team handles everything from office furniture and electronics to construction debris. We work around your business schedule to minimize disruption."
        }
      }
    ]
  };

  const stats = [
    { icon: Star, value: "337+", label: "Five-Star Reviews" },
    { icon: TruckIcon, value: "10,000+", label: "Successful Jobs" },
    { icon: Clock, value: "Same Day", label: "Service Available" },
    { icon: Shield, value: "100%", label: "Fully Insured" }
  ];

  const processSteps = [
    { icon: Phone, title: "Book Online or Call", description: "Call us at (613) 600-4000 or fill out our online form to schedule your junk removal pickup in Ottawa." },
    { icon: TruckIcon, title: "We Arrive Same Day", description: "Our professional crew arrives at your location on time with all the equipment needed to handle your junk removal." },
    { icon: Package, title: "We Load Everything", description: "Our team does all the heavy lifting. We carefully remove items from anywhere in your home or business — no effort required on your part." },
    { icon: CheckCircle2, title: "Eco-Friendly Disposal", description: "We sort, donate, recycle, and responsibly dispose of your items, diverting as much as possible from Ottawa landfills." }
  ];

  const faqs = [
    {
      question: "How much does junk removal in Ottawa cost?",
      answer: "Junk removal pricing in Ottawa depends on the volume of items you need hauled away and the type of materials involved. A single item pickup — such as an old couch, mattress, or appliance — typically starts around $80 to $120. For larger cleanouts, such as a garage, basement, or full home, prices range from $400 to $800 for a full truckload. Prestige Moving provides transparent, upfront pricing with absolutely no hidden fees or surprise charges. We'll give you an accurate quote before we begin any work, so you know exactly what to expect. Call us at (613) 600-4000 for a free, no-obligation estimate tailored to your specific junk removal needs."
    },
    {
      question: "What items do you accept for junk removal?",
      answer: "We accept nearly everything you need removed from your home or business. This includes old furniture such as couches, tables, chairs, dressers, and bed frames; household appliances including refrigerators, stoves, washers, dryers, and dishwashers; electronics like TVs, monitors, and computers; mattresses and box springs; yard waste such as branches, soil, and garden debris; construction debris including drywall, lumber, tiles, and flooring; exercise equipment, hot tubs, and general household clutter. The only items we cannot accept are hazardous materials such as chemicals, paints, solvents, asbestos, and medical waste. If you're unsure whether we can take a specific item, just give us a call and we'll let you know."
    },
    {
      question: "Do you offer same-day junk removal in Ottawa?",
      answer: "Yes, Prestige Moving offers same-day junk removal service throughout the entire Ottawa area. If you contact us before noon on a business day, we can often dispatch a crew to your location that same afternoon. For planned cleanouts, we also offer scheduled pickups at a date and time that works best for you, including weekends and evenings. Our flexible scheduling ensures that whether you need urgent junk removal or want to plan ahead, we can accommodate your timeline. Same-day service is subject to crew availability, so we recommend calling early in the day for the best chance of same-day pickup."
    },
    {
      question: "Do you recycle or donate items during junk removal?",
      answer: "Absolutely. Environmental responsibility is a core value at Prestige Moving. When we perform a junk removal job, we carefully sort all items to maximize recycling and donation. Usable furniture, clothing, and household goods are donated to local Ottawa charities and shelters. Electronics are recycled through certified e-waste programs in compliance with Ontario regulations. Construction materials such as metal, wood, and concrete are taken to appropriate recycling facilities. Our goal is to divert as much material as possible from landfills, and we typically achieve a diversion rate of 60-70% on most jobs. We partner with local organizations to ensure your unwanted items find a second life whenever possible."
    },
    {
      question: "Do you handle commercial junk removal in Ottawa?",
      answer: "Yes, Prestige Moving provides comprehensive commercial junk removal services for businesses across Ottawa. We work with offices, retail stores, warehouses, restaurants, and construction sites. Whether you're renovating your office space, closing a retail location, clearing out a warehouse, or managing post-construction cleanup, our experienced team handles everything efficiently and professionally. We understand that business operations cannot stop for a cleanout, so we work around your schedule — including after-hours and weekend service — to minimize disruption to your operations. Our commercial services include office furniture removal, electronics recycling, fixture removal, and complete space clearing."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Junk Removal Ottawa | Fast & Affordable Cleanout | Prestige</title>
        <meta name="description" content="Professional junk removal in Ottawa. Same-day service, transparent pricing. We haul furniture, appliances, yard waste & more. WSIB certified. Call (613) 600-4000." />
        <meta name="keywords" content="junk removal ottawa, ottawa junk removal, junk hauling ottawa, furniture removal ottawa, appliance removal ottawa, garbage removal ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/junk-removal-ottawa" />
        <meta property="og:title" content="Junk Removal Ottawa | Fast & Affordable Cleanout" />
        <meta property="og:description" content="Professional junk removal across Ottawa. Same-day service, eco-friendly disposal, transparent pricing. WSIB certified. Free quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/junk-removal-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Junk Removal Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="Fast, affordable junk removal across Ottawa. Same-day service available. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Professional junk removal service in Ottawa clearing furniture and appliances" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Professional Junk Removal in Ottawa</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">Fast, affordable junk removal with same-day service. We haul away furniture, appliances, yard waste, and more — with eco-friendly disposal and transparent pricing.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote <ArrowRight className="h-4 w-4 ml-2" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Other" serviceName="Junk Removal" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Ottawa Homeowners Choose Our Junk Removal Ottawa Service</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Whether you're decluttering your basement, cleaning out a garage, preparing for a renovation, or managing a property cleanout, <strong className="text-[#1A2332]">junk removal in Ottawa</strong> doesn't have to be stressful or expensive. Prestige Moving offers a fast, reliable, and eco-conscious junk hauling service that takes the hassle out of getting rid of unwanted items. Our trained crews handle everything from single-item pickups to full-property cleanouts across Ottawa and the surrounding communities, including <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link>, and <Link href="/movers-in-nepean" className="text-[#C5A572] hover:underline">Nepean</Link>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What sets our <strong className="text-[#1A2332]">Ottawa junk removal</strong> service apart is our commitment to responsible disposal. We don't simply throw everything into a landfill. Our team carefully sorts every load, separating items that can be donated to local charities, recycled through certified facilities, or repurposed. We work with Ottawa-area shelters and charitable organizations to ensure usable items find a second home. For construction debris and electronics, we follow all <a href="https://ottawa.ca/en/garbage-and-recycling" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">City of Ottawa waste management guidelines</a> and Ontario recycling regulations to ensure proper handling and disposal.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Residential Junk Removal Ottawa — Declutter Your Home</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our residential junk removal service covers everything you need to clear out your home. We remove old furniture including couches, mattresses, dressers, tables, and chairs. We haul away broken or outdated appliances such as refrigerators, stoves, washers, dryers, and dishwashers. Yard waste, including branches, soil, old fencing, and garden debris, is another specialty. If you're renovating, we handle construction debris such as drywall, lumber, tiles, carpeting, and fixtures. Moving soon? Pair our junk removal with our <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving services</Link> for a seamless transition. Need to keep some items temporarily? Our <Link href="/services/storage-solutions" className="text-[#C5A572] hover:underline">storage solutions</Link> provide secure, climate-controlled space while you decide what stays and what goes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We understand that junk removal can feel overwhelming, especially when dealing with years of accumulated belongings. Our compassionate, professional team works efficiently and respectfully, and we always clean up the area after removing your items. Whether it's a single room or an entire house, we approach every job with the same level of care and attention to detail that has earned us 337+ five-star reviews from Ottawa families.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Commercial Junk Removal Ottawa — Keep Your Business Running</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Businesses across Ottawa rely on Prestige Moving for efficient commercial junk removal. Whether you're clearing out an office after a renovation, removing outdated equipment from a warehouse, or managing a retail store closure, our team handles it all. We remove office furniture, cubicles, desks, filing cabinets, electronics, fixtures, and general commercial waste. Our <Link href="/services/commercial-moving" className="text-[#C5A572] hover:underline">commercial moving team</Link> can also coordinate junk removal alongside office relocations, making the entire process seamless. We schedule our commercial cleanouts around your business hours to minimize disruption, and we offer after-hours and weekend service for maximum flexibility.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every member of the Prestige Moving team is <a href="https://www.wsib.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">WSIB certified</a> and fully insured, so you can trust that your property is in safe hands. Our professional <Link href="/services/packing-services" className="text-[#C5A572] hover:underline">packing services</Link> are also available if you need help organizing items before a cleanout. We serve all Ottawa neighbourhoods including <Link href="/movers-in-gloucester" className="text-[#C5A572] hover:underline">Gloucester</Link>, <Link href="/movers-in-stittsville" className="text-[#C5A572] hover:underline">Stittsville</Link>, <Link href="/movers-in-westboro" className="text-[#C5A572] hover:underline">Westboro</Link>, and <Link href="/movers-in-alta-vista" className="text-[#C5A572] hover:underline">Alta Vista</Link>. Call us at <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a> for your free junk removal estimate today.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Ottawa Junk Removal Process Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Junk Removal Ottawa</h2>
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

        <SeoKeywordsSection currentPage="/junk-removal-ottawa" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Junk-Free Living in Ottawa?</h2>
            <p className="text-white/80 text-lg mb-8">Get your free, no-obligation junk removal quote today. Same-day service available across Ottawa.</p>
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
