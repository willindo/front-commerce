import * as z from 'zod';

import { GenderSchema } from '../../enums/Gender.schema';
// prettier-ignore
export const ProductInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional().nullable(),
    price: z.number(),
    stock: z.number().int(),
    images: z.array(z.string()),
    category: z.unknown().optional().nullable(),
    categoryId: z.string().optional().nullable(),
    gender: GenderSchema.optional().nullable(),
    sizes: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    cartItems: z.array(z.unknown()),
    wishlistItems: z.array(z.unknown()),
    orderItems: z.array(z.unknown())
}).strict();

export type ProductInputType = z.infer<typeof ProductInputSchema>;
