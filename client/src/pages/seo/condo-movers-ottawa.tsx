import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, Star, Shield, Clock, TruckIcon, Building2, ChevronDown, Package, MapPin } from "lucide-react";

const FAQS = [
  { q: "How much does a condo move cost in Ottawa?", a: "Condo moves in Ottawa typically range from $465–$1,400 depending on size, floor, building requirements, and distance. Our Premium package at $155/hr (2 movers + truck) covers most 1–2 bedroom condos. Written quote provided before booking — final invoice always matches." },
  { q: "Do you handle the condo elevator booking?", a: "Yes. We contact your condo building management to arrange elevator booking, loading bay reservation, and confirm your move window requirements. We coordinate both your origin and destination buildings." },
  { q: "What if my condo building has strict move-in times?", a: "We work within your building's specified move window. Our crews are on-time and efficient — we plan specifically to ensure the move is completed within your allotted building access period." },
  { q: "Can you move large condo furniture like sectionals and king beds?", a: "Yes. We assess large items during your estimate. Some oversized furniture may need partial disassembly to navigate condo hallways and elevators. Our crew handles all disassembly and reassembly included in your move." },
  { q: "Do you protect condo floors and hallways during the move?", a: "Always. Floor runners, door frame guards, and elevator padding are standard on every condo move. We protect building common areas and your unit's surfaces throughout the job." },
];

export default function CondoMoversOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Condo Movers Ottawa | High-Rise & Condo Moving Specialists | Prestige Moving</title>
        <meta name="description" content="Professional condo movers in Ottawa. Prestige Moving specializes in high-rise condo moves with elevator booking, loading bay coordination, and full surface protection. 5.0★ rated. Call (613) 600-4000." />
        <meta name="keywords" content="condo movers Ottawa, condo moving Ottawa, high-rise movers Ottawa, Ottawa condo moving company, condo moving services Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/condo-movers-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "MovingCompany", "name": "Prestige Moving Ottawa", "url": "https://prestigemoving.ca/condo-movers-ottawa", "telephone": "(613) 600-4000", "priceRange": "$$", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "400" } })}</script>
      </Helmet>
      <SharedNavigation />

      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Building2 className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Condo Moving</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Ottawa Condo Movers —<br className="hidden md:block" /> High-Rise Specialists</h1>
            <p className="text-white/70 text-lg mb-8">Condo moves require elevator booking, loading bay coordination, and strict timing. Prestige Moving handles every logistics detail so your move-in or move-out goes flawlessly — from the 2nd floor to the 30th.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
            {["Elevator Booking Included", "Loading Bay Coordination", "Surface Protection Standard", "5.0★ Rated", "WSIB Certified"].map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1A2332] mb-5">The Condo Moving Difference</h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>Condo moving in Ottawa is fundamentally different from moving a house. The building itself becomes a logistics variable — elevator windows, loading bay bookings, service elevator requirements, concierge check-ins, and noise bylaws that restrict move times all add layers of complexity that a crew without specific high-rise experience will struggle to navigate.</p>
                <p>Ottawa's condo market has grown significantly over the past decade. New high-rise towers in <Link href="/residential-movers-centretown" className="text-[#C5A572] hover:underline">Centretown</Link>, along the LRT corridor, in <Link href="/residential-movers-westboro" className="text-[#C5A572] hover:underline">Westboro</Link>, and in <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link> have added thousands of condo units to the Ottawa market. Each of these buildings has its own move protocols — and Prestige Moving has worked within virtually all of them.</p>
                <p>Our condo move process begins before moving day. When you book, we contact building management at both your origin and destination addresses to confirm elevator availability, reserve loading bay access, and identify any building-specific requirements (protective padding in elevators, lobby runner requirements, access card needs for the service entrance). On move day, all of this is already arranged — the crew arrives knowing exactly what they need and how to access it.</p>
                <p>Surface protection in condos is non-negotiable. Building common areas — elevators, lobby floors, hallways — are shared property and any damage caused by movers is billed to the unit owner. Our crew deploys floor runners in all common area pathways, pads elevator walls, and uses door frame guards on every unit entry point. This protects the building, protects your security deposit, and reflects the professional standard our clients expect.</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#1A2332] text-lg mb-4">What's Included in Every Condo Move</h3>
              {[
                "Elevator booking coordination with building management",
                "Loading bay reservation at origin and destination",
                "Floor runners throughout all common area pathways",
                "Elevator wall padding installed on arrival",
                "Door frame guards on all unit entry points",
                "Full furniture blanket wrapping on every item",
                "Disassembly and reassembly of oversized furniture",
                "On-time arrival within your building move window",
                "Written quote — final invoice always matches",
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
              <div className="mt-6 bg-[#1A2332] rounded-xl p-5">
                <div className="text-[#C5A572] font-bold mb-1">Starting from $155/hr</div>
                <div className="text-white/70 text-sm">Premium: 2 movers + truck · 3-hour minimum</div>
                <Link href="/book" className="mt-3 block">
                  <Button className="bg-[#C5A572] text-[#1A2332] font-bold w-full">Book Your Condo Move</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Condo Movers Ottawa — FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Book Ottawa's Condo Moving Specialists</h2>
          <p className="text-white/65 mb-8">Written quote · Elevator booking included · 5.0★ rated · WSIB certified</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
