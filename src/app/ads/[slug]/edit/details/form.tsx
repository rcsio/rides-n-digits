"use client";

import { update } from "@/app/ads/[slug]/edit/details/actions";
import {
  car,
  fuels,
  horsePowers,
  lengths,
  motorcycle,
  regionalSpecs,
  transmissions,
} from "@/app/new/[slug]/details/data";
import Button from "@/app/new/[slug]/main/button";
import { colors } from "@/data";
import ScrollToTop from "@/hack/scroll-to-top";
import { Product } from "@/types";
import Checkbox from "@/ui/checkbox";
import Input from "@/ui/input";
import Select from "@/ui/select";
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
      {product.category_slug === "motorcycle" && (
        <>
          <Input
            label="Make"
            name="make"
            defaultValue={product.attributes?.make}
            required
          />
          <Input
            label="Model"
            name="model"
            defaultValue={product.attributes?.model}
            required
          />
          <Input
            label="Year"
            name="year"
            type="number"
            min={1900}
            defaultValue={product.attributes?.year}
            required
          />
          <Select
            label="Color"
            name="color"
            options={colors.map(getLabelValue)}
            defaultValue={product.attributes?.color}
          />
          <Select
            label="Type"
            name="type"
            options={motorcycle.types.map(getLabelValue)}
            defaultValue={product.attributes?.type}
          />
          <Input
            label="Kilometers"
            name="kilometers"
            type="number"
            min={0}
            defaultValue={product.attributes?.kilometers}
            required
          />
          <Select
            label="Final Drive System"
            name="final_drive_system"
            options={motorcycle.finalDriveSystems.map(getLabelValue)}
            defaultValue={product.attributes?.final_drive_system}
          />
          <Select
            label="Engine Size"
            name="engine_size"
            options={motorcycle.engineSizes.map(getLabelValue)}
            defaultValue={product.attributes?.engine_size}
          />
          <Select
            label="Regional Specs"
            name="regional_specs"
            options={regionalSpecs.map(getLabelValue)}
            defaultValue={product.attributes?.regional_specs}
          />
          <Checkbox
            name="warranty"
            defaultChecked={product.attributes?.warranty}
            value={1}
          >
            Has Warranty
          </Checkbox>
        </>
      )}

      {product.category_slug === "car" && (
        <>
          <Input
            label="Make"
            name="make"
            defaultValue={product.attributes?.make}
            required
          />
          <Input
            label="Model"
            name="model"
            defaultValue={product.attributes?.model}
            required
          />
          <Input
            label="Year"
            name="year"
            type="number"
            min={1900}
            defaultValue={product.attributes?.year}
            required
          />
          <Select
            label="Color"
            name="color"
            options={colors.map(getLabelValue)}
            defaultValue={product.attributes?.color}
          />
          <Input
            label="Doors"
            name="doors"
            type="number"
            min={1}
            defaultValue={product.attributes?.doors}
            required
          />
          <Select
            label="Body Type"
            name="body_type"
            options={car.bodyTypes.map(getLabelValue)}
            defaultValue={product.attributes?.body_type}
          />
          <Input
            label="Kilometers"
            name="kilometers"
            type="number"
            min={0}
            defaultValue={product.attributes?.kilometers}
            required
          />
          <Input
            label="Cylinders"
            name="cylinders"
            type="number"
            min={1}
            defaultValue={product.attributes?.cylinders}
            required
          />
          <Select
            label="Transmission"
            name="transmission"
            options={transmissions.map(getLabelValue)}
            defaultValue={product.attributes?.transmission}
          />
          <Select
            label="Horsepower"
            name="horsepower"
            options={horsePowers.map(getLabelValue)}
            defaultValue={product.attributes?.horsepower}
          />
          <Select
            label="Fuel"
            name="fuel"
            options={fuels.map(getLabelValue)}
            defaultValue={product.attributes?.fuel}
          />
          <Select
            label="Regional Specs"
            name="regional_specs"
            options={regionalSpecs.map(getLabelValue)}
            defaultValue={product.attributes?.regional_specs}
          />
          <Checkbox
            name="warranty"
            defaultChecked={product.attributes?.warranty}
            value={1}
          >
            Has Warranty
          </Checkbox>
        </>
      )}

      {product.category_slug === "heavy-vehicle" && (
        <>
          <Input
            label="Make"
            name="make"
            defaultValue={product.attributes?.make}
            required
          />
          <Input
            label="Model"
            name="model"
            defaultValue={product.attributes?.model}
            required
          />
          <Input
            label="Year"
            name="year"
            type="number"
            min={1900}
            defaultValue={product.attributes?.year}
            required
          />
          <Select
            label="Color"
            name="color"
            options={colors.map(getLabelValue)}
            defaultValue={product.attributes?.color}
          />
          <Input
            label="Kilometers"
            name="kilometers"
            type="number"
            min={0}
            defaultValue={product.attributes?.kilometers}
            required
          />
          <Input
            label="Cylinders"
            name="cylinders"
            type="number"
            min={1}
            defaultValue={product.attributes?.cylinders}
            required
          />
          <Select
            label="Horsepower"
            name="horsepower"
            options={horsePowers.map(getLabelValue)}
            defaultValue={product.attributes?.horsepower}
          />
          <Select
            label="Fuel"
            name="fuel"
            options={fuels.map(getLabelValue)}
            defaultValue={product.attributes?.fuel}
          />
          <Select
            label="Regional Specs"
            name="regional_specs"
            options={regionalSpecs.map(getLabelValue)}
            defaultValue={product.attributes?.regional_specs}
          />
          <Checkbox
            name="warranty"
            defaultChecked={product.attributes?.warranty}
            value={1}
          >
            Has Warranty
          </Checkbox>
        </>
      )}

      {product.category_slug === "bicycle" && (
        <>
          <Input
            label="Make"
            name="make"
            defaultValue={product.attributes?.make}
            required
          />
          <Input
            label="Model"
            name="model"
            defaultValue={product.attributes?.model}
            required
          />
          <Input
            label="Year"
            name="year"
            type="number"
            min={1900}
            defaultValue={product.attributes?.year}
            required
          />
          <Select
            label="Color"
            name="color"
            options={colors.map(getLabelValue)}
            defaultValue={product.attributes?.color}
          />
          <Checkbox
            name="warranty"
            defaultChecked={product.attributes?.warranty}
            value={1}
          >
            Has Warranty
          </Checkbox>
        </>
      )}

      {product.category_slug === "boat" && (
        <>
          <Input
            label="Make"
            name="make"
            defaultValue={product.attributes?.make}
            required
          />
          <Input
            label="Model"
            name="model"
            defaultValue={product.attributes?.model}
            required
          />
          <Input
            label="Year"
            name="year"
            type="number"
            min={1900}
            defaultValue={product.attributes?.year}
            required
          />
          <Select
            label="Color"
            name="color"
            options={colors.map(getLabelValue)}
            defaultValue={product.attributes?.color}
          />
          <Select
            label="Length"
            name="length"
            options={lengths.map(getLabelValue)}
            defaultValue={product.attributes?.length}
          />
          <Checkbox
            name="warranty"
            defaultChecked={product.attributes?.warranty}
            value={1}
          >
            Has Warranty
          </Checkbox>
        </>
      )}

      {product.category_slug === "airplane" && (
        <>
          <Input
            label="Make"
            name="make"
            defaultValue={product.attributes?.make}
            required
          />
          <Input
            label="Model"
            name="model"
            defaultValue={product.attributes?.model}
            required
          />
          <Input
            label="Year"
            name="year"
            type="number"
            min={1900}
            defaultValue={product.attributes?.year}
            required
          />
          <Select
            label="Color"
            name="color"
            options={colors.map(getLabelValue)}
            defaultValue={product.attributes?.color}
          />
          <Checkbox
            name="warranty"
            defaultChecked={product.attributes?.warranty}
            value={1}
          >
            Has Warranty
          </Checkbox>
        </>
      )}

      {product.category_slug === "horse" && (
        <>
          <Input
            label="Breed"
            name="breed"
            defaultValue={product.attributes?.breed}
            required
          />
          <Input
            label="Year Born"
            name="year_born"
            type="number"
            min={1900}
            defaultValue={product.attributes?.year_born}
            required
          />
          <Select
            label="Color"
            name="color"
            options={colors.map(getLabelValue)}
            defaultValue={product.attributes?.color}
          />
        </>
      )}

      {product.category_slug === "license-plate" && (
        <>
          <Input
            label="License Plate"
            name="license_plate"
            defaultValue={product.attributes?.license_plate}
            required
          />
        </>
      )}

      <Button pendingText="Please wait" className="bg-orange-500 text-white">
        Update
      </Button>

      <ScrollToTop />
    </form>
  );
}

function getLabelValue(item: string) {
  return { label: item, value: item };
}
