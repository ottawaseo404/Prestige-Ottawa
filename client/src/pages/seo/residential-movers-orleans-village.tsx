import { ResidentialMoversTemplate, NeighbourhoodPageData } from "@/components/residential-movers-template";

const data: NeighbourhoodPageData = {
  name: "Orleans Village",
  slug: "orleans-village",
  seoTitle: "Residential Movers in Orleans Village Ottawa | 5-Star Rated | Prestige Moving",
  seoDescription: "Top-rated residential movers in Orleans Village Ottawa. Prestige Moving serves all Orleans Village communities — Chapel Hill, Queenswood Heights, Cardinal Creek, and more. Bilingual service available. Call (613) 600-4000.",
  keywords: "residential movers Orleans Village Ottawa, movers Orleans Village, moving company Orleans Village Ottawa, déménageurs Orleans Ottawa, bilingual movers Orleans Ottawa",
  heroTagline: "Orleans Village's diverse, bilingual community deserves a moving partner who shows up prepared — for any home, any language, any timeline.",
  population: "~120,000",
  dwellingType: "Detached, townhomes & new builds",
  character: "Bilingual, multicultural, rapidly growing",
  avgHomeSize: "3–4 bedrooms",
  distanceFromCore: "~20 km east",
  schemaAreaServed: ["Orleans, Ottawa", "Orleans Village", "Chapel Hill", "Queenswood Heights", "Cardinal Creek", "Avalon", "Fallingbrook", "Convent Glen"],
  subAreas: [
    { name: "Chapel Hill", detail: "One of Orleans Village's most established communities. Large 4-5 bedroom detached homes with double garages. Excellent truck access on wide residential streets.", streets: "Key streets: Trim Road, Meadowbreeze Drive, Ploughman's Circle" },
    { name: "Queenswood Heights", detail: "Established Orleans neighbourhood with a mix of 1980s–90s bungalows and two-storey homes. Good access, mature trees, quiet streets.", streets: "Key streets: Queenswood Drive, Jeanne d'Arc Boulevard, Tenth Line Road" },
    { name: "Cardinal Creek & Avalon", detail: "Newer, actively developing communities in northeast Orleans. Brand-new construction, generous lot sizes, and wide streets designed for modern vehicle access.", streets: "Key streets: Tenth Line Road, Brian Good Avenue, Trim Road" },
    { name: "Fallingbrook", detail: "Active family community with well-maintained detached homes and townhouses. Good access throughout. Close to St. Joseph Boulevard commercial strip.", streets: "Key streets: Fallingbrook Drive, Navan Road, St. Joseph Boulevard" },
    { name: "Convent Glen", detail: "One of Orleans' more established, mature neighbourhoods. A mix of older detached homes and smaller townhouses close to Place d'Orléans.", streets: "Key streets: Convent Glen Drive, St. Laurent Boulevard, Orléans Boulevard" },
    { name: "Innes Road Corridor", detail: "Growing corridor with new townhouse and condo developments alongside established residential streets. Key east Orleans transit and commercial spine.", streets: "Key streets: Innes Road, Renaud Road, Noggin's Corner" },
  ],
  aboutParagraphs: [
    "Orleans Village is the largest and most populous suburb in eastern Ottawa, home to approximately 120,000 residents and one of the fastest-growing communities in the National Capital Region. The area's defining characteristic is its bilingualism — a majority-francophone community that is increasingly multicultural, with significant immigrant populations from West and East Africa, the Middle East, and South Asia. Prestige Moving's team includes French-speaking crew members and we are comfortable conducting estimates, client communication, and moving day coordination in both official languages.",
    "The housing stock in Orleans reflects its growth history: from Convent Glen's mid-century bungalows and Queenswood Heights' 1980s detached homes to Chapel Hill's large executive properties and the brand-new construction underway in Cardinal Creek and Avalon. This diversity of home types across a large geographic area means that Orleans moves require genuine familiarity with the neighbourhood's layout — something Prestige Moving has built through hundreds of completed jobs across every Orleans community.",
    "Orleans Village's distance from Ottawa's urban core makes local area expertise especially important when planning a move. Route planning, parking logistics, and sub-community familiarity all contribute to move-day efficiency. Our crews know Orleans' street grid, community boundaries, and access patterns well — reducing delays and ensuring that even distant Orleans moves are completed within a predictable, reasonable timeframe.",
  ],
  priceRange: "$550 – $1,800",
  priceNote: "Typical Orleans Village residential move",
  faqs: [
    { q: "How much do residential movers in Orleans Village cost?", a: "Orleans Village moves range from $550 for a smaller townhouse to $1,800+ for a large 5-bedroom home with full packing. Most 3–4 bedroom family home moves fall in the $800–$1,400 range. All quotes are written with no hidden fees." },
    { q: "Do you offer bilingual moving services in Orleans?", a: "Oui. Our team includes French-speaking crew members. Estimates, booking, and moving day communication can all be conducted in French or English according to your preference." },
    { q: "Do you serve all Orleans Village communities?", a: "Yes — Chapel Hill, Queenswood Heights, Cardinal Creek, Avalon, Fallingbrook, Convent Glen, Innes Road, and every other Orleans community. We also serve adjacent areas including Gloucester, Vars, Cumberland, and Rockland." },
    { q: "Are you experienced with new builds in Cardinal Creek and Avalon?", a: "Yes. New build moves are very common in northeast Orleans. Our crew uses full floor protection and surface guards as standard to protect brand-new finishes." },
    { q: "Do you offer packing services for Orleans Village moves?", a: "Yes — full and partial packing available. Many Orleans families book packing services so they can continue their school and work routines without interruption leading up to moving day." },
    { q: "How far in advance should I book movers in Orleans Village?", a: "3–4 weeks ahead for summer moves. End-of-month dates fill up fast. Call early and we'll lock in your preferred date." },
  ],
  relatedAreas: [
    { name: "Orleans", slug: "orleans" },
    { name: "Gloucester", slug: "gloucester" },
    { name: "Beacon Hill", slug: "beacon-hill" },
    { name: "Nepean", slug: "nepean" },
    { name: "Kanata", slug: "kanata" },
    { name: "Barrhaven", slug: "barrhaven" },
  ],
};

export default function ResidentialMoversOrleansVillage() {
  return <ResidentialMoversTemplate data={data} />;
}
