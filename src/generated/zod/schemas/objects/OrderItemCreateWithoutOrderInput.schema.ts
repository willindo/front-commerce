import * as z from 'zod';
import { ProductCreateNestedOneWithoutOrderItemsInputObjectSchema as ProductCreateNestedOneWithoutOrderItemsInputObjectSchema } from './ProductCreateNestedOneWithoutOrderItemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  quantity: z.number().int(),
  priceAtPurchase: z.number(),
  product: z.lazy(() => ProductCreateNestedOneWithoutOrderItemsInputObjectSchema)
}).strict();
export const OrderItemCreateWithoutOrderInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderItemCreateWithoutOrderInputObjectZodSchema = makeSchema();
