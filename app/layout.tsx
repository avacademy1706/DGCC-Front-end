"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Sidebar from "@/components/layout/Sidebar";
import { TopNavbar } from "@/components/layout/TopNavbar";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 👉 yaha decide karo kaunse routes pe layout hide karna hai
  const hideLayout = pathname === "/login";

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ReactQueryProvider>
            {hideLayout ? (
              // ✅ Login page → no sidebar, no navbar
              <>{children}</>
            ) : (
              // ✅ Baaki sab pages → full layout
              <div className="flex h-screen">
                <Sidebar />

                <div className="flex flex-col flex-1">
                  <TopNavbar />

                  <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-[#020817]">
                    {children}
                  </main>
                </div>
              </div>
            )}
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}