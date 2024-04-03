"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(prevState: any, formData: FormData) {
  const res = await fetch(`${process.env.BACKEND_URL}/api/tokens/create`, {
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const data = await res.json();

  if (res.ok) {
    cookies().set({
      httpOnly: true,
      name: "AUTH_TOKEN",
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      value: data.token.split("|")[1],
    });

    redirect("/");
  }

  return data;
}
