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

import { useState } from "react";
import { toast } from "sonner";
import {
  Megaphone, DollarSign, Target, Percent, AlertTriangle,
  Download, Plus, MoreHorizontal, X, Loader2, RefreshCw, TrendingUp,
  MousePointerClick, Eye,
} from "lucide-react";
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from "recharts";
import { useGet }  from "@/hooks/useGet";
import { usePost } from "@/hooks/usePost";

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────
const CHANNELS   = ["Meta", "Google", "Instagram", "YouTube", "Email", "WhatsApp", "LinkedIn", "Programmatic"];
const OBJECTIVES = ["Lead Gen", "Admissions", "Bookings", "Sales", "Brand Awareness", "App Installs", "Traffic"];
const STATUSES   = ["Draft", "Live", "Paused", "Alert", "Risk", "Completed"];
const PIE_COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ec4899", "#3b82f6", "#8b5cf6", "#06b6d4"];

const emptyForm = {
  name: "", clientId: "", clientName: "", channel: "",
  objective: "", budget: "", startDate: "", endDate: "",
  status: "Draft", notes: "",
};

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
type DataSource = "combined" | "meta" | "internal" | "google-ads" | "justdial" | "indiamart";

interface MetaInsights {
  date_start:    string;
  date_stop:     string;
  spend:         number;
  impressions:   number;
  clicks:        number;
  reach:         number;
  ctr:           string;
  cpm:           string;
  cpc:           string;
  leads:         number;
  cpl:           string | null;
  actions:       { action_type: string; value: string }[];
  action_values: { action_type: string; value: string }[];
}

interface MetaCampaign {
  id:                   string;
  name:                 string;
  status:               string;
  effective_status:     string;
  objective:            string;
  daily_budget?:        string;
  lifetime_budget?:     string;
  budget_remaining:     string;
  start_time:           string;
  stop_time?:           string;
  insights:             MetaInsights | null;
}

interface MetaApiResponse {
  success: boolean;
  total:   number;
  summary: {
    total_campaigns:   number;
    active:            number;
    paused:            number;
    total_spend:       string;
    total_leads:       number;
    total_impressions: number;
    total_clicks:      number;
    avg_ctr:           string;
  };
  data: MetaCampaign[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
const statusBadge = (s: string) =>
  ({
    Live:      "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    Paused:    "bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-slate-300",
    Alert:     "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    Risk:      "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    Completed: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    Draft:     "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
    ACTIVE:    "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    PAUSED:    "bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-slate-300",
    ARCHIVED:  "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
  }[s] ?? "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400");

const objLabel = (o: string) =>
  o?.replace("OUTCOME_", "").replace(/_/g, " ")
    .toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()) ?? "—";

// ── NEW: insights directly campaign object mein hain, applyInsights HATAO ──
function normalizeMeta(c: MetaCampaign) {
  const ins = c.insights;  // already merged by backend

  const budgetPaisa = Number(c.lifetime_budget ?? c.daily_budget ?? 0);

  return {
    _id:             c.id,
    name:            c.name,
    channel:         "Meta",
    objective:       objLabel(c.objective),
    budget:          budgetPaisa / 100,
    budgetRemaining: Number(c.budget_remaining ?? 0) / 100,
    // Insights — directly use kar lo, koi mapping nahi
    spend:           ins?.spend        ?? 0,
    leads:           ins?.leads        ?? 0,
    cpl:             ins?.cpl          ? Number(ins.cpl)  : null,
    ctr:             ins?.ctr          ?? null,
    cpm:             ins?.cpm          ?? null,
    cpc:             ins?.cpc          ?? null,
    impressions:     ins?.impressions  ?? 0,
    clicks:          ins?.clicks       ?? 0,
    reach:           ins?.reach        ?? 0,
    roas:            null,  // action_values mein purchase value nahi hai is account mein
    insightPeriod:   ins ? `${ins.date_start} → ${ins.date_stop}` : null,
    // Meta campaign fields
    status:          c.effective_status ?? c.status,
    clientName:      "Meta Ads",
    startDate:       c.start_time?.split("T")[0] ?? "—",
    endDate:         c.stop_time?.split("T")[0]  ?? "—",
    source:          "meta" as const,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared styles
// ─────────────────────────────────────────────────────────────────────────────
const inputCls =
  "w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all";
const labelCls = "block text-xs font-medium text-gray-500 dark:text-slate-400 mb-1.5";

// ─────────────────────────────────────────────────────────────────────────────
// FieldWrap — modal ke bahar define, warna har keystroke pe re-mount hoga
// ─────────────────────────────────────────────────────────────────────────────
function FieldWrap({ label, required = false, error, children }: {
  label: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelCls}>
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// New Campaign Modal
// ─────────────────────────────────────────────────────────────────────────────
function NewCampaignModal({ onClose, onCreated, clients }: {
  onClose: () => void; onCreated: (c: any) => void; clients: any[];
}) {
  const [form,   setForm]   = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { mutate: createCampaign, isPending } = usePost("/campaign", "campaigns");

  const set = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  const handleClientChange = (id: string) => {
    const client = clients.find((c) => c._id === id);
    setForm((f) => ({ ...f, clientId: id, clientName: client?.profile?.companyName ?? "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name      = "Campaign name required hai";
    if (!form.channel)     e.channel   = "Channel select karo";
    if (!form.objective)   e.objective = "Objective select karo";
    if (!form.budget || isNaN(Number(form.budget)) || Number(form.budget) <= 0)
                           e.budget    = "Valid budget daalo (₹ mein)";
    if (form.startDate && form.endDate && new Date(form.startDate) > new Date(form.endDate))
                           e.endDate   = "End date, start date ke baad honi chahiye";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    createCampaign(
      {
        ...form,
        budget:    Number(form.budget),
        clientId:  form.clientId  || undefined,
        startDate: form.startDate || undefined,
        endDate:   form.endDate   || undefined,
      },
      {
        onSuccess: (data: any) => { toast.success("Campaign create ho gaya!"); onCreated(data.campaign); onClose(); },
        onError:   (err: any)  => toast.error(err?.response?.data?.message ?? "Campaign create nahi hua"),
      }
    );
  };

  const eb = (id: string) => errors[id] ? "border-red-400 dark:border-red-500" : "";

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full sm:max-w-2xl bg-white dark:bg-[#0d1629] sm:rounded-2xl rounded-t-2xl shadow-2xl border-t sm:border border-gray-200 dark:border-slate-700/60 overflow-hidden max-h-[95dvh] flex flex-col">

        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-slate-800 shrink-0">
          <div>
            <h2 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">New Campaign</h2>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">Fill details to launch a new campaign</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
            <X size={16} className="text-gray-500" />
          </button>
        </div>

        <div className="px-5 py-4 space-y-4 overflow-y-auto flex-1">
          <FieldWrap label="Campaign Name" required error={errors.name}>
            <input value={form.name} onChange={(e) => set("name", e.target.value)}
              placeholder="e.g. AV Academy Admissions Q2" className={`${inputCls} ${eb("name")}`} />
          </FieldWrap>
          <div>
            <label className={labelCls}>Client</label>
            <select value={form.clientId} onChange={(e) => handleClientChange(e.target.value)} className={inputCls}>
              <option value="">Select Client (optional)</option>
              {clients.map((c) => <option key={c._id} value={c._id}>{c?.profile?.companyName ?? "Unnamed"}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FieldWrap label="Channel" required error={errors.channel}>
              <select value={form.channel} onChange={(e) => set("channel", e.target.value)} className={`${inputCls} ${eb("channel")}`}>
                <option value="">Select Channel</option>
                {CHANNELS.map((c) => <option key={c}>{c}</option>)}
              </select>
            </FieldWrap>
            <FieldWrap label="Objective" required error={errors.objective}>
              <select value={form.objective} onChange={(e) => set("objective", e.target.value)} className={`${inputCls} ${eb("objective")}`}>
                <option value="">Select Objective</option>
                {OBJECTIVES.map((o) => <option key={o}>{o}</option>)}
              </select>
            </FieldWrap>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FieldWrap label="Budget (₹)" required error={errors.budget}>
              <input value={form.budget} onChange={(e) => set("budget", e.target.value)}
                placeholder="e.g. 50000" type="number" min="1" className={`${inputCls} ${eb("budget")}`} />
            </FieldWrap>
            <div>
              <label className={labelCls}>Status</label>
              <select value={form.status} onChange={(e) => set("status", e.target.value)} className={inputCls}>
                {STATUSES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Start Date</label>
              <input value={form.startDate} onChange={(e) => set("startDate", e.target.value)} type="date" className={inputCls} />
            </div>
            <FieldWrap label="End Date" error={errors.endDate}>
              <input value={form.endDate} onChange={(e) => set("endDate", e.target.value)} type="date" className={`${inputCls} ${eb("endDate")}`} />
            </FieldWrap>
          </div>
          <div>
            <label className={labelCls}>Notes</label>
            <textarea value={form.notes} onChange={(e) => set("notes", e.target.value)}
              rows={3} placeholder="Campaign goals, target audience..." className={`${inputCls} resize-none`} />
          </div>
          {form.name && form.channel && form.budget && (
            <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-700 dark:text-indigo-300">
              <span className="font-semibold">Preview: </span>
              "{form.name}" — {form.channel}{form.objective && ` · ${form.objective}`}
              {` · ₹${Number(form.budget).toLocaleString("en-IN")} · ${form.status}`}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-[#0a1122] shrink-0">
          <button onClick={onClose} disabled={isPending}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-sm text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50">
            Cancel
          </button>
          <button onClick={handleSubmit} disabled={isPending}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors disabled:opacity-60">
            {isPending ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />}
            {isPending ? "Creating..." : "Create Campaign"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────
export default function CampaignManagement() {
  const [showModal,     setShowModal]     = useState(false);
  const [filterChannel, setFilterChannel] = useState("");
  const [filterStatus,  setFilterStatus]  = useState("");
  const [dataSource,    setDataSource]    = useState<DataSource>("combined");

  // ── Internal DB ──────────────────────────────────────────────────────────
  const { data: campaignData, isLoading: internalLoading } =
    useGet<{ campaigns: any[] }>("campaigns", "/campaigns");

  const { data: clientData } =
    useGet<{ clients: any[] }>("clients", "/clients");

  // ── Meta API — ek hi call, insights already andar hain ───────────────────
  const {
    data:      metaRaw,
    isLoading: metaLoading,
    refetch:   refetchMeta,
  } = useGet<MetaApiResponse>("meta-campaigns", "/campaigns");

  // ── Normalize (NO applyInsights needed anymore) ───────────────────────────
  const internalCampaigns: any[] = campaignData?.campaigns ?? [];
  const clients:           any[] = clientData?.clients     ?? [];
  const metaFinal                = (metaRaw?.data ?? []).map(normalizeMeta);

  // Summary directly from backend — no frontend recalculation needed
  const metaSummary = metaRaw?.summary ?? null;

  const allCampaigns: any[] =
    dataSource === "meta"       ? metaFinal :
    dataSource === "internal"   ? internalCampaigns :
    dataSource === "google-ads" ? [] :
    dataSource === "justdial"   ? [] :
    dataSource === "indiamart"  ? [] :
    [...metaFinal, ...internalCampaigns];

  const isLoading = internalLoading || metaLoading;

  // ── Filters ──────────────────────────────────────────────────────────────
  const filtered = allCampaigns.filter((c) => {
    if (filterChannel && c.channel !== filterChannel) return false;
    if (filterStatus  && c.status  !== filterStatus)  return false;
    return true;
  });

  // ── Stat cards — use backend summary for Meta numbers ────────────────────
  const totalSpend    = metaSummary ? Number(metaSummary.total_spend) : 0;
  const totalLeads    = metaSummary?.total_leads    ?? 0;
  const totalClicks   = metaSummary?.total_clicks   ?? 0;
  const totalImpressions = metaSummary?.total_impressions ?? 0;
  const avgCtr        = metaSummary?.avg_ctr        ?? "0.00";
  const activeCnt     = metaSummary?.active         ?? 0;

  const statCards = [
    {
      icon: Megaphone,
      value: allCampaigns.length,
      label: "Total campaigns",
      sub: activeCnt ? `${activeCnt} active` : "",
    },
    {
      icon: DollarSign,
      value: totalSpend ? `₹${(totalSpend / 100000).toFixed(2)}L` : "₹0",
      label: "Total spend (last 30d)",
      sub: metaSummary ? `₹${Number(metaSummary.total_spend).toLocaleString("en-IN")}` : "",
    },
    {
      icon: Target,
      value: totalLeads,
      label: "Total leads",
      sub: totalLeads > 0
        ? `CPL ₹${(totalSpend / totalLeads).toFixed(0)}`
        : "",
    },
    {
      icon: Percent,
      value: `${avgCtr}%`,
      label: "Avg CTR",
      sub: `${totalClicks.toLocaleString("en-IN")} clicks`,
    },
  ];

  // ── Extra stat row — impressions + reach ─────────────────────────────────
  const extraStats = [
    {
      icon: Eye,
      value: totalImpressions.toLocaleString("en-IN"),
      label: "Impressions",
    },
    {
      icon: MousePointerClick,
      value: totalClicks.toLocaleString("en-IN"),
      label: "Total clicks",
    },
    {
      icon: Target,
      value: metaFinal.reduce((s, c) => s + (c.reach ?? 0), 0).toLocaleString("en-IN"),
      label: "Reach",
    },
    {
      icon: DollarSign,
      value: metaFinal[0]?.cpm ? `₹${metaFinal[0].cpm}` : "—",
      label: "CPM (top campaign)",
    },
  ];

  // ── Chart data ───────────────────────────────────────────────────────────
  const objectiveCounts: Record<string, number> = {};
  metaFinal.forEach((c) => {
    objectiveCounts[c.objective] = (objectiveCounts[c.objective] ?? 0) + 1;
  });
  const objectiveData = Object.entries(objectiveCounts).map(([name, value]) => ({ name, value }));

  const statusCounts: Record<string, number> = {};
  allCampaigns.forEach((c) => {
    statusCounts[c.status] = (statusCounts[c.status] ?? 0) + 1;
  });
  const statusData = Object.entries(statusCounts).map(([name, value]) => ({ name, value }));

  // Leads by campaign (only campaigns with insights)
  const leadsChartData = metaFinal
    .filter((c) => c.leads > 0)
    .sort((a, b) => b.leads - a.leads)
    .slice(0, 8)
    .map((c) => ({
      name:   c.name.length > 20 ? c.name.slice(0, 18) + "…" : c.name,
      leads:  c.leads,
      spend:  c.spend,
      cpl:    c.cpl ?? 0,
    }));

  const handleCreated = (c: any) => { internalCampaigns.unshift(c); };

  const SOURCE_LABELS: Record<DataSource, string> = {
    combined:    "Combined",
    meta:        "Meta",
    internal:    "Internal",
    "google-ads": "Google Ads",
    justdial:    "JustDial",
    indiamart:   "IndiaMart",
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white">

      {/* ── HEADER ────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-5 md:mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Campaign Management</h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">
            {isLoading
              ? "Loading..."
              : `${allCampaigns.length} campaigns · ${metaFinal.length} Meta · ${clients.length} clients`}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {/* Source tabs */}
          <div className="flex rounded-lg border border-gray-200 dark:border-slate-700 overflow-hidden text-xs">
            {(Object.keys(SOURCE_LABELS) as DataSource[]).map((src) => (
              <button key={src} onClick={() => setDataSource(src)}
                className={`px-3 py-2 transition-colors whitespace-nowrap ${
                  dataSource === src
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-600 dark:text-slate-300"
                }`}>
                {SOURCE_LABELS[src]}
              </button>
            ))}
          </div>
          <button onClick={() => refetchMeta()}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-xs hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
            <RefreshCw size={13} /> Sync Meta
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-xs hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
            <Download size={13} /> Export
          </button>
          <button onClick={() => setShowModal(true)}
            className="flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm transition-colors">
            <Plus size={14} /> New Campaign
          </button>
        </div>
      </div>

      {/* ── STAT CARDS ────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4">
        {statCards.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="p-4 md:p-5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
              <Icon className="mb-3 text-indigo-500" size={18} />
              <p className="text-xl md:text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">{stat.label}</p>
              {stat.sub && <p className="text-xs text-emerald-500 mt-1">{stat.sub}</p>}
            </div>
          );
        })}
      </div>

      {/* ── EXTRA STATS (impressions, clicks, reach, CPM) ─────────── */}
      {metaSummary && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-5">
          {extraStats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="p-3 md:p-4 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-indigo-500" />
                </div>
                <div>
                  <p className="text-sm font-bold">{s.value}</p>
                  <p className="text-[10px] text-gray-400 dark:text-slate-500">{s.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── BANNERS ───────────────────────────────────────────────── */}
      {metaLoading && (
        <div className="flex items-center gap-2 p-3 mb-4 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-800 text-xs text-blue-700 dark:text-blue-300">
          <Loader2 size={13} className="animate-spin shrink-0" />
          Meta se campaigns fetch ho rahe hain...
        </div>
      )}
      {!metaLoading && (!metaRaw || !metaRaw.success) && (
        <div className="flex items-center gap-2 p-3 mb-4 rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-300">
          <AlertTriangle size={13} className="shrink-0" />
          Meta data nahi aaya — access token ya /api/campaigns backend check karo
        </div>
      )}
      {!metaLoading && metaFinal.length > 0 && metaSummary && (
        <div className="flex items-center gap-2 p-3 mb-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/30 dark:border-green-800 text-xs text-green-700 dark:text-green-300">
          <TrendingUp size={13} className="shrink-0" />
          Meta sync — {metaSummary.active} active, {metaSummary.paused} paused · {metaSummary.total_leads} leads · ₹{Number(metaSummary.total_spend).toLocaleString("en-IN")} spend (last 30d)
        </div>
      )}

      {/* ── CAMPAIGN TABLE ────────────────────────────────────────── */}
      <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6 mb-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
          <h3 className="font-semibold text-sm md:text-base">
            Campaign Registry
            {metaFinal.length > 0 && (
              <span className="ml-2 text-xs font-normal text-indigo-400">{metaFinal.length} Meta</span>
            )}
          </h3>
          <div className="flex gap-2">
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
              className="px-2.5 py-1.5 rounded-md border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs outline-none">
              <option value="">All statuses</option>
              {["ACTIVE", "PAUSED", "ARCHIVED"].map((s) => <option key={s}>{s}</option>)}
            </select>
            <select value={filterChannel} onChange={(e) => setFilterChannel(e.target.value)}
              className="px-2.5 py-1.5 rounded-md border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs outline-none">
              <option value="">All channels</option>
              {CHANNELS.map((ch) => <option key={ch}>{ch}</option>)}
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="space-y-3">
            {[1,2,3].map((i) => <div key={i} className="h-12 rounded-lg bg-gray-100 dark:bg-slate-800 animate-pulse" />)}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-10 text-gray-400 dark:text-slate-500">
            <Megaphone size={36} className="mx-auto mb-3 opacity-30" />
            <p className="font-medium text-sm">
              {["google-ads","justdial","indiamart"].includes(dataSource)
                ? `${SOURCE_LABELS[dataSource]} integration coming soon`
                : "Koi campaign nahi mila"}
            </p>
            <p className="text-xs mt-1">Filters change karo ya "New Campaign" dabao</p>
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="border-b border-gray-200 dark:border-slate-800 text-gray-500 dark:text-slate-400">
                  <tr className="text-left">
                    {["Campaign","Src","Objective","Budget","Spend","Leads","CPL","CTR","Impressions","Clicks","Status","Period",""].map((h, i) => (
                      <th key={i} className="py-3 pr-3 font-medium whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                  {filtered.map((c, i) => (
                    <tr key={c._id ?? i} className="hover:bg-gray-50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 pr-3 font-medium text-gray-900 dark:text-white max-w-[180px] truncate" title={c.name}>{c.name}</td>
                      <td className="pr-3">
                        <span className={`px-1.5 py-0.5 rounded font-medium text-[10px] ${
                          c.source === "meta"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                            : "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
                        }`}>{c.source === "meta" ? "Meta" : "DB"}</span>
                      </td>
                      <td className="pr-3 text-gray-600 dark:text-slate-400 whitespace-nowrap">{c.objective}</td>
                      <td className="pr-3 whitespace-nowrap">
                        {c.budget ? `₹${Number(c.budget).toLocaleString("en-IN")}` : "—"}
                      </td>
                      <td className="pr-3 whitespace-nowrap">
                        {c.spend ? `₹${Number(c.spend).toLocaleString("en-IN")}` : "—"}
                      </td>
                      <td className="pr-3 font-medium text-indigo-600 dark:text-indigo-400">
                        {c.leads || "—"}
                      </td>
                      <td className={`pr-3 whitespace-nowrap font-medium ${
                        c.cpl != null && c.cpl > 400 ? "text-red-500" : "text-emerald-500"
                      }`}>
                        {c.cpl != null ? `₹${Number(c.cpl).toFixed(0)}` : "—"}
                      </td>
                      <td className="pr-3 text-gray-600 dark:text-slate-400">
                        {c.ctr ? `${c.ctr}%` : "—"}
                      </td>
                      <td className="pr-3 text-gray-600 dark:text-slate-400 whitespace-nowrap">
                        {c.impressions ? Number(c.impressions).toLocaleString("en-IN") : "—"}
                      </td>
                      <td className="pr-3 text-gray-600 dark:text-slate-400">
                        {c.clicks ? Number(c.clicks).toLocaleString("en-IN") : "—"}
                      </td>
                      <td className="pr-3">
                        <span className={`px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${statusBadge(c.status)}`}>
                          {c.status}
                        </span>
                      </td>
                      <td className="pr-3 text-gray-400 dark:text-slate-500 whitespace-nowrap text-[10px]">
                        {c.insightPeriod ?? (c.startDate !== "—" ? c.startDate : "—")}
                      </td>
                      <td>
                        <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700">
                          <MoreHorizontal size={14} className="text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
              {filtered.map((c, i) => (
                <div key={c._id ?? i} className="p-3.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <div className="min-w-0">
                      <p className="font-semibold text-sm truncate">{c.name}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{c.insightPeriod ?? c.startDate}</p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 flex-wrap justify-end">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${c.source === "meta" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" : "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"}`}>
                        {c.source === "meta" ? "Meta" : "DB"}
                      </span>
                      <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${statusBadge(c.status)}`}>{c.status}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div><p className="text-gray-400">Spend</p><p className="font-medium">{c.spend ? `₹${Number(c.spend).toLocaleString("en-IN")}` : "—"}</p></div>
                    <div><p className="text-gray-400">Leads</p><p className="font-bold text-indigo-500">{c.leads || "—"}</p></div>
                    <div><p className="text-gray-400">CPL</p><p className={`font-medium ${c.cpl != null && c.cpl > 400 ? "text-red-500" : "text-emerald-500"}`}>{c.cpl != null ? `₹${Number(c.cpl).toFixed(0)}` : "—"}</p></div>
                    <div><p className="text-gray-400">CTR</p><p className="font-medium">{c.ctr ? `${c.ctr}%` : "—"}</p></div>
                    <div><p className="text-gray-400">Impressions</p><p className="font-medium">{c.impressions ? Number(c.impressions).toLocaleString("en-IN") : "—"}</p></div>
                    <div><p className="text-gray-400">Clicks</p><p className="font-medium">{c.clicks ? Number(c.clicks).toLocaleString("en-IN") : "—"}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── CHARTS ────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">

        {/* Objective split */}
        <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-5">
          <h3 className="font-semibold text-sm mb-1">Objective split</h3>
          <p className="text-xs text-gray-400 dark:text-slate-500 mb-4">Meta campaigns by goal</p>
          {objectiveData.length === 0 ? (
            <div className="h-[200px] flex items-center justify-center text-gray-400 text-xs">Meta data load hoga toh dikhega</div>
          ) : (
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={objectiveData} cx="50%" cy="50%" innerRadius={48} outerRadius={72} paddingAngle={3} dataKey="value">
                    {objectiveData.map((_, idx) => <Cell key={idx} fill={PIE_COLORS[idx % PIE_COLORS.length]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "8px", fontSize: "11px" }} />
                  <Legend wrapperStyle={{ fontSize: "11px" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Status breakdown */}
        <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-5">
          <h3 className="font-semibold text-sm mb-1">Status breakdown</h3>
          <p className="text-xs text-gray-400 dark:text-slate-500 mb-4">Active vs paused</p>
          {statusData.length === 0 ? (
            <div className="h-[200px] flex items-center justify-center text-gray-400 text-xs">Data nahi mila</div>
          ) : (
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={statusData} cx="50%" cy="50%" innerRadius={48} outerRadius={72} paddingAngle={3} dataKey="value">
                    {statusData.map((entry, idx) => (
                      <Cell key={idx} fill={
                        ["ACTIVE","Live"].includes(entry.name)   ? "#22c55e" :
                        ["PAUSED","Paused"].includes(entry.name) ? "#94a3b8" :
                        entry.name === "Alert" ? "#f59e0b" :
                        entry.name === "Risk"  ? "#ef4444" : "#6366f1"
                      } />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "8px", fontSize: "11px" }} />
                  <Legend wrapperStyle={{ fontSize: "11px" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Leads by campaign */}
        <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-5">
          <h3 className="font-semibold text-sm mb-1">Leads by campaign</h3>
          <p className="text-xs text-gray-400 dark:text-slate-500 mb-4">Real data from Meta insights</p>
          {leadsChartData.length === 0 ? (
            <div className="h-[200px] flex items-center justify-center text-gray-400 text-xs">
              {metaLoading
                ? <span className="flex items-center gap-2"><Loader2 size={12} className="animate-spin" /> Loading…</span>
                : "Leads data nahi mila"}
            </div>
          ) : (
            <div style={{ height: `${Math.max(leadsChartData.length * 36 + 48, 200)}px` }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leadsChartData} layout="vertical" margin={{ left: 0, right: 24 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 9 }} stroke="#64748b" />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 9 }} stroke="#64748b" width={90} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "8px", fontSize: "11px" }}
                    formatter={(v: any, name: string) => [
                      name === "leads" ? v : `₹${Number(v).toLocaleString("en-IN")}`,
                      name === "leads" ? "Leads" : "CPL",
                    ]}
                  />
                  <Bar dataKey="leads" fill="#4f46e5" radius={[0, 3, 3, 0]} name="leads" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <NewCampaignModal
          onClose={() => setShowModal(false)}
          onCreated={handleCreated}
          clients={clients}
        />
      )}
    </div>
  );
}