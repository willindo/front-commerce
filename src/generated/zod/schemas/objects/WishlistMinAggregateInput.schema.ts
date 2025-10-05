import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const WishlistMinAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistMinAggregateInputObjectZodSchema = makeSchema();
