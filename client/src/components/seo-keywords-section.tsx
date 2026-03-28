import { Link } from "wouter";

interface SeoKeywordsSectionProps {
  currentPage?: string;
}

const LINK_GROUPS = [
  {
    heading: "Ottawa Movers",
    links: [
      { label: "Ottawa movers", href: "/" },
      { label: "movers Ottawa", href: "/ottawa-movers" },
      { label: "movers in Ottawa", href: "/movers-in-ottawa" },
      { label: "Ottawa moving companies", href: "/moving-companies-near-me-ottawa" },
      { label: "moving companies Ottawa", href: "/moving-companies-near-me-ottawa" },
      { label: "moving company Ottawa", href: "/moving-company-ottawa" },
      { label: "Ottawa moving company", href: "/moving-company-ottawa" },
      { label: "movers in Ottawa Ontario", href: "/movers-in-ottawa" },
      { label: "moving Ottawa", href: "/moving-company-ottawa" },
      { label: "movers Ottawa Ontario", href: "/ottawa-movers" },
    ],
  },
  {
    heading: "Best Movers Ottawa",
    links: [
      { label: "best movers in Ottawa", href: "/best-movers-ottawa" },
      { label: "best moving companies Ottawa", href: "/best-movers-ottawa" },
      { label: "professional movers Ottawa", href: "/professional-movers-ottawa" },
      { label: "local movers Ottawa", href: "/local-movers-ottawa" },
      { label: "local moving companies Ottawa", href: "/local-movers-ottawa" },
      { label: "reliable movers Ottawa", href: "/reliable-movers-ottawa" },
      { label: "affordable movers Ottawa", href: "/affordable-movers-ottawa" },
      { label: "licensed movers Ottawa", href: "/licensed-movers-ottawa" },
      { label: "insured movers Ottawa", href: "/insured-movers-ottawa" },
      { label: "cheap movers Ottawa", href: "/cheap-movers-ottawa" },
    ],
  },
  {
    heading: "Neighbourhood Movers",
    links: [
      { label: "Kanata movers", href: "/kanata-movers" },
      { label: "movers Barrhaven", href: "/barrhaven-movers" },
      { label: "moving companies Kanata", href: "/kanata-movers" },
      { label: "movers Kanata", href: "/kanata-movers" },
      { label: "movers in Barrhaven", href: "/movers-in-barrhaven" },
      { label: "Orleans movers", href: "/movers-in-orleans" },
      { label: "Nepean movers", href: "/movers-in-nepean" },
      { label: "moving Manotick", href: "/movers-in-manotick" },
      { label: "Gloucester movers", href: "/movers-in-gloucester" },
      { label: "Stittsville movers", href: "/movers-in-stittsville" },
    ],
  },
  {
    heading: "Specialty & Service Types",
    links: [
      { label: "furniture movers Ottawa", href: "/furniture-movers-ottawa" },
      { label: "furniture movers", href: "/furniture-movers-ottawa" },
      { label: "movers to move furniture", href: "/furniture-movers-ottawa" },
      { label: "piano moving company near me", href: "/ottawa-piano-movers" },
      { label: "piano removal company", href: "/ottawa-piano-movers" },
      { label: "apartment movers Ottawa", href: "/apartment-movers-ottawa" },
      { label: "condo movers Ottawa", href: "/condo-movers-ottawa" },
      { label: "office movers Ottawa", href: "/office-movers-ottawa" },
      { label: "professional packers", href: "/ottawa-packing-services" },
      { label: "moving company packers", href: "/ottawa-packing-services" },
    ],
  },
  {
    heading: "Long Distance Moving",
    links: [
      { label: "long distance movers Ottawa", href: "/long-distance-movers-ottawa" },
      { label: "moving from Ottawa to Toronto", href: "/moving-from-ottawa-to-toronto" },
      { label: "Ottawa to Toronto movers", href: "/ottawa-to-toronto-movers" },
      { label: "moving companies Ottawa to Toronto", href: "/ottawa-to-toronto-movers" },
      { label: "Toronto to Ottawa movers", href: "/moving-to-ottawa-from-toronto" },
      { label: "Ottawa to Montreal movers", href: "/ottawa-to-montreal-movers" },
      { label: "Montreal to Ottawa movers", href: "/moving-from-montreal-to-ottawa" },
      { label: "interprovincial movers Ottawa", href: "/interprovincial-movers-ottawa" },
      { label: "long distance moving company Ottawa", href: "/long-distance-moving-company-ottawa" },
      { label: "moving companies Ottawa prices", href: "/moving-companies-ottawa-prices" },
    ],
  },
  {
    heading: "Residential & Commercial",
    links: [
      { label: "residential movers Ottawa", href: "/residential-movers-ottawa" },
      { label: "Ottawa residential movers", href: "/residential-movers-ottawa" },
      { label: "residential moving Ottawa", href: "/residential-moving-ottawa" },
      { label: "commercial movers Ottawa", href: "/commercial-movers-ottawa" },
      { label: "commercial moving Ottawa", href: "/commercial-movers-ottawa" },
      { label: "Ottawa moving services", href: "/moving-services-ottawa" },
      { label: "house movers Ottawa", href: "/house-movers-ottawa" },
      { label: "same day movers Ottawa", href: "/same-day-movers-ottawa" },
      { label: "last minute movers Ottawa", href: "/last-minute-movers-ottawa" },
      { label: "white glove movers Ottawa", href: "/white-glove-movers-ottawa" },
    ],
  },
  {
    heading: "Resources & Guides",
    links: [
      { label: "how much does moving cost Ottawa", href: "/how-much-does-moving-cost-ottawa" },
      { label: "moving quotes Ottawa", href: "/moving-quotes-ottawa" },
      { label: "Ottawa moving checklist", href: "/ottawa-moving-checklist" },
      { label: "moving tips Ottawa", href: "/moving-tips-ottawa" },
      { label: "packing services Ottawa", href: "/ottawa-packing-services" },
      { label: "moving and storage Ottawa", href: "/moving-and-storage-ottawa" },
      { label: "moving companies Ottawa reviews", href: "/moving-companies-ottawa-reviews" },
      { label: "movers near me Ottawa", href: "/movers-near-me-ottawa" },
      { label: "Ottawa moving rates", href: "/local-ottawa-moving-rates" },
      { label: "Ottawa neighbourhoods guide", href: "/ottawa-neighbourhoods-guide" },
    ],
  },
];

export function SeoKeywordsSection({ currentPage }: SeoKeywordsSectionProps) {
  const allLinks = LINK_GROUPS.flatMap((g) => g.links);

  return (
    <section className="py-14 bg-[#111c2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            All Ottawa Moving Services
          </h2>
          <p className="text-white/50 text-sm max-w-2xl mx-auto">
            Prestige Moving serves every neighbourhood in Ottawa with professional, fully insured residential and commercial moving services. Explore all of our services below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {LINK_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-[#C5A572] text-xs font-bold uppercase tracking-widest mb-3 border-b border-white/10 pb-2">
                {group.heading}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => {
                  const isCurrent = currentPage === link.href;
                  return (
                    <li key={`${link.href}-${link.label}`}>
                      {isCurrent ? (
                        <span
                          className="text-[#C5A572] text-sm font-semibold"
                          data-testid={`badge-seo-current-${link.href.slice(1)}`}
                        >
                          {link.label}
                        </span>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-white/55 text-sm hover:text-[#C5A572] transition-colors leading-relaxed"
                          data-testid={`link-seo-${link.href.slice(1)}`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-white/30 text-xs text-center mt-10">
          Looking for something specific?{" "}
          <Link href="/services" className="text-[#C5A572]/70 hover:text-[#C5A572] underline">
            View all moving services
          </Link>{" "}
          or{" "}
          <Link href="/book" className="text-[#C5A572]/70 hover:text-[#C5A572] underline">
            get a free quote
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
