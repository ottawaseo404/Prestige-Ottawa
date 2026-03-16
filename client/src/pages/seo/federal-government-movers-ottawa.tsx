import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Shield, Clock, Truck, FileText } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function FederalGovernmentMoversOttawa() {
  const faq = [
    { q: "Do you move federal government departments in Ottawa?", a: "Yes. Prestige Moving regularly handles office and equipment relocations for federal government departments, Crown corporations, and agencies across Ottawa and Gatineau." },
    { q: "Can you work within government procurement requirements?", a: "Yes. We are experienced working within government procurement frameworks and can provide the documentation, certificates of insurance, and references required for government contracts." },
    { q: "Do you handle RCMP and security-related office moves?", a: "We handle sensitive government moves with absolute professionalism. Our crews are background-checked and can work within required security protocols." },
    { q: "Can you move IT infrastructure for government offices?", a: "Yes. We have a dedicated IT equipment moving team that handles servers, workstations, secure document storage, and telecommunications infrastructure." },
    { q: "Do you move between Ottawa and Gatineau government buildings?", a: "Yes — cross-river moves between Ottawa and Gatineau are one of our most common government relocation routes." },
    { q: "How do you handle classified or sensitive materials?", a: "Classified materials must be handled through government-designated secure channels. We coordinate our moves to align with your department's security protocols for sensitive materials." },
  ];

  const departments = ["Treasury Board", "Public Services & Procurement Canada", "National Defence", "Health Canada", "Finance Canada", "Immigration, Refugees & Citizenship", "Environment & Climate Change", "Agriculture & Agri-Food", "Crown Corporations", "Federal Agencies & Tribunals"];

  return (
    <>
      <Helmet>
        <title>Federal Government Movers Ottawa | Government Office Relocation | Prestige Moving</title>
        <meta name="description" content="Trusted federal government movers in Ottawa. Department relocations, IT infrastructure moves, and inter-departmental office transfers. Call Prestige Moving (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/federal-government-movers-ottawa" />
        <meta property="og:title" content="Federal Government Movers Ottawa | Prestige Moving" />
        <meta property="og:description" content="Ottawa's experienced federal government moving specialists. Fully insured, background-checked crews for department and agency relocations." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": ["Ottawa", "Gatineau"],
          "description": "Federal government office and department moving specialists in Ottawa and Gatineau.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="h-4 w-4" /> Federal Government Moving · Ottawa & Gatineau
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Federal Government Movers Ottawa</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Ottawa is Canada's seat of government. Prestige Moving provides professional, insured, and procurement-compliant moving services for federal departments and agencies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-10">Government Moving Services</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: <Truck className="h-5 w-5" />, title: "Department Relocations", desc: "Full office moves for federal departments — workstations, filing systems, boardrooms, and common areas — completed efficiently with minimal disruption." },
                { icon: <Shield className="h-5 w-5" />, title: "IT Infrastructure Moving", desc: "Servers, secure workstations, printers, and communications equipment handled by our specialized IT equipment team." },
                { icon: <FileText className="h-5 w-5" />, title: "Records & Document Moving", desc: "Secure transport of filing cabinets, classified document containers, and archival storage within your department's security protocols." },
                { icon: <Clock className="h-5 w-5" />, title: "Ottawa ↔ Gatineau", desc: "Cross-river relocations between Ottawa and Gatineau government buildings are one of our most common services." },
                { icon: <CheckCircle className="h-5 w-5" />, title: "Procurement-Compliant", desc: "We provide all documentation required for government procurement, including certificates of insurance, WSIB clearance, and references." },
                { icon: <Star className="h-5 w-5" />, title: "Background-Checked Crews", desc: "All crew members are background-checked and trained in professional conduct for sensitive government environments." },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-6 bg-white rounded-md border border-gray-100">
                  <div className="text-[#C5A572] mt-0.5 shrink-0">{item.icon}</div>
                  <div><h3 className="font-bold text-[#1A2332] mb-1">{item.title}</h3><p className="text-gray-600 text-sm">{item.desc}</p></div>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-[#1A2332] text-center mb-6">Departments & Agencies We've Served</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {departments.map(dept => (
                <div key={dept} className="flex items-center gap-2 p-3 bg-gray-50 rounded-md">
                  <CheckCircle className="h-4 w-4 text-[#C5A572] shrink-0" />
                  <span className="text-[#1A2332] text-sm">{dept}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faq.map(item => (
                <div key={item.q} className="border border-gray-200 rounded-md p-6 bg-white">
                  <h3 className="font-bold text-[#1A2332] mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1A2332] py-20 px-4 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Get a Government Moving Quote in Ottawa</h2>
            <p className="text-white/70 mb-8">Contact us for a compliant, professional moving quote for your federal department or agency.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
