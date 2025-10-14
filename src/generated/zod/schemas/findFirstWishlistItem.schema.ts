import * as z from 'zod';
import { WishlistItemIncludeObjectSchema as WishlistItemIncludeObjectSchema } from './objects/WishlistItemInclude.schema';
import { WishlistItemOrderByWithRelationInputObjectSchema as WishlistItemOrderByWithRelationInputObjectSchema } from './objects/WishlistItemOrderByWithRelationInput.schema';
import { WishlistItemWhereInputObjectSchema as WishlistItemWhereInputObjectSchema } from './objects/WishlistItemWhereInput.schema';
import { WishlistItemWhereUniqueInputObjectSchema as WishlistItemWhereUniqueInputObjectSchema } from './objects/WishlistItemWhereUniqueInput.schema';
import { WishlistItemScalarFieldEnumSchema } from './enums/WishlistItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WishlistItemFindFirstSelectSchema: z.ZodType<any> = z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    wishlistId: z.boolean().optional(),
    product: z.boolean().optional(),
    wishlist: z.boolean().optional()
  }).strict() as unknown as z.ZodType<any>;

export const WishlistItemFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    wishlistId: z.boolean().optional(),
    product: z.boolean().optional(),
    wishlist: z.boolean().optional()
  }).strict();

export const WishlistItemFindFirstSchema: z.ZodType<any> = z.object({ select: WishlistItemFindFirstSelectSchema.optional(), include: WishlistItemIncludeObjectSchema.optional(), orderBy: z.union([WishlistItemOrderByWithRelationInputObjectSchema, WishlistItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: WishlistItemWhereInputObjectSchema.optional(), cursor: WishlistItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WishlistItemScalarFieldEnumSchema, WishlistItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<any>;

export const WishlistItemFindFirstZodSchema = z.object({ select: WishlistItemFindFirstSelectSchema.optional(), include: WishlistItemIncludeObjectSchema.optional(), orderBy: z.union([WishlistItemOrderByWithRelationInputObjectSchema, WishlistItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: WishlistItemWhereInputObjectSchema.optional(), cursor: WishlistItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WishlistItemScalarFieldEnumSchema, WishlistItemScalarFieldEnumSchema.array()]).optional() }).strict();