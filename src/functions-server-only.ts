import { Product } from "@/types";
import { cookies } from "next/headers";
import "server-only";

export async function getProducts() {
  const url = `${process.env.BACKEND_URL}/api/products`;

  const res = await fetch(url, {
    headers: { Accept: "application/json" },
    next: { tags: ["products"] },
  });

  if (res.ok) return (await res.json()) as Product[];
  throw res;
}

export async function getProduct(slug: string): Promise<Product | null> {
  const res = await fetch(`${process.env.BACKEND_URL}/api/products/${slug}`, {
    headers: { Accept: "application/json" },
    next: { tags: [slug] },
  });

  if (res.ok) return await res.json();
  if (res.status === 404) return null;
  throw res;
}

export async function updateProduct(slug: string, data: any) {
  return await fetch(`${process.env.BACKEND_URL}/api/products/${slug}`, {
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${cookies().get("AUTH_TOKEN")?.value}`,
      "Content-Type": "application/json",
    },
    method: "PATCH",
  });
}
