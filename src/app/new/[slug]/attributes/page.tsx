import { updateProduct } from "@/app/new/[slug]/attributes/actions";
import Button from "@/app/new/[slug]/attributes/button";
import ScrollToTop from "@/hack/scroll-to-top";
import { Product } from "@/types";
import Input from "@/ui/input";
import Select from "@/ui/select";
import { notFound } from "next/navigation";

export default async function Edit({ params }: { params: { slug: string } }) {
  const url = `${process.env.BACKEND_URL}/api/products/${params.slug}`;
  const res = await fetch(url, { cache: "no-store" });

  if (res.status === 404) notFound();
  const data: Product = await res.json();
  const updateProductWithSlug = updateProduct.bind(null, data.slug);

  return (
    <>
      <form className="space-y-6 px-4 py-6" action={updateProductWithSlug}>
        {data.category_slug === "cars" && <CarAttributes />}
        <Button
          className="bg-stone-200 text-stone-500"
          pendingText="Please wait"
        >
          Save as draft
        </Button>
        <Button
          className="bg-orange-500 text-white"
          name="active"
          pendingText="Please wait"
          value="1"
        >
          Publish
        </Button>
      </form>

      <ScrollToTop />
    </>
  );
}

function CarAttributes() {
  return (
    <>
      <Input label="Make" name="make" required />
      <Input label="Model" name="model" required />
      <Input label="Year" name="year" type="number" min={1900} required />
      <Input label="Color" name="color" required />

      <Input
        label="Doors"
        name="doors"
        type="number"
        min={1}
        defaultValue={4}
        required
      />

      <Input
        label="Kilometers"
        name="kilometers"
        type="number"
        min={0}
        defaultValue={0}
        required
      />

      <Input
        label="Cylinders"
        name="cylinders"
        type="number"
        min={1}
        defaultValue={4}
        required
      />

      <Select
        label="Transmission"
        name="transmission"
        options={[
          { label: "Manual", value: "Manual" },
          { label: "Automatic", value: "Automatic" },
        ]}
      />

      <Select
        label="Fuel"
        name="fuel"
        options={[
          { label: "Diesel", value: "Diesel" },
          { label: "Electric", value: "Electric" },
          { label: "Gasoline", value: "Gasoline" },
          { label: "Hybrid", value: "Hybrid" },
        ]}
      />
    </>
  );
}
