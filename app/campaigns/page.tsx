// // "use client";

// // import {
// //   Megaphone,
// //   DollarSign,
// //   Target,
// //   Percent,
// //   AlertTriangle,
// //   Download,
// //   Plus,
// //   MoreHorizontal,
// // } from "lucide-react";

// // import {
// //   PieChart,
// //   Pie,
// //   Cell,
// //   Tooltip,
// //   Legend,
// //   ResponsiveContainer,
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// // } from "recharts";

// // export default function CampaignManagement() {
// //     const channelData = [
// //   { name: "Meta Ads", value: 40 },
// //   { name: "Google Ads", value: 35 },
// //   { name: "Instagram", value: 15 },
// //   { name: "Email", value: 7 },
// //   { name: "WhatsApp", value: 3 },
// // ];

// // const COLORS = [
// //   "#4f46e5",
// //   "#3b82f6",
// //   "#ec4899",
// //   "#f59e0b",
// //   "#10b981",
// // ];

// // const trendData = [
// //   { week: "W1", roas: 3.1, cpl: 19 },
// //   { week: "W2", roas: 3.3, cpl: 18 },
// //   { week: "W3", roas: 3.0, cpl: 21 },
// //   { week: "W4", roas: 3.6, cpl: 17 },
// //   { week: "W5", roas: 3.4, cpl: 18.5 },
// //   { week: "W6", roas: 3.9, cpl: 16 },
// //   { week: "W7", roas: 3.7, cpl: 17.5 },
// //   { week: "W8", roas: 3.4, cpl: 18.5 },
// // ];

// //   const campaigns = [
// //     {
// //       name: "RE360 Premium Listings",
// //       client: "RealEstate360",
// //       channel: "Meta",
// //       objective: "Lead Gen",
// //       budget: "₹80K",
// //       spend: "₹62K",
// //       leads: 214,
// //       cpl: "₹290",
// //       roas: "6.1x",
// //       status: "Live",
// //     },
// //     {
// //       name: "EduTech Admissions Q1",
// //       client: "EduTech Pro",
// //       channel: "Google",
// //       objective: "Admissions",
// //       budget: "₹60K",
// //       spend: "₹58K",
// //       leads: 187,
// //       cpl: "₹310",
// //       roas: "4.2x",
// //       status: "Live",
// //     },
// //     {
// //       name: "HealthFirst Clinic Booking",
// //       client: "HealthFirst",
// //       channel: "Meta",
// //       objective: "Bookings",
// //       budget: "₹40K",
// //       spend: "₹44K",
// //       leads: 92,
// //       cpl: "₹478",
// //       roas: "2.1x",
// //       status: "Alert",
// //     },
// //     {
// //       name: "FinanceHub Personal Loan",
// //       client: "FinanceHub",
// //       channel: "Google",
// //       objective: "Lead Gen",
// //       budget: "₹70K",
// //       spend: "₹48K",
// //       leads: 162,
// //       cpl: "₹296",
// //       roas: "3.9x",
// //       status: "Live",
// //     },
// //     {
// //       name: "FashionFwd Summer Sale",
// //       client: "FashionForward",
// //       channel: "Instagram",
// //       objective: "Sales",
// //       budget: "₹30K",
// //       spend: "₹28K",
// //       leads: 48,
// //       cpl: "₹583",
// //       roas: "1.3x",
// //       status: "Risk",
// //     },
// //   ];

// //   return (
// //     <div className="p-8 min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white">

// //       {/* HEADER */}

// //       <div className="flex justify-between items-start mb-6">

// //         <div>
// //           <h1 className="text-2xl font-bold">Campaign Management</h1>
// //           <p className="text-sm text-gray-500 dark:text-slate-400">
// //             38 active campaigns across 8 clients
// //           </p>
// //         </div>

// //         <div className="flex gap-3">
// //           <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-sm">
// //             <Download size={16} />
// //             Export
// //           </button>

// //           <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">
// //             <Plus size={16} />
// //             New Campaign
// //           </button>
// //         </div>

// //       </div>

// //       {/* STATS */}

// //       <div className="grid grid-cols-4 gap-6 mb-6">

// //         {[
// //           {
// //             icon: Megaphone,
// //             value: "38",
// //             label: "Active Campaigns",
// //           },
// //           {
// //             icon: DollarSign,
// //             value: "₹18.4L",
// //             label: "Total Ad Spend MTD",
// //           },
// //           {
// //             icon: Target,
// //             value: "2,847",
// //             label: "Total Leads Generated",
// //           },
// //           {
// //             icon: Percent,
// //             value: "2.4%",
// //             label: "Avg CTR",
// //             sub: "+0.3%",
// //           },
// //         ].map((stat, i) => {
// //           const Icon = stat.icon;

// //           return (
// //             <div
// //               key={i}
// //               className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]"
// //             >
// //               <Icon className="mb-4 text-indigo-500" />

// //               <p className="text-2xl font-bold">{stat.value}</p>
// //               <p className="text-sm text-gray-500">{stat.label}</p>

// //               {stat.sub && (
// //                 <p className="text-xs text-green-500">{stat.sub}</p>
// //               )}
// //             </div>
// //           );
// //         })}

// //       </div>

// //       {/* ALERT */}

// //       <div className="flex items-center gap-3 p-4 mb-6 rounded-lg border border-amber-300 bg-amber-50 dark:bg-[#1f1a12] dark:border-amber-800">

// //         <AlertTriangle className="text-amber-500" size={18} />

// //         <p className="text-sm">
// //           <span className="font-medium">
// //             Campaign Health Monitor — 3 campaigns need attention
// //           </span>{" "}
// //           EduTech Retargeting (High CPL) · HealthFirst Search (Budget Overspend)
// //           · FashionForward Awareness (Low CTR 0.3%)
// //         </p>

// //       </div>

// //       {/* TABLE */}

// //       <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

// //         <div className="flex justify-between items-center mb-4">

// //           <h3 className="font-semibold">Campaign Registry</h3>

// //           <div className="flex gap-2 text-sm">

// //             <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-slate-700">
// //               All Clients
// //             </button>

// //             <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-slate-700">
// //               All Channels
// //             </button>

// //           </div>

// //         </div>

// //         <table className="w-full text-sm">

// //           <thead className="text-gray-500 border-b border-gray-200 dark:border-slate-800">

// //             <tr className="text-left">
// //               <th className="py-3">Campaign</th>
// //               <th>Client</th>
// //               <th>Channel</th>
// //               <th>Objective</th>
// //               <th>Budget</th>
// //               <th>Spend</th>
// //               <th>Leads</th>
// //               <th>CPL</th>
// //               <th>ROAS</th>
// //               <th>Status</th>
// //               <th></th>
// //             </tr>

// //           </thead>

// //           <tbody className="divide-y divide-gray-200 dark:divide-slate-800">

// //             {campaigns.map((c, i) => (
// //               <tr key={i}>

// //                 <td className="py-3 font-medium">{c.name}</td>
// //                 <td>{c.client}</td>

// //                 <td>
// //                   <span className="px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-slate-800">
// //                     {c.channel}
// //                   </span>
// //                 </td>

// //                 <td>{c.objective}</td>
// //                 <td>{c.budget}</td>
// //                 <td>{c.spend}</td>
// //                 <td>{c.leads}</td>

// //                 <td
// //                   className={`${
// //                     c.cpl.includes("583") || c.cpl.includes("478")
// //                       ? "text-red-500"
// //                       : "text-green-500"
// //                   }`}
// //                 >
// //                   {c.cpl}
// //                 </td>

// //                 <td className="text-green-500">{c.roas}</td>

// //                 <td>
// //                   {c.status === "Live" && (
// //                     <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
// //                       Live
// //                     </span>
// //                   )}

// //                   {c.status === "Alert" && (
// //                     <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
// //                       Alert
// //                     </span>
// //                   )}

// //                   {c.status === "Risk" && (
// //                     <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">
// //                       At Risk
// //                     </span>
// //                   )}
// //                 </td>

// //                 <td>
// //                   <MoreHorizontal size={16} />
// //                 </td>

// //               </tr>
// //             ))}

// //           </tbody>

// //         </table>

// //       </div>

// //       <div className="grid grid-cols-2 gap-6 my-3">

// //       {/* CHANNEL DISTRIBUTION */}

// //       <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

// //         <h3 className="font-semibold mb-6 text-gray-900 dark:text-white">
// //           Channel Distribution
// //         </h3>

// //         <div className="h-[260px]">

// //           <ResponsiveContainer width="100%" height="100%">

// //             <PieChart>

// //               <Pie
// //                 data={channelData}
// //                 cx="40%"
// //                 cy="50%"
// //                 innerRadius={70}
// //                 outerRadius={100}
// //                 paddingAngle={3}
// //                 dataKey="value"
// //               >

// //                 {channelData.map((entry, index) => (
// //                   <Cell key={index} fill={COLORS[index]} />
// //                 ))}

// //               </Pie>

// //               <Tooltip />
// //               <Legend layout="vertical" align="right" verticalAlign="middle" />

// //             </PieChart>

// //           </ResponsiveContainer>

// //         </div>

// //       </div>

// //       {/* PERFORMANCE TREND */}

// //       <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

// //         <h3 className="font-semibold mb-6 text-gray-900 dark:text-white">
// //           Campaign Performance Trend
// //         </h3>

// //         <div className="h-[260px]">

// //           <ResponsiveContainer width="100%" height="100%">

// //             <LineChart data={trendData}>

// //               <CartesianGrid strokeDasharray="3 3" />

// //               <XAxis dataKey="week" />
// //               <YAxis />

// //               <Tooltip />

// //               <Line
// //                 type="monotone"
// //                 dataKey="roas"
// //                 stroke="#10b981"
// //                 strokeWidth={3}
// //                 name="ROAS"
// //               />

// //               <Line
// //                 type="monotone"
// //                 dataKey="cpl"
// //                 stroke="#f59e0b"
// //                 strokeWidth={3}
// //                 name="CPL (×10)"
// //               />

// //             </LineChart>

// //           </ResponsiveContainer>

// //         </div>

// //       </div>

// //     </div>

// //     </div>
// //   );
// // }


// "use client";

// import { useEffect, useState, useCallback } from "react";
// import axios from "axios";
// import { toast } from "sonner";
// import {
//   Megaphone, DollarSign, Target, Percent, AlertTriangle,
//   Download, Plus, MoreHorizontal, X, Loader2, ChevronDown,
// } from "lucide-react";
// import {
//   PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
//   LineChart, Line, XAxis, YAxis, CartesianGrid,
// } from "recharts";

// const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// // ─── Constants ────────────────────────────────────────────────────────────────
// const CHANNELS   = ["Meta", "Google", "Instagram", "YouTube", "Email", "WhatsApp", "LinkedIn", "Programmatic"];
// const OBJECTIVES = ["Lead Gen", "Admissions", "Bookings", "Sales", "Brand Awareness", "App Installs", "Traffic"];
// const STATUSES   = ["Draft", "Live", "Paused", "Alert", "Risk", "Completed"];

// const COLORS = ["#4f46e5","#3b82f6","#ec4899","#f59e0b","#10b981"];

// const trendData = [
//   { week: "W1", roas: 3.1, cpl: 19 },{ week: "W2", roas: 3.3, cpl: 18 },
//   { week: "W3", roas: 3.0, cpl: 21 },{ week: "W4", roas: 3.6, cpl: 17 },
//   { week: "W5", roas: 3.4, cpl: 18.5 },{ week: "W6", roas: 3.9, cpl: 16 },
//   { week: "W7", roas: 3.7, cpl: 17.5 },{ week: "W8", roas: 3.4, cpl: 18.5 },
// ];

// // ─── Helpers ──────────────────────────────────────────────────────────────────
// const statusBadge = (status: string) => {
//   const map: Record<string, string> = {
//     Live:      "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
//     Paused:    "bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-slate-300",
//     Alert:     "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
//     Risk:      "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
//     Completed: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
//     Draft:     "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
//   };
//   return map[status] || map.Draft;
// };

// const inputCls = "w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all";
// const labelCls = "block text-xs font-medium text-gray-500 dark:text-slate-400 mb-1.5";

// // ─── Empty Form State ─────────────────────────────────────────────────────────
// const emptyForm = {
//   name: "", clientName: "", clientId: "",
//   channel: "", objective: "", budget: "",
//   startDate: "", endDate: "", status: "Draft", notes: "",
// };

// // ═══════════════════════════════════════════════════════════════════════════════
// // NEW CAMPAIGN MODAL
// // ═══════════════════════════════════════════════════════════════════════════════
// function NewCampaignModal({
//   onClose, onCreated, clients,
// }: {
//   onClose: () => void;
//   onCreated: (c: any) => void;
//   clients: any[];
// }) {
//   const [form, setForm]       = useState(emptyForm);
//   const [loading, setLoading] = useState(false);

//   const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

//   // Jab client select ho toh clientName bhi set karo
//   const handleClientChange = (id: string) => {
//     const client = clients.find(c => c._id === id);
//     set("clientId", id);
//     set("clientName", client?.profile?.companyName || "");
//   };

//   const handleSubmit = async () => {
//     if (!form.name.trim())    return toast.error("Campaign name required hai");
//     if (!form.channel)        return toast.error("Channel select karo");
//     if (!form.objective)      return toast.error("Objective select karo");
//     if (!form.budget)         return toast.error("Budget daalo");

//     setLoading(true);
//     try {
//       const { data } = await axios.post(`${API}/campaigns`, {
//         ...form,
//         budget: Number(form.budget),
//       });
//       toast.success("Campaign create ho gaya! 🎉");
//       onCreated(data.campaign);
//       onClose();
//     } catch (err: any) {
//       toast.error(err?.response?.data?.message || "Campaign create nahi hua");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     // Backdrop
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
//       onClick={e => e.target === e.currentTarget && onClose()}>

//       {/* Blur overlay */}
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

//       {/* Modal */}
//       <div className="relative z-10 w-full max-w-2xl bg-white dark:bg-[#0d1629] rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700/60 overflow-hidden">

//         {/* Header */}
//         <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-slate-800">
//           <div>
//             <h2 className="text-lg font-semibold text-gray-900 dark:text-white">New Campaign</h2>
//             <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">Fill details to launch a new campaign</p>
//           </div>
//           <button onClick={onClose}
//             className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
//             <X size={16} className="text-gray-500" />
//           </button>
//         </div>

//         {/* Body */}
//         <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">

//           {/* Campaign Name */}
//           <div>
//             <label className={labelCls}>Campaign Name *</label>
//             <input value={form.name} onChange={e => set("name", e.target.value)}
//               placeholder="e.g. EduTech Admissions Q2"
//               className={inputCls} />
//           </div>

//           {/* Client */}
//           <div>
//             <label className={labelCls}>Client</label>
//             <select value={form.clientId} onChange={e => handleClientChange(e.target.value)} className={inputCls}>
//               <option value="">Select Client (optional)</option>
//               {clients.map(c => (
//                 <option key={c._id} value={c._id}>
//                   {c?.profile?.companyName || "Unnamed"}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Channel + Objective */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className={labelCls}>Channel *</label>
//               <select value={form.channel} onChange={e => set("channel", e.target.value)} className={inputCls}>
//                 <option value="">Select Channel</option>
//                 {CHANNELS.map(c => <option key={c}>{c}</option>)}
//               </select>
//             </div>
//             <div>
//               <label className={labelCls}>Objective *</label>
//               <select value={form.objective} onChange={e => set("objective", e.target.value)} className={inputCls}>
//                 <option value="">Select Objective</option>
//                 {OBJECTIVES.map(o => <option key={o}>{o}</option>)}
//               </select>
//             </div>
//           </div>

//           {/* Budget + Status */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className={labelCls}>Budget (₹) *</label>
//               <input value={form.budget} onChange={e => set("budget", e.target.value)}
//                 placeholder="e.g. 50000" type="number"
//                 className={inputCls} />
//             </div>
//             <div>
//               <label className={labelCls}>Status</label>
//               <select value={form.status} onChange={e => set("status", e.target.value)} className={inputCls}>
//                 {STATUSES.map(s => <option key={s}>{s}</option>)}
//               </select>
//             </div>
//           </div>

//           {/* Dates */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className={labelCls}>Start Date</label>
//               <input value={form.startDate} onChange={e => set("startDate", e.target.value)}
//                 type="date" className={inputCls} />
//             </div>
//             <div>
//               <label className={labelCls}>End Date</label>
//               <input value={form.endDate} onChange={e => set("endDate", e.target.value)}
//                 type="date" className={inputCls} />
//             </div>
//           </div>

//           {/* Notes */}
//           <div>
//             <label className={labelCls}>Notes</label>
//             <textarea value={form.notes} onChange={e => set("notes", e.target.value)}
//               rows={3} placeholder="Campaign goals, target audience, special instructions..."
//               className={inputCls} />
//           </div>

//         </div>

//         {/* Footer */}
//         <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-[#0a1122]">
//           <button onClick={onClose}
//             className="px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-sm text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
//             Cancel
//           </button>
//           <button onClick={handleSubmit} disabled={loading}
//             className="flex items-center gap-2 px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors disabled:opacity-60">
//             {loading ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />}
//             {loading ? "Creating..." : "Create Campaign"}
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

// // ═══════════════════════════════════════════════════════════════════════════════
// // MAIN PAGE
// // ═══════════════════════════════════════════════════════════════════════════════
// export default function CampaignManagement() {
//   const [campaigns, setCampaigns]   = useState<any[]>([]);
//   const [clients, setClients]       = useState<any[]>([]);
//   const [stats, setStats]           = useState<any>({});
//   const [loading, setLoading]       = useState(true);
//   const [showModal, setShowModal]   = useState(false);
//   const [filterClient, setFilterClient] = useState("");
//   const [filterChannel, setFilterChannel] = useState("");

//   // ─── Fetch campaigns + clients + stats ──────────────────────────────────────
//   const fetchAll = useCallback(async () => {
//     setLoading(true);
//     try {
//       const params: any = {};
//       if (filterClient)  params.clientId = filterClient;
//       if (filterChannel) params.channel  = filterChannel;

//       const [camRes, clientRes, statRes] = await Promise.all([
//         axios.get(`${API}/campaigns`, { params }),
//         axios.get(`${API}/clients`),
//         axios.get(`${API}/campaigns/stats`),
//       ]);

//       setCampaigns(camRes.data.campaigns || []);
//       setClients(clientRes.data.clients  || []);
//       setStats(statRes.data.stats        || {});
//     } catch (err) {
//       toast.error("Data load nahi hua");
//     } finally {
//       setLoading(false);
//     }
//   }, [filterClient, filterChannel]);

//   useEffect(() => { fetchAll(); }, [fetchAll]);

//   // Naya campaign list mein add karo
//   const handleCreated = (newCampaign: any) => {
//     setCampaigns(prev => [newCampaign, ...prev]);
//   };

//   // Channel distribution for pie chart
//   const channelData = CHANNELS
//     .map(ch => ({ name: ch, value: campaigns.filter(c => c.channel === ch).length }))
//     .filter(d => d.value > 0);

//   // ─── Stat Cards ──────────────────────────────────────────────────────────────
//   const statCards = [
//     { icon: Megaphone,   value: stats.total     ?? campaigns.length, label: "Active Campaigns" },
//     { icon: DollarSign,  value: stats.totalSpend ? `₹${(stats.totalSpend/100000).toFixed(1)}L` : "₹0", label: "Total Ad Spend MTD" },
//     { icon: Target,      value: stats.totalLeads ?? 0,               label: "Total Leads Generated" },
//     { icon: Percent,     value: `${stats.avgCtr ?? 0}%`,             label: "Avg CTR", sub: stats.live ? `${stats.live} Live` : "" },
//   ];

//   return (
//     <div className="p-8 min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white">

//       {/* HEADER */}
//       <div className="flex justify-between items-start mb-6">
//         <div>
//           <h1 className="text-2xl font-bold">Campaign Management</h1>
//           <p className="text-sm text-gray-500 dark:text-slate-400">
//             {loading ? "Loading..." : `${campaigns.length} campaigns across ${clients.length} clients`}
//           </p>
//         </div>
//         <div className="flex gap-3">
//           <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
//             <Download size={16} /> Export
//           </button>
//           <button
//             onClick={() => setShowModal(true)}
//             className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm transition-colors">
//             <Plus size={16} /> New Campaign
//           </button>
//         </div>
//       </div>

//       {/* STAT CARDS */}
//       <div className="grid grid-cols-4 gap-6 mb-6">
//         {statCards.map((stat, i) => {
//           const Icon = stat.icon;
//           return (
//             <div key={i} className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
//               <Icon className="mb-4 text-indigo-500" size={20} />
//               <p className="text-2xl font-bold">{stat.value}</p>
//               <p className="text-sm text-gray-500 dark:text-slate-400">{stat.label}</p>
//               {stat.sub && <p className="text-xs text-emerald-500 mt-1">{stat.sub}</p>}
//             </div>
//           );
//         })}
//       </div>

//       {/* ALERT */}
//       {stats.alert > 0 && (
//         <div className="flex items-center gap-3 p-4 mb-6 rounded-lg border border-amber-300 bg-amber-50 dark:bg-[#1f1a12] dark:border-amber-800">
//           <AlertTriangle className="text-amber-500 shrink-0" size={18} />
//           <p className="text-sm">
//             <span className="font-medium">Campaign Health Monitor — {stats.alert + (stats.risk || 0)} campaigns need attention</span>
//           </p>
//         </div>
//       )}

//       {/* TABLE */}
//       <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6 mb-6">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="font-semibold">Campaign Registry</h3>
//           <div className="flex gap-2 text-sm">
//             {/* Client Filter */}
//             <select
//               value={filterClient}
//               onChange={e => setFilterClient(e.target.value)}
//               className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm outline-none"
//             >
//               <option value="">All Clients</option>
//               {clients.map(c => (
//                 <option key={c._id} value={c._id}>
//                   {c?.profile?.companyName || "Unnamed"}
//                 </option>
//               ))}
//             </select>
//             {/* Channel Filter */}
//             <select
//               value={filterChannel}
//               onChange={e => setFilterChannel(e.target.value)}
//               className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm outline-none"
//             >
//               <option value="">All Channels</option>
//               {CHANNELS.map(ch => <option key={ch}>{ch}</option>)}
//             </select>
//           </div>
//         </div>

//         {loading ? (
//           <div className="space-y-3">
//             {[1,2,3].map(i => (
//               <div key={i} className="h-12 rounded-lg bg-gray-100 dark:bg-slate-800 animate-pulse" />
//             ))}
//           </div>
//         ) : campaigns.length === 0 ? (
//           <div className="text-center py-12 text-gray-400 dark:text-slate-500">
//             <Megaphone size={40} className="mx-auto mb-3 opacity-30" />
//             <p className="font-medium">Koi campaign nahi mila</p>
//             <p className="text-sm mt-1">Upar "New Campaign" button dabao</p>
//           </div>
//         ) : (
//           <table className="w-full text-sm">
//             <thead className="text-gray-500 border-b border-gray-200 dark:border-slate-800">
//               <tr className="text-left">
//                 <th className="py-3 font-medium">Campaign</th>
//                 <th className="font-medium">Client</th>
//                 <th className="font-medium">Channel</th>
//                 <th className="font-medium">Objective</th>
//                 <th className="font-medium">Budget</th>
//                 <th className="font-medium">Spend</th>
//                 <th className="font-medium">Leads</th>
//                 <th className="font-medium">CPL</th>
//                 <th className="font-medium">ROAS</th>
//                 <th className="font-medium">Status</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
//               {campaigns.map((c, i) => (
//                 <tr key={c._id || i} className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
//                   <td className="py-3 font-medium text-gray-900 dark:text-white">{c.name}</td>
//                   <td className="text-gray-600 dark:text-slate-400">{c.clientName || "—"}</td>
//                   <td>
//                     <span className="px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300">
//                       {c.channel}
//                     </span>
//                   </td>
//                   <td className="text-gray-600 dark:text-slate-400">{c.objective}</td>
//                   <td className="text-gray-900 dark:text-white">₹{Number(c.budget || 0).toLocaleString("en-IN")}</td>
//                   <td className="text-gray-600 dark:text-slate-400">₹{Number(c.spend || 0).toLocaleString("en-IN")}</td>
//                   <td className="text-gray-900 dark:text-white">{c.leads || 0}</td>
//                   <td className={c.cpl > 400 ? "text-red-500" : "text-emerald-500"}>
//                     {c.cpl ? `₹${c.cpl}` : "—"}
//                   </td>
//                   <td className="text-emerald-500">{c.roas ? `${c.roas}x` : "—"}</td>
//                   <td>
//                     <span className={`px-2 py-1 text-xs rounded-full font-medium ${statusBadge(c.status)}`}>
//                       {c.status}
//                     </span>
//                   </td>
//                   <td>
//                     <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
//                       <MoreHorizontal size={16} className="text-gray-400" />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {/* CHARTS */}
//       <div className="grid grid-cols-2 gap-6">
//         {/* Channel Distribution */}
//         <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">
//           <h3 className="font-semibold mb-6 text-gray-900 dark:text-white">Channel Distribution</h3>
//           {channelData.length === 0 ? (
//             <div className="h-[260px] flex items-center justify-center text-gray-400 dark:text-slate-500 text-sm">
//               Campaigns add karo toh chart dikhega
//             </div>
//           ) : (
//             <div className="h-[260px]">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie data={channelData} cx="40%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={3} dataKey="value">
//                     {channelData.map((_, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
//                   </Pie>
//                   <Tooltip />
//                   <Legend layout="vertical" align="right" verticalAlign="middle" />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           )}
//         </div>

//         {/* Performance Trend */}
//         <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">
//           <h3 className="font-semibold mb-6 text-gray-900 dark:text-white">Campaign Performance Trend</h3>
//           <div className="h-[260px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={trendData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
//                 <XAxis dataKey="week" tick={{ fontSize: 12 }} />
//                 <YAxis tick={{ fontSize: 12 }} />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="roas" stroke="#10b981" strokeWidth={3} name="ROAS" dot={false} />
//                 <Line type="monotone" dataKey="cpl"  stroke="#f59e0b" strokeWidth={3} name="CPL"  dot={false} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* MODAL */}
//       {showModal && (
//         <NewCampaignModal
//           onClose={() => setShowModal(false)}
//           onCreated={handleCreated}
//           clients={clients}
//         />
//       )}

//     </div>
//   );
// }


"use client";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  Megaphone, DollarSign, Target, Percent, AlertTriangle,
  Download, Plus, MoreHorizontal, X, Loader2,
} from "lucide-react";
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid,
} from "recharts";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const CHANNELS   = ["Meta", "Google", "Instagram", "YouTube", "Email", "WhatsApp", "LinkedIn", "Programmatic"];
const OBJECTIVES = ["Lead Gen", "Admissions", "Bookings", "Sales", "Brand Awareness", "App Installs", "Traffic"];
const STATUSES   = ["Draft", "Live", "Paused", "Alert", "Risk", "Completed"];
const COLORS     = ["#4f46e5","#3b82f6","#ec4899","#f59e0b","#10b981"];

const trendData = [
  { week: "W1", roas: 3.1, cpl: 19 },{ week: "W2", roas: 3.3, cpl: 18 },
  { week: "W3", roas: 3.0, cpl: 21 },{ week: "W4", roas: 3.6, cpl: 17 },
  { week: "W5", roas: 3.4, cpl: 18.5 },{ week: "W6", roas: 3.9, cpl: 16 },
  { week: "W7", roas: 3.7, cpl: 17.5 },{ week: "W8", roas: 3.4, cpl: 18.5 },
];

const statusBadge = (status: string) => {
  const map: Record<string, string> = {
    Live:      "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    Paused:    "bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-slate-300",
    Alert:     "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    Risk:      "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    Completed: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    Draft:     "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
  };
  return map[status] || map.Draft;
};

const inputCls = "w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all";
const labelCls = "block text-xs font-medium text-gray-500 dark:text-slate-400 mb-1.5";
const emptyForm = { name: "", clientName: "", clientId: "", channel: "", objective: "", budget: "", startDate: "", endDate: "", status: "Draft", notes: "" };

// ═══════════════════════════════════════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════════════════════════════════════
function NewCampaignModal({ onClose, onCreated, clients }: { onClose: () => void; onCreated: (c: any) => void; clients: any[]; }) {
  const [form, setForm]       = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleClientChange = (id: string) => {
    const client = clients.find(c => c._id === id);
    set("clientId", id);
    set("clientName", client?.profile?.companyName || "");
  };

  const handleSubmit = async () => {
    if (!form.name.trim()) return toast.error("Campaign name required hai");
    if (!form.channel)     return toast.error("Channel select karo");
    if (!form.objective)   return toast.error("Objective select karo");
    if (!form.budget)      return toast.error("Budget daalo");
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/campaigns`, { ...form, budget: Number(form.budget) });
      toast.success("Campaign create ho gaya! 🎉");
      onCreated(data.campaign);
      onClose();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Campaign create nahi hua");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal — full-screen bottom sheet on mobile, centered on sm+ */}
      <div className="relative z-10 w-full sm:max-w-2xl bg-white dark:bg-[#0d1629] sm:rounded-2xl rounded-t-2xl shadow-2xl border-t sm:border border-gray-200 dark:border-slate-700/60 overflow-hidden max-h-[95vh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-slate-800 shrink-0">
          <div>
            <h2 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">New Campaign</h2>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">Fill details to launch a new campaign</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
            <X size={16} className="text-gray-500" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4 space-y-4 overflow-y-auto flex-1">
          <div>
            <label className={labelCls}>Campaign Name *</label>
            <input value={form.name} onChange={e => set("name", e.target.value)} placeholder="e.g. EduTech Admissions Q2" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Client</label>
            <select value={form.clientId} onChange={e => handleClientChange(e.target.value)} className={inputCls}>
              <option value="">Select Client (optional)</option>
              {clients.map(c => <option key={c._id} value={c._id}>{c?.profile?.companyName || "Unnamed"}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Channel *</label>
              <select value={form.channel} onChange={e => set("channel", e.target.value)} className={inputCls}>
                <option value="">Select Channel</option>
                {CHANNELS.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Objective *</label>
              <select value={form.objective} onChange={e => set("objective", e.target.value)} className={inputCls}>
                <option value="">Select Objective</option>
                {OBJECTIVES.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Budget (₹) *</label>
              <input value={form.budget} onChange={e => set("budget", e.target.value)} placeholder="e.g. 50000" type="number" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Status</label>
              <select value={form.status} onChange={e => set("status", e.target.value)} className={inputCls}>
                {STATUSES.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Start Date</label>
              <input value={form.startDate} onChange={e => set("startDate", e.target.value)} type="date" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>End Date</label>
              <input value={form.endDate} onChange={e => set("endDate", e.target.value)} type="date" className={inputCls} />
            </div>
          </div>
          <div>
            <label className={labelCls}>Notes</label>
            <textarea value={form.notes} onChange={e => set("notes", e.target.value)} rows={3} placeholder="Campaign goals, target audience..." className={inputCls} />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-[#0a1122] shrink-0">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-sm text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">Cancel</button>
          <button onClick={handleSubmit} disabled={loading} className="flex items-center gap-2 px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors disabled:opacity-60">
            {loading ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />}
            {loading ? "Creating..." : "Create Campaign"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════════
export default function CampaignManagement() {
  const [campaigns, setCampaigns]       = useState<any[]>([]);
  const [clients, setClients]           = useState<any[]>([]);
  const [stats, setStats]               = useState<any>({});
  const [loading, setLoading]           = useState(true);
  const [showModal, setShowModal]       = useState(false);
  const [filterClient, setFilterClient] = useState("");
  const [filterChannel, setFilterChannel] = useState("");

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const params: any = {};
      if (filterClient)  params.clientId = filterClient;
      if (filterChannel) params.channel  = filterChannel;
      const [camRes, clientRes, statRes] = await Promise.all([
        axios.get(`${API}/campaigns`, { params }),
        axios.get(`${API}/clients`),
        axios.get(`${API}/campaigns/stats`),
      ]);
      setCampaigns(camRes.data.campaigns || []);
      setClients(clientRes.data.clients  || []);
      setStats(statRes.data.stats        || {});
    } catch {
      toast.error("Data load nahi hua");
    } finally {
      setLoading(false);
    }
  }, [filterClient, filterChannel]);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  const handleCreated = (c: any) => setCampaigns(prev => [c, ...prev]);

  const channelData = CHANNELS
    .map(ch => ({ name: ch, value: campaigns.filter(c => c.channel === ch).length }))
    .filter(d => d.value > 0);

  const statCards = [
    { icon: Megaphone,  value: stats.total ?? campaigns.length, label: "Active Campaigns" },
    { icon: DollarSign, value: stats.totalSpend ? `₹${(stats.totalSpend/100000).toFixed(1)}L` : "₹0", label: "Total Ad Spend MTD" },
    { icon: Target,     value: stats.totalLeads ?? 0, label: "Total Leads Generated" },
    { icon: Percent,    value: `${stats.avgCtr ?? 0}%`, label: "Avg CTR", sub: stats.live ? `${stats.live} Live` : "" },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white">

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-5 md:mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Campaign Management</h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">
            {loading ? "Loading..." : `${campaigns.length} campaigns across ${clients.length} clients`}
          </p>
        </div>
        <div className="flex gap-2 md:gap-3">
          <button className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-xs md:text-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
            <Download size={14} /> Export
          </button>
          <button onClick={() => setShowModal(true)} className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm transition-colors">
            <Plus size={14} /> New Campaign
          </button>
        </div>
      </div>

      {/* ── STAT CARDS — 2-col mobile, 4-col desktop ────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 lg:gap-6 mb-5 md:mb-6">
        {statCards.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
              <Icon className="mb-3 text-indigo-500" size={18} />
              <p className="text-xl md:text-2xl font-bold">{stat.value}</p>
              <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">{stat.label}</p>
              {stat.sub && <p className="text-xs text-emerald-500 mt-1">{stat.sub}</p>}
            </div>
          );
        })}
      </div>

      {/* ── ALERT ───────────────────────────────────────────────────── */}
      {stats.alert > 0 && (
        <div className="flex items-start gap-3 p-3 md:p-4 mb-5 md:mb-6 rounded-lg border border-amber-300 bg-amber-50 dark:bg-[#1f1a12] dark:border-amber-800">
          <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={16} />
          <p className="text-xs md:text-sm">
            <span className="font-medium">Campaign Health Monitor — {stats.alert + (stats.risk || 0)} campaigns need attention</span>
          </p>
        </div>
      )}

      {/* ── CAMPAIGN TABLE ──────────────────────────────────────────── */}
      <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6 mb-5 md:mb-6">

        {/* Table Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
          <h3 className="font-semibold text-sm md:text-base">Campaign Registry</h3>
          <div className="flex gap-2 text-xs md:text-sm">
            <select value={filterClient} onChange={e => setFilterClient(e.target.value)}
              className="flex-1 sm:flex-none px-2.5 py-1.5 rounded-md border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs md:text-sm outline-none">
              <option value="">All Clients</option>
              {clients.map(c => <option key={c._id} value={c._id}>{c?.profile?.companyName || "Unnamed"}</option>)}
            </select>
            <select value={filterChannel} onChange={e => setFilterChannel(e.target.value)}
              className="flex-1 sm:flex-none px-2.5 py-1.5 rounded-md border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs md:text-sm outline-none">
              <option value="">All Channels</option>
              {CHANNELS.map(ch => <option key={ch}>{ch}</option>)}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="space-y-3">
            {[1,2,3].map(i => <div key={i} className="h-12 rounded-lg bg-gray-100 dark:bg-slate-800 animate-pulse" />)}
          </div>
        ) : campaigns.length === 0 ? (
          <div className="text-center py-10 text-gray-400 dark:text-slate-500">
            <Megaphone size={36} className="mx-auto mb-3 opacity-30" />
            <p className="font-medium text-sm">Koi campaign nahi mila</p>
            <p className="text-xs mt-1">Upar "New Campaign" button dabao</p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-gray-500 dark:text-slate-400 border-b border-gray-200 dark:border-slate-800">
                  <tr className="text-left">
                    {["Campaign","Client","Channel","Objective","Budget","Spend","Leads","CPL","ROAS","Status",""].map((h,i) => (
                      <th key={i} className="py-3 pr-3 font-medium whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                  {campaigns.map((c, i) => (
                    <tr key={c._id || i} className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="py-3 pr-3 font-medium text-gray-900 dark:text-white whitespace-nowrap">{c.name}</td>
                      <td className="pr-3 text-gray-600 dark:text-slate-400 whitespace-nowrap">{c.clientName || "—"}</td>
                      <td className="pr-3">
                        <span className="px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 whitespace-nowrap">{c.channel}</span>
                      </td>
                      <td className="pr-3 text-gray-600 dark:text-slate-400 whitespace-nowrap">{c.objective}</td>
                      <td className="pr-3 whitespace-nowrap">₹{Number(c.budget||0).toLocaleString("en-IN")}</td>
                      <td className="pr-3 text-gray-600 dark:text-slate-400 whitespace-nowrap">₹{Number(c.spend||0).toLocaleString("en-IN")}</td>
                      <td className="pr-3">{c.leads||0}</td>
                      <td className={`pr-3 whitespace-nowrap ${c.cpl > 400 ? "text-red-500" : "text-emerald-500"}`}>{c.cpl ? `₹${c.cpl}` : "—"}</td>
                      <td className="pr-3 text-emerald-500 whitespace-nowrap">{c.roas ? `${c.roas}x` : "—"}</td>
                      <td className="pr-3">
                        <span className={`px-2 py-1 text-xs rounded-full font-medium whitespace-nowrap ${statusBadge(c.status)}`}>{c.status}</span>
                      </td>
                      <td>
                        <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors">
                          <MoreHorizontal size={16} className="text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-3">
              {campaigns.map((c, i) => (
                <div key={c._id || i} className="p-3.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <div className="min-w-0">
                      <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">{c.name}</p>
                      <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">{c.clientName || "—"}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300">{c.channel}</span>
                      <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${statusBadge(c.status)}`}>{c.status}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div><p className="text-gray-500">Budget</p><p className="font-medium text-gray-900 dark:text-white">₹{Number(c.budget||0).toLocaleString("en-IN")}</p></div>
                    <div><p className="text-gray-500">Spend</p><p className="font-medium text-gray-900 dark:text-white">₹{Number(c.spend||0).toLocaleString("en-IN")}</p></div>
                    <div><p className="text-gray-500">Leads</p><p className="font-medium text-gray-900 dark:text-white">{c.leads||0}</p></div>
                    <div><p className="text-gray-500">CPL</p><p className={`font-medium ${c.cpl > 400 ? "text-red-500" : "text-emerald-500"}`}>{c.cpl ? `₹${c.cpl}` : "—"}</p></div>
                    <div><p className="text-gray-500">ROAS</p><p className="font-medium text-emerald-500">{c.roas ? `${c.roas}x` : "—"}</p></div>
                    <div><p className="text-gray-500">Objective</p><p className="font-medium text-gray-900 dark:text-white">{c.objective||"—"}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── CHARTS — 1-col mobile, 2-col desktop ────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

        {/* Channel Distribution */}
        <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
          <h3 className="font-semibold text-sm md:text-base mb-4 md:mb-6 text-gray-900 dark:text-white">Channel Distribution</h3>
          {channelData.length === 0 ? (
            <div className="h-[220px] md:h-[260px] flex items-center justify-center text-gray-400 dark:text-slate-500 text-sm">
              Campaigns add karo toh chart dikhega
            </div>
          ) : (
            <div className="h-[220px] md:h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={channelData} cx="40%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={3} dataKey="value">
                    {channelData.map((_, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "8px", fontSize: "12px" }} />
                  <Legend layout="vertical" align="right" verticalAlign="middle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Performance Trend */}
        <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
          <h3 className="font-semibold text-sm md:text-base mb-4 md:mb-6 text-gray-900 dark:text-white">Campaign Performance Trend</h3>
          <div className="h-[220px] md:h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="week" tick={{ fontSize: 11 }} stroke="#64748b" />
                <YAxis tick={{ fontSize: 11 }} stroke="#64748b" />
                <Tooltip contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "8px", fontSize: "12px" }} />
                <Line type="monotone" dataKey="roas" stroke="#10b981" strokeWidth={2.5} name="ROAS" dot={false} />
                <Line type="monotone" dataKey="cpl"  stroke="#f59e0b" strokeWidth={2.5} name="CPL"  dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && <NewCampaignModal onClose={() => setShowModal(false)} onCreated={handleCreated} clients={clients} />}
    </div>
  );
}