import { getProduct } from "@/lib-mockup";

export async function GET() {
  const products = [...Array(4)].map(() => getProduct());

  return Response.json(products);
}
