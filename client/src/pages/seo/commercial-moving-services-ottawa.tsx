import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, Building, Shield, Clock, Truck, FileText, Users } from "lucide-react";
import { Link } from "wouter";
import SharedFooter from "@/components/shared-footer";
import SharedNavigation from "@/components/shared-navigation";

export default function CommercialMovingServicesOttawa() {
  const industries = ["Government & Federal Departments", "Law Firms & Legal Offices", "Medical Clinics & Dental Offices", "IT Companies & Tech Firms", "Retail Stores & Boutiques", "Restaurants & Food Service", "Non-Profits & Associations", "Financial Services", "Architecture & Design Firms", "Educational Institutions"];

  const faq = [
    { q: "What commercial moving services do you offer in Ottawa?", a: "Our Ottawa commercial moving services include office relocations, retail store moves, medical practice moves, government department moves, IT equipment relocation, server room moves, warehouse relocations, and furniture installation." },
    { q: "How do you minimize business downtime during a commercial move?", a: "We offer weekend and evening commercial moves, phased relocation plans, dedicated project management, and efficient crews who work quickly without sacrificing care. Most Ottawa office moves complete over one weekend." },
    { q: "Can you move IT equipment and servers safely?", a: "Yes. Our IT equipment relocation service includes anti-static packaging, custom crating for servers, secure transport, and a documented chain of custody. We coordinate with your IT team for disconnection and reconnection." },
    { q: "Do you provide a moving project manager for large commercial moves?", a: "Yes. Commercial moves of any significant size receive a dedicated project manager who plans the timeline, coordinates access, manages crew, and is your single point of contact from planning to completion." },
    { q: "Are your commercial movers insured for business assets?", a: "Yes. We carry commercial general liability up to $5 million and cargo insurance on all commercial moves. Certificate of insurance is available for building management and clients who require it." },
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Moving Services Ottawa | Office & Business Movers | Prestige Moving</title>
        <meta name="description" content="Full-service commercial moving in Ottawa. Office relocations, IT equipment, retail & medical moves. Weekend service, project management, $5M insured. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/commercial-moving-services-ottawa" />
        <meta property="og:title" content="Commercial Moving Services Ottawa | Prestige Moving" />
        <meta property="og:description" content="Ottawa's commercial moving specialists. Office relocations, IT equipment, retail, medical. Weekend service, full project management." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa — Commercial Division",
          "url": "https://prestigemoving.ca/commercial-moving-services-ottawa",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building className="h-4 w-4" /> Commercial Moving · Ottawa Businesses
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Commercial Moving<br />Services Ottawa
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Ottawa businesses trust Prestige Moving for every type of commercial relocation. Office moves, retail transitions, medical practice relocations — handled with project management precision and minimal business disruption.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Commercial Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Weekend & Evening Service</span>
            <span className="flex items-center gap-2"><FileText className="h-4 w-4" /> Project Management Included</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> $5M Commercial Insurance</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 4.9-Star Rated</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Commercial Moving Services We Provide</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Building className="h-6 w-6" />, title: "Office Relocations", desc: "Complete office moves from small suites to large corporate floors. Furniture, equipment, files, IT — all handled." },
                { icon: <Truck className="h-6 w-6" />, title: "Retail Store Moves", desc: "Moving retail fixtures, inventory, shelving, and POS systems with minimal store closure time." },
                { icon: <Shield className="h-6 w-6" />, title: "Medical Office Moves", desc: "Clinics, dental offices, imaging centres, and labs moved with PIPEDA-compliant record handling." },
                { icon: <Users className="h-6 w-6" />, title: "Government Moves", desc: "Federal and municipal department relocations with security clearance coordination and chain-of-custody documentation." },
                { icon: <FileText className="h-6 w-6" />, title: "IT & Server Relocation", desc: "Anti-static packaging, custom crating, and coordinated disconnection/reconnection with your IT team." },
                { icon: <Clock className="h-6 w-6" />, title: "After-Hours & Weekends", desc: "Move your Ottawa business without disrupting operations. We work evenings and weekends by default for commercial clients." },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-md p-6">
                  <div className="text-[#C5A572] mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#1A2332] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-6">Industries We Serve in Ottawa</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {industries.map((ind) => (
                <span key={ind} className="bg-white border border-gray-200 text-[#1A2332] px-4 py-2 rounded-md text-sm font-medium">{ind}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Commercial Moving FAQs</h2>
            <div className="space-y-6">
              {faq.map((item) => (
                <div key={item.q} className="border border-gray-200 rounded-md p-6">
                  <h3 className="font-bold text-[#1A2332] mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1A2332] py-20 px-4 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Plan Your Ottawa Commercial Move</h2>
            <p className="text-white/70 mb-8">Get a free commercial moving quote from Ottawa's most trusted business movers.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Request Commercial Quote</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
