import * as z from 'zod';
export const WishlistItemFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  product: z.unknown(),
  productId: z.string(),
  wishlist: z.unknown(),
  wishlistId: z.string()
}));