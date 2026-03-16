import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, Shield, Clock, Truck, FileText } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function LawFirmMoversOttawa() {
  const faq = [
    { q: "How do you handle confidential client files during a law firm move?", a: "Client files, case documents, and confidential records are moved in locked banker boxes or sealed containers. Our crews respect chain of custody and never open or handle file contents." },
    { q: "Can you move a law firm over a weekend to avoid business disruption?", a: "Yes — weekend and overnight law firm moves are our specialty. We complete the move Friday evening through Sunday so you're fully operational Monday morning." },
    { q: "Do you move law libraries and legal research collections?", a: "Yes. We handle full law library relocations including bound reporters, loose-leaf publications, and legal databases. We number and label shelves for accurate re-shelving at the new location." },
    { q: "How do you protect sensitive client files during transit?", a: "Banker boxes are sealed and numbered, transported in locked trucks, and inventoried at both origin and destination. We provide a full chain of custody record on request." },
    { q: "Do you disconnect and reconnect office technology?", a: "We disconnect, label, and transport all technology. Reconnection of IT infrastructure is handled by your IT team or a third party — we coordinate scheduling to ensure a smooth handover." },
    { q: "How much does it cost to move a law firm in Ottawa?", a: "Law firm moving costs depend on the number of offices, library volume, and IT equipment. We provide binding quotes after an on-site assessment. Most small to mid-size firms in Ottawa are quoted $2,000–$8,000." },
  ];

  return (
    <>
      <Helmet>
        <title>Law Firm Movers Ottawa | Legal Office Relocation Specialists | Prestige Moving</title>
        <meta name="description" content="Specialist law firm movers in Ottawa. Confidential file handling, weekend moves, law library relocation, and zero business disruption guaranteed. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/law-firm-movers-ottawa" />
        <meta property="og:title" content="Law Firm Movers Ottawa | Prestige Moving" />
        <meta property="og:description" content="Ottawa's trusted law firm moving specialists. Confidential handling of legal files, weekend moves, and full library relocations with zero disruption." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "areaServed": "Ottawa",
          "description": "Law firm and legal office moving specialists in Ottawa. Confidential document handling and minimal business disruption.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="h-4 w-4" /> Legal Office Relocation · Ottawa
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Law Firm Movers Ottawa</h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Confidential. Efficient. Zero disruption. Prestige Moving specializes in law firm relocations across Ottawa — weekend moves, file chain of custody, and full library transfers included.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000"><Button size="lg" className="bg-[#C5A572] text-white font-bold px-8"><Phone className="h-5 w-5 mr-2" /> (613) 600-4000</Button></a>
              <Link href="/booking"><Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Get Free Quote</Button></Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-10">What We Handle in a Law Firm Move</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {["Partner & Associate Offices", "Reception & Common Areas", "Law Library Collections", "Confidential Client Files", "Boardrooms & Conference Rooms", "Legal Technology & Servers", "Filing & Records Rooms", "Mailrooms & Storage", "Breakrooms & Kitchens"].map(item => (
                <div key={item} className="flex items-center gap-2 p-4 bg-gray-50 rounded-md">
                  <CheckCircle className="h-4 w-4 text-[#C5A572] shrink-0" />
                  <span className="text-[#1A2332] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Shield className="h-5 w-5" />, title: "Confidential File Protocol", desc: "Banker boxes sealed, numbered, and inventoried. No crew member opens or accesses file contents. Chain of custody documentation provided on request." },
                { icon: <Clock className="h-5 w-5" />, title: "Weekend & After-Hours", desc: "We move your firm Friday evening through Sunday. Monday morning you're fully open with zero client disruption." },
                { icon: <FileText className="h-5 w-5" />, title: "Law Library Relocation", desc: "Every volume numbered and shelved to your exact specifications. We work with your librarian to ensure accurate re-shelving at the new location." },
                { icon: <Star className="h-5 w-5" />, title: "4.9-Star Commercial Track Record", desc: "Hundreds of successful commercial moves in Ottawa — from solo practices to multi-floor national firm offices." },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-6 bg-white rounded-md border border-gray-100">
                  <div className="text-[#C5A572] mt-0.5 shrink-0">{item.icon}</div>
                  <div><h3 className="font-bold text-[#1A2332] mb-1">{item.title}</h3><p className="text-gray-600 text-sm">{item.desc}</p></div>
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
            <h2 className="text-3xl font-bold mb-4">Move Your Law Firm Without Missing a Beat</h2>
            <p className="text-white/70 mb-8">Get a binding quote for your Ottawa law firm relocation. Weekend moves available.</p>
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
