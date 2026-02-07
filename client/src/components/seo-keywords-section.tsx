import { Link } from "wouter";

const seoPages = [
  { label: "Ottawa Movers", href: "/ottawa-movers" },
  { label: "Moving Company Ottawa", href: "/moving-company-ottawa" },
  { label: "Professional Movers Ottawa", href: "/professional-movers-ottawa" },
  { label: "Best Movers Ottawa", href: "/best-movers-ottawa" },
  { label: "Local Movers Ottawa", href: "/local-movers-ottawa" },
  { label: "Affordable Movers Ottawa", href: "/affordable-movers-ottawa" },
  { label: "Licensed Movers Ottawa", href: "/licensed-movers-ottawa" },
  { label: "Insured Movers Ottawa", href: "/insured-movers-ottawa" },
  { label: "Residential Movers Ottawa", href: "/residential-movers-ottawa" },
  { label: "Commercial Movers Ottawa", href: "/commercial-movers-ottawa" },
];

interface SeoKeywordsSectionProps {
  currentPage?: string;
}

export function SeoKeywordsSection({ currentPage }: SeoKeywordsSectionProps) {
  return (
    <section className="py-16 bg-[#1A2332]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Explore Our Moving Services in Ottawa
        </h2>
        <p className="text-white/60 mb-10 max-w-2xl mx-auto">
          Prestige Moving offers a full range of <strong className="text-white/80">professional moving services</strong> across Ottawa and the National Capital Region. Learn more about what we offer:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {seoPages.map((page) => {
            const isCurrentPage = currentPage === page.href;
            return isCurrentPage ? (
              <span
                key={page.href}
                className="px-5 py-2.5 rounded-full bg-[#C5A572] text-white font-medium text-sm"
                data-testid={`badge-seo-current-${page.href.slice(1)}`}
              >
                {page.label}
              </span>
            ) : (
              <Link
                key={page.href}
                href={page.href}
                className="px-5 py-2.5 rounded-full bg-white/10 text-white/80 font-medium text-sm hover:bg-white/20 hover:text-white transition-colors"
                data-testid={`link-seo-${page.href.slice(1)}`}
              >
                {page.label}
              </Link>
            );
          })}
        </div>
        <p className="text-white/40 text-sm mt-8">
          Looking for a specific service? <Link href="/services" className="text-[#C5A572] hover:text-[#d4b98a] underline">View all our moving services</Link> or <Link href="/book" className="text-[#C5A572] hover:text-[#d4b98a] underline">get a free quote</Link> today.
        </p>
      </div>
    </section>
  );
}
