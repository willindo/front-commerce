import * as z from 'zod';
import { OrderCreateNestedOneWithoutItemsInputObjectSchema as OrderCreateNestedOneWithoutItemsInputObjectSchema } from './OrderCreateNestedOneWithoutItemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int(),
  priceAtPurchase: z.number(),
  order: z.lazy(() => OrderCreateNestedOneWithoutItemsInputObjectSchema)
}).strict();
export const OrderItemCreateWithoutProductInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderItemCreateWithoutProductInputObjectZodSchema = makeSchema();
