import * as z from 'zod';
import { ProductIncludeObjectSchema as ProductIncludeObjectSchema } from './objects/ProductInclude.schema';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './objects/ProductOrderByWithRelationInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './objects/ProductWhereInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './objects/ProductWhereUniqueInput.schema';
import { ProductScalarFieldEnumSchema } from './enums/ProductScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductFindFirstSelectSchema: z.ZodType<any> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    price: z.boolean().optional(),
    stock: z.boolean().optional(),
    images: z.boolean().optional(),
    category: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    gender: z.boolean().optional(),
    sizes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    cartItems: z.boolean().optional(),
    wishlistItems: z.boolean().optional(),
    orderItems: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<any>;

export const ProductFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    price: z.boolean().optional(),
    stock: z.boolean().optional(),
    images: z.boolean().optional(),
    category: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    gender: z.boolean().optional(),
    sizes: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    cartItems: z.boolean().optional(),
    wishlistItems: z.boolean().optional(),
    orderItems: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ProductFindFirstSchema: z.ZodType<any> = z.object({ select: ProductFindFirstSelectSchema.optional(), include: z.lazy(() => ProductIncludeObjectSchema.optional()), orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductWhereInputObjectSchema.optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<any>;

export const ProductFindFirstZodSchema = z.object({ select: ProductFindFirstSelectSchema.optional(), include: z.lazy(() => ProductIncludeObjectSchema.optional()), orderBy: z.union([ProductOrderByWithRelationInputObjectSchema, ProductOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductWhereInputObjectSchema.optional(), cursor: ProductWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array()]).optional() }).strict();