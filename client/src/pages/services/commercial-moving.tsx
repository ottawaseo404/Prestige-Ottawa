import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle2, Building2, TruckIcon, Package, Shield, Clock, Briefcase, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import logoUrl from "@assets/originalonglogo_1763689606978.png";

export default function CommercialMoving() {
  return (
    <>
      <Helmet>
        <title>Commercial Moving Services Vancouver | Office Movers | Prestige Moving</title>
        <meta name="description" content="Professional commercial moving services in Vancouver. Office relocations, business moves, IT equipment handling. Minimize downtime with experienced commercial movers. Free consultation!" />
        <meta property="og:title" content="Commercial Moving Services Vancouver | Prestige Moving" />
        <meta property="og:description" content="Vancouver's trusted commercial movers. Office relocations, business moves, minimal downtime. Professional, insured, and efficient." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Navigation */}
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
                  <img src={logoUrl} alt="Prestige Moving" className="h-12 w-auto" data-testid="img-logo" />
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

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-accent to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="default" className="mb-4">Commercial Moving</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Vancouver Commercial<br />& Office Movers
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Minimize downtime and maximize efficiency with our professional commercial moving services. From small offices to large corporate relocations, we handle every detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" variant="default" className="text-base px-8">
                    Request Consultation
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

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Commercial Moving Experts
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by Vancouver businesses for efficient, professional office relocations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Minimal Downtime</CardTitle>
                  <CardDescription>
                    Strategic planning and efficient execution to keep your business running
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Fully Insured</CardTitle>
                  <CardDescription>
                    WSIB coverage and liability insurance protects your valuable business assets
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Briefcase className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Project Management</CardTitle>
                  <CardDescription>
                    Dedicated move coordinator to oversee every aspect of your relocation
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24 bg-accent/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Commercial Moving Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Building2 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Office Relocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Complete office moves - small to large</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Furniture disassembly and reassembly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Cubicle and workstation setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>After-hours and weekend moves</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TruckIcon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>IT & Equipment Moving</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Server and network equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Desktop computers and monitors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Printers and copiers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Cable management and labeling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Package className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Warehouse & Retail</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Retail store relocations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Warehouse moves and reconfiguration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Inventory and stock handling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Shelving and racking systems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Briefcase className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Specialized Moving</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Medical office equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Restaurant and hospitality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Laboratory and industrial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Gym and fitness equipment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Our Commercial Moving Process
            </h2>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Site visit and needs assessment
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed timeline and logistics
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Preparation</h3>
                <p className="text-sm text-muted-foreground">
                  Packing and labeling systems
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Execute</h3>
                <p className="text-sm text-muted-foreground">
                  Professional move day
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Setup</h3>
                <p className="text-sm text-muted-foreground">
                  Unpack and arrange new space
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Plan Your Commercial Move
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free consultation and customized moving plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" variant="secondary" className="text-base px-8">
                  Request Consultation
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
