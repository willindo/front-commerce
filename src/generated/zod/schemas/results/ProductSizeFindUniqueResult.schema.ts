import * as z from 'zod';
export const ProductSizeFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  size: z.unknown(),
  quantity: z.number().int(),
  product: z.unknown(),
  productId: z.string()
}));