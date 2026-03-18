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

import { useState, useMemo, useCallback, useEffect } from "react";
import { toast } from "sonner";
import {
  Megaphone,
  DollarSign,
  Target,
  AlertTriangle,
  Plus,
  X,
  Loader2,
  RefreshCw,
  TrendingUp,
  MousePointerClick,
  Eye,
  Building2,
  ChevronDown,
  CheckCircle2,
  PauseCircle,
  AlertCircle,
  ExternalLink,
  Search,
  Star,
  Zap,
  MapPin,
  Briefcase,
  SlidersHorizontal,
  Phone,
  BarChart2,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import { useGet } from "@/hooks/useGet";
import { usePost } from "@/hooks/usePost";
import { log } from "util";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

// FIX 1: "all" added to Platform type
type Platform = "meta" | "google-ads" | "justdial" | "indiamart" | "all";
type DateRange = "last_7d" | "last_30d" | "last_90d" | "last_year";

interface NormalizedCampaign {
  id: string;
  platform: string;
  name: string;
  status: string;
  objective: string;
  budget: number;
  budgetRemaining: number;
  budgetType: string;
  spend: number;
  leads: number;
  impressions: number;
  clicks: number;
  reach: number;
  ctr: string | null;
  cpm: string | null;
  cpc: string | null;
  cpl: string | null;
  roas: number | null;
  startDate: string | null;
  endDate: string | null;
  insightPeriod: string | null;
  platformId: string;
  clientId: string | null;
  clientName: string;
  isAssigned: boolean;
}

interface ClientInfo {
  _id: string;
  name: string;
  industry: string;
  platforms: string[];
  monthlyBudget: number;
  budgetStr: string;
  primaryGoal: string;
  status: string;
}

interface ClientsListResponse {
  success: boolean;
  clients: ClientInfo[];
}

interface ClientCampaignsResponse {
  success: boolean;
  client: any;
  summary: {
    totalCampaigns: number;
    byPlatform: Record<string, any>;
    byStatus: Record<string, number>;
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
    meta: { campaigns: NormalizedCampaign[]; total: number };
    googleAds: { campaigns: NormalizedCampaign[]; total: number };
    justdial: any;
    indiamart: any;
  };
  data: NormalizedCampaign[];
}

interface JDLead {
  message_id: string;
  received_at: string;
  subject: string;
  from: string;
  source: string;
  name: string;
  service: string;
  area: string;
  city: string;
  state: string;
  business: string;
  branch: string;
  search_datetime: string;
  phone: string;
  email: string;
}

interface JDResponse {
  success: boolean;
  total: number;
  cached?: boolean;
  cache_age?: number;
  elapsed?: string;
  data: JDLead[];
}

// FIX 2: JDLeadWithClient interface defined here (was missing from the file)
interface JDLeadWithClient extends JDLead {
  clientId: string | null;
  clientName: string;
  isAssigned: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────
const CHANNELS = [
  "Meta",
  "Google",
  "Instagram",
  "YouTube",
  "Email",
  "WhatsApp",
  "LinkedIn",
  "Programmatic",
];
const OBJECTIVES = [
  "Lead Gen",
  "Admissions",
  "Bookings",
  "Sales",
  "Brand Awareness",
  "App Installs",
  "Traffic",
];
const STATUSES = ["Draft", "Live", "Paused", "Alert", "Risk", "Completed"];
const PIE_COLORS = [
  "#4f46e5",
  "#10b981",
  "#f59e0b",
  "#ec4899",
  "#3b82f6",
  "#8b5cf6",
  "#06b6d4",
  "#f97316",
];

const DATE_RANGES: { key: DateRange; label: string }[] = [
  { key: "last_7d", label: "Last 7 days" },
  { key: "last_30d", label: "Last 30 days" },
  { key: "last_90d", label: "Last 90 days" },
  { key: "last_year", label: "Last year" },
];

// FIX 3: "all" added to PLATFORMS array
const PLATFORMS: { key: Platform; label: string; color: string }[] = [
  { key: "meta", label: "Meta Ads", color: "bg-blue-600" },
  { key: "google-ads", label: "Google Ads", color: "bg-amber-600" },
  { key: "justdial", label: "JustDial", color: "bg-orange-600" },
  { key: "indiamart", label: "IndiaMart", color: "bg-green-600" },
];

const emptyForm = {
  name: "",
  clientId: "",
  clientName: "",
  channel: "",
  objective: "",
  budget: "",
  startDate: "",
  endDate: "",
  status: "Draft",
  notes: "",
};

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS — general
// ─────────────────────────────────────────────────────────────────────────────
const fmtRs = (n: number | null | undefined): string => {
  if (!n) return "—";
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)}L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(1)}k`;
  return `₹${Number(n).toLocaleString("en-IN")}`;
};
const fmtNum = (n: number | null | undefined): string =>
  n ? Number(n).toLocaleString("en-IN") : "—";

const statusCfg: Record<
  string,
  { badge: string; icon: React.ElementType; dot: string }
> = {
  ACTIVE: {
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    icon: CheckCircle2,
    dot: "bg-emerald-500",
  },
  PAUSED: {
    badge: "bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-slate-300",
    icon: PauseCircle,
    dot: "bg-gray-400",
  },
  WITH_ISSUES: {
    badge:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    icon: AlertCircle,
    dot: "bg-amber-500",
  },
  ARCHIVED: {
    badge: "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
    icon: X,
    dot: "bg-slate-400",
  },
  Live: {
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    icon: CheckCircle2,
    dot: "bg-emerald-500",
  },
  Draft: {
    badge: "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
    icon: X,
    dot: "bg-slate-400",
  },
};
const getStatusCfg = (s: string) => statusCfg[s] || statusCfg.Draft;

const platformColor: Record<string, string> = {
  Meta: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "Google Ads": "bg-amber-500/10 text-amber-500 border-amber-500/20",
  JustDial: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  IndiaMart: "bg-green-500/10 text-green-500 border-green-500/20",
};

const inputCls =
  "w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all";
const labelCls =
  "block text-xs font-medium text-gray-500 dark:text-slate-400 mb-1.5";

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS — JustDial specific
// FIX 4: All JD helper functions defined (were missing from original file)
// ─────────────────────────────────────────────────────────────────────────────

/** Strip junk text from area field that JD emails include */
function cleanArea(raw: string): string {
  if (!raw) return "—";
  const clean = raw.split(/User City|View Contact|Improve your/i)[0].trim();
  return clean.replace(/[,\s]+$/, "") || raw.split(",")[0].trim();
}

/** Extract just date+time from JD's verbose datetime field */
function cleanDate(raw: string): string {
  if (!raw) return "—";
  const m = raw.match(/(\d{4}-\d{2}-\d{2})\s+(\d{2}:\d{2})/);
  if (m) return `${m[1]} ${m[2]}`;
  return raw.split(" View")[0].split(" Improve")[0].trim().slice(0, 16);
}

/** Format received_at date nicely */
function fmtReceived(raw: string): string {
  try {
    const d = new Date(raw);
    if (isNaN(d.getTime())) return raw;
    return d.toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } catch {
    return raw;
  }
}

/** Relative time ago */
function timeAgo(raw: string): string {
  try {
    const diff = Date.now() - new Date(raw).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    if (days < 7) return `${days}d ago`;
    return fmtReceived(raw).split(",")[0];
  } catch {
    return "";
  }
}

/** Check if lead name is anonymous */
const isAnon = (name: string): boolean =>
  !name || ["justdial user", "caller", ""].includes(name.toLowerCase());

/** Shorten verbose service names */
function shortService(s: string): string {
  if (!s) return "—";
  return s
    .replace(/ Services$/i, "")
    .replace(/ Designers$/i, "")
    .replace(/ Institutes$/i, "")
    .replace(/ Training Centres$/i, " Training")
    .trim();
}

/** Generate consistent avatar color from name */
function avatarColor(name: string): string {
  const colors = [
    "#f97316",
    "#3b82f6",
    "#10b981",
    "#8b5cf6",
    "#ec4899",
    "#06b6d4",
    "#f59e0b",
    "#6366f1",
  ];
  if (!name) return "#94a3b8";
  let hash = 0;
  for (const c of name) hash = (hash * 31 + c.charCodeAt(0)) % colors.length;
  return colors[hash];
}

// ─────────────────────────────────────────────────────────────────────────────
// SMALL SHARED COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
function FieldWrap({
  label,
  required = false,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelCls}>
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function StatCard({
  Icon,
  value,
  label,
  sub,
  accent = "indigo",
}: {
  Icon: React.ElementType;
  value: string | number;
  label: string;
  sub?: string;
  accent?: string;
}) {
  const ac: Record<string, string> = {
    indigo: "bg-indigo-500/10 text-indigo-500",
    emerald: "bg-emerald-500/10 text-emerald-500",
    amber: "bg-amber-500/10 text-amber-500",
    blue: "bg-blue-500/10 text-blue-500",
    orange: "bg-orange-500/10 text-orange-500",
    rose: "bg-rose-500/10 text-rose-500",
    purple: "bg-purple-500/10 text-purple-500",
  };
  return (
    <div className="p-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
      <div
        className={`w-7 h-7 rounded-lg flex items-center justify-center mb-2 ${ac[accent] || ac.indigo}`}
      >
        <Icon size={13} />
      </div>
      <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-none truncate">
        {value}
      </p>
      <p className="text-[10px] text-gray-500 dark:text-slate-400 mt-0.5 leading-tight">
        {label}
      </p>
      {sub && (
        <p className="text-[10px] text-emerald-500 mt-0.5 font-medium truncate">
          {sub}
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FIX 5: JDLeadDrawer defined (was referenced but completely missing)
// ─────────────────────────────────────────────────────────────────────────────
function JDLeadDrawer({
  lead,
  onClose,
}: {
  lead: JDLeadWithClient;
  onClose: () => void;
}) {
  const anon = isAnon(lead.name);
  const color = avatarColor(lead.name);

  return (
    <div className="fixed inset-0 z-50 flex" onClick={onClose}>
      <div className="flex-1 bg-black/40 backdrop-blur-sm" />
      <aside
        className="w-full sm:max-w-[400px] h-full bg-white dark:bg-[#0d1629] border-l border-gray-200 dark:border-slate-700 overflow-y-auto shadow-2xl"
        style={{ scrollbarWidth: "thin" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-[#0d1629] border-b border-gray-100 dark:border-slate-800 px-4 py-3 flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-bold text-sm"
            style={{ background: anon ? "#94a3b8" : color }}
          >
            {anon ? "?" : lead.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p
              className={`font-bold text-sm leading-tight ${anon ? "text-gray-400 italic" : "text-gray-900 dark:text-white"}`}
            >
              {anon ? "Anonymous User" : lead.name}
            </p>
            <p className="text-[11px] text-orange-500 font-semibold mt-0.5">
              JustDial Enquiry · {timeAgo(lead.received_at)}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 shrink-0"
          >
            <X size={15} />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Service */}
          <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/30">
            <p className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-1">
              Looking For
            </p>
            <p className="text-sm font-bold text-orange-800 dark:text-orange-200">
              {lead.service || "—"}
            </p>
          </div>

          {/* Details */}
          <section>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-2">
              Details
            </p>
            <div className="rounded-xl border border-gray-200 dark:border-slate-800 divide-y divide-gray-100 dark:divide-slate-800 overflow-hidden">
              {[
                ["Area", cleanArea(lead.area)],
                ["City", lead.city?.split("User")[0]?.trim() || "Lucknow"],
                ["Business", lead.business || "—"],
                ["Branch", lead.branch || "—"],
                ["Received", fmtReceived(lead.received_at)],
                ["Search Time", cleanDate(lead.search_datetime)],
                [
                  "Assigned To",
                  lead.isAssigned ? lead.clientName : "Unassigned",
                ],
              ].map(([l, v]) => (
                <div
                  key={l}
                  className="flex items-center justify-between px-3 py-2.5 bg-white dark:bg-[#0b1220] gap-2"
                >
                  <span className="text-xs text-gray-500 dark:text-slate-400 shrink-0">
                    {l}
                  </span>
                  <span
                    className={`text-xs font-medium text-right truncate max-w-[180px] ${l === "Assigned To" && lead.isAssigned ? "text-indigo-500" : "text-gray-900 dark:text-white"}`}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact note */}
          <div className="p-3 rounded-xl bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 text-xs text-gray-500 dark:text-slate-400">
            <p className="font-semibold text-gray-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
              <Phone size={11} /> Contact Info
            </p>
            JustDial notification emails mein phone number nahi hota. Contact ke
            liye JustDial dashboard check karo.
          </div>

          <a
            href="https://www.justdial.com/business"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-sm text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
          >
            <ExternalLink size={13} /> Open JustDial Business Dashboard
          </a>
        </div>
      </aside>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// JUSTDIAL CLIENT VIEW  (full tab with assign + analytics)
// ─────────────────────────────────────────────────────────────────────────────
function JustDialClientView({
  jdData,
  isLoading,
  isError,
  isFetching,
  refetch,
  clients,
  selectedClient,
}: {
  jdData: JDResponse | null | undefined;
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  refetch: () => void;
  clients: ClientInfo[];
  selectedClient: string;
}) {
  const [search, setSearch] = useState("");
  const [filterSvc, setFilterSvc] = useState("");
  const [filterBusiness, setFilterBusiness] = useState(""); // NEW: business filter
  const [selectedLead, setSelectedLead] = useState<JDLeadWithClient | null>(
    null,
  );
  const [assigning, setAssigning] = useState<string | null>(null);
  const [mappings, setMappings] = useState<
    Record<string, { clientId: string; clientName: string }>
  >({});
  const [loadingMaps, setLoadingMaps] = useState(true);

  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  const loadMappings = useCallback(async () => {
    try {
      const r = await fetch(`${API}/justdial`);
      const d = await r.json();
      if (d.success) {
        const map: Record<string, { clientId: string; clientName: string }> =
          {};
        d.data.forEach((m: any) => {
          map[m.messageId] = { clientId: m.clientId, clientName: m.clientName };
        });
        setMappings(map);
      }
    } catch {
      /* silent */
    } finally {
      setLoadingMaps(false);
    }
  }, [API]);

  useEffect(() => {
    loadMappings();
  }, [loadMappings]);

  // Reset business filter when client changes
  useEffect(() => {
    setFilterBusiness("");
  }, [selectedClient]);

  const rawLeads = jdData?.data || [];

  // Attach client mapping to each lead
  const leads: JDLeadWithClient[] = useMemo(
    () =>
      rawLeads.map((l: JDLead) => {
        const m = mappings[l.message_id];
        return {
          ...l,
          clientId: m?.clientId || null,
          clientName: m?.clientName || "Unassigned",
          isAssigned: !!m,
        };
      }),
    [rawLeads, mappings],
  );

  // Line ~284 pe yeh complete block replace karo

  // ✅ Sabhi special characters (spaces, dots, hyphens, underscores) remove karta hai
  const normalize = (str?: string) => {
    if (!str) return "";
    return str.toLowerCase().replace(/[^a-z0-9]/g, "");
  };

  const clientFiltered = useMemo(() => {
    if (!selectedClient) return leads;

    // ✅ selectedClient ab ID hai, to client ka name nikalo
    const selectedClientData = clients.find((c) => c._id === selectedClient);
    if (!selectedClientData) return leads;

    const normalizedSelected = normalize(selectedClientData.name);

    return leads.filter((l) => {
      const normalizedBusiness = normalize(l.business);
      return normalizedBusiness === normalizedSelected;
    });
  }, [leads, selectedClient, clients]);

  const uniqueServices = useMemo(() => {
    const map: Record<string, number> = {};
    clientFiltered.forEach((l) => {
      const s = shortService(l.service);
      map[s] = (map[s] || 0) + 1;
    });
    return Object.entries(map)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([s]) => s);
  }, [clientFiltered]);

  // Unique businesses for filter
  const uniqueBusinesses = useMemo(() => {
    const map: Record<string, number> = {};
    clientFiltered.forEach((l) => {
      const b = l.business?.trim();
      if (b) map[b] = (map[b] || 0) + 1;
    });
    return Object.entries(map)
      .sort((a, b) => b[1] - a[1])
      .map(([b]) => b);
  }, [clientFiltered]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return clientFiltered.filter((l) => {
      const ms =
        !q ||
        l.name.toLowerCase().includes(q) ||
        l.service.toLowerCase().includes(q) ||
        cleanArea(l.area).toLowerCase().includes(q);
      const mv = !filterSvc || shortService(l.service) === filterSvc;
      const mb = !filterBusiness || l.business?.trim() === filterBusiness;
      return ms && mv && mb;
    });
  }, [clientFiltered, search, filterSvc, filterBusiness]);

  // Analytics
  const analytics = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const week = new Date();
    week.setDate(week.getDate() - 7);
    const todayCount = leads.filter(
      (l) => new Date(l.received_at) >= today,
    ).length;
    const weekCount = leads.filter(
      (l) => new Date(l.received_at) >= week,
    ).length;
    const assignedCount = leads.filter((l) => l.isAssigned).length;

    const svcMap: Record<string, number> = {};
    leads.forEach((l) => {
      const s = shortService(l.service);
      svcMap[s] = (svcMap[s] || 0) + 1;
    });
    const topServices = Object.entries(svcMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([name, value]) => ({ name, value }));

    // Last 14 days trend
    const dayMap: Record<string, number> = {};
    const now = new Date();
    for (let i = 13; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      dayMap[d.toISOString().slice(0, 10)] = 0;
    }
    leads.forEach((l) => {
      const day = l.received_at
        ? new Date(l.received_at).toISOString().slice(0, 10)
        : "";
      if (dayMap[day] !== undefined) dayMap[day]++;
    });
    const dailyData = Object.entries(dayMap).map(([date, count]) => ({
      date: date.slice(5),
      count,
    }));

    const areaMap: Record<string, number> = {};
    leads.forEach((l) => {
      const a = cleanArea(l.area);
      if (a && a !== "—") areaMap[a] = (areaMap[a] || 0) + 1;
    });
    const topAreas = Object.entries(areaMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, value]) => ({
        name: name.length > 16 ? name.slice(0, 14) + "…" : name,
        value,
      }));

    return {
      todayCount,
      weekCount,
      assignedCount,
      topServices,
      dailyData,
      topAreas,
    };
  }, [leads]);

  const handleAssignJD = async (lead: JDLeadWithClient, toClientId: string) => {
    if (!toClientId) return;
    const toClient = clients.find((c) => c._id === toClientId);
    setAssigning(lead.message_id);
    try {
      const r = await fetch(`${API}/client-campaigns/assign-jd`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messageId: lead.message_id,
          subject: lead.subject,
          leadName: lead.name,
          clientId: toClientId,
        }),
      });
      const d = await r.json();
      if (d.success) {
        toast.success(
          `"${lead.name || "Lead"}" → "${toClient?.name}" assigned!`,
        );
        await loadMappings();
      } else toast.error(d.message || "Assign failed");
    } catch {
      toast.error("Server error");
    } finally {
      setAssigning(null);
    }
  };

  const handleUnassignJD = async (lead: JDLeadWithClient) => {
    setAssigning(lead.message_id);
    try {
      const r = await fetch(
        `${API}/client-campaigns/assign-jd/${lead.message_id}`,
        { method: "DELETE" },
      );
      const d = await r.json();
      if (d.success) {
        toast.success("Lead unassigned");
        await loadMappings();
      }
    } catch {
      toast.error("Server error");
    } finally {
      setAssigning(null);
    }
  };

  const isTableLoading = isLoading || loadingMaps;

  console.log("filteredfiltered => ", filtered.length);

  return (
    <div className="space-y-4">
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <StatCard
          Icon={Star}
          value={isLoading ? "…" : leads.length}
          label="Total Leads"
          accent="orange"
        />
        <StatCard
          Icon={TrendingUp}
          value={isLoading ? "…" : analytics.todayCount}
          label="Today"
          accent="emerald"
        />
        <StatCard
          Icon={Building2}
          value={isLoading ? "…" : analytics.assignedCount}
          label="Assigned"
          accent="indigo"
        />
        <StatCard
          Icon={AlertCircle}
          value={isLoading ? "…" : leads.length - analytics.assignedCount}
          label="Unassigned"
          accent="amber"
        />
      </div>

      {/* Cache badge */}
      {jdData && (
        <div className="flex items-center gap-2 flex-wrap">
          {jdData.cached ? (
            <span className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/40 text-blue-600 dark:text-blue-400">
              <Zap size={10} /> Cached ({jdData.cache_age}s old)
            </span>
          ) : (
            <span className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/40 text-emerald-600 dark:text-emerald-400">
              <Zap size={10} /> Fresh {jdData.elapsed && `· ${jdData.elapsed}`}
            </span>
          )}
          <button
            onClick={refetch}
            disabled={isFetching}
            className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-full border border-gray-200 dark:border-slate-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
          >
            <RefreshCw size={9} className={isFetching ? "animate-spin" : ""} />{" "}
            Refresh
          </button>
        </div>
      )}

      {/* Analytics Charts */}
      {!isLoading && leads.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {/* Line trend */}
          <div className="sm:col-span-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4">
            <h3 className="font-bold text-xs sm:text-sm mb-0.5 flex items-center gap-2">
              <TrendingUp size={13} className="text-orange-500" /> Lead Trend —
              Last 14 Days
            </h3>
            <p className="text-[10px] sm:text-xs text-gray-400 mb-3">
              Daily JustDial enquiries
            </p>
            <div className="h-40 sm:h-44">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={analytics.dailyData}
                  margin={{ left: 0, right: 8, top: 4, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#1e293b"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 9 }}
                    stroke="#64748b"
                  />
                  <YAxis
                    tick={{ fontSize: 9 }}
                    stroke="#64748b"
                    allowDecimals={false}
                    width={20}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      fontSize: "11px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="#f97316"
                    strokeWidth={2}
                    dot={{ fill: "#f97316", r: 3 }}
                    name="Leads"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Service pie */}
          <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4">
            <h3 className="font-bold text-xs sm:text-sm mb-0.5">
              Service Breakdown
            </h3>
            <p className="text-[10px] sm:text-xs text-gray-400 mb-3">
              Top enquiry categories
            </p>
            <div className="h-40 sm:h-44">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={analytics.topServices}
                    cx="50%"
                    cy="50%"
                    innerRadius={38}
                    outerRadius={60}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {analytics.topServices.map((_, i) => (
                      <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      fontSize: "11px",
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: "10px" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Area bar */}
          <div className="sm:col-span-2 md:col-span-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4">
            <h3 className="font-bold text-xs sm:text-sm mb-0.5 flex items-center gap-2">
              <MapPin size={13} className="text-orange-500" /> Top Areas
            </h3>
            <p className="text-[10px] sm:text-xs text-gray-400 mb-3">
              Enquiries by locality
            </p>
            <div className="h-36 sm:h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={analytics.topAreas}
                  layout="vertical"
                  margin={{ left: 0, right: 20, top: 0, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#1e293b"
                    horizontal={false}
                  />
                  <XAxis
                    type="number"
                    tick={{ fontSize: 9 }}
                    stroke="#64748b"
                    allowDecimals={false}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    tick={{ fontSize: 9 }}
                    stroke="#64748b"
                    width={90}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      fontSize: "11px",
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="#f97316"
                    radius={[0, 3, 3, 0]}
                    name="Leads"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="rounded-xl border border-orange-200 dark:border-orange-900/40 bg-white dark:bg-[#0b1220] overflow-hidden">
        {/* Toolbar */}
        <div className="px-3 sm:px-4 py-2.5 border-b border-orange-100 dark:border-orange-900/30 bg-orange-50/40 dark:bg-orange-900/10 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white flex items-center gap-2">
              <Star size={13} className="text-orange-500" /> JustDial Leads
              {!isTableLoading && (
                <span className="text-[10px] font-normal text-gray-400">
                  {filtered.length} shown
                </span>
              )}
              {filterBusiness && (
                <span className="flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 font-semibold">
                  <Briefcase size={8} />
                  {filterBusiness}
                  <button
                    onClick={() => setFilterBusiness("")}
                    className="hover:text-red-500 ml-0.5"
                  >
                    <X size={8} />
                  </button>
                </span>
              )}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 flex-1 min-w-0 max-w-xs">
              <Search size={11} className="text-gray-400 shrink-0" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Name, service, area…"
                className="bg-transparent outline-none text-xs w-full text-gray-700 dark:text-gray-200 placeholder:text-gray-400"
              />
              {search && (
                <button onClick={() => setSearch("")}>
                  <X size={10} className="text-gray-400" />
                </button>
              )}
            </div>

            {/* Business filter */}
            {uniqueBusinesses.length > 1 && (
              <div className="relative">
                <Briefcase
                  size={11}
                  className={`absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none ${filterBusiness ? "text-orange-500" : "text-gray-400"}`}
                />
                <select
                  value={filterBusiness}
                  onChange={(e) => setFilterBusiness(e.target.value)}
                  className={`pl-6 pr-2 py-1.5 rounded-lg border text-xs outline-none shrink-0 max-w-[150px] appearance-none cursor-pointer ${
                    filterBusiness
                      ? "border-orange-300 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 font-semibold"
                      : "border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-200"
                  }`}
                >
                  <option value="">All Businesses</option>
                  {uniqueBusinesses.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Service filter */}
            {uniqueServices.length > 0 && (
              <select
                value={filterSvc}
                onChange={(e) => setFilterSvc(e.target.value)}
                className="px-2 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-700 dark:text-gray-200 outline-none shrink-0 max-w-[160px]"
              >
                <option value="">All Services</option>
                {uniqueServices.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            )}

            {(search || filterSvc || filterBusiness) && (
              <button
                onClick={() => {
                  setSearch("");
                  setFilterSvc("");
                  setFilterBusiness("");
                }}
                className="flex items-center gap-1 px-2 py-1.5 text-xs rounded-lg border border-red-200 dark:border-red-900/50 text-red-500 hover:bg-red-50 transition-colors"
              >
                <X size={10} /> Clear
              </button>
            )}
          </div>
        </div>

        {isError && (
          <div className="m-3 p-3 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 flex items-center gap-2 text-xs text-red-700 dark:text-red-400">
            <AlertTriangle size={13} className="shrink-0" />
            JustDial data load nahi hua — backend{" "}
            <code className="bg-red-100 dark:bg-red-900/30 px-1 rounded">
              /api/justdial
            </code>{" "}
            check karo
            <button
              onClick={refetch}
              className="ml-auto px-2 py-0.5 rounded bg-red-500 text-white text-[10px] font-semibold"
            >
              Retry
            </button>
          </div>
        )}

        {/* FIX 6: was `isLoading|loadingMaps` (bitwise OR) — fixed to `||` (logical OR) */}
        {isTableLoading ? (
          <div className="p-3 space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-12 rounded-lg bg-gray-100 dark:bg-slate-800 animate-pulse"
              />
            ))}
            <p className="text-center text-xs text-gray-400 py-1">
              Gmail se leads fetch ho rahi hain…
            </p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 gap-2 text-gray-400">
            <Star size={24} className="opacity-30" />
            <p className="text-xs font-semibold">
              {search || filterSvc || filterBusiness
                ? "No leads match the current filters"
                : selectedClient
                  ? "No leads assigned to this client"
                  : "No JustDial leads"}
            </p>
            {(search || filterSvc || filterBusiness) && (
              <button
                onClick={() => {
                  setSearch("");
                  setFilterSvc("");
                  setFilterBusiness("");
                }}
                className="text-xs text-orange-500 hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div
              className="hidden md:block overflow-x-auto"
              style={{ scrollbarWidth: "thin" }}
            >
              <table className="w-full text-xs">
                <thead className="bg-orange-50/60 dark:bg-orange-900/10 border-b border-orange-100 dark:border-orange-900/30">
                  <tr>
                    {["Lead", "Service", "Area", "Business", "Received"].map(
                      (h) => (
                        <th
                          key={h}
                          className="px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 whitespace-nowrap"
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800/60">
                  {filtered.map((lead, i) => {
                    const anon = isAnon(lead.name);
                    const color = avatarColor(lead.name);
                    return (
                      <tr
                        key={lead.message_id || i}
                        onClick={() => setSelectedLead(lead)}
                        className="hover:bg-orange-50/40 dark:hover:bg-slate-800/40 cursor-pointer transition-colors"
                      >
                        <td className="px-3 py-2.5">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-white text-[10px] font-bold"
                              style={{ background: anon ? "#94a3b8" : color }}
                            >
                              {anon ? "?" : lead.name.charAt(0).toUpperCase()}
                            </div>
                            <span
                              className={`font-semibold truncate max-w-[110px] ${anon ? "text-gray-400 italic" : "text-gray-900 dark:text-white"}`}
                            >
                              {anon ? "Anonymous" : lead.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-3 py-2.5">
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 font-medium truncate max-w-[130px] inline-block">
                            {shortService(lead.service) || "—"}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 text-gray-600 dark:text-slate-400 max-w-[110px]">
                          <p className="truncate">{cleanArea(lead.area)}</p>
                        </td>
                        <td className="px-3 py-2.5">
                          <p className="font-medium text-gray-900 dark:text-white truncate max-w-[100px]">
                            {lead.business || "—"}
                          </p>
                        </td>
                        <td className="px-3 py-2.5 whitespace-nowrap">
                          <p className="text-gray-700 dark:text-slate-300 text-[11px]">
                            {fmtReceived(lead.received_at)}
                          </p>
                          <p className="text-[10px] text-gray-400">
                            {timeAgo(lead.received_at)}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden divide-y divide-gray-100 dark:divide-slate-800">
              {filtered.map((lead, i) => {
                const anon = isAnon(lead.name);
                const color = avatarColor(lead.name);
                return (
                  <div
                    key={lead.message_id || i}
                    onClick={() => setSelectedLead(lead)}
                    className="p-3 hover:bg-orange-50/30 dark:hover:bg-slate-800/40 cursor-pointer transition-colors"
                  >
                    <div className="flex items-start gap-2.5 mb-2">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-white text-xs font-bold"
                        style={{ background: anon ? "#94a3b8" : color }}
                      >
                        {anon ? "?" : lead.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <p
                            className={`font-semibold text-sm leading-tight ${anon ? "text-gray-400 italic" : "text-gray-900 dark:text-white"}`}
                          >
                            {anon ? "Anonymous" : lead.name}
                          </p>
                          <span className="text-[10px] text-gray-400 shrink-0">
                            {timeAgo(lead.received_at)}
                          </span>
                        </div>
                        <span className="inline-block text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 font-medium mt-0.5">
                          {shortService(lead.service) || "—"}
                        </span>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-gray-500 flex-wrap">
                          <span className="flex items-center gap-0.5">
                            <MapPin size={9} />
                            {cleanArea(lead.area)}
                          </span>
                          {lead.isAssigned && (
                            <span className="flex items-center gap-0.5 text-indigo-400 font-semibold">
                              <Building2 size={9} />
                              {lead.clientName}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2" onClick={(e) => e.stopPropagation()}>
                      {assigning === lead.message_id ? (
                        <Loader2
                          size={12}
                          className="animate-spin text-orange-400"
                        />
                      ) : (
                        <select
                          value=""
                          onChange={(e) => {
                            if (e.target.value === "__unassign__")
                              handleUnassignJD(lead);
                            else if (e.target.value)
                              handleAssignJD(lead, e.target.value);
                          }}
                          className="text-[10px] px-2 py-1 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-gray-600 dark:text-slate-300 outline-none cursor-pointer"
                        >
                          <option value="">
                            {lead.isAssigned
                              ? "Reassign…"
                              : "Assign to client…"}
                          </option>
                          <option disabled>── Clients ──</option>
                          {clients.map((cl) => (
                            <option key={cl._id} value={cl._id}>
                              {cl.name}
                            </option>
                          ))}
                          {lead.isAssigned && (
                            <option value="__unassign__">🗑 Remove</option>
                          )}
                        </select>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {selectedLead && (
        <JDLeadDrawer
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NEW CAMPAIGN MODAL
// ─────────────────────────────────────────────────────────────────────────────
function NewCampaignModal({
  onClose,
  onCreated,
  clients,
}: {
  onClose: () => void;
  onCreated: (c: any) => void;
  clients: ClientInfo[];
}) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { mutate: createCampaign, isPending } = usePost(
    "/campaign",
    "campaigns",
  );

  const set = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };
  const handleClientChange = (id: string) => {
    const c = clients.find((c) => c._id === id);
    setForm((f) => ({ ...f, clientId: id, clientName: c?.name || "" }));
  };
  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Campaign name required";
    if (!form.channel) e.channel = "Channel select karo";
    if (!form.objective) e.objective = "Objective select karo";
    if (!form.budget || isNaN(Number(form.budget)) || Number(form.budget) <= 0)
      e.budget = "Valid budget daalo";
    if (
      form.startDate &&
      form.endDate &&
      new Date(form.startDate) > new Date(form.endDate)
    )
      e.endDate = "End date must be after start date";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const handleSubmit = () => {
    if (!validate()) return;
    createCampaign(
      {
        ...form,
        budget: Number(form.budget),
        clientId: form.clientId || undefined,
        startDate: form.startDate || undefined,
        endDate: form.endDate || undefined,
      },
      {
        onSuccess: (data: any) => {
          toast.success("Campaign created! 🎉");
          onCreated(data.campaign);
          onClose();
        },
        onError: (err: any) =>
          toast.error(err?.response?.data?.message || "Create failed"),
      },
    );
  };
  const eb = (id: string) =>
    errors[id] ? "border-red-400 dark:border-red-500" : "";

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full sm:max-w-2xl bg-white dark:bg-[#0d1629] sm:rounded-2xl rounded-t-2xl shadow-2xl border-t sm:border border-gray-200 dark:border-slate-700 overflow-hidden max-h-[95dvh] flex flex-col">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-gray-200 dark:bg-slate-700 sm:hidden" />
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b border-gray-100 dark:border-slate-800 shrink-0 mt-3 sm:mt-0">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
              New Campaign
            </h2>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 hidden sm:block">
              Stored in DGCC database
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <X size={16} className="text-gray-500" />
          </button>
        </div>
        <div
          className="px-4 sm:px-5 py-4 space-y-3 sm:space-y-4 overflow-y-auto flex-1"
          style={{ scrollbarWidth: "thin" }}
        >
          <FieldWrap label="Campaign Name" required error={errors.name}>
            <input
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="e.g. AV Academy Q2"
              className={`${inputCls} ${eb("name")}`}
            />
          </FieldWrap>
          <div>
            <label className={labelCls}>Client</label>
            <select
              value={form.clientId}
              onChange={(e) => handleClientChange(e.target.value)}
              className={inputCls}
            >
              <option value="">Select Client (optional)</option>
              {clients.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FieldWrap label="Channel" required error={errors.channel}>
              <select
                value={form.channel}
                onChange={(e) => set("channel", e.target.value)}
                className={`${inputCls} ${eb("channel")}`}
              >
                <option value="">Select</option>
                {CHANNELS.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </FieldWrap>
            <FieldWrap label="Objective" required error={errors.objective}>
              <select
                value={form.objective}
                onChange={(e) => set("objective", e.target.value)}
                className={`${inputCls} ${eb("objective")}`}
              >
                <option value="">Select</option>
                {OBJECTIVES.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </FieldWrap>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FieldWrap label="Budget (₹)" required error={errors.budget}>
              <input
                value={form.budget}
                onChange={(e) => set("budget", e.target.value)}
                placeholder="50000"
                type="number"
                min="1"
                className={`${inputCls} ${eb("budget")}`}
              />
            </FieldWrap>
            <div>
              <label className={labelCls}>Status</label>
              <select
                value={form.status}
                onChange={(e) => set("status", e.target.value)}
                className={inputCls}
              >
                {STATUSES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Start Date</label>
              <input
                value={form.startDate}
                onChange={(e) => set("startDate", e.target.value)}
                type="date"
                className={inputCls}
              />
            </div>
            <FieldWrap label="End Date" error={errors.endDate}>
              <input
                value={form.endDate}
                onChange={(e) => set("endDate", e.target.value)}
                type="date"
                className={`${inputCls} ${eb("endDate")}`}
              />
            </FieldWrap>
          </div>
          <div>
            <label className={labelCls}>Notes</label>
            <textarea
              value={form.notes}
              onChange={(e) => set("notes", e.target.value)}
              rows={3}
              placeholder="Campaign goals, target audience…"
              className={`${inputCls} resize-none`}
            />
          </div>
          {form.name && form.channel && form.budget && (
            <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-700 dark:text-indigo-300">
              <span className="font-semibold">Preview: </span>"{form.name}" —{" "}
              {form.channel}
              {form.objective && ` · ${form.objective}`} · ₹
              {Number(form.budget).toLocaleString("en-IN")} · {form.status}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-[#0a1122] shrink-0">
          <button
            onClick={onClose}
            disabled={isPending}
            className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-xs sm:text-sm text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isPending}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold transition-colors disabled:opacity-60"
          >
            {isPending ? (
              <Loader2 size={13} className="animate-spin" />
            ) : (
              <Plus size={13} />
            )}
            {isPending ? "Creating…" : "Create Campaign"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CAMPAIGN DETAIL DRAWER
// ─────────────────────────────────────────────────────────────────────────────
function CampaignDrawer({
  c,
  onClose,
}: {
  c: NormalizedCampaign;
  onClose: () => void;
}) {
  const cfg = getStatusCfg(c.status);
  return (
    <div className="fixed inset-0 z-50 flex" onClick={onClose}>
      <div className="flex-1 bg-black/40 backdrop-blur-sm" />
      <aside
        className="w-full sm:max-w-[420px] md:max-w-[460px] h-full bg-white dark:bg-[#0d1629] border-l border-gray-200 dark:border-slate-700 overflow-y-auto shadow-2xl"
        style={{ scrollbarWidth: "thin" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white dark:bg-[#0d1629] border-b border-gray-100 dark:border-slate-800 px-4 sm:px-5 py-3 sm:py-4 flex items-start gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
            <Megaphone size={16} className="text-blue-500" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm sm:text-base text-gray-900 dark:text-white leading-tight line-clamp-2">
              {c.name}
            </p>
            <div className="flex items-center gap-1.5 mt-1 flex-wrap">
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full border font-semibold ${platformColor[c.platform] || "bg-gray-100 dark:bg-slate-800 text-gray-500 border-gray-200"}`}
              >
                {c.platform}
              </span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-semibold inline-flex items-center gap-1 ${cfg.badge}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                {c.status}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 shrink-0"
          >
            <X size={16} />
          </button>
        </div>
        <div className="p-4 sm:p-5 space-y-5">
          <section>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">
              Performance{" "}
              {c.insightPeriod && (
                <span className="normal-case font-normal">
                  ({c.insightPeriod})
                </span>
              )}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                {
                  label: "Spend",
                  value: fmtRs(c.spend),
                  color: "text-indigo-500",
                },
                {
                  label: "Leads",
                  value: fmtNum(c.leads),
                  color: "text-emerald-500",
                },
                {
                  label: "Impressions",
                  value: fmtNum(c.impressions),
                  color: "text-blue-500",
                },
                {
                  label: "Clicks",
                  value: fmtNum(c.clicks),
                  color: "text-amber-500",
                },
                {
                  label: "CTR",
                  value: c.ctr ? `${c.ctr}%` : "—",
                  color: "text-purple-500",
                },
                {
                  label: "CPL",
                  value: c.cpl ? fmtRs(Number(c.cpl)) : "—",
                  color:
                    c.cpl && Number(c.cpl) > 400
                      ? "text-red-500"
                      : "text-teal-500",
                },
                {
                  label: "CPM",
                  value: c.cpm ? `₹${c.cpm}` : "—",
                  color: "text-gray-500",
                },
                {
                  label: "CPC",
                  value: c.cpc ? `₹${c.cpc}` : "—",
                  color: "text-gray-500",
                },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  className="p-2.5 sm:p-3 rounded-xl bg-gray-50 dark:bg-slate-900/60 border border-gray-100 dark:border-slate-800"
                >
                  <p className="text-[10px] text-gray-400 dark:text-slate-500 mb-1">
                    {label}
                  </p>
                  <p
                    className={`text-sm sm:text-base font-bold truncate ${color}`}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">
              Budget
            </p>
            <div className="rounded-xl border border-gray-200 dark:border-slate-800 divide-y divide-gray-100 dark:divide-slate-800 overflow-hidden">
              {[
                ["Total Budget", fmtRs(c.budget)],
                ["Remaining", fmtRs(c.budgetRemaining)],
                ["Budget Type", c.budgetType || "—"],
                ["Spend", fmtRs(c.spend)],
              ].map(([l, v]) => (
                <div
                  key={l}
                  className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-white dark:bg-[#0b1220]"
                >
                  <span className="text-xs text-gray-500 dark:text-slate-400">
                    {l}
                  </span>
                  <span className="text-xs font-semibold text-gray-900 dark:text-white">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </section>
          {c.platform === "Meta" && (
            <a
              href="https://business.facebook.com/adsmanager"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-sm text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
            >
              <ExternalLink size={14} /> Open in Meta Ads Manager
            </a>
          )}
        </div>
      </aside>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function CampaignManagement() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCampaign, setSelectedCampaign] =
    useState<NormalizedCampaign | null>(null);
  const [selectedClient, setSelectedClient] = useState("");
  // FIX 7: default changed from "meta" to "all", and type now includes "all"
  const [activePlatform, setActivePlatform] = useState<Platform>("meta");
  const [dateRange, setDateRange] = useState<DateRange>("last_30d");
  const [filterStatus, setFilterStatus] = useState("");
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [assigning, setAssigning] = useState<string | null>(null);

  // ── API calls ──────────────────────────────────────────────────────────────
  const { data: clientsData } = useGet<ClientsListResponse>(
    "clients-list",
    "/client-campaigns/clients-list",
  );

  const {
    data: campaignData,
    isLoading: campaignLoading,
    isError: campaignError,
    refetch: refetchCampaigns,
    isFetching,
  } = useGet<ClientCampaignsResponse>(
    `all-campaigns-${dateRange}`,
    `/client-campaigns?date_preset=${dateRange}`,
  );

  const {
    data: jdData,
    isLoading: jdLoading,
    isError: jdError,
    isFetching: jdFetching,
    refetch: refetchJD,
  } = useGet<JDResponse>("jd-leads", "/justdial");

  const clients = clientsData?.clients || [];
  const rawCampaigns = (campaignData?.data || []) as NormalizedCampaign[];
  const jdLeads = jdData?.data || [];
  const selectedClientInfo = clients.find((c) => c._id === selectedClient);

  // ── Campaign filtering ────────────────────────────────────────────────────
  const allCampaigns = useMemo(
    () =>
      rawCampaigns.filter((c) => {
        if (selectedClient && c.clientId !== selectedClient) return false;
        if (activePlatform !== "all") {
          const tabMap: Record<string, string> = {
            meta: "Meta",
            "google-ads": "Google Ads",
            justdial: "JustDial",
            indiamart: "IndiaMart",
          };
          if (tabMap[activePlatform] && c.platform !== tabMap[activePlatform])
            return false;
        }
        return true;
      }),
    [rawCampaigns, selectedClient, activePlatform],
  );

  const summary = useMemo(() => {
    const totSpend = allCampaigns.reduce((s, c) => s + (c.spend || 0), 0);
    const totLeads = allCampaigns.reduce((s, c) => s + (c.leads || 0), 0);
    const totImp = allCampaigns.reduce((s, c) => s + (c.impressions || 0), 0);
    const totClicks = allCampaigns.reduce((s, c) => s + (c.clicks || 0), 0);
    const withCtr = allCampaigns.filter((c) => c.ctr);
    const avgCtr = withCtr.length
      ? (
          withCtr.reduce((s, c) => s + Number(c.ctr), 0) / withCtr.length
        ).toFixed(2)
      : "0.00";
    const byStatus: Record<string, number> = {};
    allCampaigns.forEach((c) => {
      byStatus[c.status] = (byStatus[c.status] || 0) + 1;
    });
    return {
      byStatus,
      totals: {
        spend: totSpend,
        leads: totLeads,
        impressions: totImp,
        clicks: totClicks,
        budget: allCampaigns.reduce((s, c) => s + (c.budget || 0), 0),
        cpl: totLeads > 0 ? (totSpend / totLeads).toFixed(2) : null,
        ctr: avgCtr,
      },
    };
  }, [allCampaigns]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return allCampaigns.filter((c) => {
      const ms =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.objective.toLowerCase().includes(q);
      const mv = !filterStatus || c.status === filterStatus;
      return ms && mv;
    });
  }, [allCampaigns, search, filterStatus]);

  const statusChartData = useMemo(() => {
    const m: Record<string, number> = {};
    allCampaigns.forEach((c) => {
      m[c.status] = (m[c.status] || 0) + 1;
    });
    return Object.entries(m).map(([name, value]) => ({ name, value }));
  }, [allCampaigns]);
  const objectiveChartData = useMemo(() => {
    const m: Record<string, number> = {};
    allCampaigns.forEach((c) => {
      m[c.objective] = (m[c.objective] || 0) + 1;
    });
    return Object.entries(m).map(([name, value]) => ({ name, value }));
  }, [allCampaigns]);
  const leadsChartData = useMemo(
    () =>
      allCampaigns
        .filter((c) => c.leads > 0)
        .sort((a, b) => b.leads - a.leads)
        .slice(0, 8)
        .map((c) => ({
          name: c.name.length > 16 ? c.name.slice(0, 14) + "…" : c.name,
          leads: c.leads,
          spend: c.spend,
        })),
    [allCampaigns],
  );

  const uniqueStatuses = [...new Set(allCampaigns.map((c) => c.status))];
  const hasFilters = search || filterStatus;

  const handleCreated = useCallback(
    () => toast.success("Campaign added — refresh to see it"),
    [],
  );

  const handleAssign = useCallback(
    async (campaign: NormalizedCampaign, toClientId: string) => {
      if (!toClientId) return;
      const toClient = clients.find((c) => c._id === toClientId);
      setAssigning(campaign.id);
      try {
        const r = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/client-campaigns/assign`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              metaCampaignId: campaign.id,
              metaCampaignName: campaign.name,
              clientId: toClientId,
            }),
          },
        );
        const data = await r.json();
        if (data.success) {
          toast.success(`"${campaign.name}" → "${toClient?.name}" assigned!`);
          refetchCampaigns();
        } else toast.error(data.message || "Assign failed");
      } catch {
        toast.error("Server error");
      } finally {
        setAssigning(null);
      }
    },
    [clients, refetchCampaigns],
  );

  const handleUnassign = useCallback(
    async (campaign: NormalizedCampaign) => {
      setAssigning(campaign.id);
      try {
        const r = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/client-campaigns/assign/${campaign.id}`,
          { method: "DELETE" },
        );
        const data = await r.json();
        if (data.success) {
          toast.success(`"${campaign.name}" unassigned`);
          refetchCampaigns();
        }
      } catch {
        toast.error("Server error");
      } finally {
        setAssigning(null);
      }
    },
    [refetchCampaigns],
  );

  const showCampaignTable = activePlatform === "meta";
  const showJD = activePlatform === "justdial";

  return (
    <div className="flex flex-col h-screen max-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white overflow-hidden">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <div className="shrink-0 border-b border-gray-200 dark:border-slate-800">
        <div className="px-3 sm:px-5 md:px-7 pt-3 sm:pt-4 pb-2 sm:pb-3 flex items-center gap-2 sm:gap-3 flex-wrap">
          <div className="flex-1 min-w-0">
            <h1 className="text-base sm:text-lg md:text-xl font-bold tracking-tight leading-tight">
              Campaign Management
            </h1>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Client filter */}
            <div className="relative">
              <Building2
                size={11}
                className={`absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none ${selectedClient ? "text-indigo-500" : "text-gray-400"}`}
              />
              <select
                value={selectedClient}
                onChange={(e) => {
                  setSelectedClient(e.target.value);
                  setFilterStatus("");
                  setSearch("");
                }}
                className={`pl-6 pr-6 py-1.5 rounded-lg border text-xs outline-none transition-colors appearance-none cursor-pointer max-w-[110px] sm:max-w-[160px] ${
                  selectedClient
                    ? "border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 font-semibold"
                    : "border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-gray-700 dark:text-gray-200"
                }`}
              >
                <option value="">All Clients</option>
                {/* ✅ FIX: value={c._id} instead of value={c.name} */}
                {clients.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
              </select>
              {selectedClient && (
                <button
                  onClick={() => setSelectedClient("")}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 text-indigo-400 hover:text-indigo-600"
                >
                  <X size={10} />
                </button>
              )}
            </div>

            {/* Date range */}
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value as DateRange)}
              className="px-2 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-xs text-gray-700 dark:text-gray-200 outline-none max-w-[90px] sm:max-w-none"
            >
              {DATE_RANGES.map((d) => (
                <option key={d.key} value={d.key}>
                  {d.label}
                </option>
              ))}
            </select>

            {/* Sync */}
            <button
              onClick={() => refetchCampaigns()}
              disabled={isFetching}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50 flex items-center gap-1.5"
            >
              <RefreshCw
                size={12}
                className={
                  isFetching ? "animate-spin text-indigo-400" : "text-gray-500"
                }
              />
              <span className="hidden sm:inline text-xs text-gray-600 dark:text-slate-300">
                Sync
              </span>
            </button>

            {/* New campaign */}
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors font-semibold"
            >
              <Plus size={12} />
              <span className="hidden sm:inline">New Campaign</span>
              <span className="sm:hidden">New</span>
            </button>
          </div>
        </div>

        {/* Platform tabs */}
        <div
          className="px-3 sm:px-5 md:px-7 flex gap-0 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {PLATFORMS.map((p) => (
            <button
              key={p.key}
              onClick={() => setActivePlatform(p.key)}
              className={`flex items-center gap-1 px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold whitespace-nowrap border-b-2 transition-colors shrink-0 ${
                activePlatform === p.key
                  ? "border-b-indigo-500 text-indigo-600 dark:text-indigo-400"
                  : "border-b-transparent text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200"
              }`}
            >
              {p.label}
              {p.key === "justdial" && !jdLoading && jdLeads.length > 0 && (
                <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-orange-100 dark:bg-orange-500/20 text-orange-500 ml-0.5">
                  {jdLeads.length}
                </span>
              )}
              {(p.key === "google-ads" || p.key === "indiamart") && (
                <span className="text-[8px] opacity-50 ml-0.5">soon</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── BODY ───────────────────────────────────────────────────────────── */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <div
          className="h-full overflow-y-auto"
          style={{ scrollbarWidth: "thin" }}
        >
          <div className="p-3 sm:p-4 md:p-6 space-y-5">
            {/* Client banner */}
            {selectedClientInfo && (
              <div className="flex items-center gap-2.5 px-3 sm:px-4 py-2.5 rounded-xl border border-indigo-200 dark:border-indigo-800/40 bg-indigo-50 dark:bg-indigo-900/10 flex-wrap">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{
                    background: `hsl(${(selectedClientInfo.name.charCodeAt(0) * 37) % 360}, 60%, 50%)`,
                  }}
                >
                  {selectedClientInfo.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate block">
                    {selectedClientInfo.name}
                  </span>
                  {selectedClientInfo.industry && (
                    <span className="text-[10px] text-gray-400">
                      {selectedClientInfo.industry}
                    </span>
                  )}
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/30 font-semibold shrink-0">
                  {allCampaigns.length} campaigns
                </span>
                <button
                  onClick={() => setSelectedClient("")}
                  className="text-[10px] px-2 py-1 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-500 hover:text-red-500 hover:border-red-200 transition-colors flex items-center gap-1 shrink-0"
                >
                  <X size={9} /> Clear
                </button>
              </div>
            )}

            {/* Stat cards */}
            {activePlatform === "meta" && (
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
                <StatCard
                  Icon={Megaphone}
                  value={campaignLoading ? "…" : allCampaigns.length}
                  label="Campaigns"
                  accent="indigo"
                />
                <StatCard
                  Icon={CheckCircle2}
                  value={
                    campaignLoading ? "…" : summary?.byStatus?.["ACTIVE"] || 0
                  }
                  label="Active"
                  accent="emerald"
                />
                <StatCard
                  Icon={DollarSign}
                  value={
                    campaignLoading ? "…" : fmtRs(summary?.totals?.spend || 0)
                  }
                  label="Spend"
                  accent="blue"
                />
                <StatCard
                  Icon={Target}
                  value={campaignLoading ? "…" : summary?.totals?.leads || 0}
                  label="Leads"
                  accent="orange"
                  sub={
                    summary?.totals?.cpl
                      ? `CPL ${fmtRs(Number(summary.totals.cpl))}`
                      : ""
                  }
                />
                <StatCard
                  Icon={Eye}
                  value={
                    campaignLoading
                      ? "…"
                      : fmtNum(summary?.totals?.impressions || 0)
                  }
                  label="Impressions"
                  accent="amber"
                />
                <StatCard
                  Icon={MousePointerClick}
                  value={
                    campaignLoading ? "…" : `${summary?.totals?.ctr || "0.00"}%`
                  }
                  label="Avg CTR"
                  accent="rose"
                  sub={`${fmtNum(summary?.totals?.clicks || 0)} clicks`}
                />
              </div>
            )}

            {/* Coming soon banners */}
            {(activePlatform === "google-ads" ||
              activePlatform === "indiamart") && (
              <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30">
                <AlertTriangle
                  size={15}
                  className="text-amber-500 shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-amber-800 dark:text-amber-300">
                    {activePlatform === "google-ads"
                      ? "Google Ads"
                      : "IndiaMart"}{" "}
                    integration coming soon
                  </p>
                  <p className="text-[11px] sm:text-xs text-amber-700 dark:text-amber-400 mt-0.5">
                    {activePlatform === "google-ads"
                      ? "Google Ads API credentials connect karne ke baad campaigns yahan dikhenge"
                      : "IndiaMart inquiry emails parse karke leads yahan dikhenge"}
                  </p>
                </div>
              </div>
            )}

            {/* Campaign error */}
            {campaignError && showCampaignTable && (
              <div className="flex items-start gap-3 p-3 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30">
                <AlertTriangle
                  size={15}
                  className="text-red-500 shrink-0 mt-0.5"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-red-700 dark:text-red-400">
                    Could not load campaigns
                  </p>
                  <p className="text-[11px] text-red-600 dark:text-red-400 mt-0.5">
                    Backend:{" "}
                    <code className="bg-red-100 dark:bg-red-900/30 px-1 rounded">
                      /api/client-campaigns
                    </code>
                  </p>
                </div>
                <button
                  onClick={() => refetchCampaigns()}
                  className="text-xs px-2.5 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold shrink-0"
                >
                  Retry
                </button>
              </div>
            )}

            {/* Campaign Table */}
            {showCampaignTable && (
              <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] overflow-hidden">
                {/* Toolbar */}
                <div className="px-3 sm:px-4 py-2.5 border-b border-gray-100 dark:border-slate-800 flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white flex items-center gap-2">
                      Meta Campaigns
                      {!campaignLoading && (
                        <span className="text-[10px] font-normal text-gray-400">
                          {filtered.length} shown
                        </span>
                      )}
                    </h3>
                    <button
                      onClick={() => setShowFilters((v) => !v)}
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs border transition-colors ${
                        hasFilters
                          ? "border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                          : "border-gray-200 dark:border-slate-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      <SlidersHorizontal size={11} />
                      Filter
                      {hasFilters && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      )}
                    </button>
                  </div>
                  <div
                    className={`${showFilters ? "flex" : "hidden"} sm:flex flex-wrap gap-2`}
                  >
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 flex-1 min-w-0 max-w-xs">
                      <Search size={11} className="text-gray-400 shrink-0" />
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search campaigns…"
                        className="bg-transparent outline-none text-xs w-full text-gray-700 dark:text-gray-200 placeholder:text-gray-400"
                      />
                      {search && (
                        <button onClick={() => setSearch("")}>
                          <X size={10} className="text-gray-400" />
                        </button>
                      )}
                    </div>
                    {uniqueStatuses.length > 1 && (
                      <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-2 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-700 dark:text-gray-200 outline-none shrink-0"
                      >
                        <option value="">All statuses</option>
                        {uniqueStatuses.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    )}
                    {hasFilters && (
                      <button
                        onClick={() => {
                          setSearch("");
                          setFilterStatus("");
                        }}
                        className="flex items-center gap-1 px-2 py-1.5 text-xs rounded-lg border border-red-200 dark:border-red-900/50 text-red-500 hover:bg-red-50 transition-colors shrink-0"
                      >
                        <X size={10} /> Clear
                      </button>
                    )}
                  </div>
                </div>

                {campaignLoading ? (
                  <div className="p-3 space-y-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-10 rounded-lg bg-gray-100 dark:bg-slate-800 animate-pulse"
                      />
                    ))}
                  </div>
                ) : filtered.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-3 text-gray-400">
                    <Megaphone size={28} className="opacity-30" />
                    <p className="font-semibold text-sm">
                      {hasFilters ? "No campaigns match" : "No campaigns found"}
                    </p>
                    {hasFilters && (
                      <button
                        onClick={() => {
                          setSearch("");
                          setFilterStatus("");
                        }}
                        className="text-xs text-indigo-500 hover:underline"
                      >
                        Clear filters
                      </button>
                    )}
                  </div>
                ) : (
                  <>
                    {/* Desktop table */}
                    <div
                      className="hidden md:block overflow-x-auto"
                      style={{ scrollbarWidth: "thin" }}
                    >
                      <table className="w-full text-xs">
                        <thead className="bg-gray-50/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-800">
                          <tr>
                            {[
                              "Campaign",
                              "Objective",
                              "Status",
                              "Budget",
                              "Spend",
                              "Leads",
                              "CPL",
                              "CTR",
                              "Impressions",
                              "Clicks",
                              "Period",
                              "Client",
                              "Assign",
                            ].map((h) => (
                              <th
                                key={h}
                                className="px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 whitespace-nowrap"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-slate-800/60">
                          {filtered.map((c, i) => {
                            const cfg = getStatusCfg(c.status);
                            const SI = cfg.icon;
                            return (
                              <tr
                                key={c.id || i}
                                onClick={() => setSelectedCampaign(c)}
                                className="hover:bg-indigo-50/40 dark:hover:bg-slate-800/40 cursor-pointer transition-colors"
                              >
                                <td className="px-3 py-3 max-w-[180px]">
                                  <p
                                    className="font-semibold text-gray-900 dark:text-white truncate"
                                    title={c.name}
                                  >
                                    {c.name}
                                  </p>
                                </td>
                                <td className="px-3 py-3 text-gray-600 dark:text-slate-400 whitespace-nowrap">
                                  {c.objective || "—"}
                                </td>
                                <td className="px-3 py-3">
                                  <span
                                    className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-semibold whitespace-nowrap ${cfg.badge}`}
                                  >
                                    <SI size={9} />
                                    {c.status}
                                  </span>
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap">
                                  <p className="font-semibold text-gray-900 dark:text-white">
                                    {fmtRs(c.budget)}
                                  </p>
                                  {c.budgetType && (
                                    <p className="text-[10px] text-gray-400 capitalize">
                                      {c.budgetType}
                                    </p>
                                  )}
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap text-gray-600 dark:text-slate-400">
                                  {fmtRs(c.spend)}
                                </td>
                                <td className="px-3 py-3 font-bold text-indigo-500">
                                  {fmtNum(c.leads)}
                                </td>
                                <td
                                  className={`px-3 py-3 font-semibold whitespace-nowrap ${c.cpl && Number(c.cpl) > 400 ? "text-red-500" : "text-emerald-500"}`}
                                >
                                  {c.cpl ? fmtRs(Number(c.cpl)) : "—"}
                                </td>
                                <td className="px-3 py-3 text-gray-600 dark:text-slate-400">
                                  {c.ctr ? `${c.ctr}%` : "—"}
                                </td>
                                <td className="px-3 py-3 text-gray-600 dark:text-slate-400 whitespace-nowrap">
                                  {fmtNum(c.impressions)}
                                </td>
                                <td className="px-3 py-3 text-gray-600 dark:text-slate-400">
                                  {fmtNum(c.clicks)}
                                </td>
                                <td className="px-3 py-3 text-[10px] text-gray-400 whitespace-nowrap">
                                  {c.insightPeriod ?? c.startDate ?? "—"}
                                </td>
                                <td className="px-3 py-3">
                                  {c.isAssigned ? (
                                    <span className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold max-w-[100px] truncate">
                                      <Building2 size={8} />
                                      {c.clientName}
                                    </span>
                                  ) : (
                                    <span className="text-[10px] text-gray-400 italic">
                                      —
                                    </span>
                                  )}
                                </td>
                                <td
                                  className="px-3 py-3"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {assigning === c.id ? (
                                    <Loader2
                                      size={12}
                                      className="animate-spin text-indigo-400"
                                    />
                                  ) : (
                                    <select
                                      value=""
                                      onChange={(e) => {
                                        if (e.target.value === "__unassign__")
                                          handleUnassign(c);
                                        else if (e.target.value)
                                          handleAssign(c, e.target.value);
                                      }}
                                      className="text-[10px] px-1.5 py-1 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-gray-600 dark:text-slate-300 outline-none cursor-pointer max-w-[100px]"
                                    >
                                      <option value="">
                                        {c.isAssigned ? "Reassign…" : "Assign…"}
                                      </option>
                                      <option disabled>── Clients ──</option>
                                      {clients.map((cl) => (
                                        <option key={cl._id} value={cl._id}>
                                          {cl.name}
                                        </option>
                                      ))}
                                      {c.isAssigned && (
                                        <option value="__unassign__">
                                          🗑 Remove
                                        </option>
                                      )}
                                    </select>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile cards */}
                    <div className="md:hidden divide-y divide-gray-100 dark:divide-slate-800">
                      {filtered.map((c, i) => {
                        const cfg = getStatusCfg(c.status);
                        return (
                          <div
                            key={c.id || i}
                            onClick={() => setSelectedCampaign(c)}
                            className="p-3 hover:bg-gray-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                          >
                            <div className="flex items-start justify-between gap-2 mb-2.5">
                              <div className="min-w-0 flex-1">
                                <p className="font-semibold text-sm text-gray-900 dark:text-white line-clamp-2 leading-tight">
                                  {c.name}
                                </p>
                                <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                                  <span
                                    className={`text-[10px] px-1.5 py-0.5 rounded-full border font-semibold ${platformColor[c.platform] || "bg-gray-100 text-gray-500 border-gray-200"}`}
                                  >
                                    {c.platform}
                                  </span>
                                  <span
                                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${cfg.badge}`}
                                  >
                                    {c.status}
                                  </span>
                                  {c.isAssigned && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold inline-flex items-center gap-0.5">
                                      <Building2 size={8} />
                                      {c.clientName}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <ChevronDown
                                size={13}
                                className="text-gray-300 -rotate-90 shrink-0 mt-1"
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-x-3 gap-y-1.5 text-xs">
                              <div>
                                <p className="text-[10px] text-gray-400 leading-none mb-0.5">
                                  Spend
                                </p>
                                <p className="font-semibold text-gray-700 dark:text-slate-200">
                                  {fmtRs(c.spend)}
                                </p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 leading-none mb-0.5">
                                  Leads
                                </p>
                                <p className="font-bold text-indigo-500">
                                  {fmtNum(c.leads)}
                                </p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 leading-none mb-0.5">
                                  CPL
                                </p>
                                <p
                                  className={`font-semibold ${c.cpl && Number(c.cpl) > 400 ? "text-red-500" : "text-emerald-500"}`}
                                >
                                  {c.cpl ? fmtRs(Number(c.cpl)) : "—"}
                                </p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 leading-none mb-0.5">
                                  CTR
                                </p>
                                <p className="font-semibold text-gray-700 dark:text-slate-200">
                                  {c.ctr ? `${c.ctr}%` : "—"}
                                </p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 leading-none mb-0.5">
                                  Budget
                                </p>
                                <p className="font-semibold text-gray-700 dark:text-slate-200">
                                  {fmtRs(c.budget)}
                                </p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 leading-none mb-0.5">
                                  Impr.
                                </p>
                                <p className="font-semibold text-gray-700 dark:text-slate-200">
                                  {fmtNum(c.impressions)}
                                </p>
                              </div>
                            </div>
                            <div
                              className="mt-2.5"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {assigning === c.id ? (
                                <Loader2
                                  size={12}
                                  className="animate-spin text-indigo-400"
                                />
                              ) : (
                                <select
                                  value=""
                                  onChange={(e) => {
                                    if (e.target.value === "__unassign__")
                                      handleUnassign(c);
                                    else if (e.target.value)
                                      handleAssign(c, e.target.value);
                                  }}
                                  className="text-[10px] px-2 py-1 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-gray-600 dark:text-slate-300 outline-none cursor-pointer"
                                >
                                  <option value="">
                                    {c.isAssigned
                                      ? "Reassign…"
                                      : "Assign to client…"}
                                  </option>
                                  <option disabled>── Clients ──</option>
                                  {clients.map((cl) => (
                                    <option key={cl._id} value={cl._id}>
                                      {cl.name}
                                    </option>
                                  ))}
                                  {c.isAssigned && (
                                    <option value="__unassign__">
                                      🗑 Remove
                                    </option>
                                  )}
                                </select>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Meta charts */}
            {!campaignLoading &&
              allCampaigns.length > 0 &&
              showCampaignTable && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4">
                    <h3 className="font-bold text-xs sm:text-sm mb-0.5">
                      Status Breakdown
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-400 mb-3">
                      Active vs paused
                    </p>
                    {statusChartData.length > 0 ? (
                      <div className="h-44 sm:h-48">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={statusChartData}
                              cx="50%"
                              cy="50%"
                              innerRadius={42}
                              outerRadius={65}
                              paddingAngle={3}
                              dataKey="value"
                            >
                              {statusChartData.map((e, i) => (
                                <Cell
                                  key={i}
                                  fill={
                                    ["ACTIVE", "Live"].includes(e.name)
                                      ? "#22c55e"
                                      : ["PAUSED", "Paused"].includes(e.name)
                                        ? "#94a3b8"
                                        : PIE_COLORS[i % PIE_COLORS.length]
                                  }
                                />
                              ))}
                            </Pie>
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#0f172a",
                                border: "1px solid #334155",
                                borderRadius: "8px",
                                fontSize: "11px",
                              }}
                            />
                            <Legend wrapperStyle={{ fontSize: "11px" }} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    ) : (
                      <div className="h-44 flex items-center justify-center text-xs text-gray-400">
                        No data
                      </div>
                    )}
                  </div>
                  <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4">
                    <h3 className="font-bold text-xs sm:text-sm mb-0.5">
                      Objective Split
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-400 mb-3">
                      Campaigns by goal
                    </p>
                    {objectiveChartData.length > 0 ? (
                      <div className="h-44 sm:h-48">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={objectiveChartData}
                              cx="50%"
                              cy="50%"
                              innerRadius={42}
                              outerRadius={65}
                              paddingAngle={3}
                              dataKey="value"
                            >
                              {objectiveChartData.map((_, i) => (
                                <Cell
                                  key={i}
                                  fill={PIE_COLORS[i % PIE_COLORS.length]}
                                />
                              ))}
                            </Pie>
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#0f172a",
                                border: "1px solid #334155",
                                borderRadius: "8px",
                                fontSize: "11px",
                              }}
                            />
                            <Legend wrapperStyle={{ fontSize: "11px" }} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    ) : (
                      <div className="h-44 flex items-center justify-center text-xs text-gray-400">
                        No data
                      </div>
                    )}
                  </div>
                  <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 sm:col-span-2 md:col-span-1">
                    <h3 className="font-bold text-xs sm:text-sm mb-0.5">
                      Leads by Campaign
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-400 mb-3">
                      Top 8 by lead count
                    </p>
                    {leadsChartData.length > 0 ? (
                      <div
                        style={{
                          height: Math.max(
                            leadsChartData.length * 32 + 40,
                            176,
                          ),
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={leadsChartData}
                            layout="vertical"
                            margin={{ left: 0, right: 20, top: 0, bottom: 0 }}
                          >
                            <CartesianGrid
                              strokeDasharray="3 3"
                              stroke="#1e293b"
                              horizontal={false}
                            />
                            <XAxis
                              type="number"
                              tick={{ fontSize: 9 }}
                              stroke="#64748b"
                              allowDecimals={false}
                            />
                            <YAxis
                              type="category"
                              dataKey="name"
                              tick={{ fontSize: 9 }}
                              stroke="#64748b"
                              width={80}
                            />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#0f172a",
                                border: "1px solid #334155",
                                borderRadius: "8px",
                                fontSize: "11px",
                              }}
                              formatter={(v: any, n: string | undefined) => [
                                n === "leads"
                                  ? v
                                  : `₹${Number(v).toLocaleString("en-IN")}`,
                                n === "leads" ? "Leads" : "Spend",
                              ]}
                            />
                            <Bar
                              dataKey="leads"
                              fill="#4f46e5"
                              radius={[0, 3, 3, 0]}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    ) : (
                      <div className="h-44 flex items-center justify-center text-xs text-gray-400">
                        No leads data
                      </div>
                    )}
                  </div>
                </div>
              )}

            {/* JustDial Section — divider + full view on justdial tab */}
            {showJD && (
              <>
                {/* On "all" tab → JustDialClientView (compact), on "justdial" tab → full with analytics */}
                <JustDialClientView
                  jdData={jdData}
                  isLoading={jdLoading}
                  isError={jdError}
                  isFetching={jdFetching}
                  refetch={refetchJD}
                  clients={clients}
                  selectedClient={selectedClient}
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      {showModal && (
        <NewCampaignModal
          onClose={() => setShowModal(false)}
          onCreated={handleCreated}
          clients={clients}
        />
      )}
      {selectedCampaign && (
        <CampaignDrawer
          c={selectedCampaign}
          onClose={() => setSelectedCampaign(null)}
        />
      )}
    </div>
  );
}
