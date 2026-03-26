import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { MapPin, Truck, Building2, Globe, BookOpen, ArrowRight, Package, Star } from "lucide-react";

const SECTION_STYLE = "text-[#1A2332] font-black text-xl mb-4 flex items-center gap-2";
const LINK_STYLE = "text-[#1A2332]/70 hover:text-[#C5A572] text-sm transition-colors block py-0.5";

const SECTIONS = [
  {
    icon: Star,
    title: "Ottawa Moving — Core Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Ottawa Movers", href: "/ottawa-movers" },
      { label: "Moving Company Ottawa", href: "/moving-company-ottawa" },
      { label: "Professional Movers Ottawa", href: "/professional-movers-ottawa" },
      { label: "Best Movers Ottawa", href: "/best-movers-ottawa" },
      { label: "Local Movers Ottawa", href: "/local-movers-ottawa" },
      { label: "Affordable Movers Ottawa", href: "/affordable-movers-ottawa" },
      { label: "Licensed Movers Ottawa", href: "/licensed-movers-ottawa" },
      { label: "Insured Movers Ottawa", href: "/insured-movers-ottawa" },
      { label: "Reliable Movers Ottawa", href: "/reliable-movers-ottawa" },
      { label: "Movers in Ottawa", href: "/movers-in-ottawa" },
      { label: "Movers Near Me Ottawa", href: "/movers-near-me-ottawa" },
      { label: "Moving Companies Near Me Ottawa", href: "/moving-companies-near-me-ottawa" },
      { label: "Moving Companies Ottawa Reviews", href: "/moving-companies-ottawa-reviews" },
      { label: "Moving Companies Ottawa Prices", href: "/moving-companies-ottawa-prices" },
      { label: "Moving Services Ottawa", href: "/moving-services-ottawa" },
      { label: "Moving Company Ottawa", href: "/moving-company-ottawa" },
    ],
  },
  {
    icon: Package,
    title: "Services",
    links: [
      { label: "Residential Moving", href: "/services/residential-moving" },
      { label: "Commercial Moving", href: "/services/commercial-moving" },
      { label: "Packing Services", href: "/services/packing-services" },
      { label: "Storage Solutions", href: "/services/storage-solutions" },
      { label: "Long Distance Moving", href: "/services/long-distance-moving" },
      { label: "Student Moving", href: "/services/student-moving" },
      { label: "Senior Moving", href: "/services/senior-moving" },
      { label: "Piano Moving", href: "/services/piano-moving" },
      { label: "Antique Moving", href: "/services/antique-moving" },
      { label: "Specialty Item Moving", href: "/services/specialty-item-moving" },
      { label: "Military Moving", href: "/services/military-moving" },
      { label: "Moving Supplies", href: "/services/moving-supplies" },
      { label: "White Glove Movers Ottawa", href: "/white-glove-movers-ottawa" },
      { label: "Residential Movers Ottawa", href: "/residential-movers-ottawa" },
      { label: "Commercial Movers Ottawa", href: "/commercial-movers-ottawa" },
      { label: "Residential Moving Ottawa", href: "/residential-moving-ottawa" },
      { label: "Commercial Moving Services Ottawa", href: "/commercial-moving-services-ottawa" },
      { label: "Ottawa Packing Services", href: "/ottawa-packing-services" },
      { label: "Packing & Moving Ottawa", href: "/packing-and-moving-ottawa" },
      { label: "Moving & Storage Ottawa", href: "/moving-and-storage-ottawa" },
      { label: "Ottawa Moving & Delivery", href: "/ottawa-moving-and-delivery" },
      { label: "Office Movers Ottawa", href: "/office-movers-ottawa" },
      { label: "Office Relocation Ottawa", href: "/office-relocation-ottawa" },
      { label: "Relocation Services Ottawa", href: "/relocation-services-ottawa" },
      { label: "Corporate Relocation Ottawa", href: "/corporate-relocation-services-ottawa" },
      { label: "Free Storage Moving Ottawa", href: "/free-storage-moving-ottawa" },
    ],
  },
  {
    icon: Truck,
    title: "Specialty Movers",
    links: [
      { label: "Piano Moving Ottawa", href: "/piano-moving-ottawa" },
      { label: "Ottawa Piano Movers", href: "/ottawa-piano-movers" },
      { label: "Pool Table Movers Ottawa", href: "/pool-table-movers-ottawa" },
      { label: "Hot Tub Movers Ottawa", href: "/hot-tub-movers-ottawa" },
      { label: "Gym Equipment Movers Ottawa", href: "/gym-equipment-movers-ottawa" },
      { label: "Antique Movers Ottawa", href: "/antique-movers-ottawa" },
      { label: "Appliance Movers Ottawa", href: "/appliance-movers-ottawa" },
      { label: "Furniture Movers Ottawa", href: "/furniture-movers-ottawa" },
      { label: "Furniture Assembly Ottawa", href: "/furniture-assembly-ottawa" },
      { label: "Furniture Rearranging Ottawa", href: "/furniture-rearranging-ottawa" },
      { label: "Furniture Donation & Disposal Ottawa", href: "/furniture-donation-disposal-ottawa" },
      { label: "Professional Hoisting Ottawa", href: "/professional-hoisting-ottawa" },
      { label: "Custom Crating Ottawa", href: "/custom-crating-ottawa" },
      { label: "Embassy Movers Ottawa", href: "/embassy-movers-ottawa" },
      { label: "Federal Government Movers Ottawa", href: "/federal-government-movers-ottawa" },
      { label: "Law Firm Movers Ottawa", href: "/law-firm-movers-ottawa" },
      { label: "University Moving Ottawa", href: "/university-moving-ottawa" },
      { label: "Military Movers Ottawa", href: "/military-movers-ottawa" },
      { label: "Medical Office Movers Ottawa", href: "/medical-office-movers-ottawa" },
      { label: "IT Equipment Movers Ottawa", href: "/it-equipment-movers-ottawa" },
      { label: "Warehouse Movers Ottawa", href: "/warehouse-movers-ottawa" },
      { label: "Retail Store Movers Ottawa", href: "/retail-store-movers-ottawa" },
      { label: "Government Office Movers Ottawa", href: "/government-office-movers-ottawa" },
      { label: "Corporate Movers Ottawa", href: "/corporate-movers-ottawa" },
      { label: "Estate Moving Ottawa", href: "/estate-moving-ottawa" },
      { label: "Estate Cleanout Ottawa", href: "/estate-cleanout-ottawa" },
      { label: "Home Staging Ottawa", href: "/home-staging-ottawa" },
      { label: "Junk Removal Ottawa", href: "/junk-removal-ottawa" },
    ],
  },
  {
    icon: Truck,
    title: "Move Type & Customer Type",
    links: [
      { label: "Apartment Movers Ottawa", href: "/apartment-movers-ottawa" },
      { label: "Condo Movers Ottawa", href: "/condo-movers-ottawa" },
      { label: "House Movers Ottawa", href: "/house-movers-ottawa" },
      { label: "Townhouse Movers Ottawa", href: "/townhouse-movers-ottawa" },
      { label: "Senior Movers Ottawa", href: "/senior-movers-ottawa" },
      { label: "Senior Moving Services Ottawa", href: "/senior-moving-services-ottawa" },
      { label: "Student Movers Ottawa", href: "/student-movers-ottawa" },
      { label: "First Home Movers Ottawa", href: "/first-home-movers-ottawa" },
      { label: "New Construction Home Movers Ottawa", href: "/new-construction-home-movers-ottawa" },
      { label: "Downsizing Moving Ottawa", href: "/downsizing-moving-ottawa" },
      { label: "Same Day Movers Ottawa", href: "/same-day-movers-ottawa" },
      { label: "Last Minute Movers Ottawa", href: "/last-minute-movers-ottawa" },
      { label: "Emergency Movers Ottawa", href: "/emergency-movers-ottawa" },
      { label: "Night Movers Ottawa", href: "/night-movers-ottawa" },
      { label: "After Hours Commercial Movers Ottawa", href: "/after-hours-commercial-movers-ottawa" },
      { label: "Weekend Commercial Movers Ottawa", href: "/weekend-commercial-movers-ottawa" },
      { label: "Small Moving Companies Ottawa", href: "/small-moving-companies-ottawa" },
      { label: "Two Men and a Truck Ottawa", href: "/two-men-and-truck-ottawa" },
      { label: "Moving Labour Ottawa", href: "/moving-labour-ottawa" },
      { label: "Cheap Movers Ottawa", href: "/cheap-movers-ottawa" },
      { label: "Moving Within Ottawa", href: "/moving-within-ottawa" },
      { label: "Cross-Town Movers Ottawa", href: "/cross-town-movers-ottawa" },
    ],
  },
  {
    icon: MapPin,
    title: "Ottawa Neighbourhood Movers",
    links: [
      { label: "Movers in Orleans", href: "/movers-in-orleans" },
      { label: "Movers in Barrhaven", href: "/movers-in-barrhaven" },
      { label: "Movers in Nepean", href: "/movers-in-nepean" },
      { label: "Movers in Kanata", href: "/movers-in-kanata" },
      { label: "Movers in Gloucester", href: "/movers-in-gloucester" },
      { label: "Movers in Stittsville", href: "/movers-in-stittsville" },
      { label: "Movers in Westboro", href: "/movers-in-westboro" },
      { label: "Movers in Sandy Hill", href: "/movers-in-sandy-hill" },
      { label: "Movers in Rockcliffe Park", href: "/movers-in-rockcliffe-park" },
      { label: "Movers in Alta Vista", href: "/movers-in-alta-vista" },
      { label: "Movers in Riverside South", href: "/movers-in-riverside-south" },
      { label: "Movers in Hintonburg", href: "/movers-in-hintonburg" },
      { label: "Movers in Beacon Hill", href: "/movers-in-beacon-hill" },
      { label: "Movers in Manotick", href: "/movers-in-manotick" },
      { label: "Movers in Orleans Village", href: "/movers-in-orleans-village" },
      { label: "Kanata Movers", href: "/kanata-movers" },
      { label: "Barrhaven Movers", href: "/barrhaven-movers" },
      { label: "Moving in Nepean", href: "/moving-nepean" },
      { label: "Professional Movers Gloucester", href: "/professional-movers-gloucester" },
      { label: "Professional Movers Orleans", href: "/professional-movers-orleans" },
    ],
  },
  {
    icon: MapPin,
    title: "Residential Movers by Neighbourhood",
    links: [
      { label: "Residential Movers Orleans", href: "/residential-movers-orleans" },
      { label: "Residential Movers Kanata", href: "/residential-movers-kanata" },
      { label: "Residential Movers Barrhaven", href: "/residential-movers-barrhaven" },
      { label: "Residential Movers Nepean", href: "/residential-movers-nepean" },
      { label: "Residential Movers Gloucester", href: "/residential-movers-gloucester" },
      { label: "Residential Movers Westboro", href: "/residential-movers-westboro" },
      { label: "Residential Movers The Glebe", href: "/residential-movers-the-glebe" },
      { label: "Residential Movers Centretown", href: "/residential-movers-centretown" },
      { label: "Residential Movers Sandy Hill", href: "/residential-movers-sandy-hill" },
      { label: "Residential Movers Stittsville", href: "/residential-movers-stittsville" },
      { label: "Residential Movers Manotick", href: "/residential-movers-manotick" },
      { label: "Residential Movers Alta Vista", href: "/residential-movers-alta-vista" },
      { label: "Residential Movers Hintonburg", href: "/residential-movers-hintonburg" },
      { label: "Residential Movers Riverside South", href: "/residential-movers-riverside-south" },
      { label: "Residential Movers Rockcliffe Park", href: "/residential-movers-rockcliffe-park" },
      { label: "Residential Movers Beacon Hill", href: "/residential-movers-beacon-hill" },
      { label: "Residential Movers Orleans Village", href: "/residential-movers-orleans-village" },
      { label: "Residential Movers Bells Corners", href: "/residential-movers-bells-corners" },
      { label: "Residential Movers Hunt Club", href: "/residential-movers-hunt-club" },
      { label: "Residential Movers Vanier", href: "/residential-movers-vanier" },
      { label: "Residential Movers Manor Park", href: "/residential-movers-manor-park" },
      { label: "Residential Movers Blackburn Hamlet", href: "/residential-movers-blackburn-hamlet" },
      { label: "Residential Movers Crystal Beach", href: "/residential-movers-crystal-beach" },
      { label: "Residential Movers Overbrook", href: "/residential-movers-overbrook" },
      { label: "Residential Movers Old Ottawa South", href: "/residential-movers-old-ottawa-south" },
      { label: "Residential Movers New Edinburgh", href: "/residential-movers-new-edinburgh" },
      { label: "Residential Movers Lowertown", href: "/residential-movers-lowertown" },
    ],
  },
  {
    icon: Building2,
    title: "Commercial Movers by Neighbourhood",
    links: [
      { label: "Commercial Movers Orleans", href: "/commercial-movers-orleans" },
      { label: "Commercial Movers Kanata", href: "/commercial-movers-kanata" },
      { label: "Commercial Movers Barrhaven", href: "/commercial-movers-barrhaven" },
      { label: "Commercial Movers Nepean", href: "/commercial-movers-nepean" },
      { label: "Commercial Movers Gloucester", href: "/commercial-movers-gloucester" },
      { label: "Commercial Movers Westboro", href: "/commercial-movers-westboro" },
      { label: "Commercial Movers The Glebe", href: "/commercial-movers-the-glebe" },
      { label: "Commercial Movers Centretown", href: "/commercial-movers-centretown" },
      { label: "Commercial Movers Sandy Hill", href: "/commercial-movers-sandy-hill" },
      { label: "Commercial Movers Stittsville", href: "/commercial-movers-stittsville" },
      { label: "Commercial Movers Manotick", href: "/commercial-movers-manotick" },
      { label: "Commercial Movers Alta Vista", href: "/commercial-movers-alta-vista" },
      { label: "Commercial Movers Hintonburg", href: "/commercial-movers-hintonburg" },
      { label: "Commercial Movers Riverside South", href: "/commercial-movers-riverside-south" },
      { label: "Commercial Movers Rockcliffe Park", href: "/commercial-movers-rockcliffe-park" },
      { label: "Commercial Movers Beacon Hill", href: "/commercial-movers-beacon-hill" },
      { label: "Commercial Movers Orleans Village", href: "/commercial-movers-orleans-village" },
    ],
  },
  {
    icon: Globe,
    title: "Long Distance — Ottawa to Anywhere",
    links: [
      { label: "Ottawa to Montreal Movers", href: "/ottawa-to-montreal-movers" },
      { label: "Ottawa to Toronto Movers", href: "/ottawa-to-toronto-movers" },
      { label: "Ottawa to Calgary Movers", href: "/ottawa-to-calgary-movers" },
      { label: "Ottawa to Vancouver Movers", href: "/ottawa-to-vancouver-movers" },
      { label: "Ottawa to Halifax Movers", href: "/ottawa-to-halifax-movers" },
      { label: "Ottawa to Nova Scotia Movers", href: "/ottawa-to-nova-scotia-movers" },
      { label: "Ottawa to New Brunswick Movers", href: "/ottawa-to-new-brunswick-movers" },
      { label: "Ottawa to Gatineau Movers", href: "/ottawa-to-gatineau-movers" },
      { label: "Long Distance Movers Ottawa", href: "/long-distance-movers-ottawa" },
      { label: "Long Distance Moving Company Ottawa", href: "/long-distance-moving-company-ottawa" },
      { label: "Interprovincial Movers Ottawa", href: "/interprovincial-movers-ottawa" },
      { label: "International Movers Ottawa", href: "/international-movers-ottawa" },
      { label: "Moving from Ottawa to Toronto", href: "/moving-from-ottawa-to-toronto" },
      { label: "Moving from Ottawa to Vancouver", href: "/moving-from-ottawa-to-vancouver" },
      { label: "Moving from Ottawa to Calgary", href: "/moving-from-ottawa-to-calgary" },
      { label: "Moving from Ottawa to Edmonton", href: "/moving-from-ottawa-to-edmonton" },
      { label: "Moving from Ottawa to Winnipeg", href: "/moving-from-ottawa-to-winnipeg" },
      { label: "Moving from Ottawa to Hamilton", href: "/moving-from-ottawa-to-hamilton" },
      { label: "Moving from Ottawa to Mississauga", href: "/moving-from-ottawa-to-mississauga" },
      { label: "Moving from Ottawa to London Ontario", href: "/moving-from-ottawa-to-london-ontario" },
      { label: "Moving Ottawa to Kingston", href: "/moving-ottawa-to-kingston" },
      { label: "Moving Ottawa to Brockville", href: "/moving-ottawa-to-brockville" },
      { label: "Ontario to BC Movers", href: "/moving-from-ontario-to-bc" },
      { label: "Ontario to Alberta Movers", href: "/moving-from-ontario-to-alberta" },
      { label: "Ontario to Quebec Movers", href: "/moving-from-ontario-to-quebec" },
    ],
  },
  {
    icon: Globe,
    title: "Long Distance — Moving to Ottawa",
    links: [
      { label: "Toronto to Ottawa Movers", href: "/moving-to-ottawa-from-toronto" },
      { label: "Vancouver to Ottawa Movers", href: "/moving-to-ottawa-from-vancouver" },
      { label: "Calgary to Ottawa Movers", href: "/moving-to-ottawa-from-calgary" },
      { label: "Edmonton to Ottawa Movers", href: "/moving-to-ottawa-from-edmonton" },
      { label: "Winnipeg to Ottawa Movers", href: "/moving-to-ottawa-from-winnipeg" },
      { label: "Montreal to Ottawa Movers", href: "/moving-from-montreal-to-ottawa" },
      { label: "Hamilton to Ottawa Movers", href: "/moving-from-hamilton-to-ottawa" },
      { label: "Moving to Ottawa from Toronto", href: "/moving-to-ottawa-from-toronto" },
    ],
  },
  {
    icon: Globe,
    title: "Within-Ottawa Routes",
    links: [
      { label: "Kanata to Barrhaven Movers", href: "/moving-from-kanata-to-barrhaven" },
      { label: "Orleans to Kanata Movers", href: "/moving-from-orleans-to-kanata" },
      { label: "Nepean to Gloucester Movers", href: "/moving-from-nepean-to-gloucester" },
    ],
  },
  {
    icon: BookOpen,
    title: "Moving Guides & Resources",
    links: [
      { label: "How Much Does Moving Cost Ottawa?", href: "/how-much-does-moving-cost-ottawa" },
      { label: "How to Choose a Moving Company Ottawa", href: "/how-to-choose-a-moving-company-ottawa" },
      { label: "Ottawa Moving Checklist", href: "/ottawa-moving-checklist" },
      { label: "Office Moving Checklist Ottawa", href: "/office-moving-checklist-ottawa" },
      { label: "Moving Tips Ottawa", href: "/moving-tips-ottawa" },
      { label: "Moving in Winter Ottawa", href: "/moving-in-winter-ottawa" },
      { label: "Moving with Pets Ottawa", href: "/moving-with-pets-ottawa" },
      { label: "Moving with Children Ottawa", href: "/moving-with-children-ottawa" },
      { label: "Preparing Appliances for Moving Ottawa", href: "/preparing-appliances-for-moving-ottawa" },
      { label: "Moving Boxes & Packing Supplies Ottawa", href: "/moving-boxes-packing-supplies-ottawa" },
      { label: "Local Ottawa Moving Rates", href: "/local-ottawa-moving-rates" },
      { label: "Moving Quotes Ottawa", href: "/moving-quotes-ottawa" },
      { label: "Ottawa Neighbourhoods Guide", href: "/ottawa-neighbourhoods-guide" },
      { label: "Ottawa Contractors Guide", href: "/ottawa-contractors" },
      { label: "Moving Tips Blog", href: "/blog" },
      { label: "Moving Cost Calculator", href: "/calculator" },
    ],
  },
];

export default function Sitemap() {
  const totalLinks = SECTIONS.reduce((acc, s) => acc + s.links.length, 0);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Site Index & Sitemap | Prestige Moving Ottawa | All Pages</title>
        <meta name="description" content="Complete site index for Prestige Moving Ottawa — browse all moving service pages, Ottawa neighbourhood guides, long-distance routes, and resources. 200+ pages indexed." />
        <link rel="canonical" href="https://prestigemoving.ca/sitemap" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <SharedNavigation />

      {/* Header */}
      <section className="bg-[#1A2332] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-3">
            Prestige Moving Ottawa — <span className="text-[#C5A572]">Full Site Index</span>
          </h1>
          <p className="text-white/70 text-lg">
            {totalLinks}+ pages covering every Ottawa neighbourhood, moving service, long-distance route, and resource. Use this index to find exactly what you need.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Quick Jump */}
        <div className="mb-12 p-6 bg-gray-50 border border-gray-200 rounded-xl">
          <h2 className="font-bold text-[#1A2332] mb-4">Jump to Section</h2>
          <div className="flex flex-wrap gap-3">
            {SECTIONS.map(s => (
              <a
                key={s.title}
                href={`#${s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="text-sm text-[#1A2332] border border-gray-300 rounded-full px-3 py-1 hover:border-[#C5A572] hover:text-[#C5A572] transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Sections grid */}
        <div className="columns-1 md:columns-2 xl:columns-3 gap-10 space-y-10">
          {SECTIONS.map(section => {
            const Icon = section.icon;
            const anchorId = section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <div key={section.title} id={anchorId} className="break-inside-avoid mb-10">
                <h2 className={SECTION_STYLE}>
                  <Icon className="h-5 w-5 text-[#C5A572]" />
                  {section.title}
                </h2>
                <div className="w-12 h-0.5 bg-[#C5A572] mb-4 rounded-full" />
                <ul className="space-y-0.5">
                  {section.links.map(link => (
                    <li key={link.href}>
                      <Link href={link.href} className={LINK_STYLE}>
                        <span className="flex items-center gap-1.5">
                          <ArrowRight className="h-3 w-3 text-[#C5A572]/50 shrink-0" />
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* External Links */}
        <div className="mt-16 p-8 bg-[#1A2332] rounded-xl">
          <h2 className="text-xl font-black text-white mb-2 flex items-center gap-2">
            <Globe className="h-5 w-5 text-[#C5A572]" />
            Official External Resources
          </h2>
          <p className="text-white/50 text-sm mb-6">Authoritative third-party links for Ottawa residents preparing to move.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "City of Ottawa", desc: "Official city services, parking permits, utilities", href: "https://ottawa.ca" },
              { label: "ServiceOntario", desc: "Change of address, driver's licence, health card", href: "https://www.ontario.ca/page/serviceontario" },
              { label: "Canada Post — Mail Forwarding", desc: "Redirect your mail to your new address", href: "https://www.canadapost-postescanada.ca/cpc/en/personal/receiving/manage-mail/mail-forwarding.page" },
              { label: "WSIB Ontario", desc: "Worker safety & insurance — verifying mover credentials", href: "https://www.wsib.ca" },
              { label: "Better Business Bureau Ottawa", desc: "Verify business credentials and read reviews", href: "https://www.bbb.org/ca/on/ottawa" },
              { label: "Hydro Ottawa", desc: "Transfer or set up electricity service", href: "https://www.hydroottawa.com" },
              { label: "CMHC", desc: "Canada Mortgage & Housing Corporation resources", href: "https://www.cmhc-schl.gc.ca" },
              { label: "Enbridge Gas Ontario", desc: "Transfer or set up natural gas service", href: "https://www.enbridgegas.com" },
            ].map(r => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 border border-white/10 rounded-lg p-4 hover:border-[#C5A572]/50 transition-colors"
              >
                <div className="font-semibold text-white text-sm mb-1">{r.label}</div>
                <div className="text-white/40 text-xs leading-relaxed">{r.desc}</div>
              </a>
            ))}
          </div>
        </div>

      </div>

      <SharedFooter />
    </div>
  );
}
