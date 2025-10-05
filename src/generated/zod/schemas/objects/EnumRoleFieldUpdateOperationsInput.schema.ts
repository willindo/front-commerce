import * as z from 'zod';
import { RoleSchema } from '../enums/Role.schema'

const makeSchema = () => z.object({
  set: RoleSchema.optional()
}).strict();
export const EnumRoleFieldUpdateOperationsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const EnumRoleFieldUpdateOperationsInputObjectZodSchema = makeSchema();
