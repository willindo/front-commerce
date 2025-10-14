import * as z from 'zod';

// prettier-ignore
export const WishlistItemInputSchema = z.object({
    id: z.string(),
    productId: z.string(),
    wishlistId: z.string(),
    product: z.unknown(),
    wishlist: z.unknown()
}).strict();

export type WishlistItemInputType = z.infer<typeof WishlistItemInputSchema>;
