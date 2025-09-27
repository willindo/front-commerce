"use client";
import Link from "next/link";
import { useState } from "react";
import { useProducts, useDeleteProduct } from "@/hooks/useProducts";

export default function ProductsPage() {
  const [page, setPage] = useState(0);
  const { data, isLoading } = useProducts(page, 10);
  const deleteMutation = useDeleteProduct();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Products</h1>
      <Link
        href="/products/new"
        className="bg-green-600 text-white px-3 py-1 rounded"
      >
        + New Product
      </Link>
      <ul className="mt-4 space-y-2">
        {data?.data.map((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center border p-2"
          >
            <Link href={`/products/${p.id}`} className="font-medium">
              {p.name} (${p.price})
            </Link>
            <div className="space-x-2">
              <Link href={`/products/${p.id}/edit`} className="text-blue-600">
                Edit
              </Link>
              <button
                onClick={() => deleteMutation.mutate(p.id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* Pagination */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
        >
          Prev
        </button>
        <span>Page {page + 1}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={data && data.data.length < 10}
        >
          Next
        </button>
      </div>
    </div>
  );
}
