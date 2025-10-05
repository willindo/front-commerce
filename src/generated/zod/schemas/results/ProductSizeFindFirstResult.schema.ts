import * as z from 'zod';
export const ProductSizeFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  size: z.unknown(),
  quantity: z.number().int(),
  product: z.unknown(),
  productId: z.string()
}));