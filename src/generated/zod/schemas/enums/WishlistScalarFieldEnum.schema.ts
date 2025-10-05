import * as z from 'zod';

export const WishlistScalarFieldEnumSchema = z.enum(['id', 'userId', 'createdAt'])

export type WishlistScalarFieldEnum = z.infer<typeof WishlistScalarFieldEnumSchema>;