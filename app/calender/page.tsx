// "use client"

// import {
//   Plus,
//   FileImage,
//   FileVideo,
//   File as FileIconLucide,
// } from "lucide-react";
// import { useState, useRef } from "react";
// import type { DragEvent, ChangeEvent } from "react";
// import SchedulePostModal from "@/components/SchedulePostModal";
// import { useGet } from "@/hooks/useGet";
// import { apiClient } from "@/lib/apiClient";
// import { useQueryClient } from "@tanstack/react-query";
// import { Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";




// type Asset = {
//   _id: string;
//   fileUrl?: string;
//   type?: string;
//   title?: string;
//   name?: string;
// };

// type AssetUploadModalProps = {
//   open: boolean;
//   onClose: () => void;
//   clients: Client[];
//   selectedClient?: string;
//   onSuccess?: () => void;
// };

// type Client = {
//   _id: string;
//   profile?: {
//     companyName?: string;
//   };
//   email?: string;
//   phone?: string;
// };

// type ClientResponse = {
//   client: Client;
// };

// type CalendarPost = {
//   platform?: string;
//   topic?: string;
//   asset?: string;
//   caption?: string;
//   title?: string;
//   desc?: string;
//   time?: string;
//   scheduleDate?: string;
//   scheduleTime?: string;
//   postTitle?: string;
// };

// function AssetUploadModal({
//   open,
//   onClose,
//   clients,
//   selectedClient,
//   onSuccess,
// }: AssetUploadModalProps) {
//   const [clientId, setClientId] = useState<string>(selectedClient || "");
//   const [file, setFile] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [uploading, setUploading] = useState<boolean>(false);
//   const [error, setError] = useState<string>("");
//   const fileInputRef = useRef<HTMLInputElement | null>(null);

//   const [caption, setCaption] = useState<string>("");
//   const [platform, setPlatform] = useState<string>("");
//   const [scheduleDate, setScheduleDate] = useState<string>("");
//   const [scheduleTime, setScheduleTime] = useState<string>("");
//   const [postTitle, setPostTitle] = useState<string>("");
//   const [hashtags, setHashtags] = useState<string>("");

//   if (!open) return null;

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const f = e.target.files?.[0];
//     if (!f) return;

//     setFile(f);
//     setError("");

//     if (f.type.startsWith("image/")) {
//       const reader = new FileReader();
//       reader.onload = () => setPreview(reader.result as string);
//       reader.readAsDataURL(f);
//     } else {
//       setPreview(null);
//     }
//   };

//   const handleDrop = (e: DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     const f = e.dataTransfer.files?.[0];
//     if (!f) return;

//     setFile(f);
//     setError("");

//     if (f.type.startsWith("image/")) {
//       const reader = new FileReader();
//       reader.onload = () => setPreview(reader.result as string);
//       reader.readAsDataURL(f);
//     } else {
//       setPreview(null);
//     }
//   };

//   const formatSize = (bytes: number) => {
//     if (bytes < 1024) return `${bytes} B`;
//     if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
//     return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
//   };

//   const getFileIcon = (f: File | null) => {
//     if (!f) return <FileIconLucide size={32} className="text-slate-400" />;
//     if (f.type.startsWith("image/")) {
//       return <FileImage size={32} className="text-indigo-400" />;
//     }
//     if (f.type.startsWith("video/")) {
//       return <FileVideo size={32} className="text-purple-400" />;
//     }
//     return <FileIconLucide size={32} className="text-slate-400" />;
//   };

//   const handleUpload = async () => {
//     if (!clientId) {
//       setError("Client select karo pehle");
//       return;
//     }
//     if (!file) {
//       setError("File select karo");
//       return;
//     }
//     if (!postTitle) {
//       setError("Post title required hai");
//       return;
//     }
//     if (!platform) {
//       setError("Platform select karo");
//       return;
//     }
//     if (!caption) {
//       setError("Caption likhna zaroori hai");
//       return;
//     }
//     if (!scheduleDate || !scheduleTime) {
//       setError("Schedule date aur time dono chahiye");
//       return;
//     }

//     setUploading(true);
//     setError("");

//     try {
//       const formData = new FormData();
//       formData.append("file", file);
//       formData.append("clientId", clientId);
//       formData.append("postTitle", postTitle);
//       formData.append("platform", platform);
//       formData.append("caption", caption);
//       formData.append("scheduleDate", scheduleDate);
//       formData.append("scheduleTime", scheduleTime);
//       formData.append("hashtags", hashtags);

//       await apiClient.post(
//         "http://localhost:5000/api/assets/upload-asset",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       setFile(null);
//       setPreview(null);
//       setCaption("");
//       setPlatform("");
//       setScheduleDate("");
//       setScheduleTime("");
//       setPostTitle("");
//       setHashtags("");

//       if (fileInputRef.current) {
//         fileInputRef.current.value = "";
//       }

//       onSuccess?.();
//       onClose();
//     } catch (err: unknown) {
//       console.error("Asset upload error:", err);

//       const errorMessage =
//         err &&
//         typeof err === "object" &&
//         "response" in err &&
//         err.response &&
//         typeof err.response === "object" &&
//         "data" in err.response &&
//         err.response.data &&
//         typeof err.response.data === "object" &&
//         "message" in err.response.data &&
//         typeof err.response.data.message === "string"
//           ? err.response.data.message
//           : "Upload failed, try again";

//       setError(errorMessage);
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
//       <div
//         className="w-full max-w-lg rounded-xl bg-white p-6 dark:bg-[#0b1220]"
//         onDragOver={(e) => e.preventDefault()}
//         onDrop={handleDrop}
//       >
//         <div className="mb-4 flex items-center justify-between">
//           <h2 className="text-lg font-semibold">Upload Asset</h2>
//           <button onClick={onClose} className="text-sm text-slate-400">
//             Close
//           </button>
//         </div>

//         <div className="space-y-4">
//           <select
//             value={clientId}
//             onChange={(e) => setClientId(e.target.value)}
//             className="w-full rounded-lg border px-3 py-2"
//           >
//             <option value="">Select Client</option>
//             {clients.map((client: Client) => (
//               <option key={client._id} value={client._id}>
//                 {client.profile?.companyName || "Unnamed Client"}
//               </option>
//             ))}
//           </select>

//           <input
//             type="text"
//             value={postTitle}
//             onChange={(e) => setPostTitle(e.target.value)}
//             placeholder="Post title"
//             className="w-full rounded-lg border px-3 py-2"
//           />

//           <input
//             type="text"
//             value={platform}
//             onChange={(e) => setPlatform(e.target.value)}
//             placeholder="Platform"
//             className="w-full rounded-lg border px-3 py-2"
//           />

//           <textarea
//             value={caption}
//             onChange={(e) => setCaption(e.target.value)}
//             placeholder="Caption"
//             className="w-full rounded-lg border px-3 py-2"
//           />

//           <div className="grid grid-cols-2 gap-3">
//             <input
//               type="date"
//               value={scheduleDate}
//               onChange={(e) => setScheduleDate(e.target.value)}
//               className="rounded-lg border px-3 py-2"
//             />
//             <input
//               type="time"
//               value={scheduleTime}
//               onChange={(e) => setScheduleTime(e.target.value)}
//               className="rounded-lg border px-3 py-2"
//             />
//           </div>

//           <input
//             type="text"
//             value={hashtags}
//             onChange={(e) => setHashtags(e.target.value)}
//             placeholder="Hashtags"
//             className="w-full rounded-lg border px-3 py-2"
//           />

//           <input
//             ref={fileInputRef}
//             type="file"
//             onChange={handleFileChange}
//             className="w-full"
//           />

//           {file && (
//             <div className="rounded-lg border p-3">
//               <div className="flex items-center gap-3">
//                 {getFileIcon(file)}
//                 <div>
//                   <p className="text-sm font-medium">{file.name}</p>
//                   <p className="text-xs text-slate-400">{formatSize(file.size)}</p>
//                 </div>
//               </div>

//               {preview && (
//                 <img
//                   src={preview}
//                   alt="Preview"
//                   className="mt-3 h-40 w-full rounded-lg object-cover"
//                 />
//               )}
//             </div>
//           )}

//           {error && <p className="text-sm text-red-500">{error}</p>}

//           <button
//             onClick={handleUpload}
//             disabled={uploading}
//             className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white disabled:opacity-50"
//           >
//             {uploading ? "Uploading..." : "Upload"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function AssetCard({
//   asset,
//   onDelete,
// }: {
//   asset: Asset;
//   onDelete: (assetId: string) => void;
// }) {
//   return (
//     <div className="rounded-lg border p-3">
//       <p className="truncate text-sm font-medium">
//         {asset.title || asset.name || "Untitled Asset"}
//       </p>
//       <button
//         onClick={() => onDelete(asset._id)}
//         className="mt-2 text-xs text-red-500"
//       >
//         Delete
//       </button>
//     </div>
//   );
// }

// export default function ContentBrandPage() {
//   const queryClient = useQueryClient();

//   const [openModal, setOpenModal] = useState<boolean>(false);
//   const [openAssetModal, setOpenAssetModal] = useState<boolean>(false);
//   const [selectedClient, setSelectedClient] = useState<string>("");
//   const [hoveredDate, setHoveredDate] = useState<string | null>(null);

//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth();

//   const firstDay = new Date(year, month, 1).getDay();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   const calendarDays: (string | number)[] = [
//     ...Array(firstDay).fill(""),
//     ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
//   ];

//   const getPlatformIcon = (platform?: string) => {
//   const p = platform?.toLowerCase();

//   switch (p) {
//     case "instagram":
//       return <Instagram size={14} className="text-pink-500" />;
//     case "facebook":
//       return <Facebook size={14} className="text-blue-500" />;
//     case "linkedin":
//       return <Linkedin size={14} className="text-blue-600" />;
//     case "twitter":
//       return <Twitter size={14} className="text-sky-500" />;
//     case "youtube":
//       return <Youtube size={14} className="text-red-500" />;
//     default:
//       return <FileIconLucide size={14} className="text-slate-400" />;
//   }
// };

//   const { data } = useGet<{ clients: Client[] }>(
//     "clients",
//     "http://localhost:5000/api/clients"
//   );

//   const clients = data?.clients || [];

//   const { data: calendarData } = useGet<{ data: CalendarPost[] }>(
//     ["calendarPosts", selectedClient],
//     `http://localhost:5000/api/content/calendar-posts?month=${month + 1}&year=${year}&clientId=${selectedClient}`,
//     { enabled: !!selectedClient }
//   );

//   const calendarPosts = calendarData?.data || [];

//   const { data: assetsData } = useGet<{ data: Asset[] }>(
//     ["assets", selectedClient],
//     `http://localhost:5000/api/assets/assets?clientId=${selectedClient}`,
//     { enabled: !!selectedClient }
//   );

//   const assets = assetsData?.data || [];

//   const handleDeleteAsset = async (assetId: string) => {
//     if (!confirm("Asset delete karna chahte ho?")) return;

//     try {
//       await apiClient.delete(`http://localhost:5000/api/assets/assets/${assetId}`);
//       queryClient.invalidateQueries({ queryKey: ["assets", selectedClient] });
//     } catch (err) {
//       console.error("Delete error:", err);
//       alert("Delete failed");
//     }
//   };

//   const dummyPosts: CalendarPost[] = [
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

//   const handleCalendarUpload = async (e: ChangeEvent<HTMLInputElement>) => {
//     if (!selectedClient) {
//       alert("Please select client first");
//       return;
//     }

//     const file = e.target.files?.[0];
//     if (!file) {
//       alert("Please select file");
//       return;
//     }

//     const validTypes = [".xlsx", ".csv"];
//     const isValid = validTypes.some((type) =>
//       file.name.toLowerCase().endsWith(type)
//     );

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
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       alert("Calendar uploaded successfully");
//       queryClient.invalidateQueries({ queryKey: ["calendarPosts", selectedClient] });
//       e.target.value = "";
//     } catch (error: unknown) {
//       console.error("Upload error:", error);
//       alert("Upload failed");
//     }
//   };



//   return (
//     <>
//       <div className="p-4 md:p-6 lg:p-8 min-h-screen bg-white dark:bg-[#020817] text-slate-900 dark:text-white space-y-6">
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
//               {clients.map((client: Client) => (
//                 <option key={client._id} value={client._id}>
//                   {client.profile?.companyName}
//                 </option>
//               ))}
//             </select>

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

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="relative overflow-visible rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1220] p-6">
//             <h3 className="font-semibold mb-6">
//               Content Calendar — {today.toLocaleString("default", { month: "long" })} {year}
//             </h3>

//             <div className="grid grid-cols-7 text-center text-xs text-slate-400 mb-2">
//               {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d: string) => (
//                 <div key={d}>{d}</div>
//               ))}
//             </div>

//             <div className="grid grid-cols-7 gap-2 text-sm">
//   {calendarDays.map((day: string | number, i: number) => {
//     const fullDate =
//       typeof day === "number"
//         ? `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
//         : null;

//     const dayPosts =
//       fullDate
//         ? calendarPosts.filter((post: CalendarPost) => post.scheduleDate === fullDate)
//         : [];

//         console.log("dayPostsdayPosts => ", dayPosts);
        

//     return (
//       <div
//         key={i}
//         onMouseEnter={() => fullDate && setHoveredDate(fullDate)}
//         onMouseLeave={() => setHoveredDate(null)}
//         className="relative group h-12 flex items-center justify-center rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
//       >
//         {day}

//         {dayPosts.length > 0 && (
//           <div className="absolute bottom-1 flex items-center gap-1 bg-indigo-600/20 text-indigo-400 text-[10px] px-1.5 py-[2px] rounded-full">
//             <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
//             {dayPosts.length}
//           </div>
//         )}

//         {hoveredDate === fullDate && dayPosts.length > 0 && (
//           <div className="absolute z-50 top-14 left-1/2 -translate-x-1/2 w-56 rounded-lg bg-white dark:bg-[#0b1220] border border-slate-200 dark:border-white/10 shadow-lg p-3">
//             <p className="text-xs font-semibold mb-2 text-indigo-500">
//               {dayPosts.length} Post{dayPosts.length > 1 ? "s" : ""}
//             </p>

//             <div className="space-y-2 max-h-40 overflow-y-auto">
//               {dayPosts.map((post: CalendarPost, idx: number) => (
//   <div
//     key={idx}
//     className="flex items-start gap-2 rounded-md p-2 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
//   >
//     {/* 🔥 Platform Icon */}
//     <div className="mt-0.5">
//       {getPlatformIcon(post.platform)}
//     </div>

//     {/* 📄 Content */}
//     <div className="flex-1 min-w-0">
//       <p className="text-xs font-semibold text-slate-800 dark:text-white truncate">
//         {post.postTitle || "Untitled Post"}
//       </p>

//       <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
//         {post.caption}
//       </p>

//       <div className="flex items-center justify-between mt-1">
//         {/* ⏰ Time */}
//         <span className="text-[10px] text-indigo-500 font-medium">
//           {post.scheduleTime}
//         </span>

//         {/* 🏷 Platform name (optional small) */}
//         <span className="text-[10px] text-slate-400 capitalize">
//           {post.platform}
//         </span>
//       </div>
//     </div>
//   </div>
// ))}
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   })}
// </div>
//           </div>

//           <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1220] p-6">
//             <h3 className="font-semibold mb-4">Scheduled Posts This Week</h3>
//             <div className="space-y-3">
//               {displayPosts.map((post: CalendarPost, i: number) => (
//                 <div
//                   key={i}
//                   className="flex justify-between p-3 border border-slate-200 dark:border-white/10 rounded-lg"
//                 >
//                   <div>
//                     <p className="font-medium text-sm">{post.platform || post.title}</p>
//                     <p className="text-xs text-slate-400">{post.caption || post.desc}</p>
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

//         <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1220] p-6">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className="font-semibold">Asset Library</h3>
//               {selectedClient && assets.length > 0 && (
//                 <p className="text-xs text-slate-400 mt-0.5">
//                   {assets.length} asset{assets.length > 1 ? "s" : ""}
//                 </p>
//               )}
//             </div>

//             {!selectedClient && (
//               <p className="text-xs text-slate-400">
//                 Client select karo assets dekhne ke liye
//               </p>
//             )}
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//             {assets.map((asset: Asset) => (
//               <AssetCard key={asset._id} asset={asset} onDelete={handleDeleteAsset} />
//             ))}

//             <div
//               onClick={() => setOpenAssetModal(true)}
//               className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-white/10 rounded-lg text-slate-400 hover:border-indigo-400 hover:text-indigo-400 p-3 cursor-pointer transition-colors min-h-[100px]"
//             >
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

//       <AssetUploadModal
//         open={openAssetModal}
//         onClose={() => setOpenAssetModal(false)}
//         clients={clients}
//         selectedClient={selectedClient}
//         onSuccess={() => {
//           queryClient.invalidateQueries({ queryKey: ["assets", selectedClient] });
//         }}
//       />
//     </>
//   );
// }

"use client";

import {
  Plus,
  FileImage,
  FileVideo,
  File as FileIconLucide,
  CalendarDays,
  Upload,
  Sparkles,
  Clock3,
  FolderOpen,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Globe,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import type { DragEvent, ChangeEvent } from "react";
import SchedulePostModal from "@/components/SchedulePostModal";
import { useGet } from "@/hooks/useGet";
import { apiClient } from "@/lib/apiClient";
import { useQueryClient } from "@tanstack/react-query";

type Asset = {
  _id: string;
  fileUrl?: string;
  type?: string;
  title?: string;
  name?: string;
};

type AssetUploadModalProps = {
  open: boolean;
  onClose: () => void;
  clients: Client[];
  selectedClient?: string;
  onSuccess?: () => void;
};

type Client = {
  _id: string;
  profile?: {
    companyName?: string;
  };
  email?: string;
  phone?: string;
};

type CalendarPost = {
  platform?: string;
  topic?: string;
  asset?: string;
  caption?: string;
  title?: string;
  desc?: string;
  time?: string;
  scheduleDate?: string;
  scheduleTime?: string;
  postTitle?: string;
};

function getPlatformMeta(platform?: string) {
  const p = platform?.toLowerCase();
  switch (p) {
    case "instagram":
      return {
        label: "Instagram",
        icon: <Instagram size={14} className="text-orange-700 dark:text-orange-300" />,
      };
    case "facebook":
      return {
        label: "Facebook",
        icon: <Facebook size={14} className="text-orange-700 dark:text-orange-300" />,
      };
    case "linkedin":
      return {
        label: "LinkedIn",
        icon: <Linkedin size={14} className="text-orange-700 dark:text-orange-300" />,
      };
    case "twitter":
      return {
        label: "Twitter",
        icon: <Twitter size={14} className="text-orange-700 dark:text-orange-300" />,
      };
    case "youtube":
      return {
        label: "YouTube",
        icon: <Youtube size={14} className="text-orange-700 dark:text-orange-300" />,
      };
    default:
      return {
        label: platform || "Other",
        icon: <Globe size={14} className="text-orange-700 dark:text-orange-300" />,
      };
  }
}

function AssetUploadModal({
  open,
  onClose,
  clients,
  selectedClient,
  onSuccess,
}: AssetUploadModalProps) {
  const [clientId, setClientId] = useState<string>(selectedClient || "");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [caption, setCaption] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [scheduleDate, setScheduleDate] = useState<string>("");
  const [scheduleTime, setScheduleTime] = useState<string>("");
  const [postTitle, setPostTitle] = useState<string>("");
  const [hashtags, setHashtags] = useState<string>("");

  if (!open) return null;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setError("");
    if (f.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(f);
    } else {
      setPreview(null);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    setFile(f);
    setError("");
    if (f.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(f);
    } else {
      setPreview(null);
    }
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getFileIcon = (f: File | null) => {
    if (!f) return <FileIconLucide size={28} className="text-slate-400" />;
    if (f.type.startsWith("image/")) return <FileImage size={28} className="text-orange-600" />;
    if (f.type.startsWith("video/")) return <FileVideo size={28} className="text-orange-600" />;
    return <FileIconLucide size={28} className="text-slate-400" />;
  };

  const handleUpload = async () => {
    if (!clientId) { setError("Client select karo pehle"); return; }
    if (!file) { setError("File select karo"); return; }
    if (!postTitle) { setError("Post title required hai"); return; }
    if (!platform) { setError("Platform select karo"); return; }
    if (!caption) { setError("Caption likhna zaroori hai"); return; }
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
      formData.append("hashtags", hashtags);

      await apiClient.post("http://localhost:5000/api/assets/upload-asset", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setFile(null);
      setPreview(null);
      setCaption("");
      setPlatform("");
      setScheduleDate("");
      setScheduleTime("");
      setPostTitle("");
      setHashtags("");
      if (fileInputRef.current) fileInputRef.current.value = "";

      onSuccess?.();
      onClose();
    } catch (err: unknown) {
      const errorMessage =
        err &&
        typeof err === "object" &&
        "response" in err &&
        err.response &&
        typeof err.response === "object" &&
        "data" in err.response &&
        err.response.data &&
        typeof err.response.data === "object" &&
        "message" in err.response.data &&
        typeof err.response.data.message === "string"
          ? err.response.data.message
          : "Upload failed, try again";
      setError(errorMessage);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
      <div
        className="w-full max-w-2xl rounded-3xl border border-orange-100 bg-white shadow-2xl dark:border-white/10 dark:bg-[#07130f]"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <div className="flex items-center justify-between border-b border-orange-100 px-6 py-5 dark:border-white/10">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Upload Asset</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Create and attach a branded content asset.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-500 transition hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
          >
            Close
          </button>
        </div>

        <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <select
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100 dark:border-white/10 dark:bg-[#0b1914] dark:text-white dark:focus:ring-orange-500/10"
            >
              <option value="">Select Client</option>
              {clients.map((client: Client) => (
                <option key={client._id} value={client._id}>
                  {client.profile?.companyName || "Unnamed Client"}
                </option>
              ))}
            </select>

            <input
              type="text"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              placeholder="Post title"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100 dark:border-white/10 dark:bg-[#0b1914] dark:text-white dark:focus:ring-orange-500/10"
            />

            <input
              type="text"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              placeholder="Platform"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100 dark:border-white/10 dark:bg-[#0b1914] dark:text-white dark:focus:ring-orange-500/10"
            />

            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Caption"
              rows={4}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100 dark:border-white/10 dark:bg-[#0b1914] dark:text-white dark:focus:ring-orange-500/10"
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100 dark:border-white/10 dark:bg-[#0b1914] dark:text-white dark:focus:ring-orange-500/10"
              />
              <input
                type="time"
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100 dark:border-white/10 dark:bg-[#0b1914] dark:text-white dark:focus:ring-orange-500/10"
              />
            </div>

            <input
              type="text"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              placeholder="Hashtags"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100 dark:border-white/10 dark:bg-[#0b1914] dark:text-white dark:focus:ring-orange-500/10"
            />

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300">
                {error}
              </div>
            )}

            <button
              onClick={handleUpload}
              disabled={uploading}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-orange-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {uploading ? "Uploading..." : "Upload Asset"}
            </button>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-dashed border-orange-200 bg-orange-50/60 p-5 dark:border-orange-500/20 dark:bg-orange-500/5">
              <p className="mb-3 text-sm font-semibold text-slate-800 dark:text-white">
                Media Upload
              </p>
              <label className="flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-orange-300 bg-white px-4 text-center transition hover:border-orange-400 hover:bg-orange-50 dark:border-orange-500/20 dark:bg-[#0b1914] dark:hover:bg-orange-500/5">
                <div className="mb-3 rounded-2xl bg-orange-100 p-3 dark:bg-orange-500/10">
                  {getFileIcon(file)}
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Drag & drop or browse file
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Image, video, or file asset
                </p>
                <input ref={fileInputRef} type="file" onChange={handleFileChange} className="hidden" />
              </label>
            </div>

            {file && (
              <div className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#0b1914]">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-orange-100 p-3 dark:bg-orange-500/10">
                    {getFileIcon(file)}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-slate-800 dark:text-white">
                      {file.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {formatSize(file.size)}
                    </p>
                  </div>
                </div>
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="mt-4 h-48 w-full rounded-2xl object-cover"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AssetCard({
  asset,
  onDelete,
}: {
  asset: Asset;
  onDelete: (assetId: string) => void;
}) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-lg dark:border-white/10 dark:bg-[#07130f] dark:hover:border-orange-500/20">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="rounded-2xl bg-orange-100 p-3 dark:bg-orange-500/10">
            <FolderOpen size={18} className="text-orange-700 dark:text-orange-300" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-800 dark:text-white">
              {asset.title || asset.name || "Untitled Asset"}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Library item</p>
          </div>
        </div>
        <button
          onClick={() => onDelete(asset._id)}
          className="rounded-xl px-2 py-1 text-xs text-red-500 transition hover:bg-red-50 dark:hover:bg-red-500/10"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function DayPostItem({ post }: { post: CalendarPost }) {
  const meta = getPlatformMeta(post.platform);
  return (
    <div className="rounded-2xl border border-orange-100 bg-orange-50/70 p-3 transition hover:bg-orange-100/70 dark:border-orange-500/10 dark:bg-orange-500/5 dark:hover:bg-orange-500/10">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-500/10">
          {meta.icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <p className="truncate text-sm font-semibold text-slate-800 dark:text-white">
              {post.postTitle || "Untitled Post"}
            </p>
            <span className="shrink-0 rounded-full bg-white px-2 py-1 text-[10px] font-medium text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">
              {post.scheduleTime || "--:--"}
            </span>
          </div>
          <p className="mt-1 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
            {post.caption || "No caption available"}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/10 px-2 py-1 text-[10px] font-medium text-orange-700 dark:text-orange-300">
              {meta.icon}
              {meta.label}
            </span>
            {post.topic ? (
              <span className="text-[10px] text-slate-500 dark:text-slate-400">{post.topic}</span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContentBrandPage() {
  const queryClient = useQueryClient();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openAssetModal, setOpenAssetModal] = useState<boolean>(false);
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  // ✅ FIX: Mon-first calendar offset
  // JS getDay(): 0=Sun, 1=Mon, ..., 6=Sat
  // We want: Mon=0, Tue=1, ..., Sun=6
  const jsFirstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const firstDayOffset = jsFirstDay === 0 ? 6 : jsFirstDay - 1; // convert to Mon-first

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Build calendar grid: empty strings for offset cells, then day numbers
  const calendarDays: (string | number)[] = [
    ...Array(firstDayOffset).fill(""),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const { data } = useGet<{ clients: Client[] }>("clients", "http://localhost:5000/api/clients");
  const clients = data?.clients || [];

  const { data: calendarData } = useGet<{ data: CalendarPost[] }>(
    ["calendarPosts", selectedClient],
    `http://localhost:5000/api/content/calendar-posts?month=${month + 1}&year=${year}&clientId=${selectedClient}`,
    { enabled: !!selectedClient }
  );
  const calendarPosts = calendarData?.data || [];

  const { data: assetsData } = useGet<{ data: Asset[] }>(
    ["assets", selectedClient],
    `http://localhost:5000/api/assets/assets?clientId=${selectedClient}`,
    { enabled: !!selectedClient }
  );
  const assets = assetsData?.data || [];

  const handleDeleteAsset = async (assetId: string) => {
    if (!confirm("Asset delete karna chahte ho?")) return;
    try {
      await apiClient.delete(`http://localhost:5000/api/assets/assets/${assetId}`);
      queryClient.invalidateQueries({ queryKey: ["assets", selectedClient] });
    } catch (err) {
      console.error("Delete error:", err);
      alert("Delete failed");
    }
  };

  const dummyPosts: CalendarPost[] = [
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

  const handleCalendarUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!selectedClient) {
      alert("Please select client first");
      return;
    }
    const file = e.target.files?.[0];
    if (!file) {
      alert("Please select file");
      return;
    }
    const validTypes = [".xlsx", ".csv"];
    const isValid = validTypes.some((type) => file.name.toLowerCase().endsWith(type));
    if (!isValid) {
      alert("Only Excel (.xlsx) or CSV files allowed");
      e.target.value = "";
      return;
    }
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("clientId", selectedClient);
      await apiClient.post("http://localhost:5000/api/content/upload-calendar", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Calendar uploaded successfully");
      queryClient.invalidateQueries({ queryKey: ["calendarPosts", selectedClient] });
      e.target.value = "";
    } catch (error: unknown) {
      console.error("Upload error:", error);
      alert("Upload failed");
    }
  };

  const selectedDatePosts = useMemo(() => {
    if (!selectedDate) return [];
    return calendarPosts.filter((post) => post.scheduleDate === selectedDate);
  }, [calendarPosts, selectedDate]);

  const totalScheduled = calendarPosts.length;
  const activeDays = new Set(calendarPosts.map((post) => post.scheduleDate).filter(Boolean)).size;
  const totalAssets = assets.length;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-slate-50 p-4 text-slate-900 dark:from-[#04110d] dark:via-[#061611] dark:to-[#07130f] dark:text-white md:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl space-y-6">

          {/* ── Header Card ── */}
          <div className="overflow-hidden rounded-[28px] border border-orange-100 bg-white shadow-sm dark:border-white/10 dark:bg-[#07130f]">
            <div className="flex flex-col gap-5 p-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">
                  <Sparkles size={14} />
                  Content Control Center
                </div>
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Content & Brand</h1>
                <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
                  Manage calendar uploads, scheduled posts, and brand assets from one clean workspace.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <select
                  value={selectedClient}
                  onChange={(e) => {
                    setSelectedClient(e.target.value);
                    setSelectedDate(null);
                  }}
                  className="min-w-[220px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100 dark:border-white/10 dark:bg-[#0b1914] dark:text-white dark:focus:ring-orange-500/10"
                >
                  <option value="">Select Client</option>
                  {clients.map((client: Client) => (
                    <option key={client._id} value={client._id}>
                      {client.profile?.companyName || "Unnamed Client"}
                    </option>
                  ))}
                </select>

                <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-orange-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-orange-700">
                  <Upload size={16} />
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

            {/* Stats Row */}
            <div className="grid grid-cols-1 gap-3 border-t border-orange-100 bg-orange-50/50 p-4 dark:border-white/10 dark:bg-orange-500/5 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-4 dark:bg-[#0b1914]">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Scheduled Posts</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{totalScheduled}</p>
              </div>
              <div className="rounded-2xl bg-white p-4 dark:bg-[#0b1914]">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Active Posting Days</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{activeDays}</p>
              </div>
              <div className="rounded-2xl bg-white p-4 dark:bg-[#0b1914]">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Asset Library</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{totalAssets}</p>
              </div>
            </div>
          </div>

          {/* ── Main Grid ── */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.4fr_0.9fr]">

            {/* ── Calendar ── */}
            <div className="rounded-[28px] border border-orange-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#07130f] md:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Content Calendar</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {today.toLocaleString("default", { month: "long" })} {year}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">
                  <CalendarDays size={14} />
                  Month View
                </div>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-slate-400">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                  <div key={d} className="py-2">{d}</div>
                ))}
              </div>

              {/* ✅ FIXED Calendar Grid */}
              <div className="mt-1 grid grid-cols-7 gap-1">
                {calendarDays.map((day: string | number, i: number) => {
                  // Empty offset cell
                  if (typeof day !== "number") {
                    return <div key={`empty-${i}`} className="min-h-[88px]" />;
                  }

                  const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

                  const dayPosts = calendarPosts.filter(
                    (post: CalendarPost) => post.scheduleDate === fullDate
                  );

                  const isToday =
                    today.getDate() === day &&
                    today.getMonth() === month &&
                    today.getFullYear() === year;

                  const isSelected = selectedDate === fullDate;

                  return (
                    <div
                      key={fullDate}
                      onMouseEnter={() => setHoveredDate(fullDate)}
                      onMouseLeave={() => setHoveredDate(null)}
                      onClick={() => setSelectedDate(isSelected ? null : fullDate)}
                      className={[
                        "relative min-h-[88px] cursor-pointer rounded-2xl border p-1.5 transition",
                        "border-slate-200 bg-white hover:border-orange-300 hover:bg-orange-50",
                        "dark:border-white/10 dark:bg-[#0b1914] dark:hover:border-orange-500/20 dark:hover:bg-orange-500/5",
                        isSelected ? "ring-2 ring-orange-400 border-orange-300 dark:border-orange-500/30" : "",
                      ].join(" ")}
                    >
                      {/* Date Number */}
                      <div className="flex items-start justify-between">
                        <span
                          className={[
                            "flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium",
                            isToday
                              ? "bg-orange-600 text-white"
                              : "text-slate-700 dark:text-slate-200",
                          ].join(" ")}
                        >
                          {day}
                        </span>

                        {dayPosts.length > 0 && (
                          <span className="rounded-full bg-orange-100 px-1.5 py-0.5 text-[9px] font-medium text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">
                            {dayPosts.length}
                          </span>
                        )}
                      </div>

                      {/* Post Pills */}
                      <div className="mt-1.5 space-y-0.5">
                        {dayPosts.slice(0, 2).map((post, idx) => {
                          const meta = getPlatformMeta(post.platform);
                          return (
                            <div
                              key={idx}
                              className="flex items-center gap-1 rounded-lg bg-orange-50 px-1.5 py-0.5 text-[9px] text-orange-700 dark:bg-orange-500/10 dark:text-orange-300"
                            >
                              {meta.icon}
                              <span className="truncate">{post.postTitle || meta.label}</span>
                            </div>
                          );
                        })}
                        {dayPosts.length > 2 && (
                          <p className="px-1 text-[9px] text-slate-400 dark:text-slate-500">
                            +{dayPosts.length - 2} more
                          </p>
                        )}
                      </div>

                      {/* Hover Tooltip */}
                      {hoveredDate === fullDate && dayPosts.length > 0 && (
                        <div className="absolute left-1/2 top-[92px] z-50 w-72 -translate-x-1/2 rounded-3xl border border-orange-100 bg-white p-4 shadow-2xl dark:border-white/10 dark:bg-[#081510]">
                          <div className="mb-3 flex items-center justify-between">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">
                              {dayPosts.length} Scheduled Post{dayPosts.length > 1 ? "s" : ""}
                            </p>
                            <span className="rounded-full bg-orange-100 px-2 py-1 text-[10px] font-medium text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">
                              {fullDate}
                            </span>
                          </div>
                          <div className="max-h-72 space-y-2 overflow-y-auto pr-1">
                            {dayPosts.map((post, idx) => (
                              <DayPostItem key={idx} post={post} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Right Column ── */}
            <div className="space-y-6">

              {/* Day Overview */}
              <div className="rounded-[28px] border border-orange-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#07130f] md:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Day Overview</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Click any date to inspect scheduled posts.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-orange-100 p-2 dark:bg-orange-500/10">
                    <Clock3 size={18} className="text-orange-700 dark:text-orange-300" />
                  </div>
                </div>

                {selectedDate ? (
                  <div>
                    <div className="mb-4 rounded-2xl bg-orange-50 px-4 py-3 dark:bg-orange-500/5">
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Selected Date</p>
                      <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-white">
                        {selectedDate}
                      </p>
                    </div>
                    {selectedDatePosts.length > 0 ? (
                      <div className="space-y-3">
                        {selectedDatePosts.map((post, idx) => (
                          <DayPostItem key={idx} post={post} />
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-dashed border-slate-200 px-4 py-10 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
                        No posts found for this date.
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-200 px-4 py-10 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
                    Select a date from calendar to view detailed posts.
                  </div>
                )}
              </div>

              {/* Scheduled Posts */}
              <div className="rounded-[28px] border border-orange-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#07130f] md:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Scheduled Posts</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Quick list of upcoming content.
                    </p>
                  </div>
                  <button
                    onClick={() => setOpenModal(true)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm font-medium text-orange-700 transition hover:bg-orange-100 dark:border-orange-500/20 dark:bg-orange-500/5 dark:text-orange-300 dark:hover:bg-orange-500/10"
                  >
                    <Plus size={16} />
                    Schedule
                  </button>
                </div>

                <div className="space-y-3">
                  {displayPosts.map((post: CalendarPost, i: number) => {
                    const meta = getPlatformMeta(post.platform || post.title);
                    return (
                      <div
                        key={i}
                        className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-orange-300 hover:bg-orange-50 dark:border-white/10 dark:bg-[#0b1914] dark:hover:border-orange-500/20 dark:hover:bg-orange-500/5"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex min-w-0 items-start gap-3">
                            <div className="rounded-2xl bg-orange-100 p-2.5 dark:bg-orange-500/10">
                              {meta.icon}
                            </div>
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold text-slate-800 dark:text-white">
                                {post.postTitle || post.platform || post.title}
                              </p>
                              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                {post.caption || post.desc}
                              </p>
                            </div>
                          </div>
                          <span className="shrink-0 rounded-full bg-orange-100 px-2.5 py-1 text-[10px] font-medium text-orange-700 dark:bg-orange-500/10 dark:text-orange-300">
                            {post.scheduleDate
                              ? new Date(post.scheduleDate).toLocaleDateString()
                              : post.time}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

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
          queryClient.invalidateQueries({ queryKey: ["assets", selectedClient] });
        }}
      />
    </>
  );
}