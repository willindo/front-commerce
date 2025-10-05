import * as z from 'zod';

export const ProductSizeScalarFieldEnumSchema = z.enum(['id', 'size', 'quantity', 'productId'])

export type ProductSizeScalarFieldEnum = z.infer<typeof ProductSizeScalarFieldEnumSchema>;