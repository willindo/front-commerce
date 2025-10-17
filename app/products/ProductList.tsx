"use client";

import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";

export default function ProductList() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useProducts(page);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No products found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Products</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.data.map((p) => (
          <div key={p.id} className="border rounded-lg p-4">
            <h2 className="font-bold">{p.name}</h2>
            <p>₹{p.price}</p>
            <p className="text-sm text-gray-500">Stock: {p.stock ?? 0}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Prev
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
