import * as z from 'zod';
import { OrderItemCreateManyOrderInputObjectSchema as OrderItemCreateManyOrderInputObjectSchema } from './OrderItemCreateManyOrderInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OrderItemCreateManyOrderInputObjectSchema), z.lazy(() => OrderItemCreateManyOrderInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OrderItemCreateManyOrderInputEnvelopeObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderItemCreateManyOrderInputEnvelopeObjectZodSchema = makeSchema();
