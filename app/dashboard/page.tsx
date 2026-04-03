// "use client";

// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
// } from "recharts";

// const leadData = [
//   { name: "Feb 5", leads: 80 },
//   { name: "Feb 10", leads: 95 },
//   { name: "Feb 15", leads: 110 },
//   { name: "Feb 20", leads: 125 },
//   { name: "Feb 25", leads: 118 },
//   { name: "Mar 1", leads: 138 },
//   { name: "Mar 7", leads: 142 },
// ];

// const campaignData = [
//   { name: "EduTech", leads: 480, spend: 230 },
//   { name: "HealthFirst", leads: 300, spend: 180 },
//   { name: "RE360", leads: 600, spend: 310 },
//   { name: "Fashion", leads: 190, spend: 100 },
//   { name: "Finance", leads: 430, spend: 270 },
// ];

// const clients = [
//   {
//     name: "EduTech Pro",
//     industry: "Education",
//     campaigns: 5,
//     leads: 487,
//     spend: "₹2.4L",
//     roas: "4.2x",
//     health: 80,
//     status: "Active",
//   },
//   {
//     name: "HealthFirst",
//     industry: "Healthcare",
//     campaigns: 4,
//     leads: 312,
//     spend: "₹1.8L",
//     roas: "2.1x",
//     health: 50,
//     status: "Alert",
//   },
//   {
//     name: "RealEstate360",
//     industry: "Real Estate",
//     campaigns: 7,
//     leads: 628,
//     spend: "₹3.2L",
//     roas: "5.8x",
//     health: 85,
//     status: "Active",
//   },
//   {
//     name: "FashionForward",
//     industry: "Retail",
//     campaigns: 3,
//     leads: 194,
//     spend: "₹1.1L",
//     roas: "1.3x",
//     health: 30,
//     status: "At Risk",
//   },
//   {
//     name: "FinanceHub",
//     industry: "BFSI",
//     campaigns: 6,
//     leads: 441,
//     spend: "₹2.8L",
//     roas: "3.9x",
//     health: 75,
//     status: "Active",
//   },
// ];

// export default function Dashboard() {
//   return (
//     <div className="p-4 md:p-6 space-y-4 md:space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen">

//       {/* ── HEADER ─────────────────────────────────────────────────── */}
//       <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <h1 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
//             Growth Command Centre
//           </h1>
//           <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
//             Monday, 7 March 2026 · 8 active clients · 3 alerts
//           </p>
//         </div>

//         <div className="flex gap-2 md:gap-3">
//           <button className="flex-1 sm:flex-none px-3 md:px-4 py-2 text-xs md:text-sm rounded-md border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
//             Import Data
//           </button>
//           {/* <button className="flex-1 sm:flex-none px-3 md:px-4 py-2 text-xs md:text-sm rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
//             + New Campaign
//           </button> */}
//         </div>
//       </div>

//       {/* ── ALERTS ─────────────────────────────────────────────────── */}
//       <div className="space-y-2 md:space-y-3">
//         <div className="p-3 md:p-4 rounded-md border border-yellow-600/30 bg-yellow-600/10 text-yellow-400 text-xs md:text-sm">
//           ⚠️ High CPL Alert — EduTech Pro campaign: CPL ₹480 vs target ₹280
//         </div>
//         <div className="p-3 md:p-4 rounded-md border border-red-600/30 bg-red-600/10 text-red-400 text-xs md:text-sm">
//           🔴 Budget Overspend — HealthFirst Google Ads: ₹1.2L spent
//         </div>
//       </div>

//       {/* ── CHARTS GRID ────────────────────────────────────────────── */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

//         {/* Lead Trend — full width on mobile, 2/3 on desktop */}
//         <div className="md:col-span-2 p-4 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
//           <div className="flex justify-between items-start mb-4">
//             <div>
//               <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
//                 Lead Generation Trend
//               </h3>
//               <p className="text-xs text-gray-500 mt-0.5">
//                 Daily leads across all clients — last 30 days
//               </p>
//             </div>
//             <div className="text-xs md:text-sm text-indigo-500 flex gap-3 shrink-0">
//               <span className="font-medium">30D</span>
//               <span className="text-gray-400 cursor-pointer hover:text-gray-300">7D</span>
//             </div>
//           </div>
//           <ResponsiveContainer width="100%" height={220}>
//             <LineChart data={leadData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
//               <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 11 }} />
//               <YAxis stroke="#64748b" tick={{ fontSize: 11 }} />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: "#0f172a",
//                   border: "1px solid #334155",
//                   borderRadius: "8px",
//                   fontSize: "12px",
//                 }}
//               />
//               <Line type="monotone" dataKey="leads" stroke="#6366f1" strokeWidth={3} dot={false} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Today's Operations */}
//         <div className="p-4 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-4">
//           <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
//             Today's Operations
//           </h3>

//           {/* Mobile: 2-column grid; Desktop: stacked */}
//           <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-5">
//             {[
//               { label: "Leads Today", value: "142", color: "bg-blue-500", pct: 60 },
//               { label: "Deals Closed", value: "18", color: "bg-emerald-500", pct: 70 },
//               { label: "Tasks Pending", value: "31", color: "bg-amber-500", pct: 80 },
//               { label: "Ad Spend Today", value: "₹86K", color: "bg-indigo-500", pct: 90 },
//             ].map((item, i) => (
//               <div key={i} className="space-y-1">
//                 <div className="flex justify-between text-xs md:text-sm">
//                   <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
//                   <span className="font-medium text-gray-900 dark:text-white">{item.value}</span>
//                 </div>
//                 <div className="h-1.5 md:h-2 rounded bg-gray-200 dark:bg-slate-700">
//                   <div className={`${item.color} h-full rounded`} style={{ width: `${item.pct}%` }} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Campaign Performance */}
//         <div className="md:col-span-2 p-4 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
//               Campaign Performance
//             </h3>
//             <span className="text-xs md:text-sm text-indigo-500 cursor-pointer hover:text-indigo-400">
//               View All →
//             </span>
//           </div>
//           <ResponsiveContainer width="100%" height={220}>
//             <BarChart data={campaignData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
//               <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 11 }} />
//               <YAxis stroke="#64748b" tick={{ fontSize: 11 }} />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: "#0f172a",
//                   border: "1px solid #334155",
//                   borderRadius: "8px",
//                   fontSize: "12px",
//                 }}
//               />
//               <Bar dataKey="leads" fill="#6366f1" radius={4} />
//               <Bar dataKey="spend" fill="#10b981" radius={4} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Conversion Funnel */}
//         <div className="p-4 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-4">
//           <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
//             Conversion Funnel
//           </h3>

//           <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-4">
//             {[
//               { label: "Impressions", value: "1.2M", width: "90%" },
//               { label: "Clicks", value: "84K", width: "65%" },
//               { label: "Leads", value: "2.8K", width: "35%" },
//               { label: "Converted", value: "340", width: "15%" },
//             ].map((item, i) => (
//               <div key={i} className="space-y-1">
//                 <div className="flex justify-between text-xs md:text-sm">
//                   <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
//                   <span className="font-medium text-gray-900 dark:text-white">{item.value}</span>
//                 </div>
//                 <div className="h-1.5 md:h-2 rounded bg-gray-200 dark:bg-slate-700">
//                   <div className="h-full rounded bg-indigo-500" style={{ width: item.width }} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* ── CLIENT TABLE ───────────────────────────────────────────── */}
//       <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
//         <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6">
//           <h2 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
//             Client Portfolio Overview
//           </h2>
//           <button className="w-full sm:w-auto px-4 py-2 text-xs md:text-sm rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition-colors text-center">
//             Manage Clients
//           </button>
//         </div>

//         {/* Desktop Table */}
//         <div className="hidden md:block overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead className="text-gray-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
//               <tr className="text-left">
//                 <th className="py-3 pr-4 font-medium">CLIENT</th>
//                 <th className="pr-4 font-medium">INDUSTRY</th>
//                 <th className="pr-4 font-medium">CAMPAIGNS</th>
//                 <th className="pr-4 font-medium">LEADS MTD</th>
//                 <th className="pr-4 font-medium">SPEND MTD</th>
//                 <th className="pr-4 font-medium">ROAS</th>
//                 <th className="pr-4 font-medium">HEALTH</th>
//                 <th className="font-medium">STATUS</th>
//               </tr>
//             </thead>
//             <tbody>
//               {clients.map((client, i) => (
//                 <tr key={i} className="border-b border-slate-200 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
//                   <td className="py-4 pr-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
//                     {client.name}
//                   </td>
//                   <td className="pr-4 text-gray-500 dark:text-slate-400 whitespace-nowrap">{client.industry}</td>
//                   <td className="pr-4 text-gray-700 dark:text-gray-300">{client.campaigns}</td>
//                   <td className="pr-4 text-gray-700 dark:text-gray-300">{client.leads}</td>
//                   <td className="pr-4 text-gray-700 dark:text-gray-300">{client.spend}</td>
//                   <td className="pr-4 font-medium text-emerald-500">{client.roas}</td>
//                   <td className="pr-4 w-[130px]">
//                     <div className="h-2 rounded bg-slate-200 dark:bg-slate-700">
//                       <div
//                         className={`h-2 rounded ${client.health > 70 ? "bg-emerald-500" : client.health > 40 ? "bg-amber-500" : "bg-red-500"}`}
//                         style={{ width: `${client.health}%` }}
//                       />
//                     </div>
//                   </td>
//                   <td>
//                     <StatusBadge status={client.status} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Mobile Cards */}
//         <div className="md:hidden space-y-3">
//           {clients.map((client, i) => (
//             <div key={i} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50">
//               <div className="flex items-start justify-between mb-3">
//                 <div>
//                   <p className="font-semibold text-sm text-gray-900 dark:text-white">{client.name}</p>
//                   <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">{client.industry}</p>
//                 </div>
//                 <StatusBadge status={client.status} />
//               </div>

//               <div className="grid grid-cols-3 gap-3 mb-3">
//                 <div>
//                   <p className="text-xs text-gray-500 dark:text-slate-400">Campaigns</p>
//                   <p className="text-sm font-medium text-gray-900 dark:text-white">{client.campaigns}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 dark:text-slate-400">Leads MTD</p>
//                   <p className="text-sm font-medium text-gray-900 dark:text-white">{client.leads}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 dark:text-slate-400">ROAS</p>
//                   <p className="text-sm font-medium text-emerald-500">{client.roas}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-500 dark:text-slate-400">Spend MTD</p>
//                   <p className="text-sm font-medium text-gray-900 dark:text-white">{client.spend}</p>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex justify-between text-xs mb-1">
//                   <span className="text-gray-500 dark:text-slate-400">Health Score</span>
//                   <span className="text-gray-700 dark:text-gray-300 font-medium">{client.health}%</span>
//                 </div>
//                 <div className="h-1.5 rounded bg-slate-200 dark:bg-slate-700">
//                   <div
//                     className={`h-full rounded ${client.health > 70 ? "bg-emerald-500" : client.health > 40 ? "bg-amber-500" : "bg-red-500"}`}
//                     style={{ width: `${client.health}%` }}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── AI RECOMMENDATIONS ─────────────────────────────────────── */}
//       <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
//         <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between mb-4 md:mb-6">
//           <div>
//             <h2 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
//               AI Growth Recommendations
//             </h2>
//             <p className="text-xs md:text-sm text-gray-500 mt-0.5">
//               Powered by DGCC Intelligence Engine
//             </p>
//           </div>
//           <span className="w-fit text-xs px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-400 font-medium">
//             3 Actions
//           </span>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
//           {[
//             {
//               title: "Pause Underperforming Ad Set",
//               desc: "EduTech retargeting ad set has 40% lower CTR. Reallocating budget could reduce CPL by 28%.",
//               action: "→ Take Action",
//             },
//             {
//               title: "Optimise Ad Copy",
//               desc: 'HealthFirst ad creative shows higher engagement with "Book Free Consultation".',
//               action: "→ Generate Copy",
//             },
//             {
//               title: "Budget Reallocation Opportunity",
//               desc: "RealEstate360 Google Ads showing 5.8x ROAS. Increase budget by 30%.",
//               action: "→ Adjust Budget",
//             },
//           ].map((card, i) => (
//             <div key={i} className="p-4 md:p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex flex-col">
//               <span className="text-xs px-2 py-1 rounded bg-indigo-500 text-white w-fit font-medium">AI</span>
//               <h3 className="mt-3 font-medium text-sm text-gray-900 dark:text-white leading-snug">
//                 {card.title}
//               </h3>
//               <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-2 flex-1 leading-relaxed">
//                 {card.desc}
//               </p>
//               <button className="text-indigo-500 hover:text-indigo-400 text-xs md:text-sm mt-3 text-left transition-colors font-medium">
//                 {card.action}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

// // ── Helper Component ──────────────────────────────────────────────────────────
// function StatusBadge({ status }: { status: string }) {
//   if (status === "Active")
//     return <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400 font-medium whitespace-nowrap">Active</span>;
//   if (status === "Alert")
//     return <span className="px-2.5 py-1 text-xs rounded-full bg-amber-500/20 text-amber-400 font-medium whitespace-nowrap">Alert</span>;
//   return <span className="px-2.5 py-1 text-xs rounded-full bg-red-500/20 text-red-400 font-medium whitespace-nowrap">At Risk</span>;
// }

"use client";

import { useMemo } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useGet } from "@/hooks/useGet";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type ClientApiResponse = {
  success: boolean;
  message: string;
  clients: ClientItem[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

type ClientItem = {
  _id: string;
  status: string;
  currentStep: number;
  profile: {
    companyName: string;
    industry: string;
    revenueModel: string;
    market: string;
    description: string;
    targetAudience: string;
    budget: string;
    _id: string;
  };
  goals: {
    primaryGoals: string[];
    growthTarget: string;
    timeline: string;
    goalNotes: string;
    _id: string;
  };
  channels: {
    channels: string[];
    crm: string;
    analytics: string;
    _id: string;
  };
  kpis: {
    cpl: string;
    cac: string;
    roas: string;
    ltv: string;
    conversionRate: string;
    leadTarget: string;
    reportingFreq: string;
    _id: string;
  };
  createdAt: string;
};

type CampaignApiResponse = {
  success: boolean;
  total: number;
  summary: {
    totalCampaigns: number;
    active: number;
    paused: number;
    assigned: number;
    unassigned: number;
    byStatus: Record<string, number>;
    byClient: Record<
      string,
      {
        clientId: string | null;
        count: number;
        spend: number;
        leads: number;
      }
    >;
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
      campaigns: CampaignItem[];
      total: number;
    };
    googleAds: {
      campaigns: CampaignItem[];
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
  data: CampaignItem[];
};

type CampaignItem = {
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

/* -------------------------------------------------------------------------- */
/*                                  HELPERS                                   */
/* -------------------------------------------------------------------------- */

function formatCurrency(amount?: number | null) {
  const value = Number(amount || 0);
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

// function formatCompactCurrency(amount?: number | null) {
//   const value = Number(amount || 0);

//   if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
//   if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
//   if (value >= 1000) return `₹${(value / 1000).toFixed(0)}K`;
//   return `₹${value.toFixed(0)}`;
// }

function formatNumber(value?: number | null) {
  return new Intl.NumberFormat("en-IN").format(Number(value || 0));
}

function safeNum(value: string | number | null | undefined) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function getHealthScore({
  leads,
  spend,
  campaigns,
  ctr,
}: {
  leads: number;
  spend: number;
  campaigns: number;
  ctr: number;
}) {
  let score = 0;

  if (leads > 0) score += 35;
  if (spend > 0) score += 20;
  if (campaigns > 0) score += 15;
  if (ctr >= 3) score += 15;
  if (ctr >= 6) score += 15;

  return Math.min(score, 100);
}

function getStatusFromHealth(health: number) {
  if (health >= 70) return "Active";
  if (health >= 40) return "Alert";
  return "At Risk";
}

/* -------------------------------------------------------------------------- */
/*                              LOADING COMPONENT                             */
/* -------------------------------------------------------------------------- */

function DashboardSkeleton() {
  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-72 bg-gray-200 dark:bg-slate-800 rounded" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-72 rounded-xl bg-gray-200 dark:bg-slate-800" />
          <div className="h-72 rounded-xl bg-gray-200 dark:bg-slate-800" />
          <div className="h-72 rounded-xl bg-gray-200 dark:bg-slate-800" />
        </div>
        <div className="h-96 rounded-xl bg-gray-200 dark:bg-slate-800" />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                           REUSABLE DONUT CARD                              */
/* -------------------------------------------------------------------------- */

type DonutCardItem = {
  label: string;
  value: number;
  display: string;
  color: string;
};

function AnalyticsDonutCard({
  title,
  items,
  centerLabel = "Total",
}: {
  title: string;
  items: DonutCardItem[];
  centerLabel?: string;
}) {
  const total = items.reduce((sum, item) => sum + safeNum(item.value), 0);

  const chartData =
    total > 0
      ? items
      : items.map((item) => ({
          ...item,
          value: 1,
        }));

  return (
    <div className="p-4 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-4">
      <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="w-full h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={72}
                paddingAngle={2}
                stroke="#0b1220"
                strokeWidth={2}
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>

              <text
                x="50%"
                y="46%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-gray-900 dark:fill-white text-[12px] font-medium"
              >
                {centerLabel}
              </text>

              <text
                x="50%"
                y="58%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-gray-900 dark:fill-white text-[14px] font-semibold"
              >
                {total > 0 ? formatNumber(total) : "0"}
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-gray-600 dark:text-gray-400 truncate">
                  {item.label}
                </span>
              </div>

              <span className="text-sm font-semibold text-gray-900 dark:text-white shrink-0">
                {item.display}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                MAIN COMPONENT                              */
/* -------------------------------------------------------------------------- */

export default function Dashboard() {
  const clientsQuery = useGet<ClientApiResponse>(["clients"], "/clients", {
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const campaignsQuery = useGet<CampaignApiResponse>(
    ["client-campaigns", "last_30d"],
    "/client-campaigns?date_preset=last_30d",
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    }
  );

  const isLoading = clientsQuery.isLoading || campaignsQuery.isLoading;
  const isError = clientsQuery.isError || campaignsQuery.isError;

  const clientsApi = clientsQuery.data;
  const campaignsApi = campaignsQuery.data;

  const clients = clientsApi?.clients ?? [];
  const campaigns = campaignsApi?.data ?? [];
  const totals = campaignsApi?.summary?.totals;

  const todaySummary = useMemo(() => {
    const totalLeads = safeNum(totals?.leads);
    const totalSpend = safeNum(totals?.spend);
    const activeCampaigns = safeNum(campaignsApi?.summary?.active);

    return {
      leadsToday: totalLeads,
      dealsClosed: Math.round(totalLeads * 0.18),
      tasksPending: Math.max(clients.length * 4 - activeCampaigns, 0),
      adSpendToday: totalSpend,
    };
  }, [totals, campaignsApi, clients.length]);

  const leadData = useMemo(() => {
    const campaignsWithDates = campaigns
      .filter((c) => c.createdTime)
      .sort(
        (a, b) =>
          new Date(a.createdTime || "").getTime() -
          new Date(b.createdTime || "").getTime()
      );

    const data = campaignsWithDates.map((campaign) => ({
      name: new Date(campaign.createdTime || "").toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
      }),
      leads: safeNum(campaign.leads),
    }));

    return data.length ? data : [{ name: "No Data", leads: 0 }];
  }, [campaigns]);

  const campaignData = useMemo(() => {
    return campaigns
      .filter((c) => safeNum(c.leads) > 0 || safeNum(c.spend) > 0)
      .slice(0, 8)
      .map((campaign) => ({
        name:
          campaign.name.length > 14
            ? `${campaign.name.slice(0, 14)}...`
            : campaign.name,
        leads: safeNum(campaign.leads),
        spend: Math.round(safeNum(campaign.spend)),
      }));
  }, [campaigns]);

  const conversionFunnel = useMemo(() => {
    const impressions = safeNum(totals?.impressions);
    const clicks = safeNum(totals?.clicks);
    const leads = safeNum(totals?.leads);
    const converted = Math.round(leads * 0.2);

    return [
      {
        label: "Impressions",
        value: impressions,
        display: formatNumber(impressions),
        color: "#4f46e5",
      },
      {
        label: "Clicks",
        value: clicks,
        display: formatNumber(clicks),
        color: "#f59e0b",
      },
      {
        label: "Leads",
        value: leads,
        display: formatNumber(leads),
        color: "#10b981",
      },
      // {
      //   label: "Converted",
      //   value: converted,
      //   display: formatNumber(converted),
      //   color: "#06b6d4",
      // },
    ];
  }, [totals]);

  const todayOperationsData = useMemo(() => {
    return [
      {
        label: "Leads",
        value: todaySummary.leadsToday || 0,
        display: formatNumber(todaySummary.leadsToday),
        color: "#3b82f6",
      },
      {
        label: "Ad Spend",
        value: todaySummary.adSpendToday || 0,
        display: todaySummary.adSpendToday,
        color: "#6366f1",
      },
    ];
  }, [todaySummary]);

  const portfolioClients = useMemo(() => {
    return clients.map((client) => {
      const clientCampaigns = campaigns.filter(
        (c) =>
          c.clientId === client._id ||
          c.clientName === client.profile.companyName
      );

      const totalLeads = clientCampaigns.reduce(
        (sum, c) => sum + safeNum(c.leads),
        0
      );
      const totalSpend = clientCampaigns.reduce(
        (sum, c) => sum + safeNum(c.spend),
        0
      );
      const avgCtr =
        clientCampaigns.length > 0
          ? clientCampaigns.reduce((sum, c) => sum + safeNum(c.ctr), 0) /
            clientCampaigns.length
          : 0;

      const health = getHealthScore({
        leads: totalLeads,
        spend: totalSpend,
        campaigns: clientCampaigns.length,
        ctr: avgCtr,
      });

      const status = getStatusFromHealth(health);

      return {
        id: client._id,
        name: client.profile.companyName,
        industry: client.profile.industry,
        campaigns: clientCampaigns.length,
        leads: totalLeads,
        spend: totalSpend,
        roas: "N/A",
        health,
        status,
      };
    });
  }, [clients, campaigns]);

  const alerts = useMemo(() => {
    const list: { type: "warning" | "danger"; text: string }[] = [];

    campaigns.forEach((campaign) => {
      const cpl = safeNum(campaign.cpl);
      const spend = safeNum(campaign.spend);
      const ctr = safeNum(campaign.ctr);

      if (cpl > 100) {
        list.push({
          type: "warning",
          text: `High CPL Alert — ${campaign.name}: CPL ₹${cpl.toFixed(2)}`,
        });
      }

      if (spend > 3000) {
        list.push({
          type: "danger",
          text: `High Spend Alert — ${campaign.name}: ${formatCurrency(
            spend
          )} spent`,
        });
      }

      if (ctr > 0 && ctr < 2) {
        list.push({
          type: "warning",
          text: `Low CTR Alert — ${campaign.name}: CTR ${ctr.toFixed(2)}%`,
        });
      }
    });

    return list.slice(0, 3);
  }, [campaigns]);

  const aiRecommendations = useMemo(() => {
    const recommendations: {
      title: string;
      desc: string;
      action: string;
    }[] = [];

    const highestSpendCampaign = [...campaigns].sort(
      (a, b) => safeNum(b.spend) - safeNum(a.spend)
    )[0];

    const highestLeadCampaign = [...campaigns].sort(
      (a, b) => safeNum(b.leads) - safeNum(a.leads)
    )[0];

    const weakCampaign = campaigns.find(
      (c) => safeNum(c.spend) > 0 && safeNum(c.ctr) < 2
    );

    if (weakCampaign) {
      recommendations.push({
        title: "Optimise Low CTR Campaign",
        desc: `${weakCampaign.name} ka CTR low hai. Creative aur targeting improve karke performance better ho sakti hai.`,
        action: "→ Review Campaign",
      });
    }

    if (highestLeadCampaign) {
      recommendations.push({
        title: "Scale Best Lead Generator",
        desc: `${highestLeadCampaign.name} sabse zyada leads de raha hai. Is campaign ko controlled budget increase diya ja sakta hai.`,
        action: "→ Increase Budget",
      });
    }

    if (highestSpendCampaign) {
      recommendations.push({
        title: "Audit High Spend Campaign",
        desc: `${highestSpendCampaign.name} highest spend campaign hai. Iska CPL aur CTR closely monitor karo.`,
        action: "→ Audit Performance",
      });
    }

    return recommendations.slice(0, 3);
  }, [campaigns]);

  if (isLoading) return <DashboardSkeleton />;

  if (isError) {
    return (
      <div className="p-4 md:p-6 bg-gray-50 dark:bg-[#020817] min-h-screen">
        <div className="max-w-xl rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Dashboard load nahi hua
          </h2>
          <p className="text-sm text-gray-600 dark:text-slate-300 mt-2">
            Clients ya campaign analytics API me issue aa gaya.
          </p>
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => clientsQuery.refetch()}
              className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm"
            >
              Retry Clients
            </button>
            <button
              onClick={() => campaignsQuery.refetch()}
              className="px-4 py-2 rounded-md bg-slate-700 text-white text-sm"
            >
              Retry Campaigns
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen">
      {/* HEADER */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            Dashboard
          </h1>
        </div>
      </div>

      {/* ALERTS */}
      {alerts.length > 0 && (
        <div className="space-y-2 md:space-y-3">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className={`p-3 md:p-4 rounded-md text-xs md:text-sm ${
                alert.type === "warning"
                  ? "border border-yellow-600/30 bg-yellow-600/10 text-yellow-400"
                  : "border border-red-600/30 bg-red-600/10 text-red-400"
              }`}
            >
              {alert.type === "warning" ? "⚠️" : "🔴"} {alert.text}
            </div>
          ))}
        </div>
      )}

      {/* CHARTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Lead Trend */}
        <div className="md:col-span-2 p-4 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
                Lead Generation Trend
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Campaign-wise leads from live analytics
              </p>
            </div>
            <div className="text-xs md:text-sm text-indigo-500 flex gap-3 shrink-0">
              <span className="font-medium">30D</span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={leadData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 11 }} />
              <YAxis stroke="#64748b" tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="leads"
                stroke="#6366f1"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Today's Operations */}
        <AnalyticsDonutCard
          title="Operations"
          items={todayOperationsData}
          centerLabel="Operations"
        />

        {/* Campaign Performance */}
        <div className="md:col-span-2 p-4 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
              Campaign Performance
            </h3>
            <span className="text-xs md:text-sm text-indigo-500">
              {campaigns.length} campaigns
            </span>
          </div>

          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={campaignData} barCategoryGap="28%">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 11 }} />
              <YAxis stroke="#64748b" tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="leads" fill="#6366f1" radius={4} barSize={18} />
              <Bar dataKey="spend" fill="#10b981" radius={4} barSize={18} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Conversion Funnel */}
        <AnalyticsDonutCard
          title="Conversion Funnel"
          items={conversionFunnel}
          centerLabel="Funnel"
        />
      </div>

      {/* CLIENT TABLE */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6">
          <h2 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
            Client Portfolio Overview
          </h2>
        </div>

        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-gray-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
              <tr className="text-left">
                <th className="py-3 pr-4 font-medium">CLIENT</th>
                <th className="pr-4 font-medium">INDUSTRY</th>
                <th className="pr-4 font-medium">CAMPAIGNS</th>
                <th className="pr-4 font-medium">LEADS MTD</th>
                <th className="pr-4 font-medium">SPEND MTD</th>
                <th className="pr-4 font-medium">ROAS</th>
                <th className="pr-4 font-medium">HEALTH</th>
                <th className="font-medium">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {portfolioClients.map((client, i) => (
                <tr
                  key={client.id || i}
                  className="border-b border-slate-200 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="py-4 pr-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {client.name}
                  </td>
                  <td className="pr-4 text-gray-500 dark:text-slate-400 whitespace-nowrap">
                    {client.industry}
                  </td>
                  <td className="pr-4 text-gray-700 dark:text-gray-300">
                    {client.campaigns}
                  </td>
                  <td className="pr-4 text-gray-700 dark:text-gray-300">
                    {formatNumber(client.leads)}
                  </td>
                  <td className="pr-4 text-gray-700 dark:text-gray-300">
                    {client.spend}
                  </td>
                  <td className="pr-4 font-medium text-emerald-500">
                    {client.roas}
                  </td>
                  <td className="pr-4 w-[130px]">
                    <div className="h-2 rounded bg-slate-200 dark:bg-slate-700">
                      <div
                        className={`h-2 rounded ${
                          client.health > 70
                            ? "bg-emerald-500"
                            : client.health > 40
                            ? "bg-amber-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${client.health}%` }}
                      />
                    </div>
                  </td>
                  <td>
                    <StatusBadge status={client.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-3">
          {portfolioClients.map((client, i) => (
            <div
              key={client.id || i}
              className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">
                    {client.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
                    {client.industry}
                  </p>
                </div>
                <StatusBadge status={client.status} />
              </div>

              <div className="grid grid-cols-3 gap-3 mb-3">
                <div>
                  <p className="text-xs text-gray-500 dark:text-slate-400">
                    Campaigns
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {client.campaigns}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-slate-400">
                    Leads MTD
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {formatNumber(client.leads)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-slate-400">
                    ROAS
                  </p>
                  <p className="text-sm font-medium text-emerald-500">
                    {client.roas}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-slate-400">
                    Spend MTD
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {client.spend}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500 dark:text-slate-400">
                    Health Score
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {client.health}%
                  </span>
                </div>
                <div className="h-1.5 rounded bg-slate-200 dark:bg-slate-700">
                  <div
                    className={`h-full rounded ${
                      client.health > 70
                        ? "bg-emerald-500"
                        : client.health > 40
                        ? "bg-amber-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${client.health}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI RECOMMENDATIONS */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between mb-4 md:mb-6">
          <div>
            <h2 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
              AI Growth Recommendations
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-0.5">
              Powered by DGCC Intelligence Engine
            </p>
          </div>
          <span className="w-fit text-xs px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-400 font-medium">
            {aiRecommendations.length} Actions
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {aiRecommendations.map((card, i) => (
            <div
              key={i}
              className="p-4 md:p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex flex-col"
            >
              <span className="text-xs px-2 py-1 rounded bg-indigo-500 text-white w-fit font-medium">
                AI
              </span>
              <h3 className="mt-3 font-medium text-sm text-gray-900 dark:text-white leading-snug">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-2 flex-1 leading-relaxed">
                {card.desc}
              </p>
              <button className="text-indigo-500 hover:text-indigo-400 text-xs md:text-sm mt-3 text-left transition-colors font-medium">
                {card.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              STATUS BADGE                                  */
/* -------------------------------------------------------------------------- */

function StatusBadge({ status }: { status: string }) {
  if (status === "Active") {
    return (
      <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400 font-medium whitespace-nowrap">
        Active
      </span>
    );
  }

  if (status === "Alert") {
    return (
      <span className="px-2.5 py-1 text-xs rounded-full bg-amber-500/20 text-amber-400 font-medium whitespace-nowrap">
        Alert
      </span>
    );
  }

  return (
    <span className="px-2.5 py-1 text-xs rounded-full bg-red-500/20 text-red-400 font-medium whitespace-nowrap">
      At Risk
    </span>
  );
}