import * as z from 'zod';
import { SizeSchema } from '../enums/Size.schema';
import { ProductCreateNestedOneWithoutSizesInputObjectSchema as ProductCreateNestedOneWithoutSizesInputObjectSchema } from './ProductCreateNestedOneWithoutSizesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  size: SizeSchema,
  quantity: z.number().int().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutSizesInputObjectSchema)
}).strict();
export const ProductSizeCreateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductSizeCreateInputObjectZodSchema = makeSchema();
