"use server";

import { cleanEntries, updateProduct } from "@/functions-server-only";
import { revalidateTag } from "next/cache";

export async function update(slug: string, prevState: any, formData: FormData) {
  const entries = cleanEntries(Object.fromEntries(formData));

  const res = await updateProduct(slug, {
    ...entries,
    open_to_offers: !!entries.open_to_offers,
  });

  if (res.ok) {
    revalidateTag(slug);
    revalidateTag("products");
    return { status: "success" };
  }

  return await res.json();
}
