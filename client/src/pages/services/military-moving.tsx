import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle2, Shield, Award, Clock, ArrowLeft, Star, FileCheck } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import logoUrl from "@assets/originalonglogo_1763689606978.png";

export default function MilitaryMoving() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Military Moving Services Vancouver",
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
    "description": "Professional military moving services in Vancouver. PCS moves, military base relocations, CAF-approved movers. Understanding of military timelines and requirements."
  };

  return (
    <>
      <Helmet>
        <title>Military Moving Services Vancouver | CAF PCS Movers | Prestige Moving</title>
        <meta name="description" content="Professional military moving services in Vancouver. Experienced with PCS moves, CAF requirements, and military base relocations. Punctual, reliable, and understanding of military needs." />
        <meta name="keywords" content="military moving Vancouver, PCS movers BC, CAF moving service, military base relocation, armed forces movers Vancouver" />
        <meta property="og:title" content="Military Moving Services Vancouver | Prestige Moving" />
        <meta property="og:description" content="Professional military moving. PCS moves, base relocations, understanding of military timelines and requirements." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prestigemoving.ca/services/military-moving" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20 gap-4">
              <div className="flex items-center gap-4">
                <Link href="/"><Button variant="ghost" size="icon" data-testid="button-back"><ArrowLeft className="h-5 w-5" /></Button></Link>
                <Link href="/"><img src={logoUrl} alt="Prestige Moving Vancouver" className="h-12 w-auto" data-testid="img-logo" /></Link>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <a href="tel:604-000-0000" className="flex items-center gap-2 text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md" data-testid="link-phone">
                  <Phone className="h-4 w-4" /><span className="hidden sm:inline">604-000-0000</span>
                </a>
                <Link href="/book"><Button variant="default" size="default" data-testid="button-get-quote">Get Quote</Button></Link>
              </div>
            </div>
          </div>
        </nav>

        <section className="relative bg-gradient-to-br from-primary/10 via-accent to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="default" className="mb-4">Military Moving</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Military Moving<br />Services in Vancouver
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We understand the unique challenges of military relocations. From tight timelines to specific requirements, our team is experienced in handling PCS moves and base relocations with precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book"><Button size="lg" variant="default" className="text-base px-8">Get Military Quote</Button></Link>
                <a href="tel:604-000-0000"><Button size="lg" variant="outline" className="text-base px-8"><Phone className="h-5 w-5 mr-2" />Call 604-000-0000</Button></a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Military Families Choose Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We understand and respect the unique needs of our service members</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Timeline Flexibility</CardTitle>
                  <CardDescription>We understand orders can change quickly. Flexible scheduling for unexpected deployments and transfers.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <FileCheck className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Documentation</CardTitle>
                  <CardDescription>Proper inventories and documentation for reimbursement claims and military requirements.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Military Discount</CardTitle>
                  <CardDescription>Special rates for active duty, veterans, and military families as our thank you for your service.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-accent/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Military Moving Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader><Shield className="h-10 w-10 text-primary mb-2" /><CardTitle>PCS Moves</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Permanent Change of Station relocations</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>DITY/PPM move assistance</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Weight ticket coordination</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Proper weight documentation</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><Star className="h-10 w-10 text-primary mb-2" /><CardTitle>Base Relocations</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>CFB Esquimalt moves</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>RCAF base relocations</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Cross-country military moves</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Temporary housing coordination</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><FileCheck className="h-10 w-10 text-primary mb-2" /><CardTitle>Documentation Support</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Detailed inventory sheets</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Weight tickets and receipts</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Damage reports if needed</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Moving expense documentation</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><Clock className="h-10 w-10 text-primary mb-2" /><CardTitle>Flexible Scheduling</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Last-minute move capability</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Weekend and holiday moves</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Storage for delayed moves</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Split shipments available</span></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Thank You For Your Service</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              We're proud to support Canadian Armed Forces members and their families. All active duty, reserve, and veterans receive a special discount as our thank you for your dedication and sacrifice.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold">Active Duty</h3>
                <p className="text-sm text-muted-foreground">Special rates for serving members</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold">Veterans</h3>
                <p className="text-sm text-muted-foreground">Honoring those who served</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold">Military Families</h3>
                <p className="text-sm text-muted-foreground">Supporting the whole family</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for Your PCS Move?</h2>
            <p className="text-xl mb-8 opacity-90">Get your military moving quote today. We'll work around your timeline and requirements.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book"><Button size="lg" variant="secondary" className="text-base px-8">Get Military Quote</Button></Link>
              <a href="tel:604-000-0000"><Button size="lg" variant="outline" className="text-base px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"><Phone className="h-5 w-5 mr-2" />604-000-0000</Button></a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
