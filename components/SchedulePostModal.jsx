"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function SchedulePostModal({ open, onClose, clients }) {
  const [form, setForm] = useState({
    clientId: "",
    accountId: "",
    platform: "",
    caption: "",
    scheduleDate: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    setForm((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("clientId", form.clientId);
    formData.append("accountId", form.accountId);
    formData.append("platform", form.platform);
    formData.append("caption", form.caption);
    formData.append("scheduleDate", form.scheduleDate);

    if (form.file) {
      formData.append("file", form.file);
    }

    await fetch("/api/content/create", {
      method: "POST",
      body: formData,
    });

    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#0b1220] w-full max-w-lg rounded-xl p-6 shadow-lg">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold">Schedule Post</h2>
          <button onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="space-y-4">
          {/* CLIENT */}
          <div>
            <label className="text-sm font-medium">Client</label>
            <select
              name="clientId"
              value={form.clientId}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg p-2"
            >
              <option value="">Select Client</option>
              {clients?.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.companyName}
                </option>
              ))}
            </select>
          </div>

          {/* PLATFORM */}
          <div>
            <label className="text-sm font-medium">Platform</label>
            <select
              name="platform"
              value={form.platform}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg p-2"
            >
              <option value="">Select Platform</option>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="linkedin">LinkedIn</option>
            </select>
          </div>

          {/* CAPTION */}
          <div>
            <label className="text-sm font-medium">Caption</label>
            <textarea
              name="caption"
              value={form.caption}
              onChange={handleChange}
              rows="3"
              className="w-full mt-1 border rounded-lg p-2"
              placeholder="Write caption..."
            />
          </div>

          {/* FILE */}
          <div>
            <label className="text-sm font-medium">Creative</label>
            <input type="file" onChange={handleFile} className="w-full mt-1" />
          </div>

          {/* DATE */}
          <div>
            <label className="text-sm font-medium">Schedule Date</label>
            <input
              type="datetime-local"
              name="scheduleDate"
              value={form.scheduleDate}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg p-2"
            />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 border rounded-lg">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
}
