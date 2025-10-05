import * as z from 'zod';
export const WishlistItemGroupByResultSchema = z.array(z.object({
  id: z.string(),
  productId: z.string(),
  wishlistId: z.string(),
  _count: z.object({
    id: z.number(),
    product: z.number(),
    productId: z.number(),
    wishlist: z.number(),
    wishlistId: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    productId: z.string().nullable(),
    wishlistId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    productId: z.string().nullable(),
    wishlistId: z.string().nullable()
  }).nullable().optional()
}));