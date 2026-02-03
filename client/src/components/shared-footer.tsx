import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import logoUrl from "@assets/originalonglogo_1763689606978.png";
import { WorkSafeBadge } from "@/components/worksafe-badge";

export function SharedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#1A2332] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
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
              </div>
              <h4 className="font-bold text-lg mb-4 mt-8">Resources</h4>
              <div className="space-y-2 text-sm text-white/70">
                <Link href="/blog" className="block hover:text-primary transition-colors">Moving Tips Blog</Link>
                <Link href="/calculator" className="block hover:text-primary transition-colors">Moving Calculator</Link>
                <Link href="/contact" className="block hover:text-primary transition-colors">Contact Us</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm text-white/70">
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
                  data-testid="link-google-business"
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
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-white/50">
              <span>WSIB Certified</span>
              <span>•</span>
              <span>5.0 Stars on Google (349 Reviews)</span>
              <span>•</span>
              <span>Fully Licensed & Insured</span>
            </div>
            <div className="text-sm text-white/50">
              <p>
                Copyright © {currentYear} PrestigeMoving.ca – Website Designed by{" "}
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
      </footer>
    </>
  );
}
