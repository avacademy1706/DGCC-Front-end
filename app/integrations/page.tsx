"use client";

import {
  Check,
  Zap,
  RefreshCw,
  AlertTriangle,
  Smartphone,
  Search,
  BarChart3,
  Flame,
  Database,
  MessageCircle,
  Mail,
  FileSpreadsheet,
  Plus,
} from "lucide-react";

export default function IntegrationsHub() {

const integrations = [
{
name:"Meta Marketing API",
desc:"Facebook & Instagram Ads · Ad accounts, campaigns, leads",
status:"Connected",
sync:"5 min ago",
icon:Smartphone
},
{
name:"Google Ads API",
desc:"Search, Display & YouTube campaigns",
status:"Connected",
sync:"12 min ago",
icon:Search
},
{
name:"Google Analytics 4",
desc:"Website traffic, conversions, events",
status:"Connected",
sync:"1 hour ago",
icon:BarChart3
},
{
name:"HubSpot CRM",
desc:"Contact management, deal tracking",
status:"Connected",
sync:"22 min ago",
icon:Flame
},
{
name:"Zoho CRM",
desc:"Lead routing, pipeline management",
status:"Token Expired",
sync:"2 days ago",
icon:Database
},
{
name:"WhatsApp Business API",
desc:"Automated messaging, lead notifications",
status:"Connected",
sync:"2 min ago",
icon:MessageCircle
},
{
name:"Mailchimp / SendGrid",
desc:"Email campaigns, automations",
status:"Connected",
sync:"",
icon:Mail
},
{
name:"Manual CSV Upload",
desc:"Offline revenue, call data imports",
status:"Manual",
sync:"",
icon:FileSpreadsheet
}
];

const StatusBadge = ({status}) => {

if(status==="Connected")
return <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">• Connected</span>

if(status==="Token Expired")
return <span className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">⚠ Token Expired</span>

if(status==="Manual")
return <span className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-600 dark:bg-slate-800 dark:text-gray-300">Manual</span>

}

const StatCard = ({icon:Icon,value,label}) => (

<div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">

<Icon className="text-indigo-500 mb-3"/>

<p className="text-2xl font-bold">{value}</p>

<p className="text-sm text-gray-500">{label}</p>

</div>

)

return (

<div className="p-8 space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">

{/* HEADER */}

<div className="flex justify-between items-start">

<div>

<h1 className="text-2xl font-bold">Integrations Hub</h1>

<p className="text-sm text-gray-500">
Connected platforms and data sources
</p>

</div>

<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">

<Plus size={16}/>

Add Integration

</button>

</div>

{/* STATS */}

<div className="grid grid-cols-4 gap-6">

<StatCard icon={Check} value="9" label="Connected"/>

<StatCard icon={Zap} value="2" label="Pending Setup"/>

<StatCard icon={RefreshCw} value="Last 5m" label="Last Sync"/>

<StatCard icon={AlertTriangle} value="1" label="Sync Errors"/>

</div>

{/* INTEGRATIONS GRID */}

<div className="grid grid-cols-3 gap-6">

{integrations.map((i,index)=>{

const Icon=i.icon

return(

<div
key={index}
className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-4"
>

<div className="flex items-start justify-between">

<div className="flex items-center gap-3">

<div className="p-3 rounded-lg bg-gray-100 dark:bg-slate-800">
<Icon size={18}/>
</div>

<div>

<p className="font-medium text-sm">
{i.name}
</p>

<p className="text-xs text-gray-500">
{i.desc}
</p>

</div>

</div>

</div>

<div className="flex justify-between items-center">

<StatusBadge status={i.status}/>

{i.status==="Token Expired"
? <button className="text-xs px-3 py-1 rounded-md bg-indigo-600 text-white">Reconnect</button>
: i.name==="Manual CSV Upload"
? <button className="text-xs px-3 py-1 rounded-md border border-gray-300 dark:border-slate-700">Upload CSV</button>
: <button className="text-xs text-gray-500">Configure</button>
}

</div>

{i.sync && (
<p className="text-xs text-gray-400">
Last sync: {i.sync}
</p>
)}

</div>

)

})}

{/* ADD INTEGRATION CARD */}

<div className="p-6 rounded-xl border border-dashed border-gray-300 dark:border-slate-700 flex flex-col items-center justify-center text-center">

<Plus className="text-gray-400 mb-3"/>

<p className="font-medium text-sm">
Add Integration
</p>

<p className="text-xs text-gray-500">
Browse 40+ connectors
</p>

</div>

</div>

</div>

)
}