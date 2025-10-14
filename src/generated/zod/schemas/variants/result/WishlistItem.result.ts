import * as z from 'zod';

// prettier-ignore
export const WishlistItemResultSchema = z.object({
    id: z.string(),
    productId: z.string(),
    wishlistId: z.string(),
    product: z.unknown(),
    wishlist: z.unknown()
}).strict();

export type WishlistItemResultType = z.infer<typeof WishlistItemResultSchema>;
