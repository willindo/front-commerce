import { z } from "zod";

export const AddToCartSchema = z.object({
  productId: z.string().uuid(),
  quantity: z.number().int().min(1),
});

export const UpdateCartItemSchema = z.object({
  itemId: z.string().uuid(),
  quantity: z.number().int().min(0), // 0 to remove
});

export const CreateOrderSchema = z.object({
  paymentMethod: z.string().optional(),
  shippingAddress: z
    .object({
      line1: z.string(),
      line2: z.string().optional(),
      city: z.string(),
      state: z.string().optional(),
      postalCode: z.string().optional(),
      country: z.string().optional(),
    })
    .optional(),
});

export type AddToCartInput = z.infer<typeof AddToCartSchema>;
export type UpdateCartItemInput = z.infer<typeof UpdateCartItemSchema>;
export type CreateOrderInput = z.infer<typeof CreateOrderSchema>;
