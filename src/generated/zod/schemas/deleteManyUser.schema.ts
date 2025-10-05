import * as z from 'zod';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';

export const UserDeleteManySchema: z.ZodType<any> = z.object({ where: UserWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const UserDeleteManyZodSchema = z.object({ where: UserWhereInputObjectSchema.optional() }).strict();