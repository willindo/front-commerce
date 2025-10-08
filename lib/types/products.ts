// lib/types/products.ts
import { z } from "zod";
export type Product = {
  id: string;
  name: string;
  price: number;
  stock?: number;
  description?: string;
  images?: string[];
};

import {
  ProductModelSchema,
  ProductCreateInputObjectSchema,
  ProductUpdateInputObjectSchema,
} from "../../src/generated/zod/schemas";

// DTOs matching NestJS Zod validation
export const CreateProductDto = ProductCreateInputObjectSchema;
export type CreateProductDto = z.infer<typeof CreateProductDto>;

export const UpdateProductDto = ProductUpdateInputObjectSchema;
export type UpdateProductDto = z.infer<typeof UpdateProductDto>;

export const ProductResponseDto = ProductModelSchema;
export type ProductResponseDto = z.infer<typeof ProductResponseDto>;

// For paginated response
export interface PaginatedProducts {
  data: ProductResponseDto[];
  total: number;
}
