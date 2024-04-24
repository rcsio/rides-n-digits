"use server";

import { getUser } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const user = await getUser();
  if (!user) redirect("/login");

  const res = await fetch(`${process.env.BACKEND_URL}/api/products`, {
    body: JSON.stringify({
      category_id: formData.get("category_id"),
      description: formData.get("description"),
      name: formData.get("name"),
      price: formData.get("price"),
      open_to_offers: !!formData.get("open_to_offers"),
    }),
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${cookies().get("AUTH_TOKEN")?.value}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (res.ok) redirect("/dashboard");
}
