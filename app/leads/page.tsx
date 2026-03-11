// "use client";

// import {
//   Download,
//   Plus,
//   Check,
//   BarChart3,
//   Hourglass,
//   Star,
//   X,
// } from "lucide-react";

// export default function LeadManagement() {

//   const pipeline = {
//     new: [
//       { name: "Priya Sharma", meta: "Mumbai · Meta Ads", tag: "Real Estate" },
//       { name: "Rohit Mehta", meta: "Delhi · Google", tag: "EduTech" },
//       { name: "Anita Singh", meta: "Bangalore · WhatsApp", tag: "Finance" },
//     ],
//     working: [
//       { name: "Vikram Nair", meta: "Chennai · Email", tag: "Healthcare" },
//       { name: "Sunita Patel", meta: "Ahmedabad · Meta", tag: "Real Estate" },
//     ],
//     qualified: [
//       { name: "Aarav Kumar", meta: "Hyderabad · Google", tag: "Finance" },
//       { name: "Neha Gupta", meta: "Pune · Meta", tag: "EduTech" },
//       { name: "Raj Verma", meta: "Mumbai · WhatsApp", tag: "Real Estate" },
//     ],
//     won: [
//       { name: "Meera Iyer", meta: "Bangalore · Google", tag: "Converted" },
//       { name: "Sanjay Kapoor", meta: "Delhi · Meta", tag: "Converted" },
//     ],
//     lost: [
//       { name: "Kavya Reddy", meta: "Budget not matching", tag: "" },
//     ],
//     nurture: [
//       { name: "Amit Joshi", meta: "Follow-up in 2 weeks", tag: "Nurture" },
//     ],
//   };

//   const StatCard = ({ icon: Icon, value, label }) => (
//     <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">

//       <Icon className="mb-4 text-indigo-500"/>

//       <p className="text-2xl font-bold">{value}</p>
//       <p className="text-sm text-gray-500">{label}</p>

//     </div>
//   );

//   const LeadCard = ({ lead }) => (
//     <div className="bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-slate-800 rounded-lg p-4">

//       <p className="font-medium text-sm">{lead.name}</p>

//       <p className="text-xs text-gray-500">{lead.meta}</p>

//       {lead.tag && (
//         <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">
//           {lead.tag}
//         </span>
//       )}

//     </div>
//   );

//   const Column = ({ title, color, count, leads }) => (
//     <div className="space-y-3">

//       <div
//         className={`flex justify-between items-center text-sm px-3 py-2 rounded-lg ${color}`}
//       >
//         <span>{title}</span>
//         <span className="text-xs bg-white/40 px-2 py-1 rounded-full">{count}</span>
//       </div>

//       {leads.map((lead, i) => (
//         <LeadCard key={i} lead={lead} />
//       ))}

//     </div>
//   );

//   return (
//     <div className="p-8 min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white space-y-6">

//       {/* HEADER */}

//       <div className="flex justify-between items-start">

//         <div>
//           <h1 className="text-2xl font-bold">Lead Management</h1>
//           <p className="text-sm text-gray-500 dark:text-slate-400">
//             CRM Pipeline · 2,847 leads this month
//           </p>
//         </div>

//         <div className="flex gap-3">

//           <button className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-slate-700">
//             <Download size={16}/>
//             Export CSV
//           </button>

//           <button className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white">
//             <Plus size={16}/>
//             Add Lead
//           </button>

//         </div>

//       </div>

//       {/* STATS */}

//       <div className="grid grid-cols-4 gap-6">

//         <StatCard icon={BarChart3} value="142" label="New Leads Today"/>
//         <StatCard icon={Check} value="340" label="Won This Month"/>
//         <StatCard icon={Hourglass} value="486" label="In Pipeline"/>
//         <StatCard icon={Star} value="11.9%" label="Conversion Rate"/>

//       </div>

//       {/* TABS */}

//       <div className="flex gap-8 border-b border-gray-200 dark:border-slate-800 text-sm">

//         <span className="border-b-2 border-indigo-500 text-indigo-500 pb-2">
//           Pipeline View
//         </span>

//         <span className="text-gray-500">Table View</span>
//         <span className="text-gray-500">Activity Timeline</span>

//       </div>

//       {/* PIPELINE */}

//       <div className="grid grid-cols-6 gap-6">

//         <Column
//           title="New"
//           count="48"
//           color="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
//           leads={pipeline.new}
//         />

//         <Column
//           title="Working"
//           count="82"
//           color="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200"
//           leads={pipeline.working}
//         />

//         <Column
//           title="Qualified"
//           count="124"
//           color="bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-200"
//           leads={pipeline.qualified}
//         />

//         <Column
//           title="Won"
//           count="340"
//           color="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
//           leads={pipeline.won}
//         />

//         <Column
//           title="Lost"
//           count="98"
//           color="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
//           leads={pipeline.lost}
//         />

//         <Column
//           title="Nurture"
//           count="64"
//           color="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200"
//           leads={pipeline.nurture}
//         />

//       </div>

//     </div>
//   );
// }
"use client";

import { Download, Plus, Check, BarChart3, Hourglass, Star } from "lucide-react";
import { useState } from "react";

const pipeline = {
  new: [
    { name: "Priya Sharma", meta: "Mumbai · Meta Ads", tag: "Real Estate" },
    { name: "Rohit Mehta",  meta: "Delhi · Google",    tag: "EduTech" },
    { name: "Anita Singh",  meta: "Bangalore · WhatsApp", tag: "Finance" },
  ],
  working: [
    { name: "Vikram Nair",  meta: "Chennai · Email",   tag: "Healthcare" },
    { name: "Sunita Patel", meta: "Ahmedabad · Meta",  tag: "Real Estate" },
  ],
  qualified: [
    { name: "Aarav Kumar",  meta: "Hyderabad · Google", tag: "Finance" },
    { name: "Neha Gupta",   meta: "Pune · Meta",        tag: "EduTech" },
    { name: "Raj Verma",    meta: "Mumbai · WhatsApp",  tag: "Real Estate" },
  ],
  won: [
    { name: "Meera Iyer",   meta: "Bangalore · Google", tag: "Converted" },
    { name: "Sanjay Kapoor",meta: "Delhi · Meta",       tag: "Converted" },
  ],
  lost: [
    { name: "Kavya Reddy",  meta: "Budget not matching", tag: "" },
  ],
  nurture: [
    { name: "Amit Joshi",   meta: "Follow-up in 2 weeks", tag: "Nurture" },
  ],
};

const columns = [
  { key: "new",       title: "New",       count: "48",  color: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200" },
  { key: "working",   title: "Working",   count: "82",  color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-200" },
  { key: "qualified", title: "Qualified", count: "124", color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-200" },
  { key: "won",       title: "Won",       count: "340", color: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-200" },
  { key: "lost",      title: "Lost",      count: "98",  color: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-200" },
  { key: "nurture",   title: "Nurture",   count: "64",  color: "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-200" },
];

// ── Sub-components ────────────────────────────────────────────────────────────
function StatCard({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <div className="p-2.5 sm:p-4 md:p-5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
      <Icon className="mb-1.5 sm:mb-2 text-indigo-500" size={15} />
      <p className="text-base sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight">{value}</p>
      <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 leading-tight">{label}</p>
    </div>
  );
}

function LeadCard({ lead }: { lead: any }) {
  return (
    <div className="bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-slate-800 rounded-lg p-2.5 shrink-0">
      <p className="font-semibold text-xs text-gray-900 dark:text-white leading-tight">{lead.name}</p>
      <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 leading-tight">{lead.meta}</p>
      {lead.tag && (
        <span className="inline-block mt-1.5 text-xs px-1.5 py-0.5 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
          {lead.tag}
        </span>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function LeadManagement() {
  const [activeTab, setActiveTab] = useState("pipeline");

  return (
    // Full viewport height, flex column — fills whatever the parent gives
    <div className="flex flex-col h-full min-h-0 bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white overflow-hidden">

      {/* ── TOP SECTION (shrinks but never scrolls away) ─────────── */}
      <div className="shrink-0 px-4 pt-4 sm:px-6 sm:pt-5 md:px-8 md:pt-7 space-y-3 md:space-y-4">

        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Lead Management</h1>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
              CRM Pipeline · 2,847 leads this month
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
              <Download size={13} /> Export
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
              <Plus size={13} /> Add Lead
            </button>
          </div>
        </div>

        {/* Stats — always 4-col, just scale text */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          <StatCard icon={BarChart3} value="142"   label="New Leads Today" />
          <StatCard icon={Check}     value="340"   label="Won This Month" />
          <StatCard icon={Hourglass} value="486"   label="In Pipeline" />
          <StatCard icon={Star}      value="11.9%" label="Conversion Rate" />
        </div>

        {/* Tabs */}
        <div className="overflow-x-auto">
          <div className="flex gap-4 sm:gap-6 md:gap-8 border-b border-gray-200 dark:border-slate-800 text-xs sm:text-sm min-w-max">
            {[
              { key: "pipeline", label: "Pipeline View" },
              { key: "table",    label: "Table View" },
              { key: "activity", label: "Activity Timeline" },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-2 whitespace-nowrap transition-colors font-medium ${
                  activeTab === tab.key
                    ? "border-b-2 border-indigo-500 text-indigo-500"
                    : "text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── PIPELINE — grows to fill remaining height ────────────── */}
      {activeTab === "pipeline" && (
        <div className="flex-1 min-h-0 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 overflow-hidden">
          {/* Outer: horizontal scroll on small screens */}
          <div className="h-full overflow-x-auto">
            <div
              className="h-full flex gap-2.5 sm:gap-3 md:gap-4"
              style={{ minWidth: `${columns.length * 158}px` }}
            >
              {columns.map(col => (
                <div
                  key={col.key}
                  className="flex-1 min-w-[150px] sm:min-w-[160px] flex flex-col gap-2 overflow-y-auto"
                >
                  {/* Sticky column header */}
                  <div className={`sticky top-0 z-10 flex justify-between items-center text-xs px-2.5 py-1.5 rounded-lg ${col.color}`}>
                    <span className="font-semibold">{col.title}</span>
                    <span className="bg-white/40 px-1.5 py-0.5 rounded-full text-xs font-medium">{col.count}</span>
                  </div>
                  {/* Cards */}
                  {(pipeline as any)[col.key].map((lead: any, i: number) => (
                    <LeadCard key={i} lead={lead} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── TABLE VIEW ───────────────────────────────────────────── */}
      {activeTab === "table" && (
        <div className="flex-1 min-h-0 px-4 py-3 sm:px-6 md:px-8">
          <div className="h-full rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] flex items-center justify-center text-sm text-gray-400 dark:text-slate-500">
            Table View — Coming Soon
          </div>
        </div>
      )}

      {/* ── ACTIVITY TIMELINE ────────────────────────────────────── */}
      {activeTab === "activity" && (
        <div className="flex-1 min-h-0 px-4 py-3 sm:px-6 md:px-8">
          <div className="h-full rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] flex items-center justify-center text-sm text-gray-400 dark:text-slate-500">
            Activity Timeline — Coming Soon
          </div>
        </div>
      )}

    </div>
  );
}