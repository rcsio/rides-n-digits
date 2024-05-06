"use client";

import { update } from "@/app/ads/[slug]/edit/main/actions";
import Button from "@/app/new/[slug]/main/button";
import { countries } from "@/data";
import ScrollToTop from "@/hack/scroll-to-top";
import { Product } from "@/types";
import Checkbox from "@/ui/checkbox";
import Input from "@/ui/input";
import Select from "@/ui/select";
import Textarea from "@/ui/textarea";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function Form({ product }: { product: Product }) {
  const updateProductWithSlug = update.bind(null, product.slug);
  const [state, action] = useFormState(updateProductWithSlug, null);

  useEffect(() => {
    if (state?.status === "success") toast("Saved", { type: "success" });
  }, [state]);

  return (
    <form className="mt-6 space-y-6" action={action}>
      <Input
        label="Ad Title"
        name="name"
        defaultValue={product.name}
        required
      />

      <Textarea
        label="Short Description"
        name="description"
        maxLength={1000}
        rows={3}
        defaultValue={product.description}
        required
      />

      <Select
        label="Country"
        name="country"
        options={countries.map(({ name }) => ({
          label: name,
          value: name,
        }))}
        defaultValue={product.country}
      />

      <Input label="City" name="city" defaultValue={product.city} required />

      <Input
        label="Price"
        name="price"
        type="number"
        min={1}
        defaultValue={product.price}
        required
      />

      <Select
        label="Currency"
        name="currency"
        options={countries.map(({ currency, name }) => ({
          label: `${name} (${currency.code})`,
          value: currency.code,
        }))}
        defaultValue={product.currency}
      />

      <Checkbox
        name="open_to_offers"
        value="1"
        defaultChecked={product.open_to_offers}
      >
        Open to price offers
      </Checkbox>

      <Button
        pendingText="Please wait"
        className="bg-stone-200 text-stone-500"
        name="active"
        value="0"
      >
        Unpublish
      </Button>

      <Button
        pendingText="Please wait"
        className="bg-orange-500 text-white"
        name="active"
        value="1"
      >
        Update
      </Button>

      <ScrollToTop />
    </form>
  );
}
