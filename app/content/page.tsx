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
  Upload,
  Plus,
  FileImage,
  Video,
  RotateCcw,
  History,
  CheckCheck,
} from "lucide-react";

type Platform = "instagram" | "facebook" | "linkedin" | "twitter";

type ClientProfile = {
  _id: string;
  companyName: string;
  industry: string;
  revenueModel: string;
  market: string;
  description: string;
  targetAudience: string;
  budget: string;
};

type ClientGoals = {
  _id: string;
  primaryGoals: string[];
  growthTarget: string;
  timeline: string;
  goalNotes: string;
};

type ChannelConfigMetaAds = {
  accessToken?: string;
  adAccountId?: string;
  pageId?: string;
};

type ChannelConfigGoogleAnalytics = {
  propertyId?: string;
  measurementId?: string;
  websiteUrl?: string;
};

type ClientChannels = {
  _id: string;
  channels: string[];
  crm: string;
  analytics: string;
  channelConfigs?: {
    "Meta Ads"?: ChannelConfigMetaAds;
    "Google Analytics"?: ChannelConfigGoogleAnalytics;
    [key: string]: any;
  };
};

type ClientKpis = {
  _id: string;
  cpl: string;
  cac: string;
  roas: string;
  ltv: string;
  conversionRate: string;
  leadTarget: string;
  reportingFreq: string;
};

type ClientItem = {
  _id: string;
  status: string;
  currentStep: number;
  profile: ClientProfile;
  goals: ClientGoals;
  channels: ClientChannels;
  kpis: ClientKpis;
  createdAt: string;
};

type ClientsPagination = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

type ClientsResponse = {
  success: boolean;
  message: string;
  clients: ClientItem[];
  pagination: ClientsPagination;
};

type Status =
  | "pending"
  | "approved"
  | "revision"
  | "revision_accepted"
  | "resubmitted";

type ResourceType = "image" | "video" | "raw" | "auto";

type ReviewFeedItem = {
  _id: string;
  clientId: string;
  name: string;
  url: string;
  publicId: string;
  mimeType: string;
  resourceType: string;
  size: number;
  width: number | null;
  height: number | null;
  postTitle: string;
  platform: string;
  caption: string;
  hashtags: string[];
  scheduledAt: string;
  status: string;
  revisionNote: string;
  reviewedAt: string | null;
  revisionCount: number;
  createdBy: string;
  currentRequestGroupId: string;
  revisionHistory: RevisionHistoryItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type ContentPost = Omit<
  ReviewFeedItem,
  "platform" | "status" | "resourceType"
> & {
  platform: Platform;
  status: Status;
  resourceType: ResourceType;
};

type ReviewFeedResponse = {
  success: boolean;
  data: ReviewFeedItem[];
};

type RevisionAction =
  | "revision_requested"
  | "revision_edited"
  | "revision_cancelled"
  | "revision_accepted"
  | "resubmitted"
  | "approved";

type RevisionActor = "client" | "admin" | "system";

type RevisionHistoryItem = {
  _id?: string;
  action: RevisionAction;
  note: string;
  actedBy: RevisionActor;
  actorName: string;
  previousStatus: Status;
  newStatus: Status;
  requestGroupId: string;
  isLocked: boolean;
  isCancelled: boolean;
  snapshot: {
    postTitle: string;
    caption: string;
    hashtags: string[];
    scheduledAt: string | null;
    platform: Platform;
    url: string;
    mimeType: string;
    resourceType: ResourceType;
  };
  createdAt?: string;
  updatedAt?: string;
};

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
  const s = STATUS_MAP[status] || STATUS_MAP.pending;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold",
        s.bg,
        s.text,
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full", s.dot)} />
      {s.label}
    </span>
  );
}

function toLocalInputValue(iso?: string) {
  if (!iso) return "";

  const d = new Date(iso);
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60 * 1000);

  return local.toISOString().slice(0, 16);
}

const isValidPlatform = (value: string): value is Platform =>
  ["instagram", "facebook", "linkedin", "twitter"].includes(value);

const isValidStatus = (value: string): value is Status =>
  [
    "pending",
    "approved",
    "revision",
    "revision_accepted",
    "resubmitted",
  ].includes(value);

const isValidResourceType = (value: string): value is ResourceType =>
  ["image", "video", "raw", "auto"].includes(value);

const toContentPost = (post: ReviewFeedItem): ContentPost | null => {
  if (
    !post ||
    typeof post._id !== "string" ||
    typeof post.url !== "string" ||
    typeof post.postTitle !== "string" ||
    !isValidPlatform(post.platform) ||
    !isValidStatus(post.status) ||
    !isValidResourceType(post.resourceType)
  ) {
    return null;
  }

  return {
    ...post,
    platform: post.platform,
    status: post.status,
    resourceType: post.resourceType,
  };
};

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
    <video
      src={url}
      controls
      className="w-full h-full rounded-lg object-cover"
    />
  ) : (
    <img
      src={url}
      alt="preview"
      className="w-full h-full rounded-lg object-cover"
    />
  );
}

export default function AdminContentManagementPage() {
  const [selectedClientId, setSelectedClientId] = useState("");
  const [posts, setPosts] = useState<ContentPost[]>([]);
  const [activePostId, setActivePostId] = useState("");

  const [searchClient, setSearchClient] = useState("");
  const [searchContent, setSearchContent] = useState("");

  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [revisionLoading, setRevisionLoading] = useState(false);
  const [resubmitLoading, setResubmitLoading] = useState(false);
  const [acceptingId, setAcceptingId] = useState("");

  const [uploadOpen, setUploadOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [mediaOpen, setMediaOpen] = useState(false);
const [editOpen, setEditOpen] = useState(false);

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
    isLoading: clientsLoading,
    error: clientsError,
  } = useGet<ClientsResponse>(["clients"], "/clients");

  const clients: ClientItem[] = clientsData?.clients || [];

  useEffect(() => {
    if (!selectedClientId && clients.length > 0) {
      setSelectedClientId(clients[0]._id);
    }
  }, [clients, selectedClientId]);

  const selectedClient = useMemo(
    () => clients.find((client) => client._id === selectedClientId) || null,
    [clients, selectedClientId],
  );

  const { data, error, refetch, isLoading } = useGet<ReviewFeedResponse>(
    ["review-feed", selectedClientId],
    selectedClientId ? `/assets/review-feed?clientId=${selectedClientId}` : "",
    { enabled: !!selectedClientId },
  );

  useEffect(() => {
    const rawPosts = Array.isArray(data?.data) ? data.data : [];

    const validPosts: ContentPost[] = rawPosts
      .map(toContentPost)
      .filter((post): post is ContentPost => post !== null);

    setPosts(validPosts);

    setActivePostId((prev) =>
      prev && validPosts.some((post) => post._id === prev) ? prev : "",
    );
  }, [data]);

  const filteredClients = useMemo(() => {
    const q = searchClient.trim().toLowerCase();

    if (!q) return clients;

    return clients.filter((client) => {
      const name = client.profile?.companyName || "";
      const industry = client.profile?.industry || "";
      const market = client.profile?.market || "";

      return `${name} ${industry} ${market}`.toLowerCase().includes(q);
    });
  }, [clients, searchClient]);

  const filteredPosts = useMemo(() => {
    let list = [...posts];

    if (searchContent.trim()) {
      const q = searchContent.toLowerCase();

      list = list.filter(
        (p) =>
          p.postTitle.toLowerCase().includes(q) ||
          p.caption.toLowerCase().includes(q) ||
          p.platform.toLowerCase().includes(q) ||
          p.createdBy?.toLowerCase().includes(q),
      );
    }

    return list;
  }, [posts, searchContent]);

 const currentPost = useMemo<ContentPost | null>(
  () => posts.find((p) => p._id === activePostId) || null,
  [posts, activePostId],
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
    setEditOpen(false);
  }, [currentPost]);

  const counts = useMemo(() => {
    return {
      total: posts.length,
      pending: posts.filter((p) => p.status === "pending").length,
      approved: posts.filter((p) => p.status === "approved").length,
      revision: posts.filter((p) =>
        ["revision", "revision_accepted", "resubmitted"].includes(p.status),
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
            .filter(Boolean),
        ),
      );
      formData.append(
        "scheduledAt",
        new Date(uploadForm.scheduledAt).toISOString(),
      );
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
            .filter(Boolean),
        ),
      );
      formData.append(
        "scheduledAt",
        new Date(editForm.scheduledAt).toISOString(),
      );
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
        const normalized = toContentPost(updated);
        if (normalized) {
          setPosts((prev) =>
            prev.map((p) => (p._id === normalized._id ? normalized : p)),
          );
        }
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
        actorName: "Admin Team",
        actedBy: "admin",
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
        actorName: "Admin Team",
        actedBy: "admin",
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

      await apiClient.patch(
        `/assets/${currentPost._id}/revision/${historyId}/accept`,
        {
          actorName: "Admin Team",
        },
      );

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
      <div className="flex min-h-[60vh] items-center justify-center text-sm text-gray-500 dark:text-slate-400">
        Loading clients...
      </div>
    );
  }

  if (clientsError) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-sm text-red-500">
        Failed to load clients
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-64px)] bg-gray-50 dark:bg-slate-950/30">
      <div
        className={cn(
          "grid h-full overflow-hidden",
          currentPost ? "grid-cols-[300px_1fr]" : "grid-cols-[300px_370px_1fr]",
        )}
      >
        {" "}
        {/* LEFT CLIENT PANEL */}
        <aside className="flex flex-col border-r border-gray-200 bg-white dark:border-slate-800 dark:bg-[#020817]">
          <div className="border-b border-gray-200 p-4 dark:border-slate-800">
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              Clients
            </h1>
            <p className="text-xs text-gray-500 dark:text-slate-400">
              Select client to manage content
            </p>

            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                value={searchClient}
                onChange={(e) => setSearchClient(e.target.value)}
                placeholder="Search clients..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-800"
              />
            </div>
          </div>

          <div className="flex-1 space-y-1 overflow-y-auto p-2">
            {filteredClients.map((client) => {
              const active = client._id === selectedClientId;
              const name = client.profile?.companyName || "Unnamed Client";

              return (
                <button
                  key={client._id}
                  onClick={() => {
                    setSelectedClientId(client._id);
                    setActivePostId("");
                    setSearchContent("");
                  }}
                  className={cn(
                    "w-full rounded-2xl border p-3 text-left transition-all",
                    active
                      ? "border-orange-200 bg-orange-50 dark:border-orange-500/30 dark:bg-orange-500/10"
                      : "border-transparent hover:bg-gray-50 dark:hover:bg-slate-800/60",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600 dark:bg-orange-500/10">
                      {name.charAt(0).toUpperCase()}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                        {name}
                      </p>
                      <p className="truncate text-xs text-gray-500 dark:text-slate-400">
                        {client.profile?.industry || "No industry"} ·{" "}
                        {client.profile?.market || "No market"}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}

            {!filteredClients.length && (
              <div className="py-10 text-center text-sm text-gray-500 dark:text-slate-400">
                No clients found
              </div>
            )}
          </div>
        </aside>
        {/* MIDDLE CONTENT PANEL */}
        {!currentPost && (
          <aside className="flex flex-col border-r border-gray-200 bg-white dark:border-slate-800 dark:bg-[#020817]">
            <div className="border-b border-gray-200 p-4 dark:border-slate-800">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    Content
                  </h2>
                  <p className="truncate text-xs text-gray-500 dark:text-slate-400">
                    {selectedClient?.profile?.companyName || "Select client"}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => refetch?.()}
                    disabled={!selectedClientId}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => setUploadOpen(true)}
                    disabled={!selectedClientId}
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-3 py-2 text-xs font-semibold text-white hover:bg-orange-700 disabled:opacity-50"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Upload
                  </button>
                </div>
              </div>

              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  value={searchContent}
                  onChange={(e) => setSearchContent(e.target.value)}
                  placeholder="Search content..."
                  disabled={!selectedClientId}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-orange-500/20 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-800"
                />
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2">
                <div className="rounded-xl bg-gray-50 p-2 text-center dark:bg-slate-800">
                  <p className="text-[10px] text-gray-400">Total</p>
                  <p className="font-bold text-gray-900 dark:text-white">
                    {counts.total}
                  </p>
                </div>
                <div className="rounded-xl bg-amber-50 p-2 text-center dark:bg-amber-500/10">
                  <p className="text-[10px] text-gray-400">Pending</p>
                  <p className="font-bold text-amber-600">{counts.pending}</p>
                </div>
                <div className="rounded-xl bg-emerald-50 p-2 text-center dark:bg-emerald-500/10">
                  <p className="text-[10px] text-gray-400">Approved</p>
                  <p className="font-bold text-emerald-600">
                    {counts.approved}
                  </p>
                </div>
                <div className="rounded-xl bg-red-50 p-2 text-center dark:bg-red-500/10">
                  <p className="text-[10px] text-gray-400">Rev</p>
                  <p className="font-bold text-red-600">{counts.revision}</p>
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-1 overflow-y-auto p-2">
              {isLoading ? (
                <div className="flex h-full items-center justify-center text-sm text-gray-500 dark:text-slate-400">
                  Loading content...
                </div>
              ) : error ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-sm text-red-500">
                  Failed to load content
                  <button
                    onClick={() => refetch?.()}
                    className="rounded-xl bg-orange-600 px-4 py-2 text-xs font-semibold text-white"
                  >
                    Retry
                  </button>
                </div>
              ) : !selectedClientId ? (
                <div className="flex h-full items-center justify-center text-sm text-gray-500 dark:text-slate-400">
                  Select a client first
                </div>
              ) : filteredPosts.length ? (
                filteredPosts.map((post) => {
                  const meta = PLATFORM_META[post.platform];
                  const active = post._id === currentPost?._id;

                  return (
                    <button
                      key={post._id}
                      onClick={() => setActivePostId(post._id)}
                      className={cn(
                        "w-full rounded-2xl border p-3 text-left transition-all",
                        active
                          ? "border-orange-200 bg-orange-50 dark:border-orange-500/30 dark:bg-orange-500/10"
                          : "border-transparent hover:bg-gray-50 dark:hover:bg-slate-800/60",
                      )}
                    >
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span>{meta.icon}</span>
                          <span
                            className={cn("text-[11px] font-bold", meta.color)}
                          >
                            {meta.label}
                          </span>
                        </div>
                        <StatusBadge status={post.status} />
                      </div>

                      <p className="line-clamp-2 text-sm font-semibold text-gray-900 dark:text-white">
                        {post.postTitle}
                      </p>

                      <p className="mt-1 line-clamp-2 text-xs text-gray-500 dark:text-slate-400">
                        {post.caption}
                      </p>

                      <div className="mt-2 flex items-center justify-between gap-2 text-[10px] text-gray-400 dark:text-slate-500">
                        <div className="flex items-center gap-1">
                          <Clock3 className="h-3 w-3" />
                          {new Date(post.scheduledAt).toLocaleDateString()}
                        </div>
                        <div className="font-semibold">
                          Rev {post.revisionCount || 0}
                        </div>
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="flex h-full flex-col items-center justify-center text-center text-sm text-gray-500 dark:text-slate-400">
                  <FileImage className="mb-3 h-8 w-8 text-gray-300" />
                  No content found for this client
                </div>
              )}
            </div>
          </aside>
        )}
        {/* RIGHT DETAILS PANEL */}
        <main className="overflow-y-auto p-6">
          {currentPost && (
            <button
              onClick={() => setActivePostId("")}
              className="mb-4 inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              ← Back to content list
            </button>
          )}
          {!currentPost ? (
            <div className="flex h-full items-center justify-center text-sm text-gray-500 dark:text-slate-400">
              Select content to view details
            </div>
          ) : (
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
                  <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-slate-800">
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

                  <button
  type="button"
  onClick={() => setMediaOpen(true)}
  className="relative aspect-video w-full bg-gray-100 dark:bg-slate-800"
>
  {renderPreview(
    currentPost.url,
    currentPost.mimeType,
    currentPost.resourceType,
  )}

  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition hover:bg-black/30 hover:opacity-100">
    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-900 shadow">
      Open full screen
    </span>
  </div>
</button>

                  <div className="p-5">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-slate-500">
                        Current Caption
                      </p>
                      <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-slate-800 dark:text-slate-300">
                        <RotateCcw className="h-3.5 w-3.5" />
                        {currentPost.revisionCount || 0} revisions
                      </div>
                    </div>

                    <p className="whitespace-pre-wrap text-sm leading-6 text-gray-700 dark:text-slate-300">
                      {currentPost.caption}
                    </p>

                    {!!currentPost.hashtags?.length && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {currentPost.hashtags.map((tag, i) => (
                          <span
                            key={`${tag}-${i}`}
                            className="rounded-full border border-orange-100 bg-orange-50 px-2.5 py-1 text-xs text-orange-600 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {currentPost.revisionNote && (
                      <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300">
                        <strong>Latest Revision Note:</strong>{" "}
                        {currentPost.revisionNote}
                      </div>
                    )}

                    <div className="mt-5 overflow-hidden rounded-xl border border-gray-200 dark:border-slate-800">
  <table className="w-full text-sm">
    <tbody className="divide-y divide-gray-200 dark:divide-slate-800">
      <tr>
        <td className="w-40 bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-500 dark:bg-slate-800 dark:text-slate-400">
          File Name
        </td>
        <td className="px-4 py-3 text-gray-800 dark:text-slate-200">
          {currentPost.name || "—"}
        </td>
      </tr>

      <tr>
        <td className="bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-500 dark:bg-slate-800 dark:text-slate-400">
          Platform
        </td>
        <td className="px-4 py-3 text-gray-800 dark:text-slate-200">
          {PLATFORM_META[currentPost.platform]?.label || currentPost.platform}
        </td>
      </tr>

      <tr>
        <td className="bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-500 dark:bg-slate-800 dark:text-slate-400">
          Scheduled At
        </td>
        <td className="px-4 py-3 text-gray-800 dark:text-slate-200">
          {currentPost.scheduledAt
            ? new Date(currentPost.scheduledAt).toLocaleString()
            : "—"}
        </td>
      </tr>

      <tr>
        <td className="bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-500 dark:bg-slate-800 dark:text-slate-400">
          Created By
        </td>
        <td className="px-4 py-3 text-gray-800 dark:text-slate-200">
          {currentPost.createdBy || "—"}
        </td>
      </tr>

      <tr>
        <td className="bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-500 dark:bg-slate-800 dark:text-slate-400">
          Mime Type
        </td>
        <td className="px-4 py-3 text-gray-800 dark:text-slate-200">
          {currentPost.mimeType || "—"}
        </td>
      </tr>

      <tr>
        <td className="bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-500 dark:bg-slate-800 dark:text-slate-400">
          Size
        </td>
        <td className="px-4 py-3 text-gray-800 dark:text-slate-200">
          {currentPost.size
            ? `${(currentPost.size / 1024 / 1024).toFixed(2)} MB`
            : "—"}
        </td>
      </tr>

      <tr>
        <td className="bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-500 dark:bg-slate-800 dark:text-slate-400">
          Dimensions
        </td>
        <td className="px-4 py-3 text-gray-800 dark:text-slate-200">
          {currentPost.width && currentPost.height
            ? `${currentPost.width} × ${currentPost.height}`
            : "—"}
        </td>
      </tr>
    </tbody>
  </table>
</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
                  <div className="flex items-center gap-2 border-b border-gray-200 px-5 py-4 dark:border-slate-800">
                    <History className="h-4 w-4 text-orange-500" />
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
                            className="rounded-xl border border-gray-200 p-4 dark:border-slate-800"
                          >
                            <div className="mb-2 flex items-center justify-between gap-3">
                              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                {formatHistoryAction(item.action)}
                              </div>
                              <div className="text-xs text-gray-400">
                                {item.createdAt
                                  ? new Date(item.createdAt).toLocaleString()
                                  : "-"}
                              </div>
                            </div>

                            <div className="mb-2 text-xs text-gray-500 dark:text-slate-400">
                              By: {item.actorName || item.actedBy}
                            </div>

                            {item.note ? (
                              <div className="mb-3 text-sm text-gray-700 dark:text-slate-300">
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
                                  <CheckCheck className="h-4 w-4" />
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
                                This request is locked and cannot be edited by
                                client.
                              </div>
                            )}

                            {item.snapshot ? (
                              <div className="space-y-2 rounded-lg bg-gray-50 p-3 text-xs dark:bg-slate-800">
                                <div>
                                  <span className="font-semibold">Title:</span>{" "}
                                  {item.snapshot.postTitle || "-"}
                                </div>
                                <div>
                                  <span className="font-semibold">
                                    Platform:
                                  </span>{" "}
                                  {item.snapshot.platform || "-"}
                                </div>
                                <div>
                                  <span className="font-semibold">
                                    Scheduled:
                                  </span>{" "}
                                  {item.snapshot.scheduledAt
                                    ? new Date(
                                        item.snapshot.scheduledAt,
                                      ).toLocaleString()
                                    : "-"}
                                </div>

                                {item.snapshot.url ? (
                                  <div className="pt-2">
                                    <div className="h-52 overflow-hidden rounded-lg">
                                      {renderPreview(
                                        item.snapshot.url,
                                        item.snapshot.mimeType,
                                        item.snapshot.resourceType,
                                      )}
                                    </div>
                                  </div>
                                ) : null}
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
                <button
  onClick={() => setEditOpen((prev) => !prev)}
  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-700"
>
  <Save className="h-4 w-4" />
  {editOpen ? "Hide Edit Content" : "Edit Content"}
</button>
{editOpen && (

                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
                  <div className="border-b border-gray-200 px-5 py-4 dark:border-slate-800">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                      Edit Content
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-slate-400">
                      Admin can update full content details
                    </p>
                  </div>

                  <div className="space-y-4 p-5">
                    <div>
                      <label className="mb-2 block text-xs font-semibold text-gray-500">
                        Replace Media Optional
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
                        <p className="mt-1 text-xs text-green-500">
                          New file selected: {editForm.newFile.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold text-gray-500 dark:text-slate-400">
                        Post Title
                      </label>
                      <input
                        value={editForm.postTitle}
                        onChange={(e) =>
                          setEditForm((prev) => ({
                            ...prev,
                            postTitle: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold text-gray-500 dark:text-slate-400">
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
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
                      >
                        <option value="instagram">Instagram</option>
                        <option value="facebook">Facebook</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="twitter">Twitter / X</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold text-gray-500 dark:text-slate-400">
                        Caption
                      </label>
                      <textarea
                        rows={6}
                        value={editForm.caption}
                        onChange={(e) =>
                          setEditForm((prev) => ({
                            ...prev,
                            caption: e.target.value,
                          }))
                        }
                        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold text-gray-500 dark:text-slate-400">
                        Hashtags
                      </label>
                      <input
                        value={editForm.hashtags}
                        onChange={(e) =>
                          setEditForm((prev) => ({
                            ...prev,
                            hashtags: e.target.value,
                          }))
                        }
                        placeholder="#design, #growth, #marketing"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold text-gray-500 dark:text-slate-400">
                        Scheduled At
                      </label>
                      <input
                        type="datetime-local"
                        value={editForm.scheduledAt}
                        onChange={(e) =>
                          setEditForm((prev) => ({
                            ...prev,
                            scheduledAt: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-semibold text-gray-500 dark:text-slate-400">
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
                        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
                      />
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <button
                        onClick={handleSave}
                        disabled={!isDirty || saving}
                        className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-700 disabled:opacity-40"
                      >
                        <Save className="h-4 w-4" />
                        {saving ? "Saving..." : "Save Changes"}
                      </button>

                      <button
                        onClick={handleApprove}
                        disabled={revisionLoading}
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 disabled:opacity-40"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        Approve
                      </button>

                      <button
                        onClick={handleMarkRevision}
                        disabled={revisionLoading}
                        className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 disabled:opacity-40"
                      >
                        <History className="h-4 w-4" />
                        {revisionLoading ? "Sending..." : "Request Revision"}
                      </button>

                      {["revision", "revision_accepted"].includes(
                        currentPost.status,
                      ) && (
                        <button
                          onClick={handleResubmit}
                          disabled={resubmitLoading}
                          className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700 disabled:opacity-40"
                        >
                          <RotateCcw className="h-4 w-4" />
                          {resubmitLoading ? "Resubmitting..." : "Resubmit"}
                        </button>
                      )}

                      <button
                        onClick={handleDelete}
                        disabled={deleting}
                        className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-600 disabled:opacity-40"
                      >
                        {deleting ? (
                          <X className="h-4 w-4" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                        {deleting ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </div>
                </div>
                )}

                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
                  <div className="border-b border-gray-200 px-5 py-4 dark:border-slate-800">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                      Asset Metadata
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 p-5 text-sm">
                    <div>
                      <p className="mb-1 text-xs text-gray-400">File Name</p>
                      <p className="break-all font-medium text-gray-800 dark:text-slate-200">
                        {currentPost.name}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs text-gray-400">Created By</p>
                      <p className="font-medium text-gray-800 dark:text-slate-200">
                        {currentPost.createdBy || "—"}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs text-gray-400">Mime Type</p>
                      <p className="font-medium text-gray-800 dark:text-slate-200">
                        {currentPost.mimeType || "—"}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs text-gray-400">
                        Resource Type
                      </p>
                      <p className="font-medium text-gray-800 dark:text-slate-200">
                        {currentPost.resourceType || "—"}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs text-gray-400">Size</p>
                      <p className="font-medium text-gray-800 dark:text-slate-200">
                        {currentPost.size
                          ? `${(currentPost.size / 1024 / 1024).toFixed(2)} MB`
                          : "—"}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs text-gray-400">Dimensions</p>
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
      </div>

      {mediaOpen && currentPost && (
  <div
    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
    onClick={() => setMediaOpen(false)}
  >
    <button
      onClick={() => setMediaOpen(false)}
      className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
    >
      <X className="h-5 w-5" />
    </button>

    <div
      className="max-h-[92vh] w-full max-w-6xl"
      onClick={(e) => e.stopPropagation()}
    >
      {currentPost.mimeType?.startsWith("video/") ||
      currentPost.resourceType === "video" ||
      /\.(mp4|webm|ogg|mov)$/i.test(currentPost.url) ? (
        <video
          src={currentPost.url}
          controls
          autoPlay
          className="max-h-[92vh] w-full rounded-2xl object-contain"
        />
      ) : (
        <img
          src={currentPost.url}
          alt={currentPost.postTitle}
          className="mx-auto max-h-[92vh] rounded-2xl object-contain"
        />
      )}
    </div>
  </div>
)}

      {uploadOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-4 py-10 backdrop-blur-sm"
          onClick={() => !uploading && setUploadOpen(false)}
        >
          <div
            className="my-auto w-full max-w-2xl rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-slate-800">
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
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[80vh] space-y-4 overflow-y-auto p-6">
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-500 dark:text-slate-400">
                  Client
                </label>
                <select
                  value={selectedClientId}
                  onChange={(e) => setSelectedClientId(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
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
                <label className="mb-2 block text-xs font-semibold text-gray-500 dark:text-slate-400">
                  Media File
                </label>
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-8 hover:border-orange-400 dark:border-slate-700 dark:bg-slate-800/60">
                  <div className="mb-2 flex items-center gap-3">
                    <Upload className="h-5 w-5 text-orange-500" />
                    <FileImage className="h-5 w-5 text-pink-500" />
                    <Video className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-slate-200">
                    {uploadForm.file
                      ? uploadForm.file.name
                      : "Click to select image/video"}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
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

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-500 dark:text-slate-400">
                    Post Title
                  </label>
                  <input
                    value={uploadForm.postTitle}
                    onChange={(e) =>
                      setUploadForm((prev) => ({
                        ...prev,
                        postTitle: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-500 dark:text-slate-400">
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
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
                  >
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="twitter">Twitter / X</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-500 dark:text-slate-400">
                  Caption
                </label>
                <textarea
                  rows={5}
                  value={uploadForm.caption}
                  onChange={(e) =>
                    setUploadForm((prev) => ({
                      ...prev,
                      caption: e.target.value,
                    }))
                  }
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-500 dark:text-slate-400">
                    Hashtags
                  </label>
                  <input
                    value={uploadForm.hashtags}
                    onChange={(e) =>
                      setUploadForm((prev) => ({
                        ...prev,
                        hashtags: e.target.value,
                      }))
                    }
                    placeholder="#brand, #campaign"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-500 dark:text-slate-400">
                    Created By
                  </label>
                  <input
                    value={uploadForm.createdBy}
                    onChange={(e) =>
                      setUploadForm((prev) => ({
                        ...prev,
                        createdBy: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-500 dark:text-slate-400">
                  Scheduled At
                </label>
                <input
                  type="datetime-local"
                  value={uploadForm.scheduledAt}
                  onChange={(e) =>
                    setUploadForm((prev) => ({
                      ...prev,
                      scheduledAt: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => {
                    resetUploadForm();
                    setUploadOpen(false);
                  }}
                  disabled={uploading}
                  className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>

                <button
                  onClick={handleUpload}
                  disabled={uploading || !selectedClientId}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-700 disabled:opacity-50"
                >
                  <Upload className="h-4 w-4" />
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
