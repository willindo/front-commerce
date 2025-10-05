import * as z from 'zod';


const makeSchema = () => z.object({
  cartId: z.string(),
  productId: z.string()
}).strict();
export const CartItemCartIdProductIdCompoundUniqueInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemCartIdProductIdCompoundUniqueInputObjectZodSchema = makeSchema();
