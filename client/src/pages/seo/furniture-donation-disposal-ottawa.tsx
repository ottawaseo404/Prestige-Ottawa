import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";
import { TableOfContents } from "@/components/table-of-contents";
import {
  Phone, Star, ArrowRight, ChevronDown, CheckCircle2, ChevronRight,
  Package, Leaf, MapPin, Heart, Recycle, Clock, AlertTriangle, FileText, Building2
} from "lucide-react";
import fleetImg from "@assets/prestige-fleet_1771975522124.webp";

const TOC_ITEMS = [
  { id: "donate-furniture",     title: "Where to Donate Furniture in Ottawa" },
  { id: "sell-furniture",       title: "Where to Sell Furniture in Ottawa" },
  { id: "disposal-options",     title: "Furniture Disposal Options" },
  { id: "what-to-donate",       title: "What Can Be Donated vs. Disposed" },
  { id: "moving-day-strategy",  title: "Moving Day Declutter Strategy" },
  { id: "junk-removal",         title: "Junk Removal vs. Donation Pickup" },
  { id: "faq",                  title: "FAQ" },
];

const DONATION_CENTRES = [
  { name: "The Ottawa Mission", address: "35 Waller St, Ottawa", accepts: "Furniture, clothing, household items", pickup: "Yes — free pickup for large items", note: "Ottawa's largest emergency shelter. Accepts most gently used furniture. Call ahead for large item pickups." },
  { name: "Furniture Bank Ottawa", address: "Multiple drop-off points", accepts: "Furniture, beds, kitchen items", pickup: "Yes — scheduled pickup service", note: "Specializes specifically in furniture redistribution. Items go directly to Ottawa families in need. Excellent choice for good-condition furniture." },
  { name: "Habitat for Humanity ReStore", address: "Multiple Ottawa locations", accepts: "Furniture, appliances, building materials", pickup: "Yes — free pickup for qualifying items", note: "Proceeds fund Habitat home builds. ReStore accepts a wide range of household items including furniture, appliances, and home improvement materials." },
  { name: "Salvation Army Ottawa", address: "Multiple locations", accepts: "Furniture, clothing, appliances, household", pickup: "Yes — call (613) 234-4881 for large items", note: "Extensive pickup network. Accepts most furniture in good condition. Provides donation tax receipts." },
  { name: "Value Village Ottawa", address: "1309 Carling Ave & other locations", accepts: "Clothing, small household items (no furniture)", pickup: "No — drop-off only, no large furniture", note: "Good for clothing, books, and small items during a move but does not accept large furniture donations." },
  { name: "The Pauline Vanier", address: "150 Booth St, Ottawa", accepts: "Household goods and furnishings", pickup: "Limited — call ahead", note: "Community service organization serving Ottawa's west end. Accepts a range of household goods for redistribution." },
  { name: "Ottawa Community Furniture Bank", address: "Various pickup zones", accepts: "Furniture, appliances, linens", pickup: "Yes — scheduled", note: "Community-run furniture redistribution network. Items go to Ottawa families transitioning from shelters or crisis situations." },
  { name: "Facebook Marketplace & Kijiji Free", address: "Online", accepts: "Virtually anything", pickup: "Arranged with recipient", note: "Listing furniture as free on Facebook Marketplace or Kijiji Ottawa typically results in same-day pickup. Ideal for bulky items you want gone immediately." },
];

const SELL_OPTIONS = [
  { platform: "Facebook Marketplace", bestFor: "Sofas, dining sets, bedroom sets", speed: "1–3 days", tip: "Ottawa buyers are active. Clear photos and a reasonable price move furniture within 24 hours." },
  { platform: "Kijiji Ottawa", bestFor: "All furniture categories", speed: "1–5 days", tip: "Canada's most active classifieds. Price slightly higher than your floor — buyers negotiate." },
  { platform: "Craigslist Ottawa", bestFor: "Vintage and unique pieces", speed: "3–7 days", tip: "Less active than Kijiji in Ottawa but draws buyers looking for specific vintage styles." },
  { platform: "Ottawa Buy Nothing Groups", bestFor: "Items you want to give free", speed: "Same day", tip: "Ottawa's Buy Nothing Facebook groups are extremely active. Free items are claimed within hours." },
  { platform: "Consignment Stores", bestFor: "Quality vintage and mid-century furniture", speed: "2–8 weeks", tip: "Ottawa's consignment furniture stores (Vintage Ottawa, Second Look) take quality pieces on consignment." },
  { platform: "Estate Sales Companies", bestFor: "Full household contents", speed: "1–2 weeks", tip: "If downsizing from a full home, an estate sale company handles everything. They take 25–35% but manage all logistics." },
];

const DISPOSAL = [
  { method: "City of Ottawa Bulky Item Pickup", cost: "Free (limited)", detail: "Ottawa offers scheduled bulky item curbside pickup through the City of Ottawa's Solid Waste Services. You can book online at ottawa.ca. Limitations: a set number of items per booking, specific eligibility, and pickup dates may be 2–4 weeks out." },
  { method: "Hazardous Waste Drop-Off (Waste Drop)", cost: "Free", detail: "For items with hazardous components (old TVs, computer monitors, certain appliances with refrigerants), the City of Ottawa's Waste Drop facilities accept them free of charge. Locations at Trail Road and Nepean Waste Drop on Moodie Drive." },
  { method: "Junk Removal Companies", cost: "$100–$500+ depending on volume", detail: "Ottawa junk removal services (1-800-GOT-JUNK, Junk King, Ottawa Junk Removal) pick up directly from your home and handle all disposal. Fast but expensive. Best when time is more valuable than cost." },
  { method: "Landfill Drop-Off (Trail Road)", cost: "$0–$80 depending on weight", detail: "The Trail Road Waste Facility accepts residential disposal. You pay by weight over a small free threshold. Requires a vehicle large enough to transport your items." },
  { method: "Metal Scrap Dealers", cost: "May earn money", detail: "Scrap metal dealers in Ottawa (Ottawa Metal Recycling, local dealers on Industrial Ave) pay cash for metal furniture, appliances, and scrap. Not much per item, but you're paid to dispose rather than paying." },
  { method: "Mattress Recycling", cost: "Free–$30", detail: "Old mattresses cannot go to landfill in Ontario. Ottawa has mattress recycling programs through Mattress Recycling Council and some city drop-off sites. Many furniture retailers also offer mattress take-back on delivery of a new one." },
];

const FAQS = [
  { q: "Who picks up donated furniture in Ottawa for free?", a: "The Ottawa Mission, Furniture Bank Ottawa, Habitat for Humanity ReStore, and the Salvation Army all offer free pickup for large furniture donations in Ottawa. Pickup availability varies — call or book online in advance, especially around a move date when scheduling is tighter. Most services require 3–7 days' notice for pickups." },
  { q: "What condition does furniture need to be in to donate in Ottawa?", a: "Donation centres in Ottawa generally require furniture to be clean, structurally sound, and free of major damage (broken frames, significant stains, or infestation). Fabric pieces must have no stains, odours, or pet hair beyond normal cleaning. Metal and wood furniture with cosmetic wear is usually fine. When in doubt, call the charity before arranging pickup — they'll tell you exactly what they can accept." },
  { q: "Can I donate a mattress in Ottawa?", a: "Most Ottawa charities do not accept used mattresses for hygiene reasons. The Salvation Army occasionally accepts newer mattresses in excellent condition. For disposal, Ottawa has mattress recycling options through the Mattress Recycling Council (search mattressrecycling.ca for Ottawa drop-off locations) or through some city programs. Many new mattress retailers also offer take-back programs when delivering a new mattress." },
  { q: "Where can I sell furniture fast in Ottawa before a move?", a: "Facebook Marketplace and Kijiji Ottawa are the fastest options — good-condition Ottawa furniture typically sells within 24–48 hours if priced reasonably. For free furniture you want cleared quickly, Ottawa Buy Nothing Facebook groups result in same-day claims. For quality vintage pieces, Ottawa consignment stores take items on a few-weeks timeline with a percentage of the sale." },
  { q: "How does the Ottawa City bulky item pickup work?", a: "Ottawa's Solid Waste Services offers scheduled curbside bulky item pickup for Ottawa residents. Book online at ottawa.ca, specify the items, and set a pickup date. There are limits on how many items per booking and the service can book 2–4 weeks out depending on your area. Items must be placed curbside the night before your pickup date." },
  { q: "Can Prestige Moving take away unwanted furniture?", a: "Prestige Moving's crew can help you identify which items you want removed during your move. For items being donated, we can often coordinate with the charity for pickup. For disposal, we can set items curbside for city pickup or coordinate with junk removal. Ask about our declutter consultation as part of your move booking." },
  { q: "What is the best way to get rid of furniture in Ottawa for free?", a: "The fastest free disposal: list items as free on Ottawa Facebook Marketplace or Kijiji with \"must take today\" in the listing. Items are typically claimed within hours. For charities, contact Furniture Bank Ottawa or the Salvation Army for free scheduled pickup — though this requires a few days' advance notice." },
  { q: "Do donation centres in Ottawa issue tax receipts for furniture?", a: "Yes — the Salvation Army, Habitat for Humanity ReStore, and the Ottawa Mission all issue charitable donation tax receipts for qualifying furniture donations. The receipt will reflect the fair market value of the donated items. Ask for a receipt at the time of donation or pickup." },
];

export default function FurnitureDonationDisposalOttawa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Where to Donate, Sell or Dispose of Furniture in Ottawa (2026 Guide)",
    "description": "The complete Ottawa guide to furniture donation centres, selling platforms, and disposal options. Updated for 2026 with pickup details and addresses.",
    "author": { "@type": "Organization", "name": "Prestige Moving" },
    "url": "https://prestigemoving.ca/furniture-donation-disposal-ottawa",
    "datePublished": "2026-01-01",
    "dateModified": "2026-03-01"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(({ q, a }) => ({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } }))
  };

  return (
    <>
      <Helmet>
        <title>Furniture Donation & Disposal in Ottawa (2026 Guide) | Prestige Moving</title>
        <meta name="description" content="Complete Ottawa guide to donating, selling, or disposing of furniture before or after a move. Donation centres with free pickup, selling platforms, disposal options, and city services." />
        <meta name="keywords" content="furniture donation Ottawa, where to donate furniture Ottawa, furniture disposal Ottawa, sell furniture Ottawa, Ottawa Mission furniture pickup, Habitat for Humanity Ottawa, bulky item pickup Ottawa, junk removal Ottawa" />
        <link rel="canonical" href="https://prestigemoving.ca/furniture-donation-disposal-ottawa" />
        <meta property="og:title" content="Furniture Donation & Disposal in Ottawa (2026 Guide)" />
        <meta property="og:description" content="Where to donate, sell, or dispose of furniture in Ottawa — addresses, pickup details, and expert moving tips." />
        <meta property="og:url" content="https://prestigemoving.ca/furniture-donation-disposal-ottawa" />
        <meta property="og:image" content="https://prestigemoving.ca/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SharedNavigation />
      <div className="min-h-screen bg-white">

        {/* HERO */}
        <section className="relative h-[440px] flex items-end pb-16">
          <img src={fleetImg} alt="Furniture donation and disposal Ottawa moving guide" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d1620]/92" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="inline-flex items-center gap-2 bg-[#C5A572]/20 border border-[#C5A572]/40 rounded-full px-4 py-1.5 mb-4">
              <Recycle className="h-3.5 w-3.5 text-[#C5A572]" />
              <span className="text-[#C5A572] text-sm font-semibold">Ottawa Local Guide · Updated 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 max-w-3xl leading-tight">
              Furniture Donation &amp; Disposal in Ottawa
            </h1>
            <p className="text-lg text-white/70 max-w-xl mb-8">Where to donate, sell, or dispose of furniture in Ottawa — charity pickups, selling platforms, city disposal services, and everything in between.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold">Book Your Ottawa Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 backdrop-blur-sm bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="xl:flex gap-12 items-start">
            <TableOfContents items={TOC_ITEMS} />

            <div className="flex-1 min-w-0 space-y-20">

              {/* INTRO PARA */}
              <div>
                <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                  Moving is the perfect moment to declutter — and in Ottawa, you have excellent options for giving your unwanted furniture a second life rather than sending it to landfill. Whether you're downsizing from a large home, upgrading furniture, or clearing out a loved one's estate, this guide covers every Ottawa donation centre, selling platform, and disposal option available in 2026.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A well-planned pre-move declutter does more than help the community and the environment — it reduces the volume of your move, which directly reduces your moving cost. Prestige Moving charges by the hour; every piece of furniture you successfully donate or sell before moving day is money you don't spend on moving it.
                </p>
              </div>

              {/* DONATE */}
              <section id="donate-furniture" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Heart className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Charity Donations</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Where to Donate Furniture in Ottawa</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Ottawa has a strong network of charities and community organizations that accept furniture donations — many with free scheduled pickup from your home. Donating furniture before a move is the most rewarding declutter option: your items go directly to Ottawa families in need, you may receive a tax receipt, and the charity handles pickup logistics so you don't have to.
                </p>
                <div className="space-y-4">
                  {DONATION_CENTRES.map(({ name, address, accepts, pickup, note }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <div className="font-bold text-[#1A2332] text-base">{name}</div>
                          <div className="text-gray-400 text-xs flex items-center gap-1 mt-0.5"><MapPin className="h-3 w-3" /> {address}</div>
                        </div>
                        <div className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${pickup.startsWith("Yes") ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                          {pickup.startsWith("Yes") ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                          {pickup.startsWith("Yes") ? "Free Pickup Available" : "Drop-Off Only"}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 mb-2"><span className="font-medium text-gray-600">Accepts: </span>{accepts}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{note}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <div className="font-bold text-blue-900 mb-2 flex items-center gap-2"><Leaf className="h-5 w-5 text-blue-500" /> Plan Donation Pickups 7–14 Days Before Your Move</div>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Ottawa donation pickups — particularly the Ottawa Mission and Salvation Army — often book 1–2 weeks out, especially in spring and fall when moving activity is highest. Contact your chosen charity as soon as you know your move date to secure a pickup appointment before your moving day.
                  </p>
                </div>
              </section>

              {/* SELL */}
              <section id="sell-furniture" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <FileText className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Selling Platforms</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Where to Sell Furniture in Ottawa Before a Move</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  If your furniture is in good condition but you'd prefer to recoup some value before the move, Ottawa has several active platforms for selling used furniture. The key is timing: start listing items 3–4 weeks before your move to have enough time for buyers to arrange pickup without the pressure of your move deadline.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {SELL_OPTIONS.map(({ platform, bestFor, speed, tip }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-1">{platform}</div>
                      <div className="text-[#C5A572] text-xs font-medium mb-2">Avg. sell time: {speed}</div>
                      <div className="text-xs text-gray-400 mb-2">Best for: {bestFor}</div>
                      <p className="text-gray-500 text-xs leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 rounded-xl border border-[#C5A572]/30 bg-[#C5A572]/5">
                  <div className="font-bold text-[#1A2332] mb-2">Ottawa Selling Tip: Price to Move Quickly</div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Moving creates a hard deadline that most sellers don't have. Price your Ottawa furniture 25–30% below what you'd normally ask — the time saved and the peace of mind of a cleared house before moving day is worth more than holding out for top dollar. A sofa that sells for $150 less than you hoped is still infinitely better than paying $100 in moving costs to transport it and then selling it later from your new home.
                  </p>
                </div>
              </section>

              {/* DISPOSAL */}
              <section id="disposal-options" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Recycle className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Disposal Options</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Furniture Disposal Options in Ottawa</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  When furniture can't be donated or sold — because it's damaged, heavily worn, or you simply don't have time — Ottawa offers several disposal pathways. Choose based on your timeline, budget, and volume.
                </p>
                <div className="space-y-4">
                  {DISPOSAL.map(({ method, cost, detail }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div className="font-bold text-[#1A2332] text-sm">{method}</div>
                        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium shrink-0">Cost: {cost}</div>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* WHAT TO DONATE vs DISPOSE */}
              <section id="what-to-donate" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Package className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Decision Guide</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">What Can Be Donated vs. Disposed?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "Typically Accepted for Donation", color: "green", items: ["Sofas and couches (clean, no major stains)", "Dining tables and chairs", "Dressers and chests of drawers", "Bookshelves and storage units", "Desks and office chairs", "Lamps and light fixtures", "Working kitchen appliances", "Linens and bedding (clean)", "Books and media", "Working electronics"] },
                    { label: "Typically Not Accepted / Must Dispose", color: "red", items: ["Mattresses (hygiene restriction at most charities)", "Broken or structurally unsound furniture", "Items with heavy stains, odour, or mold", "CRT televisions (hazardous material)", "Old box spring sets", "Heavily worn upholstery with pet damage", "Particle board furniture with delamination", "Items from homes with pest issues", "Cribs and car seats (safety regulations)", "Large appliances with refrigerants (call first)"] },
                  ].map(({ label, color, items }, i) => (
                    <div key={i} className={`p-5 rounded-xl border ${color === "green" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                      <div className={`font-bold text-sm mb-3 ${color === "green" ? "text-green-900" : "text-red-900"}`}>{label}</div>
                      <ul className="space-y-1.5">
                        {items.map((item, j) => (
                          <li key={j} className={`text-sm flex items-start gap-2 ${color === "green" ? "text-green-800" : "text-red-800"}`}>
                            {color === "green" ? <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" /> : <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />}
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* MOVING DAY STRATEGY */}
              <section id="moving-day-strategy" className="scroll-mt-24 bg-gray-50/70 rounded-2xl p-8">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Clock className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Pre-Move Timeline</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-6">Ottawa Moving Day Declutter Strategy</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The most effective declutter happens in stages, not on moving day. Here's the timeline that Ottawa movers recommend:
                </p>
                <div className="space-y-4">
                  {[
                    { week: "4–6 Weeks Before", action: "Inventory everything", detail: "Walk every room and decide: move it, donate it, sell it, or dispose of it. Make three lists. The sell list goes to Kijiji and Facebook Marketplace immediately. The donate list gets charity pickup scheduled. The dispose list gets city pickup booked." },
                    { week: "3–4 Weeks Before", action: "List items for sale", detail: "Post your sell list on Facebook Marketplace and Kijiji with good photos and prices set 25% below typical market. Give buyers 2–3 weeks to respond. Be firm on your pickup-by date." },
                    { week: "2–3 Weeks Before", action: "Schedule donation pickups", detail: "Call the Ottawa Mission, Furniture Bank, or Salvation Army to schedule pickup. Confirm the date is before your move date. Ottawa charity pickups book up — don't leave this to the last week." },
                    { week: "1 Week Before", action: "Book city bulky item pickup or junk removal", detail: "Anything unsold and not picked up by a charity goes to the city or a junk removal company. Book with enough lead time that pickup happens before or on moving day." },
                    { week: "2 Days Before", action: "Stage donation and disposal items", detail: "Move all donate/dispose items to one area of the home (typically near the front door or garage). This keeps your moving day loading area clear and prevents your movers from accidentally loading items you intended to leave behind." },
                  ].map(({ week, action, detail }, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100">
                      <div className="min-w-[100px] text-[#C5A572] font-bold text-sm pt-0.5">{week}</div>
                      <div>
                        <div className="font-bold text-[#1A2332] text-sm mb-1">{action}</div>
                        <div className="text-gray-500 text-sm leading-relaxed">{detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* JUNK REMOVAL */}
              <section id="junk-removal" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <Building2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Service Comparison</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-4">Junk Removal vs. Donation Pickup in Ottawa</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Understanding when to use each service saves both money and time during your Ottawa move.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Use Donation Pickup When:", points: ["Furniture is in good, clean condition", "You want a tax receipt for charitable giving", "You have 1–2 weeks before your move date", "You want items to go directly to people who need them", "Multiple charities accept your specific items"] },
                    { title: "Use Junk Removal When:", points: ["Furniture is damaged, stained, or unusable", "You're within 1–3 days of your move", "You have a mixed load of junk and some good items", "You want everything gone in one visit", "City pickup timeline doesn't work for your schedule"] },
                  ].map(({ title, points }, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="font-bold text-[#1A2332] text-sm mb-3">{title}</div>
                      <ul className="space-y-2">
                        {points.map((p, j) => <li key={j} className="flex items-start gap-2 text-gray-600 text-sm"><CheckCircle2 className="h-4 w-4 text-[#C5A572] shrink-0 mt-0.5" />{p}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-24">
                <div className="inline-flex items-center gap-2 bg-[#C5A572]/10 border border-[#C5A572]/20 rounded-full px-4 py-1.5 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-[#C5A572]" />
                  <span className="text-[#C5A572] text-sm font-semibold">Frequently Asked Questions</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A2332] mb-8">FAQ — Furniture Donation &amp; Disposal in Ottawa</h2>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button className="w-full flex items-center justify-between gap-4 p-5 text-left hover-elevate" onClick={() => setOpenFaq(openFaq === i ? null : i)} data-testid={`button-faq-donation-${i}`}>
                        <span className="font-semibold text-[#1A2332] text-sm">{q}</span>
                        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      {openFaq === i && <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{a}</div>}
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>

        {/* BOTTOM LINKS */}
        <section className="bg-[#0d1620] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              <div>
                <div className="flex items-center gap-2 mb-5"><Recycle className="h-4 w-4 text-[#C5A572]" /><span className="text-[#C5A572] text-xs font-bold uppercase tracking-widest">Related Ottawa Guides</span></div>
                <div className="space-y-1">
                  {[
                    { label: "How to Choose a Moving Company", href: "/how-to-choose-a-moving-company-ottawa" },
                    { label: "Moving Boxes & Packing Supplies", href: "/moving-boxes-packing-supplies-ottawa" },
                    { label: "How Much Does Moving Cost", href: "/how-much-does-moving-cost-ottawa" },
                    { label: "Estate Cleanout Ottawa", href: "/estate-cleanout-ottawa" },
                    { label: "Junk Removal Ottawa", href: "/junk-removal-ottawa" },
                  ].map(({ label, href }) => (
                    <Link key={href} href={href}><div className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/6 group transition-colors cursor-pointer"><span className="text-white/60 text-sm group-hover:text-white transition-colors">{label}</span><ChevronRight className="h-4 w-4 text-white/20 group-hover:text-[#C5A572] transition-colors" /></div></Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-5"><MapPin className="h-4 w-4 text-[#C5A572]" /><span className="text-[#C5A572] text-xs font-bold uppercase tracking-widest">Ottawa Moving Services</span></div>
                <div className="space-y-1">
                  {[
                    { label: "Best Movers Ottawa", href: "/best-movers-ottawa" },
                    { label: "Residential Movers Ottawa", href: "/residential-movers-ottawa" },
                    { label: "Affordable Movers Ottawa", href: "/affordable-movers-ottawa" },
                    { label: "Local Movers Ottawa", href: "/local-movers-ottawa" },
                    { label: "Moving Company Ottawa", href: "/moving-company-ottawa" },
                  ].map(({ label, href }) => (
                    <Link key={href} href={href}><div className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/6 group transition-colors cursor-pointer"><span className="text-white/60 text-sm group-hover:text-white transition-colors">{label}</span><ChevronRight className="h-4 w-4 text-white/20 group-hover:text-[#C5A572] transition-colors" /></div></Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-5"><Package className="h-4 w-4 text-[#C5A572]" /><span className="text-[#C5A572] text-xs font-bold uppercase tracking-widest">Book Your Move</span></div>
                <p className="text-white/50 text-sm mb-4">Ready to move? Prestige Moving handles the heavy lifting — you handle the donations.</p>
                <Link href="/book"><Button className="bg-[#C5A572] text-[#1A2332] font-bold w-full mb-3">Book Your Ottawa Move <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                <a href="tel:6136004000"><Button variant="outline" className="text-white border-white/20 w-full"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#1A2332]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-0.5 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-[#C5A572] fill-[#C5A572]" />)}</div>
            <h2 className="text-3xl font-bold text-white mb-3">Moving in Ottawa? Let's Make It Simple.</h2>
            <p className="text-white/55 mb-8 max-w-lg mx-auto">Prestige Moving handles the heavy lifting. You handle the donations. 5.0 stars · 400+ reviews.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book"><Button size="lg" className="bg-[#C5A572] text-[#1A2332] font-bold px-8">Get a Free Moving Quote <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
              <a href="tel:6136004000"><Button size="lg" variant="outline" className="text-white border-white/30 bg-white/10"><Phone className="h-4 w-4 mr-2" /> (613) 600-4000</Button></a>
            </div>
          </div>
        </section>

      </div>
      <SharedFooter />
    </>
  );
}
