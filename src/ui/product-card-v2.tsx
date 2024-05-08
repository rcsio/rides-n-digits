import { Product } from "@/types";
import EmblaCarousel from "@/ui/embla-carousel";
import ProductCardMeta from "@/ui/product-card-meta";
import Image from "next/image";

type Props = {
  active?: Product["active"];
  created_at: Product["created_at"];
  images: Product["images"];
  location: string;
  price: string;
  title: Product["name"];
};

export default function ProductCardV2(props: Props) {
  const { images, title, ...rest } = props;

  return (
    <div className="flex flex-col-reverse">
      <div className="border-b border-stone-200 bg-white px-4 pb-2.5 pt-2">
        <ProductCardMeta title={title} {...rest} />
      </div>

      <EmblaCarousel dots={images.length} options={{ loop: true }}>
        <ul className="flex">
          {images.map((img, i) => (
            <li key={i} className="w-full shrink-0">
              <div className="relative block aspect-card">
                <Image
                  src={img.href}
                  alt={title}
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
