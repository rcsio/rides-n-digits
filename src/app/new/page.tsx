import { includeProps } from "@/app/new/functions";
import Group from "@/app/new/ui/group";
import { Category } from "@/types";

export default async function Page() {
  const url = `${process.env.BACKEND_URL}/api/categories`;
  const res = await fetch(url, { cache: "no-store" });
  const categories: Category[] = await res.json();

  const rides = categories
    .filter(({ slug }) => {
      return [
        "airplane",
        "bicycle",
        "boat",
        "car",
        "heavy-vehicle",
        "horse",
        "motorcycle",
      ].includes(slug);
    })
    .map(includeProps);

  const digits = categories
    .filter(({ slug }) =>
      ["license-plate", "contact-number", "currency"].includes(slug),
    )
    .map(includeProps);

  return (
    <>
      <h1 className="mx-4 mt-7 text-2xl leading-none">Select a category</h1>
      <Group name="Rides" categories={rides} />
      <Group name="Digits" categories={digits} />
    </>
  );
}
