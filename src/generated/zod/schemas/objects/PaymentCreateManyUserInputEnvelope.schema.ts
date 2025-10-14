import * as z from 'zod';
import { PaymentCreateManyUserInputObjectSchema as PaymentCreateManyUserInputObjectSchema } from './PaymentCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PaymentCreateManyUserInputObjectSchema), z.lazy(() => PaymentCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PaymentCreateManyUserInputEnvelopeObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const PaymentCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
