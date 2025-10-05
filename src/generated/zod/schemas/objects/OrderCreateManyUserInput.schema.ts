import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderStatusSchema } from '../enums/OrderStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  total: z.number(),
  status: OrderStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const OrderCreateManyUserInputObjectSchema: z.ZodType<Prisma.OrderCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderCreateManyUserInput>;
export const OrderCreateManyUserInputObjectZodSchema = makeSchema();
