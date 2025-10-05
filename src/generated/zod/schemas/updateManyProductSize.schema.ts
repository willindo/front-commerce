import * as z from 'zod';
import { ProductSizeUpdateManyMutationInputObjectSchema as ProductSizeUpdateManyMutationInputObjectSchema } from './objects/ProductSizeUpdateManyMutationInput.schema';
import { ProductSizeWhereInputObjectSchema as ProductSizeWhereInputObjectSchema } from './objects/ProductSizeWhereInput.schema';

export const ProductSizeUpdateManySchema: z.ZodType<any> = z.object({ data: ProductSizeUpdateManyMutationInputObjectSchema, where: ProductSizeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const ProductSizeUpdateManyZodSchema = z.object({ data: ProductSizeUpdateManyMutationInputObjectSchema, where: ProductSizeWhereInputObjectSchema.optional() }).strict();