import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  cartId: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  size: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  productName: z.literal(true).optional(),
  productPrice: z.literal(true).optional(),
  productDescription: z.literal(true).optional(),
  productImage: z.literal(true).optional()
}).strict();
export const CartItemMinAggregateInputObjectSchema: z.ZodType<Prisma.CartItemMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CartItemMinAggregateInputType>;
export const CartItemMinAggregateInputObjectZodSchema = makeSchema();
