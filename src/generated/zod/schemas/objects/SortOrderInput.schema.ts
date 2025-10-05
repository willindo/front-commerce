import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { NullsOrderSchema } from '../enums/NullsOrder.schema'

const makeSchema = () => z.object({
  sort: SortOrderSchema,
  nulls: NullsOrderSchema.optional()
}).strict();
export const SortOrderInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const SortOrderInputObjectZodSchema = makeSchema();
