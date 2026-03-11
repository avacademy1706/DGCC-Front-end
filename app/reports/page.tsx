// "use client";

// import {
//   FileText,
//   BarChart3,
//   ClipboardList,
//   TrendingUp,
//   Download,
//   Plus,
// } from "lucide-react";

// export default function ReportsExports() {

// const recentReports = [
// {
// icon: FileText,
// title: "RealEstate360 — Monthly Report Mar 2026",
// meta: "Generated Mar 5 · PDF · 4.2 MB",
// type: "PDF",
// },
// {
// icon: BarChart3,
// title: "EduTech Pro — Weekly Performance Week 9",
// meta: "Generated Mar 4 · Excel · 1.8 MB",
// type: "XLS",
// },
// {
// icon: ClipboardList,
// title: "Agency Overview — Q1 OKR Review",
// meta: "Generated Mar 1 · PDF · 6.1 MB",
// type: "PDF",
// },
// {
// icon: TrendingUp,
// title: "FinanceHub — Campaign Deep Dive",
// meta: "Generated Feb 28 · PDF · 3.4 MB",
// type: "PDF",
// },
// ];

// const schedules = [
// {
// type:"Weekly Performance",
// client:"All Clients",
// freq:"Every Monday",
// recipients:"3 emails",
// status:"Active"
// },
// {
// type:"Monthly OKR Review",
// client:"EduTech Pro",
// freq:"1st of Month",
// recipients:"5 emails",
// status:"Active"
// },
// {
// type:"Campaign Health",
// client:"HealthFirst",
// freq:"Daily",
// recipients:"2 emails",
// status:"Paused"
// }
// ];

// const Progress = ({label,val,target,color,width}) => (
// <div>

// <div className="flex justify-between text-xs mb-1">
// <span>{label}</span>
// <span>{val} / {target}</span>
// </div>

// <div className="h-2 bg-gray-200 dark:bg-slate-800 rounded">
// <div className={`h-2 rounded ${color}`} style={{width}}/>
// </div>

// </div>
// );

// return (
// <div className="p-8 space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">

// {/* HEADER */}

// <div className="flex justify-between items-start">

// <div>
// <h1 className="text-2xl font-bold">Reports & Exports</h1>
// <p className="text-sm text-gray-500">
// Automated reporting for all clients
// </p>
// </div>

// <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">
// <Plus size={16}/>
// Generate Report
// </button>

// </div>

// {/* TOP GRID */}

// <div className="grid grid-cols-3 gap-6">

// {/* RECENT REPORTS */}

// <div className="col-span-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

// <h3 className="font-semibold mb-4">Recent Reports</h3>

// <div className="space-y-3">

// {recentReports.map((r,i)=>{

// const Icon = r.icon

// return(

// <div
// key={i}
// className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-slate-700"
// >

// <div className="flex items-center gap-3">

// <div className="p-3 rounded-lg bg-gray-100 dark:bg-slate-800">
// <Icon size={18}/>
// </div>

// <div>

// <p className="text-sm font-medium">{r.title}</p>
// <p className="text-xs text-gray-500">{r.meta}</p>

// </div>

// </div>

// <button className="flex items-center gap-1 px-3 py-1 text-xs rounded-md border border-gray-300 dark:border-slate-700">
// <Download size={14}/>
// {r.type}
// </button>

// </div>

// )

// })}

// </div>

// </div>

// {/* GENERATE REPORT */}

// <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6 space-y-4">

// <h3 className="font-semibold">Generate New Report</h3>

// <div className="space-y-3 text-sm">

// <div>
// <label className="text-xs text-gray-500">Report Type</label>
// <select className="w-full mt-1 p-2 rounded-md border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900">
// <option>Weekly Performance</option>
// </select>
// </div>

// <div>
// <label className="text-xs text-gray-500">Client</label>
// <select className="w-full mt-1 p-2 rounded-md border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900">
// <option>All Clients</option>
// </select>
// </div>

// <div>
// <label className="text-xs text-gray-500">Date Range</label>
// <input
// type="text"
// value="Mar 1 – Mar 7, 2026"
// readOnly
// className="w-full mt-1 p-2 rounded-md border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900"
// />
// </div>

// <div>

// <label className="text-xs text-gray-500">Format</label>

// <div className="flex gap-4 mt-2 text-xs">

// <label className="flex items-center gap-1">
// <input type="radio" defaultChecked/>
// PDF Report
// </label>

// <label className="flex items-center gap-1">
// <input type="radio"/>
// Excel Export
// </label>

// </div>

// </div>

// <button className="w-full mt-4 py-2 rounded-lg bg-indigo-600 text-white text-sm flex items-center justify-center gap-2">
// <BarChart3 size={16}/>
// Generate Report
// </button>

// </div>

// </div>

// </div>

// {/* BOTTOM GRID */}

// <div className="grid grid-cols-3 gap-6">

// {/* SCHEDULE TABLE */}

// <div className="col-span-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

// <div className="flex justify-between mb-4">

// <h3 className="font-semibold">Report Schedules</h3>

// <button className="text-xs px-3 py-1 rounded-md bg-indigo-600 text-white">
// + Schedule
// </button>

// </div>

// <table className="w-full text-sm">

// <thead className="text-gray-500">

// <tr>
// <th className="text-left">Report Type</th>
// <th>Client</th>
// <th>Frequency</th>
// <th>Recipients</th>
// <th>Status</th>
// </tr>

// </thead>

// <tbody>

// {schedules.map((s,i)=>(
// <tr key={i} className="border-t border-gray-200 dark:border-slate-800">

// <td className="py-3">{s.type}</td>
// <td>{s.client}</td>
// <td>{s.freq}</td>
// <td>{s.recipients}</td>

// <td>

// <span className={`px-2 py-1 rounded-full text-xs ${
// s.status==="Active"
// ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
// : "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300"
// }`}>
// {s.status}
// </span>

// </td>

// </tr>
// ))}

// </tbody>

// </table>

// </div>

// {/* OKR PROGRESS */}

// <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6 space-y-4">

// <h3 className="font-semibold">OKR Progress</h3>

// <p className="text-sm">
// 🎯 Q1 2026 — Increase qualified lead volume by 40%
// </p>

// <Progress
// label="Generate 3,000 leads/month"
// val="2,847"
// target="3,000"
// color="bg-indigo-500"
// width="80%"
// />

// <Progress
// label="Achieve blended ROAS of 4x"
// val="3.6x"
// target="4x"
// color="bg-orange-500"
// width="75%"
// />

// <Progress
// label="Reduce CPL to ₹150"
// val="₹186"
// target="₹150"
// color="bg-red-500"
// width="55%"
// />

// </div>

// </div>

// </div>
// );
// }

"use client";

import {
  FileText, BarChart3, ClipboardList, TrendingUp, Download, Plus,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const recentReports = [
  { icon: FileText,      title: "RealEstate360 — Monthly Report Mar 2026",   meta: "Generated Mar 5 · PDF · 4.2 MB",  type: "PDF" },
  { icon: BarChart3,     title: "EduTech Pro — Weekly Performance Week 9",   meta: "Generated Mar 4 · Excel · 1.8 MB", type: "XLS" },
  { icon: ClipboardList, title: "Agency Overview — Q1 OKR Review",           meta: "Generated Mar 1 · PDF · 6.1 MB",  type: "PDF" },
  { icon: TrendingUp,    title: "FinanceHub — Campaign Deep Dive",            meta: "Generated Feb 28 · PDF · 3.4 MB", type: "PDF" },
];

const schedules = [
  { type: "Weekly Performance", client: "All Clients", freq: "Every Monday", recipients: "3 emails", status: "Active" },
  { type: "Monthly OKR Review", client: "EduTech Pro", freq: "1st of Month", recipients: "5 emails", status: "Active" },
  { type: "Campaign Health",    client: "HealthFirst",  freq: "Daily",        recipients: "2 emails", status: "Paused" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function Progress({ label, val, target, color, width }: {
  label: string; val: string; target: string; color: string; width: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-700 dark:text-slate-300">{label}</span>
        <span className="text-gray-500 dark:text-slate-400 font-medium">{val} / {target}</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-slate-800 rounded">
        <div className={`h-2 rounded ${color}`} style={{ width }} />
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function ReportsExports() {
  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Reports & Exports</h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">
            Automated reporting for all clients
          </p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm transition-colors">
          <Plus size={15} />
          Generate Report
        </button>
      </div>

      {/* ── TOP GRID — 1-col mobile → 3-col desktop ─────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">

        {/* RECENT REPORTS — full width mobile, 2/3 desktop */}
        <div className="lg:col-span-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
          <h3 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Recent Reports</h3>
          <div className="space-y-2 md:space-y-3">
            {recentReports.map((r, i) => {
              const Icon = r.icon;
              return (
                <div
                  key={i}
                  className="flex items-center justify-between gap-3 p-3 md:p-4 rounded-lg border border-gray-200 dark:border-slate-700"
                >
                  <div className="flex items-center gap-2 md:gap-3 min-w-0">
                    <div className="p-2 md:p-3 rounded-lg bg-gray-100 dark:bg-slate-800 shrink-0">
                      <Icon size={15} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm font-medium text-gray-900 dark:text-white truncate">
                        {r.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 truncate">
                        {r.meta}
                      </p>
                    </div>
                  </div>
                  <button className="shrink-0 flex items-center gap-1 px-2.5 py-1 text-xs rounded-md border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                    <Download size={12} />
                    {r.type}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* GENERATE REPORT FORM */}
        <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6 space-y-3 md:space-y-4">
          <h3 className="font-semibold text-sm md:text-base">Generate New Report</h3>
          <div className="space-y-3 text-sm">

            <div>
              <label className="text-xs text-gray-500 dark:text-slate-400">Report Type</label>
              <select className="w-full mt-1 p-2 text-xs md:text-sm rounded-md border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white">
                <option>Weekly Performance</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-500 dark:text-slate-400">Client</label>
              <select className="w-full mt-1 p-2 text-xs md:text-sm rounded-md border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white">
                <option>All Clients</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-500 dark:text-slate-400">Date Range</label>
              <input
                type="text"
                defaultValue="Mar 1 – Mar 7, 2026"
                readOnly
                className="w-full mt-1 p-2 text-xs md:text-sm rounded-md border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500 dark:text-slate-400">Format</label>
              <div className="flex gap-4 mt-2 text-xs md:text-sm">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="radio" defaultChecked name="format" /> PDF Report
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="radio" name="format" /> Excel Export
                </label>
              </div>
            </div>

            <button className="w-full mt-2 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm flex items-center justify-center gap-2 transition-colors">
              <BarChart3 size={15} />
              Generate Report
            </button>

          </div>
        </div>
      </div>

      {/* ── BOTTOM GRID — 1-col mobile → 3-col desktop ──────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">

        {/* SCHEDULE TABLE — 2/3 desktop */}
        <div className="lg:col-span-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h3 className="font-semibold text-sm md:text-base">Report Schedules</h3>
            <button className="text-xs px-3 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
              + Schedule
            </button>
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-xs md:text-sm">
              <thead className="text-gray-500 dark:text-slate-400">
                <tr>
                  <th className="text-left pb-2">Report Type</th>
                  <th className="text-center pb-2">Client</th>
                  <th className="text-center pb-2">Frequency</th>
                  <th className="text-center pb-2">Recipients</th>
                  <th className="text-center pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((s, i) => (
                  <tr key={i} className="border-t border-gray-200 dark:border-slate-800">
                    <td className="py-3 font-medium text-gray-900 dark:text-white">{s.type}</td>
                    <td className="text-center text-gray-600 dark:text-slate-300">{s.client}</td>
                    <td className="text-center text-gray-600 dark:text-slate-300">{s.freq}</td>
                    <td className="text-center text-gray-600 dark:text-slate-300">{s.recipients}</td>
                    <td className="text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        s.status === "Active"
                          ? "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300"
                          : "bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300"
                      }`}>
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden space-y-2.5">
            {schedules.map((s, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-slate-700 p-3 space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold text-xs text-gray-900 dark:text-white">{s.type}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 font-medium ${
                    s.status === "Active"
                      ? "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300"
                      : "bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300"
                  }`}>
                    {s.status}
                  </span>
                </div>
                <div className="flex gap-3 text-xs text-gray-500 dark:text-slate-400">
                  <span>{s.client}</span>
                  <span>·</span>
                  <span>{s.freq}</span>
                  <span>·</span>
                  <span>{s.recipients}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OKR PROGRESS — 1/3 desktop */}
        <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6 space-y-3 md:space-y-4">
          <h3 className="font-semibold text-sm md:text-base">OKR Progress</h3>
          <p className="text-xs md:text-sm text-gray-700 dark:text-slate-300">
            🎯 Q1 2026 — Increase qualified lead volume by 40%
          </p>
          <Progress label="Generate 3,000 leads/month" val="2,847"  target="3,000" color="bg-indigo-500" width="80%" />
          <Progress label="Achieve blended ROAS of 4x" val="3.6x"   target="4x"    color="bg-orange-500" width="75%" />
          <Progress label="Reduce CPL to ₹150"         val="₹186"   target="₹150"  color="bg-red-500"    width="55%" />
        </div>

      </div>

    </div>
  );
}