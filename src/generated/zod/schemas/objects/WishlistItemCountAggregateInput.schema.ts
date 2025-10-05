import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  wishlistId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const WishlistItemCountAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemCountAggregateInputObjectZodSchema = makeSchema();
