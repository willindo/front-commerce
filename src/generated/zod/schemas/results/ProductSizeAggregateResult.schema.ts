import * as z from 'zod';
export const ProductSizeAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    size: z.number(),
    quantity: z.number(),
    product: z.number(),
    productId: z.number()
  }).optional(),
  _sum: z.object({
    quantity: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    quantity: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    quantity: z.number().int().nullable(),
    productId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    quantity: z.number().int().nullable(),
    productId: z.string().nullable()
  }).nullable().optional()});