import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  total: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const OrderCountAggregateInputObjectSchema: z.ZodType<Prisma.OrderCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrderCountAggregateInputType>;
export const OrderCountAggregateInputObjectZodSchema = makeSchema();
