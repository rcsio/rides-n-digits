"use server";

import { getUser } from "@/lib/auth";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function addImage(formData: FormData) {
  const user = await getUser();
  if (!user) redirect("/login");

  const url = `${process.env.BACKEND_URL}/api/tmp`;
  const { data } = await axios.post(url, formData, {
    headers: { Authorization: `Bearer ${cookies().get("AUTH_TOKEN")?.value}` },
  });

  const images = JSON.parse(cookies().get("images")?.value || "[]");
  if (images.push(data) > 4) throw new Error("Images max length reached.");

  cookies().set({
    name: "images",
    value: JSON.stringify(images),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  return data;
}

export async function deleteImage(filename: string) {
  const user = await getUser();
  if (!user) redirect("/login");

  const images: string[] = JSON.parse(cookies().get("images")?.value || "[]");
  const filtered = images.filter((img) => img !== filename);

  if (filtered.length === 0) {
    cookies().delete("images");
    return;
  }

  cookies().set({
    name: "images",
    value: JSON.stringify(filtered),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
}
