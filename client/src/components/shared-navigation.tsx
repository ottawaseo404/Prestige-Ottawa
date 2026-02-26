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
  Heart, Music, Crown, Dumbbell, Box, Medal, Package, Truck, Star, Mail, Lock,
  FileText, ChevronRight
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

export function SharedNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const handleNavClick = (href: string) => setLocation(href);
  const isActive = (href: string) => location === href || location.startsWith(href + "/");

  return (
    <div className="sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-[#C5A572]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-9">
            <div className="flex items-center gap-6">
              <a href="tel:613-600-4000" className="flex items-center gap-2 text-[#1A2332] text-xs hover:text-white transition-colors font-semibold" data-testid="topbar-phone">
                <Phone className="h-3 w-3" />
                <span>613-600-4000</span>
              </a>
              <a href="mailto:Ottawa@prestigemoving.ca" className="flex items-center gap-2 text-[#1A2332] text-xs hover:text-white transition-colors font-semibold" data-testid="topbar-email">
                <Mail className="h-3 w-3" />
                <span>Ottawa@prestigemoving.ca</span>
              </a>
              <a href="https://maps.app.goo.gl/5grQGZ18k1GrxuEj7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1A2332] text-xs font-semibold hover:text-white transition-colors" data-testid="topbar-address">
                <MapPin className="h-3 w-3" />
                <span>50 Colonnade Rd unit 200B, Ottawa, ON</span>
              </a>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-[#1A2332] text-[#1A2332]" />
              ))}
              <span className="text-[#1A2332] text-xs ml-1.5 font-semibold">5.0 · 10,000+ Moves</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white" style={{ boxShadow: "0 2px 20px rgba(26,35,50,0.08), 0 1px 0 rgba(197,165,114,0.3)" }}>
        {/* Gold accent bottom border */}
        <div className="absolute left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent 0%, #C5A572 30%, #D4B483 50%, #C5A572 70%, transparent 100%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28 gap-4">

            {/* Logo */}
            <Link href="/" data-testid="link-logo" className="flex-shrink-0 group/logo">
              <img
                src={logoUrl}
                alt="Prestige Moving"
                className="h-28 object-contain cursor-pointer transition-all duration-500 group-hover/logo:scale-105"
                data-testid="img-logo"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              <NavigationMenu delayDuration={0}>
                <NavigationMenuList className="gap-0.5">

                  {/* Residential */}
                  <NavigationMenuItem>
                    <button
                      onClick={() => handleNavClick("/services/residential-moving")}
                      data-testid="nav-residential"
                      className={`group/item flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${isActive("/services/residential-moving") ? "bg-[#C5A572] text-white" : "text-[#1A2332]/70 hover:text-[#1A2332] hover:bg-[#C5A572]/10"}`}
                      style={isActive("/services/residential-moving") ? { boxShadow: "0 0 15px rgba(197,165,114,0.4)" } : undefined}
                    >
                      <HomeIcon className="h-3.5 w-3.5 flex-shrink-0 text-[#C5A572] transition-transform duration-300 group-hover/item:scale-110" />
                      <span>Residential</span>
                    </button>
                  </NavigationMenuItem>

                  {/* Commercial */}
                  <NavigationMenuItem>
                    <button
                      onClick={() => handleNavClick("/services/commercial-moving")}
                      data-testid="nav-commercial"
                      className={`group/item flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${isActive("/services/commercial-moving") ? "bg-[#C5A572] text-white" : "text-[#1A2332]/70 hover:text-[#1A2332] hover:bg-[#C5A572]/10"}`}
                      style={isActive("/services/commercial-moving") ? { boxShadow: "0 0 15px rgba(197,165,114,0.4)" } : undefined}
                    >
                      <Building2 className="h-3.5 w-3.5 flex-shrink-0 text-[#C5A572] transition-transform duration-300 group-hover/item:scale-110" />
                      <span>Commercial</span>
                    </button>
                  </NavigationMenuItem>

                  {/* Long Distance */}
                  <NavigationMenuItem>
                    <button
                      onClick={() => handleNavClick("/services/long-distance-moving")}
                      data-testid="nav-long-distance"
                      className={`group/item flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${isActive("/services/long-distance-moving") ? "bg-[#C5A572] text-white" : "text-[#1A2332]/70 hover:text-[#1A2332] hover:bg-[#C5A572]/10"}`}
                      style={isActive("/services/long-distance-moving") ? { boxShadow: "0 0 15px rgba(197,165,114,0.4)" } : undefined}
                    >
                      <Truck className="h-3.5 w-3.5 flex-shrink-0 text-[#C5A572] transition-transform duration-300 group-hover/item:scale-110" />
                      <span>Long Distance</span>
                    </button>
                  </NavigationMenuItem>

                  {/* More Services Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      data-testid="nav-services-trigger"
                      className="group/trigger flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 text-[#1A2332]/70 hover:text-[#1A2332] hover:bg-[#C5A572]/10 !bg-transparent data-[state=open]:!bg-[#C5A572]/10 data-[state=open]:text-[#1A2332] [&>svg]:hidden"
                    >
                      <Package className="h-3.5 w-3.5 text-[#C5A572] transition-transform duration-300 group-hover/trigger:scale-110" />
                      <span>More Services</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div
                        className="w-[520px] p-3 bg-white"
                        style={{
                          border: "1px solid rgba(197,165,114,0.2)",
                          boxShadow: "0 20px 50px rgba(26,35,50,0.12), 0 0 0 1px rgba(197,165,114,0.1)"
                        }}
                      >
                        <div className="px-3 py-2 mb-2 border-b border-gray-100">
                          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C5A572]">All Moving Services</span>
                        </div>
                        <div className="grid grid-cols-2 gap-0.5">
                          {services.filter(s =>
                            !['Residential Moving', 'Commercial Moving', 'Long Distance Moving'].includes(s.title)
                          ).map((service) => (
                            <button
                              key={service.href}
                              onClick={() => handleNavClick(service.href)}
                              className="group/item flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer w-full text-left transition-all duration-200 hover:bg-[#C5A572]/8"
                              data-testid={`nav-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#C5A572]/10 group-hover/item:bg-[#C5A572]/20 transition-all duration-200">
                                <service.icon className="h-4 w-4 text-[#C5A572]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-[#1A2332] font-semibold text-base group-hover/item:text-[#C5A572] transition-colors truncate">{service.title}</div>
                                <div className="text-[#1A2332]/50 text-sm truncate">{service.description}</div>
                              </div>
                              <ChevronRight className="h-3 w-3 text-[#C5A572]/30 group-hover/item:text-[#C5A572]/70 flex-shrink-0 transition-all duration-200 group-hover/item:translate-x-0.5" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>

              {/* Blog */}
              <button
                onClick={() => handleNavClick("/blog")}
                data-testid="nav-blog"
                className={`group/item flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${isActive("/blog") ? "bg-[#C5A572] text-white" : "text-[#1A2332]/70 hover:text-[#1A2332] hover:bg-[#C5A572]/10"}`}
                style={isActive("/blog") ? { boxShadow: "0 0 15px rgba(197,165,114,0.4)" } : undefined}
              >
                <FileText className="h-3.5 w-3.5 text-[#C5A572] transition-transform duration-300 group-hover/item:scale-110" />
                <span>Blog</span>
              </button>

              {/* Divider */}
              <div className="w-px h-5 bg-gray-200 mx-2" />

              {/* Get Quote CTA */}
              <Link href="/book">
                <button
                  data-testid="button-get-quote"
                  className="relative flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm tracking-widest uppercase overflow-hidden group/cta transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #1A2332 0%, #243047 100%)",
                    color: "#C5A572",
                    boxShadow: "0 4px 15px rgba(26,35,50,0.25)",
                  }}
                >
                  <span className="relative z-10 whitespace-nowrap">Free Estimate</span>
                  <ChevronRight className="h-3.5 w-3.5 relative z-10 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                  <span className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(135deg, #C5A572 0%, #D4B483 100%)" }} />
                  <span className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-[#1A2332] font-bold text-sm tracking-widest uppercase">
                    Free Estimate <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </Link>

              {/* Admin lock */}
              <Link href="/admin">
                <Button variant="ghost" size="icon" className="text-[#1A2332]/30 hover:text-[#1A2332]/60 hover:bg-gray-100" data-testid="link-admin-nav">
                  <Lock className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Mobile Nav */}
            <div className="lg:hidden flex items-center gap-2">
              <a href="tel:613-600-4000" className="p-2 text-[#C5A572]" data-testid="link-phone-mobile">
                <Phone className="h-5 w-5" />
              </a>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" data-testid="button-mobile-menu" className="text-[#1A2332] hover:bg-[#C5A572]/10">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-[360px] border-l border-[#C5A572]/20 overflow-y-auto p-0 bg-white"
                >
                  <div className="flex flex-col gap-0 mt-12">
                    <div className="px-6 pb-4 border-b border-gray-100">
                      <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C5A572]">Navigation</p>
                    </div>
                    <div className="p-3 space-y-0.5">
                      <button
                        onClick={() => { handleNavClick("/"); setMobileMenuOpen(false); }}
                        className="flex items-center gap-3 px-4 py-3 rounded-md w-full text-left text-[#1A2332]/80 hover:text-[#C5A572] hover:bg-[#C5A572]/8 transition-all duration-200"
                        data-testid="mobile-nav-home"
                      >
                        <HomeIcon className="h-4 w-4 text-[#C5A572] flex-shrink-0" />
                        <span className="font-semibold text-sm">Home</span>
                      </button>
                      {services.map((service) => (
                        <button
                          key={service.href}
                          onClick={() => { handleNavClick(service.href); setMobileMenuOpen(false); }}
                          className="flex items-center gap-3 px-4 py-3 rounded-md w-full text-left text-[#1A2332]/80 hover:text-[#C5A572] hover:bg-[#C5A572]/8 transition-all duration-200"
                          data-testid={`mobile-nav-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <service.icon className="h-4 w-4 text-[#C5A572] flex-shrink-0" />
                          <span className="font-semibold text-sm">{service.title}</span>
                        </button>
                      ))}
                      <button
                        onClick={() => { handleNavClick("/blog"); setMobileMenuOpen(false); }}
                        className="flex items-center gap-3 px-4 py-3 rounded-md w-full text-left text-[#1A2332]/80 hover:text-[#C5A572] hover:bg-[#C5A572]/8 transition-all duration-200"
                        data-testid="mobile-nav-blog"
                      >
                        <FileText className="h-4 w-4 text-[#C5A572] flex-shrink-0" />
                        <span className="font-semibold text-sm">Blog</span>
                      </button>
                    </div>
                    <div className="p-4 mt-2">
                      <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                        <button
                          data-testid="mobile-get-quote"
                          className="w-full py-3.5 rounded-full font-bold text-sm tracking-widest uppercase text-[#C5A572]"
                          style={{
                            background: "linear-gradient(135deg, #1A2332 0%, #243047 100%)",
                            boxShadow: "0 4px 15px rgba(26,35,50,0.2)"
                          }}
                        >
                          Get Free Estimate
                        </button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}
