import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchProducts } from "@/lib/api/products";
import AdminProductList from "./AdminProductList";
import { useAdminRoute } from "@/hooks/useAdminRoute"; // ✅ Your existing route guard

export default async function AdminProductsPage() {
  const qc = new QueryClient();
  await qc.prefetchQuery({
    queryKey: ["products", 1],
    queryFn: () => fetchProducts(1, 10),
  });

  // ✅ SSR Hydrated & protected
  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <AdminProductList />
    </HydrationBoundary>
  );
}
