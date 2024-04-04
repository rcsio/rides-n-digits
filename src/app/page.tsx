import Product from "@/app/ui/product";
import { Product as ProductType } from "@/types";
import EmblaCarousel from "@/ui/embla-carousel";
import Input from "@/ui/input";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import pluralize from "pluralize";
import title from "title";

export const dynamic = "force-dynamic";

export default async function Home() {
  const api = `${process.env.NEXT_PUBLIC_API}`;

  const categoriesRes = await fetch(`${api}/categories`);
  const categories: string[] = await categoriesRes.json();

  const productsRes = await Promise.all(
    categories.map((c) => fetch(`${api}/products?category=${c}`)),
  );

  const products: ProductType[][] = await Promise.all(
    productsRes.map((res) => res.json()),
  );

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
          {categories.map((category, i) => (
            <li key={i}>
              <Category name={category} products={products[i]} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

type CategoryProps = {
  name: string;
  products: ProductType[];
};

function Category({ name, products }: CategoryProps) {
  const currency = "AED";

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
          {products.map(({ id, name, price, images }) => (
            <li key={id} className="shrink-0 basis-11/12">
              <Link href={`/ads/${id}`}>
                <Product
                  name={name}
                  price={`${currency} ${price}`}
                  img={images[0]}
                />
              </Link>
            </li>
          ))}
        </ul>
      </EmblaCarousel>
    </>
  );
}
