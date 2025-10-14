import * as z from 'zod';
import { SizeSchema } from '../enums/Size.schema'

const makeSchema = () => z.object({
  cartId: z.string(),
  productId: z.string(),
  size: SizeSchema
}).strict();
export const CartItemCartIdProductIdSizeCompoundUniqueInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemCartIdProductIdSizeCompoundUniqueInputObjectZodSchema = makeSchema();
