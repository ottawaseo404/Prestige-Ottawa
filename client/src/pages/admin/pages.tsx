import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Search, FileText, MapPin, Briefcase, Globe } from "lucide-react";

type PageCategory = "SEO Keyword" | "Neighbourhood" | "Service" | "Core";

interface SitePage {
  title: string;
  route: string;
  category: PageCategory;
  createdDate: string;
  description: string;
}

const ALL_PAGES: SitePage[] = [
  // ── Core ──────────────────────────────────────────────────────────────
  { title: "Homepage", route: "/", category: "Core", createdDate: "2025-11-21", description: "Main landing page with hero, pricing packages, and trust signals" },
  { title: "Booking Form", route: "/book", category: "Core", createdDate: "2025-11-21", description: "Multi-step booking form with SmartMoving CRM integration" },
  { title: "Blog", route: "/blog", category: "Core", createdDate: "2025-11-28", description: "Blog listing page with AI-powered article management" },
  { title: "Contact", route: "/contact", category: "Core", createdDate: "2025-11-28", description: "Contact page with phone, email, and address details" },
  { title: "Moving Calculator", route: "/calculator", category: "Core", createdDate: "2025-11-28", description: "Interactive moving cost estimator" },

  // ── Service Pages ─────────────────────────────────────────────────────
  { title: "Residential Moving", route: "/services/residential-moving", category: "Service", createdDate: "2025-11-21", description: "Apartments, condos, and house moves" },
  { title: "Commercial Moving", route: "/services/commercial-moving", category: "Service", createdDate: "2025-11-21", description: "Office relocations and business moves" },
  { title: "Long Distance Moving", route: "/services/long-distance-moving", category: "Service", createdDate: "2025-11-21", description: "Cross-province and Canada-wide moves" },
  { title: "Packing Services", route: "/services/packing-services", category: "Service", createdDate: "2025-11-28", description: "Full-service packing and materials" },
  { title: "Moving Supplies", route: "/services/moving-supplies", category: "Service", createdDate: "2025-11-28", description: "Boxes, tape, and packing supply delivery" },
  { title: "Student Moving", route: "/services/student-moving", category: "Service", createdDate: "2025-11-30", description: "Affordable moves for students" },
  { title: "Storage Solutions", route: "/services/storage-solutions", category: "Service", createdDate: "2025-11-30", description: "Climate-controlled storage with size calculator" },
  { title: "Specialty Item Moving", route: "/services/specialty-item-moving", category: "Service", createdDate: "2025-11-30", description: "Hot tubs, pool tables, gym equipment" },
  { title: "Antique Moving", route: "/services/antique-moving", category: "Service", createdDate: "2025-11-30", description: "Careful handling of valuables and antiques" },
  { title: "Piano Moving", route: "/services/piano-moving", category: "Service", createdDate: "2025-11-30", description: "Specialized piano transport" },
  { title: "Senior Moving", route: "/services/senior-moving", category: "Service", createdDate: "2025-11-30", description: "Compassionate elderly relocations" },
  { title: "Military Moving", route: "/services/military-moving", category: "Service", createdDate: "2025-11-30", description: "PCS moves and base relocations" },

  // ── SEO Keyword Pages ─────────────────────────────────────────────────
  { title: "Ottawa Movers", route: "/ottawa-movers", category: "SEO Keyword", createdDate: "2026-02-15", description: "Primary SEO page targeting 'Ottawa Movers' keyword" },
  { title: "Moving Company Ottawa", route: "/moving-company-ottawa", category: "SEO Keyword", createdDate: "2026-02-15", description: "Targets 'Moving Company Ottawa' searches" },
  { title: "Professional Movers Ottawa", route: "/professional-movers-ottawa", category: "SEO Keyword", createdDate: "2026-02-15", description: "Targets 'Professional Movers Ottawa' searches" },
  { title: "Best Movers Ottawa", route: "/best-movers-ottawa", category: "SEO Keyword", createdDate: "2026-02-24", description: "Targets 'Best Movers Ottawa' searches" },
  { title: "Local Movers Ottawa", route: "/local-movers-ottawa", category: "SEO Keyword", createdDate: "2026-02-15", description: "Targets 'Local Movers Ottawa' searches" },
  { title: "Affordable Movers Ottawa", route: "/affordable-movers-ottawa", category: "SEO Keyword", createdDate: "2026-02-15", description: "Targets budget-conscious Ottawa movers" },
  { title: "Licensed Movers Ottawa", route: "/licensed-movers-ottawa", category: "SEO Keyword", createdDate: "2026-02-15", description: "Trust-focused licensed movers page" },
  { title: "Insured Movers Ottawa", route: "/insured-movers-ottawa", category: "SEO Keyword", createdDate: "2026-02-15", description: "Trust-focused insured movers page" },
  { title: "Residential Movers Ottawa", route: "/residential-movers-ottawa", category: "SEO Keyword", createdDate: "2026-02-15", description: "Residential moving Ottawa keyword page" },
  { title: "Commercial Movers Ottawa", route: "/commercial-movers-ottawa", category: "SEO Keyword", createdDate: "2026-02-15", description: "Commercial moving Ottawa keyword page" },
  { title: "Movers in Ottawa", route: "/movers-in-ottawa", category: "SEO Keyword", createdDate: "2026-02-24", description: "Broad 'Movers in Ottawa' keyword page with rich content" },
  { title: "Long Distance Movers Ottawa", route: "/long-distance-movers-ottawa", category: "SEO Keyword", createdDate: "2026-02-25", description: "Long distance route calculator + 20+ city guide" },
  { title: "Junk Removal Ottawa", route: "/junk-removal-ottawa", category: "SEO Keyword", createdDate: "2026-02-07", description: "Junk removal and cleanout services Ottawa" },
  { title: "Furniture Assembly Ottawa", route: "/furniture-assembly-ottawa", category: "SEO Keyword", createdDate: "2026-02-07", description: "Furniture assembly and disassembly Ottawa" },
  { title: "Home Staging Ottawa", route: "/home-staging-ottawa", category: "SEO Keyword", createdDate: "2026-02-07", description: "Home staging services for Ottawa sellers" },
  { title: "Estate Cleanout Ottawa", route: "/estate-cleanout-ottawa", category: "SEO Keyword", createdDate: "2026-02-07", description: "Estate cleanout and senior transition services" },
  { title: "Custom Crating Ottawa", route: "/custom-crating-ottawa", category: "SEO Keyword", createdDate: "2026-02-07", description: "Specialty crating for fragile and valuable items" },

  // ── Neighbourhood Pages ───────────────────────────────────────────────
  { title: "Movers in Orleans", route: "/movers-in-orleans", category: "Neighbourhood", createdDate: "2026-02-15", description: "Neighbourhood SEO page for Orleans, Ottawa" },
  { title: "Movers in Barrhaven", route: "/movers-in-barrhaven", category: "Neighbourhood", createdDate: "2026-02-15", description: "Neighbourhood SEO page for Barrhaven, Ottawa" },
  { title: "Movers in Kanata", route: "/movers-in-kanata", category: "Neighbourhood", createdDate: "2026-02-15", description: "Neighbourhood SEO page for Kanata, Ottawa" },
  { title: "Movers in Nepean", route: "/movers-in-nepean", category: "Neighbourhood", createdDate: "2026-02-15", description: "Neighbourhood SEO page for Nepean, Ottawa" },
  { title: "Movers in Gloucester", route: "/movers-in-gloucester", category: "Neighbourhood", createdDate: "2026-02-15", description: "Neighbourhood SEO page for Gloucester, Ottawa" },
  { title: "Movers in Stittsville", route: "/movers-in-stittsville", category: "Neighbourhood", createdDate: "2026-02-15", description: "Neighbourhood SEO page for Stittsville, Ottawa" },
  { title: "Movers in Westboro", route: "/movers-in-westboro", category: "Neighbourhood", createdDate: "2026-02-15", description: "Neighbourhood SEO page for Westboro, Ottawa" },
  { title: "Movers in Alta Vista", route: "/movers-in-alta-vista", category: "Neighbourhood", createdDate: "2026-02-15", description: "Neighbourhood SEO page for Alta Vista, Ottawa" },
  { title: "Movers in Riverside South", route: "/movers-in-riverside-south", category: "Neighbourhood", createdDate: "2026-02-15", description: "Neighbourhood SEO page for Riverside South, Ottawa" },
];

const CATEGORY_CONFIG: Record<PageCategory, { icon: React.ElementType; color: string }> = {
  "Core":          { icon: Globe,    color: "bg-blue-100 text-blue-700 border-blue-200" },
  "Service":       { icon: Briefcase, color: "bg-purple-100 text-purple-700 border-purple-200" },
  "SEO Keyword":   { icon: FileText,  color: "bg-amber-100 text-amber-700 border-amber-200" },
  "Neighbourhood": { icon: MapPin,    color: "bg-green-100 text-green-700 border-green-200" },
};

type DateFilter = "today" | "week" | "month" | "all";

function isoToday() {
  return new Date().toISOString().slice(0, 10);
}
function isoWeekAgo() {
  const d = new Date(); d.setDate(d.getDate() - 7);
  return d.toISOString().slice(0, 10);
}
function isoMonthAgo() {
  const d = new Date(); d.setDate(d.getDate() - 30);
  return d.toISOString().slice(0, 10);
}

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
}

export default function AdminPages() {
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState<DateFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<PageCategory | "All">("All");

  const today = isoToday();
  const weekAgo = isoWeekAgo();
  const monthAgo = isoMonthAgo();

  const todayCount = useMemo(() => ALL_PAGES.filter(p => p.createdDate === today).length, [today]);
  const weekCount  = useMemo(() => ALL_PAGES.filter(p => p.createdDate >= weekAgo).length, [weekAgo]);

  const filtered = useMemo(() => {
    return ALL_PAGES.filter(page => {
      if (dateFilter === "today" && page.createdDate !== today) return false;
      if (dateFilter === "week"  && page.createdDate < weekAgo) return false;
      if (dateFilter === "month" && page.createdDate < monthAgo) return false;
      if (categoryFilter !== "All" && page.category !== categoryFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        if (!page.title.toLowerCase().includes(q) && !page.route.toLowerCase().includes(q) && !page.description.toLowerCase().includes(q)) return false;
      }
      return true;
    }).sort((a, b) => b.createdDate.localeCompare(a.createdDate));
  }, [dateFilter, categoryFilter, search, today, weekAgo, monthAgo]);

  const DATE_FILTERS: { key: DateFilter; label: string }[] = [
    { key: "today", label: `Today (${todayCount})` },
    { key: "week",  label: `Last 7 Days (${weekCount})` },
    { key: "month", label: "Last 30 Days" },
    { key: "all",   label: "All Pages" },
  ];

  const CATEGORIES: (PageCategory | "All")[] = ["All", "Core", "Service", "SEO Keyword", "Neighbourhood"];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black text-foreground" data-testid="text-pages-title">Pages Tracker</h1>
        <p className="text-muted-foreground mt-1">All live pages on prestigemoving.ca — filter by date created or category.</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {(["All", "SEO Keyword", "Neighbourhood", "Service"] as const).map(cat => {
          const count = cat === "All" ? ALL_PAGES.length : ALL_PAGES.filter(p => p.category === cat).length;
          const cfg = cat === "All" ? null : CATEGORY_CONFIG[cat as PageCategory];
          const Icon = cfg?.icon ?? Globe;
          return (
            <Card key={cat} data-testid={`card-stat-${cat.replace(/\s/g, "-").toLowerCase()}`}>
              <CardHeader className="flex flex-row items-center justify-between gap-1 space-y-0 pb-1 pt-4 px-4">
                <CardTitle className="text-sm font-medium text-muted-foreground">{cat === "All" ? "Total Pages" : cat}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <div className="text-3xl font-black">{count}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-start">
        {/* Date filter pills */}
        <div className="flex flex-wrap gap-2">
          {DATE_FILTERS.map(f => (
            <Button
              key={f.key}
              variant={dateFilter === f.key ? "default" : "outline"}
              size="sm"
              onClick={() => setDateFilter(f.key)}
              data-testid={`button-date-filter-${f.key}`}
            >
              {f.label}
            </Button>
          ))}
        </div>
        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => {
            const cfg = cat !== "All" ? CATEGORY_CONFIG[cat] : null;
            return (
              <Button
                key={cat}
                variant={categoryFilter === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setCategoryFilter(cat)}
                data-testid={`button-cat-filter-${cat.replace(/\s/g, "-").toLowerCase()}`}
              >
                {cat}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search pages by title, route, or description..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="pl-9"
          data-testid="input-page-search"
        />
      </div>

      {/* Results count */}
      <div className="text-sm text-muted-foreground" data-testid="text-results-count">
        Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {ALL_PAGES.length} pages
      </div>

      {/* Pages list */}
      <div className="space-y-2">
        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground" data-testid="text-empty-state">
            No pages match your filters.
          </div>
        )}
        {filtered.map(page => {
          const cfg = CATEGORY_CONFIG[page.category];
          const Icon = cfg.icon;
          const isNew = page.createdDate === today;
          return (
            <div
              key={page.route}
              className="flex flex-wrap items-center gap-3 rounded-md border bg-card px-4 py-3 hover-elevate"
              data-testid={`row-page-${page.route.replace(/\//g, "-").slice(1) || "home"}`}
            >
              <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-foreground text-sm" data-testid={`text-page-title-${page.route.slice(1) || "home"}`}>
                    {page.title}
                  </span>
                  {isNew && (
                    <Badge className="text-[10px] py-0 px-1.5 bg-green-100 text-green-700 border border-green-200 no-default-active-elevate" data-testid="badge-new">
                      New today
                    </Badge>
                  )}
                  <Badge variant="outline" className={`text-[10px] py-0 px-1.5 border no-default-active-elevate ${cfg.color}`}>
                    {page.category}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground mt-0.5 truncate">{page.description}</div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs text-muted-foreground font-mono hidden sm:block" data-testid={`text-route-${page.route.slice(1) || "home"}`}>
                  {page.route}
                </span>
                <span className="text-xs text-muted-foreground" data-testid={`text-date-${page.route.slice(1) || "home"}`}>
                  {formatDate(page.createdDate)}
                </span>
                <Button
                  size="icon"
                  variant="ghost"
                  asChild
                  data-testid={`button-visit-${page.route.slice(1) || "home"}`}
                >
                  <a href={page.route} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
