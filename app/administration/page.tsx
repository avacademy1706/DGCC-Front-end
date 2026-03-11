// "use client";

// import { useState } from "react";
// import {
//   Crown,
//   Triangle,
//   Megaphone,
//   Briefcase,
//   BarChart3,
// } from "lucide-react";

// export default function AdministrationPanel() {
//   const [tab, setTab] = useState("users");

//   const users = [
//     {
//       initials: "AK",
//       name: "Alex Kumar",
//       email: "alex@apexagency.in",
//       role: "Admin",
//       access: "All Clients",
//       last: "Now",
//     },
//     {
//       initials: "RK",
//       name: "Rahul Kapoor",
//       email: "rahul@apexagency.in",
//       role: "Strategist",
//       access: "EduTech, RE360",
//       last: "2h ago",
//     },
//     {
//       initials: "PM",
//       name: "Pooja Mehta",
//       email: "pooja@apexagency.in",
//       role: "Marketing Mgr",
//       access: "HealthFirst, Fashion",
//       last: "1d ago",
//     },
//     {
//       initials: "AT",
//       name: "Amit Trivedi",
//       email: "amit@apexagency.in",
//       role: "Sales User",
//       access: "FinanceHub",
//       last: "3h ago",
//     },
//     {
//       initials: "VG",
//       name: "Vijay Gupta",
//       email: "ceo@realestate360.in",
//       role: "Client CXO",
//       access: "RE360 only",
//       last: "Yesterday",
//     },
//   ];

//   const logs = [
//     ["2026-03-07 14:32", "LOGIN", "Alex Kumar logged in"],
//     ["2026-03-07 14:28", "CREATE", "Campaign RE360 created"],
//     ["2026-03-07 13:45", "UPDATE", "HealthFirst campaign updated"],
//     ["2026-03-07 12:14", "CONVERT", "Lead converted by Amit"],
//     ["2026-03-07 11:32", "ALERT", "Budget overspend detected"],
//     ["2026-03-07 10:45", "WORKFLOW", "Lead nurture executed"],
//     ["2026-03-07 09:00", "SYNC", "Meta API sync completed"],
//   ];

//   const RoleBadge = ({ role }: any) => {
//     const map: any = {
//       Admin: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
//       Strategist:
//         "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
//       "Marketing Mgr":
//         "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300",
//       "Sales User":
//         "bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-300",
//       "Client CXO":
//         "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300",
//     };

//     return (
//       <span className={`px-2 py-1 text-xs rounded-full ${map[role]}`}>
//         {role}
//       </span>
//     );
//   };

//   const TabButton = ({ id, label }: any) => (
//     <button
//       onClick={() => setTab(id)}
//       className={`pb-3 text-sm ${
//         tab === id
//           ? "border-b-2 border-indigo-600 text-indigo-600"
//           : "text-gray-500"
//       }`}
//     >
//       {label}
//     </button>
//   );

//   return (
//     <div className="p-8 space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">
//       {/* HEADER */}

//       <div className="flex justify-between">
//         <div>
//           <h1 className="text-2xl font-bold">Administration</h1>
//           <p className="text-sm text-gray-500">
//             Users, roles, audit logs and system management
//           </p>
//         </div>

//         <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">
//           + Invite User
//         </button>
//       </div>

//       {/* TABS */}

//       <div className="flex gap-8 border-b border-gray-200 dark:border-slate-800">
//         <TabButton id="users" label="User Management" />
//         <TabButton id="roles" label="Roles & Permissions" />
//         <TabButton id="logs" label="Audit Logs" />
//         <TabButton id="health" label="System Health" />
//       </div>

//       {/* USER MANAGEMENT */}

//       {tab === "users" && (
//         <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">
//           <div className="flex justify-between mb-6">
//             <h3 className="font-semibold">Team Members</h3>
//             <input
//               placeholder="Search users..."
//               className="px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-sm"
//             />
//           </div>

//           <table className="w-full text-sm">
//             <thead className="text-gray-500 border-b border-gray-200 dark:border-slate-800">
//               <tr>
//                 <th className="text-left py-3">USER</th>
//                 <th>ROLE</th>
//                 <th>CLIENT ACCESS</th>
//                 <th>LAST ACTIVE</th>
//                 <th>STATUS</th>
//                 <th>ACTIONS</th>
//               </tr>
//             </thead>

//             <tbody>
//               {users.map((u, i) => (
//                 <tr
//                   key={i}
//                   className="border-b border-gray-200 dark:border-slate-800"
//                 >
//                   <td className="py-4">
//                     <div className="flex gap-3 items-center">
//                       <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm">
//                         {u.initials}
//                       </div>

//                       <div>
//                         <p className="font-medium">{u.name}</p>
//                         <p className="text-xs text-gray-500">{u.email}</p>
//                       </div>
//                     </div>
//                   </td>

//                   <td className="text-center">
//                     <RoleBadge role={u.role} />
//                   </td>

//                   <td className="text-center">{u.access}</td>

//                   <td className="text-center">{u.last}</td>

//                   <td className="text-center">
//                     <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
//                       Active
//                     </span>
//                   </td>

//                   <td className="text-center text-indigo-600 cursor-pointer">
//                     Edit
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* ROLES */}

//       {tab === "roles" && (
//         <div className="grid grid-cols-3 gap-6">
//           <RoleCard
//             icon={<Crown />}
//             title="Admin"
//             desc="Full platform access · User management · Billing"
//             perms="✓ All modules · ✓ All clients · ✓ Admin panel"
//           />

//           <RoleCard
//             icon={<Triangle />}
//             title="Strategist"
//             desc="Strategy, campaigns, analytics access"
//             perms="✓ Strategy · ✓ Campaigns · ✓ Analytics · ✗ Admin"
//           />

//           <RoleCard
//             icon={<Megaphone />}
//             title="Marketing Manager"
//             desc="Campaign execution and content management"
//             perms="✓ Campaigns · ✓ Content · ✓ Reports · ✗ Admin"
//           />

//           <RoleCard
//             icon={<Briefcase />}
//             title="Sales User"
//             desc="Lead management and CRM access"
//             perms="✓ Leads · ✓ CRM · ✗ Campaigns · ✗ Admin"
//           />

//           <RoleCard
//             icon={<BarChart3 />}
//             title="Client CXO"
//             desc="Read-only executive dashboard"
//             perms="✓ Own dashboard · ✓ Reports · ✗ Edit access"
//           />
//         </div>
//       )}

//       {/* AUDIT LOGS */}

//       {tab === "logs" && (
//         <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">
//           <div className="flex justify-between mb-6">
//             <h3 className="font-semibold">Audit Log</h3>
//             <input
//               placeholder="Search logs..."
//               className="px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-sm"
//             />
//           </div>

//           <div className="space-y-3 text-sm">
//             {logs.map((l, i) => (
//               <div
//                 key={i}
//                 className="flex gap-6 border-b border-gray-200 dark:border-slate-800 pb-2"
//               >
//                 <span className="text-gray-500">{l[0]}</span>
//                 <span className="text-indigo-600">{l[1]}</span>
//                 <span>{l[2]}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* SYSTEM HEALTH */}

//       {tab === "health" && (
//         <div className="grid grid-cols-2 gap-6">
//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6 space-y-4">
//             <h3 className="font-semibold">Service Status</h3>

//             {[
//               "API Gateway",
//               "Meta Ads Sync",
//               "Google Ads Sync",
//               "Zoho CRM Sync",
//               "WhatsApp Gateway",
//               "Workflow Engine",
//               "Report Generator",
//             ].map((s, i) => (
//               <div key={i} className="flex justify-between text-sm">
//                 <span>● {s}</span>
//                 <span className="text-green-500">Online</span>
//               </div>
//             ))}
//           </div>

//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6 space-y-5">
//             <h3 className="font-semibold">Infrastructure Metrics</h3>

//             <Metric label="API Latency" value="24ms" width="30%" />
//             <Metric label="Error Rate" value="0.12%" width="10%" />
//             <Metric label="DB Connections" value="48/200" width="40%" />
//             <Metric label="Storage Used" value="284GB / 1TB" width="45%" />
//             <Metric label="ETL Jobs Today" value="142 / 142" width="100%" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* ROLE CARD */

// function RoleCard({ icon, title, desc, perms }: any) {
//   return (
//     <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-2">
//       <div className="text-indigo-500">{icon}</div>
//       <h4 className="font-semibold">{title}</h4>
//       <p className="text-sm text-gray-500">{desc}</p>
//       <p className="text-xs text-green-500">{perms}</p>
//     </div>
//   );
// }

// /* METRIC BAR */

// function Metric({ label, value, width }: any) {
//   return (
//     <div>
//       <div className="flex justify-between text-xs mb-1">
//         <span>{label}</span>
//         <span>{value}</span>
//       </div>
//       <div className="h-2 bg-gray-200 dark:bg-slate-800 rounded">
//         <div
//           className="h-2 bg-indigo-500 rounded"
//           style={{ width: width }}
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Crown, Triangle, Megaphone, Briefcase, BarChart3, UserPlus } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const users = [
  { initials: "AK", name: "Alex Kumar",    email: "alex@apexagency.in",   role: "Admin",         access: "All Clients",          last: "Now"       },
  { initials: "RK", name: "Rahul Kapoor",  email: "rahul@apexagency.in",  role: "Strategist",    access: "EduTech, RE360",       last: "2h ago"    },
  { initials: "PM", name: "Pooja Mehta",   email: "pooja@apexagency.in",  role: "Marketing Mgr", access: "HealthFirst, Fashion",  last: "1d ago"    },
  { initials: "AT", name: "Amit Trivedi",  email: "amit@apexagency.in",   role: "Sales User",    access: "FinanceHub",           last: "3h ago"    },
  { initials: "VG", name: "Vijay Gupta",   email: "ceo@realestate360.in", role: "Client CXO",    access: "RE360 only",           last: "Yesterday" },
];

const logs = [
  ["2026-03-07 14:32", "LOGIN",    "Alex Kumar logged in"],
  ["2026-03-07 14:28", "CREATE",   "Campaign RE360 created"],
  ["2026-03-07 13:45", "UPDATE",   "HealthFirst campaign updated"],
  ["2026-03-07 12:14", "CONVERT",  "Lead converted by Amit"],
  ["2026-03-07 11:32", "ALERT",    "Budget overspend detected"],
  ["2026-03-07 10:45", "WORKFLOW", "Lead nurture executed"],
  ["2026-03-07 09:00", "SYNC",     "Meta API sync completed"],
];

const roleColors: Record<string, string> = {
  "Admin":         "bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300",
  "Strategist":    "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300",
  "Marketing Mgr": "bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300",
  "Sales User":    "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-300",
  "Client CXO":    "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300",
};

const logColors: Record<string, string> = {
  LOGIN:    "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300",
  CREATE:   "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300",
  UPDATE:   "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300",
  CONVERT:  "bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300",
  ALERT:    "bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-300",
  WORKFLOW: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-300",
  SYNC:     "bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300",
};

// ── Sub-components ────────────────────────────────────────────────────────────

function RoleBadge({ role }: { role: string }) {
  return (
    <span className={`px-2 py-0.5 text-xs rounded-full font-medium whitespace-nowrap ${roleColors[role] ?? ""}`}>
      {role}
    </span>
  );
}

function RoleCard({ icon, title, desc, perms }: { icon: React.ReactNode; title: string; desc: string; perms: string }) {
  return (
    <div className="p-4 md:p-5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-2">
      <div className="text-indigo-500">{icon}</div>
      <h4 className="font-semibold text-sm md:text-base text-gray-900 dark:text-white">{title}</h4>
      <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400">{desc}</p>
      <p className="text-xs text-green-500 dark:text-green-400 leading-relaxed">{perms}</p>
    </div>
  );
}

function Metric({ label, value, width }: { label: string; value: string; width: string }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-700 dark:text-slate-300">{label}</span>
        <span className="text-gray-500 dark:text-slate-400 font-medium">{value}</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-slate-800 rounded">
        <div className="h-2 bg-indigo-500 rounded" style={{ width }} />
      </div>
    </div>
  );
}

// ── Tab Panels ────────────────────────────────────────────────────────────────

function UsersTab() {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6">
        <h3 className="font-semibold text-sm md:text-base">Team Members</h3>
        <input
          placeholder="Search users..."
          className="w-full sm:w-52 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-xs md:text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-xs md:text-sm">
          <thead className="text-gray-500 dark:text-slate-400 border-b border-gray-200 dark:border-slate-800">
            <tr>
              <th className="text-left py-3 font-semibold">USER</th>
              <th className="font-semibold">ROLE</th>
              <th className="font-semibold">CLIENT ACCESS</th>
              <th className="font-semibold">LAST ACTIVE</th>
              <th className="font-semibold">STATUS</th>
              <th className="font-semibold">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} className="border-b border-gray-200 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-3">
                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-semibold shrink-0">
                      {u.initials}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{u.name}</p>
                      <p className="text-xs text-gray-500 dark:text-slate-400">{u.email}</p>
                    </div>
                  </div>
                </td>
                <td className="text-center"><RoleBadge role={u.role} /></td>
                <td className="text-center text-gray-600 dark:text-slate-300">{u.access}</td>
                <td className="text-center text-gray-600 dark:text-slate-300">{u.last}</td>
                <td className="text-center">
                  <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300 font-medium">
                    Active
                  </span>
                </td>
                <td className="text-center">
                  <button className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {users.map((u, i) => (
          <div key={i} className="rounded-lg border border-gray-200 dark:border-slate-700 p-3 space-y-2.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                {u.initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-xs text-gray-900 dark:text-white">{u.name}</p>
                <p className="text-xs text-gray-500 dark:text-slate-400 truncate">{u.email}</p>
              </div>
              <button className="text-xs text-indigo-600 dark:text-indigo-400 shrink-0">Edit</button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <RoleBadge role={u.role} />
              <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300 font-medium">Active</span>
            </div>
            <div className="flex gap-4 text-xs text-gray-500 dark:text-slate-400">
              <span>🔒 {u.access}</span>
              <span>🕐 {u.last}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RolesTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
      <RoleCard icon={<Crown size={18} />}     title="Admin"            desc="Full platform access · User management · Billing"    perms="✓ All modules · ✓ All clients · ✓ Admin panel" />
      <RoleCard icon={<Triangle size={18} />}  title="Strategist"       desc="Strategy, campaigns, analytics access"               perms="✓ Strategy · ✓ Campaigns · ✓ Analytics · ✗ Admin" />
      <RoleCard icon={<Megaphone size={18} />} title="Marketing Manager" desc="Campaign execution and content management"          perms="✓ Campaigns · ✓ Content · ✓ Reports · ✗ Admin" />
      <RoleCard icon={<Briefcase size={18} />} title="Sales User"       desc="Lead management and CRM access"                     perms="✓ Leads · ✓ CRM · ✗ Campaigns · ✗ Admin" />
      <RoleCard icon={<BarChart3 size={18} />} title="Client CXO"       desc="Read-only executive dashboard"                     perms="✓ Own dashboard · ✓ Reports · ✗ Edit access" />
    </div>
  );
}

function LogsTab() {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6">
        <h3 className="font-semibold text-sm md:text-base">Audit Log</h3>
        <input
          placeholder="Search logs..."
          className="w-full sm:w-52 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-xs md:text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="space-y-2.5">
        {logs.map((l, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-gray-200 dark:border-slate-800 pb-2.5">
            <span className="text-xs text-gray-400 dark:text-slate-500 shrink-0">{l[0]}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold w-fit ${logColors[l[1]] ?? "bg-gray-100 text-gray-600"}`}>
              {l[1]}
            </span>
            <span className="text-xs md:text-sm text-gray-700 dark:text-slate-300">{l[2]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HealthTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6 space-y-3">
        <h3 className="font-semibold text-sm md:text-base">Service Status</h3>
        {["API Gateway", "Meta Ads Sync", "Google Ads Sync", "Zoho CRM Sync", "WhatsApp Gateway", "Workflow Engine", "Report Generator"].map((s, i) => (
          <div key={i} className="flex justify-between items-center text-xs md:text-sm">
            <span className="text-gray-700 dark:text-slate-300">
              <span className="text-green-500 mr-1.5">●</span>{s}
            </span>
            <span className="text-green-500 font-medium">Online</span>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6 space-y-4">
        <h3 className="font-semibold text-sm md:text-base">Infrastructure Metrics</h3>
        <Metric label="API Latency"    value="24ms"         width="30%"  />
        <Metric label="Error Rate"     value="0.12%"        width="10%"  />
        <Metric label="DB Connections" value="48/200"       width="40%"  />
        <Metric label="Storage Used"   value="284GB / 1TB"  width="45%"  />
        <Metric label="ETL Jobs Today" value="142 / 142"    width="100%" />
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function AdministrationPanel() {
  const [tab, setTab] = useState("users");

  const tabs = [
    { id: "users",  label: "User Management"    },
    { id: "roles",  label: "Roles & Permissions" },
    { id: "logs",   label: "Audit Logs"          },
    { id: "health", label: "System Health"       },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Administration</h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">
            Users, roles, audit logs and system management
          </p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm transition-colors">
          <UserPlus size={15} />
          Invite User
        </button>
      </div>

      {/* ── TABS — horizontally scrollable on mobile ─────────────────── */}
      <div className="overflow-x-auto">
        <div className="flex gap-4 md:gap-8 border-b border-gray-200 dark:border-slate-800 text-xs md:text-sm min-w-max">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`pb-2.5 whitespace-nowrap font-medium transition-colors ${
                tab === t.id
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── TAB CONTENT ─────────────────────────────────────────────── */}
      {tab === "users"  && <UsersTab />}
      {tab === "roles"  && <RolesTab />}
      {tab === "logs"   && <LogsTab />}
      {tab === "health" && <HealthTab />}

    </div>
  );
}