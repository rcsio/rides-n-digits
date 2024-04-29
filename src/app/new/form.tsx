"use client";

import { createProduct } from "@/app/new/actions";
import Photos from "@/app/new/ui/photos";
import SubmitButton from "@/app/new/ui/submit-button";
import ScrollToTop from "@/hack/scroll-to-top";
import { Category } from "@/types";
import Checkbox from "@/ui/checkbox";
import Input from "@/ui/input";
import Select from "@/ui/select";
import Textarea from "@/ui/textarea";
import { singular } from "pluralize";
import { useState } from "react";
import title from "title";

export default function Form({ categories }: { categories: Category[] }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <form className="space-y-6 px-4 py-6" action={createProduct}>
      <h1 className="text-xl font-bold">Place Ad</h1>

      <Select
        label="Category"
        name="category_slug"
        options={categories.map(({ id, name }) => ({
          label: title(singular(name)),
          value: id,
        }))}
        onChange={(e) =>
          setSelectedCategory(
            categories.filter(
              (item) => item.id === parseInt(e.currentTarget.value, 10),
            )[0],
          )
        }
      />

      <Input label="Ad Title" name="name" required spellCheck />

      {selectedCategory.slug === "cars" && (
        <>
          <Input label="Make" name="make" />
          <Input label="Model" name="model" />
          <Input label="Year" name="year" />
          <Input label="Color" name="color" />
          <Input label="Doors" name="doors" />
          <Input label="Kilometers" name="kilometers" />
          <Input
            label="Cylinders"
            name="cylinders"
            type="number"
            min={1}
            defaultValue={1}
          />

          <Select
            label="Transmission"
            name="transmission"
            options={[
              { label: "Manual", value: "Manual" },
              { label: "Automatic", value: "Automatic" },
            ]}
          />
        </>
      )}

      <Textarea
        label="Short Description"
        name="description"
        maxLength={1000}
        rows={5}
        spellCheck
        required
      />

      <Input label="Price" name="price" type="number" min={1} required />
      <Checkbox name="open_to_offers">Open to price offers</Checkbox>
      <Photos />
      <SubmitButton />
      <ScrollToTop />
    </form>
  );
}
