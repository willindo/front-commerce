import * as z from 'zod';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './objects/ProductWhereInput.schema';

export const ProductDeleteManySchema: z.ZodType<any> = z.object({ where: ProductWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const ProductDeleteManyZodSchema = z.object({ where: ProductWhereInputObjectSchema.optional() }).strict();