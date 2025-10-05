import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  wishlistId: z.literal(true).optional()
}).strict();
export const WishlistItemMaxAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemMaxAggregateInputObjectZodSchema = makeSchema();
