"use client";

import { useState } from "react";
import { Lock, ShieldCheck, Key, Trash2 } from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    budget: true,
    leads: true,
    campaign: true,
    weekly: false,
  });

  const Toggle = ({ value, onChange }: any) => (
    <button
      onClick={onChange}
      className={`w-11 h-6 flex items-center rounded-full p-1 transition ${
        value ? "bg-green-500" : "bg-gray-300 dark:bg-slate-700"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
          value ? "translate-x-5" : ""
        }`}
      />
    </button>
  );

  return (
    <div className="p-8 space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">

      {/* HEADER */}

      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-sm text-gray-500">
            Platform configuration and preferences
          </p>
        </div>

        <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">

        {/* LEFT SIDE */}

        <div className="col-span-2 space-y-6">

          {/* ORGANISATION SETTINGS */}

          <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-5">

            <h3 className="font-semibold">Organisation Settings</h3>

            <Input label="Agency Name" value="Apex Digital Agency" />

            <Input label="Primary Domain" value="apexagency.in" />

            <Input label="Default Currency" value="INR (₹)" />

            <Input label="Timezone" value="Asia/Kolkata (IST)" />
          </div>

          {/* NOTIFICATIONS */}

          <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-5">

            <h3 className="font-semibold">Notification Preferences</h3>

            <ToggleRow
              label="Budget overspend alerts"
              toggle={
                <Toggle
                  value={notifications.budget}
                  onChange={() =>
                    setNotifications({ ...notifications, budget: !notifications.budget })
                  }
                />
              }
            />

            <ToggleRow
              label="New lead notifications"
              toggle={
                <Toggle
                  value={notifications.leads}
                  onChange={() =>
                    setNotifications({ ...notifications, leads: !notifications.leads })
                  }
                />
              }
            />

            <ToggleRow
              label="Campaign performance alerts"
              toggle={
                <Toggle
                  value={notifications.campaign}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      campaign: !notifications.campaign,
                    })
                  }
                />
              }
            />

            <ToggleRow
              label="Weekly summary email"
              toggle={
                <Toggle
                  value={notifications.weekly}
                  onChange={() =>
                    setNotifications({
                      ...notifications,
                      weekly: !notifications.weekly,
                    })
                  }
                />
              }
            />
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="space-y-6">

          {/* PLATFORM INFO */}

          <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-4">

            <h3 className="font-semibold">Platform Info</h3>

            <InfoRow label="Version" value="DGCC v2.4.1" />

            <InfoRow
              label="Plan"
              value={
                <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">
                  Enterprise
                </span>
              }
            />

            <InfoRow label="Clients" value="8 / 20" />

            <InfoRow label="Users" value="12 / 50" />
          </div>

          {/* SECURITY */}

          <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] space-y-4">

            <h3 className="font-semibold">Security</h3>

            <ActionBtn icon={<Lock size={16} />} label="Change Password" />

            <ActionBtn icon={<ShieldCheck size={16} />} label="Setup 2FA" />

            <ActionBtn icon={<Key size={16} />} label="API Keys" />

            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300">
              <Trash2 size={16} /> Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* INPUT FIELD */

function Input({ label, value }: any) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-gray-500">{label}</p>
      <input
        defaultValue={value}
        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-sm"
      />
    </div>
  );
}

/* INFO ROW */

function InfoRow({ label, value }: any) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-500">{label}</span>
      <span>{value}</span>
    </div>
  );
}

/* TOGGLE ROW */

function ToggleRow({ label, toggle }: any) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span>{label}</span>
      {toggle}
    </div>
  );
}

/* ACTION BUTTON */

function ActionBtn({ icon, label }: any) {
  return (
    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700">
      {icon}
      {label}
    </button>
  );
}