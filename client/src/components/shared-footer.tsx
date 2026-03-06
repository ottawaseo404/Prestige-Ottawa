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
                Ottawa's trusted moving company providing professional residential and commercial moving services.
              </p>
              <div className="mt-6">
                <WorkSafeBadge size="lg" />
              </div>
            </div>

            {/* Col 2 — Services */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4">Our Services</h4>
              <div className="space-y-2.5 text-sm text-white/65">
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
              </div>

              <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4 mt-7">Resources</h4>
              <div className="space-y-2.5 text-sm text-white/65">
                <Link href="/how-much-does-moving-cost-ottawa" className="block hover:text-[#C5A572] transition-colors">Moving Cost Guide 2026</Link>
                <Link href="/blog" className="block hover:text-[#C5A572] transition-colors">Moving Tips Blog</Link>
                <Link href="/calculator" className="block hover:text-[#C5A572] transition-colors">Moving Calculator</Link>
                <Link href="/contact" className="block hover:text-[#C5A572] transition-colors">Contact Us</Link>
                <Link href="/junk-removal-ottawa" className="block hover:text-[#C5A572] transition-colors">Junk Removal</Link>
                <Link href="/furniture-assembly-ottawa" className="block hover:text-[#C5A572] transition-colors">Furniture Assembly</Link>
                <Link href="/home-staging-ottawa" className="block hover:text-[#C5A572] transition-colors">Home Staging</Link>
                <Link href="/estate-cleanout-ottawa" className="block hover:text-[#C5A572] transition-colors">Estate Cleanout</Link>
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
                <Link href="/residential-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Residential Movers</Link>
                <Link href="/commercial-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Commercial Movers</Link>
                <Link href="/movers-near-me-ottawa" className="block hover:text-[#C5A572] transition-colors">Movers Near Me Ottawa</Link>
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
                <Link href="/movers-in-alta-vista" className="block hover:text-[#C5A572] transition-colors">Movers in Alta Vista</Link>
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

          {/* Bottom bar */}
          <div className="border-t border-white/10 mt-12 pt-8">
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
