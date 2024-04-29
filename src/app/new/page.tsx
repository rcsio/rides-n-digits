import { createProduct } from "@/app/new/actions";
import Photos from "@/app/new/ui/photos";
import SubmitButton from "@/app/new/ui/submit-button";
import { Category } from "@/types";
import Checkbox from "@/ui/checkbox";
import Input from "@/ui/input";
import Select from "@/ui/select";
import Textarea from "@/ui/textarea";
import { singular } from "pluralize";
import title from "title";

export default async function Advertise() {
  const url = `${process.env.BACKEND_URL}/api/categories`;
  const res = await fetch(url, { cache: "no-store" });
  const categories: Category[] = await res.json();

  categories.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <form className="space-y-6 px-4 py-6" action={createProduct}>
      <h1 className="text-xl font-bold">Place Ad</h1>

      <Select
        label="Category"
        name="category_slug"
        options={categories.map(({ name, slug }) => ({
          label: title(singular(name)),
          value: slug,
        }))}
      />

      <Input label="Ad Title" name="name" required spellCheck />

      <Textarea
        label="Short Description"
        name="description"
        maxLength={1000}
        rows={4}
        spellCheck
        required
      />

      <Input label="Price" name="price" type="number" min={1} required />
      <Checkbox name="open_to_offers">Open to price offers</Checkbox>

      <Photos />
      <SubmitButton />
    </form>
  );
}
