// "use client";

// import { useState } from "react";
// import {
//   Building2,
//   Target,
//   Share2,
//   BarChart3,
//   Users,
// } from "lucide-react";

// const steps = [
//   "Profile",
//   "Goals",
//   "Channels",
//   "KPIs",
//   "Stakeholders",
// ];

// export default function ClientOnboardingWizard() {
//   const [step] = useState(1);

//   const checklist = [
//   {
//     icon: Building2,
//     title: "Profile Creation",
//     desc: "Basic company setup and industry classification",
//     active: true,
//   },
//   {
//     icon: Target,
//     title: "Goal Mapping",
//     desc: "Define primary and secondary business goals",
//   },
//   {
//     icon: Share2,
//     title: "Channel Setup",
//     desc: "Connect advertising and CRM platforms",
//   },
//   {
//     icon: BarChart3,
//     title: "KPI Definition",
//     desc: "Set CPL, CAC, ROAS, LTV targets",
//   },
//   {
//     icon: Users,
//     title: "Stakeholder Mapping",
//     desc: "Add team members and reporting access",
//   },
// ];

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white p-8">

//       {/* HEADER */}

//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h1 className="text-2xl font-bold">
//             Client Onboarding Wizard
//           </h1>
//           <p className="text-sm text-gray-500">
//             Set up a new client in 5 structured steps
//           </p>
//         </div>

//         <button className="text-sm text-indigo-500">
//           ← Back to Clients
//         </button>
//       </div>

//       {/* STEP PROGRESS */}

//       <div className="flex items-center justify-between mb-10">

//         {steps.map((s, i) => (
//           <div key={i} className="flex-1 flex items-center">

//             <div
//               className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium
//               ${
//                 i + 1 <= step
//                   ? "bg-indigo-600 text-white"
//                   : "bg-gray-200 dark:bg-slate-700"
//               }`}
//             >
//               {i + 1}
//             </div>

//             <div className="ml-2 text-xs text-gray-500">
//               {s}
//             </div>

//             {i !== steps.length - 1 && (
//               <div className="flex-1 h-[2px] mx-4 bg-gray-200 dark:bg-slate-700"></div>
//             )}

//           </div>
//         ))}

//       </div>

//       {/* MAIN GRID */}

//       <div className="grid grid-cols-3 gap-6">

//         {/* LEFT FORM */}

//         <div className="col-span-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-8">

//           <h2 className="font-semibold mb-6">
//             Step 1: Client Profile Creation
//           </h2>

//           <div className="grid grid-cols-2 gap-6">

//             <div>
//               <label className="text-sm text-gray-500">
//                 Company Name *
//               </label>
//               <input
//                 placeholder="e.g. TechStart Solutions"
//                 className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-500">
//                 Industry *
//               </label>
//               <select className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700">
//                 <option>Select Industry</option>
//                 <option>Education</option>
//                 <option>Healthcare</option>
//                 <option>Finance</option>
//               </select>
//             </div>

//             <div>
//               <label className="text-sm text-gray-500">
//                 Revenue Model
//               </label>
//               <select className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700">
//                 <option>B2C</option>
//                 <option>B2B</option>
//               </select>
//             </div>

//             <div>
//               <label className="text-sm text-gray-500">
//                 Primary Market
//               </label>
//               <input
//                 placeholder="e.g. Pan-India, Mumbai"
//                 className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700"
//               />
//             </div>

//           </div>

//           {/* DESCRIPTION */}

//           <div className="mt-6">

//             <label className="text-sm text-gray-500">
//               Business Description
//             </label>

//             <textarea
//               rows={3}
//               placeholder="Briefly describe the client's business..."
//               className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700"
//             />

//           </div>

//           {/* BOTTOM INPUTS */}

//           <div className="grid grid-cols-2 gap-6 mt-6">

//             <div>
//               <label className="text-sm text-gray-500">
//                 Target Audience
//               </label>

//               <input
//                 placeholder="e.g. Working professionals 25–40"
//                 className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-500">
//                 Monthly Ad Budget
//               </label>

//               <input
//                 placeholder="₹ 0"
//                 className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700"
//               />
//             </div>

//           </div>

//           {/* BUTTONS */}

//           <div className="flex gap-4 mt-8">

//             <button className="px-4 py-2 rounded-md border border-gray-300 dark:border-slate-700">
//               Save Draft
//             </button>

//             <button className="px-5 py-2 rounded-md bg-indigo-600 text-white">
//               Next: Goal Mapping →
//             </button>

//           </div>

//         </div>

//         {/* RIGHT SIDEBAR */}

//         <div className="space-y-6">

//           {/* CHECKLIST */}

//     <div className="
// rounded-2xl border p-6
// border-gray-200 bg-white
// dark:border-slate-700/40 dark:bg-gradient-to-b dark:from-[#0f1b2e] dark:to-[#0a1424]
// ">

//   <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-5">
//     Onboarding Checklist
//   </h3>

//   <div className="space-y-3">

//     {checklist.map((item, i) => {
//       const Icon = item.icon;

//       return (
//         <div
//           key={i}
//           className={`flex items-start gap-3 p-4 rounded-lg border
          
//           ${
//             item.active
//               ? "border-indigo-200 bg-indigo-50 dark:border-indigo-500/40 dark:bg-indigo-500/10"
//               : "border-gray-200 bg-gray-50 dark:border-slate-700/40 dark:bg-[#0b1526]"
//           }`}
//         >
//           {/* ICON */}

//           <div className="
//           w-9 h-9 flex items-center justify-center rounded-md
//           bg-gray-100 dark:bg-slate-800
//           ">
//             <Icon size={16} className="text-indigo-500 dark:text-indigo-400" />
//           </div>

//           {/* TEXT */}

//           <div>
//             <p
//               className={`text-sm font-medium
              
//               ${
//                 item.active
//                   ? "text-gray-900 dark:text-white"
//                   : "text-gray-600 dark:text-slate-400"
//               }`}
//             >
//               {item.title}
//             </p>

//             <p className="text-xs text-gray-500 dark:text-slate-500">
//               {item.desc}
//             </p>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// </div>


// {/* RECENT ONBOARDINGS */}


// <div className="
// rounded-2xl border p-6
// border-gray-200 bg-white
// dark:border-slate-700/40 dark:bg-gradient-to-b dark:from-[#0f1b2e] dark:to-[#0a1424]
// ">

//   <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-5">
//     Recent Onboardings
//   </h3>

//   <div className="relative pl-6 space-y-6">

//     {/* vertical line */}

//     <div className="
//     absolute left-2 top-1 bottom-1 w-[2px]
//     bg-gray-300 dark:bg-slate-700
//     "></div>


//     {/* ITEM */}

//     <div className="relative">

//       <span className="absolute -left-[10px] top-1 w-3 h-3 bg-indigo-500 rounded-full"></span>

//       <p className="text-xs text-gray-500 dark:text-slate-500">
//         2 days ago
//       </p>

//       <p className="text-sm font-medium text-gray-900 dark:text-white">
//         FinanceHub
//       </p>

//       <p className="text-xs text-gray-500 dark:text-slate-400">
//         Fully onboarded — 6 campaigns live
//       </p>

//     </div>


//     <div className="relative">

//       <span className="absolute -left-[10px] top-1 w-3 h-3 bg-emerald-500 rounded-full"></span>

//       <p className="text-xs text-gray-500 dark:text-slate-500">
//         1 week ago
//       </p>

//       <p className="text-sm font-medium text-gray-900 dark:text-white">
//         LogisticsPro
//       </p>

//       <p className="text-xs text-gray-500 dark:text-slate-400">
//         Channel setup in progress
//       </p>

//     </div>


//     <div className="relative">

//       <span className="absolute -left-[10px] top-1 w-3 h-3 bg-amber-500 rounded-full"></span>

//       <p className="text-xs text-gray-500 dark:text-slate-500">
//         2 weeks ago
//       </p>

//       <p className="text-sm font-medium text-gray-900 dark:text-white">
//         AutoBridge
//       </p>

//       <p className="text-xs text-gray-500 dark:text-slate-400">
//         KPI targets being defined
//       </p>

//     </div>

//   </div>
// </div>

//         </div>

//       </div>

//     </div>
//   );
// }








// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   Building2, Target, Share2, BarChart3, Users, ArrowLeft, ArrowRight, Save, CheckCircle2,
// } from "lucide-react";

// const steps = ["Profile", "Goals", "Channels", "KPIs", "Stakeholders"];

// const stepIcons = [Building2, Target, Share2, BarChart3, Users];

// const checklist = [
//   { icon: Building2, title: "Profile Creation", desc: "Basic company setup and industry classification" },
//   { icon: Target, title: "Goal Mapping", desc: "Define primary and secondary business goals" },
//   { icon: Share2, title: "Channel Setup", desc: "Connect advertising and CRM platforms" },
//   { icon: BarChart3, title: "KPI Definition", desc: "Set CPL, CAC, ROAS, LTV targets" },
//   { icon: Users, title: "Stakeholder Mapping", desc: "Add team members and reporting access" },
// ];

// const recentOnboardings = [
//   { color: "bg-indigo-500", time: "2 days ago", name: "FinanceHub", status: "Fully onboarded — 6 campaigns live" },
//   { color: "bg-emerald-500", time: "1 week ago", name: "LogisticsPro", status: "Channel setup in progress" },
//   { color: "bg-amber-500", time: "2 weeks ago", name: "AutoBridge", status: "KPI targets being defined" },
// ];

// // ─── Step Components ───────────────────────────────────────────────────────────

// function Step1Profile({ data, setData }: any) {
//   return (
//     <div>
//       <h2 className="font-semibold text-lg mb-6">Step 1: Client Profile Creation</h2>
//       <div className="grid grid-cols-2 gap-6">
//         <div>
//           <label className="text-sm text-gray-500 dark:text-slate-400">Company Name *</label>
//           <input value={data.companyName} onChange={e => setData({ ...data, companyName: e.target.value })}
//             placeholder="e.g. TechStart Solutions"
//             className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
//         </div>
//         <div>
//           <label className="text-sm text-gray-500 dark:text-slate-400">Industry *</label>
//           <select value={data.industry} onChange={e => setData({ ...data, industry: e.target.value })}
//             className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500">
//             <option value="">Select Industry</option>
//             <option>Education</option>
//             <option>Healthcare</option>
//             <option>Finance</option>
//             <option>E-Commerce</option>
//             <option>Real Estate</option>
//             <option>Technology</option>
//           </select>
//         </div>
//         <div>
//           <label className="text-sm text-gray-500 dark:text-slate-400">Revenue Model</label>
//           <select value={data.revenueModel} onChange={e => setData({ ...data, revenueModel: e.target.value })}
//             className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500">
//             <option>B2C</option>
//             <option>B2B</option>
//             <option>B2B2C</option>
//             <option>SaaS</option>
//           </select>
//         </div>
//         <div>
//           <label className="text-sm text-gray-500 dark:text-slate-400">Primary Market</label>
//           <input value={data.market} onChange={e => setData({ ...data, market: e.target.value })}
//             placeholder="e.g. Pan-India, Mumbai"
//             className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
//         </div>
//       </div>
//       <div className="mt-6">
//         <label className="text-sm text-gray-500 dark:text-slate-400">Business Description</label>
//         <textarea value={data.description} onChange={e => setData({ ...data, description: e.target.value })}
//           rows={3} placeholder="Briefly describe the client's business..."
//           className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
//       </div>
//       <div className="grid grid-cols-2 gap-6 mt-6">
//         <div>
//           <label className="text-sm text-gray-500 dark:text-slate-400">Target Audience</label>
//           <input value={data.targetAudience} onChange={e => setData({ ...data, targetAudience: e.target.value })}
//             placeholder="e.g. Working professionals 25–40"
//             className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
//         </div>
//         <div>
//           <label className="text-sm text-gray-500 dark:text-slate-400">Monthly Ad Budget</label>
//           <input value={data.budget} onChange={e => setData({ ...data, budget: e.target.value })}
//             placeholder="₹ 0"
//             className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
//         </div>
//       </div>
//     </div>
//   );
// }

// function Step2Goals({ data, setData }: any) {
//   const goals = ["Brand Awareness", "Lead Generation", "Sales Conversion", "Retention", "App Installs", "Website Traffic"];
//   const toggle = (g: string) => {
//     const current = data.primaryGoals || [];
//     setData({ ...data, primaryGoals: current.includes(g) ? current.filter((x: string) => x !== g) : [...current, g] });
//   };
//   return (
//     <div>
//       <h2 className="font-semibold text-lg mb-6">Step 2: Goal Mapping</h2>
//       <div>
//         <label className="text-sm text-gray-500 dark:text-slate-400 mb-3 block">Primary Goals (select all that apply)</label>
//         <div className="grid grid-cols-3 gap-3">
//           {goals.map(g => {
//             const active = (data.primaryGoals || []).includes(g);
//             return (
//               <button key={g} onClick={() => toggle(g)}
//                 className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all
//                   ${active ? "bg-indigo-600 border-indigo-600 text-white" : "border-gray-300 dark:border-slate-700 text-gray-600 dark:text-slate-400 hover:border-indigo-400"}`}>
//                 {g}
//               </button>
//             );
//           })}
//         </div>
//       </div>
//       <div className="mt-6">
//         <label className="text-sm text-gray-500 dark:text-slate-400">Growth Target (%)</label>
//         <input value={data.growthTarget || ""} onChange={e => setData({ ...data, growthTarget: e.target.value })}
//           placeholder="e.g. 30% growth in 6 months"
//           className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
//       </div>
//       <div className="mt-6">
//         <label className="text-sm text-gray-500 dark:text-slate-400">Timeline</label>
//         <select value={data.timeline || ""} onChange={e => setData({ ...data, timeline: e.target.value })}
//           className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500">
//           <option value="">Select Timeline</option>
//           <option>3 Months</option>
//           <option>6 Months</option>
//           <option>1 Year</option>
//           <option>2 Years</option>
//         </select>
//       </div>
//       <div className="mt-6">
//         <label className="text-sm text-gray-500 dark:text-slate-400">Notes</label>
//         <textarea value={data.goalNotes || ""} onChange={e => setData({ ...data, goalNotes: e.target.value })}
//           rows={3} placeholder="Any additional context about client goals..."
//           className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
//       </div>
//     </div>
//   );
// }

// function Step3Channels({ data, setData }: any) {
//   const channels = ["Google Ads", "Meta Ads", "LinkedIn Ads", "YouTube", "SEO", "Email", "WhatsApp", "Programmatic"];
//   const toggle = (c: string) => {
//     const current = data.channels || [];
//     setData({ ...data, channels: current.includes(c) ? current.filter((x: string) => x !== c) : [...current, c] });
//   };
//   return (
//     <div>
//       <h2 className="font-semibold text-lg mb-6">Step 3: Channel Setup</h2>
//       <label className="text-sm text-gray-500 dark:text-slate-400 mb-3 block">Select Active Channels</label>
//       <div className="grid grid-cols-4 gap-3">
//         {channels.map(c => {
//           const active = (data.channels || []).includes(c);
//           return (
//             <button key={c} onClick={() => toggle(c)}
//               className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-all
//                 ${active ? "bg-indigo-600 border-indigo-600 text-white" : "border-gray-300 dark:border-slate-700 text-gray-600 dark:text-slate-400 hover:border-indigo-400"}`}>
//               {c}
//             </button>
//           );
//         })}
//       </div>
//       <div className="grid grid-cols-2 gap-6 mt-6">
//         <div>
//           <label className="text-sm text-gray-500 dark:text-slate-400">CRM Platform</label>
//           <select value={data.crm || ""} onChange={e => setData({ ...data, crm: e.target.value })}
//             className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500">
//             <option value="">Select CRM</option>
//             <option>HubSpot</option>
//             <option>Salesforce</option>
//             <option>Zoho CRM</option>
//             <option>LeadSquared</option>
//             <option>None</option>
//           </select>
//         </div>
//         <div>
//           <label className="text-sm text-gray-500 dark:text-slate-400">Analytics Tool</label>
//           <select value={data.analytics || ""} onChange={e => setData({ ...data, analytics: e.target.value })}
//             className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500">
//             <option value="">Select Tool</option>
//             <option>Google Analytics 4</option>
//             <option>Mixpanel</option>
//             <option>Amplitude</option>
//             <option>Clevertap</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Step4KPIs({ data, setData }: any) {
//   return (
//     <div>
//       <h2 className="font-semibold text-lg mb-6">Step 4: KPI Definition</h2>
//       <div className="grid grid-cols-2 gap-6">
//         {[
//           { label: "Target CPL (₹)", key: "cpl", placeholder: "e.g. ₹ 500" },
//           { label: "Target CAC (₹)", key: "cac", placeholder: "e.g. ₹ 2000" },
//           { label: "Target ROAS", key: "roas", placeholder: "e.g. 4x" },
//           { label: "Target LTV (₹)", key: "ltv", placeholder: "e.g. ₹ 15,000" },
//           { label: "Conversion Rate (%)", key: "conversionRate", placeholder: "e.g. 3.5%" },
//           { label: "Monthly Lead Target", key: "leadTarget", placeholder: "e.g. 500 leads" },
//         ].map(({ label, key, placeholder }) => (
//           <div key={key}>
//             <label className="text-sm text-gray-500 dark:text-slate-400">{label}</label>
//             <input value={data[key] || ""} onChange={e => setData({ ...data, [key]: e.target.value })}
//               placeholder={placeholder}
//               className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
//           </div>
//         ))}
//       </div>
//       <div className="mt-6">
//         <label className="text-sm text-gray-500 dark:text-slate-400">Reporting Frequency</label>
//         <select value={data.reportingFreq || ""} onChange={e => setData({ ...data, reportingFreq: e.target.value })}
//           className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500">
//           <option value="">Select Frequency</option>
//           <option>Daily</option>
//           <option>Weekly</option>
//           <option>Bi-Weekly</option>
//           <option>Monthly</option>
//         </select>
//       </div>
//     </div>
//   );
// }

// function Step5Stakeholders({ data, setData }: any) {
//   const addStakeholder = () => {
//     const current = data.stakeholders || [];
//     setData({ ...data, stakeholders: [...current, { name: "", email: "", role: "" }] });
//   };
//   const updateStakeholder = (i: number, field: string, value: string) => {
//     const updated = [...(data.stakeholders || [])];
//     updated[i] = { ...updated[i], [field]: value };
//     setData({ ...data, stakeholders: updated });
//   };
//   const removeStakeholder = (i: number) => {
//     const updated = [...(data.stakeholders || [])];
//     updated.splice(i, 1);
//     setData({ ...data, stakeholders: updated });
//   };
//   const stakeholders = data.stakeholders || [{ name: "", email: "", role: "" }];

//   return (
//     <div>
//       <h2 className="font-semibold text-lg mb-6">Step 5: Stakeholder Mapping</h2>
//       <div className="space-y-4">
//         {stakeholders.map((s: any, i: number) => (
//           <div key={i} className="grid grid-cols-3 gap-4 items-end">
//             <div>
//               <label className="text-sm text-gray-500 dark:text-slate-400">Name</label>
//               <input value={s.name} onChange={e => updateStakeholder(i, "name", e.target.value)}
//                 placeholder="e.g. Rahul Sharma"
//                 className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
//             </div>
//             <div>
//               <label className="text-sm text-gray-500 dark:text-slate-400">Email</label>
//               <input value={s.email} onChange={e => updateStakeholder(i, "email", e.target.value)}
//                 placeholder="rahul@company.com"
//                 className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
//             </div>
//             <div className="flex gap-2">
//               <div className="flex-1">
//                 <label className="text-sm text-gray-500 dark:text-slate-400">Role</label>
//                 <select value={s.role} onChange={e => updateStakeholder(i, "role", e.target.value)}
//                   className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500">
//                   <option value="">Select Role</option>
//                   <option>Decision Maker</option>
//                   <option>Marketing Head</option>
//                   <option>Finance Contact</option>
//                   <option>Reporting Viewer</option>
//                 </select>
//               </div>
//               {i > 0 && (
//                 <button onClick={() => removeStakeholder(i)}
//                   className="mt-6 px-3 py-2 rounded-md border border-red-300 dark:border-red-800 text-red-500 text-sm hover:bg-red-50 dark:hover:bg-red-900/20">
//                   ✕
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//       <button onClick={addStakeholder}
//         className="mt-4 text-sm text-indigo-500 hover:text-indigo-600 flex items-center gap-1">
//         + Add Another Stakeholder
//       </button>
//       <div className="mt-6 p-4 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30">
//         <p className="text-sm font-medium text-indigo-700 dark:text-indigo-400">Ready to Submit!</p>
//         <p className="text-xs text-indigo-500 dark:text-indigo-300 mt-1">
//           Review all steps and click "Complete Onboarding" to finish setup.
//         </p>
//       </div>
//     </div>
//   );
// }

// // ─── Main Wizard ───────────────────────────────────────────────────────────────

// export default function ClientOnboardingWizard() {
//   const router = useRouter();
//   const [step, setStep] = useState(1);
//   const [saved, setSaved] = useState(false);
//   const [completed, setCompleted] = useState(false);
//   const [formData, setFormData] = useState<Record<string, any>>({});

//   const handleNext = () => { if (step < 5) setStep(s => s + 1); };
//   const handleBack = () => { if (step > 1) setStep(s => s - 1); };

//   const handleSaveDraft = () => {
//     setSaved(true);
//     setTimeout(() => setSaved(false), 2000);
//   };

//   const handleComplete = () => {
//     setCompleted(true);
//   };

//   if (completed) {
//     return (
//       <div className="min-h-screen bg-gray-50 dark:bg-[#020817] flex items-center justify-center p-8">
//         <div className="text-center">
//           <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
//             <CheckCircle2 size={40} className="text-emerald-500" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//             Client Onboarded Successfully!
//           </h2>
//           <p className="text-gray-500 dark:text-slate-400 mb-6">
//             {formData.companyName || "New Client"} has been added to your dashboard.
//           </p>
//           <button onClick={() => router.push("/")}
//             className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
//             Go to Dashboard
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white p-8">

//       {/* HEADER */}
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h1 className="text-2xl font-bold">Client Onboarding Wizard</h1>
//           <p className="text-sm text-gray-500 dark:text-slate-400">Set up a new client in 5 structured steps</p>
//         </div>
//         <button onClick={() => router.back()}
//           className="flex items-center gap-2 text-sm text-indigo-500 hover:text-indigo-600 transition-colors">
//           <ArrowLeft size={16} /> Back to Clients
//         </button>
//       </div>

//       {/* STEP PROGRESS */}
//       <div className="flex items-center mb-10">
//         {steps.map((s, i) => {
//           const Icon = stepIcons[i];
//           const isActive = i + 1 === step;
//           const isDone = i + 1 < step;
//           return (
//             <div key={i} className="flex items-center flex-1">
//               <button onClick={() => setStep(i + 1)} className="flex items-center gap-2 group">
//                 <div className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-all
//                   ${isDone ? "bg-emerald-500 text-white" : isActive ? "bg-indigo-600 text-white ring-4 ring-indigo-100 dark:ring-indigo-900" : "bg-gray-200 dark:bg-slate-700 text-gray-500"}`}>
//                   {isDone ? <CheckCircle2 size={16} /> : <Icon size={15} />}
//                 </div>
//                 <span className={`text-xs font-medium hidden sm:block transition-colors
//                   ${isActive ? "text-indigo-600 dark:text-indigo-400" : isDone ? "text-emerald-600 dark:text-emerald-400" : "text-gray-400"}`}>
//                   {s}
//                 </span>
//               </button>
//               {i !== steps.length - 1 && (
//                 <div className={`flex-1 h-[2px] mx-3 transition-colors ${isDone ? "bg-emerald-400" : "bg-gray-200 dark:bg-slate-700"}`} />
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* MAIN GRID */}
//       <div className="grid grid-cols-3 gap-6">

//         {/* LEFT FORM */}
//         <div className="col-span-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-8">

//           {step === 1 && <Step1Profile data={formData} setData={setFormData} />}
//           {step === 2 && <Step2Goals data={formData} setData={setFormData} />}
//           {step === 3 && <Step3Channels data={formData} setData={setFormData} />}
//           {step === 4 && <Step4KPIs data={formData} setData={setFormData} />}
//           {step === 5 && <Step5Stakeholders data={formData} setData={setFormData} />}

//           {/* BUTTONS */}
//           <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100 dark:border-slate-800">
//             <button onClick={handleSaveDraft}
//               className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-slate-700 text-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
//               <Save size={14} />
//               {saved ? "Saved! ✓" : "Save Draft"}
//             </button>
//             <div className="flex gap-3">
//               {step > 1 && (
//                 <button onClick={handleBack}
//                   className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-slate-700 text-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
//                   <ArrowLeft size={14} /> Back
//                 </button>
//               )}
//               {step < 5 ? (
//                 <button onClick={handleNext}
//                   className="flex items-center gap-2 px-5 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-sm transition-colors">
//                   Next: {steps[step]} <ArrowRight size={14} />
//                 </button>
//               ) : (
//                 <button onClick={handleComplete}
//                   className="flex items-center gap-2 px-5 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-sm transition-colors">
//                   <CheckCircle2 size={14} /> Complete Onboarding
//                 </button>
//               )}
//             </div>
//           </div>

//         </div>

//         {/* RIGHT SIDEBAR */}
//         <div className="space-y-6">

//           {/* CHECKLIST */}
//           <div className="rounded-2xl border p-6 border-gray-200 bg-white dark:border-slate-700/40 dark:bg-gradient-to-b dark:from-[#0f1b2e] dark:to-[#0a1424]">
//             <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-5">Onboarding Checklist</h3>
//             <div className="space-y-3">
//               {checklist.map((item, i) => {
//                 const Icon = item.icon;
//                 const isDone = i + 1 < step;
//                 const isActive = i + 1 === step;
//                 return (
//                   <div key={i} className={`flex items-start gap-3 p-3 rounded-lg border transition-all
//                     ${isDone ? "border-emerald-200 bg-emerald-50 dark:border-emerald-500/30 dark:bg-emerald-500/10"
//                       : isActive ? "border-indigo-200 bg-indigo-50 dark:border-indigo-500/40 dark:bg-indigo-500/10"
//                       : "border-gray-200 bg-gray-50 dark:border-slate-700/40 dark:bg-[#0b1526]"}`}>
//                     <div className={`w-9 h-9 flex items-center justify-center rounded-md flex-shrink-0
//                       ${isDone ? "bg-emerald-100 dark:bg-emerald-500/20" : "bg-gray-100 dark:bg-slate-800"}`}>
//                       {isDone
//                         ? <CheckCircle2 size={16} className="text-emerald-500" />
//                         : <Icon size={16} className={isActive ? "text-indigo-500" : "text-gray-400 dark:text-slate-500"} />
//                       }
//                     </div>
//                     <div>
//                       <p className={`text-sm font-medium ${isActive || isDone ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-slate-400"}`}>
//                         {item.title}
//                       </p>
//                       <p className="text-xs text-gray-500 dark:text-slate-500">{item.desc}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RECENT ONBOARDINGS */}
//           <div className="rounded-2xl border p-6 border-gray-200 bg-white dark:border-slate-700/40 dark:bg-gradient-to-b dark:from-[#0f1b2e] dark:to-[#0a1424]">
//             <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-5">Recent Onboardings</h3>
//             <div className="relative pl-6 space-y-6">
//               <div className="absolute left-2 top-1 bottom-1 w-[2px] bg-gray-300 dark:bg-slate-700"></div>
//               {recentOnboardings.map((item, i) => (
//                 <div key={i} className="relative">
//                   <span className={`absolute -left-[10px] top-1 w-3 h-3 ${item.color} rounded-full`}></span>
//                   <p className="text-xs text-gray-500 dark:text-slate-500">{item.time}</p>
//                   <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</p>
//                   <p className="text-xs text-gray-500 dark:text-slate-400">{item.status}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// // ─── STEP 1: Yeh 3 imports add karo ──────────────────────────────────────────
// import { useState, useRef } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import axios from "axios";                    // ← NEW: HTTP calls ke liye
// import { toast } from "sonner";               // ← NEW: Notifications ke liye
// import {
//   Building2, Target, Share2, BarChart3, Users,
//   ArrowLeft, ArrowRight, Save, CheckCircle2, Loader2, // ← Loader2 add kiya
// } from "lucide-react";

// // ─── STEP 2: API ka base URL ──────────────────────────────────────────────────
// const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// // ─── Constants (same as before) ───────────────────────────────────────────────
// const steps = ["Profile", "Goals", "Channels", "KPIs", "Stakeholders"];
// const stepIcons = [Building2, Target, Share2, BarChart3, Users];

// const checklist = [
//   { icon: Building2, title: "Profile Creation",   desc: "Basic company setup and industry classification" },
//   { icon: Target,    title: "Goal Mapping",        desc: "Define primary and secondary business goals" },
//   { icon: Share2,    title: "Channel Setup",       desc: "Connect advertising and CRM platforms" },
//   { icon: BarChart3, title: "KPI Definition",      desc: "Set CPL, CAC, ROAS, LTV targets" },
//   { icon: Users,     title: "Stakeholder Mapping", desc: "Add team members and reporting access" },
// ];

// const recentOnboardings = [
//   { color: "bg-indigo-500", time: "2 days ago",  name: "FinanceHub",   status: "Fully onboarded — 6 campaigns live" },
//   { color: "bg-emerald-500",time: "1 week ago",  name: "LogisticsPro", status: "Channel setup in progress" },
//   { color: "bg-amber-500",  time: "2 weeks ago", name: "AutoBridge",   status: "KPI targets being defined" },
// ];

// // ─── Step Components (bilkul same, kuch nahi badla) ───────────────────────────

// function Step1Profile({ data, setData }: any) {

//     const searchParams = useSearchParams();
//   const editId = searchParams.get("edit");

//   return (
//     <div>
//       <h2 className="font-semibold text-lg mb-6">Step 1: Client Profile Creation</h2>
//       <div className="grid grid-cols-2 gap-6">
//         <div>
//           <label className="text-sm text-gray-500 dark:text-slate-400">Company Name *</label>
//           <input value={data.companyName || ""} onChange={e => setData({ ...data, companyName: e.target.value })}
//             placeholder="e.g. TechStart Solutions"
//             className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
//         </div>
//         <div>
//           <label className="text-sm text-gray-500 dark:text-slate-400">Industry *</label>
//           <select value={data.industry || ""} onChange={e => setData({ ...data, industry: e.target.value })}
//             className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white">
//             <option value="">Select Industry</option>
//             <option>Education</option><option>Healthcare</option><option>Finance</option>
//             <option>E-Commerce</option><option>Real Estate</option><option>Technology</option>
//             <option>Sports</option><option>Health & Fitness</option><option>Commercial</option>
//           </select>
//         </div>
//         <div>
//           <label className="text-sm text-gray-500 dark:text-slate-400">Revenue Model</label>
//           <select value={data.revenueModel || "B2C"} onChange={e => setData({ ...data, revenueModel: e.target.value })}
//             className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white">
//             <option>B2C</option><option>B2B</option><option>B2B2C</option><option>SaaS</option>
//           </select>
//         </div>
//         <div>
//           <label className="text-sm text-gray-500 dark:text-slate-400">Primary Market</label>
//           <input value={data.market || ""} onChange={e => setData({ ...data, market: e.target.value })}
//             placeholder="e.g. Pan-India, Mumbai"
//             className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
//         </div>
//       </div>
//       <div className="mt-6">
//         <label className="text-sm text-gray-500 dark:text-slate-400">Business Description</label>
//         <textarea value={data.description || ""} onChange={e => setData({ ...data, description: e.target.value })}
//           rows={3} placeholder="Briefly describe the client's business..."
//           className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
//       </div>
//       <div className="grid grid-cols-2 gap-6 mt-6">
//         <div>
//           <label className="text-sm text-gray-500 dark:text-slate-400">Target Audience</label>
//           <input value={data.targetAudience || ""} onChange={e => setData({ ...data, targetAudience: e.target.value })}
//             placeholder="e.g. Working professionals 25–40"
//             className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
//         </div>
//         <div>
//           <label className="text-sm text-gray-500 dark:text-slate-400">Monthly Ad Budget</label>
//           <input value={data.budget || ""} onChange={e => setData({ ...data, budget: e.target.value })}
//             placeholder="₹ 0"
//             className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
//         </div>
//       </div>
//     </div>
//   );
// }

// function Step2Goals({ data, setData }: any) {
//   const goals = ["Brand Awareness", "Lead Generation", "Sales Conversion", "Retention", "App Installs", "Website Traffic"];
//   const toggle = (g: string) => {
//     const current = data.primaryGoals || [];
//     setData({ ...data, primaryGoals: current.includes(g) ? current.filter((x: string) => x !== g) : [...current, g] });
//   };
//   return (
//     <div>
//       <h2 className="font-semibold text-lg mb-6">Step 2: Goal Mapping</h2>
//       <label className="text-sm text-gray-500 dark:text-slate-400 mb-3 block">Primary Goals (select all that apply)</label>
//       <div className="grid grid-cols-3 gap-3">
//         {goals.map(g => {
//           const active = (data.primaryGoals || []).includes(g);
//           return (
//             <button key={g} onClick={() => toggle(g)} type="button"
//               className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all
//                 ${active ? "bg-indigo-600 border-indigo-600 text-white" : "border-gray-300 dark:border-slate-700 text-gray-600 dark:text-slate-400 hover:border-indigo-400"}`}>
//               {g}
//             </button>
//           );
//         })}
//       </div>
//       <div className="mt-6">
//         <label className="text-sm text-gray-500 dark:text-slate-400">Growth Target (%)</label>
//         <input value={data.growthTarget || ""} onChange={e => setData({ ...data, growthTarget: e.target.value })}
//           placeholder="e.g. 30% growth in 6 months"
//           className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
//       </div>
//       <div className="mt-6">
//         <label className="text-sm text-gray-500 dark:text-slate-400">Timeline</label>
//         <select value={data.timeline || ""} onChange={e => setData({ ...data, timeline: e.target.value })}
//           className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white">
//           <option value="">Select Timeline</option>
//           <option>3 Months</option><option>6 Months</option><option>1 Year</option><option>2 Years</option>
//         </select>
//       </div>
//       <div className="mt-6">
//         <label className="text-sm text-gray-500 dark:text-slate-400">Notes</label>
//         <textarea value={data.goalNotes || ""} onChange={e => setData({ ...data, goalNotes: e.target.value })}
//           rows={3} placeholder="Any additional context about client goals..."
//           className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
//       </div>
//     </div>
//   );
// }

// function Step3Channels({ data, setData }: any) {
//   const channels = ["Google Ads", "Meta Ads", "LinkedIn Ads", "YouTube", "SEO", "Email", "WhatsApp", "Programmatic"];
//   const toggle = (c: string) => {
//     const current = data.channels || [];
//     setData({ ...data, channels: current.includes(c) ? current.filter((x: string) => x !== c) : [...current, c] });
//   };
//   return (
//     <div>
//       <h2 className="font-semibold text-lg mb-6">Step 3: Channel Setup</h2>
//       <label className="text-sm text-gray-500 dark:text-slate-400 mb-3 block">Select Active Channels</label>
//       <div className="grid grid-cols-4 gap-3">
//         {channels.map(c => {
//           const active = (data.channels || []).includes(c);
//           return (
//             <button key={c} onClick={() => toggle(c)} type="button"
//               className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-all
//                 ${active ? "bg-indigo-600 border-indigo-600 text-white" : "border-gray-300 dark:border-slate-700 text-gray-600 dark:text-slate-400 hover:border-indigo-400"}`}>
//               {c}
//             </button>
//           );
//         })}
//       </div>
//       <div className="grid grid-cols-2 gap-6 mt-6">
//         <div>
//           <label className="text-sm text-gray-500 dark:text-slate-400">CRM Platform</label>
//           <select value={data.crm || ""} onChange={e => setData({ ...data, crm: e.target.value })}
//             className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white">
//             <option value="">Select CRM</option>
//             <option>HubSpot</option><option>Salesforce</option><option>Zoho CRM</option>
//             <option>LeadSquared</option><option>None</option>
//           </select>
//         </div>
//         <div>
//           <label className="text-sm text-gray-500 dark:text-slate-400">Analytics Tool</label>
//           <select value={data.analytics || ""} onChange={e => setData({ ...data, analytics: e.target.value })}
//             className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white">
//             <option value="">Select Tool</option>
//             <option>Google Analytics 4</option><option>Mixpanel</option>
//             <option>Amplitude</option><option>Clevertap</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Step4KPIs({ data, setData }: any) {
//   return (
//     <div>
//       <h2 className="font-semibold text-lg mb-6">Step 4: KPI Definition</h2>
//       <div className="grid grid-cols-2 gap-6">
//         {[
//           { label: "Target CPL (₹)",      key: "cpl",            placeholder: "e.g. ₹ 500" },
//           { label: "Target CAC (₹)",      key: "cac",            placeholder: "e.g. ₹ 2000" },
//           { label: "Target ROAS",         key: "roas",           placeholder: "e.g. 4x" },
//           { label: "Target LTV (₹)",      key: "ltv",            placeholder: "e.g. ₹ 15,000" },
//           { label: "Conversion Rate (%)", key: "conversionRate", placeholder: "e.g. 3.5%" },
//           { label: "Monthly Lead Target", key: "leadTarget",     placeholder: "e.g. 500 leads" },
//         ].map(({ label, key, placeholder }) => (
//           <div key={key}>
//             <label className="text-sm text-gray-500 dark:text-slate-400">{label}</label>
//             <input value={data[key] || ""} onChange={e => setData({ ...data, [key]: e.target.value })}
//               placeholder={placeholder}
//               className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
//           </div>
//         ))}
//       </div>
//       <div className="mt-6">
//         <label className="text-sm text-gray-500 dark:text-slate-400">Reporting Frequency</label>
//         <select value={data.reportingFreq || ""} onChange={e => setData({ ...data, reportingFreq: e.target.value })}
//           className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white">
//           <option value="">Select Frequency</option>
//           <option>Daily</option><option>Weekly</option><option>Bi-Weekly</option><option>Monthly</option>
//         </select>
//       </div>
//     </div>
//   );
// }

// function Step5Stakeholders({ data, setData }: any) {
//   const stakeholders = data.stakeholders || [{ name: "", email: "", role: "" }];
//   const add    = () => setData({ ...data, stakeholders: [...stakeholders, { name: "", email: "", role: "" }] });
//   const update = (i: number, field: string, value: string) => {
//     const updated = [...stakeholders];
//     updated[i] = { ...updated[i], [field]: value };
//     setData({ ...data, stakeholders: updated });
//   };
//   const remove = (i: number) =>
//     setData({ ...data, stakeholders: stakeholders.filter((_: any, idx: number) => idx !== i) });

//   return (
//     <div>
//       <h2 className="font-semibold text-lg mb-6">Step 5: Stakeholder Mapping</h2>
//       <div className="space-y-4">
//         {stakeholders.map((s: any, i: number) => (
//           <div key={i} className="grid grid-cols-3 gap-4 items-end">
//             <div>
//               <label className="text-sm text-gray-500 dark:text-slate-400">Name</label>
//               <input value={s.name} onChange={e => update(i, "name", e.target.value)}
//                 placeholder="e.g. Rahul Sharma"
//                 className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
//             </div>
//             <div>
//               <label className="text-sm text-gray-500 dark:text-slate-400">Email</label>
//               <input value={s.email} onChange={e => update(i, "email", e.target.value)}
//                 placeholder="rahul@company.com"
//                 className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white" />
//             </div>
//             <div className="flex gap-2">
//               <div className="flex-1">
//                 <label className="text-sm text-gray-500 dark:text-slate-400">Role</label>
//                 <select value={s.role} onChange={e => update(i, "role", e.target.value)}
//                   className="w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white">
//                   <option value="">Select Role</option>
//                   <option>Decision Maker</option><option>Marketing Head</option>
//                   <option>Finance Contact</option><option>Reporting Viewer</option>
//                 </select>
//               </div>
//               {i > 0 && (
//                 <button onClick={() => remove(i)}
//                   className="mt-6 px-3 py-2 rounded-md border border-red-300 dark:border-red-800 text-red-500 text-sm hover:bg-red-50 dark:hover:bg-red-900/20">
//                   ✕
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//       <button onClick={add} type="button"
//         className="mt-4 text-sm text-indigo-500 hover:text-indigo-600 flex items-center gap-1">
//         + Add Another Stakeholder
//       </button>
//       <div className="mt-6 p-4 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30">
//         <p className="text-sm font-medium text-indigo-700 dark:text-indigo-400">Ready to Submit!</p>
//         <p className="text-xs text-indigo-500 dark:text-indigo-300 mt-1">
//           Review all steps and click "Complete Onboarding" to finish setup.
//         </p>
//       </div>
//     </div>
//   );
// }

// // ─── Main Wizard ───────────────────────────────────────────────────────────────

// export default function ClientOnboardingWizard() {
//   const router = useRouter();

//   const [step, setStep]           = useState(1);
//   const [completed, setCompleted] = useState(false);
//   const [formData, setFormData]   = useState<Record<string, any>>({});

//   // ─── STEP 3: Yeh 3 state add karo ─────────────────────────────────────────
//   const [clientId, setClientId]   = useState<string | null>(null);  // Backend se milega
//   const [isLoading, setIsLoading] = useState(false);                 // Button spinner
//   const [isSaving, setIsSaving]   = useState(false);                 // Draft spinner
//   const hasStarted                = useRef(false);                   // Dobara start na ho

//   // ─── Onboarding start karo (pehli baar "Next" dabane pe) ──────────────────
// const clientIdRef = useRef<string | null>(null);  // ← ADD

// // ensureStarted fix karo
// const ensureStarted = async (): Promise<string> => {
//   if (clientIdRef.current) return clientIdRef.current;
//   const { data } = await axios.post(`${API}/clients/start`);
//   clientIdRef.current = data.clientId;  // ← Pehle ref update karo
//   setClientId(data.clientId);
//   return data.clientId;
// };

//   // ─── Har step ka payload banana ───────────────────────────────────────────
//   const getPayload = (currentStep: number) => {
//     switch (currentStep) {
//       case 1: return {
//         companyName:    formData.companyName    || "",
//         industry:       formData.industry       || "",
//         revenueModel:   formData.revenueModel   || "B2C",
//         market:         formData.market         || "",
//         description:    formData.description    || "",
//         targetAudience: formData.targetAudience || "",
//         budget:         formData.budget         || "",
//       };
//       case 2: return {
//         primaryGoals: formData.primaryGoals || [],
//         growthTarget: formData.growthTarget  || "",
//         timeline:     formData.timeline      || "",
//         goalNotes:    formData.goalNotes     || "",
//       };
//       case 3: return {
//         channels:  formData.channels  || [],
//         crm:       formData.crm       || "",
//         analytics: formData.analytics || "",
//       };
//       case 4: return {
//         cpl:            formData.cpl            || "",
//         cac:            formData.cac            || "",
//         roas:           formData.roas           || "",
//         ltv:            formData.ltv            || "",
//         conversionRate: formData.conversionRate || "",
//         leadTarget:     formData.leadTarget     || "",
//         reportingFreq:  formData.reportingFreq  || "",
//       };
//       case 5: return {
//         stakeholders: formData.stakeholders || [],
//       };
//       default: return {};
//     }
//   };

//   // ─── Next button: API call karo, phir next step pe jao ────────────────────
//   const handleNext = async () => {
//     setIsLoading(true);
//     try {
//       // Pehli baar start karo
//       const id = await ensureStarted();

//       // Current step ka data save karo
//       await axios.put(`${API}/clients/${id}/step/${step}`, getPayload(step));

//       if (step === 5) {
//         setCompleted(true);    // Last step — success screen dikhao
//       } else {
//         setStep(s => s + 1);   // Agle step pe jao
//       }
//     } catch (err: any) {
//       // Backend se error aaya toh toast dikhao
//       const msg = err?.response?.data?.message || err.message || "Kuch galat ho gaya";
//       toast.error(msg);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleBack = () => {
//     if (step > 1) setStep(s => s - 1);
//   };

//   // ─── Draft save karo ──────────────────────────────────────────────────────
//   const handleSaveDraft = async () => {
//     setIsSaving(true);
//     try {
//       const id = await ensureStarted();
//       await axios.put(`${API}/clients/${id}/draft`, {
//         ...formData,
//         currentStep: step,
//       });
//       toast.success("Draft save ho gaya ✓");
//     } catch (err: any) {
//       toast.error("Draft save nahi hua");
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   // ─── Success Screen ────────────────────────────────────────────────────────
//   if (completed) {
//     return (
//       <div className="min-h-screen bg-gray-50 dark:bg-[#020817] flex items-center justify-center p-8">
//         <div className="text-center">
//           <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
//             <CheckCircle2 size={40} className="text-emerald-500" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//             Client Onboarded Successfully!
//           </h2>
//           <p className="text-gray-500 dark:text-slate-400 mb-2">
//             {formData.companyName || "New Client"} has been added to your dashboard.
//           </p>
//           {clientId && (
//             <p className="text-xs text-gray-400 dark:text-slate-600 mb-6 font-mono">
//               Client ID: {clientId}
//             </p>
//           )}
//           <button onClick={() => router.push("/")}
//             className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
//             Go to Dashboard
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // ─── Main UI (bilkul same as before) ──────────────────────────────────────
//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white p-8">

//       {/* HEADER */}
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h1 className="text-2xl font-bold">Client Onboarding Wizard</h1>
//           <p className="text-sm text-gray-500 dark:text-slate-400">Set up a new client in 5 structured steps</p>
//         </div>
//         <button onClick={() => router.back()}
//           className="flex items-center gap-2 text-sm text-indigo-500 hover:text-indigo-600 transition-colors">
//           <ArrowLeft size={16} /> Back to Clients
//         </button>
//       </div>

//       {/* STEP PROGRESS */}
//       <div className="flex items-center mb-10">
//         {steps.map((s, i) => {
//           const Icon = stepIcons[i];
//           const isActive = i + 1 === step;
//           const isDone   = i + 1 < step;
//           return (
//             <div key={i} className="flex items-center flex-1">
//               <button onClick={() => isDone && setStep(i + 1)} className="flex items-center gap-2 group">
//                 <div className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-all
//                   ${isDone ? "bg-emerald-500 text-white" : isActive ? "bg-indigo-600 text-white ring-4 ring-indigo-100 dark:ring-indigo-900" : "bg-gray-200 dark:bg-slate-700 text-gray-500"}`}>
//                   {isDone ? <CheckCircle2 size={16} /> : <Icon size={15} />}
//                 </div>
//                 <span className={`text-xs font-medium hidden sm:block transition-colors
//                   ${isActive ? "text-indigo-600 dark:text-indigo-400" : isDone ? "text-emerald-600 dark:text-emerald-400" : "text-gray-400"}`}>
//                   {s}
//                 </span>
//               </button>
//               {i !== steps.length - 1 && (
//                 <div className={`flex-1 h-[2px] mx-3 transition-colors ${isDone ? "bg-emerald-400" : "bg-gray-200 dark:bg-slate-700"}`} />
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* MAIN GRID */}
//       <div className="grid grid-cols-3 gap-6">

//         {/* LEFT FORM */}
//         <div className="col-span-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-8">

//           {step === 1 && <Step1Profile      data={formData} setData={setFormData} />}
//           {step === 2 && <Step2Goals        data={formData} setData={setFormData} />}
//           {step === 3 && <Step3Channels     data={formData} setData={setFormData} />}
//           {step === 4 && <Step4KPIs         data={formData} setData={setFormData} />}
//           {step === 5 && <Step5Stakeholders data={formData} setData={setFormData} />}

//           {/* BUTTONS */}
//           <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100 dark:border-slate-800">

//             {/* Save Draft */}
//             <button
//               onClick={handleSaveDraft}
//               disabled={isSaving}
//               className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-slate-700 text-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
//             >
//               {isSaving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
//               {isSaving ? "Saving..." : "Save Draft"}
//             </button>

//             <div className="flex gap-3">
//               {/* Back */}
//               {step > 1 && (
//                 <button
//                   onClick={handleBack}
//                   disabled={isLoading}
//                   className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-slate-700 text-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
//                 >
//                   <ArrowLeft size={14} /> Back
//                 </button>
//               )}

//               {/* Next / Complete */}
//               <button
//                 onClick={handleNext}
//                 disabled={isLoading}
//                 className={`flex items-center gap-2 px-5 py-2 rounded-md text-white text-sm transition-colors disabled:opacity-60
//                   ${step < 5 ? "bg-indigo-600 hover:bg-indigo-700" : "bg-emerald-600 hover:bg-emerald-700"}`}
//               >
//                 {isLoading ? (
//                   <Loader2 size={14} className="animate-spin" />
//                 ) : step < 5 ? (
//                   <><span>Next: {steps[step]}</span><ArrowRight size={14} /></>
//                 ) : (
//                   <><CheckCircle2 size={14} /><span>Complete Onboarding</span></>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDEBAR — bilkul same */}
//         <div className="space-y-6">
//           <div className="rounded-2xl border p-6 border-gray-200 bg-white dark:border-slate-700/40 dark:bg-gradient-to-b dark:from-[#0f1b2e] dark:to-[#0a1424]">
//             <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-5">Onboarding Checklist</h3>
//             <div className="space-y-3">
//               {checklist.map((item, i) => {
//                 const Icon     = item.icon;
//                 const isDone   = i + 1 < step;
//                 const isActive = i + 1 === step;
//                 return (
//                   <div key={i} className={`flex items-start gap-3 p-3 rounded-lg border transition-all
//                     ${isDone   ? "border-emerald-200 bg-emerald-50 dark:border-emerald-500/30 dark:bg-emerald-500/10"
//                     : isActive ? "border-indigo-200 bg-indigo-50 dark:border-indigo-500/40 dark:bg-indigo-500/10"
//                     :            "border-gray-200 bg-gray-50 dark:border-slate-700/40 dark:bg-[#0b1526]"}`}>
//                     <div className={`w-9 h-9 flex items-center justify-center rounded-md flex-shrink-0
//                       ${isDone ? "bg-emerald-100 dark:bg-emerald-500/20" : "bg-gray-100 dark:bg-slate-800"}`}>
//                       {isDone
//                         ? <CheckCircle2 size={16} className="text-emerald-500" />
//                         : <Icon size={16} className={isActive ? "text-indigo-500" : "text-gray-400 dark:text-slate-500"} />
//                       }
//                     </div>
//                     <div>
//                       <p className={`text-sm font-medium ${isActive || isDone ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-slate-400"}`}>
//                         {item.title}
//                       </p>
//                       <p className="text-xs text-gray-500 dark:text-slate-500">{item.desc}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="rounded-2xl border p-6 border-gray-200 bg-white dark:border-slate-700/40 dark:bg-gradient-to-b dark:from-[#0f1b2e] dark:to-[#0a1424]">
//             <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-5">Recent Onboardings</h3>
//             <div className="relative pl-6 space-y-6">
//               <div className="absolute left-2 top-1 bottom-1 w-[2px] bg-gray-300 dark:bg-slate-700"></div>
//               {recentOnboardings.map((item, i) => (
//                 <div key={i} className="relative">
//                   <span className={`absolute -left-[10px] top-1 w-3 h-3 ${item.color} rounded-full`}></span>
//                   <p className="text-xs text-gray-500 dark:text-slate-500">{item.time}</p>
//                   <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</p>
//                   <p className="text-xs text-gray-500 dark:text-slate-400">{item.status}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { Suspense, useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import {
  Building2, Target, Share2, BarChart3, Users,
  ArrowLeft, ArrowRight, Save, CheckCircle2, Loader2,
} from "lucide-react";
import { usePost } from "@/hooks/usePost";
import { usePut } from "@/hooks/usePut";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const steps     = ["Profile", "Goals", "Channels", "KPIs", "Stakeholders"];
const stepIcons = [Building2, Target, Share2, BarChart3, Users];

const checklist = [
  { icon: Building2, title: "Profile Creation",   desc: "Basic company setup and industry classification" },
  { icon: Target,    title: "Goal Mapping",        desc: "Define primary and secondary business goals" },
  { icon: Share2,    title: "Channel Setup",       desc: "Connect advertising and CRM platforms" },
  { icon: BarChart3, title: "KPI Definition",      desc: "Set CPL, CAC, ROAS, LTV targets" },
  { icon: Users,     title: "Stakeholder Mapping", desc: "Add team members and reporting access" },
];

const recentOnboardings = [
  { color: "bg-indigo-500", time: "2 days ago",  name: "FinanceHub",   status: "Fully onboarded — 6 campaigns live" },
  { color: "bg-emerald-500",time: "1 week ago",  name: "LogisticsPro", status: "Channel setup in progress" },
  { color: "bg-amber-500",  time: "2 weeks ago", name: "AutoBridge",   status: "KPI targets being defined" },
];

const inp = "w-full mt-1 px-3 py-2 rounded-md border bg-gray-50 dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white";

// ═══════════════════════════════════════════════════════════════════════════════
// STEP COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

interface StepProps {
  data: Record<string, any>;
  set: (key: string, value: any) => void;
}

function Step1Profile({ data, set }: StepProps) {
  return (
    <div>
      <h2 className="font-semibold text-lg mb-6">Step 1: Client Profile Creation</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-gray-500 dark:text-slate-400">Company Name *</label>
          <input value={data.companyName || ""} onChange={e => set("companyName", e.target.value)} placeholder="e.g. TechStart Solutions" className={inp} />
        </div>
        <div>
          <label className="text-sm text-gray-500 dark:text-slate-400">Industry *</label>
          <select value={data.industry || ""} onChange={e => set("industry", e.target.value)} className={inp}>
            <option value="">Select Industry</option>
            {["Education","Healthcare","Finance","E-Commerce","Real Estate","Technology","Sports","Health & Fitness","Commercial"].map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-500 dark:text-slate-400">Revenue Model</label>
          <select value={data.revenueModel || "B2C"} onChange={e => set("revenueModel", e.target.value)} className={inp}>
            {["B2C","B2B","B2B2C","SaaS"].map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-500 dark:text-slate-400">Primary Market</label>
          <input value={data.market || ""} onChange={e => set("market", e.target.value)} placeholder="e.g. Pan-India, Mumbai" className={inp} />
        </div>
      </div>
      <div className="mt-6">
        <label className="text-sm text-gray-500 dark:text-slate-400">Business Description</label>
        <textarea value={data.description || ""} onChange={e => set("description", e.target.value)} rows={3} placeholder="Briefly describe the client's business..." className={inp} />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div>
          <label className="text-sm text-gray-500 dark:text-slate-400">Target Audience</label>
          <input value={data.targetAudience || ""} onChange={e => set("targetAudience", e.target.value)} placeholder="e.g. Working professionals 25–40" className={inp} />
        </div>
        <div>
          <label className="text-sm text-gray-500 dark:text-slate-400">Monthly Ad Budget</label>
          <input value={data.budget || ""} onChange={e => set("budget", e.target.value)} placeholder="₹ 0" className={inp} />
        </div>
      </div>
    </div>
  );
}

function Step2Goals({ data, set }: StepProps) {
  const goals = ["Brand Awareness","Lead Generation","Sales Conversion","Retention","App Installs","Website Traffic"];
  const toggle = (g: string) => {
    const cur: string[] = data.primaryGoals || [];
    set("primaryGoals", cur.includes(g) ? cur.filter((x: string) => x !== g) : [...cur, g]);
  };
  return (
    <div>
      <h2 className="font-semibold text-lg mb-6">Step 2: Goal Mapping</h2>
      <label className="text-sm text-gray-500 dark:text-slate-400 mb-3 block">Primary Goals (select all that apply)</label>
      <div className="grid grid-cols-3 gap-3">
        {goals.map(g => (
          <button key={g} type="button" onClick={() => toggle(g)}
            className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all
              ${(data.primaryGoals||[]).includes(g) ? "bg-indigo-600 border-indigo-600 text-white" : "border-gray-300 dark:border-slate-700 text-gray-600 dark:text-slate-400 hover:border-indigo-400"}`}>
            {g}
          </button>
        ))}
      </div>
      <div className="mt-6">
        <label className="text-sm text-gray-500 dark:text-slate-400">Growth Target</label>
        <input value={data.growthTarget || ""} onChange={e => set("growthTarget", e.target.value)} placeholder="e.g. 30% growth in 6 months" className={inp} />
      </div>
      <div className="mt-6">
        <label className="text-sm text-gray-500 dark:text-slate-400">Timeline</label>
        <select value={data.timeline || ""} onChange={e => set("timeline", e.target.value)} className={inp}>
          <option value="">Select Timeline</option>
          {["3 Months","6 Months","1 Year","2 Years"].map(o => <option key={o}>{o}</option>)}
        </select>
      </div>
      <div className="mt-6">
        <label className="text-sm text-gray-500 dark:text-slate-400">Notes</label>
        <textarea value={data.goalNotes || ""} onChange={e => set("goalNotes", e.target.value)} rows={3} placeholder="Any additional context..." className={inp} />
      </div>
    </div>
  );
}

function Step3Channels({ data, set }: StepProps) {
  const channels = [
    "Google Ads",
    "Meta Ads",
    "LinkedIn Ads",
    "YouTube",
    "SEO",
    "Email",
    "WhatsApp",
    "Programmatic",
    "Google Analytics",
  ];

  const channelFieldMap: Record<string, Array<{ key: string; label: string; placeholder: string }>> = {
    "Google Ads": [
      { key: "customerId", label: "Customer ID", placeholder: "e.g. 123-456-7890" },
      { key: "managerId", label: "Manager ID", placeholder: "e.g. MCC ID" },
      { key: "refreshToken", label: "Refresh Token", placeholder: "Enter Google Ads refresh token" },
      { key: "loginCustomerId", label: "Login Customer ID", placeholder: "Optional login customer ID" },
    ],
    "Meta Ads": [
      { key: "adAccountId", label: "Ad Account ID", placeholder: "e.g. act_123456789" },
      { key: "pixelId", label: "Pixel ID", placeholder: "e.g. 123456789012345" },
      { key: "pageId", label: "Facebook Page ID", placeholder: "Enter Page ID" },
      { key: "accessToken", label: "Access Token", placeholder: "Enter Meta access token" },
    ],
    "LinkedIn Ads": [
      { key: "accountId", label: "Account ID", placeholder: "Enter LinkedIn account ID" },
      { key: "accessToken", label: "Access Token", placeholder: "Enter LinkedIn access token" },
    ],
    "YouTube": [
      { key: "channelId", label: "Channel ID", placeholder: "Enter YouTube channel ID" },
      { key: "apiKey", label: "API Key", placeholder: "Enter YouTube API key" },
    ],
    "SEO": [
      { key: "domain", label: "Domain", placeholder: "e.g. example.com" },
      { key: "searchConsoleProperty", label: "Search Console Property", placeholder: "Enter GSC property" },
    ],
    "Email": [
      { key: "platform", label: "Email Platform", placeholder: "e.g. Mailchimp / HubSpot" },
      { key: "apiKey", label: "API Key", placeholder: "Enter Email platform API key" },
    ],
    "WhatsApp": [
      { key: "phoneNumberId", label: "Phone Number ID", placeholder: "Enter phone number ID" },
      { key: "wabaId", label: "WABA ID", placeholder: "Enter WhatsApp Business Account ID" },
      { key: "accessToken", label: "Access Token", placeholder: "Enter WhatsApp access token" },
    ],
    "Programmatic": [
      { key: "platform", label: "DSP Platform", placeholder: "e.g. DV360 / The Trade Desk" },
      { key: "seatId", label: "Seat ID", placeholder: "Enter seat/account ID" },
      { key: "apiKey", label: "API Key", placeholder: "Enter platform API key" },
    ],
    "Google Analytics": [
  { key: "propertyId", label: "GA4 Property ID", placeholder: "e.g. 123456789" },
  { key: "measurementId", label: "Measurement ID", placeholder: "e.g. G-XXXXXXX" },
  { key: "websiteUrl", label: "Website URL", placeholder: "e.g. https://example.com" },
],
  };

  const selectedChannels: string[] = data.channels || [];
  const channelConfigs = data.channelConfigs || {};

  const toggle = (channel: string) => {
    const isSelected = selectedChannels.includes(channel);

    if (isSelected) {
      const updatedChannels = selectedChannels.filter((c) => c !== channel);
      const updatedConfigs = { ...channelConfigs };
      delete updatedConfigs[channel];

      set("channels", updatedChannels);
      set("channelConfigs", updatedConfigs);
    } else {
      const updatedChannels = [...selectedChannels, channel];
      const defaultConfig =
        channelFieldMap[channel]?.reduce((acc, field) => {
          acc[field.key] = "";
          return acc;
        }, {} as Record<string, string>) || {};

      set("channels", updatedChannels);
      set("channelConfigs", {
        ...channelConfigs,
        [channel]: defaultConfig,
      });
    }
  };

  const updateChannelField = (channel: string, key: string, value: string) => {
    set("channelConfigs", {
      ...channelConfigs,
      [channel]: {
        ...(channelConfigs[channel] || {}),
        [key]: value,
      },
    });
  };

  return (
    <div>
      <h2 className="font-semibold text-lg mb-6">Step 3: Channel Setup</h2>

      <label className="text-sm text-gray-500 dark:text-slate-400 mb-3 block">
        Select Active Channels
      </label>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {channels.map((c) => {
          const active = selectedChannels.includes(c);

          return (
            <button
              key={c}
              type="button"
              onClick={() => toggle(c)}
              className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-all
                ${
                  active
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "border-gray-300 dark:border-slate-700 text-gray-600 dark:text-slate-400 hover:border-indigo-400"
                }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Dynamic channel config forms */}
      {selectedChannels.length > 0 && (
        <div className="mt-8 space-y-6">
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
            Channel Configuration Details
          </h3>

          {selectedChannels.map((channel) => (
            <div
              key={channel}
              className="rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/40 p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {channel} Configuration
                </h4>
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300">
                  Active
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(channelFieldMap[channel] || []).map((field) => (
                  <div key={field.key}>
                    <label className="text-sm text-gray-500 dark:text-slate-400">
                      {field.label}
                    </label>
                    <input
                      value={channelConfigs[channel]?.[field.key] || ""}
                      onChange={(e) =>
                        updateChannelField(channel, field.key, e.target.value)
                      }
                      placeholder={field.placeholder}
                      className={inp}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="text-sm text-gray-500 dark:text-slate-400">CRM Platform</label>
          <select
            value={data.crm || ""}
            onChange={(e) => set("crm", e.target.value)}
            className={inp}
          >
            <option value="">Select CRM</option>
            {["HubSpot", "Salesforce", "Zoho CRM", "LeadSquared", "None"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-500 dark:text-slate-400">Analytics Tool</label>
          <select
            value={data.analytics || ""}
            onChange={(e) => set("analytics", e.target.value)}
            className={inp}
          >
            <option value="">Select Tool</option>
            {["Google Analytics 4", "Mixpanel", "Amplitude", "Clevertap"].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

function Step4KPIs({ data, set }: StepProps) {
  return (
    <div>
      <h2 className="font-semibold text-lg mb-6">Step 4: KPI Definition</h2>
      <div className="grid grid-cols-2 gap-6">
        {[
          { label: "Target CPL (₹)",      key: "cpl",            ph: "e.g. ₹ 500" },
          { label: "Target CAC (₹)",      key: "cac",            ph: "e.g. ₹ 2000" },
          { label: "Target ROAS",         key: "roas",           ph: "e.g. 4x" },
          { label: "Target LTV (₹)",      key: "ltv",            ph: "e.g. ₹ 15,000" },
          { label: "Conversion Rate (%)", key: "conversionRate", ph: "e.g. 3.5%" },
          { label: "Monthly Lead Target", key: "leadTarget",     ph: "e.g. 500 leads" },
        ].map(({ label, key, ph }) => (
          <div key={key}>
            <label className="text-sm text-gray-500 dark:text-slate-400">{label}</label>
            <input value={data[key] || ""} onChange={e => set(key, e.target.value)} placeholder={ph} className={inp} />
          </div>
        ))}
      </div>
      <div className="mt-6">
        <label className="text-sm text-gray-500 dark:text-slate-400">Reporting Frequency</label>
        <select value={data.reportingFreq || ""} onChange={e => set("reportingFreq", e.target.value)} className={inp}>
          <option value="">Select Frequency</option>
          {["Daily","Weekly","Bi-Weekly","Monthly"].map(o => <option key={o}>{o}</option>)}
        </select>
      </div>
    </div>
  );
}

function Step5Stakeholders({ data, set }: StepProps) {
  const stakeholders: Array<{ name: string; email: string; role: string; password: string }> =
    data.stakeholders || [{ name: "", email: "", role: "", password: "" }];

  const [showPw, setShowPw] = useState<Record<number, boolean>>({});

  const update = (i: number, field: string, value: string) => {
    const updated = [...stakeholders];
    updated[i] = { ...updated[i], [field]: value };
    set("stakeholders", updated);
  };

  const togglePw = (i: number) =>
    setShowPw(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <div>
      <h2 className="font-semibold text-lg mb-6">Step 5: Stakeholder Mapping</h2>
      <div className="space-y-4">
        {stakeholders.map((s, i) => (
          <div
            key={i}
            className="p-4 rounded-lg border border-gray-200 dark:border-slate-700/60 bg-gray-50/50 dark:bg-slate-900/30 space-y-3"
          >
            {/* Row 1 — Name · Email · Role · Remove (exact same layout as before) */}
            <div className="grid grid-cols-3 gap-4 items-end">
              <div>
                <label className="text-sm text-gray-500 dark:text-slate-400">Name</label>
                <input
                  value={s.name}
                  onChange={e => update(i, "name", e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className={inp}
                />
              </div>
              <div>
                <label className="text-sm text-gray-500 dark:text-slate-400">Email</label>
                <input
                  type="email"
                  value={s.email}
                  onChange={e => update(i, "email", e.target.value)}
                  placeholder="rahul@company.com"
                  className={inp}
                />
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="text-sm text-gray-500 dark:text-slate-400">Role</label>
                  <select
                    value={s.role}
                    onChange={e => update(i, "role", e.target.value)}
                    className={inp}
                  >
                    <option value="">Select Role</option>
                    {["Decision Maker", "Marketing Head", "Finance Contact", "Reporting Viewer"].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                {i > 0 && (
                  <button
                    onClick={() => set("stakeholders", stakeholders.filter((_, idx) => idx !== i))}
                    className="mt-6 px-3 py-2 rounded-md border border-red-300 dark:border-red-800 text-red-500 text-sm hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Row 2 — Password (naya) */}
            <div className="grid grid-cols-3 gap-4 items-end">
              <div className="col-span-2">
                <label className="text-sm text-gray-500 dark:text-slate-400">
                  Portal Password{" "}
                  <span className="text-xs text-gray-400 dark:text-slate-600 font-normal">
                    (optional — client portal login ke liye)
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showPw[i] ? "text" : "password"}
                    value={s.password}
                    onChange={e => update(i, "password", e.target.value)}
                    placeholder="Min. 6 characters"
                    className={`${inp} pr-9`}
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => togglePw(i)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-slate-300"
                  >
                    {showPw[i] ? (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Status indicator */}
              <div className="pb-[9px]">
                {!s.password ? (
                  <p className="text-xs text-gray-400 dark:text-slate-600">No login access</p>
                ) : s.password.length < 6 ? (
                  <p className="text-xs text-amber-500">⚠ Min. 6 characters</p>
                ) : (
                  <p className="text-xs text-emerald-500">✓ Login enabled</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() =>
          set("stakeholders", [...stakeholders, { name: "", email: "", role: "", password: "" }])
        }
        className="mt-4 text-sm text-indigo-500 hover:text-indigo-600"
      >
        + Add Another Stakeholder
      </button>

      <div className="mt-6 p-4 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30">
        <p className="text-sm font-medium text-indigo-700 dark:text-indigo-400">Ready to Submit!</p>
        <p className="text-xs text-indigo-500 dark:text-indigo-300 mt-1">
          {stakeholders.filter(s => s.password && s.password.length >= 6).length > 0
            ? `${stakeholders.filter(s => s.password && s.password.length >= 6).length} stakeholder(s) ko portal login milega.`
            : "Review all steps and click the button below to finish."}
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN WIZARD (uses useSearchParams — must be inside Suspense)
// ═══════════════════════════════════════════════════════════════════════════════
function ClientOnboardingWizard() {
  const router       = useRouter();
  const searchParams = useSearchParams();
  const editId       = searchParams.get("edit");
  const isEditMode   = !!editId;

  const [step, setStep]           = useState(1);
  const [completed, setCompleted] = useState(false);
  const [formData, setFormData]   = useState<Record<string, any>>({});
  const [isSaving, setIsSaving]   = useState(false);
  const [fetchingEdit, setFetchingEdit] = useState(isEditMode);

  const clientIdRef = useRef<string | null>(isEditMode ? editId : null);
  const [clientId, setClientId]   = useState<string | null>(isEditMode ? editId : null);

  // ─── React Query Hooks ─────────────────────────────────────────────────────
  const startMutation = usePost("/clients/start", "clients");

  const step1Mutation = usePut(`/clients/${clientId}/step/1`, "clients");
  const step2Mutation = usePut(`/clients/${clientId}/step/2`, "clients");
  const step3Mutation = usePut(`/clients/${clientId}/step/3`, "clients");
  const step4Mutation = usePut(`/clients/${clientId}/step/4`, "clients");
  const step5Mutation = usePut(`/clients/${clientId}/step/5`, "clients");
  const draftMutation = usePut(`/clients/${clientId}/draft`,  "clients");
  const editMutation  = usePut(`/clients/${editId}/edit`,     "clients");

  const stepMutations = [step1Mutation, step2Mutation, step3Mutation, step4Mutation, step5Mutation];
  const isLoading     = stepMutations[step - 1]?.isPending || editMutation.isPending || startMutation.isPending;

  // ─── Field setter ──────────────────────────────────────────────────────────
  const set = (key: string, value: any) => setFormData(prev => ({ ...prev, [key]: value }));

  // ─── Edit mode: existing data prefill ─────────────────────────────────────
  useEffect(() => {
    if (!editId) return;
    const prefill = async () => {
      try {
        const { data } = await axios.get(`${API}/clients/${editId}`);
        const c = data.client;
        setFormData({
          companyName:    c.profile?.companyName    || "",
          industry:       c.profile?.industry       || "",
          revenueModel:   c.profile?.revenueModel   || "B2C",
          market:         c.profile?.market         || "",
          description:    c.profile?.description    || "",
          targetAudience: c.profile?.targetAudience || "",
          budget:         c.profile?.budget         || "",
          primaryGoals:   c.goals?.primaryGoals     || [],
          growthTarget:   c.goals?.growthTarget     || "",
          timeline:       c.goals?.timeline         || "",
          goalNotes:      c.goals?.goalNotes        || "",
          channels:       c.channels?.channels      || [],
channelConfigs: c.channels?.channelConfigs || {},
          crm:            c.channels?.crm           || "",
          analytics:      c.channels?.analytics     || "",
          cpl:            c.kpis?.cpl               || "",
          cac:            c.kpis?.cac               || "",
          roas:           c.kpis?.roas              || "",
          ltv:            c.kpis?.ltv               || "",
          conversionRate: c.kpis?.conversionRate    || "",
          leadTarget:     c.kpis?.leadTarget        || "",
          reportingFreq:  c.kpis?.reportingFreq     || "",
          stakeholders:   c.stakeholders?.length
            ? c.stakeholders.map((s: { name?: string; email?: string; role?: string }) => ({ name: s.name || "", email: s.email || "", role: s.role || "" }))
            : [{ name: "", email: "", role: "" }],
        });
      } catch {
        toast.error("Client data load nahi hua");
      } finally {
        setFetchingEdit(false);
      }
    };
    prefill();
  }, [editId]);

  // ─── Step payload ──────────────────────────────────────────────────────────
  const getStepPayload = (s: number) => {
    switch (s) {
      case 1: return { companyName: formData.companyName || "", industry: formData.industry || "", revenueModel: formData.revenueModel || "B2C", market: formData.market || "", description: formData.description || "", targetAudience: formData.targetAudience || "", budget: formData.budget || "" };
      case 2: return { primaryGoals: formData.primaryGoals || [], growthTarget: formData.growthTarget || "", timeline: formData.timeline || "", goalNotes: formData.goalNotes || "" };
case 3:
  return {
    channels: formData.channels || [],
    channelConfigs: formData.channelConfigs || {},
    crm: formData.crm || "",
    analytics: formData.analytics || "",
  };      case 4: return { cpl: formData.cpl || "", cac: formData.cac || "", roas: formData.roas || "", ltv: formData.ltv || "", conversionRate: formData.conversionRate || "", leadTarget: formData.leadTarget || "", reportingFreq: formData.reportingFreq || "" };
case 5: return {
  stakeholders: (formData.stakeholders || []).map((s: any) => ({
    name: s.name, email: s.email, role: s.role,
    password: s.password || "",  // ← YEH FIX
  })),
};      default: return {};
    }
  };

  // ─── Full payload (edit mode) ──────────────────────────────────────────────
  const getFullPayload = () => ({
    profile:      { companyName: formData.companyName, industry: formData.industry, revenueModel: formData.revenueModel, market: formData.market, description: formData.description, targetAudience: formData.targetAudience, budget: formData.budget },
    goals:        { primaryGoals: formData.primaryGoals, growthTarget: formData.growthTarget, timeline: formData.timeline, goalNotes: formData.goalNotes },
    channels:     { channels: formData.channels, channelConfigs: formData.channelConfigs, crm: formData.crm, analytics: formData.analytics },
    kpis:         { cpl: formData.cpl, cac: formData.cac, roas: formData.roas, ltv: formData.ltv, conversionRate: formData.conversionRate, leadTarget: formData.leadTarget, reportingFreq: formData.reportingFreq },
    stakeholders: formData.stakeholders,
  });

  // ─── Next / Complete ───────────────────────────────────────────────────────
  const handleNext = async () => {
    try {
      if (isEditMode) {
        if (step < 5) { setStep(s => s + 1); return; }
        await editMutation.mutateAsync(getFullPayload());
        toast.success("Client update ho gaya! ✓");
        setCompleted(true);
      } else {
        if (!clientIdRef.current) {
          const res = await startMutation.mutateAsync({});
          clientIdRef.current = res.clientId;
          setClientId(res.clientId);
        }
        await stepMutations[step - 1].mutateAsync(getStepPayload(step));
        if (step === 5) setCompleted(true);
        else            setStep(s => s + 1);
      }
    } catch (err: unknown) {
      const axiosErr = err as { response?: { data?: { message?: string } }; message?: string };
      toast.error(axiosErr?.response?.data?.message || axiosErr?.message || "Save nahi hua");
    }
  };

  // ─── Save Draft ────────────────────────────────────────────────────────────
  const handleSaveDraft = async () => {
    setIsSaving(true);
    try {
      if (!clientIdRef.current) {
        const res = await startMutation.mutateAsync({});
        clientIdRef.current = res.clientId;
        setClientId(res.clientId);
      }
      await draftMutation.mutateAsync({ ...formData, currentStep: step });
      toast.success("Draft save ho gaya ✓");
    } catch {
      toast.error("Draft save nahi hua");
    } finally {
      setIsSaving(false);
    }
  };

  // ─── Loading (edit prefill) ────────────────────────────────────────────────
  if (fetchingEdit) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#020817] flex items-center justify-center">
        <div className="text-center">
          <Loader2 size={36} className="animate-spin text-indigo-500 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-slate-400 text-sm">Client data load ho raha hai...</p>
        </div>
      </div>
    );
  }

  // ─── Success Screen ────────────────────────────────────────────────────────
  if (completed) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#020817] flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-emerald-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {isEditMode ? "Client Updated Successfully!" : "Client Onboarded Successfully!"}
          </h2>
          <p className="text-gray-500 dark:text-slate-400 mb-2">
            {formData.companyName || "Client"} {isEditMode ? "ka data update ho gaya." : "dashboard mein add ho gaya."}
          </p>
          {(clientId || editId) && (
            <p className="text-xs text-gray-400 dark:text-slate-600 mb-6 font-mono">
              Client ID: {clientId || editId}
            </p>
          )}
          <div className="flex gap-3 justify-center">
            {isEditMode ? (
              <button onClick={() => router.push(`/clients/${editId}`)}
                className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                View Client →
              </button>
            ) : (
              <button onClick={() => router.push(`/clients/${clientId}`)}
                className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                View Client →
              </button>
            )}
            <button onClick={() => router.push("/client-portfolio")}
              className="px-6 py-2.5 bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-white rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors">
              All Clients
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Main UI ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white p-8">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">
            {isEditMode ? `Edit Client` : "Client Onboarding Wizard"}
          </h1>
          <p className="text-sm text-gray-500 dark:text-slate-400">
            {isEditMode
              ? `Editing: ${formData.companyName || "..."} — kisi bhi step mein jao`
              : "Set up a new client in 5 structured steps"}
          </p>
        </div>
        <button onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-indigo-500 hover:text-indigo-600 transition-colors">
          <ArrowLeft size={16} /> Back
        </button>
      </div>

      {/* STEP PROGRESS */}
      <div className="flex items-center mb-10">
        {steps.map((s, i) => {
          const Icon     = stepIcons[i];
          const isActive = i + 1 === step;
          const isDone   = isEditMode ? i + 1 !== step : i + 1 < step;
          return (
            <div key={i} className="flex items-center flex-1">
              <button onClick={() => setStep(i + 1)} className="flex items-center gap-2">
                <div className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-all
                  ${isDone   ? "bg-emerald-500 text-white"
                  : isActive ? "bg-indigo-600 text-white ring-4 ring-indigo-100 dark:ring-indigo-900"
                  :            "bg-gray-200 dark:bg-slate-700 text-gray-500"}`}>
                  {isDone ? <CheckCircle2 size={16} /> : <Icon size={15} />}
                </div>
                <span className={`text-xs font-medium hidden sm:block
                  ${isActive ? "text-indigo-600 dark:text-indigo-400" : isDone ? "text-emerald-600 dark:text-emerald-400" : "text-gray-400"}`}>
                  {s}
                </span>
              </button>
              {i !== steps.length - 1 && (
                <div className={`flex-1 h-[2px] mx-3 ${isEditMode || i + 1 < step ? "bg-emerald-400" : "bg-gray-200 dark:bg-slate-700"}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-6">

        {/* FORM */}
        <div className="col-span-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-8">
          {step === 1 && <Step1Profile      data={formData} set={set} />}
          {step === 2 && <Step2Goals        data={formData} set={set} />}
          {step === 3 && <Step3Channels     data={formData} set={set} />}
          {step === 4 && <Step4KPIs         data={formData} set={set} />}
          {step === 5 && <Step5Stakeholders data={formData} set={set} />}

          {/* BUTTONS */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100 dark:border-slate-800">

            {!isEditMode ? (
              <button onClick={handleSaveDraft} disabled={isSaving || draftMutation.isPending}
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-slate-700 text-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50">
                {(isSaving || draftMutation.isPending) ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
                {(isSaving || draftMutation.isPending) ? "Saving..." : "Save Draft"}
              </button>
            ) : (
              <span className="text-xs text-amber-600 dark:text-amber-400 font-medium bg-amber-50 dark:bg-amber-500/10 px-3 py-2 rounded-md border border-amber-200 dark:border-amber-500/30">
                ✏️ Edit Mode — Step 5 pe &ldquo;Save Changes&rdquo; dabao
              </span>
            )}

            <div className="flex gap-3">
              {step > 1 && (
                <button onClick={() => setStep(s => s - 1)} disabled={isLoading}
                  className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 dark:border-slate-700 text-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50">
                  <ArrowLeft size={14} /> Back
                </button>
              )}
              <button onClick={handleNext} disabled={isLoading}
                className={`flex items-center gap-2 px-5 py-2 rounded-md text-white text-sm transition-colors disabled:opacity-60
                  ${step < 5 ? "bg-indigo-600 hover:bg-indigo-700" : "bg-emerald-600 hover:bg-emerald-700"}`}>
                {isLoading ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : step < 5 ? (
                  <><span>Next: {steps[step]}</span><ArrowRight size={14} /></>
                ) : (
                  <><CheckCircle2 size={14} /><span>{isEditMode ? "Save Changes" : "Complete Onboarding"}</span></>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
          <div className="rounded-2xl border p-6 border-gray-200 bg-white dark:border-slate-700/40 dark:bg-gradient-to-b dark:from-[#0f1b2e] dark:to-[#0a1424]">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-5">
              {isEditMode ? "Edit Checklist" : "Onboarding Checklist"}
            </h3>
            <div className="space-y-3">
              {checklist.map((item, i) => {
                const Icon     = item.icon;
                const isDone   = i + 1 < step;
                const isActive = i + 1 === step;
                return (
                  <button key={i} onClick={() => setStep(i + 1)} className="w-full text-left">
                    <div className={`flex items-start gap-3 p-3 rounded-lg border transition-all
                      ${isDone   ? "border-emerald-200 bg-emerald-50 dark:border-emerald-500/30 dark:bg-emerald-500/10"
                      : isActive ? "border-indigo-200 bg-indigo-50 dark:border-indigo-500/40 dark:bg-indigo-500/10"
                      :            "border-gray-200 bg-gray-50 dark:border-slate-700/40 dark:bg-[#0b1526]"}`}>
                      <div className={`w-9 h-9 flex items-center justify-center rounded-md flex-shrink-0
                        ${isDone ? "bg-emerald-100 dark:bg-emerald-500/20" : "bg-gray-100 dark:bg-slate-800"}`}>
                        {isDone ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Icon size={16} className={isActive ? "text-indigo-500" : "text-gray-400 dark:text-slate-500"} />}
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${isActive || isDone ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-slate-400"}`}>{item.title}</p>
                        <p className="text-xs text-gray-500 dark:text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {!isEditMode && (
            <div className="rounded-2xl border p-6 border-gray-200 bg-white dark:border-slate-700/40 dark:bg-gradient-to-b dark:from-[#0f1b2e] dark:to-[#0a1424]">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-5">Recent Onboardings</h3>
              <div className="relative pl-6 space-y-6">
                <div className="absolute left-2 top-1 bottom-1 w-[2px] bg-gray-300 dark:bg-slate-700"></div>
                {recentOnboardings.map((item, i) => (
                  <div key={i} className="relative">
                    <span className={`absolute -left-[10px] top-1 w-3 h-3 ${item.color} rounded-full`}></span>
                    <p className="text-xs text-gray-500 dark:text-slate-500">{item.time}</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</p>
                    <p className="text-xs text-gray-500 dark:text-slate-400">{item.status}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {isEditMode && (
            <div className="rounded-2xl border p-5 border-amber-200 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/10">
              <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-2">✏️ Edit Mode Active</p>
              <p className="text-xs text-amber-600 dark:text-amber-500 leading-relaxed">
                Sari values pehle se fill hain. Kisi bhi step pe click karke directly ja sakte ho. Sab changes Step 5 pe &ldquo;Save Changes&rdquo; dabane pe ek saath save honge.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// DEFAULT EXPORT — Suspense boundary (Next.js 16 requirement)
// ═══════════════════════════════════════════════════════════════════════════════
export default function ClientOnboardingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 dark:bg-[#020817] flex items-center justify-center">
          <div className="text-center">
            <Loader2 size={36} className="animate-spin text-indigo-500 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-slate-400 text-sm">Loading...</p>
          </div>
        </div>
      }
    >
      <ClientOnboardingWizard />
    </Suspense>
  );
}