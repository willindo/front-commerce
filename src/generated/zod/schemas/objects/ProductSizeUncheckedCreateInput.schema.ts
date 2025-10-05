import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  size: SizeSchema,
  quantity: z.number().int(),
  productId: z.string()
}).strict();
export const ProductSizeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProductSizeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeUncheckedCreateInput>;
export const ProductSizeUncheckedCreateInputObjectZodSchema = makeSchema();
