import EmblaCarousel from "@/ui/embla-carousel";
import Input from "@/ui/input";
import Product from "@/ui/product";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const api = `${process.env.NEXT_PUBLIC_API}/products?category=`;
  const categories = ["Car", "Motorcycle", "Boat", "Airplane"];

  const responses = await Promise.all(
    categories.map((category) => fetch(`${api}${category}`)),
  );

  const data = await Promise.all(responses.map((res) => res.json()));

  return (
    <div className="py-4">
      <h1 className="sr-only">Rides &apos;n&apos; Digits</h1>

      <div className="mx-4">
        <Input
          label="Search"
          name="search"
          placeholder="Search for cars, motorcycles, airplanes, bicycles, boats, etc."
          srLabel
          type="search"
        />
      </div>

      <section>
        <h2 className="sr-only">Categories</h2>

        <ul className="mt-8 grid gap-y-8">
          {categories.map((category, i) => (
            <li key={i}>
              <Category name={category} products={data[i]} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

type Product = {
  id: string;
  name: string;
  price: number;
  img: string;
};

type CategoryProps = {
  name: string;
  products: Product[];
};

function Category({ name, products }: CategoryProps) {
  const currency = "AED";

  return (
    <>
      <div className="px-4 text-xl font-bold leading-none">{name}</div>
      <EmblaCarousel className="mt-4 px-4">
        <ul className="flex gap-x-4">
          {products.map(({ id, name, price, img }) => (
            <li key={id} className="w-3/4 shrink-0">
              <Link href={`/ads/${id}`}>
                <Product name={name} price={`${currency} ${price}`} img={img} />
              </Link>
            </li>
          ))}
        </ul>
      </EmblaCarousel>
    </>
  );
}
