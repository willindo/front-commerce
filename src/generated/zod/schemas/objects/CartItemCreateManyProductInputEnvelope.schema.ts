import * as z from 'zod';
import { CartItemCreateManyProductInputObjectSchema as CartItemCreateManyProductInputObjectSchema } from './CartItemCreateManyProductInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CartItemCreateManyProductInputObjectSchema), z.lazy(() => CartItemCreateManyProductInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CartItemCreateManyProductInputEnvelopeObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
