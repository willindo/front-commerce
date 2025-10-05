import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProductSizeOrderByWithRelationInputObjectSchema as ProductSizeOrderByWithRelationInputObjectSchema } from './objects/ProductSizeOrderByWithRelationInput.schema';
import { ProductSizeWhereInputObjectSchema as ProductSizeWhereInputObjectSchema } from './objects/ProductSizeWhereInput.schema';
import { ProductSizeWhereUniqueInputObjectSchema as ProductSizeWhereUniqueInputObjectSchema } from './objects/ProductSizeWhereUniqueInput.schema';
import { ProductSizeCountAggregateInputObjectSchema as ProductSizeCountAggregateInputObjectSchema } from './objects/ProductSizeCountAggregateInput.schema';

export const ProductSizeCountSchema: z.ZodType<Prisma.ProductSizeCountArgs> = z.object({ orderBy: z.union([ProductSizeOrderByWithRelationInputObjectSchema, ProductSizeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductSizeWhereInputObjectSchema.optional(), cursor: ProductSizeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProductSizeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ProductSizeCountArgs>;

export const ProductSizeCountZodSchema = z.object({ orderBy: z.union([ProductSizeOrderByWithRelationInputObjectSchema, ProductSizeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProductSizeWhereInputObjectSchema.optional(), cursor: ProductSizeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProductSizeCountAggregateInputObjectSchema ]).optional() }).strict();