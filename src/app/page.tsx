import { getCategories } from "@/functions-server-only";
import { Category, Product, SimplePaginate } from "@/types";
import EmblaCarousel from "@/ui/embla-carousel";
import Input from "@/ui/input";
import ProductCard from "@/ui/product-card";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import pluralize from "pluralize";
import title from "title";

dayjs.extend(relativeTime);

export default async function Home() {
  const categories = await getCategories();

  return (
    <>
      <h1 className="sr-only">Trending</h1>

      <form action="/search" className="mx-4 mt-4">
        <Input
          label="Search"
          name="q"
          placeholder="Search for cars, motorcycles, airplanes, bicycles, boats, etc."
          srLabel
          type="search"
        />
      </form>

      <section className="my-7">
        <h2 className="sr-only">Categories</h2>

        <ul className="space-y-6">
          {categories.map(({ id, name, products_count, slug }) => (
            <>
              {products_count > 0 && (
                <li key={id}>
                  <CategoryGroup name={name} slug={slug} />
                </li>
              )}
            </>
          ))}
        </ul>
      </section>
    </>
  );
}

type CategoryGroupProps = {
  name: Category["name"];
  slug: Category["slug"];
};

async function CategoryGroup({ name, slug }: CategoryGroupProps) {
  const url = new URL(`${process.env.BACKEND_URL}/api/products`);
  url.searchParams.set("category", slug);
  url.searchParams.set("order_by", "created_at");
  url.searchParams.set("sort", "desc");

  const res = await fetch(url);
  if (!res.ok) throw res;

  const products: SimplePaginate<Product> = await res.json();

  return (
    <>
      <div className="mx-4 flex items-center justify-between">
        <div className="text-xl font-bold leading-none">
          {title(pluralize(name))}
        </div>
        <Link
          href={`/categories/${name}`}
          className="flex items-center gap-x-2"
        >
          <div className="leading-none">See all</div>
          <ArrowRightCircleIcon className="h-4 w-4" />
        </Link>
      </div>
      <EmblaCarousel className="mt-4 px-4">
        <ul className="flex gap-x-4">
          {products.data.map((p) => (
            <li key={p.id} className="shrink-0 basis-11/12">
              <Link href={`/ads/${slug}`}>
                <ProductCard
                  created_at={dayjs(p.created_at).fromNow()}
                  image={p.images[0].href}
                  imageAlt={p.name}
                  location={`${p.city}, ${p.country}`}
                  price={`${p.currency} ${p.price.toLocaleString()}`}
                  title={p.name}
                />
              </Link>
            </li>
          ))}
        </ul>
      </EmblaCarousel>
    </>
  );
}
