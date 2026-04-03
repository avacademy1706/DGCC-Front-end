// "use client";

// import { useState } from "react";
// import {
//   DollarSign, TrendingUp, Target, BarChart3, Users, Bell,
// } from "lucide-react";
// import {
//   BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis,
//   PolarRadiusAxis, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
// } from "recharts";

// // ── Data ──────────────────────────────────────────────────────────────────────

// const revenueData = [
//   { m: "Sep", r: 14, s: 9 }, { m: "Oct", r: 16, s: 10 }, { m: "Nov", r: 18, s: 12 },
//   { m: "Dec", r: 20, s: 13 }, { m: "Jan", r: 21, s: 14 }, { m: "Feb", r: 23, s: 16 },
//   { m: "Mar", r: 24, s: 18 },
// ];

// const radarData = [
//   { metric: "ROAS",        re360: 80, edutech: 70, health: 40 },
//   { metric: "CPL Eff",     re360: 75, edutech: 65, health: 45 },
//   { metric: "Lead Vol",    re360: 78, edutech: 72, health: 38 },
//   { metric: "Conv Rate",   re360: 70, edutech: 60, health: 42 },
//   { metric: "Budget Util", re360: 65, edutech: 66, health: 48 },
// ];

// const growthData = [
//   { q: "Q1 25", edutech: 280, re360: 320, finance: 180 },
//   { q: "Q2 25", edutech: 340, re360: 410, finance: 240 },
//   { q: "Q3 25", edutech: 390, re360: 520, finance: 310 },
//   { q: "Q4 25", edutech: 440, re360: 580, finance: 390 },
//   { q: "Q1 26", edutech: 480, re360: 620, finance: 440 },
// ];

// const funnelData = [
//   ["Ad Spend", "₹18.4L", "w-full"],
//   ["Impressions", "12.4M", "w-10/12"],
//   ["Clicks", "840K", "w-9/12"],
//   ["Leads", "2,847", "w-7/12"],
//   ["Opportunities", "486", "w-5/12"],
//   ["Revenue", "₹24.6L", "w-3/4"],
// ];

// // ── Sub-components ────────────────────────────────────────────────────────────

// function StatCard({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
//   return (
//     <div className="p-3 sm:p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
//       <Icon className="mb-2 md:mb-3 text-indigo-500" size={16} />
//       <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight">{value}</p>
//       <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 leading-tight">{label}</p>
//     </div>
//   );
// }

// function KPIBar({ label, val }: { label: string; val: string }) {
//   return (
//     <div>
//       <div className="flex justify-between text-xs mb-1">
//         <span className="text-gray-700 dark:text-slate-300">{label}</span>
//         <span className="text-gray-500 dark:text-slate-400">{val}</span>
//       </div>
//       <div className="h-2 bg-gray-200 dark:bg-slate-800 rounded">
//         <div className="h-2 bg-indigo-500 rounded w-3/4" />
//       </div>
//     </div>
//   );
// }

// // ── Overview Tab ──────────────────────────────────────────────────────────────

// function OverviewUI() {
//   return (
//     <div className="space-y-4 md:space-y-6">

//       {/* Stats — 2-col mobile, 4-col desktop */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
//         <StatCard icon={DollarSign} value="₹18.4L" label="Total Ad Spend" />
//         <StatCard icon={TrendingUp} value="₹24.6L" label="Revenue Generated" />
//         <StatCard icon={Target}     value="3.6x"   label="Overall ROAS" />
//         <StatCard icon={BarChart3}  value="₹186"   label="Blended CPL" />
//       </div>

//       {/* Charts — 1-col mobile, 2-col desktop */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

//         <div className="p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
//           <h3 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Revenue vs Spend Trend</h3>
//           <ResponsiveContainer width="100%" height={220}>
//             <BarChart data={revenueData}>
//               <XAxis dataKey="m" tick={{ fontSize: 11 }} />
//               <YAxis tick={{ fontSize: 11 }} />
//               <Tooltip />
//               <Bar dataKey="r" fill="#34d399" radius={[3, 3, 0, 0]} />
//               <Bar dataKey="s" fill="#6366f1" radius={[3, 3, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
//           <h3 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Client Performance Comparison</h3>
//           <ResponsiveContainer width="100%" height={220}>
//             <RadarChart data={radarData}>
//               <PolarGrid />
//               <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10 }} />
//               <PolarRadiusAxis tick={{ fontSize: 10 }} />
//               <Radar dataKey="re360"   stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} />
//               <Radar dataKey="edutech" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
//               <Radar dataKey="health"  stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
//             </RadarChart>
//           </ResponsiveContainer>
//         </div>

//       </div>

//       {/* Table + KPI — 1-col mobile, 3-col desktop */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">

//         {/* ROAS Table */}
//         <div className="lg:col-span-2 p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
//           <h3 className="font-semibold text-sm md:text-base mb-3 md:mb-4">ROAS by Client & Channel</h3>

//           {/* Desktop table */}
//           <div className="hidden sm:block overflow-x-auto">
//             <table className="w-full text-xs md:text-sm">
//               <thead className="text-gray-500 dark:text-slate-400">
//                 <tr>
//                   <th className="text-left pb-2">Client</th>
//                   <th className="pb-2">Meta</th>
//                   <th className="pb-2">Google</th>
//                   <th className="pb-2">Spend</th>
//                   <th className="pb-2">Revenue</th>
//                   <th className="pb-2">Blended</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-t dark:border-slate-800">
//                   <td className="py-2 font-medium">RealEstate360</td>
//                   <td className="text-center text-green-500 font-semibold">6.2x</td>
//                   <td className="text-center text-green-500 font-semibold">5.4x</td>
//                   <td className="text-center">₹3.2L</td>
//                   <td className="text-center">₹18.4L</td>
//                   <td className="text-center text-green-500 font-semibold">5.8x</td>
//                 </tr>
//                 <tr className="border-t dark:border-slate-800">
//                   <td className="py-2 font-medium">EduTech Pro</td>
//                   <td className="text-center">3.8x</td>
//                   <td className="text-center">4.6x</td>
//                   <td className="text-center">₹2.4L</td>
//                   <td className="text-center">₹10.1L</td>
//                   <td className="text-center">4.2x</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* Mobile cards */}
//           <div className="sm:hidden space-y-3">
//             {[
//               { name: "RealEstate360", meta: "6.2x", google: "5.4x", spend: "₹3.2L", revenue: "₹18.4L", blended: "5.8x", green: true },
//               { name: "EduTech Pro",   meta: "3.8x", google: "4.6x", spend: "₹2.4L", revenue: "₹10.1L", blended: "4.2x", green: false },
//             ].map((row, i) => (
//               <div key={i} className="rounded-lg border border-gray-200 dark:border-slate-700 p-3 space-y-2">
//                 <p className="font-semibold text-sm text-gray-900 dark:text-white">{row.name}</p>
//                 <div className="grid grid-cols-3 gap-2 text-xs">
//                   {[
//                     { label: "Meta", val: row.meta },
//                     { label: "Google", val: row.google },
//                     { label: "Blended", val: row.blended },
//                     { label: "Spend", val: row.spend },
//                     { label: "Revenue", val: row.revenue },
//                   ].map(({ label, val }) => (
//                     <div key={label}>
//                       <p className="text-gray-500 dark:text-slate-400">{label}</p>
//                       <p className={`font-semibold ${row.green ? "text-green-500" : "text-gray-900 dark:text-white"}`}>{val}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* KPI Health */}
//         <div className="p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-3 md:space-y-4">
//           <h3 className="font-semibold text-sm md:text-base">KPI Health</h3>
//           <KPIBar label="CPL vs Target"  val="₹186 / ₹180" />
//           <KPIBar label="ROAS vs Target" val="3.6x / 4x" />
//           <KPIBar label="Conv Rate"      val="11.9% / 12%" />
//         </div>

//       </div>
//     </div>
//   );
// }

// // ── Growth Tab ────────────────────────────────────────────────────────────────

// function GrowthUI() {
//   return (
//     <div className="space-y-4 md:space-y-6">
//       <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6">
//         <StatCard icon={Users}    value="8"  label="Total Clients" />
//         <StatCard icon={BarChart3} value="38" label="Active Campaigns" />
//         <StatCard icon={Bell}     value="3"  label="System Alerts" />
//       </div>
//       <div className="p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
//         <h3 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Cross-Client Growth Trajectory</h3>
//         <ResponsiveContainer width="100%" height={260}>
//           <LineChart data={growthData}>
//             <XAxis dataKey="q" tick={{ fontSize: 11 }} />
//             <YAxis tick={{ fontSize: 11 }} />
//             <Tooltip />
//             <Line dataKey="edutech" stroke="#6366f1" strokeWidth={2} dot={false} />
//             <Line dataKey="re360"   stroke="#10b981" strokeWidth={2} dot={false} />
//             <Line dataKey="finance" stroke="#f59e0b" strokeWidth={2} dot={false} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// // ── CEO Tab ───────────────────────────────────────────────────────────────────

// function CEOUI() {
//   return (
//     <div className="p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-4 md:space-y-5">
//       <h3 className="font-semibold text-sm md:text-base">Marketing Funnel — Spend to Revenue</h3>
//       {funnelData.map(([label, val, width], i) => (
//         <div key={i}>
//           <div className="flex justify-between text-xs md:text-sm mb-1">
//             <span className="text-gray-700 dark:text-slate-300">{label}</span>
//             <span className="text-gray-500 dark:text-slate-400 font-medium">{val}</span>
//           </div>
//           <div className="h-2 bg-gray-200 dark:bg-slate-800 rounded">
//             <div className={`h-2 bg-indigo-500 rounded ${width}`} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// // ── Main Page ─────────────────────────────────────────────────────────────────

// export default function AnalyticsCommandCentre() {
//   const [tab, setTab] = useState("overview");

//   const tabs = [
//     { key: "overview", label: "Overview" },
//     { key: "growth",   label: "Growth Dashboard" },
//     { key: "ceo",      label: "CEO / CXO View" },
//   ];

//   return (
//     <div className="p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">

//       {/* ── HEADER ──────────────────────────────────────────────────── */}
//       <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
//         <div>
//           <h1 className="text-xl md:text-2xl font-bold">Analytics Command Centre</h1>
//           <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">
//             Cross-client performance intelligence
//           </p>
//         </div>
//         <div className="flex gap-2">
//           <button className="flex-1 sm:flex-none px-3 md:px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-xs md:text-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
//             Last 30 Days
//           </button>
//           <button className="flex-1 sm:flex-none px-3 md:px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm transition-colors">
//             Generate Report
//           </button>
//         </div>
//       </div>

//       {/* ── TABS ────────────────────────────────────────────────────── */}
//       <div className="overflow-x-auto">
//         <div className="flex gap-4 md:gap-6 border-b border-gray-200 dark:border-slate-800 text-xs md:text-sm min-w-max">
//           {tabs.map(t => (
//             <button
//               key={t.key}
//               onClick={() => setTab(t.key)}
//               className={`pb-2.5 whitespace-nowrap font-medium transition-colors ${
//                 tab === t.key
//                   ? "text-indigo-600 border-b-2 border-indigo-600"
//                   : "text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300"
//               }`}
//             >
//               {t.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ── TAB CONTENT ─────────────────────────────────────────────── */}
//       {tab === "overview" && <OverviewUI />}
//       {tab === "growth"   && <GrowthUI />}
//       {tab === "ceo"      && <CEOUI />}

//     </div>
//   );
// }


"use client";

import { useMemo, useState } from "react";
import {
  DollarSign,
  TrendingUp,
  Target,
  BarChart3,
  Users,
  Bell,
  MousePointerClick,
  Eye,
  Activity,
} from "lucide-react";
import {
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useGet } from "@/hooks/useGet";

type Campaign = {
  id: string;
  platformId: string;
  platform: string;
  name: string;
  status: string;
  configured_status: string;
  objective: string;
  buying_type: string;
  special_ad_categories: string[];
  budget: number;
  budgetRemaining: number;
  budgetType: string;
  spend_cap: number;
  spend: number;
  leads: number;
  impressions: number;
  clicks: number;
  reach: number;
  ctr: string | null;
  cpm: string | null;
  cpc: string | null;
  cpl: string | null;
  roas: string | null;
  insightPeriod: string | null;
  insights: {
    date_start: string;
    date_stop: string;
    spend: number;
    impressions: number;
    clicks: number;
    reach: number;
    leads: number;
    ctr: string;
    cpm: string;
    cpc: string;
    cpl: string;
    actions: { action_type: string; value: string }[];
    action_values: { action_type: string; value: string }[];
    cost_per_action_type: { action_type: string; value: string }[];
  } | null;
  startDate: string | null;
  endDate: string | null;
  createdTime: string | null;
  updatedTime: string | null;
  clientId: string | null;
  clientName: string | null;
  isAssigned: boolean;
};

type ClientSummary = {
  clientId: string | null;
  count: number;
  spend: number;
  leads: number;
};

type ApiResponse = {
  success: boolean;
  total: number;
  summary: {
    totalCampaigns: number;
    active: number;
    paused: number;
    assigned: number;
    unassigned: number;
    byStatus: Record<string, number>;
    byClient: Record<string, ClientSummary>;
    totals: {
      spend: number;
      leads: number;
      impressions: number;
      clicks: number;
      budget: number;
      cpl: string | null;
      ctr: string | null;
    };
  };
  platforms: {
    meta: {
      campaigns: Campaign[];
      total: number;
    };
    googleAds: {
      campaigns: Campaign[];
      total: number;
    };
    justdial: {
      platform: string;
      status: string;
    };
    indiamart: {
      platform: string;
      status: string;
    };
  };
  data: Campaign[];
};

function formatCurrency(amount?: number | null) {
  if (amount == null) return "₹0";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatNumber(value?: number | null) {
  if (value == null) return "0";
  return new Intl.NumberFormat("en-IN").format(value);
}

function safeNum(value: string | number | null | undefined) {
  if (value == null) return 0;
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function StatCard({
  icon: Icon,
  value,
  label,
  subtext,
}: {
  icon: any;
  value: string;
  label: string;
  subtext?: string;
}) {
  return (
    <div className="p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
      <Icon className="mb-3 text-indigo-500" size={18} />
      <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
        {value}
      </p>
      <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-1">
        {label}
      </p>
      {subtext ? (
        <p className="text-[11px] md:text-xs text-gray-400 dark:text-slate-500 mt-1">
          {subtext}
        </p>
      ) : null}
    </div>
  );
}

function KPIBar({
  label,
  val,
  percent = 75,
}: {
  label: string;
  val: string;
  percent?: number;
}) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-700 dark:text-slate-300">{label}</span>
        <span className="text-gray-500 dark:text-slate-400">{val}</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-slate-800 rounded overflow-hidden">
        <div
          className="h-2 bg-indigo-500 rounded"
          style={{ width: `${Math.max(0, Math.min(percent, 100))}%` }}
        />
      </div>
    </div>
  );
}

export default function AnalyticsCommandCentre() {
  const [tab, setTab] = useState("overview");

  const {
    data: analytics,
    isLoading,
    isError,
    refetch,
  } = useGet<ApiResponse>(
    ["client-campaigns", "last_30d"],
    "/client-campaigns?date_preset=last_30d",
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );

  const totals = analytics?.summary?.totals;
  const campaigns = analytics?.data ?? [];
  const byClient = analytics?.summary?.byClient ?? {};

  const activeCampaigns = analytics?.summary?.active ?? 0;
  const pausedCampaigns = analytics?.summary?.paused ?? 0;
  const totalCampaigns = analytics?.summary?.totalCampaigns ?? 0;

  const clientRows = useMemo(() => {
    return Object.entries(byClient).map(([clientName, value]) => {
      const spend = safeNum(value.spend);
      const leads = safeNum(value.leads);
      const cpl = leads > 0 ? spend / leads : 0;

      return {
        clientName,
        count: value.count,
        spend,
        leads,
        cpl,
        revenue: null,
        roas: null,
      };
    });
  }, [byClient]);

  const overviewBarData = useMemo(() => {
    return campaigns
      .filter((c) => safeNum(c.spend) > 0 || safeNum(c.leads) > 0)
      .slice(0, 8)
      .map((c) => ({
        name: c.name.length > 18 ? `${c.name.slice(0, 18)}...` : c.name,
        spend: safeNum(c.spend),
        leads: safeNum(c.leads),
      }));
  }, [campaigns]);

  const radarData = useMemo(() => {
    const filtered = campaigns.filter((c) => safeNum(c.spend) > 0);

    const avgCtr =
      filtered.length > 0
        ? filtered.reduce((sum, c) => sum + safeNum(c.ctr), 0) / filtered.length
        : 0;

    const avgCpl =
      filtered.length > 0
        ? filtered.reduce((sum, c) => sum + safeNum(c.cpl), 0) / filtered.length
        : 0;

    const avgCpc =
      filtered.length > 0
        ? filtered.reduce((sum, c) => sum + safeNum(c.cpc), 0) / filtered.length
        : 0;

    const avgCpm =
      filtered.length > 0
        ? filtered.reduce((sum, c) => sum + safeNum(c.cpm), 0) / filtered.length
        : 0;

    const totalSpend = safeNum(totals?.spend);
    const totalLeads = safeNum(totals?.leads);
    const totalClicks = safeNum(totals?.clicks);

    return [
      {
        metric: "CTR",
        overall: Number(avgCtr.toFixed(2)),
      },
      {
        metric: "CPL",
        overall: Number(avgCpl.toFixed(2)),
      },
      {
        metric: "CPC",
        overall: Number(avgCpc.toFixed(2)),
      },
      {
        metric: "CPM",
        overall: Number(avgCpm.toFixed(2)),
      },
      {
        metric: "Leads",
        overall: totalLeads,
      },
      {
        metric: "Clicks",
        overall: totalClicks,
      },
      {
        metric: "Spend",
        overall: totalSpend,
      },
    ];
  }, [campaigns, totals]);

  const growthData = useMemo(() => {
    return campaigns
      .filter((c) => c.createdTime)
      .sort(
        (a, b) =>
          new Date(a.createdTime || "").getTime() -
          new Date(b.createdTime || "").getTime()
      )
      .map((c, index) => ({
        label: `C${index + 1}`,
        spend: safeNum(c.spend),
        leads: safeNum(c.leads),
        clicks: safeNum(c.clicks),
      }));
  }, [campaigns]);

  const funnelData = useMemo(() => {
    const spend = safeNum(totals?.spend);
    const impressions = safeNum(totals?.impressions);
    const clicks = safeNum(totals?.clicks);
    const leads = safeNum(totals?.leads);

    const max = Math.max(impressions, clicks, leads, spend, 1);

    const width = (value: number) => `${Math.max((value / max) * 100, 10)}%`;

    return [
      { label: "Ad Spend", value: formatCurrency(spend), width: width(spend) },
      {
        label: "Impressions",
        value: formatNumber(impressions),
        width: width(impressions),
      },
      { label: "Clicks", value: formatNumber(clicks), width: width(clicks) },
      { label: "Leads", value: formatNumber(leads), width: width(leads) },
      {
        label: "Revenue",
        value: "N/A",
        width: "20%",
      },
    ];
  }, [totals]);

  const kpis = useMemo(() => {
    const ctr = safeNum(totals?.ctr);
    const cpl = safeNum(totals?.cpl);
    const clicks = safeNum(totals?.clicks);
    const impressions = safeNum(totals?.impressions);
    const leadRate = clicks > 0 ? (safeNum(totals?.leads) / clicks) * 100 : 0;

    return {
      ctr,
      cpl,
      leadRate,
      ctrPercent: Math.min((ctr / 15) * 100, 100),
      cplPercent: cpl > 0 ? Math.min((100 / cpl) * 100, 100) : 0,
      leadRatePercent: Math.min((leadRate / 20) * 100, 100),
      impressions,
    };
  }, [totals]);

  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "growth", label: "Growth Dashboard" },
    { key: "ceo", label: "CEO / CXO View" },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#020817] p-6 md:p-8 text-gray-900 dark:text-white">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-64 bg-gray-200 dark:bg-slate-800 rounded" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-28 rounded-xl bg-gray-200 dark:bg-slate-800"
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-80 rounded-xl bg-gray-200 dark:bg-slate-800" />
            <div className="h-80 rounded-xl bg-gray-200 dark:bg-slate-800" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !analytics) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#020817] p-6 md:p-8 text-gray-900 dark:text-white">
        <div className="rounded-xl border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900 p-6 max-w-xl">
          <h2 className="text-lg font-semibold mb-2">Analytics load nahi hua</h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 mb-4">
            API se data fetch karte waqt issue aa gaya.
          </p>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">
            Analytics Command Centre
          </h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">
            Live analytics from /api/client-campaigns
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-3 md:px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-xs md:text-sm">
            Last 30 Days
          </button>
          <button
            onClick={() => refetch()}
            className="px-3 md:px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-4 md:gap-6 border-b border-gray-200 dark:border-slate-800 text-xs md:text-sm min-w-max">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`pb-2.5 whitespace-nowrap font-medium transition-colors ${
                tab === t.key
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === "overview" && (
        <div className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            <StatCard
              icon={DollarSign}
              value={formatCurrency(totals?.spend)}
              label="Total Ad Spend"
            />
            <StatCard
              icon={TrendingUp}
              value="N/A"
              label="Revenue Generated"
              subtext="Revenue API me available nahi hai"
            />
            <StatCard
              icon={Target}
              value="N/A"
              label="Overall ROAS"
              subtext="Revenue ke bina ROAS calculate nahi hoga"
            />
            <StatCard
              icon={BarChart3}
              value={totals?.cpl ? `₹${totals.cpl}` : "N/A"}
              label="Blended CPL"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            <StatCard
              icon={Activity}
              value={formatNumber(totalCampaigns)}
              label="Total Campaigns"
            />
            <StatCard
              icon={Bell}
              value={formatNumber(activeCampaigns)}
              label="Active Campaigns"
            />
            <StatCard
              icon={Users}
              value={formatNumber(pausedCampaigns)}
              label="Paused Campaigns"
            />
            <StatCard
              icon={MousePointerClick}
              value={formatNumber(totals?.clicks)}
              label="Total Clicks"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
              <h3 className="font-semibold text-sm md:text-base mb-4">
                Campaign Spend vs Leads
              </h3>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={overviewBarData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="spend" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={50} />
                  <Bar dataKey="leads" fill="#34d399" radius={[4, 4, 0, 0]} barSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
              <h3 className="font-semibold text-sm md:text-base mb-4">
                Overall Performance Snapshot
              </h3>
              <ResponsiveContainer width="100%" height={260}>
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10 }} />
                  <PolarRadiusAxis tick={{ fontSize: 10 }} />
                  <Radar
                    dataKey="overall"
                    stroke="#6366f1"
                    fill="#6366f1"
                    fillOpacity={0.35}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="lg:col-span-2 p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
              <h3 className="font-semibold text-sm md:text-base mb-4">
                Client Performance
              </h3>

              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-xs md:text-sm">
                  <thead className="text-gray-500 dark:text-slate-400">
                    <tr>
                      <th className="text-left pb-2">Client</th>
                      <th className="pb-2">Campaigns</th>
                      <th className="pb-2">Spend</th>
                      <th className="pb-2">Leads</th>
                      <th className="pb-2">CPL</th>
                      <th className="pb-2">Revenue</th>
                      <th className="pb-2">ROAS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientRows.map((row) => (
                      <tr
                        key={row.clientName}
                        className="border-t dark:border-slate-800"
                      >
                        <td className="py-3 font-medium">{row.clientName}</td>
                        <td className="text-center">{row.count}</td>
                        <td className="text-center">
                          {formatCurrency(row.spend)}
                        </td>
                        <td className="text-center">
                          {formatNumber(row.leads)}
                        </td>
                        <td className="text-center">
                          {row.cpl ? `₹${row.cpl.toFixed(2)}` : "N/A"}
                        </td>
                        <td className="text-center">N/A</td>
                        <td className="text-center">N/A</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="sm:hidden space-y-3">
                {clientRows.map((row) => (
                  <div
                    key={row.clientName}
                    className="rounded-lg border border-gray-200 dark:border-slate-700 p-3 space-y-2"
                  >
                    <p className="font-semibold text-sm">{row.clientName}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="text-gray-500 dark:text-slate-400">
                          Campaigns
                        </p>
                        <p className="font-semibold">{row.count}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-slate-400">
                          Spend
                        </p>
                        <p className="font-semibold">
                          {formatCurrency(row.spend)}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-slate-400">
                          Leads
                        </p>
                        <p className="font-semibold">
                          {formatNumber(row.leads)}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-slate-400">CPL</p>
                        <p className="font-semibold">
                          {row.cpl ? `₹${row.cpl.toFixed(2)}` : "N/A"}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-slate-400">
                          Revenue
                        </p>
                        <p className="font-semibold">N/A</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-slate-400">
                          ROAS
                        </p>
                        <p className="font-semibold">N/A</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-4">
              <h3 className="font-semibold text-sm md:text-base">KPI Health</h3>
              <KPIBar
                label="CTR"
                val={totals?.ctr ? `${totals.ctr}%` : "N/A"}
                percent={kpis.ctrPercent}
              />
              <KPIBar
                label="CPL"
                val={totals?.cpl ? `₹${totals.cpl}` : "N/A"}
                percent={kpis.cplPercent}
              />
              <KPIBar
                label="Lead Rate"
                val={`${kpis.leadRate.toFixed(2)}%`}
                percent={kpis.leadRatePercent}
              />
              <KPIBar
                label="Impressions"
                val={formatNumber(kpis.impressions)}
                percent={100}
              />
            </div>
          </div>
        </div>
      )}

      {tab === "growth" && (
        <div className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            <StatCard
              icon={Users}
              value={formatNumber(clientRows.length)}
              label="Total Clients"
            />
            <StatCard
              icon={BarChart3}
              value={formatNumber(totalCampaigns)}
              label="Total Campaigns"
            />
            <StatCard
              icon={Bell}
              value={formatNumber(activeCampaigns)}
              label="Active Live Campaigns"
            />
          </div>

          <div className="p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
            <h3 className="font-semibold text-sm md:text-base mb-4">
              Campaign Growth Trend
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis dataKey="label" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Line
                  dataKey="spend"
                  stroke="#6366f1"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="leads"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="clicks"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
            <h3 className="font-semibold text-sm md:text-base mb-4">
              Campaign List
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs md:text-sm">
                <thead className="text-gray-500 dark:text-slate-400">
                  <tr>
                    <th className="text-left pb-2">Campaign</th>
                    <th className="pb-2">Status</th>
                    <th className="pb-2">Spend</th>
                    <th className="pb-2">Leads</th>
                    <th className="pb-2">Clicks</th>
                    <th className="pb-2">CTR</th>
                    <th className="pb-2">CPL</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((c) => (
                    <tr key={c.id} className="border-t dark:border-slate-800">
                      <td className="py-3">{c.name}</td>
                      <td className="text-center">
                        <span
                          className={`px-2 py-1 rounded-full text-[10px] md:text-xs font-medium ${
                            c.status === "ACTIVE"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                          }`}
                        >
                          {c.status}
                        </span>
                      </td>
                      <td className="text-center">
                        {formatCurrency(safeNum(c.spend))}
                      </td>
                      <td className="text-center">
                        {formatNumber(safeNum(c.leads))}
                      </td>
                      <td className="text-center">
                        {formatNumber(safeNum(c.clicks))}
                      </td>
                      <td className="text-center">
                        {c.ctr ? `${c.ctr}%` : "N/A"}
                      </td>
                      <td className="text-center">
                        {c.cpl ? `₹${c.cpl}` : "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {tab === "ceo" && (
        <div className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            <StatCard
              icon={DollarSign}
              value={formatCurrency(totals?.spend)}
              label="Total Spend"
            />
            <StatCard
              icon={Eye}
              value={formatNumber(totals?.impressions)}
              label="Impressions"
            />
            <StatCard
              icon={MousePointerClick}
              value={formatNumber(totals?.clicks)}
              label="Clicks"
            />
            <StatCard
              icon={TrendingUp}
              value={formatNumber(totals?.leads)}
              label="Leads"
            />
          </div>

          <div className="p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-5">
            <h3 className="font-semibold text-sm md:text-base">
              Marketing Funnel — Spend to Lead Output
            </h3>

            {funnelData.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs md:text-sm mb-1">
                  <span className="text-gray-700 dark:text-slate-300">
                    {item.label}
                  </span>
                  <span className="text-gray-500 dark:text-slate-400 font-medium">
                    {item.value}
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-slate-800 rounded">
                  <div
                    className="h-2 bg-indigo-500 rounded"
                    style={{ width: item.width }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
            <h3 className="font-semibold text-sm md:text-base mb-4">
              Executive Summary
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-gray-200 dark:border-slate-800 p-4">
                <p className="text-gray-500 dark:text-slate-400 mb-1">
                  Best Current Metric
                </p>
                <p className="font-semibold">
                  CPL: {totals?.cpl ? `₹${totals.cpl}` : "N/A"}
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 dark:border-slate-800 p-4">
                <p className="text-gray-500 dark:text-slate-400 mb-1">
                  Engagement Efficiency
                </p>
                <p className="font-semibold">
                  CTR: {totals?.ctr ? `${totals.ctr}%` : "N/A"}
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 dark:border-slate-800 p-4">
                <p className="text-gray-500 dark:text-slate-400 mb-1">
                  Active Campaign Mix
                </p>
                <p className="font-semibold">
                  {activeCampaigns} active / {pausedCampaigns} paused
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 dark:border-slate-800 p-4">
                <p className="text-gray-500 dark:text-slate-400 mb-1">
                  Revenue Readiness
                </p>
                <p className="font-semibold">
                  Revenue API abhi available nahi hai
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}