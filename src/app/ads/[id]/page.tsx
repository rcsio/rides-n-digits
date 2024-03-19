import ScrollToTop from "@/hack/scroll-to-top";
import EmblaCarousel from "@/ui/embla-carousel";
import Image from "next/image";
import Link from "next/link";
import title from "title";

type Product = {
  attributes: { [key: string]: string };
  description: string;
  images: string[];
  name: string;
  price: number;
  user: string;
};

export default async function Ad({ params }: { params: { id: string } }) {
  const url = `${process.env.NEXT_PUBLIC_API}/products/${params.id}`;
  const res = await fetch(url);
  const data: Product = await res.json();

  return (
    <div className="flex flex-col-reverse">
      <div className="px-4 pb-8">
        <h1 className="mt-6 text-xl font-bold leading-none">{data.name}</h1>
        <p className="mt-3 text-sm">{data.description}</p>

        <dl className="mt-8 space-y-4 text-sm leading-none">
          {Object.keys(data.attributes)
            .sort()
            .map((name, i) => (
              <Row key={i} label={title(name)} value={data.attributes[name]} />
            ))}
        </dl>

        <dl className="mt-8">
          <dt className="sr-only">Price</dt>
          <dd className="text-xl font-bold">AED {data.price}</dd>
        </dl>

        <div className="mt-8 grid gap-y-2">
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
        </div>
      </div>

      <EmblaCarousel dots={data.images.length}>
        <ul className="flex gap-x-2">
          {data.images.map((img: string, i: number) => (
            <li key={i} className="w-full shrink-0">
              <Link href={`/images/${img}`}>
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
