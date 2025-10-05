import * as z from 'zod';
import { SizeSchema } from '../enums/Size.schema'

const nestedenumsizefilterSchema = z.object({
  equals: SizeSchema.optional(),
  in: SizeSchema.array().optional(),
  notIn: SizeSchema.array().optional(),
  not: z.union([SizeSchema, z.lazy(() => NestedEnumSizeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSizeFilterObjectSchema: z.ZodType<any> = nestedenumsizefilterSchema as unknown as z.ZodType<any>;
export const NestedEnumSizeFilterObjectZodSchema = nestedenumsizefilterSchema;
