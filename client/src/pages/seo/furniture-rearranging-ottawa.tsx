import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function FurnitureRearrangingOttawa() {
  return (
    <>
      <Helmet>
        <title>Furniture Rearranging Ottawa | In-Home Furniture Moving Service | Prestige Moving</title>
        <meta name="description" content="Professional furniture rearranging in Ottawa. Need to reposition your furniture without a full move? Prestige Moving provides in-home furniture moving with floor sliders and trained crew. Call (613) 600-4000." />
        <meta name="keywords" content="furniture rearranging Ottawa, furniture rearranging service Ottawa, move furniture around Ottawa, in home furniture moving Ottawa, furniture repositioning Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/furniture-rearranging-ottawa" />
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Furniture Rearranging Ottawa —<br className="hidden md:block" /> In-Home Moving Service</h1>
            <p className="text-white/70 text-lg mb-8">You don't need a full move to rearrange your Ottawa home. Prestige Moving provides professional in-home furniture rearranging — the right equipment, floor sliders, and two trained hands to move your sofa, bed, or dining set exactly where you want it. No scratched floors. No strained backs.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-[#1A2332] mb-5">When You Need In-Home Furniture Rearranging</h2>
              <div className="space-y-3">
                {[
                  "Redesigning a living room or bedroom layout",
                  "Staging your home before listing for sale",
                  "Making space for a new piece of furniture",
                  "Repositioning furniture after new flooring installation",
                  "Moving heavy pieces from one floor to another",
                  "Optimizing a room layout for functionality or accessibility",
                  "Post-renovation furniture repositioning",
                  "Seasonal rearranging (e.g., home office setup)",
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1A2332] mb-5">Our In-Home Rearranging Service</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                <p>In-home furniture rearranging is priced at our standard hourly rates — Premium ($155/hr, 2 movers) or Deluxe ($195/hr, 3 movers) — with a 3-hour minimum. For most single-room rearranging jobs, the minimum covers the full task comfortably. For multi-room rearranges or heavy between-floor moves, we assess based on your specific requirements.</p>
                <p>Our crew arrives with furniture sliders for hardwood and tile floors, moving straps for heavy lifting, and all the equipment needed to reposition furniture without scratching floors or walls. We move the pieces, place them where you direct, and can move them again if the first position doesn't feel right.</p>
                <p>For full furniture moving as part of a relocation, see our <Link href="/furniture-movers-ottawa" className="text-[#C5A572] hover:underline">furniture movers Ottawa</Link> page. For staging a home before sale, see our <Link href="/home-staging-ottawa" className="text-[#C5A572] hover:underline">home staging Ottawa</Link> service.</p>
              </div>
              <div className="mt-6 bg-[#1A2332] rounded-xl p-5">
                <div className="text-[#C5A572] font-bold mb-1">From $155/hr · 3-hour minimum</div>
                <div className="text-white/70 text-sm mb-3">Most single-room rearranges complete within the 3-hour minimum</div>
                <a href="tel:6136004000" className="block">
                  <Button className="bg-[#C5A572] text-[#1A2332] font-bold w-full"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Book Furniture Rearranging in Ottawa</h2>
          <p className="text-white/65 mb-8">Professional crew · Floor sliders · No scratches · 5.0★ rated</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
