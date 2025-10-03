// hooks/useProducts.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/lib/api/products";
import {
  ProductResponseDto,
  CreateProductDto,
  UpdateProductDto,
  PaginatedProducts,
} from "@/lib/types/products";

export function useProducts(page: number, limit: number) {
  return useQuery<PaginatedProducts, Error>({
    queryKey: ["products", page, limit],
    queryFn: () => fetchProducts(page, limit),
  });
}

export function useProduct(id: string) {
  return useQuery<ProductResponseDto, Error>({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  });
}

export function useCreateProduct() {
  const qc = useQueryClient();
  return useMutation<ProductResponseDto, Error, CreateProductDto>({
    mutationFn: createProduct,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
}

export function useUpdateProduct() {
  const qc = useQueryClient();
  return useMutation<
    ProductResponseDto,
    Error,
    { id: string; data: UpdateProductDto }
  >({
    mutationFn: ({ id, data }) => updateProduct(id, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
}

export function useDeleteProduct() {
  const qc = useQueryClient();
  return useMutation<ProductResponseDto, Error, string>({
    mutationFn: deleteProduct,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
}
