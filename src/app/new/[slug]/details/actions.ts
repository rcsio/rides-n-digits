"use server";

import { getUser } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function tempSaveAttribs(slug: string, formData: FormData) {
  const user = await getUser();
  if (!user) redirect("/login");

  const entries = Object.fromEntries(formData) as {
    [key: string]: string | boolean;
  };

  for (const key in entries) {
    if (key.startsWith("$ACTION")) delete entries[key];

    if (key.toLowerCase() === "warranty") {
      entries[key] = !!entries[key];
    }
  }

  cookies().set({
    name: "attributes",
    value: JSON.stringify(entries),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  redirect(`/new/${slug}/images`);
}
