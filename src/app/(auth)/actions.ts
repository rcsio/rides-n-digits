"use server";

import { createToken, register } from "@/lib/auth";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signup(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const name = formData.get("email") as string;
  const password = formData.get("password") as string;

  const res = await register({ email, name, password });

  if (res.ok) {
    const res = await createToken({ email, password });

    if (res.ok) {
      const data = await res.json();
      setAuthCookie(data.AUTH_TOKEN.split("|")[1]);
      redirect("/");
    }
  }

  return await res.json();
}

export async function login(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const res = await createToken({ email, password });
  const data = await res.json();

  if (res.ok) {
    setAuthCookie(data.AUTH_TOKEN.split("|")[1]);

    const referer = headers().get("referer");
    if (!referer) redirect("/");

    const url = new URL(referer);

    const next = url.searchParams.get("next");
    if (!next) redirect(referer);

    url.searchParams.delete("next");

    redirect(next);
  }

  return data;
}

function setAuthCookie(value: string) {
  cookies().set({
    httpOnly: true,
    name: "AUTH_TOKEN",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    value,
  });
}
