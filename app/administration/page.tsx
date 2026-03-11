"use client";

import { useState } from "react";
import {
  Crown,
  Triangle,
  Megaphone,
  Briefcase,
  BarChart3,
} from "lucide-react";

export default function AdministrationPanel() {
  const [tab, setTab] = useState("users");

  const users = [
    {
      initials: "AK",
      name: "Alex Kumar",
      email: "alex@apexagency.in",
      role: "Admin",
      access: "All Clients",
      last: "Now",
    },
    {
      initials: "RK",
      name: "Rahul Kapoor",
      email: "rahul@apexagency.in",
      role: "Strategist",
      access: "EduTech, RE360",
      last: "2h ago",
    },
    {
      initials: "PM",
      name: "Pooja Mehta",
      email: "pooja@apexagency.in",
      role: "Marketing Mgr",
      access: "HealthFirst, Fashion",
      last: "1d ago",
    },
    {
      initials: "AT",
      name: "Amit Trivedi",
      email: "amit@apexagency.in",
      role: "Sales User",
      access: "FinanceHub",
      last: "3h ago",
    },
    {
      initials: "VG",
      name: "Vijay Gupta",
      email: "ceo@realestate360.in",
      role: "Client CXO",
      access: "RE360 only",
      last: "Yesterday",
    },
  ];

  const logs = [
    ["2026-03-07 14:32", "LOGIN", "Alex Kumar logged in"],
    ["2026-03-07 14:28", "CREATE", "Campaign RE360 created"],
    ["2026-03-07 13:45", "UPDATE", "HealthFirst campaign updated"],
    ["2026-03-07 12:14", "CONVERT", "Lead converted by Amit"],
    ["2026-03-07 11:32", "ALERT", "Budget overspend detected"],
    ["2026-03-07 10:45", "WORKFLOW", "Lead nurture executed"],
    ["2026-03-07 09:00", "SYNC", "Meta API sync completed"],
  ];

  const RoleBadge = ({ role }: any) => {
    const map: any = {
      Admin: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
      Strategist:
        "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
      "Marketing Mgr":
        "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300",
      "Sales User":
        "bg-cyan-100 text-cyan-600 dark:bg-cyan-900 dark:text-cyan-300",
      "Client CXO":
        "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300",
    };

    return (
      <span className={`px-2 py-1 text-xs rounded-full ${map[role]}`}>
        {role}
      </span>
    );
  };

  const TabButton = ({ id, label }: any) => (
    <button
      onClick={() => setTab(id)}
      className={`pb-3 text-sm ${
        tab === id
          ? "border-b-2 border-indigo-600 text-indigo-600"
          : "text-gray-500"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="p-8 space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">
      {/* HEADER */}

      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Administration</h1>
          <p className="text-sm text-gray-500">
            Users, roles, audit logs and system management
          </p>
        </div>

        <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">
          + Invite User
        </button>
      </div>

      {/* TABS */}

      <div className="flex gap-8 border-b border-gray-200 dark:border-slate-800">
        <TabButton id="users" label="User Management" />
        <TabButton id="roles" label="Roles & Permissions" />
        <TabButton id="logs" label="Audit Logs" />
        <TabButton id="health" label="System Health" />
      </div>

      {/* USER MANAGEMENT */}

      {tab === "users" && (
        <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">
          <div className="flex justify-between mb-6">
            <h3 className="font-semibold">Team Members</h3>
            <input
              placeholder="Search users..."
              className="px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-sm"
            />
          </div>

          <table className="w-full text-sm">
            <thead className="text-gray-500 border-b border-gray-200 dark:border-slate-800">
              <tr>
                <th className="text-left py-3">USER</th>
                <th>ROLE</th>
                <th>CLIENT ACCESS</th>
                <th>LAST ACTIVE</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-200 dark:border-slate-800"
                >
                  <td className="py-4">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm">
                        {u.initials}
                      </div>

                      <div>
                        <p className="font-medium">{u.name}</p>
                        <p className="text-xs text-gray-500">{u.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="text-center">
                    <RoleBadge role={u.role} />
                  </td>

                  <td className="text-center">{u.access}</td>

                  <td className="text-center">{u.last}</td>

                  <td className="text-center">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
                      Active
                    </span>
                  </td>

                  <td className="text-center text-indigo-600 cursor-pointer">
                    Edit
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ROLES */}

      {tab === "roles" && (
        <div className="grid grid-cols-3 gap-6">
          <RoleCard
            icon={<Crown />}
            title="Admin"
            desc="Full platform access · User management · Billing"
            perms="✓ All modules · ✓ All clients · ✓ Admin panel"
          />

          <RoleCard
            icon={<Triangle />}
            title="Strategist"
            desc="Strategy, campaigns, analytics access"
            perms="✓ Strategy · ✓ Campaigns · ✓ Analytics · ✗ Admin"
          />

          <RoleCard
            icon={<Megaphone />}
            title="Marketing Manager"
            desc="Campaign execution and content management"
            perms="✓ Campaigns · ✓ Content · ✓ Reports · ✗ Admin"
          />

          <RoleCard
            icon={<Briefcase />}
            title="Sales User"
            desc="Lead management and CRM access"
            perms="✓ Leads · ✓ CRM · ✗ Campaigns · ✗ Admin"
          />

          <RoleCard
            icon={<BarChart3 />}
            title="Client CXO"
            desc="Read-only executive dashboard"
            perms="✓ Own dashboard · ✓ Reports · ✗ Edit access"
          />
        </div>
      )}

      {/* AUDIT LOGS */}

      {tab === "logs" && (
        <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">
          <div className="flex justify-between mb-6">
            <h3 className="font-semibold">Audit Log</h3>
            <input
              placeholder="Search logs..."
              className="px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-sm"
            />
          </div>

          <div className="space-y-3 text-sm">
            {logs.map((l, i) => (
              <div
                key={i}
                className="flex gap-6 border-b border-gray-200 dark:border-slate-800 pb-2"
              >
                <span className="text-gray-500">{l[0]}</span>
                <span className="text-indigo-600">{l[1]}</span>
                <span>{l[2]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SYSTEM HEALTH */}

      {tab === "health" && (
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6 space-y-4">
            <h3 className="font-semibold">Service Status</h3>

            {[
              "API Gateway",
              "Meta Ads Sync",
              "Google Ads Sync",
              "Zoho CRM Sync",
              "WhatsApp Gateway",
              "Workflow Engine",
              "Report Generator",
            ].map((s, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span>● {s}</span>
                <span className="text-green-500">Online</span>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6 space-y-5">
            <h3 className="font-semibold">Infrastructure Metrics</h3>

            <Metric label="API Latency" value="24ms" width="30%" />
            <Metric label="Error Rate" value="0.12%" width="10%" />
            <Metric label="DB Connections" value="48/200" width="40%" />
            <Metric label="Storage Used" value="284GB / 1TB" width="45%" />
            <Metric label="ETL Jobs Today" value="142 / 142" width="100%" />
          </div>
        </div>
      )}
    </div>
  );
}

/* ROLE CARD */

function RoleCard({ icon, title, desc, perms }: any) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-2">
      <div className="text-indigo-500">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
      <p className="text-xs text-green-500">{perms}</p>
    </div>
  );
}

/* METRIC BAR */

function Metric({ label, value, width }: any) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-slate-800 rounded">
        <div
          className="h-2 bg-indigo-500 rounded"
          style={{ width: width }}
        />
      </div>
    </div>
  );
}