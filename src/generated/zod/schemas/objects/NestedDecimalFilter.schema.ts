import * as z from 'zod';


const nesteddecimalfilterSchema = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedDecimalFilterObjectSchema)]).optional()
}).strict();
export const NestedDecimalFilterObjectSchema: z.ZodType<any> = nesteddecimalfilterSchema as unknown as z.ZodType<any>;
export const NestedDecimalFilterObjectZodSchema = nesteddecimalfilterSchema;
