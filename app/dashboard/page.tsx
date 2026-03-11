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
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen">

      {/* HEADER */}

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Growth Command Centre
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Monday, 7 March 2026 · 8 active clients · 3 alerts
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm rounded-md border dark:border-slate-700">
            Import Data
          </button>

          <button className="px-4 py-2 text-sm rounded-md bg-indigo-600 text-white">
            + New Campaign
          </button>
        </div>
      </div>

      {/* ALERTS */}

      <div className="space-y-3">

        <div className="p-4 rounded-md border border-yellow-600/30 bg-yellow-600/10 text-yellow-400">
          High CPL Alert — EduTech Pro campaign: CPL ₹480 vs target ₹280
        </div>

        <div className="p-4 rounded-md border border-red-600/30 bg-red-600/10 text-red-400">
          Budget Overspend — HealthFirst Google Ads: ₹1.2L spent
        </div>

      </div>

 <div className="grid grid-cols-3 gap-6">

      {/* LEAD TREND */}

      <div className="col-span-2 p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">

        <div className="flex justify-between mb-4">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Lead Generation Trend
            </h3>
            <p className="text-xs text-gray-500">
              Daily leads across all clients — last 30 days
            </p>
          </div>

          <div className="text-sm text-indigo-500 flex gap-3">
            <span>30D</span>
            <span className="text-gray-400">7D</span>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={leadData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="leads"
              stroke="#6366f1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* TODAY OPERATIONS */}

      <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-5">

        <h3 className="font-semibold text-gray-900 dark:text-white">
          Today's Operations
        </h3>

        {[
          { label: "Leads Today", value: "142", color: "bg-blue-500" },
          { label: "Deals Closed", value: "18", color: "bg-emerald-500" },
          { label: "Tasks Pending", value: "31", color: "bg-amber-500" },
          { label: "Ad Spend Today", value: "₹86K", color: "bg-indigo-500" },
        ].map((item, i) => (
          <div key={i} className="space-y-1">

            <div className="flex justify-between text-sm">
              <span>{item.label}</span>
              <span className="font-medium">{item.value}</span>
            </div>

            <div className="h-2 rounded bg-gray-200 dark:bg-slate-700">
              <div
                className={`${item.color} h-2 rounded`}
                style={{ width: `${60 + i * 10}%` }}
              />
            </div>

          </div>
        ))}

      </div>

      {/* CAMPAIGN PERFORMANCE */}

      <div className="col-span-2 p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">

        <div className="flex justify-between mb-4">

          <h3 className="font-semibold text-gray-900 dark:text-white">
            Campaign Performance
          </h3>

          <span className="text-sm text-indigo-500">
            View All →
          </span>

        </div>

        <ResponsiveContainer width="100%" height={250}>

          <BarChart data={campaignData}>

            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip />

            <Bar dataKey="leads" fill="#6366f1" radius={4} />
            <Bar dataKey="spend" fill="#10b981" radius={4} />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* CONVERSION FUNNEL */}

      <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-4">

        <h3 className="font-semibold text-gray-900 dark:text-white">
          Conversion Funnel
        </h3>

        {[
          { label: "Impressions", value: "1.2M", width: "90%" },
          { label: "Clicks", value: "84K", width: "65%" },
          { label: "Leads", value: "2.8K", width: "35%" },
          { label: "Converted", value: "340", width: "15%" },
        ].map((item, i) => (

          <div key={i} className="space-y-1">

            <div className="flex justify-between text-sm">
              <span>{item.label}</span>
              <span className="font-medium">{item.value}</span>
            </div>

            <div className="h-2 rounded bg-gray-200 dark:bg-slate-700">

              <div
                className="h-2 rounded bg-indigo-500"
                style={{ width: item.width }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
       <div className="space-y-6">

      {/* CLIENT TABLE */}

      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Client Portfolio Overview
          </h2>

          <button className="px-4 py-2 text-sm rounded-md bg-indigo-600 text-white">
            Manage Clients
          </button>
        </div>

        <table className="w-full text-sm">

          <thead className="text-gray-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
            <tr className="text-left">
              <th className="py-3">CLIENT</th>
              <th>INDUSTRY</th>
              <th>CAMPAIGNS</th>
              <th>LEADS MTD</th>
              <th>SPEND MTD</th>
              <th>ROAS</th>
              <th>HEALTH</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>

            {clients.map((client, i) => (

              <tr
                key={i}
                className="border-b border-slate-200 dark:border-slate-800"
              >
                <td className="py-4 font-medium text-gray-900 dark:text-white">
                  {client.name}
                </td>

                <td>{client.industry}</td>

                <td>{client.campaigns}</td>

                <td>{client.leads}</td>

                <td>{client.spend}</td>

                <td className="font-medium text-emerald-500">
                  {client.roas}
                </td>

                {/* HEALTH BAR */}

                <td className="w-[150px]">
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

                {/* STATUS */}

                <td>

                  {client.status === "Active" && (
                    <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400">
                      Active
                    </span>
                  )}

                  {client.status === "Alert" && (
                    <span className="px-3 py-1 text-xs rounded-full bg-amber-500/20 text-amber-400">
                      Alert
                    </span>
                  )}

                  {client.status === "At Risk" && (
                    <span className="px-3 py-1 text-xs rounded-full bg-red-500/20 text-red-400">
                      At Risk
                    </span>
                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* AI RECOMMENDATIONS */}

      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

        <div className="flex justify-between items-center mb-6">

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              AI Growth Recommendations
            </h2>

            <p className="text-sm text-gray-500">
              Powered by DGCC Intelligence Engine
            </p>
          </div>

          <span className="text-xs px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-400">
            3 Actions
          </span>

        </div>

        <div className="grid md:grid-cols-3 gap-4">

          {/* CARD 1 */}

          <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">

            <span className="text-xs px-2 py-1 rounded bg-indigo-500 text-white">
              AI
            </span>

            <h3 className="mt-3 font-medium text-gray-900 dark:text-white">
              Pause Underperforming Ad Set
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              EduTech retargeting ad set has 40% lower CTR. Reallocating budget
              could reduce CPL by 28%.
            </p>

            <button className="text-indigo-500 text-sm mt-3">
              → Take Action
            </button>

          </div>

          {/* CARD 2 */}

          <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">

            <span className="text-xs px-2 py-1 rounded bg-indigo-500 text-white">
              AI
            </span>

            <h3 className="mt-3 font-medium text-gray-900 dark:text-white">
              Optimise Ad Copy
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              HealthFirst ad creative shows higher engagement with "Book Free
              Consultation".
            </p>

            <button className="text-indigo-500 text-sm mt-3">
              → Generate Copy
            </button>

          </div>

          {/* CARD 3 */}

          <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">

            <span className="text-xs px-2 py-1 rounded bg-indigo-500 text-white">
              AI
            </span>

            <h3 className="mt-3 font-medium text-gray-900 dark:text-white">
              Budget Reallocation Opportunity
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              RealEstate360 Google Ads showing 5.8x ROAS. Increase budget by
              30%.
            </p>

            <button className="text-indigo-500 text-sm mt-3">
              → Adjust Budget
            </button>

          </div>

        </div>

      </div>

    </div>

    </div>
  );
}