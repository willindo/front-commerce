import { NextRequest } from "next/server";
import { CheckoutBodySchema } from "@/src/shared/dto/checkout/checkout.dto";
import { VerifyCartResponse } from "@/src/shared/dto/checkout/verify-cart.dto";

import { api } from "@/lib/api/axios";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = CheckoutBodySchema.parse(body);

    const userId = "test-user-id";

    const { data } = await api.post("/checkout", {
      ...parsed,
      userId,
    });

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err: any) {
    console.error("[Checkout Error]", err);
    const message =
      err.response?.data?.message || err.message || "Unknown checkout error";

    return new Response(JSON.stringify({ message }), {
      status: err.response?.status || 400,
    });
  }
}
