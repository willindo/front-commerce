import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  price: z.literal(true).optional(),
  stock: z.literal(true).optional(),
  images: z.literal(true).optional(),
  categoryId: z.literal(true).optional(),
  gender: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProductCountAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductCountAggregateInputObjectZodSchema = makeSchema();
