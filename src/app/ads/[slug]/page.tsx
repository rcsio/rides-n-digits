import { getProduct } from "@/functions-server-only";
import ScrollToTop from "@/hack/scroll-to-top";
import { getUser } from "@/lib/auth";
import EmblaCarousel from "@/ui/embla-carousel";
import { noCase } from "change-case";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import title from "title";

export default async function Page({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  if (!product) notFound();

  const user = await getUser();

  return (
    <div className="flex flex-col-reverse">
      <div className="px-4 pb-8">
        <h1 className="mt-6 text-xl font-bold leading-6">{product.name}</h1>
        <p className="mt-4 text-sm">{product.description}</p>

        <dl className="mt-8 space-y-4 text-sm leading-none">
          {Object.keys(product.attributes || {})
            .sort()
            .map((name, i) => (
              <Row
                key={i}
                label={title(noCase(name))}
                value={
                  name.toLowerCase() === "warranty"
                    ? product.attributes[name]
                      ? "Yes"
                      : "No"
                    : product.attributes[name]
                }
              />
            ))}
        </dl>

        <dl className="mt-8">
          <dt className="sr-only">Price</dt>
          <dd className="text-xl font-bold">
            AED {product.price.toLocaleString()}
          </dd>
        </dl>

        <div className="mt-8 grid gap-y-2">
          {product.user_id === user?.id ? (
            <Link
              href={`/ads/${params.slug}/edit`}
              className="button bg-orange-500 text-white"
            >
              Edit
            </Link>
          ) : (
            <>
              <Link
                href="tel:+971501231234"
                className="button bg-orange-500 text-white"
              >
                Call Seller
              </Link>
              <Link
                href="https://wa.me/971501231234?text=I%27m%20interested%20in%20your%20ad"
                className="button border border-blue-500"
              >
                WhatsApp
              </Link>
            </>
          )}
        </div>
      </div>

      <EmblaCarousel dots={product.images.length} options={{ loop: true }}>
        <ul className="flex">
          {product.images.map(({ href }, i) => (
            <li key={i} className="w-full shrink-0">
              <Link href={href} target="_blank">
                <div className="relative block aspect-card">
                  <Image
                    src={href}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </EmblaCarousel>

      <ScrollToTop />
    </div>
  );
}

type RowProps = {
  label: string;
  value: string;
};

function Row({ label, value }: RowProps) {
  return (
    <div className="grid grid-cols-2">
      <dt className="font-bold">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
