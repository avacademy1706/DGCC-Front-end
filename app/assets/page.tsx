// "use client";

// import { useState } from "react";
// import {
//   Upload,
//   Image,
//   Video,
//   FileText,
//   HardDrive,
//   Download,
//   Pencil,
//   Folder,
// } from "lucide-react";

// export default function AssetManager() {

// const [tab,setTab]=useState("all");

// const assets=[
// {
// name:"EduTech_Q1_Banner.jpg",
// type:"Image",
// client:"EduTech Pro",
// size:"840 KB",
// date:"Mar 3, 2026"
// },
// {
// name:"RE360_Launch_Video.mp4",
// type:"Video",
// client:"RealEstate360",
// size:"18 MB",
// date:"Feb 28, 2026"
// },
// {
// name:"Agency_BrandKit_2026.pdf",
// type:"PDF",
// client:"Agency",
// size:"4.2 MB",
// date:"Jan 15, 2026"
// }
// ];

// const filtered = tab==="all"
// ? assets
// : assets.filter(a=>a.type.toLowerCase()===tab);

// const StatCard = ({icon:Icon,value,label}) => (

// <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">

// <Icon className="text-indigo-500 mb-3"/>

// <p className="text-2xl font-bold">{value}</p>
// <p className="text-sm text-gray-500">{label}</p>

// </div>

// );

// const Badge = ({type})=>{

// const styles={
// Image:"bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
// Video:"bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
// PDF:"bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300"
// };

// return(
// <span className={`px-2 py-1 text-xs rounded-full ${styles[type]}`}>
// {type}
// </span>
// )

// }

// return (

// <div className="p-8 space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">

// {/* HEADER */}

// <div className="flex justify-between items-start">

// <div>

// <h1 className="text-2xl font-bold">
// Asset Manager
// </h1>

// <p className="text-sm text-gray-500">
// Centralized media, documents and brand assets
// </p>

// </div>

// <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">

// <Upload size={16}/>

// Upload Files

// </button>

// </div>

// {/* STATS */}

// <div className="grid grid-cols-4 gap-6">

// <StatCard icon={Folder} value="1,284" label="Total Assets"/>

// <StatCard icon={HardDrive} value="284 GB" label="Storage Used"/>

// <StatCard icon={Video} value="142" label="Video Files"/>

// <StatCard icon={FileText} value="384" label="Documents"/>

// </div>

// {/* FILE MANAGER */}

// <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

// {/* TOP BAR */}

// <div className="flex justify-between items-center mb-6">

// {/* TABS */}

// <div className="flex gap-3 text-sm">

// <button
// onClick={()=>setTab("all")}
// className={`px-3 py-1 rounded-md ${
// tab==="all"
// ? "bg-gray-200 dark:bg-slate-800"
// : ""
// }`}
// >
// All Files
// </button>

// <button
// onClick={()=>setTab("image")}
// className="px-3 py-1"
// >
// Images
// </button>

// <button
// onClick={()=>setTab("video")}
// className="px-3 py-1"
// >
// Videos
// </button>

// <button
// onClick={()=>setTab("pdf")}
// className="px-3 py-1"
// >
// Documents
// </button>

// </div>

// {/* SEARCH */}

// <input
// placeholder="Search assets..."
// className="px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-sm"
// />

// </div>

// {/* TABLE */}

// <table className="w-full text-sm">

// <thead className="text-gray-500 border-b border-gray-200 dark:border-slate-800">

// <tr>

// <th className="text-left py-3">NAME</th>
// <th>TYPE</th>
// <th>CLIENT</th>
// <th>SIZE</th>
// <th>UPLOADED</th>
// <th>ACTIONS</th>

// </tr>

// </thead>

// <tbody>

// {filtered.map((a,i)=>(

// <tr key={i} className="border-b border-gray-200 dark:border-slate-800">

// <td className="py-4 font-medium">{a.name}</td>

// <td>
// <Badge type={a.type}/>
// </td>

// <td>{a.client}</td>

// <td>{a.size}</td>

// <td>{a.date}</td>

// <td>

// <div className="flex justify-center gap-3">

// <button>
// <Download size={16}/>
// </button>

// <button>
// <Pencil size={16}/>
// </button>

// </div>

// </td>

// </tr>

// ))}

// </tbody>

// </table>

// </div>

// </div>

// );
// }

"use client";

import { useState } from "react";
import {
  Upload, Image, Video, FileText, HardDrive, Download, Pencil, Folder,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const assets = [
  { name: "EduTech_Q1_Banner.jpg",     type: "Image", client: "EduTech Pro",    size: "840 KB",  date: "Mar 3, 2026"  },
  { name: "RE360_Launch_Video.mp4",    type: "Video", client: "RealEstate360",  size: "18 MB",   date: "Feb 28, 2026" },
  { name: "Agency_BrandKit_2026.pdf",  type: "PDF",   client: "Agency",         size: "4.2 MB",  date: "Jan 15, 2026" },
];

const badgeStyles: Record<string, string> = {
  Image: "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300",
  Video: "bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300",
  PDF:   "bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300",
};

// ── Sub-components ────────────────────────────────────────────────────────────

function StatCard({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <div className="p-3 sm:p-4 md:p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
      <Icon className="text-indigo-500 mb-2 md:mb-3" size={16} />
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight">{value}</p>
      <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 leading-tight">{label}</p>
    </div>
  );
}

function Badge({ type }: { type: string }) {
  return (
    <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${badgeStyles[type] ?? ""}`}>
      {type}
    </span>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function AssetManager() {
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = assets.filter((a) => {
    const matchTab = tab === "all" || a.type.toLowerCase() === tab;
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) ||
                        a.client.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  const tabList = [
    { key: "all",   label: "All Files"  },
    { key: "image", label: "Images"     },
    { key: "video", label: "Videos"     },
    { key: "pdf",   label: "Documents"  },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Asset Manager</h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">
            Centralized media, documents and brand assets
          </p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm transition-colors">
          <Upload size={15} />
          Upload Files
        </button>
      </div>

      {/* ── STATS — 2-col mobile → 4-col desktop ────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
        <StatCard icon={Folder}    value="1,284"  label="Total Assets"   />
        <StatCard icon={HardDrive} value="284 GB" label="Storage Used"   />
        <StatCard icon={Video}     value="142"    label="Video Files"    />
        <StatCard icon={FileText}  value="384"    label="Documents"      />
      </div>

      {/* ── FILE MANAGER ────────────────────────────────────────────── */}
      <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">

        {/* TOP BAR — stack on mobile, row on sm+ */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6">

          {/* Filter tabs — scrollable */}
          <div className="overflow-x-auto">
            <div className="flex gap-1.5 md:gap-2 text-xs md:text-sm min-w-max">
              {tabList.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors whitespace-nowrap ${
                    tab === t.key
                      ? "bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <input
            placeholder="Search assets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-52 md:w-64 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-xs md:text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* ── Desktop Table (sm+) ──────────────────────────────────── */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-xs md:text-sm">
            <thead className="text-gray-500 dark:text-slate-400 border-b border-gray-200 dark:border-slate-800">
              <tr>
                <th className="text-left py-3 font-semibold tracking-wide">NAME</th>
                <th className="font-semibold tracking-wide">TYPE</th>
                <th className="font-semibold tracking-wide">CLIENT</th>
                <th className="font-semibold tracking-wide">SIZE</th>
                <th className="font-semibold tracking-wide">UPLOADED</th>
                <th className="font-semibold tracking-wide">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a, i) => (
                <tr key={i} className="border-b border-gray-200 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-3 font-medium text-gray-900 dark:text-white truncate max-w-[180px] md:max-w-none">
                    {a.name}
                  </td>
                  <td className="text-center"><Badge type={a.type} /></td>
                  <td className="text-center text-gray-600 dark:text-slate-300">{a.client}</td>
                  <td className="text-center text-gray-600 dark:text-slate-300">{a.size}</td>
                  <td className="text-center text-gray-600 dark:text-slate-300">{a.date}</td>
                  <td>
                    <div className="flex justify-center gap-3">
                      <button className="text-gray-400 hover:text-indigo-500 transition-colors">
                        <Download size={15} />
                      </button>
                      <button className="text-gray-400 hover:text-indigo-500 transition-colors">
                        <Pencil size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-gray-400 dark:text-slate-500 text-sm">
                    No assets found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ── Mobile Cards ─────────────────────────────────────────── */}
        <div className="sm:hidden space-y-2.5">
          {filtered.map((a, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-slate-700"
            >
              {/* Icon */}
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 shrink-0">
                {a.type === "Image" && <Image size={16} className="text-blue-500" />}
                {a.type === "Video" && <Video size={16} className="text-purple-500" />}
                {a.type === "PDF"   && <FileText size={16} className="text-orange-500" />}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">{a.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge type={a.type} />
                  <span className="text-xs text-gray-500 dark:text-slate-400">{a.client}</span>
                  <span className="text-xs text-gray-400 dark:text-slate-500">{a.size}</span>
                </div>
                <p className="text-xs text-gray-400 dark:text-slate-500 mt-0.5">{a.date}</p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 shrink-0">
                <button className="text-gray-400 hover:text-indigo-500 transition-colors">
                  <Download size={15} />
                </button>
                <button className="text-gray-400 hover:text-indigo-500 transition-colors">
                  <Pencil size={15} />
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-10 text-gray-400 dark:text-slate-500 text-sm">
              No assets found
            </div>
          )}
        </div>

      </div>
    </div>
  );
}