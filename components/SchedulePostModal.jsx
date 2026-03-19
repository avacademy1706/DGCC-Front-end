"use client";

import { useState, useEffect } from "react";
import { X, Loader2, ImagePlus, Hash, Calendar, Type } from "lucide-react";
import { apiClient } from "@/lib/apiClient";
import { useQueryClient } from "@tanstack/react-query";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const PLATFORM_OPTIONS = [
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "twitter", label: "Twitter / X" },
];

const MEDIA_TYPES = [
  { value: "text", label: "Text Only" },
  { value: "image", label: "Image" },
  { value: "video", label: "Video" },
  { value: "reel", label: "Reel" },
  { value: "carousel", label: "Carousel" },
];

const inp =
  "w-full mt-1 px-3 py-2 rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-900 text-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white";

export default function SchedulePostModal({ open, onClose, clients }) {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    clientId: "",
    platform: "",
    caption: "",
    topic: "",
    hashtags: "",
    mediaType: "text",
    scheduleDate: "",
    timezone: "Asia/Kolkata",
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  /* Reset form when modal opens */
  useEffect(() => {
    if (open) {
      setForm({
        clientId: "",
        platform: "",
        caption: "",
        topic: "",
        hashtags: "",
        mediaType: "text",
        scheduleDate: "",
        timezone: "Asia/Kolkata",
      });
      setFile(null);
      setPreview(null);
      setError("");
    }
  }, [open]);

  /* Preview for selected file */
  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    if (file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreview(null);
  }, [file]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleFile = (e) => {
    const selected = e.target.files?.[0] || null;
    setFile(selected);

    /* Auto-detect media type */
    if (selected) {
      if (selected.type.startsWith("image/")) {
        setForm((prev) => ({ ...prev, mediaType: "image" }));
      } else if (selected.type.startsWith("video/")) {
        setForm((prev) => ({ ...prev, mediaType: "video" }));
      }
    }
  };

  /* ── Upload file to Cloudinary ── */
  const uploadMedia = async () => {
    if (!file) return null;

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await apiClient.post(`${API}/content/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return res.data?.url || res.data?.secure_url || null;
    } catch (err) {
      console.error("Upload failed:", err);
      throw new Error("Media upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  /* ── Submit ── */
  const handleSubmit = async () => {
    /* Validation */
    if (!form.clientId) return setError("Please select a client");
    if (!form.platform) return setError("Please select a platform");
    if (!form.caption.trim()) return setError("Caption is required");
    if (!form.scheduleDate) return setError("Schedule date is required");

    /* Check if date is in future */
    if (new Date(form.scheduleDate) <= new Date()) {
      return setError("Schedule date must be in the future");
    }

    setIsSubmitting(true);
    setError("");

    try {
      /* Step 1: Upload media if present */
      let mediaUrls = [];
      if (file) {
        const uploadedUrl = await uploadMedia();
        if (uploadedUrl) mediaUrls = [uploadedUrl];
      }

      /* Step 2: Parse hashtags */
      const hashtags = form.hashtags
        .split(/[,\s#]+/)
        .map((t) => t.trim())
        .filter(Boolean);

      /* Step 3: Schedule via publish API */
      const payload = {
        clientId: form.clientId,
        platform: form.platform,
        caption: form.caption,
        topic: form.topic || "",
        hashtags,
        mediaUrls,
        mediaType: file ? form.mediaType : "text",
        scheduleDate: new Date(form.scheduleDate).toISOString(),
        timezone: form.timezone,
      };

      await apiClient.post(`${API}/publish/schedule`, payload);

      /* Refresh calendar data */
      queryClient.invalidateQueries({ queryKey: [`calendarPosts-${form.clientId}`] });
      queryClient.invalidateQueries({ queryKey: [`publishStats-${form.clientId}`] });

      onClose();
    } catch (err) {
      console.error("Schedule error:", err);
      const msg =
        err?.response?.data?.details?.join(", ") ||
        err?.response?.data?.error ||
        "Failed to schedule post";
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-[#0b1220] w-full max-w-lg rounded-xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-200 dark:border-white/10">
          <h2 className="text-lg font-semibold">Schedule Post</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-5 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* Error */}
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
              {error}
            </div>
          )}

          {/* CLIENT */}
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Client *
            </label>
            <select name="clientId" value={form.clientId} onChange={handleChange} className={inp}>
              <option value="">Select Client</option>
              {clients?.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.profile?.companyName || c.companyName || c._id}
                </option>
              ))}
            </select>
          </div>

          {/* PLATFORM */}
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Platform *
            </label>
            <select name="platform" value={form.platform} onChange={handleChange} className={inp}>
              <option value="">Select Platform</option>
              {PLATFORM_OPTIONS.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          {/* TOPIC */}
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              <Type size={14} /> Topic
            </label>
            <input
              name="topic"
              value={form.topic}
              onChange={handleChange}
              placeholder="e.g. Product Launch, Admission Open"
              className={inp}
            />
          </div>

          {/* CAPTION */}
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Caption *
            </label>
            <textarea
              name="caption"
              value={form.caption}
              onChange={handleChange}
              rows={3}
              className={inp}
              placeholder="Write your post caption..."
              maxLength={5000}
            />
            <p className="text-xs text-slate-400 mt-1 text-right">
              {form.caption.length}/5000
            </p>
          </div>

          {/* HASHTAGS */}
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              <Hash size={14} /> Hashtags
            </label>
            <input
              name="hashtags"
              value={form.hashtags}
              onChange={handleChange}
              placeholder="marketing, digitalmarketing, branding"
              className={inp}
            />
            <p className="text-xs text-slate-400 mt-1">
              Comma separated — # auto-added
            </p>
          </div>

          {/* FILE UPLOAD */}
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              <ImagePlus size={14} /> Creative / Media
            </label>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFile}
              className={`${inp} file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:bg-indigo-50 file:text-indigo-600 dark:file:bg-indigo-500/10 dark:file:text-indigo-400`}
            />

            {/* Image Preview */}
            {preview && (
              <div className="mt-2 relative w-full h-32 rounded-lg overflow-hidden border border-slate-200 dark:border-white/10">
                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                <button
                  onClick={() => {
                    setFile(null);
                    setPreview(null);
                    setForm((p) => ({ ...p, mediaType: "text" }));
                  }}
                  className="absolute top-1 right-1 p-1 rounded-full bg-black/50 text-white hover:bg-black/70"
                >
                  <X size={12} />
                </button>
              </div>
            )}
          </div>

          {/* MEDIA TYPE (shown when file selected) */}
          {file && (
            <div>
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Media Type
              </label>
              <select name="mediaType" value={form.mediaType} onChange={handleChange} className={inp}>
                {MEDIA_TYPES.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* SCHEDULE DATE */}
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
              <Calendar size={14} /> Schedule Date & Time *
            </label>
            <input
              type="datetime-local"
              name="scheduleDate"
              value={form.scheduleDate}
              onChange={handleChange}
              min={new Date().toISOString().slice(0, 16)}
              className={inp}
            />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-200 dark:border-white/10">
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="px-4 py-2 border border-slate-300 dark:border-white/10 rounded-lg text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting || isUploading}
            className="flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm transition-colors disabled:opacity-50"
          >
            {isSubmitting || isUploading ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                {isUploading ? "Uploading..." : "Scheduling..."}
              </>
            ) : (
              "Schedule Post"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}