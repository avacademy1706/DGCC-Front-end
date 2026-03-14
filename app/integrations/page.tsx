// "use client";

// import {
//   Check,
//   Zap,
//   RefreshCw,
//   AlertTriangle,
//   Smartphone,
//   Search,
//   BarChart3,
//   Flame,
//   Database,
//   MessageCircle,
//   Mail,
//   FileSpreadsheet,
//   Plus,
// } from "lucide-react";

// export default function IntegrationsHub() {

// const integrations = [
// {
// name:"Meta Marketing API",
// desc:"Facebook & Instagram Ads · Ad accounts, campaigns, leads",
// status:"Connected",
// sync:"5 min ago",
// icon:Smartphone
// },
// {
// name:"Google Ads API",
// desc:"Search, Display & YouTube campaigns",
// status:"Connected",
// sync:"12 min ago",
// icon:Search
// },
// {
// name:"Google Analytics 4",
// desc:"Website traffic, conversions, events",
// status:"Connected",
// sync:"1 hour ago",
// icon:BarChart3
// },
// {
// name:"HubSpot CRM",
// desc:"Contact management, deal tracking",
// status:"Connected",
// sync:"22 min ago",
// icon:Flame
// },
// {
// name:"Zoho CRM",
// desc:"Lead routing, pipeline management",
// status:"Token Expired",
// sync:"2 days ago",
// icon:Database
// },
// {
// name:"WhatsApp Business API",
// desc:"Automated messaging, lead notifications",
// status:"Connected",
// sync:"2 min ago",
// icon:MessageCircle
// },
// {
// name:"Mailchimp / SendGrid",
// desc:"Email campaigns, automations",
// status:"Connected",
// sync:"",
// icon:Mail
// },
// {
// name:"Manual CSV Upload",
// desc:"Offline revenue, call data imports",
// status:"Manual",
// sync:"",
// icon:FileSpreadsheet
// }
// ];

// const StatusBadge = ({status}) => {

// if(status==="Connected")
// return <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">• Connected</span>

// if(status==="Token Expired")
// return <span className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300">⚠ Token Expired</span>

// if(status==="Manual")
// return <span className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-600 dark:bg-slate-800 dark:text-gray-300">Manual</span>

// }

// const StatCard = ({icon:Icon,value,label}) => (

// <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">

// <Icon className="text-indigo-500 mb-3"/>

// <p className="text-2xl font-bold">{value}</p>

// <p className="text-sm text-gray-500">{label}</p>

// </div>

// )

// return (

// <div className="p-8 space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">

// {/* HEADER */}

// <div className="flex justify-between items-start">

// <div>

// <h1 className="text-2xl font-bold">Integrations Hub</h1>

// <p className="text-sm text-gray-500">
// Connected platforms and data sources
// </p>

// </div>

// <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">

// <Plus size={16}/>

// Add Integration

// </button>

// </div>

// {/* STATS */}

// <div className="grid grid-cols-4 gap-6">

// <StatCard icon={Check} value="9" label="Connected"/>

// <StatCard icon={Zap} value="2" label="Pending Setup"/>

// <StatCard icon={RefreshCw} value="Last 5m" label="Last Sync"/>

// <StatCard icon={AlertTriangle} value="1" label="Sync Errors"/>

// </div>

// {/* INTEGRATIONS GRID */}

// <div className="grid grid-cols-3 gap-6">

// {integrations.map((i,index)=>{

// const Icon=i.icon

// return(

// <div
// key={index}
// className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-4"
// >

// <div className="flex items-start justify-between">

// <div className="flex items-center gap-3">

// <div className="p-3 rounded-lg bg-gray-100 dark:bg-slate-800">
// <Icon size={18}/>
// </div>

// <div>

// <p className="font-medium text-sm">
// {i.name}
// </p>

// <p className="text-xs text-gray-500">
// {i.desc}
// </p>

// </div>

// </div>

// </div>

// <div className="flex justify-between items-center">

// <StatusBadge status={i.status}/>

// {i.status==="Token Expired"
// ? <button className="text-xs px-3 py-1 rounded-md bg-indigo-600 text-white">Reconnect</button>
// : i.name==="Manual CSV Upload"
// ? <button className="text-xs px-3 py-1 rounded-md border border-gray-300 dark:border-slate-700">Upload CSV</button>
// : <button className="text-xs text-gray-500">Configure</button>
// }

// </div>

// {i.sync && (
// <p className="text-xs text-gray-400">
// Last sync: {i.sync}
// </p>
// )}

// </div>

// )

// })}

// {/* ADD INTEGRATION CARD */}

// <div className="p-6 rounded-xl border border-dashed border-gray-300 dark:border-slate-700 flex flex-col items-center justify-center text-center">

// <Plus className="text-gray-400 mb-3"/>

// <p className="font-medium text-sm">
// Add Integration
// </p>

// <p className="text-xs text-gray-500">
// Browse 40+ connectors
// </p>

// </div>

// </div>

// </div>

// )
// }
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  RefreshCw, AlertTriangle, Smartphone, Search, BarChart3, Flame,
  Database, MessageCircle, Mail, FileSpreadsheet, Plus, X, Clock,
  CheckCircle2, XCircle, AlertCircle, Upload, Settings, WifiOff,
  RotateCcw, ChevronRight, ExternalLink, Check, Link2, Loader2,
  TrendingUp, Activity, Megaphone, Star, FileUp, Eye, Trash2,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
type Status = "connected" | "disconnected" | "expired" | "error" | "manual" | "syncing" | "loading";
type Category = "all" | "ads" | "crm" | "analytics" | "messaging" | "other";

interface MetaStats {
  total: number;
  today: number;
  forms: number;
  platforms: number;
  formNames: string[];
}

interface CsvImportResult {
  importId: string;
  filename: string;
  total: number;
  imported: number;
  skipped: number;
  errors: string[];
  preview: Record<string, string>[];
  headers: string[];
}

interface CsvHistoryItem {
  _id: string;
  filename: string;
  totalRows: number;
  imported: number;
  skipped: number;
  importedAt: string;
  errors: string[];
}

interface IntegrationDef {
  id: string;
  name: string;
  desc: string;
  category: Category;
  Icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  features: string[];
  comingSoon?: boolean;
  webhookUrl?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// STATIC DEFINITIONS
// ─────────────────────────────────────────────────────────────────────────────
const INTEGRATION_DEFS: IntegrationDef[] = [
  {
    id: "meta", name: "Meta Marketing API", desc: "Facebook & Instagram Ads",
    category: "ads", Icon: Smartphone, iconBg: "bg-blue-500/10", iconColor: "text-blue-500",
    features: ["Lead Forms", "Campaigns", "Ad Insights", "Webhooks"],
    webhookUrl: "https://your-app.com/webhook/meta",
  },
  {
    id: "google-ads", name: "Google Ads API", desc: "Search, Display & YouTube",
    category: "ads", Icon: Search, iconBg: "bg-amber-500/10", iconColor: "text-amber-500",
    features: ["Campaigns", "Keywords", "Conversions", "Reports"], comingSoon: true,
  },
  {
    id: "ga4", name: "Google Analytics 4", desc: "Website traffic & events",
    category: "analytics", Icon: BarChart3, iconBg: "bg-orange-500/10", iconColor: "text-orange-500",
    features: ["Sessions", "Events", "Conversions", "Audiences"], comingSoon: true,
  },
  {
    id: "hubspot", name: "HubSpot CRM", desc: "Contacts & deal tracking",
    category: "crm", Icon: Flame, iconBg: "bg-red-500/10", iconColor: "text-red-500",
    features: ["Contacts", "Deals", "Pipeline", "Sequences"], comingSoon: true,
  },
  {
    id: "zoho", name: "Zoho CRM", desc: "Lead routing & pipeline",
    category: "crm", Icon: Database, iconBg: "bg-rose-500/10", iconColor: "text-rose-500",
    features: ["Leads", "Deals", "Contacts", "Reports"], comingSoon: true,
  },
  {
    id: "whatsapp", name: "WhatsApp Business API", desc: "Automated messaging",
    category: "messaging", Icon: MessageCircle, iconBg: "bg-emerald-500/10", iconColor: "text-emerald-500",
    features: ["Templates", "Broadcasts", "Automations", "Webhooks"], comingSoon: true,
  },
  {
    id: "email", name: "Mailchimp / SendGrid", desc: "Email campaigns & automations",
    category: "messaging", Icon: Mail, iconBg: "bg-yellow-500/10", iconColor: "text-yellow-500",
    features: ["Campaigns", "Templates", "Automations", "Lists"], comingSoon: true,
  },
  {
    id: "csv", name: "Manual CSV Upload", desc: "Offline & call data imports",
    category: "other", Icon: FileSpreadsheet, iconBg: "bg-slate-500/10", iconColor: "text-slate-400",
    features: ["Bulk Import", "Validation", "Preview", "History"],
  },
];

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "all", label: "All" }, { key: "ads", label: "Ads" },
  { key: "crm", label: "CRM" }, { key: "analytics", label: "Analytics" },
  { key: "messaging", label: "Messaging" }, { key: "other", label: "Other" },
];

// ─────────────────────────────────────────────────────────────────────────────
// STATUS CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const STATUS_CFG: Record<Status, { label: string; dot: string; badge: string }> = {
  connected:    { label: "Connected",     dot: "bg-emerald-500",              badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" },
  disconnected: { label: "Not Connected", dot: "bg-gray-400",                 badge: "bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 border-gray-200 dark:border-slate-700" },
  expired:      { label: "Token Expired", dot: "bg-amber-500",                badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20" },
  error:        { label: "Error",         dot: "bg-red-500",                  badge: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20" },
  manual:       { label: "Manual",        dot: "bg-slate-400",                badge: "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700" },
  syncing:      { label: "Syncing…",      dot: "bg-blue-400 animate-pulse",   badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" },
  loading:      { label: "Loading…",      dot: "bg-gray-300 animate-pulse",   badge: "bg-gray-100 dark:bg-slate-800 text-gray-400 border-gray-200 dark:border-slate-700" },
};

// ─────────────────────────────────────────────────────────────────────────────
// API HELPERS
// ─────────────────────────────────────────────────────────────────────────────
const DGCC_API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function apiFetchIntegrations() {
  const r = await fetch(`${DGCC_API}/integrations`);
  if (!r.ok) throw new Error("Failed");
  return r.json();
}
async function apiSyncMeta() {
  const r = await fetch(`${DGCC_API}/integrations/meta/sync`, { method: "POST" });
  return r.json();
}
async function apiFetchMetaStats() {
  const r = await fetch(`${DGCC_API}/integrations/meta/stats`);
  return r.json();
}
async function apiFetchCsvHistory() {
  const r = await fetch(`${DGCC_API}/integrations/csv/history`);
  return r.json();
}

// ─────────────────────────────────────────────────────────────────────────────
// STATUS BADGE
// ─────────────────────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: Status }) {
  const cfg = STATUS_CFG[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-1 rounded-full border ${cfg.badge}`}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CSV UPLOAD MODAL
// ─────────────────────────────────────────────────────────────────────────────
function CsvUploadModal({ onClose, onSuccess }: {
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [stage, setStage] = useState<"idle" | "uploading" | "result" | "error">("idle");
  const [result, setResult] = useState<CsvImportResult | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [history, setHistory] = useState<CsvHistoryItem[]>([]);
  const [tab, setTab] = useState<"upload" | "history">("upload");
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    apiFetchCsvHistory().then(d => { if (d.success) setHistory(d.imports); }).catch(() => {});
  }, []);

  const handleFile = async (file: File) => {
    if (!file.name.toLowerCase().endsWith(".csv")) {
      setErrorMsg("Only .csv files are supported");
      setStage("error");
      return;
    }
    setStage("uploading");
    setErrorMsg("");
    try {
      const form = new FormData();
      form.append("file", file);
      const r = await fetch(`${DGCC_API}/integrations/csv/upload`, { method: "POST", body: form });
      const data = await r.json();
      if (!data.success) { setErrorMsg(data.message); setStage("error"); return; }
      setResult(data);
      setStage("result");
      onSuccess();
      apiFetchCsvHistory().then(d => { if (d.success) setHistory(d.imports); }).catch(() => {});
    } catch (e: any) {
      setErrorMsg(e.message || "Upload failed");
      setStage("error");
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg bg-white dark:bg-[#0d1629] rounded-2xl border border-gray-200 dark:border-slate-700 shadow-2xl overflow-hidden flex flex-col"
        style={{ maxHeight: "90vh" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-slate-800 shrink-0">
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">CSV Import</h3>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">Upload leads, call logs, or offline data</p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400"><X size={16} /></button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100 dark:border-slate-800 shrink-0">
          {(["upload", "history"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex-1 py-2.5 text-xs font-semibold capitalize transition-colors ${tab === t ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400" : "text-gray-500 dark:text-slate-400 hover:text-gray-700"}`}>
              {t === "history" ? `History (${history.length})` : "Upload"}
            </button>
          ))}
        </div>

        <div className="overflow-y-auto flex-1" style={{ scrollbarWidth: "thin" }}>
          {/* ── UPLOAD TAB ── */}
          {tab === "upload" && (
            <div className="p-6 space-y-4">
              {stage === "idle" && (
                <>
                  <div
                    onDrop={onDrop}
                    onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onClick={() => inputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                      dragOver
                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                        : "border-gray-300 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-600 hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10"
                    }`}
                  >
                    <FileUp size={28} className="text-gray-400 dark:text-slate-500 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-gray-700 dark:text-slate-300">Drop CSV here or click to browse</p>
                    <p className="text-xs text-gray-400 dark:text-slate-500 mt-1">Max 10 MB · First row must be column headers</p>
                  </div>
                  <input ref={inputRef} type="file" accept=".csv" className="hidden"
                    onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
                  <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/30">
                    <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-400 mb-1.5">Recognised columns:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["name / full_name", "email", "phone / mobile", "city", "source", "notes"].map(f => (
                        <code key={f} className="text-[10px] bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-1.5 py-0.5 rounded font-mono">{f}</code>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {stage === "uploading" && (
                <div className="py-12 flex flex-col items-center gap-3">
                  <Loader2 size={28} className="text-indigo-500 animate-spin" />
                  <p className="text-sm font-semibold text-gray-700 dark:text-slate-300">Uploading & parsing…</p>
                  <p className="text-xs text-gray-400">Validating rows…</p>
                </div>
              )}

              {stage === "error" && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 flex items-start gap-3">
                    <XCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-red-700 dark:text-red-400">Upload failed</p>
                      <p className="text-xs text-red-600 dark:text-red-400 mt-0.5">{errorMsg}</p>
                    </div>
                  </div>
                  <button onClick={() => setStage("idle")} className="w-full py-2.5 text-sm rounded-xl border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors font-medium text-gray-700 dark:text-gray-300">
                    Try Again
                  </button>
                </div>
              )}

              {stage === "result" && result && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/30">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">Import Successful — <span className="font-mono">{result.filename}</span></p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Total Rows", value: result.total, color: "" },
                        { label: "Imported",   value: result.imported, color: "text-emerald-600 dark:text-emerald-400" },
                        { label: "Skipped",    value: result.skipped,  color: result.skipped > 0 ? "text-amber-500" : "" },
                      ].map(({ label, value, color }) => (
                        <div key={label} className="text-center p-2.5 rounded-xl bg-white dark:bg-slate-900/60">
                          <p className={`text-xl font-bold ${color || "text-gray-900 dark:text-white"}`}>{value}</p>
                          <p className="text-[10px] text-gray-500 dark:text-slate-400 mt-0.5">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {result.preview.length > 0 && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-2">Preview (first 3 rows)</p>
                      <div className="rounded-xl border border-gray-200 dark:border-slate-800 overflow-auto" style={{ scrollbarWidth: "thin" }}>
                        <table className="w-full text-xs">
                          <thead className="bg-gray-50 dark:bg-slate-900">
                            <tr>{result.headers.slice(0, 5).map(h => <th key={h} className="px-3 py-2 text-left font-semibold text-gray-500 whitespace-nowrap">{h}</th>)}</tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                            {result.preview.map((row, i) => (
                              <tr key={i} className="bg-white dark:bg-[#0b1220]">
                                {result.headers.slice(0, 5).map(h => (
                                  <td key={h} className="px-3 py-2 text-gray-700 dark:text-slate-300 whitespace-nowrap max-w-[120px] truncate">{row[h] || "—"}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {result.errors.length > 0 && (
                    <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30">
                      <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1.5">Skipped rows ({result.skipped}):</p>
                      {result.errors.map((e, i) => <p key={i} className="text-[11px] text-amber-600 dark:text-amber-400">{e}</p>)}
                    </div>
                  )}

                  <button onClick={() => { setStage("idle"); setResult(null); }}
                    className="w-full py-2.5 text-sm rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors">
                    Upload Another File
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ── HISTORY TAB ── */}
          {tab === "history" && (
            <div className="p-6">
              {history.length === 0 ? (
                <div className="py-12 text-center text-sm text-gray-400 dark:text-slate-500">No imports yet</div>
              ) : (
                <div className="space-y-2">
                  {history.map(h => (
                    <div key={h._id} className="p-3.5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{h.filename}</p>
                        <span className="text-[10px] text-gray-400 shrink-0">
                          {new Date(h.importedAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-emerald-500 font-semibold">{h.imported} imported</span>
                        {h.skipped > 0 && <span className="text-xs text-amber-500 font-semibold">{h.skipped} skipped</span>}
                        <span className="text-xs text-gray-400 ml-auto">{h.totalRows} total</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// META DETAIL DRAWER
// ─────────────────────────────────────────────────────────────────────────────
function MetaDrawer({ status, metaStats, onClose, onSync, syncingMeta }: {
  status: Status; metaStats: MetaStats | null;
  onClose: () => void; onSync: () => void; syncingMeta: boolean;
}) {
  const def = INTEGRATION_DEFS.find(d => d.id === "meta")!;
  const [copied, setCopied] = useState(false);
  const copyWebhook = () => {
    navigator.clipboard.writeText(def.webhookUrl!).catch(() => {});
    setCopied(true); setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex" onClick={onClose}>
      <div className="flex-1 bg-black/40 backdrop-blur-sm" />
      <aside
        className="w-full sm:max-w-[460px] h-full bg-white dark:bg-[#0d1629] border-l border-gray-200 dark:border-slate-700 overflow-y-auto shadow-2xl"
        style={{ scrollbarWidth: "thin" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-[#0d1629] border-b border-gray-100 dark:border-slate-800 px-5 py-4 flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${def.iconBg}`}>
            <def.Icon size={18} className={def.iconColor} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-900 dark:text-white">{def.name}</p>
            <p className="text-xs text-gray-500 dark:text-slate-400">{def.desc}</p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-400 shrink-0"><X size={16} /></button>
        </div>

        <div className="p-5 space-y-6">
          {/* Status + sync */}
          <div className={`flex items-center justify-between p-4 rounded-xl border ${
            status === "connected" || status === "syncing"
              ? "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800/30"
              : "bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800/30"
          }`}>
            <div>
              <p className={`text-sm font-bold ${status === "connected" || status === "syncing" ? "text-emerald-700 dark:text-emerald-400" : "text-red-700 dark:text-red-400"}`}>
                {STATUS_CFG[status]?.label}
              </p>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">Meta API server (port 3000)</p>
            </div>
            <button onClick={onSync} disabled={syncingMeta}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors disabled:opacity-60 font-semibold">
              <RefreshCw size={11} className={syncingMeta ? "animate-spin" : ""} />
              {syncingMeta ? "Syncing…" : "Sync Now"}
            </button>
          </div>

          {/* Live stats */}
          {metaStats ? (
            <section>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">Live Data</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Total Leads",  value: metaStats.total,     Icon: TrendingUp, color: "text-indigo-500",  bg: "bg-indigo-500/10"  },
                  { label: "Today",        value: metaStats.today,     Icon: Activity,   color: "text-emerald-500", bg: "bg-emerald-500/10" },
                  { label: "Active Forms", value: metaStats.forms,     Icon: Megaphone,  color: "text-amber-500",   bg: "bg-amber-500/10"   },
                  { label: "Platforms",    value: metaStats.platforms, Icon: Star,       color: "text-blue-500",    bg: "bg-blue-500/10"    },
                ].map(({ label, value, Icon, color, bg }) => (
                  <div key={label} className="p-3 rounded-xl bg-gray-50 dark:bg-slate-900/60 border border-gray-100 dark:border-slate-800">
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center mb-2 ${bg}`}>
                      <Icon size={11} className={color} />
                    </div>
                    <p className={`text-xl font-bold ${color}`}>{value}</p>
                    <p className="text-[10px] text-gray-500 dark:text-slate-400 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <div className="py-6 text-center text-sm text-gray-400 dark:text-slate-500">
              {status === "error" ? "Could not load stats — Meta API server may be down" : "Loading stats…"}
            </div>
          )}

          {/* Active form names */}
          {metaStats && metaStats.formNames.length > 0 && (
            <section>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">Active Lead Forms ({metaStats.formNames.length})</p>
              <div className="space-y-1.5">
                {metaStats.formNames.map(f => (
                  <div key={f} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-slate-900/60 border border-gray-100 dark:border-slate-800">
                    <Check size={11} className="text-emerald-500 shrink-0" />
                    <span className="text-xs text-gray-700 dark:text-slate-300 truncate">{f}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Webhook */}
          <section>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">Webhook Endpoint</p>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-slate-900/60 border border-gray-200 dark:border-slate-800">
              <Link2 size={12} className="text-gray-400 shrink-0" />
              <p className="text-xs font-mono text-gray-700 dark:text-slate-300 flex-1 truncate">{def.webhookUrl}</p>
              <button onClick={copyWebhook}
                className="text-[11px] px-2.5 py-1 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition-colors font-semibold shrink-0">
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </section>

          {/* Actions */}
          <section>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-500 mb-3">Actions</p>
            <div className="space-y-2">
              <a href="/leads"
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                <Eye size={14} /> View All Leads
              </a>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                <Settings size={14} /> Configure Settings
              </button>
            </div>
          </section>
        </div>
      </aside>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// INTEGRATION CARD
// ─────────────────────────────────────────────────────────────────────────────
function IntegrationCard({ def, status, dataLine, onSelect }: {
  def: IntegrationDef; status: Status; dataLine?: string; onSelect: () => void;
}) {
  return (
    <div
      onClick={def.comingSoon ? undefined : onSelect}
      className={`group relative flex flex-col p-4 md:p-5 rounded-xl border bg-white dark:bg-[#0b1220] transition-all ${
        def.comingSoon
          ? "border-gray-200 dark:border-slate-800 opacity-55 cursor-not-allowed"
          : "border-gray-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700/60 hover:shadow-md dark:hover:shadow-indigo-900/20 cursor-pointer"
      }`}
    >
      {def.comingSoon && (
        <span className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-400">
          Soon
        </span>
      )}
      {!def.comingSoon && (
        <span className={`absolute top-4 right-4 w-2 h-2 rounded-full ${STATUS_CFG[status]?.dot || "bg-gray-300"}`} />
      )}

      <div className="flex items-start gap-3 mb-3 pr-6">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${def.iconBg}`}>
          <def.Icon size={18} className={def.iconColor} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-sm text-gray-900 dark:text-white truncate">{def.name}</p>
          <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 truncate">{def.desc}</p>
        </div>
      </div>

      {dataLine && !def.comingSoon && (
        <p className="text-xs font-semibold mb-3 text-indigo-500 truncate">{dataLine}</p>
      )}

      <div className="flex flex-wrap gap-1 mb-4">
        {def.features.map(f => (
          <span key={f} className="text-[10px] px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 font-medium">{f}</span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between">
        {!def.comingSoon
          ? <StatusBadge status={status} />
          : <span className="text-[11px] text-gray-400 dark:text-slate-500">Available soon</span>
        }
        {!def.comingSoon && (
          <ChevronRight size={14} className="text-gray-300 dark:text-slate-600 group-hover:text-indigo-500 transition-colors" />
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function IntegrationsHub() {
  const [category,      setCategory]      = useState<Category>("all");
  const [showMeta,      setShowMeta]      = useState(false);
  const [showCsv,       setShowCsv]       = useState(false);
  const [metaStatus,    setMetaStatus]    = useState<Status>("loading");
  const [metaStats,     setMetaStats]     = useState<MetaStats | null>(null);
  const [syncingMeta,   setSyncingMeta]   = useState(false);
  const [syncMsg,       setSyncMsg]       = useState<{ text: string; ok: boolean } | null>(null);
  const [csvLastImport, setCsvLastImport] = useState("");
  const [pageLoading,   setPageLoading]   = useState(true);

  // ── Load on mount ──────────────────────────────────────────────────────
  const loadAll = useCallback(async () => {
    try {
      const [integData, statsData] = await Promise.allSettled([
        apiFetchIntegrations(),
        apiFetchMetaStats(),
      ]);

      if (integData.status === "fulfilled" && integData.value.success) {
        const meta = integData.value.integrations.meta;
        setMetaStatus(meta.status as Status);
        if (meta.stats) setMetaStats(meta.stats);
        const csv = integData.value.integrations.csv;
        if (csv.lastImport) {
          setCsvLastImport(`Last: ${csv.lastImport.filename} (${csv.lastImport.imported} rows)`);
        }
      } else {
        setMetaStatus("error");
      }

      if (statsData.status === "fulfilled" && statsData.value.success) {
        setMetaStats(statsData.value.stats);
      }
    } catch {
      setMetaStatus("error");
    } finally {
      setPageLoading(false);
    }
  }, []);

  useEffect(() => { loadAll(); }, [loadAll]);

  // ── Meta sync ──────────────────────────────────────────────────────────
  const handleMetaSync = useCallback(async () => {
    if (syncingMeta) return;
    setSyncingMeta(true);
    setMetaStatus("syncing");
    setSyncMsg(null);
    try {
      const result = await apiSyncMeta();
      if (result.success) {
        setMetaStatus("connected");
        if (result.stats) setMetaStats(result.stats);
        setSyncMsg({ text: `✓ ${result.message}`, ok: true });
      } else {
        setMetaStatus("error");
        setSyncMsg({ text: "Sync failed — check Meta API server (port 3000)", ok: false });
      }
    } catch {
      setMetaStatus("error");
      setSyncMsg({ text: "Could not reach DGCC backend (port 5000)", ok: false });
    } finally {
      setSyncingMeta(false);
      setTimeout(() => setSyncMsg(null), 5000);
    }
  }, [syncingMeta]);

  // ── Derived ────────────────────────────────────────────────────────────
  const connectedCount = (metaStatus === "connected" || metaStatus === "syncing") ? 1 : 0;
  const filtered = INTEGRATION_DEFS.filter(d => category === "all" || d.category === category);

  const metaDataLine = metaStats
    ? `${metaStats.total} total leads · ${metaStats.today} today · ${metaStats.forms} forms`
    : undefined;

  const pageStats = [
    { label: "Connected",    value: pageLoading ? "…" : String(connectedCount),              accent: "bg-emerald-500/10 text-emerald-500", Icon: CheckCircle2 },
    { label: "Coming Soon",  value: "7",                                                       accent: "bg-slate-200/60 dark:bg-slate-800 text-slate-400",   Icon: Clock        },
    { label: "Total Leads",  value: pageLoading ? "…" : String(metaStats?.total  ?? "—"),     accent: "bg-indigo-500/10 text-indigo-500",   Icon: TrendingUp   },
    { label: "Today's Leads",value: pageLoading ? "…" : String(metaStats?.today  ?? "—"),     accent: "bg-blue-500/10   text-blue-500",     Icon: Activity     },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-5 bg-gray-50 dark:bg-[#020817] min-h-full text-gray-900 dark:text-white">

      {/* ── HEADER ── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">Integrations Hub</h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 mt-0.5">
            {pageLoading ? "Loading…" : (
              <>{connectedCount > 0 ? <span className="text-emerald-500 font-semibold">Meta Ads connected</span> : <span className="text-red-400 font-semibold">No active connections</span>} · 7 integrations coming soon</>
            )}
          </p>
        </div>
        <button onClick={handleMetaSync} disabled={syncingMeta || pageLoading}
          className="flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-[#0b1220] hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-60 font-semibold self-start sm:self-auto">
          <RefreshCw size={13} className={syncingMeta ? "animate-spin" : ""} />
          <span>{syncingMeta ? "Syncing…" : "Sync Meta"}</span>
        </button>
      </div>

      {/* ── SYNC TOAST ── */}
      {syncMsg && (
        <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border ${
          syncMsg.ok
            ? "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800/30 text-emerald-700 dark:text-emerald-400"
            : "bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800/30 text-red-700 dark:text-red-400"
        }`}>
          {syncMsg.ok ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
          {syncMsg.text}
        </div>
      )}

      {/* ── STATS ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        {pageStats.map(({ label, value, accent, Icon }) => (
          <div key={label} className="p-3 sm:p-4 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">
            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mb-2 sm:mb-3 ${accent}`}>
              <Icon size={14} />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-none">{value}</p>
            <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* ── ERROR ALERT ── */}
      {metaStatus === "error" && !pageLoading && (
        <div className="flex items-start sm:items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/40">
          <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex-1">
            <p className="text-sm font-bold text-red-700 dark:text-red-400">Meta API server unreachable</p>
            <p className="text-xs text-red-600 dark:text-red-400 mt-0.5">Ensure Meta API server is running on <code className="font-mono bg-red-100 dark:bg-red-900/30 px-1 rounded">port 3000</code></p>
          </div>
          <button onClick={handleMetaSync} className="shrink-0 text-xs px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors font-semibold">Retry</button>
        </div>
      )}

      {/* ── CATEGORY TABS ── */}
      <div className="flex gap-2 overflow-x-auto pb-0.5" style={{ scrollbarWidth: "none" }}>
        {CATEGORIES.map(c => {
          const count = c.key === "all" ? INTEGRATION_DEFS.length : INTEGRATION_DEFS.filter(i => i.category === c.key).length;
          return (
            <button key={c.key} onClick={() => setCategory(c.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${
                category === c.key
                  ? "bg-indigo-600 text-white"
                  : "bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-400 hover:border-indigo-400"
              }`}>
              {c.label}
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                category === c.key ? "bg-white/20 text-white" : "bg-gray-100 dark:bg-slate-800 text-gray-500"
              }`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* ── GRID ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        {filtered.map(def => (
          <IntegrationCard
            key={def.id}
            def={def}
            status={
              def.id === "meta" ? (pageLoading ? "loading" : metaStatus) :
              def.id === "csv"  ? "manual" :
              "disconnected"
            }
            dataLine={
              def.id === "meta" ? metaDataLine :
              def.id === "csv"  ? (csvLastImport || undefined) :
              undefined
            }
            onSelect={() => {
              if (def.id === "meta") setShowMeta(true);
              if (def.id === "csv")  setShowCsv(true);
            }}
          />
        ))}

        {/* Placeholder card */}
        {(category === "all" || category === "other") && (
          <div className="p-4 md:p-5 rounded-xl border-2 border-dashed border-gray-200 dark:border-slate-800 flex flex-col items-center justify-center text-center gap-2 min-h-[160px] opacity-40 cursor-not-allowed">
            <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
              <Plus size={18} className="text-gray-400" />
            </div>
            <div>
              <p className="font-bold text-sm text-gray-700 dark:text-slate-300">More Coming</p>
              <p className="text-xs text-gray-500 dark:text-slate-500 mt-0.5">40+ integrations planned</p>
            </div>
          </div>
        )}
      </div>

      {/* ── DRAWERS / MODALS ── */}
      {showMeta && (
        <MetaDrawer status={metaStatus} metaStats={metaStats} onClose={() => setShowMeta(false)} onSync={handleMetaSync} syncingMeta={syncingMeta} />
      )}
      {showCsv && (
        <CsvUploadModal onClose={() => setShowCsv(false)} onSuccess={loadAll} />
      )}
    </div>
  );
}