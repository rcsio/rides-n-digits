import { faker } from "@faker-js/faker";
import { type NextRequest } from "next/server";
import { randomUUID } from "node:crypto";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("category");

  return Response.json([
    {
      id: randomUUID(),
      name: faker.vehicle.vehicle(),
      price: faker.commerce.price(),
      img: `https://source.unsplash.com/random/?${category}`,
    },
    {
      id: randomUUID(),
      name: faker.vehicle.vehicle(),
      price: faker.commerce.price(),
      img: `https://source.unsplash.com/random/?${category}`,
    },
    {
      id: randomUUID(),
      name: faker.vehicle.vehicle(),
      price: faker.commerce.price(),
      img: `https://source.unsplash.com/random/?${category}`,
    },
  ]);
}
