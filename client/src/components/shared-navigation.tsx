import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  Phone, Home as HomeIcon, Building2, MapPin, Menu, Warehouse, GraduationCap, 
  Heart, Music, Crown, Dumbbell, Box, Medal, Package, Truck
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import logoUrl from "@assets/originalonglogo_1763689606978.png";

const services = [
  { title: "Residential Moving", description: "Apartments, condos, and houses", icon: HomeIcon, href: "/services/residential-moving" },
  { title: "Commercial Moving", description: "Office relocations and business moves", icon: Building2, href: "/services/commercial-moving" },
  { title: "Long Distance Moving", description: "Cross-BC and Canada-wide moves", icon: MapPin, href: "/services/long-distance-moving" },
  { title: "Packing Services", description: "Professional packing and materials", icon: Package, href: "/services/packing-services" },
  { title: "Moving Supplies", description: "Boxes, tape, and packing materials", icon: Box, href: "/services/moving-supplies" },
  { title: "Student Moving", description: "Affordable moves for students", icon: GraduationCap, href: "/services/student-moving" },
  { title: "Storage Solutions", description: "Secure climate-controlled storage", icon: Warehouse, href: "/services/storage-solutions" },
  { title: "Specialty Item Moving", description: "Hot tubs, pool tables, gym equipment", icon: Dumbbell, href: "/services/specialty-item-moving" },
  { title: "Antique Moving", description: "Careful handling of valuables", icon: Crown, href: "/services/antique-moving" },
  { title: "Piano Moving", description: "Specialized piano transport", icon: Music, href: "/services/piano-moving" },
  { title: "Senior Moving", description: "Compassionate elderly relocations", icon: Heart, href: "/services/senior-moving" },
  { title: "Military Moving", description: "PCS moves and base relocations", icon: Medal, href: "/services/military-moving" }
];

export function SharedNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const handleNavClick = (href: string) => {
    setLocation(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#1A2332] border-b border-primary/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 gap-6">
          <Link href="/" data-testid="link-logo" className="flex-shrink-0">
            <img 
              src={logoUrl} 
              alt="Prestige Moving" 
              className="h-20 w-auto object-contain cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(197,165,114,0.5)]" 
              data-testid="img-logo" 
            />
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <button 
                    onClick={() => handleNavClick("/services/residential-moving")}
                    className="flex items-center gap-2 px-4 py-2 text-white font-medium hover:text-primary transition-colors"
                    data-testid="nav-residential"
                  >
                    <HomeIcon className="h-4 w-4" />
                    Residential
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button 
                    onClick={() => handleNavClick("/services/commercial-moving")}
                    className="flex items-center gap-2 px-4 py-2 text-white font-medium hover:text-primary transition-colors"
                    data-testid="nav-commercial"
                  >
                    <Building2 className="h-4 w-4" />
                    Commercial
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button 
                    onClick={() => handleNavClick("/services/long-distance-moving")}
                    className="flex items-center gap-2 px-4 py-2 text-white font-medium hover:text-primary transition-colors whitespace-nowrap"
                    data-testid="nav-long-distance"
                  >
                    <Truck className="h-4 w-4 flex-shrink-0" />
                    Long Distance
                  </button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white font-medium bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10 gap-2" data-testid="nav-services-trigger">
                    <Package className="h-4 w-4" />
                    More Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-background">
                      <div className="space-y-1">
                        {services.filter(s => 
                          !['Residential Moving', 'Commercial Moving', 'Long Distance Moving'].includes(s.title)
                        ).map((service) => (
                          <button
                            key={service.href}
                            onClick={() => handleNavClick(service.href)}
                            className="flex items-center gap-3 p-3 rounded-md hover-elevate cursor-pointer w-full text-left"
                            data-testid={`nav-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <service.icon className="h-5 w-5 text-primary flex-shrink-0" />
                            <div>
                              <div className="font-medium text-sm">{service.title}</div>
                              <div className="text-xs text-muted-foreground">{service.description}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="tel:604-616-6066">
              <Button variant="outline" size="lg" className="font-bold border-2 border-white text-white hover:bg-white hover:text-[#1A2332]" data-testid="button-call-us">
                <Phone className="h-5 w-5 mr-2" />
                CALL US
              </Button>
            </a>

            <Link href="/book">
              <Button variant="default" size="lg" className="font-bold shadow-lg" data-testid="button-get-quote">
                FREE ESTIMATE
              </Button>
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <a href="tel:604-616-6066" className="p-2 text-white" data-testid="link-phone-mobile">
              <Phone className="h-5 w-5" />
            </a>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#1A2332] border-primary/20">
                <div className="flex flex-col gap-6 mt-8">
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-white">Services</h3>
                    <div className="space-y-1 max-h-[60vh] overflow-y-auto">
                      {services.map((service) => (
                        <button
                          key={service.href}
                          onClick={() => {
                            handleNavClick(service.href);
                            setMobileMenuOpen(false);
                          }}
                          className="flex items-center gap-3 p-3 rounded-md hover:bg-white/10 cursor-pointer w-full text-left"
                          data-testid={`mobile-nav-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <service.icon className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="font-medium text-white">{service.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <Link href="/book">
                    <Button variant="default" className="w-full font-bold" size="lg" onClick={() => setMobileMenuOpen(false)} data-testid="button-mobile-quote">
                      GET FREE ESTIMATE
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
