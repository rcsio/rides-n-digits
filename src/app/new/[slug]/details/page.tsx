import Form from "@/app/new/[slug]/details/form";
import { getCategory } from "@/app/new/[slug]/functions";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function Page({ params: { slug } }: Props) {
  const category = await getCategory(slug);
  if (!category) notFound();
  return <Form category={category} />;
}
