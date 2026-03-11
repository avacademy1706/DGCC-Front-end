"use client";

import { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  Target,
  BarChart3,
  Users,
  Bell,
} from "lucide-react";

import {
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AnalyticsCommandCentre() {

const [tab,setTab] = useState("overview");

const revenueData=[
{m:"Sep",r:14,s:9},
{m:"Oct",r:16,s:10},
{m:"Nov",r:18,s:12},
{m:"Dec",r:20,s:13},
{m:"Jan",r:21,s:14},
{m:"Feb",r:23,s:16},
{m:"Mar",r:24,s:18},
];

const radarData=[
{metric:"ROAS",re360:80,edutech:70,health:40},
{metric:"CPL Eff",re360:75,edutech:65,health:45},
{metric:"Lead Vol",re360:78,edutech:72,health:38},
{metric:"Conv Rate",re360:70,edutech:60,health:42},
{metric:"Budget Util",re360:65,edutech:66,health:48},
];

const growthData=[
{q:"Q1 25",edutech:280,re360:320,finance:180},
{q:"Q2 25",edutech:340,re360:410,finance:240},
{q:"Q3 25",edutech:390,re360:520,finance:310},
{q:"Q4 25",edutech:440,re360:580,finance:390},
{q:"Q1 26",edutech:480,re360:620,finance:440},
];

const StatCard = ({icon:Icon,value,label}) =>(
<div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
<Icon className="mb-4 text-indigo-500"/>
<p className="text-2xl font-bold">{value}</p>
<p className="text-sm text-gray-500">{label}</p>
</div>
);

const KPIBar = ({label,val})=>(
<div>
<div className="flex justify-between text-xs mb-1">
<span>{label}</span>
<span>{val}</span>
</div>

<div className="h-2 bg-gray-200 dark:bg-slate-800 rounded">
<div className="h-2 bg-indigo-500 rounded w-3/4"/>
</div>

</div>
);

/* -------------------- OVERVIEW TAB -------------------- */

const OverviewUI = () => (

<>
<div className="grid grid-cols-4 gap-6">

<StatCard icon={DollarSign} value="₹18.4L" label="Total Ad Spend"/>
<StatCard icon={TrendingUp} value="₹24.6L" label="Revenue Generated"/>
<StatCard icon={Target} value="3.6x" label="Overall ROAS"/>
<StatCard icon={BarChart3} value="₹186" label="Blended CPL"/>

</div>

<div className="grid grid-cols-2 gap-6 mt-6">

<div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
<h3 className="font-semibold mb-4">Revenue vs Spend Trend</h3>

<ResponsiveContainer width="100%" height={250}>
<BarChart data={revenueData}>
<XAxis dataKey="m"/>
<YAxis/>
<Tooltip/>
<Bar dataKey="r" fill="#34d399"/>
<Bar dataKey="s" fill="#6366f1"/>
</BarChart>
</ResponsiveContainer>

</div>

<div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
<h3 className="font-semibold mb-4">Client Performance Comparison</h3>

<ResponsiveContainer width="100%" height={250}>
<RadarChart data={radarData}>
<PolarGrid/>
<PolarAngleAxis dataKey="metric"/>
<PolarRadiusAxis/>
<Radar dataKey="re360" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3}/>
<Radar dataKey="edutech" stroke="#10b981" fill="#10b981" fillOpacity={0.3}/>
<Radar dataKey="health" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3}/>
</RadarChart>
</ResponsiveContainer>

</div>

</div>

<div className="grid grid-cols-3 gap-6 mt-6">

<div className="col-span-2 p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">

<h3 className="font-semibold mb-4">ROAS by Client & Channel</h3>

<table className="w-full text-sm">

<thead className="text-gray-500">
<tr>
<th className="text-left">Client</th>
<th>Meta</th>
<th>Google</th>
<th>Spend</th>
<th>Revenue</th>
<th>Blended</th>
</tr>
</thead>

<tbody>

<tr className="border-t dark:border-slate-800">
<td>RealEstate360</td>
<td className="text-green-500">6.2x</td>
<td className="text-green-500">5.4x</td>
<td>₹3.2L</td>
<td>₹18.4L</td>
<td className="text-green-500">5.8x</td>
</tr>

<tr className="border-t dark:border-slate-800">
<td>EduTech Pro</td>
<td>3.8x</td>
<td>4.6x</td>
<td>₹2.4L</td>
<td>₹10.1L</td>
<td>4.2x</td>
</tr>

</tbody>

</table>

</div>

<div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-4">

<h3 className="font-semibold">KPI Health</h3>

<KPIBar label="CPL vs Target" val="₹186 / ₹180"/>
<KPIBar label="ROAS vs Target" val="3.6x / 4x"/>
<KPIBar label="Conv Rate" val="11.9% / 12%"/>

</div>

</div>

</>
);

/* -------------------- GROWTH TAB -------------------- */

const GrowthUI = () => (

<>
<div className="grid grid-cols-3 gap-6">

<StatCard icon={Users} value="8" label="Total Clients"/>
<StatCard icon={BarChart3} value="38" label="Active Campaigns"/>
<StatCard icon={Bell} value="3" label="System Alerts"/>

</div>

<div className="mt-6 p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">

<h3 className="font-semibold mb-4">Cross-Client Growth Trajectory</h3>

<ResponsiveContainer width="100%" height={300}>

<LineChart data={growthData}>

<XAxis dataKey="q"/>
<YAxis/>
<Tooltip/>

<Line dataKey="edutech" stroke="#6366f1"/>
<Line dataKey="re360" stroke="#10b981"/>
<Line dataKey="finance" stroke="#f59e0b"/>

</LineChart>

</ResponsiveContainer>

</div>

</>
);

/* -------------------- CEO TAB -------------------- */

const CEOUI = () => (

<div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-6">

<h3 className="font-semibold">Marketing Funnel — Spend to Revenue</h3>

{[
["Ad Spend","₹18.4L"],
["Impressions","12.4M"],
["Clicks","840K"],
["Leads","2,847"],
["Opportunities","486"],
["Revenue","₹24.6L"],
].map((item,i)=>(
<div key={i}>

<div className="flex justify-between text-sm mb-1">
<span>{item[0]}</span>
<span>{item[1]}</span>
</div>

<div className="h-2 bg-gray-200 dark:bg-slate-800 rounded">
<div className="h-2 bg-indigo-500 rounded w-3/4"/>
</div>

</div>
))}

</div>

);

/* -------------------- MAIN RENDER -------------------- */

return(

<div className="p-8 space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">

{/* HEADER */}

<div className="flex justify-between">

<div>
<h1 className="text-2xl font-bold">Analytics Command Centre</h1>
<p className="text-sm text-gray-500">Cross-client performance intelligence</p>
</div>

<div className="flex gap-3">

<button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-sm">
Last 30 Days
</button>

<button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">
Generate Report
</button>

</div>

</div>

{/* TABS */}

<div className="flex gap-6 text-sm border-b border-gray-200 dark:border-slate-800 pb-2">

<button
onClick={()=>setTab("overview")}
className={`${tab==="overview" && "text-indigo-600 border-b-2 border-indigo-600 pb-2"}`}
>
Overview
</button>

<button
onClick={()=>setTab("growth")}
className={`${tab==="growth" && "text-indigo-600 border-b-2 border-indigo-600 pb-2"}`}
>
Growth Dashboard
</button>

<button
onClick={()=>setTab("ceo")}
className={`${tab==="ceo" && "text-indigo-600 border-b-2 border-indigo-600 pb-2"}`}
>
CEO/CXO View
</button>

</div>

{/* TAB CONTENT */}

{tab==="overview" && <OverviewUI/>}
{tab==="growth" && <GrowthUI/>}
{tab==="ceo" && <CEOUI/>}

</div>

);

}