import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema';
import { ProductCreateNestedOneWithoutSizesInputObjectSchema as ProductCreateNestedOneWithoutSizesInputObjectSchema } from './ProductCreateNestedOneWithoutSizesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  size: SizeSchema,
  quantity: z.number().int(),
  product: z.lazy(() => ProductCreateNestedOneWithoutSizesInputObjectSchema)
}).strict();
export const ProductSizeCreateInputObjectSchema: z.ZodType<Prisma.ProductSizeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeCreateInput>;
export const ProductSizeCreateInputObjectZodSchema = makeSchema();
