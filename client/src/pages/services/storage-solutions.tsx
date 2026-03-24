import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, Shield, Thermometer,
  Star, ChevronDown, Archive, Lock, Clock, Truck, Camera
} from "lucide-react";
import storageHeroImg from "@assets/generated_images/storage_solutions_hero.png";

const UNIT_TYPES = [
  { size: "5×5 ft", sqft: "25 sq ft", equiv: "Small bedroom closet", price: "From $75/mo", desc: "Boxes, seasonal clothing, sports equipment, small furniture. Perfect for students or anyone with just a few items to store." },
  { size: "5×10 ft", sqft: "50 sq ft", equiv: "Walk-in closet", price: "From $110/mo", desc: "1-bedroom apartment worth of items, or a living room and dining set. Popular for people in between homes." },
  { size: "10×10 ft", sqft: "100 sq ft", equiv: "Large bedroom", price: "From $165/mo", desc: "Full 2-bedroom apartment contents or a small business inventory. Our most popular unit size for Ottawa families in transition." },
  { size: "10×15 ft", sqft: "150 sq ft", equiv: "Master bedroom", price: "From $210/mo", desc: "3-bedroom home partial contents or a full 2-bedroom home. Enough for large appliances and furniture plus boxed items." },
  { size: "10×20 ft", sqft: "200 sq ft", equiv: "Garage", price: "From $265/mo", desc: "Full 3–4 bedroom home contents. Fits furniture, appliances, boxes, and vehicles. Our largest standard unit." },
  { size: "Custom / Container", sqft: "Variable", equiv: "Custom needs", price: "Quote on request", desc: "Large commercial storage, container storage, and custom solutions for businesses. Call for pricing on large-volume storage." },
];

const FEATURES = [
  { icon: Thermometer, title: "Climate-Controlled Units", desc: "Regulated temperature (15–21°C) and humidity year-round. Essential for wood furniture, electronics, artwork, wine, and documents through Ottawa's extreme winters and humid summers." },
  { icon: Shield, title: "24/7 Video Surveillance", desc: "Full perimeter camera coverage with 24/7 recording. Access is logged electronically. Your storage unit is monitored at all times." },
  { icon: Lock, title: "Individual Unit Locks", desc: "Each unit uses your own lock — we don't have a master key. Only you access your unit. No shared corridor access to your belongings." },
  { icon: Camera, title: "Electronic Access Control", desc: "PIN-code entry with electronic access logging. Your entry and exit is recorded. The facility is accessible to you 7 days a week." },
  { icon: Truck, title: "Free Moving Truck Use", desc: "Rent a storage unit for 3+ months and receive free use of a moving truck for your initial load-in. Available for Ottawa residents — valid address required." },
  { icon: Clock, title: "Month-to-Month Flexibility", desc: "No long-term contracts. Month-to-month agreements with 30 days notice to vacate. Store for a month or a decade — on your terms." },
];

const USE_CASES = [
  { title: "Between Homes", desc: "Your Ottawa sale closes before your new possession date. You need somewhere clean and safe for your belongings for 2 weeks to 2 months. Our climate-controlled units are ideal for this transition — and we can move your belongings directly from your old home to storage, then storage to your new home." },
  { title: "Renovation Storage", desc: "Renovating a kitchen, basement, or multiple rooms in your Ottawa home? Move furniture and belongings out of the work zone and into storage. Our facility keeps items protected from construction dust, damage, and theft while the renos happen." },
  { title: "Decluttering Without Donating", desc: "You know some items should go, but you're not ready to commit. Storing them off-site for a month often makes the decision easier — if you never needed them in storage, you're ready to let them go. If you do need them, bring them back." },
  { title: "Seasonal Items", desc: "Ottawa winters mean many items — patio furniture, barbecues, seasonal equipment, holiday décor — are only needed part of the year. Off-site storage keeps your garage and basement clear year-round." },
  { title: "Business & Commercial", desc: "Small businesses, retail inventory, document storage, equipment, and overflow stock. Our commercial units offer flexible month-to-month terms without the commitment of a dedicated commercial space." },
  { title: "Long Distance Move Staging", desc: "Moving from Ottawa to another city and your destination isn't ready? We load your Ottawa home into our storage facility and deliver to your destination when you're ready. Clean, climate-controlled, and coordinated with our long distance moving team." },
];

const FAQS = [
  { q: "What types of storage units are available in Ottawa?", a: "We offer climate-controlled storage units from 5×5 ft (25 sq ft) up to 10×20 ft (200 sq ft) and larger commercial options. All units are interior, climate-controlled (temperature and humidity regulated), with individual electronic locks. No drive-up outdoor units — everything is stored inside a secured, monitored facility." },
  { q: "What's the difference between climate-controlled and non-climate-controlled storage?", a: "Ottawa's climate is extreme — temperatures range from -30°C in winter to +35°C in summer, with high humidity in July and August. Non-climate-controlled storage exposes your belongings to these extremes, which causes warping in wood furniture, mold on fabric, condensation damage to electronics, and deterioration of documents. Climate-controlled storage maintains 15–21°C and 50–60% humidity year-round. For anything other than rugged outdoor equipment, climate-controlled is worth the premium." },
  { q: "How long can I rent a storage unit in Ottawa?", a: "Month-to-month with 30 days notice to vacate. No minimum term, no long-term commitment. You can store for as little as one month or as long as you need. Long-term renters (12+ months) receive a 10% discount applied after the first year." },
  { q: "Is my stuff insured while in storage?", a: "Your stored belongings are covered under your homeowner's or tenant's insurance — check your policy for off-premises storage coverage (most policies cover belongings stored off-site up to 10% of your contents coverage). We also offer supplemental storage insurance through our facility partner at competitive rates if you want dedicated coverage." },
  { q: "Can you move my belongings directly into storage?", a: "Yes. This is a common combination service — we move your belongings from your Ottawa home directly into our storage facility, and then deliver from storage to your new home when you're ready. Pricing for this combination is less expensive than two separate moves. Ask our coordinator about combination move-and-store pricing." },
  { q: "What can I not store in a storage unit?", a: "Prohibited items include: perishable food, live plants, hazardous materials (paints, solvents, propane tanks), illegal items, and living things (people, animals). Firearms must be stored unloaded with appropriate trigger locks. Cash and securities should not be stored in a storage unit — use a bank safety deposit box for valuables of this nature." },
];

export default function StorageSolutions() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeUnit, setActiveUnit] = useState(2);

  return (
    <>
      <Helmet>
        <title>Storage Solutions Ottawa | Climate-Controlled Storage | Prestige Moving</title>
        <meta name="description" content="Climate-controlled storage units in Ottawa. Month-to-month, fully monitored, 24/7 access. Units from 5×5 to 10×20. Moving storage combinations available. Call (613) 600-4000." />
        <meta name="keywords" content="storage solutions Ottawa, climate controlled storage Ottawa, self storage Ottawa, moving storage Ottawa, storage units Ottawa, secure storage Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/services/storage-solutions" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}</script>
      </Helmet>
      <SharedNavigation />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={storageHeroImg} alt="Climate-controlled storage facility in Ottawa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 via-[#1A2332]/80 to-[#1A2332]/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-5">
              {["Climate-Controlled", "Month-to-Month", "24/7 Surveillance", "Moving Combinations"].map(t => (
                <Badge key={t} className="bg-[#C5A572]/20 text-[#C5A572] border border-[#C5A572]/30 text-xs font-semibold">{t}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Storage Solutions Ottawa —<br />
              <span className="text-[#C5A572]">Climate-Controlled & Secure</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Ottawa's extreme climate demands climate-controlled storage. Temperature and humidity regulated year-round — protecting wood furniture, electronics, artwork, and documents from Ottawa's -30°C winters and humid summers. Month-to-month, no commitment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold text-base px-6">Check Availability <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10 text-base px-6"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#C5A572] py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["Temperature & Humidity Controlled", "24/7 CCTV Monitoring", "Month-to-Month Terms", "Individual Unit Locks", "Move + Store Combinations"].map(t => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" />{t}</span>
          ))}
        </div>
      </div>

      {/* Unit size selector */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Storage Unit Sizes & Pricing</h2>
            <p className="text-gray-600 max-w-xl mx-auto">All units are climate-controlled interior units. Click a size to see what fits and current pricing.</p>
          </div>
          <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {UNIT_TYPES.map((unit, i) => (
              <button key={i} onClick={() => setActiveUnit(i)} className={`text-left rounded-xl border p-4 transition-all ${activeUnit === i ? "border-[#C5A572] bg-[#C5A572]/5 shadow-md" : "border-gray-200 bg-gray-50 hover-elevate"}`}>
                <div className="font-black text-[#1A2332] text-sm mb-1">{unit.size}</div>
                <div className="text-[#C5A572] font-bold text-xs mb-1">{unit.price}</div>
                <div className="text-gray-500 text-xs">{unit.equiv}</div>
              </button>
            ))}
          </div>
          <div className="bg-[#1A2332] rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider mb-2">Selected Unit</div>
                <div className="text-3xl font-black text-white mb-1">{UNIT_TYPES[activeUnit].size}</div>
                <div className="text-[#C5A572] text-xl font-bold mb-2">{UNIT_TYPES[activeUnit].price}</div>
                <div className="text-white/60 text-sm mb-3">{UNIT_TYPES[activeUnit].sqft} · {UNIT_TYPES[activeUnit].equiv}</div>
                <p className="text-white/80 text-sm leading-relaxed">{UNIT_TYPES[activeUnit].desc}</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-white mb-3">What fits in this unit?</div>
                <div className="space-y-2 text-white/75 text-sm">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#C5A572]" />Climate-controlled year-round</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#C5A572]" />Individual electronic lock</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#C5A572]" />24/7 CCTV coverage</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#C5A572]" />Month-to-month term</div>
                </div>
                <div className="mt-5">
                  <a href="tel:6136004000"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Check Availability</Button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">Storage Facility Features</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Not all Ottawa storage is created equal. Here's what sets our climate-controlled facility apart.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-[#C5A572]" />
                </div>
                <h3 className="font-bold text-[#1A2332] text-sm mb-1">{title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1A2332] mb-3">When Ottawa Residents Use Storage</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map(uc => (
              <div key={uc.title} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <h3 className="font-bold text-[#1A2332] mb-2">{uc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form content */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Why Climate-Controlled Storage Matters in Ottawa</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Ottawa has one of the most extreme climates of any major Canadian city. Winters regularly reach -30°C, summers push +35°C with high humidity, and the swing between seasons is dramatic. This climate is extremely hard on stored belongings — and it's why climate-controlled storage is not a luxury in Ottawa but a necessity for most household items.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">What Happens to Furniture in Uncontrolled Storage</h3>
            <p>Wood furniture expands and contracts with temperature and humidity swings. In Ottawa's climate, non-climate-controlled storage causes warping, cracking, joint failures, and finish damage. Solid wood dining tables, wooden bedroom sets, and hardwood floors stored through even one Ottawa winter in an uncontrolled environment will show the damage. Climate-controlled storage maintains stable conditions year-round, preventing the freeze-thaw-heat-humidity cycle from destroying your investment.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Electronics and Climate-Controlled Storage</h3>
            <p>Electronics stored in non-climate-controlled environments suffer from condensation damage when temperatures rise. This is particularly true for televisions, audio equipment, and computer components. The moisture that forms as temperatures rise from -30°C to room temperature can permanently damage electronic components. Climate-controlled storage keeps your electronics in conditions similar to your home — protecting them for when you need them again.</p>
            <h3 className="text-xl font-bold text-[#1A2332] mt-8 mb-3">Moving and Storage Combination Services</h3>
            <p>The most efficient Ottawa storage solution combines your move directly with storage. Instead of moving items home, then moving them again to storage, our crew picks up from your origin and delivers directly to your storage unit in one trip. When you're ready, we deliver from storage to your new home — again in one trip. This combination service is less expensive than two separate moves and keeps your belongings in fewer hands. Call (613) 600-4000 or book online to arrange a move-and-store combination.</p>
            <p>For residential moving that includes storage staging, see our <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving</Link> page. For long distance moves that use Ottawa storage as a staging point, see <Link href="/services/long-distance-moving" className="text-[#C5A572] hover:underline">long distance moving</Link>.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Storage Solutions FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left bg-gray-50 hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 pt-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-white">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Archive className="h-10 w-10 text-[#C5A572] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Check Ottawa Storage Unit Availability</h2>
          <p className="text-white/65 mb-8 max-w-xl mx-auto">Climate-controlled, month-to-month, fully secured. Units from 25–200+ sq ft. Move-and-store combinations available.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Check Availability <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
