import * as z from 'zod';
import { PaymentWhereInputObjectSchema as PaymentWhereInputObjectSchema } from './PaymentWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => PaymentWhereInputObjectSchema).optional(),
  some: z.lazy(() => PaymentWhereInputObjectSchema).optional(),
  none: z.lazy(() => PaymentWhereInputObjectSchema).optional()
}).strict();
export const PaymentListRelationFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const PaymentListRelationFilterObjectZodSchema = makeSchema();
