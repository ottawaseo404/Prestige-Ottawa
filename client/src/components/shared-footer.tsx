import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logoUrl from "@assets/originalonglogo_1763689606978.png";

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
                Vancouver's trusted moving company providing professional residential and commercial moving services.
              </p>
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
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <div className="space-y-3 text-sm text-white/70">
                <p>Vancouver, BC</p>
                <a href="tel:604-616-6066" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  604-616-6066
                </a>
                <p>info@prestigemoving.ca</p>
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
              <span>WSIB Insured</span>
              <span>•</span>
              <span>BBB A+ Rating</span>
              <span>•</span>
              <span>Fully Licensed</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/50">
              <p>&copy; {currentYear} Prestige Moving Vancouver. All rights reserved.</p>
              <span className="hidden md:inline">•</span>
              <p>
                Website by{" "}
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
