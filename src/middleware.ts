import { getUser } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard", "/new"];

const guestOnlyRoutes = ["/forgot-password", "/login", "/signup"];

export async function middleware(request: NextRequest) {
  const user = await getUser();

  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    if (!user) {
      const url = new URL("/login", request.url);
      url.searchParams.set("next", request.url);
      return NextResponse.redirect(url);
    }
  }

  if (guestOnlyRoutes.includes(request.nextUrl.pathname)) {
    if (user) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
