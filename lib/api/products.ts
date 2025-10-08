import { api } from "./axios";
import { Product } from "@/lib/types/products"; // ✅ Use shared Product type

export type PaginatedProducts = {
  data: Product[];
  total: number;
  page: number;
  limit: number;
};

// ✅ Support pagination (page, limit)
export async function fetchProducts(
  page = 1,
  limit = 10
): Promise<PaginatedProducts> {
  const { data } = await api.get("/products", { params: { page, limit } });
  return data;
}

export async function fetchProductById(id: string): Promise<Product> {
  const { data } = await api.get(`/products/${id}`);
  return data;
}

export async function createProduct(
  product: Omit<Product, "id">
): Promise<Product> {
  const { data } = await api.post("/products", product);
  return data;
}

export async function updateProduct(
  id: string,
  product: Partial<Product>
): Promise<Product> {
  const { data } = await api.put(`/products/${id}`, product);
  return data;
}

export async function deleteProduct(id: string): Promise<void> {
  await api.delete(`/products/${id}`);
}
