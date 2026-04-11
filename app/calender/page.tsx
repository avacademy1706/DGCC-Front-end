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

//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth();

//   const firstDay = new Date(year, month, 1).getDay();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   const calendarDays = [
//     ...Array(firstDay).fill(""),
//     ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
//   ];

//   const { data: clientsData } = useGet(
//     "clients",
//     "http://localhost:5000/api/clients"
//   );

//   const clients = clientsData?.clients || [];

//   const { data: calendarData } = useGet(
//     ["calendarPosts", selectedClient],
//     `http://localhost:5000/api/content/calendar-posts?month=${month + 1}&year=${year}&clientId=${selectedClient}`,
//     {
//       enabled: !!selectedClient,
//     }
//   );

//   const calendarPosts = calendarData?.data || [];

//   const dummyPosts = [
//     {
//       title: "EduTech Pro — Instagram",
//       desc: "Admission open post · Creative #14 · 4 hashtags",
//       time: "Today 6PM",
//     },
//     {
//       title: "RE360 — Facebook + Instagram",
//       desc: "New project launch video · 90s reel · 3 variants",
//       time: "Tomorrow 10AM",
//     },
//     {
//       title: "FinanceHub — LinkedIn",
//       desc: "Thought leadership article · Interest rate blog post",
//       time: "Mar 10 9AM",
//     },
//   ];

//   const displayPosts = calendarPosts.length ? calendarPosts : dummyPosts;

//   // const handleCalendarUpload = async (e) => {

//   //   if (!selectedClient) {
//   //     alert("Please select client first");
//   //     return;
//   //   }

//   //   const file = e.target.files[0];

//   //   if (!file) {
//   //     alert("Please select file");
//   //     return;
//   //   }

//   //   if (!file.name.endsWith(".xlsx") && !file.name.endsWith(".csv")) {
//   //     alert("Only Excel or CSV allowed");
//   //     return;
//   //   }

//   //   try {

//   //     const formData = new FormData();

//   //     formData.append("file", file);
//   //     formData.append("clientId", selectedClient);

//   //     await apiClient.post(
//   //       "http://localhost:5000/api/content/upload-calendar",
//   //       formData,
//   //       {
//   //         headers: {
//   //           "Content-Type": "multipart/form-data",
//   //         },
//   //       }
//   //     );

//   //     alert("Calendar uploaded successfully");

//   //     queryClient.invalidateQueries(["calendarPosts", selectedClient]);

//   //   } catch (error) {

//   //     console.error(error);
//   //     alert("Upload failed");

//   //   }

//   // };


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

//     const validTypes = [".xlsx", ".csv"];

//     const isValid = validTypes.some(type => file.name.toLowerCase().endsWith(type));

//     if (!isValid) {
//       alert("Only Excel (.xlsx) or CSV files allowed");
//       e.target.value = "";
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

//       /* Refresh calendar */

//       queryClient.invalidateQueries(["calendarPosts", selectedClient]);

//       /* Reset file input so same file can upload again */

//       e.target.value = "";

//     } catch (error) {

//       console.error("Upload error:", error);

//       alert(
//         error?.response?.data?.message ||
//         "Upload failed"
//       );

//     }

//   };

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
//       <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-white dark:bg-[#020817] text-slate-900 dark:text-white space-y-6">

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
//               className="px-3 py-2 rounded-lg border border-slate-300 dark:border-white/10 text-sm bg-white dark:bg-[#0b1220]"
//             >
//               <option value="">Select Client</option>

//               {clients.map((client) => (
//                 <option key={client._id} value={client._id}>
//                   {client.profile?.companyName}
//                 </option>
//               ))}

//             </select>

//             {/* <button
//               onClick={() => setOpenModal(true)}
//               className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
//             >
//               <Plus size={15} />
//               Schedule Post
//             </button> */}

//             <label className="cursor-pointer px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg text-sm">
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

//           <div className="relative overflow-visible rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1220] p-6">

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
//                     className="relative group h-12 flex items-center justify-center rounded-md hover:bg-slate-200 dark:hover:bg-slate-800"
//                   >

//                     {day}

//                     {dayPosts.length > 0 && (
//                       <>
//                         <div className="absolute bottom-1 flex items-center gap-1 
//                         bg-indigo-600/20 text-indigo-400 text-[10px] 
//                         px-1.5 py-[2px] rounded-full">

//                           <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
//                           {dayPosts.length}

//                         </div>

//                         <div className="absolute hidden group-hover:block 
//                         left-full ml-2 top-1/2 -translate-y-1/2
//                         w-56 bg-white dark:bg-[#0b1220] border border-slate-200 dark:border-white/10 shadow-lg 
//                         rounded-lg p-3 z-[9999] pointer-events-none">

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

//           <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1220] p-6">

//             <h3 className="font-semibold mb-4">
//               Scheduled Posts This Week
//             </h3>

//             <div className="space-y-3">

//               {displayPosts.map((post, i) => (

//                 <div key={i} className="flex justify-between p-3 border border-slate-200 dark:border-white/10 rounded-lg">

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

//         <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1220] p-6">

//           <h3 className="font-semibold mb-6">Asset Library</h3>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

//             {assets.map((asset, i) => (

//               <div key={i} className="rounded-lg border border-slate-200 dark:border-white/10 p-3">

//                 <div className={`h-20 flex items-center justify-center text-2xl text-white bg-gradient-to-r ${asset.color}`}>
//                   {asset.icon}
//                 </div>

//                 <p className="text-sm mt-2 font-medium">{asset.name}</p>
//                 <p className="text-xs text-slate-400">{asset.size}</p>

//               </div>

//             ))}

//             <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-white/10 rounded-lg text-slate-400 hover:border-indigo-400 hover:text-indigo-400 p-3">

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

import { Plus, X, Upload, Trash2, FileImage, FileVideo, File } from "lucide-react";
import { useState, useRef } from "react";
import SchedulePostModal from "@/components/SchedulePostModal";
import { useGet } from "@/hooks/useGet";
import { apiClient } from "@/lib/apiClient";
import { useQueryClient } from "@tanstack/react-query";

// ─── Asset Upload Modal ───────────────────────────────────────────────────────

type AssetUploadModalProps = {
  open: boolean;
  onClose: () => void;
  selectedClient?: string;
  onSuccess?: () => void;
};

function AssetUploadModal({ open, onClose, selectedClient, onSuccess } : AssetUploadModalProps) {
  const [clientId, setClientId] = useState(selectedClient || "");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  // ── Naye fields ──
  const [caption, setCaption] = useState("");
  const [platform, setPlatform] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [hashtags, setHashtags] = useState("");

  if (!open) return null;

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setError("");
    if (f.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(f);
    } else {
      setPreview(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (!f) return;
    setFile(f);
    setError("");
    if (f.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(f);
    } else {
      setPreview(null);
    }
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const getFileIcon = (f) => {
    if (!f) return <File size={32} className="text-slate-400" />;
    if (f.type.startsWith("image/")) return <FileImage size={32} className="text-indigo-400" />;
    if (f.type.startsWith("video/")) return <FileVideo size={32} className="text-purple-400" />;
    return <File size={32} className="text-slate-400" />;
  };

  const handleUpload = async () => {
    if (!clientId)   { setError("Client select karo pehle"); return; }
    if (!file)        { setError("File select karo"); return; }
    if (!postTitle)   { setError("Post title required hai"); return; }
    if (!platform)    { setError("Platform select karo"); return; }
    if (!caption)     { setError("Caption likhna zaroori hai"); return; }
    if (!scheduleDate || !scheduleTime) { setError("Schedule date aur time dono chahiye"); return; }

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("clientId", clientId);
      formData.append("postTitle", postTitle);
      formData.append("platform", platform);
      formData.append("caption", caption);
      formData.append("scheduleDate", scheduleDate);
      formData.append("scheduleTime", scheduleTime);
      formData.append("hashtags", hashtags); // comma-separated string

      await apiClient.post(
        "http://localhost:5000/api/assets/upload-asset",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      // Reset
      setFile(null); setPreview(null); setCaption(""); setPlatform("");
      setScheduleDate(""); setScheduleTime(""); setPostTitle(""); setHashtags("");
      if (fileInputRef.current) fileInputRef.current.value = "";

      onSuccess?.();
      onClose();
    } catch (err) {
      console.error("Asset upload error:", err);
      setError(err?.response?.data?.message || "Upload failed, try again");
    } finally {
      setUploading(false);
    }
  };

  const c = config[status] || config.draft;
  const Icon = c.icon;

  return (
    <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${c.bg} ${c.text}`}>
      <Icon
        size={12}
        className={status === "publishing" || status === "queued" ? "animate-spin" : ""}
      />
      {c.label}
    </span>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════ */
export default function ContentBrandPage() {

  const queryClient = useQueryClient();

  const [openModal, setOpenModal] = useState(false);
  const [openAssetModal, setOpenAssetModal] = useState(false);
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
    { enabled: !!selectedClient }
  );

  const calendarPosts = calendarData?.data || [];

  // ── Assets fetch ──
  const { data: assetsData, refetch: refetchAssets } = useGet(
    ["assets", selectedClient],
    `http://localhost:5000/api/assets/assets?clientId=${selectedClient}`,
    { enabled: !!selectedClient }
  );

  const assets = assetsData?.data || [];

  // ── Delete asset ──
  const handleDeleteAsset = async (assetId) => {
    if (!confirm("Asset delete karna chahte ho?")) return;
    try {
      await apiClient.delete(`http://localhost:5000/api/assets/assets/${assetId}`);
      queryClient.invalidateQueries(["assets", selectedClient]);
    } catch (err) {
      console.error("Delete error:", err);
      alert("Delete failed");
    }
  };

  const dummyPosts = [
    { title: "EduTech Pro — Instagram", desc: "Admission open post · Creative #14 · 4 hashtags", time: "Today 6PM" },
    { title: "RE360 — Facebook + Instagram", desc: "New project launch video · 90s reel · 3 variants", time: "Tomorrow 10AM" },
    { title: "FinanceHub — LinkedIn", desc: "Thought leadership article · Interest rate blog post", time: "Mar 10 9AM" },
  ];

  const displayPosts = calendarPosts.length ? calendarPosts : dummyPosts;

  const handleCalendarUpload = async (e) => {
    if (!selectedClient) { alert("Please select client first"); return; }
    const file = e.target.files[0];
    if (!file) { alert("Please select file"); return; }
    const validTypes = [".xlsx", ".csv"];
    const isValid = validTypes.some(type => file.name.toLowerCase().endsWith(type));
    if (!isValid) { alert("Only Excel (.xlsx) or CSV files allowed"); e.target.value = ""; return; }
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("clientId", selectedClient);
      await apiClient.post("http://localhost:5000/api/content/upload-calendar", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Calendar uploaded successfully");
      queryClient.invalidateQueries(["calendarPosts", selectedClient]);
      e.target.value = "";
    } catch (error) {
      console.error("Upload error:", error);
      alert(error?.response?.data?.message || "Upload failed");
    }
  };

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

            <label className="cursor-pointer px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg text-sm">
              Upload Calendar
              <input type="file" accept=".xlsx,.csv" onChange={handleCalendarUpload} className="hidden" />
            </label>
          </div>
        </div>

        {/* CALENDAR + POSTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* CALENDAR */}
          <div className="relative overflow-visible rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1220] p-6">
            <h3 className="font-semibold mb-6">
              Content Calendar — {today.toLocaleString("default", { month: "long" })} {year}
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
                  <div key={i} className="relative group h-12 flex items-center justify-center rounded-md hover:bg-slate-200 dark:hover:bg-slate-800">
                    {day}
                    {dayPosts.length > 0 && (
                      <>
                        <div className="absolute bottom-1 flex items-center gap-1 bg-indigo-600/20 text-indigo-400 text-[10px] px-1.5 py-[2px] rounded-full">
                          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                          {dayPosts.length}
                        </div>
                        <div className="absolute hidden group-hover:block left-full ml-2 top-1/2 -translate-y-1/2 w-56 bg-white dark:bg-[#0b1220] border border-slate-200 dark:border-white/10 shadow-lg rounded-lg p-3 z-[9999] pointer-events-none">
                          {dayPosts.map((post, index) => (
                            <div key={index} className="mb-2 last:mb-0">
                              <p className="font-medium text-sm">{post.platform}</p>
                              <p className="text-xs text-slate-400">{post.topic}</p>
                              <p className="text-xs text-slate-400">{post.asset}</p>
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
            <h3 className="font-semibold mb-4">Scheduled Posts This Week</h3>
            <div className="space-y-3">
              {displayPosts.map((post, i) => (
                <div key={i} className="flex justify-between p-3 border border-slate-200 dark:border-white/10 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{post.platform || post.title}</p>
                    <p className="text-xs text-slate-400">{post.caption || post.desc}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-400">
                    {post.scheduleDate ? new Date(post.scheduleDate).toLocaleDateString() : post.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ASSET LIBRARY */}
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1220] p-6">

          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold">Asset Library</h3>
              {selectedClient && assets.length > 0 && (
                <p className="text-xs text-slate-400 mt-0.5">{assets.length} asset{assets.length > 1 ? "s" : ""}</p>
              )}
            </div>
            {!selectedClient && (
              <p className="text-xs text-slate-400">Client select karo assets dekhne ke liye</p>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

            {/* Real assets from DB */}
            {assets.map((asset) => (
              <AssetCard
                key={asset._id}
                asset={asset}
                onDelete={handleDeleteAsset}
              />
            ))}

            {/* Upload button */}
            <div
              onClick={() => setOpenAssetModal(true)}
              className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-white/10 rounded-lg text-slate-400 hover:border-indigo-400 hover:text-indigo-400 p-3 cursor-pointer transition-colors min-h-[100px]"
            >
              <Plus size={18} />
              <p className="text-xs mt-1">Upload Asset</p>
            </div>

          </div>

        </div>

      </div>

      {/* Modals */}
      <SchedulePostModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        clients={clients}
      />

      <AssetUploadModal
        open={openAssetModal}
        onClose={() => setOpenAssetModal(false)}
        clients={clients}
        selectedClient={selectedClient}
        onSuccess={() => {
          queryClient.invalidateQueries(["assets", selectedClient]);
        }}
      />

    </>
  );
}