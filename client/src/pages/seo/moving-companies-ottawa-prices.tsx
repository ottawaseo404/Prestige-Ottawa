import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, DollarSign, Clock, Shield, Truck, Lock } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function MovingCompaniesOttawaPrices() {
  const packages = [
    { name: "Premium", rate: "$155/hr", team: "2 movers + truck", best: "1–2 bedroom homes, apartments, condos", includes: ["Professional movers", "Fully equipped truck", "Furniture blankets", "Dollies & hand trucks", "Basic furniture disassembly"] },
    { name: "Deluxe", rate: "$195/hr", team: "3 movers + truck", best: "2–3 bedroom homes, larger apartments", includes: ["3-person crew", "Larger truck capacity", "Faster completion time", "Wardrobe boxes included", "Priority scheduling"] },
    { name: "Diamond", rate: "$315/hr", team: "4+ movers + truck", best: "4+ bedroom homes, full-service moves", includes: ["4+ person crew", "Full packing service", "Custom crating available", "White-glove handling", "Dedicated move coordinator"] },
  ];

  const faq = [
    {
      q: "What is the average cost of movers in Ottawa?",
      a: "Most Ottawa local moves cost between $400–$1,200 depending on home size. A 1-bedroom apartment averages $465–$620 (3–4 hours at $155/hr). A 3-bedroom house typically runs $775–$1,085 (5–7 hours). Long distance adds flat-rate charges on top."
    },
    {
      q: "Do Ottawa moving companies charge by the hour or by weight?",
      a: "Ottawa local moving companies charge hourly. Long distance movers may charge by weight, cubic feet, or a flat rate. At Prestige, local moves are hourly with transparent rates. Long distance moves get binding flat-rate quotes."
    },
    {
      q: "Why do moving company prices vary so much in Ottawa?",
      a: "Pricing differences come from crew size, truck size, insurance levels, equipment quality, and experience. Beware of very low quotes — they often come with hidden fees for stairs, fuel, or 'packing materials' added on delivery day."
    },
    {
      q: "Is there a minimum charge for Ottawa movers?",
      a: "Yes. Our minimum is 3 hours. This covers truck dispatch, travel to your Ottawa location, the move itself, and return. The 3-hour minimum ensures our crew is compensated fairly for even the smallest moves."
    },
    {
      q: "Are tips included in Ottawa moving prices?",
      a: "Tips are never included and never expected — but always appreciated. If your team does a great job, $20–$40 per mover is a kind gesture. Reviews on Google are equally valued and help our business tremendously."
    },
    {
      q: "Do you have a travel fee for Ottawa moves?",
      a: "Yes — we charge a flat travel fee (not hourly) to get our truck to your Ottawa origin address. This is disclosed upfront in your quote. No per-km billing, no fuel surcharges."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ottawa Moving Company Prices & Rates 2026 | Prestige Moving</title>
        <meta name="description" content="Transparent Ottawa moving company prices. Rates from $155/hr with no hidden fees. See what a local move costs in Ottawa — free estimate for your home size. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/moving-companies-ottawa-prices" />
        <meta property="og:title" content="Ottawa Moving Company Prices 2026 | Prestige Moving" />
        <meta property="og:description" content="Clear, honest Ottawa moving rates. Premium from $155/hr, Deluxe $195/hr, Diamond $315/hr. No hidden fees. Get your instant quote." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "priceRange": "$155–$315/hr",
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
              <DollarSign className="h-4 w-4" /> Transparent Pricing · No Hidden Fees
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ottawa Moving Company<br />Prices & Rates 2026
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Wondering what movers cost in Ottawa? We believe in complete price transparency. See our exact rates, what's included, and get a real estimate for your move — no surprises.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Get an Instant Quote
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Book Online <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Zero Hidden Fees</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 3-Hour Minimum</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Insurance Included</span>
            <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 4.9-Star Rated</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-4">Our Moving Packages & Rates</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">All packages include: professional movers, moving truck, blankets, straps, dollies, and cargo insurance.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                <div key={pkg.name} className={`border-2 rounded-md p-6 ${i === 1 ? "border-[#C5A572] bg-[#C5A572]/5" : "border-gray-200 bg-white"}`}>
                  {i === 1 && <div className="text-center mb-3"><span className="bg-[#C5A572] text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span></div>}
                  <h3 className="font-bold text-[#1A2332] text-xl text-center mb-1">{pkg.name}</h3>
                  <a href="tel:6136004000" className="relative inline-flex items-center gap-1.5 bg-gray-100 rounded-lg px-3 py-1.5 mb-2 overflow-hidden mx-auto cursor-pointer">
                    <span className="text-xl font-bold text-[#C5A572] blur-sm select-none pointer-events-none">{pkg.rate}</span>
                    <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-[1px]">
                      <Lock className="h-3.5 w-3.5 text-[#C5A572] mr-1" />
                      <span className="text-xs font-bold text-[#1A2332]">Call for Rate</span>
                    </div>
                  </a>
                  <p className="text-sm text-gray-500 text-center mb-1">{pkg.team}</p>
                  <p className="text-xs text-gray-400 text-center mb-4">Best for: {pkg.best}</p>
                  <ul className="space-y-2">
                    {pkg.includes.map((inc) => (
                      <li key={inc} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-[#C5A572] shrink-0" /> {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-6">Typical Ottawa Move Costs by Home Size</h2>
            <p className="text-gray-600 text-center mb-10">Estimates based on Premium package ($155/hr + travel fee). Actual time may vary.</p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-gray-200 rounded-md text-sm">
                <thead>
                  <tr className="bg-[#1A2332] text-white">
                    <th className="px-4 py-3 text-left">Home Size</th>
                    <th className="px-4 py-3 text-left">Est. Hours</th>
                    <th className="px-4 py-3 text-left">Est. Cost (Premium)</th>
                    <th className="px-4 py-3 text-left">Recommended Package</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Studio / Bachelor", "2–3 hrs", "$310–$465", "Premium"],
                    ["1-Bedroom Apartment", "3–4 hrs", "$465–$620", "Premium"],
                    ["2-Bedroom Apartment", "4–5 hrs", "$620–$775", "Premium or Deluxe"],
                    ["2-Bedroom House", "5–7 hrs", "$775–$1,085", "Deluxe"],
                    ["3-Bedroom House", "6–8 hrs", "$930–$1,240", "Deluxe"],
                    ["4+ Bedroom Home", "8–12 hrs", "$1,240–$1,860", "Diamond"],
                  ].map(([size, hours, cost, pkg], i) => (
                    <tr key={size} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-[#1A2332]">{size}</td>
                      <td className="px-4 py-3 text-gray-600">{hours}</td>
                      <td className="px-4 py-3 text-[#C5A572] font-semibold">{cost}</td>
                      <td className="px-4 py-3 text-gray-600">{pkg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Pricing FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Get Your Personalized Ottawa Moving Quote</h2>
            <p className="text-white/70 mb-8">Every move is different. Call us for an accurate, binding estimate tailored to your home size and move date.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Book & Get Instant Price</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
