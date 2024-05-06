import Button from "@/app/ads/[slug]/edit/images/button";
import ImageUploaderWithPreview from "@/app/ads/[slug]/edit/images/uploader";
import { getProduct } from "@/functions-server-only";
import ScrollToTop from "@/hack/scroll-to-top";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function Page({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) notFound();

  return (
    <div className="mt-6 space-y-6">
      {product.images.map((image, i) => (
        <ImageUploaderWithPreview
          key={i}
          defaultImage={image}
          productId={product.id}
        />
      ))}

      {[...Array(4 - product.images.length)].map((_, i) => (
        <ImageUploaderWithPreview key={i} productId={product.id} />
      ))}

      <Button />

      <ScrollToTop />
    </div>
  );
}
