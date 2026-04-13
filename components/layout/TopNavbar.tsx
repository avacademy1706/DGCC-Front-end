// "use client";

// import { Search, Bell, Sun, Moon, ChevronDown } from "lucide-react";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// export function TopNavbar() {

//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";

//     setTheme(savedTheme);

//     document.documentElement.classList.toggle(
//       "dark",
//       savedTheme === "dark"
//     );
//   }, []);

//   const toggleTheme = () => {

//     const newTheme = theme === "dark" ? "light" : "dark";

//     setTheme(newTheme);

//     localStorage.setItem("theme", newTheme);

//     document.documentElement.classList.toggle(
//       "dark",
//       newTheme === "dark"
//     );
//   };


//   return (
//     <header className="flex items-center justify-between px-6 h-16 border-b border-gray-200 dark:border-[#1e2d45] bg-white dark:bg-[#0d1220]">

//       {/* LEFT TITLE */}

//       <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
//         Digital Growth Command Centre
//       </h1>

//       {/* RIGHT SECTION */}

//       <div className="flex items-center gap-4">

//         {/* SEARCH */}

//         <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 dark:border-[#1e2d45] bg-gray-50 dark:bg-[#111827] w-[260px]">

//           <Search size={16} className="text-gray-400" />

//           <input
//             type="text"
//             placeholder="Search clients, campaigns, leads..."
//             className="bg-transparent outline-none text-sm w-full text-gray-700 dark:text-gray-200 placeholder:text-gray-400"
//           />

//         </div>

//         {/* NOTIFICATION */}

//         <button className="relative w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 dark:border-[#1e2d45] bg-gray-100 dark:bg-[#111827]">

//           <Bell size={16} className="text-yellow-500" />

//           <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>

//         </button>

//         {/* THEME TOGGLE */}

//          <button onClick={toggleTheme}>
//       {theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
//     </button>

//         {/* PROFILE */}

//         <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-300 dark:border-[#1e2d45] bg-gray-100 dark:bg-[#111827] cursor-pointer">

//           <div className="w-7 h-7 flex items-center justify-center rounded-md bg-indigo-500 text-white text-xs font-semibold">
//             AK
//           </div>

//           <span className="text-sm text-gray-800 dark:text-gray-200">
//             Alex Kumar
//           </span>

//           <ChevronDown size={14} className="text-gray-500" />

//         </div>

//       </div>

//     </header>
//   );
// }
"use client";

import { apiClient } from "@/lib/apiClient";
import { Search, Bell, Sun, Moon, ChevronDown, X, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function TopNavbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted]       = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // mobile search toggle
  const [logoutLoading, setLogoutLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // 👉 click outside close
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 👉 logout function
const handleLogout = async () => {
  try {
    setLogoutLoading(true);

    await apiClient.post("/admin-auth/logout");

    localStorage.removeItem("admin_user");

    window.location.href = "/login";
  } catch (err) {
    console.error(err);
  } finally {
    setLogoutLoading(false);
  }
};

  useEffect(() => { setMounted(true); }, []);

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <header className="relative flex items-center justify-between px-4 md:px-6 h-16 border-b border-gray-200 dark:border-[#1e2d45] bg-white dark:bg-[#0d1220]">

      {/* ── Mobile Search Overlay ───────────────────────────────────────────── */}
      {searchOpen && (
        <div className="md:hidden absolute inset-0 z-10 flex items-center gap-3 px-4 bg-white dark:bg-[#0d1220]">
          <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 dark:border-[#1e2d45] bg-gray-50 dark:bg-[#111827] flex-1">
            <Search size={16} className="text-gray-400 shrink-0" />
            <input
              autoFocus
              type="text"
              placeholder="Search clients, campaigns..."
              className="bg-transparent outline-none text-sm w-full text-gray-700 dark:text-gray-200"
            />
          </div>
          <button
            onClick={() => setSearchOpen(false)}
            className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* ── Left: Title ─────────────────────────────────────────────────────── */}
      {/* On mobile, leave space for sidebar burger (left: 4rem) */}
      <h1 className="text-sm md:text-base lg:text-lg font-semibold text-gray-800 dark:text-white truncate pl-10 md:pl-0">
        {/* Short title on small screens */}
        <span className="hidden sm:inline">Digital Growth Command Centre</span>
        
      </h1>

      {/* ── Right: Actions ──────────────────────────────────────────────────── */}
      <div className="flex items-center gap-2 md:gap-3 shrink-0">

        {/* Desktop Search */}
        <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 dark:border-[#1e2d45] bg-gray-50 dark:bg-[#111827] w-[180px] lg:w-[260px]">
          <Search size={16} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full text-gray-700 dark:text-gray-200 placeholder:text-gray-400"
          />
        </div>

        {/* Mobile Search Icon */}
        <button
          onClick={() => setSearchOpen(true)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 dark:border-[#1e2d45] bg-gray-100 dark:bg-[#111827]"
        >
          <Search size={16} className="text-gray-500 dark:text-gray-400" />
        </button>

        {/* Notification */}
        {/* <button className="relative w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 dark:border-[#1e2d45] bg-gray-100 dark:bg-[#111827]">
          <Bell size={16} className="text-yellow-500" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button> */}

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 dark:border-[#1e2d45] bg-gray-100 dark:bg-[#111827]"
        >
          {mounted && (
            resolvedTheme === "dark"
              ? <Sun size={16} className="text-yellow-400" />
              : <Moon size={16} className="text-gray-500" />
          )}
        </button>

        {/* Profile — icon only on mobile, full on md+ */}
        <div className="relative" ref={dropdownRef}>
      
      {/* Profile Button */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-2 md:px-3 py-1.5 rounded-md border border-gray-300 dark:border-[#1e2d45] bg-gray-100 dark:bg-[#111827] cursor-pointer hover:bg-gray-200 dark:hover:bg-[#1f2937] transition"
      >
        <div className="w-7 h-7 flex items-center justify-center rounded-md bg-indigo-500 text-white text-xs font-semibold shrink-0">
          PD
        </div>

        <span className="hidden md:inline text-sm text-gray-800 dark:text-gray-200 whitespace-nowrap">
          Plexus Digitals
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg overflow-hidden z-50 animate-in fade-in zoom-in-95">
          
          <button
  onClick={handleLogout}
  disabled={logoutLoading}
  className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 transition disabled:opacity-60"
>
  {logoutLoading ? (
    <>
      {/* Spinner */}
      <div className="w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
      Logging out...
    </>
  ) : (
    <>
      <LogOut className="w-4 h-4" />
      Logout
    </>
  )}
</button>

        </div>
      )}
    </div>

      </div>
    </header>
  );
}