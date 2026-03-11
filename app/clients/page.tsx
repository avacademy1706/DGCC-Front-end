"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// ─── Static KPI Cards ─────────────────────────────────────────────────────────
const stats = [
  { title: "Active Clients",        value: "8",     icon: "👥" },
  { title: "Total Revenue Managed", value: "₹2.1Cr",icon: "📈" },
  { title: "Live Campaigns",        value: "38",    icon: "🎯" },
  { title: "Avg Client Health",     value: "94%",   icon: "⚡" },
];

// ─── Status badge color helper ────────────────────────────────────────────────
const statusColor = (status: string) => {
  if (status === "completed")   return "bg-emerald-500/20 text-emerald-400";
  if (status === "in_progress") return "bg-amber-500/20 text-amber-400";
  return "bg-gray-500/20 text-gray-400"; // draft
};

const statusLabel = (status: string) => {
  if (status === "completed")   return "Active";
  if (status === "in_progress") return "In Progress";
  return "Draft";
};

// ─── Letter avatar color ──────────────────────────────────────────────────────
const avatarColors = [
  "from-indigo-500 to-blue-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-red-500",
  "from-pink-500 to-purple-500",
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-purple-500",
];

export default function ClientPortfolio() {
  const [clients, setClients]   = useState<any[]>([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);

  // ─── Clients fetch karo ─────────────────────────────────────────────────────
  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${API}/clients`);
        setClients(data.clients || []);
      } catch (err: any) {
        setError("Clients load nahi hue. Backend chal raha hai?");
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="p-8 space-y-8 bg-gray-50 dark:bg-[#020817] min-h-screen">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Client Portfolio
          </h1>
          <p className="text-sm text-gray-500">
            {loading ? "Loading..." : `${clients.length} clients · Multi-tenant management`}
          </p>
        </div>
        <Link href="/client-onboarding">
          <button className="px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition-colors">
            + Onboard New Client
          </button>
        </Link>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 rounded-xl border bg-white dark:bg-[#0b1220] dark:border-slate-800">
            <div className="text-2xl mb-3">{stat.icon}</div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <p className="text-sm text-gray-500 mt-1">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* ERROR STATE */}
      {error && (
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 text-sm">
          ⚠️ {error}
        </div>
      )}

      {/* LOADING STATE */}
      {loading && (
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="p-6 rounded-xl border bg-white dark:bg-[#0b1220] dark:border-slate-800 animate-pulse">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-slate-700" />
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-gray-200 dark:bg-slate-700 rounded" />
                  <div className="h-3 w-24 bg-gray-200 dark:bg-slate-700 rounded" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-5">
                {[1,2,3,4].map(j => (
                  <div key={j} className="space-y-1">
                    <div className="h-3 w-16 bg-gray-200 dark:bg-slate-700 rounded" />
                    <div className="h-4 w-12 bg-gray-200 dark:bg-slate-700 rounded" />
                  </div>
                ))}
              </div>
              <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded" />
            </div>
          ))}
        </div>
      )}

      {/* CLIENT GRID */}
      {!loading && (
        <div className="grid grid-cols-3 gap-6">

          {clients.length === 0 && !error && (
            <div className="col-span-3 text-center py-16 text-gray-400 dark:text-slate-500">
              <p className="text-4xl mb-4">📋</p>
              <p className="font-medium">Koi client nahi mila</p>
              <p className="text-sm mt-1">Pehla client onboard karo</p>
            </div>
          )}

          {clients.map((client, i) => {
            // Backend ke fields
            const name     = client?.profile?.companyName || client["profile.companyName"] || "Unnamed Client";
            const industry = client?.profile?.industry    || client["profile.industry"]    || "—";
            const status   = client?.status               || "draft";
            const step     = client?.currentStep          || 1;
            const letter   = name.charAt(0).toUpperCase();
            const color    = avatarColors[i % avatarColors.length];

            return (
              <div key={client._id} className="p-6 rounded-xl border bg-white dark:bg-[#0b1220] dark:border-slate-800">

                {/* TOP */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-sm`}>
                      {letter}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
                      <p className="text-xs text-gray-500">
                        {industry} · ID: {client._id.slice(-6).toUpperCase()}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${statusColor(status)}`}>
                    {statusLabel(status)}
                  </span>
                </div>

                {/* METRICS */}
                <div className="grid grid-cols-2 gap-4 text-sm mb-5">
                  <div>
                    <p className="text-gray-500 dark:text-slate-400">Revenue Model</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {client?.profile?.revenueModel || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-slate-400">Budget</p>
                    <p className="font-semibold text-emerald-500">
                      {client?.profile?.budget || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-slate-400">Market</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {client?.profile?.market || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-slate-400">Channels</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {client?.channels?.channels?.length
                        ? `${client.channels.channels.length} Active`
                        : "—"}
                    </p>
                  </div>
                </div>

                {/* ONBOARDING PROGRESS BAR */}
                <div>
                  <div className="h-2 rounded bg-gray-200 dark:bg-slate-700">
                    <div
                      className={`h-2 rounded transition-all ${
                        status === "completed"   ? "bg-emerald-500"
                        : status === "in_progress" ? "bg-amber-500"
                        : "bg-gray-400"
                      }`}
                      style={{ width: `${status === "completed" ? 100 : (step - 1) * 20}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-slate-500 mt-2">
                    {status === "completed"
                      ? "Onboarding Complete ✓"
                      : `Onboarding: Step ${step}/5`}
                  </p>
                </div>

              </div>
            );
          })}

          {/* ADD CLIENT CARD */}
          <Link href="/client-onboarding">
            <div className="border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-gray-400 p-10 cursor-pointer hover:border-indigo-400 hover:text-indigo-400 transition-colors min-h-[200px]">
              <div className="text-3xl mb-3">＋</div>
              <p className="font-medium">Onboard New Client</p>
              <p className="text-xs mt-1">Start 5-step setup wizard</p>
            </div>
          </Link>

        </div>
      )}

    </div>
  );
}