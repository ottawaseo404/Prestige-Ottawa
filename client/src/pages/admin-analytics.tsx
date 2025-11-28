import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  BarChart3, 
  Users, 
  Eye, 
  Globe, 
  Monitor, 
  Smartphone, 
  TrendingUp,
  Clock,
  MapPin,
  Activity
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from "recharts";

interface AnalyticsStats {
  pageViewsToday: number;
  sessionsToday: number;
  activeVisitors: number;
  pageViewsByPage: { page: string; views: number }[];
  topSources: { source: string; sessions: number }[];
  visitorsByDevice: { device: string; count: number }[];
  visitorsByBrowser: { browser: string; count: number }[];
  pageViewsLast7Days: { date: string; views: number }[];
}

interface VisitorSession {
  id: string;
  sessionId: string;
  firstPage: string;
  source: string | null;
  device: string | null;
  browser: string | null;
  country: string | null;
  city: string | null;
  pageCount: number;
  isActive: boolean;
  lastActiveAt: string;
  createdAt: string;
}

const COLORS = ['#C5A572', '#1A2332', '#4B5563', '#6B7280', '#9CA3AF', '#D1D5DB'];

export default function AdminAnalytics() {
  const { data: stats, isLoading: statsLoading } = useQuery<AnalyticsStats>({
    queryKey: ['/api/analytics/stats'],
    refetchInterval: 30000,
  });

  const { data: sessions, isLoading: sessionsLoading } = useQuery<VisitorSession[]>({
    queryKey: ['/api/analytics/sessions'],
    refetchInterval: 30000,
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    return formatDate(dateStr);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#1A2332]" data-testid="text-analytics-title">Analytics</h1>
        <p className="text-muted-foreground">Track visitor data and website performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card data-testid="card-active-visitors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <>
                <div className="text-3xl font-bold text-green-600" data-testid="text-active-count">
                  {stats?.activeVisitors || 0}
                </div>
                <p className="text-xs text-muted-foreground">visitors online</p>
              </>
            )}
          </CardContent>
        </Card>

        <Card data-testid="card-sessions-today">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="text-sm font-medium">Sessions Today</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <>
                <div className="text-3xl font-bold" data-testid="text-sessions-count">
                  {stats?.sessionsToday || 0}
                </div>
                <p className="text-xs text-muted-foreground">unique visitors</p>
              </>
            )}
          </CardContent>
        </Card>

        <Card data-testid="card-pageviews-today">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="text-sm font-medium">Page Views Today</CardTitle>
            <Eye className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <>
                <div className="text-3xl font-bold" data-testid="text-pageviews-count">
                  {stats?.pageViewsToday || 0}
                </div>
                <p className="text-xs text-muted-foreground">total views</p>
              </>
            )}
          </CardContent>
        </Card>

        <Card data-testid="card-avg-pages">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gap-2">
            <CardTitle className="text-sm font-medium">Avg. Pages/Session</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <>
                <div className="text-3xl font-bold" data-testid="text-avg-pages">
                  {stats?.sessionsToday && stats.sessionsToday > 0 
                    ? (stats.pageViewsToday / stats.sessionsToday).toFixed(1) 
                    : '0'}
                </div>
                <p className="text-xs text-muted-foreground">pages per visitor</p>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card data-testid="card-traffic-chart">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Traffic Last 7 Days
            </CardTitle>
            <CardDescription>Daily page views trend</CardDescription>
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <Skeleton className="h-[300px] w-full" />
            ) : stats?.pageViewsLast7Days && stats.pageViewsLast7Days.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={stats.pageViewsLast7Days}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={formatDate}
                    fontSize={12}
                  />
                  <YAxis fontSize={12} />
                  <Tooltip 
                    labelFormatter={formatDate}
                    formatter={(value: number) => [value, 'Page Views']}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="views" 
                    stroke="#C5A572" 
                    strokeWidth={3}
                    dot={{ fill: '#C5A572', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#1A2332' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                No data yet. Traffic will appear as visitors browse the site.
              </div>
            )}
          </CardContent>
        </Card>

        <Card data-testid="card-sources">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Traffic Sources
            </CardTitle>
            <CardDescription>Where visitors are coming from</CardDescription>
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <Skeleton className="h-[300px] w-full" />
            ) : stats?.topSources && stats.topSources.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stats.topSources} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" fontSize={12} />
                  <YAxis 
                    dataKey="source" 
                    type="category" 
                    width={100}
                    fontSize={12}
                  />
                  <Tooltip formatter={(value: number) => [value, 'Sessions']} />
                  <Bar dataKey="sessions" fill="#C5A572" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                No source data yet. Traffic sources will appear as visitors arrive.
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card data-testid="card-top-pages">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Top Pages Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-10 w-full" />
                ))}
              </div>
            ) : stats?.pageViewsByPage && stats.pageViewsByPage.length > 0 ? (
              <div className="space-y-3">
                {stats.pageViewsByPage.slice(0, 8).map((page, index) => (
                  <div 
                    key={page.page} 
                    className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
                    data-testid={`row-page-${index}`}
                  >
                    <span className="text-sm font-medium truncate max-w-[200px]">
                      {page.page === '/' ? 'Home' : page.page}
                    </span>
                    <Badge variant="secondary">{page.views}</Badge>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">No page views yet</p>
            )}
          </CardContent>
        </Card>

        <Card data-testid="card-devices">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="h-5 w-5" />
              Devices
            </CardTitle>
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <Skeleton className="h-[200px] w-full" />
            ) : stats?.visitorsByDevice && stats.visitorsByDevice.length > 0 ? (
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={stats.visitorsByDevice}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="count"
                    nameKey="device"
                    label={({ device, percent }) => `${device} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {stats.visitorsByDevice.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => [value, 'Visitors']} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                No device data yet
              </div>
            )}
          </CardContent>
        </Card>

        <Card data-testid="card-browsers">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Browsers
            </CardTitle>
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <Skeleton className="h-[200px] w-full" />
            ) : stats?.visitorsByBrowser && stats.visitorsByBrowser.length > 0 ? (
              <div className="space-y-3">
                {stats.visitorsByBrowser.slice(0, 5).map((browser, index) => {
                  const total = stats.visitorsByBrowser.reduce((sum, b) => sum + b.count, 0);
                  const percent = total > 0 ? (browser.count / total) * 100 : 0;
                  return (
                    <div key={browser.browser} data-testid={`row-browser-${index}`}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{browser.browser}</span>
                        <span className="text-muted-foreground">{percent.toFixed(0)}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                No browser data yet
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card data-testid="card-recent-visitors">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Recent Visitors
          </CardTitle>
          <CardDescription>Live visitor activity feed</CardDescription>
        </CardHeader>
        <CardContent>
          {sessionsLoading ? (
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-16 w-full" />
              ))}
            </div>
          ) : sessions && sessions.length > 0 ? (
            <div className="space-y-3">
              {sessions.slice(0, 10).map((session, index) => (
                <div 
                  key={session.id}
                  className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                  data-testid={`row-visitor-${index}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${session.isActive ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`} />
                    <div>
                      <div className="flex items-center gap-2">
                        {session.device === 'Mobile' ? (
                          <Smartphone className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Monitor className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className="font-medium text-sm">
                          {session.firstPage === '/' ? 'Home' : session.firstPage}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <span>{session.browser || 'Unknown'}</span>
                        <span>•</span>
                        <span>{session.source || 'Direct'}</span>
                        <span>•</span>
                        <span>{session.pageCount} pages</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {formatTime(session.lastActiveAt)}
                    </div>
                    {session.isActive && (
                      <Badge variant="outline" className="mt-1 text-green-600 border-green-300">
                        Online
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">
              No visitor data yet. Visitors will appear here as they browse the site.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
