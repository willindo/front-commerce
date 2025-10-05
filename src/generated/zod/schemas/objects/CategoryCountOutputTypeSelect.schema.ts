import * as z from 'zod';


const makeSchema = () => z.object({
  products: z.boolean().optional()
}).strict();
export const CategoryCountOutputTypeSelectObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CategoryCountOutputTypeSelectObjectZodSchema = makeSchema();
