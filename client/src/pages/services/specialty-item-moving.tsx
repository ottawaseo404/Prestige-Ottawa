import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle2, Dumbbell, Shield, Tv, Bike, Wine } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";

export default function SpecialtyItemMoving() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Specialty Item Moving Services Vancouver",
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
    "description": "Professional specialty item moving services in Vancouver. Expert handling of gym equipment, hot tubs, pool tables, safes, and other oversized items."
  };

  return (
    <>
      <Helmet>
        <title>Specialty Item Moving Vancouver | Hot Tub, Pool Table, Gym Equipment Movers | Prestige Moving</title>
        <meta name="description" content="Professional specialty item moving in Vancouver. Hot tubs, pool tables, gym equipment, safes, wine cellars. Experienced crew, specialized equipment. Get your free quote!" />
        <meta name="keywords" content="specialty item moving Vancouver, hot tub movers BC, pool table moving, gym equipment moving, safe moving Vancouver" />
        <meta property="og:title" content="Specialty Item Moving Vancouver | Prestige Moving" />
        <meta property="og:description" content="Professional specialty item moving. Hot tubs, pool tables, gym equipment, and more. Specialized equipment and expertise." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prestigemoving.ca/services/specialty-item-moving" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        <section className="relative bg-gradient-to-br from-primary/10 via-accent to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="default" className="mb-4">Specialty Item Moving</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Specialty Item Moving<br />Services in Vancouver
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From hot tubs and pool tables to gym equipment and safes, we have the expertise and specialized equipment to move your unique items safely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book"><Button size="lg" variant="default" className="text-base px-8">Get Specialty Quote</Button></Link>
                <a href="tel:604-616-6066"><Button size="lg" variant="outline" className="text-base px-8"><Phone className="h-5 w-5 mr-2" />Call 604-616-6066</Button></a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Specialty Items We Move</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Expert handling for oversized, heavy, and unusual items</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Dumbbell className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Gym Equipment</CardTitle>
                  <CardDescription>Treadmills, ellipticals, weight machines, free weights, and home gym setups</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Bike className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Recreational Items</CardTitle>
                  <CardDescription>Hot tubs, pool tables, foosball, ping pong tables, arcade machines</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Heavy Items</CardTitle>
                  <CardDescription>Safes, vaults, gun safes, industrial equipment, machinery</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-accent/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Complete Specialty Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader><Bike className="h-10 w-10 text-primary mb-2" /><CardTitle>Hot Tub Moving</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Professional disconnection</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Proper draining and prep</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Specialized lifting equipment</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Crane services if needed</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><Tv className="h-10 w-10 text-primary mb-2" /><CardTitle>Pool Table Moving</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Complete disassembly</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Slate protection and transport</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Professional reassembly</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Leveling at new location</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><Dumbbell className="h-10 w-10 text-primary mb-2" /><CardTitle>Fitness Equipment</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Commercial gym equipment</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Home gym systems</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Treadmills and ellipticals</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Weight systems and racks</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><Wine className="h-10 w-10 text-primary mb-2" /><CardTitle>Other Specialty Items</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Wine collections and cellars</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Aquariums and terrariums</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Motorcycles and ATVs</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Large appliances</span></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Have a Specialty Item?</h2>
            <p className="text-xl mb-8 opacity-90">Tell us about your unique moving needs. We have the equipment and expertise to handle it.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book"><Button size="lg" variant="secondary" className="text-base px-8">Get Specialty Quote</Button></Link>
              <a href="tel:604-616-6066"><Button size="lg" variant="outline" className="text-base px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"><Phone className="h-5 w-5 mr-2" />604-616-6066</Button></a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
