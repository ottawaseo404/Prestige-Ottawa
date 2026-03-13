import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, Building2, TruckIcon, Users,
  Hammer, Home, Shield, Star, Package, Wrench, ChevronDown, MapPin
} from "lucide-react";
import heroImg from "@assets/ottawa-contractors-hero.png";
import collabImg from "@assets/ottawa-contractors-collab.png";
import skylineImg from "@assets/ottawa-contractors-skyline.png";

const TOC_ITEMS = [
  { id: "introduction",            title: "The Ottawa Contractor-Mover Partnership" },
  { id: "about-ottawa-contractors", title: "About OttawaContractors.ca" },
  { id: "about-prestige",          title: "About Prestige Moving Ottawa" },
  { id: "how-they-work-together",  title: "How Contractors & Movers Work Together" },
  { id: "renovation-moves",        title: "Renovation-Based Moving Scenarios" },
  { id: "new-build-delivery",      title: "New Build & Construction Delivery" },
  { id: "commercial-renovations",  title: "Commercial Renovations & Office Moves" },
  { id: "junk-estate",             title: "Junk Removal & Estate Cleanout Coordination" },
  { id: "benefits-homeowners",     title: "Benefits for Ottawa Homeowners" },
  { id: "referral-network",        title: "Ottawa's Trusted Referral Network" },
  { id: "faq",                     title: "FAQ" },
];

const SERVICES_GRID = [
  {
    icon: Home,
    title: "Pre-Renovation Moves",
    desc: "Clear your home before major renovations begin. We move furniture to storage or a temporary residence so contractors can work without obstacles.",
  },
  {
    icon: TruckIcon,
    title: "Post-Renovation Move-In",
    desc: "Move your belongings back into your renovated home with full surface protection on new floors, fresh paint, and updated fixtures.",
  },
  {
    icon: Building2,
    title: "New Build Delivery",
    desc: "Take possession of a new-construction home built by Ottawa's leading contractors and move in with full protection on every brand-new surface.",
  },
  {
    icon: Hammer,
    title: "Commercial Fit-Out Moves",
    desc: "When Ottawa contractors complete a commercial renovation, we move the business in — fully coordinated, after-hours, zero-downtime.",
  },
  {
    icon: Package,
    title: "Junk & Debris Coordination",
    desc: "Coordinate junk removal and estate cleanout alongside your renovation project. We handle what contractors leave behind.",
  },
  {
    icon: Wrench,
    title: "Furniture Assembly & Staging",
    desc: "We assemble and stage furniture after your renovation is complete — so your home looks finished from day one.",
  },
];

const COLLAB_SCENARIOS = [
  {
    scenario: "Kitchen or Bathroom Gut Renovation",
    steps: [
      "Ottawa contractor provides scope and timeline to client",
      "Prestige Moving clears kitchen furniture, appliances, and breakables to storage",
      "Contractor completes renovation without obstruction",
      "Prestige Moving returns and places items with full new-floor protection",
    ],
  },
  {
    scenario: "Full Home Renovation Before Sale",
    steps: [
      "Homeowner hires OttawaContractors.ca to update the home before listing",
      "Prestige Moving provides junk removal and furniture staging services",
      "Post-renovation, Prestige Moving handles the full move-out to the next home",
      "Coordinated timeline means a smooth sale and move in a single process",
    ],
  },
  {
    scenario: "Commercial Office Renovation",
    steps: [
      "Ottawa contractor completes a commercial fit-out over a weekend",
      "Prestige Moving coordinates an after-hours move-in on Sunday evening",
      "Business opens Monday in a fully renovated, fully furnished space",
      "Zero disruption to revenue — no weekday closure required",
    ],
  },
];

const FAQS = [
  {
    q: "How do Prestige Moving and OttawaContractors.ca work together?",
    a: "Prestige Moving and OttawaContractors.ca operate as referral and coordination partners. When Ottawa homeowners or businesses engage with Ottawa contractors for renovation or construction projects, Prestige Moving provides complementary moving services — clearing spaces before renovations, protecting new surfaces during move-in, and coordinating junk removal for renovation debris. Our teams communicate directly to ensure timelines align and the client's project flows seamlessly from construction completion to settled-in living or working.",
  },
  {
    q: "Can I use Prestige Moving for a renovation move even if OttawaContractors.ca isn't involved?",
    a: "Absolutely. Prestige Moving serves all renovation-related moving needs in Ottawa regardless of which contractor you use. Whether you're working with an Ottawa Contractors-affiliated contractor or an independent renovation company, we provide the same quality of pre- and post-renovation moving services, surface protection, and furniture placement.",
  },
  {
    q: "What is OttawaContractors.ca?",
    a: "OttawaContractors.ca is Ottawa's directory and connection platform for licensed, vetted home and commercial renovation contractors. The platform connects Ottawa homeowners and businesses with qualified contractors for kitchen renovations, bathroom remodels, basement development, roofing, flooring, painting, and full home or commercial renovations. All contractors on the platform are verified for licensing, insurance, and professional track record.",
  },
  {
    q: "How do I clear my home before a renovation?",
    a: "Contact Prestige Moving to arrange a pre-renovation move. We assess which rooms need to be cleared, provide professional packing services if needed, move furniture and belongings to a storage facility or temporary location, and coordinate a return date that aligns with your contractor's completion schedule. This service is available for individual rooms or entire homes.",
  },
  {
    q: "Do you provide surface protection for moves into newly renovated homes?",
    a: "Yes — new surface protection is a standard part of every Prestige Moving job. We bring full-length floor runners for every pathway, foam door frame guards on all entry points, and furniture blankets for every item. New hardwood, freshly painted walls, and pristine fixtures receive the same care as any brand-new construction.",
  },
  {
    q: "Can Prestige Moving help with junk removal after a renovation?",
    a: "Yes. Our junk removal and estate cleanout services cover renovation-related disposal needs. This includes broken furniture and appliances removed during renovation, packaging debris from new fixture installations, and general cleanout of spaces before contractor work begins. We coordinate same-day or next-day availability where needed.",
  },
  {
    q: "Are you available for commercial renovation moves in Ottawa?",
    a: "Yes. Commercial renovation coordination is one of our most common service types. We work with Ottawa contractors on commercial fit-outs across every sector — retail, healthcare, professional offices, restaurants — providing after-hours and weekend move-in services so businesses open on schedule in their newly renovated spaces.",
  },
];

export default function OttawaContractors() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Ottawa Contractors & Prestige Moving — Renovation, Moving & Construction Partnership | Ottawa</title>
        <meta name="description" content="Discover how OttawaContractors.ca and Prestige Moving work together to serve Ottawa homeowners and businesses. From pre-renovation clearing to post-renovation move-in, learn how Ottawa's top contractors and movers collaborate." />
        <meta name="keywords" content="Ottawa contractors, OttawaContractors.ca, Ottawa renovation movers, contractor moving services Ottawa, renovation moving Ottawa, home renovation Ottawa, Ottawa construction movers" />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-contractors" />
        <meta property="og:title" content="Ottawa Contractors & Prestige Moving — Renovation Moving Partnership" />
        <meta property="og:description" content="How OttawaContractors.ca and Prestige Moving work together to deliver seamless renovation and moving experiences for Ottawa homeowners and businesses." />
        <meta property="og:url" content="https://prestigemoving.ca/ottawa-contractors" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Ottawa Contractors & Prestige Moving — Ottawa's Renovation-Moving Partnership",
          "description": "How OttawaContractors.ca and Prestige Moving collaborate to serve Ottawa homeowners and businesses with integrated renovation and moving services.",
          "publisher": {
            "@type": "Organization",
            "name": "Prestige Moving Ottawa",
            "url": "https://prestigemoving.ca"
          },
          "mainEntityOfPage": "https://prestigemoving.ca/ottawa-contractors",
          "datePublished": "2026-01-01",
          "dateModified": "2026-03-01"
        })}</script>
      </Helmet>

      <SharedNavigation />

      {/* ── HERO ── */}
      <section className="relative min-h-[520px] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Prestige Moving and Ottawa Contractors partnership — professional moving crew and renovation contractor in Ottawa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1620]/95 via-[#0d1620]/65 to-[#0d1620]/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
          <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-5">
            <Hammer className="h-3.5 w-3.5 text-[#C5A572]" />
            <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Partner Spotlight</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl mb-4 leading-tight">
            Ottawa Contractors &amp; Prestige Moving:<br className="hidden md:block" />
            Ottawa's Renovation-Moving Partnership
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mb-8">
            Two of Ottawa's most trusted professional services — connected to deliver seamless renovation and moving experiences for homeowners and businesses across the National Capital Region.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://ottawacontractors.ca" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#C5A572] text-[#1A2332] font-bold">
                Visit OttawaContractors.ca <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link href="/book">
              <Button variant="outline" className="text-white border-white/30 bg-white/10">
                Book a Move <Phone className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-[#1A2332] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            {[
              { icon: Star, text: "5.0 Google Rating — 400+ Reviews" },
              { icon: Shield, text: "$2M+ Liability Insurance" },
              { icon: CheckCircle2, text: "WSIB Certified" },
              { icon: Users, text: "10+ Years in Ottawa" },
              { icon: MapPin, text: "Full Ottawa & NCR Coverage" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-[#C5A572]" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">

            {/* Article Body */}
            <article className="prose prose-lg max-w-none prose-headings:text-[#1A2332] prose-headings:font-bold prose-a:text-[#C5A572] prose-a:no-underline hover:prose-a:underline">

              {/* Introduction */}
              <section id="introduction" className="scroll-mt-24 not-prose mb-14">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Building2 className="h-3.5 w-3.5 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Introduction</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-5">The Ottawa Contractor-Mover Partnership</h2>
                <div className="space-y-5 text-gray-700 leading-relaxed text-[17px]">
                  <p>
                    In Ottawa's active real estate and renovation market, two professional service categories intersect more than most homeowners realize: <strong>renovation contractors</strong> and <strong>professional movers</strong>. Every major home renovation project creates a moving need — and every relocation often creates a need for renovation services. The connection between these two industries is so consistent, so predictable, and so practically significant that Ottawa's leading professionals in both fields have established a formal working relationship to serve shared clients better.
                  </p>
                  <p>
                    <strong>Prestige Moving Ottawa</strong> and <strong><a href="https://ottawacontractors.ca" target="_blank" rel="noopener noreferrer">OttawaContractors.ca</a></strong> represent exactly this kind of partnership. Both organizations serve Ottawa homeowners and businesses at critical life moments — the renovation or construction of a home or commercial space, and the relocation of a household or business into or out of that space. When both services are needed in close proximity, having two trusted, professional, and coordinated providers makes the entire experience simpler and less stressful for the client.
                  </p>
                  <p>
                    This article explores what OttawaContractors.ca is and what they offer, what Prestige Moving brings to the partnership, and — most importantly — how the two organizations work together to benefit Ottawa homeowners, property investors, commercial tenants, and business owners who need both renovation and moving services in the same project lifecycle.
                  </p>
                </div>
              </section>

              {/* About Ottawa Contractors */}
              <section id="about-ottawa-contractors" className="scroll-mt-24 not-prose mb-14">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Hammer className="h-3.5 w-3.5 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">About OttawaContractors.ca</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-5">What Is OttawaContractors.ca?</h2>
                <div className="space-y-5 text-gray-700 leading-relaxed text-[17px]">
                  <p>
                    <a href="https://ottawacontractors.ca" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] font-semibold hover:underline">OttawaContractors.ca</a> is Ottawa's dedicated platform for connecting homeowners and businesses with licensed, insured, and vetted renovation and construction contractors across the National Capital Region. The platform addresses one of the most consistent pain points in Ottawa's home services market: finding a qualified contractor who is actually available, verifiably licensed, properly insured, and reliably professional.
                  </p>
                  <p>
                    Ottawa has a substantial home renovation market, driven by its high proportion of mid-century housing stock — thousands of bungalows, two-storeys, and semi-detached homes built between the 1950s and 1980s that are structurally sound but due for modern updates. Kitchen renovations, bathroom remodels, basement development, window and door replacements, roofing, and full home updates are consistently among Ottawa's most active renovation categories. OttawaContractors.ca serves all of these project types, connecting clients with specialists in each category.
                  </p>
                  <p>
                    The contractors featured on OttawaContractors.ca are not random directory listings. Each contractor on the platform is reviewed for licensing compliance, carries appropriate commercial general liability insurance, and has a demonstrated track record of completed Ottawa projects. This vetting process is what makes the platform valuable: it replaces the ad hoc, uncertain process of asking neighbours and searching online with a curated connection to contractors who have already been evaluated for professional reliability.
                  </p>
                  <p>
                    Services available through OttawaContractors.ca span the full range of home and commercial renovation needs:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-[17px] list-none pl-0">
                    {[
                      "Kitchen and bathroom renovations",
                      "Basement development and finishing",
                      "Roofing, siding, and exterior work",
                      "Flooring installation (hardwood, tile, LVP, carpet)",
                      "Painting and interior finishing",
                      "Window and door replacement",
                      "Additions and structural work",
                      "Commercial fit-outs and office renovations",
                      "Heritage property restoration",
                      "General contracting and project management",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={collabImg}
                    alt="Ottawa home renovation and moving services working in coordination — before and after"
                    className="w-full h-auto object-cover"
                  />
                  <div className="bg-[#1A2332]/5 px-4 py-2 text-sm text-gray-500 italic text-center">
                    Renovation and moving services working in coordination — clearing before construction, protecting surfaces on move-in.
                  </div>
                </div>
              </section>

              {/* About Prestige Moving */}
              <section id="about-prestige" className="scroll-mt-24 not-prose mb-14">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <TruckIcon className="h-3.5 w-3.5 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">About Prestige Moving</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-5">About Prestige Moving Ottawa</h2>
                <div className="space-y-5 text-gray-700 leading-relaxed text-[17px]">
                  <p>
                    <Link href="/" className="text-[#C5A572] font-semibold hover:underline">Prestige Moving Ottawa</Link> is the National Capital Region's top-rated professional moving company, with over 10 years of service, a 5.0 Google rating built on 400+ verified reviews, and a complete portfolio of residential, commercial, and specialty moving services. Every Prestige mover is a direct employee — background-checked, professionally trained, uniformed, and equipped with the full range of professional moving equipment.
                  </p>
                  <p>
                    Prestige Moving serves every Ottawa neighbourhood from Kanata to Orleans, Barrhaven to Rockcliffe Park, and every community in between. Our <Link href="/services/residential-moving" className="text-[#C5A572] hover:underline">residential moving</Link> service covers everything from bachelor apartments to multi-million-dollar estate homes. Our <Link href="/services/commercial-moving" className="text-[#C5A572] hover:underline">commercial moving</Link> service handles office relocations, retail moves, medical practice relocations, and large-scale business transitions. We also provide <Link href="/services/packing-services" className="text-[#C5A572] hover:underline">professional packing</Link>, <Link href="/junk-removal-ottawa" className="text-[#C5A572] hover:underline">junk removal</Link>, <Link href="/furniture-assembly-ottawa" className="text-[#C5A572] hover:underline">furniture assembly</Link>, <Link href="/home-staging-ottawa" className="text-[#C5A572] hover:underline">home staging</Link>, and <Link href="/custom-crating-ottawa" className="text-[#C5A572] hover:underline">custom crating</Link> for specialty and high-value items.
                  </p>
                  <p>
                    Our core pricing is transparent and competitive: the Premium package at <strong>$155/hour</strong> (2 movers + truck), the Deluxe package at <strong>$195/hour</strong> (3 movers + truck), and the Diamond package at <strong>$315/hour</strong> (4 movers + 2 trucks) for large estates and complex moves. All quotes are written, all-inclusive, and guaranteed — your final invoice matches your estimate without exception.
                  </p>

                  {/* Stats Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    {[
                      { stat: "5.0★", label: "Google Rating" },
                      { stat: "400+", label: "Verified Reviews" },
                      { stat: "$2M+", label: "Liability Insurance" },
                      { stat: "10+", label: "Years in Ottawa" },
                    ].map(({ stat, label }) => (
                      <div key={label} className="bg-[#1A2332] rounded-xl p-4 text-center">
                        <div className="text-[#C5A572] text-2xl font-bold">{stat}</div>
                        <div className="text-white/60 text-xs mt-1">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* How They Work Together */}
              <section id="how-they-work-together" className="scroll-mt-24 not-prose mb-14">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Users className="h-3.5 w-3.5 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">The Partnership</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-5">How Ottawa Contractors and Prestige Moving Work Together</h2>
                <div className="space-y-5 text-gray-700 leading-relaxed text-[17px]">
                  <p>
                    The practical intersection of renovation contracting and professional moving services is more frequent than most clients anticipate when they first hire either type of provider. A homeowner who engages a contractor for a kitchen renovation quickly realizes that the kitchen — and often adjacent areas — need to be cleared before work can begin. A family buying a new-construction home needs professional movers for move-in day. A business completing a commercial renovation needs an after-hours moving crew to install furniture and equipment before the Monday opening. In every one of these cases, the contractor and the mover are part of the same project.
                  </p>
                  <p>
                    When Prestige Moving and OttawaContractors.ca are working in the same project, both organizations communicate directly to align timelines. The contractor provides the renovation completion schedule; Prestige Moving builds a move-in plan around it. If the renovation runs late — as renovations sometimes do — Prestige Moving adjusts the moving date with priority scheduling rather than requiring a full rebooking process. If the client needs access to certain items during renovation (a specific piece of furniture, appliances, essential household items), our teams coordinate storage and retrieval around the contractor's access requirements.
                  </p>
                  <p>
                    This coordination eliminates the most common failure point in renovation-related moves: the gap between "renovation complete" and "moved in." Without a coordinated provider, clients often find themselves scrambling to book a moving company at the last minute after their renovation finishes earlier or later than expected, protecting new surfaces with improvised solutions, and managing two separate service providers who have no communication with each other. With Prestige Moving and OttawaContractors.ca working as a coordinated team, this gap is managed professionally.
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                  {SERVICES_GRID.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                      <div className="w-10 h-10 bg-[#C5A572]/15 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5 text-[#C5A572]" />
                      </div>
                      <h3 className="font-bold text-[#1A2332] text-sm mb-2">{title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Renovation Moves */}
              <section id="renovation-moves" className="scroll-mt-24 not-prose mb-14">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Home className="h-3.5 w-3.5 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Renovation Moving</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-5">Renovation-Based Moving Scenarios in Ottawa</h2>
                <div className="space-y-5 text-gray-700 leading-relaxed text-[17px]">
                  <p>
                    The most common scenario where an Ottawa homeowner needs both contractor and moving services simultaneously is a major home renovation — particularly a kitchen or bathroom gut renovation, a basement development project, a multi-room refresh before a home sale, or a complete home transformation. In every one of these scenarios, moving furniture and belongings is a prerequisite for the contractor's work to begin, and moving them back — with full surface protection — is the final step once the renovation is complete.
                  </p>
                  <p>
                    For a kitchen renovation in an Ottawa bungalow, the process typically unfolds as follows: the homeowner engages a contractor through OttawaContractors.ca to design and build the new kitchen. Before the demolition phase begins, Prestige Moving clears the kitchen of all movable furniture, appliances, small appliances, and kitchenware. These items are either moved to a storage facility for the renovation's duration or relocated within the home to a designated holding area. The contractor then has unobstructed access to the full kitchen space. When the renovation is complete, Prestige Moving returns all items with full protection on the new hardwood or tile flooring and reassembles or stages the kitchen as required.
                  </p>
                  <p>
                    For larger renovation projects — a full home update before a sale, a basement development project, or a multi-room renovation — the coordination between the contractor and the mover is more complex and more critical. The contractor needs to know which rooms will be cleared and when. The mover needs to know the renovation timeline well enough to plan the return date. When both parties are coordinated through the Prestige Moving / OttawaContractors.ca partnership, this information flows directly between the relevant contacts at each company rather than requiring the homeowner to serve as the communication intermediary.
                  </p>
                </div>

                {/* Step-by-step scenarios */}
                <div className="space-y-5 mt-8">
                  {COLLAB_SCENARIOS.map(({ scenario, steps }) => (
                    <div key={scenario} className="bg-[#1A2332] rounded-2xl p-6">
                      <h3 className="text-white font-bold text-base mb-4">{scenario}</h3>
                      <div className="space-y-3">
                        {steps.map((step, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#C5A572] flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-[#1A2332] text-xs font-bold">{i + 1}</span>
                            </div>
                            <p className="text-white/75 text-sm leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* New Build */}
              <section id="new-build-delivery" className="scroll-mt-24 not-prose mb-14">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Building2 className="h-3.5 w-3.5 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">New Construction</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-5">New Build & Construction Delivery in Ottawa</h2>
                <img src={skylineImg} alt="Ottawa new construction and development — contractors and movers working in growing communities" className="w-full rounded-2xl object-cover mb-6 shadow-md" />
                <div className="space-y-5 text-gray-700 leading-relaxed text-[17px]">
                  <p>
                    Ottawa's new construction market is substantial and growing. Communities like <Link href="/residential-movers-riverside-south" className="text-[#C5A572] hover:underline">Riverside South</Link>, <Link href="/residential-movers-kanata" className="text-[#C5A572] hover:underline">Kanata</Link>, Barrhaven, and <Link href="/residential-movers-orleans-village" className="text-[#C5A572] hover:underline">Orleans Village</Link> are seeing hundreds of new home completions per year as Ottawa's population grows and demand for new housing continues to outpace resale supply. Every one of those new home completions creates an immediate need for professional moving services.
                  </p>
                  <p>
                    Moving into a new-construction home built by Ottawa contractors is a specific type of move that demands particular care. New hardwood floors, freshly painted walls, pristine door frames, and brand-new fixtures have never experienced a move — and they show damage immediately if unprotected. Prestige Moving's new build protocol is designed specifically for this scenario: full-length floor runners on every pathway, foam door frame guards on every entry point, corner protectors on all exposed wall corners, and surface inspection at the start and end of every job.
                  </p>
                  <p>
                    For Ottawa contractors completing new construction projects, Prestige Moving is the natural referral partner for their clients' move-in day. When a contractor's client takes possession of a new home, they need to know their professional moving company before the closing date — not scrambling for availability the week before possession. OttawaContractors.ca's builder and contractor network refers Prestige Moving to new build clients so that the move-in day is as carefully managed as the construction that preceded it.
                  </p>
                  <p>
                    We also work with Ottawa contractors on the logistics of new-construction access during possession. Some new builds are still in active construction phases when other units take possession — there are shared driveways, construction equipment, and site access protocols to navigate. Our crew's experience with new build communities across Ottawa means we know how to work safely within active construction sites without violating site protocols or creating conflicts with the contractor's ongoing work.
                  </p>
                </div>
              </section>

              {/* Commercial */}
              <section id="commercial-renovations" className="scroll-mt-24 not-prose mb-14">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Building2 className="h-3.5 w-3.5 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Commercial</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-5">Commercial Renovations & Office Moves in Ottawa</h2>
                <div className="space-y-5 text-gray-700 leading-relaxed text-[17px]">
                  <p>
                    Ottawa's commercial renovation market is active across every sector — government-adjacent offices being modernized, healthcare clinics updating to meet new regulatory standards, retail spaces being refitted as tenants change, and restaurants and food service businesses renovating between concepts. In every commercial renovation scenario, the relationship between the contractor completing the work and the moving company bringing in the new tenant's furniture, equipment, and technology infrastructure is critical to the project's overall timeline success.
                  </p>
                  <p>
                    The commercial scenario where coordination between OttawaContractors.ca and Prestige Moving matters most is the weekend fit-out move. A contractor completes a commercial renovation on Friday. The new tenant needs to be operational on Monday. That means an entire business — its workstations, IT infrastructure, commercial furniture, filing systems, and specialized equipment — needs to be moved in, placed, and set up over Saturday and Sunday. Prestige Moving's <Link href="/services/commercial-moving" className="text-[#C5A572] hover:underline">commercial moving service</Link> is specifically designed for this scenario, with after-hours and weekend crew availability, documented move planning, and a project manager on-site throughout to ensure the Monday opening happens on schedule.
                  </p>
                  <p>
                    For medical and healthcare commercial renovations — a growing category in Ottawa's commercial renovation market as healthcare facilities expand to serve the city's growing population — the coordination between contractor and mover requires clinical protocols. Patient record confidentiality, diagnostic equipment handling, and regulatory compliance for clinical space changeover all intersect with the physical task of moving furniture and equipment into the renovated space. Our <Link href="/commercial-movers-ottawa" className="text-[#C5A572] hover:underline">commercial moving team</Link> has documented protocols for medical office moves that align with these requirements.
                  </p>
                  <p>
                    Restaurant and food service renovations are another sector where the contractor-mover handoff is particularly time-sensitive. A restaurant that closes for renovation has a hard reopening date — reservation books, marketing campaigns, and staff schedules are all built around that date. The contractor's completion timeline and the mover's equipment installation timeline are both on the critical path. When the OttawaContractors.ca contractor and Prestige Moving are coordinated partners from the beginning of the project, this critical path is managed with the professional rigor the timeline demands.
                  </p>
                </div>
              </section>

              {/* Junk Removal */}
              <section id="junk-estate" className="scroll-mt-24 not-prose mb-14">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Package className="h-3.5 w-3.5 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Junk & Cleanout</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-5">Junk Removal & Estate Cleanout Coordination</h2>
                <div className="space-y-5 text-gray-700 leading-relaxed text-[17px]">
                  <p>
                    One of the least discussed but most practically important aspects of the contractor-mover relationship is what happens to the contents of a space before renovation begins. Ottawa homeowners undertaking major renovations frequently need to dispose of old furniture, outdated appliances, and accumulated belongings before a contractor can begin work. In many cases, the renovation itself is being triggered by an estate — an aging parent's home that needs to be renovated and sold after the family transitions.
                  </p>
                  <p>
                    Prestige Moving's <Link href="/junk-removal-ottawa" className="text-[#C5A572] hover:underline">junk removal</Link> and <Link href="/estate-cleanout-ottawa" className="text-[#C5A572] hover:underline">estate cleanout</Link> services are designed exactly for these pre-renovation scenarios. We clear homes and commercial spaces of unwanted items — furniture, appliances, general household contents — and coordinate responsible disposal including donation to Ottawa charitable organizations where applicable. This pre-renovation cleanout is often the first step in a project that then moves to the OttawaContractors.ca contractor for the renovation itself, followed by Prestige Moving's moving service for the final move-in.
                  </p>
                  <p>
                    Estate cleanouts before renovation are particularly common in Ottawa's established neighbourhoods — <Link href="/movers-in-rockcliffe-park" className="text-[#C5A572] hover:underline">Rockcliffe Park</Link>, <Link href="/movers-in-alta-vista" className="text-[#C5A572] hover:underline">Alta Vista</Link>, <Link href="/movers-in-westboro" className="text-[#C5A572] hover:underline">Westboro</Link>, and the mature residential areas of <Link href="/movers-in-nepean" className="text-[#C5A572] hover:underline">Nepean</Link> — where homes have been continuously occupied for 30–50 years and contain a full generation of accumulated belongings. Our estate cleanout team approaches these jobs with sensitivity, patience, and the organizational clarity to distinguish between items worth donating, items worth keeping, and items for disposal. This is the foundation on which a successful renovation — and subsequent move — is built.
                  </p>
                </div>
              </section>

              {/* Benefits */}
              <section id="benefits-homeowners" className="scroll-mt-24 not-prose mb-14">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Star className="h-3.5 w-3.5 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Client Benefits</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-5">Benefits for Ottawa Homeowners and Businesses</h2>
                <div className="space-y-5 text-gray-700 leading-relaxed text-[17px]">
                  <p>
                    The primary benefit of working with two coordinated professional providers — OttawaContractors.ca and Prestige Moving — rather than sourcing each independently is simplicity. The renovation-moving cycle is already complex: there are contractor schedules, possession dates, storage logistics, and surface protection requirements all happening in parallel. Having two professional organizations that communicate with each other, align their timelines, and take coordinated responsibility for their respective parts of the project removes the coordination burden from the homeowner.
                  </p>
                  <p>
                    The secondary benefit is accountability. When a renovation project requires both contractor services and moving services, the failure of either provider affects the other. If the contractor finishes later than expected and the mover has a hard booking that can't adjust, the homeowner is caught in the middle. When Prestige Moving and OttawaContractors.ca are partners, this failure-mode is anticipated and managed. Our teams hold each other to coordinated timelines, and when adjustments are needed, they are communicated directly between providers rather than creating a logistics crisis for the client.
                  </p>
                  <p>
                    Ottawa homeowners who access both Prestige Moving and OttawaContractors.ca services for the same project also benefit from combined local expertise. Both organizations know Ottawa's neighbourhoods, building stocks, permit requirements, access constraints, and logistical characteristics. A contractor who knows that <Link href="/movers-in-kanata" className="text-[#C5A572] hover:underline">Kanata</Link> new builds have active construction zone access restrictions, and a mover who knows the same, produces a better-coordinated project than two providers without that shared local knowledge.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mt-8">
                  {[
                    { title: "Coordinated Timelines", desc: "Contractor and mover align schedules directly — no client coordination required between providers." },
                    { title: "Single-Source Accountability", desc: "Both professional organizations are responsible to you. No gaps, no finger-pointing, no service breakdowns." },
                    { title: "Ottawa Local Expertise", desc: "Both teams know Ottawa's neighbourhoods, access constraints, and project logistics from years of on-the-ground experience." },
                  ].map(({ title, desc }) => (
                    <div key={title} className="bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-xl p-5">
                      <CheckCircle2 className="h-6 w-6 text-[#C5A572] mb-3" />
                      <h3 className="font-bold text-[#1A2332] text-sm mb-2">{title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Referral Network */}
              <section id="referral-network" className="scroll-mt-24 not-prose mb-14">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Users className="h-3.5 w-3.5 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Referral Network</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-5">Ottawa's Trusted Referral Network</h2>
                <div className="space-y-5 text-gray-700 leading-relaxed text-[17px]">
                  <p>
                    Ottawa's professional home services ecosystem — real estate agents, mortgage brokers, property managers, renovation contractors, professional movers — operates largely through trusted referral networks. When a homeowner asks their real estate agent who to call for a move, the agent refers a mover they trust. When a homeowner asks a contractor who they used to move their own family, the contractor refers a mover with a proven track record.
                  </p>
                  <p>
                    The Prestige Moving and OttawaContractors.ca partnership formalizes this referral dynamic. When an OttawaContractors.ca contractor is completing a renovation project and their client asks about moving services, Prestige Moving is the answer — a provider the contractor knows personally, whose professional standards match their own, and whose track record of Ottawa service delivery they can vouch for directly. When a Prestige Moving client mentions they are renovating before or after their move, OttawaContractors.ca is the resource — a curated platform of verified Ottawa contractors who have been vetted to the same professional standard our clients expect from their movers.
                  </p>
                  <p>
                    This bi-directional referral relationship is built on mutual professional respect and a shared commitment to the Ottawa client experience. Both organizations measure their success by the same standard: a client who feels completely taken care of throughout a stressful life transition, with no service failures, no timeline surprises, and no post-project regrets. That shared standard is what makes the partnership meaningful rather than transactional.
                  </p>
                  <p>
                    For Ottawa homeowners and businesses navigating a renovation and relocation simultaneously, the recommendation is clear: engage both OttawaContractors.ca for your renovation needs and Prestige Moving for your moving and relocation needs, and let the two organizations coordinate the delivery of a seamless end-to-end project. Call us at <a href="tel:6136004000" className="text-[#C5A572] font-semibold hover:underline">(613) 600-4000</a> to discuss how we can coordinate your Ottawa renovation move today.
                  </p>
                </div>

                {/* Final CTA block */}
                <div className="mt-10 bg-[#1A2332] rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-3">Ready to coordinate your Ottawa renovation move?</h3>
                      <p className="text-white/65 text-sm leading-relaxed mb-5">
                        Contact Prestige Moving for the moving side, and visit OttawaContractors.ca to find your renovation contractor. Both teams are ready to coordinate around your project timeline.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Link href="/book">
                          <Button className="bg-[#C5A572] text-[#1A2332] font-bold">
                            Get a Free Moving Quote <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <a href="https://ottawacontractors.ca" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="text-white border-white/30 bg-white/10">
                            Find Ottawa Contractors
                          </Button>
                        </a>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: "Prestige Moving Ottawa", value: "(613) 600-4000", href: "tel:6136004000" },
                        { label: "Email Prestige Moving", value: "ottawa@prestigemoving.ca", href: "mailto:ottawa@prestigemoving.ca" },
                        { label: "OttawaContractors.ca", value: "ottawacontractors.ca", href: "https://ottawacontractors.ca" },
                      ].map(({ label, value, href }) => (
                        <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center justify-between bg-white/8 border border-white/15 rounded-xl px-4 py-3 hover:bg-white/15 transition-colors group">
                          <span className="text-white/55 text-sm">{label}</span>
                          <span className="text-[#C5A572] text-sm font-semibold group-hover:underline">{value}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-24 not-prose mb-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Shield className="h-3.5 w-3.5 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">FAQ</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2332] mb-6">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {FAQS.map((faq, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                        <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-5 pt-1 text-gray-600 text-sm leading-relaxed bg-white border-t border-gray-100">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

            </article>

            {/* Sticky Sidebar TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div className="bg-[#1A2332] rounded-2xl p-6">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">In This Article</h4>
                  <nav className="space-y-2">
                    {TOC_ITEMS.map(({ id, title }) => (
                      <a
                        key={id}
                        href={`#${id}`}
                        className="block text-white/55 text-sm hover:text-[#C5A572] transition-colors leading-snug"
                      >
                        {title}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="bg-[#C5A572]/10 border border-[#C5A572]/25 rounded-2xl p-5">
                  <h4 className="text-[#1A2332] font-bold text-sm mb-3">Book Prestige Moving</h4>
                  <p className="text-gray-600 text-xs mb-4 leading-relaxed">5.0★ rated moving company. Written quotes. Zero hidden fees.</p>
                  <Link href="/book">
                    <Button className="bg-[#C5A572] text-[#1A2332] font-bold w-full text-sm">
                      Get Free Quote <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                  <a href="tel:6136004000" className="mt-2 flex items-center justify-center gap-2 text-[#1A2332] text-sm font-semibold hover:text-[#C5A572] transition-colors">
                    <Phone className="h-4 w-4" /> (613) 600-4000
                  </a>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                  <h4 className="text-[#1A2332] font-bold text-sm mb-3">Find Ottawa Contractors</h4>
                  <p className="text-gray-600 text-xs mb-4 leading-relaxed">Licensed, vetted renovation contractors across Ottawa.</p>
                  <a href="https://ottawacontractors.ca" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full text-sm border-[#1A2332]/30 text-[#1A2332]">
                      Visit OttawaContractors.ca <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Button>
                  </a>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                  <h4 className="text-[#1A2332] font-bold text-sm mb-3">Related Services</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      { label: "Junk Removal Ottawa", href: "/junk-removal-ottawa" },
                      { label: "Estate Cleanout Ottawa", href: "/estate-cleanout-ottawa" },
                      { label: "Custom Crating Ottawa", href: "/custom-crating-ottawa" },
                      { label: "Furniture Assembly Ottawa", href: "/furniture-assembly-ottawa" },
                      { label: "Home Staging Ottawa", href: "/home-staging-ottawa" },
                      { label: "Commercial Moving Ottawa", href: "/services/commercial-moving" },
                    ].map(({ label, href }) => (
                      <Link key={href} href={href} className="flex items-center gap-2 text-gray-600 hover:text-[#C5A572] transition-colors">
                        <ChevronDown className="h-3 w-3 -rotate-90" />
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <SharedFooter />
    </>
  );
}
