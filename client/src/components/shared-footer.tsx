import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import logoUrl from "@assets/originalonglogo_1763689606978.png";
import { WorkSafeBadge } from "@/components/worksafe-badge";

export function SharedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#1A2332] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-1">
              <img src={logoUrl} alt="Prestige Moving" className="h-12 w-auto mb-6" />
              <p className="text-white/70 text-sm leading-relaxed">
                Ottawa's trusted moving company providing professional residential and commercial moving services.
              </p>
              {/* WorkSafe BC Badge */}
              <div className="mt-6">
                <WorkSafeBadge size="lg" />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
              <div className="space-y-2 text-sm text-white/70">
                <Link href="/services/residential-moving" className="block hover:text-primary transition-colors">Residential Moving</Link>
                <Link href="/services/commercial-moving" className="block hover:text-primary transition-colors">Commercial Moving</Link>
                <Link href="/services/long-distance-moving" className="block hover:text-primary transition-colors">Long Distance Moving</Link>
                <Link href="/services/packing-services" className="block hover:text-primary transition-colors">Packing Services</Link>
                <Link href="/services/storage-solutions" className="block hover:text-primary transition-colors">Storage Solutions</Link>
                <Link href="/services/piano-moving" className="block hover:text-primary transition-colors">Piano Moving</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">More Services</h4>
              <div className="space-y-2 text-sm text-white/70">
                <Link href="/services/senior-moving" className="block hover:text-primary transition-colors">Senior Moving</Link>
                <Link href="/services/student-moving" className="block hover:text-primary transition-colors">Student Moving</Link>
                <Link href="/services/antique-moving" className="block hover:text-primary transition-colors">Antique Moving</Link>
                <Link href="/services/specialty-item-moving" className="block hover:text-primary transition-colors">Specialty Items</Link>
                <Link href="/services/moving-supplies" className="block hover:text-primary transition-colors">Moving Supplies</Link>
                <Link href="/services/military-moving" className="block hover:text-primary transition-colors">Military Moving</Link>
                <Link href="/junk-removal-ottawa" className="block hover:text-primary transition-colors">Junk Removal</Link>
                <Link href="/furniture-assembly-ottawa" className="block hover:text-primary transition-colors">Furniture Assembly</Link>
                <Link href="/home-staging-ottawa" className="block hover:text-primary transition-colors">Home Staging</Link>
                <Link href="/estate-cleanout-ottawa" className="block hover:text-primary transition-colors">Estate Cleanout</Link>
                <Link href="/custom-crating-ottawa" className="block hover:text-primary transition-colors">Custom Crating</Link>
              </div>
              <h4 className="font-bold text-lg mb-4 mt-8">Resources</h4>
              <div className="space-y-2 text-sm text-white/70">
                <Link href="/blog" className="block hover:text-primary transition-colors">Moving Tips Blog</Link>
                <Link href="/calculator" className="block hover:text-primary transition-colors">Moving Calculator</Link>
                <Link href="/contact" className="block hover:text-primary transition-colors">Contact Us</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Ottawa Movers</h4>
              <div className="space-y-2 text-sm text-white/70">
                <Link href="/movers-in-ottawa" className="block hover:text-primary transition-colors">Movers in Ottawa</Link>
                <Link href="/ottawa-movers" className="block hover:text-primary transition-colors">Ottawa Movers</Link>
                <Link href="/moving-company-ottawa" className="block hover:text-primary transition-colors">Moving Company Ottawa</Link>
                <Link href="/professional-movers-ottawa" className="block hover:text-primary transition-colors">Professional Movers</Link>
                <Link href="/best-movers-ottawa" className="block hover:text-primary transition-colors">Best Movers Ottawa</Link>
                <Link href="/local-movers-ottawa" className="block hover:text-primary transition-colors">Local Movers Ottawa</Link>
                <Link href="/affordable-movers-ottawa" className="block hover:text-primary transition-colors">Affordable Movers</Link>
                <Link href="/licensed-movers-ottawa" className="block hover:text-primary transition-colors">Licensed Movers</Link>
                <Link href="/insured-movers-ottawa" className="block hover:text-primary transition-colors">Insured Movers</Link>
                <Link href="/residential-movers-ottawa" className="block hover:text-primary transition-colors">Residential Movers</Link>
                <Link href="/commercial-movers-ottawa" className="block hover:text-primary transition-colors">Commercial Movers</Link>
              </div>
              <h4 className="font-bold text-lg mb-4 mt-6">Neighbourhood Movers</h4>
              <div className="space-y-2 text-sm text-white/70">
                <Link href="/movers-in-orleans" className="block hover:text-primary transition-colors">Movers in Orleans</Link>
                <Link href="/movers-in-barrhaven" className="block hover:text-primary transition-colors">Movers in Barrhaven</Link>
                <Link href="/movers-in-nepean" className="block hover:text-primary transition-colors">Movers in Nepean</Link>
                <Link href="/movers-in-kanata" className="block hover:text-primary transition-colors">Movers in Kanata</Link>
                <Link href="/movers-in-gloucester" className="block hover:text-primary transition-colors">Movers in Gloucester</Link>
                <Link href="/movers-in-stittsville" className="block hover:text-primary transition-colors">Movers in Stittsville</Link>
                <Link href="/movers-in-westboro" className="block hover:text-primary transition-colors">Movers in Westboro</Link>
                <Link href="/movers-in-alta-vista" className="block hover:text-primary transition-colors">Movers in Alta Vista</Link>
                <Link href="/movers-in-riverside-south" className="block hover:text-primary transition-colors">Movers in Riverside South</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  Ottawa
                </div>
                <p>50 Colonnade Rd Unit 200B</p>
                <p>Ottawa, ON K2E 7J6</p>
                <a href="tel:613-600-4000" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  (613) 600-4000
                </a>
                <a href="mailto:ottawa@prestigemoving.ca" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  ottawa@prestigemoving.ca
                </a>
                <a 
                  href="https://maps.app.goo.gl/B5nz46epY0vxEkHQY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  data-testid="link-google-business-ottawa"
                >
                  View on Google Maps
                </a>
              </div>
              <div className="border-t border-white/10 mt-5 pt-5 space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  Vancouver
                </div>
                <p>4385 Canada Wy</p>
                <p>Burnaby, BC V5G 1J3</p>
                <a href="tel:604-616-6066" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  (604) 616-6066
                </a>
                <a href="mailto:vancouver@prestigemoving.ca" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  vancouver@prestigemoving.ca
                </a>
                <a 
                  href="https://maps.google.com/?q=4385+Canada+Wy+Burnaby+BC+V5G+1J3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  data-testid="link-google-business-vancouver"
                >
                  View on Google Maps
                </a>
              </div>
              <div className="mt-6">
                <Link href="/book">
                  <Button variant="default" className="font-bold" data-testid="button-footer-quote">
                    GET FREE QUOTE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
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
              <div className="text-center md:text-left text-sm text-white/60 space-y-1">
                <p>Copyright {currentYear} Prestige Moving / Canada.</p>
                <p>50 Colonnade Rd Unit 200B, Ottawa, ON K2E 7J6</p>
                <p>Prestige Moving locations are Canadian owned and operated.</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-white/40">
                <span>Prestige Moving Inc.</span>
                <span>CVOR 208-105-148</span>
                <span>WSIB Certified</span>
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="text-xs text-white/40">
                <p>
                  Designed By:{" "}
                  <a 
                    href="https://ottawaseo.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
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
