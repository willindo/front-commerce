import * as z from 'zod';

import { SizeSchema } from '../../enums/Size.schema';
// prettier-ignore
export const CartItemModelSchema = z.object({
    id: z.string(),
    cart: z.unknown(),
    cartId: z.string(),
    product: z.unknown(),
    productId: z.string(),
    size: SizeSchema.nullable(),
    quantity: z.number().int(),
    productName: z.string().nullable(),
    productPrice: z.number().nullable(),
    productDescription: z.string().nullable(),
    productImage: z.string().nullable()
}).strict();

export type CartItemModelType = z.infer<typeof CartItemModelSchema>;
