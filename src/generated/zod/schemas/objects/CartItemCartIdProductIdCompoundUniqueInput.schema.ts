import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  cartId: z.string(),
  productId: z.string()
}).strict();
export const CartItemCartIdProductIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.CartItemCartIdProductIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemCartIdProductIdCompoundUniqueInput>;
export const CartItemCartIdProductIdCompoundUniqueInputObjectZodSchema = makeSchema();
