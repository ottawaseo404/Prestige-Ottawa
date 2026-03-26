import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, Star, CheckCircle2, ArrowRight, Shield, Award, Clock, Package, Lock, Users } from "lucide-react";

const SERVICES = [
  {
    title: "Fine Art & Sculpture",
    desc: "Climate-controlled transport, custom wooden crating, acid-free padding, and white-glove placement at destination. Every piece is documented, photographed, and handled by trained specialists.",
    icon: "🎨",
  },
  {
    title: "Grand & Baby Grand Pianos",
    desc: "Specialized piano dollies, full felt wrapping, key cover and lid protection, and temperature-monitored transport. We tune-coordinate with your piano technician if required.",
    icon: "🎹",
  },
  {
    title: "Antique Furniture & Heirlooms",
    desc: "Custom upholstery wrapping, corner guards, full inventory with condition photography, and precision placement at destination. No antique is treated as a standard item.",
    icon: "🏺",
  },
  {
    title: "Wine Collections",
    desc: "Temperature-controlled vehicle sections, horizontal racking during transport, and careful cellar-to-cellar transfer. Every bottle accounted for in a pre-move inventory.",
    icon: "🍷",
  },
  {
    title: "Luxury Furniture Sets",
    desc: "Bespoke padding, corner and edge protection, and dedicated placement — nothing scratched, nothing chipped. Your furniture arrives exactly as it left.",
    icon: "🛋️",
  },
  {
    title: "Entire Estate Moves",
    desc: "Full project management from packing through placement. A dedicated move coordinator oversees every detail so you never have to track a single task on move day.",
    icon: "🏛️",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "In-Home Consultation", desc: "A senior move consultant visits your home to assess every item, document special requirements, and build your tailored moving plan — at no charge." },
  { step: "02", title: "Custom Packing Plan", desc: "Every room is mapped. Every item is categorized. Custom crating is built where needed. Your packing plan is documented before a single box is packed." },
  { step: "03", title: "White-Glove Packing Day", desc: "Our specialist packing crew wraps, pads, and crates every item using archival-quality materials. A full photographic inventory is completed before loading." },
  { step: "04", title: "Protected Transport", desc: "Your items travel in our padded, climate-aware vehicles with no mixing of loads. A dedicated move supervisor rides with your belongings." },
  { step: "05", title: "Precision Placement", desc: "Furniture and art are placed exactly where you direct. We return and adjust anything that isn't perfect until you're completely satisfied." },
  { step: "06", title: "Full Debris Removal", desc: "All packing materials, boxes, and crating are removed from both origin and destination. You're left with a completely clear, clean space." },
];

const TESTIMONIALS = [
  { name: "Margaret T.", area: "New Edinburgh", text: "We've moved four times with Prestige Moving. The white-glove service they provided for our art collection and antique furniture was genuinely exceptional — nothing moved without being photographed and wrapped first. Not a single item was damaged.", stars: 5 },
  { name: "David R.", area: "Rockcliffe Park", text: "Moving a Steinway grand piano from a heritage home is not something you want to gamble on. Prestige Moving's piano team knew exactly what they were doing. The piano arrived perfectly, and they coordinated with my tuner directly.", stars: 5 },
  { name: "Christine & Paul L.", area: "Westboro", text: "Our wine collection alone was 400+ bottles. Prestige Moving inventoried every bottle, kept them horizontal throughout the move, and delivered them in perfect condition. That kind of attention is why we won't use anyone else.", stars: 5 },
];

export default function WhiteGloveMoversOttawa() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Prestige Moving Vancouver",
    "url": "https://prestigemoving.ca",
    "telephone": "+16136004000",
    "description": "White glove moving service in Ottawa for fine art, antiques, luxury furniture, pianos, wine collections, and full estate moves. Premium packing, protected transport, and precision placement.",
    "areaServed": { "@type": "City", "name": "Ottawa" },
    "priceRange": "$$$$",
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>White Glove Movers Ottawa | Fine Art, Antiques & Luxury Moving | Prestige Moving</title>
        <meta name="description" content="Ottawa's premier white glove moving service for fine art, antiques, grand pianos, luxury furniture, wine collections, and full estate moves. Custom crating, photographic inventory, and precision placement. Call (613) 600-4000." />
        <meta name="keywords" content="white glove movers Ottawa, luxury movers Ottawa, fine art movers Ottawa, antique movers Ottawa, estate movers Ottawa, premium moving service Ottawa, high end movers Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/white-glove-movers-ottawa" />
        <meta property="og:title" content="White Glove Movers Ottawa | Prestige Moving" />
        <meta property="og:description" content="Premium white glove moving for art, antiques, pianos, and luxury estates. Ottawa's most careful moving crew." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <SharedNavigation />

      {/* Hero */}
      <section className="bg-[#1A2332] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {["Fine Art", "Grand Pianos", "Antiques", "Luxury Estates", "Wine Collections"].map(t => (
              <span key={t} className="bg-[#C5A572]/20 text-[#C5A572] border border-[#C5A572]/30 text-xs font-bold px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            White Glove Movers Ottawa —<br />
            <span className="text-[#C5A572]">Ottawa's Premium Moving Service</span>
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-3xl leading-relaxed">
            When what you're moving is irreplaceable, standard moving service isn't enough. Prestige Moving's white glove service provides custom crating, archival packing materials, photographic inventory, and precision placement for fine art, antiques, grand pianos, luxury furniture, wine collections, and full estate moves across Ottawa.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:6136004000">
              <Button className="bg-[#C5A572] text-[#1A2332] font-bold text-base px-6">
                <Phone className="h-4 w-4 mr-2" /> (613) 600-4000
              </Button>
            </a>
            <Link href="/book">
              <Button variant="outline" className="text-white border-white/30 bg-white/10 text-base px-6">
                Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-6 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[#C5A572] text-[#C5A572]" />)}
              <span className="text-white/70 text-sm ml-2">5.0 · 400+ reviews</span>
            </div>
            <span className="text-white/40">|</span>
            <span className="text-white/70 text-sm">$2M+ Insured · WSIB Certified</span>
          </div>
        </div>
      </section>

      {/* Gold Trust Bar */}
      <div className="bg-[#C5A572] py-3 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 text-[#1A2332] text-sm font-semibold">
          {["In-Home Consultation", "Custom Crating", "Photographic Inventory", "Precision Placement", "Full Debris Removal"].map(t => (
            <span key={t} className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" />{t}</span>
          ))}
        </div>
      </div>

      {/* What Is White Glove */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#1A2332] mb-4">What Is White Glove Moving?</h2>
          <div className="w-16 h-1 bg-[#C5A572] mb-8 rounded-full" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>White glove moving is a premium service tier designed for items that cannot be replaced, repaired, or recovered if damaged. It goes far beyond standard moving in every dimension — packing materials, handling protocols, vehicle configuration, crew training, and delivery precision.</p>
            <p>In standard moving, furniture is wrapped in blankets and loaded efficiently. In white glove moving, every item is individually assessed, photographed, and wrapped in archival-quality materials designed for its specific shape, weight, and fragility. Custom wooden crates are built for items that require rigid protection. A photographic inventory documents every item's condition before and after the move. And the crew assigned to your move is specifically trained in the handling protocols for fine art, antiques, and luxury furniture.</p>
            <p>Prestige Moving's white glove service is available for individual specialty items within a standard move, or as a comprehensive service tier for full estate moves where every item receives premium treatment. We work with Ottawa's most prominent collectors, heritage homeowners, gallery owners, and families managing estate transitions.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-[#1A2332] mb-4 text-center">White Glove Specialties</h2>
          <div className="w-16 h-1 bg-[#C5A572] mb-12 rounded-full mx-auto" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <div key={s.title} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-[#1A2332] text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-[#1A2332]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">Our White Glove Process</h2>
          <div className="w-16 h-1 bg-[#C5A572] mb-12 rounded-full" />
          <div className="space-y-8">
            {PROCESS_STEPS.map(step => (
              <div key={step.step} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C5A572] flex items-center justify-center text-[#1A2332] font-black text-sm">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-[#1A2332] mb-4">What Ottawa Clients Say</h2>
          <div className="w-16 h-1 bg-[#C5A572] mb-12 rounded-full" />
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="flex mb-3">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[#C5A572] text-[#C5A572]" />)}
                </div>
                <p className="text-gray-700 text-sm italic mb-4 leading-relaxed">"{t.text}"</p>
                <div className="text-[#1A2332] font-bold text-sm">{t.name}</div>
                <div className="text-gray-400 text-xs">{t.area}, Ottawa</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Prestige */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-[#1A2332] mb-4">Why Ottawa Chooses Prestige Moving</h2>
          <div className="w-16 h-1 bg-[#C5A572] mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: "$2M+ Insurance Coverage", desc: "Full liability insurance and WSIB certification for every move. Your items are protected from the moment our crew arrives." },
              { icon: Users, title: "Specialist-Trained Crews", desc: "White glove jobs are staffed with our most experienced crew members — professionals trained specifically in fine art, antique, and luxury item handling." },
              { icon: Award, title: "5.0 Star Rating — 400+ Reviews", desc: "Ottawa's highest-rated moving company. Our white glove clients are among our most loyal — many have moved with us three or more times." },
              { icon: Package, title: "Archival Packing Materials", desc: "We use acid-free tissue, archival foam, custom wooden crates, and museum-grade packing materials — not standard moving supplies." },
              { icon: Clock, title: "No Rush Policy", desc: "White glove moves take the time they require. We never rush packing, placement, or crating to meet a clock. Quality is the only metric that matters." },
              { icon: Lock, title: "100% Discretion", desc: "We do not discuss clients, properties, or valuables. Background-checked crews, signed confidentiality on request, and full professional discretion." },
            ].map(r => (
              <div key={r.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C5A572]/10 flex items-center justify-center">
                  <r.icon className="h-5 w-5 text-[#C5A572]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2332] mb-1">{r.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#1A2332] mb-4">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-[#C5A572] mb-10 rounded-full" />
          <div className="space-y-6">
            {[
              { q: "How much does white glove moving cost in Ottawa?", a: "White glove moving is priced based on a detailed in-home assessment — volume of items, specialty handling requirements, distance, and packing complexity all factor in. We provide a comprehensive written quote after your free in-home consultation. Call (613) 600-4000 to schedule." },
              { q: "Do you offer white glove service for a single item within a standard move?", a: "Yes. You don't need to book a full white glove package. If you have one or two pieces — a piano, an antique wardrobe, a painting — that require premium handling, we can integrate specialty treatment for those items within your standard move." },
              { q: "Do you build custom crates?", a: "Yes. For items that require rigid protection during transport — sculptures, large paintings, fragile antiques — we build custom wooden crates to the exact dimensions of the piece. Crating is documented in your move plan and quoted in advance." },
              { q: "How far in advance do I need to book a white glove move?", a: "For white glove estate moves, we recommend 4–6 weeks advance notice. Single-item specialty services within a standard move can often be arranged with 1–2 weeks notice." },
              { q: "Are you insured for high-value items?", a: "Prestige Moving carries $2M+ liability insurance and is WSIB certified. For items with declared replacement values above our standard coverage threshold, we work with you and your insurer to ensure appropriate coverage is in place before move day." },
              { q: "Do you serve all Ottawa neighbourhoods for white glove moves?", a: "Yes — we provide white glove service throughout Ottawa and the surrounding region, including Gatineau, Kanata, Nepean, Barrhaven, Orleans, and all surrounding communities." },
            ].map(faq => (
              <div key={faq.q} className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-[#1A2332] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#C5A572]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#1A2332] mb-4">Ready for Ottawa's Premier Moving Experience?</h2>
          <p className="text-[#1A2332]/80 mb-8 text-lg">Schedule your free in-home white glove consultation. We'll visit your home, assess every item, and build your tailored moving plan — at no charge.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:6136004000">
              <Button className="bg-[#1A2332] text-white font-bold text-base px-8">
                <Phone className="h-4 w-4 mr-2" /> (613) 600-4000
              </Button>
            </a>
            <Link href="/book">
              <Button variant="outline" className="border-[#1A2332] text-[#1A2332] font-bold text-base px-8">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}
