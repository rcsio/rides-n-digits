import ScrollToTop from "@/hack/scroll-to-top";
import { Product, SimplePaginate } from "@/types";
import ProductUI from "@/ui/product";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Dashboard() {
  const url = `${process.env.BACKEND_URL}/api/products`;
  const res = await fetch(url, { headers: { Accept: "application/json" } });

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
            {paginatedProducts.data.map((product) => (
              <li key={product.id}>
                <Link href={`/ads/${product.slug}/edit`}>
                  <ProductUI data={product} />
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
