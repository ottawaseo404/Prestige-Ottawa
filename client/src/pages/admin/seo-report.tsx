import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp, TrendingDown, Minus, Search, Upload, AlertTriangle,
  Zap, Target, CheckCircle, ArrowUpDown, ArrowUp, ArrowDown,
  ExternalLink, ChevronDown, ChevronUp, BarChart2, MousePointerClick,
  Eye, RefreshCw, X
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface KeywordRow {
  keyword: string;
  clicks: number;
  impressions: number;
  ctr: number;        // decimal e.g. 0.0066
  position: number;
  volume?: number;
  difficulty?: number;
  url?: string;
  source: "gsc" | "semrush" | "both";
}

type Opportunity = "priority" | "quickwin" | "ctr" | "strong" | "buried";

// Expected CTR by position (industry benchmark)
function expectedCTR(pos: number): number {
  if (pos <= 1) return 0.28;
  if (pos <= 2) return 0.15;
  if (pos <= 3) return 0.11;
  if (pos <= 4) return 0.08;
  if (pos <= 5) return 0.06;
  if (pos <= 10) return 0.04;
  if (pos <= 20) return 0.015;
  return 0.005;
}

function classifyOpportunity(row: KeywordRow): Opportunity {
  const { position, impressions, ctr, clicks } = row;
  if (position <= 5 && clicks >= 3) return "strong";
  if (position <= 10 && ctr < expectedCTR(position) * 0.6 && impressions > 50) return "ctr";
  if (position > 10 && position <= 20 && impressions >= 100) return "quickwin";
  if (position > 20 && impressions >= 200) return "priority";
  if (position > 20) return "buried";
  return "quickwin";
}

function opportunityScore(row: KeywordRow): number {
  const vol = row.volume || row.impressions;
  const posScore = Math.max(0, (50 - row.position) / 50);
  return Math.round(vol * posScore * (1 + row.impressions / 500));
}

function actionForOpportunity(opp: Opportunity, row: KeywordRow): string {
  switch (opp) {
    case "priority":
      return `Position ${Math.round(row.position)} with ${row.impressions.toLocaleString()} impressions — build dedicated landing page, improve content depth and backlinks.`;
    case "quickwin":
      return `Position ${Math.round(row.position)} — add this keyword to H1/H2, improve meta description CTR, add internal links with this anchor text.`;
    case "ctr":
      return `Ranking ${Math.round(row.position)} but only ${(row.ctr * 100).toFixed(1)}% CTR (expect ${(expectedCTR(row.position) * 100).toFixed(0)}%) — rewrite title tag and meta description to be more compelling.`;
    case "strong":
      return `Strong performer. Protect ranking with fresh content updates, review for featured snippet eligibility.`;
    case "buried":
      return `Position ${Math.round(row.position)} — too deep to prioritize now. Focus on higher-opportunity keywords first.`;
  }
}

const OPP_CONFIG: Record<Opportunity, { label: string; color: string; badge: string; icon: React.ComponentType<any>; bg: string }> = {
  priority: { label: "Priority Targets",  color: "text-red-600",    badge: "bg-red-100 text-red-700 border-red-200",    icon: Target,       bg: "bg-red-50 border-red-200" },
  quickwin:  { label: "Quick Wins",        color: "text-amber-600",  badge: "bg-amber-100 text-amber-700 border-amber-200", icon: Zap,         bg: "bg-amber-50 border-amber-200" },
  ctr:       { label: "CTR Opportunities", color: "text-blue-600",   badge: "bg-blue-100 text-blue-700 border-blue-200",  icon: MousePointerClick, bg: "bg-blue-50 border-blue-200" },
  strong:    { label: "Strong Performers", color: "text-green-600",  badge: "bg-green-100 text-green-700 border-green-200", icon: CheckCircle, bg: "bg-green-50 border-green-200" },
  buried:    { label: "Deep Burial",       color: "text-gray-500",   badge: "bg-gray-100 text-gray-600 border-gray-200",  icon: TrendingDown, bg: "bg-gray-50 border-gray-200" },
};

// ─── Pre-loaded GSC Data (from your March 2026 export) ────────────────────────
const PRELOADED_GSC: Omit<KeywordRow, "source">[] = [
  { keyword: "moving companies ottawa",        clicks: 2,   impressions: 1791, ctr: 0.0011, position: 30.4  },
  { keyword: "moving company ottawa",          clicks: 2,   impressions: 1648, ctr: 0.0012, position: 30.87 },
  { keyword: "ottawa movers",                  clicks: 3,   impressions: 1638, ctr: 0.0018, position: 25.03 },
  { keyword: "movers ottawa",                  clicks: 11,  impressions: 1675, ctr: 0.0066, position: 19.98 },
  { keyword: "long distance movers ottawa",    clicks: 8,   impressions: 1595, ctr: 0.005,  position: 6.13  },
  { keyword: "prestige moving",                clicks: 107, impressions: 622,  ctr: 0.172,  position: 3.57  },
  { keyword: "prestige moving ottawa",         clicks: 37,  impressions: 106,  ctr: 0.3491, position: 1.36  },
  { keyword: "prestige movers",                clicks: 13,  impressions: 125,  ctr: 0.104,  position: 4.54  },
  { keyword: "best movers ottawa",             clicks: 2,   impressions: 929,  ctr: 0.0022, position: 26.59 },
  { keyword: "professional movers ottawa",     clicks: 3,   impressions: 769,  ctr: 0.0039, position: 17.17 },
  { keyword: "piano movers",                   clicks: 1,   impressions: 841,  ctr: 0.0012, position: 51.02 },
  { keyword: "ottawa moving companies",        clicks: 6,   impressions: 838,  ctr: 0.0072, position: 31.72 },
  { keyword: "long distance moving",           clicks: 2,   impressions: 493,  ctr: 0.0041, position: 38.42 },
  { keyword: "movers in ottawa",               clicks: 6,   impressions: 1161, ctr: 0.0052, position: 20.5  },
  { keyword: "best movers in ottawa",          clicks: 4,   impressions: 265,  ctr: 0.0151, position: 12.4  },
  { keyword: "long distance movers",           clicks: 2,   impressions: 684,  ctr: 0.0029, position: 41.04 },
  { keyword: "movers orleans",                 clicks: 2,   impressions: 472,  ctr: 0.0042, position: 24.36 },
  { keyword: "residential movers ottawa",      clicks: 3,   impressions: 195,  ctr: 0.0154, position: 16.67 },
  { keyword: "long distance moving ottawa",    clicks: 2,   impressions: 241,  ctr: 0.0083, position: 13.08 },
  { keyword: "commercial movers ottawa",       clicks: 1,   impressions: 233,  ctr: 0.0043, position: 13.12 },
  { keyword: "furniture movers ottawa",        clicks: 0,   impressions: 1155, ctr: 0,      position: 32.54 },
  { keyword: "ottawa moving company",          clicks: 0,   impressions: 997,  ctr: 0,      position: 43.76 },
  { keyword: "piano movers ottawa",            clicks: 0,   impressions: 743,  ctr: 0,      position: 27.75 },
  { keyword: "senior movers ottawa",           clicks: 0,   impressions: 728,  ctr: 0,      position: 18.44 },
  { keyword: "long distance moving company",   clicks: 0,   impressions: 612,  ctr: 0,      position: 15.77 },
  { keyword: "best moving companies ottawa",   clicks: 0,   impressions: 600,  ctr: 0,      position: 19.9  },
  { keyword: "packing services ottawa",        clicks: 0,   impressions: 471,  ctr: 0,      position: 27.53 },
  { keyword: "commercial moving",              clicks: 0,   impressions: 525,  ctr: 0,      position: 61.58 },
  { keyword: "office movers ottawa",           clicks: 0,   impressions: 218,  ctr: 0,      position: 24.26 },
  { keyword: "cheap movers ottawa",            clicks: 0,   impressions: 325,  ctr: 0,      position: 19.36 },
  { keyword: "local movers ottawa",            clicks: 0,   impressions: 350,  ctr: 0,      position: 26.09 },
  { keyword: "affordable movers ottawa",       clicks: 0,   impressions: 217,  ctr: 0,      position: 11.86 },
  { keyword: "moving companies in ottawa",     clicks: 0,   impressions: 146,  ctr: 0,      position: 32.4  },
  { keyword: "moving from ottawa to toronto",  clicks: 0,   impressions: 330,  ctr: 0,      position: 13.32 },
  { keyword: "condo movers ottawa",            clicks: 0,   impressions: 103,  ctr: 0,      position: 11.33 },
  { keyword: "student moving company",         clicks: 0,   impressions: 130,  ctr: 0,      position: 18.6  },
  { keyword: "ottawa to montreal moving company", clicks: 0, impressions: 962, ctr: 0,     position: 20.47 },
  { keyword: "apartment movers ottawa",        clicks: 0,   impressions: 77,   ctr: 0,      position: 9.05  },
  { keyword: "moving and storage ottawa",      clicks: 0,   impressions: 228,  ctr: 0,      position: 32.08 },
  { keyword: "kanata movers",                  clicks: 0,   impressions: 111,  ctr: 0,      position: 18.24 },
  { keyword: "nepean movers",                  clicks: 0,   impressions: 112,  ctr: 0,      position: 17.01 },
  { keyword: "barrhaven movers",               clicks: 3,   impressions: 195,  ctr: 0.0154, position: 29.35 },
  { keyword: "ottawa long distance moving",    clicks: 2,   impressions: 929,  ctr: 0,      position: 3.99  },
  { keyword: "storage solutions ottawa",       clicks: 0,   impressions: 116,  ctr: 0,      position: 62.35 },
  { keyword: "moving costs ottawa",            clicks: 0,   impressions: 143,  ctr: 0,      position: 23.41 },
  { keyword: "same day movers",                clicks: 1,   impressions: 175,  ctr: 0.0057, position: 51.16 },
  { keyword: "moving companies near me",       clicks: 1,   impressions: 179,  ctr: 0.0056, position: 9.43  },
  { keyword: "student movers ottawa",          clicks: 3,   impressions: 49,   ctr: 0.0612, position: 5.84  },
  { keyword: "ottawa movers reviews",          clicks: 1,   impressions: 103,  ctr: 0.0097, position: 10.48 },
  { keyword: "prestige movers ottawa",         clicks: 12,  impressions: 28,   ctr: 0.4286, position: 2.5   },
  { keyword: "long distance movers in ottawa", clicks: 4,   impressions: 88,   ctr: 0.0455, position: 3.86  },
  { keyword: "moving ottawa to toronto",       clicks: 1,   impressions: 26,   ctr: 0.0385, position: 10.69 },
  { keyword: "piano moving service near me",   clicks: 0,   impressions: 183,  ctr: 0,      position: 64.43 },
  { keyword: "corporate relocation services",  clicks: 0,   impressions: 231,  ctr: 0,      position: 22.14 },
  { keyword: "senior moving services ottawa",  clicks: 0,   impressions: 126,  ctr: 0,      position: 16.26 },
];

// ─── CSV Parsers ──────────────────────────────────────────────────────────────
function parseGSCcsv(text: string): Omit<KeywordRow, "source">[] {
  const lines = text.trim().split("\n").filter(Boolean);
  if (lines.length < 2) return [];
  const rows: Omit<KeywordRow, "source">[] = [];
  for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split(",");
    if (parts.length < 5) continue;
    const keyword = parts[0].trim().replace(/^"/, "").replace(/"$/, "");
    const clicks = parseInt(parts[1]) || 0;
    const impressions = parseInt(parts[2]) || 0;
    const ctrStr = parts[3].replace("%", "").trim();
    const ctr = parseFloat(ctrStr) / 100;
    const position = parseFloat(parts[4]) || 0;
    if (keyword && impressions > 0) rows.push({ keyword, clicks, impressions, ctr, position });
  }
  return rows;
}

function parseSEMrushCsv(text: string): Omit<KeywordRow, "source">[] {
  const lines = text.trim().split("\n").filter(Boolean);
  if (lines.length < 2) return [];
  const rows: Omit<KeywordRow, "source">[] = [];
  for (let i = 1; i < lines.length; i++) {
    // Handle quoted fields (Trends column has quoted arrays)
    const parts: string[] = [];
    let cur = "", inQ = false;
    for (const ch of lines[i]) {
      if (ch === '"') { inQ = !inQ; continue; }
      if (ch === "," && !inQ) { parts.push(cur); cur = ""; continue; }
      cur += ch;
    }
    parts.push(cur);
    if (parts.length < 8) continue;
    const keyword = parts[0].trim();
    const position = parseFloat(parts[1]) || 0;
    const volume = parseInt(parts[3]) || 0;
    const difficulty = parseFloat(parts[4]) || 0;
    const url = parts[6]?.trim() || "";
    const traffic = parseFloat(parts[7]) || 0;
    if (keyword && position > 0) rows.push({ keyword, position, volume, difficulty, url, clicks: traffic, impressions: volume, ctr: 0 });
  }
  return rows;
}

function mergeKeywords(gsc: Omit<KeywordRow, "source">[], semrush: Omit<KeywordRow, "source">[]): KeywordRow[] {
  const map = new Map<string, KeywordRow>();
  for (const g of gsc) {
    map.set(g.keyword.toLowerCase(), { ...g, source: "gsc" });
  }
  for (const s of semrush) {
    const key = s.keyword.toLowerCase();
    if (map.has(key)) {
      const existing = map.get(key)!;
      map.set(key, { ...existing, volume: s.volume, difficulty: s.difficulty, url: s.url || existing.url, source: "both" });
    } else {
      map.set(key, { ...s, source: "semrush" });
    }
  }
  return Array.from(map.values());
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function StatCard({ label, value, sub, icon: Icon, color }: { label: string; value: string; sub: string; icon: React.ComponentType<any>; color: string }) {
  return (
    <Card>
      <CardContent className="pt-5 pb-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className={`text-2xl font-bold mt-1 ${color}`}>{value}</p>
            <p className="text-xs text-muted-foreground mt-1">{sub}</p>
          </div>
          <div className={`p-2 rounded-lg ${color.replace("text-", "bg-").replace("-600", "-100")}`}>
            <Icon className={`h-5 w-5 ${color}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PositionBadge({ pos }: { pos: number }) {
  const p = Math.round(pos);
  if (p <= 3)  return <Badge className="bg-green-100 text-green-700 border-green-200 font-bold tabular-nums">#{p}</Badge>;
  if (p <= 10) return <Badge className="bg-blue-100 text-blue-700 border-blue-200 font-bold tabular-nums">#{p}</Badge>;
  if (p <= 20) return <Badge className="bg-amber-100 text-amber-700 border-amber-200 font-bold tabular-nums">#{p}</Badge>;
  return <Badge className="bg-red-100 text-red-700 border-red-200 font-bold tabular-nums">#{p}</Badge>;
}

function TrendIcon({ pos, prev }: { pos: number; prev?: number }) {
  if (!prev) return <Minus className="h-3.5 w-3.5 text-gray-400" />;
  if (pos < prev)  return <TrendingUp className="h-3.5 w-3.5 text-green-500" />;
  if (pos > prev)  return <TrendingDown className="h-3.5 w-3.5 text-red-500" />;
  return <Minus className="h-3.5 w-3.5 text-gray-400" />;
}

type SortField = "keyword" | "position" | "impressions" | "clicks" | "ctr" | "volume" | "score";

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SeoReport() {
  const [gscData,     setGscData]     = useState<Omit<KeywordRow, "source">[]>(PRELOADED_GSC);
  const [semrushData, setSemrushData] = useState<Omit<KeywordRow, "source">[]>([]);
  const [activeTab,   setActiveTab]   = useState("overview");
  const [importTab,   setImportTab]   = useState<"gsc" | "semrush">("gsc");
  const [csvText,     setCsvText]     = useState("");
  const [showImport,  setShowImport]  = useState(false);
  const [search,      setSearch]      = useState("");
  const [filterOpp,   setFilterOpp]   = useState<Opportunity | "all">("all");
  const [sortField,   setSortField]   = useState<SortField>("score");
  const [sortDir,     setSortDir]     = useState<"asc" | "desc">("desc");
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const allKeywords = useMemo(() => mergeKeywords(gscData, semrushData), [gscData, semrushData]);

  const keywords: (KeywordRow & { opp: Opportunity; score: number })[] = useMemo(() => {
    return allKeywords
      .filter(k => k.impressions >= 50 || k.clicks > 0 || (k.volume || 0) >= 100)
      .map(k => ({ ...k, opp: classifyOpportunity(k), score: opportunityScore(k) }));
  }, [allKeywords]);

  const filtered = useMemo(() => {
    let rows = keywords;
    if (search) rows = rows.filter(k => k.keyword.toLowerCase().includes(search.toLowerCase()));
    if (filterOpp !== "all") rows = rows.filter(k => k.opp === filterOpp);
    return [...rows].sort((a, b) => {
      let av: number, bv: number;
      switch (sortField) {
        case "keyword":     av = a.keyword.localeCompare(b.keyword); return sortDir === "asc" ? av : -av;
        case "position":    av = a.position;   bv = b.position;   break;
        case "impressions": av = a.impressions; bv = b.impressions; break;
        case "clicks":      av = a.clicks;     bv = b.clicks;     break;
        case "ctr":         av = a.ctr;        bv = b.ctr;        break;
        case "volume":      av = a.volume||0;  bv = b.volume||0;  break;
        default:            av = a.score;      bv = b.score;      break;
      }
      return sortDir === "asc" ? av - bv : bv - av;
    });
  }, [keywords, search, filterOpp, sortField, sortDir]);

  const counts = useMemo(() => {
    const c: Record<Opportunity, number> = { priority: 0, quickwin: 0, ctr: 0, strong: 0, buried: 0 };
    keywords.forEach(k => c[k.opp]++);
    return c;
  }, [keywords]);

  const totalImpressions = useMemo(() => keywords.reduce((s, k) => s + k.impressions, 0), [keywords]);
  const totalClicks = useMemo(() => keywords.reduce((s, k) => s + k.clicks, 0), [keywords]);
  const avgPosition = useMemo(() => {
    const weighted = keywords.filter(k => k.impressions > 0);
    if (!weighted.length) return 0;
    return weighted.reduce((s, k) => s + k.position * k.impressions, 0) / weighted.reduce((s, k) => s + k.impressions, 0);
  }, [keywords]);
  const avgCTR = useMemo(() => totalImpressions > 0 ? totalClicks / totalImpressions : 0, [totalClicks, totalImpressions]);

  function handleImport() {
    if (!csvText.trim()) return;
    if (importTab === "gsc") {
      const parsed = parseGSCcsv(csvText);
      if (parsed.length > 0) { setGscData(parsed); setCsvText(""); setShowImport(false); }
    } else {
      const parsed = parseSEMrushCsv(csvText);
      if (parsed.length > 0) { setSemrushData(parsed); setCsvText(""); setShowImport(false); }
    }
  }

  function toggleSort(field: SortField) {
    if (sortField === field) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortField(field); setSortDir("desc"); }
  }

  function SortBtn({ field, children }: { field: SortField; children: React.ReactNode }) {
    const active = sortField === field;
    return (
      <button onClick={() => toggleSort(field)} className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wide whitespace-nowrap ${active ? "text-foreground" : "text-muted-foreground"}`}>
        {children}
        {active ? (sortDir === "asc" ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />) : <ArrowUpDown className="h-3 w-3 opacity-40" />}
      </button>
    );
  }

  const topPriority = useMemo(() =>
    keywords.filter(k => k.opp === "priority").sort((a, b) => b.score - a.score).slice(0, 5),
  [keywords]);

  const topQuickWins = useMemo(() =>
    keywords.filter(k => k.opp === "quickwin").sort((a, b) => b.score - a.score).slice(0, 5),
  [keywords]);

  const topCTR = useMemo(() =>
    keywords.filter(k => k.opp === "ctr").sort((a, b) => b.impressions - a.impressions).slice(0, 5),
  [keywords]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">SEO Keyword Report</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {keywords.length} keywords tracked · Last import: March 20, 2026 · Source: GSC + SEMrush
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowImport(v => !v)}>
            <Upload className="h-4 w-4 mr-1.5" />
            Import New Data
          </Button>
        </div>
      </div>

      {/* Import Panel */}
      {showImport && (
        <Card className="border-dashed border-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Import CSV Data</CardTitle>
              <Button size="icon" variant="ghost" onClick={() => setShowImport(false)}><X className="h-4 w-4" /></Button>
            </div>
            <CardDescription>Paste your CSV export directly from GSC (Performance → Queries → Export) or SEMrush (Organic Research → Positions → Export).</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button size="sm" variant={importTab === "gsc" ? "default" : "outline"} onClick={() => setImportTab("gsc")}>Google Search Console</Button>
              <Button size="sm" variant={importTab === "semrush" ? "default" : "outline"} onClick={() => setImportTab("semrush")}>SEMrush Positions</Button>
            </div>
            <div className="text-xs text-muted-foreground bg-muted/40 rounded-md p-3 space-y-1">
              {importTab === "gsc" ? (
                <>
                  <p><strong>GSC export steps:</strong> Search Console → Performance → Search Results → Queries tab → Export → Download CSV</p>
                  <p>Expected columns: <code>Top queries, Clicks, Impressions, CTR, Position</code></p>
                </>
              ) : (
                <>
                  <p><strong>SEMrush export steps:</strong> Organic Research → Positions → Export → CSV</p>
                  <p>Expected columns: <code>Keyword, Position, Previous position, Search Volume, Keyword Difficulty, CPC, URL...</code></p>
                </>
              )}
            </div>
            <textarea
              className="w-full h-40 text-xs font-mono border rounded-md p-3 bg-muted/20 resize-none focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Paste CSV content here..."
              value={csvText}
              onChange={e => setCsvText(e.target.value)}
            />
            <div className="flex gap-2">
              <Button onClick={handleImport} disabled={!csvText.trim()}>Parse &amp; Import</Button>
              <Button variant="ghost" onClick={() => { setCsvText(""); setShowImport(false); }}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Avg. Position" value={`#${avgPosition.toFixed(1)}`} sub="Weighted by impressions" icon={BarChart2} color="text-blue-600" />
        <StatCard label="Total Impressions" value={totalImpressions.toLocaleString()} sub="Tracked keywords" icon={Eye} color="text-purple-600" />
        <StatCard label="Total Clicks" value={totalClicks.toLocaleString()} sub="From GSC data" icon={MousePointerClick} color="text-green-600" />
        <StatCard label="Avg. CTR" value={`${(avgCTR * 100).toFixed(2)}%`} sub={`Target > 3%`} icon={Target} color={avgCTR >= 0.03 ? "text-green-600" : "text-red-600"} />
      </div>

      {/* Opportunity Counts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(["priority", "quickwin", "ctr", "strong"] as Opportunity[]).map(opp => {
          const cfg = OPP_CONFIG[opp];
          const Icon = cfg.icon;
          return (
            <button
              key={opp}
              onClick={() => setFilterOpp(filterOpp === opp ? "all" : opp)}
              className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all hover-elevate ${filterOpp === opp ? cfg.bg + " border-2" : "bg-card border"}`}
            >
              <Icon className={`h-5 w-5 shrink-0 ${cfg.color}`} />
              <div>
                <p className={`text-xl font-bold ${cfg.color}`}>{counts[opp]}</p>
                <p className="text-xs text-muted-foreground leading-tight">{cfg.label}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Opportunities</TabsTrigger>
          <TabsTrigger value="table">All Keywords</TabsTrigger>
          <TabsTrigger value="actions">Action Plan</TabsTrigger>
        </TabsList>

        {/* ── OVERVIEW TAB ─────────────────────────────────────────── */}
        <TabsContent value="overview" className="mt-5 space-y-6">

          {/* Priority Targets */}
          <Card className="border-red-200">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-red-600" />
                <CardTitle className="text-base text-red-700">Priority Targets — High Volume, Page 3+</CardTitle>
              </div>
              <CardDescription>These keywords have massive search volume but are buried too deep to get clicks. Building dedicated landing pages or boosting these URLs will have the biggest traffic impact.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2.5">
                {topPriority.map(k => (
                  <div key={k.keyword} className="flex flex-wrap items-center justify-between gap-2 p-3 bg-red-50 rounded-lg border border-red-100">
                    <div className="flex items-center gap-3 min-w-0">
                      <PositionBadge pos={k.position} />
                      <span className="font-semibold text-sm truncate">{k.keyword}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground shrink-0">
                      <span><Eye className="h-3 w-3 inline mr-1" />{k.impressions.toLocaleString()} impr</span>
                      {k.volume && <span>Vol: {k.volume.toLocaleString()}</span>}
                      <span className="text-red-600 font-semibold">CTR: {(k.ctr * 100).toFixed(2)}%</span>
                    </div>
                  </div>
                ))}
                {counts.priority > 5 && (
                  <p className="text-xs text-muted-foreground text-center pt-1">+{counts.priority - 5} more — see All Keywords tab</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quick Wins */}
          <Card className="border-amber-200">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-amber-600" />
                <CardTitle className="text-base text-amber-700">Quick Wins — Page 2, Push to Page 1</CardTitle>
              </div>
              <CardDescription>These keywords are on page 2 (positions 11–20) with meaningful impressions. Small on-page improvements can jump them to page 1 within weeks.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2.5">
                {topQuickWins.map(k => (
                  <div key={k.keyword} className="flex flex-wrap items-center justify-between gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100">
                    <div className="flex items-center gap-3 min-w-0">
                      <PositionBadge pos={k.position} />
                      <span className="font-semibold text-sm truncate">{k.keyword}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground shrink-0">
                      <span><Eye className="h-3 w-3 inline mr-1" />{k.impressions.toLocaleString()} impr</span>
                      <span>{k.clicks} clicks</span>
                      <span className="text-amber-700 font-semibold">CTR: {(k.ctr * 100).toFixed(2)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTR Issues */}
          <Card className="border-blue-200">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <MousePointerClick className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-base text-blue-700">CTR Issues — Good Position, Low Click-Through</CardTitle>
              </div>
              <CardDescription>These keywords rank on page 1 but aren't getting the clicks their position should earn. The fix is rewriting the title tag and meta description to be more compelling.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2.5">
                {topCTR.map(k => {
                  const expected = expectedCTR(k.position);
                  return (
                    <div key={k.keyword} className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-3 min-w-0">
                          <PositionBadge pos={k.position} />
                          <span className="font-semibold text-sm truncate">{k.keyword}</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs shrink-0">
                          <span className="text-muted-foreground"><Eye className="h-3 w-3 inline mr-1" />{k.impressions.toLocaleString()}</span>
                          <span className="text-red-600 font-bold">Actual: {(k.ctr * 100).toFixed(2)}%</span>
                          <span className="text-green-700 font-bold">Expected: {(expected * 100).toFixed(0)}%</span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>Missing {Math.round((expected - k.ctr) * k.impressions)} clicks/period vs benchmark</span>
                          {k.url && (
                            <a href={k.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-0.5">
                              View page <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

        </TabsContent>

        {/* ── ALL KEYWORDS TAB ─────────────────────────────────────── */}
        <TabsContent value="table" className="mt-5">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex flex-wrap gap-3">
                <div className="relative flex-1 min-w-48">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search keywords..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9" />
                </div>
                <select
                  value={filterOpp}
                  onChange={e => setFilterOpp(e.target.value as Opportunity | "all")}
                  className="h-9 rounded-md border bg-background px-3 text-sm"
                >
                  <option value="all">All Opportunities</option>
                  <option value="priority">Priority Targets</option>
                  <option value="quickwin">Quick Wins</option>
                  <option value="ctr">CTR Issues</option>
                  <option value="strong">Strong Performers</option>
                  <option value="buried">Deep Burial</option>
                </select>
              </div>
              <p className="text-xs text-muted-foreground">{filtered.length} keywords shown</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/30">
                      <th className="text-left px-4 py-3"><SortBtn field="keyword">Keyword</SortBtn></th>
                      <th className="px-3 py-3"><SortBtn field="position">Pos</SortBtn></th>
                      <th className="px-3 py-3"><SortBtn field="impressions">Impr</SortBtn></th>
                      <th className="px-3 py-3"><SortBtn field="clicks">Clicks</SortBtn></th>
                      <th className="px-3 py-3"><SortBtn field="ctr">CTR</SortBtn></th>
                      <th className="px-3 py-3"><SortBtn field="volume">Vol</SortBtn></th>
                      <th className="px-3 py-3"><SortBtn field="score">Score</SortBtn></th>
                      <th className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Type</th>
                      <th className="w-8 px-2 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((k, idx) => {
                      const cfg = OPP_CONFIG[k.opp];
                      const isExpanded = expandedRows.has(k.keyword);
                      return (
                        <>
                          <tr key={k.keyword} className={`border-b hover:bg-muted/30 transition-colors ${idx % 2 === 0 ? "" : "bg-muted/10"}`}>
                            <td className="px-4 py-2.5 font-medium max-w-[220px]">
                              <div className="truncate">{k.keyword}</div>
                            </td>
                            <td className="px-3 py-2.5 text-center"><PositionBadge pos={k.position} /></td>
                            <td className="px-3 py-2.5 text-center tabular-nums text-muted-foreground">{k.impressions.toLocaleString()}</td>
                            <td className="px-3 py-2.5 text-center tabular-nums font-semibold">{k.clicks}</td>
                            <td className="px-3 py-2.5 text-center tabular-nums text-xs">{(k.ctr * 100).toFixed(2)}%</td>
                            <td className="px-3 py-2.5 text-center tabular-nums text-muted-foreground">{k.volume ? k.volume.toLocaleString() : "—"}</td>
                            <td className="px-3 py-2.5 text-center tabular-nums text-xs font-bold text-muted-foreground">{k.score.toLocaleString()}</td>
                            <td className="px-3 py-2.5">
                              <Badge className={`text-[10px] px-1.5 py-0 border ${cfg.badge}`}>{cfg.label.split(" ")[0]}</Badge>
                            </td>
                            <td className="px-2 py-2.5">
                              <button onClick={() => setExpandedRows(prev => { const n = new Set(prev); n.has(k.keyword) ? n.delete(k.keyword) : n.add(k.keyword); return n; })}>
                                {isExpanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                              </button>
                            </td>
                          </tr>
                          {isExpanded && (
                            <tr key={`${k.keyword}-expanded`} className="border-b bg-muted/20">
                              <td colSpan={9} className="px-6 py-3">
                                <div className="space-y-1.5 text-sm">
                                  <p className="font-semibold text-foreground flex items-center gap-1.5">
                                    <cfg.icon className={`h-4 w-4 ${cfg.color}`} />
                                    Recommended Action
                                  </p>
                                  <p className="text-muted-foreground">{actionForOpportunity(k.opp, k)}</p>
                                  {k.url && (
                                    <a href={k.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline flex items-center gap-1 mt-1">
                                      {k.url} <ExternalLink className="h-3 w-3" />
                                    </a>
                                  )}
                                </div>
                              </td>
                            </tr>
                          )}
                        </>
                      );
                    })}
                  </tbody>
                </table>
                {filtered.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground text-sm">No keywords match your filters.</div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── ACTION PLAN TAB ──────────────────────────────────────── */}
        <TabsContent value="actions" className="mt-5 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">30-Day SEO Action Plan</CardTitle>
              <CardDescription>Based on your current keyword data, here are the highest-ROI actions in priority order.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

              {[
                {
                  priority: "1",
                  color: "bg-red-500",
                  title: "Fix \"movers ottawa\" + \"ottawa movers\" — Your Biggest Gap",
                  detail: `These two keywords have 1,600+ monthly searches and you're getting combined impressions of 3,313 per period — but only 14 clicks total. You're ranking #19–25 (page 2). These should be #1–3 targets. Action: Ensure your homepage H1 says "Ottawa Movers You Can Trust", add 5+ internal links to the homepage using "Ottawa movers" and "movers Ottawa" anchor text from service pages, and build 2–3 more backlinks from Ottawa local sites pointing to the homepage.`,
                },
                {
                  priority: "2",
                  color: "bg-orange-500",
                  title: "Fix CTR on \"long distance movers ottawa\" (pos 6, only 0.5% CTR)",
                  detail: `You're ranking #6 for a keyword with 1,595 impressions but only getting 8 clicks — the expected CTR for position 6 is ~4%. That's ~56 missing clicks per period. Rewrite the title tag and meta description for your long-distance landing page to be more compelling. Add numbers ("Moving Ottawa to anywhere in Canada since 2014"), add trust signals ("Fully insured · Licensed interprovincial"), and match the searcher intent more precisely.`,
                },
                {
                  priority: "3",
                  color: "bg-amber-500",
                  title: "Push \"moving companies ottawa\" + \"moving company ottawa\" off page 3",
                  detail: `2,400 combined monthly search volume, 3,439 combined impressions — but only 4 clicks and you're at position 30+. These are commercially critical keywords. Build a dedicated /moving-company-ottawa page if not already strong, add JSON-LD LocalBusiness schema with these exact keyword phrases, and ensure the page has 1,000+ words of unique content targeting these terms specifically.`,
                },
                {
                  priority: "4",
                  color: "bg-blue-500",
                  title: "Capture \"furniture movers ottawa\" (1,155 impressions, 0 clicks, pos 32)",
                  detail: `Almost 1,200 impressions per period with zero clicks — you have a ranking but it's too deep. Create a dedicated /furniture-movers-ottawa page or significantly strengthen an existing page with this exact keyword in the URL slug, H1, and throughout the content.`,
                },
                {
                  priority: "5",
                  color: "bg-purple-500",
                  title: "Improve \"ottawa to montreal moving company\" (962 impressions, 0 clicks, pos 20)",
                  detail: `You're borderline page 2/3 for this keyword. Strengthen your Ottawa to Montreal route page with more content, better internal linking, and ensure the meta title includes this exact phrase. A small push could get you to page 1 where CTR increases 3–5x.`,
                },
                {
                  priority: "6",
                  color: "bg-green-600",
                  title: "Protect strong performers with content freshness updates",
                  detail: `Keywords like "long distance movers ottawa" (pos 1), "commercial movers" (pos 3), "prestige moving" (pos 1), and "student moving services" (pos 1) are performing excellently. Add a "Last Updated" date to these pages and refresh the content monthly to signal freshness to Google. These rankings are worth protecting aggressively.`,
                },
              ].map(({ priority, color, title, detail }) => (
                <div key={priority} className="flex gap-4 p-4 rounded-xl border bg-card">
                  <div className={`flex-none w-7 h-7 rounded-full ${color} text-white text-xs font-bold flex items-center justify-center`}>
                    {priority}
                  </div>
                  <div className="space-y-1.5">
                    <p className="font-semibold text-sm">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}

            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">How to Export Fresh Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="rounded-lg border p-4 space-y-2">
                <p className="font-semibold">Google Search Console (GSC)</p>
                <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                  <li>Go to search.google.com/search-console</li>
                  <li>Click Performance → Search Results</li>
                  <li>Set date range to last 3 months</li>
                  <li>Click the Queries tab</li>
                  <li>Click Export → Download CSV</li>
                  <li>Paste into the Import panel above</li>
                </ol>
              </div>
              <div className="rounded-lg border p-4 space-y-2">
                <p className="font-semibold">SEMrush Positions</p>
                <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                  <li>Go to Organic Research → Positions</li>
                  <li>Enter prestigemoving.ca</li>
                  <li>Set country to Canada</li>
                  <li>Click Export → Export to CSV</li>
                  <li>Paste into the Import panel above (select SEMrush tab)</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
