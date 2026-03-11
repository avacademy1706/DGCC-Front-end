"use client";

import {
  Zap,
  Play,
  MessageCircle,
  Mail,
  Plus,
  TestTube,
  Bot,
  CheckCircle,
  PauseCircle,
   GitBranch,
  User,
  Clock,
} from "lucide-react";


export default function AutomationWorkflows() {

  const StatCard = ({ icon: Icon, value, label }) => (
    <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] relative overflow-hidden">
      <Icon className="text-indigo-500 mb-3" />
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );

  const ActiveWorkflow = ({ title, runs, status }) => (
    <div className="flex justify-between items-center p-4 rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">

      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500">{runs}</p>
      </div>

      <span
        className={`text-xs px-3 py-1 rounded-full ${
          status === "Active"
            ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
            : "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300"
        }`}
      >
        {status}
      </span>

    </div>
  );

  const Node = ({ title, subtitle, color }) => (
    <div
      className={`px-5 py-3 rounded-lg text-sm border ${color}`}
    >
      <p className="text-xs opacity-70">{title}</p>
      <p className="font-medium">{subtitle}</p>
    </div>
  );

  return (
    <div className="p-8 space-y-6 bg-gray-50 dark:bg-[#020817] min-h-screen text-gray-900 dark:text-white">

      {/* HEADER */}

      <div className="flex justify-between items-start">

        <div>
          <h1 className="text-2xl font-bold">Automation & Workflows</h1>
          <p className="text-sm text-gray-500 dark:text-slate-400">
            12 active workflows · 8,402 executions this month
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">
          <Plus size={16} />
          New Workflow
        </button>

      </div>

      {/* STATS */}

      <div className="grid grid-cols-4 gap-6">

        <StatCard icon={Zap} value="12" label="Active Workflows" />
        <StatCard icon={Play} value="8,402" label="Executions This Month" />
        <StatCard icon={MessageCircle} value="3,284" label="WhatsApp Messages Sent" />
        <StatCard icon={Mail} value="5,118" label="Emails Delivered" />

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-3 gap-6">

        {/* WORKFLOW BUILDER */}

        <div className="col-span-2 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

          <div className="flex justify-between mb-6">

            <h3 className="font-semibold">
              Workflow Builder — Lead Nurture Flow
            </h3>

            <div className="flex gap-2">

              <button className="flex items-center gap-1 text-xs px-3 py-1 rounded-md border border-gray-300 dark:border-slate-700">
                <TestTube size={14}/>
                Test
              </button>

              <button className="text-xs px-3 py-1 rounded-md bg-indigo-600 text-white">
                Activate
              </button>

            </div>

          </div>

          {/* FLOW AREA */}

          <div className="space-y-6">

  <div className="flex gap-6 items-center">

    <Node
      icon={Zap}
      title="TRIGGER"
      subtitle="Lead Created"
      color="border-green-500"
    />

    <span className="text-gray-400">→</span>

    <Node
      icon={GitBranch}
      title="CONDITION"
      subtitle="Source = Meta Ads"
      color="border-orange-500"
    />

  </div>

  <div className="flex gap-6">

    <Node
      icon={MessageCircle}
      title="ACTION"
      subtitle="Send WhatsApp Welcome"
      color="border-blue-500"
    />

    <Node
      icon={User}
      title="ACTION"
      subtitle="Assign to Sales Rep"
      color="border-blue-500"
    />

  </div>

  <Node
    icon={Clock}
    title="DELAY"
    subtitle="Wait 24 hours"
    color="border-indigo-500 w-56"
  />

  <Node
    icon={Mail}
    title="ACTION"
    subtitle="Send Follow-up Email"
    color="border-blue-500 w-64"
  />

</div>

        </div>

        {/* RIGHT PANEL */}

        <div className="space-y-6">

          {/* ACTIVE WORKFLOWS */}

          <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

            <h3 className="font-semibold mb-4">
              Active Workflows
            </h3>

            <div className="space-y-3">

              <ActiveWorkflow
                title="Lead Nurture — Meta"
                runs="284 runs / month"
                status="Active"
              />

              <ActiveWorkflow
                title="WhatsApp Re-engagement"
                runs="142 runs / month"
                status="Active"
              />

              <ActiveWorkflow
                title="Budget Alert Notifier"
                runs="18 runs / month"
                status="Paused"
              />

              <ActiveWorkflow
                title="Sales Task Assigner"
                runs="96 runs / month"
                status="Active"
              />

            </div>

          </div>

          {/* AI RECOMMENDATIONS */}

          <div className="rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220] p-6">

            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Bot size={16} />
              AI Recommendations
            </h3>

            <div className="space-y-4">

              <div className="p-4 rounded-lg border border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20">

                <p className="text-sm font-medium">
                  Add SMS Fallback
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  30% of WhatsApp messages unread after 48h.
                  Adding SMS fallback can increase response rate by est. 22%.
                </p>

                <button className="text-indigo-600 text-xs mt-2">
                  → Add to Workflow
                </button>

              </div>

              <div className="p-4 rounded-lg border border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20">

                <p className="text-sm font-medium">
                  Personalize Copy
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Using first name + industry-specific CTA increases open rate by 34%.
                </p>

                <button className="text-indigo-600 text-xs mt-2">
                  → Update Templates
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}