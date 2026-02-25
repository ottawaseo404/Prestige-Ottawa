import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { FloatingCTA } from "@/components/floating-cta";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Booking from "@/pages/booking";
import ResidentialMoving from "@/pages/services/residential-moving";
import CommercialMoving from "@/pages/services/commercial-moving";
import PackingServices from "@/pages/services/packing-services";
import StorageSolutions from "@/pages/services/storage-solutions";
import LongDistanceMoving from "@/pages/services/long-distance-moving";
import StudentMoving from "@/pages/services/student-moving";
import SeniorMoving from "@/pages/services/senior-moving";
import PianoMoving from "@/pages/services/piano-moving";
import AntiqueMoving from "@/pages/services/antique-moving";
import SpecialtyItemMoving from "@/pages/services/specialty-item-moving";
import MovingSupplies from "@/pages/services/moving-supplies";
import MilitaryMoving from "@/pages/services/military-moving";
import DynamicServicePage from "@/pages/dynamic-service";
import Services from "@/pages/services";
import OttawaMovers from "@/pages/seo/ottawa-movers";
import MovingCompanyOttawa from "@/pages/seo/moving-company-ottawa";
import ProfessionalMoversOttawa from "@/pages/seo/professional-movers-ottawa";
import BestMoversOttawa from "@/pages/seo/best-movers-ottawa";
import LocalMoversOttawa from "@/pages/seo/local-movers-ottawa";
import AffordableMoversOttawa from "@/pages/seo/affordable-movers-ottawa";
import LicensedMoversOttawa from "@/pages/seo/licensed-movers-ottawa";
import InsuredMoversOttawa from "@/pages/seo/insured-movers-ottawa";
import ResidentialMoversOttawa from "@/pages/seo/residential-movers-ottawa";
import CommercialMoversOttawa from "@/pages/seo/commercial-movers-ottawa";
import TorontoSeo from "@/pages/toronto-seo";
import MoversInOrleans from "@/pages/seo/movers-in-orleans";
import MoversInBarrhaven from "@/pages/seo/movers-in-barrhaven";
import MoversInNepean from "@/pages/seo/movers-in-nepean";
import MoversInKanata from "@/pages/seo/movers-in-kanata";
import MoversInGloucester from "@/pages/seo/movers-in-gloucester";
import MoversInStittsville from "@/pages/seo/movers-in-stittsville";
import MoversInWestboro from "@/pages/seo/movers-in-westboro";
import MoversInSandyHill from "@/pages/seo/movers-in-sandy-hill";
import MoversInRockcliffePark from "@/pages/seo/movers-in-rockcliffe-park";
import MoversInAltaVista from "@/pages/seo/movers-in-alta-vista";
import MoversInRiversideSouth from "@/pages/seo/movers-in-riverside-south";
import JunkRemovalOttawa from "@/pages/seo/junk-removal-ottawa";
import FurnitureAssemblyOttawa from "@/pages/seo/furniture-assembly-ottawa";
import HomeStagingOttawa from "@/pages/seo/home-staging-ottawa";
import EstateCleanoutOttawa from "@/pages/seo/estate-cleanout-ottawa";
import CustomCratingOttawa from "@/pages/seo/custom-crating-ottawa";
import MoversInOttawa from "@/pages/seo/movers-in-ottawa";
import LongDistanceMoversOttawa from "@/pages/seo/long-distance-movers-ottawa";
import AdminDashboard from "@/pages/admin/dashboard";
import AdminBookings from "@/pages/admin/bookings";
import AdminAnalytics from "@/pages/admin-analytics";
import AdminSmartMoving from "@/pages/admin/smartmoving";
import AdminPackages from "@/pages/admin/packages";
import AdminHeroVideos from "@/pages/admin/hero-videos";
import AdminBlog from "@/pages/admin/blog";
import AdminBlogEditor from "@/pages/admin/blog-editor";
import AdminPages from "@/pages/admin/pages";
import AdminLogin from "@/pages/admin-login";
import Calculator from "@/pages/calculator";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import { useAdminAuth } from "@/hooks/use-admin-auth";
import { useAnalytics } from "@/hooks/use-analytics";
import { Button } from "@/components/ui/button";
import { LogOut, Loader2 } from "lucide-react";

function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, logout, isLoggingOut } = useAdminAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setLocation("/login");
    }
  }, [isLoading, isAuthenticated, setLocation]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-accent/20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-accent/20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex items-center justify-between h-16 px-6 border-b shrink-0">
            <SidebarTrigger data-testid="button-sidebar-toggle" />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => logout()}
              disabled={isLoggingOut}
              data-testid="button-admin-logout"
            >
              {isLoggingOut ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <LogOut className="h-4 w-4 mr-2" />
              )}
              Logout
            </Button>
          </header>
          <main className="flex-1 overflow-y-auto p-6 bg-accent/20">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function Router() {
  return (
    <Switch>
      {/* Public Pages */}
      <Route path="/" component={Home} />
      <Route path="/book" component={Booking} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      
      {/* Services Listing Page */}
      <Route path="/services" component={Services} />
      
      {/* Service Pages */}
      <Route path="/services/residential-moving" component={ResidentialMoving} />
      <Route path="/services/commercial-moving" component={CommercialMoving} />
      <Route path="/services/packing-services" component={PackingServices} />
      <Route path="/services/storage-solutions" component={StorageSolutions} />
      <Route path="/services/long-distance-moving" component={LongDistanceMoving} />
      <Route path="/services/student-moving" component={StudentMoving} />
      <Route path="/services/senior-moving" component={SeniorMoving} />
      <Route path="/services/piano-moving" component={PianoMoving} />
      <Route path="/services/antique-moving" component={AntiqueMoving} />
      <Route path="/services/specialty-item-moving" component={SpecialtyItemMoving} />
      <Route path="/services/moving-supplies" component={MovingSupplies} />
      <Route path="/services/military-moving" component={MilitaryMoving} />
      
      {/* Dynamic Service Pages (WordPress imported) */}
      <Route path="/services/:slug" component={DynamicServicePage} />
      
      {/* SEO Landing Pages */}
      <Route path="/ottawa-movers" component={OttawaMovers} />
      <Route path="/moving-company-ottawa" component={MovingCompanyOttawa} />
      <Route path="/professional-movers-ottawa" component={ProfessionalMoversOttawa} />
      <Route path="/best-movers-ottawa" component={BestMoversOttawa} />
      <Route path="/local-movers-ottawa" component={LocalMoversOttawa} />
      <Route path="/affordable-movers-ottawa" component={AffordableMoversOttawa} />
      <Route path="/licensed-movers-ottawa" component={LicensedMoversOttawa} />
      <Route path="/insured-movers-ottawa" component={InsuredMoversOttawa} />
      <Route path="/residential-movers-ottawa" component={ResidentialMoversOttawa} />
      <Route path="/commercial-movers-ottawa" component={CommercialMoversOttawa} />
      <Route path="/toronto-seo" component={TorontoSeo} />
      <Route path="/movers-in-orleans" component={MoversInOrleans} />
      <Route path="/movers-in-barrhaven" component={MoversInBarrhaven} />
      <Route path="/movers-in-nepean" component={MoversInNepean} />
      <Route path="/movers-in-kanata" component={MoversInKanata} />
      <Route path="/movers-in-gloucester" component={MoversInGloucester} />
      <Route path="/movers-in-stittsville" component={MoversInStittsville} />
      <Route path="/movers-in-westboro" component={MoversInWestboro} />
      <Route path="/movers-in-sandy-hill" component={MoversInSandyHill} />
      <Route path="/movers-in-rockcliffe-park" component={MoversInRockcliffePark} />
      <Route path="/movers-in-alta-vista" component={MoversInAltaVista} />
      <Route path="/movers-in-riverside-south" component={MoversInRiversideSouth} />
      <Route path="/movers-in-ottawa" component={MoversInOttawa} />
      <Route path="/long-distance-movers-ottawa" component={LongDistanceMoversOttawa} />
      <Route path="/junk-removal-ottawa" component={JunkRemovalOttawa} />
      <Route path="/furniture-assembly-ottawa" component={FurnitureAssemblyOttawa} />
      <Route path="/home-staging-ottawa" component={HomeStagingOttawa} />
      <Route path="/estate-cleanout-ottawa" component={EstateCleanoutOttawa} />
      <Route path="/custom-crating-ottawa" component={CustomCratingOttawa} />
      
      <Route path="/admin/pages">
        {() => (
          <ProtectedAdminLayout>
            <AdminPages />
          </ProtectedAdminLayout>
        )}
      </Route>

      {/* Admin Login */}
      <Route path="/login" component={AdminLogin} />
      
      {/* Admin Pages (Protected) */}
      <Route path="/admin">
        {() => (
          <ProtectedAdminLayout>
            <AdminDashboard />
          </ProtectedAdminLayout>
        )}
      </Route>
      <Route path="/admin/bookings">
        {() => (
          <ProtectedAdminLayout>
            <AdminBookings />
          </ProtectedAdminLayout>
        )}
      </Route>
      <Route path="/admin/analytics">
        {() => (
          <ProtectedAdminLayout>
            <AdminAnalytics />
          </ProtectedAdminLayout>
        )}
      </Route>
      <Route path="/admin/smartmoving">
        {() => (
          <ProtectedAdminLayout>
            <AdminSmartMoving />
          </ProtectedAdminLayout>
        )}
      </Route>
      <Route path="/admin/packages">
        {() => (
          <ProtectedAdminLayout>
            <AdminPackages />
          </ProtectedAdminLayout>
        )}
      </Route>
      <Route path="/admin/hero-videos">
        {() => (
          <ProtectedAdminLayout>
            <AdminHeroVideos />
          </ProtectedAdminLayout>
        )}
      </Route>
      <Route path="/admin/blog/new">
        {() => (
          <ProtectedAdminLayout>
            <AdminBlogEditor />
          </ProtectedAdminLayout>
        )}
      </Route>
      <Route path="/admin/blog/edit/:id">
        {() => (
          <ProtectedAdminLayout>
            <AdminBlogEditor />
          </ProtectedAdminLayout>
        )}
      </Route>
      <Route path="/admin/blog">
        {() => (
          <ProtectedAdminLayout>
            <AdminBlog />
          </ProtectedAdminLayout>
        )}
      </Route>
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function AnalyticsTracker() {
  useAnalytics();
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnalyticsTracker />
        <ScrollToTop />
        <Toaster />
        <FloatingCTA />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
