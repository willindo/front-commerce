import * as z from 'zod';
import { CartItemCreateManyCartInputObjectSchema as CartItemCreateManyCartInputObjectSchema } from './CartItemCreateManyCartInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CartItemCreateManyCartInputObjectSchema), z.lazy(() => CartItemCreateManyCartInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CartItemCreateManyCartInputEnvelopeObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemCreateManyCartInputEnvelopeObjectZodSchema = makeSchema();
