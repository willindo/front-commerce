import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WishlistCreateManyUserInputObjectSchema as WishlistCreateManyUserInputObjectSchema } from './WishlistCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WishlistCreateManyUserInputObjectSchema), z.lazy(() => WishlistCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WishlistCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.WishlistCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WishlistCreateManyUserInputEnvelope>;
export const WishlistCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
