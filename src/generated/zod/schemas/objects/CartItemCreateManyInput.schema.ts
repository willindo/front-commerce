import * as z from 'zod';
import { SizeSchema } from '../enums/Size.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  cartId: z.string(),
  productId: z.string(),
  size: SizeSchema.optional().nullable(),
  quantity: z.number().int().optional(),
  productName: z.string(),
  productPrice: z.number(),
  productDescription: z.string().optional().nullable(),
  productImage: z.string().optional().nullable()
}).strict();
export const CartItemCreateManyInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemCreateManyInputObjectZodSchema = makeSchema();
