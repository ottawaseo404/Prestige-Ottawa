import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, ChevronDown, Award, ThumbsUp, Calendar, Package, Home, Building2, Mail, Heart } from "lucide-react";
import heroImage from "@assets/images/seo-professional-movers.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

export default function ProfessionalMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/professional-movers-ottawa",
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
    "description": "Professional movers in Ottawa with trained, background-checked crews. WSIB certified, fully insured. Expert handling of furniture, fragile items, and specialty pieces."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes your movers professional?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our professional movers undergo extensive training in safe lifting, furniture protection, and customer service. Every team member is background-checked, WSIB certified, and arrives in a clean uniform with professional-grade equipment. We maintain high hiring standards and continuous training programs."
        }
      },
      {
        "@type": "Question",
        "name": "What training do your movers receive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every Prestige Moving team member completes a comprehensive training program covering proper lifting biomechanics, furniture disassembly/reassembly, fragile item handling, floor and wall protection, truck loading optimization, and customer communication. Training is ongoing with regular refresher sessions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you do background checks on your movers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every Prestige Moving team member undergoes a thorough background check before joining our crew. We also verify references, assess physical fitness, and conduct a probationary evaluation period. Your safety and trust are our top priorities."
        }
      },
      {
        "@type": "Question",
        "name": "What equipment do professional movers use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our professional movers use industry-leading equipment including air-ride suspension trucks, heavy-duty dollies, appliance carts, piano boards, furniture pads, stretch wrap, floor runners, door frame protectors, and specialty rigging equipment for heavy items."
        }
      },
      {
        "@type": "Question",
        "name": "How do your professional movers protect furniture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use a multi-layer protection system including thick quilted moving blankets, stretch wrap for upholstery, corner protectors for wood furniture, custom crating for fragile items, floor runners at both locations, and door frame padding. Every item receives individual attention."
        }
      }
    ]
  };

  const stats = [
    { icon: Users, value: "50+", label: "Trained Professionals" },
    { icon: Shield, value: "100%", label: "Background Checked" },
    { icon: Star, value: "350+", label: "Five-Star Reviews" },
    { icon: Award, value: "WSIB", label: "Certified & Insured" }
  ];

  const processSteps = [
    { icon: Phone, title: "Free Consultation", description: "Speak with our moving experts to plan every detail of your relocation with precision and care." },
    { icon: Package, title: "Professional Preparation", description: "Our team arrives with all necessary equipment, blankets, and materials to protect every item in your home." },
    { icon: TruckIcon, title: "Expert Execution", description: "Trained, uniformed professionals carefully load, transport, and unload your belongings with meticulous attention." },
    { icon: CheckCircle2, title: "Quality Inspection", description: "We do a final walkthrough together, ensuring every item is placed correctly and everything meets your standards." }
  ];

  const faqs = [
    {
      question: "What makes your movers professional?",
      answer: "Professionalism at Prestige Moving goes far beyond showing up in a uniform. Our professional movers undergo an extensive multi-week training program that covers safe lifting biomechanics, advanced furniture protection techniques, fragile item handling protocols, and exceptional customer communication. Every team member is background-checked, WSIB certified, and drug-free. We maintain rigorous hiring standards — only one in ten applicants makes it through our selection process. Our crews arrive on time in clean, branded uniforms with professional-grade equipment, maintaining a courteous and respectful demeanour throughout your entire move in Ottawa."
    },
    {
      question: "What training do your movers receive?",
      answer: "Every Prestige Moving professional completes a comprehensive training program before handling their first customer move. This training covers proper lifting biomechanics to prevent injuries and product damage, furniture disassembly and reassembly techniques for beds, desks, and shelving units, fragile item wrapping and packing methods for crystal, artwork, and electronics, floor and wall protection installation at both origin and destination, optimal truck loading patterns to maximize space and prevent shifting during transit, and professional customer interaction and communication. Training doesn't stop after onboarding — our team participates in regular refresher sessions and advanced skill workshops throughout the year."
    },
    {
      question: "Do you do background checks on your movers?",
      answer: "Absolutely. Every single team member at Prestige Moving undergoes a thorough criminal background check before they're permitted to enter any customer's home or business in Ottawa. Beyond background checks, we also verify personal and professional references, assess physical fitness and capability, and conduct a supervised probationary evaluation period where new hires work alongside experienced crew leaders. We understand that inviting movers into your home requires trust, and we take that responsibility seriously. Our rigorous screening process ensures that every professional mover who walks through your door in Kanata, Orleans, Barrhaven, or any other Ottawa neighbourhood is someone you can feel completely comfortable with."
    },
    {
      question: "What equipment do professional movers use?",
      answer: "Our professional movers in Ottawa use top-of-the-line, industry-leading equipment to ensure the safest possible move. Our fleet features trucks with air-ride suspension that absorbs road vibrations and protects fragile items during transit. On-site, our teams use heavy-duty four-wheel dollies for appliances, specialized piano boards and straps, furniture carts with padding, commercial-grade stretch wrap and packing materials, thick quilted moving blankets, floor runners and carpet protectors, door frame protectors and corner guards, and specialty rigging equipment for oversized or heavy items. We invest continuously in our equipment because we know it directly impacts the safety of your belongings."
    },
    {
      question: "How do your professional movers protect furniture during a move?",
      answer: "Furniture protection is a cornerstone of our professional moving service. We employ a multi-layer protection system that begins with a thorough assessment of each piece. Upholstered furniture is wrapped in stretch film to prevent dirt, snags, and moisture damage. Wood furniture receives thick quilted moving blankets secured with rubber bands — never tape that could damage finishes. Glass and mirror surfaces are protected with custom-cut cardboard and bubble wrap. We install floor runners at both your current and new location in Ottawa to prevent scuffs and scratches, and door frame protectors are placed in every doorway our team passes through. For particularly valuable or delicate pieces, we offer custom crating built to the exact dimensions of your item."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Movers Ottawa | Expert Moving Services | Prestige Moving</title>
        <meta name="description" content="Hire professional movers in Ottawa you can trust. Prestige Moving's trained, background-checked crews provide expert moving services with WSIB certification and full insurance. Call (613) 600-4000." />
        <meta name="keywords" content="professional movers ottawa, professional moving services ottawa, expert movers ottawa, trained movers ottawa, insured movers ottawa, certified movers ottawa, reliable movers ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/professional-movers-ottawa" />
        <meta property="og:title" content="Professional Movers Ottawa | Expert Moving Services | Prestige Moving" />
        <meta property="og:description" content="Ottawa's most professional moving team. Trained, background-checked, WSIB certified crews with 350+ five-star reviews. Expert handling guaranteed." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/professional-movers-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] flex items-center">
          <img src={heroImage} alt="Professional movers from Prestige Moving carefully handling furniture in Ottawa" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-heading">Prestige Movers You Can Trust in Ottawa</h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">Trained, background-checked, and WSIB certified — our professional moving team delivers expert care for every item you own.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572]" data-testid="button-hero-quote">Get Free Quote</Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Professional Moving" />

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
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Prestige Movers in Ottawa</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              There's a significant difference between hiring someone with a truck and hiring professional movers in Ottawa. When you choose Prestige Moving, you're getting a team of extensively trained, background-checked, WSIB-certified professionals who approach every move with the skill, care, and attention to detail that your belongings deserve. Our professional movers don't just transport items from point A to point B — they protect your investment, respect your property, and deliver an experience that eliminates the stress and uncertainty typically associated with moving day. With 350+ five-star reviews from Ottawa families and businesses, our commitment to professionalism has been validated thousands of times over.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Professionalism in the moving industry starts with the people you send into someone's home. At Prestige Moving, every team member goes through a rigorous vetting process that includes criminal background checks, reference verification, physical fitness assessments, and a supervised probationary period working alongside our most experienced crew leaders. Only about one in ten applicants meets our standards — and that selectivity shows in the quality of service our customers receive. When our professional movers arrive at your door in Westboro, The Glebe, Downtown Ottawa, or any neighbourhood in between, you can be confident that you're in the hands of skilled, trustworthy individuals who take genuine pride in their work.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Industry-Leading Training Standards</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The training our professional movers receive goes far beyond the basics. Every new team member at Prestige Moving completes a comprehensive onboarding program that covers ergonomic lifting techniques to prevent injuries and protect your belongings, advanced furniture wrapping and protection methods using premium materials, disassembly and reassembly of complex furniture pieces including IKEA, antique, and custom-built items, safe handling protocols for fragile items including crystal, artwork, flat-screen televisions, and musical instruments, optimal truck loading patterns that maximize space efficiency while preventing shifting during transit, and professional customer interaction standards that ensure clear communication throughout your move.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              But training at Prestige Moving doesn't stop after onboarding. Our professional movers participate in ongoing skill development sessions, safety refreshers, and advanced technique workshops throughout the year. When new equipment or methods emerge in the industry, our team is among the first in Ottawa to adopt and master them. This commitment to continuous improvement means that whether you're having your grandmother's antique dresser moved from a heritage home in Rockcliffe Park or a commercial server rack transported to a new office in Kanata, our team has the up-to-date skills and knowledge to handle it with expert precision.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Professional-Grade Equipment and Modern Fleet</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Professional movers are only as good as the equipment they use, which is why Prestige Moving invests heavily in maintaining a modern fleet and comprehensive inventory of professional-grade moving tools. Our trucks feature air-ride suspension systems that absorb road vibrations and protect fragile items during transit — a feature you won't find with amateur movers. Each vehicle is equipped with interior tie-down systems, loading ramps, and climate management capabilities. On-site, our teams deploy heavy-duty dollies, appliance carts, piano boards, stair-climbing equipment, furniture sliders, and a full range of protective materials including quilted moving blankets, stretch wrap, corner protectors, and custom crating supplies.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We also carry specialized equipment for challenging Ottawa moves that other companies may refuse. Whether it's a hot tub that needs to be crane-lifted over a fence in Barrhaven, a baby grand piano being moved down a narrow staircase in Sandy Hill, or an entire office of IT equipment being relocated in Downtown Ottawa, our professional movers have the tools and expertise to get it done safely. Every piece of equipment is inspected and maintained on a strict schedule, ensuring reliability and safety on every job.
            </p>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4 mt-10">Uniformed, Background-Checked Crews You Can Trust</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              When Prestige Moving's professional movers arrive at your Ottawa home or office, you'll immediately notice the difference. Our teams arrive in clean, branded uniforms, driving well-maintained trucks bearing our company logo. They introduce themselves by name, walk through your home to assess the job, and discuss the plan before any work begins. This level of professionalism extends throughout the entire move — from careful furniture wrapping and efficient loading to courteous communication and respectful treatment of your property. Our professional movers understand that they're guests in your home, and they conduct themselves accordingly, removing shoes when appropriate, laying down floor protection, and cleaning up completely before departure.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Our Professional Moving Process</h2>
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
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions About Professional Movers</h2>
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

        <SeoKeywordsSection currentPage="/professional-movers-ottawa" />

        <section className="py-16 bg-[#C5A572]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hire Ottawa's Most Professional Movers</h2>
            <p className="text-white/80 text-lg mb-8">Experience the difference that trained, certified professionals make. Get your free quote today.</p>
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