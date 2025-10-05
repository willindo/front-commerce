import * as z from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRoleFilterObjectSchema as NestedEnumRoleFilterObjectSchema } from './NestedEnumRoleFilter.schema'

const nestedenumrolewithaggregatesfilterSchema = z.object({
  equals: RoleSchema.optional(),
  in: RoleSchema.array().optional(),
  notIn: RoleSchema.array().optional(),
  not: z.union([RoleSchema, z.lazy(() => NestedEnumRoleWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterObjectSchema).optional()
}).strict();
export const NestedEnumRoleWithAggregatesFilterObjectSchema: z.ZodType<any> = nestedenumrolewithaggregatesfilterSchema as unknown as z.ZodType<any>;
export const NestedEnumRoleWithAggregatesFilterObjectZodSchema = nestedenumrolewithaggregatesfilterSchema;
