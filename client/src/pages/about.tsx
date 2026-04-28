import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import {
  Phone, ArrowRight, CheckCircle2, Shield, Award, Users,
  Heart, Truck, Star, MapPin, Clock, BadgeCheck, Home
} from "lucide-react";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Prestige Moving Ottawa",
  alternateName: "Prestige Moving Inc",
  description: "Ottawa's most trusted moving company. Professional residential and commercial moving services, long distance moving across Canada, senior moving, and packing services. WSIB certified, fully insured, 400+ five-star Google reviews.",
  url: "https://prestigemoving.ca",
  telephone: "+16136004000",
  email: "ottawa@prestigemoving.ca",
  address: {
    "@type": "PostalAddress",
    streetAddress: "50 Colonnade Rd Unit 200B",
    addressLocality: "Ottawa",
    addressRegion: "ON",
    postalCode: "K2E 7J6",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.4215,
    longitude: -75.6972,
  },
  openingHours: ["Mo Tu We Fr 07:00-23:30", "Th 09:00-23:30", "Sa 09:00-23:00", "Su 09:00-22:30"],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "400",
    bestRating: "5",
    worstRating: "1",
  },
  foundingDate: "2012",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 20, maxValue: 50 },
  areaServed: [
    { "@type": "City", name: "Ottawa" },
    { "@type": "City", name: "Kanata" },
    { "@type": "City", name: "Orleans" },
    { "@type": "City", name: "Barrhaven" },
    { "@type": "City", name: "Nepean" },
    { "@type": "City", name: "Gloucester" },
    { "@type": "Country", name: "Canada" },
  ],
  sameAs: [
    "https://www.google.com/maps/place/Prestige+Moving",
    "https://prestigemoving.ca",
  ],
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ottawa Movers", item: "https://prestigemoving.ca" },
    { "@type": "ListItem", position: 2, name: "About Prestige Moving", item: "https://prestigemoving.ca/about" },
  ],
};

const VALUES = [
  { icon: Shield, title: "Reliability You Can Count On", desc: "We show up on time, in uniform, with the right equipment — every single time. Our crews are direct employees, never day labourers or subcontractors. Your move is too important to leave to chance." },
  { icon: Heart, title: "Genuine Care for People", desc: "Moving is stressful. We treat every client like we're helping a friend or family member — listening carefully, working at their pace, and making sure they feel confident and comfortable at every stage." },
  { icon: Award, title: "Craftsmanship in Every Move", desc: "We take pride in how we wrap furniture, load a truck, and place belongings. The way we work reflects our standards — if we wouldn't put it in our own home that way, we don't do it for yours." },
  { icon: Users, title: "A Team That Grows Together", desc: "We hire for character and train for skill. Our crew members are the face of Prestige Moving, and we invest in their development, safety, and wellbeing — because happy crews produce happy clients." },
  { icon: CheckCircle2, title: "Complete Transparency", desc: "No hidden charges. No verbal-only quotes that change on moving day. No surprise fees at delivery. You receive a written, binding quote before we start — and the price we quote is the price you pay." },
  { icon: Truck, title: "Professional Equipment and Standards", desc: "Proper moving blankets, floor runners, doorframe protection, stretch wrap, and properly maintained trucks. We invest in the right equipment because it directly protects your belongings and your property." },
];

const STATS = [
  { value: "10,000+", label: "Ottawa Homes & Offices Moved" },
  { value: "400+", label: "Five-Star Google Reviews" },
  { value: "12+", label: "Years Serving Ottawa" },
  { value: "All 34", label: "Ottawa Neighbourhoods Covered" },
];

const CREDENTIALS = [
  "WSIB (Workplace Safety and Insurance Board) certified — all employees covered",
  "Fully licensed and insured — cargo and liability coverage on every move",
  "CVOR certified for interprovincial long distance moves across Canada",
  "All employees background-checked before their first move",
  "Registered Ontario business in good standing",
  "SmartMoving CRM integrated for professional booking management",
  "A+ rated by Ottawa-area clients on Google, HomeStars, and the BBB",
  "COVID-compliant protocols maintained across all move types",
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Prestige Moving Ottawa | Ottawa's Most Trusted Movers</title>
        <meta name="description" content="Learn about Prestige Moving Ottawa — Ottawa's most trusted moving company. 12+ years serving Ottawa, 400+ five-star reviews, WSIB certified, fully insured. Residential, commercial, and long distance moving." />
        <meta name="keywords" content="about prestige moving ottawa, ottawa moving company about, prestige moving team, who are prestige moving ottawa, ottawa movers credentials" />
        <link rel="canonical" href="https://prestigemoving.ca/about" />
        <meta property="og:title" content="About Prestige Moving Ottawa | Ottawa's Most Trusted Movers" />
        <meta property="og:description" content="12+ years serving Ottawa. 400+ five-star reviews. WSIB certified, fully insured, background-checked crew. Meet Ottawa's most trusted moving company." />
        <meta property="og:url" content="https://prestigemoving.ca/about" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB)}</script>
      </Helmet>

      <SharedNavigation />

      {/* Hero */}
      <section className="bg-[#1A2332] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/30 rounded-full px-4 py-1.5 mb-6">
            <BadgeCheck className="h-3.5 w-3.5 text-[#C5A572]" />
            <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-widest">About Prestige Moving Ottawa</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ottawa's Moving Company —<br />
            <span className="text-[#C5A572]">Built on Trust, Proven by Results</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
            Prestige Moving has been serving Ottawa families, couples, students, seniors, and businesses since 2012. We have moved over 10,000 homes and offices across Ottawa and across Canada — and we have built our reputation on doing the job properly, every time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 px-8"><Phone className="mr-2 h-4 w-4" />(613) 600-4000</Button></a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-[#C5A572] py-5">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-extrabold text-[#1A2332]">{value}</div>
              <div className="text-xs font-semibold text-[#1A2332]/70 mt-0.5 leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* Our Story */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Our Story</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>Prestige Moving was founded in Ottawa with a straightforward belief: that moving — one of the most stressful events in a person's life — deserves better than it usually gets. Too many Ottawa residents had experienced movers who showed up late, handled belongings carelessly, charged more than quoted, or simply didn't care about the outcome.</p>
            <p>We started small, with a single crew and a commitment to doing the job properly. We showed up on time. We wrapped furniture like it was our own. We gave written quotes and honoured them. We asked clients where they wanted things placed — and we placed them there.</p>
            <p>Over 12 years, that approach built something we are genuinely proud of: over 400 five-star Google reviews from Ottawa families, businesses, seniors, students, and government employees who trusted us with one of the most important days of their year. We have moved people across the street and across the country — to Toronto, to Calgary, to Vancouver, to Halifax, and everywhere in between.</p>
            <p>Ottawa is our home. We know its neighbourhoods, its buildings, its traffic patterns, and its seasons. We know what a June 30th move-out rush looks like in Centretown, and we know how to navigate a winter move in Kanata without a scratch on the floors. That local knowledge, combined with professional standards that match any moving company in the country, is what sets Prestige Moving apart.</p>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-3">What We Stand For</h2>
          <p className="text-gray-600 text-lg mb-8">Six principles guide every move we do — from a studio apartment in Centretown to a cross-country move to British Columbia.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#1A2332] flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#C5A572]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A2332] mb-1.5 text-sm">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section>
          <div className="rounded-2xl bg-gradient-to-br from-[#1A2332] to-[#243048] p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-5">Our People — The Most Important Part of Every Move</h2>
            <div className="space-y-5 text-white/70 leading-relaxed text-base mb-8">
              <p>Every Prestige mover is a direct employee of Prestige Moving — never a day labourer pulled from a hiring app, never a subcontractor whose standards we cannot control. We hire deliberately, train extensively, and hold our crew to the same standards on Move 1 as on Move 5,000.</p>
              <p>Our hiring process includes a criminal background check, reference verification, and a hands-on assessment of how a candidate handles and protects furniture. Not everyone who applies becomes a Prestige mover — and that selectivity is what you notice when our crew walks through your door.</p>
              <p>We train our crew on floor protection, furniture wrapping, truck loading sequencing, elevator protocols, appliance handling, specialty item procedures, and client communication. We also train for the human side of moving — how to work with seniors patiently, how to communicate clearly with families under stress, and how to handle the unexpected with calm professionalism.</p>
            </div>
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { icon: BadgeCheck, label: "Background-checked" },
                { icon: Award, label: "Professionally trained" },
                { icon: Truck, label: "Uniformed on every move" },
                { icon: Shield, label: "WSIB covered" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                  <Icon className="h-6 w-6 text-[#C5A572] mx-auto mb-2" />
                  <div className="text-white text-xs font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Our Credentials and Certifications</h2>
          <p className="text-gray-600 text-lg mb-8">When you hire Prestige Moving, you are hiring a company that meets every legal requirement and exceeds most industry standards. Here is what that means in practice.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {CREDENTIALS.map(item => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Service Areas */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Where We Serve</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg mb-8">
            <p>Prestige Moving serves all of Ottawa and the National Capital Region for local moves. Our service area includes every Ottawa neighbourhood — from Kanata and Stittsville in the west to Orleans and Cumberland in the east, from Manotick in the south to Rockcliffe Park and Manor Park in the north.</p>
            <p>For long distance moves, we operate across all Canadian provinces. We regularly move clients from Ottawa to Toronto, Montreal, Calgary, Edmonton, Vancouver, Winnipeg, Halifax, and every smaller city in between. Our CVOR-certified long distance division handles the full complexity of interprovincial moves.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Ottawa", "Kanata", "Barrhaven", "Orleans", "Nepean", "Gloucester",
              "Stittsville", "Manotick", "Westboro", "Centretown", "Rockcliffe Park",
              "Manor Park", "Sandy Hill", "The Glebe", "Hintonburg", "Gatineau",
              "Toronto", "Calgary", "Vancouver", "Montreal", "Edmonton", "Halifax",
            ].map(area => (
              <span key={area} className="bg-gray-50 border border-gray-200 text-gray-700 rounded-lg px-3 py-1.5 text-sm font-medium flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#C5A572]" />{area}
              </span>
            ))}
          </div>
        </section>

        {/* What We Move */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">What We Move</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/services/residential-moving", label: "Residential Moving", desc: "Apartments, condos, townhomes, and family homes" },
              { href: "/services/commercial-moving", label: "Commercial Moving", desc: "Offices, retail, warehouses, and government" },
              { href: "/services/long-distance-moving", label: "Long Distance Moving", desc: "Across Ottawa, Ontario, and all of Canada" },
              { href: "/services/senior-moving", label: "Senior Moving", desc: "Patient, caring, and compassionate moves" },
              { href: "/services/packing-services", label: "Packing Services", desc: "Full packing and unpacking — we do it all" },
              { href: "/services/piano-moving", label: "Piano Moving", desc: "Upright and grand pianos — specialist crew" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href}>
                <div className="group p-4 rounded-xl border border-gray-200 bg-white hover-elevate cursor-pointer">
                  <div className="font-semibold text-[#1A2332] group-hover:text-[#C5A572] transition-colors mb-1 text-sm">{label}</div>
                  <div className="text-xs text-gray-500">{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Reviews Callout */}
        <section>
          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8 text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-7 w-7 text-[#C5A572] fill-[#C5A572]" />)}
            </div>
            <div className="text-4xl font-extrabold text-[#1A2332] mb-1">5.0 / 5.0</div>
            <div className="text-gray-500 text-sm mb-2">Based on 400+ verified Google reviews</div>
            <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed mb-6">
              Our reviews are not a marketing exercise — they are the direct result of 12 years of showing up on time, doing the job right, and treating people with respect. Read what Ottawa families say about us.
            </p>
            <Link href="/reviews">
              <Button variant="outline" className="border-[#1A2332] text-[#1A2332]">
                Read Our Reviews <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Get in Touch</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: Phone, label: "Phone", value: "(613) 600-4000", sub: "Available 7 days a week", href: "tel:6136004000" },
              { icon: MapPin, label: "Address", value: "50 Colonnade Rd Unit 200B", sub: "Ottawa, ON K2E 7J6", href: null },
              { icon: Clock, label: "Office Hours", value: "Mon–Sun: 7 AM – 11 PM", sub: "Moving hours vary by date", href: null },
              { icon: Home, label: "Service Area", value: "All of Ottawa + Long Distance", sub: "Every neighbourhood served", href: null },
            ].map(({ icon: Icon, label, value, sub, href }) => (
              <div key={label} className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white">
                <div className="w-10 h-10 rounded-lg bg-[#1A2332] flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-[#C5A572]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} className="font-bold text-[#1A2332] hover:text-[#C5A572] transition-colors">{value}</a>
                  ) : (
                    <div className="font-bold text-[#1A2332]">{value}</div>
                  )}
                  <div className="text-gray-500 text-xs mt-0.5">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* CTA */}
      <section className="bg-[#1A2332] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Work With Ottawa's Most Trusted Movers?</h2>
          <p className="text-white/65 max-w-xl mx-auto mb-8">Get a free, written, binding quote. No hidden charges. No surprises. Just a professional move done right.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10 px-8"><Phone className="h-4 w-4 mr-2" />(613) 600-4000</Button></a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
