import * as z from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'price', 'stock', 'images', 'categoryId', 'gender', 'createdAt', 'updatedAt'])

export type ProductScalarFieldEnum = z.infer<typeof ProductScalarFieldEnumSchema>;