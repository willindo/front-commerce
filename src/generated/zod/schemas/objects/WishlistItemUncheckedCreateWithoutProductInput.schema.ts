import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.string().optional(),
  wishlistId: z.string()
}).strict();
export const WishlistItemUncheckedCreateWithoutProductInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
