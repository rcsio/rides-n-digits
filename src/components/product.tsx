import Image from "next/image";

type Props = {
  name: string;
  price: number;
  img: string;
  imgAlt?: string;
};

export default function Product({ name, price, img, imgAlt }: Props) {
  return (
    <div className="grid">
      <div className="aspect-card relative block">
        <Image
          src={img}
          alt={imgAlt || name}
          className="rounded-lg object-cover"
          fill
        />
      </div>
      <span className="mt-3 font-bold leading-none">{name}</span>
      <span className="mt-2 leading-none">{price}</span>
    </div>
  );
}
