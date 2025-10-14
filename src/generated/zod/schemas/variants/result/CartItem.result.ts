import * as z from 'zod';

import { SizeSchema } from '../../enums/Size.schema';
// prettier-ignore
export const CartItemResultSchema = z.object({
    id: z.string(),
    cartId: z.string(),
    productId: z.string(),
    size: SizeSchema.nullable(),
    quantity: z.number().int(),
    cart: z.unknown(),
    product: z.unknown(),
    productName: z.string(),
    productPrice: z.number(),
    productDescription: z.string().nullable(),
    productImage: z.string().nullable()
}).strict();

export type CartItemResultType = z.infer<typeof CartItemResultSchema>;
