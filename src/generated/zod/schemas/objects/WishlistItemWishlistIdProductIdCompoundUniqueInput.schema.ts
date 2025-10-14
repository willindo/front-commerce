import * as z from 'zod';


const makeSchema = () => z.object({
  wishlistId: z.string(),
  productId: z.string()
}).strict();
export const WishlistItemWishlistIdProductIdCompoundUniqueInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemWishlistIdProductIdCompoundUniqueInputObjectZodSchema = makeSchema();
