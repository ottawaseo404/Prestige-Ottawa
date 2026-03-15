import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { Phone, ArrowRight, CheckCircle2, ChevronDown, Heart } from "lucide-react";

const PET_TIPS = [
  { title: "Book a Pet-Sitter for Moving Day", desc: "The safest option for cats and dogs is removing them from the home entirely on moving day. A friend's house, a pet-sitter, or a daycare facility keeps them calm and out of the crew's path." },
  { title: "Keep Carriers and Crates Accessible", desc: "Don't pack the carrier. It goes in your car last, and your pet goes in it first thing moving morning — or at least has it available as a safe retreat." },
  { title: "Maintain Routine Through the Day", desc: "Feed your pets at their normal time, not early or late. Disruption to feeding times adds to anxiety. Keep their bowl and water dish accessible until the last possible moment." },
  { title: "Move the Pet Last, Settle Them First", desc: "Transport your pet in your personal vehicle — not the moving truck. At the new home, set up a quiet room with familiar bedding, water, and toys before bringing them in." },
  { title: "Update ID Tags and Microchip Records", desc: "Update your address on your pet's ID tags and microchip registry before moving day. If they escape in the chaos, an updated address gets them home faster." },
  { title: "Give Cats 1–2 Weeks to Adjust", desc: "Cats are territorial and need gradual introduction to new spaces. Keep them in one room for the first few days, then slowly introduce the rest of the home." },
];

const FAQS = [
  { q: "Can pets travel in the moving truck?", a: "No — pets should never travel in a moving truck. The cargo area is not temperature-controlled, not safe for animals, and legally not a transport option for pets. Transport your pet in your personal vehicle in a secure carrier or crate." },
  { q: "Should I board my pet on moving day?", a: "For dogs especially, boarding or leaving them with a friend is often the best option. An excited or anxious dog running between movers carrying heavy items creates both a safety risk and a distraction. If boarding isn't possible, confine them to a single room with a 'pets inside' sign on the door." },
  { q: "How long does it take for a cat to settle into a new home?", a: "Most cats take 1–3 weeks to feel comfortable in a new home. A gradual room-by-room introduction, familiar bedding and toys, and keeping feeding routines consistent all help. Some cats settle in days; others take longer." },
  { q: "What should I do about pet registration when I move in Ottawa?", a: "Ottawa requires dog licences, which are address-specific. Update your dog's licence through the City of Ottawa within 30 days of moving. Cat licences are also available and recommended given Ottawa's mandatory microchip bylaws for cats." },
];

export default function MovingWithPetsOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <Helmet>
        <title>Moving With Pets Ottawa | Pet-Friendly Moving Guide | Prestige Moving</title>
        <meta name="description" content="Complete guide to moving with pets in Ottawa. Tips for cats, dogs, and other animals on moving day — reducing stress, travel safety, and settling into your new Ottawa home. Prestige Moving — (613) 600-4000." />
        <meta name="keywords" content="moving with pets Ottawa, moving with cats Ottawa, moving with dogs Ottawa, pet friendly movers Ottawa, moving pets Ottawa, Ottawa pet moving guide" />
        <link rel="canonical" href="https://prestigemoving.ca/moving-with-pets-ottawa" />
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Article", "headline": "Moving with Pets Ottawa: Complete Guide", "publisher": { "@type": "Organization", "name": "Prestige Moving Ottawa" }, "url": "https://prestigemoving.ca/moving-with-pets-ottawa" })}</script>
      </Helmet>
      <SharedNavigation />
      <section className="bg-gradient-to-br from-[#1A2332] via-[#1e2c40] to-[#243347] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/15 border border-[#C5A572]/25 rounded-full px-4 py-1.5 mb-5">
              <Heart className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-xs font-semibold uppercase tracking-wider">Ottawa Pet Moving Guide</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">Moving With Pets Ottawa —<br className="hidden md:block" /> Keep Your Animals Calm & Safe</h1>
            <p className="text-white/70 text-lg mb-8">Moving day is stressful for people. For pets, it can be genuinely disorienting. This guide covers what to do before, during, and after an Ottawa move to keep your cats, dogs, and other animals safe, calm, and settled.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Book Your Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-5">Why Moving Is Hard on Pets</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Cats and dogs are creatures of habit whose sense of security is tied to their physical environment. When that environment suddenly changes — boxes appearing, furniture disappearing, strangers entering the home — it registers as a threat. Dogs may become anxious, clingy, or hyperactive. Cats often hide, stop eating, or develop digestive issues. The good news is that with a little preparation, you can significantly reduce your pet's stress on moving day and help them settle into your new Ottawa home quickly.</p>
            <p>The most important thing to understand is that your pet cannot be part of the moving process itself. Open doors, heavy items being carried through, and unfamiliar people moving quickly through the home create real safety risks. A door left ajar while movers carry a sofa through it is an escape opportunity your dog or cat will take. A pet underfoot during heavy carrying creates injury risk for both the crew and the animal.</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-3 text-center">6 Tips for Moving With Pets in Ottawa</h2>
          <p className="text-gray-500 text-center mb-10 text-sm">Practical steps that make a real difference for your animals on moving day.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PET_TIPS.map(({ title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-5">
                <CheckCircle2 className="h-5 w-5 text-[#C5A572] mb-3" />
                <h3 className="font-bold text-[#1A2332] mb-2 text-sm">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">Moving With Pets Ottawa — FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-[#1A2332] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#C5A572] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">{faq.a}</div>}
              </div>
            ))}
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            Related: <Link href="/moving-with-children-ottawa" className="text-[#C5A572] hover:underline">Moving with Children Ottawa</Link> · <Link href="/ottawa-moving-checklist" className="text-[#C5A572] hover:underline">Ottawa Moving Checklist</Link>
          </div>
        </div>
      </section>
      <section className="bg-[#1A2332] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Book Your Ottawa Move Today</h2>
          <p className="text-white/65 mb-8">5.0★ rated · Written quote · WSIB certified · Pet-friendly scheduling</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
          </div>
        </div>
      </section>
      <SharedFooter />
    </>
  );
}
