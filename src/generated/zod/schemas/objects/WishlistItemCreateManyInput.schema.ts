import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string(),
  wishlistId: z.string()
}).strict();
export const WishlistItemCreateManyInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemCreateManyInputObjectZodSchema = makeSchema();
