import { ResidentialMoversTemplate, NeighbourhoodPageData } from "@/components/residential-movers-template";

const data: NeighbourhoodPageData = {
  name: "Riverside South",
  slug: "riverside-south",
  seoTitle: "Residential Movers in Riverside South Ottawa | 5-Star Rated | Prestige Moving",
  seoDescription: "Top-rated residential movers in Riverside South Ottawa. Prestige Moving specializes in new-build and growing-family moves in Riverside South and Barrhaven South. 400+ five-star reviews. Call (613) 600-4000.",
  keywords: "residential movers Riverside South Ottawa, movers Riverside South, moving company Riverside South Ottawa, house movers Riverside South, Barrhaven South movers Ottawa",
  heroTagline: "Riverside South is one of Ottawa's fastest-growing communities — and Prestige Moving has been there for every new family arriving, every new home completed.",
  population: "~25,000+",
  dwellingType: "New builds, detached & townhomes",
  character: "Fast-growing riverside suburb, young families",
  avgHomeSize: "3–4 bedrooms",
  distanceFromCore: "~20 km south",
  schemaAreaServed: ["Riverside South, Ottawa", "Findlay Creek", "Leitrim", "Cedardale", "Earl Armstrong Road", "River Road"],
  subAreas: [
    { name: "Riverside South Core", detail: "The established section of Riverside South, with streets developed in the 2000s and 2010s. Detached homes, semi-detached, and townhouses on curving residential streets. Wide, accessible roads ideal for moving trucks.", streets: "Key streets: Earl Armstrong Road, Spratt Road, Limebank Road" },
    { name: "Findlay Creek", detail: "One of Ottawa's most actively developing communities, bordering Riverside South to the east. New construction throughout. Generous lots, wide streets, and modern homes with large garages.", streets: "Key streets: Kelly Farm Drive, Findlay Creek Drive, Borrisokane Road" },
    { name: "Leitrim", detail: "Lower-density semi-rural residential area on the southern edge of Riverside South. Larger lots, country-style properties, and newer estate builds. Very good truck access.", streets: "Key streets: Leitrim Road, Albion Road, River Road" },
    { name: "Cedardale", detail: "Newer townhouse and detached home community within the broader Riverside South development zone. Close to the planned LRT extension.", streets: "Key streets: Cedardale Drive, Cobblehill Drive, Grisdale Road" },
    { name: "River Road Corridor", detail: "Properties along the Rideau River waterfront, offering some of Riverside South's most scenic and premium real estate. Large lots, executive homes, and some rural estate properties.", streets: "Key streets: River Road, Manotick Station Road" },
  ],
  aboutParagraphs: [
    "Riverside South is one of Ottawa's most significant growth stories of the past decade. Located south of the Rideau River and bordered by the Greenbelt to the north and east, this community has expanded dramatically since the 2010s, driven by new housing developments that attract young families, first-time homeowners, and move-up buyers seeking modern construction and larger lot sizes than the inner city can offer. The community's population has nearly doubled in less than ten years and continues to grow as new phases of development are completed along the Limebank Road corridor and beyond.",
    "The housing stock in Riverside South is predominantly new or recent construction — detached homes, semi-detached, and townhouses built to modern standards, with larger rooms, open floor plans, and contemporary features. These homes often have large primary bedrooms with oversized furniture, home offices with standing desks and monitor setups, and fully finished basements with home gyms and entertainment systems. Prestige Moving's crews are well-versed in the logistics of new-build moves and take particular care to protect freshly painted walls, new flooring, and pristine door frames from any damage during the move.",
    "The LRT extension planned to connect Riverside South to Ottawa's transit network represents the next chapter in the community's growth. As the neighbourhood becomes increasingly accessible, demand for professional moving services within and into Riverside South continues to rise. Prestige Moving has established deep familiarity with every street and subdivision in the community, and our crews know the fastest routes, the optimal truck positioning, and the building logistics for every type of Riverside South property.",
  ],
  priceRange: "$550 – $1,800",
  priceNote: "Typical Riverside South residential move",
  faqs: [
    { q: "How much do residential movers in Riverside South cost?", a: "Riverside South moves range from $550 for a smaller townhouse to $1,800+ for a large 4-bedroom detached home with full packing. Most 3-bedroom moves in Riverside South fall in the $750–$1,300 range. We provide written quotes with no hidden fees." },
    { q: "Do you serve all Riverside South communities?", a: "Yes — all of Riverside South including Findlay Creek, Leitrim, Cedardale, and the River Road corridor. We also serve adjacent communities like Barrhaven, Manotick, and Greely." },
    { q: "Are you experienced with new-build homes in Riverside South?", a: "Yes. New builds are our most common Riverside South job type. We use full floor protection, door frame guards, corner protectors, and furniture blankets as standard on every move to protect your brand-new finishes." },
    { q: "Can you move large furniture into Riverside South new builds?", a: "Absolutely. We handle oversized sofas, king-size beds, large wardrobes, and home gym equipment with the right equipment for every piece. Our crew plans furniture placement room by room before moving anything in." },
    { q: "Do you offer packing services in Riverside South?", a: "Yes. Full and partial packing is available for all Riverside South moves. Many families moving into new builds book full packing to arrive at a perfectly organized new home." },
    { q: "How far in advance should I book movers in Riverside South?", a: "3–4 weeks ahead for summer and end-of-month dates. New build completions sometimes come with short notice — call us and we'll do our best to accommodate your closing date." },
  ],
  relatedAreas: [
    { name: "Barrhaven", slug: "barrhaven" },
    { name: "Manotick", slug: "manotick" },
    { name: "Nepean", slug: "nepean" },
    { name: "Gloucester", slug: "gloucester" },
    { name: "Kanata", slug: "kanata" },
    { name: "Orleans", slug: "orleans" },
  ],
};

export default function ResidentialMoversRiversideSouth() {
  return <ResidentialMoversTemplate data={data} />;
}
