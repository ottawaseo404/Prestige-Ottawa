import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import {
  Phone, TruckIcon, Shield, Clock, Star, MapPin, ArrowRight,
  ChevronDown, Calendar, Home, CheckCircle2, Users, Award, Globe2
} from "lucide-react";
import heroImage from "@assets/images/seo-movers-orleans-village.png";
import { SeoKeywordsSection } from "@/components/seo-keywords-section";

const COMMUNITY_TABS = [
  { label: "Families", content: "Orleans Village is one of Ottawa's most family-oriented communities — top-rated schools, community centres, parks, and safe streets make it ideal for growing families. Our family move specialists handle the stress so you can focus on your family." },
  { label: "Bilingual Community", content: "Orleans is Canada's largest bilingual suburb — a vibrant mix of English and French-speaking families. Our team reflects Ottawa's diversity and serves the whole community with the same professional excellence." },
  { label: "New Builds & Subdivisions", content: "Orleans Village continues to grow with new home construction and subdivisions. Moving into a brand-new build? Our crew handles new-home move-ins carefully — protecting freshly painted walls, new floors, and brand new fixtures throughout." },
  { label: "Downsizing & Seniors", content: "Many long-time Orleans residents are now downsizing. Our compassionate senior moving team takes care of every detail — from careful packing of decades of memories to proper placement in your new home." },
];

export default function MoversInOrleansVillage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving - Orleans Village Movers Ottawa",
    "image": "https://prestigemoving.ca/og-image.png",
    "url": "https://prestigemoving.ca/movers-in-orleans-village",
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
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "350" },
    "areaServed": [
      { "@type": "Place", "name": "Orleans Village, Ottawa" },
      { "@type": "Place", "name": "Orleans, Ottawa" },
      { "@type": "Place", "name": "Convent Glen" },
      { "@type": "Place", "name": "Fallingbrook" },
      { "@type": "Place", "name": "Queenswood Heights" },
      { "@type": "Place", "name": "Avalon" }
    ],
    "description": "Top-rated movers in Orleans Village Ottawa. Serving the full Orleans community — Convent Glen, Fallingbrook, Queenswood Heights, Avalon and all East Ottawa suburbs. 350+ five-star reviews, WSIB certified. Free quote — (613) 600-4000."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much do movers in Orleans Village cost?", "acceptedAnswer": { "@type": "Answer", "text": "Orleans Village moving costs typically range from $620 to $2,500 depending on home size and services. A 2-bedroom home move in Orleans Village runs approximately $775–$1,200 all-in, while a 4-bedroom home is $1,500–$2,500+. Prestige Moving provides fully transparent quotes with zero hidden fees. Call (613) 600-4000 for your free Orleans Village moving estimate." } },
      { "@type": "Question", "name": "Do you offer family moving services in Orleans Village?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — family moves are our specialty in Orleans Village. We understand the complexity of moving a full household with children: managing the careful packing of kids' rooms, safely moving large furniture, coordinating around school schedules, and ensuring your family can settle in quickly. Our Orleans Village family moving team handles every detail so you can focus on your family during the transition." } },
      { "@type": "Question", "name": "Can you handle new build home moves in Orleans?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Moving into a brand-new Orleans Village home requires extra care — freshly painted walls, new hardwood floors, and brand-new fixtures must be protected throughout the move. Our crew uses floor runners, door jamb protectors, corner guards, and careful handling procedures specifically for new construction move-ins in Orleans." } },
      { "@type": "Question", "name": "Do you serve all Orleans Village neighbourhoods?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we serve the entire Orleans and Orleans Village community including Convent Glen, Fallingbrook, Queenswood Heights, Avalon, Chateauneuf, Longfields, Navan Road corridor, and all surrounding East Ottawa suburbs. We move between Orleans Village and every other Ottawa community with the same professional standard." } },
      { "@type": "Question", "name": "Are your Orleans Village movers insured and WSIB certified?", "acceptedAnswer": { "@type": "Answer", "text": "Every single Prestige Moving team member is WSIB certified and we carry comprehensive commercial liability insurance. Your Orleans Village home and belongings are fully protected from start to finish. We also offer additional valuation coverage for high-value items." } }
    ]
  };

  const faqs = faqSchema.mainEntity.map(q => ({ question: q.name, answer: q.acceptedAnswer.text }));

  const stats = [
    { icon: Star, value: "350+", label: "Five-Star Reviews" },
    { icon: TruckIcon, value: "10,000+", label: "Moves Completed" },
    { icon: Globe2, value: "Bilingual", label: "French & English Service" },
    { icon: Shield, value: "100%", label: "Fully Insured" },
  ];

  const processSteps = [
    { icon: Phone, title: "Free Quote", description: "Call (613) 600-4000 or book online. We'll provide a detailed, itemized quote for your Orleans Village move within 24 hours." },
    { icon: Calendar, title: "Book Your Date", description: "Pick any date — weekdays, weekends, mornings. We work around school schedules, lease deadlines, and your family's timeline." },
    { icon: TruckIcon, title: "Our Team Arrives", description: "Uniformed, trained Orleans Village movers arrive on time with all equipment — blankets, dollies, floor runners, and strapping." },
    { icon: Home, title: "Settled In", description: "We place and reassemble every item in your Orleans Village home. Your family is ready to start the next chapter." },
  ];

  const whyPrestige = [
    { icon: Award, title: "#1 Rated Ottawa Mover", detail: "350+ five-star Google reviews — more than any other Ottawa moving company." },
    { icon: Shield, title: "WSIB Certified & Insured", detail: "Every mover is certified. Every move is fully covered by commercial liability insurance." },
    { icon: Globe2, title: "Bilingual Service", detail: "We serve Orleans Village's bilingual community — English and French, with equal professionalism." },
    { icon: CheckCircle2, title: "Zero Hidden Fees", detail: "Your quote is your price. Labour, truck, travel — all itemized upfront. No surprises." },
    { icon: Users, title: "Family Moving Experts", detail: "We understand the complexity of full family moves — and handle every detail with care." },
    { icon: Clock, title: "Always On Time", detail: "We respect your schedule. Our Orleans Village movers arrive in your confirmed window, every time." },
  ];

  return (
    <>
      <Helmet>
        <title>Movers in Orleans Village Ottawa | #1 Rated Family Movers | Prestige Moving</title>
        <meta name="description" content="Looking for movers in Orleans Village Ottawa? Prestige Moving is Ottawa's #1 rated moving company — serving all Orleans communities with bilingual service, family moves & new build home protection. 350+ reviews. Call (613) 600-4000." />
        <meta name="keywords" content="movers in orleans village, orleans village movers, moving company orleans ottawa, orleans movers, family movers orleans, bilingual movers orleans ottawa, east ottawa movers, convent glen movers, fallingbrook movers, avalon movers ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/movers-in-orleans-village" />
        <meta property="og:title" content="Movers in Orleans Village Ottawa | Top-Rated Family Movers | Prestige Moving" />
        <meta property="og:description" content="Orleans Village's most trusted movers. Bilingual service, family moves, new builds. WSIB certified, 350+ reviews. Free quotes — (613) 600-4000." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prestigemoving.ca/movers-in-orleans-village" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <meta property="og:locale" content="en_CA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Movers in Orleans Village Ottawa | Prestige Moving" />
        <meta name="twitter:description" content="Trusted Orleans Village movers. Bilingual, family-focused, WSIB certified. 350+ five-star reviews. Call (613) 600-4000." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SharedNavigation />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="relative h-[520px] flex items-center" data-testid="section-hero">
          <img src={heroImage} alt="Professional movers in Orleans Village Ottawa loading a family home" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1A2332]/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/90 to-[#1A2332]/30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-5">
              <Globe2 className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Orleans Village · East Ottawa</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" data-testid="text-hero-heading">
              Top-Rated Movers in<br className="hidden sm:block" /> Orleans Village
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">Ottawa's #1 rated moving company — serving Orleans Village families with bilingual service, expert new-build protection, and 350+ five-star reviews. Zéro frais cachés.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572] font-bold" data-testid="button-hero-quote">Get Free Quote <ArrowRight className="h-4 w-4 ml-2" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10" data-testid="button-hero-call"><Phone className="h-4 w-4 mr-2" />Call (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        <ServiceQuoteForm defaultService="Moving" serviceName="Orleans Village Moving" />

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

        {/* Community tabs — interactive */}
        <section className="py-16 bg-gray-50" data-testid="section-community">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Moving in Orleans Village — We Know Your Community</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Orleans Village serves a diverse, growing population. Select your situation below to see how Prestige Moving serves you.</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {COMMUNITY_TABS.map((tab, i) => (
                <button key={i} onClick={() => setActiveTab(i)}
                  className={`px-5 py-2.5 rounded-full border text-sm font-semibold transition-colors ${activeTab === i ? "bg-[#C5A572] text-white border-[#C5A572]" : "bg-white text-gray-600 border-gray-200 hover-elevate"}`}
                  data-testid={`tab-${i}`}>
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="bg-[#1A2332] rounded-lg p-8 text-center max-w-3xl mx-auto min-h-[140px] flex items-center justify-center" data-testid="tab-content">
              <p className="text-white/80 text-lg leading-relaxed">{COMMUNITY_TABS[activeTab].content}</p>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 bg-white" data-testid="section-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Why Orleans Village Chooses Our Movers</h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Orleans Village is East Ottawa's thriving bilingual community — one of the fastest-growing areas in the National Capital Region. As families grow, new builds fill up, and long-time residents downsize, the demand for reliable, professional <strong className="text-[#1A2332]">movers in Orleans Village</strong> continues to rise. Prestige Moving has served the Orleans community for years, building a reputation for punctual, careful, transparent service that matches the community's expectations. We understand the specific moving challenges of Orleans: navigating the growing number of new subdivisions, managing long-distance moves from Orleans to other Ottawa communities, and protecting the interiors of Ottawa's newest homes during move-in.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Orleans Village residents also benefit from our bilingual customer service — we serve the community in both English and French with the same high standard of professionalism. Our call centre team, dispatchers, and moving crews reflect the bilingual character of Ottawa's east end. Call us at <a href="tel:6136004000" className="text-[#C5A572] hover:underline font-semibold">(613) 600-4000</a> in English or French.
                </p>
                <div className="space-y-3">
                  {["Same-day quotes available", "Weekend and evening moves", "New build home specialists", "Senior downsizing experts", "Full packing & unpacking service", "Bilingual English & French service"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700" data-testid={`feature-${i}`}>
                      <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1A2332] mb-4">All Orleans Village Neighbourhoods Served</h3>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Prestige Moving serves every sub-neighbourhood within the Orleans Village and broader Orleans community, including Convent Glen, Fallingbrook, Queenswood Heights, Avalon, Chateauneuf, Longfields, Mer Bleue, and the Navan Road corridor. We move between Orleans and all other Ottawa communities — from nearby <Link href="/movers-in-gloucester" className="text-[#C5A572] hover:underline">Gloucester</Link> and <Link href="/movers-in-beacon-hill" className="text-[#C5A572] hover:underline">Beacon Hill</Link> to cross-city moves to <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, <Link href="/movers-in-barrhaven" className="text-[#C5A572] hover:underline">Barrhaven</Link>, and <Link href="/movers-in-nepean" className="text-[#C5A572] hover:underline">Nepean</Link>.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  For Orleans Village residents relocating out of the National Capital Region entirely, our <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">long-distance moving service</Link> provides the same professional standard across any distance — Ottawa to Toronto, Montreal, or anywhere in Canada. For new builds, <Link href="/services/packing-services" className="text-[#C5A572] hover:underline">packing services</Link>, specialty items, or <Link href="/services/storage-solutions" className="text-[#C5A572] hover:underline">storage solutions</Link>, we handle every aspect of your Orleans Village move under one roof.
                </p>
                <div className="bg-[#C5A572]/8 border border-[#C5A572]/20 rounded-lg p-5">
                  <div className="font-bold text-[#1A2332] mb-2">Free Moving Quote — Orleans Village</div>
                  <p className="text-gray-600 text-sm mb-3">Get a detailed, itemized quote for your Orleans Village move within 24 hours.</p>
                  <div className="flex flex-wrap gap-2">
                    <Link href="/book"><Button className="bg-[#C5A572] hover:bg-[#B8956A] text-white border-[#C5A572] text-sm" data-testid="button-content-quote">Book Online</Button></Link>
                    <a href="tel:6136004000"><Button variant="outline" className="text-sm" data-testid="button-content-call"><Phone className="h-3.5 w-3.5 mr-1.5" />(613) 600-4000</Button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Prestige #1 */}
        <section className="py-16 bg-[#1A2332]" data-testid="section-why-prestige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-4">
                <Award className="h-4 w-4 text-[#C5A572]" />
                <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa's #1 Moving Company</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Why Ottawa Families Trust Prestige Moving</h2>
              <p className="text-white/60 max-w-2xl mx-auto">350+ five-star reviews. 10,000+ moves completed across Ottawa. One standard of excellence — for every family, in every community.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyPrestige.map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-6 hover-elevate" data-testid={`why-${i}`}>
                  <div className="w-10 h-10 bg-[#C5A572]/15 rounded-md flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-[#C5A572]" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50" data-testid="section-process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">How Our Orleans Village Moving Process Works</h2>
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
        <section className="py-16 bg-white" data-testid="section-faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Frequently Asked Questions — Orleans Village Movers</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-md overflow-hidden">
                  <button className="w-full flex items-center justify-between gap-4 p-4 text-left hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`button-faq-${i}`}>
                    <span className="font-semibold text-[#1A2332]">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && <div className="px-4 pb-4 text-gray-600 leading-relaxed">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <SeoKeywordsSection currentPage="/movers-in-orleans-village" />

        {/* CTA */}
        <section className="py-16 bg-[#C5A572]" data-testid="section-cta">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move in Orleans Village?</h2>
            <p className="text-white/80 text-lg mb-8">Get your free, no-obligation quote today — in English or French. 350+ five-star reviews. Ottawa's most trusted family moving company.</p>
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
