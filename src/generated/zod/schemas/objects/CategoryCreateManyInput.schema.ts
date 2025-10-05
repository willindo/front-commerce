import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string()
}).strict();
export const CategoryCreateManyInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CategoryCreateManyInputObjectZodSchema = makeSchema();
