import * as z from 'zod';

import { SizeSchema } from '../../enums/Size.schema';
// prettier-ignore
export const CartItemInputSchema = z.object({
    id: z.string(),
    cartId: z.string(),
    productId: z.string(),
    size: SizeSchema.optional().nullable(),
    quantity: z.number().int(),
    cart: z.unknown(),
    product: z.unknown(),
    productName: z.string(),
    productPrice: z.number(),
    productDescription: z.string().optional().nullable(),
    productImage: z.string().optional().nullable()
}).strict();

export type CartItemInputType = z.infer<typeof CartItemInputSchema>;
