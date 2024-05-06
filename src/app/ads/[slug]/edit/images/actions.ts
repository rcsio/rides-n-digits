"use server";

import { getUser } from "@/lib/auth";
import { Image } from "@/types";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createImage(formData: FormData) {
  const user = await getUser();
  if (!user) redirect("/login");

  const url = `${process.env.BACKEND_URL}/api/images`;
  const { data } = await axios.post(url, formData, {
    headers: { Authorization: `Bearer ${cookies().get("AUTH_TOKEN")?.value}` },
  });

  return data as Image;
}

export async function deleteImage(filename: string) {
  const user = await getUser();
  if (!user) redirect("/login");

  const res = await fetch(`${process.env.BACKEND_URL}/api/images/${filename}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${cookies().get("AUTH_TOKEN")?.value}`,
    },
    method: "DELETE",
  });

  if (!res.ok) throw res;
}
