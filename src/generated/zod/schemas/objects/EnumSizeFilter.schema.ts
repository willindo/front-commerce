import * as z from 'zod';
import { SizeSchema } from '../enums/Size.schema';
import { NestedEnumSizeFilterObjectSchema as NestedEnumSizeFilterObjectSchema } from './NestedEnumSizeFilter.schema'

const makeSchema = () => z.object({
  equals: SizeSchema.optional(),
  in: SizeSchema.array().optional(),
  notIn: SizeSchema.array().optional(),
  not: z.union([SizeSchema, z.lazy(() => NestedEnumSizeFilterObjectSchema)]).optional()
}).strict();
export const EnumSizeFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const EnumSizeFilterObjectZodSchema = makeSchema();
