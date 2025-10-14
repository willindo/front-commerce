import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { EnumOrderStatusWithAggregatesFilterObjectSchema as EnumOrderStatusWithAggregatesFilterObjectSchema } from './EnumOrderStatusWithAggregatesFilter.schema';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumPaymentStatusWithAggregatesFilterObjectSchema as EnumPaymentStatusWithAggregatesFilterObjectSchema } from './EnumPaymentStatusWithAggregatesFilter.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const orderscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => OrderScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OrderScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OrderScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OrderScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OrderScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  total: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  status: z.union([z.lazy(() => EnumOrderStatusWithAggregatesFilterObjectSchema), OrderStatusSchema]).optional(),
  paymentId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  paymentStatus: z.union([z.lazy(() => EnumPaymentStatusWithAggregatesFilterObjectSchema), PaymentStatusSchema]).optional(),
  address: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const OrderScalarWhereWithAggregatesInputObjectSchema: z.ZodType<any> = orderscalarwherewithaggregatesinputSchema as unknown as z.ZodType<any>;
export const OrderScalarWhereWithAggregatesInputObjectZodSchema = orderscalarwherewithaggregatesinputSchema;
