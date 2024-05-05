import { tempSaveAttribs } from "@/app/new/[slug]/details/actions";
import Button from "@/app/new/[slug]/details/button";
import {
  car,
  fuels,
  horsePowers,
  lengths,
  motorcycle,
  regionalSpecs,
  transmissions,
} from "@/app/new/[slug]/details/data";
import { colors } from "@/data";
import { Category } from "@/types";
import Checkbox from "@/ui/checkbox";
import Input from "@/ui/input";
import Select from "@/ui/select";
import { cookies } from "next/headers";

export default function Form({ category }: { category: Category }) {
  const tempSaveAttribsWithSlug = tempSaveAttribs.bind(null, category.slug);
  const attributes = JSON.parse(cookies().get("attributes")?.value || "{}");

  return (
    <form className="space-y-6 px-4 py-6" action={tempSaveAttribsWithSlug}>
      <h1 className="text-xl font-bold">{category.name} Details</h1>

      {category.slug === "motorcycle" && (
        <>
          <Input
            label="Make"
            name="make"
            defaultValue={attributes?.make}
            required
          />
          <Input
            label="Model"
            name="model"
            defaultValue={attributes?.model}
            required
          />
          <Input
            label="Year"
            name="year"
            type="number"
            min={1900}
            defaultValue={attributes?.year}
            required
          />
          <Select
            label="Color"
            name="color"
            options={colors.map(getLabelValue)}
            defaultValue={attributes?.color}
          />
          <Select
            label="Type"
            name="type"
            options={motorcycle.types.map(getLabelValue)}
            defaultValue={attributes?.type}
          />
          <Input
            label="Kilometers"
            name="kilometers"
            type="number"
            min={0}
            defaultValue={attributes?.kilometers}
            required
          />
          <Select
            label="Final Drive System"
            name="final_drive_system"
            options={motorcycle.finalDriveSystems.map(getLabelValue)}
            defaultValue={attributes?.final_drive_system}
          />
          <Select
            label="Engine Size"
            name="engine_size"
            options={motorcycle.engineSizes.map(getLabelValue)}
            defaultValue={attributes?.engine_size}
          />
          <Select
            label="Regional Specs"
            name="regional_specs"
            options={regionalSpecs.map(getLabelValue)}
            defaultValue={attributes?.regional_specs}
          />
          <Checkbox
            name="warranty"
            defaultChecked={attributes?.warranty}
            value={1}
          >
            Has Warranty
          </Checkbox>
        </>
      )}

      {category.slug === "car" && (
        <>
          <Input
            label="Make"
            name="make"
            defaultValue={attributes?.make}
            required
          />
          <Input
            label="Model"
            name="model"
            defaultValue={attributes?.model}
            required
          />
          <Input
            label="Year"
            name="year"
            type="number"
            min={1900}
            defaultValue={attributes?.year}
            required
          />
          <Select
            label="Color"
            name="color"
            options={colors.map(getLabelValue)}
            defaultValue={attributes?.color}
          />
          <Input
            label="Doors"
            name="doors"
            type="number"
            min={1}
            defaultValue={attributes?.doors}
            required
          />
          <Select
            label="Body Type"
            name="body_type"
            options={car.bodyTypes.map(getLabelValue)}
            defaultValue={attributes?.body_type}
          />
          <Input
            label="Kilometers"
            name="kilometers"
            type="number"
            min={0}
            defaultValue={attributes?.kilometers}
            required
          />
          <Input
            label="Cylinders"
            name="cylinders"
            type="number"
            min={1}
            defaultValue={attributes?.cylinders}
            required
          />
          <Select
            label="Transmission"
            name="transmission"
            options={transmissions.map(getLabelValue)}
            defaultValue={attributes?.transmission}
          />
          <Select
            label="Horsepower"
            name="horsepower"
            options={horsePowers.map(getLabelValue)}
            defaultValue={attributes?.horsepower}
          />
          <Select
            label="Fuel"
            name="fuel"
            options={fuels.map(getLabelValue)}
            defaultValue={attributes?.fuel}
          />
          <Select
            label="Regional Specs"
            name="regional_specs"
            options={regionalSpecs.map(getLabelValue)}
            defaultValue={attributes?.regional_specs}
          />
          <Checkbox
            name="warranty"
            defaultChecked={attributes?.warranty}
            value={1}
          >
            Has Warranty
          </Checkbox>
        </>
      )}

      {category.slug === "heavy-vehicle" && (
        <>
          <Input
            label="Make"
            name="make"
            defaultValue={attributes?.make}
            required
          />
          <Input
            label="Model"
            name="model"
            defaultValue={attributes?.model}
            required
          />
          <Input
            label="Year"
            name="year"
            type="number"
            min={1900}
            defaultValue={attributes?.year}
            required
          />
          <Select
            label="Color"
            name="color"
            options={colors.map(getLabelValue)}
            defaultValue={attributes?.color}
          />
          <Input
            label="Kilometers"
            name="kilometers"
            type="number"
            min={0}
            defaultValue={attributes?.kilometers}
            required
          />
          <Input
            label="Cylinders"
            name="cylinders"
            type="number"
            min={1}
            defaultValue={attributes?.cylinders}
            required
          />
          <Select
            label="Horsepower"
            name="horsepower"
            options={horsePowers.map(getLabelValue)}
            defaultValue={attributes?.horsepower}
          />
          <Select
            label="Fuel"
            name="fuel"
            options={fuels.map(getLabelValue)}
            defaultValue={attributes?.fuel}
          />
          <Select
            label="Regional Specs"
            name="regional_specs"
            options={regionalSpecs.map(getLabelValue)}
            defaultValue={attributes?.regional_specs}
          />
          <Checkbox
            name="warranty"
            defaultChecked={attributes?.warranty}
            value={1}
          >
            Has Warranty
          </Checkbox>
        </>
      )}

      {category.slug === "bicycle" && (
        <>
          <Input
            label="Make"
            name="make"
            defaultValue={attributes?.make}
            required
          />
          <Input
            label="Model"
            name="model"
            defaultValue={attributes?.model}
            required
          />
          <Input
            label="Year"
            name="year"
            type="number"
            min={1900}
            defaultValue={attributes?.year}
            required
          />
          <Select
            label="Color"
            name="color"
            options={colors.map(getLabelValue)}
            defaultValue={attributes?.color}
          />
          <Checkbox
            name="warranty"
            defaultChecked={attributes?.warranty}
            value={1}
          >
            Has Warranty
          </Checkbox>
        </>
      )}

      {category.slug === "boat" && (
        <>
          <Input
            label="Make"
            name="make"
            defaultValue={attributes?.make}
            required
          />
          <Input
            label="Model"
            name="model"
            defaultValue={attributes?.model}
            required
          />
          <Input
            label="Year"
            name="year"
            type="number"
            min={1900}
            defaultValue={attributes?.year}
            required
          />
          <Select
            label="Color"
            name="color"
            options={colors.map(getLabelValue)}
            defaultValue={attributes?.color}
          />
          <Select
            label="Length"
            name="length"
            options={lengths.map(getLabelValue)}
            defaultValue={attributes?.length}
          />
          <Checkbox
            name="warranty"
            defaultChecked={attributes?.warranty}
            value={1}
          >
            Has Warranty
          </Checkbox>
        </>
      )}

      {category.slug === "airplane" && (
        <>
          <Input
            label="Make"
            name="make"
            defaultValue={attributes?.make}
            required
          />
          <Input
            label="Model"
            name="model"
            defaultValue={attributes?.model}
            required
          />
          <Input
            label="Year"
            name="year"
            type="number"
            min={1900}
            defaultValue={attributes?.year}
            required
          />
          <Select
            label="Color"
            name="color"
            options={colors.map(getLabelValue)}
            defaultValue={attributes?.color}
          />
          <Checkbox
            name="warranty"
            defaultChecked={attributes?.warranty}
            value={1}
          >
            Has Warranty
          </Checkbox>
        </>
      )}

      {category.slug === "horse" && (
        <>
          <Input
            label="Breed"
            name="breed"
            defaultValue={attributes?.breed}
            required
          />
          <Input
            label="Year Born"
            name="year_born"
            type="number"
            min={1900}
            defaultValue={attributes?.year_born}
            required
          />
          <Select
            label="Color"
            name="color"
            options={colors.map(getLabelValue)}
            defaultValue={attributes?.color}
          />
        </>
      )}

      {category.slug === "license-plate" && (
        <>
          <Input
            label="License Plate"
            name="license_plate"
            defaultValue={attributes?.license_plate}
            required
          />
        </>
      )}

      <Button />
    </form>
  );
}

function getLabelValue(item: string) {
  return { label: item, value: item };
}
