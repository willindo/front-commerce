import * as z from 'zod';
import { UserSelectObjectSchema as UserSelectObjectSchema } from './objects/UserSelect.schema';
import { UserCreateManyInputObjectSchema as UserCreateManyInputObjectSchema } from './objects/UserCreateManyInput.schema';

export const UserCreateManyAndReturnSchema: z.ZodType<any> = z.object({ select: UserSelectObjectSchema.optional(), data: z.union([ UserCreateManyInputObjectSchema, z.array(UserCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const UserCreateManyAndReturnZodSchema = z.object({ select: UserSelectObjectSchema.optional(), data: z.union([ UserCreateManyInputObjectSchema, z.array(UserCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();