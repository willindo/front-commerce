import * as z from 'zod';
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
export const CartItemCountOrderByAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
