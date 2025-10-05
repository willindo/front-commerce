import * as z from 'zod';


const makeSchema = () => z.object({
  items: z.boolean().optional()
}).strict();
export const OrderCountOutputTypeSelectObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderCountOutputTypeSelectObjectZodSchema = makeSchema();
