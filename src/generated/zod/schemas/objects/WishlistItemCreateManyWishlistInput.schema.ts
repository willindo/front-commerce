import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string()
}).strict();
export const WishlistItemCreateManyWishlistInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemCreateManyWishlistInputObjectZodSchema = makeSchema();
