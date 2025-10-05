import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  orderId: z.string(),
  productId: z.string(),
  quantity: z.number().int(),
  priceAtPurchase: z.number()
}).strict();
export const OrderItemCreateManyInputObjectSchema: z.ZodType<Prisma.OrderItemCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.OrderItemCreateManyInput>;
export const OrderItemCreateManyInputObjectZodSchema = makeSchema();
