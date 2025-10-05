import * as z from 'zod';

// prettier-ignore
export const CartInputSchema = z.object({
    id: z.string(),
    user: z.unknown(),
    userId: z.string(),
    items: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CartInputType = z.infer<typeof CartInputSchema>;
