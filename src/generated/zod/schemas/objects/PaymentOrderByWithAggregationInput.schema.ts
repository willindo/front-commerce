import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PaymentCountOrderByAggregateInputObjectSchema as PaymentCountOrderByAggregateInputObjectSchema } from './PaymentCountOrderByAggregateInput.schema';
import { PaymentAvgOrderByAggregateInputObjectSchema as PaymentAvgOrderByAggregateInputObjectSchema } from './PaymentAvgOrderByAggregateInput.schema';
import { PaymentMaxOrderByAggregateInputObjectSchema as PaymentMaxOrderByAggregateInputObjectSchema } from './PaymentMaxOrderByAggregateInput.schema';
import { PaymentMinOrderByAggregateInputObjectSchema as PaymentMinOrderByAggregateInputObjectSchema } from './PaymentMinOrderByAggregateInput.schema';
import { PaymentSumOrderByAggregateInputObjectSchema as PaymentSumOrderByAggregateInputObjectSchema } from './PaymentSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  razorpayOrderId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  razorpayPaymentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  signature: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  amount: SortOrderSchema.optional(),
  currency: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => PaymentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PaymentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PaymentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PaymentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PaymentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PaymentOrderByWithAggregationInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const PaymentOrderByWithAggregationInputObjectZodSchema = makeSchema();
