import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Phone, Calendar, CheckCircle, Shield, Star } from "lucide-react";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";

interface ServicePage {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  isActive: boolean;
}

export default function DynamicServicePage() {
  const params = useParams();
  const slug = params.slug;

  const { data: page, isLoading, error } = useQuery<ServicePage>({
    queryKey: ["/api/services", slug],
    queryFn: async () => {
      const response = await fetch(`/api/services/${slug}`);
      if (!response.ok) {
        throw new Error("Service page not found");
      }
      return response.json();
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <SharedNavigation />
        <div className="container mx-auto px-4 py-16">
          <Skeleton className="h-12 w-3/4 mb-6" />
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-2/3" />
        </div>
        <SharedFooter />
      </div>
    );
  }

  if (error || !page) {
    return (
      <div className="min-h-screen bg-background">
        <SharedNavigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The service page you're looking for doesn't exist.
          </p>
          <Link href="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <SharedFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{page.metaTitle || page.title} | Prestige Moving Ottawa</title>
        <meta name="description" content={page.metaDescription || page.excerpt} />
        {page.keywords && <meta name="keywords" content={page.keywords.join(", ")} />}
        <link rel="canonical" href={`https://prestigemoving.ca/services/${page.slug}`} />
        <meta property="og:title" content={page.metaTitle || page.title} />
        <meta property="og:description" content={page.metaDescription || page.excerpt} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://prestigemoving.ca/services/${page.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": page.title,
            "description": page.metaDescription || page.excerpt,
            "provider": {
              "@type": "MovingCompany",
              "name": "Prestige Moving Ottawa",
              "telephone": "(613) 600-4000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "50 Colonnade Rd Unit 200B",
                "addressLocality": "Ottawa",
                "addressRegion": "ON",
                "postalCode": "K2E 7J6",
                "addressCountry": "CA"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Ottawa"
            }
          })}
        </script>
      </Helmet>

      <SharedNavigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A2332] to-[#2a3444] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Link href="/">
              <Button variant="ghost" className="mb-6 text-white/80 hover:text-white hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6" data-testid="service-title">
              {page.title}
            </h1>
            {page.excerpt && (
              <p className="text-lg md:text-xl text-white/80 mb-8">
                {page.excerpt}
              </p>
            )}
            <div className="flex flex-wrap gap-4">
              <Link href="/book">
                <Button size="lg" className="bg-[#C5A572] hover:bg-[#B8956A] text-white">
                  <Calendar className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Button>
              </Link>
              <a href="tel:6136004000">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2 h-5 w-5" />
                  (613) 600-4000
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#C5A572] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-white">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">10,000+ Moves</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-current" />
              <span className="font-medium">5.0 Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">15+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article 
              className="prose prose-lg max-w-none 
                prose-headings:text-[#1A2332] prose-headings:font-bold
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-[#C5A572] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[#1A2332]
                prose-ul:my-4 prose-li:my-1
                prose-hr:my-8 prose-hr:border-gray-200"
              dangerouslySetInnerHTML={{ __html: page.content }}
              data-testid="service-content"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#C5A572] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Move?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote from Ottawa's most trusted movers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book">
              <Button size="lg" className="bg-[#1A2332] hover:bg-[#2a3444] text-white">
                <Calendar className="mr-2 h-5 w-5" />
                Get Your Free Quote
              </Button>
            </Link>
            <a href="tel:6136004000">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Call (613) 600-4000
              </Button>
            </a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
}
