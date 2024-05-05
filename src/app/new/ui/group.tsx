import EmblaCarousel from "@/ui/embla-carousel";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

type Props = {
  categories: {
    href: string;
    img: StaticImport;
    name: string;
  }[];
  name: string;
};

export default function Group({ categories, name }: Props) {
  return (
    <div className="my-7">
      <div className="mx-4 flex items-center justify-between">
        <div className="text-xl font-bold leading-none">{name}</div>
      </div>

      <EmblaCarousel className="mt-4 px-4">
        <ul className="flex gap-x-4">
          {categories.map(({ href, img, name }, i) => (
            <li key={i} className="shrink-0 basis-11/12">
              <Link href={href} className="grid">
                <div className="relative block aspect-video">
                  <Image
                    src={img}
                    alt={name}
                    className="rounded-lg object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    fill
                  />
                </div>
                <span className="mt-2 line-clamp-1 font-bold">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </EmblaCarousel>
    </div>
  );
}
