import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, ClipboardList } from "lucide-react";

const CHECKLIST_SECTIONS = [
  {
    phase: "6–8 Weeks Before",
    color: "bg-blue-50 border-blue-200",
    items: [
      "Select new office space and finalize lease or purchase agreement",
      "Hire your Ottawa office movers and confirm the move date",
      "Notify building management at both addresses about move-in/move-out",
      "Create a complete IT infrastructure inventory (servers, networking, workstations)",
      "Notify clients and suppliers of upcoming address change",
      "Book elevator and loading bay at both buildings",
    ],
  },
  {
    phase: "4–6 Weeks Before",
    color: "bg-[#C5A572]/10 border-[#C5A572]/30",
    items: [
      "Begin purging files, equipment, and furniture not moving to new space",
      "Order new furniture, equipment, or fit-out items for the new office",
      "Plan new office layout — assign desks, meeting rooms, storage",
      "Coordinate with IT team on server room decommission and recommission plan",
      "Notify Canada Post and CRA of address change",
      "Update address on all business registrations, GST/HST accounts",
    ],
  },
  {
    phase: "2–4 Weeks Before",
    color: "bg-green-50 border-green-200",
    items: [
      "Begin packing non-essential files and archived documents",
      "Label all boxes with destination room/workstation",
      "Confirm after-hours or weekend access with both buildings",
      "Brief all staff on the move plan, timeline, and their responsibilities",
      "Arrange temporary IT setup if there will be any gap in internet service",
      "Order moving supplies: boxes, labels, markers, tape",
    ],
  },
  {
    phase: "Moving Week",
    color: "bg-purple-50 border-purple-200",
    items: [
      "Confirm crew arrival time with your Ottawa office movers",
      "Assign one staff member as on-site point of contact for the crew",
      "Back up all servers and critical data before physical move begins",
      "Tag all furniture and equipment with destination labels",
      "Clear all desks and personal items into labelled boxes",
      "Disconnect and label all IT cables and peripherals",
    ],
  },
  {
    phase: "Moving Day",
    color: "bg-orange-50 border-orange-200",
    items: [
      "Be on-site or have your coordinator present from crew arrival",
      "Walk movers through the floor plan at destination before they start",
      "Monitor loading bay usage and building access windows",
      "Ensure IT equipment is the last to be loaded and first to be unloaded",
      "Photograph condition of old office before final walkthrough",
      "Conduct final walkthrough at old office — keys, parking passes, access cards",
    ],
  },
  {
    phase: "First Week After",
    color: "bg-gray-50 border-gray-200",
    items: [
      "Reconnect and test all IT infrastructure",
      "Update business address on website, Google Business Profile, and all online listings",
      "Send official address change notification to all clients and vendors",
      "Identify any items damaged or missing during the move and document for insurance",
      "Return old office access cards, parking passes, and keys",
      "Conduct staff walkthrough and gather feedback for future move planning",
    ],
  },
];

export default function OfficeMovingChecklistOttawa() {
  return (
    <>
      <Helmet>
        <title>Office Moving Checklist Ottawa 2026 | Commercial Move Planning | Prestige Moving</title>
        <meta name="description" content="Complete Ottawa office moving checklist for 2026. 6-phase timeline from 8 weeks before to post-move. Download and follow for a zero-downtime office relocation. Prestige Moving — (613) 600-4000." />
        <meta name="keywords" content="office moving checklist Ottawa, office move checklist Ottawa, commercial moving checklist Ottawa, office relocation checklist Ottawa, business move checklist Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/office-moving-checklist-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Office Moving Checklist Ottawa 2026", "publisher": { "@type": "Organization", "name": "Prestige Moving Ottawa" }, "url": "https://prestigemoving.ca/office-moving-checklist-ottawa" })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <ClipboardList className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Office Move Planning</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Ottawa Office Moving Checklist<br className="hidden md:block" /> — 6-Phase Timeline 2026</h1>
            <p className="text-white/70 text-lg mb-8">A structured, phase-by-phase checklist for Ottawa businesses planning an office relocation. Start 6–8 weeks out and arrive at moving day with nothing left to chance — and a team that returns to full operations Monday morning.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/office-movers-ottawa"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Hire Office Movers <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {CHECKLIST_SECTIONS.map(({ phase, color, items }) => (
            <div key={phase} className={`border rounded-2xl p-6 ${color}`}>
              <h2 className="text-lg font-bold text-[#1A2332] mb-5">{phase}</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {items.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Ottawa Office Move Planning Notes</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>The most common failure point in Ottawa office moves is IT infrastructure planning. Businesses that treat the server room and networking as an afterthought — disconnecting and reconnecting "ad hoc" on moving day — routinely experience 24–48 hour outages that cost far more than the move itself. The correct approach is to have your IT team (internal or external) produce a written decommission and recommission plan, with all cables labelled, server configurations documented, and a tested backup of all data before physical moving begins.</p>
            <p>The second most common failure is underestimating building logistics. Ottawa office buildings have strict elevator windows, loading bay reservations that can book up days in advance, and security protocols (access cards, visitor sign-in) that add time to the move if not pre-arranged. Your <Link href="/office-movers-ottawa" className="text-[#C5A572] hover:underline">office movers</Link> should handle building coordination at both addresses — this is part of Prestige Moving's standard commercial service.</p>
            <p>See also: <Link href="/commercial-movers-ottawa" className="text-[#C5A572] hover:underline">Commercial Movers Ottawa</Link> · <Link href="/office-movers-ottawa" className="text-[#C5A572] hover:underline">Office Movers Ottawa</Link></p>
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Plan Your Ottawa Office Move?</h2>
          <p className="text-white/65 mb-8">Dedicated project manager · After-hours availability · Written move plan · 5.0★ rated</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/office-movers-ottawa"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Hire Office Movers <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
