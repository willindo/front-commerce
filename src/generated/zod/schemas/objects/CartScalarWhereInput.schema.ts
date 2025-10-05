import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const cartscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CartScalarWhereInputObjectSchema), z.lazy(() => CartScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CartScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CartScalarWhereInputObjectSchema), z.lazy(() => CartScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CartScalarWhereInputObjectSchema: z.ZodType<any> = cartscalarwhereinputSchema as unknown as z.ZodType<any>;
export const CartScalarWhereInputObjectZodSchema = cartscalarwhereinputSchema;
