import { z } from "zod";

/**
 * Checkout form schema
 */
export const CheckoutSchema = z.object({
  cartId: z.string(),
  addressId: z.string().uuid().nullable().optional(),
  paymentMethod: z.enum(["stripe", "razorpay"]).optional(),
});

export type CheckoutBody = z.infer<typeof CheckoutSchema>;

/**
 * Verify cart response
 */
export const InvalidCartItemSchema = z.object({
  id: z.string(),
  productId: z.string(),
  productName: z.string(),
  reason: z.string(),
});

// export const VerifyCartResponseSchema = z.object({
//   isValid: z.boolean(),
//   invalidItems: z.array(InvalidCartItemSchema),
// });

export type InvalidCartItem = z.infer<typeof InvalidCartItemSchema>;
// export type VerifyCartResponse = z.infer<typeof VerifyCartResponseSchema>;
