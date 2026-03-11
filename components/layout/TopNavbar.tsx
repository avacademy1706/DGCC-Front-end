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

import { Search, Bell, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function TopNavbar() {

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="flex items-center justify-between px-6 h-16 border-b border-gray-200 dark:border-[#1e2d45] bg-white dark:bg-[#0d1220]">

      <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
        Digital Growth Command Centre
      </h1>

      <div className="flex items-center gap-4">

        {/* SEARCH */}

        <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 dark:border-[#1e2d45] bg-gray-50 dark:bg-[#111827] w-[260px]">

          <Search size={16} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search clients, campaigns, leads..."
            className="bg-transparent outline-none text-sm w-full text-gray-700 dark:text-gray-200"
          />

        </div>

        {/* NOTIFICATION */}

        <button className="relative w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 dark:border-[#1e2d45] bg-gray-100 dark:bg-[#111827]">

          <Bell size={16} className="text-yellow-500" />

          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>

        </button>

        {/* THEME TOGGLE */}

        <button
          onClick={toggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 dark:border-[#1e2d45] bg-gray-100 dark:bg-[#111827]"
        >

          {mounted && (
            resolvedTheme === "dark"
              ? <Sun size={16} className="text-yellow-400" />
              : <Moon size={16} />
          )}

        </button>

        {/* PROFILE */}

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-300 dark:border-[#1e2d45] bg-gray-100 dark:bg-[#111827] cursor-pointer">

          <div className="w-7 h-7 flex items-center justify-center rounded-md bg-indigo-500 text-white text-xs font-semibold">
            AK
          </div>

          <span className="text-sm text-gray-800 dark:text-gray-200">
            Alex Kumar
          </span>

          <ChevronDown size={14} className="text-gray-500" />

        </div>

      </div>

    </header>
  );
}