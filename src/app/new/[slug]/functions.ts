import { Category } from "@/types";
import "server-only";

export async function getCategory(slug: string): Promise<Category | null> {
  const url = `${process.env.BACKEND_URL}/api/categories/${slug}`;
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (res.ok) return await res.json();
  if (res.status === 404) return null;
  throw res;
}
