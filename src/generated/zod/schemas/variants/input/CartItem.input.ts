import * as z from 'zod';

import { SizeSchema } from '../../enums/Size.schema';
// prettier-ignore
export const CartItemInputSchema = z.object({
    id: z.string(),
    cart: z.unknown(),
    cartId: z.string(),
    product: z.unknown(),
    productId: z.string(),
    size: SizeSchema.optional().nullable(),
    quantity: z.number().int(),
    productName: z.string().optional().nullable(),
    productPrice: z.number().optional().nullable(),
    productDescription: z.string().optional().nullable(),
    productImage: z.string().optional().nullable()
}).strict();

export type CartItemInputType = z.infer<typeof CartItemInputSchema>;
