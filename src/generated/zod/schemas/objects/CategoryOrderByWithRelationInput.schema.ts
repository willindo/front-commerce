import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductOrderByRelationAggregateInputObjectSchema as ProductOrderByRelationAggregateInputObjectSchema } from './ProductOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CategoryOrderByWithRelationInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CategoryOrderByWithRelationInputObjectZodSchema = makeSchema();
