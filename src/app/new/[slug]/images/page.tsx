import { getCategory } from "@/app/new/[slug]/functions";
import Uploader from "@/app/new/[slug]/images/uploader";
import ScrollToTop from "@/hack/scroll-to-top";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function Page({ params: { slug } }: Props) {
  const category = await getCategory(slug);
  if (!category) notFound();

  return (
    <div className="space-y-6 px-4 py-6">
      <h1 className="text-xl font-bold">Attach Photos</h1>

      <Uploader />
      <Uploader />
      <Uploader />
      <Uploader />

      <Link
        href={`/new/${slug}/main`}
        className="button w-full bg-orange-500 text-white disabled:animate-pulse"
      >
        Next
      </Link>

      <ScrollToTop />
    </div>
  );
}
