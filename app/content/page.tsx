

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
//       color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
//     },
//     {
//       title: "RE360 — Facebook + Instagram",
//       desc: "New project launch video · 90s reel · 3 variants",
//       time: "Tomorrow 10AM",
//       color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
//     },
//     {
//       title: "FinanceHub — LinkedIn",
//       desc: "Thought leadership article · Interest rate blog post",
//       time: "Mar 10 9AM",
//       color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
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
//     <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white space-y-4 md:space-y-6">

//       {/* ── HEADER ──────────────────────────────────────────────────── */}
//       <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
//         <div>
//           <h1 className="text-xl md:text-2xl font-bold">Content & Brand</h1>
//           <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">
//             Content calendar, asset library and publishing tracker
//           </p>
//         </div>
//         <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm transition-colors">
//           <Plus size={15} />
//           Schedule Post
//         </button>
//       </div>

//       {/* ── TOP GRID — 1-col mobile, 2-col desktop ──────────────────── */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

//         {/* CALENDAR */}
//         <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
//           <h3 className="font-semibold text-sm md:text-base mb-4 md:mb-6">
//             Content Calendar — March 2026
//           </h3>

//           {/* Day headers */}
//           <div className="grid grid-cols-7 text-center text-xs text-gray-500 dark:text-slate-400 mb-2 md:mb-3">
//             {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
//               <div key={d} className="py-1">{d}</div>
//             ))}
//           </div>

//           {/* Calendar grid — smaller cells on mobile */}
//           <div className="grid grid-cols-7 gap-1 md:gap-2 text-xs md:text-sm">
//             {calendarDays.map((day, i) => (
//               <div
//                 key={i}
//                 className={`h-9 md:h-14 lg:h-16 flex items-center justify-center rounded-md transition-colors
//                   ${day === "7"
//                     ? "border border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 font-semibold text-indigo-600 dark:text-indigo-400"
//                     : day
//                     ? "hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer"
//                     : ""
//                   }`}
//               >
//                 {day}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* SCHEDULED POSTS */}
//         <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
//           <h3 className="font-semibold text-sm md:text-base mb-3 md:mb-4">
//             Scheduled Posts This Week
//           </h3>

//           <div className="space-y-2 md:space-y-3">
//             {posts.map((post, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between p-3 md:p-4 rounded-lg border border-gray-200 dark:border-slate-700"
//               >
//                 <div className="min-w-0">
//                   <p className="font-medium text-xs md:text-sm text-gray-900 dark:text-white">
//                     {post.title}
//                   </p>
//                   <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
//                     {post.desc}
//                   </p>
//                 </div>
//                 <span className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap w-fit shrink-0 font-medium ${post.color}`}>
//                   {post.time}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* ── ASSET LIBRARY ───────────────────────────────────────────── */}
//       <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
//         <h3 className="font-semibold text-sm md:text-base mb-4 md:mb-6">Asset Library</h3>

//         {/* 2-col mobile → 3-col tablet → 4-col desktop */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">

//           {assets.map((asset, i) => (
//             <div
//               key={i}
//               className="rounded-lg border border-gray-200 dark:border-slate-800 p-2.5 md:p-3 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
//             >
//               <div className={`h-16 md:h-20 lg:h-24 rounded-md flex items-center justify-center text-xl md:text-2xl text-white bg-gradient-to-r ${asset.color}`}>
//                 {asset.icon}
//               </div>
//               <p className="text-xs md:text-sm mt-2 font-medium text-gray-900 dark:text-white truncate">
//                 {asset.name}
//               </p>
//               <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 truncate">
//                 {asset.size}
//               </p>
//             </div>
//           ))}

//           {/* UPLOAD CARD */}
//           <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-slate-700 rounded-lg text-gray-400 dark:text-slate-500 cursor-pointer hover:border-indigo-400 hover:text-indigo-400 transition-colors min-h-[100px] md:min-h-[120px] gap-1.5 p-3">
//             <Plus size={18} />
//             <p className="text-xs md:text-sm font-medium">Upload Asset</p>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }


// "use client";

// import { Plus } from "lucide-react";
// import { useState } from "react";
// import SchedulePostModal from "@/components/SchedulePostModal";

// export default function ContentBrandPage() {

//   const [openModal, setOpenModal] = useState(false)

//   const calendarDays = [
//     "", "", "", "", "", "1", "2",
//     "3", "4", "5", "6", "7", "8", "9",
//     "10", "11", "12", "13", "14", "15", "16",
//     "17", "18", "19", "20", "21", "22", "23"
//   ];

//   const posts = [
//     {
//       title: "EduTech Pro — Instagram",
//       desc: "Admission open post · Creative #14 · 4 hashtags",
//       time: "Today 6PM",
//       color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
//     },
//     {
//       title: "RE360 — Facebook + Instagram",
//       desc: "New project launch video · 90s reel · 3 variants",
//       time: "Tomorrow 10AM",
//       color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
//     },
//     {
//       title: "FinanceHub — LinkedIn",
//       desc: "Thought leadership article · Interest rate blog post",
//       time: "Mar 10 9AM",
//       color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
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
//     <>
//       <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white space-y-4 md:space-y-6">

//         {/* HEADER */}
//         <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
//           <div>
//             <h1 className="text-xl md:text-2xl font-bold">Content & Brand</h1>
//             <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">
//               Content calendar, asset library and publishing tracker
//             </p>
//           </div>

//           <button
//             onClick={() => setOpenModal(true)}
//             className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm transition-colors"
//           >
//             <Plus size={15} />
//             Schedule Post
//           </button>
//         </div>

//         {/* TOP GRID */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

//           {/* CALENDAR */}
//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
//             <h3 className="font-semibold text-sm md:text-base mb-4 md:mb-6">
//               Content Calendar — March 2026
//             </h3>

//             <div className="grid grid-cols-7 text-center text-xs text-gray-500 dark:text-slate-400 mb-2 md:mb-3">
//               {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
//                 <div key={d} className="py-1">{d}</div>
//               ))}
//             </div>

//             <div className="grid grid-cols-7 gap-1 md:gap-2 text-xs md:text-sm">
//               {calendarDays.map((day, i) => (
//                 <div
//                   key={i}
//                   className={`h-9 md:h-14 lg:h-16 flex items-center justify-center rounded-md transition-colors
//                     ${day === "7"
//                       ? "border border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 font-semibold text-indigo-600 dark:text-indigo-400"
//                       : day
//                         ? "hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer"
//                         : ""
//                     }`}
//                 >
//                   {day}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* SCHEDULED POSTS */}
//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
//             <h3 className="font-semibold text-sm md:text-base mb-3 md:mb-4">
//               Scheduled Posts This Week
//             </h3>

//             <div className="space-y-2 md:space-y-3">
//               {posts.map((post, i) => (
//                 <div
//                   key={i}
//                   className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between p-3 md:p-4 rounded-lg border border-gray-200 dark:border-slate-700"
//                 >
//                   <div className="min-w-0">
//                     <p className="font-medium text-xs md:text-sm text-gray-900 dark:text-white">
//                       {post.title}
//                     </p>
//                     <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">
//                       {post.desc}
//                     </p>
//                   </div>
//                   <span className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap w-fit shrink-0 font-medium ${post.color}`}>
//                     {post.time}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* ASSET LIBRARY */}
//         <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
//           <h3 className="font-semibold text-sm md:text-base mb-4 md:mb-6">
//             Asset Library
//           </h3>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">

//             {assets.map((asset, i) => (
//               <div
//                 key={i}
//                 className="rounded-lg border border-gray-200 dark:border-slate-800 p-2.5 md:p-3 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
//               >
//                 <div className={`h-16 md:h-20 lg:h-24 rounded-md flex items-center justify-center text-xl md:text-2xl text-white bg-gradient-to-r ${asset.color}`}>
//                   {asset.icon}
//                 </div>
//                 <p className="text-xs md:text-sm mt-2 font-medium text-gray-900 dark:text-white truncate">
//                   {asset.name}
//                 </p>
//                 <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 truncate">
//                   {asset.size}
//                 </p>
//               </div>
//             ))}

//             <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-slate-700 rounded-lg text-gray-400 dark:text-slate-500 cursor-pointer hover:border-indigo-400 hover:text-indigo-400 transition-colors min-h-[100px] md:min-h-[120px] gap-1.5 p-3">
//               <Plus size={18} />
//               <p className="text-xs md:text-sm font-medium">Upload Asset</p>
//             </div>

//           </div>
//         </div>

//       </div>

//       {/* MODAL */}
//       <SchedulePostModal
//         open={openModal}
//         onClose={() => setOpenModal(false)}
//         clients={[]}
//       />
//     </>
//   );
// }


// "use client";

// import { Plus } from "lucide-react";
// import { useState, useEffect } from "react";
// import SchedulePostModal from "@/components/SchedulePostModal";

// export default function ContentBrandPage() {

//   const [openModal, setOpenModal] = useState(false);
//   const [calendarPosts, setCalendarPosts] = useState([]);

//   /* REAL CALENDAR LOGIC */

//   const today = new Date();

//   const year = today.getFullYear();
//   const month = today.getMonth();

//   const firstDay = new Date(year, month, 1).getDay();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   const calendarDays = [
//     ...Array(firstDay).fill(""),
//     ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
//   ];

//   /* POSTS PREVIEW (STATIC FOR NOW) */

//   const posts = [
//     {
//       title: "EduTech Pro — Instagram",
//       desc: "Admission open post · Creative #14 · 4 hashtags",
//       time: "Today 6PM",
//       color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
//     },
//     {
//       title: "RE360 — Facebook + Instagram",
//       desc: "New project launch video · 90s reel · 3 variants",
//       time: "Tomorrow 10AM",
//       color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
//     },
//     {
//       title: "FinanceHub — LinkedIn",
//       desc: "Thought leadership article · Interest rate blog post",
//       time: "Mar 10 9AM",
//       color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
//     },
//   ];

//   /* ASSETS */

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

//   /* FETCH CALENDAR POSTS */

//   const fetchCalendarPosts = async () => {
//     const res = await fetch(
//       `/api/content/calendar-posts?month=${month + 1}&year=${year}&clientId=CLIENT_ID_HERE`
//     );

//     const data = await res.json();

//     setCalendarPosts(data.data || []);
//   };

//   useEffect(() => {
//     fetchCalendarPosts();
//   }, []);

//   /* EXCEL CALENDAR UPLOAD */

//   const handleCalendarUpload = async (e) => {
//     const file = e.target.files[0];

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("clientId", "CLIENT_ID_HERE");

//     await fetch("/api/content/upload-calendar", {
//       method: "POST",
//       body: formData,
//     });

//     fetchCalendarPosts();
//   };

//   return (
//     <>
//       <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white space-y-4 md:space-y-6">

//         {/* HEADER */}

//         <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

//           <div>
//             <h1 className="text-xl md:text-2xl font-bold">Content & Brand</h1>

//             <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">
//               Content calendar, asset library and publishing tracker
//             </p>
//           </div>

//           <div className="flex gap-2">

//             <button
//               onClick={() => setOpenModal(true)}
//               className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
//             >
//               <Plus size={15} />
//               Schedule Post
//             </button>

//             <label className="cursor-pointer px-4 py-2 bg-gray-200 dark:bg-slate-700 rounded-lg text-sm">

//               Upload Calendar

//               <input
//                 type="file"
//                 accept=".xlsx,.csv"
//                 onChange={handleCalendarUpload}
//                 className="hidden"
//               />

//             </label>

//           </div>

//         </div>

//         {/* TOP GRID */}

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

//           {/* CALENDAR */}

//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">

//             <h3 className="font-semibold text-sm md:text-base mb-4 md:mb-6">

//               Content Calendar —{" "}
//               {today.toLocaleString("default", { month: "long" })} {year}

//             </h3>

//             <div className="grid grid-cols-7 text-center text-xs text-gray-500 dark:text-slate-400 mb-2 md:mb-3">
//               {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
//                 <div key={d} className="py-1">{d}</div>
//               ))}
//             </div>

//             <div className="grid grid-cols-7 gap-1 md:gap-2 text-xs md:text-sm">

//               {calendarDays.map((day, i) => {

//                 const dayPost = calendarPosts.find(
//                   (post) =>
//                     new Date(post.scheduleDate).getDate() === Number(day)
//                 );

//                 return (

//                   <div
//                     key={i}
//                     className="relative group h-10 md:h-14 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-slate-800"
//                   >

//                     {day}

//                     {dayPost && (
//                       <>
//                         <span className="absolute bottom-1 w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>

//                         <div className="absolute hidden group-hover:block top-full mt-1 w-52 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-lg rounded-lg p-3 z-50">

//                           <p className="font-medium text-sm">
//                             {dayPost.platform}
//                           </p>

//                           <p className="text-xs text-gray-500 mt-1">
//                             {dayPost.caption}
//                           </p>

//                         </div>
//                       </>
//                     )}

//                   </div>

//                 );

//               })}

//             </div>

//           </div>

//           {/* SCHEDULED POSTS */}

//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">

//             <h3 className="font-semibold text-sm md:text-base mb-3 md:mb-4">
//               Scheduled Posts This Week
//             </h3>

//             <div className="space-y-2 md:space-y-3">

//               {posts.map((post, i) => (

//                 <div
//                   key={i}
//                   className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between p-3 md:p-4 rounded-lg border border-gray-200 dark:border-slate-700"
//                 >

//                   <div>

//                     <p className="font-medium text-sm">
//                       {post.title}
//                     </p>

//                     <p className="text-xs text-gray-500">
//                       {post.desc}
//                     </p>

//                   </div>

//                   <span className={`text-xs px-2 py-1 rounded-full ${post.color}`}>
//                     {post.time}
//                   </span>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//         {/* ASSET LIBRARY */}

//         <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">

//           <h3 className="font-semibold text-sm md:text-base mb-4 md:mb-6">
//             Asset Library
//           </h3>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

//             {assets.map((asset, i) => (

//               <div
//                 key={i}
//                 className="rounded-lg border border-gray-200 dark:border-slate-800 p-3"
//               >

//                 <div
//                   className={`h-20 rounded-md flex items-center justify-center text-2xl text-white bg-gradient-to-r ${asset.color}`}
//                 >
//                   {asset.icon}
//                 </div>

//                 <p className="text-sm mt-2 font-medium">{asset.name}</p>

//                 <p className="text-xs text-gray-500">{asset.size}</p>

//               </div>

//             ))}

//           </div>

//         </div>

//       </div>

//       {/* MODAL */}

//       <SchedulePostModal
//         open={openModal}
//         onClose={() => setOpenModal(false)}
//         clients={[]}
//       />

//     </>
//   );
// }

// "use client";

// import { Plus } from "lucide-react";
// import { useState } from "react";
// import SchedulePostModal from "@/components/SchedulePostModal";
// import { useGet } from "@/hooks/useGet";
// import { apiClient } from "@/lib/apiClient";

// export default function ContentBrandPage() {

//   const [openModal, setOpenModal] = useState(false);
//   const [selectedClient, setSelectedClient] = useState("");

//   /* REAL CALENDAR */

//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth();

//   const firstDay = new Date(year, month, 1).getDay();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   const calendarDays = [
//     ...Array(firstDay).fill(""),
//     ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
//   ];

//   /* CLIENT LIST */

//   const { data: clientsData } = useGet(
//     "clients",
//     "http://localhost:5000/api/clients"
//   );

//   const clients = clientsData?.clients || [];

//   /* CALENDAR POSTS */

//   const { data: calendarData } = useGet(
//     ["calendarPosts", selectedClient],
//     `http://localhost:5000/api/content/calendar-posts?month=${month + 1}&year=${year}&clientId=${selectedClient}`,
//     {
//       enabled: !!selectedClient,
//     }
//   );

//   const calendarPosts = calendarData?.data || [];

//   /* CALENDAR UPLOAD */

//   const handleCalendarUpload = async (e) => {

//     if (!selectedClient) {
//       alert("Please select client first");
//       return;
//     }

//     const file = e.target.files[0];

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("clientId", selectedClient);

//     await apiClient.post(
//       "http://localhost:5000/api/content/upload-calendar",
//       formData
//     );
//   };

//   /* STATIC POSTS */

//   const posts = [
//     {
//       title: "EduTech Pro — Instagram",
//       desc: "Admission open post · Creative #14 · 4 hashtags",
//       time: "Today 6PM",
//       color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
//     },
//     {
//       title: "RE360 — Facebook + Instagram",
//       desc: "New project launch video · 90s reel · 3 variants",
//       time: "Tomorrow 10AM",
//       color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
//     },
//     {
//       title: "FinanceHub — LinkedIn",
//       desc: "Thought leadership article · Interest rate blog post",
//       time: "Mar 10 9AM",
//       color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
//     },
//   ];

//   /* ASSETS */

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
//     <>
//       <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white space-y-4 md:space-y-6">

//         {/* HEADER */}

//         <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

//           <div>
//             <h1 className="text-xl md:text-2xl font-bold">Content & Brand</h1>

//             <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">
//               Content calendar, asset library and publishing tracker
//             </p>
//           </div>

//           <div className="flex gap-2 flex-wrap">

//             {/* CLIENT SELECT */}

//             <select
//               value={selectedClient}
//               onChange={(e) => setSelectedClient(e.target.value)}
//               className="px-3 py-2 rounded-lg border text-sm bg-white dark:bg-slate-800"
//             >
//               <option value="">Select Client</option>

//               {clients.map((client) => (
//                 <option key={client._id} value={client._id}>
//                   {client.profile?.companyName}
//                 </option>
//               ))}
//             </select>

//             {/* SCHEDULE POST */}

//             <button
//               onClick={() => setOpenModal(true)}
//               className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
//             >
//               <Plus size={15} />
//               Schedule Post
//             </button>

//             {/* CALENDAR UPLOAD */}

//             <label className="cursor-pointer px-4 py-2 bg-gray-200 dark:bg-slate-700 rounded-lg text-sm">
//               Upload Calendar
//               <input
//                 type="file"
//                 accept=".xlsx,.csv"
//                 onChange={handleCalendarUpload}
//                 className="hidden"
//               />
//             </label>

//           </div>

//         </div>

//         {/* CALENDAR + POSTS */}

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

//           {/* CALENDAR */}

//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">

//             <h3 className="font-semibold text-sm md:text-base mb-4 md:mb-6">
//               Content Calendar —{" "}
//               {today.toLocaleString("default", { month: "long" })} {year}
//             </h3>

//             <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-2">
//               {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
//                 <div key={d}>{d}</div>
//               ))}
//             </div>

//             <div className="grid grid-cols-7 gap-1 text-xs md:text-sm">

//               {calendarDays.map((day, i) => {

//                 const dayPost = calendarPosts.find(
//                   post => new Date(post.scheduleDate).getDate() === Number(day)
//                 );

//                 return (
//                   <div
//                     key={i}
//                     className="relative group h-10 flex items-center justify-center rounded-md hover:bg-gray-100"
//                   >
//                     {day}

//                     {dayPost && (
//                       <>
//                         <span className="absolute bottom-1 w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>

//                         <div className="absolute hidden group-hover:block top-full mt-1 w-52 bg-white border shadow-lg rounded-lg p-3 z-50">

//                           <p className="font-medium text-sm">
//                             {dayPost.platform}
//                           </p>

//                           <p className="text-xs text-gray-500 mt-1">
//                             {dayPost.caption}
//                           </p>

//                         </div>
//                       </>
//                     )}

//                   </div>
//                 );

//               })}

//             </div>

//           </div>

//           {/* SCHEDULED POSTS */}

//           <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">

//             <h3 className="font-semibold text-sm mb-4">
//               Scheduled Posts This Week
//             </h3>

//             <div className="space-y-3">

//               {posts.map((post, i) => (

//                 <div
//                   key={i}
//                   className="flex justify-between p-3 rounded-lg border"
//                 >

//                   <div>

//                     <p className="font-medium text-sm">
//                       {post.title}
//                     </p>

//                     <p className="text-xs text-gray-500">
//                       {post.desc}
//                     </p>

//                   </div>

//                   <span className={`text-xs px-2 py-1 rounded-full ${post.color}`}>
//                     {post.time}
//                   </span>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>


//         {/* ASSET LIBRARY */}

//         <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">

//           <h3 className="font-semibold text-sm md:text-base mb-4 md:mb-6">
//             Asset Library
//           </h3>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

//             {assets.map((asset, i) => (

//               <div
//                 key={i}
//                 className="rounded-lg border border-gray-200 dark:border-slate-800 p-3 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
//               >

//                 <div
//                   className={`h-20 rounded-md flex items-center justify-center text-2xl text-white bg-gradient-to-r ${asset.color}`}
//                 >
//                   {asset.icon}
//                 </div>

//                 <p className="text-sm mt-2 font-medium truncate">
//                   {asset.name}
//                 </p>

//                 <p className="text-xs text-gray-500 truncate">
//                   {asset.size}
//                 </p>

//               </div>

//             ))}

//             {/* Upload Asset Card */}

//             <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-slate-700 rounded-lg text-gray-400 dark:text-slate-500 cursor-pointer hover:border-indigo-400 hover:text-indigo-400 transition-colors min-h-[100px] gap-1.5 p-3">

//               <Plus size={18} />

//               <p className="text-xs md:text-sm font-medium">
//                 Upload Asset
//               </p>

//             </div>

//           </div>

//         </div>
//       </div>

//       {/* MODAL */}

//       <SchedulePostModal
//         open={openModal}
//         onClose={() => setOpenModal(false)}
//         clients={clients}
//       />

//     </>
//   );
// }

// "use client";

// import { Plus } from "lucide-react";
// import { useState } from "react";
// import SchedulePostModal from "@/components/SchedulePostModal";
// import { useGet } from "@/hooks/useGet";
// import { apiClient } from "@/lib/apiClient";
// import { useQueryClient } from "@tanstack/react-query";

// export default function ContentBrandPage() {

//   const queryClient = useQueryClient();

//   const [openModal, setOpenModal] = useState(false);
//   const [selectedClient, setSelectedClient] = useState("");

//   /* ---------------- REAL CALENDAR ---------------- */

//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth();

//   const firstDay = new Date(year, month, 1).getDay();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   const calendarDays = [
//     ...Array(firstDay).fill(""),
//     ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
//   ];

//   /* ---------------- CLIENT LIST ---------------- */

//   const { data: clientsData } = useGet(
//     "clients",
//     "http://localhost:5000/api/clients"
//   );

//   const clients = clientsData?.clients || [];

//   /* ---------------- CALENDAR POSTS ---------------- */

//   const { data: calendarData } = useGet(
//     ["calendarPosts", selectedClient],
//     `http://localhost:5000/api/content/calendar-posts?month=${month + 1}&year=${year}&clientId=${selectedClient}`,
//     {
//       enabled: !!selectedClient,
//     }
//   );

//   const calendarPosts = calendarData?.data || [];

//   /* ---------------- CALENDAR UPLOAD ---------------- */

//   const handleCalendarUpload = async (e) => {

//     if (!selectedClient) {
//       alert("Please select client first");
//       return;
//     }

//     const file = e.target.files[0];

//     if (!file) {
//       alert("Please select file");
//       return;
//     }

//     if (!file.name.endsWith(".xlsx") && !file.name.endsWith(".csv")) {
//       alert("Only Excel or CSV allowed");
//       return;
//     }

//     try {

//       const formData = new FormData();

//       formData.append("file", file);
//       formData.append("clientId", selectedClient);

//       await apiClient.post(
//         "http://localhost:5000/api/content/upload-calendar",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       alert("Calendar uploaded successfully");

//       /* refetch calendar posts */

//       queryClient.invalidateQueries(["calendarPosts", selectedClient]);

//     } catch (error) {

//       console.error(error);
//       alert("Upload failed");

//     }

//   };

//   /* ---------------- STATIC POSTS ---------------- */

//   const posts = [
//     {
//       title: "EduTech Pro — Instagram",
//       desc: "Admission open post · Creative #14 · 4 hashtags",
//       time: "Today 6PM",
//       color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
//     },
//     {
//       title: "RE360 — Facebook + Instagram",
//       desc: "New project launch video · 90s reel · 3 variants",
//       time: "Tomorrow 10AM",
//       color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
//     },
//     {
//       title: "FinanceHub — LinkedIn",
//       desc: "Thought leadership article · Interest rate blog post",
//       time: "Mar 10 9AM",
//       color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
//     },
//   ];

//   /* ---------------- ASSETS ---------------- */

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
//     <>
//       <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white space-y-6">

//         {/* ---------------- HEADER ---------------- */}

//         <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

//           <div>
//             <h1 className="text-xl md:text-2xl font-bold">Content & Brand</h1>
//             <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400">
//               Content calendar, asset library and publishing tracker
//             </p>
//           </div>

//           <div className="flex gap-2 flex-wrap">

//             {/* CLIENT SELECT */}

//             <select
//               value={selectedClient}
//               onChange={(e) => setSelectedClient(e.target.value)}
//               className="px-3 py-2 rounded-lg border text-sm bg-white dark:bg-slate-800"
//             >
//               <option value="">Select Client</option>

//               {clients.map((client) => (
//                 <option key={client._id} value={client._id}>
//                   {client.profile?.companyName}
//                 </option>
//               ))}
//             </select>

//             {/* SCHEDULE POST */}

//             <button
//               onClick={() => setOpenModal(true)}
//               className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
//             >
//               <Plus size={15} />
//               Schedule Post
//             </button>

//             {/* CALENDAR UPLOAD */}

//             <label className="cursor-pointer px-4 py-2 bg-gray-200 dark:bg-slate-700 rounded-lg text-sm">
//               Upload Calendar
//               <input
//                 type="file"
//                 accept=".xlsx,.csv"
//                 onChange={handleCalendarUpload}
//                 className="hidden"
//               />
//             </label>

//           </div>

//         </div>

//         {/* ---------------- CALENDAR + POSTS ---------------- */}

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//           {/* CALENDAR */}

//           <div className="rounded-xl border bg-white dark:bg-[#0b1220] p-6">

//             <h3 className="font-semibold mb-6">
//               Content Calendar —{" "}
//               {today.toLocaleString("default", { month: "long" })} {year}
//             </h3>

//             <div className="grid grid-cols-7 text-center text-xs mb-2">
//               {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
//                 <div key={d}>{d}</div>
//               ))}
//             </div>

//             <div className="grid grid-cols-7 gap-2 text-sm">

//               {calendarDays.map((day, i) => {

//                 const dayPost = calendarPosts.find(
//                   post => new Date(post.scheduleDate).getDate() === Number(day)
//                 );

//                 return (
//                   <div
//                     key={i}
//                     className="relative group h-12 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-slate-800"
//                   >

//                     {day}

//                     {dayPost && (
//                       <>
//                         <span className="absolute bottom-1 w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>

//                         <div className="absolute hidden group-hover:block top-full mt-1 w-52 bg-white dark:bg-slate-900 border shadow-lg rounded-lg p-3 z-50">

//                           <p className="font-medium text-sm">
//                             {dayPost.platform}
//                           </p>

//                           <p className="text-xs text-gray-500 mt-1">
//                             {dayPost.caption}
//                           </p>

//                         </div>
//                       </>
//                     )}

//                   </div>
//                 );

//               })}

//             </div>

//           </div>

//           {/* SCHEDULED POSTS */}

//           <div className="rounded-xl border bg-white dark:bg-[#0b1220] p-6">

//             <h3 className="font-semibold mb-4">
//               Scheduled Posts This Week
//             </h3>

//             <div className="space-y-3">

//               {posts.map((post, i) => (

//                 <div key={i} className="flex justify-between p-3 border rounded-lg">

//                   <div>
//                     <p className="font-medium text-sm">{post.title}</p>
//                     <p className="text-xs text-gray-500">{post.desc}</p>
//                   </div>

//                   <span className={`text-xs px-2 py-1 rounded-full ${post.color}`}>
//                     {post.time}
//                   </span>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//         {/* ---------------- ASSET LIBRARY ---------------- */}

//         <div className="rounded-xl border bg-white dark:bg-[#0b1220] p-6">

//           <h3 className="font-semibold mb-6">Asset Library</h3>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

//             {assets.map((asset, i) => (

//               <div key={i} className="rounded-lg border p-3">

//                 <div className={`h-20 flex items-center justify-center text-2xl text-white bg-gradient-to-r ${asset.color}`}>
//                   {asset.icon}
//                 </div>

//                 <p className="text-sm mt-2 font-medium">{asset.name}</p>
//                 <p className="text-xs text-gray-500">{asset.size}</p>

//               </div>

//             ))}

//             <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg text-gray-400 hover:border-indigo-400 hover:text-indigo-400 p-3">

//               <Plus size={18} />
//               <p className="text-xs mt-1">Upload Asset</p>

//             </div>

//           </div>

//         </div>

//       </div>

//       <SchedulePostModal
//         open={openModal}
//         onClose={() => setOpenModal(false)}
//         clients={clients}
//       />

//     </>
//   );
// }


// "use client";

// import { Plus } from "lucide-react";
// import { useState } from "react";
// import SchedulePostModal from "@/components/SchedulePostModal";
// import { useGet } from "@/hooks/useGet";
// import { apiClient } from "@/lib/apiClient";
// import { useQueryClient } from "@tanstack/react-query";

// export default function ContentBrandPage() {

//   const queryClient = useQueryClient();

//   const [openModal, setOpenModal] = useState(false);
//   const [selectedClient, setSelectedClient] = useState("");

//   /* ---------------- REAL CALENDAR ---------------- */

//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth();

//   const firstDay = new Date(year, month, 1).getDay();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   const calendarDays = [
//     ...Array(firstDay).fill(""),
//     ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
//   ];

//   /* ---------------- CLIENT LIST ---------------- */

//   const { data: clientsData } = useGet(
//     "clients",
//     "http://localhost:5000/api/clients"
//   );

//   const clients = clientsData?.clients || [];

//   /* ---------------- CALENDAR POSTS ---------------- */

//   const { data: calendarData } = useGet(
//     ["calendarPosts", selectedClient],
//     `http://localhost:5000/api/content/calendar-posts?month=${month + 1}&year=${year}&clientId=${selectedClient}`,
//     {
//       enabled: !!selectedClient,
//     }
//   );

//   const calendarPosts = calendarData?.data || [];

//   /* ---------------- DUMMY POSTS ---------------- */

//   const dummyPosts = [
//     {
//       title: "EduTech Pro — Instagram",
//       desc: "Admission open post · Creative #14 · 4 hashtags",
//       time: "Today 6PM",
//       color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
//     },
//     {
//       title: "RE360 — Facebook + Instagram",
//       desc: "New project launch video · 90s reel · 3 variants",
//       time: "Tomorrow 10AM",
//       color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
//     },
//     {
//       title: "FinanceHub — LinkedIn",
//       desc: "Thought leadership article · Interest rate blog post",
//       time: "Mar 10 9AM",
//       color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
//     },
//   ];

//   /* ---------------- DISPLAY POSTS ---------------- */

//   const displayPosts = calendarPosts.length ? calendarPosts : dummyPosts;

//   /* ---------------- CALENDAR UPLOAD ---------------- */

//   const handleCalendarUpload = async (e) => {

//     if (!selectedClient) {
//       alert("Please select client first");
//       return;
//     }

//     const file = e.target.files[0];

//     if (!file) {
//       alert("Please select file");
//       return;
//     }

//     if (!file.name.endsWith(".xlsx") && !file.name.endsWith(".csv")) {
//       alert("Only Excel or CSV allowed");
//       return;
//     }

//     try {

//       const formData = new FormData();

//       formData.append("file", file);
//       formData.append("clientId", selectedClient);

//       await apiClient.post(
//         "http://localhost:5000/api/content/upload-calendar",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       alert("Calendar uploaded successfully");

//       queryClient.invalidateQueries(["calendarPosts", selectedClient]);

//     } catch (error) {

//       console.error(error);
//       alert("Upload failed");

//     }

//   };

//   /* ---------------- ASSETS ---------------- */

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
//     <>
//       <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-[#020817] text-white space-y-6">

//         {/* HEADER */}

//         <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

//           <div>
//             <h1 className="text-xl md:text-2xl font-bold">Content & Brand</h1>
//             <p className="text-xs md:text-sm text-slate-400">
//               Content calendar, asset library and publishing tracker
//             </p>
//           </div>

//           <div className="flex gap-2 flex-wrap">

//             <select
//               value={selectedClient}
//               onChange={(e) => setSelectedClient(e.target.value)}
//               className="px-3 py-2 rounded-lg border border-white/10 text-sm bg-[#0b1220]"
//             >
//               <option value="">Select Client</option>

//               {clients.map((client) => (
//                 <option key={client._id} value={client._id}>
//                   {client.profile?.companyName}
//                 </option>
//               ))}

//             </select>

//             <button
//               onClick={() => setOpenModal(true)}
//               className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
//             >
//               <Plus size={15} />
//               Schedule Post
//             </button>

//             <label className="cursor-pointer px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm">
//               Upload Calendar
//               <input
//                 type="file"
//                 accept=".xlsx,.csv"
//                 onChange={handleCalendarUpload}
//                 className="hidden"
//               />
//             </label>

//           </div>

//         </div>

//         {/* CALENDAR + POSTS */}

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//           {/* CALENDAR */}

//           <div className="relative overflow-visible rounded-xl border border-white/10 bg-[#0b1220] p-6">
//             <h3 className="font-semibold mb-6">
//               Content Calendar —{" "}
//               {today.toLocaleString("default", { month: "long" })} {year}
//             </h3>

//             <div className="grid grid-cols-7 text-center text-xs text-slate-400 mb-2">
//               {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
//                 <div key={d}>{d}</div>
//               ))}
//             </div>



//             <div className="grid grid-cols-7 gap-2 text-sm">

//               {calendarDays.map((day, i) => {

//                 const dayPosts = calendarPosts.filter(
//                   post => new Date(post.scheduleDate).getDate() === Number(day)
//                 );

//                 return (
//                   <div
//                     key={i}
//                     className="relative group h-12 flex items-center justify-center rounded-md hover:bg-slate-800"
//                   >

//                     {day}

//                     {dayPosts.length > 0 && (
//                       <>

//                         {/* SINGLE INDICATOR WITH COUNT */}

//                         <div className="absolute bottom-1 flex items-center gap-1 
//             bg-indigo-600/20 text-indigo-400 text-[10px] 
//             px-1.5 py-[2px] rounded-full">

//                           <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
//                           {dayPosts.length}

//                         </div>

//                         {/* TOOLTIP */}

//                         <div className="absolute hidden group-hover:block 
//             left-full ml-2 top-1/2 -translate-y-1/2
//             w-56 bg-[#0b1220] border border-white/10 shadow-lg 
//             rounded-lg p-3 z-[9999] pointer-events-none">

//                           {dayPosts.map((post, index) => (
//                             <div key={index} className="mb-2 last:mb-0">

//                               <p className="font-medium text-sm">
//                                 {post.platform}
//                               </p>

//                               <p className="text-xs text-slate-400">
//                                 {post.topic}
//                               </p>

//                               <p className="text-xs text-slate-400">
//                                 {post.asset}
//                               </p>

//                             </div>
//                           ))}

//                         </div>

//                       </>
//                     )}

//                   </div>
//                 );

//               })}

//             </div>

//           </div>

//           {/* POSTS */}

//           <div className="rounded-xl border border-white/10 bg-[#0b1220] p-6">

//             <h3 className="font-semibold mb-4">
//               Scheduled Posts This Week
//             </h3>

//             <div className="space-y-3">

//               {displayPosts.map((post, i) => (

//                 <div key={i} className="flex justify-between p-3 border border-white/10 rounded-lg">

//                   <div>
//                     <p className="font-medium text-sm">
//                       {post.platform || post.title}
//                     </p>

//                     <p className="text-xs text-slate-400">
//                       {post.caption || post.desc}
//                     </p>
//                   </div>

//                   <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-400">

//                     {post.scheduleDate
//                       ? new Date(post.scheduleDate).toLocaleDateString()
//                       : post.time}

//                   </span>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//         {/* ASSET LIBRARY */}

//         <div className="rounded-xl border border-white/10 bg-[#0b1220] p-6">

//           <h3 className="font-semibold mb-6">Asset Library</h3>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

//             {assets.map((asset, i) => (

//               <div key={i} className="rounded-lg border border-white/10 p-3">

//                 <div className={`h-20 flex items-center justify-center text-2xl text-white bg-gradient-to-r ${asset.color}`}>
//                   {asset.icon}
//                 </div>

//                 <p className="text-sm mt-2 font-medium">{asset.name}</p>
//                 <p className="text-xs text-slate-400">{asset.size}</p>

//               </div>

//             ))}

//             <div className="flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-lg text-slate-400 hover:border-indigo-400 hover:text-indigo-400 p-3">

//               <Plus size={18} />
//               <p className="text-xs mt-1">Upload Asset</p>

//             </div>

//           </div>

//         </div>

//       </div>

//       <SchedulePostModal
//         open={openModal}
//         onClose={() => setOpenModal(false)}
//         clients={clients}
//       />

//     </>
//   );
// }


"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import SchedulePostModal from "@/components/SchedulePostModal";
import { useGet } from "@/hooks/useGet";
import { apiClient } from "@/lib/apiClient";
import { useQueryClient } from "@tanstack/react-query";

export default function ContentBrandPage() {

  const queryClient = useQueryClient();

  const [openModal, setOpenModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState("");

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = [
    ...Array(firstDay).fill(""),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const { data: clientsData } = useGet(
    "clients",
    "http://localhost:5000/api/clients"
  );

  const clients = clientsData?.clients || [];

  const { data: calendarData } = useGet(
    ["calendarPosts", selectedClient],
    `http://localhost:5000/api/content/calendar-posts?month=${month + 1}&year=${year}&clientId=${selectedClient}`,
    {
      enabled: !!selectedClient,
    }
  );

  const calendarPosts = calendarData?.data || [];

  const dummyPosts = [
    {
      title: "EduTech Pro — Instagram",
      desc: "Admission open post · Creative #14 · 4 hashtags",
      time: "Today 6PM",
    },
    {
      title: "RE360 — Facebook + Instagram",
      desc: "New project launch video · 90s reel · 3 variants",
      time: "Tomorrow 10AM",
    },
    {
      title: "FinanceHub — LinkedIn",
      desc: "Thought leadership article · Interest rate blog post",
      time: "Mar 10 9AM",
    },
  ];

  const displayPosts = calendarPosts.length ? calendarPosts : dummyPosts;

  // const handleCalendarUpload = async (e) => {

  //   if (!selectedClient) {
  //     alert("Please select client first");
  //     return;
  //   }

  //   const file = e.target.files[0];

  //   if (!file) {
  //     alert("Please select file");
  //     return;
  //   }

  //   if (!file.name.endsWith(".xlsx") && !file.name.endsWith(".csv")) {
  //     alert("Only Excel or CSV allowed");
  //     return;
  //   }

  //   try {

  //     const formData = new FormData();

  //     formData.append("file", file);
  //     formData.append("clientId", selectedClient);

  //     await apiClient.post(
  //       "http://localhost:5000/api/content/upload-calendar",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     alert("Calendar uploaded successfully");

  //     queryClient.invalidateQueries(["calendarPosts", selectedClient]);

  //   } catch (error) {

  //     console.error(error);
  //     alert("Upload failed");

  //   }

  // };


  const handleCalendarUpload = async (e) => {

    if (!selectedClient) {
      alert("Please select client first");
      return;
    }

    const file = e.target.files[0];

    if (!file) {
      alert("Please select file");
      return;
    }

    const validTypes = [".xlsx", ".csv"];

    const isValid = validTypes.some(type => file.name.toLowerCase().endsWith(type));

    if (!isValid) {
      alert("Only Excel (.xlsx) or CSV files allowed");
      e.target.value = "";
      return;
    }

    try {

      const formData = new FormData();

      formData.append("file", file);
      formData.append("clientId", selectedClient);

      await apiClient.post(
        "http://localhost:5000/api/content/upload-calendar",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Calendar uploaded successfully");

      /* Refresh calendar */

      queryClient.invalidateQueries(["calendarPosts", selectedClient]);

      /* Reset file input so same file can upload again */

      e.target.value = "";

    } catch (error) {

      console.error("Upload error:", error);

      alert(
        error?.response?.data?.message ||
        "Upload failed"
      );

    }

  };

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
    <>
      <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-white dark:bg-[#020817] text-slate-900 dark:text-white space-y-6">

        {/* HEADER */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

          <div>
            <h1 className="text-xl md:text-2xl font-bold">Content & Brand</h1>
            <p className="text-xs md:text-sm text-slate-400">
              Content calendar, asset library and publishing tracker
            </p>
          </div>

          <div className="flex gap-2 flex-wrap">

            <select
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
              className="px-3 py-2 rounded-lg border border-slate-300 dark:border-white/10 text-sm bg-white dark:bg-[#0b1220]"
            >
              <option value="">Select Client</option>

              {clients.map((client) => (
                <option key={client._id} value={client._id}>
                  {client.profile?.companyName}
                </option>
              ))}

            </select>

            <button
              onClick={() => setOpenModal(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
            >
              <Plus size={15} />
              Schedule Post
            </button>

            <label className="cursor-pointer px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg text-sm">
              Upload Calendar
              <input
                type="file"
                accept=".xlsx,.csv"
                onChange={handleCalendarUpload}
                className="hidden"
              />
            </label>

          </div>

        </div>

        {/* CALENDAR + POSTS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* CALENDAR */}

          <div className="relative overflow-visible rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1220] p-6">

            <h3 className="font-semibold mb-6">
              Content Calendar —{" "}
              {today.toLocaleString("default", { month: "long" })} {year}
            </h3>

            <div className="grid grid-cols-7 text-center text-xs text-slate-400 mb-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2 text-sm">

              {calendarDays.map((day, i) => {

                const dayPosts = calendarPosts.filter(
                  post => new Date(post.scheduleDate).getDate() === Number(day)
                );

                return (
                  <div
                    key={i}
                    className="relative group h-12 flex items-center justify-center rounded-md hover:bg-slate-200 dark:hover:bg-slate-800"
                  >

                    {day}

                    {dayPosts.length > 0 && (
                      <>
                        <div className="absolute bottom-1 flex items-center gap-1 
                        bg-indigo-600/20 text-indigo-400 text-[10px] 
                        px-1.5 py-[2px] rounded-full">

                          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                          {dayPosts.length}

                        </div>

                        <div className="absolute hidden group-hover:block 
                        left-full ml-2 top-1/2 -translate-y-1/2
                        w-56 bg-white dark:bg-[#0b1220] border border-slate-200 dark:border-white/10 shadow-lg 
                        rounded-lg p-3 z-[9999] pointer-events-none">

                          {dayPosts.map((post, index) => (
                            <div key={index} className="mb-2 last:mb-0">

                              <p className="font-medium text-sm">
                                {post.platform}
                              </p>

                              <p className="text-xs text-slate-400">
                                {post.topic}
                              </p>

                              <p className="text-xs text-slate-400">
                                {post.asset}
                              </p>

                            </div>
                          ))}

                        </div>

                      </>
                    )}

                  </div>
                );

              })}

            </div>

          </div>

          {/* POSTS */}

          <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1220] p-6">

            <h3 className="font-semibold mb-4">
              Scheduled Posts This Week
            </h3>

            <div className="space-y-3">

              {displayPosts.map((post, i) => (

                <div key={i} className="flex justify-between p-3 border border-slate-200 dark:border-white/10 rounded-lg">

                  <div>
                    <p className="font-medium text-sm">
                      {post.platform || post.title}
                    </p>

                    <p className="text-xs text-slate-400">
                      {post.caption || post.desc}
                    </p>
                  </div>

                  <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-400">

                    {post.scheduleDate
                      ? new Date(post.scheduleDate).toLocaleDateString()
                      : post.time}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* ASSET LIBRARY */}

        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1220] p-6">

          <h3 className="font-semibold mb-6">Asset Library</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

            {assets.map((asset, i) => (

              <div key={i} className="rounded-lg border border-slate-200 dark:border-white/10 p-3">

                <div className={`h-20 flex items-center justify-center text-2xl text-white bg-gradient-to-r ${asset.color}`}>
                  {asset.icon}
                </div>

                <p className="text-sm mt-2 font-medium">{asset.name}</p>
                <p className="text-xs text-slate-400">{asset.size}</p>

              </div>

            ))}

            <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-white/10 rounded-lg text-slate-400 hover:border-indigo-400 hover:text-indigo-400 p-3">

              <Plus size={18} />
              <p className="text-xs mt-1">Upload Asset</p>

            </div>

          </div>

        </div>

      </div>

      <SchedulePostModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        clients={clients}
      />

    </>
  );
}