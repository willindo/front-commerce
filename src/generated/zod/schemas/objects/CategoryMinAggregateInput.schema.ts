import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional()
}).strict();
export const CategoryMinAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CategoryMinAggregateInputObjectZodSchema = makeSchema();
