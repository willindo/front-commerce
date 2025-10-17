import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchProductById } from "@/lib/api/products";
import ProductDetail from "./ProductDetail";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const qc = new QueryClient();
  await qc.prefetchQuery({
    queryKey: ["product", params.id],
    queryFn: () => fetchProductById(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <ProductDetail id={params.id} />
    </HydrationBoundary>
  );
}
