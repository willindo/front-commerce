// lib/api/products.ts
import { api } from "./axios";

export type Product = {
  id: string;
  name: string;
  price: number;
  description?: string | null;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export async function fetchProducts(): Promise<Product[]> {
  const { data } = await api.get("/products");
  return data;
}

export async function fetchProductById(id: string): Promise<Product> {
  const { data } = await api.get(`/products/${id}`);
  return data;
}

export async function createProduct(
  product: Omit<Product, "id" | "createdAt" | "updatedAt">
): Promise<Product> {
  const { data } = await api.post("/products", product);
  return data;
}

export async function deleteProduct(id: string): Promise<void> {
  await api.delete(`/products/${id}`);
}
