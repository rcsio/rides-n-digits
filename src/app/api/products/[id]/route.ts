import { getProduct } from "@/lib-mockup";

export async function GET() {
  return Response.json(getProduct());
}
