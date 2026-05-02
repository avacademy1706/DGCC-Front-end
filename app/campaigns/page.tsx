"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { toast } from "sonner";
import {
  Megaphone,
  DollarSign,
  Target,
  AlertTriangle,
  Plus,
  X,
  Loader2,
  RefreshCw,
  TrendingUp,
  MousePointerClick,
  Eye,
  Building2,
  ChevronDown,
  CheckCircle2,
  PauseCircle,
  AlertCircle,
  ExternalLink,
  Search,
  Star,
  Zap,
  MapPin,
  Briefcase,
  SlidersHorizontal,
  Phone,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import { useGet } from "@/hooks/useGet";
import { usePost } from "@/hooks/usePost";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

// FIX 1: "all" added to Platform type
type Platform = "meta" | "google-ads" | "indiamart" | "all";
type DateRange = "last_7d" | "last_30d" | "last_90d" | "last_year" | "all";

interface NormalizedCampaign {
  id: string;
  platform: string;
  name: string;
  status: string;
  objective: string;
  budget: number;
  budgetRemaining: number;
  budgetType: string;
  spend: number;
  leads: number;
  impressions: number;
  clicks: number;
  reach: number;
  ctr: string | null;
  cpm: string | null;
  cpc: string | null;
  cpl: string | null;
  roas: number | null;
  startDate: string | null;
  endDate: string | null;
  insightPeriod: string | null;
  platformId: string;
  clientId: string | null;
  clientName: string;
  isAssigned: boolean;
}

interface ClientInfo {
  _id: string;
  name: string;
  industry: string;
  platforms: string[];
  monthlyBudget: number;
  budgetStr: string;
  primaryGoal: string;
  status: string;
}

interface ClientsListResponse {
  success: boolean;
  clients: ClientInfo[];
}

interface ClientCampaignsResponse {
  success: boolean;
  client: any;
  summary: {
    totalCampaigns: number;
    byPlatform: Record<string, any>;
    byStatus: Record<string, number>;
    totals: {
      spend: number;
      leads: number;
      impressions: number;
      clicks: number;
      budget: number;
      cpl: string | null;
      ctr: string | null;
    };
  };
  platforms: {
    meta: { campaigns: NormalizedCampaign[]; total: number };
    googleAds: { campaigns: NormalizedCampaign[]; total: number };
    justdial: any;
    indiamart: any;
  };
  data: NormalizedCampaign[];
}

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────
const CHANNELS = [
  "Meta",
  "Google",
  "Instagram",
  "YouTube",
  "Email",
  "WhatsApp",
  "LinkedIn",
  "Programmatic",
];
const OBJECTIVES = [
  "Lead Gen",
  "Admissions",
  "Bookings",
  "Sales",
  "Brand Awareness",
  "App Installs",
  "Traffic",
];
const STATUSES = ["Draft", "Live", "Paused", "Alert", "Risk", "Completed"];
const PIE_COLORS = [
  "#4f46e5",
  "#10b981",
  "#f59e0b",
  "#ec4899",
  "#3b82f6",
  "#8b5cf6",
  "#06b6d4",
  "#f97316",
];

const DATE_RANGES: { key: DateRange; label: string }[] = [
  { key: "last_7d", label: "Last 7 days" },
  { key: "last_30d", label: "Last 30 days" },
  { key: "last_90d", label: "Last 90 days" },
  { key: "last_year", label: "Last year" },
  { key: "all", label: "All time" },
];

// FIX 3: "all" added to PLATFORMS array
const PLATFORMS: { key: Platform; label: string; color: string }[] = [
  { key: "meta", label: "Meta Ads", color: "bg-blue-600" },
  { key: "google-ads", label: "Google Ads", color: "bg-amber-600" },
  { key: "indiamart", label: "IndiaMart", color: "bg-green-600" },
];

const emptyForm = {
  name: "",
  clientId: "",
  clientName: "",
  channel: "",
  objective: "",
  budget: "",
  startDate: "",
  endDate: "",
  status: "Draft",
  notes: "",
};

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS — general
// ─────────────────────────────────────────────────────────────────────────────
const fmtRs = (n: number | null | undefined): string => {
  if (!n) return "—";
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)}L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(1)}k`;
  return `₹${Number(n).toLocaleString("en-IN")}`;
};
const fmtNum = (n: number | null | undefined): string =>
  n ? Number(n).toLocaleString("en-IN") : "—";

const statusCfg: Record<
  string,
  { badge: string; icon: React.ElementType; dot: string }
> = {
  ACTIVE: {
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    icon: CheckCircle2,
    dot: "bg-emerald-500",
  },
  PAUSED: {
    badge: "bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-slate-300",
    icon: PauseCircle,
    dot: "bg-gray-400",
  },
  WITH_ISSUES: {
    badge:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    icon: AlertCircle,
    dot: "bg-amber-500",
  },
  ARCHIVED: {
    badge: "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
    icon: X,
    dot: "bg-slate-400",
  },
  Live: {
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    icon: CheckCircle2,
    dot: "bg-emerald-500",
  },
  Draft: {
    badge: "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
    icon: X,
    dot: "bg-slate-400",
  },
};
const getStatusCfg = (s: string) => statusCfg[s] || statusCfg.Draft;

const platformColor: Record<string, string> = {
  Meta: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "Google Ads": "bg-amber-500/10 text-amber-500 border-amber-500/20",
  JustDial: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  IndiaMart: "bg-green-500/10 text-green-500 border-green-500/20",
};

const inputCls =
  "w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all";
const labelCls =
  "block text-xs font-medium text-gray-500 dark:text-slate-400 mb-1.5";

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS — JustDial specific
// FIX 4: All JD helper functions defined (were missing from original file)
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// SMALL SHARED COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
function FieldWrap({
  label,
  required = false,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelCls}>
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function StatCard({
  Icon,
  value,
  label,
  sub,
  accent = "indigo",
}: {
  Icon: React.ElementType;
  value: string | number;
  label: string;
  sub?: string;
  accent?: string;
}) {
  const ac: Record<string, string> = {
    indigo: "bg-indigo-500/10 text-indigo-500",
    emerald: "bg-emerald-500/10 text-emerald-500",
    amber: "bg-amber-500/10 text-amber-500",
    blue: "bg-blue-500/10 text-blue-500",
    orange: "bg-orange-500/10 text-orange-500",
    rose: "bg-rose-500/10 text-rose-500",
    purple: "bg-purple-500/10 text-purple-500",
  };
  return (
    <div className="p-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
      <div
        className={`w-7 h-7 rounded-lg flex items-center justify-center mb-2 ${ac[accent] || ac.indigo}`}
      >
        <Icon size={13} />
      </div>
      <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-none truncate">
        {value}
      </p>
      <p className="text-[10px] text-gray-500 dark:text-slate-400 mt-0.5 leading-tight">
        {label}
      </p>
      {sub && (
        <p className="text-[10px] text-emerald-500 mt-0.5 font-medium truncate">
          {sub}
        </p>
      )}
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// NEW CAMPAIGN MODAL
// ─────────────────────────────────────────────────────────────────────────────
function NewCampaignModal({
  onClose,
  onCreated,
  clients,
}: {
  onClose: () => void;
  onCreated: (c: any) => void;
  clients: ClientInfo[];
}) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { mutate: createCampaign, isPending } = usePost(
    "/campaign",
    "campaigns",
  );

  const set = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };
  const handleClientChange = (id: string) => {
    const c = clients.find((c) => c._id === id);
    setForm((f) => ({ ...f, clientId: id, clientName: c?.name || "" }));
  };
  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Campaign name required";
    if (!form.channel) e.channel = "Channel select karo";
    if (!form.objective) e.objective = "Objective select karo";
    if (!form.budget || isNaN(Number(form.budget)) || Number(form.budget) <= 0)
      e.budget = "Valid budget daalo";
    if (
      form.startDate &&
      form.endDate &&
      new Date(form.startDate) > new Date(form.endDate)
    )
      e.endDate = "End date must be after start date";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const handleSubmit = () => {
    if (!validate()) return;
    createCampaign(
      {
        ...form,
        budget: Number(form.budget),
        clientId: form.clientId || undefined,
        startDate: form.startDate || undefined,
        endDate: form.endDate || undefined,
      },
      {
        onSuccess: (data: any) => {
          toast.success("Campaign created! 🎉");
          onCreated(data.campaign);
          onClose();
        },
        onError: (err: any) =>
          toast.error(err?.response?.data?.message || "Create failed"),
      },
    );
  };
  const eb = (id: string) =>
    errors[id] ? "border-red-400 dark:border-red-500" : "";

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full sm:max-w-2xl bg-white dark:bg-[#0d1629] sm:rounded-2xl rounded-t-2xl shadow-2xl border-t sm:border border-gray-200 dark:border-slate-700 overflow-hidden max-h-[95dvh] flex flex-col">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-gray-200 dark:bg-slate-700 sm:hidden" />
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b border-gray-100 dark:border-slate-800 shrink-0 mt-3 sm:mt-0">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
              New Campaign
            </h2>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 hidden sm:block">
              Stored in DGCC database
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <X size={16} className="text-gray-500" />
          </button>
        </div>
        <div
          className="px-4 sm:px-5 py-4 space-y-3 sm:space-y-4 overflow-y-auto flex-1"
          style={{ scrollbarWidth: "thin" }}
        >
          <FieldWrap label="Campaign Name" required error={errors.name}>
            <input
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="e.g. AV Academy Q2"
              className={`${inputCls} ${eb("name")}`}
            />
          </FieldWrap>
          <div>
            <label className={labelCls}>Client</label>
            <select
              value={form.clientId}
              onChange={(e) => handleClientChange(e.target.value)}
              className={inputCls}
            >
              <option value="">Select Client (optional)</option>
              {clients.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FieldWrap label="Channel" required error={errors.channel}>
              <select
                value={form.channel}
                onChange={(e) => set("channel", e.target.value)}
                className={`${inputCls} ${eb("channel")}`}
              >
                <option value="">Select</option>
                {CHANNELS.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </FieldWrap>
            <FieldWrap label="Objective" required error={errors.objective}>
              <select
                value={form.objective}
                onChange={(e) => set("objective", e.target.value)}
                className={`${inputCls} ${eb("objective")}`}
              >
                <option value="">Select</option>
                {OBJECTIVES.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </FieldWrap>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FieldWrap label="Budget (₹)" required error={errors.budget}>
              <input
                value={form.budget}
                onChange={(e) => set("budget", e.target.value)}
                placeholder="50000"
                type="number"
                min="1"
                className={`${inputCls} ${eb("budget")}`}
              />
            </FieldWrap>
            <div>
              <label className={labelCls}>Status</label>
              <select
                value={form.status}
                onChange={(e) => set("status", e.target.value)}
                className={inputCls}
              >
                {STATUSES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Start Date</label>
              <input
                value={form.startDate}
                onChange={(e) => set("startDate", e.target.value)}
                type="date"
                className={inputCls}
              />
            </div>
            <FieldWrap label="End Date" error={errors.endDate}>
              <input
                value={form.endDate}
                onChange={(e) => set("endDate", e.target.value)}
                type="date"
                className={`${inputCls} ${eb("endDate")}`}
              />
            </FieldWrap>
          </div>
          <div>
            <label className={labelCls}>Notes</label>
            <textarea
              value={form.notes}
              onChange={(e) => set("notes", e.target.value)}
              rows={3}
              placeholder="Campaign goals, target audience…"
              className={`${inputCls} resize-none`}
            />
          </div>
          {form.name && form.channel && form.budget && (
            <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-700 dark:text-indigo-300">
              <span className="font-semibold">Preview: </span>"{form.name}" —{" "}
              {form.channel}
              {form.objective && ` · ${form.objective}`} · ₹
              {Number(form.budget).toLocaleString("en-IN")} · {form.status}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-[#0a1122] shrink-0">
          <button
            onClick={onClose}
            disabled={isPending}
            className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 text-xs sm:text-sm text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isPending}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold transition-colors disabled:opacity-60"
          >
            {isPending ? (
              <Loader2 size={13} className="animate-spin" />
            ) : (
              <Plus size={13} />
            )}
            {isPending ? "Creating…" : "Create Campaign"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CAMPAIGN DETAIL DRAWER
// ─────────────────────────────────────────────────────────────────────────────
function CampaignDrawer({
  c,
  onClose,
}: {
  c: NormalizedCampaign;
  onClose: () => void;
}) {
  const cfg = getStatusCfg(c.status);
  return (
    <div className="fixed inset-0 z-50 flex" onClick={onClose}>
      <div className="flex-1 bg-black/40 backdrop-blur-sm" />
      <aside
        className="w-full sm:max-w-[420px] md:max-w-[460px] h-full bg-white dark:bg-[#0d1629] border-l border-gray-200 dark:border-slate-700 overflow-y-auto shadow-2xl"
        style={{ scrollbarWidth: "thin" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white dark:bg-[#0d1629] border-b border-gray-100 dark:border-slate-800 px-4 sm:px-5 py-3 sm:py-4 flex items-start gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
            <Megaphone size={16} className="text-blue-500" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm sm:text-base text-gray-900 dark:text-white leading-tight line-clamp-2">
              {c.name}
            </p>
            <div className="flex items-center gap-1.5 mt-1 flex-wrap">
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full border font-semibold ${platformColor[c.platform] || "bg-gray-100 dark:bg-slate-800 text-gray-500 border-gray-200"}`}
              >
                {c.platform}
              </span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-semibold inline-flex items-center gap-1 ${cfg.badge}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                {c.status}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 shrink-0"
          >
            <X size={16} />
          </button>
        </div>
        <div className="p-4 sm:p-5 space-y-5">
          <section>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">
              Performance{" "}
              {c.insightPeriod && (
                <span className="normal-case font-normal">
                  ({c.insightPeriod})
                </span>
              )}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                {
                  label: "Spend",
                  value: fmtRs(c.spend),
                  color: "text-indigo-500",
                },
                {
                  label: "Leads",
                  value: fmtNum(c.leads),
                  color: "text-emerald-500",
                },
                {
                  label: "Impressions",
                  value: fmtNum(c.impressions),
                  color: "text-blue-500",
                },
                {
                  label: "Clicks",
                  value: fmtNum(c.clicks),
                  color: "text-amber-500",
                },
                {
                  label: "CTR",
                  value: c.ctr ? `${c.ctr}%` : "—",
                  color: "text-purple-500",
                },
                {
                  label: "CPL",
                  value: c.cpl ? fmtRs(Number(c.cpl)) : "—",
                  color:
                    c.cpl && Number(c.cpl) > 400
                      ? "text-red-500"
                      : "text-teal-500",
                },
                {
                  label: "CPM",
                  value: c.cpm ? `₹${c.cpm}` : "—",
                  color: "text-gray-500",
                },
                {
                  label: "CPC",
                  value: c.cpc ? `₹${c.cpc}` : "—",
                  color: "text-gray-500",
                },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  className="p-2.5 sm:p-3 rounded-xl bg-gray-50 dark:bg-slate-900/60 border border-gray-100 dark:border-slate-800"
                >
                  <p className="text-[10px] text-gray-400 dark:text-slate-500 mb-1">
                    {label}
                  </p>
                  <p
                    className={`text-sm sm:text-base font-bold truncate ${color}`}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">
              Budget
            </p>
            <div className="rounded-xl border border-gray-200 dark:border-slate-800 divide-y divide-gray-100 dark:divide-slate-800 overflow-hidden">
              {[
                ["Total Budget", fmtRs(c.budget)],
                ["Remaining", fmtRs(c.budgetRemaining)],
                ["Budget Type", c.budgetType || "—"],
                ["Spend", fmtRs(c.spend)],
              ].map(([l, v]) => (
                <div
                  key={l}
                  className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-white dark:bg-[#0b1220]"
                >
                  <span className="text-xs text-gray-500 dark:text-slate-400">
                    {l}
                  </span>
                  <span className="text-xs font-semibold text-gray-900 dark:text-white">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </section>
          {c.platform === "Meta" && (
            <a
              href="https://business.facebook.com/adsmanager"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-sm text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
            >
              <ExternalLink size={14} /> Open in Meta Ads Manager
            </a>
          )}
        </div>
      </aside>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function CampaignManagement() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCampaign, setSelectedCampaign] =
    useState<NormalizedCampaign | null>(null);
  const [selectedClient, setSelectedClient] = useState("");
  // FIX 7: default changed from "meta" to "all", and type now includes "all"
  const [activePlatform, setActivePlatform] = useState<Platform>("meta");
  const [dateRange, setDateRange] = useState<DateRange>("last_30d");
  const [filterStatus, setFilterStatus] = useState("");
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [assigning, setAssigning] = useState<string | null>(null);

  // ── API calls ──────────────────────────────────────────────────────────────
  const { data: clientsData } = useGet<ClientsListResponse>(
    "clients-list",
    "/client-campaigns/clients-list",
  );

  const {
    data: campaignData,
    isLoading: campaignLoading,
    isError: campaignError,
    refetch: refetchCampaigns,
    isFetching,
  } = useGet<ClientCampaignsResponse>(
    `all-campaigns-${dateRange}`,
    `/client-campaigns?date_preset=${dateRange}`,
  );



  const clients = clientsData?.clients || [];
  const rawCampaigns = (campaignData?.data || []) as NormalizedCampaign[];
  const selectedClientInfo = clients.find((c) => c._id === selectedClient);

  // ── Campaign filtering ────────────────────────────────────────────────────
  const allCampaigns = useMemo(
    () =>
      rawCampaigns.filter((c) => {
        if (selectedClient && c.clientId !== selectedClient) return false;
        if (activePlatform !== "all") {
          const tabMap: Record<string, string> = {
            meta: "Meta",
            "google-ads": "Google Ads",
            indiamart: "IndiaMart",
          };
          if (tabMap[activePlatform] && c.platform !== tabMap[activePlatform])
            return false;
        }
        return true;
      }),
    [rawCampaigns, selectedClient, activePlatform],
  );

  const summary = useMemo(() => {
    const totSpend = allCampaigns.reduce((s, c) => s + (c.spend || 0), 0);
    const totLeads = allCampaigns.reduce((s, c) => s + (c.leads || 0), 0);
    const totImp = allCampaigns.reduce((s, c) => s + (c.impressions || 0), 0);
    const totClicks = allCampaigns.reduce((s, c) => s + (c.clicks || 0), 0);
    const withCtr = allCampaigns.filter((c) => c.ctr);
    const avgCtr = withCtr.length
      ? (
          withCtr.reduce((s, c) => s + Number(c.ctr), 0) / withCtr.length
        ).toFixed(2)
      : "0.00";
    const byStatus: Record<string, number> = {};
    allCampaigns.forEach((c) => {
      byStatus[c.status] = (byStatus[c.status] || 0) + 1;
    });
    return {
      byStatus,
      totals: {
        spend: totSpend,
        leads: totLeads,
        impressions: totImp,
        clicks: totClicks,
        budget: allCampaigns.reduce((s, c) => s + (c.budget || 0), 0),
        cpl: totLeads > 0 ? (totSpend / totLeads).toFixed(2) : null,
        ctr: avgCtr,
      },
    };
  }, [allCampaigns]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return allCampaigns.filter((c) => {
      const ms =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.objective.toLowerCase().includes(q);
      const mv = !filterStatus || c.status === filterStatus;
      return ms && mv;
    });
  }, [allCampaigns, search, filterStatus]);

  const statusChartData = useMemo(() => {
    const m: Record<string, number> = {};
    allCampaigns.forEach((c) => {
      m[c.status] = (m[c.status] || 0) + 1;
    });
    return Object.entries(m).map(([name, value]) => ({ name, value }));
  }, [allCampaigns]);
  const objectiveChartData = useMemo(() => {
    const m: Record<string, number> = {};
    allCampaigns.forEach((c) => {
      m[c.objective] = (m[c.objective] || 0) + 1;
    });
    return Object.entries(m).map(([name, value]) => ({ name, value }));
  }, [allCampaigns]);
  const leadsChartData = useMemo(
    () =>
      allCampaigns
        .filter((c) => c.leads > 0)
        .sort((a, b) => b.leads - a.leads)
        .slice(0, 8)
        .map((c) => ({
          name: c.name.length > 16 ? c.name.slice(0, 14) + "…" : c.name,
          leads: c.leads,
          spend: c.spend,
        })),
    [allCampaigns],
  );

  const uniqueStatuses = [...new Set(allCampaigns.map((c) => c.status))];
  const hasFilters = search || filterStatus;

  const handleCreated = useCallback(
    () => toast.success("Campaign added — refresh to see it"),
    [],
  );

  const handleAssign = useCallback(
    async (campaign: NormalizedCampaign, toClientId: string) => {
      if (!toClientId) return;
      const toClient = clients.find((c) => c._id === toClientId);
      setAssigning(campaign.id);
      try {
        const r = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/client-campaigns/assign`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              metaCampaignId: campaign.id,
              metaCampaignName: campaign.name,
              clientId: toClientId,
            }),
          },
        );
        const data = await r.json();
        if (data.success) {
          toast.success(`"${campaign.name}" → "${toClient?.name}" assigned!`);
          refetchCampaigns();
        } else toast.error(data.message || "Assign failed");
      } catch {
        toast.error("Server error");
      } finally {
        setAssigning(null);
      }
    },
    [clients, refetchCampaigns],
  );

  const handleUnassign = useCallback(
    async (campaign: NormalizedCampaign) => {
      setAssigning(campaign.id);
      try {
        const r = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/client-campaigns/assign/${campaign.id}`,
          { method: "DELETE" },
        );
        const data = await r.json();
        if (data.success) {
          toast.success(`"${campaign.name}" unassigned`);
          refetchCampaigns();
        }
      } catch {
        toast.error("Server error");
      } finally {
        setAssigning(null);
      }
    },
    [refetchCampaigns],
  );

  const showCampaignTable = activePlatform === "meta";

  return (
    <div className="flex flex-col h-screen max-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white overflow-hidden">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <div className="shrink-0 border-b border-gray-200 dark:border-slate-800">
        <div className="px-3 sm:px-5 md:px-7 pt-3 sm:pt-4 pb-2 sm:pb-3 flex items-center gap-2 sm:gap-3 flex-wrap">
          <div className="flex-1 min-w-0">
            <h1 className="text-base sm:text-lg md:text-xl font-bold tracking-tight leading-tight">
              Campaign Management
            </h1>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Client filter */}
            <div className="relative">
              <Building2
                size={11}
                className={`absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none ${selectedClient ? "text-indigo-500" : "text-gray-400"}`}
              />
              <select
                value={selectedClient}
                onChange={(e) => {
                  setSelectedClient(e.target.value);
                  setFilterStatus("");
                  setSearch("");
                }}
                className={`pl-6 pr-6 py-1.5 rounded-lg border text-xs outline-none transition-colors appearance-none cursor-pointer max-w-[110px] sm:max-w-[160px] ${
                  selectedClient
                    ? "border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 font-semibold"
                    : "border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-gray-700 dark:text-gray-200"
                }`}
              >
                <option value="">All Clients</option>
                {/* ✅ FIX: value={c._id} instead of value={c.name} */}
                {clients.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
              </select>
              {selectedClient && (
                <button
                  onClick={() => setSelectedClient("")}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 text-indigo-400 hover:text-indigo-600"
                >
                  <X size={10} />
                </button>
              )}
            </div>

            {/* Date range */}
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value as DateRange)}
              className="px-2 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-xs text-gray-700 dark:text-gray-200 outline-none max-w-[90px] sm:max-w-none"
            >
              {DATE_RANGES.map((d) => (
                <option key={d.key} value={d.key}>
                  {d.label}
                </option>
              ))}
            </select>

            
          </div>
        </div>

        {/* Platform tabs */}
        <div
          className="px-3 sm:px-5 md:px-7 flex gap-0 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {PLATFORMS.map((p) => (
            <button
              key={p.key}
              onClick={() => setActivePlatform(p.key)}
              className={`flex items-center gap-1 px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-semibold whitespace-nowrap border-b-2 transition-colors shrink-0 ${
                activePlatform === p.key
                  ? "border-b-orange-500 text-orange-600 dark:text-indigo-400"
                  : "border-b-transparent text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200"
              }`}
            >
              {p.label}
              {(p.key === "google-ads" || p.key === "indiamart") && (
                <span className="text-[8px] opacity-50 ml-0.5">soon</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── BODY ───────────────────────────────────────────────────────────── */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <div
          className="h-full overflow-y-auto"
          style={{ scrollbarWidth: "thin" }}
        >
          <div className="p-3 sm:p-4 md:p-6 space-y-5">
            {/* Client banner */}
            {selectedClientInfo && (
              <div className="flex items-center gap-2.5 px-3 sm:px-4 py-2.5 rounded-xl border border-indigo-200 dark:border-indigo-800/40 bg-indigo-50 dark:bg-indigo-900/10 flex-wrap">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{
                    background: `hsl(${(selectedClientInfo.name.charCodeAt(0) * 37) % 360}, 60%, 50%)`,
                  }}
                >
                  {selectedClientInfo.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate block">
                    {selectedClientInfo.name}
                  </span>
                  {selectedClientInfo.industry && (
                    <span className="text-[10px] text-gray-400">
                      {selectedClientInfo.industry}
                    </span>
                  )}
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/30 font-semibold shrink-0">
                  {allCampaigns.length} campaigns
                </span>
                <button
                  onClick={() => setSelectedClient("")}
                  className="text-[10px] px-2 py-1 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-500 hover:text-red-500 hover:border-red-200 transition-colors flex items-center gap-1 shrink-0"
                >
                  <X size={9} /> Clear
                </button>
              </div>
            )}

            {/* Stat cards */}
            {activePlatform === "meta" && (
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
                <StatCard
                  Icon={Megaphone}
                  value={campaignLoading ? "…" : allCampaigns.length}
                  label="Campaigns"
                  accent="indigo"
                />
                <StatCard
                  Icon={CheckCircle2}
                  value={
                    campaignLoading ? "…" : summary?.byStatus?.["ACTIVE"] || 0
                  }
                  label="Active"
                  accent="emerald"
                />
                <StatCard
                  Icon={DollarSign}
                  value={
                    campaignLoading ? "…" : fmtRs(summary?.totals?.spend || 0)
                  }
                  label="Spend"
                  accent="blue"
                />
                <StatCard
                  Icon={Target}
                  value={campaignLoading ? "…" : summary?.totals?.leads || 0}
                  label="Leads"
                  accent="orange"
                  sub={
                    summary?.totals?.cpl
                      ? `CPL ${fmtRs(Number(summary.totals.cpl))}`
                      : ""
                  }
                />
                <StatCard
                  Icon={Eye}
                  value={
                    campaignLoading
                      ? "…"
                      : fmtNum(summary?.totals?.impressions || 0)
                  }
                  label="Impressions"
                  accent="amber"
                />
                <StatCard
                  Icon={MousePointerClick}
                  value={
                    campaignLoading ? "…" : `${summary?.totals?.ctr || "0.00"}%`
                  }
                  label="Avg CTR"
                  accent="rose"
                  sub={`${fmtNum(summary?.totals?.clicks || 0)} clicks`}
                />
              </div>
            )}

            {/* Coming soon banners */}
            {(activePlatform === "google-ads" ||
              activePlatform === "indiamart") && (
              <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30">
                <AlertTriangle
                  size={15}
                  className="text-amber-500 shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-amber-800 dark:text-amber-300">
                    {activePlatform === "google-ads"
                      ? "Google Ads"
                      : "IndiaMart"}{" "}
                    integration coming soon
                  </p>
                  <p className="text-[11px] sm:text-xs text-amber-700 dark:text-amber-400 mt-0.5">
                    {activePlatform === "google-ads"
                      ? "Google Ads API credentials connect karne ke baad campaigns yahan dikhenge"
                      : "IndiaMart inquiry emails parse karke leads yahan dikhenge"}
                  </p>
                </div>
              </div>
            )}

            {/* Campaign error */}
            {campaignError && showCampaignTable && (
              <div className="flex items-start gap-3 p-3 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30">
                <AlertTriangle
                  size={15}
                  className="text-red-500 shrink-0 mt-0.5"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-red-700 dark:text-red-400">
                    Could not load campaigns
                  </p>
                  <p className="text-[11px] text-red-600 dark:text-red-400 mt-0.5">
                    Backend:{" "}
                    <code className="bg-red-100 dark:bg-red-900/30 px-1 rounded">
                      /api/client-campaigns
                    </code>
                  </p>
                </div>
                <button
                  onClick={() => refetchCampaigns()}
                  className="text-xs px-2.5 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold shrink-0"
                >
                  Retry
                </button>
              </div>
            )}

            {/* Campaign Table */}
            {showCampaignTable && (
              <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] overflow-hidden">
                {/* Toolbar */}
                <div className="px-3 sm:px-4 py-2.5 border-b border-gray-100 dark:border-slate-800 flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white flex items-center gap-2">
                      Meta Campaigns
                      {!campaignLoading && (
                        <span className="text-[10px] font-normal text-gray-400">
                          {filtered.length} shown
                        </span>
                      )}
                    </h3>
                    <button
                      onClick={() => setShowFilters((v) => !v)}
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs border transition-colors ${
                        hasFilters
                          ? "border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                          : "border-gray-200 dark:border-slate-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      <SlidersHorizontal size={11} />
                      Filter
                      {hasFilters && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      )}
                    </button>
                  </div>
                  <div
                    className={`${showFilters ? "flex" : "hidden"} sm:flex flex-wrap gap-2`}
                  >
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 flex-1 min-w-0 max-w-xs">
                      <Search size={11} className="text-gray-400 shrink-0" />
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search campaigns…"
                        className="bg-transparent outline-none text-xs w-full text-gray-700 dark:text-gray-200 placeholder:text-gray-400"
                      />
                      {search && (
                        <button onClick={() => setSearch("")}>
                          <X size={10} className="text-gray-400" />
                        </button>
                      )}
                    </div>
                    {uniqueStatuses.length > 1 && (
                      <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-2 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-700 dark:text-gray-200 outline-none shrink-0"
                      >
                        <option value="">All statuses</option>
                        {uniqueStatuses.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    )}
                    {hasFilters && (
                      <button
                        onClick={() => {
                          setSearch("");
                          setFilterStatus("");
                        }}
                        className="flex items-center gap-1 px-2 py-1.5 text-xs rounded-lg border border-red-200 dark:border-red-900/50 text-red-500 hover:bg-red-50 transition-colors shrink-0"
                      >
                        <X size={10} /> Clear
                      </button>
                    )}
                  </div>
                </div>

                {campaignLoading ? (
                  <div className="p-3 space-y-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-10 rounded-lg bg-gray-100 dark:bg-slate-800 animate-pulse"
                      />
                    ))}
                  </div>
                ) : filtered.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-3 text-gray-400">
                    <Megaphone size={28} className="opacity-30" />
                    <p className="font-semibold text-sm">
                      {hasFilters ? "No campaigns match" : "No campaigns found"}
                    </p>
                    {hasFilters && (
                      <button
                        onClick={() => {
                          setSearch("");
                          setFilterStatus("");
                        }}
                        className="text-xs text-indigo-500 hover:underline"
                      >
                        Clear filters
                      </button>
                    )}
                  </div>
                ) : (
                  <>
                    {/* Desktop table */}
                    <div
                      className="hidden md:block overflow-x-auto"
                      style={{ scrollbarWidth: "thin" }}
                    >
                      <table className="w-full text-xs">
                        <thead className="bg-gray-50/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-800">
                          <tr>
                            {[
                              "Campaign",
                              // "Objective",
                              "Status",
                              "Budget",
                              "Spend",
                              "Leads",
                              "CPL",
                              "CTR",
                              "Impressions",
                              "Clicks",
                              // "Period",
                              "Client",
                              "Assign",
                            ].map((h) => (
                              <th
                                key={h}
                                className="px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wider text-gray-400 whitespace-nowrap"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-slate-800/60">
                          {filtered.map((c, i) => {
                            const cfg = getStatusCfg(c.status);
                            const SI = cfg.icon;
                            return (
                              <tr
                                key={c.id || i}
                                onClick={() => setSelectedCampaign(c)}
                                className="hover:bg-indigo-50/40 dark:hover:bg-slate-800/40 cursor-pointer transition-colors"
                              >
                                <td className="px-3 py-3 max-w-[180px]">
                                  <p
                                    className="font-semibold text-gray-900 dark:text-white truncate"
                                    title={c.name}
                                  >
                                    {c.name}
                                  </p>
                                </td>
                                {/* <td className="px-3 py-3 text-gray-600 dark:text-slate-400 whitespace-nowrap">
                                  {c.objective || "—"}
                                </td> */}
                                <td className="px-3 py-3">
                                  <span
                                    className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-semibold whitespace-nowrap ${cfg.badge}`}
                                  >
                                    <SI size={9} />
                                    {c.status}
                                  </span>
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap">
                                  <p className="font-semibold text-gray-900 dark:text-white">
                                    {fmtRs(c.budget)}
                                  </p>
                                  {c.budgetType && (
                                    <p className="text-[10px] text-gray-400 capitalize">
                                      {c.budgetType}
                                    </p>
                                  )}
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap text-gray-600 dark:text-slate-400">
                                  {fmtRs(c.spend)}
                                </td>
                                <td className="px-3 py-3 font-bold text-indigo-500">
                                  {fmtNum(c.leads)}
                                </td>
                                <td
                                  className={`px-3 py-3 font-semibold whitespace-nowrap ${c.cpl && Number(c.cpl) > 400 ? "text-red-500" : "text-emerald-500"}`}
                                >
                                  {c.cpl ? fmtRs(Number(c.cpl)) : "—"}
                                </td>
                                <td className="px-3 py-3 text-gray-600 dark:text-slate-400">
                                  {c.ctr ? `${c.ctr}%` : "—"}
                                </td>
                                <td className="px-3 py-3 text-gray-600 dark:text-slate-400 whitespace-nowrap">
                                  {fmtNum(c.impressions)}
                                </td>
                                <td className="px-3 py-3 text-gray-600 dark:text-slate-400">
                                  {fmtNum(c.clicks)}
                                </td>
                                {/* <td className="px-3 py-3 text-[10px] text-gray-400 whitespace-nowrap">
                                  {c.insightPeriod ?? c.startDate ?? "—"}
                                </td> */}
                                <td className="px-3 py-3">
                                  {c.isAssigned ? (
                                    <span className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-500/10 text-[#FF6F00] border border-indigo-500/20 font-semibold max-w-[100px] truncate">
                                      <Building2 size={8} />
                                      {c.clientName}
                                    </span>
                                  ) : (
                                    <span className="text-[10px] text-gray-400 italic">
                                      —
                                    </span>
                                  )}
                                </td>
                                <td
                                  className="px-3 py-3"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {assigning === c.id ? (
                                    <Loader2
                                      size={12}
                                      className="animate-spin text-indigo-400"
                                    />
                                  ) : (
                                    <select
                                      value=""
                                      onChange={(e) => {
                                        if (e.target.value === "__unassign__")
                                          handleUnassign(c);
                                        else if (e.target.value)
                                          handleAssign(c, e.target.value);
                                      }}
                                      className="text-[10px] px-1.5 py-1 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-gray-600 dark:text-slate-300 outline-none cursor-pointer max-w-[100px]"
                                    >
                                      <option value="">
                                        {c.isAssigned ? "Reassign…" : "Assign…"}
                                      </option>
                                      <option disabled>── Clients ──</option>
                                      {clients.map((cl) => (
                                        <option key={cl._id} value={cl._id}>
                                          {cl.name}
                                        </option>
                                      ))}
                                      {c.isAssigned && (
                                        <option value="__unassign__">
                                          🗑 Remove
                                        </option>
                                      )}
                                    </select>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile cards */}
                    <div className="md:hidden divide-y divide-gray-100 dark:divide-slate-800">
                      {filtered.map((c, i) => {
                        const cfg = getStatusCfg(c.status);
                        return (
                          <div
                            key={c.id || i}
                            onClick={() => setSelectedCampaign(c)}
                            className="p-3 hover:bg-gray-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                          >
                            <div className="flex items-start justify-between gap-2 mb-2.5">
                              <div className="min-w-0 flex-1">
                                <p className="font-semibold text-sm text-gray-900 dark:text-white line-clamp-2 leading-tight">
                                  {c.name}
                                </p>
                                <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                                  <span
                                    className={`text-[10px] px-1.5 py-0.5 rounded-full border font-semibold ${platformColor[c.platform] || "bg-gray-100 text-gray-500 border-gray-200"}`}
                                  >
                                    {c.platform}
                                  </span>
                                  <span
                                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${cfg.badge}`}
                                  >
                                    {c.status}
                                  </span>
                                  {c.isAssigned && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold inline-flex items-center gap-0.5">
                                      <Building2 size={8} />
                                      {c.clientName}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <ChevronDown
                                size={13}
                                className="text-gray-300 -rotate-90 shrink-0 mt-1"
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-x-3 gap-y-1.5 text-xs">
                              <div>
                                <p className="text-[10px] text-gray-400 leading-none mb-0.5">
                                  Spend
                                </p>
                                <p className="font-semibold text-gray-700 dark:text-slate-200">
                                  {fmtRs(c.spend)}
                                </p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 leading-none mb-0.5">
                                  Leads
                                </p>
                                <p className="font-bold text-indigo-500">
                                  {fmtNum(c.leads)}
                                </p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 leading-none mb-0.5">
                                  CPL
                                </p>
                                <p
                                  className={`font-semibold ${c.cpl && Number(c.cpl) > 400 ? "text-red-500" : "text-emerald-500"}`}
                                >
                                  {c.cpl ? fmtRs(Number(c.cpl)) : "—"}
                                </p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 leading-none mb-0.5">
                                  CTR
                                </p>
                                <p className="font-semibold text-gray-700 dark:text-slate-200">
                                  {c.ctr ? `${c.ctr}%` : "—"}
                                </p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 leading-none mb-0.5">
                                  Budget
                                </p>
                                <p className="font-semibold text-gray-700 dark:text-slate-200">
                                  {fmtRs(c.budget)}
                                </p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 leading-none mb-0.5">
                                  Impr.
                                </p>
                                <p className="font-semibold text-gray-700 dark:text-slate-200">
                                  {fmtNum(c.impressions)}
                                </p>
                              </div>
                            </div>
                            <div
                              className="mt-2.5"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {assigning === c.id ? (
                                <Loader2
                                  size={12}
                                  className="animate-spin text-indigo-400"
                                />
                              ) : (
                                <select
                                  value=""
                                  onChange={(e) => {
                                    if (e.target.value === "__unassign__")
                                      handleUnassign(c);
                                    else if (e.target.value)
                                      handleAssign(c, e.target.value);
                                  }}
                                  className="text-[10px] px-2 py-1 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] text-gray-600 dark:text-slate-300 outline-none cursor-pointer"
                                >
                                  <option value="">
                                    {c.isAssigned
                                      ? "Reassign…"
                                      : "Assign to client…"}
                                  </option>
                                  <option disabled>── Clients ──</option>
                                  {clients.map((cl) => (
                                    <option key={cl._id} value={cl._id}>
                                      {cl.name}
                                    </option>
                                  ))}
                                  {c.isAssigned && (
                                    <option value="__unassign__">
                                      🗑 Remove
                                    </option>
                                  )}
                                </select>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Meta charts */}
            {!campaignLoading &&
              allCampaigns.length > 0 &&
              showCampaignTable && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4">
                    <h3 className="font-bold text-xs sm:text-sm mb-0.5">
                      Status Breakdown
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-400 mb-3">
                      Active vs paused
                    </p>
                    {statusChartData.length > 0 ? (
                      <div className="h-44 sm:h-48">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={statusChartData}
                              cx="50%"
                              cy="50%"
                              innerRadius={42}
                              outerRadius={65}
                              paddingAngle={3}
                              dataKey="value"
                            >
                              {statusChartData.map((e, i) => (
                                <Cell
                                  key={i}
                                  fill={
                                    ["ACTIVE", "Live"].includes(e.name)
                                      ? "#22c55e"
                                      : ["PAUSED", "Paused"].includes(e.name)
                                        ? "#94a3b8"
                                        : PIE_COLORS[i % PIE_COLORS.length]
                                  }
                                />
                              ))}
                            </Pie>
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#0f172a",
                                border: "1px solid #334155",
                                borderRadius: "8px",
                                fontSize: "11px",
                              }}
                            />
                            <Legend wrapperStyle={{ fontSize: "11px" }} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    ) : (
                      <div className="h-44 flex items-center justify-center text-xs text-gray-400">
                        No data
                      </div>
                    )}
                  </div>
                  <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4">
                    <h3 className="font-bold text-xs sm:text-sm mb-0.5">
                      Objective Split
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-400 mb-3">
                      Campaigns by goal
                    </p>
                    {objectiveChartData.length > 0 ? (
                      <div className="h-44 sm:h-48">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={objectiveChartData}
                              cx="50%"
                              cy="50%"
                              innerRadius={42}
                              outerRadius={65}
                              paddingAngle={3}
                              dataKey="value"
                            >
                              {objectiveChartData.map((_, i) => (
                                <Cell
                                  key={i}
                                  fill={PIE_COLORS[i % PIE_COLORS.length]}
                                />
                              ))}
                            </Pie>
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#0f172a",
                                border: "1px solid #334155",
                                borderRadius: "8px",
                                fontSize: "11px",
                              }}
                            />
                            <Legend wrapperStyle={{ fontSize: "11px" }} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    ) : (
                      <div className="h-44 flex items-center justify-center text-xs text-gray-400">
                        No data
                      </div>
                    )}
                  </div>
                  <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-4 sm:col-span-2 md:col-span-1">
                    <h3 className="font-bold text-xs sm:text-sm mb-0.5">
                      Leads by Campaign
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-400 mb-3">
                      Top 8 by lead count
                    </p>
                    {leadsChartData.length > 0 ? (
                      <div
                        style={{
                          height: Math.max(
                            leadsChartData.length * 32 + 40,
                            176,
                          ),
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={leadsChartData}
                            layout="vertical"
                            margin={{ left: 0, right: 20, top: 0, bottom: 0 }}
                          >
                            <CartesianGrid
                              strokeDasharray="3 3"
                              stroke="#1e293b"
                              horizontal={false}
                            />
                            <XAxis
                              type="number"
                              tick={{ fontSize: 9 }}
                              stroke="#64748b"
                              allowDecimals={false}
                            />
                            <YAxis
                              type="category"
                              dataKey="name"
                              tick={{ fontSize: 9 }}
                              stroke="#64748b"
                              width={80}
                            />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#0f172a",
                                border: "1px solid #334155",
                                borderRadius: "8px",
                                fontSize: "11px",
                              }}
                              formatter={(v: any, n: string | number | undefined) => [
                                n === "leads"
                                  ? v
                                  : `₹${Number(v).toLocaleString("en-IN")}`,
                                n === "leads" ? "Leads" : "Spend",
                              ]}
                            />
                            <Bar
                              dataKey="leads"
                              fill="#4f46e5"
                              radius={[0, 3, 3, 0]}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    ) : (
                      <div className="h-44 flex items-center justify-center text-xs text-gray-400">
                        No leads data
                      </div>
                    )}
                  </div>
                </div>
              )}

            
          </div>
        </div>
      </div>

      {/* Modals */}
      {showModal && (
        <NewCampaignModal
          onClose={() => setShowModal(false)}
          onCreated={handleCreated}
          clients={clients}
        />
      )}
      {selectedCampaign && (
        <CampaignDrawer
          c={selectedCampaign}
          onClose={() => setSelectedCampaign(null)}
        />
      )}
    </div>
  );
}
