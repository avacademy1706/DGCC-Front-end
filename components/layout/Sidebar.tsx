"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  Target,
  Megaphone,
  FileText,
  Mail,
  Bot,
  BarChart3,
  FileBarChart,
  Package,
  Plug,
  Settings,
  Shield,
} from "lucide-react";

const menu = [
  {
    label: "Overview",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
      { name: "Clients", icon: Users, href: "/clients", badge: "8" },
    ],
  },
  {
    label: "Growth",
    items: [
      { name: "Strategy", icon: Target, href: "/strategy" },
      { name: "Campaigns", icon: Megaphone, href: "/campaigns", badge: "12" },
      { name: "Content", icon: FileText, href: "/content" },
      { name: "Leads", icon: Mail, href: "/leads", badge: "24" },
    ],
  },
  {
    label: "Automation",
    items: [
      { name: "Automation", icon: Bot, href: "/automation" },
      { name: "Analytics", icon: BarChart3, href: "/analytics" },
      { name: "Reports", icon: FileBarChart, href: "/reports" },
    ],
  },
  {
    label: "System",
    items: [
      { name: "Assets", icon: Package, href: "/assets" },
      { name: "Integrations", icon: Plug, href: "/integrations" },
      { name: "Administration", icon: Shield, href: "/administration" },
      { name: "Settings", icon: Settings, href: "/settings" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
      w-64 h-screen flex flex-col
      border-r
      bg-white text-gray-800
      dark:bg-[#020817] dark:text-gray-200
      border-gray-200 dark:border-slate-800
      "
    >
      {/* Logo */}

      <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-slate-800">
        {/* <div className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
          D
        </div> */}

        <span className="font-semibold text-lg tracking-wide">
          DGCC
        </span>
      </div>

      {/* Menu */}

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-8">

        {menu.map((section) => (
          <div key={section.label}>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500 mb-3">
              {section.label}
            </p>

            <div className="space-y-1">

              {section.items.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      group flex items-center justify-between
                      px-3 py-2 rounded-md
                      text-sm font-medium
                      transition

                      ${
                        isActive
                          ? "bg-indigo-50 text-indigo-600 dark:bg-slate-800 dark:text-indigo-400"
                          : "hover:bg-gray-100 dark:hover:bg-slate-800"
                      }
                    `}
                  >

                    <div className="flex items-center gap-3">

                      <item.icon
                        size={18}
                        className={`
                          ${
                            isActive
                              ? "text-indigo-500"
                              : "text-gray-500 dark:text-slate-400 group-hover:text-indigo-500"
                          }
                        `}
                      />

                      <span>{item.name}</span>

                    </div>

                    {/* {item.badge && (
                      <span className="text-xs font-semibold bg-indigo-500 text-white px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )} */}

                  </Link>
                );
              })}

            </div>

          </div>
        ))}

      </div>

      {/* User */}

      <div className="p-4 border-t border-gray-200 dark:border-slate-800">

        <div className="flex items-center gap-3">

          <div className="h-9 w-9 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-semibold">
            AK
          </div>

          <div>

            <p className="text-sm font-medium">
              Alex Kumar
            </p>

            <p className="text-xs text-gray-500 dark:text-slate-400">
              Agency Admin
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}