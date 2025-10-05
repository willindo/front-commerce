import * as z from 'zod';

// prettier-ignore
export const WishlistItemInputSchema = z.object({
    id: z.string(),
    product: z.unknown(),
    productId: z.string(),
    wishlist: z.unknown(),
    wishlistId: z.string()
}).strict();

export type WishlistItemInputType = z.infer<typeof WishlistItemInputSchema>;
