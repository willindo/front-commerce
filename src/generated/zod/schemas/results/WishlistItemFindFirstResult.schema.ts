import * as z from 'zod';
export const WishlistItemFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  productId: z.string(),
  wishlistId: z.string(),
  product: z.unknown(),
  wishlist: z.unknown()
}));