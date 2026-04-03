// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";
// import {
//   Users,
//   Eye,
//   MousePointerClick,
//   TrendingUp,
//   TrendingDown,
//   Monitor,
//   Smartphone,
//   Tablet,
//   Activity,
//   RefreshCw,
//   ChevronDown,
//   BarChart2,
//   Loader2,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useGet } from "@/hooks/useGet";

// /* ─── Client Config ───────────────────────────────────────────────────── */
// const CLIENTS = [
//   { id: "client_1", name: "AV Academy", propertyId: "519260389" },
//   { id: "client_2", name: "Plexus Digitals", propertyId: "987654321" },
//   { id: "client_3", name: "Divya Drishti", propertyId: "111222333" },
//   { id: "client_4", name: "ARTE Properties", propertyId: "444555666" },
// ];

// const DATE_RANGES = [
//   { label: "Last 7 days", value: "7d" },
//   { label: "Last 30 days", value: "30d" },
//   { label: "Last 90 days", value: "90d" },
//   { label: "Last Year", value: "1y" },
// ];

// /* ─── Colors ──────────────────────────────────────────────────────────── */
// const CHART_COLORS = [
//   "#6366f1",
//   "#10b981",
//   "#f59e0b",
//   "#ec4899",
//   "#3b82f6",
//   "#8b5cf6",
// ];

// const DEVICE_COLORS: Record<string, string> = {
//   desktop: "#6366f1",
//   mobile: "#10b981",
//   tablet: "#f59e0b",
// };

// /* ─── Types ───────────────────────────────────────────────────────────── */
// type KPI = {
//   sessions: number;
//   activeUsers: number;
//   pageViews: number;
//   bounceRate: number;
//   avgSessionDuration: number;
//   newUsers: number;
// };

// type DayData = {
//   date: string;
//   sessions: number;
//   users: number;
// };

// type PageData = {
//   path: string;
//   title: string;
//   pageViews: number;
//   users: number;
//   avgDuration: number;
//   bounceRate: number;
// };

// type SourceData = {
//   channel: string;
//   sessions: number;
//   users: number;
//   pct: number;
// };

// type DeviceData = {
//   device: string;
//   sessions: number;
//   users: number;
//   pct: number;
// };

// type OverviewResponse = {
//   success: boolean;
//   message?: string;
//   kpi: KPI;
//   sessionsByDay: DayData[];
// };

// type PagesResponse = {
//   success: boolean;
//   pages: PageData[];
// };

// type SourcesResponse = {
//   success: boolean;
//   sources: SourceData[];
// };

// type DevicesResponse = {
//   success: boolean;
//   devices: DeviceData[];
// };

// type RealtimeResponse = {
//   success: boolean;
//   activeUsers: number;
// };

// /* ─── Helpers ─────────────────────────────────────────────────────────── */
// function fmtDuration(seconds: number): string {
//   if (!seconds) return "0s";
//   const m = Math.floor(seconds / 60);
//   const s = Math.round(seconds % 60);
//   return m > 0 ? `${m}m ${s}s` : `${s}s`;
// }

// function fmtDate(yyyymmdd: string): string {
//   if (!yyyymmdd || yyyymmdd.length !== 8) return yyyymmdd;
//   return `${yyyymmdd.slice(6)}/${yyyymmdd.slice(4, 6)}`;
// }

// function fmtNum(n: number): string {
//   return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
// }

// /* ─── UI Components ───────────────────────────────────────────────────── */
// function KpiCard({
//   label,
//   value,
//   sub,
//   icon: Icon,
//   color,
//   bg,
//   loading,
// }: {
//   label: string;
//   value: string;
//   sub?: string;
//   icon: React.ElementType;
//   color: string;
//   bg: string;
//   loading: boolean;
// }) {
//   return (
//     <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
//       <div className="flex items-start justify-between gap-3">
//         <div className="min-w-0">
//           <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
//             {label}
//           </p>
//           {loading ? (
//             <div className="h-7 w-24 mt-2 bg-gray-100 animate-pulse rounded-lg" />
//           ) : (
//             <p className="mt-1.5 text-2xl font-bold text-gray-900">{value}</p>
//           )}
//           {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
//         </div>
//         <div className={cn("shrink-0 p-2.5 rounded-xl", bg)}>
//           <Icon className={cn("w-5 h-5", color)} />
//         </div>
//       </div>
//     </div>
//   );
// }

// function Section({
//   title,
//   children,
//   className,
// }: {
//   title: string;
//   children: React.ReactNode;
//   className?: string;
// }) {
//   return (
//     <div
//       className={cn(
//         "bg-white border border-gray-200 rounded-2xl p-5 shadow-sm",
//         className
//       )}
//     >
//       <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
//       {children}
//     </div>
//   );
// }

// function ChartTooltip({ active, payload, label }: any) {
//   if (!active || !payload?.length) return null;

//   return (
//     <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-lg text-xs">
//       <p className="font-semibold text-gray-700 mb-1">{label}</p>
//       {payload.map((p: any) => (
//         <p key={p.name} style={{ color: p.color }}>
//           {p.name}: <strong>{fmtNum(p.value)}</strong>
//         </p>
//       ))}
//     </div>
//   );
// }

// /* ─── Main Page ───────────────────────────────────────────────────────── */
// export default function AnalyticsPage() {
//   const [selectedClient, setSelectedClient] = useState(CLIENTS[0]);
//   const [dateRange, setDateRange] = useState("30d");
//   const [clientOpen, setClientOpen] = useState(false);
//   const [rangeOpen, setRangeOpen] = useState(false);

//   const propertyId = selectedClient.propertyId;

//   const overviewUrl = useMemo(
//     () =>
//       `/google-analytics/overview?propertyId=${propertyId}&dateRange=${dateRange}`,
//     [propertyId, dateRange]
//   );

//   const pagesUrl = useMemo(
//     () =>
//       `/google-analytics/top-pages?propertyId=${propertyId}&dateRange=${dateRange}&limit=8`,
//     [propertyId, dateRange]
//   );

//   const sourcesUrl = useMemo(
//     () =>
//       `/google-analytics/traffic-sources?propertyId=${propertyId}&dateRange=${dateRange}`,
//     [propertyId, dateRange]
//   );

//   const devicesUrl = useMemo(
//     () =>
//       `/google-analytics/devices?propertyId=${propertyId}&dateRange=${dateRange}`,
//     [propertyId, dateRange]
//   );

//   const realtimeUrl = useMemo(
//     () => `/google-analytics/realtime?propertyId=${propertyId}`,
//     [propertyId]
//   );

//   const {
//     data: overview,
//     isLoading: overviewLoading,
//     isError: overviewError,
//     error: overviewErrObj,
//     refetch: refetchOverview,
//   } = useGet<OverviewResponse>(
//     ["analytics-overview", propertyId, dateRange],
//     overviewUrl,
//     { enabled: !!propertyId }
//   );

//   const {
//     data: pagesData,
//     isLoading: pagesLoading,
//     refetch: refetchPages,
//   } = useGet<PagesResponse>(
//     ["analytics-pages", propertyId, dateRange],
//     pagesUrl,
//     { enabled: !!propertyId }
//   );

//   const {
//     data: sourcesData,
//     isLoading: sourcesLoading,
//     refetch: refetchSources,
//   } = useGet<SourcesResponse>(
//     ["analytics-sources", propertyId, dateRange],
//     sourcesUrl,
//     { enabled: !!propertyId }
//   );

//   const {
//     data: devicesData,
//     isLoading: devicesLoading,
//     refetch: refetchDevices,
//   } = useGet<DevicesResponse>(
//     ["analytics-devices", propertyId, dateRange],
//     devicesUrl,
//     { enabled: !!propertyId }
//   );

//   const {
//     data: realtimeData,
//     isLoading: realtimeLoading,
//     refetch: refetchRealtime,
//   } = useGet<RealtimeResponse>(
//     ["analytics-realtime", propertyId],
//     realtimeUrl,
//     {
//       enabled: !!propertyId,
//       refetchInterval: 30000,
//     }
//   );

//   const loading =
//     overviewLoading ||
//     pagesLoading ||
//     sourcesLoading ||
//     devicesLoading ||
//     realtimeLoading;

//   const error = overviewError ? overviewErrObj?.message : null;

//   const kpi = overview?.kpi || null;
//   const sessionsByDay = overview?.sessionsByDay || [];
//   const pages = pagesData?.pages || [];
//   const sources = sourcesData?.sources || [];
//   const devices = devicesData?.devices || [];
//   const activeUsers = realtimeData?.activeUsers || 0;

//   const handleRefresh = async () => {
//     await Promise.all([
//       refetchOverview(),
//       refetchPages(),
//       refetchSources(),
//       refetchDevices(),
//       refetchRealtime(),
//     ]);
//   };

//   return (
//     <div className="space-y-6 p-4 sm:p-6 min-h-screen bg-gray-50">
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
//         <div>
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
//             Analytics
//           </h1>
//           <p className="text-sm text-gray-500 mt-0.5">
//             Google Analytics 4 — Real-time performance data
//           </p>
//         </div>

//         <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full">
//           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//           <span className="text-sm font-semibold text-emerald-700">
//             {activeUsers} active right now
//           </span>
//         </div>
//       </div>

//       <div className="flex flex-wrap gap-3 items-center">
//         <div className="relative">
//           <button
//             onClick={() => {
//               setClientOpen((o) => !o);
//               setRangeOpen(false);
//             }}
//             className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/30 transition-colors shadow-sm min-w-[200px]"
//           >
//             <div className="w-2 h-2 rounded-full bg-indigo-500" />
//             <span className="flex-1 text-left">{selectedClient.name}</span>
//             <ChevronDown
//               className={cn(
//                 "w-4 h-4 text-gray-400 transition-transform",
//                 clientOpen && "rotate-180"
//               )}
//             />
//           </button>

//           {clientOpen && (
//             <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
//               {CLIENTS.map((c) => (
//                 <button
//                   key={c.id}
//                   onClick={() => {
//                     setSelectedClient(c);
//                     setClientOpen(false);
//                   }}
//                   className={cn(
//                     "w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 hover:bg-indigo-50 transition-colors",
//                     c.id === selectedClient.id &&
//                       "bg-indigo-50 text-indigo-700 font-semibold"
//                   )}
//                 >
//                   <div
//                     className={cn(
//                       "w-2 h-2 rounded-full",
//                       c.id === selectedClient.id
//                         ? "bg-indigo-500"
//                         : "bg-gray-300"
//                     )}
//                   />
//                   <div>
//                     <p className="font-medium">{c.name}</p>
//                     <p className="text-[10px] text-gray-400">
//                       Property {c.propertyId}
//                     </p>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="relative">
//           <button
//             onClick={() => {
//               setRangeOpen((o) => !o);
//               setClientOpen(false);
//             }}
//             className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/30 transition-colors shadow-sm"
//           >
//             <BarChart2 className="w-4 h-4 text-gray-400" />
//             {DATE_RANGES.find((d) => d.value === dateRange)?.label}
//             <ChevronDown
//               className={cn(
//                 "w-4 h-4 text-gray-400 transition-transform",
//                 rangeOpen && "rotate-180"
//               )}
//             />
//           </button>

//           {rangeOpen && (
//             <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden w-40">
//               {DATE_RANGES.map((d) => (
//                 <button
//                   key={d.value}
//                   onClick={() => {
//                     setDateRange(d.value);
//                     setRangeOpen(false);
//                   }}
//                   className={cn(
//                     "w-full text-left px-4 py-2.5 text-sm hover:bg-indigo-50 transition-colors",
//                     d.value === dateRange &&
//                       "bg-indigo-50 text-indigo-700 font-semibold"
//                   )}
//                 >
//                   {d.label}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         <button
//           onClick={handleRefresh}
//           disabled={loading}
//           className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white rounded-xl px-4 py-2.5 text-sm font-medium transition-colors shadow-sm"
//         >
//           {loading ? (
//             <Loader2 className="w-4 h-4 animate-spin" />
//           ) : (
//             <RefreshCw className="w-4 h-4" />
//           )}
//           {loading ? "Loading..." : "Refresh"}
//         </button>
//       </div>

//       {error && (
//         <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-600 flex items-center gap-2">
//           <span className="font-semibold">Error:</span> {error}
//         </div>
//       )}

//       <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
//         {[
//           {
//             label: "Sessions",
//             value: fmtNum(kpi?.sessions ?? 0),
//             sub: `+${kpi?.newUsers ?? 0} new users`,
//             icon: Activity,
//             color: "text-indigo-500",
//             bg: "bg-indigo-50",
//           },
//           {
//             label: "Active Users",
//             value: fmtNum(kpi?.activeUsers ?? 0),
//             sub: undefined,
//             icon: Users,
//             color: "text-blue-500",
//             bg: "bg-blue-50",
//           },
//           {
//             label: "Page Views",
//             value: fmtNum(kpi?.pageViews ?? 0),
//             sub: undefined,
//             icon: Eye,
//             color: "text-violet-500",
//             bg: "bg-violet-50",
//           },
//           {
//             label: "Bounce Rate",
//             value: kpi ? `${kpi.bounceRate.toFixed(1)}%` : "—",
//             sub: undefined,
//             icon: TrendingDown,
//             color: "text-orange-500",
//             bg: "bg-orange-50",
//           },
//           {
//             label: "Avg. Duration",
//             value: kpi ? fmtDuration(kpi.avgSessionDuration) : "—",
//             sub: undefined,
//             icon: MousePointerClick,
//             color: "text-emerald-500",
//             bg: "bg-emerald-50",
//           },
//           {
//             label: "New Users",
//             value: fmtNum(kpi?.newUsers ?? 0),
//             sub: undefined,
//             icon: TrendingUp,
//             color: "text-pink-500",
//             bg: "bg-pink-50",
//           },
//         ].map((k) => (
//           <KpiCard key={k.label} {...k} loading={loading} />
//         ))}
//       </div>

//       <Section
//         title={`Sessions Over Time — ${
//           DATE_RANGES.find((d) => d.value === dateRange)?.label
//         }`}
//       >
//         {loading ? (
//           <div className="h-56 bg-gray-50 animate-pulse rounded-xl" />
//         ) : sessionsByDay.length === 0 ? (
//           <p className="text-sm text-gray-400 text-center py-12">
//             No data available
//           </p>
//         ) : (
//           <ResponsiveContainer width="100%" height={220}>
//             <LineChart
//               data={sessionsByDay}
//               margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
//             >
//               <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
//               <XAxis
//                 dataKey="date"
//                 tickFormatter={fmtDate}
//                 tick={{ fontSize: 11, fill: "#9ca3af" }}
//                 interval="preserveStartEnd"
//               />
//               <YAxis
//                 tick={{ fontSize: 11, fill: "#9ca3af" }}
//                 tickFormatter={fmtNum}
//               />
//               <Tooltip content={<ChartTooltip />} />
//               <Legend wrapperStyle={{ fontSize: 12 }} />
//               <Line
//                 type="monotone"
//                 dataKey="sessions"
//                 stroke="#6366f1"
//                 strokeWidth={2}
//                 dot={false}
//                 name="Sessions"
//               />
//               <Line
//                 type="monotone"
//                 dataKey="users"
//                 stroke="#10b981"
//                 strokeWidth={2}
//                 dot={false}
//                 name="Users"
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         )}
//       </Section>

//       <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
//         <Section title="Traffic Sources" className="lg:col-span-2">
//           {loading ? (
//             <div className="h-48 bg-gray-50 animate-pulse rounded-xl" />
//           ) : sources.length === 0 ? (
//             <p className="text-sm text-gray-400 text-center py-8">No data</p>
//           ) : (
//             <>
//               <ResponsiveContainer width="100%" height={160}>
//                 <PieChart>
//                   <Pie
//                     data={sources}
//                     dataKey="sessions"
//                     nameKey="channel"
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={40}
//                     outerRadius={70}
//                   >
//                     {sources.map((_, i) => (
//                       <Cell
//                         key={i}
//                         fill={CHART_COLORS[i % CHART_COLORS.length]}
//                       />
//                     ))}
//                   </Pie>
//                   <Tooltip formatter={(v: any) => fmtNum(v)} />
//                 </PieChart>
//               </ResponsiveContainer>
//               <div className="space-y-2 mt-2">
//                 {sources.map((s, i) => (
//                   <div
//                     key={s.channel}
//                     className="flex items-center justify-between text-xs"
//                   >
//                     <div className="flex items-center gap-2">
//                       <span
//                         className="w-2.5 h-2.5 rounded-full"
//                         style={{
//                           backgroundColor:
//                             CHART_COLORS[i % CHART_COLORS.length],
//                         }}
//                       />
//                       <span className="text-gray-600 font-medium">
//                         {s.channel}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <span className="text-gray-400">{s.pct}%</span>
//                       <span className="font-semibold text-gray-900">
//                         {fmtNum(s.sessions)}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}
//         </Section>

//         <Section title="Devices" className="lg:col-span-1">
//           {loading ? (
//             <div className="h-48 bg-gray-50 animate-pulse rounded-xl" />
//           ) : (
//             <div className="space-y-4 pt-2">
//               {devices.length === 0 ? (
//                 <p className="text-sm text-gray-400 text-center py-8">No data</p>
//               ) : (
//                 devices.map((d) => {
//                   const DevIcon =
//                     d.device === "desktop"
//                       ? Monitor
//                       : d.device === "mobile"
//                       ? Smartphone
//                       : Tablet;

//                   const color = DEVICE_COLORS[d.device] || "#9ca3af";

//                   return (
//                     <div key={d.device}>
//                       <div className="flex items-center justify-between mb-1.5">
//                         <div className="flex items-center gap-2">
//                           <DevIcon
//                             className="w-3.5 h-3.5"
//                             style={{ color }}
//                           />
//                           <span className="text-xs font-medium capitalize text-gray-700">
//                             {d.device}
//                           </span>
//                         </div>
//                         <span className="text-xs font-bold text-gray-900">
//                           {d.pct}%
//                         </span>
//                       </div>
//                       <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
//                         <div
//                           className="h-full rounded-full"
//                           style={{
//                             width: `${d.pct}%`,
//                             backgroundColor: color,
//                           }}
//                         />
//                       </div>
//                       <p className="text-[10px] text-gray-400 mt-1">
//                         {fmtNum(d.sessions)} sessions
//                       </p>
//                     </div>
//                   );
//                 })
//               )}
//             </div>
//           )}
//         </Section>

//         <Section title="Top Pages by Views" className="lg:col-span-2">
//           {loading ? (
//             <div className="h-48 bg-gray-50 animate-pulse rounded-xl" />
//           ) : pages.length === 0 ? (
//             <p className="text-sm text-gray-400 text-center py-8">No data</p>
//           ) : (
//             <ResponsiveContainer width="100%" height={200}>
//               <BarChart
//                 data={pages.slice(0, 6)}
//                 layout="vertical"
//                 margin={{ left: 0, right: 12 }}
//               >
//                 <CartesianGrid
//                   strokeDasharray="3 3"
//                   stroke="#f3f4f6"
//                   horizontal={false}
//                 />
//                 <XAxis
//                   type="number"
//                   tick={{ fontSize: 10, fill: "#9ca3af" }}
//                   tickFormatter={fmtNum}
//                 />
//                 <YAxis
//                   type="category"
//                   dataKey="path"
//                   tick={{ fontSize: 9, fill: "#9ca3af" }}
//                   width={80}
//                 />
//                 <Tooltip content={<ChartTooltip />} />
//                 <Bar
//                   dataKey="pageViews"
//                   name="Page Views"
//                   fill="#6366f1"
//                   radius={[0, 4, 4, 0]}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           )}
//         </Section>
//       </div>

//       <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
//         <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
//           <h3 className="text-sm font-semibold text-gray-900">
//             Top Pages — {selectedClient.name}
//           </h3>
//           <span className="text-xs text-gray-400">{pages.length} pages</span>
//         </div>

//         {loading ? (
//           <div className="p-5 space-y-3">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 className="h-8 bg-gray-50 animate-pulse rounded-lg"
//               />
//             ))}
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead>
//                 <tr className="bg-gray-50 border-b border-gray-100">
//                   {["Page", "Page Views", "Users", "Avg Duration", "Bounce Rate"].map(
//                     (h) => (
//                       <th
//                         key={h}
//                         className="text-left py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-gray-400"
//                       >
//                         {h}
//                       </th>
//                     )
//                   )}
//                 </tr>
//               </thead>
//               <tbody>
//                 {pages.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={5}
//                       className="text-center py-10 text-sm text-gray-400"
//                     >
//                       No page data
//                     </td>
//                   </tr>
//                 ) : (
//                   pages.map((p, i) => (
//                     <tr
//                       key={i}
//                       className="border-b border-gray-50 hover:bg-indigo-50/30 transition-colors"
//                     >
//                       <td className="py-3 px-4 max-w-[260px]">
//                         <p
//                           className="font-medium text-gray-900 truncate"
//                           title={p.path}
//                         >
//                           {p.path}
//                         </p>
//                         <p className="text-[11px] text-gray-400 truncate">
//                           {p.title}
//                         </p>
//                       </td>
//                       <td className="py-3 px-4 font-semibold text-gray-900">
//                         {p.pageViews.toLocaleString("en-IN")}
//                       </td>
//                       <td className="py-3 px-4 text-gray-600">
//                         {p.users.toLocaleString("en-IN")}
//                       </td>
//                       <td className="py-3 px-4 text-gray-600">
//                         {fmtDuration(p.avgDuration)}
//                       </td>
//                       <td className="py-3 px-4">
//                         <span
//                           className={cn(
//                             "text-xs font-semibold px-2 py-0.5 rounded-full",
//                             p.bounceRate > 60
//                               ? "bg-red-50 text-red-600"
//                               : p.bounceRate > 40
//                               ? "bg-amber-50 text-amber-700"
//                               : "bg-emerald-50 text-emerald-700"
//                           )}
//                         >
//                           {p.bounceRate.toFixed(1)}%
//                         </span>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Users,
  Eye,
  MousePointerClick,
  TrendingUp,
  TrendingDown,
  Monitor,
  Smartphone,
  Tablet,
  Activity,
  RefreshCw,
  ChevronDown,
  BarChart2,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useGet } from "@/hooks/useGet";

/* ─── Client Config ───────────────────────────────────────────────────── */
const CLIENTS = [
  { id: "client_1", name: "AV Academy", propertyId: "519260389" },
  { id: "client_2", name: "Plexus Digitals", propertyId: "987654321" },
  { id: "client_3", name: "Divya Drishti", propertyId: "111222333" },
  { id: "client_4", name: "ARTE Properties", propertyId: "444555666" },
];

const DATE_RANGES = [
  { label: "Last 7 days", value: "7d" },
  { label: "Last 30 days", value: "30d" },
  { label: "Last 90 days", value: "90d" },
  { label: "Last Year", value: "1y" },
];

/* ─── Colors ──────────────────────────────────────────────────────────── */
const CHART_COLORS = [
  "#6366f1",
  "#10b981",
  "#f59e0b",
  "#ec4899",
  "#3b82f6",
  "#8b5cf6",
];

const DEVICE_COLORS: Record<string, string> = {
  desktop: "#6366f1",
  mobile: "#10b981",
  tablet: "#f59e0b",
};

/* ─── Types ───────────────────────────────────────────────────────────── */
type KPI = {
  sessions: number;
  activeUsers: number;
  pageViews: number;
  bounceRate: number;
  avgSessionDuration: number;
  newUsers: number;
};

type DayData = {
  date: string;
  sessions: number;
  users: number;
};

type PageData = {
  path: string;
  title: string;
  pageViews: number;
  users: number;
  avgDuration: number;
  bounceRate: number;
};

type SourceData = {
  channel: string;
  sessions: number;
  users: number;
  pct: number;
};

type DeviceData = {
  device: string;
  sessions: number;
  users: number;
  pct: number;
};

type OverviewResponse = {
  success: boolean;
  message?: string;
  kpi: KPI;
  sessionsByDay: DayData[];
};

type PagesResponse = {
  success: boolean;
  pages: PageData[];
};

type SourcesResponse = {
  success: boolean;
  sources: SourceData[];
};

type DevicesResponse = {
  success: boolean;
  devices: DeviceData[];
};

type RealtimeResponse = {
  success: boolean;
  activeUsers: number;
};

/* ─── Helpers ─────────────────────────────────────────────────────────── */
function fmtDuration(seconds: number): string {
  if (!seconds) return "0s";
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

function fmtDate(yyyymmdd: string): string {
  if (!yyyymmdd || yyyymmdd.length !== 8) return yyyymmdd;
  return `${yyyymmdd.slice(6)}/${yyyymmdd.slice(4, 6)}`;
}

function fmtNum(n: number): string {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
}

/* ─── Click Outside Hook ──────────────────────────────────────────────── */
function useClickOutside(
  refs: React.RefObject<HTMLElement | null>[],
  callback: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const isInside = refs.some((ref) => ref.current?.contains(target));
      if (!isInside) callback();
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [refs, callback]);
}

/* ─── UI Components ───────────────────────────────────────────────────── */
function KpiCard({
  label,
  value,
  sub,
  icon: Icon,
  color,
  bg,
  loading,
}: {
  label: string;
  value: string;
  sub?: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  loading: boolean;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-400">
            {label}
          </p>

          {loading ? (
            <div className="mt-2 h-7 w-24 animate-pulse rounded-lg bg-gray-100 dark:bg-slate-800" />
          ) : (
            <p className="mt-1.5 text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              {value}
            </p>
          )}

          {sub && (
            <p className="mt-1 text-xs text-gray-500 dark:text-slate-400">
              {sub}
            </p>
          )}
        </div>

        <div
          className={cn(
            "shrink-0 rounded-xl p-2.5",
            bg
          )}
        >
          <Icon className={cn("h-5 w-5", color)} />
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900",
        className
      )}
    >
      <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      {children}
    </div>
  );
}

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 text-xs shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <p className="mb-1 font-semibold text-gray-700 dark:text-slate-200">
        {label}
      </p>
      {payload.map((p: any) => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name}: <strong>{fmtNum(p.value)}</strong>
        </p>
      ))}
    </div>
  );
}

/* ─── Main Page ───────────────────────────────────────────────────────── */
export default function AnalyticsPage() {
  const [selectedClient, setSelectedClient] = useState(CLIENTS[0]);
  const [dateRange, setDateRange] = useState("30d");
  const [clientOpen, setClientOpen] = useState(false);
  const [rangeOpen, setRangeOpen] = useState(false);

  const clientRef = useRef<HTMLDivElement | null>(null);
  const rangeRef = useRef<HTMLDivElement | null>(null);

  useClickOutside([clientRef, rangeRef], () => {
    setClientOpen(false);
    setRangeOpen(false);
  });

  const propertyId = selectedClient.propertyId;

  const overviewUrl = useMemo(
    () =>
      `/google-analytics/overview?propertyId=${propertyId}&dateRange=${dateRange}`,
    [propertyId, dateRange]
  );

  const pagesUrl = useMemo(
    () =>
      `/google-analytics/top-pages?propertyId=${propertyId}&dateRange=${dateRange}&limit=8`,
    [propertyId, dateRange]
  );

  const sourcesUrl = useMemo(
    () =>
      `/google-analytics/traffic-sources?propertyId=${propertyId}&dateRange=${dateRange}`,
    [propertyId, dateRange]
  );

  const devicesUrl = useMemo(
    () =>
      `/google-analytics/devices?propertyId=${propertyId}&dateRange=${dateRange}`,
    [propertyId, dateRange]
  );

  const realtimeUrl = useMemo(
    () => `/google-analytics/realtime?propertyId=${propertyId}`,
    [propertyId]
  );

  const {
    data: overview,
    isLoading: overviewLoading,
    isError: overviewError,
    error: overviewErrObj,
    refetch: refetchOverview,
  } = useGet<OverviewResponse>(
    ["analytics-overview", propertyId, dateRange],
    overviewUrl,
    { enabled: !!propertyId }
  );

  const {
    data: pagesData,
    isLoading: pagesLoading,
    refetch: refetchPages,
  } = useGet<PagesResponse>(
    ["analytics-pages", propertyId, dateRange],
    pagesUrl,
    { enabled: !!propertyId }
  );

  const {
    data: sourcesData,
    isLoading: sourcesLoading,
    refetch: refetchSources,
  } = useGet<SourcesResponse>(
    ["analytics-sources", propertyId, dateRange],
    sourcesUrl,
    { enabled: !!propertyId }
  );

  const {
    data: devicesData,
    isLoading: devicesLoading,
    refetch: refetchDevices,
  } = useGet<DevicesResponse>(
    ["analytics-devices", propertyId, dateRange],
    devicesUrl,
    { enabled: !!propertyId }
  );

  const {
    data: realtimeData,
    isLoading: realtimeLoading,
    refetch: refetchRealtime,
  } = useGet<RealtimeResponse>(
    ["analytics-realtime", propertyId],
    realtimeUrl,
    {
      enabled: !!propertyId,
      refetchInterval: 30000,
    }
  );

  const loading =
    overviewLoading ||
    pagesLoading ||
    sourcesLoading ||
    devicesLoading ||
    realtimeLoading;

  const error = overviewError ? (overviewErrObj as Error)?.message : null;

  const kpi = overview?.kpi || null;
  const sessionsByDay = overview?.sessionsByDay || [];
  const pages = pagesData?.pages || [];
  const sources = sourcesData?.sources || [];
  const devices = devicesData?.devices || [];
  const activeUsers = realtimeData?.activeUsers || 0;

  const handleRefresh = async () => {
    await Promise.all([
      refetchOverview(),
      refetchPages(),
      refetchSources(),
      refetchDevices(),
      refetchRealtime(),
    ]);
  };

  return (
    <div className="min-h-screen space-y-6 bg-gray-50 p-4 sm:p-6 dark:bg-[#020617]">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Analytics
          </h1>
          <p className="mt-0.5 text-sm text-gray-500 dark:text-slate-400">
            Google Analytics 4 — Real-time performance data
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 dark:border-emerald-900/50 dark:bg-emerald-950/30">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
            {activeUsers} active right now
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative" ref={clientRef}>
          <button
            onClick={() => {
              setClientOpen((o) => !o);
              setRangeOpen(false);
            }}
            className="flex min-w-[220px] items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:bg-slate-800"
          >
            <div className="h-2 w-2 rounded-full bg-indigo-500" />
            <span className="flex-1 text-left">{selectedClient.name}</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-gray-400 transition-transform dark:text-slate-400",
                clientOpen && "rotate-180"
              )}
            />
          </button>

          {clientOpen && (
            <div className="absolute left-0 top-full z-50 mt-1 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
              {CLIENTS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedClient(c);
                    setClientOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors hover:bg-indigo-50 dark:hover:bg-slate-800",
                    c.id === selectedClient.id &&
                      "bg-indigo-50 font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400"
                  )}
                >
                  <div
                    className={cn(
                      "h-2 w-2 rounded-full",
                      c.id === selectedClient.id
                        ? "bg-indigo-500"
                        : "bg-gray-300 dark:bg-slate-600"
                    )}
                  />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {c.name}
                    </p>
                    <p className="text-[10px] text-gray-400 dark:text-slate-400">
                      Property {c.propertyId}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative" ref={rangeRef}>
          <button
            onClick={() => {
              setRangeOpen((o) => !o);
              setClientOpen(false);
            }}
            className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:bg-slate-800"
          >
            <BarChart2 className="h-4 w-4 text-gray-400 dark:text-slate-400" />
            {DATE_RANGES.find((d) => d.value === dateRange)?.label}
            <ChevronDown
              className={cn(
                "h-4 w-4 text-gray-400 transition-transform dark:text-slate-400",
                rangeOpen && "rotate-180"
              )}
            />
          </button>

          {rangeOpen && (
            <div className="absolute left-0 top-full z-50 mt-1 w-44 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
              {DATE_RANGES.map((d) => (
                <button
                  key={d.value}
                  onClick={() => {
                    setDateRange(d.value);
                    setRangeOpen(false);
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-indigo-50 dark:hover:bg-slate-800",
                    d.value === dateRange &&
                      "bg-indigo-50 font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400"
                  )}
                >
                  {d.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={handleRefresh}
          disabled={loading}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 disabled:opacity-60"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4" />
          )}
          {loading ? "Loading..." : "Refresh"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-400">
          <span className="font-semibold">Error:</span> {error}
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
        {[
          {
            label: "Sessions",
            value: fmtNum(kpi?.sessions ?? 0),
            sub: `+${kpi?.newUsers ?? 0} new users`,
            icon: Activity,
            color: "text-indigo-500",
            bg: "bg-indigo-50 dark:bg-indigo-500/10",
          },
          {
            label: "Active Users",
            value: fmtNum(kpi?.activeUsers ?? 0),
            sub: undefined,
            icon: Users,
            color: "text-blue-500",
            bg: "bg-blue-50 dark:bg-blue-500/10",
          },
          {
            label: "Page Views",
            value: fmtNum(kpi?.pageViews ?? 0),
            sub: undefined,
            icon: Eye,
            color: "text-violet-500",
            bg: "bg-violet-50 dark:bg-violet-500/10",
          },
          {
            label: "Bounce Rate",
            value: kpi ? `${kpi.bounceRate.toFixed(1)}%` : "—",
            sub: undefined,
            icon: TrendingDown,
            color: "text-orange-500",
            bg: "bg-orange-50 dark:bg-orange-500/10",
          },
          {
            label: "Avg. Duration",
            value: kpi ? fmtDuration(kpi.avgSessionDuration) : "—",
            sub: undefined,
            icon: MousePointerClick,
            color: "text-emerald-500",
            bg: "bg-emerald-50 dark:bg-emerald-500/10",
          },
          {
            label: "New Users",
            value: fmtNum(kpi?.newUsers ?? 0),
            sub: undefined,
            icon: TrendingUp,
            color: "text-pink-500",
            bg: "bg-pink-50 dark:bg-pink-500/10",
          },
        ].map((k) => (
          <KpiCard key={k.label} {...k} loading={loading} />
        ))}
      </div>

      {/* Sessions Over Time */}
      <Section
        title={`Sessions Over Time — ${
          DATE_RANGES.find((d) => d.value === dateRange)?.label
        }`}
      >
        {loading ? (
          <div className="h-56 animate-pulse rounded-xl bg-gray-50 dark:bg-slate-800" />
        ) : sessionsByDay.length === 0 ? (
          <p className="py-12 text-center text-sm text-gray-400 dark:text-slate-400">
            No data available
          </p>
        ) : (
          <ResponsiveContainer width="100%" height={220}>
            <LineChart
              data={sessionsByDay}
              margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="currentColor"
                className="text-gray-200 dark:text-slate-700"
              />
              <XAxis
                dataKey="date"
                tickFormatter={fmtDate}
                tick={{ fontSize: 11, fill: "#94a3b8" }}
                axisLine={false}
                tickLine={false}
                interval="preserveStartEnd"
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#94a3b8" }}
                tickFormatter={fmtNum}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<ChartTooltip />} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line
                type="monotone"
                dataKey="sessions"
                stroke="#6366f1"
                strokeWidth={2.5}
                dot={false}
                name="Sessions"
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#10b981"
                strokeWidth={2.5}
                dot={false}
                name="Users"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </Section>

      {/* Middle Grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <Section title="Traffic Sources" className="lg:col-span-2">
          {loading ? (
            <div className="h-48 animate-pulse rounded-xl bg-gray-50 dark:bg-slate-800" />
          ) : sources.length === 0 ? (
            <p className="py-8 text-center text-sm text-gray-400 dark:text-slate-400">
              No data
            </p>
          ) : (
            <>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie
                    data={sources}
                    dataKey="sessions"
                    nameKey="channel"
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                  >
                    {sources.map((_, i) => (
                      <Cell
                        key={i}
                        fill={CHART_COLORS[i % CHART_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "#0f172a",
                      border: "1px solid #334155",
                      borderRadius: 12,
                      color: "#fff",
                    }}
                    formatter={(v: any) => fmtNum(v)}
                  />
                </PieChart>
              </ResponsiveContainer>

              <div className="mt-2 space-y-2">
                {sources.map((s, i) => (
                  <div
                    key={s.channel}
                    className="flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            CHART_COLORS[i % CHART_COLORS.length],
                        }}
                      />
                      <span className="font-medium text-gray-600 dark:text-slate-300">
                        {s.channel}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 dark:text-slate-400">
                        {s.pct}%
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {fmtNum(s.sessions)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </Section>

        <Section title="Devices" className="lg:col-span-1">
          {loading ? (
            <div className="h-48 animate-pulse rounded-xl bg-gray-50 dark:bg-slate-800" />
          ) : (
            <div className="space-y-4 pt-2">
              {devices.length === 0 ? (
                <p className="py-8 text-center text-sm text-gray-400 dark:text-slate-400">
                  No data
                </p>
              ) : (
                devices.map((d) => {
                  const DevIcon =
                    d.device === "desktop"
                      ? Monitor
                      : d.device === "mobile"
                      ? Smartphone
                      : Tablet;

                  const color = DEVICE_COLORS[d.device] || "#9ca3af";

                  return (
                    <div key={d.device}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <DevIcon
                            className="h-3.5 w-3.5"
                            style={{ color }}
                          />
                          <span className="text-xs font-medium capitalize text-gray-700 dark:text-slate-300">
                            {d.device}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-gray-900 dark:text-white">
                          {d.pct}%
                        </span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-gray-100 dark:bg-slate-800">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${d.pct}%`,
                            backgroundColor: color,
                          }}
                        />
                      </div>

                      <p className="mt-1 text-[10px] text-gray-400 dark:text-slate-400">
                        {fmtNum(d.sessions)} sessions
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          )}
        </Section>

        <Section title="Top Pages by Views" className="lg:col-span-2">
          {loading ? (
            <div className="h-48 animate-pulse rounded-xl bg-gray-50 dark:bg-slate-800" />
          ) : pages.length === 0 ? (
            <p className="py-8 text-center text-sm text-gray-400 dark:text-slate-400">
              No data
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <BarChart
                data={pages.slice(0, 6)}
                layout="vertical"
                margin={{ left: 0, right: 12 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="currentColor"
                  className="text-gray-200 dark:text-slate-700"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  tick={{ fontSize: 10, fill: "#94a3b8" }}
                  tickFormatter={fmtNum}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="path"
                  tick={{ fontSize: 9, fill: "#94a3b8" }}
                  width={90}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<ChartTooltip />} />
                <Bar
                  dataKey="pageViews"
                  name="Page Views"
                  fill="#6366f1"
                  radius={[0, 6, 6, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </Section>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-slate-800">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            Top Pages — {selectedClient.name}
          </h3>
          <span className="text-xs text-gray-400 dark:text-slate-400">
            {pages.length} pages
          </span>
        </div>

        {loading ? (
          <div className="space-y-3 p-5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-8 animate-pulse rounded-lg bg-gray-50 dark:bg-slate-800"
              />
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50 dark:border-slate-800 dark:bg-slate-950/40">
                  {[
                    "Page",
                    "Page Views",
                    "Users",
                    "Avg Duration",
                    "Bounce Rate",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-400"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {pages.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-10 text-center text-sm text-gray-400 dark:text-slate-400"
                    >
                      No page data
                    </td>
                  </tr>
                ) : (
                  pages.map((p, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-50 transition-colors hover:bg-indigo-50/30 dark:border-slate-800 dark:hover:bg-slate-800/50"
                    >
                      <td className="max-w-[260px] px-4 py-3">
                        <p
                          className="truncate font-medium text-gray-900 dark:text-white"
                          title={p.path}
                        >
                          {p.path}
                        </p>
                        <p className="truncate text-[11px] text-gray-400 dark:text-slate-400">
                          {p.title}
                        </p>
                      </td>

                      <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">
                        {p.pageViews.toLocaleString("en-IN")}
                      </td>

                      <td className="px-4 py-3 text-gray-600 dark:text-slate-300">
                        {p.users.toLocaleString("en-IN")}
                      </td>

                      <td className="px-4 py-3 text-gray-600 dark:text-slate-300">
                        {fmtDuration(p.avgDuration)}
                      </td>

                      <td className="px-4 py-3">
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-xs font-semibold",
                            p.bounceRate > 60
                              ? "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
                              : p.bounceRate > 40
                              ? "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
                              : "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                          )}
                        >
                          {p.bounceRate.toFixed(1)}%
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}