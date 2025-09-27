import axios from "axios";
import {
  ProductResponseDto,
  CreateProductDto,
  UpdateProductDto,
} from "../types/product";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function fetchProducts(page = 0, limit = 20) {
  const res = await axios.get<{ data: ProductResponseDto[]; total: number }>(
    `${API_URL}/products?page=${page}&limit=${limit}`
  );
  return res.data;
}

export async function fetchProduct(id: string) {
  const res = await axios.get<ProductResponseDto>(`${API_URL}/products/${id}`);
  return res.data;
}

export async function createProduct(data: CreateProductDto) {
  const res = await axios.post<ProductResponseDto>(`${API_URL}/products`, data);
  return res.data;
}

export async function updateProduct(id: string, data: UpdateProductDto) {
  const res = await axios.put<ProductResponseDto>(
    `${API_URL}/products/${id}`,
    data
  );
  return res.data;
}

export async function deleteProduct(id: string) {
  const res = await axios.delete<ProductResponseDto>(
    `${API_URL}/products/${id}`
  );
  return res.data;
}
