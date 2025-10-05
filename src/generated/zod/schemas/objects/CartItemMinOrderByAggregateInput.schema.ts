import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cartId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  productName: SortOrderSchema.optional(),
  productPrice: SortOrderSchema.optional(),
  productDescription: SortOrderSchema.optional(),
  productImage: SortOrderSchema.optional()
}).strict();
export const CartItemMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CartItemMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartItemMinOrderByAggregateInput>;
export const CartItemMinOrderByAggregateInputObjectZodSchema = makeSchema();
