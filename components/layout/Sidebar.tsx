// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import {
//   LayoutDashboard,
//   Users,
//   Target,
//   Megaphone,
//   FileText,
//   Mail,
//   Bot,
//   BarChart3,
//   FileBarChart,
//   Package,
//   Plug,
//   Settings,
//   Shield,
// } from "lucide-react";

// const menu = [
//   {
//     label: "Overview",
//     items: [
//       { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
//       { name: "Clients", icon: Users, href: "/clients", badge: "8" },
//     ],
//   },
//   {
//     label: "Growth",
//     items: [
//       { name: "Strategy", icon: Target, href: "/strategy" },
//       { name: "Campaigns", icon: Megaphone, href: "/campaigns", badge: "12" },
//       { name: "Content", icon: FileText, href: "/content" },
//       { name: "Leads", icon: Mail, href: "/leads", badge: "24" },
//     ],
//   },
//   {
//     label: "Automation",
//     items: [
//       { name: "Automation", icon: Bot, href: "/automation" },
//       { name: "Analytics", icon: BarChart3, href: "/analytics" },
//       { name: "Reports", icon: FileBarChart, href: "/reports" },
//     ],
//   },
//   {
//     label: "System",
//     items: [
//       { name: "Assets", icon: Package, href: "/assets" },
//       { name: "Integrations", icon: Plug, href: "/integrations" },
//       { name: "Administration", icon: Shield, href: "/administration" },
//       { name: "Settings", icon: Settings, href: "/settings" },
//     ],
//   },
// ];

// export default function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <aside
//       className="
//       w-64 h-screen flex flex-col
//       border-r
//       bg-white text-gray-800
//       dark:bg-[#020817] dark:text-gray-200
//       border-gray-200 dark:border-slate-800
//       "
//     >
//       {/* Logo */}

//       <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-slate-800">
//         {/* <div className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
//           D
//         </div> */}

//         <span className="font-semibold text-lg tracking-wide">
//           DGCC
//         </span>
//       </div>

//       {/* Menu */}

//       <div className="flex-1 overflow-y-auto px-4 py-6 space-y-8">

//         {menu.map((section) => (
//           <div key={section.label}>

//             <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500 mb-3">
//               {section.label}
//             </p>

//             <div className="space-y-1">

//               {section.items.map((item) => {
//                 const isActive = pathname === item.href;

//                 return (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className={`
//                       group flex items-center justify-between
//                       px-3 py-2 rounded-md
//                       text-sm font-medium
//                       transition

//                       ${
//                         isActive
//                           ? "bg-indigo-50 text-indigo-600 dark:bg-slate-800 dark:text-indigo-400"
//                           : "hover:bg-gray-100 dark:hover:bg-slate-800"
//                       }
//                     `}
//                   >

//                     <div className="flex items-center gap-3">

//                       <item.icon
//                         size={18}
//                         className={`
//                           ${
//                             isActive
//                               ? "text-indigo-500"
//                               : "text-gray-500 dark:text-slate-400 group-hover:text-indigo-500"
//                           }
//                         `}
//                       />

//                       <span>{item.name}</span>

//                     </div>

//                     {/* {item.badge && (
//                       <span className="text-xs font-semibold bg-indigo-500 text-white px-2 py-0.5 rounded-full">
//                         {item.badge}
//                       </span>
//                     )} */}

//                   </Link>
//                 );
//               })}

//             </div>

//           </div>
//         ))}

//       </div>

//       {/* User */}

//       <div className="p-4 border-t border-gray-200 dark:border-slate-800">

//         <div className="flex items-center gap-3">

//           <div className="h-9 w-9 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-semibold">
//             AK
//           </div>

//           <div>

//             <p className="text-sm font-medium">
//               Alex Kumar
//             </p>

//             <p className="text-xs text-gray-500 dark:text-slate-400">
//               Agency Admin
//             </p>

//           </div>

//         </div>

//       </div>

//     </aside>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  ChartNoAxesCombined,
} from "lucide-react";
import Image from "next/image";

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
      { name : "Google Analytics" , href: "/google-analytics" , icon : ChartNoAxesCombined},

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
      { name: "Privacy Policy", icon: ShieldCheck, href: "/privacy-policy" },
    ],
  },
];

// ─── Nav Item ─────────────────────────────────────────────────────────────────
function NavItem({
  item,
  isActive,
  collapsed,
  onClick,
}: {
  item: (typeof menu)[0]["items"][0];
  isActive: boolean;
  collapsed: boolean;
  onClick?: () => void;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      title={collapsed ? item.name : undefined}
      className={`
        group relative flex items-center gap-3
        px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150
        ${collapsed ? "justify-center px-2" : "justify-between"}
        ${
          isActive
            ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
            : "text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white"
        }
      `}
    >
      <div className="flex items-center gap-3 min-w-0">
        <Icon
          size={18}
          className={`shrink-0 transition-colors ${
            isActive
              ? "text-indigo-500"
              : "text-gray-400 dark:text-slate-500 group-hover:text-indigo-500"
          }`}
        />
        {!collapsed && <span className="truncate">{item.name}</span>}
      </div>

      {/* Tooltip on collapsed */}
      {collapsed && (
        <div
          className="absolute left-full ml-3 z-50 hidden group-hover:flex items-center gap-2
          bg-gray-900 dark:bg-slate-700 text-white text-xs px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-lg pointer-events-none"
        >
          {item.name}
          {item.badge && (
            <span className="bg-indigo-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              {item.badge}
            </span>
          )}
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900 dark:border-r-slate-700" />
        </div>
      )}
    </Link>
  );
}

// ─── Sidebar Content ──────────────────────────────────────────────────────────
function SidebarContent({
  collapsed,
  onClose,
}: {
  collapsed: boolean;
  onClose?: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div
        className={`flex items-center border-b border-gray-200 dark:border-slate-800
        ${collapsed ? "justify-center p-4 h-16" : "gap-3 px-4 h-16"}`}
      >
        <div
          className={`flex items-center border-b border-gray-200 dark:border-slate-800
    ${collapsed ? "justify-center p-4 h-16" : "gap-3 px-4 h-16"}`}
        >
          <div
            className={`relative shrink-0 ${collapsed ? "w-10 h-10" : "w-36 h-12"}`}
          >
            <Image
              src="/logo.jpeg"
              alt="DGCC Logo"
              width={100}
              height={60}
              className="object-contain"
            />
          </div>
        </div>

        {/* Mobile close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="ml-auto p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto py-4 px-2 space-y-6">
        {menu.map((section) => (
          <div key={section.label}>
            {!collapsed && (
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-slate-600 mb-2 px-3">
                {section.label}
              </p>
            )}
            {collapsed && (
              <div className="h-px bg-gray-100 dark:bg-slate-800 mx-2 mb-2" />
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => (
                <NavItem
                  key={item.name}
                  item={item}
                  isActive={pathname === item.href}
                  collapsed={collapsed}
                  onClick={onClose}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* User */}
      <div
        className={`border-t border-gray-200 dark:border-slate-800 p-3
        ${collapsed ? "flex justify-center" : ""}`}
      >
        {collapsed ? (
          <div
            className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-bold shrink-0 cursor-pointer"
            title="Alex Kumar — Agency Admin"
          >
            AK
          </div>
        ) : (
          <div className="flex items-center gap-3 px-1">
            <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
              AK
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                Alex Kumar
              </p>
              <p className="text-xs text-gray-500 dark:text-slate-500 truncate">
                Agency Admin
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN SIDEBAR — 3 modes:
//  mobile  (< md):   hidden, burger button + full drawer overlay
//  tablet  (md–lg):  icon-only collapsed sidebar (w-16)
//  desktop (≥ lg):   full sidebar (w-64)
// ═══════════════════════════════════════════════════════════════════════════════
export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close drawer on route change
  const pathname = usePathname();
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* ── MOBILE: Burger Button ─────────────────────────────────────────── */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-3 left-1 z-40 p-2 rounded-lg bg-white dark:bg-slate-900    text-gray-600 dark:text-slate-300"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* ── MOBILE: Backdrop ──────────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── MOBILE: Full Drawer ───────────────────────────────────────────── */}
      <aside
        className={`
          md:hidden fixed top-0 left-0 z-50 h-full w-72
          bg-white dark:bg-[#020817]
          border-r border-gray-200 dark:border-slate-800
          shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <SidebarContent
          collapsed={false}
          onClose={() => setMobileOpen(false)}
        />
      </aside>

      {/* ── TABLET: Icon-only Sidebar (md → lg) ──────────────────────────── */}
      <aside className="hidden md:flex lg:hidden flex-col w-16 h-screen shrink-0 border-r border-gray-200 dark:border-slate-800 bg-white dark:bg-[#020817]">
        <SidebarContent collapsed={true} />
      </aside>

      {/* ── DESKTOP: Full Sidebar (lg+) ───────────────────────────────────── */}
      <aside className="hidden lg:flex flex-col w-64 h-screen shrink-0 border-r border-gray-200 dark:border-slate-800 bg-white dark:bg-[#020817]">
        <SidebarContent collapsed={false} />
      </aside>
    </>
  );
}
