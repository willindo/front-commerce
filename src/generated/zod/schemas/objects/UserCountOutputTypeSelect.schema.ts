import * as z from 'zod';


const makeSchema = () => z.object({
  orders: z.boolean().optional(),
  wishlists: z.boolean().optional(),
  payments: z.boolean().optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
