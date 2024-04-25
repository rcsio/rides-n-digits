"use server";

import { getUser } from "@/lib/auth";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const user = await getUser();
  if (!user) redirect("/login");

  const images = JSON.parse(cookies().get("images")?.value || "[]");

  const res = await fetch(`${process.env.BACKEND_URL}/api/products`, {
    body: JSON.stringify({
      category_id: formData.get("category_id"),
      description: formData.get("description"),
      name: formData.get("name"),
      price: formData.get("price"),
      open_to_offers: !!formData.get("open_to_offers"),
      images,
    }),
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${cookies().get("AUTH_TOKEN")?.value}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (res.ok) {
    cookies().delete("images");
    redirect("/dashboard");
  }
}

export async function uploadImage(formData: FormData) {
  const user = await getUser();
  if (!user) redirect("/login");

  const url = `${process.env.BACKEND_URL}/api/tmp`;
  const { data } = await axios.post(url, formData, {
    headers: { Authorization: `Bearer ${cookies().get("AUTH_TOKEN")?.value}` },
  });

  // const images = JSON.parse(cookies().get('images')?.value || '[]')
  const images = [data];

  cookies().set({
    name: "images",
    value: JSON.stringify(images),
    secure: process.env.NODE_ENV === "production",
  });
}
