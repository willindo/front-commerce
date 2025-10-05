import * as z from 'zod';

// prettier-ignore
export const WishlistModelSchema = z.object({
    id: z.string(),
    user: z.unknown(),
    userId: z.string(),
    items: z.array(z.unknown()),
    createdAt: z.date()
}).strict();

export type WishlistModelType = z.infer<typeof WishlistModelSchema>;
