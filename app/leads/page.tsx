// "use client";

// import { useState, useMemo } from "react";
// import {
//   Download, Plus, BarChart3, Star, Search, RefreshCw, X,
//   Clock, TrendingUp, AlertCircle, Mail, Phone, User,
//   ExternalLink, Megaphone, ChevronRight, SlidersHorizontal,
//   Building2, MapPin, Briefcase,
// } from "lucide-react";
// import { useGet } from "@/hooks/useGet";

// // ─── Types ────────────────────────────────────────────────────────────────────
// interface Lead {
//   lead_id: string; form_id: string; form_name: string; created_time: string;
//   ad_id?: string; ad_name?: string; adset_id?: string; adset_name?: string;
//   campaign_id?: string; platform?: string; is_organic?: boolean;
//   full_name?: string; name?: string; first_name?: string; last_name?: string;
//   email?: string; email_address?: string; phone_number?: string; phone?: string;
//   mobile?: string; city?: string; state?: string; clientId?: string;
//   [key: string]: any;
// }
// interface LeadsResponse { success: boolean; total: number; data: Lead[]; }

// // JustDial lead — from /api/justdial
// interface JDLead {
//   message_id: string; received_at: string; subject: string; from: string;
//   source: "JustDial"; name: string; service: string; area: string;
//   city: string; state: string; business: string; branch: string;
//   search_datetime: string; phone: string; email: string;
// }
// interface JDResponse {
//   success: boolean; total: number; cached?: boolean; fetchedAt?: number; data: JDLead[];
// }

// interface Client { _id: string; profile?: { companyName?: string }; }
// interface ClientsResponse { clients: Client[]; }

// // ─── Helpers ──────────────────────────────────────────────────────────────────
// const getName  = (l: Lead) => l.full_name || l.name || (l.first_name ? `${l.first_name} ${l.last_name || ""}`.trim() : "") || "—";
// const getEmail = (l: Lead) => l.email || l.email_address || "—";
// const getPhone = (l: Lead) => l.phone_number || l.phone || l.mobile || "—";
// const getCity  = (l: Lead) => l.city || l.state || "—";

// const timeAgo = (iso: string) => {
//   const diff = Date.now() - new Date(iso).getTime();
//   const m = Math.floor(diff / 60000), h = Math.floor(m / 60), d = Math.floor(h / 24);
//   if (d > 0) return `${d}d ago`; if (h > 0) return `${h}h ago`;
//   if (m > 0) return `${m}m ago`; return "Just now";
// };
// const formatDate = (iso: string) => {
//   try { return new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }); }
//   catch { return iso; }
// };
// const avatarGradient = (name: string) => {
//   const g = ["from-indigo-500 to-purple-600","from-pink-500 to-rose-600","from-amber-500 to-orange-600",
//              "from-emerald-500 to-teal-600","from-cyan-500 to-blue-600","from-violet-500 to-indigo-600"];
//   return g[(name.charCodeAt(0) || 0) % g.length];
// };
// const platformBadge: Record<string, string> = {
//   facebook:  "bg-blue-500/10 text-blue-400 border-blue-500/20",
//   instagram: "bg-pink-500/10 text-pink-400 border-pink-500/20",
//   messenger: "bg-violet-500/10 text-violet-400 border-violet-500/20",
// };
// const META_SYSTEM_KEYS = new Set([
//   "lead_id","form_id","form_name","created_time","ad_id","ad_name","adset_id","adset_name",
//   "campaign_id","platform","is_organic","full_name","name","first_name","last_name","email",
//   "email_address","phone_number","phone","mobile","city","state","clientId",
// ]);

// const PER_PAGE = 25;
// const PIPELINE_STAGES = [
//   { key: "new",       title: "New",       color: "bg-blue-500"    },
//   { key: "working",   title: "Working",   color: "bg-amber-500"   },
//   { key: "qualified", title: "Qualified", color: "bg-indigo-500"  },
//   { key: "won",       title: "Won",       color: "bg-emerald-500" },
//   { key: "lost",      title: "Lost",      color: "bg-red-500"     },
//   { key: "nurture",   title: "Nurture",   color: "bg-purple-500"  },
// ];

// // ─── Skeletons ────────────────────────────────────────────────────────────────
// function SkeletonRow() {
//   return (
//     <tr className="animate-pulse">
//       {[160,130,180,130,160,100,100].map((w,i) => (
//         <td key={i} className="px-4 py-3.5">
//           <div className="h-3.5 bg-gray-100 dark:bg-slate-800 rounded-full" style={{ width: w }}/>
//         </td>
//       ))}
//     </tr>
//   );
// }
// function SkeletonCard() {
//   return (
//     <div className="animate-pulse p-4 border-b border-gray-100 dark:border-slate-800">
//       <div className="flex items-center gap-3 mb-3">
//         <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-700 shrink-0"/>
//         <div className="flex-1 space-y-2">
//           <div className="h-3.5 bg-gray-200 dark:bg-slate-700 rounded-full w-2/3"/>
//           <div className="h-3 bg-gray-100 dark:bg-slate-800 rounded-full w-1/2"/>
//         </div>
//       </div>
//       <div className="h-3 bg-gray-100 dark:bg-slate-800 rounded-full w-3/4"/>
//     </div>
//   );
// }

// // ─── Stat Card ────────────────────────────────────────────────────────────────
// function StatCard({ icon: Icon, value, label, sub, accent = "indigo" }: {
//   icon: any; value: string|number; label: string; sub?: string; accent?: string;
// }) {
//   const ac: Record<string,string> = {
//     indigo:  "bg-indigo-500/10 text-indigo-500",
//     emerald: "bg-emerald-500/10 text-emerald-500",
//     amber:   "bg-amber-500/10 text-amber-500",
//     blue:    "bg-blue-500/10 text-blue-500",
//     orange:  "bg-orange-500/10 text-orange-500",
//   };
//   return (
//     <div className="p-3 sm:p-4 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
//       <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mb-2 sm:mb-3 ${ac[accent]||ac.indigo}`}>
//         <Icon size={14}/>
//       </div>
//       <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-none">{value}</p>
//       <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-1 leading-tight">{label}</p>
//       {sub && <p className="text-[11px] text-emerald-500 mt-0.5">{sub}</p>}
//     </div>
//   );
// }
// // ─── Meta Lead Drawer ─────────────────────────────────────────────────────────
// function MetaLeadDrawer({ lead, onClose, clientName }: { lead: Lead; onClose: () => void; clientName?: string }) {
//   const extra = Object.entries(lead).filter(([k, v]) => !META_SYSTEM_KEYS.has(k) && v && String(v).trim() !== "");
//   const name = getName(lead);
//   return (
//     <div className="fixed inset-0 z-50 flex" onClick={onClose}>
//       <div className="flex-1 bg-black/40 backdrop-blur-sm"/>
//       <aside className="w-full sm:max-w-[420px] h-full bg-white dark:bg-[#0d1629] border-l border-gray-200 dark:border-slate-700 overflow-y-auto shadow-2xl"
//         style={{ scrollbarWidth: "thin" }} onClick={e => e.stopPropagation()}>
//         <div className="sticky top-0 z-10 bg-white dark:bg-[#0d1629] border-b border-gray-100 dark:border-slate-800 px-5 py-4 flex items-center gap-3">
//           <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradient(name)} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
//             {name.charAt(0).toUpperCase()}
//           </div>
//           <div className="flex-1 min-w-0">
//             <p className="font-semibold text-gray-900 dark:text-white truncate">{name}</p>
//             <p className="text-xs text-gray-500 dark:text-slate-400">{timeAgo(lead.created_time)} · {lead.form_name}</p>
//             {clientName && (
//               <span className="inline-flex items-center gap-1 mt-1 text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 font-medium">
//                 <Building2 size={9}/> {clientName}
//               </span>
//             )}
//           </div>
//           <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 shrink-0"><X size={16}/></button>
//         </div>
//         <div className="p-5 space-y-6">
//           <section>
//             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">Contact Info</p>
//             <div className="space-y-2">
//               {[
//                 { icon: User,  label: "Name",     value: name,           href: undefined },
//                 { icon: Mail,  label: "Email",    value: getEmail(lead), href: `mailto:${getEmail(lead)}` },
//                 { icon: Phone, label: "Phone",    value: getPhone(lead), href: `tel:${getPhone(lead)}` },
//                 { icon: Clock, label: "Received", value: `${formatDate(lead.created_time)} · ${timeAgo(lead.created_time)}`, href: undefined },
//               ].map(({ icon: Icon, label, value, href }) => (
//                 <div key={label} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-900/60">
//                   <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 mt-0.5">
//                     <Icon size={13} className="text-indigo-500"/>
//                   </div>
//                   <div className="min-w-0">
//                     <p className="text-[10px] text-gray-400 dark:text-slate-500">{label}</p>
//                     {href && value !== "—"
//                       ? <a href={href} className="text-sm font-medium text-indigo-500 hover:underline break-all">{value}</a>
//                       : <p className="text-sm font-medium text-gray-900 dark:text-white break-all">{value}</p>
//                     }
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//           <section>
//             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">Campaign Details</p>
//             <div className="rounded-xl border border-gray-200 dark:border-slate-800 divide-y divide-gray-100 dark:divide-slate-800 overflow-hidden">
//               {[
//                 ["Client",   clientName || "—"],
//                 ["Form",     lead.form_name  || "—"],
//                 ["Ad",       lead.ad_name    || "—"],
//                 ["Ad Set",   lead.adset_name || "—"],
//                 ["Platform", lead.platform   || "—"],
//                 ["Organic",  lead.is_organic ? "Yes" : "No"],
//               ].map(([label, value]) => (
//                 <div key={label} className="flex items-center justify-between px-4 py-2.5 bg-white dark:bg-[#0b1220]">
//                   <span className="text-xs text-gray-500 dark:text-slate-400">{label}</span>
//                   <span className="text-xs font-medium text-gray-900 dark:text-white capitalize max-w-[200px] text-right truncate">{value}</span>
//                 </div>
//               ))}
//             </div>
//           </section>
//           {extra.length > 0 && (
//             <section>
//               <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">Form Responses</p>
//               <div className="space-y-2">
//                 {extra.map(([key, value]) => (
//                   <div key={key} className="p-3 rounded-xl bg-gray-50 dark:bg-slate-900/60">
//                     <p className="text-[10px] text-gray-400 dark:text-slate-500 capitalize mb-0.5">{key.replace(/_/g, " ")}</p>
//                     <p className="text-sm text-gray-900 dark:text-white">{String(value)}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}
//           <p className="text-[10px] font-mono text-gray-300 dark:text-slate-700 break-all">Lead ID: {lead.lead_id}</p>
//         </div>
//       </aside>
//     </div>
//   );
// }
// // ─── JustDial Lead Drawer ─────────────────────────────────────────────────────
// function JDLeadDrawer({ lead, onClose }: { lead: JDLead; onClose: () => void }) {
//   const name = lead.name || "Unknown";
//   return (
//     <div className="fixed inset-0 z-50 flex" onClick={onClose}>
//       <div className="flex-1 bg-black/40 backdrop-blur-sm"/>
//       <aside className="w-full sm:max-w-[420px] h-full bg-white dark:bg-[#0d1629] border-l border-gray-200 dark:border-slate-700 overflow-y-auto shadow-2xl"
//         style={{ scrollbarWidth: "thin" }} onClick={e => e.stopPropagation()}>
//         <div className="sticky top-0 z-10 bg-white dark:bg-[#0d1629] border-b border-gray-100 dark:border-slate-800 px-5 py-4 flex items-center gap-3">
//           <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradient(name)} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
//             {name.charAt(0).toUpperCase()}
//           </div>
//           <div className="flex-1 min-w-0">
//             <p className="font-semibold text-gray-900 dark:text-white truncate">{name}</p>
//             <p className="text-xs text-gray-500 dark:text-slate-400">{timeAgo(lead.received_at)} · JustDial</p>
//             <span className="inline-flex items-center gap-1 mt-1 text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 font-medium">
//               JustDial Lead
//             </span>
//           </div>
//           <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 shrink-0"><X size={16}/></button>
//         </div>
//         <div className="p-5 space-y-6">
//           <section>
//             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">Contact Info</p>
//             <div className="space-y-2">
//               {([
//                 { Icon: User,      label: "Name",  value: name,    href: undefined },
//                 { Icon: Phone,     label: "Phone", value: lead.phone  || "Not available — check JustDial portal", href: lead.phone  ? `tel:${lead.phone}`  : undefined },
//                 { Icon: Mail,      label: "Email", value: lead.email  || "Not available", href: lead.email  ? `mailto:${lead.email}` : undefined },
//                 { Icon: MapPin,    label: "Area",  value: lead.area   || "—", href: undefined },
//                 { Icon: Building2, label: "City",  value: [lead.city, lead.state].filter(Boolean).join(", ") || "—", href: undefined },
//               ] as const).map(({ Icon, label, value, href }) => (
//                 <div key={label} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-900/60">
//                   <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 mt-0.5">
//                     <Icon size={13} className="text-orange-500"/>
//                   </div>
//                   <div className="min-w-0">
//                     <p className="text-[10px] text-gray-400 dark:text-slate-500">{label}</p>
//                     {href
//                       ? <a href={href} className="text-sm font-medium text-indigo-500 hover:underline break-all">{value}</a>
//                       : <p className="text-sm font-medium text-gray-900 dark:text-white break-all">{value}</p>
//                     }
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//           <section>
//             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">Enquiry Details</p>
//             <div className="rounded-xl border border-gray-200 dark:border-slate-800 divide-y divide-gray-100 dark:divide-slate-800 overflow-hidden">
//               {[
//                 ["Service",        lead.service         || "—"],
//                 ["Business",       lead.business        || "—"],
//                 ["Branch",         lead.branch          || "—"],
//                 ["Search Date",    lead.search_datetime || "—"],
//                 ["Email Received", formatDate(lead.received_at)],
//               ].map(([label, value]) => (
//                 <div key={label} className="flex items-center justify-between px-4 py-2.5 bg-white dark:bg-[#0b1220]">
//                   <span className="text-xs text-gray-500 dark:text-slate-400">{label}</span>
//                   <span className="text-xs font-medium text-gray-900 dark:text-white max-w-[230px] text-right truncate">{value}</span>
//                 </div>
//               ))}
//             </div>
//           </section>
//           {!lead.phone && (
//             <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 text-xs text-amber-700 dark:text-amber-400">
//               <span className="font-semibold">Note:</span> JustDial emails mein phone/email nahi hota — JustDial portal pe "View Contact Details" click karo.
//             </div>
//           )}
//           <p className="text-[10px] font-mono text-gray-300 dark:text-slate-700 break-all">Message ID: {lead.message_id}</p>
//         </div>
//       </aside>
//     </div>
//   );
// }
// // ─── Mobile Cards ─────────────────────────────────────────────────────────────
// function MobileMetaCard({ lead, onClick, clientName }: { lead: Lead; onClick: () => void; clientName?: string }) {
//   const name = getName(lead);
//   return (
//     <div onClick={onClick} className="flex items-start gap-3 p-4 border-b border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
//       <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradient(name)} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
//         {name.charAt(0).toUpperCase()}
//       </div>
//       <div className="flex-1 min-w-0">
//         <div className="flex items-start justify-between gap-2">
//           <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">{name}</p>
//           <span className="text-[10px] text-gray-400 shrink-0">{timeAgo(lead.created_time)}</span>
//         </div>
//         {getPhone(lead) !== "—" && <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1"><Phone size={10}/> {getPhone(lead)}</p>}
//         {getEmail(lead) !== "—" && <p className="text-xs text-gray-500 truncate flex items-center gap-1"><Mail size={10}/> {getEmail(lead)}</p>}
//         <div className="flex items-center gap-2 mt-1.5 flex-wrap">
//           {clientName && (
//             <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 font-medium flex items-center gap-0.5">
//               <Building2 size={8}/> {clientName}
//             </span>
//           )}
//           <span className="text-[10px] text-gray-400 truncate max-w-[150px]">{lead.form_name}</span>
//           {lead.platform && (
//             <span className={`text-[10px] px-1.5 py-0.5 rounded-full border font-medium capitalize ${platformBadge[lead.platform] || "bg-gray-100 dark:bg-slate-800 text-gray-500 border-gray-200"}`}>
//               {lead.platform}
//             </span>
//           )}
//         </div>
//       </div>
//       <ChevronRight size={14} className="text-gray-300 shrink-0 mt-2"/>
//     </div>
//   );
// }

// function MobileJDCard({ lead, onClick }: { lead: JDLead; onClick: () => void }) {
//   const name = lead.name || "Unknown";
//   return (
//     <div onClick={onClick} className="flex items-start gap-3 p-4 border-b border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
//       <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradient(name)} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
//         {name.charAt(0).toUpperCase()}
//       </div>
//       <div className="flex-1 min-w-0">
//         <div className="flex items-start justify-between gap-2">
//           <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">{name}</p>
//           <span className="text-[10px] text-gray-400 shrink-0">{timeAgo(lead.received_at)}</span>
//         </div>
//         {lead.service && <p className="text-xs text-gray-500 mt-0.5 truncate flex items-center gap-1"><Briefcase size={10}/> {lead.service}</p>}
//         {(lead.area || lead.city) && <p className="text-xs text-gray-500 truncate flex items-center gap-1"><MapPin size={10}/> {lead.area || lead.city}</p>}
//         <div className="flex items-center gap-2 mt-1.5">
//           <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 font-medium">JustDial</span>
//           {lead.business && <span className="text-[10px] text-gray-400 truncate max-w-[140px]">{lead.business}</span>}
//         </div>
//       </div>
//       <ChevronRight size={14} className="text-gray-300 shrink-0 mt-2"/>
//     </div>
//   );
// }

// // ─── Pipeline Card ────────────────────────────────────────────────────────────
// function PipelineCard({ lead, onClick, clientName }: { lead: Lead; onClick: () => void; clientName?: string }) {
//   const name = getName(lead);
//   return (
//     <div onClick={onClick} className="bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-slate-800 rounded-xl p-3 cursor-pointer hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all group">
//       <div className="flex items-center gap-2 mb-2">
//         <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${avatarGradient(name)} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
//           {name.charAt(0).toUpperCase()}
//         </div>
//         <p className="text-xs font-semibold text-gray-900 dark:text-white truncate flex-1">{name}</p>
//         <ChevronRight size={11} className="text-gray-300 shrink-0 group-hover:text-indigo-400 transition-colors"/>
//       </div>
//       {getPhone(lead) !== "—" && <p className="text-[11px] text-gray-500 dark:text-slate-400 truncate mb-1">📞 {getPhone(lead)}</p>}
//       {clientName && <p className="text-[10px] text-indigo-400 truncate mb-1 flex items-center gap-1"><Building2 size={9}/> {clientName}</p>}
//       <p className="text-[10px] text-gray-400 truncate mb-2">{lead.form_name}</p>
//       <div className="flex items-center justify-between">
//         {lead.platform
//           ? <span className={`text-[10px] px-1.5 py-0.5 rounded-full border font-medium capitalize ${platformBadge[lead.platform] || "bg-gray-100 dark:bg-slate-800 text-gray-500 border-gray-200"}`}>{lead.platform}</span>
//           : <span/>
//         }
//         <span className="text-[10px] text-gray-400">{timeAgo(lead.created_time)}</span>
//       </div>
//     </div>
//   );
// }
// // ═══════════════════════════════════════════════════════════════════════════════
// // MAIN PAGE
// // ═══════════════════════════════════════════════════════════════════════════════
// export default function LeadManagement() {
//   const [activeTab,      setActiveTab]      = useState<"meta"|"justdial"|"pipeline">("meta");
//   const [search,         setSearch]         = useState("");
//   const [filterForm,     setFilterForm]     = useState("");   // meta: form_id  / jd: city
//   const [filterPlatform, setFilterPlatform] = useState("");   // meta: platform / jd: service
//   const [filterClient,   setFilterClient]   = useState("");
//   const [selectedMeta,   setSelectedMeta]   = useState<Lead|null>(null);
//   const [selectedJD,     setSelectedJD]     = useState<JDLead|null>(null);
//   const [page,           setPage]           = useState(1);
//   const [showFilters,    setShowFilters]    = useState(false);

//   // ── Fetch ──────────────────────────────────────────────────────────────────
//   const { data: metaData, isLoading: metaLoading, isError: metaError, refetch: refetchMeta, isFetching: metaFetching } =
//     useGet<LeadsResponse>("meta-leads", "/meta/leads");
//   // const { data: jdData, isLoading: jdLoading, isError: jdError, refetch: refetchJD, isFetching: jdFetching } =
//   //   useGet<JDResponse>("jd-leads", "/justdial");
//   const { data: clientsData } =
//     useGet<ClientsResponse>("clients", "/clients");

//   const metaLeads: Lead[]   = metaData?.data       || [];
//   // const jdLeads:   JDLead[] = jdData?.data         || [];
//   const clients:   Client[] = clientsData?.clients || [];

//   const clientNameMap = useMemo(() => {
//     const m: Record<string,string> = {};
//     clients.forEach(c => { m[c._id] = c.profile?.companyName || "Unnamed"; });
//     return m;
//   }, [clients]);
//   const getClientName = (lead: Lead) => lead.clientId ? (clientNameMap[lead.clientId] || "—") : undefined;

//   // ── Stats ──────────────────────────────────────────────────────────────────
//   const today        = new Date().toDateString();
//   const metaToday    = metaLeads.filter(l => new Date(l.created_time).toDateString() === today).length;
//   // const jdToday      = jdLeads.filter(l  => new Date(l.received_at).toDateString()  === today).length;

//   // Filter options
//   const uniqueForms     = useMemo(() => [...new Map(metaLeads.map(l => [l.form_id, { id: l.form_id, name: l.form_name }])).values()], [metaLeads]);
//   const uniquePlatforms = useMemo(() => [...new Set(metaLeads.map(l => l.platform).filter(Boolean))] as string[], [metaLeads]);
//   // const jdCities        = useMemo(() => [...new Set(jdLeads.map(l => l.city).filter(Boolean))],    [jdLeads]);
//   // const jdServices      = useMemo(() => [...new Set(jdLeads.map(l => l.service).filter(Boolean))], [jdLeads]);

//   // ── Filtered ───────────────────────────────────────────────────────────────
//   const filteredMeta = useMemo(() => {
//     const q = search.toLowerCase();
//     return metaLeads.filter(l => {
//       const s = !q || getName(l).toLowerCase().includes(q) || getEmail(l).toLowerCase().includes(q)
//              || getPhone(l).toLowerCase().includes(q) || (l.ad_name||"").toLowerCase().includes(q)
//              || (l.form_name||"").toLowerCase().includes(q);
//       return s && (!filterForm || l.form_id === filterForm)
//                && (!filterPlatform || l.platform === filterPlatform)
//                && (!filterClient   || l.clientId === filterClient);
//     });
//   }, [metaLeads, search, filterForm, filterPlatform, filterClient]);

//   // const filteredJD = useMemo(() => {
//   //   const q = search.toLowerCase();
//   //   return jdLeads.filter(l => {
//   //     const s = !q || (l.name||"").toLowerCase().includes(q) || (l.service||"").toLowerCase().includes(q)
//   //            || (l.city||"").toLowerCase().includes(q) || (l.area||"").toLowerCase().includes(q)
//   //            || (l.business||"").toLowerCase().includes(q);
//   //     return s && (!filterForm || l.city === filterForm) && (!filterPlatform || l.service === filterPlatform);
//   //   });
//   // }, [jdLeads, search, filterForm, filterPlatform]);

//   const metaTotalPages = Math.ceil(filteredMeta.length / PER_PAGE);
//   // const jdTotalPages   = Math.ceil(filteredJD.length  / PER_PAGE);
//   const paginatedMeta  = filteredMeta.slice((page-1)*PER_PAGE, page*PER_PAGE);
//   // const paginatedJD    = filteredJD.slice((page-1)*PER_PAGE,   page*PER_PAGE);

//   const stageSize  = Math.ceil(metaLeads.length / PIPELINE_STAGES.length) || 5;
//   const stageLeads = PIPELINE_STAGES.map((s, i) => ({ ...s, leads: metaLeads.slice(i*stageSize, (i+1)*stageSize) }));

//   const hasFilters         = !!(search || filterForm || filterPlatform || filterClient);
//   const activeFiltersCount = [search, filterForm, filterPlatform, filterClient].filter(Boolean).length;
//   const selectedClientName = filterClient ? (clientNameMap[filterClient] || "") : "";

//   const clearAll = () => {
//     setSearch(""); setFilterForm(""); setFilterPlatform(""); setFilterClient(""); setPage(1); setShowFilters(false);
//   };
//   const switchTab = (tab: "meta"|"justdial"|"pipeline") => {
//     setActiveTab(tab); setPage(1); setFilterForm(""); setFilterPlatform("");
//   };

//   // const isFetching = activeTab === "justdial" ? jdFetching : metaFetching;
//   // const refetch    = activeTab === "justdial" ? refetchJD  : refetchMeta;
//   // const totalLeads = (metaData?.total || 0) + (jdData?.total || 0);

//   // Shared filter bar renderer
//   const renderFilters = (tab: "meta"|"justdial") => {
//     const optionsA = tab === "meta" ? uniqueForms    : jdCities.map(c => ({ id: c, name: c }));
//     const optionsB = tab === "meta" ? uniquePlatforms.map(p => ({ id: p, name: p })) : jdServices.map(s => ({ id: s, name: s }));
//     const labelA   = tab === "meta" ? "All Forms" : "All Cities";
//     const labelB   = tab === "meta" ? "All Platforms" : "All Services";
//     const placeholder = tab === "meta" ? "Search name, email, phone, ad, form..." : "Search name, service, city, area, business...";
//     return (
//       <>
//         {/* Desktop */}
//         <div className="hidden sm:flex flex-row gap-2 shrink-0">
//           <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] flex-1">
//             <Search size={14} className="text-gray-400 shrink-0"/>
//             <input value={search} onChange={e => { setSearch(e.target.value); setPage(1); }}
//               placeholder={placeholder}
//               className="bg-transparent outline-none text-sm w-full text-gray-700 dark:text-gray-200 placeholder:text-gray-400"/>
//             {search && <button onClick={() => { setSearch(""); setPage(1); }}><X size={13} className="text-gray-400"/></button>}
//           </div>
//           {tab === "meta" && clients.length > 0 && (
//             <select value={filterClient} onChange={e => { setFilterClient(e.target.value); setPage(1); }}
//               className="px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-sm text-gray-700 dark:text-gray-200 outline-none max-w-[155px]">
//               <option value="">All Clients</option>
//               {clients.map(c => <option key={c._id} value={c._id}>{c.profile?.companyName || "Unnamed"}</option>)}
//             </select>
//           )}
//           {optionsA.length > 1 && (
//             <select value={filterForm} onChange={e => { setFilterForm(e.target.value); setPage(1); }}
//               className="px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-sm text-gray-700 dark:text-gray-200 outline-none max-w-[155px]">
//               <option value="">{labelA}</option>
//               {optionsA.map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
//             </select>
//           )}
//           {optionsB.length > 1 && (
//             <select value={filterPlatform} onChange={e => { setFilterPlatform(e.target.value); setPage(1); }}
//               className="px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-sm text-gray-700 dark:text-gray-200 outline-none max-w-[155px] capitalize">
//               <option value="">{labelB}</option>
//               {optionsB.map(o => <option key={o.id} value={o.id} className="capitalize">{o.name}</option>)}
//             </select>
//           )}
//           {hasFilters && (
//             <button onClick={clearAll} className="flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg border border-red-200 dark:border-red-900/50 text-red-500 hover:bg-red-50 transition-colors shrink-0">
//               <X size={12}/> Clear
//             </button>
//           )}
//         </div>
//         {/* Mobile */}
//         <div className="flex sm:hidden gap-2 shrink-0">
//           <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] flex-1">
//             <Search size={14} className="text-gray-400 shrink-0"/>
//             <input value={search} onChange={e => { setSearch(e.target.value); setPage(1); }} placeholder="Search..."
//               className="bg-transparent outline-none text-sm w-full text-gray-700 dark:text-gray-200 placeholder:text-gray-400"/>
//             {search && <button onClick={() => { setSearch(""); setPage(1); }}><X size={13} className="text-gray-400"/></button>}
//           </div>
//           <button onClick={() => setShowFilters(f => !f)}
//             className={`flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg border transition-colors shrink-0 relative ${showFilters||activeFiltersCount>0?"bg-indigo-600 border-indigo-600 text-white":"border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-gray-600"}`}>
//             <SlidersHorizontal size={13}/>
//             {activeFiltersCount > 0 && <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center">{activeFiltersCount}</span>}
//           </button>
//         </div>
//         {showFilters && (
//           <div className="flex sm:hidden flex-col gap-2 shrink-0">
//             {tab === "meta" && clients.length > 0 && (
//               <select value={filterClient} onChange={e => { setFilterClient(e.target.value); setPage(1); }}
//                 className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-sm text-gray-700 dark:text-gray-200 outline-none w-full">
//                 <option value="">All Clients</option>
//                 {clients.map(c => <option key={c._id} value={c._id}>{c.profile?.companyName || "Unnamed"}</option>)}
//               </select>
//             )}
//             {optionsA.length > 1 && (
//               <select value={filterForm} onChange={e => { setFilterForm(e.target.value); setPage(1); }}
//                 className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-sm text-gray-700 dark:text-gray-200 outline-none w-full">
//                 <option value="">{labelA}</option>
//                 {optionsA.map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
//               </select>
//             )}
//             {optionsB.length > 1 && (
//               <select value={filterPlatform} onChange={e => { setFilterPlatform(e.target.value); setPage(1); }}
//                 className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-sm text-gray-700 dark:text-gray-200 outline-none capitalize w-full">
//                 <option value="">{labelB}</option>
//                 {optionsB.map(o => <option key={o.id} value={o.id} className="capitalize">{o.name}</option>)}
//               </select>
//             )}
//             {hasFilters && (
//               <button onClick={clearAll} className="flex items-center justify-center gap-1.5 py-2.5 text-xs rounded-lg border border-red-200 dark:border-red-900/50 text-red-500">
//                 <X size={12}/> Clear all
//               </button>
//             )}
//           </div>
//         )}
//       </>
//     );
//   };

//   const renderPagination = (totalPages: number, total: number) => {
//     if (totalPages <= 1) return null;
//     return (
//       <div className="flex items-center justify-between shrink-0 pt-1">
//         <p className="text-xs text-gray-500 dark:text-slate-400">
//           <span className="font-medium text-gray-700 dark:text-slate-300">{(page-1)*PER_PAGE+1}–{Math.min(page*PER_PAGE, total)}</span>
//           {" / "}
//           <span className="font-medium text-gray-700 dark:text-slate-300">{total}</span>
//         </p>
//         <div className="flex gap-1">
//           <button onClick={() => setPage(p => Math.max(1,p-1))} disabled={page===1}
//             className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 dark:border-slate-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">←</button>
//           {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
//             const p = totalPages<=3?i+1:page<=2?i+1:page>=totalPages-1?totalPages-2+i:page-1+i;
//             return (
//               <button key={p} onClick={() => setPage(p)}
//                 className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${p===page?"bg-indigo-600 border-indigo-600 text-white":"border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800"}`}>
//                 {p}
//               </button>
//             );
//           })}
//           <button onClick={() => setPage(p => Math.min(totalPages,p+1))} disabled={page===totalPages}
//             className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 dark:border-slate-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">→</button>
//         </div>
//       </div>
//     );
//   };
//   return (
//     <div className="flex flex-col h-screen w-full max-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white overflow-hidden">

//       {/* ── TOP SECTION ─────────────────────────────────────────────────────── */}
//       <div className="shrink-0 px-4 pt-4 sm:pt-5 sm:px-6 md:px-8 space-y-3 sm:space-y-4 pb-0 border-b border-gray-200 dark:border-slate-800">

//         {/* Header */}
//         <div className="flex items-start justify-between gap-3">
//           <div>
//             <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">Lead Management</h1>
//             <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 flex items-center gap-2 flex-wrap">
//               <span className="hidden sm:inline">CRM Dashboard</span>
//               {metaLoading 
//                 ? <span className="w-16 h-3 bg-gray-200 dark:bg-slate-700 rounded-full animate-pulse inline-block"/>
//                 : <span className="text-emerald-500 font-medium">{totalLeads} total leads</span>
//               }
//               {selectedClientName && <span className="flex items-center gap-1 text-indigo-400 text-[11px]"><Building2 size={10}/> {selectedClientName}</span>}
//               {isFetching && <span className="flex items-center gap-1 text-indigo-400"><RefreshCw size={10} className="animate-spin"/><span className="hidden sm:inline">Syncing…</span></span>}
//             </p>
//           </div>
//           <div className="flex items-center gap-1.5 shrink-0">
//             <button onClick={() => refetch()} disabled={isFetching}
//               className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50">
//               <RefreshCw size={12} className={isFetching ? "animate-spin" : ""}/>
//               <span className="hidden sm:inline">Refresh</span>
//             </button>
//           </div>
//         </div>

//         {/* Stats — Meta today, Meta total, JD today, JD total */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
//           <StatCard icon={TrendingUp} accent="indigo"  value={metaLoading ? "—" : metaToday}             label="Meta Today"  sub="Live from Meta"/>
//           <StatCard icon={BarChart3}  accent="blue"    value={metaLoading ? "—" : (metaData?.total ?? 0)} label="Meta Total"/>
//           <StatCard icon={Megaphone}  accent="orange"  value={jdLoading   ? "—" : jdToday}               label="JD Today"    sub="From Gmail"/>
//           <StatCard icon={Star}       accent="emerald" value={jdLoading   ? "—" : (jdData?.total ?? 0)}  label="JD Total"/>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-4 sm:gap-6 -mb-px">
//           {([
//             { key: "meta",     label: "Meta Ads",  count: filteredMeta.length, loading: metaLoading, badgeCls: "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400" },
//             { key: "justdial", label: "JustDial",  count: filteredJD.length,   loading: jdLoading,   badgeCls: "bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400" },
//             { key: "pipeline", label: "Pipeline",  count: null,                loading: false,       badgeCls: "" },
//           ] as const).map(tab => (
//             <button key={tab.key} onClick={() => switchTab(tab.key)}
//               className={`pb-3 font-medium transition-colors whitespace-nowrap border-b-2 text-xs sm:text-sm ${
//                 activeTab === tab.key
//                   ? "border-indigo-500 text-indigo-500"
//                   : "border-transparent text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200"
//               }`}>
//               {tab.label}
//               {tab.count !== null && !tab.loading && tab.count > 0 && (
//                 <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
//                   activeTab === tab.key ? tab.badgeCls : "bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400"
//                 }`}>{tab.count}</span>
//               )}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ══ META TAB ══════════════════════════════════════════════════════════ */}
//       {activeTab === "meta" && (
//         <div className="flex-1 min-h-0 flex flex-col px-4 py-3 sm:px-6 sm:py-4 md:px-8 gap-3 overflow-hidden" style={{ minHeight: 0 }}>
//           {renderFilters("meta")}

//           {metaError && (
//             <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center px-6">
//               <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center"><AlertCircle size={22} className="text-red-400"/></div>
//               <p className="font-semibold text-red-400 text-sm">Could not load Meta leads</p>
//               <button onClick={() => refetchMeta()} className="px-4 py-2 text-xs rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Retry</button>
//             </div>
//           )}

//           {/* Mobile */}
//           {!metaError && (
//             <div className="md:hidden flex-1 min-h-0 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] overflow-y-auto overscroll-contain"
//               style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(99,102,241,.3) transparent" }}>
//               {metaLoading && Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i}/>)}
//               {!metaLoading && filteredMeta.length === 0 && (
//                 <div className="flex flex-col items-center justify-center gap-3 py-16 text-gray-400">
//                   <User size={28} className="opacity-30"/>
//                   <p className="text-sm font-medium">{hasFilters ? "No leads match" : "No leads found"}</p>
//                   {hasFilters && <button onClick={clearAll} className="text-xs text-indigo-500 hover:underline">Clear filters</button>}
//                 </div>
//               )}
//               {!metaLoading && paginatedMeta.map(lead => (
//                 <MobileMetaCard key={lead.lead_id} lead={lead} clientName={getClientName(lead)} onClick={() => setSelectedMeta(lead)}/>
//               ))}
//             </div>
//           )}

//           {/* Desktop */}
//           {!metaError && (
//             <div className="hidden md:flex flex-col flex-1 min-h-0 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] overflow-hidden">
//               <div className="w-full h-full overflow-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(99,102,241,.3) transparent" }}>
//                 <table className="w-full text-sm table-fixed">
//                   <thead className="sticky top-0 z-10 bg-gray-50/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-slate-800">
//                     <tr>
//                       {([["Lead","220px"],["Client","140px"],["Email","190px"],["Phone","140px"],["Form / Ad","170px"],["Platform","110px"],["Received","110px"],["","40px"]] as const).map(([h,w]) => (
//                         <th key={h} style={{ width: w }} className="px-3 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">{h}</th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-100 dark:divide-slate-800/70">
//                     {metaLoading && Array.from({ length: 10 }).map((_, i) => <SkeletonRow key={i}/>)}
//                     {!metaLoading && filteredMeta.length === 0 && (
//                       <tr><td colSpan={8} className="px-4 py-20 text-center">
//                         <div className="flex flex-col items-center gap-3 text-gray-400"><User size={32} className="opacity-30"/>
//                           <p className="font-medium text-sm">{hasFilters ? "No leads match filters" : "No leads found"}</p>
//                           {hasFilters && <button onClick={clearAll} className="text-xs text-indigo-500 hover:underline">Clear filters</button>}
//                         </div>
//                       </td></tr>
//                     )}
//                     {!metaLoading && paginatedMeta.map(lead => {
//                       const name = getName(lead); const cn = getClientName(lead);
//                       return (
//                         <tr key={lead.lead_id} onClick={() => setSelectedMeta(lead)} className="hover:bg-indigo-50/40 dark:hover:bg-slate-800/40 cursor-pointer transition-colors">
//                           <td className="px-3 py-3"><div className="flex items-center gap-2">
//                             <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${avatarGradient(name)} flex items-center justify-center text-white text-xs font-bold shrink-0`}>{name.charAt(0).toUpperCase()}</div>
//                             <div className="min-w-0"><p className="font-semibold text-gray-900 dark:text-white truncate">{name}</p>{getCity(lead)!=="—"&&<p className="text-[11px] text-gray-400 truncate">{getCity(lead)}</p>}</div>
//                           </div></td>
//                           <td className="px-3 py-3">{cn
//                             ? <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium truncate max-w-[120px]"><Building2 size={9} className="shrink-0"/>{cn}</span>
//                             : <span className="text-gray-300 dark:text-slate-600 text-xs">—</span>}
//                           </td>
//                           <td className="px-3 py-3"><p className="truncate text-gray-600 dark:text-slate-400 text-xs">{getEmail(lead)}</p></td>
//                           <td className="px-3 py-3"><p className="truncate text-gray-600 dark:text-slate-400 text-xs">{getPhone(lead)}</p></td>
//                           <td className="px-3 py-3"><p className="text-xs font-medium truncate">{lead.form_name}</p>{lead.ad_name&&<p className="text-[11px] text-gray-400 truncate">{lead.ad_name}</p>}</td>
//                           <td className="px-3 py-3">{lead.platform
//                             ? <span className={`text-[11px] px-2 py-1 rounded-full border font-medium capitalize ${platformBadge[lead.platform]||"bg-gray-100 dark:bg-slate-800 text-gray-500 border-gray-200"}`}>{lead.platform}</span>
//                             : "—"}
//                           </td>
//                           <td className="px-3 py-3"><p className="text-xs font-medium">{timeAgo(lead.created_time)}</p><p className="text-[11px] text-gray-400">{formatDate(lead.created_time)}</p></td>
//                           <td className="px-3 py-3"><ExternalLink size={13} className="text-gray-400"/></td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//           {renderPagination(metaTotalPages, filteredMeta.length)}
//         </div>
//       )}

//       {/* ══ JUSTDIAL TAB ══════════════════════════════════════════════════════ */}
//       {activeTab === "justdial" && (
//         <div className="flex-1 min-h-0 flex flex-col px-4 py-3 sm:px-6 sm:py-4 md:px-8 gap-3 overflow-hidden" style={{ minHeight: 0 }}>
//           {renderFilters("justdial")}

//           {/* Cached notice */}
//           {jdData?.cached && (
//             <div className="shrink-0 flex items-center gap-2 text-[11px] text-gray-400 bg-gray-50 dark:bg-slate-900/40 px-3 py-2 rounded-lg border border-gray-100 dark:border-slate-800">
//               <Clock size={11}/> Cached data ·
//               <button onClick={() => refetchJD()} className="text-indigo-400 hover:underline">Refresh from Gmail</button>
//             </div>
//           )}

//           {jdError && (
//             <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center px-6">
//               <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center"><AlertCircle size={22} className="text-red-400"/></div>
//               <p className="font-semibold text-red-400 text-sm">Could not load JustDial leads</p>
//               <p className="text-xs text-gray-500 dark:text-slate-500 max-w-xs">
//                 Make sure DGCC backend is running and{" "}
//                 <code className="text-indigo-400 bg-indigo-500/10 px-1 rounded">/api/justdial</code> is live
//               </p>
//               <button onClick={() => refetchJD()} className="px-4 py-2 text-xs rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Retry</button>
//             </div>
//           )}

//           {/* Mobile */}
//           {!jdError && (
//             <div className="md:hidden flex-1 min-h-0 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] overflow-y-auto overscroll-contain"
//               style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(249,115,22,.3) transparent" }}>
//               {jdLoading && Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i}/>)}
//               {!jdLoading && filteredJD.length === 0 && (
//                 <div className="flex flex-col items-center justify-center gap-3 py-16 text-gray-400">
//                   <User size={28} className="opacity-30"/>
//                   <p className="text-sm font-medium">{hasFilters ? "No leads match" : "No JustDial leads found"}</p>
//                   {hasFilters && <button onClick={clearAll} className="text-xs text-indigo-500 hover:underline">Clear filters</button>}
//                 </div>
//               )}
//               {!jdLoading && paginatedJD.map(lead => (
//                 <MobileJDCard key={lead.message_id} lead={lead} onClick={() => setSelectedJD(lead)}/>
//               ))}
//             </div>
//           )}

//           {/* Desktop */}
//           {!jdError && (
//             <div className="hidden md:flex flex-col flex-1 min-h-0 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] overflow-hidden">
//               <div className="w-full h-full overflow-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(249,115,22,.3) transparent" }}>
//                 <table className="w-full text-sm table-fixed">
//                   <thead className="sticky top-0 z-10 bg-gray-50/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-slate-800">
//                     <tr>
//                       {([["Name","200px"],["Service","180px"],["Area / City","170px"],["Business","170px"],["Enquiry Date","130px"],["Received","120px"],["Source","60px"]] as const).map(([h,w]) => (
//                         <th key={h} style={{ width: w }} className="px-3 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400">{h}</th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-100 dark:divide-slate-800/70">
//                     {jdLoading && Array.from({ length: 8 }).map((_, i) => <SkeletonRow key={i}/>)}
//                     {!jdLoading && filteredJD.length === 0 && (
//                       <tr><td colSpan={7} className="px-4 py-20 text-center">
//                         <div className="flex flex-col items-center gap-3 text-gray-400"><User size={32} className="opacity-30"/>
//                           <p className="font-medium text-sm">{hasFilters ? "No leads match" : "No JustDial leads"}</p>
//                           {hasFilters && <button onClick={clearAll} className="text-xs text-indigo-500 hover:underline">Clear filters</button>}
//                         </div>
//                       </td></tr>
//                     )}
//                     {!jdLoading && paginatedJD.map(lead => (
//                       <tr key={lead.message_id} onClick={() => setSelectedJD(lead)} className="hover:bg-orange-50/40 dark:hover:bg-slate-800/40 cursor-pointer transition-colors">
//                         <td className="px-3 py-3"><div className="flex items-center gap-2">
//                           <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${avatarGradient(lead.name||"J")} flex items-center justify-center text-white text-xs font-bold shrink-0`}>{(lead.name||"J").charAt(0).toUpperCase()}</div>
//                           <p className="font-semibold text-gray-900 dark:text-white truncate">{lead.name || "—"}</p>
//                         </div></td>
//                         <td className="px-3 py-3"><p className="text-xs text-gray-700 dark:text-slate-300 truncate">{lead.service || "—"}</p></td>
//                         <td className="px-3 py-3">
//                           <p className="text-xs font-medium text-gray-900 dark:text-white truncate">{lead.area || "—"}</p>
//                           {lead.city && <p className="text-[11px] text-gray-400 truncate">{lead.city}{lead.state ? `, ${lead.state}` : ""}</p>}
//                         </td>
//                         <td className="px-3 py-3">
//                           <p className="text-xs font-medium text-gray-900 dark:text-white truncate">{lead.business || "—"}</p>
//                           {lead.branch && <p className="text-[11px] text-gray-400 truncate">{lead.branch}</p>}
//                         </td>
//                         <td className="px-3 py-3"><p className="text-xs text-gray-600 dark:text-slate-400">{lead.search_datetime ? lead.search_datetime.split(" ")[0] : "—"}</p></td>
//                         <td className="px-3 py-3"><p className="text-xs font-medium">{timeAgo(lead.received_at)}</p><p className="text-[11px] text-gray-400">{formatDate(lead.received_at)}</p></td>
//                         <td className="px-3 py-3"><span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 font-semibold whitespace-nowrap">JustDial</span></td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//           {renderPagination(jdTotalPages, filteredJD.length)}
//         </div>
//       )}

//       {/* ══ PIPELINE TAB ══════════════════════════════════════════════════════ */}
//       {activeTab === "pipeline" && (
//         <div className="flex flex-col min-h-0 flex-1 px-4 py-3 sm:px-6 sm:py-4 md:px-8 gap-3 overflow-hidden">
//           {clients.length > 0 && (
//             <div className="shrink-0 flex items-center gap-2 flex-wrap">
//               <button onClick={() => setFilterClient("")}
//                 className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${!filterClient ? "bg-indigo-600 border-indigo-600 text-white" : "border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-gray-600 hover:border-indigo-400"}`}>
//                 All Clients
//                 {!filterClient && <span className="bg-white/25 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">{metaLeads.length}</span>}
//               </button>
//               {clients.map(c => {
//                 const cName = c.profile?.companyName || "Unnamed"; const isActive = filterClient === c._id;
//                 const count = metaLeads.filter(l => l.clientId === c._id).length;
//                 return (
//                   <button key={c._id} onClick={() => setFilterClient(isActive ? "" : c._id)}
//                     className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${isActive ? "bg-indigo-600 border-indigo-600 text-white" : "border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-gray-600 hover:border-indigo-400"}`}>
//                     <Building2 size={10}/>{cName}
//                     {count > 0 && <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${isActive ? "bg-white/25 text-white" : "bg-gray-100 dark:bg-slate-800 text-gray-500"}`}>{count}</span>}
//                   </button>
//                 );
//               })}
//               {filterClient && <button onClick={() => setFilterClient("")} className="flex items-center gap-1 px-2.5 py-1.5 text-xs rounded-full border border-red-200 text-red-500 hover:bg-red-50 transition-colors"><X size={10}/> Clear</button>}
//             </div>
//           )}
//           {metaError ? (
//             <div className="flex flex-col items-center justify-center h-full gap-3">
//               <AlertCircle size={28} className="text-red-400"/>
//               <p className="text-sm text-red-400">Could not load pipeline</p>
//               <button onClick={() => refetchMeta()} className="text-xs text-indigo-500 hover:underline">Retry</button>
//             </div>
//           ) : (
//             <div className="h-full w-full overflow-x-auto overflow-y-hidden"
//               style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(99,102,241,.3) transparent" }}>
//               <div className="h-full flex gap-3 w-max">
//                 {stageLeads.map(col => (
//                   <div key={col.key} style={{ width: 185, flexShrink: 0, overflowY: "auto", overflowX: "hidden", overscrollBehavior: "contain" }} className="flex flex-col gap-2 pb-4">
//                     <div className={`sticky top-0 z-10 flex justify-between items-center px-3 py-2 rounded-xl text-xs font-semibold text-white ${col.color}`}>
//                       <span className="truncate">{col.title}</span>
//                       <span className="bg-white/20 px-2 py-0.5 rounded-full font-bold ml-1 shrink-0">{metaLoading ? "—" : col.leads.length}</span>
//                     </div>
//                     {metaLoading && Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-20 rounded-xl bg-gray-200 dark:bg-slate-800 animate-pulse"/>)}
//                     {!metaLoading && col.leads.length === 0 && (
//                       <div className="flex-1 rounded-xl border-2 border-dashed border-gray-200 dark:border-slate-700 flex items-center justify-center text-xs text-gray-400 py-8">Empty</div>
//                     )}
//                     {!metaLoading && col.leads.map(lead => (
//                       <PipelineCard key={lead.lead_id} lead={lead} clientName={getClientName(lead)} onClick={() => setSelectedMeta(lead)}/>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Drawers */}
//       {selectedMeta && <MetaLeadDrawer lead={selectedMeta} clientName={getClientName(selectedMeta)} onClose={() => setSelectedMeta(null)}/>}
//       {selectedJD   && <JDLeadDrawer  lead={selectedJD}   onClose={() => setSelectedJD(null)}/>}
//     </div>
//   );
// }


"use client";

import { useState, useMemo } from "react";
import {
  BarChart3,
  Star,
  Search,
  RefreshCw,
  X,
  Clock,
  TrendingUp,
  AlertCircle,
  Mail,
  Phone,
  User,
  ExternalLink,
  Megaphone,
  ChevronRight,
  SlidersHorizontal,
  Building2,
  MapPin,
  Briefcase,
} from "lucide-react";
import { useGet } from "@/hooks/useGet";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Lead {
  lead_id: string;
  form_id: string;
  form_name: string;
  created_time: string;
  ad_id?: string;
  ad_name?: string;
  adset_id?: string;
  adset_name?: string;
  campaign_id?: string;
  campaign_name?: string;
  platform?: string;
  is_organic?: boolean;
  full_name?: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  email_address?: string;
  phone_number?: string;
  phone?: string;
  mobile?: string;
  city?: string;
  state?: string;
  clientId?: string;
  [key: string]: any;
}
interface LeadsResponse {
  success: boolean;
  total: number;
  data: Lead[];
}

interface GoogleAdsLead {
  lead_id: string;
  created_time: string;
  campaign_id?: string;
  campaign_name?: string;
  ad_group_id?: string;
  ad_group_name?: string;
  keyword?: string;
  name?: string;
  full_name?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  city?: string;
  state?: string;
  clientId?: string;
  source?: "Google Ads";
  [key: string]: any;
}
interface GoogleAdsResponse {
  success: boolean;
  total: number;
  data: GoogleAdsLead[];
}

interface Client {
  _id: string;
  profile?: { companyName?: string };
}
interface ClientsResponse {
  clients: Client[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const getName = (l: Lead | GoogleAdsLead) =>
  l.full_name ||
  l.name ||
  (l.first_name ? `${l.first_name} ${l.last_name || ""}`.trim() : "") ||
  "—";

const getEmail = (l: Lead) => l.email || l.email_address || "—";
const getPhone = (l: Lead) => l.phone_number || l.phone || l.mobile || "—";
const getCity = (l: Lead | GoogleAdsLead) => l.city || l.state || "—";

const getGoogleAdsEmail = (l: GoogleAdsLead) => l.email || "—";
const getGoogleAdsPhone = (l: GoogleAdsLead) => l.phone || "—";

const timeAgo = (iso: string) => {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000),
    h = Math.floor(m / 60),
    d = Math.floor(h / 24);
  if (d > 0) return `${d}d ago`;
  if (h > 0) return `${h}h ago`;
  if (m > 0) return `${m}m ago`;
  return "Just now";
};

const formatDate = (iso: string) => {
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
};

const avatarGradient = (name: string) => {
  const g = [
    "from-indigo-500 to-purple-600",
    "from-pink-500 to-rose-600",
    "from-amber-500 to-orange-600",
    "from-emerald-500 to-teal-600",
    "from-cyan-500 to-blue-600",
    "from-violet-500 to-indigo-600",
  ];
  return g[(name.charCodeAt(0) || 0) % g.length];
};

const platformBadge: Record<string, string> = {
  facebook: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  instagram: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  messenger: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  googleads: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  google_ads: "bg-orange-500/10 text-orange-500 border-orange-500/20",
};

const META_SYSTEM_KEYS = new Set([
  "lead_id",
  "form_id",
  "form_name",
  "created_time",
  "ad_id",
  "ad_name",
  "adset_id",
  "adset_name",
  "campaign_id",
  "campaign_name",
  "platform",
  "is_organic",
  "full_name",
  "name",
  "first_name",
  "last_name",
  "email",
  "email_address",
  "phone_number",
  "phone",
  "mobile",
  "city",
  "state",
  "clientId",
]);

const GOOGLE_ADS_SYSTEM_KEYS = new Set([
  "lead_id",
  "created_time",
  "campaign_id",
  "campaign_name",
  "ad_group_id",
  "ad_group_name",
  "keyword",
  "name",
  "full_name",
  "first_name",
  "last_name",
  "email",
  "phone",
  "city",
  "state",
  "clientId",
  "source",
]);

const PER_PAGE = 25;
const PIPELINE_STAGES = [
  { key: "new", title: "New", color: "bg-blue-500" },
  { key: "working", title: "Working", color: "bg-amber-500" },
  { key: "qualified", title: "Qualified", color: "bg-indigo-500" },
  { key: "won", title: "Won", color: "bg-emerald-500" },
  { key: "lost", title: "Lost", color: "bg-red-500" },
  { key: "nurture", title: "Nurture", color: "bg-purple-500" },
];

// ─── Skeletons ────────────────────────────────────────────────────────────────
function SkeletonRow() {
  return (
    <tr className="animate-pulse">
      {[160, 130, 180, 130, 160, 100, 100].map((w, i) => (
        <td key={i} className="px-4 py-3.5">
          <div
            className="h-3.5 bg-gray-100 dark:bg-slate-800 rounded-full"
            style={{ width: w }}
          />
        </td>
      ))}
    </tr>
  );
}

function SkeletonCard() {
  return (
    <div className="animate-pulse p-4 border-b border-gray-100 dark:border-slate-800">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-700 shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-3.5 bg-gray-200 dark:bg-slate-700 rounded-full w-2/3" />
          <div className="h-3 bg-gray-100 dark:bg-slate-800 rounded-full w-1/2" />
        </div>
      </div>
      <div className="h-3 bg-gray-100 dark:bg-slate-800 rounded-full w-3/4" />
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({
  icon: Icon,
  value,
  label,
  sub,
  accent = "indigo",
}: {
  icon: any;
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
  };

  return (
    <div className="p-3 sm:p-4 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
      <div
        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mb-2 sm:mb-3 ${
          ac[accent] || ac.indigo
        }`}
      >
        <Icon size={14} />
      </div>
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-none">
        {value}
      </p>
      <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-1 leading-tight">
        {label}
      </p>
      {sub && <p className="text-[11px] text-emerald-500 mt-0.5">{sub}</p>}
    </div>
  );
}

// ─── Meta Lead Drawer ─────────────────────────────────────────────────────────
function MetaLeadDrawer({
  lead,
  onClose,
  clientName,
}: {
  lead: Lead;
  onClose: () => void;
  clientName?: string;
}) {
  const extra = Object.entries(lead).filter(
    ([k, v]) => !META_SYSTEM_KEYS.has(k) && v && String(v).trim() !== ""
  );
  const name = getName(lead);

  return (
    <div className="fixed inset-0 z-50 flex" onClick={onClose}>
      <div className="flex-1 bg-black/40 backdrop-blur-sm" />
      <aside
        className="w-full sm:max-w-[420px] h-full bg-white dark:bg-[#0d1629] border-l border-gray-200 dark:border-slate-700 overflow-y-auto shadow-2xl"
        style={{ scrollbarWidth: "thin" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white dark:bg-[#0d1629] border-b border-gray-100 dark:border-slate-800 px-5 py-4 flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradient(
              name
            )} flex items-center justify-center text-white font-bold text-sm shrink-0`}
          >
            {name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 dark:text-white truncate">
              {name}
            </p>
            <p className="text-xs text-gray-500 dark:text-slate-400">
              {timeAgo(lead.created_time)} · {lead.form_name}
            </p>
            {clientName && (
              <span className="inline-flex items-center gap-1 mt-1 text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 font-medium">
                <Building2 size={9} /> {clientName}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-5 space-y-6">
          <section>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">
              Contact Info
            </p>
            <div className="space-y-2">
              {[
                { icon: User, label: "Name", value: name, href: undefined },
                {
                  icon: Mail,
                  label: "Email",
                  value: getEmail(lead),
                  href: `mailto:${getEmail(lead)}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: getPhone(lead),
                  href: `tel:${getPhone(lead)}`,
                },
                {
                  icon: Clock,
                  label: "Received",
                  value: `${formatDate(lead.created_time)} · ${timeAgo(
                    lead.created_time
                  )}`,
                  href: undefined,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-900/60"
                >
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={13} className="text-indigo-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-400 dark:text-slate-500">
                      {label}
                    </p>
                    {href && value !== "—" ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-indigo-500 hover:underline break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-900 dark:text-white break-all">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">
              Campaign Details
            </p>
            <div className="rounded-xl border border-gray-200 dark:border-slate-800 divide-y divide-gray-100 dark:divide-slate-800 overflow-hidden">
              {[
                ["Client", clientName || "—"],
                ["Form", lead.form_name || "—"],
                ["Ad", lead.ad_name || "—"],
                ["Ad Set", lead.adset_name || "—"],
                ["Platform", lead.platform || "—"],
                ["Organic", lead.is_organic ? "Yes" : "No"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between px-4 py-2.5 bg-white dark:bg-[#0b1220]"
                >
                  <span className="text-xs text-gray-500 dark:text-slate-400">
                    {label}
                  </span>
                  <span className="text-xs font-medium text-gray-900 dark:text-white capitalize max-w-[200px] text-right truncate">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {extra.length > 0 && (
            <section>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">
                Form Responses
              </p>
              <div className="space-y-2">
                {extra.map(([key, value]) => (
                  <div
                    key={key}
                    className="p-3 rounded-xl bg-gray-50 dark:bg-slate-900/60"
                  >
                    <p className="text-[10px] text-gray-400 dark:text-slate-500 capitalize mb-0.5">
                      {key.replace(/_/g, " ")}
                    </p>
                    <p className="text-sm text-gray-900 dark:text-white">
                      {String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <p className="text-[10px] font-mono text-gray-300 dark:text-slate-700 break-all">
            Lead ID: {lead.lead_id}
          </p>
        </div>
      </aside>
    </div>
  );
}

// ─── Google Ads Lead Drawer ───────────────────────────────────────────────────
function GoogleAdsLeadDrawer({
  lead,
  onClose,
  clientName,
}: {
  lead: GoogleAdsLead;
  onClose: () => void;
  clientName?: string;
}) {
  const name = getName(lead);
  const extra = Object.entries(lead).filter(
    ([k, v]) => !GOOGLE_ADS_SYSTEM_KEYS.has(k) && v && String(v).trim() !== ""
  );

  return (
    <div className="fixed inset-0 z-50 flex" onClick={onClose}>
      <div className="flex-1 bg-black/40 backdrop-blur-sm" />
      <aside
        className="w-full sm:max-w-[420px] h-full bg-white dark:bg-[#0d1629] border-l border-gray-200 dark:border-slate-700 overflow-y-auto shadow-2xl"
        style={{ scrollbarWidth: "thin" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white dark:bg-[#0d1629] border-b border-gray-100 dark:border-slate-800 px-5 py-4 flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradient(
              name
            )} flex items-center justify-center text-white font-bold text-sm shrink-0`}
          >
            {name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 dark:text-white truncate">
              {name}
            </p>
            <p className="text-xs text-gray-500 dark:text-slate-400">
              {timeAgo(lead.created_time)} · Google Ads
            </p>
            <span className="inline-flex items-center gap-1 mt-1 text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 font-medium">
              Google Ads Lead
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-5 space-y-6">
          <section>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">
              Contact Info
            </p>
            <div className="space-y-2">
              {[
                { Icon: User, label: "Name", value: name, href: undefined },
                {
                  Icon: Phone,
                  label: "Phone",
                  value: getGoogleAdsPhone(lead),
                  href:
                    getGoogleAdsPhone(lead) !== "—"
                      ? `tel:${getGoogleAdsPhone(lead)}`
                      : undefined,
                },
                {
                  Icon: Mail,
                  label: "Email",
                  value: getGoogleAdsEmail(lead),
                  href:
                    getGoogleAdsEmail(lead) !== "—"
                      ? `mailto:${getGoogleAdsEmail(lead)}`
                      : undefined,
                },
                {
                  Icon: MapPin,
                  label: "Location",
                  value: getCity(lead),
                  href: undefined,
                },
                {
                  Icon: Clock,
                  label: "Received",
                  value: `${formatDate(lead.created_time)} · ${timeAgo(
                    lead.created_time
                  )}`,
                  href: undefined,
                },
              ].map(({ Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-900/60"
                >
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={13} className="text-orange-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-400 dark:text-slate-500">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-orange-500 hover:underline break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-900 dark:text-white break-all">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">
              Campaign Details
            </p>
            <div className="rounded-xl border border-gray-200 dark:border-slate-800 divide-y divide-gray-100 dark:divide-slate-800 overflow-hidden">
              {[
                ["Client", clientName || "—"],
                ["Campaign", lead.campaign_name || "—"],
                ["Ad Group", lead.ad_group_name || "—"],
                ["Keyword", lead.keyword || "—"],
                ["Source", lead.source || "Google Ads"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between px-4 py-2.5 bg-white dark:bg-[#0b1220]"
                >
                  <span className="text-xs text-gray-500 dark:text-slate-400">
                    {label}
                  </span>
                  <span className="text-xs font-medium text-gray-900 dark:text-white max-w-[220px] text-right truncate">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {extra.length > 0 && (
            <section>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">
                Extra Details
              </p>
              <div className="space-y-2">
                {extra.map(([key, value]) => (
                  <div
                    key={key}
                    className="p-3 rounded-xl bg-gray-50 dark:bg-slate-900/60"
                  >
                    <p className="text-[10px] text-gray-400 dark:text-slate-500 capitalize mb-0.5">
                      {key.replace(/_/g, " ")}
                    </p>
                    <p className="text-sm text-gray-900 dark:text-white">
                      {String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <p className="text-[10px] font-mono text-gray-300 dark:text-slate-700 break-all">
            Lead ID: {lead.lead_id}
          </p>
        </div>
      </aside>
    </div>
  );
}

// ─── Mobile Cards ─────────────────────────────────────────────────────────────
function MobileMetaCard({
  lead,
  onClick,
  clientName,
}: {
  lead: Lead;
  onClick: () => void;
  clientName?: string;
}) {
  const name = getName(lead);

  return (
    <div
      onClick={onClick}
      className="flex items-start gap-3 p-4 border-b border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
    >
      <div
        className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradient(
          name
        )} flex items-center justify-center text-white text-sm font-bold shrink-0`}
      >
        {name.charAt(0).toUpperCase()}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
            {name}
          </p>
          <span className="text-[10px] text-gray-400 shrink-0">
            {timeAgo(lead.created_time)}
          </span>
        </div>
        {getPhone(lead) !== "—" && (
          <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
            <Phone size={10} /> {getPhone(lead)}
          </p>
        )}
        {getEmail(lead) !== "—" && (
          <p className="text-xs text-gray-500 truncate flex items-center gap-1">
            <Mail size={10} /> {getEmail(lead)}
          </p>
        )}
        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
          {clientName && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 font-medium flex items-center gap-0.5">
              <Building2 size={8} /> {clientName}
            </span>
          )}
          <span className="text-[10px] text-gray-400 truncate max-w-[150px]">
            {lead.form_name}
          </span>
          {lead.platform && (
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full border font-medium capitalize ${
                platformBadge[lead.platform] ||
                "bg-gray-100 dark:bg-slate-800 text-gray-500 border-gray-200"
              }`}
            >
              {lead.platform}
            </span>
          )}
        </div>
      </div>
      <ChevronRight size={14} className="text-gray-300 shrink-0 mt-2" />
    </div>
  );
}

function MobileGoogleAdsCard({
  lead,
  onClick,
  clientName,
}: {
  lead: GoogleAdsLead;
  onClick: () => void;
  clientName?: string;
}) {
  const name = getName(lead);

  return (
    <div
      onClick={onClick}
      className="flex items-start gap-3 p-4 border-b border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
    >
      <div
        className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradient(
          name
        )} flex items-center justify-center text-white text-sm font-bold shrink-0`}
      >
        {name.charAt(0).toUpperCase()}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
            {name}
          </p>
          <span className="text-[10px] text-gray-400 shrink-0">
            {timeAgo(lead.created_time)}
          </span>
        </div>
        {lead.keyword && (
          <p className="text-xs text-gray-500 mt-0.5 truncate flex items-center gap-1">
            <Briefcase size={10} /> {lead.keyword}
          </p>
        )}
        {(lead.city || lead.state) && (
          <p className="text-xs text-gray-500 truncate flex items-center gap-1">
            <MapPin size={10} /> {getCity(lead)}
          </p>
        )}
        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
          {clientName && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 font-medium flex items-center gap-0.5">
              <Building2 size={8} /> {clientName}
            </span>
          )}
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 font-medium">
            Google Ads
          </span>
          {lead.campaign_name && (
            <span className="text-[10px] text-gray-400 truncate max-w-[140px]">
              {lead.campaign_name}
            </span>
          )}
        </div>
      </div>
      <ChevronRight size={14} className="text-gray-300 shrink-0 mt-2" />
    </div>
  );
}

// ─── Pipeline Card ────────────────────────────────────────────────────────────
function PipelineCard({
  lead,
  onClick,
  clientName,
}: {
  lead: Lead;
  onClick: () => void;
  clientName?: string;
}) {
  const name = getName(lead);

  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-slate-800 rounded-xl p-3 cursor-pointer hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all group"
    >
      <div className="flex items-center gap-2 mb-2">
        <div
          className={`w-7 h-7 rounded-full bg-gradient-to-br ${avatarGradient(
            name
          )} flex items-center justify-center text-white text-xs font-bold shrink-0`}
        >
          {name.charAt(0).toUpperCase()}
        </div>
        <p className="text-xs font-semibold text-gray-900 dark:text-white truncate flex-1">
          {name}
        </p>
        <ChevronRight
          size={11}
          className="text-gray-300 shrink-0 group-hover:text-indigo-400 transition-colors"
        />
      </div>
      {getPhone(lead) !== "—" && (
        <p className="text-[11px] text-gray-500 dark:text-slate-400 truncate mb-1">
          📞 {getPhone(lead)}
        </p>
      )}
      {clientName && (
        <p className="text-[10px] text-indigo-400 truncate mb-1 flex items-center gap-1">
          <Building2 size={9} /> {clientName}
        </p>
      )}
      <p className="text-[10px] text-gray-400 truncate mb-2">{lead.form_name}</p>
      <div className="flex items-center justify-between">
        {lead.platform ? (
          <span
            className={`text-[10px] px-1.5 py-0.5 rounded-full border font-medium capitalize ${
              platformBadge[lead.platform] ||
              "bg-gray-100 dark:bg-slate-800 text-gray-500 border-gray-200"
            }`}
          >
            {lead.platform}
          </span>
        ) : (
          <span />
        )}
        <span className="text-[10px] text-gray-400">
          {timeAgo(lead.created_time)}
        </span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════════
export default function LeadManagement() {
  const [activeTab, setActiveTab] = useState<"meta" | "googleads" | "pipeline">(
    "meta"
  );
  const [search, setSearch] = useState("");
  const [filterForm, setFilterForm] = useState("");
  const [filterPlatform, setFilterPlatform] = useState("");
  const [filterClient, setFilterClient] = useState("");
  const [selectedMeta, setSelectedMeta] = useState<Lead | null>(null);
  const [selectedGoogleAds, setSelectedGoogleAds] =
    useState<GoogleAdsLead | null>(null);
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  // ── Fetch ──────────────────────────────────────────────────────────────────
  const {
    data: metaData,
    isLoading: metaLoading,
    isError: metaError,
    refetch: refetchMeta,
    isFetching: metaFetching,
  } = useGet<LeadsResponse>("meta-leads", "/meta/leads");

  const {
    data: googleAdsData,
    isLoading: googleAdsLoading,
    isError: googleAdsError,
    refetch: refetchGoogleAds,
    isFetching: googleAdsFetching,
  } = useGet<GoogleAdsResponse>("google-ads-leads", "/google-ads/leads");

  const { data: clientsData } = useGet<ClientsResponse>("clients", "/clients");

  const metaLeads: Lead[] = metaData?.data || [];
  const googleAdsLeads: GoogleAdsLead[] = googleAdsData?.data || [];
  const clients: Client[] = clientsData?.clients || [];

  const clientNameMap = useMemo(() => {
    const m: Record<string, string> = {};
    clients.forEach((c) => {
      m[c._id] = c.profile?.companyName || "Unnamed";
    });
    return m;
  }, [clients]);

  const getClientName = (lead: Lead | GoogleAdsLead) =>
    lead.clientId ? clientNameMap[lead.clientId] || "—" : undefined;

  // ── Stats ──────────────────────────────────────────────────────────────────
  const today = new Date().toDateString();
  const metaToday = metaLeads.filter(
    (l) => new Date(l.created_time).toDateString() === today
  ).length;
  const googleAdsToday = googleAdsLeads.filter(
    (l) => new Date(l.created_time).toDateString() === today
  ).length;

  const totalLeads = (metaData?.total || 0) + (googleAdsData?.total || 0);
  const isFetching =
    activeTab === "googleads" ? googleAdsFetching : metaFetching;
  const refetch = activeTab === "googleads" ? refetchGoogleAds : refetchMeta;

  // Filter options
  const uniqueForms = useMemo(
    () =>
      [
        ...new Map(
          metaLeads.map((l) => [l.form_id, { id: l.form_id, name: l.form_name }])
        ).values(),
      ],
    [metaLeads]
  );

  const uniquePlatforms = useMemo(
    () => [...new Set(metaLeads.map((l) => l.platform).filter(Boolean))] as string[],
    [metaLeads]
  );

  const googleAdsCampaigns = useMemo(
    () =>
      [
        ...new Map(
          googleAdsLeads
            .filter((l) => l.campaign_id && l.campaign_name)
            .map((l) => [
              l.campaign_id as string,
              {
                id: l.campaign_id as string,
                name: l.campaign_name as string,
              },
            ])
        ).values(),
      ],
    [googleAdsLeads]
  );

  const googleAdsKeywords = useMemo(
    () => [...new Set(googleAdsLeads.map((l) => l.keyword).filter(Boolean))] as string[],
    [googleAdsLeads]
  );

  // ── Filtered ───────────────────────────────────────────────────────────────
  const filteredMeta = useMemo(() => {
    const q = search.toLowerCase();
    return metaLeads.filter((l) => {
      const s =
        !q ||
        getName(l).toLowerCase().includes(q) ||
        getEmail(l).toLowerCase().includes(q) ||
        getPhone(l).toLowerCase().includes(q) ||
        (l.ad_name || "").toLowerCase().includes(q) ||
        (l.form_name || "").toLowerCase().includes(q);

      return (
        s &&
        (!filterForm || l.form_id === filterForm) &&
        (!filterPlatform || l.platform === filterPlatform) &&
        (!filterClient || l.clientId === filterClient)
      );
    });
  }, [metaLeads, search, filterForm, filterPlatform, filterClient]);

  const filteredGoogleAds = useMemo(() => {
    const q = search.toLowerCase();
    return googleAdsLeads.filter((l) => {
      const s =
        !q ||
        getName(l).toLowerCase().includes(q) ||
        getGoogleAdsEmail(l).toLowerCase().includes(q) ||
        getGoogleAdsPhone(l).toLowerCase().includes(q) ||
        (l.campaign_name || "").toLowerCase().includes(q) ||
        (l.keyword || "").toLowerCase().includes(q) ||
        (l.ad_group_name || "").toLowerCase().includes(q);

      return (
        s &&
        (!filterForm || l.campaign_id === filterForm) &&
        (!filterPlatform || l.keyword === filterPlatform) &&
        (!filterClient || l.clientId === filterClient)
      );
    });
  }, [googleAdsLeads, search, filterForm, filterPlatform, filterClient]);

  const metaTotalPages = Math.ceil(filteredMeta.length / PER_PAGE);
  const googleAdsTotalPages = Math.ceil(filteredGoogleAds.length / PER_PAGE);

  const paginatedMeta = filteredMeta.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const paginatedGoogleAds = filteredGoogleAds.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  const stageSize = Math.ceil(metaLeads.length / PIPELINE_STAGES.length) || 5;
  const stageLeads = PIPELINE_STAGES.map((s, i) => ({
    ...s,
    leads: metaLeads.slice(i * stageSize, (i + 1) * stageSize),
  }));

  const hasFilters = !!(search || filterForm || filterPlatform || filterClient);
  const activeFiltersCount = [
    search,
    filterForm,
    filterPlatform,
    filterClient,
  ].filter(Boolean).length;
  const selectedClientName = filterClient ? clientNameMap[filterClient] || "" : "";

  const clearAll = () => {
    setSearch("");
    setFilterForm("");
    setFilterPlatform("");
    setFilterClient("");
    setPage(1);
    setShowFilters(false);
  };

  const switchTab = (tab: "meta" | "googleads" | "pipeline") => {
    setActiveTab(tab);
    setPage(1);
    setFilterForm("");
    setFilterPlatform("");
  };

  // Shared filter bar renderer
  const renderFilters = (tab: "meta" | "googleads") => {
    const optionsA =
      tab === "meta"
        ? uniqueForms
        : googleAdsCampaigns.map((c) => ({ id: c.id, name: c.name }));

    const optionsB =
      tab === "meta"
        ? uniquePlatforms.map((p) => ({ id: p, name: p }))
        : googleAdsKeywords.map((k) => ({ id: k, name: k }));

    const labelA = tab === "meta" ? "All Forms" : "All Campaigns";
    const labelB = tab === "meta" ? "All Platforms" : "All Keywords";

    const placeholder =
      tab === "meta"
        ? "Search name, email, phone, ad, form..."
        : "Search name, email, phone, campaign, keyword...";

    return (
      <>
        <div className="hidden sm:flex flex-row gap-2 shrink-0">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] flex-1">
            <Search size={14} className="text-gray-400 shrink-0" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder={placeholder}
              className="bg-transparent outline-none text-sm w-full text-gray-700 dark:text-gray-200 placeholder:text-gray-400"
            />
            {search && (
              <button
                onClick={() => {
                  setSearch("");
                  setPage(1);
                }}
              >
                <X size={13} className="text-gray-400" />
              </button>
            )}
          </div>

          {clients.length > 0 && (
            <select
              value={filterClient}
              onChange={(e) => {
                setFilterClient(e.target.value);
                setPage(1);
              }}
              className="px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-sm text-gray-700 dark:text-gray-200 outline-none max-w-[155px]"
            >
              <option value="">All Clients</option>
              {clients.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.profile?.companyName || "Unnamed"}
                </option>
              ))}
            </select>
          )}

          {optionsA.length > 1 && (
            <select
              value={filterForm}
              onChange={(e) => {
                setFilterForm(e.target.value);
                setPage(1);
              }}
              className="px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-sm text-gray-700 dark:text-gray-200 outline-none max-w-[155px]"
            >
              <option value="">{labelA}</option>
              {optionsA.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.name}
                </option>
              ))}
            </select>
          )}

          {optionsB.length > 1 && (
            <select
              value={filterPlatform}
              onChange={(e) => {
                setFilterPlatform(e.target.value);
                setPage(1);
              }}
              className="px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-sm text-gray-700 dark:text-gray-200 outline-none max-w-[155px]"
            >
              <option value="">{labelB}</option>
              {optionsB.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.name}
                </option>
              ))}
            </select>
          )}

          {hasFilters && (
            <button
              onClick={clearAll}
              className="flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg border border-red-200 dark:border-red-900/50 text-red-500 hover:bg-red-50 transition-colors shrink-0"
            >
              <X size={12} /> Clear
            </button>
          )}
        </div>

        <div className="flex sm:hidden gap-2 shrink-0">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] flex-1">
            <Search size={14} className="text-gray-400 shrink-0" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full text-gray-700 dark:text-gray-200 placeholder:text-gray-400"
            />
            {search && (
              <button
                onClick={() => {
                  setSearch("");
                  setPage(1);
                }}
              >
                <X size={13} className="text-gray-400" />
              </button>
            )}
          </div>

          <button
            onClick={() => setShowFilters((f) => !f)}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg border transition-colors shrink-0 relative ${
              showFilters || activeFiltersCount > 0
                ? "bg-indigo-600 border-indigo-600 text-white"
                : "border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-gray-600"
            }`}
          >
            <SlidersHorizontal size={13} />
            {activeFiltersCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        {showFilters && (
          <div className="flex sm:hidden flex-col gap-2 shrink-0">
            {clients.length > 0 && (
              <select
                value={filterClient}
                onChange={(e) => {
                  setFilterClient(e.target.value);
                  setPage(1);
                }}
                className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-sm text-gray-700 dark:text-gray-200 outline-none w-full"
              >
                <option value="">All Clients</option>
                {clients.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.profile?.companyName || "Unnamed"}
                  </option>
                ))}
              </select>
            )}

            {optionsA.length > 1 && (
              <select
                value={filterForm}
                onChange={(e) => {
                  setFilterForm(e.target.value);
                  setPage(1);
                }}
                className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-sm text-gray-700 dark:text-gray-200 outline-none w-full"
              >
                <option value="">{labelA}</option>
                {optionsA.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.name}
                  </option>
                ))}
              </select>
            )}

            {optionsB.length > 1 && (
              <select
                value={filterPlatform}
                onChange={(e) => {
                  setFilterPlatform(e.target.value);
                  setPage(1);
                }}
                className="px-3 py-2.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-sm text-gray-700 dark:text-gray-200 outline-none w-full"
              >
                <option value="">{labelB}</option>
                {optionsB.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.name}
                  </option>
                ))}
              </select>
            )}

            {hasFilters && (
              <button
                onClick={clearAll}
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs rounded-lg border border-red-200 dark:border-red-900/50 text-red-500"
              >
                <X size={12} /> Clear all
              </button>
            )}
          </div>
        )}
      </>
    );
  };

  const renderPagination = (totalPages: number, total: number) => {
    if (totalPages <= 1) return null;

    return (
      <div className="flex items-center justify-between shrink-0 pt-1">
        <p className="text-xs text-gray-500 dark:text-slate-400">
          <span className="font-medium text-gray-700 dark:text-slate-300">
            {(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, total)}
          </span>
          {" / "}
          <span className="font-medium text-gray-700 dark:text-slate-300">
            {total}
          </span>
        </p>

        <div className="flex gap-1">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 dark:border-slate-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
          >
            ←
          </button>

          {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
            const p =
              totalPages <= 3
                ? i + 1
                : page <= 2
                ? i + 1
                : page >= totalPages - 1
                ? totalPages - 2 + i
                : page - 1 + i;

            return (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                  p === page
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800"
                }`}
              >
                {p}
              </button>
            );
          })}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 dark:border-slate-700 disabled:opacity-40 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen w-full max-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white overflow-hidden">
      <div className="shrink-0 px-4 pt-4 sm:pt-5 sm:px-6 md:px-8 space-y-3 sm:space-y-4 pb-0 border-b border-gray-200 dark:border-slate-800">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
              Lead Management
            </h1>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 flex items-center gap-2 flex-wrap">
              <span className="hidden sm:inline">CRM Dashboard</span>
              {metaLoading && googleAdsLoading ? (
                <span className="w-16 h-3 bg-gray-200 dark:bg-slate-700 rounded-full animate-pulse inline-block" />
              ) : (
                <span className="text-emerald-500 font-medium">
                  {totalLeads} total leads
                </span>
              )}
              {selectedClientName && (
                <span className="flex items-center gap-1 text-indigo-400 text-[11px]">
                  <Building2 size={10} /> {selectedClientName}
                </span>
              )}
              {isFetching && (
                <span className="flex items-center gap-1 text-indigo-400">
                  <RefreshCw size={10} className="animate-spin" />
                  <span className="hidden sm:inline">Syncing…</span>
                </span>
              )}
            </p>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => refetch()}
              disabled={isFetching}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
            >
              <RefreshCw
                size={12}
                className={isFetching ? "animate-spin" : ""}
              />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          <StatCard
            icon={TrendingUp}
            accent="indigo"
            value={metaLoading ? "—" : metaToday}
            label="Meta Today"
            sub="Live from Meta"
          />
          <StatCard
            icon={BarChart3}
            accent="blue"
            value={metaLoading ? "—" : metaData?.total ?? 0}
            label="Meta Total"
          />
          <StatCard
            icon={Megaphone}
            accent="orange"
            value={googleAdsLoading ? "—" : googleAdsToday}
            label="Google Ads Today"
            sub="Live from Google Ads"
          />
          <StatCard
            icon={Star}
            accent="emerald"
            value={googleAdsLoading ? "—" : googleAdsData?.total ?? 0}
            label="Google Ads Total"
          />
        </div>

        <div className="flex gap-4 sm:gap-6 -mb-px">
          {([
            {
              key: "meta",
              label: "Meta Ads",
              count: filteredMeta.length,
              loading: metaLoading,
              badgeCls:
                "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400",
            },
            {
              key: "googleads",
              label: "Google Ads",
              count: filteredGoogleAds.length,
              loading: googleAdsLoading,
              badgeCls:
                "bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400",
            },
            {
              key: "pipeline",
              label: "Pipeline",
              count: null,
              loading: false,
              badgeCls: "",
            },
          ] as const).map((tab) => (
            <button
              key={tab.key}
              onClick={() => switchTab(tab.key)}
              className={`pb-3 font-medium transition-colors whitespace-nowrap border-b-2 text-xs sm:text-sm ${
                activeTab === tab.key
                  ? "border-indigo-500 text-indigo-500"
                  : "border-transparent text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200"
              }`}
            >
              {tab.label}
              {tab.count !== null && !tab.loading && tab.count > 0 && (
                <span
                  className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    activeTab === tab.key
                      ? tab.badgeCls
                      : "bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ══ META TAB ══════════════════════════════════════════════════════════ */}
      {activeTab === "meta" && (
        <div
          className="flex-1 min-h-0 flex flex-col px-4 py-3 sm:px-6 sm:py-4 md:px-8 gap-3 overflow-hidden"
          style={{ minHeight: 0 }}
        >
          {renderFilters("meta")}

          {metaError && (
            <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center px-6">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <AlertCircle size={22} className="text-red-400" />
              </div>
              <p className="font-semibold text-red-400 text-sm">
                Could not load Meta leads
              </p>
              <button
                onClick={() => refetchMeta()}
                className="px-4 py-2 text-xs rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {!metaError && (
            <div
              className="md:hidden flex-1 min-h-0 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] overflow-y-auto overscroll-contain"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(99,102,241,.3) transparent",
              }}
            >
              {metaLoading &&
                Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}

              {!metaLoading && filteredMeta.length === 0 && (
                <div className="flex flex-col items-center justify-center gap-3 py-16 text-gray-400">
                  <User size={28} className="opacity-30" />
                  <p className="text-sm font-medium">
                    {hasFilters ? "No leads match" : "No leads found"}
                  </p>
                  {hasFilters && (
                    <button
                      onClick={clearAll}
                      className="text-xs text-indigo-500 hover:underline"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
              )}

              {!metaLoading &&
                paginatedMeta.map((lead) => (
                  <MobileMetaCard
                    key={lead.lead_id}
                    lead={lead}
                    clientName={getClientName(lead)}
                    onClick={() => setSelectedMeta(lead)}
                  />
                ))}
            </div>
          )}

          {!metaError && (
            <div className="hidden md:flex flex-col flex-1 min-h-0 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] overflow-hidden">
              <div
                className="w-full h-full overflow-auto"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(99,102,241,.3) transparent",
                }}
              >
                <table className="w-full text-sm table-fixed">
                  <thead className="sticky top-0 z-10 bg-gray-50/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-slate-800">
                    <tr>
                      {([
                        ["Lead", "220px"],
                        ["Client", "140px"],
                        ["Email", "190px"],
                        ["Phone", "140px"],
                        ["Form / Ad", "170px"],
                        ["Platform", "110px"],
                        ["Received", "110px"],
                        ["", "40px"],
                      ] as const).map(([h, w]) => (
                        <th
                          key={h}
                          style={{ width: w }}
                          className="px-3 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100 dark:divide-slate-800/70">
                    {metaLoading &&
                      Array.from({ length: 10 }).map((_, i) => (
                        <SkeletonRow key={i} />
                      ))}

                    {!metaLoading && filteredMeta.length === 0 && (
                      <tr>
                        <td colSpan={8} className="px-4 py-20 text-center">
                          <div className="flex flex-col items-center gap-3 text-gray-400">
                            <User size={32} className="opacity-30" />
                            <p className="font-medium text-sm">
                              {hasFilters
                                ? "No leads match filters"
                                : "No leads found"}
                            </p>
                            {hasFilters && (
                              <button
                                onClick={clearAll}
                                className="text-xs text-indigo-500 hover:underline"
                              >
                                Clear filters
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}

                    {!metaLoading &&
                      paginatedMeta.map((lead) => {
                        const name = getName(lead);
                        const cn = getClientName(lead);

                        return (
                          <tr
                            key={lead.lead_id}
                            onClick={() => setSelectedMeta(lead)}
                            className="hover:bg-indigo-50/40 dark:hover:bg-slate-800/40 cursor-pointer transition-colors"
                          >
                            <td className="px-3 py-3">
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-7 h-7 rounded-full bg-gradient-to-br ${avatarGradient(
                                    name
                                  )} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                                >
                                  {name.charAt(0).toUpperCase()}
                                </div>
                                <div className="min-w-0">
                                  <p className="font-semibold text-gray-900 dark:text-white truncate">
                                    {name}
                                  </p>
                                  {getCity(lead) !== "—" && (
                                    <p className="text-[11px] text-gray-400 truncate">
                                      {getCity(lead)}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </td>

                            <td className="px-3 py-3">
                              {cn ? (
                                <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium truncate max-w-[120px]">
                                  <Building2 size={9} className="shrink-0" />
                                  {cn}
                                </span>
                              ) : (
                                <span className="text-gray-300 dark:text-slate-600 text-xs">
                                  —
                                </span>
                              )}
                            </td>

                            <td className="px-3 py-3">
                              <p className="truncate text-gray-600 dark:text-slate-400 text-xs">
                                {getEmail(lead)}
                              </p>
                            </td>

                            <td className="px-3 py-3">
                              <p className="truncate text-gray-600 dark:text-slate-400 text-xs">
                                {getPhone(lead)}
                              </p>
                            </td>

                            <td className="px-3 py-3">
                              <p className="text-xs font-medium truncate">
                                {lead.form_name}
                              </p>
                              {lead.ad_name && (
                                <p className="text-[11px] text-gray-400 truncate">
                                  {lead.ad_name}
                                </p>
                              )}
                            </td>

                            <td className="px-3 py-3">
                              {lead.platform ? (
                                <span
                                  className={`text-[11px] px-2 py-1 rounded-full border font-medium capitalize ${
                                    platformBadge[lead.platform] ||
                                    "bg-gray-100 dark:bg-slate-800 text-gray-500 border-gray-200"
                                  }`}
                                >
                                  {lead.platform}
                                </span>
                              ) : (
                                "—"
                              )}
                            </td>

                            <td className="px-3 py-3">
                              <p className="text-xs font-medium">
                                {timeAgo(lead.created_time)}
                              </p>
                              <p className="text-[11px] text-gray-400">
                                {formatDate(lead.created_time)}
                              </p>
                            </td>

                            <td className="px-3 py-3">
                              <ExternalLink size={13} className="text-gray-400" />
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {renderPagination(metaTotalPages, filteredMeta.length)}
        </div>
      )}

      {/* ══ GOOGLE ADS TAB ═══════════════════════════════════════════════════ */}
      {activeTab === "googleads" && (
        <div
          className="flex-1 min-h-0 flex flex-col px-4 py-3 sm:px-6 sm:py-4 md:px-8 gap-3 overflow-hidden"
          style={{ minHeight: 0 }}
        >
          {renderFilters("googleads")}

          {googleAdsError && (
            <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center px-6">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <AlertCircle size={22} className="text-red-400" />
              </div>
              <p className="font-semibold text-red-400 text-sm">
                Could not load Google Ads leads
              </p>
              <button
                onClick={() => refetchGoogleAds()}
                className="px-4 py-2 text-xs rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {!googleAdsError && (
            <div
              className="md:hidden flex-1 min-h-0 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] overflow-y-auto overscroll-contain"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(249,115,22,.3) transparent",
              }}
            >
              {googleAdsLoading &&
                Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}

              {!googleAdsLoading && filteredGoogleAds.length === 0 && (
                <div className="flex flex-col items-center justify-center gap-3 py-16 text-gray-400">
                  <User size={28} className="opacity-30" />
                  <p className="text-sm font-medium">
                    {hasFilters
                      ? "No leads match"
                      : "No Google Ads leads found"}
                  </p>
                  {hasFilters && (
                    <button
                      onClick={clearAll}
                      className="text-xs text-indigo-500 hover:underline"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
              )}

              {!googleAdsLoading &&
                paginatedGoogleAds.map((lead) => (
                  <MobileGoogleAdsCard
                    key={lead.lead_id}
                    lead={lead}
                    clientName={getClientName(lead)}
                    onClick={() => setSelectedGoogleAds(lead)}
                  />
                ))}
            </div>
          )}

          {!googleAdsError && (
            <div className="hidden md:flex flex-col flex-1 min-h-0 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] overflow-hidden">
              <div
                className="w-full h-full overflow-auto"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(249,115,22,.3) transparent",
                }}
              >
                <table className="w-full text-sm table-fixed">
                  <thead className="sticky top-0 z-10 bg-gray-50/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-slate-800">
                    <tr>
                      {([
                        ["Name", "200px"],
                        ["Client", "140px"],
                        ["Email", "180px"],
                        ["Phone", "140px"],
                        ["Campaign", "180px"],
                        ["Keyword / Ad Group", "180px"],
                        ["Received", "120px"],
                        ["Source", "80px"],
                      ] as const).map(([h, w]) => (
                        <th
                          key={h}
                          style={{ width: w }}
                          className="px-3 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-gray-400"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100 dark:divide-slate-800/70">
                    {googleAdsLoading &&
                      Array.from({ length: 8 }).map((_, i) => (
                        <SkeletonRow key={i} />
                      ))}

                    {!googleAdsLoading && filteredGoogleAds.length === 0 && (
                      <tr>
                        <td colSpan={8} className="px-4 py-20 text-center">
                          <div className="flex flex-col items-center gap-3 text-gray-400">
                            <User size={32} className="opacity-30" />
                            <p className="font-medium text-sm">
                              {hasFilters
                                ? "No leads match"
                                : "No Google Ads leads"}
                            </p>
                            {hasFilters && (
                              <button
                                onClick={clearAll}
                                className="text-xs text-indigo-500 hover:underline"
                              >
                                Clear filters
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}

                    {!googleAdsLoading &&
                      paginatedGoogleAds.map((lead) => {
                        const name = getName(lead);
                        const cn = getClientName(lead);

                        return (
                          <tr
                            key={lead.lead_id}
                            onClick={() => setSelectedGoogleAds(lead)}
                            className="hover:bg-orange-50/40 dark:hover:bg-slate-800/40 cursor-pointer transition-colors"
                          >
                            <td className="px-3 py-3">
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-7 h-7 rounded-full bg-gradient-to-br ${avatarGradient(
                                    name
                                  )} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                                >
                                  {name.charAt(0).toUpperCase()}
                                </div>
                                <div className="min-w-0">
                                  <p className="font-semibold text-gray-900 dark:text-white truncate">
                                    {name}
                                  </p>
                                  {getCity(lead) !== "—" && (
                                    <p className="text-[11px] text-gray-400 truncate">
                                      {getCity(lead)}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </td>

                            <td className="px-3 py-3">
                              {cn ? (
                                <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium truncate max-w-[120px]">
                                  <Building2 size={9} className="shrink-0" />
                                  {cn}
                                </span>
                              ) : (
                                <span className="text-gray-300 dark:text-slate-600 text-xs">
                                  —
                                </span>
                              )}
                            </td>

                            <td className="px-3 py-3">
                              <p className="truncate text-gray-600 dark:text-slate-400 text-xs">
                                {getGoogleAdsEmail(lead)}
                              </p>
                            </td>

                            <td className="px-3 py-3">
                              <p className="truncate text-gray-600 dark:text-slate-400 text-xs">
                                {getGoogleAdsPhone(lead)}
                              </p>
                            </td>

                            <td className="px-3 py-3">
                              <p className="text-xs font-medium text-gray-900 dark:text-white truncate">
                                {lead.campaign_name || "—"}
                              </p>
                            </td>

                            <td className="px-3 py-3">
                              <p className="text-xs font-medium text-gray-900 dark:text-white truncate">
                                {lead.keyword || "—"}
                              </p>
                              {lead.ad_group_name && (
                                <p className="text-[11px] text-gray-400 truncate">
                                  {lead.ad_group_name}
                                </p>
                              )}
                            </td>

                            <td className="px-3 py-3">
                              <p className="text-xs font-medium">
                                {timeAgo(lead.created_time)}
                              </p>
                              <p className="text-[11px] text-gray-400">
                                {formatDate(lead.created_time)}
                              </p>
                            </td>

                            <td className="px-3 py-3">
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 font-semibold whitespace-nowrap">
                                Google Ads
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {renderPagination(googleAdsTotalPages, filteredGoogleAds.length)}
        </div>
      )}

      {/* ══ PIPELINE TAB ══════════════════════════════════════════════════════ */}
      {activeTab === "pipeline" && (
        <div className="flex flex-col min-h-0 flex-1 px-4 py-3 sm:px-6 sm:py-4 md:px-8 gap-3 overflow-hidden">
          {clients.length > 0 && (
            <div className="shrink-0 flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setFilterClient("")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  !filterClient
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-gray-600 hover:border-indigo-400"
                }`}
              >
                All Clients
                {!filterClient && (
                  <span className="bg-white/25 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                    {metaLeads.length}
                  </span>
                )}
              </button>

              {clients.map((c) => {
                const cName = c.profile?.companyName || "Unnamed";
                const isActive = filterClient === c._id;
                const count = metaLeads.filter((l) => l.clientId === c._id).length;

                return (
                  <button
                    key={c._id}
                    onClick={() => setFilterClient(isActive ? "" : c._id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                      isActive
                        ? "bg-indigo-600 border-indigo-600 text-white"
                        : "border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-gray-600 hover:border-indigo-400"
                    }`}
                  >
                    <Building2 size={10} />
                    {cName}
                    {count > 0 && (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                          isActive
                            ? "bg-white/25 text-white"
                            : "bg-gray-100 dark:bg-slate-800 text-gray-500"
                        }`}
                      >
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}

              {filterClient && (
                <button
                  onClick={() => setFilterClient("")}
                  className="flex items-center gap-1 px-2.5 py-1.5 text-xs rounded-full border border-red-200 text-red-500 hover:bg-red-50 transition-colors"
                >
                  <X size={10} /> Clear
                </button>
              )}
            </div>
          )}

          {metaError ? (
            <div className="flex flex-col items-center justify-center h-full gap-3">
              <AlertCircle size={28} className="text-red-400" />
              <p className="text-sm text-red-400">Could not load pipeline</p>
              <button
                onClick={() => refetchMeta()}
                className="text-xs text-indigo-500 hover:underline"
              >
                Retry
              </button>
            </div>
          ) : (
            <div
              className="h-full w-full overflow-x-auto overflow-y-hidden"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(99,102,241,.3) transparent",
              }}
            >
              <div className="h-full flex gap-3 w-max">
                {stageLeads.map((col) => (
                  <div
                    key={col.key}
                    style={{
                      width: 185,
                      flexShrink: 0,
                      overflowY: "auto",
                      overflowX: "hidden",
                      overscrollBehavior: "contain",
                    }}
                    className="flex flex-col gap-2 pb-4"
                  >
                    <div
                      className={`sticky top-0 z-10 flex justify-between items-center px-3 py-2 rounded-xl text-xs font-semibold text-white ${col.color}`}
                    >
                      <span className="truncate">{col.title}</span>
                      <span className="bg-white/20 px-2 py-0.5 rounded-full font-bold ml-1 shrink-0">
                        {metaLoading ? "—" : col.leads.length}
                      </span>
                    </div>

                    {metaLoading &&
                      Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-20 rounded-xl bg-gray-200 dark:bg-slate-800 animate-pulse"
                        />
                      ))}

                    {!metaLoading && col.leads.length === 0 && (
                      <div className="flex-1 rounded-xl border-2 border-dashed border-gray-200 dark:border-slate-700 flex items-center justify-center text-xs text-gray-400 py-8">
                        Empty
                      </div>
                    )}

                    {!metaLoading &&
                      col.leads.map((lead) => (
                        <PipelineCard
                          key={lead.lead_id}
                          lead={lead}
                          clientName={getClientName(lead)}
                          onClick={() => setSelectedMeta(lead)}
                        />
                      ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Drawers */}
      {selectedMeta && (
        <MetaLeadDrawer
          lead={selectedMeta}
          clientName={getClientName(selectedMeta)}
          onClose={() => setSelectedMeta(null)}
        />
      )}
      {selectedGoogleAds && (
        <GoogleAdsLeadDrawer
          lead={selectedGoogleAds}
          clientName={getClientName(selectedGoogleAds)}
          onClose={() => setSelectedGoogleAds(null)}
        />
      )}
    </div>
  );
}