import { getProduct } from "@/functions-server-only";
import { notFound, redirect } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  if (!product) notFound();
  redirect(`/ads/${params.slug}/edit/main`);
}
