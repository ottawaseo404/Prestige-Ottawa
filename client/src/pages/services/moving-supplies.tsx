import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle2, Box, Package, Truck, ArrowLeft, Scissors, ShoppingBag } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import logoUrl from "@assets/originalonglogo_1763689606978.png";

export default function MovingSupplies() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Moving Supplies Delivery Vancouver",
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
    "description": "Moving supplies delivery service in Vancouver. Professional-grade boxes, packing materials, tape, and protective supplies delivered to your door."
  };

  return (
    <>
      <Helmet>
        <title>Moving Supplies Delivery Vancouver | Boxes, Packing Materials | Prestige Moving</title>
        <meta name="description" content="Moving supplies delivered to your door in Vancouver. Professional-grade boxes, bubble wrap, packing paper, tape, and specialty materials. Same-day delivery available!" />
        <meta name="keywords" content="moving supplies Vancouver, moving boxes delivery, packing materials BC, bubble wrap Vancouver, moving tape delivery" />
        <meta property="og:title" content="Moving Supplies Delivery Vancouver | Prestige Moving" />
        <meta property="og:description" content="Moving supplies delivered to your door. Professional boxes, packing materials, and protective supplies." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prestigemoving.ca/services/moving-supplies" />
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
                <Link href="/book"><Button variant="default" size="default" data-testid="button-get-quote">Order Supplies</Button></Link>
              </div>
            </div>
          </div>
        </nav>

        <section className="relative bg-gradient-to-br from-primary/10 via-accent to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="default" className="mb-4">Moving Supplies</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Moving Supplies<br />Delivered in Vancouver
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get professional-grade moving supplies delivered right to your door. From sturdy boxes to specialty packing materials, we have everything you need for a successful move.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book"><Button size="lg" variant="default" className="text-base px-8">Order Supplies</Button></Link>
                <a href="tel:604-000-0000"><Button size="lg" variant="outline" className="text-base px-8"><Phone className="h-5 w-5 mr-2" />Call 604-000-0000</Button></a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Order From Us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Professional-grade supplies at competitive prices with convenient delivery</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Truck className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Same-Day Delivery</CardTitle>
                  <CardDescription>Order by noon for same-day delivery throughout Greater Vancouver</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Box className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Professional Grade</CardTitle>
                  <CardDescription>The same quality materials our professional movers use</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <ShoppingBag className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Bundle Packages</CardTitle>
                  <CardDescription>Pre-assembled kits for studios, 1-bedroom, and larger homes</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-accent/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Available Supplies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader><Box className="h-10 w-10 text-primary mb-2" /><CardTitle>Moving Boxes</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Small boxes (books, heavy items)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Medium boxes (general items)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Large boxes (bedding, pillows)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Wardrobe boxes with hanging bar</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><Package className="h-10 w-10 text-primary mb-2" /><CardTitle>Packing Materials</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Bubble wrap rolls</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Packing paper (newsprint-free)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Foam sheets and pouches</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Packing peanuts</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><Scissors className="h-10 w-10 text-primary mb-2" /><CardTitle>Tape & Markers</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Heavy-duty packing tape</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Tape dispensers</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Fragile stickers and labels</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Permanent markers</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><Package className="h-10 w-10 text-primary mb-2" /><CardTitle>Protective Items</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Mattress bags and covers</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Furniture blankets</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Stretch wrap</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Corner protectors</span></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Supply Bundles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader><CardTitle>Studio/Bachelor Kit</CardTitle><CardDescription>Perfect for small moves</CardDescription></CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>10 small boxes</li>
                    <li>10 medium boxes</li>
                    <li>2 rolls bubble wrap</li>
                    <li>1 roll packing paper</li>
                    <li>2 rolls tape</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardHeader><Badge className="w-fit mb-2">Popular</Badge><CardTitle>1-2 Bedroom Kit</CardTitle><CardDescription>Most popular choice</CardDescription></CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>20 small boxes</li>
                    <li>25 medium boxes</li>
                    <li>10 large boxes</li>
                    <li>2 wardrobe boxes</li>
                    <li>4 rolls bubble wrap</li>
                    <li>2 rolls packing paper</li>
                    <li>4 rolls tape</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>3+ Bedroom Kit</CardTitle><CardDescription>For larger homes</CardDescription></CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>30 small boxes</li>
                    <li>40 medium boxes</li>
                    <li>20 large boxes</li>
                    <li>4 wardrobe boxes</li>
                    <li>8 rolls bubble wrap</li>
                    <li>4 rolls packing paper</li>
                    <li>8 rolls tape</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Packing?</h2>
            <p className="text-xl mb-8 opacity-90">Order your moving supplies today with free delivery on orders over $75.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book"><Button size="lg" variant="secondary" className="text-base px-8">Order Supplies</Button></Link>
              <a href="tel:604-000-0000"><Button size="lg" variant="outline" className="text-base px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"><Phone className="h-5 w-5 mr-2" />604-000-0000</Button></a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
