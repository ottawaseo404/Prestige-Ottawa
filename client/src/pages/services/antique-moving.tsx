import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle2, Crown, Shield, Package, ArrowLeft, Gem } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import logoUrl from "@assets/originalonglogo_1763689606978.png";

export default function AntiqueMoving() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Antique Moving Services Vancouver",
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
    "description": "Professional antique moving services in Vancouver. Specialists in handling valuable antiques, heirlooms, and collectibles with museum-quality care and full insurance."
  };

  return (
    <>
      <Helmet>
        <title>Antique Moving Services Vancouver | Heirloom & Collectible Movers | Prestige Moving</title>
        <meta name="description" content="Professional antique moving services in Vancouver. Specialists in valuable antiques, heirlooms, collectibles. Museum-quality care, climate-controlled transport, full insurance. Free quote!" />
        <meta name="keywords" content="antique moving Vancouver, heirloom movers BC, collectible moving service, valuable furniture moving, antique transport Vancouver" />
        <meta property="og:title" content="Antique Moving Services Vancouver | Prestige Moving" />
        <meta property="og:description" content="Professional antique moving in Vancouver. Museum-quality care for your valuable antiques and heirlooms. Fully insured." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prestigemoving.ca/services/antique-moving" />
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
              <Badge variant="default" className="mb-4">Antique Moving</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Antique Moving<br />Services in Vancouver
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your antiques and heirlooms deserve museum-quality care. Our specialists are trained in handling irreplaceable items with the delicacy and expertise they require.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book"><Button size="lg" variant="default" className="text-base px-8">Get Antique Moving Quote</Button></Link>
                <a href="tel:604-000-0000"><Button size="lg" variant="outline" className="text-base px-8"><Phone className="h-5 w-5 mr-2" />Call 604-000-0000</Button></a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Trust Us With Your Antiques?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Museum-quality care and handling for irreplaceable treasures</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Crown className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Expert Handlers</CardTitle>
                  <CardDescription>Trained specialists who understand antique materials, finishes, and fragility</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Package className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Custom Crating</CardTitle>
                  <CardDescription>Museum-quality crating and packaging for maximum protection</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Specialized Insurance</CardTitle>
                  <CardDescription>Comprehensive coverage for valuable and irreplaceable items</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-accent/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Antiques We Handle</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader><Gem className="h-10 w-10 text-primary mb-2" /><CardTitle>Antique Furniture</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Victorian and Edwardian pieces</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Antique armoires and wardrobes</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Grandfather clocks</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Antique desks and secretaries</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><Crown className="h-10 w-10 text-primary mb-2" /><CardTitle>Art & Collectibles</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Oil paintings and artwork</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Sculptures and statues</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>China and porcelain collections</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Crystal and glassware</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><Shield className="h-10 w-10 text-primary mb-2" /><CardTitle>Heirlooms & Valuables</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Family heirlooms</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Antique mirrors</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Vintage rugs and tapestries</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Antique musical instruments</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><Package className="h-10 w-10 text-primary mb-2" /><CardTitle>Protection Services</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Acid-free wrapping materials</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Climate-controlled transport</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>White-glove handling</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /><span>Detailed condition reports</span></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Protect Your Treasures</h2>
            <p className="text-xl mb-8 opacity-90">Get a specialized quote for your antique moving needs. Your heirlooms deserve the best care.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book"><Button size="lg" variant="secondary" className="text-base px-8">Get Antique Quote</Button></Link>
              <a href="tel:604-000-0000"><Button size="lg" variant="outline" className="text-base px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"><Phone className="h-5 w-5 mr-2" />604-000-0000</Button></a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
