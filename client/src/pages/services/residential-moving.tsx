import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle2, Home, TruckIcon, Package, Shield, Clock, Users } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";

export default function ResidentialMoving() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Moving Services Vancouver",
    "provider": {
      "@type": "MovingCompany",
      "name": "Prestige Moving Vancouver",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vancouver",
        "addressRegion": "BC",
        "addressCountry": "CA"
      },
      "telephone": "604-616-6066",
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "City",
      "name": "Vancouver"
    },
    "description": "Professional residential moving services in Vancouver. Experienced movers for apartments, condos, and houses. WSIB insured with transparent pricing."
  };

  return (
    <>
      <Helmet>
        <title>Residential Moving Services Vancouver BC | Home Movers | Prestige Moving</title>
        <meta name="description" content="Professional residential moving services in Vancouver BC. Experienced movers, WSIB insured, transparent pricing. Apartments, condos, houses. Get your free quote today!" />
        <meta name="keywords" content="residential moving Vancouver, home movers BC, apartment moving, condo moving Vancouver, house moving service" />
        <meta property="og:title" content="Residential Moving Services Vancouver | Prestige Moving" />
        <meta property="og:description" content="Vancouver's trusted residential movers. From studio apartments to 5-bedroom homes. Professional, insured, and affordable." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prestigemoving.ca/services/residential-moving" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-accent to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="default" className="mb-4">Residential Moving</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Vancouver's Trusted<br />Residential Movers
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From studio apartments to large family homes, we handle your residential move with care and professionalism. WSIB insured, transparent pricing, and experienced movers you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" variant="default" className="text-base px-8">
                    Get Free Quote
                  </Button>
                </Link>
                <a href="tel:604-616-6066">
                  <Button size="lg" variant="outline" className="text-base px-8">
                    <Phone className="h-5 w-5 mr-2" />
                    Call 604-616-6066
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Prestige Moving?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We've helped over 10,000 Vancouver families move safely and efficiently
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Fully Insured</CardTitle>
                  <CardDescription>
                    WSIB insurance coverage protects you and our team throughout your entire move
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Experienced Team</CardTitle>
                  <CardDescription>
                    Professional movers trained in safe handling, packing, and efficient moving techniques
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>On-Time Service</CardTitle>
                  <CardDescription>
                    We respect your schedule with punctual arrival and efficient completion
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="py-16 md:py-24 bg-accent/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Residential Moving Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Home className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Apartment & Condo Moving</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Studio to 3-bedroom apartments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Elevator and stair navigation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Building protection and coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Parking and access management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TruckIcon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>House Moving</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>1-5 bedroom homes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Townhouses and duplexes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Garage and outdoor items</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Heavy furniture and appliances</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Package className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Full-Service Packing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Professional packing materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Fragile item protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Furniture wrapping and padding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Box labeling and organization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Specialty Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Pianos and instruments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Artwork and antiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Electronics and appliances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Exercise equipment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Simple Moving Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Get a Quote</h3>
                <p className="text-muted-foreground">
                  Fill out our online form or call for instant pricing
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Book Your Move</h3>
                <p className="text-muted-foreground">
                  Choose your date and package that fits your needs
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">We Move You</h3>
                <p className="text-muted-foreground">
                  Our team arrives on time and handles everything professionally
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Settle In</h3>
                <p className="text-muted-foreground">
                  Relax in your new home - we'll take care of the heavy lifting
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Move?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get your free, no-obligation quote today. Most moves quoted within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" variant="secondary" className="text-base px-8">
                  Get Free Quote
                </Button>
              </Link>
              <a href="tel:604-616-6066">
                <Button size="lg" variant="outline" className="text-base px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <Phone className="h-5 w-5 mr-2" />
                  604-616-6066
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
