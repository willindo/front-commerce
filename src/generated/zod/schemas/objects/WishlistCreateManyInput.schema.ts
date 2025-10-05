import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const WishlistCreateManyInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistCreateManyInputObjectZodSchema = makeSchema();
