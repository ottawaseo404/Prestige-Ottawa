import { CommercialMoversTemplate, CommercialPageData } from "@/components/commercial-movers-template";

const data: CommercialPageData = {
  name: "Riverside South",
  slug: "riverside-south",
  seoTitle: "Commercial Movers in Riverside South Ottawa | Office Moving | Prestige Moving",
  seoDescription: "Expert commercial movers in Riverside South Ottawa. Prestige Moving serves businesses in Riverside South, Findlay Creek, and south Ottawa's growing commercial corridors. WSIB certified. Call (613) 600-4000.",
  keywords: "commercial movers Riverside South Ottawa, office movers Riverside South, business movers Riverside South Ottawa, Findlay Creek commercial movers, south Ottawa office movers",
  heroTagline: "Riverside South's growing commercial sector deserves a moving partner that keeps pace with the neighbourhood's momentum.",
  businessCount: "200+ growing businesses",
  mainIndustries: "Retail, healthcare, professional services",
  character: "Fast-growing south Ottawa commercial hub",
  officeTypes: "Strip plazas, medical clinics, professional offices",
  distanceFromCore: "~20 km south",
  schemaAreaServed: ["Riverside South, Ottawa", "Findlay Creek", "Limebank Road", "Earl Armstrong Road", "Leitrim", "Barrhaven South"],
  subAreas: [
    { name: "Limebank Road Commercial Corridor", businessType: "Retail & professional", detail: "Riverside South's primary and rapidly expanding commercial strip. Strip plazas hosting national and local retail, restaurants, medical clinics, dental offices, and professional services. Good truck access and surface parking." },
    { name: "Earl Armstrong Business Strip", businessType: "Mixed retail & services", detail: "Secondary commercial corridor serving established Riverside South residential areas. A mix of independent service businesses, pharmacies, and community services." },
    { name: "Findlay Creek Commercial", businessType: "Neighbourhood retail", detail: "Newer commercial nodes serving the Findlay Creek residential community. Smaller strip plazas and individual commercial units with easy access for commercial vehicles." },
    { name: "River Road Professional", businessType: "Professional services", detail: "Some professional service businesses along the River Road corridor serving the Riverside South community and Manotick. Good vehicle access." },
  ],
  aboutParagraphs: [
    "Riverside South's commercial sector is growing in direct proportion to its residential population — which has nearly doubled in the past decade. As thousands of new families settle in the community, commercial demand follows: medical clinics, dental offices, pharmacies, restaurants, personal service businesses, and professional offices have been opening at a steady pace along Limebank Road and Earl Armstrong Road. Many of these businesses are opening in brand-new commercial spaces as part of mixed-use developments, which means first-time fit-up moves with new commercial fixtures, furniture systems, and technology infrastructure.",
    "For new businesses opening in Riverside South, Prestige Moving offers a commercial fit-up service that goes beyond a standard office move. We coordinate the delivery and placement of new commercial furniture, fixture assembly, equipment installation, and space configuration — all in a single, organized move-in process that gets your business operational faster. This is particularly valuable for medical clinics, dental offices, and professional practices opening their first Riverside South location.",
    "Riverside South's distance from Ottawa's core means that logistics efficiency is especially important for commercial moves in the area. Our crew's familiarity with south Ottawa's road network and the Riverside South community's internal street layout ensures that commercial moves are completed within planned timelines, without the route delays and access confusion that can affect crews unfamiliar with the area.",
  ],
  priceRange: "$900 – $4,500+",
  priceNote: "Typical Riverside South commercial move",
  faqs: [
    { q: "How much does a commercial move in Riverside South cost?", a: "Riverside South commercial moves range from $900 for a small service business to $4,500+ for a larger clinic or office. We provide a written quote after a site assessment." },
    { q: "Do you help businesses moving into new commercial spaces in Riverside South?", a: "Yes. We offer a complete fit-up moving service for new commercial locations — furniture delivery and placement, fixture assembly, technology setup coordination, and space configuration." },
    { q: "Can you move a medical clinic or dental office in Riverside South?", a: "Absolutely. Medical and dental office moves are common in Riverside South's growing commercial areas. We handle all clinical furniture, equipment, and patient record logistics." },
    { q: "Do you offer after-hours commercial moves in Riverside South?", a: "Yes. Evening and weekend scheduling is available to minimize disruption to your operations." },
    { q: "Are you familiar with Riverside South's commercial buildings and access?", a: "Yes. We've worked throughout Limebank Road, Earl Armstrong, and Findlay Creek commercial areas and know the access logistics for all major commercial strips." },
    { q: "Are your Riverside South commercial movers insured?", a: "Yes — commercial liability, WSIB certified, background-checked crew." },
  ],
  relatedAreas: [
    { name: "Barrhaven", slug: "barrhaven" },
    { name: "Nepean", slug: "nepean" },
    { name: "Manotick", slug: "manotick" },
    { name: "Gloucester", slug: "gloucester" },
    { name: "Kanata", slug: "kanata" },
    { name: "Orleans", slug: "orleans" },
  ],
};

export default function CommercialMoversRiversideSouth() {
  return <CommercialMoversTemplate data={data} />;
}
