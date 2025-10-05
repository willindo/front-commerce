import * as z from 'zod';
export const WishlistItemUpsertResultSchema = z.object({
  id: z.string(),
  product: z.unknown(),
  productId: z.string(),
  wishlist: z.unknown(),
  wishlistId: z.string()
});