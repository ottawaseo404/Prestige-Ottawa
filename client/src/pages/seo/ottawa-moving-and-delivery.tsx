import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, Package, Truck, Clock, Shield, Lock } from "lucide-react";
import { Link } from "wouter";
import { SharedFooter } from "@/components/shared-footer";
import { SharedNavigation } from "@/components/shared-navigation";

export default function OttawaMovingAndDelivery() {
  const services = [
    { title: "Furniture Delivery & Assembly", desc: "Single-item or full-room furniture delivery from stores like IKEA, EQ3, Ashley, or marketplace purchases. We deliver, carry, and assemble." },
    { title: "Appliance Delivery & Install", desc: "Safe delivery and installation of washers, dryers, fridges, dishwashers, and ovens. Includes disconnect/reconnect of water and gas lines." },
    { title: "Single-Item Moving", desc: "Moving just a couch, piano, gun safe, or heavy item? We handle it with the proper equipment — no need to hire a full moving crew." },
    { title: "Marketplace Pickup & Delivery", desc: "Bought something on Facebook Marketplace, Kijiji, or Craigslist and need it delivered? We'll pick it up and bring it to your door." },
    { title: "Intra-Office Delivery", desc: "Relocating equipment, supplies, or furniture within your Ottawa office building or between nearby locations. Flexible scheduling including evenings." },
    { title: "Store-to-Home Delivery", desc: "Large or oversized items from retailers that don't deliver — let us pick up and deliver to any Ottawa address." },
  ];

  const faq = [
    {
      q: "What is the difference between moving and delivery services?",
      a: "Moving typically involves relocating all household or office contents. Delivery is for single items or smaller loads — furniture pieces, appliances, or marketplace purchases that need professional handling and transportation."
    },
    {
      q: "Can you pick up from a store and deliver to my home in Ottawa?",
      a: "Yes. This is one of our most popular services. We pick up from any Ottawa-area retailer (IKEA, The Bay, Costco, independent stores) and deliver directly to your room of choice."
    },
    {
      q: "How much does delivery service cost in Ottawa?",
      a: "Single-item delivery within Ottawa starts at $120–$180 depending on item weight, floor, and whether assembly is required. Call (613) 600-4000 for an instant quote."
    },
    {
      q: "Do you offer same-day moving and delivery in Ottawa?",
      a: "Same-day delivery is available depending on schedule. Call us in the morning and we'll do our best to fit you in — we keep flexible availability for urgent requests."
    },
    {
      q: "Will you carry furniture up stairs or into basements?",
      a: "Absolutely. Our teams are equipped with stair-climbing dollies, furniture sliders, and moving straps. We deliver to any floor — no elevator required."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ottawa Moving & Delivery Services | Furniture & Appliance Delivery | Prestige Moving</title>
        <meta name="description" content="Ottawa moving and delivery services for furniture, appliances, single items & marketplace purchases. Same-day available. Professional, insured. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-moving-and-delivery" />
        <meta property="og:title" content="Ottawa Moving & Delivery Services | Prestige Moving" />
        <meta property="og:description" content="Professional moving and delivery in Ottawa. Furniture, appliances, single items, and marketplace pickups. Fast, insured, and affordable." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca",
          "telephone": "(613) 600-4000",
          "address": { "@type": "PostalAddress", "addressLocality": "Ottawa", "addressRegion": "ON", "addressCountry": "CA" },
          "description": "Moving and delivery services in Ottawa for furniture, appliances, and single items.",
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
        })}</script>
      </Helmet>
      <SharedNavigation />
      <main>
        <section className="relative bg-[#1A2332] text-white py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] to-[#2a3a52]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 text-[#C5A572] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Truck className="h-4 w-4" /> Moving & Delivery · Ottawa & Area
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ottawa Moving &<br />Delivery Services
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Whether you need a full home move or just want a couch delivered from Kijiji — Prestige Moving has you covered. Fast, professional, fully insured delivery and moving services throughout Ottawa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Get a Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Same-Day Available</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Single-Item Delivery OK</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Fully Insured</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Assembly Included</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-4">Moving & Delivery Services We Offer</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">From full home relocations to single-item deliveries — we handle it all with the same professionalism.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s) => (
                <div key={s.title} className="bg-gray-50 border border-gray-200 rounded-md p-6">
                  <h3 className="font-bold text-[#1A2332] mb-2 flex items-center gap-2">
                    <Package className="h-4 w-4 text-[#C5A572]" /> {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Delivery Pricing in Ottawa</h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">Simple, transparent pricing with no hidden fees. All prices include labour, equipment, and insurance.</p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { tier: "Single Item", price: "From $120", desc: "1–2 items, ground floor or elevator access. Ideal for couch, chair, small appliance." },
                { tier: "Multi-Item Delivery", price: "From $195", desc: "3–6 items or a bedroom set. Includes stair carry and basic assembly." },
                { tier: "Hourly Delivery", price: "$155/hr", desc: "Best for Kijiji/Marketplace runs or multiple stops. 2-person team with 2-hour minimum." },
              ].map((p) => (
                <div key={p.tier} className="bg-white border border-gray-200 rounded-md p-6">
                  <h3 className="font-bold text-[#1A2332] text-lg mb-1">{p.tier}</h3>
                  <div className="relative inline-flex items-center gap-1.5 bg-gray-100 rounded-lg px-3 py-1.5 mb-3 overflow-hidden">
                    <span className="text-lg font-bold text-[#C5A572] blur-sm select-none pointer-events-none">{p.price}</span>
                    <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-[1px]">
                      <Lock className="h-3.5 w-3.5 text-[#C5A572] mr-1" />
                      <span className="text-xs font-bold text-[#1A2332]">Call for Rate</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Delivery FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need Something Moved or Delivered Today?</h2>
            <p className="text-white/70 mb-8">Call now for same-day availability or book online for a scheduled delivery.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">Book Online</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
