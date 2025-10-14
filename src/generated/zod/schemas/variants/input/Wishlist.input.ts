import * as z from 'zod';

// prettier-ignore
export const WishlistInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    items: z.array(z.unknown()),
    createdAt: z.date()
}).strict();

export type WishlistInputType = z.infer<typeof WishlistInputSchema>;
