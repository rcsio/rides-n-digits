"use server";

import { getUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createProduct(categorySlug: string, formData: FormData) {
  const user = await getUser();
  if (!user) redirect("/login");

  const entries = Object.fromEntries(formData);

  entries.category_slug = categorySlug;
  entries.images = JSON.parse(cookies().get("images")?.value || "[]");

  const res = await fetch(`${process.env.BACKEND_URL}/api/products`, {
    body: JSON.stringify(entries),
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${cookies().get("AUTH_TOKEN")?.value}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (res.ok) {
    cookies().delete("images");
    cookies().delete("attributes");
    revalidatePath("/dashboard");
    redirect("/dashboard");
  }
}
