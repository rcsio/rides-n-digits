import { Product } from "@/types";
import clsx from "clsx";

type Props = {
  active?: Product["active"];
  created_at: Product["created_at"];
  location: string;
  price: string;
  title: Product["name"];
};

export default function ProductCardMeta(props: Props) {
  const { active, created_at, location, price, title } = props;

  return (
    <dl>
      <div>
        <dt className="sr-only">Name</dt>
        <dd className="line-clamp-1 font-bold">{title}</dd>
      </div>

      <div className="mt-0.5">
        <dt className="sr-only">Price</dt>
        <dd className="line-clamp-1 font-bold leading-none">{price}</dd>
      </div>

      <div className="mt-2.5">
        <dt className="sr-only">Location</dt>
        <dd className="line-clamp-1 text-sm leading-none text-stone-600">
          {location}
        </dd>
      </div>

      <div className="mt-1 line-clamp-1 flex items-center text-sm leading-none text-stone-600">
        <dt className="mr-[0.15em]">Posted</dt>
        <dd className="ml-[0.15em]">{created_at}</dd>
      </div>

      {active !== undefined && (
        <div className="mt-1.5">
          <dt className="sr-only">Active</dt>
          <dd
            className={clsx(
              "inline-block rounded-full px-1.5 py-1 text-xs font-bold leading-none",
              active
                ? "border border-green-300 bg-green-100 text-green-900"
                : "border border-red-300 bg-red-100 text-red-900",
            )}
          >
            {active ? "Active" : "Not Active"}
          </dd>
        </div>
      )}
    </dl>
  );
}
