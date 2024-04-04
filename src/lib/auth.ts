import { User } from "@/types";
import cookie from "cookie";
import { cookies } from "next/headers";

type Register = Pick<User, "email" | "name"> & { password: string };
type CreateToken = Pick<Register, "email" | "password">;

export async function getCsrfCookies() {
  const res = await fetch(`${process.env.BACKEND_URL}/sanctum/csrf-cookie`, {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });

  return {
    "XSRF-TOKEN": res.headers
      .getSetCookie()
      .find((item) => item.startsWith("XSRF-TOKEN"))!,
    laravel_session: res.headers
      .getSetCookie()
      .find((item) => item.startsWith("laravel_session"))!,
  };
}

export async function register({ email, name, password }: Register) {
  const csrfCookies = await getCsrfCookies();

  return fetch(`${process.env.BACKEND_URL}/register`, {
    body: JSON.stringify({
      email,
      name,
      password,
      password_confirmation: password,
    }),
    headers: {
      Accept: "application/json",
      Cookie: csrfCookies.laravel_session,
      "Content-Type": "application/json",
      "X-XSRF-TOKEN": cookie.parse(csrfCookies["XSRF-TOKEN"])["XSRF-TOKEN"],
    },
    method: "POST",
  });
}

export function createToken({ email, password }: CreateToken) {
  return fetch(`${process.env.BACKEND_URL}/api/tokens`, {
    body: JSON.stringify({ email, password }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  });
}

export async function getUser(): Promise<User | null> {
  const token = cookies().get("AUTH_TOKEN")?.value;

  const res = await fetch(`${process.env.BACKEND_URL}/api/user`, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  return res.ok ? data : null;
}
