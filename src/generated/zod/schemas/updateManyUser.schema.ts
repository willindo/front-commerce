import * as z from 'zod';
import { UserUpdateManyMutationInputObjectSchema as UserUpdateManyMutationInputObjectSchema } from './objects/UserUpdateManyMutationInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';

export const UserUpdateManySchema: z.ZodType<any> = z.object({ data: UserUpdateManyMutationInputObjectSchema, where: UserWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const UserUpdateManyZodSchema = z.object({ data: UserUpdateManyMutationInputObjectSchema, where: UserWhereInputObjectSchema.optional() }).strict();