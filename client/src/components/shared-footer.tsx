import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight, TruckIcon, DollarSign, BadgeCheck, Shield, Award } from "lucide-react";
import logoUrl from "@assets/originalonglogo_1763689606978.png";
import teamPhotoUrl from "@assets/prestige_moving_1772836136864.jpg";
import { WorkSafeBadge } from "@/components/worksafe-badge";

const LONG_DISTANCE_ROUTES = [
  { from: "Ottawa", to: "Montreal", distance: "196 km · ~2 hrs", from_price: "From $900", href: "/ottawa-to-montreal-movers", highlight: "Most Popular" },
  { from: "Ottawa", to: "Toronto", distance: "450 km · ~4.5 hrs", from_price: "From $1,200", href: "/ottawa-to-toronto-movers", highlight: null },
  { from: "Ottawa", to: "Calgary", distance: "3,300 km · 5–12 days", from_price: "From $2,500", href: "/ottawa-to-calgary-movers", highlight: "Cross-Country" },
  { from: "Ottawa", to: "New Brunswick", distance: "~1,000 km · ~10 hrs", from_price: "From $1,500", href: "/ottawa-to-new-brunswick-movers", highlight: null },
  { from: "Ottawa", to: "Halifax", distance: "~1,500 km · ~15 hrs", from_price: "From $1,800", href: "/ottawa-to-halifax-movers", highlight: null },
  { from: "Ottawa", to: "Nova Scotia", distance: "1,500–1,800 km", from_price: "From $1,800", href: "/ottawa-to-nova-scotia-movers", highlight: null },
  { from: "Ottawa", to: "Vancouver", distance: "4,600 km · 7–14 days", from_price: "From $3,000", href: "/ottawa-to-vancouver-movers", highlight: "Longest Route" },
];

export function SharedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Long Distance Routes Feature Strip */}
      <div className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-3">
                <TruckIcon className="h-4 w-4 text-[#C5A572]" />
                <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Long-Distance Moving Routes</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Moving Out of Ottawa?</h2>
              <p className="text-white/55 mt-1 text-sm">Licensed interprovincial movers. Transparent pricing. No surprises.</p>
            </div>
            <Link href="/how-much-does-moving-cost-ottawa">
              <div className="flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/25 rounded-xl px-5 py-3 hover:bg-[#C5A572]/20 transition-colors group cursor-pointer">
                <DollarSign className="h-5 w-5 text-[#C5A572]" />
                <div>
                  <div className="text-white font-semibold text-sm">Moving Cost Guide</div>
                  <div className="text-white/50 text-xs">2026 Ottawa price breakdown</div>
                </div>
                <ArrowRight className="h-4 w-4 text-[#C5A572] ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {LONG_DISTANCE_ROUTES.map((route) => (
              <Link key={route.href} href={route.href}>
                <div className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#C5A572]/40 transition-all duration-200 cursor-pointer">
                  {route.highlight && (
                    <span className="absolute top-4 right-4 bg-[#C5A572] text-[#1A2332] text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                      {route.highlight}
                    </span>
                  )}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="text-center">
                      <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center mb-1">
                        <MapPin className="h-4 w-4 text-[#C5A572]" />
                      </div>
                      <div className="text-white text-xs font-semibold">{route.from}</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex items-center gap-1">
                        <div className="flex-1 border-t border-dashed border-white/20" />
                        <TruckIcon className="h-4 w-4 text-white/30 shrink-0" />
                        <div className="flex-1 border-t border-dashed border-white/20" />
                      </div>
                      <span className="text-white/40 text-[10px] text-center leading-tight">{route.distance}</span>
                    </div>
                    <div className="text-center">
                      <div className="w-9 h-9 rounded-full bg-[#C5A572]/15 flex items-center justify-center mb-1">
                        <MapPin className="h-4 w-4 text-[#C5A572]" />
                      </div>
                      <div className="text-white text-xs font-semibold">{route.to}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[#C5A572] font-bold text-lg">{route.from_price}</div>
                      <div className="text-white/40 text-xs">all-in · no hidden fees</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#C5A572]/15 flex items-center justify-center group-hover:bg-[#C5A572]/30 transition-colors">
                      <ArrowRight className="h-4 w-4 text-[#C5A572] group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── CREW PHOTO BANNER ── */}
      <div className="bg-[#0d1620]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Photo */}
            <div className="relative w-full lg:w-[520px] shrink-0 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={teamPhotoUrl}
                alt="Prestige Moving crew — professional, background-checked, and uniformed Ottawa movers"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Text side */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-4">
                <Award className="h-3.5 w-3.5 text-[#C5A572]" />
                <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Our People</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Our Crew — Your Move's Most Important Asset
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                Every Prestige mover is a direct employee — never a day labourer or subcontractor. We hire for character first, train for skill, and hold our crew to the highest standard on every single move in Ottawa.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: BadgeCheck, label: "Background-checked" },
                  { icon: Award, label: "Professionally trained" },
                  { icon: TruckIcon, label: "Uniformed" },
                  { icon: Shield, label: "WSIB certified" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-white/6 border border-white/10 rounded-lg px-3 py-2">
                    <Icon className="h-3.5 w-3.5 text-[#C5A572]" />
                    <span className="text-white/70 text-xs font-medium">{label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/book">
                  <Button className="bg-[#C5A572] text-[#1A2332] font-bold">
                    Book Our Crew <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:6136004000">
                  <Button variant="outline" className="text-white border-white/25 bg-white/5">
                    <Phone className="h-4 w-4 mr-2" /> (613) 600-4000
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#111c2a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Col 1 — Logo */}
            <div className="lg:col-span-1">
              <img src={logoUrl} alt="Prestige Moving" className="h-12 w-auto mb-6" />
              <p className="text-white/70 text-sm leading-relaxed">
                Ottawa movers trusted by 10,000+ families and businesses. Professional, fully insured residential and commercial moving services across Ottawa and the National Capital Region.
              </p>
              <div className="mt-6">
                <WorkSafeBadge size="lg" />
              </div>
            </div>

            {/* Col 2 — Services */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4">Ottawa Movers</h4>
              <div className="space-y-2.5 text-sm text-white/65">
                <Link href="/" className="block hover:text-[#C5A572] transition-colors font-semibold text-white/80">Ottawa Movers — Home</Link>
                <Link href="/ottawa-movers" className="block hover:text-[#C5A572] transition-colors">Movers Ottawa</Link>
                <Link href="/best-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Best Movers Ottawa</Link>
                <Link href="/moving-company-ottawa" className="block hover:text-[#C5A572] transition-colors">Moving Company Ottawa</Link>
                <Link href="/services/residential-moving" className="block hover:text-[#C5A572] transition-colors">Residential Moving</Link>
                <Link href="/services/commercial-moving" className="block hover:text-[#C5A572] transition-colors">Commercial Moving</Link>
                <Link href="/services/long-distance-moving" className="block hover:text-[#C5A572] transition-colors">Long Distance Moving</Link>
                <Link href="/services/packing-services" className="block hover:text-[#C5A572] transition-colors">Packing Services</Link>
                <Link href="/services/storage-solutions" className="block hover:text-[#C5A572] transition-colors">Storage Solutions</Link>
                <Link href="/services/piano-moving" className="block hover:text-[#C5A572] transition-colors">Piano Moving</Link>
                <Link href="/services/senior-moving" className="block hover:text-[#C5A572] transition-colors">Senior Moving</Link>
                <Link href="/services/student-moving" className="block hover:text-[#C5A572] transition-colors">Student Moving</Link>
                <Link href="/services/antique-moving" className="block hover:text-[#C5A572] transition-colors">Antique Moving</Link>
                <Link href="/services/specialty-item-moving" className="block hover:text-[#C5A572] transition-colors">Specialty Items</Link>
                <Link href="/services/military-moving" className="block hover:text-[#C5A572] transition-colors">Military Moving</Link>
              </div>
            </div>

            {/* Col 3 — Long Distance + Resources */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4">Long Distance</h4>
              <div className="space-y-2.5 text-sm text-white/65">
                <Link href="/ottawa-to-montreal-movers" className="block hover:text-[#C5A572] transition-colors">Ottawa to Montreal</Link>
                <Link href="/ottawa-to-toronto-movers" className="block hover:text-[#C5A572] transition-colors">Ottawa to Toronto</Link>
                <Link href="/ottawa-to-calgary-movers" className="block hover:text-[#C5A572] transition-colors">Ottawa to Calgary</Link>
                <Link href="/ottawa-to-new-brunswick-movers" className="block hover:text-[#C5A572] transition-colors">Ottawa to New Brunswick</Link>
                <Link href="/ottawa-to-halifax-movers" className="block hover:text-[#C5A572] transition-colors">Ottawa to Halifax</Link>
                <Link href="/ottawa-to-nova-scotia-movers" className="block hover:text-[#C5A572] transition-colors">Ottawa to Nova Scotia</Link>
                <Link href="/ottawa-to-vancouver-movers" className="block hover:text-[#C5A572] transition-colors">Ottawa to Vancouver</Link>
                <Link href="/long-distance-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Long-Distance Movers</Link>
                <a href="https://ottawalongdistancemovers.com/" target="_blank" rel="noopener noreferrer" className="block text-[#C5A572]/80 hover:text-[#C5A572] transition-colors">Long Distance Movers Ottawa ↗</a>
              </div>

              <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4 mt-7">Resources</h4>
              <div className="space-y-2.5 text-sm text-white/65">
                <Link href="/about" className="block hover:text-[#C5A572] transition-colors font-semibold text-white/80">About Prestige Moving</Link>
                <Link href="/reviews" className="block hover:text-[#C5A572] transition-colors">Ottawa Movers Reviews — 5★</Link>
                <Link href="/residential-moving-guide-ottawa" className="block hover:text-[#C5A572] transition-colors">Residential Moving Guide 2026</Link>
                <Link href="/long-distance-moving-guide-canada" className="block hover:text-[#C5A572] transition-colors">Long Distance Moving Guide 2026</Link>
                <Link href="/moving-from-ottawa-to-sudbury" className="block hover:text-[#C5A572] transition-colors">Ottawa to Sudbury Movers</Link>
                <Link href="/moving-from-ottawa-to-thunder-bay" className="block hover:text-[#C5A572] transition-colors">Ottawa to Thunder Bay Movers</Link>
                <Link href="/moving-from-ottawa-to-saskatoon" className="block hover:text-[#C5A572] transition-colors">Ottawa to Saskatoon Movers</Link>
                <Link href="/how-much-does-moving-cost-ottawa" className="block hover:text-[#C5A572] transition-colors">Moving Cost Guide 2026</Link>
                <Link href="/ottawa-long-distance-movers-guide" className="block hover:text-[#C5A572] transition-colors">Long Distance Movers Guide</Link>
                <Link href="/senior-movers-ottawa-guide" className="block hover:text-[#C5A572] transition-colors">Senior Movers Ottawa Guide</Link>
                <Link href="/blog" className="block hover:text-[#C5A572] transition-colors">Moving Tips Blog</Link>
                <Link href="/calculator" className="block hover:text-[#C5A572] transition-colors">Moving Calculator</Link>
                <Link href="/contact" className="block hover:text-[#C5A572] transition-colors">Contact Us</Link>
                <Link href="/junk-removal-ottawa" className="block hover:text-[#C5A572] transition-colors">Junk Removal</Link>
                <Link href="/furniture-assembly-ottawa" className="block hover:text-[#C5A572] transition-colors">Furniture Assembly</Link>
                <Link href="/home-staging-ottawa" className="block hover:text-[#C5A572] transition-colors">Home Staging</Link>
                <Link href="/estate-cleanout-ottawa" className="block hover:text-[#C5A572] transition-colors">Estate Cleanout</Link>
                <Link href="/custom-crating-ottawa" className="block hover:text-[#C5A572] transition-colors">Custom Crating</Link>
                <Link href="/furniture-donation-disposal-ottawa" className="block hover:text-[#C5A572] transition-colors">Furniture Donation & Disposal</Link>
                <Link href="/how-to-choose-a-moving-company-ottawa" className="block hover:text-[#C5A572] transition-colors">How to Choose a Mover</Link>
                <Link href="/ottawa-contractors" className="block hover:text-[#C5A572] transition-colors">Ottawa Contractors Partner</Link>
                <Link href="/ottawa-contractors-canada-home-maintenance-guide" className="block hover:text-[#C5A572] transition-colors">Ottawa Contractors Guide 2026</Link>
                <Link href="/moving-companies-ottawa-reviews" className="block hover:text-[#C5A572] transition-colors">Best Moving Companies Ottawa</Link>
                <Link href="/ottawa-neighbourhoods-guide" className="block hover:text-[#C5A572] transition-colors">Ottawa Neighbourhoods Guide</Link>
                <Link href="/moving-in-winter-ottawa" className="block hover:text-[#C5A572] transition-colors">Moving in Winter Ottawa</Link>
                <Link href="/moving-tips-ottawa" className="block hover:text-[#C5A572] transition-colors">Moving Tips Ottawa</Link>
                <Link href="/moving-with-pets-ottawa" className="block hover:text-[#C5A572] transition-colors">Moving With Pets Ottawa</Link>
                <Link href="/moving-with-children-ottawa" className="block hover:text-[#C5A572] transition-colors">Moving With Children Ottawa</Link>
                <Link href="/office-moving-checklist-ottawa" className="block hover:text-[#C5A572] transition-colors">Office Moving Checklist</Link>
                <Link href="/downsizing-moving-ottawa" className="block hover:text-[#C5A572] transition-colors">Downsizing Ottawa</Link>
                <Link href="/packing-and-moving-ottawa" className="block hover:text-[#C5A572] transition-colors">Packing & Moving Ottawa</Link>
                <Link href="/relocation-services-ottawa" className="block hover:text-[#C5A572] transition-colors">Relocation Services Ottawa</Link>
                <Link href="/ottawa-to-gatineau-movers" className="block hover:text-[#C5A572] transition-colors">Ottawa to Gatineau Movers</Link>
                <Link href="/moving-from-montreal-to-ottawa" className="block hover:text-[#C5A572] transition-colors">Montreal to Ottawa Movers</Link>
                <Link href="/moving-from-hamilton-to-ottawa" className="block hover:text-[#C5A572] transition-colors">Hamilton to Ottawa Movers</Link>
                <Link href="/first-home-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">First Home Movers Ottawa</Link>
                <Link href="/moving-from-ottawa-to-toronto" className="block hover:text-[#C5A572] transition-colors">Ottawa to Toronto Movers</Link>
                <Link href="/moving-from-ottawa-to-vancouver" className="block hover:text-[#C5A572] transition-colors">Ottawa to Vancouver Movers</Link>
                <Link href="/moving-from-ottawa-to-calgary" className="block hover:text-[#C5A572] transition-colors">Ottawa to Calgary Movers</Link>
                <Link href="/moving-from-ottawa-to-edmonton" className="block hover:text-[#C5A572] transition-colors">Ottawa to Edmonton Movers</Link>
                <Link href="/moving-from-ottawa-to-winnipeg" className="block hover:text-[#C5A572] transition-colors">Ottawa to Winnipeg Movers</Link>
                <Link href="/moving-from-ottawa-to-hamilton" className="block hover:text-[#C5A572] transition-colors">Ottawa to Hamilton Movers</Link>
                <Link href="/moving-from-ottawa-to-mississauga" className="block hover:text-[#C5A572] transition-colors">Ottawa to Mississauga Movers</Link>
                <Link href="/moving-to-ottawa-from-toronto" className="block hover:text-[#C5A572] transition-colors">Toronto to Ottawa Movers</Link>
                <Link href="/moving-to-ottawa-from-vancouver" className="block hover:text-[#C5A572] transition-colors">Vancouver to Ottawa Movers</Link>
                <Link href="/moving-to-ottawa-from-calgary" className="block hover:text-[#C5A572] transition-colors">Calgary to Ottawa Movers</Link>
                <Link href="/moving-to-ottawa-from-edmonton" className="block hover:text-[#C5A572] transition-colors">Edmonton to Ottawa Movers</Link>
                <Link href="/moving-to-ottawa-from-winnipeg" className="block hover:text-[#C5A572] transition-colors">Winnipeg to Ottawa Movers</Link>
                <Link href="/moving-to-ottawa-from-montreal" className="block hover:text-[#C5A572] transition-colors">Montreal to Ottawa Movers</Link>
                <Link href="/barrhaven-movers" className="block hover:text-[#C5A572] transition-colors">Barrhaven Movers</Link>
                <Link href="/kanata-movers" className="block hover:text-[#C5A572] transition-colors">Kanata Movers</Link>
                <Link href="/local-ottawa-moving-rates" className="block hover:text-[#C5A572] transition-colors">Ottawa Moving Rates</Link>
                <Link href="/moving-quotes-ottawa" className="block hover:text-[#C5A572] transition-colors">Moving Quotes Ottawa</Link>
                <Link href="/ottawa-moving-checklist" className="block hover:text-[#C5A572] transition-colors">Ottawa Moving Checklist</Link>
                <Link href="/ottawa-packing-services" className="block hover:text-[#C5A572] transition-colors">Ottawa Packing Services</Link>
                <Link href="/free-storage-moving-ottawa" className="block hover:text-[#C5A572] transition-colors">Free Storage Moving Ottawa</Link>
                <Link href="/moving-boxes-packing-supplies-ottawa" className="block hover:text-[#C5A572] transition-colors">Moving Boxes Ottawa</Link>
                <Link href="/professional-hoisting-ottawa" className="block hover:text-[#C5A572] transition-colors">Professional Hoisting Ottawa</Link>
                <Link href="/preparing-appliances-for-moving-ottawa" className="block hover:text-[#C5A572] transition-colors">Appliance Moving Ottawa</Link>
                <Link href="/moving-from-ottawa-to-london-ontario" className="block hover:text-[#C5A572] transition-colors">Ottawa to London ON Movers</Link>
                <Link href="/moving-ottawa-to-kingston" className="block hover:text-[#C5A572] transition-colors">Ottawa to Kingston Movers</Link>
                <Link href="/moving-ottawa-to-brockville" className="block hover:text-[#C5A572] transition-colors">Ottawa to Brockville Movers</Link>
                <Link href="/interprovincial-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Interprovincial Movers Ottawa</Link>
                <Link href="/moving-from-ontario-to-bc" className="block hover:text-[#C5A572] transition-colors">Ontario to BC Movers</Link>
                <Link href="/moving-from-ontario-to-alberta" className="block hover:text-[#C5A572] transition-colors">Ontario to Alberta Movers</Link>
                <Link href="/moving-from-ontario-to-quebec" className="block hover:text-[#C5A572] transition-colors">Ontario to Quebec Movers</Link>
                <Link href="/moving-labour-ottawa" className="block hover:text-[#C5A572] transition-colors">Moving Labour Ottawa</Link>
                <Link href="/furniture-rearranging-ottawa" className="block hover:text-[#C5A572] transition-colors">Furniture Rearranging Ottawa</Link>
              </div>
            </div>

            {/* Col 4 — Ottawa Movers + Neighbourhoods */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4">Ottawa Movers</h4>
              <div className="space-y-2.5 text-sm text-white/65">
                <Link href="/movers-in-ottawa" className="block hover:text-[#C5A572] transition-colors">Movers in Ottawa</Link>
                <Link href="/ottawa-movers" className="block hover:text-[#C5A572] transition-colors">Ottawa Movers</Link>
                <Link href="/moving-company-ottawa" className="block hover:text-[#C5A572] transition-colors">Moving Company Ottawa</Link>
                <Link href="/best-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Best Movers Ottawa</Link>
                <Link href="/affordable-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Affordable Movers</Link>
                <Link href="/licensed-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Licensed Movers</Link>
                <Link href="/insured-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Insured Movers</Link>
                <Link href="/professional-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Professional Movers</Link>
                <Link href="/local-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Local Movers Ottawa</Link>
                <Link href="/residential-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Residential Movers</Link>
                <Link href="/commercial-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Commercial Movers</Link>
                <Link href="/movers-near-me-ottawa" className="block hover:text-[#C5A572] transition-colors">Movers Near Me Ottawa</Link>
                <Link href="/ottawa-piano-movers" className="block hover:text-[#C5A572] transition-colors">Ottawa Piano Movers</Link>
                <Link href="/apartment-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Apartment Movers Ottawa</Link>
                <Link href="/condo-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Condo Movers Ottawa</Link>
                <Link href="/cheap-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Cheap Movers Ottawa</Link>
                <Link href="/same-day-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Same Day Movers Ottawa</Link>
                <Link href="/last-minute-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Last Minute Movers Ottawa</Link>
                <Link href="/office-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Office Movers Ottawa</Link>
                <Link href="/appliance-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Appliance Movers Ottawa</Link>
                <Link href="/furniture-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Furniture Movers Ottawa</Link>
                <Link href="/senior-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Senior Movers Ottawa</Link>
                <Link href="/student-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Student Movers Ottawa</Link>
                <Link href="/military-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Military Movers Ottawa</Link>
                <Link href="/house-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">House Movers Ottawa</Link>
                <Link href="/townhouse-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Townhouse Movers Ottawa</Link>
                <Link href="/two-men-and-truck-ottawa" className="block hover:text-[#C5A572] transition-colors">Two Men and a Truck Ottawa</Link>
                <Link href="/government-office-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Government Office Movers</Link>
                <Link href="/corporate-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Corporate Movers Ottawa</Link>
                <Link href="/medical-office-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Medical Office Movers</Link>
                <Link href="/office-relocation-ottawa" className="block hover:text-[#C5A572] transition-colors">Office Relocation Ottawa</Link>
                <Link href="/warehouse-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Warehouse Movers Ottawa</Link>
                <Link href="/retail-store-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Retail Store Movers Ottawa</Link>
                <Link href="/it-equipment-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">IT Equipment Movers Ottawa</Link>
                <Link href="/after-hours-commercial-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">After Hours Commercial Movers</Link>
                <Link href="/weekend-commercial-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Weekend Commercial Movers</Link>
                <Link href="/estate-moving-ottawa" className="block hover:text-[#C5A572] transition-colors">Estate Moving Ottawa</Link>
                <Link href="/new-construction-home-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">New Construction Movers</Link>
                <Link href="/cross-town-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Cross-Town Movers Ottawa</Link>
                <Link href="/long-distance-moving-company-ottawa" className="block hover:text-[#C5A572] transition-colors">Long Distance Moving Company</Link>
                <Link href="/moving-companies-near-me-ottawa" className="block hover:text-[#C5A572] transition-colors">Moving Companies Near Me Ottawa</Link>
                <Link href="/international-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">International Movers Ottawa</Link>
                <Link href="/ottawa-moving-and-delivery" className="block hover:text-[#C5A572] transition-colors">Ottawa Moving & Delivery</Link>
                <Link href="/professional-movers-gloucester" className="block hover:text-[#C5A572] transition-colors">Professional Movers Gloucester</Link>
                <Link href="/night-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Night Movers Ottawa</Link>
                <Link href="/moving-companies-ottawa-prices" className="block hover:text-[#C5A572] transition-colors">Ottawa Moving Prices</Link>
                <Link href="/reliable-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Reliable Movers Ottawa</Link>
                <Link href="/professional-movers-orleans" className="block hover:text-[#C5A572] transition-colors">Professional Movers Orleans</Link>
                <Link href="/senior-moving-services-ottawa" className="block hover:text-[#C5A572] transition-colors">Senior Moving Services Ottawa</Link>
                <Link href="/moving-services-ottawa" className="block hover:text-[#C5A572] transition-colors">Moving Services Ottawa</Link>
                <Link href="/corporate-relocation-services-ottawa" className="block hover:text-[#C5A572] transition-colors">Corporate Relocation Ottawa</Link>
                <Link href="/moving-and-storage-ottawa" className="block hover:text-[#C5A572] transition-colors">Moving & Storage Ottawa</Link>
                <Link href="/moving-nepean" className="block hover:text-[#C5A572] transition-colors">Moving in Nepean</Link>
                <Link href="/small-moving-companies-ottawa" className="block hover:text-[#C5A572] transition-colors">Small Moving Companies Ottawa</Link>
                <Link href="/piano-moving-ottawa" className="block hover:text-[#C5A572] transition-colors">Piano Moving Ottawa</Link>
                <Link href="/emergency-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Emergency Movers Ottawa</Link>
                <Link href="/commercial-moving-services-ottawa" className="block hover:text-[#C5A572] transition-colors">Commercial Moving Services</Link>
                <Link href="/residential-moving-ottawa" className="block hover:text-[#C5A572] transition-colors">Residential Moving Ottawa</Link>
                <Link href="/moving-within-ottawa" className="block hover:text-[#C5A572] transition-colors">Moving Within Ottawa</Link>
                <Link href="/moving-from-kanata-to-barrhaven" className="block hover:text-[#C5A572] transition-colors">Kanata to Barrhaven Movers</Link>
                <Link href="/moving-from-orleans-to-kanata" className="block hover:text-[#C5A572] transition-colors">Orleans to Kanata Movers</Link>
                <Link href="/moving-from-nepean-to-gloucester" className="block hover:text-[#C5A572] transition-colors">Nepean to Gloucester Movers</Link>
              </div>

              <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4 mt-7">Neighbourhood Movers</h4>
              <div className="space-y-2.5 text-sm text-white/65">
                <Link href="/movers-in-orleans" className="block hover:text-[#C5A572] transition-colors">Movers in Orleans</Link>
                <Link href="/movers-in-barrhaven" className="block hover:text-[#C5A572] transition-colors">Movers in Barrhaven</Link>
                <Link href="/movers-in-nepean" className="block hover:text-[#C5A572] transition-colors">Movers in Nepean</Link>
                <Link href="/movers-in-kanata" className="block hover:text-[#C5A572] transition-colors">Movers in Kanata</Link>
                <Link href="/movers-in-gloucester" className="block hover:text-[#C5A572] transition-colors">Movers in Gloucester</Link>
                <Link href="/movers-in-stittsville" className="block hover:text-[#C5A572] transition-colors">Movers in Stittsville</Link>
                <Link href="/movers-in-westboro" className="block hover:text-[#C5A572] transition-colors">Movers in Westboro</Link>
                <Link href="/movers-in-sandy-hill" className="block hover:text-[#C5A572] transition-colors">Movers in Sandy Hill</Link>
                <Link href="/movers-in-alta-vista" className="block hover:text-[#C5A572] transition-colors">Movers in Alta Vista</Link>
                <Link href="/movers-in-hintonburg" className="block hover:text-[#C5A572] transition-colors">Movers in Hintonburg</Link>
                <Link href="/movers-in-riverside-south" className="block hover:text-[#C5A572] transition-colors">Movers in Riverside South</Link>
                <Link href="/movers-in-rockcliffe-park" className="block hover:text-[#C5A572] transition-colors">Movers in Rockcliffe Park</Link>
                <Link href="/movers-in-beacon-hill" className="block hover:text-[#C5A572] transition-colors">Movers in Beacon Hill</Link>
                <Link href="/movers-in-manotick" className="block hover:text-[#C5A572] transition-colors">Movers in Manotick</Link>
                <Link href="/movers-in-orleans-village" className="block hover:text-[#C5A572] transition-colors">Movers in Orleans Village</Link>
              </div>
            </div>

            {/* Col 5 — Residential Movers + Contact */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4">Residential Movers</h4>
              <div className="space-y-2.5 text-sm text-white/65">
                <Link href="/residential-movers-orleans" className="block hover:text-[#C5A572] transition-colors">Residential Movers Orleans</Link>
                <Link href="/residential-movers-kanata" className="block hover:text-[#C5A572] transition-colors">Residential Movers Kanata</Link>
                <Link href="/residential-movers-barrhaven" className="block hover:text-[#C5A572] transition-colors">Residential Movers Barrhaven</Link>
                <Link href="/residential-movers-nepean" className="block hover:text-[#C5A572] transition-colors">Residential Movers Nepean</Link>
                <Link href="/residential-movers-gloucester" className="block hover:text-[#C5A572] transition-colors">Residential Movers Gloucester</Link>
                <Link href="/residential-movers-westboro" className="block hover:text-[#C5A572] transition-colors">Residential Movers Westboro</Link>
                <Link href="/residential-movers-the-glebe" className="block hover:text-[#C5A572] transition-colors">Residential Movers The Glebe</Link>
                <Link href="/residential-movers-centretown" className="block hover:text-[#C5A572] transition-colors">Residential Movers Centretown</Link>
                <Link href="/residential-movers-sandy-hill" className="block hover:text-[#C5A572] transition-colors">Residential Movers Sandy Hill</Link>
                <Link href="/residential-movers-stittsville" className="block hover:text-[#C5A572] transition-colors">Residential Movers Stittsville</Link>
                <Link href="/residential-movers-manotick" className="block hover:text-[#C5A572] transition-colors">Residential Movers Manotick</Link>
                <Link href="/residential-movers-alta-vista" className="block hover:text-[#C5A572] transition-colors">Residential Movers Alta Vista</Link>
                <Link href="/residential-movers-hintonburg" className="block hover:text-[#C5A572] transition-colors">Residential Movers Hintonburg</Link>
                <Link href="/residential-movers-riverside-south" className="block hover:text-[#C5A572] transition-colors">Residential Movers Riverside South</Link>
                <Link href="/residential-movers-rockcliffe-park" className="block hover:text-[#C5A572] transition-colors">Residential Movers Rockcliffe Park</Link>
                <Link href="/residential-movers-beacon-hill" className="block hover:text-[#C5A572] transition-colors">Residential Movers Beacon Hill</Link>
                <Link href="/residential-movers-orleans-village" className="block hover:text-[#C5A572] transition-colors">Residential Movers Orleans Village</Link>
                <Link href="/residential-movers-bells-corners" className="block hover:text-[#C5A572] transition-colors">Residential Movers Bells Corners</Link>
                <Link href="/residential-movers-hunt-club" className="block hover:text-[#C5A572] transition-colors">Residential Movers Hunt Club</Link>
                <Link href="/residential-movers-vanier" className="block hover:text-[#C5A572] transition-colors">Residential Movers Vanier</Link>
                <Link href="/residential-movers-manor-park" className="block hover:text-[#C5A572] transition-colors">Residential Movers Manor Park</Link>
                <Link href="/residential-movers-blackburn-hamlet" className="block hover:text-[#C5A572] transition-colors">Residential Movers Blackburn Hamlet</Link>
                <Link href="/residential-movers-crystal-beach" className="block hover:text-[#C5A572] transition-colors">Residential Movers Crystal Beach</Link>
                <Link href="/residential-movers-overbrook" className="block hover:text-[#C5A572] transition-colors">Residential Movers Overbrook</Link>
                <Link href="/residential-movers-old-ottawa-south" className="block hover:text-[#C5A572] transition-colors">Residential Movers Old Ottawa South</Link>
                <Link href="/residential-movers-new-edinburgh" className="block hover:text-[#C5A572] transition-colors">Residential Movers New Edinburgh</Link>
                <Link href="/residential-movers-lowertown" className="block hover:text-[#C5A572] transition-colors">Residential Movers Lowertown</Link>
              </div>

              <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4 mt-7">Specialty Moving</h4>
              <div className="space-y-2.5 text-sm text-white/65 mb-7">
                <Link href="/white-glove-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">White Glove Movers Ottawa</Link>
                <Link href="/pool-table-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Pool Table Movers Ottawa</Link>
                <Link href="/hot-tub-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Hot Tub Movers Ottawa</Link>
                <Link href="/gym-equipment-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Gym Equipment Movers Ottawa</Link>
                <Link href="/antique-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Antique Movers Ottawa</Link>
                <Link href="/embassy-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Embassy Movers Ottawa</Link>
                <Link href="/federal-government-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Federal Government Movers</Link>
                <Link href="/law-firm-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Law Firm Movers Ottawa</Link>
                <Link href="/university-moving-ottawa" className="block hover:text-[#C5A572] transition-colors">University Moving Ottawa</Link>
              </div>

              <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4 mt-7">Commercial Movers</h4>
              <div className="space-y-2.5 text-sm text-white/65 mb-7">
                <Link href="/commercial-movers-orleans" className="block hover:text-[#C5A572] transition-colors">Commercial Movers Orleans</Link>
                <Link href="/commercial-movers-kanata" className="block hover:text-[#C5A572] transition-colors">Commercial Movers Kanata</Link>
                <Link href="/commercial-movers-barrhaven" className="block hover:text-[#C5A572] transition-colors">Commercial Movers Barrhaven</Link>
                <Link href="/commercial-movers-nepean" className="block hover:text-[#C5A572] transition-colors">Commercial Movers Nepean</Link>
                <Link href="/commercial-movers-gloucester" className="block hover:text-[#C5A572] transition-colors">Commercial Movers Gloucester</Link>
                <Link href="/commercial-movers-westboro" className="block hover:text-[#C5A572] transition-colors">Commercial Movers Westboro</Link>
                <Link href="/commercial-movers-the-glebe" className="block hover:text-[#C5A572] transition-colors">Commercial Movers The Glebe</Link>
                <Link href="/commercial-movers-centretown" className="block hover:text-[#C5A572] transition-colors">Commercial Movers Centretown</Link>
                <Link href="/commercial-movers-sandy-hill" className="block hover:text-[#C5A572] transition-colors">Commercial Movers Sandy Hill</Link>
                <Link href="/commercial-movers-stittsville" className="block hover:text-[#C5A572] transition-colors">Commercial Movers Stittsville</Link>
                <Link href="/commercial-movers-manotick" className="block hover:text-[#C5A572] transition-colors">Commercial Movers Manotick</Link>
                <Link href="/commercial-movers-alta-vista" className="block hover:text-[#C5A572] transition-colors">Commercial Movers Alta Vista</Link>
                <Link href="/commercial-movers-hintonburg" className="block hover:text-[#C5A572] transition-colors">Commercial Movers Hintonburg</Link>
                <Link href="/commercial-movers-riverside-south" className="block hover:text-[#C5A572] transition-colors">Commercial Movers Riverside South</Link>
                <Link href="/commercial-movers-rockcliffe-park" className="block hover:text-[#C5A572] transition-colors">Commercial Movers Rockcliffe Park</Link>
                <Link href="/commercial-movers-beacon-hill" className="block hover:text-[#C5A572] transition-colors">Commercial Movers Beacon Hill</Link>
                <Link href="/commercial-movers-orleans-village" className="block hover:text-[#C5A572] transition-colors">Commercial Movers Orleans Village</Link>
              </div>

              <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4 mt-7">Contact Us</h4>
              <div className="space-y-3 text-sm text-white/65">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <MapPin className="h-4 w-4 text-[#C5A572] shrink-0" />
                  Ottawa
                </div>
                <p>50 Colonnade Rd Unit 200B, Ottawa, ON K2E 7J6</p>
                <a href="tel:613-600-4000" className="flex items-center gap-2 hover:text-[#C5A572] transition-colors">
                  <Phone className="h-4 w-4 shrink-0" />
                  (613) 600-4000
                </a>
                <a href="mailto:ottawa@prestigemoving.ca" className="flex items-center gap-2 hover:text-[#C5A572] transition-colors">
                  <Mail className="h-4 w-4 shrink-0" />
                  ottawa@prestigemoving.ca
                </a>
                <div className="mt-3 space-y-0.5 text-xs text-white/50">
                  <div className="text-white/70 font-semibold text-xs mb-1">Hours</div>
                  <div className="flex justify-between gap-4"><span>Mon / Tue / Wed / Fri</span><span>7 a.m.–11:30 p.m.</span></div>
                  <div className="flex justify-between gap-4"><span>Thursday</span><span>9 a.m.–11:30 p.m.</span></div>
                  <div className="flex justify-between gap-4"><span>Saturday</span><span>9 a.m.–11 p.m.</span></div>
                  <div className="flex justify-between gap-4"><span>Sunday</span><span>9 a.m.–10:30 p.m.</span></div>
                </div>
                <div className="flex items-center gap-2 text-white font-semibold mt-3">
                  <MapPin className="h-4 w-4 text-[#C5A572] shrink-0" />
                  Vancouver
                </div>
                <p>4385 Canada Wy, Burnaby, BC V5G 1J3</p>
                <a href="tel:604-616-6066" className="flex items-center gap-2 hover:text-[#C5A572] transition-colors">
                  <Phone className="h-4 w-4 shrink-0" />
                  (604) 616-6066
                </a>
                <a href="mailto:vancouver@prestigemoving.ca" className="flex items-center gap-2 hover:text-[#C5A572] transition-colors">
                  <Mail className="h-4 w-4 shrink-0" />
                  vancouver@prestigemoving.ca
                </a>
                <div className="mt-4">
                  <Link href="/book">
                    <Button variant="default" className="font-bold w-full" data-testid="button-footer-quote">
                      GET FREE QUOTE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Keyword Index — Popular Ottawa Moving Searches */}
          <div className="border-t border-white/10 mt-12 pt-8 pb-8">
            <h4 className="font-bold text-xs uppercase tracking-widest text-white/30 mb-5">Popular Moving Searches in Ottawa</h4>
            <div className="flex flex-wrap gap-x-5 gap-y-2.5 text-xs text-white/45">
              <Link href="/moving-companies-near-me-ottawa" className="hover:text-[#C5A572] transition-colors">Ottawa moving companies</Link>
              <Link href="/ottawa-movers" className="hover:text-[#C5A572] transition-colors">movers Ottawa</Link>
              <Link href="/" className="hover:text-[#C5A572] transition-colors">Ottawa movers</Link>
              <Link href="/movers-in-ottawa" className="hover:text-[#C5A572] transition-colors">movers in Ottawa Ontario</Link>
              <Link href="/movers-in-ottawa" className="hover:text-[#C5A572] transition-colors">movers in Ottawa</Link>
              <Link href="/kanata-movers" className="hover:text-[#C5A572] transition-colors">Kanata movers</Link>
              <Link href="/barrhaven-movers" className="hover:text-[#C5A572] transition-colors">movers Barrhaven</Link>
              <Link href="/moving-company-ottawa" className="hover:text-[#C5A572] transition-colors">Ottawa moving company</Link>
              <Link href="/ottawa-piano-movers" className="hover:text-[#C5A572] transition-colors">piano moving company near me</Link>
              <Link href="/moving-companies-near-me-ottawa" className="hover:text-[#C5A572] transition-colors">moving companies Ottawa</Link>
              <Link href="/best-movers-ottawa" className="hover:text-[#C5A572] transition-colors">best moving companies Ottawa</Link>
              <Link href="/best-movers-ottawa" className="hover:text-[#C5A572] transition-colors">best movers in Ottawa</Link>
              <Link href="/ottawa-to-toronto-movers" className="hover:text-[#C5A572] transition-colors">moving companies Ottawa to Toronto</Link>
              <Link href="/moving-services-ottawa" className="hover:text-[#C5A572] transition-colors">Ottawa moving services</Link>
              <Link href="/ottawa-piano-movers" className="hover:text-[#C5A572] transition-colors">piano removal company</Link>
              <Link href="/moving-from-ottawa-to-toronto" className="hover:text-[#C5A572] transition-colors">moving from Ottawa to Toronto</Link>
              <Link href="/professional-movers-ottawa" className="hover:text-[#C5A572] transition-colors">professional movers Ottawa</Link>
              <Link href="/kanata-movers" className="hover:text-[#C5A572] transition-colors">moving companies Kanata</Link>
              <Link href="/moving-companies-ottawa-prices" className="hover:text-[#C5A572] transition-colors">moving companies Ottawa prices</Link>
              <Link href="/furniture-movers-ottawa" className="hover:text-[#C5A572] transition-colors">furniture movers Ottawa</Link>
              <Link href="/furniture-movers-ottawa" className="hover:text-[#C5A572] transition-colors">furniture movers</Link>
              <Link href="/furniture-movers-ottawa" className="hover:text-[#C5A572] transition-colors">movers to move furniture</Link>
              <Link href="/ottawa-packing-services" className="hover:text-[#C5A572] transition-colors">moving company packers</Link>
              <Link href="/ottawa-packing-services" className="hover:text-[#C5A572] transition-colors">professional packers</Link>
              <Link href="/moving-to-ottawa-from-toronto" className="hover:text-[#C5A572] transition-colors">Toronto to Ottawa movers</Link>
              <Link href="/residential-movers-ottawa" className="hover:text-[#C5A572] transition-colors">Ottawa residential movers</Link>
              <Link href="/kanata-movers" className="hover:text-[#C5A572] transition-colors">movers Kanata</Link>
              <Link href="/moving-companies-near-me-ottawa" className="hover:text-[#C5A572] transition-colors">moving companies in Ottawa Ontario</Link>
              <Link href="/local-movers-ottawa" className="hover:text-[#C5A572] transition-colors">local moving companies Ottawa</Link>
              <Link href="/moving-company-ottawa" className="hover:text-[#C5A572] transition-colors">moving company Ottawa</Link>
              <Link href="/moving-company-ottawa" className="hover:text-[#C5A572] transition-colors">moving Ottawa</Link>
              <Link href="/movers-in-manotick" className="hover:text-[#C5A572] transition-colors">moving Manotick</Link>
              <Link href="/cheap-movers-ottawa" className="hover:text-[#C5A572] transition-colors">cheap movers Ottawa</Link>
              <Link href="/apartment-movers-ottawa" className="hover:text-[#C5A572] transition-colors">apartment movers Ottawa</Link>
              <Link href="/condo-movers-ottawa" className="hover:text-[#C5A572] transition-colors">condo movers Ottawa</Link>
              <Link href="/residential-moving-ottawa" className="hover:text-[#C5A572] transition-colors">residential moving Ottawa</Link>
              <Link href="/commercial-movers-ottawa" className="hover:text-[#C5A572] transition-colors">commercial moving Ottawa</Link>
              <Link href="/long-distance-movers-ottawa" className="hover:text-[#C5A572] transition-colors">long distance movers Ottawa</Link>
              <Link href="/moving-and-storage-ottawa" className="hover:text-[#C5A572] transition-colors">moving storage Ottawa</Link>
              <Link href="/office-movers-ottawa" className="hover:text-[#C5A572] transition-colors">office movers Ottawa</Link>
              <Link href="/senior-movers-ottawa" className="hover:text-[#C5A572] transition-colors">senior movers Ottawa</Link>
              <Link href="/student-movers-ottawa" className="hover:text-[#C5A572] transition-colors">student movers Ottawa</Link>
              <Link href="/same-day-movers-ottawa" className="hover:text-[#C5A572] transition-colors">same day movers Ottawa</Link>
              <Link href="/last-minute-movers-ottawa" className="hover:text-[#C5A572] transition-colors">last minute movers Ottawa</Link>
              <Link href="/ottawa-piano-movers" className="hover:text-[#C5A572] transition-colors">piano movers Ottawa</Link>
              <Link href="/ottawa-packing-services" className="hover:text-[#C5A572] transition-colors">packing services Ottawa</Link>
              <Link href="/moving-quotes-ottawa" className="hover:text-[#C5A572] transition-colors">moving quotes Ottawa</Link>
              <Link href="/how-much-does-moving-cost-ottawa" className="hover:text-[#C5A572] transition-colors">how much does moving cost Ottawa</Link>
              <Link href="/movers-in-orleans" className="hover:text-[#C5A572] transition-colors">Orleans movers</Link>
              <Link href="/movers-in-nepean" className="hover:text-[#C5A572] transition-colors">Nepean movers</Link>
              <Link href="/movers-in-barrhaven" className="hover:text-[#C5A572] transition-colors">movers in Barrhaven</Link>
              <Link href="/moving-nepean" className="hover:text-[#C5A572] transition-colors">moving Nepean</Link>
              <Link href="/local-movers-ottawa" className="hover:text-[#C5A572] transition-colors">local movers Ottawa</Link>
              <Link href="/movers-near-me-ottawa" className="hover:text-[#C5A572] transition-colors">movers near me Ottawa</Link>
              <Link href="/moving-companies-near-me-ottawa" className="hover:text-[#C5A572] transition-colors">moving companies near me Ottawa</Link>
              <Link href="/residential-movers-kanata" className="hover:text-[#C5A572] transition-colors">residential movers Kanata</Link>
              <Link href="/residential-movers-barrhaven" className="hover:text-[#C5A572] transition-colors">residential movers Barrhaven</Link>
              <Link href="/residential-movers-orleans" className="hover:text-[#C5A572] transition-colors">residential movers Orleans</Link>
              <Link href="/commercial-movers-kanata" className="hover:text-[#C5A572] transition-colors">commercial movers Kanata</Link>
              <Link href="/piano-moving-ottawa" className="hover:text-[#C5A572] transition-colors">piano moving Ottawa</Link>
              <Link href="/reliable-movers-ottawa" className="hover:text-[#C5A572] transition-colors">reliable movers Ottawa</Link>
              <Link href="/insured-movers-ottawa" className="hover:text-[#C5A572] transition-colors">insured movers Ottawa</Link>
              <Link href="/licensed-movers-ottawa" className="hover:text-[#C5A572] transition-colors">licensed movers Ottawa</Link>
              <Link href="/moving-services-ottawa" className="hover:text-[#C5A572] transition-colors">moving services Ottawa</Link>
              <Link href="/office-relocation-ottawa" className="hover:text-[#C5A572] transition-colors">office relocation Ottawa</Link>
              <Link href="/corporate-movers-ottawa" className="hover:text-[#C5A572] transition-colors">corporate movers Ottawa</Link>
              <Link href="/interprovincial-movers-ottawa" className="hover:text-[#C5A572] transition-colors">interprovincial movers Ottawa</Link>
              <Link href="/emergency-movers-ottawa" className="hover:text-[#C5A572] transition-colors">emergency movers Ottawa</Link>
              <Link href="/house-movers-ottawa" className="hover:text-[#C5A572] transition-colors">house movers Ottawa</Link>
              <Link href="/white-glove-movers-ottawa" className="hover:text-[#C5A572] transition-colors">white glove movers Ottawa</Link>
              <Link href="/appliance-movers-ottawa" className="hover:text-[#C5A572] transition-colors">appliance movers Ottawa</Link>
              <Link href="/moving-from-montreal-to-ottawa" className="hover:text-[#C5A572] transition-colors">Montreal to Ottawa movers</Link>
              <Link href="/ottawa-to-montreal-movers" className="hover:text-[#C5A572] transition-colors">Ottawa to Montreal moving company</Link>
              <Link href="/ottawa-to-toronto-movers" className="hover:text-[#C5A572] transition-colors">Ottawa to Toronto moving company</Link>
              <Link href="/long-distance-moving-company-ottawa" className="hover:text-[#C5A572] transition-colors">long distance moving company Ottawa</Link>
              <Link href="/moving-companies-ottawa-reviews" className="hover:text-[#C5A572] transition-colors">moving companies Ottawa reviews</Link>
              <Link href="/downsizing-moving-ottawa" className="hover:text-[#C5A572] transition-colors">downsizing movers Ottawa</Link>
              <Link href="/first-home-movers-ottawa" className="hover:text-[#C5A572] transition-colors">first home movers Ottawa</Link>
              <Link href="/cross-town-movers-ottawa" className="hover:text-[#C5A572] transition-colors">cross town movers Ottawa</Link>
              <Link href="/moving-within-ottawa" className="hover:text-[#C5A572] transition-colors">moving within Ottawa</Link>
            </div>
          </div>

          {/* External Resources Bar */}
          <div className="border-t border-white/10 pt-8 pb-8">
            <h4 className="font-bold text-xs uppercase tracking-widest text-white/30 mb-4">Trusted Resources & Official Links</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/40">
              <a href="https://ottawa.ca" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A572] transition-colors">City of Ottawa — Official Site</a>
              <a href="https://www.ontario.ca/page/serviceontario" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A572] transition-colors">ServiceOntario — Change of Address</a>
              <a href="https://www.canadapost-postescanada.ca/cpc/en/personal/receiving/manage-mail/mail-forwarding.page" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A572] transition-colors">Canada Post — Mail Forwarding</a>
              <a href="https://www.wsib.ca" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A572] transition-colors">WSIB Ontario — Workplace Safety</a>
              <a href="https://www.bbb.org/ca/on/ottawa" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A572] transition-colors">Better Business Bureau Ottawa</a>
              <a href="https://www.ottawapolice.ca" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A572] transition-colors">Ottawa Police — Truck Permits</a>
              <a href="https://www.cmhc-schl.gc.ca" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A572] transition-colors">CMHC — Canada Mortgage & Housing</a>
              <a href="https://www.hydroottawa.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A572] transition-colors">Hydro Ottawa — Service Transfer</a>
              <a href="/sitemap" className="hover:text-[#C5A572] transition-colors">Full Site Index & Sitemap</a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full border-2 border-white/30">
                <svg viewBox="0 0 50 50" className="w-14 h-14" aria-label="Canadian Owned and Operated">
                  <circle cx="25" cy="25" r="23" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40" />
                  <path d="M 25 8 C 25 8 28 14 25 18 C 22 14 25 8 25 8 Z M 25 18 L 21 15 L 18 18 L 19 14 L 15 12 L 20 12 L 25 18 Z M 25 18 L 29 15 L 32 18 L 31 14 L 35 12 L 30 12 L 25 18 Z" fill="currentColor" className="text-white/70" />
                  <path id="topArc" d="M 8 25 A 17 17 0 0 1 42 25" fill="none" />
                  <text className="fill-white/60" style={{ fontSize: '5.5px', letterSpacing: '1px' }}>
                    <textPath href="#topArc" startOffset="50%" textAnchor="middle">CANADIAN OWNED</textPath>
                  </text>
                  <path id="bottomArc" d="M 8 25 A 17 17 0 0 0 42 25" fill="none" />
                  <text className="fill-white/60" style={{ fontSize: '5.5px', letterSpacing: '1px' }}>
                    <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">&amp; OPERATED</textPath>
                  </text>
                </svg>
              </div>
              <div className="text-center md:text-left text-sm text-white/50 space-y-1">
                <p>Copyright {currentYear} Prestige Moving / Canada.</p>
                <p>50 Colonnade Rd Unit 200B, Ottawa, ON K2E 7J6</p>
                <p>Prestige Moving locations are Canadian owned and operated.</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-white/35">
                <span>Prestige Moving Inc.</span>
                <span>CVOR 208-105-148</span>
                <span>WSIB Certified</span>
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="text-xs text-white/35">
                <p>
                  Designed By:{" "}
                  <a href="https://ottawaseo.com" target="_blank" rel="noopener noreferrer" className="text-[#C5A572] hover:text-[#C5A572]/80 transition-colors" data-testid="link-ottawa-seo">
                    Ottawa SEO Inc.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
