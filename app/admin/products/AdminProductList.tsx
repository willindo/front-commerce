"use client";

import Link from "next/link";
import { useProducts, useDeleteProduct } from "@/hooks/useProducts";
import { useAdminRoute } from "@/hooks/useAdminRoute";

export default function AdminProductList() {
  useAdminRoute(); // ✅ Redirects if not admin
  const { data, isLoading } = useProducts(1);
  const deleteMutation = useDeleteProduct();

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No products found.</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Admin Products</h1>
        <Link
          href="/products/new"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + New Product
        </Link>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Stock</th>
            <th className="p-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.name}</td>
              <td className="p-2">₹{p.price}</td>
              <td className="p-2">{p.stock ?? 0}</td>
              <td className="p-2 text-right space-x-2">
                <Link
                  href={`/products/${p.id}/edit`}
                  className="px-3 py-1 bg-yellow-400 text-black rounded"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteMutation.mutate(p.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
