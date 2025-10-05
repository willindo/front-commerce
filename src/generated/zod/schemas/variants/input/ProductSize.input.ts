import * as z from 'zod';

import { SizeSchema } from '../../enums/Size.schema';
// prettier-ignore
export const ProductSizeInputSchema = z.object({
    id: z.string(),
    size: SizeSchema,
    quantity: z.number().int(),
    product: z.unknown(),
    productId: z.string()
}).strict();

export type ProductSizeInputType = z.infer<typeof ProductSizeInputSchema>;
