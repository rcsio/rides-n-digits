"use server";

import { getUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function updateProduct(slug: string, formData: FormData) {
  const user = await getUser();
  if (!user) redirect("/login");

  const entries = Object.fromEntries(formData);

  for (const key in entries) {
    if (key.startsWith("$ACTION")) delete entries[key];
  }

  const { active } = entries;
  delete entries.active;

  const res = await fetch(`${process.env.BACKEND_URL}/api/products/${slug}`, {
    body: JSON.stringify({ active: !!active, attributes: entries }),
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${cookies().get("AUTH_TOKEN")?.value}`,
      "Content-Type": "application/json",
    },
    method: "PATCH",
  });

  if (res.ok) {
    revalidatePath("/dashboard");
    redirect("/dashboard");
  }
}
