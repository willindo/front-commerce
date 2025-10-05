import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  orderId: z.string(),
  quantity: z.number().int(),
  priceAtPurchase: z.number()
}).strict();
export const OrderItemCreateManyProductInputObjectSchema: z.ZodType<Prisma.OrderItemCreateManyProductInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateManyProductInput>;
export const OrderItemCreateManyProductInputObjectZodSchema = makeSchema();
