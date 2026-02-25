import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Star, MapPin, ArrowRight, ChevronDown, Award, Calendar, Home, Crown } from "lucide-react";
import heroImage from "@assets/images/seo-movers-in-ottawa-infographic.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function MoversInRockcliffePark() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving - Rockcliffe Park Movers Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/movers-in-rockcliffe-park",
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
    "priceRange": "$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "349"
    },
    "areaServed": [
      { "@type": "Place", "name": "Rockcliffe Park, Ottawa" },
      { "@type": "Place", "name": "Manor Park" },
      { "@type": "Place", "name": "New Edinburgh" },
      { "@type": "Place", "name": "Lindenlea" },
      { "@type": "Place", "name": "Beechwood" },
      { "@type": "Place", "name": "Rothwell Heights" }
    ],
    "description": "White-glove movers in Rockcliffe Park Ottawa. Specializing in luxury estate moves, embassy relocations, heritage manor homes, and high-value art and antique transport. WSIB certified, fully insured, 349+ five-star reviews. Prestige Moving — (613) 600-4000."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much do movers in Rockcliffe Park Ottawa cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rockcliffe Park moving costs typically range from $1,500 to $8,000+ depending on estate size, the number of specialty items, distance, and white-glove service requirements. Large manor and estate moves with antiques, fine art, and pianos require additional resources and coordination. Prestige Moving provides detailed, transparent quotes with no hidden fees. Call (613) 600-4000 for a personalized estate moving estimate."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer white-glove moving services for Rockcliffe Park luxury homes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. White-glove moving is our specialty in Rockcliffe Park. Our elite moving teams wear shoe covers, use climate-controlled vehicles, provide custom crating for fine art and antiques, offer full-service packing and unpacking, and treat your Rockcliffe Park estate with the absolute highest standard of care. We handle embassy relocations, diplomatic community moves, and high-net-worth estate moves with complete discretion and professionalism."
        }
      },
      {
        "@type": "Question",
        "name": "Can you move fine art, antiques, and specialty items in Rockcliffe Park?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We specialize in the safe transport of museum-quality fine art, antique furniture, sculptures, wine collections, grand pianos, and other irreplaceable items throughout Rockcliffe Park and Ottawa. Our specialty moving team uses custom climate-controlled transport, museum-grade padding, custom-built crates, and white-glove handling procedures developed in consultation with conservation specialists. Every high-value item is documented, photographed, and tracked throughout the move."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle embassy and diplomatic community moves in Rockcliffe Park?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — embassy relocations and diplomatic community moves are a significant part of our Rockcliffe Park business. We understand the unique requirements of diplomatic moves including security considerations, strict scheduling, coordination with embassy staff, and the handling of diplomatic belongings with complete discretion. Our team is experienced in working within embassy compounds and managing the logistical complexities of high-profile relocations in Rockcliffe Park."
        }
      },
      {
        "@type": "Question",
        "name": "Are your Rockcliffe Park movers insured for high-value estate moves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every Prestige Moving team member is WSIB certified and we carry comprehensive commercial liability insurance. For Rockcliffe Park estate moves involving high-value art, antiques, pianos, wine collections, and custom furniture, we offer enhanced valuation coverage options that provide full replacement value protection for your most precious possessions. We document all high-value items with photographs before and after the move for complete peace of mind."
        }
      }
    ]
  };

  const stats = [
    { icon: Star, value: "349+", label: "Five-Star Reviews" },
    { icon: Crown, value: "Estate", label: "White-Glove Service" },
    { icon: Clock, value: "24hr", label: "Quote Response" },
    { icon: Shield, value: "100%", label: "Fully Insured" }
  ];

  const processSteps = [
    { icon: Phone, title: "Private Consultation", description: "Call (613) 600-4000 for a confidential estate moving consultation. We'll create a detailed plan tailored to your Rockcliffe Park property." },
    { icon: Calendar, title: "Custom Moving Plan", description: "We schedule around your preferences — including off-hours and weekend moves — with a dedicated move coordinator assigned to your estate." },
    { icon: TruckIcon, title: "Elite Moving Team", description: "Our white-glove Rockcliffe Park team arrives in uniform, with climate-controlled trucks, custom crating, and all specialty equipment." },
    { icon: Home, title: "Full Setup & Completion", description: "We place, reassemble, and arrange every item to your specifications, then conduct a full walkthrough to confirm your complete satisfaction." }
  ];

  const faqs = [
    {
      question: "How much do movers in Rockcliffe Park Ottawa cost?",
      answer: "Rockcliffe Park estate moves are priced based on the specific scope of your relocation — estate size, number of rooms, specialty items (art, antiques, pianos, wine), packing requirements, and service level. Full-service estate moves in Rockcliffe Park typically range from $1,500 for smaller residences to $8,000 or more for large manor homes with extensive art collections and specialty items. Prestige Moving provides fully transparent, itemized quotes after an in-home or virtual assessment, so you'll know every cost before your moving day. Call (613) 600-4000 for a private, no-obligation consultation."
    },
    {
      question: "Do you offer white-glove moving services for Rockcliffe Park luxury homes?",
      answer: "White-glove estate moving in Rockcliffe Park is one of Prestige Moving's core specialties. Our premium service includes: dedicated move coordinators who plan every detail in advance; uniformed, highly trained movers who wear shoe covers and use floor runners throughout your estate; climate-controlled transport vehicles with air-ride suspension for fragile and temperature-sensitive items; full-service packing and unpacking with museum-grade materials; custom-built wooden crates for fine art, sculptures, and irreplaceable antiques; and a full post-move walkthrough to ensure your complete satisfaction. We also handle embassy and diplomatic relocations in Rockcliffe Park with the additional discretion and security-consciousness these moves require."
    },
    {
      question: "Can you move fine art, antiques, and specialty items in Rockcliffe Park?",
      answer: "Yes — this is one of our most requested services in Rockcliffe Park. Rockcliffe Park estates frequently contain museum-quality collections including fine art, antique furniture, sculptures, rare books, grand and upright pianos, wine cellars, custom chandeliers, and other irreplaceable items that require specialized handling far beyond standard moving services. Our fine art and specialty moving team uses conservation-grade padding materials, climate-controlled vehicles, custom wooden crates built to each item's specifications, and white-glove handling procedures. Every item is photographed and documented before and after the move. We've safely transported countless valuable collections throughout Rockcliffe Park and Ottawa."
    },
    {
      question: "Do you handle embassy and diplomatic community moves in Rockcliffe Park?",
      answer: "Absolutely. Rockcliffe Park is home to some of Canada's most prominent diplomatic residences, and embassy and diplomatic community moves are a significant and trusted part of our business in this neighbourhood. We understand the unique requirements of diplomatic moves: strict security considerations, coordination with embassy staff and foreign service personnel, handling of diplomatic shipments with complete discretion, and strict adherence to scheduled timeframes. Our team has extensive experience working within Rockcliffe Park's embassy compounds and private estates, and we are fully equipped to manage even the most complex diplomatic relocation with the professionalism and confidentiality required."
    },
    {
      question: "Are your Rockcliffe Park movers insured for high-value estate moves?",
      answer: "Yes — all Prestige Moving team members are WSIB (Workplace Safety and Insurance Board) certified, and we carry comprehensive commercial liability insurance that protects your belongings throughout the entire moving process. For Rockcliffe Park estate moves involving fine art, antiques, grand pianos, wine collections, custom furniture, and other high-value items, we offer enhanced valuation coverage options that provide full replacement value protection — not just depreciated value. We document every high-value item with detailed photographs and condition reports before the move begins, providing a transparent record that gives you complete peace of mind from start to finish. Contact us at (613) 600-4000 to discuss coverage options for your specific Rockcliffe Park estate."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Movers in Rockcliffe Park Ottawa | White-Glove Estate Moving | Prestige Moving</title>
        <meta name="description" content="Premium movers in Rockcliffe Park Ottawa. Prestige Moving specializes in white-glove estate moves, embassy relocations, fine art & antique transport. 349+ five-star reviews, WSIB certified. Call (613) 600-4000 — free quote." />
        <meta name="keywords" content="movers in rockcliffe park, rockcliffe park movers, moving company rockcliffe park ottawa, estate movers rockcliffe park, luxury movers rockcliffe park, embassy movers ottawa, white glove movers rockcliffe park, fine art movers ottawa, antique movers rockcliffe park ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/movers-in-rockcliffe-park" />
        <meta property="og:title" content="Movers in Rockcliffe Park Ottawa | White-Glove Estate Moving | Prestige" />
        <meta property="og:description" content="Ottawa's premier estate movers serving Rockcliffe Park. Embassy relocations, fine art, antiques, luxury homes. WSIB certified, 349+ reviews. Free quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/movers-in-rockcliffe-park" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movers in Rockcliffe Park Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="White-glove estate movers in Rockcliffe Park. Embassy relocations, fine art, antiques. 349+ five-star reviews. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="relative h-[500px] flex items-center" data-testid="section-hero">
          <img src={heroImage} alt="White-glove movers in Rockcliffe Park Ottawa handling a luxury estate relocation" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/93 to-[#1A2332]/65" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-5">
              <Crown className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Rockcliffe Park, Ottawa</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" data-testid="text-hero-heading">
              White-Glove Movers<br className="hidden sm:block" /> in Rockcliffe Park
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">
              Ottawa's premier estate moving company — serving Rockcliffe Park's most distinguished homes, embassies, and heritage estates with the discretion, expertise, and white-glove service they demand.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book">
                <Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572] font-bold" data-testid="button-hero-quote">
                  Get Free Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:6136004000">
                <Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call">
                  <Phone className="h-4 w-4 mr-2" />Call (613) 600-4000
                </Button>
              </a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Rockcliffe Park Moving" />

        {/* Stats */}
        <section className="bg-[#1A2332] py-8" data-testid="section-stats">
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

        {/* Main content */}
        <section className="py-16" data-testid="section-main-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Rockcliffe Park Residents Choose Our Movers in Rockcliffe Park</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Rockcliffe Park stands apart from every other Ottawa neighbourhood — it is the city's most prestigious residential community, a tranquil enclave of manor homes, heritage estates, ambassadorial residences, and lush parkland overlooking the Ottawa River. Moving in Rockcliffe Park requires a fundamentally different approach from any other Ottawa move. The properties here are not just valuable in dollar terms — they contain irreplaceable collections of fine art, museum-quality antiques, grand pianos, rare wine cellars, and heirlooms that have been in families for generations. When Rockcliffe Park residents need <strong className="text-[#1A2332]">movers in Rockcliffe Park</strong>, they need a moving company that operates at the same level of excellence and discretion as the neighbourhood itself.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Prestige Moving has earned its position as the preferred <strong className="text-[#1A2332]">Rockcliffe Park moving company</strong> through years of delivering white-glove estate moving services to Rockcliffe Park's most distinguished households. Our elite moving teams have successfully completed estate moves for senior government officials, ambassadors and diplomatic staff, prominent business leaders, and established Ottawa families — always with the professionalism, care, and absolute discretion that Rockcliffe Park clients expect and deserve.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">White-Glove Estate Moving for Rockcliffe Park's Luxury Homes</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our Rockcliffe Park estate moving service is comprehensive from start to finish. Every move begins with a private, in-home consultation where our move coordinator visits your Rockcliffe Park estate to assess the full scope of the relocation, identify specialty items requiring custom handling, and develop a detailed moving plan tailored specifically to your property. We then assign a dedicated project manager to your move who serves as your single point of contact throughout the entire process — available 24/7 to address questions, coordinate timing, and ensure every detail is executed flawlessly on moving day.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              On moving day, our white-glove Rockcliffe Park team arrives in uniform, with climate-controlled transport vehicles featuring air-ride suspension, custom wooden crating materials, museum-grade padding, professional packing supplies, and all specialty equipment needed for your specific items. Our movers wear shoe covers and place professional floor runners throughout your estate. We work methodically and carefully — never rushing — to ensure your Rockcliffe Park home and its contents are protected throughout the entire move. After delivery, we conduct a full walkthrough with you to confirm every item is placed exactly as you want it and to address any questions or requests.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Fine Art, Antiques, and Specialty Item Moving in Rockcliffe Park</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The homes of Rockcliffe Park contain some of Ottawa's most significant private collections — and moving these items safely is a responsibility we take with the utmost seriousness. Our <Link href="/services/antique-moving" className="text-[#C5A572] hover:underline">antique moving specialists</Link> and <Link href="/services/specialty-item-moving" className="text-[#C5A572] hover:underline">specialty item teams</Link> are trained to handle fine art, sculptures, large antique furniture, crystal chandeliers, custom cabinetry, and any other irreplaceable item with the care it deserves. We build custom wooden crates for fragile and high-value items, use climate-controlled transport for temperature-sensitive materials, and document every item with detailed photographs before and after the move.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              <Link href="/services/piano-moving" className="text-[#C5A572] hover:underline">Grand piano moving</Link> in Rockcliffe Park estates is one of our most frequently requested specialty services. Our piano crew uses hydraulic equipment, custom grand piano boards, and specialized strapping systems to move baby grands, concert grands, and vintage uprights safely through the wide-open spaces and sometimes challenging access points of Rockcliffe Park's larger estates. For wine collections, we provide temperature-controlled transport and custom padded wine shipping crates. For art collections, we work closely with clients and their art advisors to ensure every piece is treated according to proper conservation standards.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Embassy and Diplomatic Community Moves in Rockcliffe Park</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Rockcliffe Park is home to a significant number of Ottawa's diplomatic community, including ambassadors, high commissioners, and senior diplomatic staff. Embassy and diplomatic relocations require a specialized level of service that Prestige Moving has developed through extensive experience with the Rockcliffe Park diplomatic community. We understand the unique requirements of these moves: strict security protocols, precise scheduling that accommodates diplomatic calendars, coordination with embassy administrative staff, and complete discretion regarding the timing and details of the move.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our diplomatic move teams operate with professionalism, confidentiality, and the flexibility to accommodate the specific requirements of each embassy and diplomatic household. We have experience coordinating with <a href="https://www.international.gc.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">Global Affairs Canada</a> protocols and understand the particular logistical considerations of moves that involve foreign government property and personal diplomatic effects. Contact us at <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a> for a private consultation regarding your diplomatic or embassy relocation in Rockcliffe Park.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Serving Rockcliffe Park and Ottawa's East End Prestige Communities</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              In addition to Rockcliffe Park, Prestige Moving serves all surrounding prestige communities including Manor Park, New Edinburgh, Lindenlea, Beechwood, and Rothwell Heights. We regularly help clients move between Rockcliffe Park and Ottawa's other premier neighbourhoods, including <Link href="/movers-in-westboro" className="text-[#C5A572] hover:underline">Westboro</Link>, <Link href="/movers-in-alta-vista" className="text-[#C5A572] hover:underline">Alta Vista</Link>, <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, and beyond. For Rockcliffe Park clients relocating to another city or province, our <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">long-distance moving team</Link> provides the same white-glove standard of service across any distance.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every Prestige Moving team member serving Rockcliffe Park is <a href="https://www.wsib.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:underline">WSIB certified</a>, background-screened, and fully insured. We offer enhanced valuation coverage for high-value estate contents, and we carry commercial liability insurance levels appropriate to the value of properties and belongings in Rockcliffe Park. Contact us at <a href="mailto:Ottawa@prestigemoving.ca" className="text-[#C5A572] hover:underline">Ottawa@prestigemoving.ca</a> or call <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a> for your private, no-obligation estate moving consultation.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50" data-testid="section-process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Our Rockcliffe Park Estate Moving Process</h2>
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

        {/* FAQ */}
        <section className="py-16" data-testid="section-faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions — Rockcliffe Park Movers</h2>
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

        <SeoKeywordsSection currentPage="/movers-in-rockcliffe-park" />

        {/* CTA */}
        <section className="py-16 bg-[#C5A572]" data-testid="section-cta">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Plan Your Rockcliffe Park Move?</h2>
            <p className="text-white/80 text-lg mb-8">Contact us today for a private, no-obligation estate moving consultation. 349+ five-star reviews and Ottawa's most trusted white-glove moving service.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book">
                <Button className="bg-[#1A2332] hover:bg-[#243044] text-white border-[#1A2332]" data-testid="button-cta-quote">Get Free Quote</Button>
              </Link>
              <a href="tel:6136004000">
                <Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-cta-call">
                  <Phone className="h-4 w-4 mr-2" />Call (613) 600-4000
                </Button>
              </a>
            </div>
          </div>
        </section>

      </div>
      <SharedFooter />
    </>
  );
}
