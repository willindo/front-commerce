// hooks/useProducts.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  Product,
  PaginatedProducts,
} from "@/lib/api/products";

// ✅ Fetch paginated products
export function useProducts(page = 1, limit = 10) {
  return useQuery<PaginatedProducts, Error>({
    queryKey: ["products", page, limit],
    queryFn: () => fetchProducts(page, limit),
  });
}

// ✅ Fetch single product
export function useProduct(id: string) {
  return useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });
}

// ✅ Create product
export function useCreateProduct() {
  const qc = useQueryClient();
  return useMutation<
    Product,
    Error,
    Omit<Product, "id" | "createdAt" | "updatedAt">
  >({
    mutationFn: createProduct,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
}

// ✅ Update product
export function useUpdateProduct() {
  const qc = useQueryClient();
  return useMutation<Product, Error, { id: string; data: Partial<Product> }>({
    mutationFn: ({ id, data }) => updateProduct(id, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
}

// ✅ Delete product
export function useDeleteProduct() {
  const qc = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: deleteProduct,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["products"] }),
  });
}
