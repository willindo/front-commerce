import * as z from 'zod';
import { ProductCreateimagesInputObjectSchema as ProductCreateimagesInputObjectSchema } from './ProductCreateimagesInput.schema';
import { GenderSchema } from '../enums/Gender.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  price: z.number(),
  stock: z.number().int().optional(),
  images: z.union([z.lazy(() => ProductCreateimagesInputObjectSchema), z.string().array()]).optional(),
  gender: GenderSchema.optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ProductCreateManyCategoryInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductCreateManyCategoryInputObjectZodSchema = makeSchema();
