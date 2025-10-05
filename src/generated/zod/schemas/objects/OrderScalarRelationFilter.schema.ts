import * as z from 'zod';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './OrderWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => OrderWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => OrderWhereInputObjectSchema).optional()
}).strict();
export const OrderScalarRelationFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderScalarRelationFilterObjectZodSchema = makeSchema();
