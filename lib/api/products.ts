import axios from "axios";
import { api } from "./axios";
import {
  ProductResponseDto,
  CreateProductDto,
  UpdateProductDto,
} from "../types/products";

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export async function fetchProducts(page = 0, limit = 20) {
  const res = await api.get<{ data: ProductResponseDto[]; total: number }>(
    `/products?page=${page}&limit=${limit}`
  );
  return res.data;
}

export async function fetchProduct(id: string) {
  const res = await api.get<ProductResponseDto>(`/products/${id}`);
  return res.data;
}

export async function createProduct(data: CreateProductDto) {
  const res = await api.post<ProductResponseDto>("/products", data);
  return res.data;
}

export async function updateProduct(id: string, data: UpdateProductDto) {
  const res = await api.put<ProductResponseDto>(`/products/${id}`, data);
  return res.data;
}

export async function deleteProduct(id: string) {
  const res = await api.delete<ProductResponseDto>(`/products/${id}`);
  return res.data;
}
