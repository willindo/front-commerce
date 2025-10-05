import * as z from 'zod';
import { ProductFindManySchema as ProductFindManySchema } from '../findManyProduct.schema';
import { CategoryCountOutputTypeArgsObjectSchema as CategoryCountOutputTypeArgsObjectSchema } from './CategoryCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  products: z.union([z.boolean(), z.lazy(() => ProductFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CategoryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CategorySelectObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CategorySelectObjectZodSchema = makeSchema();
