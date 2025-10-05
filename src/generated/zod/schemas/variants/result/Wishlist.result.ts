import * as z from 'zod';

// prettier-ignore
export const WishlistResultSchema = z.object({
    id: z.string(),
    user: z.unknown(),
    userId: z.string(),
    items: z.array(z.unknown()),
    createdAt: z.date()
}).strict();

export type WishlistResultType = z.infer<typeof WishlistResultSchema>;
