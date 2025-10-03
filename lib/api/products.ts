// lib/api/products.ts
import { api } from "./axios";
import {
  ProductResponseDto,
  CreateProductDto,
  UpdateProductDto,
  PaginatedProducts,
} from "../types/products";

export async function fetchProducts(
  page = 0,
  limit = 20
): Promise<PaginatedProducts> {
  const res = await api.get<PaginatedProducts>(
    `/products?page=${page}&limit=${limit}`
  );
  return res.data;
}

export async function fetchProduct(id: string): Promise<ProductResponseDto> {
  const res = await api.get<ProductResponseDto>(`/products/${id}`);
  return res.data;
}

export async function createProduct(
  data: CreateProductDto
): Promise<ProductResponseDto> {
  const res = await api.post<ProductResponseDto>("/products", data);
  return res.data;
}

export async function updateProduct(
  id: string,
  data: UpdateProductDto
): Promise<ProductResponseDto> {
  const res = await api.put<ProductResponseDto>(`/products/${id}`, data);
  return res.data;
}

export async function deleteProduct(id: string): Promise<ProductResponseDto> {
  const res = await api.delete<ProductResponseDto>(`/products/${id}`);
  return res.data;
}
