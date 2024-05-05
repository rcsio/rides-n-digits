import airplane from "@/app/new/images/airplane.jpg";
import bicycle from "@/app/new/images/bicycle.jpg";
import boat from "@/app/new/images/boat.jpg";
import box from "@/app/new/images/box.jpg";
import car from "@/app/new/images/car.jpg";
import contactNumber from "@/app/new/images/contact-number.jpg";
import currency from "@/app/new/images/currency.jpg";
import heavyVehicle from "@/app/new/images/heavy-vehicle.jpg";
import horse from "@/app/new/images/horse.jpg";
import licensePlate from "@/app/new/images/license-plate.jpg";
import motorcycle from "@/app/new/images/motorcycle.jpg";
import { Category } from "@/types";
import { singular } from "pluralize";

export function includeProps({ slug, name, ...rest }: Category) {
  return {
    ...rest,
    href: `/new/${slug}`,
    img: getImg(slug),
    name: singular(name),
  };
}

function getImg(slug: string) {
  switch (slug) {
    case "airplane":
      return airplane;
    case "bicycle":
      return bicycle;
    case "boat":
      return boat;
    case "car":
      return car;
    case "heavy-vehicle":
      return heavyVehicle;
    case "horse":
      return horse;
    case "motorcycle":
      return motorcycle;
    case "license-plate":
      return licensePlate;
    case "contact-number":
      return contactNumber;
    case "currency":
      return currency;
    default:
      return box;
  }
}
