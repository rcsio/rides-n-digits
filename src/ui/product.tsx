import { type Product } from "@/types";
import EmblaCarousel from "@/ui/embla-carousel";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

dayjs.extend(relativeTime);

export default function Product({ data }: { data: Product }) {
  return (
    <div className="flex flex-col-reverse">
      <dl className="border-b border-stone-200 bg-white px-4">
        <div className="mt-3">
          <dt className="sr-only">Name</dt>
          <dd className="text-sm font-medium text-stone-600">{data.name}</dd>
        </div>

        <div className="mt-3">
          <dt className="sr-only">Price</dt>
          <dd className="font-semibold leading-none text-stone-700">
            AED {data.price.toLocaleString()}
          </dd>
        </div>

        <div className="mb-3 mt-1.5 flex items-center">
          <dt className="mr-[0.15em] text-xs font-medium leading-none text-stone-500">
            Posted
          </dt>
          <dd className="ml-[0.15em] text-xs font-medium leading-none text-stone-500">
            {dayjs(data.created_at).fromNow()}
          </dd>
        </div>
      </dl>

      <EmblaCarousel dots={data.images.length} options={{ loop: true }}>
        <ul className="flex">
          {data.images.map((img, i) => (
            <li key={i} className="w-full shrink-0">
              <div className="relative block aspect-card">
                <Image
                  src={img.href}
                  alt={data.name}
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
