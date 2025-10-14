import * as z from 'zod';
export const WishlistItemUpsertResultSchema = z.object({
  id: z.string(),
  productId: z.string(),
  wishlistId: z.string(),
  product: z.unknown(),
  wishlist: z.unknown()
});