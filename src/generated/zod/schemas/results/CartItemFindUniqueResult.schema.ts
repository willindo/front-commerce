import * as z from 'zod';
export const CartItemFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  cart: z.unknown(),
  cartId: z.string(),
  product: z.unknown(),
  productId: z.string(),
  size: z.unknown().optional(),
  quantity: z.number().int(),
  productName: z.string().optional(),
  productPrice: z.number().optional(),
  productDescription: z.string().optional(),
  productImage: z.string().optional()
}));