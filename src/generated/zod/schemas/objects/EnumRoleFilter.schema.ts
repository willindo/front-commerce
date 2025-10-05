import * as z from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { NestedEnumRoleFilterObjectSchema as NestedEnumRoleFilterObjectSchema } from './NestedEnumRoleFilter.schema'

const makeSchema = () => z.object({
  equals: RoleSchema.optional(),
  in: RoleSchema.array().optional(),
  notIn: RoleSchema.array().optional(),
  not: z.union([RoleSchema, z.lazy(() => NestedEnumRoleFilterObjectSchema)]).optional()
}).strict();
export const EnumRoleFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const EnumRoleFilterObjectZodSchema = makeSchema();
