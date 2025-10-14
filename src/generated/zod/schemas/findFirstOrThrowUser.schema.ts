import * as z from 'zod';
import { UserIncludeObjectSchema as UserIncludeObjectSchema } from './objects/UserInclude.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './objects/UserOrderByWithRelationInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './objects/UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './objects/UserWhereUniqueInput.schema';
import { UserScalarFieldEnumSchema } from './enums/UserScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserFindFirstOrThrowSelectSchema: z.ZodType<any> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    name: z.boolean().optional(),
    role: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    cart: z.boolean().optional(),
    orders: z.boolean().optional(),
    wishlists: z.boolean().optional(),
    payments: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<any>;

export const UserFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    name: z.boolean().optional(),
    role: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    cart: z.boolean().optional(),
    orders: z.boolean().optional(),
    wishlists: z.boolean().optional(),
    payments: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const UserFindFirstOrThrowSchema: z.ZodType<any> = z.object({ select: UserFindFirstOrThrowSelectSchema.optional(), include: UserIncludeObjectSchema.optional(), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<any>;

export const UserFindFirstOrThrowZodSchema = z.object({ select: UserFindFirstOrThrowSelectSchema.optional(), include: UserIncludeObjectSchema.optional(), orderBy: z.union([UserOrderByWithRelationInputObjectSchema, UserOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserWhereInputObjectSchema.optional(), cursor: UserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()]).optional() }).strict();