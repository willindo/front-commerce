"use client";

import { useProduct } from "@/hooks/useProducts";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useProduct(id as string);

  if (isLoading) return <p>Loading...</p>;
  if (error || !product) return <p>Product not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg">${product.price}</p>
      <p>Stock: {product.stock}</p>
      {product.description && <p className="mt-2">{product.description}</p>}
    </div>
  );
}
