import Form from "@/app/ads/[slug]/edit/details/form";
import { getProduct } from "@/functions-server-only";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  if (!product) notFound();
  return <Form product={product} />;
}
