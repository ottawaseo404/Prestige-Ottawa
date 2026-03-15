import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, TruckIcon } from "lucide-react";

const FAQS = [
  { q: "Can Prestige Moving relocate medical equipment?", a: "Yes. We handle examination tables, waiting room furniture, medical storage units, filing systems, and standard office equipment. For specialized medical devices (imaging equipment, surgical tools, laboratory instruments), we coordinate with your equipment vendor or specialist handler. Please note all specialty items during the quote process." },
  { q: "How do you handle confidential patient records during a medical office move?", a: "Patient records require chain-of-custody care. We use locked, sealed containers for physical records transport and work within your practice's privacy protocols. For PHIPA compliance, your administrative staff typically oversees the physical records transport while we handle all other office contents." },
  { q: "Can you move our medical office after hours or on weekends?", a: "Yes — and for medical practices, this is usually the preferred approach to avoid patient appointment disruptions. We schedule weekend moves that allow your practice to be operational by Monday morning." },
  { q: "What types of medical facilities do you move?", a: "Family medicine clinics, specialist offices, physiotherapy and rehabilitation clinics, dental offices (coordination with dental equipment specialists), optometry practices, walk-in clinics, and allied health offices. We service the full range of Ottawa's medical community." },
  { q: "Do you move medical offices to Gatineau or the surrounding NCR?", a: "Yes. We serve all Ottawa and Gatineau medical facilities, including relocations between provinces (Ontario to Quebec). Cross-river moves from Ottawa to Gatineau are routine for us." },
];

export default function MedicalOfficeMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Medical Office Movers Ottawa | Healthcare Relocation | Prestige Moving</title>
        <meta name="description" content="Ottawa's medical office movers. We relocate family clinics, specialist offices, physiotherapy practices, and healthcare facilities across the NCR. Call (613) 600-4000." />
        <meta name="keywords" content="medical office movers Ottawa, healthcare office relocation Ottawa, clinic movers Ottawa, doctor office moving Ottawa, physiotherapy clinic movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/medical-office-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/medical-office-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Medical Office Moving — Ottawa</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Medical Office Movers Ottawa — Healthcare Facility Relocation</h1>
            <p className="text-white/70 text-lg mb-8">Medical and healthcare office relocations in Ottawa require careful planning, privacy-conscious execution, and scheduling that doesn't disrupt patient care. Prestige Moving handles medical office moves across the National Capital Region with discretion and professionalism.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Medical Office Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Weekend Scheduling", "Privacy-Conscious", "Medical Equipment Capable", "5.0★ Rated", "Written Quote"].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Medical Office Relocation in Ottawa — Our Approach</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Healthcare facilities present unique moving challenges — patient privacy requirements, sensitive equipment, after-hours access restrictions, and the absolute need to be operational by the next scheduled appointment day. A medical office move that runs long or goes wrong doesn't just create inconvenience; it disrupts patient care.</p>
            <p>We approach medical office relocations differently than standard commercial moves. The planning process involves site walkthroughs at both origin and destination, identification of all specialized equipment, coordination with your clinic manager on record-handling protocols, and a timeline that guarantees your new space is ready before your first Monday appointment.</p>
            <p>Ottawa's medical community is spread across multiple hubs — the medical offices along Carling Avenue, Centerpointe, Barrhaven, Orléans, and the various hospital-adjacent clinics near CHEO, Ottawa General, and the Civic. We service all of these areas and coordinate building access, parking, and elevator reservations in advance.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">What We Handle</h3>
              <div className="space-y-2">
                {["Examination tables and medical furniture", "Reception and waiting room furniture", "Medical storage and supply units", "Filing systems and administrative equipment", "Computer and diagnostic equipment", "Staff workstations and common areas"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1A2332] mb-3">Medical Facility Types</h3>
              <div className="space-y-2">
                {["Family medicine and GP clinics", "Specialist offices (cardiology, ortho, etc.)", "Physiotherapy and rehab clinics", "Mental health and psychology offices", "Walk-in clinics and urgent care", "Allied health and wellness centres"].map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full text-left px-5 py-4 font-semibold text-[#1A2332] flex justify-between items-center" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}<span className="text-[#C5A572] text-xl">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Moving a Medical Office in Ottawa?</h2>
          <p className="text-white/70 mb-6">Get a quote for your healthcare facility relocation. We plan around your patient schedule.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Medical Office Quote</Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
