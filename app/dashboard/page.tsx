"use client";

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
} from "recharts";

const leadData = [
  { name: "Feb 5", leads: 80 },
  { name: "Feb 10", leads: 95 },
  { name: "Feb 15", leads: 110 },
  { name: "Feb 20", leads: 125 },
  { name: "Feb 25", leads: 118 },
  { name: "Mar 1", leads: 138 },
  { name: "Mar 7", leads: 142 },
];

const campaignData = [
  { name: "EduTech", leads: 480, spend: 230 },
  { name: "HealthFirst", leads: 300, spend: 180 },
  { name: "RE360", leads: 600, spend: 310 },
  { name: "Fashion", leads: 190, spend: 100 },
  { name: "Finance", leads: 430, spend: 270 },
];

const clients = [
  {
    name: "EduTech Pro",
    industry: "Education",
    campaigns: 5,
    leads: 487,
    spend: "₹2.4L",
    roas: "4.2x",
    health: 80,
    status: "Active",
  },
  {
    name: "HealthFirst",
    industry: "Healthcare",
    campaigns: 4,
    leads: 312,
    spend: "₹1.8L",
    roas: "2.1x",
    health: 50,
    status: "Alert",
  },
  {
    name: "RealEstate360",
    industry: "Real Estate",
    campaigns: 7,
    leads: 628,
    spend: "₹3.2L",
    roas: "5.8x",
    health: 85,
    status: "Active",
  },
  {
    name: "FashionForward",
    industry: "Retail",
    campaigns: 3,
    leads: 194,
    spend: "₹1.1L",
    roas: "1.3x",
    health: 30,
    status: "At Risk",
  },
  {
    name: "FinanceHub",
    industry: "BFSI",
    campaigns: 6,
    leads: 441,
    spend: "₹2.8L",
    roas: "3.9x",
    health: 75,
    status: "Active",
  },
];

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen">

      {/* ── HEADER ─────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            Growth Command Centre
          </h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Monday, 7 March 2026 · 8 active clients · 3 alerts
          </p>
        </div>

        <div className="flex gap-2 md:gap-3">
          <button className="flex-1 sm:flex-none px-3 md:px-4 py-2 text-xs md:text-sm rounded-md border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
            Import Data
          </button>
          {/* <button className="flex-1 sm:flex-none px-3 md:px-4 py-2 text-xs md:text-sm rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
            + New Campaign
          </button> */}
        </div>
      </div>

      {/* ── ALERTS ─────────────────────────────────────────────────── */}
      <div className="space-y-2 md:space-y-3">
        <div className="p-3 md:p-4 rounded-md border border-yellow-600/30 bg-yellow-600/10 text-yellow-400 text-xs md:text-sm">
          ⚠️ High CPL Alert — EduTech Pro campaign: CPL ₹480 vs target ₹280
        </div>
        <div className="p-3 md:p-4 rounded-md border border-red-600/30 bg-red-600/10 text-red-400 text-xs md:text-sm">
          🔴 Budget Overspend — HealthFirst Google Ads: ₹1.2L spent
        </div>
      </div>

      {/* ── CHARTS GRID ────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

        {/* Lead Trend — full width on mobile, 2/3 on desktop */}
        <div className="md:col-span-2 p-4 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
                Lead Generation Trend
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Daily leads across all clients — last 30 days
              </p>
            </div>
            <div className="text-xs md:text-sm text-indigo-500 flex gap-3 shrink-0">
              <span className="font-medium">30D</span>
              <span className="text-gray-400 cursor-pointer hover:text-gray-300">7D</span>
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
              <Line type="monotone" dataKey="leads" stroke="#6366f1" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Today's Operations */}
        <div className="p-4 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-4">
          <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
            Today's Operations
          </h3>

          {/* Mobile: 2-column grid; Desktop: stacked */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-5">
            {[
              { label: "Leads Today", value: "142", color: "bg-blue-500", pct: 60 },
              { label: "Deals Closed", value: "18", color: "bg-emerald-500", pct: 70 },
              { label: "Tasks Pending", value: "31", color: "bg-amber-500", pct: 80 },
              { label: "Ad Spend Today", value: "₹86K", color: "bg-indigo-500", pct: 90 },
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{item.value}</span>
                </div>
                <div className="h-1.5 md:h-2 rounded bg-gray-200 dark:bg-slate-700">
                  <div className={`${item.color} h-full rounded`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Performance */}
        <div className="md:col-span-2 p-4 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
              Campaign Performance
            </h3>
            <span className="text-xs md:text-sm text-indigo-500 cursor-pointer hover:text-indigo-400">
              View All →
            </span>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={campaignData}>
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
              <Bar dataKey="leads" fill="#6366f1" radius={4} />
              <Bar dataKey="spend" fill="#10b981" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Conversion Funnel */}
        <div className="p-4 md:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-4">
          <h3 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">
            Conversion Funnel
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-4">
            {[
              { label: "Impressions", value: "1.2M", width: "90%" },
              { label: "Clicks", value: "84K", width: "65%" },
              { label: "Leads", value: "2.8K", width: "35%" },
              { label: "Converted", value: "340", width: "15%" },
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{item.value}</span>
                </div>
                <div className="h-1.5 md:h-2 rounded bg-gray-200 dark:bg-slate-700">
                  <div className="h-full rounded bg-indigo-500" style={{ width: item.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── CLIENT TABLE ───────────────────────────────────────────── */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6">
          <h2 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
            Client Portfolio Overview
          </h2>
          <button className="w-full sm:w-auto px-4 py-2 text-xs md:text-sm rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition-colors text-center">
            Manage Clients
          </button>
        </div>

        {/* Desktop Table */}
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
              {clients.map((client, i) => (
                <tr key={i} className="border-b border-slate-200 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 pr-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {client.name}
                  </td>
                  <td className="pr-4 text-gray-500 dark:text-slate-400 whitespace-nowrap">{client.industry}</td>
                  <td className="pr-4 text-gray-700 dark:text-gray-300">{client.campaigns}</td>
                  <td className="pr-4 text-gray-700 dark:text-gray-300">{client.leads}</td>
                  <td className="pr-4 text-gray-700 dark:text-gray-300">{client.spend}</td>
                  <td className="pr-4 font-medium text-emerald-500">{client.roas}</td>
                  <td className="pr-4 w-[130px]">
                    <div className="h-2 rounded bg-slate-200 dark:bg-slate-700">
                      <div
                        className={`h-2 rounded ${client.health > 70 ? "bg-emerald-500" : client.health > 40 ? "bg-amber-500" : "bg-red-500"}`}
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

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {clients.map((client, i) => (
            <div key={i} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">{client.name}</p>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">{client.industry}</p>
                </div>
                <StatusBadge status={client.status} />
              </div>

              <div className="grid grid-cols-3 gap-3 mb-3">
                <div>
                  <p className="text-xs text-gray-500 dark:text-slate-400">Campaigns</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{client.campaigns}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-slate-400">Leads MTD</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{client.leads}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-slate-400">ROAS</p>
                  <p className="text-sm font-medium text-emerald-500">{client.roas}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-slate-400">Spend MTD</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{client.spend}</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500 dark:text-slate-400">Health Score</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{client.health}%</span>
                </div>
                <div className="h-1.5 rounded bg-slate-200 dark:bg-slate-700">
                  <div
                    className={`h-full rounded ${client.health > 70 ? "bg-emerald-500" : client.health > 40 ? "bg-amber-500" : "bg-red-500"}`}
                    style={{ width: `${client.health}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── AI RECOMMENDATIONS ─────────────────────────────────────── */}
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
            3 Actions
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {[
            {
              title: "Pause Underperforming Ad Set",
              desc: "EduTech retargeting ad set has 40% lower CTR. Reallocating budget could reduce CPL by 28%.",
              action: "→ Take Action",
            },
            {
              title: "Optimise Ad Copy",
              desc: 'HealthFirst ad creative shows higher engagement with "Book Free Consultation".',
              action: "→ Generate Copy",
            },
            {
              title: "Budget Reallocation Opportunity",
              desc: "RealEstate360 Google Ads showing 5.8x ROAS. Increase budget by 30%.",
              action: "→ Adjust Budget",
            },
          ].map((card, i) => (
            <div key={i} className="p-4 md:p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex flex-col">
              <span className="text-xs px-2 py-1 rounded bg-indigo-500 text-white w-fit font-medium">AI</span>
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

// ── Helper Component ──────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: string }) {
  if (status === "Active")
    return <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400 font-medium whitespace-nowrap">Active</span>;
  if (status === "Alert")
    return <span className="px-2.5 py-1 text-xs rounded-full bg-amber-500/20 text-amber-400 font-medium whitespace-nowrap">Alert</span>;
  return <span className="px-2.5 py-1 text-xs rounded-full bg-red-500/20 text-red-400 font-medium whitespace-nowrap">At Risk</span>;
}