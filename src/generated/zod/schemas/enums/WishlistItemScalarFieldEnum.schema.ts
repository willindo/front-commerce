import * as z from 'zod';

export const WishlistItemScalarFieldEnumSchema = z.enum(['id', 'productId', 'wishlistId'])

export type WishlistItemScalarFieldEnum = z.infer<typeof WishlistItemScalarFieldEnumSchema>;