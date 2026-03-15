import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight, Package, Shield, Clock, Lock } from "lucide-react";
import { Link } from "wouter";
import SharedFooter from "@/components/shared-footer";
import SharedNavigation from "@/components/shared-navigation";

export default function MovingAndStorageOttawa() {
  const faq = [
    { q: "Do you offer moving and storage together in Ottawa?", a: "Yes. Prestige Moving handles your entire move AND provides access to secure storage facilities in Ottawa. Whether you need storage for a day, a month, or longer — we coordinate everything from one call." },
    { q: "What types of storage do you offer in Ottawa?", a: "We offer short-term storage (between closing dates), long-term storage, and on-demand storage where we retrieve your items when needed. All storage is in climate-controlled, secure facilities." },
    { q: "How much does moving and storage cost in Ottawa?", a: "Moving rates start at $155/hr (Premium package). Storage pricing depends on volume and duration — typically $80–$200/month for most household loads. Combined moving and storage packages are available." },
    { q: "Can you store my furniture while I renovate my Ottawa home?", a: "Yes — this is very common. We move your furniture out, store it safely during your renovation, then return and place everything back in your renovated home." },
    { q: "Is my furniture insured while in storage?", a: "Yes. Items in our storage facilities are covered by cargo insurance throughout their stay. We can also help you arrange additional declared-value coverage for high-value pieces." },
    { q: "How quickly can I access my stored items in Ottawa?", a: "For most storage arrangements, we can have your items delivered within 24–48 hours of request. Urgent requests are handled as quickly as same-day depending on availability." },
  ];

  return (
    <>
      <Helmet>
        <title>Moving & Storage Ottawa | Combined Moving and Storage Services | Prestige Moving</title>
        <meta name="description" content="Ottawa moving and storage made simple. One call handles your move AND secure storage. Short-term, long-term, renovation storage. Insured. Call (613) 600-4000." />
        <link rel="canonical" href="https://prestigemoving.ca/moving-and-storage-ottawa" />
        <meta property="og:title" content="Moving & Storage Ottawa | Prestige Moving" />
        <meta property="og:description" content="Combined moving and storage services in Ottawa. Climate-controlled storage, flexible terms, fully insured. One company handles everything." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          "name": "Prestige Moving Ottawa",
          "url": "https://prestigemoving.ca/moving-and-storage-ottawa",
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
              <Package className="h-4 w-4" /> Moving + Storage · Ottawa & Area
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ottawa Moving &<br />Storage Services
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              One call. One company. Complete peace of mind. Prestige Moving handles your Ottawa move AND provides secure, climate-controlled storage — short-term or long-term — so you're never stuck between homes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6136004000">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#b8945e] text-white font-bold px-8">
                  <Phone className="h-5 w-5 mr-2" /> Call (613) 600-4000
                </Button>
              </a>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10">
                  Get Storage Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#C5A572] py-4 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
            <span className="flex items-center gap-2"><Lock className="h-4 w-4" /> Climate-Controlled Storage</span>
            <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Fully Insured</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Flexible Terms</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> One Company, Everything</span>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Moving & Storage Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <Clock className="h-6 w-6" />, title: "Between-Move Storage", desc: "Closing date gaps are common in Ottawa's real estate market. Store your belongings safely for days or weeks while you wait to access your new home." },
                { icon: <Package className="h-6 w-6" />, title: "Renovation Storage", desc: "Gut your kitchen, renovate your floors, or repaint the entire house — with your furniture safely stored by Prestige. We return it all when you're ready." },
                { icon: <Lock className="h-6 w-6" />, title: "Long-Term Storage", desc: "Relocating temporarily, traveling for work, or downsizing? We provide secure monthly storage for as long as you need — no long-term commitment required." },
                { icon: <Shield className="h-6 w-6" />, title: "Portable Storage Units", desc: "We deliver storage containers to your Ottawa home, you pack at your own pace, and we store it at our secure facility. Retrieve anytime with 24 hrs notice." },
                { icon: <Star className="h-6 w-6" />, title: "Climate-Controlled Facility", desc: "Temperature and humidity-controlled storage protects wood furniture, electronics, artwork, clothing, and sensitive items from Ottawa's extreme seasonal changes." },
                { icon: <CheckCircle className="h-6 w-6" />, title: "Insured Storage", desc: "All items in our storage facility are covered by our cargo insurance policy. Declared-value coverage available for antiques and high-value items." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-gray-50 p-6 rounded-md border border-gray-100">
                  <div className="text-[#C5A572] mt-1 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#1A2332] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2332] text-center mb-12">Moving & Storage FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need Moving AND Storage in Ottawa?</h2>
            <p className="text-white/70 mb-8">One call handles everything. Get a combined moving and storage quote today.</p>
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
