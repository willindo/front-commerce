import * as z from 'zod';
export const ProductSizeFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  size: z.unknown(),
  quantity: z.number().int(),
  product: z.unknown(),
  productId: z.string()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});