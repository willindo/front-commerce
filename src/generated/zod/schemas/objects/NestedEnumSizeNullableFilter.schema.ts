import * as z from 'zod';
import { SizeSchema } from '../enums/Size.schema'

const nestedenumsizenullablefilterSchema = z.object({
  equals: SizeSchema.optional().nullable(),
  in: SizeSchema.array().optional().nullable(),
  notIn: SizeSchema.array().optional().nullable(),
  not: z.union([SizeSchema, z.lazy(() => NestedEnumSizeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumSizeNullableFilterObjectSchema: z.ZodType<any> = nestedenumsizenullablefilterSchema as unknown as z.ZodType<any>;
export const NestedEnumSizeNullableFilterObjectZodSchema = nestedenumsizenullablefilterSchema;
