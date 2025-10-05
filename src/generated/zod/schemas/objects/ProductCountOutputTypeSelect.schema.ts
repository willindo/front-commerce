import * as z from 'zod';


const makeSchema = () => z.object({
  sizes: z.boolean().optional(),
  cartItems: z.boolean().optional(),
  wishlistItems: z.boolean().optional(),
  orderItems: z.boolean().optional()
}).strict();
export const ProductCountOutputTypeSelectObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductCountOutputTypeSelectObjectZodSchema = makeSchema();
