import * as z from 'zod';


const makeSchema = () => z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const StringNullableListFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const StringNullableListFilterObjectZodSchema = makeSchema();
