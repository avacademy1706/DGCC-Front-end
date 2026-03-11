// "use client";

// import { Plus } from "lucide-react";

// export default function ContentBrandPage() {

//   const calendarDays = [
//     "", "", "", "", "", "1", "2",
//     "3","4","5","6","7","8","9",
//     "10","11","12","13","14","15","16",
//     "17","18","19","20","21","22","23"
//   ];

//   const posts = [
//     {
//       title: "EduTech Pro — Instagram",
//       desc: "Admission open post · Creative #14 · 4 hashtags",
//       time: "Today 6PM",
//       color: "bg-blue-100 text-blue-600",
//     },
//     {
//       title: "RE360 — Facebook + Instagram",
//       desc: "New project launch video · 90s reel · 3 variants",
//       time: "Tomorrow 10AM",
//       color: "bg-green-100 text-green-600",
//     },
//     {
//       title: "FinanceHub — LinkedIn",
//       desc: "Thought leadership article · Interest rate blog post",
//       time: "Mar 10 9AM",
//       color: "bg-orange-100 text-orange-600",
//     },
//   ];

//   const assets = [
//     {
//       name: "EduTech_Banner_Q1.jpg",
//       size: "1200×628 · 840 KB",
//       color: "from-indigo-500 to-blue-500",
//       icon: "🎓",
//     },
//     {
//       name: "HealthFirst_Clinic_Ad.mp4",
//       size: "16:9 · 30s · 18 MB",
//       color: "from-green-500 to-teal-500",
//       icon: "🏥",
//     },
//     {
//       name: "RE360_Logo_2026.svg",
//       size: "Vector · Brand doc",
//       color: "from-orange-500 to-red-500",
//       icon: "🏠",
//     },
//   ];

//   return (
//     <div className="p-8 min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white space-y-6">

//       {/* HEADER */}

//       <div className="flex justify-between items-start">

//         <div>
//           <h1 className="text-2xl font-bold">Content & Brand</h1>
//           <p className="text-sm text-gray-500 dark:text-slate-400">
//             Content calendar, asset library and publishing tracker
//           </p>
//         </div>

//         <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">
//           <Plus size={16}/>
//           Schedule Post
//         </button>

//       </div>

//       {/* TOP GRID */}

//       <div className="grid grid-cols-2 gap-6">

//         {/* CALENDAR */}

//         <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

//           <h3 className="font-semibold mb-6">
//             Content Calendar — March 2026
//           </h3>

//           <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-4">
//             {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d)=>(
//               <div key={d}>{d}</div>
//             ))}
//           </div>

//           <div className="grid grid-cols-7 gap-2 text-sm">

//             {calendarDays.map((day,i)=>(
//               <div
//                 key={i}
//                 className={`h-16 flex items-center justify-center rounded-md
//                 ${day==="7"
//                 ? "border border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30"
//                 : "hover:bg-gray-100 dark:hover:bg-slate-800"}`}
//               >
//                 {day}
//               </div>
//             ))}

//           </div>

//         </div>

//         {/* POSTS */}

//         <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

//           <h3 className="font-semibold mb-4">
//             Scheduled Posts This Week
//           </h3>

//           <div className="space-y-3">

//             {posts.map((post,i)=>(
//               <div
//                 key={i}
//                 className="flex justify-between items-start p-4 rounded-lg border border-gray-200 dark:border-slate-700"
//               >

//                 <div>
//                   <p className="font-medium text-sm">{post.title}</p>
//                   <p className="text-xs text-gray-500">{post.desc}</p>
//                 </div>

//                 <span className={`text-xs px-2 py-1 rounded-full ${post.color}`}>
//                   {post.time}
//                 </span>

//               </div>
//             ))}

//           </div>

//         </div>

//       </div>

//       {/* ASSET LIBRARY */}

//       <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

//         <h3 className="font-semibold mb-6">Asset Library</h3>

//         <div className="grid grid-cols-4 gap-6">

//           {assets.map((asset,i)=>(
//             <div
//               key={i}
//               className="rounded-lg border border-gray-200 dark:border-slate-800 p-3"
//             >

//               <div className={`h-24 rounded-md flex items-center justify-center text-2xl text-white bg-gradient-to-r ${asset.color}`}>
//                 {asset.icon}
//               </div>

//               <p className="text-sm mt-2 font-medium">{asset.name}</p>
//               <p className="text-xs text-gray-500">{asset.size}</p>

//             </div>
//           ))}

//           {/* UPLOAD */}

//           <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-slate-700 rounded-lg text-gray-500">

//             <Plus size={20}/>
//             <p className="text-sm mt-1">Upload Asset</p>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

"use client";

import { Plus } from "lucide-react";

export default function ContentBrandPage() {

  const calendarDays = [
    "", "", "", "", "", "1", "2",
    "3","4","5","6","7","8","9",
    "10","11","12","13","14","15","16",
    "17","18","19","20","21","22","23"
  ];

  const posts = [
    {
      title: "EduTech Pro — Instagram",
      desc: "Admission open post · Creative #14 · 4 hashtags",
      time: "Today 6PM",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      title: "RE360 — Facebook + Instagram",
      desc: "New project launch video · 90s reel · 3 variants",
      time: "Tomorrow 10AM",
      color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      title: "FinanceHub — LinkedIn",
      desc: "Thought leadership article · Interest rate blog post",
      time: "Mar 10 9AM",
      color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    },
  ];

  const assets = [
    {
      name: "EduTech_Banner_Q1.jpg",
      size: "1200×628 · 840 KB",
      color: "from-indigo-500 to-blue-500",
      icon: "🎓",
    },
    {
      name: "HealthFirst_Clinic_Ad.mp4",
      size: "16:9 · 30s · 18 MB",
      color: "from-green-500 to-teal-500",
      icon: "🏥",
    },
    {
      name: "RE360_Logo_2026.svg",
      size: "Vector · Brand doc",
      color: "from-orange-500 to-red-500",
      icon: "🏠",
    },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white space-y-4 md:space-y-6">

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Content & Brand</h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">
            Content calendar, asset library and publishing tracker
          </p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm transition-colors">
          <Plus size={15} />
          Schedule Post
        </button>
      </div>

      {/* ── TOP GRID — 1-col mobile, 2-col desktop ──────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

        {/* CALENDAR */}
        <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
          <h3 className="font-semibold text-sm md:text-base mb-4 md:mb-6">
            Content Calendar — March 2026
          </h3>

          {/* Day headers */}
          <div className="grid grid-cols-7 text-center text-xs text-gray-500 dark:text-slate-400 mb-2 md:mb-3">
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
              <div key={d} className="py-1">{d}</div>
            ))}
          </div>

          {/* Calendar grid — smaller cells on mobile */}
          <div className="grid grid-cols-7 gap-1 md:gap-2 text-xs md:text-sm">
            {calendarDays.map((day, i) => (
              <div
                key={i}
                className={`h-9 md:h-14 lg:h-16 flex items-center justify-center rounded-md transition-colors
                  ${day === "7"
                    ? "border border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 font-semibold text-indigo-600 dark:text-indigo-400"
                    : day
                    ? "hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer"
                    : ""
                  }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* SCHEDULED POSTS */}
        <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
          <h3 className="font-semibold text-sm md:text-base mb-3 md:mb-4">
            Scheduled Posts This Week
          </h3>

          <div className="space-y-2 md:space-y-3">
            {posts.map((post, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between p-3 md:p-4 rounded-lg border border-gray-200 dark:border-slate-700"
              >
                <div className="min-w-0">
                  <p className="font-medium text-xs md:text-sm text-gray-900 dark:text-white">
                    {post.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
                    {post.desc}
                  </p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap w-fit shrink-0 font-medium ${post.color}`}>
                  {post.time}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── ASSET LIBRARY ───────────────────────────────────────────── */}
      <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
        <h3 className="font-semibold text-sm md:text-base mb-4 md:mb-6">Asset Library</h3>

        {/* 2-col mobile → 3-col tablet → 4-col desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">

          {assets.map((asset, i) => (
            <div
              key={i}
              className="rounded-lg border border-gray-200 dark:border-slate-800 p-2.5 md:p-3 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
            >
              <div className={`h-16 md:h-20 lg:h-24 rounded-md flex items-center justify-center text-xl md:text-2xl text-white bg-gradient-to-r ${asset.color}`}>
                {asset.icon}
              </div>
              <p className="text-xs md:text-sm mt-2 font-medium text-gray-900 dark:text-white truncate">
                {asset.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 truncate">
                {asset.size}
              </p>
            </div>
          ))}

          {/* UPLOAD CARD */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-slate-700 rounded-lg text-gray-400 dark:text-slate-500 cursor-pointer hover:border-indigo-400 hover:text-indigo-400 transition-colors min-h-[100px] md:min-h-[120px] gap-1.5 p-3">
            <Plus size={18} />
            <p className="text-xs md:text-sm font-medium">Upload Asset</p>
          </div>

        </div>
      </div>

    </div>
  );
}