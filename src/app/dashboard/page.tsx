import ScrollToTop from "@/hack/scroll-to-top";
import { Product, SimplePaginate } from "@/types";
import EmblaCarousel from "@/ui/embla-carousel";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

dayjs.extend(relativeTime);

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Dashboard() {
  const url = new URL(`${process.env.BACKEND_URL}/api/me/products`);
  url.searchParams.set("order_by", "created_at");
  url.searchParams.set("sort", "desc");

  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${cookies().get("AUTH_TOKEN")?.value}`,
    },
  });

  const paginatedProducts: SimplePaginate<Product> = await res.json();

  return (
    <>
      <h1 className="sr-only">Dashboard</h1>

      <div className="mx-4 mt-6 flex items-center justify-between">
        <div className="text-xl font-bold leading-none">Offers</div>
        <Link href="/offers" className="flex items-center gap-x-2">
          <div className="leading-none">See all</div>
          <ArrowRightCircleIcon className="h-4 w-4" />
        </Link>
      </div>

      <section>
        <h2 className="mx-4 mt-7 text-xl font-bold leading-none">My Ads</h2>

        {paginatedProducts.data.length > 0 && (
          <ul className="my-4 space-y-2">
            {paginatedProducts.data.map((p) => (
              <li key={p.id}>
                <Link href={`/ads/${p.slug}`}>
                  <ProductCardRev
                    active={p.active}
                    created_at={dayjs(p.created_at).fromNow()}
                    images={p.images}
                    price={`${p.currency} ${p.price.toLocaleString()}`}
                    title={p.name}
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <ScrollToTop />
    </>
  );
}

type ProductCardRevProps = {
  active: Product["active"];
  created_at: Product["created_at"];
  images: Product["images"];
  price: string;
  title: Product["name"];
};

function ProductCardRev(props: ProductCardRevProps) {
  const { active, created_at, images, price, title } = props;

  return (
    <div className="flex flex-col-reverse">
      <dl className="border-b border-stone-200 bg-white px-4">
        <div className="mt-2">
          <dt className="sr-only">Name</dt>
          <dd className="font-semibold text-stone-700">{title}</dd>
        </div>

        <div>
          <dt className="sr-only">Price</dt>
          <dd className="text-sm font-medium text-stone-600">{price}</dd>
        </div>

        <div className="mt-2 flex items-center">
          <dt className="mr-[0.15em] text-xs font-medium leading-none text-stone-500">
            Posted
          </dt>
          <dd className="ml-[0.15em] text-xs font-medium leading-none text-stone-500">
            {created_at}
          </dd>
        </div>

        <div className="mb-2 mt-1">
          <dt className="sr-only">Active</dt>
          <dd
            className={clsx(
              "inline-block rounded-full px-1.5 py-1 text-xs font-bold leading-none",
              active
                ? "border border-green-300 bg-green-100 text-green-900"
                : "border border-red-300 bg-red-100 text-red-900",
            )}
          >
            {active ? "Active" : "Not Active"}
          </dd>
        </div>
      </dl>

      <EmblaCarousel dots={images.length} options={{ loop: true }}>
        <ul className="flex">
          {images.map((img, i) => (
            <li key={i} className="w-full shrink-0">
              <div className="relative block aspect-card">
                <Image
                  src={img.href}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </EmblaCarousel>
    </div>
  );
}
