import { getProduct } from "@/lib-mockup";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const searchParams = request.nextUrl.searchParams;
  // const category = searchParams.get("category");

  return Response.json([...Array(5)].map(() => getProduct()));
}
