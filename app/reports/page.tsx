  "use client";

  import { useEffect, useMemo, useState } from "react";
  import {
    FileText,
    BarChart3,
    ClipboardList,
    TrendingUp,
    Download,
    Plus,
    Loader2,
    Upload,
    DeleteIcon,
  } from "lucide-react";
  import { useGet } from "@/hooks/useGet";

  // ---------------- Types ----------------



type ClientType = {
  _id: string;
  status: string;
  currentStep: number;
  profile: {
    companyName: string;
    industry: string;
    revenueModel: string;
    market: string;
    description: string;
    targetAudience: string;
    budget: string;
    _id: string;
  };
  goals: {
    primaryGoals: string[];
    growthTarget: string;
    timeline: string;
    goalNotes: string;
    _id: string;
  };
  channels: {
    channels: string[];
    crm: string;
    analytics: string;
    channelConfigs?: Record<string, any>;
    _id: string;
  };
  kpis: {
    cpl: string;
    cac: string;
    roas: string;
    ltv: string;
    conversionRate: string;
    leadTarget: string;
    reportingFreq: string;
    _id: string;
  };
  createdAt: string;
};

type ClientsResponse = {
  success: boolean;
  message: string;
  clients: ClientType[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};
  type ReportType =
    | "weekly_performance"
    | "monthly_report"
    | "okr_review"
    | "campaign_health"
    | "campaign_deep_dive"
    | "custom";

  type ReportItem = {
    _id: string;
  clientId:
    | string
    | {
        _id: string;
        name?: string;
        companyName?: string;
        profile?: {
          companyName?: string;
        };
      };
        title: string;
    description?: string;
    reportType: ReportType;
    format: "pdf" | "xlsx" | "xls" | "csv";
    fileUrl: string;
    fileName: string;
    originalFileName: string;
    mimeType: string;
    fileSize: number;
    generatedAt: string;
    dateRange: {
      startDate: string;
      endDate: string;
    };
    uploadedBy?: {
      _id: string;
      name?: string;
      email?: string;
    };
    createdAt: string;
  };

  type ScheduleItem = {
    type: string;
    client: string;
    freq: string;
    recipients: string;
    status: "Active" | "Paused";
  };

  // ---------------- Constants ----------------

  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  const reportTypeOptions: { label: string; value: ReportType }[] = [
    { label: "Weekly Performance", value: "weekly_performance" },
    { label: "Monthly Report", value: "monthly_report" },
    { label: "OKR Review", value: "okr_review" },
    { label: "Campaign Health", value: "campaign_health" },
    { label: "Campaign Deep Dive", value: "campaign_deep_dive" },
    { label: "Custom", value: "custom" },
  ];

  const schedules: ScheduleItem[] = [
    {
      type: "Weekly Performance",
      client: "All Clients",
      freq: "Every Monday",
      recipients: "3 emails",
      status: "Active",
    },
    {
      type: "Monthly OKR Review",
      client: "EduTech Pro",
      freq: "1st of Month",
      recipients: "5 emails",
      status: "Active",
    },
    {
      type: "Campaign Health",
      client: "HealthFirst",
      freq: "Daily",
      recipients: "2 emails",
      status: "Paused",
    },
  ];


    
  // ---------------- Helpers ----------------

  function formatBytes(bytes: number) {
    if (!bytes && bytes !== 0) return "—";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  function formatDate(date: string) {
    if (!date) return "—";
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  function getReportTypeLabel(type: ReportType) {
    const found = reportTypeOptions.find((item) => item.value === type);
    return found?.label || type;
  }

  function getReportIcon(type: ReportType) {
    switch (type) {
      case "weekly_performance":
      case "monthly_report":
        return FileText;
      case "okr_review":
        return ClipboardList;
      case "campaign_health":
        return TrendingUp;
      case "campaign_deep_dive":
        return BarChart3;
      default:
        return FileText;
    }
  }
function getFormatLabel(format: string) {
  return format?.toUpperCase?.() || "FILE";
}

  function buildFileUrl(fileUrl: string) {
    if (!fileUrl) return "#";
    if (fileUrl.startsWith("http://") || fileUrl.startsWith("https://")) {
      return fileUrl;
    }
    return `${API_BASE_URL}${fileUrl}`;
  }

  // ---------------- Reusable UI ----------------

  function Progress({
    label,
    val,
    target,
    color,
    width,
  }: {
    label: string;
    val: string;
    target: string;
    color: string;
    width: string;
  }) {
    return (
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-700 dark:text-slate-300">{label}</span>
          <span className="text-gray-500 dark:text-slate-400 font-medium">
            {val} / {target}
          </span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-slate-800 rounded">
          <div className={`h-2 rounded ${color}`} style={{ width }} />
        </div>
      </div>
    );
  }

  // ---------------- Main Component ----------------

  export default function ReportsExports() {
    // const [clients, setClients] = useState<ClientType[]>([]);
    const [reports, setReports] = useState<ReportItem[]>([]);
    // const [loadingClients, setLoadingClients] = useState(false);
    const [loadingReports, setLoadingReports] = useState(false);
    const [uploading, setUploading] = useState(false);

    const [form, setForm] = useState({
      clientId: "",
      title: "",
      description: "",
      reportType: "weekly_performance" as ReportType,
      startDate: "",
      endDate: "",
      format: "pdf",
      recipients: "",
      tags: "",
    });

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { data: clientsData, isLoading: loadingClients } = useGet<ClientsResponse>(
    "clients",
    "http://localhost:5000/api/clients"
  );

  const clients: ClientType[] = clientsData?.clients || [];

  useEffect(() => {
    if (clients.length > 0 && !form.clientId) {
      setForm((prev) => ({
        ...prev,
        clientId: clients[0]._id,
      }));
    }
  }, [clients, form.clientId]);

  console.log("clientsclientsclients =>", clients);


    // ---------- Fetch Reports ----------
    useEffect(() => {
      if (!form.clientId) return;

      const fetchReports = async () => {
        try {
          setLoadingReports(true);

          const res = await fetch(
            `${API_BASE_URL}/api/client-reports/client/${form.clientId}?page=1&limit=20`,
            {
              method: "GET",
              credentials: "include",
            }
          );

          const data = await res.json();

          if (!res.ok) {
            throw new Error(data?.message || "Failed to fetch reports");
          }

          setReports(data?.data || []);
        } catch (error) {
          console.error("fetchReports error:", error);
          setReports([]);
        } finally {
          setLoadingReports(false);
        }
      };

      fetchReports();
    }, [form.clientId]);

    // ---------- Auto Title ----------
    useEffect(() => {
      if (!form.clientId) return;

      const currentClient = clients.find((c) => c._id === form.clientId);
const clientName = currentClient?.profile?.companyName || "Client";
const reportLabel = getReportTypeLabel(form.reportType);

      if (form.startDate && form.endDate) {
        const start = formatDate(form.startDate);
        const end = formatDate(form.endDate);
        setForm((prev) => ({
          ...prev,
          title: `${clientName} — ${reportLabel} (${start} - ${end})`,
        }));
      }
    }, [form.clientId, form.reportType, form.startDate, form.endDate, clients]);

    const recentReports = useMemo(() => reports.slice(0, 6), [reports]);

    function getClientName(client: any) {
    if (!client) return "Client";

    if (typeof client === "string") return "Client";

    return (
      client.profile?.companyName ||
      client.companyName ||
      client.name ||
      "Client"
    );
  }

    // ---------- Handlers ----------
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleDownload = (report: ReportItem) => {
      window.open(buildFileUrl(report.fileUrl), "_blank");
    };

    const handleUploadReport = async () => {
      try {
        if (!form.clientId) {
          alert("Please select a client");
          return;
        }

        if (!form.title.trim()) {
          alert("Please enter report title");
          return;
        }

        if (!form.reportType) {
          alert("Please select report type");
          return;
        }

        if (!form.startDate || !form.endDate) {
          alert("Please select date range");
          return;
        }

        if (!selectedFile) {
          alert("Please select a file");
          return;
        }

        const formData = new FormData();
        formData.append("clientId", form.clientId);
        formData.append("title", form.title.trim());
        formData.append("description", form.description.trim());
        formData.append("reportType", form.reportType);
        formData.append("startDate", form.startDate);
        formData.append("endDate", form.endDate);
        formData.append("recipients", form.recipients);
        formData.append("tags", form.tags);
        formData.append("report", selectedFile);

        setUploading(true);

        const res = await fetch(`${API_BASE_URL}/api/client-reports/upload`, {
          method: "POST",
          credentials: "include",
          body: formData,
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.message || "Failed to upload report");
        }

        alert("Report uploaded successfully");

        setSelectedFile(null);
        setForm((prev) => ({
          ...prev,
          description: "",
          recipients: "",
          tags: "",
        }));

        // refresh reports
        const reportsRes = await fetch(
          `${API_BASE_URL}/api/client-reports/client/${form.clientId}?page=1&limit=20`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const reportsData = await reportsRes.json();
        setReports(reportsData?.data || []);
      } catch (error: any) {
        console.error("handleUploadReport error:", error);
        alert(error?.message || "Something went wrong");
      } finally {
        setUploading(false);
      }
    };


    const handleDelete = async (id: string) => {
  if (!confirm("Are you sure you want to delete this report?")) return;

  try {
    const res = await fetch(
      `${API_BASE_URL}/api/client-reports/${id}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    alert("Deleted successfully");

    // refresh
    setReports((prev) => prev.filter((r) => r._id !== id));
  } catch (err: any) {
    alert(err.message);
  }
};

    return (
      <div className="p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">
        {/* HEADER */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Reports & Exports</h1>
            <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">
              Upload and manage client reports
            </p>
          </div>

          {/* <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm transition-colors">
            <Plus size={15} />
            Upload Report
          </button> */}
        </div>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* RECENT REPORTS */}
          <div className="lg:col-span-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <h3 className="font-semibold text-sm md:text-base">
                Recent Reports
              </h3>
              {loadingReports && (
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400">
                  <Loader2 className="animate-spin" size={14} />
                  Loading...
                </div>
              )}
            </div>

            <div className="space-y-2 md:space-y-3">
              {!loadingReports && recentReports.length === 0 ? (
                <div className="rounded-lg border border-dashed border-gray-300 dark:border-slate-700 p-6 text-center text-sm text-gray-500 dark:text-slate-400">
                  No reports found for this client.
                </div>
              ) : (
                recentReports.map((r) => {
                  const Icon = getReportIcon(r.reportType);

                  return (
                    <div
                      key={r._id}
                      className="flex items-center justify-between gap-3 p-3 md:p-4 rounded-lg border border-gray-200 dark:border-slate-700"
                    >
                      <div className="flex items-center gap-2 md:gap-3 min-w-0">
                        <div className="p-2 md:p-3 rounded-lg bg-gray-100 dark:bg-slate-800 shrink-0">
                          <Icon size={15} />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs md:text-sm font-medium text-gray-900 dark:text-white truncate">
                            {r.title}
                          </p>
                          <p className="text-[11px] text-indigo-600 dark:text-indigo-400 truncate">
    {getClientName(r.clientId)}
  </p>
                          <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 truncate">
                            Generated {formatDate(r.generatedAt || r.createdAt)} ·{" "}
                            {getFormatLabel(r.format)} · {formatBytes(r.fileSize)}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDownload(r)}
                        className="shrink-0 flex items-center gap-1 px-2.5 py-1 text-xs rounded-md border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <Download size={12} />
                        {getFormatLabel(r.format)}
                      </button>

                      <button
  onClick={() => handleDelete(r._id)}
  className="ml-2 px-2 py-1 text-xs rounded-md bg-red-500 hover:bg-red-600 text-white"
>
  Delete
</button>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* UPLOAD REPORT FORM */}
          <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6 space-y-3 md:space-y-4">
            <h3 className="font-semibold text-sm md:text-base">
              Upload New Report
            </h3>

            <div className="space-y-3 text-sm">
              <div>
                <label className="text-xs text-gray-500 dark:text-slate-400">
                  Report Type
                </label>
                <select
                  name="reportType"
                  value={form.reportType}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 text-xs md:text-sm rounded-md border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white"
                >
                  {reportTypeOptions.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-500 dark:text-slate-400">
                  Client
                </label>
          <select
  name="clientId"
  value={form.clientId}
  onChange={handleChange}
  disabled={loadingClients}
  className="w-full mt-1 p-2 text-xs md:text-sm rounded-md border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white disabled:opacity-60"
>
  {clients.length === 0 ? (
    <option value="">
      {loadingClients ? "Loading clients..." : "No clients found"}
    </option>
  ) : (
    clients.map((client) => (
      <option key={client._id} value={client._id}>
        {client.profile?.companyName || "Unnamed Client"}
      </option>
    ))
  )}
</select>
              </div>

              <div>
                <label className="text-xs text-gray-500 dark:text-slate-400">
                  Title
                </label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter report title"
                  className="w-full mt-1 p-2 text-xs md:text-sm rounded-md border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 dark:text-slate-400">
                  Description
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Short description"
                  className="w-full mt-1 p-2 text-xs md:text-sm rounded-md border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500 dark:text-slate-400">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={form.startDate}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 text-xs md:text-sm rounded-md border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 dark:text-slate-400">
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={form.endDate}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 text-xs md:text-sm rounded-md border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 dark:text-slate-400">
                  Recipients
                </label>
                <input
                  name="recipients"
                  value={form.recipients}
                  onChange={handleChange}
                  placeholder="client@example.com, manager@example.com"
                  className="w-full mt-1 p-2 text-xs md:text-sm rounded-md border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 dark:text-slate-400">
                  Tags
                </label>
                <input
                  name="tags"
                  value={form.tags}
                  onChange={handleChange}
                  placeholder="weekly, performance, marketing"
                  className="w-full mt-1 p-2 text-xs md:text-sm rounded-md border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 dark:text-slate-400">
                  Report File
                </label>
                <input
                  type="file"
                  accept=".pdf,.xlsx,.xls,.csv,.doc,.docx,.ppt,.pptx,.txt,.zip,.rar,.7z,.json,.xml"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setSelectedFile(file);
                  }}
                  className="w-full mt-1 p-2 text-xs md:text-sm rounded-md border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white file:mr-3 file:rounded-md file:border-0 file:bg-indigo-600 file:px-3 file:py-1.5 file:text-white"
                />
                {selectedFile && (
                  <p className="mt-2 text-xs text-gray-500 dark:text-slate-400 truncate">
                    Selected: {selectedFile.name} ({formatBytes(selectedFile.size)})
                  </p>
                )}
              </div>

              <button
                onClick={handleUploadReport}
                disabled={uploading}
                className="w-full mt-2 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white text-sm flex items-center justify-center gap-2 transition-colors"
              >
                {uploading ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload size={15} />
                    Upload Report
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM GRID */}
          {/* REPORT TABLE */}
          <div className="lg:col-span-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <h3 className="font-semibold text-sm md:text-base">Report History</h3>
              <button className="text-xs px-3 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
                + Schedule
              </button>
            </div>

            {/* Desktop table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-xs md:text-sm">
                <thead className="text-gray-500 dark:text-slate-400">
                  <tr>
                    <th className="text-left pb-2">Title</th>
                    <th className="text-center pb-2">Client</th>
                    <th className="text-center pb-2">Type</th>
                    <th className="text-center pb-2">Date Range</th>
                    <th className="text-center pb-2">Format</th>
                    <th className="text-center pb-2">Action</th>
                    <th className="text-center pb-2">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((r) => (
                    <tr
                      key={r._id}
                      className="border-t border-gray-200 dark:border-slate-800"
                    >
                      <td className="py-3 font-medium text-gray-900 dark:text-white">
                        <div className="max-w-[250px] truncate">{r.title}</div>
                      </td>
                      <td className="text-center text-gray-600 dark:text-slate-300">
    {getClientName(r.clientId)}
  </td>
                      <td className="text-center text-gray-600 dark:text-slate-300">
                        {getReportTypeLabel(r.reportType)}
                      </td>
                      <td className="text-center text-gray-600 dark:text-slate-300">
                        {formatDate(r.dateRange?.startDate)} -{" "}
                        {formatDate(r.dateRange?.endDate)}
                      </td>
                      <td className="text-center text-gray-600 dark:text-slate-300">
                        {getFormatLabel(r.format)}
                      </td>
                      <td className="text-center">
                        <button
                          onClick={() => handleDownload(r)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                        >
                          <Download size={12} />
                          Download
                        </button>
                      </td>
                      <td className="text-center">
                        <button
                          onClick={() => handleDelete(r._id)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                        >
                          <DeleteIcon size={12} />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {!loadingReports && reports.length === 0 && (
                <div className="py-8 text-center text-sm text-gray-500 dark:text-slate-400">
                  No uploaded reports found.
                </div>
              )}
            </div>

            {/* Mobile cards */}
            <div className="sm:hidden space-y-2.5">
              {reports.map((r) => (
                <div
                  key={r._id}
                  className="rounded-lg border border-gray-200 dark:border-slate-700 p-3 space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-xs text-gray-900 dark:text-white">
                      {r.title}
                    </p>
                    <span className="text-[10px] px-2 py-0.5 rounded-full shrink-0 font-medium bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300">
                      {getFormatLabel(r.format)}
                    </span>
                  </div>

                  <div className="text-xs text-gray-500 dark:text-slate-400">
                    {getReportTypeLabel(r.reportType)}
                  </div>

                  <div className="text-xs text-gray-500 dark:text-slate-400">
                    {formatDate(r.dateRange?.startDate)} -{" "}
                    {formatDate(r.dateRange?.endDate)}
                  </div>

                  <button
                    onClick={() => handleDownload(r)}
                    className="mt-1 inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors text-xs"
                  >
                    <Download size={12} />
                    Download
                  </button>
                </div>
              ))}

              {!loadingReports && reports.length === 0 && (
                <div className="rounded-lg border border-dashed border-gray-300 dark:border-slate-700 p-4 text-center text-xs text-gray-500 dark:text-slate-400">
                  No uploaded reports found.
                </div>
              )}
            </div>
          </div>

          {/* OKR PROGRESS */}
          {/* <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 md:p-6 space-y-3 md:space-y-4">
            <h3 className="font-semibold text-sm md:text-base">OKR Progress</h3>
            <p className="text-xs md:text-sm text-gray-700 dark:text-slate-300">
              🎯 Q1 2026 — Increase qualified lead volume by 40%
            </p>
            <Progress
              label="Generate 3,000 leads/month"
              val="2,847"
              target="3,000"
              color="bg-indigo-500"
              width="80%"
            />
            <Progress
              label="Achieve blended ROAS of 4x"
              val="3.6x"
              target="4x"
              color="bg-orange-500"
              width="75%"
            />
            <Progress
              label="Reduce CPL to ₹150"
              val="₹186"
              target="₹150"
              color="bg-red-500"
              width="55%"
            />
          </div> */}
      </div>
    );
  }3