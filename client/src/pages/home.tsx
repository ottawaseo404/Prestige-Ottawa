import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle2, Award, Clock, Shield, TruckIcon, Package, Home as HomeIcon, Building2, MapPin } from "lucide-react";
import { Link } from "wouter";
import logoUrl from "@assets/f_1763665441943.png";
import { packageTypes, type PackageType } from "@shared/schema";

export default function Home() {
  const packages: PackageType[] = ["Premium", "Deluxe", "Diamond"];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-4">
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="Prestige Moving" className="h-10 w-auto" data-testid="img-logo" />
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-foreground">Prestige Moving</h1>
                <p className="text-xs text-muted-foreground">Vancouver</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
              <a href="tel:604-000-0000" className="flex items-center gap-2 text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md" data-testid="link-phone">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">604-000-0000</span>
              </a>
              <Link href="/book">
                <Button variant="default" size="default" data-testid="button-get-quote">
                  Get Instant Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-accent to-background">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center z-10">
          <Badge variant="secondary" className="mb-6" data-testid="badge-location">
            Vancouver's Premium Moving Service
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Professional Moving<br />You Can Trust
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Transparent pricing, experienced movers, and WSIB insurance. Moving made simple in Vancouver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/book">
              <Button size="lg" variant="default" className="text-base px-8" data-testid="button-book-now">
                Book Your Move
              </Button>
            </Link>
            <a href="tel:604-000-0000">
              <Button size="lg" variant="outline" className="text-base px-8" data-testid="button-call-now">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2" data-testid="stat-moves">
              <div className="text-3xl md:text-4xl font-bold text-primary">10,000+</div>
              <div className="text-sm text-muted-foreground">Happy Moves</div>
            </div>
            <div className="flex flex-col items-center gap-2" data-testid="stat-rating">
              <div className="text-3xl md:text-4xl font-bold text-primary">5.0</div>
              <div className="text-sm text-muted-foreground">Star Rating</div>
            </div>
            <div className="flex flex-col items-center gap-2" data-testid="stat-insurance">
              <Shield className="h-10 w-10 text-primary" />
              <div className="text-sm text-muted-foreground">WSIB Insured</div>
            </div>
            <div className="flex flex-col items-center gap-2" data-testid="stat-experience">
              <Award className="h-10 w-10 text-primary" />
              <div className="text-sm text-muted-foreground">BBB Accredited</div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Moving Package
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored packages to suit different moving needs with professional service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((packageKey, index) => {
              const pkg = packageTypes[packageKey];
              const isFeatured = packageKey === "Diamond";
              return (
                <Card 
                  key={packageKey} 
                  className={`relative ${isFeatured ? 'border-primary shadow-lg' : ''}`}
                  data-testid={`card-package-${packageKey.toLowerCase()}`}
                >
                  {isFeatured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge variant="default" className="px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="space-y-0 pb-4">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-sm pt-2">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-foreground" data-testid={`text-price-${packageKey.toLowerCase()}`}>
                        ${pkg.hourlyRate}/hr
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Minimum {pkg.minimumHours} hours + ${pkg.travelFee} travel fee
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <TruckIcon className="h-4 w-4 text-primary" />
                        {pkg.movers} Movers • {pkg.truck} Truck
                      </div>
                    </div>

                    <div className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-2 text-sm" data-testid={`feature-${packageKey.toLowerCase()}-${idx}`}>
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/book" className="w-full">
                      <Button 
                        variant={isFeatured ? "default" : "outline"} 
                        className="w-full"
                        data-testid={`button-book-${packageKey.toLowerCase()}`}
                      >
                        Book {pkg.name}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Moving Services
            </h3>
            <p className="text-lg text-muted-foreground">
              Complete moving solutions for every need in Vancouver
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: HomeIcon, title: "Residential Moving", description: "Apartment and house moves handled with care" },
              { icon: Building2, title: "Commercial Moving", description: "Office relocations with minimal downtime" },
              { icon: MapPin, title: "Long Distance", description: "Moves across BC and beyond" },
              { icon: Package, title: "Packing Services", description: "Professional packing materials and expertise" },
              { icon: TruckIcon, title: "Storage Solutions", description: "Secure storage for your belongings" },
              { icon: Shield, title: "Furniture Assembly", description: "Disassembly and reassembly included" },
            ].map((service, idx) => (
              <Card key={idx} className="hover-elevate" data-testid={`card-service-${idx}`}>
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Prestige Moving
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4" data-testid="feature-pricing">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Transparent Pricing</h4>
              <p className="text-muted-foreground">No hidden fees. Just honest, competitive rates you can trust.</p>
            </div>
            <div className="text-center space-y-4" data-testid="feature-delivery">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">On-Time, Every Time</h4>
              <p className="text-muted-foreground">We value your time and always deliver as promised.</p>
            </div>
            <div className="text-center space-y-4" data-testid="feature-insured">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Fully Insured</h4>
              <p className="text-muted-foreground">WSIB licensed and insured for your complete peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Move?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Get your instant quote or speak with our moving experts today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" variant="default" className="text-base px-8" data-testid="button-cta-quote">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:604-000-0000">
              <Button size="lg" variant="outline" className="text-base px-8" data-testid="button-cta-call">
                <Phone className="h-5 w-5 mr-2" />
                604-000-0000
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={logoUrl} alt="Prestige Moving" className="h-12 w-auto mb-4" />
              <p className="text-sm text-muted-foreground">
                Vancouver's trusted moving company since 2010
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Vancouver, BC</p>
                <p>Phone: 604-000-0000</p>
                <p>Email: info@prestigemoving.ca</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Residential Moving</p>
                <p>Commercial Moving</p>
                <p>Packing Services</p>
                <p>Storage Solutions</p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Prestige Moving Vancouver. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
