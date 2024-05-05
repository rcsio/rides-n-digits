import { getCategory } from "@/app/new/[slug]/functions";
import { notFound, redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function Page({ params: { slug } }: Props) {
  const category = await getCategory(slug);
  if (!category) notFound();
  redirect(`/new/${slug}/details`);
}
