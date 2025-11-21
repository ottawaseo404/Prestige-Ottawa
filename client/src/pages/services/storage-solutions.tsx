import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle2, Warehouse, Shield, Lock, Thermometer, Clock, Package, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import logoUrl from "@assets/originalonglogo_1763689606978.png";

export default function StorageSolutions() {
  return (
    <>
      <Helmet>
        <title>Storage Solutions Vancouver | Secure Moving Storage | Prestige Moving</title>
        <meta name="description" content="Secure storage solutions in Vancouver. Climate-controlled units, flexible terms, WSIB insured. Short-term and long-term storage available. Get your free quote today!" />
        <meta property="og:title" content="Storage Solutions Vancouver | Prestige Moving" />
        <meta property="og:description" content="Secure, climate-controlled storage in Vancouver. Flexible terms, professional handling, full insurance. Perfect for moving transitions." />
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
              <Badge variant="default" className="mb-4">Storage Solutions</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Secure Storage<br />Solutions in Vancouver
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Whether you need short-term storage during your move or long-term solutions, we provide secure, climate-controlled facilities with flexible terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book">
                  <Button size="lg" variant="default" className="text-base px-8">
                    Get Storage Quote
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

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Storage?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Safe, secure, and convenient storage solutions for all your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Fully Insured</CardTitle>
                  <CardDescription>
                    WSIB insurance coverage protects your belongings while in our care
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Lock className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>24/7 Security</CardTitle>
                  <CardDescription>
                    State-of-the-art security systems with monitoring and controlled access
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Thermometer className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Climate Control</CardTitle>
                  <CardDescription>
                    Temperature and humidity controlled to protect sensitive items
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Storage Options */}
        <section className="py-16 md:py-24 bg-accent/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Storage Options
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Short-Term Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Perfect for moving transitions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Flexible day, week, or month terms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Quick access when you need it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>No long-term commitment required</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Warehouse className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Long-Term Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Extended storage solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Competitive monthly rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ideal for downsizing or renovations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Professional inventory management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Package className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Residential Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Household furniture and belongings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Seasonal items and decorations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Sports equipment and toys</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Documents and personal items</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Warehouse className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Commercial Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Office furniture and equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Inventory and stock overflow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Business documents and archives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Seasonal business items</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Store */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              What We Can Store
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-lg bg-accent/30">
                <h3 className="font-semibold mb-3">Furniture</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Sofas & Chairs</li>
                  <li>Tables & Desks</li>
                  <li>Beds & Mattresses</li>
                  <li>Cabinets & Dressers</li>
                </ul>
              </div>

              <div className="text-center p-6 rounded-lg bg-accent/30">
                <h3 className="font-semibold mb-3">Appliances</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Refrigerators</li>
                  <li>Washers & Dryers</li>
                  <li>Ovens & Stoves</li>
                  <li>Small Appliances</li>
                </ul>
              </div>

              <div className="text-center p-6 rounded-lg bg-accent/30">
                <h3 className="font-semibold mb-3">Electronics</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>TVs & Monitors</li>
                  <li>Computers</li>
                  <li>Audio Equipment</li>
                  <li>Office Equipment</li>
                </ul>
              </div>

              <div className="text-center p-6 rounded-lg bg-accent/30">
                <h3 className="font-semibold mb-3">Specialty Items</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Artwork & Antiques</li>
                  <li>Pianos</li>
                  <li>Sports Equipment</li>
                  <li>Seasonal Decorations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-accent/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              How Storage Works
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Quote</h3>
                <p className="text-muted-foreground">
                  Tell us what you need to store
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">We Pick Up</h3>
                <p className="text-muted-foreground">
                  Our team collects your items
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
                <p className="text-muted-foreground">
                  Items safely stored in our facility
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">We Deliver</h3>
                <p className="text-muted-foreground">
                  Items returned when you're ready
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Need Storage Solutions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free quote for secure, climate-controlled storage in Vancouver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" variant="secondary" className="text-base px-8">
                  Get Storage Quote
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
