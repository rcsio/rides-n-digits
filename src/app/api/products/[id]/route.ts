import { faker } from "@faker-js/faker";

export async function GET() {
  return Response.json({
    attributes: {
      year: 2020,
      kilometers: "30,000",
      doors: 4,
      body: "Sedan",
      transmission: "Automatic",
      cylinders: 8,
      color: "Black",
    },
    description: faker.lorem.paragraph(),
    images: [
      "https://source.unsplash.com/random/?car",
      "https://source.unsplash.com/random/?cars",
      "https://source.unsplash.com/random/?sedan",
      "https://source.unsplash.com/random/?racecar",
    ],
    name: faker.vehicle.vehicle(),
    price: faker.commerce.price(),
  });
}
