// "use client";

// import {
//   Zap,
//   Play,
//   MessageCircle,
//   Mail,
//   Plus,
//   TestTube,
//   Bot,
//   CheckCircle,
//   PauseCircle,
//    GitBranch,
//   User,
//   Clock,
// } from "lucide-react";


// export default function AutomationWorkflows() {

//   const StatCard = ({ icon: Icon, value, label }) => (
//     <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] relative overflow-hidden">
//       <Icon className="text-indigo-500 mb-3" />
//       <p className="text-2xl font-bold">{value}</p>
//       <p className="text-sm text-gray-500">{label}</p>
//     </div>
//   );

//   const ActiveWorkflow = ({ title, runs, status }) => (
//     <div className="flex justify-between items-center p-4 rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">

//       <div>
//         <p className="text-sm font-medium">{title}</p>
//         <p className="text-xs text-gray-500">{runs}</p>
//       </div>

//       <span
//         className={`text-xs px-3 py-1 rounded-full ${
//           status === "Active"
//             ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
//             : "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300"
//         }`}
//       >
//         {status}
//       </span>

//     </div>
//   );

//   const Node = ({ title, subtitle, color }) => (
//     <div
//       className={`px-5 py-3 rounded-lg text-sm border ${color}`}
//     >
//       <p className="text-xs opacity-70">{title}</p>
//       <p className="font-medium">{subtitle}</p>
//     </div>
//   );

//   return (
//     <div className="p-8 space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">

//       {/* HEADER */}

//       <div className="flex justify-between items-start">

//         <div>
//           <h1 className="text-2xl font-bold">Automation & Workflows</h1>
//           <p className="text-sm text-gray-500 dark:text-slate-400">
//             12 active workflows · 8,402 executions this month
//           </p>
//         </div>

//         <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">
//           <Plus size={16} />
//           New Workflow
//         </button>

//       </div>

//       {/* STATS */}

//       <div className="grid grid-cols-4 gap-6">

//         <StatCard icon={Zap} value="12" label="Active Workflows" />
//         <StatCard icon={Play} value="8,402" label="Executions This Month" />
//         <StatCard icon={MessageCircle} value="3,284" label="WhatsApp Messages Sent" />
//         <StatCard icon={Mail} value="5,118" label="Emails Delivered" />

//       </div>

//       {/* MAIN GRID */}

//       <div className="grid grid-cols-3 gap-6">

//         {/* WORKFLOW BUILDER */}

//         <div className="col-span-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

//           <div className="flex justify-between mb-6">

//             <h3 className="font-semibold">
//               Workflow Builder — Lead Nurture Flow
//             </h3>

//             <div className="flex gap-2">

//               <button className="flex items-center gap-1 text-xs px-3 py-1 rounded-md border border-gray-300 dark:border-slate-700">
//                 <TestTube size={14}/>
//                 Test
//               </button>

//               <button className="text-xs px-3 py-1 rounded-md bg-indigo-600 text-white">
//                 Activate
//               </button>

//             </div>

//           </div>

//           {/* FLOW AREA */}

//           <div className="space-y-6">

//   <div className="flex gap-6 items-center">

//     <Node
//       icon={Zap}
//       title="TRIGGER"
//       subtitle="Lead Created"
//       color="border-green-500"
//     />

//     <span className="text-gray-400">→</span>

//     <Node
//       icon={GitBranch}
//       title="CONDITION"
//       subtitle="Source = Meta Ads"
//       color="border-orange-500"
//     />

//   </div>

//   <div className="flex gap-6">

//     <Node
//       icon={MessageCircle}
//       title="ACTION"
//       subtitle="Send WhatsApp Welcome"
//       color="border-blue-500"
//     />

//     <Node
//       icon={User}
//       title="ACTION"
//       subtitle="Assign to Sales Rep"
//       color="border-blue-500"
//     />

//   </div>

//   <Node
//     icon={Clock}
//     title="DELAY"
//     subtitle="Wait 24 hours"
//     color="border-indigo-500 w-56"
//   />

//   <Node
//     icon={Mail}
//     title="ACTION"
//     subtitle="Send Follow-up Email"
//     color="border-blue-500 w-64"
//   />

// </div>

//         </div>

//         {/* RIGHT PANEL */}

//         <div className="space-y-6">

//           {/* ACTIVE WORKFLOWS */}

//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

//             <h3 className="font-semibold mb-4">
//               Active Workflows
//             </h3>

//             <div className="space-y-3">

//               <ActiveWorkflow
//                 title="Lead Nurture — Meta"
//                 runs="284 runs / month"
//                 status="Active"
//               />

//               <ActiveWorkflow
//                 title="WhatsApp Re-engagement"
//                 runs="142 runs / month"
//                 status="Active"
//               />

//               <ActiveWorkflow
//                 title="Budget Alert Notifier"
//                 runs="18 runs / month"
//                 status="Paused"
//               />

//               <ActiveWorkflow
//                 title="Sales Task Assigner"
//                 runs="96 runs / month"
//                 status="Active"
//               />

//             </div>

//           </div>

//           {/* AI RECOMMENDATIONS */}

//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

//             <h3 className="font-semibold mb-4 flex items-center gap-2">
//               <Bot size={16} />
//               AI Recommendations
//             </h3>

//             <div className="space-y-4">

//               <div className="p-4 rounded-lg border border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20">

//                 <p className="text-sm font-medium">
//                   Add SMS Fallback
//                 </p>

//                 <p className="text-xs text-gray-500 mt-1">
//                   30% of WhatsApp messages unread after 48h.
//                   Adding SMS fallback can increase response rate by est. 22%.
//                 </p>

//                 <button className="text-indigo-600 text-xs mt-2">
//                   → Add to Workflow
//                 </button>

//               </div>

//               <div className="p-4 rounded-lg border border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20">

//                 <p className="text-sm font-medium">
//                   Personalize Copy
//                 </p>

//                 <p className="text-xs text-gray-500 mt-1">
//                   Using first name + industry-specific CTA increases open rate by 34%.
//                 </p>

//                 <button className="text-indigo-600 text-xs mt-2">
//                   → Update Templates
//                 </button>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }


"use client";

import {
  Zap, Play, MessageCircle, Mail, Plus, TestTube,
  Bot, GitBranch, User, Clock,
} from "lucide-react";

// ── Sub-components ────────────────────────────────────────────────────────────

function StatCard({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <div className="p-3 sm:p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
      <Icon className="text-indigo-500 mb-2 md:mb-3" size={16} />
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight">{value}</p>
      <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 leading-tight">{label}</p>
    </div>
  );
}

function ActiveWorkflow({ title, runs, status }: { title: string; runs: string; status: string }) {
  return (
    <div className="flex justify-between items-center p-3 md:p-4 rounded-lg border border-gray-200 dark:border-slate-800">
      <div className="min-w-0 mr-2">
        <p className="text-xs md:text-sm font-medium text-gray-900 dark:text-white truncate">{title}</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">{runs}</p>
      </div>
      <span className={`text-xs px-2.5 py-1 rounded-full shrink-0 font-medium ${
        status === "Active"
          ? "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300"
          : "bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300"
      }`}>
        {status}
      </span>
    </div>
  );
}

function Node({ title, subtitle, color }: { title: string; subtitle: string; color: string }) {
  return (
    <div className={`px-3 sm:px-4 md:px-5 py-2 md:py-3 rounded-lg text-sm border ${color} bg-white dark:bg-[#0b1220] min-w-0`}>
      <p className="text-xs opacity-60 font-medium tracking-wide">{title}</p>
      <p className="font-semibold text-xs sm:text-sm text-gray-900 dark:text-white mt-0.5 leading-tight">{subtitle}</p>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function AutomationWorkflows() {
  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Automation & Workflows</h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">
            12 active workflows · 8,402 executions this month
          </p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm transition-colors">
          <Plus size={15} />
          New Workflow
        </button>
      </div>

      {/* ── STATS — 2-col mobile → 4-col desktop ────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
        <StatCard icon={Zap}           value="12"    label="Active Workflows" />
        <StatCard icon={Play}          value="8,402" label="Executions This Month" />
        <StatCard icon={MessageCircle} value="3,284" label="WhatsApp Messages Sent" />
        <StatCard icon={Mail}          value="5,118" label="Emails Delivered" />
      </div>

      {/* ── MAIN GRID — 1-col mobile → 3-col desktop ────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">

        {/* WORKFLOW BUILDER — full width mobile, 2/3 desktop */}
        <div className="lg:col-span-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">

          {/* Builder header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6">
            <h3 className="font-semibold text-sm md:text-base">
              Workflow Builder — Lead Nurture Flow
            </h3>
            <div className="flex gap-2 shrink-0">
              <button className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                <TestTube size={13} /> Test
              </button>
              <button className="text-xs px-3 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
                Activate
              </button>
            </div>
          </div>

          {/* FLOW NODES — horizontal scroll on small screens */}
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <div className="space-y-4 md:space-y-6 min-w-[320px]">

              {/* Row 1 */}
              <div className="flex items-center gap-3 md:gap-6">
                <Node title="TRIGGER" subtitle="Lead Created" color="border-green-500" />
                <span className="text-gray-400 shrink-0 text-lg">→</span>
                <Node title="CONDITION" subtitle="Source = Meta Ads" color="border-orange-500" />
              </div>

              {/* Row 2 */}
              <div className="flex gap-3 md:gap-6">
                <Node title="ACTION" subtitle="Send WhatsApp Welcome" color="border-blue-500" />
                <Node title="ACTION" subtitle="Assign to Sales Rep" color="border-blue-500" />
              </div>

              {/* Row 3 */}
              <div>
                <Node title="DELAY" subtitle="Wait 24 hours" color="border-indigo-500" />
              </div>

              {/* Row 4 */}
              <div>
                <Node title="ACTION" subtitle="Send Follow-up Email" color="border-blue-500" />
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT PANEL — full width mobile, 1/3 desktop */}
        <div className="space-y-4 md:space-y-6">

          {/* ACTIVE WORKFLOWS */}
          <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
            <h3 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Active Workflows</h3>
            <div className="space-y-2 md:space-y-3">
              <ActiveWorkflow title="Lead Nurture — Meta"      runs="284 runs / month" status="Active" />
              <ActiveWorkflow title="WhatsApp Re-engagement"   runs="142 runs / month" status="Active" />
              <ActiveWorkflow title="Budget Alert Notifier"    runs="18 runs / month"  status="Paused" />
              <ActiveWorkflow title="Sales Task Assigner"      runs="96 runs / month"  status="Active" />
            </div>
          </div>

          {/* AI RECOMMENDATIONS */}
          <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
            <h3 className="font-semibold text-sm md:text-base mb-3 md:mb-4 flex items-center gap-2">
              <Bot size={15} className="text-indigo-500" />
              AI Recommendations
            </h3>
            <div className="space-y-3 md:space-y-4">

              <div className="p-3 md:p-4 rounded-lg border border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20">
                <p className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white">Add SMS Fallback</p>
                <p className="text-xs text-gray-500 dark:text-slate-400 mt-1 leading-relaxed">
                  30% of WhatsApp messages unread after 48h. Adding SMS fallback can increase response rate by est. 22%.
                </p>
                <button className="text-indigo-600 dark:text-indigo-400 text-xs mt-2 hover:underline">
                  → Add to Workflow
                </button>
              </div>

              <div className="p-3 md:p-4 rounded-lg border border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20">
                <p className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white">Personalize Copy</p>
                <p className="text-xs text-gray-500 dark:text-slate-400 mt-1 leading-relaxed">
                  Using first name + industry-specific CTA increases open rate by 34%.
                </p>
                <button className="text-indigo-600 dark:text-indigo-400 text-xs mt-2 hover:underline">
                  → Update Templates
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}