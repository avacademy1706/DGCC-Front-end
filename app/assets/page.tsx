"use client";

import { useState } from "react";
import {
  Upload,
  Image,
  Video,
  FileText,
  HardDrive,
  Download,
  Pencil,
  Folder,
} from "lucide-react";

export default function AssetManager() {

const [tab,setTab]=useState("all");

const assets=[
{
name:"EduTech_Q1_Banner.jpg",
type:"Image",
client:"EduTech Pro",
size:"840 KB",
date:"Mar 3, 2026"
},
{
name:"RE360_Launch_Video.mp4",
type:"Video",
client:"RealEstate360",
size:"18 MB",
date:"Feb 28, 2026"
},
{
name:"Agency_BrandKit_2026.pdf",
type:"PDF",
client:"Agency",
size:"4.2 MB",
date:"Jan 15, 2026"
}
];

const filtered = tab==="all"
? assets
: assets.filter(a=>a.type.toLowerCase()===tab);

const StatCard = ({icon:Icon,value,label}) => (

<div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">

<Icon className="text-indigo-500 mb-3"/>

<p className="text-2xl font-bold">{value}</p>
<p className="text-sm text-gray-500">{label}</p>

</div>

);

const Badge = ({type})=>{

const styles={
Image:"bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
Video:"bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
PDF:"bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300"
};

return(
<span className={`px-2 py-1 text-xs rounded-full ${styles[type]}`}>
{type}
</span>
)

}

return (

<div className="p-8 space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">

{/* HEADER */}

<div className="flex justify-between items-start">

<div>

<h1 className="text-2xl font-bold">
Asset Manager
</h1>

<p className="text-sm text-gray-500">
Centralized media, documents and brand assets
</p>

</div>

<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">

<Upload size={16}/>

Upload Files

</button>

</div>

{/* STATS */}

<div className="grid grid-cols-4 gap-6">

<StatCard icon={Folder} value="1,284" label="Total Assets"/>

<StatCard icon={HardDrive} value="284 GB" label="Storage Used"/>

<StatCard icon={Video} value="142" label="Video Files"/>

<StatCard icon={FileText} value="384" label="Documents"/>

</div>

{/* FILE MANAGER */}

<div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

{/* TOP BAR */}

<div className="flex justify-between items-center mb-6">

{/* TABS */}

<div className="flex gap-3 text-sm">

<button
onClick={()=>setTab("all")}
className={`px-3 py-1 rounded-md ${
tab==="all"
? "bg-gray-200 dark:bg-slate-800"
: ""
}`}
>
All Files
</button>

<button
onClick={()=>setTab("image")}
className="px-3 py-1"
>
Images
</button>

<button
onClick={()=>setTab("video")}
className="px-3 py-1"
>
Videos
</button>

<button
onClick={()=>setTab("pdf")}
className="px-3 py-1"
>
Documents
</button>

</div>

{/* SEARCH */}

<input
placeholder="Search assets..."
className="px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-sm"
/>

</div>

{/* TABLE */}

<table className="w-full text-sm">

<thead className="text-gray-500 border-b border-gray-200 dark:border-slate-800">

<tr>

<th className="text-left py-3">NAME</th>
<th>TYPE</th>
<th>CLIENT</th>
<th>SIZE</th>
<th>UPLOADED</th>
<th>ACTIONS</th>

</tr>

</thead>

<tbody>

{filtered.map((a,i)=>(

<tr key={i} className="border-b border-gray-200 dark:border-slate-800">

<td className="py-4 font-medium">{a.name}</td>

<td>
<Badge type={a.type}/>
</td>

<td>{a.client}</td>

<td>{a.size}</td>

<td>{a.date}</td>

<td>

<div className="flex justify-center gap-3">

<button>
<Download size={16}/>
</button>

<button>
<Pencil size={16}/>
</button>

</div>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

);
}