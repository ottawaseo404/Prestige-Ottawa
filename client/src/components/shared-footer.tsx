import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight, TruckIcon, DollarSign } from "lucide-react";
import logoUrl from "@assets/originalonglogo_1763689606978.png";
import { WorkSafeBadge } from "@/components/worksafe-badge";

const LONG_DISTANCE_ROUTES = [
  {
    from: "Ottawa",
    to: "Montreal",
    distance: "196 km · ~2 hrs",
    from_price: "From $900",
    href: "/ottawa-to-montreal-movers",
    highlight: "Most Popular",
  },
  {
    from: "Ottawa",
    to: "Toronto",
    distance: "450 km · ~4.5 hrs",
    from_price: "From $1,200",
    href: "/ottawa-to-toronto-movers",
    highlight: null,
  },
  {
    from: "Ottawa",
    to: "Calgary",
    distance: "3,300 km · 5–12 days",
    from_price: "From $2,500",
    href: "/ottawa-to-calgary-movers",
    highlight: "Cross-Country",
  },
  {
    from: "Ottawa",
    to: "New Brunswick",
    distance: "~1,000 km · ~10 hrs",
    from_price: "From $1,500",
    href: "/ottawa-to-new-brunswick-movers",
    highlight: null,
  },
  {
    from: "Ottawa",
    to: "Halifax",
    distance: "~1,500 km · ~15 hrs",
    from_price: "From $1,800",
    href: "/ottawa-to-halifax-movers",
    highlight: null,
  },
  {
    from: "Ottawa",
    to: "Nova Scotia",
    distance: "1,500–1,800 km",
    from_price: "From $1,800",
    href: "/ottawa-to-nova-scotia-movers",
    highlight: null,
  },
  {
    from: "Ottawa",
    to: "Vancouver",
    distance: "4,600 km · 7–14 days",
    from_price: "From $3,000",
    href: "/ottawa-to-vancouver-movers",
    highlight: "Longest Route",
  },
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

                  {/* Route arrow display */}
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

      {/* Main Footer */}
      <footer className="bg-[#111c2a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-1">
              <img src={logoUrl} alt="Prestige Moving" className="h-12 w-auto mb-6" />
              <p className="text-white/70 text-sm leading-relaxed">
                Ottawa's trusted moving company providing professional residential and commercial moving services.
              </p>
              <div className="mt-6">
                <WorkSafeBadge size="lg" />
              </div>
            </div>

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

            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4">Ottawa Movers</h4>
              <div className="space-y-2.5 text-sm text-white/65">
                <Link href="/movers-in-ottawa" className="block hover:text-[#C5A572] transition-colors">Movers in Ottawa</Link>
                <Link href="/ottawa-movers" className="block hover:text-[#C5A572] transition-colors">Ottawa Movers</Link>
                <Link href="/moving-company-ottawa" className="block hover:text-[#C5A572] transition-colors">Moving Company Ottawa</Link>
                <Link href="/professional-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Professional Movers</Link>
                <Link href="/best-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Best Movers Ottawa</Link>
                <Link href="/local-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Local Movers Ottawa</Link>
                <Link href="/affordable-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Affordable Movers</Link>
                <Link href="/licensed-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Licensed Movers</Link>
                <Link href="/insured-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Insured Movers</Link>
                <Link href="/residential-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Residential Movers</Link>
                <Link href="/commercial-movers-ottawa" className="block hover:text-[#C5A572] transition-colors">Commercial Movers</Link>
              </div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4 mt-7">Neighbourhoods</h4>
              <div className="space-y-2.5 text-sm text-white/65">
                <Link href="/movers-in-orleans" className="block hover:text-[#C5A572] transition-colors">Orleans</Link>
                <Link href="/movers-in-barrhaven" className="block hover:text-[#C5A572] transition-colors">Barrhaven</Link>
                <Link href="/movers-in-nepean" className="block hover:text-[#C5A572] transition-colors">Nepean</Link>
                <Link href="/movers-in-kanata" className="block hover:text-[#C5A572] transition-colors">Kanata</Link>
                <Link href="/movers-in-gloucester" className="block hover:text-[#C5A572] transition-colors">Gloucester</Link>
                <Link href="/movers-in-stittsville" className="block hover:text-[#C5A572] transition-colors">Stittsville</Link>
                <Link href="/movers-in-westboro" className="block hover:text-[#C5A572] transition-colors">Westboro</Link>
                <Link href="/movers-in-alta-vista" className="block hover:text-[#C5A572] transition-colors">Alta Vista</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm text-white/65">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <MapPin className="h-4 w-4 text-[#C5A572] shrink-0" />
                  Ottawa
                </div>
                <p>50 Colonnade Rd Unit 200B</p>
                <p>Ottawa, ON K2E 7J6</p>
                <a href="tel:613-600-4000" className="flex items-center gap-2 hover:text-[#C5A572] transition-colors">
                  <Phone className="h-4 w-4 shrink-0" />
                  (613) 600-4000
                </a>
                <a href="mailto:ottawa@prestigemoving.ca" className="flex items-center gap-2 hover:text-[#C5A572] transition-colors">
                  <Mail className="h-4 w-4 shrink-0" />
                  ottawa@prestigemoving.ca
                </a>
                <a
                  href="https://maps.app.goo.gl/B5nz46epY0vxEkHQY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#C5A572]/80 transition-colors"
                  data-testid="link-google-business-ottawa"
                >
                  View on Google Maps
                </a>
              </div>

              <div className="border-t border-white/10 mt-5 pt-5 space-y-3 text-sm text-white/65">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <MapPin className="h-4 w-4 text-[#C5A572] shrink-0" />
                  Vancouver
                </div>
                <p>4385 Canada Wy</p>
                <p>Burnaby, BC V5G 1J3</p>
                <a href="tel:604-616-6066" className="flex items-center gap-2 hover:text-[#C5A572] transition-colors">
                  <Phone className="h-4 w-4 shrink-0" />
                  (604) 616-6066
                </a>
                <a href="mailto:vancouver@prestigemoving.ca" className="flex items-center gap-2 hover:text-[#C5A572] transition-colors">
                  <Mail className="h-4 w-4 shrink-0" />
                  vancouver@prestigemoving.ca
                </a>
                <a
                  href="https://maps.google.com/?q=4385+Canada+Wy+Burnaby+BC+V5G+1J3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#C5A572]/80 transition-colors"
                  data-testid="link-google-business-vancouver"
                >
                  View on Google Maps
                </a>
              </div>

              <div className="mt-6">
                <Link href="/book">
                  <Button variant="default" className="font-bold w-full" data-testid="button-footer-quote">
                    GET FREE QUOTE
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full border-2 border-white/30">
                <div className="text-center leading-tight">
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
                  <a
                    href="https://ottawaseo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C5A572] hover:text-[#C5A572]/80 transition-colors"
                    data-testid="link-ottawa-seo"
                  >
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
