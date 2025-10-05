import * as z from 'zod';
import { ProductSelectObjectSchema as ProductSelectObjectSchema } from './objects/ProductSelect.schema';
import { ProductIncludeObjectSchema as ProductIncludeObjectSchema } from './objects/ProductInclude.schema';
import { ProductCreateInputObjectSchema as ProductCreateInputObjectSchema } from './objects/ProductCreateInput.schema';
import { ProductUncheckedCreateInputObjectSchema as ProductUncheckedCreateInputObjectSchema } from './objects/ProductUncheckedCreateInput.schema';

export const ProductCreateOneSchema: z.ZodType<any> = z.object({ select: ProductSelectObjectSchema.optional(), include: ProductIncludeObjectSchema.optional(), data: z.union([ProductCreateInputObjectSchema, ProductUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<any>;

export const ProductCreateOneZodSchema = z.object({ select: ProductSelectObjectSchema.optional(), include: ProductIncludeObjectSchema.optional(), data: z.union([ProductCreateInputObjectSchema, ProductUncheckedCreateInputObjectSchema]) }).strict();