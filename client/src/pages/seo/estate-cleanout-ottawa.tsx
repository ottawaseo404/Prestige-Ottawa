import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, Calendar, Package, Home, Building2, Trash2 } from "lucide-react";
import heroImage from "@assets/images/seo-estate-cleanout.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function EstateCleanoutOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "https://schema.org/ProfessionalService",
    "name": "Prestige Moving - Estate Cleanout Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/estate-cleanout-ottawa",
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
    "description": "Professional estate cleanout services in Ottawa. Compassionate, thorough home clearing for downsizing, probate, and inheritance situations. WSIB certified."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does an estate cleanout cost in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Estate cleanout costs in Ottawa depend on the size of the property, volume of items, and level of service required. A typical estate cleanout for a two-to-three-bedroom home ranges from $1,500 to $4,000. Larger homes or properties with significant accumulation may cost more. We provide free on-site estimates with transparent pricing. Call (613) 600-4000."
        }
      },
      {
        "@type": "Question",
        "name": "How long does an estate cleanout take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most estate cleanouts in Ottawa take one to three days depending on the size of the property and the volume of items. We work efficiently while remaining sensitive to the emotional nature of the process. For larger estates or hoarding situations, we may schedule multiple days. We always work within your timeline."
        }
      },
      {
        "@type": "Question",
        "name": "Do you donate usable items during estate cleanouts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Donation coordination is a core part of our estate cleanout service. We partner with local Ottawa charities, shelters, and organizations to ensure usable furniture, clothing, household items, and other goods find new homes. We handle all the sorting, transportation, and donation receipts on your behalf."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with hoarding cleanouts in Ottawa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our team is trained to handle hoarding situations with compassion, patience, and professionalism. We work at a comfortable pace, help identify items of value, sort belongings for donation or disposal, and restore the property to a clean, livable condition. We treat every client and their belongings with the utmost respect."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with estate lawyers and executors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We regularly work with estate lawyers, executors, real estate agents, and family members throughout the estate cleanout process. We can coordinate with legal representatives, provide detailed inventories of items removed, and work within probate timelines. Our professional approach makes the process easier for all parties involved."
        }
      }
    ]
  };

  const stats = [
    { icon: Star, value: "337+", label: "Five-Star Reviews" },
    { icon: Users, value: "1,000+", label: "Families Helped" },
    { icon: Clock, value: "1-3 Days", label: "Typical Cleanout" },
    { icon: Shield, value: "100%", label: "Fully Insured" }
  ];

  const processSteps = [
    { icon: Phone, title: "Free Consultation", description: "We visit the property, assess the scope of work, and discuss your needs. We provide a detailed estimate with no obligation." },
    { icon: Calendar, title: "Create a Plan", description: "We develop a customized cleanout plan that addresses timing, item sorting, donations, recycling, and disposal — all within your timeline." },
    { icon: Package, title: "Sort & Clear", description: "Our compassionate team carefully sorts through belongings, separating items to keep, donate, recycle, and dispose of responsibly." },
    { icon: CheckCircle2, title: "Donate/Dispose Responsibly", description: "Usable items go to local charities, recyclables to certified facilities, and remaining items are disposed of following City of Ottawa guidelines." }
  ];

  const faqs = [
    {
      question: "How much does an estate cleanout cost in Ottawa?",
      answer: "Estate cleanout costs in Ottawa depend on several factors including the size of the property, the volume and type of items to be removed, accessibility, and the level of sorting and organization required. For a typical two-to-three-bedroom home, estate cleanout services generally range from $1,500 to $4,000. Smaller condos or apartments may cost less, while larger homes with basements, garages, and attics filled with belongings can range from $4,000 to $8,000 or more. Hoarding situations require additional time and care, which is reflected in the pricing. Prestige Moving provides free on-site estimates so you know exactly what to expect before we begin. Our pricing is transparent with no hidden fees — every cost is explained clearly. Call (613) 600-4000 to schedule your free consultation."
    },
    {
      question: "How long does an estate cleanout take?",
      answer: "Most estate cleanouts in Ottawa are completed within one to three days depending on the size of the property and the volume of belongings. A standard two-bedroom condo or apartment can typically be cleared in one day. A three-to-four-bedroom house with a basement and garage usually takes two to three days. Larger estates or properties with significant accumulation may require additional days. For hoarding situations, we take a more measured approach that respects the emotional complexity involved, which may extend the timeline. We always work within your schedule and coordinate with estate lawyers, executors, and real estate agents to meet probate or sale deadlines. Our team works efficiently while maintaining a compassionate, respectful approach throughout the entire process."
    },
    {
      question: "Do you donate usable items during estate cleanouts?",
      answer: "Yes, donation coordination is one of the most important aspects of our estate cleanout service. We believe that items with remaining useful life should find new homes rather than ending up in a landfill. During every cleanout, our team carefully sorts through belongings and identifies items suitable for donation. We partner with numerous local Ottawa charities, shelters, and community organizations including the Salvation Army, Habitat for Humanity ReStore, Shepherds of Good Hope, and various local thrift stores. We handle all the logistics — sorting, transportation, and delivery to donation centres — and can provide donation receipts for tax purposes. For families dealing with the loss of a loved one, knowing that their belongings will help others in the community brings meaningful comfort during a difficult time."
    },
    {
      question: "Can you help with hoarding cleanouts in Ottawa?",
      answer: "Yes, our team is specifically trained to handle hoarding situations with compassion, patience, and complete professionalism. We understand that hoarding is a complex issue, and we approach every situation without judgment. Our process begins with a private consultation where we assess the property and develop a plan that respects the individual's pace and comfort level. During the cleanout, we work alongside the homeowner or family members to sort through belongings, helping identify items of value, sentimental keepsakes, important documents, and items that can be donated or recycled. We restore the property to a clean, safe, and livable condition. Our team follows all health and safety protocols, and every crew member is WSIB certified and fully insured. If you or a loved one needs help with a hoarding situation in Ottawa, please call us for a confidential, no-pressure conversation."
    },
    {
      question: "Do you work with estate lawyers and executors?",
      answer: "Absolutely. Prestige Moving regularly works with estate lawyers, executors, administrators, real estate agents, and family members throughout the estate cleanout process. We understand the legal and emotional complexities involved in settling an estate, and we bring a professional, organized approach that simplifies the process for everyone involved. We can coordinate directly with legal representatives, work within probate court timelines, provide detailed inventories and photographic documentation of items removed from the property, and ensure that valuable or contested items are handled appropriately. Our team is experienced with both probate cleanouts and downsizing situations for seniors who are transitioning to assisted living or smaller accommodations. We maintain clear communication with all stakeholders throughout the project to ensure complete transparency and satisfaction."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Estate Cleanout Service Ottawa | Trusted Professionals | Prestige</title>
        <meta name="description" content="Professional estate cleanout services in Ottawa. Compassionate, thorough home clearing for downsizing, probate & inheritance. WSIB certified. Call (613) 600-4000." />
        <meta name="keywords" content="estate cleanout ottawa, estate clearing ottawa, house cleanout ottawa, downsizing ottawa, probate cleanout ottawa, hoarding cleanout ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/estate-cleanout-ottawa" />
        <meta property="og:title" content="Estate Cleanout Ottawa | Compassionate Cleanout Service" />
        <meta property="og:description" content="Professional estate cleanout services in Ottawa. Compassionate home clearing for probate, downsizing, and inheritance. WSIB certified. Free consultation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/estate-cleanout-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Estate Cleanout Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="Compassionate estate cleanout services in Ottawa. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Compassionate estate cleanout service in Ottawa helping families clear a home" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Compassionate Estate Cleanout in Ottawa</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">Thorough, respectful estate clearing for probate, downsizing, and inheritance situations. We handle everything with care, compassion, and professionalism.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Consultation <ArrowRight className="h-4 w-4 ml-2" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Other" serviceName="Estate Cleanout" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Ottawa Families Trust Our Estate Cleanout Ottawa Service</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Clearing a home after the loss of a loved one, or helping a senior family member downsize, is one of life's most emotionally challenging tasks. <strong className="text-[#1A2332]">Estate cleanout in Ottawa</strong> requires more than just physical labour — it demands compassion, patience, and a deep respect for the memories and belongings involved. Prestige Moving's estate cleanout team brings all of these qualities to every project, combined with the organizational expertise and professional resources needed to clear a property thoroughly and efficiently.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our <strong className="text-[#1A2332]">Ottawa estate cleanout</strong> service covers every aspect of the process. We sort through belongings room by room, carefully identifying items of value, sentimental keepsakes, important documents, and items suitable for donation or recycling. We coordinate with local charities to ensure usable items find new homes, recycle electronics and materials through certified facilities, and dispose of remaining items responsibly following <a href="https://ottawa.ca/en/garbage-and-recycling" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">City of Ottawa waste management</a> guidelines. Our goal is to leave the property completely clear, clean, and ready for its next chapter — whether that's a real estate listing, a rental preparation, or a family transfer.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Probate Estate Cleanout Ottawa — Supporting Executors and Families</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              When a loved one passes away, the executor of the estate is often responsible for clearing the property within a specific timeline. This can be an overwhelming task, particularly when the executor lives out of town or has limited availability. Our probate estate cleanout service takes this burden off your shoulders. We work directly with executors, estate lawyers, and family members to develop a clear plan, execute it professionally, and provide detailed documentation of everything removed from the property. Whether the home contains a lifetime of carefully organized possessions or presents a more challenging hoarding situation, our team handles it with equal care and professionalism.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We serve families across every Ottawa neighbourhood, from <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link> and <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link> to <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link>, <Link href="/movers-in-nepean" className="text-[#C5A572] hover:underline">Nepean</Link>, and <Link href="/movers-in-gloucester" className="text-[#C5A572] hover:underline">Gloucester</Link>. Every team member is <a href="https://www.wsib.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">WSIB certified</a> and fully insured, providing complete protection throughout the cleanout process.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Senior Downsizing and Estate Cleanout Ottawa</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Downsizing is a significant life transition, and our team approaches it with the sensitivity and patience it deserves. Whether a senior is moving from a family home to a smaller apartment, an assisted living facility, or a retirement community, we help them sort through decades of belongings, decide what to keep, and manage the rest. We coordinate closely with our <Link href="/services/senior-moving" className="text-[#C5A572] hover:underline">senior moving service</Link> to provide a seamless experience from cleanout to move-in. Items that won't be coming along can be placed in our <Link href="/services/storage-solutions" className="text-[#C5A572] hover:underline">secure storage</Link> while decisions are made, donated to charities, or removed entirely.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our estate cleanout service also pairs perfectly with our <Link href="/junk-removal-ottawa" className="text-[#C5A572] hover:underline">junk removal service</Link> for properties that need a thorough clearing. We handle sensitive items including personal papers, photographs, and family heirlooms with the utmost respect and discretion. With 337+ five-star reviews and a reputation built on trust, Prestige Moving is Ottawa's most compassionate choice for estate cleanouts. Call us at <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a> for a free, confidential consultation.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Estate Cleanout Ottawa Process Works</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Estate Cleanout Ottawa</h2>
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

        <SeoKeywordsSection currentPage="/estate-cleanout-ottawa" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help With an Estate Cleanout in Ottawa?</h2>
            <p className="text-white/80 text-lg mb-8">Schedule your free, confidential consultation today. Compassionate, professional service from start to finish.</p>
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
