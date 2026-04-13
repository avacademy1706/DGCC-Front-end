// "use client";

// import { useParams } from "next/navigation";
// import {
//   Building2,
//   Target,
//   Users,
//   Share2,
//   BarChart3,
//   Pencil,
// } from "lucide-react";
// import { useGet } from "@/hooks/useGet";

// export default function ClientDetailsPage() {

//       const { id } = useParams();


//       const { data, isLoading } = useGet("clients", `/clients/${id}`);



//   // demo data (API se replace karna)
//   const client = {
//     profile: {
//       companyName: "TechStart Solutions",
//       industry: "Education",
//       revenueModel: "B2C",
//       market: "India",
//       budget: "₹2,00,000",
//       description:
//         "TechStart provides online learning programs for software engineers.",
//       targetAudience: "Working professionals 22-35",
//     },
//     status: "in_progress",
//     currentStep: 3,
//     channels: ["Google Ads", "Meta Ads", "LinkedIn"],
//     team: [
//       { name: "Amit Sharma", role: "Account Manager" },
//       { name: "Priya Singh", role: "Performance Marketer" },
//     ],
//   };

//   const progress = (client.currentStep / 5) * 100;

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-[#020817] p-8 text-gray-900 dark:text-white">

//       {/* HEADER */}

//       <div className="flex items-center justify-between mb-8">

//         <div>

//           <h1 className="text-2xl font-bold">
//             {client.profile.companyName}
//           </h1>

//           <p className="text-sm text-gray-500 dark:text-slate-400">
//             {client.profile.industry} · Client ID {id}
//           </p>

//         </div>

//         <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">
//           <Pencil size={16} />
//           Edit Client
//         </button>

//       </div>

//       {/* ONBOARDING PROGRESS */}

//       <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6 mb-8">

//         <div className="flex items-center justify-between mb-4">

//           <p className="font-semibold">
//             Onboarding Progress
//           </p>

//           <span className="text-xs text-gray-500">
//             Step {client.currentStep} / 5
//           </span>

//         </div>

//         <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded">

//           <div
//             className="h-2 bg-indigo-600 rounded transition-all"
//             style={{ width: `${progress}%` }}
//           />

//         </div>

//       </div>

//       {/* MAIN GRID */}

//       <div className="grid grid-cols-3 gap-6">

//         {/* LEFT SIDE */}

//         <div className="col-span-2 space-y-6">

//           {/* COMPANY PROFILE */}

//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

//             <div className="flex items-center gap-2 mb-4">
//               <Building2 size={18} />
//               <h3 className="font-semibold">
//                 Company Profile
//               </h3>
//             </div>

//             <div className="grid grid-cols-2 gap-6 text-sm">

//               <div>
//                 <p className="text-gray-500">Industry</p>
//                 <p className="font-semibold">
//                   {client.profile.industry}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-gray-500">Revenue Model</p>
//                 <p className="font-semibold">
//                   {client.profile.revenueModel}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-gray-500">Market</p>
//                 <p className="font-semibold">
//                   {client.profile.market}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-gray-500">Monthly Budget</p>
//                 <p className="font-semibold text-emerald-500">
//                   {client.profile.budget}
//                 </p>
//               </div>

//             </div>

//             <div className="mt-4">

//               <p className="text-gray-500 text-sm">
//                 Business Description
//               </p>

//               <p className="text-sm mt-1">
//                 {client.profile.description}
//               </p>

//             </div>

//           </div>

//           {/* GOALS / KPIs */}

//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

//             <div className="flex items-center gap-2 mb-4">
//               <Target size={18} />
//               <h3 className="font-semibold">
//                 Marketing Goals & KPIs
//               </h3>
//             </div>

//             <div className="grid grid-cols-3 gap-6 text-sm">

//               <div className="p-4 rounded-lg bg-gray-50 dark:bg-slate-900">
//                 <p className="text-gray-500 text-xs">
//                   CPL Target
//                 </p>
//                 <p className="font-semibold">
//                   ₹450
//                 </p>
//               </div>

//               <div className="p-4 rounded-lg bg-gray-50 dark:bg-slate-900">
//                 <p className="text-gray-500 text-xs">
//                   ROAS Target
//                 </p>
//                 <p className="font-semibold">
//                   4.5x
//                 </p>
//               </div>

//               <div className="p-4 rounded-lg bg-gray-50 dark:bg-slate-900">
//                 <p className="text-gray-500 text-xs">
//                   Monthly Leads
//                 </p>
//                 <p className="font-semibold">
//                   1200
//                 </p>
//               </div>

//             </div>

//           </div>

//         </div>

//         {/* RIGHT SIDE */}

//         <div className="space-y-6">

//           {/* CHANNELS */}

//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

//             <div className="flex items-center gap-2 mb-4">
//               <Share2 size={18} />
//               <h3 className="font-semibold">
//                 Marketing Channels
//               </h3>
//             </div>

//             <div className="space-y-3 text-sm">

//               {client.channels.map((channel, i) => (
//                 <div
//                   key={i}
//                   className="p-3 rounded-md bg-gray-50 dark:bg-slate-900"
//                 >
//                   {channel}
//                 </div>
//               ))}

//             </div>

//           </div>

//           {/* TEAM */}

//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

//             <div className="flex items-center gap-2 mb-4">
//               <Users size={18} />
//               <h3 className="font-semibold">
//                 Team Members
//               </h3>
//             </div>

//             <div className="space-y-4 text-sm">

//               {client.team.map((member, i) => (
//                 <div key={i} className="flex justify-between">

//                   <p>{member.name}</p>

//                   <span className="text-xs text-gray-500">
//                     {member.role}
//                   </span>

//                 </div>
//               ))}

//             </div>

//           </div>

//           {/* CAMPAIGN PERFORMANCE */}

//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

//             <div className="flex items-center gap-2 mb-4">
//               <BarChart3 size={18} />
//               <h3 className="font-semibold">
//                 Campaign Performance
//               </h3>
//             </div>

//             <div className="text-sm space-y-3">

//               <div className="flex justify-between">
//                 <p>Total Leads</p>
//                 <p className="font-semibold">845</p>
//               </div>

//               <div className="flex justify-between">
//                 <p>Ad Spend</p>
//                 <p className="font-semibold">₹1.4L</p>
//               </div>

//               <div className="flex justify-between">
//                 <p>Revenue</p>
//                 <p className="font-semibold text-emerald-500">
//                   ₹6.3L
//                 </p>
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }


// "use client";

// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Building2, Target, Users, Share2, BarChart3, Pencil,
//   ArrowLeft, CheckCircle2, Clock, AlertCircle, MapPin,
//   DollarSign, TrendingUp, Mail, Briefcase, Globe,
//   Megaphone, Calendar, ChevronRight,
// } from "lucide-react";
// import { useGet } from "@/hooks/useGet";

// const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// // ─── Helpers ──────────────────────────────────────────────────────────────────
// const statusConfig: Record<string, { label: string; color: string; icon: any }> = {
//   completed:   { label: "Active",      color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", icon: CheckCircle2 },
//   in_progress: { label: "In Progress", color: "bg-amber-500/15 text-amber-400 border-amber-500/30",      icon: Clock },
//   draft:       { label: "Draft",       color: "bg-slate-500/15 text-slate-400 border-slate-500/30",       icon: AlertCircle },
// };

// const STEP_LABELS = ["Profile", "Goals", "Channels", "KPIs", "Stakeholders"];

// const channelColors: Record<string, string> = {
//   "Google Ads":   "bg-blue-500/10 text-blue-400 border-blue-500/20",
//   "Meta Ads":     "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
//   "SEO":          "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
//   "YouTube":      "bg-red-500/10 text-red-400 border-red-500/20",
//   "LinkedIn Ads": "bg-sky-500/10 text-sky-400 border-sky-500/20",
//   "WhatsApp":     "bg-green-500/10 text-green-400 border-green-500/20",
//   "Email":        "bg-amber-500/10 text-amber-400 border-amber-500/20",
// };

// const goalIcons: Record<string, string> = {
//   "Lead Generation":  "🎯",
//   "Sales Conversion": "💰",
//   "Website Traffic":  "🌐",
//   "Brand Awareness":  "📢",
//   "Retention":        "🔄",
//   "App Installs":     "📱",
// };

// // ─── Skeleton Loader ──────────────────────────────────────────────────────────
// function Skeleton({ className }: { className?: string }) {
//   return <div className={`animate-pulse rounded bg-gray-200 dark:bg-slate-700/60 ${className}`} />;
// }

// function PageSkeleton() {
//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-[#020817] p-8">
//       <div className="flex items-center justify-between mb-8">
//         <div className="space-y-2">
//           <Skeleton className="h-8 w-56" />
//           <Skeleton className="h-4 w-40" />
//         </div>
//         <Skeleton className="h-9 w-32" />
//       </div>
//       <Skeleton className="h-24 w-full rounded-xl mb-6" />
//       <div className="grid grid-cols-3 gap-6">
//         <div className="col-span-2 space-y-6">
//           <Skeleton className="h-48 rounded-xl" />
//           <Skeleton className="h-36 rounded-xl" />
//         </div>
//         <div className="space-y-6">
//           <Skeleton className="h-40 rounded-xl" />
//           <Skeleton className="h-36 rounded-xl" />
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Section Card ──────────────────────────────────────────────────────────────
// function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
//   return (
//     <div className={`rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6 ${className}`}>
//       {children}
//     </div>
//   );
// }

// function SectionHeader({ icon: Icon, title }: { icon: any; title: string }) {
//   return (
//     <div className="flex items-center gap-2.5 mb-5">
//       <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
//         <Icon size={16} className="text-indigo-500" />
//       </div>
//       <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
//     </div>
//   );
// }

// // ═══════════════════════════════════════════════════════════════════════════════
// // MAIN PAGE
// // ═══════════════════════════════════════════════════════════════════════════════
// export default function ClientDetailsPage() {
//   const { id }   = useParams();
//   const router   = useRouter();
//   // const [client, setClient]   = useState<any>(null);
//   const [error, setError]     = useState<string | null>(null);


//         const { data, isLoading } = useGet("client-details", `/clients/${id}`);

// const client = data?.client || null;
// // useEffect(()=>{
// //   if(data?.client){
// //     setClient(data.client)  // ← backend response mein "client" key hai, "data" nahi
// //   }
// // }, [data])  

//   if (isLoading) return <PageSkeleton />;

//   if (error || !client) {
//     return (
//       <div className="min-h-screen bg-gray-50 dark:bg-[#020817] flex items-center justify-center">
//         <div className="text-center">
//           <AlertCircle size={40} className="text-red-400 mx-auto mb-4" />
//           <p className="text-gray-600 dark:text-slate-400">{error || "Client nahi mila"}</p>
//           <button onClick={() => router.back()} className="mt-4 text-indigo-500 text-sm hover:underline">
//             ← Wapas jao
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // ─── Destructure client data ────────────────────────────────────────────────
//   const { profile, goals, channels, kpis, stakeholders, status, currentStep, createdAt } = client;
//   const cfg      = statusConfig[status] || statusConfig.draft;
//   const StatusIcon = cfg.icon;
//   const progress = status === "completed" ? 100 : ((currentStep - 1) / 5) * 100;
//   const letter   = profile?.companyName?.charAt(0)?.toUpperCase() || "?";
//   const createdDate = new Date(createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-[#020817] p-8 text-gray-900 dark:text-white">

//       {/* HEADER */}
//       <div className="flex items-start justify-between mb-8">
//         <div className="flex items-start gap-4">
//           {/* Back */}
//           <button onClick={() => router.back()}
//             className="mt-1 p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors">
//             <ArrowLeft size={18} className="text-gray-500" />
//           </button>

//           {/* Avatar + Name */}
//           <div className="flex items-center gap-4">
//             <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
//               {letter}
//             </div>
//             <div>
//               <div className="flex items-center gap-3">
//                 <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
//                   {profile?.companyName || "Unnamed Client"}
//                 </h1>
//                 <span className={`flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border font-medium ${cfg.color}`}>
//                   <StatusIcon size={11} />
//                   {cfg.label}
//                 </span>
//               </div>
//               <p className="text-sm text-gray-500 dark:text-slate-400 mt-0.5 flex items-center gap-3">
//                 <span>{profile?.industry}</span>
//                 <span>·</span>
//                 <span className="font-mono text-xs">ID: {String(id).slice(-8).toUpperCase()}</span>
//                 <span>·</span>
//                 <span className="flex items-center gap-1"><Calendar size={12} /> {createdDate}</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm transition-colors">
//           <Pencil size={14} /> Edit Client
//         </button>
//       </div>

//       {/* ONBOARDING PROGRESS */}
//       <Card className="mb-6">
//         <div className="flex items-center justify-between mb-4">
//           <p className="font-semibold text-gray-900 dark:text-white">Onboarding Progress</p>
//           <span className="text-xs text-gray-500 dark:text-slate-400">
//             {status === "completed" ? "All 5 steps complete ✓" : `Step ${currentStep} / 5`}
//           </span>
//         </div>

//         {/* Step indicators */}
//         <div className="flex items-center mb-3">
//           {STEP_LABELS.map((label, i) => {
//             const done   = i + 1 < currentStep || status === "completed";
//             const active = i + 1 === currentStep && status !== "completed";
//             return (
//               <div key={i} className="flex items-center flex-1">
//                 <div className="flex flex-col items-center gap-1">
//                   <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-all
//                     ${done   ? "bg-emerald-500 text-white"
//                     : active ? "bg-indigo-600 text-white ring-4 ring-indigo-500/20"
//                     :          "bg-gray-200 dark:bg-slate-700 text-gray-400"}`}>
//                     {done ? <CheckCircle2 size={14} /> : i + 1}
//                   </div>
//                   <span className={`text-[10px] font-medium hidden sm:block
//                     ${done ? "text-emerald-500" : active ? "text-indigo-500" : "text-gray-400"}`}>
//                     {label}
//                   </span>
//                 </div>
//                 {i !== STEP_LABELS.length - 1 && (
//                   <div className={`flex-1 h-[2px] mx-2 mb-4 rounded transition-all
//                     ${done ? "bg-emerald-400" : "bg-gray-200 dark:bg-slate-700"}`} />
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </Card>

//       {/* MAIN GRID */}
//       <div className="grid grid-cols-3 gap-6">

//         {/* LEFT SIDE — 2 cols */}
//         <div className="col-span-2 space-y-6">

//           {/* COMPANY PROFILE */}
//           <Card>
//             <SectionHeader icon={Building2} title="Company Profile" />
//             <div className="grid grid-cols-2 gap-5 text-sm mb-5">
//               {[
//                 { icon: Briefcase, label: "Industry",       value: profile?.industry       },
//                 { icon: TrendingUp,label: "Revenue Model",  value: profile?.revenueModel   },
//                 { icon: MapPin,    label: "Primary Market", value: profile?.market         },
//                 { icon: DollarSign,label: "Monthly Budget", value: profile?.budget ? `₹${profile.budget}` : "—", green: true },
//               ].map(({ icon: Icon, label, value, green }) => (
//                 <div key={label} className="flex items-start gap-3 p-3.5 rounded-lg bg-gray-50 dark:bg-slate-900/60">
//                   <div className="w-7 h-7 rounded-md bg-gray-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
//                     <Icon size={13} className="text-gray-500 dark:text-slate-400" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500 dark:text-slate-500">{label}</p>
//                     <p className={`font-semibold mt-0.5 ${green ? "text-emerald-500" : "text-gray-900 dark:text-white"}`}>
//                       {value || "—"}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Target Audience */}
//             {profile?.targetAudience && (
//               <div className="p-3.5 rounded-lg bg-gray-50 dark:bg-slate-900/60 mb-4 text-sm">
//                 <p className="text-xs text-gray-500 dark:text-slate-500 mb-1 flex items-center gap-1.5">
//                   <Users size={11} /> Target Audience
//                 </p>
//                 <p className="font-medium text-gray-900 dark:text-white">{profile.targetAudience}</p>
//               </div>
//             )}

//             {/* Description */}
//             {profile?.description && (
//               <div className="p-3.5 rounded-lg bg-gray-50 dark:bg-slate-900/60 text-sm">
//                 <p className="text-xs text-gray-500 dark:text-slate-500 mb-1.5">Business Description</p>
//                 <p className="text-gray-700 dark:text-slate-300 leading-relaxed">{profile.description}</p>
//               </div>
//             )}
//           </Card>

//           {/* GOALS */}
//           <Card>
//             <SectionHeader icon={Target} title="Marketing Goals" />
//             {goals?.primaryGoals?.length > 0 && (
//               <div className="flex flex-wrap gap-2 mb-5">
//                 {goals.primaryGoals.map((g: string) => (
//                   <span key={g} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-medium">
//                     <span>{goalIcons[g] || "🎯"}</span>{g}
//                   </span>
//                 ))}
//               </div>
//             )}
//             <div className="grid grid-cols-3 gap-4 text-sm">
//               {[
//                 { label: "Growth Target", value: goals?.growthTarget || "—" },
//                 { label: "Timeline",      value: goals?.timeline      || "—" },
//                 { label: "Reporting",     value: kpis?.reportingFreq  || "—" },
//               ].map(({ label, value }) => (
//                 <div key={label} className="p-3.5 rounded-lg bg-gray-50 dark:bg-slate-900/60 text-center">
//                   <p className="text-xs text-gray-500 dark:text-slate-500 mb-1">{label}</p>
//                   <p className="font-semibold text-gray-900 dark:text-white">{value}</p>
//                 </div>
//               ))}
//             </div>
//             {goals?.goalNotes && (
//               <p className="text-xs text-gray-500 dark:text-slate-500 mt-4 italic">"{goals.goalNotes}"</p>
//             )}
//           </Card>

//           {/* KPIs */}
//           <Card>
//             <SectionHeader icon={BarChart3} title="KPI Targets" />
//             <div className="grid grid-cols-3 gap-4 text-sm">
//               {[
//                 { label: "CPL Target",       value: kpis?.cpl            ? `₹${kpis.cpl}`  : "—" },
//                 { label: "CAC Target",       value: kpis?.cac            ? `₹${kpis.cac}`  : "—" },
//                 { label: "ROAS Target",      value: kpis?.roas           ? `${kpis.roas}x` : "—" },
//                 { label: "LTV Target",       value: kpis?.ltv            ? `₹${kpis.ltv}`  : "—" },
//                 { label: "Conversion Rate",  value: kpis?.conversionRate ? `${kpis.conversionRate}%` : "—" },
//                 { label: "Lead Target/mo",   value: kpis?.leadTarget     || "—" },
//               ].map(({ label, value }) => (
//                 <div key={label} className="p-3.5 rounded-lg bg-gray-50 dark:bg-slate-900/60">
//                   <p className="text-xs text-gray-500 dark:text-slate-500">{label}</p>
//                   <p className={`font-semibold mt-1 ${value === "—" ? "text-gray-400" : "text-gray-900 dark:text-white"}`}>
//                     {value}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </Card>

//         </div>

//         {/* RIGHT SIDE — 1 col */}
//         <div className="space-y-6">

//           {/* CHANNELS */}
//           <Card>
//             <SectionHeader icon={Share2} title="Marketing Channels" />
//             {channels?.channels?.length > 0 ? (
//               <div className="space-y-2">
//                 {channels.channels.map((ch: string) => (
//                   <div key={ch}
//                     className={`flex items-center justify-between px-3 py-2.5 rounded-lg border text-xs font-medium
//                       ${channelColors[ch] || "bg-gray-50 text-gray-600 border-gray-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700"}`}>
//                     <span>{ch}</span>
//                     <ChevronRight size={12} className="opacity-50" />
//                   </div>
//                 ))}
//               </div>
//             ) : <p className="text-sm text-gray-400">Channels set nahi hue</p>}

//             {/* CRM & Analytics */}
//             {(channels?.crm || channels?.analytics) && (
//               <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-800 space-y-2 text-xs">
//                 {channels.crm && channels.crm !== "None" && (
//                   <div className="flex justify-between">
//                     <span className="text-gray-500">CRM</span>
//                     <span className="font-medium text-gray-900 dark:text-white">{channels.crm}</span>
//                   </div>
//                 )}
//                 {channels.analytics && (
//                   <div className="flex justify-between">
//                     <span className="text-gray-500">Analytics</span>
//                     <span className="font-medium text-gray-900 dark:text-white">{channels.analytics}</span>
//                   </div>
//                 )}
//               </div>
//             )}
//           </Card>

//           {/* STAKEHOLDERS */}
//           {stakeholders?.length > 0 && (
//             <Card>
//               <SectionHeader icon={Users} title="Stakeholders" />
//               <div className="space-y-3">
//                 {stakeholders.map((s: any, i: number) => (
//                   <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-900/60">
//                     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
//                       {s.name?.charAt(0)?.toUpperCase()}
//                     </div>
//                     <div className="min-w-0">
//                       <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{s.name}</p>
//                       <p className="text-xs text-gray-500 dark:text-slate-500 truncate flex items-center gap-1 mt-0.5">
//                         <Mail size={10} />{s.email}
//                       </p>
//                       <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
//                         {s.role}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Card>
//           )}

//           {/* QUICK STATS */}
//           <Card>
//             <SectionHeader icon={Megaphone} title="Quick Info" />
//             <div className="space-y-3 text-sm">
//               {[
//                 { label: "Onboarded On",  value: createdDate },
//                 { label: "Current Step",  value: status === "completed" ? "Completed ✓" : `Step ${currentStep}/5` },
//                 { label: "Channels",      value: `${channels?.channels?.length || 0} Active` },
//                 { label: "Stakeholders",  value: `${stakeholders?.length || 0} Members` },
//                 { label: "Goals",         value: `${goals?.primaryGoals?.length || 0} Defined` },
//               ].map(({ label, value }) => (
//                 <div key={label} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-slate-800 last:border-0">
//                   <span className="text-gray-500 dark:text-slate-400">{label}</span>
//                   <span className="font-medium text-gray-900 dark:text-white text-xs">{value}</span>
//                 </div>
//               ))}
//             </div>
//           </Card>

//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  Building2,
  Target,
  Users,
  Share2,
  BarChart3,
  Pencil,
  ArrowLeft,
  CheckCircle2,
  Clock,
  AlertCircle,
  MapPin,
  DollarSign,
  TrendingUp,
  Mail,
  Briefcase,
  Megaphone,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { useGet } from "@/hooks/useGet";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const statusConfig: Record<
  string,
  { label: string; color: string; icon: any }
> = {
  completed: {
    label: "Active",
    color:
      "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    icon: CheckCircle2,
  },
  in_progress: {
    label: "In Progress",
    color: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    icon: Clock,
  },
  draft: {
    label: "Draft",
    color: "bg-slate-500/15 text-slate-400 border-slate-500/30",
    icon: AlertCircle,
  },
};

const STEP_LABELS = [
  "Profile",
  "Goals",
  "Channels",
  "KPIs",
  "Stakeholders",
];

const channelColors: Record<string, string> = {
  "Google Ads": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Meta Ads": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  SEO: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  YouTube: "bg-red-500/10 text-red-400 border-red-500/20",
  "LinkedIn Ads": "bg-sky-500/10 text-sky-400 border-sky-500/20",
  WhatsApp: "bg-green-500/10 text-green-400 border-green-500/20",
  Email: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

const goalIcons: Record<string, string> = {
  "Lead Generation": "🎯",
  "Sales Conversion": "💰",
  "Website Traffic": "🌐",
  "Brand Awareness": "📢",
  Retention: "🔄",
  "App Installs": "📱",
};

function formatCurrency(value?: string | number | null) {
  if (value === null || value === undefined || value === "") return "—";

  const cleaned = String(value).replace(/,/g, "").trim();
  const number = Number(cleaned);

  if (!Number.isFinite(number)) return "—";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(number);
}

// ─── Skeleton Loader ──────────────────────────────────────────────────────────
function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded bg-gray-200 dark:bg-slate-700/60 ${className}`}
    />
  );
}

function PageSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020817] p-4 md:p-6 lg:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
        <div className="space-y-2">
          <Skeleton className="h-8 w-56" />
          <Skeleton className="h-4 w-40" />
        </div>
        <Skeleton className="h-10 w-32" />
      </div>

      <Skeleton className="h-28 w-full rounded-xl mb-6" />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <Skeleton className="h-56 rounded-xl" />
          <Skeleton className="h-44 rounded-xl" />
          <Skeleton className="h-44 rounded-xl" />
        </div>
        <div className="space-y-6">
          <Skeleton className="h-56 rounded-xl" />
          <Skeleton className="h-44 rounded-xl" />
          <Skeleton className="h-44 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

// ─── Section Card ─────────────────────────────────────────────────────────────
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHeader({
  icon: Icon,
  title,
}: {
  icon: any;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center">
        <Icon size={16} className="text-indigo-500" />
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
    </div>
  );
}

type Client = {
  _id: string;
  status?: string;
  currentStep?: number;
  profile?: {
    companyName?: string;
    industry?: string;
    revenueModel?: string;
    market?: string;
    description?: string;
    targetAudience?: string;
    budget?: string;
    _id?: string;
  };
  goals?: {
    primaryGoals?: string[];
    growthTarget?: string;
    timeline?: string;
    goalNotes?: string;
    _id?: string;
  };
  channels?: {
    channels?: string[];
    crm?: string;
    analytics?: string;
    channelConfigs?: Record<string, unknown>;
    _id?: string;
  };
  kpis?: {
    cpl?: string;
    cac?: string;
    roas?: string;
    ltv?: string;
    conversionRate?: string;
    leadTarget?: string;
    reportingFreq?: string;
    _id?: string;
  };
  stakeholders?: Array<{
    name?: string;
    email?: string;
    role?: string;
    canLogin?: boolean;
    _id?: string;
    lastLogin?: string;
  }>;
  createdAt?: string;
  updatedAt?: string;
};

type GetClientByIdResponse = {
  success: boolean;
  message: string;
  client: Client;
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════════
export default function ClientDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const id = useMemo(() => {
    const rawId = params?.id;
    return Array.isArray(rawId) ? rawId[0] : rawId;
  }, [params]);

  const [error, setError] = useState<string | null>(null);

  const {
    data,
    isLoading,
    isError,
  } = useGet<GetClientByIdResponse>(["client-details", id], `/clients/${id}`, {
    enabled: !!id,
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  const client = data?.client ?? null;

  useEffect(() => {
    if (!isLoading && (isError || !client)) {
      setError("Client nahi mila");
    } else {
      setError(null);
    }
  }, [isLoading, isError, client, id]);

  if (isLoading) return <PageSkeleton />;

  if (error || !client) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#020817] flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <AlertCircle size={40} className="text-red-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-slate-400">
            {error || "Client nahi mila"}
          </p>
          <button
            onClick={() => router.back()}
            className="mt-4 text-indigo-500 text-sm hover:underline"
          >
            ← Wapas jao
          </button>
        </div>
      </div>
    );
  }

  // ─── Destructure client data ────────────────────────────────────────────────
  const {
    profile,
    goals,
    channels,
    kpis,
    stakeholders,
    status,
    currentStep,
    createdAt,
  } = client;

  const safeStatus = status ?? "draft";
const cfg = statusConfig[safeStatus] || statusConfig.draft;
  const StatusIcon = cfg.icon;
  const safeCurrentStep = currentStep ?? 1;

const progress =
  status === "completed"
    ? 100
    : Math.max(((safeCurrentStep - 1) / 5) * 100, 0);
  const letter = profile?.companyName?.charAt(0)?.toUpperCase() || "?";
  const createdDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "—";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020817] p-4 md:p-6 lg:p-8 text-gray-900 dark:text-white">
      {/* HEADER */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between mb-6 md:mb-8">
        <div className="flex items-start gap-3 md:gap-4 min-w-0">
          <button
            onClick={() => router.back()}
            className="mt-1 p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors shrink-0"
          >
            <ArrowLeft size={18} className="text-gray-500" />
          </button>

          <div className="flex items-start gap-3 md:gap-4 min-w-0">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg shrink-0">
              {letter}
            </div>

            <div className="min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white break-words">
                  {profile?.companyName || "Unnamed Client"}
                </h1>

                <span
                  className={`w-fit flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border font-medium ${cfg.color}`}
                >
                  <StatusIcon size={11} />
                  {cfg.label}
                </span>
              </div>

              <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>{profile?.industry || "—"}</span>
                <span className="hidden sm:inline">·</span>
                <span className="font-mono text-[11px] md:text-xs">
                  ID: {String(id).slice(-8).toUpperCase()}
                </span>
                <span className="hidden sm:inline">·</span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {createdDate}
                </span>
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => router.push(`/client-onboarding?edit=${id}`)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm transition-colors"
        >
          <Pencil size={14} /> Edit Client
        </button>
      </div>

      {/* ONBOARDING PROGRESS */}
      <Card className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <p className="font-semibold text-gray-900 dark:text-white">
            Onboarding Progress
          </p>
          <span className="text-xs text-gray-500 dark:text-slate-400">
            {status === "completed"
              ? "All 5 steps complete ✓"
              : `Step ${safeCurrentStep} / 5`}
          </span>
        </div>

        <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-slate-800 mb-5 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              status === "completed" ? "bg-emerald-500" : "bg-indigo-500"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {STEP_LABELS.map((label, i) => {
            const done = i + 1 <  safeCurrentStep || status === "completed";
            const active = i + 1 === safeCurrentStep && status !== "completed";

            return (
              <div key={i} className="flex items-center min-w-max flex-1">
                <div className="flex flex-col items-center gap-1 min-w-[56px]">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-all
                    ${
                      done
                        ? "bg-emerald-500 text-white"
                        : active
                        ? "bg-indigo-600 text-white ring-4 ring-indigo-500/20"
                        : "bg-gray-200 dark:bg-slate-700 text-gray-400"
                    }`}
                  >
                    {done ? <CheckCircle2 size={14} /> : i + 1}
                  </div>
                  <span
                    className={`text-[10px] font-medium text-center
                    ${
                      done
                        ? "text-emerald-500"
                        : active
                        ? "text-indigo-500"
                        : "text-gray-400"
                    }`}
                  >
                    {label}
                  </span>
                </div>

                {i !== STEP_LABELS.length - 1 && (
                  <div
                    className={`flex-1 h-[2px] mx-2 rounded transition-all min-w-[24px]
                    ${
                      done
                        ? "bg-emerald-400"
                        : "bg-gray-200 dark:bg-slate-700"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="xl:col-span-2 space-y-6">
          {/* COMPANY PROFILE */}
          <Card>
            <SectionHeader icon={Building2} title="Company Profile" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 text-sm mb-5">
              {[
                {
                  icon: Briefcase,
                  label: "Industry",
                  value: profile?.industry,
                },
                {
                  icon: TrendingUp,
                  label: "Revenue Model",
                  value: profile?.revenueModel,
                },
                {
                  icon: MapPin,
                  label: "Primary Market",
                  value: profile?.market,
                },
                {
                  icon: DollarSign,
                  label: "Monthly Budget",
                  value: formatCurrency(profile?.budget),
                  green: true,
                },
              ].map(({ icon: Icon, label, value, green }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-gray-50 dark:bg-slate-900/60"
                >
                  <div className="w-7 h-7 rounded-md bg-gray-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <Icon
                      size={13}
                      className="text-gray-500 dark:text-slate-400"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 dark:text-slate-500">
                      {label}
                    </p>
                    <p
                      className={`font-semibold mt-0.5 break-words ${
                        green
                          ? "text-emerald-500"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {value || "—"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {profile?.targetAudience && (
              <div className="p-3.5 rounded-lg bg-gray-50 dark:bg-slate-900/60 mb-4 text-sm">
                <p className="text-xs text-gray-500 dark:text-slate-500 mb-1 flex items-center gap-1.5">
                  <Users size={11} /> Target Audience
                </p>
                <p className="font-medium text-gray-900 dark:text-white break-words">
                  {profile.targetAudience}
                </p>
              </div>
            )}

            {profile?.description && (
              <div className="p-3.5 rounded-lg bg-gray-50 dark:bg-slate-900/60 text-sm">
                <p className="text-xs text-gray-500 dark:text-slate-500 mb-1.5">
                  Business Description
                </p>
                <p className="text-gray-700 dark:text-slate-300 leading-relaxed break-words">
                  {profile.description}
                </p>
              </div>
            )}
          </Card>

          {/* GOALS */}
          <Card>
            <SectionHeader icon={Target} title="Marketing Goals" />

            {(goals?.primaryGoals?.length ?? 0) > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {(goals?.primaryGoals ?? []).map((g: string) => (
                  <span
                    key={g}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-medium"
                  >
                    <span>{goalIcons[g] || "🎯"}</span>
                    {g}
                  </span>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              {[
                { label: "Growth Target", value: goals?.growthTarget || "—" },
                { label: "Timeline", value: goals?.timeline || "—" },
                { label: "Reporting", value: kpis?.reportingFreq || "—" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="p-3.5 rounded-lg bg-gray-50 dark:bg-slate-900/60 text-center"
                >
                  <p className="text-xs text-gray-500 dark:text-slate-500 mb-1">
                    {label}
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white break-words">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {goals?.goalNotes && (
              <p className="text-xs text-gray-500 dark:text-slate-500 mt-4 italic break-words">
                "{goals.goalNotes}"
              </p>
            )}
          </Card>

          {/* KPIs */}
          <Card>
            <SectionHeader icon={BarChart3} title="KPI Targets" />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 text-sm">
              {[
                {
                  label: "CPL Target",
                  value: kpis?.cpl ? formatCurrency(kpis.cpl) : "—",
                },
                {
                  label: "CAC Target",
                  value: kpis?.cac ? formatCurrency(kpis.cac) : "—",
                },
                {
                  label: "ROAS Target",
                  value: kpis?.roas ? `${kpis.roas}x` : "—",
                },
                {
                  label: "LTV Target",
                  value: kpis?.ltv ? formatCurrency(kpis.ltv) : "—",
                },
                {
                  label: "Conversion Rate",
                  value: kpis?.conversionRate
                    ? `${kpis.conversionRate}%`
                    : "—",
                },
                {
                  label: "Lead Target/mo",
                  value: kpis?.leadTarget || "—",
                },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="p-3.5 rounded-lg bg-gray-50 dark:bg-slate-900/60"
                >
                  <p className="text-xs text-gray-500 dark:text-slate-500">
                    {label}
                  </p>
                  <p
                    className={`font-semibold mt-1 break-words ${
                      value === "—"
                        ? "text-gray-400"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* CHANNELS */}
          <Card>
            <SectionHeader icon={Share2} title="Marketing Channels" />

            {(channels?.channels?.length ?? 0) > 0 ? (
              <div className="space-y-2">
                {(channels?.channels ?? []).map((ch: string) => (
                  <div
                    key={ch}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg border text-xs font-medium
                      ${
                        channelColors[ch] ||
                        "bg-gray-50 text-gray-600 border-gray-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700"
                      }`}
                  >
                    <span>{ch}</span>
                    <ChevronRight size={12} className="opacity-50" />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400">Channels set nahi hue</p>
            )}

            {(channels?.crm || channels?.analytics) && (
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-800 space-y-2 text-xs">
                {channels.crm && (
                  <div className="flex justify-between gap-3">
                    <span className="text-gray-500">CRM</span>
                    <span className="font-medium text-gray-900 dark:text-white text-right break-words">
                      {channels.crm}
                    </span>
                  </div>
                )}

                {channels.analytics && (
                  <div className="flex justify-between gap-3">
                    <span className="text-gray-500">Analytics</span>
                    <span className="font-medium text-gray-900 dark:text-white text-right break-words">
                      {channels.analytics}
                    </span>
                  </div>
                )}
              </div>
            )}
          </Card>

          {/* STAKEHOLDERS */}
          {(stakeholders?.length ?? 0) > 0 && (
            <Card>
              <SectionHeader icon={Users} title="Stakeholders" />

              <div className="space-y-3">
                {(stakeholders ?? []).map((s: any, i: number) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-900/60"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {s.name?.charAt(0)?.toUpperCase() || "?"}
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {s.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-slate-500 truncate flex items-center gap-1 mt-0.5">
                        <Mail size={10} />
                        {s.email}
                      </p>
                      <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                        {s.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* QUICK STATS */}
          <Card>
            <SectionHeader icon={Megaphone} title="Quick Info" />

            <div className="space-y-3 text-sm">
              {[
                { label: "Onboarded On", value: createdDate },
                {
                  label: "Current Step",
                  value:
                    status === "completed"
                      ? "Completed ✓"
                      : `Step ${safeCurrentStep}/5`,
                },
                {
                  label: "Channels",
                  value: `${channels?.channels?.length || 0} Active`,
                },
                {
                  label: "Stakeholders",
                  value: `${stakeholders?.length || 0} Members`,
                },
                {
                  label: "Goals",
                  value: `${goals?.primaryGoals?.length || 0} Defined`,
                },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-3 py-2 border-b border-gray-100 dark:border-slate-800 last:border-0"
                >
                  <span className="text-gray-500 dark:text-slate-400">
                    {label}
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white text-xs text-right break-words">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}