import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle2, GraduationCap, DollarSign, Shield, Clock, ArrowLeft, Backpack } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import logoUrl from "@assets/originalonglogo_1763689606978.png";

export default function StudentMoving() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Student Moving Services Vancouver",
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
      "priceRange": "$"
    },
    "areaServed": {
      "@type": "City",
      "name": "Vancouver"
    },
    "description": "Affordable student moving services in Vancouver. Budget-friendly rates for UBC, SFU, BCIT, and Langara students. Professional movers for dorm and apartment moves."
  };

  return (
    <>
      <Helmet>
        <title>Student Moving Services Vancouver | Affordable UBC, SFU Movers | Prestige Moving</title>
        <meta name="description" content="Affordable student moving services in Vancouver. Special rates for UBC, SFU, BCIT, Langara students. Dorm, apartment moves. Budget-friendly, professional service. Book today!" />
        <meta name="keywords" content="student moving Vancouver, UBC movers, SFU moving service, BCIT student movers, affordable student moving, dorm moving Vancouver" />
        <meta property="og:title" content="Student Moving Services Vancouver | Prestige Moving" />
        <meta property="og:description" content="Affordable student moving in Vancouver. Special rates for university students. Professional, budget-friendly service." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prestigemoving.ca/services/student-moving" />
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
              <Badge variant="default" className="mb-4">Student Moving</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Student Moving<br />Services in Vancouver
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Affordable, reliable moving services designed for students. Special rates for UBC, SFU, BCIT, and Langara students. We understand student budgets and schedules.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" variant="default" className="text-base px-8">
                    Get Student Quote
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
                Why Students Choose Prestige Moving
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by thousands of Vancouver students for affordable, hassle-free moves
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Student-Friendly Pricing</CardTitle>
                  <CardDescription>
                    Special discounted rates exclusively for students. Show your student ID and save!
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Flexible Scheduling</CardTitle>
                  <CardDescription>
                    We work around your class schedule, exams, and semester end dates
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Fully Insured</CardTitle>
                  <CardDescription>
                    Your belongings are protected with our comprehensive insurance coverage
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-accent/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Student Moving Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <GraduationCap className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>University Campus Moves</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>UBC residence and off-campus housing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>SFU Burnaby, Surrey, and Vancouver</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>BCIT Burnaby and Downtown campus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Langara, Douglas, Capilano colleges</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Backpack className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Dorm & Apartment Moves</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Dorm room move-in and move-out</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Shared apartment relocations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Studio and bachelor moves</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Summer storage solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <DollarSign className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Budget-Friendly Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Hourly rates starting from $99/hr</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>No hidden fees or surprise charges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Share-a-truck options available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Group discounts for roommates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Semester Timing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>September move-in rush availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>April/May semester-end moves</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Co-op term relocations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>International student moves</span>
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
              Vancouver Campuses We Serve
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg bg-accent/30">
                <GraduationCap className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">UBC</h3>
                <p className="text-sm text-muted-foreground">Point Grey, Wesbrook Village, University Village</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-accent/30">
                <GraduationCap className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">SFU</h3>
                <p className="text-sm text-muted-foreground">Burnaby Mountain, Surrey, Harbour Centre</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-accent/30">
                <GraduationCap className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">BCIT</h3>
                <p className="text-sm text-muted-foreground">Burnaby Campus, Downtown Campus</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-accent/30">
                <GraduationCap className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Other Colleges</h3>
                <p className="text-sm text-muted-foreground">Langara, Douglas, Capilano, KPU</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Student Discount Available!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Show your valid student ID and save on your move. Get your free quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" variant="secondary" className="text-base px-8">
                  Get Student Quote
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
