import * as z from 'zod';
import { WishlistItemCreateManyProductInputObjectSchema as WishlistItemCreateManyProductInputObjectSchema } from './WishlistItemCreateManyProductInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WishlistItemCreateManyProductInputObjectSchema), z.lazy(() => WishlistItemCreateManyProductInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WishlistItemCreateManyProductInputEnvelopeObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
