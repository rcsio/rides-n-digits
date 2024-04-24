import SubmitButton from "@/app/new/ui/submit-button";
import { Category } from "@/types";
import Checkbox from "@/ui/checkbox";
import Input from "@/ui/input";
import Textarea from "@/ui/textarea";
import { singular } from "pluralize";
import title from "title";

import Photos from "./ui/photos";

export default async function Advertise() {
  const url = `${process.env.BACKEND_URL}/api/categories`;
  const res = await fetch(url, { cache: "no-store" });
  const categories: Category[] = await res.json();

  categories.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <form className="space-y-6 px-4 py-6">
      <h1 className="text-xl font-bold">Place Ad</h1>

      <div className="grid gap-y-1">
        <label htmlFor="category" className="justify-self-start">
          Category
        </label>
        <select name="category" id="category" className="input" tabIndex={1}>
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {title(singular(name))}
            </option>
          ))}
        </select>
      </div>

      <Input label="Name" name="name" required spellCheck tabIndex={2} />

      <Textarea
        label="Description"
        name="description"
        maxLength={1000}
        rows={5}
        spellCheck
        tabIndex={3}
        required
      />

      <Input
        label="Price"
        name="price"
        type="number"
        min={1}
        required
        tabIndex={4}
      />

      <Checkbox name="price-offers" tabIndex={5}>
        I want to receive price offers
      </Checkbox>

      <Photos />

      <SubmitButton />
    </form>
  );
}
