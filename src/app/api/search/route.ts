import { faker } from "@faker-js/faker";

export async function GET() {
  const products = [...Array(4)].map(() => {
    return {
      attributes: {
        body: faker.vehicle.type(),
        color: faker.vehicle.color(),
        cylinders: faker.number.int({ min: 4, max: 8 }),
        doors: faker.number.int({ min: 2, max: 5 }),
        fuel: faker.vehicle.fuel(),
        kilometers: faker.number.int({ max: 100_000 }),
        transmission: faker.helpers.arrayElement([
          "automatic",
          "semi-automatic",
          "manual",
        ]),
        year: faker.number.int({ min: 1950, max: 2023 }),
      },
      created_at: faker.date.past(),
      description: faker.commerce.productDescription(),
      id: faker.string.nanoid(10),
      images: [
        `https://source.unsplash.com/random/?${faker.commerce.product()}`,
        `https://source.unsplash.com/random/?${faker.commerce.product()}`,
        `https://source.unsplash.com/random/?${faker.commerce.product()}`,
        `https://source.unsplash.com/random/?${faker.commerce.product()}`,
      ],
      name: faker.vehicle.vehicle(),
      price: faker.commerce.price(),
    };
  });

  return Response.json(products);
}
