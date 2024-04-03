import { User } from "@/types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/new"];

const guestOnlyRoutes = ["/login", "/forgot-password", "/signup"];

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

async function getUser(): Promise<User | null> {
  const token = cookies().get("AUTH_TOKEN")?.value;

  const res = await fetch(`${process.env.BACKEND_URL}/api/user`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return res.ok ? data : null;
}
