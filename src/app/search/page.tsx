import { type Product } from "@/types";
import EmblaCarousel from "@/ui/embla-carousel";
import Input from "@/ui/input";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import Link from "next/link";

dayjs.extend(relativeTime);

type Props = {
  searchParams: { [key: string]: string | undefined };
};

export default async function Search({ searchParams }: Props) {
  const url = `${process.env.NEXT_PUBLIC_API}/search?q=${searchParams.q}`;
  const res = await fetch(url);
  const products: Product[] = await res.json();

  return (
    <div>
      <form action="/search" className="mx-4 mt-4">
        <Input
          label="Search"
          type="search"
          name="q"
          defaultValue={searchParams.q}
          placeholder="Search for cars, motorcycles, airplanes, bicycles, boats, etc."
          spellCheck
          required
          srLabel
        />
      </form>

      <h1 className="mx-4 mt-7 text-xl font-bold leading-none">
        Search Result
      </h1>

      {products.length > 0 && (
        <ul className="my-4 space-y-2">
          {products.map((product) => (
            <li key={product.id}>
              <Product data={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Product({ data }: { data: Product }) {
  return (
    <div className="flex flex-col-reverse">
      <dl className="border-b border-b-stone-200 bg-white px-4">
        <dt className="sr-only">Name</dt>
        <dd className="mt-3 font-bold leading-6">{data.name}</dd>

        <dt className="sr-only">Price</dt>
        <dd className="mt-3 text-sm font-semibold leading-none">
          AED {data.price}
        </dd>

        <dt className="sr-only">Posted</dt>
        <dd className="mb-3.5 mt-1.5 text-sm leading-none">
          Posted {dayjs(data.created_at).fromNow()}
        </dd>
      </dl>

      <EmblaCarousel dots={data.images.length} options={{ loop: true }}>
        <ul className="flex">
          {data.images.map((img: string, i: number) => (
            <li key={i} className="w-full shrink-0">
              <Link href={`/ads/${data.id}`}>
                <div className="relative block aspect-card">
                  <Image
                    src={img}
                    alt={data.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </EmblaCarousel>
    </div>
  );
}
