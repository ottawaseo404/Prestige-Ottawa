import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, Building, Shield, Clock, Users, FileText, Truck } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function CorporateRelocationServicesOttawa() {
  const faq = [
    { q: "What corporate relocation services do you provide in Ottawa?", a: "Our Ottawa corporate relocation services include employee relocation management, full household moving, temporary storage, expense reporting support, destination services coordination, and volume pricing for companies relocating multiple employees." },
    { q: "Can you handle multiple employee relocations for our Ottawa company?", a: "Yes. We have corporate accounts with Ottawa employers for recurring relocation needs. Volume discounts apply for 3+ moves per year. We assign a dedicated account manager to coordinate all activity." },
    { q: "Do you move employees from other cities to Ottawa?", a: "Yes — both directions. We move employees into Ottawa from Toronto, Vancouver, Calgary, and other Canadian cities, as well as relocating Ottawa employees to other provinces." },
    { q: "What is the average cost of corporate relocation in Ottawa?", a: "Local Ottawa corporate relocations start at $155/hr (Premium package). Cross-Canada employee relocations are quoted at a binding flat rate based on home size and destination. HR contact rates available for corporate accounts." },
    { q: "Can you provide relocation documentation for expense reimbursement?", a: "Yes. We provide detailed invoicing, itemized receipts, and documentation packages suitable for corporate expense reporting and CRA relocation deduction purposes." },
  ];

  return (
    <>
      <Helmet>
        <title>Corporate Relocation Services Ottawa | Employee Moving | Prestige Moving</title>
        <meta name="description" content="Professional corporate relocation services in Ottawa. Employee moves, multi-location relocations, binding quotes & expense documentation. Corporate accounts available. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/corporate-relocation-services-ottawa" />
        <meta property="og:title" content="Corporate Relocation Services Ottawa | Prestige Moving" />
        <meta property="og:description" content="Ottawa corporate relocation specialists. Employee moves, volume pricing, binding quotes, and full expense documentation for HR departments." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa — Corporate Relocation",
          "url": "https://prestigemoving.ca/corporate-relocation-services-ottawa",
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
              <Building className="h-4 w-4" /> Corporate Relocation · Ottawa & Canada-Wide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Corporate Relocation<br />Services Ottawa
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Relocating employees to or from Ottawa? Prestige Moving's corporate relocation division handles everything — from single-employee moves to multi-person relocation programs — with the efficiency your HR team demands.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Corporate Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><Users className="h-4 w-4" /> Corporate Accounts Available</span>
            <span className="flex items-center gap-2"><FileText className="h-4 w-4" /> Expense Documentation</span>
            <span className="flex items-center gap-2"><Truck className="h-4 w-4" /> Cross-Canada Employee Moves</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 4.9-Star Rated</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Our Corporate Relocation Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Users className="h-6 w-6" />, title: "Employee Household Moving", desc: "Professional full-service household moves for relocating employees. Packing, transit, delivery, and unpacking." },
                { icon: <Truck className="h-6 w-6" />, title: "Cross-Canada Relocation", desc: "Moving employees from Ottawa to any Canadian city, or from anywhere in Canada to Ottawa." },
                { icon: <Building className="h-6 w-6" />, title: "Office Relocation", desc: "Moving your Ottawa office alongside employees — one coordinated transition, minimal downtime." },
                { icon: <Shield className="h-6 w-6" />, title: "Storage Between Homes", desc: "Secure short-term storage for employees between selling and purchasing property during a relocation." },
                { icon: <FileText className="h-6 w-6" />, title: "Expense Documentation", desc: "Detailed invoicing and relocation expense packages for corporate reimbursement and CRA deduction purposes." },
                { icon: <Clock className="h-6 w-6" />, title: "Volume Account Pricing", desc: "Corporate rate agreements for companies relocating 3+ employees per year. Dedicated account manager included." },
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Corporate Relocation FAQs</h2>
            <div className="space-y-6">
              {faq.map((item) => (
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
            <h2 className="text-3xl font-bold mb-4">Set Up a Corporate Account Today</h2>
            <p className="text-white/70 mb-8">Talk to our corporate relocation team about volume pricing, account management, and tailored services for your Ottawa company.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Request Corporate Quote</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
