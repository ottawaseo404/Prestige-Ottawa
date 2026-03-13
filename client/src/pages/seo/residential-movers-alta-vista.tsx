import { ResidentialMoversTemplate, NeighbourhoodPageData } from "@/components/residential-movers-template";

const data: NeighbourhoodPageData = {
  name: "Alta Vista",
  slug: "alta-vista",
  seoTitle: "Residential Movers in Alta Vista Ottawa | 5-Star Rated | Prestige Moving",
  seoDescription: "Top-rated residential movers in Alta Vista Ottawa. Prestige Moving serves all Alta Vista communities — Heron Park, Faircrest Heights, Riverview Park, and more. 400+ five-star reviews, WSIB certified. Call (613) 600-4000.",
  keywords: "residential movers Alta Vista Ottawa, movers Alta Vista, moving company Alta Vista Ottawa, house movers Alta Vista, local movers Alta Vista Ottawa",
  heroTagline: "Alta Vista's established neighbourhoods, mature trees, and classic Ottawa bungalows call for a moving crew that knows how to protect what matters most.",
  population: "~45,000",
  dwellingType: "Bungalows & split-levels",
  character: "Established family suburb, hospital district",
  avgHomeSize: "3 bedrooms",
  distanceFromCore: "~6 km southeast",
  schemaAreaServed: ["Alta Vista, Ottawa", "Heron Park", "Faircrest Heights", "Riverview Park", "Elmwood Acres", "Alta Vista Drive", "Walkley Road"],
  subAreas: [
    { name: "Heron Park", detail: "A quiet residential pocket just east of Billings Bridge. Bungalows, semi-detached homes, and townhouses on tree-lined streets. Tight street parking in some areas — we always bring a smaller lead truck when needed.", streets: "Key streets: Heron Road, McCarthy Road, Lorry Greenberg Drive" },
    { name: "Faircrest Heights", detail: "An upscale Alta Vista enclave with custom-built executive homes and large lots. Ample driveway space and wide streets make for smooth moving-day logistics.", streets: "Key streets: Faircrest Drive, Alta Vista Drive, Belmore Court" },
    { name: "Riverview Park", detail: "Family neighbourhood with a strong community feel. Mix of bungalows and two-storey homes, many with finished basements. Good truck access throughout.", streets: "Key streets: Riverview Road, Haig Drive, Mona Avenue" },
    { name: "Elmwood Acres", detail: "Quiet, mature residential area with generous lot sizes and mature trees. Classic Ottawa bungalows predominate. Parking generally good, with one-way streets on some blocks.", streets: "Key streets: Elmwood Avenue, Pleasant Park Road" },
    { name: "Alta Vista Drive Corridor", detail: "The commercial spine of the neighbourhood, with residential streets feeding off the main artery. Mix of older condos and detached homes in close proximity to the General Campus of The Ottawa Hospital.", streets: "Key streets: Alta Vista Drive, Billings Avenue, Thurston Drive" },
  ],
  aboutParagraphs: [
    "Alta Vista is one of Ottawa's most established inner-suburban communities, positioned just southeast of the city's core and centred around the General Campus of The Ottawa Hospital. The neighbourhood's roots trace back to post-war development in the 1950s and 1960s, giving Alta Vista its signature streetscape of well-maintained bungalows, side-splits, and two-storey homes on mature, treed lots. This architectural character means that many Alta Vista moves involve the particular logistics of bungalow-style homes: low entry points, finished basements with narrow stairwells, and ground-level living that simplifies some aspects of the move while adding complexity in others.",
    "The proximity to The Ottawa Hospital's General Campus gives Alta Vista a high concentration of healthcare professionals among its resident population — a demographic that understands the value of precision, reliability, and zero tolerance for preventable errors. Prestige Moving's approach to every Alta Vista move reflects that same standard. Every crew member is trained, background-checked, and equipped with the professional tools that protect both your belongings and your home's surfaces on moving day.",
    "Alta Vista's mature street tree canopy is a defining feature of the neighbourhood and a practical consideration for moving logistics. Large, overhanging trees on residential streets can limit truck access on certain blocks, and Prestige Moving always conducts a pre-move logistics review to ensure our vehicles are positioned optimally. Where street access is restricted, we use our extended equipment ramps to bridge the distance efficiently.",
  ],
  priceRange: "$465 – $1,600",
  priceNote: "Typical Alta Vista residential move",
  faqs: [
    { q: "How much do residential movers in Alta Vista cost?", a: "Alta Vista moves range from $465 for a small 1-bedroom to $1,600 for a large 4-bedroom home with full packing. Most standard 3-bedroom bungalow moves in Alta Vista fall in the $650–$1,100 range. We provide a written, itemized quote before every move." },
    { q: "Do you serve all Alta Vista neighbourhoods?", a: "Yes — every Alta Vista community including Heron Park, Faircrest Heights, Riverview Park, Elmwood Acres, and the Alta Vista Drive corridor. We also serve adjacent communities including Billings Bridge, Greenboro, Riverside Park, and Carlington." },
    { q: "Can you handle moves from Alta Vista bungalows with finished basements?", a: "Absolutely. Finished basements are one of the most common features in Alta Vista homes, and our crews are experienced with the narrow stairwells and low clearances typical of these spaces. We use furniture dollies, stair-climbers, and custom padding to protect both items and walls." },
    { q: "Do you offer packing services for Alta Vista homes?", a: "Yes. Full packing service covers every room using professional-grade double-wall boxes, packing paper, bubble wrap, and furniture blankets. Many Alta Vista residents — particularly those working at The Ottawa Hospital — value full packing to keep their move completely hands-off." },
    { q: "How far in advance should I book movers in Alta Vista?", a: "For summer moves (May–September), book 3–4 weeks ahead. Fall and winter moves can typically be booked 1–2 weeks in advance. End-of-month dates fill up quickly across Ottawa, so earlier is always better." },
    { q: "Are your Alta Vista movers insured?", a: "Yes. Prestige Moving carries $2M+ liability insurance and is WSIB certified. All crew members are background-checked and professionally trained." },
  ],
  relatedAreas: [
    { name: "Gloucester", slug: "gloucester" },
    { name: "Nepean", slug: "nepean" },
    { name: "Sandy Hill", slug: "sandy-hill" },
    { name: "Centretown", slug: "centretown" },
    { name: "Barrhaven", slug: "barrhaven" },
    { name: "Orleans", slug: "orleans" },
  ],
};

export default function ResidentialMoversAltaVista() {
  return <ResidentialMoversTemplate data={data} />;
}
