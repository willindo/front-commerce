import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  total: z.literal(true).optional(),
  status: z.literal(true).optional(),
  paymentId: z.literal(true).optional(),
  paymentStatus: z.literal(true).optional(),
  notes: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const OrderMinAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderMinAggregateInputObjectZodSchema = makeSchema();
