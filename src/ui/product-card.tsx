import { Image, Product } from "@/types";
import ProductCardMeta from "@/ui/product-card-meta";
import NextImage from "next/image";

type Props = {
  active?: Product["active"];
  created_at: Product["created_at"];
  image: Image["href"];
  imageAlt: Product["name"];
  location: string;
  title: Product["name"];
  price: string;
};

export default function ProductCard(props: Props) {
  const { image, imageAlt, ...rest } = props;

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

      <div className="mt-1.5">
        <ProductCardMeta {...rest} />
      </div>
    </div>
  );
}
