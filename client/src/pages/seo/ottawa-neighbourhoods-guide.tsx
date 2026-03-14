import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, MapPin, TruckIcon, Star, Building2 } from "lucide-react";

const NEIGHBOURHOODS = [
  {
    name: "Westboro",
    area: "West Ottawa",
    vibe: "Trendy, walkable, young professional",
    housing: "Mix of new condos, century homes, and semi-detached",
    moversLink: "/movers-in-westboro",
    highlight: "Wellington Street retail corridor, proximity to Ottawa River parkway",
  },
  {
    name: "Centretown",
    area: "Urban Core",
    vibe: "Dense, urban, government and professional",
    housing: "High-rise condos, heritage walk-ups, new luxury towers",
    moversLink: "/residential-movers-centretown",
    highlight: "Steps from Parliament Hill, Bank Street dining, Elgin Street nightlife",
  },
  {
    name: "The Glebe",
    area: "Central Ottawa",
    vibe: "Family-friendly, established, community-focused",
    housing: "Victorian and Edwardian brick homes, some condos",
    moversLink: "/residential-movers-the-glebe",
    highlight: "Bank Street village atmosphere, Lansdowne Park, Rideau Canal access",
  },
  {
    name: "Sandy Hill",
    area: "East Central",
    vibe: "Student and young professional, diverse",
    housing: "Victorian homes converted to apartments, newer condos",
    moversLink: "/movers-in-sandy-hill",
    highlight: "Adjacent to uOttawa campus, Strathcona Park, Rideau Street access",
  },
  {
    name: "Hintonburg",
    area: "West Ottawa",
    vibe: "Arts, eclectic, rapidly gentrifying",
    housing: "Older bungalows, new infill townhomes, converted live-work spaces",
    moversLink: "/movers-in-hintonburg",
    highlight: "Parkdale Market, Wellington West strip, creative community",
  },
  {
    name: "Kanata",
    area: "West Ottawa (Suburban)",
    vibe: "Tech hub, family suburban, master-planned",
    housing: "New builds, detached family homes, townhouses",
    moversLink: "/movers-in-kanata",
    highlight: "Kanata North tech park, Canadian Tire Centre, Stittsville proximity",
  },
  {
    name: "Barrhaven",
    area: "South Ottawa (Suburban)",
    vibe: "Family-focused, safe, master-planned community",
    housing: "New single-family detached, townhomes, some condos",
    moversLink: "/movers-in-barrhaven",
    highlight: "Barrhaven Town Centre, Strandherd Drive retail, quiet residential streets",
  },
  {
    name: "Orleans",
    area: "East Ottawa (Suburban)",
    vibe: "Bilingual family community, growing rapidly",
    housing: "Family homes, some high-density near Innes Road",
    moversLink: "/movers-in-orleans",
    highlight: "Francophone community culture, Place d'Orléans, Innes Road development",
  },
  {
    name: "Alta Vista",
    area: "Central East",
    vibe: "Established, quiet, mature trees",
    housing: "Bungalows, split-levels, older family homes",
    moversLink: "/movers-in-alta-vista",
    highlight: "Ottawa General Hospital proximity, mature neighbourhood character, transit access",
  },
  {
    name: "Nepean",
    area: "Southwest Ottawa",
    vibe: "Suburban, family, well-established",
    housing: "Mix of older detached homes and newer developments",
    moversLink: "/movers-in-nepean",
    highlight: "Merivale Road retail, Algonquin College, Centrepointe area",
  },
  {
    name: "Gloucester",
    area: "East Ottawa",
    vibe: "Diverse, suburban, mixed residential",
    housing: "Detached family homes, some condos, townhouses",
    moversLink: "/movers-in-gloucester",
    highlight: "Beacon Hill area, Gloucester Centre, St. Laurent Boulevard",
  },
  {
    name: "Manotick",
    area: "South Rural Ottawa",
    vibe: "Village charm, upscale rural, waterfront",
    housing: "Luxury homes, waterfront properties, village-centre heritage",
    moversLink: "/movers-in-manotick",
    highlight: "Rideau River waterfront, historic mill district, estate properties",
  },
  {
    name: "Stittsville",
    area: "West Ottawa (Rural Edge)",
    vibe: "Growing village, family-friendly, rural edge",
    housing: "Newer family homes, rural properties, some townhomes",
    moversLink: "/movers-in-stittsville",
    highlight: "Rapid growth community, Hazeldean Road retail, rural Ottawa character",
  },
  {
    name: "Rockcliffe Park",
    area: "East Ottawa (Prestige)",
    vibe: "Diplomatic, affluent, architectural heritage",
    housing: "Luxury detached homes, heritage estates, embassy residences",
    moversLink: "/movers-in-rockcliffe-park",
    highlight: "Embassy row, Acacia Park, oldest money in Ottawa",
  },
  {
    name: "Riverside South",
    area: "South Ottawa (New)",
    vibe: "Brand new development, young families",
    housing: "New builds exclusively — detached, semi, townhome",
    moversLink: "/movers-in-riverside-south",
    highlight: "LRT Phase 2 access, Rideau River greenway, Brand new infrastructure",
  },
];

export default function OttawaNeighbourhoodsGuide() {
  return (
    <>
      <Helmet>
        <title>Ottawa Neighbourhoods Guide 2026 | Best Areas to Live in Ottawa | Prestige Moving</title>
        <meta name="description" content="Complete guide to Ottawa's best neighbourhoods in 2026. Compare Westboro, Kanata, Barrhaven, Centretown, Glebe, Hintonburg, and every major Ottawa area — housing, vibe, and moving help." />
        <meta name="keywords" content="Ottawa neighbourhoods guide, best neighbourhoods Ottawa, Ottawa neighbourhoods 2026, where to live Ottawa, Ottawa areas guide, Ottawa community guide" />
        <link rel="canonical" href="https://prestigemoving.ca/ottawa-neighbourhoods-guide" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Ottawa Neighbourhoods Guide 2026", "publisher": { "@type": "Organization", "name": "Prestige Moving Ottawa" }, "url": "https://prestigemoving.ca/ottawa-neighbourhoods-guide" })}</script>
      </Helmet>
      <SharedNavigation />

      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <MapPin className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Neighbourhood Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Ottawa Neighbourhoods Guide<br className="hidden md:block" /> 2026 — Where to Live in Ottawa</h1>
            <p className="text-white/70 text-lg mb-8">Moving to Ottawa or relocating within the city? This guide covers 15 of Ottawa's key neighbourhoods — housing type, community vibe, highlights, and direct links to neighbourhood-specific movers who know each area.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/moving-quotes-ottawa"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Moving Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Choosing the Right Ottawa Neighbourhood</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Ottawa is a city of distinctly different neighbourhoods, each with its own character, housing stock, and community culture. Unlike many North American cities where suburbs blur together, Ottawa's neighbourhoods have maintained strong individual identities — a product of the city's history as a collection of distinct communities that were gradually absorbed into the capital region.</p>
            <p>The city divides broadly into four zones: the urban core (Centretown, Sandy Hill, The Glebe, Westboro, Hintonburg), the inner suburbs (Kanata, Barrhaven, Nepean, Orleans, Gloucester, Alta Vista), the outer communities (Stittsville, Manotick, Riverside South), and the prestige enclaves (Rockcliffe Park, Manor Park). Each zone has different housing price ranges, transit access, school options, and lifestyle profiles.</p>
            <p>If you're moving to Ottawa from another city, the most common question is: where do I start? The answer depends on your priorities — walkability vs. space, urban energy vs. quiet streets, new construction vs. character homes. This guide gives you a practical overview of each major neighbourhood to help narrow your search.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-3 text-center">Ottawa Neighbourhood Profiles</h2>
          <p className="text-gray-500 text-center mb-10 text-sm">Click any neighbourhood for dedicated movers who know the area's buildings, streets, and logistics.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {NEIGHBOURHOODS.map(({ name, area, vibe, housing, moversLink, highlight }) => (
              <div key={name} className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-[#1A2332] text-base">{name}</h3>
                    <span className="text-xs text-[#C5A572] font-medium">{area}</span>
                  </div>
                  <MapPin className="h-4 w-4 text-gray-300 shrink-0 mt-1" />
                </div>
                <p className="text-gray-500 text-xs font-medium mb-1">Vibe</p>
                <p className="text-gray-700 text-sm mb-3">{vibe}</p>
                <p className="text-gray-500 text-xs font-medium mb-1">Housing</p>
                <p className="text-gray-700 text-sm mb-3">{housing}</p>
                <p className="text-gray-500 text-xs font-medium mb-1">Highlight</p>
                <p className="text-gray-700 text-sm mb-4 flex-1">{highlight}</p>
                <Link href={moversLink} className="mt-auto">
                  <Button variant="outline" className="w-full text-sm border-[#C5A572] text-[#C5A572]">
                    <TruckIcon className="h-3.5 w-3.5 mr-2" /> Movers in {name}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Moving Between Ottawa Neighbourhoods</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Local Ottawa moves — from one neighbourhood to another — are Prestige Moving's core business. Whether you're upgrading from a Centretown apartment to a Westboro house, downsizing from a Kanata family home to a Sandy Hill condo, or making the jump from Orleans to The Glebe, we've done that exact route dozens of times and understand the logistics of both addresses.</p>
            <p>Every local Ottawa move is covered by our Premium package starting at $155/hr (2 movers + truck, 3-hour minimum). For larger homes or moves with multiple stops, our Deluxe ($195/hr, 3 movers) and Diamond ($315/hr, 4 movers + 2 trucks) packages provide the crew and capacity for complex moves.</p>
            <p>Not sure which neighbourhood is right for you? The resources below can help with your Ottawa relocation research:</p>
            <ul className="list-disc list-inside space-y-1 text-sm pl-2">
              <li><Link href="/moving-to-ottawa-from-toronto" className="text-[#C5A572] hover:underline">Moving to Ottawa from Toronto</Link></li>
              <li><Link href="/how-much-does-moving-cost-ottawa" className="text-[#C5A572] hover:underline">Ottawa moving cost guide 2026</Link></li>
              <li><Link href="/ottawa-moving-checklist" className="text-[#C5A572] hover:underline">Ottawa moving checklist</Link></li>
              <li><Link href="/moving-in-winter-ottawa" className="text-[#C5A572] hover:underline">Moving in winter Ottawa guide</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Moving to or Within Ottawa?</h2>
          <p className="text-white/65 mb-8">Prestige Moving serves every Ottawa neighbourhood. Written quote · 5.0★ rated · WSIB certified</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
