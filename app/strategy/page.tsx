// "use client";

// import { useState } from "react";

// export default function StrategyGovernance() {
//   const [tab, setTab] = useState("okr");

//   return (
//     <div className="p-8 min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white">

//       {/* HEADER */}

//       <div className="flex justify-between items-start mb-6">

//         <div>
//           <h1 className="text-2xl font-bold">Strategy & Governance</h1>

//           <p className="text-sm text-gray-500 dark:text-slate-400">
//             OKRs, roadmaps, audits and budget governance
//           </p>
//         </div>

//         <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">
//           + New OKR
//         </button>

//       </div>

//       {/* TABS */}

//       <div className="flex gap-8 border-b border-gray-200 dark:border-slate-800 mb-6 text-sm">

//         <button
//           onClick={() => setTab("okr")}
//           className={`pb-3 ${
//             tab === "okr"
//               ? "text-indigo-500 border-b-2 border-indigo-500"
//               : "text-gray-500 dark:text-slate-400"
//           }`}
//         >
//           OKR Planning
//         </button>

//         <button
//           onClick={() => setTab("roadmap")}
//           className={`pb-3 ${
//             tab === "roadmap"
//               ? "text-indigo-500 border-b-2 border-indigo-500"
//               : "text-gray-500 dark:text-slate-400"
//           }`}
//         >
//           Growth Roadmap
//         </button>

//         <button
//           onClick={() => setTab("budget")}
//           className={`pb-3 ${
//             tab === "budget"
//               ? "text-indigo-500 border-b-2 border-indigo-500"
//               : "text-gray-500 dark:text-slate-400"
//           }`}
//         >
//           Budget Governance
//         </button>

//         <button
//           onClick={() => setTab("audit")}
//           className={`pb-3 ${
//             tab === "audit"
//               ? "text-indigo-500 border-b-2 border-indigo-500"
//               : "text-gray-500 dark:text-slate-400"
//           }`}
//         >
//           Digital Audit
//         </button>

//       </div>

//       {/* CONTENT */}

//       {/* OKR TAB */}

//       {tab === "okr" && (
//         <div className="space-y-6">

//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

//             <h3 className="font-medium mb-4">
//               🎯 Q1 2026 — Scale lead generation to 3,000/month across all clients
//             </h3>

//             {/* KR1 */}

//             <div className="mb-4">

//               <div className="flex justify-between text-sm mb-2">
//                 <span>KR1: Generate 3,000 qualified leads in March</span>
//                 <span className="text-gray-500">2,847 / 3,000 — 95%</span>
//               </div>

//               <div className="h-[6px] bg-gray-200 dark:bg-slate-800 rounded-full">
//                 <div className="h-full w-[95%] bg-indigo-500 rounded-full"></div>
//               </div>

//             </div>

//             {/* KR2 */}

//             <div className="mb-4">

//               <div className="flex justify-between text-sm mb-2">
//                 <span>KR2: Achieve blended ROAS of 4.0x</span>
//                 <span className="text-gray-500">3.6x / 4.0x — 76%</span>
//               </div>

//               <div className="h-[6px] bg-gray-200 dark:bg-slate-800 rounded-full">
//                 <div className="h-full w-[76%] bg-amber-400 rounded-full"></div>
//               </div>

//             </div>

//             {/* KR3 */}

//             <div>

//               <div className="flex justify-between text-sm mb-2">
//                 <span>KR3: Onboard 2 new clients</span>
//                 <span className="text-gray-500">1 / 2 — 50%</span>
//               </div>

//               <div className="h-[6px] bg-gray-200 dark:bg-slate-800 rounded-full">
//                 <div className="h-full w-[50%] bg-amber-400 rounded-full"></div>
//               </div>

//             </div>

//           </div>

//           {/* CARD 2 */}

//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

//             <h3 className="font-medium mb-4">
//               📈 Q2 2026 — Improve campaign efficiency and reduce CPL to ₹150
//             </h3>

//             <div className="flex justify-between text-sm mb-2">
//               <span>KR1: Reduce blended CPL from ₹186 to ₹150</span>
//               <span className="text-gray-500">Planned</span>
//             </div>

//             <div className="h-[6px] bg-gray-200 dark:bg-slate-800 rounded-full mb-4">
//               <div className="h-full w-[5%] bg-indigo-500 rounded-full"></div>
//             </div>

//             <div className="flex justify-between text-sm mb-2">
//               <span>KR2: Launch AI-powered creative testing for 5 clients</span>
//               <span className="text-gray-500">Planned</span>
//             </div>

//             <div className="h-[6px] bg-gray-200 dark:bg-slate-800 rounded-full">
//               <div className="h-full w-[5%] bg-indigo-500 rounded-full"></div>
//             </div>

//           </div>

//         </div>
//       )}

//       {/* ROADMAP TAB */}

//       {tab === "roadmap" && (
//         <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

//           <h3 className="font-semibold mb-6">12-Month Growth Roadmap</h3>

//           <div className="relative pl-6 space-y-8">

//             <div className="absolute left-1 top-1 bottom-1 w-[2px] bg-gray-200 dark:bg-slate-700"></div>

//             {[
//               {
//                 quarter: "Jan–Mar 2026 (Q1)",
//                 title: "Foundation & Growth Acceleration",
//                 color: "bg-green-400",
//               },
//               {
//                 quarter: "Apr–Jun 2026 (Q2)",
//                 title: "Optimization & Automation",
//                 color: "bg-blue-400",
//               },
//               {
//                 quarter: "Jul–Sep 2026 (Q3)",
//                 title: "Scale & Diversification",
//                 color: "bg-amber-400",
//               },
//               {
//                 quarter: "Oct–Dec 2026 (Q4)",
//                 title: "Revenue Growth & Retention",
//                 color: "bg-purple-400",
//               },
//             ].map((item, i) => (
//               <div key={i} className="relative">

//                 <span
//                   className={`absolute -left-[7px] top-1 w-3 h-3 rounded-full ${item.color}`}
//                 />

//                 <p className="text-xs text-gray-500">{item.quarter}</p>
//                 <p className="font-medium">{item.title}</p>

//               </div>
//             ))}

//           </div>

//         </div>
//       )}

//       {/* BUDGET TAB */}

//       {tab === "budget" && (
//         <div className="space-y-6">

//           <div className="grid grid-cols-4 gap-6">

//             {[
//               ["₹24L", "Total Monthly Budget"],
//               ["₹18.4L", "Spent MTD"],
//               ["76.7%", "Budget Utilization"],
//               ["₹1.2L", "Overspend Alerts"],
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]"
//               >
//                 <p className="text-2xl font-bold">{item[0]}</p>
//                 <p className="text-sm text-gray-500">{item[1]}</p>
//               </div>
//             ))}

//           </div>

//           {/* TABLE */}

//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

//             <h3 className="font-semibold mb-4">Channel Budget Allocation</h3>

//             <table className="w-full text-sm">

//               <thead className="text-gray-500">
//                 <tr>
//                   <th className="text-left py-2">Channel</th>
//                   <th>Budget</th>
//                   <th>Spent</th>
//                   <th>Remaining</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-gray-200 dark:divide-slate-800">

//                 <tr>
//                   <td className="py-3">Meta Ads</td>
//                   <td>₹10L</td>
//                   <td>₹7.8L</td>
//                   <td>₹2.2L</td>
//                   <td className="text-green-500">78%</td>
//                 </tr>

//                 <tr>
//                   <td className="py-3">Google Ads</td>
//                   <td>₹9L</td>
//                   <td>₹8.2L</td>
//                   <td>₹0.8L</td>
//                   <td className="text-amber-500">91%</td>
//                 </tr>

//               </tbody>

//             </table>

//           </div>

//         </div>
//       )}

//       {/* AUDIT TAB */}

//       {tab === "audit" && (
//         <div className="grid grid-cols-3 gap-6">

//           {[
//             {
//               title: "Website Audit",
//               items: [
//                 ["Page Speed", "62/100"],
//                 ["Core Web Vitals", "Fail"],
//                 ["SSL Certificate", "Valid"],
//                 ["Mobile Responsive", "Pass"],
//               ],
//             },
//             {
//               title: "SEO Audit",
//               items: [
//                 ["Domain Authority", "42/100"],
//                 ["Indexed Pages", "1,284"],
//                 ["Backlinks", "340"],
//                 ["Organic Traffic", "+18%"],
//               ],
//             },
//             {
//               title: "Ads Audit",
//               items: [
//                 ["Account Structure", "Good"],
//                 ["Quality Score Avg", "6.4/10"],
//                 ["Wasted Spend", "₹28K"],
//                 ["Conversion Tracking", "Active"],
//               ],
//             },
//           ].map((card, i) => (
//             <div
//               key={i}
//               className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]"
//             >

//               <h3 className="font-semibold mb-4">{card.title}</h3>

//               <div className="space-y-3 text-sm">

//                 {card.items.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="flex justify-between"
//                   >
//                     <span>{item[0]}</span>
//                     <span className="text-gray-500">{item[1]}</span>
//                   </div>
//                 ))}

//               </div>

//             </div>
//           ))}

//         </div>
//       )}

//     </div>
//   );
// }

"use client";

import { useState } from "react";

const tabs = [
  { key: "okr",     label: "OKR Planning" },
  { key: "roadmap", label: "Growth Roadmap" },
  { key: "budget",  label: "Budget Governance" },
  { key: "audit",   label: "Digital Audit" },
];

export default function StrategyGovernance() {
  const [tab, setTab] = useState("okr");

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white">

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-5 md:mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Strategy & Governance</h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">
            OKRs, roadmaps, audits and budget governance
          </p>
        </div>
        <button className="w-full sm:w-auto px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition-colors">
          + New OKR
        </button>
      </div>

      {/* ── TABS ────────────────────────────────────────────────────── */}
      {/* Mobile: horizontal scroll; Desktop: normal flex */}
      <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 mb-5 md:mb-6">
        <div className="flex gap-4 md:gap-8 border-b border-gray-200 dark:border-slate-800 text-sm min-w-max md:min-w-0">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`pb-3 whitespace-nowrap transition-colors text-xs md:text-sm ${
                tab === t.key
                  ? "text-indigo-500 border-b-2 border-indigo-500 font-medium"
                  : "text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── OKR TAB ─────────────────────────────────────────────────── */}
      {tab === "okr" && (
        <div className="space-y-4 md:space-y-6">

          {/* Q1 Card */}
          <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
            <h3 className="font-medium text-sm md:text-base mb-4 leading-snug">
              🎯 Q1 2026 — Scale lead generation to 3,000/month across all clients
            </h3>
            <div className="space-y-4">
              {[
                { label: "KR1: Generate 3,000 qualified leads in March", value: "2,847 / 3,000 — 95%", pct: 95, color: "bg-indigo-500" },
                { label: "KR2: Achieve blended ROAS of 4.0x",            value: "3.6x / 4.0x — 76%",   pct: 76, color: "bg-amber-400" },
                { label: "KR3: Onboard 2 new clients",                   value: "1 / 2 — 50%",          pct: 50, color: "bg-amber-400" },
              ].map((kr, i) => (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
                    <span className="text-xs md:text-sm">{kr.label}</span>
                    <span className="text-xs text-gray-500 dark:text-slate-400 shrink-0">{kr.value}</span>
                  </div>
                  <div className="h-[5px] md:h-[6px] bg-gray-200 dark:bg-slate-800 rounded-full">
                    <div className={`h-full ${kr.color} rounded-full`} style={{ width: `${kr.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Q2 Card */}
          <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
            <h3 className="font-medium text-sm md:text-base mb-4 leading-snug">
              📈 Q2 2026 — Improve campaign efficiency and reduce CPL to ₹150
            </h3>
            <div className="space-y-4">
              {[
                { label: "KR1: Reduce blended CPL from ₹186 to ₹150",            value: "Planned", pct: 5 },
                { label: "KR2: Launch AI-powered creative testing for 5 clients", value: "Planned", pct: 5 },
              ].map((kr, i) => (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
                    <span className="text-xs md:text-sm">{kr.label}</span>
                    <span className="text-xs text-gray-500 dark:text-slate-400 shrink-0">{kr.value}</span>
                  </div>
                  <div className="h-[5px] md:h-[6px] bg-gray-200 dark:bg-slate-800 rounded-full">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${kr.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── ROADMAP TAB ──────────────────────────────────────────────── */}
      {tab === "roadmap" && (
        <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
          <h3 className="font-semibold text-sm md:text-base mb-5 md:mb-6">12-Month Growth Roadmap</h3>

          <div className="relative pl-5 md:pl-6 space-y-6 md:space-y-8">
            <div className="absolute left-1 top-1 bottom-1 w-[2px] bg-gray-200 dark:bg-slate-700" />
            {[
              { quarter: "Jan–Mar 2026 (Q1)", title: "Foundation & Growth Acceleration", color: "bg-green-400" },
              { quarter: "Apr–Jun 2026 (Q2)", title: "Optimization & Automation",         color: "bg-blue-400" },
              { quarter: "Jul–Sep 2026 (Q3)", title: "Scale & Diversification",           color: "bg-amber-400" },
              { quarter: "Oct–Dec 2026 (Q4)", title: "Revenue Growth & Retention",        color: "bg-purple-400" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <span className={`absolute -left-[7px] top-1 w-3 h-3 rounded-full ${item.color}`} />
                <p className="text-xs text-gray-500 dark:text-slate-400">{item.quarter}</p>
                <p className="font-medium text-sm md:text-base mt-0.5">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── BUDGET TAB ───────────────────────────────────────────────── */}
      {tab === "budget" && (
        <div className="space-y-4 md:space-y-6">

          {/* Stat Cards: 2-col on mobile, 4-col on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {[
              ["₹24L",   "Total Monthly Budget"],
              ["₹18.4L", "Spent MTD"],
              ["76.7%",  "Budget Utilization"],
              ["₹1.2L",  "Overspend Alerts"],
            ].map((item, i) => (
              <div key={i} className="p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
                <p className="text-xl md:text-2xl font-bold">{item[0]}</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">{item[1]}</p>
              </div>
            ))}
          </div>

          {/* Budget Table */}
          <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
            <h3 className="font-semibold text-sm md:text-base mb-4">Channel Budget Allocation</h3>

            {/* Desktop table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-gray-500 dark:text-slate-400">
                  <tr>
                    <th className="text-left py-2 font-medium">Channel</th>
                    <th className="text-left font-medium">Budget</th>
                    <th className="text-left font-medium">Spent</th>
                    <th className="text-left font-medium">Remaining</th>
                    <th className="text-left font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-slate-800">
                  <tr>
                    <td className="py-3">Meta Ads</td>
                    <td>₹10L</td>
                    <td>₹7.8L</td>
                    <td>₹2.2L</td>
                    <td className="text-emerald-500 font-medium">78%</td>
                  </tr>
                  <tr>
                    <td className="py-3">Google Ads</td>
                    <td>₹9L</td>
                    <td>₹8.2L</td>
                    <td>₹0.8L</td>
                    <td className="text-amber-500 font-medium">91%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="sm:hidden space-y-3">
              {[
                { channel: "Meta Ads",   budget: "₹10L", spent: "₹7.8L", remaining: "₹2.2L", pct: "78%", pctColor: "text-emerald-500", barColor: "bg-emerald-500", barW: "78%" },
                { channel: "Google Ads", budget: "₹9L",  spent: "₹8.2L", remaining: "₹0.8L", pct: "91%", pctColor: "text-amber-500",   barColor: "bg-amber-500",   barW: "91%" },
              ].map((row, i) => (
                <div key={i} className="p-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm">{row.channel}</span>
                    <span className={`text-sm font-semibold ${row.pctColor}`}>{row.pct} used</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 dark:bg-slate-700 rounded-full mb-3">
                    <div className={`h-full ${row.barColor} rounded-full`} style={{ width: row.barW }} />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div><p className="text-gray-500">Budget</p><p className="font-medium">{row.budget}</p></div>
                    <div><p className="text-gray-500">Spent</p><p className="font-medium">{row.spent}</p></div>
                    <div><p className="text-gray-500">Left</p><p className="font-medium">{row.remaining}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── AUDIT TAB ────────────────────────────────────────────────── */}
      {tab === "audit" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              title: "Website Audit",
              items: [
                ["Page Speed",        "62/100"],
                ["Core Web Vitals",   "Fail"],
                ["SSL Certificate",   "Valid"],
                ["Mobile Responsive", "Pass"],
              ],
            },
            {
              title: "SEO Audit",
              items: [
                ["Domain Authority", "42/100"],
                ["Indexed Pages",    "1,284"],
                ["Backlinks",        "340"],
                ["Organic Traffic",  "+18%"],
              ],
            },
            {
              title: "Ads Audit",
              items: [
                ["Account Structure",     "Good"],
                ["Quality Score Avg",     "6.4/10"],
                ["Wasted Spend",          "₹28K"],
                ["Conversion Tracking",   "Active"],
              ],
            },
          ].map((card, i) => (
            <div key={i} className="p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
              <h3 className="font-semibold text-sm md:text-base mb-3 md:mb-4">{card.title}</h3>
              <div className="space-y-2.5 md:space-y-3">
                {card.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs md:text-sm">
                    <span className="text-gray-700 dark:text-gray-300">{item[0]}</span>
                    <span className={`font-medium ${
                      item[1] === "Fail" || item[1] === "₹28K"
                        ? "text-red-400"
                        : item[1] === "Pass" || item[1] === "Valid" || item[1] === "Good" || item[1] === "Active"
                        ? "text-emerald-400"
                        : "text-gray-500 dark:text-slate-400"
                    }`}>
                      {item[1]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}