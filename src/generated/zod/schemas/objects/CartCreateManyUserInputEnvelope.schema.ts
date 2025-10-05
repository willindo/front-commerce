import * as z from 'zod';
import { CartCreateManyUserInputObjectSchema as CartCreateManyUserInputObjectSchema } from './CartCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CartCreateManyUserInputObjectSchema), z.lazy(() => CartCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CartCreateManyUserInputEnvelopeObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
