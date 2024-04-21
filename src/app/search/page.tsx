import { Product as ProductType } from "@/types";
import Input from "@/ui/input";
import Product from "@/ui/product";
import Link from "next/link";

type Props = {
  searchParams: { [key: string]: string | undefined };
};

export default async function Search({ searchParams }: Props) {
  const url = `${process.env.NEXT_PUBLIC_API}/search?q=${searchParams.q}`;
  const res = await fetch(url);
  const products: ProductType[] = await res.json();

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
              <Link href={`/ads/${product.id}`}>
                <Product data={product} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
