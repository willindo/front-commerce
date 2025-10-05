import * as z from 'zod';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => OrderWhereInputObjectSchema).optional(),
  some: z.lazy(() => OrderWhereInputObjectSchema).optional(),
  none: z.lazy(() => OrderWhereInputObjectSchema).optional()
}).strict();
export const OrderListRelationFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderListRelationFilterObjectZodSchema = makeSchema();
