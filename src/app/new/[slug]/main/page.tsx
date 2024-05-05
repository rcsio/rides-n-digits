import { getCategory } from "@/app/new/[slug]/functions";
import { createProduct } from "@/app/new/[slug]/main/actions";
import Button from "@/app/new/[slug]/main/button";
import { countries } from "@/data";
import ScrollToTop from "@/hack/scroll-to-top";
import Checkbox from "@/ui/checkbox";
import Input from "@/ui/input";
import Select from "@/ui/select";
import Textarea from "@/ui/textarea";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function Page({ params: { slug } }: Props) {
  const category = await getCategory(slug);
  if (!category) notFound();

  const createProductWithCategorySlug = createProduct.bind(null, slug);

  return (
    <form
      className="space-y-6 px-4 py-6"
      action={createProductWithCategorySlug}
    >
      <Input label="Ad Title" name="name" required />

      <Textarea
        label="Short Description"
        name="description"
        maxLength={1000}
        rows={3}
        required
      />

      <Select
        label="Country"
        name="country"
        options={countries.map(({ name }) => ({
          label: name,
          value: name,
        }))}
      />

      <Input label="City" name="city" required />

      <hr />

      <Input label="Price" name="price" type="number" min={1} required />

      <Select
        label="Currency"
        name="currency"
        options={countries.map(({ currency, name }) => ({
          label: `${name} (${currency.code})`,
          value: currency.code,
        }))}
      />

      <Checkbox name="open_to_offers" value="1">
        Open to price offers
      </Checkbox>

      <hr />

      <Button
        pendingText="Please wait"
        className="bg-stone-200 text-stone-500"
        name="active"
        value="0"
      >
        Save as draft
      </Button>

      <Button
        pendingText="Please wait"
        className="bg-orange-500 text-white"
        name="active"
        value="1"
      >
        Publish
      </Button>

      <ScrollToTop />
    </form>
  );
}
