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
  Heart, Music, Crown, Dumbbell, Box, Medal, Package, Truck, Lock, FileText, Mail
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import logoUrl from "@assets/transparentlogo_1770071884904.png";

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

export function SharedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleNavClick = (href: string) => {
    setLocation(href);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-[#C5A572] py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <a href="tel:(613) 600-4000" className="flex items-center gap-2 text-[#1A2332] text-sm hover:text-white transition-colors font-medium" data-testid="topbar-phone">
                <Phone className="h-3.5 w-3.5" />
                <span>613-600-4000</span>
              </a>
              <a href="mailto:Ottawa@prestigemoving.ca" className="flex items-center gap-2 text-[#1A2332] text-sm hover:text-white transition-colors font-medium" data-testid="topbar-email">
                <Mail className="h-3.5 w-3.5" />
                <span>Ottawa@prestigemoving.ca</span>
              </a>
              <a href="https://maps.app.goo.gl/5grQGZ18k1GrxuEj7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1A2332] text-sm font-medium hover:text-white transition-colors" data-testid="topbar-address">
                <MapPin className="h-3.5 w-3.5" />
                <span>50 Colonnade Rd unit 200B, Ottawa, ON K2E 7J6</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Navigation - Dark Theme */}
      <nav className="bg-[#1A2332] border-b border-primary/20 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28 gap-6">
            <Link href="/" data-testid="link-logo" className="flex-shrink-0">
              <img 
                src={logoUrl} 
                alt="Prestige Moving" 
                className="h-24 object-contain cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(197,165,114,0.5)]" 
                data-testid="img-logo" 
              />
            </Link>

            <div className="hidden lg:flex items-center gap-4">
              <NavigationMenu delayDuration={0}>
                <NavigationMenuList className="gap-2">
                  <NavigationMenuItem>
                    <button 
                      onClick={() => handleNavClick("/services/residential-moving")}
                      className="group/item relative flex items-center gap-2 px-4 py-2.5 text-white/90 font-medium tracking-wide text-sm uppercase transition-all duration-300 hover:text-white"
                      data-testid="nav-residential"
                    >
                      <HomeIcon className="h-4 w-4 transition-transform duration-300 group-hover/item:scale-110" />
                      <span>Residential</span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover/item:w-4/5 group-hover/item:shadow-[0_0_10px_rgba(197,165,114,0.8),0_0_20px_rgba(197,165,114,0.4)]" />
                    </button>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <button 
                      onClick={() => handleNavClick("/services/commercial-moving")}
                      className="group/item relative flex items-center gap-2 px-4 py-2.5 text-white/90 font-medium tracking-wide text-sm uppercase transition-all duration-300 hover:text-white"
                      data-testid="nav-commercial"
                    >
                      <Building2 className="h-4 w-4 transition-transform duration-300 group-hover/item:scale-110" />
                      <span>Commercial</span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover/item:w-4/5 group-hover/item:shadow-[0_0_10px_rgba(197,165,114,0.8),0_0_20px_rgba(197,165,114,0.4)]" />
                    </button>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <button 
                      onClick={() => handleNavClick("/services/long-distance-moving")}
                      className="group/item relative flex items-center gap-2 px-4 py-2.5 text-white/90 font-medium tracking-wide text-sm uppercase transition-all duration-300 hover:text-white whitespace-nowrap"
                      data-testid="nav-long-distance"
                    >
                      <Truck className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                      <span>Long Distance</span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover/item:w-4/5 group-hover/item:shadow-[0_0_10px_rgba(197,165,114,0.8),0_0_20px_rgba(197,165,114,0.4)]" />
                    </button>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="group/trigger relative text-white/90 font-medium tracking-wide text-sm uppercase !bg-transparent hover:!bg-transparent hover:text-white data-[state=open]:!bg-transparent data-[state=open]:text-white gap-2 transition-all duration-300" data-testid="nav-services-trigger">
                      <Package className="h-4 w-4 transition-transform duration-300 group-hover/trigger:scale-110" />
                      <span>More Services</span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover/trigger:w-4/5 group-data-[state=open]/trigger:w-4/5 group-hover/trigger:shadow-[0_0_10px_rgba(197,165,114,0.8),0_0_20px_rgba(197,165,114,0.4)] group-data-[state=open]/trigger:shadow-[0_0_10px_rgba(197,165,114,0.8),0_0_20px_rgba(197,165,114,0.4)]" />
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
                              className="group/item relative flex items-center gap-3 p-3 rounded-md cursor-pointer w-full text-left transition-all duration-300 hover:bg-primary/5"
                              data-testid={`nav-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <service.icon className="h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                              <div className="flex-1">
                                <div className="font-medium text-sm group-hover/item:text-primary transition-colors duration-300">{service.title}</div>
                                <div className="text-xs text-muted-foreground">{service.description}</div>
                              </div>
                              <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-center shadow-[0_0_8px_rgba(197,165,114,0.6)]" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <button 
                onClick={() => handleNavClick("/blog")}
                className="group/item relative flex items-center gap-2 px-4 py-2.5 text-white/90 font-medium tracking-wide text-sm uppercase transition-all duration-300 hover:text-white"
                data-testid="nav-blog"
              >
                <FileText className="h-4 w-4 transition-transform duration-300 group-hover/item:scale-110" />
                <span>Blog</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover/item:w-4/5 group-hover/item:shadow-[0_0_10px_rgba(197,165,114,0.8),0_0_20px_rgba(197,165,114,0.4)]" />
              </button>

              <Link href="/book">
                <Button variant="default" size="lg" className="font-bold shadow-lg" data-testid="button-get-quote">
                  FREE ESTIMATE
                </Button>
              </Link>
              
              <Link href="/admin">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" data-testid="link-admin-nav">
                  <Lock className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <a href="tel:(613) 600-4000" className="p-2 text-white" data-testid="link-phone-mobile">
                <Phone className="h-5 w-5" />
              </a>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" data-testid="button-mobile-menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#1A2332] border-primary/20 overflow-y-auto">
                  <div className="flex flex-col gap-4 mt-8">
                    <div className="space-y-1">
                      <button
                        onClick={() => {
                          handleNavClick("/");
                          setMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 p-3 rounded-md hover:bg-white/10 cursor-pointer w-full text-left"
                        data-testid="mobile-nav-home"
                      >
                        <HomeIcon className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium text-white">Home</span>
                      </button>
                      {services.map((service) => (
                        <button
                          key={service.href}
                          onClick={() => {
                            handleNavClick(service.href);
                            setMobileMenuOpen(false);
                          }}
                          className="flex items-center gap-3 p-3 rounded-md hover:bg-white/10 cursor-pointer w-full text-left"
                          data-testid={`mobile-nav-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <service.icon className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="font-medium text-white">{service.title}</span>
                        </button>
                      ))}
                      <button
                        onClick={() => {
                          handleNavClick("/blog");
                          setMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-3 p-3 rounded-md hover:bg-white/10 cursor-pointer w-full text-left"
                        data-testid="mobile-nav-blog"
                      >
                        <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium text-white">Blog</span>
                      </button>
                    </div>
                    <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full font-bold" size="lg" data-testid="mobile-get-quote">
                        FREE ESTIMATE
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
