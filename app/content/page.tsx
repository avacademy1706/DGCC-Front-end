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

function AssetUploadModal({ open, onClose, clients, selectedClient, onSuccess }) {
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

  const handleClose = () => {
    setFile(null); setPreview(null); setError("");
    setCaption(""); setPlatform(""); setScheduleDate("");
    setScheduleTime(""); setPostTitle(""); setHashtags("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1220] shadow-2xl max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-white/10 shrink-0">
          <div>
            <h2 className="font-semibold text-base">Upload Asset</h2>
            <p className="text-xs text-slate-400 mt-0.5">File + post details — client ko review ke liye jayega</p>
          </div>
          <button onClick={handleClose} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10">
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 space-y-4 overflow-y-auto flex-1">

          {/* Client Select */}
          <div>
            <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 block">Client *</label>
            <select
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-[#111827] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Client</option>
              {clients.map((c) => (
                <option key={c._id} value={c._id}>{c.profile?.companyName}</option>
              ))}
            </select>
          </div>

          {/* Post Title */}
          <div>
            <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 block">Post Title *</label>
            <input
              type="text"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              placeholder="e.g. Diwali Sale Announcement"
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-[#111827] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Platform */}
          <div>
            <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 block">Platform *</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-[#111827] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Platform</option>
              <option value="instagram">📸 Instagram</option>
              <option value="facebook">👥 Facebook</option>
              <option value="linkedin">💼 LinkedIn</option>
              <option value="twitter">🐦 Twitter / X</option>
            </select>
          </div>

          {/* Caption */}
          <div>
            <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 block">Caption *</label>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Post ka caption yahan likhein..."
              rows={3}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-[#111827] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </div>

          {/* Hashtags */}
          <div>
            <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 block">
              Hashtags <span className="text-slate-400 font-normal">(comma-separated)</span>
            </label>
            <input
              type="text"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              placeholder="#BrandMarketing, #DigitalIndia, #Sale2024"
              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-[#111827] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Schedule Date + Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 block">Schedule Date *</label>
              <input
                type="date"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-[#111827] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 block">Schedule Time *</label>
              <input
                type="time"
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-[#111827] text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Drop Zone */}
          <div>
            <label className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 block">Media File *</label>
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => fileInputRef.current?.click()}
              className="cursor-pointer border-2 border-dashed border-slate-300 dark:border-white/10 rounded-xl p-5 flex flex-col items-center gap-3 hover:border-indigo-400 hover:bg-indigo-50/30 dark:hover:bg-indigo-500/5 transition-colors"
            >
              {preview ? (
                <img src={preview} alt="Preview" className="h-24 object-contain rounded-lg" />
              ) : (
                <>
                  {getFileIcon(file)}
                  <div className="text-center">
                    <p className="text-sm font-medium">{file ? file.name : "Click ya drag & drop karo"}</p>
                    <p className="text-xs text-slate-400 mt-1">
                      {file ? formatSize(file.size) : "Images, videos, SVG, PDF · Max 50MB"}
                    </p>
                  </div>
                </>
              )}
              {file && !preview && (
                <p className="text-xs text-slate-500 font-medium">{file.name} — {formatSize(file.size)}</p>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,video/*,.pdf,.svg,.ai,.psd"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="text-xs text-red-500 bg-red-50 dark:bg-red-500/10 px-3 py-2 rounded-lg">{error}</p>
          )}
        </div>

        {/* Footer */}
        <div className="flex gap-3 px-5 pb-5 pt-3 border-t border-slate-200 dark:border-white/10 shrink-0">
          <button
            onClick={handleClose}
            className="flex-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-white/10 text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={uploading || !file || !clientId}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm transition"
          >
            {uploading ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Uploading...
              </>
            ) : (
              <><Upload size={14} /> Upload Asset</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Asset Card ───────────────────────────────────────────────────────────────

// function AssetCard({ asset, onDelete }) {

//   const isImage = asset.mimeType?.startsWith("image/") || asset.resourceType === "image";
//   const isVideo = asset.mimeType?.startsWith("video/") || asset.resourceType === "video";

//   const formatSize = (bytes) => {
//     if (!bytes) return "";
//     if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + " KB";
//     return (bytes / (1024 * 1024)).toFixed(1) + " MB";
//   };

//   const dimensions = asset.width && asset.height
//     ? `${asset.width}×${asset.height}`
//     : null;

//   return (
//     <div className="group relative rounded-lg border border-slate-200 dark:border-white/10 p-3 overflow-hidden">

//       {/* Thumbnail */}
//       <div className="h-20 rounded overflow-hidden bg-slate-100 dark:bg-white/5 flex items-center justify-center">
//         {isImage ? (
//           <img
//             src={asset.url}
//             alt={asset.name}
//             className="h-full w-full object-cover"
//           />
//         ) : isVideo ? (
//           <video
//             src={asset.url}
//             className="h-full w-full object-cover"
//             muted
//           />
//         ) : (
//           <File size={28} className="text-slate-400" />
//         )}
//       </div>

//       {/* Delete Button — hover pe dikhta hai */}
//       <button
//         onClick={() => onDelete(asset._id)}
//         className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition p-1 rounded bg-red-500/90 text-white"
//         title="Delete"
//       >
//         <Trash2 size={12} />
//       </button>

//       <p className="text-sm mt-2 font-medium truncate" title={asset.name}>
//         {asset.name}
//       </p>
//       <p className="text-xs text-slate-400">
//         {[dimensions, formatSize(asset.size)].filter(Boolean).join(" · ")}
//       </p>

//     </div>
//   );
// }

function AssetCard({ asset, onDelete }) {
  const isImage = asset.mimeType?.startsWith("image/") || asset.resourceType === "image";
  const isVideo = asset.mimeType?.startsWith("video/") || asset.resourceType === "video";

  const formatSize = (bytes) => {
    if (!bytes) return "";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  return (
    <div className="group relative rounded-lg border border-slate-200 dark:border-white/10 p-3 overflow-hidden">
      <div className="h-24 rounded overflow-hidden bg-slate-100 dark:bg-white/5 flex items-center justify-center">
        {isImage ? (
          <img src={asset.url} alt={asset.name} className="h-full w-full object-cover" />
        ) : isVideo ? (
          <video src={asset.url} className="h-full w-full object-cover" muted />
        ) : (
          <File size={28} className="text-slate-400" />
        )}
      </div>

      <button
        onClick={() => onDelete(asset._id)}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition p-1 rounded bg-red-500/90 text-white"
        title="Delete"
      >
        <Trash2 size={12} />
      </button>

      <p className="text-sm mt-2 font-medium truncate">{asset.postTitle}</p>
      <p className="text-xs text-slate-400 capitalize">{asset.platform}</p>
      <p className="text-xs text-slate-500 mt-1 line-clamp-2">{asset.caption}</p>

      <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
        <span>{new Date(asset.scheduledAt).toLocaleString()}</span>
        <span className="capitalize">{asset.status}</span>
      </div>

      <p className="text-[11px] text-slate-400 mt-1">
        {formatSize(asset.size)}
      </p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

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