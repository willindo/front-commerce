import { api } from "@/lib/api/axios";
import {
  CheckoutBody,
  VerifyCartResponse,
  VerifyCartResponseSchema,
} from "../types/checkout";

/**
 * Replace with authenticated user ID or use context
 */
const TEMP_USER_ID = "test-user-id";

/**
 * Checkout API call
 */
export async function checkout(payload: CheckoutBody) {
  const { data } = await api.post("/checkout", payload);
  return data;
}

/**
 * Verify cart API call
 */
export async function verifyCart(): Promise<VerifyCartResponse> {
  const { data } = await api.get("/cart/verify");
  return VerifyCartResponseSchema.parse(data);
}
