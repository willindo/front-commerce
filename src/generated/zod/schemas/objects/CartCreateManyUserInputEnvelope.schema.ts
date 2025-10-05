import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CartCreateManyUserInputObjectSchema as CartCreateManyUserInputObjectSchema } from './CartCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CartCreateManyUserInputObjectSchema), z.lazy(() => CartCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CartCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.CartCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CartCreateManyUserInputEnvelope>;
export const CartCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
