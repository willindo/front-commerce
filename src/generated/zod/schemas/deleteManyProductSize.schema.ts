import * as z from 'zod';
import { ProductSizeWhereInputObjectSchema as ProductSizeWhereInputObjectSchema } from './objects/ProductSizeWhereInput.schema';

export const ProductSizeDeleteManySchema: z.ZodType<any> = z.object({ where: ProductSizeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const ProductSizeDeleteManyZodSchema = z.object({ where: ProductSizeWhereInputObjectSchema.optional() }).strict();