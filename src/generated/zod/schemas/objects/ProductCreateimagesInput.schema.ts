import * as z from 'zod';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const ProductCreateimagesInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductCreateimagesInputObjectZodSchema = makeSchema();
