import * as z from 'zod';
import { CartItemIncludeObjectSchema as CartItemIncludeObjectSchema } from './objects/CartItemInclude.schema';
import { CartItemOrderByWithRelationInputObjectSchema as CartItemOrderByWithRelationInputObjectSchema } from './objects/CartItemOrderByWithRelationInput.schema';
import { CartItemWhereInputObjectSchema as CartItemWhereInputObjectSchema } from './objects/CartItemWhereInput.schema';
import { CartItemWhereUniqueInputObjectSchema as CartItemWhereUniqueInputObjectSchema } from './objects/CartItemWhereUniqueInput.schema';
import { CartItemScalarFieldEnumSchema } from './enums/CartItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CartItemFindManySelectSchema: z.ZodType<any> = z.object({
    id: z.boolean().optional(),
    cart: z.boolean().optional(),
    cartId: z.boolean().optional(),
    product: z.boolean().optional(),
    productId: z.boolean().optional(),
    size: z.boolean().optional(),
    quantity: z.boolean().optional(),
    productName: z.boolean().optional(),
    productPrice: z.boolean().optional(),
    productDescription: z.boolean().optional(),
    productImage: z.boolean().optional()
  }).strict() as unknown as z.ZodType<any>;

export const CartItemFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    cart: z.boolean().optional(),
    cartId: z.boolean().optional(),
    product: z.boolean().optional(),
    productId: z.boolean().optional(),
    size: z.boolean().optional(),
    quantity: z.boolean().optional(),
    productName: z.boolean().optional(),
    productPrice: z.boolean().optional(),
    productDescription: z.boolean().optional(),
    productImage: z.boolean().optional()
  }).strict();

export const CartItemFindManySchema: z.ZodType<any> = z.object({ select: CartItemFindManySelectSchema.optional(), include: z.lazy(() => CartItemIncludeObjectSchema.optional()), orderBy: z.union([CartItemOrderByWithRelationInputObjectSchema, CartItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: CartItemWhereInputObjectSchema.optional(), cursor: CartItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CartItemScalarFieldEnumSchema, CartItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<any>;

export const CartItemFindManyZodSchema = z.object({ select: CartItemFindManySelectSchema.optional(), include: z.lazy(() => CartItemIncludeObjectSchema.optional()), orderBy: z.union([CartItemOrderByWithRelationInputObjectSchema, CartItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: CartItemWhereInputObjectSchema.optional(), cursor: CartItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CartItemScalarFieldEnumSchema, CartItemScalarFieldEnumSchema.array()]).optional() }).strict();