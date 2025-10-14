import * as z from 'zod';

// prettier-ignore
export const WishlistItemModelSchema = z.object({
    id: z.string(),
    productId: z.string(),
    wishlistId: z.string(),
    product: z.unknown(),
    wishlist: z.unknown()
}).strict();

export type WishlistItemPureType = z.infer<typeof WishlistItemModelSchema>;
