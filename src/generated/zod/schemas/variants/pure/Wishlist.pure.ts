import * as z from 'zod';

// prettier-ignore
export const WishlistModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    items: z.array(z.unknown()),
    createdAt: z.date()
}).strict();

export type WishlistPureType = z.infer<typeof WishlistModelSchema>;
