import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TOC = [
  { id: "why-ottawa-contractors-matter",   label: "Why Ottawa Contractors Are the Backbone of Home Ownership" },
  { id: "canada-maintenance-standards",    label: "Canada's National Maintenance Standards" },
  { id: "connection-maintenance-contractors", label: "The Connection Between Canada Maintenance & Ottawa Contractors" },
  { id: "essential-contractor-services",   label: "The 8 Essential Services Ottawa Contractors Provide" },
  { id: "seasonal-calendar",               label: "Ottawa's Seasonal Maintenance Calendar" },
  { id: "how-to-choose",                   label: "How to Choose the Right Ottawa Contractor" },
  { id: "moving-and-maintenance",          label: "Moving in Ottawa & Home Maintenance" },
  { id: "costs-2026",                      label: "What Ottawa Contractors Charge in 2026" },
  { id: "red-flags",                       label: "Red Flags When Hiring Contractors" },
  { id: "faq",                             label: "FAQ: Ottawa Contractors & Home Maintenance" },
];

export default function OttawaContractorsMaintenanceGuide() {
  const { data: post, isLoading } = useQuery<any>({
    queryKey: ["/api/blog/posts/slug/ottawa-contractors-canada-home-maintenance-guide"],
  });

  return (
    <>
      <Helmet>
        <title>Ottawa Contractors | Canada Home Maintenance Complete Guide 2026</title>
        <meta
          name="description"
          content="Why Ottawa contractors and Canada home maintenance standards are inseparable. Complete 2026 guide: essential services, seasonal calendar, cost breakdowns, how to choose contractors, and FAQ for Ottawa homeowners."
        />
        <meta name="keywords" content="ottawa contractors, canada maintenance, home maintenance ottawa, ottawa home contractors, ottawa renovation contractors" />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-contractors-canada-home-maintenance-guide" />
        <meta property="og:title" content="Ottawa Contractors | Canada Home Maintenance Complete Guide 2026" />
        <meta property="og:description" content="Why Ottawa contractors and Canada home maintenance standards are inseparable. Complete 2026 guide for Ottawa homeowners." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://prestigemoving.ca/ottawa-contractors-canada-home-maintenance-guide" />
        <meta property="og:image" content="https://prestigemoving.ca/blog-images/ottawa-contractors-home-maintenance.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Ottawa Contractors & Canada Home Maintenance: The Complete 2026 Guide",
          "description": "Why Ottawa contractors and Canada home maintenance standards are inseparable. Complete 2026 guide for Ottawa homeowners.",
          "image": "https://prestigemoving.ca/blog-images/ottawa-contractors-home-maintenance.png",
          "author": { "@type": "Organization", "name": "Prestige Moving" },
          "publisher": { "@type": "Organization", "name": "Prestige Moving", "url": "https://prestigemoving.ca" },
          "datePublished": "2026-03-20",
          "dateModified": "2026-03-20",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://prestigemoving.ca/ottawa-contractors-canada-home-maintenance-guide" },
          "keywords": "ottawa contractors, canada maintenance, home maintenance ottawa, ottawa contractors guide"
        })}</script>
      </Helmet>

      <SharedNavigation />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-[#1A2332] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/blog-images/ottawa-contractors-home-maintenance.png"
            alt="Ottawa contractors working on home maintenance"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A2332]/80 via-[#1A2332]/70 to-[#1A2332]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[#C5A572]/80 text-sm mb-5 flex-wrap">
            <Link href="/" className="hover:text-[#C5A572] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/60">Ottawa Contractors</span>
          </div>
          <p className="text-[#C5A572] text-xs font-semibold uppercase tracking-widest mb-3">Complete 2026 Guide</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            Ottawa Contractors &amp; Canada Home Maintenance
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
            Why Canada's national maintenance standards and professional Ottawa contractors are inseparable — and everything Ottawa homeowners need to know to protect their investment.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://ottawacontractors.ca" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#C5A572] hover:bg-[#d4b885] text-[#1A2332] font-bold">
                Find Ottawa Contractors
              </Button>
            </a>
            <Link href="/book">
              <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm">
                Book a Moving Quote
              </Button>
            </Link>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10">
            <div>
              <p className="text-2xl font-bold text-[#C5A572]">2,600+</p>
              <p className="text-white/55 text-xs mt-0.5">Words of expert coverage</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#C5A572]">10</p>
              <p className="text-white/55 text-xs mt-0.5">Sections covered</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#C5A572]">2026</p>
              <p className="text-white/55 text-xs mt-0.5">Pricing &amp; standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">

            {/* Article body */}
            <main>
              {isLoading ? (
                <div className="space-y-4 animate-pulse">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-4 bg-gray-100 rounded w-full" style={{ width: `${85 + Math.random() * 15}%` }} />
                  ))}
                </div>
              ) : post?.content ? (
                <article
                  className="prose prose-lg max-w-none prose-headings:text-[#1A2332] prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-[#1A2332] prose-li:text-gray-700 prose-img:rounded-xl prose-a:text-[#C5A572] prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : null}

              {/* CTA block after content */}
              <div className="mt-14 bg-gradient-to-br from-[#1A2332] to-[#243447] rounded-2xl p-8 text-center">
                <p className="text-[#C5A572] text-xs font-semibold uppercase tracking-widest mb-2">Partner Services</p>
                <h3 className="text-white text-2xl font-bold mb-3">Planning a Move Alongside Your Renovation?</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
                  Prestige Moving Ottawa works alongside Ottawa contractors every day — clearing homes before renovations start and moving families in after the work is done.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/book">
                    <Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Your Move
                    </Button>
                  </Link>
                  <a href="tel:+16136004000">
                    <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10">
                      <Phone className="w-4 h-4 mr-2" />
                      (613) 600-4000
                    </Button>
                  </a>
                </div>
              </div>
            </main>

            {/* Sticky sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">

                {/* Table of Contents */}
                <div className="bg-[#1A2332] rounded-2xl p-6">
                  <p className="text-[#C5A572] text-xs font-semibold uppercase tracking-widest mb-4">In This Guide</p>
                  <nav className="space-y-1.5">
                    {TOC.map(({ id, label }) => (
                      <a
                        key={id}
                        href={`#${id}`}
                        className="block text-white/55 text-sm hover:text-[#C5A572] transition-colors leading-snug py-0.5"
                      >
                        {label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Ottawa Contractors CTA */}
                <div className="border border-[#C5A572]/30 rounded-2xl p-6 bg-[#C5A572]/5">
                  <p className="text-[#1A2332] font-bold text-base mb-2">Find Vetted Ottawa Contractors</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Licensed, insured, and reviewed contractors across every trade in the National Capital Region.
                  </p>
                  <a href="https://ottawacontractors.ca" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-[#1A2332] text-white font-semibold text-sm">
                      Visit OttawaContractors.ca
                    </Button>
                  </a>
                </div>

                {/* Prestige CTA */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <p className="text-[#1A2332] font-bold text-base mb-2">Moving in Ottawa?</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Ottawa's top-rated movers. Perfect for pre-renovation clearouts and post-renovation move-ins.
                  </p>
                  <Link href="/book" className="block">
                    <Button className="w-full bg-[#C5A572] text-[#1A2332] font-semibold text-sm">
                      Get a Free Quote
                    </Button>
                  </Link>
                  <a href="tel:+16136004000" className="block mt-2">
                    <Button variant="outline" className="w-full text-sm text-[#1A2332]">
                      <Phone className="w-3.5 h-3.5 mr-1.5" />
                      (613) 600-4000
                    </Button>
                  </a>
                </div>

                {/* Related links */}
                <div className="rounded-2xl p-6 border border-gray-100">
                  <p className="text-[#1A2332] font-bold text-sm uppercase tracking-wide mb-4">Related Pages</p>
                  <div className="space-y-2 text-sm">
                    <Link href="/ottawa-contractors" className="block text-[#C5A572] hover:underline">Ottawa Contractors Partner Page</Link>
                    <Link href="/services/residential-moving" className="block text-[#C5A572] hover:underline">Residential Moving Ottawa</Link>
                    <Link href="/services/commercial-moving" className="block text-[#C5A572] hover:underline">Commercial Moving Ottawa</Link>
                    <Link href="/junk-removal-ottawa" className="block text-[#C5A572] hover:underline">Junk Removal Ottawa</Link>
                    <Link href="/estate-cleanout-ottawa" className="block text-[#C5A572] hover:underline">Estate Cleanout Ottawa</Link>
                    <Link href="/how-much-does-moving-cost-ottawa" className="block text-[#C5A572] hover:underline">Ottawa Moving Cost Guide 2026</Link>
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
