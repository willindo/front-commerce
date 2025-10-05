import * as z from 'zod';
import { CategorySelectObjectSchema as CategorySelectObjectSchema } from './objects/CategorySelect.schema';
import { CategoryCreateManyInputObjectSchema as CategoryCreateManyInputObjectSchema } from './objects/CategoryCreateManyInput.schema';

export const CategoryCreateManyAndReturnSchema: z.ZodType<any> = z.object({ select: CategorySelectObjectSchema.optional(), data: z.union([ CategoryCreateManyInputObjectSchema, z.array(CategoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const CategoryCreateManyAndReturnZodSchema = z.object({ select: CategorySelectObjectSchema.optional(), data: z.union([ CategoryCreateManyInputObjectSchema, z.array(CategoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();