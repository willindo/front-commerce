import * as z from 'zod';

import { GenderSchema } from '../../enums/Gender.schema';
// prettier-ignore
export const ProductModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    price: z.number(),
    stock: z.number().int(),
    images: z.array(z.string()),
    category: z.unknown().nullable(),
    categoryId: z.string().nullable(),
    gender: GenderSchema.nullable(),
    sizes: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date(),
    cartItems: z.array(z.unknown()),
    wishlistItems: z.array(z.unknown()),
    orderItems: z.array(z.unknown())
}).strict();

export type ProductModelType = z.infer<typeof ProductModelSchema>;
