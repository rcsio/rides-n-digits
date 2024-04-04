import { getUser } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard", "/new"];

const guestOnlyRoutes = ["/forgot-password", "/login", "/signup"];

export async function middleware(request: NextRequest) {
  const user = await getUser();

  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (guestOnlyRoutes.includes(request.nextUrl.pathname)) {
    if (user) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}
