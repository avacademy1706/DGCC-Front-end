// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import { useGet } from "@/hooks/useGet";
// import { apiClient } from "../../lib/apiClient";
// import { cn } from "@/lib/utils";
// import {
//   Search,
//   RefreshCw,
//   CheckCircle2,
//   Pencil,
//   Clock3,
//   Trash2,
//   Save,
//   X,
//   Filter,
//   Upload,
//   Plus,
//   FileImage,
//   Video,
//   RotateCcw,
//   History,
// } from "lucide-react";

// type Platform = "instagram" | "twitter" | "linkedin" | "facebook";
// type Status = "pending" | "approved" | "revision" | "resubmitted";

// interface RevisionHistoryItem {
//   _id?: string;
//   action: "revision_requested" | "resubmitted" | "approved";
//   note?: string;
//   actedBy: "client" | "admin" | "system";
//   actorName?: string;
//   previousStatus: Status;
//   newStatus: Status;
//   snapshot?: {
//     postTitle?: string;
//     caption?: string;
//     hashtags?: string[];
//     scheduledAt?: string;
//     platform?: Platform;
//     url?: string;
//   };
//   createdAt?: string;
//   updatedAt?: string;
// }

// interface ContentPost {
//   _id: string;
//   clientId: string;
//   name: string;
//   url: string;
//   publicId: string;
//   mimeType?: string;
//   resourceType?: string;
//   size?: number;
//   width?: number;
//   height?: number;
//   postTitle: string;
//   platform: Platform;
//   caption: string;
//   hashtags: string[];
//   scheduledAt: string;
//   status: Status;
//   revisionNote?: string;
//   reviewedAt?: string | null;
//   createdBy?: string;
//   createdAt?: string;
//   updatedAt?: string;
//   revisionCount?: number;
//   revisionHistory?: RevisionHistoryItem[];
// }

// const PLATFORM_META: Record<
//   Platform,
//   { label: string; color: string; bg: string; icon: string }
// > = {
//   instagram: {
//     label: "Instagram",
//     color: "text-pink-600",
//     bg: "bg-pink-50 dark:bg-pink-500/10",
//     icon: "📸",
//   },
//   twitter: {
//     label: "Twitter / X",
//     color: "text-sky-500",
//     bg: "bg-sky-50 dark:bg-sky-500/10",
//     icon: "🐦",
//   },
//   linkedin: {
//     label: "LinkedIn",
//     color: "text-blue-600",
//     bg: "bg-blue-50 dark:bg-blue-500/10",
//     icon: "💼",
//   },
//   facebook: {
//     label: "Facebook",
//     color: "text-indigo-600",
//     bg: "bg-indigo-50 dark:bg-indigo-500/10",
//     icon: "👥",
//   },
// };

// const STATUS_MAP: Record<
//   Status,
//   { label: string; bg: string; text: string; dot: string }
// > = {
//   pending: {
//     label: "Pending",
//     bg: "bg-amber-100 dark:bg-amber-500/10",
//     text: "text-amber-700 dark:text-amber-300",
//     dot: "bg-amber-400",
//   },
//   approved: {
//     label: "Approved",
//     bg: "bg-emerald-100 dark:bg-emerald-500/10",
//     text: "text-emerald-700 dark:text-emerald-300",
//     dot: "bg-emerald-500",
//   },
//   revision: {
//     label: "Revision",
//     bg: "bg-red-100 dark:bg-red-500/10",
//     text: "text-red-700 dark:text-red-300",
//     dot: "bg-red-500",
//   },
//   resubmitted: {
//     label: "Resubmitted",
//     bg: "bg-indigo-100 dark:bg-indigo-500/10",
//     text: "text-indigo-700 dark:text-indigo-300",
//     dot: "bg-indigo-500",
//   },
// };

// function StatusBadge({ status }: { status: Status }) {
//   const s = STATUS_MAP[status];
//   return (
//     <span
//       className={cn(
//         "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold",
//         s.bg,
//         s.text
//       )}
//     >
//       <span className={cn("w-1.5 h-1.5 rounded-full", s.dot)} />
//       {s.label}
//     </span>
//   );
// }

// function isValidPost(item: any): item is ContentPost {
//   return (
//     item &&
//     typeof item._id === "string" &&
//     typeof item.url === "string" &&
//     typeof item.postTitle === "string" &&
//     typeof item.platform === "string" &&
//     typeof item.caption === "string" &&
//     typeof item.scheduledAt === "string" &&
//     ["instagram", "twitter", "linkedin", "facebook"].includes(item.platform) &&
//     ["pending", "approved", "revision", "resubmitted"].includes(item.status)
//   );
// }

// function toLocalInputValue(iso?: string) {
//   if (!iso) return "";
//   const d = new Date(iso);
//   const offset = d.getTimezoneOffset();
//   const local = new Date(d.getTime() - offset * 60 * 1000);
//   return local.toISOString().slice(0, 16);
// }

// function formatHistoryAction(action: RevisionHistoryItem["action"]) {
//   if (action === "revision_requested") return "Revision Requested";
//   if (action === "resubmitted") return "Resubmitted";
//   if (action === "approved") return "Approved";
//   return action;
// }

// export default function AdminContentManagementPage() {
//   const clientId = "69b3bc6ec6508ab652efed33";

//   const [posts, setPosts] = useState<ContentPost[]>([]);
//   const [activePostId, setActivePostId] = useState("");
//   const [search, setSearch] = useState("");
//   const [platformFilter, setPlatformFilter] = useState<"all" | Platform>("all");
//   const [statusFilter, setStatusFilter] = useState<"all" | Status>("all");
//   const [saving, setSaving] = useState(false);
//   const [deleting, setDeleting] = useState(false);
//   const [revisionLoading, setRevisionLoading] = useState(false);
//   const [resubmitLoading, setResubmitLoading] = useState(false);

//   const [uploadOpen, setUploadOpen] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement | null>(null);

//   const [uploadForm, setUploadForm] = useState({
//     file: null as File | null,
//     postTitle: "",
//     platform: "instagram" as Platform,
//     caption: "",
//     hashtags: "",
//     scheduledAt: "",
//     createdBy: "Admin Team",
//   });

//   const [editForm, setEditForm] = useState({
//     postTitle: "",
//     caption: "",
//     hashtags: "",
//     scheduledAt: "",
//     platform: "instagram" as Platform,
//     status: "pending" as Status,
//     revisionNote: "",
//     newFile: null as File | null,
//   });

//   const { data, error, refetch, loading } = useGet(
//     ["review-feed", clientId],
//     `/assets/review-feed?clientId=${clientId}`,
//     { enabled: !!clientId }
//   );

//   useEffect(() => {
//     const validPosts = (data?.data || []).filter(isValidPost);
//     setPosts(validPosts);

//     if (validPosts.length > 0) {
//       setActivePostId((prev) =>
//         validPosts.some((p) => p._id === prev) ? prev : validPosts[0]._id
//       );
//     } else {
//       setActivePostId("");
//     }
//   }, [data]);

//   const filteredPosts = useMemo(() => {
//     let list = [...posts];

//     if (platformFilter !== "all") {
//       list = list.filter((p) => p.platform === platformFilter);
//     }

//     if (statusFilter !== "all") {
//       list = list.filter((p) => p.status === statusFilter);
//     }

//     if (search.trim()) {
//       const q = search.toLowerCase();
//       list = list.filter(
//         (p) =>
//           p.postTitle.toLowerCase().includes(q) ||
//           p.caption.toLowerCase().includes(q) ||
//           p.platform.toLowerCase().includes(q) ||
//           p.createdBy?.toLowerCase().includes(q)
//       );
//     }

//     return list;
//   }, [posts, platformFilter, statusFilter, search]);

//   const currentPost = useMemo(
//     () =>
//       filteredPosts.find((p) => p._id === activePostId) ||
//       filteredPosts[0] ||
//       null,
//     [filteredPosts, activePostId]
//   );

//   useEffect(() => {
//     if (!currentPost) return;

//     setEditForm({
//       postTitle: currentPost.postTitle || "",
//       caption: currentPost.caption || "",
//       hashtags: (currentPost.hashtags || []).join(", "),
//       scheduledAt: toLocalInputValue(currentPost.scheduledAt),
//       platform: currentPost.platform,
//       status: currentPost.status,
//       revisionNote: currentPost.revisionNote || "",
//     });
//   }, [currentPost]);

//   const counts = useMemo(() => {
//     return {
//       total: posts.length,
//       pending: posts.filter((p) => p.status === "pending").length,
//       approved: posts.filter((p) => p.status === "approved").length,
//       revision: posts.filter((p) => p.status === "revision").length,
//       resubmitted: posts.filter((p) => p.status === "resubmitted").length,
//     };
//   }, [posts]);

//   const isDirty = useMemo(() => {
//     if (!currentPost) return false;

//     const oldTags = (currentPost.hashtags || []).join(", ");
//     return (
//       editForm.postTitle !== (currentPost.postTitle || "") ||
//       editForm.caption !== (currentPost.caption || "") ||
//       editForm.hashtags !== oldTags ||
//       editForm.scheduledAt !== toLocalInputValue(currentPost.scheduledAt) ||
//       editForm.platform !== currentPost.platform ||
//       editForm.status !== currentPost.status ||
//       editForm.revisionNote !== (currentPost.revisionNote || "")
//     );
//   }, [editForm, currentPost]);

//   const resetUploadForm = () => {
//     setUploadForm({
//       file: null,
//       postTitle: "",
//       platform: "instagram",
//       caption: "",
//       hashtags: "",
//       scheduledAt: "",
//       createdBy: "Admin Team",
//     });
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const handleUpload = async () => {
//     if (!uploadForm.file) {
//       alert("Please select a file");
//       return;
//     }
//     if (
//       !uploadForm.postTitle.trim() ||
//       !uploadForm.caption.trim() ||
//       !uploadForm.scheduledAt
//     ) {
//       alert("Please fill all required fields");
//       return;
//     }

//     try {
//       setUploading(true);

//       const formData = new FormData();
//       formData.append("clientId", clientId);
//       formData.append("file", uploadForm.file);
//       formData.append("postTitle", uploadForm.postTitle.trim());
//       formData.append("platform", uploadForm.platform);
//       formData.append("caption", uploadForm.caption.trim());
//       formData.append(
//         "hashtags",
//         JSON.stringify(
//           uploadForm.hashtags
//             .split(",")
//             .map((t) => t.trim())
//             .filter(Boolean)
//         )
//       );
//       formData.append(
//         "scheduledAt",
//         new Date(uploadForm.scheduledAt).toISOString()
//       );
//       formData.append("createdBy", uploadForm.createdBy.trim() || "Admin Team");

//       await apiClient.post("/assets/upload-asset", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       resetUploadForm();
//       setUploadOpen(false);
//       refetch?.();
//     } catch (err) {
//       console.error(err);
//       alert("Upload failed");
//     } finally {
//       setUploading(false);
//     }
//   };

//  const handleSave = async () => {
//   if (!currentPost?._id) return;

//   try {
//     setSaving(true);

//     const formData = new FormData();

//     formData.append("postTitle", editForm.postTitle.trim());
//     formData.append("caption", editForm.caption.trim());
//     formData.append(
//       "hashtags",
//       JSON.stringify(
//         editForm.hashtags
//           .split(",")
//           .map((t) => t.trim())
//           .filter(Boolean)
//       )
//     );
//     formData.append(
//       "scheduledAt",
//       new Date(editForm.scheduledAt).toISOString()
//     );
//     formData.append("platform", editForm.platform);
//     formData.append("status", editForm.status);
//     formData.append("revisionNote", editForm.revisionNote.trim());

//     // 🔥 FILE UPDATE
//     if (editForm.newFile) {
//       formData.append("file", editForm.newFile);
//     }

//     await apiClient.put(`/assets/${currentPost._id}`, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });

//     alert("Updated successfully");
//     refetch();

//   } catch (err) {
//     console.error(err);
//     alert("Update failed");
//   } finally {
//     setSaving(false);
//   }
// };

//   const handleApprove = async () => {
//     if (!currentPost?._id) return;
//     try {
//       setRevisionLoading(true);
//       await apiClient.patch(`/assets/${currentPost._id}/review`, {
//         status: "approved",
//         revisionNote: "",
//         actorName: "Client",
//       });

//       setPosts((prev) =>
//         prev.map((p) =>
//           p._id === currentPost._id
//             ? {
//                 ...p,
//                 status: "approved",
//                 revisionNote: "",
//                 reviewedAt: new Date().toISOString(),
//               }
//             : p
//         )
//       );

//       setEditForm((prev) => ({
//         ...prev,
//         status: "approved",
//         revisionNote: "",
//       }));

//       refetch?.();
//     } catch (err) {
//       console.error(err);
//       alert("Approve failed");
//     } finally {
//       setRevisionLoading(false);
//     }
//   };

//   const handleMarkRevision = async () => {
//     if (!currentPost?._id) return;
//     if (!editForm.revisionNote.trim()) {
//       alert("Please enter revision note");
//       return;
//     }

//     try {
//       setRevisionLoading(true);
//       await apiClient.patch(`/assets/${currentPost._id}/review`, {
//         status: "revision",
//         revisionNote: editForm.revisionNote.trim(),
//         actorName: "Client",
//       });

//       setPosts((prev) =>
//         prev.map((p) =>
//           p._id === currentPost._id
//             ? {
//                 ...p,
//                 status: "revision",
//                 revisionNote: editForm.revisionNote.trim(),
//                 reviewedAt: new Date().toISOString(),
//                 revisionCount: (p.revisionCount || 0) + 1,
//               }
//             : p
//         )
//       );

//       setEditForm((prev) => ({
//         ...prev,
//         status: "revision",
//       }));

//       refetch?.();
//     } catch (err) {
//       console.error(err);
//       alert("Revision update failed");
//     } finally {
//       setRevisionLoading(false);
//     }
//   };

//   const handleResubmit = async () => {
//     if (!currentPost?._id) return;

//     try {
//       setResubmitLoading(true);

//       await apiClient.post(`/assets/${currentPost._id}/resubmit`, {
//         actorName: "Admin Team",
//       });

//       setPosts((prev) =>
//         prev.map((p) =>
//           p._id === currentPost._id
//             ? {
//                 ...p,
//                 status: "resubmitted",
//               }
//             : p
//         )
//       );

//       setEditForm((prev) => ({
//         ...prev,
//         status: "resubmitted",
//       }));

//       refetch?.();
//     } catch (err) {
//       console.error(err);
//       alert("Resubmit failed");
//     } finally {
//       setResubmitLoading(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!currentPost?._id) return;

//     const ok = window.confirm("Are you sure you want to delete this content?");
//     if (!ok) return;

//     try {
//       setDeleting(true);
//       await apiClient.delete(`/assets/${currentPost._id}`);

//       setPosts((prev) => prev.filter((p) => p._id !== currentPost._id));
//       setActivePostId("");
//       refetch?.();
//     } catch (err) {
//       console.error(err);
//       alert("Delete failed");
//     } finally {
//       setDeleting(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-[60vh] text-sm text-gray-500 dark:text-slate-400">
//         Loading content posts…
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center min-h-[60vh] text-sm text-red-500">
//         Failed to load content posts
//       </div>
//     );
//   }

//   return (
//     <div className="h-[calc(100vh-64px)] flex bg-gray-50 dark:bg-slate-950/30">
//       <aside className="w-80 shrink-0 border-r border-gray-200 dark:border-slate-800 bg-white dark:bg-[#020817] flex flex-col">
//         <div className="p-4 border-b border-gray-200 dark:border-slate-800">
//           <div className="flex items-center justify-between mb-4">
//             <div>
//               <h1 className="text-lg font-bold text-gray-900 dark:text-white">
//                 Content Manager
//               </h1>
//               <p className="text-xs text-gray-500 dark:text-slate-400">
//                 Admin control panel
//               </p>
//             </div>

//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => setUploadOpen(true)}
//                 className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-700"
//               >
//                 <Plus className="w-3.5 h-3.5" />
//                 Upload
//               </button>

//               <button
//                 onClick={() => refetch?.()}
//                 className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-slate-700 px-3 py-2 text-xs font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800"
//               >
//                 <RefreshCw className="w-3.5 h-3.5" />
//                 Refresh
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-2 mb-4">
//             <div className="rounded-xl bg-indigo-50 dark:bg-indigo-500/10 p-3">
//               <p className="text-[11px] text-gray-500 dark:text-slate-400">Total</p>
//               <p className="text-xl font-bold text-indigo-600">{counts.total}</p>
//             </div>
//             <div className="rounded-xl bg-amber-50 dark:bg-amber-500/10 p-3">
//               <p className="text-[11px] text-gray-500 dark:text-slate-400">Pending</p>
//               <p className="text-xl font-bold text-amber-600">{counts.pending}</p>
//             </div>
//             <div className="rounded-xl bg-emerald-50 dark:bg-emerald-500/10 p-3">
//               <p className="text-[11px] text-gray-500 dark:text-slate-400">Approved</p>
//               <p className="text-xl font-bold text-emerald-600">{counts.approved}</p>
//             </div>
//             <div className="rounded-xl bg-red-50 dark:bg-red-500/10 p-3">
//               <p className="text-[11px] text-gray-500 dark:text-slate-400">Revision</p>
//               <p className="text-xl font-bold text-red-600">
//                 {counts.revision + counts.resubmitted}
//               </p>
//             </div>
//           </div>

//           <div className="relative mb-3">
//             <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search title, caption, creator..."
//               className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 pl-9 pr-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-2">
//             <div className="flex items-center gap-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3">
//               <Filter className="w-4 h-4 text-gray-400" />
//               <select
//                 value={platformFilter}
//                 onChange={(e) => setPlatformFilter(e.target.value as any)}
//                 className="w-full bg-transparent py-2.5 text-sm outline-none"
//               >
//                 <option value="all">All Platforms</option>
//                 <option value="instagram">Instagram</option>
//                 <option value="facebook">Facebook</option>
//                 <option value="linkedin">LinkedIn</option>
//                 <option value="twitter">Twitter / X</option>
//               </select>
//             </div>

//             <div className="flex items-center gap-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3">
//               <Filter className="w-4 h-4 text-gray-400" />
//               <select
//                 value={statusFilter}
//                 onChange={(e) => setStatusFilter(e.target.value as any)}
//                 className="w-full bg-transparent py-2.5 text-sm outline-none"
//               >
//                 <option value="all">All Status</option>
//                 <option value="pending">Pending</option>
//                 <option value="approved">Approved</option>
//                 <option value="revision">Revision</option>
//                 <option value="resubmitted">Resubmitted</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="flex-1 overflow-y-auto p-2 space-y-1">
//           {filteredPosts.map((post) => {
//             const meta = PLATFORM_META[post.platform];
//             const active = post._id === currentPost?._id;

//             return (
//               <button
//                 key={post._id}
//                 onClick={() => setActivePostId(post._id)}
//                 className={cn(
//                   "w-full text-left rounded-2xl border p-3 transition-all",
//                   active
//                     ? "border-indigo-200 bg-indigo-50 dark:bg-indigo-500/10 dark:border-indigo-500/30"
//                     : "border-transparent hover:bg-gray-50 dark:hover:bg-slate-800/50"
//                 )}
//               >
//                 <div className="flex items-center justify-between gap-2 mb-2">
//                   <div className="flex items-center gap-2">
//                     <span>{meta.icon}</span>
//                     <span className={cn("text-[11px] font-bold", meta.color)}>
//                       {meta.label}
//                     </span>
//                   </div>
//                   <StatusBadge status={post.status} />
//                 </div>

//                 <p className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2">
//                   {post.postTitle}
//                 </p>

//                 <p className="mt-1 text-xs text-gray-500 dark:text-slate-400 line-clamp-2">
//                   {post.caption}
//                 </p>

//                 <div className="mt-2 flex items-center justify-between gap-2 text-[10px] text-gray-400 dark:text-slate-500">
//                   <div className="flex items-center gap-1">
//                     <Clock3 className="w-3 h-3" />
//                     {new Date(post.scheduledAt).toLocaleString()}
//                   </div>
//                   <div className="font-semibold">
//                     Rev {post.revisionCount || 0}
//                   </div>
//                 </div>
//               </button>
//             );
//           })}

//           {!filteredPosts.length && (
//             <div className="py-12 text-center text-sm text-gray-500 dark:text-slate-400">
//               No content found
//             </div>
//           )}
//         </div>
//       </aside>

//       <main className="flex-1 overflow-y-auto p-6">
//         {!currentPost ? (
//           <div className="flex items-center justify-center h-full text-sm text-gray-500 dark:text-slate-400">
//             Select a content post
//           </div>
//         ) : (
//           <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-6">
//             <div className="space-y-6">
//               <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
//                 <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-slate-800">
//                   <div>
//                     <h2 className="text-lg font-bold text-gray-900 dark:text-white">
//                       Preview
//                     </h2>
//                     <p className="text-xs text-gray-500 dark:text-slate-400">
//                       Live media preview
//                     </p>
//                   </div>
//                   <StatusBadge status={currentPost.status} />
//                 </div>

//                 <div className="relative bg-gray-100 dark:bg-slate-800 aspect-video">
//                   {currentPost.mimeType?.startsWith("video/") ||
//                   currentPost.resourceType === "video" ||
//                   /\.(mp4|webm|ogg|mov)$/i.test(currentPost.url) ? (
//                     <video
//                       src={currentPost.url}
//                       controls
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <img
//                       src={currentPost.url}
//                       alt={currentPost.postTitle}
//                       className="w-full h-full object-cover"
//                     />
//                   )}
//                 </div>

//                 <div className="p-5">
//                   <div className="flex items-center justify-between gap-3 mb-2">
//                     <p className="text-[11px] uppercase tracking-widest text-gray-400 dark:text-slate-500 font-semibold">
//                       Current Caption
//                     </p>
//                     <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-gray-600 dark:text-slate-300">
//                       <RotateCcw className="w-3.5 h-3.5" />
//                       {currentPost.revisionCount || 0} revisions
//                     </div>
//                   </div>

//                   <p className="text-sm leading-6 text-gray-700 dark:text-slate-300 whitespace-pre-wrap">
//                     {currentPost.caption}
//                   </p>

//                   {!!currentPost.hashtags?.length && (
//                     <div className="mt-4 flex flex-wrap gap-2">
//                       {currentPost.hashtags.map((tag, i) => (
//                         <span
//                           key={`${tag}-${i}`}
//                           className="rounded-full border border-indigo-100 dark:border-indigo-500/20 bg-indigo-50 dark:bg-indigo-500/10 px-2.5 py-1 text-xs text-indigo-600 dark:text-indigo-400"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   {currentPost.revisionNote && (
//                     <div className="mt-4 rounded-xl border border-red-200 dark:border-red-500/20 bg-red-50 dark:bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-300">
//                       <strong>Latest Revision Note:</strong> {currentPost.revisionNote}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
//                 <div className="px-5 py-4 border-b border-gray-200 dark:border-slate-800 flex items-center gap-2">
//                   <History className="w-4 h-4 text-indigo-500" />
//                   <h3 className="text-sm font-bold text-gray-900 dark:text-white">
//                     Revision History
//                   </h3>
//                 </div>

//                 <div className="p-5">
//                   {currentPost.revisionHistory?.length ? (
//                     <div className="space-y-4">
//                       {currentPost.revisionHistory.map((item, idx) => (
//                         <div
//                           key={item._id || idx}
//                           className="rounded-xl border border-gray-200 dark:border-slate-800 p-4"
//                         >
//                           <div className="flex items-center justify-between gap-3 mb-2">
//                             <div className="font-semibold text-sm text-gray-900 dark:text-white">
//                               {formatHistoryAction(item.action)}
//                             </div>
//                             <div className="text-xs text-gray-400">
//                               {item.createdAt
//                                 ? new Date(item.createdAt).toLocaleString()
//                                 : "-"}
//                             </div>
//                           </div>

//                           <div className="text-xs text-gray-500 dark:text-slate-400 mb-2">
//                             By: {item.actorName || item.actedBy}
//                           </div>

//                           {item.note ? (
//                             <div className="text-sm text-gray-700 dark:text-slate-300 mb-3">
//                               {item.note}
//                             </div>
//                           ) : null}

//                           {item.snapshot ? (
//                             <div className="rounded-lg bg-gray-50 dark:bg-slate-800 p-3 text-xs space-y-1">
//                               <div>
//                                 <span className="font-semibold">Title:</span>{" "}
//                                 {item.snapshot.postTitle || "-"}
//                               </div>
//                               <div>
//                                 <span className="font-semibold">Platform:</span>{" "}
//                                 {item.snapshot.platform || "-"}
//                               </div>
//                               <div>
//                                 <span className="font-semibold">Scheduled:</span>{" "}
//                                 {item.snapshot.scheduledAt
//                                   ? new Date(item.snapshot.scheduledAt).toLocaleString()
//                                   : "-"}
//                               </div>
//                             </div>
//                           ) : null}
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="text-sm text-gray-500 dark:text-slate-400">
//                       No revision history available yet.
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-6">
//               <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
//                 <div className="px-5 py-4 border-b border-gray-200 dark:border-slate-800">
//                   <h2 className="text-lg font-bold text-gray-900 dark:text-white">
//                     Edit Content
//                   </h2>
//                   <p className="text-xs text-gray-500 dark:text-slate-400">
//                     Admin can update full content details
//                   </p>
//                 </div>

//                 <div className="p-5 space-y-4">
//                   <div>
//   <label className="block text-xs font-semibold text-gray-500 mb-2">
//     Replace Media (Optional)
//   </label>

//   <input
//     type="file"
//     accept="image/*,video/*"
//     onChange={(e) =>
//       setEditForm((prev) => ({
//         ...prev,
//         newFile: e.target.files?.[0] || null,
//       }))
//     }
//     className="w-full text-sm"
//   />

//   {editForm.newFile && (
//     <p className="text-xs text-green-500 mt-1">
//       New file selected: {editForm.newFile.name}
//     </p>
//   )}
// </div>
//                   <div>
//                     <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
//                       Post Title
//                     </label>
//                     <input
//                       value={editForm.postTitle}
//                       onChange={(e) =>
//                         setEditForm((prev) => ({
//                           ...prev,
//                           postTitle: e.target.value,
//                         }))
//                       }
//                       className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
//                       Platform
//                     </label>
//                     <select
//                       value={editForm.platform}
//                       onChange={(e) =>
//                         setEditForm((prev) => ({
//                           ...prev,
//                           platform: e.target.value as Platform,
//                         }))
//                       }
//                       className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
//                     >
//                       <option value="instagram">Instagram</option>
//                       <option value="facebook">Facebook</option>
//                       <option value="linkedin">LinkedIn</option>
//                       <option value="twitter">Twitter / X</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
//                       Caption
//                     </label>
//                     <textarea
//                       rows={6}
//                       value={editForm.caption}
//                       onChange={(e) =>
//                         setEditForm((prev) => ({
//                           ...prev,
//                           caption: e.target.value,
//                         }))
//                       }
//                       className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-indigo-500/30"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
//                       Hashtags
//                     </label>
//                     <input
//                       value={editForm.hashtags}
//                       onChange={(e) =>
//                         setEditForm((prev) => ({
//                           ...prev,
//                           hashtags: e.target.value,
//                         }))
//                       }
//                       placeholder="#design, #growth, #marketing"
//                       className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
//                       Scheduled At
//                     </label>
//                     <input
//                       type="datetime-local"
//                       value={editForm.scheduledAt}
//                       onChange={(e) =>
//                         setEditForm((prev) => ({
//                           ...prev,
//                           scheduledAt: e.target.value,
//                         }))
//                       }
//                       className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
//                       Status
//                     </label>
//                     <select
//                       value={editForm.status}
//                       onChange={(e) =>
//                         setEditForm((prev) => ({
//                           ...prev,
//                           status: e.target.value as Status,
//                         }))
//                       }
//                       className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
//                     >
//                       <option value="pending">Pending</option>
//                       <option value="approved">Approved</option>
//                       <option value="revision">Revision</option>
//                       <option value="resubmitted">Resubmitted</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
//                       Revision Note
//                     </label>
//                     <textarea
//                       rows={4}
//                       value={editForm.revisionNote}
//                       onChange={(e) =>
//                         setEditForm((prev) => ({
//                           ...prev,
//                           revisionNote: e.target.value,
//                         }))
//                       }
//                       placeholder="Write feedback for designer/client team..."
//                       className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-indigo-500/30"
//                     />
//                   </div>

//                   <div className="flex flex-wrap gap-3 pt-2">
//                     <button
//                       onClick={handleSave}
//                       disabled={!isDirty || saving}
//                       className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed"
//                     >
//                       <Save className="w-4 h-4" />
//                       {saving ? "Saving..." : "Save Changes"}
//                     </button>

//                     <button
//                       onClick={handleApprove}
//                       disabled={revisionLoading}
//                       className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 disabled:opacity-40"
//                     >
//                       <CheckCircle2 className="w-4 h-4" />
//                       Approve
//                     </button>

//                     <button
//                       onClick={handleMarkRevision}
//                       disabled={revisionLoading}
//                       className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-40"
//                     >
//                       <Pencil className="w-4 h-4" />
//                       Mark Revision
//                     </button>

//                     {currentPost.status === "revision" && (
//                       <button
//                         onClick={handleResubmit}
//                         disabled={resubmitLoading}
//                         className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700 disabled:opacity-40"
//                       >
//                         <RotateCcw className="w-4 h-4" />
//                         {resubmitLoading ? "Resubmitting..." : "Resubmit"}
//                       </button>
//                     )}

//                     <button
//                       onClick={handleDelete}
//                       disabled={deleting}
//                       className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-600 disabled:opacity-40"
//                     >
//                       {deleting ? (
//                         <X className="w-4 h-4" />
//                       ) : (
//                         <Trash2 className="w-4 h-4" />
//                       )}
//                       {deleting ? "Deleting..." : "Delete"}
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
//                 <div className="px-5 py-4 border-b border-gray-200 dark:border-slate-800">
//                   <h3 className="text-sm font-bold text-gray-900 dark:text-white">
//                     Asset Metadata
//                   </h3>
//                 </div>

//                 <div className="p-5 grid grid-cols-2 gap-4 text-sm">
//                   <div>
//                     <p className="text-xs text-gray-400 mb-1">File Name</p>
//                     <p className="font-medium text-gray-800 dark:text-slate-200 break-all">
//                       {currentPost.name}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400 mb-1">Created By</p>
//                     <p className="font-medium text-gray-800 dark:text-slate-200">
//                       {currentPost.createdBy || "—"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400 mb-1">Mime Type</p>
//                     <p className="font-medium text-gray-800 dark:text-slate-200">
//                       {currentPost.mimeType || "—"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400 mb-1">Resource Type</p>
//                     <p className="font-medium text-gray-800 dark:text-slate-200">
//                       {currentPost.resourceType || "—"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400 mb-1">Size</p>
//                     <p className="font-medium text-gray-800 dark:text-slate-200">
//                       {currentPost.size
//                         ? `${(currentPost.size / 1024 / 1024).toFixed(2)} MB`
//                         : "—"}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-400 mb-1">Dimensions</p>
//                     <p className="font-medium text-gray-800 dark:text-slate-200">
//                       {currentPost.width && currentPost.height
//                         ? `${currentPost.width} × ${currentPost.height}`
//                         : "—"}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>

//       {uploadOpen && (
//         <div
//           className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
//           onClick={() => !uploading && setUploadOpen(false)}
//         >
//           <div
//             className="w-full max-w-2xl rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-800">
//               <div>
//                 <h2 className="text-lg font-bold text-gray-900 dark:text-white">
//                   Upload New Content
//                 </h2>
//                 <p className="text-xs text-gray-500 dark:text-slate-400">
//                   This content will go to client review flow
//                 </p>
//               </div>
//               <button
//                 onClick={() => !uploading && setUploadOpen(false)}
//                 className="rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-slate-800"
//               >
//                 <X className="w-4 h-4" />
//               </button>
//             </div>

//             <div className="p-6 space-y-4">
//               <div>
//                 <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
//                   Media File
//                 </label>
//                 <label className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/60 px-6 py-8 cursor-pointer hover:border-indigo-400">
//                   <div className="flex items-center gap-3 mb-2">
//                     <Upload className="w-5 h-5 text-indigo-500" />
//                     <FileImage className="w-5 h-5 text-pink-500" />
//                     <Video className="w-5 h-5 text-blue-500" />
//                   </div>
//                   <p className="text-sm font-medium text-gray-700 dark:text-slate-200">
//                     {uploadForm.file
//                       ? uploadForm.file.name
//                       : "Click to select image/video"}
//                   </p>
//                   <p className="text-xs text-gray-400 mt-1">
//                     PNG, JPG, WEBP, MP4, MOV supported
//                   </p>
//                   <input
//                     ref={fileInputRef}
//                     type="file"
//                     accept="image/*,video/*"
//                     className="hidden"
//                     onChange={(e) =>
//                       setUploadForm((prev) => ({
//                         ...prev,
//                         file: e.target.files?.[0] || null,
//                       }))
//                     }
//                   />
//                 </label>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
//                     Post Title
//                   </label>
//                   <input
//                     value={uploadForm.postTitle}
//                     onChange={(e) =>
//                       setUploadForm((prev) => ({
//                         ...prev,
//                         postTitle: e.target.value,
//                       }))
//                     }
//                     className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
//                     Platform
//                   </label>
//                   <select
//                     value={uploadForm.platform}
//                     onChange={(e) =>
//                       setUploadForm((prev) => ({
//                         ...prev,
//                         platform: e.target.value as Platform,
//                       }))
//                     }
//                     className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
//                   >
//                     <option value="instagram">Instagram</option>
//                     <option value="facebook">Facebook</option>
//                     <option value="linkedin">LinkedIn</option>
//                     <option value="twitter">Twitter / X</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
//                   Caption
//                 </label>
//                 <textarea
//                   rows={5}
//                   value={uploadForm.caption}
//                   onChange={(e) =>
//                     setUploadForm((prev) => ({
//                       ...prev,
//                       caption: e.target.value,
//                     }))
//                   }
//                   className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-indigo-500/30"
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
//                     Hashtags
//                   </label>
//                   <input
//                     value={uploadForm.hashtags}
//                     onChange={(e) =>
//                       setUploadForm((prev) => ({
//                         ...prev,
//                         hashtags: e.target.value,
//                       }))
//                     }
//                     placeholder="#brand, #campaign"
//                     className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
//                     Created By
//                   </label>
//                   <input
//                     value={uploadForm.createdBy}
//                     onChange={(e) =>
//                       setUploadForm((prev) => ({
//                         ...prev,
//                         createdBy: e.target.value,
//                       }))
//                     }
//                     className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
//                   Scheduled At
//                 </label>
//                 <input
//                   type="datetime-local"
//                   value={uploadForm.scheduledAt}
//                   onChange={(e) =>
//                     setUploadForm((prev) => ({
//                       ...prev,
//                       scheduledAt: e.target.value,
//                     }))
//                   }
//                   className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
//                 />
//               </div>

//               <div className="flex items-center justify-end gap-3 pt-2">
//                 <button
//                   onClick={() => {
//                     resetUploadForm();
//                     setUploadOpen(false);
//                   }}
//                   disabled={uploading}
//                   className="rounded-xl border border-gray-200 dark:border-slate-700 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 disabled:opacity-50"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   onClick={handleUpload}
//                   disabled={uploading}
//                   className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
//                 >
//                   <Upload className="w-4 h-4" />
//                   {uploading ? "Uploading..." : "Upload Content"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useGet } from "@/hooks/useGet";
import { apiClient } from "../../lib/apiClient";
import { cn } from "@/lib/utils";
import {
  Search,
  RefreshCw,
  CheckCircle2,
  Clock3,
  Trash2,
  Save,
  X,
  Filter,
  Upload,
  Plus,
  FileImage,
  Video,
  RotateCcw,
  History,
  CheckCheck,
  Building2,
  ChevronDown,
} from "lucide-react";

type Platform = "instagram" | "twitter" | "linkedin" | "facebook";
type Status =
  | "pending"
  | "approved"
  | "revision"
  | "revision_accepted"
  | "resubmitted";

interface ClientItem {
  _id: string;
  profile?: {
    companyName?: string;
    industry?: string;
    market?: string;
  };
  status?: string;
  createdAt?: string;
}

interface RevisionHistoryItem {
  _id?: string;
  action:
    | "revision_requested"
    | "revision_edited"
    | "revision_cancelled"
    | "revision_accepted"
    | "resubmitted"
    | "approved";
  note?: string;
  actedBy: "client" | "admin" | "system";
  actorName?: string;
  previousStatus: Status;
  newStatus: Status;
  requestGroupId?: string;
  isLocked?: boolean;
  isCancelled?: boolean;
  snapshot?: {
    postTitle?: string;
    caption?: string;
    hashtags?: string[];
    scheduledAt?: string;
    platform?: Platform;
    url?: string;
    mimeType?: string;
    resourceType?: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

interface ContentPost {
  _id: string;
  clientId: string;
  name: string;
  url: string;
  publicId: string;
  mimeType?: string;
  resourceType?: string;
  size?: number;
  width?: number;
  height?: number;
  postTitle: string;
  platform: Platform;
  caption: string;
  hashtags: string[];
  scheduledAt: string;
  status: Status;
  revisionNote?: string;
  reviewedAt?: string | null;
  createdBy?: string;
  createdAt?: string;
  updatedAt?: string;
  revisionCount?: number;
  currentRequestGroupId?: string;
  revisionHistory?: RevisionHistoryItem[];
}

const PLATFORM_META: Record<
  Platform,
  { label: string; color: string; bg: string; icon: string }
> = {
  instagram: {
    label: "Instagram",
    color: "text-pink-600",
    bg: "bg-pink-50 dark:bg-pink-500/10",
    icon: "📸",
  },
  twitter: {
    label: "Twitter / X",
    color: "text-sky-500",
    bg: "bg-sky-50 dark:bg-sky-500/10",
    icon: "🐦",
  },
  linkedin: {
    label: "LinkedIn",
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-500/10",
    icon: "💼",
  },
  facebook: {
    label: "Facebook",
    color: "text-indigo-600",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    icon: "👥",
  },
};

const STATUS_MAP: Record<
  Status,
  { label: string; bg: string; text: string; dot: string }
> = {
  pending: {
    label: "Pending",
    bg: "bg-amber-100 dark:bg-amber-500/10",
    text: "text-amber-700 dark:text-amber-300",
    dot: "bg-amber-400",
  },
  approved: {
    label: "Approved",
    bg: "bg-emerald-100 dark:bg-emerald-500/10",
    text: "text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-500",
  },
  revision: {
    label: "Revision Requested",
    bg: "bg-red-100 dark:bg-red-500/10",
    text: "text-red-700 dark:text-red-300",
    dot: "bg-red-500",
  },
  revision_accepted: {
    label: "Revision Accepted",
    bg: "bg-orange-100 dark:bg-orange-500/10",
    text: "text-orange-700 dark:text-orange-300",
    dot: "bg-orange-500",
  },
  resubmitted: {
    label: "Resubmitted",
    bg: "bg-indigo-100 dark:bg-indigo-500/10",
    text: "text-indigo-700 dark:text-indigo-300",
    dot: "bg-indigo-500",
  },
};

function StatusBadge({ status }: { status: Status }) {
  const s = STATUS_MAP[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold",
        s.bg,
        s.text
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full", s.dot)} />
      {s.label}
    </span>
  );
}

function isValidPost(item: any): item is ContentPost {
  return (
    item &&
    typeof item._id === "string" &&
    typeof item.url === "string" &&
    typeof item.postTitle === "string"
  );
}

function toLocalInputValue(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 16);
}

function formatHistoryAction(action: RevisionHistoryItem["action"]) {
  switch (action) {
    case "revision_requested":
      return "Revision Requested";
    case "revision_edited":
      return "Revision Edited";
    case "revision_cancelled":
      return "Revision Cancelled";
    case "revision_accepted":
      return "Revision Accepted";
    case "resubmitted":
      return "Resubmitted";
    case "approved":
      return "Approved";
    default:
      return action;
  }
}

function renderPreview(url?: string, mimeType?: string, resourceType?: string) {
  if (!url) return null;

  const isVideo =
    mimeType?.startsWith("video/") ||
    resourceType === "video" ||
    /\.(mp4|webm|ogg|mov)$/i.test(url);

  return isVideo ? (
    <video src={url} controls className="w-full rounded-lg max-h-64 object-cover" />
  ) : (
    <img src={url} alt="preview" className="w-full rounded-lg max-h-64 object-cover" />
  );
}

export default function AdminContentManagementPage() {
  const [selectedClientId, setSelectedClientId] = useState("");

  const [posts, setPosts] = useState<ContentPost[]>([]);
  const [activePostId, setActivePostId] = useState("");
  const [search, setSearch] = useState("");
  const [platformFilter, setPlatformFilter] = useState<"all" | Platform>("all");
  const [statusFilter, setStatusFilter] = useState<"all" | Status>("all");
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [revisionLoading, setRevisionLoading] = useState(false);
  const [resubmitLoading, setResubmitLoading] = useState(false);
  const [acceptingId, setAcceptingId] = useState("");

  const [uploadOpen, setUploadOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [uploadForm, setUploadForm] = useState({
    file: null as File | null,
    postTitle: "",
    platform: "instagram" as Platform,
    caption: "",
    hashtags: "",
    scheduledAt: "",
    createdBy: "Admin Team",
  });

  const [editForm, setEditForm] = useState({
    postTitle: "",
    caption: "",
    hashtags: "",
    scheduledAt: "",
    platform: "instagram" as Platform,
    status: "pending" as Status,
    revisionNote: "",
    newFile: null as File | null,
  });

  const {
    data: clientsData,
    loading: clientsLoading,
    error: clientsError,
  } = useGet(["clients"], "/clients");

  const clients: ClientItem[] = clientsData?.clients || [];

  useEffect(() => {
    if (!selectedClientId && clients.length > 0) {
      setSelectedClientId(clients[0]._id);
    }
  }, [clients, selectedClientId]);

  const selectedClient = useMemo(
    () => clients.find((client) => client._id === selectedClientId) || null,
    [clients, selectedClientId]
  );

  const { data, error, refetch, loading } = useGet(
    ["review-feed", selectedClientId],
    selectedClientId ? `/assets/review-feed?clientId=${selectedClientId}` : "",
    { enabled: !!selectedClientId }
  );

  useEffect(() => {
    const validPosts = (data?.data || []).filter(isValidPost);
    setPosts(validPosts);

    if (validPosts.length > 0) {
      setActivePostId((prev) =>
        validPosts.some((p) => p._id === prev) ? prev : validPosts[0]._id
      );
    } else {
      setActivePostId("");
    }
  }, [data]);

  const filteredPosts = useMemo(() => {
    let list = [...posts];

    if (platformFilter !== "all") {
      list = list.filter((p) => p.platform === platformFilter);
    }

    if (statusFilter !== "all") {
      list = list.filter((p) => p.status === statusFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.postTitle.toLowerCase().includes(q) ||
          p.caption.toLowerCase().includes(q) ||
          p.platform.toLowerCase().includes(q) ||
          p.createdBy?.toLowerCase().includes(q)
      );
    }

    return list;
  }, [posts, platformFilter, statusFilter, search]);

  const currentPost = useMemo(
    () => filteredPosts.find((p) => p._id === activePostId) || filteredPosts[0] || null,
    [filteredPosts, activePostId]
  );

  useEffect(() => {
    if (!currentPost) return;

    setEditForm({
      postTitle: currentPost.postTitle || "",
      caption: currentPost.caption || "",
      hashtags: (currentPost.hashtags || []).join(", "),
      scheduledAt: toLocalInputValue(currentPost.scheduledAt),
      platform: currentPost.platform,
      status: currentPost.status,
      revisionNote: currentPost.revisionNote || "",
      newFile: null,
    });
  }, [currentPost]);

  const counts = useMemo(() => {
    return {
      total: posts.length,
      pending: posts.filter((p) => p.status === "pending").length,
      approved: posts.filter((p) => p.status === "approved").length,
      revision: posts.filter((p) =>
        ["revision", "revision_accepted", "resubmitted"].includes(p.status)
      ).length,
    };
  }, [posts]);

  const isDirty = useMemo(() => {
    if (!currentPost) return false;
    const oldTags = (currentPost.hashtags || []).join(", ");

    return (
      editForm.postTitle !== (currentPost.postTitle || "") ||
      editForm.caption !== (currentPost.caption || "") ||
      editForm.hashtags !== oldTags ||
      editForm.scheduledAt !== toLocalInputValue(currentPost.scheduledAt) ||
      editForm.platform !== currentPost.platform ||
      editForm.status !== currentPost.status ||
      editForm.revisionNote !== (currentPost.revisionNote || "") ||
      !!editForm.newFile
    );
  }, [editForm, currentPost]);

  const resetUploadForm = () => {
    setUploadForm({
      file: null,
      postTitle: "",
      platform: "instagram",
      caption: "",
      hashtags: "",
      scheduledAt: "",
      createdBy: "Admin Team",
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = async () => {
    if (!selectedClientId) {
      return alert("Please select a client first");
    }

    if (!uploadForm.file) {
      return alert("Please select a file");
    }

    if (
      !uploadForm.postTitle.trim() ||
      !uploadForm.caption.trim() ||
      !uploadForm.scheduledAt
    ) {
      return alert("Please fill all required fields");
    }

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("clientId", selectedClientId);
      formData.append("file", uploadForm.file);
      formData.append("postTitle", uploadForm.postTitle.trim());
      formData.append("platform", uploadForm.platform);
      formData.append("caption", uploadForm.caption.trim());
      formData.append(
        "hashtags",
        JSON.stringify(
          uploadForm.hashtags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        )
      );
      formData.append("scheduledAt", new Date(uploadForm.scheduledAt).toISOString());
      formData.append("createdBy", uploadForm.createdBy.trim() || "Admin Team");

      await apiClient.post("/assets/upload-asset", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      resetUploadForm();
      setUploadOpen(false);
      refetch?.();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!currentPost?._id) return;

    try {
      setSaving(true);

      const formData = new FormData();
      formData.append("postTitle", editForm.postTitle.trim());
      formData.append("caption", editForm.caption.trim());
      formData.append(
        "hashtags",
        JSON.stringify(
          editForm.hashtags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        )
      );
      formData.append("scheduledAt", new Date(editForm.scheduledAt).toISOString());
      formData.append("platform", editForm.platform);
      formData.append("status", editForm.status);
      formData.append("revisionNote", editForm.revisionNote.trim());
      formData.append("actorName", "Admin Team");

      if (editForm.newFile) {
        formData.append("file", editForm.newFile);
      }

      const res = await apiClient.put(`/assets/${currentPost._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const updated = res.data?.data;
      if (updated) {
        setPosts((prev) => prev.map((p) => (p._id === updated._id ? updated : p)));
      }

      refetch?.();
    } catch (err) {
      console.error(err);
      alert("Update failed");
    } finally {
      setSaving(false);
    }
  };

  const handleApprove = async () => {
    if (!currentPost?._id) return;

    try {
      setRevisionLoading(true);
      await apiClient.patch(`/assets/${currentPost._id}/review`, {
        status: "approved",
        revisionNote: "",
        actorName: "Client",
      });
      refetch?.();
    } catch (err) {
      console.error(err);
      alert("Approve failed");
    } finally {
      setRevisionLoading(false);
    }
  };

  const handleMarkRevision = async () => {
    if (!currentPost?._id) return;
    if (!editForm.revisionNote.trim()) {
      return alert("Please enter revision note");
    }

    try {
      setRevisionLoading(true);
      await apiClient.patch(`/assets/${currentPost._id}/review`, {
        status: "revision",
        revisionNote: editForm.revisionNote.trim(),
        actorName: "Client",
      });
      refetch?.();
    } catch (err) {
      console.error(err);
      alert("Revision update failed");
    } finally {
      setRevisionLoading(false);
    }
  };

  const handleAcceptRequest = async (historyId: string) => {
    if (!currentPost?._id) return;

    try {
      setAcceptingId(historyId);
      await apiClient.patch(`/assets/${currentPost._id}/revision/${historyId}/accept`, {
        actorName: "Admin Team",
      });
      refetch?.();
    } catch (err) {
      console.error(err);
      alert("Accept request failed");
    } finally {
      setAcceptingId("");
    }
  };

  const handleResubmit = async () => {
    if (!currentPost?._id) return;

    try {
      setResubmitLoading(true);
      await apiClient.post(`/assets/${currentPost._id}/resubmit`, {
        actorName: "Admin Team",
      });
      refetch?.();
    } catch (err) {
      console.error(err);
      alert("Resubmit failed");
    } finally {
      setResubmitLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!currentPost?._id) return;
    const ok = window.confirm("Are you sure you want to delete this content?");
    if (!ok) return;

    try {
      setDeleting(true);
      await apiClient.delete(`/assets/${currentPost._id}`);
      setPosts((prev) => prev.filter((p) => p._id !== currentPost._id));
      setActivePostId("");
      refetch?.();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    } finally {
      setDeleting(false);
    }
  };

  if (clientsLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-sm text-gray-500 dark:text-slate-400">
        Loading clients...
      </div>
    );
  }

  if (clientsError) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-sm text-red-500">
        Failed to load clients
      </div>
    );
  }

  if (!selectedClientId) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-sm text-gray-500 dark:text-slate-400">
        No client available
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-sm text-gray-500 dark:text-slate-400">
        Loading content posts...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-sm text-red-500">
        Failed to load content posts
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-64px)] flex bg-gray-50 dark:bg-slate-950/30">
      <aside className="w-80 shrink-0 border-r border-gray-200 dark:border-slate-800 bg-white dark:bg-[#020817] flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                Content Manager
              </h1>
              <p className="text-xs text-gray-500 dark:text-slate-400">
                {selectedClient?.profile?.companyName || "Admin control panel"}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setUploadOpen(true)}
                disabled={!selectedClientId}
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
              >
                <Plus className="w-3.5 h-3.5" />
                Upload
              </button>

              <button
                onClick={() => refetch?.()}
                disabled={!selectedClientId}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-slate-700 px-3 py-2 text-xs font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 disabled:opacity-50"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Refresh
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-2">
              Select Client
            </label>

            <div className="relative">
              <Building2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <select
                value={selectedClientId}
                onChange={(e) => setSelectedClientId(e.target.value)}
                className="w-full appearance-none rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 pl-9 pr-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
              >
                <option value="">Select client</option>
                {clients.map((client) => (
                  <option key={client._id} value={client._id}>
                    {client.profile?.companyName || "Unnamed Client"}
                  </option>
                ))}
              </select>
            </div>

            {selectedClient && (
              <div className="mt-2 rounded-xl bg-gray-50 dark:bg-slate-800/70 p-3 text-xs text-gray-600 dark:text-slate-300">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {selectedClient.profile?.companyName || "Unnamed Client"}
                </div>
                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                  <span>Industry: {selectedClient.profile?.industry || "—"}</span>
                  <span>Market: {selectedClient.profile?.market || "—"}</span>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="rounded-xl bg-indigo-50 dark:bg-indigo-500/10 p-3">
              <p className="text-[11px] text-gray-500 dark:text-slate-400">Total</p>
              <p className="text-xl font-bold text-indigo-600">{counts.total}</p>
            </div>
            <div className="rounded-xl bg-amber-50 dark:bg-amber-500/10 p-3">
              <p className="text-[11px] text-gray-500 dark:text-slate-400">Pending</p>
              <p className="text-xl font-bold text-amber-600">{counts.pending}</p>
            </div>
            <div className="rounded-xl bg-emerald-50 dark:bg-emerald-500/10 p-3">
              <p className="text-[11px] text-gray-500 dark:text-slate-400">Approved</p>
              <p className="text-xl font-bold text-emerald-600">{counts.approved}</p>
            </div>
            <div className="rounded-xl bg-red-50 dark:bg-red-500/10 p-3">
              <p className="text-[11px] text-gray-500 dark:text-slate-400">Revisions</p>
              <p className="text-xl font-bold text-red-600">{counts.revision}</p>
            </div>
          </div>

          <div className="relative mb-3">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search title, caption, creator..."
              className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 pl-9 pr-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={platformFilter}
                onChange={(e) => setPlatformFilter(e.target.value as any)}
                className="w-full bg-transparent py-2.5 text-sm outline-none"
              >
                <option value="all">All Platforms</option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="linkedin">LinkedIn</option>
                <option value="twitter">Twitter / X</option>
              </select>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="w-full bg-transparent py-2.5 text-sm outline-none"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="revision">Revision Requested</option>
                <option value="revision_accepted">Revision Accepted</option>
                <option value="resubmitted">Resubmitted</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredPosts.map((post) => {
            const meta = PLATFORM_META[post.platform];
            const active = post._id === currentPost?._id;

            return (
              <button
                key={post._id}
                onClick={() => setActivePostId(post._id)}
                className={cn(
                  "w-full text-left rounded-2xl border p-3 transition-all",
                  active
                    ? "border-indigo-200 bg-indigo-50 dark:bg-indigo-500/10 dark:border-indigo-500/30"
                    : "border-transparent hover:bg-gray-50 dark:hover:bg-slate-800/50"
                )}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span>{meta.icon}</span>
                    <span className={cn("text-[11px] font-bold", meta.color)}>
                      {meta.label}
                    </span>
                  </div>
                  <StatusBadge status={post.status} />
                </div>

                <p className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2">
                  {post.postTitle}
                </p>

                <p className="mt-1 text-xs text-gray-500 dark:text-slate-400 line-clamp-2">
                  {post.caption}
                </p>

                <div className="mt-2 flex items-center justify-between gap-2 text-[10px] text-gray-400 dark:text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock3 className="w-3 h-3" />
                    {new Date(post.scheduledAt).toLocaleString()}
                  </div>
                  <div className="font-semibold">Rev {post.revisionCount || 0}</div>
                </div>
              </button>
            );
          })}

          {!filteredPosts.length && (
            <div className="py-12 text-center text-sm text-gray-500 dark:text-slate-400">
              No content found for this client
            </div>
          )}
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-6">
        {!currentPost ? (
          <div className="flex items-center justify-center h-full text-sm text-gray-500 dark:text-slate-400">
            Select a content post
          </div>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-slate-800">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                      Preview
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-slate-400">
                      Live media preview
                    </p>
                  </div>
                  <StatusBadge status={currentPost.status} />
                </div>

                <div className="relative bg-gray-100 dark:bg-slate-800 aspect-video">
                  {renderPreview(
                    currentPost.url,
                    currentPost.mimeType,
                    currentPost.resourceType
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <p className="text-[11px] uppercase tracking-widest text-gray-400 dark:text-slate-500 font-semibold">
                      Current Caption
                    </p>
                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-gray-600 dark:text-slate-300">
                      <RotateCcw className="w-3.5 h-3.5" />
                      {currentPost.revisionCount || 0} revisions
                    </div>
                  </div>

                  <p className="text-sm leading-6 text-gray-700 dark:text-slate-300 whitespace-pre-wrap">
                    {currentPost.caption}
                  </p>

                  {!!currentPost.hashtags?.length && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {currentPost.hashtags.map((tag, i) => (
                        <span
                          key={`${tag}-${i}`}
                          className="rounded-full border border-indigo-100 dark:border-indigo-500/20 bg-indigo-50 dark:bg-indigo-500/10 px-2.5 py-1 text-xs text-indigo-600 dark:text-indigo-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {currentPost.revisionNote && (
                    <div className="mt-4 rounded-xl border border-red-200 dark:border-red-500/20 bg-red-50 dark:bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-300">
                      <strong>Latest Revision Note:</strong> {currentPost.revisionNote}
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
                <div className="px-5 py-4 border-b border-gray-200 dark:border-slate-800 flex items-center gap-2">
                  <History className="w-4 h-4 text-indigo-500" />
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                    Revision History
                  </h3>
                </div>

                <div className="p-5">
                  {currentPost.revisionHistory?.length ? (
                    <div className="space-y-4">
                      {currentPost.revisionHistory.map((item, idx) => (
                        <div
                          key={item._id || idx}
                          className="rounded-xl border border-gray-200 dark:border-slate-800 p-4"
                        >
                          <div className="flex items-center justify-between gap-3 mb-2">
                            <div className="font-semibold text-sm text-gray-900 dark:text-white">
                              {formatHistoryAction(item.action)}
                            </div>
                            <div className="text-xs text-gray-400">
                              {item.createdAt
                                ? new Date(item.createdAt).toLocaleString()
                                : "-"}
                            </div>
                          </div>

                          <div className="text-xs text-gray-500 dark:text-slate-400 mb-2">
                            By: {item.actorName || item.actedBy}
                          </div>

                          {item.note ? (
                            <div className="text-sm text-gray-700 dark:text-slate-300 mb-3">
                              {item.note}
                            </div>
                          ) : null}

                          {item.action === "revision_requested" &&
                            !item.isLocked &&
                            !item.isCancelled && (
                              <button
                                onClick={() => handleAcceptRequest(item._id!)}
                                disabled={acceptingId === item._id}
                                className="mb-3 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-3 py-2 text-xs font-semibold text-white hover:bg-orange-600 disabled:opacity-50"
                              >
                                <CheckCheck className="w-4 h-4" />
                                {acceptingId === item._id
                                  ? "Accepting..."
                                  : "Accept Request"}
                              </button>
                            )}

                          {item.isCancelled && (
                            <div className="mb-3 text-xs font-semibold text-red-500">
                              This request was cancelled by client.
                            </div>
                          )}

                          {item.isLocked && (
                            <div className="mb-3 text-xs font-semibold text-orange-500">
                              This request is locked and cannot be edited by client.
                            </div>
                          )}

                          {item.snapshot ? (
                            <div className="rounded-lg bg-gray-50 dark:bg-slate-800 p-3 text-xs space-y-2">
                              <div>
                                <span className="font-semibold">Title:</span>{" "}
                                {item.snapshot.postTitle || "-"}
                              </div>
                              <div>
                                <span className="font-semibold">Platform:</span>{" "}
                                {item.snapshot.platform || "-"}
                              </div>
                              <div>
                                <span className="font-semibold">Scheduled:</span>{" "}
                                {item.snapshot.scheduledAt
                                  ? new Date(
                                      item.snapshot.scheduledAt
                                    ).toLocaleString()
                                  : "-"}
                              </div>

                              <div className="pt-2">
                                {renderPreview(
                                  item.snapshot.url,
                                  item.snapshot.mimeType,
                                  item.snapshot.resourceType
                                )}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500 dark:text-slate-400">
                      No revision history available yet.
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
                <div className="px-5 py-4 border-b border-gray-200 dark:border-slate-800">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    Edit Content
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-slate-400">
                    Admin can update full content details
                  </p>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-2">
                      Replace Media (Optional)
                    </label>

                    <input
                      type="file"
                      accept="image/*,video/*"
                      onChange={(e) =>
                        setEditForm((prev) => ({
                          ...prev,
                          newFile: e.target.files?.[0] || null,
                        }))
                      }
                      className="w-full text-sm"
                    />

                    {editForm.newFile && (
                      <p className="text-xs text-green-500 mt-1">
                        New file selected: {editForm.newFile.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
                      Post Title
                    </label>
                    <input
                      value={editForm.postTitle}
                      onChange={(e) =>
                        setEditForm((prev) => ({ ...prev, postTitle: e.target.value }))
                      }
                      className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
                      Platform
                    </label>
                    <select
                      value={editForm.platform}
                      onChange={(e) =>
                        setEditForm((prev) => ({
                          ...prev,
                          platform: e.target.value as Platform,
                        }))
                      }
                      className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none"
                    >
                      <option value="instagram">Instagram</option>
                      <option value="facebook">Facebook</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="twitter">Twitter / X</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
                      Caption
                    </label>
                    <textarea
                      rows={6}
                      value={editForm.caption}
                      onChange={(e) =>
                        setEditForm((prev) => ({ ...prev, caption: e.target.value }))
                      }
                      className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-3 text-sm outline-none resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
                      Hashtags
                    </label>
                    <input
                      value={editForm.hashtags}
                      onChange={(e) =>
                        setEditForm((prev) => ({ ...prev, hashtags: e.target.value }))
                      }
                      placeholder="#design, #growth, #marketing"
                      className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
                      Scheduled At
                    </label>
                    <input
                      type="datetime-local"
                      value={editForm.scheduledAt}
                      onChange={(e) =>
                        setEditForm((prev) => ({ ...prev, scheduledAt: e.target.value }))
                      }
                      className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
                      Revision Note
                    </label>
                    <textarea
                      rows={4}
                      value={editForm.revisionNote}
                      onChange={(e) =>
                        setEditForm((prev) => ({
                          ...prev,
                          revisionNote: e.target.value,
                        }))
                      }
                      placeholder="Write revision note for client..."
                      className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-3 text-sm outline-none resize-none"
                    />
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={handleSave}
                      disabled={!isDirty || saving}
                      className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-40"
                    >
                      <Save className="w-4 h-4" />
                      {saving ? "Saving..." : "Save Changes"}
                    </button>

                    <button
                      onClick={handleApprove}
                      disabled={revisionLoading}
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 disabled:opacity-40"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Approve
                    </button>

                    <button
                      onClick={handleMarkRevision}
                      disabled={revisionLoading}
                      className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 disabled:opacity-40"
                    >
                      <History className="w-4 h-4" />
                      {revisionLoading ? "Sending..." : "Request Revision"}
                    </button>

                    {["revision", "revision_accepted"].includes(currentPost.status) && (
                      <button
                        onClick={handleResubmit}
                        disabled={resubmitLoading}
                        className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700 disabled:opacity-40"
                      >
                        <RotateCcw className="w-4 h-4" />
                        {resubmitLoading ? "Resubmitting..." : "Resubmit"}
                      </button>
                    )}

                    <button
                      onClick={handleDelete}
                      disabled={deleting}
                      className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-600 disabled:opacity-40"
                    >
                      {deleting ? <X className="w-4 h-4" /> : <Trash2 className="w-4 h-4" />}
                      {deleting ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm">
                <div className="px-5 py-4 border-b border-gray-200 dark:border-slate-800">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                    Asset Metadata
                  </h3>
                </div>

                <div className="p-5 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">File Name</p>
                    <p className="font-medium text-gray-800 dark:text-slate-200 break-all">
                      {currentPost.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Created By</p>
                    <p className="font-medium text-gray-800 dark:text-slate-200">
                      {currentPost.createdBy || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Mime Type</p>
                    <p className="font-medium text-gray-800 dark:text-slate-200">
                      {currentPost.mimeType || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Resource Type</p>
                    <p className="font-medium text-gray-800 dark:text-slate-200">
                      {currentPost.resourceType || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Size</p>
                    <p className="font-medium text-gray-800 dark:text-slate-200">
                      {currentPost.size
                        ? `${(currentPost.size / 1024 / 1024).toFixed(2)} MB`
                        : "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Dimensions</p>
                    <p className="font-medium text-gray-800 dark:text-slate-200">
                      {currentPost.width && currentPost.height
                        ? `${currentPost.width} × ${currentPost.height}`
                        : "—"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {uploadOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => !uploading && setUploadOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-slate-800">
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  Upload New Content
                </h2>
                <p className="text-xs text-gray-500 dark:text-slate-400">
                  This content will go to client review flow
                </p>
              </div>
              <button
                onClick={() => !uploading && setUploadOpen(false)}
                className="rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
                  Client
                </label>
                <select
                  value={selectedClientId}
                  onChange={(e) => setSelectedClientId(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none"
                >
                  <option value="">Select client</option>
                  {clients.map((client) => (
                    <option key={client._id} value={client._id}>
                      {client.profile?.companyName || "Unnamed Client"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
                  Media File
                </label>
                <label className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/60 px-6 py-8 cursor-pointer hover:border-indigo-400">
                  <div className="flex items-center gap-3 mb-2">
                    <Upload className="w-5 h-5 text-indigo-500" />
                    <FileImage className="w-5 h-5 text-pink-500" />
                    <Video className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-slate-200">
                    {uploadForm.file ? uploadForm.file.name : "Click to select image/video"}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    PNG, JPG, WEBP, MP4, MOV supported
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,video/*"
                    className="hidden"
                    onChange={(e) =>
                      setUploadForm((prev) => ({
                        ...prev,
                        file: e.target.files?.[0] || null,
                      }))
                    }
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
                    Post Title
                  </label>
                  <input
                    value={uploadForm.postTitle}
                    onChange={(e) =>
                      setUploadForm((prev) => ({ ...prev, postTitle: e.target.value }))
                    }
                    className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
                    Platform
                  </label>
                  <select
                    value={uploadForm.platform}
                    onChange={(e) =>
                      setUploadForm((prev) => ({
                        ...prev,
                        platform: e.target.value as Platform,
                      }))
                    }
                    className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none"
                  >
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="twitter">Twitter / X</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
                  Caption
                </label>
                <textarea
                  rows={5}
                  value={uploadForm.caption}
                  onChange={(e) =>
                    setUploadForm((prev) => ({ ...prev, caption: e.target.value }))
                  }
                  className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-3 text-sm outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
                    Hashtags
                  </label>
                  <input
                    value={uploadForm.hashtags}
                    onChange={(e) =>
                      setUploadForm((prev) => ({ ...prev, hashtags: e.target.value }))
                    }
                    placeholder="#brand, #campaign"
                    className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
                    Created By
                  </label>
                  <input
                    value={uploadForm.createdBy}
                    onChange={(e) =>
                      setUploadForm((prev) => ({ ...prev, createdBy: e.target.value }))
                    }
                    className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 dark:text-slate-400 mb-2">
                  Scheduled At
                </label>
                <input
                  type="datetime-local"
                  value={uploadForm.scheduledAt}
                  onChange={(e) =>
                    setUploadForm((prev) => ({ ...prev, scheduledAt: e.target.value }))
                  }
                  className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-3 py-2.5 text-sm outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => {
                    resetUploadForm();
                    setUploadOpen(false);
                  }}
                  disabled={uploading}
                  className="rounded-xl border border-gray-200 dark:border-slate-700 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  onClick={handleUpload}
                  disabled={uploading || !selectedClientId}
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
                >
                  <Upload className="w-4 h-4" />
                  {uploading ? "Uploading..." : "Upload Content"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}