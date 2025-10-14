import * as z from 'zod';
import { NestedDecimalFilterObjectSchema as NestedDecimalFilterObjectSchema } from './NestedDecimalFilter.schema'

const makeSchema = () => z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedDecimalFilterObjectSchema)]).optional()
}).strict();
export const DecimalFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const DecimalFilterObjectZodSchema = makeSchema();
