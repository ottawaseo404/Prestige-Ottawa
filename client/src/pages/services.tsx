import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, ArrowRight, Home as HomeIcon, Building2, MapPin, 
  Warehouse, GraduationCap, Heart, Music, Crown, Dumbbell, 
  Box, Medal, Package, TruckIcon, CheckCircle2
} from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { SharedHeader } from "@/components/shared-header";
import { SharedFooter } from "@/components/shared-footer";

interface ServicePage {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
}

const staticServices = [
  {
    title: "Residential Moving",
    slug: "residential-moving",
    description: "Professional home moving services for apartments, condos, and houses across Ottawa.",
    icon: HomeIcon,
    features: ["Full packing services", "Furniture protection", "Same-day moves available"]
  },
  {
    title: "Commercial Moving",
    slug: "commercial-moving",
    description: "Office and business relocations with minimal downtime for Ottawa companies.",
    icon: Building2,
    features: ["After-hours moves", "IT equipment handling", "Furniture installation"]
  },
  {
    title: "Long Distance Moving",
    slug: "long-distance-moving",
    description: "Cross-province and Canada-wide moving services from Ottawa.",
    icon: MapPin,
    features: ["Door-to-door service", "GPS tracking", "Guaranteed delivery dates"]
  },
  {
    title: "Packing Services",
    slug: "packing-services",
    description: "Professional packing and unpacking services with premium materials.",
    icon: Package,
    features: ["Custom crating", "Fragile item specialty", "Eco-friendly materials"]
  },
  {
    title: "Moving Supplies",
    slug: "moving-supplies",
    description: "Quality boxes, tape, and packing materials delivered to your door.",
    icon: Box,
    features: ["Free delivery", "Variety of sizes", "Specialty supplies"]
  },
  {
    title: "Student Moving",
    slug: "student-moving",
    description: "Affordable moving solutions for students in Ottawa's university districts.",
    icon: GraduationCap,
    features: ["Student discounts", "Flexible scheduling", "Small load specialists"]
  },
  {
    title: "Storage Solutions",
    slug: "storage-solutions",
    description: "Secure short and long-term storage facilities in Ottawa.",
    icon: Warehouse,
    features: ["Climate controlled", "24/7 security", "Flexible terms"]
  },
  {
    title: "Specialty Item Moving",
    slug: "specialty-item-moving",
    description: "Expert handling for hot tubs, pool tables, gym equipment, and more.",
    icon: Dumbbell,
    features: ["Specialized equipment", "Trained technicians", "Insurance included"]
  },
  {
    title: "Antique Moving",
    slug: "antique-moving",
    description: "Careful handling of valuable antiques, artwork, and collectibles.",
    icon: Crown,
    features: ["Custom packaging", "White glove service", "Appraisal coordination"]
  },
  {
    title: "Piano Moving",
    slug: "piano-moving",
    description: "Specialized piano transport with proper equipment and expertise.",
    icon: Music,
    features: ["All piano types", "Climate protection", "Tuning referrals"]
  },
  {
    title: "Senior Moving",
    slug: "senior-moving",
    description: "Compassionate relocation services for seniors and retirement communities.",
    icon: Heart,
    features: ["Patient service", "Downsizing help", "Estate coordination"]
  },
  {
    title: "Military Moving",
    slug: "military-moving",
    description: "PCS moves and base relocations for military families in Ottawa.",
    icon: Medal,
    features: ["Military discounts", "Storage options", "Flexible scheduling"]
  }
];

export default function Services() {
  const { data: dynamicServices } = useQuery<ServicePage[]>({
    queryKey: ["/api/services"],
  });

  return (
    <>
      <Helmet>
        <title>Moving Services in Ottawa | Prestige Moving</title>
        <meta name="description" content="Explore our complete range of professional moving services in Ottawa. Residential, commercial, long-distance, packing, storage, and specialty moving solutions." />
        <meta name="keywords" content="Ottawa moving services, residential movers, commercial moving, long distance moving, packing services, storage solutions" />
        <link rel="canonical" href="https://prestigemoving.ca/services" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedHeader />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1A2332] to-[#2A3342] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-[#C5A572]/20 text-[#C5A572] border-[#C5A572]/30 mb-6">
              Professional Moving Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Moving <span className="text-[#C5A572]">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              From residential moves to specialized transport, Prestige Moving offers comprehensive 
              moving solutions tailored to your needs in Ottawa and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#B8956A] text-white" data-testid="button-hero-quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/calculator">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="button-hero-calculator">
                  Cost Calculator
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-[#C5A572] py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-white text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>5.0 Star Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>10,000+ Successful Moves</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Free Estimates</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Moving Solutions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you're moving across the street or across the country, our experienced team 
                provides reliable, professional service every step of the way.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {staticServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Link key={service.slug} href={`/services/${service.slug}`}>
                    <Card className="h-full hover-elevate cursor-pointer group" data-testid={`card-service-${service.slug}`}>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-[#C5A572]/10 flex items-center justify-center mb-4 group-hover:bg-[#C5A572]/20 transition-colors">
                          <Icon className="h-6 w-6 text-[#C5A572]" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-[#C5A572] transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex items-center text-[#C5A572] font-medium text-sm group-hover:gap-2 transition-all">
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dynamic Service Pages from WordPress */}
        {dynamicServices && dynamicServices.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Resources</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore our detailed service guides with tips, pricing information, and everything 
                  you need to know about your move.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {dynamicServices.map((service) => (
                  <Link key={service.id} href={`/services/${service.slug}`}>
                    <Card className="h-full hover-elevate cursor-pointer" data-testid={`card-dynamic-service-${service.slug}`}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#C5A572]/10 flex items-center justify-center">
                            <TruckIcon className="h-5 w-5 text-[#C5A572]" />
                          </div>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-[#C5A572] font-medium text-sm">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-[#1A2332] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Move?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Get a free, no-obligation quote from Ottawa's most trusted moving company. 
              Our team is ready to make your move stress-free.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#B8956A] text-white" data-testid="button-cta-quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+16135550123">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="button-cta-call">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (613) 555-0123
                </Button>
              </a>
            </div>
          </div>
        </section>

        <SharedFooter />
      </div>
    </>
  );
}
