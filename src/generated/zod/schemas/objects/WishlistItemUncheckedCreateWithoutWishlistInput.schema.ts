import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string()
}).strict();
export const WishlistItemUncheckedCreateWithoutWishlistInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemUncheckedCreateWithoutWishlistInputObjectZodSchema = makeSchema();
