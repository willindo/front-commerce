import * as z from 'zod';

import { SizeSchema } from '../../enums/Size.schema';
// prettier-ignore
export const ProductSizeModelSchema = z.object({
    id: z.string(),
    size: SizeSchema,
    quantity: z.number().int(),
    product: z.unknown(),
    productId: z.string()
}).strict();

export type ProductSizeModelType = z.infer<typeof ProductSizeModelSchema>;
