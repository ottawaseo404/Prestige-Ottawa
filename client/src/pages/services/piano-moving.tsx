import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle2, Music, Shield, Truck, ArrowLeft, Award } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import logoUrl from "@assets/originalonglogo_1763689606978.png";

export default function PianoMoving() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Piano Moving Services Vancouver",
    "provider": {
      "@type": "MovingCompany",
      "name": "Prestige Moving Vancouver",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vancouver",
        "addressRegion": "BC",
        "addressCountry": "CA"
      },
      "telephone": "604-000-0000",
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "City",
      "name": "Vancouver"
    },
    "description": "Professional piano moving services in Vancouver. Specialists in grand, baby grand, upright, and digital piano moving. Fully insured with specialized equipment."
  };

  return (
    <>
      <Helmet>
        <title>Piano Moving Services Vancouver | Grand & Upright Piano Movers | Prestige Moving</title>
        <meta name="description" content="Professional piano moving services in Vancouver. Specialists in grand, baby grand, and upright pianos. Specialized equipment, fully insured, climate-controlled transport. Get your quote!" />
        <meta name="keywords" content="piano moving Vancouver, grand piano movers, upright piano moving, piano transport BC, professional piano movers" />
        <meta property="og:title" content="Piano Moving Services Vancouver | Prestige Moving" />
        <meta property="og:description" content="Professional piano moving in Vancouver. Specialized equipment, full insurance, climate-controlled transport for all piano types." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prestigemoving.ca/services/piano-moving" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20 gap-4">
              <div className="flex items-center gap-4">
                <Link href="/">
                  <Button variant="ghost" size="icon" data-testid="button-back">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/">
                  <img src={logoUrl} alt="Prestige Moving Vancouver" className="h-12 w-auto" data-testid="img-logo" />
                </Link>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <a href="tel:604-000-0000" className="flex items-center gap-2 text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md" data-testid="link-phone">
                  <Phone className="h-4 w-4" />
                  <span className="hidden sm:inline">604-000-0000</span>
                </a>
                <Link href="/book">
                  <Button variant="default" size="default" data-testid="button-get-quote">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <section className="relative bg-gradient-to-br from-primary/10 via-accent to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="default" className="mb-4">Piano Moving</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Piano Moving<br />Services in Vancouver
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your piano is a valuable instrument that requires specialized care. Our trained piano movers use professional equipment and techniques to ensure safe transport of grand, baby grand, upright, and digital pianos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" variant="default" className="text-base px-8">
                    Get Piano Moving Quote
                  </Button>
                </Link>
                <a href="tel:604-000-0000">
                  <Button size="lg" variant="outline" className="text-base px-8">
                    <Phone className="h-5 w-5 mr-2" />
                    Call 604-000-0000
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Trust Us With Your Piano?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Specialized expertise and equipment for safe piano transport
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Trained Specialists</CardTitle>
                  <CardDescription>
                    Our team is specifically trained in piano moving techniques and handling
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Truck className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Specialized Equipment</CardTitle>
                  <CardDescription>
                    Piano boards, straps, padding, and climate-controlled trucks
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Full Insurance</CardTitle>
                  <CardDescription>
                    Comprehensive coverage specifically for valuable musical instruments
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-accent/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Types of Pianos We Move
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Music className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Grand & Baby Grand Pianos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Concert grands (9 feet and larger)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Semi-concert and parlor grands</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Baby grands (5-6 feet)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Petite grands (under 5 feet)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Music className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Upright & Console Pianos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Full-size upright pianos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Studio upright pianos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Console and spinet pianos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Antique and vintage uprights</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Music className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Digital & Electric Pianos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Digital grand pianos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Stage pianos and keyboards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Electric pianos with cabinets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Synthesizers and workstations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Specialty Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Stair and elevator navigation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Crane services for difficult access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Climate-controlled storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Tuning referrals after move</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Our Piano Moving Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">1</div>
                <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                <p className="text-sm text-muted-foreground">Evaluate piano type, location, and access points</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">2</div>
                <h3 className="text-lg font-semibold mb-2">Preparation</h3>
                <p className="text-sm text-muted-foreground">Secure lid, wrap with padding, protect keys</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">3</div>
                <h3 className="text-lg font-semibold mb-2">Transport</h3>
                <p className="text-sm text-muted-foreground">Climate-controlled truck with secure strapping</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">4</div>
                <h3 className="text-lg font-semibold mb-2">Placement</h3>
                <p className="text-sm text-muted-foreground">Position in new location, allow to acclimate</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Need to Move Your Piano?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a specialized piano moving quote today. We treat your instrument with the care it deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" variant="secondary" className="text-base px-8">
                  Get Piano Quote
                </Button>
              </Link>
              <a href="tel:604-000-0000">
                <Button size="lg" variant="outline" className="text-base px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <Phone className="h-5 w-5 mr-2" />
                  604-000-0000
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
