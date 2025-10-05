import * as z from 'zod';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => UserWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserScalarRelationFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserScalarRelationFilterObjectZodSchema = makeSchema();
