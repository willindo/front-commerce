"use client";

import { useProduct } from "@/hooks/useProducts";

export default function ProductDetail({ id }: { id: string }) {
  const { data, isLoading } = useProduct(id);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Product not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
      <p className="text-lg">₹{data.price}</p>
      <p className="mt-2 text-gray-600">{data.description}</p>
      <p className="mt-2 text-sm text-gray-400">Stock: {data.stock ?? 0}</p>
    </div>
  );
}
