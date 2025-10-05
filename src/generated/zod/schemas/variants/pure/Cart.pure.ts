import * as z from 'zod';

// prettier-ignore
export const CartModelSchema = z.object({
    id: z.string(),
    user: z.unknown(),
    userId: z.string(),
    items: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CartModelType = z.infer<typeof CartModelSchema>;
