import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, Star, CheckCircle2, ExternalLink, ThumbsUp, Users } from "lucide-react";

const REVIEWS = [
  { name: "Sarah M.", area: "Westboro → Kanata", service: "Residential Move", rating: 5, date: "March 2026", text: "Absolutely incredible service from start to finish. The crew arrived on time, wrapped every piece of furniture perfectly, and had us completely set up in the new house in less time than we expected. Not a single scratch anywhere. Prestige is the only mover we'll ever use." },
  { name: "David K.", area: "Orleans → Barrhaven", service: "Residential Move", rating: 5, date: "February 2026", text: "We've moved four times in Ottawa and this was by far the best experience. The crew was professional, friendly, and worked non-stop. The quote was exactly what we paid — no surprise charges at the end. That alone put them ahead of every other mover we've used." },
  { name: "Jennifer L.", area: "Ottawa → Toronto", service: "Long Distance Move", rating: 5, date: "January 2026", text: "Moving from Ottawa to Toronto is stressful enough without worrying about your belongings. The Prestige team made everything simple — clear communication throughout the move, everything arrived on the day they said it would, and not one item was damaged. Outstanding company." },
  { name: "Robert T.", area: "Centretown → Nepean", service: "Condo Move", rating: 5, date: "December 2025", text: "Moved from a 15th floor condo and the crew knew exactly what they were doing with the freight elevator — had the whole process coordinated perfectly. Efficient, careful, and genuinely nice people. My artwork and furniture arrived in perfect condition." },
  { name: "Margaret H.", area: "Gloucester → Chartwell Retirement", service: "Senior Move", rating: 5, date: "November 2025", text: "Moving my mother from her home of 40 years to a retirement community was an emotional process for our whole family. The Prestige team was extraordinarily patient and kind — they worked at her pace, treated every item with complete respect, and made the whole day feel manageable. I cannot thank them enough." },
  { name: "James R.", area: "Ottawa → Calgary", service: "Long Distance Move", rating: 5, date: "October 2025", text: "Cross-country move handled flawlessly. Everything was delivered in perfect condition, the team kept us updated throughout the transit, and the price matched the quote exactly. If you're moving out of Ottawa, these are the people to call." },
  { name: "Amanda C.", area: "Hintonburg → Stittsville", service: "Residential Move", rating: 5, date: "September 2025", text: "Third time using Prestige and they just get better. Showed up early, worked efficiently, treated our antique dining set with the care it deserved. The crew takes obvious pride in their work. Worth every penny." },
  { name: "Michael B.", area: "Nepean → Ottawa → Vancouver", service: "Long Distance Move", rating: 5, date: "August 2025", text: "Ottawa to Vancouver is as far as you can go in Canada. Prestige handled every detail — packing, loading, transit coordination, delivery. The communication was excellent the whole way. Our belongings arrived intact and on the promised date. Impressive operation." },
  { name: "Carol P.", area: "Sandy Hill → Alta Vista", service: "Apartment Move", rating: 5, date: "July 2025", text: "Booked for a July move — the busiest time of year — and they were still perfectly organized and on time. Moved my 2-bedroom apartment in under 4 hours. The crew was friendly and worked really hard. Price was exactly what was quoted. 10/10." },
  { name: "Thomas W.", area: "Barrhaven → Montreal", service: "Long Distance Move", rating: 5, date: "June 2025", text: "Ottawa to Montreal move handled smoothly and professionally. The crew wrapped and loaded with real care and everything arrived the same day in perfect condition. Competitive pricing and an honest written quote upfront. Highly recommend." },
  { name: "Linda F.", area: "Manotick → Riverside South", service: "Residential Move", rating: 5, date: "May 2025", text: "Moved a large family home and the crew of four was incredible. Heavy furniture, awkward pieces, two staircases — they handled everything without hesitation and without a single complaint. My floors and walls are spotless. This company is the real deal." },
  { name: "Kevin S.", area: "Kanata → Edmonton", service: "Long Distance Move", rating: 5, date: "April 2025", text: "The planning and communication from the Prestige team for our Ottawa to Edmonton move was excellent. They walked us through the entire process, gave us a realistic timeline, and delivered on every promise. Everything arrived safely and within the quoted window." },
  { name: "Susan G.", area: "Westboro → Retirement Community", service: "Senior Move", rating: 5, date: "March 2025", text: "Our father's move to a retirement community could not have gone better. The crew was patient, calm, and treated Dad with complete dignity. They knew exactly how to coordinate with the building's move-in team. We felt completely supported throughout the day." },
  { name: "Brian A.", area: "Ottawa → Ottawa (office)", service: "Commercial Move", rating: 5, date: "February 2025", text: "Moved our 25-person office over a weekend with zero disruption to our Monday operations. The Prestige commercial team had us set up and operational before the week began. Professional, efficient, and they coordinated perfectly with our IT team. Would absolutely use again." },
  { name: "Nicole D.", area: "Orleans → Rockcliffe Park", service: "Residential Move", rating: 5, date: "January 2025", text: "High-value home move handled with the white-glove care it required. Every piece of furniture wrapped, all artwork protected with custom padding, floors covered throughout. The crew was meticulous and professional. Nothing but praise." },
  { name: "Patrick M.", area: "Ottawa → Halifax", service: "Long Distance Move", rating: 5, date: "December 2024", text: "Moving to Halifax seemed daunting but Prestige made it manageable. Clear communication, honest pricing, and our belongings arrived in Halifax in the same condition they left Ottawa. The crew was professional and genuinely cared about the outcome." },
  { name: "Karen T.", area: "Gloucester → Manotick", service: "Residential Move", rating: 5, date: "November 2024", text: "Could not be happier. The crew arrived five minutes early, worked non-stop for five hours, and placed everything exactly where we wanted it. Our new home felt organized from day one because of how carefully they handled the unloading. Outstanding." },
  { name: "Frank E.", area: "Ottawa → Winnipeg", service: "Long Distance Move", rating: 5, date: "October 2024", text: "The Prestige team handled our Ottawa to Winnipeg move with complete professionalism. Written quote upfront, crew arrived on time, everything loaded carefully, delivered on time. This is how moving should work." },
];

const SCHEMA_REVIEW_PAGE = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Prestige Moving Ottawa",
  url: "https://prestigemoving.ca",
  telephone: "+16136004000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "50 Colonnade Rd Unit 200B",
    addressLocality: "Ottawa",
    addressRegion: "ON",
    postalCode: "K2E 7J6",
    addressCountry: "CA",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "400",
    bestRating: "5",
    worstRating: "1",
  },
  review: REVIEWS.slice(0, 6).map(r => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    datePublished: r.date,
    reviewBody: r.text,
    name: `${r.service} — ${r.area}`,
  })),
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ottawa Movers", item: "https://prestigemoving.ca" },
    { "@type": "ListItem", position: 2, name: "Reviews", item: "https://prestigemoving.ca/reviews" },
  ],
};

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Prestige Moving Ottawa Reviews | 400+ Five-Star Reviews</title>
        <meta name="description" content="Read 400+ five-star Google reviews for Prestige Moving Ottawa. Ottawa's highest-rated moving company for residential, long distance, senior, and commercial moves." />
        <meta name="keywords" content="prestige moving ottawa reviews, ottawa movers reviews, best movers ottawa reviews, prestige moving google reviews, ottawa moving company reviews" />
        <link rel="canonical" href="https://prestigemoving.ca/reviews" />
        <meta property="og:title" content="Prestige Moving Ottawa Reviews | 400+ Five-Star Reviews" />
        <meta property="og:description" content="Ottawa's most reviewed moving company. 5.0 stars based on 400+ verified Google reviews from real Ottawa clients." />
        <meta property="og:url" content="https://prestigemoving.ca/reviews" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA_REVIEW_PAGE)}</script>
        <script type="application/ld+json">{JSON.stringify(BREADCRUMB)}</script>
      </Helmet>

      <SharedNavigation />

      {/* Hero */}
      <section className="bg-[#1A2332] py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1.5 mb-5">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-9 w-9 text-[#C5A572] fill-[#C5A572]" />)}
          </div>
          <div className="text-6xl font-extrabold text-white mb-2">5.0 / 5.0</div>
          <div className="text-[#C5A572] text-lg font-semibold mb-3">400+ Verified Google Reviews</div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
            Ottawa's Most Reviewed Moving Company
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            Our reviews are the direct result of 12 years of showing up on time, doing the job right, and treating every client with genuine care. Read what Ottawa families, seniors, businesses, and long distance clients say about working with Prestige Moving.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.google.com/maps/place/Prestige+Moving" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">
                Read on Google <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link href="/book">
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 px-8">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <div className="bg-[#C5A572] py-5">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4">
          {[
            { value: "400+", label: "Five-Star Reviews" },
            { value: "5.0 / 5", label: "Average Rating" },
            { value: "12+", label: "Years Serving Ottawa" },
            { value: "10,000+", label: "Successful Moves" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-extrabold text-[#1A2332]">{value}</div>
              <div className="text-xs font-semibold text-[#1A2332]/70 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Breakdown */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { service: "Residential Moving", count: "240+ reviews", icon: Users },
              { service: "Long Distance Moving", count: "95+ reviews", icon: ThumbsUp },
              { service: "Senior Moving", count: "40+ reviews", icon: CheckCircle2 },
              { service: "Commercial Moving", count: "25+ reviews", icon: Star },
            ].map(({ service, count, icon: Icon }) => (
              <div key={service} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200">
                <div className="w-9 h-9 rounded-lg bg-[#1A2332] flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-[#C5A572]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A2332] text-xs">{service}</div>
                  <div className="text-gray-500 text-xs">{count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#1A2332] mb-8">What Ottawa Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {REVIEWS.map((review, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-[#C5A572] fill-[#C5A572]" />
                  ))}
                </div>
                <div className="text-xs text-gray-400">{review.date}</div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{review.text}"</p>
              <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#1A2332] text-sm">{review.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{review.area}</div>
                </div>
                <span className="text-xs bg-[#C5A572]/10 text-[#C5A572] border border-[#C5A572]/20 rounded-full px-2.5 py-0.5 font-medium">{review.service}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Read More CTA */}
        <div className="rounded-2xl bg-[#1A2332] p-8 text-center mb-12">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-[#C5A572] fill-[#C5A572]" />)}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">400+ More Reviews on Google</h3>
          <p className="text-white/65 text-sm mb-6 max-w-md mx-auto">All our reviews are from verified Google customers — real Ottawa residents who moved with us. Read them all on our Google Business listing.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://www.google.com/maps/place/Prestige+Moving" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#C5A572] text-[#1A2332] font-bold">
                Read All Reviews on Google <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <Link href="/book">
              <Button variant="outline" className="text-white border-white/30 bg-white/10">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Why Our Reviews Matter */}
        <div>
          <h2 className="text-2xl font-bold text-[#1A2332] mb-6">Why Our Reviews Are a Reliable Signal</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-base">
            <p>In an industry where virtually every company claims to be "Ottawa's best movers," reviews are the most honest signal available. Anyone can write good marketing copy — but 400+ five-star reviews from verified Ottawa clients represent thousands of hours of actual moving experience, replicated consistently across years and thousands of moves.</p>
            <p>Our reviewers include first-time apartment movers and people moving 4-bedroom family homes of 30 years. They include clients who moved across the street and clients who moved across the country. They include families under time pressure and seniors who needed patience and care. The common thread in every review is not price — it's that we showed up properly equipped, treated their belongings with care, and delivered exactly what we promised.</p>
            <p>We encourage every potential client to read our reviews in full — not just the rating, but the content. That is where you will understand who Prestige Moving really is.</p>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { href: "/about", label: "About Prestige Moving", desc: "Learn who we are and what we stand for" },
              { href: "/how-much-does-moving-cost-ottawa", label: "Ottawa Moving Costs 2026", desc: "Transparent pricing — no surprises" },
              { href: "/book", label: "Book Your Move", desc: "Free written quote — takes 2 minutes" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href}>
                <div className="group p-4 rounded-xl border border-gray-200 bg-white hover-elevate cursor-pointer">
                  <div className="font-semibold text-[#1A2332] group-hover:text-[#C5A572] transition-colors mb-1 text-sm">{label}</div>
                  <div className="text-xs text-gray-500">{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* CTA */}
      <section className="bg-[#1A2332] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-7 w-7 text-[#C5A572] fill-[#C5A572]" />)}
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Experience the Difference Yourself</h2>
          <p className="text-white/65 max-w-xl mx-auto mb-8">Join 10,000+ Ottawa families who have trusted Prestige Moving. Get a free, written, binding quote with no hidden charges.</p>
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
