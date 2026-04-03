// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { ExternalLink, Pencil } from "lucide-react";
// import { useRouter } from "next/navigation";

// const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// // ─── Static KPI Cards ─────────────────────────────────────────────────────────
// const stats = [
//   { title: "Active Clients",        value: "8",      icon: "👥" },
//   { title: "Total Revenue Managed", value: "₹2.1Cr", icon: "📈" },
//   { title: "Live Campaigns",        value: "38",     icon: "🎯" },
//   { title: "Avg Client Health",     value: "94%",    icon: "⚡" },
// ];

// // ─── Helpers ──────────────────────────────────────────────────────────────────
// const statusColor = (status: string) => {
//   if (status === "completed")   return "bg-emerald-500/20 text-emerald-400";
//   if (status === "in_progress") return "bg-amber-500/20 text-amber-400";
//   return "bg-gray-500/20 text-gray-400";
// };

// const statusLabel = (status: string) => {
//   if (status === "completed")   return "Active";
//   if (status === "in_progress") return "In Progress";
//   return "Draft";
// };

// const avatarColors = [
//   "from-indigo-500 to-blue-500",
//   "from-emerald-500 to-teal-500",
//   "from-orange-500 to-red-500",
//   "from-pink-500 to-purple-500",
//   "from-blue-500 to-cyan-500",
//   "from-violet-500 to-purple-500",
// ];

// // ─── Skeleton Card ────────────────────────────────────────────────────────────
// function SkeletonCard() {
//   return (
//     <div className="p-5 md:p-6 rounded-xl border bg-white dark:bg-[#0b1220] dark:border-slate-800 animate-pulse">
//       <div className="flex items-center gap-4 mb-5">
//         <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-slate-700 shrink-0" />
//         <div className="space-y-2 flex-1">
//           <div className="h-4 w-32 bg-gray-200 dark:bg-slate-700 rounded" />
//           <div className="h-3 w-24 bg-gray-200 dark:bg-slate-700 rounded" />
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-3 mb-5">
//         {[1, 2, 3, 4].map(j => (
//           <div key={j} className="space-y-1">
//             <div className="h-3 w-16 bg-gray-200 dark:bg-slate-700 rounded" />
//             <div className="h-4 w-12 bg-gray-200 dark:bg-slate-700 rounded" />
//           </div>
//         ))}
//       </div>
//       <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded" />
//     </div>
//   );
// }

// // ─── Main Component ───────────────────────────────────────────────────────────
// export default function ClientPortfolio() {
//   const [clients, setClients] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError]     = useState<string | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         setLoading(true);
//         const { data } = await axios.get(`${API}/clients`);
//         setClients(data.clients || []);
//       } catch {
//         setError("Clients load nahi hue. Backend chal raha hai?");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchClients();
//   }, []);

//   return (
//     <div className="p-4 md:p-6 lg:p-8 space-y-5 md:space-y-6 lg:space-y-8 bg-gray-50 dark:bg-[#020817] min-h-screen">

//       {/* ── HEADER ──────────────────────────────────────────────────── */}
//       <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
//             Client Portfolio
//           </h1>
//           <p className="text-xs md:text-sm text-gray-500 mt-0.5">
//             {loading ? "Loading..." : `${clients.length} clients · Multi-tenant management`}
//           </p>
//         </div>
//         <Link href="/client-onboarding">
//           <button className="w-full sm:w-auto px-4 md:px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition-colors text-center">
//             + Onboard New Client
//           </button>
//         </Link>
//       </div>

//       {/* ── KPI CARDS ───────────────────────────────────────────────── */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 lg:gap-6">
//         {stats.map((stat, i) => (
//           <div key={i} className="p-4 md:p-5 lg:p-6 rounded-xl border bg-white dark:bg-[#0b1220] dark:border-slate-800">
//             <div className="text-xl md:text-2xl mb-2 md:mb-3">{stat.icon}</div>
//             <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
//               {stat.value}
//             </div>
//             <p className="text-xs md:text-sm text-gray-500 mt-1">{stat.title}</p>
//           </div>
//         ))}
//       </div>

//       {/* ── ERROR ───────────────────────────────────────────────────── */}
//       {error && (
//         <div className="p-3 md:p-4 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 text-xs md:text-sm">
//           ⚠️ {error}
//         </div>
//       )}

//       {/* ── LOADING SKELETONS ───────────────────────────────────────── */}
//       {loading && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {[1, 2, 3].map(i => <SkeletonCard key={i} />)}
//         </div>
//       )}

//       {/* ── CLIENT GRID ─────────────────────────────────────────────── */}
//       {!loading && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">

//           {clients.map((client, i) => {
//             const name     = client?.profile?.companyName || "Unnamed Client";
//             const industry = client?.profile?.industry    || "—";
//             const status   = client?.status               || "draft";
//             const step     = client?.currentStep          || 1;
//             const letter   = name.charAt(0).toUpperCase();
//             const color    = avatarColors[i % avatarColors.length];

//             return (
//               <div
//                 key={client._id}
//                 className="p-5 md:p-6 rounded-xl border bg-white dark:bg-[#0b1220] dark:border-slate-800 flex flex-col"
//               >
//                 {/* TOP ROW */}
//                 <div className="flex items-start justify-between mb-4 md:mb-5 gap-3">
//                   <div className="flex items-center gap-3 min-w-0">
//                     <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
//                       {letter}
//                     </div>
//                     <div className="min-w-0">
//                       <p className="font-semibold text-sm md:text-base text-gray-900 dark:text-white truncate">
//                         {name}
//                       </p>
//                       <p className="text-xs text-gray-500 truncate">
//                         {industry} · {client._id.slice(-6).toUpperCase()}
//                       </p>
//                     </div>
//                   </div>
//                   <span className={`text-xs px-2.5 py-1 rounded-full shrink-0 ${statusColor(status)}`}>
//                     {statusLabel(status)}
//                   </span>
//                 </div>

//                 {/* METRICS */}
//                 <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs md:text-sm mb-4 md:mb-5 flex-1">
//                   <div>
//                     <p className="text-gray-500 dark:text-slate-400">Revenue Model</p>
//                     <p className="font-semibold text-gray-900 dark:text-white mt-0.5">
//                       {client?.profile?.revenueModel || "—"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500 dark:text-slate-400">Budget</p>
//                     <p className="font-semibold text-emerald-500 mt-0.5">
//                       {client?.profile?.budget ? `₹${client.profile.budget}` : "—"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500 dark:text-slate-400">Market</p>
//                     <p className="font-semibold text-gray-900 dark:text-white mt-0.5 truncate">
//                       {client?.profile?.market || "—"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500 dark:text-slate-400">Channels</p>
//                     <p className="font-semibold text-gray-900 dark:text-white mt-0.5">
//                       {client?.channels?.channels?.length
//                         ? `${client.channels.channels.length} Active`
//                         : "—"}
//                     </p>
//                   </div>
//                 </div>

//                 {/* PROGRESS BAR */}
//                 <div className="mb-4">
//                   <div className="h-1.5 md:h-2 rounded bg-gray-200 dark:bg-slate-700">
//                     <div
//                       className={`h-full rounded transition-all ${
//                         status === "completed"
//                           ? "bg-emerald-500"
//                           : status === "in_progress"
//                           ? "bg-amber-500"
//                           : "bg-gray-400"
//                       }`}
//                       style={{ width: `${status === "completed" ? 100 : (step - 1) * 20}%` }}
//                     />
//                   </div>
//                   <p className="text-xs text-gray-500 dark:text-slate-500 mt-1.5">
//                     {status === "completed"
//                       ? "Onboarding Complete ✓"
//                       : `Onboarding: Step ${step}/5`}
//                   </p>
//                 </div>

//                 {/* ACTION BUTTONS */}
//                 <div className="flex items-center justify-between gap-2 mt-auto pt-1">
//                   <Link
//                     href={`/clients/${client._id}`}
//                     className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-md border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 transition-colors"
//                   >
//                     <ExternalLink size={13} />
//                     Details
//                   </Link>
//                   <button
//                     onClick={() => router.push(`/client-onboarding?edit=${client._id}`)}
//                     className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs transition-colors"
//                   >
//                     <Pencil size={13} />
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             );
//           })}

//           {/* ADD CLIENT CARD */}
//           <Link href="/client-onboarding">
//             <div className="border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-gray-400 p-8 md:p-10 cursor-pointer hover:border-indigo-400 hover:text-indigo-400 transition-colors min-h-[180px] md:min-h-[220px]">
//               <div className="text-2xl md:text-3xl mb-2 md:mb-3">＋</div>
//               <p className="font-medium text-sm md:text-base">Onboard New Client</p>
//               <p className="text-xs mt-1 text-center">Start 5-step setup wizard</p>
//             </div>
//           </Link>

//         </div>
//       )}

//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { ExternalLink, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const statusColor = (status: string) => {
  if (status === "completed") return "bg-emerald-500/20 text-emerald-400";
  if (status === "in_progress") return "bg-amber-500/20 text-amber-400";
  return "bg-gray-500/20 text-gray-400";
};

const statusLabel = (status: string) => {
  if (status === "completed") return "Active";
  if (status === "in_progress") return "In Progress";
  return "Draft";
};

const avatarColors = [
  "from-indigo-500 to-blue-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-red-500",
  "from-pink-500 to-purple-500",
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-purple-500",
];

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount || 0);
}

function safeBudget(value: string | number | null | undefined) {
  if (value === null || value === undefined) return 0;
  const cleaned = String(value).replace(/,/g, "").trim();
  const num = Number(cleaned);
  return Number.isFinite(num) ? num : 0;
}

// ─── Skeleton Card ────────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="p-5 md:p-6 rounded-xl border bg-white dark:bg-[#0b1220] dark:border-slate-800 animate-pulse">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-slate-700 shrink-0" />
        <div className="space-y-2 flex-1">
          <div className="h-4 w-32 bg-gray-200 dark:bg-slate-700 rounded" />
          <div className="h-3 w-24 bg-gray-200 dark:bg-slate-700 rounded" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-5">
        {[1, 2, 3, 4].map((j) => (
          <div key={j} className="space-y-1">
            <div className="h-3 w-16 bg-gray-200 dark:bg-slate-700 rounded" />
            <div className="h-4 w-12 bg-gray-200 dark:bg-slate-700 rounded" />
          </div>
        ))}
      </div>
      <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded" />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ClientPortfolio() {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data } = await axios.get(`${API}/clients`);
        setClients(data.clients || []);
      } catch {
        setError("Clients load nahi hue. Backend chal raha hai?");
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const stats = useMemo(() => {
    const activeClients = clients.length;

    const totalRevenueManaged = clients.reduce((sum, client) => {
      return sum + safeBudget(client?.profile?.budget);
    }, 0);

    const liveCampaigns = 12;

    const avgHealth =
      clients.length > 0
        ? Math.round(
            clients.reduce((sum, client) => {
              const channelCount = client?.channels?.channels?.length || 0;
              const hasGoals = client?.goals?.primaryGoals?.length > 0 ? 1 : 0;
              const completed = client?.status === "completed" ? 1 : 0;

              let score = 50;
              score += Math.min(channelCount * 8, 24);
              score += hasGoals ? 16 : 0;
              score += completed ? 10 : 0;

              return sum + Math.min(score, 100);
            }, 0) / clients.length
          )
        : 0;

    return [
      { title: "Active Clients", value: String(activeClients), icon: "👥" },
      {
        title: "Total Revenue Managed",
        value: 
        // formatCurrency(totalRevenueManaged)
       "N/A"
        ,
        icon: "📈",
      },
      { title: "Live Campaigns", value: String(liveCampaigns), icon: "🎯" },
      // { title: "Avg Client Health", value: `${avgHealth}%`, icon: "⚡" },
      { title: "Total Leads", value: `90`, icon: "⚡" },
    ];
  }, [clients]);

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-5 md:space-y-6 lg:space-y-8 bg-gray-50 dark:bg-[#020817] min-h-screen">
      {/* HEADER */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
            Client Portfolio
          </h1>
          <p className="text-xs md:text-sm text-gray-500 mt-0.5">
            {loading
              ? "Loading..."
              : `${clients.length} clients · Multi-tenant management`}
          </p>
        </div>

        <Link href="/client-onboarding">
          <button className="w-full sm:w-auto px-4 md:px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition-colors text-center">
            + Onboard New Client
          </button>
        </Link>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 lg:gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="p-4 md:p-5 lg:p-6 rounded-xl border bg-white dark:bg-[#0b1220] dark:border-slate-800"
          >
            <div className="text-xl md:text-2xl mb-2 md:mb-3">{stat.icon}</div>
            <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </div>
            <p className="text-xs md:text-sm text-gray-500 mt-1">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* ERROR */}
      {error && (
        <div className="p-3 md:p-4 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 text-xs md:text-sm">
          ⚠️ {error}
        </div>
      )}

      {/* LOADING */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[1, 2, 3].map((i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {/* CLIENT GRID */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {clients.map((client, i) => {
            const name = client?.profile?.companyName || "Unnamed Client";
            const industry = client?.profile?.industry || "—";
            const status = client?.status || "draft";
            const step = client?.currentStep || 1;
            const letter = name.charAt(0).toUpperCase();
            const color = avatarColors[i % avatarColors.length];

            return (
              <div
                key={client._id}
                className="p-5 md:p-6 rounded-xl border bg-white dark:bg-[#0b1220] dark:border-slate-800 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4 md:mb-5 gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                    >
                      {letter}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm md:text-base text-gray-900 dark:text-white truncate">
                        {name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {industry} · {client._id.slice(-6).toUpperCase()}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-xs px-2.5 py-1 rounded-full shrink-0 ${statusColor(
                      status
                    )}`}
                  >
                    {statusLabel(status)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs md:text-sm mb-4 md:mb-5 flex-1">
                  <div>
                    <p className="text-gray-500 dark:text-slate-400">
                      Revenue Model
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white mt-0.5">
                      {client?.profile?.revenueModel || "—"}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 dark:text-slate-400">Budget</p>
                    <p className="font-semibold text-emerald-500 mt-0.5">
                      {client?.profile?.budget
                        ? formatCurrency(safeBudget(client.profile.budget))
                        : "—"}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 dark:text-slate-400">Market</p>
                    <p className="font-semibold text-gray-900 dark:text-white mt-0.5 truncate">
                      {client?.profile?.market || "—"}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 dark:text-slate-400">Channels</p>
                    <p className="font-semibold text-gray-900 dark:text-white mt-0.5">
                      {client?.channels?.channels?.length
                        ? `${client.channels.channels.length} Active`
                        : "—"}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="h-1.5 md:h-2 rounded bg-gray-200 dark:bg-slate-700">
                    <div
                      className={`h-full rounded transition-all ${
                        status === "completed"
                          ? "bg-emerald-500"
                          : status === "in_progress"
                          ? "bg-amber-500"
                          : "bg-gray-400"
                      }`}
                      style={{
                        width: `${
                          status === "completed" ? 100 : (step - 1) * 20
                        }%`,
                      }}
                    />
                  </div>

                  <p className="text-xs text-gray-500 dark:text-slate-500 mt-1.5">
                    {status === "completed"
                      ? "Onboarding Complete ✓"
                      : `Onboarding: Step ${step}/5`}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-2 mt-auto pt-1">
                  <Link
                    href={`/clients/${client._id}`}
                    className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-md border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 transition-colors"
                  >
                    <ExternalLink size={13} />
                    Details
                  </Link>

                  <button
                    onClick={() =>
                      router.push(`/client-onboarding?edit=${client._id}`)
                    }
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs transition-colors"
                  >
                    <Pencil size={13} />
                    Edit
                  </button>
                </div>
              </div>
            );
          })}

          <Link href="/client-onboarding">
            <div className="border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-gray-400 p-8 md:p-10 cursor-pointer hover:border-indigo-400 hover:text-indigo-400 transition-colors min-h-[180px] md:min-h-[220px]">
              <div className="text-2xl md:text-3xl mb-2 md:mb-3">＋</div>
              <p className="font-medium text-sm md:text-base">
                Onboard New Client
              </p>
              <p className="text-xs mt-1 text-center">
                Start 5-step setup wizard
              </p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}