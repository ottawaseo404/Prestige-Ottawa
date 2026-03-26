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
import MoversInHintonburg from "@/pages/seo/movers-in-hintonburg";
import MoversInBeaconHill from "@/pages/seo/movers-in-beacon-hill";
import MoversInManotick from "@/pages/seo/movers-in-manotick";
import MoversInOrleansVillage from "@/pages/seo/movers-in-orleans-village";
import JunkRemovalOttawa from "@/pages/seo/junk-removal-ottawa";
import FurnitureAssemblyOttawa from "@/pages/seo/furniture-assembly-ottawa";
import HomeStagingOttawa from "@/pages/seo/home-staging-ottawa";
import EstateCleanoutOttawa from "@/pages/seo/estate-cleanout-ottawa";
import CustomCratingOttawa from "@/pages/seo/custom-crating-ottawa";
import MoversInOttawa from "@/pages/seo/movers-in-ottawa";
import LongDistanceMoversOttawa from "@/pages/seo/long-distance-movers-ottawa";
import HowMuchDoesMovingCostOttawa from "@/pages/seo/how-much-does-moving-cost-ottawa";
import OttawaToMontrealMovers from "@/pages/seo/ottawa-to-montreal-movers";
import OttawaToTorontoMovers from "@/pages/seo/ottawa-to-toronto-movers";
import OttawaToVancouverMovers from "@/pages/seo/ottawa-to-vancouver-movers";
import OttawaToCalgaryMovers from "@/pages/seo/ottawa-to-calgary-movers";
import OttawaToNewBrunswickMovers from "@/pages/seo/ottawa-to-new-brunswick-movers";
import OttawaToHalifaxMovers from "@/pages/seo/ottawa-to-halifax-movers";
import OttawaToNovaScotiaMovers from "@/pages/seo/ottawa-to-nova-scotia-movers";
import MoversNearMeOttawa from "@/pages/seo/movers-near-me-ottawa";
import ResidentialMoversOrleans from "@/pages/seo/residential-movers-orleans";
import ResidentialMoversKanata from "@/pages/seo/residential-movers-kanata";
import ResidentialMoversBarrhaven from "@/pages/seo/residential-movers-barrhaven";
import ResidentialMoversNepean from "@/pages/seo/residential-movers-nepean";
import ResidentialMoversGloucester from "@/pages/seo/residential-movers-gloucester";
import ResidentialMoversWestboro from "@/pages/seo/residential-movers-westboro";
import ResidentialMoversTheGlebe from "@/pages/seo/residential-movers-the-glebe";
import ResidentialMoversCentretown from "@/pages/seo/residential-movers-centretown";
import ResidentialMoversSandyHill from "@/pages/seo/residential-movers-sandy-hill";
import ResidentialMoversStittsville from "@/pages/seo/residential-movers-stittsville";
import ResidentialMoversManotick from "@/pages/seo/residential-movers-manotick";
import CommercialMoversOrleans from "@/pages/seo/commercial-movers-orleans";
import CommercialMoversKanata from "@/pages/seo/commercial-movers-kanata";
import CommercialMoversBarrhaven from "@/pages/seo/commercial-movers-barrhaven";
import CommercialMoversNepean from "@/pages/seo/commercial-movers-nepean";
import CommercialMoversGloucester from "@/pages/seo/commercial-movers-gloucester";
import CommercialMoversWestboro from "@/pages/seo/commercial-movers-westboro";
import CommercialMoversTheGlebe from "@/pages/seo/commercial-movers-the-glebe";
import CommercialMoversCentretown from "@/pages/seo/commercial-movers-centretown";
import CommercialMoversSandyHill from "@/pages/seo/commercial-movers-sandy-hill";
import CommercialMoversStittsville from "@/pages/seo/commercial-movers-stittsville";
import CommercialMoversManotick from "@/pages/seo/commercial-movers-manotick";
import ResidentialMoversAltaVista from "@/pages/seo/residential-movers-alta-vista";
import ResidentialMoversHintonburg from "@/pages/seo/residential-movers-hintonburg";
import ResidentialMoversRiversideSouth from "@/pages/seo/residential-movers-riverside-south";
import ResidentialMoversRockcliffePark from "@/pages/seo/residential-movers-rockcliffe-park";
import ResidentialMoversBeaconHill from "@/pages/seo/residential-movers-beacon-hill";
import ResidentialMoversOrleansVillage from "@/pages/seo/residential-movers-orleans-village";
import CommercialMoversAltaVista from "@/pages/seo/commercial-movers-alta-vista";
import CommercialMoversHintonburg from "@/pages/seo/commercial-movers-hintonburg";
import CommercialMoversRiversideSouth from "@/pages/seo/commercial-movers-riverside-south";
import CommercialMoversRockcliffePark from "@/pages/seo/commercial-movers-rockcliffe-park";
import CommercialMoversBeaconHill from "@/pages/seo/commercial-movers-beacon-hill";
import CommercialMoversOrleansVillage from "@/pages/seo/commercial-movers-orleans-village";
import AdminDashboard from "@/pages/admin/dashboard";
import AdminBookings from "@/pages/admin/bookings";
import AdminAnalytics from "@/pages/admin-analytics";
import AdminSmartMoving from "@/pages/admin/smartmoving";
import AdminPackages from "@/pages/admin/packages";
import AdminHeroVideos from "@/pages/admin/hero-videos";
import AdminBlog from "@/pages/admin/blog";
import AdminBlogEditor from "@/pages/admin/blog-editor";
import AdminPages from "@/pages/admin/pages";
import AdminSeoReport from "@/pages/admin/seo-report";
import AdminLogin from "@/pages/admin-login";
import OttawaPianoMovers from "@/pages/seo/ottawa-piano-movers";
import HowToChooseMovingCompanyOttawa from "@/pages/seo/how-to-choose-a-moving-company-ottawa";
import OttawaContractors from "@/pages/seo/ottawa-contractors";
import OttawaContractorsMaintenanceGuide from "@/pages/seo/ottawa-contractors-maintenance-guide";
import ApartmentMoversOttawa from "@/pages/seo/apartment-movers-ottawa";
import CondoMoversOttawa from "@/pages/seo/condo-movers-ottawa";
import CheapMoversOttawa from "@/pages/seo/cheap-movers-ottawa";
import SameDayMoversOttawa from "@/pages/seo/same-day-movers-ottawa";
import LastMinuteMoversOttawa from "@/pages/seo/last-minute-movers-ottawa";
import OfficeMoversOttawa from "@/pages/seo/office-movers-ottawa";
import MovingInWinterOttawa from "@/pages/seo/moving-in-winter-ottawa";
import OttawaNeighbourhoodsGuide from "@/pages/seo/ottawa-neighbourhoods-guide";
import MovingCompaniesOttawaReviews from "@/pages/seo/moving-companies-ottawa-reviews";
import FurnitureDonationDisposalOttawa from "@/pages/seo/furniture-donation-disposal-ottawa";
import MovingBoxesPackingSuppliesOttawa from "@/pages/seo/moving-boxes-packing-supplies-ottawa";
import LocalOttawaMovingRates from "@/pages/seo/local-ottawa-moving-rates";
import OttawaPackingServices from "@/pages/seo/ottawa-packing-services";
import MovingToOttawaFromToronto from "@/pages/seo/moving-to-ottawa-from-toronto";
import ProfessionalHoistingOttawa from "@/pages/seo/professional-hoisting-ottawa";
import PreparingAppliancesMovingOttawa from "@/pages/seo/preparing-appliances-for-moving-ottawa";
import KanataMoverPage from "@/pages/seo/kanata-movers";
import BarrhavenMovers from "@/pages/seo/barrhaven-movers";
import MovingQuotesOttawa from "@/pages/seo/moving-quotes-ottawa";
import FreeStorageMovingOttawa from "@/pages/seo/free-storage-moving-ottawa";
import ApplianceMoversOttawa from "@/pages/seo/appliance-movers-ottawa";
import FurnitureMoversOttawa from "@/pages/seo/furniture-movers-ottawa";
import SeniorMoversOttawa from "@/pages/seo/senior-movers-ottawa";
import StudentMoversOttawa from "@/pages/seo/student-movers-ottawa";
import MilitaryMoversOttawa from "@/pages/seo/military-movers-ottawa";
import MovingWithPetsOttawa from "@/pages/seo/moving-with-pets-ottawa";
import MovingWithChildrenOttawa from "@/pages/seo/moving-with-children-ottawa";
import OfficeMovingChecklistOttawa from "@/pages/seo/office-moving-checklist-ottawa";
import DownsizingMovingOttawa from "@/pages/seo/downsizing-moving-ottawa";
import RelocationServicesOttawa from "@/pages/seo/relocation-services-ottawa";
import PackingAndMovingOttawa from "@/pages/seo/packing-and-moving-ottawa";
import TownhouseMoversOttawa from "@/pages/seo/townhouse-movers-ottawa";
import MovingLabourOttawa from "@/pages/seo/moving-labour-ottawa";
import TwoMenAndTruckOttawa from "@/pages/seo/two-men-and-truck-ottawa";
import HouseMoversOttawa from "@/pages/seo/house-movers-ottawa";
import FurnitureRearrangingOttawa from "@/pages/seo/furniture-rearranging-ottawa";
import MovingTipsOttawa from "@/pages/seo/moving-tips-ottawa";
import OttawaToGatineauMovers from "@/pages/seo/ottawa-to-gatineau-movers";
import MovingFromMontrealToOttawa from "@/pages/seo/moving-from-montreal-to-ottawa";
import FirstHomeMoversOttawa from "@/pages/seo/first-home-movers-ottawa";
import OttawaMovingChecklist from "@/pages/seo/ottawa-moving-checklist";
import MovingFromOttawaToToronto from "@/pages/seo/moving-from-ottawa-to-toronto";
import MovingFromOttawaToVancouver from "@/pages/seo/moving-from-ottawa-to-vancouver";
import MovingFromOttawaToCalgary from "@/pages/seo/moving-from-ottawa-to-calgary";
import MovingFromOttawaToEdmonton from "@/pages/seo/moving-from-ottawa-to-edmonton";
import MovingFromOttawaToWinnipeg from "@/pages/seo/moving-from-ottawa-to-winnipeg";
import MovingFromOttawaToHamilton from "@/pages/seo/moving-from-ottawa-to-hamilton";
import MovingFromOttawaToMississauga from "@/pages/seo/moving-from-ottawa-to-mississauga";
import MovingFromOttawaToLondonOntario from "@/pages/seo/moving-from-ottawa-to-london-ontario";
import MovingOttawaToKingston from "@/pages/seo/moving-ottawa-to-kingston";
import MovingOttawaToBrockville from "@/pages/seo/moving-ottawa-to-brockville";
import GovernmentOfficeMoversOttawa from "@/pages/seo/government-office-movers-ottawa";
import CorporateMoversOttawa from "@/pages/seo/corporate-movers-ottawa";
import MedicalOfficeMoversOttawa from "@/pages/seo/medical-office-movers-ottawa";
import OfficeRelocationOttawa from "@/pages/seo/office-relocation-ottawa";
import WarehouseMoversOttawa from "@/pages/seo/warehouse-movers-ottawa";
import RetailStoreMoversOttawa from "@/pages/seo/retail-store-movers-ottawa";
import ITEquipmentMoversOttawa from "@/pages/seo/it-equipment-movers-ottawa";
import AfterHoursCommercialMoversOttawa from "@/pages/seo/after-hours-commercial-movers-ottawa";
import WeekendCommercialMoversOttawa from "@/pages/seo/weekend-commercial-movers-ottawa";
import InterprovincialMoversOttawa from "@/pages/seo/interprovincial-movers-ottawa";
import MovingWithinOttawa from "@/pages/seo/moving-within-ottawa";
import MovingFromKanataToBbarrhaven from "@/pages/seo/moving-from-kanata-to-barrhaven";
import MovingFromOrleansToKanata from "@/pages/seo/moving-from-orleans-to-kanata";
import MovingFromNepeanToGloucester from "@/pages/seo/moving-from-nepean-to-gloucester";
import MovingFromOntarioToBC from "@/pages/seo/moving-from-ontario-to-bc";
import MovingFromOntarioToAlberta from "@/pages/seo/moving-from-ontario-to-alberta";
import MovingFromOntarioToQuebec from "@/pages/seo/moving-from-ontario-to-quebec";
import EstateMovingOttawa from "@/pages/seo/estate-moving-ottawa";
import NewConstructionHomeMoversOttawa from "@/pages/seo/new-construction-home-movers-ottawa";
import CrossTownMoversOttawa from "@/pages/seo/cross-town-movers-ottawa";
import LongDistanceMovingCompanyOttawa from "@/pages/seo/long-distance-moving-company-ottawa";
import MovingCompaniesNearMeOttawa from "@/pages/seo/moving-companies-near-me-ottawa";
import InternationalMoversOttawa from "@/pages/seo/international-movers-ottawa";
import OttawaMovingAndDelivery from "@/pages/seo/ottawa-moving-and-delivery";
import ProfessionalMoversGloucester from "@/pages/seo/professional-movers-gloucester";
import NightMoversOttawa from "@/pages/seo/night-movers-ottawa";
import MovingCompaniesOttawaPrices from "@/pages/seo/moving-companies-ottawa-prices";
import ReliableMoversOttawa from "@/pages/seo/reliable-movers-ottawa";
import ProfessionalMoversOrleans from "@/pages/seo/professional-movers-orleans";
import SeniorMovingServicesOttawa from "@/pages/seo/senior-moving-services-ottawa";
import MovingServicesOttawa from "@/pages/seo/moving-services-ottawa";
import CorporateRelocationServicesOttawa from "@/pages/seo/corporate-relocation-services-ottawa";
import MovingAndStorageOttawa from "@/pages/seo/moving-and-storage-ottawa";
import MovingNepean from "@/pages/seo/moving-nepean";
import SmallMovingCompaniesOttawa from "@/pages/seo/small-moving-companies-ottawa";
import PianoMovingOttawa from "@/pages/seo/piano-moving-ottawa";
import EmergencyMoversOttawa from "@/pages/seo/emergency-movers-ottawa";
import CommercialMovingServicesOttawa from "@/pages/seo/commercial-moving-services-ottawa";
import ResidentialMovingOttawa from "@/pages/seo/residential-moving-ottawa";
import PoolTableMoversOttawa from "@/pages/seo/pool-table-movers-ottawa";
import HotTubMoversOttawa from "@/pages/seo/hot-tub-movers-ottawa";
import GymEquipmentMoversOttawa from "@/pages/seo/gym-equipment-movers-ottawa";
import AntiqueMoversOttawa from "@/pages/seo/antique-movers-ottawa";
import EmbassyMoversOttawa from "@/pages/seo/embassy-movers-ottawa";
import FederalGovernmentMoversOttawa from "@/pages/seo/federal-government-movers-ottawa";
import LawFirmMoversOttawa from "@/pages/seo/law-firm-movers-ottawa";
import UniversityMovingOttawa from "@/pages/seo/university-moving-ottawa";
import MovingToOttawaFromVancouver from "@/pages/seo/moving-to-ottawa-from-vancouver";
import MovingToOttawaFromCalgary from "@/pages/seo/moving-to-ottawa-from-calgary";
import MovingToOttawaFromMontreal from "@/pages/seo/moving-to-ottawa-from-montreal";
import MovingToOttawaFromEdmonton from "@/pages/seo/moving-to-ottawa-from-edmonton";
import MovingToOttawaFromWinnipeg from "@/pages/seo/moving-to-ottawa-from-winnipeg";
import ResidentialMoversBellsCorners from "@/pages/seo/residential-movers-bells-corners";
import ResidentialMoversHuntClub from "@/pages/seo/residential-movers-hunt-club";
import ResidentialMoversVanier from "@/pages/seo/residential-movers-vanier";
import ResidentialMoversManorPark from "@/pages/seo/residential-movers-manor-park";
import ResidentialMoversBlackburnHamlet from "@/pages/seo/residential-movers-blackburn-hamlet";
import ResidentialMoversCrystalBeach from "@/pages/seo/residential-movers-crystal-beach";
import ResidentialMoversOverbrook from "@/pages/seo/residential-movers-overbrook";
import ResidentialMoversOldOttawaSouth from "@/pages/seo/residential-movers-old-ottawa-south";
import ResidentialMoversNewEdinburgh from "@/pages/seo/residential-movers-new-edinburgh";
import ResidentialMoversLowertown from "@/pages/seo/residential-movers-lowertown";
import WhiteGloveMoversOttawa from "@/pages/seo/white-glove-movers-ottawa";
import MovingFromHamiltonToOttawa from "@/pages/seo/moving-from-hamilton-to-ottawa";
import Sitemap from "@/pages/sitemap";
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
      <Route path="/movers-in-hintonburg" component={MoversInHintonburg} />
      <Route path="/movers-in-beacon-hill" component={MoversInBeaconHill} />
      <Route path="/movers-in-manotick" component={MoversInManotick} />
      <Route path="/movers-in-orleans-village" component={MoversInOrleansVillage} />
      <Route path="/movers-in-ottawa" component={MoversInOttawa} />
      <Route path="/long-distance-movers-ottawa" component={LongDistanceMoversOttawa} />
      <Route path="/how-much-does-moving-cost-ottawa" component={HowMuchDoesMovingCostOttawa} />
      <Route path="/ottawa-to-montreal-movers" component={OttawaToMontrealMovers} />
      <Route path="/ottawa-to-toronto-movers" component={OttawaToTorontoMovers} />
      <Route path="/ottawa-to-vancouver-movers" component={OttawaToVancouverMovers} />
      <Route path="/ottawa-to-calgary-movers" component={OttawaToCalgaryMovers} />
      <Route path="/ottawa-to-new-brunswick-movers" component={OttawaToNewBrunswickMovers} />
      <Route path="/ottawa-to-halifax-movers" component={OttawaToHalifaxMovers} />
      <Route path="/ottawa-to-nova-scotia-movers" component={OttawaToNovaScotiaMovers} />
      <Route path="/movers-near-me-ottawa" component={MoversNearMeOttawa} />
      <Route path="/residential-movers-orleans" component={ResidentialMoversOrleans} />
      <Route path="/residential-movers-kanata" component={ResidentialMoversKanata} />
      <Route path="/residential-movers-barrhaven" component={ResidentialMoversBarrhaven} />
      <Route path="/residential-movers-nepean" component={ResidentialMoversNepean} />
      <Route path="/residential-movers-gloucester" component={ResidentialMoversGloucester} />
      <Route path="/residential-movers-westboro" component={ResidentialMoversWestboro} />
      <Route path="/residential-movers-the-glebe" component={ResidentialMoversTheGlebe} />
      <Route path="/residential-movers-centretown" component={ResidentialMoversCentretown} />
      <Route path="/residential-movers-sandy-hill" component={ResidentialMoversSandyHill} />
      <Route path="/residential-movers-stittsville" component={ResidentialMoversStittsville} />
      <Route path="/residential-movers-manotick" component={ResidentialMoversManotick} />
      <Route path="/commercial-movers-orleans" component={CommercialMoversOrleans} />
      <Route path="/commercial-movers-kanata" component={CommercialMoversKanata} />
      <Route path="/commercial-movers-barrhaven" component={CommercialMoversBarrhaven} />
      <Route path="/commercial-movers-nepean" component={CommercialMoversNepean} />
      <Route path="/commercial-movers-gloucester" component={CommercialMoversGloucester} />
      <Route path="/commercial-movers-westboro" component={CommercialMoversWestboro} />
      <Route path="/commercial-movers-the-glebe" component={CommercialMoversTheGlebe} />
      <Route path="/commercial-movers-centretown" component={CommercialMoversCentretown} />
      <Route path="/commercial-movers-sandy-hill" component={CommercialMoversSandyHill} />
      <Route path="/commercial-movers-stittsville" component={CommercialMoversStittsville} />
      <Route path="/commercial-movers-manotick" component={CommercialMoversManotick} />
      <Route path="/residential-movers-alta-vista" component={ResidentialMoversAltaVista} />
      <Route path="/residential-movers-hintonburg" component={ResidentialMoversHintonburg} />
      <Route path="/residential-movers-riverside-south" component={ResidentialMoversRiversideSouth} />
      <Route path="/residential-movers-rockcliffe-park" component={ResidentialMoversRockcliffePark} />
      <Route path="/residential-movers-beacon-hill" component={ResidentialMoversBeaconHill} />
      <Route path="/residential-movers-orleans-village" component={ResidentialMoversOrleansVillage} />
      <Route path="/commercial-movers-alta-vista" component={CommercialMoversAltaVista} />
      <Route path="/commercial-movers-hintonburg" component={CommercialMoversHintonburg} />
      <Route path="/commercial-movers-riverside-south" component={CommercialMoversRiversideSouth} />
      <Route path="/commercial-movers-rockcliffe-park" component={CommercialMoversRockcliffePark} />
      <Route path="/commercial-movers-beacon-hill" component={CommercialMoversBeaconHill} />
      <Route path="/commercial-movers-orleans-village" component={CommercialMoversOrleansVillage} />
      <Route path="/junk-removal-ottawa" component={JunkRemovalOttawa} />
      <Route path="/furniture-assembly-ottawa" component={FurnitureAssemblyOttawa} />
      <Route path="/home-staging-ottawa" component={HomeStagingOttawa} />
      <Route path="/estate-cleanout-ottawa" component={EstateCleanoutOttawa} />
      <Route path="/custom-crating-ottawa" component={CustomCratingOttawa} />
      <Route path="/ottawa-piano-movers" component={OttawaPianoMovers} />
      <Route path="/how-to-choose-a-moving-company-ottawa" component={HowToChooseMovingCompanyOttawa} />
      <Route path="/ottawa-contractors" component={OttawaContractors} />
      <Route path="/ottawa-contractors-canada-home-maintenance-guide" component={OttawaContractorsMaintenanceGuide} />
      <Route path="/apartment-movers-ottawa" component={ApartmentMoversOttawa} />
      <Route path="/condo-movers-ottawa" component={CondoMoversOttawa} />
      <Route path="/cheap-movers-ottawa" component={CheapMoversOttawa} />
      <Route path="/same-day-movers-ottawa" component={SameDayMoversOttawa} />
      <Route path="/last-minute-movers-ottawa" component={LastMinuteMoversOttawa} />
      <Route path="/office-movers-ottawa" component={OfficeMoversOttawa} />
      <Route path="/moving-in-winter-ottawa" component={MovingInWinterOttawa} />
      <Route path="/ottawa-neighbourhoods-guide" component={OttawaNeighbourhoodsGuide} />
      <Route path="/moving-companies-ottawa-reviews" component={MovingCompaniesOttawaReviews} />
      <Route path="/appliance-movers-ottawa" component={ApplianceMoversOttawa} />
      <Route path="/furniture-movers-ottawa" component={FurnitureMoversOttawa} />
      <Route path="/senior-movers-ottawa" component={SeniorMoversOttawa} />
      <Route path="/student-movers-ottawa" component={StudentMoversOttawa} />
      <Route path="/military-movers-ottawa" component={MilitaryMoversOttawa} />
      <Route path="/moving-with-pets-ottawa" component={MovingWithPetsOttawa} />
      <Route path="/moving-with-children-ottawa" component={MovingWithChildrenOttawa} />
      <Route path="/office-moving-checklist-ottawa" component={OfficeMovingChecklistOttawa} />
      <Route path="/downsizing-moving-ottawa" component={DownsizingMovingOttawa} />
      <Route path="/relocation-services-ottawa" component={RelocationServicesOttawa} />
      <Route path="/packing-and-moving-ottawa" component={PackingAndMovingOttawa} />
      <Route path="/townhouse-movers-ottawa" component={TownhouseMoversOttawa} />
      <Route path="/moving-labour-ottawa" component={MovingLabourOttawa} />
      <Route path="/two-men-and-truck-ottawa" component={TwoMenAndTruckOttawa} />
      <Route path="/house-movers-ottawa" component={HouseMoversOttawa} />
      <Route path="/furniture-rearranging-ottawa" component={FurnitureRearrangingOttawa} />
      <Route path="/moving-tips-ottawa" component={MovingTipsOttawa} />
      <Route path="/ottawa-to-gatineau-movers" component={OttawaToGatineauMovers} />
      <Route path="/moving-from-montreal-to-ottawa" component={MovingFromMontrealToOttawa} />
      <Route path="/first-home-movers-ottawa" component={FirstHomeMoversOttawa} />
      <Route path="/furniture-donation-disposal-ottawa" component={FurnitureDonationDisposalOttawa} />
      <Route path="/moving-boxes-packing-supplies-ottawa" component={MovingBoxesPackingSuppliesOttawa} />
      <Route path="/local-ottawa-moving-rates" component={LocalOttawaMovingRates} />
      <Route path="/ottawa-packing-services" component={OttawaPackingServices} />
      <Route path="/moving-to-ottawa-from-toronto" component={MovingToOttawaFromToronto} />
      <Route path="/professional-hoisting-ottawa" component={ProfessionalHoistingOttawa} />
      <Route path="/preparing-appliances-for-moving-ottawa" component={PreparingAppliancesMovingOttawa} />
      <Route path="/kanata-movers" component={KanataMoverPage} />
      <Route path="/barrhaven-movers" component={BarrhavenMovers} />
      <Route path="/moving-quotes-ottawa" component={MovingQuotesOttawa} />
      <Route path="/free-storage-moving-ottawa" component={FreeStorageMovingOttawa} />
      <Route path="/ottawa-moving-checklist" component={OttawaMovingChecklist} />
      <Route path="/moving-from-ottawa-to-toronto" component={MovingFromOttawaToToronto} />
      <Route path="/moving-from-ottawa-to-vancouver" component={MovingFromOttawaToVancouver} />
      <Route path="/moving-from-ottawa-to-calgary" component={MovingFromOttawaToCalgary} />
      <Route path="/moving-from-ottawa-to-edmonton" component={MovingFromOttawaToEdmonton} />
      <Route path="/moving-from-ottawa-to-winnipeg" component={MovingFromOttawaToWinnipeg} />
      <Route path="/moving-from-ottawa-to-hamilton" component={MovingFromOttawaToHamilton} />
      <Route path="/moving-from-ottawa-to-mississauga" component={MovingFromOttawaToMississauga} />
      <Route path="/moving-from-ottawa-to-london-ontario" component={MovingFromOttawaToLondonOntario} />
      <Route path="/moving-ottawa-to-kingston" component={MovingOttawaToKingston} />
      <Route path="/moving-ottawa-to-brockville" component={MovingOttawaToBrockville} />
      <Route path="/government-office-movers-ottawa" component={GovernmentOfficeMoversOttawa} />
      <Route path="/corporate-movers-ottawa" component={CorporateMoversOttawa} />
      <Route path="/medical-office-movers-ottawa" component={MedicalOfficeMoversOttawa} />
      <Route path="/office-relocation-ottawa" component={OfficeRelocationOttawa} />
      <Route path="/warehouse-movers-ottawa" component={WarehouseMoversOttawa} />
      <Route path="/retail-store-movers-ottawa" component={RetailStoreMoversOttawa} />
      <Route path="/it-equipment-movers-ottawa" component={ITEquipmentMoversOttawa} />
      <Route path="/after-hours-commercial-movers-ottawa" component={AfterHoursCommercialMoversOttawa} />
      <Route path="/weekend-commercial-movers-ottawa" component={WeekendCommercialMoversOttawa} />
      <Route path="/interprovincial-movers-ottawa" component={InterprovincialMoversOttawa} />
      <Route path="/moving-within-ottawa" component={MovingWithinOttawa} />
      <Route path="/moving-from-kanata-to-barrhaven" component={MovingFromKanataToBbarrhaven} />
      <Route path="/moving-from-orleans-to-kanata" component={MovingFromOrleansToKanata} />
      <Route path="/moving-from-nepean-to-gloucester" component={MovingFromNepeanToGloucester} />
      <Route path="/moving-from-ontario-to-bc" component={MovingFromOntarioToBC} />
      <Route path="/moving-from-ontario-to-alberta" component={MovingFromOntarioToAlberta} />
      <Route path="/moving-from-ontario-to-quebec" component={MovingFromOntarioToQuebec} />
      <Route path="/estate-moving-ottawa" component={EstateMovingOttawa} />
      <Route path="/new-construction-home-movers-ottawa" component={NewConstructionHomeMoversOttawa} />
      <Route path="/cross-town-movers-ottawa" component={CrossTownMoversOttawa} />
      <Route path="/long-distance-moving-company-ottawa" component={LongDistanceMovingCompanyOttawa} />
      <Route path="/moving-companies-near-me-ottawa" component={MovingCompaniesNearMeOttawa} />
      <Route path="/international-movers-ottawa" component={InternationalMoversOttawa} />
      <Route path="/ottawa-moving-and-delivery" component={OttawaMovingAndDelivery} />
      <Route path="/professional-movers-gloucester" component={ProfessionalMoversGloucester} />
      <Route path="/night-movers-ottawa" component={NightMoversOttawa} />
      <Route path="/moving-companies-ottawa-prices" component={MovingCompaniesOttawaPrices} />
      <Route path="/reliable-movers-ottawa" component={ReliableMoversOttawa} />
      <Route path="/professional-movers-orleans" component={ProfessionalMoversOrleans} />
      <Route path="/senior-moving-services-ottawa" component={SeniorMovingServicesOttawa} />
      <Route path="/moving-services-ottawa" component={MovingServicesOttawa} />
      <Route path="/corporate-relocation-services-ottawa" component={CorporateRelocationServicesOttawa} />
      <Route path="/moving-and-storage-ottawa" component={MovingAndStorageOttawa} />
      <Route path="/moving-nepean" component={MovingNepean} />
      <Route path="/small-moving-companies-ottawa" component={SmallMovingCompaniesOttawa} />
      <Route path="/piano-moving-ottawa" component={PianoMovingOttawa} />
      <Route path="/emergency-movers-ottawa" component={EmergencyMoversOttawa} />
      <Route path="/commercial-moving-services-ottawa" component={CommercialMovingServicesOttawa} />
      <Route path="/residential-moving-ottawa" component={ResidentialMovingOttawa} />
      <Route path="/pool-table-movers-ottawa" component={PoolTableMoversOttawa} />
      <Route path="/hot-tub-movers-ottawa" component={HotTubMoversOttawa} />
      <Route path="/gym-equipment-movers-ottawa" component={GymEquipmentMoversOttawa} />
      <Route path="/antique-movers-ottawa" component={AntiqueMoversOttawa} />
      <Route path="/embassy-movers-ottawa" component={EmbassyMoversOttawa} />
      <Route path="/federal-government-movers-ottawa" component={FederalGovernmentMoversOttawa} />
      <Route path="/law-firm-movers-ottawa" component={LawFirmMoversOttawa} />
      <Route path="/university-moving-ottawa" component={UniversityMovingOttawa} />
      <Route path="/moving-to-ottawa-from-vancouver" component={MovingToOttawaFromVancouver} />
      <Route path="/moving-to-ottawa-from-calgary" component={MovingToOttawaFromCalgary} />
      <Route path="/moving-to-ottawa-from-montreal" component={MovingToOttawaFromMontreal} />
      <Route path="/moving-to-ottawa-from-edmonton" component={MovingToOttawaFromEdmonton} />
      <Route path="/moving-to-ottawa-from-winnipeg" component={MovingToOttawaFromWinnipeg} />
      <Route path="/residential-movers-bells-corners" component={ResidentialMoversBellsCorners} />
      <Route path="/residential-movers-hunt-club" component={ResidentialMoversHuntClub} />
      <Route path="/residential-movers-vanier" component={ResidentialMoversVanier} />
      <Route path="/residential-movers-manor-park" component={ResidentialMoversManorPark} />
      <Route path="/residential-movers-blackburn-hamlet" component={ResidentialMoversBlackburnHamlet} />
      <Route path="/residential-movers-crystal-beach" component={ResidentialMoversCrystalBeach} />
      <Route path="/residential-movers-overbrook" component={ResidentialMoversOverbrook} />
      <Route path="/residential-movers-old-ottawa-south" component={ResidentialMoversOldOttawaSouth} />
      <Route path="/residential-movers-new-edinburgh" component={ResidentialMoversNewEdinburgh} />
      <Route path="/residential-movers-lowertown" component={ResidentialMoversLowertown} />
      <Route path="/white-glove-movers-ottawa" component={WhiteGloveMoversOttawa} />
      <Route path="/moving-from-hamilton-to-ottawa" component={MovingFromHamiltonToOttawa} />
      <Route path="/sitemap" component={Sitemap} />

      <Route path="/admin/pages">
        {() => (
          <ProtectedAdminLayout>
            <AdminPages />
          </ProtectedAdminLayout>
        )}
      </Route>
      <Route path="/admin/seo-report">
        {() => (
          <ProtectedAdminLayout>
            <AdminSeoReport />
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
