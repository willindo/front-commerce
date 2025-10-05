import * as z from 'zod';
import { ProductSizeSelectObjectSchema as ProductSizeSelectObjectSchema } from './objects/ProductSizeSelect.schema';
import { ProductSizeIncludeObjectSchema as ProductSizeIncludeObjectSchema } from './objects/ProductSizeInclude.schema';
import { ProductSizeCreateInputObjectSchema as ProductSizeCreateInputObjectSchema } from './objects/ProductSizeCreateInput.schema';
import { ProductSizeUncheckedCreateInputObjectSchema as ProductSizeUncheckedCreateInputObjectSchema } from './objects/ProductSizeUncheckedCreateInput.schema';

export const ProductSizeCreateOneSchema: z.ZodType<any> = z.object({ select: ProductSizeSelectObjectSchema.optional(), include: ProductSizeIncludeObjectSchema.optional(), data: z.union([ProductSizeCreateInputObjectSchema, ProductSizeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<any>;

export const ProductSizeCreateOneZodSchema = z.object({ select: ProductSizeSelectObjectSchema.optional(), include: ProductSizeIncludeObjectSchema.optional(), data: z.union([ProductSizeCreateInputObjectSchema, ProductSizeUncheckedCreateInputObjectSchema]) }).strict();