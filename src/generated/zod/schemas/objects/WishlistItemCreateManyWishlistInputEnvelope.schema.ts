import * as z from 'zod';
import { WishlistItemCreateManyWishlistInputObjectSchema as WishlistItemCreateManyWishlistInputObjectSchema } from './WishlistItemCreateManyWishlistInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WishlistItemCreateManyWishlistInputObjectSchema), z.lazy(() => WishlistItemCreateManyWishlistInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WishlistItemCreateManyWishlistInputEnvelopeObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemCreateManyWishlistInputEnvelopeObjectZodSchema = makeSchema();
