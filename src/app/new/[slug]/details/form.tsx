import { tempSaveAttribs } from "@/app/new/[slug]/details/actions";
import Button from "@/app/new/[slug]/details/button";
import { motorcycle } from "@/app/new/[slug]/details/data";
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
            options={motorcycle.regionalSpecs.map(getLabelValue)}
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

      <Button />
    </form>
  );
}

function getLabelValue(item: string) {
  return { label: item, value: item };
}
