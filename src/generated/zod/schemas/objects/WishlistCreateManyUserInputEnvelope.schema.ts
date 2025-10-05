import * as z from 'zod';
import { WishlistCreateManyUserInputObjectSchema as WishlistCreateManyUserInputObjectSchema } from './WishlistCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WishlistCreateManyUserInputObjectSchema), z.lazy(() => WishlistCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WishlistCreateManyUserInputEnvelopeObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
