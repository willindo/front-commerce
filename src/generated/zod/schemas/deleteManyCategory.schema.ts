import * as z from 'zod';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './objects/CategoryWhereInput.schema';

export const CategoryDeleteManySchema: z.ZodType<any> = z.object({ where: CategoryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const CategoryDeleteManyZodSchema = z.object({ where: CategoryWhereInputObjectSchema.optional() }).strict();