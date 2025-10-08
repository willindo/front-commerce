"use client";

import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/shop/ProductCard";
import Filters from "@/components/shop/Filters";
import { addToCart } from "@/lib/api/cart";

export default function ShopPage() {
  const [page, setPage] = useState(1);
  const limit = 9;

  // ✅ Fetch products using React Query hook
  const { data, isLoading, isError } = useProducts(page, limit);
  const products = data?.data || [];
  const total = data?.total || 0;

  const handleAddToCart = async (productId: string) => {
    try {
      await addToCart(productId, 1);
      alert("✅ Product added to cart!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add product to cart");
    }
  };

  // 🌀 Loading and error states
  if (isLoading)
    return (
      <p className="text-center p-10 text-gray-600">Loading products...</p>
    );
  if (isError)
    return (
      <p className="text-center p-10 text-red-500">Failed to load products.</p>
    );

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Sidebar Filters */}
      <aside className="md:col-span-1 border p-4 rounded h-fit">
        <Filters />
      </aside>

      {/* Product Grid */}
      <main className="md:col-span-3">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">🛍️ Shop Products</h1>
          <select className="border p-2 rounded">
            <option>Sort: Newest</option>
            <option>Price: Low → High</option>
            <option>Price: High → Low</option>
          </select>
        </div>

        {products.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={() => handleAddToCart(p.id)}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 border rounded"
            disabled={page === 1}
          >
            Prev
          </button>
          <span>
            Page {page} / {totalPages || 1}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            className="px-3 py-1 border rounded"
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
