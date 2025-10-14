import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema'

const orderitemscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OrderItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  orderId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  priceAtPurchase: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional()
}).strict();
export const OrderItemScalarWhereWithAggregatesInputObjectSchema: z.ZodType<any> = orderitemscalarwherewithaggregatesinputSchema as unknown as z.ZodType<any>;
export const OrderItemScalarWhereWithAggregatesInputObjectZodSchema = orderitemscalarwherewithaggregatesinputSchema;
