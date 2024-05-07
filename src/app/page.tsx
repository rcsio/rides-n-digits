import { getCategories } from "@/functions-server-only";
import { Category, Image, Product, SimplePaginate } from "@/types";
import EmblaCarousel from "@/ui/embla-carousel";
import Input from "@/ui/input";
import { ArrowRightCircleIcon, MapPinIcon } from "@heroicons/react/16/solid";
import NextImage from "next/image";
import Link from "next/link";
import pluralize from "pluralize";
import title from "title";

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
          {products.data.map(
            ({ city, country, currency, id, images, name, price, slug }) => (
              <li key={id} className="shrink-0 basis-11/12">
                <Link href={`/ads/${slug}`}>
                  <ProductCard
                    image={images[0].href}
                    imageAlt={name}
                    location={`${city}, ${country}`}
                    price={`${currency} ${price.toLocaleString()}`}
                    title={name}
                  />
                </Link>
              </li>
            ),
          )}
        </ul>
      </EmblaCarousel>
    </>
  );
}

type ProductCardProps = {
  image: Image["href"];
  imageAlt: Product["name"];
  location: string;
  title: Product["name"];
  price: string;
};

function ProductCard(props: ProductCardProps) {
  const { image, imageAlt, location, title, price } = props;

  return (
    <div className="grid">
      <div className="relative block aspect-video">
        <NextImage
          src={image}
          alt={imageAlt}
          className="rounded-lg object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          fill
        />
      </div>

      <dl>
        <div>
          <dt className="sr-only">Name</dt>
          <dd className="mt-2 line-clamp-1 font-bold">{title}</dd>
        </div>

        <div>
          <dt className="sr-only">Price</dt>
          <dd className="line-clamp-1">{price}</dd>
        </div>

        <div className="mt-1">
          <dt className="sr-only">Location</dt>
          <dd className="flex items-center gap-x-0.5 text-sm">
            <MapPinIcon className="h-4 w-4 shrink-0 text-stone-700" />
            <span className="line-clamp-1">{location}</span>
          </dd>
        </div>
      </dl>
    </div>
  );
}
