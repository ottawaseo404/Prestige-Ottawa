import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import ServiceQuoteForm from "@/components/service-quote-form";
import { Phone, CheckCircle2, TruckIcon, Shield, Clock, Users, Star, MapPin, ArrowRight, Award, Package, Building2, Box, Boxes, FileText, Monitor } from "lucide-react";
import torontoSeoLogo from "@assets/cropped-Futuristic-Logo-for-Toronto-SEO-with-Neon-Elements-2._1770587083552.webp";

export default function TorontoSeo() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Prestige Moving Helps Toronto SEO Relocate from Ottawa to Toronto",
    "description": "How Prestige Moving successfully relocated Toronto SEO's entire office and storage facility from Ottawa to Toronto, handling specialized IT equipment, office furniture, and bulk supply storage with care.",
    "author": {
      "@type": "Organization",
      "name": "Prestige Moving",
      "url": "https://prestigemoving.ca"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Prestige Moving",
      "url": "https://prestigemoving.ca"
    }
  };

  return (
    <>
      <Helmet>
        <title>Toronto SEO Office Move | Ottawa to Toronto | Prestige Moving</title>
        <meta name="description" content="Prestige Moving helped Toronto SEO relocate their office and large supply storage from Ottawa to Toronto. Full-service commercial move with IT coordination, packing, and setup." />
        <meta name="keywords" content="Toronto SEO move, Ottawa to Toronto moving, commercial office relocation, Prestige Moving case study, long distance office move" />
        <link rel="canonical" href="https://prestigemoving.ca/toronto-seo" />
        <meta property="og:title" content="Toronto SEO Office Move | Prestige Moving" />
        <meta property="og:description" content="How Prestige Moving relocated Toronto SEO's entire operation from Ottawa to Toronto — office furniture, IT equipment, and a massive supply storage facility." />
        <meta property="og:url" content="https://prestigemoving.ca/toronto-seo" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <SharedNavigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-[#1A2332] py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] via-[#1A2332]/95 to-primary/20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-primary/20 text-primary mb-6 text-sm" data-testid="badge-case-study">
                  <Award className="h-4 w-4 mr-1" />
                  Client Success Story
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight" data-testid="heading-toronto-seo">
                  Moving <span className="text-primary">Toronto SEO</span> from Ottawa to Toronto
                </h1>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  When one of Canada's leading digital marketing agencies needed to relocate their entire operation — including a massive office supply storage facility — they trusted Prestige Moving to get the job done right.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/book">
                    <Button size="lg" className="font-bold text-lg px-8" data-testid="button-hero-quote">
                      Get Your Free Quote
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                  <a href="tel:613-600-4000">
                    <Button size="lg" variant="outline" className="font-bold text-lg px-8 text-white border-white/30 bg-white/5 backdrop-blur" data-testid="button-hero-call">
                      <Phone className="h-5 w-5 mr-2" />
                      (613) 600-4000
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                  <img
                    src={torontoSeoLogo}
                    alt="Toronto SEO Company Logo"
                    className="w-64 md:w-80 h-auto mx-auto"
                    data-testid="img-toronto-seo-logo"
                  />
                  <div className="text-center mt-6">
                    <a
                      href="https://torontoseo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors inline-flex items-center gap-2"
                      data-testid="link-toronto-seo"
                    >
                      Visit torontoseo.com
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-gradient-to-r from-primary to-primary/90 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div data-testid="stat-distance">
                <p className="text-3xl md:text-4xl font-black text-[#1A2332]">450 km</p>
                <p className="text-[#1A2332]/70 text-sm font-medium">Distance Moved</p>
              </div>
              <div data-testid="stat-items">
                <p className="text-3xl md:text-4xl font-black text-[#1A2332]">2,000+</p>
                <p className="text-[#1A2332]/70 text-sm font-medium">Items Relocated</p>
              </div>
              <div data-testid="stat-days">
                <p className="text-3xl md:text-4xl font-black text-[#1A2332]">3 Days</p>
                <p className="text-[#1A2332]/70 text-sm font-medium">Total Move Time</p>
              </div>
              <div data-testid="stat-damage">
                <p className="text-3xl md:text-4xl font-black text-[#1A2332]">Zero</p>
                <p className="text-[#1A2332]/70 text-sm font-medium">Items Damaged</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceQuoteForm defaultService="commercial" serviceName="Long Distance Commercial Move" />
          </div>
        </section>

        {/* The Story */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">The Full Story</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4" data-testid="heading-story">
                How We Moved a Leading Digital Agency 450 km
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                <a href="https://torontoseo.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-semibold transition-colors" data-testid="link-toronto-seo-inline-1">Toronto SEO</a> is one of Canada's most recognized digital marketing and search engine optimization companies, helping businesses across the country improve their online visibility and drive meaningful growth. For years, their team operated out of a sizable office in Ottawa, where they had built a thriving operation complete with a dedicated workspace for their growing team, a client meeting center, and — perhaps most notably — a large office supply and equipment storage facility that housed everything from high-end monitors and networking gear to thousands of printed materials, promotional items, and bulk office supplies.
              </p>

              <p className="text-lg leading-relaxed">
                When the decision came to relocate their headquarters to Toronto to be closer to their largest concentration of clients and to tap into the city's vibrant tech ecosystem, the <a href="https://torontoseo.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-semibold transition-colors" data-testid="link-toronto-seo-inline-2">Toronto SEO</a> leadership team knew they needed a moving company that could handle far more than a standard office move. Their supply storage alone contained over 1,500 boxes of materials, palletized inventory, custom shelving units, and sensitive electronic equipment that required careful handling during the 450-kilometer journey along the 401 corridor.
              </p>

              <p className="text-lg leading-relaxed">
                After evaluating several commercial movers, <a href="https://torontoseo.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-semibold transition-colors" data-testid="link-toronto-seo-inline-3">Toronto SEO</a> chose <strong className="text-foreground">Prestige Moving</strong> based on our proven track record with large-scale commercial relocations, our WSIB certification, full insurance coverage, and our ability to coordinate complex multi-day moves with minimal disruption to business operations. From the very first consultation, our team worked hand-in-hand with their office manager and IT director to develop a comprehensive moving plan that accounted for every piece of equipment, every box of supplies, and every critical timeline.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">The Challenge: More Than Just an Office Move</h3>

              <p className="text-lg leading-relaxed">
                What made this relocation particularly complex was the sheer volume and variety of items that needed to be moved. Beyond the typical office furniture — desks, ergonomic chairs, conference tables, and reception area furnishings — the <a href="https://torontoseo.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-semibold transition-colors">Toronto SEO</a> team had accumulated a substantial inventory of office supplies and marketing materials that filled an entire 2,500-square-foot storage area adjacent to their main office. This included industrial-grade printers, rolls of banner material, cases of branded merchandise, networking servers, backup drives, and enough office supplies to outfit their operation for years to come.
              </p>

              <p className="text-lg leading-relaxed">
                Our team deployed two 26-foot trucks and a dedicated cargo van specifically for IT equipment, coordinating the move over three carefully planned days. Day one focused entirely on the supply storage — our crew systematically catalogued, wrapped, and loaded pallets of materials using our specialized commercial packing techniques. Every box was labeled with a color-coded system so unpacking at the Toronto location would be efficient and organized. Fragile items like monitors, servers, and sensitive electronics were individually wrapped in moving blankets and secured in custom crating to prevent any damage during transit.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Seamless Execution, Zero Downtime</h3>

              <p className="text-lg leading-relaxed">
                Day two was dedicated to the main office. Our movers disassembled workstations, carefully wrapped all furniture, and coordinated with the <a href="https://torontoseo.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-semibold transition-colors">Toronto SEO</a> IT team to safely disconnect and pack all technology infrastructure. Conference room AV equipment, phone systems, and network hardware were handled by our specialty items team, who have extensive experience with sensitive commercial electronics. We even coordinated the disconnection of their dedicated internet lines and ensured documentation was in place for reconnection at the new Toronto office.
              </p>

              <p className="text-lg leading-relaxed">
                By day three, our trucks were rolling east along the 401 toward Toronto. Upon arrival at their new downtown Toronto office space, our team executed the unloading plan with military precision. The supply storage was set up first, with all pallets and shelving units reassembled exactly according to the floor plan that had been agreed upon weeks in advance. Workstations were reassembled, monitors reconnected, and within hours, the <a href="https://torontoseo.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-semibold transition-colors">Toronto SEO</a> team was back online and serving their clients — with zero business days lost to the relocation.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">The Result: A Partnership Built on Trust</h3>

              <p className="text-lg leading-relaxed">
                The entire relocation was completed on schedule, on budget, and with zero damage to any items — a testament to the meticulous planning, professional execution, and genuine care that defines every Prestige Moving project. The <a href="https://torontoseo.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-semibold transition-colors">Toronto SEO</a> team was thrilled with the results, noting that the level of coordination and attention to detail exceeded their expectations. From the initial walkthrough and inventory assessment to the final placement of furniture in their new Toronto headquarters, our team treated their belongings as if they were our own.
              </p>

              <p className="text-lg leading-relaxed">
                Whether you're a growing tech company like <a href="https://torontoseo.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-semibold transition-colors" data-testid="link-toronto-seo-inline-final">Toronto SEO</a> planning a long-distance commercial relocation, or a family moving across town, Prestige Moving brings the same level of professionalism, care, and reliability to every single move. With 350+ five-star reviews, WSIB certification, fully insured teams, and a fleet of company-owned trucks, we're Ottawa's most trusted name in moving — and we're ready to help you with your next move, wherever it takes you.
              </p>
            </div>
          </div>
        </section>

        {/* What We Moved */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Move Breakdown</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground" data-testid="heading-breakdown">
                What We Moved for Toronto SEO
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card data-testid="card-office-furniture">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Office Furniture</h3>
                  <p className="text-muted-foreground text-sm">30+ workstations, executive desks, ergonomic chairs, conference tables, and reception area furnishings — all disassembled, wrapped, and reassembled.</p>
                </CardContent>
              </Card>

              <Card data-testid="card-it-equipment">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Monitor className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">IT & Tech Equipment</h3>
                  <p className="text-muted-foreground text-sm">Servers, networking hardware, 50+ monitors, backup systems, and AV equipment — each individually crated and protected for the long-distance journey.</p>
                </CardContent>
              </Card>

              <Card data-testid="card-supply-storage">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Boxes className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Supply Storage Facility</h3>
                  <p className="text-muted-foreground text-sm">2,500 sq ft of inventory including 1,500+ boxes, industrial printers, banner materials, branded merchandise, and bulk office supplies.</p>
                </CardContent>
              </Card>

              <Card data-testid="card-shelving">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Custom Shelving & Racking</h3>
                  <p className="text-muted-foreground text-sm">Industrial shelving units and custom storage racking — carefully disassembled, transported, and rebuilt at the new Toronto location to exact specifications.</p>
                </CardContent>
              </Card>

              <Card data-testid="card-documents">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Documents & Records</h3>
                  <p className="text-muted-foreground text-sm">Filing cabinets, client records, and printed marketing collateral — securely packed and organized for easy access upon arrival.</p>
                </CardContent>
              </Card>

              <Card data-testid="card-marketing">
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Box className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Marketing Materials</h3>
                  <p className="text-muted-foreground text-sm">Pallets of promotional items, trade show displays, branded giveaways, and print materials — inventoried and delivered intact.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Prestige */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Why Businesses Trust Prestige Moving
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From local office moves to long-distance commercial relocations like Toronto SEO's, here's why companies across Ontario choose us.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "WSIB Certified & Fully Insured", desc: "Complete coverage for your peace of mind. Every team member is certified and every item is protected during transit." },
                { icon: TruckIcon, title: "Company-Owned Fleet", desc: "No rental trucks. Our well-maintained fleet ensures reliability, cleanliness, and the right vehicle for every job." },
                { icon: Users, title: "Experienced Commercial Movers", desc: "Our teams specialize in office and commercial relocations with expertise in IT coordination, furniture systems, and supply logistics." },
                { icon: Clock, title: "Minimal Business Downtime", desc: "We plan every move to minimize disruption. Toronto SEO was back online within hours of arriving at their new location." },
                { icon: Star, title: "350+ Five-Star Reviews", desc: "Our reputation speaks for itself. Hundreds of satisfied clients — from families to Fortune 500 companies — trust Prestige Moving." },
                { icon: CheckCircle2, title: "Transparent, No-Surprise Pricing", desc: "Detailed quotes with no hidden fees. You'll know exactly what to expect before moving day arrives." },
              ].map((item, i) => (
                <Card key={i} data-testid={`card-trust-${i}`}>
                  <CardContent className="p-6">
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A2332] mb-4" data-testid="heading-cta">
              Planning a Commercial Move?
            </h2>
            <p className="text-xl text-[#1A2332]/80 mb-8 max-w-2xl mx-auto">
              Whether you're relocating across town or across the province, Prestige Moving has the experience, equipment, and team to make it seamless. Get your free quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" variant="outline" className="font-bold text-lg px-10 bg-[#1A2332] text-white border-[#1A2332] hover:bg-[#1A2332]/90" data-testid="button-cta-quote">
                  Get Your Free Quote
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:613-600-4000">
                <Button size="lg" variant="outline" className="font-bold text-lg px-10 border-[#1A2332]/30 text-[#1A2332]" data-testid="button-cta-call">
                  <Phone className="h-5 w-5 mr-2" />
                  (613) 600-4000
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SharedFooter />
    </>
  );
}