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
  Heart, Music, Crown, Dumbbell, Box, Medal, Package, Truck, Lock, FileText, Mail,
  ChevronRight, Star
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

const primaryNav = [
  { label: "Residential", icon: HomeIcon, href: "/services/residential-moving", testId: "nav-residential" },
  { label: "Commercial", icon: Building2, href: "/services/commercial-moving", testId: "nav-commercial" },
  { label: "Long Distance", icon: Truck, href: "/services/long-distance-moving", testId: "nav-long-distance" },
];

export function SharedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, navigate] = useLocation();
  const [location] = useLocation();

  const handleNavClick = (href: string) => navigate(href);

  const isActive = (href: string) => location === href || location.startsWith(href + "/");

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden md:block" style={{ background: "linear-gradient(90deg, #1A2332 0%, #243047 50%, #1A2332 100%)", borderBottom: "1px solid rgba(197,165,114,0.2)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-9">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-[#C5A572] text-[#C5A572]" />
              ))}
              <span className="text-[#C5A572]/80 text-xs ml-2 font-medium tracking-wider">5.0 Google Rating · 10,000+ Moves</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:613-600-4000" className="flex items-center gap-2 text-white/70 text-xs hover:text-[#C5A572] transition-colors font-medium tracking-wide" data-testid="topbar-phone">
                <Phone className="h-3 w-3" />
                <span>613-600-4000</span>
              </a>
              <a href="mailto:Ottawa@prestigemoving.ca" className="flex items-center gap-2 text-white/70 text-xs hover:text-[#C5A572] transition-colors font-medium tracking-wide" data-testid="topbar-email">
                <Mail className="h-3 w-3" />
                <span>Ottawa@prestigemoving.ca</span>
              </a>
              <a href="https://maps.app.goo.gl/5grQGZ18k1GrxuEj7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 text-xs font-medium hover:text-[#C5A572] transition-colors tracking-wide" data-testid="topbar-address">
                <MapPin className="h-3 w-3" />
                <span>Ottawa, ON</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className="sticky top-0 z-50"
        style={{
          background: "linear-gradient(180deg, #0F1924 0%, #1A2332 100%)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.5), 0 1px 0 rgba(197,165,114,0.15)"
        }}
      >
        {/* Animated shimmer bottom border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1.5px]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(197,165,114,0.15) 20%, rgba(197,165,114,0.7) 50%, rgba(197,165,114,0.15) 80%, transparent 100%)"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 gap-4">

            {/* Logo */}
            <Link href="/" data-testid="link-logo" className="flex-shrink-0 group/logo">
              <img
                src={logoUrl}
                alt="Prestige Moving"
                className="h-20 object-contain cursor-pointer transition-all duration-500 group-hover/logo:scale-105"
                style={{ filter: "drop-shadow(0 0 12px rgba(197,165,114,0.3))" }}
                data-testid="img-logo"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              <NavigationMenu delayDuration={0}>
                <NavigationMenuList className="gap-0.5">

                  {/* Primary nav items */}
                  {primaryNav.map(({ label, icon: Icon, href, testId }) => (
                    <NavigationMenuItem key={href}>
                      <button
                        onClick={() => handleNavClick(href)}
                        data-testid={testId}
                        className={`
                          group/item relative flex items-center gap-2.5 px-4 py-2 rounded-full
                          text-xs font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap
                          ${isActive(href)
                            ? "text-[#1A2332] bg-[#C5A572]"
                            : "text-white/70 hover:text-[#C5A572] hover:bg-[#C5A572]/10"
                          }
                        `}
                        style={isActive(href)
                          ? { boxShadow: "0 0 20px rgba(197,165,114,0.5), 0 0 40px rgba(197,165,114,0.2)" }
                          : undefined
                        }
                      >
                        <Icon className={`h-3.5 w-3.5 flex-shrink-0 transition-all duration-300 ${isActive(href) ? "text-[#1A2332]" : "group-hover/item:text-[#C5A572] group-hover/item:scale-110"}`} />
                        <span>{label}</span>
                      </button>
                    </NavigationMenuItem>
                  ))}

                  {/* More Services Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      data-testid="nav-services-trigger"
                      className="
                        group/trigger flex items-center gap-2.5 px-4 py-2 rounded-full
                        text-xs font-bold tracking-widest uppercase transition-all duration-300
                        text-white/70 hover:text-[#C5A572] hover:bg-[#C5A572]/10
                        !bg-transparent data-[state=open]:!bg-[#C5A572]/10 data-[state=open]:text-[#C5A572]
                        [&>svg]:hidden
                      "
                    >
                      <Package className="h-3.5 w-3.5 transition-all duration-300 group-hover/trigger:text-[#C5A572] group-hover/trigger:scale-110" />
                      <span>More Services</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div
                        className="w-[520px] p-3"
                        style={{
                          background: "linear-gradient(145deg, #0F1924 0%, #1A2332 100%)",
                          border: "1px solid rgba(197,165,114,0.25)",
                          boxShadow: "0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(197,165,114,0.1), inset 0 1px 0 rgba(197,165,114,0.1)"
                        }}
                      >
                        <div className="px-3 py-2 mb-2">
                          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C5A572]/60">All Services</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {services.filter(s =>
                            !['Residential Moving', 'Commercial Moving', 'Long Distance Moving'].includes(s.title)
                          ).map((service) => (
                            <button
                              key={service.href}
                              onClick={() => handleNavClick(service.href)}
                              className="group/item flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer w-full text-left transition-all duration-200 hover:bg-[#C5A572]/10"
                              data-testid={`nav-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover/item:bg-[#C5A572]/20" style={{ background: "rgba(197,165,114,0.1)" }}>
                                <service.icon className="h-4 w-4 text-[#C5A572]/70 group-hover/item:text-[#C5A572] transition-colors" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-white/85 font-semibold text-xs group-hover/item:text-[#C5A572] transition-colors truncate">{service.title}</div>
                                <div className="text-white/40 text-[11px] truncate">{service.description}</div>
                              </div>
                              <ChevronRight className="h-3 w-3 text-white/20 group-hover/item:text-[#C5A572]/60 flex-shrink-0 transition-all duration-200 group-hover/item:translate-x-0.5" />
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
                className={`
                  group/item flex items-center gap-2.5 px-4 py-2 rounded-full
                  text-xs font-bold tracking-widest uppercase transition-all duration-300
                  ${isActive("/blog")
                    ? "text-[#1A2332] bg-[#C5A572]"
                    : "text-white/70 hover:text-[#C5A572] hover:bg-[#C5A572]/10"
                  }
                `}
                style={isActive("/blog") ? { boxShadow: "0 0 20px rgba(197,165,114,0.5)" } : undefined}
              >
                <FileText className="h-3.5 w-3.5 transition-all duration-300 group-hover/item:scale-110" />
                <span>Blog</span>
              </button>

              {/* Divider */}
              <div className="w-px h-6 bg-white/10 mx-2" />

              {/* Get Quote CTA */}
              <Link href="/book">
                <button
                  data-testid="button-get-quote"
                  className="relative flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 overflow-hidden group/cta"
                  style={{
                    background: "linear-gradient(135deg, #C5A572 0%, #D4B483 50%, #C5A572 100%)",
                    color: "#1A2332",
                    boxShadow: "0 0 20px rgba(197,165,114,0.4), 0 4px 15px rgba(0,0,0,0.3)",
                  }}
                >
                  <span className="relative z-10 whitespace-nowrap">Free Estimate</span>
                  <ChevronRight className="h-3.5 w-3.5 relative z-10 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                  <span
                    className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(135deg, #D4B483 0%, #E5C994 50%, #D4B483 100%)" }}
                  />
                </button>
              </Link>

              {/* Admin lock */}
              <Link href="/admin">
                <Button variant="ghost" size="icon" className="text-white/30 hover:text-white/60 hover:bg-white/5" data-testid="link-admin-nav">
                  <Lock className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Mobile Nav */}
            <div className="lg:hidden flex items-center gap-2">
              <a href="tel:(613) 600-4000" className="p-2 text-[#C5A572]" data-testid="link-phone-mobile">
                <Phone className="h-5 w-5" />
              </a>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid="button-mobile-menu"
                    className="text-white/70 hover:bg-[#C5A572]/10 hover:text-[#C5A572]"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-[360px] border-l border-[#C5A572]/20 overflow-y-auto p-0"
                  style={{ background: "linear-gradient(180deg, #0F1924 0%, #1A2332 100%)" }}
                >
                  <div className="flex flex-col gap-0 mt-12">
                    {/* Header */}
                    <div className="px-6 pb-4 border-b border-white/10">
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C5A572]/60">Navigation</p>
                    </div>

                    {/* Nav Items */}
                    <div className="p-3 space-y-0.5">
                      <button
                        onClick={() => { handleNavClick("/"); setMobileMenuOpen(false); }}
                        className="flex items-center gap-3 px-4 py-3 rounded-md w-full text-left text-white/80 hover:text-[#C5A572] hover:bg-[#C5A572]/10 transition-all duration-200"
                        data-testid="mobile-nav-home"
                      >
                        <HomeIcon className="h-4 w-4 text-[#C5A572]/70 flex-shrink-0" />
                        <span className="font-semibold text-sm">Home</span>
                      </button>

                      {services.map((service) => (
                        <button
                          key={service.href}
                          onClick={() => { handleNavClick(service.href); setMobileMenuOpen(false); }}
                          className="flex items-center gap-3 px-4 py-3 rounded-md w-full text-left text-white/80 hover:text-[#C5A572] hover:bg-[#C5A572]/10 transition-all duration-200"
                          data-testid={`mobile-nav-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <service.icon className="h-4 w-4 text-[#C5A572]/70 flex-shrink-0" />
                          <span className="font-semibold text-sm">{service.title}</span>
                        </button>
                      ))}

                      <button
                        onClick={() => { handleNavClick("/blog"); setMobileMenuOpen(false); }}
                        className="flex items-center gap-3 px-4 py-3 rounded-md w-full text-left text-white/80 hover:text-[#C5A572] hover:bg-[#C5A572]/10 transition-all duration-200"
                        data-testid="mobile-nav-blog"
                      >
                        <FileText className="h-4 w-4 text-[#C5A572]/70 flex-shrink-0" />
                        <span className="font-semibold text-sm">Blog</span>
                      </button>
                    </div>

                    {/* CTA */}
                    <div className="p-4 mt-2">
                      <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                        <button
                          data-testid="mobile-get-quote"
                          className="w-full py-3.5 rounded-full font-bold text-sm tracking-widest uppercase"
                          style={{
                            background: "linear-gradient(135deg, #C5A572 0%, #D4B483 100%)",
                            color: "#1A2332",
                            boxShadow: "0 0 25px rgba(197,165,114,0.4)"
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
    </>
  );
}
