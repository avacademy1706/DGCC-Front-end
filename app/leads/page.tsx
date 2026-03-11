"use client";

import {
  Download,
  Plus,
  Check,
  BarChart3,
  Hourglass,
  Star,
  X,
} from "lucide-react";

export default function LeadManagement() {

  const pipeline = {
    new: [
      { name: "Priya Sharma", meta: "Mumbai · Meta Ads", tag: "Real Estate" },
      { name: "Rohit Mehta", meta: "Delhi · Google", tag: "EduTech" },
      { name: "Anita Singh", meta: "Bangalore · WhatsApp", tag: "Finance" },
    ],
    working: [
      { name: "Vikram Nair", meta: "Chennai · Email", tag: "Healthcare" },
      { name: "Sunita Patel", meta: "Ahmedabad · Meta", tag: "Real Estate" },
    ],
    qualified: [
      { name: "Aarav Kumar", meta: "Hyderabad · Google", tag: "Finance" },
      { name: "Neha Gupta", meta: "Pune · Meta", tag: "EduTech" },
      { name: "Raj Verma", meta: "Mumbai · WhatsApp", tag: "Real Estate" },
    ],
    won: [
      { name: "Meera Iyer", meta: "Bangalore · Google", tag: "Converted" },
      { name: "Sanjay Kapoor", meta: "Delhi · Meta", tag: "Converted" },
    ],
    lost: [
      { name: "Kavya Reddy", meta: "Budget not matching", tag: "" },
    ],
    nurture: [
      { name: "Amit Joshi", meta: "Follow-up in 2 weeks", tag: "Nurture" },
    ],
  };

  const StatCard = ({ icon: Icon, value, label }) => (
    <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#0b1220]">

      <Icon className="mb-4 text-indigo-500"/>

      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>

    </div>
  );

  const LeadCard = ({ lead }) => (
    <div className="bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-slate-800 rounded-lg p-4">

      <p className="font-medium text-sm">{lead.name}</p>

      <p className="text-xs text-gray-500">{lead.meta}</p>

      {lead.tag && (
        <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">
          {lead.tag}
        </span>
      )}

    </div>
  );

  const Column = ({ title, color, count, leads }) => (
    <div className="space-y-3">

      <div
        className={`flex justify-between items-center text-sm px-3 py-2 rounded-lg ${color}`}
      >
        <span>{title}</span>
        <span className="text-xs bg-white/40 px-2 py-1 rounded-full">{count}</span>
      </div>

      {leads.map((lead, i) => (
        <LeadCard key={i} lead={lead} />
      ))}

    </div>
  );

  return (
    <div className="p-8 min-h-screen bg-gray-50 dark:bg-[#020817] text-gray-900 dark:text-white space-y-6">

      {/* HEADER */}

      <div className="flex justify-between items-start">

        <div>
          <h1 className="text-2xl font-bold">Lead Management</h1>
          <p className="text-sm text-gray-500 dark:text-slate-400">
            CRM Pipeline · 2,847 leads this month
          </p>
        </div>

        <div className="flex gap-3">

          <button className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-slate-700">
            <Download size={16}/>
            Export CSV
          </button>

          <button className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white">
            <Plus size={16}/>
            Add Lead
          </button>

        </div>

      </div>

      {/* STATS */}

      <div className="grid grid-cols-4 gap-6">

        <StatCard icon={BarChart3} value="142" label="New Leads Today"/>
        <StatCard icon={Check} value="340" label="Won This Month"/>
        <StatCard icon={Hourglass} value="486" label="In Pipeline"/>
        <StatCard icon={Star} value="11.9%" label="Conversion Rate"/>

      </div>

      {/* TABS */}

      <div className="flex gap-8 border-b border-gray-200 dark:border-slate-800 text-sm">

        <span className="border-b-2 border-indigo-500 text-indigo-500 pb-2">
          Pipeline View
        </span>

        <span className="text-gray-500">Table View</span>
        <span className="text-gray-500">Activity Timeline</span>

      </div>

      {/* PIPELINE */}

      <div className="grid grid-cols-6 gap-6">

        <Column
          title="New"
          count="48"
          color="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
          leads={pipeline.new}
        />

        <Column
          title="Working"
          count="82"
          color="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200"
          leads={pipeline.working}
        />

        <Column
          title="Qualified"
          count="124"
          color="bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-200"
          leads={pipeline.qualified}
        />

        <Column
          title="Won"
          count="340"
          color="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
          leads={pipeline.won}
        />

        <Column
          title="Lost"
          count="98"
          color="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
          leads={pipeline.lost}
        />

        <Column
          title="Nurture"
          count="64"
          color="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200"
          leads={pipeline.nurture}
        />

      </div>

    </div>
  );
}