"use client";

import { useMemo, useRef, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Facebook,
  FileImage,
  Globe2,
  ImagePlus,
  Instagram,
  Linkedin,
  Loader2,
  Music2,
  PlayCircle,
  Plus,
  RefreshCw,
  Search,
  Send,
  Settings2,
  Sparkles,
  Trash2,
  Upload,
  Video,
  Wand2,
  X,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { apiClient } from "../../lib/apiClient";
import { useGet } from "@/hooks/useGet";
import { usePostFormData } from "@/hooks/usePostFormData";

type Platform = "facebook" | "instagram" | "linkedin" | "youtube";
type PostStatus = "draft" | "scheduled" | "published" | "failed";
type ContentType = "post" | "reel" | "story" | "short" | "video";

type ScheduledPost = {
  id: string;
  title: string;
  caption: string;
  platforms: Platform[];
  status: PostStatus;
  contentType: ContentType;
  scheduledAt: string;
  mediaPreview?: string;
  createdBy: string;
};

type ClientItem = {
  _id: string;
  profile: {
    companyName: string;
    industry?: string;
    market?: string;
  };
  channels?: {
    channels?: string[];
    channelConfigs?: Record<string, any>;
  };
};

type ClientsResponse = {
  success: boolean;
  clients: ClientItem[];
};

const PLATFORM_META: Record<
  Platform,
  {
    label: string;
    short: string;
    icon: React.ReactNode;
    bg: string;
    text: string;
    border: string;
    hint: string;
  }
> = {
  facebook: {
    label: "Facebook",
    short: "FB",
    icon: <Facebook className="h-4 w-4" />,
    bg: "bg-blue-50 dark:bg-blue-500/10",
    text: "text-blue-600 dark:text-blue-300",
    border: "border-blue-200 dark:border-blue-500/30",
    hint: "Great for community updates, offers, testimonials and long captions.",
  },
  instagram: {
    label: "Instagram",
    short: "IG",
    icon: <Instagram className="h-4 w-4" />,
    bg: "bg-pink-50 dark:bg-pink-500/10",
    text: "text-pink-600 dark:text-pink-300",
    border: "border-pink-200 dark:border-pink-500/30",
    hint: "Best for reels, carousels, stories and visual-first posts.",
  },
  linkedin: {
    label: "LinkedIn",
    short: "IN",
    icon: <Linkedin className="h-4 w-4" />,
    bg: "bg-sky-50 dark:bg-sky-500/10",
    text: "text-sky-700 dark:text-sky-300",
    border: "border-sky-200 dark:border-sky-500/30",
    hint: "Use professional tone, case studies, hiring updates and thought leadership.",
  },
  youtube: {
    label: "YouTube",
    short: "YT",
    icon: <Youtube className="h-4 w-4" />,
    bg: "bg-red-50 dark:bg-red-500/10",
    text: "text-red-600 dark:text-red-300",
    border: "border-red-200 dark:border-red-500/30",
    hint: "Ideal for shorts, full videos, podcasts and educational content.",
  },
};

const STATUS_META: Record<
  PostStatus,
  { label: string; bg: string; text: string; dot: string }
> = {
  draft: {
    label: "Draft",
    bg: "bg-gray-100 dark:bg-slate-800",
    text: "text-gray-600 dark:text-slate-300",
    dot: "bg-gray-400",
  },
  scheduled: {
    label: "Scheduled",
    bg: "bg-orange-100 dark:bg-orange-500/10",
    text: "text-orange-700 dark:text-orange-300",
    dot: "bg-orange-500",
  },
  published: {
    label: "Published",
    bg: "bg-emerald-100 dark:bg-emerald-500/10",
    text: "text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-500",
  },
  failed: {
    label: "Failed",
    bg: "bg-red-100 dark:bg-red-500/10",
    text: "text-red-700 dark:text-red-300",
    dot: "bg-red-500",
  },
};

const CONTENT_TYPES: { label: string; value: ContentType; icon: React.ReactNode }[] = [
  { label: "Post", value: "post", icon: <FileImage className="h-4 w-4" /> },
  { label: "Reel", value: "reel", icon: <Music2 className="h-4 w-4" /> },
  { label: "Story", value: "story", icon: <Sparkles className="h-4 w-4" /> },
  { label: "Short", value: "short", icon: <PlayCircle className="h-4 w-4" /> },
  { label: "Video", value: "video", icon: <Video className="h-4 w-4" /> },
];

const DEMO_QUEUE: ScheduledPost[] = [
  {
    id: "1",
    title: "Client campaign launch",
    caption: "A premium announcement post for campaign launch and lead generation.",
    platforms: ["facebook", "instagram"],
    status: "scheduled",
    contentType: "post",
    scheduledAt: new Date(Date.now() + 1000 * 60 * 60 * 5).toISOString(),
    createdBy: "Admin Team",
  },
  {
    id: "2",
    title: "Founder reel",
    caption: "Short founder message for Instagram reels and YouTube shorts.",
    platforms: ["instagram", "youtube"],
    status: "draft",
    contentType: "reel",
    scheduledAt: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
    createdBy: "Admin Team",
  },
  {
    id: "3",
    title: "Case study update",
    caption: "Professional LinkedIn content for performance marketing case study.",
    platforms: ["linkedin"],
    status: "published",
    contentType: "post",
    scheduledAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    createdBy: "Admin Team",
  },
];

function StatusBadge({ status }: { status: PostStatus }) {
  const s = STATUS_META[status];

  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium", s.bg, s.text)}>
      <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} />
      {s.label}
    </span>
  );
}

function formatDateTime(value?: string) {
  if (!value) return "Not scheduled";
  return new Date(value).toLocaleString();
}

function buildPreviewUrl(file: File | null) {
  if (!file) return "";
  return URL.createObjectURL(file);
}

export default function AdminSocialMediaPostingsPage() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [selectedClientId, setSelectedClientId] = useState("");

  const { data: clientsData, isLoading: clientsLoading } =
  useGet<ClientsResponse>(["clients"], "/clients");

const clients = clientsData?.clients || [];

const selectedClient = useMemo(
  () => clients.find((client) => client._id === selectedClientId) || null,
  [clients, selectedClientId]
);

const createSocialPost = usePostFormData("/admin/social-posts", "social-posts");

  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([
    "facebook",
    "instagram",
  ]);
  const [contentType, setContentType] = useState<ContentType>("post");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [youtubeTitle, setYoutubeTitle] = useState("");
  const [youtubeDescription, setYoutubeDescription] = useState("");
  const [scheduledAt, setScheduledAt] = useState("");
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [queue, setQueue] = useState<ScheduledPost[]>(DEMO_QUEUE);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | PostStatus>("all");
  const [submitting, setSubmitting] = useState<null | "draft" | "schedule" | "publish">(null);

  const mediaPreview = useMemo(() => buildPreviewUrl(mediaFile), [mediaFile]);
  const selectedMeta = selectedPlatforms.map((p) => PLATFORM_META[p]);

  const isVideo =
    mediaFile?.type.startsWith("video/") ||
    ["reel", "story", "short", "video"].includes(contentType);

  const filteredQueue = useMemo(() => {
    let list = [...queue];

    if (statusFilter !== "all") {
      list = list.filter((item) => item.status === statusFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.caption.toLowerCase().includes(q) ||
          item.platforms.some((p) => PLATFORM_META[p].label.toLowerCase().includes(q)),
      );
    }

    return list;
  }, [queue, search, statusFilter]);

  const counts = useMemo(() => {
    return {
      total: queue.length,
      scheduled: queue.filter((item) => item.status === "scheduled").length,
      published: queue.filter((item) => item.status === "published").length,
      failed: queue.filter((item) => item.status === "failed").length,
    };
  }, [queue]);

  const togglePlatform = (platform: Platform) => {
    setSelectedPlatforms((prev) => {
      if (prev.includes(platform)) {
        return prev.length === 1 ? prev : prev.filter((p) => p !== platform);
      }
      return [...prev, platform];
    });
  };

  const resetForm = () => {
    setTitle("");
    setCaption("");
    setHashtags("");
    setYoutubeTitle("");
    setYoutubeDescription("");
    setScheduledAt("");
    setMediaFile(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleSubmit = async (mode: "draft" | "schedule" | "publish") => {
    if (!selectedClientId) {
  alert("Please select client first");
  return;
}

    if (!title.trim() && mode !== "draft") {
      alert("Please enter post title");
      return;
    }

    if (!caption.trim() && mode !== "draft") {
      alert("Please enter caption");
      return;
    }

    if (mode === "schedule" && !scheduledAt) {
      alert("Please select schedule date and time");
      return;
    }

    const instagramSelected = selectedPlatforms.includes("instagram");

if (instagramSelected && !mediaFile) {
  alert("Instagram post ke liye image ya video upload karna required hai");
  return;
}

    try {
      setSubmitting(mode);

      const formData = new FormData();
      formData.append("clientId", selectedClientId);
      formData.append("title", title.trim());
      formData.append("caption", caption.trim());
      formData.append("hashtags", JSON.stringify(hashtags.split(",").map((h) => h.trim()).filter(Boolean)));
      formData.append("platforms", JSON.stringify(selectedPlatforms));
      formData.append("contentType", contentType);
      formData.append("youtubeTitle", youtubeTitle.trim());
      formData.append("youtubeDescription", youtubeDescription.trim());
      formData.append("scheduledAt", scheduledAt ? new Date(scheduledAt).toISOString() : "");
      formData.append("mode", mode);

      if (mediaFile) {
        formData.append("file", mediaFile);
      }

console.log("MEDIA FILE:", mediaFile);

for (const pair of formData.entries()) {
  console.log(pair[0], pair[1]);
}

const res = await createSocialPost.mutateAsync(formData);

 const savedPost = res?.data;

const newItem: ScheduledPost = {
  id: savedPost?._id || crypto.randomUUID(),
  title: savedPost?.title || title.trim() || "Untitled Draft",
  caption: savedPost?.caption || caption.trim() || "No caption added yet.",
  platforms: savedPost?.platforms || selectedPlatforms,
  status:
    savedPost?.status ||
    (mode === "publish"
      ? "published"
      : mode === "schedule"
      ? "scheduled"
      : "draft"),
  contentType: savedPost?.contentType || contentType,
  scheduledAt: savedPost?.scheduledAt || new Date().toISOString(),
  mediaPreview: savedPost?.media?.url || mediaPreview,
  createdBy: savedPost?.createdBy || "Admin Team",
};


      

      setQueue((prev) => [newItem, ...prev]);
      resetForm();
    } catch (err) {
      console.error(err);
      alert("Something went wrong while saving post");
    } finally {
      setSubmitting(null);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 text-gray-900 dark:bg-slate-950 dark:text-white">
      <div className="border-b border-gray-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-[#020817]/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-3xl">
              Schedule, preview and publish social posts
            </h1>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-slate-400">
              Create one post and publish it across Facebook, Instagram, LinkedIn and YouTube from a single admin workspace.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2 rounded-2xl border border-gray-200 bg-gray-50 p-2 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="min-w-20 rounded-xl bg-white px-3 py-2 text-center shadow-sm dark:bg-slate-800">
              <p className="text-[10px] font-medium uppercase text-gray-400">Total</p>
              <p className="text-lg font-medium">{counts.total}</p>
            </div>
            <div className="min-w-20 rounded-xl bg-orange-50 px-3 py-2 text-center dark:bg-orange-500/10">
              <p className="text-[10px] font-medium uppercase text-orange-500">Scheduled</p>
              <p className="text-lg font-medium text-orange-600">{counts.scheduled}</p>
            </div>
            <div className="min-w-20 rounded-xl bg-emerald-50 px-3 py-2 text-center dark:bg-emerald-500/10">
              <p className="text-[10px] font-medium uppercase text-emerald-500">Published</p>
              <p className="text-lg font-medium text-emerald-600">{counts.published}</p>
            </div>
            <div className="min-w-20 rounded-xl bg-red-50 px-3 py-2 text-center dark:bg-red-500/10">
              <p className="text-[10px] font-medium uppercase text-red-500">Failed</p>
              <p className="text-lg font-medium text-red-600">{counts.failed}</p>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 xl:grid-cols-[1fr_420px]">
        <section className="space-y-6">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
            <div className="flex flex-col gap-3 border-b border-gray-200 px-5 py-4 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-medium text-gray-950 dark:text-white">Post Composer</h2>
                <p className="text-xs text-gray-500 dark:text-slate-400">Write once, customize and publish everywhere.</p>
              </div>

              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Reset
              </button>
            </div>

            <div className="space-y-6 p-5">
                <div>
  <label className="mb-3 block text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
    Select Client
  </label>

  <div className="relative">
    <select
      value={selectedClientId}
      onChange={(e) => setSelectedClientId(e.target.value)}
      disabled={clientsLoading}
      className="w-full appearance-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 pr-10 text-sm outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-500/10 disabled:opacity-60 dark:border-slate-800 dark:bg-slate-800"
    >
      <option value="">
        {clientsLoading ? "Loading clients..." : "Select client"}
      </option>

      {clients.map((client) => (
        <option key={client._id} value={client._id}>
          {client.profile?.companyName || "Unnamed Client"}
        </option>
      ))}
    </select>

    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
  </div>

  {selectedClient && (
    <div className="mt-3 rounded-2xl border border-orange-100 bg-orange-50 p-4 dark:border-orange-500/20 dark:bg-orange-500/10">
      <p className="text-sm font-semibold text-gray-900 dark:text-white">
        {selectedClient.profile?.companyName}
      </p>

      <p className="mt-1 text-xs text-gray-500 dark:text-slate-400">
        {selectedClient.profile?.industry || "No industry"} ·{" "}
        {selectedClient.profile?.market || "No market"}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {(selectedClient.channels?.channels || []).map((channel) => (
          <span
            key={channel}
            className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-orange-700 dark:bg-slate-900 dark:text-orange-300"
          >
            {channel}
          </span>
        ))}
      </div>
    </div>
  )}
</div>
              <div>
                <label className="mb-3 block text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                  Select Platforms
                </label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {(Object.keys(PLATFORM_META) as Platform[]).map((platform) => {
                    const meta = PLATFORM_META[platform];
                    const active = selectedPlatforms.includes(platform);

                    return (
                      <button
                        key={platform}
                        type="button"
                        onClick={() => togglePlatform(platform)}
                        className={cn(
                          "rounded-2xl border p-4 text-left transition-all",
                          active
                            ? cn(
                                meta.bg,
                                meta.border,
                                "shadow-md ring-2 ring-orange-500 border-orange-400 dark:border-orange-500"
                              )
                            : "border-gray-200 bg-gray-50 hover:bg-white dark:border-slate-800 dark:bg-slate-800/50 dark:hover:bg-slate-800",
                        )}
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <div className={cn("inline-flex h-9 w-9 items-center justify-center rounded-xl", meta.bg, meta.text)}>
                            {meta.icon}
                          </div>
                          {active ? (
                            <CheckCircle2 className="h-4 w-4 text-orange-600" />
                          ) : (
                            <Plus className="h-4 w-4 text-gray-400" />
                          )}
                        </div>
                        <p className="text-sm font-medium text-gray-800 dark:text-slate-200">{meta.label}</p>
                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500 dark:text-slate-400">{meta.hint}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
                  Content Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {CONTENT_TYPES.map((item) => {
                    const active = item.value === contentType;
                    return (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setContentType(item.value)}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition",
                          active
                            ? "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-300"
                            : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800",
                        )}
                      >
                        {item.icon}
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_300px]">
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-xs font-medium text-gray-500 dark:text-slate-400">Post Title</label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Example: New offer campaign launch"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-800 dark:bg-slate-800"
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="block text-xs font-medium text-gray-500 dark:text-slate-400">Caption</label>
                      <button
                        type="button"
                        onClick={() => {
                          const starter = "We are excited to share something new. Designed to help our audience take the next step with confidence.\n\nTell us what you think in the comments.";
                          setCaption((prev) => prev || starter);
                        }}
                        className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-[11px] font-medium text-orange-700 hover:bg-orange-100 dark:bg-orange-500/10 dark:text-orange-300"
                      >
                        <Wand2 className="h-3 w-3" />
                        Smart Draft
                      </button>
                    </div>
                    <textarea
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                      rows={8}
                      placeholder="Write your post caption here..."
                      className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-800 dark:bg-slate-800"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium text-gray-500 dark:text-slate-400">Hashtags</label>
                    <input
                      value={hashtags}
                      onChange={(e) => setHashtags(e.target.value)}
                      placeholder="#marketing, #growth, #business"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-800 dark:bg-slate-800"
                    />
                  </div>

                  {selectedPlatforms.includes("youtube") && (
                    <div className="rounded-2xl border border-red-100 bg-red-50/50 p-4 dark:border-red-500/20 dark:bg-red-500/10">
                      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-red-300">
                        <Youtube className="h-4 w-4" />
                        YouTube Details
                      </div>

                      <div className="space-y-3">
                        <input
                          value={youtubeTitle}
                          onChange={(e) => setYoutubeTitle(e.target.value)}
                          placeholder="YouTube title"
                          className="w-full rounded-xl border border-red-100 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-red-500/10 dark:border-red-500/20 dark:bg-slate-900"
                        />
                        <textarea
                          value={youtubeDescription}
                          onChange={(e) => setYoutubeDescription(e.target.value)}
                          rows={4}
                          placeholder="YouTube description"
                          className="w-full resize-none rounded-xl border border-red-100 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-red-500/10 dark:border-red-500/20 dark:bg-slate-900"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-xs font-medium text-gray-500 dark:text-slate-400">Media</label>
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="flex min-h-[240px] w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-200 bg-gray-50 p-5 text-center transition hover:border-orange-300 hover:bg-orange-50/40 dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-orange-500/40 dark:hover:bg-orange-500/10"
                    >
                      {mediaPreview ? (
                        isVideo ? (
                          <video src={mediaPreview} controls className="max-h-60 w-full rounded-2xl object-cover" />
                        ) : (
                          <img src={mediaPreview} alt="Preview" className="max-h-60 w-full rounded-2xl object-cover" />
                        )
                      ) : (
                        <>
                          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
                            <ImagePlus className="h-7 w-7" />
                          </div>
                          <p className="text-sm font-medium text-gray-800 dark:text-slate-200">Upload media</p>
                          <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-slate-400">Images, videos, reels, shorts and story creatives</p>
                        </>
                      )}
                    </button>
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*,video/*"
                      className="hidden"
                      onChange={(e) => setMediaFile(e.target.files?.[0] || null)}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium text-gray-500 dark:text-slate-400">Schedule Date & Time</label>
                    <div className="relative">
                      <CalendarDays className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <input
                        type="datetime-local"
                        value={scheduledAt}
                        onChange={(e) => setScheduledAt(e.target.value)}
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-800 dark:bg-slate-800"
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">Selected Platforms</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedMeta.map((meta) => (
                        <span key={meta.label} className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium", meta.bg, meta.text)}>
                          {meta.icon}
                          {meta.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 border-t border-gray-200 pt-5 dark:border-slate-800 sm:grid-cols-3">
                <button
                  type="button"
                  onClick={() => handleSubmit("draft")}
                  disabled={!!submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  {submitting === "draft" ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileImage className="h-4 w-4" />}
                  Save Draft
                </button>

                <button
                  type="button"
                  onClick={() => handleSubmit("schedule")}
                  disabled={!!submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-700 disabled:opacity-50"
                >
                  {submitting === "schedule" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Clock3 className="h-4 w-4" />}
                  Schedule Post
                </button>

                <button
                  type="button"
                  onClick={() => handleSubmit("publish")}
                  disabled={!!submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-600 disabled:opacity-50"
                >
                  {submitting === "publish" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  Publish Now
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
            <div className="flex flex-col gap-3 border-b border-gray-200 px-5 py-4 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-medium text-gray-950 dark:text-white">Publishing Queue</h2>
                <p className="text-xs text-gray-500 dark:text-slate-400">Drafts, scheduled posts and publishing history.</p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search queue..."
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm outline-none dark:border-slate-800 dark:bg-slate-800 sm:w-56"
                  />
                </div>

                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as "all" | PostStatus)}
                    className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 pr-9 text-sm font-semibold outline-none dark:border-slate-800 dark:bg-slate-800 sm:w-40"
                  >
                    <option value="all">All Status</option>
                    <option value="draft">Draft</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="published">Published</option>
                    <option value="failed">Failed</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-slate-800">
              {filteredQueue.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 p-5 hover:bg-gray-50 dark:hover:bg-slate-800/40 lg:flex-row lg:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gray-100 dark:bg-slate-800">
                    {item.mediaPreview ? (
                      <img src={item.mediaPreview} alt={item.title} className="h-full w-full object-cover" />
                    ) : item.contentType === "video" || item.contentType === "reel" || item.contentType === "short" ? (
                      <Video className="h-7 w-7 text-gray-400" />
                    ) : (
                      <FileImage className="h-7 w-7 text-gray-400" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <StatusBadge status={item.status} />
                      <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium capitalize text-gray-600 dark:bg-slate-800 dark:text-slate-300">{item.contentType}</span>
                    </div>
                    <h3 className="truncate text-sm font-semibold text-gray-950 dark:text-white">{item.title}</h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500 dark:text-slate-400">{item.caption}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.platforms.map((platform) => {
                        const meta = PLATFORM_META[platform];
                        return (
                          <span key={platform} className={cn("inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold", meta.bg, meta.text)}>
                            {meta.icon}
                            {meta.short}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:w-52 lg:items-end">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-slate-400">
                      <Clock3 className="h-3.5 w-3.5" />
                      {formatDateTime(item.scheduledAt)}
                    </div>
                    <div className="flex gap-2">
                      <button className="rounded-xl border border-gray-200 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                        Edit
                      </button>
                      <button
                        onClick={() => setQueue((prev) => prev.filter((q) => q.id !== item.id))}
                        className="rounded-xl bg-red-50 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-100 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {!filteredQueue.length && (
                <div className="flex min-h-56 flex-col items-center justify-center p-10 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
                    <CalendarDays className="h-7 w-7" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-950 dark:text-white">No posts found</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500 dark:text-slate-400">Create your first post or change the search/filter options.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <aside className="space-y-6 xl:sticky xl:top-6 xl:self-start">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-slate-800">
              <div>
                <h2 className="text-lg font-medium text-gray-950 dark:text-white">Live Preview</h2>
                <p className="text-xs text-gray-500 dark:text-slate-400">Approximate platform preview</p>
              </div>
              <Settings2 className="h-4 w-4 text-gray-400" />
            </div>

            <div className="p-5">
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#020817]">
                <div className="flex items-center gap-3 border-b border-gray-100 p-4 dark:border-slate-800">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-pink-500 font-semibold text-white">
                    A
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-gray-950 dark:text-white">{selectedClient?.profile?.companyName || "Admin Brand"}</p>
                    <p className="text-xs text-gray-400">Sponsored · Public</p>
                  </div>
                  <div className="flex -space-x-2">
                    {selectedPlatforms.slice(0, 3).map((p) => {
                      const meta = PLATFORM_META[p];
                      return (
                        <span key={p} className={cn("inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-xs dark:border-[#020817]", meta.bg, meta.text)}>
                          {meta.icon}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="mb-2 text-sm font-semibold text-gray-950 dark:text-white">{title || "Your post title will appear here"}</h3>
                  <p className="whitespace-pre-wrap text-sm leading-6 text-gray-600 dark:text-slate-300">
                    {caption || "Start writing your caption to see a live preview of how the post may look across selected platforms."}
                  </p>

                  {hashtags && (
                    <p className="mt-3 text-sm font-semibold text-orange-600 dark:text-orange-300">
                      {hashtags
                        .split(",")
                        .map((h) => h.trim())
                        .filter(Boolean)
                        .map((h) => (h.startsWith("#") ? h : `#${h}`))
                        .join(" ")}
                    </p>
                  )}
                </div>

                <div className="bg-gray-100 dark:bg-slate-800">
                  {mediaPreview ? (
                    isVideo ? (
                      <video src={mediaPreview} controls className="max-h-80 w-full object-cover" />
                    ) : (
                      <img src={mediaPreview} alt="preview" className="max-h-80 w-full object-cover" />
                    )
                  ) : (
                    <div className="flex h-72 flex-col items-center justify-center text-center text-gray-400">
                      <ImagePlus className="mb-3 h-10 w-10" />
                      <p className="text-sm font-medium">Media preview</p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between p-4 text-xs font-medium text-gray-500 dark:text-slate-400">
                  <span>{selectedPlatforms.length} platforms selected</span>
                  <span>{scheduledAt ? formatDateTime(scheduledAt) : "Not scheduled"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-orange-500" />
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white">Publishing Checklist</h3>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <CheckCircle2 className={cn("h-4 w-4", title.trim() ? "text-emerald-500" : "text-gray-300")} />
                <span className="text-gray-600 dark:text-slate-300">Post title added</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className={cn("h-4 w-4", caption.trim() ? "text-emerald-500" : "text-gray-300")} />
                <span className="text-gray-600 dark:text-slate-300">Caption added</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className={cn("h-4 w-4", mediaFile ? "text-emerald-500" : "text-gray-300")} />
                <span className="text-gray-600 dark:text-slate-300">Media attached</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className={cn("h-4 w-4", scheduledAt ? "text-emerald-500" : "text-gray-300")} />
                <span className="text-gray-600 dark:text-slate-300">Schedule time selected</span>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
