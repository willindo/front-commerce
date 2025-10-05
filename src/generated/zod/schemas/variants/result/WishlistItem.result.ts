import * as z from 'zod';

// prettier-ignore
export const WishlistItemResultSchema = z.object({
    id: z.string(),
    product: z.unknown(),
    productId: z.string(),
    wishlist: z.unknown(),
    wishlistId: z.string()
}).strict();

export type WishlistItemResultType = z.infer<typeof WishlistItemResultSchema>;
