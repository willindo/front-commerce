import * as z from 'zod';
export const CartItemFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  cartId: z.string(),
  productId: z.string(),
  size: z.unknown().optional(),
  quantity: z.number().int(),
  cart: z.unknown(),
  product: z.unknown(),
  productName: z.string(),
  productPrice: z.number(),
  productDescription: z.string().optional(),
  productImage: z.string().optional()
}));