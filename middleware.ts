// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public routes
  const publicRoutes = ["/login"];

  // Static files / next internals / api ko skip karo
  const isStaticFile =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.match(/\.(.*)$/);

  if (isStaticFile) {
    return NextResponse.next();
  }

  const isPublicRoute = publicRoutes.includes(pathname);

  // Cookie name wahi rakho jo backend set kar raha hai
  const accessToken = request.cookies.get("access_token")?.value;

  // 1. Agar login nahi hai aur private route hit kiya
//   if (!accessToken && !isPublicRoute) {
//     const loginUrl = new URL("/login", request.url);
//     return NextResponse.redirect(loginUrl);
//   }

  // 2. Agar login hai aur user /login par ja raha hai
  if (accessToken && isPublicRoute) {
    const dashboardUrl = new URL("/", request.url); // ya "/dashboard"
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};