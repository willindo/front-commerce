import * as z from 'zod';

// prettier-ignore
export const WishlistResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    items: z.array(z.unknown()),
    createdAt: z.date()
}).strict();

export type WishlistResultType = z.infer<typeof WishlistResultSchema>;
