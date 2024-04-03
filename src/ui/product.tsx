import Image from "next/image";

type Props = {
  name: string;
  price: string;
  img: string;
  imgAlt?: string;
};

export default function Product({ name, price, img, imgAlt }: Props) {
  return (
    <div className="grid">
      <div className="relative block aspect-video">
        <Image
          src={img}
          alt={imgAlt || name}
          className="rounded-lg object-cover"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <span className="mt-2 line-clamp-1 font-bold">{name}</span>
      <span className="line-clamp-1">{price}</span>
    </div>
  );
}
