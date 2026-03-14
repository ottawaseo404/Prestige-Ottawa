import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, Star, CheckCircle2, Shield, TruckIcon, Building2, Clock, Users, AlertTriangle, ThumbsUp } from "lucide-react";

const CHECKLIST = [
  { item: "Google rating 4.8+ with 100+ reviews", important: true },
  { item: "WSIB certificate current and valid", important: true },
  { item: "$2M+ liability insurance", important: true },
  { item: "Written quote before any work begins", important: true },
  { item: "No fuel surcharge or hidden fees disclosed upfront", important: true },
  { item: "Physical Ottawa address (not a virtual office)", important: false },
  { item: "Named, trained employees (not day labour)", important: false },
  { item: "Dedicated project coordinator for your move", important: false },
];

const PRESTIGE_REVIEWS = [
  { name: "Sarah M.", neighbourhood: "Westboro", rating: 5, text: "Moved from a 3-bedroom house in Westboro to Orleans. The crew was on time, careful with everything, and finished faster than quoted. Nothing was damaged. Worth every penny — I've used them twice now." },
  { name: "James T.", neighbourhood: "Centretown", rating: 5, text: "Had a tricky apartment move — 12th floor, narrow elevator, tight loading bay window. They handled the elevator booking, arrived exactly when they said, and were out of the building within the window. Impressive logistics." },
  { name: "Priya R.", neighbourhood: "Kanata", rating: 5, text: "Used Prestige for our company office move — 15 workstations and a server room. Project manager was on-site, everything was labeled and placed exactly where we needed it. Back to full operations Monday morning." },
  { name: "Michel L.", neighbourhood: "Orleans", rating: 5, text: "Moved a grand piano and a full 4-bedroom house. The piano crew was incredible — protective wrapping, two men dedicated just to the piano, placed perfectly in the new home. Zero damage to anything." },
];

export default function MovingCompaniesOttawaReviews() {
  return (
    <>
      <Helmet>
        <title>Best Moving Companies Ottawa 2026 | Reviews & Comparison | Prestige Moving</title>
        <meta name="description" content="Comparing the best moving companies in Ottawa for 2026. What to look for in an Ottawa mover, red flags to avoid, and why Prestige Moving leads Ottawa's market with 400+ 5.0★ reviews. Call (613) 600-4000." />
        <meta name="keywords" content="best moving companies Ottawa, moving companies Ottawa reviews, Ottawa movers reviews, top moving companies Ottawa, moving company comparison Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-companies-ottawa-reviews" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Best Moving Companies Ottawa 2026 — Reviews & Comparison", "publisher": { "@type": "Organization", "name": "Prestige Moving Ottawa" }, "url": "https://prestigemoving.ca/moving-companies-ottawa-reviews" })}</script>
      </Helmet>
      <SharedNavigation />

      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Star className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Movers Review Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Best Moving Companies Ottawa<br className="hidden md:block" /> 2026 — What to Look For</h1>
            <p className="text-white/70 text-lg mb-8">Not all Ottawa movers are equal. This guide explains what separates reliable, professional moving companies from the ones that cost you more in the end — damaged furniture, hidden fees, and no-show crews.</p>
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
            {["5.0★ · 400+ Google Reviews", "WSIB Certified", "$2M+ Insured", "Written Quote Guaranteed", "No Hidden Fees"].map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      </div>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">How to Choose a Moving Company in Ottawa</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Ottawa's moving market has grown significantly over the past decade, creating both more options and more risk. The city's population growth — driven by federal government hiring, the tech sector in Kanata, and in-migration from Toronto and Montreal — has attracted dozens of new moving companies, ranging from established professional operations to informal operations running a rented truck with day labourers.</p>
            <p>The critical distinction Ottawa residents need to understand is the difference between a licensed, insured, reviewed moving company and a price-competitive but unverified operation. The financial and logistical risks of choosing the latter far outweigh any hourly rate savings. Here's a concrete example: if an uninsured crew member injures themselves on your property, you — not the moving company — may be liable for WSIB-equivalent claims. If an uninsured mover damages your $3,000 sectional, there is no insurance policy covering your loss. If the "company" consists of a Kijiji post and a rented U-Haul, there is no recourse when things go wrong.</p>
            <p>The good news is that verifying a legitimate Ottawa moving company takes about 5 minutes. The checklist below covers the non-negotiables.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Moving Company Vetting Checklist</h2>
          <div className="space-y-3">
            {CHECKLIST.map(({ item, important }) => (
              <div key={item} className={`flex items-start gap-3 p-4 rounded-xl border ${important ? "border-[#C5A572]/30 bg-[#C5A572]/5" : "border-gray-200 bg-white"}`}>
                <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${important ? "text-[#C5A572]" : "text-gray-400"}`} />
                <span className={`text-sm ${important ? "font-semibold text-[#1A2332]" : "text-gray-600"}`}>{item}</span>
                {important && <span className="ml-auto text-xs font-bold text-[#C5A572] shrink-0">Required</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-3 text-center">What Ottawa Residents Say About Prestige Moving</h2>
          <p className="text-gray-500 text-center mb-10 text-sm">400+ verified reviews · 5.0★ Google rating · Every neighbourhood in Ottawa</p>
          <div className="grid md:grid-cols-2 gap-5">
            {PRESTIGE_REVIEWS.map(({ name, neighbourhood, rating, text }) => (
              <div key={name} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-[#C5A572] text-[#C5A572]" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#1A2332] rounded-full flex items-center justify-center text-white text-xs font-bold">{name[0]}</div>
                  <div>
                    <p className="text-[#1A2332] font-bold text-sm">{name}</p>
                    <p className="text-gray-400 text-xs">{neighbourhood}, Ottawa</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Why Prestige Moving Leads Ottawa's Market</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Prestige Moving has built Ottawa's highest-rated moving operation by focusing on two things: trained, professional crews and transparent pricing. Every crew member is a trained employee — not a day labourer. Every quote is written before work begins and matches the final invoice exactly. Every move is covered by $2M+ general liability insurance and current WSIB certification.</p>
            <p>The result is a 5.0-star Google rating across 400+ verified reviews — the strongest review profile of any Ottawa moving company. Clients from <Link href="/movers-in-westboro" className="text-[#C5A572] hover:underline">Westboro</Link> to <Link href="/movers-in-orleans" className="text-[#C5A572] hover:underline">Orleans</Link>, from <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link> to <Link href="/movers-in-manotick" className="text-[#C5A572] hover:underline">Manotick</Link> consistently report the same experience: on-time crew, efficient work, careful handling, and a final bill that matches the quote.</p>
            <p>Related guides: <Link href="/how-to-choose-a-moving-company-ottawa" className="text-[#C5A572] hover:underline">How to Choose a Moving Company in Ottawa</Link> · <Link href="/affordable-movers-ottawa" className="text-[#C5A572] hover:underline">Affordable Movers Ottawa</Link> · <Link href="/best-movers-ottawa" className="text-[#C5A572] hover:underline">Best Movers Ottawa</Link></p>
          </div>
          <div className="mt-8 grid md:grid-cols-4 gap-5">
            {[
              { label: "Google Rating", value: "5.0★" },
              { label: "Verified Reviews", value: "400+" },
              { label: "Insurance Coverage", value: "$2M+" },
              { label: "Years Serving Ottawa", value: "10+" },
            ].map(({ label, value }) => (
              <div key={label} className="text-center bg-[#1A2332] rounded-xl py-5">
                <div className="text-[#C5A572] text-2xl font-bold">{value}</div>
                <div className="text-white/60 text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ottawa's Top-Rated Moving Company — Book Today</h2>
          <p className="text-white/65 mb-8">Written quote · 5.0★ on 400+ reviews · WSIB certified · No hidden fees</p>
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
